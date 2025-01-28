var _y = Object.defineProperty;
var Ry = (e, t, r) => (t in e ? _y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
var he = (e, t, r) => (Ry(e, typeof t != "symbol" ? t + "" : t, r), r);
const { once: wy } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { FORCE_REMOUNT: Ss, STORY_RENDER_PHASE_CHANGED: Cy, SET_CURRENT_STORY: qy } = __STORYBOOK_MODULE_CORE_EVENTS__,
  { addons: Ey } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: Ne } = __STORYBOOK_MODULE_GLOBAL__;
var Py = ((e) =>
    typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] }) : e)(
    function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    }
  ),
  Oy = {
    reset: [0, 0],
    bold: [1, 22, "\x1B[22m\x1B[1m"],
    dim: [2, 22, "\x1B[22m\x1B[2m"],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
  },
  Ty = Object.entries(Oy);
function Ki(e) {
  return String(e);
}
Ki.open = "";
Ki.close = "";
function Sy(e = !1) {
  let t = typeof process < "u" ? process : void 0,
    r = (t == null ? void 0 : t.env) || {},
    n = (t == null ? void 0 : t.argv) || [];
  return (
    (!("NO_COLOR" in r || n.includes("--no-color")) &&
      ("FORCE_COLOR" in r ||
        n.includes("--color") ||
        (t == null ? void 0 : t.platform) === "win32" ||
        (e && r.TERM !== "dumb") ||
        "CI" in r)) ||
    (typeof window < "u" && !!window.chrome)
  );
}
function Ay(e = !1) {
  let t = Sy(e),
    r = (i, l, u, c) => {
      let s = "",
        d = 0;
      do (s += i.substring(d, c) + u), (d = c + l.length), (c = i.indexOf(l, d));
      while (~c);
      return s + i.substring(d);
    },
    n = (i, l, u = i) => {
      let c = (s) => {
        let d = String(s),
          m = d.indexOf(l, i.length);
        return ~m ? i + r(d, l, u, m) + l : i + d + l;
      };
      return (c.open = i), (c.close = l), c;
    },
    o = { isColorSupported: t },
    a = (i) => `\x1B[${i}m`;
  for (let [i, l] of Ty) o[i] = t ? n(a(l[0]), a(l[1]), l[2]) : Ki;
  return o;
}
var mt = Ay(!1);
function My(e, t) {
  let r = Object.keys(e),
    n = t === null ? r : r.sort(t);
  if (Object.getOwnPropertySymbols)
    for (let o of Object.getOwnPropertySymbols(e)) Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o);
  return n;
}
function so(e, t, r, n, o, a, i = ": ") {
  let l = "",
    u = 0,
    c = e.next();
  if (!c.done) {
    l += t.spacingOuter;
    let s = r + t.indent;
    for (; !c.done; ) {
      if (((l += s), u++ === t.maxWidth)) {
        l += "…";
        break;
      }
      let d = a(c.value[0], t, s, n, o),
        m = a(c.value[1], t, s, n, o);
      (l += d + i + m), (c = e.next()), c.done ? t.min || (l += ",") : (l += `,${t.spacingInner}`);
    }
    l += t.spacingOuter + r;
  }
  return l;
}
function Yi(e, t, r, n, o, a) {
  let i = "",
    l = 0,
    u = e.next();
  if (!u.done) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (; !u.done; ) {
      if (((i += c), l++ === t.maxWidth)) {
        i += "…";
        break;
      }
      (i += a(u.value, t, c, n, o)), (u = e.next()), u.done ? t.min || (i += ",") : (i += `,${t.spacingInner}`);
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Fn(e, t, r, n, o, a) {
  let i = "";
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  let l = (c) => c instanceof DataView,
    u = l(e) ? e.byteLength : e.length;
  if (u > 0) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (let s = 0; s < u; s++) {
      if (((i += c), s === t.maxWidth)) {
        i += "…";
        break;
      }
      (l(e) || s in e) && (i += a(l(e) ? e.getInt8(s) : e[s], t, c, n, o)), s < u - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Ji(e, t, r, n, o, a) {
  let i = "",
    l = My(e, t.compareKeys);
  if (l.length > 0) {
    i += t.spacingOuter;
    let u = r + t.indent;
    for (let c = 0; c < l.length; c++) {
      let s = l[c],
        d = a(s, t, u, n, o),
        m = a(e[s], t, u, n, o);
      (i += `${u + d}: ${m}`), c < l.length - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var xy = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621,
  ba = " ",
  jy = (e, t, r, n, o, a) => {
    let i = e.toString();
    if (i === "ArrayContaining" || i === "ArrayNotContaining")
      return ++n > t.maxDepth ? `[${i}]` : `${i + ba}[${Fn(e.sample, t, r, n, o, a)}]`;
    if (i === "ObjectContaining" || i === "ObjectNotContaining")
      return ++n > t.maxDepth ? `[${i}]` : `${i + ba}{${Ji(e.sample, t, r, n, o, a)}}`;
    if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
      return i + ba + a(e.sample, t, r, n, o);
    if (typeof e.toAsymmetricMatcher != "function")
      throw new TypeError(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
    return e.toAsymmetricMatcher();
  },
  Ny = (e) => e && e.$$typeof === xy,
  $y = { serialize: jy, test: Ny },
  Iy = " ",
  Ed = new Set(["DOMStringMap", "NamedNodeMap"]),
  By = /^(?:HTML\w*Collection|NodeList)$/;
function ky(e) {
  return Ed.has(e) || By.test(e);
}
var Ly = (e) => e && e.constructor && !!e.constructor.name && ky(e.constructor.name);
function Dy(e) {
  return e.constructor.name === "NamedNodeMap";
}
var Fy = (e, t, r, n, o, a) => {
    let i = e.constructor.name;
    return ++n > t.maxDepth
      ? `[${i}]`
      : (t.min ? "" : i + Iy) +
          (Ed.has(i)
            ? `{${Ji(Dy(e) ? [...e].reduce((l, u) => ((l[u.name] = u.value), l), {}) : { ...e }, t, r, n, o, a)}}`
            : `[${Fn([...e], t, r, n, o, a)}]`);
  },
  Hy = { serialize: Fy, test: Ly };
function Pd(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Xi(e, t, r, n, o, a, i) {
  let l = n + r.indent,
    u = r.colors;
  return e
    .map((c) => {
      let s = t[c],
        d = i(s, r, l, o, a);
      return (
        typeof s != "string" &&
          (d.includes(`
`) && (d = r.spacingOuter + l + d + r.spacingOuter + n),
          (d = `{${d}}`)),
        `${r.spacingInner + n + u.prop.open + c + u.prop.close}=${u.value.open}${d}${u.value.close}`
      );
    })
    .join("");
}
function Qi(e, t, r, n, o, a) {
  return e.map((i) => t.spacingOuter + r + (typeof i == "string" ? Od(i, t) : a(i, t, r, n, o))).join("");
}
function Od(e, t) {
  let r = t.colors.content;
  return r.open + Pd(e) + r.close;
}
function Uy(e, t) {
  let r = t.colors.comment;
  return `${r.open}<!--${Pd(e)}-->${r.close}`;
}
function Zi(e, t, r, n, o) {
  let a = n.colors.tag;
  return `${a.open}<${e}${t && a.close + t + n.spacingOuter + o + a.open}${
    r ? `>${a.close}${r}${n.spacingOuter}${o}${a.open}</${e}` : `${t && !n.min ? "" : " "}/`
  }>${a.close}`;
}
function el(e, t) {
  let r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
}
var Vy = 1,
  Td = 3,
  Sd = 8,
  Ad = 11,
  zy = /^(?:(?:HTML|SVG)\w*)?Element$/;
function Gy(e) {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}
function Wy(e) {
  let t = e.constructor.name,
    { nodeType: r, tagName: n } = e,
    o = (typeof n == "string" && n.includes("-")) || Gy(e);
  return (
    (r === Vy && (zy.test(t) || o)) || (r === Td && t === "Text") || (r === Sd && t === "Comment") || (r === Ad && t === "DocumentFragment")
  );
}
var Ky = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && Wy(e);
};
function Yy(e) {
  return e.nodeType === Td;
}
function Jy(e) {
  return e.nodeType === Sd;
}
function ya(e) {
  return e.nodeType === Ad;
}
var Xy = (e, t, r, n, o, a) => {
    if (Yy(e)) return Od(e.data, t);
    if (Jy(e)) return Uy(e.data, t);
    let i = ya(e) ? "DocumentFragment" : e.tagName.toLowerCase();
    return ++n > t.maxDepth
      ? el(i, t)
      : Zi(
          i,
          Xi(
            ya(e) ? [] : Array.from(e.attributes, (l) => l.name).sort(),
            ya(e) ? {} : [...e.attributes].reduce((l, u) => ((l[u.name] = u.value), l), {}),
            t,
            r + t.indent,
            n,
            o,
            a
          ),
          Qi(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, n, o, a),
          t,
          r
        );
  },
  Qy = { serialize: Xy, test: Ky },
  Zy = "@@__IMMUTABLE_ITERABLE__@@",
  eg = "@@__IMMUTABLE_LIST__@@",
  tg = "@@__IMMUTABLE_KEYED__@@",
  rg = "@@__IMMUTABLE_MAP__@@",
  As = "@@__IMMUTABLE_ORDERED__@@",
  ng = "@@__IMMUTABLE_RECORD__@@",
  og = "@@__IMMUTABLE_SEQ__@@",
  ag = "@@__IMMUTABLE_SET__@@",
  ig = "@@__IMMUTABLE_STACK__@@",
  fr = (e) => `Immutable.${e}`,
  uo = (e) => `[${e}]`,
  zr = " ",
  Ms = "…";
function lg(e, t, r, n, o, a, i) {
  return ++n > t.maxDepth ? uo(fr(i)) : `${fr(i) + zr}{${so(e.entries(), t, r, n, o, a)}}`;
}
function sg(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        let r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
function ug(e, t, r, n, o, a) {
  let i = fr(e._name || "Record");
  return ++n > t.maxDepth ? uo(i) : `${i + zr}{${so(sg(e), t, r, n, o, a)}}`;
}
function cg(e, t, r, n, o, a) {
  let i = fr("Seq");
  return ++n > t.maxDepth
    ? uo(i)
    : e[tg]
    ? `${i + zr}{${e._iter || e._object ? so(e.entries(), t, r, n, o, a) : Ms}}`
    : `${i + zr}[${e._iter || e._array || e._collection || e._iterable ? Yi(e.values(), t, r, n, o, a) : Ms}]`;
}
function ga(e, t, r, n, o, a, i) {
  return ++n > t.maxDepth ? uo(fr(i)) : `${fr(i) + zr}[${Yi(e.values(), t, r, n, o, a)}]`;
}
var dg = (e, t, r, n, o, a) =>
    e[rg]
      ? lg(e, t, r, n, o, a, e[As] ? "OrderedMap" : "Map")
      : e[eg]
      ? ga(e, t, r, n, o, a, "List")
      : e[ag]
      ? ga(e, t, r, n, o, a, e[As] ? "OrderedSet" : "Set")
      : e[ig]
      ? ga(e, t, r, n, o, a, "Stack")
      : e[og]
      ? cg(e, t, r, n, o, a)
      : ug(e, t, r, n, o, a),
  pg = (e) => e && (e[Zy] === !0 || e[ng] === !0),
  mg = { serialize: dg, test: pg },
  xs = { exports: {} },
  re = {},
  js;
function fg() {
  if (js) return re;
  js = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    i = Symbol.for("react.context"),
    l = Symbol.for("react.server_context"),
    u = Symbol.for("react.forward_ref"),
    c = Symbol.for("react.suspense"),
    s = Symbol.for("react.suspense_list"),
    d = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    p = Symbol.for("react.offscreen"),
    f;
  f = Symbol.for("react.module.reference");
  function b(h) {
    if (typeof h == "object" && h !== null) {
      var y = h.$$typeof;
      switch (y) {
        case e:
          switch (((h = h.type), h)) {
            case r:
            case o:
            case n:
            case c:
            case s:
              return h;
            default:
              switch (((h = h && h.$$typeof), h)) {
                case l:
                case i:
                case u:
                case m:
                case d:
                case a:
                  return h;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return (
    (re.ContextConsumer = i),
    (re.ContextProvider = a),
    (re.Element = e),
    (re.ForwardRef = u),
    (re.Fragment = r),
    (re.Lazy = m),
    (re.Memo = d),
    (re.Portal = t),
    (re.Profiler = o),
    (re.StrictMode = n),
    (re.Suspense = c),
    (re.SuspenseList = s),
    (re.isAsyncMode = function () {
      return !1;
    }),
    (re.isConcurrentMode = function () {
      return !1;
    }),
    (re.isContextConsumer = function (h) {
      return b(h) === i;
    }),
    (re.isContextProvider = function (h) {
      return b(h) === a;
    }),
    (re.isElement = function (h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }),
    (re.isForwardRef = function (h) {
      return b(h) === u;
    }),
    (re.isFragment = function (h) {
      return b(h) === r;
    }),
    (re.isLazy = function (h) {
      return b(h) === m;
    }),
    (re.isMemo = function (h) {
      return b(h) === d;
    }),
    (re.isPortal = function (h) {
      return b(h) === t;
    }),
    (re.isProfiler = function (h) {
      return b(h) === o;
    }),
    (re.isStrictMode = function (h) {
      return b(h) === n;
    }),
    (re.isSuspense = function (h) {
      return b(h) === c;
    }),
    (re.isSuspenseList = function (h) {
      return b(h) === s;
    }),
    (re.isValidElementType = function (h) {
      return (
        typeof h == "string" ||
        typeof h == "function" ||
        h === r ||
        h === o ||
        h === n ||
        h === c ||
        h === s ||
        h === p ||
        (typeof h == "object" &&
          h !== null &&
          (h.$$typeof === m ||
            h.$$typeof === d ||
            h.$$typeof === a ||
            h.$$typeof === i ||
            h.$$typeof === u ||
            h.$$typeof === f ||
            h.getModuleId !== void 0))
      );
    }),
    (re.typeOf = b),
    re
  );
}
var Ns;
function hg() {
  return Ns || ((Ns = 1), (xs.exports = fg())), xs.exports;
}
var Dt = hg();
function Md(e, t = []) {
  if (Array.isArray(e)) for (let r of e) Md(r, t);
  else e != null && e !== !1 && e !== "" && t.push(e);
  return t;
}
function $s(e) {
  let t = e.type;
  if (typeof t == "string") return t;
  if (typeof t == "function") return t.displayName || t.name || "Unknown";
  if (Dt.isFragment(e)) return "React.Fragment";
  if (Dt.isSuspense(e)) return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Dt.isContextProvider(e)) return "Context.Provider";
    if (Dt.isContextConsumer(e)) return "Context.Consumer";
    if (Dt.isForwardRef(e)) {
      if (t.displayName) return t.displayName;
      let r = t.render.displayName || t.render.name || "";
      return r === "" ? "ForwardRef" : `ForwardRef(${r})`;
    }
    if (Dt.isMemo(e)) {
      let r = t.displayName || t.type.displayName || t.type.name || "";
      return r === "" ? "Memo" : `Memo(${r})`;
    }
  }
  return "UNDEFINED";
}
function bg(e) {
  let { props: t } = e;
  return Object.keys(t)
    .filter((r) => r !== "children" && t[r] !== void 0)
    .sort();
}
var yg = (e, t, r, n, o, a) =>
    ++n > t.maxDepth
      ? el($s(e), t)
      : Zi($s(e), Xi(bg(e), e.props, t, r + t.indent, n, o, a), Qi(Md(e.props.children), t, r + t.indent, n, o, a), t, r),
  gg = (e) => e != null && Dt.isElement(e),
  vg = { serialize: yg, test: gg },
  _g = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function Rg(e) {
  let { props: t } = e;
  return t
    ? Object.keys(t)
        .filter((r) => t[r] !== void 0)
        .sort()
    : [];
}
var wg = (e, t, r, n, o, a) =>
    ++n > t.maxDepth
      ? el(e.type, t)
      : Zi(
          e.type,
          e.props ? Xi(Rg(e), e.props, t, r + t.indent, n, o, a) : "",
          e.children ? Qi(e.children, t, r + t.indent, n, o, a) : "",
          t,
          r
        ),
  Cg = (e) => e && e.$$typeof === _g,
  qg = { serialize: wg, test: Cg },
  xd = Object.prototype.toString,
  Eg = Date.prototype.toISOString,
  Pg = Error.prototype.toString,
  Is = RegExp.prototype.toString;
function va(e) {
  return (typeof e.constructor == "function" && e.constructor.name) || "Object";
}
function Og(e) {
  return typeof window < "u" && e === window;
}
var Tg = /^Symbol\((.*)\)(.*)$/,
  Sg = /\n/g,
  jd = class extends Error {
    constructor(t, r) {
      super(t), (this.stack = r), (this.name = this.constructor.name);
    }
  };
function Ag(e) {
  return (
    e === "[object Array]" ||
    e === "[object ArrayBuffer]" ||
    e === "[object DataView]" ||
    e === "[object Float32Array]" ||
    e === "[object Float64Array]" ||
    e === "[object Int8Array]" ||
    e === "[object Int16Array]" ||
    e === "[object Int32Array]" ||
    e === "[object Uint8Array]" ||
    e === "[object Uint8ClampedArray]" ||
    e === "[object Uint16Array]" ||
    e === "[object Uint32Array]"
  );
}
function Mg(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function xg(e) {
  return `${e}n`;
}
function Bs(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function ks(e) {
  return String(e).replace(Tg, "Symbol($1)");
}
function Ls(e) {
  return `[${Pg.call(e)}]`;
}
function Nd(e, t, r, n) {
  if (e === !0 || e === !1) return `${e}`;
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  let o = typeof e;
  if (o === "number") return Mg(e);
  if (o === "bigint") return xg(e);
  if (o === "string") return n ? `"${e.replaceAll(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (o === "function") return Bs(e, t);
  if (o === "symbol") return ks(e);
  let a = xd.call(e);
  return a === "[object WeakMap]"
    ? "WeakMap {}"
    : a === "[object WeakSet]"
    ? "WeakSet {}"
    : a === "[object Function]" || a === "[object GeneratorFunction]"
    ? Bs(e, t)
    : a === "[object Symbol]"
    ? ks(e)
    : a === "[object Date]"
    ? Number.isNaN(+e)
      ? "Date { NaN }"
      : Eg.call(e)
    : a === "[object Error]"
    ? Ls(e)
    : a === "[object RegExp]"
    ? r
      ? Is.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&")
      : Is.call(e)
    : e instanceof Error
    ? Ls(e)
    : null;
}
function $d(e, t, r, n, o, a) {
  if (o.includes(e)) return "[Circular]";
  (o = [...o]), o.push(e);
  let i = ++n > t.maxDepth,
    l = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !a) return Tt(e.toJSON(), t, r, n, o, !0);
  let u = xd.call(e);
  return u === "[object Arguments]"
    ? i
      ? "[Arguments]"
      : `${l ? "" : "Arguments "}[${Fn(e, t, r, n, o, Tt)}]`
    : Ag(u)
    ? i
      ? `[${e.constructor.name}]`
      : `${l || (!t.printBasicPrototype && e.constructor.name === "Array") ? "" : `${e.constructor.name} `}[${Fn(e, t, r, n, o, Tt)}]`
    : u === "[object Map]"
    ? i
      ? "[Map]"
      : `Map {${so(e.entries(), t, r, n, o, Tt, " => ")}}`
    : u === "[object Set]"
    ? i
      ? "[Set]"
      : `Set {${Yi(e.values(), t, r, n, o, Tt)}}`
    : i || Og(e)
    ? `[${va(e)}]`
    : `${l || (!t.printBasicPrototype && va(e) === "Object") ? "" : `${va(e)} `}{${Ji(e, t, r, n, o, Tt)}}`;
}
function jg(e) {
  return e.serialize != null;
}
function Id(e, t, r, n, o, a) {
  let i;
  try {
    i = jg(e)
      ? e.serialize(t, r, n, o, a, Tt)
      : e.print(
          t,
          (l) => Tt(l, r, n, o, a),
          (l) => {
            let u = n + r.indent;
            return (
              u +
              l.replaceAll(
                Sg,
                `
${u}`
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors
        );
  } catch (l) {
    throw new jd(l.message, l.stack);
  }
  if (typeof i != "string") throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
  return i;
}
function Bd(e, t) {
  for (let r of e)
    try {
      if (r.test(t)) return r;
    } catch (n) {
      throw new jd(n.message, n.stack);
    }
  return null;
}
function Tt(e, t, r, n, o, a) {
  let i = Bd(t.plugins, e);
  if (i !== null) return Id(i, e, t, r, n, o);
  let l = Nd(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return l !== null ? l : $d(e, t, r, n, o, a);
}
var tl = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" },
  kd = Object.keys(tl),
  We = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: Number.POSITIVE_INFINITY,
    maxWidth: Number.POSITIVE_INFINITY,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: tl,
  };
function Ng(e) {
  for (let t of Object.keys(e)) if (!Object.prototype.hasOwnProperty.call(We, t)) throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
function $g() {
  return kd.reduce((e, t) => {
    let r = tl[t],
      n = r && mt[r];
    if (n && typeof n.close == "string" && typeof n.open == "string") e[t] = n;
    else throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`);
    return e;
  }, Object.create(null));
}
function Ig() {
  return kd.reduce((e, t) => ((e[t] = { close: "", open: "" }), e), Object.create(null));
}
function Ld(e) {
  return (e == null ? void 0 : e.printFunctionName) ?? We.printFunctionName;
}
function Dd(e) {
  return (e == null ? void 0 : e.escapeRegex) ?? We.escapeRegex;
}
function Fd(e) {
  return (e == null ? void 0 : e.escapeString) ?? We.escapeString;
}
function Ds(e) {
  return {
    callToJSON: (e == null ? void 0 : e.callToJSON) ?? We.callToJSON,
    colors: e != null && e.highlight ? $g() : Ig(),
    compareKeys:
      typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null
        ? e.compareKeys
        : We.compareKeys,
    escapeRegex: Dd(e),
    escapeString: Fd(e),
    indent: e != null && e.min ? "" : Bg((e == null ? void 0 : e.indent) ?? We.indent),
    maxDepth: (e == null ? void 0 : e.maxDepth) ?? We.maxDepth,
    maxWidth: (e == null ? void 0 : e.maxWidth) ?? We.maxWidth,
    min: (e == null ? void 0 : e.min) ?? We.min,
    plugins: (e == null ? void 0 : e.plugins) ?? We.plugins,
    printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
    printFunctionName: Ld(e),
    spacingInner:
      e != null && e.min
        ? " "
        : `
`,
    spacingOuter:
      e != null && e.min
        ? ""
        : `
`,
  };
}
function Bg(e) {
  return Array.from({ length: e + 1 }).join(" ");
}
function rt(e, t) {
  if (t && (Ng(t), t.plugins)) {
    let n = Bd(t.plugins, e);
    if (n !== null) return Id(n, e, Ds(t), "", 0, []);
  }
  let r = Nd(e, Ld(t), Dd(t), Fd(t));
  return r !== null ? r : $d(e, Ds(t), "", 0, []);
}
var Hd = { AsymmetricMatcher: $y, DOMCollection: Hy, DOMElement: Qy, Immutable: mg, ReactElement: vg, ReactTestComponent: qg },
  Fs = {
    bold: ["1", "22"],
    dim: ["2", "22"],
    italic: ["3", "23"],
    underline: ["4", "24"],
    inverse: ["7", "27"],
    hidden: ["8", "28"],
    strike: ["9", "29"],
    black: ["30", "39"],
    red: ["31", "39"],
    green: ["32", "39"],
    yellow: ["33", "39"],
    blue: ["34", "39"],
    magenta: ["35", "39"],
    cyan: ["36", "39"],
    white: ["37", "39"],
    brightblack: ["30;1", "39"],
    brightred: ["31;1", "39"],
    brightgreen: ["32;1", "39"],
    brightyellow: ["33;1", "39"],
    brightblue: ["34;1", "39"],
    brightmagenta: ["35;1", "39"],
    brightcyan: ["36;1", "39"],
    brightwhite: ["37;1", "39"],
    grey: ["90", "39"],
  },
  kg = {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red",
  },
  hr = "…";
function Lg(e, t) {
  let r = Fs[kg[t]] || Fs[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
function Dg(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: o = !1,
    maxArrayLength: a = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!o,
    maxArrayLength: Number(a),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = Lg), d;
}
function Fg(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
function It(e, t, r = hr) {
  e = String(e);
  let n = r.length,
    o = e.length;
  if (n > t && o > n) return r;
  if (o > t && o > n) {
    let a = t - n;
    return a > 0 && Fg(e[a - 1]) && (a = a - 1), `${e.slice(0, a)}${r}`;
  }
  return e;
}
function Qe(e, t, r, n = ", ") {
  r = r || t.inspect;
  let o = e.length;
  if (o === 0) return "";
  let a = t.truncate,
    i = "",
    l = "",
    u = "";
  for (let c = 0; c < o; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${hr}(${e.length - c})`;
    let m = e[c];
    t.truncate = a - i.length - (s ? 0 : n.length);
    let p = l || r(m, t) + (s ? "" : n),
      f = i.length + p.length,
      b = f + u.length;
    if (
      (s && f > a && i.length + u.length <= a) ||
      (!s && !d && b > a) ||
      ((l = s ? "" : r(e[c + 1], t) + (d ? "" : n)), !s && d && b > a && f + l.length > a)
    )
      break;
    if (((i += p), !s && !d && f + l.length >= a)) {
      u = `${hr}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${i}${u}`;
}
function Hg(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
function Gr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == "string" ? (e = Hg(e)) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
function Ug(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return "[]";
  t.truncate -= 4;
  let n = Qe(e, t);
  t.truncate -= n.length;
  let o = "";
  return (
    r.length &&
      (o = Qe(
        r.map((a) => [a, e[a]]),
        t,
        Gr
      )),
    `[ ${n}${o ? `, ${o}` : ""} ]`
  );
}
var Vg = (e) =>
  typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name;
function ut(e, t) {
  let r = Vg(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let o = "";
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(It(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      o += `${hr}(${e.length - e[i] + 1})`;
      break;
    }
    o += l;
  }
  let a = "";
  return (
    n.length &&
      (a = Qe(
        n.map((i) => [i, e[i]]),
        t,
        Gr
      )),
    `${r}[ ${o}${a ? `, ${a}` : ""} ]`
  );
}
function zg(e, t) {
  let r = e.toJSON();
  if (r === null) return "Invalid Date";
  let n = r.split("T"),
    o = n[0];
  return t.stylize(`${o}T${It(n[1], t.truncate - o.length - 1)}`, "date");
}
function Hs(e, t) {
  let r = e[Symbol.toStringTag] || "Function",
    n = e.name;
  return n ? t.stylize(`[${r} ${It(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
function Gg([e, t], r) {
  return (r.truncate -= 4), (e = r.inspect(e, r)), (r.truncate -= e.length), (t = r.inspect(t, r)), `${e} => ${t}`;
}
function Wg(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
function Kg(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : ((t.truncate -= 7), `Map{ ${Qe(Wg(e), t, Gg)} }`);
}
var Yg = Number.isNaN || ((e) => e !== e);
function Us(e, t) {
  return Yg(e)
    ? t.stylize("NaN", "number")
    : e === 1 / 0
    ? t.stylize("Infinity", "number")
    : e === -1 / 0
    ? t.stylize("-Infinity", "number")
    : e === 0
    ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number")
    : t.stylize(It(String(e), t.truncate), "number");
}
function Vs(e, t) {
  let r = It(e.toString(), t.truncate - 1);
  return r !== hr && (r += "n"), t.stylize(r, "bigint");
}
function Jg(e, t) {
  let r = e.toString().split("/")[2],
    n = t.truncate - (2 + r.length),
    o = e.source;
  return t.stylize(`/${It(o, n)}/${r}`, "regexp");
}
function Xg(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
function Qg(e, t) {
  return e.size === 0 ? "Set{}" : ((t.truncate -= 7), `Set{ ${Qe(Xg(e), t)} }`);
}
var zs = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    "g"
  ),
  Zg = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "'": "\\'", "\\": "\\\\" },
  ev = 16,
  tv = 4;
function rv(e) {
  return Zg[e] || `\\u${`0000${e.charCodeAt(0).toString(ev)}`.slice(-tv)}`;
}
function Gs(e, t) {
  return zs.test(e) && (e = e.replace(zs, rv)), t.stylize(`'${It(e, t.truncate - 2)}'`, "string");
}
function Ws(e) {
  return "description" in Symbol.prototype ? (e.description ? `Symbol(${e.description})` : "Symbol()") : e.toString();
}
var Ud = () => "Promise{…}";
try {
  let { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) &&
    (Ud = (n, o) => {
      let [a, i] = e(n);
      return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${o.inspect(i, o)}}`;
    });
} catch {}
var nv = Ud;
function xn(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return "{}";
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0)) return "[Circular]";
  t.seen.push(e);
  let o = Qe(
      r.map((l) => [l, e[l]]),
      t,
      Gr
    ),
    a = Qe(
      n.map((l) => [l, e[l]]),
      t,
      Gr
    );
  t.seen.pop();
  let i = "";
  return o && a && (i = ", "), `{ ${o}${i}${a} }`;
}
var _a = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function ov(e, t) {
  let r = "";
  return (
    _a && _a in e && (r = e[_a]),
    (r = r || e.constructor.name),
    (!r || r === "_class") && (r = "<Anonymous Class>"),
    (t.truncate -= r.length),
    `${r}${xn(e, t)}`
  );
}
function av(e, t) {
  return e.length === 0 ? "Arguments[]" : ((t.truncate -= 13), `Arguments[ ${Qe(e, t)} ]`);
}
var iv = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
function lv(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => iv.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let o = "";
  typeof e.message == "string" ? (o = It(e.message, t.truncate)) : r.unshift("message"),
    (o = o ? `: ${o}` : ""),
    (t.truncate -= o.length + 5);
  let a = Qe(
    r.map((i) => [i, e[i]]),
    t,
    Gr
  );
  return `${n}${o}${a ? ` { ${a} }` : ""}`;
}
function sv([e, t], r) {
  return (r.truncate -= 3), t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
function za(e, t) {
  return Qe(
    e,
    t,
    Vd,
    `
`
  );
}
function Vd(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    o = t.stylize(`<${n}`, "special"),
    a = t.stylize(">", "special"),
    i = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let l = "";
  r.length > 0 &&
    ((l += " "),
    (l += Qe(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      sv,
      " "
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = za(e.children, t);
  return c && c.length > u && (c = `${hr}(${e.children.length})`), `${o}${l}${a}${c}${i}`;
}
var uv = typeof Symbol == "function" && typeof Symbol.for == "function",
  Ra = uv ? Symbol.for("chai/inspect") : "@@chai/inspect",
  rr = !1;
try {
  let e = Py("util");
  rr = e.inspect ? e.inspect.custom : !1;
} catch {
  rr = !1;
}
var Ks = new WeakMap(),
  Ys = {},
  Js = {
    undefined: (e, t) => t.stylize("undefined", "undefined"),
    null: (e, t) => t.stylize("null", "null"),
    boolean: (e, t) => t.stylize(String(e), "boolean"),
    Boolean: (e, t) => t.stylize(String(e), "boolean"),
    number: Us,
    Number: Us,
    bigint: Vs,
    BigInt: Vs,
    string: Gs,
    String: Gs,
    function: Hs,
    Function: Hs,
    symbol: Ws,
    Symbol: Ws,
    Array: Ug,
    Date: zg,
    Map: Kg,
    Set: Qg,
    RegExp: Jg,
    Promise: nv,
    WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
    WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
    Arguments: av,
    Int8Array: ut,
    Uint8Array: ut,
    Uint8ClampedArray: ut,
    Int16Array: ut,
    Uint16Array: ut,
    Int32Array: ut,
    Uint32Array: ut,
    Float32Array: ut,
    Float64Array: ut,
    Generator: () => "",
    DataView: () => "",
    ArrayBuffer: () => "",
    Error: lv,
    HTMLCollection: za,
    NodeList: za,
  },
  cv = (e, t, r) =>
    Ra in e && typeof e[Ra] == "function"
      ? e[Ra](t)
      : rr && rr in e && typeof e[rr] == "function"
      ? e[rr](t.depth, t)
      : "inspect" in e && typeof e.inspect == "function"
      ? e.inspect(t.depth, t)
      : "constructor" in e && Ks.has(e.constructor)
      ? Ks.get(e.constructor)(e, t)
      : Ys[r]
      ? Ys[r](e, t)
      : "",
  dv = Object.prototype.toString;
function Ga(e, t = {}) {
  let r = Dg(t, Ga),
    { customInspect: n } = r,
    o = e === null ? "null" : typeof e;
  if ((o === "object" && (o = dv.call(e).slice(8, -1)), o in Js)) return Js[o](e, r);
  if (n && e) {
    let i = cv(e, r, o);
    if (i) return typeof i == "string" ? i : Ga(i, r);
  }
  let a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null
    ? xn(e, r)
    : e && typeof HTMLElement == "function" && e instanceof HTMLElement
    ? Vd(e, r)
    : "constructor" in e
    ? e.constructor !== Object
      ? ov(e, r)
      : xn(e, r)
    : e === Object(e)
    ? xn(e, r)
    : r.stylize(String(e), o);
}
var { AsymmetricMatcher: pv, DOMCollection: mv, DOMElement: fv, Immutable: hv, ReactElement: bv, ReactTestComponent: yv } = Hd,
  Xs = [yv, bv, fv, mv, hv, pv];
function Wr(e, t = 10, { maxLength: r, ...n } = {}) {
  let o = r ?? 1e4,
    a;
  try {
    a = rt(e, { maxDepth: t, escapeString: !1, plugins: Xs, ...n });
  } catch {
    a = rt(e, { callToJSON: !1, maxDepth: t, escapeString: !1, plugins: Xs, ...n });
  }
  return a.length >= o && t > 1 ? Wr(e, Math.floor(t / 2)) : a;
}
var gv = /%[sdjifoOc%]/g;
function vv(...e) {
  if (typeof e[0] != "string") {
    let a = [];
    for (let i = 0; i < e.length; i++) a.push(jr(e[i], { depth: 0, colors: !1 }));
    return a.join(" ");
  }
  let t = e.length,
    r = 1,
    n = e[0],
    o = String(n).replace(gv, (a) => {
      if (a === "%%") return "%";
      if (r >= t) return a;
      switch (a) {
        case "%s": {
          let i = e[r++];
          return typeof i == "bigint"
            ? `${i.toString()}n`
            : typeof i == "number" && i === 0 && 1 / i < 0
            ? "-0"
            : typeof i == "object" && i !== null
            ? jr(i, { depth: 0, colors: !1 })
            : String(i);
        }
        case "%d": {
          let i = e[r++];
          return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
        }
        case "%i": {
          let i = e[r++];
          return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
        }
        case "%f":
          return Number.parseFloat(String(e[r++])).toString();
        case "%o":
          return jr(e[r++], { showHidden: !0, showProxy: !0 });
        case "%O":
          return jr(e[r++]);
        case "%c":
          return r++, "";
        case "%j":
          try {
            return JSON.stringify(e[r++]);
          } catch (i) {
            let l = i.message;
            if (l.includes("circular structure") || l.includes("cyclic structures") || l.includes("cyclic object")) return "[Circular]";
            throw i;
          }
        default:
          return a;
      }
    });
  for (let a = e[r]; r < t; a = e[++r]) a === null || typeof a != "object" ? (o += ` ${a}`) : (o += ` ${jr(a)}`);
  return o;
}
function jr(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), Ga(e, t);
}
function _v(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rv(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function Wa(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function wv(e, t) {
  let r = typeof t == "function" ? t : (n) => t.add(n);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function zd(e) {
  let t = new Set();
  return Rv(e) ? [] : (wv(e, t), Array.from(t));
}
var Gd = { forceWritable: !1 };
function Qs(e, t = Gd) {
  return Ka(e, new WeakMap(), t);
}
function Ka(e, t, r = Gd) {
  let n, o;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (o = Array.from({ length: (n = e.length) }), t.set(e, o); n--; ) o[n] = Ka(e[n], t, r);
    return o;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    (o = Object.create(Object.getPrototypeOf(e))), t.set(e, o);
    let a = zd(e);
    for (let i of a) {
      let l = Object.getOwnPropertyDescriptor(e, i);
      if (!l) continue;
      let u = Ka(e[i], t, r);
      r.forceWritable
        ? Object.defineProperty(o, i, { enumerable: l.enumerable, configurable: !0, writable: !0, value: u })
        : "get" in l
        ? Object.defineProperty(o, i, {
            ...l,
            get() {
              return u;
            },
          })
        : Object.defineProperty(o, i, { ...l, value: u });
    }
    return o;
  }
  return e;
}
function Zs(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (Array.isArray(e)) return "array";
  if (typeof e == "boolean") return "boolean";
  if (typeof e == "function") return "function";
  if (typeof e == "number") return "number";
  if (typeof e == "string") return "string";
  if (typeof e == "bigint") return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp) return "regexp";
      if (e.constructor === Map) return "map";
      if (e.constructor === Set) return "set";
      if (e.constructor === Date) return "date";
    }
    return "object";
  } else if (typeof e == "symbol") return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
var Te = -1,
  Ee = 1,
  ye = 0,
  me = class {
    constructor(t, r) {
      he(this, 0);
      he(this, 1);
      (this[0] = t), (this[1] = r);
    }
  },
  Cv = function (e, t) {
    if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      o = n,
      a = 0;
    for (; r < o; ) e.substring(a, o) === t.substring(a, o) ? ((r = o), (a = r)) : (n = o), (o = Math.floor((n - r) / 2 + r));
    return o;
  },
  Wd = function (e, t) {
    if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      o = n,
      a = 0;
    for (; r < o; )
      e.substring(e.length - o, e.length - a) === t.substring(t.length - o, t.length - a) ? ((r = o), (a = r)) : (n = o),
        (o = Math.floor((n - r) / 2 + r));
    return o;
  },
  eu = function (e, t) {
    let r = e.length,
      n = t.length;
    if (r === 0 || n === 0) return 0;
    r > n ? (e = e.substring(r - n)) : r < n && (t = t.substring(0, r));
    let o = Math.min(r, n);
    if (e === t) return o;
    let a = 0,
      i = 1;
    for (;;) {
      let l = e.substring(o - i),
        u = t.indexOf(l);
      if (u === -1) return a;
      (i += u), (u === 0 || e.substring(o - i) === t.substring(0, i)) && ((a = i), i++);
    }
  },
  qv = function (e) {
    let t = !1,
      r = [],
      n = 0,
      o = null,
      a = 0,
      i = 0,
      l = 0,
      u = 0,
      c = 0;
    for (; a < e.length; )
      e[a][0] === ye
        ? ((r[n++] = a), (i = u), (l = c), (u = 0), (c = 0), (o = e[a][1]))
        : (e[a][0] === Ee ? (u += e[a][1].length) : (c += e[a][1].length),
          o &&
            o.length <= Math.max(i, l) &&
            o.length <= Math.max(u, c) &&
            (e.splice(r[n - 1], 0, new me(Te, o)),
            (e[r[n - 1] + 1][0] = Ee),
            n--,
            n--,
            (a = n > 0 ? r[n - 1] : -1),
            (i = 0),
            (l = 0),
            (u = 0),
            (c = 0),
            (o = null),
            (t = !0))),
        a++;
    for (t && Kd(e), Ov(e), a = 1; a < e.length; ) {
      if (e[a - 1][0] === Te && e[a][0] === Ee) {
        let s = e[a - 1][1],
          d = e[a][1],
          m = eu(s, d),
          p = eu(d, s);
        m >= p
          ? (m >= s.length / 2 || m >= d.length / 2) &&
            (e.splice(a, 0, new me(ye, d.substring(0, m))),
            (e[a - 1][1] = s.substring(0, s.length - m)),
            (e[a + 1][1] = d.substring(m)),
            a++)
          : (p >= s.length / 2 || p >= d.length / 2) &&
            (e.splice(a, 0, new me(ye, s.substring(0, p))),
            (e[a - 1][0] = Ee),
            (e[a - 1][1] = d.substring(0, d.length - p)),
            (e[a + 1][0] = Te),
            (e[a + 1][1] = s.substring(p)),
            a++),
          a++;
      }
      a++;
    }
  },
  tu = /[^a-z0-9]/i,
  ru = /\s/,
  nu = /[\r\n]/,
  Ev = /\n\r?\n$/,
  Pv = /^\r?\n\r?\n/;
function Ov(e) {
  let t = 1;
  for (; t < e.length - 1; ) {
    if (e[t - 1][0] === ye && e[t + 1][0] === ye) {
      let r = e[t - 1][1],
        n = e[t][1],
        o = e[t + 1][1],
        a = Wd(r, n);
      if (a) {
        let s = n.substring(n.length - a);
        (r = r.substring(0, r.length - a)), (n = s + n.substring(0, n.length - a)), (o = s + o);
      }
      let i = r,
        l = n,
        u = o,
        c = Cn(r, n) + Cn(n, o);
      for (; n.charAt(0) === o.charAt(0); ) {
        (r += n.charAt(0)), (n = n.substring(1) + o.charAt(0)), (o = o.substring(1));
        let s = Cn(r, n) + Cn(n, o);
        s >= c && ((c = s), (i = r), (l = n), (u = o));
      }
      e[t - 1][1] !== i &&
        (i ? (e[t - 1][1] = i) : (e.splice(t - 1, 1), t--), (e[t][1] = l), u ? (e[t + 1][1] = u) : (e.splice(t + 1, 1), t--));
    }
    t++;
  }
}
function Kd(e) {
  e.push(new me(ye, ""));
  let t = 0,
    r = 0,
    n = 0,
    o = "",
    a = "",
    i;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Ee:
        n++, (a += e[t][1]), t++;
        break;
      case Te:
        r++, (o += e[t][1]), t++;
        break;
      case ye:
        r + n > 1
          ? (r !== 0 &&
              n !== 0 &&
              ((i = Cv(a, o)),
              i !== 0 &&
                (t - r - n > 0 && e[t - r - n - 1][0] === ye
                  ? (e[t - r - n - 1][1] += a.substring(0, i))
                  : (e.splice(0, 0, new me(ye, a.substring(0, i))), t++),
                (a = a.substring(i)),
                (o = o.substring(i))),
              (i = Wd(a, o)),
              i !== 0 &&
                ((e[t][1] = a.substring(a.length - i) + e[t][1]), (a = a.substring(0, a.length - i)), (o = o.substring(0, o.length - i)))),
            (t -= r + n),
            e.splice(t, r + n),
            o.length && (e.splice(t, 0, new me(Te, o)), t++),
            a.length && (e.splice(t, 0, new me(Ee, a)), t++),
            t++)
          : t !== 0 && e[t - 1][0] === ye
          ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
          : t++,
          (n = 0),
          (r = 0),
          (o = ""),
          (a = "");
        break;
    }
  e[e.length - 1][1] === "" && e.pop();
  let l = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === ye &&
      e[t + 1][0] === ye &&
      (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1]
        ? ((e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
          (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
          e.splice(t - 1, 1),
          (l = !0))
        : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] &&
          ((e[t - 1][1] += e[t + 1][1]), (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]), e.splice(t + 1, 1), (l = !0))),
      t++;
  l && Kd(e);
}
function Cn(e, t) {
  if (!e || !t) return 6;
  let r = e.charAt(e.length - 1),
    n = t.charAt(0),
    o = r.match(tu),
    a = n.match(tu),
    i = o && r.match(ru),
    l = a && n.match(ru),
    u = i && r.match(nu),
    c = l && n.match(nu),
    s = u && e.match(Ev),
    d = c && t.match(Pv);
  return s || d ? 5 : u || c ? 4 : o && !i && l ? 3 : i || l ? 2 : o || a ? 1 : 0;
}
var Yd = "Compared values have no visual difference.",
  Tv = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.",
  qn = {},
  ou;
function Sv() {
  if (ou) return qn;
  (ou = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = m);
  let e = "diff-sequences",
    t = 0,
    r = (p, f, b, h, y) => {
      let g = 0;
      for (; p < f && b < h && y(p, b); ) (p += 1), (b += 1), (g += 1);
      return g;
    },
    n = (p, f, b, h, y) => {
      let g = 0;
      for (; p <= f && b <= h && y(f, h); ) (f -= 1), (h -= 1), (g += 1);
      return g;
    },
    o = (p, f, b, h, y, g, E) => {
      let C = 0,
        q = -p,
        _ = g[C],
        v = _;
      g[C] += r(_ + 1, f, h + _ - q + 1, b, y);
      let w = p < E ? p : E;
      for (C += 1, q += 2; C <= w; C += 1, q += 2) {
        if (C !== p && v < g[C]) _ = g[C];
        else if (((_ = v + 1), f <= _)) return C - 1;
        (v = g[C]), (g[C] = _ + r(_ + 1, f, h + _ - q + 1, b, y));
      }
      return E;
    },
    a = (p, f, b, h, y, g, E) => {
      let C = 0,
        q = p,
        _ = g[C],
        v = _;
      g[C] -= n(f, _ - 1, b, h + _ - q - 1, y);
      let w = p < E ? p : E;
      for (C += 1, q -= 2; C <= w; C += 1, q -= 2) {
        if (C !== p && g[C] < v) _ = g[C];
        else if (((_ = v - 1), _ < f)) return C - 1;
        (v = g[C]), (g[C] = _ - n(f, _ - 1, b, h + _ - q - 1, y));
      }
      return E;
    },
    i = (p, f, b, h, y, g, E, C, q, _, v) => {
      let w = h - f,
        P = b - f,
        j = y - h - P,
        $ = -j - (p - 1),
        B = -j + (p - 1),
        I = t,
        S = p < C ? p : C;
      for (let k = 0, U = -p; k <= S; k += 1, U += 2) {
        let W = k === 0 || (k !== p && I < E[k]),
          G = W ? E[k] : I,
          le = W ? G : G + 1,
          ve = w + le - U,
          pe = r(le + 1, b, ve + 1, y, g),
          F = le + pe;
        if (((I = E[k]), (E[k] = F), $ <= U && U <= B)) {
          let L = (p - 1 - (U + j)) / 2;
          if (L <= _ && q[L] - 1 <= F) {
            let D = w + G - (W ? U + 1 : U - 1),
              z = n(f, G, h, D, g),
              H = G - z,
              oe = D - z,
              se = H + 1,
              st = oe + 1;
            (v.nChangePreceding = p - 1),
              p - 1 === se + st - f - h ? ((v.aEndPreceding = f), (v.bEndPreceding = h)) : ((v.aEndPreceding = se), (v.bEndPreceding = st)),
              (v.nCommonPreceding = z),
              z !== 0 && ((v.aCommonPreceding = se), (v.bCommonPreceding = st)),
              (v.nCommonFollowing = pe),
              pe !== 0 && ((v.aCommonFollowing = le + 1), (v.bCommonFollowing = ve + 1));
            let M = F + 1,
              V = ve + pe + 1;
            return (
              (v.nChangeFollowing = p - 1),
              p - 1 === b + y - M - V
                ? ((v.aStartFollowing = b), (v.bStartFollowing = y))
                : ((v.aStartFollowing = M), (v.bStartFollowing = V)),
              !0
            );
          }
        }
      }
      return !1;
    },
    l = (p, f, b, h, y, g, E, C, q, _, v) => {
      let w = y - b,
        P = b - f,
        j = y - h - P,
        $ = j - p,
        B = j + p,
        I = t,
        S = p < _ ? p : _;
      for (let k = 0, U = p; k <= S; k += 1, U -= 2) {
        let W = k === 0 || (k !== p && q[k] < I),
          G = W ? q[k] : I,
          le = W ? G : G - 1,
          ve = w + le - U,
          pe = n(f, le - 1, h, ve - 1, g),
          F = le - pe;
        if (((I = q[k]), (q[k] = F), $ <= U && U <= B)) {
          let L = (p + (U - j)) / 2;
          if (L <= C && F - 1 <= E[L]) {
            let D = ve - pe;
            if (
              ((v.nChangePreceding = p),
              p === F + D - f - h ? ((v.aEndPreceding = f), (v.bEndPreceding = h)) : ((v.aEndPreceding = F), (v.bEndPreceding = D)),
              (v.nCommonPreceding = pe),
              pe !== 0 && ((v.aCommonPreceding = F), (v.bCommonPreceding = D)),
              (v.nChangeFollowing = p - 1),
              p === 1)
            )
              (v.nCommonFollowing = 0), (v.aStartFollowing = b), (v.bStartFollowing = y);
            else {
              let z = w + G - (W ? U - 1 : U + 1),
                H = r(G, b, z, y, g);
              (v.nCommonFollowing = H), H !== 0 && ((v.aCommonFollowing = G), (v.bCommonFollowing = z));
              let oe = G + H,
                se = z + H;
              p - 1 === b + y - oe - se
                ? ((v.aStartFollowing = b), (v.bStartFollowing = y))
                : ((v.aStartFollowing = oe), (v.bStartFollowing = se));
            }
            return !0;
          }
        }
      }
      return !1;
    },
    u = (p, f, b, h, y, g, E, C, q) => {
      let _ = h - f,
        v = y - b,
        w = b - f,
        P = y - h,
        j = P - w,
        $ = w,
        B = w;
      if (((E[0] = f - 1), (C[0] = b), j % 2 === 0)) {
        let I = (p || j) / 2,
          S = (w + P) / 2;
        for (let k = 1; k <= S; k += 1)
          if ((($ = o(k, b, y, _, g, E, $)), k < I)) B = a(k, f, h, v, g, C, B);
          else if (l(k, f, b, h, y, g, E, $, C, B, q)) return;
      } else {
        let I = ((p || j) + 1) / 2,
          S = (w + P + 1) / 2,
          k = 1;
        for ($ = o(k, b, y, _, g, E, $), k += 1; k <= S; k += 1)
          if (((B = a(k - 1, f, h, v, g, C, B)), k < I)) $ = o(k, b, y, _, g, E, $);
          else if (i(k, f, b, h, y, g, E, $, C, B, q)) return;
      }
      throw new Error(`${e}: no overlap aStart=${f} aEnd=${b} bStart=${h} bEnd=${y}`);
    },
    c = (p, f, b, h, y, g, E, C, q, _) => {
      if (y - h < b - f) {
        if (((g = !g), g && E.length === 1)) {
          let { foundSubsequence: L, isCommon: D } = E[0];
          E[1] = {
            foundSubsequence: (z, H, oe) => {
              L(z, oe, H);
            },
            isCommon: (z, H) => D(H, z),
          };
        }
        let pe = f,
          F = b;
        (f = h), (b = y), (h = pe), (y = F);
      }
      let { foundSubsequence: v, isCommon: w } = E[g ? 1 : 0];
      u(p, f, b, h, y, w, C, q, _);
      let {
        nChangePreceding: P,
        aEndPreceding: j,
        bEndPreceding: $,
        nCommonPreceding: B,
        aCommonPreceding: I,
        bCommonPreceding: S,
        nCommonFollowing: k,
        aCommonFollowing: U,
        bCommonFollowing: W,
        nChangeFollowing: G,
        aStartFollowing: le,
        bStartFollowing: ve,
      } = _;
      f < j && h < $ && c(P, f, j, h, $, g, E, C, q, _),
        B !== 0 && v(B, I, S),
        k !== 0 && v(k, U, W),
        le < b && ve < y && c(G, le, b, ve, y, g, E, C, q, _);
    },
    s = (p, f) => {
      if (typeof f != "number") throw new TypeError(`${e}: ${p} typeof ${typeof f} is not a number`);
      if (!Number.isSafeInteger(f)) throw new RangeError(`${e}: ${p} value ${f} is not a safe integer`);
      if (f < 0) throw new RangeError(`${e}: ${p} value ${f} is a negative integer`);
    },
    d = (p, f) => {
      let b = typeof f;
      if (b !== "function") throw new TypeError(`${e}: ${p} typeof ${b} is not a function`);
    };
  function m(p, f, b, h) {
    s("aLength", p), s("bLength", f), d("isCommon", b), d("foundSubsequence", h);
    let y = r(0, p, 0, f, b);
    if ((y !== 0 && h(y, 0, 0), p !== y || f !== y)) {
      let g = y,
        E = y,
        C = n(g, p - 1, E, f - 1, b),
        q = p - C,
        _ = f - C,
        v = y + C;
      p !== v &&
        f !== v &&
        c(0, g, q, E, _, !1, [{ foundSubsequence: h, isCommon: b }], [t], [t], {
          aCommonFollowing: t,
          aCommonPreceding: t,
          aEndPreceding: t,
          aStartFollowing: t,
          bCommonFollowing: t,
          bCommonPreceding: t,
          bEndPreceding: t,
          bStartFollowing: t,
          nChangeFollowing: t,
          nChangePreceding: t,
          nCommonFollowing: t,
          nCommonPreceding: t,
        }),
        C !== 0 && h(C, q, _);
    }
  }
  return qn;
}
var Av = Sv(),
  Jd = _v(Av);
function Mv(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function rl(e, t, r, n, o, a) {
  return e.length !== 0 ? r(`${n} ${Mv(e, o)}`) : n !== " " ? r(n) : t && a.length !== 0 ? r(`${n} ${a}`) : "";
}
function Xd(e, t, { aColor: r, aIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return rl(e, t, r, n, o, a);
}
function Qd(e, t, { bColor: r, bIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return rl(e, t, r, n, o, a);
}
function Zd(e, t, { commonColor: r, commonIndicator: n, commonLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return rl(e, t, r, n, o, a);
}
function au(e, t, r, n, { patchColor: o }) {
  return o(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`);
}
function xv(e, t) {
  let r = e.length,
    n = t.contextLines,
    o = n + n,
    a = r,
    i = !1,
    l = 0,
    u = 0;
  for (; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ye; ) u += 1;
    if (C !== u)
      if (C === 0) u > n && ((a -= u - n), (i = !0));
      else if (u === r) {
        let q = u - C;
        q > n && ((a -= q - n), (i = !0));
      } else {
        let q = u - C;
        q > o && ((a -= q - o), (l += 1));
      }
    for (; u !== r && e[u][0] !== ye; ) u += 1;
  }
  let c = l !== 0 || i;
  l !== 0 ? (a += l + 1) : i && (a += 1);
  let s = a - 1,
    d = [],
    m = 0;
  c && d.push("");
  let p = 0,
    f = 0,
    b = 0,
    h = 0,
    y = (C) => {
      let q = d.length;
      d.push(Zd(C, q === 0 || q === s, t)), (b += 1), (h += 1);
    },
    g = (C) => {
      let q = d.length;
      d.push(Xd(C, q === 0 || q === s, t)), (b += 1);
    },
    E = (C) => {
      let q = d.length;
      d.push(Qd(C, q === 0 || q === s, t)), (h += 1);
    };
  for (u = 0; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ye; ) u += 1;
    if (C !== u)
      if (C === 0) {
        u > n && ((C = u - n), (p = C), (f = C), (b = p), (h = f));
        for (let q = C; q !== u; q += 1) y(e[q][1]);
      } else if (u === r) {
        let q = u - C > n ? C + n : u;
        for (let _ = C; _ !== q; _ += 1) y(e[_][1]);
      } else {
        let q = u - C;
        if (q > o) {
          let _ = C + n;
          for (let w = C; w !== _; w += 1) y(e[w][1]);
          (d[m] = au(p, b, f, h, t)), (m = d.length), d.push("");
          let v = q - o;
          (p = b + v), (f = h + v), (b = p), (h = f);
          for (let w = u - n; w !== u; w += 1) y(e[w][1]);
        } else for (let _ = C; _ !== u; _ += 1) y(e[_][1]);
      }
    for (; u !== r && e[u][0] === Te; ) g(e[u][1]), (u += 1);
    for (; u !== r && e[u][0] === Ee; ) E(e[u][1]), (u += 1);
  }
  return (
    c && (d[m] = au(p, b, f, h, t)),
    d.join(`
`)
  );
}
function jv(e, t) {
  return e.map((r, n, o) => {
    let a = r[1],
      i = n === 0 || n === o.length - 1;
    switch (r[0]) {
      case Te:
        return Xd(a, i, t);
      case Ee:
        return Qd(a, i, t);
      default:
        return Zd(a, i, t);
    }
  }).join(`
`);
}
var wa = (e) => e,
  ep = 5,
  Nv = 0;
function $v() {
  return {
    aAnnotation: "Expected",
    aColor: mt.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: mt.red,
    bIndicator: "+",
    changeColor: mt.inverse,
    changeLineTrailingSpaceColor: wa,
    commonColor: mt.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: wa,
    compareKeys: void 0,
    contextLines: ep,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: mt.yellow,
    truncateThreshold: Nv,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: wa,
  };
}
function Iv(e) {
  return e && typeof e == "function" ? e : void 0;
}
function Bv(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : ep;
}
function Yt(e = {}) {
  return { ...$v(), ...e, compareKeys: Iv(e.compareKeys), contextLines: Bv(e.contextLines) };
}
function nr(e) {
  return e.length === 1 && e[0].length === 0;
}
function kv(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((n) => {
      switch (n[0]) {
        case Te:
          t += 1;
          break;
        case Ee:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function Lv(
  { aAnnotation: e, aColor: t, aIndicator: r, bAnnotation: n, bColor: o, bIndicator: a, includeChangeCounts: i, omitAnnotationLines: l },
  u
) {
  if (l) return "";
  let c = "",
    s = "";
  if (i) {
    let p = String(u.a),
      f = String(u.b),
      b = n.length - e.length,
      h = " ".repeat(Math.max(0, b)),
      y = " ".repeat(Math.max(0, -b)),
      g = f.length - p.length,
      E = " ".repeat(Math.max(0, g)),
      C = " ".repeat(Math.max(0, -g));
    (c = `${h}  ${r} ${E}${p}`), (s = `${y}  ${a} ${C}${f}`);
  }
  let d = `${r} ${e}${c}`,
    m = `${a} ${n}${s}`;
  return `${t(d)}
${o(m)}

`;
}
function nl(e, t, r) {
  return (
    Lv(r, kv(e)) +
    (r.expand ? jv(e, r) : xv(e, r)) +
    (t
      ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`)
      : "")
  );
}
function co(e, t, r) {
  let n = Yt(r),
    [o, a] = tp(nr(e) ? [] : e, nr(t) ? [] : t, n);
  return nl(o, a, n);
}
function Dv(e, t, r, n, o) {
  if ((nr(e) && nr(r) && ((e = []), (r = [])), nr(t) && nr(n) && ((t = []), (n = [])), e.length !== r.length || t.length !== n.length))
    return co(e, t, o);
  let [a, i] = tp(r, n, o),
    l = 0,
    u = 0;
  return (
    a.forEach((c) => {
      switch (c[0]) {
        case Te:
          (c[1] = e[l]), (l += 1);
          break;
        case Ee:
          (c[1] = t[u]), (u += 1);
          break;
        default:
          (c[1] = t[u]), (l += 1), (u += 1);
      }
    }),
    nl(a, i, Yt(o))
  );
}
function tp(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0),
    a = n ? Math.min(e.length, o) : e.length,
    i = n ? Math.min(t.length, o) : t.length,
    l = a !== e.length || i !== t.length,
    u = (m, p) => e[m] === t[p],
    c = [],
    s = 0,
    d = 0;
  for (
    Jd(a, i, u, (m, p, f) => {
      for (; s !== p; s += 1) c.push(new me(Te, e[s]));
      for (; d !== f; d += 1) c.push(new me(Ee, t[d]));
      for (; m !== 0; m -= 1, s += 1, d += 1) c.push(new me(ye, t[d]));
    });
    s !== a;
    s += 1
  )
    c.push(new me(Te, e[s]));
  for (; d !== i; d += 1) c.push(new me(Ee, t[d]));
  return [c, l];
}
function iu(e) {
  return e.includes(`\r
`)
    ? `\r
`
    : `
`;
}
function Fv(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0),
    a = e.length,
    i = t.length;
  if (n) {
    let m = e.includes(`
`),
      p = t.includes(`
`),
      f = iu(e),
      b = iu(t),
      h = m
        ? `${e.split(f, o).join(f)}
`
        : e,
      y = p
        ? `${t.split(b, o).join(b)}
`
        : t;
    (a = h.length), (i = y.length);
  }
  let l = a !== e.length || i !== t.length,
    u = (m, p) => e[m] === t[p],
    c = 0,
    s = 0,
    d = [];
  return (
    Jd(a, i, u, (m, p, f) => {
      c !== p && d.push(new me(Te, e.slice(c, p))),
        s !== f && d.push(new me(Ee, t.slice(s, f))),
        (c = p + m),
        (s = f + m),
        d.push(new me(ye, t.slice(f, s)));
    }),
    c !== a && d.push(new me(Te, e.slice(c))),
    s !== i && d.push(new me(Ee, t.slice(s))),
    [d, l]
  );
}
function Hv(e, t, r) {
  return t.reduce((n, o) => n + (o[0] === ye ? o[1] : o[0] === e && o[1].length !== 0 ? r(o[1]) : ""), "");
}
var lu = class {
    constructor(t, r) {
      he(this, "op");
      he(this, "line");
      he(this, "lines");
      he(this, "changeColor");
      (this.op = t), (this.line = []), (this.lines = []), (this.changeColor = r);
    }
    pushSubstring(t) {
      this.pushDiff(new me(this.op, t));
    }
    pushLine() {
      this.lines.push(
        this.line.length !== 1
          ? new me(this.op, Hv(this.op, this.line, this.changeColor))
          : this.line[0][0] === this.op
          ? this.line[0]
          : new me(this.op, this.line[0][1])
      ),
        (this.line.length = 0);
    }
    isLineEmpty() {
      return this.line.length === 0;
    }
    pushDiff(t) {
      this.line.push(t);
    }
    align(t) {
      let r = t[1];
      if (
        r.includes(`
`)
      ) {
        let n = r.split(`
`),
          o = n.length - 1;
        n.forEach((a, i) => {
          i < o ? (this.pushSubstring(a), this.pushLine()) : a.length !== 0 && this.pushSubstring(a);
        });
      } else this.pushDiff(t);
    }
    moveLinesTo(t) {
      this.isLineEmpty() || this.pushLine(), t.push(...this.lines), (this.lines.length = 0);
    }
  },
  Uv = class {
    constructor(t, r) {
      he(this, "deleteBuffer");
      he(this, "insertBuffer");
      he(this, "lines");
      (this.deleteBuffer = t), (this.insertBuffer = r), (this.lines = []);
    }
    pushDiffCommonLine(t) {
      this.lines.push(t);
    }
    pushDiffChangeLines(t) {
      let r = t[1].length === 0;
      (!r || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t),
        (!r || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(t);
    }
    flushChangeLines() {
      this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
    }
    align(t) {
      let r = t[0],
        n = t[1];
      if (
        n.includes(`
`)
      ) {
        let o = n.split(`
`),
          a = o.length - 1;
        o.forEach((i, l) => {
          if (l === 0) {
            let u = new me(r, i);
            this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()
              ? (this.flushChangeLines(), this.pushDiffCommonLine(u))
              : (this.pushDiffChangeLines(u), this.flushChangeLines());
          } else l < a ? this.pushDiffCommonLine(new me(r, i)) : i.length !== 0 && this.pushDiffChangeLines(new me(r, i));
        });
      } else this.pushDiffChangeLines(t);
    }
    getLines() {
      return this.flushChangeLines(), this.lines;
    }
  };
function Vv(e, t) {
  let r = new lu(Te, t),
    n = new lu(Ee, t),
    o = new Uv(r, n);
  return (
    e.forEach((a) => {
      switch (a[0]) {
        case Te:
          r.align(a);
          break;
        case Ee:
          n.align(a);
          break;
        default:
          o.align(a);
      }
    }),
    o.getLines()
  );
}
function zv(e, t) {
  if (t) {
    let r = e.length - 1;
    return e.some(
      (n, o) =>
        n[0] === ye &&
        (o !== r ||
          n[1] !==
            `
`)
    );
  }
  return e.some((r) => r[0] === ye);
}
function Gv(e, t, r) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    let n =
        e.includes(`
`) ||
        t.includes(`
`),
      [o, a] = rp(
        n
          ? `${e}
`
          : e,
        n
          ? `${t}
`
          : t,
        !0,
        r
      );
    if (zv(o, n)) {
      let i = Yt(r),
        l = Vv(o, i.changeColor);
      return nl(l, a, i);
    }
  }
  return co(
    e.split(`
`),
    t.split(`
`),
    r
  );
}
function rp(e, t, r, n) {
  let [o, a] = Fv(e, t, n);
  return r && qv(o), [o, a];
}
function Ya(e, t) {
  let { commonColor: r } = Yt(t);
  return r(e);
}
var { AsymmetricMatcher: Wv, DOMCollection: Kv, DOMElement: Yv, Immutable: Jv, ReactElement: Xv, ReactTestComponent: Qv } = Hd,
  np = [Qv, Xv, Yv, Kv, Jv, Wv],
  Ja = { plugins: np },
  op = { callToJSON: !1, maxDepth: 10, plugins: np };
function Zv(e, t, r) {
  if (Object.is(e, t)) return "";
  let n = Zs(e),
    o = n,
    a = !1;
  if (n === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function") return;
    (o = e.getExpectedType()), (a = o === "string");
  }
  if (o !== Zs(t)) {
    let { aAnnotation: i, aColor: l, aIndicator: u, bAnnotation: c, bColor: s, bIndicator: d } = Yt(r),
      m = Xa(op, r),
      p = rt(e, m),
      f = rt(t, m),
      b = `${l(`${u} ${i}:`)} 
${p}`,
      h = `${s(`${d} ${c}:`)} 
${f}`;
    return `${b}

${h}`;
  }
  if (!a)
    switch (n) {
      case "string":
        return co(
          e.split(`
`),
          t.split(`
`),
          r
        );
      case "boolean":
      case "number":
        return e0(e, t, r);
      case "map":
        return Ca(su(e), su(t), r);
      case "set":
        return Ca(uu(e), uu(t), r);
      default:
        return Ca(e, t, r);
    }
}
function e0(e, t, r) {
  let n = rt(e, Ja),
    o = rt(t, Ja);
  return n === o
    ? ""
    : co(
        n.split(`
`),
        o.split(`
`),
        r
      );
}
function su(e) {
  return new Map(Array.from(e.entries()).sort());
}
function uu(e) {
  return new Set(Array.from(e.values()).sort());
}
function Ca(e, t, r) {
  let n,
    o = !1;
  try {
    let i = Xa(Ja, r);
    n = cu(e, t, i, r);
  } catch {
    o = !0;
  }
  let a = Ya(Yd, r);
  if (n === void 0 || n === a) {
    let i = Xa(op, r);
    (n = cu(e, t, i, r)),
      n !== a &&
        !o &&
        (n = `${Ya(Tv, r)}

${n}`);
  }
  return n;
}
function Xa(e, t) {
  let { compareKeys: r } = Yt(t);
  return { ...e, compareKeys: r };
}
function cu(e, t, r, n) {
  let o = { ...r, indent: 0 },
    a = rt(e, o),
    i = rt(t, o);
  if (a === i) return Ya(Yd, n);
  {
    let l = rt(e, r),
      u = rt(t, r);
    return Dv(
      l.split(`
`),
      u.split(`
`),
      a.split(`
`),
      i.split(`
`),
      n
    );
  }
}
var du = 2e4;
function pu(e) {
  return Wa(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function mu(e, t) {
  let r = Wa(e),
    n = Wa(t);
  return r === n && (r === "Object" || r === "Array");
}
function t0(e, t, r) {
  let { aAnnotation: n, bAnnotation: o } = Yt(r);
  if (typeof e == "string" && typeof t == "string" && e.length > 0 && t.length > 0 && e.length <= du && t.length <= du && e !== t) {
    if (
      e.includes(`
`) ||
      t.includes(`
`)
    )
      return Gv(t, e, r);
    let [c] = rp(t, e, !0),
      s = c.some((f) => f[0] === ye),
      d = r0(n, o),
      m = d(n) + a0(fu(c, Te, s)),
      p = d(o) + o0(fu(c, Ee, s));
    return `${m}
${p}`;
  }
  let a = Qs(e, { forceWritable: !0 }),
    i = Qs(t, { forceWritable: !0 }),
    { replacedExpected: l, replacedActual: u } = ap(a, i);
  return Zv(l, u, r);
}
function ap(e, t, r = new WeakSet(), n = new WeakSet()) {
  return mu(e, t)
    ? r.has(e) || n.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        n.add(t),
        zd(t).forEach((o) => {
          let a = t[o],
            i = e[o];
          if (pu(a)) a.asymmetricMatch(i) && (e[o] = a);
          else if (pu(i)) i.asymmetricMatch(a) && (t[o] = i);
          else if (mu(i, a)) {
            let l = ap(i, a, r, n);
            (e[o] = l.replacedActual), (t[o] = l.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
function r0(...e) {
  let t = e.reduce((r, n) => (n.length > r ? n.length : r), 0);
  return (r) => `${r}: ${" ".repeat(t - r.length)}`;
}
var n0 = "·";
function ip(e) {
  return e.replace(/\s+$/gm, (t) => n0.repeat(t.length));
}
function o0(e) {
  return mt.red(ip(Wr(e)));
}
function a0(e) {
  return mt.green(ip(Wr(e)));
}
function fu(e, t, r) {
  return e.reduce((n, o) => n + (o[0] === ye ? o[1] : o[0] === t ? (r ? mt.inverse(o[1]) : o[1]) : ""), "");
}
var i0 = "@@__IMMUTABLE_RECORD__@@",
  l0 = "@@__IMMUTABLE_ITERABLE__@@";
function s0(e) {
  return e && (e[l0] || e[i0]);
}
var u0 = Object.getPrototypeOf({});
function hu(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function or(e, t = new WeakMap()) {
  if (!e || typeof e == "string") return e;
  if (typeof e == "function") return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol") return e.toString();
  if (typeof e != "object") return e;
  if (s0(e)) return or(e.toJSON(), t);
  if (e instanceof Promise || (e.constructor && e.constructor.prototype === "AsyncFunction")) return "Promise";
  if (typeof Element < "u" && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == "function") return `${e.toString()} ${vv(e.sample)}`;
  if (typeof e.toJSON == "function") return or(e.toJSON(), t);
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((n, o) => {
        try {
          r[o] = or(n, t);
        } catch (a) {
          r[o] = hu(a);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let n = e;
    for (; n && n !== u0; )
      Object.getOwnPropertyNames(n).forEach((o) => {
        if (!(o in r))
          try {
            r[o] = or(e[o], t);
          } catch (a) {
            delete r[o], (r[o] = hu(a));
          }
      }),
        (n = Object.getPrototypeOf(n));
    return r;
  }
}
function c0(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function lp(e, t, r = new WeakSet()) {
  if (!e || typeof e != "object") return { message: String(e) };
  let n = e;
  n.stack && (n.stackStr = String(n.stack)),
    n.name && (n.nameStr = String(n.name)),
    (n.showDiff || (n.showDiff === void 0 && n.expected !== void 0 && n.actual !== void 0)) &&
      (n.diff = t0(n.actual, n.expected, { ...t, ...n.diffOptions })),
    typeof n.expected != "string" && (n.expected = Wr(n.expected, 10)),
    typeof n.actual != "string" && (n.actual = Wr(n.actual, 10));
  try {
    typeof n.message == "string" && (n.message = c0(n.message));
  } catch {}
  try {
    !r.has(n) && typeof n.cause == "object" && (r.add(n), (n.cause = lp(n.cause, t, r)));
  } catch {}
  try {
    return or(n);
  } catch (o) {
    return or(
      new Error(`Failed to fully serialize error: ${o == null ? void 0 : o.message}
Inner error message: ${n == null ? void 0 : n.message}`)
    );
  }
}
var d0 = ((e) => ((e.DONE = "done"), (e.ERROR = "error"), (e.ACTIVE = "active"), (e.WAITING = "waiting"), e))(d0 || {}),
  ct = {
    CALL: "storybook/instrumenter/call",
    SYNC: "storybook/instrumenter/sync",
    START: "storybook/instrumenter/start",
    BACK: "storybook/instrumenter/back",
    GOTO: "storybook/instrumenter/goto",
    NEXT: "storybook/instrumenter/next",
    END: "storybook/instrumenter/end",
  },
  bu = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
  p0 = new Error("This function ran after the play function completed. Did you forget to `await` it?"),
  yu = (e) => Object.prototype.toString.call(e) === "[object Object]",
  m0 = (e) => Object.prototype.toString.call(e) === "[object Module]",
  f0 = (e) => {
    if (!yu(e) && !m0(e)) return !1;
    if (e.constructor === void 0) return !0;
    let t = e.constructor.prototype;
    return !!yu(t);
  },
  h0 = (e) => {
    try {
      return new e.constructor();
    } catch {
      return {};
    }
  },
  qa = () => ({
    renderPhase: void 0,
    isDebugging: !1,
    isPlaying: !1,
    isLocked: !1,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: new Map(),
    chainedCallIds: new Set(),
    ancestors: [],
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
  }),
  gu = (e, t = !1) => {
    let r = (t ? e.shadowCalls : e.calls).filter((o) => o.retain);
    if (!r.length) return;
    let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, o]) => o.retain));
    return { cursor: r.length, calls: r, callRefsByResult: n };
  },
  b0 = class {
    constructor() {
      var i;
      (this.initialized = !1),
        (this.channel = Ey.getChannel()),
        (this.state = ((i = Ne.window) == null ? void 0 : i.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__) || {});
      let e = ({ storyId: l, isPlaying: u = !0, isDebugging: c = !1 }) => {
        let s = this.getState(l);
        this.setState(l, {
          ...qa(),
          ...gu(s, c),
          shadowCalls: c ? s.shadowCalls : [],
          chainedCallIds: c ? s.chainedCallIds : new Set(),
          playUntil: c ? s.playUntil : void 0,
          isPlaying: u,
          isDebugging: c,
        }),
          this.sync(l);
      };
      this.channel.on(Ss, e),
        this.channel.on(Cy, ({ storyId: l, newPhase: u }) => {
          let { isDebugging: c } = this.getState(l);
          this.setState(l, { renderPhase: u }),
            u === "preparing" && c && e({ storyId: l }),
            u === "playing" && e({ storyId: l, isDebugging: c }),
            u === "played" && this.setState(l, { isLocked: !1, isPlaying: !1, isDebugging: !1 }),
            u === "errored" && this.setState(l, { isLocked: !1, isPlaying: !1 });
        }),
        this.channel.on(qy, () => {
          this.initialized ? this.cleanup() : (this.initialized = !0);
        });
      let t = ({ storyId: l, playUntil: u }) => {
          this.getState(l).isDebugging ||
            this.setState(l, ({ calls: s }) => ({ calls: [], shadowCalls: s.map((d) => ({ ...d, status: "waiting" })), isDebugging: !0 }));
          let c = this.getLog(l);
          this.setState(l, ({ shadowCalls: s }) => {
            var m;
            if (u || !c.length) return { playUntil: u };
            let d = s.findIndex((p) => p.id === c[0].callId);
            return {
              playUntil:
                (m = s
                  .slice(0, d)
                  .filter((p) => {
                    var f;
                    return p.interceptable && !((f = p.ancestors) != null && f.length);
                  })
                  .slice(-1)[0]) == null
                  ? void 0
                  : m.id,
            };
          }),
            this.channel.emit(Ss, { storyId: l, isDebugging: !0 });
        },
        r = ({ storyId: l }) => {
          var s;
          let u = this.getLog(l).filter((d) => {
              var m;
              return !((m = d.ancestors) != null && m.length);
            }),
            c = u.reduceRight((d, m, p) => (d >= 0 || m.status === "waiting" ? d : p), -1);
          t({ storyId: l, playUntil: (s = u[c - 1]) == null ? void 0 : s.callId });
        },
        n = ({ storyId: l, callId: u }) => {
          var f;
          let { calls: c, shadowCalls: s, resolvers: d } = this.getState(l),
            m = c.find(({ id: b }) => b === u),
            p = s.find(({ id: b }) => b === u);
          if (!m && p && Object.values(d).length > 0) {
            let b = (f = this.getLog(l).find((h) => h.status === "waiting")) == null ? void 0 : f.callId;
            p.id !== b && this.setState(l, { playUntil: p.id }), Object.values(d).forEach((h) => h());
          } else t({ storyId: l, playUntil: u });
        },
        o = ({ storyId: l }) => {
          var c;
          let { resolvers: u } = this.getState(l);
          if (Object.values(u).length > 0) Object.values(u).forEach((s) => s());
          else {
            let s = (c = this.getLog(l).find((d) => d.status === "waiting")) == null ? void 0 : c.callId;
            s ? t({ storyId: l, playUntil: s }) : a({ storyId: l });
          }
        },
        a = ({ storyId: l }) => {
          this.setState(l, { playUntil: void 0, isDebugging: !1 }), Object.values(this.getState(l).resolvers).forEach((u) => u());
        };
      this.channel.on(ct.START, t),
        this.channel.on(ct.BACK, r),
        this.channel.on(ct.GOTO, n),
        this.channel.on(ct.NEXT, o),
        this.channel.on(ct.END, a);
    }
    getState(e) {
      return this.state[e] || qa();
    }
    setState(e, t) {
      var o;
      let r = this.getState(e),
        n = typeof t == "function" ? t(r) : t;
      (this.state = { ...this.state, [e]: { ...r, ...n } }),
        (o = Ne.window) != null && o.parent && (Ne.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
    }
    cleanup() {
      var t;
      this.state = Object.entries(this.state).reduce((r, [n, o]) => {
        let a = gu(o);
        return a && (r[n] = Object.assign(qa(), a)), r;
      }, {});
      let e = { controlStates: bu, logItems: [] };
      this.channel.emit(ct.SYNC, e),
        (t = Ne.window) != null && t.parent && (Ne.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
    }
    getLog(e) {
      let { calls: t, shadowCalls: r } = this.getState(e),
        n = [...r];
      t.forEach((a, i) => {
        n[i] = a;
      });
      let o = new Set();
      return n.reduceRight(
        (a, i) => (
          i.args.forEach((l) => {
            l != null && l.__callId__ && o.add(l.__callId__);
          }),
          i.path.forEach((l) => {
            l.__callId__ && o.add(l.__callId__);
          }),
          (i.interceptable || i.exception) &&
            !o.has(i.id) &&
            (a.unshift({ callId: i.id, status: i.status, ancestors: i.ancestors }), o.add(i.id)),
          a
        ),
        []
      );
    }
    instrument(e, t, r = 0) {
      if (!f0(e)) return e;
      let { mutate: n = !1, path: o = [] } = t,
        a = t.getKeys ? t.getKeys(e, r) : Object.keys(e);
      return (
        (r += 1),
        a.reduce(
          (i, l) => {
            let u = y0(e, l);
            if (typeof (u == null ? void 0 : u.get) == "function") {
              let s = () => {
                var d, m;
                return (m = (d = u == null ? void 0 : u.get) == null ? void 0 : d.bind(e)) == null ? void 0 : m();
              };
              return Object.defineProperty(i, l, { get: () => this.instrument(s(), { ...t, path: o.concat(l) }, r) }), i;
            }
            let c = e[l];
            return typeof c != "function"
              ? ((i[l] = this.instrument(c, { ...t, path: o.concat(l) }, r)), i)
              : "__originalFn__" in c && typeof c.__originalFn__ == "function"
              ? ((i[l] = c), i)
              : ((i[l] = (...s) => this.track(l, c, e, s, t)),
                (i[l].__originalFn__ = c),
                Object.defineProperty(i[l], "name", { value: l, writable: !1 }),
                Object.keys(c).length > 0 && Object.assign(i[l], this.instrument({ ...c }, { ...t, path: o.concat(l) }, r)),
                i);
          },
          n ? e : h0(e)
        )
      );
    }
    track(e, t, r, n, o) {
      var b, h, y, g;
      let a =
          ((b = n == null ? void 0 : n[0]) == null ? void 0 : b.__storyId__) ||
          ((g = (y = (h = Ne.__STORYBOOK_PREVIEW__) == null ? void 0 : h.selectionStore) == null ? void 0 : y.selection) == null
            ? void 0
            : g.storyId),
        { cursor: i, ancestors: l } = this.getState(a);
      this.setState(a, { cursor: i + 1 });
      let u = `${l.slice(-1)[0] || a} [${i}] ${e}`,
        { path: c = [], intercept: s = !1, retain: d = !1 } = o,
        m = typeof s == "function" ? s(e, c) : s,
        p = { id: u, cursor: i, storyId: a, ancestors: l, path: c, method: e, args: n, interceptable: m, retain: d },
        f = (m && !l.length ? this.intercept : this.invoke).call(this, t, r, p, o);
      return this.instrument(f, { ...o, mutate: !0, path: [{ __callId__: p.id }] });
    }
    intercept(e, t, r, n) {
      let { chainedCallIds: o, isDebugging: a, playUntil: i } = this.getState(r.storyId),
        l = o.has(r.id);
      return !a || l || i
        ? (i === r.id && this.setState(r.storyId, { playUntil: void 0 }), this.invoke(e, t, r, n))
        : new Promise((u) => {
            this.setState(r.storyId, ({ resolvers: c }) => ({ isLocked: !1, resolvers: { ...c, [r.id]: u } }));
          }).then(
            () => (
              this.setState(r.storyId, (u) => {
                let { [r.id]: c, ...s } = u.resolvers;
                return { isLocked: !0, resolvers: s };
              }),
              this.invoke(e, t, r, n)
            )
          );
    }
    invoke(e, t, r, n) {
      let { callRefsByResult: o, renderPhase: a } = this.getState(r.storyId),
        i = 25,
        l = (s, d, m) => {
          var p, f, b;
          if (m.includes(s)) return "[Circular]";
          if (((m = [...m, s]), d > i)) return "...";
          if (o.has(s)) return o.get(s);
          if (s instanceof Array) return s.map((h) => l(h, ++d, m));
          if (s instanceof Date) return { __date__: { value: s.toISOString() } };
          if (s instanceof Error) {
            let { name: h, message: y, stack: g } = s;
            return { __error__: { name: h, message: y, stack: g } };
          }
          if (s instanceof RegExp) {
            let { flags: h, source: y } = s;
            return { __regexp__: { flags: h, source: y } };
          }
          if (s instanceof ((p = Ne.window) == null ? void 0 : p.HTMLElement)) {
            let { prefix: h, localName: y, id: g, classList: E, innerText: C } = s,
              q = Array.from(E);
            return { __element__: { prefix: h, localName: y, id: g, classNames: q, innerText: C } };
          }
          return typeof s == "function"
            ? { __function__: { name: "getMockName" in s ? s.getMockName() : s.name } }
            : typeof s == "symbol"
            ? { __symbol__: { description: s.description } }
            : typeof s == "object" &&
              (f = s == null ? void 0 : s.constructor) != null &&
              f.name &&
              ((b = s == null ? void 0 : s.constructor) == null ? void 0 : b.name) !== "Object"
            ? { __class__: { name: s.constructor.name } }
            : Object.prototype.toString.call(s) === "[object Object]"
            ? Object.fromEntries(Object.entries(s).map(([h, y]) => [h, l(y, ++d, m)]))
            : s;
        },
        u = { ...r, args: r.args.map((s) => l(s, 0, [])) };
      r.path.forEach((s) => {
        s != null &&
          s.__callId__ &&
          this.setState(r.storyId, ({ chainedCallIds: d }) => ({ chainedCallIds: new Set(Array.from(d).concat(s.__callId__)) }));
      });
      let c = (s) => {
        var d;
        if (s instanceof Error) {
          let { name: m, message: p, stack: f, callId: b = r.id } = s,
            { showDiff: h = void 0, diff: y = void 0, actual: g = void 0, expected: E = void 0 } = s.name === "AssertionError" ? lp(s) : s,
            C = { name: m, message: p, stack: f, callId: b, showDiff: h, diff: y, actual: g, expected: E };
          if (
            (this.update({ ...u, status: "error", exception: C }),
            this.setState(r.storyId, (q) => ({
              callRefsByResult: new Map([...Array.from(q.callRefsByResult.entries()), [s, { __callId__: r.id, retain: r.retain }]]),
            })),
            (d = r.ancestors) == null ? void 0 : d.length)
          )
            throw (Object.prototype.hasOwnProperty.call(s, "callId") || Object.defineProperty(s, "callId", { value: r.id }), s);
        }
        throw s;
      };
      try {
        if (a === "played" && !r.retain) throw p0;
        let s = (n.getArgs ? n.getArgs(r, this.getState(r.storyId)) : r.args).map((m) =>
            typeof m != "function" || Object.keys(m).length
              ? m
              : (...p) => {
                  let { cursor: f, ancestors: b } = this.getState(r.storyId);
                  this.setState(r.storyId, { cursor: 0, ancestors: [...b, r.id] });
                  let h = () => this.setState(r.storyId, { cursor: f, ancestors: b }),
                    y = !1;
                  try {
                    let g = m(...p);
                    return g instanceof Promise ? ((y = !0), g.finally(h)) : g;
                  } finally {
                    y || h();
                  }
                }
          ),
          d = e.apply(t, s);
        return (
          d &&
            ["object", "function", "symbol"].includes(typeof d) &&
            this.setState(r.storyId, (m) => ({
              callRefsByResult: new Map([...Array.from(m.callRefsByResult.entries()), [d, { __callId__: r.id, retain: r.retain }]]),
            })),
          this.update({ ...u, status: d instanceof Promise ? "active" : "done" }),
          d instanceof Promise ? d.then((m) => (this.update({ ...u, status: "done" }), m), c) : d
        );
      } catch (s) {
        return c(s);
      }
    }
    update(e) {
      this.channel.emit(ct.CALL, e),
        this.setState(e.storyId, ({ calls: t }) => {
          let r = t.concat(e).reduce((n, o) => Object.assign(n, { [o.id]: o }), {});
          return { calls: Object.values(r).sort((n, o) => n.id.localeCompare(o.id, void 0, { numeric: !0 })) };
        }),
        this.sync(e.storyId);
    }
    sync(e) {
      let t = () => {
        var c;
        let { isLocked: r, isPlaying: n } = this.getState(e),
          o = this.getLog(e),
          a = (c = o.filter(({ ancestors: s }) => !s.length).find((s) => s.status === "waiting")) == null ? void 0 : c.callId,
          i = o.some((s) => s.status === "active");
        if (r || i || o.length === 0) {
          let s = { controlStates: bu, logItems: o };
          this.channel.emit(ct.SYNC, s);
          return;
        }
        let l = o.some((s) => s.status === "done" || s.status === "error"),
          u = { controlStates: { start: l, back: l, goto: !0, next: n, end: n }, logItems: o, pausedAt: a };
        this.channel.emit(ct.SYNC, u);
      };
      this.setState(e, ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }));
    }
  };
function ol(e, t = {}) {
  var r, n, o, a, i, l, u, c;
  try {
    let s = !1,
      d = !1;
    return (
      (o = (n = (r = Ne.window) == null ? void 0 : r.location) == null ? void 0 : n.search) != null && o.includes("instrument=true")
        ? (s = !0)
        : (l = (i = (a = Ne.window) == null ? void 0 : a.location) == null ? void 0 : i.search) != null &&
          l.includes("instrument=false") &&
          (d = !0),
      (((u = Ne.window) == null ? void 0 : u.parent) === Ne.window && !s) || d
        ? e
        : (Ne.window &&
            !Ne.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ &&
            (Ne.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new b0()),
          ((c = Ne.window) == null ? void 0 : c.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__).instrument(e, t))
    );
  } catch (s) {
    return wy.warn(s), e;
  }
}
function y0(e, t) {
  let r = e;
  for (; r != null; ) {
    let n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
const { global: sp } = __STORYBOOK_MODULE_GLOBAL__,
  { once: g0 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var v0 = Object.create,
  al = Object.defineProperty,
  _0 = Object.getOwnPropertyDescriptor,
  up = Object.getOwnPropertyNames,
  R0 = Object.getPrototypeOf,
  w0 = Object.prototype.hasOwnProperty,
  C0 = ((e) =>
    typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] }) : e)(
    function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    }
  ),
  R = (e, t) =>
    function () {
      return t || (0, e[up(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  il = (e, t) => {
    for (var r in t) al(e, r, { get: t[r], enumerable: !0 });
  },
  q0 = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of up(t)) !w0.call(e, o) && o !== r && al(e, o, { get: () => t[o], enumerable: !(n = _0(t, o)) || n.enumerable });
    return e;
  },
  De = (e, t, r) => (
    (r = e != null ? v0(R0(e)) : {}), q0(t || !e || !e.__esModule ? al(r, "default", { value: e, enumerable: !0 }) : r, e)
  ),
  E0 = R({
    "../../node_modules/min-indent/index.js"(e, t) {
      t.exports = (r) => {
        let n = r.match(/^[ \t]*(?=\S)/gm);
        return n ? n.reduce((o, a) => Math.min(o, a.length), 1 / 0) : 0;
      };
    },
  }),
  P0 = R({
    "../../node_modules/strip-indent/index.js"(e, t) {
      var r = E0();
      t.exports = (n) => {
        let o = r(n);
        if (o === 0) return n;
        let a = new RegExp(`^[ \\t]{${o}}`, "gm");
        return n.replace(a, "");
      };
    },
  }),
  O0 = R({
    "../../node_modules/indent-string/index.js"(e, t) {
      t.exports = (r, n = 1, o) => {
        if (((o = { indent: " ", includeEmptyLines: !1, ...o }), typeof r != "string"))
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof r}\``);
        if (typeof n != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);
        if (typeof o.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof o.indent}\``);
        if (n === 0) return r;
        let a = o.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return r.replace(a, o.indent.repeat(n));
      };
    },
  }),
  cp = R({
    "../../node_modules/redent/index.js"(e, t) {
      var r = P0(),
        n = O0();
      t.exports = (o, a = 0, i) => n(r(o), a, i);
    },
  }),
  T0 = R({
    "../../node_modules/aria-query/lib/util/iteratorProxy.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      function t() {
        var r = this,
          n = 0,
          o = {
            "@@iterator": function () {
              return o;
            },
            next: function () {
              if (n < r.length) {
                var a = r[n];
                return (n = n + 1), { done: !1, value: a };
              } else return { done: !0 };
            },
          };
        return o;
      }
      e.default = t;
    },
  }),
  dn = R({
    "../../node_modules/aria-query/lib/util/iterationDecorator.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
      var t = r(T0());
      function r(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function n(a) {
        "@babel/helpers - typeof";
        return (
          (n =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (i) {
                  return typeof i;
                }
              : function (i) {
                  return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
                }),
          n(a)
        );
      }
      function o(a, i) {
        return (
          typeof Symbol == "function" &&
            n(Symbol.iterator) === "symbol" &&
            Object.defineProperty(a, Symbol.iterator, { value: t.default.bind(i) }),
          a
        );
      }
    },
  }),
  S0 = R({
    "../../node_modules/aria-query/lib/ariaPropsMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = r(dn());
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      function n(d, m) {
        return u(d) || l(d, m) || a(d, m) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function a(d, m) {
        if (d) {
          if (typeof d == "string") return i(d, m);
          var p = {}.toString.call(d).slice(8, -1);
          return (
            p === "Object" && d.constructor && (p = d.constructor.name),
            p === "Map" || p === "Set"
              ? Array.from(d)
              : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
              ? i(d, m)
              : void 0
          );
        }
      }
      function i(d, m) {
        (m == null || m > d.length) && (m = d.length);
        for (var p = 0, f = Array(m); p < m; p++) f[p] = d[p];
        return f;
      }
      function l(d, m) {
        var p = d == null ? null : (typeof Symbol < "u" && d[Symbol.iterator]) || d["@@iterator"];
        if (p != null) {
          var f,
            b,
            h,
            y,
            g = [],
            E = !0,
            C = !1;
          try {
            if (((h = (p = p.call(d)).next), m === 0)) {
              if (Object(p) !== p) return;
              E = !1;
            } else for (; !(E = (f = h.call(p)).done) && (g.push(f.value), g.length !== m); E = !0);
          } catch (q) {
            (C = !0), (b = q);
          } finally {
            try {
              if (!E && p.return != null && ((y = p.return()), Object(y) !== y)) return;
            } finally {
              if (C) throw b;
            }
          }
          return g;
        }
      }
      function u(d) {
        if (Array.isArray(d)) return d;
      }
      var c = [
          ["aria-activedescendant", { type: "id" }],
          ["aria-atomic", { type: "boolean" }],
          ["aria-autocomplete", { type: "token", values: ["inline", "list", "both", "none"] }],
          ["aria-braillelabel", { type: "string" }],
          ["aria-brailleroledescription", { type: "string" }],
          ["aria-busy", { type: "boolean" }],
          ["aria-checked", { type: "tristate" }],
          ["aria-colcount", { type: "integer" }],
          ["aria-colindex", { type: "integer" }],
          ["aria-colspan", { type: "integer" }],
          ["aria-controls", { type: "idlist" }],
          ["aria-current", { type: "token", values: ["page", "step", "location", "date", "time", !0, !1] }],
          ["aria-describedby", { type: "idlist" }],
          ["aria-description", { type: "string" }],
          ["aria-details", { type: "id" }],
          ["aria-disabled", { type: "boolean" }],
          ["aria-dropeffect", { type: "tokenlist", values: ["copy", "execute", "link", "move", "none", "popup"] }],
          ["aria-errormessage", { type: "id" }],
          ["aria-expanded", { type: "boolean", allowundefined: !0 }],
          ["aria-flowto", { type: "idlist" }],
          ["aria-grabbed", { type: "boolean", allowundefined: !0 }],
          ["aria-haspopup", { type: "token", values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"] }],
          ["aria-hidden", { type: "boolean", allowundefined: !0 }],
          ["aria-invalid", { type: "token", values: ["grammar", !1, "spelling", !0] }],
          ["aria-keyshortcuts", { type: "string" }],
          ["aria-label", { type: "string" }],
          ["aria-labelledby", { type: "idlist" }],
          ["aria-level", { type: "integer" }],
          ["aria-live", { type: "token", values: ["assertive", "off", "polite"] }],
          ["aria-modal", { type: "boolean" }],
          ["aria-multiline", { type: "boolean" }],
          ["aria-multiselectable", { type: "boolean" }],
          ["aria-orientation", { type: "token", values: ["vertical", "undefined", "horizontal"] }],
          ["aria-owns", { type: "idlist" }],
          ["aria-placeholder", { type: "string" }],
          ["aria-posinset", { type: "integer" }],
          ["aria-pressed", { type: "tristate" }],
          ["aria-readonly", { type: "boolean" }],
          ["aria-relevant", { type: "tokenlist", values: ["additions", "all", "removals", "text"] }],
          ["aria-required", { type: "boolean" }],
          ["aria-roledescription", { type: "string" }],
          ["aria-rowcount", { type: "integer" }],
          ["aria-rowindex", { type: "integer" }],
          ["aria-rowspan", { type: "integer" }],
          ["aria-selected", { type: "boolean", allowundefined: !0 }],
          ["aria-setsize", { type: "integer" }],
          ["aria-sort", { type: "token", values: ["ascending", "descending", "none", "other"] }],
          ["aria-valuemax", { type: "number" }],
          ["aria-valuemin", { type: "number" }],
          ["aria-valuenow", { type: "number" }],
          ["aria-valuetext", { type: "string" }],
        ],
        s = {
          entries: function () {
            return c;
          },
          forEach: function (d) {
            for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = 0, f = c; p < f.length; p++) {
              var b = n(f[p], 2),
                h = b[0],
                y = b[1];
              d.call(m, y, h, c);
            }
          },
          get: function (d) {
            var m = c.filter(function (p) {
              return p[0] === d;
            })[0];
            return m && m[1];
          },
          has: function (d) {
            return !!s.get(d);
          },
          keys: function () {
            return c.map(function (d) {
              var m = n(d, 1),
                p = m[0];
              return p;
            });
          },
          values: function () {
            return c.map(function (d) {
              var m = n(d, 2),
                p = m[1];
              return p;
            });
          },
        };
      e.default = (0, t.default)(s, s.entries());
    },
  }),
  A0 = R({
    "../../node_modules/aria-query/lib/domMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = r(dn());
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      function n(d, m) {
        return u(d) || l(d, m) || a(d, m) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function a(d, m) {
        if (d) {
          if (typeof d == "string") return i(d, m);
          var p = {}.toString.call(d).slice(8, -1);
          return (
            p === "Object" && d.constructor && (p = d.constructor.name),
            p === "Map" || p === "Set"
              ? Array.from(d)
              : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
              ? i(d, m)
              : void 0
          );
        }
      }
      function i(d, m) {
        (m == null || m > d.length) && (m = d.length);
        for (var p = 0, f = Array(m); p < m; p++) f[p] = d[p];
        return f;
      }
      function l(d, m) {
        var p = d == null ? null : (typeof Symbol < "u" && d[Symbol.iterator]) || d["@@iterator"];
        if (p != null) {
          var f,
            b,
            h,
            y,
            g = [],
            E = !0,
            C = !1;
          try {
            if (((h = (p = p.call(d)).next), m === 0)) {
              if (Object(p) !== p) return;
              E = !1;
            } else for (; !(E = (f = h.call(p)).done) && (g.push(f.value), g.length !== m); E = !0);
          } catch (q) {
            (C = !0), (b = q);
          } finally {
            try {
              if (!E && p.return != null && ((y = p.return()), Object(y) !== y)) return;
            } finally {
              if (C) throw b;
            }
          }
          return g;
        }
      }
      function u(d) {
        if (Array.isArray(d)) return d;
      }
      var c = [
          ["a", { reserved: !1 }],
          ["abbr", { reserved: !1 }],
          ["acronym", { reserved: !1 }],
          ["address", { reserved: !1 }],
          ["applet", { reserved: !1 }],
          ["area", { reserved: !1 }],
          ["article", { reserved: !1 }],
          ["aside", { reserved: !1 }],
          ["audio", { reserved: !1 }],
          ["b", { reserved: !1 }],
          ["base", { reserved: !0 }],
          ["bdi", { reserved: !1 }],
          ["bdo", { reserved: !1 }],
          ["big", { reserved: !1 }],
          ["blink", { reserved: !1 }],
          ["blockquote", { reserved: !1 }],
          ["body", { reserved: !1 }],
          ["br", { reserved: !1 }],
          ["button", { reserved: !1 }],
          ["canvas", { reserved: !1 }],
          ["caption", { reserved: !1 }],
          ["center", { reserved: !1 }],
          ["cite", { reserved: !1 }],
          ["code", { reserved: !1 }],
          ["col", { reserved: !0 }],
          ["colgroup", { reserved: !0 }],
          ["content", { reserved: !1 }],
          ["data", { reserved: !1 }],
          ["datalist", { reserved: !1 }],
          ["dd", { reserved: !1 }],
          ["del", { reserved: !1 }],
          ["details", { reserved: !1 }],
          ["dfn", { reserved: !1 }],
          ["dialog", { reserved: !1 }],
          ["dir", { reserved: !1 }],
          ["div", { reserved: !1 }],
          ["dl", { reserved: !1 }],
          ["dt", { reserved: !1 }],
          ["em", { reserved: !1 }],
          ["embed", { reserved: !1 }],
          ["fieldset", { reserved: !1 }],
          ["figcaption", { reserved: !1 }],
          ["figure", { reserved: !1 }],
          ["font", { reserved: !1 }],
          ["footer", { reserved: !1 }],
          ["form", { reserved: !1 }],
          ["frame", { reserved: !1 }],
          ["frameset", { reserved: !1 }],
          ["h1", { reserved: !1 }],
          ["h2", { reserved: !1 }],
          ["h3", { reserved: !1 }],
          ["h4", { reserved: !1 }],
          ["h5", { reserved: !1 }],
          ["h6", { reserved: !1 }],
          ["head", { reserved: !0 }],
          ["header", { reserved: !1 }],
          ["hgroup", { reserved: !1 }],
          ["hr", { reserved: !1 }],
          ["html", { reserved: !0 }],
          ["i", { reserved: !1 }],
          ["iframe", { reserved: !1 }],
          ["img", { reserved: !1 }],
          ["input", { reserved: !1 }],
          ["ins", { reserved: !1 }],
          ["kbd", { reserved: !1 }],
          ["keygen", { reserved: !1 }],
          ["label", { reserved: !1 }],
          ["legend", { reserved: !1 }],
          ["li", { reserved: !1 }],
          ["link", { reserved: !0 }],
          ["main", { reserved: !1 }],
          ["map", { reserved: !1 }],
          ["mark", { reserved: !1 }],
          ["marquee", { reserved: !1 }],
          ["menu", { reserved: !1 }],
          ["menuitem", { reserved: !1 }],
          ["meta", { reserved: !0 }],
          ["meter", { reserved: !1 }],
          ["nav", { reserved: !1 }],
          ["noembed", { reserved: !0 }],
          ["noscript", { reserved: !0 }],
          ["object", { reserved: !1 }],
          ["ol", { reserved: !1 }],
          ["optgroup", { reserved: !1 }],
          ["option", { reserved: !1 }],
          ["output", { reserved: !1 }],
          ["p", { reserved: !1 }],
          ["param", { reserved: !0 }],
          ["picture", { reserved: !0 }],
          ["pre", { reserved: !1 }],
          ["progress", { reserved: !1 }],
          ["q", { reserved: !1 }],
          ["rp", { reserved: !1 }],
          ["rt", { reserved: !1 }],
          ["rtc", { reserved: !1 }],
          ["ruby", { reserved: !1 }],
          ["s", { reserved: !1 }],
          ["samp", { reserved: !1 }],
          ["script", { reserved: !0 }],
          ["section", { reserved: !1 }],
          ["select", { reserved: !1 }],
          ["small", { reserved: !1 }],
          ["source", { reserved: !0 }],
          ["spacer", { reserved: !1 }],
          ["span", { reserved: !1 }],
          ["strike", { reserved: !1 }],
          ["strong", { reserved: !1 }],
          ["style", { reserved: !0 }],
          ["sub", { reserved: !1 }],
          ["summary", { reserved: !1 }],
          ["sup", { reserved: !1 }],
          ["table", { reserved: !1 }],
          ["tbody", { reserved: !1 }],
          ["td", { reserved: !1 }],
          ["textarea", { reserved: !1 }],
          ["tfoot", { reserved: !1 }],
          ["th", { reserved: !1 }],
          ["thead", { reserved: !1 }],
          ["time", { reserved: !1 }],
          ["title", { reserved: !0 }],
          ["tr", { reserved: !1 }],
          ["track", { reserved: !0 }],
          ["tt", { reserved: !1 }],
          ["u", { reserved: !1 }],
          ["ul", { reserved: !1 }],
          ["var", { reserved: !1 }],
          ["video", { reserved: !1 }],
          ["wbr", { reserved: !1 }],
          ["xmp", { reserved: !1 }],
        ],
        s = {
          entries: function () {
            return c;
          },
          forEach: function (d) {
            for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = 0, f = c; p < f.length; p++) {
              var b = n(f[p], 2),
                h = b[0],
                y = b[1];
              d.call(m, y, h, c);
            }
          },
          get: function (d) {
            var m = c.filter(function (p) {
              return p[0] === d;
            })[0];
            return m && m[1];
          },
          has: function (d) {
            return !!s.get(d);
          },
          keys: function () {
            return c.map(function (d) {
              var m = n(d, 1),
                p = m[0];
              return p;
            });
          },
          values: function () {
            return c.map(function (d) {
              var m = n(d, 2),
                p = m[1];
              return p;
            });
          },
        };
      e.default = (0, t.default)(s, s.entries());
    },
  }),
  M0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      e.default = t;
    },
  }),
  x0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-activedescendant": null, "aria-disabled": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      e.default = t;
    },
  }),
  j0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null },
        relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      e.default = t;
    },
  }),
  N0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  $0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-valuemax": null, "aria-valuemin": null, "aria-valuenow": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  I0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          "aria-atomic": null,
          "aria-busy": null,
          "aria-controls": null,
          "aria-current": null,
          "aria-describedby": null,
          "aria-details": null,
          "aria-dropeffect": null,
          "aria-flowto": null,
          "aria-grabbed": null,
          "aria-hidden": null,
          "aria-keyshortcuts": null,
          "aria-label": null,
          "aria-labelledby": null,
          "aria-live": null,
          "aria-owns": null,
          "aria-relevant": null,
          "aria-roledescription": null,
        },
        relatedConcepts: [
          { concept: { name: "role" }, module: "XHTML" },
          { concept: { name: "type" }, module: "Dublin Core" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      e.default = t;
    },
  }),
  B0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "frontmatter" }, module: "DTB" },
          { concept: { name: "level" }, module: "DTB" },
          { concept: { name: "level" }, module: "SMIL" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  k0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  L0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "group"],
        ],
      };
      e.default = t;
    },
  }),
  D0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      e.default = t;
    },
  }),
  F0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      e.default = t;
    },
  }),
  H0 = R({
    "../../node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-modal": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      e.default = t;
    },
  }),
  U0 = R({
    "../../node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = p(M0()),
        r = p(x0()),
        n = p(j0()),
        o = p(N0()),
        a = p($0()),
        i = p(I0()),
        l = p(B0()),
        u = p(k0()),
        c = p(L0()),
        s = p(D0()),
        d = p(F0()),
        m = p(H0());
      function p(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var f = [
        ["command", t.default],
        ["composite", r.default],
        ["input", n.default],
        ["landmark", o.default],
        ["range", a.default],
        ["roletype", i.default],
        ["section", l.default],
        ["sectionhead", u.default],
        ["select", c.default],
        ["structure", s.default],
        ["widget", d.default],
        ["window", m.default],
      ];
      e.default = f;
    },
  }),
  V0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/alertRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-atomic": "true", "aria-live": "assertive" },
        relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  z0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "alert"],
          ["roletype", "window", "dialog"],
        ],
      };
      e.default = t;
    },
  }),
  G0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  W0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/articleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-posinset": null, "aria-setsize": null },
        relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "document"]],
      };
      e.default = t;
    },
  }),
  K0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "header" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  Y0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "blockquote" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  J0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-pressed": null },
        relatedConcepts: [
          { concept: { attributes: [{ name: "type", value: "button" }], name: "input" }, module: "HTML" },
          { concept: { attributes: [{ name: "type", value: "image" }], name: "input" }, module: "HTML" },
          { concept: { attributes: [{ name: "type", value: "reset" }], name: "input" }, module: "HTML" },
          { concept: { attributes: [{ name: "type", value: "submit" }], name: "input" }, module: "HTML" },
          { concept: { name: "button" }, module: "HTML" },
          { concept: { name: "trigger" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      e.default = t;
    },
  }),
  X0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/captionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "caption" }, module: "HTML" }],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  Q0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/cellRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-colindex": null, "aria-colspan": null, "aria-rowindex": null, "aria-rowspan": null },
        relatedConcepts: [{ concept: { constraints: ["ancestor table element has table role"], name: "td" }, module: "HTML" }],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  Z0 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
        },
        relatedConcepts: [
          { concept: { attributes: [{ name: "type", value: "checkbox" }], name: "input" }, module: "HTML" },
          { concept: { name: "option" }, module: "ARIA" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input"]],
      };
      e.default = t;
    },
  }),
  e1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/codeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "code" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  t1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-sort": null },
        relatedConcepts: [
          { concept: { name: "th" }, module: "HTML" },
          { concept: { attributes: [{ name: "scope", value: "col" }], name: "th" }, module: "HTML" },
          { concept: { attributes: [{ name: "scope", value: "colgroup" }], name: "th" }, module: "HTML" },
        ],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"],
        ],
      };
      e.default = t;
    },
  }),
  r1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-expanded": "false",
          "aria-haspopup": "listbox",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "email" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "search" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "tel" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "text" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "url" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "url" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "multiple" },
                { constraints: ["undefined"], name: "size" },
              ],
              constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
              name: "select",
            },
            module: "HTML",
          },
          { concept: { name: "select" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-controls": null, "aria-expanded": "false" },
        superClass: [["roletype", "widget", "input"]],
      };
      e.default = t;
    },
  }),
  n1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { constraints: ["scoped to the body element", "scoped to the main element"], name: "aside" }, module: "HTML" },
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-label" }],
              constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
              name: "aside",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
              constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
              name: "aside",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  o1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "footer" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  a1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  i1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "del" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  l1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "window"]],
      };
      e.default = t;
    },
  }),
  s1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ module: "DAISY Guide" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]],
      };
      e.default = t;
    },
  }),
  u1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/documentRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }, { concept: { name: "html" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  c1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "em" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  d1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/feedRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["article"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]],
      };
      e.default = t;
    },
  }),
  p1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/figureRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  m1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/formRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "form" }, module: "HTML" },
          { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "form" }, module: "HTML" },
          { concept: { attributes: [{ constraints: ["set"], name: "name" }], name: "form" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  f1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/genericRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [
          { concept: { name: "a" }, module: "HTML" },
          { concept: { name: "area" }, module: "HTML" },
          { concept: { name: "aside" }, module: "HTML" },
          { concept: { name: "b" }, module: "HTML" },
          { concept: { name: "bdo" }, module: "HTML" },
          { concept: { name: "body" }, module: "HTML" },
          { concept: { name: "data" }, module: "HTML" },
          { concept: { name: "div" }, module: "HTML" },
          {
            concept: {
              constraints: [
                "scoped to the main element",
                "scoped to a sectioning content element",
                "scoped to a sectioning root element other than body",
              ],
              name: "footer",
            },
            module: "HTML",
          },
          {
            concept: {
              constraints: [
                "scoped to the main element",
                "scoped to a sectioning content element",
                "scoped to a sectioning root element other than body",
              ],
              name: "header",
            },
            module: "HTML",
          },
          { concept: { name: "hgroup" }, module: "HTML" },
          { concept: { name: "i" }, module: "HTML" },
          { concept: { name: "pre" }, module: "HTML" },
          { concept: { name: "q" }, module: "HTML" },
          { concept: { name: "samp" }, module: "HTML" },
          { concept: { name: "section" }, module: "HTML" },
          { concept: { name: "small" }, module: "HTML" },
          { concept: { name: "span" }, module: "HTML" },
          { concept: { name: "u" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  h1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/gridRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-multiselectable": null, "aria-readonly": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "table"],
        ],
      };
      e.default = t;
    },
  }),
  b1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-selected": null,
        },
        relatedConcepts: [
          {
            concept: { constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"], name: "td" },
            module: "HTML",
          },
        ],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "widget"],
        ],
      };
      e.default = t;
    },
  }),
  y1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/groupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-activedescendant": null, "aria-disabled": null },
        relatedConcepts: [
          { concept: { name: "details" }, module: "HTML" },
          { concept: { name: "fieldset" }, module: "HTML" },
          { concept: { name: "optgroup" }, module: "HTML" },
          { concept: { name: "address" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  g1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/headingRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-level": "2" },
        relatedConcepts: [
          { concept: { name: "h1" }, module: "HTML" },
          { concept: { name: "h2" }, module: "HTML" },
          { concept: { name: "h3" }, module: "HTML" },
          { concept: { name: "h4" }, module: "HTML" },
          { concept: { name: "h5" }, module: "HTML" },
          { concept: { name: "h6" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-level": "2" },
        superClass: [["roletype", "structure", "sectionhead"]],
      };
      e.default = t;
    },
  }),
  v1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/imgRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { attributes: [{ constraints: ["set"], name: "alt" }], name: "img" }, module: "HTML" },
          { concept: { attributes: [{ constraints: ["undefined"], name: "alt" }], name: "img" }, module: "HTML" },
          { concept: { name: "imggroup" }, module: "DTB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  _1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "ins" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  R1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/linkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null },
        relatedConcepts: [
          { concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "a" }, module: "HTML" },
          { concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "area" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      e.default = t;
    },
  }),
  w1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/listRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "menu" }, module: "HTML" },
          { concept: { name: "ol" }, module: "HTML" },
          { concept: { name: "ul" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["listitem"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  C1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-orientation": "vertical",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: [">1"], name: "size" }],
              constraints: ["the size attribute value is greater than 1"],
              name: "select",
            },
            module: "HTML",
          },
          { concept: { attributes: [{ name: "multiple" }], name: "select" }, module: "HTML" },
          { concept: { name: "datalist" }, module: "HTML" },
          { concept: { name: "list" }, module: "ARIA" },
          { concept: { name: "select" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["option", "group"], ["option"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      e.default = t;
    },
  }),
  q1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-level": null, "aria-posinset": null, "aria-setsize": null },
        relatedConcepts: [
          {
            concept: { constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], name: "li" },
            module: "HTML",
          },
          { concept: { name: "item" }, module: "XForms" },
        ],
        requireContextRole: ["directory", "list"],
        requiredContextRole: ["directory", "list"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  E1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/logRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-live": "polite" },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  P1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/mainRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  O1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/markRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: [],
        props: { "aria-braillelabel": null, "aria-brailleroledescription": null, "aria-description": null },
        relatedConcepts: [{ concept: { name: "mark" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  T1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  S1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/mathRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  A1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/menuRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "vertical" },
        relatedConcepts: [
          { concept: { name: "MENU" }, module: "JAPI" },
          { concept: { name: "list" }, module: "ARIA" },
          { concept: { name: "select" }, module: "XForms" },
          { concept: { name: "sidebar" }, module: "DTB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"],
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      e.default = t;
    },
  }),
  M1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "horizontal" },
        relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"],
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select", "menu"],
          ["roletype", "structure", "section", "group", "select", "menu"],
        ],
      };
      e.default = t;
    },
  }),
  x1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-posinset": null, "aria-setsize": null },
        relatedConcepts: [
          { concept: { name: "MENU_ITEM" }, module: "JAPI" },
          { concept: { name: "listitem" }, module: "ARIA" },
          { concept: { name: "option" }, module: "ARIA" },
        ],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      e.default = t;
    },
  }),
  j1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [
          ["roletype", "widget", "input", "checkbox"],
          ["roletype", "widget", "command", "menuitem"],
        ],
      };
      e.default = t;
    },
  }),
  N1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [
          ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
          ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
          ["roletype", "widget", "input", "radio"],
        ],
      };
      e.default = t;
    },
  }),
  $1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/meterRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-valuetext": null, "aria-valuemax": "100", "aria-valuemin": "0" },
        relatedConcepts: [{ concept: { name: "meter" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-valuenow": null },
        superClass: [["roletype", "structure", "range"]],
      };
      e.default = t;
    },
  }),
  I1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  B1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/noneRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      e.default = t;
    },
  }),
  k1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/noteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  L1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/optionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null, "aria-selected": "false" },
        relatedConcepts: [
          { concept: { name: "item" }, module: "XForms" },
          { concept: { name: "listitem" }, module: "ARIA" },
          { concept: { name: "option" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-selected": "false" },
        superClass: [["roletype", "widget", "input"]],
      };
      e.default = t;
    },
  }),
  D1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "p" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  F1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { attributes: [{ name: "alt", value: "" }], name: "img" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  H1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-valuetext": null },
        relatedConcepts: [
          { concept: { name: "progress" }, module: "HTML" },
          { concept: { name: "status" }, module: "ARIA" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"],
        ],
      };
      e.default = t;
    },
  }),
  U1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/radioRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null },
        relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "radio" }], name: "input" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input"]],
      };
      e.default = t;
    },
  }),
  V1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null },
        relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["radio"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      e.default = t;
    },
  }),
  z1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/regionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "section" }, module: "HTML" },
          { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "section" }, module: "HTML" },
          { concept: { name: "Device Independence Glossart perceivable unit" } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  G1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/rowRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-expanded": null,
          "aria-level": null,
          "aria-posinset": null,
          "aria-rowindex": null,
          "aria-selected": null,
          "aria-setsize": null,
        },
        relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
        requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"],
          ["roletype", "widget"],
        ],
      };
      e.default = t;
    },
  }),
  W1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "tbody" }, module: "HTML" },
          { concept: { name: "tfoot" }, module: "HTML" },
          { concept: { name: "thead" }, module: "HTML" },
        ],
        requireContextRole: ["grid", "table", "treegrid"],
        requiredContextRole: ["grid", "table", "treegrid"],
        requiredOwnedElements: [["row"]],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  K1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-sort": null },
        relatedConcepts: [
          { concept: { attributes: [{ name: "scope", value: "row" }], name: "th" }, module: "HTML" },
          { concept: { attributes: [{ name: "scope", value: "rowgroup" }], name: "th" }, module: "HTML" },
        ],
        requireContextRole: ["row", "rowgroup"],
        requiredContextRole: ["row", "rowgroup"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"],
        ],
      };
      e.default = t;
    },
  }),
  Y1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-valuetext": null,
          "aria-orientation": "vertical",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-controls": null, "aria-valuenow": null },
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"],
        ],
      };
      e.default = t;
    },
  }),
  J1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/searchRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  X1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "search" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input", "textbox"]],
      };
      e.default = t;
    },
  }),
  Q1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": null,
          "aria-valuetext": null,
        },
        relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      e.default = t;
    },
  }),
  Z1 = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-valuetext": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
        },
        relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "range" }], name: "input" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-valuenow": null },
        superClass: [
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"],
        ],
      };
      e.default = t;
    },
  }),
  e_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-valuetext": null,
          "aria-valuenow": "0",
        },
        relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "number" }], name: "input" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"],
        ],
      };
      e.default = t;
    },
  }),
  t_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/statusRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-atomic": "true", "aria-live": "polite" },
        relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  r_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/strongRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "strong" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  n_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "sub" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  o_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [{ concept: { name: "sup" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  a_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/switchRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input", "checkbox"]],
      };
      e.default = t;
    },
  }),
  i_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/tabRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false",
        },
        relatedConcepts: [],
        requireContextRole: ["tablist"],
        requiredContextRole: ["tablist"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"],
          ["roletype", "widget"],
        ],
      };
      e.default = t;
    },
  }),
  l_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/tableRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-colcount": null, "aria-rowcount": null },
        relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  s_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-level": null, "aria-multiselectable": null, "aria-orientation": "horizontal" },
        relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["tab"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"]],
      };
      e.default = t;
    },
  }),
  u_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  c_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/termRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "dfn" }, module: "HTML" },
          { concept: { name: "dt" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  d_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-multiline": null,
          "aria-placeholder": null,
          "aria-readonly": null,
          "aria-required": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "type" },
                { constraints: ["undefined"], name: "list" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "email" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "tel" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "text" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "url" },
              ],
              constraints: ["the list attribute is not set"],
              name: "input",
            },
            module: "HTML",
          },
          { concept: { name: "input" }, module: "XForms" },
          { concept: { name: "textarea" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input"]],
      };
      e.default = t;
    },
  }),
  p_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/timeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "time" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  m_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/timerRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "status"]],
      };
      e.default = t;
    },
  }),
  f_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "horizontal" },
        relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"]],
      };
      e.default = t;
    },
  }),
  h_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  b_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/treeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-required": null,
          "aria-orientation": "vertical",
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      e.default = t;
    },
  }),
  y_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "grid"],
          ["roletype", "structure", "section", "table", "grid"],
          ["roletype", "widget", "composite", "select", "tree"],
          ["roletype", "structure", "section", "group", "select", "tree"],
        ],
      };
      e.default = t;
    },
  }),
  g_ = R({
    "../../node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-expanded": null, "aria-haspopup": null },
        relatedConcepts: [],
        requireContextRole: ["group", "tree"],
        requiredContextRole: ["group", "tree"],
        requiredOwnedElements: [],
        requiredProps: { "aria-selected": null },
        superClass: [
          ["roletype", "structure", "section", "listitem"],
          ["roletype", "widget", "input", "option"],
        ],
      };
      e.default = t;
    },
  }),
  v_ = R({
    "../../node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = x(V0()),
        r = x(z0()),
        n = x(G0()),
        o = x(W0()),
        a = x(K0()),
        i = x(Y0()),
        l = x(J0()),
        u = x(X0()),
        c = x(Q0()),
        s = x(Z0()),
        d = x(e1()),
        m = x(t1()),
        p = x(r1()),
        f = x(n1()),
        b = x(o1()),
        h = x(a1()),
        y = x(i1()),
        g = x(l1()),
        E = x(s1()),
        C = x(u1()),
        q = x(c1()),
        _ = x(d1()),
        v = x(p1()),
        w = x(m1()),
        P = x(f1()),
        j = x(h1()),
        $ = x(b1()),
        B = x(y1()),
        I = x(g1()),
        S = x(v1()),
        k = x(_1()),
        U = x(R1()),
        W = x(w1()),
        G = x(C1()),
        le = x(q1()),
        ve = x(E1()),
        pe = x(P1()),
        F = x(O1()),
        L = x(T1()),
        D = x(S1()),
        z = x(A1()),
        H = x(M1()),
        oe = x(x1()),
        se = x(j1()),
        st = x(N1()),
        M = x($1()),
        V = x(I1()),
        J = x(B1()),
        te = x(k1()),
        ee = x(L1()),
        Re = x(D1()),
        we = x(F1()),
        qe = x(H1()),
        Ge = x(U1()),
        Do = x(V1()),
        Fo = x(z1()),
        Ho = x(G1()),
        Uo = x(W1()),
        Vo = x(K1()),
        zo = x(Y1()),
        Go = x(J1()),
        Wo = x(X1()),
        Ko = x(Q1()),
        Yo = x(Z1()),
        Jo = x(e_()),
        Xo = x(t_()),
        Qo = x(r_()),
        Zo = x(n_()),
        ea = x(o_()),
        ta = x(a_()),
        ra = x(i_()),
        na = x(l_()),
        oa = x(s_()),
        aa = x(u_()),
        ia = x(c_()),
        la = x(d_()),
        sa = x(p_()),
        ua = x(m_()),
        ca = x(f_()),
        da = x(h_()),
        pa = x(b_()),
        ma = x(y_()),
        fa = x(g_());
      function x(er) {
        return er && er.__esModule ? er : { default: er };
      }
      var ha = [
        ["alert", t.default],
        ["alertdialog", r.default],
        ["application", n.default],
        ["article", o.default],
        ["banner", a.default],
        ["blockquote", i.default],
        ["button", l.default],
        ["caption", u.default],
        ["cell", c.default],
        ["checkbox", s.default],
        ["code", d.default],
        ["columnheader", m.default],
        ["combobox", p.default],
        ["complementary", f.default],
        ["contentinfo", b.default],
        ["definition", h.default],
        ["deletion", y.default],
        ["dialog", g.default],
        ["directory", E.default],
        ["document", C.default],
        ["emphasis", q.default],
        ["feed", _.default],
        ["figure", v.default],
        ["form", w.default],
        ["generic", P.default],
        ["grid", j.default],
        ["gridcell", $.default],
        ["group", B.default],
        ["heading", I.default],
        ["img", S.default],
        ["insertion", k.default],
        ["link", U.default],
        ["list", W.default],
        ["listbox", G.default],
        ["listitem", le.default],
        ["log", ve.default],
        ["main", pe.default],
        ["mark", F.default],
        ["marquee", L.default],
        ["math", D.default],
        ["menu", z.default],
        ["menubar", H.default],
        ["menuitem", oe.default],
        ["menuitemcheckbox", se.default],
        ["menuitemradio", st.default],
        ["meter", M.default],
        ["navigation", V.default],
        ["none", J.default],
        ["note", te.default],
        ["option", ee.default],
        ["paragraph", Re.default],
        ["presentation", we.default],
        ["progressbar", qe.default],
        ["radio", Ge.default],
        ["radiogroup", Do.default],
        ["region", Fo.default],
        ["row", Ho.default],
        ["rowgroup", Uo.default],
        ["rowheader", Vo.default],
        ["scrollbar", zo.default],
        ["search", Go.default],
        ["searchbox", Wo.default],
        ["separator", Ko.default],
        ["slider", Yo.default],
        ["spinbutton", Jo.default],
        ["status", Xo.default],
        ["strong", Qo.default],
        ["subscript", Zo.default],
        ["superscript", ea.default],
        ["switch", ta.default],
        ["tab", ra.default],
        ["table", na.default],
        ["tablist", oa.default],
        ["tabpanel", aa.default],
        ["term", ia.default],
        ["textbox", la.default],
        ["time", sa.default],
        ["timer", ua.default],
        ["toolbar", ca.default],
        ["tooltip", da.default],
        ["tree", pa.default],
        ["treegrid", ma.default],
        ["treeitem", fa.default],
      ];
      e.default = ha;
    },
  }),
  __ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  R_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  w_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  C_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  q_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      e.default = t;
    },
  }),
  E_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: ["doc-bibliography"],
        requiredContextRole: ["doc-bibliography"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]],
      };
      e.default = t;
    },
  }),
  P_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-biblioentry"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  O_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      e.default = t;
    },
  }),
  T_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  S_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  A_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  M_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "img"]],
      };
      e.default = t;
    },
  }),
  x_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  j_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  N_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  $_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: ["doc-endnotes"],
        requiredContextRole: ["doc-endnotes"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]],
      };
      e.default = t;
    },
  }),
  I_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-endnote"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  B_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  k_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  L_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  D_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  F_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  H_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  U_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["definition"], ["term"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  V_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      e.default = t;
    },
  }),
  z_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "index [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
      };
      e.default = t;
    },
  }),
  G_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  W_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      e.default = t;
    },
  }),
  K_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]],
      };
      e.default = t;
    },
  }),
  Y_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "separator"]],
      };
      e.default = t;
    },
  }),
  J_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPagefooterRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: [],
        props: {
          "aria-braillelabel": null,
          "aria-brailleroledescription": null,
          "aria-description": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  X_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPageheaderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: [],
        props: {
          "aria-braillelabel": null,
          "aria-brailleroledescription": null,
          "aria-description": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  Q_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
      };
      e.default = t;
    },
  }),
  Z_ = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "part [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  eR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  tR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      e.default = t;
    },
  }),
  rR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["none"]],
      };
      e.default = t;
    },
  }),
  nR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      e.default = t;
    },
  }),
  oR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "sectionhead"]],
      };
      e.default = t;
    },
  }),
  aR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "help [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]],
      };
      e.default = t;
    },
  }),
  iR = R({
    "../../node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [{ concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
      };
      e.default = t;
    },
  }),
  lR = R({
    "../../node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = H(__()),
        r = H(R_()),
        n = H(w_()),
        o = H(C_()),
        a = H(q_()),
        i = H(E_()),
        l = H(P_()),
        u = H(O_()),
        c = H(T_()),
        s = H(S_()),
        d = H(A_()),
        m = H(M_()),
        p = H(x_()),
        f = H(j_()),
        b = H(N_()),
        h = H($_()),
        y = H(I_()),
        g = H(B_()),
        E = H(k_()),
        C = H(L_()),
        q = H(D_()),
        _ = H(F_()),
        v = H(H_()),
        w = H(U_()),
        P = H(V_()),
        j = H(z_()),
        $ = H(G_()),
        B = H(W_()),
        I = H(K_()),
        S = H(Y_()),
        k = H(J_()),
        U = H(X_()),
        W = H(Q_()),
        G = H(Z_()),
        le = H(eR()),
        ve = H(tR()),
        pe = H(rR()),
        F = H(nR()),
        L = H(oR()),
        D = H(aR()),
        z = H(iR());
      function H(se) {
        return se && se.__esModule ? se : { default: se };
      }
      var oe = [
        ["doc-abstract", t.default],
        ["doc-acknowledgments", r.default],
        ["doc-afterword", n.default],
        ["doc-appendix", o.default],
        ["doc-backlink", a.default],
        ["doc-biblioentry", i.default],
        ["doc-bibliography", l.default],
        ["doc-biblioref", u.default],
        ["doc-chapter", c.default],
        ["doc-colophon", s.default],
        ["doc-conclusion", d.default],
        ["doc-cover", m.default],
        ["doc-credit", p.default],
        ["doc-credits", f.default],
        ["doc-dedication", b.default],
        ["doc-endnote", h.default],
        ["doc-endnotes", y.default],
        ["doc-epigraph", g.default],
        ["doc-epilogue", E.default],
        ["doc-errata", C.default],
        ["doc-example", q.default],
        ["doc-footnote", _.default],
        ["doc-foreword", v.default],
        ["doc-glossary", w.default],
        ["doc-glossref", P.default],
        ["doc-index", j.default],
        ["doc-introduction", $.default],
        ["doc-noteref", B.default],
        ["doc-notice", I.default],
        ["doc-pagebreak", S.default],
        ["doc-pagefooter", k.default],
        ["doc-pageheader", U.default],
        ["doc-pagelist", W.default],
        ["doc-part", G.default],
        ["doc-preface", le.default],
        ["doc-prologue", ve.default],
        ["doc-pullquote", pe.default],
        ["doc-qna", F.default],
        ["doc-subtitle", L.default],
        ["doc-tip", D.default],
        ["doc-toc", z.default],
      ];
      e.default = oe;
    },
  }),
  sR = R({
    "../../node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [
          { module: "GRAPHICS", concept: { name: "graphics-object" } },
          { module: "ARIA", concept: { name: "img" } },
          { module: "ARIA", concept: { name: "article" } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "document"]],
      };
      e.default = t;
    },
  }),
  uR = R({
    "../../node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [
          { module: "GRAPHICS", concept: { name: "graphics-document" } },
          { module: "ARIA", concept: { name: "group" } },
          { module: "ARIA", concept: { name: "img" } },
          { module: "GRAPHICS", concept: { name: "graphics-symbol" } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"]],
      };
      e.default = t;
    },
  }),
  cR = R({
    "../../node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "img"]],
      };
      e.default = t;
    },
  }),
  dR = R({
    "../../node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = o(sR()),
        r = o(uR()),
        n = o(cR());
      function o(i) {
        return i && i.__esModule ? i : { default: i };
      }
      var a = [
        ["graphics-document", t.default],
        ["graphics-object", r.default],
        ["graphics-symbol", n.default],
      ];
      e.default = a;
    },
  }),
  ll = R({
    "../../node_modules/aria-query/lib/rolesMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = i(U0()),
        r = i(v_()),
        n = i(lR()),
        o = i(dR()),
        a = i(dn());
      function i(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function l(h, y) {
        var g = (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
        if (!g) {
          if (Array.isArray(h) || (g = s(h)) || (y && h && typeof h.length == "number")) {
            g && (h = g);
            var E = 0,
              C = function () {};
            return {
              s: C,
              n: function () {
                return E >= h.length ? { done: !0 } : { done: !1, value: h[E++] };
              },
              e: function (w) {
                throw w;
              },
              f: C,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var q,
          _ = !0,
          v = !1;
        return {
          s: function () {
            g = g.call(h);
          },
          n: function () {
            var w = g.next();
            return (_ = w.done), w;
          },
          e: function (w) {
            (v = !0), (q = w);
          },
          f: function () {
            try {
              _ || g.return == null || g.return();
            } finally {
              if (v) throw q;
            }
          },
        };
      }
      function u(h, y) {
        return p(h) || m(h, y) || s(h, y) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function s(h, y) {
        if (h) {
          if (typeof h == "string") return d(h, y);
          var g = {}.toString.call(h).slice(8, -1);
          return (
            g === "Object" && h.constructor && (g = h.constructor.name),
            g === "Map" || g === "Set"
              ? Array.from(h)
              : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)
              ? d(h, y)
              : void 0
          );
        }
      }
      function d(h, y) {
        (y == null || y > h.length) && (y = h.length);
        for (var g = 0, E = Array(y); g < y; g++) E[g] = h[g];
        return E;
      }
      function m(h, y) {
        var g = h == null ? null : (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
        if (g != null) {
          var E,
            C,
            q,
            _,
            v = [],
            w = !0,
            P = !1;
          try {
            if (((q = (g = g.call(h)).next), y === 0)) {
              if (Object(g) !== g) return;
              w = !1;
            } else for (; !(w = (E = q.call(g)).done) && (v.push(E.value), v.length !== y); w = !0);
          } catch (j) {
            (P = !0), (C = j);
          } finally {
            try {
              if (!w && g.return != null && ((_ = g.return()), Object(_) !== _)) return;
            } finally {
              if (P) throw C;
            }
          }
          return v;
        }
      }
      function p(h) {
        if (Array.isArray(h)) return h;
      }
      var f = [].concat(t.default, r.default, n.default, o.default);
      f.forEach(function (h) {
        var y = u(h, 2),
          g = y[1],
          E = l(g.superClass),
          C;
        try {
          for (E.s(); !(C = E.n()).done; ) {
            var q = C.value,
              _ = l(q),
              v;
            try {
              var w = function () {
                var P = v.value,
                  j = f.filter(function (k) {
                    var U = u(k, 1),
                      W = U[0];
                    return W === P;
                  })[0];
                if (j)
                  for (var $ = j[1], B = 0, I = Object.keys($.props); B < I.length; B++) {
                    var S = I[B];
                    Object.prototype.hasOwnProperty.call(g.props, S) || (g.props[S] = $.props[S]);
                  }
              };
              for (_.s(); !(v = _.n()).done; ) w();
            } catch (P) {
              _.e(P);
            } finally {
              _.f();
            }
          }
        } catch (P) {
          E.e(P);
        } finally {
          E.f();
        }
      });
      var b = {
        entries: function () {
          return f;
        },
        forEach: function (h) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
            g = l(f),
            E;
          try {
            for (g.s(); !(E = g.n()).done; ) {
              var C = u(E.value, 2),
                q = C[0],
                _ = C[1];
              h.call(y, _, q, f);
            }
          } catch (v) {
            g.e(v);
          } finally {
            g.f();
          }
        },
        get: function (h) {
          var y = f.filter(function (g) {
            return g[0] === h;
          })[0];
          return y && y[1];
        },
        has: function (h) {
          return !!b.get(h);
        },
        keys: function () {
          return f.map(function (h) {
            var y = u(h, 1),
              g = y[0];
            return g;
          });
        },
        values: function () {
          return f.map(function (h) {
            var y = u(h, 2),
              g = y[1];
            return g;
          });
        },
      };
      e.default = (0, a.default)(b, b.entries());
    },
  }),
  pR = R({
    "../../node_modules/aria-query/lib/elementRoleMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = n(dn()),
        r = n(ll());
      function n(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function o(_, v) {
        return c(_) || u(_, v) || i(_, v) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(_, v) {
        if (_) {
          if (typeof _ == "string") return l(_, v);
          var w = {}.toString.call(_).slice(8, -1);
          return (
            w === "Object" && _.constructor && (w = _.constructor.name),
            w === "Map" || w === "Set"
              ? Array.from(_)
              : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)
              ? l(_, v)
              : void 0
          );
        }
      }
      function l(_, v) {
        (v == null || v > _.length) && (v = _.length);
        for (var w = 0, P = Array(v); w < v; w++) P[w] = _[w];
        return P;
      }
      function u(_, v) {
        var w = _ == null ? null : (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
        if (w != null) {
          var P,
            j,
            $,
            B,
            I = [],
            S = !0,
            k = !1;
          try {
            if ((($ = (w = w.call(_)).next), v === 0)) {
              if (Object(w) !== w) return;
              S = !1;
            } else for (; !(S = (P = $.call(w)).done) && (I.push(P.value), I.length !== v); S = !0);
          } catch (U) {
            (k = !0), (j = U);
          } finally {
            try {
              if (!S && w.return != null && ((B = w.return()), Object(B) !== B)) return;
            } finally {
              if (k) throw j;
            }
          }
          return I;
        }
      }
      function c(_) {
        if (Array.isArray(_)) return _;
      }
      var s = [],
        d = r.default.keys();
      for (y = 0; y < d.length; y++)
        if (((m = d[y]), (p = r.default.get(m)), p))
          for (
            f = [].concat(p.baseConcepts, p.relatedConcepts),
              b = function () {
                var _ = f[h];
                if (_.module === "HTML") {
                  var v = _.concept;
                  if (v) {
                    var w = s.filter(function (B) {
                        return E(B[0], v);
                      })[0],
                      P;
                    w ? (P = w[1]) : (P = []);
                    for (var j = !0, $ = 0; $ < P.length; $++)
                      if (P[$] === m) {
                        j = !1;
                        break;
                      }
                    j && P.push(m), w || s.push([v, P]);
                  }
                }
              },
              h = 0;
            h < f.length;
            h++
          )
            b();
      var m,
        p,
        f,
        b,
        h,
        y,
        g = {
          entries: function () {
            return s;
          },
          forEach: function (_) {
            for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, w = 0, P = s; w < P.length; w++) {
              var j = o(P[w], 2),
                $ = j[0],
                B = j[1];
              _.call(v, B, $, s);
            }
          },
          get: function (_) {
            var v = s.filter(function (w) {
              return _.name === w[0].name && q(_.attributes, w[0].attributes);
            })[0];
            return v && v[1];
          },
          has: function (_) {
            return !!g.get(_);
          },
          keys: function () {
            return s.map(function (_) {
              var v = o(_, 1),
                w = v[0];
              return w;
            });
          },
          values: function () {
            return s.map(function (_) {
              var v = o(_, 2),
                w = v[1];
              return w;
            });
          },
        };
      function E(_, v) {
        return _.name === v.name && C(_.constraints, v.constraints) && q(_.attributes, v.attributes);
      }
      function C(_, v) {
        if ((_ === void 0 && v !== void 0) || (_ !== void 0 && v === void 0)) return !1;
        if (_ !== void 0 && v !== void 0) {
          if (_.length !== v.length) return !1;
          for (var w = 0; w < _.length; w++) if (_[w] !== v[w]) return !1;
        }
        return !0;
      }
      function q(_, v) {
        if ((_ === void 0 && v !== void 0) || (_ !== void 0 && v === void 0)) return !1;
        if (_ !== void 0 && v !== void 0) {
          if (_.length !== v.length) return !1;
          for (var w = 0; w < _.length; w++) {
            if (
              _[w].name !== v[w].name ||
              _[w].value !== v[w].value ||
              (_[w].constraints === void 0 && v[w].constraints !== void 0) ||
              (_[w].constraints !== void 0 && v[w].constraints === void 0)
            )
              return !1;
            if (_[w].constraints !== void 0 && v[w].constraints !== void 0) {
              if (_[w].constraints.length !== v[w].constraints.length) return !1;
              for (var P = 0; P < _[w].constraints.length; P++) if (_[w].constraints[P] !== v[w].constraints[P]) return !1;
            }
          }
        }
        return !0;
      }
      e.default = (0, t.default)(g, g.entries());
    },
  }),
  mR = R({
    "../../node_modules/aria-query/lib/roleElementMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = n(dn()),
        r = n(ll());
      function n(q) {
        return q && q.__esModule ? q : { default: q };
      }
      function o(q, _) {
        return c(q) || u(q, _) || i(q, _) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(q, _) {
        if (q) {
          if (typeof q == "string") return l(q, _);
          var v = {}.toString.call(q).slice(8, -1);
          return (
            v === "Object" && q.constructor && (v = q.constructor.name),
            v === "Map" || v === "Set"
              ? Array.from(q)
              : v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
              ? l(q, _)
              : void 0
          );
        }
      }
      function l(q, _) {
        (_ == null || _ > q.length) && (_ = q.length);
        for (var v = 0, w = Array(_); v < _; v++) w[v] = q[v];
        return w;
      }
      function u(q, _) {
        var v = q == null ? null : (typeof Symbol < "u" && q[Symbol.iterator]) || q["@@iterator"];
        if (v != null) {
          var w,
            P,
            j,
            $,
            B = [],
            I = !0,
            S = !1;
          try {
            if (((j = (v = v.call(q)).next), _ === 0)) {
              if (Object(v) !== v) return;
              I = !1;
            } else for (; !(I = (w = j.call(v)).done) && (B.push(w.value), B.length !== _); I = !0);
          } catch (k) {
            (S = !0), (P = k);
          } finally {
            try {
              if (!I && v.return != null && (($ = v.return()), Object($) !== $)) return;
            } finally {
              if (S) throw P;
            }
          }
          return B;
        }
      }
      function c(q) {
        if (Array.isArray(q)) return q;
      }
      var s = [],
        d = r.default.keys();
      for (E = 0; E < d.length; E++)
        if (((m = d[E]), (p = r.default.get(m)), (f = []), p)) {
          for (b = [].concat(p.baseConcepts, p.relatedConcepts), g = 0; g < b.length; g++)
            (h = b[g]), h.module === "HTML" && ((y = h.concept), y != null && f.push(y));
          f.length > 0 && s.push([m, f]);
        }
      var m,
        p,
        f,
        b,
        h,
        y,
        g,
        E,
        C = {
          entries: function () {
            return s;
          },
          forEach: function (q) {
            for (var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, v = 0, w = s; v < w.length; v++) {
              var P = o(w[v], 2),
                j = P[0],
                $ = P[1];
              q.call(_, $, j, s);
            }
          },
          get: function (q) {
            var _ = s.filter(function (v) {
              return v[0] === q;
            })[0];
            return _ && _[1];
          },
          has: function (q) {
            return !!C.get(q);
          },
          keys: function () {
            return s.map(function (q) {
              var _ = o(q, 1),
                v = _[0];
              return v;
            });
          },
          values: function () {
            return s.map(function (q) {
              var _ = o(q, 2),
                v = _[1];
              return v;
            });
          },
        };
      e.default = (0, t.default)(C, C.entries());
    },
  }),
  dp = R({
    "../../node_modules/aria-query/lib/index.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0);
      var t = i(S0()),
        r = i(A0()),
        n = i(ll()),
        o = i(pR()),
        a = i(mR());
      function i(l) {
        return l && l.__esModule ? l : { default: l };
      }
      (e.aria = t.default), (e.dom = r.default), (e.roles = n.default), (e.elementRoles = o.default), (e.roleElements = a.default);
    },
  }),
  fR = R({
    "../../node_modules/color-name/index.js"(e, t) {
      t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
  }),
  pp = R({
    "../../node_modules/color-convert/conversions.js"(e, t) {
      var r = fR(),
        n = {};
      for (let i of Object.keys(r)) n[r[i]] = i;
      var o = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] },
      };
      t.exports = o;
      for (let i of Object.keys(o)) {
        if (!("channels" in o[i])) throw new Error("missing channels property: " + i);
        if (!("labels" in o[i])) throw new Error("missing channel labels property: " + i);
        if (o[i].labels.length !== o[i].channels) throw new Error("channel and label counts mismatch: " + i);
        let { channels: l, labels: u } = o[i];
        delete o[i].channels,
          delete o[i].labels,
          Object.defineProperty(o[i], "channels", { value: l }),
          Object.defineProperty(o[i], "labels", { value: u });
      }
      (o.rgb.hsl = function (i) {
        let l = i[0] / 255,
          u = i[1] / 255,
          c = i[2] / 255,
          s = Math.min(l, u, c),
          d = Math.max(l, u, c),
          m = d - s,
          p,
          f;
        d === s ? (p = 0) : l === d ? (p = (u - c) / m) : u === d ? (p = 2 + (c - l) / m) : c === d && (p = 4 + (l - u) / m),
          (p = Math.min(p * 60, 360)),
          p < 0 && (p += 360);
        let b = (s + d) / 2;
        return d === s ? (f = 0) : b <= 0.5 ? (f = m / (d + s)) : (f = m / (2 - d - s)), [p, f * 100, b * 100];
      }),
        (o.rgb.hsv = function (i) {
          let l,
            u,
            c,
            s,
            d,
            m = i[0] / 255,
            p = i[1] / 255,
            f = i[2] / 255,
            b = Math.max(m, p, f),
            h = b - Math.min(m, p, f),
            y = function (g) {
              return (b - g) / 6 / h + 1 / 2;
            };
          return (
            h === 0
              ? ((s = 0), (d = 0))
              : ((d = h / b),
                (l = y(m)),
                (u = y(p)),
                (c = y(f)),
                m === b ? (s = c - u) : p === b ? (s = 1 / 3 + l - c) : f === b && (s = 2 / 3 + u - l),
                s < 0 ? (s += 1) : s > 1 && (s -= 1)),
            [s * 360, d * 100, b * 100]
          );
        }),
        (o.rgb.hwb = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s = o.rgb.hsl(i)[0],
            d = (1 / 255) * Math.min(l, Math.min(u, c));
          return (c = 1 - (1 / 255) * Math.max(l, Math.max(u, c))), [s, d * 100, c * 100];
        }),
        (o.rgb.cmyk = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255,
            s = Math.min(1 - l, 1 - u, 1 - c),
            d = (1 - l - s) / (1 - s) || 0,
            m = (1 - u - s) / (1 - s) || 0,
            p = (1 - c - s) / (1 - s) || 0;
          return [d * 100, m * 100, p * 100, s * 100];
        });
      function a(i, l) {
        return (i[0] - l[0]) ** 2 + (i[1] - l[1]) ** 2 + (i[2] - l[2]) ** 2;
      }
      (o.rgb.keyword = function (i) {
        let l = n[i];
        if (l) return l;
        let u = 1 / 0,
          c;
        for (let s of Object.keys(r)) {
          let d = r[s],
            m = a(i, d);
          m < u && ((u = m), (c = s));
        }
        return c;
      }),
        (o.keyword.rgb = function (i) {
          return r[i];
        }),
        (o.rgb.xyz = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255;
          (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
            (u = u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92),
            (c = c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92);
          let s = l * 0.4124 + u * 0.3576 + c * 0.1805,
            d = l * 0.2126 + u * 0.7152 + c * 0.0722,
            m = l * 0.0193 + u * 0.1192 + c * 0.9505;
          return [s * 100, d * 100, m * 100];
        }),
        (o.rgb.lab = function (i) {
          let l = o.rgb.xyz(i),
            u = l[0],
            c = l[1],
            s = l[2];
          (u /= 95.047),
            (c /= 100),
            (s /= 108.883),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
            (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116);
          let d = 116 * c - 16,
            m = 500 * (u - c),
            p = 200 * (c - s);
          return [d, m, p];
        }),
        (o.hsl.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100,
            s,
            d,
            m;
          if (u === 0) return (m = c * 255), [m, m, m];
          c < 0.5 ? (s = c * (1 + u)) : (s = c + u - c * u);
          let p = 2 * c - s,
            f = [0, 0, 0];
          for (let b = 0; b < 3; b++)
            (d = l + (1 / 3) * -(b - 1)),
              d < 0 && d++,
              d > 1 && d--,
              6 * d < 1 ? (m = p + (s - p) * 6 * d) : 2 * d < 1 ? (m = s) : 3 * d < 2 ? (m = p + (s - p) * (2 / 3 - d) * 6) : (m = p),
              (f[b] = m * 255);
          return f;
        }),
        (o.hsl.hsv = function (i) {
          let l = i[0],
            u = i[1] / 100,
            c = i[2] / 100,
            s = u,
            d = Math.max(c, 0.01);
          (c *= 2), (u *= c <= 1 ? c : 2 - c), (s *= d <= 1 ? d : 2 - d);
          let m = (c + u) / 2,
            p = c === 0 ? (2 * s) / (d + s) : (2 * u) / (c + u);
          return [l, p * 100, m * 100];
        }),
        (o.hsv.rgb = function (i) {
          let l = i[0] / 60,
            u = i[1] / 100,
            c = i[2] / 100,
            s = Math.floor(l) % 6,
            d = l - Math.floor(l),
            m = 255 * c * (1 - u),
            p = 255 * c * (1 - u * d),
            f = 255 * c * (1 - u * (1 - d));
          switch (((c *= 255), s)) {
            case 0:
              return [c, f, m];
            case 1:
              return [p, c, m];
            case 2:
              return [m, c, f];
            case 3:
              return [m, p, c];
            case 4:
              return [f, m, c];
            case 5:
              return [c, m, p];
          }
        }),
        (o.hsv.hsl = function (i) {
          let l = i[0],
            u = i[1] / 100,
            c = i[2] / 100,
            s = Math.max(c, 0.01),
            d,
            m;
          m = (2 - u) * c;
          let p = (2 - u) * s;
          return (d = u * s), (d /= p <= 1 ? p : 2 - p), (d = d || 0), (m /= 2), [l, d * 100, m * 100];
        }),
        (o.hwb.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100,
            s = u + c,
            d;
          s > 1 && ((u /= s), (c /= s));
          let m = Math.floor(6 * l),
            p = 1 - c;
          (d = 6 * l - m), m & 1 && (d = 1 - d);
          let f = u + d * (p - u),
            b,
            h,
            y;
          switch (m) {
            default:
            case 6:
            case 0:
              (b = p), (h = f), (y = u);
              break;
            case 1:
              (b = f), (h = p), (y = u);
              break;
            case 2:
              (b = u), (h = p), (y = f);
              break;
            case 3:
              (b = u), (h = f), (y = p);
              break;
            case 4:
              (b = f), (h = u), (y = p);
              break;
            case 5:
              (b = p), (h = u), (y = f);
              break;
          }
          return [b * 255, h * 255, y * 255];
        }),
        (o.cmyk.rgb = function (i) {
          let l = i[0] / 100,
            u = i[1] / 100,
            c = i[2] / 100,
            s = i[3] / 100,
            d = 1 - Math.min(1, l * (1 - s) + s),
            m = 1 - Math.min(1, u * (1 - s) + s),
            p = 1 - Math.min(1, c * (1 - s) + s);
          return [d * 255, m * 255, p * 255];
        }),
        (o.xyz.rgb = function (i) {
          let l = i[0] / 100,
            u = i[1] / 100,
            c = i[2] / 100,
            s,
            d,
            m;
          return (
            (s = l * 3.2406 + u * -1.5372 + c * -0.4986),
            (d = l * -0.9689 + u * 1.8758 + c * 0.0415),
            (m = l * 0.0557 + u * -0.204 + c * 1.057),
            (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92),
            (d = d > 0.0031308 ? 1.055 * d ** (1 / 2.4) - 0.055 : d * 12.92),
            (m = m > 0.0031308 ? 1.055 * m ** (1 / 2.4) - 0.055 : m * 12.92),
            (s = Math.min(Math.max(0, s), 1)),
            (d = Math.min(Math.max(0, d), 1)),
            (m = Math.min(Math.max(0, m), 1)),
            [s * 255, d * 255, m * 255]
          );
        }),
        (o.xyz.lab = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2];
          (l /= 95.047),
            (u /= 100),
            (c /= 108.883),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
            (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116);
          let s = 116 * u - 16,
            d = 500 * (l - u),
            m = 200 * (u - c);
          return [s, d, m];
        }),
        (o.lab.xyz = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s,
            d,
            m;
          (d = (l + 16) / 116), (s = u / 500 + d), (m = d - c / 200);
          let p = d ** 3,
            f = s ** 3,
            b = m ** 3;
          return (
            (d = p > 0.008856 ? p : (d - 16 / 116) / 7.787),
            (s = f > 0.008856 ? f : (s - 16 / 116) / 7.787),
            (m = b > 0.008856 ? b : (m - 16 / 116) / 7.787),
            (s *= 95.047),
            (d *= 100),
            (m *= 108.883),
            [s, d, m]
          );
        }),
        (o.lab.lch = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2],
            s;
          (s = (Math.atan2(c, u) * 360) / 2 / Math.PI), s < 0 && (s += 360);
          let d = Math.sqrt(u * u + c * c);
          return [l, d, s];
        }),
        (o.lch.lab = function (i) {
          let l = i[0],
            u = i[1],
            c = (i[2] / 360) * 2 * Math.PI,
            s = u * Math.cos(c),
            d = u * Math.sin(c);
          return [l, s, d];
        }),
        (o.rgb.ansi16 = function (i, l = null) {
          let [u, c, s] = i,
            d = l === null ? o.rgb.hsv(i)[2] : l;
          if (((d = Math.round(d / 50)), d === 0)) return 30;
          let m = 30 + ((Math.round(s / 255) << 2) | (Math.round(c / 255) << 1) | Math.round(u / 255));
          return d === 2 && (m += 60), m;
        }),
        (o.hsv.ansi16 = function (i) {
          return o.rgb.ansi16(o.hsv.rgb(i), i[2]);
        }),
        (o.rgb.ansi256 = function (i) {
          let l = i[0],
            u = i[1],
            c = i[2];
          return l === u && u === c
            ? l < 8
              ? 16
              : l > 248
              ? 231
              : Math.round(((l - 8) / 247) * 24) + 232
            : 16 + 36 * Math.round((l / 255) * 5) + 6 * Math.round((u / 255) * 5) + Math.round((c / 255) * 5);
        }),
        (o.ansi16.rgb = function (i) {
          let l = i % 10;
          if (l === 0 || l === 7) return i > 50 && (l += 3.5), (l = (l / 10.5) * 255), [l, l, l];
          let u = (~~(i > 50) + 1) * 0.5,
            c = (l & 1) * u * 255,
            s = ((l >> 1) & 1) * u * 255,
            d = ((l >> 2) & 1) * u * 255;
          return [c, s, d];
        }),
        (o.ansi256.rgb = function (i) {
          if (i >= 232) {
            let d = (i - 232) * 10 + 8;
            return [d, d, d];
          }
          i -= 16;
          let l,
            u = (Math.floor(i / 36) / 5) * 255,
            c = (Math.floor((l = i % 36) / 6) / 5) * 255,
            s = ((l % 6) / 5) * 255;
          return [u, c, s];
        }),
        (o.rgb.hex = function (i) {
          let l = (((Math.round(i[0]) & 255) << 16) + ((Math.round(i[1]) & 255) << 8) + (Math.round(i[2]) & 255))
            .toString(16)
            .toUpperCase();
          return "000000".substring(l.length) + l;
        }),
        (o.hex.rgb = function (i) {
          let l = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!l) return [0, 0, 0];
          let u = l[0];
          l[0].length === 3 &&
            (u = u
              .split("")
              .map((p) => p + p)
              .join(""));
          let c = parseInt(u, 16),
            s = (c >> 16) & 255,
            d = (c >> 8) & 255,
            m = c & 255;
          return [s, d, m];
        }),
        (o.rgb.hcg = function (i) {
          let l = i[0] / 255,
            u = i[1] / 255,
            c = i[2] / 255,
            s = Math.max(Math.max(l, u), c),
            d = Math.min(Math.min(l, u), c),
            m = s - d,
            p,
            f;
          return (
            m < 1 ? (p = d / (1 - m)) : (p = 0),
            m <= 0 ? (f = 0) : s === l ? (f = ((u - c) / m) % 6) : s === u ? (f = 2 + (c - l) / m) : (f = 4 + (l - u) / m),
            (f /= 6),
            (f %= 1),
            [f * 360, m * 100, p * 100]
          );
        }),
        (o.hsl.hcg = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = u < 0.5 ? 2 * l * u : 2 * l * (1 - u),
            s = 0;
          return c < 1 && (s = (u - 0.5 * c) / (1 - c)), [i[0], c * 100, s * 100];
        }),
        (o.hsv.hcg = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l * u,
            s = 0;
          return c < 1 && (s = (u - c) / (1 - c)), [i[0], c * 100, s * 100];
        }),
        (o.hcg.rgb = function (i) {
          let l = i[0] / 360,
            u = i[1] / 100,
            c = i[2] / 100;
          if (u === 0) return [c * 255, c * 255, c * 255];
          let s = [0, 0, 0],
            d = (l % 1) * 6,
            m = d % 1,
            p = 1 - m,
            f = 0;
          switch (Math.floor(d)) {
            case 0:
              (s[0] = 1), (s[1] = m), (s[2] = 0);
              break;
            case 1:
              (s[0] = p), (s[1] = 1), (s[2] = 0);
              break;
            case 2:
              (s[0] = 0), (s[1] = 1), (s[2] = m);
              break;
            case 3:
              (s[0] = 0), (s[1] = p), (s[2] = 1);
              break;
            case 4:
              (s[0] = m), (s[1] = 0), (s[2] = 1);
              break;
            default:
              (s[0] = 1), (s[1] = 0), (s[2] = p);
          }
          return (f = (1 - u) * c), [(u * s[0] + f) * 255, (u * s[1] + f) * 255, (u * s[2] + f) * 255];
        }),
        (o.hcg.hsv = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l + u * (1 - l),
            s = 0;
          return c > 0 && (s = l / c), [i[0], s * 100, c * 100];
        }),
        (o.hcg.hsl = function (i) {
          let l = i[1] / 100,
            u = (i[2] / 100) * (1 - l) + 0.5 * l,
            c = 0;
          return u > 0 && u < 0.5 ? (c = l / (2 * u)) : u >= 0.5 && u < 1 && (c = l / (2 * (1 - u))), [i[0], c * 100, u * 100];
        }),
        (o.hcg.hwb = function (i) {
          let l = i[1] / 100,
            u = i[2] / 100,
            c = l + u * (1 - l);
          return [i[0], (c - l) * 100, (1 - c) * 100];
        }),
        (o.hwb.hcg = function (i) {
          let l = i[1] / 100,
            u = 1 - i[2] / 100,
            c = u - l,
            s = 0;
          return c < 1 && (s = (u - c) / (1 - c)), [i[0], c * 100, s * 100];
        }),
        (o.apple.rgb = function (i) {
          return [(i[0] / 65535) * 255, (i[1] / 65535) * 255, (i[2] / 65535) * 255];
        }),
        (o.rgb.apple = function (i) {
          return [(i[0] / 255) * 65535, (i[1] / 255) * 65535, (i[2] / 255) * 65535];
        }),
        (o.gray.rgb = function (i) {
          return [(i[0] / 100) * 255, (i[0] / 100) * 255, (i[0] / 100) * 255];
        }),
        (o.gray.hsl = function (i) {
          return [0, 0, i[0]];
        }),
        (o.gray.hsv = o.gray.hsl),
        (o.gray.hwb = function (i) {
          return [0, 100, i[0]];
        }),
        (o.gray.cmyk = function (i) {
          return [0, 0, 0, i[0]];
        }),
        (o.gray.lab = function (i) {
          return [i[0], 0, 0];
        }),
        (o.gray.hex = function (i) {
          let l = Math.round((i[0] / 100) * 255) & 255,
            u = ((l << 16) + (l << 8) + l).toString(16).toUpperCase();
          return "000000".substring(u.length) + u;
        }),
        (o.rgb.gray = function (i) {
          return [((i[0] + i[1] + i[2]) / 3 / 255) * 100];
        });
    },
  }),
  hR = R({
    "../../node_modules/color-convert/route.js"(e, t) {
      var r = pp();
      function n() {
        let l = {},
          u = Object.keys(r);
        for (let c = u.length, s = 0; s < c; s++) l[u[s]] = { distance: -1, parent: null };
        return l;
      }
      function o(l) {
        let u = n(),
          c = [l];
        for (u[l].distance = 0; c.length; ) {
          let s = c.pop(),
            d = Object.keys(r[s]);
          for (let m = d.length, p = 0; p < m; p++) {
            let f = d[p],
              b = u[f];
            b.distance === -1 && ((b.distance = u[s].distance + 1), (b.parent = s), c.unshift(f));
          }
        }
        return u;
      }
      function a(l, u) {
        return function (c) {
          return u(l(c));
        };
      }
      function i(l, u) {
        let c = [u[l].parent, l],
          s = r[u[l].parent][l],
          d = u[l].parent;
        for (; u[d].parent; ) c.unshift(u[d].parent), (s = a(r[u[d].parent][d], s)), (d = u[d].parent);
        return (s.conversion = c), s;
      }
      t.exports = function (l) {
        let u = o(l),
          c = {},
          s = Object.keys(u);
        for (let d = s.length, m = 0; m < d; m++) {
          let p = s[m];
          u[p].parent !== null && (c[p] = i(p, u));
        }
        return c;
      };
    },
  }),
  bR = R({
    "../../node_modules/color-convert/index.js"(e, t) {
      var r = pp(),
        n = hR(),
        o = {},
        a = Object.keys(r);
      function i(u) {
        let c = function (...s) {
          let d = s[0];
          return d == null ? d : (d.length > 1 && (s = d), u(s));
        };
        return "conversion" in u && (c.conversion = u.conversion), c;
      }
      function l(u) {
        let c = function (...s) {
          let d = s[0];
          if (d == null) return d;
          d.length > 1 && (s = d);
          let m = u(s);
          if (typeof m == "object") for (let p = m.length, f = 0; f < p; f++) m[f] = Math.round(m[f]);
          return m;
        };
        return "conversion" in u && (c.conversion = u.conversion), c;
      }
      a.forEach((u) => {
        (o[u] = {}),
          Object.defineProperty(o[u], "channels", { value: r[u].channels }),
          Object.defineProperty(o[u], "labels", { value: r[u].labels });
        let c = n(u);
        Object.keys(c).forEach((s) => {
          let d = c[s];
          (o[u][s] = l(d)), (o[u][s].raw = i(d));
        });
      }),
        (t.exports = o);
    },
  }),
  yR = R({
    "../../node_modules/ansi-styles/index.js"(e, t) {
      var r =
          (d, m) =>
          (...p) =>
            `\x1B[${d(...p) + m}m`,
        n =
          (d, m) =>
          (...p) => {
            let f = d(...p);
            return `\x1B[${38 + m};5;${f}m`;
          },
        o =
          (d, m) =>
          (...p) => {
            let f = d(...p);
            return `\x1B[${38 + m};2;${f[0]};${f[1]};${f[2]}m`;
          },
        a = (d) => d,
        i = (d, m, p) => [d, m, p],
        l = (d, m, p) => {
          Object.defineProperty(d, m, {
            get: () => {
              let f = p();
              return Object.defineProperty(d, m, { value: f, enumerable: !0, configurable: !0 }), f;
            },
            enumerable: !0,
            configurable: !0,
          });
        },
        u,
        c = (d, m, p, f) => {
          u === void 0 && (u = bR());
          let b = f ? 10 : 0,
            h = {};
          for (let [y, g] of Object.entries(u)) {
            let E = y === "ansi16" ? "ansi" : y;
            y === m ? (h[E] = d(p, b)) : typeof g == "object" && (h[E] = d(g[m], b));
          }
          return h;
        };
      function s() {
        let d = new Map(),
          m = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (m.color.gray = m.color.blackBright),
          (m.bgColor.bgGray = m.bgColor.bgBlackBright),
          (m.color.grey = m.color.blackBright),
          (m.bgColor.bgGrey = m.bgColor.bgBlackBright);
        for (let [p, f] of Object.entries(m)) {
          for (let [b, h] of Object.entries(f))
            (m[b] = { open: `\x1B[${h[0]}m`, close: `\x1B[${h[1]}m` }), (f[b] = m[b]), d.set(h[0], h[1]);
          Object.defineProperty(m, p, { value: f, enumerable: !1 });
        }
        return (
          Object.defineProperty(m, "codes", { value: d, enumerable: !1 }),
          (m.color.close = "\x1B[39m"),
          (m.bgColor.close = "\x1B[49m"),
          l(m.color, "ansi", () => c(r, "ansi16", a, !1)),
          l(m.color, "ansi256", () => c(n, "ansi256", a, !1)),
          l(m.color, "ansi16m", () => c(o, "rgb", i, !1)),
          l(m.bgColor, "ansi", () => c(r, "ansi16", a, !0)),
          l(m.bgColor, "ansi256", () => c(n, "ansi256", a, !0)),
          l(m.bgColor, "ansi16m", () => c(o, "rgb", i, !0)),
          m
        );
      }
      Object.defineProperty(t, "exports", { enumerable: !0, get: s });
    },
  }),
  gR = R({
    "../../node_modules/supports-color/browser.js"(e, t) {
      t.exports = { stdout: !1, stderr: !1 };
    },
  }),
  vR = R({
    "../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/util.js"(e, t) {
      var r = (o, a, i) => {
          let l = o.indexOf(a);
          if (l === -1) return o;
          let u = a.length,
            c = 0,
            s = "";
          do (s += o.substr(c, l - c) + a + i), (c = l + u), (l = o.indexOf(a, c));
          while (l !== -1);
          return (s += o.substr(c)), s;
        },
        n = (o, a, i, l) => {
          let u = 0,
            c = "";
          do {
            let s = o[l - 1] === "\r";
            (c +=
              o.substr(u, (s ? l - 1 : l) - u) +
              a +
              (s
                ? `\r
`
                : `
`) +
              i),
              (u = l + 1),
              (l = o.indexOf(
                `
`,
                u
              ));
          } while (l !== -1);
          return (c += o.substr(u)), c;
        };
      t.exports = { stringReplaceAll: r, stringEncaseCRLFWithFirstIndex: n };
    },
  }),
  _R = R({
    "../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/templates.js"(e, t) {
      var r =
          /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        n = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        o = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        a = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi,
        i = new Map([
          [
            "n",
            `
`,
          ],
          ["r", "\r"],
          ["t", "	"],
          ["b", "\b"],
          ["f", "\f"],
          ["v", "\v"],
          ["0", "\0"],
          ["\\", "\\"],
          ["e", "\x1B"],
          ["a", "\x07"],
        ]);
      function l(d) {
        let m = d[0] === "u",
          p = d[1] === "{";
        return (m && !p && d.length === 5) || (d[0] === "x" && d.length === 3)
          ? String.fromCharCode(parseInt(d.slice(1), 16))
          : m && p
          ? String.fromCodePoint(parseInt(d.slice(2, -1), 16))
          : i.get(d) || d;
      }
      function u(d, m) {
        let p = [],
          f = m.trim().split(/\s*,\s*/g),
          b;
        for (let h of f) {
          let y = Number(h);
          if (!Number.isNaN(y)) p.push(y);
          else if ((b = h.match(o))) p.push(b[2].replace(a, (g, E, C) => (E ? l(E) : C)));
          else throw new Error(`Invalid Chalk template style argument: ${h} (in style '${d}')`);
        }
        return p;
      }
      function c(d) {
        n.lastIndex = 0;
        let m = [],
          p;
        for (; (p = n.exec(d)) !== null; ) {
          let f = p[1];
          if (p[2]) {
            let b = u(f, p[2]);
            m.push([f].concat(b));
          } else m.push([f]);
        }
        return m;
      }
      function s(d, m) {
        let p = {};
        for (let b of m) for (let h of b.styles) p[h[0]] = b.inverse ? null : h.slice(1);
        let f = d;
        for (let [b, h] of Object.entries(p))
          if (Array.isArray(h)) {
            if (!(b in f)) throw new Error(`Unknown Chalk style: ${b}`);
            f = h.length > 0 ? f[b](...h) : f[b];
          }
        return f;
      }
      t.exports = (d, m) => {
        let p = [],
          f = [],
          b = [];
        if (
          (m.replace(r, (h, y, g, E, C, q) => {
            if (y) b.push(l(y));
            else if (E) {
              let _ = b.join("");
              (b = []), f.push(p.length === 0 ? _ : s(d, p)(_)), p.push({ inverse: g, styles: c(E) });
            } else if (C) {
              if (p.length === 0) throw new Error("Found extraneous } in Chalk template literal");
              f.push(s(d, p)(b.join(""))), (b = []), p.pop();
            } else b.push(q);
          }),
          f.push(b.join("")),
          p.length > 0)
        ) {
          let h = `Chalk template literal is missing ${p.length} closing bracket${p.length === 1 ? "" : "s"} (\`}\`)`;
          throw new Error(h);
        }
        return f.join("");
      };
    },
  }),
  mp = R({
    "../../node_modules/@testing-library/jest-dom/node_modules/chalk/source/index.js"(e, t) {
      var r = yR(),
        { stdout: n, stderr: o } = gR(),
        { stringReplaceAll: a, stringEncaseCRLFWithFirstIndex: i } = vR(),
        l = ["ansi", "ansi", "ansi256", "ansi16m"],
        u = Object.create(null),
        c = (q, _ = {}) => {
          if (_.level > 3 || _.level < 0) throw new Error("The `level` option should be an integer from 0 to 3");
          let v = n ? n.level : 0;
          q.level = _.level === void 0 ? v : _.level;
        },
        s = class {
          constructor(q) {
            return d(q);
          }
        },
        d = (q) => {
          let _ = {};
          return (
            c(_, q),
            (_.template = (...v) => E(_.template, ...v)),
            Object.setPrototypeOf(_, m.prototype),
            Object.setPrototypeOf(_.template, _),
            (_.template.constructor = () => {
              throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
            }),
            (_.template.Instance = s),
            _.template
          );
        };
      function m(q) {
        return d(q);
      }
      for (let [q, _] of Object.entries(r))
        u[q] = {
          get() {
            let v = h(this, b(_.open, _.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, q, { value: v }), v;
          },
        };
      u.visible = {
        get() {
          let q = h(this, this._styler, !0);
          return Object.defineProperty(this, "visible", { value: q }), q;
        },
      };
      var p = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
      for (let q of p)
        u[q] = {
          get() {
            let { level: _ } = this;
            return function (...v) {
              let w = b(r.color[l[_]][q](...v), r.color.close, this._styler);
              return h(this, w, this._isEmpty);
            };
          },
        };
      for (let q of p) {
        let _ = "bg" + q[0].toUpperCase() + q.slice(1);
        u[_] = {
          get() {
            let { level: v } = this;
            return function (...w) {
              let P = b(r.bgColor[l[v]][q](...w), r.bgColor.close, this._styler);
              return h(this, P, this._isEmpty);
            };
          },
        };
      }
      var f = Object.defineProperties(() => {}, {
          ...u,
          level: {
            enumerable: !0,
            get() {
              return this._generator.level;
            },
            set(q) {
              this._generator.level = q;
            },
          },
        }),
        b = (q, _, v) => {
          let w, P;
          return (
            v === void 0 ? ((w = q), (P = _)) : ((w = v.openAll + q), (P = _ + v.closeAll)),
            { open: q, close: _, openAll: w, closeAll: P, parent: v }
          );
        },
        h = (q, _, v) => {
          let w = (...P) => y(w, P.length === 1 ? "" + P[0] : P.join(" "));
          return (w.__proto__ = f), (w._generator = q), (w._styler = _), (w._isEmpty = v), w;
        },
        y = (q, _) => {
          if (q.level <= 0 || !_) return q._isEmpty ? "" : _;
          let v = q._styler;
          if (v === void 0) return _;
          let { openAll: w, closeAll: P } = v;
          if (_.indexOf("\x1B") !== -1) for (; v !== void 0; ) (_ = a(_, v.close, v.open)), (v = v.parent);
          let j = _.indexOf(`
`);
          return j !== -1 && (_ = i(_, P, w, j)), w + _ + P;
        },
        g,
        E = (q, ..._) => {
          let [v] = _;
          if (!Array.isArray(v)) return _.join(" ");
          let w = _.slice(1),
            P = [v.raw[0]];
          for (let j = 1; j < v.length; j++) P.push(String(w[j - 1]).replace(/[{}\\]/g, "\\$&"), String(v.raw[j]));
          return g === void 0 && (g = _R()), g(q, P.join(""));
        };
      Object.defineProperties(m.prototype, u);
      var C = m();
      (C.supportsColor = n),
        (C.stderr = m({ level: o ? o.level : 0 })),
        (C.stderr.supportsColor = o),
        (C.Level = { None: 0, Basic: 1, Ansi256: 2, TrueColor: 3, 0: "None", 1: "Basic", 2: "Ansi256", 3: "TrueColor" }),
        (t.exports = C);
    },
  }),
  RR = R({
    "../../node_modules/lodash/_listCacheClear.js"(e, t) {
      function r() {
        (this.__data__ = []), (this.size = 0);
      }
      t.exports = r;
    },
  }),
  fp = R({
    "../../node_modules/lodash/eq.js"(e, t) {
      function r(n, o) {
        return n === o || (n !== n && o !== o);
      }
      t.exports = r;
    },
  }),
  po = R({
    "../../node_modules/lodash/_assocIndexOf.js"(e, t) {
      var r = fp();
      function n(o, a) {
        for (var i = o.length; i--; ) if (r(o[i][0], a)) return i;
        return -1;
      }
      t.exports = n;
    },
  }),
  wR = R({
    "../../node_modules/lodash/_listCacheDelete.js"(e, t) {
      var r = po(),
        n = Array.prototype,
        o = n.splice;
      function a(i) {
        var l = this.__data__,
          u = r(l, i);
        if (u < 0) return !1;
        var c = l.length - 1;
        return u == c ? l.pop() : o.call(l, u, 1), --this.size, !0;
      }
      t.exports = a;
    },
  }),
  CR = R({
    "../../node_modules/lodash/_listCacheGet.js"(e, t) {
      var r = po();
      function n(o) {
        var a = this.__data__,
          i = r(a, o);
        return i < 0 ? void 0 : a[i][1];
      }
      t.exports = n;
    },
  }),
  qR = R({
    "../../node_modules/lodash/_listCacheHas.js"(e, t) {
      var r = po();
      function n(o) {
        return r(this.__data__, o) > -1;
      }
      t.exports = n;
    },
  }),
  ER = R({
    "../../node_modules/lodash/_listCacheSet.js"(e, t) {
      var r = po();
      function n(o, a) {
        var i = this.__data__,
          l = r(i, o);
        return l < 0 ? (++this.size, i.push([o, a])) : (i[l][1] = a), this;
      }
      t.exports = n;
    },
  }),
  mo = R({
    "../../node_modules/lodash/_ListCache.js"(e, t) {
      var r = RR(),
        n = wR(),
        o = CR(),
        a = qR(),
        i = ER();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = o),
        (l.prototype.has = a),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  PR = R({
    "../../node_modules/lodash/_stackClear.js"(e, t) {
      var r = mo();
      function n() {
        (this.__data__ = new r()), (this.size = 0);
      }
      t.exports = n;
    },
  }),
  OR = R({
    "../../node_modules/lodash/_stackDelete.js"(e, t) {
      function r(n) {
        var o = this.__data__,
          a = o.delete(n);
        return (this.size = o.size), a;
      }
      t.exports = r;
    },
  }),
  TR = R({
    "../../node_modules/lodash/_stackGet.js"(e, t) {
      function r(n) {
        return this.__data__.get(n);
      }
      t.exports = r;
    },
  }),
  SR = R({
    "../../node_modules/lodash/_stackHas.js"(e, t) {
      function r(n) {
        return this.__data__.has(n);
      }
      t.exports = r;
    },
  }),
  hp = R({
    "../../node_modules/lodash/_freeGlobal.js"(e, t) {
      var r = typeof global == "object" && global && global.Object === Object && global;
      t.exports = r;
    },
  }),
  vt = R({
    "../../node_modules/lodash/_root.js"(e, t) {
      var r = hp(),
        n = typeof self == "object" && self && self.Object === Object && self,
        o = r || n || Function("return this")();
      t.exports = o;
    },
  }),
  sl = R({
    "../../node_modules/lodash/_Symbol.js"(e, t) {
      var r = vt(),
        n = r.Symbol;
      t.exports = n;
    },
  }),
  AR = R({
    "../../node_modules/lodash/_getRawTag.js"(e, t) {
      var r = sl(),
        n = Object.prototype,
        o = n.hasOwnProperty,
        a = n.toString,
        i = r ? r.toStringTag : void 0;
      function l(u) {
        var c = o.call(u, i),
          s = u[i];
        try {
          u[i] = void 0;
          var d = !0;
        } catch {}
        var m = a.call(u);
        return d && (c ? (u[i] = s) : delete u[i]), m;
      }
      t.exports = l;
    },
  }),
  MR = R({
    "../../node_modules/lodash/_objectToString.js"(e, t) {
      var r = Object.prototype,
        n = r.toString;
      function o(a) {
        return n.call(a);
      }
      t.exports = o;
    },
  }),
  fo = R({
    "../../node_modules/lodash/_baseGetTag.js"(e, t) {
      var r = sl(),
        n = AR(),
        o = MR(),
        a = "[object Null]",
        i = "[object Undefined]",
        l = r ? r.toStringTag : void 0;
      function u(c) {
        return c == null ? (c === void 0 ? i : a) : l && l in Object(c) ? n(c) : o(c);
      }
      t.exports = u;
    },
  }),
  bp = R({
    "../../node_modules/lodash/isObject.js"(e, t) {
      function r(n) {
        var o = typeof n;
        return n != null && (o == "object" || o == "function");
      }
      t.exports = r;
    },
  }),
  yp = R({
    "../../node_modules/lodash/isFunction.js"(e, t) {
      var r = fo(),
        n = bp(),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        i = "[object GeneratorFunction]",
        l = "[object Proxy]";
      function u(c) {
        if (!n(c)) return !1;
        var s = r(c);
        return s == a || s == i || s == o || s == l;
      }
      t.exports = u;
    },
  }),
  xR = R({
    "../../node_modules/lodash/_coreJsData.js"(e, t) {
      var r = vt(),
        n = r["__core-js_shared__"];
      t.exports = n;
    },
  }),
  jR = R({
    "../../node_modules/lodash/_isMasked.js"(e, t) {
      var r = xR(),
        n = (function () {
          var a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return a ? "Symbol(src)_1." + a : "";
        })();
      function o(a) {
        return !!n && n in a;
      }
      t.exports = o;
    },
  }),
  gp = R({
    "../../node_modules/lodash/_toSource.js"(e, t) {
      var r = Function.prototype,
        n = r.toString;
      function o(a) {
        if (a != null) {
          try {
            return n.call(a);
          } catch {}
          try {
            return a + "";
          } catch {}
        }
        return "";
      }
      t.exports = o;
    },
  }),
  NR = R({
    "../../node_modules/lodash/_baseIsNative.js"(e, t) {
      var r = yp(),
        n = jR(),
        o = bp(),
        a = gp(),
        i = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        d = c.hasOwnProperty,
        m = RegExp(
          "^" +
            s
              .call(d)
              .replace(i, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$"
        );
      function p(f) {
        if (!o(f) || n(f)) return !1;
        var b = r(f) ? m : l;
        return b.test(a(f));
      }
      t.exports = p;
    },
  }),
  $R = R({
    "../../node_modules/lodash/_getValue.js"(e, t) {
      function r(n, o) {
        return n == null ? void 0 : n[o];
      }
      t.exports = r;
    },
  }),
  Sr = R({
    "../../node_modules/lodash/_getNative.js"(e, t) {
      var r = NR(),
        n = $R();
      function o(a, i) {
        var l = n(a, i);
        return r(l) ? l : void 0;
      }
      t.exports = o;
    },
  }),
  ul = R({
    "../../node_modules/lodash/_Map.js"(e, t) {
      var r = Sr(),
        n = vt(),
        o = r(n, "Map");
      t.exports = o;
    },
  }),
  ho = R({
    "../../node_modules/lodash/_nativeCreate.js"(e, t) {
      var r = Sr(),
        n = r(Object, "create");
      t.exports = n;
    },
  }),
  IR = R({
    "../../node_modules/lodash/_hashClear.js"(e, t) {
      var r = ho();
      function n() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      t.exports = n;
    },
  }),
  BR = R({
    "../../node_modules/lodash/_hashDelete.js"(e, t) {
      function r(n) {
        var o = this.has(n) && delete this.__data__[n];
        return (this.size -= o ? 1 : 0), o;
      }
      t.exports = r;
    },
  }),
  kR = R({
    "../../node_modules/lodash/_hashGet.js"(e, t) {
      var r = ho(),
        n = "__lodash_hash_undefined__",
        o = Object.prototype,
        a = o.hasOwnProperty;
      function i(l) {
        var u = this.__data__;
        if (r) {
          var c = u[l];
          return c === n ? void 0 : c;
        }
        return a.call(u, l) ? u[l] : void 0;
      }
      t.exports = i;
    },
  }),
  LR = R({
    "../../node_modules/lodash/_hashHas.js"(e, t) {
      var r = ho(),
        n = Object.prototype,
        o = n.hasOwnProperty;
      function a(i) {
        var l = this.__data__;
        return r ? l[i] !== void 0 : o.call(l, i);
      }
      t.exports = a;
    },
  }),
  DR = R({
    "../../node_modules/lodash/_hashSet.js"(e, t) {
      var r = ho(),
        n = "__lodash_hash_undefined__";
      function o(a, i) {
        var l = this.__data__;
        return (this.size += this.has(a) ? 0 : 1), (l[a] = r && i === void 0 ? n : i), this;
      }
      t.exports = o;
    },
  }),
  FR = R({
    "../../node_modules/lodash/_Hash.js"(e, t) {
      var r = IR(),
        n = BR(),
        o = kR(),
        a = LR(),
        i = DR();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = o),
        (l.prototype.has = a),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  HR = R({
    "../../node_modules/lodash/_mapCacheClear.js"(e, t) {
      var r = FR(),
        n = mo(),
        o = ul();
      function a() {
        (this.size = 0), (this.__data__ = { hash: new r(), map: new (o || n)(), string: new r() });
      }
      t.exports = a;
    },
  }),
  UR = R({
    "../../node_modules/lodash/_isKeyable.js"(e, t) {
      function r(n) {
        var o = typeof n;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null;
      }
      t.exports = r;
    },
  }),
  bo = R({
    "../../node_modules/lodash/_getMapData.js"(e, t) {
      var r = UR();
      function n(o, a) {
        var i = o.__data__;
        return r(a) ? i[typeof a == "string" ? "string" : "hash"] : i.map;
      }
      t.exports = n;
    },
  }),
  VR = R({
    "../../node_modules/lodash/_mapCacheDelete.js"(e, t) {
      var r = bo();
      function n(o) {
        var a = r(this, o).delete(o);
        return (this.size -= a ? 1 : 0), a;
      }
      t.exports = n;
    },
  }),
  zR = R({
    "../../node_modules/lodash/_mapCacheGet.js"(e, t) {
      var r = bo();
      function n(o) {
        return r(this, o).get(o);
      }
      t.exports = n;
    },
  }),
  GR = R({
    "../../node_modules/lodash/_mapCacheHas.js"(e, t) {
      var r = bo();
      function n(o) {
        return r(this, o).has(o);
      }
      t.exports = n;
    },
  }),
  WR = R({
    "../../node_modules/lodash/_mapCacheSet.js"(e, t) {
      var r = bo();
      function n(o, a) {
        var i = r(this, o),
          l = i.size;
        return i.set(o, a), (this.size += i.size == l ? 0 : 1), this;
      }
      t.exports = n;
    },
  }),
  vp = R({
    "../../node_modules/lodash/_MapCache.js"(e, t) {
      var r = HR(),
        n = VR(),
        o = zR(),
        a = GR(),
        i = WR();
      function l(u) {
        var c = -1,
          s = u == null ? 0 : u.length;
        for (this.clear(); ++c < s; ) {
          var d = u[c];
          this.set(d[0], d[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = n),
        (l.prototype.get = o),
        (l.prototype.has = a),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  KR = R({
    "../../node_modules/lodash/_stackSet.js"(e, t) {
      var r = mo(),
        n = ul(),
        o = vp(),
        a = 200;
      function i(l, u) {
        var c = this.__data__;
        if (c instanceof r) {
          var s = c.__data__;
          if (!n || s.length < a - 1) return s.push([l, u]), (this.size = ++c.size), this;
          c = this.__data__ = new o(s);
        }
        return c.set(l, u), (this.size = c.size), this;
      }
      t.exports = i;
    },
  }),
  YR = R({
    "../../node_modules/lodash/_Stack.js"(e, t) {
      var r = mo(),
        n = PR(),
        o = OR(),
        a = TR(),
        i = SR(),
        l = KR();
      function u(c) {
        var s = (this.__data__ = new r(c));
        this.size = s.size;
      }
      (u.prototype.clear = n),
        (u.prototype.delete = o),
        (u.prototype.get = a),
        (u.prototype.has = i),
        (u.prototype.set = l),
        (t.exports = u);
    },
  }),
  JR = R({
    "../../node_modules/lodash/_setCacheAdd.js"(e, t) {
      var r = "__lodash_hash_undefined__";
      function n(o) {
        return this.__data__.set(o, r), this;
      }
      t.exports = n;
    },
  }),
  XR = R({
    "../../node_modules/lodash/_setCacheHas.js"(e, t) {
      function r(n) {
        return this.__data__.has(n);
      }
      t.exports = r;
    },
  }),
  QR = R({
    "../../node_modules/lodash/_SetCache.js"(e, t) {
      var r = vp(),
        n = JR(),
        o = XR();
      function a(i) {
        var l = -1,
          u = i == null ? 0 : i.length;
        for (this.__data__ = new r(); ++l < u; ) this.add(i[l]);
      }
      (a.prototype.add = a.prototype.push = n), (a.prototype.has = o), (t.exports = a);
    },
  }),
  ZR = R({
    "../../node_modules/lodash/_arraySome.js"(e, t) {
      function r(n, o) {
        for (var a = -1, i = n == null ? 0 : n.length; ++a < i; ) if (o(n[a], a, n)) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  ew = R({
    "../../node_modules/lodash/_cacheHas.js"(e, t) {
      function r(n, o) {
        return n.has(o);
      }
      t.exports = r;
    },
  }),
  _p = R({
    "../../node_modules/lodash/_equalArrays.js"(e, t) {
      var r = QR(),
        n = ZR(),
        o = ew(),
        a = 1,
        i = 2;
      function l(u, c, s, d, m, p) {
        var f = s & a,
          b = u.length,
          h = c.length;
        if (b != h && !(f && h > b)) return !1;
        var y = p.get(u),
          g = p.get(c);
        if (y && g) return y == c && g == u;
        var E = -1,
          C = !0,
          q = s & i ? new r() : void 0;
        for (p.set(u, c), p.set(c, u); ++E < b; ) {
          var _ = u[E],
            v = c[E];
          if (d) var w = f ? d(v, _, E, c, u, p) : d(_, v, E, u, c, p);
          if (w !== void 0) {
            if (w) continue;
            C = !1;
            break;
          }
          if (q) {
            if (
              !n(c, function (P, j) {
                if (!o(q, j) && (_ === P || m(_, P, s, d, p))) return q.push(j);
              })
            ) {
              C = !1;
              break;
            }
          } else if (!(_ === v || m(_, v, s, d, p))) {
            C = !1;
            break;
          }
        }
        return p.delete(u), p.delete(c), C;
      }
      t.exports = l;
    },
  }),
  tw = R({
    "../../node_modules/lodash/_Uint8Array.js"(e, t) {
      var r = vt(),
        n = r.Uint8Array;
      t.exports = n;
    },
  }),
  rw = R({
    "../../node_modules/lodash/_mapToArray.js"(e, t) {
      function r(n) {
        var o = -1,
          a = Array(n.size);
        return (
          n.forEach(function (i, l) {
            a[++o] = [l, i];
          }),
          a
        );
      }
      t.exports = r;
    },
  }),
  nw = R({
    "../../node_modules/lodash/_setToArray.js"(e, t) {
      function r(n) {
        var o = -1,
          a = Array(n.size);
        return (
          n.forEach(function (i) {
            a[++o] = i;
          }),
          a
        );
      }
      t.exports = r;
    },
  }),
  ow = R({
    "../../node_modules/lodash/_equalByTag.js"(e, t) {
      var r = sl(),
        n = tw(),
        o = fp(),
        a = _p(),
        i = rw(),
        l = nw(),
        u = 1,
        c = 2,
        s = "[object Boolean]",
        d = "[object Date]",
        m = "[object Error]",
        p = "[object Map]",
        f = "[object Number]",
        b = "[object RegExp]",
        h = "[object Set]",
        y = "[object String]",
        g = "[object Symbol]",
        E = "[object ArrayBuffer]",
        C = "[object DataView]",
        q = r ? r.prototype : void 0,
        _ = q ? q.valueOf : void 0;
      function v(w, P, j, $, B, I, S) {
        switch (j) {
          case C:
            if (w.byteLength != P.byteLength || w.byteOffset != P.byteOffset) return !1;
            (w = w.buffer), (P = P.buffer);
          case E:
            return !(w.byteLength != P.byteLength || !I(new n(w), new n(P)));
          case s:
          case d:
          case f:
            return o(+w, +P);
          case m:
            return w.name == P.name && w.message == P.message;
          case b:
          case y:
            return w == P + "";
          case p:
            var k = i;
          case h:
            var U = $ & u;
            if ((k || (k = l), w.size != P.size && !U)) return !1;
            var W = S.get(w);
            if (W) return W == P;
            ($ |= c), S.set(w, P);
            var G = a(k(w), k(P), $, B, I, S);
            return S.delete(w), G;
          case g:
            if (_) return _.call(w) == _.call(P);
        }
        return !1;
      }
      t.exports = v;
    },
  }),
  aw = R({
    "../../node_modules/lodash/_arrayPush.js"(e, t) {
      function r(n, o) {
        for (var a = -1, i = o.length, l = n.length; ++a < i; ) n[l + a] = o[a];
        return n;
      }
      t.exports = r;
    },
  }),
  cl = R({
    "../../node_modules/lodash/isArray.js"(e, t) {
      var r = Array.isArray;
      t.exports = r;
    },
  }),
  iw = R({
    "../../node_modules/lodash/_baseGetAllKeys.js"(e, t) {
      var r = aw(),
        n = cl();
      function o(a, i, l) {
        var u = i(a);
        return n(a) ? u : r(u, l(a));
      }
      t.exports = o;
    },
  }),
  lw = R({
    "../../node_modules/lodash/_arrayFilter.js"(e, t) {
      function r(n, o) {
        for (var a = -1, i = n == null ? 0 : n.length, l = 0, u = []; ++a < i; ) {
          var c = n[a];
          o(c, a, n) && (u[l++] = c);
        }
        return u;
      }
      t.exports = r;
    },
  }),
  sw = R({
    "../../node_modules/lodash/stubArray.js"(e, t) {
      function r() {
        return [];
      }
      t.exports = r;
    },
  }),
  uw = R({
    "../../node_modules/lodash/_getSymbols.js"(e, t) {
      var r = lw(),
        n = sw(),
        o = Object.prototype,
        a = o.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        l = i
          ? function (u) {
              return u == null
                ? []
                : ((u = Object(u)),
                  r(i(u), function (c) {
                    return a.call(u, c);
                  }));
            }
          : n;
      t.exports = l;
    },
  }),
  cw = R({
    "../../node_modules/lodash/_baseTimes.js"(e, t) {
      function r(n, o) {
        for (var a = -1, i = Array(n); ++a < n; ) i[a] = o(a);
        return i;
      }
      t.exports = r;
    },
  }),
  yo = R({
    "../../node_modules/lodash/isObjectLike.js"(e, t) {
      function r(n) {
        return n != null && typeof n == "object";
      }
      t.exports = r;
    },
  }),
  dw = R({
    "../../node_modules/lodash/_baseIsArguments.js"(e, t) {
      var r = fo(),
        n = yo(),
        o = "[object Arguments]";
      function a(i) {
        return n(i) && r(i) == o;
      }
      t.exports = a;
    },
  }),
  pw = R({
    "../../node_modules/lodash/isArguments.js"(e, t) {
      var r = dw(),
        n = yo(),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.propertyIsEnumerable,
        l = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (u) {
              return n(u) && a.call(u, "callee") && !i.call(u, "callee");
            };
      t.exports = l;
    },
  }),
  mw = R({
    "../../node_modules/lodash/stubFalse.js"(e, t) {
      function r() {
        return !1;
      }
      t.exports = r;
    },
  }),
  Rp = R({
    "../../node_modules/lodash/isBuffer.js"(e, t) {
      var r = vt(),
        n = mw(),
        o = typeof e == "object" && e && !e.nodeType && e,
        a = o && typeof t == "object" && t && !t.nodeType && t,
        i = a && a.exports === o,
        l = i ? r.Buffer : void 0,
        u = l ? l.isBuffer : void 0,
        c = u || n;
      t.exports = c;
    },
  }),
  fw = R({
    "../../node_modules/lodash/_isIndex.js"(e, t) {
      var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
      function o(a, i) {
        var l = typeof a;
        return (i = i ?? r), !!i && (l == "number" || (l != "symbol" && n.test(a))) && a > -1 && a % 1 == 0 && a < i;
      }
      t.exports = o;
    },
  }),
  wp = R({
    "../../node_modules/lodash/isLength.js"(e, t) {
      var r = 9007199254740991;
      function n(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= r;
      }
      t.exports = n;
    },
  }),
  hw = R({
    "../../node_modules/lodash/_baseIsTypedArray.js"(e, t) {
      var r = fo(),
        n = wp(),
        o = yo(),
        a = "[object Arguments]",
        i = "[object Array]",
        l = "[object Boolean]",
        u = "[object Date]",
        c = "[object Error]",
        s = "[object Function]",
        d = "[object Map]",
        m = "[object Number]",
        p = "[object Object]",
        f = "[object RegExp]",
        b = "[object Set]",
        h = "[object String]",
        y = "[object WeakMap]",
        g = "[object ArrayBuffer]",
        E = "[object DataView]",
        C = "[object Float32Array]",
        q = "[object Float64Array]",
        _ = "[object Int8Array]",
        v = "[object Int16Array]",
        w = "[object Int32Array]",
        P = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        $ = "[object Uint16Array]",
        B = "[object Uint32Array]",
        I = {};
      (I[C] = I[q] = I[_] = I[v] = I[w] = I[P] = I[j] = I[$] = I[B] = !0),
        (I[a] = I[i] = I[g] = I[l] = I[E] = I[u] = I[c] = I[s] = I[d] = I[m] = I[p] = I[f] = I[b] = I[h] = I[y] = !1);
      function S(k) {
        return o(k) && n(k.length) && !!I[r(k)];
      }
      t.exports = S;
    },
  }),
  bw = R({
    "../../node_modules/lodash/_baseUnary.js"(e, t) {
      function r(n) {
        return function (o) {
          return n(o);
        };
      }
      t.exports = r;
    },
  }),
  yw = R({
    "../../node_modules/lodash/_nodeUtil.js"(e, t) {
      var r = hp(),
        n = typeof e == "object" && e && !e.nodeType && e,
        o = n && typeof t == "object" && t && !t.nodeType && t,
        a = o && o.exports === n,
        i = a && r.process,
        l = (function () {
          try {
            var u = o && o.require && o.require("util").types;
            return u || (i && i.binding && i.binding("util"));
          } catch {}
        })();
      t.exports = l;
    },
  }),
  Cp = R({
    "../../node_modules/lodash/isTypedArray.js"(e, t) {
      var r = hw(),
        n = bw(),
        o = yw(),
        a = o && o.isTypedArray,
        i = a ? n(a) : r;
      t.exports = i;
    },
  }),
  gw = R({
    "../../node_modules/lodash/_arrayLikeKeys.js"(e, t) {
      var r = cw(),
        n = pw(),
        o = cl(),
        a = Rp(),
        i = fw(),
        l = Cp(),
        u = Object.prototype,
        c = u.hasOwnProperty;
      function s(d, m) {
        var p = o(d),
          f = !p && n(d),
          b = !p && !f && a(d),
          h = !p && !f && !b && l(d),
          y = p || f || b || h,
          g = y ? r(d.length, String) : [],
          E = g.length;
        for (var C in d)
          (m || c.call(d, C)) &&
            !(
              y &&
              (C == "length" ||
                (b && (C == "offset" || C == "parent")) ||
                (h && (C == "buffer" || C == "byteLength" || C == "byteOffset")) ||
                i(C, E))
            ) &&
            g.push(C);
        return g;
      }
      t.exports = s;
    },
  }),
  vw = R({
    "../../node_modules/lodash/_isPrototype.js"(e, t) {
      var r = Object.prototype;
      function n(o) {
        var a = o && o.constructor,
          i = (typeof a == "function" && a.prototype) || r;
        return o === i;
      }
      t.exports = n;
    },
  }),
  _w = R({
    "../../node_modules/lodash/_overArg.js"(e, t) {
      function r(n, o) {
        return function (a) {
          return n(o(a));
        };
      }
      t.exports = r;
    },
  }),
  Rw = R({
    "../../node_modules/lodash/_nativeKeys.js"(e, t) {
      var r = _w(),
        n = r(Object.keys, Object);
      t.exports = n;
    },
  }),
  ww = R({
    "../../node_modules/lodash/_baseKeys.js"(e, t) {
      var r = vw(),
        n = Rw(),
        o = Object.prototype,
        a = o.hasOwnProperty;
      function i(l) {
        if (!r(l)) return n(l);
        var u = [];
        for (var c in Object(l)) a.call(l, c) && c != "constructor" && u.push(c);
        return u;
      }
      t.exports = i;
    },
  }),
  Cw = R({
    "../../node_modules/lodash/isArrayLike.js"(e, t) {
      var r = yp(),
        n = wp();
      function o(a) {
        return a != null && n(a.length) && !r(a);
      }
      t.exports = o;
    },
  }),
  qw = R({
    "../../node_modules/lodash/keys.js"(e, t) {
      var r = gw(),
        n = ww(),
        o = Cw();
      function a(i) {
        return o(i) ? r(i) : n(i);
      }
      t.exports = a;
    },
  }),
  Ew = R({
    "../../node_modules/lodash/_getAllKeys.js"(e, t) {
      var r = iw(),
        n = uw(),
        o = qw();
      function a(i) {
        return r(i, o, n);
      }
      t.exports = a;
    },
  }),
  Pw = R({
    "../../node_modules/lodash/_equalObjects.js"(e, t) {
      var r = Ew(),
        n = 1,
        o = Object.prototype,
        a = o.hasOwnProperty;
      function i(l, u, c, s, d, m) {
        var p = c & n,
          f = r(l),
          b = f.length,
          h = r(u),
          y = h.length;
        if (b != y && !p) return !1;
        for (var g = b; g--; ) {
          var E = f[g];
          if (!(p ? E in u : a.call(u, E))) return !1;
        }
        var C = m.get(l),
          q = m.get(u);
        if (C && q) return C == u && q == l;
        var _ = !0;
        m.set(l, u), m.set(u, l);
        for (var v = p; ++g < b; ) {
          E = f[g];
          var w = l[E],
            P = u[E];
          if (s) var j = p ? s(P, w, E, u, l, m) : s(w, P, E, l, u, m);
          if (!(j === void 0 ? w === P || d(w, P, c, s, m) : j)) {
            _ = !1;
            break;
          }
          v || (v = E == "constructor");
        }
        if (_ && !v) {
          var $ = l.constructor,
            B = u.constructor;
          $ != B &&
            "constructor" in l &&
            "constructor" in u &&
            !(typeof $ == "function" && $ instanceof $ && typeof B == "function" && B instanceof B) &&
            (_ = !1);
        }
        return m.delete(l), m.delete(u), _;
      }
      t.exports = i;
    },
  }),
  Ow = R({
    "../../node_modules/lodash/_DataView.js"(e, t) {
      var r = Sr(),
        n = vt(),
        o = r(n, "DataView");
      t.exports = o;
    },
  }),
  Tw = R({
    "../../node_modules/lodash/_Promise.js"(e, t) {
      var r = Sr(),
        n = vt(),
        o = r(n, "Promise");
      t.exports = o;
    },
  }),
  Sw = R({
    "../../node_modules/lodash/_Set.js"(e, t) {
      var r = Sr(),
        n = vt(),
        o = r(n, "Set");
      t.exports = o;
    },
  }),
  Aw = R({
    "../../node_modules/lodash/_WeakMap.js"(e, t) {
      var r = Sr(),
        n = vt(),
        o = r(n, "WeakMap");
      t.exports = o;
    },
  }),
  Mw = R({
    "../../node_modules/lodash/_getTag.js"(e, t) {
      var r = Ow(),
        n = ul(),
        o = Tw(),
        a = Sw(),
        i = Aw(),
        l = fo(),
        u = gp(),
        c = "[object Map]",
        s = "[object Object]",
        d = "[object Promise]",
        m = "[object Set]",
        p = "[object WeakMap]",
        f = "[object DataView]",
        b = u(r),
        h = u(n),
        y = u(o),
        g = u(a),
        E = u(i),
        C = l;
      ((r && C(new r(new ArrayBuffer(1))) != f) ||
        (n && C(new n()) != c) ||
        (o && C(o.resolve()) != d) ||
        (a && C(new a()) != m) ||
        (i && C(new i()) != p)) &&
        (C = function (q) {
          var _ = l(q),
            v = _ == s ? q.constructor : void 0,
            w = v ? u(v) : "";
          if (w)
            switch (w) {
              case b:
                return f;
              case h:
                return c;
              case y:
                return d;
              case g:
                return m;
              case E:
                return p;
            }
          return _;
        }),
        (t.exports = C);
    },
  }),
  xw = R({
    "../../node_modules/lodash/_baseIsEqualDeep.js"(e, t) {
      var r = YR(),
        n = _p(),
        o = ow(),
        a = Pw(),
        i = Mw(),
        l = cl(),
        u = Rp(),
        c = Cp(),
        s = 1,
        d = "[object Arguments]",
        m = "[object Array]",
        p = "[object Object]",
        f = Object.prototype,
        b = f.hasOwnProperty;
      function h(y, g, E, C, q, _) {
        var v = l(y),
          w = l(g),
          P = v ? m : i(y),
          j = w ? m : i(g);
        (P = P == d ? p : P), (j = j == d ? p : j);
        var $ = P == p,
          B = j == p,
          I = P == j;
        if (I && u(y)) {
          if (!u(g)) return !1;
          (v = !0), ($ = !1);
        }
        if (I && !$) return _ || (_ = new r()), v || c(y) ? n(y, g, E, C, q, _) : o(y, g, P, E, C, q, _);
        if (!(E & s)) {
          var S = $ && b.call(y, "__wrapped__"),
            k = B && b.call(g, "__wrapped__");
          if (S || k) {
            var U = S ? y.value() : y,
              W = k ? g.value() : g;
            return _ || (_ = new r()), q(U, W, E, C, _);
          }
        }
        return I ? (_ || (_ = new r()), a(y, g, E, C, q, _)) : !1;
      }
      t.exports = h;
    },
  }),
  jw = R({
    "../../node_modules/lodash/_baseIsEqual.js"(e, t) {
      var r = xw(),
        n = yo();
      function o(a, i, l, u, c) {
        return a === i ? !0 : a == null || i == null || (!n(a) && !n(i)) ? a !== a && i !== i : r(a, i, l, u, o, c);
      }
      t.exports = o;
    },
  }),
  qp = R({
    "../../node_modules/lodash/isEqualWith.js"(e, t) {
      var r = jw();
      function n(o, a, i) {
        i = typeof i == "function" ? i : void 0;
        var l = i ? i(o, a) : void 0;
        return l === void 0 ? r(o, a, void 0, i) : !!l;
      }
      t.exports = n;
    },
  }),
  Ep = R({
    "../../node_modules/css.escape/css.escape.js"(e, t) {
      (function (r, n) {
        typeof e == "object" ? (t.exports = n(r)) : typeof define == "function" && define.amd ? define([], n.bind(r, r)) : n(r);
      })(typeof global < "u" ? global : e, function (r) {
        if (r.CSS && r.CSS.escape) return r.CSS.escape;
        var n = function (o) {
          if (arguments.length == 0) throw new TypeError("`CSS.escape` requires an argument.");
          for (var a = String(o), i = a.length, l = -1, u, c = "", s = a.charCodeAt(0); ++l < i; ) {
            if (((u = a.charCodeAt(l)), u == 0)) {
              c += "�";
              continue;
            }
            if ((u >= 1 && u <= 31) || u == 127 || (l == 0 && u >= 48 && u <= 57) || (l == 1 && u >= 48 && u <= 57 && s == 45)) {
              c += "\\" + u.toString(16) + " ";
              continue;
            }
            if (l == 0 && i == 1 && u == 45) {
              c += "\\" + a.charAt(l);
              continue;
            }
            if (u >= 128 || u == 45 || u == 95 || (u >= 48 && u <= 57) || (u >= 65 && u <= 90) || (u >= 97 && u <= 122)) {
              c += a.charAt(l);
              continue;
            }
            c += "\\" + a.charAt(l);
          }
          return c;
        };
        return r.CSS || (r.CSS = {}), (r.CSS.escape = n), n;
      });
    },
  }),
  Pp = R({
    "../../node_modules/@testing-library/dom/node_modules/ansi-styles/index.js"(e, t) {
      var r =
          (a = 0) =>
          (i) =>
            `\x1B[${38 + a};5;${i}m`,
        n =
          (a = 0) =>
          (i, l, u) =>
            `\x1B[${38 + a};2;${i};${l};${u}m`;
      function o() {
        let a = new Map(),
          i = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (i.color.gray = i.color.blackBright),
          (i.bgColor.bgGray = i.bgColor.bgBlackBright),
          (i.color.grey = i.color.blackBright),
          (i.bgColor.bgGrey = i.bgColor.bgBlackBright);
        for (let [l, u] of Object.entries(i)) {
          for (let [c, s] of Object.entries(u))
            (i[c] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }), (u[c] = i[c]), a.set(s[0], s[1]);
          Object.defineProperty(i, l, { value: u, enumerable: !1 });
        }
        return (
          Object.defineProperty(i, "codes", { value: a, enumerable: !1 }),
          (i.color.close = "\x1B[39m"),
          (i.bgColor.close = "\x1B[49m"),
          (i.color.ansi256 = r()),
          (i.color.ansi16m = n()),
          (i.bgColor.ansi256 = r(10)),
          (i.bgColor.ansi16m = n(10)),
          Object.defineProperties(i, {
            rgbToAnsi256: {
              value: (l, u, c) =>
                l === u && u === c
                  ? l < 8
                    ? 16
                    : l > 248
                    ? 231
                    : Math.round(((l - 8) / 247) * 24) + 232
                  : 16 + 36 * Math.round((l / 255) * 5) + 6 * Math.round((u / 255) * 5) + Math.round((c / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (l) => {
                let u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(l.toString(16));
                if (!u) return [0, 0, 0];
                let { colorString: c } = u.groups;
                c.length === 3 &&
                  (c = c
                    .split("")
                    .map((d) => d + d)
                    .join(""));
                let s = Number.parseInt(c, 16);
                return [(s >> 16) & 255, (s >> 8) & 255, s & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: { value: (l) => i.rgbToAnsi256(...i.hexToRgb(l)), enumerable: !1 },
          }),
          i
        );
      }
      Object.defineProperty(t, "exports", { enumerable: !0, get: o });
    },
  }),
  go = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/collections.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = n),
        (e.printListItems = o),
        (e.printObjectProperties = a);
      var t = (i, l) => {
        let u = Object.keys(i).sort(l);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(i).forEach((c) => {
              Object.getOwnPropertyDescriptor(i, c).enumerable && u.push(c);
            }),
          u
        );
      };
      function r(i, l, u, c, s, d, m = ": ") {
        let p = "",
          f = i.next();
        if (!f.done) {
          p += l.spacingOuter;
          let b = u + l.indent;
          for (; !f.done; ) {
            let h = d(f.value[0], l, b, c, s),
              y = d(f.value[1], l, b, c, s);
            (p += b + h + m + y), (f = i.next()), f.done ? l.min || (p += ",") : (p += "," + l.spacingInner);
          }
          p += l.spacingOuter + u;
        }
        return p;
      }
      function n(i, l, u, c, s, d) {
        let m = "",
          p = i.next();
        if (!p.done) {
          m += l.spacingOuter;
          let f = u + l.indent;
          for (; !p.done; ) (m += f + d(p.value, l, f, c, s)), (p = i.next()), p.done ? l.min || (m += ",") : (m += "," + l.spacingInner);
          m += l.spacingOuter + u;
        }
        return m;
      }
      function o(i, l, u, c, s, d) {
        let m = "";
        if (i.length) {
          m += l.spacingOuter;
          let p = u + l.indent;
          for (let f = 0; f < i.length; f++)
            (m += p), f in i && (m += d(i[f], l, p, c, s)), f < i.length - 1 ? (m += "," + l.spacingInner) : l.min || (m += ",");
          m += l.spacingOuter + u;
        }
        return m;
      }
      function a(i, l, u, c, s, d) {
        let m = "",
          p = t(i, l.compareKeys);
        if (p.length) {
          m += l.spacingOuter;
          let f = u + l.indent;
          for (let b = 0; b < p.length; b++) {
            let h = p[b],
              y = d(h, l, f, c, s),
              g = d(i[h], l, f, c, s);
            (m += f + y + ": " + g), b < p.length - 1 ? (m += "," + l.spacingInner) : l.min || (m += ",");
          }
          m += l.spacingOuter + u;
        }
        return m;
      }
    },
  }),
  Nw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = go(),
        r = (function () {
          return typeof globalThis < "u"
            ? globalThis
            : typeof r < "u"
            ? r
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : Function("return this")();
        })(),
        n = r["jest-symbol-do-not-touch"] || r.Symbol,
        o = typeof n == "function" && n.for ? n.for("jest.asymmetricMatcher") : 1267621,
        a = " ",
        i = (s, d, m, p, f, b) => {
          let h = s.toString();
          return h === "ArrayContaining" || h === "ArrayNotContaining"
            ? ++p > d.maxDepth
              ? "[" + h + "]"
              : h + a + "[" + (0, t.printListItems)(s.sample, d, m, p, f, b) + "]"
            : h === "ObjectContaining" || h === "ObjectNotContaining"
            ? ++p > d.maxDepth
              ? "[" + h + "]"
              : h + a + "{" + (0, t.printObjectProperties)(s.sample, d, m, p, f, b) + "}"
            : h === "StringMatching" || h === "StringNotMatching" || h === "StringContaining" || h === "StringNotContaining"
            ? h + a + b(s.sample, d, m, p, f)
            : s.toAsymmetricMatcher();
        };
      e.serialize = i;
      var l = (s) => s && s.$$typeof === o;
      e.test = l;
      var u = { serialize: i, test: l },
        c = u;
      e.default = c;
    },
  }),
  $w = R({
    "../../node_modules/@testing-library/dom/node_modules/ansi-regex/index.js"(e, t) {
      t.exports = ({ onlyFirst: r = !1 } = {}) => {
        let n = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
        ].join("|");
        return new RegExp(n, r ? void 0 : "g");
      };
    },
  }),
  Iw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/ConvertAnsi.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = n($w()),
        r = n(Pp());
      function n(c) {
        return c && c.__esModule ? c : { default: c };
      }
      var o = (c) =>
          c.replace((0, t.default)(), (s) => {
            switch (s) {
              case r.default.red.close:
              case r.default.green.close:
              case r.default.cyan.close:
              case r.default.gray.close:
              case r.default.white.close:
              case r.default.yellow.close:
              case r.default.bgRed.close:
              case r.default.bgGreen.close:
              case r.default.bgYellow.close:
              case r.default.inverse.close:
              case r.default.dim.close:
              case r.default.bold.close:
              case r.default.reset.open:
              case r.default.reset.close:
                return "</>";
              case r.default.red.open:
                return "<red>";
              case r.default.green.open:
                return "<green>";
              case r.default.cyan.open:
                return "<cyan>";
              case r.default.gray.open:
                return "<gray>";
              case r.default.white.open:
                return "<white>";
              case r.default.yellow.open:
                return "<yellow>";
              case r.default.bgRed.open:
                return "<bgRed>";
              case r.default.bgGreen.open:
                return "<bgGreen>";
              case r.default.bgYellow.open:
                return "<bgYellow>";
              case r.default.inverse.open:
                return "<inverse>";
              case r.default.dim.open:
                return "<dim>";
              case r.default.bold.open:
                return "<bold>";
              default:
                return "";
            }
          }),
        a = (c) => typeof c == "string" && !!c.match((0, t.default)());
      e.test = a;
      var i = (c, s, d, m, p, f) => f(o(c), s, d, m, p);
      e.serialize = i;
      var l = { serialize: i, test: a },
        u = l;
      e.default = u;
    },
  }),
  Bw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/DOMCollection.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = go(),
        r = " ",
        n = ["DOMStringMap", "NamedNodeMap"],
        o = /^(HTML\w*Collection|NodeList)$/,
        a = (d) => n.indexOf(d) !== -1 || o.test(d),
        i = (d) => d && d.constructor && !!d.constructor.name && a(d.constructor.name);
      e.test = i;
      var l = (d) => d.constructor.name === "NamedNodeMap",
        u = (d, m, p, f, b, h) => {
          let y = d.constructor.name;
          return ++f > m.maxDepth
            ? "[" + y + "]"
            : (m.min ? "" : y + r) +
                (n.indexOf(y) !== -1
                  ? "{" +
                    (0, t.printObjectProperties)(
                      l(d) ? Array.from(d).reduce((g, E) => ((g[E.name] = E.value), g), {}) : { ...d },
                      m,
                      p,
                      f,
                      b,
                      h
                    ) +
                    "}"
                  : "[" + (0, t.printListItems)(Array.from(d), m, p, f, b, h) + "]");
        };
      e.serialize = u;
      var c = { serialize: u, test: i },
        s = c;
      e.default = s;
    },
  }),
  kw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    },
  }),
  dl = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/lib/markup.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.printText = e.printProps = e.printElementAsLeaf = e.printElement = e.printComment = e.printChildren = void 0);
      var t = r(kw());
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      var n = (c, s, d, m, p, f, b) => {
        let h = m + d.indent,
          y = d.colors;
        return c
          .map((g) => {
            let E = s[g],
              C = b(E, d, h, p, f);
            return (
              typeof E != "string" &&
                (C.indexOf(`
`) !== -1 && (C = d.spacingOuter + h + C + d.spacingOuter + m),
                (C = "{" + C + "}")),
              d.spacingInner + m + y.prop.open + g + y.prop.close + "=" + y.value.open + C + y.value.close
            );
          })
          .join("");
      };
      e.printProps = n;
      var o = (c, s, d, m, p, f) => c.map((b) => s.spacingOuter + d + (typeof b == "string" ? a(b, s) : f(b, s, d, m, p))).join("");
      e.printChildren = o;
      var a = (c, s) => {
        let d = s.colors.content;
        return d.open + (0, t.default)(c) + d.close;
      };
      e.printText = a;
      var i = (c, s) => {
        let d = s.colors.comment;
        return d.open + "<!--" + (0, t.default)(c) + "-->" + d.close;
      };
      e.printComment = i;
      var l = (c, s, d, m, p) => {
        let f = m.colors.tag;
        return (
          f.open +
          "<" +
          c +
          (s && f.close + s + m.spacingOuter + p + f.open) +
          (d ? ">" + f.close + d + m.spacingOuter + p + f.open + "</" + c : (s && !m.min ? "" : " ") + "/") +
          ">" +
          f.close
        );
      };
      e.printElement = l;
      var u = (c, s) => {
        let d = s.colors.tag;
        return d.open + "<" + c + d.close + " …" + d.open + " />" + d.close;
      };
      e.printElementAsLeaf = u;
    },
  }),
  Lw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/DOMElement.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = dl(),
        r = 1,
        n = 3,
        o = 8,
        a = 11,
        i = /^((HTML|SVG)\w*)?Element$/,
        l = (h) => {
          try {
            return typeof h.hasAttribute == "function" && h.hasAttribute("is");
          } catch {
            return !1;
          }
        },
        u = (h) => {
          let y = h.constructor.name,
            { nodeType: g, tagName: E } = h,
            C = (typeof E == "string" && E.includes("-")) || l(h);
          return (
            (g === r && (i.test(y) || C)) ||
            (g === n && y === "Text") ||
            (g === o && y === "Comment") ||
            (g === a && y === "DocumentFragment")
          );
        },
        c = (h) => {
          var y;
          return (h == null || (y = h.constructor) === null || y === void 0 ? void 0 : y.name) && u(h);
        };
      e.test = c;
      function s(h) {
        return h.nodeType === n;
      }
      function d(h) {
        return h.nodeType === o;
      }
      function m(h) {
        return h.nodeType === a;
      }
      var p = (h, y, g, E, C, q) => {
        if (s(h)) return (0, t.printText)(h.data, y);
        if (d(h)) return (0, t.printComment)(h.data, y);
        let _ = m(h) ? "DocumentFragment" : h.tagName.toLowerCase();
        return ++E > y.maxDepth
          ? (0, t.printElementAsLeaf)(_, y)
          : (0, t.printElement)(
              _,
              (0, t.printProps)(
                m(h)
                  ? []
                  : Array.from(h.attributes)
                      .map((v) => v.name)
                      .sort(),
                m(h) ? {} : Array.from(h.attributes).reduce((v, w) => ((v[w.name] = w.value), v), {}),
                y,
                g + y.indent,
                E,
                C,
                q
              ),
              (0, t.printChildren)(Array.prototype.slice.call(h.childNodes || h.children), y, g + y.indent, E, C, q),
              y,
              g
            );
      };
      e.serialize = p;
      var f = { serialize: p, test: c },
        b = f;
      e.default = b;
    },
  }),
  Dw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/Immutable.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = go(),
        r = "@@__IMMUTABLE_ITERABLE__@@",
        n = "@@__IMMUTABLE_LIST__@@",
        o = "@@__IMMUTABLE_KEYED__@@",
        a = "@@__IMMUTABLE_MAP__@@",
        i = "@@__IMMUTABLE_ORDERED__@@",
        l = "@@__IMMUTABLE_RECORD__@@",
        u = "@@__IMMUTABLE_SEQ__@@",
        c = "@@__IMMUTABLE_SET__@@",
        s = "@@__IMMUTABLE_STACK__@@",
        d = (w) => "Immutable." + w,
        m = (w) => "[" + w + "]",
        p = " ",
        f = "…",
        b = (w, P, j, $, B, I, S) =>
          ++$ > P.maxDepth ? m(d(S)) : d(S) + p + "{" + (0, t.printIteratorEntries)(w.entries(), P, j, $, B, I) + "}";
      function h(w) {
        let P = 0;
        return {
          next() {
            if (P < w._keys.length) {
              let j = w._keys[P++];
              return { done: !1, value: [j, w.get(j)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var y = (w, P, j, $, B, I) => {
          let S = d(w._name || "Record");
          return ++$ > P.maxDepth ? m(S) : S + p + "{" + (0, t.printIteratorEntries)(h(w), P, j, $, B, I) + "}";
        },
        g = (w, P, j, $, B, I) => {
          let S = d("Seq");
          return ++$ > P.maxDepth
            ? m(S)
            : w[o]
            ? S + p + "{" + (w._iter || w._object ? (0, t.printIteratorEntries)(w.entries(), P, j, $, B, I) : f) + "}"
            : S +
              p +
              "[" +
              (w._iter || w._array || w._collection || w._iterable ? (0, t.printIteratorValues)(w.values(), P, j, $, B, I) : f) +
              "]";
        },
        E = (w, P, j, $, B, I, S) =>
          ++$ > P.maxDepth ? m(d(S)) : d(S) + p + "[" + (0, t.printIteratorValues)(w.values(), P, j, $, B, I) + "]",
        C = (w, P, j, $, B, I) =>
          w[a]
            ? b(w, P, j, $, B, I, w[i] ? "OrderedMap" : "Map")
            : w[n]
            ? E(w, P, j, $, B, I, "List")
            : w[c]
            ? E(w, P, j, $, B, I, w[i] ? "OrderedSet" : "Set")
            : w[s]
            ? E(w, P, j, $, B, I, "Stack")
            : w[u]
            ? g(w, P, j, $, B, I)
            : y(w, P, j, $, B, I);
      e.serialize = C;
      var q = (w) => w && (w[r] === !0 || w[l] === !0);
      e.test = q;
      var _ = { serialize: C, test: q },
        v = _;
      e.default = v;
    },
  }),
  Fw = R({
    "../../node_modules/@testing-library/dom/node_modules/react-is/cjs/react-is.production.min.js"(e) {
      var t = 60103,
        r = 60106,
        n = 60107,
        o = 60108,
        a = 60114,
        i = 60109,
        l = 60110,
        u = 60112,
        c = 60113,
        s = 60120,
        d = 60115,
        m = 60116,
        p = 60121,
        f = 60122,
        b = 60117,
        h = 60129,
        y = 60131;
      typeof Symbol == "function" &&
        Symbol.for &&
        ((g = Symbol.for),
        (t = g("react.element")),
        (r = g("react.portal")),
        (n = g("react.fragment")),
        (o = g("react.strict_mode")),
        (a = g("react.profiler")),
        (i = g("react.provider")),
        (l = g("react.context")),
        (u = g("react.forward_ref")),
        (c = g("react.suspense")),
        (s = g("react.suspense_list")),
        (d = g("react.memo")),
        (m = g("react.lazy")),
        (p = g("react.block")),
        (f = g("react.server.block")),
        (b = g("react.fundamental")),
        (h = g("react.debug_trace_mode")),
        (y = g("react.legacy_hidden")));
      var g;
      function E(S) {
        if (typeof S == "object" && S !== null) {
          var k = S.$$typeof;
          switch (k) {
            case t:
              switch (((S = S.type), S)) {
                case n:
                case a:
                case o:
                case c:
                case s:
                  return S;
                default:
                  switch (((S = S && S.$$typeof), S)) {
                    case l:
                    case u:
                    case m:
                    case d:
                    case i:
                      return S;
                    default:
                      return k;
                  }
              }
            case r:
              return k;
          }
        }
      }
      var C = i,
        q = t,
        _ = u,
        v = n,
        w = m,
        P = d,
        j = r,
        $ = a,
        B = o,
        I = c;
      (e.ContextConsumer = l),
        (e.ContextProvider = C),
        (e.Element = q),
        (e.ForwardRef = _),
        (e.Fragment = v),
        (e.Lazy = w),
        (e.Memo = P),
        (e.Portal = j),
        (e.Profiler = $),
        (e.StrictMode = B),
        (e.Suspense = I),
        (e.isAsyncMode = function () {
          return !1;
        }),
        (e.isConcurrentMode = function () {
          return !1;
        }),
        (e.isContextConsumer = function (S) {
          return E(S) === l;
        }),
        (e.isContextProvider = function (S) {
          return E(S) === i;
        }),
        (e.isElement = function (S) {
          return typeof S == "object" && S !== null && S.$$typeof === t;
        }),
        (e.isForwardRef = function (S) {
          return E(S) === u;
        }),
        (e.isFragment = function (S) {
          return E(S) === n;
        }),
        (e.isLazy = function (S) {
          return E(S) === m;
        }),
        (e.isMemo = function (S) {
          return E(S) === d;
        }),
        (e.isPortal = function (S) {
          return E(S) === r;
        }),
        (e.isProfiler = function (S) {
          return E(S) === a;
        }),
        (e.isStrictMode = function (S) {
          return E(S) === o;
        }),
        (e.isSuspense = function (S) {
          return E(S) === c;
        }),
        (e.isValidElementType = function (S) {
          return (
            typeof S == "string" ||
            typeof S == "function" ||
            S === n ||
            S === a ||
            S === h ||
            S === o ||
            S === c ||
            S === s ||
            S === y ||
            (typeof S == "object" &&
              S !== null &&
              (S.$$typeof === m ||
                S.$$typeof === d ||
                S.$$typeof === i ||
                S.$$typeof === l ||
                S.$$typeof === u ||
                S.$$typeof === b ||
                S.$$typeof === p ||
                S[0] === f))
          );
        }),
        (e.typeOf = E);
    },
  }),
  Hw = R({
    "../../node_modules/@testing-library/dom/node_modules/react-is/index.js"(e, t) {
      t.exports = Fw();
    },
  }),
  Uw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/ReactElement.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = o(Hw()),
        r = dl();
      function n(m) {
        if (typeof WeakMap != "function") return null;
        var p = new WeakMap(),
          f = new WeakMap();
        return (n = function (b) {
          return b ? f : p;
        })(m);
      }
      function o(m, p) {
        if (!p && m && m.__esModule) return m;
        if (m === null || (typeof m != "object" && typeof m != "function")) return { default: m };
        var f = n(p);
        if (f && f.has(m)) return f.get(m);
        var b = {},
          h = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var y in m)
          if (y !== "default" && Object.prototype.hasOwnProperty.call(m, y)) {
            var g = h ? Object.getOwnPropertyDescriptor(m, y) : null;
            g && (g.get || g.set) ? Object.defineProperty(b, y, g) : (b[y] = m[y]);
          }
        return (b.default = m), f && f.set(m, b), b;
      }
      var a = (m, p = []) => (
          Array.isArray(m)
            ? m.forEach((f) => {
                a(f, p);
              })
            : m != null && m !== !1 && p.push(m),
          p
        ),
        i = (m) => {
          let p = m.type;
          if (typeof p == "string") return p;
          if (typeof p == "function") return p.displayName || p.name || "Unknown";
          if (t.isFragment(m)) return "React.Fragment";
          if (t.isSuspense(m)) return "React.Suspense";
          if (typeof p == "object" && p !== null) {
            if (t.isContextProvider(m)) return "Context.Provider";
            if (t.isContextConsumer(m)) return "Context.Consumer";
            if (t.isForwardRef(m)) {
              if (p.displayName) return p.displayName;
              let f = p.render.displayName || p.render.name || "";
              return f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef";
            }
            if (t.isMemo(m)) {
              let f = p.displayName || p.type.displayName || p.type.name || "";
              return f !== "" ? "Memo(" + f + ")" : "Memo";
            }
          }
          return "UNDEFINED";
        },
        l = (m) => {
          let { props: p } = m;
          return Object.keys(p)
            .filter((f) => f !== "children" && p[f] !== void 0)
            .sort();
        },
        u = (m, p, f, b, h, y) =>
          ++b > p.maxDepth
            ? (0, r.printElementAsLeaf)(i(m), p)
            : (0, r.printElement)(
                i(m),
                (0, r.printProps)(l(m), m.props, p, f + p.indent, b, h, y),
                (0, r.printChildren)(a(m.props.children), p, f + p.indent, b, h, y),
                p,
                f
              );
      e.serialize = u;
      var c = (m) => m != null && t.isElement(m);
      e.test = c;
      var s = { serialize: u, test: c },
        d = s;
      e.default = d;
    },
  }),
  Vw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/plugins/ReactTestComponent.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.test = e.serialize = e.default = void 0);
      var t = dl(),
        r = (function () {
          return typeof globalThis < "u"
            ? globalThis
            : typeof r < "u"
            ? r
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : Function("return this")();
        })(),
        n = r["jest-symbol-do-not-touch"] || r.Symbol,
        o = typeof n == "function" && n.for ? n.for("react.test.json") : 245830487,
        a = (s) => {
          let { props: d } = s;
          return d
            ? Object.keys(d)
                .filter((m) => d[m] !== void 0)
                .sort()
            : [];
        },
        i = (s, d, m, p, f, b) =>
          ++p > d.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, d)
            : (0, t.printElement)(
                s.type,
                s.props ? (0, t.printProps)(a(s), s.props, d, m + d.indent, p, f, b) : "",
                s.children ? (0, t.printChildren)(s.children, d, m + d.indent, p, f, b) : "",
                d,
                m
              );
      e.serialize = i;
      var l = (s) => s && s.$$typeof === o;
      e.test = l;
      var u = { serialize: i, test: l },
        c = u;
      e.default = c;
    },
  }),
  zw = R({
    "../../node_modules/@testing-library/dom/node_modules/pretty-format/build/index.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = oe),
        (e.plugins = void 0);
      var t = s(Pp()),
        r = go(),
        n = s(Nw()),
        o = s(Iw()),
        a = s(Bw()),
        i = s(Lw()),
        l = s(Dw()),
        u = s(Uw()),
        c = s(Vw());
      function s(M) {
        return M && M.__esModule ? M : { default: M };
      }
      var d = Object.prototype.toString,
        m = Date.prototype.toISOString,
        p = Error.prototype.toString,
        f = RegExp.prototype.toString,
        b = (M) => (typeof M.constructor == "function" && M.constructor.name) || "Object",
        h = (M) => typeof window < "u" && M === window,
        y = /^Symbol\((.*)\)(.*)$/,
        g = /\n/gi,
        E = class extends Error {
          constructor(M, V) {
            super(M), (this.stack = V), (this.name = this.constructor.name);
          }
        };
      function C(M) {
        return (
          M === "[object Array]" ||
          M === "[object ArrayBuffer]" ||
          M === "[object DataView]" ||
          M === "[object Float32Array]" ||
          M === "[object Float64Array]" ||
          M === "[object Int8Array]" ||
          M === "[object Int16Array]" ||
          M === "[object Int32Array]" ||
          M === "[object Uint8Array]" ||
          M === "[object Uint8ClampedArray]" ||
          M === "[object Uint16Array]" ||
          M === "[object Uint32Array]"
        );
      }
      function q(M) {
        return Object.is(M, -0) ? "-0" : String(M);
      }
      function _(M) {
        return `${M}n`;
      }
      function v(M, V) {
        return V ? "[Function " + (M.name || "anonymous") + "]" : "[Function]";
      }
      function w(M) {
        return String(M).replace(y, "Symbol($1)");
      }
      function P(M) {
        return "[" + p.call(M) + "]";
      }
      function j(M, V, J, te) {
        if (M === !0 || M === !1) return "" + M;
        if (M === void 0) return "undefined";
        if (M === null) return "null";
        let ee = typeof M;
        if (ee === "number") return q(M);
        if (ee === "bigint") return _(M);
        if (ee === "string") return te ? '"' + M.replace(/"|\\/g, "\\$&") + '"' : '"' + M + '"';
        if (ee === "function") return v(M, V);
        if (ee === "symbol") return w(M);
        let Re = d.call(M);
        return Re === "[object WeakMap]"
          ? "WeakMap {}"
          : Re === "[object WeakSet]"
          ? "WeakSet {}"
          : Re === "[object Function]" || Re === "[object GeneratorFunction]"
          ? v(M, V)
          : Re === "[object Symbol]"
          ? w(M)
          : Re === "[object Date]"
          ? isNaN(+M)
            ? "Date { NaN }"
            : m.call(M)
          : Re === "[object Error]"
          ? P(M)
          : Re === "[object RegExp]"
          ? J
            ? f.call(M).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
            : f.call(M)
          : M instanceof Error
          ? P(M)
          : null;
      }
      function $(M, V, J, te, ee, Re) {
        if (ee.indexOf(M) !== -1) return "[Circular]";
        (ee = ee.slice()), ee.push(M);
        let we = ++te > V.maxDepth,
          qe = V.min;
        if (V.callToJSON && !we && M.toJSON && typeof M.toJSON == "function" && !Re) return k(M.toJSON(), V, J, te, ee, !0);
        let Ge = d.call(M);
        return Ge === "[object Arguments]"
          ? we
            ? "[Arguments]"
            : (qe ? "" : "Arguments ") + "[" + (0, r.printListItems)(M, V, J, te, ee, k) + "]"
          : C(Ge)
          ? we
            ? "[" + M.constructor.name + "]"
            : (qe || (!V.printBasicPrototype && M.constructor.name === "Array") ? "" : M.constructor.name + " ") +
              "[" +
              (0, r.printListItems)(M, V, J, te, ee, k) +
              "]"
          : Ge === "[object Map]"
          ? we
            ? "[Map]"
            : "Map {" + (0, r.printIteratorEntries)(M.entries(), V, J, te, ee, k, " => ") + "}"
          : Ge === "[object Set]"
          ? we
            ? "[Set]"
            : "Set {" + (0, r.printIteratorValues)(M.values(), V, J, te, ee, k) + "}"
          : we || h(M)
          ? "[" + b(M) + "]"
          : (qe || (!V.printBasicPrototype && b(M) === "Object") ? "" : b(M) + " ") +
            "{" +
            (0, r.printObjectProperties)(M, V, J, te, ee, k) +
            "}";
      }
      function B(M) {
        return M.serialize != null;
      }
      function I(M, V, J, te, ee, Re) {
        let we;
        try {
          we = B(M)
            ? M.serialize(V, J, te, ee, Re, k)
            : M.print(
                V,
                (qe) => k(qe, J, te, ee, Re),
                (qe) => {
                  let Ge = te + J.indent;
                  return (
                    Ge +
                    qe.replace(
                      g,
                      `
` + Ge
                    )
                  );
                },
                { edgeSpacing: J.spacingOuter, min: J.min, spacing: J.spacingInner },
                J.colors
              );
        } catch (qe) {
          throw new E(qe.message, qe.stack);
        }
        if (typeof we != "string") throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof we}".`);
        return we;
      }
      function S(M, V) {
        for (let J = 0; J < M.length; J++)
          try {
            if (M[J].test(V)) return M[J];
          } catch (te) {
            throw new E(te.message, te.stack);
          }
        return null;
      }
      function k(M, V, J, te, ee, Re) {
        let we = S(V.plugins, M);
        if (we !== null) return I(we, M, V, J, te, ee);
        let qe = j(M, V.printFunctionName, V.escapeRegex, V.escapeString);
        return qe !== null ? qe : $(M, V, J, te, ee, Re);
      }
      var U = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" },
        W = Object.keys(U),
        G = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: U,
        };
      e.DEFAULT_OPTIONS = G;
      function le(M) {
        if (
          (Object.keys(M).forEach((V) => {
            if (!G.hasOwnProperty(V)) throw new Error(`pretty-format: Unknown option "${V}".`);
          }),
          M.min && M.indent !== void 0 && M.indent !== 0)
        )
          throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
        if (M.theme !== void 0) {
          if (M.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof M.theme != "object")
            throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof M.theme}".`);
        }
      }
      var ve = (M) =>
          W.reduce((V, J) => {
            let te = M.theme && M.theme[J] !== void 0 ? M.theme[J] : U[J],
              ee = te && t.default[te];
            if (ee && typeof ee.close == "string" && typeof ee.open == "string") V[J] = ee;
            else throw new Error(`pretty-format: Option "theme" has a key "${J}" whose value "${te}" is undefined in ansi-styles.`);
            return V;
          }, Object.create(null)),
        pe = () => W.reduce((M, V) => ((M[V] = { close: "", open: "" }), M), Object.create(null)),
        F = (M) => (M && M.printFunctionName !== void 0 ? M.printFunctionName : G.printFunctionName),
        L = (M) => (M && M.escapeRegex !== void 0 ? M.escapeRegex : G.escapeRegex),
        D = (M) => (M && M.escapeString !== void 0 ? M.escapeString : G.escapeString),
        z = (M) => {
          var V;
          return {
            callToJSON: M && M.callToJSON !== void 0 ? M.callToJSON : G.callToJSON,
            colors: M && M.highlight ? ve(M) : pe(),
            compareKeys: M && typeof M.compareKeys == "function" ? M.compareKeys : G.compareKeys,
            escapeRegex: L(M),
            escapeString: D(M),
            indent: M && M.min ? "" : H(M && M.indent !== void 0 ? M.indent : G.indent),
            maxDepth: M && M.maxDepth !== void 0 ? M.maxDepth : G.maxDepth,
            min: M && M.min !== void 0 ? M.min : G.min,
            plugins: M && M.plugins !== void 0 ? M.plugins : G.plugins,
            printBasicPrototype: (V = M == null ? void 0 : M.printBasicPrototype) !== null && V !== void 0 ? V : !0,
            printFunctionName: F(M),
            spacingInner:
              M && M.min
                ? " "
                : `
`,
            spacingOuter:
              M && M.min
                ? ""
                : `
`,
          };
        };
      function H(M) {
        return new Array(M + 1).join(" ");
      }
      function oe(M, V) {
        if (V && (le(V), V.plugins)) {
          let te = S(V.plugins, M);
          if (te !== null) return I(te, M, z(V), "", 0, []);
        }
        let J = j(M, F(V), L(V), D(V));
        return J !== null ? J : $(M, z(V), "", 0, []);
      }
      var se = {
        AsymmetricMatcher: n.default,
        ConvertAnsi: o.default,
        DOMCollection: a.default,
        DOMElement: i.default,
        Immutable: l.default,
        ReactElement: u.default,
        ReactTestComponent: c.default,
      };
      e.plugins = se;
      var st = oe;
      e.default = st;
    },
  }),
  Gw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iteratorProxy.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      function t() {
        var n = this,
          o = 0,
          a = {
            "@@iterator": function () {
              return a;
            },
            next: function () {
              if (o < n.length) {
                var i = n[o];
                return (o = o + 1), { done: !1, value: i };
              } else return { done: !0 };
            },
          };
        return a;
      }
      var r = t;
      e.default = r;
    },
  }),
  pn = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/util/iterationDecorator.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
      var t = r(Gw());
      function r(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function n(a) {
        "@babel/helpers - typeof";
        return (
          (n =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (i) {
                  return typeof i;
                }
              : function (i) {
                  return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
                }),
          n(a)
        );
      }
      function o(a, i) {
        return (
          typeof Symbol == "function" &&
            n(Symbol.iterator) === "symbol" &&
            Object.defineProperty(a, Symbol.iterator, { value: t.default.bind(i) }),
          a
        );
      }
    },
  }),
  Ww = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/ariaPropsMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = r(pn());
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function n(p, f) {
        return i(p) || a(p, f) || u(p, f) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function a(p, f) {
        var b = p == null ? null : (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
        if (b != null) {
          var h = [],
            y = !0,
            g = !1,
            E,
            C;
          try {
            for (b = b.call(p); !(y = (E = b.next()).done) && (h.push(E.value), !(f && h.length === f)); y = !0);
          } catch (q) {
            (g = !0), (C = q);
          } finally {
            try {
              !y && b.return != null && b.return();
            } finally {
              if (g) throw C;
            }
          }
          return h;
        }
      }
      function i(p) {
        if (Array.isArray(p)) return p;
      }
      function l(p, f) {
        var b = (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
        if (!b) {
          if (Array.isArray(p) || (b = u(p)) || (f && p && typeof p.length == "number")) {
            b && (p = b);
            var h = 0,
              y = function () {};
            return {
              s: y,
              n: function () {
                return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
              },
              e: function (q) {
                throw q;
              },
              f: y,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g = !0,
          E = !1,
          C;
        return {
          s: function () {
            b = b.call(p);
          },
          n: function () {
            var q = b.next();
            return (g = q.done), q;
          },
          e: function (q) {
            (E = !0), (C = q);
          },
          f: function () {
            try {
              !g && b.return != null && b.return();
            } finally {
              if (E) throw C;
            }
          },
        };
      }
      function u(p, f) {
        if (p) {
          if (typeof p == "string") return c(p, f);
          var b = Object.prototype.toString.call(p).slice(8, -1);
          if ((b === "Object" && p.constructor && (b = p.constructor.name), b === "Map" || b === "Set")) return Array.from(p);
          if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) return c(p, f);
        }
      }
      function c(p, f) {
        (f == null || f > p.length) && (f = p.length);
        for (var b = 0, h = new Array(f); b < f; b++) h[b] = p[b];
        return h;
      }
      var s = [
          ["aria-activedescendant", { type: "id" }],
          ["aria-atomic", { type: "boolean" }],
          ["aria-autocomplete", { type: "token", values: ["inline", "list", "both", "none"] }],
          ["aria-braillelabel", { type: "string" }],
          ["aria-brailleroledescription", { type: "string" }],
          ["aria-busy", { type: "boolean" }],
          ["aria-checked", { type: "tristate" }],
          ["aria-colcount", { type: "integer" }],
          ["aria-colindex", { type: "integer" }],
          ["aria-colspan", { type: "integer" }],
          ["aria-controls", { type: "idlist" }],
          ["aria-current", { type: "token", values: ["page", "step", "location", "date", "time", !0, !1] }],
          ["aria-describedby", { type: "idlist" }],
          ["aria-description", { type: "string" }],
          ["aria-details", { type: "id" }],
          ["aria-disabled", { type: "boolean" }],
          ["aria-dropeffect", { type: "tokenlist", values: ["copy", "execute", "link", "move", "none", "popup"] }],
          ["aria-errormessage", { type: "id" }],
          ["aria-expanded", { type: "boolean", allowundefined: !0 }],
          ["aria-flowto", { type: "idlist" }],
          ["aria-grabbed", { type: "boolean", allowundefined: !0 }],
          ["aria-haspopup", { type: "token", values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"] }],
          ["aria-hidden", { type: "boolean", allowundefined: !0 }],
          ["aria-invalid", { type: "token", values: ["grammar", !1, "spelling", !0] }],
          ["aria-keyshortcuts", { type: "string" }],
          ["aria-label", { type: "string" }],
          ["aria-labelledby", { type: "idlist" }],
          ["aria-level", { type: "integer" }],
          ["aria-live", { type: "token", values: ["assertive", "off", "polite"] }],
          ["aria-modal", { type: "boolean" }],
          ["aria-multiline", { type: "boolean" }],
          ["aria-multiselectable", { type: "boolean" }],
          ["aria-orientation", { type: "token", values: ["vertical", "undefined", "horizontal"] }],
          ["aria-owns", { type: "idlist" }],
          ["aria-placeholder", { type: "string" }],
          ["aria-posinset", { type: "integer" }],
          ["aria-pressed", { type: "tristate" }],
          ["aria-readonly", { type: "boolean" }],
          ["aria-relevant", { type: "tokenlist", values: ["additions", "all", "removals", "text"] }],
          ["aria-required", { type: "boolean" }],
          ["aria-roledescription", { type: "string" }],
          ["aria-rowcount", { type: "integer" }],
          ["aria-rowindex", { type: "integer" }],
          ["aria-rowspan", { type: "integer" }],
          ["aria-selected", { type: "boolean", allowundefined: !0 }],
          ["aria-setsize", { type: "integer" }],
          ["aria-sort", { type: "token", values: ["ascending", "descending", "none", "other"] }],
          ["aria-valuemax", { type: "number" }],
          ["aria-valuemin", { type: "number" }],
          ["aria-valuenow", { type: "number" }],
          ["aria-valuetext", { type: "string" }],
        ],
        d = {
          entries: function () {
            return s;
          },
          forEach: function (p) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              b = l(s),
              h;
            try {
              for (b.s(); !(h = b.n()).done; ) {
                var y = n(h.value, 2),
                  g = y[0],
                  E = y[1];
                p.call(f, E, g, s);
              }
            } catch (C) {
              b.e(C);
            } finally {
              b.f();
            }
          },
          get: function (p) {
            var f = s.find(function (b) {
              return b[0] === p;
            });
            return f && f[1];
          },
          has: function (p) {
            return !!d.get(p);
          },
          keys: function () {
            return s.map(function (p) {
              var f = n(p, 1),
                b = f[0];
              return b;
            });
          },
          values: function () {
            return s.map(function (p) {
              var f = n(p, 2),
                b = f[1];
              return b;
            });
          },
        },
        m = (0, t.default)(d, d.entries());
      e.default = m;
    },
  }),
  Kw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/domMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = r(pn());
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function n(p, f) {
        return i(p) || a(p, f) || u(p, f) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function a(p, f) {
        var b = p == null ? null : (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
        if (b != null) {
          var h = [],
            y = !0,
            g = !1,
            E,
            C;
          try {
            for (b = b.call(p); !(y = (E = b.next()).done) && (h.push(E.value), !(f && h.length === f)); y = !0);
          } catch (q) {
            (g = !0), (C = q);
          } finally {
            try {
              !y && b.return != null && b.return();
            } finally {
              if (g) throw C;
            }
          }
          return h;
        }
      }
      function i(p) {
        if (Array.isArray(p)) return p;
      }
      function l(p, f) {
        var b = (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
        if (!b) {
          if (Array.isArray(p) || (b = u(p)) || (f && p && typeof p.length == "number")) {
            b && (p = b);
            var h = 0,
              y = function () {};
            return {
              s: y,
              n: function () {
                return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
              },
              e: function (q) {
                throw q;
              },
              f: y,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g = !0,
          E = !1,
          C;
        return {
          s: function () {
            b = b.call(p);
          },
          n: function () {
            var q = b.next();
            return (g = q.done), q;
          },
          e: function (q) {
            (E = !0), (C = q);
          },
          f: function () {
            try {
              !g && b.return != null && b.return();
            } finally {
              if (E) throw C;
            }
          },
        };
      }
      function u(p, f) {
        if (p) {
          if (typeof p == "string") return c(p, f);
          var b = Object.prototype.toString.call(p).slice(8, -1);
          if ((b === "Object" && p.constructor && (b = p.constructor.name), b === "Map" || b === "Set")) return Array.from(p);
          if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) return c(p, f);
        }
      }
      function c(p, f) {
        (f == null || f > p.length) && (f = p.length);
        for (var b = 0, h = new Array(f); b < f; b++) h[b] = p[b];
        return h;
      }
      var s = [
          ["a", { reserved: !1 }],
          ["abbr", { reserved: !1 }],
          ["acronym", { reserved: !1 }],
          ["address", { reserved: !1 }],
          ["applet", { reserved: !1 }],
          ["area", { reserved: !1 }],
          ["article", { reserved: !1 }],
          ["aside", { reserved: !1 }],
          ["audio", { reserved: !1 }],
          ["b", { reserved: !1 }],
          ["base", { reserved: !0 }],
          ["bdi", { reserved: !1 }],
          ["bdo", { reserved: !1 }],
          ["big", { reserved: !1 }],
          ["blink", { reserved: !1 }],
          ["blockquote", { reserved: !1 }],
          ["body", { reserved: !1 }],
          ["br", { reserved: !1 }],
          ["button", { reserved: !1 }],
          ["canvas", { reserved: !1 }],
          ["caption", { reserved: !1 }],
          ["center", { reserved: !1 }],
          ["cite", { reserved: !1 }],
          ["code", { reserved: !1 }],
          ["col", { reserved: !0 }],
          ["colgroup", { reserved: !0 }],
          ["content", { reserved: !1 }],
          ["data", { reserved: !1 }],
          ["datalist", { reserved: !1 }],
          ["dd", { reserved: !1 }],
          ["del", { reserved: !1 }],
          ["details", { reserved: !1 }],
          ["dfn", { reserved: !1 }],
          ["dialog", { reserved: !1 }],
          ["dir", { reserved: !1 }],
          ["div", { reserved: !1 }],
          ["dl", { reserved: !1 }],
          ["dt", { reserved: !1 }],
          ["em", { reserved: !1 }],
          ["embed", { reserved: !1 }],
          ["fieldset", { reserved: !1 }],
          ["figcaption", { reserved: !1 }],
          ["figure", { reserved: !1 }],
          ["font", { reserved: !1 }],
          ["footer", { reserved: !1 }],
          ["form", { reserved: !1 }],
          ["frame", { reserved: !1 }],
          ["frameset", { reserved: !1 }],
          ["h1", { reserved: !1 }],
          ["h2", { reserved: !1 }],
          ["h3", { reserved: !1 }],
          ["h4", { reserved: !1 }],
          ["h5", { reserved: !1 }],
          ["h6", { reserved: !1 }],
          ["head", { reserved: !0 }],
          ["header", { reserved: !1 }],
          ["hgroup", { reserved: !1 }],
          ["hr", { reserved: !1 }],
          ["html", { reserved: !0 }],
          ["i", { reserved: !1 }],
          ["iframe", { reserved: !1 }],
          ["img", { reserved: !1 }],
          ["input", { reserved: !1 }],
          ["ins", { reserved: !1 }],
          ["kbd", { reserved: !1 }],
          ["keygen", { reserved: !1 }],
          ["label", { reserved: !1 }],
          ["legend", { reserved: !1 }],
          ["li", { reserved: !1 }],
          ["link", { reserved: !0 }],
          ["main", { reserved: !1 }],
          ["map", { reserved: !1 }],
          ["mark", { reserved: !1 }],
          ["marquee", { reserved: !1 }],
          ["menu", { reserved: !1 }],
          ["menuitem", { reserved: !1 }],
          ["meta", { reserved: !0 }],
          ["meter", { reserved: !1 }],
          ["nav", { reserved: !1 }],
          ["noembed", { reserved: !0 }],
          ["noscript", { reserved: !0 }],
          ["object", { reserved: !1 }],
          ["ol", { reserved: !1 }],
          ["optgroup", { reserved: !1 }],
          ["option", { reserved: !1 }],
          ["output", { reserved: !1 }],
          ["p", { reserved: !1 }],
          ["param", { reserved: !0 }],
          ["picture", { reserved: !0 }],
          ["pre", { reserved: !1 }],
          ["progress", { reserved: !1 }],
          ["q", { reserved: !1 }],
          ["rp", { reserved: !1 }],
          ["rt", { reserved: !1 }],
          ["rtc", { reserved: !1 }],
          ["ruby", { reserved: !1 }],
          ["s", { reserved: !1 }],
          ["samp", { reserved: !1 }],
          ["script", { reserved: !0 }],
          ["section", { reserved: !1 }],
          ["select", { reserved: !1 }],
          ["small", { reserved: !1 }],
          ["source", { reserved: !0 }],
          ["spacer", { reserved: !1 }],
          ["span", { reserved: !1 }],
          ["strike", { reserved: !1 }],
          ["strong", { reserved: !1 }],
          ["style", { reserved: !0 }],
          ["sub", { reserved: !1 }],
          ["summary", { reserved: !1 }],
          ["sup", { reserved: !1 }],
          ["table", { reserved: !1 }],
          ["tbody", { reserved: !1 }],
          ["td", { reserved: !1 }],
          ["textarea", { reserved: !1 }],
          ["tfoot", { reserved: !1 }],
          ["th", { reserved: !1 }],
          ["thead", { reserved: !1 }],
          ["time", { reserved: !1 }],
          ["title", { reserved: !0 }],
          ["tr", { reserved: !1 }],
          ["track", { reserved: !0 }],
          ["tt", { reserved: !1 }],
          ["u", { reserved: !1 }],
          ["ul", { reserved: !1 }],
          ["var", { reserved: !1 }],
          ["video", { reserved: !1 }],
          ["wbr", { reserved: !1 }],
          ["xmp", { reserved: !1 }],
        ],
        d = {
          entries: function () {
            return s;
          },
          forEach: function (p) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              b = l(s),
              h;
            try {
              for (b.s(); !(h = b.n()).done; ) {
                var y = n(h.value, 2),
                  g = y[0],
                  E = y[1];
                p.call(f, E, g, s);
              }
            } catch (C) {
              b.e(C);
            } finally {
              b.f();
            }
          },
          get: function (p) {
            var f = s.find(function (b) {
              return b[0] === p;
            });
            return f && f[1];
          },
          has: function (p) {
            return !!d.get(p);
          },
          keys: function () {
            return s.map(function (p) {
              var f = n(p, 1),
                b = f[0];
              return b;
            });
          },
          values: function () {
            return s.map(function (p) {
              var f = n(p, 2),
                b = f[1];
              return b;
            });
          },
        },
        m = (0, t.default)(d, d.entries());
      e.default = m;
    },
  }),
  Yw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Jw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-activedescendant": null, "aria-disabled": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Xw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null },
          relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Qw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Zw = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-valuemax": null, "aria-valuemin": null, "aria-valuenow": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  eC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {
            "aria-atomic": null,
            "aria-busy": null,
            "aria-controls": null,
            "aria-current": null,
            "aria-describedby": null,
            "aria-details": null,
            "aria-dropeffect": null,
            "aria-flowto": null,
            "aria-grabbed": null,
            "aria-hidden": null,
            "aria-keyshortcuts": null,
            "aria-label": null,
            "aria-labelledby": null,
            "aria-live": null,
            "aria-owns": null,
            "aria-relevant": null,
            "aria-roledescription": null,
          },
          relatedConcepts: [
            { concept: { name: "role" }, module: "XHTML" },
            { concept: { name: "type" }, module: "Dublin Core" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  tC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "frontmatter" }, module: "DTB" },
            { concept: { name: "level" }, module: "DTB" },
            { concept: { name: "level" }, module: "SMIL" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  rC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  nC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "structure", "section", "group"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  oC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        },
        r = t;
      e.default = r;
    },
  }),
  aC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        },
        r = t;
      e.default = r;
    },
  }),
  iC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-modal": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        },
        r = t;
      e.default = r;
    },
  }),
  lC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = p(Yw()),
        r = p(Jw()),
        n = p(Xw()),
        o = p(Qw()),
        a = p(Zw()),
        i = p(eC()),
        l = p(tC()),
        u = p(rC()),
        c = p(nC()),
        s = p(oC()),
        d = p(aC()),
        m = p(iC());
      function p(h) {
        return h && h.__esModule ? h : { default: h };
      }
      var f = [
          ["command", t.default],
          ["composite", r.default],
          ["input", n.default],
          ["landmark", o.default],
          ["range", a.default],
          ["roletype", i.default],
          ["section", l.default],
          ["sectionhead", u.default],
          ["select", c.default],
          ["structure", s.default],
          ["widget", d.default],
          ["window", m.default],
        ],
        b = f;
      e.default = b;
    },
  }),
  sC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-atomic": "true", "aria-live": "assertive" },
          relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  uC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "alert"],
            ["roletype", "window", "dialog"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  cC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  dC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/articleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-posinset": null, "aria-setsize": null },
          relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "document"]],
        },
        r = t;
      e.default = r;
    },
  }),
  pC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "header" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  mC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "blockquote" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  fC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-pressed": null },
          relatedConcepts: [
            { concept: { attributes: [{ name: "type", value: "button" }], name: "input" }, module: "HTML" },
            { concept: { attributes: [{ name: "type", value: "image" }], name: "input" }, module: "HTML" },
            { concept: { attributes: [{ name: "type", value: "reset" }], name: "input" }, module: "HTML" },
            { concept: { attributes: [{ name: "type", value: "submit" }], name: "input" }, module: "HTML" },
            { concept: { name: "button" }, module: "HTML" },
            { concept: { name: "trigger" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        },
        r = t;
      e.default = r;
    },
  }),
  hC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/captionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "caption" }, module: "HTML" }],
          requireContextRole: ["figure", "grid", "table"],
          requiredContextRole: ["figure", "grid", "table"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  bC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/cellRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-colindex": null, "aria-colspan": null, "aria-rowindex": null, "aria-rowspan": null },
          relatedConcepts: [{ concept: { constraints: ["ancestor table element has table role"], name: "td" }, module: "HTML" }],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  yC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-checked": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
          },
          relatedConcepts: [
            { concept: { attributes: [{ name: "type", value: "checkbox" }], name: "input" }, module: "HTML" },
            { concept: { name: "option" }, module: "ARIA" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input"]],
        },
        r = t;
      e.default = r;
    },
  }),
  gC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/codeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "code" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  vC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-sort": null },
          relatedConcepts: [
            { concept: { name: "th" }, module: "HTML" },
            { concept: { attributes: [{ name: "scope", value: "col" }], name: "th" }, module: "HTML" },
            { concept: { attributes: [{ name: "scope", value: "colgroup" }], name: "th" }, module: "HTML" },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "structure", "section", "cell", "gridcell"],
            ["roletype", "widget", "gridcell"],
            ["roletype", "structure", "sectionhead"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  _C = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-autocomplete": null,
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-expanded": "false",
            "aria-haspopup": "listbox",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "email" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "search" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "tel" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "text" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "url" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "url" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "multiple" },
                  { constraints: ["undefined"], name: "size" },
                ],
                constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
                name: "select",
              },
              module: "HTML",
            },
            { concept: { name: "select" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-controls": null, "aria-expanded": "false" },
          superClass: [["roletype", "widget", "input"]],
        },
        r = t;
      e.default = r;
    },
  }),
  RC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "aside" }, module: "HTML" },
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-label" }],
                constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
                name: "aside",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
                constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
                name: "aside",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  wC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "footer" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  CC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  qC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "del" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  EC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "window"]],
        },
        r = t;
      e.default = r;
    },
  }),
  PC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ module: "DAISY Guide" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "list"]],
        },
        r = t;
      e.default = r;
    },
  }),
  OC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/documentRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }, { concept: { name: "html" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  TC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "em" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  SC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/feedRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["article"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "list"]],
        },
        r = t;
      e.default = r;
    },
  }),
  AC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/figureRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  MC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/formRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "form" }, module: "HTML" },
            { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "form" }, module: "HTML" },
            { concept: { attributes: [{ constraints: ["set"], name: "name" }], name: "form" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  xC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/genericRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [
            { concept: { name: "a" }, module: "HTML" },
            { concept: { name: "area" }, module: "HTML" },
            { concept: { name: "aside" }, module: "HTML" },
            { concept: { name: "b" }, module: "HTML" },
            { concept: { name: "bdo" }, module: "HTML" },
            { concept: { name: "body" }, module: "HTML" },
            { concept: { name: "data" }, module: "HTML" },
            { concept: { name: "div" }, module: "HTML" },
            {
              concept: {
                constraints: [
                  "scoped to the main element",
                  "scoped to a sectioning content element",
                  "scoped to a sectioning root element other than body",
                ],
                name: "footer",
              },
              module: "HTML",
            },
            {
              concept: {
                constraints: [
                  "scoped to the main element",
                  "scoped to a sectioning content element",
                  "scoped to a sectioning root element other than body",
                ],
                name: "header",
              },
              module: "HTML",
            },
            { concept: { name: "hgroup" }, module: "HTML" },
            { concept: { name: "i" }, module: "HTML" },
            { concept: { name: "pre" }, module: "HTML" },
            { concept: { name: "q" }, module: "HTML" },
            { concept: { name: "samp" }, module: "HTML" },
            { concept: { name: "section" }, module: "HTML" },
            { concept: { name: "small" }, module: "HTML" },
            { concept: { name: "span" }, module: "HTML" },
            { concept: { name: "u" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  jC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-multiselectable": null, "aria-readonly": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "structure", "section", "table"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  NC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-selected": null,
          },
          relatedConcepts: [
            {
              concept: { constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"], name: "td" },
              module: "HTML",
            },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "widget"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  $C = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/groupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-activedescendant": null, "aria-disabled": null },
          relatedConcepts: [
            { concept: { name: "details" }, module: "HTML" },
            { concept: { name: "fieldset" }, module: "HTML" },
            { concept: { name: "optgroup" }, module: "HTML" },
            { concept: { name: "address" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  IC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/headingRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-level": "2" },
          relatedConcepts: [
            { concept: { name: "h1" }, module: "HTML" },
            { concept: { name: "h2" }, module: "HTML" },
            { concept: { name: "h3" }, module: "HTML" },
            { concept: { name: "h4" }, module: "HTML" },
            { concept: { name: "h5" }, module: "HTML" },
            { concept: { name: "h6" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-level": "2" },
          superClass: [["roletype", "structure", "sectionhead"]],
        },
        r = t;
      e.default = r;
    },
  }),
  BC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/imgRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { attributes: [{ constraints: ["set"], name: "alt" }], name: "img" }, module: "HTML" },
            { concept: { attributes: [{ constraints: ["undefined"], name: "alt" }], name: "img" }, module: "HTML" },
            { concept: { name: "imggroup" }, module: "DTB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  kC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "ins" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  LC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/linkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null },
          relatedConcepts: [
            { concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "a" }, module: "HTML" },
            { concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "area" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        },
        r = t;
      e.default = r;
    },
  }),
  DC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "menu" }, module: "HTML" },
            { concept: { name: "ol" }, module: "HTML" },
            { concept: { name: "ul" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["listitem"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  FC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-invalid": null,
            "aria-multiselectable": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-orientation": "vertical",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: [">1"], name: "size" }],
                constraints: ["the size attribute value is greater than 1"],
                name: "select",
              },
              module: "HTML",
            },
            { concept: { attributes: [{ name: "multiple" }], name: "select" }, module: "HTML" },
            { concept: { name: "datalist" }, module: "HTML" },
            { concept: { name: "list" }, module: "ARIA" },
            { concept: { name: "select" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["option", "group"], ["option"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  HC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-level": null, "aria-posinset": null, "aria-setsize": null },
          relatedConcepts: [
            {
              concept: { constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], name: "li" },
              module: "HTML",
            },
            { concept: { name: "item" }, module: "XForms" },
          ],
          requireContextRole: ["directory", "list"],
          requiredContextRole: ["directory", "list"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  UC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/logRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-live": "polite" },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  VC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mainRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  zC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/markRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: [],
          props: { "aria-braillelabel": null, "aria-brailleroledescription": null, "aria-description": null },
          relatedConcepts: [{ concept: { name: "mark" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  GC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  WC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/mathRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  KC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "vertical" },
          relatedConcepts: [
            { concept: { name: "MENU" }, module: "JAPI" },
            { concept: { name: "list" }, module: "ARIA" },
            { concept: { name: "select" }, module: "XForms" },
            { concept: { name: "sidebar" }, module: "DTB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ["menuitem", "group"],
            ["menuitemradio", "group"],
            ["menuitemcheckbox", "group"],
            ["menuitem"],
            ["menuitemcheckbox"],
            ["menuitemradio"],
          ],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  YC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "horizontal" },
          relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ["menuitem", "group"],
            ["menuitemradio", "group"],
            ["menuitemcheckbox", "group"],
            ["menuitem"],
            ["menuitemcheckbox"],
            ["menuitemradio"],
          ],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select", "menu"],
            ["roletype", "structure", "section", "group", "select", "menu"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  JC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-posinset": null, "aria-setsize": null },
          relatedConcepts: [
            { concept: { name: "MENU_ITEM" }, module: "JAPI" },
            { concept: { name: "listitem" }, module: "ARIA" },
            { concept: { name: "option" }, module: "ARIA" },
          ],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        },
        r = t;
      e.default = r;
    },
  }),
  XC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [
            ["roletype", "widget", "input", "checkbox"],
            ["roletype", "widget", "command", "menuitem"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  QC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [
            ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
            ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
            ["roletype", "widget", "input", "radio"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ZC = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/meterRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-valuetext": null, "aria-valuemax": "100", "aria-valuemin": "0" },
          relatedConcepts: [{ concept: { name: "meter" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-valuenow": null },
          superClass: [["roletype", "structure", "range"]],
        },
        r = t;
      e.default = r;
    },
  }),
  eq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  tq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noneRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  rq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/noteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  nq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/optionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null, "aria-selected": "false" },
          relatedConcepts: [
            { concept: { name: "item" }, module: "XForms" },
            { concept: { name: "listitem" }, module: "ARIA" },
            { concept: { name: "option" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-selected": "false" },
          superClass: [["roletype", "widget", "input"]],
        },
        r = t;
      e.default = r;
    },
  }),
  oq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "p" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  aq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { attributes: [{ name: "alt", value: "" }], name: "img" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  iq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-valuetext": null },
          relatedConcepts: [
            { concept: { name: "progress" }, module: "HTML" },
            { concept: { name: "status" }, module: "ARIA" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "range"],
            ["roletype", "widget"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  lq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radioRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null },
          relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "radio" }], name: "input" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input"]],
        },
        r = t;
      e.default = r;
    },
  }),
  sq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null },
          relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["radio"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  uq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/regionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "section" }, module: "HTML" },
            { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "section" }, module: "HTML" },
            { concept: { name: "Device Independence Glossart perceivable unit" } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  cq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-colindex": null,
            "aria-expanded": null,
            "aria-level": null,
            "aria-posinset": null,
            "aria-rowindex": null,
            "aria-selected": null,
            "aria-setsize": null,
          },
          relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
          requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
          requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
          requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "group"],
            ["roletype", "widget"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  dq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "tbody" }, module: "HTML" },
            { concept: { name: "tfoot" }, module: "HTML" },
            { concept: { name: "thead" }, module: "HTML" },
          ],
          requireContextRole: ["grid", "table", "treegrid"],
          requiredContextRole: ["grid", "table", "treegrid"],
          requiredOwnedElements: [["row"]],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  pq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-sort": null },
          relatedConcepts: [
            { concept: { attributes: [{ name: "scope", value: "row" }], name: "th" }, module: "HTML" },
            { concept: { attributes: [{ name: "scope", value: "rowgroup" }], name: "th" }, module: "HTML" },
          ],
          requireContextRole: ["row", "rowgroup"],
          requiredContextRole: ["row", "rowgroup"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "structure", "section", "cell", "gridcell"],
            ["roletype", "widget", "gridcell"],
            ["roletype", "structure", "sectionhead"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  mq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-valuetext": null,
            "aria-orientation": "vertical",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-controls": null, "aria-valuenow": null },
          superClass: [
            ["roletype", "structure", "range"],
            ["roletype", "widget"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  fq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  hq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "search" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "input", "textbox"]],
        },
        r = t;
      e.default = r;
    },
  }),
  bq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-orientation": "horizontal",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
            "aria-valuenow": null,
            "aria-valuetext": null,
          },
          relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        },
        r = t;
      e.default = r;
    },
  }),
  yq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-valuetext": null,
            "aria-orientation": "horizontal",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
          },
          relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "range" }], name: "input" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-valuenow": null },
          superClass: [
            ["roletype", "widget", "input"],
            ["roletype", "structure", "range"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  gq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-valuetext": null,
            "aria-valuenow": "0",
          },
          relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "number" }], name: "input" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "widget", "input"],
            ["roletype", "structure", "range"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  vq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/statusRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-atomic": "true", "aria-live": "polite" },
          relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  _q = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/strongRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "strong" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Rq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "sub" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  wq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [{ concept: { name: "sup" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Cq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/switchRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input", "checkbox"]],
        },
        r = t;
      e.default = r;
    },
  }),
  qq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-posinset": null,
            "aria-setsize": null,
            "aria-selected": "false",
          },
          relatedConcepts: [],
          requireContextRole: ["tablist"],
          requiredContextRole: ["tablist"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "sectionhead"],
            ["roletype", "widget"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Eq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tableRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-colcount": null, "aria-rowcount": null },
          relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Pq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-level": null, "aria-multiselectable": null, "aria-orientation": "horizontal" },
          relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["tab"]],
          requiredProps: {},
          superClass: [["roletype", "widget", "composite"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Oq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Tq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/termRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "dfn" }, module: "HTML" },
            { concept: { name: "dt" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Sq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-autocomplete": null,
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-multiline": null,
            "aria-placeholder": null,
            "aria-readonly": null,
            "aria-required": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "type" },
                  { constraints: ["undefined"], name: "list" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "email" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "tel" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "text" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "url" },
                ],
                constraints: ["the list attribute is not set"],
                name: "input",
              },
              module: "HTML",
            },
            { concept: { name: "input" }, module: "XForms" },
            { concept: { name: "textarea" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "input"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Aq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "time" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Mq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/timerRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "status"]],
        },
        r = t;
      e.default = r;
    },
  }),
  xq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "horizontal" },
          relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "group"]],
        },
        r = t;
      e.default = r;
    },
  }),
  jq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Nq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-multiselectable": null,
            "aria-required": null,
            "aria-orientation": "vertical",
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  $q = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "grid"],
            ["roletype", "structure", "section", "table", "grid"],
            ["roletype", "widget", "composite", "select", "tree"],
            ["roletype", "structure", "section", "group", "select", "tree"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Iq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-expanded": null, "aria-haspopup": null },
          relatedConcepts: [],
          requireContextRole: ["group", "tree"],
          requiredContextRole: ["group", "tree"],
          requiredOwnedElements: [],
          requiredProps: { "aria-selected": null },
          superClass: [
            ["roletype", "structure", "section", "listitem"],
            ["roletype", "widget", "input", "option"],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Bq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = x(sC()),
        r = x(uC()),
        n = x(cC()),
        o = x(dC()),
        a = x(pC()),
        i = x(mC()),
        l = x(fC()),
        u = x(hC()),
        c = x(bC()),
        s = x(yC()),
        d = x(gC()),
        m = x(vC()),
        p = x(_C()),
        f = x(RC()),
        b = x(wC()),
        h = x(CC()),
        y = x(qC()),
        g = x(EC()),
        E = x(PC()),
        C = x(OC()),
        q = x(TC()),
        _ = x(SC()),
        v = x(AC()),
        w = x(MC()),
        P = x(xC()),
        j = x(jC()),
        $ = x(NC()),
        B = x($C()),
        I = x(IC()),
        S = x(BC()),
        k = x(kC()),
        U = x(LC()),
        W = x(DC()),
        G = x(FC()),
        le = x(HC()),
        ve = x(UC()),
        pe = x(VC()),
        F = x(zC()),
        L = x(GC()),
        D = x(WC()),
        z = x(KC()),
        H = x(YC()),
        oe = x(JC()),
        se = x(XC()),
        st = x(QC()),
        M = x(ZC()),
        V = x(eq()),
        J = x(tq()),
        te = x(rq()),
        ee = x(nq()),
        Re = x(oq()),
        we = x(aq()),
        qe = x(iq()),
        Ge = x(lq()),
        Do = x(sq()),
        Fo = x(uq()),
        Ho = x(cq()),
        Uo = x(dq()),
        Vo = x(pq()),
        zo = x(mq()),
        Go = x(fq()),
        Wo = x(hq()),
        Ko = x(bq()),
        Yo = x(yq()),
        Jo = x(gq()),
        Xo = x(vq()),
        Qo = x(_q()),
        Zo = x(Rq()),
        ea = x(wq()),
        ta = x(Cq()),
        ra = x(qq()),
        na = x(Eq()),
        oa = x(Pq()),
        aa = x(Oq()),
        ia = x(Tq()),
        la = x(Sq()),
        sa = x(Aq()),
        ua = x(Mq()),
        ca = x(xq()),
        da = x(jq()),
        pa = x(Nq()),
        ma = x($q()),
        fa = x(Iq());
      function x(wn) {
        return wn && wn.__esModule ? wn : { default: wn };
      }
      var ha = [
          ["alert", t.default],
          ["alertdialog", r.default],
          ["application", n.default],
          ["article", o.default],
          ["banner", a.default],
          ["blockquote", i.default],
          ["button", l.default],
          ["caption", u.default],
          ["cell", c.default],
          ["checkbox", s.default],
          ["code", d.default],
          ["columnheader", m.default],
          ["combobox", p.default],
          ["complementary", f.default],
          ["contentinfo", b.default],
          ["definition", h.default],
          ["deletion", y.default],
          ["dialog", g.default],
          ["directory", E.default],
          ["document", C.default],
          ["emphasis", q.default],
          ["feed", _.default],
          ["figure", v.default],
          ["form", w.default],
          ["generic", P.default],
          ["grid", j.default],
          ["gridcell", $.default],
          ["group", B.default],
          ["heading", I.default],
          ["img", S.default],
          ["insertion", k.default],
          ["link", U.default],
          ["list", W.default],
          ["listbox", G.default],
          ["listitem", le.default],
          ["log", ve.default],
          ["main", pe.default],
          ["mark", F.default],
          ["marquee", L.default],
          ["math", D.default],
          ["menu", z.default],
          ["menubar", H.default],
          ["menuitem", oe.default],
          ["menuitemcheckbox", se.default],
          ["menuitemradio", st.default],
          ["meter", M.default],
          ["navigation", V.default],
          ["none", J.default],
          ["note", te.default],
          ["option", ee.default],
          ["paragraph", Re.default],
          ["presentation", we.default],
          ["progressbar", qe.default],
          ["radio", Ge.default],
          ["radiogroup", Do.default],
          ["region", Fo.default],
          ["row", Ho.default],
          ["rowgroup", Uo.default],
          ["rowheader", Vo.default],
          ["scrollbar", zo.default],
          ["search", Go.default],
          ["searchbox", Wo.default],
          ["separator", Ko.default],
          ["slider", Yo.default],
          ["spinbutton", Jo.default],
          ["status", Xo.default],
          ["strong", Qo.default],
          ["subscript", Zo.default],
          ["superscript", ea.default],
          ["switch", ta.default],
          ["tab", ra.default],
          ["table", na.default],
          ["tablist", oa.default],
          ["tabpanel", aa.default],
          ["term", ia.default],
          ["textbox", la.default],
          ["time", sa.default],
          ["timer", ua.default],
          ["toolbar", ca.default],
          ["tooltip", da.default],
          ["tree", pa.default],
          ["treegrid", ma.default],
          ["treeitem", fa.default],
        ],
        er = ha;
      e.default = er;
    },
  }),
  kq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Lq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Dq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Fq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Hq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Uq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: ["doc-bibliography"],
          requiredContextRole: ["doc-bibliography"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "listitem"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Vq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["doc-biblioentry"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  zq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Gq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Wq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Kq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Yq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "img"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Jq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Xq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Qq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  Zq = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: ["doc-endnotes"],
          requiredContextRole: ["doc-endnotes"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "listitem"]],
        },
        r = t;
      e.default = r;
    },
  }),
  eE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["doc-endnote"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  tE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  rE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  nE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  oE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  aE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  iE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  lE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["definition"], ["term"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  sE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        },
        r = t;
      e.default = r;
    },
  }),
  uE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "index [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
        },
        r = t;
      e.default = r;
    },
  }),
  cE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  dE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        },
        r = t;
      e.default = r;
    },
  }),
  pE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "note"]],
        },
        r = t;
      e.default = r;
    },
  }),
  mE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "separator"]],
        },
        r = t;
      e.default = r;
    },
  }),
  fE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
        },
        r = t;
      e.default = r;
    },
  }),
  hE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "part [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  bE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  yE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        },
        r = t;
      e.default = r;
    },
  }),
  gE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["none"]],
        },
        r = t;
      e.default = r;
    },
  }),
  vE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        },
        r = t;
      e.default = r;
    },
  }),
  _E = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "sectionhead"]],
        },
        r = t;
      e.default = r;
    },
  }),
  RE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "help [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "note"]],
        },
        r = t;
      e.default = r;
    },
  }),
  wE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [{ concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark", "navigation"]],
        },
        r = t;
      e.default = r;
    },
  }),
  CE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = D(kq()),
        r = D(Lq()),
        n = D(Dq()),
        o = D(Fq()),
        a = D(Hq()),
        i = D(Uq()),
        l = D(Vq()),
        u = D(zq()),
        c = D(Gq()),
        s = D(Wq()),
        d = D(Kq()),
        m = D(Yq()),
        p = D(Jq()),
        f = D(Xq()),
        b = D(Qq()),
        h = D(Zq()),
        y = D(eE()),
        g = D(tE()),
        E = D(rE()),
        C = D(nE()),
        q = D(oE()),
        _ = D(aE()),
        v = D(iE()),
        w = D(lE()),
        P = D(sE()),
        j = D(uE()),
        $ = D(cE()),
        B = D(dE()),
        I = D(pE()),
        S = D(mE()),
        k = D(fE()),
        U = D(hE()),
        W = D(bE()),
        G = D(yE()),
        le = D(gE()),
        ve = D(vE()),
        pe = D(_E()),
        F = D(RE()),
        L = D(wE());
      function D(oe) {
        return oe && oe.__esModule ? oe : { default: oe };
      }
      var z = [
          ["doc-abstract", t.default],
          ["doc-acknowledgments", r.default],
          ["doc-afterword", n.default],
          ["doc-appendix", o.default],
          ["doc-backlink", a.default],
          ["doc-biblioentry", i.default],
          ["doc-bibliography", l.default],
          ["doc-biblioref", u.default],
          ["doc-chapter", c.default],
          ["doc-colophon", s.default],
          ["doc-conclusion", d.default],
          ["doc-cover", m.default],
          ["doc-credit", p.default],
          ["doc-credits", f.default],
          ["doc-dedication", b.default],
          ["doc-endnote", h.default],
          ["doc-endnotes", y.default],
          ["doc-epigraph", g.default],
          ["doc-epilogue", E.default],
          ["doc-errata", C.default],
          ["doc-example", q.default],
          ["doc-footnote", _.default],
          ["doc-foreword", v.default],
          ["doc-glossary", w.default],
          ["doc-glossref", P.default],
          ["doc-index", j.default],
          ["doc-introduction", $.default],
          ["doc-noteref", B.default],
          ["doc-notice", I.default],
          ["doc-pagebreak", S.default],
          ["doc-pagelist", k.default],
          ["doc-part", U.default],
          ["doc-preface", W.default],
          ["doc-prologue", G.default],
          ["doc-pullquote", le.default],
          ["doc-qna", ve.default],
          ["doc-subtitle", pe.default],
          ["doc-tip", F.default],
          ["doc-toc", L.default],
        ],
        H = z;
      e.default = H;
    },
  }),
  qE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [
            { module: "GRAPHICS", concept: { name: "graphics-object" } },
            { module: "ARIA", concept: { name: "img" } },
            { module: "ARIA", concept: { name: "article" } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "document"]],
        },
        r = t;
      e.default = r;
    },
  }),
  EE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [
            { module: "GRAPHICS", concept: { name: "graphics-document" } },
            { module: "ARIA", concept: { name: "group" } },
            { module: "ARIA", concept: { name: "img" } },
            { module: "GRAPHICS", concept: { name: "graphics-symbol" } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "group"]],
        },
        r = t;
      e.default = r;
    },
  }),
  PE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "img"]],
        },
        r = t;
      e.default = r;
    },
  }),
  OE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = o(qE()),
        r = o(EE()),
        n = o(PE());
      function o(l) {
        return l && l.__esModule ? l : { default: l };
      }
      var a = [
          ["graphics-document", t.default],
          ["graphics-object", r.default],
          ["graphics-symbol", n.default],
        ],
        i = a;
      e.default = i;
    },
  }),
  pl = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/rolesMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = i(lC()),
        r = i(Bq()),
        n = i(CE()),
        o = i(OE()),
        a = i(pn());
      function i(g) {
        return g && g.__esModule ? g : { default: g };
      }
      function l(g, E, C) {
        return E in g ? Object.defineProperty(g, E, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : (g[E] = C), g;
      }
      function u(g, E) {
        var C = (typeof Symbol < "u" && g[Symbol.iterator]) || g["@@iterator"];
        if (!C) {
          if (Array.isArray(g) || (C = d(g)) || (E && g && typeof g.length == "number")) {
            C && (g = C);
            var q = 0,
              _ = function () {};
            return {
              s: _,
              n: function () {
                return q >= g.length ? { done: !0 } : { done: !1, value: g[q++] };
              },
              e: function (j) {
                throw j;
              },
              f: _,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var v = !0,
          w = !1,
          P;
        return {
          s: function () {
            C = C.call(g);
          },
          n: function () {
            var j = C.next();
            return (v = j.done), j;
          },
          e: function (j) {
            (w = !0), (P = j);
          },
          f: function () {
            try {
              !v && C.return != null && C.return();
            } finally {
              if (w) throw P;
            }
          },
        };
      }
      function c(g, E) {
        return f(g) || p(g, E) || d(g, E) || s();
      }
      function s() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function d(g, E) {
        if (g) {
          if (typeof g == "string") return m(g, E);
          var C = Object.prototype.toString.call(g).slice(8, -1);
          if ((C === "Object" && g.constructor && (C = g.constructor.name), C === "Map" || C === "Set")) return Array.from(g);
          if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return m(g, E);
        }
      }
      function m(g, E) {
        (E == null || E > g.length) && (E = g.length);
        for (var C = 0, q = new Array(E); C < E; C++) q[C] = g[C];
        return q;
      }
      function p(g, E) {
        var C = g == null ? null : (typeof Symbol < "u" && g[Symbol.iterator]) || g["@@iterator"];
        if (C != null) {
          var q = [],
            _ = !0,
            v = !1,
            w,
            P;
          try {
            for (C = C.call(g); !(_ = (w = C.next()).done) && (q.push(w.value), !(E && q.length === E)); _ = !0);
          } catch (j) {
            (v = !0), (P = j);
          } finally {
            try {
              !_ && C.return != null && C.return();
            } finally {
              if (v) throw P;
            }
          }
          return q;
        }
      }
      function f(g) {
        if (Array.isArray(g)) return g;
      }
      var b = [].concat(t.default, r.default, n.default, o.default);
      b.forEach(function (g) {
        var E = c(g, 2),
          C = E[1],
          q = u(C.superClass),
          _;
        try {
          for (q.s(); !(_ = q.n()).done; ) {
            var v = _.value,
              w = u(v),
              P;
            try {
              var j = function () {
                var $ = P.value,
                  B = b.find(function (W) {
                    var G = c(W, 1),
                      le = G[0];
                    return le === $;
                  });
                if (B)
                  for (var I = B[1], S = 0, k = Object.keys(I.props); S < k.length; S++) {
                    var U = k[S];
                    Object.prototype.hasOwnProperty.call(C.props, U) || Object.assign(C.props, l({}, U, I.props[U]));
                  }
              };
              for (w.s(); !(P = w.n()).done; ) j();
            } catch ($) {
              w.e($);
            } finally {
              w.f();
            }
          }
        } catch ($) {
          q.e($);
        } finally {
          q.f();
        }
      });
      var h = {
          entries: function () {
            return b;
          },
          forEach: function (g) {
            var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              C = u(b),
              q;
            try {
              for (C.s(); !(q = C.n()).done; ) {
                var _ = c(q.value, 2),
                  v = _[0],
                  w = _[1];
                g.call(E, w, v, b);
              }
            } catch (P) {
              C.e(P);
            } finally {
              C.f();
            }
          },
          get: function (g) {
            var E = b.find(function (C) {
              return C[0] === g;
            });
            return E && E[1];
          },
          has: function (g) {
            return !!h.get(g);
          },
          keys: function () {
            return b.map(function (g) {
              var E = c(g, 1),
                C = E[0];
              return C;
            });
          },
          values: function () {
            return b.map(function (g) {
              var E = c(g, 2),
                C = E[1];
              return C;
            });
          },
        },
        y = (0, a.default)(h, h.entries());
      e.default = y;
    },
  }),
  TE = R({
    "../../node_modules/dequal/lite/index.js"(e) {
      var t = Object.prototype.hasOwnProperty;
      function r(n, o) {
        var a, i;
        if (n === o) return !0;
        if (n && o && (a = n.constructor) === o.constructor) {
          if (a === Date) return n.getTime() === o.getTime();
          if (a === RegExp) return n.toString() === o.toString();
          if (a === Array) {
            if ((i = n.length) === o.length) for (; i-- && r(n[i], o[i]); );
            return i === -1;
          }
          if (!a || typeof n == "object") {
            i = 0;
            for (a in n) if ((t.call(n, a) && ++i && !t.call(o, a)) || !(a in o) || !r(n[a], o[a])) return !1;
            return Object.keys(o).length === i;
          }
        }
        return n !== n && o !== o;
      }
      e.dequal = r;
    },
  }),
  SE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/elementRoleMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = TE(),
        r = o(pn()),
        n = o(pl());
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function a(_, v) {
        return u(_) || l(_, v) || s(_, v) || i();
      }
      function i() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(_, v) {
        var w = _ == null ? null : (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
        if (w != null) {
          var P = [],
            j = !0,
            $ = !1,
            B,
            I;
          try {
            for (w = w.call(_); !(j = (B = w.next()).done) && (P.push(B.value), !(v && P.length === v)); j = !0);
          } catch (S) {
            ($ = !0), (I = S);
          } finally {
            try {
              !j && w.return != null && w.return();
            } finally {
              if ($) throw I;
            }
          }
          return P;
        }
      }
      function u(_) {
        if (Array.isArray(_)) return _;
      }
      function c(_, v) {
        var w = (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
        if (!w) {
          if (Array.isArray(_) || (w = s(_)) || (v && _ && typeof _.length == "number")) {
            w && (_ = w);
            var P = 0,
              j = function () {};
            return {
              s: j,
              n: function () {
                return P >= _.length ? { done: !0 } : { done: !1, value: _[P++] };
              },
              e: function (S) {
                throw S;
              },
              f: j,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var $ = !0,
          B = !1,
          I;
        return {
          s: function () {
            w = w.call(_);
          },
          n: function () {
            var S = w.next();
            return ($ = S.done), S;
          },
          e: function (S) {
            (B = !0), (I = S);
          },
          f: function () {
            try {
              !$ && w.return != null && w.return();
            } finally {
              if (B) throw I;
            }
          },
        };
      }
      function s(_, v) {
        if (_) {
          if (typeof _ == "string") return d(_, v);
          var w = Object.prototype.toString.call(_).slice(8, -1);
          if ((w === "Object" && _.constructor && (w = _.constructor.name), w === "Map" || w === "Set")) return Array.from(_);
          if (w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)) return d(_, v);
        }
      }
      function d(_, v) {
        (v == null || v > _.length) && (v = _.length);
        for (var w = 0, P = new Array(v); w < v; w++) P[w] = _[w];
        return P;
      }
      var m = [],
        p = n.default.keys();
      for (E = 0; E < p.length; E++)
        if (((f = p[E]), (b = n.default.get(f)), b))
          for (h = [].concat(b.baseConcepts, b.relatedConcepts), g = 0; g < h.length; g++)
            (y = h[g]),
              y.module === "HTML" &&
                (function () {
                  var _ = y.concept;
                  if (_) {
                    var v = m.find(function ($) {
                        return (0, t.dequal)($, _);
                      }),
                      w;
                    v ? (w = v[1]) : (w = []);
                    for (var P = !0, j = 0; j < w.length; j++)
                      if (w[j] === f) {
                        P = !1;
                        break;
                      }
                    P && w.push(f), m.push([_, w]);
                  }
                })();
      var f,
        b,
        h,
        y,
        g,
        E,
        C = {
          entries: function () {
            return m;
          },
          forEach: function (_) {
            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              w = c(m),
              P;
            try {
              for (w.s(); !(P = w.n()).done; ) {
                var j = a(P.value, 2),
                  $ = j[0],
                  B = j[1];
                _.call(v, B, $, m);
              }
            } catch (I) {
              w.e(I);
            } finally {
              w.f();
            }
          },
          get: function (_) {
            var v = m.find(function (w) {
              return _.name === w[0].name && (0, t.dequal)(_.attributes, w[0].attributes);
            });
            return v && v[1];
          },
          has: function (_) {
            return !!C.get(_);
          },
          keys: function () {
            return m.map(function (_) {
              var v = a(_, 1),
                w = v[0];
              return w;
            });
          },
          values: function () {
            return m.map(function (_) {
              var v = a(_, 2),
                w = v[1];
              return w;
            });
          },
        },
        q = (0, r.default)(C, C.entries());
      e.default = q;
    },
  }),
  AE = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/roleElementMap.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var t = n(pn()),
        r = n(pl());
      function n(v) {
        return v && v.__esModule ? v : { default: v };
      }
      function o(v, w) {
        return l(v) || i(v, w) || c(v, w) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(v, w) {
        var P = v == null ? null : (typeof Symbol < "u" && v[Symbol.iterator]) || v["@@iterator"];
        if (P != null) {
          var j = [],
            $ = !0,
            B = !1,
            I,
            S;
          try {
            for (P = P.call(v); !($ = (I = P.next()).done) && (j.push(I.value), !(w && j.length === w)); $ = !0);
          } catch (k) {
            (B = !0), (S = k);
          } finally {
            try {
              !$ && P.return != null && P.return();
            } finally {
              if (B) throw S;
            }
          }
          return j;
        }
      }
      function l(v) {
        if (Array.isArray(v)) return v;
      }
      function u(v, w) {
        var P = (typeof Symbol < "u" && v[Symbol.iterator]) || v["@@iterator"];
        if (!P) {
          if (Array.isArray(v) || (P = c(v)) || (w && v && typeof v.length == "number")) {
            P && (v = P);
            var j = 0,
              $ = function () {};
            return {
              s: $,
              n: function () {
                return j >= v.length ? { done: !0 } : { done: !1, value: v[j++] };
              },
              e: function (k) {
                throw k;
              },
              f: $,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var B = !0,
          I = !1,
          S;
        return {
          s: function () {
            P = P.call(v);
          },
          n: function () {
            var k = P.next();
            return (B = k.done), k;
          },
          e: function (k) {
            (I = !0), (S = k);
          },
          f: function () {
            try {
              !B && P.return != null && P.return();
            } finally {
              if (I) throw S;
            }
          },
        };
      }
      function c(v, w) {
        if (v) {
          if (typeof v == "string") return s(v, w);
          var P = Object.prototype.toString.call(v).slice(8, -1);
          if ((P === "Object" && v.constructor && (P = v.constructor.name), P === "Map" || P === "Set")) return Array.from(v);
          if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return s(v, w);
        }
      }
      function s(v, w) {
        (w == null || w > v.length) && (w = v.length);
        for (var P = 0, j = new Array(w); P < w; P++) j[P] = v[P];
        return j;
      }
      var d = [],
        m = r.default.keys();
      for (C = 0; C < m.length; C++)
        if (((p = m[C]), (f = r.default.get(p)), (b = []), f)) {
          for (h = [].concat(f.baseConcepts, f.relatedConcepts), E = 0; E < h.length; E++)
            (y = h[E]), y.module === "HTML" && ((g = y.concept), g != null && b.push(g));
          b.length > 0 && d.push([p, b]);
        }
      var p,
        f,
        b,
        h,
        y,
        g,
        E,
        C,
        q = {
          entries: function () {
            return d;
          },
          forEach: function (v) {
            var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              P = u(d),
              j;
            try {
              for (P.s(); !(j = P.n()).done; ) {
                var $ = o(j.value, 2),
                  B = $[0],
                  I = $[1];
                v.call(w, I, B, d);
              }
            } catch (S) {
              P.e(S);
            } finally {
              P.f();
            }
          },
          get: function (v) {
            var w = d.find(function (P) {
              return P[0] === v;
            });
            return w && w[1];
          },
          has: function (v) {
            return !!q.get(v);
          },
          keys: function () {
            return d.map(function (v) {
              var w = o(v, 1),
                P = w[0];
              return P;
            });
          },
          values: function () {
            return d.map(function (v) {
              var w = o(v, 2),
                P = w[1];
              return P;
            });
          },
        },
        _ = (0, t.default)(q, q.entries());
      e.default = _;
    },
  }),
  ME = R({
    "../../node_modules/@testing-library/dom/node_modules/aria-query/lib/index.js"(e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0);
      var t = i(Ww()),
        r = i(Kw()),
        n = i(pl()),
        o = i(SE()),
        a = i(AE());
      function i(m) {
        return m && m.__esModule ? m : { default: m };
      }
      var l = t.default;
      e.aria = l;
      var u = r.default;
      e.dom = u;
      var c = n.default;
      e.roles = c;
      var s = o.default;
      e.elementRoles = s;
      var d = a.default;
      e.roleElements = d;
    },
  }),
  xE = R({
    "../../node_modules/lz-string/libs/lz-string.js"(e, t) {
      var r = (function () {
        var n = String.fromCharCode,
          o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
          i = {};
        function l(c, s) {
          if (!i[c]) {
            i[c] = {};
            for (var d = 0; d < c.length; d++) i[c][c.charAt(d)] = d;
          }
          return i[c][s];
        }
        var u = {
          compressToBase64: function (c) {
            if (c == null) return "";
            var s = u._compress(c, 6, function (d) {
              return o.charAt(d);
            });
            switch (s.length % 4) {
              default:
              case 0:
                return s;
              case 1:
                return s + "===";
              case 2:
                return s + "==";
              case 3:
                return s + "=";
            }
          },
          decompressFromBase64: function (c) {
            return c == null
              ? ""
              : c == ""
              ? null
              : u._decompress(c.length, 32, function (s) {
                  return l(o, c.charAt(s));
                });
          },
          compressToUTF16: function (c) {
            return c == null
              ? ""
              : u._compress(c, 15, function (s) {
                  return n(s + 32);
                }) + " ";
          },
          decompressFromUTF16: function (c) {
            return c == null
              ? ""
              : c == ""
              ? null
              : u._decompress(c.length, 16384, function (s) {
                  return c.charCodeAt(s) - 32;
                });
          },
          compressToUint8Array: function (c) {
            for (var s = u.compress(c), d = new Uint8Array(s.length * 2), m = 0, p = s.length; m < p; m++) {
              var f = s.charCodeAt(m);
              (d[m * 2] = f >>> 8), (d[m * 2 + 1] = f % 256);
            }
            return d;
          },
          decompressFromUint8Array: function (c) {
            if (c == null) return u.decompress(c);
            for (var s = new Array(c.length / 2), d = 0, m = s.length; d < m; d++) s[d] = c[d * 2] * 256 + c[d * 2 + 1];
            var p = [];
            return (
              s.forEach(function (f) {
                p.push(n(f));
              }),
              u.decompress(p.join(""))
            );
          },
          compressToEncodedURIComponent: function (c) {
            return c == null
              ? ""
              : u._compress(c, 6, function (s) {
                  return a.charAt(s);
                });
          },
          decompressFromEncodedURIComponent: function (c) {
            return c == null
              ? ""
              : c == ""
              ? null
              : ((c = c.replace(/ /g, "+")),
                u._decompress(c.length, 32, function (s) {
                  return l(a, c.charAt(s));
                }));
          },
          compress: function (c) {
            return u._compress(c, 16, function (s) {
              return n(s);
            });
          },
          _compress: function (c, s, d) {
            if (c == null) return "";
            var m,
              p,
              f = {},
              b = {},
              h = "",
              y = "",
              g = "",
              E = 2,
              C = 3,
              q = 2,
              _ = [],
              v = 0,
              w = 0,
              P;
            for (P = 0; P < c.length; P += 1)
              if (
                ((h = c.charAt(P)),
                Object.prototype.hasOwnProperty.call(f, h) || ((f[h] = C++), (b[h] = !0)),
                (y = g + h),
                Object.prototype.hasOwnProperty.call(f, y))
              )
                g = y;
              else {
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                  if (g.charCodeAt(0) < 256) {
                    for (m = 0; m < q; m++) (v = v << 1), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++;
                    for (p = g.charCodeAt(0), m = 0; m < 8; m++)
                      (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
                  } else {
                    for (p = 1, m = 0; m < q; m++) (v = (v << 1) | p), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = 0);
                    for (p = g.charCodeAt(0), m = 0; m < 16; m++)
                      (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
                  }
                  E--, E == 0 && ((E = Math.pow(2, q)), q++), delete b[g];
                } else
                  for (p = f[g], m = 0; m < q; m++)
                    (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
                E--, E == 0 && ((E = Math.pow(2, q)), q++), (f[y] = C++), (g = String(h));
              }
            if (g !== "") {
              if (Object.prototype.hasOwnProperty.call(b, g)) {
                if (g.charCodeAt(0) < 256) {
                  for (m = 0; m < q; m++) (v = v << 1), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++;
                  for (p = g.charCodeAt(0), m = 0; m < 8; m++)
                    (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
                } else {
                  for (p = 1, m = 0; m < q; m++) (v = (v << 1) | p), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = 0);
                  for (p = g.charCodeAt(0), m = 0; m < 16; m++)
                    (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
                }
                E--, E == 0 && ((E = Math.pow(2, q)), q++), delete b[g];
              } else
                for (p = f[g], m = 0; m < q; m++)
                  (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
              E--, E == 0 && ((E = Math.pow(2, q)), q++);
            }
            for (p = 2, m = 0; m < q; m++) (v = (v << 1) | (p & 1)), w == s - 1 ? ((w = 0), _.push(d(v)), (v = 0)) : w++, (p = p >> 1);
            for (;;)
              if (((v = v << 1), w == s - 1)) {
                _.push(d(v));
                break;
              } else w++;
            return _.join("");
          },
          decompress: function (c) {
            return c == null
              ? ""
              : c == ""
              ? null
              : u._decompress(c.length, 32768, function (s) {
                  return c.charCodeAt(s);
                });
          },
          _decompress: function (c, s, d) {
            var m = [],
              p = 4,
              f = 4,
              b = 3,
              h = "",
              y = [],
              g,
              E,
              C,
              q,
              _,
              v,
              w,
              P = { val: d(0), position: s, index: 1 };
            for (g = 0; g < 3; g += 1) m[g] = g;
            for (C = 0, _ = Math.pow(2, 2), v = 1; v != _; )
              (q = P.val & P.position),
                (P.position >>= 1),
                P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                (C |= (q > 0 ? 1 : 0) * v),
                (v <<= 1);
            switch (C) {
              case 0:
                for (C = 0, _ = Math.pow(2, 8), v = 1; v != _; )
                  (q = P.val & P.position),
                    (P.position >>= 1),
                    P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                    (C |= (q > 0 ? 1 : 0) * v),
                    (v <<= 1);
                w = n(C);
                break;
              case 1:
                for (C = 0, _ = Math.pow(2, 16), v = 1; v != _; )
                  (q = P.val & P.position),
                    (P.position >>= 1),
                    P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                    (C |= (q > 0 ? 1 : 0) * v),
                    (v <<= 1);
                w = n(C);
                break;
              case 2:
                return "";
            }
            for (m[3] = w, E = w, y.push(w); ; ) {
              if (P.index > c) return "";
              for (C = 0, _ = Math.pow(2, b), v = 1; v != _; )
                (q = P.val & P.position),
                  (P.position >>= 1),
                  P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                  (C |= (q > 0 ? 1 : 0) * v),
                  (v <<= 1);
              switch ((w = C)) {
                case 0:
                  for (C = 0, _ = Math.pow(2, 8), v = 1; v != _; )
                    (q = P.val & P.position),
                      (P.position >>= 1),
                      P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                      (C |= (q > 0 ? 1 : 0) * v),
                      (v <<= 1);
                  (m[f++] = n(C)), (w = f - 1), p--;
                  break;
                case 1:
                  for (C = 0, _ = Math.pow(2, 16), v = 1; v != _; )
                    (q = P.val & P.position),
                      (P.position >>= 1),
                      P.position == 0 && ((P.position = s), (P.val = d(P.index++))),
                      (C |= (q > 0 ? 1 : 0) * v),
                      (v <<= 1);
                  (m[f++] = n(C)), (w = f - 1), p--;
                  break;
                case 2:
                  return y.join("");
              }
              if ((p == 0 && ((p = Math.pow(2, b)), b++), m[w])) h = m[w];
              else if (w === f) h = E + E.charAt(0);
              else return null;
              y.push(h), (m[f++] = E + h.charAt(0)), p--, (E = h), p == 0 && ((p = Math.pow(2, b)), b++);
            }
          },
        };
        return u;
      })();
      typeof define == "function" && define.amd
        ? define(function () {
            return r;
          })
        : typeof t < "u" && t != null
        ? (t.exports = r)
        : typeof angular < "u" &&
          angular != null &&
          angular.module("LZString", []).factory("LZString", function () {
            return r;
          });
    },
  }),
  Op = Object.defineProperty,
  jE = Object.getOwnPropertyNames,
  N = (e, t) => Op(e, "name", { value: t, configurable: !0 }),
  NE = (e, t) =>
    function () {
      return t || (0, e[jE(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  ml = (e, t) => {
    for (var r in t) Op(e, r, { get: t[r], enumerable: !0 });
  },
  $E = NE({ "(disabled):util"() {} }),
  nt = {};
ml(nt, {
  addChainableMethod: () => El,
  addLengthGuard: () => hn,
  addMethod: () => wl,
  addProperty: () => Rl,
  checkError: () => ke,
  compareByInspect: () => zn,
  eql: () => Zp,
  expectTypes: () => Np,
  flag: () => K,
  getActual: () => _o,
  getMessage: () => bl,
  getName: () => wo,
  getOperator: () => Sl,
  getOwnEnumerableProperties: () => Tl,
  getOwnEnumerablePropertySymbols: () => Ol,
  getPathInfo: () => _l,
  hasProperty: () => Ro,
  inspect: () => Q,
  isNaN: () => Gn,
  isProxyEnabled: () => fn,
  isRegExp: () => Wn,
  objDisplay: () => Ht,
  overwriteChainableMethod: () => Pl,
  overwriteMethod: () => ql,
  overwriteProperty: () => Cl,
  proxify: () => Ar,
  test: () => fl,
  transferFlags: () => Ze,
  type: () => ue,
});
var ke = {};
ml(ke, {
  compatibleConstructor: () => Ap,
  compatibleInstance: () => Sp,
  compatibleMessage: () => Mp,
  getConstructorName: () => xp,
  getMessage: () => jp,
});
function vo(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
N(vo, "isErrorInstance");
function Tp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
N(Tp, "isRegExp");
function Sp(e, t) {
  return vo(t) && e === t;
}
N(Sp, "compatibleInstance");
function Ap(e, t) {
  return vo(t)
    ? e.constructor === t.constructor || e instanceof t.constructor
    : (typeof t == "object" || typeof t == "function") && t.prototype
    ? e.constructor === t || e instanceof t
    : !1;
}
N(Ap, "compatibleConstructor");
function Mp(e, t) {
  let r = typeof e == "string" ? e : e.message;
  return Tp(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
N(Mp, "compatibleMessage");
function xp(e) {
  let t = e;
  return vo(e) ? (t = e.constructor.name) : typeof e == "function" && ((t = e.name), t === "" && (t = new e().name || t)), t;
}
N(xp, "getConstructorName");
function jp(e) {
  let t = "";
  return e && e.message ? (t = e.message) : typeof e == "string" && (t = e), t;
}
N(jp, "getMessage");
function K(e, t, r) {
  var n = e.__flags || (e.__flags = Object.create(null));
  if (arguments.length === 3) n[t] = r;
  else return n[t];
}
N(K, "flag");
function fl(e, t) {
  var r = K(e, "negate"),
    n = t[0];
  return r ? !n : n;
}
N(fl, "test");
function ue(e) {
  if (typeof e > "u") return "undefined";
  if (e === null) return "null";
  let t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
N(ue, "type");
var IE = "captureStackTrace" in Error,
  En,
  ae =
    ((En = class extends Error {
      constructor(t = "Unspecified AssertionError", r, n) {
        super(t);
        he(this, "message");
        (this.message = t), IE && Error.captureStackTrace(this, n || En);
        for (let o in r) o in this || (this[o] = r[o]);
      }
      get name() {
        return "AssertionError";
      }
      get ok() {
        return !1;
      }
      toJSON(t) {
        return { ...this, name: this.name, message: this.message, ok: !1, stack: t !== !1 ? this.stack : void 0 };
      }
    }),
    N(En, "AssertionError"),
    En);
function Np(e, t) {
  var r = K(e, "message"),
    n = K(e, "ssfi");
  (r = r ? r + ": " : ""),
    (e = K(e, "object")),
    (t = t.map(function (i) {
      return i.toLowerCase();
    })),
    t.sort();
  var o = t
      .map(function (i, l) {
        var u = ~["a", "e", "i", "o", "u"].indexOf(i.charAt(0)) ? "an" : "a",
          c = t.length > 1 && l === t.length - 1 ? "or " : "";
        return c + u + " " + i;
      })
      .join(", "),
    a = ue(e).toLowerCase();
  if (
    !t.some(function (i) {
      return a === i;
    })
  )
    throw new ae(r + "object tested must be " + o + ", but " + a + " given", void 0, n);
}
N(Np, "expectTypes");
function _o(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
N(_o, "getActual");
var vu = {
    bold: ["1", "22"],
    dim: ["2", "22"],
    italic: ["3", "23"],
    underline: ["4", "24"],
    inverse: ["7", "27"],
    hidden: ["8", "28"],
    strike: ["9", "29"],
    black: ["30", "39"],
    red: ["31", "39"],
    green: ["32", "39"],
    yellow: ["33", "39"],
    blue: ["34", "39"],
    magenta: ["35", "39"],
    cyan: ["36", "39"],
    white: ["37", "39"],
    brightblack: ["30;1", "39"],
    brightred: ["31;1", "39"],
    brightgreen: ["32;1", "39"],
    brightyellow: ["33;1", "39"],
    brightblue: ["34;1", "39"],
    brightmagenta: ["35;1", "39"],
    brightcyan: ["36;1", "39"],
    brightwhite: ["37;1", "39"],
    grey: ["90", "39"],
  },
  BE = {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red",
  },
  br = "…";
function $p(e, t) {
  let r = vu[BE[t]] || vu[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
N($p, "colorise");
function Ip(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: o = !1,
    maxArrayLength: a = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!o,
    maxArrayLength: Number(a),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = $p), d;
}
N(Ip, "normaliseOptions");
function _t(e, t, r = br) {
  e = String(e);
  let n = r.length,
    o = e.length;
  return n > t && o > n ? r : o > t && o > n ? `${e.slice(0, t - n)}${r}` : e;
}
N(_t, "truncate");
function Ve(e, t, r, n = ", ") {
  r = r || t.inspect;
  let o = e.length;
  if (o === 0) return "";
  let a = t.truncate,
    i = "",
    l = "",
    u = "";
  for (let c = 0; c < o; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${br}(${e.length - c})`;
    let m = e[c];
    t.truncate = a - i.length - (s ? 0 : n.length);
    let p = l || r(m, t) + (s ? "" : n),
      f = i.length + p.length,
      b = f + u.length;
    if (
      (s && f > a && i.length + u.length <= a) ||
      (!s && !d && b > a) ||
      ((l = s ? "" : r(e[c + 1], t) + (d ? "" : n)), !s && d && b > a && f + l.length > a)
    )
      break;
    if (((i += p), !s && !d && f + l.length >= a)) {
      u = `${br}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${i}${u}`;
}
N(Ve, "inspectList");
function Bp(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
N(Bp, "quoteComplexKey");
function yr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == "string" ? (e = Bp(e)) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
N(yr, "inspectProperty");
function kp(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return "[]";
  t.truncate -= 4;
  let n = Ve(e, t);
  t.truncate -= n.length;
  let o = "";
  return (
    r.length &&
      (o = Ve(
        r.map((a) => [a, e[a]]),
        t,
        yr
      )),
    `[ ${n}${o ? `, ${o}` : ""} ]`
  );
}
N(kp, "inspectArray");
var kE = N(
  (e) =>
    typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name,
  "getArrayName"
);
function tt(e, t) {
  let r = kE(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let o = "";
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(_t(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      o += `${br}(${e.length - e[i] + 1})`;
      break;
    }
    o += l;
  }
  let a = "";
  return (
    n.length &&
      (a = Ve(
        n.map((i) => [i, e[i]]),
        t,
        yr
      )),
    `${r}[ ${o}${a ? `, ${a}` : ""} ]`
  );
}
N(tt, "inspectTypedArray");
function Lp(e, t) {
  let r = e.toJSON();
  if (r === null) return "Invalid Date";
  let n = r.split("T"),
    o = n[0];
  return t.stylize(`${o}T${_t(n[1], t.truncate - o.length - 1)}`, "date");
}
N(Lp, "inspectDate");
function Qa(e, t) {
  let r = e[Symbol.toStringTag] || "Function",
    n = e.name;
  return n ? t.stylize(`[${r} ${_t(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
N(Qa, "inspectFunction");
function Dp([e, t], r) {
  return (r.truncate -= 4), (e = r.inspect(e, r)), (r.truncate -= e.length), (t = r.inspect(t, r)), `${e} => ${t}`;
}
N(Dp, "inspectMapEntry");
function Fp(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
N(Fp, "mapToEntries");
function Hp(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : ((t.truncate -= 7), `Map{ ${Ve(Fp(e), t, Dp)} }`);
}
N(Hp, "inspectMap");
var LE = Number.isNaN || ((e) => e !== e);
function Za(e, t) {
  return LE(e)
    ? t.stylize("NaN", "number")
    : e === 1 / 0
    ? t.stylize("Infinity", "number")
    : e === -1 / 0
    ? t.stylize("-Infinity", "number")
    : e === 0
    ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number")
    : t.stylize(_t(String(e), t.truncate), "number");
}
N(Za, "inspectNumber");
function ei(e, t) {
  let r = _t(e.toString(), t.truncate - 1);
  return r !== br && (r += "n"), t.stylize(r, "bigint");
}
N(ei, "inspectBigInt");
function Up(e, t) {
  let r = e.toString().split("/")[2],
    n = t.truncate - (2 + r.length),
    o = e.source;
  return t.stylize(`/${_t(o, n)}/${r}`, "regexp");
}
N(Up, "inspectRegExp");
function Vp(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
N(Vp, "arrayFromSet");
function zp(e, t) {
  return e.size === 0 ? "Set{}" : ((t.truncate -= 7), `Set{ ${Ve(Vp(e), t)} }`);
}
N(zp, "inspectSet");
var _u = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    "g"
  ),
  DE = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "'": "\\'", "\\": "\\\\" },
  FE = 16,
  HE = 4;
function Gp(e) {
  return DE[e] || `\\u${`0000${e.charCodeAt(0).toString(FE)}`.slice(-HE)}`;
}
N(Gp, "escape");
function ti(e, t) {
  return _u.test(e) && (e = e.replace(_u, Gp)), t.stylize(`'${_t(e, t.truncate - 2)}'`, "string");
}
N(ti, "inspectString");
function ri(e) {
  return "description" in Symbol.prototype ? (e.description ? `Symbol(${e.description})` : "Symbol()") : e.toString();
}
N(ri, "inspectSymbol");
var Wp = N(() => "Promise{…}", "getPromiseValue");
try {
  let { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) &&
    (Wp = N((n, o) => {
      let [a, i] = e(n);
      return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${o.inspect(i, o)}}`;
    }, "getPromiseValue"));
} catch {}
var UE = Wp;
function Dr(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return "{}";
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0)) return "[Circular]";
  t.seen.push(e);
  let o = Ve(
      r.map((l) => [l, e[l]]),
      t,
      yr
    ),
    a = Ve(
      n.map((l) => [l, e[l]]),
      t,
      yr
    );
  t.seen.pop();
  let i = "";
  return o && a && (i = ", "), `{ ${o}${i}${a} }`;
}
N(Dr, "inspectObject");
var Ea = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Kp(e, t) {
  let r = "";
  return (
    Ea && Ea in e && (r = e[Ea]),
    (r = r || e.constructor.name),
    (!r || r === "_class") && (r = "<Anonymous Class>"),
    (t.truncate -= r.length),
    `${r}${Dr(e, t)}`
  );
}
N(Kp, "inspectClass");
function Yp(e, t) {
  return e.length === 0 ? "Arguments[]" : ((t.truncate -= 13), `Arguments[ ${Ve(e, t)} ]`);
}
N(Yp, "inspectArguments");
var VE = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
function Jp(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => VE.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let o = "";
  typeof e.message == "string" ? (o = _t(e.message, t.truncate)) : r.unshift("message"),
    (o = o ? `: ${o}` : ""),
    (t.truncate -= o.length + 5);
  let a = Ve(
    r.map((i) => [i, e[i]]),
    t,
    yr
  );
  return `${n}${o}${a ? ` { ${a} }` : ""}`;
}
N(Jp, "inspectObject");
function Xp([e, t], r) {
  return (r.truncate -= 3), t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
N(Xp, "inspectAttribute");
function Hn(e, t) {
  return Ve(
    e,
    t,
    hl,
    `
`
  );
}
N(Hn, "inspectHTMLCollection");
function hl(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    o = t.stylize(`<${n}`, "special"),
    a = t.stylize(">", "special"),
    i = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let l = "";
  r.length > 0 &&
    ((l += " "),
    (l += Ve(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      Xp,
      " "
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = Hn(e.children, t);
  return c && c.length > u && (c = `${br}(${e.children.length})`), `${o}${l}${a}${c}${i}`;
}
N(hl, "inspectHTML");
var zE = typeof Symbol == "function" && typeof Symbol.for == "function",
  Pa = zE ? Symbol.for("chai/inspect") : "@@chai/inspect",
  ar = !1;
try {
  let e = $E();
  ar = e.inspect ? e.inspect.custom : !1;
} catch {
  ar = !1;
}
var Ru = new WeakMap(),
  wu = {},
  Cu = {
    undefined: (e, t) => t.stylize("undefined", "undefined"),
    null: (e, t) => t.stylize("null", "null"),
    boolean: (e, t) => t.stylize(String(e), "boolean"),
    Boolean: (e, t) => t.stylize(String(e), "boolean"),
    number: Za,
    Number: Za,
    bigint: ei,
    BigInt: ei,
    string: ti,
    String: ti,
    function: Qa,
    Function: Qa,
    symbol: ri,
    Symbol: ri,
    Array: kp,
    Date: Lp,
    Map: Hp,
    Set: zp,
    RegExp: Up,
    Promise: UE,
    WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
    WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
    Arguments: Yp,
    Int8Array: tt,
    Uint8Array: tt,
    Uint8ClampedArray: tt,
    Int16Array: tt,
    Uint16Array: tt,
    Int32Array: tt,
    Uint32Array: tt,
    Float32Array: tt,
    Float64Array: tt,
    Generator: () => "",
    DataView: () => "",
    ArrayBuffer: () => "",
    Error: Jp,
    HTMLCollection: Hn,
    NodeList: Hn,
  },
  GE = N(
    (e, t, r) =>
      Pa in e && typeof e[Pa] == "function"
        ? e[Pa](t)
        : ar && ar in e && typeof e[ar] == "function"
        ? e[ar](t.depth, t)
        : "inspect" in e && typeof e.inspect == "function"
        ? e.inspect(t.depth, t)
        : "constructor" in e && Ru.has(e.constructor)
        ? Ru.get(e.constructor)(e, t)
        : wu[r]
        ? wu[r](e, t)
        : "",
    "inspectCustom"
  ),
  WE = Object.prototype.toString;
function Un(e, t = {}) {
  let r = Ip(t, Un),
    { customInspect: n } = r,
    o = e === null ? "null" : typeof e;
  if ((o === "object" && (o = WE.call(e).slice(8, -1)), o in Cu)) return Cu[o](e, r);
  if (n && e) {
    let i = GE(e, r, o);
    if (i) return typeof i == "string" ? i : Un(i, r);
  }
  let a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null
    ? Dr(e, r)
    : e && typeof HTMLElement == "function" && e instanceof HTMLElement
    ? hl(e, r)
    : "constructor" in e
    ? e.constructor !== Object
      ? Kp(e, r)
      : Dr(e, r)
    : e === Object(e)
    ? Dr(e, r)
    : r.stylize(String(e), o);
}
N(Un, "inspect");
var Ie = {
  includeStack: !1,
  showDiff: !0,
  truncateThreshold: 40,
  useProxy: !0,
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  deepEqual: null,
};
function Q(e, t, r, n) {
  var o = { colors: n, depth: typeof r > "u" ? 2 : r, showHidden: t, truncate: Ie.truncateThreshold ? Ie.truncateThreshold : 1 / 0 };
  return Un(e, o);
}
N(Q, "inspect");
function Ht(e) {
  var t = Q(e),
    r = Object.prototype.toString.call(e);
  if (Ie.truncateThreshold && t.length >= Ie.truncateThreshold) {
    if (r === "[object Function]") return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (r === "[object Array]") return "[ Array(" + e.length + ") ]";
    if (r === "[object Object]") {
      var n = Object.keys(e),
        o = n.length > 2 ? n.splice(0, 2).join(", ") + ", ..." : n.join(", ");
      return "{ Object (" + o + ") }";
    } else return t;
  } else return t;
}
N(Ht, "objDisplay");
function bl(e, t) {
  var r = K(e, "negate"),
    n = K(e, "object"),
    o = t[3],
    a = _o(e, t),
    i = r ? t[2] : t[1],
    l = K(e, "message");
  return (
    typeof i == "function" && (i = i()),
    (i = i || ""),
    (i = i
      .replace(/#\{this\}/g, function () {
        return Ht(n);
      })
      .replace(/#\{act\}/g, function () {
        return Ht(a);
      })
      .replace(/#\{exp\}/g, function () {
        return Ht(o);
      })),
    l ? l + ": " + i : i
  );
}
N(bl, "getMessage");
function Ze(e, t, r) {
  var n = e.__flags || (e.__flags = Object.create(null));
  t.__flags || (t.__flags = Object.create(null)), (r = arguments.length === 3 ? r : !0);
  for (var o in n) (r || (o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message")) && (t.__flags[o] = n[o]);
}
N(Ze, "transferFlags");
function ni(e) {
  if (typeof e > "u") return "undefined";
  if (e === null) return "null";
  let t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
N(ni, "type");
function yl() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
N(yl, "FakeMap");
yl.prototype = {
  get: N(function (e) {
    return e[this._key];
  }, "get"),
  set: N(function (e, t) {
    Object.isExtensible(e) && Object.defineProperty(e, this._key, { value: t, configurable: !0 });
  }, "set"),
};
var Qp = typeof WeakMap == "function" ? WeakMap : yl;
function oi(e, t, r) {
  if (!r || zt(e) || zt(t)) return null;
  var n = r.get(e);
  if (n) {
    var o = n.get(t);
    if (typeof o == "boolean") return o;
  }
  return null;
}
N(oi, "memoizeCompare");
function Ir(e, t, r, n) {
  if (!(!r || zt(e) || zt(t))) {
    var o = r.get(e);
    o ? o.set(t, n) : ((o = new Qp()), o.set(t, n), r.set(e, o));
  }
}
N(Ir, "memoizeSet");
var Zp = mn;
function mn(e, t, r) {
  if (r && r.comparator) return ai(e, t, r);
  var n = gl(e, t);
  return n !== null ? n : ai(e, t, r);
}
N(mn, "deepEqual");
function gl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t ? !0 : zt(e) || zt(t) ? !1 : null;
}
N(gl, "simpleEqual");
function ai(e, t, r) {
  (r = r || {}), (r.memoize = r.memoize === !1 ? !1 : r.memoize || new Qp());
  var n = r && r.comparator,
    o = oi(e, t, r.memoize);
  if (o !== null) return o;
  var a = oi(t, e, r.memoize);
  if (a !== null) return a;
  if (n) {
    var i = n(e, t);
    if (i === !1 || i === !0) return Ir(e, t, r.memoize, i), i;
    var l = gl(e, t);
    if (l !== null) return l;
  }
  var u = ni(e);
  if (u !== ni(t)) return Ir(e, t, r.memoize, !1), !1;
  Ir(e, t, r.memoize, !0);
  var c = em(e, t, u, r);
  return Ir(e, t, r.memoize, c), c;
}
N(ai, "extensiveDeepEqual");
function em(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return mn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return vl(e, t, ["name", "message", "code"], n);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return Mt(e, t, n);
    case "RegExp":
      return tm(e, t);
    case "Generator":
      return rm(e, t, n);
    case "DataView":
      return Mt(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return Mt(new Uint8Array(e), new Uint8Array(t), n);
    case "Set":
      return ii(e, t, n);
    case "Map":
      return ii(e, t, n);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return om(e, t, n);
  }
}
N(em, "extensiveDeepEqualByType");
function tm(e, t) {
  return e.toString() === t.toString();
}
N(tm, "regexpEqual");
function ii(e, t, r) {
  if (e.size !== t.size) return !1;
  if (e.size === 0) return !0;
  var n = [],
    o = [];
  return (
    e.forEach(
      N(function (a, i) {
        n.push([a, i]);
      }, "gatherEntries")
    ),
    t.forEach(
      N(function (a, i) {
        o.push([a, i]);
      }, "gatherEntries")
    ),
    Mt(n.sort(), o.sort(), r)
  );
}
N(ii, "entriesEqual");
function Mt(e, t, r) {
  var n = e.length;
  if (n !== t.length) return !1;
  if (n === 0) return !0;
  for (var o = -1; ++o < n; ) if (mn(e[o], t[o], r) === !1) return !1;
  return !0;
}
N(Mt, "iterableEqual");
function rm(e, t, r) {
  return Mt(Vn(e), Vn(t), r);
}
N(rm, "generatorEqual");
function nm(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
N(nm, "hasIteratorFunction");
function li(e) {
  if (nm(e))
    try {
      return Vn(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
N(li, "getIteratorEntries");
function Vn(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; ) (t = e.next()), r.push(t.value);
  return r;
}
N(Vn, "getGeneratorEntries");
function si(e) {
  var t = [];
  for (var r in e) t.push(r);
  return t;
}
N(si, "getEnumerableKeys");
function ui(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var o = r[n];
    Object.getOwnPropertyDescriptor(e, o).enumerable && t.push(o);
  }
  return t;
}
N(ui, "getEnumerableSymbols");
function vl(e, t, r, n) {
  var o = r.length;
  if (o === 0) return !0;
  for (var a = 0; a < o; a += 1) if (mn(e[r[a]], t[r[a]], n) === !1) return !1;
  return !0;
}
N(vl, "keysEqual");
function om(e, t, r) {
  var n = si(e),
    o = si(t),
    a = ui(e),
    i = ui(t);
  if (((n = n.concat(a)), (o = o.concat(i)), n.length && n.length === o.length))
    return Mt(ci(n).sort(), ci(o).sort()) === !1 ? !1 : vl(e, t, n, r);
  var l = li(e),
    u = li(t);
  return l.length && l.length === u.length
    ? (l.sort(), u.sort(), Mt(l, u, r))
    : n.length === 0 && l.length === 0 && o.length === 0 && u.length === 0;
}
N(om, "objectEqual");
function zt(e) {
  return e === null || typeof e != "object";
}
N(zt, "isPrimitive");
function ci(e) {
  return e.map(
    N(function (t) {
      return typeof t == "symbol" ? t.toString() : t;
    }, "mapSymbol")
  );
}
N(ci, "mapSymbols");
function Ro(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
N(Ro, "hasProperty");
function am(e) {
  return e
    .replace(/([^\\])\[/g, "$1.[")
    .match(/(\\\.|[^.]+?)+/g)
    .map((t) => {
      if (t === "constructor" || t === "__proto__" || t === "prototype") return {};
      let r = /^\[(\d+)\]$/.exec(t),
        n = null;
      return r ? (n = { i: parseFloat(r[1]) }) : (n = { p: t.replace(/\\([.[\]])/g, "$1") }), n;
    });
}
N(am, "parsePath");
function di(e, t, r) {
  let n = e,
    o = null;
  r = typeof r > "u" ? t.length : r;
  for (let a = 0; a < r; a++) {
    let i = t[a];
    n && (typeof i.p > "u" ? (n = n[i.i]) : (n = n[i.p]), a === r - 1 && (o = n));
  }
  return o;
}
N(di, "internalGetPathValue");
function _l(e, t) {
  let r = am(t),
    n = r[r.length - 1],
    o = { parent: r.length > 1 ? di(e, r, r.length - 1) : e, name: n.p || n.i, value: di(e, r) };
  return (o.exists = Ro(o.parent, o.name)), o;
}
N(_l, "getPathInfo");
function T(e, t, r, n) {
  return (
    K(this, "ssfi", r || T),
    K(this, "lockSsfi", n),
    K(this, "object", e),
    K(this, "message", t),
    K(this, "eql", Ie.deepEqual || Zp),
    Ar(this)
  );
}
N(T, "Assertion");
Object.defineProperty(T, "includeStack", {
  get: function () {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), Ie.includeStack;
  },
  set: function (e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), (Ie.includeStack = e);
  },
});
Object.defineProperty(T, "showDiff", {
  get: function () {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), Ie.showDiff;
  },
  set: function (e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), (Ie.showDiff = e);
  },
});
T.addProperty = function (e, t) {
  Rl(this.prototype, e, t);
};
T.addMethod = function (e, t) {
  wl(this.prototype, e, t);
};
T.addChainableMethod = function (e, t, r) {
  El(this.prototype, e, t, r);
};
T.overwriteProperty = function (e, t) {
  Cl(this.prototype, e, t);
};
T.overwriteMethod = function (e, t) {
  ql(this.prototype, e, t);
};
T.overwriteChainableMethod = function (e, t, r) {
  Pl(this.prototype, e, t, r);
};
T.prototype.assert = function (e, t, r, n, o, a) {
  var i = fl(this, arguments);
  if ((a !== !1 && (a = !0), n === void 0 && o === void 0 && (a = !1), Ie.showDiff !== !0 && (a = !1), !i)) {
    t = bl(this, arguments);
    var l = _o(this, arguments),
      u = { actual: l, expected: n, showDiff: a },
      c = Sl(this, arguments);
    throw (c && (u.operator = c), new ae(t, u, Ie.includeStack ? this.assert : K(this, "ssfi")));
  }
};
Object.defineProperty(T.prototype, "_obj", {
  get: function () {
    return K(this, "object");
  },
  set: function (e) {
    K(this, "object", e);
  },
});
function fn() {
  return Ie.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
N(fn, "isProxyEnabled");
function Rl(e, t, r) {
  (r = r === void 0 ? function () {} : r),
    Object.defineProperty(e, t, {
      get: N(function n() {
        !fn() && !K(this, "lockSsfi") && K(this, "ssfi", n);
        var o = r.call(this);
        if (o !== void 0) return o;
        var a = new T();
        return Ze(this, a), a;
      }, "propertyGetter"),
      configurable: !0,
    });
}
N(Rl, "addProperty");
var KE = Object.getOwnPropertyDescriptor(function () {}, "length");
function hn(e, t, r) {
  return (
    KE.configurable &&
      Object.defineProperty(e, "length", {
        get: function () {
          throw Error(
            r
              ? "Invalid Chai property: " +
                  t +
                  '.length. Due to a compatibility issue, "length" cannot directly follow "' +
                  t +
                  '". Use "' +
                  t +
                  '.lengthOf" instead.'
              : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
          );
        },
      }),
    e
  );
}
N(hn, "addLengthGuard");
function im(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(o) {
    t.indexOf(o) === -1 && t.push(o);
  }
  N(r, "addProperty");
  for (var n = Object.getPrototypeOf(e); n !== null; ) Object.getOwnPropertyNames(n).forEach(r), (n = Object.getPrototypeOf(n));
  return t;
}
N(im, "getProperties");
var qu = ["__flags", "__methods", "_obj", "assert"];
function Ar(e, t) {
  return fn()
    ? new Proxy(e, {
        get: N(function r(n, o) {
          if (typeof o == "string" && Ie.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(n, o)) {
            if (t) throw Error("Invalid Chai property: " + t + "." + o + '. See docs for proper usage of "' + t + '".');
            var a = null,
              i = 4;
            throw (
              (im(n).forEach(function (l) {
                if (!Object.prototype.hasOwnProperty(l) && qu.indexOf(l) === -1) {
                  var u = lm(o, l, i);
                  u < i && ((a = l), (i = u));
                }
              }),
              Error(a !== null ? "Invalid Chai property: " + o + '. Did you mean "' + a + '"?' : "Invalid Chai property: " + o))
            );
          }
          return qu.indexOf(o) === -1 && !K(n, "lockSsfi") && K(n, "ssfi", r), Reflect.get(n, o);
        }, "proxyGetter"),
      })
    : e;
}
N(Ar, "proxify");
function lm(e, t, r) {
  if (Math.abs(e.length - t.length) >= r) return r;
  for (var n = [], o = 0; o <= e.length; o++) (n[o] = Array(t.length + 1).fill(0)), (n[o][0] = o);
  for (var a = 0; a < t.length; a++) n[0][a] = a;
  for (var o = 1; o <= e.length; o++)
    for (var i = e.charCodeAt(o - 1), a = 1; a <= t.length; a++) {
      if (Math.abs(o - a) >= r) {
        n[o][a] = r;
        continue;
      }
      n[o][a] = Math.min(n[o - 1][a] + 1, n[o][a - 1] + 1, n[o - 1][a - 1] + (i === t.charCodeAt(a - 1) ? 0 : 1));
    }
  return n[e.length][t.length];
}
N(lm, "stringDistanceCapped");
function wl(e, t, r) {
  var n = N(function () {
    K(this, "lockSsfi") || K(this, "ssfi", n);
    var o = r.apply(this, arguments);
    if (o !== void 0) return o;
    var a = new T();
    return Ze(this, a), a;
  }, "methodWrapper");
  hn(n, t, !1), (e[t] = Ar(n, t));
}
N(wl, "addMethod");
function Cl(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t),
    o = N(function () {}, "_super");
  n && typeof n.get == "function" && (o = n.get),
    Object.defineProperty(e, t, {
      get: N(function a() {
        !fn() && !K(this, "lockSsfi") && K(this, "ssfi", a);
        var i = K(this, "lockSsfi");
        K(this, "lockSsfi", !0);
        var l = r(o).call(this);
        if ((K(this, "lockSsfi", i), l !== void 0)) return l;
        var u = new T();
        return Ze(this, u), u;
      }, "overwritingPropertyGetter"),
      configurable: !0,
    });
}
N(Cl, "overwriteProperty");
function ql(e, t, r) {
  var n = e[t],
    o = N(function () {
      throw new Error(t + " is not a function");
    }, "_super");
  n && typeof n == "function" && (o = n);
  var a = N(function () {
    K(this, "lockSsfi") || K(this, "ssfi", a);
    var i = K(this, "lockSsfi");
    K(this, "lockSsfi", !0);
    var l = r(o).apply(this, arguments);
    if ((K(this, "lockSsfi", i), l !== void 0)) return l;
    var u = new T();
    return Ze(this, u), u;
  }, "overwritingMethodWrapper");
  hn(a, t, !1), (e[t] = Ar(a, t));
}
N(ql, "overwriteMethod");
var YE = typeof Object.setPrototypeOf == "function",
  Eu = N(function () {}, "testFn"),
  JE = Object.getOwnPropertyNames(Eu).filter(function (e) {
    var t = Object.getOwnPropertyDescriptor(Eu, e);
    return typeof t != "object" ? !0 : !t.configurable;
  }),
  XE = Function.prototype.call,
  QE = Function.prototype.apply;
function El(e, t, r, n) {
  typeof n != "function" && (n = N(function () {}, "chainingBehavior"));
  var o = { method: r, chainingBehavior: n };
  e.__methods || (e.__methods = {}),
    (e.__methods[t] = o),
    Object.defineProperty(e, t, {
      get: N(function () {
        o.chainingBehavior.call(this);
        var a = N(function () {
          K(this, "lockSsfi") || K(this, "ssfi", a);
          var u = o.method.apply(this, arguments);
          if (u !== void 0) return u;
          var c = new T();
          return Ze(this, c), c;
        }, "chainableMethodWrapper");
        if ((hn(a, t, !0), YE)) {
          var i = Object.create(this);
          (i.call = XE), (i.apply = QE), Object.setPrototypeOf(a, i);
        } else {
          var l = Object.getOwnPropertyNames(e);
          l.forEach(function (u) {
            if (JE.indexOf(u) === -1) {
              var c = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(a, u, c);
            }
          });
        }
        return Ze(this, a), Ar(a);
      }, "chainableMethodGetter"),
      configurable: !0,
    });
}
N(El, "addChainableMethod");
function Pl(e, t, r, n) {
  var o = e.__methods[t],
    a = o.chainingBehavior;
  o.chainingBehavior = N(function () {
    var l = n(a).call(this);
    if (l !== void 0) return l;
    var u = new T();
    return Ze(this, u), u;
  }, "overwritingChainableMethodGetter");
  var i = o.method;
  o.method = N(function () {
    var l = r(i).apply(this, arguments);
    if (l !== void 0) return l;
    var u = new T();
    return Ze(this, u), u;
  }, "overwritingChainableMethodWrapper");
}
N(Pl, "overwriteChainableMethod");
function zn(e, t) {
  return Q(e) < Q(t) ? -1 : 1;
}
N(zn, "compareByInspect");
function Ol(e) {
  return typeof Object.getOwnPropertySymbols != "function"
    ? []
    : Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
}
N(Ol, "getOwnEnumerablePropertySymbols");
function Tl(e) {
  return Object.keys(e).concat(Ol(e));
}
N(Tl, "getOwnEnumerableProperties");
function sm(e) {
  return e !== e;
}
N(sm, "_isNaN");
var Gn = Number.isNaN || sm;
function um(e) {
  var t = ue(e),
    r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
N(um, "isObjectType");
function Sl(e, t) {
  var r = K(e, "operator"),
    n = K(e, "negate"),
    o = t[3],
    a = n ? t[2] : t[1];
  if (r) return r;
  if ((typeof a == "function" && (a = a()), (a = a || ""), !!a && !/\shave\s/.test(a))) {
    var i = um(o);
    return /\snot\s/.test(a) ? (i ? "notDeepStrictEqual" : "notStrictEqual") : i ? "deepStrictEqual" : "strictEqual";
  }
}
N(Sl, "getOperator");
function wo(e) {
  return e.name;
}
N(wo, "getName");
function Wn(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
N(Wn, "isRegExp");
var { flag: A } = nt;
["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same", "but", "does", "still", "also"].forEach(
  function (e) {
    T.addProperty(e);
  }
);
T.addProperty("not", function () {
  A(this, "negate", !0);
});
T.addProperty("deep", function () {
  A(this, "deep", !0);
});
T.addProperty("nested", function () {
  A(this, "nested", !0);
});
T.addProperty("own", function () {
  A(this, "own", !0);
});
T.addProperty("ordered", function () {
  A(this, "ordered", !0);
});
T.addProperty("any", function () {
  A(this, "any", !0), A(this, "all", !1);
});
T.addProperty("all", function () {
  A(this, "all", !0), A(this, "any", !1);
});
var Pu = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"],
};
function Al(e, t) {
  t && A(this, "message", t), (e = e.toLowerCase());
  var r = A(this, "object"),
    n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  let o = ue(r).toLowerCase();
  Pu.function.includes(e)
    ? this.assert(Pu[e].includes(o), "expected #{this} to be " + n + e, "expected #{this} not to be " + n + e)
    : this.assert(e === o, "expected #{this} to be " + n + e, "expected #{this} not to be " + n + e);
}
N(Al, "an");
T.addChainableMethod("an", Al);
T.addChainableMethod("a", Al);
function cm(e, t) {
  return (Gn(e) && Gn(t)) || e === t;
}
N(cm, "SameValueZero");
function bn() {
  A(this, "contains", !0);
}
N(bn, "includeChainingBehavior");
function yn(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = ue(r).toLowerCase(),
    o = A(this, "message"),
    a = A(this, "negate"),
    i = A(this, "ssfi"),
    l = A(this, "deep"),
    u = l ? "deep " : "",
    c = l ? A(this, "eql") : cm;
  o = o ? o + ": " : "";
  var s = !1;
  switch (n) {
    case "string":
      s = r.indexOf(e) !== -1;
      break;
    case "weakset":
      if (l) throw new ae(o + "unable to use .deep.include with WeakSet", void 0, i);
      s = r.has(e);
      break;
    case "map":
      r.forEach(function (f) {
        s = s || c(f, e);
      });
      break;
    case "set":
      l
        ? r.forEach(function (f) {
            s = s || c(f, e);
          })
        : (s = r.has(e));
      break;
    case "array":
      l
        ? (s = r.some(function (f) {
            return c(f, e);
          }))
        : (s = r.indexOf(e) !== -1);
      break;
    default:
      if (e !== Object(e))
        throw new ae(
          o +
            "the given combination of arguments (" +
            n +
            " and " +
            ue(e).toLowerCase() +
            ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " +
            ue(e).toLowerCase(),
          void 0,
          i
        );
      var d = Object.keys(e),
        m = null,
        p = 0;
      if (
        (d.forEach(function (f) {
          var b = new T(r);
          if ((Ze(this, b, !0), A(b, "lockSsfi", !0), !a || d.length === 1)) {
            b.property(f, e[f]);
            return;
          }
          try {
            b.property(f, e[f]);
          } catch (h) {
            if (!ke.compatibleConstructor(h, ae)) throw h;
            m === null && (m = h), p++;
          }
        }, this),
        a && d.length > 1 && p === d.length)
      )
        throw m;
      return;
  }
  this.assert(s, "expected #{this} to " + u + "include " + Q(e), "expected #{this} to not " + u + "include " + Q(e));
}
N(yn, "include");
T.addChainableMethod("include", yn, bn);
T.addChainableMethod("contain", yn, bn);
T.addChainableMethod("contains", yn, bn);
T.addChainableMethod("includes", yn, bn);
T.addProperty("ok", function () {
  this.assert(A(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
});
T.addProperty("true", function () {
  this.assert(A(this, "object") === !0, "expected #{this} to be true", "expected #{this} to be false", !A(this, "negate"));
});
T.addProperty("callable", function () {
  let e = A(this, "object"),
    t = A(this, "ssfi"),
    r = A(this, "message"),
    n = r ? `${r}: ` : "",
    o = A(this, "negate"),
    a = o ? `${n}expected ${Q(e)} not to be a callable function` : `${n}expected ${Q(e)} to be a callable function`,
    i = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(ue(e));
  if ((i && o) || (!i && !o)) throw new ae(a, void 0, t);
});
T.addProperty("false", function () {
  this.assert(A(this, "object") === !1, "expected #{this} to be false", "expected #{this} to be true", !!A(this, "negate"));
});
T.addProperty("null", function () {
  this.assert(A(this, "object") === null, "expected #{this} to be null", "expected #{this} not to be null");
});
T.addProperty("undefined", function () {
  this.assert(A(this, "object") === void 0, "expected #{this} to be undefined", "expected #{this} not to be undefined");
});
T.addProperty("NaN", function () {
  this.assert(Gn(A(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
});
function Ml() {
  var e = A(this, "object");
  this.assert(e != null, "expected #{this} to exist", "expected #{this} to not exist");
}
N(Ml, "assertExist");
T.addProperty("exist", Ml);
T.addProperty("exists", Ml);
T.addProperty("empty", function () {
  var e = A(this, "object"),
    t = A(this, "ssfi"),
    r = A(this, "message"),
    n;
  switch (((r = r ? r + ": " : ""), ue(e).toLowerCase())) {
    case "array":
    case "string":
      n = e.length;
      break;
    case "map":
    case "set":
      n = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new ae(r + ".empty was passed a weak collection", void 0, t);
    case "function":
      var o = r + ".empty was passed a function " + wo(e);
      throw new ae(o.trim(), void 0, t);
    default:
      if (e !== Object(e)) throw new ae(r + ".empty was passed non-string primitive " + Q(e), void 0, t);
      n = Object.keys(e).length;
  }
  this.assert(n === 0, "expected #{this} to be empty", "expected #{this} not to be empty");
});
function xl() {
  var e = A(this, "object"),
    t = ue(e);
  this.assert(t === "Arguments", "expected #{this} to be arguments but got " + t, "expected #{this} to not be arguments");
}
N(xl, "checkArguments");
T.addProperty("arguments", xl);
T.addProperty("Arguments", xl);
function Co(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object");
  if (A(this, "deep")) {
    var n = A(this, "lockSsfi");
    A(this, "lockSsfi", !0), this.eql(e), A(this, "lockSsfi", n);
  } else this.assert(e === r, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e, this._obj, !0);
}
N(Co, "assertEqual");
T.addMethod("equal", Co);
T.addMethod("equals", Co);
T.addMethod("eq", Co);
function jl(e, t) {
  t && A(this, "message", t);
  var r = A(this, "eql");
  this.assert(
    r(e, A(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
N(jl, "assertEql");
T.addMethod("eql", jl);
T.addMethod("eqls", jl);
function qo(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "doLength"),
    o = A(this, "message"),
    a = o ? o + ": " : "",
    i = A(this, "ssfi"),
    l = ue(r).toLowerCase(),
    u = ue(e).toLowerCase(),
    c,
    s = !0;
  if ((n && l !== "map" && l !== "set" && new T(r, o, i, !0).to.have.property("length"), !n && l === "date" && u !== "date"))
    c = a + "the argument to above must be a date";
  else if (u !== "number" && (n || l === "number")) c = a + "the argument to above must be a number";
  else if (!n && l !== "date" && l !== "number") {
    var d = l === "string" ? "'" + r + "'" : r;
    c = a + "expected " + d + " to be a number or a date";
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var m = "length",
      p;
    l === "map" || l === "set" ? ((m = "size"), (p = r.size)) : (p = r.length),
      this.assert(
        p > e,
        "expected #{this} to have a " + m + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + m + " above #{exp}",
        e,
        p
      );
  } else this.assert(r > e, "expected #{this} to be above #{exp}", "expected #{this} to be at most #{exp}", e);
}
N(qo, "assertAbove");
T.addMethod("above", qo);
T.addMethod("gt", qo);
T.addMethod("greaterThan", qo);
function Eo(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "doLength"),
    o = A(this, "message"),
    a = o ? o + ": " : "",
    i = A(this, "ssfi"),
    l = ue(r).toLowerCase(),
    u = ue(e).toLowerCase(),
    c,
    s = !0;
  if ((n && l !== "map" && l !== "set" && new T(r, o, i, !0).to.have.property("length"), !n && l === "date" && u !== "date"))
    c = a + "the argument to least must be a date";
  else if (u !== "number" && (n || l === "number")) c = a + "the argument to least must be a number";
  else if (!n && l !== "date" && l !== "number") {
    var d = l === "string" ? "'" + r + "'" : r;
    c = a + "expected " + d + " to be a number or a date";
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var m = "length",
      p;
    l === "map" || l === "set" ? ((m = "size"), (p = r.size)) : (p = r.length),
      this.assert(
        p >= e,
        "expected #{this} to have a " + m + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + m + " below #{exp}",
        e,
        p
      );
  } else this.assert(r >= e, "expected #{this} to be at least #{exp}", "expected #{this} to be below #{exp}", e);
}
N(Eo, "assertLeast");
T.addMethod("least", Eo);
T.addMethod("gte", Eo);
T.addMethod("greaterThanOrEqual", Eo);
function Po(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "doLength"),
    o = A(this, "message"),
    a = o ? o + ": " : "",
    i = A(this, "ssfi"),
    l = ue(r).toLowerCase(),
    u = ue(e).toLowerCase(),
    c,
    s = !0;
  if ((n && l !== "map" && l !== "set" && new T(r, o, i, !0).to.have.property("length"), !n && l === "date" && u !== "date"))
    c = a + "the argument to below must be a date";
  else if (u !== "number" && (n || l === "number")) c = a + "the argument to below must be a number";
  else if (!n && l !== "date" && l !== "number") {
    var d = l === "string" ? "'" + r + "'" : r;
    c = a + "expected " + d + " to be a number or a date";
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var m = "length",
      p;
    l === "map" || l === "set" ? ((m = "size"), (p = r.size)) : (p = r.length),
      this.assert(
        p < e,
        "expected #{this} to have a " + m + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + m + " below #{exp}",
        e,
        p
      );
  } else this.assert(r < e, "expected #{this} to be below #{exp}", "expected #{this} to be at least #{exp}", e);
}
N(Po, "assertBelow");
T.addMethod("below", Po);
T.addMethod("lt", Po);
T.addMethod("lessThan", Po);
function Oo(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "doLength"),
    o = A(this, "message"),
    a = o ? o + ": " : "",
    i = A(this, "ssfi"),
    l = ue(r).toLowerCase(),
    u = ue(e).toLowerCase(),
    c,
    s = !0;
  if ((n && l !== "map" && l !== "set" && new T(r, o, i, !0).to.have.property("length"), !n && l === "date" && u !== "date"))
    c = a + "the argument to most must be a date";
  else if (u !== "number" && (n || l === "number")) c = a + "the argument to most must be a number";
  else if (!n && l !== "date" && l !== "number") {
    var d = l === "string" ? "'" + r + "'" : r;
    c = a + "expected " + d + " to be a number or a date";
  } else s = !1;
  if (s) throw new ae(c, void 0, i);
  if (n) {
    var m = "length",
      p;
    l === "map" || l === "set" ? ((m = "size"), (p = r.size)) : (p = r.length),
      this.assert(
        p <= e,
        "expected #{this} to have a " + m + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + m + " above #{exp}",
        e,
        p
      );
  } else this.assert(r <= e, "expected #{this} to be at most #{exp}", "expected #{this} to be above #{exp}", e);
}
N(Oo, "assertMost");
T.addMethod("most", Oo);
T.addMethod("lte", Oo);
T.addMethod("lessThanOrEqual", Oo);
T.addMethod("within", function (e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "doLength"),
    a = A(this, "message"),
    i = a ? a + ": " : "",
    l = A(this, "ssfi"),
    u = ue(n).toLowerCase(),
    c = ue(e).toLowerCase(),
    s = ue(t).toLowerCase(),
    d,
    m = !0,
    p = c === "date" && s === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (
    (o && u !== "map" && u !== "set" && new T(n, a, l, !0).to.have.property("length"), !o && u === "date" && (c !== "date" || s !== "date"))
  )
    d = i + "the arguments to within must be dates";
  else if ((c !== "number" || s !== "number") && (o || u === "number")) d = i + "the arguments to within must be numbers";
  else if (!o && u !== "date" && u !== "number") {
    var f = u === "string" ? "'" + n + "'" : n;
    d = i + "expected " + f + " to be a number or a date";
  } else m = !1;
  if (m) throw new ae(d, void 0, l);
  if (o) {
    var b = "length",
      h;
    u === "map" || u === "set" ? ((b = "size"), (h = n.size)) : (h = n.length),
      this.assert(
        h >= e && h <= t,
        "expected #{this} to have a " + b + " within " + p,
        "expected #{this} to not have a " + b + " within " + p
      );
  } else this.assert(n >= e && n <= t, "expected #{this} to be within " + p, "expected #{this} to not be within " + p);
});
function Nl(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "ssfi"),
    o = A(this, "message");
  try {
    var a = r instanceof e;
  } catch (l) {
    throw l instanceof TypeError
      ? ((o = o ? o + ": " : ""), new ae(o + "The instanceof assertion needs a constructor but " + ue(e) + " was given.", void 0, n))
      : l;
  }
  var i = wo(e);
  i == null && (i = "an unnamed constructor"),
    this.assert(a, "expected #{this} to be an instance of " + i, "expected #{this} to not be an instance of " + i);
}
N(Nl, "assertInstanceOf");
T.addMethod("instanceof", Nl);
T.addMethod("instanceOf", Nl);
function $l(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "nested"),
    o = A(this, "own"),
    a = A(this, "message"),
    i = A(this, "object"),
    l = A(this, "ssfi"),
    u = typeof e;
  if (((a = a ? a + ": " : ""), n)) {
    if (u !== "string") throw new ae(a + "the argument to property must be a string when using nested syntax", void 0, l);
  } else if (u !== "string" && u !== "number" && u !== "symbol")
    throw new ae(a + "the argument to property must be a string, number, or symbol", void 0, l);
  if (n && o) throw new ae(a + 'The "nested" and "own" flags cannot be combined.', void 0, l);
  if (i == null) throw new ae(a + "Target cannot be null or undefined.", void 0, l);
  var c = A(this, "deep"),
    s = A(this, "negate"),
    d = n ? _l(i, e) : null,
    m = n ? d.value : i[e],
    p = c ? A(this, "eql") : (h, y) => h === y,
    f = "";
  c && (f += "deep "), o && (f += "own "), n && (f += "nested "), (f += "property ");
  var b;
  o ? (b = Object.prototype.hasOwnProperty.call(i, e)) : n ? (b = d.exists) : (b = Ro(i, e)),
    (!s || arguments.length === 1) && this.assert(b, "expected #{this} to have " + f + Q(e), "expected #{this} to not have " + f + Q(e)),
    arguments.length > 1 &&
      this.assert(
        b && p(t, m),
        "expected #{this} to have " + f + Q(e) + " of #{exp}, but got #{act}",
        "expected #{this} to not have " + f + Q(e) + " of #{act}",
        t,
        m
      ),
    A(this, "object", m);
}
N($l, "assertProperty");
T.addMethod("property", $l);
function Il(e, t, r) {
  A(this, "own", !0), $l.apply(this, arguments);
}
N(Il, "assertOwnProperty");
T.addMethod("ownProperty", Il);
T.addMethod("haveOwnProperty", Il);
function Bl(e, t, r) {
  typeof t == "string" && ((r = t), (t = null)), r && A(this, "message", r);
  var n = A(this, "object"),
    o = Object.getOwnPropertyDescriptor(Object(n), e),
    a = A(this, "eql");
  o && t
    ? this.assert(
        a(t, o),
        "expected the own property descriptor for " + Q(e) + " on #{this} to match " + Q(t) + ", got " + Q(o),
        "expected the own property descriptor for " + Q(e) + " on #{this} to not match " + Q(t),
        t,
        o,
        !0
      )
    : this.assert(
        o,
        "expected #{this} to have an own property descriptor for " + Q(e),
        "expected #{this} to not have an own property descriptor for " + Q(e)
      ),
    A(this, "object", o);
}
N(Bl, "assertOwnPropertyDescriptor");
T.addMethod("ownPropertyDescriptor", Bl);
T.addMethod("haveOwnPropertyDescriptor", Bl);
function kl() {
  A(this, "doLength", !0);
}
N(kl, "assertLengthChain");
function Ll(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = ue(r).toLowerCase(),
    o = A(this, "message"),
    a = A(this, "ssfi"),
    i = "length",
    l;
  switch (n) {
    case "map":
    case "set":
      (i = "size"), (l = r.size);
      break;
    default:
      new T(r, o, a, !0).to.have.property("length"), (l = r.length);
  }
  this.assert(
    l == e,
    "expected #{this} to have a " + i + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + i + " of #{act}",
    e,
    l
  );
}
N(Ll, "assertLength");
T.addChainableMethod("length", Ll, kl);
T.addChainableMethod("lengthOf", Ll, kl);
function Dl(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object");
  this.assert(e.exec(r), "expected #{this} to match " + e, "expected #{this} not to match " + e);
}
N(Dl, "assertMatch");
T.addMethod("match", Dl);
T.addMethod("matches", Dl);
T.addMethod("string", function (e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "message"),
    o = A(this, "ssfi");
  new T(r, n, o, !0).is.a("string"),
    this.assert(~r.indexOf(e), "expected #{this} to contain " + Q(e), "expected #{this} to not contain " + Q(e));
});
function Fl(e) {
  var t = A(this, "object"),
    r = ue(t),
    n = ue(e),
    o = A(this, "ssfi"),
    a = A(this, "deep"),
    i,
    l = "",
    u,
    c = !0,
    s = A(this, "message");
  s = s ? s + ": " : "";
  var d =
    s + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    (l = a ? "deeply " : ""),
      (u = []),
      t.forEach(function (g, E) {
        u.push(E);
      }),
      n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (((u = Tl(t)), n)) {
      case "Array":
        if (arguments.length > 1) throw new ae(d, void 0, o);
        break;
      case "Object":
        if (arguments.length > 1) throw new ae(d, void 0, o);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function (g) {
      return typeof g == "symbol" ? g : String(g);
    });
  }
  if (!e.length) throw new ae(s + "keys required", void 0, o);
  var m = e.length,
    p = A(this, "any"),
    f = A(this, "all"),
    b = e,
    h = a ? A(this, "eql") : (g, E) => g === E;
  if (
    (!p && !f && (f = !0),
    p &&
      (c = b.some(function (g) {
        return u.some(function (E) {
          return h(g, E);
        });
      })),
    f &&
      ((c = b.every(function (g) {
        return u.some(function (E) {
          return h(g, E);
        });
      })),
      A(this, "contains") || (c = c && e.length == u.length)),
    m > 1)
  ) {
    e = e.map(function (g) {
      return Q(g);
    });
    var y = e.pop();
    f && (i = e.join(", ") + ", and " + y), p && (i = e.join(", ") + ", or " + y);
  } else i = Q(e[0]);
  (i = (m > 1 ? "keys " : "key ") + i),
    (i = (A(this, "contains") ? "contain " : "have ") + i),
    this.assert(c, "expected #{this} to " + l + i, "expected #{this} to not " + l + i, b.slice(0).sort(zn), u.sort(zn), !0);
}
N(Fl, "assertKeys");
T.addMethod("keys", Fl);
T.addMethod("key", Fl);
function To(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "ssfi"),
    a = A(this, "message"),
    i = A(this, "negate") || !1;
  new T(n, a, o, !0).is.a("function"), (Wn(e) || typeof e == "string") && ((t = e), (e = null));
  let l,
    u = !1;
  try {
    n();
  } catch (g) {
    (u = !0), (l = g);
  }
  var c = e === void 0 && t === void 0,
    s = !!(e && t),
    d = !1,
    m = !1;
  if (c || (!c && !i)) {
    var p = "an error";
    e instanceof Error ? (p = "#{exp}") : e && (p = ke.getConstructorName(e));
    let g = l;
    if (l instanceof Error) g = l.toString();
    else if (typeof l == "string") g = l;
    else if (l && (typeof l == "object" || typeof l == "function"))
      try {
        g = ke.getConstructorName(l);
      } catch {}
    this.assert(u, "expected #{this} to throw " + p, "expected #{this} to not throw an error but #{act} was thrown", e && e.toString(), g);
  }
  if (e && l) {
    if (e instanceof Error) {
      var f = ke.compatibleInstance(l, e);
      f === i &&
        (s && i
          ? (d = !0)
          : this.assert(
              i,
              "expected #{this} to throw #{exp} but #{act} was thrown",
              "expected #{this} to not throw #{exp}" + (l && !i ? " but #{act} was thrown" : ""),
              e.toString(),
              l.toString()
            ));
    }
    var b = ke.compatibleConstructor(l, e);
    b === i &&
      (s && i
        ? (d = !0)
        : this.assert(
            i,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (l ? " but #{act} was thrown" : ""),
            e instanceof Error ? e.toString() : e && ke.getConstructorName(e),
            l instanceof Error ? l.toString() : l && ke.getConstructorName(l)
          ));
  }
  if (l && t !== void 0 && t !== null) {
    var h = "including";
    Wn(t) && (h = "matching");
    var y = ke.compatibleMessage(l, t);
    y === i &&
      (s && i
        ? (m = !0)
        : this.assert(
            i,
            "expected #{this} to throw error " + h + " #{exp} but got #{act}",
            "expected #{this} to throw error not " + h + " #{exp}",
            t,
            ke.getMessage(l)
          ));
  }
  d &&
    m &&
    this.assert(
      i,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (l ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && ke.getConstructorName(e),
      l instanceof Error ? l.toString() : l && ke.getConstructorName(l)
    ),
    A(this, "object", l);
}
N(To, "assertThrows");
T.addMethod("throw", To);
T.addMethod("throws", To);
T.addMethod("Throw", To);
function Hl(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "itself"),
    o = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(typeof o == "function", "expected #{this} to respond to " + Q(e), "expected #{this} to not respond to " + Q(e));
}
N(Hl, "respondTo");
T.addMethod("respondTo", Hl);
T.addMethod("respondsTo", Hl);
T.addProperty("itself", function () {
  A(this, "itself", !0);
});
function Ul(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = e(r);
  this.assert(n, "expected #{this} to satisfy " + Ht(e), "expected #{this} to not satisfy" + Ht(e), !A(this, "negate"), n);
}
N(Ul, "satisfy");
T.addMethod("satisfy", Ul);
T.addMethod("satisfies", Ul);
function Vl(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "message"),
    a = A(this, "ssfi");
  if ((new T(n, o, a, !0).is.a("number"), typeof e != "number" || typeof t != "number")) {
    o = o ? o + ": " : "";
    var i = t === void 0 ? ", and a delta is required" : "";
    throw new ae(o + "the arguments to closeTo or approximately must be numbers" + i, void 0, a);
  }
  this.assert(
    Math.abs(n - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
N(Vl, "closeTo");
T.addMethod("closeTo", Vl);
T.addMethod("approximately", Vl);
function dm(e, t, r, n, o) {
  let a = Array.from(t),
    i = Array.from(e);
  if (!n) {
    if (i.length !== a.length) return !1;
    a = a.slice();
  }
  return i.every(function (l, u) {
    if (o) return r ? r(l, a[u]) : l === a[u];
    if (!r) {
      var c = a.indexOf(l);
      return c === -1 ? !1 : (n || a.splice(c, 1), !0);
    }
    return a.some(function (s, d) {
      return r(l, s) ? (n || a.splice(d, 1), !0) : !1;
    });
  });
}
N(dm, "isSubsetOf");
T.addMethod("members", function (e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "message"),
    o = A(this, "ssfi");
  new T(r, n, o, !0).to.be.iterable, new T(e, n, o, !0).to.be.iterable;
  var a = A(this, "contains"),
    i = A(this, "ordered"),
    l,
    u,
    c;
  a
    ? ((l = i ? "an ordered superset" : "a superset"),
      (u = "expected #{this} to be " + l + " of #{exp}"),
      (c = "expected #{this} to not be " + l + " of #{exp}"))
    : ((l = i ? "ordered members" : "members"),
      (u = "expected #{this} to have the same " + l + " as #{exp}"),
      (c = "expected #{this} to not have the same " + l + " as #{exp}"));
  var s = A(this, "deep") ? A(this, "eql") : void 0;
  this.assert(dm(e, r, s, a, i), u, c, e, r, !0);
});
T.addProperty("iterable", function (e) {
  e && A(this, "message", e);
  var t = A(this, "object");
  this.assert(t != null && t[Symbol.iterator], "expected #{this} to be an iterable", "expected #{this} to not be an iterable", t);
});
function pm(e, t) {
  t && A(this, "message", t);
  var r = A(this, "object"),
    n = A(this, "message"),
    o = A(this, "ssfi"),
    a = A(this, "contains"),
    i = A(this, "deep"),
    l = A(this, "eql");
  new T(e, n, o, !0).to.be.an("array"),
    a
      ? this.assert(
          e.some(function (u) {
            return r.indexOf(u) > -1;
          }),
          "expected #{this} to contain one of #{exp}",
          "expected #{this} to not contain one of #{exp}",
          e,
          r
        )
      : i
      ? this.assert(
          e.some(function (u) {
            return l(r, u);
          }),
          "expected #{this} to deeply equal one of #{exp}",
          "expected #{this} to deeply equal one of #{exp}",
          e,
          r
        )
      : this.assert(e.indexOf(r) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", e, r);
}
N(pm, "oneOf");
T.addMethod("oneOf", pm);
function zl(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "message"),
    a = A(this, "ssfi");
  new T(n, o, a, !0).is.a("function");
  var i;
  t ? (new T(e, o, a, !0).to.have.property(t), (i = e[t])) : (new T(e, o, a, !0).is.a("function"), (i = e())), n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : "." + t;
  A(this, "deltaMsgObj", u),
    A(this, "initialDeltaValue", i),
    A(this, "finalDeltaValue", l),
    A(this, "deltaBehavior", "change"),
    A(this, "realDelta", l !== i),
    this.assert(i !== l, "expected " + u + " to change", "expected " + u + " to not change");
}
N(zl, "assertChanges");
T.addMethod("change", zl);
T.addMethod("changes", zl);
function Gl(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "message"),
    a = A(this, "ssfi");
  new T(n, o, a, !0).is.a("function");
  var i;
  t ? (new T(e, o, a, !0).to.have.property(t), (i = e[t])) : (new T(e, o, a, !0).is.a("function"), (i = e())),
    new T(i, o, a, !0).is.a("number"),
    n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : "." + t;
  A(this, "deltaMsgObj", u),
    A(this, "initialDeltaValue", i),
    A(this, "finalDeltaValue", l),
    A(this, "deltaBehavior", "increase"),
    A(this, "realDelta", l - i),
    this.assert(l - i > 0, "expected " + u + " to increase", "expected " + u + " to not increase");
}
N(Gl, "assertIncreases");
T.addMethod("increase", Gl);
T.addMethod("increases", Gl);
function Wl(e, t, r) {
  r && A(this, "message", r);
  var n = A(this, "object"),
    o = A(this, "message"),
    a = A(this, "ssfi");
  new T(n, o, a, !0).is.a("function");
  var i;
  t ? (new T(e, o, a, !0).to.have.property(t), (i = e[t])) : (new T(e, o, a, !0).is.a("function"), (i = e())),
    new T(i, o, a, !0).is.a("number"),
    n();
  var l = t == null ? e() : e[t],
    u = t == null ? i : "." + t;
  A(this, "deltaMsgObj", u),
    A(this, "initialDeltaValue", i),
    A(this, "finalDeltaValue", l),
    A(this, "deltaBehavior", "decrease"),
    A(this, "realDelta", i - l),
    this.assert(l - i < 0, "expected " + u + " to decrease", "expected " + u + " to not decrease");
}
N(Wl, "assertDecreases");
T.addMethod("decrease", Wl);
T.addMethod("decreases", Wl);
function mm(e, t) {
  t && A(this, "message", t);
  var r = A(this, "deltaMsgObj"),
    n = A(this, "initialDeltaValue"),
    o = A(this, "finalDeltaValue"),
    a = A(this, "deltaBehavior"),
    i = A(this, "realDelta"),
    l;
  a === "change" ? (l = Math.abs(o - n) === Math.abs(e)) : (l = i === Math.abs(e)),
    this.assert(l, "expected " + r + " to " + a + " by " + e, "expected " + r + " to not " + a + " by " + e);
}
N(mm, "assertDelta");
T.addMethod("by", mm);
T.addProperty("extensible", function () {
  var e = A(this, "object"),
    t = e === Object(e) && Object.isExtensible(e);
  this.assert(t, "expected #{this} to be extensible", "expected #{this} to not be extensible");
});
T.addProperty("sealed", function () {
  var e = A(this, "object"),
    t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(t, "expected #{this} to be sealed", "expected #{this} to not be sealed");
});
T.addProperty("frozen", function () {
  var e = A(this, "object"),
    t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(t, "expected #{this} to be frozen", "expected #{this} to not be frozen");
});
T.addProperty("finite", function (e) {
  var t = A(this, "object");
  this.assert(typeof t == "number" && isFinite(t), "expected #{this} to be a finite number", "expected #{this} to not be a finite number");
});
function Ut(e, t) {
  return new T(e, t);
}
N(Ut, "expect");
Ut.fail = function (e, t, r, n) {
  throw (
    (arguments.length < 2 && ((r = e), (e = void 0)),
    (r = r || "expect.fail()"),
    new ae(r, { actual: e, expected: t, operator: n }, Ut.fail))
  );
};
var fm = {};
ml(fm, { Should: () => eP, should: () => ZE });
function Kl() {
  function e() {
    return this instanceof String ||
      this instanceof Number ||
      this instanceof Boolean ||
      (typeof Symbol == "function" && this instanceof Symbol) ||
      (typeof BigInt == "function" && this instanceof BigInt)
      ? new T(this.valueOf(), null, e)
      : new T(this, null, e);
  }
  N(e, "shouldGetter");
  function t(n) {
    Object.defineProperty(this, "should", { value: n, enumerable: !0, configurable: !0, writable: !0 });
  }
  N(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", { set: t, get: e, configurable: !0 });
  var r = {};
  return (
    (r.fail = function (n, o, a, i) {
      throw (
        (arguments.length < 2 && ((a = n), (n = void 0)),
        (a = a || "should.fail()"),
        new ae(a, { actual: n, expected: o, operator: i }, r.fail))
      );
    }),
    (r.equal = function (n, o, a) {
      new T(n, a).to.equal(o);
    }),
    (r.Throw = function (n, o, a, i) {
      new T(n, i).to.Throw(o, a);
    }),
    (r.exist = function (n, o) {
      new T(n, o).to.exist;
    }),
    (r.not = {}),
    (r.not.equal = function (n, o, a) {
      new T(n, a).to.not.equal(o);
    }),
    (r.not.Throw = function (n, o, a, i) {
      new T(n, i).to.not.Throw(o, a);
    }),
    (r.not.exist = function (n, o) {
      new T(n, o).to.not.exist;
    }),
    (r.throw = r.Throw),
    (r.not.throw = r.not.Throw),
    r
  );
}
N(Kl, "loadShould");
var ZE = Kl,
  eP = Kl;
function O(e, t) {
  var r = new T(null, null, O, !0);
  r.assert(e, t, "[ negation message unavailable ]");
}
N(O, "assert");
O.fail = function (e, t, r, n) {
  throw (
    (arguments.length < 2 && ((r = e), (e = void 0)),
    (r = r || "assert.fail()"),
    new ae(r, { actual: e, expected: t, operator: n }, O.fail))
  );
};
O.isOk = function (e, t) {
  new T(e, t, O.isOk, !0).is.ok;
};
O.isNotOk = function (e, t) {
  new T(e, t, O.isNotOk, !0).is.not.ok;
};
O.equal = function (e, t, r) {
  var n = new T(e, r, O.equal, !0);
  n.assert(t == K(n, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t, e, !0);
};
O.notEqual = function (e, t, r) {
  var n = new T(e, r, O.notEqual, !0);
  n.assert(t != K(n, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t, e, !0);
};
O.strictEqual = function (e, t, r) {
  new T(e, r, O.strictEqual, !0).to.equal(t);
};
O.notStrictEqual = function (e, t, r) {
  new T(e, r, O.notStrictEqual, !0).to.not.equal(t);
};
O.deepEqual = O.deepStrictEqual = function (e, t, r) {
  new T(e, r, O.deepEqual, !0).to.eql(t);
};
O.notDeepEqual = function (e, t, r) {
  new T(e, r, O.notDeepEqual, !0).to.not.eql(t);
};
O.isAbove = function (e, t, r) {
  new T(e, r, O.isAbove, !0).to.be.above(t);
};
O.isAtLeast = function (e, t, r) {
  new T(e, r, O.isAtLeast, !0).to.be.least(t);
};
O.isBelow = function (e, t, r) {
  new T(e, r, O.isBelow, !0).to.be.below(t);
};
O.isAtMost = function (e, t, r) {
  new T(e, r, O.isAtMost, !0).to.be.most(t);
};
O.isTrue = function (e, t) {
  new T(e, t, O.isTrue, !0).is.true;
};
O.isNotTrue = function (e, t) {
  new T(e, t, O.isNotTrue, !0).to.not.equal(!0);
};
O.isFalse = function (e, t) {
  new T(e, t, O.isFalse, !0).is.false;
};
O.isNotFalse = function (e, t) {
  new T(e, t, O.isNotFalse, !0).to.not.equal(!1);
};
O.isNull = function (e, t) {
  new T(e, t, O.isNull, !0).to.equal(null);
};
O.isNotNull = function (e, t) {
  new T(e, t, O.isNotNull, !0).to.not.equal(null);
};
O.isNaN = function (e, t) {
  new T(e, t, O.isNaN, !0).to.be.NaN;
};
O.isNotNaN = function (e, t) {
  new T(e, t, O.isNotNaN, !0).not.to.be.NaN;
};
O.exists = function (e, t) {
  new T(e, t, O.exists, !0).to.exist;
};
O.notExists = function (e, t) {
  new T(e, t, O.notExists, !0).to.not.exist;
};
O.isUndefined = function (e, t) {
  new T(e, t, O.isUndefined, !0).to.equal(void 0);
};
O.isDefined = function (e, t) {
  new T(e, t, O.isDefined, !0).to.not.equal(void 0);
};
O.isCallable = function (e, t) {
  new T(e, t, O.isCallable, !0).is.callable;
};
O.isNotCallable = function (e, t) {
  new T(e, t, O.isNotCallable, !0).is.not.callable;
};
O.isObject = function (e, t) {
  new T(e, t, O.isObject, !0).to.be.a("object");
};
O.isNotObject = function (e, t) {
  new T(e, t, O.isNotObject, !0).to.not.be.a("object");
};
O.isArray = function (e, t) {
  new T(e, t, O.isArray, !0).to.be.an("array");
};
O.isNotArray = function (e, t) {
  new T(e, t, O.isNotArray, !0).to.not.be.an("array");
};
O.isString = function (e, t) {
  new T(e, t, O.isString, !0).to.be.a("string");
};
O.isNotString = function (e, t) {
  new T(e, t, O.isNotString, !0).to.not.be.a("string");
};
O.isNumber = function (e, t) {
  new T(e, t, O.isNumber, !0).to.be.a("number");
};
O.isNotNumber = function (e, t) {
  new T(e, t, O.isNotNumber, !0).to.not.be.a("number");
};
O.isFinite = function (e, t) {
  new T(e, t, O.isFinite, !0).to.be.finite;
};
O.isBoolean = function (e, t) {
  new T(e, t, O.isBoolean, !0).to.be.a("boolean");
};
O.isNotBoolean = function (e, t) {
  new T(e, t, O.isNotBoolean, !0).to.not.be.a("boolean");
};
O.typeOf = function (e, t, r) {
  new T(e, r, O.typeOf, !0).to.be.a(t);
};
O.notTypeOf = function (e, t, r) {
  new T(e, r, O.notTypeOf, !0).to.not.be.a(t);
};
O.instanceOf = function (e, t, r) {
  new T(e, r, O.instanceOf, !0).to.be.instanceOf(t);
};
O.notInstanceOf = function (e, t, r) {
  new T(e, r, O.notInstanceOf, !0).to.not.be.instanceOf(t);
};
O.include = function (e, t, r) {
  new T(e, r, O.include, !0).include(t);
};
O.notInclude = function (e, t, r) {
  new T(e, r, O.notInclude, !0).not.include(t);
};
O.deepInclude = function (e, t, r) {
  new T(e, r, O.deepInclude, !0).deep.include(t);
};
O.notDeepInclude = function (e, t, r) {
  new T(e, r, O.notDeepInclude, !0).not.deep.include(t);
};
O.nestedInclude = function (e, t, r) {
  new T(e, r, O.nestedInclude, !0).nested.include(t);
};
O.notNestedInclude = function (e, t, r) {
  new T(e, r, O.notNestedInclude, !0).not.nested.include(t);
};
O.deepNestedInclude = function (e, t, r) {
  new T(e, r, O.deepNestedInclude, !0).deep.nested.include(t);
};
O.notDeepNestedInclude = function (e, t, r) {
  new T(e, r, O.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
O.ownInclude = function (e, t, r) {
  new T(e, r, O.ownInclude, !0).own.include(t);
};
O.notOwnInclude = function (e, t, r) {
  new T(e, r, O.notOwnInclude, !0).not.own.include(t);
};
O.deepOwnInclude = function (e, t, r) {
  new T(e, r, O.deepOwnInclude, !0).deep.own.include(t);
};
O.notDeepOwnInclude = function (e, t, r) {
  new T(e, r, O.notDeepOwnInclude, !0).not.deep.own.include(t);
};
O.match = function (e, t, r) {
  new T(e, r, O.match, !0).to.match(t);
};
O.notMatch = function (e, t, r) {
  new T(e, r, O.notMatch, !0).to.not.match(t);
};
O.property = function (e, t, r) {
  new T(e, r, O.property, !0).to.have.property(t);
};
O.notProperty = function (e, t, r) {
  new T(e, r, O.notProperty, !0).to.not.have.property(t);
};
O.propertyVal = function (e, t, r, n) {
  new T(e, n, O.propertyVal, !0).to.have.property(t, r);
};
O.notPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notPropertyVal, !0).to.not.have.property(t, r);
};
O.deepPropertyVal = function (e, t, r, n) {
  new T(e, n, O.deepPropertyVal, !0).to.have.deep.property(t, r);
};
O.notDeepPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notDeepPropertyVal, !0).to.not.have.deep.property(t, r);
};
O.ownProperty = function (e, t, r) {
  new T(e, r, O.ownProperty, !0).to.have.own.property(t);
};
O.notOwnProperty = function (e, t, r) {
  new T(e, r, O.notOwnProperty, !0).to.not.have.own.property(t);
};
O.ownPropertyVal = function (e, t, r, n) {
  new T(e, n, O.ownPropertyVal, !0).to.have.own.property(t, r);
};
O.notOwnPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notOwnPropertyVal, !0).to.not.have.own.property(t, r);
};
O.deepOwnPropertyVal = function (e, t, r, n) {
  new T(e, n, O.deepOwnPropertyVal, !0).to.have.deep.own.property(t, r);
};
O.notDeepOwnPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, r);
};
O.nestedProperty = function (e, t, r) {
  new T(e, r, O.nestedProperty, !0).to.have.nested.property(t);
};
O.notNestedProperty = function (e, t, r) {
  new T(e, r, O.notNestedProperty, !0).to.not.have.nested.property(t);
};
O.nestedPropertyVal = function (e, t, r, n) {
  new T(e, n, O.nestedPropertyVal, !0).to.have.nested.property(t, r);
};
O.notNestedPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notNestedPropertyVal, !0).to.not.have.nested.property(t, r);
};
O.deepNestedPropertyVal = function (e, t, r, n) {
  new T(e, n, O.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, r);
};
O.notDeepNestedPropertyVal = function (e, t, r, n) {
  new T(e, n, O.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(t, r);
};
O.lengthOf = function (e, t, r) {
  new T(e, r, O.lengthOf, !0).to.have.lengthOf(t);
};
O.hasAnyKeys = function (e, t, r) {
  new T(e, r, O.hasAnyKeys, !0).to.have.any.keys(t);
};
O.hasAllKeys = function (e, t, r) {
  new T(e, r, O.hasAllKeys, !0).to.have.all.keys(t);
};
O.containsAllKeys = function (e, t, r) {
  new T(e, r, O.containsAllKeys, !0).to.contain.all.keys(t);
};
O.doesNotHaveAnyKeys = function (e, t, r) {
  new T(e, r, O.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
O.doesNotHaveAllKeys = function (e, t, r) {
  new T(e, r, O.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
O.hasAnyDeepKeys = function (e, t, r) {
  new T(e, r, O.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
O.hasAllDeepKeys = function (e, t, r) {
  new T(e, r, O.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
O.containsAllDeepKeys = function (e, t, r) {
  new T(e, r, O.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
O.doesNotHaveAnyDeepKeys = function (e, t, r) {
  new T(e, r, O.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
O.doesNotHaveAllDeepKeys = function (e, t, r) {
  new T(e, r, O.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
O.throws = function (e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && ((r = t), (t = null));
  var o = new T(e, n, O.throws, !0).to.throw(t, r);
  return K(o, "object");
};
O.doesNotThrow = function (e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && ((r = t), (t = null)), new T(e, n, O.doesNotThrow, !0).to.not.throw(t, r);
};
O.operator = function (e, t, r, n) {
  var o;
  switch (t) {
    case "==":
      o = e == r;
      break;
    case "===":
      o = e === r;
      break;
    case ">":
      o = e > r;
      break;
    case ">=":
      o = e >= r;
      break;
    case "<":
      o = e < r;
      break;
    case "<=":
      o = e <= r;
      break;
    case "!=":
      o = e != r;
      break;
    case "!==":
      o = e !== r;
      break;
    default:
      throw ((n = n && n + ": "), new ae(n + 'Invalid operator "' + t + '"', void 0, O.operator));
  }
  var a = new T(o, n, O.operator, !0);
  a.assert(K(a, "object") === !0, "expected " + Q(e) + " to be " + t + " " + Q(r), "expected " + Q(e) + " to not be " + t + " " + Q(r));
};
O.closeTo = function (e, t, r, n) {
  new T(e, n, O.closeTo, !0).to.be.closeTo(t, r);
};
O.approximately = function (e, t, r, n) {
  new T(e, n, O.approximately, !0).to.be.approximately(t, r);
};
O.sameMembers = function (e, t, r) {
  new T(e, r, O.sameMembers, !0).to.have.same.members(t);
};
O.notSameMembers = function (e, t, r) {
  new T(e, r, O.notSameMembers, !0).to.not.have.same.members(t);
};
O.sameDeepMembers = function (e, t, r) {
  new T(e, r, O.sameDeepMembers, !0).to.have.same.deep.members(t);
};
O.notSameDeepMembers = function (e, t, r) {
  new T(e, r, O.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
O.sameOrderedMembers = function (e, t, r) {
  new T(e, r, O.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
O.notSameOrderedMembers = function (e, t, r) {
  new T(e, r, O.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
O.sameDeepOrderedMembers = function (e, t, r) {
  new T(e, r, O.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(t);
};
O.notSameDeepOrderedMembers = function (e, t, r) {
  new T(e, r, O.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(t);
};
O.includeMembers = function (e, t, r) {
  new T(e, r, O.includeMembers, !0).to.include.members(t);
};
O.notIncludeMembers = function (e, t, r) {
  new T(e, r, O.notIncludeMembers, !0).to.not.include.members(t);
};
O.includeDeepMembers = function (e, t, r) {
  new T(e, r, O.includeDeepMembers, !0).to.include.deep.members(t);
};
O.notIncludeDeepMembers = function (e, t, r) {
  new T(e, r, O.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
O.includeOrderedMembers = function (e, t, r) {
  new T(e, r, O.includeOrderedMembers, !0).to.include.ordered.members(t);
};
O.notIncludeOrderedMembers = function (e, t, r) {
  new T(e, r, O.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
O.includeDeepOrderedMembers = function (e, t, r) {
  new T(e, r, O.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(t);
};
O.notIncludeDeepOrderedMembers = function (e, t, r) {
  new T(e, r, O.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(t);
};
O.oneOf = function (e, t, r) {
  new T(e, r, O.oneOf, !0).to.be.oneOf(t);
};
O.isIterable = function (e, t) {
  if (e == null || !e[Symbol.iterator])
    throw ((t = t ? `${t} expected ${Q(e)} to be an iterable` : `expected ${Q(e)} to be an iterable`), new ae(t, void 0, O.isIterable));
};
O.changes = function (e, t, r, n) {
  arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.changes, !0).to.change(t, r);
};
O.changesBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.changesBy, !0).to.change(t, r).by(n);
};
O.doesNotChange = function (e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.doesNotChange, !0).to.not.change(t, r);
};
O.changesButNotBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
O.increases = function (e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.increases, !0).to.increase(t, r);
};
O.increasesBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.increasesBy, !0).to.increase(t, r).by(n);
};
O.doesNotIncrease = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.doesNotIncrease, !0).to.not.increase(t, r)
  );
};
O.increasesButNotBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
O.decreases = function (e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.decreases, !0).to.decrease(t, r);
};
O.decreasesBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.decreasesBy, !0).to.decrease(t, r).by(n);
};
O.doesNotDecrease = function (e, t, r, n) {
  return (
    arguments.length === 3 && typeof t == "function" && ((n = r), (r = null)), new T(e, n, O.doesNotDecrease, !0).to.not.decrease(t, r)
  );
};
O.doesNotDecreaseBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  return new T(e, o, O.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
O.decreasesButNotBy = function (e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    (n = r), (o = a);
  } else arguments.length === 3 && ((n = r), (r = null));
  new T(e, o, O.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
O.ifError = function (e) {
  if (e) throw e;
};
O.isExtensible = function (e, t) {
  new T(e, t, O.isExtensible, !0).to.be.extensible;
};
O.isNotExtensible = function (e, t) {
  new T(e, t, O.isNotExtensible, !0).to.not.be.extensible;
};
O.isSealed = function (e, t) {
  new T(e, t, O.isSealed, !0).to.be.sealed;
};
O.isNotSealed = function (e, t) {
  new T(e, t, O.isNotSealed, !0).to.not.be.sealed;
};
O.isFrozen = function (e, t) {
  new T(e, t, O.isFrozen, !0).to.be.frozen;
};
O.isNotFrozen = function (e, t) {
  new T(e, t, O.isNotFrozen, !0).to.not.be.frozen;
};
O.isEmpty = function (e, t) {
  new T(e, t, O.isEmpty, !0).to.be.empty;
};
O.isNotEmpty = function (e, t) {
  new T(e, t, O.isNotEmpty, !0).to.not.be.empty;
};
N(function e(t, r) {
  return (O[r] = O[t]), e;
}, "alias")("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")(
  "isNotExtensible",
  "notExtensible"
)("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")(
  "isNotEmpty",
  "notEmpty"
)("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var Ou = [];
function Fr(e) {
  let t = { AssertionError: ae, util: nt, config: Ie, expect: Ut, assert: O, Assertion: T, ...fm };
  return ~Ou.indexOf(e) || (e(t, nt), Ou.push(e)), t;
}
N(Fr, "use");
var hm = {};
il(hm, {
  toBeChecked: () => nf,
  toBeDisabled: () => Ym,
  toBeEmpty: () => Nm,
  toBeEmptyDOMElement: () => $m,
  toBeEnabled: () => Jm,
  toBeInTheDOM: () => fi,
  toBeInTheDocument: () => jm,
  toBeInvalid: () => Zm,
  toBePartiallyChecked: () => af,
  toBeRequired: () => Xm,
  toBeValid: () => ef,
  toBeVisible: () => Vm,
  toContainElement: () => hi,
  toContainHTML: () => Im,
  toHaveAccessibleDescription: () => bi,
  toHaveAccessibleErrorMessage: () => km,
  toHaveAccessibleName: () => gi,
  toHaveAttribute: () => Lm,
  toHaveClass: () => Dm,
  toHaveDescription: () => lf,
  toHaveDisplayValue: () => rf,
  toHaveErrorMessage: () => sf,
  toHaveFocus: () => Fm,
  toHaveFormValues: () => Hm,
  toHaveRole: () => yi,
  toHaveStyle: () => vi,
  toHaveTextContent: () => Bm,
  toHaveValue: () => tf,
});
var Tu = De(cp(), 1);
function bm(e) {
  Object.defineProperty(e, "__esModule", { value: !0, configurable: !0 });
}
function Yl(e, t, r, n) {
  Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
}
var ym = {};
bm(ym);
Yl(ym, "default", () => gm);
var gm = class extends Error {
    constructor(e, t, r, n, o) {
      super(e + ":" + r + ":" + n + ": " + t),
        (this.reason = t),
        (this.filename = e),
        (this.line = r),
        (this.column = n),
        (this.source = o);
    }
  },
  vm = {};
bm(vm);
Yl(vm, "default", () => _m);
var _m = class {
    constructor(e, t, r) {
      (this.start = e), (this.end = t), (this.source = r);
    }
  },
  tP = {};
Yl(tP, "CssTypes", () => _e);
var _e;
(function (e) {
  (e.stylesheet = "stylesheet"),
    (e.rule = "rule"),
    (e.declaration = "declaration"),
    (e.comment = "comment"),
    (e.container = "container"),
    (e.charset = "charset"),
    (e.document = "document"),
    (e.customMedia = "custom-media"),
    (e.fontFace = "font-face"),
    (e.host = "host"),
    (e.import = "import"),
    (e.keyframes = "keyframes"),
    (e.keyframe = "keyframe"),
    (e.layer = "layer"),
    (e.media = "media"),
    (e.namespace = "namespace"),
    (e.page = "page"),
    (e.startingStyle = "starting-style"),
    (e.supports = "supports");
})(_e || (_e = {}));
var Oa = /\/\*[^]*?(?:\*\/|$)/g,
  rP = (e, t) => {
    t = t || {};
    let r = 1,
      n = 1;
    function o(F) {
      let L = F.match(/\n/g);
      L && (r += L.length);
      let D = F.lastIndexOf(`
`);
      n = ~D ? F.length - D : n + F.length;
    }
    function a() {
      let F = { line: r, column: n };
      return function (L) {
        return (L.position = new _m(F, { line: r, column: n }, (t == null ? void 0 : t.source) || "")), p(), L;
      };
    }
    let i = [];
    function l(F) {
      let L = new gm((t == null ? void 0 : t.source) || "", F, r, n, e);
      if (t != null && t.silent) i.push(L);
      else throw L;
    }
    function u() {
      let F = d();
      return { type: _e.stylesheet, stylesheet: { source: t == null ? void 0 : t.source, rules: F, parsingErrors: i } };
    }
    function c() {
      return m(/^{\s*/);
    }
    function s() {
      return m(/^}/);
    }
    function d() {
      let F,
        L = [];
      for (p(), f(L); e.length && e.charAt(0) !== "}" && (F = ve() || pe()); ) F && (L.push(F), f(L));
      return L;
    }
    function m(F) {
      let L = F.exec(e);
      if (!L) return;
      let D = L[0];
      return o(D), (e = e.slice(D.length)), L;
    }
    function p() {
      m(/^\s*/);
    }
    function f(F) {
      let L;
      for (F = F || []; (L = b()); ) L && F.push(L);
      return F;
    }
    function b() {
      let F = a();
      if (e.charAt(0) !== "/" || e.charAt(1) !== "*") return;
      let L = m(/^\/\*[^]*?\*\//);
      return L ? F({ type: _e.comment, comment: L[0].slice(2, -2) }) : l("End of comment missing");
    }
    function h(F, L, D) {
      let z = L + 1,
        H = !1,
        oe = F.indexOf(")", z);
      for (; !H && oe !== -1; ) {
        let se = F.indexOf("(", z);
        se !== -1 && se < oe ? ((z = h(F, se + 1) + 1), (oe = F.indexOf(")", z))) : (H = !0);
      }
      return H && oe !== -1 ? oe : -1;
    }
    function y() {
      let F = m(/^([^{]+)/);
      if (!F) return;
      let L = Fe(F[0]).replace(Oa, "");
      if (L.indexOf(",") === -1) return [L];
      let D = 0,
        z = L.indexOf("(", D);
      for (; z !== -1; ) {
        let H = h(L, z);
        if (H === -1) break;
        (D = H + 1), (L = L.substring(0, z) + L.substring(z, H).replace(/,/g, "‌") + L.substring(H)), (z = L.indexOf("(", D));
      }
      return (L = L.replace(/("|')(?:\\\1|.)*?\1/g, (H) => H.replace(/,/g, "‌"))), L.split(",").map((H) => Fe(H.replace(/\u200C/g, ",")));
    }
    function g() {
      let F = a(),
        L = m(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (!L) return;
      let D = Fe(L[0]);
      if (!m(/^:\s*/)) return l("property missing ':'");
      let z = m(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/),
        H = F({ type: _e.declaration, property: D.replace(Oa, ""), value: z ? Fe(z[0]).replace(Oa, "") : "" });
      return m(/^[;\s]*/), H;
    }
    function E() {
      let F = [];
      if (!c()) return l("missing '{'");
      f(F);
      let L;
      for (; (L = g()); ) L && (F.push(L), f(F));
      return s() ? F : l("missing '}'");
    }
    function C() {
      let F,
        L = [],
        D = a();
      for (; (F = m(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); ) L.push(F[1]), m(/^,\s*/);
      if (L.length) return D({ type: _e.keyframe, values: L, declarations: E() || [] });
    }
    function q() {
      let F = a(),
        L = m(/^@([-\w]+)?keyframes\s*/);
      if (!L) return;
      let D = L[1],
        z = m(/^([-\w]+)\s*/);
      if (!z) return l("@keyframes missing name");
      let H = z[1];
      if (!c()) return l("@keyframes missing '{'");
      let oe,
        se = f();
      for (; (oe = C()); ) se.push(oe), (se = se.concat(f()));
      return s() ? F({ type: _e.keyframes, name: H, vendor: D, keyframes: se }) : l("@keyframes missing '}'");
    }
    function _() {
      let F = a(),
        L = m(/^@supports *([^{]+)/);
      if (!L) return;
      let D = Fe(L[1]);
      if (!c()) return l("@supports missing '{'");
      let z = f().concat(d());
      return s() ? F({ type: _e.supports, supports: D, rules: z }) : l("@supports missing '}'");
    }
    function v() {
      let F = a();
      if (!m(/^@host\s*/)) return;
      if (!c()) return l("@host missing '{'");
      let L = f().concat(d());
      return s() ? F({ type: _e.host, rules: L }) : l("@host missing '}'");
    }
    function w() {
      let F = a(),
        L = m(/^@container *([^{]+)/);
      if (!L) return;
      let D = Fe(L[1]);
      if (!c()) return l("@container missing '{'");
      let z = f().concat(d());
      return s() ? F({ type: _e.container, container: D, rules: z }) : l("@container missing '}'");
    }
    function P() {
      let F = a(),
        L = m(/^@layer *([^{;@]+)/);
      if (!L) return;
      let D = Fe(L[1]);
      if (!c()) return m(/^[;\s]*/), F({ type: _e.layer, layer: D });
      let z = f().concat(d());
      return s() ? F({ type: _e.layer, layer: D, rules: z }) : l("@layer missing '}'");
    }
    function j() {
      let F = a(),
        L = m(/^@media *([^{]+)/);
      if (!L) return;
      let D = Fe(L[1]);
      if (!c()) return l("@media missing '{'");
      let z = f().concat(d());
      return s() ? F({ type: _e.media, media: D, rules: z }) : l("@media missing '}'");
    }
    function $() {
      let F = a(),
        L = m(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
      if (L) return F({ type: _e.customMedia, name: Fe(L[1]), media: Fe(L[2]) });
    }
    function B() {
      let F = a();
      if (!m(/^@page */)) return;
      let L = y() || [];
      if (!c()) return l("@page missing '{'");
      let D = f(),
        z;
      for (; (z = g()); ) D.push(z), (D = D.concat(f()));
      return s() ? F({ type: _e.page, selectors: L, declarations: D }) : l("@page missing '}'");
    }
    function I() {
      let F = a(),
        L = m(/^@([-\w]+)?document *([^{]+)/);
      if (!L) return;
      let D = Fe(L[1]),
        z = Fe(L[2]);
      if (!c()) return l("@document missing '{'");
      let H = f().concat(d());
      return s() ? F({ type: _e.document, document: z, vendor: D, rules: H }) : l("@document missing '}'");
    }
    function S() {
      let F = a();
      if (!m(/^@font-face\s*/)) return;
      if (!c()) return l("@font-face missing '{'");
      let L = f(),
        D;
      for (; (D = g()); ) L.push(D), (L = L.concat(f()));
      return s() ? F({ type: _e.fontFace, declarations: L }) : l("@font-face missing '}'");
    }
    function k() {
      let F = a();
      if (!m(/^@starting-style\s*/)) return;
      if (!c()) return l("@starting-style missing '{'");
      let L = f().concat(d());
      return s() ? F({ type: _e.startingStyle, rules: L }) : l("@starting-style missing '}'");
    }
    let U = le("import"),
      W = le("charset"),
      G = le("namespace");
    function le(F) {
      let L = new RegExp("^@" + F + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
      return function () {
        let D = a(),
          z = m(L);
        if (!z) return;
        let H = { type: F };
        return (H[F] = z[1].trim()), D(H);
      };
    }
    function ve() {
      if (e[0] === "@") return q() || j() || $() || _() || U() || W() || G() || I() || B() || v() || S() || w() || k() || P();
    }
    function pe() {
      let F = a(),
        L = y();
      return L ? (f(), F({ type: _e.rule, selectors: L, declarations: E() || [] })) : l("selector missing");
    }
    return pi(u());
  };
function Fe(e) {
  return e ? e.trim() : "";
}
function pi(e, t) {
  let r = e && typeof e.type == "string",
    n = r ? e : t;
  for (let o in e) {
    let a = e[o];
    Array.isArray(a)
      ? a.forEach((i) => {
          pi(i, n);
        })
      : a && typeof a == "object" && pi(a, n);
  }
  return r && Object.defineProperty(e, "parent", { configurable: !0, writable: !0, enumerable: !1, value: t || null }), e;
}
var nP = rP,
  oP = nP,
  aP = Object.prototype.toString;
function Su(e) {
  return typeof e == "function" || aP.call(e) === "[object Function]";
}
function iP(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var lP = Math.pow(2, 53) - 1;
function sP(e) {
  var t = iP(e);
  return Math.min(Math.max(t, 0), lP);
}
function Ye(e, t) {
  var r = Array,
    n = Object(e);
  if (e == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !Su(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var o = sP(n.length), a = Su(r) ? Object(new r(o)) : new Array(o), i = 0, l; i < o; )
    (l = n[i]), t ? (a[i] = t(l, i)) : (a[i] = l), (i += 1);
  return (a.length = o), a;
}
function Kr(e) {
  "@babel/helpers - typeof";
  return (
    (Kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    Kr(e)
  );
}
function uP(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Au(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, Rm(n.key), n);
  }
}
function cP(e, t, r) {
  return t && Au(e.prototype, t), r && Au(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dP(e, t, r) {
  return (t = Rm(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Rm(e) {
  var t = pP(e, "string");
  return Kr(t) === "symbol" ? t : String(t);
}
function pP(e, t) {
  if (Kr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Kr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mP = (function () {
    function e() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      uP(this, e), dP(this, "items", void 0), (this.items = t);
    }
    return (
      cP(e, [
        {
          key: "add",
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: "clear",
          value: function () {
            this.items = [];
          },
        },
        {
          key: "delete",
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (n) {
                return n !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: "forEach",
          value: function (t) {
            var r = this;
            this.items.forEach(function (n) {
              t(n, n, r);
            });
          },
        },
        {
          key: "has",
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: "size",
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  fP = typeof Set > "u" ? Set : mP;
function Me(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0 ? t : e.tagName.toLowerCase();
}
var hP = {
    article: "article",
    aside: "complementary",
    button: "button",
    datalist: "listbox",
    dd: "definition",
    details: "group",
    dialog: "dialog",
    dt: "term",
    fieldset: "group",
    figure: "figure",
    form: "form",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    header: "banner",
    hr: "separator",
    html: "document",
    legend: "legend",
    li: "listitem",
    math: "math",
    main: "main",
    menu: "list",
    nav: "navigation",
    ol: "list",
    optgroup: "group",
    option: "option",
    output: "status",
    progress: "progressbar",
    section: "region",
    summary: "button",
    table: "table",
    tbody: "rowgroup",
    textarea: "textbox",
    tfoot: "rowgroup",
    td: "cell",
    th: "columnheader",
    thead: "rowgroup",
    tr: "row",
    ul: "list",
  },
  bP = {
    caption: new Set(["aria-label", "aria-labelledby"]),
    code: new Set(["aria-label", "aria-labelledby"]),
    deletion: new Set(["aria-label", "aria-labelledby"]),
    emphasis: new Set(["aria-label", "aria-labelledby"]),
    generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
    insertion: new Set(["aria-label", "aria-labelledby"]),
    none: new Set(["aria-label", "aria-labelledby"]),
    paragraph: new Set(["aria-label", "aria-labelledby"]),
    presentation: new Set(["aria-label", "aria-labelledby"]),
    strong: new Set(["aria-label", "aria-labelledby"]),
    subscript: new Set(["aria-label", "aria-labelledby"]),
    superscript: new Set(["aria-label", "aria-labelledby"]),
  };
function yP(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-description",
    "aria-describedby",
    "aria-details",
    "aria-dropeffect",
    "aria-flowto",
    "aria-grabbed",
    "aria-hidden",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ].some(function (r) {
    var n;
    return e.hasAttribute(r) && !((n = bP[t]) !== null && n !== void 0 && n.has(r));
  });
}
function wm(e, t) {
  return yP(e, t);
}
function gP(e) {
  var t = _P(e);
  if (t === null || mi.indexOf(t) !== -1) {
    var r = vP(e);
    if (mi.indexOf(t || "") === -1 || wm(e, r || "")) return r;
  }
  return t;
}
function vP(e) {
  var t = hP[Me(e)];
  if (t !== void 0) return t;
  switch (Me(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href")) return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !wm(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e,
        n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function _P(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0) return r;
  }
  return null;
}
var mi = ["presentation", "none"];
function ce(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Cm(e) {
  return ce(e) && Me(e) === "caption";
}
function jn(e) {
  return ce(e) && Me(e) === "input";
}
function RP(e) {
  return ce(e) && Me(e) === "optgroup";
}
function wP(e) {
  return ce(e) && Me(e) === "select";
}
function CP(e) {
  return ce(e) && Me(e) === "table";
}
function qP(e) {
  return ce(e) && Me(e) === "textarea";
}
function EP(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError("no window available");
  return r;
}
function PP(e) {
  return ce(e) && Me(e) === "fieldset";
}
function OP(e) {
  return ce(e) && Me(e) === "legend";
}
function TP(e) {
  return ce(e) && Me(e) === "slot";
}
function SP(e) {
  return ce(e) && e.ownerSVGElement !== void 0;
}
function AP(e) {
  return ce(e) && Me(e) === "svg";
}
function MP(e) {
  return SP(e) && Me(e) === "title";
}
function Kn(e, t) {
  if (ce(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "),
      n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (o) {
        return n.getElementById(o);
      })
      .filter(function (o) {
        return o !== null;
      });
  }
  return [];
}
function ft(e, t) {
  return ce(e) ? t.indexOf(gP(e)) !== -1 : !1;
}
function xP(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function jP(e, t) {
  if (!ce(e)) return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function NP(e) {
  return ft(e, ["button", "combobox", "listbox", "textbox"]) || qm(e, "range");
}
function qm(e, t) {
  if (!ce(e)) return !1;
  switch (t) {
    case "range":
      return ft(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Mu(e, t) {
  var r = Ye(e.querySelectorAll(t));
  return (
    Kn(e, "aria-owns").forEach(function (n) {
      r.push.apply(r, Ye(n.querySelectorAll(t)));
    }),
    r
  );
}
function $P(e) {
  return wP(e) ? e.selectedOptions || Mu(e, "[selected]") : Mu(e, '[aria-selected="true"]');
}
function IP(e) {
  return ft(e, mi);
}
function BP(e) {
  return Cm(e);
}
function kP(e) {
  return ft(e, [
    "button",
    "cell",
    "checkbox",
    "columnheader",
    "gridcell",
    "heading",
    "label",
    "legend",
    "link",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "option",
    "radio",
    "row",
    "rowheader",
    "switch",
    "tab",
    "tooltip",
    "treeitem",
  ]);
}
function LP(e) {
  return !1;
}
function DP(e) {
  return jn(e) || qP(e) ? e.value : e.textContent || "";
}
function xu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Em(e) {
  var t = Me(e);
  return (
    t === "button" ||
    (t === "input" && e.getAttribute("type") !== "hidden") ||
    t === "meter" ||
    t === "output" ||
    t === "progress" ||
    t === "select" ||
    t === "textarea"
  );
}
function Pm(e) {
  if (Em(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && ce(r)) {
        var n = Pm(r);
        n !== null && (t = n);
      }
    }),
    t
  );
}
function FP(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : Pm(e);
}
function HP(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return Ye(t);
  if (!Em(e)) return null;
  var r = e.ownerDocument;
  return Ye(r.querySelectorAll("label")).filter(function (n) {
    return FP(n) === e;
  });
}
function UP(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Ye(e.childNodes) : t;
}
function Om(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new fP(),
    n = EP(e),
    o = t.compute,
    a = o === void 0 ? "name" : o,
    i = t.computedStyleSupportsPseudoElements,
    l = i === void 0 ? t.getComputedStyle !== void 0 : i,
    u = t.getComputedStyle,
    c = u === void 0 ? n.getComputedStyle.bind(n) : u,
    s = t.hidden,
    d = s === void 0 ? !1 : s;
  function m(y, g) {
    var E = "";
    if (ce(y) && l) {
      var C = c(y, "::before"),
        q = xu(C);
      E = "".concat(q, " ").concat(E);
    }
    var _ = TP(y) ? UP(y) : Ye(y.childNodes).concat(Kn(y, "aria-owns"));
    if (
      (_.forEach(function (P) {
        var j = h(P, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
          $ = ce(P) ? c(P).getPropertyValue("display") : "inline",
          B = $ !== "inline" ? " " : "";
        E += "".concat(B).concat(j).concat(B);
      }),
      ce(y) && l)
    ) {
      var v = c(y, "::after"),
        w = xu(v);
      E = "".concat(E, " ").concat(w);
    }
    return E.trim();
  }
  function p(y, g) {
    var E = y.getAttributeNode(g);
    return E !== null && !r.has(E) && E.value.trim() !== "" ? (r.add(E), E.value) : null;
  }
  function f(y) {
    return ce(y) ? p(y, "title") : null;
  }
  function b(y) {
    if (!ce(y)) return null;
    if (PP(y)) {
      r.add(y);
      for (var g = Ye(y.childNodes), E = 0; E < g.length; E += 1) {
        var C = g[E];
        if (OP(C)) return h(C, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (CP(y)) {
      r.add(y);
      for (var q = Ye(y.childNodes), _ = 0; _ < q.length; _ += 1) {
        var v = q[_];
        if (Cm(v)) return h(v, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (AP(y)) {
      r.add(y);
      for (var w = Ye(y.childNodes), P = 0; P < w.length; P += 1) {
        var j = w[P];
        if (MP(j)) return j.textContent;
      }
      return null;
    } else if (Me(y) === "img" || Me(y) === "area") {
      var $ = p(y, "alt");
      if ($ !== null) return $;
    } else if (RP(y)) {
      var B = p(y, "label");
      if (B !== null) return B;
    }
    if (jn(y) && (y.type === "button" || y.type === "submit" || y.type === "reset")) {
      var I = p(y, "value");
      if (I !== null) return I;
      if (y.type === "submit") return "Submit";
      if (y.type === "reset") return "Reset";
    }
    var S = HP(y);
    if (S !== null && S.length !== 0)
      return (
        r.add(y),
        Ye(S)
          .map(function (G) {
            return h(G, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
          })
          .filter(function (G) {
            return G.length > 0;
          })
          .join(" ")
      );
    if (jn(y) && y.type === "image") {
      var k = p(y, "alt");
      if (k !== null) return k;
      var U = p(y, "title");
      return U !== null ? U : "Submit Query";
    }
    if (ft(y, ["button"])) {
      var W = m(y, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (W !== "") return W;
    }
    return null;
  }
  function h(y, g) {
    if (r.has(y)) return "";
    if (!d && jP(y, c) && !g.isReferenced) return r.add(y), "";
    var E = ce(y) ? y.getAttributeNode("aria-labelledby") : null,
      C = E !== null && !r.has(E) ? Kn(y, "aria-labelledby") : [];
    if (a === "name" && !g.isReferenced && C.length > 0)
      return (
        r.add(E),
        C.map(function ($) {
          return h($, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !0, recursion: !1 });
        }).join(" ")
      );
    var q = g.recursion && NP(y) && a === "name";
    if (!q) {
      var _ = ((ce(y) && y.getAttribute("aria-label")) || "").trim();
      if (_ !== "" && a === "name") return r.add(y), _;
      if (!IP(y)) {
        var v = b(y);
        if (v !== null) return r.add(y), v;
      }
    }
    if (ft(y, ["menu"])) return r.add(y), "";
    if (q || g.isEmbeddedInLabel || g.isReferenced) {
      if (ft(y, ["combobox", "listbox"])) {
        r.add(y);
        var w = $P(y);
        return w.length === 0
          ? jn(y)
            ? y.value
            : ""
          : Ye(w)
              .map(function ($) {
                return h($, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1, recursion: !0 });
              })
              .join(" ");
      }
      if (qm(y, "range"))
        return (
          r.add(y),
          y.hasAttribute("aria-valuetext")
            ? y.getAttribute("aria-valuetext")
            : y.hasAttribute("aria-valuenow")
            ? y.getAttribute("aria-valuenow")
            : y.getAttribute("value") || ""
        );
      if (ft(y, ["textbox"])) return r.add(y), DP(y);
    }
    if (kP(y) || (ce(y) && g.isReferenced) || BP(y) || LP()) {
      var P = m(y, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 });
      if (P !== "") return r.add(y), P;
    }
    if (y.nodeType === y.TEXT_NODE) return r.add(y), y.textContent || "";
    if (g.recursion) return r.add(y), m(y, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 });
    var j = f(y);
    return j !== null ? (r.add(y), j) : (r.add(y), "");
  }
  return xP(h(e, { isEmbeddedInLabel: !1, isReferenced: a === "description", recursion: !1 }));
}
function Yr(e) {
  "@babel/helpers - typeof";
  return (
    (Yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    Yr(e)
  );
}
function ju(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ju(Object(r), !0).forEach(function (n) {
          VP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ju(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function VP(e, t, r) {
  return (t = zP(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function zP(e) {
  var t = GP(e, "string");
  return Yr(t) === "symbol" ? t : String(t);
}
function GP(e, t) {
  if (Yr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Kn(e, "aria-describedby")
      .map(function (a) {
        return Om(a, Nu(Nu({}, t), {}, { compute: "description" }));
      })
      .join(" ");
  if (r === "") {
    var n = e.getAttribute("aria-description");
    r = n === null ? "" : n;
  }
  if (r === "") {
    var o = e.getAttribute("title");
    r = o === null ? "" : o;
  }
  return r;
}
function KP(e) {
  return ft(e, [
    "caption",
    "code",
    "deletion",
    "emphasis",
    "generic",
    "insertion",
    "none",
    "paragraph",
    "presentation",
    "strong",
    "subscript",
    "superscript",
  ]);
}
function YP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return KP(e) ? "" : Om(e, t);
}
var Jl = De(dp(), 1),
  JP = De(mp(), 1),
  Tm = De(qp(), 1),
  XP = De(Ep(), 1),
  Sm = class extends Error {
    constructor(e, t, r, n) {
      super(), Error.captureStackTrace && Error.captureStackTrace(this, r);
      let o = "";
      try {
        o = n.utils.printWithType("Received", t, n.utils.printReceived);
      } catch {}
      this.message = [
        n.utils.matcherHint(`${n.isNot ? ".not" : ""}.${r.name}`, "received", ""),
        "",
        `${n.utils.RECEIVED_COLOR("received")} value must ${e}.`,
        o,
      ].join(`
`);
    }
  },
  $u = class extends Sm {
    constructor(...e) {
      super("be an HTMLElement or an SVGElement", ...e);
    }
  },
  Iu = class extends Sm {
    constructor(...e) {
      super("be a Node", ...e);
    }
  };
function Am(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView) throw new t(e, ...r);
}
function QP(e, ...t) {
  Am(e, Iu, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node)) throw new Iu(e, ...t);
}
function ie(e, ...t) {
  Am(e, $u, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) throw new $u(e, ...t);
}
var ZP = class extends Error {
  constructor(e, t, r) {
    super(),
      Error.captureStackTrace && Error.captureStackTrace(this, t),
      (this.message = [e.message, "", r.utils.RECEIVED_COLOR("Failing css:"), r.utils.RECEIVED_COLOR(`${e.css}`)].join(`
`));
  }
};
function eO(e, ...t) {
  let r = oP(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    let { reason: n, line: o } = r.parsingErrors[0];
    throw new ZP({ css: e, message: `Syntax error parsing expected css: ${n} on line: ${o}` }, ...t);
  }
  return r.rules[0].declarations
    .filter((n) => n.type === "declaration")
    .reduce((n, { property: o, value: a }) => Object.assign(n, { [o]: a }), {});
}
function Bu(e, t) {
  return typeof t == "string" ? t : e.utils.stringify(t);
}
function Se(e, t, r, n, o, a) {
  return [
    `${t}
`,
    `${r}:
${e.utils.EXPECTED_COLOR((0, Tu.default)(Bu(e, n), 2))}`,
    `${o}:
${e.utils.RECEIVED_COLOR((0, Tu.default)(Bu(e, a), 2))}`,
  ].join(`
`);
}
function tO(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function So(e, t) {
  console.warn(`Warning: ${e} has been deprecated and will be removed in future updates.`, t);
}
function Ao(e) {
  return e.replace(/\s+/g, " ").trim();
}
function xt(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function rO({ multiple: e, options: t }) {
  let r = [...t].filter((n) => n.selected);
  if (e) return [...r].map((n) => n.value);
  if (r.length !== 0) return r[0].value;
}
function nO(e) {
  switch (e.type) {
    case "number":
      return e.value === "" ? null : Number(e.value);
    case "checkbox":
      return e.checked;
    default:
      return e.value;
  }
}
var oO = ["meter", "progressbar", "slider", "spinbutton"];
function aO(e) {
  if (oO.includes(e.getAttribute("role"))) return Number(e.getAttribute("aria-valuenow"));
}
function Mm(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case "input":
        return nO(e);
      case "select":
        return rO(e);
      default:
        return e.value ?? aO(e);
    }
}
function iO(e, { wordConnector: t = ", ", lastWordConnector: r = " and " } = {}) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(e.length > 1 ? r : "");
}
function xm(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) return [...new Set(e)].every((r) => new Set(t).has(r));
}
function fi(e, t) {
  return (
    So(
      "toBeInTheDOM",
      "Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container."
    ),
    e && ie(e, fi, this),
    t && ie(t, fi, this),
    {
      pass: t ? t.contains(e) : !!e,
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeInTheDOM`, "element", ""),
          "",
          "Received:",
          `  ${this.utils.printReceived(e && e.cloneNode(!1))}`,
        ].join(`
`),
    }
  );
}
function jm(e) {
  (e !== null || !this.isNot) && ie(e, jm, this);
  let t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = () => `expected document not to contain element, found ${this.utils.stringify(e.cloneNode(!0))} instead`,
    n = () => "element could not be found in the document";
  return {
    pass: t,
    message: () =>
      [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeInTheDocument`, "element", ""),
        "",
        this.utils.RECEIVED_COLOR(this.isNot ? r() : n()),
      ].join(`
`),
  };
}
function Nm(e) {
  return (
    So("toBeEmpty", "Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM."),
    ie(e, Nm, this),
    {
      pass: e.innerHTML === "",
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeEmpty`, "element", ""),
          "",
          "Received:",
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function $m(e) {
  return (
    ie(e, $m, this),
    {
      pass: lO(e),
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeEmptyDOMElement`, "element", ""),
          "",
          "Received:",
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function lO(e) {
  return [...e.childNodes].filter((t) => t.nodeType !== 8).length === 0;
}
function hi(e, t) {
  return (
    ie(e, hi, this),
    t !== null && ie(t, hi, this),
    {
      pass: e.contains(t),
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toContainElement`, "element", "element"),
          "",
          this.utils.RECEIVED_COLOR(`${this.utils.stringify(e.cloneNode(!1))} ${
            this.isNot ? "contains:" : "does not contain:"
          } ${this.utils.stringify(t && t.cloneNode(!1))}
        `),
        ].join(`
`),
    }
  );
}
function sO(e, t) {
  let r = e.ownerDocument.createElement("div");
  return (r.innerHTML = t), r.innerHTML;
}
function Im(e, t) {
  if ((ie(e, Im, this), typeof t != "string")) throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(sO(e, t)),
    message: () =>
      [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toContainHTML`, "element", ""),
        "Expected:",
        `  ${this.utils.EXPECTED_COLOR(t)}`,
        "Received:",
        `  ${this.utils.printReceived(e.cloneNode(!0))}`,
      ].join(`
`),
  };
}
function Bm(e, t, r = { normalizeWhitespace: !0 }) {
  QP(e, Bm, this);
  let n = r.normalizeWhitespace ? Ao(e.textContent) : e.textContent.replace(/\u00a0/g, " "),
    o = n !== "" && t === "";
  return {
    pass: !o && tO(n, t),
    message: () => {
      let a = this.isNot ? "not to" : "to";
      return Se(
        this,
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveTextContent`, "element", ""),
        o ? "Checking with empty string will always match, use .toBeEmptyDOMElement() instead" : `Expected element ${a} have text content`,
        t,
        "Received",
        n
      );
    },
  };
}
function bi(e, t) {
  ie(e, bi, this);
  let r = WP(e),
    n = arguments.length === 1,
    o = !1;
  return (
    n ? (o = r !== "") : (o = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: o,
      message: () => {
        let a = this.isNot ? "not to" : "to";
        return Se(
          this,
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.${bi.name}`, "element", ""),
          `Expected element ${a} have accessible description`,
          t,
          "Received",
          r
        );
      },
    }
  );
}
var Nr = "aria-invalid",
  uO = ["false"];
function km(e, t) {
  var l;
  ie(e, km, this);
  let r = this.isNot ? "not to" : "to",
    n = this.isNot ? ".not.toHaveAccessibleErrorMessage" : ".toHaveAccessibleErrorMessage",
    o = e.getAttribute("aria-errormessage");
  if (o && /\s+/.test(o))
    return {
      pass: !1,
      message: () =>
        Se(
          this,
          this.utils.matcherHint(n, "element"),
          "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
          "",
          "Received",
          `aria-errormessage="${o}"`
        ),
    };
  let a = e.getAttribute(Nr);
  if (!e.hasAttribute(Nr) || uO.includes(a))
    return {
      pass: !1,
      message: () =>
        Se(
          this,
          this.utils.matcherHint(n, "element"),
          "Expected element to be marked as invalid with attribute",
          `${Nr}="${String(!0)}"`,
          "Received",
          e.hasAttribute("aria-invalid") ? `${Nr}="${e.getAttribute(Nr)}` : null
        ),
    };
  let i = Ao(((l = e.ownerDocument.getElementById(o)) == null ? void 0 : l.textContent) ?? "");
  return {
    pass: t === void 0 ? !!i : t instanceof RegExp ? t.test(i) : this.equals(i, t),
    message: () =>
      Se(this, this.utils.matcherHint(n, "element"), `Expected element ${r} have accessible error message`, t ?? "", "Received", i),
  };
}
var cO = mO(Jl.elementRoles);
function yi(e, t) {
  ie(e, yi, this);
  let r = dO(e);
  return {
    pass: r.some((n) => n === t),
    message: () => {
      let n = this.isNot ? "not to" : "to";
      return Se(
        this,
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.${yi.name}`, "element", ""),
        `Expected element ${n} have role`,
        t,
        "Received",
        r.join(", ")
      );
    },
  };
}
function dO(e) {
  return e.hasAttribute("role") ? e.getAttribute("role").split(" ").filter(Boolean) : pO(e);
}
function pO(e) {
  for (let { match: t, roles: r } of cO) if (t(e)) return [...r];
  return [];
}
function mO(e) {
  function t({ name: i, attributes: l }) {
    return `${i}${l
      .map(({ name: u, value: c, constraints: s = [] }) =>
        s.indexOf("undefined") !== -1 ? `:not([${u}])` : c ? `[${u}="${c}"]` : `[${u}]`
      )
      .join("")}`;
  }
  function r({ attributes: i = [] }) {
    return i.length;
  }
  function n({ specificity: i }, { specificity: l }) {
    return l - i;
  }
  function o(i) {
    let { attributes: l = [] } = i,
      u = l.findIndex((s) => s.value && s.name === "type" && s.value === "text");
    u >= 0 && (l = [...l.slice(0, u), ...l.slice(u + 1)]);
    let c = t({ ...i, attributes: l });
    return (s) => (u >= 0 && s.type !== "text" ? !1 : s.matches(c));
  }
  let a = [];
  for (let [i, l] of e.entries()) a = [...a, { match: o(i), roles: Array.from(l), specificity: r(i) }];
  return a.sort(n);
}
function gi(e, t) {
  ie(e, gi, this);
  let r = YP(e),
    n = arguments.length === 1,
    o = !1;
  return (
    n ? (o = r !== "") : (o = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: o,
      message: () => {
        let a = this.isNot ? "not to" : "to";
        return Se(
          this,
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.${gi.name}`, "element", ""),
          `Expected element ${a} have accessible name`,
          t,
          "Received",
          r
        );
      },
    }
  );
}
function ku(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function fO(e, t, r) {
  return r === void 0 ? `element.hasAttribute(${e(t)})` : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function Lm(e, t, r) {
  ie(e, Lm, this);
  let n = r !== void 0,
    o = e.hasAttribute(t),
    a = e.getAttribute(t);
  return {
    pass: n ? o && this.equals(a, r) : o,
    message: () => {
      let i = this.isNot ? "not to" : "to",
        l = o ? ku(this.utils.stringify, t, a) : null,
        u = this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveAttribute`, "element", this.utils.printExpected(t), {
          secondArgument: n ? this.utils.printExpected(r) : void 0,
          comment: fO(this.utils.stringify, t, r),
        });
      return Se(this, u, `Expected the element ${i} have attribute`, ku(this.utils.stringify, t, r), "Received", l);
    },
  };
}
function hO(e) {
  let t = e.pop(),
    r,
    n;
  return (
    typeof t == "object" && !(t instanceof RegExp) ? ((r = e), (n = t)) : ((r = e.concat(t)), (n = { exact: !1 })),
    { expectedClassNames: r, options: n }
  );
}
function Lu(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function Du(e, t) {
  return e.every((r) => (typeof r == "string" ? t.includes(r) : t.some((n) => r.test(n))));
}
function Dm(e, ...t) {
  ie(e, Dm, this);
  let { expectedClassNames: r, options: n } = hO(t),
    o = Lu(e.getAttribute("class")),
    a = r.reduce((l, u) => l.concat(typeof u == "string" || !u ? Lu(u) : u), []),
    i = a.some((l) => l instanceof RegExp);
  if (n.exact && i) throw new Error("Exact option does not support RegExp expected class names");
  return n.exact
    ? {
        pass: Du(a, o) && a.length === o.length,
        message: () => {
          let l = this.isNot ? "not to" : "to";
          return Se(
            this,
            this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveClass`, "element", this.utils.printExpected(a.join(" "))),
            `Expected the element ${l} have EXACTLY defined classes`,
            a.join(" "),
            "Received",
            o.join(" ")
          );
        },
      }
    : a.length > 0
    ? {
        pass: Du(a, o),
        message: () => {
          let l = this.isNot ? "not to" : "to";
          return Se(
            this,
            this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveClass`, "element", this.utils.printExpected(a.join(" "))),
            `Expected the element ${l} have class`,
            a.join(" "),
            "Received",
            o.join(" ")
          );
        },
      }
    : {
        pass: this.isNot ? o.length > 0 : !1,
        message: () =>
          this.isNot
            ? Se(
                this,
                this.utils.matcherHint(".not.toHaveClass", "element", ""),
                "Expected the element to have classes",
                "(none)",
                "Received",
                o.join(" ")
              )
            : [this.utils.matcherHint(".toHaveClass", "element"), "At least one expected class must be provided."].join(`
`),
      };
}
function bO(e, t) {
  let r = {},
    n = e.createElement("div");
  return (
    Object.keys(t).forEach((o) => {
      (n.style[o] = t[o]), (r[o] = n.style[o]);
    }),
    r
  );
}
function yO(e, t) {
  return (
    !!Object.keys(e).length &&
    Object.entries(e).every(([r, n]) => {
      let o = r.startsWith("--"),
        a = [r];
      return o || a.push(r.toLowerCase()), a.some((i) => t[i] === n || t.getPropertyValue(i) === n);
    })
  );
}
function Fu(e) {
  return Object.keys(e)
    .sort()
    .map((t) => `${t}: ${e[t]};`).join(`
`);
}
function gO(e, t, r) {
  let n = Array.from(r)
    .filter((o) => t[o] !== void 0)
    .reduce((o, a) => Object.assign(o, { [a]: r.getPropertyValue(a) }), {});
  return e(Fu(t), Fu(n)).replace(
    `${JP.default.red("+ Received")}
`,
    ""
  );
}
function vi(e, t) {
  ie(e, vi, this);
  let r = typeof t == "object" ? t : eO(t, vi, this),
    { getComputedStyle: n } = e.ownerDocument.defaultView,
    o = bO(e.ownerDocument, r),
    a = n(e);
  return {
    pass: yO(o, a),
    message: () => {
      let i = `${this.isNot ? ".not" : ""}.toHaveStyle`;
      return [this.utils.matcherHint(i, "element", ""), gO(this.utils.diff, o, a)].join(`

`);
    },
  };
}
function Fm(e) {
  return (
    ie(e, Fm, this),
    {
      pass: e.ownerDocument.activeElement === e,
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveFocus`, "element", ""),
          "",
          ...(this.isNot
            ? ["Received element is focused:", `  ${this.utils.printReceived(e)}`]
            : [
                "Expected element with focus:",
                `  ${this.utils.printExpected(e)}`,
                "Received element with focus:",
                `  ${this.utils.printReceived(e.ownerDocument.activeElement)}`,
              ]),
        ].join(`
`),
    }
  );
}
function vO(e) {
  let t = [...new Set(e.map((r) => r.type))];
  if (t.length !== 1) throw new Error("Multiple form elements with the same name must be of the same type");
  switch (t[0]) {
    case "radio": {
      let r = e.find((n) => n.checked);
      return r ? r.value : void 0;
    }
    case "checkbox":
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function _O(e, t) {
  let r = [...e.querySelectorAll(`[name="${(0, XP.default)(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return Mm(r[0]);
      default:
        return vO(r);
    }
}
function RO(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function wO(e) {
  return Array.from(e.elements)
    .map((t) => t.name)
    .reduce((t, r) => ({ ...t, [RO(r)]: _O(e, r) }), {});
}
function Hm(e, t) {
  if ((ie(e, Hm, this), !e.elements)) throw new Error("toHaveFormValues must be called on a form or a fieldset");
  let r = wO(e);
  return {
    pass: Object.entries(t).every(([n, o]) => (0, Tm.default)(r[n], o, xm)),
    message: () => {
      let n = this.isNot ? "not to" : "to",
        o = `${this.isNot ? ".not" : ""}.toHaveFormValues`,
        a = Object.keys(r)
          .filter((i) => t.hasOwnProperty(i))
          .reduce((i, l) => ({ ...i, [l]: r[l] }), {});
      return [this.utils.matcherHint(o, "element", ""), `Expected the element ${n} have form values`, this.utils.diff(t, a)].join(`

`);
    },
  };
}
function CO(e) {
  let { getComputedStyle: t } = e.ownerDocument.defaultView,
    { display: r, visibility: n, opacity: o } = t(e);
  return r !== "none" && n !== "hidden" && n !== "collapse" && o !== "0" && o !== 0;
}
function qO(e, t) {
  let r;
  return (
    t
      ? (r = e.nodeName === "DETAILS" && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0)
      : (r = e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0),
    !e.hasAttribute("hidden") && r
  );
}
function Um(e, t) {
  return CO(e) && qO(e, t) && (!e.parentElement || Um(e.parentElement, e));
}
function Vm(e) {
  ie(e, Vm, this);
  let t = e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = t && Um(e);
  return {
    pass: r,
    message: () => {
      let n = r ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeVisible`, "element", ""),
        "",
        `Received element ${n} visible${t ? "" : " (element is not in the document)"}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var EO = ["fieldset", "input", "select", "optgroup", "option", "button", "textarea"];
function PO(e, t) {
  return xt(e) === "legend" && xt(t) === "fieldset" && e.isSameNode(Array.from(t.children).find((r) => xt(r) === "legend"));
}
function OO(e, t) {
  return Gm(t) && !PO(e, t);
}
function TO(e) {
  return e.includes("-");
}
function zm(e) {
  let t = xt(e);
  return EO.includes(t) || TO(t);
}
function Gm(e) {
  return zm(e) && e.hasAttribute("disabled");
}
function Wm(e) {
  let t = e.parentElement;
  return !!t && (OO(e, t) || Wm(t));
}
function Km(e) {
  return zm(e) && (Gm(e) || Wm(e));
}
function Ym(e) {
  ie(e, Ym, this);
  let t = Km(e);
  return {
    pass: t,
    message: () => {
      let r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeDisabled`, "element", ""),
        "",
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Jm(e) {
  ie(e, Jm, this);
  let t = !Km(e);
  return {
    pass: t,
    message: () => {
      let r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeEnabled`, "element", ""),
        "",
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var SO = ["select", "textarea"],
  AO = ["input", "select", "textarea"],
  MO = ["color", "hidden", "range", "submit", "image", "reset"],
  xO = ["checkbox", "combobox", "gridcell", "listbox", "radiogroup", "spinbutton", "textbox", "tree"];
function jO(e) {
  return SO.includes(xt(e)) && e.hasAttribute("required");
}
function NO(e) {
  return (
    xt(e) === "input" &&
    e.hasAttribute("required") &&
    ((e.hasAttribute("type") && !MO.includes(e.getAttribute("type"))) || !e.hasAttribute("type"))
  );
}
function $O(e) {
  return (
    e.hasAttribute("aria-required") &&
    e.getAttribute("aria-required") === "true" &&
    (AO.includes(xt(e)) || (e.hasAttribute("role") && xO.includes(e.getAttribute("role"))))
  );
}
function Xm(e) {
  ie(e, Xm, this);
  let t = jO(e) || NO(e) || $O(e);
  return {
    pass: t,
    message: () => {
      let r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeRequired`, "element", ""),
        "",
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var IO = ["form", "input", "select", "textarea"];
function BO(e) {
  return e.hasAttribute("aria-invalid") && e.getAttribute("aria-invalid") !== "false";
}
function kO(e) {
  return IO.includes(xt(e));
}
function Qm(e) {
  let t = BO(e);
  return kO(e) ? t || !e.checkValidity() : t;
}
function Zm(e) {
  ie(e, Zm, this);
  let t = Qm(e);
  return {
    pass: t,
    message: () => {
      let r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeInvalid`, "element", ""),
        "",
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function ef(e) {
  ie(e, ef, this);
  let t = !Qm(e);
  return {
    pass: t,
    message: () => {
      let r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeValid`, "element", ""),
        "",
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function tf(e, t) {
  if ((ie(e, tf, this), e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type)))
    throw new Error(
      "input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead"
    );
  let r = Mm(e),
    n = t !== void 0,
    o = t,
    a = r;
  return (
    t == r && t !== r && ((o = `${t} (${typeof t})`), (a = `${r} (${typeof r})`)),
    {
      pass: n ? (0, Tm.default)(r, t, xm) : !!r,
      message: () => {
        let i = this.isNot ? "not to" : "to",
          l = this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveValue`, "element", t);
        return Se(this, l, `Expected the element ${i} have value`, n ? o : "(any)", "Received", a);
      },
    }
  );
}
function rf(e, t) {
  ie(e, rf, this);
  let r = e.tagName.toLowerCase();
  if (!["select", "input", "textarea"].includes(r))
    throw new Error(".toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead.");
  if (r === "input" && ["radio", "checkbox"].includes(e.type))
    throw new Error(`.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`);
  let n = LO(r, e),
    o = DO(t),
    a = o.filter((u) => n.some((c) => (u instanceof RegExp ? u.test(c) : this.equals(c, String(u))))).length,
    i = a === n.length,
    l = a === o.length;
  return {
    pass: i && l,
    message: () =>
      Se(
        this,
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveDisplayValue`, "element", ""),
        `Expected element ${this.isNot ? "not " : ""}to have display value`,
        t,
        "Received",
        n
      ),
  };
}
function LO(e, t) {
  return e === "select"
    ? Array.from(t)
        .filter((r) => r.selected)
        .map((r) => r.textContent)
    : [t.value];
}
function DO(e) {
  return e instanceof Array ? e : [e];
}
function nf(e) {
  ie(e, nf, this);
  let t = () => e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type),
    r = () => of(e.getAttribute("role")) && ["true", "false"].includes(e.getAttribute("aria-checked"));
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        `only inputs with type="checkbox" or type="radio" or elements with ${FO()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`,
    };
  let n = () => (t() ? e.checked : e.getAttribute("aria-checked") === "true");
  return {
    pass: n(),
    message: () => {
      let o = n() ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBeChecked`, "element", ""),
        "",
        `Received element ${o} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function FO() {
  return iO(
    HO().map((e) => `role="${e}"`),
    { lastWordConnector: " or " }
  );
}
function HO() {
  return Jl.roles.keys().filter(of);
}
function of(e) {
  var t;
  return ((t = Jl.roles.get(e)) == null ? void 0 : t.props["aria-checked"]) !== void 0;
}
function af(e) {
  ie(e, af, this);
  let t = () => e.tagName.toLowerCase() === "input" && e.type === "checkbox",
    r = () => e.getAttribute("role") === "checkbox";
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead',
    };
  let n = () => {
    let o = e.getAttribute("aria-checked") === "mixed";
    return (t() && e.indeterminate) || o;
  };
  return {
    pass: n(),
    message: () => {
      let o = n() ? "is" : "is not";
      return [
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toBePartiallyChecked`, "element", ""),
        "",
        `Received element ${o} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function lf(e, t) {
  So("toHaveDescription", "Please use toHaveAccessibleDescription."), ie(e, lf, this);
  let r = t !== void 0,
    n = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean),
    o = "";
  if (n.length > 0) {
    let a = e.ownerDocument,
      i = n.map((l) => a.getElementById(l)).filter(Boolean);
    o = Ao(i.map((l) => l.textContent).join(" "));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(o) : this.equals(o, t)) : !!o,
    message: () => {
      let a = this.isNot ? "not to" : "to";
      return Se(
        this,
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveDescription`, "element", ""),
        `Expected the element ${a} have description`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(o)
      );
    },
  };
}
function sf(e, t) {
  if (
    (So("toHaveErrorMessage", "Please use toHaveAccessibleErrorMessage."),
    ie(e, sf, this),
    !e.hasAttribute("aria-invalid") || e.getAttribute("aria-invalid") === "false")
  ) {
    let a = this.isNot ? ".not" : "";
    return {
      pass: !1,
      message: () =>
        Se(
          this,
          this.utils.matcherHint(`${a}.toHaveErrorMessage`, "element", ""),
          "Expected the element to have invalid state indicated by",
          'aria-invalid="true"',
          "Received",
          e.hasAttribute("aria-invalid") ? `aria-invalid="${e.getAttribute("aria-invalid")}"` : this.utils.printReceived("")
        ),
    };
  }
  let r = t !== void 0,
    n = (e.getAttribute("aria-errormessage") || "").split(/\s+/).filter(Boolean),
    o = "";
  if (n.length > 0) {
    let a = e.ownerDocument,
      i = n.map((l) => a.getElementById(l)).filter(Boolean);
    o = Ao(i.map((l) => l.textContent).join(" "));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(o) : this.equals(o, t)) : !!o,
    message: () => {
      let a = this.isNot ? "not to" : "to";
      return Se(
        this,
        this.utils.matcherHint(`${this.isNot ? ".not" : ""}.toHaveErrorMessage`, "element", ""),
        `Expected the element ${a} have error message`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(o)
      );
    },
  };
}
De(cp(), 1);
De(dp(), 1);
De(mp(), 1);
De(qp(), 1);
De(Ep(), 1);
function dt(e, t, r) {
  let n = typeof e;
  if (!r.includes(n)) throw new TypeError(`${t} value must be ${r.join(" or ")}, received "${n}"`);
}
function Nn(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function UO(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function _i(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function VO(e, t) {
  let r = typeof t == "function" ? t : (n) => t.add(n);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function uf(e) {
  let t = new Set();
  return UO(e) ? [] : (VO(e, t), Array.from(t));
}
var cf = { forceWritable: !1 };
function Hu(e, t = cf) {
  return Ri(e, new WeakMap(), t);
}
function Ri(e, t, r = cf) {
  let n, o;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (o = Array((n = e.length)), t.set(e, o); n--; ) o[n] = Ri(e[n], t, r);
    return o;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    (o = Object.create(Object.getPrototypeOf(e))), t.set(e, o);
    let a = uf(e);
    for (let i of a) {
      let l = Object.getOwnPropertyDescriptor(e, i);
      if (!l) continue;
      let u = Ri(e[i], t, r);
      r.forceWritable
        ? Object.defineProperty(o, i, { enumerable: l.enumerable, configurable: !0, writable: !0, value: u })
        : "get" in l
        ? Object.defineProperty(o, i, {
            ...l,
            get() {
              return u;
            },
          })
        : Object.defineProperty(o, i, { ...l, value: u });
    }
    return o;
  }
  return e;
}
var Uu = {
    bold: ["1", "22"],
    dim: ["2", "22"],
    italic: ["3", "23"],
    underline: ["4", "24"],
    inverse: ["7", "27"],
    hidden: ["8", "28"],
    strike: ["9", "29"],
    black: ["30", "39"],
    red: ["31", "39"],
    green: ["32", "39"],
    yellow: ["33", "39"],
    blue: ["34", "39"],
    magenta: ["35", "39"],
    cyan: ["36", "39"],
    white: ["37", "39"],
    brightblack: ["30;1", "39"],
    brightred: ["31;1", "39"],
    brightgreen: ["32;1", "39"],
    brightyellow: ["33;1", "39"],
    brightblue: ["34;1", "39"],
    brightmagenta: ["35;1", "39"],
    brightcyan: ["36;1", "39"],
    brightwhite: ["37;1", "39"],
    grey: ["90", "39"],
  },
  zO = {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red",
  },
  gr = "…";
function GO(e, t) {
  let r = Uu[zO[t]] || Uu[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
function WO(
  {
    showHidden: e = !1,
    depth: t = 2,
    colors: r = !1,
    customInspect: n = !0,
    showProxy: o = !1,
    maxArrayLength: a = 1 / 0,
    breakLength: i = 1 / 0,
    seen: l = [],
    truncate: u = 1 / 0,
    stylize: c = String,
  } = {},
  s
) {
  let d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!o,
    maxArrayLength: Number(a),
    breakLength: Number(i),
    truncate: Number(u),
    seen: l,
    inspect: s,
    stylize: c,
  };
  return d.colors && (d.stylize = GO), d;
}
function KO(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
function Bt(e, t, r = gr) {
  e = String(e);
  let n = r.length,
    o = e.length;
  if (n > t && o > n) return r;
  if (o > t && o > n) {
    let a = t - n;
    return a > 0 && KO(e[a - 1]) && (a = a - 1), `${e.slice(0, a)}${r}`;
  }
  return e;
}
function et(e, t, r, n = ", ") {
  r = r || t.inspect;
  let o = e.length;
  if (o === 0) return "";
  let a = t.truncate,
    i = "",
    l = "",
    u = "";
  for (let c = 0; c < o; c += 1) {
    let s = c + 1 === e.length,
      d = c + 2 === e.length;
    u = `${gr}(${e.length - c})`;
    let m = e[c];
    t.truncate = a - i.length - (s ? 0 : n.length);
    let p = l || r(m, t) + (s ? "" : n),
      f = i.length + p.length,
      b = f + u.length;
    if (
      (s && f > a && i.length + u.length <= a) ||
      (!s && !d && b > a) ||
      ((l = s ? "" : r(e[c + 1], t) + (d ? "" : n)), !s && d && b > a && f + l.length > a)
    )
      break;
    if (((i += p), !s && !d && f + l.length >= a)) {
      u = `${gr}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${i}${u}`;
}
function YO(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
    ? e
    : JSON.stringify(e)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
function Jr([e, t], r) {
  return (
    (r.truncate -= 2),
    typeof e == "string" ? (e = YO(e)) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`),
    (r.truncate -= e.length),
    (t = r.inspect(t, r)),
    `${e}: ${t}`
  );
}
function JO(e, t) {
  let r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length) return "[]";
  t.truncate -= 4;
  let n = et(e, t);
  t.truncate -= n.length;
  let o = "";
  return (
    r.length &&
      (o = et(
        r.map((a) => [a, e[a]]),
        t,
        Jr
      )),
    `[ ${n}${o ? `, ${o}` : ""} ]`
  );
}
var XO = (e) =>
  typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name;
function pt(e, t) {
  let r = XO(e);
  t.truncate -= r.length + 4;
  let n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length) return `${r}[]`;
  let o = "";
  for (let i = 0; i < e.length; i++) {
    let l = `${t.stylize(Bt(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
    if (((t.truncate -= l.length), e[i] !== e.length && t.truncate <= 3)) {
      o += `${gr}(${e.length - e[i] + 1})`;
      break;
    }
    o += l;
  }
  let a = "";
  return (
    n.length &&
      (a = et(
        n.map((i) => [i, e[i]]),
        t,
        Jr
      )),
    `${r}[ ${o}${a ? `, ${a}` : ""} ]`
  );
}
function QO(e, t) {
  let r = e.toJSON();
  if (r === null) return "Invalid Date";
  let n = r.split("T"),
    o = n[0];
  return t.stylize(`${o}T${Bt(n[1], t.truncate - o.length - 1)}`, "date");
}
function Vu(e, t) {
  let r = e[Symbol.toStringTag] || "Function",
    n = e.name;
  return n ? t.stylize(`[${r} ${Bt(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
function ZO([e, t], r) {
  return (r.truncate -= 4), (e = r.inspect(e, r)), (r.truncate -= e.length), (t = r.inspect(t, r)), `${e} => ${t}`;
}
function eT(e) {
  let t = [];
  return (
    e.forEach((r, n) => {
      t.push([n, r]);
    }),
    t
  );
}
function tT(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : ((t.truncate -= 7), `Map{ ${et(eT(e), t, ZO)} }`);
}
var rT = Number.isNaN || ((e) => e !== e);
function zu(e, t) {
  return rT(e)
    ? t.stylize("NaN", "number")
    : e === 1 / 0
    ? t.stylize("Infinity", "number")
    : e === -1 / 0
    ? t.stylize("-Infinity", "number")
    : e === 0
    ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number")
    : t.stylize(Bt(String(e), t.truncate), "number");
}
function Gu(e, t) {
  let r = Bt(e.toString(), t.truncate - 1);
  return r !== gr && (r += "n"), t.stylize(r, "bigint");
}
function nT(e, t) {
  let r = e.toString().split("/")[2],
    n = t.truncate - (2 + r.length),
    o = e.source;
  return t.stylize(`/${Bt(o, n)}/${r}`, "regexp");
}
function oT(e) {
  let t = [];
  return (
    e.forEach((r) => {
      t.push(r);
    }),
    t
  );
}
function aT(e, t) {
  return e.size === 0 ? "Set{}" : ((t.truncate -= 7), `Set{ ${et(oT(e), t)} }`);
}
var Wu = new RegExp(
    "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
    "g"
  ),
  iT = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "'": "\\'", "\\": "\\\\" },
  lT = 16,
  sT = 4;
function uT(e) {
  return iT[e] || `\\u${`0000${e.charCodeAt(0).toString(lT)}`.slice(-sT)}`;
}
function Ku(e, t) {
  return Wu.test(e) && (e = e.replace(Wu, uT)), t.stylize(`'${Bt(e, t.truncate - 2)}'`, "string");
}
function Yu(e) {
  return "description" in Symbol.prototype ? (e.description ? `Symbol(${e.description})` : "Symbol()") : e.toString();
}
var df = () => "Promise{…}";
try {
  let { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) &&
    (df = (n, o) => {
      let [a, i] = e(n);
      return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${o.inspect(i, o)}}`;
    });
} catch {}
var cT = df;
function $n(e, t) {
  let r = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0) return "{}";
  if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.indexOf(e) >= 0)) return "[Circular]";
  t.seen.push(e);
  let o = et(
      r.map((l) => [l, e[l]]),
      t,
      Jr
    ),
    a = et(
      n.map((l) => [l, e[l]]),
      t,
      Jr
    );
  t.seen.pop();
  let i = "";
  return o && a && (i = ", "), `{ ${o}${i}${a} }`;
}
var Ta = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function dT(e, t) {
  let r = "";
  return (
    Ta && Ta in e && (r = e[Ta]),
    (r = r || e.constructor.name),
    (!r || r === "_class") && (r = "<Anonymous Class>"),
    (t.truncate -= r.length),
    `${r}${$n(e, t)}`
  );
}
function pT(e, t) {
  return e.length === 0 ? "Arguments[]" : ((t.truncate -= 13), `Arguments[ ${et(e, t)} ]`);
}
var mT = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
function fT(e, t) {
  let r = Object.getOwnPropertyNames(e).filter((i) => mT.indexOf(i) === -1),
    n = e.name;
  t.truncate -= n.length;
  let o = "";
  typeof e.message == "string" ? (o = Bt(e.message, t.truncate)) : r.unshift("message"),
    (o = o ? `: ${o}` : ""),
    (t.truncate -= o.length + 5);
  let a = et(
    r.map((i) => [i, e[i]]),
    t,
    Jr
  );
  return `${n}${o}${a ? ` { ${a} }` : ""}`;
}
function hT([e, t], r) {
  return (r.truncate -= 3), t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
function wi(e, t) {
  return et(
    e,
    t,
    pf,
    `
`
  );
}
function pf(e, t) {
  let r = e.getAttributeNames(),
    n = e.tagName.toLowerCase(),
    o = t.stylize(`<${n}`, "special"),
    a = t.stylize(">", "special"),
    i = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let l = "";
  r.length > 0 &&
    ((l += " "),
    (l += et(
      r.map((s) => [s, e.getAttribute(s)]),
      t,
      hT,
      " "
    ))),
    (t.truncate -= l.length);
  let u = t.truncate,
    c = wi(e.children, t);
  return c && c.length > u && (c = `${gr}(${e.children.length})`), `${o}${l}${a}${c}${i}`;
}
var bT = typeof Symbol == "function" && typeof Symbol.for == "function",
  Sa = bT ? Symbol.for("chai/inspect") : "@@chai/inspect",
  ir = !1;
try {
  let e = C0("util");
  ir = e.inspect ? e.inspect.custom : !1;
} catch {
  ir = !1;
}
var Ju = new WeakMap(),
  Xu = {},
  Qu = {
    undefined: (e, t) => t.stylize("undefined", "undefined"),
    null: (e, t) => t.stylize("null", "null"),
    boolean: (e, t) => t.stylize(String(e), "boolean"),
    Boolean: (e, t) => t.stylize(String(e), "boolean"),
    number: zu,
    Number: zu,
    bigint: Gu,
    BigInt: Gu,
    string: Ku,
    String: Ku,
    function: Vu,
    Function: Vu,
    symbol: Yu,
    Symbol: Yu,
    Array: JO,
    Date: QO,
    Map: tT,
    Set: aT,
    RegExp: nT,
    Promise: cT,
    WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
    WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
    Arguments: pT,
    Int8Array: pt,
    Uint8Array: pt,
    Uint8ClampedArray: pt,
    Int16Array: pt,
    Uint16Array: pt,
    Int32Array: pt,
    Uint32Array: pt,
    Float32Array: pt,
    Float64Array: pt,
    Generator: () => "",
    DataView: () => "",
    ArrayBuffer: () => "",
    Error: fT,
    HTMLCollection: wi,
    NodeList: wi,
  },
  yT = (e, t, r) =>
    Sa in e && typeof e[Sa] == "function"
      ? e[Sa](t)
      : ir && ir in e && typeof e[ir] == "function"
      ? e[ir](t.depth, t)
      : "inspect" in e && typeof e.inspect == "function"
      ? e.inspect(t.depth, t)
      : "constructor" in e && Ju.has(e.constructor)
      ? Ju.get(e.constructor)(e, t)
      : Xu[r]
      ? Xu[r](e, t)
      : "",
  gT = Object.prototype.toString;
function Ci(e, t = {}) {
  let r = WO(t, Ci),
    { customInspect: n } = r,
    o = e === null ? "null" : typeof e;
  if ((o === "object" && (o = gT.call(e).slice(8, -1)), o in Qu)) return Qu[o](e, r);
  if (n && e) {
    let i = yT(e, r, o);
    if (i) return typeof i == "string" ? i : Ci(i, r);
  }
  let a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null
    ? $n(e, r)
    : e && typeof HTMLElement == "function" && e instanceof HTMLElement
    ? pf(e, r)
    : "constructor" in e
    ? e.constructor !== Object
      ? dT(e, r)
      : $n(e, r)
    : e === Object(e)
    ? $n(e, r)
    : r.stylize(String(e), o);
}
var vT = {
    reset: [0, 0],
    bold: [1, 22, "\x1B[22m\x1B[1m"],
    dim: [2, 22, "\x1B[22m\x1B[2m"],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
  },
  _T = Object.entries(vT);
function Xl(e) {
  return String(e);
}
Xl.open = "";
Xl.close = "";
function RT(e = !1) {
  let t = typeof process < "u" ? process : void 0,
    r = (t == null ? void 0 : t.env) || {},
    n = (t == null ? void 0 : t.argv) || [];
  return (
    (!("NO_COLOR" in r || n.includes("--no-color")) &&
      ("FORCE_COLOR" in r ||
        n.includes("--color") ||
        (t == null ? void 0 : t.platform) === "win32" ||
        (e && r.TERM !== "dumb") ||
        "CI" in r)) ||
    (typeof window < "u" && !!window.chrome)
  );
}
function wT(e = !1) {
  let t = RT(e),
    r = (i, l, u, c) => {
      let s = "",
        d = 0;
      do (s += i.substring(d, c) + u), (d = c + l.length), (c = i.indexOf(l, d));
      while (~c);
      return s + i.substring(d);
    },
    n = (i, l, u = i) => {
      let c = (s) => {
        let d = String(s),
          m = d.indexOf(l, i.length);
        return ~m ? i + r(d, l, u, m) + l : i + d + l;
      };
      return (c.open = i), (c.close = l), c;
    },
    o = { isColorSupported: t },
    a = (i) => `\x1B[${i}m`;
  for (let [i, l] of _T) o[i] = t ? n(a(l[0]), a(l[1]), l[2]) : Xl;
  return o;
}
var be = wT(!1);
function CT(e, t) {
  let r = Object.keys(e),
    n = t === null ? r : r.sort(t);
  if (Object.getOwnPropertySymbols)
    for (let o of Object.getOwnPropertySymbols(e)) Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o);
  return n;
}
function Mo(e, t, r, n, o, a, i = ": ") {
  let l = "",
    u = 0,
    c = e.next();
  if (!c.done) {
    l += t.spacingOuter;
    let s = r + t.indent;
    for (; !c.done; ) {
      if (((l += s), u++ === t.maxWidth)) {
        l += "…";
        break;
      }
      let d = a(c.value[0], t, s, n, o),
        m = a(c.value[1], t, s, n, o);
      (l += d + i + m), (c = e.next()), c.done ? t.min || (l += ",") : (l += `,${t.spacingInner}`);
    }
    l += t.spacingOuter + r;
  }
  return l;
}
function Ql(e, t, r, n, o, a) {
  let i = "",
    l = 0,
    u = e.next();
  if (!u.done) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (; !u.done; ) {
      if (((i += c), l++ === t.maxWidth)) {
        i += "…";
        break;
      }
      (i += a(u.value, t, c, n, o)), (u = e.next()), u.done ? t.min || (i += ",") : (i += `,${t.spacingInner}`);
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Yn(e, t, r, n, o, a) {
  let i = "";
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  let l = (c) => c instanceof DataView,
    u = l(e) ? e.byteLength : e.length;
  if (u > 0) {
    i += t.spacingOuter;
    let c = r + t.indent;
    for (let s = 0; s < u; s++) {
      if (((i += c), s === t.maxWidth)) {
        i += "…";
        break;
      }
      (l(e) || s in e) && (i += a(l(e) ? e.getInt8(s) : e[s], t, c, n, o)), s < u - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Zl(e, t, r, n, o, a) {
  let i = "",
    l = CT(e, t.compareKeys);
  if (l.length > 0) {
    i += t.spacingOuter;
    let u = r + t.indent;
    for (let c = 0; c < l.length; c++) {
      let s = l[c],
        d = a(s, t, u, n, o),
        m = a(e[s], t, u, n, o);
      (i += `${u + d}: ${m}`), c < l.length - 1 ? (i += `,${t.spacingInner}`) : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var qT = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621,
  Aa = " ",
  ET = (e, t, r, n, o, a) => {
    let i = e.toString();
    if (i === "ArrayContaining" || i === "ArrayNotContaining")
      return ++n > t.maxDepth ? `[${i}]` : `${i + Aa}[${Yn(e.sample, t, r, n, o, a)}]`;
    if (i === "ObjectContaining" || i === "ObjectNotContaining")
      return ++n > t.maxDepth ? `[${i}]` : `${i + Aa}{${Zl(e.sample, t, r, n, o, a)}}`;
    if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
      return i + Aa + a(e.sample, t, r, n, o);
    if (typeof e.toAsymmetricMatcher != "function")
      throw new TypeError(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
    return e.toAsymmetricMatcher();
  },
  PT = (e) => e && e.$$typeof === qT,
  OT = { serialize: ET, test: PT },
  TT = " ",
  mf = new Set(["DOMStringMap", "NamedNodeMap"]),
  ST = /^(?:HTML\w*Collection|NodeList)$/;
function AT(e) {
  return mf.has(e) || ST.test(e);
}
var MT = (e) => e && e.constructor && !!e.constructor.name && AT(e.constructor.name);
function xT(e) {
  return e.constructor.name === "NamedNodeMap";
}
var jT = (e, t, r, n, o, a) => {
    let i = e.constructor.name;
    return ++n > t.maxDepth
      ? `[${i}]`
      : (t.min ? "" : i + TT) +
          (mf.has(i)
            ? `{${Zl(xT(e) ? [...e].reduce((l, u) => ((l[u.name] = u.value), l), {}) : { ...e }, t, r, n, o, a)}}`
            : `[${Yn([...e], t, r, n, o, a)}]`);
  },
  NT = { serialize: jT, test: MT };
function ff(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function es(e, t, r, n, o, a, i) {
  let l = n + r.indent,
    u = r.colors;
  return e
    .map((c) => {
      let s = t[c],
        d = i(s, r, l, o, a);
      return (
        typeof s != "string" &&
          (d.includes(`
`) && (d = r.spacingOuter + l + d + r.spacingOuter + n),
          (d = `{${d}}`)),
        `${r.spacingInner + n + u.prop.open + c + u.prop.close}=${u.value.open}${d}${u.value.close}`
      );
    })
    .join("");
}
function ts(e, t, r, n, o, a) {
  return e.map((i) => t.spacingOuter + r + (typeof i == "string" ? hf(i, t) : a(i, t, r, n, o))).join("");
}
function hf(e, t) {
  let r = t.colors.content;
  return r.open + ff(e) + r.close;
}
function $T(e, t) {
  let r = t.colors.comment;
  return `${r.open}<!--${ff(e)}-->${r.close}`;
}
function rs(e, t, r, n, o) {
  let a = n.colors.tag;
  return `${a.open}<${e}${t && a.close + t + n.spacingOuter + o + a.open}${
    r ? `>${a.close}${r}${n.spacingOuter}${o}${a.open}</${e}` : `${t && !n.min ? "" : " "}/`
  }>${a.close}`;
}
function ns(e, t) {
  let r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
}
var IT = 1,
  bf = 3,
  yf = 8,
  gf = 11,
  BT = /^(?:(?:HTML|SVG)\w*)?Element$/;
function kT(e) {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}
function LT(e) {
  let t = e.constructor.name,
    { nodeType: r, tagName: n } = e,
    o = (typeof n == "string" && n.includes("-")) || kT(e);
  return (
    (r === IT && (BT.test(t) || o)) || (r === bf && t === "Text") || (r === yf && t === "Comment") || (r === gf && t === "DocumentFragment")
  );
}
var DT = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && LT(e);
};
function FT(e) {
  return e.nodeType === bf;
}
function HT(e) {
  return e.nodeType === yf;
}
function Ma(e) {
  return e.nodeType === gf;
}
var UT = (e, t, r, n, o, a) => {
    if (FT(e)) return hf(e.data, t);
    if (HT(e)) return $T(e.data, t);
    let i = Ma(e) ? "DocumentFragment" : e.tagName.toLowerCase();
    return ++n > t.maxDepth
      ? ns(i, t)
      : rs(
          i,
          es(
            Ma(e) ? [] : Array.from(e.attributes, (l) => l.name).sort(),
            Ma(e) ? {} : [...e.attributes].reduce((l, u) => ((l[u.name] = u.value), l), {}),
            t,
            r + t.indent,
            n,
            o,
            a
          ),
          ts(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, n, o, a),
          t,
          r
        );
  },
  VT = { serialize: UT, test: DT },
  zT = "@@__IMMUTABLE_ITERABLE__@@",
  GT = "@@__IMMUTABLE_LIST__@@",
  WT = "@@__IMMUTABLE_KEYED__@@",
  KT = "@@__IMMUTABLE_MAP__@@",
  Zu = "@@__IMMUTABLE_ORDERED__@@",
  YT = "@@__IMMUTABLE_RECORD__@@",
  JT = "@@__IMMUTABLE_SEQ__@@",
  XT = "@@__IMMUTABLE_SET__@@",
  QT = "@@__IMMUTABLE_STACK__@@",
  vr = (e) => `Immutable.${e}`,
  xo = (e) => `[${e}]`,
  Xr = " ",
  ec = "…";
function ZT(e, t, r, n, o, a, i) {
  return ++n > t.maxDepth ? xo(vr(i)) : `${vr(i) + Xr}{${Mo(e.entries(), t, r, n, o, a)}}`;
}
function eS(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        let r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
function tS(e, t, r, n, o, a) {
  let i = vr(e._name || "Record");
  return ++n > t.maxDepth ? xo(i) : `${i + Xr}{${Mo(eS(e), t, r, n, o, a)}}`;
}
function rS(e, t, r, n, o, a) {
  let i = vr("Seq");
  return ++n > t.maxDepth
    ? xo(i)
    : e[WT]
    ? `${i + Xr}{${e._iter || e._object ? Mo(e.entries(), t, r, n, o, a) : ec}}`
    : `${i + Xr}[${e._iter || e._array || e._collection || e._iterable ? Ql(e.values(), t, r, n, o, a) : ec}]`;
}
function xa(e, t, r, n, o, a, i) {
  return ++n > t.maxDepth ? xo(vr(i)) : `${vr(i) + Xr}[${Ql(e.values(), t, r, n, o, a)}]`;
}
var nS = (e, t, r, n, o, a) =>
    e[KT]
      ? ZT(e, t, r, n, o, a, e[Zu] ? "OrderedMap" : "Map")
      : e[GT]
      ? xa(e, t, r, n, o, a, "List")
      : e[XT]
      ? xa(e, t, r, n, o, a, e[Zu] ? "OrderedSet" : "Set")
      : e[QT]
      ? xa(e, t, r, n, o, a, "Stack")
      : e[JT]
      ? rS(e, t, r, n, o, a)
      : tS(e, t, r, n, o, a),
  oS = (e) => e && (e[zT] === !0 || e[YT] === !0),
  aS = { serialize: nS, test: oS },
  vf = { exports: {} },
  ne = {},
  tc;
function iS() {
  if (tc) return ne;
  tc = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    i = Symbol.for("react.context"),
    l = Symbol.for("react.server_context"),
    u = Symbol.for("react.forward_ref"),
    c = Symbol.for("react.suspense"),
    s = Symbol.for("react.suspense_list"),
    d = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    p = Symbol.for("react.offscreen"),
    f;
  f = Symbol.for("react.module.reference");
  function b(h) {
    if (typeof h == "object" && h !== null) {
      var y = h.$$typeof;
      switch (y) {
        case e:
          switch (((h = h.type), h)) {
            case r:
            case o:
            case n:
            case c:
            case s:
              return h;
            default:
              switch (((h = h && h.$$typeof), h)) {
                case l:
                case i:
                case u:
                case m:
                case d:
                case a:
                  return h;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return (
    (ne.ContextConsumer = i),
    (ne.ContextProvider = a),
    (ne.Element = e),
    (ne.ForwardRef = u),
    (ne.Fragment = r),
    (ne.Lazy = m),
    (ne.Memo = d),
    (ne.Portal = t),
    (ne.Profiler = o),
    (ne.StrictMode = n),
    (ne.Suspense = c),
    (ne.SuspenseList = s),
    (ne.isAsyncMode = function () {
      return !1;
    }),
    (ne.isConcurrentMode = function () {
      return !1;
    }),
    (ne.isContextConsumer = function (h) {
      return b(h) === i;
    }),
    (ne.isContextProvider = function (h) {
      return b(h) === a;
    }),
    (ne.isElement = function (h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }),
    (ne.isForwardRef = function (h) {
      return b(h) === u;
    }),
    (ne.isFragment = function (h) {
      return b(h) === r;
    }),
    (ne.isLazy = function (h) {
      return b(h) === m;
    }),
    (ne.isMemo = function (h) {
      return b(h) === d;
    }),
    (ne.isPortal = function (h) {
      return b(h) === t;
    }),
    (ne.isProfiler = function (h) {
      return b(h) === o;
    }),
    (ne.isStrictMode = function (h) {
      return b(h) === n;
    }),
    (ne.isSuspense = function (h) {
      return b(h) === c;
    }),
    (ne.isSuspenseList = function (h) {
      return b(h) === s;
    }),
    (ne.isValidElementType = function (h) {
      return (
        typeof h == "string" ||
        typeof h == "function" ||
        h === r ||
        h === o ||
        h === n ||
        h === c ||
        h === s ||
        h === p ||
        (typeof h == "object" &&
          h !== null &&
          (h.$$typeof === m ||
            h.$$typeof === d ||
            h.$$typeof === a ||
            h.$$typeof === i ||
            h.$$typeof === u ||
            h.$$typeof === f ||
            h.getModuleId !== void 0))
      );
    }),
    (ne.typeOf = b),
    ne
  );
}
vf.exports = iS();
var Ft = vf.exports;
function _f(e, t = []) {
  if (Array.isArray(e)) for (let r of e) _f(r, t);
  else e != null && e !== !1 && e !== "" && t.push(e);
  return t;
}
function rc(e) {
  let t = e.type;
  if (typeof t == "string") return t;
  if (typeof t == "function") return t.displayName || t.name || "Unknown";
  if (Ft.isFragment(e)) return "React.Fragment";
  if (Ft.isSuspense(e)) return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Ft.isContextProvider(e)) return "Context.Provider";
    if (Ft.isContextConsumer(e)) return "Context.Consumer";
    if (Ft.isForwardRef(e)) {
      if (t.displayName) return t.displayName;
      let r = t.render.displayName || t.render.name || "";
      return r === "" ? "ForwardRef" : `ForwardRef(${r})`;
    }
    if (Ft.isMemo(e)) {
      let r = t.displayName || t.type.displayName || t.type.name || "";
      return r === "" ? "Memo" : `Memo(${r})`;
    }
  }
  return "UNDEFINED";
}
function lS(e) {
  let { props: t } = e;
  return Object.keys(t)
    .filter((r) => r !== "children" && t[r] !== void 0)
    .sort();
}
var sS = (e, t, r, n, o, a) =>
    ++n > t.maxDepth
      ? ns(rc(e), t)
      : rs(rc(e), es(lS(e), e.props, t, r + t.indent, n, o, a), ts(_f(e.props.children), t, r + t.indent, n, o, a), t, r),
  uS = (e) => e != null && Ft.isElement(e),
  cS = { serialize: sS, test: uS },
  dS = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function pS(e) {
  let { props: t } = e;
  return t
    ? Object.keys(t)
        .filter((r) => t[r] !== void 0)
        .sort()
    : [];
}
var mS = (e, t, r, n, o, a) =>
    ++n > t.maxDepth
      ? ns(e.type, t)
      : rs(
          e.type,
          e.props ? es(pS(e), e.props, t, r + t.indent, n, o, a) : "",
          e.children ? ts(e.children, t, r + t.indent, n, o, a) : "",
          t,
          r
        ),
  fS = (e) => e && e.$$typeof === dS,
  hS = { serialize: mS, test: fS },
  Rf = Object.prototype.toString,
  bS = Date.prototype.toISOString,
  yS = Error.prototype.toString,
  nc = RegExp.prototype.toString;
function ja(e) {
  return (typeof e.constructor == "function" && e.constructor.name) || "Object";
}
function gS(e) {
  return typeof window < "u" && e === window;
}
var vS = /^Symbol\((.*)\)(.*)$/,
  _S = /\n/g,
  wf = class extends Error {
    constructor(e, t) {
      super(e), (this.stack = t), (this.name = this.constructor.name);
    }
  };
function RS(e) {
  return (
    e === "[object Array]" ||
    e === "[object ArrayBuffer]" ||
    e === "[object DataView]" ||
    e === "[object Float32Array]" ||
    e === "[object Float64Array]" ||
    e === "[object Int8Array]" ||
    e === "[object Int16Array]" ||
    e === "[object Int32Array]" ||
    e === "[object Uint8Array]" ||
    e === "[object Uint8ClampedArray]" ||
    e === "[object Uint16Array]" ||
    e === "[object Uint32Array]"
  );
}
function wS(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function CS(e) {
  return `${e}n`;
}
function oc(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function ac(e) {
  return String(e).replace(vS, "Symbol($1)");
}
function ic(e) {
  return `[${yS.call(e)}]`;
}
function Cf(e, t, r, n) {
  if (e === !0 || e === !1) return `${e}`;
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  let o = typeof e;
  if (o === "number") return wS(e);
  if (o === "bigint") return CS(e);
  if (o === "string") return n ? `"${e.replaceAll(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (o === "function") return oc(e, t);
  if (o === "symbol") return ac(e);
  let a = Rf.call(e);
  return a === "[object WeakMap]"
    ? "WeakMap {}"
    : a === "[object WeakSet]"
    ? "WeakSet {}"
    : a === "[object Function]" || a === "[object GeneratorFunction]"
    ? oc(e, t)
    : a === "[object Symbol]"
    ? ac(e)
    : a === "[object Date]"
    ? Number.isNaN(+e)
      ? "Date { NaN }"
      : bS.call(e)
    : a === "[object Error]"
    ? ic(e)
    : a === "[object RegExp]"
    ? r
      ? nc.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&")
      : nc.call(e)
    : e instanceof Error
    ? ic(e)
    : null;
}
function qf(e, t, r, n, o, a) {
  if (o.includes(e)) return "[Circular]";
  (o = [...o]), o.push(e);
  let i = ++n > t.maxDepth,
    l = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !a) return St(e.toJSON(), t, r, n, o, !0);
  let u = Rf.call(e);
  return u === "[object Arguments]"
    ? i
      ? "[Arguments]"
      : `${l ? "" : "Arguments "}[${Yn(e, t, r, n, o, St)}]`
    : RS(u)
    ? i
      ? `[${e.constructor.name}]`
      : `${l || (!t.printBasicPrototype && e.constructor.name === "Array") ? "" : `${e.constructor.name} `}[${Yn(e, t, r, n, o, St)}]`
    : u === "[object Map]"
    ? i
      ? "[Map]"
      : `Map {${Mo(e.entries(), t, r, n, o, St, " => ")}}`
    : u === "[object Set]"
    ? i
      ? "[Set]"
      : `Set {${Ql(e.values(), t, r, n, o, St)}}`
    : i || gS(e)
    ? `[${ja(e)}]`
    : `${l || (!t.printBasicPrototype && ja(e) === "Object") ? "" : `${ja(e)} `}{${Zl(e, t, r, n, o, St)}}`;
}
function qS(e) {
  return e.serialize != null;
}
function Ef(e, t, r, n, o, a) {
  let i;
  try {
    i = qS(e)
      ? e.serialize(t, r, n, o, a, St)
      : e.print(
          t,
          (l) => St(l, r, n, o, a),
          (l) => {
            let u = n + r.indent;
            return (
              u +
              l.replaceAll(
                _S,
                `
${u}`
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors
        );
  } catch (l) {
    throw new wf(l.message, l.stack);
  }
  if (typeof i != "string") throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
  return i;
}
function Pf(e, t) {
  for (let r of e)
    try {
      if (r.test(t)) return r;
    } catch (n) {
      throw new wf(n.message, n.stack);
    }
  return null;
}
function St(e, t, r, n, o, a) {
  let i = Pf(t.plugins, e);
  if (i !== null) return Ef(i, e, t, r, n, o);
  let l = Cf(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return l !== null ? l : qf(e, t, r, n, o, a);
}
var os = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" },
  Of = Object.keys(os),
  Ke = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: Number.POSITIVE_INFINITY,
    maxWidth: Number.POSITIVE_INFINITY,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: os,
  };
function ES(e) {
  for (let t of Object.keys(e)) if (!Object.prototype.hasOwnProperty.call(Ke, t)) throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
function PS() {
  return Of.reduce((e, t) => {
    let r = os[t],
      n = r && be[r];
    if (n && typeof n.close == "string" && typeof n.open == "string") e[t] = n;
    else throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`);
    return e;
  }, Object.create(null));
}
function OS() {
  return Of.reduce((e, t) => ((e[t] = { close: "", open: "" }), e), Object.create(null));
}
function Tf(e) {
  return (e == null ? void 0 : e.printFunctionName) ?? Ke.printFunctionName;
}
function Sf(e) {
  return (e == null ? void 0 : e.escapeRegex) ?? Ke.escapeRegex;
}
function Af(e) {
  return (e == null ? void 0 : e.escapeString) ?? Ke.escapeString;
}
function lc(e) {
  return {
    callToJSON: (e == null ? void 0 : e.callToJSON) ?? Ke.callToJSON,
    colors: e != null && e.highlight ? PS() : OS(),
    compareKeys:
      typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null
        ? e.compareKeys
        : Ke.compareKeys,
    escapeRegex: Sf(e),
    escapeString: Af(e),
    indent: e != null && e.min ? "" : TS((e == null ? void 0 : e.indent) ?? Ke.indent),
    maxDepth: (e == null ? void 0 : e.maxDepth) ?? Ke.maxDepth,
    maxWidth: (e == null ? void 0 : e.maxWidth) ?? Ke.maxWidth,
    min: (e == null ? void 0 : e.min) ?? Ke.min,
    plugins: (e == null ? void 0 : e.plugins) ?? Ke.plugins,
    printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
    printFunctionName: Tf(e),
    spacingInner:
      e != null && e.min
        ? " "
        : `
`,
    spacingOuter:
      e != null && e.min
        ? ""
        : `
`,
  };
}
function TS(e) {
  return Array.from({ length: e + 1 }).join(" ");
}
function ot(e, t) {
  if (t && (ES(t), t.plugins)) {
    let n = Pf(t.plugins, e);
    if (n !== null) return Ef(n, e, lc(t), "", 0, []);
  }
  let r = Cf(e, Tf(t), Sf(t), Af(t));
  return r !== null ? r : qf(e, lc(t), "", 0, []);
}
var Mf = { AsymmetricMatcher: OT, DOMCollection: NT, DOMElement: VT, Immutable: aS, ReactElement: cS, ReactTestComponent: hS },
  { AsymmetricMatcher: SS, DOMCollection: AS, DOMElement: MS, Immutable: xS, ReactElement: jS, ReactTestComponent: NS } = Mf,
  sc = [NS, jS, MS, AS, xS, SS];
function ze(e, t = 10, { maxLength: r, ...n } = {}) {
  let o = r ?? 1e4,
    a;
  try {
    a = ot(e, { maxDepth: t, escapeString: !1, plugins: sc, ...n });
  } catch {
    a = ot(e, { callToJSON: !1, maxDepth: t, escapeString: !1, plugins: sc, ...n });
  }
  return a.length >= o && t > 1 ? ze(e, Math.floor(t / 2)) : a;
}
var $S = /%[sdjifoOc%]/g;
function IS(...e) {
  if (typeof e[0] != "string") {
    let a = [];
    for (let i = 0; i < e.length; i++) a.push($r(e[i], { depth: 0, colors: !1 }));
    return a.join(" ");
  }
  let t = e.length,
    r = 1,
    n = e[0],
    o = String(n).replace($S, (a) => {
      if (a === "%%") return "%";
      if (r >= t) return a;
      switch (a) {
        case "%s": {
          let i = e[r++];
          return typeof i == "bigint"
            ? `${i.toString()}n`
            : typeof i == "number" && i === 0 && 1 / i < 0
            ? "-0"
            : typeof i == "object" && i !== null
            ? $r(i, { depth: 0, colors: !1 })
            : String(i);
        }
        case "%d": {
          let i = e[r++];
          return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
        }
        case "%i": {
          let i = e[r++];
          return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
        }
        case "%f":
          return Number.parseFloat(String(e[r++])).toString();
        case "%o":
          return $r(e[r++], { showHidden: !0, showProxy: !0 });
        case "%O":
          return $r(e[r++]);
        case "%c":
          return r++, "";
        case "%j":
          try {
            return JSON.stringify(e[r++]);
          } catch (i) {
            let l = i.message;
            if (l.includes("circular structure") || l.includes("cyclic structures") || l.includes("cyclic object")) return "[Circular]";
            throw i;
          }
        default:
          return a;
      }
    });
  for (let a = e[r]; r < t; a = e[++r]) a === null || typeof a != "object" ? (o += ` ${a}`) : (o += ` ${$r(a)}`);
  return o;
}
function $r(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), Ci(e, t);
}
var xf;
xf = /\r?\n|[\r\u2028\u2029]/y;
RegExp(xf.source);
var jf = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete",
  ],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
};
new Set(jf.keyword);
new Set(jf.strict);
function uc(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (Array.isArray(e)) return "array";
  if (typeof e == "boolean") return "boolean";
  if (typeof e == "function") return "function";
  if (typeof e == "number") return "number";
  if (typeof e == "string") return "string";
  if (typeof e == "bigint") return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp) return "regexp";
      if (e.constructor === Map) return "map";
      if (e.constructor === Set) return "set";
      if (e.constructor === Date) return "date";
    }
    return "object";
  } else if (typeof e == "symbol") return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
var Ae = -1,
  Pe = 1,
  ge = 0,
  fe = class {
    constructor(e, t) {
      he(this, 0);
      he(this, 1);
      (this[0] = e), (this[1] = t);
    }
  },
  BS = function (e, t) {
    if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      o = n,
      a = 0;
    for (; r < o; ) e.substring(a, o) === t.substring(a, o) ? ((r = o), (a = r)) : (n = o), (o = Math.floor((n - r) / 2 + r));
    return o;
  },
  Nf = function (e, t) {
    if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1)) return 0;
    let r = 0,
      n = Math.min(e.length, t.length),
      o = n,
      a = 0;
    for (; r < o; )
      e.substring(e.length - o, e.length - a) === t.substring(t.length - o, t.length - a) ? ((r = o), (a = r)) : (n = o),
        (o = Math.floor((n - r) / 2 + r));
    return o;
  },
  cc = function (e, t) {
    let r = e.length,
      n = t.length;
    if (r === 0 || n === 0) return 0;
    r > n ? (e = e.substring(r - n)) : r < n && (t = t.substring(0, r));
    let o = Math.min(r, n);
    if (e === t) return o;
    let a = 0,
      i = 1;
    for (;;) {
      let l = e.substring(o - i),
        u = t.indexOf(l);
      if (u === -1) return a;
      (i += u), (u === 0 || e.substring(o - i) === t.substring(0, i)) && ((a = i), i++);
    }
  },
  kS = function (e) {
    let t = !1,
      r = [],
      n = 0,
      o = null,
      a = 0,
      i = 0,
      l = 0,
      u = 0,
      c = 0;
    for (; a < e.length; )
      e[a][0] === ge
        ? ((r[n++] = a), (i = u), (l = c), (u = 0), (c = 0), (o = e[a][1]))
        : (e[a][0] === Pe ? (u += e[a][1].length) : (c += e[a][1].length),
          o &&
            o.length <= Math.max(i, l) &&
            o.length <= Math.max(u, c) &&
            (e.splice(r[n - 1], 0, new fe(Ae, o)),
            (e[r[n - 1] + 1][0] = Pe),
            n--,
            n--,
            (a = n > 0 ? r[n - 1] : -1),
            (i = 0),
            (l = 0),
            (u = 0),
            (c = 0),
            (o = null),
            (t = !0))),
        a++;
    for (t && $f(e), FS(e), a = 1; a < e.length; ) {
      if (e[a - 1][0] === Ae && e[a][0] === Pe) {
        let s = e[a - 1][1],
          d = e[a][1],
          m = cc(s, d),
          p = cc(d, s);
        m >= p
          ? (m >= s.length / 2 || m >= d.length / 2) &&
            (e.splice(a, 0, new fe(ge, d.substring(0, m))),
            (e[a - 1][1] = s.substring(0, s.length - m)),
            (e[a + 1][1] = d.substring(m)),
            a++)
          : (p >= s.length / 2 || p >= d.length / 2) &&
            (e.splice(a, 0, new fe(ge, s.substring(0, p))),
            (e[a - 1][0] = Pe),
            (e[a - 1][1] = d.substring(0, d.length - p)),
            (e[a + 1][0] = Ae),
            (e[a + 1][1] = s.substring(p)),
            a++),
          a++;
      }
      a++;
    }
  },
  dc = /[^a-z0-9]/i,
  pc = /\s/,
  mc = /[\r\n]/,
  LS = /\n\r?\n$/,
  DS = /^\r?\n\r?\n/;
function FS(e) {
  function t(n, o) {
    if (!n || !o) return 6;
    let a = n.charAt(n.length - 1),
      i = o.charAt(0),
      l = a.match(dc),
      u = i.match(dc),
      c = l && a.match(pc),
      s = u && i.match(pc),
      d = c && a.match(mc),
      m = s && i.match(mc),
      p = d && n.match(LS),
      f = m && o.match(DS);
    return p || f ? 5 : d || m ? 4 : l && !c && s ? 3 : c || s ? 2 : l || u ? 1 : 0;
  }
  let r = 1;
  for (; r < e.length - 1; ) {
    if (e[r - 1][0] === ge && e[r + 1][0] === ge) {
      let n = e[r - 1][1],
        o = e[r][1],
        a = e[r + 1][1],
        i = Nf(n, o);
      if (i) {
        let d = o.substring(o.length - i);
        (n = n.substring(0, n.length - i)), (o = d + o.substring(0, o.length - i)), (a = d + a);
      }
      let l = n,
        u = o,
        c = a,
        s = t(n, o) + t(o, a);
      for (; o.charAt(0) === a.charAt(0); ) {
        (n += o.charAt(0)), (o = o.substring(1) + a.charAt(0)), (a = a.substring(1));
        let d = t(n, o) + t(o, a);
        d >= s && ((s = d), (l = n), (u = o), (c = a));
      }
      e[r - 1][1] !== l &&
        (l ? (e[r - 1][1] = l) : (e.splice(r - 1, 1), r--), (e[r][1] = u), c ? (e[r + 1][1] = c) : (e.splice(r + 1, 1), r--));
    }
    r++;
  }
}
function $f(e) {
  e.push(new fe(ge, ""));
  let t = 0,
    r = 0,
    n = 0,
    o = "",
    a = "",
    i;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Pe:
        n++, (a += e[t][1]), t++;
        break;
      case Ae:
        r++, (o += e[t][1]), t++;
        break;
      case ge:
        r + n > 1
          ? (r !== 0 &&
              n !== 0 &&
              ((i = BS(a, o)),
              i !== 0 &&
                (t - r - n > 0 && e[t - r - n - 1][0] === ge
                  ? (e[t - r - n - 1][1] += a.substring(0, i))
                  : (e.splice(0, 0, new fe(ge, a.substring(0, i))), t++),
                (a = a.substring(i)),
                (o = o.substring(i))),
              (i = Nf(a, o)),
              i !== 0 &&
                ((e[t][1] = a.substring(a.length - i) + e[t][1]), (a = a.substring(0, a.length - i)), (o = o.substring(0, o.length - i)))),
            (t -= r + n),
            e.splice(t, r + n),
            o.length && (e.splice(t, 0, new fe(Ae, o)), t++),
            a.length && (e.splice(t, 0, new fe(Pe, a)), t++),
            t++)
          : t !== 0 && e[t - 1][0] === ge
          ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
          : t++,
          (n = 0),
          (r = 0),
          (o = ""),
          (a = "");
        break;
    }
  e[e.length - 1][1] === "" && e.pop();
  let l = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === ge &&
      e[t + 1][0] === ge &&
      (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1]
        ? ((e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
          (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
          e.splice(t - 1, 1),
          (l = !0))
        : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] &&
          ((e[t - 1][1] += e[t + 1][1]), (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]), e.splice(t + 1, 1), (l = !0))),
      t++;
  l && $f(e);
}
var If = "Compared values have no visual difference.",
  HS = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.",
  Bf = {};
Object.defineProperty(Bf, "__esModule", { value: !0 });
var kf = (Bf.default = GS),
  Hr = "diff-sequences",
  Oe = 0,
  Qr = (e, t, r, n, o) => {
    let a = 0;
    for (; e < t && r < n && o(e, r); ) (e += 1), (r += 1), (a += 1);
    return a;
  },
  Zr = (e, t, r, n, o) => {
    let a = 0;
    for (; e <= t && r <= n && o(t, n); ) (t -= 1), (n -= 1), (a += 1);
    return a;
  },
  Na = (e, t, r, n, o, a, i) => {
    let l = 0,
      u = -e,
      c = a[l],
      s = c;
    a[l] += Qr(c + 1, t, n + c - u + 1, r, o);
    let d = e < i ? e : i;
    for (l += 1, u += 2; l <= d; l += 1, u += 2) {
      if (l !== e && s < a[l]) c = a[l];
      else if (((c = s + 1), t <= c)) return l - 1;
      (s = a[l]), (a[l] = c + Qr(c + 1, t, n + c - u + 1, r, o));
    }
    return i;
  },
  fc = (e, t, r, n, o, a, i) => {
    let l = 0,
      u = e,
      c = a[l],
      s = c;
    a[l] -= Zr(t, c - 1, r, n + c - u - 1, o);
    let d = e < i ? e : i;
    for (l += 1, u -= 2; l <= d; l += 1, u -= 2) {
      if (l !== e && a[l] < s) c = a[l];
      else if (((c = s - 1), c < t)) return l - 1;
      (s = a[l]), (a[l] = c - Zr(t, c - 1, r, n + c - u - 1, o));
    }
    return i;
  },
  US = (e, t, r, n, o, a, i, l, u, c, s) => {
    let d = n - t,
      m = r - t,
      p = o - n - m,
      f = -p - (e - 1),
      b = -p + (e - 1),
      h = Oe,
      y = e < l ? e : l;
    for (let g = 0, E = -e; g <= y; g += 1, E += 2) {
      let C = g === 0 || (g !== e && h < i[g]),
        q = C ? i[g] : h,
        _ = C ? q : q + 1,
        v = d + _ - E,
        w = Qr(_ + 1, r, v + 1, o, a),
        P = _ + w;
      if (((h = i[g]), (i[g] = P), f <= E && E <= b)) {
        let j = (e - 1 - (E + p)) / 2;
        if (j <= c && u[j] - 1 <= P) {
          let $ = d + q - (C ? E + 1 : E - 1),
            B = Zr(t, q, n, $, a),
            I = q - B,
            S = $ - B,
            k = I + 1,
            U = S + 1;
          (s.nChangePreceding = e - 1),
            e - 1 === k + U - t - n ? ((s.aEndPreceding = t), (s.bEndPreceding = n)) : ((s.aEndPreceding = k), (s.bEndPreceding = U)),
            (s.nCommonPreceding = B),
            B !== 0 && ((s.aCommonPreceding = k), (s.bCommonPreceding = U)),
            (s.nCommonFollowing = w),
            w !== 0 && ((s.aCommonFollowing = _ + 1), (s.bCommonFollowing = v + 1));
          let W = P + 1,
            G = v + w + 1;
          return (
            (s.nChangeFollowing = e - 1),
            e - 1 === r + o - W - G
              ? ((s.aStartFollowing = r), (s.bStartFollowing = o))
              : ((s.aStartFollowing = W), (s.bStartFollowing = G)),
            !0
          );
        }
      }
    }
    return !1;
  },
  VS = (e, t, r, n, o, a, i, l, u, c, s) => {
    let d = o - r,
      m = r - t,
      p = o - n - m,
      f = p - e,
      b = p + e,
      h = Oe,
      y = e < c ? e : c;
    for (let g = 0, E = e; g <= y; g += 1, E -= 2) {
      let C = g === 0 || (g !== e && u[g] < h),
        q = C ? u[g] : h,
        _ = C ? q : q - 1,
        v = d + _ - E,
        w = Zr(t, _ - 1, n, v - 1, a),
        P = _ - w;
      if (((h = u[g]), (u[g] = P), f <= E && E <= b)) {
        let j = (e + (E - p)) / 2;
        if (j <= l && P - 1 <= i[j]) {
          let $ = v - w;
          if (
            ((s.nChangePreceding = e),
            e === P + $ - t - n ? ((s.aEndPreceding = t), (s.bEndPreceding = n)) : ((s.aEndPreceding = P), (s.bEndPreceding = $)),
            (s.nCommonPreceding = w),
            w !== 0 && ((s.aCommonPreceding = P), (s.bCommonPreceding = $)),
            (s.nChangeFollowing = e - 1),
            e === 1)
          )
            (s.nCommonFollowing = 0), (s.aStartFollowing = r), (s.bStartFollowing = o);
          else {
            let B = d + q - (C ? E - 1 : E + 1),
              I = Qr(q, r, B, o, a);
            (s.nCommonFollowing = I), I !== 0 && ((s.aCommonFollowing = q), (s.bCommonFollowing = B));
            let S = q + I,
              k = B + I;
            e - 1 === r + o - S - k
              ? ((s.aStartFollowing = r), (s.bStartFollowing = o))
              : ((s.aStartFollowing = S), (s.bStartFollowing = k));
          }
          return !0;
        }
      }
    }
    return !1;
  },
  zS = (e, t, r, n, o, a, i, l, u) => {
    let c = n - t,
      s = o - r,
      d = r - t,
      m = o - n,
      p = m - d,
      f = d,
      b = d;
    if (((i[0] = t - 1), (l[0] = r), p % 2 === 0)) {
      let h = (e || p) / 2,
        y = (d + m) / 2;
      for (let g = 1; g <= y; g += 1)
        if (((f = Na(g, r, o, c, a, i, f)), g < h)) b = fc(g, t, n, s, a, l, b);
        else if (VS(g, t, r, n, o, a, i, f, l, b, u)) return;
    } else {
      let h = ((e || p) + 1) / 2,
        y = (d + m + 1) / 2,
        g = 1;
      for (f = Na(g, r, o, c, a, i, f), g += 1; g <= y; g += 1)
        if (((b = fc(g - 1, t, n, s, a, l, b)), g < h)) f = Na(g, r, o, c, a, i, f);
        else if (US(g, t, r, n, o, a, i, f, l, b, u)) return;
    }
    throw new Error(`${Hr}: no overlap aStart=${t} aEnd=${r} bStart=${n} bEnd=${o}`);
  },
  qi = (e, t, r, n, o, a, i, l, u, c) => {
    if (o - n < r - t) {
      if (((a = !a), a && i.length === 1)) {
        let { foundSubsequence: j, isCommon: $ } = i[0];
        i[1] = {
          foundSubsequence: (B, I, S) => {
            j(B, S, I);
          },
          isCommon: (B, I) => $(I, B),
        };
      }
      let w = t,
        P = r;
      (t = n), (r = o), (n = w), (o = P);
    }
    let { foundSubsequence: s, isCommon: d } = i[a ? 1 : 0];
    zS(e, t, r, n, o, d, l, u, c);
    let {
      nChangePreceding: m,
      aEndPreceding: p,
      bEndPreceding: f,
      nCommonPreceding: b,
      aCommonPreceding: h,
      bCommonPreceding: y,
      nCommonFollowing: g,
      aCommonFollowing: E,
      bCommonFollowing: C,
      nChangeFollowing: q,
      aStartFollowing: _,
      bStartFollowing: v,
    } = c;
    t < p && n < f && qi(m, t, p, n, f, a, i, l, u, c),
      b !== 0 && s(b, h, y),
      g !== 0 && s(g, E, C),
      _ < r && v < o && qi(q, _, r, v, o, a, i, l, u, c);
  },
  hc = (e, t) => {
    if (typeof t != "number") throw new TypeError(`${Hr}: ${e} typeof ${typeof t} is not a number`);
    if (!Number.isSafeInteger(t)) throw new RangeError(`${Hr}: ${e} value ${t} is not a safe integer`);
    if (t < 0) throw new RangeError(`${Hr}: ${e} value ${t} is a negative integer`);
  },
  bc = (e, t) => {
    let r = typeof t;
    if (r !== "function") throw new TypeError(`${Hr}: ${e} typeof ${r} is not a function`);
  };
function GS(e, t, r, n) {
  hc("aLength", e), hc("bLength", t), bc("isCommon", r), bc("foundSubsequence", n);
  let o = Qr(0, e, 0, t, r);
  if ((o !== 0 && n(o, 0, 0), e !== o || t !== o)) {
    let a = o,
      i = o,
      l = Zr(a, e - 1, i, t - 1, r),
      u = e - l,
      c = t - l,
      s = o + l;
    e !== s &&
      t !== s &&
      qi(0, a, u, i, c, !1, [{ foundSubsequence: n, isCommon: r }], [Oe], [Oe], {
        aCommonFollowing: Oe,
        aCommonPreceding: Oe,
        aEndPreceding: Oe,
        aStartFollowing: Oe,
        bCommonFollowing: Oe,
        bCommonPreceding: Oe,
        bEndPreceding: Oe,
        bStartFollowing: Oe,
        nChangeFollowing: Oe,
        nChangePreceding: Oe,
        nCommonFollowing: Oe,
        nCommonPreceding: Oe,
      }),
      l !== 0 && n(l, u, c);
  }
}
function WS(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function as(e, t, r, n, o, a) {
  return e.length !== 0 ? r(`${n} ${WS(e, o)}`) : n !== " " ? r(n) : t && a.length !== 0 ? r(`${n} ${a}`) : "";
}
function Lf(e, t, { aColor: r, aIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return as(e, t, r, n, o, a);
}
function Df(e, t, { bColor: r, bIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return as(e, t, r, n, o, a);
}
function Ff(e, t, { commonColor: r, commonIndicator: n, commonLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: a }) {
  return as(e, t, r, n, o, a);
}
function yc(e, t, r, n, { patchColor: o }) {
  return o(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`);
}
function KS(e, t) {
  let r = e.length,
    n = t.contextLines,
    o = n + n,
    a = r,
    i = !1,
    l = 0,
    u = 0;
  for (; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ge; ) u += 1;
    if (C !== u)
      if (C === 0) u > n && ((a -= u - n), (i = !0));
      else if (u === r) {
        let q = u - C;
        q > n && ((a -= q - n), (i = !0));
      } else {
        let q = u - C;
        q > o && ((a -= q - o), (l += 1));
      }
    for (; u !== r && e[u][0] !== ge; ) u += 1;
  }
  let c = l !== 0 || i;
  l !== 0 ? (a += l + 1) : i && (a += 1);
  let s = a - 1,
    d = [],
    m = 0;
  c && d.push("");
  let p = 0,
    f = 0,
    b = 0,
    h = 0,
    y = (C) => {
      let q = d.length;
      d.push(Ff(C, q === 0 || q === s, t)), (b += 1), (h += 1);
    },
    g = (C) => {
      let q = d.length;
      d.push(Lf(C, q === 0 || q === s, t)), (b += 1);
    },
    E = (C) => {
      let q = d.length;
      d.push(Df(C, q === 0 || q === s, t)), (h += 1);
    };
  for (u = 0; u !== r; ) {
    let C = u;
    for (; u !== r && e[u][0] === ge; ) u += 1;
    if (C !== u)
      if (C === 0) {
        u > n && ((C = u - n), (p = C), (f = C), (b = p), (h = f));
        for (let q = C; q !== u; q += 1) y(e[q][1]);
      } else if (u === r) {
        let q = u - C > n ? C + n : u;
        for (let _ = C; _ !== q; _ += 1) y(e[_][1]);
      } else {
        let q = u - C;
        if (q > o) {
          let _ = C + n;
          for (let w = C; w !== _; w += 1) y(e[w][1]);
          (d[m] = yc(p, b, f, h, t)), (m = d.length), d.push("");
          let v = q - o;
          (p = b + v), (f = h + v), (b = p), (h = f);
          for (let w = u - n; w !== u; w += 1) y(e[w][1]);
        } else for (let _ = C; _ !== u; _ += 1) y(e[_][1]);
      }
    for (; u !== r && e[u][0] === Ae; ) g(e[u][1]), (u += 1);
    for (; u !== r && e[u][0] === Pe; ) E(e[u][1]), (u += 1);
  }
  return (
    c && (d[m] = yc(p, b, f, h, t)),
    d.join(`
`)
  );
}
function YS(e, t) {
  return e.map((r, n, o) => {
    let a = r[1],
      i = n === 0 || n === o.length - 1;
    switch (r[0]) {
      case Ae:
        return Lf(a, i, t);
      case Pe:
        return Df(a, i, t);
      default:
        return Ff(a, i, t);
    }
  }).join(`
`);
}
var $a = (e) => e,
  Hf = 5,
  JS = 0;
function XS() {
  return {
    aAnnotation: "Expected",
    aColor: be.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: be.red,
    bIndicator: "+",
    changeColor: be.inverse,
    changeLineTrailingSpaceColor: $a,
    commonColor: be.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: $a,
    compareKeys: void 0,
    contextLines: Hf,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: be.yellow,
    truncateThreshold: JS,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: $a,
  };
}
function QS(e) {
  return e && typeof e == "function" ? e : void 0;
}
function ZS(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : Hf;
}
function Jt(e = {}) {
  return { ...XS(), ...e, compareKeys: QS(e.compareKeys), contextLines: ZS(e.contextLines) };
}
function lr(e) {
  return e.length === 1 && e[0].length === 0;
}
function eA(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((n) => {
      switch (n[0]) {
        case Ae:
          t += 1;
          break;
        case Pe:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function tA(
  { aAnnotation: e, aColor: t, aIndicator: r, bAnnotation: n, bColor: o, bIndicator: a, includeChangeCounts: i, omitAnnotationLines: l },
  u
) {
  if (l) return "";
  let c = "",
    s = "";
  if (i) {
    let p = String(u.a),
      f = String(u.b),
      b = n.length - e.length,
      h = " ".repeat(Math.max(0, b)),
      y = " ".repeat(Math.max(0, -b)),
      g = f.length - p.length,
      E = " ".repeat(Math.max(0, g)),
      C = " ".repeat(Math.max(0, -g));
    (c = `${h}  ${r} ${E}${p}`), (s = `${y}  ${a} ${C}${f}`);
  }
  let d = `${r} ${e}${c}`,
    m = `${a} ${n}${s}`;
  return `${t(d)}
${o(m)}

`;
}
function is(e, t, r) {
  return (
    tA(r, eA(e)) +
    (r.expand ? YS(e, r) : KS(e, r)) +
    (t
      ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`)
      : "")
  );
}
function jo(e, t, r) {
  let n = Jt(r),
    [o, a] = Uf(lr(e) ? [] : e, lr(t) ? [] : t, n);
  return is(o, a, n);
}
function rA(e, t, r, n, o) {
  if ((lr(e) && lr(r) && ((e = []), (r = [])), lr(t) && lr(n) && ((t = []), (n = [])), e.length !== r.length || t.length !== n.length))
    return jo(e, t, o);
  let [a, i] = Uf(r, n, o),
    l = 0,
    u = 0;
  return (
    a.forEach((c) => {
      switch (c[0]) {
        case Ae:
          (c[1] = e[l]), (l += 1);
          break;
        case Pe:
          (c[1] = t[u]), (u += 1);
          break;
        default:
          (c[1] = t[u]), (l += 1), (u += 1);
      }
    }),
    is(a, i, Jt(o))
  );
}
function Uf(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0),
    a = n ? Math.min(e.length, o) : e.length,
    i = n ? Math.min(t.length, o) : t.length,
    l = a !== e.length || i !== t.length,
    u = (m, p) => e[m] === t[p],
    c = [],
    s = 0,
    d = 0;
  for (
    kf(a, i, u, (m, p, f) => {
      for (; s !== p; s += 1) c.push(new fe(Ae, e[s]));
      for (; d !== f; d += 1) c.push(new fe(Pe, t[d]));
      for (; m !== 0; m -= 1, s += 1, d += 1) c.push(new fe(ge, t[d]));
    });
    s !== a;
    s += 1
  )
    c.push(new fe(Ae, e[s]));
  for (; d !== i; d += 1) c.push(new fe(Pe, t[d]));
  return [c, l];
}
function gc(e) {
  return e.includes(`\r
`)
    ? `\r
`
    : `
`;
}
function nA(e, t, r) {
  let n = (r == null ? void 0 : r.truncateThreshold) ?? !1,
    o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0),
    a = e.length,
    i = t.length;
  if (n) {
    let m = e.includes(`
`),
      p = t.includes(`
`),
      f = gc(e),
      b = gc(t),
      h = m
        ? `${e.split(f, o).join(f)}
`
        : e,
      y = p
        ? `${t.split(b, o).join(b)}
`
        : t;
    (a = h.length), (i = y.length);
  }
  let l = a !== e.length || i !== t.length,
    u = (m, p) => e[m] === t[p],
    c = 0,
    s = 0,
    d = [];
  return (
    kf(a, i, u, (m, p, f) => {
      c !== p && d.push(new fe(Ae, e.slice(c, p))),
        s !== f && d.push(new fe(Pe, t.slice(s, f))),
        (c = p + m),
        (s = f + m),
        d.push(new fe(ge, t.slice(f, s)));
    }),
    c !== a && d.push(new fe(Ae, e.slice(c))),
    s !== i && d.push(new fe(Pe, t.slice(s))),
    [d, l]
  );
}
function oA(e, t, r) {
  return t.reduce((n, o) => n + (o[0] === ge ? o[1] : o[0] === e && o[1].length !== 0 ? r(o[1]) : ""), "");
}
var vc = class {
    constructor(e, t) {
      he(this, "op");
      he(this, "line");
      he(this, "lines");
      he(this, "changeColor");
      (this.op = e), (this.line = []), (this.lines = []), (this.changeColor = t);
    }
    pushSubstring(e) {
      this.pushDiff(new fe(this.op, e));
    }
    pushLine() {
      this.lines.push(
        this.line.length !== 1
          ? new fe(this.op, oA(this.op, this.line, this.changeColor))
          : this.line[0][0] === this.op
          ? this.line[0]
          : new fe(this.op, this.line[0][1])
      ),
        (this.line.length = 0);
    }
    isLineEmpty() {
      return this.line.length === 0;
    }
    pushDiff(e) {
      this.line.push(e);
    }
    align(e) {
      let t = e[1];
      if (
        t.includes(`
`)
      ) {
        let r = t.split(`
`),
          n = r.length - 1;
        r.forEach((o, a) => {
          a < n ? (this.pushSubstring(o), this.pushLine()) : o.length !== 0 && this.pushSubstring(o);
        });
      } else this.pushDiff(e);
    }
    moveLinesTo(e) {
      this.isLineEmpty() || this.pushLine(), e.push(...this.lines), (this.lines.length = 0);
    }
  },
  aA = class {
    constructor(e, t) {
      he(this, "deleteBuffer");
      he(this, "insertBuffer");
      he(this, "lines");
      (this.deleteBuffer = e), (this.insertBuffer = t), (this.lines = []);
    }
    pushDiffCommonLine(e) {
      this.lines.push(e);
    }
    pushDiffChangeLines(e) {
      let t = e[1].length === 0;
      (!t || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(e),
        (!t || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(e);
    }
    flushChangeLines() {
      this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
    }
    align(e) {
      let t = e[0],
        r = e[1];
      if (
        r.includes(`
`)
      ) {
        let n = r.split(`
`),
          o = n.length - 1;
        n.forEach((a, i) => {
          if (i === 0) {
            let l = new fe(t, a);
            this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()
              ? (this.flushChangeLines(), this.pushDiffCommonLine(l))
              : (this.pushDiffChangeLines(l), this.flushChangeLines());
          } else i < o ? this.pushDiffCommonLine(new fe(t, a)) : a.length !== 0 && this.pushDiffChangeLines(new fe(t, a));
        });
      } else this.pushDiffChangeLines(e);
    }
    getLines() {
      return this.flushChangeLines(), this.lines;
    }
  };
function iA(e, t) {
  let r = new vc(Ae, t),
    n = new vc(Pe, t),
    o = new aA(r, n);
  return (
    e.forEach((a) => {
      switch (a[0]) {
        case Ae:
          r.align(a);
          break;
        case Pe:
          n.align(a);
          break;
        default:
          o.align(a);
      }
    }),
    o.getLines()
  );
}
function lA(e, t) {
  if (t) {
    let r = e.length - 1;
    return e.some(
      (n, o) =>
        n[0] === ge &&
        (o !== r ||
          n[1] !==
            `
`)
    );
  }
  return e.some((r) => r[0] === ge);
}
function sA(e, t, r) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    let n =
        e.includes(`
`) ||
        t.includes(`
`),
      [o, a] = Vf(
        n
          ? `${e}
`
          : e,
        n
          ? `${t}
`
          : t,
        !0,
        r
      );
    if (lA(o, n)) {
      let i = Jt(r),
        l = iA(o, i.changeColor);
      return is(l, a, i);
    }
  }
  return jo(
    e.split(`
`),
    t.split(`
`),
    r
  );
}
function Vf(e, t, r, n) {
  let [o, a] = nA(e, t, n);
  return r && kS(o), [o, a];
}
function Ei(e, t) {
  let { commonColor: r } = Jt(t);
  return r(e);
}
var { AsymmetricMatcher: uA, DOMCollection: cA, DOMElement: dA, Immutable: pA, ReactElement: mA, ReactTestComponent: fA } = Mf,
  zf = [fA, mA, dA, cA, pA, uA],
  Pi = { plugins: zf },
  Gf = { callToJSON: !1, maxDepth: 10, plugins: zf };
function _r(e, t, r) {
  if (Object.is(e, t)) return "";
  let n = uc(e),
    o = n,
    a = !1;
  if (n === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function") return;
    (o = e.getExpectedType()), (a = o === "string");
  }
  if (o !== uc(t)) {
    let { aAnnotation: i, aColor: l, aIndicator: u, bAnnotation: c, bColor: s, bIndicator: d } = Jt(r),
      m = Oi(Gf, r),
      p = ot(e, m),
      f = ot(t, m),
      b = `${l(`${u} ${i}:`)} 
${p}`,
      h = `${s(`${d} ${c}:`)} 
${f}`;
    return `${b}

${h}`;
  }
  if (!a)
    switch (n) {
      case "string":
        return jo(
          e.split(`
`),
          t.split(`
`),
          r
        );
      case "boolean":
      case "number":
        return hA(e, t, r);
      case "map":
        return Ia(_c(e), _c(t), r);
      case "set":
        return Ia(Rc(e), Rc(t), r);
      default:
        return Ia(e, t, r);
    }
}
function hA(e, t, r) {
  let n = ot(e, Pi),
    o = ot(t, Pi);
  return n === o
    ? ""
    : jo(
        n.split(`
`),
        o.split(`
`),
        r
      );
}
function _c(e) {
  return new Map(Array.from(e.entries()).sort());
}
function Rc(e) {
  return new Set(Array.from(e.values()).sort());
}
function Ia(e, t, r) {
  let n,
    o = !1;
  try {
    let i = Oi(Pi, r);
    n = wc(e, t, i, r);
  } catch {
    o = !0;
  }
  let a = Ei(If, r);
  if (n === void 0 || n === a) {
    let i = Oi(Gf, r);
    (n = wc(e, t, i, r)),
      n !== a &&
        !o &&
        (n = `${Ei(HS, r)}

${n}`);
  }
  return n;
}
function Oi(e, t) {
  let { compareKeys: r } = Jt(t);
  return { ...e, compareKeys: r };
}
function wc(e, t, r, n) {
  let o = { ...r, indent: 0 },
    a = ot(e, o),
    i = ot(t, o);
  if (a === i) return Ei(If, n);
  {
    let l = ot(e, r),
      u = ot(t, r);
    return rA(
      l.split(`
`),
      u.split(`
`),
      a.split(`
`),
      i.split(`
`),
      n
    );
  }
}
var Cc = 2e4;
function qc(e) {
  return _i(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function Ec(e, t) {
  let r = _i(e),
    n = _i(t);
  return r === n && (r === "Object" || r === "Array");
}
function Wf(e, t, r) {
  let { aAnnotation: n, bAnnotation: o } = Jt(r);
  if (typeof e == "string" && typeof t == "string" && e.length > 0 && t.length > 0 && e.length <= Cc && t.length <= Cc && e !== t) {
    if (
      e.includes(`
`) ||
      t.includes(`
`)
    )
      return sA(t, e, r);
    let [c] = Vf(t, e, !0),
      s = c.some((f) => f[0] === ge),
      d = bA(n, o),
      m = d(n) + vA(Pc(c, Ae, s)),
      p = d(o) + gA(Pc(c, Pe, s));
    return `${m}
${p}`;
  }
  let a = Hu(e, { forceWritable: !0 }),
    i = Hu(t, { forceWritable: !0 }),
    { replacedExpected: l, replacedActual: u } = Kf(a, i);
  return _r(l, u, r);
}
function Kf(e, t, r = new WeakSet(), n = new WeakSet()) {
  return Ec(e, t)
    ? r.has(e) || n.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        n.add(t),
        uf(t).forEach((o) => {
          let a = t[o],
            i = e[o];
          if (qc(a)) a.asymmetricMatch(i) && (e[o] = a);
          else if (qc(i)) i.asymmetricMatch(a) && (t[o] = i);
          else if (Ec(i, a)) {
            let l = Kf(i, a, r, n);
            (e[o] = l.replacedActual), (t[o] = l.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
function bA(...e) {
  let t = e.reduce((r, n) => (n.length > r ? n.length : r), 0);
  return (r) => `${r}: ${" ".repeat(t - r.length)}`;
}
var yA = "·";
function Yf(e) {
  return e.replace(/\s+$/gm, (t) => yA.repeat(t.length));
}
function gA(e) {
  return be.red(Yf(ze(e)));
}
function vA(e) {
  return be.green(Yf(ze(e)));
}
function Pc(e, t, r) {
  return e.reduce((n, o) => n + (o[0] === ge ? o[1] : o[0] === t ? (r ? be.inverse(o[1]) : o[1]) : ""), "");
}
function In(e, t) {
  if (!e) throw new Error(t);
}
function sr(e, t) {
  return typeof t === e;
}
function _A(e) {
  return e instanceof Promise;
}
function Ti(e, t, r) {
  Object.defineProperty(e, t, r);
}
function dr(e, t, r) {
  Object.defineProperty(e, t, { value: r });
}
var Ur = Symbol.for("tinyspy:spy"),
  RA = new Set(),
  wA = (e) => {
    (e.called = !1), (e.callCount = 0), (e.calls = []), (e.results = []), (e.resolves = []), (e.next = []);
  },
  CA = (e) => (Ti(e, Ur, { value: { reset: () => wA(e[Ur]) } }), e[Ur]),
  Jn = (e) => e[Ur] || CA(e);
function qA(e) {
  In(sr("function", e) || sr("undefined", e), "cannot spy on a non-function value");
  let t = function (...n) {
    let o = Jn(t);
    (o.called = !0), o.callCount++, o.calls.push(n);
    let a = o.next.shift();
    if (a) {
      o.results.push(a);
      let [s, d] = a;
      if (s === "ok") return d;
      throw d;
    }
    let i,
      l = "ok",
      u = o.results.length;
    if (o.impl)
      try {
        new.target ? (i = Reflect.construct(o.impl, n, new.target)) : (i = o.impl.apply(this, n)), (l = "ok");
      } catch (s) {
        throw ((i = s), (l = "error"), o.results.push([l, s]), s);
      }
    let c = [l, i];
    return (
      _A(i) &&
        i.then(
          (s) => (o.resolves[u] = ["ok", s]),
          (s) => (o.resolves[u] = ["error", s])
        ),
      o.results.push(c),
      i
    );
  };
  dr(t, "_isMockFunction", !0), dr(t, "length", e ? e.length : 0), dr(t, "name", (e && e.name) || "spy");
  let r = Jn(t);
  return r.reset(), (r.impl = e), t;
}
var Oc = (e, t) => Object.getOwnPropertyDescriptor(e, t),
  Tc = (e, t) => {
    t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
  };
function Jf(e, t, r) {
  In(!sr("undefined", e), "spyOn could not find an object to spy upon"),
    In(sr("object", e) || sr("function", e), "cannot spyOn on a primitive value");
  let [n, o] = (() => {
      if (!sr("object", t)) return [t, "value"];
      if ("getter" in t && "setter" in t) throw new Error("cannot spy on both getter and setter");
      if ("getter" in t) return [t.getter, "get"];
      if ("setter" in t) return [t.setter, "set"];
      throw new Error("specify getter or setter to spy on");
    })(),
    a = Oc(e, n),
    i = Object.getPrototypeOf(e),
    l = i && Oc(i, n),
    u = a || l;
  In(u || n in e, `${String(n)} does not exist`);
  let c = !1;
  o === "value" && u && !u.value && u.get && ((o = "get"), (c = !0), (r = u.get()));
  let s;
  u ? (s = u[o]) : o !== "value" ? (s = () => e[n]) : (s = e[n]), r || (r = s);
  let d = qA(r);
  o === "value" && Tc(d, s);
  let m = (b) => {
      let { value: h, ...y } = u || { configurable: !0, writable: !0 };
      o !== "value" && delete y.writable, (y[o] = b), Ti(e, n, y);
    },
    p = () => (u ? Ti(e, n, u) : m(s)),
    f = d[Ur];
  return (
    dr(f, "restore", p),
    dr(f, "getOriginal", () => (c ? s() : s)),
    dr(f, "willCall", (b) => ((f.impl = b), d)),
    m(c ? () => (Tc(d, r), d) : d),
    RA.add(d),
    d
  );
}
var gn = new Set();
function ls(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function EA(e, t, r) {
  let n = r ? { [{ get: "getter", set: "setter" }[r]]: t } : t,
    o = Jf(e, n);
  return Xf(o);
}
var PA = 0;
function Xf(e) {
  let t = e,
    r,
    n = [],
    o = [],
    a = [],
    i = Jn(e),
    l = {
      get calls() {
        return i.calls;
      },
      get contexts() {
        return o;
      },
      get instances() {
        return n;
      },
      get invocationCallOrder() {
        return a;
      },
      get results() {
        return i.results.map(([p, f]) => ({ type: p === "error" ? "throw" : "return", value: f }));
      },
      get settledResults() {
        return i.resolves.map(([p, f]) => ({ type: p === "error" ? "rejected" : "fulfilled", value: f }));
      },
      get lastCall() {
        return i.calls[i.calls.length - 1];
      },
    },
    u = [],
    c = !1;
  function s(...p) {
    return n.push(this), o.push(this), a.push(++PA), (c ? r : u.shift() || r || i.getOriginal() || (() => {})).apply(this, p);
  }
  let d = t.name;
  (t.getMockName = () => d || "vi.fn()"),
    (t.mockName = (p) => ((d = p), t)),
    (t.mockClear = () => (i.reset(), (n = []), (o = []), (a = []), t)),
    (t.mockReset = () => (t.mockClear(), (r = () => {}), (u = []), t)),
    (t.mockRestore = () => (t.mockReset(), i.restore(), (r = void 0), t)),
    (t.getMockImplementation = () => r),
    (t.mockImplementation = (p) => ((r = p), i.willCall(s), t)),
    (t.mockImplementationOnce = (p) => (u.push(p), t));
  function m(p, f) {
    let b = r;
    (r = p), i.willCall(s), (c = !0);
    let h = () => {
        (r = b), (c = !1);
      },
      y = f();
    return y instanceof Promise ? y.then(() => (h(), t)) : (h(), t);
  }
  return (
    (t.withImplementation = m),
    (t.mockReturnThis = () =>
      t.mockImplementation(function () {
        return this;
      })),
    (t.mockReturnValue = (p) => t.mockImplementation(() => p)),
    (t.mockReturnValueOnce = (p) => t.mockImplementationOnce(() => p)),
    (t.mockResolvedValue = (p) => t.mockImplementation(() => Promise.resolve(p))),
    (t.mockResolvedValueOnce = (p) => t.mockImplementationOnce(() => Promise.resolve(p))),
    (t.mockRejectedValue = (p) => t.mockImplementation(() => Promise.reject(p))),
    (t.mockRejectedValueOnce = (p) => t.mockImplementationOnce(() => Promise.reject(p))),
    Object.defineProperty(t, "mock", { get: () => l }),
    i.willCall(s),
    gn.add(t),
    t
  );
}
function Sc(e) {
  let t = Xf(Jf({ spy: e || function () {} }, "spy"));
  return e && t.mockImplementation(e), t;
}
var OA = "@@__IMMUTABLE_RECORD__@@",
  TA = "@@__IMMUTABLE_ITERABLE__@@";
function SA(e) {
  return e && (e[TA] || e[OA]);
}
var AA = Object.getPrototypeOf({});
function Ac(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function ur(e, t = new WeakMap()) {
  if (!e || typeof e == "string") return e;
  if (typeof e == "function") return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol") return e.toString();
  if (typeof e != "object") return e;
  if (SA(e)) return ur(e.toJSON(), t);
  if (e instanceof Promise || (e.constructor && e.constructor.prototype === "AsyncFunction")) return "Promise";
  if (typeof Element < "u" && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == "function") return `${e.toString()} ${IS(e.sample)}`;
  if (typeof e.toJSON == "function") return ur(e.toJSON(), t);
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((n, o) => {
        try {
          r[o] = ur(n, t);
        } catch (a) {
          r[o] = Ac(a);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let n = e;
    for (; n && n !== AA; )
      Object.getOwnPropertyNames(n).forEach((o) => {
        if (!(o in r))
          try {
            r[o] = ur(e[o], t);
          } catch (a) {
            delete r[o], (r[o] = Ac(a));
          }
      }),
        (n = Object.getPrototypeOf(n));
    return r;
  }
}
function MA(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function Qf(e, t, r = new WeakSet()) {
  if (!e || typeof e != "object") return { message: String(e) };
  let n = e;
  n.stack && (n.stackStr = String(n.stack)),
    n.name && (n.nameStr = String(n.name)),
    (n.showDiff || (n.showDiff === void 0 && n.expected !== void 0 && n.actual !== void 0)) &&
      (n.diff = Wf(n.actual, n.expected, { ...t, ...n.diffOptions })),
    typeof n.expected != "string" && (n.expected = ze(n.expected, 10)),
    typeof n.actual != "string" && (n.actual = ze(n.actual, 10));
  try {
    typeof n.message == "string" && (n.message = MA(n.message));
  } catch {}
  try {
    !r.has(n) && typeof n.cause == "object" && (r.add(n), (n.cause = Qf(n.cause, t, r)));
  } catch {}
  try {
    return ur(n);
  } catch (o) {
    return ur(
      new Error(`Failed to fully serialize error: ${o == null ? void 0 : o.message}
Inner error message: ${n == null ? void 0 : n.message}`)
    );
  }
}
var en = Symbol.for("matchers-object"),
  tn = Symbol.for("$$jest-matchers-object-storybook"),
  ss = Symbol.for("expect-global"),
  Si = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, en)) {
  let e = new WeakMap();
  Object.defineProperty(globalThis, en, { get: () => e });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, tn)) {
  let e = Object.create(null),
    t = [];
  Object.defineProperty(globalThis, tn, {
    configurable: !0,
    get: () => ({ state: globalThis[en].get(globalThis[ss]), matchers: e, customEqualityTesters: t }),
  });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, Si)) {
  let e = Object.create(null);
  Object.defineProperty(globalThis, Si, { get: () => e });
}
function Xn(e) {
  return globalThis[en].get(e);
}
function Ba(e, t) {
  let r = globalThis[en],
    n = r.get(t) || {};
  Object.assign(n, e), r.set(t, n);
}
var Qn = be.green,
  us = be.red,
  xA = be.inverse,
  jA = be.bold,
  Ot = be.dim;
function NA(e, t = "received", r = "expected", n = {}) {
  let {
      comment: o = "",
      isDirectExpectCall: a = !1,
      isNot: i = !1,
      promise: l = "",
      secondArgument: u = "",
      expectedColor: c = Qn,
      receivedColor: s = us,
      secondArgumentColor: d = Qn,
    } = n,
    m = "",
    p = "expect";
  return (
    !a && t !== "" && ((m += Ot(`${p}(`) + s(t)), (p = ")")),
    l !== "" && ((m += Ot(`${p}.`) + l), (p = "")),
    i && ((m += `${Ot(`${p}.`)}not`), (p = "")),
    e.includes(".") ? (p += e) : ((m += Ot(`${p}.`) + e), (p = "")),
    r === "" ? (p += "()") : ((m += Ot(`${p}(`) + c(r)), u && (m += Ot(", ") + d(u)), (p = ")")),
    o !== "" && (p += ` // ${o}`),
    p !== "" && (m += Ot(p)),
    m
  );
}
var $A = "·";
function Zf(e) {
  return e.replace(/\s+$/gm, (t) => $A.repeat(t.length));
}
function IA(e) {
  return us(Zf(ze(e)));
}
function BA(e) {
  return Qn(Zf(ze(e)));
}
function eh() {
  return {
    EXPECTED_COLOR: Qn,
    RECEIVED_COLOR: us,
    INVERTED_COLOR: xA,
    BOLD_WEIGHT: jA,
    DIM_COLOR: Ot,
    diff: _r,
    matcherHint: NA,
    printReceived: IA,
    printExpected: BA,
    printDiffOrStringify: Wf,
  };
}
function cs() {
  return globalThis[tn].customEqualityTesters;
}
function Z(e, t, r, n) {
  return (r = r || []), th(e, t, [], [], r, n ? rh : LA);
}
function Mc(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && Xe("Function", e.asymmetricMatch);
}
function kA(e, t) {
  let r = Mc(e),
    n = Mc(t);
  if (!(r && n)) {
    if (r) return e.asymmetricMatch(t);
    if (n) return t.asymmetricMatch(e);
  }
}
function th(e, t, r, n, o, a) {
  let i = !0,
    l = kA(e, t);
  if (l !== void 0) return l;
  let u = { equals: Z };
  for (let f = 0; f < o.length; f++) {
    let b = o[f].call(u, e, t, o);
    if (b !== void 0) return b;
  }
  if (e instanceof Error && t instanceof Error) return e.message === t.message;
  if (typeof URL == "function" && e instanceof URL && t instanceof URL) return e.href === t.href;
  if (Object.is(e, t)) return !0;
  if (e === null || t === null) return e === t;
  let c = Object.prototype.toString.call(e);
  if (c !== Object.prototype.toString.call(t)) return !1;
  switch (c) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t
        ? !1
        : typeof e != "object" && typeof t != "object"
        ? Object.is(e, t)
        : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      let f = +e,
        b = +t;
      return f === b || (Number.isNaN(f) && Number.isNaN(b));
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != "object" || typeof t != "object") return !1;
  if (jc(e) && jc(t)) return e.isEqualNode(t);
  let s = r.length;
  for (; s--; ) {
    if (r[s] === e) return n[s] === t;
    if (n[s] === t) return !1;
  }
  if ((r.push(e), n.push(t), c === "[object Array]" && e.length !== t.length)) return !1;
  let d = xc(e, a),
    m,
    p = d.length;
  if (xc(t, a).length !== p) return !1;
  for (; p--; ) if (((m = d[p]), (i = a(t, m) && th(e[m], t[m], r, n, o, a)), !i)) return !1;
  return r.pop(), n.pop(), i;
}
function xc(e, t) {
  let r = [];
  for (let n in e) t(e, n) && r.push(n);
  return r.concat(Object.getOwnPropertySymbols(e).filter((n) => Object.getOwnPropertyDescriptor(e, n).enumerable));
}
function LA(e, t) {
  return rh(e, t) && e[t] !== void 0;
}
function rh(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Xe(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function jc(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "nodeType" in e &&
    typeof e.nodeType == "number" &&
    "nodeName" in e &&
    typeof e.nodeName == "string" &&
    "isEqualNode" in e &&
    typeof e.isEqualNode == "function"
  );
}
var nh = "@@__IMMUTABLE_KEYED__@@",
  oh = "@@__IMMUTABLE_SET__@@",
  DA = "@@__IMMUTABLE_LIST__@@",
  No = "@@__IMMUTABLE_ORDERED__@@",
  FA = "@@__IMMUTABLE_RECORD__@@";
function HA(e) {
  return !!(e && e[nh] && !e[No]);
}
function UA(e) {
  return !!(e && e[oh] && !e[No]);
}
function $o(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function VA(e) {
  return !!(e && $o(e) && e[DA]);
}
function zA(e) {
  return !!(e && $o(e) && e[nh] && e[No]);
}
function GA(e) {
  return !!(e && $o(e) && e[oh] && e[No]);
}
function WA(e) {
  return !!(e && $o(e) && e[FA]);
}
var ah = Symbol.iterator;
function Nc(e) {
  return !!(e != null && e[ah]);
}
function Le(e, t, r = [], n = [], o = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !Nc(e) || !Nc(t)) return;
  if (e.constructor !== t.constructor) return !1;
  let a = n.length;
  for (; a--; ) if (n[a] === e) return o[a] === t;
  n.push(e), o.push(t);
  let i = [...r.filter((c) => c !== Le), l];
  function l(c, s) {
    return Le(c, s, [...r], [...n], [...o]);
  }
  if (e.size !== void 0) {
    if (e.size !== t.size) return !1;
    if (Xe("Set", e) || UA(e)) {
      let c = !0;
      for (let s of e)
        if (!t.has(s)) {
          let d = !1;
          for (let m of t) Z(s, m, i) === !0 && (d = !0);
          if (d === !1) {
            c = !1;
            break;
          }
        }
      return n.pop(), o.pop(), c;
    } else if (Xe("Map", e) || HA(e)) {
      let c = !0;
      for (let s of e)
        if (!t.has(s[0]) || !Z(s[1], t.get(s[0]), i)) {
          let d = !1;
          for (let m of t) {
            let p = Z(s[0], m[0], i),
              f = !1;
            p === !0 && (f = Z(s[1], m[1], i)), f === !0 && (d = !0);
          }
          if (d === !1) {
            c = !1;
            break;
          }
        }
      return n.pop(), o.pop(), c;
    }
  }
  let u = t[ah]();
  for (let c of e) {
    let s = u.next();
    if (s.done || !Z(c, s.value, i)) return !1;
  }
  if (!u.next().done) return !1;
  if (!VA(e) && !zA(e) && !GA(e) && !WA(e)) {
    let c = Object.entries(e),
      s = Object.entries(t);
    if (!Z(c, s)) return !1;
  }
  return n.pop(), o.pop(), !0;
}
function ds(e, t) {
  return !e || typeof e != "object" || e === Object.prototype
    ? !1
    : Object.prototype.hasOwnProperty.call(e, t) || ds(Object.getPrototypeOf(e), t);
}
function KA(e) {
  return Nn(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function vn(e, t, r = []) {
  let n = r.filter((a) => a !== vn),
    o =
      (a = new WeakMap()) =>
      (i, l) => {
        if (KA(l))
          return Object.keys(l).every((u) => {
            if (l[u] != null && typeof l[u] == "object") {
              if (a.has(l[u])) return Z(i[u], l[u], n);
              a.set(l[u], !0);
            }
            let c = i != null && ds(i, u) && Z(i[u], l[u], [...n, o(a)]);
            return a.delete(l[u]), c;
          });
      };
  return o()(e, t);
}
function $c(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor)) return !1;
}
function Ic(e, t) {
  let r = e,
    n = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer)) return;
    try {
      (r = new DataView(e)), (n = new DataView(t));
    } catch {
      return;
    }
  }
  if (r.byteLength !== n.byteLength) return !1;
  for (let o = 0; o < r.byteLength; o++) if (r.getUint8(o) !== n.getUint8(o)) return !1;
  return !0;
}
function Ai(e, t, r = []) {
  if (!Array.isArray(e) || !Array.isArray(t)) return;
  let n = Object.keys(e),
    o = Object.keys(t),
    a = r.filter((i) => i !== Ai);
  return Z(e, t, a, !0) && Z(n, o);
}
function YA(e, t = "#{this}", r = "#{exp}") {
  let n = `expected ${t} to be ${r} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e)
    ? `${n}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
`
    : n;
}
function JA(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
function ka(e) {
  return [
    ...Object.keys(e),
    ...Object.getOwnPropertySymbols(e).filter((t) => {
      var r;
      return (r = Object.getOwnPropertyDescriptor(e, t)) == null ? void 0 : r.enumerable;
    }),
  ];
}
function XA(e, t, r = []) {
  let n = 0,
    o =
      (a = new WeakMap()) =>
      (i, l) => {
        if (Array.isArray(i)) {
          if (Array.isArray(l) && l.length === i.length) return l.map((u, c) => o(a)(i[c], u));
        } else {
          if (i instanceof Date) return i;
          if (Nn(i) && Nn(l)) {
            if (Z(i, l, [...r, Le, vn])) return l;
            let u = {};
            a.set(i, u);
            for (let c of ka(i))
              ds(l, c)
                ? (u[c] = a.has(i[c]) ? a.get(i[c]) : o(a)(i[c], l[c]))
                : a.has(i[c]) || ((n += 1), Nn(i[c]) && (n += ka(i[c]).length), o(a)(i[c], l[c]));
            if (ka(u).length > 0) return u;
          }
        }
        return i;
      };
  return { subset: o()(e, t), stripped: n };
}
var kt = class {
    constructor(e, t = !1) {
      he(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
      (this.sample = e), (this.inverse = t);
    }
    getMatcherContext(e) {
      return {
        ...Xn(e || globalThis[ss]),
        equals: Z,
        isNot: this.inverse,
        customTesters: cs(),
        utils: { ...eh(), diff: _r, stringify: ze, iterableEquality: Le, subsetEquality: vn },
      };
    }
    [Symbol.for("chai/inspect")](e) {
      let t = ze(this, e.depth, { min: !0 });
      return t.length <= e.truncate ? t : `${this.toString()}{…}`;
    }
  },
  Bc = class extends kt {
    constructor(e, t = !1) {
      if (!Xe("String", e)) throw new Error("Expected is not a string");
      super(e, t);
    }
    asymmetricMatch(e) {
      let t = Xe("String", e) && e.includes(this.sample);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "string";
    }
  },
  QA = class extends kt {
    asymmetricMatch(e) {
      return e != null;
    }
    toString() {
      return "Anything";
    }
    toAsymmetricMatcher() {
      return "Anything";
    }
  },
  kc = class extends kt {
    constructor(e, t = !1) {
      super(e, t);
    }
    getPrototype(e) {
      return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.constructor.prototype === e ? null : e.constructor.prototype;
    }
    hasProperty(e, t) {
      return e ? (Object.prototype.hasOwnProperty.call(e, t) ? !0 : this.hasProperty(this.getPrototype(e), t)) : !1;
    }
    asymmetricMatch(e) {
      if (typeof this.sample != "object")
        throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
      let t = !0,
        r = this.getMatcherContext();
      for (let n in this.sample)
        if (!this.hasProperty(e, n) || !Z(this.sample[n], e[n], r.customTesters)) {
          t = !1;
          break;
        }
      return this.inverse ? !t : t;
    }
    toString() {
      return `Object${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "object";
    }
  },
  Lc = class extends kt {
    constructor(e, t = !1) {
      super(e, t);
    }
    asymmetricMatch(e) {
      if (!Array.isArray(this.sample)) throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
      let t = this.getMatcherContext(),
        r = this.sample.length === 0 || (Array.isArray(e) && this.sample.every((n) => e.some((o) => Z(n, o, t.customTesters))));
      return this.inverse ? !r : r;
    }
    toString() {
      return `Array${this.inverse ? "Not" : ""}Containing`;
    }
    getExpectedType() {
      return "array";
    }
  },
  ZA = class extends kt {
    constructor(e) {
      if (typeof e > "u")
        throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
      super(e);
    }
    fnNameFor(e) {
      if (e.name) return e.name;
      let t = Function.prototype.toString.call(e).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
      return t ? t[1] : "<anonymous>";
    }
    asymmetricMatch(e) {
      return this.sample === String
        ? typeof e == "string" || e instanceof String
        : this.sample === Number
        ? typeof e == "number" || e instanceof Number
        : this.sample === Function
        ? typeof e == "function" || e instanceof Function
        : this.sample === Boolean
        ? typeof e == "boolean" || e instanceof Boolean
        : this.sample === BigInt
        ? typeof e == "bigint" || e instanceof BigInt
        : this.sample === Symbol
        ? typeof e == "symbol" || e instanceof Symbol
        : this.sample === Object
        ? typeof e == "object"
        : e instanceof this.sample;
    }
    toString() {
      return "Any";
    }
    getExpectedType() {
      return this.sample === String
        ? "string"
        : this.sample === Number
        ? "number"
        : this.sample === Function
        ? "function"
        : this.sample === Object
        ? "object"
        : this.sample === Boolean
        ? "boolean"
        : this.fnNameFor(this.sample);
    }
    toAsymmetricMatcher() {
      return `Any<${this.fnNameFor(this.sample)}>`;
    }
  },
  Dc = class extends kt {
    constructor(e, t = !1) {
      if (!Xe("String", e) && !Xe("RegExp", e)) throw new Error("Expected is not a String or a RegExp");
      super(new RegExp(e), t);
    }
    asymmetricMatch(e) {
      let t = Xe("String", e) && this.sample.test(e);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? "Not" : ""}Matching`;
    }
    getExpectedType() {
      return "string";
    }
  },
  Fc = class extends kt {
    constructor(t, r = 2, n = !1) {
      if (!Xe("Number", t)) throw new Error("Expected is not a Number");
      if (!Xe("Number", r)) throw new Error("Precision is not a Number");
      super(t);
      he(this, "precision");
      (this.inverse = n), (this.precision = r);
    }
    asymmetricMatch(t) {
      if (!Xe("Number", t)) return !1;
      let r = !1;
      return (
        (t === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY) ||
        (t === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY)
          ? (r = !0)
          : (r = Math.abs(this.sample - t) < 10 ** -this.precision / 2),
        this.inverse ? !r : r
      );
    }
    toString() {
      return `Number${this.inverse ? "Not" : ""}CloseTo`;
    }
    getExpectedType() {
      return "number";
    }
    toAsymmetricMatcher() {
      return [this.toString(), this.sample, `(${JA("digit", this.precision)})`].join(" ");
    }
  },
  eM = (e, t) => {
    t.addMethod(e.expect, "anything", () => new QA()),
      t.addMethod(e.expect, "any", (r) => new ZA(r)),
      t.addMethod(e.expect, "stringContaining", (r) => new Bc(r)),
      t.addMethod(e.expect, "objectContaining", (r) => new kc(r)),
      t.addMethod(e.expect, "arrayContaining", (r) => new Lc(r)),
      t.addMethod(e.expect, "stringMatching", (r) => new Dc(r)),
      t.addMethod(e.expect, "closeTo", (r, n) => new Fc(r, n)),
      (e.expect.not = {
        stringContaining: (r) => new Bc(r, !0),
        objectContaining: (r) => new kc(r, !0),
        arrayContaining: (r) => new Lc(r, !0),
        stringMatching: (r) => new Dc(r, !0),
        closeTo: (r, n) => new Fc(r, n, !0),
      });
  };
function Hc(e, t) {
  return (
    e &&
      t instanceof Promise &&
      ((t = t.finally(() => {
        let r = e.promises.indexOf(t);
        r !== -1 && e.promises.splice(r, 1);
      })),
      e.promises || (e.promises = []),
      e.promises.push(t)),
    t
  );
}
function ih(e, t) {
  return function (...r) {
    var n;
    if (!e.flag(this, "soft")) return t.apply(this, r);
    let o = e.flag(this, "vitest-test");
    if (!o) throw new Error("expect.soft() can only be used inside a test");
    try {
      return t.apply(this, r);
    } catch (a) {
      o.result || (o.result = { state: "fail" }),
        (o.result.state = "fail"),
        (n = o.result).errors || (n.errors = []),
        o.result.errors.push(Qf(a));
    }
  };
}
var tM = (e, t) => {
  let { AssertionError: r } = e,
    n = cs();
  function o(s, d) {
    let m = (p) => {
      let f = ih(t, d);
      t.addMethod(e.Assertion.prototype, p, f), t.addMethod(globalThis[tn].matchers, p, f);
    };
    Array.isArray(s) ? s.forEach((p) => m(p)) : m(s);
  }
  ["throw", "throws", "Throw"].forEach((s) => {
    t.overwriteMethod(
      e.Assertion.prototype,
      s,
      (d) =>
        function (...m) {
          let p = t.flag(this, "promise"),
            f = t.flag(this, "object"),
            b = t.flag(this, "negate");
          if (p === "rejects")
            t.flag(this, "object", () => {
              throw f;
            });
          else if (p === "resolves" && typeof f != "function") {
            if (b) return;
            {
              let h = t.flag(this, "message") || "expected promise to throw an error, but it didn't",
                y = { showDiff: !1 };
              throw new r(h, y, t.flag(this, "ssfi"));
            }
          }
          d.apply(this, m);
        }
    );
  }),
    o("withTest", function (s) {
      return t.flag(this, "vitest-test", s), this;
    }),
    o("toEqual", function (s) {
      let d = t.flag(this, "object"),
        m = Z(d, s, [...n, Le]);
      return this.assert(m, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", s, d);
    }),
    o("toStrictEqual", function (s) {
      let d = t.flag(this, "object"),
        m = Z(d, s, [...n, Le, $c, Ai, Ic], !0);
      return this.assert(m, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", s, d);
    }),
    o("toBe", function (s) {
      let d = this._obj,
        m = Object.is(d, s),
        p = "";
      return (
        m || (Z(d, s, [...n, Le, $c, Ai, Ic], !0) ? (p = "toStrictEqual") : Z(d, s, [...n, Le]) && (p = "toEqual")),
        this.assert(m, YA(p), "expected #{this} not to be #{exp} // Object.is equality", s, d)
      );
    }),
    o("toMatchObject", function (s) {
      let d = this._obj,
        m = Z(d, s, [...n, Le, vn]),
        p = t.flag(this, "negate"),
        { subset: f, stripped: b } = XA(d, s);
      if ((m && p) || (!m && !p)) {
        let h = t.getMessage(this, [m, "expected #{this} to match object #{exp}", "expected #{this} to not match object #{exp}", s, f, !1]),
          y =
            b === 0
              ? h
              : `${h}
(${b} matching ${b === 1 ? "property" : "properties"} omitted from actual)`;
        throw new r(y, { showDiff: !0, expected: s, actual: f });
      }
    }),
    o("toMatch", function (s) {
      let d = this._obj;
      if (typeof d != "string") throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof d}`);
      return this.assert(
        typeof s == "string" ? d.includes(s) : d.match(s),
        "expected #{this} to match #{exp}",
        "expected #{this} not to match #{exp}",
        s,
        d
      );
    }),
    o("toContain", function (s) {
      let d = this._obj;
      if (typeof Node < "u" && d instanceof Node) {
        if (!(s instanceof Node)) throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof s}`);
        return this.assert(
          d.contains(s),
          "expected #{this} to contain element #{exp}",
          "expected #{this} not to contain element #{exp}",
          s,
          d
        );
      }
      if (typeof DOMTokenList < "u" && d instanceof DOMTokenList) {
        dt(s, "class name", ["string"]);
        let m = t.flag(this, "negate") ? d.value.replace(s, "").trim() : `${d.value} ${s}`;
        return this.assert(
          d.contains(s),
          `expected "${d.value}" to contain "${s}"`,
          `expected "${d.value}" not to contain "${s}"`,
          m,
          d.value
        );
      }
      return typeof d == "string" && typeof s == "string"
        ? this.assert(d.includes(s), "expected #{this} to contain #{exp}", "expected #{this} not to contain #{exp}", s, d)
        : (d != null && typeof d != "string" && t.flag(this, "object", Array.from(d)), this.contain(s));
    }),
    o("toContainEqual", function (s) {
      let d = t.flag(this, "object"),
        m = Array.from(d).findIndex((p) => Z(p, s, n));
      this.assert(m !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", s);
    }),
    o("toBeTruthy", function () {
      let s = t.flag(this, "object");
      this.assert(!!s, "expected #{this} to be truthy", "expected #{this} to not be truthy", s, !1);
    }),
    o("toBeFalsy", function () {
      let s = t.flag(this, "object");
      this.assert(!s, "expected #{this} to be falsy", "expected #{this} to not be falsy", s, !1);
    }),
    o("toBeGreaterThan", function (s) {
      let d = this._obj;
      return (
        dt(d, "actual", ["number", "bigint"]),
        dt(s, "expected", ["number", "bigint"]),
        this.assert(d > s, `expected ${d} to be greater than ${s}`, `expected ${d} to be not greater than ${s}`, d, s, !1)
      );
    }),
    o("toBeGreaterThanOrEqual", function (s) {
      let d = this._obj;
      return (
        dt(d, "actual", ["number", "bigint"]),
        dt(s, "expected", ["number", "bigint"]),
        this.assert(
          d >= s,
          `expected ${d} to be greater than or equal to ${s}`,
          `expected ${d} to be not greater than or equal to ${s}`,
          d,
          s,
          !1
        )
      );
    }),
    o("toBeLessThan", function (s) {
      let d = this._obj;
      return (
        dt(d, "actual", ["number", "bigint"]),
        dt(s, "expected", ["number", "bigint"]),
        this.assert(d < s, `expected ${d} to be less than ${s}`, `expected ${d} to be not less than ${s}`, d, s, !1)
      );
    }),
    o("toBeLessThanOrEqual", function (s) {
      let d = this._obj;
      return (
        dt(d, "actual", ["number", "bigint"]),
        dt(s, "expected", ["number", "bigint"]),
        this.assert(
          d <= s,
          `expected ${d} to be less than or equal to ${s}`,
          `expected ${d} to be not less than or equal to ${s}`,
          d,
          s,
          !1
        )
      );
    }),
    o("toBeNaN", function () {
      return this.be.NaN;
    }),
    o("toBeUndefined", function () {
      return this.be.undefined;
    }),
    o("toBeNull", function () {
      return this.be.null;
    }),
    o("toBeDefined", function () {
      let s = t.flag(this, "negate");
      return t.flag(this, "negate", !1), s ? this.be.undefined : this.not.be.undefined;
    }),
    o("toBeTypeOf", function (s) {
      let d = typeof this._obj,
        m = s === d;
      return this.assert(m, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", s, d);
    }),
    o("toBeInstanceOf", function (s) {
      return this.instanceOf(s);
    }),
    o("toHaveLength", function (s) {
      return this.have.length(s);
    }),
    o("toHaveProperty", function (...s) {
      Array.isArray(s[0]) && (s[0] = s[0].map((E) => String(E).replace(/([.[\]])/g, "\\$1")).join("."));
      let d = this._obj,
        [m, p] = s,
        f = () => (Object.prototype.hasOwnProperty.call(d, m) ? { value: d[m], exists: !0 } : t.getPathInfo(d, m)),
        { value: b, exists: h } = f(),
        y = h && (s.length === 1 || Z(p, b, n)),
        g = s.length === 1 ? "" : ` with value ${t.objDisplay(p)}`;
      return this.assert(
        y,
        `expected #{this} to have property "${m}"${g}`,
        `expected #{this} to not have property "${m}"${g}`,
        p,
        h ? b : void 0
      );
    }),
    o("toBeCloseTo", function (s, d = 2) {
      let m = this._obj,
        p = !1,
        f = 0,
        b = 0;
      return (
        (s === Number.POSITIVE_INFINITY && m === Number.POSITIVE_INFINITY) ||
        (s === Number.NEGATIVE_INFINITY && m === Number.NEGATIVE_INFINITY)
          ? (p = !0)
          : ((f = 10 ** -d / 2), (b = Math.abs(m - s)), (p = b < f)),
        this.assert(
          p,
          `expected #{this} to be close to #{exp}, received difference is ${b}, but expected ${f}`,
          `expected #{this} to not be close to #{exp}, received difference is ${b}, but expected ${f}`,
          s,
          m,
          !1
        )
      );
    });
  let a = (s) => {
      if (!ls(s._obj)) throw new TypeError(`${t.inspect(s._obj)} is not a spy or a call to a spy!`);
    },
    i = (s) => (a(s), s._obj),
    l = (s) => {
      let d = s % 10,
        m = s % 100;
      return d === 1 && m !== 11 ? `${s}st` : d === 2 && m !== 12 ? `${s}nd` : d === 3 && m !== 13 ? `${s}rd` : `${s}th`;
    },
    u = (s, d, m) => (
      s.mock.calls &&
        (d += be.gray(`

Received: 

${s.mock.calls.map((p, f) => {
  let b = be.bold(`  ${l(f + 1)} ${s.getMockName()} call:

`);
  return (
    m
      ? (b += _r(m, p, { omitAnnotationLines: !0 }))
      : (b += ze(p)
          .split(
            `
`
          )
          .map((h) => `    ${h}`).join(`
`)),
    (b += `
`),
    b
  );
}).join(`
`)}`)),
      (d += be.gray(`

Number of calls: ${be.bold(s.mock.calls.length)}
`)),
      d
    ),
    c = (s, d, m, p) => (
      (m += be.gray(`

Received: 

${d.map((f, b) => {
  let h = be.bold(`  ${l(b + 1)} ${s.getMockName()} call return:

`);
  return (
    p
      ? (h += _r(p, f.value, { omitAnnotationLines: !0 }))
      : (h += ze(f)
          .split(
            `
`
          )
          .map((y) => `    ${y}`).join(`
`)),
    (h += `
`),
    h
  );
}).join(`
`)}`)),
      (m += be.gray(`

Number of calls: ${be.bold(s.mock.calls.length)}
`)),
      m
    );
  o(["toHaveBeenCalledTimes", "toBeCalledTimes"], function (s) {
    let d = i(this),
      m = d.getMockName(),
      p = d.mock.calls.length;
    return this.assert(
      p === s,
      `expected "${m}" to be called #{exp} times, but got ${p} times`,
      `expected "${m}" to not be called #{exp} times`,
      s,
      p,
      !1
    );
  }),
    o("toHaveBeenCalledOnce", function () {
      let s = i(this),
        d = s.getMockName(),
        m = s.mock.calls.length;
      return this.assert(
        m === 1,
        `expected "${d}" to be called once, but got ${m} times`,
        `expected "${d}" to not be called once`,
        1,
        m,
        !1
      );
    }),
    o(["toHaveBeenCalled", "toBeCalled"], function () {
      let s = i(this),
        d = s.getMockName(),
        m = s.mock.calls.length,
        p = m > 0,
        f = t.flag(this, "negate"),
        b = t.getMessage(this, [
          p,
          `expected "${d}" to be called at least once`,
          `expected "${d}" to not be called at all, but actually been called ${m} times`,
          !0,
          p,
        ]);
      if ((p && f && (b = u(s, b)), (p && f) || (!p && !f))) throw new r(b);
    }),
    o(["toHaveBeenCalledWith", "toBeCalledWith"], function (...s) {
      let d = i(this),
        m = d.getMockName(),
        p = d.mock.calls.some((h) => Z(h, s, [...n, Le])),
        f = t.flag(this, "negate"),
        b = t.getMessage(this, [
          p,
          `expected "${m}" to be called with arguments: #{exp}`,
          `expected "${m}" to not be called with arguments: #{exp}`,
          s,
        ]);
      if ((p && f) || (!p && !f)) throw new r(u(d, b, s));
    }),
    o(["toHaveBeenNthCalledWith", "nthCalledWith"], function (s, ...d) {
      let m = i(this),
        p = m.getMockName(),
        f = m.mock.calls[s - 1],
        b = m.mock.calls.length,
        h = s <= b;
      this.assert(
        Z(f, d, [...n, Le]),
        `expected ${l(s)} "${p}" call to have been called with #{exp}${h ? "" : `, but called only ${b} times`}`,
        `expected ${l(s)} "${p}" call to not have been called with #{exp}`,
        d,
        f,
        h
      );
    }),
    o(["toHaveBeenLastCalledWith", "lastCalledWith"], function (...s) {
      let d = i(this),
        m = d.getMockName(),
        p = d.mock.calls[d.mock.calls.length - 1];
      this.assert(
        Z(p, s, [...n, Le]),
        `expected last "${m}" call to have been called with #{exp}`,
        `expected last "${m}" call to not have been called with #{exp}`,
        s,
        p
      );
    }),
    o(["toThrow", "toThrowError"], function (s) {
      if (typeof s == "string" || typeof s > "u" || s instanceof RegExp) return this.throws(s);
      let d = this._obj,
        m = t.flag(this, "promise"),
        p = t.flag(this, "negate"),
        f = null;
      if (m === "rejects") f = d;
      else if (m === "resolves" && typeof d != "function") {
        if (p) return;
        {
          let b = t.flag(this, "message") || "expected promise to throw an error, but it didn't",
            h = { showDiff: !1 };
          throw new r(b, h, t.flag(this, "ssfi"));
        }
      } else {
        let b = !1;
        try {
          d();
        } catch (h) {
          (b = !0), (f = h);
        }
        if (!b && !p) {
          let h = t.flag(this, "message") || "expected function to throw an error, but it didn't",
            y = { showDiff: !1 };
          throw new r(h, y, t.flag(this, "ssfi"));
        }
      }
      if (typeof s == "function") {
        let b = s.name || s.prototype.constructor.name;
        return this.assert(f && f instanceof s, `expected error to be instance of ${b}`, `expected error not to be instance of ${b}`, s, f);
      }
      if (s instanceof Error)
        return this.assert(
          f && s.message === f.message,
          `expected error to have message: ${s.message}`,
          `expected error not to have message: ${s.message}`,
          s.message,
          f && f.message
        );
      if (typeof s == "object" && "asymmetricMatch" in s && typeof s.asymmetricMatch == "function") {
        let b = s;
        return this.assert(
          f && b.asymmetricMatch(f),
          "expected error to match asymmetric matcher",
          "expected error not to match asymmetric matcher",
          b,
          f
        );
      }
      throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof s}"`);
    }),
    [
      {
        name: "toHaveResolved",
        condition: (s) => s.mock.settledResults.length > 0 && s.mock.settledResults.some(({ type: d }) => d === "fulfilled"),
        action: "resolved",
      },
      {
        name: ["toHaveReturned", "toReturn"],
        condition: (s) => s.mock.calls.length > 0 && s.mock.results.some(({ type: d }) => d !== "throw"),
        action: "called",
      },
    ].forEach(({ name: s, condition: d, action: m }) => {
      o(s, function () {
        let p = i(this),
          f = p.getMockName(),
          b = d(p);
        this.assert(b, `expected "${f}" to be successfully ${m} at least once`, `expected "${f}" to not be successfully ${m}`, b, !b, !1);
      });
    }),
    [
      {
        name: "toHaveResolvedTimes",
        condition: (s, d) => s.mock.settledResults.reduce((m, { type: p }) => (p === "fulfilled" ? ++m : m), 0) === d,
        action: "resolved",
      },
      {
        name: ["toHaveReturnedTimes", "toReturnTimes"],
        condition: (s, d) => s.mock.results.reduce((m, { type: p }) => (p === "throw" ? m : ++m), 0) === d,
        action: "called",
      },
    ].forEach(({ name: s, condition: d, action: m }) => {
      o(s, function (p) {
        let f = i(this),
          b = f.getMockName(),
          h = d(f, p);
        this.assert(
          h,
          `expected "${b}" to be successfully ${m} ${p} times`,
          `expected "${b}" to not be successfully ${m} ${p} times`,
          `expected resolved times: ${p}`,
          `received resolved times: ${h}`,
          !1
        );
      });
    }),
    [
      {
        name: "toHaveResolvedWith",
        condition: (s, d) => s.mock.settledResults.some(({ type: m, value: p }) => m === "fulfilled" && Z(d, p)),
        action: "resolve",
      },
      {
        name: ["toHaveReturnedWith", "toReturnWith"],
        condition: (s, d) => s.mock.results.some(({ type: m, value: p }) => m === "return" && Z(d, p)),
        action: "return",
      },
    ].forEach(({ name: s, condition: d, action: m }) => {
      o(s, function (p) {
        let f = i(this),
          b = d(f, p),
          h = t.flag(this, "negate");
        if ((b && h) || (!b && !h)) {
          let y = f.getMockName(),
            g = t.getMessage(this, [
              b,
              `expected "${y}" to ${m} with: #{exp} at least once`,
              `expected "${y}" to not ${m} with: #{exp}`,
              p,
            ]),
            E = m === "return" ? f.mock.results : f.mock.settledResults;
          throw new r(c(f, E, g, p));
        }
      });
    }),
    [
      {
        name: "toHaveLastResolvedWith",
        condition: (s, d) => {
          let m = s.mock.settledResults[s.mock.settledResults.length - 1];
          return m && m.type === "fulfilled" && Z(m.value, d);
        },
        action: "resolve",
      },
      {
        name: ["toHaveLastReturnedWith", "lastReturnedWith"],
        condition: (s, d) => {
          let m = s.mock.results[s.mock.results.length - 1];
          return m && m.type === "return" && Z(m.value, d);
        },
        action: "return",
      },
    ].forEach(({ name: s, condition: d, action: m }) => {
      o(s, function (p) {
        let f = i(this),
          b = m === "return" ? f.mock.results : f.mock.settledResults,
          h = b[b.length - 1],
          y = f.getMockName();
        this.assert(
          d(f, p),
          `expected last "${y}" call to ${m} #{exp}`,
          `expected last "${y}" call to not ${m} #{exp}`,
          p,
          h == null ? void 0 : h.value
        );
      });
    }),
    [
      {
        name: "toHaveNthResolvedWith",
        condition: (s, d, m) => {
          let p = s.mock.settledResults[d - 1];
          return p && p.type === "fulfilled" && Z(p.value, m);
        },
        action: "resolve",
      },
      {
        name: ["toHaveNthReturnedWith", "nthReturnedWith"],
        condition: (s, d, m) => {
          let p = s.mock.results[d - 1];
          return p && p.type === "return" && Z(p.value, m);
        },
        action: "return",
      },
    ].forEach(({ name: s, condition: d, action: m }) => {
      o(s, function (p, f) {
        let b = i(this),
          h = b.getMockName(),
          y = (m === "return" ? b.mock.results : b.mock.settledResults)[p - 1],
          g = `${l(p)} call`;
        this.assert(
          d(b, p, f),
          `expected ${g} "${h}" call to ${m} #{exp}`,
          `expected ${g} "${h}" call to not ${m} #{exp}`,
          f,
          y == null ? void 0 : y.value
        );
      });
    }),
    o("toSatisfy", function (s, d) {
      return this.be.satisfy(s, d);
    }),
    o("withContext", function (s) {
      for (let d in s) t.flag(this, d, s[d]);
      return this;
    }),
    t.addProperty(e.Assertion.prototype, "resolves", function () {
      let s = new Error("resolves");
      t.flag(this, "promise", "resolves"), t.flag(this, "error", s);
      let d = t.flag(this, "vitest-test"),
        m = t.flag(this, "object");
      if (t.flag(this, "poll")) throw new SyntaxError("expect.poll() is not supported in combination with .resolves");
      if (typeof (m == null ? void 0 : m.then) != "function")
        throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof m}'.`);
      let p = new Proxy(this, {
        get: (f, b, h) => {
          let y = Reflect.get(f, b, h);
          return typeof y != "function"
            ? y instanceof e.Assertion
              ? p
              : y
            : async (...g) => {
                let E = m.then(
                  (C) => (t.flag(this, "object", C), y.call(this, ...g)),
                  (C) => {
                    let q = new r(`promise rejected "${t.inspect(C)}" instead of resolving`, { showDiff: !1 });
                    throw ((q.cause = C), (q.stack = s.stack.replace(s.message, q.message)), q);
                  }
                );
                return Hc(d, E);
              };
        },
      });
      return p;
    }),
    t.addProperty(e.Assertion.prototype, "rejects", function () {
      let s = new Error("rejects");
      t.flag(this, "promise", "rejects"), t.flag(this, "error", s);
      let d = t.flag(this, "vitest-test"),
        m = t.flag(this, "object"),
        p = typeof m == "function" ? m() : m;
      if (t.flag(this, "poll")) throw new SyntaxError("expect.poll() is not supported in combination with .rejects");
      if (typeof (p == null ? void 0 : p.then) != "function")
        throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof p}'.`);
      let f = new Proxy(this, {
        get: (b, h, y) => {
          let g = Reflect.get(b, h, y);
          return typeof g != "function"
            ? g instanceof e.Assertion
              ? f
              : g
            : async (...E) => {
                let C = p.then(
                  (q) => {
                    let _ = new r(`promise resolved "${t.inspect(q)}" instead of rejecting`, {
                      showDiff: !0,
                      expected: new Error("rejected promise"),
                      actual: q,
                    });
                    throw ((_.stack = s.stack.replace(s.message, _.message)), _);
                  },
                  (q) => (t.flag(this, "object", q), g.call(this, ...E))
                );
                return Hc(d, C);
              };
        },
      });
      return f;
    });
};
function rM(e, t) {
  let r = e._obj,
    n = nt.flag(e, "negate"),
    o = nt.flag(e, "promise") || "",
    a = { ...eh(), diff: _r, stringify: ze, iterableEquality: Le, subsetEquality: vn };
  return {
    state: {
      ...Xn(t),
      customTesters: cs(),
      isNot: n,
      utils: a,
      promise: o,
      equals: Z,
      suppressedErrors: [],
      soft: nt.flag(e, "soft"),
      poll: nt.flag(e, "poll"),
    },
    isNot: n,
    obj: r,
  };
}
var Uc = class extends Error {
  constructor(e, t, r) {
    super(e), (this.actual = t), (this.expected = r);
  }
};
function nM(e, t, r) {
  return (n, o) => {
    Object.entries(r).forEach(([a, i]) => {
      function l(...d) {
        let { state: m, isNot: p, obj: f } = rM(this, t),
          b = i.call(m, f, ...d);
        if (b && typeof b == "object" && b instanceof Promise)
          return b.then(({ pass: C, message: q, actual: _, expected: v }) => {
            if ((C && p) || (!C && !p)) throw new Uc(q(), _, v);
          });
        let { pass: h, message: y, actual: g, expected: E } = b;
        if ((h && p) || (!h && !p)) throw new Uc(y(), g, E);
      }
      let u = ih(o, l);
      o.addMethod(globalThis[tn].matchers, a, u), o.addMethod(e.Assertion.prototype, a, u);
      class c extends kt {
        constructor(m = !1, ...p) {
          super(p, m);
        }
        asymmetricMatch(m) {
          let { pass: p } = i.call(this.getMatcherContext(t), m, ...this.sample);
          return this.inverse ? !p : p;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${a}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      let s = (...d) => new c(!1, ...d);
      Object.defineProperty(t, a, { configurable: !0, enumerable: !0, value: s, writable: !0 }),
        Object.defineProperty(t.not, a, { configurable: !0, enumerable: !0, value: (...d) => new c(!0, ...d), writable: !0 }),
        Object.defineProperty(globalThis[Si], a, { configurable: !0, enumerable: !0, value: s, writable: !0 });
    });
  };
}
var oM = (e, t) => {
  t.addMethod(e.expect, "extend", (r, n) => {
    Fr(nM(e, r, n));
  });
};
function aM() {
  Fr(oM), Fr(tM), Fr(eM);
  let e = (n, o) => {
    let { assertionCalls: a } = Xn(e);
    return Ba({ assertionCalls: a + 1, soft: !1 }, e), Ut(n, o);
  };
  Object.assign(e, Ut),
    (e.getState = () => Xn(e)),
    (e.setState = (n) => Ba(n, e)),
    (e.extend = (n) => Ut.extend(e, n)),
    (e.soft = (...n) => {
      let o = e(...n);
      return e.setState({ soft: !0 }), o;
    }),
    (e.unreachable = (n) => {
      O.fail(`expected${n ? ` "${n}" ` : " "}not to be reached`);
    });
  function t(n) {
    let o = () => new Error(`expected number of assertions to be ${n}, but got ${e.getState().assertionCalls}`);
    "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(o(), t),
      e.setState({ expectedAssertionsNumber: n, expectedAssertionsNumberErrorGen: o });
  }
  function r() {
    let n = new Error("expected any number of assertion, but got none");
    "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(n, r),
      e.setState({ isExpectingAssertions: !0, isExpectingAssertionsError: n });
  }
  return (
    Ba(
      {
        assertionCalls: 0,
        isExpectingAssertions: !1,
        isExpectingAssertionsError: null,
        expectedAssertionsNumber: null,
        expectedAssertionsNumberErrorGen: null,
      },
      e
    ),
    nt.addMethod(e, "assertions", t),
    nt.addMethod(e, "hasAssertions", r),
    e.extend(hm),
    e
  );
}
var lh = aM();
Object.defineProperty(globalThis, ss, { value: lh, writable: !0, configurable: !0 });
var Mi = new Set();
function sh(e) {
  return Mi.add(e), () => void Mi.delete(e);
}
var iM = (...e) => {
  let t = EA(...e);
  return ch(t);
};
function uh(e) {
  let t = e ? Sc(e) : Sc();
  return ch(t);
}
function ch(e) {
  let t = Vc(e),
    r = t.mockImplementation.bind(null);
  return (t.mockImplementation = (n) => Vc(r(n))), t;
}
function Vc(e) {
  let t = Jn(e),
    r = t.impl;
  return (
    t.willCall(function (...n) {
      return Mi.forEach((o) => o(e, n)), r == null ? void 0 : r.apply(this, n);
    }),
    e
  );
}
function dh() {
  gn.forEach((e) => e.mockClear());
}
function ph() {
  gn.forEach((e) => e.mockReset());
}
function mh() {
  gn.forEach((e) => e.mockRestore());
}
function lM(e, t = {}) {
  return e;
}
var fh = {};
il(fh, {
  buildQueries: () => wt,
  configure: () => gx,
  createEvent: () => kn,
  findAllByAltText: () => gb,
  findAllByDisplayValue: () => pb,
  findAllByLabelText: () => zh,
  findAllByPlaceholderText: () => eb,
  findAllByRole: () => Mb,
  findAllByTestId: () => Bb,
  findAllByText: () => ib,
  findAllByTitle: () => qb,
  findByAltText: () => vb,
  findByDisplayValue: () => mb,
  findByLabelText: () => Gh,
  findByPlaceholderText: () => tb,
  findByRole: () => xb,
  findByTestId: () => kb,
  findByText: () => lb,
  findByTitle: () => Eb,
  fireEvent: () => ln,
  getAllByAltText: () => bb,
  getAllByDisplayValue: () => cb,
  getAllByLabelText: () => Wh,
  getAllByPlaceholderText: () => Qh,
  getAllByRole: () => Sb,
  getAllByTestId: () => $b,
  getAllByText: () => ob,
  getAllByTitle: () => wb,
  getByAltText: () => yb,
  getByDisplayValue: () => db,
  getByLabelText: () => Kh,
  getByPlaceholderText: () => Zh,
  getByRole: () => Ab,
  getByTestId: () => Ib,
  getByText: () => ab,
  getByTitle: () => Cb,
  getConfig: () => X,
  getDefaultNormalizer: () => ys,
  getElementError: () => Bo,
  getMultipleElementsFoundError: () => ko,
  getNodeText: () => _n,
  getQueriesForElement: () => Fi,
  getRoles: () => kh,
  getSuggestedQuery: () => eo,
  isInaccessible: () => Io,
  logDOM: () => xi,
  logRoles: () => Cx,
  makeFindQuery: () => wr,
  makeGetAllQuery: () => _s,
  makeSingleQuery: () => Rr,
  prettyDOM: () => on,
  prettyFormat: () => ps,
  queries: () => to,
  queryAllByAltText: () => fb,
  queryAllByAttribute: () => Qt,
  queryAllByDisplayValue: () => sb,
  queryAllByLabelText: () => Yh,
  queryAllByPlaceholderText: () => Jh,
  queryAllByRole: () => Ob,
  queryAllByTestId: () => jb,
  queryAllByText: () => rb,
  queryAllByTitle: () => _b,
  queryByAltText: () => hb,
  queryByAttribute: () => Dh,
  queryByDisplayValue: () => ub,
  queryByLabelText: () => Uh,
  queryByPlaceholderText: () => Xh,
  queryByRole: () => Tb,
  queryByTestId: () => Nb,
  queryByText: () => nb,
  queryByTitle: () => Rb,
  queryHelpers: () => Bx,
  screen: () => dj,
  waitFor: () => vs,
  waitForElementToBeRemoved: () => oj,
  within: () => Fi,
  wrapAllByQueryWithSuggestion: () => Be,
  wrapSingleQueryWithSuggestion: () => jt,
});
var ps = De(zw()),
  sM = Object.prototype.toString;
function zc(e) {
  return typeof e == "function" || sM.call(e) === "[object Function]";
}
function uM(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var cM = Math.pow(2, 53) - 1;
function dM(e) {
  var t = uM(e);
  return Math.min(Math.max(t, 0), cM);
}
function Je(e, t) {
  var r = Array,
    n = Object(e);
  if (e == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !zc(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var o = dM(n.length), a = zc(r) ? Object(new r(o)) : new Array(o), i = 0, l; i < o; )
    (l = n[i]), t ? (a[i] = t(l, i)) : (a[i] = l), (i += 1);
  return (a.length = o), a;
}
function rn(e) {
  "@babel/helpers - typeof";
  return (
    (rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    rn(e)
  );
}
function pM(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Gc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, hh(n.key), n);
  }
}
function mM(e, t, r) {
  return t && Gc(e.prototype, t), r && Gc(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fM(e, t, r) {
  return (t = hh(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function hh(e) {
  var t = hM(e, "string");
  return rn(t) === "symbol" ? t : String(t);
}
function hM(e, t) {
  if (rn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bM = (function () {
    function e() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      pM(this, e), fM(this, "items", void 0), (this.items = t);
    }
    return (
      mM(e, [
        {
          key: "add",
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: "clear",
          value: function () {
            this.items = [];
          },
        },
        {
          key: "delete",
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (n) {
                return n !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: "forEach",
          value: function (t) {
            var r = this;
            this.items.forEach(function (n) {
              t(n, n, r);
            });
          },
        },
        {
          key: "has",
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: "size",
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  yM = typeof Set > "u" ? Set : bM;
function xe(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0 ? t : e.tagName.toLowerCase();
}
var gM = {
    article: "article",
    aside: "complementary",
    button: "button",
    datalist: "listbox",
    dd: "definition",
    details: "group",
    dialog: "dialog",
    dt: "term",
    fieldset: "group",
    figure: "figure",
    form: "form",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    header: "banner",
    hr: "separator",
    html: "document",
    legend: "legend",
    li: "listitem",
    math: "math",
    main: "main",
    menu: "list",
    nav: "navigation",
    ol: "list",
    optgroup: "group",
    option: "option",
    output: "status",
    progress: "progressbar",
    section: "region",
    summary: "button",
    table: "table",
    tbody: "rowgroup",
    textarea: "textbox",
    tfoot: "rowgroup",
    td: "cell",
    th: "columnheader",
    thead: "rowgroup",
    tr: "row",
    ul: "list",
  },
  vM = {
    caption: new Set(["aria-label", "aria-labelledby"]),
    code: new Set(["aria-label", "aria-labelledby"]),
    deletion: new Set(["aria-label", "aria-labelledby"]),
    emphasis: new Set(["aria-label", "aria-labelledby"]),
    generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
    insertion: new Set(["aria-label", "aria-labelledby"]),
    paragraph: new Set(["aria-label", "aria-labelledby"]),
    presentation: new Set(["aria-label", "aria-labelledby"]),
    strong: new Set(["aria-label", "aria-labelledby"]),
    subscript: new Set(["aria-label", "aria-labelledby"]),
    superscript: new Set(["aria-label", "aria-labelledby"]),
  };
function _M(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-dropeffect",
    "aria-flowto",
    "aria-grabbed",
    "aria-hidden",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ].some(function (r) {
    var n;
    return e.hasAttribute(r) && !((n = vM[t]) !== null && n !== void 0 && n.has(r));
  });
}
function bh(e, t) {
  return _M(e, t);
}
function RM(e) {
  var t = CM(e);
  if (t === null || t === "presentation") {
    var r = wM(e);
    if (t !== "presentation" || bh(e, r || "")) return r;
  }
  return t;
}
function wM(e) {
  var t = gM[xe(e)];
  if (t !== void 0) return t;
  switch (xe(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href")) return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !bh(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e,
        n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function CM(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0) return r;
  }
  return null;
}
function de(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function yh(e) {
  return de(e) && xe(e) === "caption";
}
function Bn(e) {
  return de(e) && xe(e) === "input";
}
function qM(e) {
  return de(e) && xe(e) === "optgroup";
}
function EM(e) {
  return de(e) && xe(e) === "select";
}
function PM(e) {
  return de(e) && xe(e) === "table";
}
function OM(e) {
  return de(e) && xe(e) === "textarea";
}
function TM(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError("no window available");
  return r;
}
function SM(e) {
  return de(e) && xe(e) === "fieldset";
}
function AM(e) {
  return de(e) && xe(e) === "legend";
}
function MM(e) {
  return de(e) && xe(e) === "slot";
}
function xM(e) {
  return de(e) && e.ownerSVGElement !== void 0;
}
function jM(e) {
  return de(e) && xe(e) === "svg";
}
function NM(e) {
  return xM(e) && xe(e) === "title";
}
function Zn(e, t) {
  if (de(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "),
      n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (o) {
        return n.getElementById(o);
      })
      .filter(function (o) {
        return o !== null;
      });
  }
  return [];
}
function ht(e, t) {
  return de(e) ? t.indexOf(RM(e)) !== -1 : !1;
}
function $M(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function IM(e, t) {
  if (!de(e)) return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true") return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function BM(e) {
  return ht(e, ["button", "combobox", "listbox", "textbox"]) || gh(e, "range");
}
function gh(e, t) {
  if (!de(e)) return !1;
  switch (t) {
    case "range":
      return ht(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Wc(e, t) {
  var r = Je(e.querySelectorAll(t));
  return (
    Zn(e, "aria-owns").forEach(function (n) {
      r.push.apply(r, Je(n.querySelectorAll(t)));
    }),
    r
  );
}
function kM(e) {
  return EM(e) ? e.selectedOptions || Wc(e, "[selected]") : Wc(e, '[aria-selected="true"]');
}
function LM(e) {
  return ht(e, ["none", "presentation"]);
}
function DM(e) {
  return yh(e);
}
function FM(e) {
  return ht(e, [
    "button",
    "cell",
    "checkbox",
    "columnheader",
    "gridcell",
    "heading",
    "label",
    "legend",
    "link",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "option",
    "radio",
    "row",
    "rowheader",
    "switch",
    "tab",
    "tooltip",
    "treeitem",
  ]);
}
function HM(e) {
  return !1;
}
function UM(e) {
  return Bn(e) || OM(e) ? e.value : e.textContent || "";
}
function Kc(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function vh(e) {
  var t = xe(e);
  return (
    t === "button" ||
    (t === "input" && e.getAttribute("type") !== "hidden") ||
    t === "meter" ||
    t === "output" ||
    t === "progress" ||
    t === "select" ||
    t === "textarea"
  );
}
function _h(e) {
  if (vh(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && de(r)) {
        var n = _h(r);
        n !== null && (t = n);
      }
    }),
    t
  );
}
function VM(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : _h(e);
}
function zM(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return Je(t);
  if (!vh(e)) return null;
  var r = e.ownerDocument;
  return Je(r.querySelectorAll("label")).filter(function (n) {
    return VM(n) === e;
  });
}
function GM(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Je(e.childNodes) : t;
}
function Rh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new yM(),
    n = TM(e),
    o = t.compute,
    a = o === void 0 ? "name" : o,
    i = t.computedStyleSupportsPseudoElements,
    l = i === void 0 ? t.getComputedStyle !== void 0 : i,
    u = t.getComputedStyle,
    c = u === void 0 ? n.getComputedStyle.bind(n) : u,
    s = t.hidden,
    d = s === void 0 ? !1 : s;
  function m(y, g) {
    var E = "";
    if (de(y) && l) {
      var C = c(y, "::before"),
        q = Kc(C);
      E = "".concat(q, " ").concat(E);
    }
    var _ = MM(y) ? GM(y) : Je(y.childNodes).concat(Zn(y, "aria-owns"));
    if (
      (_.forEach(function (P) {
        var j = h(P, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
          $ = de(P) ? c(P).getPropertyValue("display") : "inline",
          B = $ !== "inline" ? " " : "";
        E += "".concat(B).concat(j).concat(B);
      }),
      de(y) && l)
    ) {
      var v = c(y, "::after"),
        w = Kc(v);
      E = "".concat(E, " ").concat(w);
    }
    return E.trim();
  }
  function p(y, g) {
    var E = y.getAttributeNode(g);
    return E !== null && !r.has(E) && E.value.trim() !== "" ? (r.add(E), E.value) : null;
  }
  function f(y) {
    return de(y) ? p(y, "title") : null;
  }
  function b(y) {
    if (!de(y)) return null;
    if (SM(y)) {
      r.add(y);
      for (var g = Je(y.childNodes), E = 0; E < g.length; E += 1) {
        var C = g[E];
        if (AM(C)) return h(C, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (PM(y)) {
      r.add(y);
      for (var q = Je(y.childNodes), _ = 0; _ < q.length; _ += 1) {
        var v = q[_];
        if (yh(v)) return h(v, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (jM(y)) {
      r.add(y);
      for (var w = Je(y.childNodes), P = 0; P < w.length; P += 1) {
        var j = w[P];
        if (NM(j)) return j.textContent;
      }
      return null;
    } else if (xe(y) === "img" || xe(y) === "area") {
      var $ = p(y, "alt");
      if ($ !== null) return $;
    } else if (qM(y)) {
      var B = p(y, "label");
      if (B !== null) return B;
    }
    if (Bn(y) && (y.type === "button" || y.type === "submit" || y.type === "reset")) {
      var I = p(y, "value");
      if (I !== null) return I;
      if (y.type === "submit") return "Submit";
      if (y.type === "reset") return "Reset";
    }
    var S = zM(y);
    if (S !== null && S.length !== 0)
      return (
        r.add(y),
        Je(S)
          .map(function (G) {
            return h(G, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
          })
          .filter(function (G) {
            return G.length > 0;
          })
          .join(" ")
      );
    if (Bn(y) && y.type === "image") {
      var k = p(y, "alt");
      if (k !== null) return k;
      var U = p(y, "title");
      return U !== null ? U : "Submit Query";
    }
    if (ht(y, ["button"])) {
      var W = m(y, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (W !== "") return W;
    }
    return null;
  }
  function h(y, g) {
    if (r.has(y)) return "";
    if (!d && IM(y, c) && !g.isReferenced) return r.add(y), "";
    var E = de(y) ? y.getAttributeNode("aria-labelledby") : null,
      C = E !== null && !r.has(E) ? Zn(y, "aria-labelledby") : [];
    if (a === "name" && !g.isReferenced && C.length > 0)
      return (
        r.add(E),
        C.map(function ($) {
          return h($, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !0, recursion: !1 });
        }).join(" ")
      );
    var q = g.recursion && BM(y) && a === "name";
    if (!q) {
      var _ = ((de(y) && y.getAttribute("aria-label")) || "").trim();
      if (_ !== "" && a === "name") return r.add(y), _;
      if (!LM(y)) {
        var v = b(y);
        if (v !== null) return r.add(y), v;
      }
    }
    if (ht(y, ["menu"])) return r.add(y), "";
    if (q || g.isEmbeddedInLabel || g.isReferenced) {
      if (ht(y, ["combobox", "listbox"])) {
        r.add(y);
        var w = kM(y);
        return w.length === 0
          ? Bn(y)
            ? y.value
            : ""
          : Je(w)
              .map(function ($) {
                return h($, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1, recursion: !0 });
              })
              .join(" ");
      }
      if (gh(y, "range"))
        return (
          r.add(y),
          y.hasAttribute("aria-valuetext")
            ? y.getAttribute("aria-valuetext")
            : y.hasAttribute("aria-valuenow")
            ? y.getAttribute("aria-valuenow")
            : y.getAttribute("value") || ""
        );
      if (ht(y, ["textbox"])) return r.add(y), UM(y);
    }
    if (FM(y) || (de(y) && g.isReferenced) || DM(y) || HM()) {
      var P = m(y, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 });
      if (P !== "") return r.add(y), P;
    }
    if (y.nodeType === y.TEXT_NODE) return r.add(y), y.textContent || "";
    if (g.recursion) return r.add(y), m(y, { isEmbeddedInLabel: g.isEmbeddedInLabel, isReferenced: !1 });
    var j = f(y);
    return j !== null ? (r.add(y), j) : (r.add(y), "");
  }
  return $M(h(e, { isEmbeddedInLabel: !1, isReferenced: a === "description", recursion: !1 }));
}
function nn(e) {
  "@babel/helpers - typeof";
  return (
    (nn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    nn(e)
  );
}
function Yc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yc(Object(r), !0).forEach(function (n) {
          WM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Yc(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function WM(e, t, r) {
  return (t = KM(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function KM(e) {
  var t = YM(e, "string");
  return nn(t) === "symbol" ? t : String(t);
}
function YM(e, t) {
  if (nn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = Zn(e, "aria-describedby")
      .map(function (o) {
        return Rh(o, Jc(Jc({}, t), {}, { compute: "description" }));
      })
      .join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function JM(e) {
  return ht(e, [
    "caption",
    "code",
    "deletion",
    "emphasis",
    "generic",
    "insertion",
    "paragraph",
    "presentation",
    "strong",
    "subscript",
    "superscript",
  ]);
}
function ms(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return JM(e) ? "" : Rh(e, t);
}
var He = De(ME()),
  XM = De(xE());
function Ch(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var QM = (e, t, r, n, o, a, i) => {
    let l = n + r.indent,
      u = r.colors;
    return e
      .map((c) => {
        let s = t[c],
          d = i(s, r, l, o, a);
        return (
          typeof s != "string" &&
            (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + l + d + r.spacingOuter + n),
            (d = "{" + d + "}")),
          r.spacingInner + n + u.prop.open + c + u.prop.close + "=" + u.value.open + d + u.value.close
        );
      })
      .join("");
  },
  ZM = 3,
  ex = (e, t, r, n, o, a) =>
    e
      .map((i) => {
        let l = typeof i == "string" ? qh(i, t) : a(i, t, r, n, o);
        return l === "" && typeof i == "object" && i !== null && i.nodeType !== ZM ? "" : t.spacingOuter + r + l;
      })
      .join(""),
  qh = (e, t) => {
    let r = t.colors.content;
    return r.open + Ch(e) + r.close;
  },
  tx = (e, t) => {
    let r = t.colors.comment;
    return r.open + "<!--" + Ch(e) + "-->" + r.close;
  },
  rx = (e, t, r, n, o) => {
    let a = n.colors.tag;
    return (
      a.open +
      "<" +
      e +
      (t && a.close + t + n.spacingOuter + o + a.open) +
      (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") +
      ">" +
      a.close
    );
  },
  nx = (e, t) => {
    let r = t.colors.tag;
    return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
  },
  ox = 1,
  Eh = 3,
  Ph = 8,
  Oh = 11,
  ax = /^((HTML|SVG)\w*)?Element$/,
  Th = (e) => {
    let { tagName: t } = e;
    return !!((typeof t == "string" && t.includes("-")) || (typeof e.hasAttribute == "function" && e.hasAttribute("is")));
  },
  ix = (e) => {
    let t = e.constructor.name,
      { nodeType: r } = e;
    return (
      (r === ox && (ax.test(t) || Th(e))) ||
      (r === Eh && t === "Text") ||
      (r === Ph && t === "Comment") ||
      (r === Oh && t === "DocumentFragment")
    );
  };
function lx(e) {
  return e.nodeType === Eh;
}
function sx(e) {
  return e.nodeType === Ph;
}
function La(e) {
  return e.nodeType === Oh;
}
function ux(e) {
  return {
    test: (t) => {
      var r;
      return ((t == null || (r = t.constructor) == null ? void 0 : r.name) || Th(t)) && ix(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (lx(t)) return qh(t.data, r);
      if (sx(t)) return tx(t.data, r);
      let l = La(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth
        ? nx(l, r)
        : rx(
            l,
            QM(
              La(t)
                ? []
                : Array.from(t.attributes)
                    .map((u) => u.name)
                    .sort(),
              La(t) ? {} : Array.from(t.attributes).reduce((u, c) => ((u[c.name] = c.value), u), {}),
              r,
              n + r.indent,
              o,
              a,
              i
            ),
            ex(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i),
            r,
            n
          );
    },
  };
}
var Sh = null,
  fs = null,
  hs = null;
try {
  let e = module && module.require;
  (fs = e.call(module, "fs").readFileSync), (hs = e.call(module, "@babel/code-frame").codeFrameColumns), (Sh = e.call(module, "chalk"));
} catch {}
function cx(e) {
  let t = e.indexOf("(") + 1,
    r = e.indexOf(")"),
    n = e.slice(t, r),
    o = n.split(":"),
    [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)],
    u = "";
  try {
    u = fs(a, "utf-8");
  } catch {
    return "";
  }
  let c = hs(u, { start: { line: i, column: l } }, { highlightCode: !0, linesBelow: 0 });
  return (
    Sh.dim(n) +
    `
` +
    c +
    `
`
  );
}
function dx() {
  if (!fs || !hs) return "";
  let e = new Error().stack
    .split(
      `
`
    )
    .slice(1)
    .find((t) => !t.includes("node_modules/"));
  return cx(e);
}
var Ah = 3;
function Da() {
  return typeof jest < "u" && jest !== null
    ? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, "clock")
    : !1;
}
function bs() {
  if (typeof window > "u") throw new Error("Could not find default container");
  return window.document;
}
function Mh(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error("It looks like the window object is not available for the provided node.")
    : e.then instanceof Function
    ? new Error(
        "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
      )
    : Array.isArray(e)
    ? new Error(
        "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
      )
    : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function"
    ? new Error(
        "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
      )
    : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Rt(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? (r === null ? "null" : r.constructor.name) : typeof r;
  }
}
var px = () => {
    if (typeof process > "u") return !1;
    let e;
    try {
      var t;
      let r = (t = process.env) == null ? void 0 : t.COLORS;
      r && (e = JSON.parse(r));
    } catch {}
    return typeof e == "boolean" ? e : process.versions !== void 0 && process.versions.node !== void 0;
  },
  { DOMCollection: mx } = ps.plugins,
  fx = 1,
  hx = 8;
function bx(e) {
  return e.nodeType !== hx && (e.nodeType !== fx || !e.matches(X().defaultIgnore));
}
function on(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = bs().body),
    typeof t != "number" && (t = (typeof process < "u" && typeof process.env < "u" && {}.DEBUG_PRINT_LIMIT) || 7e3),
    t === 0)
  )
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if ((n === "object" ? (n = e.constructor.name) : (e = {}), !("outerHTML" in e)))
    throw new TypeError("Expected an element or document but got " + n);
  let { filterNode: o = bx, ...a } = r,
    i = ps.format(e, { plugins: [ux(o), mx], printFunctionName: !1, highlight: px(), ...a });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
var xi = function () {
    let e = dx();
    console.log(
      e
        ? on(...arguments) +
            `

` +
            e
        : on(...arguments)
    );
  },
  Vt = {
    testIdAttribute: "data-testid",
    asyncUtilTimeout: 1e3,
    asyncWrapper: (e) => e(),
    unstable_advanceTimersWrapper: (e) => e(),
    eventWrapper: (e) => e(),
    defaultHidden: !1,
    defaultIgnore: "script, style",
    showOriginalStackTrace: !1,
    throwSuggestions: !1,
    getElementError(e, t) {
      let r = on(t),
        n = new Error(
          [
            e,
            "Ignored nodes: comments, " +
              Vt.defaultIgnore +
              `
` +
              r,
          ].filter(Boolean).join(`

`)
        );
      return (n.name = "TestingLibraryElementError"), n;
    },
    _disableExpensiveErrorDiagnostics: !1,
    computedStyleSupportsPseudoElements: !1,
  };
function yx(e) {
  try {
    return (Vt._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    Vt._disableExpensiveErrorDiagnostics = !1;
  }
}
function gx(e) {
  typeof e == "function" && (e = e(Vt)), (Vt = { ...Vt, ...e });
}
function X() {
  return Vt;
}
var vx = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function xh(e) {
  return vx.includes(e.nodeName.toLowerCase())
    ? ""
    : e.nodeType === Ah
    ? e.textContent
    : Array.from(e.childNodes)
        .map((t) => xh(t))
        .join("");
}
function ji(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? (t = xh(e)) : (t = e.value || e.textContent), t;
}
function jh(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!_x(e)) return [];
  let r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function _x(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || (e.tagName === "INPUT" && e.getAttribute("type") !== "hidden");
}
function Nh(e, t, r) {
  let { selector: n = "*" } = r === void 0 ? {} : r,
    o = t.getAttribute("aria-labelledby"),
    a = o ? o.split(" ") : [];
  return a.length
    ? a.map((i) => {
        let l = e.querySelector('[id="' + i + '"]');
        return l ? { content: ji(l), formControl: null } : { content: "", formControl: null };
      })
    : Array.from(jh(t)).map((i) => {
        let l = ji(i),
          u = Array.from(i.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((c) => c.matches(n))[0];
        return { content: l, formControl: u };
      });
}
function $h(e) {
  if (e == null)
    throw new Error("It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?");
}
function Mr(e, t, r, n) {
  if (typeof e != "string") return !1;
  $h(r);
  let o = n(e);
  return typeof r == "string" || typeof r == "number"
    ? o.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == "function"
    ? r(o, t)
    : Ih(r, o);
}
function yt(e, t, r, n) {
  if (typeof e != "string") return !1;
  $h(r);
  let o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? Ih(r, o) : o === String(r);
}
function ys(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return (o = t ? o.trim() : o), (o = r ? o.replace(/\s+/g, " ") : o), o;
  };
}
function Xt(e) {
  let { trim: t, collapseWhitespace: r, normalizer: n } = e;
  if (!n) return ys({ trim: t, collapseWhitespace: r });
  if (typeof t < "u" || typeof r < "u")
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
    );
  return n;
}
function Ih(e, t) {
  let r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        "To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."
      ),
      (e.lastIndex = 0)),
    r
  );
}
function _n(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]")
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === Ah && !!t.textContent)
        .map((t) => t.textContent)
        .join("");
}
var Rx = wx(He.elementRoles);
function Bh(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function Io(e, t) {
  t === void 0 && (t = {});
  let { isSubtreeInaccessible: r = Bh } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden") return !0;
  let n = e;
  for (; n; ) {
    if (r(n)) return !0;
    n = n.parentElement;
  }
  return !1;
}
function gs(e) {
  for (let { match: t, roles: r } of Rx) if (t(e)) return [...r];
  return [];
}
function wx(e) {
  function t(i) {
    let { name: l, attributes: u } = i;
    return (
      "" +
      l +
      u
        .map((c) => {
          let { name: s, value: d, constraints: m = [] } = c,
            p = m.indexOf("undefined") !== -1,
            f = m.indexOf("set") !== -1;
          return typeof d < "u"
            ? "[" + s + '="' + d + '"]'
            : p
            ? ":not([" + s + "])"
            : f
            ? "[" + s + "]:not([" + s + '=""])'
            : "[" + s + "]";
        })
        .join("")
    );
  }
  function r(i) {
    let { attributes: l = [] } = i;
    return l.length;
  }
  function n(i, l) {
    let { specificity: u } = i,
      { specificity: c } = l;
    return c - u;
  }
  function o(i) {
    let { attributes: l = [] } = i,
      u = l.findIndex((s) => s.value && s.name === "type" && s.value === "text");
    u >= 0 && (l = [...l.slice(0, u), ...l.slice(u + 1)]);
    let c = t({ ...i, attributes: l });
    return (s) => (u >= 0 && s.type !== "text" ? !1 : s.matches(c));
  }
  let a = [];
  for (let [i, l] of e.entries()) a = [...a, { match: o(i), roles: Array.from(l), specificity: r(i) }];
  return a.sort(n);
}
function kh(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e)
    .filter((o) => (r === !1 ? Io(o) === !1 : !0))
    .reduce((o, a) => {
      let i = [];
      return (
        a.hasAttribute("role") ? (i = a.getAttribute("role").split(" ").slice(0, 1)) : (i = gs(a)),
        i.reduce((l, u) => (Array.isArray(l[u]) ? { ...l, [u]: [...l[u], a] } : { ...l, [u]: [a] }), o)
      );
    }, {});
}
function Lh(e, t) {
  let { hidden: r, includeDescription: n } = t,
    o = kh(e, { hidden: r });
  return Object.entries(o)
    .filter((a) => {
      let [i] = a;
      return i !== "generic";
    })
    .map((a) => {
      let [i, l] = a,
        u = "-".repeat(50),
        c = l.map((s) => {
          let d =
              'Name "' +
              ms(s, { computedStyleSupportsPseudoElements: X().computedStyleSupportsPseudoElements }) +
              `":
`,
            m = on(s.cloneNode(!1));
          if (n) {
            let p =
              'Description "' +
              wh(s, { computedStyleSupportsPseudoElements: X().computedStyleSupportsPseudoElements }) +
              `":
`;
            return "" + d + p + m;
          }
          return "" + d + m;
        }).join(`

`);
      return (
        i +
        `:

` +
        c +
        `

` +
        u
      );
    }).join(`
`);
}
var Cx = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(Lh(e, { hidden: r }));
};
function qx(e) {
  return e.tagName === "OPTION" ? e.selected : Rn(e, "aria-selected");
}
function Ex(e) {
  return e.getAttribute("aria-busy") === "true";
}
function Px(e) {
  if (!("indeterminate" in e && e.indeterminate)) return "checked" in e ? e.checked : Rn(e, "aria-checked");
}
function Ox(e) {
  return Rn(e, "aria-pressed");
}
function Tx(e) {
  var t, r;
  return (t = (r = Rn(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function Sx(e) {
  return Rn(e, "aria-expanded");
}
function Rn(e, t) {
  let r = e.getAttribute(t);
  if (r === "true") return !0;
  if (r === "false") return !1;
}
function Ax(e) {
  let t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (e.getAttribute("aria-level") && Number(e.getAttribute("aria-level"))) || t[e.tagName];
}
function Mx(e) {
  let t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function xx(e) {
  let t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function jx(e) {
  let t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function Nx(e) {
  let t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
var Xc = ys();
function $x(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Qc(e) {
  return new RegExp($x(e.toLowerCase()), "i");
}
function Ct(e, t, r, n) {
  let { variant: o, name: a } = n,
    i = "",
    l = {},
    u = [["Role", "TestId"].includes(e) ? r : Qc(r)];
  a && (l.name = Qc(a)),
    e === "Role" &&
      Io(t) &&
      ((l.hidden = !0),
      (i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(l).length > 0 && u.push(l);
  let c = o + "By" + e;
  return {
    queryName: e,
    queryMethod: c,
    queryArgs: u,
    variant: o,
    warning: i,
    toString() {
      i && console.warn(i);
      let [s, d] = u;
      return (
        (s = typeof s == "string" ? "'" + s + "'" : s),
        (d = d
          ? ", { " +
            Object.entries(d)
              .map((m) => {
                let [p, f] = m;
                return p + ": " + f;
              })
              .join(", ") +
            " }"
          : ""),
        c + "(" + s + d + ")"
      );
    },
  };
}
function qt(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function eo(e, t, r) {
  var n, o;
  if ((t === void 0 && (t = "get"), e.matches(X().defaultIgnore))) return;
  let a = (n = e.getAttribute("role")) != null ? n : (o = gs(e)) == null ? void 0 : o[0];
  if (a !== "generic" && qt("Role", r, a))
    return Ct("Role", e, a, { variant: t, name: ms(e, { computedStyleSupportsPseudoElements: X().computedStyleSupportsPseudoElements }) });
  let i = Nh(document, e)
    .map((m) => m.content)
    .join(" ");
  if (qt("LabelText", r, i)) return Ct("LabelText", e, i, { variant: t });
  let l = e.getAttribute("placeholder");
  if (qt("PlaceholderText", r, l)) return Ct("PlaceholderText", e, l, { variant: t });
  let u = Xc(_n(e));
  if (qt("Text", r, u)) return Ct("Text", e, u, { variant: t });
  if (qt("DisplayValue", r, e.value)) return Ct("DisplayValue", e, Xc(e.value), { variant: t });
  let c = e.getAttribute("alt");
  if (qt("AltText", r, c)) return Ct("AltText", e, c, { variant: t });
  let s = e.getAttribute("title");
  if (qt("Title", r, s)) return Ct("Title", e, s, { variant: t });
  let d = e.getAttribute(X().testIdAttribute);
  if (qt("TestId", r, d)) return Ct("TestId", e, d, { variant: t });
}
function Pn(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Ix(e, t) {
  let {
    container: r = bs(),
    timeout: n = X().asyncUtilTimeout,
    showOriginalStackTrace: o = X().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: l = (c) => (Object.defineProperty(c, "message", { value: X().getElementError(c.message, r).message }), c),
    mutationObserverOptions: u = { subtree: !0, childList: !0, attributes: !0, characterData: !0 },
  } = t;
  if (typeof e != "function") throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (c, s) => {
    let d,
      m,
      p,
      f = !1,
      b = "idle",
      h = setTimeout(q, n),
      y = Da();
    if (y) {
      let { unstable_advanceTimersWrapper: _ } = X();
      for (C(); !f; ) {
        if (!Da()) {
          let v = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
          );
          o || Pn(v, a), s(v);
          return;
        }
        if (
          (await _(async () => {
            jest.advanceTimersByTime(i);
          }),
          f)
        )
          break;
        C();
      }
    } else {
      try {
        Rt(r);
      } catch (v) {
        s(v);
        return;
      }
      m = setInterval(E, i);
      let { MutationObserver: _ } = Mh(r);
      (p = new _(E)), p.observe(r, u), C();
    }
    function g(_, v) {
      (f = !0), clearTimeout(h), y || (clearInterval(m), p.disconnect()), _ ? s(_) : c(v);
    }
    function E() {
      if (Da()) {
        let _ = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
        );
        return o || Pn(_, a), s(_);
      } else return C();
    }
    function C() {
      if (b !== "pending")
        try {
          let _ = yx(e);
          typeof (_ == null ? void 0 : _.then) == "function"
            ? ((b = "pending"),
              _.then(
                (v) => {
                  (b = "resolved"), g(null, v);
                },
                (v) => {
                  (b = "rejected"), (d = v);
                }
              ))
            : g(null, _);
        } catch (_) {
          d = _;
        }
    }
    function q() {
      let _;
      d ? ((_ = d), !o && _.name === "TestingLibraryElementError" && Pn(_, a)) : ((_ = new Error("Timed out in waitFor.")), o || Pn(_, a)),
        g(l(_), null);
    }
  });
}
function vs(e, t) {
  let r = new Error("STACK_TRACE_MESSAGE");
  return X().asyncWrapper(() => Ix(e, { stackTraceError: r, ...t }));
}
function Bo(e, t) {
  return X().getElementError(e, t);
}
function ko(e, t) {
  return Bo(
    e +
      "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",
    t
  );
}
function Qt(e, t, r, n) {
  let { exact: o = !0, collapseWhitespace: a, trim: i, normalizer: l } = n === void 0 ? {} : n,
    u = o ? yt : Mr,
    c = Xt({ collapseWhitespace: a, trim: i, normalizer: l });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((s) => u(s.getAttribute(e), s, r, c));
}
function Dh(e, t, r, n) {
  let o = Qt(e, t, r, n);
  if (o.length > 1) throw ko("Found multiple elements by [" + e + "=" + r + "]", t);
  return o[0] || null;
}
function Rr(e, t) {
  return function (r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
    let i = e(r, ...o);
    if (i.length > 1) {
      let l = i.map((u) => Bo(null, u).message).join(`

`);
      throw ko(
        t(r, ...o) +
          `

Here are the matching elements:

` +
          l,
        r
      );
    }
    return i[0] || null;
  };
}
function Fh(e, t) {
  return X().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t
  );
}
function _s(e, t) {
  return function (r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
    let i = e(r, ...o);
    if (!i.length) throw X().getElementError(t(r, ...o), r);
    return i;
  };
}
function wr(e) {
  return (t, r, n, o) => vs(() => e(t, r, n), { container: t, ...o });
}
var jt = (e, t, r) =>
    function (n) {
      for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
      let l = e(n, ...a),
        [{ suggest: u = X().throwSuggestions } = {}] = a.slice(-1);
      if (l && u) {
        let c = eo(l, r);
        if (c && !t.endsWith(c.queryName)) throw Fh(c.toString(), n);
      }
      return l;
    },
  Be = (e, t, r) =>
    function (n) {
      for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
      let l = e(n, ...a),
        [{ suggest: u = X().throwSuggestions } = {}] = a.slice(-1);
      if (l.length && u) {
        let c = [
          ...new Set(
            l.map((s) => {
              var d;
              return (d = eo(s, r)) == null ? void 0 : d.toString();
            })
          ),
        ];
        if (c.length === 1 && !t.endsWith(eo(l[0], r).queryName)) throw Fh(c[0], n);
      }
      return l;
    };
function wt(e, t, r) {
  let n = jt(Rr(e, t), e.name, "query"),
    o = _s(e, r),
    a = Rr(o, t),
    i = jt(a, e.name, "get"),
    l = Be(o, e.name.replace("query", "get"), "getAll"),
    u = wr(Be(o, e.name, "findAll")),
    c = wr(jt(a, e.name, "find"));
  return [n, l, i, u, c];
}
var Bx = Object.freeze({
  __proto__: null,
  getElementError: Bo,
  wrapAllByQueryWithSuggestion: Be,
  wrapSingleQueryWithSuggestion: jt,
  getMultipleElementsFoundError: ko,
  queryAllByAttribute: Qt,
  queryByAttribute: Dh,
  makeSingleQuery: Rr,
  makeGetAllQuery: _s,
  makeFindQuery: wr,
  buildQueries: wt,
});
function kx(e) {
  return Array.from(e.querySelectorAll("label,input"))
    .map((t) => ({ node: t, textToMatch: ji(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
var Lx = function (e, t, r) {
    let { exact: n = !0, trim: o, collapseWhitespace: a, normalizer: i } = r === void 0 ? {} : r,
      l = n ? yt : Mr,
      u = Xt({ collapseWhitespace: a, trim: o, normalizer: i });
    return kx(e)
      .filter((c) => {
        let { node: s, textToMatch: d } = c;
        return l(d, s, t, u);
      })
      .map((c) => {
        let { node: s } = c;
        return s;
      });
  },
  an = function (e, t, r) {
    let { selector: n = "*", exact: o = !0, collapseWhitespace: a, trim: i, normalizer: l } = r === void 0 ? {} : r;
    Rt(e);
    let u = o ? yt : Mr,
      c = Xt({ collapseWhitespace: a, trim: i, normalizer: l }),
      s = Array.from(e.querySelectorAll("*"))
        .filter((d) => jh(d).length || d.hasAttribute("aria-labelledby"))
        .reduce((d, m) => {
          let p = Nh(e, m, { selector: n });
          p.filter((b) => !!b.formControl).forEach((b) => {
            u(b.content, b.formControl, t, c) && b.formControl && d.push(b.formControl);
          });
          let f = p.filter((b) => !!b.content).map((b) => b.content);
          return (
            u(f.join(" "), m, t, c) && d.push(m),
            f.length > 1 &&
              f.forEach((b, h) => {
                u(b, m, t, c) && d.push(m);
                let y = [...f];
                y.splice(h, 1), y.length > 1 && u(y.join(" "), m, t, c) && d.push(m);
              }),
            d
          );
        }, [])
        .concat(Qt("aria-label", e, t, { exact: o, normalizer: c }));
    return Array.from(new Set(s)).filter((d) => d.matches(n));
  },
  Gt = function (e, t) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
    let a = an(e, t, ...n);
    if (!a.length) {
      let i = Lx(e, t, ...n);
      if (i.length) {
        let l = i.map((u) => Dx(e, u)).filter((u) => !!u);
        throw l.length
          ? X().getElementError(
              l.map(
                (u) =>
                  "Found a label with the text of: " +
                  t +
                  ", however the element associated with this label (<" +
                  u +
                  " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" +
                  u +
                  " />, you can use aria-label or aria-labelledby instead."
              ).join(`

`),
              e
            )
          : X().getElementError(
              "Found a label with the text of: " +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e
            );
      } else throw X().getElementError("Unable to find a label with the text of: " + t, e);
    }
    return a;
  };
function Dx(e, t) {
  let r = t.getAttribute("for");
  if (!r) return null;
  let n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
var Hh = (e, t) => "Found multiple elements with the text of: " + t,
  Uh = jt(Rr(an, Hh), an.name, "query"),
  Vh = Rr(Gt, Hh),
  zh = wr(Be(Gt, Gt.name, "findAll")),
  Gh = wr(jt(Vh, Gt.name, "find")),
  Wh = Be(Gt, Gt.name, "getAll"),
  Kh = jt(Vh, Gt.name, "get"),
  Yh = Be(an, an.name, "queryAll"),
  Ni = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return Rt(t[0]), Qt("placeholder", ...t);
  },
  Fx = (e, t) => "Found multiple elements with the placeholder text of: " + t,
  Hx = (e, t) => "Unable to find an element with the placeholder text of: " + t,
  Jh = Be(Ni, Ni.name, "queryAll"),
  [Xh, Qh, Zh, eb, tb] = wt(Ni, Fx, Hx),
  $i = function (e, t, r) {
    let {
      selector: n = "*",
      exact: o = !0,
      collapseWhitespace: a,
      trim: i,
      ignore: l = X().defaultIgnore,
      normalizer: u,
    } = r === void 0 ? {} : r;
    Rt(e);
    let c = o ? yt : Mr,
      s = Xt({ collapseWhitespace: a, trim: i, normalizer: u }),
      d = [];
    return (
      typeof e.matches == "function" && e.matches(n) && (d = [e]),
      [...d, ...Array.from(e.querySelectorAll(n))].filter((m) => !l || !m.matches(l)).filter((m) => c(_n(m), m, t, s))
    );
  },
  Ux = (e, t) => "Found multiple elements with the text: " + t,
  Vx = function (e, t, r) {
    r === void 0 && (r = {});
    let { collapseWhitespace: n, trim: o, normalizer: a, selector: i } = r,
      l = Xt({ collapseWhitespace: n, trim: o, normalizer: a })(t.toString()),
      u = l !== t.toString(),
      c = (i ?? "*") !== "*";
    return (
      "Unable to find an element with the text: " +
      (u ? l + " (normalized from '" + t + "')" : t) +
      (c ? ", which matches selector '" + i + "'" : "") +
      ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
    );
  },
  rb = Be($i, $i.name, "queryAll"),
  [nb, ob, ab, ib, lb] = wt($i, Ux, Vx),
  Ii = function (e, t, r) {
    let { exact: n = !0, collapseWhitespace: o, trim: a, normalizer: i } = r === void 0 ? {} : r;
    Rt(e);
    let l = n ? yt : Mr,
      u = Xt({ collapseWhitespace: o, trim: a, normalizer: i });
    return Array.from(e.querySelectorAll("input,textarea,select")).filter((c) =>
      c.tagName === "SELECT"
        ? Array.from(c.options)
            .filter((s) => s.selected)
            .some((s) => l(_n(s), s, t, u))
        : l(c.value, c, t, u)
    );
  },
  zx = (e, t) => "Found multiple elements with the display value: " + t + ".",
  Gx = (e, t) => "Unable to find an element with the display value: " + t + ".",
  sb = Be(Ii, Ii.name, "queryAll"),
  [ub, cb, db, pb, mb] = wt(Ii, zx, Gx),
  Wx = /^(img|input|area|.+-.+)$/i,
  Bi = function (e, t, r) {
    return r === void 0 && (r = {}), Rt(e), Qt("alt", e, t, r).filter((n) => Wx.test(n.tagName));
  },
  Kx = (e, t) => "Found multiple elements with the alt text: " + t,
  Yx = (e, t) => "Unable to find an element with the alt text: " + t,
  fb = Be(Bi, Bi.name, "queryAll"),
  [hb, bb, yb, gb, vb] = wt(Bi, Kx, Yx),
  Jx = (e) => {
    var t;
    return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
  },
  ki = function (e, t, r) {
    let { exact: n = !0, collapseWhitespace: o, trim: a, normalizer: i } = r === void 0 ? {} : r;
    Rt(e);
    let l = n ? yt : Mr,
      u = Xt({ collapseWhitespace: o, trim: a, normalizer: i });
    return Array.from(e.querySelectorAll("[title], svg > title")).filter(
      (c) => l(c.getAttribute("title"), c, t, u) || (Jx(c) && l(_n(c), c, t, u))
    );
  },
  Xx = (e, t) => "Found multiple elements with the title: " + t + ".",
  Qx = (e, t) => "Unable to find an element with the title: " + t + ".",
  _b = Be(ki, ki.name, "queryAll"),
  [Rb, wb, Cb, qb, Eb] = wt(ki, Xx, Qx),
  Li = function (e, t, r) {
    let {
      hidden: n = X().defaultHidden,
      name: o,
      description: a,
      queryFallbacks: i = !1,
      selected: l,
      busy: u,
      checked: c,
      pressed: s,
      current: d,
      level: m,
      expanded: p,
      value: { now: f, min: b, max: h, text: y } = {},
    } = r === void 0 ? {} : r;
    if ((Rt(e), l !== void 0)) {
      var g;
      if (((g = He.roles.get(t)) == null ? void 0 : g.props["aria-selected"]) === void 0)
        throw new Error('"aria-selected" is not supported on role "' + t + '".');
    }
    if (u !== void 0) {
      var E;
      if (((E = He.roles.get(t)) == null ? void 0 : E.props["aria-busy"]) === void 0)
        throw new Error('"aria-busy" is not supported on role "' + t + '".');
    }
    if (c !== void 0) {
      var C;
      if (((C = He.roles.get(t)) == null ? void 0 : C.props["aria-checked"]) === void 0)
        throw new Error('"aria-checked" is not supported on role "' + t + '".');
    }
    if (s !== void 0) {
      var q;
      if (((q = He.roles.get(t)) == null ? void 0 : q.props["aria-pressed"]) === void 0)
        throw new Error('"aria-pressed" is not supported on role "' + t + '".');
    }
    if (d !== void 0) {
      var _;
      if (((_ = He.roles.get(t)) == null ? void 0 : _.props["aria-current"]) === void 0)
        throw new Error('"aria-current" is not supported on role "' + t + '".');
    }
    if (m !== void 0 && t !== "heading") throw new Error('Role "' + t + '" cannot have "level" property.');
    if (f !== void 0) {
      var v;
      if (((v = He.roles.get(t)) == null ? void 0 : v.props["aria-valuenow"]) === void 0)
        throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
    }
    if (h !== void 0) {
      var w;
      if (((w = He.roles.get(t)) == null ? void 0 : w.props["aria-valuemax"]) === void 0)
        throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
    }
    if (b !== void 0) {
      var P;
      if (((P = He.roles.get(t)) == null ? void 0 : P.props["aria-valuemin"]) === void 0)
        throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
    }
    if (y !== void 0) {
      var j;
      if (((j = He.roles.get(t)) == null ? void 0 : j.props["aria-valuetext"]) === void 0)
        throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
    }
    if (p !== void 0) {
      var $;
      if ((($ = He.roles.get(t)) == null ? void 0 : $.props["aria-expanded"]) === void 0)
        throw new Error('"aria-expanded" is not supported on role "' + t + '".');
    }
    let B = new WeakMap();
    function I(S) {
      return B.has(S) || B.set(S, Bh(S)), B.get(S);
    }
    return Array.from(e.querySelectorAll(Zx(t)))
      .filter((S) => {
        if (S.hasAttribute("role")) {
          let k = S.getAttribute("role");
          if (i)
            return k
              .split(" ")
              .filter(Boolean)
              .some((W) => W === t);
          let [U] = k.split(" ");
          return U === t;
        }
        return gs(S).some((k) => k === t);
      })
      .filter((S) => {
        if (l !== void 0) return l === qx(S);
        if (u !== void 0) return u === Ex(S);
        if (c !== void 0) return c === Px(S);
        if (s !== void 0) return s === Ox(S);
        if (d !== void 0) return d === Tx(S);
        if (p !== void 0) return p === Sx(S);
        if (m !== void 0) return m === Ax(S);
        if (f !== void 0 || h !== void 0 || b !== void 0 || y !== void 0) {
          let U = !0;
          if (
            (f !== void 0 && U && (U = f === Mx(S)),
            h !== void 0 && U && (U = h === xx(S)),
            b !== void 0 && U && (U = b === jx(S)),
            y !== void 0)
          ) {
            var k;
            U && (U = yt((k = Nx(S)) != null ? k : null, S, y, (W) => W));
          }
          return U;
        }
        return !0;
      })
      .filter((S) =>
        o === void 0 ? !0 : yt(ms(S, { computedStyleSupportsPseudoElements: X().computedStyleSupportsPseudoElements }), S, o, (k) => k)
      )
      .filter((S) =>
        a === void 0 ? !0 : yt(wh(S, { computedStyleSupportsPseudoElements: X().computedStyleSupportsPseudoElements }), S, a, (k) => k)
      )
      .filter((S) => (n === !1 ? Io(S, { isSubtreeInaccessible: I }) === !1 : !0));
  };
function Zx(e) {
  var t;
  let r = '*[role~="' + e + '"]',
    n = (t = He.roleElements.get(e)) != null ? t : new Set(),
    o = new Set(
      Array.from(n).map((a) => {
        let { name: i } = a;
        return i;
      })
    );
  return [r].concat(Array.from(o)).join(",");
}
var Pb = (e) => {
    let t = "";
    return e === void 0 ? (t = "") : typeof e == "string" ? (t = ' and name "' + e + '"') : (t = " and name `" + e + "`"), t;
  },
  ej = function (e, t, r) {
    let { name: n } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + Pb(n);
  },
  tj = function (e, t, r) {
    let { hidden: n = X().defaultHidden, name: o, description: a } = r === void 0 ? {} : r;
    if (X()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + Pb(o);
    let i = "";
    Array.from(e.children).forEach((s) => {
      i += Lh(s, { hidden: n, includeDescription: a !== void 0 });
    });
    let l;
    i.length === 0
      ? n === !1
        ? (l =
            "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole")
        : (l = "There are no available roles.")
      : (l = (
          `
Here are the ` +
          (n === !1 ? "accessible" : "available") +
          ` roles:

  ` +
          i
            .replace(
              /\n/g,
              `
  `
            )
            .replace(
              /\n\s\s\n/g,
              `

`
            ) +
          `
`
        ).trim());
    let u = "";
    o === void 0 ? (u = "") : typeof o == "string" ? (u = ' and name "' + o + '"') : (u = " and name `" + o + "`");
    let c = "";
    return (
      a === void 0 ? (c = "") : typeof a == "string" ? (c = ' and description "' + a + '"') : (c = " and description `" + a + "`"),
      (
        `
Unable to find an ` +
        (n === !1 ? "accessible " : "") +
        'element with the role "' +
        t +
        '"' +
        u +
        c +
        `

` +
        l
      ).trim()
    );
  },
  Ob = Be(Li, Li.name, "queryAll"),
  [Tb, Sb, Ab, Mb, xb] = wt(Li, ej, tj),
  Rs = () => X().testIdAttribute,
  Di = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return Rt(t[0]), Qt(Rs(), ...t);
  },
  rj = (e, t) => "Found multiple elements by: [" + Rs() + '="' + t + '"]',
  nj = (e, t) => "Unable to find an element by: [" + Rs() + '="' + t + '"]',
  jb = Be(Di, Di.name, "queryAll"),
  [Nb, $b, Ib, Bb, kb] = wt(Di, rj, nj),
  to = Object.freeze({
    __proto__: null,
    queryAllByLabelText: Yh,
    queryByLabelText: Uh,
    getAllByLabelText: Wh,
    getByLabelText: Kh,
    findAllByLabelText: zh,
    findByLabelText: Gh,
    queryByPlaceholderText: Xh,
    queryAllByPlaceholderText: Jh,
    getByPlaceholderText: Zh,
    getAllByPlaceholderText: Qh,
    findAllByPlaceholderText: eb,
    findByPlaceholderText: tb,
    queryByText: nb,
    queryAllByText: rb,
    getByText: ab,
    getAllByText: ob,
    findAllByText: ib,
    findByText: lb,
    queryByDisplayValue: ub,
    queryAllByDisplayValue: sb,
    getByDisplayValue: db,
    getAllByDisplayValue: cb,
    findAllByDisplayValue: pb,
    findByDisplayValue: mb,
    queryByAltText: hb,
    queryAllByAltText: fb,
    getByAltText: yb,
    getAllByAltText: bb,
    findAllByAltText: gb,
    findByAltText: vb,
    queryByTitle: Rb,
    queryAllByTitle: _b,
    getByTitle: Cb,
    getAllByTitle: wb,
    findAllByTitle: qb,
    findByTitle: Eb,
    queryByRole: Tb,
    queryAllByRole: Ob,
    getAllByRole: Sb,
    getByRole: Ab,
    findAllByRole: Mb,
    findByRole: xb,
    queryByTestId: Nb,
    queryAllByTestId: jb,
    getByTestId: Ib,
    getAllByTestId: $b,
    findAllByTestId: Bb,
    findByTestId: kb,
  });
function Fi(e, t, r) {
  return (
    t === void 0 && (t = to),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((n, o) => {
      let a = t[o];
      return (n[o] = a.bind(null, e)), n;
    }, r)
  );
}
var Lb = (e) => !e || (Array.isArray(e) && !e.length);
function Zc(e) {
  if (Lb(e))
    throw new Error(
      "The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal."
    );
}
async function oj(e, t) {
  let r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    Zc(e);
    let n = (Array.isArray(e) ? e : [e]).map((o) => {
      let a = o.parentElement;
      if (a === null) return () => null;
      for (; a.parentElement; ) a = a.parentElement;
      return () => (a.contains(o) ? o : null);
    });
    e = () => n.map((o) => o()).filter(Boolean);
  }
  return (
    Zc(e()),
    vs(() => {
      let n;
      try {
        n = e();
      } catch (o) {
        if (o.name === "TestingLibraryElementError") return;
        throw o;
      }
      if (!Lb(n)) throw r;
    }, t)
  );
}
var ed = {
    copy: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    cut: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    paste: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    compositionEnd: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    compositionStart: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    compositionUpdate: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    keyDown: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } },
    keyPress: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } },
    keyUp: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } },
    focus: { EventType: "FocusEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    blur: { EventType: "FocusEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    focusIn: { EventType: "FocusEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    focusOut: { EventType: "FocusEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    change: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !1 } },
    input: { EventType: "InputEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    invalid: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !0 } },
    submit: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } },
    reset: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } },
    click: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 } },
    contextMenu: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    dblClick: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    drag: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    dragEnd: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    dragEnter: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    dragExit: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    dragLeave: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    dragOver: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    dragStart: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    drop: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseDown: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseEnter: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    mouseLeave: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    mouseMove: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseOut: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseOver: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseUp: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    select: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !1 } },
    touchCancel: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    touchEnd: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    touchMove: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    touchStart: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    resize: { EventType: "UIEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    scroll: { EventType: "UIEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    wheel: { EventType: "WheelEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    abort: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlayThrough: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    durationChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    emptied: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    encrypted: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    ended: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedMetadata: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    loadStart: { EventType: "ProgressEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    pause: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    progress: { EventType: "ProgressEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    rateChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    seeked: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    seeking: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    stalled: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    suspend: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    timeUpdate: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    volumeChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    waiting: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    load: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    animationEnd: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    animationIteration: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    transitionCancel: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    transitionEnd: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } },
    transitionRun: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    transitionStart: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    pointerOver: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    pointerEnter: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    pointerDown: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    pointerMove: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    pointerUp: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    pointerCancel: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    pointerOut: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    pointerLeave: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
    gotPointerCapture: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    lostPointerCapture: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    popState: { EventType: "PopStateEvent", defaultInit: { bubbles: !0, cancelable: !1 } },
    offline: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    online: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
    pageHide: { EventType: "PageTransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } },
    pageShow: { EventType: "PageTransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } },
  },
  td = { doubleClick: "dblClick" };
function ln(e, t) {
  return X().eventWrapper(() => {
    if (!t) throw new Error("Unable to fire an event - please provide an event object.");
    if (!e) throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function kn(e, t, r, n) {
  let { EventType: o = "Event", defaultInit: a = {} } = n === void 0 ? {} : n;
  if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  let i = { ...a, ...r },
    { target: { value: l, files: u, ...c } = {} } = i;
  l !== void 0 && aj(t, l),
    u !== void 0 && Object.defineProperty(t, "files", { configurable: !0, enumerable: !0, writable: !0, value: u }),
    Object.assign(t, c);
  let s = Mh(t),
    d = s[o] || s.Event,
    m;
  if (typeof d == "function") m = new d(e, i);
  else {
    m = s.document.createEvent(o);
    let { bubbles: p, cancelable: f, detail: b, ...h } = i;
    m.initEvent(e, p, f, b),
      Object.keys(h).forEach((y) => {
        m[y] = h[y];
      });
  }
  return (
    ["dataTransfer", "clipboardData"].forEach((p) => {
      let f = i[p];
      typeof f == "object" &&
        (typeof s.DataTransfer == "function"
          ? Object.defineProperty(m, p, {
              value: Object.getOwnPropertyNames(f).reduce(
                (b, h) => (Object.defineProperty(b, h, { value: f[h] }), b),
                new s.DataTransfer()
              ),
            })
          : Object.defineProperty(m, p, { value: f }));
    }),
    m
  );
}
Object.keys(ed).forEach((e) => {
  let { EventType: t, defaultInit: r } = ed[e],
    n = e.toLowerCase();
  (kn[e] = (o, a) => kn(n, o, a, { EventType: t, defaultInit: r })), (ln[e] = (o, a) => ln(o, kn[e](o, a)));
});
function aj(e, t) {
  let { set: r } = Object.getOwnPropertyDescriptor(e, "value") || {},
    n = Object.getPrototypeOf(e),
    { set: o } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (o && r !== o) o.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error("The given element does not have a value setter");
}
Object.keys(td).forEach((e) => {
  let t = td[e];
  ln[e] = function () {
    return ln[t](...arguments);
  };
});
function ij(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`
  );
}
function lj(e) {
  return XM.default.compressToEncodedURIComponent(ij(e));
}
function sj(e) {
  return "https://testing-playground.com/#markup=" + lj(e);
}
var uj = (e, t, r) => (Array.isArray(e) ? e.forEach((n) => xi(n, t, r)) : xi(e, t, r)),
  cj = function (e) {
    if ((e === void 0 && (e = bs().body), !e || !("innerHTML" in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    let t = sj(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t
      ),
      t
    );
  },
  rd = { debug: uj, logTestingPlaygroundURL: cj },
  dj =
    typeof document < "u" && document.body
      ? Fi(document.body, to, rd)
      : Object.keys(to).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                "For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error"
              );
            }),
            e
          ),
          rd
        );
function Y(e, t, r) {
  return (e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml") ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
    ? Object.entries(r).every(([n, o]) => e[n] === o)
    : !0;
}
var Hi;
(function (e) {
  (e.button = "button"),
    (e.color = "color"),
    (e.file = "file"),
    (e.image = "image"),
    (e.reset = "reset"),
    (e.submit = "submit"),
    (e.checkbox = "checkbox"),
    (e.radio = "radio");
})(Hi || (Hi = {}));
function Db(e) {
  return Y(e, "button") || (Y(e, "input") && e.type in Hi);
}
function at(e) {
  var t;
  if (pj(e) && e.defaultView) return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView) return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${mj(e)}`);
}
function pj(e) {
  return e.nodeType === 9;
}
function mj(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function Fb(e, t) {
  return new Promise((r, n) => {
    let o = new t();
    (o.onerror = n),
      (o.onabort = n),
      (o.onload = () => {
        r(String(o.result));
      }),
      o.readAsText(e);
  });
}
function ws(e, t) {
  let r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let n = 0; n < r.length; n++) yield r[n];
    },
  };
  return (r.constructor = e.FileList), e.FileList && Object.setPrototypeOf(r, e.FileList.prototype), Object.freeze(r), r;
}
function At(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var Hb = class {
    getAsFile() {
      return this.file;
    }
    getAsString(e) {
      typeof this.data == "string" && e(this.data);
    }
    webkitGetAsEntry() {
      throw new Error("not implemented");
    }
    constructor(e, t) {
      At(this, "kind", void 0),
        At(this, "type", void 0),
        At(this, "file", null),
        At(this, "data", void 0),
        typeof e == "string"
          ? ((this.kind = "string"), (this.type = String(t)), (this.data = e))
          : ((this.kind = "file"), (this.type = e.type), (this.file = e));
    }
  },
  fj = class extends Array {
    add(...e) {
      let t = new Hb(e[0], e[1]);
      return this.push(t), t;
    }
    clear() {
      this.splice(0, this.length);
    }
    remove(e) {
      this.splice(e, 1);
    }
  };
function On(e, t) {
  let [r, n] = e.split("/"),
    o = !n || n === "*";
  return (a) => (t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r);
}
function hj(e) {
  return new (class {
    getData(t) {
      var r;
      let n = (r = this.items.find(On(t, !0))) !== null && r !== void 0 ? r : this.items.find(On(t, !1)),
        o = "";
      return (
        n == null ||
          n.getAsString((a) => {
            o = a;
          }),
        o
      );
    }
    setData(t, r) {
      let n = this.items.findIndex(On(t, !0)),
        o = new Hb(r, t);
      n >= 0 ? this.items.splice(n, 1, o) : this.items.push(o);
    }
    clearData(t) {
      if (t) {
        let r = this.items.findIndex(On(t, !0));
        r >= 0 && this.items.remove(r);
      } else this.items.clear();
    }
    get types() {
      let t = [];
      return this.files.length && t.push("Files"), this.items.forEach((r) => t.push(r.type)), Object.freeze(t), t;
    }
    setDragImage() {}
    constructor() {
      At(this, "dropEffect", "none"), At(this, "effectAllowed", "uninitialized"), At(this, "items", new fj()), At(this, "files", ws(e, []));
    }
  })();
}
function Cs(e, t = []) {
  let r = typeof e.DataTransfer > "u" ? hj(e) : new e.DataTransfer();
  return Object.defineProperty(r, "files", { get: () => ws(e, t) }), r;
}
function bj(e, t) {
  if (t.kind === "file") return t.getAsFile();
  let r = "";
  return (
    t.getAsString((n) => {
      r = n;
    }),
    new e.Blob([r], { type: t.type })
  );
}
function Ub(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Vb(e, ...t) {
  let r = Object.fromEntries(t.map((n) => [typeof n == "string" ? "text/plain" : n.type, Promise.resolve(n)]));
  return typeof e.ClipboardItem < "u"
    ? new e.ClipboardItem(r)
    : new (class {
        get types() {
          return Array.from(Object.keys(this.data));
        }
        async getType(n) {
          let o = await this.data[n];
          if (!o) throw new Error(`${n} is not one of the available MIME types on this item.`);
          return o instanceof e.Blob ? o : new e.Blob([o], { type: n });
        }
        constructor(n) {
          Ub(this, "data", void 0), (this.data = n);
        }
      })(r);
}
var Cr = Symbol("Manage ClipboardSub");
function nd(e, t) {
  return Object.assign(
    new (class extends e.EventTarget {
      async read() {
        return Array.from(this.items);
      }
      async readText() {
        let r = "";
        for (let n of this.items) {
          let o = n.types.includes("text/plain") ? "text/plain" : n.types.find((a) => a.startsWith("text/"));
          o && (r += await n.getType(o).then((a) => Fb(a, e.FileReader)));
        }
        return r;
      }
      async write(r) {
        this.items = r;
      }
      async writeText(r) {
        this.items = [Vb(e, r)];
      }
      constructor(...r) {
        super(...r), Ub(this, "items", []);
      }
    })(),
    { [Cr]: t }
  );
}
function qs(e) {
  return !!(e != null && e[Cr]);
}
function yj(e) {
  if (qs(e.navigator.clipboard)) return e.navigator.clipboard[Cr];
  let t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard"),
    r,
    n = {
      resetClipboardStub: () => {
        r = nd(e, n);
      },
      detachClipboardStub: () => {
        t
          ? Object.defineProperty(e.navigator, "clipboard", t)
          : Object.defineProperty(e.navigator, "clipboard", { value: void 0, configurable: !0 });
      },
    };
  return (r = nd(e, n)), Object.defineProperty(e.navigator, "clipboard", { get: () => r, configurable: !0 }), r[Cr];
}
function gj(e) {
  qs(e.navigator.clipboard) && e.navigator.clipboard[Cr].resetClipboardStub();
}
function vj(e) {
  qs(e.navigator.clipboard) && e.navigator.clipboard[Cr].detachClipboardStub();
}
async function _j(e) {
  let t = e.defaultView,
    r = t == null ? void 0 : t.navigator.clipboard,
    n = r && (await r.read());
  if (!n) throw new Error("The Clipboard API is unavailable.");
  let o = Cs(t);
  for (let a of n) for (let i of a.types) o.setData(i, await a.getType(i).then((l) => Fb(l, t.FileReader)));
  return o;
}
async function zb(e, t) {
  let r = at(e),
    n = r.navigator.clipboard,
    o = [];
  for (let a = 0; a < t.items.length; a++) {
    let i = t.items[a],
      l = bj(r, i);
    o.push(Vb(r, l));
  }
  if (
    !(
      n &&
      (await n.write(o).then(
        () => !0,
        () => !1
      ))
    )
  )
    throw new Error("The Clipboard API is unavailable.");
}
var ro = globalThis;
typeof ro.afterEach == "function" && ro.afterEach(() => gj(globalThis.window));
typeof ro.afterAll == "function" && ro.afterAll(() => vj(globalThis.window));
function Wt(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function sn(e) {
  let t = Rj(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function Rj(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function qr(e) {
  return (Gb(e) && !e.readOnly) || Wt(e);
}
var Ui;
(function (e) {
  (e.text = "text"),
    (e.date = "date"),
    (e["datetime-local"] = "datetime-local"),
    (e.email = "email"),
    (e.month = "month"),
    (e.number = "number"),
    (e.password = "password"),
    (e.search = "search"),
    (e.tel = "tel"),
    (e.time = "time"),
    (e.url = "url"),
    (e.week = "week");
})(Ui || (Ui = {}));
function Gb(e) {
  return Y(e, "textarea") || (Y(e, "input") && e.type in Ui);
}
var Vi;
(function (e) {
  (e.email = "email"), (e.password = "password"), (e.search = "search"), (e.telephone = "telephone"), (e.text = "text"), (e.url = "url");
})(Vi || (Vi = {}));
function wj(e) {
  var t;
  let r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function Cj(e) {
  return Y(e, "textarea") || (Y(e, "input") && e.type in Vi);
}
var Wb = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])",
].join(", ");
function Es(e) {
  return e.matches(Wb);
}
var no;
(function (e) {
  (e["{"] = "}"), (e["["] = "]");
})(no || (no = {}));
function Kb(e, t) {
  let r = 0,
    n = e[r] in no ? e[r] : "";
  r += n.length;
  let o = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return { type: o, ...(o === "" ? qj(e, r, t) : Ej(e, r, o, t)) };
}
function qj(e, t, r) {
  let n = e[t];
  return Yb(n, e, t, r), (t += n.length), { consumedLength: t, descriptor: n, releasePrevious: !1, releaseSelf: !0, repeat: 1 };
}
function Ej(e, t, r, n) {
  var o, a;
  let i = e[t] === "/" ? "/" : "";
  t += i.length;
  let l = r === "{" && e[t] === "\\";
  t += Number(l);
  let u = l ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  Yb(u, e, t, n), (t += u.length);
  var c;
  let s = (c = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && c !== void 0 ? c : "";
  t += s.length;
  let d = e[t] === "/" || (!s && e[t] === ">") ? e[t] : "";
  t += d.length;
  let m = no[r],
    p = e[t] === m ? m : "";
  if (!p) throw new Error(Jb([!s && "repeat modifier", !d && "release modifier", `"${m}"`].filter(Boolean).join(" or "), e[t], e, n));
  return (
    (t += p.length),
    { consumedLength: t, descriptor: u, releasePrevious: !!i, repeat: s ? Math.max(Number(s.substr(1)), 1) : 1, releaseSelf: Pj(d, s) }
  );
}
function Yb(e, t, r, n) {
  if (!e) throw new Error(Jb("key descriptor", t[r], t, n));
}
function Pj(e, t) {
  if (e) return e === "/";
  if (t) return !1;
}
function Jb(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${
      n === "pointer"
        ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen"
        : "https://testing-library.com/docs/user-event/keyboard"
    }
    for more information about how userEvent parses your input.`;
}
function Oj(e) {
  return new e.constructor(e.type, e);
}
var $e;
(function (e) {
  (e[(e.Trigger = 2)] = "Trigger"), (e[(e.Call = 1)] = "Call");
})($e || ($e = {}));
function Br(e, t) {
  e.levelRefs[t] = {};
}
function Tn(e, t) {
  return e.levelRefs[t];
}
var pr;
(function (e) {
  (e[(e.EachTrigger = 4)] = "EachTrigger"),
    (e[(e.EachApiCall = 2)] = "EachApiCall"),
    (e[(e.EachTarget = 1)] = "EachTarget"),
    (e[(e.Never = 0)] = "Never");
})(pr || (pr = {}));
function gt(e) {
  for (let r = e; r; r = r.parentElement)
    if (Y(r, ["button", "input", "select", "textarea", "optgroup", "option"])) {
      if (r.hasAttribute("disabled")) return !0;
    } else if (Y(r, "fieldset")) {
      var t;
      if (r.hasAttribute("disabled") && !(!((t = r.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e))) return !0;
    } else if (r.tagName.includes("-") && r.constructor.formAssociated && r.hasAttribute("disabled")) return !0;
  return !1;
}
function Lo(e) {
  let t = e.activeElement;
  return t != null && t.shadowRoot ? Lo(t.shadowRoot) : gt(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : t;
}
function Fa(e) {
  var t;
  return (t = Lo(e)) !== null && t !== void 0 ? t : e.body;
}
function Tj(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function it(e) {
  return Xb(e) && Gb(e);
}
function Sj(e) {
  return Xb(e) && Db(e);
}
function Xb(e) {
  return e.nodeType === 1;
}
function Aj(e) {
  let t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && it(e)) {
    let n = sn(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        let o = ((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3 ? n.firstChild : n;
        t.setBaseAndExtent(o, 0, o, 0);
      }
    } else t.setBaseAndExtent(e, 0, e, 0);
  }
}
function Er(e, t) {
  return X().eventWrapper(e);
}
function Nt(e) {
  let t = Tj(e, Es),
    r = Lo(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (Er(t ? () => t.focus() : () => (r == null ? void 0 : r.blur())), Aj(t ?? e.ownerDocument.body));
}
function Mj(e) {
  !Es(e) || Lo(e.ownerDocument) !== e || Er(() => e.blur());
}
var $t = {};
$t.click = (e, t, r) => {
  let n = t.closest("button,input,label,select,textarea"),
    o = n && Y(n, "label") && n.control;
  if (o)
    return () => {
      Es(o) && Nt(o), r.dispatchEvent(o, Oj(e));
    };
  if (Y(t, "input", { type: "file" }))
    return () => {
      Mj(t), t.dispatchEvent(new (at(t).Event)("fileDialog")), Nt(t);
    };
};
var Pr = Symbol("Displayed value in UI"),
  bt = Symbol("Displayed selection in UI"),
  oo = Symbol("Initial value to compare on blur");
function xj(e) {
  return typeof e == "object" && Pr in e;
}
function jj(e) {
  return !!e && typeof e == "object" && bt in e;
}
function Nj(e, t) {
  e[oo] === void 0 && (e[oo] = e.value), (e[Pr] = t), (e.value = Object.assign(new String(t), { [Pr]: !0 }));
}
function lt(e) {
  return e[Pr] === void 0 ? e.value : String(e[Pr]);
}
function Ps(e) {
  e[Pr] = void 0;
}
function Qb(e) {
  e[oo] = void 0;
}
function $j(e) {
  return e[oo];
}
function Ij(e, t) {
  e[bt] = t;
}
function xr(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  let o = lt(e).length,
    a = (d) => Math.max(0, Math.min(o, d)),
    i = n === "replace" || e[bt] === void 0 ? a(r) : e[bt].anchorOffset,
    l = a(t),
    u = Math.min(i, l),
    c = Math.max(i, l);
  if (((e[bt] = { anchorOffset: i, focusOffset: l }), e.selectionStart === u && e.selectionEnd === c)) return;
  let s = Object.assign(new Number(u), { [bt]: !0 });
  try {
    e.setSelectionRange(s, c);
  } catch {}
}
function un(e) {
  var t, r, n;
  let o =
    (n = e[bt]) !== null && n !== void 0
      ? n
      : {
          anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
          focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0,
        };
  return { ...o, startOffset: Math.min(o.anchorOffset, o.focusOffset), endOffset: Math.max(o.anchorOffset, o.focusOffset) };
}
function Bj(e) {
  return !!e[bt];
}
function Ln(e) {
  e[bt] = void 0;
}
var ao = globalThis.parseInt;
function kj(e) {
  let t = e.replace(/\D/g, "");
  if (t.length < 2) return e;
  let r = ao(t[0], 10),
    n = ao(t[1], 10);
  if (r >= 3 || (r === 2 && n >= 4)) {
    let o;
    return r >= 3 ? (o = 1) : (o = 2), od(t, o);
  }
  return e.length === 2 ? e : od(t, 2);
}
function od(e, t) {
  let r = e.slice(0, t),
    n = Math.min(ao(r, 10), 23),
    o = e.slice(t),
    a = ao(o, 10),
    i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Zb(e, t) {
  let r = e.cloneNode();
  return (r.value = t), r.value === t;
}
function ey(e, t, r, n) {
  if (Dn(e) && t + r >= 0 && t + r <= e.nodeValue.length) return { node: e, offset: t + r };
  let o = ad(e, t, r);
  if (o) {
    if (Dn(o)) return { node: o, offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0) };
    if (Y(o, "br")) {
      let a = ad(o, void 0, r);
      return a
        ? Dn(a)
          ? { node: a, offset: r > 0 ? 0 : a.nodeValue.length }
          : r < 0 && Y(a, "br")
          ? { node: o.parentNode, offset: Sn(o) }
          : { node: a.parentNode, offset: Sn(a) + (r > 0 ? 0 : 1) }
        : r < 0 && n === "deleteContentBackward"
        ? { node: o.parentNode, offset: Sn(o) }
        : void 0;
    } else return { node: o.parentNode, offset: Sn(o) + (r > 0 ? 1 : 0) };
  }
}
function ad(e, t, r) {
  let n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && Os(e) && n >= 0 && n < e.children.length && (e = e.children[n]), Dj(e, r === 1 ? "next" : "previous", Lj);
}
function Lj(e) {
  if (Dn(e)) return !0;
  if (Os(e)) {
    if (Y(e, ["input", "textarea"])) return e.type !== "hidden";
    if (Y(e, "br")) return !0;
  }
  return !1;
}
function Sn(e) {
  let t = 0;
  for (; e.previousSibling; ) t++, (e = e.previousSibling);
  return t;
}
function Os(e) {
  return e.nodeType === 1;
}
function Dn(e) {
  return e.nodeType === 3;
}
function Dj(e, t, r) {
  for (;;) {
    var n;
    let o = e[`${t}Sibling`];
    if (o) {
      if (((e = Fj(o, t === "next" ? "first" : "last")), r(e))) return e;
    } else if (
      e.parentNode &&
      (!Os(e.parentNode) || (!Wt(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
    )
      e = e.parentNode;
    else break;
  }
}
function Fj(e, t) {
  for (; e.hasChildNodes(); ) e = e[`${t}Child`];
  return e;
}
var cn = Symbol("Track programmatic changes for React workaround");
function Hj(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && at(e).REACT_VERSION === 17;
}
function Uj(e) {
  Hj(e) && (e[cn] = { previousValue: String(e.value), tracked: [] });
}
function Vj(e, t) {
  var r, n;
  (n = e[cn]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t),
    e[cn] || (Ps(e), xr(e, { focusOffset: t.length }));
}
function zj(e, t) {
  var r;
  let n = e[cn];
  if (((e[cn] = void 0), !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))) return;
  let o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || Ps(e), Bj(e) && xr(e, { focusOffset: o ? t : e.value.length });
}
function ty(e) {
  let t = Gj(e);
  if (t && it(t)) return { type: "input", selection: un(t) };
  let r = t == null ? void 0 : t.ownerDocument.getSelection();
  return { type: sn(e) && r != null && r.anchorNode && sn(r.anchorNode) ? "contenteditable" : "default", selection: r };
}
function Gj(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function Wj(e) {
  let t = ty(e);
  if (t.type === "input") return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function Kt({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (ty(e).type === "input") return xr(e, { anchorOffset: n, focusOffset: t });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function ry(e) {
  return Y(e, "input") && ["date", "time"].includes(e.type);
}
function Or(e, t, r, n = "insertText") {
  let o = Wj(t);
  o &&
    ((!ry(t) && !e.dispatchUIEvent(t, "beforeinput", { inputType: n, data: r })) ||
      ("startContainer" in o ? Kj(e, t, o, r, n) : Yj(e, t, o, r, n)));
}
function Kj(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed) (a = !0), r.deleteContents();
  else if (["deleteContentBackward", "deleteContentForward"].includes(o)) {
    let i = ey(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
    if (i) {
      a = !0;
      let l = r.cloneRange();
      l.comparePoint(i.node, i.offset) < 0 ? l.setStart(i.node, i.offset) : l.setEnd(i.node, i.offset), l.deleteContents();
    }
  }
  if (n)
    if (r.endContainer.nodeType === 3) {
      let i = r.endOffset;
      r.endContainer.insertData(i, n), r.setStart(r.endContainer, i + n.length), r.setEnd(r.endContainer, i + n.length);
    } else {
      let i = t.ownerDocument.createTextNode(n);
      r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
    }
  (a || n) && e.dispatchUIEvent(t, "input", { inputType: o });
}
function Yj(e, t, r, n, o) {
  let a = n;
  if (Cj(t)) {
    let c = wj(t);
    if (c !== void 0 && n.length > 0) {
      let s = c - t.value.length;
      if (s > 0) a = n.substring(0, s);
      else return;
    }
  }
  let { newValue: i, newOffset: l, oldValue: u } = Jj(a, t, r, o);
  (i === u && l === r.startOffset && l === r.endOffset) ||
    (Y(t, "input", { type: "number" }) && !Xj(i)) ||
    (Nj(t, i),
    Kt({ focusNode: t, anchorOffset: l, focusOffset: l }),
    ry(t) ? Zb(t, i) && (id(e, t, l, {}), e.dispatchUIEvent(t, "change"), Qb(t)) : id(e, t, l, { data: n, inputType: o }));
}
function Jj(e, t, { startOffset: r, endOffset: n }, o) {
  let a = lt(t),
    i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r),
    l = a.substring(0, i),
    u = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n),
    c = a.substring(u, a.length),
    s = `${l}${e}${c}`,
    d = i + e.length;
  if (Y(t, "input", { type: "time" })) {
    let m = kj(s);
    m !== "" && Zb(t, m) && ((s = m), (d = m.length));
  }
  return { oldValue: a, newValue: s, newOffset: d };
}
function id(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), zj(t, r);
}
function Xj(e) {
  var t, r;
  let n = e.split("e", 2);
  return !(
    /[^\d.\-e]/.test(e) ||
    Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 ||
    Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 ||
    (n[1] && !/^-?\d*$/.test(n[1]))
  );
}
$t.cut = (e, t, r) => () => {
  qr(t) && Or(r, t, "", "deleteByCut");
};
function Qj(e) {
  return e ? (Wt(e) ? e.textContent : lt(e)) : null;
}
function Zj(e) {
  let t = at(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    let { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden") return !1;
  }
  return !0;
}
function eN(e, t) {
  let r = e.ownerDocument,
    n = r.querySelectorAll(Wb),
    o = Array.from(n).filter((u) => u === e || !(Number(u.getAttribute("tabindex")) < 0 || gt(u)));
  Number(e.getAttribute("tabindex")) >= 0 &&
    o.sort((u, c) => {
      let s = Number(u.getAttribute("tabindex")),
        d = Number(c.getAttribute("tabindex"));
      return s === d ? 0 : s === 0 ? 1 : d === 0 ? -1 : s - d;
    });
  let a = {},
    i = [r.body],
    l = Y(e, "input", { type: "radio" }) ? e.name : void 0;
  o.forEach((u) => {
    let c = u;
    if (Y(c, "input", { type: "radio" }) && c.name) {
      if (c === e) {
        i.push(c);
        return;
      } else if (c.name === l) return;
      if (c.checked) {
        (i = i.filter((s) => !Y(s, "input", { type: "radio", name: c.name }))), i.push(c), (a[c.name] = c);
        return;
      }
      if (typeof a[c.name] < "u") return;
    }
    i.push(c);
  });
  for (let u = i.findIndex((c) => c === e); ; )
    if (((u += t ? -1 : 1), u === i.length ? (u = 0) : u === -1 && (u = i.length - 1), i[u] === e || i[u] === r.body || Zj(i[u])))
      return i[u];
}
function ld(e, t) {
  if (it(e)) {
    let r = un(e);
    Kt({ focusNode: e, focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset });
  } else {
    let r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode)) return;
    if (r.isCollapsed) {
      let n = ey(r.focusNode, r.focusOffset, t);
      n && Kt({ focusNode: n.node, focusOffset: n.offset });
    } else r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function ny(e) {
  if (it(e)) return Kt({ focusNode: e, anchorOffset: 0, focusOffset: lt(e).length });
  var t;
  let r = (t = sn(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  Kt({ focusNode: r, anchorOffset: 0, focusOffset: r.childNodes.length });
}
function tN(e) {
  if (it(e)) return un(e).startOffset === 0 && un(e).endOffset === lt(e).length;
  var t;
  let r = (t = sn(e)) !== null && t !== void 0 ? t : e.ownerDocument.body,
    n = e.ownerDocument.getSelection();
  return (n == null ? void 0 : n.anchorNode) === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function kr(e, t, r) {
  var n;
  if (it(e)) return Kt({ focusNode: e, anchorOffset: t, focusOffset: r });
  if (Wt(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return Kt({ focusNode: e.firstChild, anchorOffset: t, focusOffset: r });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function An(e, t, r) {
  let n = at(t),
    o = Array.from(
      t.ownerDocument.querySelectorAll(
        t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'
      )
    );
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if ((o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)) return;
    gt(o[a]) || (Nt(o[a]), e.dispatchUIEvent(o[a], "click"));
  }
}
$t.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = sd[e.key]) === null || n === void 0 ? void 0 : n.call(sd, e, t, r)) !== null && o !== void 0 ? o : rN(e, t, r);
};
var sd = {
    ArrowDown: (e, t, r) => {
      if (Y(t, "input", { type: "radio" })) return () => An(r, t, -1);
    },
    ArrowLeft: (e, t, r) => (Y(t, "input", { type: "radio" }) ? () => An(r, t, -1) : () => ld(t, -1)),
    ArrowRight: (e, t, r) => (Y(t, "input", { type: "radio" }) ? () => An(r, t, 1) : () => ld(t, 1)),
    ArrowUp: (e, t, r) => {
      if (Y(t, "input", { type: "radio" })) return () => An(r, t, 1);
    },
    Backspace: (e, t, r) => {
      if (qr(t))
        return () => {
          Or(r, t, "", "deleteContentBackward");
        };
    },
    Delete: (e, t, r) => {
      if (qr(t))
        return () => {
          Or(r, t, "", "deleteContentForward");
        };
    },
    End: (e, t) => {
      if (Y(t, ["input", "textarea"]) || Wt(t))
        return () => {
          var r, n;
          let o = (n = (r = Qj(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
          kr(t, o, o);
        };
    },
    Home: (e, t) => {
      if (Y(t, ["input", "textarea"]) || Wt(t))
        return () => {
          kr(t, 0, 0);
        };
    },
    PageDown: (e, t) => {
      if (Y(t, ["input"]))
        return () => {
          let r = lt(t).length;
          kr(t, r, r);
        };
    },
    PageUp: (e, t) => {
      if (Y(t, ["input"]))
        return () => {
          kr(t, 0, 0);
        };
    },
    Tab: (e, t, r) => () => {
      let n = eN(t, r.system.keyboard.modifiers.Shift);
      Nt(n), it(n) && xr(n, { anchorOffset: 0, focusOffset: n.value.length });
    },
  },
  rN = (e, t, r) => {
    if (e.code === "KeyA" && r.system.keyboard.modifiers.Control) return () => ny(t);
  };
$t.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (Y(t, "button") || (Y(t, "input") && nN.includes(t.type)) || (Y(t, "a") && t.href))
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (Y(t, "input")) {
      let n = t.form,
        o = n == null ? void 0 : n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o
        ? () => r.dispatchUIEvent(o, "click")
        : n && oN.includes(t.type) && n.querySelectorAll("input").length === 1
        ? () => r.dispatchUIEvent(n, "submit")
        : void 0;
    }
  }
  if (qr(t)) {
    let n = e.key === "Enter" ? (Wt(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak") : "insertText",
      o =
        e.key === "Enter"
          ? `
`
          : e.key;
    return () => Or(r, t, o, n);
  }
};
var nN = ["button", "color", "file", "image", "reset", "submit"],
  oN = ["email", "month", "password", "search", "tel", "text", "url", "week"];
$t.keyup = (e, t, r) => {
  var n;
  return (n = ud[e.key]) === null || n === void 0 ? void 0 : n.call(ud, e, t, r);
};
var ud = {
  " ": (e, t, r) => {
    if (Db(t)) return () => r.dispatchUIEvent(t, "click");
  },
};
$t.paste = (e, t, r) => {
  if (qr(t))
    return () => {
      var n;
      let o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && Or(r, t, o, "insertFromPaste");
    };
};
var oy = {
  auxclick: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  beforeinput: { EventType: "InputEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  click: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  contextmenu: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  copy: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  change: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !1 } },
  cut: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  dblclick: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  keydown: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  keypress: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  keyup: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  paste: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  input: { EventType: "InputEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
  mousedown: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  mouseenter: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
  mouseleave: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
  mousemove: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  mouseout: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  mouseover: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  mouseup: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointerover: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointerenter: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
  pointerdown: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointermove: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointerup: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointercancel: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
  pointerout: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
  pointerleave: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } },
  submit: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } },
};
function ay(e) {
  return oy[e].EventType;
}
var aN = ["MouseEvent", "PointerEvent"];
function iN(e) {
  return aN.includes(ay(e));
}
function lN(e) {
  return ay(e) === "KeyboardEvent";
}
var sN = {
  ClipboardEvent: [cN],
  Event: [],
  InputEvent: [Mn, dN],
  MouseEvent: [Mn, Ha, cd],
  PointerEvent: [Mn, Ha, cd, mN],
  KeyboardEvent: [Mn, Ha, pN],
};
function iy(e, t, r) {
  let n = at(t),
    { EventType: o, defaultInit: a } = oy[e],
    i = new (uN(n)[o])(e, a);
  return sN[o].forEach((l) => l(i, r ?? {})), i;
}
function uN(e) {
  var t;
  let r = (t = e.Event) !== null && t !== void 0 ? t : class {};
  var n;
  let o = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {};
  var a;
  let i = (a = e.ClipboardEvent) !== null && a !== void 0 ? a : class extends r {};
  var l;
  let u = (l = e.PopStateEvent) !== null && l !== void 0 ? l : class extends r {};
  var c;
  let s = (c = e.ProgressEvent) !== null && c !== void 0 ? c : class extends r {};
  var d;
  let m = (d = e.TransitionEvent) !== null && d !== void 0 ? d : class extends r {};
  var p;
  let f = (p = e.UIEvent) !== null && p !== void 0 ? p : class extends r {};
  var b;
  let h = (b = e.CompositionEvent) !== null && b !== void 0 ? b : class extends f {};
  var y;
  let g = (y = e.FocusEvent) !== null && y !== void 0 ? y : class extends f {};
  var E;
  let C = (E = e.InputEvent) !== null && E !== void 0 ? E : class extends f {};
  var q;
  let _ = (q = e.KeyboardEvent) !== null && q !== void 0 ? q : class extends f {};
  var v;
  let w = (v = e.MouseEvent) !== null && v !== void 0 ? v : class extends f {};
  var P;
  let j = (P = e.DragEvent) !== null && P !== void 0 ? P : class extends w {};
  var $;
  let B = ($ = e.PointerEvent) !== null && $ !== void 0 ? $ : class extends w {};
  var I;
  let S = (I = e.TouchEvent) !== null && I !== void 0 ? I : class extends f {};
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: u,
    ProgressEvent: s,
    TransitionEvent: m,
    UIEvent: f,
    CompositionEvent: h,
    FocusEvent: g,
    InputEvent: C,
    KeyboardEvent: _,
    MouseEvent: w,
    DragEvent: j,
    PointerEvent: B,
    TouchEvent: S,
  };
}
function Zt(e, t) {
  for (let [r, n] of Object.entries(t)) Object.defineProperty(e, r, { get: () => n ?? null });
}
function Ce(e) {
  return Number(e ?? 0);
}
function cN(e, { clipboardData: t }) {
  Zt(e, { clipboardData: t });
}
function dN(e, { data: t, inputType: r, isComposing: n }) {
  Zt(e, { data: t, isComposing: !!n, inputType: String(r) });
}
function Mn(e, { view: t, detail: r }) {
  Zt(e, { view: t, detail: Ce(r ?? 0) });
}
function Ha(
  e,
  {
    altKey: t,
    ctrlKey: r,
    metaKey: n,
    shiftKey: o,
    modifierAltGraph: a,
    modifierCapsLock: i,
    modifierFn: l,
    modifierFnLock: u,
    modifierNumLock: c,
    modifierScrollLock: s,
    modifierSymbol: d,
    modifierSymbolLock: m,
  }
) {
  Zt(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(p) {
      return !!{
        Alt: t,
        AltGraph: a,
        CapsLock: i,
        Control: r,
        Fn: l,
        FnLock: u,
        Meta: n,
        NumLock: c,
        ScrollLock: s,
        Shift: o,
        Symbol: d,
        SymbolLock: m,
      }[p];
    },
  });
}
function pN(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  Zt(e, { key: String(t), code: String(r), location: Ce(n), repeat: !!o, isComposing: !!a, charCode: i });
}
function cd(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: l, buttons: u, relatedTarget: c }) {
  Zt(e, {
    screenX: Ce(n),
    screenY: Ce(o),
    clientX: Ce(a),
    x: Ce(a),
    clientY: Ce(i),
    y: Ce(i),
    button: Ce(l),
    buttons: Ce(u),
    relatedTarget: c,
  });
}
function mN(
  e,
  { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: l, twist: u, pointerType: c, isPrimary: s }
) {
  Zt(e, {
    pointerId: Ce(t),
    width: Ce(r),
    height: Ce(n),
    pressure: Ce(o),
    tangentialPressure: Ce(a),
    tiltX: Ce(i),
    tiltY: Ce(l),
    twist: Ce(u),
    pointerType: String(c),
    isPrimary: !!s,
  });
}
function fN(e, t, r, n = !1) {
  (iN(t) || lN(t)) && (r = { ...r, ...this.system.getUIEventModifiers() });
  let o = iy(t, e, r);
  return ly.call(this, e, o, n);
}
function ly(e, t, r = !1) {
  var n;
  let o = t.type,
    a = r ? () => {} : (n = $t[o]) === null || n === void 0 ? void 0 : n.call($t, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return (
      Object.defineProperty(t, "defaultPrevented", { get: () => i }),
      Object.defineProperty(t, "preventDefault", {
        value: () => {
          i = t.cancelable;
        },
      }),
      Er(() => e.dispatchEvent(t)),
      i || a(),
      !i
    );
  }
  return Er(() => e.dispatchEvent(t));
}
function hN(e, t, r) {
  let n = iy(t, e, r);
  Er(() => e.dispatchEvent(n));
}
var Ua = Symbol("Interceptor for programmatical calls");
function cr(e, t, r) {
  let n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    o = Object.getOwnPropertyDescriptor(e, t),
    a = n != null && n.set ? "set" : "value";
  if (typeof (n == null ? void 0 : n[a]) != "function" || n[a][Ua])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...l) {
    let { applyNative: u = !1, realArgs: c, then: s } = r.call(this, ...l),
      d = ((!u && o) || n)[a];
    a === "set" ? d.call(this, c) : d.call(this, ...c), s == null || s();
  }
  (i[Ua] = Ua), Object.defineProperty(e, t, { ...(o ?? n), [a]: i });
}
function bN(e) {
  cr(e, "value", function (t) {
    let r = xj(t);
    return r && Uj(this), { applyNative: !!r, realArgs: yN(this, t), then: r ? void 0 : () => Vj(this, String(t)) };
  });
}
function yN(e, t) {
  return Y(e, "input", { type: "number" }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function gN(e) {
  cr(e, "setSelectionRange", function (t, ...r) {
    let n = jj(t);
    return { applyNative: !!n, realArgs: [Number(t), ...r], then: () => (n ? void 0 : Ln(e)) };
  }),
    cr(e, "selectionStart", function (t) {
      return { realArgs: t, then: () => Ln(e) };
    }),
    cr(e, "selectionEnd", function (t) {
      return { realArgs: t, then: () => Ln(e) };
    }),
    cr(e, "select", function () {
      return { realArgs: [], then: () => Ij(e, { anchorOffset: 0, focusOffset: lt(e).length }) };
    });
}
function vN(e) {
  cr(e, "setRangeText", function (...t) {
    return {
      realArgs: t,
      then: () => {
        Ps(e), Ln(e);
      },
    };
  });
}
var mr = Symbol("Node prepared with document state workarounds");
function sy(e) {
  e[mr] ||
    (e.addEventListener(
      "focus",
      (t) => {
        let r = t.target;
        dd(r);
      },
      { capture: !0, passive: !0 }
    ),
    e.activeElement && dd(e.activeElement),
    e.addEventListener(
      "blur",
      (t) => {
        let r = t.target,
          n = $j(r);
        n !== void 0 && (r.value !== n && hN(r, "change"), Qb(r));
      },
      { capture: !0, passive: !0 }
    ),
    (e[mr] = mr));
}
function dd(e) {
  e[mr] || (Y(e, ["input", "textarea"]) && (bN(e), gN(e), vN(e)), (e[mr] = mr));
}
function _N(e) {
  return RN(e) ? e : e.ownerDocument;
}
function RN(e) {
  return e.nodeType === 9;
}
function Tr(e) {
  let t = e.delay;
  if (typeof t == "number") return Promise.all([new Promise((r) => globalThis.setTimeout(() => r(), t)), e.advanceTimers(t)]);
}
function tr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var Ue;
(function (e) {
  (e[(e.STANDARD = 0)] = "STANDARD"), (e[(e.LEFT = 1)] = "LEFT"), (e[(e.RIGHT = 2)] = "RIGHT"), (e[(e.NUMPAD = 3)] = "NUMPAD");
})(Ue || (Ue = {}));
var wN = ["Alt", "AltGraph", "Control", "Fn", "Meta", "Shift", "Symbol"];
function pd(e) {
  return wN.includes(e);
}
var CN = ["CapsLock", "FnLock", "NumLock", "ScrollLock", "SymbolLock"];
function md(e) {
  return CN.includes(e);
}
var qN = class {
    isKeyPressed(e) {
      return !!this.pressed[String(e.code)];
    }
    getPressedKeys() {
      return Object.values(this.pressed).map((e) => e.keyDef);
    }
    async keydown(e, t) {
      var r, n, o;
      let a = String(t.key),
        i = String(t.code),
        l = Fa(e.config.document);
      this.setKeydownTarget(l);
      var u;
      ((u = (r = this.pressed)[(n = i)]) !== null && u !== void 0) || (r[n] = { keyDef: t, unpreventedDefault: !1 }),
        pd(a) && (this.modifiers[a] = !0);
      let c = e.dispatchUIEvent(l, "keydown", { key: a, code: i });
      md(a) && !this.modifiers[a] && ((this.modifiers[a] = !0), (this.modifierLockStart[a] = !0)),
        (o = this.pressed[i]).unpreventedDefault || (o.unpreventedDefault = c),
        c &&
          this.hasKeyPress(a) &&
          e.dispatchUIEvent(Fa(e.config.document), "keypress", {
            key: a,
            code: i,
            charCode: t.key === "Enter" ? 13 : String(t.key).charCodeAt(0),
          });
    }
    async keyup(e, t) {
      let r = String(t.key),
        n = String(t.code),
        o = this.pressed[n].unpreventedDefault;
      delete this.pressed[n],
        pd(r) && !Object.values(this.pressed).find((a) => a.keyDef.key === r) && (this.modifiers[r] = !1),
        e.dispatchUIEvent(Fa(e.config.document), "keyup", { key: r, code: n }, !o),
        md(r) && this.modifiers[r] && (this.modifierLockStart[r] ? (this.modifierLockStart[r] = !1) : (this.modifiers[r] = !1));
    }
    setKeydownTarget(e) {
      e !== this.lastKeydownTarget && (this.carryChar = ""), (this.lastKeydownTarget = e);
    }
    hasKeyPress(e) {
      return (e.length === 1 || e === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
    }
    constructor(e) {
      tr(this, "system", void 0),
        tr(this, "modifiers", {
          Alt: !1,
          AltGraph: !1,
          CapsLock: !1,
          Control: !1,
          Fn: !1,
          FnLock: !1,
          Meta: !1,
          NumLock: !1,
          ScrollLock: !1,
          Shift: !1,
          Symbol: !1,
          SymbolLock: !1,
        }),
        tr(this, "pressed", {}),
        tr(this, "carryChar", ""),
        tr(this, "lastKeydownTarget", void 0),
        tr(this, "modifierLockStart", {}),
        (this.system = e);
    }
  },
  EN = [
    ..."0123456789".split("").map((e) => ({ code: `Digit${e}`, key: e })),
    ...")!@#$%^&*(".split("").map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
    ..."abcdefghijklmnopqrstuvwxyz".split("").map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
    { code: "Space", key: " " },
    { code: "AltLeft", key: "Alt", location: Ue.LEFT },
    { code: "AltRight", key: "Alt", location: Ue.RIGHT },
    { code: "ShiftLeft", key: "Shift", location: Ue.LEFT },
    { code: "ShiftRight", key: "Shift", location: Ue.RIGHT },
    { code: "ControlLeft", key: "Control", location: Ue.LEFT },
    { code: "ControlRight", key: "Control", location: Ue.RIGHT },
    { code: "MetaLeft", key: "Meta", location: Ue.LEFT },
    { code: "MetaRight", key: "Meta", location: Ue.RIGHT },
    { code: "OSLeft", key: "OS", location: Ue.LEFT },
    { code: "OSRight", key: "OS", location: Ue.RIGHT },
    { code: "Tab", key: "Tab" },
    { code: "CapsLock", key: "CapsLock" },
    { code: "Backspace", key: "Backspace" },
    { code: "Enter", key: "Enter" },
    { code: "Escape", key: "Escape" },
    { code: "ArrowUp", key: "ArrowUp" },
    { code: "ArrowDown", key: "ArrowDown" },
    { code: "ArrowLeft", key: "ArrowLeft" },
    { code: "ArrowRight", key: "ArrowRight" },
    { code: "Home", key: "Home" },
    { code: "End", key: "End" },
    { code: "Delete", key: "Delete" },
    { code: "PageUp", key: "PageUp" },
    { code: "PageDown", key: "PageDown" },
    { code: "Fn", key: "Fn" },
    { code: "Symbol", key: "Symbol" },
    { code: "AltRight", key: "AltGraph" },
  ],
  PN = [
    { name: "MouseLeft", pointerType: "mouse", button: "primary" },
    { name: "MouseRight", pointerType: "mouse", button: "secondary" },
    { name: "MouseMiddle", pointerType: "mouse", button: "auxiliary" },
    { name: "TouchA", pointerType: "touch" },
    { name: "TouchB", pointerType: "touch" },
    { name: "TouchC", pointerType: "touch" },
  ];
function ON(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var uy = class {
    getButtons() {
      let e = 0;
      for (let t of Object.keys(this.pressed)) e |= 2 ** Number(t);
      return e;
    }
    down(e) {
      let t = zi(e.button);
      if (t in this.pressed) {
        this.pressed[t].push(e);
        return;
      }
      return (this.pressed[t] = [e]), t;
    }
    up(e) {
      let t = zi(e.button);
      if (t in this.pressed && ((this.pressed[t] = this.pressed[t].filter((r) => r.name !== e.name)), this.pressed[t].length === 0))
        return delete this.pressed[t], t;
    }
    constructor() {
      ON(this, "pressed", {});
    }
  },
  fd = { primary: 0, secondary: 1, auxiliary: 2, back: 3, X1: 3, forward: 4, X2: 4 };
function zi(e = 0) {
  return e in fd ? fd[e] : Number(e);
}
var hd = { 1: 2, 2: 1 };
function bd(e) {
  return (e = zi(e)), e in hd ? hd[e] : e;
}
function TN(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var SN = class {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(e) {
    return this.pressedKeys.has(e.name);
  }
  addPressed(e) {
    return this.pressedKeys.add(e.name);
  }
  removePressed(e) {
    return this.pressedKeys.delete(e.name);
  }
  constructor() {
    TN(this, "pressedKeys", new Set());
  }
};
function Vr(e, t) {
  let r = [];
  for (let a = e; a; a = a.parentElement) r.push(a);
  let n = [];
  for (let a = t; a; a = a.parentElement) n.push(a);
  let o = 0;
  for (; !(o >= r.length || o >= n.length || r[r.length - 1 - o] !== n[n.length - 1 - o]); o++);
  return [r.slice(0, r.length - o), n.slice(0, n.length - o), n.slice(n.length - o)];
}
function Gi({ target: e, node: t, offset: r }) {
  return it(e)
    ? { node: e, offset: r ?? lt(e).length }
    : t
    ? { node: t, offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length) }
    : cy(e, r);
}
function cy(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0,
    o = t === void 0 ? -1 : 1;
  for (; t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length; ) {
    if (t && n === e.childNodes.length) throw new Error("The given offset is out of bounds.");
    let a = e.childNodes.item(n),
      i = String(a.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t) t -= i.length;
      else {
        if (a.nodeType === 1) return cy(a, t, !1);
        if (a.nodeType === 3) return { node: a, offset: t ?? a.nodeValue.length };
      }
    n += o;
  }
  return { node: e, offset: e.childNodes.length };
}
function AN({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (Sj(t)) return;
  let a = it(t),
    i = String(a ? lt(t) : t.textContent),
    [l, u] = n ? [o, o] : MN(i, o, r);
  if (a) return xr(t, { anchorOffset: l ?? i.length, focusOffset: u ?? i.length }), { node: t, start: l ?? 0, end: u ?? i.length };
  {
    let { node: c, offset: s } = Gi({ target: t, node: n, offset: l }),
      { node: d, offset: m } = Gi({ target: t, node: n, offset: u }),
      p = t.ownerDocument.createRange();
    try {
      p.setStart(c, s), p.setEnd(d, m);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    let f = e.getSelection();
    return f == null || f.removeAllRanges(), f == null || f.addRange(p.cloneRange()), p;
  }
}
function MN(e, t, r) {
  if (r % 3 === 1 || e.length === 0) return [t, t];
  let n = t ?? e.length;
  return r % 3 === 2
    ? [n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length, t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length]
    : [n - e.substr(0, t).match(/[^\r\n]*$/)[0].length, t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length];
}
function xN(e, { document: t, target: r, node: n, offset: o }) {
  let a = Gi({ target: r, node: n, offset: o });
  if ("node" in e) {
    if (a.node === e.node) {
      let i = a.offset < e.start ? e.end : e.start,
        l = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      xr(e.node, { anchorOffset: i, focusOffset: l });
    }
  } else {
    let i = e.cloneRange(),
      l = i.comparePoint(a.node, a.offset);
    l < 0 ? i.setStart(a.node, a.offset) : l > 0 && i.setEnd(a.node, a.offset);
    let u = t.getSelection();
    u == null || u.removeAllRanges(), u == null || u.addRange(i.cloneRange());
  }
}
function dy(e, t) {
  var r, n, o, a, i, l, u, c;
  return (
    e.target !== t.target ||
    ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.y) ||
    ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) ||
    ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !== ((l = t.caret) === null || l === void 0 ? void 0 : l.node) ||
    ((u = e.caret) === null || u === void 0 ? void 0 : u.offset) !== ((c = t.caret) === null || c === void 0 ? void 0 : c.offset)
  );
}
function Lt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var jN = class {
  move(e, t) {
    let r = this.position,
      n = this.getTarget(e);
    if (((this.position = t), !dy(r, t))) return;
    let o = this.getTarget(e),
      a = this.getEventInit("mousemove"),
      [i, l] = Vr(n, o);
    return {
      leave: () => {
        n !== o && (e.dispatchUIEvent(n, "mouseout", a), i.forEach((u) => e.dispatchUIEvent(u, "mouseleave", a)));
      },
      enter: () => {
        n !== o && (e.dispatchUIEvent(o, "mouseover", a), l.forEach((u) => e.dispatchUIEvent(u, "mouseenter", a)));
      },
      move: () => {
        e.dispatchUIEvent(o, "mousemove", a), this.modifySelecting(e);
      },
    };
  }
  down(e, t, r) {
    let n = this.buttons.down(t);
    if (n === void 0) return;
    let o = this.getTarget(e);
    this.buttonDownTarget[n] = o;
    let a = gt(o),
      i = this.getEventInit("mousedown", t.button);
    (a || e.dispatchUIEvent(o, "mousedown", i)) && (this.startSelecting(e, i.detail), Nt(o)),
      !a && bd(t.button) === 2 && e.dispatchUIEvent(o, "contextmenu", this.getEventInit("contextmenu", t.button, r));
  }
  up(e, t, r) {
    let n = this.buttons.up(t);
    if (n === void 0) return;
    let o = this.getTarget(e);
    if (!gt(o)) {
      e.dispatchUIEvent(o, "mouseup", this.getEventInit("mouseup", t.button)), this.endSelecting();
      let a = Vr(this.buttonDownTarget[n], o)[2][0];
      if (a) {
        let i = this.getEventInit("click", t.button, r);
        i.detail &&
          (e.dispatchUIEvent(a, i.button === 0 ? "click" : "auxclick", i),
          i.button === 0 &&
            i.detail === 2 &&
            e.dispatchUIEvent(a, "dblclick", { ...this.getEventInit("dblclick", t.button), detail: i.detail }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(e, t, r) {
    let n = { ...this.position.coords };
    return (
      r && ((n.pointerId = r.pointerId), (n.pointerType = r.pointerType), (n.isPrimary = r.isPrimary)),
      (n.button = bd(t)),
      (n.buttons = this.buttons.getButtons()),
      e === "mousedown"
        ? (n.detail = this.clickCount.getOnDown(n.button))
        : e === "mouseup"
        ? (n.detail = this.clickCount.getOnUp(n.button))
        : (e === "click" || e === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)),
      n
    );
  }
  getTarget(e) {
    var t;
    return (t = this.position.target) !== null && t !== void 0 ? t : e.config.document.body;
  }
  startSelecting(e, t) {
    var r, n;
    this.selecting = AN({
      document: e.config.document,
      target: this.getTarget(e),
      node: (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset,
      clickCount: t,
    });
  }
  modifySelecting(e) {
    var t, r;
    this.selecting &&
      xN(this.selecting, {
        document: e.config.document,
        target: this.getTarget(e),
        node: (t = this.position.caret) === null || t === void 0 ? void 0 : t.node,
        offset: (r = this.position.caret) === null || r === void 0 ? void 0 : r.offset,
      });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    Lt(this, "position", {}),
      Lt(this, "buttons", new uy()),
      Lt(this, "selecting", void 0),
      Lt(this, "buttonDownTarget", {}),
      Lt(
        this,
        "clickCount",
        new (class {
          incOnClick(e) {
            let t = this.down[e] === void 0 ? void 0 : Number(this.down[e]) + 1;
            return (this.count = this.count[e] === void 0 ? {} : { [e]: Number(this.count[e]) + 1 }), t;
          }
          getOnDown(e) {
            var t;
            this.down = { [e]: (t = this.count[e]) !== null && t !== void 0 ? t : 0 };
            var r;
            return (this.count = { [e]: (r = this.count[e]) !== null && r !== void 0 ? r : 0 }), Number(this.count[e]) + 1;
          }
          getOnUp(e) {
            return this.down[e] === void 0 ? void 0 : Number(this.down[e]) + 1;
          }
          reset() {
            this.count = {};
          }
          constructor() {
            Lt(this, "down", {}), Lt(this, "count", {});
          }
        })()
      );
  }
};
function io(e, t) {
  var r;
  return ((r = py(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function NN(e) {
  let t = at(e);
  for (let r = e, n = []; r != null && r.ownerDocument; r = r.parentElement) {
    n.push(r);
    let o = t.getComputedStyle(r).pointerEvents;
    if (o && !["inherit", "unset"].includes(o)) return { pointerEvents: o, tree: n };
  }
}
var yd = Symbol("Last check for pointer-events");
function py(e, t) {
  let r = t[yd];
  if (
    !(
      e.config.pointerEventsCheck !== pr.Never &&
      (!r ||
        (gd(e.config.pointerEventsCheck, pr.EachApiCall) && r[$e.Call] !== Tn(e, $e.Call)) ||
        (gd(e.config.pointerEventsCheck, pr.EachTrigger) && r[$e.Trigger] !== Tn(e, $e.Trigger)))
    )
  )
    return r == null ? void 0 : r.result;
  let n = NN(t);
  return (t[yd] = { [$e.Call]: Tn(e, $e.Call), [$e.Trigger]: Tn(e, $e.Trigger), result: n }), n;
}
function Lr(e, t) {
  let r = py(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === "none")
    throw new Error(
      [
        `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
        "",
        $N(r.tree),
      ].join(`
`)
    );
}
function $N(e) {
  return e
    .reverse()
    .map((t, r) =>
      [
        "".padEnd(r),
        t.tagName,
        t.id && `#${t.id}`,
        t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
        IN(t),
        e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
        e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here",
      ]
        .filter(Boolean)
        .join("")
    ).join(`
`);
}
function IN(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label")) r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, o;
    r =
      (o = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null ||
      o === void 0 ||
      (n = o.textContent) === null ||
      n === void 0
        ? void 0
        : n.trim();
  } else if (
    Y(e, ["button", "input", "meter", "output", "progress", "select", "textarea"]) &&
    !((t = e.labels) === null || t === void 0) &&
    t.length
  )
    r = Array.from(e.labels)
      .map((i) => {
        var l;
        return (l = i.textContent) === null || l === void 0 ? void 0 : l.trim();
      })
      .join("|");
  else if (Y(e, "button")) {
    var a;
    r = (a = e.textContent) === null || a === void 0 ? void 0 : a.trim();
  }
  return (
    (r = r == null ? void 0 : r.replace(/\n/g, "  ")),
    Number(r == null ? void 0 : r.length) > 30 && (r = `${r == null ? void 0 : r.substring(0, 29)}…`),
    r ? `(label=${r})` : ""
  );
}
function gd(e, t) {
  return (e & t) > 0;
}
function Et(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var vd = class {
  init(e, t) {
    this.position = t;
    let r = this.getTarget(e),
      [, n] = Vr(null, r),
      o = this.getEventInit();
    return Lr(e, r), e.dispatchUIEvent(r, "pointerover", o), n.forEach((a) => e.dispatchUIEvent(a, "pointerenter", o)), this;
  }
  move(e, t) {
    let r = this.position,
      n = this.getTarget(e);
    if (((this.position = t), !dy(r, t))) return;
    let o = this.getTarget(e),
      a = this.getEventInit(),
      [i, l] = Vr(n, o);
    return {
      leave: () => {
        io(e, n) && n !== o && (e.dispatchUIEvent(n, "pointerout", a), i.forEach((u) => e.dispatchUIEvent(u, "pointerleave", a)));
      },
      enter: () => {
        Lr(e, o), n !== o && (e.dispatchUIEvent(o, "pointerover", a), l.forEach((u) => e.dispatchUIEvent(u, "pointerenter", a)));
      },
      move: () => {
        e.dispatchUIEvent(o, "pointermove", a);
      },
    };
  }
  down(e, t) {
    if (this.isDown) return;
    let r = this.getTarget(e);
    Lr(e, r), (this.isDown = !0), (this.isPrevented = !e.dispatchUIEvent(r, "pointerdown", this.getEventInit()));
  }
  up(e, t) {
    if (!this.isDown) return;
    let r = this.getTarget(e);
    Lr(e, r), (this.isDown = !1), e.dispatchUIEvent(r, "pointerup", this.getEventInit());
  }
  release(e) {
    let t = this.getTarget(e),
      [r] = Vr(t, null),
      n = this.getEventInit();
    io(e, t) && (e.dispatchUIEvent(t, "pointerout", n), r.forEach((o) => e.dispatchUIEvent(o, "pointerleave", n))), (this.isCancelled = !0);
  }
  getTarget(e) {
    var t;
    return (t = this.position.target) !== null && t !== void 0 ? t : e.config.document.body;
  }
  getEventInit() {
    return { ...this.position.coords, pointerId: this.pointerId, pointerType: this.pointerType, isPrimary: this.isPrimary };
  }
  constructor({ pointerId: e, pointerType: t, isPrimary: r }) {
    Et(this, "pointerId", void 0),
      Et(this, "pointerType", void 0),
      Et(this, "isPrimary", void 0),
      Et(this, "isMultitouch", !1),
      Et(this, "isCancelled", !1),
      Et(this, "isDown", !1),
      Et(this, "isPrevented", !1),
      Et(this, "position", {}),
      (this.pointerId = e),
      (this.pointerType = t),
      (this.isPrimary = r),
      (this.isMultitouch = !r);
  }
};
function Pt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var BN = class {
  isKeyPressed(e) {
    return this.devices.get(e.pointerType).isPressed(e);
  }
  async press(e, t, r) {
    let n = this.getPointerName(t),
      o = t.pointerType === "touch" ? this.pointers.new(n, t).init(e, r) : this.pointers.get(n);
    (o.position = r),
      o.pointerType !== "touch" && (this.mouse.position = r),
      this.devices.get(t.pointerType).addPressed(t),
      this.buttons.down(t),
      o.down(e, t),
      o.pointerType !== "touch" && !o.isPrevented && this.mouse.down(e, t, o);
  }
  async move(e, t, r) {
    let n = this.pointers.get(t),
      o = n.move(e, r),
      a = n.pointerType === "touch" || (n.isPrevented && n.isDown) ? void 0 : this.mouse.move(e, r);
    o == null || o.leave(),
      a == null || a.leave(),
      o == null || o.enter(),
      a == null || a.enter(),
      o == null || o.move(),
      a == null || a.move();
  }
  async release(e, t, r) {
    let n = this.devices.get(t.pointerType);
    n.removePressed(t), this.buttons.up(t);
    let o = this.pointers.get(this.getPointerName(t));
    if (
      ((o.position = r),
      o.pointerType !== "touch" && (this.mouse.position = r),
      n.countPressed === 0 && o.up(e, t),
      o.pointerType === "touch" && o.release(e),
      !o.isPrevented)
    ) {
      if (o.pointerType === "touch" && !o.isMultitouch) {
        let a = this.mouse.move(e, o.position);
        a == null || a.leave(), a == null || a.enter(), a == null || a.move(), this.mouse.down(e, t, o);
      }
      if (!o.isMultitouch) {
        let a = this.mouse.move(e, o.position);
        a == null || a.leave(), a == null || a.enter(), a == null || a.move(), this.mouse.up(e, t, o);
      }
    }
  }
  getPointerName(e) {
    return e.pointerType === "touch" ? e.name : e.pointerType;
  }
  getPreviousPosition(e) {
    return this.pointers.has(e) ? this.pointers.get(e).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(e) {
    var t;
    return (t = this.mouse.position.target) !== null && t !== void 0 ? t : e.config.document.body;
  }
  setMousePosition(e) {
    (this.mouse.position = e), (this.pointers.get("mouse").position = e);
  }
  constructor(e) {
    Pt(this, "system", void 0),
      Pt(this, "mouse", void 0),
      Pt(this, "buttons", void 0),
      Pt(
        this,
        "devices",
        new (class {
          get(t) {
            var r, n, o;
            return ((o = (r = this.registry)[(n = t)]) !== null && o !== void 0) || (r[n] = new SN()), this.registry[t];
          }
          constructor() {
            Pt(this, "registry", {});
          }
        })()
      ),
      Pt(
        this,
        "pointers",
        new (class {
          new(t, r) {
            let n = r.pointerType !== "touch" || !Object.values(this.registry).some((o) => o.pointerType === "touch" && !o.isCancelled);
            return (
              n ||
                Object.values(this.registry).forEach((o) => {
                  o.pointerType === r.pointerType && !o.isCancelled && (o.isMultitouch = !0);
                }),
              (this.registry[t] = new vd({ pointerId: this.nextId++, pointerType: r.pointerType, isPrimary: n })),
              this.registry[t]
            );
          }
          get(t) {
            if (!this.has(t)) throw new Error(`Trying to access pointer "${t}" which does not exist.`);
            return this.registry[t];
          }
          has(t) {
            return t in this.registry;
          }
          constructor() {
            Pt(this, "registry", { mouse: new vd({ pointerId: 1, pointerType: "mouse", isPrimary: !0 }) }), Pt(this, "nextId", 2);
          }
        })()
      ),
      (this.system = e),
      (this.buttons = new uy()),
      (this.mouse = new jN());
  }
};
function _d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var my = class {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock,
    };
  }
  constructor() {
    _d(this, "keyboard", new qN(this)), _d(this, "pointer", new BN(this));
  }
};
async function kN(e) {
  let t = [];
  return this.config.skipHover || t.push({ target: e }), t.push({ keys: "[MouseLeft]", target: e }), this.pointer(t);
}
async function LN(e) {
  return this.pointer([{ target: e }, "[MouseLeft][MouseLeft]"]);
}
async function DN(e) {
  return this.pointer([{ target: e }, "[MouseLeft][MouseLeft][MouseLeft]"]);
}
async function FN(e) {
  return this.pointer({ target: e });
}
async function HN(e) {
  return Lr(this, this.system.pointer.getMouseTarget(this)), this.pointer({ target: e.ownerDocument.body });
}
async function UN({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
function VN(e, t) {
  let r = [];
  do {
    let { type: o, descriptor: a, consumedLength: i, releasePrevious: l, releaseSelf: u = !0, repeat: c } = Kb(t, "keyboard");
    var n;
    let s =
      (n = e.find((d) => {
        if (o === "[") {
          var m;
          return ((m = d.code) === null || m === void 0 ? void 0 : m.toLowerCase()) === a.toLowerCase();
        } else if (o === "{") {
          var p;
          return ((p = d.key) === null || p === void 0 ? void 0 : p.toLowerCase()) === a.toLowerCase();
        }
        return d.key === a;
      })) !== null && n !== void 0
        ? n
        : { key: "Unknown", code: "Unknown", [o === "[" ? "code" : "key"]: a };
    r.push({ keyDef: s, releasePrevious: l, releaseSelf: u, repeat: c }), (t = t.slice(i));
  } while (t);
  return r;
}
async function zN(e) {
  let t = VN(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++) await Tr(this.config), await GN(this, t[r]);
}
async function GN(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  let { system: a } = e;
  if ((a.keyboard.isKeyPressed(t) && (await a.keyboard.keyup(e, t)), !r)) {
    for (let i = 1; i <= o; i++) await a.keyboard.keydown(e, t), i < o && (await Tr(e.config));
    n && (await a.keyboard.keyup(e, t));
  }
}
async function WN(e) {
  for (let t of e.system.keyboard.getPressedKeys()) await e.system.keyboard.keyup(e, t);
}
function fy(e) {
  let t = it(e) ? { "text/plain": KN(e) } : { "text/plain": String(e.ownerDocument.getSelection()) },
    r = Cs(at(e));
  for (let n in t) t[n] && r.setData(n, t[n]);
  return r;
}
function KN(e) {
  let t = un(e);
  return lt(e).substring(t.startOffset, t.endOffset);
}
async function YN() {
  let e = this.config.document;
  var t;
  let r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
    n = fy(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", { clipboardData: n }) && this.config.writeToClipboard && (await zb(e, n)), n;
}
async function JN() {
  let e = this.config.document;
  var t;
  let r = (t = e.activeElement) !== null && t !== void 0 ? t : e.body,
    n = fy(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", { clipboardData: n }) && this.config.writeToClipboard && (await zb(r.ownerDocument, n)), n;
}
async function XN(e) {
  let t = this.config.document;
  var r;
  let n = (r = t.activeElement) !== null && r !== void 0 ? r : t.body;
  var o;
  let a =
    (o = typeof e == "string" ? QN(t, e) : e) !== null && o !== void 0
      ? o
      : await _j(t).catch(() => {
          throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
        });
  this.dispatchUIEvent(n, "paste", { clipboardData: a });
}
function QN(e, t) {
  let r = Cs(at(e));
  return r.setData("text", t), r;
}
function Rd(e, t) {
  let r = [];
  do {
    let { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = Kb(t, "pointer"),
      l = e.find((u) => u.name === n);
    l && r.push({ keyDef: l, releasePrevious: a, releaseSelf: i }), (t = t.slice(o));
  } while (t);
  return r;
}
async function ZN(e) {
  let { pointerMap: t } = this.config,
    r = [];
  (Array.isArray(e) ? e : [e]).forEach((n) => {
    typeof n == "string" ? r.push(...Rd(t, n)) : "keys" in n ? r.push(...Rd(t, n.keys).map((o) => ({ ...n, ...o }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++) await Tr(this.config), await e$(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function e$(e, t) {
  var r, n;
  let o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse",
    a = e.system.pointer.getPreviousPosition(o);
  var i, l, u, c;
  let s = {
    target: (i = t.target) !== null && i !== void 0 ? i : t$(e, a),
    coords: (l = t.coords) !== null && l !== void 0 ? l : a == null ? void 0 : a.coords,
    caret: {
      node: (u = t.node) !== null && u !== void 0 ? u : wd(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset:
        (c = t.offset) !== null && c !== void 0 ? c : wd(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset,
    },
  };
  "keyDef" in t
    ? (e.system.pointer.isKeyPressed(t.keyDef) && (Br(e, $e.Trigger), await e.system.pointer.release(e, t.keyDef, s)),
      t.releasePrevious ||
        (Br(e, $e.Trigger),
        await e.system.pointer.press(e, t.keyDef, s),
        t.releaseSelf && (Br(e, $e.Trigger), await e.system.pointer.release(e, t.keyDef, s))))
    : (Br(e, $e.Trigger), await e.system.pointer.move(e, o, s));
}
function wd(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function t$(e, t) {
  if (!t) throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function r$(e) {
  if (!qr(e) || gt(e)) throw new Error("clear()` is only supported on editable elements.");
  if ((Nt(e), e.ownerDocument.activeElement !== e)) throw new Error("The element to be cleared could not be focused.");
  if ((ny(e), !tN(e))) throw new Error("The element content to be cleared could not be selected.");
  Or(this, e, "", "deleteContentBackward");
}
async function n$(e, t) {
  return hy.call(this, !0, e, t);
}
async function o$(e, t) {
  return hy.call(this, !1, e, t);
}
async function hy(e, t, r) {
  if (!e && !t.multiple)
    throw X().getElementError(
      "Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.",
      t
    );
  let n = Array.isArray(r) ? r : [r],
    o = Array.from(t.querySelectorAll('option, [role="option"]')),
    a = n
      .map((l) => {
        if (typeof l != "string" && o.includes(l)) return l;
        {
          let u = o.find((c) => c.value === l || c.innerHTML === l);
          if (u) return u;
          throw X().getElementError(`Value "${String(l)}" not found in options`, t);
        }
      })
      .filter((l) => !gt(l));
  if (gt(t) || !a.length) return;
  let i = (l) => {
    (l.selected = e), this.dispatchUIEvent(t, "input", { bubbles: !0, cancelable: !1, composed: !0 }), this.dispatchUIEvent(t, "change");
  };
  if (Y(t, "select"))
    if (t.multiple)
      for (let l of a) {
        let u = this.config.pointerEventsCheck === 0 ? !0 : io(this, l);
        u &&
          (this.dispatchUIEvent(l, "pointerover"),
          this.dispatchUIEvent(t, "pointerenter"),
          this.dispatchUIEvent(l, "mouseover"),
          this.dispatchUIEvent(t, "mouseenter"),
          this.dispatchUIEvent(l, "pointermove"),
          this.dispatchUIEvent(l, "mousemove"),
          this.dispatchUIEvent(l, "pointerdown"),
          this.dispatchUIEvent(l, "mousedown")),
          Nt(t),
          u && (this.dispatchUIEvent(l, "pointerup"), this.dispatchUIEvent(l, "mouseup")),
          i(l),
          u && this.dispatchUIEvent(l, "click"),
          await Tr(this.config);
      }
    else if (a.length === 1) {
      let l = this.config.pointerEventsCheck === 0 ? !0 : io(this, t);
      l ? await this.click(t) : Nt(t),
        i(a[0]),
        l &&
          (this.dispatchUIEvent(t, "pointerover"),
          this.dispatchUIEvent(t, "pointerenter"),
          this.dispatchUIEvent(t, "mouseover"),
          this.dispatchUIEvent(t, "mouseenter"),
          this.dispatchUIEvent(t, "pointerup"),
          this.dispatchUIEvent(t, "mouseup"),
          this.dispatchUIEvent(t, "click")),
        await Tr(this.config);
    } else throw X().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox") for (let l of a) await this.click(l), await this.unhover(l);
  else throw X().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function a$(
  e,
  t,
  {
    skipClick: r = this.config.skipClick,
    skipAutoClose: n = this.config.skipAutoClose,
    initialSelectionStart: o,
    initialSelectionEnd: a,
  } = {}
) {
  e.disabled || (r || (await this.click(e)), o !== void 0 && kr(e, o, a ?? o), await this.keyboard(t), n || (await WN(this)));
}
var Cd = Symbol("files and value properties are mocked");
function Va(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function i$(e, t) {
  var r;
  (r = e[Cd]) === null || r === void 0 || r.restore();
  let n = Object.getOwnPropertyDescriptor(e, "type"),
    o = Object.getOwnPropertyDescriptor(e, "value"),
    a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    Va(e, "type", n), Va(e, "value", o), Va(e, "files", a);
  }
  (e[Cd] = { restore: i }),
    Object.defineProperties(e, {
      files: { configurable: !0, get: () => t },
      value: {
        configurable: !0,
        get: () => (t.length ? `C:\\fakepath\\${t[0].name}` : ""),
        set(l) {
          if (l === "") i();
          else {
            var u;
            o == null || (u = o.set) === null || u === void 0 || u.call(e, l);
          }
        },
      },
      type: {
        configurable: !0,
        get: () => "file",
        set(l) {
          l !== "file" && (i(), (e.type = l));
        },
      },
    });
}
async function l$(e, t) {
  let r = Y(e, "label") ? e.control : e;
  if (!r || !Y(r, "input", { type: "file" }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r == null ? void 0 : r.tagName} element does not accept file uploads`);
  if (gt(e)) return;
  let n = (Array.isArray(t) ? t : [t]).filter((a) => !this.config.applyAccept || s$(a, r.accept)).slice(0, r.multiple ? void 0 : 1),
    o = () => {
      var a;
      (n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) &&
        n.every((i, l) => {
          var u;
          return i === ((u = r.files) === null || u === void 0 ? void 0 : u.item(l));
        })) ||
        (i$(r, ws(at(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
    };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function s$(e, t) {
  if (!t) return !0;
  let r = ["audio/*", "image/*", "video/*"];
  return t
    .split(",")
    .some((n) => (n.startsWith(".") ? e.name.endsWith(n) : r.includes(n) ? e.type.startsWith(n.substr(0, n.length - 1)) : e.type === n));
}
var qd = {
  click: kN,
  dblClick: LN,
  tripleClick: DN,
  hover: FN,
  unhover: HN,
  tab: UN,
  keyboard: zN,
  copy: YN,
  cut: JN,
  paste: XN,
  pointer: ZN,
  clear: r$,
  deselectOptions: o$,
  selectOptions: n$,
  type: a$,
  upload: l$,
};
function u$(e) {
  return X().asyncWrapper(e);
}
var by = {
    applyAccept: !0,
    autoModify: !0,
    delay: 0,
    document: globalThis.document,
    keyboardMap: EN,
    pointerMap: PN,
    pointerEventsCheck: pr.EachApiCall,
    skipAutoClose: !1,
    skipClick: !1,
    skipHover: !1,
    writeToClipboard: !1,
    advanceTimers: () => Promise.resolve(),
  },
  c$ = { ...by, writeToClipboard: !0 };
function yy(e = {}, t = c$, r) {
  let n = f$(e, r, t);
  return { ...t, ...e, document: n };
}
function d$(e = {}) {
  let t = yy(e);
  sy(t.document);
  var r;
  let n = (r = t.document.defaultView) !== null && r !== void 0 ? r : globalThis.window;
  return yj(n), Ts(t).api;
}
function je({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  let o = yy(r, by, n);
  sy(o.document);
  var a;
  let i = (a = t ?? e) !== null && a !== void 0 ? a : new my();
  return { api: Ts(o, i).api, system: i };
}
function p$(e) {
  return Ts({ ...this.config, ...e }, this.system).api;
}
function m$(e, t) {
  function r(...n) {
    return Br(e, $e.Call), u$(() => t.apply(e, n).then(async (o) => (await Tr(e.config), o)));
  }
  return Object.defineProperty(r, "name", { get: () => t.name }), r;
}
function Ts(e, t = new my()) {
  let r = {};
  return (
    Object.assign(r, { config: e, dispatchEvent: ly.bind(r), dispatchUIEvent: fN.bind(r), system: t, levelRefs: {}, ...qd }),
    { instance: r, api: { ...Object.fromEntries(Object.entries(qd).map(([n, o]) => [n, m$(r, o)])), setup: p$.bind(r) } }
  );
}
function f$(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && _N(t)) !== null && o !== void 0 ? o : r.document;
}
var gy = {};
il(gy, {
  clear: () => h$,
  click: () => b$,
  copy: () => y$,
  cut: () => g$,
  dblClick: () => v$,
  deselectOptions: () => _$,
  hover: () => R$,
  keyboard: () => w$,
  paste: () => q$,
  pointer: () => C$,
  selectOptions: () => E$,
  tab: () => A$,
  tripleClick: () => P$,
  type: () => O$,
  unhover: () => T$,
  upload: () => S$,
});
function h$(e) {
  return je().api.clear(e);
}
function b$(e, t = {}) {
  return je(t, e).api.click(e);
}
function y$(e = {}) {
  return je(e).api.copy();
}
function g$(e = {}) {
  return je(e).api.cut();
}
function v$(e, t = {}) {
  return je(t).api.dblClick(e);
}
function _$(e, t, r = {}) {
  return je(r).api.deselectOptions(e, t);
}
function R$(e, t = {}) {
  return je(t).api.hover(e);
}
async function w$(e, t = {}) {
  let { api: r, system: n } = je(t);
  return r.keyboard(e).then(() => n);
}
async function C$(e, t = {}) {
  let { api: r, system: n } = je(t);
  return r.pointer(e).then(() => n);
}
function q$(e, t) {
  return je(t).api.paste(e);
}
function E$(e, t, r = {}) {
  return je(r).api.selectOptions(e, t);
}
function P$(e, t = {}) {
  return je(t).api.tripleClick(e);
}
function O$(e, t, r = {}) {
  return je(r, e).api.type(e, t, r);
}
function T$(e, t = {}) {
  let { api: r, system: n } = je(t);
  return n.pointer.setMousePosition({ target: e }), r.unhover(e);
}
function S$(e, t, r = {}) {
  return je(r).api.upload(e, t);
}
function A$(e = {}) {
  return je().api.tab(e);
}
var M$ = { ...gy, setup: d$ };
function x$(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function (l, u) {
    var c = u.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? l.concat(
          c.map(function (s) {
            var d, m;
            return (m = (d = s.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && m !== void 0 ? m : 0;
          })
        )
      : l;
  }, []);
  if (o.length) {
    var a = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        "}",
      "g"
    );
    n = n.map(function (l) {
      return l.replace(
        a,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return (
    t.forEach(function (l, u) {
      var c = i.match(/(?:^|\n)( *)$/),
        s = c ? c[1] : "",
        d = l;
      typeof l == "string" &&
        l.includes(`
`) &&
        (d = String(l)
          .split(
            `
`
          )
          .map(function (m, p) {
            return p === 0 ? m : "" + s + m;
          }).join(`
`)),
        (i += d + n[u + 1]);
    }),
    i
  );
}
var j$ = x$,
  Wi = ol({ ...fh }, { intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("find") || e.startsWith("waitFor") });
Wi.screen = new Proxy(Wi.screen, {
  get(e, t, r) {
    return (
      g0.warn(j$`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/essentials/interactions
        `),
      Reflect.get(e, t, r)
    );
  },
});
var {
    buildQueries: N$,
    configure: $$,
    createEvent: I$,
    fireEvent: B$,
    findAllByAltText: k$,
    findAllByDisplayValue: L$,
    findAllByLabelText: D$,
    findAllByPlaceholderText: F$,
    findAllByRole: H$,
    findAllByTestId: U$,
    findAllByText: V$,
    findAllByTitle: z$,
    findByAltText: G$,
    findByDisplayValue: W$,
    findByLabelText: K$,
    findByPlaceholderText: Y$,
    findByRole: J$,
    findByTestId: X$,
    findByText: Q$,
    findByTitle: Z$,
    getAllByAltText: eI,
    getAllByDisplayValue: tI,
    getAllByLabelText: rI,
    getAllByPlaceholderText: nI,
    getAllByRole: oI,
    getAllByTestId: aI,
    getAllByText: iI,
    getAllByTitle: lI,
    getByAltText: sI,
    getByDisplayValue: uI,
    getByLabelText: cI,
    getByPlaceholderText: dI,
    getByRole: pI,
    getByTestId: mI,
    getByText: fI,
    getByTitle: hI,
    getConfig: bI,
    getDefaultNormalizer: yI,
    getElementError: gI,
    getNodeText: vI,
    getQueriesForElement: _I,
    getRoles: RI,
    getSuggestedQuery: wI,
    isInaccessible: CI,
    logDOM: qI,
    logRoles: EI,
    prettyDOM: PI,
    queries: OI,
    queryAllByAltText: TI,
    queryAllByAttribute: SI,
    queryAllByDisplayValue: AI,
    queryAllByLabelText: MI,
    queryAllByPlaceholderText: xI,
    queryAllByRole: jI,
    queryAllByTestId: NI,
    queryAllByText: $I,
    queryAllByTitle: II,
    queryByAltText: BI,
    queryByAttribute: kI,
    queryByDisplayValue: LI,
    queryByLabelText: DI,
    queryByPlaceholderText: FI,
    queryByRole: HI,
    queryByTestId: UI,
    queryByText: VI,
    queryByTitle: zI,
    queryHelpers: GI,
    screen: WI,
    waitFor: KI,
    waitForElementToBeRemoved: YI,
    within: vy,
    prettyFormat: JI,
  } = Wi,
  { userEvent: XI } = ol({ userEvent: M$ }, { intercept: !0 }),
  { expect: QI } = ol(
    { expect: lh },
    {
      getKeys: (e, t) => {
        let r = ["assert", "__methods", "__flags", "_obj"];
        if (e.constructor === T) {
          let n = Object.keys(Object.getPrototypeOf(e)).filter((o) => !r.includes(o));
          return t > 2 ? n : [...n, "not"];
        }
        return Object.keys(e);
      },
      intercept: (e) => e !== "expect",
    }
  ),
  ZI = ({ parameters: e }) => {
    var t, r, n;
    ((t = e == null ? void 0 : e.test) == null ? void 0 : t.mockReset) === !0
      ? ph()
      : ((r = e == null ? void 0 : e.test) == null ? void 0 : r.clearMocks) === !0
      ? dh()
      : ((n = e == null ? void 0 : e.test) == null ? void 0 : n.restoreMocks) !== !1 && mh();
  },
  lo = (e, t = 0, r) => {
    var n;
    if (t > 5 || e == null) return e;
    if (ls(e)) return r && e.mockName(r), e;
    if (typeof e == "function" && "isAction" in e && e.isAction && !("implicit" in e && e.implicit)) {
      let o = uh(e);
      return r && o.mockName(r), o;
    }
    if (Array.isArray(e)) return t++, e.map((o) => lo(o, t));
    if (typeof e == "object" && e.constructor === Object) {
      t++;
      for (let [o, a] of Object.entries(e)) (n = Object.getOwnPropertyDescriptor(e, o)) != null && n.writable && (e[o] = lo(a, t, o));
      return e;
    }
    return e;
  },
  e2 = ({ initialArgs: e }) => {
    lo(e);
  },
  t2 = (e) => {
    globalThis.HTMLElement && e.canvasElement instanceof globalThis.HTMLElement && (e.canvas = vy(e.canvasElement));
  };
sp.__STORYBOOK_TEST_LOADERS__ = [ZI, e2, t2];
sp.__STORYBOOK_TEST_ON_MOCK_CALL__ = sh;
const l2 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      buildQueries: N$,
      clearAllMocks: dh,
      configure: $$,
      createEvent: I$,
      expect: QI,
      findAllByAltText: k$,
      findAllByDisplayValue: L$,
      findAllByLabelText: D$,
      findAllByPlaceholderText: F$,
      findAllByRole: H$,
      findAllByTestId: U$,
      findAllByText: V$,
      findAllByTitle: z$,
      findByAltText: G$,
      findByDisplayValue: W$,
      findByLabelText: K$,
      findByPlaceholderText: Y$,
      findByRole: J$,
      findByTestId: X$,
      findByText: Q$,
      findByTitle: Z$,
      fireEvent: B$,
      fn: uh,
      getAllByAltText: eI,
      getAllByDisplayValue: tI,
      getAllByLabelText: rI,
      getAllByPlaceholderText: nI,
      getAllByRole: oI,
      getAllByTestId: aI,
      getAllByText: iI,
      getAllByTitle: lI,
      getByAltText: sI,
      getByDisplayValue: uI,
      getByLabelText: cI,
      getByPlaceholderText: dI,
      getByRole: pI,
      getByTestId: mI,
      getByText: fI,
      getByTitle: hI,
      getConfig: bI,
      getDefaultNormalizer: yI,
      getElementError: gI,
      getNodeText: vI,
      getQueriesForElement: _I,
      getRoles: RI,
      getSuggestedQuery: wI,
      isInaccessible: CI,
      isMockFunction: ls,
      logDOM: qI,
      logRoles: EI,
      mocked: lM,
      mocks: gn,
      onMockCall: sh,
      prettyDOM: PI,
      prettyFormat: JI,
      queries: OI,
      queryAllByAltText: TI,
      queryAllByAttribute: SI,
      queryAllByDisplayValue: AI,
      queryAllByLabelText: MI,
      queryAllByPlaceholderText: xI,
      queryAllByRole: jI,
      queryAllByTestId: NI,
      queryAllByText: $I,
      queryAllByTitle: II,
      queryByAltText: BI,
      queryByAttribute: kI,
      queryByDisplayValue: LI,
      queryByLabelText: DI,
      queryByPlaceholderText: FI,
      queryByRole: HI,
      queryByTestId: UI,
      queryByText: VI,
      queryByTitle: zI,
      queryHelpers: GI,
      resetAllMocks: ph,
      restoreAllMocks: mh,
      screen: WI,
      spyOn: iM,
      traverseArgs: lo,
      userEvent: XI,
      waitFor: KI,
      waitForElementToBeRemoved: YI,
      within: vy,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { l2 as a, ol as i };
