import * as Re from "react";
import Tn, { useMemo as Jn, useContext as Za, useRef as es } from "react";
var Nc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function ns() {
  if (Wr)
    return kt;
  Wr = 1;
  var e = Tn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return kt.Fragment = n, kt.jsx = s, kt.jsxs = s, kt;
}
var xt = {};
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
function rs() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Tn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.iterator, b = "@@iterator";
    function I(f) {
      if (f === null || typeof f != "object")
        return null;
      var g = h && f[h] || f[b];
      return typeof g == "function" ? g : null;
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++)
          v[E - 1] = arguments[E];
        N("error", f, v);
      }
    }
    function N(f, g, v) {
      {
        var E = A.ReactDebugCurrentFrame, $ = E.getStackAddendum();
        $ !== "" && (g += "%s", v = v.concat([$]));
        var U = v.map(function(C) {
          return String(C);
        });
        U.unshift("Warning: " + g), Function.prototype.apply.call(console[f], console, U);
      }
    }
    var m = !1, O = !1, S = !1, B = !1, Ge = !1, rt;
    rt = Symbol.for("react.module.reference");
    function it(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === a || Ge || f === i || f === l || f === c || B || f === y || m || O || S || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === p || f.$$typeof === s || f.$$typeof === o || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === rt || f.getModuleId !== void 0));
    }
    function Kt(f, g, v) {
      var E = f.displayName;
      if (E)
        return E;
      var $ = g.displayName || g.name || "";
      return $ !== "" ? v + "(" + $ + ")" : v;
    }
    function Nt(f) {
      return f.displayName || "Context";
    }
    function Pe(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
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
            var g = f;
            return Nt(g) + ".Consumer";
          case s:
            var v = f;
            return Nt(v._context) + ".Provider";
          case u:
            return Kt(f, f.render, "ForwardRef");
          case p:
            var E = f.displayName || null;
            return E !== null ? E : Pe(f.type) || "Memo";
          case d: {
            var $ = f, U = $._payload, C = $._init;
            try {
              return Pe(C(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, Q = 0, q, F, J, Ce, M, Me, Be;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function ze() {
      {
        if (Q === 0) {
          q = console.log, F = console.info, J = console.warn, Ce = console.error, M = console.group, Me = console.groupCollapsed, Be = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
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
        Q++;
      }
    }
    function ne() {
      {
        if (Q--, Q === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, f, {
              value: q
            }),
            info: _({}, f, {
              value: F
            }),
            warn: _({}, f, {
              value: J
            }),
            error: _({}, f, {
              value: Ce
            }),
            group: _({}, f, {
              value: M
            }),
            groupCollapsed: _({}, f, {
              value: Me
            }),
            groupEnd: _({}, f, {
              value: Be
            })
          });
        }
        Q < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = A.ReactCurrentDispatcher, Xt;
    function at(f, g, v) {
      {
        if (Xt === void 0)
          try {
            throw Error();
          } catch ($) {
            var E = $.stack.trim().match(/\n( *(at )?)/);
            Xt = E && E[1] || "";
          }
        return `
` + Xt + f;
      }
    }
    var Dn = !1, Zt;
    {
      var ka = typeof WeakMap == "function" ? WeakMap : Map;
      Zt = new ka();
    }
    function Dr(f, g) {
      if (!f || Dn)
        return "";
      {
        var v = Zt.get(f);
        if (v !== void 0)
          return v;
      }
      var E;
      Dn = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = K.current, K.current = null, ze();
      try {
        if (g) {
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
              E = qe;
            }
            Reflect.construct(f, [], C);
          } else {
            try {
              C.call();
            } catch (qe) {
              E = qe;
            }
            f.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            E = qe;
          }
          f();
        }
      } catch (qe) {
        if (qe && E && typeof qe.stack == "string") {
          for (var j = qe.stack.split(`
`), de = E.stack.split(`
`), X = j.length - 1, ee = de.length - 1; X >= 1 && ee >= 0 && j[X] !== de[ee]; )
            ee--;
          for (; X >= 1 && ee >= 0; X--, ee--)
            if (j[X] !== de[ee]) {
              if (X !== 1 || ee !== 1)
                do
                  if (X--, ee--, ee < 0 || j[X] !== de[ee]) {
                    var Ae = `
` + j[X].replace(" at new ", " at ");
                    return f.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", f.displayName)), typeof f == "function" && Zt.set(f, Ae), Ae;
                  }
                while (X >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        Dn = !1, K.current = U, ne(), Error.prepareStackTrace = $;
      }
      var ot = f ? f.displayName || f.name : "", Qr = ot ? at(ot) : "";
      return typeof f == "function" && Zt.set(f, Qr), Qr;
    }
    function xa(f, g, v) {
      return Dr(f, !1);
    }
    function ja(f) {
      var g = f.prototype;
      return !!(g && g.isReactComponent);
    }
    function en(f, g, v) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Dr(f, ja(f));
      if (typeof f == "string")
        return at(f);
      switch (f) {
        case l:
          return at("Suspense");
        case c:
          return at("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return xa(f.render);
          case p:
            return en(f.type, g, v);
          case d: {
            var E = f, $ = E._payload, U = E._init;
            try {
              return en(U($), g, v);
            } catch {
            }
          }
        }
      return "";
    }
    var tn = Object.prototype.hasOwnProperty, Fr = {}, Cr = A.ReactDebugCurrentFrame;
    function nn(f) {
      if (f) {
        var g = f._owner, v = en(f.type, f._source, g ? g.type : null);
        Cr.setExtraStackFrame(v);
      } else
        Cr.setExtraStackFrame(null);
    }
    function Da(f, g, v, E, $) {
      {
        var U = Function.call.bind(tn);
        for (var C in f)
          if (U(f, C)) {
            var j = void 0;
            try {
              if (typeof f[C] != "function") {
                var de = Error((E || "React class") + ": " + v + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              j = f[C](g, C, E, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              j = X;
            }
            j && !(j instanceof Error) && (nn($), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", v, C, typeof j), nn(null)), j instanceof Error && !(j.message in Fr) && (Fr[j.message] = !0, nn($), T("Failed %s type: %s", v, j.message), nn(null));
          }
      }
    }
    var Fa = Array.isArray;
    function Fn(f) {
      return Fa(f);
    }
    function Ca(f) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, v = g && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return v;
      }
    }
    function Ra(f) {
      try {
        return Rr(f), !1;
      } catch {
        return !0;
      }
    }
    function Rr(f) {
      return "" + f;
    }
    function Vr(f) {
      if (Ra(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ca(f)), Rr(f);
    }
    var _t = A.ReactCurrentOwner, Va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, Mr, Cn;
    Cn = {};
    function $a(f) {
      if (tn.call(f, "ref")) {
        var g = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ma(f) {
      if (tn.call(f, "key")) {
        var g = Object.getOwnPropertyDescriptor(f, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function qa(f, g) {
      if (typeof f.ref == "string" && _t.current && g && _t.current.stateNode !== g) {
        var v = Pe(_t.current.type);
        Cn[v] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(_t.current.type), f.ref), Cn[v] = !0);
      }
    }
    function La(f, g) {
      {
        var v = function() {
          $r || ($r = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Ua(f, g) {
      {
        var v = function() {
          Mr || (Mr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Ga = function(f, g, v, E, $, U, C) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: g,
        ref: v,
        props: C,
        // Record the component responsible for creating this element.
        _owner: U
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
        value: E
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Ba(f, g, v, E, $) {
      {
        var U, C = {}, j = null, de = null;
        v !== void 0 && (Vr(v), j = "" + v), Ma(g) && (Vr(g.key), j = "" + g.key), $a(g) && (de = g.ref, qa(g, $));
        for (U in g)
          tn.call(g, U) && !Va.hasOwnProperty(U) && (C[U] = g[U]);
        if (f && f.defaultProps) {
          var X = f.defaultProps;
          for (U in X)
            C[U] === void 0 && (C[U] = X[U]);
        }
        if (j || de) {
          var ee = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          j && La(C, ee), de && Ua(C, ee);
        }
        return Ga(f, j, de, $, E, _t.current, C);
      }
    }
    var Rn = A.ReactCurrentOwner, qr = A.ReactDebugCurrentFrame;
    function st(f) {
      if (f) {
        var g = f._owner, v = en(f.type, f._source, g ? g.type : null);
        qr.setExtraStackFrame(v);
      } else
        qr.setExtraStackFrame(null);
    }
    var Vn;
    Vn = !1;
    function $n(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Lr() {
      {
        if (Rn.current) {
          var f = Pe(Rn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function za(f) {
      {
        if (f !== void 0) {
          var g = f.fileName.replace(/^.*[\\\/]/, ""), v = f.lineNumber;
          return `

Check your code at ` + g + ":" + v + ".";
        }
        return "";
      }
    }
    var Ur = {};
    function Qa(f) {
      {
        var g = Lr();
        if (!g) {
          var v = typeof f == "string" ? f : f.displayName || f.name;
          v && (g = `

Check the top-level render call using <` + v + ">.");
        }
        return g;
      }
    }
    function Gr(f, g) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var v = Qa(g);
        if (Ur[v])
          return;
        Ur[v] = !0;
        var E = "";
        f && f._owner && f._owner !== Rn.current && (E = " It was passed a child from " + Pe(f._owner.type) + "."), st(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, E), st(null);
      }
    }
    function Br(f, g) {
      {
        if (typeof f != "object")
          return;
        if (Fn(f))
          for (var v = 0; v < f.length; v++) {
            var E = f[v];
            $n(E) && Gr(E, g);
          }
        else if ($n(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var $ = I(f);
          if (typeof $ == "function" && $ !== f.entries)
            for (var U = $.call(f), C; !(C = U.next()).done; )
              $n(C.value) && Gr(C.value, g);
        }
      }
    }
    function Wa(f) {
      {
        var g = f.type;
        if (g == null || typeof g == "string")
          return;
        var v;
        if (typeof g == "function")
          v = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          v = g.propTypes;
        else
          return;
        if (v) {
          var E = Pe(g);
          Da(v, f.props, "prop", E, f);
        } else if (g.PropTypes !== void 0 && !Vn) {
          Vn = !0;
          var $ = Pe(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ja(f) {
      {
        for (var g = Object.keys(f.props), v = 0; v < g.length; v++) {
          var E = g[v];
          if (E !== "children" && E !== "key") {
            st(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), st(null);
            break;
          }
        }
        f.ref !== null && (st(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    function zr(f, g, v, E, $, U) {
      {
        var C = it(f);
        if (!C) {
          var j = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = za($);
          de ? j += de : j += Lr();
          var X;
          f === null ? X = "null" : Fn(f) ? X = "array" : f !== void 0 && f.$$typeof === t ? (X = "<" + (Pe(f.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : X = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, j);
        }
        var ee = Ba(f, g, v, $, U);
        if (ee == null)
          return ee;
        if (C) {
          var Ae = g.children;
          if (Ae !== void 0)
            if (E)
              if (Fn(Ae)) {
                for (var ot = 0; ot < Ae.length; ot++)
                  Br(Ae[ot], f);
                Object.freeze && Object.freeze(Ae);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Br(Ae, f);
        }
        return f === r ? Ja(ee) : Wa(ee), ee;
      }
    }
    function Ya(f, g, v) {
      return zr(f, g, v, !0);
    }
    function Ha(f, g, v) {
      return zr(f, g, v, !1);
    }
    var Ka = Ha, Xa = Ya;
    xt.Fragment = r, xt.jsx = Ka, xt.jsxs = Xa;
  }()), xt;
}
process.env.NODE_ENV === "production" ? Yn.exports = ns() : Yn.exports = rs();
var Yr = Yn.exports, Ct;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Ct || (Ct = {}));
const is = {
  DateTime(e) {
    return new Date(e);
  }
};
class as {
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
      a != null && (n[r] = is[i](a));
    }
    return n;
  }
}
function Y(e, t) {
  if (!!!e)
    throw new Error(t);
}
function qt(e) {
  return typeof e == "object" && e !== null;
}
function Vi(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const ss = /\r\n|[\n\r]/g;
function Hn(e, t) {
  let n = 0, r = 1;
  for (const i of e.body.matchAll(ss)) {
    if (typeof i.index == "number" || Vi(!1), i.index >= t)
      break;
    n = i.index + i[0].length, r += 1;
  }
  return {
    line: r,
    column: t + 1 - n
  };
}
function os(e) {
  return $i(
    e.source,
    Hn(e.source, e.start)
  );
}
function $i(e, t) {
  const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${s}:${u}
`, c = r.split(/\r\n|[\n\r]/g), p = c[i];
  if (p.length > 120) {
    const d = Math.floor(u / 80), y = u % 80, h = [];
    for (let b = 0; b < p.length; b += 80)
      h.push(p.slice(b, b + 80));
    return l + Hr([
      [`${s} |`, h[0]],
      ...h.slice(1, d + 1).map((b) => ["|", b]),
      ["|", "^".padStart(y)],
      ["|", h[d + 1]]
    ]);
  }
  return l + Hr([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[i - 1]],
    [`${s} |`, p],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[i + 1]]
  ]);
}
function Hr(e) {
  const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function us(e) {
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
let R = class Mi extends Error {
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
    const { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: p } = us(n);
    super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Kr(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = Kr(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map((h) => h.loc).filter((h) => h != null)
    );
    this.source = o ?? (d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source), this.positions = u ?? (d == null ? void 0 : d.map((h) => h.start)), this.locations = u && o ? u.map((h) => Hn(o, h)) : d == null ? void 0 : d.map((h) => Hn(h.source, h.start));
    const y = qt(
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Mi) : Object.defineProperty(this, "stack", {
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

` + os(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + $i(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function Kr(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const qi = {
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
}, ls = new Set(Object.keys(qi));
function Xr(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && ls.has(t);
}
var Zr;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Zr || (Zr = {}));
var Ie;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Ie || (Ie = {}));
var L;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(L || (L = {}));
function ei(e) {
  return e === 9 || e === 32;
}
function cs(e) {
  return e >= 48 && e <= 57;
}
function Li(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function fs(e) {
  return Li(e) || e === 95;
}
function ds(e) {
  return Li(e) || cs(e) || e === 95;
}
function ps(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1, a = r.length > 1 && r.slice(1).every((y) => y.length === 0 || ei(y.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, u = e.endsWith("\\"), l = o || u, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || l || a || s);
  let p = "";
  const d = i && ei(e.charCodeAt(0));
  return (c && !d || a) && (p += `
`), p += n, (c || l) && (p += `
`), '"""' + p + '"""';
}
const hs = 10, Ui = 2;
function G(e) {
  return In(e, []);
}
function In(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return ys(e, t);
    default:
      return String(e);
  }
}
function ys(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (ms(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : In(r, n);
  } else if (Array.isArray(e))
    return bs(e, n);
  return gs(e, n);
}
function ms(e) {
  return typeof e.toJSON == "function";
}
function gs(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Ui ? "[" + vs(e) + "]" : "{ " + n.map(
    ([i, a]) => i + ": " + In(a, t)
  ).join(", ") + " }";
}
function bs(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Ui)
    return "[Array]";
  const n = Math.min(hs, e.length), r = e.length - n, i = [];
  for (let a = 0; a < n; ++a)
    i.push(In(e[a], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function vs(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Je = (
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
        const s = G(t);
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
), Ss = 5;
function ws(e, t) {
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
  const s = a.slice(0, Ss), o = s.pop();
  return i + s.join(", ") + ", or " + o + "?";
}
function ti(e) {
  return e;
}
function mr(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[t(r)] = r;
  return n;
}
function gr(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    r[t(i)] = n(i);
  return r;
}
function On(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of Object.keys(e))
    n[r] = t(e[r], r);
  return n;
}
function Ts(e, t) {
  let n = 0, r = 0;
  for (; n < e.length && r < t.length; ) {
    let i = e.charCodeAt(n), a = t.charCodeAt(r);
    if (rn(i) && rn(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + i - Kn, i = e.charCodeAt(n);
      while (rn(i) && s > 0);
      let o = 0;
      do
        ++r, o = o * 10 + a - Kn, a = t.charCodeAt(r);
      while (rn(a) && o > 0);
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
const Kn = 48, Is = 57;
function rn(e) {
  return !isNaN(e) && Kn <= e && e <= Is;
}
function Os(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = new Es(e), i = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = r.measure(a, i);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const o = n[a] - n[s];
    return o !== 0 ? o : Ts(a, s);
  });
}
class Es {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = ni(this._inputLowerCase), this._rows = [
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
    let i = ni(r), a = this._inputArray;
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
        const b = i[c - 1] === a[h - 1] ? 0 : 1;
        let I = Math.min(
          p[h] + 1,
          // delete
          d[h - 1] + 1,
          // insert
          p[h - 1] + b
          // substitute
        );
        if (c > 1 && h > 1 && i[c - 1] === a[h - 2] && i[c - 2] === a[h - 1]) {
          const A = u[(c - 2) % 3][h - 2];
          I = Math.min(I, A + 1);
        }
        I < y && (y = I), d[h] = I;
      }
      if (y > n)
        return;
    }
    const l = u[s % 3][o];
    return l <= n ? l : void 0;
  }
}
function ni(e) {
  const t = e.length, n = new Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = e.charCodeAt(r);
  return n;
}
function je(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, r] of Object.entries(e))
    t[n] = r;
  return t;
}
function Ps(e) {
  return `"${e.replace(As, Ns)}"`;
}
const As = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ns(e) {
  return _s[e.charCodeAt(0)];
}
const _s = [
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
], ks = Object.freeze({});
function xs(e, t, n = qi) {
  const r = /* @__PURE__ */ new Map();
  for (const A of Object.values(L))
    r.set(A, js(t, A));
  let i, a = Array.isArray(e), s = [e], o = -1, u = [], l = e, c, p;
  const d = [], y = [];
  do {
    o++;
    const A = o === s.length, T = A && u.length !== 0;
    if (A) {
      if (c = y.length === 0 ? void 0 : d[d.length - 1], l = p, p = y.pop(), T)
        if (a) {
          l = l.slice();
          let m = 0;
          for (const [O, S] of u) {
            const B = O - m;
            S === null ? (l.splice(B, 1), m++) : l[B] = S;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [m, O] of u)
            l[m] = O;
        }
      o = i.index, s = i.keys, u = i.edits, a = i.inArray, i = i.prev;
    } else if (p) {
      if (c = a ? o : s[o], l = p[c], l == null)
        continue;
      d.push(c);
    }
    let N;
    if (!Array.isArray(l)) {
      var h, b;
      Xr(l) || Y(!1, `Invalid AST Node: ${G(l)}.`);
      const m = A ? (h = r.get(l.kind)) === null || h === void 0 ? void 0 : h.leave : (b = r.get(l.kind)) === null || b === void 0 ? void 0 : b.enter;
      if (N = m == null ? void 0 : m.call(t, l, c, p, d, y), N === ks)
        break;
      if (N === !1) {
        if (!A) {
          d.pop();
          continue;
        }
      } else if (N !== void 0 && (u.push([c, N]), !A))
        if (Xr(N))
          l = N;
        else {
          d.pop();
          continue;
        }
    }
    if (N === void 0 && T && u.push([c, l]), A)
      d.pop();
    else {
      var I;
      i = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: i
      }, a = Array.isArray(l), s = a ? l : (I = n[l.kind]) !== null && I !== void 0 ? I : [], o = -1, u = [], p && y.push(p), p = l;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function js(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Qe(e) {
  return xs(e, Fs);
}
const Ds = 80, Fs = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => w(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = D("(", w(e.variableDefinitions, ", "), ")"), n = w(
        [
          e.operation,
          w([e.name, t]),
          w(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + D(" = ", n) + D(" ", w(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => ke(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
      const a = D("", e, ": ") + t;
      let s = a + D("(", w(n, ", "), ")");
      return s.length > Ds && (s = a + D(`(
`, fn(w(n, `
`)), `
)`)), w([s, w(r, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + D(" ", w(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => w(
      [
        "...",
        D("on ", e),
        w(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${D("(", w(n, ", "), ")")} on ${t} ${D("", w(r, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? ps(e) : Ps(e)
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
    leave: ({ values: e }) => "[" + w(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + w(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + D("(", w(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => D("", e, `
`) + w(["schema", w(t, " "), ke(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => D("", e, `
`) + w(["scalar", t, w(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => D("", e, `
`) + w(
      [
        "type",
        t,
        D("implements ", w(n, " & ")),
        w(r, " "),
        ke(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => D("", e, `
`) + t + (ri(n) ? D(`(
`, fn(w(n, `
`)), `
)`) : D("(", w(n, ", "), ")")) + ": " + r + D(" ", w(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => D("", e, `
`) + w(
      [t + ": " + n, D("= ", r), w(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => D("", e, `
`) + w(
      [
        "interface",
        t,
        D("implements ", w(n, " & ")),
        w(r, " "),
        ke(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => D("", e, `
`) + w(
      ["union", t, w(n, " "), D("= ", w(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => D("", e, `
`) + w(["enum", t, w(n, " "), ke(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => D("", e, `
`) + w([t, w(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => D("", e, `
`) + w(["input", t, w(n, " "), ke(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) => D("", e, `
`) + "directive @" + t + (ri(n) ? D(`(
`, fn(w(n, `
`)), `
)`) : D("(", w(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + w(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => w(
      ["extend schema", w(e, " "), ke(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => w(["extend scalar", e, w(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => w(
      [
        "extend type",
        e,
        D("implements ", w(t, " & ")),
        w(n, " "),
        ke(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => w(
      [
        "extend interface",
        e,
        D("implements ", w(t, " & ")),
        w(n, " "),
        ke(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => w(
      [
        "extend union",
        e,
        w(t, " "),
        D("= ", w(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => w(["extend enum", e, w(t, " "), ke(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => w(["extend input", e, w(t, " "), ke(n)], " ")
  }
};
function w(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function ke(e) {
  return D(`{
`, fn(w(e, `
`)), `
}`);
}
function D(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function fn(e) {
  return D("  ", e.replace(/\n/g, `
  `));
}
function ri(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Xn(e, t) {
  switch (e.kind) {
    case L.NULL:
      return null;
    case L.INT:
      return parseInt(e.value, 10);
    case L.FLOAT:
      return parseFloat(e.value);
    case L.STRING:
    case L.ENUM:
    case L.BOOLEAN:
      return e.value;
    case L.LIST:
      return e.values.map(
        (n) => Xn(n, t)
      );
    case L.OBJECT:
      return gr(
        e.fields,
        (n) => n.name.value,
        (n) => Xn(n.value, t)
      );
    case L.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function De(e) {
  if (e != null || Y(!1, "Must provide name."), typeof e == "string" || Y(!1, "Expected name to be a string."), e.length === 0)
    throw new R("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!ds(e.charCodeAt(t)))
      throw new R(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!fs(e.charCodeAt(0)))
    throw new R(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function Cs(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new R(`Enum values cannot be named: ${e}`);
  return De(e);
}
function Gi(e) {
  return Bi(e) || Rs(e) || Vs(e) || $s(e) || zi(e) || Qi(e) || Wi(e) || Le(e);
}
function Bi(e) {
  return Je(e, It);
}
function Rs(e) {
  return Je(e, Us);
}
function Vs(e) {
  return Je(e, Gs);
}
function $s(e) {
  return Je(e, Bs);
}
function zi(e) {
  return Je(e, Qs);
}
function Qi(e) {
  return Je(e, Js);
}
function Wi(e) {
  return Je(e, qs);
}
function Le(e) {
  return Je(e, En);
}
function Ms(e) {
  return Bi(e) || zi(e);
}
class qs {
  constructor(t) {
    Gi(t) || Y(!1, `Expected ${G(t)} to be a GraphQL type.`), this.ofType = t;
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
class En {
  constructor(t) {
    Ls(t) || Y(
      !1,
      `Expected ${G(t)} to be a GraphQL nullable type.`
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
function Ls(e) {
  return Gi(e) && !Le(e);
}
function Ji(e) {
  return typeof e == "function" ? e() : e;
}
function Yi(e) {
  return typeof e == "function" ? e() : e;
}
class It {
  constructor(t) {
    var n, r, i, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : ti;
    this.name = De(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : ti, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (o, u) => s(Xn(o, u)), this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || Y(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${G(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || Y(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || Y(
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
class Us {
  constructor(t) {
    var n;
    this.name = De(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => Ki(t), this._interfaces = () => Hi(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || Y(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${G(t.isTypeOf)}.`
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
      fields: Zi(this.getFields()),
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
function Hi(e) {
  var t;
  const n = Ji(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || Y(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function Ki(e) {
  const t = Yi(e.fields);
  return dt(t) || Y(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), On(t, (n, r) => {
    var i;
    dt(n) || Y(
      !1,
      `${e.name}.${r} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || Y(
      !1,
      `${e.name}.${r} field resolver must be a function if provided, but got: ${G(n.resolve)}.`
    );
    const a = (i = n.args) !== null && i !== void 0 ? i : {};
    return dt(a) || Y(
      !1,
      `${e.name}.${r} args must be an object with argument names as keys.`
    ), {
      name: De(r),
      description: n.description,
      type: n.type,
      args: Xi(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: je(n.extensions),
      astNode: n.astNode
    };
  });
}
function Xi(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: De(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
function dt(e) {
  return qt(e) && !Array.isArray(e);
}
function Zi(e) {
  return On(e, (t) => ({
    description: t.description,
    type: t.type,
    args: ea(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function ea(e) {
  return gr(
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
class Gs {
  constructor(t) {
    var n;
    this.name = De(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Ki.bind(void 0, t), this._interfaces = Hi.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Y(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`
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
      fields: Zi(this.getFields()),
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
class Bs {
  constructor(t) {
    var n;
    this.name = De(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = zs.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || Y(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${G(t.resolveType)}.`
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
function zs(e) {
  const t = Ji(e.types);
  return Array.isArray(t) || Y(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class Qs {
  /* <T> */
  constructor(t) {
    var n;
    this.name = De(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = Ws(this.name, t.values), this._valueLookup = new Map(
      this._values.map((r) => [r.value, r])
    ), this._nameLookup = mr(this._values, (r) => r.name);
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
      throw new R(
        `Enum "${this.name}" cannot represent value: ${G(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const r = G(t);
      throw new R(
        `Enum "${this.name}" cannot represent non-string value: ${r}.` + an(this, r)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new R(
        `Value "${t}" does not exist in "${this.name}" enum.` + an(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== L.ENUM) {
      const i = Qe(t);
      throw new R(
        `Enum "${this.name}" cannot represent non-enum value: ${i}.` + an(this, i),
        {
          nodes: t
        }
      );
    }
    const r = this.getValue(t.value);
    if (r == null) {
      const i = Qe(t);
      throw new R(
        `Value "${i}" does not exist in "${this.name}" enum.` + an(this, i),
        {
          nodes: t
        }
      );
    }
    return r.value;
  }
  toConfig() {
    const t = gr(
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
function an(e, t) {
  const n = e.getValues().map((i) => i.name), r = Os(t, n);
  return ws("the enum value", r);
}
function Ws(e, t) {
  return dt(t) || Y(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, r]) => (dt(r) || Y(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${G(r)}.`
  ), {
    name: Cs(n),
    description: r.description,
    value: r.value !== void 0 ? r.value : n,
    deprecationReason: r.deprecationReason,
    extensions: je(r.extensions),
    astNode: r.astNode
  }));
}
class Js {
  constructor(t) {
    var n;
    this.name = De(t.name), this.description = t.description, this.extensions = je(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = Ys.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = On(this.getFields(), (n) => ({
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
function Ys(e) {
  const t = Yi(e.fields);
  return dt(t) || Y(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), On(t, (n, r) => (!("resolve" in n) || Y(
    !1,
    `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: De(r),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: je(n.extensions),
    astNode: n.astNode
  }));
}
const Mn = 2147483647, qn = -2147483648, Hs = new It({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = zt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new R(
        `Int cannot represent non-integer value: ${G(t)}`
      );
    if (n > Mn || n < qn)
      throw new R(
        "Int cannot represent non 32-bit signed integer value: " + G(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new R(
        `Int cannot represent non-integer value: ${G(e)}`
      );
    if (e > Mn || e < qn)
      throw new R(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== L.INT)
      throw new R(
        `Int cannot represent non-integer value: ${Qe(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > Mn || t < qn)
      throw new R(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new It({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = zt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new R(
        `Float cannot represent non numeric value: ${G(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new R(
        `Float cannot represent non numeric value: ${G(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== L.FLOAT && e.kind !== L.INT)
      throw new R(
        `Float cannot represent non numeric value: ${Qe(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const ta = new It({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = zt(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new R(
      `String cannot represent value: ${G(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new R(
        `String cannot represent a non string value: ${G(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== L.STRING)
      throw new R(
        `String cannot represent a non string value: ${Qe(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), br = new It({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = zt(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new R(
      `Boolean cannot represent a non boolean value: ${G(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new R(
        `Boolean cannot represent a non boolean value: ${G(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== L.BOOLEAN)
      throw new R(
        `Boolean cannot represent a non boolean value: ${Qe(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new It({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = zt(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new R(
      `ID cannot represent value: ${G(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new R(`ID cannot represent value: ${G(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== L.STRING && e.kind !== L.INT)
      throw new R(
        "ID cannot represent a non-string and non-integer value: " + Qe(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function zt(e) {
  if (qt(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!qt(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class Qt {
  constructor(t) {
    var n, r;
    this.name = De(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = je(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || Y(!1, `@${t.name} locations must be an Array.`);
    const i = (r = t.args) !== null && r !== void 0 ? r : {};
    qt(i) && !Array.isArray(i) || Y(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = Xi(i);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: ea(this.args),
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
new Qt({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Ie.FIELD,
    Ie.FRAGMENT_SPREAD,
    Ie.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new En(br),
      description: "Included when true."
    }
  }
});
new Qt({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Ie.FIELD,
    Ie.FRAGMENT_SPREAD,
    Ie.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new En(br),
      description: "Skipped when true."
    }
  }
});
const Ks = "No longer supported";
new Qt({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    Ie.FIELD_DEFINITION,
    Ie.ARGUMENT_DEFINITION,
    Ie.INPUT_FIELD_DEFINITION,
    Ie.ENUM_VALUE
  ],
  args: {
    reason: {
      type: ta,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: Ks
    }
  }
});
new Qt({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Ie.SCALAR],
  args: {
    url: {
      type: new En(ta),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function Dt(e, t, n) {
  if (e) {
    if (e.kind === L.VARIABLE) {
      const r = e.name.value;
      if (n == null || n[r] === void 0)
        return;
      const i = n[r];
      return i === null && Le(t) ? void 0 : i;
    }
    if (Le(t))
      return e.kind === L.NULL ? void 0 : Dt(e, t.ofType, n);
    if (e.kind === L.NULL)
      return null;
    if (Wi(t)) {
      const r = t.ofType;
      if (e.kind === L.LIST) {
        const a = [];
        for (const s of e.values)
          if (ii(s, n)) {
            if (Le(r))
              return;
            a.push(null);
          } else {
            const o = Dt(s, r, n);
            if (o === void 0)
              return;
            a.push(o);
          }
        return a;
      }
      const i = Dt(e, r, n);
      return i === void 0 ? void 0 : [i];
    }
    if (Qi(t)) {
      if (e.kind !== L.OBJECT)
        return;
      const r = /* @__PURE__ */ Object.create(null), i = mr(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = i[a.name];
        if (!s || ii(s.value, n)) {
          if (a.defaultValue !== void 0)
            r[a.name] = a.defaultValue;
          else if (Le(a.type))
            return;
          continue;
        }
        const o = Dt(s.value, a.type, n);
        if (o === void 0)
          return;
        r[a.name] = o;
      }
      return r;
    }
    if (Ms(t)) {
      let r;
      try {
        r = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return r === void 0 ? void 0 : r;
    }
    Vi(!1, "Unexpected input type: " + G(t));
  }
}
function ii(e, t) {
  return e.kind === L.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Xs(e, t, n) {
  var r;
  const i = {}, a = (r = t.arguments) !== null && r !== void 0 ? r : [], s = mr(a, (o) => o.name.value);
  for (const o of e.args) {
    const u = o.name, l = o.type, c = s[u];
    if (!c) {
      if (o.defaultValue !== void 0)
        i[u] = o.defaultValue;
      else if (Le(l))
        throw new R(
          `Argument "${u}" of required type "${G(l)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const p = c.value;
    let d = p.kind === L.NULL;
    if (p.kind === L.VARIABLE) {
      const h = p.name.value;
      if (n == null || !eo(n, h)) {
        if (o.defaultValue !== void 0)
          i[u] = o.defaultValue;
        else if (Le(l))
          throw new R(
            `Argument "${u}" of required type "${G(l)}" was provided the variable "$${h}" which was not provided a runtime value.`,
            {
              nodes: p
            }
          );
        continue;
      }
      d = n[h] == null;
    }
    if (d && Le(l))
      throw new R(
        `Argument "${u}" of non-null type "${G(l)}" must not be null.`,
        {
          nodes: p
        }
      );
    const y = Dt(p, l, n);
    if (y === void 0)
      throw new R(
        `Argument "${u}" has invalid value ${Qe(p)}.`,
        {
          nodes: p
        }
      );
    i[u] = y;
  }
  return i;
}
function Zs(e, t, n) {
  var r;
  const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(
    (a) => a.name.value === e.name
  );
  if (i)
    return Xs(e, i, n);
}
function eo(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const to = new Qt({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Ie.QUERY],
  args: {
    if: {
      type: br,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: Hs,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), na = (e) => e == null, no = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
  return na(n) ? null : n;
}, ro = (e, t) => {
  var n;
  const r = Zs(to, { directives: [e] }, t);
  return {
    isLive: (r == null ? void 0 : r.if) === !0,
    throttleValue: (n = r == null ? void 0 : r.throttle) !== null && n !== void 0 ? n : null
  };
}, io = (e, t) => {
  const n = no(e);
  return na(n) ? !1 : ro(n, t).isLive;
};
function ao(e) {
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
      so,
      oo,
      uo,
      lo,
      co
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
function so(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function oo(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let r = 0; r < t; r++)
    n = e.children[r], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function uo(e) {
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
function lo(e) {
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
const ai = 3;
let si = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function co(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, r = e.delta, i = e.left, a = [], s = [], o = [];
  for (t in r)
    if (t !== "_t")
      if (t[0] === "_")
        if (r[t][2] === 0 || r[t][2] === ai)
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
  for (a = a.sort(si.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = r[`_${n}`], p = i.splice(n, 1)[0];
    c[2] === ai && s.push({
      index: c[1],
      value: p
    });
  }
  s = s.sort(si.numericallyBy("index"));
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
const fo = (e, t) => ao({
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
var Zn = function(e, t) {
  return Zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Zn(e, t);
};
function po(e, t) {
  Zn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function yt(e, t, n, r) {
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
function We(e, t) {
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
function Ot(e) {
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
function Lt(e) {
  return this instanceof Lt ? (this.v = e, this) : new Lt(e);
}
function ho(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    r[d] && (i[d] = function(y) {
      return new Promise(function(h, b) {
        a.push([d, y, h, b]) > 1 || o(d, y);
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
    d.value instanceof Lt ? Promise.resolve(d.value.v).then(l, c) : p(a[0][2], d);
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
var ra = (
  /** @class */
  function(e) {
    po(t, e);
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
function er(e) {
  e != null && typeof e.then == "function" && e.then(gn, gn);
}
var Ln = 0, oi = 1, tt = 2, yn = 3, tr = 4, mn = 1024, gn = function() {
};
function pt(e) {
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
function Ke(e, t) {
  var n = e.state >= yn;
  return Promise.resolve(t).then(function(r) {
    return !n && e.state >= tr ? pt(e).then(function(i) {
      return {
        value: i,
        done: !0
      };
    }) : { value: r, done: n };
  });
}
function vr(e, t) {
  var n, r;
  if (!(e.state >= tt))
    if (e.state = tt, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      Rt(e);
    else
      try {
        for (var i = Ot(e.pushes), a = i.next(); !a.done; a = i.next()) {
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
function Rt(e) {
  var t, n;
  if (!(e.state >= yn)) {
    e.state < tt && vr(e), e.state = yn, e.buffer = void 0;
    try {
      for (var r = Ot(e.nexts), i = r.next(); !i.done; i = r.next()) {
        var a = i.value, s = e.pending === void 0 ? pt(e) : e.pending.then(function() {
          return pt(e);
        });
        a.resolve(Ke(e, s));
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
function ui(e) {
  e.state >= tr || (e.state < yn && Rt(e), e.state = tr);
}
function yo(e, t) {
  if (er(t), e.pushes.length >= mn)
    throw new ra("No more than " + mn + " pending calls to push are allowed on a single repeater.");
  if (e.state >= tt)
    return Promise.resolve(void 0);
  var n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(function() {
    return t;
  });
  n = n.catch(function(u) {
    e.state < tt && (e.err = u), ui(e);
  });
  var r;
  if (e.nexts.length) {
    var i = e.nexts.shift();
    i.resolve(Ke(e, n)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise(function(u) {
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
    e.err = u, ui(e);
  }), s;
}
function mo(e) {
  var t = vr.bind(null, e), n = new Promise(function(r) {
    return e.onstop = r;
  });
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function go(e) {
  if (!(e.state >= oi)) {
    e.state = oi;
    var t = yo.bind(null, e), n = mo(e);
    e.execution = new Promise(function(r) {
      return r(e.executor(t, n));
    }), e.execution.catch(function() {
      return vr(e);
    });
  }
}
var sn = /* @__PURE__ */ new WeakMap(), Wt = (
  /** @class */
  function() {
    function e(t, n) {
      sn.set(this, {
        executor: t,
        buffer: n,
        err: void 0,
        state: Ln,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: gn,
        onstop: gn
      });
    }
    return e.prototype.next = function(t) {
      er(t);
      var n = sn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      if (n.nexts.length >= mn)
        throw new ra("No more than " + mn + " pending calls to next are allowed on a single repeater.");
      if (n.state <= Ln && go(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
        var r = Ke(n, n.buffer.remove());
        if (n.pushes.length) {
          var i = n.pushes.shift();
          n.buffer.add(i.value), n.onnext = i.resolve;
        }
        return r;
      } else if (n.pushes.length) {
        var a = n.pushes.shift();
        return n.onnext = a.resolve, Ke(n, a.value);
      } else if (n.state >= tt)
        return Rt(n), Ke(n, pt(n));
      return new Promise(function(s) {
        return n.nexts.push({ resolve: s, value: t });
      });
    }, e.prototype.return = function(t) {
      er(t);
      var n = sn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return Rt(n), n.execution = Promise.resolve(n.execution).then(function() {
        return t;
      }), Ke(n, pt(n));
    }, e.prototype.throw = function(t) {
      var n = sn.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return n.state <= Ln || n.state >= tt || typeof n.buffer < "u" && !n.buffer.empty ? (Rt(n), n.err == null && (n.err = t), Ke(n, pt(n))) : this.next(Promise.reject(t));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = bo, e.merge = vo, e.zip = So, e.latest = wo, e;
  }()
);
function Pn(e, t) {
  var n, r, i = [], a = function(l) {
    l != null && typeof l[Symbol.asyncIterator] == "function" ? i.push(l[Symbol.asyncIterator]()) : l != null && typeof l[Symbol.iterator] == "function" ? i.push(l[Symbol.iterator]()) : i.push(function() {
      return ho(this, arguments, function() {
        return We(this, function(d) {
          switch (d.label) {
            case 0:
              return t.yieldValues ? [4, Lt(l)] : [3, 3];
            case 1:
              return [4, d.sent()];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return t.returnValues ? [4, Lt(l)] : [3, 5];
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
    for (var s = Ot(e), o = s.next(); !o.done; o = s.next()) {
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
function bo(e) {
  var t = this, n = Pn(e, { returnValues: !0 });
  return new Wt(function(r, i) {
    return yt(t, void 0, void 0, function() {
      var a, s, o, u, l, c;
      return We(this, function(p) {
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
              var d, y, h, b, I, A;
              return We(this, function(T) {
                switch (T.label) {
                  case 0:
                    d = l;
                    try {
                      for (y = (I = void 0, Ot(n)), h = y.next(); !h.done; h = y.next())
                        b = h.value, Promise.resolve(b.next()).then(function(N) {
                          N.done ? (i(), o === void 0 && (o = N)) : l === d && (l++, a(N));
                        }, function(N) {
                          return i(N);
                        });
                    } catch (N) {
                      I = { error: N };
                    } finally {
                      try {
                        h && !h.done && (A = y.return) && A.call(y);
                      } finally {
                        if (I)
                          throw I.error;
                      }
                    }
                    return [4, new Promise(function(N) {
                      return a = N;
                    })];
                  case 1:
                    return u = T.sent(), u === void 0 ? [3, 3] : [4, r(u.value)];
                  case 2:
                    T.sent(), T.label = 3;
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
function vo(e) {
  var t = this, n = Pn(e, { yieldValues: !0 });
  return new Wt(function(r, i) {
    return yt(t, void 0, void 0, function() {
      var a, s, o, u = this;
      return We(this, function(l) {
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
                for (var d = Ot(a), y = d.next(); !y.done; y = d.next()) {
                  var h = y.value;
                  h();
                }
              } catch (b) {
                c = { error: b };
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
              return yt(u, void 0, void 0, function() {
                var d, y;
                return We(this, function(h) {
                  switch (h.label) {
                    case 0:
                      h.trys.push([0, , 6, 9]), h.label = 1;
                    case 1:
                      return s ? [3, 5] : (Promise.resolve(c.next()).then(function(b) {
                        return a[p](b);
                      }, function(b) {
                        return i(b);
                      }), [4, new Promise(function(b) {
                        a[p] = b;
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
function So(e) {
  var t = this, n = Pn(e, { returnValues: !0 });
  return new Wt(function(r, i) {
    return yt(t, void 0, void 0, function() {
      var a, s, o, u;
      return We(this, function(l) {
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
function wo(e) {
  var t = this, n = Pn(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new Wt(function(r, i) {
    return yt(t, void 0, void 0, function() {
      var a, s, o, u, l, c = this;
      return We(this, function(p) {
        switch (p.label) {
          case 0:
            if (!n.length)
              return i(), [2, []];
            s = [], o = !1, i.then(function() {
              var d, y;
              a();
              try {
                for (var h = Ot(s), b = h.next(); !b.done; b = h.next()) {
                  var I = b.value;
                  I();
                }
              } catch (A) {
                d = { error: A };
              } finally {
                try {
                  b && !b.done && (y = h.return) && y.call(h);
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
              return yt(c, void 0, void 0, function() {
                var h;
                return We(this, function(b) {
                  switch (b.label) {
                    case 0:
                      if (u[y].done)
                        return [2, u[y].value];
                      b.label = 1;
                    case 1:
                      return o ? [3, 4] : (Promise.resolve(d.next()).then(function(I) {
                        return s[y](I);
                      }, function(I) {
                        return i(I);
                      }), [4, new Promise(function(I) {
                        return s[y] = I;
                      })]);
                    case 2:
                      return h = b.sent(), h === void 0 ? [2, u[y].value] : h.done ? [2, h.value] : (l[y] = h.value, [4, r(l.slice())]);
                    case 3:
                      return b.sent(), [3, 1];
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
const To = (e) => (t) => new Wt(async (n, r) => {
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
}), Io = To(fo);
function Oo(e, t, n) {
  const r = async function* () {
    yield* e;
  }(), i = r.return.bind(r);
  if (t && (r.return = (...a) => (t(), i(...a))), n) {
    const a = r.throw.bind(r);
    r.throw = (s) => (n(s), a(s));
  }
  return r;
}
function li() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Eo() {
  let e = {
    type: "running"
    /* running */
  }, t = li();
  const n = [];
  function r(s) {
    e.type === "running" && (n.push(s), t.resolve(), t = li());
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
  }(), a = Oo(i, () => {
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
const Po = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Eo(), r = e({
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
function Ao(e, t) {
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
var ct = {
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
class nr extends Error {
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
var W, k;
function te(e) {
  return new nr(`Syntax Error: Unexpected token at ${k} in ${e}`);
}
function Oe(e) {
  if (e.lastIndex = k, e.test(W))
    return W.slice(k, k = e.lastIndex);
}
var on = / +(?=[^\s])/y;
function No(e) {
  for (var t = e.split(`
`), n = "", r = 0, i = 0, a = t.length - 1, s = 0; s < t.length; s++)
    on.lastIndex = 0, on.test(t[s]) && (s && (!r || on.lastIndex < r) && (r = on.lastIndex), i = i || s, a = s);
  for (var o = i; o <= a; o++)
    o !== i && (n += `
`), n += t[o].slice(r).replace(/\\"""/g, '"""');
  return n;
}
function x() {
  for (var e = 0 | W.charCodeAt(k++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | W.charCodeAt(k++))
    if (e === 35)
      for (; (e = W.charCodeAt(k++)) !== 10 && e !== 13; )
        ;
  k--;
}
var ia = /[_A-Za-z]\w*/y;
function Ve() {
  var e;
  if (e = Oe(ia))
    return {
      kind: "Name",
      value: e
    };
}
var _o = /(?:null|true|false)/y, aa = /\$[_A-Za-z]\w*/y, ko = /-?\d+/y, xo = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, jo = /\\/g, Do = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Fo = /"(?:"|[^\r\n]*?[^\\]")/y;
function bn(e) {
  var t, n;
  if (n = Oe(_o))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = Oe(aa)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = Oe(ko)) {
    var r = n;
    (n = Oe(xo)) ? t = {
      kind: "FloatValue",
      value: r + n
    } : t = {
      kind: "IntValue",
      value: r
    };
  } else if (n = Oe(ia))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = Oe(Do))
    t = {
      kind: "StringValue",
      value: No(n.slice(3, -3)),
      block: !0
    };
  else if (n = Oe(Fo))
    t = {
      kind: "StringValue",
      value: jo.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (W.charCodeAt(k) === 91) {
      k++, x();
      for (var o = []; s = bn(a); )
        o.push(s);
      if (W.charCodeAt(k++) !== 93)
        throw te("ListValue");
      return x(), {
        kind: "ListValue",
        values: o
      };
    }
  }(e) || function(a) {
    if (W.charCodeAt(k) === 123) {
      k++, x();
      for (var s = [], o; o = Ve(); ) {
        if (x(), W.charCodeAt(k++) !== 58)
          throw te("ObjectField");
        x();
        var u = bn(a);
        if (!u)
          throw te("ObjectField");
        s.push({
          kind: "ObjectField",
          name: o,
          value: u
        });
      }
      if (W.charCodeAt(k++) !== 125)
        throw te("ObjectValue");
      return x(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return x(), t;
}
function sa(e) {
  var t = [];
  if (x(), W.charCodeAt(k) === 40) {
    k++, x();
    for (var n; n = Ve(); ) {
      if (x(), W.charCodeAt(k++) !== 58)
        throw te("Argument");
      x();
      var r = bn(e);
      if (!r)
        throw te("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: r
      });
    }
    if (!t.length || W.charCodeAt(k++) !== 41)
      throw te("Argument");
    x();
  }
  return t;
}
function mt(e) {
  var t = [];
  for (x(); W.charCodeAt(k) === 64; ) {
    k++;
    var n = Ve();
    if (!n)
      throw te("Directive");
    x(), t.push({
      kind: "Directive",
      name: n,
      arguments: sa(e)
    });
  }
  return t;
}
function Co() {
  var e = Ve();
  if (e) {
    x();
    var t;
    if (W.charCodeAt(k) === 58) {
      if (k++, x(), t = e, !(e = Ve()))
        throw te("Field");
      x();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: sa(!1),
      directives: mt(!1),
      selectionSet: An()
    };
  }
}
function oa() {
  var e;
  if (x(), W.charCodeAt(k) === 91) {
    k++, x();
    var t = oa();
    if (!t || W.charCodeAt(k++) !== 93)
      throw te("ListType");
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
    throw te("NamedType");
  return x(), W.charCodeAt(k) === 33 ? (k++, x(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Ro = /on/y;
function ua() {
  if (Oe(Ro)) {
    x();
    var e = Ve();
    if (!e)
      throw te("NamedType");
    return x(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Vo = /\.\.\./y;
function $o() {
  if (Oe(Vo)) {
    x();
    var e = k, t;
    if ((t = Ve()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: mt(!1)
      };
    k = e;
    var n = ua(), r = mt(!1), i = An();
    if (!i)
      throw te("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: r,
      selectionSet: i
    };
  }
}
function An() {
  var e;
  if (x(), W.charCodeAt(k) === 123) {
    k++, x();
    for (var t = []; e = $o() || Co(); )
      t.push(e);
    if (!t.length || W.charCodeAt(k++) !== 125)
      throw te("SelectionSet");
    return x(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Mo = /fragment/y;
function qo() {
  if (Oe(Mo)) {
    x();
    var e = Ve();
    if (!e)
      throw te("FragmentDefinition");
    x();
    var t = ua();
    if (!t)
      throw te("FragmentDefinition");
    var n = mt(!1), r = An();
    if (!r)
      throw te("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: r
    };
  }
}
var Lo = /(?:query|mutation|subscription)/y;
function Uo() {
  var e, t, n = [], r = [];
  (e = Oe(Lo)) && (x(), t = Ve(), n = function() {
    var s, o = [];
    if (x(), W.charCodeAt(k) === 40) {
      for (k++, x(); s = Oe(aa); ) {
        if (x(), W.charCodeAt(k++) !== 58)
          throw te("VariableDefinition");
        var u = oa(), l = void 0;
        if (W.charCodeAt(k) === 61 && (k++, x(), !(l = bn(!0))))
          throw te("VariableDefinition");
        x(), o.push({
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
          directives: mt(!0)
        });
      }
      if (W.charCodeAt(k++) !== 41)
        throw te("VariableDefinition");
      x();
    }
    return o;
  }(), r = mt(!1));
  var i = An();
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
function Go(e, t) {
  return W = typeof e.body == "string" ? e.body : e, k = 0, function() {
    var r;
    x();
    for (var i = []; r = qo() || Uo(); )
      i.push(r);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Bo(e) {
  return JSON.stringify(e);
}
function zo(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ne = (e) => !(!e || !e.length), le = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ne(e.variableDefinitions) && !Ne(e.directives))
      return le.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ne(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(le.VariableDefinition).join(", ") + ")"), Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + le.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = le.Variable(e.variable) + ": " + _e(e.type);
    return e.defaultValue && (t += " = " + _e(e.defaultValue)), Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ne(e.arguments)) {
      var n = e.arguments.map(le.Argument), r = t + "(" + n.join(", ") + ")";
      t = r.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : r;
    }
    return Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), e.selectionSet ? t + " " + le.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? zo(e.value) : Bo(e.value),
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
  Document: (e) => Ne(e.definitions) ? e.definitions.map(_e).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(_e).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + _e(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + _e(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ne(e.directives) && (t += " " + e.directives.map(le.Directive).join(" ")), t + " " + _e(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ne(e.arguments) && (t += "(" + e.arguments.map(le.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + _e(e.type) + "]",
  NonNullType: (e) => _e(e.type) + "!"
};
function _e(e) {
  return le[e.kind] ? le[e.kind](e) : "";
}
var Sr = () => {
}, Ee = Sr;
function Fe(e) {
  return {
    tag: 0,
    0: e
  };
}
function Jt(e) {
  return {
    tag: 1,
    0: e
  };
}
var Qo = (e) => e;
function ue(e) {
  return (t) => (n) => {
    var r = Ee;
    t((i) => {
      i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0);
    });
  };
}
function ht(e) {
  return (t) => (n) => t((r) => {
    r === 0 || r.tag === 0 ? n(r) : n(Jt(e(r[0])));
  });
}
function Ut(e) {
  return (t) => (n) => {
    var r = [], i = Ee, a = !1, s = !1;
    t((o) => {
      s || (o === 0 ? (s = !0, r.length || n(0)) : o.tag === 0 ? i = o[0] : (a = !1, function(l) {
        var c = Ee;
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
    }), n(Fe((o) => {
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
function Wo(e) {
  return Ut(Qo)(e);
}
function gt(e) {
  return Wo(Ho(e));
}
function wr(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          n(Fe((s) => {
            s === 1 ? (r = !0, a(1), e()) : a(s);
          }));
        } else
          n(i);
    });
  };
}
function bt(e) {
  return (t) => (n) => {
    var r = !1;
    t((i) => {
      if (!r)
        if (i === 0)
          r = !0, n(0);
        else if (i.tag === 0) {
          var a = i[0];
          n(Fe((s) => {
            s === 1 && (r = !0), a(s);
          }));
        } else
          e(i[0]), n(i);
    });
  };
}
function ci(e) {
  return (t) => (n) => t((r) => {
    r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
  });
}
function Gt(e) {
  var t = [], n = Ee, r = !1;
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
    }), i(Fe((a) => {
      if (a === 1) {
        var s = t.indexOf(i);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
      } else
        r || (r = !0, n(0));
    }));
  };
}
function fi(e) {
  return (t) => (n) => {
    var r = Ee, i = Ee, a = !1, s = !1, o = !1, u = !1;
    t((l) => {
      u || (l === 0 ? (u = !0, o || n(0)) : l.tag === 0 ? r = l[0] : (o && (i(1), i = Ee), a ? a = !1 : (a = !0, r(0)), function(p) {
        o = !0, p((d) => {
          o && (d === 0 ? (o = !1, u ? n(0) : a || (a = !0, r(0))) : d.tag === 0 ? (s = !1, (i = d[0])(0)) : (n(d), s ? s = !1 : i(0)));
        });
      }(e(l[0]))));
    }), n(Fe((l) => {
      l === 1 ? (u || (u = !0, r(1)), o && (o = !1, i(1))) : (!u && !a && (a = !0, r(0)), o && !s && (s = !0, i(0)));
    }));
  };
}
function la(e) {
  return (t) => (n) => {
    var r = Ee, i = !1, a = 0;
    t((s) => {
      i || (s === 0 ? (i = !0, n(0)) : s.tag === 0 ? e <= 0 ? (i = !0, n(0), s[0](1)) : r = s[0] : a++ < e ? (n(s), !i && a >= e && (i = !0, n(0), r(1))) : n(s));
    }), n(Fe((s) => {
      s === 1 && !i ? (i = !0, r(1)) : s === 0 && !i && a < e && r(0);
    }));
  };
}
function Tr(e) {
  return (t) => (n) => {
    var r = Ee, i = Ee, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, i(1), n(0)) : s.tag === 0 ? (r = s[0], e((o) => {
        o === 0 || (o.tag === 0 ? (i = o[0])(0) : (a = !0, i(1), r(1), n(0)));
      })) : n(s));
    }), n(Fe((s) => {
      s === 1 && !a ? (a = !0, r(1), i(1)) : a || r(0);
    }));
  };
}
function ca(e, t) {
  return (n) => (r) => {
    var i = Ee, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, r(0)) : s.tag === 0 ? (i = s[0], r(s)) : e(s[0]) ? r(s) : (a = !0, t && r(s), r(0), i(1)));
    });
  };
}
function Jo(e) {
  return (t) => e()(t);
}
function fa(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), r = !1, i = !1, a = !1, s;
    t(Fe(async (o) => {
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
              a = !1, t(Jt(s.value));
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
function Yo(e) {
  return e[Symbol.asyncIterator] ? fa(e) : (t) => {
    var n = e[Symbol.iterator](), r = !1, i = !1, a = !1, s;
    t(Fe((o) => {
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
              a = !1, t(Jt(s.value));
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
var Ho = Yo;
function Vt(e) {
  return (t) => {
    var n = !1;
    t(Fe((r) => {
      r === 1 ? n = !0 : n || (n = !0, t(Jt(e)), t(0));
    }));
  };
}
function Ir(e) {
  return (t) => {
    var n = !1, r = e({
      next(i) {
        n || t(Jt(i));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(Fe((i) => {
      i === 1 && !n && (n = !0, r());
    }));
  };
}
function di() {
  var e, t;
  return {
    source: Gt(Ir((n) => (e = n.next, t = n.complete, Sr))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function pi(e) {
  return Ir((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Sr));
}
function nt(e) {
  return (t) => {
    var n = Ee, r = !1;
    return t((i) => {
      i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
    }), {
      unsubscribe() {
        r || (r = !0, n(1));
      }
    };
  };
}
function Ko(e) {
  nt((t) => {
  })(e);
}
function Xo(e) {
  return new Promise((t) => {
    var n = Ee, r;
    e((i) => {
      i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : (r = i[0], n(0));
    });
  });
}
var Zo = (...e) => {
  for (var t = e[0], n = 1, r = e.length; n < r; n++)
    t = e[n](t);
  return t;
}, eu = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new nr(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new nr(e);
class Yt extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(eu), r = ((i, a) => {
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
var rr = (e, t) => {
  for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
    n = (n << 5) + n + e.charCodeAt(r);
  return n;
}, et = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new WeakMap(), ut = (e) => {
  if (e === null || et.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return ut(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += ut(n) || "null";
    return t += "]";
  } else if (Sn !== vt && e instanceof Sn || wn !== vt && e instanceof wn)
    return "null";
  var r = Object.keys(e).sort();
  if (!r.length && e.constructor && e.constructor !== Object) {
    var i = hi.get(e) || Math.random().toString(36).slice(2);
    return hi.set(e, i), ut({
      __key: i
    });
  }
  et.add(e);
  var a = "{";
  for (var s of r) {
    var o = ut(e[s]);
    o && (a.length > 1 && (a += ","), a += ut(s) + ":" + o);
  }
  return et.delete(e), a += "}";
}, ir = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || et.has(n)))
    if (Array.isArray(n))
      for (var r = 0, i = n.length; r < i; r++)
        ir(e, `${t}.${r}`, n[r]);
    else if (n instanceof Sn || n instanceof wn)
      e.set(t, n);
    else {
      et.add(n);
      for (var a of Object.keys(n))
        ir(e, `${t}.${a}`, n[a]);
    }
}, vn = (e) => (et.clear(), ut(e));
class vt {
}
var Sn = typeof File < "u" ? File : vt, wn = typeof Blob < "u" ? Blob : vt, tu = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, nu = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, ru = (e, t) => t % 2 == 0 ? e.replace(nu, `
`) : e, yi = (e) => e.split(tu).map(ru).join("").trim(), mi = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), Or = (e) => {
  var t;
  return typeof e == "string" ? t = yi(e) : e.loc && dn.get(e.__key) === e ? t = e.loc.source.body : (t = mi.get(e) || yi(_e(e)), mi.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, gi = (e) => {
  var t = rr(Or(e));
  if (e.definitions) {
    var n = pa(e);
    n && (t = rr(`
# ${n}`, t));
  }
  return t;
}, da = (e) => {
  var t, n;
  return typeof e == "string" ? (t = gi(e), n = dn.get(t) || Go(e)) : (t = e.__key || gi(e), n = dn.get(t) || e), n.loc || Or(n), n.__key = t, dn.set(t, n), n;
}, pn = (e, t, n) => {
  var r = t || {}, i = da(e), a = vn(r), s = i.__key;
  return a !== "{}" && (s = rr(a, s)), {
    key: s,
    query: i,
    variables: r,
    extensions: n
  };
}, pa = (e) => {
  for (var t of e.definitions)
    if (t.kind === ct.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, iu = (e) => {
  for (var t of e.definitions)
    if (t.kind === ct.OPERATION_DEFINITION)
      return t.operation;
}, ar = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var r = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Yt({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? r : t.hasNext,
    stale: !1
  };
}, sr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = sr(e[n], t[n]);
    return e;
  }
  return t;
}, or = (e, t, n) => {
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
        for (var y = +l >= 0 ? l : 0, h = 0, b = u.items.length; h < b; h++)
          c[y + h] = sr(c[y + h], u.items[h]);
      else
        u.data !== void 0 && (c[l] = sr(c[l], u.data));
    }
  else
    o.data = t.data || e.data, r = t.errors || r;
  return {
    operation: e.operation,
    data: o.data,
    error: r.length ? new Yt({
      graphQLErrors: r,
      response: n
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ha = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new Yt({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ya(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Or(e.query),
    operationName: pa(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var au = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var r = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && r.searchParams.set(i, typeof a == "object" ? vn(a) : a);
  }
  var s = r.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, su = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = vn(t), r = ((o) => {
      var u = /* @__PURE__ */ new Map();
      return (Sn !== vt || wn !== vt) && (et.clear(), ir(u, "variables", o)), u;
    })(t.variables);
    if (r.size) {
      var i = new FormData();
      i.append("operations", n), i.append("map", vn({
        ...[...r.keys()].map((o) => [o])
      }));
      var a = 0;
      for (var s of r.values())
        i.append("" + a++, s);
      return i;
    }
    return n;
  }
}, ou = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, r = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (r.headers)
    for (var i in r.headers)
      n[i.toLowerCase()] = r.headers[i];
  var a = su(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...r,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, uu = typeof TextDecoder < "u" ? new TextDecoder() : null, lu = /boundary="?([^=";]+)"?/i, cu = /data: ?([^\n]+)/, bi = (e) => e.constructor.name === "Buffer" ? e.toString() : uu.decode(e);
async function* vi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield bi(t);
  else {
    var n = e.body.getReader(), r;
    try {
      for (; !(r = await n.read()).done; )
        yield bi(r.value);
    } finally {
      n.cancel();
    }
  }
}
async function* Si(e, t) {
  var n = "", r;
  for await (var i of e)
    for (n += i; (r = n.indexOf(t)) > -1; )
      yield n.slice(0, r), n = n.slice(r + t.length);
}
async function* fu(e, t, n) {
  var r = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", o;
    if (/multipart\/mixed/i.test(s))
      o = async function* (c, p) {
        var d = c.match(lu), y = "--" + (d ? d[1] : "-"), h = !0, b;
        for await (var I of Si(vi(p), `\r
` + y)) {
          if (h) {
            h = !1;
            var A = I.indexOf(y);
            if (A > -1)
              I = I.slice(A + y.length);
            else
              continue;
          }
          try {
            yield b = JSON.parse(I.slice(I.indexOf(`\r
\r
`) + 4));
          } catch (T) {
            if (!b)
              throw T;
          }
          if (b && b.hasNext === !1)
            break;
        }
        b && b.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, a);
    else if (/text\/event-stream/i.test(s))
      o = async function* (c) {
        var p;
        for await (var d of Si(vi(c), `

`)) {
          var y = d.match(cu);
          if (y) {
            var h = y[1];
            try {
              yield p = JSON.parse(h);
            } catch (b) {
              if (!p)
                throw b;
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
      i = i ? or(i, u, a) : ar(e, u, a), r = !1, yield i, r = !0;
    i || (yield i = ar(e, {}, a));
  } catch (l) {
    if (!r)
      throw l;
    yield ha(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : l, a);
  }
}
function du(e, t, n) {
  var r;
  return typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal), wr(() => {
    r && r.abort();
  })(ue((i) => !!i)(fa(fu(e, t, n))));
}
var ur = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      ur(n, t);
  else if (typeof e == "object" && e !== null)
    for (var r in e)
      r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : ur(e[r], t);
  return t;
}, lr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var r of e.definitions) {
      var i = lr(r);
      t = t || i !== r, n.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === ct.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var o of e.selectionSet.selections || []) {
        s = s || o.kind === ct.FIELD && o.name.value === "__typename" && !o.alias;
        var u = lr(o);
        t = t || u !== o, a.push(u);
      }
      if (s || (t = !0, a.push({
        kind: ct.FIELD,
        name: {
          kind: ct.NAME,
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
}, wi = /* @__PURE__ */ new Map(), pu = (e) => {
  var t = da(e), n = wi.get(t.__key);
  return n || (wi.set(t.__key, n = lr(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, cr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => cr(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var r in e)
      r === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[r] = cr(e[r]);
    return n;
  } else
    return e;
};
function Ti(e) {
  var t = (n) => e(n);
  return t.toPromise = () => Xo(la(1)(ue((n) => !n.stale && !n.hasNext)(t))), t.then = (n, r) => t.toPromise().then(n, r), t.subscribe = (n) => nt(n)(t), t;
}
function St(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var Ii = (e, t) => St(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), hu = () => {
}, Un = ({ kind: e }) => e !== "mutation" && e !== "query", yu = ({ forward: e, client: t, dispatchDebug: n }) => {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (o) => {
    var u = St(o.kind, o);
    return u.query = pu(o.query), u;
  }, s = (o) => o.kind === "query" && o.context.requestPolicy !== "network-only" && (o.context.requestPolicy === "cache-only" || r.has(o.key));
  return (o) => {
    var u = ht((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? Ii(c, {
          cacheOutcome: p ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (d.stale = !0, Oi(t, c)), d;
    })(ue((c) => !Un(c) && s(c))(o)), l = bt((c) => {
      var { operation: p } = c;
      if (p) {
        var d = p.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (d = ((S) => [...ur(S, /* @__PURE__ */ new Set())])(c.data).concat(d)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
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
            var b = d[h], I = i.get(b);
            I || i.set(b, I = /* @__PURE__ */ new Set());
            for (var A of I.values())
              y.add(A);
            I.clear();
          }
          for (var T of y.values())
            r.has(T) && (p = r.get(T).operation, r.delete(T), Oi(t, p));
        } else if (p.kind === "query" && c.data) {
          r.set(p.key, c);
          for (var N = 0; N < d.length; N++) {
            var m = d[N], O = i.get(m);
            O || i.set(m, O = /* @__PURE__ */ new Set()), O.add(p.key);
          }
        }
      }
    })(e(ue((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(ht((c) => process.env.NODE_ENV !== "production" ? Ii(c, {
      cacheOutcome: "miss"
    }) : c)(gt([ht(a)(ue((c) => !Un(c) && !s(c))(o)), ue((c) => Un(c))(o)])))));
    return gt([u, l]);
  };
}, Oi = (e, t) => e.reexecuteOperation(St(t.kind, t, {
  requestPolicy: "network-only"
})), Gn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: r, forward: i }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var o = Ut((l) => {
      var { key: c } = l, p = ue((d) => d.kind === "teardown" && d.key === c)(s);
      return Tr(p)(((d) => {
        var y = e(ya(d), d);
        return Ir(({ next: h, complete: b }) => {
          var I = !1, A, T;
          return Promise.resolve().then(() => {
            I || (A = y.subscribe({
              next(N) {
                h(T = T ? or(T, N) : ar(d, N));
              },
              error(N) {
                h(ha(d, N));
              },
              complete() {
                I || (I = !0, d.kind === "subscription" && r.reexecuteOperation(St("teardown", d, d.context)), T && T.hasNext && h(or(T, {
                  hasNext: !1
                })), b());
              }
            }));
          }), () => {
            I = !0, A && A.unsubscribe();
          };
        });
      })(l));
    })(ue((l) => l.kind !== "teardown" && a(l))(s)), u = i(ue((l) => l.kind === "teardown" || !a(l))(s));
    return gt([o, u]);
  };
}, mu = ({ forward: e, dispatchDebug: t }) => (n) => {
  var r = Ut((a) => {
    var s = ya(a), o = au(a, s), u = ou(a, s);
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
    var l = Tr(ue((c) => c.kind === "teardown" && c.key === a.key)(n))(du(a, o, u));
    return process.env.NODE_ENV !== "production" ? bt((c) => {
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
  })(ue((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), i = e(ue((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return gt([r, i]);
}, gu = (e) => ({ client: t, forward: n, dispatchDebug: r }) => e.reduceRight((i, a) => {
  var s = !1;
  return a({
    client: t,
    forward(o) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return Gt(i(Gt(o)));
    },
    dispatchDebug(o) {
      process.env.NODE_ENV !== "production" && r({
        timestamp: Date.now(),
        source: a.name,
        ...o
      });
    }
  });
}, n), ma = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: r }) => (i) => Ut((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? pi(s) : Vt(s);
})(r(Ut((a) => {
  var s = e && e(a) || a;
  return "then" in s ? pi(s) : Vt(s);
})(i))), bu = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = bt((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var r = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: r,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(r);
  }
})(t)), ue((n) => !1)(t)), Ei = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], o = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = di();
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
    var O = Tr(ue((S) => S.kind === "teardown" && S.key === m.key)(u.source))(ue((S) => S.operation.kind === m.kind && S.operation.key === m.key && (!S.operation.context._instance || S.operation.context._instance === m.context._instance))(N));
    return m.kind !== "query" ? O = ca((S) => !!S.hasNext, !0)(O) : O = fi((S) => {
      var B = Vt(S);
      return S.stale || S.hasNext ? B : gt([B, ht(() => (S.stale = !0, S))(la(1)(ue((Ge) => Ge.key === m.key)(u.source)))]);
    })(O), m.kind !== "mutation" ? O = wr(() => {
      a.delete(m.key), r.delete(m.key), i.delete(m.key), c = !1;
      for (var S = s.length - 1; S >= 0; S--)
        s[S].key === m.key && s.splice(S, 1);
      l(St("teardown", m, m.context));
    })(bt((S) => {
      if (S.stale) {
        for (var B of s)
          if (B.key === S.operation.key) {
            a.delete(B.key);
            break;
          }
      } else
        S.hasNext || a.delete(m.key);
      r.set(m.key, S);
    })(O)) : O = ci(() => {
      l(m);
    })(O), t.maskTypename && (O = ht((S) => ({
      ...S,
      data: cr(S.data, !0)
    }))(O)), Gt(O);
  }, y = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(m) {
      m.kind === "teardown" ? p(m) : (m.kind === "mutation" || i.has(m.key)) && (s.push(m), Promise.resolve().then(p));
    },
    createRequestOperation(m, O, S) {
      S || (S = {});
      var B;
      if (process.env.NODE_ENV !== "production" && m !== "teardown" && (B = iu(O.query)) !== m)
        throw new Error(`Expected operation of type "${m}" but found "${B}"`);
      return St(m, O, {
        _instance: m === "mutation" ? n = n + 1 | 0 : void 0,
        ...o,
        ...S,
        requestPolicy: S.requestPolicy || o.requestPolicy,
        suspense: S.suspense || S.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(m) {
      return m.kind === "mutation" ? Ti(d(m)) : Ti(Jo(() => {
        var O = i.get(m.key);
        O || i.set(m.key, O = d(m)), O = ci(() => {
          p(m);
        })(O);
        var S = r.get(m.key);
        return m.kind === "query" && S && (S.stale || S.hasNext) ? fi(Vt)(gt([O, ue((B) => B === r.get(m.key))(Vt(S))])) : O;
      }));
    },
    executeQuery(m, O) {
      var S = h.createRequestOperation("query", m, O);
      return h.executeRequestOperation(S);
    },
    executeSubscription(m, O) {
      var S = h.createRequestOperation("subscription", m, O);
      return h.executeRequestOperation(S);
    },
    executeMutation(m, O) {
      var S = h.createRequestOperation("mutation", m, O);
      return h.executeRequestOperation(S);
    },
    readQuery(m, O, S) {
      var B = null;
      return nt((Ge) => {
        B = Ge;
      })(h.query(m, O, S)).unsubscribe(), B;
    },
    query: (m, O, S) => h.executeQuery(pn(m, O), S),
    subscription: (m, O, S) => h.executeSubscription(pn(m, O), S),
    mutation: (m, O, S) => h.executeMutation(pn(m, O), S)
  }), b = hu;
  if (process.env.NODE_ENV !== "production") {
    var { next: I, source: A } = di();
    h.subscribeToDebugTarget = (m) => nt(m)(A), b = I;
  }
  var T = gu(t.exchanges), N = Gt(T({
    client: h,
    dispatchDebug: b,
    forward: bu({
      dispatchDebug: b
    })
  })(u.source));
  return Ko(N), h;
};
function ye(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function He(e) {
  return ye(e) === "object";
}
function vu(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Pi(e, t) {
  return e.length < 124 ? e : t;
}
const Su = "graphql-transport-ws";
var he;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(he || (he = {}));
var Z;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(Z || (Z = {}));
function ga(e) {
  if (!He(e))
    throw new Error(`Message is expected to be an object, but got ${ye(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ye(e.type)}`);
  switch (e.type) {
    case Z.ConnectionInit:
    case Z.ConnectionAck:
    case Z.Ping:
    case Z.Pong: {
      if (e.payload != null && !He(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case Z.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!He(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ye(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ye(e.payload.query)}`);
      if (e.payload.variables != null && !He(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ye(e.payload.variables)}`);
      if (e.payload.operationName != null && ye(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ye(e.payload.operationName)}`);
      if (e.payload.extensions != null && !He(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ye(e.payload.extensions)}`);
      break;
    }
    case Z.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!He(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ye(e.payload)}`);
      break;
    }
    case Z.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!vu(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case Z.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ye(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function wu(e, t) {
  return ga(typeof e == "string" ? JSON.parse(e, t) : e);
}
function jt(e, t) {
  return ga(e), JSON.stringify(e, t);
}
function Tu(e) {
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
    retryWait: c = async function(Q) {
      let q = 1e3;
      for (let F = 0; F < Q; F++)
        q *= 2;
      await new Promise((F) => setTimeout(F, q + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = un,
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
    generateID: b = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (Q) => {
        const q = Math.random() * 16 | 0;
        return (Q == "x" ? q : q & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: I,
    jsonMessageReviver: A
  } = e;
  let T;
  if (h) {
    if (!Ou(h))
      throw new Error("Invalid WebSocket implementation provided");
    T = h;
  } else
    typeof WebSocket < "u" ? T = WebSocket : typeof global < "u" ? T = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (T = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!T)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const N = T, m = (() => {
    const _ = (() => {
      const q = {};
      return {
        on(F, J) {
          return q[F] = J, () => {
            delete q[F];
          };
        },
        emit(F) {
          var J;
          "id" in F && ((J = q[F.id]) === null || J === void 0 || J.call(q, F));
        }
      };
    })(), Q = {
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
      on(q, F) {
        const J = Q[q];
        return J.push(F), () => {
          J.splice(J.indexOf(F), 1);
        };
      },
      emit(q, ...F) {
        for (const J of [...Q[q]])
          J(...F);
      }
    };
  })();
  function O(_) {
    const Q = [
      // errors are fatal and more critical than close events, throw them first
      m.on("error", (q) => {
        Q.forEach((F) => F()), _(q);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      m.on("closed", (q) => {
        Q.forEach((F) => F()), _(q);
      })
    ];
  }
  let S, B = 0, Ge, rt = !1, it = 0, Kt = !1;
  async function Nt() {
    clearTimeout(Ge);
    const [_, Q] = await (S ?? (S = new Promise((J, Ce) => (async () => {
      if (rt) {
        if (await c(it), !B)
          return S = void 0, Ce({ code: 1e3, reason: "All Subscriptions Gone" });
        it++;
      }
      m.emit("connecting");
      const M = new N(typeof t == "function" ? await t() : t, Su);
      let Me, Be;
      function Ye() {
        isFinite(s) && s > 0 && (clearTimeout(Be), Be = setTimeout(() => {
          M.readyState === N.OPEN && (M.send(jt({ type: Z.Ping })), m.emit("ping", !1, void 0));
        }, s));
      }
      O((ne) => {
        S = void 0, clearTimeout(Me), clearTimeout(Be), Ce(ne), un(ne) && ne.code === 4499 && (M.close(4499, "Terminated"), M.onerror = null, M.onclose = null);
      }), M.onerror = (ne) => m.emit("error", ne), M.onclose = (ne) => m.emit("closed", ne), M.onopen = async () => {
        try {
          m.emit("opened", M);
          const ne = typeof n == "function" ? await n() : n;
          if (M.readyState !== N.OPEN)
            return;
          M.send(jt(ne ? {
            type: Z.ConnectionInit,
            payload: ne
          } : {
            type: Z.ConnectionInit
            // payload is completely absent if not provided
          }, I)), isFinite(u) && u > 0 && (Me = setTimeout(() => {
            M.close(he.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), Ye();
        } catch (ne) {
          m.emit("error", ne), M.close(he.InternalClientError, Pi(ne instanceof Error ? ne.message : new Error(ne).message, "Internal client error"));
        }
      };
      let ze = !1;
      M.onmessage = ({ data: ne }) => {
        try {
          const K = wu(ne, A);
          if (m.emit("message", K), K.type === "ping" || K.type === "pong") {
            m.emit(K.type, !0, K.payload), K.type === "pong" ? Ye() : o || (M.send(jt(K.payload ? {
              type: Z.Pong,
              payload: K.payload
            } : {
              type: Z.Pong
              // payload is completely absent if not provided
            })), m.emit("pong", !1, K.payload));
            return;
          }
          if (ze)
            return;
          if (K.type !== Z.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(Me), ze = !0, m.emit("connected", M, K.payload), rt = !1, it = 0, J([
            M,
            new Promise((Xt, at) => O(at))
          ]);
        } catch (K) {
          M.onmessage = null, m.emit("error", K), M.close(he.BadResponse, Pi(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    _.readyState === N.CLOSING && await Q;
    let q = () => {
    };
    const F = new Promise((J) => q = J);
    return [
      _,
      q,
      Promise.race([
        // wait for
        F.then(() => {
          if (!B) {
            const J = () => _.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ge = setTimeout(() => {
              _.readyState === N.OPEN && J();
            }, a) : J();
          }
        }),
        // or
        Q
      ])
    ];
  }
  function Pe(_) {
    if (un(_) && (Iu(_.code) || [
      he.InternalServerError,
      he.InternalClientError,
      he.BadRequest,
      he.BadResponse,
      he.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      he.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      he.SubscriberAlreadyExists,
      he.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(_.code)))
      throw _;
    if (Kt)
      return !1;
    if (un(_) && _.code === 1e3)
      return B > 0;
    if (!l || it >= l || !p(_) || d != null && d(_))
      throw _;
    return rt = !0;
  }
  return r || (async () => {
    for (B++; ; )
      try {
        const [, , _] = await Nt();
        await _;
      } catch (_) {
        try {
          if (!Pe(_))
            return;
        } catch (Q) {
          return i == null ? void 0 : i(Q);
        }
      }
  })(), {
    on: m.on,
    subscribe(_, Q) {
      const q = b(_);
      let F = !1, J = !1, Ce = () => {
        B--, F = !0;
      };
      return (async () => {
        for (B++; ; )
          try {
            const [M, Me, Be] = await Nt();
            if (F)
              return Me();
            const Ye = m.onMessage(q, (ze) => {
              switch (ze.type) {
                case Z.Next: {
                  Q.next(ze.payload);
                  return;
                }
                case Z.Error: {
                  J = !0, F = !0, Q.error(ze.payload), Ce();
                  return;
                }
                case Z.Complete: {
                  F = !0, Ce();
                  return;
                }
              }
            });
            M.send(jt({
              id: q,
              type: Z.Subscribe,
              payload: _
            }, I)), Ce = () => {
              !F && M.readyState === N.OPEN && M.send(jt({
                id: q,
                type: Z.Complete
              }, I)), B--, F = !0, Me();
            }, await Be.finally(Ye);
            return;
          } catch (M) {
            if (!Pe(M))
              return;
          }
      })().then(() => {
        J || Q.complete();
      }).catch((M) => {
        Q.error(M);
      }), () => {
        F || Ce();
      };
    },
    async dispose() {
      if (Kt = !0, S) {
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
function un(e) {
  return He(e) && "code" in e && "reason" in e;
}
function Iu(e) {
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
function Ou(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var lt = null;
typeof WebSocket < "u" ? lt = WebSocket : typeof MozWebSocket < "u" ? lt = MozWebSocket : typeof global < "u" ? lt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? lt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (lt = self.WebSocket || self.MozWebSocket);
const Eu = lt;
function Te(e) {
  if (typeof e != "object")
    return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Te(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: Te(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = Te(e[t]);
    }
    return n;
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = Te(e[t]);
    return n;
  }
  return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(Te(i));
  }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    n.set(Te(a), Te(i));
  }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(Te(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var pe;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(pe || (pe = {}));
class Pu {
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
    }), this.__gadget.instantiatedFields = Te(t), this.__gadget.persistedFields = Te(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((r) => this.__gadget.fieldKeysTracker[r] = !0));
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
  hasChanges(t = pe.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((r) => !ln(n[r], this.__gadget.fields[r]));
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
  changes(t, n = pe.SinceLoaded) {
    const i = (typeof t == "string" ? n : t || n) == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], s = this.__gadget.fields[t], o = !ln(s, a);
      return o ? { changed: o, current: s, previous: a } : { changed: o };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const o = this.__gadget.fieldKeys[s];
        ln(i[o], this.__gadget.fields[o]) || (a[o] = { current: this.__gadget.fields[o], previous: i[o] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = pe.SinceLoaded) {
    const n = t == pe.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, r = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      ln(n[a], this.__gadget.fields[a]) || (r[a] = this.__gadget.fields[a]);
    }
    return r;
  }
  changed(t, n = pe.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = pe.SinceLoaded) {
    t == pe.SinceLoaded ? this.__gadget.instantiatedFields = Te(this.__gadget.fields) : t == pe.SinceLastPersisted && (this.__gadget.persistedFields = Te(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = pe.SinceLoaded) {
    let n;
    t == pe.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const r of this.__gadget.fieldKeys)
      n.includes(r) || delete this.__gadget.fields[r];
    t == pe.SinceLoaded ? Object.assign(this.__gadget.fields, Te(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, Te(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return pr({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ba = Pu;
class va extends Error {
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
class fr extends Error {
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
class Nn extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class Ai extends Error {
  constructor(t) {
    let n;
    dr(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Au extends Error {
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
class Nu extends Error {
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
class Sa extends Error {
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
class wa extends Error {
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
class _u extends Error {
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
function Ni(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const wt = (e, t) => {
  const n = t.length;
  let r = 0;
  for (; e != null && r < n; )
    e = e[t[r++]];
  return r && r == n ? e : void 0;
}, dr = (e) => (e == null ? void 0 : e.type) == "close", $e = (e, t) => typeof e != "string" ? "" : _n(e, t), _i = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, _n = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (r) => _i(r)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (r) => r.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (r, i, a, s, o) => (i || (i = ""), "" + i + _i(a))), n;
}, ku = (e) => `${_n(e)}Sort`, xu = (e) => `${_n(e)}Filter`, ju = (e, t, n) => new Sa(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Du = (e, t) => {
  if (e.fetching)
    return;
  const n = wt(e.data, t);
  if (n === void 0)
    return new va(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null)
    return new wa(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, Ue = (e, t, n = !1) => {
  var r;
  if (e.error)
    throw e.error instanceof Yt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((o) => "[Network] " + o.message).join(`
`)), e.error;
  const i = wt(e.data, t), a = wt(i, ["edges"]), s = a ?? i;
  if (i === void 0)
    throw new va(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || n && Array.isArray(s) && s.length === 0)
    throw new wa(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, $t = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof Yt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const r = wt(e.data, t);
  return r ?? null;
}, Er = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Nu(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Sa(e.message) : new Nn(e.message, e.code);
}, Xe = (e, t) => {
  const n = Ue(e, t);
  if (!n.success) {
    const r = n.errors && n.errors[0];
    throw r ? Er(r) : new Nn("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return n;
}, Ta = (e) => {
  var t, n, r, i;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new as((i = (r = e.data) === null || r === void 0 ? void 0 : r.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Mt = (e, t) => {
  const n = Ta(e);
  return n && (t = n.apply(t)), new ba(t);
}, Pr = (e, t) => {
  const n = Ta(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((r) => new ba(r));
}, Bt = (e, t) => {
  const n = t.edges.map((r) => r.node);
  return Pr(e, n);
}, pr = (e) => {
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
          t[n] = r === void 0 ? null : pr(r);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const r = pr(e[n]);
          r !== void 0 && (t[n] = r);
        }
        return t;
      }
    }
  }
}, Bn = "gstk", ki = (e) => {
  try {
    const t = window[e];
    return t.setItem(Bn, Bn), t.removeItem(Bn), !0;
  } catch {
    return !1;
  }
}, xi = Object.prototype.toString, ji = Object.getPrototypeOf, Di = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Ft = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const r = xi.call(e), i = xi.call(t);
  let a, s, o;
  if (n.push(e, t), r != i || (a = Di(e), s = Di(t), a.length != s.length || a.some(function(u) {
    return !Ft(e[u], t[u], n);
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
        if (o = a.next(), !Ft(o.value, s.next().value, n))
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
        if (!(!(o in e) && !(o in t)) && (o in e != o in t || !Ft(e[o], t[o], n)))
          return !1;
      return !0;
    case "Object":
      return Ft(ji(e), ji(t), n);
    default:
      return !1;
  }
}, ln = (e, t) => Ft(e, t, []);
class Ia extends Error {
}
class Fu {
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
    throw Ue(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Ia("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ue(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ue(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Cu {
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
const Ru = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((r) => r.kind == "Field").name.value;
}, Fi = ma({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = Ru(e.query) || "unknown");
  }
}), Vu = ma({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), $u = 2, Mu = 4800, qu = 1e4, Lu = [he.ConnectionAcknowledgementTimeout, he.ConnectionInitialisationTimeout], Ci = Symbol.for("gadget/connection"), Uu = "token", Gu = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var re;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(re || (re = {}));
class Oa {
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
      value: re.Anonymous
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
            isFatalConnectionProblem(b) {
              return console.warn("Transport error encountered during transaction processing", b), !0;
            },
            connectionAckWaitTimeout: Mu,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new Ei({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              Fi,
              ...this.exchanges.beforeAsync,
              Gn({
                forwardSubscription(b) {
                  const I = { ...b, query: b.query || "" };
                  return {
                    subscribe: (A) => ({
                      unsubscribe: p.subscribe(I, A)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[Ci] = this, d = new Fu(y, p), this.currentTransaction = d, await d.start();
          const h = await l(d);
          return await d.commit(), h;
        } catch (y) {
          try {
            d != null && d.open && await d.rollback();
          } catch (h) {
            h instanceof Ia || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw dr(y) ? new Ai(y) : y;
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
        o = Bu(o, (l = this.options.baseRouteURL) !== null && l !== void 0 ? l : this.options.endpoint), this.isGadgetRequest(o) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == re.Custom && await this.options.authenticationMode.custom.processFetch(o, u));
        const c = await this._fetchImplementation(o, u);
        if (this.authenticationMode == re.BrowserSession) {
          const p = c.headers.get("x-set-authorization"), d = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          d && this.sessionTokenStore.setItem(this.sessionStorageKey, d);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...o) => {
      const { fetch: u } = await import("./browser-ponyfill-9389ed93.js").then((l) => l.b);
      return await u(...o);
    }, this.websocketImplementation = (r = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && r !== void 0 ? r : Eu, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Uu}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = re.InternalAuthToken : t.apiKey ? this.authenticationMode = re.APIKey : t.custom && (this.authenticationMode = re.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = re.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = re.BrowserSession;
    const n = !t || typeof t == "boolean" ? Ct.Durable : t.storageType;
    let r;
    n == Ct.Durable && ki("localStorage") ? r = window.localStorage : n == Ct.Session && ki("sessionStorage") ? r = window.sessionStorage : r = new Cu(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && r.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = r, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), hr(this.options.endpoint))
      return !!hr(n);
    const r = new URL(this.options.endpoint).host;
    return n.includes(r);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Fi, Vu];
    typeof window < "u" && t.push(yu), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Gn({
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
      Gn({
        isSubscriptionOperation: (r) => r.query.definitions.some((i) => io(i, r.variables)),
        forwardSubscription: (r) => ({
          subscribe: (i) => {
            const a = { ...r, query: r.query || "" };
            return {
              unsubscribe: Ao(Io(Po((s) => this.getBaseSubscriptionClient().subscribe(a, s))), i)
            };
          }
        })
      }),
      mu,
      ...this.exchanges.afterAll
    );
    const n = new Ei({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Ci] = this, n;
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
    return Tu({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var r, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == re.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == re.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == re.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == re.Custom && await ((i = (r = this.options.authenticationMode) === null || r === void 0 ? void 0 : r.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (r, i) => {
          var a, s, o, u, l, c;
          if (this.authenticationMode == re.BrowserSession && (i != null && i.sessionToken)) {
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
    if (this.authenticationMode == re.InternalAuthToken)
      n.authorization = "Basic " + Gu("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == re.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == re.BrowserSession) {
      const r = this.sessionTokenStore.getItem(this.sessionStorageKey);
      r && (n.authorization = `Session ${r}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), r = [], i = t.connectionAttempts || $u;
    const a = t.connectionGlobalTimeoutMs || qu, s = () => {
      r.forEach((o) => o()), r = [];
    };
    return await new Promise((o, u) => {
      const l = setTimeout(() => {
        this.disposeClient(n), p(new Au("Timeout opening websocket connection to Gadget API"));
      }, a), c = (h) => {
        if (dr(h) && Lu.includes(h.code) && i > 0) {
          i -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), y();
          return;
        }
        clearTimeout(l), u(new Ai(h));
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
Object.defineProperty(Oa, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function Bu(e, t) {
  if (typeof e != "string")
    return e;
  if (hr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function hr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class Tt extends Array {
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
    const i = new Tt();
    return i.push(...n), i.modelManager = t, i.pagination = r, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Nn("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new fr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new fr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: r, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: r || n
    });
  }
}
const yr = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof Nr) {
    let r = "";
    const i = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var o;
      return `${a}: ${s instanceof _r ? `$${(o = s.name) !== null && o !== void 0 ? o : a}` : JSON.stringify(s)}`;
    });
    return i.length > 0 && (r = `(${i.join(", ")})`), n.subselection ? [`${t}${r} {`, ...yr(n.subselection), "}"] : `${t}${r}`;
  } else
    return [`${t} {`, ...yr(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ar = (e) => {
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
    i instanceof Nr ? Object.entries(i.args).forEach(([a, s]) => {
      var o;
      s instanceof _r && (t[(o = s.name) !== null && o !== void 0 ? o : n(a)] = s);
    }) : typeof i == "object" && i !== null && Object.assign(t, Ar(i));
  }), t;
}, zu = (e) => {
  const t = Ar(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([r, i]) => `$${r}: ${i.type}`).join(", ")})`;
};
class Nr {
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
class _r {
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
const Et = (e, t) => new Nr(e, t), oe = (e) => new _r(e.type + (e.required ? "!" : ""), e.name, e.value), Qu = (e) => {
  var t;
  const n = zu(e), r = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${r} {
${yr(e.fields).join(`
`)}
}`;
}, Pt = (e) => {
  const t = Ar(e.fields);
  return {
    query: Qu(e),
    variables: Object.entries(t ?? {}).reduce((n, [r, i]) => (typeof i.value < "u" && (n[r] = i.value), n), {})
  };
}, Ht = `
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
`, At = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Wu = (e) => `
    query InternalFind${$e(e)}($id: GadgetID!, $select: [String!]) {
      ${At(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Ea = (e, t) => ({
  search: t != null && t.search ? oe({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? oe({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? oe({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? oe({ value: Pa(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Ju = (e, t) => {
  const n = $e(e), r = Ea(n, t);
  return Pt({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: Et({
          ...r,
          first: oe({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Yu = (e, t) => {
  const n = $e(e), r = Ea(n, t);
  return Pt({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: Et({
          ...r,
          after: oe({ value: t == null ? void 0 : t.after, type: "String" }),
          before: oe({ value: t == null ? void 0 : t.before, type: "String" }),
          first: oe({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: oe({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Hu = (e) => {
  const t = $e(e);
  return `
    ${Ht}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${At(e)}
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
}, Ku = (e, t) => {
  const n = $e(e), r = $e(t);
  return `
    ${Ht}

    mutation InternalBulkCreate${r}($records: [Internal${n}Input]!) {
      ${At(e)}
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
}, Xu = (e) => {
  const t = $e(e);
  return `
    ${Ht}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${At(e)}
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
}, Zu = (e) => {
  const t = $e(e);
  return `
    ${Ht}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${At(e)}
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
}, el = (e) => {
  const t = $e(e);
  return `
    ${Ht}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${At(e)}
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
class xe {
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
    }), this.capitalizedApiIdentifier = _n(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((r) => r === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let r = t;
    if (!this.validateRecord(t))
      throw new Nn(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Wu(this.apiIdentifier), { id: t, select: Pa(n == null ? void 0 : n.select) }).toPromise(), s = (r ? Ue : $t)(i, ["internal", this.apiIdentifier]);
    return Mt(i, s);
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
    const n = Yu(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise(), i = $t(r, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Bt(r, i);
    return Tt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const r = Ju(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise();
    let a;
    n === !1 ? a = $t(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ue(i, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = Bt(i, a);
    return Tt.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Hu(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), r = Xe(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Mt(n, r[this.apiIdentifier]);
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
      throw new fr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const r = $e(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Ku(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Xe(i, ["internal", `bulkCreate${r}`]);
    return Pr(i, a[this.options.pluralApiIdentifier]);
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
    Ni(t, "Can't update a record without an ID passed");
    const r = await this.connection.currentClient.mutation(Xu(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), i = Xe(r, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Mt(r, i[this.apiIdentifier]);
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
    Ni(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(Zu(this.apiIdentifier), { id: t }).toPromise();
    Xe(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(el(this.apiIdentifier), t).toPromise();
    Xe(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Pa(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, r] of Object.entries(e))
    r && t.push(n);
  return t;
}
const kr = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), xr = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, kn = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, tl = (e, t, n, r, i) => {
  const a = {};
  return typeof t < "u" && (a.id = oe({ type: "GadgetID!", value: t })), Pt({
    type: "query",
    name: e,
    fields: {
      [e]: Et(a, xr((i == null ? void 0 : i.select) || n, !0)),
      ...kr(r)
    },
    directives: kn(i)
  });
}, nl = (e, t, n, r, i, a) => jr(e, r, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), jr = (e, t, n, r) => Pt({
  type: "query",
  name: e,
  fields: {
    [e]: Et({
      after: oe({ value: r == null ? void 0 : r.after, type: "String" }),
      first: oe({ value: r == null ? void 0 : r.first, type: "Int" }),
      before: oe({ value: r == null ? void 0 : r.before, type: "String" }),
      last: oe({ value: r == null ? void 0 : r.last, type: "Int" }),
      sort: r != null && r.sort ? oe({ value: r.sort, type: `[${ku(n)}!]` }) : void 0,
      filter: r != null && r.filter ? oe({ value: r.filter, type: `[${xu(n)}!]` }) : void 0,
      search: r != null && r.search ? oe({ value: r.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: xr((r == null ? void 0 : r.select) || t, !0)
      }
    }),
    ...kr(n)
  },
  directives: kn(r)
}), Aa = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Na = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, oe(n)])), rl = (e, t, n, r, i, a, s, o, u) => {
  const l = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Et(Na(i), {
      success: !0,
      errors: Aa,
      [r]: l && !u ? xr(l, !0) : !1,
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
      ...kr(n)
    },
    directives: kn(a)
  };
  return Pt(p);
}, il = (e, t, n, r) => {
  let i = {
    [e]: Et(Na(t), {
      success: !0,
      errors: Aa,
      result: !0
    })
  };
  return n && (i = {
    [n]: i
  }), Pt({
    type: "mutation",
    name: e,
    fields: i,
    directives: kn(r)
  });
}, H = async (e, t, n, r, i, a, s = !0) => {
  const o = tl(t, n, r, i, a), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), c = (s ? Ue : $t)(u, [t]);
  return Mt(u, c);
}, xn = async (e, t, n, r, i, a, s) => {
  const o = nl(t, n, r, i, a, s), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), l = Ue(u, [t]), c = Bt(u, l);
  if (c.length > 1)
    throw ju(a, n, r);
  return c[0];
}, V = async (e, t, n, r, i, a) => {
  const s = jr(t, n, r, i), o = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let u;
  a === !1 ? u = $t(o, [t]) : u = Ue(o, [t], a);
  const l = Bt(o, u);
  return Tt.boot(e, l, { options: i, pageInfo: u.pageInfo });
}, P = async (e, t, n, r, i, a, s, o, u, l) => {
  const c = rl(t, n, r, i, s, o, u, a, l), p = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), d = u ? [u, t] : [t];
  if (a) {
    const y = wt(p.data, d), h = y[i] && n ? Pr(p, y[i]) : void 0;
    if (y.errors) {
      const b = y.errors.map((I) => Er(I));
      throw new _u(b, h);
    }
    return h;
  } else {
    const y = Xe(p, d);
    return n == null ? void 0 : l ? y.result : Mt(p, y[i]);
  }
}, al = async (e, t, n, r) => {
  const i = il(t, n, r), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return Xe(a, r ? [r, t] : [t]).result;
};
function z(e, t, n = {}, r) {
  var s;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((o) => {
    var u;
    return !((u = e.paramOnlyVariables) != null && u.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  const a = Object.entries(e.variables).find(([o, u]) => o === "id" && u.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !r[e.modelApiIdentifier])
      i = n;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, u] of Object.entries(n))
        (s = e.paramOnlyVariables) != null && s.includes(o) ? i[o] = u : a && o === a[0] ? i.id = u : i[e.modelApiIdentifier][o] = u;
    }
  else
    i = n;
  return i.id ?? (i.id = t), i;
}
const ie = {
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
async function sl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createUser",
    ie,
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
async function ol(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
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
async function ul(e, t) {
  return await P(
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
async function ll(e, t) {
  const n = z(
    this.signUp,
    void 0,
    e,
    this.signUp.variables
  );
  return await P(
    this,
    "signUpUser",
    ie,
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
class cl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "user",
        n,
        ie,
        "user",
        r
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
      async (n, r) => {
        const i = await H(
          this,
          "user",
          n,
          ie,
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
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "users",
        ie,
        "user",
        n
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
      async (n) => (await V(
        this,
        "users",
        ie,
        "user",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await V(
          this,
          "users",
          ie,
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
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (n, r) => await xn(
        this,
        "users",
        "email",
        n,
        ie,
        "user",
        r
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
    ), this.create = Object.assign(
      sl,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      ol,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      ul,
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
      async (n, r) => await P(
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
      ll,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    );
  }
}
const me = {
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
async function fl(e, t) {
  const n = z(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await P(
    this,
    "logInViaEmail",
    me,
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
async function dl(e) {
  return await P(
    this,
    "logOut",
    me,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class pl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "session",
        n,
        me,
        "session",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "session",
          n,
          me,
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
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "sessions",
        me,
        "session",
        n
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "sessions",
        me,
        "session",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "sessions",
          me,
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
        defaultSelection: me,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logInViaEmail = Object.assign(
      fl,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: me,
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
      dl,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: me,
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
const ge = {
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
async function hl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createShopifyProduct",
    ge,
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
async function yl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateShopifyProduct",
    ge,
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
async function ml(e, t) {
  return await P(
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
class gl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifyProduct",
        n,
        ge,
        "shopifyProduct",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "shopifyProduct",
          n,
          ge,
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
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifyProducts",
        ge,
        "shopifyProduct",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "shopifyProducts",
        ge,
        "shopifyProduct",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "shopifyProducts",
          ge,
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
        defaultSelection: ge,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      hl,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: ge,
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
      yl,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
      ml,
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
      async (n, r) => await P(
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
const be = {
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
async function bl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createShopifyProductImage",
    be,
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
async function vl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateShopifyProductImage",
    be,
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
async function Sl(e, t) {
  return await P(
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
class wl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifyProductImage",
        n,
        be,
        "shopifyProductImage",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "shopifyProductImage",
          n,
          be,
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
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifyProductImages",
        be,
        "shopifyProductImage",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "shopifyProductImages",
        be,
        "shopifyProductImage",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "shopifyProductImages",
          be,
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
        defaultSelection: be,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      bl,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: be,
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
      vl,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
      Sl,
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
      async (n, r) => await P(
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
const ve = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
};
async function Tl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createShopifyProductOption",
    ve,
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
async function Il(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateShopifyProductOption",
    ve,
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
async function Ol(e, t) {
  return await P(
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
class El {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifyProductOption",
        n,
        ve,
        "shopifyProductOption",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "shopifyProductOption",
          n,
          ve,
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
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifyProductOptions",
        ve,
        "shopifyProductOption",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "shopifyProductOptions",
        ve,
        "shopifyProductOption",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "shopifyProductOptions",
          ve,
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
        defaultSelection: ve,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Tl,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ve,
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
      Il,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
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
      Ol,
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
      async (n, r) => await P(
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
const Se = {
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
async function Pl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createShopifyProductVariant",
    Se,
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
async function Al(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateShopifyProductVariant",
    Se,
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
async function Nl(e, t) {
  return await P(
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
class _l {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifyProductVariant",
        n,
        Se,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "shopifyProductVariant",
          n,
          Se,
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
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifyProductVariants",
        Se,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "shopifyProductVariants",
        Se,
        "shopifyProductVariant",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "shopifyProductVariants",
          Se,
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
        defaultSelection: Se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Pl,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: Se,
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
      Al,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
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
      Nl,
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
      async (n, r) => await P(
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
const se = {
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
async function kl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createShopifyShop",
    se,
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
async function xl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateShopifyShop",
    se,
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
async function jl(e, t) {
  return await P(
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
async function Dl(e, t, n) {
  const r = z(
    this.uninstall,
    e,
    t,
    this.uninstall.variables
  );
  return await P(
    this,
    "uninstallShopifyShop",
    se,
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
async function Fl(e, t, n) {
  const r = z(
    this.reinstall,
    e,
    t,
    this.reinstall.variables
  );
  return await P(
    this,
    "reinstallShopifyShop",
    se,
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
class Cl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifyShop",
        n,
        se,
        "shopifyShop",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "shopifyShop",
          n,
          se,
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
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifyShops",
        se,
        "shopifyShop",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "shopifyShops",
        se,
        "shopifyShop",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "shopifyShops",
          se,
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
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      kl,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: se,
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
      xl,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      jl,
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
      async (n, r) => await P(
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
      Dl,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Fl,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
const we = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
};
async function Rl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createProductPairing",
    we,
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
async function Vl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
    this,
    "updateProductPairing",
    we,
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
async function $l(e, t) {
  return await P(
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
class Ml {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "productPairing",
        n,
        we,
        "productPairing",
        r
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, r) => {
        const i = await H(
          this,
          "productPairing",
          n,
          we,
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
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "productPairings",
        we,
        "productPairing",
        n
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await V(
        this,
        "productPairings",
        we,
        "productPairing",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const r = await V(
          this,
          "productPairings",
          we,
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
        defaultSelection: we,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Rl,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: we,
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
      Vl,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      $l,
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
      async (n, r) => await P(
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
const ae = {
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
async function ql(e, t) {
  const n = z(
    this.run,
    void 0,
    e,
    this.run.variables
  );
  return await P(
    this,
    "runShopifySync",
    ae,
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
async function Ll(e, t, n) {
  const r = z(
    this.complete,
    e,
    t,
    this.complete.variables
  );
  return await P(
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
async function Ul(e, t, n) {
  const r = z(
    this.error,
    e,
    t,
    this.error.variables
  );
  return await P(
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
class Gl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "shopifySync",
        n,
        ae,
        "shopifySync",
        r
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
      async (n, r) => {
        const i = await H(
          this,
          "shopifySync",
          n,
          ae,
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
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "shopifySyncs",
        ae,
        "shopifySync",
        n
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
      async (n) => (await V(
        this,
        "shopifySyncs",
        ae,
        "shopifySync",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await V(
          this,
          "shopifySyncs",
          ae,
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
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await xn(
        this,
        "shopifySyncs",
        "id",
        n,
        ae,
        "shopifySync",
        r
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
      ql,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.complete = Object.assign(
      Ll,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.error = Object.assign(
      Ul,
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
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
};
async function Bl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createAmbiguous",
    ce,
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
async function zl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
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
async function Ql(e, t) {
  return await P(
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
class Wl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "ambiguous",
        n,
        ce,
        "ambiguous",
        r
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
      async (n, r) => {
        const i = await H(
          this,
          "ambiguous",
          n,
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "ambiguouss",
        ce,
        "ambiguous",
        n
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
      async (n) => (await V(
        this,
        "ambiguouss",
        ce,
        "ambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await V(
          this,
          "ambiguouss",
          ce,
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await xn(
        this,
        "ambiguouss",
        "id",
        n,
        ce,
        "ambiguous",
        r
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
    ), this.create = Object.assign(
      Bl,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      zl,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Ql,
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
      async (n, r) => await P(
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
const fe = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
};
async function Jl(e, t) {
  const n = z(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await P(
    this,
    "createUnambiguous",
    fe,
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
async function Yl(e, t, n) {
  const r = z(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await P(
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
async function Hl(e, t) {
  return await P(
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
class Kl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, r) => await H(
        this,
        "unambiguous",
        n,
        fe,
        "unambiguous",
        r
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
      async (n, r) => {
        const i = await H(
          this,
          "unambiguous",
          n,
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await V(
        this,
        "unambiguouss",
        fe,
        "unambiguous",
        n
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
      async (n) => (await V(
        this,
        "unambiguouss",
        fe,
        "unambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
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
      async (n) => {
        const r = await V(
          this,
          "unambiguouss",
          fe,
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
        defaultSelection: fe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, r) => await xn(
        this,
        "unambiguouss",
        "id",
        n,
        fe,
        "unambiguous",
        r
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
    ), this.create = Object.assign(
      Jl,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.update = Object.assign(
      Yl,
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
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0
      }
    ), this.delete = Object.assign(
      Hl,
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
      async (n, r) => await P(
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
const ft = {
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
async function Xl(e) {
  return await P(
    this,
    "logOut",
    ft,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function Zl(e, t) {
  const n = z(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await P(
    this,
    "logInViaEmail",
    ft,
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
class ec {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (n) => await H(
        this,
        "currentSession",
        void 0,
        ft,
        "session",
        n
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: ft,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Xl,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ft,
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
      Zl,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ft,
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
const zn = "production", cn = "development", tc = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class nc {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async (s) => await al(
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
    const n = (t == null ? void 0 : t.environment) ?? tc() ?? cn;
    let r = n.toLocaleLowerCase();
    r != cn && r != zn && (console.warn("Invalid environment", n, "defaulting to development"), r = cn);
    const i = { ...t == null ? void 0 : t.exchanges };
    if (r === cn) {
      const s = ({ forward: o }) => (u) => {
        const l = o(u);
        return Zo(
          l,
          ht((c) => {
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
    if (this.connection = new Oa({
      endpoint: new URL("api/graphql", r == zn ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: i,
      environment: r == zn ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == re.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new cl(this.connection), this.session = new pl(this.connection), this.shopifyProduct = new gl(this.connection), this.shopifyProductImage = new wl(this.connection), this.shopifyProductOption = new El(this.connection), this.shopifyProductVariant = new _l(this.connection), this.shopifyShop = new Cl(this.connection), this.productPairing = new Ml(this.connection), this.shopifySync = new Gl(this.connection), this.ambiguous = new Wl(this.connection), this.unambiguous = new Kl(this.connection), this.currentSession = new ec(this.connection), this.internal = {
      user: new xe("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new xe("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new xe("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new xe("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new xe("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new xe("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new xe("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new xe("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new xe("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new xe("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new xe("unambiguous", this.connection, {
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
}
var _a = {}, jn = Re.createContext(_a);
jn.Provider;
jn.Consumer;
jn.displayName = "UrqlContext";
var rc = () => {
  var e = Re.useContext(jn);
  if (e === _a && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, ic = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, ac = (e, t) => e === t || !(!e || !t || e.key !== t.key), Qn = (e, t) => {
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
      if (s === "operation" ? !ac(r[s], i[s]) : r[s] !== i[s])
        return !0;
    return !1;
  })(e, n) ? n : e;
}, sc = (e, t) => {
  for (var n = 0, r = t.length; n < r; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, Wn = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Ri(e, t) {
  process.env.NODE_ENV !== "production" && Wn && Wn.ReactCurrentOwner && Wn.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function oc(e, t) {
  var n = Re.useRef(void 0);
  return Re.useMemo(() => {
    var r = pn(e, t);
    return n.current !== void 0 && n.current.key === r.key ? n.current : (n.current = r, r);
  }, [e, t]);
}
var uc = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
    e.operations$ && nt((r) => {
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
}, lc = (e, t) => e.suspense && (!t || t.suspense !== !1);
function cc(e) {
  var t = rc(), n = uc(t), r = lc(t, e.context), i = oc(e.query, e.variables), a = Re.useMemo(() => {
    if (e.pause)
      return null;
    var d = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return r ? bt((y) => {
      n.set(i.key, y);
    })(d) : d;
  }, [n, t, i, r, e.pause, e.requestPolicy, e.context]), s = Re.useCallback((d, y) => {
    if (!d)
      return {
        fetching: !1
      };
    var h = n.get(i.key);
    if (h) {
      if (y && h != null && "then" in h)
        throw h;
    } else {
      var b, I = nt((T) => {
        h = T, b && b(h);
      })(ca(() => y && !b || !h)(d));
      if (h == null && y) {
        var A = new Promise((T) => {
          b = T;
        });
        throw n.set(i.key, A), A;
      } else
        I.unsubscribe();
    }
    return h || {
      fetching: !0
    };
  }, [n, i]), o = [t, i, e.requestPolicy, e.context, e.pause], [u, l] = Re.useState(() => [a, Qn(ic, s(a, r)), o]), c = u[1];
  a !== u[0] && sc(u[2], o) && l([a, c = Qn(u[1], s(a, r)), o]), Re.useEffect(() => {
    var d = u[0], y = u[2][1], h = !1, b = (A) => {
      h = !0, Ri(l, (T) => {
        var N = Qn(T[1], A);
        return T[1] !== N ? [T[0], N, T[2]] : T;
      });
    };
    if (d) {
      var I = nt(b)(wr(() => {
        b({
          fetching: !1
        });
      })(d));
      return h || b({
        fetching: !0
      }), () => {
        n.dispose(y.key), I.unsubscribe();
      };
    } else
      b({
        fetching: !1
      });
  }, [n, u[0], u[2][1]]);
  var p = Re.useCallback((d) => {
    var y = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...d
    };
    Ri(l, (h) => [r ? bt((b) => {
      n.set(i.key, b);
    })(t.executeQuery(i, y)) : t.executeQuery(i, y), h[1], o]);
  }, [t, n, i, r, s, e.requestPolicy, e.context]);
  return [c, p];
}
const fc = Tn.createContext(void 0);
Tn.createContext(void 0);
const dc = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", pc = (e, t) => {
  let n = "";
  return e !== void 0 ? n = `[Network] ${e.message}` : t !== void 0 ? t.forEach((r) => {
    n += `[GraphQL] ${r.message}
`;
  }) : n = "Unknown error", n.trim();
}, hc = (e) => typeof e == "string" ? new R(e) : e != null && e.message && !e.code ? new R(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class Ze extends Error {
  /** @private */
  static forClientSideError(t, n) {
    return new Ze({
      executionErrors: [t],
      response: n
    });
  }
  /** @private */
  static forErrorsResponse(t, n) {
    return new Ze({
      executionErrors: t.map(Er),
      response: n
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new Ze({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, n, r = !1) {
    const i = Du(t, n);
    let a = Ze.forMaybeCombinedError(t.error);
    return !a && i && !r && (a = Ze.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: n, response: r }) {
    const i = (n || []).map(hc), a = pc(t, i);
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
const yc = (e) => {
  const { context: t, suspense: n, ...r } = e ?? {}, i = Jn(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...r,
    context: i
  };
}, mc = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), gc = (e) => {
  if (!Za(fc))
    throw new Error(dc);
  const t = yc(e);
  return cc(t);
};
var bc = typeof Element < "u", vc = typeof Map == "function", Sc = typeof Set == "function", wc = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function hn(e, t) {
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
        if (!hn(e[r], t[r]))
          return !1;
      return !0;
    }
    var a;
    if (vc && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!hn(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Sc && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (wc && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (bc && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !hn(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Tc = function(t, n) {
  try {
    return hn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Ic = /* @__PURE__ */ ts(Tc), Oc = (e) => {
  const t = es();
  return e ? (t.current === void 0 || !Ic(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, Ec = (e, t) => {
  const n = Oc(t), r = Jn(() => jr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, n), [e, n]), [i, a] = gc(mc(r, t));
  return [Jn(() => {
    const o = [e.findMany.operationName];
    let u = i.data;
    if (u) {
      const c = wt(i.data, o);
      if (c) {
        const p = Bt(i, c);
        u = Tt.boot(e, p, c);
      }
    }
    const l = Ze.errorIfDataAbsent(i, o, t == null ? void 0 : t.pause);
    return { ...i, data: u, error: l };
  }, [e, i]), a];
}, Pc = new nc(), _c = () => {
  const [{ data: e }] = Ec(Pc.shopifyProduct);
  return /* @__PURE__ */ Yr.jsx(Yr.Fragment, { children: JSON.stringify(e) });
};
export {
  _c as R,
  Nc as c
};
