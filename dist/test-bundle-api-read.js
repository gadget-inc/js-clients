var gt;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(gt || (gt = {}));
const Ur = {
  DateTime(e) {
    return new Date(e);
  }
};
class $r {
  constructor(t) {
    this.plan = t;
  }
  apply(t) {
    return Array.isArray(t) ? t.map((n) => this.hydrateObject(n)) : this.hydrateObject(t);
  }
  hydrateObject(t) {
    const n = { ...t };
    for (const [i, r] of Object.entries(this.plan)) {
      const a = n[i];
      a != null && (n[i] = Ur[r](a));
    }
    return n;
  }
}
function X(e, t) {
  if (!!!e)
    throw new Error(t);
}
function wt(e) {
  return typeof e == "object" && e !== null;
}
function Qi(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const qr = /\r\n|[\n\r]/g;
function Sn(e, t) {
  let n = 0, i = 1;
  for (const r of e.body.matchAll(qr)) {
    if (typeof r.index == "number" || Qi(!1), r.index >= t)
      break;
    n = r.index + r[0].length, i += 1;
  }
  return {
    line: i,
    column: t + 1 - n
  };
}
function Br(e) {
  return zi(
    e.source,
    Sn(e.source, e.start)
  );
}
function zi(e, t) {
  const n = e.locationOffset.column - 1, i = "".padStart(n) + e.body, r = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, l = t.column + o, u = `${e.name}:${s}:${l}
`, c = i.split(/\r\n|[\n\r]/g), f = c[r];
  if (f.length > 120) {
    const d = Math.floor(l / 80), h = l % 80, p = [];
    for (let b = 0; b < f.length; b += 80)
      p.push(f.slice(b, b + 80));
    return u + ri([
      [`${s} |`, p[0]],
      ...p.slice(1, d + 1).map((b) => ["|", b]),
      ["|", "^".padStart(h)],
      ["|", p[d + 1]]
    ]);
  }
  return u + ri([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[r - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(l)],
    [`${s + 1} |`, c[r + 1]]
  ]);
}
function ri(e) {
  const t = e.filter(([i, r]) => r !== void 0), n = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, r]) => i.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Lr(e) {
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
let F = class Wi extends Error {
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
    var i, r, a;
    const { nodes: s, source: o, positions: l, path: u, originalError: c, extensions: f } = Lr(n);
    super(t), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = c ?? void 0, this.nodes = ai(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = ai(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = o ?? (d == null || (r = d[0]) === null || r === void 0 ? void 0 : r.source), this.positions = l ?? (d == null ? void 0 : d.map((p) => p.start)), this.locations = l && o ? l.map((p) => Sn(o, p)) : d == null ? void 0 : d.map((p) => Sn(p.source, p.start));
    const h = wt(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = f ?? h) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Wi) : Object.defineProperty(this, "stack", {
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

` + Br(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + zi(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function ai(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Ji = {
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
}, Gr = new Set(Object.keys(Ji));
function si(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Gr.has(t);
}
var oi;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(oi || (oi = {}));
var Oe;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(Oe || (Oe = {}));
var j;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(j || (j = {}));
function ui(e) {
  return e === 9 || e === 32;
}
function Qr(e) {
  return e >= 48 && e <= 57;
}
function Hi(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function zr(e) {
  return Hi(e) || e === 95;
}
function Wr(e) {
  return Hi(e) || Qr(e) || e === 95;
}
function Jr(e, t) {
  const n = e.replace(/"""/g, '\\"""'), i = n.split(/\r\n|[\n\r]/g), r = i.length === 1, a = i.length > 1 && i.slice(1).every((h) => h.length === 0 || ui(h.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, l = e.endsWith("\\"), u = o || l, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!r || e.length > 70 || u || a || s);
  let f = "";
  const d = r && ui(e.charCodeAt(0));
  return (c && !d || a) && (f += `
`), f += n, (c || u) && (f += `
`), '"""' + f + '"""';
}
const Hr = 10, Yi = 2;
function R(e) {
  return en(e, []);
}
function en(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Yr(e, t);
    default:
      return String(e);
  }
}
function Yr(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Kr(e)) {
    const i = e.toJSON();
    if (i !== e)
      return typeof i == "string" ? i : en(i, n);
  } else if (Array.isArray(e))
    return Zr(e, n);
  return Xr(e, n);
}
function Kr(e) {
  return typeof e.toJSON == "function";
}
function Xr(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Yi ? "[" + ea(e) + "]" : "{ " + n.map(
    ([r, a]) => r + ": " + en(a, t)
  ).join(", ") + " }";
}
function Zr(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Yi)
    return "[Array]";
  const n = Math.min(Hr, e.length), i = e.length - n, r = [];
  for (let a = 0; a < n; ++a)
    r.push(en(e[a], t));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function ea(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const $e = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(t, n) {
    return t instanceof n;
  } : function(t, n) {
    if (t instanceof n)
      return !0;
    if (typeof t == "object" && t !== null) {
      var i;
      const r = n.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in t ? t[Symbol.toStringTag] : (i = t.constructor) === null || i === void 0 ? void 0 : i.name
      );
      if (r === a) {
        const s = R(t);
        throw new Error(`Cannot use ${r} "${s}" from another module or realm.

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
), ta = 5;
function na(e, t) {
  const [n, i] = t ? [e, t] : [void 0, e];
  let r = " Did you mean ";
  n && (r += n + " ");
  const a = i.map((l) => `"${l}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return r + a[0] + "?";
    case 2:
      return r + a[0] + " or " + a[1] + "?";
  }
  const s = a.slice(0, ta), o = s.pop();
  return r + s.join(", ") + ", or " + o + "?";
}
function li(e) {
  return e;
}
function qn(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    n[t(i)] = i;
  return n;
}
function Bn(e, t, n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    i[t(r)] = n(r);
  return i;
}
function tn(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(e))
    n[i] = t(e[i], i);
  return n;
}
function ia(e, t) {
  let n = 0, i = 0;
  for (; n < e.length && i < t.length; ) {
    let r = e.charCodeAt(n), a = t.charCodeAt(i);
    if (jt(r) && jt(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + r - In, r = e.charCodeAt(n);
      while (jt(r) && s > 0);
      let o = 0;
      do
        ++i, o = o * 10 + a - In, a = t.charCodeAt(i);
      while (jt(a) && o > 0);
      if (s < o)
        return -1;
      if (s > o)
        return 1;
    } else {
      if (r < a)
        return -1;
      if (r > a)
        return 1;
      ++n, ++i;
    }
  }
  return e.length - t.length;
}
const In = 48, ra = 57;
function jt(e) {
  return !isNaN(e) && In <= e && e <= ra;
}
function aa(e, t) {
  const n = /* @__PURE__ */ Object.create(null), i = new sa(e), r = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = i.measure(a, r);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const o = n[a] - n[s];
    return o !== 0 ? o : ia(a, s);
  });
}
class sa {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = ci(this._inputLowerCase), this._rows = [
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0),
      new Array(t.length + 1).fill(0)
    ];
  }
  measure(t, n) {
    if (this._input === t)
      return 0;
    const i = t.toLowerCase();
    if (this._inputLowerCase === i)
      return 1;
    let r = ci(i), a = this._inputArray;
    if (r.length < a.length) {
      const c = r;
      r = a, a = c;
    }
    const s = r.length, o = a.length;
    if (s - o > n)
      return;
    const l = this._rows;
    for (let c = 0; c <= o; c++)
      l[0][c] = c;
    for (let c = 1; c <= s; c++) {
      const f = l[(c - 1) % 3], d = l[c % 3];
      let h = d[0] = c;
      for (let p = 1; p <= o; p++) {
        const b = r[c - 1] === a[p - 1] ? 0 : 1;
        let I = Math.min(
          f[p] + 1,
          // delete
          d[p - 1] + 1,
          // insert
          f[p - 1] + b
          // substitute
        );
        if (c > 1 && p > 1 && r[c - 1] === a[p - 2] && r[c - 2] === a[p - 1]) {
          const _ = l[(c - 2) % 3][p - 2];
          I = Math.min(I, _ + 1);
        }
        I < h && (h = I), d[p] = I;
      }
      if (h > n)
        return;
    }
    const u = l[s % 3][o];
    return u <= n ? u : void 0;
  }
}
function ci(e) {
  const t = e.length, n = new Array(t);
  for (let i = 0; i < t; ++i)
    n[i] = e.charCodeAt(i);
  return n;
}
function _e(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, i] of Object.entries(e))
    t[n] = i;
  return t;
}
function oa(e) {
  return `"${e.replace(ua, la)}"`;
}
const ua = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function la(e) {
  return ca[e.charCodeAt(0)];
}
const ca = [
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
], da = Object.freeze({});
function fa(e, t, n = Ji) {
  const i = /* @__PURE__ */ new Map();
  for (const _ of Object.values(j))
    i.set(_, pa(t, _));
  let r, a = Array.isArray(e), s = [e], o = -1, l = [], u = e, c, f;
  const d = [], h = [];
  do {
    o++;
    const _ = o === s.length, D = _ && l.length !== 0;
    if (_) {
      if (c = h.length === 0 ? void 0 : d[d.length - 1], u = f, f = h.pop(), D)
        if (a) {
          u = u.slice();
          let y = 0;
          for (const [w, g] of l) {
            const G = w - y;
            g === null ? (u.splice(G, 1), y++) : u[G] = g;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [y, w] of l)
            u[y] = w;
        }
      o = r.index, s = r.keys, l = r.edits, a = r.inArray, r = r.prev;
    } else if (f) {
      if (c = a ? o : s[o], u = f[c], u == null)
        continue;
      d.push(c);
    }
    let A;
    if (!Array.isArray(u)) {
      var p, b;
      si(u) || X(!1, `Invalid AST Node: ${R(u)}.`);
      const y = _ ? (p = i.get(u.kind)) === null || p === void 0 ? void 0 : p.leave : (b = i.get(u.kind)) === null || b === void 0 ? void 0 : b.enter;
      if (A = y == null ? void 0 : y.call(t, u, c, f, d, h), A === da)
        break;
      if (A === !1) {
        if (!_) {
          d.pop();
          continue;
        }
      } else if (A !== void 0 && (l.push([c, A]), !_))
        if (si(A))
          u = A;
        else {
          d.pop();
          continue;
        }
    }
    if (A === void 0 && D && l.push([c, u]), _)
      d.pop();
    else {
      var I;
      r = {
        inArray: a,
        index: o,
        keys: s,
        edits: l,
        prev: r
      }, a = Array.isArray(u), s = a ? u : (I = n[u.kind]) !== null && I !== void 0 ? I : [], o = -1, l = [], f && h.push(f), f = u;
    }
  } while (r !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function pa(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Me(e) {
  return fa(e, ya);
}
const ha = 80, ya = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => v(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = E("(", v(e.variableDefinitions, ", "), ")"), n = v(
        [
          e.operation,
          v([e.name, t]),
          v(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: i }) => e + ": " + t + E(" = ", n) + E(" ", v(i, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Te(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: i, selectionSet: r }) {
      const a = E("", e, ": ") + t;
      let s = a + E("(", v(n, ", "), ")");
      return s.length > ha && (s = a + E(`(
`, Bt(v(n, `
`)), `
)`)), v([s, v(i, " "), r], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + E(" ", v(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => v(
      [
        "...",
        E("on ", e),
        v(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: i, selectionSet: r }) => (
      // or removed in the future.
      `fragment ${e}${E("(", v(n, ", "), ")")} on ${t} ${E("", v(i, " "), " ")}` + r
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
    leave: ({ value: e, block: t }) => t ? Jr(e) : oa(e)
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
    leave: ({ values: e }) => "[" + v(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + v(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + E("(", v(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => E("", e, `
`) + v(["schema", v(t, " "), Te(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => E("", e, `
`) + v(["scalar", t, v(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) => E("", e, `
`) + v(
      [
        "type",
        t,
        E("implements ", v(n, " & ")),
        v(i, " "),
        Te(r)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: i, directives: r }) => E("", e, `
`) + t + (di(n) ? E(`(
`, Bt(v(n, `
`)), `
)`) : E("(", v(n, ", "), ")")) + ": " + i + E(" ", v(r, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: i, directives: r }) => E("", e, `
`) + v(
      [t + ": " + n, E("= ", i), v(r, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) => E("", e, `
`) + v(
      [
        "interface",
        t,
        E("implements ", v(n, " & ")),
        v(i, " "),
        Te(r)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: i }) => E("", e, `
`) + v(
      ["union", t, v(n, " "), E("= ", v(i, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: i }) => E("", e, `
`) + v(["enum", t, v(n, " "), Te(i)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => E("", e, `
`) + v([t, v(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: i }) => E("", e, `
`) + v(["input", t, v(n, " "), Te(i)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: i, locations: r }) => E("", e, `
`) + "directive @" + t + (di(n) ? E(`(
`, Bt(v(n, `
`)), `
)`) : E("(", v(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + v(r, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => v(
      ["extend schema", v(e, " "), Te(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => v(["extend scalar", e, v(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: i }) => v(
      [
        "extend type",
        e,
        E("implements ", v(t, " & ")),
        v(n, " "),
        Te(i)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: i }) => v(
      [
        "extend interface",
        e,
        E("implements ", v(t, " & ")),
        v(n, " "),
        Te(i)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => v(
      [
        "extend union",
        e,
        v(t, " "),
        E("= ", v(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => v(["extend enum", e, v(t, " "), Te(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => v(["extend input", e, v(t, " "), Te(n)], " ")
  }
};
function v(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((i) => i).join(t)) !== null && n !== void 0 ? n : "";
}
function Te(e) {
  return E(`{
`, Bt(v(e, `
`)), `
}`);
}
function E(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Bt(e) {
  return E("  ", e.replace(/\n/g, `
  `));
}
function di(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function wn(e, t) {
  switch (e.kind) {
    case j.NULL:
      return null;
    case j.INT:
      return parseInt(e.value, 10);
    case j.FLOAT:
      return parseFloat(e.value);
    case j.STRING:
    case j.ENUM:
    case j.BOOLEAN:
      return e.value;
    case j.LIST:
      return e.values.map(
        (n) => wn(n, t)
      );
    case j.OBJECT:
      return Bn(
        e.fields,
        (n) => n.name.value,
        (n) => wn(n.value, t)
      );
    case j.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function xe(e) {
  if (e != null || X(!1, "Must provide name."), typeof e == "string" || X(!1, "Expected name to be a string."), e.length === 0)
    throw new F("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!Wr(e.charCodeAt(t)))
      throw new F(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!zr(e.charCodeAt(0)))
    throw new F(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function ma(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new F(`Enum values cannot be named: ${e}`);
  return xe(e);
}
function Ki(e) {
  return Xi(e) || ga(e) || ba(e) || va(e) || Zi(e) || er(e) || tr(e) || je(e);
}
function Xi(e) {
  return $e(e, ut);
}
function ga(e) {
  return $e(e, Oa);
}
function ba(e) {
  return $e(e, Aa);
}
function va(e) {
  return $e(e, Na);
}
function Zi(e) {
  return $e(e, ka);
}
function er(e) {
  return $e(e, Pa);
}
function tr(e) {
  return $e(e, Ia);
}
function je(e) {
  return $e(e, nn);
}
function Sa(e) {
  return Xi(e) || Zi(e);
}
class Ia {
  constructor(t) {
    Ki(t) || X(!1, `Expected ${R(t)} to be a GraphQL type.`), this.ofType = t;
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
class nn {
  constructor(t) {
    wa(t) || X(
      !1,
      `Expected ${R(t)} to be a GraphQL nullable type.`
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
function wa(e) {
  return Ki(e) && !je(e);
}
function nr(e) {
  return typeof e == "function" ? e() : e;
}
function ir(e) {
  return typeof e == "function" ? e() : e;
}
class ut {
  constructor(t) {
    var n, i, r, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : li;
    this.name = xe(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (i = t.serialize) !== null && i !== void 0 ? i : li, this.parseValue = s, this.parseLiteral = (r = t.parseLiteral) !== null && r !== void 0 ? r : (o, l) => s(wn(o, l)), this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || X(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${R(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || X(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || X(
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
class Oa {
  constructor(t) {
    var n;
    this.name = xe(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => ar(t), this._interfaces = () => rr(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || X(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${R(t.isTypeOf)}.`
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
      fields: or(this.getFields()),
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
function rr(e) {
  var t;
  const n = nr(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || X(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function ar(e) {
  const t = ir(e.fields);
  return et(t) || X(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), tn(t, (n, i) => {
    var r;
    et(n) || X(
      !1,
      `${e.name}.${i} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || X(
      !1,
      `${e.name}.${i} field resolver must be a function if provided, but got: ${R(n.resolve)}.`
    );
    const a = (r = n.args) !== null && r !== void 0 ? r : {};
    return et(a) || X(
      !1,
      `${e.name}.${i} args must be an object with argument names as keys.`
    ), {
      name: xe(i),
      description: n.description,
      type: n.type,
      args: sr(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: _e(n.extensions),
      astNode: n.astNode
    };
  });
}
function sr(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: xe(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: _e(n.extensions),
    astNode: n.astNode
  }));
}
function et(e) {
  return wt(e) && !Array.isArray(e);
}
function or(e) {
  return tn(e, (t) => ({
    description: t.description,
    type: t.type,
    args: ur(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function ur(e) {
  return Bn(
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
class Aa {
  constructor(t) {
    var n;
    this.name = xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = ar.bind(void 0, t), this._interfaces = rr.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || X(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${R(t.resolveType)}.`
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
      fields: or(this.getFields()),
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
class Na {
  constructor(t) {
    var n;
    this.name = xe(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = Ea.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || X(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${R(t.resolveType)}.`
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
function Ea(e) {
  const t = nr(e.types);
  return Array.isArray(t) || X(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class ka {
  /* <T> */
  constructor(t) {
    var n;
    this.name = xe(t.name), this.description = t.description, this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = Ta(this.name, t.values), this._valueLookup = new Map(
      this._values.map((i) => [i.value, i])
    ), this._nameLookup = qn(this._values, (i) => i.name);
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
      throw new F(
        `Enum "${this.name}" cannot represent value: ${R(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const i = R(t);
      throw new F(
        `Enum "${this.name}" cannot represent non-string value: ${i}.` + Vt(this, i)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new F(
        `Value "${t}" does not exist in "${this.name}" enum.` + Vt(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== j.ENUM) {
      const r = Me(t);
      throw new F(
        `Enum "${this.name}" cannot represent non-enum value: ${r}.` + Vt(this, r),
        {
          nodes: t
        }
      );
    }
    const i = this.getValue(t.value);
    if (i == null) {
      const r = Me(t);
      throw new F(
        `Value "${r}" does not exist in "${this.name}" enum.` + Vt(this, r),
        {
          nodes: t
        }
      );
    }
    return i.value;
  }
  toConfig() {
    const t = Bn(
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
function Vt(e, t) {
  const n = e.getValues().map((r) => r.name), i = aa(t, n);
  return na("the enum value", i);
}
function Ta(e, t) {
  return et(t) || X(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, i]) => (et(i) || X(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${R(i)}.`
  ), {
    name: ma(n),
    description: i.description,
    value: i.value !== void 0 ? i.value : n,
    deprecationReason: i.deprecationReason,
    extensions: _e(i.extensions),
    astNode: i.astNode
  }));
}
class Pa {
  constructor(t) {
    var n;
    this.name = xe(t.name), this.description = t.description, this.extensions = _e(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = _a.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = tn(this.getFields(), (n) => ({
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
function _a(e) {
  const t = ir(e.fields);
  return et(t) || X(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), tn(t, (n, i) => (!("resolve" in n) || X(
    !1,
    `${e.name}.${i} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: xe(i),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: _e(n.extensions),
    astNode: n.astNode
  }));
}
const fn = 2147483647, pn = -2147483648, xa = new ut({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = kt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new F(
        `Int cannot represent non-integer value: ${R(t)}`
      );
    if (n > fn || n < pn)
      throw new F(
        "Int cannot represent non 32-bit signed integer value: " + R(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new F(
        `Int cannot represent non-integer value: ${R(e)}`
      );
    if (e > fn || e < pn)
      throw new F(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.INT)
      throw new F(
        `Int cannot represent non-integer value: ${Me(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > fn || t < pn)
      throw new F(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new ut({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = kt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new F(
        `Float cannot represent non numeric value: ${R(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new F(
        `Float cannot represent non numeric value: ${R(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.FLOAT && e.kind !== j.INT)
      throw new F(
        `Float cannot represent non numeric value: ${Me(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const lr = new ut({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = kt(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new F(
      `String cannot represent value: ${R(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new F(
        `String cannot represent a non string value: ${R(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.STRING)
      throw new F(
        `String cannot represent a non string value: ${Me(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), Ln = new ut({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = kt(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new F(
      `Boolean cannot represent a non boolean value: ${R(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new F(
        `Boolean cannot represent a non boolean value: ${R(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.BOOLEAN)
      throw new F(
        `Boolean cannot represent a non boolean value: ${Me(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new ut({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = kt(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new F(
      `ID cannot represent value: ${R(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new F(`ID cannot represent value: ${R(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== j.STRING && e.kind !== j.INT)
      throw new F(
        "ID cannot represent a non-string and non-integer value: " + Me(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function kt(e) {
  if (wt(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!wt(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class Tt {
  constructor(t) {
    var n, i;
    this.name = xe(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = _e(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || X(!1, `@${t.name} locations must be an Array.`);
    const r = (i = t.args) !== null && i !== void 0 ? i : {};
    wt(r) && !Array.isArray(r) || X(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = sr(r);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: ur(this.args),
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
new Tt({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new nn(Ln),
      description: "Included when true."
    }
  }
});
new Tt({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    Oe.FIELD,
    Oe.FRAGMENT_SPREAD,
    Oe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new nn(Ln),
      description: "Skipped when true."
    }
  }
});
const Fa = "No longer supported";
new Tt({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    Oe.FIELD_DEFINITION,
    Oe.ARGUMENT_DEFINITION,
    Oe.INPUT_FIELD_DEFINITION,
    Oe.ENUM_VALUE
  ],
  args: {
    reason: {
      type: lr,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: Fa
    }
  }
});
new Tt({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [Oe.SCALAR],
  args: {
    url: {
      type: new nn(lr),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function yt(e, t, n) {
  if (e) {
    if (e.kind === j.VARIABLE) {
      const i = e.name.value;
      if (n == null || n[i] === void 0)
        return;
      const r = n[i];
      return r === null && je(t) ? void 0 : r;
    }
    if (je(t))
      return e.kind === j.NULL ? void 0 : yt(e, t.ofType, n);
    if (e.kind === j.NULL)
      return null;
    if (tr(t)) {
      const i = t.ofType;
      if (e.kind === j.LIST) {
        const a = [];
        for (const s of e.values)
          if (fi(s, n)) {
            if (je(i))
              return;
            a.push(null);
          } else {
            const o = yt(s, i, n);
            if (o === void 0)
              return;
            a.push(o);
          }
        return a;
      }
      const r = yt(e, i, n);
      return r === void 0 ? void 0 : [r];
    }
    if (er(t)) {
      if (e.kind !== j.OBJECT)
        return;
      const i = /* @__PURE__ */ Object.create(null), r = qn(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = r[a.name];
        if (!s || fi(s.value, n)) {
          if (a.defaultValue !== void 0)
            i[a.name] = a.defaultValue;
          else if (je(a.type))
            return;
          continue;
        }
        const o = yt(s.value, a.type, n);
        if (o === void 0)
          return;
        i[a.name] = o;
      }
      return i;
    }
    if (Sa(t)) {
      let i;
      try {
        i = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return i === void 0 ? void 0 : i;
    }
    Qi(!1, "Unexpected input type: " + R(t));
  }
}
function fi(e, t) {
  return e.kind === j.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function Da(e, t, n) {
  var i;
  const r = {}, a = (i = t.arguments) !== null && i !== void 0 ? i : [], s = qn(a, (o) => o.name.value);
  for (const o of e.args) {
    const l = o.name, u = o.type, c = s[l];
    if (!c) {
      if (o.defaultValue !== void 0)
        r[l] = o.defaultValue;
      else if (je(u))
        throw new F(
          `Argument "${l}" of required type "${R(u)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const f = c.value;
    let d = f.kind === j.NULL;
    if (f.kind === j.VARIABLE) {
      const p = f.name.value;
      if (n == null || !ja(n, p)) {
        if (o.defaultValue !== void 0)
          r[l] = o.defaultValue;
        else if (je(u))
          throw new F(
            `Argument "${l}" of required type "${R(u)}" was provided the variable "$${p}" which was not provided a runtime value.`,
            {
              nodes: f
            }
          );
        continue;
      }
      d = n[p] == null;
    }
    if (d && je(u))
      throw new F(
        `Argument "${l}" of non-null type "${R(u)}" must not be null.`,
        {
          nodes: f
        }
      );
    const h = yt(f, u, n);
    if (h === void 0)
      throw new F(
        `Argument "${l}" has invalid value ${Me(f)}.`,
        {
          nodes: f
        }
      );
    r[l] = h;
  }
  return r;
}
function Ca(e, t, n) {
  var i;
  const r = (i = t.directives) === null || i === void 0 ? void 0 : i.find(
    (a) => a.name.value === e.name
  );
  if (r)
    return Da(e, r, n);
}
function ja(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const Va = new Tt({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [Oe.QUERY],
  args: {
    if: {
      type: Ln,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: xa,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), cr = (e) => e == null, Ra = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((i) => i.name.value === "live");
  return cr(n) ? null : n;
}, Ma = (e, t) => {
  var n;
  const i = Ca(Va, { directives: [e] }, t);
  return {
    isLive: (i == null ? void 0 : i.if) === !0,
    throttleValue: (n = i == null ? void 0 : i.throttle) !== null && n !== void 0 ? n : null
  };
}, Ua = (e, t) => {
  const n = Ra(e);
  return cr(n) ? !1 : Ma(n, t).isLive;
};
function $a(e) {
  const t = {
    left: e.left,
    delta: e.delta,
    children: void 0,
    name: void 0,
    nested: !1,
    stopped: !1
  };
  function n(i) {
    var r;
    const a = [
      qa,
      Ba,
      La,
      Ga,
      Qa
    ];
    for (const s of a)
      if (s(i), i.stopped) {
        i.stopped = !1;
        break;
      }
    if (i.children)
      for (const s of i.children)
        n(s), i.result = (r = i.result) !== null && r !== void 0 ? r : i.left, "result" in s ? i.result[s.name] = s.result : delete i.result[s.name];
  }
  return n(t), t.result;
}
function qa(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function Ba(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let i = 0; i < t; i++)
    n = e.children[i], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function La(e) {
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
function Ga(e) {
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
const pi = 3;
let hi = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function Qa(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, i = e.delta, r = e.left, a = [], s = [], o = [];
  for (t in i)
    if (t !== "_t")
      if (t[0] === "_")
        if (i[t][2] === 0 || i[t][2] === pi)
          a.push(parseInt(t.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${i[t][2]}`);
      else
        i[t].length === 1 ? s.push({
          index: parseInt(t, 10),
          value: i[t][0]
        }) : o.push({
          index: parseInt(t, 10),
          delta: i[t]
        });
  for (a = a.sort(hi.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = i[`_${n}`], f = r.splice(n, 1)[0];
    c[2] === pi && s.push({
      index: c[1],
      value: f
    });
  }
  s = s.sort(hi.numericallyBy("index"));
  let l = s.length;
  for (t = 0; t < l; t++) {
    let c = s[t];
    r.splice(c.index, 0, c.value);
  }
  let u = o.length;
  if (u > 0)
    for (t = 0; t < u; t++) {
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
const za = (e, t) => $a({
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
var On = function(e, t) {
  return On = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      i.hasOwnProperty(r) && (n[r] = i[r]);
  }, On(e, t);
};
function Wa(e, t) {
  On(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function it(e, t, n, i) {
  function r(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(c) {
      try {
        u(i.next(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      try {
        u(i.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? a(c.value) : r(c.value).then(o, l);
    }
    u((i = i.apply(e, t || [])).next());
  });
}
function Ue(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, r, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (i = 1, r && (a = u[0] & 2 ? r.return : u[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, u[1])).done)
          return a;
        switch (r = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, r = u[1], u = [0];
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
        u = [6, c], r = 0;
      } finally {
        i = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function lt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ot(e) {
  return this instanceof Ot ? (this.v = e, this) : new Ot(e);
}
function Ja(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(e, t || []), r, a = [];
  return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function s(d) {
    i[d] && (r[d] = function(h) {
      return new Promise(function(p, b) {
        a.push([d, h, p, b]) > 1 || o(d, h);
      });
    });
  }
  function o(d, h) {
    try {
      l(i[d](h));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function l(d) {
    d.value instanceof Ot ? Promise.resolve(d.value.v).then(u, c) : f(a[0][2], d);
  }
  function u(d) {
    o("next", d);
  }
  function c(d) {
    o("throw", d);
  }
  function f(d, h) {
    d(h), a.shift(), a.length && o(a[0][0], a[0][1]);
  }
}
var dr = (
  /** @class */
  function(e) {
    Wa(t, e);
    function t(n) {
      var i = e.call(this, n) || this;
      return Object.defineProperty(i, "name", {
        value: "RepeaterOverflowError",
        enumerable: !1
      }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(i, i.constructor.prototype) : i.__proto__ = i.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(i, i.constructor), i;
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
function An(e) {
  e != null && typeof e.then == "function" && e.then(zt, zt);
}
var hn = 0, yi = 1, ze = 2, Gt = 3, Nn = 4, Qt = 1024, zt = function() {
};
function tt(e) {
  var t = e.err, n = Promise.resolve(e.execution).then(function(i) {
    if (t != null)
      throw t;
    return i;
  });
  return e.err = void 0, e.execution = n.then(function() {
  }, function() {
  }), e.pending === void 0 ? n : e.pending.then(function() {
    return n;
  });
}
function Le(e, t) {
  var n = e.state >= Gt;
  return Promise.resolve(t).then(function(i) {
    return !n && e.state >= Nn ? tt(e).then(function(r) {
      return {
        value: r,
        done: !0
      };
    }) : { value: i, done: n };
  });
}
function Gn(e, t) {
  var n, i;
  if (!(e.state >= ze))
    if (e.state = ze, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      bt(e);
    else
      try {
        for (var r = lt(e.pushes), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          s.resolve();
        }
      } catch (o) {
        n = { error: o };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n)
            throw n.error;
        }
      }
}
function bt(e) {
  var t, n;
  if (!(e.state >= Gt)) {
    e.state < ze && Gn(e), e.state = Gt, e.buffer = void 0;
    try {
      for (var i = lt(e.nexts), r = i.next(); !r.done; r = i.next()) {
        var a = r.value, s = e.pending === void 0 ? tt(e) : e.pending.then(function() {
          return tt(e);
        });
        a.resolve(Le(e, s));
      }
    } catch (o) {
      t = { error: o };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    e.pushes = [], e.nexts = [];
  }
}
function mi(e) {
  e.state >= Nn || (e.state < Gt && bt(e), e.state = Nn);
}
function Ha(e, t) {
  if (An(t), e.pushes.length >= Qt)
    throw new dr("No more than " + Qt + " pending calls to push are allowed on a single repeater.");
  if (e.state >= ze)
    return Promise.resolve(void 0);
  var n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(function() {
    return t;
  });
  n = n.catch(function(l) {
    e.state < ze && (e.err = l), mi(e);
  });
  var i;
  if (e.nexts.length) {
    var r = e.nexts.shift();
    r.resolve(Le(e, n)), e.nexts.length ? i = Promise.resolve(e.nexts[0].value) : i = new Promise(function(l) {
      return e.onnext = l;
    });
  } else
    typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), i = Promise.resolve(void 0)) : i = new Promise(function(l) {
      return e.pushes.push({ resolve: l, value: n });
    });
  var a = !0, s = {}, o = i.catch(function(l) {
    if (a)
      throw l;
  });
  return s.then = function(l, u) {
    return a = !1, Promise.prototype.then.call(i, l, u);
  }, s.catch = function(l) {
    return a = !1, Promise.prototype.catch.call(i, l);
  }, s.finally = i.finally.bind(i), e.pending = n.then(function() {
    return o;
  }).catch(function(l) {
    e.err = l, mi(e);
  }), s;
}
function Ya(e) {
  var t = Gn.bind(null, e), n = new Promise(function(i) {
    return e.onstop = i;
  });
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function Ka(e) {
  if (!(e.state >= yi)) {
    e.state = yi;
    var t = Ha.bind(null, e), n = Ya(e);
    e.execution = new Promise(function(i) {
      return i(e.executor(t, n));
    }), e.execution.catch(function() {
      return Gn(e);
    });
  }
}
var Rt = /* @__PURE__ */ new WeakMap(), Pt = (
  /** @class */
  function() {
    function e(t, n) {
      Rt.set(this, {
        executor: t,
        buffer: n,
        err: void 0,
        state: hn,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: zt,
        onstop: zt
      });
    }
    return e.prototype.next = function(t) {
      An(t);
      var n = Rt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      if (n.nexts.length >= Qt)
        throw new dr("No more than " + Qt + " pending calls to next are allowed on a single repeater.");
      if (n.state <= hn && Ka(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
        var i = Le(n, n.buffer.remove());
        if (n.pushes.length) {
          var r = n.pushes.shift();
          n.buffer.add(r.value), n.onnext = r.resolve;
        }
        return i;
      } else if (n.pushes.length) {
        var a = n.pushes.shift();
        return n.onnext = a.resolve, Le(n, a.value);
      } else if (n.state >= ze)
        return bt(n), Le(n, tt(n));
      return new Promise(function(s) {
        return n.nexts.push({ resolve: s, value: t });
      });
    }, e.prototype.return = function(t) {
      An(t);
      var n = Rt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return bt(n), n.execution = Promise.resolve(n.execution).then(function() {
        return t;
      }), Le(n, tt(n));
    }, e.prototype.throw = function(t) {
      var n = Rt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return n.state <= hn || n.state >= ze || typeof n.buffer < "u" && !n.buffer.empty ? (bt(n), n.err == null && (n.err = t), Le(n, tt(n))) : this.next(Promise.reject(t));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = Xa, e.merge = Za, e.zip = es, e.latest = ts, e;
  }()
);
function rn(e, t) {
  var n, i, r = [], a = function(u) {
    u != null && typeof u[Symbol.asyncIterator] == "function" ? r.push(u[Symbol.asyncIterator]()) : u != null && typeof u[Symbol.iterator] == "function" ? r.push(u[Symbol.iterator]()) : r.push(function() {
      return Ja(this, arguments, function() {
        return Ue(this, function(d) {
          switch (d.label) {
            case 0:
              return t.yieldValues ? [4, Ot(u)] : [3, 3];
            case 1:
              return [4, d.sent()];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return t.returnValues ? [4, Ot(u)] : [3, 5];
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
    for (var s = lt(e), o = s.next(); !o.done; o = s.next()) {
      var l = o.value;
      a(l);
    }
  } catch (u) {
    n = { error: u };
  } finally {
    try {
      o && !o.done && (i = s.return) && i.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return r;
}
function Xa(e) {
  var t = this, n = rn(e, { returnValues: !0 });
  return new Pt(function(i, r) {
    return it(t, void 0, void 0, function() {
      var a, s, o, l, u, c;
      return Ue(this, function(f) {
        switch (f.label) {
          case 0:
            if (!n.length)
              return r(), [
                2
                /*return*/
              ];
            s = !1, r.then(function() {
              a(), s = !0;
            }), f.label = 1;
          case 1:
            f.trys.push([1, , 5, 7]), l = void 0, u = 0, c = function() {
              var d, h, p, b, I, _;
              return Ue(this, function(D) {
                switch (D.label) {
                  case 0:
                    d = u;
                    try {
                      for (h = (I = void 0, lt(n)), p = h.next(); !p.done; p = h.next())
                        b = p.value, Promise.resolve(b.next()).then(function(A) {
                          A.done ? (r(), o === void 0 && (o = A)) : u === d && (u++, a(A));
                        }, function(A) {
                          return r(A);
                        });
                    } catch (A) {
                      I = { error: A };
                    } finally {
                      try {
                        p && !p.done && (_ = h.return) && _.call(h);
                      } finally {
                        if (I)
                          throw I.error;
                      }
                    }
                    return [4, new Promise(function(A) {
                      return a = A;
                    })];
                  case 1:
                    return l = D.sent(), l === void 0 ? [3, 3] : [4, i(l.value)];
                  case 2:
                    D.sent(), D.label = 3;
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            }, f.label = 2;
          case 2:
            return s ? [3, 4] : [5, c()];
          case 3:
            return f.sent(), [3, 2];
          case 4:
            return [2, o && o.value];
          case 5:
            return r(), [4, Promise.race(n.map(function(d) {
              return d.return && d.return();
            }))];
          case 6:
            return f.sent(), [
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
function Za(e) {
  var t = this, n = rn(e, { yieldValues: !0 });
  return new Pt(function(i, r) {
    return it(t, void 0, void 0, function() {
      var a, s, o, l = this;
      return Ue(this, function(u) {
        switch (u.label) {
          case 0:
            if (!n.length)
              return r(), [
                2
                /*return*/
              ];
            a = [], s = !1, r.then(function() {
              var c, f;
              s = !0;
              try {
                for (var d = lt(a), h = d.next(); !h.done; h = d.next()) {
                  var p = h.value;
                  p();
                }
              } catch (b) {
                c = { error: b };
              } finally {
                try {
                  h && !h.done && (f = d.return) && f.call(d);
                } finally {
                  if (c)
                    throw c.error;
                }
              }
            }), u.label = 1;
          case 1:
            return u.trys.push([1, , 3, 4]), [4, Promise.all(n.map(function(c, f) {
              return it(l, void 0, void 0, function() {
                var d, h;
                return Ue(this, function(p) {
                  switch (p.label) {
                    case 0:
                      p.trys.push([0, , 6, 9]), p.label = 1;
                    case 1:
                      return s ? [3, 5] : (Promise.resolve(c.next()).then(function(b) {
                        return a[f](b);
                      }, function(b) {
                        return r(b);
                      }), [4, new Promise(function(b) {
                        a[f] = b;
                      })]);
                    case 2:
                      return d = p.sent(), d === void 0 ? [3, 4] : d.done ? (o = d, [
                        2
                        /*return*/
                      ]) : [4, i(d.value)];
                    case 3:
                      p.sent(), p.label = 4;
                    case 4:
                      return [3, 1];
                    case 5:
                      return [3, 9];
                    case 6:
                      return h = c.return, h ? [4, c.return()] : [3, 8];
                    case 7:
                      h = p.sent(), p.label = 8;
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
            return u.sent(), [2, o && o.value];
          case 3:
            return r(), [
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
function es(e) {
  var t = this, n = rn(e, { returnValues: !0 });
  return new Pt(function(i, r) {
    return it(t, void 0, void 0, function() {
      var a, s, o, l;
      return Ue(this, function(u) {
        switch (u.label) {
          case 0:
            if (!n.length)
              return r(), [2, []];
            s = !1, r.then(function() {
              a(), s = !0;
            }), u.label = 1;
          case 1:
            u.trys.push([1, , 6, 8]), u.label = 2;
          case 2:
            return s ? [3, 5] : (Promise.all(n.map(function(c) {
              return c.next();
            })).then(function(c) {
              return a(c);
            }, function(c) {
              return r(c);
            }), [4, new Promise(function(c) {
              return a = c;
            })]);
          case 3:
            return o = u.sent(), o === void 0 ? [
              2
              /*return*/
            ] : (l = o.map(function(c) {
              return c.value;
            }), o.some(function(c) {
              return c.done;
            }) ? [2, l] : [4, i(l)]);
          case 4:
            return u.sent(), [3, 2];
          case 5:
            return [3, 8];
          case 6:
            return r(), [4, Promise.all(n.map(function(c) {
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
function ts(e) {
  var t = this, n = rn(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new Pt(function(i, r) {
    return it(t, void 0, void 0, function() {
      var a, s, o, l, u, c = this;
      return Ue(this, function(f) {
        switch (f.label) {
          case 0:
            if (!n.length)
              return r(), [2, []];
            s = [], o = !1, r.then(function() {
              var d, h;
              a();
              try {
                for (var p = lt(s), b = p.next(); !b.done; b = p.next()) {
                  var I = b.value;
                  I();
                }
              } catch (_) {
                d = { error: _ };
              } finally {
                try {
                  b && !b.done && (h = p.return) && h.call(p);
                } finally {
                  if (d)
                    throw d.error;
                }
              }
              o = !0;
            }), f.label = 1;
          case 1:
            return f.trys.push([1, , 5, 7]), Promise.all(n.map(function(d) {
              return d.next();
            })).then(function(d) {
              return a(d);
            }, function(d) {
              return r(d);
            }), [4, new Promise(function(d) {
              return a = d;
            })];
          case 2:
            return l = f.sent(), l === void 0 ? [
              2
              /*return*/
            ] : (u = l.map(function(d) {
              return d.value;
            }), l.every(function(d) {
              return d.done;
            }) ? [2, u] : [4, i(u.slice())]);
          case 3:
            return f.sent(), [4, Promise.all(n.map(function(d, h) {
              return it(c, void 0, void 0, function() {
                var p;
                return Ue(this, function(b) {
                  switch (b.label) {
                    case 0:
                      if (l[h].done)
                        return [2, l[h].value];
                      b.label = 1;
                    case 1:
                      return o ? [3, 4] : (Promise.resolve(d.next()).then(function(I) {
                        return s[h](I);
                      }, function(I) {
                        return r(I);
                      }), [4, new Promise(function(I) {
                        return s[h] = I;
                      })]);
                    case 2:
                      return p = b.sent(), p === void 0 ? [2, l[h].value] : p.done ? [2, p.value] : (u[h] = p.value, [4, i(u.slice())]);
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
            return [2, f.sent()];
          case 5:
            return r(), [4, Promise.all(n.map(function(d) {
              return d.return && d.return();
            }))];
          case 6:
            return f.sent(), [
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
const ns = (e) => (t) => new Pt(async (n, i) => {
  const r = t[Symbol.asyncIterator]();
  i.then(() => {
    var l;
    return (l = r.return) === null || l === void 0 ? void 0 : l.call(r);
  });
  let a = null, s = 0, o;
  for (; (o = await r.next()).done === !1; ) {
    if ("revision" in o.value && o.value.revision) {
      const l = {};
      if (o.value.revision === 1) {
        if (!o.value.data)
          throw new Error("Missing data.");
        l.data = o.value.data, a = o.value.data, s = 1;
      } else {
        if (!a)
          throw new Error("No previousData available.");
        if (!o.value.patch)
          throw new Error("Missing patch.");
        if (s + 1 !== o.value.revision)
          throw new Error("Wrong revision received.");
        a = e(a, o.value.patch), l.data = { ...a }, s++;
      }
      o.value.extensions && (l.extensions = o.value.extensions), o.value.errors && (l.errors = o.value.errors), await n(l);
      continue;
    }
    await n(o.value);
  }
  i();
}), is = ns(za);
function rs(e, t, n) {
  const i = async function* () {
    yield* e;
  }(), r = i.return.bind(i);
  if (t && (i.return = (...a) => (t(), r(...a))), n) {
    const a = i.throw.bind(i);
    i.throw = (s) => (n(s), a(s));
  }
  return i;
}
function gi() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function as() {
  let e = {
    type: "running"
    /* running */
  }, t = gi();
  const n = [];
  function i(s) {
    e.type === "running" && (n.push(s), t.resolve(), t = gi());
  }
  const r = async function* () {
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
  }(), a = rs(r, () => {
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
    pushValue: i,
    asyncIterableIterator: a
  };
}
const ss = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = as(), i = e({
    next: (s) => {
      t(s);
    },
    complete: () => {
      n.return();
    },
    error: (s) => {
      n.throw(s);
    }
  }), r = n.return;
  let a;
  return n.return = () => (a === void 0 && (i(), a = r()), a), n;
};
function os(e, t) {
  return (async () => {
    try {
      for await (const i of e)
        t.next(i);
      t.complete();
    } catch (i) {
      t.error(i);
    }
  })(), () => {
    var i;
    (i = e.return) === null || i === void 0 || i.call(e);
  };
}
var Xe = {
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
class En extends Error {
  constructor(t, n, i, r, a, s, o) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), i && (this.source = i), r && (this.positions = r), s && (this.originalError = s);
    var l = o;
    if (!l && s) {
      var u = s.extensions;
      u && typeof u == "object" && (l = u);
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
var L, O;
function re(e) {
  return new En(`Syntax Error: Unexpected token at ${O} in ${e}`);
}
function Ae(e) {
  if (e.lastIndex = O, e.test(L))
    return L.slice(O, O = e.lastIndex);
}
var Mt = / +(?=[^\s])/y;
function us(e) {
  for (var t = e.split(`
`), n = "", i = 0, r = 0, a = t.length - 1, s = 0; s < t.length; s++)
    Mt.lastIndex = 0, Mt.test(t[s]) && (s && (!i || Mt.lastIndex < i) && (i = Mt.lastIndex), r = r || s, a = s);
  for (var o = r; o <= a; o++)
    o !== r && (n += `
`), n += t[o].slice(i).replace(/\\"""/g, '"""');
  return n;
}
function N() {
  for (var e = 0 | L.charCodeAt(O++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | L.charCodeAt(O++))
    if (e === 35)
      for (; (e = L.charCodeAt(O++)) !== 10 && e !== 13; )
        ;
  O--;
}
var fr = /[_A-Za-z]\w*/y;
function De() {
  var e;
  if (e = Ae(fr))
    return {
      kind: "Name",
      value: e
    };
}
var ls = /(?:null|true|false)/y, pr = /\$[_A-Za-z]\w*/y, cs = /-?\d+/y, ds = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, fs = /\\/g, ps = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, hs = /"(?:"|[^\r\n]*?[^\\]")/y;
function Wt(e) {
  var t, n;
  if (n = Ae(ls))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = Ae(pr)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = Ae(cs)) {
    var i = n;
    (n = Ae(ds)) ? t = {
      kind: "FloatValue",
      value: i + n
    } : t = {
      kind: "IntValue",
      value: i
    };
  } else if (n = Ae(fr))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = Ae(ps))
    t = {
      kind: "StringValue",
      value: us(n.slice(3, -3)),
      block: !0
    };
  else if (n = Ae(hs))
    t = {
      kind: "StringValue",
      value: fs.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if (L.charCodeAt(O) === 91) {
      O++, N();
      for (var o = []; s = Wt(a); )
        o.push(s);
      if (L.charCodeAt(O++) !== 93)
        throw re("ListValue");
      return N(), {
        kind: "ListValue",
        values: o
      };
    }
  }(e) || function(a) {
    if (L.charCodeAt(O) === 123) {
      O++, N();
      for (var s = [], o; o = De(); ) {
        if (N(), L.charCodeAt(O++) !== 58)
          throw re("ObjectField");
        N();
        var l = Wt(a);
        if (!l)
          throw re("ObjectField");
        s.push({
          kind: "ObjectField",
          name: o,
          value: l
        });
      }
      if (L.charCodeAt(O++) !== 125)
        throw re("ObjectValue");
      return N(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return N(), t;
}
function hr(e) {
  var t = [];
  if (N(), L.charCodeAt(O) === 40) {
    O++, N();
    for (var n; n = De(); ) {
      if (N(), L.charCodeAt(O++) !== 58)
        throw re("Argument");
      N();
      var i = Wt(e);
      if (!i)
        throw re("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: i
      });
    }
    if (!t.length || L.charCodeAt(O++) !== 41)
      throw re("Argument");
    N();
  }
  return t;
}
function rt(e) {
  var t = [];
  for (N(); L.charCodeAt(O) === 64; ) {
    O++;
    var n = De();
    if (!n)
      throw re("Directive");
    N(), t.push({
      kind: "Directive",
      name: n,
      arguments: hr(e)
    });
  }
  return t;
}
function ys() {
  var e = De();
  if (e) {
    N();
    var t;
    if (L.charCodeAt(O) === 58) {
      if (O++, N(), t = e, !(e = De()))
        throw re("Field");
      N();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: hr(!1),
      directives: rt(!1),
      selectionSet: an()
    };
  }
}
function yr() {
  var e;
  if (N(), L.charCodeAt(O) === 91) {
    O++, N();
    var t = yr();
    if (!t || L.charCodeAt(O++) !== 93)
      throw re("ListType");
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
    throw re("NamedType");
  return N(), L.charCodeAt(O) === 33 ? (O++, N(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var ms = /on/y;
function mr() {
  if (Ae(ms)) {
    N();
    var e = De();
    if (!e)
      throw re("NamedType");
    return N(), {
      kind: "NamedType",
      name: e
    };
  }
}
var gs = /\.\.\./y;
function bs() {
  if (Ae(gs)) {
    N();
    var e = O, t;
    if ((t = De()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: rt(!1)
      };
    O = e;
    var n = mr(), i = rt(!1), r = an();
    if (!r)
      throw re("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: i,
      selectionSet: r
    };
  }
}
function an() {
  var e;
  if (N(), L.charCodeAt(O) === 123) {
    O++, N();
    for (var t = []; e = bs() || ys(); )
      t.push(e);
    if (!t.length || L.charCodeAt(O++) !== 125)
      throw re("SelectionSet");
    return N(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var vs = /fragment/y;
function Ss() {
  if (Ae(vs)) {
    N();
    var e = De();
    if (!e)
      throw re("FragmentDefinition");
    N();
    var t = mr();
    if (!t)
      throw re("FragmentDefinition");
    var n = rt(!1), i = an();
    if (!i)
      throw re("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: i
    };
  }
}
var Is = /(?:query|mutation|subscription)/y;
function ws() {
  var e, t, n = [], i = [];
  (e = Ae(Is)) && (N(), t = De(), n = function() {
    var s, o = [];
    if (N(), L.charCodeAt(O) === 40) {
      for (O++, N(); s = Ae(pr); ) {
        if (N(), L.charCodeAt(O++) !== 58)
          throw re("VariableDefinition");
        var l = yr(), u = void 0;
        if (L.charCodeAt(O) === 61 && (O++, N(), !(u = Wt(!0))))
          throw re("VariableDefinition");
        N(), o.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: l,
          defaultValue: u,
          directives: rt(!0)
        });
      }
      if (L.charCodeAt(O++) !== 41)
        throw re("VariableDefinition");
      N();
    }
    return o;
  }(), i = rt(!1));
  var r = an();
  if (r)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: n,
      directives: i,
      selectionSet: r
    };
}
function Os(e, t) {
  return L = typeof e.body == "string" ? e.body : e, O = 0, function() {
    var i;
    N();
    for (var r = []; i = Ss() || ws(); )
      r.push(i);
    return {
      kind: "Document",
      definitions: r
    };
  }();
}
function As(e) {
  return JSON.stringify(e);
}
function Ns(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ee = (e) => !(!e || !e.length), me = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ee(e.variableDefinitions) && !Ee(e.directives))
      return me.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ee(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(me.VariableDefinition).join(", ") + ")"), Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), t + " " + me.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = me.Variable(e.variable) + ": " + ke(e.type);
    return e.defaultValue && (t += " = " + ke(e.defaultValue)), Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ee(e.arguments)) {
      var n = e.arguments.map(me.Argument), i = t + "(" + n.join(", ") + ")";
      t = i.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : i;
    }
    return Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), e.selectionSet ? t + " " + me.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Ns(e.value) : As(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ke).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(me.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ke(e.value),
  Document: (e) => Ee(e.definitions) ? e.definitions.map(ke).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ke).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ke(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ee(e.directives) && (t += " " + e.directives.map(me.Directive).join(" ")), t + " " + ke(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ee(e.arguments) && (t += "(" + e.arguments.map(me.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ke(e.type) + "]",
  NonNullType: (e) => ke(e.type) + "!"
};
function ke(e) {
  return me[e.kind] ? me[e.kind](e) : "";
}
var Qn = () => {
}, Ne = Qn;
function Fe(e) {
  return {
    tag: 0,
    0: e
  };
}
function _t(e) {
  return {
    tag: 1,
    0: e
  };
}
var Es = (e) => e;
function ye(e) {
  return (t) => (n) => {
    var i = Ne;
    t((r) => {
      r === 0 ? n(0) : r.tag === 0 ? (i = r[0], n(r)) : e(r[0]) ? n(r) : i(0);
    });
  };
}
function nt(e) {
  return (t) => (n) => t((i) => {
    i === 0 || i.tag === 0 ? n(i) : n(_t(e(i[0])));
  });
}
function At(e) {
  return (t) => (n) => {
    var i = [], r = Ne, a = !1, s = !1;
    t((o) => {
      s || (o === 0 ? (s = !0, i.length || n(0)) : o.tag === 0 ? r = o[0] : (a = !1, function(u) {
        var c = Ne;
        u((f) => {
          if (f === 0) {
            if (i.length) {
              var d = i.indexOf(c);
              d > -1 && (i = i.slice()).splice(d, 1), i.length || (s ? n(0) : a || (a = !0, r(0)));
            }
          } else
            f.tag === 0 ? (i.push(c = f[0]), c(0)) : i.length && (n(f), c(0));
        });
      }(e(o[0])), a || (a = !0, r(0))));
    }), n(Fe((o) => {
      if (o === 1) {
        s || (s = !0, r(1));
        for (var l = 0, u = i, c = i.length; l < c; l++)
          u[l](1);
        i.length = 0;
      } else {
        !s && !a ? (a = !0, r(0)) : a = !1;
        for (var f = 0, d = i, h = i.length; f < h; f++)
          d[f](0);
      }
    }));
  };
}
function ks(e) {
  return At(Es)(e);
}
function at(e) {
  return ks(xs(e));
}
function gr(e) {
  return (t) => (n) => {
    var i = !1;
    t((r) => {
      if (!i)
        if (r === 0)
          i = !0, n(0), e();
        else if (r.tag === 0) {
          var a = r[0];
          n(Fe((s) => {
            s === 1 ? (i = !0, a(1), e()) : a(s);
          }));
        } else
          n(r);
    });
  };
}
function sn(e) {
  return (t) => (n) => {
    var i = !1;
    t((r) => {
      if (!i)
        if (r === 0)
          i = !0, n(0);
        else if (r.tag === 0) {
          var a = r[0];
          n(Fe((s) => {
            s === 1 && (i = !0), a(s);
          }));
        } else
          e(r[0]), n(r);
    });
  };
}
function bi(e) {
  return (t) => (n) => t((i) => {
    i === 0 ? n(0) : i.tag === 0 ? (n(i), e()) : n(i);
  });
}
function Nt(e) {
  var t = [], n = Ne, i = !1;
  return (r) => {
    t.push(r), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, o = t, l = t.length; s < l; s++)
          o[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        i = !1;
        for (var u = 0, c = t, f = t.length; u < f; u++)
          c[u](a);
      }
    }), r(Fe((a) => {
      if (a === 1) {
        var s = t.indexOf(r);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
      } else
        i || (i = !0, n(0));
    }));
  };
}
function vi(e) {
  return (t) => (n) => {
    var i = Ne, r = Ne, a = !1, s = !1, o = !1, l = !1;
    t((u) => {
      l || (u === 0 ? (l = !0, o || n(0)) : u.tag === 0 ? i = u[0] : (o && (r(1), r = Ne), a ? a = !1 : (a = !0, i(0)), function(f) {
        o = !0, f((d) => {
          o && (d === 0 ? (o = !1, l ? n(0) : a || (a = !0, i(0))) : d.tag === 0 ? (s = !1, (r = d[0])(0)) : (n(d), s ? s = !1 : r(0)));
        });
      }(e(u[0]))));
    }), n(Fe((u) => {
      u === 1 ? (l || (l = !0, i(1)), o && (o = !1, r(1))) : (!l && !a && (a = !0, i(0)), o && !s && (s = !0, r(0)));
    }));
  };
}
function br(e) {
  return (t) => (n) => {
    var i = Ne, r = !1, a = 0;
    t((s) => {
      r || (s === 0 ? (r = !0, n(0)) : s.tag === 0 ? e <= 0 ? (r = !0, n(0), s[0](1)) : i = s[0] : a++ < e ? (n(s), !r && a >= e && (r = !0, n(0), i(1))) : n(s));
    }), n(Fe((s) => {
      s === 1 && !r ? (r = !0, i(1)) : s === 0 && !r && a < e && i(0);
    }));
  };
}
function zn(e) {
  return (t) => (n) => {
    var i = Ne, r = Ne, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, r(1), n(0)) : s.tag === 0 ? (i = s[0], e((o) => {
        o === 0 || (o.tag === 0 ? (r = o[0])(0) : (a = !0, r(1), i(1), n(0)));
      })) : n(s));
    }), n(Fe((s) => {
      s === 1 && !a ? (a = !0, i(1), r(1)) : a || i(0);
    }));
  };
}
function Ts(e, t) {
  return (n) => (i) => {
    var r = Ne, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, i(0)) : s.tag === 0 ? (r = s[0], i(s)) : e(s[0]) ? i(s) : (a = !0, t && i(s), i(0), r(1)));
    });
  };
}
function Ps(e) {
  return (t) => e()(t);
}
function vr(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), i = !1, r = !1, a = !1, s;
    t(Fe(async (o) => {
      if (o === 1)
        i = !0, n.return && n.return();
      else if (r)
        a = !0;
      else {
        for (a = r = !0; a && !i; )
          if ((s = await n.next()).done)
            i = !0, n.return && await n.return(), t(0);
          else
            try {
              a = !1, t(_t(s.value));
            } catch (l) {
              if (n.throw)
                (i = !!(await n.throw(l)).done) && t(0);
              else
                throw l;
            }
        r = !1;
      }
    }));
  };
}
function _s(e) {
  return e[Symbol.asyncIterator] ? vr(e) : (t) => {
    var n = e[Symbol.iterator](), i = !1, r = !1, a = !1, s;
    t(Fe((o) => {
      if (o === 1)
        i = !0, n.return && n.return();
      else if (r)
        a = !0;
      else {
        for (a = r = !0; a && !i; )
          if ((s = n.next()).done)
            i = !0, n.return && n.return(), t(0);
          else
            try {
              a = !1, t(_t(s.value));
            } catch (l) {
              if (n.throw)
                (i = !!n.throw(l).done) && t(0);
              else
                throw l;
            }
        r = !1;
      }
    }));
  };
}
var xs = _s;
function vt(e) {
  return (t) => {
    var n = !1;
    t(Fe((i) => {
      i === 1 ? n = !0 : n || (n = !0, t(_t(e)), t(0));
    }));
  };
}
function Wn(e) {
  return (t) => {
    var n = !1, i = e({
      next(r) {
        n || t(_t(r));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(Fe((r) => {
      r === 1 && !n && (n = !0, i());
    }));
  };
}
function Si() {
  var e, t;
  return {
    source: Nt(Wn((n) => (e = n.next, t = n.complete, Qn))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function Ii(e) {
  return Wn((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), Qn));
}
function Jt(e) {
  return (t) => {
    var n = Ne, i = !1;
    return t((r) => {
      r === 0 ? i = !0 : r.tag === 0 ? (n = r[0])(0) : i || (e(r[0]), n(0));
    }), {
      unsubscribe() {
        i || (i = !0, n(1));
      }
    };
  };
}
function Fs(e) {
  Jt((t) => {
  })(e);
}
function Ds(e) {
  return new Promise((t) => {
    var n = Ne, i;
    e((r) => {
      r === 0 ? Promise.resolve(i).then(t) : r.tag === 0 ? (n = r[0])(0) : (i = r[0], n(0));
    });
  });
}
var Cs = (...e) => {
  for (var t = e[0], n = 1, i = e.length; n < i; n++)
    t = e[n](t);
  return t;
}, js = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new En(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new En(e);
class xt extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(js), i = ((r, a) => {
      var s = "";
      if (r)
        return `[Network] ${r.message}`;
      if (a)
        for (var o of a)
          s && (s += `
`), s += `[GraphQL] ${o.message}`;
      return s;
    })(t.networkError, n);
    super(i), this.name = "CombinedError", this.message = i, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var kn = (e, t) => {
  for (var n = 0 | (t || 5381), i = 0, r = 0 | e.length; i < r; i++)
    n = (n << 5) + n + e.charCodeAt(i);
  return n;
}, Qe = /* @__PURE__ */ new Set(), wi = /* @__PURE__ */ new WeakMap(), Ye = (e) => {
  if (e === null || Qe.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Ye(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += Ye(n) || "null";
    return t += "]";
  } else if (Yt !== st && e instanceof Yt || Kt !== st && e instanceof Kt)
    return "null";
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var r = wi.get(e) || Math.random().toString(36).slice(2);
    return wi.set(e, r), Ye({
      __key: r
    });
  }
  Qe.add(e);
  var a = "{";
  for (var s of i) {
    var o = Ye(e[s]);
    o && (a.length > 1 && (a += ","), a += Ye(s) + ":" + o);
  }
  return Qe.delete(e), a += "}";
}, Tn = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || Qe.has(n)))
    if (Array.isArray(n))
      for (var i = 0, r = n.length; i < r; i++)
        Tn(e, `${t}.${i}`, n[i]);
    else if (n instanceof Yt || n instanceof Kt)
      e.set(t, n);
    else {
      Qe.add(n);
      for (var a of Object.keys(n))
        Tn(e, `${t}.${a}`, n[a]);
    }
}, Ht = (e) => (Qe.clear(), Ye(e));
class st {
}
var Yt = typeof File < "u" ? File : st, Kt = typeof Blob < "u" ? Blob : st, Vs = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Rs = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Ms = (e, t) => t % 2 == 0 ? e.replace(Rs, `
`) : e, Oi = (e) => e.split(Vs).map(Ms).join("").trim(), Ai = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Jn = (e) => {
  var t;
  return typeof e == "string" ? t = Oi(e) : e.loc && Lt.get(e.__key) === e ? t = e.loc.source.body : (t = Ai.get(e) || Oi(ke(e)), Ai.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ni = (e) => {
  var t = kn(Jn(e));
  if (e.definitions) {
    var n = Ir(e);
    n && (t = kn(`
# ${n}`, t));
  }
  return t;
}, Sr = (e) => {
  var t, n;
  return typeof e == "string" ? (t = Ni(e), n = Lt.get(t) || Os(e)) : (t = e.__key || Ni(e), n = Lt.get(t) || e), n.loc || Jn(n), n.__key = t, Lt.set(t, n), n;
}, yn = (e, t, n) => {
  var i = t || {}, r = Sr(e), a = Ht(i), s = r.__key;
  return a !== "{}" && (s = kn(a, s)), {
    key: s,
    query: r,
    variables: i,
    extensions: n
  };
}, Ir = (e) => {
  for (var t of e.definitions)
    if (t.kind === Xe.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Us = (e) => {
  for (var t of e.definitions)
    if (t.kind === Xe.OPERATION_DEFINITION)
      return t.operation;
}, Pn = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var i = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new xt({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? i : t.hasNext,
    stale: !1
  };
}, _n = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = _n(e[n], t[n]);
    return e;
  }
  return t;
}, xn = (e, t, n) => {
  var i = e.error ? e.error.graphQLErrors : [], r = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var o = {
    data: e.data
  };
  if (s)
    for (var l of s) {
      Array.isArray(l.errors) && i.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), r = !0);
      for (var u = "data", c = o, f = 0, d = l.path.length; f < d; u = l.path[f++])
        c = c[u] = Array.isArray(c[u]) ? [...c[u]] : {
          ...c[u]
        };
      if (l.items)
        for (var h = +u >= 0 ? u : 0, p = 0, b = l.items.length; p < b; p++)
          c[h + p] = _n(c[h + p], l.items[p]);
      else
        l.data !== void 0 && (c[u] = _n(c[u], l.data));
    }
  else
    o.data = t.data || e.data, i = t.errors || i;
  return {
    operation: e.operation,
    data: o.data,
    error: i.length ? new xt({
      graphQLErrors: i,
      response: n
    }) : void 0,
    extensions: r ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, wr = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new xt({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Or(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Jn(e.query),
    operationName: Ir(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var $s = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var i = new URL(e.context.url);
  for (var r in t) {
    var a = t[r];
    a && i.searchParams.set(r, typeof a == "object" ? Ht(a) : a);
  }
  var s = i.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, qs = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = Ht(t), i = ((o) => {
      var l = /* @__PURE__ */ new Map();
      return (Yt !== st || Kt !== st) && (Qe.clear(), Tn(l, "variables", o)), l;
    })(t.variables);
    if (i.size) {
      var r = new FormData();
      r.append("operations", n), r.append("map", Ht({
        ...[...i.keys()].map((o) => [o])
      }));
      var a = 0;
      for (var s of i.values())
        r.append("" + a++, s);
      return r;
    }
    return n;
  }
}, Bs = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var r in i.headers)
      n[r.toLowerCase()] = i.headers[r];
  var a = qs(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...i,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, Ls = typeof TextDecoder < "u" ? new TextDecoder() : null, Gs = /boundary="?([^=";]+)"?/i, Qs = /data: ?([^\n]+)/, Ei = (e) => e.constructor.name === "Buffer" ? e.toString() : Ls.decode(e);
async function* ki(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Ei(t);
  else {
    var n = e.body.getReader(), i;
    try {
      for (; !(i = await n.read()).done; )
        yield Ei(i.value);
    } finally {
      n.cancel();
    }
  }
}
async function* Ti(e, t) {
  var n = "", i;
  for await (var r of e)
    for (n += r; (i = n.indexOf(t)) > -1; )
      yield n.slice(0, i), n = n.slice(i + t.length);
}
async function* zs(e, t, n) {
  var i = !0, r = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", o;
    if (/multipart\/mixed/i.test(s))
      o = async function* (c, f) {
        var d = c.match(Gs), h = "--" + (d ? d[1] : "-"), p = !0, b;
        for await (var I of Ti(ki(f), `\r
` + h)) {
          if (p) {
            p = !1;
            var _ = I.indexOf(h);
            if (_ > -1)
              I = I.slice(_ + h.length);
            else
              continue;
          }
          try {
            yield b = JSON.parse(I.slice(I.indexOf(`\r
\r
`) + 4));
          } catch (D) {
            if (!b)
              throw D;
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
        var f;
        for await (var d of Ti(ki(c), `

`)) {
          var h = d.match(Qs);
          if (h) {
            var p = h[1];
            try {
              yield f = JSON.parse(p);
            } catch (b) {
              if (!f)
                throw b;
            }
            if (f && f.hasNext === !1)
              break;
          }
        }
        f && f.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(a);
    else if (!/text\//i.test(s))
      o = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of o)
      r = r ? xn(r, l, a) : Pn(e, l, a), i = !1, yield r, i = !0;
    r || (yield r = Pn(e, {}, a));
  } catch (u) {
    if (!i)
      throw u;
    yield wr(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function Ws(e, t, n) {
  var i;
  return typeof AbortController < "u" && (n.signal = (i = new AbortController()).signal), gr(() => {
    i && i.abort();
  })(ye((r) => !!r)(vr(zs(e, t, n))));
}
var Fn = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      Fn(n, t);
  else if (typeof e == "object" && e !== null)
    for (var i in e)
      i === "__typename" && typeof e[i] == "string" ? t.add(e[i]) : Fn(e[i], t);
  return t;
}, Dn = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var i of e.definitions) {
      var r = Dn(i);
      t = t || r !== i, n.push(r);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === Xe.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var o of e.selectionSet.selections || []) {
        s = s || o.kind === Xe.FIELD && o.name.value === "__typename" && !o.alias;
        var l = Dn(o);
        t = t || l !== o, a.push(l);
      }
      if (s || (t = !0, a.push({
        kind: Xe.FIELD,
        name: {
          kind: Xe.NAME,
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
}, Pi = /* @__PURE__ */ new Map(), Js = (e) => {
  var t = Sr(e), n = Pi.get(t.__key);
  return n || (Pi.set(t.__key, n = Dn(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, Cn = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((r) => Cn(r));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var i in e)
      i === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[i] = Cn(e[i]);
    return n;
  } else
    return e;
};
function _i(e) {
  var t = (n) => e(n);
  return t.toPromise = () => Ds(br(1)(ye((n) => !n.stale && !n.hasNext)(t))), t.then = (n, i) => t.toPromise().then(n, i), t.subscribe = (n) => Jt(n)(t), t;
}
function ot(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var xi = (e, t) => ot(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Hs = () => {
}, mn = ({ kind: e }) => e !== "mutation" && e !== "query", Ys = ({ forward: e, client: t, dispatchDebug: n }) => {
  var i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = (o) => {
    var l = ot(o.kind, o);
    return l.query = Js(o.query), l;
  }, s = (o) => o.kind === "query" && o.context.requestPolicy !== "network-only" && (o.context.requestPolicy === "cache-only" || i.has(o.key));
  return (o) => {
    var l = nt((c) => {
      var f = i.get(c.key);
      process.env.NODE_ENV !== "production" && n({
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
      var d = f;
      return process.env.NODE_ENV !== "production" && (d = {
        ...d,
        operation: process.env.NODE_ENV !== "production" ? xi(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (d.stale = !0, Fi(t, c)), d;
    })(ye((c) => !mn(c) && s(c))(o)), u = sn((c) => {
      var { operation: f } = c;
      if (f) {
        var d = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (d = ((g) => [...Fn(g, /* @__PURE__ */ new Set())])(c.data).concat(d)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var h = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && n({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${d}`,
            operation: f,
            data: {
              typenames: d,
              response: c
            },
            source: "cacheExchange"
          });
          for (var p = 0; p < d.length; p++) {
            var b = d[p], I = r.get(b);
            I || r.set(b, I = /* @__PURE__ */ new Set());
            for (var _ of I.values())
              h.add(_);
            I.clear();
          }
          for (var D of h.values())
            i.has(D) && (f = i.get(D).operation, i.delete(D), Fi(t, f));
        } else if (f.kind === "query" && c.data) {
          i.set(f.key, c);
          for (var A = 0; A < d.length; A++) {
            var y = d[A], w = r.get(y);
            w || r.set(y, w = /* @__PURE__ */ new Set()), w.add(f.key);
          }
        }
      }
    })(e(ye((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(nt((c) => process.env.NODE_ENV !== "production" ? xi(c, {
      cacheOutcome: "miss"
    }) : c)(at([nt(a)(ye((c) => !mn(c) && !s(c))(o)), ye((c) => mn(c))(o)])))));
    return at([l, u]);
  };
}, Fi = (e, t) => e.reexecuteOperation(ot(t.kind, t, {
  requestPolicy: "network-only"
})), gn = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: i, forward: r }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var o = At((u) => {
      var { key: c } = u, f = ye((d) => d.kind === "teardown" && d.key === c)(s);
      return zn(f)(((d) => {
        var h = e(Or(d), d);
        return Wn(({ next: p, complete: b }) => {
          var I = !1, _, D;
          return Promise.resolve().then(() => {
            I || (_ = h.subscribe({
              next(A) {
                p(D = D ? xn(D, A) : Pn(d, A));
              },
              error(A) {
                p(wr(d, A));
              },
              complete() {
                I || (I = !0, d.kind === "subscription" && i.reexecuteOperation(ot("teardown", d, d.context)), D && D.hasNext && p(xn(D, {
                  hasNext: !1
                })), b());
              }
            }));
          }), () => {
            I = !0, _ && _.unsubscribe();
          };
        });
      })(u));
    })(ye((u) => u.kind !== "teardown" && a(u))(s)), l = r(ye((u) => u.kind === "teardown" || !a(u))(s));
    return at([o, l]);
  };
}, Ks = ({ forward: e, dispatchDebug: t }) => (n) => {
  var i = At((a) => {
    var s = Or(a), o = $s(a, s), l = Bs(a, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: o,
        fetchOptions: l
      },
      source: "fetchExchange"
    });
    var u = zn(ye((c) => c.kind === "teardown" && c.key === a.key)(n))(Ws(a, o, l));
    return process.env.NODE_ENV !== "production" ? sn((c) => {
      var f = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: o,
          fetchOptions: l,
          value: f || c
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })(ye((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), r = e(ye((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return at([i, r]);
}, Xs = (e) => ({ client: t, forward: n, dispatchDebug: i }) => e.reduceRight((r, a) => {
  var s = !1;
  return a({
    client: t,
    forward(o) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return Nt(r(Nt(o)));
    },
    dispatchDebug(o) {
      process.env.NODE_ENV !== "production" && i({
        timestamp: Date.now(),
        source: a.name,
        ...o
      });
    }
  });
}, n), Ar = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: i }) => (r) => At((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? Ii(s) : vt(s);
})(i(At((a) => {
  var s = e && e(a) || a;
  return "then" in s ? Ii(s) : vt(s);
})(r))), Zs = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = sn((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var i = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: i,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(i);
  }
})(t)), ye((n) => !1)(t)), Di = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], o = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Si();
  function u(y) {
    (y.kind === "mutation" || y.kind === "teardown" || !a.has(y.key)) && (y.kind === "teardown" ? a.delete(y.key) : y.kind !== "mutation" && a.add(y.key), l.next(y));
  }
  var c = !1;
  function f(y) {
    if (y && u(y), !c) {
      for (c = !0; c && (y = s.shift()); )
        u(y);
      c = !1;
    }
  }
  var d = (y) => {
    var w = zn(ye((g) => g.kind === "teardown" && g.key === y.key)(l.source))(ye((g) => g.operation.kind === y.kind && g.operation.key === y.key && (!g.operation.context._instance || g.operation.context._instance === y.context._instance))(A));
    return y.kind !== "query" ? w = Ts((g) => !!g.hasNext, !0)(w) : w = vi((g) => {
      var G = vt(g);
      return g.stale || g.hasNext ? G : at([G, nt(() => (g.stale = !0, g))(br(1)(ye((We) => We.key === y.key)(l.source)))]);
    })(w), y.kind !== "mutation" ? w = gr(() => {
      a.delete(y.key), i.delete(y.key), r.delete(y.key), c = !1;
      for (var g = s.length - 1; g >= 0; g--)
        s[g].key === y.key && s.splice(g, 1);
      u(ot("teardown", y, y.context));
    })(sn((g) => {
      if (g.stale) {
        for (var G of s)
          if (G.key === g.operation.key) {
            a.delete(G.key);
            break;
          }
      } else
        g.hasNext || a.delete(y.key);
      i.set(y.key, g);
    })(w)) : w = bi(() => {
      u(y);
    })(w), t.maskTypename && (w = nt((g) => ({
      ...g,
      data: Cn(g.data, !0)
    }))(w)), Nt(w);
  }, h = this instanceof e ? this : Object.create(e.prototype), p = Object.assign(h, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(y) {
      y.kind === "teardown" ? f(y) : (y.kind === "mutation" || r.has(y.key)) && (s.push(y), Promise.resolve().then(f));
    },
    createRequestOperation(y, w, g) {
      g || (g = {});
      var G;
      if (process.env.NODE_ENV !== "production" && y !== "teardown" && (G = Us(w.query)) !== y)
        throw new Error(`Expected operation of type "${y}" but found "${G}"`);
      return ot(y, w, {
        _instance: y === "mutation" ? n = n + 1 | 0 : void 0,
        ...o,
        ...g,
        requestPolicy: g.requestPolicy || o.requestPolicy,
        suspense: g.suspense || g.suspense !== !1 && p.suspense
      });
    },
    executeRequestOperation(y) {
      return y.kind === "mutation" ? _i(d(y)) : _i(Ps(() => {
        var w = r.get(y.key);
        w || r.set(y.key, w = d(y)), w = bi(() => {
          f(y);
        })(w);
        var g = i.get(y.key);
        return y.kind === "query" && g && (g.stale || g.hasNext) ? vi(vt)(at([w, ye((G) => G === i.get(y.key))(vt(g))])) : w;
      }));
    },
    executeQuery(y, w) {
      var g = p.createRequestOperation("query", y, w);
      return p.executeRequestOperation(g);
    },
    executeSubscription(y, w) {
      var g = p.createRequestOperation("subscription", y, w);
      return p.executeRequestOperation(g);
    },
    executeMutation(y, w) {
      var g = p.createRequestOperation("mutation", y, w);
      return p.executeRequestOperation(g);
    },
    readQuery(y, w, g) {
      var G = null;
      return Jt((We) => {
        G = We;
      })(p.query(y, w, g)).unsubscribe(), G;
    },
    query: (y, w, g) => p.executeQuery(yn(y, w), g),
    subscription: (y, w, g) => p.executeSubscription(yn(y, w), g),
    mutation: (y, w, g) => p.executeMutation(yn(y, w), g)
  }), b = Hs;
  if (process.env.NODE_ENV !== "production") {
    var { next: I, source: _ } = Si();
    p.subscribeToDebugTarget = (y) => Jt(y)(_), b = I;
  }
  var D = Xs(t.exchanges), A = Nt(D({
    client: p,
    dispatchDebug: b,
    forward: Zs({
      dispatchDebug: b
    })
  })(l.source));
  return Fs(A), p;
};
function Se(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Be(e) {
  return Se(e) === "object";
}
function eo(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Ci(e, t) {
  return e.length < 124 ? e : t;
}
const to = "graphql-transport-ws";
var ve;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ve || (ve = {}));
var te;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(te || (te = {}));
function Nr(e) {
  if (!Be(e))
    throw new Error(`Message is expected to be an object, but got ${Se(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Se(e.type)}`);
  switch (e.type) {
    case te.ConnectionInit:
    case te.ConnectionAck:
    case te.Ping:
    case te.Pong: {
      if (e.payload != null && !Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case te.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Se(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Se(e.payload.query)}`);
      if (e.payload.variables != null && !Be(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Se(e.payload.variables)}`);
      if (e.payload.operationName != null && Se(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Se(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Be(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Se(e.payload.extensions)}`);
      break;
    }
    case te.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Be(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Se(e.payload)}`);
      break;
    }
    case te.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!eo(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case te.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Se(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function no(e, t) {
  return Nr(typeof e == "string" ? JSON.parse(e, t) : e);
}
function ht(e, t) {
  return Nr(e), JSON.stringify(e, t);
}
function io(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: i = !0,
    onNonLazyError: r = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: o,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: u = 5,
    retryWait: c = async function(ae) {
      let U = 1e3;
      for (let x = 0; x < ae; x++)
        U *= 2;
      await new Promise((x) => setTimeout(x, U + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = Ut,
    isFatalConnectionProblem: d,
    on: h,
    webSocketImpl: p,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: b = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ae) => {
        const U = Math.random() * 16 | 0;
        return (ae == "x" ? U : U & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: I,
    jsonMessageReviver: _
  } = e;
  let D;
  if (p) {
    if (!ao(p))
      throw new Error("Invalid WebSocket implementation provided");
    D = p;
  } else
    typeof WebSocket < "u" ? D = WebSocket : typeof global < "u" ? D = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (D = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!D)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const A = D, y = (() => {
    const k = (() => {
      const U = {};
      return {
        on(x, ee) {
          return U[x] = ee, () => {
            delete U[x];
          };
        },
        emit(x) {
          var ee;
          "id" in x && ((ee = U[x.id]) === null || ee === void 0 || ee.call(U, x));
        }
      };
    })(), ae = {
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
      on(U, x) {
        const ee = ae[U];
        return ee.push(x), () => {
          ee.splice(ee.indexOf(x), 1);
        };
      },
      emit(U, ...x) {
        for (const ee of [...ae[U]])
          ee(...x);
      }
    };
  })();
  function w(k) {
    const ae = [
      // errors are fatal and more critical than close events, throw them first
      y.on("error", (U) => {
        ae.forEach((x) => x()), k(U);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      y.on("closed", (U) => {
        ae.forEach((x) => x()), k(U);
      })
    ];
  }
  let g, G = 0, We, dn = !1, Dt = 0, ti = !1;
  async function ni() {
    clearTimeout(We);
    const [k, ae] = await (g ?? (g = new Promise((ee, qe) => (async () => {
      if (dn) {
        if (await c(Dt), !G)
          return g = void 0, qe({ code: 1e3, reason: "All Subscriptions Gone" });
        Dt++;
      }
      y.emit("connecting");
      const V = new A(typeof t == "function" ? await t() : t, to);
      let Je, pt;
      function Ct() {
        isFinite(s) && s > 0 && (clearTimeout(pt), pt = setTimeout(() => {
          V.readyState === A.OPEN && (V.send(ht({ type: te.Ping })), y.emit("ping", !1, void 0));
        }, s));
      }
      w((pe) => {
        g = void 0, clearTimeout(Je), clearTimeout(pt), qe(pe), Ut(pe) && pe.code === 4499 && (V.close(4499, "Terminated"), V.onerror = null, V.onclose = null);
      }), V.onerror = (pe) => y.emit("error", pe), V.onclose = (pe) => y.emit("closed", pe), V.onopen = async () => {
        try {
          y.emit("opened", V);
          const pe = typeof n == "function" ? await n() : n;
          if (V.readyState !== A.OPEN)
            return;
          V.send(ht(pe ? {
            type: te.ConnectionInit,
            payload: pe
          } : {
            type: te.ConnectionInit
            // payload is completely absent if not provided
          }, I)), isFinite(l) && l > 0 && (Je = setTimeout(() => {
            V.close(ve.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), Ct();
        } catch (pe) {
          y.emit("error", pe), V.close(ve.InternalClientError, Ci(pe instanceof Error ? pe.message : new Error(pe).message, "Internal client error"));
        }
      };
      let He = !1;
      V.onmessage = ({ data: pe }) => {
        try {
          const he = no(pe, _);
          if (y.emit("message", he), he.type === "ping" || he.type === "pong") {
            y.emit(he.type, !0, he.payload), he.type === "pong" ? Ct() : o || (V.send(ht(he.payload ? {
              type: te.Pong,
              payload: he.payload
            } : {
              type: te.Pong
              // payload is completely absent if not provided
            })), y.emit("pong", !1, he.payload));
            return;
          }
          if (He)
            return;
          if (he.type !== te.ConnectionAck)
            throw new Error(`First message cannot be of type ${he.type}`);
          clearTimeout(Je), He = !0, y.emit("connected", V, he.payload), dn = !1, Dt = 0, ee([
            V,
            new Promise((Bu, Mr) => w(Mr))
          ]);
        } catch (he) {
          V.onmessage = null, y.emit("error", he), V.close(ve.BadResponse, Ci(he instanceof Error ? he.message : new Error(he).message, "Bad response"));
        }
      };
    })())));
    k.readyState === A.CLOSING && await ae;
    let U = () => {
    };
    const x = new Promise((ee) => U = ee);
    return [
      k,
      U,
      Promise.race([
        // wait for
        x.then(() => {
          if (!G) {
            const ee = () => k.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? We = setTimeout(() => {
              k.readyState === A.OPEN && ee();
            }, a) : ee();
          }
        }),
        // or
        ae
      ])
    ];
  }
  function ii(k) {
    if (Ut(k) && (ro(k.code) || [
      ve.InternalServerError,
      ve.InternalClientError,
      ve.BadRequest,
      ve.BadResponse,
      ve.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ve.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ve.SubscriberAlreadyExists,
      ve.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(k.code)))
      throw k;
    if (ti)
      return !1;
    if (Ut(k) && k.code === 1e3)
      return G > 0;
    if (!u || Dt >= u || !f(k) || d != null && d(k))
      throw k;
    return dn = !0;
  }
  return i || (async () => {
    for (G++; ; )
      try {
        const [, , k] = await ni();
        await k;
      } catch (k) {
        try {
          if (!ii(k))
            return;
        } catch (ae) {
          return r == null ? void 0 : r(ae);
        }
      }
  })(), {
    on: y.on,
    subscribe(k, ae) {
      const U = b(k);
      let x = !1, ee = !1, qe = () => {
        G--, x = !0;
      };
      return (async () => {
        for (G++; ; )
          try {
            const [V, Je, pt] = await ni();
            if (x)
              return Je();
            const Ct = y.onMessage(U, (He) => {
              switch (He.type) {
                case te.Next: {
                  ae.next(He.payload);
                  return;
                }
                case te.Error: {
                  ee = !0, x = !0, ae.error(He.payload), qe();
                  return;
                }
                case te.Complete: {
                  x = !0, qe();
                  return;
                }
              }
            });
            V.send(ht({
              id: U,
              type: te.Subscribe,
              payload: k
            }, I)), qe = () => {
              !x && V.readyState === A.OPEN && V.send(ht({
                id: U,
                type: te.Complete
              }, I)), G--, x = !0, Je();
            }, await pt.finally(Ct);
            return;
          } catch (V) {
            if (!ii(V))
              return;
          }
      })().then(() => {
        ee || ae.complete();
      }).catch((V) => {
        ae.error(V);
      }), () => {
        x || qe();
      };
    },
    async dispose() {
      if (ti = !0, g) {
        const [k] = await g;
        k.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      g && y.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Ut(e) {
  return Be(e) && "code" in e && "reason" in e;
}
function ro(e) {
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
function ao(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Ke = null;
typeof WebSocket < "u" ? Ke = WebSocket : typeof MozWebSocket < "u" ? Ke = MozWebSocket : typeof global < "u" ? Ke = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Ke = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ke = self.WebSocket || self.MozWebSocket);
const so = Ke;
function we(e) {
  if (typeof e != "object")
    return e;
  var t, n, i = Object.prototype.toString.call(e);
  if (i === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = we(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: we(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = we(e[t]);
    }
    return n;
  }
  if (i === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = we(e[t]);
    return n;
  }
  return i === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(r) {
    n.add(we(r));
  }), n) : i === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(r, a) {
    n.set(we(a), we(r));
  }), n) : i === "[object Date]" ? /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : i === "[object DataView]" ? new e.constructor(we(e.buffer)) : i === "[object ArrayBuffer]" ? e.slice(0) : i.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var be;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(be || (be = {}));
class oo {
  constructor(t) {
    this.__gadget = {
      fields: {},
      instantiatedFields: {},
      persistedFields: {},
      fieldKeys: [],
      fieldKeysTracker: {},
      touched: !1
    }, this.empty = !1, this.__gadget.instantiatedFields = we(t), this.__gadget.persistedFields = we(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((i) => this.__gadget.fieldKeysTracker[i] = !0));
    const n = {
      get: (i, r) => {
        if (r in this)
          return this[r];
        if (r in i)
          return i[r];
      },
      set: (i, r, a) => (this.trackKey(r), i[r.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, n);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const n = t.toString();
    this.__gadget.fieldKeysTracker[n] || (this.__gadget.fieldKeysTracker[n] = !0, this.__gadget.fieldKeys.push(n));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = be.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((i) => !$t(n[i], this.__gadget.fields[i]));
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
  changes(t, n = be.SinceLoaded) {
    const r = (typeof t == "string" ? n : t || n) == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = r[t], s = this.__gadget.fields[t], o = !$t(s, a);
      return o ? { changed: o, current: s, previous: a } : { changed: o };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const o = this.__gadget.fieldKeys[s];
        $t(r[o], this.__gadget.fields[o]) || (a[o] = { current: this.__gadget.fields[o], previous: r[o] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = be.SinceLoaded) {
    const n = t == be.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, i = {};
    for (let r = 0; r < this.__gadget.fieldKeys.length; r++) {
      const a = this.__gadget.fieldKeys[r];
      $t(n[a], this.__gadget.fields[a]) || (i[a] = this.__gadget.fields[a]);
    }
    return i;
  }
  changed(t, n = be.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = be.SinceLoaded) {
    t == be.SinceLoaded ? this.__gadget.instantiatedFields = we(this.__gadget.fields) : t == be.SinceLastPersisted && (this.__gadget.persistedFields = we(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = be.SinceLoaded) {
    let n;
    t == be.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const i of this.__gadget.fieldKeys)
      n.includes(i) || delete this.__gadget.fields[i];
    t == be.SinceLoaded ? Object.assign(this.__gadget.fields, we(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, we(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Rn({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Er = oo;
class uo extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_INTERNAL_ERROR", this.name = "InternalError", this.statusCode = 500, this.causedByClient = !1;
  }
}
class jn extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_CLIENT_ERROR", this.name = "ClientError", this.statusCode = 500, this.causedByClient = !0;
  }
}
class on extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), this.code = n;
  }
}
class ji extends Error {
  constructor(t) {
    let n;
    Vn(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), this.code = "GGT_UNKNOWN", this.name = "UnexpectedCloseError", this.statusCode = 500, this.causedByClient = !1, this.event = t;
  }
}
class lo extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_WEBSOCKET_CONNECTION_TIMEOUT", this.name = "WebsocketConnectionTimeoutError", this.statusCode = 500, this.causedByClient = !1;
  }
}
class co extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_TOO_MANY_REQUESTS", this.name = "TooManyRequestsError", this.statusCode = 429, this.causedByClient = !1;
  }
}
class fo extends Error {
  constructor(t, n, i, r) {
    const a = n.slice(0, 3), s = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${i ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: o, message: l }) => `${o} ${l}`).join(", ")}${s}.`), this.code = "GGT_INVALID_RECORD", this.name = "InvalidRecordError", this.statusCode = 422, this.causedByClient = !0, this.validationErrors = n, this.modelApiIdentifier = i, this.record = r;
  }
}
class kr extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_NON_UNIQUE_DATA", this.name = "NonUniqueDataError", this.statusCode = 417, this.causedByClient = !1;
  }
}
class po extends Error {
  constructor() {
    super(...arguments), this.code = "GGT_RECORD_NOT_FOUND", this.name = "RecordNotFoundError", this.statusCode = 404, this.causedByClient = !1;
  }
}
class ho extends Error {
  constructor(t, n) {
    super(t.length > 1 ? "Multiple errors occurred" : t[0].message), this.errors = t, this.results = n, this.name = "ErrorGroup";
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
function Vi(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Xt = (e, t) => {
  const n = t.length;
  let i = 0;
  for (; e != null && i < n; )
    e = e[t[i++]];
  return i && i == n ? e : void 0;
}, Vn = (e) => (e == null ? void 0 : e.type) == "close", Ce = (e, t) => typeof e != "string" ? "" : un(e, t), Ri = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, un = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (i) => Ri(i)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (i) => i.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (i, r, a, s, o) => (r || (r = ""), "" + r + Ri(a))), n;
}, yo = (e) => `${un(e)}Sort`, mo = (e) => `${un(e)}Filter`, go = (e, t, n) => new kr(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Ve = (e, t, n = !1) => {
  var i;
  if (e.error)
    throw e.error instanceof xt && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((o) => "[Network] " + o.message).join(`
`)), e.error;
  const r = Xt(e.data, t), a = Xt(r, ["edges"]), s = a ?? r;
  if (r === void 0)
    throw new uo(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null || n && Array.isArray(s) && s.length === 0)
    throw new po(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return r;
}, St = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof xt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((r) => "[Network] " + r.message).join(`
`)), e.error;
  const i = Xt(e.data, t);
  return i ?? null;
}, Tr = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new fo(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new kr(e.message) : new on(e.message, e.code);
}, Ge = (e, t) => {
  const n = Ve(e, t);
  if (!n.success) {
    const i = n.errors && n.errors[0];
    throw i ? Tr(i) : new on("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return n;
}, Pr = (e) => {
  var t, n, i, r;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new $r((r = (i = e.data) === null || i === void 0 ? void 0 : i.gadgetMeta) === null || r === void 0 ? void 0 : r.hydrations);
}, It = (e, t) => {
  const n = Pr(e);
  return n && (t = n.apply(t)), new Er(t);
}, Hn = (e, t) => {
  const n = Pr(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((i) => new Er(i));
}, Zt = (e, t) => {
  const n = t.edges.map((i) => i.node);
  return Hn(e, n);
}, Rn = (e) => {
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
          const i = e[n];
          t[n] = i === void 0 ? null : Rn(i);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const i = Rn(e[n]);
          i !== void 0 && (t[n] = i);
        }
        return t;
      }
    }
  }
}, bn = "gstk", Mi = (e) => {
  try {
    const t = window[e];
    return t.setItem(bn, bn), t.removeItem(bn), !0;
  } catch {
    return !1;
  }
}, Ui = Object.prototype.toString, $i = Object.getPrototypeOf, qi = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, mt = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const i = Ui.call(e), r = Ui.call(t);
  let a, s, o;
  if (n.push(e, t), i != r || (a = qi(e), s = qi(t), a.length != s.length || a.some(function(l) {
    return !mt(e[l], t[l], n);
  })))
    return !1;
  switch (i.slice(8, -1)) {
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
        if (o = a.next(), !mt(o.value, s.next().value, n))
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
        if (!(!(o in e) && !(o in t)) && (o in e != o in t || !mt(e[o], t[o], n)))
          return !1;
      return !0;
    case "Object":
      return mt($i(e), $i(t), n);
    default:
      return !1;
  }
}, $t = (e, t) => mt(e, t, []);
class _r extends Error {
}
class bo {
  constructor(t, n) {
    this.client = t, this.subscriptionClient = n, this.open = !1;
  }
  /** Shut down this transaction by closing the connection to the backend. */
  close() {
    this.open && this.rollback().catch(() => null), this.subscriptionClient.dispose();
  }
  /** Explicitly roll back this transaction, preventing any of the changes made during it from being committed. */
  async rollback() {
    throw Ve(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new _r("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ve(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ve(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class vo {
  constructor() {
    this.values = {};
  }
  getItem(t) {
    return this.values[t] || null;
  }
  setItem(t, n) {
    this.values[t] = n;
  }
}
const So = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((i) => i.kind == "Field").name.value;
}, Bi = Ar({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = So(e.query) || "unknown");
  }
}), Io = Ar({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, n] = e.context.url.split("?"), i = new URLSearchParams(n);
        i.set("operation", e.context.operationName), e.context.url = `${t}?${i.toString()}`;
      } catch {
      }
  }
});
var Mn;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Mn || (Mn = {}));
const wo = 2, Oo = 4800, Ao = 1e4, No = [ve.ConnectionAcknowledgementTimeout, ve.ConnectionInitialisationTimeout], Li = Symbol.for("gadget/connection"), Eo = "token", ko = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var se;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(se || (se = {}));
class xr {
  constructor(t) {
    var n, i, r, a, s;
    if (this.options = t, this.baseSubscriptionClient = void 0, this.currentTransaction = null, this.authenticationMode = se.Anonymous, this.transaction = async (o, l) => {
      let u, c;
      if (l ? (u = l, c = o) : (u = o, c = {}), this.currentTransaction)
        return await u(this.currentTransaction);
      let f = null, d;
      try {
        f = await this.waitForOpenedConnection({
          isFatalConnectionProblem(b) {
            return console.warn("Transport error encountered during transaction processing", b), !0;
          },
          connectionAckWaitTimeout: Oo,
          ...c,
          lazy: !1,
          // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
          lazyCloseTimeout: 1e5,
          retryAttempts: 0
        });
        const h = new Di({
          url: "/-",
          requestPolicy: "network-only",
          exchanges: [
            ...this.exchanges.beforeAll,
            Bi,
            ...this.exchanges.beforeAsync,
            gn({
              forwardSubscription(b) {
                const I = { ...b, query: b.query || "" };
                return {
                  subscribe: (_) => ({
                    unsubscribe: f.subscribe(I, _)
                  })
                };
              },
              enableAllOperations: !0
            }),
            ...this.exchanges.afterAll
          ]
        });
        h[Li] = this, d = new bo(h, f), this.currentTransaction = d, await d.start();
        const p = await u(d);
        return await d.commit(), p;
      } catch (h) {
        try {
          d != null && d.open && await d.rollback();
        } catch (p) {
          p instanceof _r || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", p);
        }
        throw Vn(h) ? new ji(h) : h;
      } finally {
        await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
      }
    }, this.fetch = async (o, l = {}) => {
      var u;
      o = To(o, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(o) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == se.Custom && await this.options.authenticationMode.custom.processFetch(o, l));
      const c = await this._fetchImplementation(o, l);
      if (this.authenticationMode == se.BrowserSession) {
        const f = c.headers.get("x-set-authorization"), d = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
        d && this.sessionTokenStore.setItem(this.sessionStorageKey, d);
      }
      return c;
    }, !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...o) => {
      const { fetch: l } = await import("./browser-ponyfill-a950d05c.js").then((u) => u.b);
      return await l(...o);
    }, this.websocketImplementation = (i = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && i !== void 0 ? i : so, this.websocketsEndpoint = (r = t.websocketsEndpoint) !== null && r !== void 0 ? r : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Eo}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = se.InternalAuthToken : t.apiKey ? this.authenticationMode = se.APIKey : t.custom && (this.authenticationMode = se.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = se.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = se.BrowserSession;
    const n = !t || typeof t == "boolean" ? gt.Durable : t.storageType;
    let i;
    n == gt.Durable && Mi("localStorage") ? i = window.localStorage : n == gt.Session && Mi("sessionStorage") ? i = window.sessionStorage : i = new vo(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && i.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = i, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), Un(this.options.endpoint))
      return !!Un(n);
    const i = new URL(this.options.endpoint).host;
    return n.includes(i);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Bi, Io];
    typeof window < "u" && t.push(Ys), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      gn({
        forwardSubscription: (i) => ({
          subscribe: (r) => {
            const a = { ...i, query: i.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(a, r)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      gn({
        isSubscriptionOperation: (i) => i.query.definitions.some((r) => Ua(r, i.variables)),
        forwardSubscription: (i) => ({
          subscribe: (r) => {
            const a = { ...i, query: i.query || "" };
            return {
              unsubscribe: os(is(ss((s) => this.getBaseSubscriptionClient().subscribe(a, s))), r)
            };
          }
        })
      }),
      Ks,
      ...this.exchanges.afterAll
    );
    const n = new Di({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[Li] = this, n;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let n = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const i = new URLSearchParams();
      for (const [r, a] of Object.entries(t.urlParams))
        a && i.set(r, a);
      n += "?" + i.toString();
    }
    return io({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var i, r;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == se.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == se.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == se.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == se.Custom && await ((r = (i = this.options.authenticationMode) === null || i === void 0 ? void 0 : i.custom) === null || r === void 0 ? void 0 : r.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (i, r) => {
          var a, s, o, l, u, c;
          if (this.authenticationMode == se.BrowserSession && (r != null && r.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, r.sessionToken);
          }
          (l = (o = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || o === void 0 ? void 0 : o.connected) === null || l === void 0 || l.call(o, i, r), (c = (u = t == null ? void 0 : t.on) === null || u === void 0 ? void 0 : u.connected) === null || c === void 0 || c.call(u, i, r);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == se.InternalAuthToken)
      n.authorization = "Basic " + ko("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == se.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == se.BrowserSession) {
      const i = this.sessionTokenStore.getItem(this.sessionStorageKey);
      i && (n.authorization = `Session ${i}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), i = [], r = t.connectionAttempts || wo;
    const a = t.connectionGlobalTimeoutMs || Ao, s = () => {
      i.forEach((o) => o()), i = [];
    };
    return await new Promise((o, l) => {
      const u = setTimeout(() => {
        this.disposeClient(n), f(new lo("Timeout opening websocket connection to Gadget API"));
      }, a), c = (p) => {
        if (Vn(p)) {
          if (p.code == Mn.TooManyRequests)
            return s(), f(new co(p.reason));
          if (No.includes(p.code) && r > 0) {
            r -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), h();
            return;
          }
        }
        clearTimeout(u), l(new ji(p));
      }, f = (p) => {
        clearTimeout(u), l(p);
      }, d = () => {
        clearTimeout(u), o(n);
      }, h = () => {
        s(), i.push(n.on("connected", d)), i.push(n.on("closed", c)), i.push(n.on("error", f));
      };
      h();
    }).finally(s);
  }
  disposeClient(t) {
    const n = t.dispose();
    n && n.catch((i) => console.error(`Error closing SubscriptionClient: ${i.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
xr.version = "0.15.14";
function To(e, t) {
  if (typeof e != "string")
    return e;
  if (Un(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Un(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class Et extends Array {
  /** Internal method used to create a list. Should not be used by applications. */
  static boot(t, n, i) {
    const r = new Et();
    return r.push(...n), r.modelManager = t, r.pagination = i, Object.freeze(r), r;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new on("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new jn("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: n, last: i, before: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: n || i
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new jn("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: i, after: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: i || n
    });
  }
}
const $n = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof Kn) {
    let i = "";
    const r = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var o;
      return `${a}: ${s instanceof Xn ? `$${(o = s.name) !== null && o !== void 0 ? o : a}` : JSON.stringify(s)}`;
    });
    return r.length > 0 && (i = `(${r.join(", ")})`), n.subselection ? [`${t}${i} {`, ...$n(n.subselection), "}"] : `${t}${i}`;
  } else
    return [`${t} {`, ...$n(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Yn = (e) => {
  const t = {}, n = (i) => {
    let r = 1;
    if (t[i]) {
      for (; t[`${i}${r}`]; )
        r++;
      return `${i}${r}`;
    }
    return i;
  };
  return Object.entries(e).forEach(([i, r]) => {
    r instanceof Kn ? Object.entries(r.args).forEach(([a, s]) => {
      var o;
      s instanceof Xn && (t[(o = s.name) !== null && o !== void 0 ? o : n(a)] = s);
    }) : typeof r == "object" && r !== null && Object.assign(t, Yn(r));
  }), t;
}, Po = (e) => {
  const t = Yn(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([i, r]) => `$${i}: ${r.type}`).join(", ")})`;
};
class Kn {
  constructor(t, n) {
    this.args = t, this.subselection = n;
  }
}
class Xn {
  constructor(t, n, i) {
    this.type = t, this.name = n, this.value = i;
  }
  present() {
    return this.value != null;
  }
}
const ct = (e, t) => new Kn(e, t), fe = (e) => new Xn(e.type + (e.required ? "!" : ""), e.name, e.value), _o = (e) => {
  var t;
  const n = Po(e), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${i} {
${$n(e.fields).join(`
`)}
}`;
}, dt = (e) => {
  const t = Yn(e.fields);
  return {
    query: _o(e),
    variables: Object.entries(t ?? {}).reduce((n, [i, r]) => (typeof r.value < "u" && (n[i] = r.value), n), {})
  };
}, Ft = `
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
`, ft = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, xo = (e) => `
    query InternalFind${Ce(e)}($id: GadgetID!, $select: [String!]) {
      ${ft(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Fr = (e, t) => ({
  search: t != null && t.search ? fe({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? fe({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? fe({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? fe({ value: Dr(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), Fo = (e, t) => {
  const n = Ce(e), i = Fr(n, t);
  return dt({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: ct({
          ...i,
          first: fe({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, Do = (e, t) => {
  const n = Ce(e), i = Fr(n, t);
  return dt({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: ct({
          ...i,
          after: fe({ value: t == null ? void 0 : t.after, type: "String" }),
          before: fe({ value: t == null ? void 0 : t.before, type: "String" }),
          first: fe({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: fe({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, Co = (e) => {
  const t = Ce(e);
  return `
    ${Ft}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${ft(e)}
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
}, jo = (e, t) => {
  const n = Ce(e), i = Ce(t);
  return `
    ${Ft}

    mutation InternalBulkCreate${i}($records: [Internal${n}Input]!) {
      ${ft(e)}
      internal {
        bulkCreate${i}(${t}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${t}
        }
      }
    }
  `;
}, Vo = (e) => {
  const t = Ce(e);
  return `
    ${Ft}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${ft(e)}
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
}, Ro = (e) => {
  const t = Ce(e);
  return `
    ${Ft}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${ft(e)}
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
}, Mo = (e) => {
  const t = Ce(e);
  return `
    ${Ft}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${ft(e)}
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
class Pe {
  constructor(t, n, i) {
    this.apiIdentifier = t, this.connection = n, this.options = i, this.capitalizedApiIdentifier = un(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((i) => i === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let i = t;
    if (!this.validateRecord(t))
      throw new on(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
    return this.apiIdentifier in t && (i = i[this.apiIdentifier]), i;
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
  async findOne(t, n, i = !0) {
    const r = await this.connection.currentClient.query(xo(this.apiIdentifier), { id: t, select: Dr(n == null ? void 0 : n.select) }).toPromise(), s = (i ? Ve : St)(r, ["internal", this.apiIdentifier]);
    return It(r, s);
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
    const i = await this.findOne(t, n, !1);
    return i.isEmpty() ? null : i;
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
    const n = Do(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), r = St(i, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Zt(i, r);
    return Et.boot(this, a, { options: t, pageInfo: r.pageInfo });
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
    const i = Fo(this.apiIdentifier, t), r = await this.connection.currentClient.query(i.query, i.variables).toPromise();
    let a;
    n === !1 ? a = St(r, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ve(r, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = Zt(r, a);
    return Et.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(Co(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), i = Ge(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return It(n, i[this.apiIdentifier]);
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
      throw new jn("Cannot perform bulkCreate without a pluralApiIdentifier");
    const i = Ce(this.options.pluralApiIdentifier), r = await this.connection.currentClient.mutation(jo(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Ge(r, ["internal", `bulkCreate${i}`]);
    return Hn(r, a[this.options.pluralApiIdentifier]);
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
    Vi(t, "Can't update a record without an ID passed");
    const i = await this.connection.currentClient.mutation(Vo(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), r = Ge(i, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return It(i, r[this.apiIdentifier]);
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
    Vi(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(Ro(this.apiIdentifier), { id: t }).toPromise();
    Ge(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(Mo(this.apiIdentifier), t).toPromise();
    Ge(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Dr(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, i] of Object.entries(e))
    i && t.push(n);
  return t;
}
const Zn = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), ei = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, ln = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Uo = (e, t, n, i, r) => {
  const a = {};
  return typeof t < "u" && (a.id = fe({ type: "GadgetID!", value: t })), dt({
    type: "query",
    name: e,
    fields: {
      [e]: ct(a, ei((r == null ? void 0 : r.select) || n, !0)),
      ...Zn(i)
    },
    directives: ln(r)
  });
}, $o = (e, t, n, i, r, a) => Cr(e, i, r, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Cr = (e, t, n, i) => dt({
  type: "query",
  name: e,
  fields: {
    [e]: ct({
      after: fe({ value: i == null ? void 0 : i.after, type: "String" }),
      first: fe({ value: i == null ? void 0 : i.first, type: "Int" }),
      before: fe({ value: i == null ? void 0 : i.before, type: "String" }),
      last: fe({ value: i == null ? void 0 : i.last, type: "Int" }),
      sort: i != null && i.sort ? fe({ value: i.sort, type: `[${yo(n)}!]` }) : void 0,
      filter: i != null && i.filter ? fe({ value: i.filter, type: `[${mo(n)}!]` }) : void 0,
      search: i != null && i.search ? fe({ value: i.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: ei((i == null ? void 0 : i.select) || t, !0)
      }
    }),
    ...Zn(n)
  },
  directives: ln(i)
}), jr = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Vr = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, fe(n)])), qo = (e, t, n, i, r, a, s, o, l) => {
  const u = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: ct(Vr(r), {
      success: !0,
      errors: jr,
      [i]: u && !l ? ei(u, !0) : !1,
      [o ? "results" : "result"]: !!l
    })
  };
  s && (c = {
    [s]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...Zn(n)
    },
    directives: ln(a)
  };
  return dt(f);
}, Bo = (e, t, n, i) => {
  let r = {
    [e]: ct(Vr(t), {
      success: !0,
      errors: jr,
      result: !0
    })
  };
  return n && (r = {
    [n]: r
  }), dt({
    type: "mutation",
    name: e,
    fields: r,
    directives: ln(i)
  });
}, Z = async (e, t, n, i, r, a, s = !0) => {
  const o = Uo(t, n, i, r, a), l = await e.connection.currentClient.query(o.query, o.variables).toPromise(), c = (s ? Ve : St)(l, [t]);
  return It(l, c);
}, cn = async (e, t, n, i, r, a, s) => {
  const o = $o(t, n, i, r, a, s), l = await e.connection.currentClient.query(o.query, o.variables).toPromise(), u = Ve(l, [t]), c = Zt(l, u);
  if (c.length > 1)
    throw go(a, n, i);
  return c[0];
}, P = async (e, t, n, i, r, a) => {
  const s = Cr(t, n, i, r), o = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let l;
  a === !1 ? l = St(o, [t]) : l = Ve(o, [t], a);
  const u = Zt(o, l);
  return Et.boot(e, u, { options: r, pageInfo: l.pageInfo });
}, m = async (e, t, n, i, r, a, s, o, l, u) => {
  const c = qo(t, n, i, r, s, o, l, a, u), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), d = l ? [l, t] : [t];
  if (a) {
    const h = Xt(f.data, d), p = h[r] && n ? Hn(f, h[r]) : void 0;
    if (h.errors) {
      const b = h.errors.map((I) => Tr(I));
      throw new ho(b, p);
    }
    return p;
  } else {
    const h = Ge(f, d);
    return n == null ? void 0 : u ? h.result : It(f, h[r]);
  }
}, Gi = async (e, t, n, i) => {
  const r = Bo(t, n, i), a = await e.currentClient.mutation(r.query, r.variables).toPromise();
  return Ge(a, i ? [i, t] : [t]).result;
};
function S(e, t, n = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((s) => {
    var o;
    return !((o = e.paramOnlyVariables) != null && o.includes(s)) && s !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  const r = Object.entries(e.variables).find(([s, o]) => s === "id" && o.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      i = n;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [s, o] of Object.entries(n))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? i[s] = o : r && s === r[0] ? i.id = o : i[e.modelApiIdentifier][s] = o;
    }
  else
    i = n;
  return i.id ?? (i.id = t), i;
}
const Q = {
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
}, C = "user";
async function Lo(e, t) {
  const n = S(
    this.signUp,
    void 0,
    e
  );
  return await m(
    this,
    "signUpUser",
    Q,
    C,
    C,
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
async function Go(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateUser",
    Q,
    C,
    C,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      user: {
        value: i.user,
        required: !1,
        type: "UpdateUserInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Qo(e, t) {
  return await m(
    this,
    "deleteUser",
    null,
    C,
    C,
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
async function zo(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createUser",
    Q,
    C,
    C,
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
class Wo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "user",
        n,
        Q,
        C,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: C,
        defaultSelection: Q
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "user",
          n,
          Q,
          C,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Q
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "users",
        Q,
        "user",
        n
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: C,
        defaultSelection: Q
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "users",
        Q,
        C,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: C,
        defaultSelection: Q
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "users",
          Q,
          C,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: C,
        defaultSelection: Q
      }
    ), this.findByEmail = Object.assign(
      async (n, i) => await cn(
        this,
        "users",
        "email",
        n,
        Q,
        C,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: C,
        defaultSelection: Q
      }
    ), this.signUp = Object.assign(
      Lo,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: C,
        isBulk: !1,
        defaultSelection: Q,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.signUp,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkSignUpUsers",
          Q,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkSignUp.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkSignUpUsers",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: Q,
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
      Go,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: C,
        isBulk: !1,
        defaultSelection: Q,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateUsers",
          Q,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateUsers",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: Q,
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
      Qo,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: C,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: C,
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
      zo,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: C,
        isBulk: !1,
        defaultSelection: Q,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateUsers",
          Q,
          "user",
          "users",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateUsers",
        namespace: null,
        modelApiIdentifier: C,
        modelSelectionField: "users",
        isBulk: !0,
        defaultSelection: Q,
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
const Ie = {
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
}, ge = "session";
async function Jo(e, t) {
  const n = S(
    this.logInViaEmail,
    void 0,
    e
  );
  return await m(
    this,
    "logInViaEmail",
    Ie,
    ge,
    ge,
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
async function Ho(e) {
  return await m(
    this,
    "logOut",
    Ie,
    ge,
    ge,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class Yo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "session",
        n,
        Ie,
        ge,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: ge,
        defaultSelection: Ie
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "session",
          n,
          Ie,
          ge,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Ie
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "sessions",
        Ie,
        "session",
        n
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: ge,
        defaultSelection: Ie
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "sessions",
        Ie,
        ge,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: ge,
        defaultSelection: Ie
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "sessions",
          Ie,
          ge,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: ge,
        defaultSelection: Ie
      }
    ), this.logInViaEmail = Object.assign(
      Jo,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: ge,
        modelSelectionField: ge,
        isBulk: !1,
        defaultSelection: Ie,
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
      Ho,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: ge,
        modelSelectionField: ge,
        isBulk: !1,
        defaultSelection: Ie,
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
const oe = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
}, W = "productPairing";
async function Ko(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createProductPairing",
    oe,
    W,
    W,
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
async function Xo(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateProductPairing",
    oe,
    W,
    W,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      productPairing: {
        value: i.productPairing,
        required: !1,
        type: "UpdateProductPairingInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Zo(e, t) {
  return await m(
    this,
    "deleteProductPairing",
    null,
    W,
    W,
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
class eu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "productPairing",
        n,
        oe,
        W,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: W,
        defaultSelection: oe
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "productPairing",
          n,
          oe,
          W,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: oe
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "productPairings",
        oe,
        "productPairing",
        n
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: W,
        defaultSelection: oe
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "productPairings",
        oe,
        W,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: W,
        defaultSelection: oe
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "productPairings",
          oe,
          W,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: W,
        defaultSelection: oe
      }
    ), this.create = Object.assign(
      Ko,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: W,
        modelSelectionField: W,
        isBulk: !1,
        defaultSelection: oe,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateProductPairings",
          oe,
          "productPairing",
          "productPairings",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateProductPairings",
        namespace: null,
        modelApiIdentifier: W,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: oe,
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
      Xo,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: W,
        modelSelectionField: W,
        isBulk: !1,
        defaultSelection: oe,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateProductPairings",
          oe,
          "productPairing",
          "productPairings",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateProductPairings",
        namespace: null,
        modelApiIdentifier: W,
        modelSelectionField: "productPairings",
        isBulk: !0,
        defaultSelection: oe,
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
      Zo,
      {
        type: "action",
        operationName: "deleteProductPairing",
        namespace: null,
        modelApiIdentifier: W,
        modelSelectionField: W,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteProductPairings",
        namespace: null,
        modelApiIdentifier: W,
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
const ne = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, $ = "unambiguous";
async function tu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createUnambiguous",
    ne,
    $,
    $,
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
async function nu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateUnambiguous",
    ne,
    $,
    $,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      unambiguous: {
        value: i.unambiguous,
        required: !1,
        type: "UpdateUnambiguousInput"
      }
    },
    n,
    null,
    !1
  );
}
async function iu(e, t) {
  return await m(
    this,
    "deleteUnambiguous",
    null,
    $,
    $,
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
class ru {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "unambiguous",
        n,
        ne,
        $,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: $,
        defaultSelection: ne
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "unambiguous",
          n,
          ne,
          $,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: ne
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "unambiguouss",
        ne,
        "unambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: $,
        defaultSelection: ne
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "unambiguouss",
        ne,
        $,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: $,
        defaultSelection: ne
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "unambiguouss",
          ne,
          $,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: $,
        defaultSelection: ne
      }
    ), this.findById = Object.assign(
      async (n, i) => await cn(
        this,
        "unambiguouss",
        "id",
        n,
        ne,
        $,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: $,
        defaultSelection: ne
      }
    ), this.create = Object.assign(
      tu,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
        modelSelectionField: $,
        isBulk: !1,
        defaultSelection: ne,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateUnambiguous",
          ne,
          "unambiguous",
          "unambiguous",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: ne,
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
      nu,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
        modelSelectionField: $,
        isBulk: !1,
        defaultSelection: ne,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateUnambiguous",
          ne,
          "unambiguous",
          "unambiguous",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
        modelSelectionField: "unambiguous",
        isBulk: !0,
        defaultSelection: ne,
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
      iu,
      {
        type: "action",
        operationName: "deleteUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
        modelSelectionField: $,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteUnambiguous",
        namespace: null,
        modelApiIdentifier: $,
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
const ue = {
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
}, J = "shopifyProduct";
async function au(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createShopifyProduct",
    ue,
    J,
    J,
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
async function su(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateShopifyProduct",
    ue,
    J,
    J,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProduct: {
        value: i.shopifyProduct,
        required: !1,
        type: "UpdateShopifyProductInput"
      }
    },
    n,
    null,
    !1
  );
}
async function ou(e, t) {
  return await m(
    this,
    "deleteShopifyProduct",
    null,
    J,
    J,
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
class uu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifyProduct",
        n,
        ue,
        J,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: J,
        defaultSelection: ue
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifyProduct",
          n,
          ue,
          J,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: ue
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifyProducts",
        ue,
        "shopifyProduct",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: J,
        defaultSelection: ue
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifyProducts",
        ue,
        J,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: J,
        defaultSelection: ue
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifyProducts",
          ue,
          J,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: J,
        defaultSelection: ue
      }
    ), this.create = Object.assign(
      au,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: J,
        modelSelectionField: J,
        isBulk: !1,
        defaultSelection: ue,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateShopifyProducts",
          ue,
          "shopifyProduct",
          "shopifyProducts",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProducts",
        namespace: null,
        modelApiIdentifier: J,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: ue,
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
      su,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: J,
        modelSelectionField: J,
        isBulk: !1,
        defaultSelection: ue,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateShopifyProducts",
          ue,
          "shopifyProduct",
          "shopifyProducts",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProducts",
        namespace: null,
        modelApiIdentifier: J,
        modelSelectionField: "shopifyProducts",
        isBulk: !0,
        defaultSelection: ue,
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
      ou,
      {
        type: "action",
        operationName: "deleteShopifyProduct",
        namespace: null,
        modelApiIdentifier: J,
        modelSelectionField: J,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProducts",
        namespace: null,
        modelApiIdentifier: J,
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
const le = {
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
}, H = "shopifyProductImage";
async function lu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createShopifyProductImage",
    le,
    H,
    H,
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
async function cu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateShopifyProductImage",
    le,
    H,
    H,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductImage: {
        value: i.shopifyProductImage,
        required: !1,
        type: "UpdateShopifyProductImageInput"
      }
    },
    n,
    null,
    !1
  );
}
async function du(e, t) {
  return await m(
    this,
    "deleteShopifyProductImage",
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
class fu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifyProductImage",
        n,
        le,
        H,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: H,
        defaultSelection: le
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifyProductImage",
          n,
          le,
          H,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: le
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifyProductImages",
        le,
        "shopifyProductImage",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: H,
        defaultSelection: le
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifyProductImages",
        le,
        H,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: H,
        defaultSelection: le
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifyProductImages",
          le,
          H,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: H,
        defaultSelection: le
      }
    ), this.create = Object.assign(
      lu,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: H,
        isBulk: !1,
        defaultSelection: le,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateShopifyProductImages",
          le,
          "shopifyProductImage",
          "shopifyProductImages",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductImages",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: le,
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
      cu,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: H,
        isBulk: !1,
        defaultSelection: le,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateShopifyProductImages",
          le,
          "shopifyProductImage",
          "shopifyProductImages",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductImages",
        namespace: null,
        modelApiIdentifier: H,
        modelSelectionField: "shopifyProductImages",
        isBulk: !0,
        defaultSelection: le,
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
      du,
      {
        type: "action",
        operationName: "deleteShopifyProductImage",
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductImages",
        namespace: null,
        modelApiIdentifier: H,
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
const ce = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
}, Y = "shopifyProductOption";
async function pu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createShopifyProductOption",
    ce,
    Y,
    Y,
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
async function hu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateShopifyProductOption",
    ce,
    Y,
    Y,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductOption: {
        value: i.shopifyProductOption,
        required: !1,
        type: "UpdateShopifyProductOptionInput"
      }
    },
    n,
    null,
    !1
  );
}
async function yu(e, t) {
  return await m(
    this,
    "deleteShopifyProductOption",
    null,
    Y,
    Y,
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
class mu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifyProductOption",
        n,
        ce,
        Y,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: Y,
        defaultSelection: ce
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifyProductOption",
          n,
          ce,
          Y,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ce
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifyProductOptions",
        ce,
        "shopifyProductOption",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: Y,
        defaultSelection: ce
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifyProductOptions",
        ce,
        Y,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: Y,
        defaultSelection: ce
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifyProductOptions",
          ce,
          Y,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: Y,
        defaultSelection: ce
      }
    ), this.create = Object.assign(
      pu,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: Y,
        modelSelectionField: Y,
        isBulk: !1,
        defaultSelection: ce,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateShopifyProductOptions",
          ce,
          "shopifyProductOption",
          "shopifyProductOptions",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: Y,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: ce,
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
      hu,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: Y,
        modelSelectionField: Y,
        isBulk: !1,
        defaultSelection: ce,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateShopifyProductOptions",
          ce,
          "shopifyProductOption",
          "shopifyProductOptions",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: Y,
        modelSelectionField: "shopifyProductOptions",
        isBulk: !0,
        defaultSelection: ce,
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
      yu,
      {
        type: "action",
        operationName: "deleteShopifyProductOption",
        namespace: null,
        modelApiIdentifier: Y,
        modelSelectionField: Y,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductOptions",
        namespace: null,
        modelApiIdentifier: Y,
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
const de = {
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
}, K = "shopifyProductVariant";
async function gu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createShopifyProductVariant",
    de,
    K,
    K,
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
async function bu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateShopifyProductVariant",
    de,
    K,
    K,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyProductVariant: {
        value: i.shopifyProductVariant,
        required: !1,
        type: "UpdateShopifyProductVariantInput"
      }
    },
    n,
    null,
    !1
  );
}
async function vu(e, t) {
  return await m(
    this,
    "deleteShopifyProductVariant",
    null,
    K,
    K,
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
class Su {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifyProductVariant",
        n,
        de,
        K,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: K,
        defaultSelection: de
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifyProductVariant",
          n,
          de,
          K,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: de
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifyProductVariants",
        de,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: K,
        defaultSelection: de
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifyProductVariants",
        de,
        K,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: K,
        defaultSelection: de
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifyProductVariants",
          de,
          K,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: K,
        defaultSelection: de
      }
    ), this.create = Object.assign(
      gu,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
        isBulk: !1,
        defaultSelection: de,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateShopifyProductVariants",
          de,
          "shopifyProductVariant",
          "shopifyProductVariants",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: de,
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
      bu,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
        isBulk: !1,
        defaultSelection: de,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateShopifyProductVariants",
          de,
          "shopifyProductVariant",
          "shopifyProductVariants",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: "shopifyProductVariants",
        isBulk: !0,
        defaultSelection: de,
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
      vu,
      {
        type: "action",
        operationName: "deleteShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: K,
        modelSelectionField: K,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyProductVariants",
        namespace: null,
        modelApiIdentifier: K,
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
const M = {
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
}, T = "shopifyShop";
async function Iu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createShopifyShop",
    M,
    T,
    T,
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
async function wu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateShopifyShop",
    M,
    T,
    T,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: i.shopifyShop,
        required: !1,
        type: "UpdateShopifyShopInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Ou(e, t) {
  return await m(
    this,
    "deleteShopifyShop",
    null,
    T,
    T,
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
async function Au(e, t, n) {
  const i = S(
    this.uninstall,
    e,
    t
  );
  return await m(
    this,
    "uninstallShopifyShop",
    M,
    T,
    T,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: i.shopifyShop,
        required: !1,
        type: "UninstallShopifyShopInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Nu(e, t, n) {
  const i = S(
    this.reinstall,
    e,
    t
  );
  return await m(
    this,
    "reinstallShopifyShop",
    M,
    T,
    T,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifyShop: {
        value: i.shopifyShop,
        required: !1,
        type: "ReinstallShopifyShopInput"
      }
    },
    n,
    null,
    !1
  );
}
class Eu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifyShop",
        n,
        M,
        T,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: T,
        defaultSelection: M
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifyShop",
          n,
          M,
          T,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifyShops",
        M,
        "shopifyShop",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: T,
        defaultSelection: M
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifyShops",
        M,
        T,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: T,
        defaultSelection: M
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifyShops",
          M,
          T,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: T,
        defaultSelection: M
      }
    ), this.create = Object.assign(
      Iu,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: M,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateShopifyShops",
          M,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyShops",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: M,
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
      wu,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: M,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateShopifyShops",
          M,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifyShops",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: M,
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
      Ou,
      {
        type: "action",
        operationName: "deleteShopifyShop",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteShopifyShops",
        namespace: null,
        modelApiIdentifier: T,
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
      Au,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: M,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.uninstall,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUninstallShopifyShops",
          M,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUninstall.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUninstallShopifyShops",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: M,
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
      Nu,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: M,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.reinstall,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkReinstallShopifyShops",
          M,
          "shopifyShop",
          "shopifyShops",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkReinstall.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkReinstallShopifyShops",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: "shopifyShops",
        isBulk: !0,
        defaultSelection: M,
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
const z = {
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
}, q = "shopifySync";
async function ku(e, t) {
  const n = S(
    this.run,
    void 0,
    e
  );
  return await m(
    this,
    "runShopifySync",
    z,
    q,
    q,
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
async function Tu(e, t, n) {
  const i = S(
    this.complete,
    e,
    t
  );
  return await m(
    this,
    "completeShopifySync",
    z,
    q,
    q,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: i.shopifySync,
        required: !1,
        type: "CompleteShopifySyncInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Pu(e, t, n) {
  const i = S(
    this.error,
    e,
    t
  );
  return await m(
    this,
    "errorShopifySync",
    z,
    q,
    q,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      shopifySync: {
        value: i.shopifySync,
        required: !1,
        type: "ErrorShopifySyncInput"
      }
    },
    n,
    null,
    !1
  );
}
class _u {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "shopifySync",
        n,
        z,
        q,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: q,
        defaultSelection: z
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "shopifySync",
          n,
          z,
          q,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: z
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "shopifySyncs",
        z,
        "shopifySync",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: q,
        defaultSelection: z
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "shopifySyncs",
        z,
        q,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: q,
        defaultSelection: z
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "shopifySyncs",
          z,
          q,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: q,
        defaultSelection: z
      }
    ), this.findById = Object.assign(
      async (n, i) => await cn(
        this,
        "shopifySyncs",
        "id",
        n,
        z,
        q,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: q,
        defaultSelection: z
      }
    ), this.run = Object.assign(
      ku,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: q,
        isBulk: !1,
        defaultSelection: z,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.run,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkRunShopifySyncs",
          z,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkRun.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkRunShopifySyncs",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: z,
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
      Tu,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: q,
        isBulk: !1,
        defaultSelection: z,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.complete,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCompleteShopifySyncs",
          z,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkComplete.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCompleteShopifySyncs",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: z,
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
      Pu,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: q,
        isBulk: !1,
        defaultSelection: z,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.error,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkErrorShopifySyncs",
          z,
          "shopifySync",
          "shopifySyncs",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkError.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkErrorShopifySyncs",
        namespace: null,
        modelApiIdentifier: q,
        modelSelectionField: "shopifySyncs",
        isBulk: !0,
        defaultSelection: z,
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
const ie = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
}, B = "ambiguous";
async function xu(e, t) {
  const n = S(
    this.create,
    void 0,
    e
  );
  return await m(
    this,
    "createAmbiguous",
    ie,
    B,
    B,
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
async function Fu(e, t, n) {
  const i = S(
    this.update,
    e,
    t
  );
  return await m(
    this,
    "updateAmbiguous",
    ie,
    B,
    B,
    !1,
    {
      id: {
        value: e,
        required: !0,
        type: "GadgetID"
      },
      ambiguous: {
        value: i.ambiguous,
        required: !1,
        type: "UpdateAmbiguousInput"
      }
    },
    n,
    null,
    !1
  );
}
async function Du(e, t) {
  return await m(
    this,
    "deleteAmbiguous",
    null,
    B,
    B,
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
class Cu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await Z(
        this,
        "ambiguous",
        n,
        ie,
        B,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: B,
        defaultSelection: ie
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await Z(
          this,
          "ambiguous",
          n,
          ie,
          B,
          i,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ie
      }
    ), this.findMany = Object.assign(
      async (n) => await P(
        this,
        "ambiguouss",
        ie,
        "ambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: B,
        defaultSelection: ie
      }
    ), this.findFirst = Object.assign(
      async (n) => (await P(
        this,
        "ambiguouss",
        ie,
        B,
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: B,
        defaultSelection: ie
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await P(
          this,
          "ambiguouss",
          ie,
          B,
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: B,
        defaultSelection: ie
      }
    ), this.findById = Object.assign(
      async (n, i) => await cn(
        this,
        "ambiguouss",
        "id",
        n,
        ie,
        B,
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: B,
        defaultSelection: ie
      }
    ), this.create = Object.assign(
      xu,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
        modelSelectionField: B,
        isBulk: !1,
        defaultSelection: ie,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.create,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkCreateAmbiguous",
          ie,
          "ambiguous",
          "ambiguous",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkCreate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkCreateAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: ie,
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
      Fu,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
        modelSelectionField: B,
        isBulk: !1,
        defaultSelection: ie,
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
      async (n, i) => {
        const r = n.map(
          (a) => S(
            this.update,
            void 0,
            a
          )
        );
        return await m(
          this,
          "bulkUpdateAmbiguous",
          ie,
          "ambiguous",
          "ambiguous",
          !0,
          {
            inputs: {
              value: r,
              ...this.bulkUpdate.variables.inputs
            }
          },
          i,
          null,
          !1
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
        modelSelectionField: "ambiguous",
        isBulk: !0,
        defaultSelection: ie,
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
      Du,
      {
        type: "action",
        operationName: "deleteAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
        modelSelectionField: B,
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
      async (n, i) => await m(
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
        i,
        null,
        !1
      ),
      {
        type: "action",
        operationName: "bulkDeleteAmbiguous",
        namespace: null,
        modelApiIdentifier: B,
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
const Ze = {
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
}, Re = "session";
async function ju(e) {
  return await m(
    this,
    "logOut",
    Ze,
    Re,
    Re,
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function Vu(e, t) {
  const n = S(
    this.logInViaEmail,
    void 0,
    e
  );
  return await m(
    this,
    "logInViaEmail",
    Ze,
    Re,
    Re,
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
class Ru {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (n) => await Z(
        this,
        "currentSession",
        void 0,
        Ze,
        "session",
        n
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Ze
      }
    ), this.logOut = Object.assign(
      ju,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: Re,
        modelSelectionField: Re,
        isBulk: !1,
        defaultSelection: Ze,
        variables: {},
        hasAmbiguousIdentifier: !1,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1
      }
    ), this.logInViaEmail = Object.assign(
      Vu,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: Re,
        modelSelectionField: Re,
        isBulk: !1,
        defaultSelection: Ze,
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
var Rr;
const vn = "production", qt = "development", Mu = Symbol.for("gadget/modelRelationships"), Uu = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class $u {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.app/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this[Rr] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, unambiguous: {}, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {} }, this.globalShopifySync = Object.assign(
      async (s) => await Gi(
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
      async () => await Gi(
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
    const n = (t == null ? void 0 : t.environment) ?? Uu() ?? qt;
    let i = n.toLocaleLowerCase();
    i != qt && i != vn && (console.warn("Invalid environment", n, "defaulting to development"), i = qt);
    const r = { ...t == null ? void 0 : t.exchanges };
    if (i === qt) {
      const s = ({ forward: o }) => (l) => {
        const u = o(l);
        return Cs(
          u,
          nt((c) => {
            if (typeof window < "u" && typeof CustomEvent == "function") {
              const f = new CustomEvent("gadget:devharness:graphqlresult", { detail: c });
              window.dispatchEvent(f);
            }
            return c;
          })
        );
      };
      r.beforeAll = [
        s,
        ...r.beforeAll ?? []
      ];
    }
    if (this.connection = new xr({
      endpoint: new URL("api/graphql", i == vn ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: i == vn ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == se.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Wo(this.connection), this.session = new Yo(this.connection), this.productPairing = new eu(this.connection), this.unambiguous = new ru(this.connection), this.shopifyProduct = new uu(this.connection), this.shopifyProductImage = new fu(this.connection), this.shopifyProductOption = new mu(this.connection), this.shopifyProductVariant = new Su(this.connection), this.shopifyShop = new Eu(this.connection), this.shopifySync = new _u(this.connection), this.ambiguous = new Cu(this.connection), this.currentSession = new Ru(this.connection), this.internal = {
      user: new Pe("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Pe("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Pe("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      unambiguous: new Pe("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Pe("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Pe("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Pe("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Pe("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Pe("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Pe("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Pe("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, n, i) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, n, i).toPromise();
    if (a)
      throw a;
    return r;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, n) {
    const { data: i, error: r } = await this.connection.currentClient.mutation(t, n).toPromise();
    if (r)
      throw r;
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
Rr = Mu;
const qu = new $u(), Lu = async () => {
  await qu.shopifyProduct.findMany();
};
export {
  Lu as read
};
