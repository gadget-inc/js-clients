var Qi = Object.defineProperty;
var Zi = (e, t, r) => (t in e ? Qi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
var _e = (e, t, r) => (Zi(e, typeof t != "symbol" ? t + "" : t, r), r);
import "../sb-preview/runtime.js";
import { m as ea } from "./DocsRenderer-K4EAMTCU-40239516.js";
import "./_commonjs-dynamic-modules-c617d3ef.js";
import "./_getPrototype-374d77d3.js";
import "./extends-98964cd2.js";
import "./iframe-5aa777a6.js";
import "./index-0511f421.js";
import "./index-356e4a49.js";
import "./index-8c3ac41d.js";
import "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./react-18-9fc0415d.js";
var ta = Object.defineProperty,
  pu = (e, t) => {
    for (var r in t) ta(e, r, { get: t[r], enumerable: !0 });
  },
  hu = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  se = (e, t, r) => (hu(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
  ra = (e, t, r) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  na = (e, t, r, n) => (hu(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
  du = {};
pu(du, { languages: () => Vl, options: () => zl, parsers: () => Gu, printers: () => Gl });
var ua = (e, t, r, n) => {
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  },
  O = ua,
  Br = "string",
  xr = "array",
  Tr = "cursor",
  Bt = "indent",
  xt = "align",
  Lr = "trim",
  Ye = "group",
  Tt = "fill",
  Lt = "if-break",
  Nt = "indent-if-break",
  Nr = "line-suffix",
  qr = "line-suffix-boundary",
  be = "line",
  Pr = "label",
  qt = "break-parent",
  Du = new Set([Tr, Bt, xt, Lr, Ye, Tt, Lt, Nt, Nr, qr, be, Pr, qt]);
function ia(e) {
  if (typeof e == "string") return Br;
  if (Array.isArray(e)) return xr;
  if (!e) return;
  let { type: t } = e;
  if (Du.has(t)) return t;
}
var Ir = ia,
  aa = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function sa(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object")
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Ir(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = aa([...Du].map((u) => `'${u}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var oa = class extends Error {
    constructor(t) {
      super(sa(t));
      _e(this, "name", "InvalidDocError");
      this.doc = t;
    }
  },
  fu = oa,
  la = () => {},
  ca = la;
function we(e) {
  return { type: Bt, contents: e };
}
function mu(e, t) {
  return { type: xt, contents: t, n: e };
}
function q(e, t = {}) {
  return ca(t.expandedStates), { type: Ye, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function pa(e) {
  return mu(Number.NEGATIVE_INFINITY, e);
}
function ha(e) {
  return mu({ type: "root" }, e);
}
function gu(e) {
  return { type: Tt, parts: e };
}
function bt(e, t = "", r = {}) {
  return { type: Lt, breakContents: e, flatContents: t, groupId: r.groupId };
}
function da(e, t) {
  return { type: Nt, contents: e, groupId: t.groupId, negate: t.negate };
}
var Ze = { type: qt },
  Da = { type: be, hard: !0 },
  fa = { type: be, hard: !0, literal: !0 },
  L = { type: be },
  I = { type: be, soft: !0 },
  A = [Da, Ze],
  ma = [fa, Ze];
function et(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var ga = (e, t, r) => {
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  },
  Pt = ga;
function Or(e, t) {
  if (typeof e == "string") return t(e);
  let r = new Map();
  return n(e);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = u(i);
    return r.set(i, a), a;
  }
  function u(i) {
    switch (Ir(i)) {
      case xr:
        return t(i.map(n));
      case Tt:
        return t({ ...i, parts: i.parts.map(n) });
      case Lt:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case Ye: {
        let { expandedStates: a, contents: s } = i;
        return a ? ((a = a.map(n)), (s = a[0])) : (s = n(s)), t({ ...i, contents: s, expandedStates: a });
      }
      case xt:
      case Bt:
      case Nt:
      case Pr:
      case Nr:
        return t({ ...i, contents: n(i.contents) });
      case Br:
      case Tr:
      case Lr:
      case qr:
      case be:
      case qt:
        return t(i);
      default:
        throw new fu(i);
    }
  }
}
function Ca(e) {
  switch (Ir(e)) {
    case Tt:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case Ye:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (
        e.contents.type === Ye &&
        e.contents.id === e.id &&
        e.contents.break === e.break &&
        e.contents.expandedStates === e.expandedStates
      )
        return e.contents;
      break;
    case xt:
    case Bt:
    case Nt:
    case Nr:
      if (!e.contents) return "";
      break;
    case Lt:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case xr: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...u] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof Pt(!1, t, -1) == "string" ? (t[t.length - 1] += n) : t.push(n), t.push(...u);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Br:
    case Tr:
    case Lr:
    case qr:
    case be:
    case Pr:
    case qt:
      break;
    default:
      throw new fu(e);
  }
  return e;
}
function Fa(e) {
  return Or(e, (t) => Ca(t));
}
function G(e, t = ma) {
  return Or(e, (r) =>
    typeof r == "string"
      ? et(
          t,
          r.split(`
`)
        )
      : r
  );
}
var va = class extends Error {
    constructor(t, r, n = "type") {
      super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`);
      _e(this, "name", "UnexpectedNodeError");
      this.node = t;
    }
  },
  ya = va,
  lt = "'",
  cn = '"';
function Ea(e, t) {
  let r = t === !0 || t === lt ? lt : cn,
    n = r === lt ? cn : lt,
    u = 0,
    i = 0;
  for (let a of e) a === r ? u++ : a === n && i++;
  return u > i ? n : r;
}
var ba = Ea;
function wa(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var U,
  Sa = class {
    constructor(e) {
      ra(this, U, void 0), na(this, U, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
      let t = se(this, U),
        r = 0;
      for (let n = 0; n < e.length && t.has(e.charAt(n)); n++) r++;
      return r;
    }
    getTrailingWhitespaceCount(e) {
      let t = se(this, U),
        r = 0;
      for (let n = e.length - 1; n >= 0 && t.has(e.charAt(n)); n--) r++;
      return r;
    }
    getLeadingWhitespace(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(0, t);
    }
    getTrailingWhitespace(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - t);
    }
    hasLeadingWhitespace(e) {
      return se(this, U).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
      return se(this, U).has(Pt(!1, e, -1));
    }
    trimStart(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(t);
    }
    trimEnd(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - t);
    }
    trim(e) {
      return this.trimEnd(this.trimStart(e));
    }
    split(e, t = !1) {
      let r = `[${wa([...se(this, U)].join(""))}]+`,
        n = new RegExp(t ? `(${r})` : r);
      return e.split(n);
    }
    hasWhitespaceCharacter(e) {
      let t = se(this, U);
      return Array.prototype.some.call(e, (r) => t.has(r));
    }
    hasNonWhitespaceCharacter(e) {
      let t = se(this, U);
      return Array.prototype.some.call(e, (r) => !t.has(r));
    }
    isWhitespaceOnly(e) {
      let t = se(this, U);
      return Array.prototype.every.call(e, (r) => t.has(r));
    }
  };
U = new WeakMap();
var Aa = Sa,
  ka = [
    "	",
    `
`,
    "\f",
    "\r",
    " ",
  ],
  _a = new Aa(ka),
  ce = _a;
function Ba(e) {
  return (e == null ? void 0 : e.type) === "front-matter";
}
var It = Ba,
  xa = new Set([
    "sourceSpan",
    "startSourceSpan",
    "endSourceSpan",
    "nameSpan",
    "valueSpan",
    "keySpan",
    "tagDefinition",
    "tokens",
    "valueTokens",
  ]),
  Ta = new Set(["if", "else if", "for", "switch", "case"]);
function Cu(e, t) {
  var r;
  if (e.type === "text" || e.type === "comment" || It(e) || e.type === "yaml" || e.type === "toml") return null;
  if (
    (e.type === "attribute" && delete t.value,
    e.type === "docType" && delete t.value,
    e.type === "angularControlFlowBlock" && (r = t.parameters) != null && r.children)
  )
    for (let n of t.parameters.children) Ta.has(e.name) ? delete n.expression : (n.expression = n.expression.trim());
}
Cu.ignoredProperties = xa;
var La = Cu,
  Na = (e) => String(e).split(/[/\\]/).pop();
function pn(e, t) {
  if (!t) return;
  let r = Na(t).toLowerCase();
  return e.find((n) => {
    var u, i;
    return (
      ((u = n.extensions) == null ? void 0 : u.some((a) => r.endsWith(a))) ||
      ((i = n.filenames) == null ? void 0 : i.some((a) => a.toLowerCase() === r))
    );
  });
}
function qa(e, t) {
  if (t)
    return (
      e.find(({ name: r }) => r.toLowerCase() === t) ??
      e.find(({ aliases: r }) => (r == null ? void 0 : r.includes(t))) ??
      e.find(({ extensions: r }) => (r == null ? void 0 : r.includes(`.${t}`)))
    );
}
function Pa(e, t) {
  let r = e.plugins.flatMap((u) => u.languages ?? []),
    n = qa(r, t.language) ?? pn(r, t.physicalFile) ?? pn(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Ot = Pa,
  Ia = "inline",
  Oa = {
    area: "none",
    base: "none",
    basefont: "none",
    datalist: "none",
    head: "none",
    link: "none",
    meta: "none",
    noembed: "none",
    noframes: "none",
    param: "block",
    rp: "none",
    script: "block",
    style: "none",
    template: "inline",
    title: "none",
    html: "block",
    body: "block",
    address: "block",
    blockquote: "block",
    center: "block",
    dialog: "block",
    div: "block",
    figure: "block",
    figcaption: "block",
    footer: "block",
    form: "block",
    header: "block",
    hr: "block",
    legend: "block",
    listing: "block",
    main: "block",
    p: "block",
    plaintext: "block",
    pre: "block",
    search: "block",
    xmp: "block",
    slot: "contents",
    ruby: "ruby",
    rt: "ruby-text",
    article: "block",
    aside: "block",
    h1: "block",
    h2: "block",
    h3: "block",
    h4: "block",
    h5: "block",
    h6: "block",
    hgroup: "block",
    nav: "block",
    section: "block",
    dir: "block",
    dd: "block",
    dl: "block",
    dt: "block",
    menu: "block",
    ol: "block",
    ul: "block",
    li: "list-item",
    table: "table",
    caption: "table-caption",
    colgroup: "table-column-group",
    col: "table-column",
    thead: "table-header-group",
    tbody: "table-row-group",
    tfoot: "table-footer-group",
    tr: "table-row",
    td: "table-cell",
    th: "table-cell",
    input: "inline-block",
    button: "inline-block",
    fieldset: "block",
    marquee: "inline-block",
    source: "block",
    track: "block",
    details: "block",
    summary: "block",
    meter: "inline-block",
    progress: "inline-block",
    object: "inline-block",
    video: "inline-block",
    audio: "inline-block",
    select: "inline-block",
    option: "block",
    optgroup: "block",
  },
  Ma = "normal",
  Ra = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function Ha(e) {
  return e.type === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var Xe = Ha,
  ja = (e) => O(!1, e, /^[\t\f\r ]*\n/g, ""),
  Fu = (e) => ja(ce.trimEnd(e)),
  $a = (e) => {
    let t = e,
      r = ce.getLeadingWhitespace(t);
    r && (t = t.slice(r.length));
    let n = ce.getTrailingWhitespace(t);
    return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
  };
function vu(e, t) {
  return !!(
    (e.type === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan) ||
    (e.type === "ieConditionalComment" && !e.complete) ||
    (Pe(e) && e.children.some((r) => r.type !== "text" && r.type !== "interpolation")) ||
    (Hr(e, t) && !ee(e) && e.type !== "interpolation")
  );
}
function Mr(e) {
  return e.type === "attribute" || !e.parent || !e.prev ? !1 : Wa(e.prev);
}
function Wa(e) {
  return e.type === "comment" && e.value.trim() === "prettier-ignore";
}
function H(e) {
  return e.type === "text" || e.type === "comment";
}
function ee(e) {
  return (
    e.type === "element" &&
    (e.fullName === "script" ||
      e.fullName === "style" ||
      e.fullName === "svg:style" ||
      e.fullName === "svg:script" ||
      (Xe(e) && (e.name === "script" || e.name === "style")))
  );
}
function Va(e) {
  return e.children && !ee(e);
}
function Ua(e) {
  return ee(e) || e.type === "interpolation" || yu(e);
}
function yu(e) {
  return _u(e).startsWith("pre");
}
function za(e, t) {
  var r, n;
  let u = i();
  if (u && !e.prev && (n = (r = e.parent) == null ? void 0 : r.tagDefinition) != null && n.ignoreFirstLf) return e.type === "interpolation";
  return u;
  function i() {
    return It(e) || e.type === "angularControlFlowBlock"
      ? !1
      : (e.type === "text" || e.type === "interpolation") && e.prev && (e.prev.type === "text" || e.prev.type === "interpolation")
      ? !0
      : !e.parent || e.parent.cssDisplay === "none"
      ? !1
      : Pe(e.parent)
      ? !0
      : !(
          (!e.prev && (e.parent.type === "root" || (Pe(e) && e.parent) || ee(e.parent) || Mt(e.parent, t) || !ts(e.parent.cssDisplay))) ||
          (e.prev && !us(e.prev.cssDisplay))
        );
  }
}
function Ga(e, t) {
  return It(e) || e.type === "angularControlFlowBlock"
    ? !1
    : (e.type === "text" || e.type === "interpolation") && e.next && (e.next.type === "text" || e.next.type === "interpolation")
    ? !0
    : !e.parent || e.parent.cssDisplay === "none"
    ? !1
    : Pe(e.parent)
    ? !0
    : !(
        (!e.next && (e.parent.type === "root" || (Pe(e) && e.parent) || ee(e.parent) || Mt(e.parent, t) || !rs(e.parent.cssDisplay))) ||
        (e.next && !ns(e.next.cssDisplay))
      );
}
function Ka(e) {
  return is(e.cssDisplay) && !ee(e);
}
function ct(e) {
  return It(e) || (e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line);
}
function Ja(e) {
  return (
    Eu(e) ||
    (e.type === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => Xa(t)))) ||
    (e.firstChild &&
      e.firstChild === e.lastChild &&
      e.firstChild.type !== "text" &&
      wu(e.firstChild) &&
      (!e.lastChild.isTrailingSpaceSensitive || Su(e.lastChild)))
  );
}
function Eu(e) {
  return (
    e.type === "element" &&
    e.children.length > 0 &&
    (["html", "head", "ul", "ol", "select"].includes(e.name) || (e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell"))
  );
}
function nr(e) {
  return Au(e) || (e.prev && Ya(e.prev)) || bu(e);
}
function Ya(e) {
  return Au(e) || (e.type === "element" && e.fullName === "br") || bu(e);
}
function bu(e) {
  return wu(e) && Su(e);
}
function wu(e) {
  return (
    e.hasLeadingSpaces &&
    (e.prev
      ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line
      : e.parent.type === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line)
  );
}
function Su(e) {
  return (
    e.hasTrailingSpaces &&
    (e.next
      ? e.next.sourceSpan.start.line > e.sourceSpan.end.line
      : e.parent.type === "root" || (e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line))
  );
}
function Au(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return !0;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return !1;
}
function Rr(e) {
  return e.lastChild ? Rr(e.lastChild) : e;
}
function Xa(e) {
  var t;
  return (t = e.children) == null ? void 0 : t.some((r) => r.type !== "text");
}
function ku(e) {
  if (e)
    switch (e) {
      case "module":
      case "text/javascript":
      case "text/babel":
      case "application/javascript":
        return "babel";
      case "application/x-typescript":
        return "typescript";
      case "text/markdown":
        return "markdown";
      case "text/html":
        return "html";
      case "text/x-handlebars-template":
        return "glimmer";
      default:
        if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
    }
}
function Qa(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: u, lang: i } = e.attrMap;
  return !i && !u ? "babel" : Ot(t, { language: i }) ?? ku(u);
}
function Za(e, t) {
  if (!Hr(e, t)) return;
  let { attrMap: r } = e;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: u } = r;
  return Ot(t, { language: u }) ?? ku(n);
}
function es(e, t) {
  if (e.name !== "style") return;
  let { lang: r } = e.attrMap;
  return r ? Ot(t, { language: r }) : "css";
}
function hn(e, t) {
  return Qa(e, t) ?? es(e, t) ?? Za(e, t);
}
function tt(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function ts(e) {
  return !tt(e) && e !== "inline-block";
}
function rs(e) {
  return !tt(e) && e !== "inline-block";
}
function ns(e) {
  return !tt(e);
}
function us(e) {
  return !tt(e);
}
function is(e) {
  return !tt(e) && e !== "inline-block";
}
function Pe(e) {
  return _u(e).startsWith("pre");
}
function as(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function ss(e, t) {
  var r;
  if (Me(e, t)) return "block";
  if (((r = e.prev) == null ? void 0 : r.type) === "comment") {
    let u = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (u) return u[1];
  }
  let n = !1;
  if (e.type === "element" && e.namespace === "svg")
    if (as(e, (u) => u.fullName === "svg:foreignObject")) n = !0;
    else return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return (e.type === "element" && (!e.namespace || n || Xe(e)) && Oa[e.name]) || Ia;
  }
}
function _u(e) {
  return (e.type === "element" && (!e.namespace || Xe(e)) && Ra[e.name]) || Ma;
}
function os(e) {
  let t = Number.POSITIVE_INFINITY;
  for (let r of e.split(`
`)) {
    if (r.length === 0) continue;
    let n = ce.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < t && (t = n);
  }
  return t === Number.POSITIVE_INFINITY ? 0 : t;
}
function Bu(e, t = os(e)) {
  return t === 0
    ? e
    : e
        .split(
          `
`
        )
        .map((r) => r.slice(t)).join(`
`);
}
function xu(e) {
  return O(!1, O(!1, e, "&apos;", "'"), "&quot;", '"');
}
function de(e) {
  return xu(e.value);
}
var ls = new Set(["template", "style", "script"]);
function Mt(e, t) {
  return Me(e, t) && !ls.has(e.fullName);
}
function Me(e, t) {
  return t.parser === "vue" && e.type === "element" && e.parent.type === "root" && e.fullName.toLowerCase() !== "html";
}
function Hr(e, t) {
  return Me(e, t) && (Mt(e, t) || (e.attrMap.lang && e.attrMap.lang !== "html"));
}
function cs(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function ps(e, t) {
  let r = e.parent;
  if (!Me(r, t)) return !1;
  let n = r.fullName,
    u = e.fullName;
  return (n === "script" && u === "setup") || (n === "style" && u === "vars");
}
function Tu(e, t = e.value) {
  return e.parent.isWhitespaceSensitive ? (e.parent.isIndentationSensitive ? G(t) : G(Bu(Fu(t)), A)) : et(L, ce.split(t));
}
function Lu(e, t) {
  return Me(e, t) && e.name === "script";
}
function jr(e) {
  return (e >= 9 && e <= 32) || e == 160;
}
function Nu(e) {
  return 48 <= e && e <= 57;
}
function $r(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function hs(e) {
  return (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || Nu(e);
}
function qu(e) {
  return e === 10 || e === 13;
}
function dn(e) {
  return 48 <= e && e <= 55;
}
function Dn(e) {
  return e === 39 || e === 34 || e === 96;
}
var ds = /-+([a-z0-9])/g;
function Ds(e) {
  return e.replace(ds, (...t) => t[1].toUpperCase());
}
var fr = class Pu {
    constructor(t, r, n, u) {
      (this.file = t), (this.offset = r), (this.line = n), (this.col = u);
    }
    toString() {
      return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(t) {
      let r = this.file.content,
        n = r.length,
        u = this.offset,
        i = this.line,
        a = this.col;
      for (; u > 0 && t < 0; )
        if ((u--, t++, r.charCodeAt(u) == 10)) {
          i--;
          let s = r.substring(0, u - 1).lastIndexOf(`
`);
          a = s > 0 ? u - s : u;
        } else a--;
      for (; u < n && t > 0; ) {
        let s = r.charCodeAt(u);
        u++, t--, s == 10 ? (i++, (a = 0)) : a++;
      }
      return new Pu(this.file, u, i, a);
    }
    getContext(t, r) {
      let n = this.file.content,
        u = this.offset;
      if (u != null) {
        u > n.length - 1 && (u = n.length - 1);
        let i = u,
          a = 0,
          s = 0;
        for (
          ;
          a < t &&
          u > 0 &&
          (u--,
          a++,
          !(
            n[u] ==
              `
` && ++s == r
          ));

        );
        for (
          a = 0, s = 0;
          a < t &&
          i < n.length - 1 &&
          (i++,
          a++,
          !(
            n[i] ==
              `
` && ++s == r
          ));

        );
        return { before: n.substring(u, this.offset), after: n.substring(this.offset, i + 1) };
      }
      return null;
    }
  },
  Iu = class {
    constructor(e, t) {
      (this.content = e), (this.url = t);
    }
  },
  b = class {
    constructor(e, t, r = e, n = null) {
      (this.start = e), (this.end = t), (this.fullStart = r), (this.details = n);
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  },
  wt;
(function (e) {
  (e[(e.WARNING = 0)] = "WARNING"), (e[(e.ERROR = 1)] = "ERROR");
})(wt || (wt = {}));
var Ou = class {
    constructor(e, t, r = wt.ERROR) {
      (this.span = e), (this.msg = t), (this.level = r);
    }
    contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e ? `${this.msg} ("${e.before}[${wt[this.level]} ->]${e.after}")` : this.msg;
    }
    toString() {
      let e = this.span.details ? `, ${this.span.details}` : "";
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
    }
  },
  fs = [gs, Cs, vs, Es, bs, As, ws, Ss, ks, ys];
function ms(e, t) {
  for (let r of fs) r(e, t);
  return e;
}
function gs(e) {
  e.walk((t) => {
    if (
      t.type === "element" &&
      t.tagDefinition.ignoreFirstLf &&
      t.children.length > 0 &&
      t.children[0].type === "text" &&
      t.children[0].value[0] ===
        `
`
    ) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : (r.value = r.value.slice(1));
    }
  });
}
function Cs(e) {
  let t = (r) => {
    var n, u;
    return (
      r.type === "element" &&
      ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" &&
      r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset &&
      ((u = r.firstChild) == null ? void 0 : u.type) === "ieConditionalEndComment" &&
      r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset
    );
  };
  e.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let u = r.children[n];
        if (!t(u)) continue;
        let i = u.prev,
          a = u.firstChild;
        r.removeChild(i), n--;
        let s = new b(i.sourceSpan.start, a.sourceSpan.end),
          o = new b(s.start, u.sourceSpan.end);
        (u.condition = i.condition), (u.sourceSpan = o), (u.startSourceSpan = s), u.removeChild(a);
      }
  });
}
function Fs(e, t, r) {
  e.walk((n) => {
    if (n.children)
      for (let u = 0; u < n.children.length; u++) {
        let i = n.children[u];
        if (i.type !== "text" && !t(i)) continue;
        i.type !== "text" && ((i.type = "text"), (i.value = r(i)));
        let a = i.prev;
        !a ||
          a.type !== "text" ||
          ((a.value += i.value), (a.sourceSpan = new b(a.sourceSpan.start, i.sourceSpan.end)), n.removeChild(i), u--);
      }
  });
}
function vs(e) {
  return Fs(
    e,
    (t) => t.type === "cdata",
    (t) => `<![CDATA[${t.value}]]>`
  );
}
function ys(e) {
  let t = (r) => {
    var n, u;
    return (
      r.type === "element" &&
      r.attrs.length === 0 &&
      r.children.length === 1 &&
      r.firstChild.type === "text" &&
      !ce.hasWhitespaceCharacter(r.children[0].value) &&
      !r.firstChild.hasLeadingSpaces &&
      !r.firstChild.hasTrailingSpaces &&
      r.isLeadingSpaceSensitive &&
      !r.hasLeadingSpaces &&
      r.isTrailingSpaceSensitive &&
      !r.hasTrailingSpaces &&
      ((n = r.prev) == null ? void 0 : n.type) === "text" &&
      ((u = r.next) == null ? void 0 : u.type) === "text"
    );
  };
  e.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let u = r.children[n];
        if (!t(u)) continue;
        let i = u.prev,
          a = u.next;
        (i.value += `<${u.rawName}>` + u.firstChild.value + `</${u.rawName}>` + a.value),
          (i.sourceSpan = new b(i.sourceSpan.start, a.sourceSpan.end)),
          (i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive),
          (i.hasTrailingSpaces = a.hasTrailingSpaces),
          r.removeChild(u),
          n--,
          r.removeChild(a);
      }
  });
}
function Es(e, t) {
  if (t.parser === "html") return;
  let r = /{{(.+?)}}/s;
  e.walk((n) => {
    if (Va(n))
      for (let u of n.children) {
        if (u.type !== "text") continue;
        let i = u.sourceSpan.start,
          a = null,
          s = u.value.split(r);
        for (let o = 0; o < s.length; o++, i = a) {
          let l = s[o];
          if (o % 2 === 0) {
            (a = i.moveBy(l.length)), l.length > 0 && n.insertChildBefore(u, { type: "text", value: l, sourceSpan: new b(i, a) });
            continue;
          }
          (a = i.moveBy(l.length + 4)),
            n.insertChildBefore(u, {
              type: "interpolation",
              sourceSpan: new b(i, a),
              children: l.length === 0 ? [] : [{ type: "text", value: l, sourceSpan: new b(i.moveBy(2), a.moveBy(-2)) }],
            });
        }
        n.removeChild(u);
      }
  });
}
function bs(e) {
  e.walk((t) => {
    if (!t.children) return;
    if (
      t.children.length === 0 ||
      (t.children.length === 1 && t.children[0].type === "text" && ce.trim(t.children[0].value).length === 0)
    ) {
      (t.hasDanglingSpaces = t.children.length > 0), (t.children = []);
      return;
    }
    let r = Ua(t),
      n = yu(t);
    if (!r)
      for (let u = 0; u < t.children.length; u++) {
        let i = t.children[u];
        if (i.type !== "text") continue;
        let { leadingWhitespace: a, text: s, trailingWhitespace: o } = $a(i.value),
          l = i.prev,
          c = i.next;
        s
          ? ((i.value = s),
            (i.sourceSpan = new b(i.sourceSpan.start.moveBy(a.length), i.sourceSpan.end.moveBy(-o.length))),
            a && (l && (l.hasTrailingSpaces = !0), (i.hasLeadingSpaces = !0)),
            o && ((i.hasTrailingSpaces = !0), c && (c.hasLeadingSpaces = !0)))
          : (t.removeChild(i), u--, (a || o) && (l && (l.hasTrailingSpaces = !0), c && (c.hasLeadingSpaces = !0)));
      }
    (t.isWhitespaceSensitive = r), (t.isIndentationSensitive = n);
  });
}
function ws(e) {
  e.walk((t) => {
    t.isSelfClosing =
      !t.children ||
      (t.type === "element" &&
        (t.tagDefinition.isVoid ||
          (t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end)));
  });
}
function Ss(e, t) {
  e.walk((r) => {
    r.type === "element" &&
      (r.hasHtmComponentClosingTag =
        r.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function As(e, t) {
  e.walk((r) => {
    r.cssDisplay = ss(r, t);
  });
}
function ks(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Ka(r);
        return;
      }
      for (let u of n) (u.isLeadingSpaceSensitive = za(u, t)), (u.isTrailingSpaceSensitive = Ga(u, t));
      for (let u = 0; u < n.length; u++) {
        let i = n[u];
        (i.isLeadingSpaceSensitive = (u === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive),
          (i.isTrailingSpaceSensitive = (u === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive);
      }
    }
  });
}
var _s = ms;
function Bs(e) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e);
}
function xs(e) {
  return (
    `<!-- @format -->

` + e
  );
}
function Rt(e) {
  return e.sourceSpan.start.offset;
}
function Ht(e) {
  return e.sourceSpan.end.offset;
}
async function Ts(e, t) {
  if (e.lang === "yaml") {
    let r = e.value.trim(),
      n = r ? await t(r, { parser: "yaml" }) : "";
    return ha([e.startDelimiter, A, n, n ? A : "", e.endDelimiter]);
  }
}
var Ls = Ts,
  Mu = new Proxy(() => {}, { get: () => Mu }),
  Ru = Mu;
function Ns(e) {
  return Array.isArray(e) && e.length > 0;
}
var Hu = Ns;
function mr(e, t) {
  return [e.isSelfClosing ? "" : qs(e, t), ft(e, t)];
}
function qs(e, t) {
  return e.lastChild && Qe(e.lastChild) ? "" : [Ps(e, t), Wr(e, t)];
}
function ft(e, t) {
  return (e.next ? ve(e.next) : nt(e.parent)) ? "" : [rt(e, t), Fe(e, t)];
}
function Ps(e, t) {
  return nt(e) ? rt(e.lastChild, t) : "";
}
function Fe(e, t) {
  return Qe(e) ? Wr(e.parent, t) : jt(e) ? Vr(e.next) : "";
}
function Wr(e, t) {
  if ((Ru(!e.isSelfClosing), ju(e, t))) return "";
  switch (e.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function rt(e, t) {
  if (ju(e, t)) return "";
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "element":
      if (e.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function ju(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (Mr(e) || vu(e.parent, t));
}
function ve(e) {
  return (
    e.prev &&
    e.prev.type !== "docType" &&
    e.type !== "angularControlFlowBlock" &&
    !H(e.prev) &&
    e.isLeadingSpaceSensitive &&
    !e.hasLeadingSpaces
  );
}
function nt(e) {
  var t;
  return (
    ((t = e.lastChild) == null ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !H(Rr(e.lastChild)) && !Pe(e)
  );
}
function Qe(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && H(Rr(e));
}
function jt(e) {
  return e.next && !H(e.next) && H(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Is(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return t ? (t[1] ? t[1].split(/\s+/) : !0) : !1;
}
function $t(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Os(e, t, r) {
  var n;
  let { node: u } = e;
  if (!Hu(u.attrs)) return u.isSelfClosing ? " " : "";
  let i = ((n = u.prev) == null ? void 0 : n.type) === "comment" && Is(u.prev.value),
    a = typeof i == "boolean" ? () => i : Array.isArray(i) ? (D) => i.includes(D.rawName) : () => !1,
    s = e.map(({ node: D }) => (a(D) ? G(t.originalText.slice(Rt(D), Ht(D))) : r()), "attrs"),
    o = u.type === "element" && u.fullName === "script" && u.attrs.length === 1 && u.attrs[0].fullName === "src" && u.children.length === 0,
    l = t.singleAttributePerLine && u.attrs.length > 1 && !Me(u, t) ? A : L,
    c = [we([o ? " " : L, et(l, s)])];
  return (
    (u.firstChild && $t(u.firstChild)) || (u.isSelfClosing && nt(u.parent)) || o
      ? c.push(u.isSelfClosing ? " " : "")
      : c.push(t.bracketSameLine ? (u.isSelfClosing ? " " : "") : u.isSelfClosing ? L : I),
    c
  );
}
function Ms(e) {
  return e.firstChild && $t(e.firstChild) ? "" : Ur(e);
}
function gr(e, t, r) {
  let { node: n } = e;
  return [mt(n, t), Os(e, t, r), n.isSelfClosing ? "" : Ms(n)];
}
function mt(e, t) {
  return e.prev && jt(e.prev) ? "" : [ye(e, t), Vr(e)];
}
function ye(e, t) {
  return $t(e) ? Ur(e.parent) : ve(e) ? rt(e.prev, t) : "";
}
function Vr(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return e.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "element":
      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function Ur(e) {
  switch ((Ru(!e.isSelfClosing), e.type)) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
var ur = new WeakMap();
function Rs(e, t) {
  let { root: r } = e;
  return (
    ur.has(r) ||
      ur.set(
        r,
        r.children.some((n) => Lu(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))
      ),
    ur.get(r)
  );
}
var zr = Rs;
function Hs(e, t) {
  if (!e.endSourceSpan) return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && $t(e.firstChild) && (r -= Ur(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && Qe(e.lastChild) ? (n += Wr(e, t).length) : nt(e) && (n -= rt(e.lastChild, t).length), t.originalText.slice(r, n);
}
var $u = Hs;
function fn(e) {
  return (
    e === "	" ||
    e ===
      `
` ||
    e === "\f" ||
    e === "\r" ||
    e === " "
  );
}
var js = /^[ \t\n\r\u000c]+/,
  $s = /^[, \t\n\r\u000c]+/,
  Ws = /^[^ \t\n\r\u000c]+/,
  Vs = /[,]+$/,
  mn = /^\d+$/,
  Us = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function zs(e) {
  let t = e.length,
    r,
    n,
    u,
    i,
    a,
    s = 0,
    o;
  function l(h) {
    let d,
      m = h.exec(e.substring(s));
    if (m) return ([d] = m), (s += d.length), d;
  }
  let c = [];
  for (;;) {
    if ((l($s), s >= t)) {
      if (c.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return c;
    }
    (o = s), (r = l(Ws)), (n = []), r.slice(-1) === "," ? ((r = r.replace(Vs, "")), p()) : D();
  }
  function D() {
    for (l(js), u = "", i = "in descriptor"; ; ) {
      if (((a = e.charAt(s)), i === "in descriptor"))
        if (fn(a)) u && (n.push(u), (u = ""), (i = "after descriptor"));
        else if (a === ",") {
          (s += 1), u && n.push(u), p();
          return;
        } else if (a === "(") (u += a), (i = "in parens");
        else if (a === "") {
          u && n.push(u), p();
          return;
        } else u += a;
      else if (i === "in parens")
        if (a === ")") (u += a), (i = "in descriptor");
        else if (a === "") {
          n.push(u), p();
          return;
        } else u += a;
      else if (i === "after descriptor" && !fn(a))
        if (a === "") {
          p();
          return;
        } else (i = "in descriptor"), (s -= 1);
      s += 1;
    }
  }
  function p() {
    let h = !1,
      d,
      m,
      g,
      F,
      f = {},
      C,
      y,
      v,
      w,
      S;
    for (F = 0; F < n.length; F++)
      (C = n[F]),
        (y = C[C.length - 1]),
        (v = C.substring(0, C.length - 1)),
        (w = parseInt(v, 10)),
        (S = parseFloat(v)),
        mn.test(v) && y === "w"
          ? ((d || m) && (h = !0), w === 0 ? (h = !0) : (d = w))
          : Us.test(v) && y === "x"
          ? ((d || m || g) && (h = !0), S < 0 ? (h = !0) : (m = S))
          : mn.test(v) && y === "h"
          ? ((g || m) && (h = !0), w === 0 ? (h = !0) : (g = w))
          : (h = !0);
    if (!h)
      (f.source = { value: r, startOffset: o }),
        d && (f.width = { value: d }),
        m && (f.density = { value: m }),
        g && (f.height = { value: g }),
        c.push(f);
    else throw new Error(`Invalid srcset descriptor found in "${e}" at "${C}".`);
  }
}
var Gs = zs;
function Wt(e, t = !0) {
  return [we([I, e]), t ? I : ""];
}
function Re(e, t) {
  let r =
    e.type === "NGRoot"
      ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression"
        ? e.node.body[0].expression
        : e.node
      : e.type === "JsExpressionRoot"
      ? e.node
      : e;
  return (
    r &&
    (r.type === "ObjectExpression" ||
      r.type === "ArrayExpression" ||
      ((t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") &&
        (r.type === "TemplateLiteral" || r.type === "StringLiteral")))
  );
}
async function X(e, t, r, n) {
  r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
  let u = !0;
  n &&
    (r.__onHtmlBindingRoot = (a, s) => {
      u = n(a, s);
    });
  let i = await t(e, r, t);
  return u ? q(i) : Wt(i);
}
function Ks(e) {
  if (e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source")) return () => Ys(de(e.node));
}
var Wu = { width: "w", height: "h", density: "x" },
  Js = Object.keys(Wu);
function Ys(e) {
  let t = Gs(e),
    r = Js.filter((c) => t.some((D) => Object.prototype.hasOwnProperty.call(D, c)));
  if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r,
    u = Wu[n],
    i = t.map((c) => c.source.value),
    a = Math.max(...i.map((c) => c.length)),
    s = t.map((c) => (c[n] ? String(c[n].value) : "")),
    o = s.map((c) => {
      let D = c.indexOf(".");
      return D === -1 ? c.length : D;
    }),
    l = Math.max(...o);
  return Wt(
    et(
      [",", L],
      i.map((c, D) => {
        let p = [c],
          h = s[D];
        if (h) {
          let d = a - c.length + 1,
            m = l - o[D],
            g = " ".repeat(d + m);
          p.push(bt(g, " "), h + u);
        }
        return p;
      })
    )
  );
}
var Xs = Ks;
function Qs(e, t) {
  let { node: r } = e,
    n = de(r);
  if (r.fullName === "class" && !t.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/).join(" ");
}
var Zs = Qs;
function eo(e, t) {
  let { node: r } = e,
    n = de(e.node).trim();
  if (r.fullName === "style" && !t.parentParser && !n.includes("{{"))
    return async (u) => Wt(await u(n, { parser: "css", __isHTMLStyleAttribute: !0 }));
}
async function to(e, t, r, n) {
  let u = de(r.node),
    { left: i, operator: a, right: s } = ro(u),
    o = zr(r, n);
  return [
    q(await X(`function _(${i}) {}`, e, { parser: o ? "babel-ts" : "babel", __isVueForBindingLeft: !0 })),
    " ",
    a,
    " ",
    await X(s, e, { parser: o ? "__ts_expression" : "__js_expression" }),
  ];
}
function ro(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/s,
    r = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
    n = /^\(|\)$/g,
    u = e.match(t);
  if (!u) return;
  let i = {};
  if (((i.for = u[3].trim()), !i.for)) return;
  let a = O(!1, u[1].trim(), n, ""),
    s = a.match(r);
  s ? ((i.alias = a.replace(r, "")), (i.iterator1 = s[1].trim()), s[2] && (i.iterator2 = s[2].trim())) : (i.alias = a);
  let o = [i.alias, i.iterator1, i.iterator2];
  if (!o.some((l, c) => !l && (c === 0 || o.slice(c + 1).some(Boolean))))
    return { left: o.filter(Boolean).join(","), operator: u[2], right: i.for };
}
function no(e, t, r) {
  let { node: n } = r,
    u = de(n);
  return X(`type T<${u}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: !0 }, Re);
}
function uo(e, t, { parseWithTs: r }) {
  return X(`function _(${e}) {}`, t, { parser: r ? "babel-ts" : "babel", __isVueBindings: !0 });
}
function io(e) {
  let t = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/,
    r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i,
    n = e.trim();
  return t.test(n) || r.test(n);
}
function ao(e, t) {
  if (t.parser !== "vue") return;
  let { node: r } = e,
    n = r.fullName;
  if (n === "v-for") return to;
  if (n === "generic" && Lu(r.parent, t)) return no;
  let u = de(r),
    i = zr(e, t);
  if (cs(r) || ps(r, t)) return (a) => uo(u, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:")) return (a) => so(u, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith("v-bind:")) return (a) => oo(u, a, { parseWithTs: i });
  if (n.startsWith("v-")) return (a) => Vu(u, a, { parseWithTs: i });
}
function so(e, t, { parseWithTs: r }) {
  return io(e) ? Vu(e, t, { parseWithTs: r }) : X(e, t, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, Re);
}
function oo(e, t, { parseWithTs: r }) {
  return X(e, t, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, Re);
}
function Vu(e, t, { parseWithTs: r }) {
  return X(e, t, { parser: r ? "__ts_expression" : "__js_expression" }, Re);
}
var lo = ao,
  Uu = /{{(.+?)}}/s;
async function co(e, t) {
  let r = [];
  for (let [n, u] of e.split(Uu).entries())
    if (n % 2 === 0) r.push(G(u));
    else
      try {
        r.push(
          q(["{{", we([L, await X(u, t, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0, trailingComma: "none" })]), L, "}}"])
        );
      } catch {
        r.push("{{", G(u), "}}");
      }
  return r;
}
function Gr({ parser: e }) {
  return (t, r, n) => X(de(n.node), t, { parser: e, trailingComma: "none" }, Re);
}
var po = Gr({ parser: "__ng_action" }),
  ho = Gr({ parser: "__ng_binding" }),
  Do = Gr({ parser: "__ng_directive" });
function fo(e, t) {
  if (t.parser !== "angular") return;
  let { node: r } = e,
    n = r.fullName;
  if ((n.startsWith("(") && n.endsWith(")")) || n.startsWith("on-")) return po;
  if ((n.startsWith("[") && n.endsWith("]")) || /^bind(?:on)?-/.test(n) || /^ng-(?:if|show|hide|class|style)$/.test(n)) return ho;
  if (n.startsWith("*")) return Do;
  let u = de(r);
  if (/^i18n(?:-.+)?$/.test(n)) return () => Wt(gu(Tu(r, u.trim())), !u.includes("@@"));
  if (Uu.test(u)) return (i) => co(u, i);
}
var mo = fo;
function go(e, t) {
  let { node: r } = e;
  if (r.value) {
    if (
      /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) ||
      (t.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}"))
    )
      return [r.rawName, "=", r.value];
    for (let n of [Xs, eo, Zs, lo, mo]) {
      let u = n(e, t);
      if (u) return Co(u);
    }
  }
}
function Co(e) {
  return async (t, r, n, u) => {
    let i = await e(t, r, n, u);
    if (i) return (i = Or(i, (a) => (typeof a == "string" ? O(!1, a, '"', "&quot;") : a))), [n.node.rawName, '="', q(i), '"'];
  };
}
var Fo = go;
function vo(e, t, r, n) {
  let { node: u } = r,
    i = n.originalText.slice(u.sourceSpan.start.offset, u.sourceSpan.end.offset);
  return /^\s*$/.test(i) ? "" : X(i, e, { parser: "__ng_directive", __isInHtmlAttribute: !1, trailingComma: "none" }, Re);
}
var yo = vo,
  Eo = new Set(["if", "else if", "for", "switch", "case"]);
function bo(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "element":
      if (ee(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && Hr(r, t)) {
        let n = hn(r, t);
        return n
          ? async (u, i) => {
              let a = $u(r, t),
                s = /^\s*$/.test(a),
                o = "";
              return (
                s || ((o = await u(Fu(a), { parser: n, __embeddedInHtml: !0 })), (s = o === "")),
                [ye(r, t), q(gr(e, t, i)), s ? "" : A, o, s ? "" : A, mr(r, t), Fe(r, t)]
              );
            }
          : void 0;
      }
      break;
    case "text":
      if (ee(r.parent)) {
        let n = hn(r.parent, t);
        if (n)
          return async (u) => {
            let i = n === "markdown" ? Bu(r.value.replace(/^[^\S\n]*\n/, "")) : r.value,
              a = { parser: n, __embeddedInHtml: !0 };
            if (t.parser === "html" && n === "babel") {
              let s = "script",
                { attrMap: o } = r.parent;
              o && (o.type === "module" || (o.type === "text/babel" && o["data-type"] === "module")) && (s = "module"),
                (a.__babelSourceType = s);
            }
            return [Ze, ye(r, t), await u(i, a, { stripTrailingHardline: !0 }), Fe(r, t)];
          };
      } else if (r.parent.type === "interpolation")
        return async (n) => {
          let u = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
          return (
            t.parser === "angular"
              ? ((u.parser = "__ng_interpolation"), (u.trailingComma = "none"))
              : t.parser === "vue"
              ? (u.parser = zr(e, t) ? "__vue_ts_expression" : "__vue_expression")
              : (u.parser = "__js_expression"),
            [we([L, await n(r.value, u)]), r.parent.next && ve(r.parent.next) ? " " : L]
          );
        };
      break;
    case "attribute":
      return Fo(e, t);
    case "front-matter":
      return (n) => Ls(r, n);
    case "angularControlFlowBlockParameters":
      return Eo.has(e.parent.name) ? yo : void 0;
  }
}
var wo = bo;
function je(e, t, r) {
  let n = e.node;
  return Mr(n)
    ? [
        ye(n, t),
        G(t.originalText.slice(Rt(n) + (n.prev && jt(n.prev) ? Vr(n).length : 0), Ht(n) - (n.next && ve(n.next) ? rt(n, t).length : 0))),
        Fe(n, t),
      ]
    : r();
}
function pt(e, t) {
  return H(e) && H(t)
    ? e.isTrailingSpaceSensitive
      ? e.hasTrailingSpaces
        ? nr(t)
          ? A
          : L
        : ""
      : nr(t)
      ? A
      : I
    : (jt(e) && (Mr(t) || t.firstChild || t.isSelfClosing || (t.type === "element" && t.attrs.length > 0))) ||
      (e.type === "element" && e.isSelfClosing && ve(t))
    ? ""
    : !t.isLeadingSpaceSensitive || nr(t) || (ve(t) && e.lastChild && Qe(e.lastChild) && e.lastChild.lastChild && Qe(e.lastChild.lastChild))
    ? A
    : t.hasLeadingSpaces
    ? L
    : I;
}
function Kr(e, t, r) {
  let { node: n } = e;
  if (Eu(n))
    return [
      Ze,
      ...e.map((i) => {
        let a = i.node,
          s = a.prev ? pt(a.prev, a) : "";
        return [s ? [s, ct(a.prev) ? A : ""] : "", je(i, t, r)];
      }, "children"),
    ];
  let u = n.children.map(() => Symbol(""));
  return e.map((i, a) => {
    let s = i.node;
    if (H(s)) {
      if (s.prev && H(s.prev)) {
        let d = pt(s.prev, s);
        if (d) return ct(s.prev) ? [A, A, je(i, t, r)] : [d, je(i, t, r)];
      }
      return je(i, t, r);
    }
    let o = [],
      l = [],
      c = [],
      D = [],
      p = s.prev ? pt(s.prev, s) : "",
      h = s.next ? pt(s, s.next) : "";
    return (
      p && (ct(s.prev) ? o.push(A, A) : p === A ? o.push(A) : H(s.prev) ? l.push(p) : l.push(bt("", I, { groupId: u[a - 1] }))),
      h && (ct(s) ? H(s.next) && D.push(A, A) : h === A ? H(s.next) && D.push(A) : c.push(h)),
      [...o, q([...l, q([je(i, t, r), ...c], { id: u[a] })]), ...D]
    );
  }, "children");
}
function So(e, t, r) {
  let { node: n } = e;
  if (vu(n, t)) return [ye(n, t), q(gr(e, t, r)), G($u(n, t)), ...mr(n, t), Fe(n, t)];
  let u =
      n.children.length === 1 &&
      n.firstChild.type === "interpolation" &&
      n.firstChild.isLeadingSpaceSensitive &&
      !n.firstChild.hasLeadingSpaces &&
      n.lastChild.isTrailingSpaceSensitive &&
      !n.lastChild.hasTrailingSpaces,
    i = Symbol("element-attr-group-id"),
    a = (c) => q([q(gr(e, t, r), { id: i }), c, mr(n, t)]),
    s = (c) =>
      u
        ? da(c, { groupId: i })
        : (ee(n) || Mt(n, t)) && n.parent.type === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle
        ? c
        : we(c),
    o = () =>
      u
        ? bt(I, "", { groupId: i })
        : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive
        ? L
        : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive
        ? pa(I)
        : I,
    l = () =>
      (n.next ? ve(n.next) : nt(n.parent))
        ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive
          ? " "
          : ""
        : u
        ? bt(I, "", { groupId: i })
        : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive
        ? L
        : (n.lastChild.type === "comment" || (n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive)) &&
          new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`).test(n.lastChild.value)
        ? ""
        : I;
  return n.children.length === 0
    ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? L : "")
    : a([Ja(n) ? Ze : "", s([o(), Kr(e, t, r)]), l()]);
}
var Ao = new Map([
  ["if", new Set(["else if", "else"])],
  ["else if", new Set(["else if", "else"])],
  ["for", new Set(["empty"])],
  ["defer", new Set(["placeholder", "error", "loading"])],
  ["placeholder", new Set(["placeholder", "error", "loading"])],
  ["error", new Set(["placeholder", "error", "loading"])],
  ["loading", new Set(["placeholder", "error", "loading"])],
]);
function ko(e, t, r) {
  let { node: n } = e,
    u = [];
  _o(e) && u.push("} "), u.push("@", n.name), n.parameters && u.push(" (", q(r("parameters")), ")"), u.push(" {");
  let i = zu(n);
  return (
    n.children.length > 0
      ? ((n.firstChild.hasLeadingSpaces = !0), (n.lastChild.hasTrailingSpaces = !0), u.push(we([A, Kr(e, t, r)])), i && u.push(A, "}"))
      : i && u.push("}"),
    q(u, { shouldBreak: !0 })
  );
}
function zu(e) {
  var t, r;
  return !(((t = e.next) == null ? void 0 : t.type) === "angularControlFlowBlock" && (r = Ao.get(e.name)) != null && r.has(e.next.name));
}
function _o(e) {
  let { previous: t } = e;
  return (t == null ? void 0 : t.type) === "angularControlFlowBlock" && !zu(e.previous);
}
function Bo(e, t, r) {
  return [we([I, et([";", L], e.map(r, "children"))]), I];
}
var $e = null;
function Ge(e) {
  if ($e !== null && typeof $e.property) {
    let t = $e;
    return ($e = Ge.prototype = null), t;
  }
  return ($e = Ge.prototype = e ?? Object.create(null)), new Ge();
}
var xo = 10;
for (let e = 0; e <= xo; e++) Ge();
function To(e) {
  return Ge(e);
}
function Lo(e, t = "type") {
  To(e);
  function r(n) {
    let u = n[t],
      i = e[u];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${u}'.`), { node: n });
    return i;
  }
  return r;
}
var No = Lo,
  qo = {
    "front-matter": [],
    root: ["children"],
    element: ["attrs", "children"],
    ieConditionalComment: ["children"],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ["children"],
    text: ["children"],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: ["children", "parameters"],
    angularControlFlowBlockParameters: ["children"],
    angularControlFlowBlockParameter: [],
  },
  Po = qo,
  Io = No(Po),
  Oo = Io;
function Mo(e, t, r) {
  let { node: n } = e;
  switch (n.type) {
    case "front-matter":
      return G(n.raw);
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [q(Kr(e, t, r)), A];
    case "element":
    case "ieConditionalComment":
      return So(e, t, r);
    case "angularControlFlowBlock":
      return ko(e, t, r);
    case "angularControlFlowBlockParameters":
      return Bo(e, t, r);
    case "angularControlFlowBlockParameter":
      return ce.trim(n.expression);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [mt(n), ft(n)];
    case "interpolation":
      return [mt(n, t), ...e.map(r, "children"), ft(n, t)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let i = /\n[^\S\n]*$/,
          a = i.test(n.value),
          s = a ? n.value.replace(i, "") : n.value;
        return [G(s), a ? A : ""];
      }
      let u = Fa([ye(n, t), ...Tu(n), Fe(n, t)]);
      return Array.isArray(u) ? gu(u) : u;
    }
    case "docType":
      return [q([mt(n, t), " ", O(!1, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), ft(n, t)];
    case "comment":
      return [ye(n, t), G(t.originalText.slice(Rt(n), Ht(n))), Fe(n, t)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let u = xu(n.value),
        i = ba(u, '"');
      return [n.rawName, "=", i, G(i === '"' ? O(!1, u, '"', "&quot;") : O(!1, u, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new ya(n, "HTML");
  }
}
var Ro = { preprocess: _s, print: Mo, insertPragma: xs, massageAstNode: La, embed: wo, getVisitorKeys: Oo },
  Ho = Ro,
  Gu = {};
pu(Gu, { angular: () => jl, html: () => Hl, lwc: () => Wl, vue: () => $l });
var gn;
(function (e) {
  (e[(e.Emulated = 0)] = "Emulated"), (e[(e.None = 2)] = "None"), (e[(e.ShadowDom = 3)] = "ShadowDom");
})(gn || (gn = {}));
var Cn;
(function (e) {
  (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default");
})(Cn || (Cn = {}));
var Fn = { name: "custom-elements" },
  vn = { name: "no-errors-schema" },
  ge;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL");
})(ge || (ge = {}));
var yn;
(function (e) {
  (e[(e.Error = 0)] = "Error"), (e[(e.Warning = 1)] = "Warning"), (e[(e.Ignore = 2)] = "Ignore");
})(yn || (yn = {}));
var z;
(function (e) {
  (e[(e.RAW_TEXT = 0)] = "RAW_TEXT"), (e[(e.ESCAPABLE_RAW_TEXT = 1)] = "ESCAPABLE_RAW_TEXT"), (e[(e.PARSABLE_DATA = 2)] = "PARSABLE_DATA");
})(z || (z = {}));
function Vt(e) {
  if (e[0] != ":") return [null, e];
  let t = e.indexOf(":", 1);
  if (t === -1) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
  return [e.slice(1, t), e.slice(t + 1)];
}
function En(e) {
  return Vt(e)[1] === "ng-container";
}
function bn(e) {
  return Vt(e)[1] === "ng-content";
}
function gt(e) {
  return e === null ? null : Vt(e)[0];
}
function St(e, t) {
  return e ? `:${e}:${t}` : t;
}
var Ct;
function wn() {
  return (
    Ct ||
      ((Ct = {}),
      ht(ge.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]),
      ht(ge.STYLE, ["*|style"]),
      ht(ge.URL, [
        "*|formAction",
        "area|href",
        "area|ping",
        "audio|src",
        "a|href",
        "a|ping",
        "blockquote|cite",
        "body|background",
        "del|cite",
        "form|action",
        "img|src",
        "input|src",
        "ins|cite",
        "q|cite",
        "source|src",
        "track|src",
        "video|poster",
        "video|src",
      ]),
      ht(ge.RESOURCE_URL, [
        "applet|code",
        "applet|codebase",
        "base|href",
        "embed|src",
        "frame|src",
        "head|profile",
        "html|manifest",
        "iframe|src",
        "link|href",
        "media|src",
        "object|codebase",
        "object|data",
        "script|src",
      ])),
    Ct
  );
}
function ht(e, t) {
  for (let r of t) Ct[r.toLowerCase()] = e;
}
var jo = class {},
  $o = "boolean",
  Wo = "number",
  Vo = "string",
  Uo = "object",
  zo = [
    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":svg:graphics^:svg:|",
    ":svg:animation^:svg:|*begin,*end,*repeat",
    ":svg:geometry^:svg:|",
    ":svg:componentTransferFunction^:svg:|",
    ":svg:gradient^:svg:|",
    ":svg:textContent^:svg:graphics|",
    ":svg:textPositioning^:svg:textContent|",
    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
    "audio^media|",
    "br^[HTMLElement]|clear",
    "base^[HTMLElement]|href,target",
    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
    "canvas^[HTMLElement]|#height,#width",
    "content^[HTMLElement]|select",
    "dl^[HTMLElement]|!compact",
    "data^[HTMLElement]|value",
    "datalist^[HTMLElement]|",
    "details^[HTMLElement]|!open",
    "dialog^[HTMLElement]|!open,returnValue",
    "dir^[HTMLElement]|!compact",
    "div^[HTMLElement]|align",
    "embed^[HTMLElement]|align,height,name,src,type,width",
    "fieldset^[HTMLElement]|!disabled,name",
    "font^[HTMLElement]|color,face,size",
    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
    "hr^[HTMLElement]|align,color,!noShade,size,width",
    "head^[HTMLElement]|",
    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
    "html^[HTMLElement]|version",
    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
    "li^[HTMLElement]|type,#value",
    "label^[HTMLElement]|htmlFor",
    "legend^[HTMLElement]|align",
    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
    "map^[HTMLElement]|name",
    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
    "menu^[HTMLElement]|!compact",
    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
    "ins,del^[HTMLElement]|cite,dateTime",
    "ol^[HTMLElement]|!compact,!reversed,#start,type",
    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
    "optgroup^[HTMLElement]|!disabled,label",
    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
    "p^[HTMLElement]|align",
    "param^[HTMLElement]|name,type,value,valueType",
    "picture^[HTMLElement]|",
    "pre^[HTMLElement]|#width",
    "progress^[HTMLElement]|#max,#value",
    "q,blockquote,cite^[HTMLElement]|",
    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
    "slot^[HTMLElement]|name",
    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
    "span^[HTMLElement]|",
    "style^[HTMLElement]|!disabled,media,type",
    "caption^[HTMLElement]|align",
    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
    "template^[HTMLElement]|",
    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
    "time^[HTMLElement]|dateTime",
    "title^[HTMLElement]|text",
    "track^[HTMLElement]|!default,kind,label,src,srclang",
    "ul^[HTMLElement]|!compact,type",
    "unknown^[HTMLElement]|",
    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
    ":svg:a^:svg:graphics|",
    ":svg:animate^:svg:animation|",
    ":svg:animateMotion^:svg:animation|",
    ":svg:animateTransform^:svg:animation|",
    ":svg:circle^:svg:geometry|",
    ":svg:clipPath^:svg:graphics|",
    ":svg:defs^:svg:graphics|",
    ":svg:desc^:svg:|",
    ":svg:discard^:svg:|",
    ":svg:ellipse^:svg:geometry|",
    ":svg:feBlend^:svg:|",
    ":svg:feColorMatrix^:svg:|",
    ":svg:feComponentTransfer^:svg:|",
    ":svg:feComposite^:svg:|",
    ":svg:feConvolveMatrix^:svg:|",
    ":svg:feDiffuseLighting^:svg:|",
    ":svg:feDisplacementMap^:svg:|",
    ":svg:feDistantLight^:svg:|",
    ":svg:feDropShadow^:svg:|",
    ":svg:feFlood^:svg:|",
    ":svg:feFuncA^:svg:componentTransferFunction|",
    ":svg:feFuncB^:svg:componentTransferFunction|",
    ":svg:feFuncG^:svg:componentTransferFunction|",
    ":svg:feFuncR^:svg:componentTransferFunction|",
    ":svg:feGaussianBlur^:svg:|",
    ":svg:feImage^:svg:|",
    ":svg:feMerge^:svg:|",
    ":svg:feMergeNode^:svg:|",
    ":svg:feMorphology^:svg:|",
    ":svg:feOffset^:svg:|",
    ":svg:fePointLight^:svg:|",
    ":svg:feSpecularLighting^:svg:|",
    ":svg:feSpotLight^:svg:|",
    ":svg:feTile^:svg:|",
    ":svg:feTurbulence^:svg:|",
    ":svg:filter^:svg:|",
    ":svg:foreignObject^:svg:graphics|",
    ":svg:g^:svg:graphics|",
    ":svg:image^:svg:graphics|decoding",
    ":svg:line^:svg:geometry|",
    ":svg:linearGradient^:svg:gradient|",
    ":svg:mpath^:svg:|",
    ":svg:marker^:svg:|",
    ":svg:mask^:svg:|",
    ":svg:metadata^:svg:|",
    ":svg:path^:svg:geometry|",
    ":svg:pattern^:svg:|",
    ":svg:polygon^:svg:geometry|",
    ":svg:polyline^:svg:geometry|",
    ":svg:radialGradient^:svg:gradient|",
    ":svg:rect^:svg:geometry|",
    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
    ":svg:script^:svg:|type",
    ":svg:set^:svg:animation|",
    ":svg:stop^:svg:|",
    ":svg:style^:svg:|!disabled,media,title,type",
    ":svg:switch^:svg:graphics|",
    ":svg:symbol^:svg:|",
    ":svg:tspan^:svg:textPositioning|",
    ":svg:text^:svg:textPositioning|",
    ":svg:textPath^:svg:textContent|",
    ":svg:title^:svg:|",
    ":svg:use^:svg:graphics|",
    ":svg:view^:svg:|#zoomAndPan",
    "data^[HTMLElement]|value",
    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
    "summary^[HTMLElement]|",
    "time^[HTMLElement]|dateTime",
    ":svg:cursor^:svg:|",
  ],
  Ku = new Map(
    Object.entries({
      class: "className",
      for: "htmlFor",
      formaction: "formAction",
      innerHtml: "innerHTML",
      readonly: "readOnly",
      tabindex: "tabIndex",
    })
  ),
  Go = Array.from(Ku).reduce((e, [t, r]) => (e.set(t, r), e), new Map()),
  Ko = class extends jo {
    constructor() {
      super(),
        (this._schema = new Map()),
        (this._eventSchema = new Map()),
        zo.forEach((e) => {
          let t = new Map(),
            r = new Set(),
            [n, u] = e.split("|"),
            i = u.split(","),
            [a, s] = n.split("^");
          a.split(",").forEach((l) => {
            this._schema.set(l.toLowerCase(), t), this._eventSchema.set(l.toLowerCase(), r);
          });
          let o = s && this._schema.get(s.toLowerCase());
          if (o) {
            for (let [l, c] of o) t.set(l, c);
            for (let l of this._eventSchema.get(s.toLowerCase())) r.add(l);
          }
          i.forEach((l) => {
            if (l.length > 0)
              switch (l[0]) {
                case "*":
                  r.add(l.substring(1));
                  break;
                case "!":
                  t.set(l.substring(1), $o);
                  break;
                case "#":
                  t.set(l.substring(1), Wo);
                  break;
                case "%":
                  t.set(l.substring(1), Uo);
                  break;
                default:
                  t.set(l, Vo);
              }
          });
        });
    }
    hasProperty(e, t, r) {
      if (r.some((n) => n.name === vn.name)) return !0;
      if (e.indexOf("-") > -1) {
        if (En(e) || bn(e)) return !1;
        if (r.some((n) => n.name === Fn.name)) return !0;
      }
      return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
    }
    hasElement(e, t) {
      return t.some((r) => r.name === vn.name) || (e.indexOf("-") > -1 && (En(e) || bn(e) || t.some((r) => r.name === Fn.name)))
        ? !0
        : this._schema.has(e.toLowerCase());
    }
    securityContext(e, t, r) {
      r && (t = this.getMappedPropName(t)), (e = e.toLowerCase()), (t = t.toLowerCase());
      let n = wn()[e + "|" + t];
      return n || ((n = wn()["*|" + t]), n || ge.NONE);
    }
    getMappedPropName(e) {
      return Ku.get(e) ?? e;
    }
    getDefaultComponentElementName() {
      return "ng-component";
    }
    validateProperty(e) {
      return e.toLowerCase().startsWith("on")
        ? {
            error: !0,
            msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`,
          }
        : { error: !1 };
    }
    validateAttribute(e) {
      return e.toLowerCase().startsWith("on")
        ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` }
        : { error: !1 };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
      let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
      return Array.from(t.keys()).map((r) => Go.get(r) ?? r);
    }
    allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
      return Ds(e);
    }
    normalizeAnimationStyleValue(e, t, r) {
      let n = "",
        u = r.toString().trim(),
        i = null;
      if (Jo(e) && r !== 0 && r !== "0")
        if (typeof r == "number") n = "px";
        else {
          let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && (i = `Please provide a CSS unit value for ${t}:${r}`);
        }
      return { error: i, value: u + n };
    }
  };
function Jo(e) {
  switch (e) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return !0;
    default:
      return !1;
  }
}
var E = class {
    constructor({
      closedByChildren: e,
      implicitNamespacePrefix: t,
      contentType: r = z.PARSABLE_DATA,
      closedByParent: n = !1,
      isVoid: u = !1,
      ignoreFirstLf: i = !1,
      preventNamespaceInheritance: a = !1,
      canSelfClose: s = !1,
    } = {}) {
      (this.closedByChildren = {}),
        (this.closedByParent = !1),
        e && e.length > 0 && e.forEach((o) => (this.closedByChildren[o] = !0)),
        (this.isVoid = u),
        (this.closedByParent = n || u),
        (this.implicitNamespacePrefix = t || null),
        (this.contentType = r),
        (this.ignoreFirstLf = i),
        (this.preventNamespaceInheritance = a),
        (this.canSelfClose = s ?? u);
    }
    isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
      return typeof this.contentType == "object"
        ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default
        : this.contentType;
    }
  },
  Sn,
  We;
function Cr(e) {
  return (
    We ||
      ((Sn = new E({ canSelfClose: !0 })),
      (We = Object.assign(Object.create(null), {
        base: new E({ isVoid: !0 }),
        meta: new E({ isVoid: !0 }),
        area: new E({ isVoid: !0 }),
        embed: new E({ isVoid: !0 }),
        link: new E({ isVoid: !0 }),
        img: new E({ isVoid: !0 }),
        input: new E({ isVoid: !0 }),
        param: new E({ isVoid: !0 }),
        hr: new E({ isVoid: !0 }),
        br: new E({ isVoid: !0 }),
        source: new E({ isVoid: !0 }),
        track: new E({ isVoid: !0 }),
        wbr: new E({ isVoid: !0 }),
        p: new E({
          closedByChildren: [
            "address",
            "article",
            "aside",
            "blockquote",
            "div",
            "dl",
            "fieldset",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "header",
            "hgroup",
            "hr",
            "main",
            "nav",
            "ol",
            "p",
            "pre",
            "section",
            "table",
            "ul",
          ],
          closedByParent: !0,
        }),
        thead: new E({ closedByChildren: ["tbody", "tfoot"] }),
        tbody: new E({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }),
        tfoot: new E({ closedByChildren: ["tbody"], closedByParent: !0 }),
        tr: new E({ closedByChildren: ["tr"], closedByParent: !0 }),
        td: new E({ closedByChildren: ["td", "th"], closedByParent: !0 }),
        th: new E({ closedByChildren: ["td", "th"], closedByParent: !0 }),
        col: new E({ isVoid: !0 }),
        svg: new E({ implicitNamespacePrefix: "svg" }),
        foreignObject: new E({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }),
        math: new E({ implicitNamespacePrefix: "math" }),
        li: new E({ closedByChildren: ["li"], closedByParent: !0 }),
        dt: new E({ closedByChildren: ["dt", "dd"] }),
        dd: new E({ closedByChildren: ["dt", "dd"], closedByParent: !0 }),
        rb: new E({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
        rt: new E({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
        rtc: new E({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }),
        rp: new E({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
        optgroup: new E({ closedByChildren: ["optgroup"], closedByParent: !0 }),
        option: new E({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }),
        pre: new E({ ignoreFirstLf: !0 }),
        listing: new E({ ignoreFirstLf: !0 }),
        style: new E({ contentType: z.RAW_TEXT }),
        script: new E({ contentType: z.RAW_TEXT }),
        title: new E({ contentType: { default: z.ESCAPABLE_RAW_TEXT, svg: z.PARSABLE_DATA } }),
        textarea: new E({ contentType: z.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }),
      })),
      new Ko().allKnownElementNames().forEach((t) => {
        !We[t] && gt(t) === null && (We[t] = new E({ canSelfClose: !1 }));
      })),
    We[e] ?? Sn
  );
}
var ut = class {
    constructor(e, t) {
      (this.sourceSpan = e), (this.i18n = t);
    }
  },
  Yo = class extends ut {
    constructor(e, t, r, n) {
      super(t, n), (this.value = e), (this.tokens = r), (this.type = "text");
    }
    visit(e, t) {
      return e.visitText(this, t);
    }
  },
  Xo = class extends ut {
    constructor(e, t, r, n) {
      super(t, n), (this.value = e), (this.tokens = r), (this.type = "cdata");
    }
    visit(e, t) {
      return e.visitCdata(this, t);
    }
  },
  Qo = class extends ut {
    constructor(e, t, r, n, u, i) {
      super(n, i), (this.switchValue = e), (this.type = t), (this.cases = r), (this.switchValueSourceSpan = u);
    }
    visit(e, t) {
      return e.visitExpansion(this, t);
    }
  },
  Zo = class {
    constructor(e, t, r, n, u) {
      (this.value = e), (this.expression = t), (this.sourceSpan = r), (this.valueSourceSpan = n), (this.expSourceSpan = u);
    }
    visit(e, t) {
      return e.visitExpansionCase(this, t);
    }
  },
  el = class extends ut {
    constructor(e, t, r, n, u, i, a) {
      super(r, a),
        (this.name = e),
        (this.value = t),
        (this.keySpan = n),
        (this.valueSpan = u),
        (this.valueTokens = i),
        (this.type = "attribute");
    }
    visit(e, t) {
      return e.visitAttribute(this, t);
    }
    get nameSpan() {
      return this.keySpan;
    }
  },
  oe = class extends ut {
    constructor(e, t, r, n, u, i = null, a = null, s) {
      super(n, s),
        (this.name = e),
        (this.attrs = t),
        (this.children = r),
        (this.startSourceSpan = u),
        (this.endSourceSpan = i),
        (this.nameSpan = a),
        (this.type = "element");
    }
    visit(e, t) {
      return e.visitElement(this, t);
    }
  },
  tl = class {
    constructor(e, t) {
      (this.value = e), (this.sourceSpan = t), (this.type = "comment");
    }
    visit(e, t) {
      return e.visitComment(this, t);
    }
  },
  rl = class {
    constructor(e, t) {
      (this.value = e), (this.sourceSpan = t), (this.type = "docType");
    }
    visit(e, t) {
      return e.visitDocType(this, t);
    }
  },
  Be = class {
    constructor(e, t, r, n, u, i = null) {
      (this.name = e),
        (this.parameters = t),
        (this.children = r),
        (this.sourceSpan = n),
        (this.startSourceSpan = u),
        (this.endSourceSpan = i),
        (this.type = "block");
    }
    visit(e, t) {
      return e.visitBlock(this, t);
    }
  },
  An = class {
    constructor(e, t) {
      (this.expression = e),
        (this.sourceSpan = t),
        (this.type = "blockParameter"),
        (this.startSourceSpan = null),
        (this.endSourceSpan = null);
    }
    visit(e, t) {
      return e.visitBlockParameter(this, t);
    }
  };
function Ju(e, t, r = null) {
  let n = [],
    u = e.visit ? (i) => e.visit(i, r) || i.visit(e, r) : (i) => i.visit(e, r);
  return (
    t.forEach((i) => {
      let a = u(i);
      a && n.push(a);
    }),
    n
  );
}
var nl = class {
    constructor() {}
    visitElement(e, t) {
      this.visitChildren(t, (r) => {
        r(e.attrs), r(e.children);
      });
    }
    visitAttribute(e, t) {}
    visitText(e, t) {}
    visitCdata(e, t) {}
    visitComment(e, t) {}
    visitDocType(e, t) {}
    visitExpansion(e, t) {
      return this.visitChildren(t, (r) => {
        r(e.cases);
      });
    }
    visitExpansionCase(e, t) {}
    visitBlock(e, t) {
      this.visitChildren(t, (r) => {
        r(e.parameters), r(e.children);
      });
    }
    visitBlockParameter(e, t) {}
    visitChildren(e, t) {
      let r = [],
        n = this;
      function u(i) {
        i && r.push(Ju(n, i, e));
      }
      return t(u), Array.prototype.concat.apply([], r);
    }
  },
  At = {
    AElig: "Æ",
    AMP: "&",
    amp: "&",
    Aacute: "Á",
    Abreve: "Ă",
    Acirc: "Â",
    Acy: "А",
    Afr: "𝔄",
    Agrave: "À",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "𝔸",
    ApplyFunction: "⁡",
    af: "⁡",
    Aring: "Å",
    angst: "Å",
    Ascr: "𝒜",
    Assign: "≔",
    colone: "≔",
    coloneq: "≔",
    Atilde: "Ã",
    Auml: "Ä",
    Backslash: "∖",
    setminus: "∖",
    setmn: "∖",
    smallsetminus: "∖",
    ssetmn: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    doublebarwedge: "⌆",
    Bcy: "Б",
    Because: "∵",
    becaus: "∵",
    because: "∵",
    Bernoullis: "ℬ",
    Bscr: "ℬ",
    bernou: "ℬ",
    Beta: "Β",
    Bfr: "𝔅",
    Bopf: "𝔹",
    Breve: "˘",
    breve: "˘",
    Bumpeq: "≎",
    HumpDownHump: "≎",
    bump: "≎",
    CHcy: "Ч",
    COPY: "©",
    copy: "©",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    DD: "ⅅ",
    Cayleys: "ℭ",
    Cfr: "ℭ",
    Ccaron: "Č",
    Ccedil: "Ç",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "¸",
    cedil: "¸",
    CenterDot: "·",
    centerdot: "·",
    middot: "·",
    Chi: "Χ",
    CircleDot: "⊙",
    odot: "⊙",
    CircleMinus: "⊖",
    ominus: "⊖",
    CirclePlus: "⊕",
    oplus: "⊕",
    CircleTimes: "⊗",
    otimes: "⊗",
    ClockwiseContourIntegral: "∲",
    cwconint: "∲",
    CloseCurlyDoubleQuote: "”",
    rdquo: "”",
    rdquor: "”",
    CloseCurlyQuote: "’",
    rsquo: "’",
    rsquor: "’",
    Colon: "∷",
    Proportion: "∷",
    Colone: "⩴",
    Congruent: "≡",
    equiv: "≡",
    Conint: "∯",
    DoubleContourIntegral: "∯",
    ContourIntegral: "∮",
    conint: "∮",
    oint: "∮",
    Copf: "ℂ",
    complexes: "ℂ",
    Coproduct: "∐",
    coprod: "∐",
    CounterClockwiseContourIntegral: "∳",
    awconint: "∳",
    Cross: "⨯",
    Cscr: "𝒞",
    Cup: "⋓",
    CupCap: "≍",
    asympeq: "≍",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    ddagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    DoubleLeftTee: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    nabla: "∇",
    Delta: "Δ",
    Dfr: "𝔇",
    DiacriticalAcute: "´",
    acute: "´",
    DiacriticalDot: "˙",
    dot: "˙",
    DiacriticalDoubleAcute: "˝",
    dblac: "˝",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "˜",
    tilde: "˜",
    Diamond: "⋄",
    diam: "⋄",
    diamond: "⋄",
    DifferentialD: "ⅆ",
    dd: "ⅆ",
    Dopf: "𝔻",
    Dot: "¨",
    DoubleDot: "¨",
    die: "¨",
    uml: "¨",
    DotDot: "⃜",
    DotEqual: "≐",
    doteq: "≐",
    esdot: "≐",
    DoubleDownArrow: "⇓",
    Downarrow: "⇓",
    dArr: "⇓",
    DoubleLeftArrow: "⇐",
    Leftarrow: "⇐",
    lArr: "⇐",
    DoubleLeftRightArrow: "⇔",
    Leftrightarrow: "⇔",
    hArr: "⇔",
    iff: "⇔",
    DoubleLongLeftArrow: "⟸",
    Longleftarrow: "⟸",
    xlArr: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    Longleftrightarrow: "⟺",
    xhArr: "⟺",
    DoubleLongRightArrow: "⟹",
    Longrightarrow: "⟹",
    xrArr: "⟹",
    DoubleRightArrow: "⇒",
    Implies: "⇒",
    Rightarrow: "⇒",
    rArr: "⇒",
    DoubleRightTee: "⊨",
    vDash: "⊨",
    DoubleUpArrow: "⇑",
    Uparrow: "⇑",
    uArr: "⇑",
    DoubleUpDownArrow: "⇕",
    Updownarrow: "⇕",
    vArr: "⇕",
    DoubleVerticalBar: "∥",
    par: "∥",
    parallel: "∥",
    shortparallel: "∥",
    spar: "∥",
    DownArrow: "↓",
    ShortDownArrow: "↓",
    darr: "↓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    duarr: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    leftharpoondown: "↽",
    lhard: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    rhard: "⇁",
    rightharpoondown: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    top: "⊤",
    DownTeeArrow: "↧",
    mapstodown: "↧",
    Dscr: "𝒟",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "Ð",
    Eacute: "É",
    Ecaron: "Ě",
    Ecirc: "Ê",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "𝔈",
    Egrave: "È",
    Element: "∈",
    in: "∈",
    isin: "∈",
    isinv: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "𝔼",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    eqsim: "≂",
    esim: "≂",
    Equilibrium: "⇌",
    rightleftharpoons: "⇌",
    rlhar: "⇌",
    Escr: "ℰ",
    expectation: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "Ë",
    Exists: "∃",
    exist: "∃",
    ExponentialE: "ⅇ",
    ee: "ⅇ",
    exponentiale: "ⅇ",
    Fcy: "Ф",
    Ffr: "𝔉",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    blacksquare: "▪",
    squarf: "▪",
    squf: "▪",
    Fopf: "𝔽",
    ForAll: "∀",
    forall: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    gt: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "𝔊",
    Gg: "⋙",
    ggg: "⋙",
    Gopf: "𝔾",
    GreaterEqual: "≥",
    ge: "≥",
    geq: "≥",
    GreaterEqualLess: "⋛",
    gel: "⋛",
    gtreqless: "⋛",
    GreaterFullEqual: "≧",
    gE: "≧",
    geqq: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    gl: "≷",
    gtrless: "≷",
    GreaterSlantEqual: "⩾",
    geqslant: "⩾",
    ges: "⩾",
    GreaterTilde: "≳",
    gsim: "≳",
    gtrsim: "≳",
    Gscr: "𝒢",
    Gt: "≫",
    NestedGreaterGreater: "≫",
    gg: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    caron: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    Poincareplane: "ℌ",
    HilbertSpace: "ℋ",
    Hscr: "ℋ",
    hamilt: "ℋ",
    Hopf: "ℍ",
    quaternions: "ℍ",
    HorizontalLine: "─",
    boxh: "─",
    Hstrok: "Ħ",
    HumpEqual: "≏",
    bumpe: "≏",
    bumpeq: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "Í",
    Icirc: "Î",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Im: "ℑ",
    image: "ℑ",
    imagpart: "ℑ",
    Igrave: "Ì",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    ii: "ⅈ",
    Int: "∬",
    Integral: "∫",
    int: "∫",
    Intersection: "⋂",
    bigcap: "⋂",
    xcap: "⋂",
    InvisibleComma: "⁣",
    ic: "⁣",
    InvisibleTimes: "⁢",
    it: "⁢",
    Iogon: "Į",
    Iopf: "𝕀",
    Iota: "Ι",
    Iscr: "ℐ",
    imagline: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "Ï",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "𝔍",
    Jopf: "𝕁",
    Jscr: "𝒥",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "𝔎",
    Kopf: "𝕂",
    Kscr: "𝒦",
    LJcy: "Љ",
    LT: "<",
    lt: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Lscr: "ℒ",
    lagran: "ℒ",
    Larr: "↞",
    twoheadleftarrow: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    lang: "⟨",
    langle: "⟨",
    LeftArrow: "←",
    ShortLeftArrow: "←",
    larr: "←",
    leftarrow: "←",
    slarr: "←",
    LeftArrowBar: "⇤",
    larrb: "⇤",
    LeftArrowRightArrow: "⇆",
    leftrightarrows: "⇆",
    lrarr: "⇆",
    LeftCeiling: "⌈",
    lceil: "⌈",
    LeftDoubleBracket: "⟦",
    lobrk: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    dharl: "⇃",
    downharpoonleft: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    lfloor: "⌊",
    LeftRightArrow: "↔",
    harr: "↔",
    leftrightarrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    dashv: "⊣",
    LeftTeeArrow: "↤",
    mapstoleft: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    vartriangleleft: "⊲",
    vltri: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    ltrie: "⊴",
    trianglelefteq: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    uharl: "↿",
    upharpoonleft: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    leftharpoonup: "↼",
    lharu: "↼",
    LeftVectorBar: "⥒",
    LessEqualGreater: "⋚",
    leg: "⋚",
    lesseqgtr: "⋚",
    LessFullEqual: "≦",
    lE: "≦",
    leqq: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    lg: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    leqslant: "⩽",
    les: "⩽",
    LessTilde: "≲",
    lesssim: "≲",
    lsim: "≲",
    Lfr: "𝔏",
    Ll: "⋘",
    Lleftarrow: "⇚",
    lAarr: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    longleftarrow: "⟵",
    xlarr: "⟵",
    LongLeftRightArrow: "⟷",
    longleftrightarrow: "⟷",
    xharr: "⟷",
    LongRightArrow: "⟶",
    longrightarrow: "⟶",
    xrarr: "⟶",
    Lopf: "𝕃",
    LowerLeftArrow: "↙",
    swarr: "↙",
    swarrow: "↙",
    LowerRightArrow: "↘",
    searr: "↘",
    searrow: "↘",
    Lsh: "↰",
    lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    NestedLessLess: "≪",
    ll: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mscr: "ℳ",
    phmmat: "ℳ",
    Mfr: "𝔐",
    MinusPlus: "∓",
    mnplus: "∓",
    mp: "∓",
    Mopf: "𝕄",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    ZeroWidthSpace: "​",
    NewLine: `
`,
    Nfr: "𝔑",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nbsp: " ",
    Nopf: "ℕ",
    naturals: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    nequiv: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    npar: "∦",
    nparallel: "∦",
    nshortparallel: "∦",
    nspar: "∦",
    NotElement: "∉",
    notin: "∉",
    notinva: "∉",
    NotEqual: "≠",
    ne: "≠",
    NotEqualTilde: "≂̸",
    nesim: "≂̸",
    NotExists: "∄",
    nexist: "∄",
    nexists: "∄",
    NotGreater: "≯",
    ngt: "≯",
    ngtr: "≯",
    NotGreaterEqual: "≱",
    nge: "≱",
    ngeq: "≱",
    NotGreaterFullEqual: "≧̸",
    ngE: "≧̸",
    ngeqq: "≧̸",
    NotGreaterGreater: "≫̸",
    nGtv: "≫̸",
    NotGreaterLess: "≹",
    ntgl: "≹",
    NotGreaterSlantEqual: "⩾̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    NotGreaterTilde: "≵",
    ngsim: "≵",
    NotHumpDownHump: "≎̸",
    nbump: "≎̸",
    NotHumpEqual: "≏̸",
    nbumpe: "≏̸",
    NotLeftTriangle: "⋪",
    nltri: "⋪",
    ntriangleleft: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    nltrie: "⋬",
    ntrianglelefteq: "⋬",
    NotLess: "≮",
    nless: "≮",
    nlt: "≮",
    NotLessEqual: "≰",
    nle: "≰",
    nleq: "≰",
    NotLessGreater: "≸",
    ntlg: "≸",
    NotLessLess: "≪̸",
    nLtv: "≪̸",
    NotLessSlantEqual: "⩽̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    NotLessTilde: "≴",
    nlsim: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    npr: "⊀",
    nprec: "⊀",
    NotPrecedesEqual: "⪯̸",
    npre: "⪯̸",
    npreceq: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    nprcue: "⋠",
    NotReverseElement: "∌",
    notni: "∌",
    notniva: "∌",
    NotRightTriangle: "⋫",
    nrtri: "⋫",
    ntriangleright: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    nrtrie: "⋭",
    ntrianglerighteq: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    nsqsube: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    nsqsupe: "⋣",
    NotSubset: "⊂⃒",
    nsubset: "⊂⃒",
    vnsub: "⊂⃒",
    NotSubsetEqual: "⊈",
    nsube: "⊈",
    nsubseteq: "⊈",
    NotSucceeds: "⊁",
    nsc: "⊁",
    nsucc: "⊁",
    NotSucceedsEqual: "⪰̸",
    nsce: "⪰̸",
    nsucceq: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    nsccue: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    nsupset: "⊃⃒",
    vnsup: "⊃⃒",
    NotSupersetEqual: "⊉",
    nsupe: "⊉",
    nsupseteq: "⊉",
    NotTilde: "≁",
    nsim: "≁",
    NotTildeEqual: "≄",
    nsime: "≄",
    nsimeq: "≄",
    NotTildeFullEqual: "≇",
    ncong: "≇",
    NotTildeTilde: "≉",
    nap: "≉",
    napprox: "≉",
    NotVerticalBar: "∤",
    nmid: "∤",
    nshortmid: "∤",
    nsmid: "∤",
    Nscr: "𝒩",
    Ntilde: "Ñ",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "𝔒",
    Ograve: "Ò",
    Omacr: "Ō",
    Omega: "Ω",
    ohm: "Ω",
    Omicron: "Ο",
    Oopf: "𝕆",
    OpenCurlyDoubleQuote: "“",
    ldquo: "“",
    OpenCurlyQuote: "‘",
    lsquo: "‘",
    Or: "⩔",
    Oscr: "𝒪",
    Oslash: "Ø",
    Otilde: "Õ",
    Otimes: "⨷",
    Ouml: "Ö",
    OverBar: "‾",
    oline: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    tbrk: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    part: "∂",
    Pcy: "П",
    Pfr: "𝔓",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "±",
    plusmn: "±",
    pm: "±",
    Popf: "ℙ",
    primes: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    pr: "≺",
    prec: "≺",
    PrecedesEqual: "⪯",
    pre: "⪯",
    preceq: "⪯",
    PrecedesSlantEqual: "≼",
    prcue: "≼",
    preccurlyeq: "≼",
    PrecedesTilde: "≾",
    precsim: "≾",
    prsim: "≾",
    Prime: "″",
    Product: "∏",
    prod: "∏",
    Proportional: "∝",
    prop: "∝",
    propto: "∝",
    varpropto: "∝",
    vprop: "∝",
    Pscr: "𝒫",
    Psi: "Ψ",
    QUOT: '"',
    quot: '"',
    Qfr: "𝔔",
    Qopf: "ℚ",
    rationals: "ℚ",
    Qscr: "𝒬",
    RBarr: "⤐",
    drbkarow: "⤐",
    REG: "®",
    circledR: "®",
    reg: "®",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    twoheadrightarrow: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    Rfr: "ℜ",
    real: "ℜ",
    realpart: "ℜ",
    ReverseElement: "∋",
    SuchThat: "∋",
    ni: "∋",
    niv: "∋",
    ReverseEquilibrium: "⇋",
    leftrightharpoons: "⇋",
    lrhar: "⇋",
    ReverseUpEquilibrium: "⥯",
    duhar: "⥯",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    rang: "⟩",
    rangle: "⟩",
    RightArrow: "→",
    ShortRightArrow: "→",
    rarr: "→",
    rightarrow: "→",
    srarr: "→",
    RightArrowBar: "⇥",
    rarrb: "⇥",
    RightArrowLeftArrow: "⇄",
    rightleftarrows: "⇄",
    rlarr: "⇄",
    RightCeiling: "⌉",
    rceil: "⌉",
    RightDoubleBracket: "⟧",
    robrk: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    dharr: "⇂",
    downharpoonright: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rfloor: "⌋",
    RightTee: "⊢",
    vdash: "⊢",
    RightTeeArrow: "↦",
    map: "↦",
    mapsto: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    vartriangleright: "⊳",
    vrtri: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    rtrie: "⊵",
    trianglerighteq: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    uharr: "↾",
    upharpoonright: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    rharu: "⇀",
    rightharpoonup: "⇀",
    RightVectorBar: "⥓",
    Ropf: "ℝ",
    reals: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    rAarr: "⇛",
    Rscr: "ℛ",
    realine: "ℛ",
    Rsh: "↱",
    rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "𝔖",
    ShortUpArrow: "↑",
    UpArrow: "↑",
    uarr: "↑",
    uparrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    compfn: "∘",
    Sopf: "𝕊",
    Sqrt: "√",
    radic: "√",
    Square: "□",
    squ: "□",
    square: "□",
    SquareIntersection: "⊓",
    sqcap: "⊓",
    SquareSubset: "⊏",
    sqsub: "⊏",
    sqsubset: "⊏",
    SquareSubsetEqual: "⊑",
    sqsube: "⊑",
    sqsubseteq: "⊑",
    SquareSuperset: "⊐",
    sqsup: "⊐",
    sqsupset: "⊐",
    SquareSupersetEqual: "⊒",
    sqsupe: "⊒",
    sqsupseteq: "⊒",
    SquareUnion: "⊔",
    sqcup: "⊔",
    Sscr: "𝒮",
    Star: "⋆",
    sstarf: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    sube: "⊆",
    subseteq: "⊆",
    Succeeds: "≻",
    sc: "≻",
    succ: "≻",
    SucceedsEqual: "⪰",
    sce: "⪰",
    succeq: "⪰",
    SucceedsSlantEqual: "≽",
    sccue: "≽",
    succcurlyeq: "≽",
    SucceedsTilde: "≿",
    scsim: "≿",
    succsim: "≿",
    Sum: "∑",
    sum: "∑",
    Sup: "⋑",
    Supset: "⋑",
    Superset: "⊃",
    sup: "⊃",
    supset: "⊃",
    SupersetEqual: "⊇",
    supe: "⊇",
    supseteq: "⊇",
    THORN: "Þ",
    TRADE: "™",
    trade: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "𝔗",
    Therefore: "∴",
    there4: "∴",
    therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    Tilde: "∼",
    sim: "∼",
    thicksim: "∼",
    thksim: "∼",
    TildeEqual: "≃",
    sime: "≃",
    simeq: "≃",
    TildeFullEqual: "≅",
    cong: "≅",
    TildeTilde: "≈",
    ap: "≈",
    approx: "≈",
    asymp: "≈",
    thickapprox: "≈",
    thkap: "≈",
    Topf: "𝕋",
    TripleDot: "⃛",
    tdot: "⃛",
    Tscr: "𝒯",
    Tstrok: "Ŧ",
    Uacute: "Ú",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "Û",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "𝔘",
    Ugrave: "Ù",
    Umacr: "Ū",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    bbrk: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    bigcup: "⋃",
    xcup: "⋃",
    UnionPlus: "⊎",
    uplus: "⊎",
    Uogon: "Ų",
    Uopf: "𝕌",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    udarr: "⇅",
    UpDownArrow: "↕",
    updownarrow: "↕",
    varr: "↕",
    UpEquilibrium: "⥮",
    udhar: "⥮",
    UpTee: "⊥",
    bot: "⊥",
    bottom: "⊥",
    perp: "⊥",
    UpTeeArrow: "↥",
    mapstoup: "↥",
    UpperLeftArrow: "↖",
    nwarr: "↖",
    nwarrow: "↖",
    UpperRightArrow: "↗",
    nearr: "↗",
    nearrow: "↗",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "𝒰",
    Utilde: "Ũ",
    Uuml: "Ü",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    bigvee: "⋁",
    xvee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    mid: "∣",
    shortmid: "∣",
    smid: "∣",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    wr: "≀",
    wreath: "≀",
    VeryThinSpace: " ",
    hairsp: " ",
    Vfr: "𝔙",
    Vopf: "𝕍",
    Vscr: "𝒱",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    bigwedge: "⋀",
    xwedge: "⋀",
    Wfr: "𝔚",
    Wopf: "𝕎",
    Wscr: "𝒲",
    Xfr: "𝔛",
    Xi: "Ξ",
    Xopf: "𝕏",
    Xscr: "𝒳",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "Ý",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "𝔜",
    Yopf: "𝕐",
    Yscr: "𝒴",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    Zeta: "Ζ",
    Zfr: "ℨ",
    zeetrf: "ℨ",
    Zopf: "ℤ",
    integers: "ℤ",
    Zscr: "𝒵",
    aacute: "á",
    abreve: "ă",
    ac: "∾",
    mstpos: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "â",
    acy: "а",
    aelig: "æ",
    afr: "𝔞",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    and: "∧",
    wedge: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    angle: "∠",
    ange: "⦤",
    angmsd: "∡",
    measuredangle: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "𝕒",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    approxeq: "≊",
    apid: "≋",
    apos: "'",
    aring: "å",
    ascr: "𝒶",
    ast: "*",
    midast: "*",
    atilde: "ã",
    auml: "ä",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    bcong: "≌",
    backepsilon: "϶",
    bepsi: "϶",
    backprime: "‵",
    bprime: "‵",
    backsim: "∽",
    bsim: "∽",
    backsimeq: "⋍",
    bsime: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrktbrk: "⎶",
    bcy: "б",
    bdquo: "„",
    ldquor: "„",
    bemptyv: "⦰",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    twixt: "≬",
    bfr: "𝔟",
    bigcirc: "◯",
    xcirc: "◯",
    bigodot: "⨀",
    xodot: "⨀",
    bigoplus: "⨁",
    xoplus: "⨁",
    bigotimes: "⨂",
    xotime: "⨂",
    bigsqcup: "⨆",
    xsqcup: "⨆",
    bigstar: "★",
    starf: "★",
    bigtriangledown: "▽",
    xdtri: "▽",
    bigtriangleup: "△",
    xutri: "△",
    biguplus: "⨄",
    xuplus: "⨄",
    bkarow: "⤍",
    rbarr: "⤍",
    blacklozenge: "⧫",
    lozf: "⧫",
    blacktriangle: "▴",
    utrif: "▴",
    blacktriangledown: "▾",
    dtrif: "▾",
    blacktriangleleft: "◂",
    ltrif: "◂",
    blacktriangleright: "▸",
    rtrif: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "𝕓",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    minusb: "⊟",
    boxplus: "⊞",
    plusb: "⊞",
    boxtimes: "⊠",
    timesb: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    brvbar: "¦",
    bscr: "𝒷",
    bsemi: "⁏",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bumpE: "⪮",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "ç",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cemptyv: "⦲",
    cent: "¢",
    cfr: "𝔠",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    cire: "≗",
    circlearrowleft: "↺",
    olarr: "↺",
    circlearrowright: "↻",
    orarr: "↻",
    circledS: "Ⓢ",
    oS: "Ⓢ",
    circledast: "⊛",
    oast: "⊛",
    circledcirc: "⊚",
    ocir: "⊚",
    circleddash: "⊝",
    odash: "⊝",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "∁",
    complement: "∁",
    congdot: "⩭",
    copf: "𝕔",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    curlyeqprec: "⋞",
    cuesc: "⋟",
    curlyeqsucc: "⋟",
    cularr: "↶",
    curvearrowleft: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curvearrowright: "↷",
    curarrm: "⤼",
    curlyvee: "⋎",
    cuvee: "⋎",
    curlywedge: "⋏",
    cuwed: "⋏",
    curren: "¤",
    cwint: "∱",
    cylcty: "⌭",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    dash: "‐",
    hyphen: "‐",
    dbkarow: "⤏",
    rBarr: "⤏",
    dcaron: "ď",
    dcy: "д",
    ddarr: "⇊",
    downdownarrows: "⇊",
    ddotseq: "⩷",
    eDDot: "⩷",
    deg: "°",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "𝔡",
    diamondsuit: "♦",
    diams: "♦",
    digamma: "ϝ",
    gammad: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    llcorner: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "𝕕",
    doteqdot: "≑",
    eDot: "≑",
    dotminus: "∸",
    minusd: "∸",
    dotplus: "∔",
    plusdo: "∔",
    dotsquare: "⊡",
    sdotb: "⊡",
    drcorn: "⌟",
    lrcorner: "⌟",
    drcrop: "⌌",
    dscr: "𝒹",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    triangledown: "▿",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eacute: "é",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    eqcirc: "≖",
    ecirc: "ê",
    ecolon: "≕",
    eqcolon: "≕",
    ecy: "э",
    edot: "ė",
    efDot: "≒",
    fallingdotseq: "≒",
    efr: "𝔢",
    eg: "⪚",
    egrave: "è",
    egs: "⪖",
    eqslantgtr: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    eqslantless: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    varnothing: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    straightepsilon: "ϵ",
    varepsilon: "ϵ",
    equals: "=",
    equest: "≟",
    questeq: "≟",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    risingdotseq: "≓",
    erarr: "⥱",
    escr: "ℯ",
    eta: "η",
    eth: "ð",
    euml: "ë",
    euro: "€",
    excl: "!",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "𝔣",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "𝕗",
    fork: "⋔",
    pitchfork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "½",
    half: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    sfrown: "⌢",
    fscr: "𝒻",
    gEl: "⪌",
    gtreqqless: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gap: "⪆",
    gtrapprox: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "𝔤",
    gimel: "ℷ",
    gjcy: "ѓ",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gneqq: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gnsim: "⋧",
    gopf: "𝕘",
    gscr: "ℊ",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtrdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrarr: "⥸",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hardcy: "ъ",
    harrcir: "⥈",
    harrw: "↭",
    leftrightsquigarrow: "↭",
    hbar: "ℏ",
    hslash: "ℏ",
    planck: "ℏ",
    plankv: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    mldr: "…",
    hercon: "⊹",
    hfr: "𝔥",
    hksearow: "⤥",
    searhk: "⤥",
    hkswarow: "⤦",
    swarhk: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    larrhk: "↩",
    hookrightarrow: "↪",
    rarrhk: "↪",
    hopf: "𝕙",
    horbar: "―",
    hscr: "𝒽",
    hstrok: "ħ",
    hybull: "⁃",
    iacute: "í",
    icirc: "î",
    icy: "и",
    iecy: "е",
    iexcl: "¡",
    ifr: "𝔦",
    igrave: "ì",
    iiiint: "⨌",
    qint: "⨌",
    iiint: "∭",
    tint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    imath: "ı",
    inodot: "ı",
    imof: "⊷",
    imped: "Ƶ",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    intcal: "⊺",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "𝕚",
    iota: "ι",
    iquest: "¿",
    iscr: "𝒾",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "ï",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "𝔧",
    jmath: "ȷ",
    jopf: "𝕛",
    jscr: "𝒿",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    varkappa: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "𝔨",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "𝕜",
    kscr: "𝓀",
    lAtail: "⤛",
    lBarr: "⤎",
    lEg: "⪋",
    lesseqqgtr: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lambda: "λ",
    langd: "⦑",
    lap: "⪅",
    lessapprox: "⪅",
    laquo: "«",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrlp: "↫",
    looparrowleft: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    leftarrowtail: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lcy: "л",
    ldca: "⤶",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leq: "≤",
    leftleftarrows: "⇇",
    llarr: "⇇",
    leftthreetimes: "⋋",
    lthree: "⋋",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessdot: "⋖",
    ltdot: "⋖",
    lfisht: "⥼",
    lfr: "𝔩",
    lgE: "⪑",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lneqq: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    longmapsto: "⟼",
    xmap: "⟼",
    looparrowright: "↬",
    rarrlp: "↬",
    lopar: "⦅",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    loz: "◊",
    lozenge: "◊",
    lpar: "(",
    lparlt: "⦓",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    lsime: "⪍",
    lsimg: "⪏",
    lsquor: "‚",
    sbquo: "‚",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    triangleleft: "◃",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "¯",
    strns: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midcir: "⫰",
    minus: "−",
    minusdu: "⨪",
    mlcp: "⫛",
    models: "⊧",
    mopf: "𝕞",
    mscr: "𝓂",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nLeftarrow: "⇍",
    nlArr: "⇍",
    nLeftrightarrow: "⇎",
    nhArr: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nRightarrow: "⇏",
    nrArr: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nacute: "ń",
    nang: "∠⃒",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    natur: "♮",
    natural: "♮",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    neArr: "⇗",
    nearhk: "⤤",
    nedot: "≐̸",
    nesear: "⤨",
    toea: "⤨",
    nfr: "𝔫",
    nharr: "↮",
    nleftrightarrow: "↮",
    nhpar: "⫲",
    nis: "⋼",
    nisd: "⋺",
    njcy: "њ",
    nlE: "≦̸",
    nleqq: "≦̸",
    nlarr: "↚",
    nleftarrow: "↚",
    nldr: "‥",
    nopf: "𝕟",
    not: "¬",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinvb: "⋷",
    notinvc: "⋶",
    notnivb: "⋾",
    notnivc: "⋽",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    nrarr: "↛",
    nrightarrow: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nscr: "𝓃",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsubseteqq: "⫅̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupseteqq: "⫆̸",
    ntilde: "ñ",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwnear: "⤧",
    oacute: "ó",
    ocirc: "ô",
    ocy: "о",
    odblac: "ő",
    odiv: "⨸",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "𝔬",
    ogon: "˛",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    olcir: "⦾",
    olcross: "⦻",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    oopf: "𝕠",
    opar: "⦷",
    operp: "⦹",
    or: "∨",
    vee: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    oscr: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oslash: "ø",
    osol: "⊘",
    otilde: "õ",
    otimesas: "⨶",
    ouml: "ö",
    ovbar: "⌽",
    para: "¶",
    parsim: "⫳",
    parsl: "⫽",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    pertenk: "‱",
    pfr: "𝔭",
    phi: "φ",
    phiv: "ϕ",
    straightphi: "ϕ",
    varphi: "ϕ",
    phone: "☎",
    pi: "π",
    piv: "ϖ",
    varpi: "ϖ",
    planckh: "ℎ",
    plus: "+",
    plusacir: "⨣",
    pluscir: "⨢",
    plusdu: "⨥",
    pluse: "⩲",
    plussim: "⨦",
    plustwo: "⨧",
    pointint: "⨕",
    popf: "𝕡",
    pound: "£",
    prE: "⪳",
    prap: "⪷",
    precapprox: "⪷",
    precnapprox: "⪹",
    prnap: "⪹",
    precneqq: "⪵",
    prnE: "⪵",
    precnsim: "⋨",
    prnsim: "⋨",
    prime: "′",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prurel: "⊰",
    pscr: "𝓅",
    psi: "ψ",
    puncsp: " ",
    qfr: "𝔮",
    qopf: "𝕢",
    qprime: "⁗",
    qscr: "𝓆",
    quatint: "⨖",
    quest: "?",
    rAtail: "⤜",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    raemptyv: "⦳",
    rangd: "⦒",
    range: "⦥",
    raquo: "»",
    rarrap: "⥵",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rightarrowtail: "↣",
    rarrw: "↝",
    rightsquigarrow: "↝",
    ratail: "⤚",
    ratio: "∶",
    rbbrk: "❳",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdsh: "↳",
    rect: "▭",
    rfisht: "⥽",
    rfr: "𝔯",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    varrho: "ϱ",
    rightrightarrows: "⇉",
    rrarr: "⇉",
    rightthreetimes: "⋌",
    rthree: "⋌",
    ring: "˚",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    ropar: "⦆",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rsaquo: "›",
    rscr: "𝓇",
    rtimes: "⋊",
    rtri: "▹",
    triangleright: "▹",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    scE: "⪴",
    scap: "⪸",
    succapprox: "⪸",
    scaron: "š",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    succneqq: "⪶",
    scnap: "⪺",
    succnapprox: "⪺",
    scnsim: "⋩",
    succnsim: "⋩",
    scpolint: "⨓",
    scy: "с",
    sdot: "⋅",
    sdote: "⩦",
    seArr: "⇘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    tosa: "⤩",
    sext: "✶",
    sfr: "𝔰",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shy: "­",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    varsigma: "ς",
    simdot: "⩪",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    smashp: "⨳",
    smeparsl: "⧤",
    smile: "⌣",
    ssmile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    sqcaps: "⊓︀",
    sqcups: "⊔︀",
    sscr: "𝓈",
    star: "☆",
    sub: "⊂",
    subset: "⊂",
    subE: "⫅",
    subseteqq: "⫅",
    subdot: "⪽",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subsetneqq: "⫋",
    subne: "⊊",
    subsetneq: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supE: "⫆",
    supseteqq: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supsetneqq: "⫌",
    supne: "⊋",
    supsetneq: "⊋",
    supplus: "⫀",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swnwar: "⤪",
    szlig: "ß",
    target: "⌖",
    tau: "τ",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    telrec: "⌕",
    tfr: "𝔱",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    vartheta: "ϑ",
    thorn: "þ",
    times: "×",
    timesbar: "⨱",
    timesd: "⨰",
    topbot: "⌶",
    topcir: "⫱",
    topf: "𝕥",
    topfork: "⫚",
    tprime: "‴",
    triangle: "▵",
    utri: "▵",
    triangleq: "≜",
    trie: "≜",
    tridot: "◬",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "𝓉",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    uHar: "⥣",
    uacute: "ú",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "û",
    ucy: "у",
    udblac: "ű",
    ufisht: "⥾",
    ufr: "𝔲",
    ugrave: "ù",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uogon: "ų",
    uopf: "𝕦",
    upsi: "υ",
    upsilon: "υ",
    upuparrows: "⇈",
    uuarr: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "𝓊",
    utdot: "⋰",
    utilde: "ũ",
    uuml: "ü",
    uwangle: "⦧",
    vBar: "⫨",
    vBarv: "⫩",
    vangrt: "⦜",
    varsubsetneq: "⊊︀",
    vsubne: "⊊︀",
    varsubsetneqq: "⫋︀",
    vsubnE: "⫋︀",
    varsupsetneq: "⊋︀",
    vsupne: "⊋︀",
    varsupsetneqq: "⫌︀",
    vsupnE: "⫌︀",
    vcy: "в",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    vfr: "𝔳",
    vopf: "𝕧",
    vscr: "𝓋",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedgeq: "≙",
    weierp: "℘",
    wp: "℘",
    wfr: "𝔴",
    wopf: "𝕨",
    wscr: "𝓌",
    xfr: "𝔵",
    xi: "ξ",
    xnis: "⋻",
    xopf: "𝕩",
    xscr: "𝓍",
    yacute: "ý",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "¥",
    yfr: "𝔶",
    yicy: "ї",
    yopf: "𝕪",
    yscr: "𝓎",
    yucy: "ю",
    yuml: "ÿ",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeta: "ζ",
    zfr: "𝔷",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌",
  },
  ul = "";
At.ngsp = ul;
var il = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function al(e, t) {
  if (t != null && !(Array.isArray(t) && t.length == 2)) throw new Error(`Expected '${e}' to be an array, [start, end].`);
  if (t != null) {
    let r = t[0],
      n = t[1];
    il.forEach((u) => {
      if (u.test(r) || u.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
var sl = class Yu {
    static fromArray(t) {
      return t ? (al("interpolation", t), new Yu(t[0], t[1])) : Xu;
    }
    constructor(t, r) {
      (this.start = t), (this.end = r);
    }
  },
  Xu = new sl("{{", "}}"),
  ir = class extends Ou {
    constructor(e, t, r) {
      super(r, e), (this.tokenType = t);
    }
  },
  ol = class {
    constructor(e, t, r) {
      (this.tokens = e), (this.errors = t), (this.nonNormalizedIcuExpressions = r);
    }
  };
function ll(e, t, r, n = {}) {
  let u = new hl(new Iu(e, t), r, n);
  return u.tokenize(), new ol(Cl(u.tokens), u.errors, u.nonNormalizedIcuExpressions);
}
var cl = /\r\n?/g;
function xe(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function kn(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function pl(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var kt;
(function (e) {
  (e.HEX = "hexadecimal"), (e.DEC = "decimal");
})(kt || (kt = {}));
var ar = class {
    constructor(e) {
      this.error = e;
    }
  },
  hl = class {
    constructor(e, t, r) {
      (this._getTagContentType = t),
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        (this._expansionCaseStack = []),
        (this._inInterpolation = !1),
        (this._fullNameStack = []),
        (this.tokens = []),
        (this.errors = []),
        (this.nonNormalizedIcuExpressions = []),
        (this._tokenizeIcu = r.tokenizeExpansionForms || !1),
        (this._interpolationConfig = r.interpolationConfig || Xu),
        (this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((u) => u.codePointAt(0) || 0)),
        (this._canSelfClose = r.canSelfClose || !1),
        (this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || !1);
      let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
      (this._cursor = r.escapedString ? new Fl(e, n) : new Qu(e, n)),
        (this._preserveLineEndings = r.preserveLineEndings || !1),
        (this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || !1),
        (this._tokenizeBlocks = r.tokenizeBlocks ?? !0);
      try {
        this._cursor.init();
      } catch (u) {
        this.handleError(u);
      }
    }
    _processCarriageReturns(e) {
      return this._preserveLineEndings
        ? e
        : e.replace(
            cl,
            `
`
          );
    }
    tokenize() {
      for (; this._cursor.peek() !== 0; ) {
        let e = this._cursor.clone();
        try {
          if (this._attemptCharCode(60))
            if (this._attemptCharCode(33))
              this._attemptStr("[CDATA[")
                ? this._consumeCdata(e)
                : this._attemptStr("--")
                ? this._consumeComment(e)
                : this._attemptStrCaseInsensitive("doctype")
                ? this._consumeDocType(e)
                : this._consumeBogusComment(e);
            else if (this._attemptCharCode(47)) this._consumeTagClose(e);
            else {
              let t = this._cursor.clone();
              this._attemptCharCode(63) ? ((this._cursor = t), this._consumeBogusComment(e)) : this._consumeTagOpen(e);
            }
          else
            this._tokenizeBlocks && this._attemptCharCode(64)
              ? this._consumeBlockStart(e)
              : this._tokenizeBlocks &&
                !this._inInterpolation &&
                !this._isInExpansionCase() &&
                !this._isInExpansionForm() &&
                this._attemptCharCode(125)
              ? this._consumeBlockEnd(e)
              : (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                this._consumeWithInterpolation(
                  5,
                  8,
                  () => this._isTextEnd(),
                  () => this._isTagStart()
                );
        } catch (t) {
          this.handleError(t);
        }
      }
      this._beginToken(30), this._endToken([]);
    }
    _getBlockName() {
      let e = !1,
        t = this._cursor.clone();
      return this._attemptCharCodeUntilFn((r) => (jr(r) ? !e : xn(r) ? ((e = !0), !1) : !0)), this._cursor.getChars(t).trim();
    }
    _consumeBlockStart(e) {
      this._beginToken(25, e);
      let t = this._endToken([this._getBlockName()]);
      if (this._cursor.peek() === 40)
        if ((this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(_), this._attemptCharCode(41)))
          this._attemptCharCodeUntilFn(_);
        else {
          t.type = 29;
          return;
        }
      this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : (t.type = 29);
    }
    _consumeBlockEnd(e) {
      this._beginToken(27, e), this._endToken([]);
    }
    _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(Tn); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
        this._beginToken(28);
        let e = this._cursor.clone(),
          t = null,
          r = 0;
        for (; (this._cursor.peek() !== 59 && this._cursor.peek() !== 0) || t !== null; ) {
          let n = this._cursor.peek();
          if (n === 92) this._cursor.advance();
          else if (n === t) t = null;
          else if (t === null && Dn(n)) t = n;
          else if (n === 40 && t === null) r++;
          else if (n === 41 && t === null) {
            if (r === 0) break;
            r > 0 && r--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Tn);
      }
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
      if (ml(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
      if (this._cursor.peek() === 125) {
        if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
      }
      return !1;
    }
    _beginToken(e, t = this._cursor.clone()) {
      (this._currentTokenStart = t), (this._currentTokenType = e);
    }
    _endToken(e, t) {
      if (this._currentTokenStart === null)
        throw new ir(
          "Programming error - attempted to end a token when there was no start to the token",
          this._currentTokenType,
          this._cursor.getSpan(t)
        );
      if (this._currentTokenType === null)
        throw new ir(
          "Programming error - attempted to end a token which has no token type",
          null,
          this._cursor.getSpan(this._currentTokenStart)
        );
      let r = {
        type: this._currentTokenType,
        parts: e,
        sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints),
      };
      return this.tokens.push(r), (this._currentTokenStart = null), (this._currentTokenType = null), r;
    }
    _createError(e, t) {
      this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let r = new ir(e, this._currentTokenType, t);
      return (this._currentTokenStart = null), (this._currentTokenType = null), new ar(r);
    }
    handleError(e) {
      if ((e instanceof Jr && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof ar)) this.errors.push(e.error);
      else throw e;
    }
    _attemptCharCode(e) {
      return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
    }
    _attemptCharCodeCaseInsensitive(e) {
      return gl(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
    }
    _requireCharCode(e) {
      let t = this._cursor.clone();
      if (!this._attemptCharCode(e)) throw this._createError(xe(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let r = this._cursor.clone();
      for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return (this._cursor = r), !1;
      return !0;
    }
    _attemptStrCaseInsensitive(e) {
      for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
      return !0;
    }
    _requireStr(e) {
      let t = this._cursor.clone();
      if (!this._attemptStr(e)) throw this._createError(xe(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _requireStrCaseInsensitive(e) {
      let t = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(xe(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, t) {
      let r = this._cursor.clone();
      if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t))
        throw this._createError(xe(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
    }
    _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), e;
    }
    _consumeEntity(e) {
      this._beginToken(9);
      let t = this._cursor.clone();
      if ((this._cursor.advance(), this._attemptCharCode(35))) {
        let r = this._attemptCharCode(120) || this._attemptCharCode(88),
          n = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(Dl), this._cursor.peek() != 59)) {
          this._cursor.advance();
          let i = r ? kt.HEX : kt.DEC;
          throw this._createError(pl(i, this._cursor.getChars(t)), this._cursor.getSpan());
        }
        let u = this._cursor.getChars(n);
        this._cursor.advance();
        try {
          let i = parseInt(u, r ? 16 : 10);
          this._endToken([String.fromCharCode(i), this._cursor.getChars(t)]);
        } catch {
          throw this._createError(kn(this._cursor.getChars(t)), this._cursor.getSpan());
        }
      } else {
        let r = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(fl), this._cursor.peek() != 59))
          this._beginToken(e, t), (this._cursor = r), this._endToken(["&"]);
        else {
          let n = this._cursor.getChars(r);
          this._cursor.advance();
          let u = At[n];
          if (!u) throw this._createError(kn(n), this._cursor.getSpan(t));
          this._endToken([u, `&${n};`]);
        }
      }
    }
    _consumeRawText(e, t) {
      this._beginToken(e ? 6 : 7);
      let r = [];
      for (;;) {
        let n = this._cursor.clone(),
          u = t();
        if (((this._cursor = n), u)) break;
        e && this._cursor.peek() === 38
          ? (this._endToken([this._processCarriageReturns(r.join(""))]), (r.length = 0), this._consumeEntity(6), this._beginToken(6))
          : r.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(r.join(""))]);
    }
    _consumeComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr("-->")),
        this._beginToken(11),
        this._requireStr("-->"),
        this._endToken([]);
    }
    _consumeBogusComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(11),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumeCdata(e) {
      this._beginToken(12, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr("]]>")),
        this._beginToken(13),
        this._requireStr("]]>"),
        this._endToken([]);
    }
    _consumeDocType(e) {
      this._beginToken(18, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(19),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumePrefixAndName() {
      let e = this._cursor.clone(),
        t = "";
      for (; this._cursor.peek() !== 58 && !dl(this._cursor.peek()); ) this._cursor.advance();
      let r;
      this._cursor.peek() === 58 ? ((t = this._cursor.getChars(e)), this._cursor.advance(), (r = this._cursor.clone())) : (r = e),
        this._requireCharCodeUntilFn(_n, t === "" ? 0 : 1);
      let n = this._cursor.getChars(r);
      return [t, n];
    }
    _consumeTagOpen(e) {
      let t,
        r,
        n,
        u = [];
      try {
        if (!$r(this._cursor.peek())) throw this._createError(xe(this._cursor.peek()), this._cursor.getSpan(e));
        for (
          n = this._consumeTagOpenStart(e), r = n.parts[0], t = n.parts[1], this._attemptCharCodeUntilFn(_);
          this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0;

        ) {
          let [a, s] = this._consumeAttributeName();
          if ((this._attemptCharCodeUntilFn(_), this._attemptCharCode(61))) {
            this._attemptCharCodeUntilFn(_);
            let o = this._consumeAttributeValue();
            u.push({ prefix: a, name: s, value: o });
          } else u.push({ prefix: a, name: s });
          this._attemptCharCodeUntilFn(_);
        }
        this._consumeTagOpenEnd();
      } catch (a) {
        if (a instanceof ar) {
          n ? (n.type = 4) : (this._beginToken(5, e), this._endToken(["<"]));
          return;
        }
        throw a;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
      let i = this._getTagContentType(t, r, this._fullNameStack.length > 0, u);
      this._handleFullNameStackForTagOpen(r, t),
        i === z.RAW_TEXT
          ? this._consumeRawTextWithTagClose(r, t, !1)
          : i === z.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, t, !0);
    }
    _consumeRawTextWithTagClose(e, t, r) {
      this._consumeRawText(r, () =>
        !this._attemptCharCode(60) ||
        !this._attemptCharCode(47) ||
        (this._attemptCharCodeUntilFn(_), !this._attemptStrCaseInsensitive(e ? `${e}:${t}` : t))
          ? !1
          : (this._attemptCharCodeUntilFn(_), this._attemptCharCode(62))
      ),
        this._beginToken(3),
        this._requireCharCodeUntilFn((n) => n === 62, 3),
        this._cursor.advance(),
        this._endToken([e, t]),
        this._handleFullNameStackForTagClose(e, t);
    }
    _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let t = this._consumePrefixAndName();
      return this._endToken(t);
    }
    _consumeAttributeName() {
      let e = this._cursor.peek();
      if (e === 39 || e === 34) throw this._createError(xe(e), this._cursor.getSpan());
      this._beginToken(14);
      let t = this._consumePrefixAndName();
      return this._endToken(t), t;
    }
    _consumeAttributeValue() {
      let e;
      if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
        let t = this._cursor.peek();
        this._consumeQuote(t);
        let r = () => this._cursor.peek() === t;
        (e = this._consumeWithInterpolation(16, 17, r, r)), this._consumeQuote(t);
      } else {
        let t = () => _n(this._cursor.peek());
        e = this._consumeWithInterpolation(16, 17, t, t);
      }
      return e;
    }
    _consumeQuote(e) {
      this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
    }
    _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(e) {
      if ((this._beginToken(3, e), this._attemptCharCodeUntilFn(_), this._allowHtmComponentClosingTags && this._attemptCharCode(47)))
        this._attemptCharCodeUntilFn(_), this._requireCharCode(62), this._endToken([]);
      else {
        let [t, r] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(_), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
      let e = this._readUntil(44),
        t = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
      else {
        let n = this._endToken([e]);
        t !== e && this.nonNormalizedIcuExpressions.push(n);
      }
      this._requireCharCode(44), this._attemptCharCodeUntilFn(_), this._beginToken(7);
      let r = this._readUntil(44);
      this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(_);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]),
        this._attemptCharCodeUntilFn(_),
        this._beginToken(22),
        this._requireCharCode(123),
        this._endToken([]),
        this._attemptCharCodeUntilFn(_),
        this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(_), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, t, r, n) {
      this._beginToken(e);
      let u = [];
      for (; !r(); ) {
        let a = this._cursor.clone();
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start)
          ? (this._endToken([this._processCarriageReturns(u.join(""))], a),
            (u.length = 0),
            this._consumeInterpolation(t, a, n),
            this._beginToken(e))
          : this._cursor.peek() === 38
          ? (this._endToken([this._processCarriageReturns(u.join(""))]), (u.length = 0), this._consumeEntity(e), this._beginToken(e))
          : u.push(this._readChar());
      }
      this._inInterpolation = !1;
      let i = this._processCarriageReturns(u.join(""));
      return this._endToken([i]), i;
    }
    _consumeInterpolation(e, t, r) {
      let n = [];
      this._beginToken(e, t), n.push(this._interpolationConfig.start);
      let u = this._cursor.clone(),
        i = null,
        a = !1;
      for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
        let s = this._cursor.clone();
        if (this._isTagStart()) {
          (this._cursor = s), n.push(this._getProcessedChars(u, s)), this._endToken(n);
          return;
        }
        if (i === null)
          if (this._attemptStr(this._interpolationConfig.end)) {
            n.push(this._getProcessedChars(u, s)), n.push(this._interpolationConfig.end), this._endToken(n);
            return;
          } else this._attemptStr("//") && (a = !0);
        let o = this._cursor.peek();
        this._cursor.advance(), o === 92 ? this._cursor.advance() : o === i ? (i = null) : !a && i === null && Dn(o) && (i = o);
      }
      n.push(this._getProcessedChars(u, this._cursor)), this._endToken(n);
    }
    _getProcessedChars(e, t) {
      return this._processCarriageReturns(t.getChars(e));
    }
    _isTextEnd() {
      return !!(
        this._isTagStart() ||
        this._cursor.peek() === 0 ||
        (this._tokenizeIcu &&
          !this._inInterpolation &&
          (this.isExpansionFormStart() || (this._cursor.peek() === 125 && this._isInExpansionCase()))) ||
        (this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 125))
      );
    }
    _isTagStart() {
      if (this._cursor.peek() === 60) {
        let e = this._cursor.clone();
        e.advance();
        let t = e.peek();
        if ((97 <= t && t <= 122) || (65 <= t && t <= 90) || t === 47 || t === 33) return !0;
      }
      return !1;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && this._cursor.peek() === 64) {
        let e = this._cursor.clone();
        if ((e.advance(), xn(e.peek()))) return !0;
      }
      return !1;
    }
    _readUntil(e) {
      let t = this._cursor.clone();
      return this._attemptUntilChar(e), this._cursor.getChars(t);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== 123) return !1;
      if (this._interpolationConfig) {
        let e = this._cursor.clone(),
          t = this._attemptStr(this._interpolationConfig.start);
        return (this._cursor = e), !t;
      }
      return !0;
    }
    _handleFullNameStackForTagOpen(e, t) {
      let r = St(e, t);
      (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
    }
    _handleFullNameStackForTagClose(e, t) {
      let r = St(e, t);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
    }
  };
function _(e) {
  return !jr(e) || e === 0;
}
function _n(e) {
  return jr(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function dl(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function Dl(e) {
  return e === 59 || e === 0 || !hs(e);
}
function fl(e) {
  return e === 59 || e === 0 || !$r(e);
}
function ml(e) {
  return e !== 125;
}
function gl(e, t) {
  return Bn(e) === Bn(t);
}
function Bn(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function xn(e) {
  return $r(e) || Nu(e) || e === 95;
}
function Tn(e) {
  return e !== 59 && _(e);
}
function Cl(e) {
  let t = [],
    r;
  for (let n = 0; n < e.length; n++) {
    let u = e[n];
    (r && r.type === 5 && u.type === 5) || (r && r.type === 16 && u.type === 16)
      ? ((r.parts[0] += u.parts[0]), (r.sourceSpan.end = u.sourceSpan.end))
      : ((r = u), t.push(r));
  }
  return t;
}
var Qu = class Fr {
    constructor(t, r) {
      if (t instanceof Fr) {
        (this.file = t.file), (this.input = t.input), (this.end = t.end);
        let n = t.state;
        this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
      } else {
        if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
        (this.file = t),
          (this.input = t.content),
          (this.end = r.endPos),
          (this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol });
      }
    }
    clone() {
      return new Fr(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(t) {
      return this.state.offset - t.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(t, r) {
      t = t || this;
      let n = t;
      if (r) for (; this.diff(t) > 0 && r.indexOf(t.peek()) !== -1; ) n === t && (t = t.clone()), t.advance();
      let u = this.locationFromCursor(t),
        i = this.locationFromCursor(this),
        a = n !== t ? this.locationFromCursor(n) : u;
      return new b(u, i, a);
    }
    getChars(t) {
      return this.input.substring(t.state.offset, this.state.offset);
    }
    charAt(t) {
      return this.input.charCodeAt(t);
    }
    advanceState(t) {
      if (t.offset >= this.end) throw ((this.state = t), new Jr('Unexpected character "EOF"', this));
      let r = this.charAt(t.offset);
      r === 10 ? (t.line++, (t.column = 0)) : qu(r) || t.column++, t.offset++, this.updatePeek(t);
    }
    updatePeek(t) {
      t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
    }
    locationFromCursor(t) {
      return new fr(t.file, t.state.offset, t.state.line, t.state.column);
    }
  },
  Fl = class vr extends Qu {
    constructor(t, r) {
      t instanceof vr ? (super(t), (this.internalState = { ...t.internalState })) : (super(t, r), (this.internalState = this.state));
    }
    advance() {
      (this.state = this.internalState), super.advance(), this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new vr(this);
    }
    getChars(t) {
      let r = t.clone(),
        n = "";
      for (; r.internalState.offset < this.internalState.offset; ) (n += String.fromCodePoint(r.peek())), r.advance();
      return n;
    }
    processEscapeSequence() {
      let t = () => this.internalState.peek;
      if (t() === 92)
        if (((this.internalState = { ...this.state }), this.advanceState(this.internalState), t() === 110)) this.state.peek = 10;
        else if (t() === 114) this.state.peek = 13;
        else if (t() === 118) this.state.peek = 11;
        else if (t() === 116) this.state.peek = 9;
        else if (t() === 98) this.state.peek = 8;
        else if (t() === 102) this.state.peek = 12;
        else if (t() === 117)
          if ((this.advanceState(this.internalState), t() === 123)) {
            this.advanceState(this.internalState);
            let r = this.clone(),
              n = 0;
            for (; t() !== 125; ) this.advanceState(this.internalState), n++;
            this.state.peek = this.decodeHexDigits(r, n);
          } else {
            let r = this.clone();
            this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              (this.state.peek = this.decodeHexDigits(r, 4));
          }
        else if (t() === 120) {
          this.advanceState(this.internalState);
          let r = this.clone();
          this.advanceState(this.internalState), (this.state.peek = this.decodeHexDigits(r, 2));
        } else if (dn(t())) {
          let r = "",
            n = 0,
            u = this.clone();
          for (; dn(t()) && n < 3; ) (u = this.clone()), (r += String.fromCodePoint(t())), this.advanceState(this.internalState), n++;
          (this.state.peek = parseInt(r, 8)), (this.internalState = u.internalState);
        } else
          qu(this.internalState.peek)
            ? (this.advanceState(this.internalState), (this.state = this.internalState))
            : (this.state.peek = this.internalState.peek);
    }
    decodeHexDigits(t, r) {
      let n = this.input.slice(t.internalState.offset, t.internalState.offset + r),
        u = parseInt(n, 16);
      if (isNaN(u)) throw ((t.state = t.internalState), new Jr("Invalid hexadecimal escape sequence", t));
      return u;
    }
  },
  Jr = class {
    constructor(e, t) {
      (this.msg = e), (this.cursor = t);
    }
  },
  R = class Zu extends Ou {
    static create(t, r, n) {
      return new Zu(t, r, n);
    }
    constructor(t, r, n) {
      super(r, n), (this.elementName = t);
    }
  },
  vl = class {
    constructor(e, t) {
      (this.rootNodes = e), (this.errors = t);
    }
  },
  yl = class {
    constructor(e) {
      this.getTagDefinition = e;
    }
    parse(e, t, r, n = !1, u) {
      let i =
          (h) =>
          (d, ...m) =>
            h(d.toLowerCase(), ...m),
        a = n ? this.getTagDefinition : i(this.getTagDefinition),
        s = (h) => a(h).getContentType(),
        o = n ? u : i(u),
        l = ll(
          e,
          t,
          u
            ? (h, d, m, g) => {
                let F = o(h, d, m, g);
                return F !== void 0 ? F : s(h);
              }
            : s,
          r
        ),
        c = (r && r.canSelfClose) || !1,
        D = (r && r.allowHtmComponentClosingTags) || !1,
        p = new El(l.tokens, a, c, D, n);
      return p.build(), new vl(p.rootNodes, l.errors.concat(p.errors));
    }
  },
  El = class ei {
    constructor(t, r, n, u, i) {
      (this.tokens = t),
        (this.getTagDefinition = r),
        (this.canSelfClose = n),
        (this.allowHtmComponentClosingTags = u),
        (this.isTagNameCaseSensitive = i),
        (this._index = -1),
        (this._containerStack = []),
        (this.rootNodes = []),
        (this.errors = []),
        this._advance();
    }
    build() {
      for (; this._peek.type !== 30; )
        this._peek.type === 0 || this._peek.type === 4
          ? this._consumeStartTag(this._advance())
          : this._peek.type === 3
          ? (this._closeVoidElement(), this._consumeEndTag(this._advance()))
          : this._peek.type === 12
          ? (this._closeVoidElement(), this._consumeCdata(this._advance()))
          : this._peek.type === 10
          ? (this._closeVoidElement(), this._consumeComment(this._advance()))
          : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6
          ? (this._closeVoidElement(), this._consumeText(this._advance()))
          : this._peek.type === 20
          ? this._consumeExpansion(this._advance())
          : this._peek.type === 25
          ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance()))
          : this._peek.type === 27
          ? (this._closeVoidElement(), this._consumeBlockClose(this._advance()))
          : this._peek.type === 29
          ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance()))
          : this._peek.type === 18
          ? this._consumeDocType(this._advance())
          : this._advance();
      for (let t of this._containerStack) t instanceof Be && this.errors.push(R.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
    }
    _advance() {
      let t = this._peek;
      return this._index < this.tokens.length - 1 && this._index++, (this._peek = this.tokens[this._index]), t;
    }
    _advanceIf(t) {
      return this._peek.type === t ? this._advance() : null;
    }
    _consumeCdata(t) {
      let r = this._advance(),
        n = this._getText(r),
        u = this._advanceIf(13);
      this._addToParent(new Xo(n, new b(t.sourceSpan.start, (u || r).sourceSpan.end), [r]));
    }
    _consumeComment(t) {
      let r = this._advanceIf(7),
        n = this._advanceIf(11),
        u = r != null ? r.parts[0].trim() : null,
        i = new b(t.sourceSpan.start, (n || r || t).sourceSpan.end);
      this._addToParent(new tl(u, i));
    }
    _consumeDocType(t) {
      let r = this._advanceIf(7),
        n = this._advanceIf(19),
        u = r != null ? r.parts[0].trim() : null,
        i = new b(t.sourceSpan.start, (n || r || t).sourceSpan.end);
      this._addToParent(new rl(u, i));
    }
    _consumeExpansion(t) {
      let r = this._advance(),
        n = this._advance(),
        u = [];
      for (; this._peek.type === 21; ) {
        let a = this._parseExpansionCase();
        if (!a) return;
        u.push(a);
      }
      if (this._peek.type !== 24) {
        this.errors.push(R.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
      }
      let i = new b(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
      this._addToParent(new Qo(r.parts[0], n.parts[0], u, i, r.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
      let t = this._advance();
      if (this._peek.type !== 22) return this.errors.push(R.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
      let r = this._advance(),
        n = this._collectExpansionExpTokens(r);
      if (!n) return null;
      let u = this._advance();
      n.push({ type: 30, parts: [], sourceSpan: u.sourceSpan });
      let i = new ei(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if ((i.build(), i.errors.length > 0)) return (this.errors = this.errors.concat(i.errors)), null;
      let a = new b(t.sourceSpan.start, u.sourceSpan.end, t.sourceSpan.fullStart),
        s = new b(r.sourceSpan.start, u.sourceSpan.end, r.sourceSpan.fullStart);
      return new Zo(t.parts[0], i.rootNodes, a, t.sourceSpan, s);
    }
    _collectExpansionExpTokens(t) {
      let r = [],
        n = [22];
      for (;;) {
        if (((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23))
          if (Ln(n, 22)) {
            if ((n.pop(), n.length === 0)) return r;
          } else return this.errors.push(R.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 24)
          if (Ln(n, 20)) n.pop();
          else return this.errors.push(R.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 30) return this.errors.push(R.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        r.push(this._advance());
      }
    }
    _getText(t) {
      let r = t.parts[0];
      if (
        r.length > 0 &&
        r[0] ==
          `
`
      ) {
        let n = this._getClosestParentElement();
        n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
      }
      return r;
    }
    _consumeText(t) {
      let r = [t],
        n = t.sourceSpan,
        u = t.parts[0];
      if (
        u.length > 0 &&
        u[0] ===
          `
`
      ) {
        let i = this._getContainer();
        i != null &&
          i.children.length === 0 &&
          this.getTagDefinition(i.name).ignoreFirstLf &&
          ((u = u.substring(1)), (r[0] = { type: t.type, sourceSpan: t.sourceSpan, parts: [u] }));
      }
      for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; )
        (t = this._advance()),
          r.push(t),
          t.type === 8 ? (u += t.parts.join("").replace(/&([^;]+);/g, Nn)) : t.type === 9 ? (u += t.parts[0]) : (u += t.parts.join(""));
      if (u.length > 0) {
        let i = t.sourceSpan;
        this._addToParent(new Yo(u, new b(n.start, i.end, n.fullStart, n.details), r));
      }
    }
    _closeVoidElement() {
      let t = this._getContainer();
      t instanceof oe && this.getTagDefinition(t.name).isVoid && this._containerStack.pop();
    }
    _consumeStartTag(t) {
      let [r, n] = t.parts,
        u = [];
      for (; this._peek.type === 14; ) u.push(this._consumeAttr(this._advance()));
      let i = this._getElementFullName(r, n, this._getClosestParentElement()),
        a = !1;
      if (this._peek.type === 2) {
        this._advance(), (a = !0);
        let h = this.getTagDefinition(i);
        this.canSelfClose ||
          h.canSelfClose ||
          gt(i) !== null ||
          h.isVoid ||
          this.errors.push(R.create(i, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
      } else this._peek.type === 1 && (this._advance(), (a = !1));
      let s = this._peek.sourceSpan.fullStart,
        o = new b(t.sourceSpan.start, s, t.sourceSpan.fullStart),
        l = new b(t.sourceSpan.start, s, t.sourceSpan.fullStart),
        c = new b(t.sourceSpan.start.moveBy(1), t.sourceSpan.end),
        D = new oe(i, u, [], o, l, void 0, c),
        p = this._getContainer();
      this._pushContainer(D, p instanceof oe && this.getTagDefinition(p.name).isClosedByChild(D.name)),
        a
          ? this._popContainer(i, oe, o)
          : t.type === 4 && (this._popContainer(i, oe, null), this.errors.push(R.create(i, o, `Opening tag "${i}" not terminated.`)));
    }
    _pushContainer(t, r) {
      r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
    }
    _consumeEndTag(t) {
      let r =
        this.allowHtmComponentClosingTags && t.parts.length === 0
          ? null
          : this._getElementFullName(t.parts[0], t.parts[1], this._getClosestParentElement());
      if (r && this.getTagDefinition(r).isVoid)
        this.errors.push(R.create(r, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
      else if (!this._popContainer(r, oe, t.sourceSpan)) {
        let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(R.create(r, t.sourceSpan, n));
      }
    }
    _popContainer(t, r, n) {
      let u = !1;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (gt(a.name) ? a.name === t : (t == null || a.name.toLowerCase() === t.toLowerCase()) && a instanceof r)
          return (
            (a.endSourceSpan = n),
            (a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end),
            this._containerStack.splice(i, this._containerStack.length - i),
            !u
          );
        (a instanceof Be || (a instanceof oe && !this.getTagDefinition(a.name).closedByParent)) && (u = !0);
      }
      return !1;
    }
    _consumeAttr(t) {
      let r = St(t.parts[0], t.parts[1]),
        n = t.sourceSpan.end,
        u;
      this._peek.type === 15 && (u = this._advance());
      let i = "",
        a = [],
        s,
        o;
      if (this._peek.type === 16)
        for (
          s = this._peek.sourceSpan, o = this._peek.sourceSpan.end;
          this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9;

        ) {
          let c = this._advance();
          a.push(c),
            c.type === 17 ? (i += c.parts.join("").replace(/&([^;]+);/g, Nn)) : c.type === 9 ? (i += c.parts[0]) : (i += c.parts.join("")),
            (o = n = c.sourceSpan.end);
        }
      this._peek.type === 15 && (o = n = this._advance().sourceSpan.end);
      let l =
        s &&
        o &&
        new b((u == null ? void 0 : u.sourceSpan.start) ?? s.start, o, (u == null ? void 0 : u.sourceSpan.fullStart) ?? s.fullStart);
      return new el(r, i, new b(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
    }
    _consumeBlockOpen(t) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let s = this._advance();
        r.push(new An(s.parts[0], s.sourceSpan));
      }
      this._peek.type === 26 && this._advance();
      let n = this._peek.sourceSpan.fullStart,
        u = new b(t.sourceSpan.start, n, t.sourceSpan.fullStart),
        i = new b(t.sourceSpan.start, n, t.sourceSpan.fullStart),
        a = new Be(t.parts[0], r, [], u, i);
      this._pushContainer(a, !1);
    }
    _consumeBlockClose(t) {
      this._popContainer(null, Be, t.sourceSpan) ||
        this.errors.push(
          R.create(
            null,
            t.sourceSpan,
            'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'
          )
        );
    }
    _consumeIncompleteBlock(t) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let s = this._advance();
        r.push(new An(s.parts[0], s.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart,
        u = new b(t.sourceSpan.start, n, t.sourceSpan.fullStart),
        i = new b(t.sourceSpan.start, n, t.sourceSpan.fullStart),
        a = new Be(t.parts[0], r, [], u, i);
      this._pushContainer(a, !1),
        this._popContainer(null, Be, null),
        this.errors.push(
          R.create(
            t.parts[0],
            u,
            `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`
          )
        );
    }
    _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
    }
    _getClosestParentElement() {
      for (let t = this._containerStack.length - 1; t > -1; t--) if (this._containerStack[t] instanceof oe) return this._containerStack[t];
      return null;
    }
    _addToParent(t) {
      let r = this._getContainer();
      r === null ? this.rootNodes.push(t) : r.children.push(t);
    }
    _getElementFullName(t, r, n) {
      if (t === "" && ((t = this.getTagDefinition(r).implicitNamespacePrefix || ""), t === "" && n != null)) {
        let u = Vt(n.name)[1];
        this.getTagDefinition(u).preventNamespaceInheritance || (t = gt(n.name));
      }
      return St(t, r);
    }
  };
function Ln(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function Nn(e, t) {
  return At[t] !== void 0
    ? At[t] || e
    : /^#x[a-f0-9]+$/i.test(t)
    ? String.fromCodePoint(parseInt(t.slice(2), 16))
    : /^#\d+$/.test(t)
    ? String.fromCodePoint(parseInt(t.slice(1), 10))
    : e;
}
var bl = class extends yl {
    constructor() {
      super(Cr);
    }
    parse(e, t, r, n = !1, u) {
      return super.parse(e, t, r, n, u);
    }
  },
  sr = null,
  wl = () => (sr || (sr = new bl()), sr);
function qn(e, t = {}) {
  let {
    canSelfClose: r = !1,
    allowHtmComponentClosingTags: n = !1,
    isTagNameCaseSensitive: u = !1,
    getTagContentType: i,
    tokenizeAngularBlocks: a = !1,
  } = t;
  return wl().parse(
    e,
    "angular-html-parser",
    { tokenizeExpansionForms: !1, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a },
    u,
    i
  );
}
var Sl = new RegExp(
  "^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)",
  "s"
);
function Al(e) {
  let t = e.match(Sl);
  if (!t) return { content: e };
  let { startDelimiter: r, language: n, value: u = "", endDelimiter: i } = t.groups,
    a = n.trim() || "yaml";
  if ((r === "+++" && (a = "toml"), a !== "yaml" && r !== i)) return { content: e };
  let [s] = t;
  return {
    frontMatter: { type: "front-matter", lang: a, value: u, startDelimiter: r, endDelimiter: i, raw: s.replace(/\n$/, "") },
    content: O(!1, s, /[^\n]/g, " ") + e.slice(s.length),
  };
}
var kl = Al;
function _l(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var Bl = _l,
  xl = new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "multicol",
    "nav",
    "nextid",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rb",
    "rbc",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp",
  ]),
  or = new Map([
    [
      "*",
      new Set([
        "accesskey",
        "autocapitalize",
        "autofocus",
        "class",
        "contenteditable",
        "dir",
        "draggable",
        "enterkeyhint",
        "hidden",
        "id",
        "inert",
        "inputmode",
        "is",
        "itemid",
        "itemprop",
        "itemref",
        "itemscope",
        "itemtype",
        "lang",
        "nonce",
        "popover",
        "slot",
        "spellcheck",
        "style",
        "tabindex",
        "title",
        "translate",
      ]),
    ],
    [
      "a",
      new Set([
        "charset",
        "coords",
        "download",
        "href",
        "hreflang",
        "name",
        "ping",
        "referrerpolicy",
        "rel",
        "rev",
        "shape",
        "target",
        "type",
      ]),
    ],
    ["applet", new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])],
    [
      "area",
      new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"]),
    ],
    ["audio", new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])],
    ["base", new Set(["href", "target"])],
    ["basefont", new Set(["color", "face", "size"])],
    ["blockquote", new Set(["cite"])],
    ["body", new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])],
    ["br", new Set(["clear"])],
    [
      "button",
      new Set([
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "name",
        "popovertarget",
        "popovertargetaction",
        "type",
        "value",
      ]),
    ],
    ["canvas", new Set(["height", "width"])],
    ["caption", new Set(["align"])],
    ["col", new Set(["align", "char", "charoff", "span", "valign", "width"])],
    ["colgroup", new Set(["align", "char", "charoff", "span", "valign", "width"])],
    ["data", new Set(["value"])],
    ["del", new Set(["cite", "datetime"])],
    ["details", new Set(["name", "open"])],
    ["dialog", new Set(["open"])],
    ["dir", new Set(["compact"])],
    ["div", new Set(["align"])],
    ["dl", new Set(["compact"])],
    ["embed", new Set(["height", "src", "type", "width"])],
    ["fieldset", new Set(["disabled", "form", "name"])],
    ["font", new Set(["color", "face", "size"])],
    ["form", new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])],
    ["frame", new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])],
    ["frameset", new Set(["cols", "rows"])],
    ["h1", new Set(["align"])],
    ["h2", new Set(["align"])],
    ["h3", new Set(["align"])],
    ["h4", new Set(["align"])],
    ["h5", new Set(["align"])],
    ["h6", new Set(["align"])],
    ["head", new Set(["profile"])],
    ["hr", new Set(["align", "noshade", "size", "width"])],
    ["html", new Set(["manifest", "version"])],
    [
      "iframe",
      new Set([
        "align",
        "allow",
        "allowfullscreen",
        "allowpaymentrequest",
        "allowusermedia",
        "frameborder",
        "height",
        "loading",
        "longdesc",
        "marginheight",
        "marginwidth",
        "name",
        "referrerpolicy",
        "sandbox",
        "scrolling",
        "src",
        "srcdoc",
        "width",
      ]),
    ],
    [
      "img",
      new Set([
        "align",
        "alt",
        "border",
        "crossorigin",
        "decoding",
        "fetchpriority",
        "height",
        "hspace",
        "ismap",
        "loading",
        "longdesc",
        "name",
        "referrerpolicy",
        "sizes",
        "src",
        "srcset",
        "usemap",
        "vspace",
        "width",
      ]),
    ],
    [
      "input",
      new Set([
        "accept",
        "align",
        "alt",
        "autocomplete",
        "checked",
        "dirname",
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "height",
        "ismap",
        "list",
        "max",
        "maxlength",
        "min",
        "minlength",
        "multiple",
        "name",
        "pattern",
        "placeholder",
        "popovertarget",
        "popovertargetaction",
        "readonly",
        "required",
        "size",
        "src",
        "step",
        "type",
        "usemap",
        "value",
        "width",
      ]),
    ],
    ["ins", new Set(["cite", "datetime"])],
    ["isindex", new Set(["prompt"])],
    ["label", new Set(["for", "form"])],
    ["legend", new Set(["align"])],
    ["li", new Set(["type", "value"])],
    [
      "link",
      new Set([
        "as",
        "blocking",
        "charset",
        "color",
        "crossorigin",
        "disabled",
        "fetchpriority",
        "href",
        "hreflang",
        "imagesizes",
        "imagesrcset",
        "integrity",
        "media",
        "referrerpolicy",
        "rel",
        "rev",
        "sizes",
        "target",
        "type",
      ]),
    ],
    ["map", new Set(["name"])],
    ["menu", new Set(["compact"])],
    ["meta", new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])],
    ["meter", new Set(["high", "low", "max", "min", "optimum", "value"])],
    [
      "object",
      new Set([
        "align",
        "archive",
        "border",
        "classid",
        "codebase",
        "codetype",
        "data",
        "declare",
        "form",
        "height",
        "hspace",
        "name",
        "standby",
        "type",
        "typemustmatch",
        "usemap",
        "vspace",
        "width",
      ]),
    ],
    ["ol", new Set(["compact", "reversed", "start", "type"])],
    ["optgroup", new Set(["disabled", "label"])],
    ["option", new Set(["disabled", "label", "selected", "value"])],
    ["output", new Set(["for", "form", "name"])],
    ["p", new Set(["align"])],
    ["param", new Set(["name", "type", "value", "valuetype"])],
    ["pre", new Set(["width"])],
    ["progress", new Set(["max", "value"])],
    ["q", new Set(["cite"])],
    [
      "script",
      new Set([
        "async",
        "blocking",
        "charset",
        "crossorigin",
        "defer",
        "fetchpriority",
        "integrity",
        "language",
        "nomodule",
        "referrerpolicy",
        "src",
        "type",
      ]),
    ],
    ["select", new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])],
    ["slot", new Set(["name"])],
    ["source", new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])],
    ["style", new Set(["blocking", "media", "type"])],
    ["table", new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])],
    ["tbody", new Set(["align", "char", "charoff", "valign"])],
    [
      "td",
      new Set([
        "abbr",
        "align",
        "axis",
        "bgcolor",
        "char",
        "charoff",
        "colspan",
        "headers",
        "height",
        "nowrap",
        "rowspan",
        "scope",
        "valign",
        "width",
      ]),
    ],
    ["template", new Set(["shadowrootdelegatesfocus", "shadowrootmode"])],
    [
      "textarea",
      new Set([
        "autocomplete",
        "cols",
        "dirname",
        "disabled",
        "form",
        "maxlength",
        "minlength",
        "name",
        "placeholder",
        "readonly",
        "required",
        "rows",
        "wrap",
      ]),
    ],
    ["tfoot", new Set(["align", "char", "charoff", "valign"])],
    [
      "th",
      new Set([
        "abbr",
        "align",
        "axis",
        "bgcolor",
        "char",
        "charoff",
        "colspan",
        "headers",
        "height",
        "nowrap",
        "rowspan",
        "scope",
        "valign",
        "width",
      ]),
    ],
    ["thead", new Set(["align", "char", "charoff", "valign"])],
    ["time", new Set(["datetime"])],
    ["tr", new Set(["align", "bgcolor", "char", "charoff", "valign"])],
    ["track", new Set(["default", "kind", "label", "src", "srclang"])],
    ["ul", new Set(["compact", "type"])],
    [
      "video",
      new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"]),
    ],
  ]),
  dt = { attrs: !0, children: !0 },
  Pn = new Set(["parent"]),
  Tl = class Ue {
    constructor(t = {}) {
      for (let r of new Set([...Pn, ...Object.keys(t)])) this.setProperty(r, t[r]);
    }
    setProperty(t, r) {
      if (this[t] !== r) {
        if ((t in dt && (r = r.map((n) => this.createChild(n))), !Pn.has(t))) {
          this[t] = r;
          return;
        }
        Object.defineProperty(this, t, { value: r, enumerable: !1, configurable: !0 });
      }
    }
    map(t) {
      let r;
      for (let n in dt) {
        let u = this[n];
        if (u) {
          let i = Ll(u, (a) => a.map(t));
          r !== u && (r || (r = new Ue({ parent: this.parent })), r.setProperty(n, i));
        }
      }
      if (r) for (let n in this) n in dt || (r[n] = this[n]);
      return t(r || this);
    }
    walk(t) {
      for (let r in dt) {
        let n = this[r];
        if (n) for (let u = 0; u < n.length; u++) n[u].walk(t);
      }
      t(this);
    }
    createChild(t) {
      let r = t instanceof Ue ? t.clone() : new Ue(t);
      return r.setProperty("parent", this), r;
    }
    insertChildBefore(t, r) {
      this.children.splice(this.children.indexOf(t), 0, this.createChild(r));
    }
    removeChild(t) {
      this.children.splice(this.children.indexOf(t), 1);
    }
    replaceChild(t, r) {
      this.children[this.children.indexOf(t)] = this.createChild(r);
    }
    clone() {
      return new Ue(this);
    }
    get firstChild() {
      var t;
      return (t = this.children) == null ? void 0 : t[0];
    }
    get lastChild() {
      var t;
      return (t = this.children) == null ? void 0 : t[this.children.length - 1];
    }
    get prev() {
      var t;
      return (t = this.parent) == null ? void 0 : t.children[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var t;
      return (t = this.parent) == null ? void 0 : t.children[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((t) => [t.fullName, t.value]));
    }
  };
function Ll(e, t) {
  let r = e.map(t);
  return r.some((n, u) => n !== e[u]) ? r : e;
}
var Nl = [
  { regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: Pl },
  { regex: /^\[if([^\]]*)]><!$/, parse: Il },
  { regex: /^<!\s*\[endif]$/, parse: Ol },
];
function ql(e, t) {
  if (e.value)
    for (let { regex: r, parse: n } of Nl) {
      let u = e.value.match(r);
      if (u) return n(e, t, u);
    }
  return null;
}
function Pl(e, t, r) {
  let [, n, u, i] = r,
    a = 4 + n.length,
    s = e.sourceSpan.start.moveBy(a),
    o = s.moveBy(i.length),
    [l, c] = (() => {
      try {
        return [!0, t(i, s).children];
      } catch {
        return [!1, [{ type: "text", value: i, sourceSpan: new b(s, o) }]];
      }
    })();
  return {
    type: "ieConditionalComment",
    complete: l,
    children: c,
    condition: O(!1, u.trim(), /\s+/g, " "),
    sourceSpan: e.sourceSpan,
    startSourceSpan: new b(e.sourceSpan.start, s),
    endSourceSpan: new b(o, e.sourceSpan.end),
  };
}
function Il(e, t, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: O(!1, n.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan };
}
function Ol(e) {
  return { type: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
function Ml(e) {
  if (e.type === "block") {
    if (((e.name = O(!1, e.name.toLowerCase(), /\s+/g, " ").trim()), (e.type = "angularControlFlowBlock"), !Hu(e.parameters))) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters) t.type = "angularControlFlowBlockParameter";
    e.parameters = {
      type: "angularControlFlowBlockParameters",
      children: e.parameters,
      sourceSpan: new b(e.parameters[0].sourceSpan.start, Pt(!1, e.parameters, -1).sourceSpan.end),
    };
  }
}
function ti(e, t, r) {
  let {
      name: n,
      canSelfClose: u = !0,
      normalizeTagName: i = !1,
      normalizeAttributeName: a = !1,
      allowHtmComponentClosingTags: s = !1,
      isTagNameCaseSensitive: o = !1,
      shouldParseAsRawText: l,
    } = t,
    { rootNodes: c, errors: D } = qn(e, {
      canSelfClose: u,
      allowHtmComponentClosingTags: s,
      isTagNameCaseSensitive: o,
      getTagContentType: l ? (...f) => (l(...f) ? z.RAW_TEXT : void 0) : void 0,
      tokenizeAngularBlocks: n === "angular" ? !0 : void 0,
    });
  if (n === "vue") {
    if (c.some((v) => (v.type === "docType" && v.value === "html") || (v.type === "element" && v.name.toLowerCase() === "html")))
      return ti(e, ni, r);
    let f,
      C = () => f ?? (f = qn(e, { canSelfClose: u, allowHtmComponentClosingTags: s, isTagNameCaseSensitive: o })),
      y = (v) => C().rootNodes.find(({ startSourceSpan: w }) => w && w.start.offset === v.startSourceSpan.start.offset) ?? v;
    for (let [v, w] of c.entries()) {
      let { endSourceSpan: S, startSourceSpan: x } = w;
      if (S === null) (D = C().errors), (c[v] = y(w));
      else if (Rl(w, r)) {
        let K = C().errors.find((W) => W.span.start.offset > x.start.offset && W.span.start.offset < S.end.offset);
        K && In(K), (c[v] = y(w));
      }
    }
  }
  D.length > 0 && In(D[0]);
  let p = (f) => {
      let C = f.name.startsWith(":") ? f.name.slice(1).split(":")[0] : null,
        y = f.nameSpan.toString(),
        v = C !== null && y.startsWith(`${C}:`),
        w = v ? y.slice(C.length + 1) : y;
      (f.name = w), (f.namespace = C), (f.hasExplicitNamespace = v);
    },
    h = (f) => {
      switch (f.type) {
        case "element":
          p(f);
          for (let C of f.attrs)
            p(C),
              C.valueSpan
                ? ((C.value = C.valueSpan.toString()), /["']/.test(C.value[0]) && (C.value = C.value.slice(1, -1)))
                : (C.value = null);
          break;
        case "comment":
          f.value = f.sourceSpan.toString().slice(4, -3);
          break;
        case "text":
          f.value = f.sourceSpan.toString();
          break;
      }
    },
    d = (f, C) => {
      let y = f.toLowerCase();
      return C(y) ? y : f;
    },
    m = (f) => {
      if (
        f.type === "element" &&
        (i && (!f.namespace || f.namespace === f.tagDefinition.implicitNamespacePrefix || Xe(f)) && (f.name = d(f.name, (C) => xl.has(C))),
        a)
      )
        for (let C of f.attrs) C.namespace || (C.name = d(C.name, (y) => or.has(f.name) && (or.get("*").has(y) || or.get(f.name).has(y))));
    },
    g = (f) => {
      f.sourceSpan && f.endSourceSpan && (f.sourceSpan = new b(f.sourceSpan.start, f.endSourceSpan.end));
    },
    F = (f) => {
      if (f.type === "element") {
        let C = Cr(o ? f.name : f.name.toLowerCase());
        !f.namespace || f.namespace === C.implicitNamespacePrefix || Xe(f) ? (f.tagDefinition = C) : (f.tagDefinition = Cr(""));
      }
    };
  return (
    Ju(
      new (class extends nl {
        visit(f) {
          h(f), F(f), m(f), g(f);
        }
      })(),
      c
    ),
    c
  );
}
function Rl(e, t) {
  var r;
  if (e.type !== "element" || e.name !== "template") return !1;
  let n = (r = e.attrs.find((u) => u.name === "lang")) == null ? void 0 : r.value;
  return !n || Ot(t, { language: n }) === "html";
}
function In(e) {
  let {
    msg: t,
    span: { start: r, end: n },
  } = e;
  throw Bl(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function ri(e, t, r = {}, n = !0) {
  let { frontMatter: u, content: i } = n ? kl(e) : { frontMatter: null, content: e },
    a = new Iu(e, r.filepath),
    s = new fr(a, 0, 0, 0),
    o = s.moveBy(e.length),
    l = { type: "root", sourceSpan: new b(s, o), children: ti(i, t, r) };
  if (u) {
    let p = new fr(a, 0, 0, 0),
      h = p.moveBy(u.raw.length);
    (u.sourceSpan = new b(p, h)), l.children.unshift(u);
  }
  let c = new Tl(l),
    D = (p, h) => {
      let { offset: d } = h,
        m = O(!1, e.slice(0, d), /[^\n\r]/g, " "),
        g = ri(m + p, t, r, !1);
      g.sourceSpan = new b(h, Pt(!1, g.children, -1).sourceSpan.end);
      let F = g.children[0];
      return (
        F.length === d
          ? g.children.shift()
          : ((F.sourceSpan = new b(F.sourceSpan.start.moveBy(d), F.sourceSpan.end)), (F.value = F.value.slice(d))),
        g
      );
    };
  return (
    c.walk((p) => {
      if (p.type === "comment") {
        let h = ql(p, D);
        h && p.parent.replaceChild(p, h);
      }
      Ml(p);
    }),
    c
  );
}
function Ut(e) {
  return { parse: (t, r) => ri(t, e, r), hasPragma: Bs, astFormat: "html", locStart: Rt, locEnd: Ht };
}
var ni = { name: "html", normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 },
  Hl = Ut(ni),
  jl = Ut({ name: "angular" }),
  $l = Ut({
    name: "vue",
    isTagNameCaseSensitive: !0,
    shouldParseAsRawText(e, t, r, n) {
      return (
        e.toLowerCase() !== "html" &&
        !r &&
        (e !== "template" || n.some(({ name: u, value: i }) => u === "lang" && i !== "html" && i !== "" && i !== void 0))
      );
    },
  }),
  Wl = Ut({ name: "lwc", canSelfClose: !1 }),
  Vl = [
    {
      linguistLanguageId: 146,
      name: "Angular",
      type: "markup",
      tmScope: "text.html.basic",
      aceMode: "html",
      codemirrorMode: "htmlmixed",
      codemirrorMimeType: "text/html",
      color: "#e34c26",
      aliases: ["xhtml"],
      extensions: [".component.html"],
      parsers: ["angular"],
      vscodeLanguageIds: ["html"],
      filenames: [],
    },
    {
      linguistLanguageId: 146,
      name: "HTML",
      type: "markup",
      tmScope: "text.html.basic",
      aceMode: "html",
      codemirrorMode: "htmlmixed",
      codemirrorMimeType: "text/html",
      color: "#e34c26",
      aliases: ["xhtml"],
      extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"],
      parsers: ["html"],
      vscodeLanguageIds: ["html"],
    },
    {
      linguistLanguageId: 146,
      name: "Lightning Web Components",
      type: "markup",
      tmScope: "text.html.basic",
      aceMode: "html",
      codemirrorMode: "htmlmixed",
      codemirrorMimeType: "text/html",
      color: "#e34c26",
      aliases: ["xhtml"],
      extensions: [],
      parsers: ["lwc"],
      vscodeLanguageIds: ["html"],
      filenames: [],
    },
    {
      linguistLanguageId: 391,
      name: "Vue",
      type: "markup",
      color: "#41b883",
      extensions: [".vue"],
      tmScope: "text.html.vue",
      aceMode: "html",
      parsers: ["vue"],
      vscodeLanguageIds: ["vue"],
    },
  ],
  On = {
    bracketSpacing: {
      category: "Common",
      type: "boolean",
      default: !0,
      description: "Print spaces between brackets.",
      oppositeDescription: "Do not print spaces between brackets.",
    },
    singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." },
    proseWrap: {
      category: "Common",
      type: "choice",
      default: "preserve",
      description: "How to wrap prose.",
      choices: [
        { value: "always", description: "Wrap prose if it exceeds the print width." },
        { value: "never", description: "Do not wrap prose." },
        { value: "preserve", description: "Wrap prose as-is." },
      ],
    },
    bracketSameLine: {
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Put > of opening tags on the last line instead of on a new line.",
    },
    singleAttributePerLine: {
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Enforce single attribute per line in HTML, Vue and JSX.",
    },
  },
  Mn = "HTML",
  Ul = {
    bracketSameLine: On.bracketSameLine,
    htmlWhitespaceSensitivity: {
      category: Mn,
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [
        { value: "css", description: "Respect the default value of CSS display property." },
        { value: "strict", description: "Whitespaces are considered sensitive." },
        { value: "ignore", description: "Whitespaces are considered insensitive." },
      ],
    },
    singleAttributePerLine: On.singleAttributePerLine,
    vueIndentScriptAndStyle: { category: Mn, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." },
  },
  zl = Ul,
  Gl = { html: Ho },
  Kl = du,
  Jl = Object.create,
  zt = Object.defineProperty,
  Yl = Object.getOwnPropertyDescriptor,
  Xl = Object.getOwnPropertyNames,
  Ql = Object.getPrototypeOf,
  Zl = Object.prototype.hasOwnProperty,
  ec = (e, t) => () => (e && (t = e((e = 0))), t),
  Gt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Kt = (e, t) => {
    for (var r in t) zt(e, r, { get: t[r], enumerable: !0 });
  },
  ui = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let u of Xl(t)) !Zl.call(e, u) && u !== r && zt(e, u, { get: () => t[u], enumerable: !(n = Yl(t, u)) || n.enumerable });
    return e;
  },
  it = (e, t, r) => (
    (r = e != null ? Jl(Ql(e)) : {}), ui(t || !e || !e.__esModule ? zt(r, "default", { value: e, enumerable: !0 }) : r, e)
  ),
  tc = (e) => ui(zt({}, "__esModule", { value: !0 }), e),
  rc = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  Rn = (e, t, r) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Ve = (e, t, r) => (rc(e, t, "access private method"), r),
  nc = Gt((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = t);
    function t() {}
    t.prototype = {
      diff: function (u, i) {
        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          s = a.callback;
        typeof a == "function" && ((s = a), (a = {})), (this.options = a);
        var o = this;
        function l(f) {
          return s
            ? (setTimeout(function () {
                s(void 0, f);
              }, 0),
              !0)
            : f;
        }
        (u = this.castInput(u)),
          (i = this.castInput(i)),
          (u = this.removeEmpty(this.tokenize(u))),
          (i = this.removeEmpty(this.tokenize(i)));
        var c = i.length,
          D = u.length,
          p = 1,
          h = c + D;
        a.maxEditLength && (h = Math.min(h, a.maxEditLength));
        var d = [{ newPos: -1, components: [] }],
          m = this.extractCommon(d[0], i, u, 0);
        if (d[0].newPos + 1 >= c && m + 1 >= D) return l([{ value: this.join(i), count: i.length }]);
        function g() {
          for (var f = -1 * p; f <= p; f += 2) {
            var C = void 0,
              y = d[f - 1],
              v = d[f + 1],
              w = (v ? v.newPos : 0) - f;
            y && (d[f - 1] = void 0);
            var S = y && y.newPos + 1 < c,
              x = v && 0 <= w && w < D;
            if (!S && !x) {
              d[f] = void 0;
              continue;
            }
            if (
              (!S || (x && y.newPos < v.newPos)
                ? ((C = n(v)), o.pushComponent(C.components, void 0, !0))
                : ((C = y), C.newPos++, o.pushComponent(C.components, !0, void 0)),
              (w = o.extractCommon(C, i, u, f)),
              C.newPos + 1 >= c && w + 1 >= D)
            )
              return l(r(o, C.components, i, u, o.useLongestToken));
            d[f] = C;
          }
          p++;
        }
        if (s)
          (function f() {
            setTimeout(function () {
              if (p > h) return s();
              g() || f();
            }, 0);
          })();
        else
          for (; p <= h; ) {
            var F = g();
            if (F) return F;
          }
      },
      pushComponent: function (u, i, a) {
        var s = u[u.length - 1];
        s && s.added === i && s.removed === a
          ? (u[u.length - 1] = { count: s.count + 1, added: i, removed: a })
          : u.push({ count: 1, added: i, removed: a });
      },
      extractCommon: function (u, i, a, s) {
        for (var o = i.length, l = a.length, c = u.newPos, D = c - s, p = 0; c + 1 < o && D + 1 < l && this.equals(i[c + 1], a[D + 1]); )
          c++, D++, p++;
        return p && u.components.push({ count: p }), (u.newPos = c), D;
      },
      equals: function (u, i) {
        return this.options.comparator
          ? this.options.comparator(u, i)
          : u === i || (this.options.ignoreCase && u.toLowerCase() === i.toLowerCase());
      },
      removeEmpty: function (u) {
        for (var i = [], a = 0; a < u.length; a++) u[a] && i.push(u[a]);
        return i;
      },
      castInput: function (u) {
        return u;
      },
      tokenize: function (u) {
        return u.split("");
      },
      join: function (u) {
        return u.join("");
      },
    };
    function r(u, i, a, s, o) {
      for (var l = 0, c = i.length, D = 0, p = 0; l < c; l++) {
        var h = i[l];
        if (h.removed) {
          if (((h.value = u.join(s.slice(p, p + h.count))), (p += h.count), l && i[l - 1].added)) {
            var d = i[l - 1];
            (i[l - 1] = i[l]), (i[l] = d);
          }
        } else {
          if (!h.added && o) {
            var m = a.slice(D, D + h.count);
            (m = m.map(function (F, f) {
              var C = s[p + f];
              return C.length > F.length ? C : F;
            })),
              (h.value = u.join(m));
          } else h.value = u.join(a.slice(D, D + h.count));
          (D += h.count), h.added || (p += h.count);
        }
      }
      var g = i[c - 1];
      return (
        c > 1 && typeof g.value == "string" && (g.added || g.removed) && u.equals("", g.value) && ((i[c - 2].value += g.value), i.pop()), i
      );
    }
    function n(u) {
      return { newPos: u.newPos, components: u.components.slice(0) };
    }
  }),
  uc = Gt((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.diffArrays = u), (e.arrayDiff = void 0);
    var t = r(nc());
    function r(i) {
      return i && i.__esModule ? i : { default: i };
    }
    var n = new t.default();
    (e.arrayDiff = n),
      (n.tokenize = function (i) {
        return i.slice();
      }),
      (n.join = n.removeEmpty =
        function (i) {
          return i;
        });
    function u(i, a, s) {
      return n.diff(i, a, s);
    }
  }),
  Jt = Gt((e, t) => {
    var r = new Proxy(String, { get: () => r });
    t.exports = r;
  }),
  ii = {};
Kt(ii, { default: () => si, shouldHighlight: () => ai });
var ai,
  si,
  ic = ec(() => {
    (ai = () => !1), (si = String);
  }),
  ac = Gt((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.codeFrameColumns = D), (e.default = p);
    var t = (ic(), tc(ii)),
      r = u(Jt(), !0);
    function n(h) {
      if (typeof WeakMap != "function") return null;
      var d = new WeakMap(),
        m = new WeakMap();
      return (n = function (g) {
        return g ? m : d;
      })(h);
    }
    function u(h, d) {
      if (!d && h && h.__esModule) return h;
      if (h === null || (typeof h != "object" && typeof h != "function")) return { default: h };
      var m = n(d);
      if (m && m.has(h)) return m.get(h);
      var g = { __proto__: null },
        F = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var f in h)
        if (f !== "default" && Object.prototype.hasOwnProperty.call(h, f)) {
          var C = F ? Object.getOwnPropertyDescriptor(h, f) : null;
          C && (C.get || C.set) ? Object.defineProperty(g, f, C) : (g[f] = h[f]);
        }
      return (g.default = h), m && m.set(h, g), g;
    }
    var i;
    function a(h) {
      return h ? (i != null || (i = new r.default.constructor({ enabled: !0, level: 1 })), i) : r.default;
    }
    var s = !1;
    function o(h) {
      return { gutter: h.grey, marker: h.red.bold, message: h.red.bold };
    }
    var l = /\r\n|[\n\r\u2028\u2029]/;
    function c(h, d, m) {
      let g = Object.assign({ column: 0, line: -1 }, h.start),
        F = Object.assign({}, g, h.end),
        { linesAbove: f = 2, linesBelow: C = 3 } = m || {},
        y = g.line,
        v = g.column,
        w = F.line,
        S = F.column,
        x = Math.max(y - (f + 1), 0),
        K = Math.min(d.length, w + C);
      y === -1 && (x = 0), w === -1 && (K = d.length);
      let W = w - y,
        T = {};
      if (W)
        for (let V = 0; V <= W; V++) {
          let J = V + y;
          if (!v) T[J] = !0;
          else if (V === 0) {
            let fe = d[J - 1].length;
            T[J] = [v, fe - v + 1];
          } else if (V === W) T[J] = [0, S];
          else {
            let fe = d[J - V].length;
            T[J] = [0, fe];
          }
        }
      else v === S ? (v ? (T[y] = [v, 0]) : (T[y] = !0)) : (T[y] = [v, S - v]);
      return { start: x, end: K, markerLines: T };
    }
    function D(h, d, m = {}) {
      let g = (m.highlightCode || m.forceColor) && (0, t.shouldHighlight)(m),
        F = a(m.forceColor),
        f = o(F),
        C = (T, V) => (g ? T(V) : V),
        y = h.split(l),
        { start: v, end: w, markerLines: S } = c(d, y, m),
        x = d.start && typeof d.start.column == "number",
        K = String(w).length,
        W = (g ? (0, t.default)(h, m) : h)
          .split(l, w)
          .slice(v, w)
          .map((T, V) => {
            let J = v + 1 + V,
              fe = ` ${` ${J}`.slice(-K)} |`,
              ot = S[J],
              Ji = !S[J + 1];
            if (ot) {
              let rr = "";
              if (Array.isArray(ot)) {
                let Yi = T.slice(0, Math.max(ot[0] - 1, 0)).replace(/[^\t]/g, " "),
                  Xi = ot[1] || 1;
                (rr = [
                  `
 `,
                  C(f.gutter, fe.replace(/\d/g, " ")),
                  " ",
                  Yi,
                  C(f.marker, "^").repeat(Xi),
                ].join("")),
                  Ji && m.message && (rr += " " + C(f.message, m.message));
              }
              return [C(f.marker, ">"), C(f.gutter, fe), T.length > 0 ? ` ${T}` : "", rr].join("");
            } else return ` ${C(f.gutter, fe)}${T.length > 0 ? ` ${T}` : ""}`;
          }).join(`
`);
      return (
        m.message &&
          !x &&
          (W = `${" ".repeat(K + 1)}${m.message}
${W}`),
        g ? F.reset(W) : W
      );
    }
    function p(h, d, m, g = {}) {
      if (!s) {
        s = !0;
        let F = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        {
          let f = new Error(F);
          (f.name = "DeprecationWarning"), console.warn(new Error(F));
        }
      }
      return (m = Math.max(m, 0)), D(h, { start: { column: m, line: d } }, g);
    }
  }),
  oi = {};
Kt(oi, {
  __debug: () => rh,
  check: () => eh,
  doc: () => zi,
  format: () => Ki,
  formatWithCursor: () => Gi,
  getSupportInfo: () => th,
  util: () => Ui,
  version: () => Z2,
});
var sc = (e, t, r, n) => {
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  },
  Yt = sc,
  oc = it(uc(), 1),
  Se = "string",
  pe = "array",
  Ae = "cursor",
  te = "indent",
  re = "align",
  ne = "trim",
  P = "group",
  j = "fill",
  M = "if-break",
  ue = "indent-if-break",
  ie = "line-suffix",
  ae = "line-suffix-boundary",
  B = "line",
  Q = "label",
  $ = "break-parent",
  li = new Set([Ae, te, re, ne, P, j, M, ue, ie, ae, B, Q, $]);
function lc(e) {
  if (typeof e == "string") return Se;
  if (Array.isArray(e)) return pe;
  if (!e) return;
  let { type: t } = e;
  if (li.has(t)) return t;
}
var ke = lc,
  cc = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function pc(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object")
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (ke(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = cc([...li].map((u) => `'${u}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var hc = class extends Error {
    constructor(t) {
      super(pc(t));
      _e(this, "name", "InvalidDocError");
      this.doc = t;
    }
  },
  Ie = hc,
  Hn = {};
function dc(e, t, r, n) {
  let u = [e];
  for (; u.length > 0; ) {
    let i = u.pop();
    if (i === Hn) {
      r(u.pop());
      continue;
    }
    r && u.push(i, Hn);
    let a = ke(i);
    if (!a) throw new Ie(i);
    if ((t == null ? void 0 : t(i)) !== !1)
      switch (a) {
        case pe:
        case j: {
          let s = a === pe ? i : i.parts;
          for (let o = s.length, l = o - 1; l >= 0; --l) u.push(s[l]);
          break;
        }
        case M:
          u.push(i.flatContents, i.breakContents);
          break;
        case P:
          if (n && i.expandedStates) for (let s = i.expandedStates.length, o = s - 1; o >= 0; --o) u.push(i.expandedStates[o]);
          else u.push(i.contents);
          break;
        case re:
        case te:
        case ue:
        case Q:
        case ie:
          u.push(i.contents);
          break;
        case Se:
        case Ae:
        case ne:
        case ae:
        case B:
        case $:
          break;
        default:
          throw new Ie(i);
      }
  }
}
var Yr = dc,
  Dc = () => {},
  fc = Dc;
function _t(e) {
  return { type: te, contents: e };
}
function Oe(e, t) {
  return { type: re, contents: t, n: e };
}
function ci(e, t = {}) {
  return fc(t.expandedStates), { type: P, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function mc(e) {
  return Oe(Number.NEGATIVE_INFINITY, e);
}
function gc(e) {
  return Oe({ type: "root" }, e);
}
function Cc(e) {
  return Oe(-1, e);
}
function Fc(e, t) {
  return ci(e[0], { ...t, expandedStates: e });
}
function pi(e) {
  return { type: j, parts: e };
}
function vc(e, t = "", r = {}) {
  return { type: M, breakContents: e, flatContents: t, groupId: r.groupId };
}
function yc(e, t) {
  return { type: ue, contents: e, groupId: t.groupId, negate: t.negate };
}
function yr(e) {
  return { type: ie, contents: e };
}
var Ec = { type: ae },
  Xt = { type: $ },
  bc = { type: ne },
  Xr = { type: B, hard: !0 },
  hi = { type: B, hard: !0, literal: !0 },
  di = { type: B },
  wc = { type: B, soft: !0 },
  Ce = [Xr, Xt],
  Di = [hi, Xt],
  Er = { type: Ae };
function fi(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function mi(e, t, r) {
  let n = e;
  if (t > 0) {
    for (let u = 0; u < Math.floor(t / r); ++u) n = _t(n);
    (n = Oe(t % r, n)), (n = Oe(Number.NEGATIVE_INFINITY, n));
  }
  return n;
}
function Sc(e, t) {
  return e ? { type: Q, label: e, contents: t } : t;
}
var Ac = (e, t, r) => {
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  },
  k = Ac;
function kc(e) {
  let t = e.indexOf("\r");
  return t >= 0
    ? e.charAt(t + 1) ===
      `
`
      ? "crlf"
      : "cr"
    : "lf";
}
function Qr(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function gi(e, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/g;
      break;
    case "\r":
      r = /\r/g;
      break;
    case `\r
`:
      r = /\r\n/g;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function _c(e) {
  return Yt(
    !1,
    e,
    /\r\n?/g,
    `
`
  );
}
var Bc = () =>
  /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function xc(e) {
  return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510);
}
function Tc(e) {
  return (
    (e >= 4352 && e <= 4447) ||
    e === 8986 ||
    e === 8987 ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9193 && e <= 9196) ||
    e === 9200 ||
    e === 9203 ||
    e === 9725 ||
    e === 9726 ||
    e === 9748 ||
    e === 9749 ||
    (e >= 9800 && e <= 9811) ||
    e === 9855 ||
    e === 9875 ||
    e === 9889 ||
    e === 9898 ||
    e === 9899 ||
    e === 9917 ||
    e === 9918 ||
    e === 9924 ||
    e === 9925 ||
    e === 9934 ||
    e === 9940 ||
    e === 9962 ||
    e === 9970 ||
    e === 9971 ||
    e === 9973 ||
    e === 9978 ||
    e === 9981 ||
    e === 9989 ||
    e === 9994 ||
    e === 9995 ||
    e === 10024 ||
    e === 10060 ||
    e === 10062 ||
    (e >= 10067 && e <= 10069) ||
    e === 10071 ||
    (e >= 10133 && e <= 10135) ||
    e === 10160 ||
    e === 10175 ||
    e === 11035 ||
    e === 11036 ||
    e === 11088 ||
    e === 11093 ||
    (e >= 11904 && e <= 11929) ||
    (e >= 11931 && e <= 12019) ||
    (e >= 12032 && e <= 12245) ||
    (e >= 12272 && e <= 12287) ||
    (e >= 12289 && e <= 12350) ||
    (e >= 12353 && e <= 12438) ||
    (e >= 12441 && e <= 12543) ||
    (e >= 12549 && e <= 12591) ||
    (e >= 12593 && e <= 12686) ||
    (e >= 12688 && e <= 12771) ||
    (e >= 12783 && e <= 12830) ||
    (e >= 12832 && e <= 12871) ||
    (e >= 12880 && e <= 19903) ||
    (e >= 19968 && e <= 42124) ||
    (e >= 42128 && e <= 42182) ||
    (e >= 43360 && e <= 43388) ||
    (e >= 44032 && e <= 55203) ||
    (e >= 63744 && e <= 64255) ||
    (e >= 65040 && e <= 65049) ||
    (e >= 65072 && e <= 65106) ||
    (e >= 65108 && e <= 65126) ||
    (e >= 65128 && e <= 65131) ||
    (e >= 94176 && e <= 94180) ||
    e === 94192 ||
    e === 94193 ||
    (e >= 94208 && e <= 100343) ||
    (e >= 100352 && e <= 101589) ||
    (e >= 101632 && e <= 101640) ||
    (e >= 110576 && e <= 110579) ||
    (e >= 110581 && e <= 110587) ||
    e === 110589 ||
    e === 110590 ||
    (e >= 110592 && e <= 110882) ||
    e === 110898 ||
    (e >= 110928 && e <= 110930) ||
    e === 110933 ||
    (e >= 110948 && e <= 110951) ||
    (e >= 110960 && e <= 111355) ||
    e === 126980 ||
    e === 127183 ||
    e === 127374 ||
    (e >= 127377 && e <= 127386) ||
    (e >= 127488 && e <= 127490) ||
    (e >= 127504 && e <= 127547) ||
    (e >= 127552 && e <= 127560) ||
    e === 127568 ||
    e === 127569 ||
    (e >= 127584 && e <= 127589) ||
    (e >= 127744 && e <= 127776) ||
    (e >= 127789 && e <= 127797) ||
    (e >= 127799 && e <= 127868) ||
    (e >= 127870 && e <= 127891) ||
    (e >= 127904 && e <= 127946) ||
    (e >= 127951 && e <= 127955) ||
    (e >= 127968 && e <= 127984) ||
    e === 127988 ||
    (e >= 127992 && e <= 128062) ||
    e === 128064 ||
    (e >= 128066 && e <= 128252) ||
    (e >= 128255 && e <= 128317) ||
    (e >= 128331 && e <= 128334) ||
    (e >= 128336 && e <= 128359) ||
    e === 128378 ||
    e === 128405 ||
    e === 128406 ||
    e === 128420 ||
    (e >= 128507 && e <= 128591) ||
    (e >= 128640 && e <= 128709) ||
    e === 128716 ||
    (e >= 128720 && e <= 128722) ||
    (e >= 128725 && e <= 128727) ||
    (e >= 128732 && e <= 128735) ||
    e === 128747 ||
    e === 128748 ||
    (e >= 128756 && e <= 128764) ||
    (e >= 128992 && e <= 129003) ||
    e === 129008 ||
    (e >= 129292 && e <= 129338) ||
    (e >= 129340 && e <= 129349) ||
    (e >= 129351 && e <= 129535) ||
    (e >= 129648 && e <= 129660) ||
    (e >= 129664 && e <= 129672) ||
    (e >= 129680 && e <= 129725) ||
    (e >= 129727 && e <= 129733) ||
    (e >= 129742 && e <= 129755) ||
    (e >= 129760 && e <= 129768) ||
    (e >= 129776 && e <= 129784) ||
    (e >= 131072 && e <= 196605) ||
    (e >= 196608 && e <= 262141)
  );
}
var Lc = (e) => !(xc(e) || Tc(e)),
  Nc = /[^\x20-\x7F]/;
function qc(e) {
  if (!e) return 0;
  if (!Nc.test(e)) return e.length;
  e = e.replace(Bc(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (t += Lc(n) ? 1 : 2);
  }
  return t;
}
var Zr = qc,
  Pc = (e) => {
    if (Array.isArray(e)) return e;
    if (e.type !== j) throw new Error(`Expect doc to be 'array' or '${j}'.`);
    return e.parts;
  };
function Qt(e, t) {
  if (typeof e == "string") return t(e);
  let r = new Map();
  return n(e);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = u(i);
    return r.set(i, a), a;
  }
  function u(i) {
    switch (ke(i)) {
      case pe:
        return t(i.map(n));
      case j:
        return t({ ...i, parts: i.parts.map(n) });
      case M:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case P: {
        let { expandedStates: a, contents: s } = i;
        return a ? ((a = a.map(n)), (s = a[0])) : (s = n(s)), t({ ...i, contents: s, expandedStates: a });
      }
      case re:
      case te:
      case ue:
      case Q:
      case ie:
        return t({ ...i, contents: n(i.contents) });
      case Se:
      case Ae:
      case ne:
      case ae:
      case B:
      case $:
        return t(i);
      default:
        throw new Ie(i);
    }
  }
}
function en(e, t, r) {
  let n = r,
    u = !1;
  function i(a) {
    if (u) return !1;
    let s = t(a);
    s !== void 0 && ((u = !0), (n = s));
  }
  return Yr(e, i), n;
}
function Ic(e) {
  if ((e.type === P && e.break) || (e.type === B && e.hard) || e.type === $) return !0;
}
function Oc(e) {
  return en(e, Ic, !1);
}
function jn(e) {
  if (e.length > 0) {
    let t = k(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Mc(e) {
  let t = new Set(),
    r = [];
  function n(i) {
    if ((i.type === $ && jn(r), i.type === P)) {
      if ((r.push(i), t.has(i))) return !1;
      t.add(i);
    }
  }
  function u(i) {
    i.type === P && r.pop().break && jn(r);
  }
  Yr(e, n, u, !0);
}
function Rc(e) {
  return e.type === B && !e.hard ? (e.soft ? "" : " ") : e.type === M ? e.flatContents : e;
}
function Hc(e) {
  return Qt(e, Rc);
}
function $n(e) {
  for (e = [...e]; e.length >= 2 && k(!1, e, -2).type === B && k(!1, e, -1).type === $; ) e.length -= 2;
  if (e.length > 0) {
    let t = Ke(k(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Ke(e) {
  switch (ke(e)) {
    case re:
    case te:
    case ue:
    case P:
    case ie:
    case Q: {
      let t = Ke(e.contents);
      return { ...e, contents: t };
    }
    case M:
      return { ...e, breakContents: Ke(e.breakContents), flatContents: Ke(e.flatContents) };
    case j:
      return { ...e, parts: $n(e.parts) };
    case pe:
      return $n(e);
    case Se:
      return e.replace(/[\n\r]*$/, "");
    case Ae:
    case ne:
    case ae:
    case B:
    case $:
      break;
    default:
      throw new Ie(e);
  }
  return e;
}
function Ci(e) {
  return Ke($c(e));
}
function jc(e) {
  switch (ke(e)) {
    case j:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case P:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === P && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
        return e.contents;
      break;
    case re:
    case te:
    case ue:
    case ie:
      if (!e.contents) return "";
      break;
    case M:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case pe: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...u] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof k(!1, t, -1) == "string" ? (t[t.length - 1] += n) : t.push(n), t.push(...u);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Se:
    case Ae:
    case ne:
    case ae:
    case B:
    case Q:
    case $:
      break;
    default:
      throw new Ie(e);
  }
  return e;
}
function $c(e) {
  return Qt(e, (t) => jc(t));
}
function Wc(e, t = Di) {
  return Qt(e, (r) =>
    typeof r == "string"
      ? fi(
          t,
          r.split(`
`)
        )
      : r
  );
}
function Vc(e) {
  if (e.type === B) return !0;
}
function Uc(e) {
  return en(e, Vc, !1);
}
function Fi(e, t) {
  return e.type === Q ? { ...e, contents: t(e.contents) } : t(e);
}
var N = Symbol("MODE_BREAK"),
  Y = Symbol("MODE_FLAT"),
  Je = Symbol("cursor");
function vi() {
  return { value: "", length: 0, queue: [] };
}
function zc(e, t) {
  return br(e, { type: "indent" }, t);
}
function Gc(e, t, r) {
  return t === Number.NEGATIVE_INFINITY
    ? e.root || vi()
    : t < 0
    ? br(e, { type: "dedent" }, r)
    : t
    ? t.type === "root"
      ? { ...e, root: e }
      : br(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r)
    : e;
}
function br(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t],
    u = "",
    i = 0,
    a = 0,
    s = 0;
  for (let d of n)
    switch (d.type) {
      case "indent":
        c(), r.useTabs ? o(1) : l(r.tabWidth);
        break;
      case "stringAlign":
        c(), (u += d.n), (i += d.n.length);
        break;
      case "numberAlign":
        (a += 1), (s += d.n);
        break;
      default:
        throw new Error(`Unexpected type '${d.type}'`);
    }
  return p(), { ...e, value: u, length: i, queue: n };
  function o(d) {
    (u += "	".repeat(d)), (i += r.tabWidth * d);
  }
  function l(d) {
    (u += " ".repeat(d)), (i += d);
  }
  function c() {
    r.useTabs ? D() : p();
  }
  function D() {
    a > 0 && o(a), h();
  }
  function p() {
    s > 0 && l(s), h();
  }
  function h() {
    (a = 0), (s = 0);
  }
}
function wr(e) {
  let t = 0,
    r = 0,
    n = e.length;
  e: for (; n--; ) {
    let u = e[n];
    if (u === Je) {
      r++;
      continue;
    }
    for (let i = u.length - 1; i >= 0; i--) {
      let a = u[i];
      if (a === " " || a === "	") t++;
      else {
        e[n] = u.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Je);
  return t;
}
function Dt(e, t, r, n, u, i) {
  if (r === Number.POSITIVE_INFINITY) return !0;
  let a = t.length,
    s = [e],
    o = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (a === 0) return !0;
      s.push(t[--a]);
      continue;
    }
    let { mode: l, doc: c } = s.pop();
    switch (ke(c)) {
      case Se:
        o.push(c), (r -= Zr(c));
        break;
      case pe:
      case j: {
        let D = Pc(c);
        for (let p = D.length - 1; p >= 0; p--) s.push({ mode: l, doc: D[p] });
        break;
      }
      case te:
      case re:
      case ue:
      case Q:
        s.push({ mode: l, doc: c.contents });
        break;
      case ne:
        r += wr(o);
        break;
      case P: {
        if (i && c.break) return !1;
        let D = c.break ? N : l,
          p = c.expandedStates && D === N ? k(!1, c.expandedStates, -1) : c.contents;
        s.push({ mode: D, doc: p });
        break;
      }
      case M: {
        let D = (c.groupId ? u[c.groupId] || Y : l) === N ? c.breakContents : c.flatContents;
        D && s.push({ mode: l, doc: D });
        break;
      }
      case B:
        if (l === N || c.hard) return !0;
        c.soft || (o.push(" "), r--);
        break;
      case ie:
        n = !0;
        break;
      case ae:
        if (n) return !1;
        break;
    }
  }
  return !1;
}
function Zt(e, t) {
  let r = {},
    n = t.printWidth,
    u = Qr(t.endOfLine),
    i = 0,
    a = [{ ind: vi(), mode: N, doc: e }],
    s = [],
    o = !1,
    l = [],
    c = 0;
  for (Mc(e); a.length > 0; ) {
    let { ind: p, mode: h, doc: d } = a.pop();
    switch (ke(d)) {
      case Se: {
        let m =
          u !==
          `
`
            ? Yt(
                !1,
                d,
                `
`,
                u
              )
            : d;
        s.push(m), a.length > 0 && (i += Zr(m));
        break;
      }
      case pe:
        for (let m = d.length - 1; m >= 0; m--) a.push({ ind: p, mode: h, doc: d[m] });
        break;
      case Ae:
        if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Je), c++;
        break;
      case te:
        a.push({ ind: zc(p, t), mode: h, doc: d.contents });
        break;
      case re:
        a.push({ ind: Gc(p, d.n, t), mode: h, doc: d.contents });
        break;
      case ne:
        i -= wr(s);
        break;
      case P:
        switch (h) {
          case Y:
            if (!o) {
              a.push({ ind: p, mode: d.break ? N : Y, doc: d.contents });
              break;
            }
          case N: {
            o = !1;
            let m = { ind: p, mode: Y, doc: d.contents },
              g = n - i,
              F = l.length > 0;
            if (!d.break && Dt(m, a, g, F, r)) a.push(m);
            else if (d.expandedStates) {
              let f = k(!1, d.expandedStates, -1);
              if (d.break) {
                a.push({ ind: p, mode: N, doc: f });
                break;
              } else
                for (let C = 1; C < d.expandedStates.length + 1; C++)
                  if (C >= d.expandedStates.length) {
                    a.push({ ind: p, mode: N, doc: f });
                    break;
                  } else {
                    let y = d.expandedStates[C],
                      v = { ind: p, mode: Y, doc: y };
                    if (Dt(v, a, g, F, r)) {
                      a.push(v);
                      break;
                    }
                  }
            } else a.push({ ind: p, mode: N, doc: d.contents });
            break;
          }
        }
        d.id && (r[d.id] = k(!1, a, -1).mode);
        break;
      case j: {
        let m = n - i,
          { parts: g } = d;
        if (g.length === 0) break;
        let [F, f] = g,
          C = { ind: p, mode: Y, doc: F },
          y = { ind: p, mode: N, doc: F },
          v = Dt(C, [], m, l.length > 0, r, !0);
        if (g.length === 1) {
          v ? a.push(C) : a.push(y);
          break;
        }
        let w = { ind: p, mode: Y, doc: f },
          S = { ind: p, mode: N, doc: f };
        if (g.length === 2) {
          v ? a.push(w, C) : a.push(S, y);
          break;
        }
        g.splice(0, 2);
        let x = { ind: p, mode: h, doc: pi(g) },
          K = g[0];
        Dt({ ind: p, mode: Y, doc: [F, f, K] }, [], m, l.length > 0, r, !0) ? a.push(x, w, C) : v ? a.push(x, S, C) : a.push(x, S, y);
        break;
      }
      case M:
      case ue: {
        let m = d.groupId ? r[d.groupId] : h;
        if (m === N) {
          let g = d.type === M ? d.breakContents : d.negate ? d.contents : _t(d.contents);
          g && a.push({ ind: p, mode: h, doc: g });
        }
        if (m === Y) {
          let g = d.type === M ? d.flatContents : d.negate ? _t(d.contents) : d.contents;
          g && a.push({ ind: p, mode: h, doc: g });
        }
        break;
      }
      case ie:
        l.push({ ind: p, mode: h, doc: d.contents });
        break;
      case ae:
        l.length > 0 && a.push({ ind: p, mode: h, doc: Xr });
        break;
      case B:
        switch (h) {
          case Y:
            if (d.hard) o = !0;
            else {
              d.soft || (s.push(" "), (i += 1));
              break;
            }
          case N:
            if (l.length > 0) {
              a.push({ ind: p, mode: h, doc: d }, ...l.reverse()), (l.length = 0);
              break;
            }
            d.literal
              ? p.root
                ? (s.push(u, p.root.value), (i = p.root.length))
                : (s.push(u), (i = 0))
              : ((i -= wr(s)), s.push(u + p.value), (i = p.length));
            break;
        }
        break;
      case Q:
        a.push({ ind: p, mode: h, doc: d.contents });
        break;
      case $:
        break;
      default:
        throw new Ie(d);
    }
    a.length === 0 && l.length > 0 && (a.push(...l.reverse()), (l.length = 0));
  }
  let D = s.indexOf(Je);
  if (D !== -1) {
    let p = s.indexOf(Je, D + 1),
      h = s.slice(0, D).join(""),
      d = s.slice(D + 1, p).join(""),
      m = s.slice(p + 1).join("");
    return { formatted: h + d + m, cursorNodeStart: h.length, cursorNodeText: d };
  }
  return { formatted: s.join("") };
}
function Z(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e)
      if (Array.isArray(n)) r.push(...Z(n));
      else {
        let u = Z(n);
        u !== "" && r.push(u);
      }
    return r;
  }
  return e.type === M
    ? { ...e, breakContents: Z(e.breakContents), flatContents: Z(e.flatContents) }
    : e.type === P
    ? { ...e, contents: Z(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(Z) }
    : e.type === j
    ? { type: "fill", parts: e.parts.map(Z) }
    : e.contents
    ? { ...e, contents: Z(e.contents) }
    : e;
}
function Kc(e) {
  let t = Object.create(null),
    r = new Set();
  return n(Z(e));
  function n(i, a, s) {
    var o, l;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let c = i.map(n).filter(Boolean);
      return c.length === 1 ? c[0] : `[${c.join(", ")}]`;
    }
    if (i.type === B) {
      let c = ((o = s == null ? void 0 : s[a + 1]) == null ? void 0 : o.type) === $;
      return i.literal
        ? c
          ? "literalline"
          : "literallineWithoutBreakParent"
        : i.hard
        ? c
          ? "hardline"
          : "hardlineWithoutBreakParent"
        : i.soft
        ? "softline"
        : "line";
    }
    if (i.type === $)
      return ((l = s == null ? void 0 : s[a - 1]) == null ? void 0 : l.type) === B && s[a - 1].hard ? void 0 : "breakParent";
    if (i.type === ne) return "trim";
    if (i.type === te) return "indent(" + n(i.contents) + ")";
    if (i.type === re)
      return i.n === Number.NEGATIVE_INFINITY
        ? "dedentToRoot(" + n(i.contents) + ")"
        : i.n < 0
        ? "dedent(" + n(i.contents) + ")"
        : i.n.type === "root"
        ? "markAsRoot(" + n(i.contents) + ")"
        : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
    if (i.type === M)
      return (
        "ifBreak(" +
        n(i.breakContents) +
        (i.flatContents ? ", " + n(i.flatContents) : "") +
        (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${u(i.groupId)} }` : "") +
        ")"
      );
    if (i.type === ue) {
      let c = [];
      i.negate && c.push("negate: true"), i.groupId && c.push(`groupId: ${u(i.groupId)}`);
      let D = c.length > 0 ? `, { ${c.join(", ")} }` : "";
      return `indentIfBreak(${n(i.contents)}${D})`;
    }
    if (i.type === P) {
      let c = [];
      i.break && i.break !== "propagated" && c.push("shouldBreak: true"), i.id && c.push(`id: ${u(i.id)}`);
      let D = c.length > 0 ? `, { ${c.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((p) => n(p)).join(",")}]${D})` : `group(${n(i.contents)}${D})`;
    }
    if (i.type === j) return `fill([${i.parts.map((c) => n(c)).join(", ")}])`;
    if (i.type === ie) return "lineSuffix(" + n(i.contents) + ")";
    if (i.type === ae) return "lineSuffixBoundary";
    if (i.type === Q) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function u(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t) return t[i];
    let a = i.description || "symbol";
    for (let s = 0; ; s++) {
      let o = a + (s > 0 ? ` #${s}` : "");
      if (!r.has(o)) return r.add(o), (t[i] = `Symbol.for(${JSON.stringify(o)})`);
    }
  }
}
function Jc(e, t, r = 0) {
  let n = 0;
  for (let u = r; u < e.length; ++u) e[u] === "	" ? (n = n + t - (n % t)) : n++;
  return n;
}
var tn = Jc,
  yi = class extends Error {
    constructor() {
      super(...arguments);
      _e(this, "name", "ConfigError");
    }
  },
  Wn = class extends Error {
    constructor() {
      super(...arguments);
      _e(this, "name", "UndefinedParserError");
    }
  },
  Yc = {
    cursorOffset: {
      category: "Special",
      type: "int",
      default: -1,
      range: { start: -1, end: 1 / 0, step: 1 },
      description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
      cliCategory: "Editor",
    },
    endOfLine: {
      category: "Global",
      type: "choice",
      default: "lf",
      description: "Which end of line characters to apply.",
      choices: [
        { value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" },
        { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" },
        { value: "cr", description: "Carriage Return character only (\\r), used very rarely" },
        {
          value: "auto",
          description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`,
        },
      ],
    },
    filepath: {
      category: "Special",
      type: "path",
      description: "Specify the input filepath. This will be used to do parser inference.",
      cliName: "stdin-filepath",
      cliCategory: "Other",
      cliDescription: "Path to the file to pretend that stdin comes from.",
    },
    insertPragma: {
      category: "Special",
      type: "boolean",
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: "Other",
    },
    parser: {
      category: "Global",
      type: "choice",
      default: void 0,
      description: "Which parser to use.",
      exception: (e) => typeof e == "string" || typeof e == "function",
      choices: [
        { value: "flow", description: "Flow" },
        { value: "babel", description: "JavaScript" },
        { value: "babel-flow", description: "Flow" },
        { value: "babel-ts", description: "TypeScript" },
        { value: "typescript", description: "TypeScript" },
        { value: "acorn", description: "JavaScript" },
        { value: "espree", description: "JavaScript" },
        { value: "meriyah", description: "JavaScript" },
        { value: "css", description: "CSS" },
        { value: "less", description: "Less" },
        { value: "scss", description: "SCSS" },
        { value: "json", description: "JSON" },
        { value: "json5", description: "JSON5" },
        { value: "json-stringify", description: "JSON.stringify" },
        { value: "graphql", description: "GraphQL" },
        { value: "markdown", description: "Markdown" },
        { value: "mdx", description: "MDX" },
        { value: "vue", description: "Vue" },
        { value: "yaml", description: "YAML" },
        { value: "glimmer", description: "Ember / Handlebars" },
        { value: "html", description: "HTML" },
        { value: "angular", description: "Angular" },
        { value: "lwc", description: "Lightning Web Components" },
      ],
    },
    plugins: {
      type: "path",
      array: !0,
      default: [{ value: [] }],
      category: "Global",
      description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
      exception: (e) => typeof e == "string" || typeof e == "object",
      cliName: "plugin",
      cliCategory: "Config",
    },
    printWidth: {
      category: "Global",
      type: "int",
      default: 80,
      description: "The line length where Prettier will try wrap.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    rangeEnd: {
      category: "Special",
      type: "int",
      default: 1 / 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
      cliCategory: "Editor",
    },
    rangeStart: {
      category: "Special",
      type: "int",
      default: 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
      cliCategory: "Editor",
    },
    requirePragma: {
      category: "Special",
      type: "boolean",
      default: !1,
      description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
      cliCategory: "Other",
    },
    tabWidth: {
      type: "int",
      category: "Global",
      default: 2,
      description: "Number of spaces per indentation level.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." },
    embeddedLanguageFormatting: {
      category: "Global",
      type: "choice",
      default: "auto",
      description: "Control how Prettier formats quoted code embedded in the file.",
      choices: [
        { value: "auto", description: "Format embedded code if Prettier can automatically identify it." },
        { value: "off", description: "Never automatically format embedded code." },
      ],
    },
  };
function Ei({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let r = e.flatMap((u) => u.languages ?? []),
    n = [];
  for (let u of Qc(Object.assign({}, ...e.map(({ options: i }) => i), Yc)))
    (!t && u.deprecated) ||
      (Array.isArray(u.choices) &&
        (t || (u.choices = u.choices.filter((i) => !i.deprecated)),
        u.name === "parser" && (u.choices = [...u.choices, ...Xc(u.choices, r, e)])),
      (u.pluginDefaults = Object.fromEntries(
        e
          .filter((i) => {
            var a;
            return ((a = i.defaultOptions) == null ? void 0 : a[u.name]) !== void 0;
          })
          .map((i) => [i.name, i.defaultOptions[u.name]])
      )),
      n.push(u));
  return { languages: r, options: n };
}
function* Xc(e, t, r) {
  let n = new Set(e.map((u) => u.value));
  for (let u of t)
    if (u.parsers) {
      for (let i of u.parsers)
        if (!n.has(i)) {
          n.add(i);
          let a = r.find((o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, i)),
            s = u.name;
          a != null && a.name && (s += ` (plugin: ${a.name})`), yield { value: i, description: s };
        }
    }
}
function Qc(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    let u = { name: r, ...n };
    Array.isArray(u.default) && (u.default = k(!1, u.default, -1).value), t.push(u);
  }
  return t;
}
var Zc = (e) => String(e).split(/[/\\]/).pop();
function Vn(e, t) {
  if (!t) return;
  let r = Zc(t).toLowerCase();
  return e.find((n) => {
    var u, i;
    return (
      ((u = n.extensions) == null ? void 0 : u.some((a) => r.endsWith(a))) ||
      ((i = n.filenames) == null ? void 0 : i.some((a) => a.toLowerCase() === r))
    );
  });
}
function ep(e, t) {
  if (t)
    return (
      e.find(({ name: r }) => r.toLowerCase() === t) ??
      e.find(({ aliases: r }) => (r == null ? void 0 : r.includes(t))) ??
      e.find(({ extensions: r }) => (r == null ? void 0 : r.includes(`.${t}`)))
    );
}
function tp(e, t) {
  let r = e.plugins.flatMap((u) => u.languages ?? []),
    n = ep(r, t.language) ?? Vn(r, t.physicalFile) ?? Vn(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var rp = tp,
  Te = {
    key: (e) => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
    value(e) {
      if (e === null || typeof e != "object") return JSON.stringify(e);
      if (Array.isArray(e)) return `[${e.map((r) => Te.value(r)).join(", ")}]`;
      let t = Object.keys(e);
      return t.length === 0 ? "{}" : `{ ${t.map((r) => `${Te.key(r)}: ${Te.value(e[r])}`).join(", ")} }`;
    },
    pair: ({ key: e, value: t }) => Te.value({ [e]: t }),
  },
  Un = it(Jt(), 1),
  np = (e, t, { descriptor: r }) => {
    let n = [`${Un.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
    return t && n.push(`we now treat it as ${Un.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
  },
  Le = it(Jt(), 1),
  bi = Symbol.for("vnopts.VALUE_NOT_EXIST"),
  Ft = Symbol.for("vnopts.VALUE_UNCHANGED"),
  zn = " ".repeat(2),
  up = (e, t, r) => {
    let { text: n, list: u } = r.normalizeExpectedResult(r.schemas[e].expected(r)),
      i = [];
    return (
      n && i.push(Gn(e, t, n, r.descriptor)),
      u &&
        i.push(
          [Gn(e, t, u.title, r.descriptor)].concat(u.values.map((a) => wi(a, r.loggerPrintWidth))).join(`
`)
        ),
      Si(i, r.loggerPrintWidth)
    );
  };
function Gn(e, t, r, n) {
  return [
    `Invalid ${Le.default.red(n.key(e))} value.`,
    `Expected ${Le.default.blue(r)},`,
    `but received ${t === bi ? Le.default.gray("nothing") : Le.default.red(n.value(t))}.`,
  ].join(" ");
}
function wi({ text: e, list: t }, r) {
  let n = [];
  return (
    e && n.push(`- ${Le.default.blue(e)}`),
    t &&
      n.push(
        [`- ${Le.default.blue(t.title)}:`].concat(t.values.map((u) => wi(u, r - zn.length).replace(/^|\n/g, `$&${zn}`))).join(`
`)
      ),
    Si(n, r)
  );
}
function Si(e, t) {
  if (e.length === 1) return e[0];
  let [r, n] = e,
    [u, i] = e.map(
      (a) =>
        a.split(
          `
`,
          1
        )[0].length
    );
  return u > t && u > i ? n : r;
}
var Kn = it(Jt(), 1),
  lr = [],
  Jn = [];
function ip(e, t) {
  if (e === t) return 0;
  let r = e;
  e.length > t.length && ((e = t), (t = r));
  let n = e.length,
    u = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-u); ) n--, u--;
  let i = 0;
  for (; i < n && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
  if (((n -= i), (u -= i), n === 0)) return u;
  let a,
    s,
    o,
    l,
    c = 0,
    D = 0;
  for (; c < n; ) (Jn[c] = e.charCodeAt(i + c)), (lr[c] = ++c);
  for (; D < u; )
    for (a = t.charCodeAt(i + D), o = D++, s = D, c = 0; c < n; c++)
      (l = a === Jn[c] ? o : o + 1), (o = lr[c]), (s = lr[c] = o > s ? (l > s ? s + 1 : l) : l > o ? o + 1 : l);
  return s;
}
var Ai = (e, t, { descriptor: r, logger: n, schemas: u }) => {
    let i = [`Ignored unknown option ${Kn.default.yellow(r.pair({ key: e, value: t }))}.`],
      a = Object.keys(u)
        .sort()
        .find((s) => ip(e, s) < 3);
    a && i.push(`Did you mean ${Kn.default.blue(r.key(a))}?`), n.warn(i.join(" "));
  },
  ap = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function sp(e, t) {
  let r = new e(t),
    n = Object.create(r);
  for (let u of ap) u in t && (n[u] = op(t[u], r, De.prototype[u].length));
  return n;
}
var De = class {
  static create(e) {
    return sp(this, e);
  }
  constructor(e) {
    this.name = e.name;
  }
  default(e) {}
  expected(e) {
    return "nothing";
  }
  validate(e, t) {
    return !1;
  }
  deprecated(e, t) {
    return !1;
  }
  forward(e, t) {}
  redirect(e, t) {}
  overlap(e, t, r) {
    return e;
  }
  preprocess(e, t) {
    return e;
  }
  postprocess(e, t) {
    return Ft;
  }
};
function op(e, t, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
var lp = class extends De {
    constructor(e) {
      super(e), (this._sourceName = e.sourceName);
    }
    expected(e) {
      return e.schemas[this._sourceName].expected(e);
    }
    validate(e, t) {
      return t.schemas[this._sourceName].validate(e, t);
    }
    redirect(e, t) {
      return this._sourceName;
    }
  },
  cp = class extends De {
    expected() {
      return "anything";
    }
    validate() {
      return !0;
    }
  },
  pp = class extends De {
    constructor({ valueSchema: e, name: t = e.name, ...r }) {
      super({ ...r, name: t }), (this._valueSchema = e);
    }
    expected(e) {
      let { text: t, list: r } = e.normalizeExpectedResult(this._valueSchema.expected(e));
      return { text: t && `an array of ${t}`, list: r && { title: "an array of the following values", values: [{ list: r }] } };
    }
    validate(e, t) {
      if (!Array.isArray(e)) return !1;
      let r = [];
      for (let n of e) {
        let u = t.normalizeValidateResult(this._valueSchema.validate(n, t), n);
        u !== !0 && r.push(u.value);
      }
      return r.length === 0 ? !0 : { value: r };
    }
    deprecated(e, t) {
      let r = [];
      for (let n of e) {
        let u = t.normalizeDeprecatedResult(this._valueSchema.deprecated(n, t), n);
        u !== !1 && r.push(...u.map(({ value: i }) => ({ value: [i] })));
      }
      return r;
    }
    forward(e, t) {
      let r = [];
      for (let n of e) {
        let u = t.normalizeForwardResult(this._valueSchema.forward(n, t), n);
        r.push(...u.map(Yn));
      }
      return r;
    }
    redirect(e, t) {
      let r = [],
        n = [];
      for (let u of e) {
        let i = t.normalizeRedirectResult(this._valueSchema.redirect(u, t), u);
        "remain" in i && r.push(i.remain), n.push(...i.redirect.map(Yn));
      }
      return r.length === 0 ? { redirect: n } : { redirect: n, remain: r };
    }
    overlap(e, t) {
      return e.concat(t);
    }
  };
function Yn({ from: e, to: t }) {
  return { from: [e], to: t };
}
var hp = class extends De {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function dp(e, t) {
  let r = Object.create(null);
  for (let n of e) {
    let u = n[t];
    if (r[u]) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
    r[u] = n;
  }
  return r;
}
function Dp(e, t) {
  let r = new Map();
  for (let n of e) {
    let u = n[t];
    if (r.has(u)) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
    r.set(u, n);
  }
  return r;
}
function fp() {
  let e = Object.create(null);
  return (t) => {
    let r = JSON.stringify(t);
    return e[r] ? !0 : ((e[r] = !0), !1);
  };
}
function mp(e, t) {
  let r = [],
    n = [];
  for (let u of e) t(u) ? r.push(u) : n.push(u);
  return [r, n];
}
function gp(e) {
  return e === Math.floor(e);
}
function Cp(e, t) {
  if (e === t) return 0;
  let r = typeof e,
    n = typeof t,
    u = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? u.indexOf(r) - u.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Fp(e) {
  return (...t) => {
    let r = e(...t);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function Xn(e) {
  return e === void 0 ? {} : e;
}
function ki(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: r } = e;
  return (
    vp((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."),
    r ? { text: t, list: { title: r.title, values: r.values.map(ki) } } : { text: t }
  );
}
function Qn(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Zn(e, t, r = !1) {
  return e === !1 ? !1 : e === !0 ? (r ? !0 : [{ value: t }]) : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function eu(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function Sr(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => eu(r, t)) : [eu(e, t)];
}
function tu(e, t) {
  let r = Sr(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return r.length === 0
    ? { remain: t, redirect: r }
    : typeof e == "object" && "remain" in e
    ? { remain: e.remain, redirect: r }
    : { redirect: r };
}
function vp(e, t) {
  if (!e) throw new Error(t);
}
var yp = class extends De {
    constructor(e) {
      super(e),
        (this._choices = Dp(
          e.choices.map((t) => (t && typeof t == "object" ? t : { value: t })),
          "value"
        ));
    }
    expected({ descriptor: e }) {
      let t = Array.from(this._choices.keys())
          .map((u) => this._choices.get(u))
          .filter(({ hidden: u }) => !u)
          .map((u) => u.value)
          .sort(Cp)
          .map(e.value),
        r = t.slice(0, -2),
        n = t.slice(-2);
      return { text: r.concat(n.join(" or ")).join(", "), list: { title: "one of the following values", values: t } };
    }
    validate(e) {
      return this._choices.has(e);
    }
    deprecated(e) {
      let t = this._choices.get(e);
      return t && t.deprecated ? { value: e } : !1;
    }
    forward(e) {
      let t = this._choices.get(e);
      return t ? t.forward : void 0;
    }
    redirect(e) {
      let t = this._choices.get(e);
      return t ? t.redirect : void 0;
    }
  },
  Ep = class extends De {
    expected() {
      return "a number";
    }
    validate(e, t) {
      return typeof e == "number";
    }
  },
  bp = class extends Ep {
    expected() {
      return "an integer";
    }
    validate(e, t) {
      return t.normalizeValidateResult(super.validate(e, t), e) === !0 && gp(e);
    }
  },
  ru = class extends De {
    expected() {
      return "a string";
    }
    validate(e) {
      return typeof e == "string";
    }
  },
  wp = Te,
  Sp = Ai,
  Ap = up,
  kp = np,
  _p = class {
    constructor(e, t) {
      let {
        logger: r = console,
        loggerPrintWidth: n = 80,
        descriptor: u = wp,
        unknown: i = Sp,
        invalid: a = Ap,
        deprecated: s = kp,
        missing: o = () => !1,
        required: l = () => !1,
        preprocess: c = (p) => p,
        postprocess: D = () => Ft,
      } = t || {};
      (this._utils = {
        descriptor: u,
        logger: r || { warn: () => {} },
        loggerPrintWidth: n,
        schemas: dp(e, "name"),
        normalizeDefaultResult: Xn,
        normalizeExpectedResult: ki,
        normalizeDeprecatedResult: Zn,
        normalizeForwardResult: Sr,
        normalizeRedirectResult: tu,
        normalizeValidateResult: Qn,
      }),
        (this._unknownHandler = i),
        (this._invalidHandler = Fp(a)),
        (this._deprecatedHandler = s),
        (this._identifyMissing = (p, h) => !(p in h) || o(p, h)),
        (this._identifyRequired = l),
        (this._preprocess = c),
        (this._postprocess = D),
        this.cleanHistory();
    }
    cleanHistory() {
      this._hasDeprecationWarned = fp();
    }
    normalize(e) {
      let t = {},
        r = [this._preprocess(e, this._utils)],
        n = () => {
          for (; r.length !== 0; ) {
            let u = r.shift(),
              i = this._applyNormalization(u, t);
            r.push(...i);
          }
        };
      n();
      for (let u of Object.keys(this._utils.schemas)) {
        let i = this._utils.schemas[u];
        if (!(u in t)) {
          let a = Xn(i.default(this._utils));
          "value" in a && r.push({ [u]: a.value });
        }
      }
      n();
      for (let u of Object.keys(this._utils.schemas)) {
        if (!(u in t)) continue;
        let i = this._utils.schemas[u],
          a = t[u],
          s = i.postprocess(a, this._utils);
        s !== Ft && (this._applyValidation(s, u, i), (t[u] = s));
      }
      return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
    }
    _applyNormalization(e, t) {
      let r = [],
        { knownKeys: n, unknownKeys: u } = this._partitionOptionKeys(e);
      for (let i of n) {
        let a = this._utils.schemas[i],
          s = a.preprocess(e[i], this._utils);
        this._applyValidation(s, i, a);
        let o = ({ from: D, to: p }) => {
            r.push(typeof p == "string" ? { [p]: D } : { [p.key]: p.value });
          },
          l = ({ value: D, redirectTo: p }) => {
            let h = Zn(a.deprecated(D, this._utils), s, !0);
            if (h !== !1)
              if (h === !0) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, p, this._utils));
              else
                for (let { value: d } of h) {
                  let m = { key: i, value: d };
                  if (!this._hasDeprecationWarned(m)) {
                    let g = typeof p == "string" ? { key: p, value: d } : p;
                    this._utils.logger.warn(this._deprecatedHandler(m, g, this._utils));
                  }
                }
          };
        Sr(a.forward(s, this._utils), s).forEach(o);
        let c = tu(a.redirect(s, this._utils), s);
        if ((c.redirect.forEach(o), "remain" in c)) {
          let D = c.remain;
          (t[i] = i in t ? a.overlap(t[i], D, this._utils) : D), l({ value: D });
        }
        for (let { from: D, to: p } of c.redirect) l({ value: D, redirectTo: p });
      }
      for (let i of u) {
        let a = e[i];
        this._applyUnknownHandler(i, a, t, (s, o) => {
          r.push({ [s]: o });
        });
      }
      return r;
    }
    _applyRequiredCheck(e) {
      for (let t of Object.keys(this._utils.schemas))
        if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, bi, this._utils);
    }
    _partitionOptionKeys(e) {
      let [t, r] = mp(
        Object.keys(e).filter((n) => !this._identifyMissing(n, e)),
        (n) => n in this._utils.schemas
      );
      return { knownKeys: t, unknownKeys: r };
    }
    _applyValidation(e, t, r) {
      let n = Qn(r.validate(e, this._utils), e);
      if (n !== !0) throw this._invalidHandler(t, n.value, this._utils);
    }
    _applyUnknownHandler(e, t, r, n) {
      let u = this._unknownHandler(e, t, this._utils);
      if (u)
        for (let i of Object.keys(u)) {
          if (this._identifyMissing(i, u)) continue;
          let a = u[i];
          i in this._utils.schemas ? n(i, a) : (r[i] = a);
        }
    }
    _applyPostprocess(e) {
      let t = this._postprocess(e, this._utils);
      if (t !== Ft) {
        if (t.delete) for (let r of t.delete) delete e[r];
        if (t.override) {
          let { knownKeys: r, unknownKeys: n } = this._partitionOptionKeys(t.override);
          for (let u of r) {
            let i = t.override[u];
            this._applyValidation(i, u, this._utils.schemas[u]), (e[u] = i);
          }
          for (let u of n) {
            let i = t.override[u];
            this._applyUnknownHandler(u, i, e, (a, s) => {
              let o = this._utils.schemas[a];
              this._applyValidation(s, a, o), (e[a] = s);
            });
          }
        }
      }
    }
  },
  cr;
function Bp(e, t, { logger: r = !1, isCLI: n = !1, passThrough: u = !1, FlagSchema: i, descriptor: a } = {}) {
  if (n) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!a) throw new Error("'descriptor' option is required.");
  } else a = Te;
  let s = u
      ? Array.isArray(u)
        ? (p, h) => (u.includes(p) ? { [p]: h } : void 0)
        : (p, h) => ({ [p]: h })
      : (p, h, d) => {
          let { _: m, ...g } = d.schemas;
          return Ai(p, h, { ...d, schemas: g });
        },
    o = xp(t, { isCLI: n, FlagSchema: i }),
    l = new _p(o, { logger: r, unknown: s, descriptor: a }),
    c = r !== !1;
  c && cr && (l._hasDeprecationWarned = cr);
  let D = l.normalize(e);
  return c && (cr = l._hasDeprecationWarned), D;
}
function xp(e, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(cp.create({ name: "_" }));
  for (let u of e)
    n.push(Tp(u, { isCLI: t, optionInfos: e, FlagSchema: r })), u.alias && t && n.push(lp.create({ name: u.alias, sourceName: u.name }));
  return n;
}
function Tp(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: u } = e,
    i = { name: u },
    a,
    s = {};
  switch (e.type) {
    case "int":
      (a = bp), t && (i.preprocess = Number);
      break;
    case "string":
      a = ru;
      break;
    case "choice":
      (a = yp),
        (i.choices = e.choices.map((o) => (o != null && o.redirect ? { ...o, redirect: { to: { key: e.name, value: o.redirect } } } : o)));
      break;
    case "boolean":
      a = hp;
      break;
    case "flag":
      (a = n), (i.flags = r.flatMap((o) => [o.alias, o.description && o.name, o.oppositeDescription && `no-${o.name}`].filter(Boolean)));
      break;
    case "path":
      a = ru;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (
    (e.exception
      ? (i.validate = (o, l, c) => e.exception(o) || l.validate(o, c))
      : (i.validate = (o, l, c) => o === void 0 || l.validate(o, c)),
    e.redirect && (s.redirect = (o) => (o ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0)),
    e.deprecated && (s.deprecated = !0),
    t && !e.array)
  ) {
    let o = i.preprocess || ((l) => l);
    i.preprocess = (l, c, D) => c.preprocess(o(Array.isArray(l) ? k(!1, l, -1) : l), D);
  }
  return e.array
    ? pp.create({ ...(t ? { preprocess: (o) => (Array.isArray(o) ? o : [o]) } : {}), ...s, valueSchema: a.create(i) })
    : a.create({ ...i, ...s });
}
var Lp = Bp;
function _i(e, t) {
  if (!t) throw new Error("parserName is required.");
  for (let n = e.length - 1; n >= 0; n--) {
    let u = e[n];
    if (u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t)) return u;
  }
  let r = `Couldn't resolve parser "${t}".`;
  throw ((r += " Plugins must be explicitly added to the standalone bundle."), new yi(r));
}
function Np(e, t) {
  if (!t) throw new Error("astFormat is required.");
  for (let n = e.length - 1; n >= 0; n--) {
    let u = e[n];
    if (u.printers && Object.prototype.hasOwnProperty.call(u.printers, t)) return u;
  }
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw ((r += " Plugins must be explicitly added to the standalone bundle."), new yi(r));
}
function Bi({ plugins: e, parser: t }) {
  let r = _i(e, t);
  return xi(r, t);
}
function xi(e, t) {
  let r = e.parsers[t];
  return typeof r == "function" ? r() : r;
}
function qp(e, t) {
  let r = e.printers[t];
  return typeof r == "function" ? r() : r;
}
var nu = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function Pp(e, t = {}) {
  var r;
  let n = { ...e };
  if (!n.parser)
    if (n.filepath) {
      if (((n.parser = rp(n, { physicalFile: n.filepath })), !n.parser))
        throw new Wn(`No parser could be inferred for file "${n.filepath}".`);
    } else throw new Wn("No parser and no file path given, couldn't infer a parser.");
  let u = Ei({ plugins: e.plugins, showDeprecated: !0 }).options,
    i = { ...nu, ...Object.fromEntries(u.filter((p) => p.default !== void 0).map((p) => [p.name, p.default])) },
    a = _i(n.plugins, n.parser),
    s = await xi(a, n.parser);
  (n.astFormat = s.astFormat), (n.locEnd = s.locEnd), (n.locStart = s.locStart);
  let o = (r = a.printers) != null && r[s.astFormat] ? a : Np(n.plugins, s.astFormat),
    l = await qp(o, s.astFormat);
  n.printer = l;
  let c = o.defaultOptions ? Object.fromEntries(Object.entries(o.defaultOptions).filter(([, p]) => p !== void 0)) : {},
    D = { ...i, ...c };
  for (let [p, h] of Object.entries(D)) (n[p] === null || n[p] === void 0) && (n[p] = h);
  return n.parser === "json" && (n.trailingComma = "none"), Lp(n, u, { passThrough: Object.keys(nu), ...t });
}
var He = Pp,
  Ti = new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]),
  Ip = (e) => Object.keys(e).filter((t) => !Ti.has(t));
function Op(e) {
  return e ? (t) => e(t, Ti) : Ip;
}
var er = Op;
function Mp(e, t) {
  let {
    printer: { massageAstNode: r, getVisitorKeys: n },
  } = t;
  if (!r) return e;
  let u = er(n),
    i = r.ignoredProperties ?? new Set();
  return a(e);
  function a(s, o) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((p) => a(p, o)).filter(Boolean);
    let l = {},
      c = new Set(u(s));
    for (let p in s) !Object.prototype.hasOwnProperty.call(s, p) || i.has(p) || (c.has(p) ? (l[p] = a(s[p], s)) : (l[p] = s[p]));
    let D = r(s, l, o);
    if (D !== null) return D ?? l;
  }
}
var Rp = Mp,
  Hp = it(ac(), 1);
async function jp(e, t) {
  let r = await Bi(t),
    n = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = n;
  let u;
  try {
    u = await r.parse(n, t, t);
  } catch (i) {
    $p(i, e);
  }
  return { text: n, ast: u };
}
function $p(e, t) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Hp.codeFrameColumns)(t, r, { highlightCode: !0 });
    throw (
      ((e.message +=
        `
` + n),
      (e.codeFrame = n),
      e)
    );
  }
  throw e;
}
var at = jp,
  vt,
  Ar,
  ze,
  yt,
  Wp = class {
    constructor(e) {
      Rn(this, vt), Rn(this, ze), (this.stack = [e]);
    }
    get key() {
      let { stack: e, siblings: t } = this;
      return k(!1, e, t === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : k(!1, this.stack, -2);
    }
    get node() {
      return k(!1, this.stack, -1);
    }
    get parent() {
      return this.getNode(1);
    }
    get grandparent() {
      return this.getNode(2);
    }
    get isInArray() {
      return this.siblings !== null;
    }
    get siblings() {
      let { stack: e } = this,
        t = k(!1, e, -3);
      return Array.isArray(t) ? t : null;
    }
    get next() {
      let { siblings: e } = this;
      return e === null ? null : e[this.index + 1];
    }
    get previous() {
      let { siblings: e } = this;
      return e === null ? null : e[this.index - 1];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isLast() {
      let { siblings: e, index: t } = this;
      return e !== null && t === e.length - 1;
    }
    get isRoot() {
      return this.stack.length === 1;
    }
    get root() {
      return this.stack[0];
    }
    get ancestors() {
      return [...Ve(this, ze, yt).call(this)];
    }
    getName() {
      let { stack: e } = this,
        { length: t } = e;
      return t > 1 ? k(!1, e, -2) : null;
    }
    getValue() {
      return k(!1, this.stack, -1);
    }
    getNode(e = 0) {
      let t = Ve(this, vt, Ar).call(this, e);
      return t === -1 ? null : this.stack[t];
    }
    getParentNode(e = 0) {
      return this.getNode(e + 1);
    }
    call(e, ...t) {
      let { stack: r } = this,
        { length: n } = r,
        u = k(!1, r, -1);
      for (let i of t) (u = u[i]), r.push(i, u);
      try {
        return e(this);
      } finally {
        r.length = n;
      }
    }
    callParent(e, t = 0) {
      let r = Ve(this, vt, Ar).call(this, t + 1),
        n = this.stack.splice(r + 1);
      try {
        return e(this);
      } finally {
        this.stack.push(...n);
      }
    }
    each(e, ...t) {
      let { stack: r } = this,
        { length: n } = r,
        u = k(!1, r, -1);
      for (let i of t) (u = u[i]), r.push(i, u);
      try {
        for (let i = 0; i < u.length; ++i) r.push(i, u[i]), e(this, i, u), (r.length -= 2);
      } finally {
        r.length = n;
      }
    }
    map(e, ...t) {
      let r = [];
      return (
        this.each((n, u, i) => {
          r[u] = e(n, u, i);
        }, ...t),
        r
      );
    }
    match(...e) {
      let t = this.stack.length - 1,
        r = null,
        n = this.stack[t--];
      for (let u of e) {
        if (n === void 0) return !1;
        let i = null;
        if ((typeof r == "number" && ((i = r), (r = this.stack[t--]), (n = this.stack[t--])), u && !u(n, r, i))) return !1;
        (r = this.stack[t--]), (n = this.stack[t--]);
      }
      return !0;
    }
    findAncestor(e) {
      for (let t of Ve(this, ze, yt).call(this)) if (e(t)) return t;
    }
    hasAncestor(e) {
      for (let t of Ve(this, ze, yt).call(this)) if (e(t)) return !0;
      return !1;
    }
  };
(vt = new WeakSet()),
  (Ar = function (e) {
    let { stack: t } = this;
    for (let r = t.length - 1; r >= 0; r -= 2) if (!Array.isArray(t[r]) && --e < 0) return r;
    return -1;
  }),
  (ze = new WeakSet()),
  (yt = function* () {
    let { stack: e } = this;
    for (let t = e.length - 3; t >= 0; t -= 2) {
      let r = e[t];
      Array.isArray(r) || (yield r);
    }
  });
var Vp = Wp,
  Li = new Proxy(() => {}, { get: () => Li }),
  kr = Li;
function st(e) {
  return (t, r, n) => {
    let u = !!(n != null && n.backwards);
    if (r === !1) return !1;
    let { length: i } = t,
      a = r;
    for (; a >= 0 && a < i; ) {
      let s = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(s)) return a;
      } else if (!e.includes(s)) return a;
      u ? a-- : a++;
    }
    return a === -1 || a === i ? a : !1;
  };
}
var Up = st(/\s/),
  he = st(" 	"),
  Ni = st(",; 	"),
  qi = st(/[^\n\r]/);
function zp(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === !1) return !1;
  let u = e.charAt(t);
  if (n) {
    if (
      e.charAt(t - 1) === "\r" &&
      u ===
        `
`
    )
      return t - 2;
    if (
      u ===
        `
` ||
      u === "\r" ||
      u === "\u2028" ||
      u === "\u2029"
    )
      return t - 1;
  } else {
    if (
      u === "\r" &&
      e.charAt(t + 1) ===
        `
`
    )
      return t + 2;
    if (
      u ===
        `
` ||
      u === "\r" ||
      u === "\u2028" ||
      u === "\u2029"
    )
      return t + 1;
  }
  return t;
}
var Ee = zp;
function Gp(e, t, r = {}) {
  let n = he(e, r.backwards ? t - 1 : t, r),
    u = Ee(e, n, r);
  return n !== u;
}
var le = Gp;
function Kp(e) {
  return Array.isArray(e) && e.length > 0;
}
var Jp = Kp;
function Yp(e) {
  return e !== null && typeof e == "object";
}
var Xp = Yp;
function* Pi(e, t) {
  let { getVisitorKeys: r, filter: n = () => !0 } = t,
    u = (i) => Xp(i) && n(i);
  for (let i of r(e)) {
    let a = e[i];
    if (Array.isArray(a)) for (let s of a) u(s) && (yield s);
    else u(a) && (yield a);
  }
}
function* Qp(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let u = r[n];
    for (let i of Pi(u, t)) yield i, r.push(i);
  }
}
function Zp(e) {
  let t = e.type || e.kind || "(unknown type)",
    r = String(
      e.name ||
        (e.id && (typeof e.id == "object" ? e.id.name : e.id)) ||
        (e.key && (typeof e.key == "object" ? e.key.name : e.key)) ||
        (e.value && (typeof e.value == "object" ? "" : String(e.value))) ||
        e.operator ||
        ""
    );
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function rn(e, t) {
  (e.comments ?? (e.comments = [])).push(t), (t.printed = !1), (t.nodeDescription = Zp(e));
}
function Ne(e, t) {
  (t.leading = !0), (t.trailing = !1), rn(e, t);
}
function Et(e, t, r) {
  (t.leading = !1), (t.trailing = !1), r && (t.marker = r), rn(e, t);
}
function qe(e, t) {
  (t.leading = !1), (t.trailing = !0), rn(e, t);
}
var pr = new WeakMap();
function nn(e, t) {
  if (pr.has(e)) return pr.get(e);
  let {
    printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: u },
    locStart: i,
    locEnd: a,
  } = t;
  if (!n) return [];
  let s = ((r == null ? void 0 : r(e, t)) ?? [...Pi(e, { getVisitorKeys: er(u) })]).flatMap((o) => (n(o) ? [o] : nn(o, t)));
  return s.sort((o, l) => i(o) - i(l) || a(o) - a(l)), pr.set(e, s), s;
}
function Ii(e, t, r, n) {
  let { locStart: u, locEnd: i } = r,
    a = u(t),
    s = i(t),
    o = nn(e, r),
    l,
    c,
    D = 0,
    p = o.length;
  for (; D < p; ) {
    let h = (D + p) >> 1,
      d = o[h],
      m = u(d),
      g = i(d);
    if (m <= a && s <= g) return Ii(d, t, r, d);
    if (g <= a) {
      (l = d), (D = h + 1);
      continue;
    }
    if (s <= m) {
      (c = d), (p = h);
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: h } = n,
      d = dr(h, t, r);
    l && dr(h, l, r) !== d && (l = null), c && dr(h, c, r) !== d && (c = null);
  }
  return { enclosingNode: n, precedingNode: l, followingNode: c };
}
var hr = () => !1;
function e2(e, t) {
  let { comments: r } = e;
  if ((delete e.comments, !Jp(r) || !t.printer.canAttachComment)) return;
  let n = [],
    {
      locStart: u,
      locEnd: i,
      printer: { experimentalFeatures: { avoidAstMutation: a = !1 } = {}, handleComments: s = {} },
      originalText: o,
    } = t,
    { ownLine: l = hr, endOfLine: c = hr, remaining: D = hr } = s,
    p = r.map((h, d) => ({ ...Ii(e, h, t), comment: h, text: o, options: t, ast: e, isLastComment: r.length - 1 === d }));
  for (let [h, d] of p.entries()) {
    let { comment: m, precedingNode: g, enclosingNode: F, followingNode: f, text: C, options: y, ast: v, isLastComment: w } = d;
    if (
      y.parser === "json" ||
      y.parser === "json5" ||
      y.parser === "__js_expression" ||
      y.parser === "__ts_expression" ||
      y.parser === "__vue_expression" ||
      y.parser === "__vue_ts_expression"
    ) {
      if (u(m) - u(v) <= 0) {
        Ne(v, m);
        continue;
      }
      if (i(m) - i(v) >= 0) {
        qe(v, m);
        continue;
      }
    }
    let S;
    if ((a ? (S = [d]) : ((m.enclosingNode = F), (m.precedingNode = g), (m.followingNode = f), (S = [m, C, y, v, w])), t2(C, y, p, h)))
      (m.placement = "ownLine"), l(...S) || (f ? Ne(f, m) : g ? qe(g, m) : Et(F || v, m));
    else if (r2(C, y, p, h)) (m.placement = "endOfLine"), c(...S) || (g ? qe(g, m) : f ? Ne(f, m) : Et(F || v, m));
    else if (((m.placement = "remaining"), !D(...S)))
      if (g && f) {
        let x = n.length;
        x > 0 && n[x - 1].followingNode !== f && uu(n, y), n.push(d);
      } else g ? qe(g, m) : f ? Ne(f, m) : Et(F || v, m);
  }
  if ((uu(n, t), !a)) for (let h of r) delete h.precedingNode, delete h.enclosingNode, delete h.followingNode;
}
var Oi = (e) => !/[\S\n\u2028\u2029]/.test(e);
function t2(e, t, r, n) {
  let { comment: u, precedingNode: i } = r[n],
    { locStart: a, locEnd: s } = t,
    o = a(u);
  if (i)
    for (let l = n - 1; l >= 0; l--) {
      let { comment: c, precedingNode: D } = r[l];
      if (D !== i || !Oi(e.slice(s(c), o))) break;
      o = a(c);
    }
  return le(e, o, { backwards: !0 });
}
function r2(e, t, r, n) {
  let { comment: u, followingNode: i } = r[n],
    { locStart: a, locEnd: s } = t,
    o = s(u);
  if (i)
    for (let l = n + 1; l < r.length; l++) {
      let { comment: c, followingNode: D } = r[l];
      if (D !== i || !Oi(e.slice(o, a(c)))) break;
      o = s(c);
    }
  return le(e, o);
}
function uu(e, t) {
  var r, n;
  let u = e.length;
  if (u === 0) return;
  let { precedingNode: i, followingNode: a } = e[0],
    s = t.locStart(a),
    o;
  for (o = u; o > 0; --o) {
    let { comment: l, precedingNode: c, followingNode: D } = e[o - 1];
    kr.strictEqual(c, i), kr.strictEqual(D, a);
    let p = t.originalText.slice(t.locEnd(l), s);
    if (((n = (r = t.printer).isGap) == null ? void 0 : n.call(r, p, t)) ?? /^[\s(]*$/.test(p)) s = t.locStart(l);
    else break;
  }
  for (let [l, { comment: c }] of e.entries()) l < o ? qe(i, c) : Ne(a, c);
  for (let l of [i, a]) l.comments && l.comments.length > 1 && l.comments.sort((c, D) => t.locStart(c) - t.locStart(D));
  e.length = 0;
}
function dr(e, t, r) {
  let n = r.locStart(t) - 1;
  for (let u = 1; u < e.length; ++u) if (n < r.locStart(e[u])) return u - 1;
  return 0;
}
function n2(e, t) {
  let r = t - 1;
  (r = he(e, r, { backwards: !0 })), (r = Ee(e, r, { backwards: !0 })), (r = he(e, r, { backwards: !0 }));
  let n = Ee(e, r, { backwards: !0 });
  return r !== n;
}
var un = n2;
function Mi(e, t) {
  let r = e.node;
  return (r.printed = !0), t.printer.printComment(e, t);
}
function u2(e, t) {
  var r;
  let n = e.node,
    u = [Mi(e, t)],
    { printer: i, originalText: a, locStart: s, locEnd: o } = t;
  if ((r = i.isBlockComment) != null && r.call(i, n)) {
    let c = le(a, o(n)) ? (le(a, s(n), { backwards: !0 }) ? Ce : di) : " ";
    u.push(c);
  } else u.push(Ce);
  let l = Ee(a, he(a, o(n)));
  return l !== !1 && le(a, l) && u.push(Ce), u;
}
function i2(e, t, r) {
  var n;
  let u = e.node,
    i = Mi(e, t),
    { printer: a, originalText: s, locStart: o } = t,
    l = (n = a.isBlockComment) == null ? void 0 : n.call(a, u);
  if ((r != null && r.hasLineSuffix && !(r != null && r.isBlock)) || le(s, o(u), { backwards: !0 })) {
    let c = un(s, o(u));
    return { doc: yr([Ce, c ? Ce : "", i]), isBlock: l, hasLineSuffix: !0 };
  }
  return !l || (r != null && r.hasLineSuffix)
    ? { doc: [yr([" ", i]), Xt], isBlock: l, hasLineSuffix: !0 }
    : { doc: [" ", i], isBlock: l, hasLineSuffix: !1 };
}
function a2(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((s) => !n.has(s)).length === 0) return { leading: "", trailing: "" };
  let u = [],
    i = [],
    a;
  return (
    e.each(() => {
      let s = e.node;
      if (n != null && n.has(s)) return;
      let { leading: o, trailing: l } = s;
      o ? u.push(u2(e, t)) : l && ((a = i2(e, t, a)), i.push(a.doc));
    }, "comments"),
    { leading: u, trailing: i }
  );
}
function s2(e, t, r) {
  let { leading: n, trailing: u } = a2(e, r);
  return !n && !u ? t : Fi(t, (i) => [n, i, u]);
}
function o2(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
  for (let n of t) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
async function l2(e, t, r, n, u) {
  let {
    embeddedLanguageFormatting: i,
    printer: { embed: a, hasPrettierIgnore: s = () => !1, getVisitorKeys: o },
  } = r;
  if (!a || i !== "auto") return;
  if (a.length > 2)
    throw new Error(
      "printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed"
    );
  let l = er(a.getVisitorKeys ?? o),
    c = [];
  h();
  let D = e.stack;
  for (let { print: d, node: m, pathStack: g } of c)
    try {
      e.stack = g;
      let F = await d(p, t, e, r);
      F && u.set(m, F);
    } catch (F) {
      if (globalThis.PRETTIER_DEBUG) throw F;
    }
  e.stack = D;
  function p(d, m) {
    return c2(d, m, r, n);
  }
  function h() {
    let { node: d } = e;
    if (d === null || typeof d != "object" || s(e)) return;
    for (let g of l(d)) Array.isArray(d[g]) ? e.each(h, g) : e.call(h, g);
    let m = a(e, r);
    if (m) {
      if (typeof m == "function") {
        c.push({ print: m, node: d, pathStack: [...e.stack] });
        return;
      }
      u.set(d, m);
    }
  }
}
async function c2(e, t, r, n) {
  let u = await He({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: !0 }),
    { ast: i } = await at(e, u),
    a = await n(i, u);
  return Ci(a);
}
function p2(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: u, locEnd: i, [Symbol.for("printedComments")]: a } = t,
    { node: s } = e,
    o = u(s),
    l = i(s);
  for (let c of n) u(c) >= o && i(c) <= l && a.add(c);
  return r.slice(o, l);
}
var h2 = p2;
async function tr(e, t) {
  ({ ast: e } = await Ri(e, t));
  let r = new Map(),
    n = new Vp(e),
    u = new Map();
  await l2(n, a, t, tr, u);
  let i = await iu(n, t, a, void 0, u);
  return o2(t), i;
  function a(o, l) {
    return o === void 0 || o === n ? s(l) : Array.isArray(o) ? n.call(() => s(l), ...o) : n.call(() => s(l), o);
  }
  function s(o) {
    let l = n.node;
    if (l == null) return "";
    let c = l && typeof l == "object" && o === void 0;
    if (c && r.has(l)) return r.get(l);
    let D = iu(n, t, a, o, u);
    return c && r.set(l, D), D;
  }
}
function iu(e, t, r, n, u) {
  var i;
  let { node: a } = e,
    { printer: s } = t,
    o;
  return (
    (i = s.hasPrettierIgnore) != null && i.call(s, e) ? (o = h2(e, t)) : u.has(a) ? (o = u.get(a)) : (o = s.print(e, t, r, n)),
    a === t.cursorNode && (o = Fi(o, (l) => [Er, l, Er])),
    s.printComment && (!s.willPrintOwnComments || !s.willPrintOwnComments(e, t)) && (o = s2(e, o, t)),
    o
  );
}
async function Ri(e, t) {
  let r = e.comments ?? [];
  (t[Symbol.for("comments")] = r), (t[Symbol.for("tokens")] = e.tokens ?? []), (t[Symbol.for("printedComments")] = new Set()), e2(e, t);
  let {
    printer: { preprocess: n },
  } = t;
  return (e = n ? await n(e, t) : e), { ast: e, comments: r };
}
var d2 = ({ parser: e }) => e === "json" || e === "json5" || e === "json-stringify";
function D2(e, t) {
  let r = [e.node, ...e.parentNodes],
    n = new Set([t.node, ...t.parentNodes]);
  return r.find((u) => Hi.has(u.type) && n.has(u));
}
function au(e) {
  let t = e.length - 1;
  for (;;) {
    let r = e[t];
    if ((r == null ? void 0 : r.type) === "Program" || (r == null ? void 0 : r.type) === "File") t--;
    else break;
  }
  return e.slice(0, t + 1);
}
function f2(e, t, { locStart: r, locEnd: n }) {
  let u = e.node,
    i = t.node;
  if (u === i) return { startNode: u, endNode: i };
  let a = r(e.node);
  for (let o of au(t.parentNodes))
    if (r(o) >= a) i = o;
    else break;
  let s = n(t.node);
  for (let o of au(e.parentNodes)) {
    if (n(o) <= s) u = o;
    else break;
    if (u === i) break;
  }
  return { startNode: u, endNode: i };
}
function _r(e, t, r, n, u = [], i) {
  let { locStart: a, locEnd: s } = r,
    o = a(e),
    l = s(e);
  if (!(t > l || t < o || (i === "rangeEnd" && t === o) || (i === "rangeStart" && t === l))) {
    for (let c of nn(e, r)) {
      let D = _r(c, t, r, n, [e, ...u], i);
      if (D) return D;
    }
    if (!n || n(e, u[0])) return { node: e, parentNodes: u };
  }
}
function m2(e, t) {
  return (
    t !== "DeclareExportDeclaration" &&
    e !== "TypeParameterDeclaration" &&
    (e === "Directive" ||
      e === "TypeAlias" ||
      e === "TSExportAssignment" ||
      e.startsWith("Declare") ||
      e.startsWith("TSDeclare") ||
      e.endsWith("Statement") ||
      e.endsWith("Declaration"))
  );
}
var Hi = new Set([
    "JsonRoot",
    "ObjectExpression",
    "ArrayExpression",
    "StringLiteral",
    "NumericLiteral",
    "BooleanLiteral",
    "NullLiteral",
    "UnaryExpression",
    "TemplateLiteral",
  ]),
  g2 = new Set([
    "OperationDefinition",
    "FragmentDefinition",
    "VariableDefinition",
    "TypeExtensionDefinition",
    "ObjectTypeDefinition",
    "FieldDefinition",
    "DirectiveDefinition",
    "EnumTypeDefinition",
    "EnumValueDefinition",
    "InputValueDefinition",
    "InputObjectTypeDefinition",
    "SchemaDefinition",
    "OperationTypeDefinition",
    "InterfaceTypeDefinition",
    "UnionTypeDefinition",
    "ScalarTypeDefinition",
  ]);
function su(e, t, r) {
  if (!t) return !1;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return m2(t.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "json-stringify":
      return Hi.has(t.type);
    case "graphql":
      return g2.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function C2(e, t, r) {
  let { rangeStart: n, rangeEnd: u, locStart: i, locEnd: a } = t;
  kr.ok(u > n);
  let s = e.slice(n, u).search(/\S/),
    o = s === -1;
  if (!o) for (n += s; u > n && !/\S/.test(e[u - 1]); --u);
  let l = _r(r, n, t, (h, d) => su(t, h, d), [], "rangeStart"),
    c = o ? l : _r(r, u, t, (h) => su(t, h), [], "rangeEnd");
  if (!l || !c) return { rangeStart: 0, rangeEnd: 0 };
  let D, p;
  if (d2(t)) {
    let h = D2(l, c);
    (D = h), (p = h);
  } else ({ startNode: D, endNode: p } = f2(l, c, t));
  return { rangeStart: Math.min(i(D), i(p)), rangeEnd: Math.max(a(D), a(p)) };
}
function F2(e, t) {
  let { cursorOffset: r, locStart: n, locEnd: u } = t,
    i = er(t.printer.getVisitorKeys),
    a = (o) => n(o) <= r && u(o) >= r,
    s = e;
  for (let o of Qp(e, { getVisitorKeys: i, filter: a })) s = o;
  return s;
}
var v2 = F2,
  ji = "\uFEFF",
  ou = Symbol("cursor");
async function $i(e, t, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: u } = await at(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = v2(n, t));
  let i = await tr(n, t);
  r > 0 && (i = mi([Ce, i], r, t.tabWidth));
  let a = Zt(i, t);
  if (r > 0) {
    let o = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(o)), (a.formatted = o + Qr(t.endOfLine));
  }
  let s = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let o, l, c, D, p;
    if (
      (t.cursorNode && a.cursorNodeText
        ? ((o = t.locStart(t.cursorNode)),
          (l = u.slice(o, t.locEnd(t.cursorNode))),
          (c = t.cursorOffset - o),
          (D = a.cursorNodeStart),
          (p = a.cursorNodeText))
        : ((o = 0), (l = u), (c = t.cursorOffset), (D = 0), (p = a.formatted)),
      l === p)
    )
      return { formatted: a.formatted, cursorOffset: D + c, comments: s };
    let h = l.split("");
    h.splice(c, 0, ou);
    let d = p.split(""),
      m = (0, oc.diffArrays)(h, d),
      g = D;
    for (let F of m)
      if (F.removed) {
        if (F.value.includes(ou)) break;
      } else g += F.count;
    return { formatted: a.formatted, cursorOffset: g, comments: s };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: s };
}
async function y2(e, t) {
  let { ast: r, text: n } = await at(e, t),
    { rangeStart: u, rangeEnd: i } = C2(n, t, r),
    a = n.slice(u, i),
    s = Math.min(
      u,
      n.lastIndexOf(
        `
`,
        u
      ) + 1
    ),
    o = n.slice(s, u).match(/^\s*/)[0],
    l = tn(o, t.tabWidth),
    c = await $i(
      a,
      {
        ...t,
        rangeStart: 0,
        rangeEnd: Number.POSITIVE_INFINITY,
        cursorOffset: t.cursorOffset > u && t.cursorOffset <= i ? t.cursorOffset - u : -1,
        endOfLine: "lf",
      },
      l
    ),
    D = c.formatted.trimEnd(),
    { cursorOffset: p } = t;
  p > i ? (p += D.length - a.length) : c.cursorOffset >= 0 && (p = c.cursorOffset + u);
  let h = n.slice(0, u) + D + n.slice(i);
  if (t.endOfLine !== "lf") {
    let d = Qr(t.endOfLine);
    p >= 0 &&
      d ===
        `\r
` &&
      (p += gi(
        h.slice(0, p),
        `
`
      )),
      (h = Yt(
        !1,
        h,
        `
`,
        d
      ));
  }
  return { formatted: h, cursorOffset: p, comments: c.comments };
}
function Dr(e, t, r) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function lu(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u } = t;
  return (r = Dr(e, r, -1)), (n = Dr(e, n, 0)), (u = Dr(e, u, e.length)), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: u };
}
function Wi(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i } = lu(e, t),
    a = e.charAt(0) === ji;
  if ((a && ((e = e.slice(1)), r--, n--, u--), i === "auto" && (i = kc(e)), e.includes("\r"))) {
    let s = (o) =>
      gi(
        e.slice(0, Math.max(o, 0)),
        `\r
`
      );
    (r -= s(r)), (n -= s(n)), (u -= s(u)), (e = _c(e));
  }
  return { hasBOM: a, text: e, options: lu(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i }) };
}
async function cu(e, t) {
  let r = await Bi(t);
  return !r.hasPragma || r.hasPragma(e);
}
async function Vi(e, t) {
  let { hasBOM: r, text: n, options: u } = Wi(e, await He(t));
  if ((u.rangeStart >= u.rangeEnd && n !== "") || (u.requirePragma && !(await cu(n, u))))
    return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let i;
  return (
    u.rangeStart > 0 || u.rangeEnd < n.length
      ? (i = await y2(n, u))
      : (!u.requirePragma && u.insertPragma && u.printer.insertPragma && !(await cu(n, u)) && (n = u.printer.insertPragma(n)),
        (i = await $i(n, u))),
    r && ((i.formatted = ji + i.formatted), i.cursorOffset >= 0 && i.cursorOffset++),
    i
  );
}
async function E2(e, t, r) {
  let { text: n, options: u } = Wi(e, await He(t)),
    i = await at(n, u);
  return r && (r.preprocessForPrint && (i.ast = await Ri(i.ast, u)), r.massage && (i.ast = Rp(i.ast, u))), i;
}
async function b2(e, t) {
  t = await He(t);
  let r = await tr(e, t);
  return Zt(r, t);
}
async function w2(e, t) {
  let r = Kc(e),
    { formatted: n } = await Vi(r, { ...t, parser: "__js_expression" });
  return n;
}
async function S2(e, t) {
  t = await He(t);
  let { ast: r } = await at(e, t);
  return tr(r, t);
}
async function A2(e, t) {
  return Zt(e, await He(t));
}
var Ui = {};
Kt(Ui, {
  addDanglingComment: () => Et,
  addLeadingComment: () => Ne,
  addTrailingComment: () => qe,
  getAlignmentSize: () => tn,
  getIndentSize: () => P2,
  getMaxContinuousCount: () => N2,
  getNextNonSpaceNonCommentCharacter: () => j2,
  getNextNonSpaceNonCommentCharacterIndex: () => U2,
  getStringWidth: () => Zr,
  hasNewline: () => le,
  hasNewlineInRange: () => O2,
  hasSpaces: () => R2,
  isNextLineEmpty: () => J2,
  isNextLineEmptyAfterIndex: () => ln,
  isPreviousLineEmpty: () => G2,
  makeString: () => W2,
  skip: () => st,
  skipEverythingButNewLine: () => qi,
  skipInlineComment: () => an,
  skipNewline: () => Ee,
  skipSpaces: () => he,
  skipToLineEnd: () => Ni,
  skipTrailingComment: () => sn,
  skipWhitespace: () => Up,
});
function k2(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
var an = k2;
function _2(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? qi(e, t) : t;
}
var sn = _2;
function B2(e, t) {
  let r = null,
    n = t;
  for (; n !== r; ) (r = n), (n = he(e, n)), (n = an(e, n)), (n = sn(e, n)), (n = Ee(e, n));
  return n;
}
var on = B2;
function x2(e, t) {
  let r = null,
    n = t;
  for (; n !== r; ) (r = n), (n = Ni(e, n)), (n = an(e, n)), (n = he(e, n));
  return (n = sn(e, n)), (n = Ee(e, n)), n !== !1 && le(e, n);
}
var ln = x2;
function T2(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function L2(e, t) {
  let r = e.match(new RegExp(`(${T2(t)})+`, "g"));
  return r === null ? 0 : r.reduce((n, u) => Math.max(n, u.length / t.length), 0);
}
var N2 = L2;
function q2(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : tn(e.slice(r + 1).match(/^[\t ]*/)[0], t);
}
var P2 = q2;
function I2(e, t, r) {
  for (let n = t; n < r; ++n)
    if (
      e.charAt(n) ===
      `
`
    )
      return !0;
  return !1;
}
var O2 = I2;
function M2(e, t, r = {}) {
  return he(e, r.backwards ? t - 1 : t, r) !== t;
}
var R2 = M2;
function H2(e, t) {
  let r = on(e, t);
  return r === !1 ? "" : e.charAt(r);
}
var j2 = H2;
function $2(e, t, r) {
  let n = t === '"' ? "'" : '"',
    u = Yt(!1, e, /\\(.)|(["'])/gs, (i, a, s) =>
      a === n ? a : s === t ? "\\" + s : s || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(a) ? a : "\\" + a)
    );
  return t + u + t;
}
var W2 = $2;
function V2(e, t, r) {
  return on(e, r(t));
}
function U2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? on(e, t) : V2(...arguments);
}
function z2(e, t, r) {
  return un(e, r(t));
}
function G2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? un(e, t) : z2(...arguments);
}
function K2(e, t, r) {
  return ln(e, r(t));
}
function J2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? ln(e, t) : K2(...arguments);
}
var zi = {};
Kt(zi, { builders: () => Y2, printer: () => X2, utils: () => Q2 });
var Y2 = {
    join: fi,
    line: di,
    softline: wc,
    hardline: Ce,
    literalline: Di,
    group: ci,
    conditionalGroup: Fc,
    fill: pi,
    lineSuffix: yr,
    lineSuffixBoundary: Ec,
    cursor: Er,
    breakParent: Xt,
    ifBreak: vc,
    trim: bc,
    indent: _t,
    indentIfBreak: yc,
    align: Oe,
    addAlignmentToDoc: mi,
    markAsRoot: gc,
    dedentToRoot: mc,
    dedent: Cc,
    hardlineWithoutBreakParent: Xr,
    literallineWithoutBreakParent: hi,
    label: Sc,
    concat: (e) => e,
  },
  X2 = { printDocToString: Zt },
  Q2 = {
    willBreak: Oc,
    traverseDoc: Yr,
    findInDoc: en,
    mapDoc: Qt,
    removeLines: Hc,
    stripTrailingHardline: Ci,
    replaceEndOfLine: Wc,
    canBreak: Uc,
  },
  Z2 = "3.1.1";
function me(e, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {},
      u = n.plugins ?? [];
    return (r[t] = { ...n, plugins: Array.isArray(u) ? u : Object.values(u) }), e(...r);
  };
}
var Gi = me(Vi);
async function Ki(e, t) {
  let { formatted: r } = await Gi(e, { ...t, cursorOffset: -1 });
  return r;
}
async function eh(e, t) {
  return (await Ki(e, t)) === e;
}
var th = me(Ei, 0),
  rh = { parse: me(E2), formatAST: me(b2), formatDoc: me(w2), printToDoc: me(S2), printDocToString: me(A2) },
  nh = oi;
function uh(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var u = n.reduce(function (s, o) {
    var l = o.match(/\n([\t ]+|(?!\s).)/g);
    return l
      ? s.concat(
          l.map(function (c) {
            var D, p;
            return (p = (D = c.match(/[\t ]/g)) === null || D === void 0 ? void 0 : D.length) !== null && p !== void 0 ? p : 0;
          })
        )
      : s;
  }, []);
  if (u.length) {
    var i = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, u) +
        "}",
      "g"
    );
    n = n.map(function (s) {
      return s.replace(
        i,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var a = n[0];
  return (
    t.forEach(function (s, o) {
      var l = a.match(/(?:^|\n)( *)$/),
        c = l ? l[1] : "",
        D = s;
      typeof s == "string" &&
        s.includes(`
`) &&
        (D = String(s)
          .split(
            `
`
          )
          .map(function (p, h) {
            return h === 0 ? p : "" + c + p;
          }).join(`
`)),
        (a += D + n[o + 1]);
    }),
    a
  );
}
var Ch = ea(2)(async (e, t) =>
  e === !1
    ? t
    : e === "dedent" || e === !0
    ? uh(t)
    : (await nh.format(t, { parser: e, plugins: [Kl], htmlWhitespaceSensitivity: "ignore" })).trim()
);
export { Ch as formatter };
