import * as Fe from "react";
import sr, { useMemo as Or, useContext as ra, useRef as na } from "react";
var Vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nr = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function aa() {
  if (In)
    return Pt;
  In = 1;
  var e = sr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, d) {
    var c, f = {}, m = null, h = null;
    d !== void 0 && (m = "" + d), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l)
      n.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (u && u.defaultProps)
      for (c in l = u.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: u, key: m, ref: h, props: f, _owner: i.current };
  }
  return Pt.Fragment = r, Pt.jsx = o, Pt.jsxs = o, Pt;
}
var _t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function oa() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = sr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, A = "@@iterator";
    function C(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = g && s[g] || s[A];
      return typeof p == "function" ? p : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(s) {
      {
        for (var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), I = 1; I < p; I++)
          b[I - 1] = arguments[I];
        q("error", s, b);
      }
    }
    function q(s, p, b) {
      {
        var I = F.ReactDebugCurrentFrame, T = I.getStackAddendum();
        T !== "" && (p += "%s", b = b.concat([T]));
        var R = b.map(function(_) {
          return String(_);
        });
        R.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, R);
      }
    }
    var y = !1, w = !1, v = !1, B = !1, Ue = !1, ut;
    ut = Symbol.for("react.module.reference");
    function lt(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === a || Ue || s === i || s === d || s === c || B || s === h || y || w || v || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === f || s.$$typeof === o || s.$$typeof === u || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === ut || s.getModuleId !== void 0));
    }
    function Gt(s, p, b) {
      var I = s.displayName;
      if (I)
        return I;
      var T = p.displayName || p.name || "";
      return T !== "" ? b + "(" + T + ")" : b;
    }
    function Nt(s) {
      return s.displayName || "Context";
    }
    function ge(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var p = s;
            return Nt(p) + ".Consumer";
          case o:
            var b = s;
            return Nt(b._context) + ".Provider";
          case l:
            return Gt(s, s.render, "ForwardRef");
          case f:
            var I = s.displayName || null;
            return I !== null ? I : ge(s.type) || "Memo";
          case m: {
            var T = s, R = T._payload, _ = T._init;
            try {
              return ge(_(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, j = 0, D, P, $, Pe, x, $e, Ge;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Le() {
      {
        if (j === 0) {
          D = console.log, P = console.info, $ = console.warn, Pe = console.error, x = console.group, $e = console.groupCollapsed, Ge = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        j++;
      }
    }
    function J() {
      {
        if (j--, j === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, s, {
              value: D
            }),
            info: k({}, s, {
              value: P
            }),
            warn: k({}, s, {
              value: $
            }),
            error: k({}, s, {
              value: Pe
            }),
            group: k({}, s, {
              value: x
            }),
            groupCollapsed: k({}, s, {
              value: $e
            }),
            groupEnd: k({}, s, {
              value: Ge
            })
          });
        }
        j < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = F.ReactCurrentDispatcher, Lt;
    function ct(s, p, b) {
      {
        if (Lt === void 0)
          try {
            throw Error();
          } catch (T) {
            var I = T.stack.trim().match(/\n( *(at )?)/);
            Lt = I && I[1] || "";
          }
        return `
` + Lt + s;
      }
    }
    var pr = !1, zt;
    {
      var Di = typeof WeakMap == "function" ? WeakMap : Map;
      zt = new Di();
    }
    function sn(s, p) {
      if (!s || pr)
        return "";
      {
        var b = zt.get(s);
        if (b !== void 0)
          return b;
      }
      var I;
      pr = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = U.current, U.current = null, Le();
      try {
        if (p) {
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
            } catch (qe) {
              I = qe;
            }
            Reflect.construct(s, [], _);
          } else {
            try {
              _.call();
            } catch (qe) {
              I = qe;
            }
            s.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            I = qe;
          }
          s();
        }
      } catch (qe) {
        if (qe && I && typeof qe.stack == "string") {
          for (var E = qe.stack.split(`
`), se = I.stack.split(`
`), G = E.length - 1, W = se.length - 1; G >= 1 && W >= 0 && E[G] !== se[W]; )
            W--;
          for (; G >= 1 && W >= 0; G--, W--)
            if (E[G] !== se[W]) {
              if (G !== 1 || W !== 1)
                do
                  if (G--, W--, W < 0 || E[G] !== se[W]) {
                    var ve = `
` + E[G].replace(" at new ", " at ");
                    return s.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", s.displayName)), typeof s == "function" && zt.set(s, ve), ve;
                  }
                while (G >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        pr = !1, U.current = R, J(), Error.prepareStackTrace = T;
      }
      var ft = s ? s.displayName || s.name : "", Sn = ft ? ct(ft) : "";
      return typeof s == "function" && zt.set(s, Sn), Sn;
    }
    function Ri(s, p, b) {
      return sn(s, !1);
    }
    function Fi(s) {
      var p = s.prototype;
      return !!(p && p.isReactComponent);
    }
    function Wt(s, p, b) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return sn(s, Fi(s));
      if (typeof s == "string")
        return ct(s);
      switch (s) {
        case d:
          return ct("Suspense");
        case c:
          return ct("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return Ri(s.render);
          case f:
            return Wt(s.type, p, b);
          case m: {
            var I = s, T = I._payload, R = I._init;
            try {
              return Wt(R(T), p, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Kt = Object.prototype.hasOwnProperty, un = {}, ln = F.ReactDebugCurrentFrame;
    function Qt(s) {
      if (s) {
        var p = s._owner, b = Wt(s.type, s._source, p ? p.type : null);
        ln.setExtraStackFrame(b);
      } else
        ln.setExtraStackFrame(null);
    }
    function ji(s, p, b, I, T) {
      {
        var R = Function.call.bind(Kt);
        for (var _ in s)
          if (R(s, _)) {
            var E = void 0;
            try {
              if (typeof s[_] != "function") {
                var se = Error((I || "React class") + ": " + b + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              E = s[_](p, _, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              E = G;
            }
            E && !(E instanceof Error) && (Qt(T), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, _, typeof E), Qt(null)), E instanceof Error && !(E.message in un) && (un[E.message] = !0, Qt(T), S("Failed %s type: %s", b, E.message), Qt(null));
          }
      }
    }
    var Mi = Array.isArray;
    function yr(s) {
      return Mi(s);
    }
    function $i(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, b = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return b;
      }
    }
    function qi(s) {
      try {
        return cn(s), !1;
      } catch {
        return !0;
      }
    }
    function cn(s) {
      return "" + s;
    }
    function dn(s) {
      if (qi(s))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $i(s)), cn(s);
    }
    var Et = F.ReactCurrentOwner, Bi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fn, pn, mr;
    mr = {};
    function Vi(s) {
      if (Kt.call(s, "ref")) {
        var p = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Ui(s) {
      if (Kt.call(s, "key")) {
        var p = Object.getOwnPropertyDescriptor(s, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Gi(s, p) {
      if (typeof s.ref == "string" && Et.current && p && Et.current.stateNode !== p) {
        var b = ge(Et.current.type);
        mr[b] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ge(Et.current.type), s.ref), mr[b] = !0);
      }
    }
    function Li(s, p) {
      {
        var b = function() {
          fn || (fn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function zi(s, p) {
      {
        var b = function() {
          pn || (pn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Wi = function(s, p, b, I, T, R, _) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: p,
        ref: b,
        props: _,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Ki(s, p, b, I, T) {
      {
        var R, _ = {}, E = null, se = null;
        b !== void 0 && (dn(b), E = "" + b), Ui(p) && (dn(p.key), E = "" + p.key), Vi(p) && (se = p.ref, Gi(p, T));
        for (R in p)
          Kt.call(p, R) && !Bi.hasOwnProperty(R) && (_[R] = p[R]);
        if (s && s.defaultProps) {
          var G = s.defaultProps;
          for (R in G)
            _[R] === void 0 && (_[R] = G[R]);
        }
        if (E || se) {
          var W = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          E && Li(_, W), se && zi(_, W);
        }
        return Wi(s, E, se, T, I, Et.current, _);
      }
    }
    var hr = F.ReactCurrentOwner, yn = F.ReactDebugCurrentFrame;
    function dt(s) {
      if (s) {
        var p = s._owner, b = Wt(s.type, s._source, p ? p.type : null);
        yn.setExtraStackFrame(b);
      } else
        yn.setExtraStackFrame(null);
    }
    var br;
    br = !1;
    function gr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function mn() {
      {
        if (hr.current) {
          var s = ge(hr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Qi(s) {
      {
        if (s !== void 0) {
          var p = s.fileName.replace(/^.*[\\\/]/, ""), b = s.lineNumber;
          return `

Check your code at ` + p + ":" + b + ".";
        }
        return "";
      }
    }
    var hn = {};
    function Ji(s) {
      {
        var p = mn();
        if (!p) {
          var b = typeof s == "string" ? s : s.displayName || s.name;
          b && (p = `

Check the top-level render call using <` + b + ">.");
        }
        return p;
      }
    }
    function bn(s, p) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var b = Ji(p);
        if (hn[b])
          return;
        hn[b] = !0;
        var I = "";
        s && s._owner && s._owner !== hr.current && (I = " It was passed a child from " + ge(s._owner.type) + "."), dt(s), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), dt(null);
      }
    }
    function gn(s, p) {
      {
        if (typeof s != "object")
          return;
        if (yr(s))
          for (var b = 0; b < s.length; b++) {
            var I = s[b];
            gr(I) && bn(I, p);
          }
        else if (gr(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var T = C(s);
          if (typeof T == "function" && T !== s.entries)
            for (var R = T.call(s), _; !(_ = R.next()).done; )
              gr(_.value) && bn(_.value, p);
        }
      }
    }
    function Yi(s) {
      {
        var p = s.type;
        if (p == null || typeof p == "string")
          return;
        var b;
        if (typeof p == "function")
          b = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === f))
          b = p.propTypes;
        else
          return;
        if (b) {
          var I = ge(p);
          ji(b, s.props, "prop", I, s);
        } else if (p.PropTypes !== void 0 && !br) {
          br = !0;
          var T = ge(p);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hi(s) {
      {
        for (var p = Object.keys(s.props), b = 0; b < p.length; b++) {
          var I = p[b];
          if (I !== "children" && I !== "key") {
            dt(s), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), dt(null);
            break;
          }
        }
        s.ref !== null && (dt(s), S("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function vn(s, p, b, I, T, R) {
      {
        var _ = lt(s);
        if (!_) {
          var E = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Qi(T);
          se ? E += se : E += mn();
          var G;
          s === null ? G = "null" : yr(s) ? G = "array" : s !== void 0 && s.$$typeof === t ? (G = "<" + (ge(s.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : G = typeof s, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, E);
        }
        var W = Ki(s, p, b, T, R);
        if (W == null)
          return W;
        if (_) {
          var ve = p.children;
          if (ve !== void 0)
            if (I)
              if (yr(ve)) {
                for (var ft = 0; ft < ve.length; ft++)
                  gn(ve[ft], s);
                Object.freeze && Object.freeze(ve);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gn(ve, s);
        }
        return s === n ? Hi(W) : Yi(W), W;
      }
    }
    function Zi(s, p, b) {
      return vn(s, p, b, !0);
    }
    function Xi(s, p, b) {
      return vn(s, p, b, !1);
    }
    var ea = Xi, ta = Zi;
    _t.Fragment = n, _t.jsx = ea, _t.jsxs = ta;
  }()), _t;
}
process.env.NODE_ENV === "production" ? Nr.exports = aa() : Nr.exports = oa();
var An = Nr.exports, Ur = () => {
}, ye = Ur;
function Ee(e) {
  return {
    tag: 0,
    0: e
  };
}
function Bt(e) {
  return {
    tag: 1,
    0: e
  };
}
var sa = (e) => e;
function H(e) {
  return (t) => (r) => {
    var n = ye;
    t((i) => {
      i === 0 ? r(0) : i.tag === 0 ? (n = i[0], r(i)) : e(i[0]) ? r(i) : n(0);
    });
  };
}
function bt(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(Bt(e(n[0])));
  });
}
function jt(e) {
  return (t) => (r) => {
    var n = [], i = ye, a = !1, o = !1;
    t((u) => {
      o || (u === 0 ? (o = !0, n.length || r(0)) : u.tag === 0 ? i = u[0] : (a = !1, function(d) {
        var c = ye;
        d((f) => {
          if (f === 0) {
            if (n.length) {
              var m = n.indexOf(c);
              m > -1 && (n = n.slice()).splice(m, 1), n.length || (o ? r(0) : a || (a = !0, i(0)));
            }
          } else
            f.tag === 0 ? (n.push(c = f[0]), c(0)) : n.length && (r(f), c(0));
        });
      }(e(u[0])), a || (a = !0, i(0))));
    }), r(Ee((u) => {
      if (u === 1) {
        o || (o = !0, i(1));
        for (var l = 0, d = n, c = n.length; l < c; l++)
          d[l](1);
        n.length = 0;
      } else {
        !o && !a ? (a = !0, i(0)) : a = !1;
        for (var f = 0, m = n, h = n.length; f < h; f++)
          m[f](0);
      }
    }));
  };
}
function ua(e) {
  return jt(sa)(e);
}
function gt(e) {
  return ua(da(e));
}
function Gr(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0), e();
        else if (i.tag === 0) {
          var a = i[0];
          r(Ee((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          r(i);
    });
  };
}
function vt(e) {
  return (t) => (r) => {
    var n = !1;
    t((i) => {
      if (!n)
        if (i === 0)
          n = !0, r(0);
        else if (i.tag === 0) {
          var a = i[0];
          r(Ee((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(i[0]), r(i);
    });
  };
}
function kn(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function Mt(e) {
  var t = [], r = ye, n = !1;
  return (i) => {
    t.push(i), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, u = t, l = t.length; o < l; o++)
          u[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        n = !1;
        for (var d = 0, c = t, f = t.length; d < f; d++)
          c[d](a);
      }
    }), i(Ee((a) => {
      if (a === 1) {
        var o = t.indexOf(i);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function On(e) {
  return (t) => (r) => {
    var n = ye, i = ye, a = !1, o = !1, u = !1, l = !1;
    t((d) => {
      l || (d === 0 ? (l = !0, u || r(0)) : d.tag === 0 ? n = d[0] : (u && (i(1), i = ye), a ? a = !1 : (a = !0, n(0)), function(f) {
        u = !0, f((m) => {
          u && (m === 0 ? (u = !1, l ? r(0) : a || (a = !0, n(0))) : m.tag === 0 ? (o = !1, (i = m[0])(0)) : (r(m), o ? o = !1 : i(0)));
        });
      }(e(d[0]))));
    }), r(Ee((d) => {
      d === 1 ? (l || (l = !0, n(1)), u && (u = !1, i(1))) : (!l && !a && (a = !0, n(0)), u && !o && (o = !0, i(0)));
    }));
  };
}
function ur(e) {
  return (t) => (r) => {
    var n = ye, i = !1, a = 0;
    t((o) => {
      i || (o === 0 ? (i = !0, r(0)) : o.tag === 0 ? e <= 0 ? (i = !0, r(0), o[0](1)) : n = o[0] : a++ < e ? (r(o), !i && a >= e && (i = !0, r(0), n(1))) : r(o));
    }), r(Ee((o) => {
      o === 1 && !i ? (i = !0, n(1)) : o === 0 && !i && a < e && n(0);
    }));
  };
}
function Lr(e) {
  return (t) => (r) => {
    var n = ye, i = ye, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, i(1), r(0)) : o.tag === 0 ? (n = o[0], e((u) => {
        u === 0 || (u.tag === 0 ? (i = u[0])(0) : (a = !0, i(1), n(1), r(0)));
      })) : r(o));
    }), r(Ee((o) => {
      o === 1 && !a ? (a = !0, n(1), i(1)) : a || n(0);
    }));
  };
}
function ni(e, t) {
  return (r) => (n) => {
    var i = ye, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (i = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), i(1)));
    });
  };
}
function la(e) {
  return (t) => e()(t);
}
function ii(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, i = !1, a = !1, o;
    t(Ee(async (u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(Bt(o.value));
            } catch (l) {
              if (r.throw)
                (n = !!(await r.throw(l)).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
function ca(e) {
  return e[Symbol.asyncIterator] ? ii(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, i = !1, a = !1, o;
    t(Ee((u) => {
      if (u === 1)
        n = !0, r.return && r.return();
      else if (i)
        a = !0;
      else {
        for (a = i = !0; a && !n; )
          if ((o = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(Bt(o.value));
            } catch (l) {
              if (r.throw)
                (n = !!r.throw(l).done) && t(0);
              else
                throw l;
            }
        i = !1;
      }
    }));
  };
}
var da = ca;
function xt(e) {
  return (t) => {
    var r = !1;
    t(Ee((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(Bt(e)), t(0));
    }));
  };
}
function zr(e) {
  return (t) => {
    var r = !1, n = e({
      next(i) {
        r || t(Bt(i));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Ee((i) => {
      i === 1 && !r && (r = !0, n());
    }));
  };
}
function Nn() {
  var e, t;
  return {
    source: Mt(zr((r) => (e = r.next, t = r.complete, Ur))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function En(e) {
  return zr((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), Ur));
}
function ot(e) {
  return (t) => {
    var r = ye, n = !1;
    return t((i) => {
      i === 0 ? n = !0 : i.tag === 0 ? (r = i[0])(0) : n || (e(i[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function fa(e) {
  ot((t) => {
  })(e);
}
var vr = {
  done: !0
}, pa = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, n = ye, i;
    return e((a) => {
      r || (a === 0 ? (i && (i = i(vr)), r = !0) : a.tag === 0 ? (n = a[0])(0) : i ? i = i({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? vr : (!r && t.length <= 1 && n(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => i = a));
      },
      async return() {
        return r || (i = n(1)), r = !0, vr;
      }
    };
  }
});
function Wr(e) {
  return new Promise((t) => {
    var r = ye, n;
    e((i) => {
      i === 0 ? Promise.resolve(n).then(t) : i.tag === 0 ? (r = i[0])(0) : (n = i[0], r(0));
    });
  });
}
var Kr = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, ht = {
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
class $t extends Error {
  constructor(t, r, n, i, a, o, u) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), i && (this.positions = i), o && (this.originalError = o);
    var l = u;
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
}
var M, O;
function Q(e) {
  return new $t(`Syntax Error: Unexpected token at ${O} in ${e}`);
}
function be(e) {
  if (e.lastIndex = O, e.test(M))
    return M.slice(O, O = e.lastIndex);
}
var Jt = / +(?=[^\s])/y;
function ya(e) {
  for (var t = e.split(`
`), r = "", n = 0, i = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Jt.lastIndex = 0, Jt.test(t[o]) && (o && (!n || Jt.lastIndex < n) && (n = Jt.lastIndex), i = i || o, a = o);
  for (var u = i; u <= a; u++)
    u !== i && (r += `
`), r += t[u].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function N() {
  for (var e = 0 | M.charCodeAt(O++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | M.charCodeAt(O++))
    if (e === 35)
      for (; (e = M.charCodeAt(O++)) !== 10 && e !== 13; )
        ;
  O--;
}
var ai = /[_A-Za-z]\w*/y;
function Me() {
  var e;
  if (e = be(ai))
    return {
      kind: "Name",
      value: e
    };
}
var ma = /(?:null|true|false)/y, oi = /\$[_A-Za-z]\w*/y, ha = /-?\d+/y, ba = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, ga = /\\/g, va = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Sa = /"(?:"|[^\r\n]*?[^\\]")/y;
function nr(e) {
  var t, r;
  if (r = be(ma))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = be(oi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = be(ha)) {
    var n = r;
    (r = be(ba)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = be(ai))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = be(va))
    t = {
      kind: "StringValue",
      value: ya(r.slice(3, -3)),
      block: !0
    };
  else if (r = be(Sa))
    t = {
      kind: "StringValue",
      value: ga.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (M.charCodeAt(O) === 91) {
      O++, N();
      for (var u = []; o = nr(a); )
        u.push(o);
      if (M.charCodeAt(O++) !== 93)
        throw Q("ListValue");
      return N(), {
        kind: "ListValue",
        values: u
      };
    }
  }(e) || function(a) {
    if (M.charCodeAt(O) === 123) {
      O++, N();
      for (var o = [], u; u = Me(); ) {
        if (N(), M.charCodeAt(O++) !== 58)
          throw Q("ObjectField");
        N();
        var l = nr(a);
        if (!l)
          throw Q("ObjectField");
        o.push({
          kind: "ObjectField",
          name: u,
          value: l
        });
      }
      if (M.charCodeAt(O++) !== 125)
        throw Q("ObjectValue");
      return N(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return N(), t;
}
function si(e) {
  var t = [];
  if (N(), M.charCodeAt(O) === 40) {
    O++, N();
    for (var r; r = Me(); ) {
      if (N(), M.charCodeAt(O++) !== 58)
        throw Q("Argument");
      N();
      var n = nr(e);
      if (!n)
        throw Q("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || M.charCodeAt(O++) !== 41)
      throw Q("Argument");
    N();
  }
  return t;
}
function St(e) {
  var t = [];
  for (N(); M.charCodeAt(O) === 64; ) {
    O++;
    var r = Me();
    if (!r)
      throw Q("Directive");
    N(), t.push({
      kind: "Directive",
      name: r,
      arguments: si(e)
    });
  }
  return t;
}
function Ia() {
  var e = Me();
  if (e) {
    N();
    var t;
    if (M.charCodeAt(O) === 58) {
      if (O++, N(), t = e, !(e = Me()))
        throw Q("Field");
      N();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: si(!1),
      directives: St(!1),
      selectionSet: lr()
    };
  }
}
function ui() {
  var e;
  if (N(), M.charCodeAt(O) === 91) {
    O++, N();
    var t = ui();
    if (!t || M.charCodeAt(O++) !== 93)
      throw Q("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Me())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw Q("NamedType");
  return N(), M.charCodeAt(O) === 33 ? (O++, N(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var wa = /on/y;
function li() {
  if (be(wa)) {
    N();
    var e = Me();
    if (!e)
      throw Q("NamedType");
    return N(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Aa = /\.\.\./y;
function ka() {
  if (be(Aa)) {
    N();
    var e = O, t;
    if ((t = Me()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: St(!1)
      };
    O = e;
    var r = li(), n = St(!1), i = lr();
    if (!i)
      throw Q("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: i
    };
  }
}
function lr() {
  var e;
  if (N(), M.charCodeAt(O) === 123) {
    O++, N();
    for (var t = []; e = ka() || Ia(); )
      t.push(e);
    if (!t.length || M.charCodeAt(O++) !== 125)
      throw Q("SelectionSet");
    return N(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Oa = /fragment/y;
function Na() {
  if (be(Oa)) {
    N();
    var e = Me();
    if (!e)
      throw Q("FragmentDefinition");
    N();
    var t = li();
    if (!t)
      throw Q("FragmentDefinition");
    var r = St(!1), n = lr();
    if (!n)
      throw Q("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var Ea = /(?:query|mutation|subscription)/y;
function Pa() {
  var e, t, r = [], n = [];
  (e = be(Ea)) && (N(), t = Me(), r = function() {
    var o, u = [];
    if (N(), M.charCodeAt(O) === 40) {
      for (O++, N(); o = be(oi); ) {
        if (N(), M.charCodeAt(O++) !== 58)
          throw Q("VariableDefinition");
        var l = ui(), d = void 0;
        if (M.charCodeAt(O) === 61 && (O++, N(), !(d = nr(!0))))
          throw Q("VariableDefinition");
        N(), u.push({
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
          directives: St(!0)
        });
      }
      if (M.charCodeAt(O++) !== 41)
        throw Q("VariableDefinition");
      N();
    }
    return u;
  }(), n = St(!1));
  var i = lr();
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
function _a(e, t) {
  return M = typeof e.body == "string" ? e.body : e, O = 0, function() {
    var n;
    N();
    for (var i = []; n = Na() || Pa(); )
      i.push(n);
    return {
      kind: "Document",
      definitions: i
    };
  }();
}
function Ca(e) {
  return JSON.stringify(e);
}
function Ta(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Se = (e) => !(!e || !e.length), oe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Se(e.variableDefinitions) && !Se(e.directives))
      return oe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Se(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(oe.VariableDefinition).join(", ") + ")"), Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + oe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = oe.Variable(e.variable) + ": " + Ie(e.type);
    return e.defaultValue && (t += " = " + Ie(e.defaultValue)), Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Se(e.arguments)) {
      var r = e.arguments.map(oe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), e.selectionSet ? t + " " + oe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Ta(e.value) : Ca(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(Ie).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(oe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + Ie(e.value),
  Document: (e) => Se(e.definitions) ? e.definitions.map(Ie).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(Ie).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + Ie(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + Ie(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Se(e.directives) && (t += " " + e.directives.map(oe.Directive).join(" ")), t + " " + Ie(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Se(e.arguments) && (t += "(" + e.arguments.map(oe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + Ie(e.type) + "]",
  NonNullType: (e) => Ie(e.type) + "!"
};
function Ie(e) {
  return oe[e.kind] ? oe[e.kind](e) : "";
}
var xa = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new $t(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new $t(e);
class Vt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(xa), n = ((i, a) => {
      var o = "";
      if (i)
        return `[Network] ${i.message}`;
      if (a)
        for (var u of a)
          o && (o += `
`), o += `[GraphQL] ${u.message}`;
      return o;
    })(t.networkError, r);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var Er = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, at = /* @__PURE__ */ new Set(), Pn = /* @__PURE__ */ new WeakMap(), yt = (e) => {
  if (e === null || at.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return yt(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += yt(r) || "null";
    return t += "]";
  } else if (ar !== It && e instanceof ar || or !== It && e instanceof or)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var i = Pn.get(e) || Math.random().toString(36).slice(2);
    return Pn.set(e, i), yt({
      __key: i
    });
  }
  at.add(e);
  var a = "{";
  for (var o of n) {
    var u = yt(e[o]);
    u && (a.length > 1 && (a += ","), a += yt(o) + ":" + u);
  }
  return at.delete(e), a += "}";
}, Pr = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || at.has(r)))
    if (Array.isArray(r))
      for (var n = 0, i = r.length; n < i; n++)
        Pr(e, `${t}.${n}`, r[n]);
    else if (r instanceof ar || r instanceof or)
      e.set(t, r);
    else {
      at.add(r);
      for (var a of Object.keys(r))
        Pr(e, `${t}.${a}`, r[a]);
    }
}, ir = (e) => (at.clear(), yt(e));
class It {
}
var ar = typeof File < "u" ? File : It, or = typeof Blob < "u" ? Blob : It, Da = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ra = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Fa = (e, t) => t % 2 == 0 ? e.replace(Ra, `
`) : e, _n = (e) => e.split(Da).map(Fa).join("").trim(), Cn = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Qr = (e) => {
  var t;
  return typeof e == "string" ? t = _n(e) : e.loc && Xt.get(e.__key) === e ? t = e.loc.source.body : (t = Cn.get(e) || _n(Ie(e)), Cn.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Tn = (e) => {
  var t = Er(Qr(e));
  if (e.definitions) {
    var r = di(e);
    r && (t = Er(`
# ${r}`, t));
  }
  return t;
}, ci = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Tn(e), r = Xt.get(t) || _a(e)) : (t = e.__key || Tn(e), r = Xt.get(t) || e), r.loc || Qr(r), r.__key = t, Xt.set(t, r), r;
}, er = (e, t, r) => {
  var n = t || {}, i = ci(e), a = ir(n), o = i.__key;
  return a !== "{}" && (o = Er(a, o)), {
    key: o,
    query: i,
    variables: n,
    extensions: r
  };
}, di = (e) => {
  for (var t of e.definitions)
    if (t.kind === ht.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, ja = (e) => {
  for (var t of e.definitions)
    if (t.kind === ht.OPERATION_DEFINITION)
      return t.operation;
}, _r = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Vt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, Cr = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Cr(e[r], t[r]);
    return e;
  }
  return t;
}, Tr = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], i = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var u = {
    data: e.data
  };
  if (o)
    for (var l of o) {
      Array.isArray(l.errors) && n.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), i = !0);
      for (var d = "data", c = u, f = 0, m = l.path.length; f < m; d = l.path[f++])
        c = c[d] = Array.isArray(c[d]) ? [...c[d]] : {
          ...c[d]
        };
      if (l.items)
        for (var h = +d >= 0 ? d : 0, g = 0, A = l.items.length; g < A; g++)
          c[h + g] = Cr(c[h + g], l.items[g]);
      else
        l.data !== void 0 && (c[d] = Cr(c[d], l.data));
    }
  else
    u.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: u.data,
    error: n.length ? new Vt({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: i ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, fi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new Vt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function pi(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Qr(e.query),
    operationName: di(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Ma = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var i in t) {
    var a = t[i];
    a && n.searchParams.set(i, typeof a == "object" ? ir(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, $a = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = ir(t), n = ((u) => {
      var l = /* @__PURE__ */ new Map();
      return (ar !== It || or !== It) && (at.clear(), Pr(l, "variables", u)), l;
    })(t.variables);
    if (n.size) {
      var i = new FormData();
      i.append("operations", r), i.append("map", ir({
        ...[...n.keys()].map((u) => [u])
      }));
      var a = 0;
      for (var o of n.values())
        i.append("" + a++, o);
      return i;
    }
    return r;
  }
}, qa = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var i in n.headers)
      r[i.toLowerCase()] = n.headers[i];
  var a = $a(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, Ba = typeof TextDecoder < "u" ? new TextDecoder() : null, Va = /boundary="?([^=";]+)"?/i, Ua = /data: ?([^\n]+)/, xn = (e) => e.constructor.name === "Buffer" ? e.toString() : Ba.decode(e);
async function* Dn(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield xn(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield xn(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Rn(e, t) {
  var r = "", n;
  for await (var i of e)
    for (r += i; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* Ga(e, t, r) {
  var n = !0, i = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", u;
    if (/multipart\/mixed/i.test(o))
      u = async function* (c, f) {
        var m = c.match(Va), h = "--" + (m ? m[1] : "-"), g = !0, A;
        for await (var C of Rn(Dn(f), `\r
` + h)) {
          if (g) {
            g = !1;
            var F = C.indexOf(h);
            if (F > -1)
              C = C.slice(F + h.length);
            else
              continue;
          }
          try {
            yield A = JSON.parse(C.slice(C.indexOf(`\r
\r
`) + 4));
          } catch (S) {
            if (!A)
              throw S;
          }
          if (A && A.hasNext === !1)
            break;
        }
        A && A.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      u = async function* (c) {
        var f;
        for await (var m of Rn(Dn(c), `

`)) {
          var h = m.match(Ua);
          if (h) {
            var g = h[1];
            try {
              yield f = JSON.parse(g);
            } catch (A) {
              if (!f)
                throw A;
            }
            if (f && f.hasNext === !1)
              break;
          }
        }
        f && f.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(o))
      u = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of u)
      i = i ? Tr(i, l, a) : _r(e, l, a), n = !1, yield i, n = !0;
    i || (yield i = _r(e, {}, a));
  } catch (d) {
    if (!n)
      throw d;
    yield fi(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function La(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), Gr(() => {
    n && n.abort();
  })(H((i) => !!i)(ii(Ga(e, t, r))));
}
var xr = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      xr(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : xr(e[n], t);
  return t;
}, Dr = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var i = Dr(n);
      t = t || i !== n, r.push(i);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === ht.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var u of e.selectionSet.selections || []) {
        o = o || u.kind === ht.FIELD && u.name.value === "__typename" && !u.alias;
        var l = Dr(u);
        t = t || l !== u, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: ht.FIELD,
        name: {
          kind: ht.NAME,
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
}, Fn = /* @__PURE__ */ new Map(), za = (e) => {
  var t = ci(e), r = Fn.get(t.__key);
  return r || (Fn.set(t.__key, r = Dr(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Rr = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((i) => Rr(i));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = Rr(e[n]);
    return r;
  } else
    return e;
};
function jn(e) {
  var t = (r) => e(r);
  return t.toPromise = () => Wr(ur(1)(H((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => ot(r)(t), t;
}
function wt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Mn = (e, t) => wt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Wa = () => {
}, Sr = ({ kind: e }) => e !== "mutation" && e !== "query", Ka = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (u) => {
    var l = wt(u.kind, u);
    return l.query = za(u.query), l;
  }, o = (u) => u.kind === "query" && u.context.requestPolicy !== "network-only" && (u.context.requestPolicy === "cache-only" || n.has(u.key));
  return (u) => {
    var l = bt((c) => {
      var f = n.get(c.key);
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
      var m = f;
      return process.env.NODE_ENV !== "production" && (m = {
        ...m,
        operation: process.env.NODE_ENV !== "production" ? Mn(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (m.stale = !0, $n(t, c)), m;
    })(H((c) => !Sr(c) && o(c))(u)), d = vt((c) => {
      var { operation: f } = c;
      if (f) {
        var m = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (m = ((v) => [...xr(v, /* @__PURE__ */ new Set())])(c.data).concat(m)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${m}`,
            operation: f,
            data: {
              typenames: m,
              response: c
            },
            source: "cacheExchange"
          });
          for (var g = 0; g < m.length; g++) {
            var A = m[g], C = i.get(A);
            C || i.set(A, C = /* @__PURE__ */ new Set());
            for (var F of C.values())
              h.add(F);
            C.clear();
          }
          for (var S of h.values())
            n.has(S) && (f = n.get(S).operation, n.delete(S), $n(t, f));
        } else if (f.kind === "query" && c.data) {
          n.set(f.key, c);
          for (var q = 0; q < m.length; q++) {
            var y = m[q], w = i.get(y);
            w || i.set(y, w = /* @__PURE__ */ new Set()), w.add(f.key);
          }
        }
      }
    })(e(H((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(bt((c) => process.env.NODE_ENV !== "production" ? Mn(c, {
      cacheOutcome: "miss"
    }) : c)(gt([bt(a)(H((c) => !Sr(c) && !o(c))(u)), H((c) => Sr(c))(u)])))));
    return gt([l, d]);
  };
}, $n = (e, t) => e.reexecuteOperation(wt(t.kind, t, {
  requestPolicy: "network-only"
})), Ir = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: i }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var u = jt((d) => {
      var { key: c } = d, f = H((m) => m.kind === "teardown" && m.key === c)(o);
      return Lr(f)(((m) => {
        var h = e(pi(m), m);
        return zr(({ next: g, complete: A }) => {
          var C = !1, F, S;
          return Promise.resolve().then(() => {
            C || (F = h.subscribe({
              next(q) {
                g(S = S ? Tr(S, q) : _r(m, q));
              },
              error(q) {
                g(fi(m, q));
              },
              complete() {
                C || (C = !0, m.kind === "subscription" && n.reexecuteOperation(wt("teardown", m, m.context)), S && S.hasNext && g(Tr(S, {
                  hasNext: !1
                })), A());
              }
            }));
          }), () => {
            C = !0, F && F.unsubscribe();
          };
        });
      })(d));
    })(H((d) => d.kind !== "teardown" && a(d))(o)), l = i(H((d) => d.kind === "teardown" || !a(d))(o));
    return gt([u, l]);
  };
}, Qa = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = jt((a) => {
    var o = pi(a), u = Ma(a, o), l = qa(a, o);
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
    var d = Lr(H((c) => c.kind === "teardown" && c.key === a.key)(r))(La(a, u, l));
    return process.env.NODE_ENV !== "production" ? vt((c) => {
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
  })(H((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), i = e(H((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return gt([n, i]);
}, Ja = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((i, a) => {
  var o = !1;
  return a({
    client: t,
    forward(u) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Mt(i(Mt(u)));
    },
    dispatchDebug(u) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...u
      });
    }
  });
}, r), yi = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: n }) => (i) => jt((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? En(o) : xt(o);
})(n(jt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? En(o) : xt(o);
})(i))), Ya = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = vt((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), H((r) => !1)(t)), qn = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], u = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Nn();
  function d(y) {
    (y.kind === "mutation" || y.kind === "teardown" || !a.has(y.key)) && (y.kind === "teardown" ? a.delete(y.key) : y.kind !== "mutation" && a.add(y.key), l.next(y));
  }
  var c = !1;
  function f(y) {
    if (y && d(y), !c) {
      for (c = !0; c && (y = o.shift()); )
        d(y);
      c = !1;
    }
  }
  var m = (y) => {
    var w = Lr(H((v) => v.kind === "teardown" && v.key === y.key)(l.source))(H((v) => v.operation.kind === y.kind && v.operation.key === y.key && (!v.operation.context._instance || v.operation.context._instance === y.context._instance))(q));
    return y.kind !== "query" ? w = ni((v) => !!v.hasNext, !0)(w) : w = On((v) => {
      var B = xt(v);
      return v.stale || v.hasNext ? B : gt([B, bt(() => (v.stale = !0, v))(ur(1)(H((Ue) => Ue.key === y.key)(l.source)))]);
    })(w), y.kind !== "mutation" ? w = Gr(() => {
      a.delete(y.key), n.delete(y.key), i.delete(y.key), c = !1;
      for (var v = o.length - 1; v >= 0; v--)
        o[v].key === y.key && o.splice(v, 1);
      d(wt("teardown", y, y.context));
    })(vt((v) => {
      if (v.stale) {
        for (var B of o)
          if (B.key === v.operation.key) {
            a.delete(B.key);
            break;
          }
      } else
        v.hasNext || a.delete(y.key);
      n.set(y.key, v);
    })(w)) : w = kn(() => {
      d(y);
    })(w), t.maskTypename && (w = bt((v) => ({
      ...v,
      data: Rr(v.data, !0)
    }))(w)), Mt(w);
  }, h = this instanceof e ? this : Object.create(e.prototype), g = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(y) {
      y.kind === "teardown" ? f(y) : (y.kind === "mutation" || i.has(y.key)) && (o.push(y), Promise.resolve().then(f));
    },
    createRequestOperation(y, w, v) {
      v || (v = {});
      var B;
      if (process.env.NODE_ENV !== "production" && y !== "teardown" && (B = ja(w.query)) !== y)
        throw new Error(`Expected operation of type "${y}" but found "${B}"`);
      return wt(y, w, {
        _instance: y === "mutation" ? r = r + 1 | 0 : void 0,
        ...u,
        ...v,
        requestPolicy: v.requestPolicy || u.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && g.suspense
      });
    },
    executeRequestOperation(y) {
      return y.kind === "mutation" ? jn(m(y)) : jn(la(() => {
        var w = i.get(y.key);
        w || i.set(y.key, w = m(y)), w = kn(() => {
          f(y);
        })(w);
        var v = n.get(y.key);
        return y.kind === "query" && v && (v.stale || v.hasNext) ? On(xt)(gt([w, H((B) => B === n.get(y.key))(xt(v))])) : w;
      }));
    },
    executeQuery(y, w) {
      var v = g.createRequestOperation("query", y, w);
      return g.executeRequestOperation(v);
    },
    executeSubscription(y, w) {
      var v = g.createRequestOperation("subscription", y, w);
      return g.executeRequestOperation(v);
    },
    executeMutation(y, w) {
      var v = g.createRequestOperation("mutation", y, w);
      return g.executeRequestOperation(v);
    },
    readQuery(y, w, v) {
      var B = null;
      return ot((Ue) => {
        B = Ue;
      })(g.query(y, w, v)).unsubscribe(), B;
    },
    query: (y, w, v) => g.executeQuery(er(y, w), v),
    subscription: (y, w, v) => g.executeSubscription(er(y, w), v),
    mutation: (y, w, v) => g.executeMutation(er(y, w), v)
  }), A = Wa;
  if (process.env.NODE_ENV !== "production") {
    var { next: C, source: F } = Nn();
    g.subscribeToDebugTarget = (y) => ot(y)(F), A = C;
  }
  var S = Ja(t.exchanges), q = Mt(S({
    client: g,
    dispatchDebug: A,
    forward: Ya({
      dispatchDebug: A
    })
  })(l.source));
  return fa(q), g;
};
const Ha = {
  DateTime(e) {
    return new Date(e);
  }
};
class Za {
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
      a != null && (r[n] = Ha[i](a));
    }
    return r;
  }
}
function pe(e) {
  if (typeof e != "object")
    return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = pe(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: pe(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = pe(e[t]);
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = pe(e[t]);
    return r;
  }
  return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    r.add(pe(i));
  }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, a) {
    r.set(pe(a), pe(i));
  }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(pe(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ue;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ue || (ue = {}));
class Xa {
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
    }), this.__gadget.instantiatedFields = pe(t), this.__gadget.persistedFields = pe(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
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
  hasChanges(t = ue.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !Yt(r[n], this.__gadget.fields[n]));
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
  changes(t, r = ue.SinceLoaded) {
    const i = (typeof t == "string" ? r : t || r) == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = i[t], o = this.__gadget.fields[t], u = !Yt(o, a);
      return u ? { changed: u, current: o, previous: a } : { changed: u };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const u = this.__gadget.fieldKeys[o];
        Yt(i[u], this.__gadget.fields[u]) || (a[u] = { current: this.__gadget.fields[u], previous: i[u] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ue.SinceLoaded) {
    const r = t == ue.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let i = 0; i < this.__gadget.fieldKeys.length; i++) {
      const a = this.__gadget.fieldKeys[i];
      Yt(r[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, r = ue.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ue.SinceLoaded) {
    t == ue.SinceLoaded ? this.__gadget.instantiatedFields = pe(this.__gadget.fields) : t == ue.SinceLastPersisted && (this.__gadget.persistedFields = pe(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ue.SinceLoaded) {
    let r;
    t == ue.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == ue.SinceLoaded ? Object.assign(this.__gadget.fields, pe(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, pe(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return $r({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const mi = Xa;
class hi extends Error {
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
class Fr extends Error {
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
class cr extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Bn extends Error {
  constructor(t) {
    let r;
    Mr(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class eo extends Error {
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
class to extends Error {
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
class ro extends Error {
  constructor(t, r, n, i) {
    const a = r.slice(0, 3), o = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: u, message: l }) => `${u} ${l}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
class bi extends Error {
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
class Jr extends Error {
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
class no extends Error {
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
function jr(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const At = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Mr = (e) => (e == null ? void 0 : e.type) == "close", Ne = (e, t) => typeof e != "string" ? "" : st(e, t), Vn = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, st = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => Vn(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, i, a, o, u) => (i || (i = ""), "" + i + Vn(a))), r;
}, io = (e) => `${st(e)}Sort`, ao = (e) => `${st(e)}Filter`, oo = (e, t, r) => new bi(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), so = (e, t) => {
  if (e.fetching)
    return;
  const r = At(e.data, t);
  if (r === void 0)
    return new hi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null)
    return new Jr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
}, je = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Vt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((u) => "[Network] " + u.message).join(`
`)), e.error;
  const i = At(e.data, t), a = At(i, ["edges"]), o = a ?? i;
  if (i === void 0)
    throw new hi(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (i === null || r && Array.isArray(o) && o.length === 0)
    throw new Jr(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return i;
}, Dt = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof Vt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((i) => "[Network] " + i.message).join(`
`)), e.error;
  const n = At(e.data, t);
  return n ?? null;
}, Yr = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new ro(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new bi(e.message) : new cr(e.message, e.code);
}, Qe = (e, t) => {
  const r = je(e, t);
  return gi(r);
}, gi = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Yr(t) : new cr("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, vi = (e) => {
  var t, r, n, i;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Za((i = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || i === void 0 ? void 0 : i.hydrations);
}, Rt = (e, t) => {
  const r = vi(e);
  return r && (t = r.apply(t)), new mi(t);
}, Hr = (e, t) => {
  const r = vi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new mi(n));
}, qt = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return Hr(e, r);
}, $r = (e) => {
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
          t[r] = n === void 0 ? null : $r(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = $r(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, wr = "gstk", Un = (e) => {
  try {
    const t = window[e];
    return t.setItem(wr, wr), t.removeItem(wr), !0;
  } catch {
    return !1;
  }
}, Gn = Object.prototype.toString, Ln = Object.getPrototypeOf, zn = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Tt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const n = Gn.call(e), i = Gn.call(t);
  let a, o, u;
  if (r.push(e, t), n != i || (a = zn(e), o = zn(t), a.length != o.length || a.some(function(l) {
    return !Tt(e[l], t[l], r);
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
        if (u = a.next(), !Tt(u.value, o.next().value, r))
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
        if (!(!(u in e) && !(u in t)) && (u in e != u in t || !Tt(e[u], t[u], r)))
          return !1;
      return !0;
    case "Object":
      return Tt(Ln(e), Ln(t), r);
    default:
      return !1;
  }
}, Yt = (e, t) => Tt(e, t, []), Si = (e, t) => {
  var r, n;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((a) => {
    var o;
    return a !== "id" && !(!((o = e.paramOnlyVariables) === null || o === void 0) && o.includes(a)) && a !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  if ((r = e.acceptsModelInput) !== null && r !== void 0 ? r : e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] != null)
      i = t;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [a, o] of Object.entries(t))
        !((n = e.paramOnlyVariables) === null || n === void 0) && n.includes(a) ? i[a] = o : a == "id" ? i.id = o : i[e.modelApiIdentifier][a] = o;
    }
  else
    i = t;
  return i;
}, uo = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((i) => Si(e, i))
  };
}, lo = (e, t) => {
  const r = {};
  for (const [n, i] of Object.entries(e))
    r[n] = { ...i, value: t[n] };
  return r;
};
class kt extends Array {
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
    const i = new kt();
    return i.push(...r), i.modelManager = t, i.pagination = n, Object.freeze(i), i;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new cr("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Fr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new Fr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: i, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const qr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof Xr) {
    let n = "";
    const i = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var u;
      return `${a}: ${o instanceof en ? `$${(u = o.name) !== null && u !== void 0 ? u : a}` : JSON.stringify(o)}`;
    });
    return i.length > 0 && (n = `(${i.join(", ")})`), r.subselection ? [`${t}${n} {`, ...qr(r.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...qr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Zr = (e) => {
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
    i instanceof Xr ? Object.entries(i.args).forEach(([a, o]) => {
      var u;
      o instanceof en && (t[(u = o.name) !== null && u !== void 0 ? u : r(a)] = o);
    }) : typeof i == "object" && i !== null && Object.assign(t, Zr(i));
  }), t;
}, co = (e) => {
  const t = Zr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, i]) => `$${n}: ${i.type}`).join(", ")})`;
};
class Xr {
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
class en {
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
const Je = (e, t) => new Xr(e, t), K = (e) => new en(e.type + (e.required ? "!" : ""), e.name, e.value), fo = (e) => {
  var t;
  const r = co(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${n} {
${qr(e.fields).join(`
`)}
}`;
}, Ye = (e) => {
  const t = Zr(e.fields);
  return {
    query: fo(e),
    variables: Object.entries(t ?? {}).reduce((r, [n, i]) => (typeof i.value < "u" && (r[n] = i.value), r), {})
  };
}, tn = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), rn = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, dr = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, po = (e, t, r, n, i) => {
  const a = {};
  return typeof t < "u" && (a.id = K({ type: "GadgetID!", value: t })), Ye({
    type: "query",
    name: e,
    fields: {
      [e]: Je(a, rn((i == null ? void 0 : i.select) || r, !0)),
      ...tn(n)
    },
    directives: dr(i)
  });
}, yo = (e, t, r, n, i, a) => nn(e, n, i, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), nn = (e, t, r, n) => Ye({
  type: "query",
  name: e,
  fields: {
    [e]: Je({
      after: K({ value: n == null ? void 0 : n.after, type: "String" }),
      first: K({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: K({ value: n == null ? void 0 : n.before, type: "String" }),
      last: K({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? K({ value: n.sort, type: `[${io(r)}!]` }) : void 0,
      filter: n != null && n.filter ? K({ value: n.filter, type: `[${ao(r)}!]` }) : void 0,
      search: n != null && n.search ? K({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: rn((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...tn(r)
  },
  directives: dr(n)
}), Ii = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, an = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, K(r)])), wi = (e, t, r) => ({
  success: !0,
  errors: Ii,
  [e]: t && !r ? rn(t, !0) : !1,
  result: !!r
}), mo = (e, t, r, n, i, a, o, u, l) => {
  const d = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Je(an(i), wi(n, d, l))
  };
  o && (c = {
    [o]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...tn(r)
    },
    directives: dr(a)
  };
  return Ye(f);
}, ho = (e, t, r) => {
  let n = {}, i = t.operationName;
  switch (t.type) {
    case "action": {
      const o = (r == null ? void 0 : r.select) || t.defaultSelection;
      t.isBulk && (i = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), n = {
        [`... on ${`${st(i)}Result`}`]: wi(t.modelApiIdentifier, o, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      n = {
        [`... on ${st(i)}Result`]: Ai()
      };
  }
  const a = {
    type: "subscription",
    name: Ne(i) + "BackgroundResult",
    fields: {
      backgroundAction: Je({ id: K({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...n
        }
      })
    }
  };
  return Ye(a);
}, Ai = () => ({
  success: !0,
  errors: Ii,
  result: !0
}), bo = (e, t, r, n) => {
  let i = {
    [e]: Je(an(t), Ai())
  };
  return r && (i = {
    [r]: i
  }), Ye({
    type: "mutation",
    name: e,
    fields: i,
    directives: dr(n)
  });
}, go = (e) => {
  if (!e)
    return null;
  const t = { ...e };
  typeof t.retries == "number" && (t.retries = {
    retryCount: t.retries
  }), typeof t.queue == "string" && (t.queue = {
    name: t.queue
  }), t.startAt instanceof Date && (t.startAt = t.startAt.toISOString());
  for (const r of Object.keys(t))
    ["id", "retries", "queue", "priority", "startAt"].includes(r) || delete t[r];
  return t;
}, vo = (e, t, r, n, i) => {
  let a = {
    background: {
      [e]: Je({
        ...an(t),
        backgroundOptions: K({
          type: "EnqueueBackgroundActionOptions",
          value: go(n)
        })
      }, {
        success: !0,
        errors: {
          message: !0,
          code: !0
        },
        [i ? "backgroundActions" : "backgroundAction"]: {
          id: !0
        }
      })
    }
  };
  return r && (a = {
    [r]: a
  }), Ye({
    type: "mutation",
    name: "enqueue" + st(e),
    fields: a
  });
}, So = (e, t) => ({
  [Symbol.asyncIterator]() {
    const r = e[Symbol.asyncIterator]();
    return {
      async next() {
        const { done: n, value: i } = await r.next();
        return {
          done: n,
          value: typeof i < "u" ? t(i) : void 0
        };
      },
      async return(n) {
        var i;
        return await ((i = r.return) === null || i === void 0 ? void 0 : i.call(r, n));
      }
    };
  }
});
function on(e, t, r) {
  return r != null && r.live ? So(pa(e), t) : Kr(e, H((i) => !i.stale && !i.hasNext), ur(1), Wr).then((i) => t(i));
}
const Wn = (e, t, r, n, i, a, o = !0) => {
  const u = po(t, r, n, i, a), l = e.connection.currentClient.query(u.query, u.variables);
  return on(l, (d) => {
    const f = (o ? je : Dt)(d, [t]);
    return Rt(d, f);
  }, a);
}, Io = (e, t, r, n, i, a, o, u = !0) => {
  const l = yo(t, r, n, i, a, o), d = e.connection.currentClient.query(l.query, l.variables);
  return on(d, (c) => {
    const f = je(c, [t]), m = qt(c, f);
    if (m.length > 1)
      throw oo(a, r, n);
    const h = m[0];
    if (!h && u)
      throw new Jr(`${a} record with ${r}=${n} not found`);
    return h ?? null;
  }, o);
}, Kn = (e, t, r, n, i, a) => {
  const o = nn(t, r, n, i), u = e.connection.currentClient.query(o.query, o.variables);
  return on(u, (l) => {
    let d;
    a === !1 ? d = Dt(l, [t]) : d = je(l, [t], a);
    const c = qt(l, d);
    return kt.boot(e, c, { options: i, pageInfo: d.pageInfo });
  }, i);
}, Qn = async (e, t, r, n, i, a, o, u, l, d) => {
  const c = mo(t, r, n, i, o, u, l, a, d), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), m = l ? [l, t] : [t];
  if (a) {
    const h = At(f.data, m), g = h[i] && r ? Hr(f, h[i]) : void 0;
    if (h.errors) {
      const A = h.errors.map((C) => Yr(C));
      throw new no(A, g);
    }
    return g;
  } else {
    const h = Qe(f, m);
    return ki(r, f, h, i, d);
  }
}, ki = (e, t, r, n, i) => {
  if (e != null)
    return i ? r.result : Rt(t, r[n]);
}, Jn = async (e, t, r, n) => {
  const i = bo(t, r, n), a = await e.currentClient.mutation(i.query, i.variables).toPromise();
  return Qe(a, n ? [n, t] : [t]).result;
};
async function wo(e, t, r, n = {}) {
  const i = t.isBulk ? uo(t, r) : Si(t, r), a = lo(t.variables, i), o = vo(t.operationName, a, t.namespace, n, t.isBulk), u = await e.currentClient.mutation(o.query, o.variables, n).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const d = Qe(u, l);
    return t.isBulk ? d.backgroundActions.map((c) => new tr(e, t, c.id)) : new tr(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (n != null && n.id) && n.onDuplicateID == "ignore")
      return new tr(e, t, n.id);
    throw d;
  }
}
const Ao = async (e, t, r, n) => {
  const i = ho(t, r, n), a = e.currentClient.subscription(i.query, i.variables), o = await Kr(a, H((l) => {
    var d, c;
    return l.error || ((c = (d = l.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), ur(1), Wr), u = je(o, ["backgroundAction"]);
  switch (gi(u.result), r.type) {
    case "action": {
      u.result = ki(r.defaultSelection, o.data, u.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      u.result = u.result.result;
      break;
    }
  }
  return u;
};
class tr {
  constructor(t, r, n) {
    Object.defineProperty(this, "connection", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "action", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  /** Wait for this background action to complete and return the result. */
  async result(t) {
    return (await Ao(this.connection, this.id, this.action, t)).result;
  }
}
var Ft;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(Ft || (Ft = {}));
function fe(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function nt(e) {
  return fe(e) === "object";
}
function ko(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Yn(e, t) {
  return e.length < 124 ? e : t;
}
const Oo = "graphql-transport-ws";
var le;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(le || (le = {}));
var z;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(z || (z = {}));
function Oi(e) {
  if (!nt(e))
    throw new Error(`Message is expected to be an object, but got ${fe(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${fe(e.type)}`);
  switch (e.type) {
    case z.ConnectionInit:
    case z.ConnectionAck:
    case z.Ping:
    case z.Pong: {
      if (e.payload != null && !nt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case z.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${fe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!nt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${fe(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${fe(e.payload.query)}`);
      if (e.payload.variables != null && !nt(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${fe(e.payload.variables)}`);
      if (e.payload.operationName != null && fe(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${fe(e.payload.operationName)}`);
      if (e.payload.extensions != null && !nt(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${fe(e.payload.extensions)}`);
      break;
    }
    case z.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${fe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!nt(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${fe(e.payload)}`);
      break;
    }
    case z.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${fe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ko(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case z.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${fe(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function No(e, t) {
  return Oi(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Ct(e, t) {
  return Oi(e), JSON.stringify(e, t);
}
function Eo(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: u,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: d = 5,
    retryWait: c = async function(j) {
      let D = 1e3;
      for (let P = 0; P < j; P++)
        D *= 2;
      await new Promise((P) => setTimeout(P, D + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = Ht,
    isFatalConnectionProblem: m,
    on: h,
    webSocketImpl: g,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: A = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (j) => {
        const D = Math.random() * 16 | 0;
        return (j == "x" ? D : D & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: C,
    jsonMessageReviver: F
  } = e;
  let S;
  if (g) {
    if (!_o(g))
      throw new Error("Invalid WebSocket implementation provided");
    S = g;
  } else
    typeof WebSocket < "u" ? S = WebSocket : typeof global < "u" ? S = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (S = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!S)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const q = S, y = (() => {
    const k = (() => {
      const D = {};
      return {
        on(P, $) {
          return D[P] = $, () => {
            delete D[P];
          };
        },
        emit(P) {
          var $;
          "id" in P && (($ = D[P.id]) === null || $ === void 0 || $.call(D, P));
        }
      };
    })(), j = {
      connecting: h != null && h.connecting ? [h.connecting] : [],
      opened: h != null && h.opened ? [h.opened] : [],
      connected: h != null && h.connected ? [h.connected] : [],
      ping: h != null && h.ping ? [h.ping] : [],
      pong: h != null && h.pong ? [h.pong] : [],
      message: h != null && h.message ? [k.emit, h.message] : [k.emit],
      closed: h != null && h.closed ? [h.closed] : [],
      error: h != null && h.error ? [h.error] : []
    };
    return {
      onMessage: k.on,
      on(D, P) {
        const $ = j[D];
        return $.push(P), () => {
          $.splice($.indexOf(P), 1);
        };
      },
      emit(D, ...P) {
        for (const $ of [...j[D]])
          $(...P);
      }
    };
  })();
  function w(k) {
    const j = [
      // errors are fatal and more critical than close events, throw them first
      y.on("error", (D) => {
        j.forEach((P) => P()), k(D);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      y.on("closed", (D) => {
        j.forEach((P) => P()), k(D);
      })
    ];
  }
  let v, B = 0, Ue, ut = !1, lt = 0, Gt = !1;
  async function Nt() {
    clearTimeout(Ue);
    const [k, j] = await (v ?? (v = new Promise(($, Pe) => (async () => {
      if (ut) {
        if (await c(lt), !B)
          return v = void 0, Pe({ code: 1e3, reason: "All Subscriptions Gone" });
        lt++;
      }
      y.emit("connecting");
      const x = new q(typeof t == "function" ? await t() : t, Oo);
      let $e, Ge;
      function He() {
        isFinite(o) && o > 0 && (clearTimeout(Ge), Ge = setTimeout(() => {
          x.readyState === q.OPEN && (x.send(Ct({ type: z.Ping })), y.emit("ping", !1, void 0));
        }, o));
      }
      w((J) => {
        v = void 0, clearTimeout($e), clearTimeout(Ge), Pe(J), Ht(J) && J.code === 4499 && (x.close(4499, "Terminated"), x.onerror = null, x.onclose = null);
      }), x.onerror = (J) => y.emit("error", J), x.onclose = (J) => y.emit("closed", J), x.onopen = async () => {
        try {
          y.emit("opened", x);
          const J = typeof r == "function" ? await r() : r;
          if (x.readyState !== q.OPEN)
            return;
          x.send(Ct(J ? {
            type: z.ConnectionInit,
            payload: J
          } : {
            type: z.ConnectionInit
            // payload is completely absent if not provided
          }, C)), isFinite(l) && l > 0 && ($e = setTimeout(() => {
            x.close(le.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), He();
        } catch (J) {
          y.emit("error", J), x.close(le.InternalClientError, Yn(J instanceof Error ? J.message : new Error(J).message, "Internal client error"));
        }
      };
      let Le = !1;
      x.onmessage = ({ data: J }) => {
        try {
          const U = No(J, F);
          if (y.emit("message", U), U.type === "ping" || U.type === "pong") {
            y.emit(U.type, !0, U.payload), U.type === "pong" ? He() : u || (x.send(Ct(U.payload ? {
              type: z.Pong,
              payload: U.payload
            } : {
              type: z.Pong
              // payload is completely absent if not provided
            })), y.emit("pong", !1, U.payload));
            return;
          }
          if (Le)
            return;
          if (U.type !== z.ConnectionAck)
            throw new Error(`First message cannot be of type ${U.type}`);
          clearTimeout($e), Le = !0, y.emit("connected", x, U.payload), ut = !1, lt = 0, $([
            x,
            new Promise((Lt, ct) => w(ct))
          ]);
        } catch (U) {
          x.onmessage = null, y.emit("error", U), x.close(le.BadResponse, Yn(U instanceof Error ? U.message : new Error(U).message, "Bad response"));
        }
      };
    })())));
    k.readyState === q.CLOSING && await j;
    let D = () => {
    };
    const P = new Promise(($) => D = $);
    return [
      k,
      D,
      Promise.race([
        // wait for
        P.then(() => {
          if (!B) {
            const $ = () => k.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ue = setTimeout(() => {
              k.readyState === q.OPEN && $();
            }, a) : $();
          }
        }),
        // or
        j
      ])
    ];
  }
  function ge(k) {
    if (Ht(k) && (Po(k.code) || [
      le.InternalServerError,
      le.InternalClientError,
      le.BadRequest,
      le.BadResponse,
      le.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      le.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      le.SubscriberAlreadyExists,
      le.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(k.code)))
      throw k;
    if (Gt)
      return !1;
    if (Ht(k) && k.code === 1e3)
      return B > 0;
    if (!d || lt >= d || !f(k) || m != null && m(k))
      throw k;
    return ut = !0;
  }
  return n || (async () => {
    for (B++; ; )
      try {
        const [, , k] = await Nt();
        await k;
      } catch (k) {
        try {
          if (!ge(k))
            return;
        } catch (j) {
          return i == null ? void 0 : i(j);
        }
      }
  })(), {
    on: y.on,
    subscribe(k, j) {
      const D = A(k);
      let P = !1, $ = !1, Pe = () => {
        B--, P = !0;
      };
      return (async () => {
        for (B++; ; )
          try {
            const [x, $e, Ge] = await Nt();
            if (P)
              return $e();
            const He = y.onMessage(D, (Le) => {
              switch (Le.type) {
                case z.Next: {
                  j.next(Le.payload);
                  return;
                }
                case z.Error: {
                  $ = !0, P = !0, j.error(Le.payload), Pe();
                  return;
                }
                case z.Complete: {
                  P = !0, Pe();
                  return;
                }
              }
            });
            x.send(Ct({
              id: D,
              type: z.Subscribe,
              payload: k
            }, C)), Pe = () => {
              !P && x.readyState === q.OPEN && x.send(Ct({
                id: D,
                type: z.Complete
              }, C)), B--, P = !0, $e();
            }, await Ge.finally(He);
            return;
          } catch (x) {
            if (!ge(x))
              return;
          }
      })().then(() => {
        $ || j.complete();
      }).catch((x) => {
        j.error(x);
      }), () => {
        P || Pe();
      };
    },
    async dispose() {
      if (Gt = !0, v) {
        const [k] = await v;
        k.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      v && y.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Ht(e) {
  return nt(e) && "code" in e && "reason" in e;
}
function Po(e) {
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
function _o(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var mt = null;
typeof WebSocket < "u" ? mt = WebSocket : typeof MozWebSocket < "u" ? mt = MozWebSocket : typeof global < "u" ? mt = global.WebSocket || global.MozWebSocket : typeof window < "u" ? mt = window.WebSocket || window.MozWebSocket : typeof self < "u" && (mt = self.WebSocket || self.MozWebSocket);
const Co = mt;
class Ni extends Error {
}
class To {
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
    ]), this.open = !1, new Ni("Transaction rolled back.");
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
class xo {
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
const Do = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Hn = yi({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = Do(e.query) || "unknown");
  }
}), Ro = yi({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), n = new URLSearchParams(r);
        n.set("operation", e.context.operationName), e.context.url = `${t}?${n.toString()}`;
      } catch {
      }
  }
});
var Br;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Br || (Br = {}));
const Fo = 2, jo = 4800, Mo = 1e4, $o = [le.ConnectionAcknowledgementTimeout, le.ConnectionInitialisationTimeout], Zn = Symbol.for("gadget/connection"), qo = "token", Bo = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var Y;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(Y || (Y = {}));
const Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Ei {
  constructor(t) {
    var r, n, i, a, o;
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
      value: async (u, l) => {
        let d, c;
        if (l ? (d = l, c = u) : (d = u, c = {}), this.currentTransaction)
          return await d(this.currentTransaction);
        let f = null, m;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(A) {
              return console.warn("Transport error encountered during transaction processing", A), !0;
            },
            connectionAckWaitTimeout: jo,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const h = new qn({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Hn,
              ...this.exchanges.beforeAsync,
              Ir({
                forwardSubscription(A) {
                  const C = { ...A, query: A.query || "" };
                  return {
                    subscribe: (F) => ({
                      unsubscribe: f.subscribe(C, F)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          h[Zn] = this, m = new To(h, f), this.currentTransaction = m, await m.start();
          const g = await d(m);
          return await m.commit(), g;
        } catch (h) {
          try {
            m != null && m.open && await m.rollback();
          } catch (g) {
            g instanceof Ni || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", g);
          }
          throw Mr(h) ? new Bn(h) : h;
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
        u = Vo(u, (d = this.options.baseRouteURL) !== null && d !== void 0 ? d : this.options.endpoint), this.isGadgetRequest(u) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == Y.Custom && await this.options.authenticationMode.custom.processFetch(u, l));
        const c = await this._fetchImplementation(u, l);
        if (this.authenticationMode == Y.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), m = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          m && this.sessionTokenStore.setItem(this.sessionStorageKey, m);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof Zt < "u" && Zt.fetch ? this._fetchImplementation = Zt.fetch.bind(Zt) : this._fetchImplementation = async (...u) => {
      let l = await import("./browser-ponyfill-331224c9.js").then((d) => d.b);
      return l.default && (l = l.default), await l(...u);
    }, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Co, this.websocketsEndpoint = (i = t.websocketsEndpoint) !== null && i !== void 0 ? i : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${qo}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = Y.InternalAuthToken : t.apiKey ? this.authenticationMode = Y.APIKey : t.custom && (this.authenticationMode = Y.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = Y.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = Y.BrowserSession;
    const r = !t || typeof t == "boolean" ? Ft.Durable : t.storageType;
    let n;
    r == Ft.Durable && Un("localStorage") ? n = window.localStorage : r == Ft.Session && Un("sessionStorage") ? n = window.sessionStorage : n = new xo(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Vr(this.options.endpoint))
      return !!Vr(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Hn, Ro];
    typeof window < "u" && t.push(Ka), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Ir({
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            const a = { ...n, query: n.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(a, i)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      Ir({
        isSubscriptionOperation: (n) => n.query.definitions.some((i) => Go(i)),
        forwardSubscription: (n) => ({
          subscribe: (i) => {
            let a;
            const o = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: u, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: d }) => {
              const c = { ...n, query: n.query || "" };
              return a = u(l(d((f) => this.getBaseSubscriptionClient().subscribe(c, f))), i), a;
            });
            return {
              unsubscribe: () => {
                a ? a() : o.then((u) => u());
              }
            };
          }
        })
      }),
      Qa,
      ...this.exchanges.afterAll
    );
    const r = new qn({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[Zn] = this, r;
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
    return Eo({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, i;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == Y.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == Y.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == Y.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == Y.Custom && await ((i = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || i === void 0 ? void 0 : i.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, i) => {
          var a, o, u, l, d, c;
          if (this.authenticationMode == Y.BrowserSession && (i != null && i.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, i.sessionToken);
          }
          (l = (u = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || u === void 0 ? void 0 : u.connected) === null || l === void 0 || l.call(u, n, i), (c = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null || c === void 0 || c.call(d, n, i);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == Y.InternalAuthToken)
      r.authorization = "Basic " + Bo("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == Y.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == Y.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], i = t.connectionAttempts || Fo;
    const a = t.connectionGlobalTimeoutMs || Mo, o = () => {
      n.forEach((u) => u()), n = [];
    };
    return await new Promise((u, l) => {
      const d = setTimeout(() => {
        this.disposeClient(r), f(new eo("Timeout opening websocket connection to Gadget API"));
      }, a), c = (g) => {
        if (Mr(g)) {
          if (g.code == Br.TooManyRequests)
            return o(), f(new to(g.reason));
          if ($o.includes(g.code) && i > 0) {
            i -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(d), l(new Bn(g));
      }, f = (g) => {
        clearTimeout(d), l(g);
      }, m = () => {
        clearTimeout(d), u(r);
      }, h = () => {
        o(), n.push(r.on("connected", m)), n.push(r.on("closed", c)), n.push(r.on("error", f));
      };
      h();
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
Object.defineProperty(Ei, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function Vo(e, t) {
  if (typeof e != "string")
    return e;
  if (Vr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Vr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Uo = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, Go = (e) => !!Uo(e), Ut = `
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
`, Ot = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, Lo = (e) => `
    query InternalFind${Ne(e)}($id: GadgetID!, $select: [String!]) {
      ${Ot(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Pi = (e, t) => ({
  search: t != null && t.search ? K({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? K({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? K({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? K({ value: _i(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), zo = (e, t) => {
  const r = Ne(e), n = Pi(r, t);
  return Ye({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: Je({
          ...n,
          first: K({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Wo = (e, t) => {
  const r = Ne(e), n = Pi(r, t);
  return Ye({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: Je({
          ...n,
          after: K({ value: t == null ? void 0 : t.after, type: "String" }),
          before: K({ value: t == null ? void 0 : t.before, type: "String" }),
          first: K({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: K({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Ko = (e) => {
  const t = Ne(e);
  return `
    ${Ut}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Ot(e)}
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
}, Qo = (e, t) => {
  const r = Ne(e), n = Ne(t);
  return `
    ${Ut}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${Ot(e)}
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
}, Jo = (e) => {
  const t = Ne(e);
  return `
    ${Ut}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Ot(e)}
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
}, Yo = (e) => {
  const t = Ne(e);
  return `
    ${Ut}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Ot(e)}
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
}, Ho = (e) => {
  const t = Ne(e);
  return `
    ${Ut}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Ot(e)}
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
class Ae {
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
    }), this.capitalizedApiIdentifier = st(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new cr(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const i = await this.connection.currentClient.query(Lo(this.apiIdentifier), { id: t, select: _i(r == null ? void 0 : r.select) }).toPromise(), o = (n ? je : Dt)(i, ["internal", this.apiIdentifier]);
    return Rt(i, o);
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
    const r = Wo(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), i = Dt(n, ["internal", `list${this.capitalizedApiIdentifier}`]), a = qt(n, i);
    return kt.boot(this, a, { options: t, pageInfo: i.pageInfo });
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
    const n = zo(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let a;
    r === !1 ? a = Dt(i, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = je(i, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const o = qt(i, a);
    return kt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const r = await this.connection.currentClient.mutation(Ko(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), n = Qe(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Rt(r, n[this.apiIdentifier]);
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
      throw new Fr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = Ne(this.options.pluralApiIdentifier), i = await this.connection.currentClient.mutation(Qo(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Qe(i, ["internal", `bulkCreate${n}`]);
    return Hr(i, a[this.options.pluralApiIdentifier]);
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
    jr(t, "Can't update a record without an ID passed");
    const n = await this.connection.currentClient.mutation(Jo(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), i = Qe(n, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Rt(n, i[this.apiIdentifier]);
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
    jr(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(Yo(this.apiIdentifier), { id: t }).toPromise();
    Qe(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const r = await this.connection.currentClient.mutation(Ho(this.apiIdentifier), t).toPromise();
    Qe(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function _i(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const we = (e, t, r, n) => {
  const i = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a ? i.prototype[a.functionName] = Object.assign(
          async function(o, u) {
            return await Io(
              this,
              a.operationName,
              a.findByField,
              o,
              r,
              e,
              u
            );
          },
          a
        ) : i.prototype[a.type] = Object.assign(
          async function(o, u) {
            const l = await Wn(
              this,
              e,
              o,
              r,
              e,
              u,
              a.type != "maybeFindOne"
            );
            return l.isEmpty() ? null : l;
          },
          a
        );
        break;
      }
      case "findMany": {
        i.prototype.findMany = Object.assign(async function(o) {
          return await Kn(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        i.prototype[a.type] = Object.assign(async function(o) {
          const u = await Kn(
            this,
            t,
            r,
            e,
            {
              ...o,
              first: 1,
              last: void 0,
              before: void 0,
              after: void 0
            },
            a.type != "maybeFindFirst"
          );
          return (u == null ? void 0 : u[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        i.prototype.get = Object.assign(async function(o) {
          return await Wn(this, a.operationName, void 0, r, e, o);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const o = !!a.variables.ids;
          i.prototype[a.functionName] = Object.assign(
            async function(u, l) {
              let d;
              return o ? d = {
                ids: {
                  ...a.variables.ids,
                  value: u
                }
              } : d = {
                inputs: {
                  ...a.variables.inputs,
                  value: u.map(
                    (c) => Ci(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await Qn(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !0,
                d,
                l,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        } else {
          const o = !!a.variables.id, u = Object.keys(a.variables).filter((l) => l != "id").length > 0;
          i.prototype[a.functionName] = Object.assign(
            async function(...l) {
              const [d, c] = Zo(a, o, u, l);
              return await Qn(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !1,
                d,
                c,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        }
        break;
      }
    }
  return i;
};
function Ci(e, t, r = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(r).some((o) => {
    var u;
    return !((u = e.paramOnlyVariables) != null && u.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const i = Object.entries(e.variables).find(([o, u]) => o === "id" && u.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in r && typeof r[e.modelApiIdentifier] == "object" && r[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      n = r;
    else {
      n = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, u] of Object.entries(r))
        (a = e.paramOnlyVariables) != null && a.includes(o) ? n[o] = u : i && o === i[0] ? n.id = u : n[e.modelApiIdentifier][o] = u;
    }
  else
    n = r;
  return n.id ?? (n.id = t), n;
}
function Zo(e, t, r, n) {
  let i, a;
  t && (i = n.shift()), r && (a = n.shift());
  const o = n.shift();
  let u = a;
  (i || a) && (u = Ci(e, i, a));
  const l = {};
  for (const [d, c] of Object.entries(e.variables))
    l[d] = {
      value: d == "id" ? i : u == null ? void 0 : u[d],
      ...c
    };
  return [l, o];
}
const me = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, L = "user", Be = "users", Xo = we(
  L,
  Be,
  me,
  [
    {
      type: "findOne",
      operationName: L,
      modelApiIdentifier: L,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "maybeFindOne",
      operationName: L,
      modelApiIdentifier: L,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "findMany",
      operationName: Be,
      modelApiIdentifier: L,
      defaultSelection: me
    },
    {
      type: "findFirst",
      operationName: Be,
      modelApiIdentifier: L,
      defaultSelection: me
    },
    {
      type: "maybeFindFirst",
      operationName: Be,
      modelApiIdentifier: L,
      defaultSelection: me
    },
    {
      type: "findOne",
      operationName: Be,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: L,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkSignUpUsers",
      functionName: "bulkSignUp",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "signUp",
      modelApiIdentifier: L,
      modelSelectionField: Be,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        user: { required: !1, type: "UpdateUserInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkUpdateUsers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: L,
      modelSelectionField: Be,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteUsers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: L,
      modelSelectionField: Be,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "bulkCreateUsers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: L,
      modelSelectionField: Be,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: me
    }
  ]
), _e = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ce = "session", pt = "sessions", es = we(
  ce,
  pt,
  _e,
  [
    {
      type: "findOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "maybeFindOne",
      operationName: ce,
      modelApiIdentifier: ce,
      findByVariableName: "id",
      defaultSelection: _e
    },
    {
      type: "findMany",
      operationName: pt,
      modelApiIdentifier: ce,
      defaultSelection: _e
    },
    {
      type: "findFirst",
      operationName: pt,
      modelApiIdentifier: ce,
      defaultSelection: _e
    },
    {
      type: "maybeFindFirst",
      operationName: pt,
      modelApiIdentifier: ce,
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        email: { required: !1, type: "String" },
        password: { required: !1, type: "String" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "bulkLogInViaEmailSessions",
      functionName: "bulkLogInViaEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "logInViaEmail",
      modelApiIdentifier: ce,
      modelSelectionField: pt,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: ce,
      modelSelectionField: ce,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: _e
    },
    {
      type: "action",
      operationName: "bulkLogOutSessions",
      functionName: "bulkLogOut",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "logOut",
      modelApiIdentifier: ce,
      modelSelectionField: pt,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: _e
    }
  ]
), Ce = {
  __typename: !0,
  id: !0,
  state: !0,
  body: !0,
  createdAt: !0,
  handle: !0,
  productCategory: !0,
  productType: !0,
  publishedAt: !0,
  publishedScope: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  status: !0,
  tags: !0,
  templateSuffix: !0,
  title: !0,
  updatedAt: !0,
  vendor: !0
}, te = "shopifyProduct", Ze = "shopifyProducts", ts = we(
  te,
  Ze,
  Ce,
  [
    {
      type: "findOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "maybeFindOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: Ce
    },
    {
      type: "findMany",
      operationName: Ze,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "findFirst",
      operationName: Ze,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "maybeFindFirst",
      operationName: Ze,
      modelApiIdentifier: te,
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProduct: { required: !1, type: "CreateShopifyProductInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProducts",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: te,
      modelSelectionField: Ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProduct: { required: !1, type: "UpdateShopifyProductInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProducts",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: te,
      modelSelectionField: Ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Ce
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: te,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: te,
      modelSelectionField: Ze,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Te = {
  __typename: !0,
  id: !0,
  state: !0,
  alt: !0,
  createdAt: !0,
  height: !0,
  position: !0,
  shopifyCreatedAt: !0,
  shopifyUpdatedAt: !0,
  source: !0,
  updatedAt: !0,
  width: !0
}, re = "shopifyProductImage", Xe = "shopifyProductImages", rs = we(
  re,
  Xe,
  Te,
  [
    {
      type: "findOne",
      operationName: re,
      modelApiIdentifier: re,
      findByVariableName: "id",
      defaultSelection: Te
    },
    {
      type: "maybeFindOne",
      operationName: re,
      modelApiIdentifier: re,
      findByVariableName: "id",
      defaultSelection: Te
    },
    {
      type: "findMany",
      operationName: Xe,
      modelApiIdentifier: re,
      defaultSelection: Te
    },
    {
      type: "findFirst",
      operationName: Xe,
      modelApiIdentifier: re,
      defaultSelection: Te
    },
    {
      type: "maybeFindFirst",
      operationName: Xe,
      modelApiIdentifier: re,
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductImage: { required: !1, type: "CreateShopifyProductImageInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductImages",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: re,
      modelSelectionField: Xe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductImage: { required: !1, type: "UpdateShopifyProductImageInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductImages",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: re,
      modelSelectionField: Xe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Te
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: re,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: re,
      modelSelectionField: Xe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), xe = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, ne = "shopifyProductOption", et = "shopifyProductOptions", ns = we(
  ne,
  et,
  xe,
  [
    {
      type: "findOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "maybeFindOne",
      operationName: ne,
      modelApiIdentifier: ne,
      findByVariableName: "id",
      defaultSelection: xe
    },
    {
      type: "findMany",
      operationName: et,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "findFirst",
      operationName: et,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "maybeFindFirst",
      operationName: et,
      modelApiIdentifier: ne,
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductOption: { required: !1, type: "CreateShopifyProductOptionInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductOptions",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ne,
      modelSelectionField: et,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductOption: { required: !1, type: "UpdateShopifyProductOptionInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductOptions",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ne,
      modelSelectionField: et,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: xe
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ne,
      modelSelectionField: ne,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ne,
      modelSelectionField: et,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), De = {
  __typename: !0,
  id: !0,
  state: !0,
  barcode: !0,
  compareAtPrice: !0,
  createdAt: !0,
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
  updatedAt: !0,
  weight: !0,
  weightUnit: !0
}, ie = "shopifyProductVariant", tt = "shopifyProductVariants", is = we(
  ie,
  tt,
  De,
  [
    {
      type: "findOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "maybeFindOne",
      operationName: ie,
      modelApiIdentifier: ie,
      findByVariableName: "id",
      defaultSelection: De
    },
    {
      type: "findMany",
      operationName: tt,
      modelApiIdentifier: ie,
      defaultSelection: De
    },
    {
      type: "findFirst",
      operationName: tt,
      modelApiIdentifier: ie,
      defaultSelection: De
    },
    {
      type: "maybeFindFirst",
      operationName: tt,
      modelApiIdentifier: ie,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyProductVariant: { required: !1, type: "CreateShopifyProductVariantInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyProductVariants",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ie,
      modelSelectionField: tt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductVariant: { required: !1, type: "UpdateShopifyProductVariantInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyProductVariants",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ie,
      modelSelectionField: tt,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: De
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ie,
      modelSelectionField: ie,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ie,
      modelSelectionField: tt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), de = {
  __typename: !0,
  id: !0,
  state: !0,
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
  disabledWebhooks: !0,
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
  taxShipping: !0,
  taxesIncluded: !0,
  timezone: !0,
  transactionalSmsDisabled: !0,
  updatedAt: !0,
  weightUnit: !0,
  zipCode: !0
}, V = "shopifyShop", Ve = "shopifyShops", as = we(
  V,
  Ve,
  de,
  [
    {
      type: "findOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: de
    },
    {
      type: "maybeFindOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: de
    },
    {
      type: "findMany",
      operationName: Ve,
      modelApiIdentifier: V,
      defaultSelection: de
    },
    {
      type: "findFirst",
      operationName: Ve,
      modelApiIdentifier: V,
      defaultSelection: de
    },
    {
      type: "maybeFindFirst",
      operationName: Ve,
      modelApiIdentifier: V,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifyShop: { required: !1, type: "CreateShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyShops",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: V,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "UpdateShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyShops",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: V,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyShops",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: V,
      modelSelectionField: Ve,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "ReinstallShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "bulkReinstallShopifyShops",
      functionName: "bulkReinstall",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "reinstall",
      modelApiIdentifier: V,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyShop: { required: !1, type: "UninstallShopifyShopInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "bulkUninstallShopifyShops",
      functionName: "bulkUninstall",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "uninstall",
      modelApiIdentifier: V,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: de
    }
  ]
), Re = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, ae = "productPairing", rt = "productPairings", os = we(
  ae,
  rt,
  Re,
  [
    {
      type: "findOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "maybeFindOne",
      operationName: ae,
      modelApiIdentifier: ae,
      findByVariableName: "id",
      defaultSelection: Re
    },
    {
      type: "findMany",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: Re
    },
    {
      type: "findFirst",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: Re
    },
    {
      type: "maybeFindFirst",
      operationName: rt,
      modelApiIdentifier: ae,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        productPairing: { required: !1, type: "CreateProductPairingInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "bulkCreateProductPairings",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ae,
      modelSelectionField: rt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        productPairing: { required: !1, type: "UpdateProductPairingInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "bulkUpdateProductPairings",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ae,
      modelSelectionField: rt,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: Re
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ae,
      modelSelectionField: ae,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteProductPairings",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ae,
      modelSelectionField: rt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), he = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  domain: !0,
  errorDetails: !0,
  errorMessage: !0,
  force: !0,
  models: !0,
  syncKey: !0,
  syncSince: !0,
  updatedAt: !0
}, Z = "shopifySync", ze = "shopifySyncs", ss = we(
  Z,
  ze,
  he,
  [
    {
      type: "findOne",
      operationName: Z,
      modelApiIdentifier: Z,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "maybeFindOne",
      operationName: Z,
      modelApiIdentifier: Z,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "findMany",
      operationName: ze,
      modelApiIdentifier: Z,
      defaultSelection: he
    },
    {
      type: "findFirst",
      operationName: ze,
      modelApiIdentifier: Z,
      defaultSelection: he
    },
    {
      type: "maybeFindFirst",
      operationName: ze,
      modelApiIdentifier: Z,
      defaultSelection: he
    },
    {
      type: "findOne",
      operationName: ze,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Z,
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifySync: { required: !1, type: "CompleteShopifySyncInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "bulkCompleteShopifySyncs",
      functionName: "bulkComplete",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "complete",
      modelApiIdentifier: Z,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifySync: { required: !1, type: "ErrorShopifySyncInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "bulkErrorShopifySyncs",
      functionName: "bulkError",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "error",
      modelApiIdentifier: Z,
      modelSelectionField: ze,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: Z,
      modelSelectionField: Z,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        shopifySync: { required: !1, type: "RunShopifySyncInput" },
        startReason: { required: !1, type: "String" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "bulkRunShopifySyncs",
      functionName: "bulkRun",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "run",
      modelApiIdentifier: Z,
      modelSelectionField: ze,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: he
    }
  ]
), ke = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, X = "ambiguous", We = "ambiguouss", us = we(
  X,
  We,
  ke,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: ke
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: ke
    },
    {
      type: "findMany",
      operationName: We,
      modelApiIdentifier: X,
      defaultSelection: ke
    },
    {
      type: "findFirst",
      operationName: We,
      modelApiIdentifier: X,
      defaultSelection: ke
    },
    {
      type: "maybeFindFirst",
      operationName: We,
      modelApiIdentifier: X,
      defaultSelection: ke
    },
    {
      type: "findOne",
      operationName: We,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "bulkCreateAmbiguous",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: X,
      modelSelectionField: We,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        ambiguous: { required: !1, type: "UpdateAmbiguousInput" }
      },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "bulkUpdateAmbiguous",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: X,
      modelSelectionField: We,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: X,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteAmbiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: X,
      modelSelectionField: We,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Oe = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, ee = "unambiguous", Ke = "unambiguouss", ls = we(
  ee,
  Ke,
  Oe,
  [
    {
      type: "findOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Oe
    },
    {
      type: "maybeFindOne",
      operationName: ee,
      modelApiIdentifier: ee,
      findByVariableName: "id",
      defaultSelection: Oe
    },
    {
      type: "findMany",
      operationName: Ke,
      modelApiIdentifier: ee,
      defaultSelection: Oe
    },
    {
      type: "findFirst",
      operationName: Ke,
      modelApiIdentifier: ee,
      defaultSelection: Oe
    },
    {
      type: "maybeFindFirst",
      operationName: Ke,
      modelApiIdentifier: ee,
      defaultSelection: Oe
    },
    {
      type: "findOne",
      operationName: Ke,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ee,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        unambiguous: { required: !1, type: "CreateUnambiguousInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "bulkCreateUnambiguous",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: ee,
      modelSelectionField: Ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        unambiguous: { required: !1, type: "UpdateUnambiguousInput" }
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "bulkUpdateUnambiguous",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ee,
      modelSelectionField: Ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: Oe
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: ee,
      modelSelectionField: ee,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ee,
      modelSelectionField: Ke,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Xn = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ei = "session", cs = "sessions", ds = we(
  ei,
  cs,
  Xn,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Xn,
      modelApiIdentifier: ei
    }
  ]
);
var Ti;
const ti = "production", fs = "development", ps = Symbol.for("gadget/modelRelationships"), ys = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class ms {
  constructor(t) {
    var i;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Ti] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await Jn(
        this.connection,
        "globalShopifySync",
        {
          apiKeys: {
            value: a.apiKeys,
            required: !1,
            type: "[String!]"
          },
          syncSince: {
            value: a.syncSince,
            required: !1,
            type: "DateTime"
          },
          models: {
            value: a.models,
            required: !1,
            type: "[String!]"
          },
          force: {
            value: a.force,
            required: !1,
            type: "Boolean"
          },
          startReason: {
            value: a.startReason,
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
      async () => await Jn(
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
    ), this.transaction = async (a) => await this.connection.transaction(a), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? ys() ?? fs).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == ti ? "" : `--${this.environment}`}.gadget.app`;
    const n = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== ti) {
      const a = ({ forward: o }) => (u) => {
        const l = o(u);
        return Kr(
          l,
          bt((d) => {
            try {
              if (typeof window < "u" && typeof CustomEvent == "function") {
                const c = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                window.dispatchEvent(c);
              }
            } catch (c) {
              console.warn("[gadget] error dispatching gadget dev harness event", c);
            }
            return d;
          })
        );
      };
      n.beforeAll = [
        a,
        ...n.beforeAll ?? []
      ];
    }
    if (this.connection = new Ei({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: n,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == Y.APIKey && !((i = t == null ? void 0 : t.authenticationMode) != null && i.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Xo(this.connection), this.session = new es(this.connection), this.shopifyProduct = new ts(this.connection), this.shopifyProductImage = new rs(this.connection), this.shopifyProductOption = new ns(this.connection), this.shopifyProductVariant = new is(this.connection), this.shopifyShop = new as(this.connection), this.productPairing = new os(this.connection), this.shopifySync = new ss(this.connection), this.ambiguous = new us(this.connection), this.unambiguous = new ls(this.connection), this.currentSession = new ds(this.connection), this.internal = {
      user: new Ae("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Ae("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Ae("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Ae("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Ae("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Ae("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Ae("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Ae("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Ae("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Ae("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Ae("unambiguous", this.connection, {
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
  async mutate(t, r, n) {
    const { data: i, error: a } = await this.connection.currentClient.mutation(t, r, n).toPromise();
    if (a)
      throw a;
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
  async enqueue(t, r, n) {
    jr(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let i, a;
    return typeof n < "u" ? (i = r, a = n) : !t.variables || Object.keys(t.variables).length == 0 ? (i = {}, a = r) : (typeof r == "string" ? i = { id: r } : i = r, a = {}), await wo(this.connection, t, i, a);
  }
  /**
   * Returns a handle for a given background action id
   *
   * @param action The action that was enqueued
   * @param id The id of the background action
   *
   * @example
   * const handle = api.handle(api.widget.update, "app-job-12346");
   *
   * @example
   * const handle = api.handle(api.someGlobalAction, "app-job-56789");
   **/
  handle(t, r) {
    return new tr(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Ti = ps;
var xi = {}, fr = Fe.createContext(xi);
fr.Provider;
fr.Consumer;
fr.displayName = "UrqlContext";
var hs = () => {
  var e = Fe.useContext(fr);
  if (e === xi && process.env.NODE_ENV !== "production") {
    var t = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    throw console.error(t), new Error(t);
  }
  return e;
}, bs = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
}, gs = (e, t) => e === t || !(!e || !t || e.key !== t.key), Ar = (e, t) => {
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
      if (o === "operation" ? !gs(n[o], i[o]) : n[o] !== i[o])
        return !0;
    return !1;
  })(e, r) ? r : e;
}, vs = (e, t) => {
  for (var r = 0, n = t.length; r < n; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}, kr = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function ri(e, t) {
  process.env.NODE_ENV !== "production" && kr && kr.ReactCurrentOwner && kr.ReactCurrentOwner.current ? Promise.resolve(t).then(e) : e(t);
}
function Ss(e, t) {
  var r = Fe.useRef(void 0);
  return Fe.useMemo(() => {
    var n = er(e, t);
    return r.current !== void 0 && r.current.key === n.key ? r.current : (r.current = n, n);
  }, [e, t]);
}
var Is = (e) => {
  if (!e._react) {
    var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    e.operations$ && ot((n) => {
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
}, ws = (e, t) => e.suspense && (!t || t.suspense !== !1);
function As(e) {
  var t = hs(), r = Is(t), n = ws(t, e.context), i = Ss(e.query, e.variables), a = Fe.useMemo(() => {
    if (e.pause)
      return null;
    var m = t.executeQuery(i, {
      requestPolicy: e.requestPolicy,
      ...e.context
    });
    return n ? vt((h) => {
      r.set(i.key, h);
    })(m) : m;
  }, [r, t, i, n, e.pause, e.requestPolicy, e.context]), o = Fe.useCallback((m, h) => {
    if (!m)
      return {
        fetching: !1
      };
    var g = r.get(i.key);
    if (g) {
      if (h && g != null && "then" in g)
        throw g;
    } else {
      var A, C = ot((S) => {
        g = S, A && A(g);
      })(ni(() => h && !A || !g)(m));
      if (g == null && h) {
        var F = new Promise((S) => {
          A = S;
        });
        throw r.set(i.key, F), F;
      } else
        C.unsubscribe();
    }
    return g || {
      fetching: !0
    };
  }, [r, i]), u = [t, i, e.requestPolicy, e.context, e.pause], [l, d] = Fe.useState(() => [a, Ar(bs, o(a, n)), u]), c = l[1];
  a !== l[0] && vs(l[2], u) && d([a, c = Ar(l[1], o(a, n)), u]), Fe.useEffect(() => {
    var m = l[0], h = l[2][1], g = !1, A = (F) => {
      g = !0, ri(d, (S) => {
        var q = Ar(S[1], F);
        return S[1] !== q ? [S[0], q, S[2]] : S;
      });
    };
    if (m) {
      var C = ot(A)(Gr(() => {
        A({
          fetching: !1
        });
      })(m));
      return g || A({
        fetching: !0
      }), () => {
        r.dispose(h.key), C.unsubscribe();
      };
    } else
      A({
        fetching: !1
      });
  }, [r, l[0], l[2][1]]);
  var f = Fe.useCallback((m) => {
    var h = {
      requestPolicy: e.requestPolicy,
      ...e.context,
      ...m
    };
    ri(d, (g) => [n ? vt((A) => {
      r.set(i.key, A);
    })(t.executeQuery(i, h)) : t.executeQuery(i, h), g[1], u]);
  }, [t, r, i, n, o, e.requestPolicy, e.context]);
  return [c, f];
}
const ks = sr.createContext(void 0);
sr.createContext(void 0);
const Os = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>", Ns = (e, t) => {
  let r = "";
  return e !== void 0 ? r = `[Network] ${e.message}` : t !== void 0 ? t.forEach((n) => {
    r += `[GraphQL] ${n.message}
`;
  }) : r = "Unknown error", r.trim();
}, Es = (e) => typeof e == "string" ? new $t(e) : e != null && e.message && !e.code ? new $t(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
class it extends Error {
  /** @private */
  static forClientSideError(t, r) {
    return new it({
      executionErrors: [t],
      response: r
    });
  }
  /** @private */
  static forErrorsResponse(t, r) {
    return new it({
      executionErrors: t.map(Yr),
      response: r
    });
  }
  /** @private */
  static forMaybeCombinedError(t) {
    if (t)
      return new it({
        networkError: t.networkError,
        executionErrors: t.graphQLErrors,
        response: t.response
      });
  }
  /** @private */
  static errorIfDataAbsent(t, r, n = !1) {
    const i = so(t, r);
    let a = it.forMaybeCombinedError(t.error);
    return !a && i && !n && (a = it.forClientSideError(i)), a;
  }
  constructor({ networkError: t, executionErrors: r, response: n }) {
    const i = (r || []).map(Es), a = Ns(t, i);
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
const Ps = (e) => {
  const { context: t, suspense: r, ...n } = e ?? {}, i = Or(() => ({
    suspense: !!(e != null && e.suspense),
    ...e == null ? void 0 : e.context
  }), [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]);
  return {
    ...n,
    context: i
  };
}, _s = (e, t) => ({
  query: e.query,
  variables: e.variables,
  ...t
}), Cs = (e) => {
  if (!ra(ks))
    throw new Error(Os);
  const t = Ps(e);
  return As(t);
};
var Ts = typeof Element < "u", xs = typeof Map == "function", Ds = typeof Set == "function", Rs = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function rr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!rr(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (xs && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!rr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Ds && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Rs && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n]))
        return !1;
    if (Ts && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !rr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Fs = function(t, r) {
  try {
    return rr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const js = /* @__PURE__ */ ia(Fs), Ms = (e) => {
  const t = na();
  return e ? (t.current === void 0 || !js(e, t.current)) && (t.current = e) : t.current = void 0, t.current;
}, $s = (e, t) => {
  const r = Ms(t), n = Or(() => nn(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, r), [e, r]), [i, a] = Cs(_s(n, t));
  return [Or(() => {
    const u = [e.findMany.operationName];
    let l = i.data;
    if (l) {
      const c = At(i.data, u);
      if (c) {
        const f = qt(i, c);
        l = kt.boot(e, f, c);
      }
    }
    const d = it.errorIfDataAbsent(i, u, t == null ? void 0 : t.pause);
    return { ...i, data: l, error: d };
  }, [e, t == null ? void 0 : t.pause, i]), a];
}, qs = new ms(), Us = () => {
  const [{ data: e }] = $s(qs.shopifyProduct);
  return /* @__PURE__ */ An.jsx(An.Fragment, { children: JSON.stringify(e) });
};
export {
  Us as R,
  Vs as c,
  ia as g
};
