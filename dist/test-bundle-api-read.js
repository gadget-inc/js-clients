var at;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(at || (at = {}));
const Or = {
  DateTime(e) {
    return new Date(e);
  }
};
class Pr {
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
    for (const [i, r] of Object.entries(this.plan)) {
      const a = n[i];
      a != null && (n[i] = Or[r](a));
    }
    return n;
  }
}
function M(e, t) {
  if (!!!e)
    throw new Error(t);
}
function ct(e) {
  return typeof e == "object" && e !== null;
}
function xi(e, t) {
  if (!!!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Nr = /\r\n|[\n\r]/g;
function un(e, t) {
  let n = 0, i = 1;
  for (const r of e.body.matchAll(Nr)) {
    if (typeof r.index == "number" || xi(!1), r.index >= t)
      break;
    n = r.index + r[0].length, i += 1;
  }
  return {
    line: i,
    column: t + 1 - n
  };
}
function Er(e) {
  return ji(
    e.source,
    un(e.source, e.start)
  );
}
function ji(e, t) {
  const n = e.locationOffset.column - 1, i = "".padStart(n) + e.body, r = t.line - 1, a = e.locationOffset.line - 1, s = t.line + a, o = t.line === 1 ? n : 0, u = t.column + o, l = `${e.name}:${s}:${u}
`, c = i.split(/\r\n|[\n\r]/g), f = c[r];
  if (f.length > 120) {
    const d = Math.floor(u / 80), p = u % 80, h = [];
    for (let b = 0; b < f.length; b += 80)
      h.push(f.slice(b, b + 80));
    return l + zn([
      [`${s} |`, h[0]],
      ...h.slice(1, d + 1).map((b) => ["|", b]),
      ["|", "^".padStart(p)],
      ["|", h[d + 1]]
    ]);
  }
  return l + zn([
    // Lines specified like this: ["prefix", "string"],
    [`${s - 1} |`, c[r - 1]],
    [`${s} |`, f],
    ["|", "^".padStart(u)],
    [`${s + 1} |`, c[r + 1]]
  ]);
}
function zn(e) {
  const t = e.filter(([i, r]) => r !== void 0), n = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, r]) => i.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Ar(e) {
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
let _ = class Di extends Error {
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
    const { nodes: s, source: o, positions: u, path: l, originalError: c, extensions: f } = Ar(n);
    super(t), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = c ?? void 0, this.nodes = Qn(
      Array.isArray(s) ? s : s ? [s] : void 0
    );
    const d = Qn(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((h) => h.loc).filter((h) => h != null)
    );
    this.source = o ?? (d == null || (r = d[0]) === null || r === void 0 ? void 0 : r.source), this.positions = u ?? (d == null ? void 0 : d.map((h) => h.start)), this.locations = u && o ? u.map((h) => un(o, h)) : d == null ? void 0 : d.map((h) => un(h.source, h.start));
    const p = ct(
      c == null ? void 0 : c.extensions
    ) ? c == null ? void 0 : c.extensions : void 0;
    this.extensions = (a = f ?? p) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Di) : Object.defineProperty(this, "stack", {
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

` + Er(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + ji(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function Qn(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
const Fi = {
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
}, kr = new Set(Object.keys(Fi));
function Wn(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && kr.has(t);
}
var Jn;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Jn || (Jn = {}));
var fe;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(fe || (fe = {}));
var j;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(j || (j = {}));
function Yn(e) {
  return e === 9 || e === 32;
}
function _r(e) {
  return e >= 48 && e <= 57;
}
function Vi(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function xr(e) {
  return Vi(e) || e === 95;
}
function jr(e) {
  return Vi(e) || _r(e) || e === 95;
}
function Dr(e, t) {
  const n = e.replace(/"""/g, '\\"""'), i = n.split(/\r\n|[\n\r]/g), r = i.length === 1, a = i.length > 1 && i.slice(1).every((p) => p.length === 0 || Yn(p.charCodeAt(0))), s = n.endsWith('\\"""'), o = e.endsWith('"') && !s, u = e.endsWith("\\"), l = o || u, c = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!r || e.length > 70 || l || a || s);
  let f = "";
  const d = r && Yn(e.charCodeAt(0));
  return (c && !d || a) && (f += `
`), f += n, (c || l) && (f += `
`), '"""' + f + '"""';
}
const Fr = 10, Ci = 2;
function F(e) {
  return Ut(e, []);
}
function Ut(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Vr(e, t);
    default:
      return String(e);
  }
}
function Vr(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Cr(e)) {
    const i = e.toJSON();
    if (i !== e)
      return typeof i == "string" ? i : Ut(i, n);
  } else if (Array.isArray(e))
    return Rr(e, n);
  return $r(e, n);
}
function Cr(e) {
  return typeof e.toJSON == "function";
}
function $r(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Ci ? "[" + Mr(e) + "]" : "{ " + n.map(
    ([r, a]) => r + ": " + Ut(a, t)
  ).join(", ") + " }";
}
function Rr(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Ci)
    return "[Array]";
  const n = Math.min(Fr, e.length), i = e.length - n, r = [];
  for (let a = 0; a < n; ++a)
    r.push(Ut(e[a], t));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function Mr(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Ae = (
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
        const s = F(t);
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
), qr = 5;
function Lr(e, t) {
  const [n, i] = t ? [e, t] : [void 0, e];
  let r = " Did you mean ";
  n && (r += n + " ");
  const a = i.map((u) => `"${u}"`);
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return r + a[0] + "?";
    case 2:
      return r + a[0] + " or " + a[1] + "?";
  }
  const s = a.slice(0, qr), o = s.pop();
  return r + s.join(", ") + ", or " + o + "?";
}
function Hn(e) {
  return e;
}
function An(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e)
    n[t(i)] = i;
  return n;
}
function kn(e, t, n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    i[t(r)] = n(r);
  return i;
}
function Gt(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(e))
    n[i] = t(e[i], i);
  return n;
}
function Ur(e, t) {
  let n = 0, i = 0;
  for (; n < e.length && i < t.length; ) {
    let r = e.charCodeAt(n), a = t.charCodeAt(i);
    if (It(r) && It(a)) {
      let s = 0;
      do
        ++n, s = s * 10 + r - ln, r = e.charCodeAt(n);
      while (It(r) && s > 0);
      let o = 0;
      do
        ++i, o = o * 10 + a - ln, a = t.charCodeAt(i);
      while (It(a) && o > 0);
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
const ln = 48, Gr = 57;
function It(e) {
  return !isNaN(e) && ln <= e && e <= Gr;
}
function Br(e, t) {
  const n = /* @__PURE__ */ Object.create(null), i = new zr(e), r = Math.floor(e.length * 0.4) + 1;
  for (const a of t) {
    const s = i.measure(a, r);
    s !== void 0 && (n[a] = s);
  }
  return Object.keys(n).sort((a, s) => {
    const o = n[a] - n[s];
    return o !== 0 ? o : Ur(a, s);
  });
}
class zr {
  constructor(t) {
    this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = Kn(this._inputLowerCase), this._rows = [
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
    let r = Kn(i), a = this._inputArray;
    if (r.length < a.length) {
      const c = r;
      r = a, a = c;
    }
    const s = r.length, o = a.length;
    if (s - o > n)
      return;
    const u = this._rows;
    for (let c = 0; c <= o; c++)
      u[0][c] = c;
    for (let c = 1; c <= s; c++) {
      const f = u[(c - 1) % 3], d = u[c % 3];
      let p = d[0] = c;
      for (let h = 1; h <= o; h++) {
        const b = r[c - 1] === a[h - 1] ? 0 : 1;
        let v = Math.min(
          f[h] + 1,
          // delete
          d[h - 1] + 1,
          // insert
          f[h - 1] + b
          // substitute
        );
        if (c > 1 && h > 1 && r[c - 1] === a[h - 2] && r[c - 2] === a[h - 1]) {
          const A = u[(c - 2) % 3][h - 2];
          v = Math.min(v, A + 1);
        }
        v < p && (p = v), d[h] = v;
      }
      if (p > n)
        return;
    }
    const l = u[s % 3][o];
    return l <= n ? l : void 0;
  }
}
function Kn(e) {
  const t = e.length, n = new Array(t);
  for (let i = 0; i < t; ++i)
    n[i] = e.charCodeAt(i);
  return n;
}
function ve(e) {
  if (e == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(e) === null)
    return e;
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, i] of Object.entries(e))
    t[n] = i;
  return t;
}
function Qr(e) {
  return `"${e.replace(Wr, Jr)}"`;
}
const Wr = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Jr(e) {
  return Yr[e.charCodeAt(0)];
}
const Yr = [
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
], Hr = Object.freeze({});
function Kr(e, t, n = Fi) {
  const i = /* @__PURE__ */ new Map();
  for (const A of Object.values(j))
    i.set(A, Xr(t, A));
  let r, a = Array.isArray(e), s = [e], o = -1, u = [], l = e, c, f;
  const d = [], p = [];
  do {
    o++;
    const A = o === s.length, x = A && u.length !== 0;
    if (A) {
      if (c = p.length === 0 ? void 0 : d[d.length - 1], l = f, f = p.pop(), x)
        if (a) {
          l = l.slice();
          let y = 0;
          for (const [S, m] of u) {
            const R = S - y;
            m === null ? (l.splice(R, 1), y++) : l[R] = m;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [y, S] of u)
            l[y] = S;
        }
      o = r.index, s = r.keys, u = r.edits, a = r.inArray, r = r.prev;
    } else if (f) {
      if (c = a ? o : s[o], l = f[c], l == null)
        continue;
      d.push(c);
    }
    let I;
    if (!Array.isArray(l)) {
      var h, b;
      Wn(l) || M(!1, `Invalid AST Node: ${F(l)}.`);
      const y = A ? (h = i.get(l.kind)) === null || h === void 0 ? void 0 : h.leave : (b = i.get(l.kind)) === null || b === void 0 ? void 0 : b.enter;
      if (I = y == null ? void 0 : y.call(t, l, c, f, d, p), I === Hr)
        break;
      if (I === !1) {
        if (!A) {
          d.pop();
          continue;
        }
      } else if (I !== void 0 && (u.push([c, I]), !A))
        if (Wn(I))
          l = I;
        else {
          d.pop();
          continue;
        }
    }
    if (I === void 0 && x && u.push([c, l]), A)
      d.pop();
    else {
      var v;
      r = {
        inArray: a,
        index: o,
        keys: s,
        edits: u,
        prev: r
      }, a = Array.isArray(l), s = a ? l : (v = n[l.kind]) !== null && v !== void 0 ? v : [], o = -1, u = [], f && p.push(f), f = l;
    }
  } while (r !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Xr(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Ne(e) {
  return Kr(e, ea);
}
const Zr = 80, ea = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => g(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = P("(", g(e.variableDefinitions, ", "), ")"), n = g(
        [
          e.operation,
          g([e.name, t]),
          g(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: i }) => e + ": " + t + P(" = ", n) + P(" ", g(i, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => be(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: i, selectionSet: r }) {
      const a = P("", e, ": ") + t;
      let s = a + P("(", g(n, ", "), ")");
      return s.length > Zr && (s = a + P(`(
`, _t(g(n, `
`)), `
)`)), g([s, g(i, " "), r], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + P(" ", g(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => g(
      [
        "...",
        P("on ", e),
        g(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: i, selectionSet: r }) => (
      // or removed in the future.
      `fragment ${e}${P("(", g(n, ", "), ")")} on ${t} ${P("", g(i, " "), " ")}` + r
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
    leave: ({ value: e, block: t }) => t ? Dr(e) : Qr(e)
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
    leave: ({ values: e }) => "[" + g(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + g(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + P("(", g(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: n }) => P("", e, `
`) + g(["schema", g(t, " "), be(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => P("", e, `
`) + g(["scalar", t, g(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) => P("", e, `
`) + g(
      [
        "type",
        t,
        P("implements ", g(n, " & ")),
        g(i, " "),
        be(r)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: i, directives: r }) => P("", e, `
`) + t + (Xn(n) ? P(`(
`, _t(g(n, `
`)), `
)`) : P("(", g(n, ", "), ")")) + ": " + i + P(" ", g(r, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: i, directives: r }) => P("", e, `
`) + g(
      [t + ": " + n, P("= ", i), g(r, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) => P("", e, `
`) + g(
      [
        "interface",
        t,
        P("implements ", g(n, " & ")),
        g(i, " "),
        be(r)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: i }) => P("", e, `
`) + g(
      ["union", t, g(n, " "), P("= ", g(i, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: i }) => P("", e, `
`) + g(["enum", t, g(n, " "), be(i)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => P("", e, `
`) + g([t, g(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: i }) => P("", e, `
`) + g(["input", t, g(n, " "), be(i)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: i, locations: r }) => P("", e, `
`) + "directive @" + t + (Xn(n) ? P(`(
`, _t(g(n, `
`)), `
)`) : P("(", g(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + g(r, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => g(
      ["extend schema", g(e, " "), be(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => g(["extend scalar", e, g(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: i }) => g(
      [
        "extend type",
        e,
        P("implements ", g(t, " & ")),
        g(n, " "),
        be(i)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: i }) => g(
      [
        "extend interface",
        e,
        P("implements ", g(t, " & ")),
        g(n, " "),
        be(i)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => g(
      [
        "extend union",
        e,
        g(t, " "),
        P("= ", g(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => g(["extend enum", e, g(t, " "), be(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => g(["extend input", e, g(t, " "), be(n)], " ")
  }
};
function g(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((i) => i).join(t)) !== null && n !== void 0 ? n : "";
}
function be(e) {
  return P(`{
`, _t(g(e, `
`)), `
}`);
}
function P(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function _t(e) {
  return P("  ", e.replace(/\n/g, `
  `));
}
function Xn(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function cn(e, t) {
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
        (n) => cn(n, t)
      );
    case j.OBJECT:
      return kn(
        e.fields,
        (n) => n.name.value,
        (n) => cn(n.value, t)
      );
    case j.VARIABLE:
      return t == null ? void 0 : t[e.name.value];
  }
}
function Se(e) {
  if (e != null || M(!1, "Must provide name."), typeof e == "string" || M(!1, "Expected name to be a string."), e.length === 0)
    throw new _("Expected name to be a non-empty string.");
  for (let t = 1; t < e.length; ++t)
    if (!jr(e.charCodeAt(t)))
      throw new _(
        `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
      );
  if (!xr(e.charCodeAt(0)))
    throw new _(
      `Names must start with [_a-zA-Z] but "${e}" does not.`
    );
  return e;
}
function ta(e) {
  if (e === "true" || e === "false" || e === "null")
    throw new _(`Enum values cannot be named: ${e}`);
  return Se(e);
}
function $i(e) {
  return Ri(e) || na(e) || ia(e) || ra(e) || Mi(e) || qi(e) || Li(e) || Oe(e);
}
function Ri(e) {
  return Ae(e, He);
}
function na(e) {
  return Ae(e, ua);
}
function ia(e) {
  return Ae(e, la);
}
function ra(e) {
  return Ae(e, ca);
}
function Mi(e) {
  return Ae(e, fa);
}
function qi(e) {
  return Ae(e, ha);
}
function Li(e) {
  return Ae(e, sa);
}
function Oe(e) {
  return Ae(e, Bt);
}
function aa(e) {
  return Ri(e) || Mi(e);
}
class sa {
  constructor(t) {
    $i(t) || M(!1, `Expected ${F(t)} to be a GraphQL type.`), this.ofType = t;
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
class Bt {
  constructor(t) {
    oa(t) || M(
      !1,
      `Expected ${F(t)} to be a GraphQL nullable type.`
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
function oa(e) {
  return $i(e) && !Oe(e);
}
function Ui(e) {
  return typeof e == "function" ? e() : e;
}
function Gi(e) {
  return typeof e == "function" ? e() : e;
}
class He {
  constructor(t) {
    var n, i, r, a;
    const s = (n = t.parseValue) !== null && n !== void 0 ? n : Hn;
    this.name = Se(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (i = t.serialize) !== null && i !== void 0 ? i : Hn, this.parseValue = s, this.parseLiteral = (r = t.parseLiteral) !== null && r !== void 0 ? r : (o, u) => s(cn(o, u)), this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || M(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${F(t.specifiedByURL)}.`
    ), t.serialize == null || typeof t.serialize == "function" || M(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || M(
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
class ua {
  constructor(t) {
    var n;
    this.name = Se(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => zi(t), this._interfaces = () => Bi(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || M(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${F(t.isTypeOf)}.`
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
      fields: Wi(this.getFields()),
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
function Bi(e) {
  var t;
  const n = Ui(
    (t = e.interfaces) !== null && t !== void 0 ? t : []
  );
  return Array.isArray(n) || M(
    !1,
    `${e.name} interfaces must be an Array or a function which returns an Array.`
  ), n;
}
function zi(e) {
  const t = Gi(e.fields);
  return Ue(t) || M(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Gt(t, (n, i) => {
    var r;
    Ue(n) || M(
      !1,
      `${e.name}.${i} field config must be an object.`
    ), n.resolve == null || typeof n.resolve == "function" || M(
      !1,
      `${e.name}.${i} field resolver must be a function if provided, but got: ${F(n.resolve)}.`
    );
    const a = (r = n.args) !== null && r !== void 0 ? r : {};
    return Ue(a) || M(
      !1,
      `${e.name}.${i} args must be an object with argument names as keys.`
    ), {
      name: Se(i),
      description: n.description,
      type: n.type,
      args: Qi(a),
      resolve: n.resolve,
      subscribe: n.subscribe,
      deprecationReason: n.deprecationReason,
      extensions: ve(n.extensions),
      astNode: n.astNode
    };
  });
}
function Qi(e) {
  return Object.entries(e).map(([t, n]) => ({
    name: Se(t),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: ve(n.extensions),
    astNode: n.astNode
  }));
}
function Ue(e) {
  return ct(e) && !Array.isArray(e);
}
function Wi(e) {
  return Gt(e, (t) => ({
    description: t.description,
    type: t.type,
    args: Ji(t.args),
    resolve: t.resolve,
    subscribe: t.subscribe,
    deprecationReason: t.deprecationReason,
    extensions: t.extensions,
    astNode: t.astNode
  }));
}
function Ji(e) {
  return kn(
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
class la {
  constructor(t) {
    var n;
    this.name = Se(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = zi.bind(void 0, t), this._interfaces = Bi.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || M(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${F(t.resolveType)}.`
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
      fields: Wi(this.getFields()),
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
class ca {
  constructor(t) {
    var n;
    this.name = Se(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = da.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || M(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${F(t.resolveType)}.`
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
function da(e) {
  const t = Ui(e.types);
  return Array.isArray(t) || M(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
  ), t;
}
class fa {
  /* <T> */
  constructor(t) {
    var n;
    this.name = Se(t.name), this.description = t.description, this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = pa(this.name, t.values), this._valueLookup = new Map(
      this._values.map((i) => [i.value, i])
    ), this._nameLookup = An(this._values, (i) => i.name);
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
      throw new _(
        `Enum "${this.name}" cannot represent value: ${F(t)}`
      );
    return n.name;
  }
  parseValue(t) {
    if (typeof t != "string") {
      const i = F(t);
      throw new _(
        `Enum "${this.name}" cannot represent non-string value: ${i}.` + Ot(this, i)
      );
    }
    const n = this.getValue(t);
    if (n == null)
      throw new _(
        `Value "${t}" does not exist in "${this.name}" enum.` + Ot(this, t)
      );
    return n.value;
  }
  parseLiteral(t, n) {
    if (t.kind !== j.ENUM) {
      const r = Ne(t);
      throw new _(
        `Enum "${this.name}" cannot represent non-enum value: ${r}.` + Ot(this, r),
        {
          nodes: t
        }
      );
    }
    const i = this.getValue(t.value);
    if (i == null) {
      const r = Ne(t);
      throw new _(
        `Value "${r}" does not exist in "${this.name}" enum.` + Ot(this, r),
        {
          nodes: t
        }
      );
    }
    return i.value;
  }
  toConfig() {
    const t = kn(
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
function Ot(e, t) {
  const n = e.getValues().map((r) => r.name), i = Br(t, n);
  return Lr("the enum value", i);
}
function pa(e, t) {
  return Ue(t) || M(
    !1,
    `${e} values must be an object with value names as keys.`
  ), Object.entries(t).map(([n, i]) => (Ue(i) || M(
    !1,
    `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${F(i)}.`
  ), {
    name: ta(n),
    description: i.description,
    value: i.value !== void 0 ? i.value : n,
    deprecationReason: i.deprecationReason,
    extensions: ve(i.extensions),
    astNode: i.astNode
  }));
}
class ha {
  constructor(t) {
    var n;
    this.name = Se(t.name), this.description = t.description, this.extensions = ve(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = ya.bind(void 0, t);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const t = Gt(this.getFields(), (n) => ({
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
function ya(e) {
  const t = Gi(e.fields);
  return Ue(t) || M(
    !1,
    `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), Gt(t, (n, i) => (!("resolve" in n) || M(
    !1,
    `${e.name}.${i} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Se(i),
    description: n.description,
    type: n.type,
    defaultValue: n.defaultValue,
    deprecationReason: n.deprecationReason,
    extensions: ve(n.extensions),
    astNode: n.astNode
  }));
}
const Zt = 2147483647, en = -2147483648, ma = new He({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(e) {
    const t = yt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n))
      throw new _(
        `Int cannot represent non-integer value: ${F(t)}`
      );
    if (n > Zt || n < en)
      throw new _(
        "Int cannot represent non 32-bit signed integer value: " + F(t)
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new _(
        `Int cannot represent non-integer value: ${F(e)}`
      );
    if (e > Zt || e < en)
      throw new _(
        `Int cannot represent non 32-bit signed integer value: ${e}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.INT)
      throw new _(
        `Int cannot represent non-integer value: ${Ne(e)}`,
        {
          nodes: e
        }
      );
    const t = parseInt(e.value, 10);
    if (t > Zt || t < en)
      throw new _(
        `Int cannot represent non 32-bit signed integer value: ${e.value}`,
        {
          nodes: e
        }
      );
    return t;
  }
});
new He({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(e) {
    const t = yt(e);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    let n = t;
    if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n))
      throw new _(
        `Float cannot represent non numeric value: ${F(t)}`
      );
    return n;
  },
  parseValue(e) {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new _(
        `Float cannot represent non numeric value: ${F(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.FLOAT && e.kind !== j.INT)
      throw new _(
        `Float cannot represent non numeric value: ${Ne(e)}`,
        e
      );
    return parseFloat(e.value);
  }
});
const Yi = new He({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(e) {
    const t = yt(e);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number" && Number.isFinite(t))
      return t.toString();
    throw new _(
      `String cannot represent value: ${F(e)}`
    );
  },
  parseValue(e) {
    if (typeof e != "string")
      throw new _(
        `String cannot represent a non string value: ${F(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.STRING)
      throw new _(
        `String cannot represent a non string value: ${Ne(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
}), _n = new He({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(e) {
    const t = yt(e);
    if (typeof t == "boolean")
      return t;
    if (Number.isFinite(t))
      return t !== 0;
    throw new _(
      `Boolean cannot represent a non boolean value: ${F(t)}`
    );
  },
  parseValue(e) {
    if (typeof e != "boolean")
      throw new _(
        `Boolean cannot represent a non boolean value: ${F(e)}`
      );
    return e;
  },
  parseLiteral(e) {
    if (e.kind !== j.BOOLEAN)
      throw new _(
        `Boolean cannot represent a non boolean value: ${Ne(e)}`,
        {
          nodes: e
        }
      );
    return e.value;
  }
});
new He({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(e) {
    const t = yt(e);
    if (typeof t == "string")
      return t;
    if (Number.isInteger(t))
      return String(t);
    throw new _(
      `ID cannot represent value: ${F(e)}`
    );
  },
  parseValue(e) {
    if (typeof e == "string")
      return e;
    if (typeof e == "number" && Number.isInteger(e))
      return e.toString();
    throw new _(`ID cannot represent value: ${F(e)}`);
  },
  parseLiteral(e) {
    if (e.kind !== j.STRING && e.kind !== j.INT)
      throw new _(
        "ID cannot represent a non-string and non-integer value: " + Ne(e),
        {
          nodes: e
        }
      );
    return e.value;
  }
});
function yt(e) {
  if (ct(e)) {
    if (typeof e.valueOf == "function") {
      const t = e.valueOf();
      if (!ct(t))
        return t;
    }
    if (typeof e.toJSON == "function")
      return e.toJSON();
  }
  return e;
}
class mt {
  constructor(t) {
    var n, i;
    this.name = Se(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = ve(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || M(!1, `@${t.name} locations must be an Array.`);
    const r = (i = t.args) !== null && i !== void 0 ? i : {};
    ct(r) && !Array.isArray(r) || M(
      !1,
      `@${t.name} args must be an object with argument names as keys.`
    ), this.args = Qi(r);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Ji(this.args),
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
new mt({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    fe.FIELD,
    fe.FRAGMENT_SPREAD,
    fe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Bt(_n),
      description: "Included when true."
    }
  }
});
new mt({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    fe.FIELD,
    fe.FRAGMENT_SPREAD,
    fe.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Bt(_n),
      description: "Skipped when true."
    }
  }
});
const ba = "No longer supported";
new mt({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    fe.FIELD_DEFINITION,
    fe.ARGUMENT_DEFINITION,
    fe.INPUT_FIELD_DEFINITION,
    fe.ENUM_VALUE
  ],
  args: {
    reason: {
      type: Yi,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: ba
    }
  }
});
new mt({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [fe.SCALAR],
  args: {
    url: {
      type: new Bt(Yi),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
function it(e, t, n) {
  if (e) {
    if (e.kind === j.VARIABLE) {
      const i = e.name.value;
      if (n == null || n[i] === void 0)
        return;
      const r = n[i];
      return r === null && Oe(t) ? void 0 : r;
    }
    if (Oe(t))
      return e.kind === j.NULL ? void 0 : it(e, t.ofType, n);
    if (e.kind === j.NULL)
      return null;
    if (Li(t)) {
      const i = t.ofType;
      if (e.kind === j.LIST) {
        const a = [];
        for (const s of e.values)
          if (Zn(s, n)) {
            if (Oe(i))
              return;
            a.push(null);
          } else {
            const o = it(s, i, n);
            if (o === void 0)
              return;
            a.push(o);
          }
        return a;
      }
      const r = it(e, i, n);
      return r === void 0 ? void 0 : [r];
    }
    if (qi(t)) {
      if (e.kind !== j.OBJECT)
        return;
      const i = /* @__PURE__ */ Object.create(null), r = An(e.fields, (a) => a.name.value);
      for (const a of Object.values(t.getFields())) {
        const s = r[a.name];
        if (!s || Zn(s.value, n)) {
          if (a.defaultValue !== void 0)
            i[a.name] = a.defaultValue;
          else if (Oe(a.type))
            return;
          continue;
        }
        const o = it(s.value, a.type, n);
        if (o === void 0)
          return;
        i[a.name] = o;
      }
      return i;
    }
    if (aa(t)) {
      let i;
      try {
        i = t.parseLiteral(e, n);
      } catch {
        return;
      }
      return i === void 0 ? void 0 : i;
    }
    xi(!1, "Unexpected input type: " + F(t));
  }
}
function Zn(e, t) {
  return e.kind === j.VARIABLE && (t == null || t[e.name.value] === void 0);
}
function ga(e, t, n) {
  var i;
  const r = {}, a = (i = t.arguments) !== null && i !== void 0 ? i : [], s = An(a, (o) => o.name.value);
  for (const o of e.args) {
    const u = o.name, l = o.type, c = s[u];
    if (!c) {
      if (o.defaultValue !== void 0)
        r[u] = o.defaultValue;
      else if (Oe(l))
        throw new _(
          `Argument "${u}" of required type "${F(l)}" was not provided.`,
          {
            nodes: t
          }
        );
      continue;
    }
    const f = c.value;
    let d = f.kind === j.NULL;
    if (f.kind === j.VARIABLE) {
      const h = f.name.value;
      if (n == null || !Sa(n, h)) {
        if (o.defaultValue !== void 0)
          r[u] = o.defaultValue;
        else if (Oe(l))
          throw new _(
            `Argument "${u}" of required type "${F(l)}" was provided the variable "$${h}" which was not provided a runtime value.`,
            {
              nodes: f
            }
          );
        continue;
      }
      d = n[h] == null;
    }
    if (d && Oe(l))
      throw new _(
        `Argument "${u}" of non-null type "${F(l)}" must not be null.`,
        {
          nodes: f
        }
      );
    const p = it(f, l, n);
    if (p === void 0)
      throw new _(
        `Argument "${u}" has invalid value ${Ne(f)}.`,
        {
          nodes: f
        }
      );
    r[u] = p;
  }
  return r;
}
function va(e, t, n) {
  var i;
  const r = (i = t.directives) === null || i === void 0 ? void 0 : i.find(
    (a) => a.name.value === e.name
  );
  if (r)
    return ga(e, r, n);
}
function Sa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
const wa = new mt({
  name: "live",
  description: "Instruction for establishing a live connection that is updated once the underlying data changes.",
  locations: [fe.QUERY],
  args: {
    if: {
      type: _n,
      defaultValue: !0,
      description: "Whether the query should be live or not."
    },
    throttle: {
      type: ma,
      description: 'Propose a desired throttle interval ot the server in order to receive updates to at most once per "throttle" milliseconds. The server must not accept this value.'
    }
  }
}), Hi = (e) => e == null, Ta = (e) => {
  var t;
  if (e.kind !== "OperationDefinition" || e.operation !== "query")
    return null;
  const n = (t = e.directives) === null || t === void 0 ? void 0 : t.find((i) => i.name.value === "live");
  return Hi(n) ? null : n;
}, Ia = (e, t) => {
  var n;
  const i = va(wa, { directives: [e] }, t);
  return {
    isLive: (i == null ? void 0 : i.if) === !0,
    throttleValue: (n = i == null ? void 0 : i.throttle) !== null && n !== void 0 ? n : null
  };
}, Oa = (e, t) => {
  const n = Ta(e);
  return Hi(n) ? !1 : Ia(n, t).isLive;
};
function Pa(e) {
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
      Na,
      Ea,
      Aa,
      ka,
      _a
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
function Na(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let t of e.children)
      Object.prototype.hasOwnProperty.call(e.left, t.name) && t.result === void 0 ? delete e.left[t.name] : e.left[t.name] !== t.result && (e.left[t.name] = t.result);
    e.result = e.left, e.stopped = !0;
  }
}
function Ea(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let t = e.children.length, n;
  for (let i = 0; i < t; i++)
    n = e.children[i], e.left[n.name] = n.result;
  e.result = e.left, e.stopped = !0;
}
function Aa(e) {
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
function ka(e) {
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
const ei = 3;
let ti = {
  numerically(e, t) {
    return e - t;
  },
  numericallyBy(e) {
    return (t, n) => t[e] - n[e];
  }
};
function _a(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let t, n, i = e.delta, r = e.left, a = [], s = [], o = [];
  for (t in i)
    if (t !== "_t")
      if (t[0] === "_")
        if (i[t][2] === 0 || i[t][2] === ei)
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
  for (a = a.sort(ti.numerically), t = a.length - 1; t >= 0; t--) {
    n = a[t];
    let c = i[`_${n}`], f = r.splice(n, 1)[0];
    c[2] === ei && s.push({
      index: c[1],
      value: f
    });
  }
  s = s.sort(ti.numericallyBy("index"));
  let u = s.length;
  for (t = 0; t < u; t++) {
    let c = s[t];
    r.splice(c.index, 0, c.value);
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
const xa = (e, t) => Pa({
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
var dn = function(e, t) {
  return dn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      i.hasOwnProperty(r) && (n[r] = i[r]);
  }, dn(e, t);
};
function ja(e, t) {
  dn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function ze(e, t, n, i) {
  function r(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(c) {
      try {
        l(i.next(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      try {
        l(i.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      c.done ? a(c.value) : r(c.value).then(o, u);
    }
    l((i = i.apply(e, t || [])).next());
  });
}
function Ee(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, r, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (i = 1, r && (a = l[0] & 2 ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done)
          return a;
        switch (r = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, r = l[1], l = [0];
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
        l = [6, c], r = 0;
      } finally {
        i = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Ke(e) {
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
function dt(e) {
  return this instanceof dt ? (this.v = e, this) : new dt(e);
}
function Da(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(e, t || []), r, a = [];
  return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function s(d) {
    i[d] && (r[d] = function(p) {
      return new Promise(function(h, b) {
        a.push([d, p, h, b]) > 1 || o(d, p);
      });
    });
  }
  function o(d, p) {
    try {
      u(i[d](p));
    } catch (h) {
      f(a[0][3], h);
    }
  }
  function u(d) {
    d.value instanceof dt ? Promise.resolve(d.value.v).then(l, c) : f(a[0][2], d);
  }
  function l(d) {
    o("next", d);
  }
  function c(d) {
    o("throw", d);
  }
  function f(d, p) {
    d(p), a.shift(), a.length && o(a[0][0], a[0][1]);
  }
}
var Ki = (
  /** @class */
  function(e) {
    ja(t, e);
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
function fn(e) {
  e != null && typeof e.then == "function" && e.then(Ft, Ft);
}
var tn = 0, ni = 1, Fe = 2, jt = 3, pn = 4, Dt = 1024, Ft = function() {
};
function Ge(e) {
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
function xe(e, t) {
  var n = e.state >= jt;
  return Promise.resolve(t).then(function(i) {
    return !n && e.state >= pn ? Ge(e).then(function(r) {
      return {
        value: r,
        done: !0
      };
    }) : { value: i, done: n };
  });
}
function xn(e, t) {
  var n, i;
  if (!(e.state >= Fe))
    if (e.state = Fe, e.onnext(), e.onstop(), e.err == null && (e.err = t), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      st(e);
    else
      try {
        for (var r = Ke(e.pushes), a = r.next(); !a.done; a = r.next()) {
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
function st(e) {
  var t, n;
  if (!(e.state >= jt)) {
    e.state < Fe && xn(e), e.state = jt, e.buffer = void 0;
    try {
      for (var i = Ke(e.nexts), r = i.next(); !r.done; r = i.next()) {
        var a = r.value, s = e.pending === void 0 ? Ge(e) : e.pending.then(function() {
          return Ge(e);
        });
        a.resolve(xe(e, s));
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
function ii(e) {
  e.state >= pn || (e.state < jt && st(e), e.state = pn);
}
function Fa(e, t) {
  if (fn(t), e.pushes.length >= Dt)
    throw new Ki("No more than " + Dt + " pending calls to push are allowed on a single repeater.");
  if (e.state >= Fe)
    return Promise.resolve(void 0);
  var n = e.pending === void 0 ? Promise.resolve(t) : e.pending.then(function() {
    return t;
  });
  n = n.catch(function(u) {
    e.state < Fe && (e.err = u), ii(e);
  });
  var i;
  if (e.nexts.length) {
    var r = e.nexts.shift();
    r.resolve(xe(e, n)), e.nexts.length ? i = Promise.resolve(e.nexts[0].value) : i = new Promise(function(u) {
      return e.onnext = u;
    });
  } else
    typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(n), i = Promise.resolve(void 0)) : i = new Promise(function(u) {
      return e.pushes.push({ resolve: u, value: n });
    });
  var a = !0, s = {}, o = i.catch(function(u) {
    if (a)
      throw u;
  });
  return s.then = function(u, l) {
    return a = !1, Promise.prototype.then.call(i, u, l);
  }, s.catch = function(u) {
    return a = !1, Promise.prototype.catch.call(i, u);
  }, s.finally = i.finally.bind(i), e.pending = n.then(function() {
    return o;
  }).catch(function(u) {
    e.err = u, ii(e);
  }), s;
}
function Va(e) {
  var t = xn.bind(null, e), n = new Promise(function(i) {
    return e.onstop = i;
  });
  return t.then = n.then.bind(n), t.catch = n.catch.bind(n), t.finally = n.finally.bind(n), t;
}
function Ca(e) {
  if (!(e.state >= ni)) {
    e.state = ni;
    var t = Fa.bind(null, e), n = Va(e);
    e.execution = new Promise(function(i) {
      return i(e.executor(t, n));
    }), e.execution.catch(function() {
      return xn(e);
    });
  }
}
var Pt = /* @__PURE__ */ new WeakMap(), bt = (
  /** @class */
  function() {
    function e(t, n) {
      Pt.set(this, {
        executor: t,
        buffer: n,
        err: void 0,
        state: tn,
        pushes: [],
        nexts: [],
        pending: void 0,
        execution: void 0,
        onnext: Ft,
        onstop: Ft
      });
    }
    return e.prototype.next = function(t) {
      fn(t);
      var n = Pt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      if (n.nexts.length >= Dt)
        throw new Ki("No more than " + Dt + " pending calls to next are allowed on a single repeater.");
      if (n.state <= tn && Ca(n), n.onnext(t), typeof n.buffer < "u" && !n.buffer.empty) {
        var i = xe(n, n.buffer.remove());
        if (n.pushes.length) {
          var r = n.pushes.shift();
          n.buffer.add(r.value), n.onnext = r.resolve;
        }
        return i;
      } else if (n.pushes.length) {
        var a = n.pushes.shift();
        return n.onnext = a.resolve, xe(n, a.value);
      } else if (n.state >= Fe)
        return st(n), xe(n, Ge(n));
      return new Promise(function(s) {
        return n.nexts.push({ resolve: s, value: t });
      });
    }, e.prototype.return = function(t) {
      fn(t);
      var n = Pt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return st(n), n.execution = Promise.resolve(n.execution).then(function() {
        return t;
      }), xe(n, Ge(n));
    }, e.prototype.throw = function(t) {
      var n = Pt.get(this);
      if (n === void 0)
        throw new Error("WeakMap error");
      return n.state <= tn || n.state >= Fe || typeof n.buffer < "u" && !n.buffer.empty ? (st(n), n.err == null && (n.err = t), xe(n, Ge(n))) : this.next(Promise.reject(t));
    }, e.prototype[Symbol.asyncIterator] = function() {
      return this;
    }, e.race = $a, e.merge = Ra, e.zip = Ma, e.latest = qa, e;
  }()
);
function zt(e, t) {
  var n, i, r = [], a = function(l) {
    l != null && typeof l[Symbol.asyncIterator] == "function" ? r.push(l[Symbol.asyncIterator]()) : l != null && typeof l[Symbol.iterator] == "function" ? r.push(l[Symbol.iterator]()) : r.push(function() {
      return Da(this, arguments, function() {
        return Ee(this, function(d) {
          switch (d.label) {
            case 0:
              return t.yieldValues ? [4, dt(l)] : [3, 3];
            case 1:
              return [4, d.sent()];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return t.returnValues ? [4, dt(l)] : [3, 5];
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
    for (var s = Ke(e), o = s.next(); !o.done; o = s.next()) {
      var u = o.value;
      a(u);
    }
  } catch (l) {
    n = { error: l };
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
function $a(e) {
  var t = this, n = zt(e, { returnValues: !0 });
  return new bt(function(i, r) {
    return ze(t, void 0, void 0, function() {
      var a, s, o, u, l, c;
      return Ee(this, function(f) {
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
            f.trys.push([1, , 5, 7]), u = void 0, l = 0, c = function() {
              var d, p, h, b, v, A;
              return Ee(this, function(x) {
                switch (x.label) {
                  case 0:
                    d = l;
                    try {
                      for (p = (v = void 0, Ke(n)), h = p.next(); !h.done; h = p.next())
                        b = h.value, Promise.resolve(b.next()).then(function(I) {
                          I.done ? (r(), o === void 0 && (o = I)) : l === d && (l++, a(I));
                        }, function(I) {
                          return r(I);
                        });
                    } catch (I) {
                      v = { error: I };
                    } finally {
                      try {
                        h && !h.done && (A = p.return) && A.call(p);
                      } finally {
                        if (v)
                          throw v.error;
                      }
                    }
                    return [4, new Promise(function(I) {
                      return a = I;
                    })];
                  case 1:
                    return u = x.sent(), u === void 0 ? [3, 3] : [4, i(u.value)];
                  case 2:
                    x.sent(), x.label = 3;
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
function Ra(e) {
  var t = this, n = zt(e, { yieldValues: !0 });
  return new bt(function(i, r) {
    return ze(t, void 0, void 0, function() {
      var a, s, o, u = this;
      return Ee(this, function(l) {
        switch (l.label) {
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
                for (var d = Ke(a), p = d.next(); !p.done; p = d.next()) {
                  var h = p.value;
                  h();
                }
              } catch (b) {
                c = { error: b };
              } finally {
                try {
                  p && !p.done && (f = d.return) && f.call(d);
                } finally {
                  if (c)
                    throw c.error;
                }
              }
            }), l.label = 1;
          case 1:
            return l.trys.push([1, , 3, 4]), [4, Promise.all(n.map(function(c, f) {
              return ze(u, void 0, void 0, function() {
                var d, p;
                return Ee(this, function(h) {
                  switch (h.label) {
                    case 0:
                      h.trys.push([0, , 6, 9]), h.label = 1;
                    case 1:
                      return s ? [3, 5] : (Promise.resolve(c.next()).then(function(b) {
                        return a[f](b);
                      }, function(b) {
                        return r(b);
                      }), [4, new Promise(function(b) {
                        a[f] = b;
                      })]);
                    case 2:
                      return d = h.sent(), d === void 0 ? [3, 4] : d.done ? (o = d, [
                        2
                        /*return*/
                      ]) : [4, i(d.value)];
                    case 3:
                      h.sent(), h.label = 4;
                    case 4:
                      return [3, 1];
                    case 5:
                      return [3, 9];
                    case 6:
                      return p = c.return, p ? [4, c.return()] : [3, 8];
                    case 7:
                      p = h.sent(), h.label = 8;
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
function Ma(e) {
  var t = this, n = zt(e, { returnValues: !0 });
  return new bt(function(i, r) {
    return ze(t, void 0, void 0, function() {
      var a, s, o, u;
      return Ee(this, function(l) {
        switch (l.label) {
          case 0:
            if (!n.length)
              return r(), [2, []];
            s = !1, r.then(function() {
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
              return r(c);
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
            }) ? [2, u] : [4, i(u)]);
          case 4:
            return l.sent(), [3, 2];
          case 5:
            return [3, 8];
          case 6:
            return r(), [4, Promise.all(n.map(function(c) {
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
function qa(e) {
  var t = this, n = zt(e, {
    yieldValues: !0,
    returnValues: !0
  });
  return new bt(function(i, r) {
    return ze(t, void 0, void 0, function() {
      var a, s, o, u, l, c = this;
      return Ee(this, function(f) {
        switch (f.label) {
          case 0:
            if (!n.length)
              return r(), [2, []];
            s = [], o = !1, r.then(function() {
              var d, p;
              a();
              try {
                for (var h = Ke(s), b = h.next(); !b.done; b = h.next()) {
                  var v = b.value;
                  v();
                }
              } catch (A) {
                d = { error: A };
              } finally {
                try {
                  b && !b.done && (p = h.return) && p.call(h);
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
            return u = f.sent(), u === void 0 ? [
              2
              /*return*/
            ] : (l = u.map(function(d) {
              return d.value;
            }), u.every(function(d) {
              return d.done;
            }) ? [2, l] : [4, i(l.slice())]);
          case 3:
            return f.sent(), [4, Promise.all(n.map(function(d, p) {
              return ze(c, void 0, void 0, function() {
                var h;
                return Ee(this, function(b) {
                  switch (b.label) {
                    case 0:
                      if (u[p].done)
                        return [2, u[p].value];
                      b.label = 1;
                    case 1:
                      return o ? [3, 4] : (Promise.resolve(d.next()).then(function(v) {
                        return s[p](v);
                      }, function(v) {
                        return r(v);
                      }), [4, new Promise(function(v) {
                        return s[p] = v;
                      })]);
                    case 2:
                      return h = b.sent(), h === void 0 ? [2, u[p].value] : h.done ? [2, h.value] : (l[p] = h.value, [4, i(l.slice())]);
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
const La = (e) => (t) => new bt(async (n, i) => {
  const r = t[Symbol.asyncIterator]();
  i.then(() => {
    var u;
    return (u = r.return) === null || u === void 0 ? void 0 : u.call(r);
  });
  let a = null, s = 0, o;
  for (; (o = await r.next()).done === !1; ) {
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
  i();
}), Ua = La(xa);
function Ga(e, t, n) {
  const i = async function* () {
    yield* e;
  }(), r = i.return.bind(i);
  if (t && (i.return = (...a) => (t(), r(...a))), n) {
    const a = i.throw.bind(i);
    i.throw = (s) => (n(s), a(s));
  }
  return i;
}
function ri() {
  const e = {};
  return e.promise = new Promise((t, n) => {
    e.resolve = t, e.reject = n;
  }), e;
}
function Ba() {
  let e = {
    type: "running"
    /* running */
  }, t = ri();
  const n = [];
  function i(s) {
    e.type === "running" && (n.push(s), t.resolve(), t = ri());
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
  }(), a = Ga(r, () => {
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
const za = (e) => {
  const { pushValue: t, asyncIterableIterator: n } = Ba(), i = e({
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
function Qa(e, t) {
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
var qe = {
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
class hn extends Error {
  constructor(t, n, i, r, a, s, o) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), n && (this.nodes = Array.isArray(n) ? n : [n]), i && (this.source = i), r && (this.positions = r), s && (this.originalError = s);
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
var $, T;
function G(e) {
  return new hn(`Syntax Error: Unexpected token at ${T} in ${e}`);
}
function pe(e) {
  if (e.lastIndex = T, e.test($))
    return $.slice(T, T = e.lastIndex);
}
var Nt = / +(?=[^\s])/y;
function Wa(e) {
  for (var t = e.split(`
`), n = "", i = 0, r = 0, a = t.length - 1, s = 0; s < t.length; s++)
    Nt.lastIndex = 0, Nt.test(t[s]) && (s && (!i || Nt.lastIndex < i) && (i = Nt.lastIndex), r = r || s, a = s);
  for (var o = r; o <= a; o++)
    o !== r && (n += `
`), n += t[o].slice(i).replace(/\\"""/g, '"""');
  return n;
}
function O() {
  for (var e = 0 | $.charCodeAt(T++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | $.charCodeAt(T++))
    if (e === 35)
      for (; (e = $.charCodeAt(T++)) !== 10 && e !== 13; )
        ;
  T--;
}
var Xi = /[_A-Za-z]\w*/y;
function Te() {
  var e;
  if (e = pe(Xi))
    return {
      kind: "Name",
      value: e
    };
}
var Ja = /(?:null|true|false)/y, Zi = /\$[_A-Za-z]\w*/y, Ya = /-?\d+/y, Ha = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Ka = /\\/g, Xa = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Za = /"(?:"|[^\r\n]*?[^\\]")/y;
function Vt(e) {
  var t, n;
  if (n = pe(Ja))
    t = n === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: n === "true"
    };
  else if (!e && (n = pe(Zi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: n.slice(1)
      }
    };
  else if (n = pe(Ya)) {
    var i = n;
    (n = pe(Ha)) ? t = {
      kind: "FloatValue",
      value: i + n
    } : t = {
      kind: "IntValue",
      value: i
    };
  } else if (n = pe(Xi))
    t = {
      kind: "EnumValue",
      value: n
    };
  else if (n = pe(Xa))
    t = {
      kind: "StringValue",
      value: Wa(n.slice(3, -3)),
      block: !0
    };
  else if (n = pe(Za))
    t = {
      kind: "StringValue",
      value: Ka.test(n) ? JSON.parse(n) : n.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var s;
    if ($.charCodeAt(T) === 91) {
      T++, O();
      for (var o = []; s = Vt(a); )
        o.push(s);
      if ($.charCodeAt(T++) !== 93)
        throw G("ListValue");
      return O(), {
        kind: "ListValue",
        values: o
      };
    }
  }(e) || function(a) {
    if ($.charCodeAt(T) === 123) {
      T++, O();
      for (var s = [], o; o = Te(); ) {
        if (O(), $.charCodeAt(T++) !== 58)
          throw G("ObjectField");
        O();
        var u = Vt(a);
        if (!u)
          throw G("ObjectField");
        s.push({
          kind: "ObjectField",
          name: o,
          value: u
        });
      }
      if ($.charCodeAt(T++) !== 125)
        throw G("ObjectValue");
      return O(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return O(), t;
}
function er(e) {
  var t = [];
  if (O(), $.charCodeAt(T) === 40) {
    T++, O();
    for (var n; n = Te(); ) {
      if (O(), $.charCodeAt(T++) !== 58)
        throw G("Argument");
      O();
      var i = Vt(e);
      if (!i)
        throw G("Argument");
      t.push({
        kind: "Argument",
        name: n,
        value: i
      });
    }
    if (!t.length || $.charCodeAt(T++) !== 41)
      throw G("Argument");
    O();
  }
  return t;
}
function Qe(e) {
  var t = [];
  for (O(); $.charCodeAt(T) === 64; ) {
    T++;
    var n = Te();
    if (!n)
      throw G("Directive");
    O(), t.push({
      kind: "Directive",
      name: n,
      arguments: er(e)
    });
  }
  return t;
}
function es() {
  var e = Te();
  if (e) {
    O();
    var t;
    if ($.charCodeAt(T) === 58) {
      if (T++, O(), t = e, !(e = Te()))
        throw G("Field");
      O();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: er(!1),
      directives: Qe(!1),
      selectionSet: Qt()
    };
  }
}
function tr() {
  var e;
  if (O(), $.charCodeAt(T) === 91) {
    T++, O();
    var t = tr();
    if (!t || $.charCodeAt(T++) !== 93)
      throw G("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Te())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw G("NamedType");
  return O(), $.charCodeAt(T) === 33 ? (T++, O(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var ts = /on/y;
function nr() {
  if (pe(ts)) {
    O();
    var e = Te();
    if (!e)
      throw G("NamedType");
    return O(), {
      kind: "NamedType",
      name: e
    };
  }
}
var ns = /\.\.\./y;
function is() {
  if (pe(ns)) {
    O();
    var e = T, t;
    if ((t = Te()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Qe(!1)
      };
    T = e;
    var n = nr(), i = Qe(!1), r = Qt();
    if (!r)
      throw G("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: n,
      directives: i,
      selectionSet: r
    };
  }
}
function Qt() {
  var e;
  if (O(), $.charCodeAt(T) === 123) {
    T++, O();
    for (var t = []; e = is() || es(); )
      t.push(e);
    if (!t.length || $.charCodeAt(T++) !== 125)
      throw G("SelectionSet");
    return O(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var rs = /fragment/y;
function as() {
  if (pe(rs)) {
    O();
    var e = Te();
    if (!e)
      throw G("FragmentDefinition");
    O();
    var t = nr();
    if (!t)
      throw G("FragmentDefinition");
    var n = Qe(!1), i = Qt();
    if (!i)
      throw G("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: n,
      selectionSet: i
    };
  }
}
var ss = /(?:query|mutation|subscription)/y;
function os() {
  var e, t, n = [], i = [];
  (e = pe(ss)) && (O(), t = Te(), n = function() {
    var s, o = [];
    if (O(), $.charCodeAt(T) === 40) {
      for (T++, O(); s = pe(Zi); ) {
        if (O(), $.charCodeAt(T++) !== 58)
          throw G("VariableDefinition");
        var u = tr(), l = void 0;
        if ($.charCodeAt(T) === 61 && (T++, O(), !(l = Vt(!0))))
          throw G("VariableDefinition");
        O(), o.push({
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
          directives: Qe(!0)
        });
      }
      if ($.charCodeAt(T++) !== 41)
        throw G("VariableDefinition");
      O();
    }
    return o;
  }(), i = Qe(!1));
  var r = Qt();
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
function us(e, t) {
  return $ = typeof e.body == "string" ? e.body : e, T = 0, function() {
    var i;
    O();
    for (var r = []; i = as() || os(); )
      r.push(i);
    return {
      kind: "Document",
      definitions: r
    };
  }();
}
function ls(e) {
  return JSON.stringify(e);
}
function cs(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var ye = (e) => !(!e || !e.length), Z = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !ye(e.variableDefinitions) && !ye(e.directives))
      return Z.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), ye(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(Z.VariableDefinition).join(", ") + ")"), ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), t + " " + Z.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = Z.Variable(e.variable) + ": " + me(e.type);
    return e.defaultValue && (t += " = " + me(e.defaultValue)), ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (ye(e.arguments)) {
      var n = e.arguments.map(Z.Argument), i = t + "(" + n.join(", ") + ")";
      t = i.length > 80 ? t + `(
  ` + n.join(`
`).replace(/\n/g, `
  `) + `
)` : i;
    }
    return ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), e.selectionSet ? t + " " + Z.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? cs(e.value) : ls(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(me).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(Z.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + me(e.value),
  Document: (e) => ye(e.definitions) ? e.definitions.map(me).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(me).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + me(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), t + " " + me(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, ye(e.directives) && (t += " " + e.directives.map(Z.Directive).join(" ")), t + " " + me(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return ye(e.arguments) && (t += "(" + e.arguments.map(Z.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + me(e.type) + "]",
  NonNullType: (e) => me(e.type) + "!"
};
function me(e) {
  return Z[e.kind] ? Z[e.kind](e) : "";
}
var jn = () => {
}, he = jn;
function we(e) {
  return {
    tag: 0,
    0: e
  };
}
function gt(e) {
  return {
    tag: 1,
    0: e
  };
}
var ds = (e) => e;
function X(e) {
  return (t) => (n) => {
    var i = he;
    t((r) => {
      r === 0 ? n(0) : r.tag === 0 ? (i = r[0], n(r)) : e(r[0]) ? n(r) : i(0);
    });
  };
}
function Be(e) {
  return (t) => (n) => t((i) => {
    i === 0 || i.tag === 0 ? n(i) : n(gt(e(i[0])));
  });
}
function ft(e) {
  return (t) => (n) => {
    var i = [], r = he, a = !1, s = !1;
    t((o) => {
      s || (o === 0 ? (s = !0, i.length || n(0)) : o.tag === 0 ? r = o[0] : (a = !1, function(l) {
        var c = he;
        l((f) => {
          if (f === 0) {
            if (i.length) {
              var d = i.indexOf(c);
              d > -1 && (i = i.slice()).splice(d, 1), i.length || (s ? n(0) : a || (a = !0, r(0)));
            }
          } else
            f.tag === 0 ? (i.push(c = f[0]), c(0)) : i.length && (n(f), c(0));
        });
      }(e(o[0])), a || (a = !0, r(0))));
    }), n(we((o) => {
      if (o === 1) {
        s || (s = !0, r(1));
        for (var u = 0, l = i, c = i.length; u < c; u++)
          l[u](1);
        i.length = 0;
      } else {
        !s && !a ? (a = !0, r(0)) : a = !1;
        for (var f = 0, d = i, p = i.length; f < p; f++)
          d[f](0);
      }
    }));
  };
}
function fs(e) {
  return ft(ds)(e);
}
function We(e) {
  return fs(ms(e));
}
function ir(e) {
  return (t) => (n) => {
    var i = !1;
    t((r) => {
      if (!i)
        if (r === 0)
          i = !0, n(0), e();
        else if (r.tag === 0) {
          var a = r[0];
          n(we((s) => {
            s === 1 ? (i = !0, a(1), e()) : a(s);
          }));
        } else
          n(r);
    });
  };
}
function Wt(e) {
  return (t) => (n) => {
    var i = !1;
    t((r) => {
      if (!i)
        if (r === 0)
          i = !0, n(0);
        else if (r.tag === 0) {
          var a = r[0];
          n(we((s) => {
            s === 1 && (i = !0), a(s);
          }));
        } else
          e(r[0]), n(r);
    });
  };
}
function ai(e) {
  return (t) => (n) => t((i) => {
    i === 0 ? n(0) : i.tag === 0 ? (n(i), e()) : n(i);
  });
}
function pt(e) {
  var t = [], n = he, i = !1;
  return (r) => {
    t.push(r), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var s = 0, o = t, u = t.length; s < u; s++)
          o[s](0);
        t.length = 0;
      } else if (a.tag === 0)
        n = a[0];
      else {
        i = !1;
        for (var l = 0, c = t, f = t.length; l < f; l++)
          c[l](a);
      }
    }), r(we((a) => {
      if (a === 1) {
        var s = t.indexOf(r);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
      } else
        i || (i = !0, n(0));
    }));
  };
}
function si(e) {
  return (t) => (n) => {
    var i = he, r = he, a = !1, s = !1, o = !1, u = !1;
    t((l) => {
      u || (l === 0 ? (u = !0, o || n(0)) : l.tag === 0 ? i = l[0] : (o && (r(1), r = he), a ? a = !1 : (a = !0, i(0)), function(f) {
        o = !0, f((d) => {
          o && (d === 0 ? (o = !1, u ? n(0) : a || (a = !0, i(0))) : d.tag === 0 ? (s = !1, (r = d[0])(0)) : (n(d), s ? s = !1 : r(0)));
        });
      }(e(l[0]))));
    }), n(we((l) => {
      l === 1 ? (u || (u = !0, i(1)), o && (o = !1, r(1))) : (!u && !a && (a = !0, i(0)), o && !s && (s = !0, r(0)));
    }));
  };
}
function rr(e) {
  return (t) => (n) => {
    var i = he, r = !1, a = 0;
    t((s) => {
      r || (s === 0 ? (r = !0, n(0)) : s.tag === 0 ? e <= 0 ? (r = !0, n(0), s[0](1)) : i = s[0] : a++ < e ? (n(s), !r && a >= e && (r = !0, n(0), i(1))) : n(s));
    }), n(we((s) => {
      s === 1 && !r ? (r = !0, i(1)) : s === 0 && !r && a < e && i(0);
    }));
  };
}
function Dn(e) {
  return (t) => (n) => {
    var i = he, r = he, a = !1;
    t((s) => {
      a || (s === 0 ? (a = !0, r(1), n(0)) : s.tag === 0 ? (i = s[0], e((o) => {
        o === 0 || (o.tag === 0 ? (r = o[0])(0) : (a = !0, r(1), i(1), n(0)));
      })) : n(s));
    }), n(we((s) => {
      s === 1 && !a ? (a = !0, i(1), r(1)) : a || i(0);
    }));
  };
}
function ps(e, t) {
  return (n) => (i) => {
    var r = he, a = !1;
    n((s) => {
      a || (s === 0 ? (a = !0, i(0)) : s.tag === 0 ? (r = s[0], i(s)) : e(s[0]) ? i(s) : (a = !0, t && i(s), i(0), r(1)));
    });
  };
}
function hs(e) {
  return (t) => e()(t);
}
function ar(e) {
  return (t) => {
    var n = e[Symbol.asyncIterator](), i = !1, r = !1, a = !1, s;
    t(we(async (o) => {
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
              a = !1, t(gt(s.value));
            } catch (u) {
              if (n.throw)
                (i = !!(await n.throw(u)).done) && t(0);
              else
                throw u;
            }
        r = !1;
      }
    }));
  };
}
function ys(e) {
  return e[Symbol.asyncIterator] ? ar(e) : (t) => {
    var n = e[Symbol.iterator](), i = !1, r = !1, a = !1, s;
    t(we((o) => {
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
              a = !1, t(gt(s.value));
            } catch (u) {
              if (n.throw)
                (i = !!n.throw(u).done) && t(0);
              else
                throw u;
            }
        r = !1;
      }
    }));
  };
}
var ms = ys;
function ot(e) {
  return (t) => {
    var n = !1;
    t(we((i) => {
      i === 1 ? n = !0 : n || (n = !0, t(gt(e)), t(0));
    }));
  };
}
function Fn(e) {
  return (t) => {
    var n = !1, i = e({
      next(r) {
        n || t(gt(r));
      },
      complete() {
        n || (n = !0, t(0));
      }
    });
    t(we((r) => {
      r === 1 && !n && (n = !0, i());
    }));
  };
}
function oi() {
  var e, t;
  return {
    source: pt(Fn((n) => (e = n.next, t = n.complete, jn))),
    next(n) {
      e && e(n);
    },
    complete() {
      t && t();
    }
  };
}
function ui(e) {
  return Fn((t) => (e.then((n) => {
    Promise.resolve(n).then(() => {
      t.next(n), t.complete();
    });
  }), jn));
}
function Ct(e) {
  return (t) => {
    var n = he, i = !1;
    return t((r) => {
      r === 0 ? i = !0 : r.tag === 0 ? (n = r[0])(0) : i || (e(r[0]), n(0));
    }), {
      unsubscribe() {
        i || (i = !0, n(1));
      }
    };
  };
}
function bs(e) {
  Ct((t) => {
  })(e);
}
function gs(e) {
  return new Promise((t) => {
    var n = he, i;
    e((r) => {
      r === 0 ? Promise.resolve(i).then(t) : r.tag === 0 ? (n = r[0])(0) : (i = r[0], n(0));
    });
  });
}
var vs = (...e) => {
  for (var t = e[0], n = 1, i = e.length; n < i; n++)
    t = e[n](t);
  return t;
}, Ss = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new hn(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new hn(e);
class vt extends Error {
  constructor(t) {
    var n = (t.graphQLErrors || []).map(Ss), i = ((r, a) => {
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
var yn = (e, t) => {
  for (var n = 0 | (t || 5381), i = 0, r = 0 | e.length; i < r; i++)
    n = (n << 5) + n + e.charCodeAt(i);
  return n;
}, De = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new WeakMap(), Re = (e) => {
  if (e === null || De.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Re(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var n of e)
      t.length > 1 && (t += ","), t += Re(n) || "null";
    return t += "]";
  } else if (Rt !== Je && e instanceof Rt || Mt !== Je && e instanceof Mt)
    return "null";
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var r = li.get(e) || Math.random().toString(36).slice(2);
    return li.set(e, r), Re({
      __key: r
    });
  }
  De.add(e);
  var a = "{";
  for (var s of i) {
    var o = Re(e[s]);
    o && (a.length > 1 && (a += ","), a += Re(s) + ":" + o);
  }
  return De.delete(e), a += "}";
}, mn = (e, t, n) => {
  if (!(n == null || typeof n != "object" || n.toJSON || De.has(n)))
    if (Array.isArray(n))
      for (var i = 0, r = n.length; i < r; i++)
        mn(e, `${t}.${i}`, n[i]);
    else if (n instanceof Rt || n instanceof Mt)
      e.set(t, n);
    else {
      De.add(n);
      for (var a of Object.keys(n))
        mn(e, `${t}.${a}`, n[a]);
    }
}, $t = (e) => (De.clear(), Re(e));
class Je {
}
var Rt = typeof File < "u" ? File : Je, Mt = typeof Blob < "u" ? Blob : Je, ws = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, Ts = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, Is = (e, t) => t % 2 == 0 ? e.replace(Ts, `
`) : e, ci = (e) => e.split(ws).map(Is).join("").trim(), di = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), Vn = (e) => {
  var t;
  return typeof e == "string" ? t = ci(e) : e.loc && xt.get(e.__key) === e ? t = e.loc.source.body : (t = di.get(e) || ci(me(e)), di.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, fi = (e) => {
  var t = yn(Vn(e));
  if (e.definitions) {
    var n = or(e);
    n && (t = yn(`
# ${n}`, t));
  }
  return t;
}, sr = (e) => {
  var t, n;
  return typeof e == "string" ? (t = fi(e), n = xt.get(t) || us(e)) : (t = e.__key || fi(e), n = xt.get(t) || e), n.loc || Vn(n), n.__key = t, xt.set(t, n), n;
}, nn = (e, t, n) => {
  var i = t || {}, r = sr(e), a = $t(i), s = r.__key;
  return a !== "{}" && (s = yn(a, s)), {
    key: s,
    query: r,
    variables: i,
    extensions: n
  };
}, or = (e) => {
  for (var t of e.definitions)
    if (t.kind === qe.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Os = (e) => {
  for (var t of e.definitions)
    if (t.kind === qe.OPERATION_DEFINITION)
      return t.operation;
}, bn = (e, t, n) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var i = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new vt({
      graphQLErrors: t.errors,
      response: n
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? i : t.hasNext,
    stale: !1
  };
}, gn = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var n of Object.keys(t))
      e[n] = gn(e[n], t[n]);
    return e;
  }
  return t;
}, vn = (e, t, n) => {
  var i = e.error ? e.error.graphQLErrors : [], r = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var o = {
    data: e.data
  };
  if (s)
    for (var u of s) {
      Array.isArray(u.errors) && i.push(...u.errors), u.extensions && (Object.assign(a, u.extensions), r = !0);
      for (var l = "data", c = o, f = 0, d = u.path.length; f < d; l = u.path[f++])
        c = c[l] = Array.isArray(c[l]) ? [...c[l]] : {
          ...c[l]
        };
      if (u.items)
        for (var p = +l >= 0 ? l : 0, h = 0, b = u.items.length; h < b; h++)
          c[p + h] = gn(c[p + h], u.items[h]);
      else
        u.data !== void 0 && (c[l] = gn(c[l], u.data));
    }
  else
    o.data = t.data || e.data, i = t.errors || i;
  return {
    operation: e.operation,
    data: o.data,
    error: i.length ? new vt({
      graphQLErrors: i,
      response: n
    }) : void 0,
    extensions: r ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ur = (e, t, n) => ({
  operation: e,
  data: void 0,
  error: new vt({
    networkError: t,
    response: n
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function lr(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Vn(e.query),
    operationName: or(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Ps = (e, t) => {
  var n = e.kind === "query" && e.context.preferGetMethod;
  if (!n || !t)
    return e.context.url;
  var i = new URL(e.context.url);
  for (var r in t) {
    var a = t[r];
    a && i.searchParams.set(r, typeof a == "object" ? $t(a) : a);
  }
  var s = i.toString();
  return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, Ns = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var n = $t(t), i = ((o) => {
      var u = /* @__PURE__ */ new Map();
      return (Rt !== Je || Mt !== Je) && (De.clear(), mn(u, "variables", o)), u;
    })(t.variables);
    if (i.size) {
      var r = new FormData();
      r.append("operations", n), r.append("map", $t({
        ...[...i.keys()].map((o) => [o])
      }));
      var a = 0;
      for (var s of i.values())
        r.append("" + a++, s);
      return r;
    }
    return n;
  }
}, Es = (e, t) => {
  var n = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var r in i.headers)
      n[r.toLowerCase()] = i.headers[r];
  var a = Ns(e, t);
  return typeof a == "string" && !n["content-type"] && (n["content-type"] = "application/json"), {
    ...i,
    method: a ? "POST" : "GET",
    body: a,
    headers: n
  };
}, As = typeof TextDecoder < "u" ? new TextDecoder() : null, ks = /boundary="?([^=";]+)"?/i, _s = /data: ?([^\n]+)/, pi = (e) => e.constructor.name === "Buffer" ? e.toString() : As.decode(e);
async function* hi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield pi(t);
  else {
    var n = e.body.getReader(), i;
    try {
      for (; !(i = await n.read()).done; )
        yield pi(i.value);
    } finally {
      n.cancel();
    }
  }
}
async function* yi(e, t) {
  var n = "", i;
  for await (var r of e)
    for (n += r; (i = n.indexOf(t)) > -1; )
      yield n.slice(0, i), n = n.slice(i + t.length);
}
async function* xs(e, t, n) {
  var i = !0, r = null, a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "", o;
    if (/multipart\/mixed/i.test(s))
      o = async function* (c, f) {
        var d = c.match(ks), p = "--" + (d ? d[1] : "-"), h = !0, b;
        for await (var v of yi(hi(f), `\r
` + p)) {
          if (h) {
            h = !1;
            var A = v.indexOf(p);
            if (A > -1)
              v = v.slice(A + p.length);
            else
              continue;
          }
          try {
            yield b = JSON.parse(v.slice(v.indexOf(`\r
\r
`) + 4));
          } catch (x) {
            if (!b)
              throw x;
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
        for await (var d of yi(hi(c), `

`)) {
          var p = d.match(_s);
          if (p) {
            var h = p[1];
            try {
              yield f = JSON.parse(h);
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
    for await (var u of o)
      r = r ? vn(r, u, a) : bn(e, u, a), i = !1, yield r, i = !0;
    r || (yield r = bn(e, {}, a));
  } catch (l) {
    if (!i)
      throw l;
    yield ur(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : l, a);
  }
}
function js(e, t, n) {
  var i;
  return typeof AbortController < "u" && (n.signal = (i = new AbortController()).signal), ir(() => {
    i && i.abort();
  })(X((r) => !!r)(ar(xs(e, t, n))));
}
var Sn = (e, t) => {
  if (Array.isArray(e))
    for (var n of e)
      Sn(n, t);
  else if (typeof e == "object" && e !== null)
    for (var i in e)
      i === "__typename" && typeof e[i] == "string" ? t.add(e[i]) : Sn(e[i], t);
  return t;
}, wn = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var n = [];
    for (var i of e.definitions) {
      var r = wn(i);
      t = t || r !== i, n.push(r);
    }
    if (t)
      return {
        ...e,
        definitions: n
      };
  } else if ("selectionSet" in e) {
    var a = [], s = e.kind === qe.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var o of e.selectionSet.selections || []) {
        s = s || o.kind === qe.FIELD && o.name.value === "__typename" && !o.alias;
        var u = wn(o);
        t = t || u !== o, a.push(u);
      }
      if (s || (t = !0, a.push({
        kind: qe.FIELD,
        name: {
          kind: qe.NAME,
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
}, mi = /* @__PURE__ */ new Map(), Ds = (e) => {
  var t = sr(e), n = mi.get(t.__key);
  return n || (mi.set(t.__key, n = wn(t)), Object.defineProperty(n, "__key", {
    value: t.__key,
    enumerable: !1
  })), n;
}, Tn = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((r) => Tn(r));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var n = {};
    for (var i in e)
      i === "__typename" ? Object.defineProperty(n, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : n[i] = Tn(e[i]);
    return n;
  } else
    return e;
};
function bi(e) {
  var t = (n) => e(n);
  return t.toPromise = () => gs(rr(1)(X((n) => !n.stale && !n.hasNext)(t))), t.then = (n, i) => t.toPromise().then(n, i), t.subscribe = (n) => Ct(n)(t), t;
}
function Ye(e, t, n) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...n
    } : n || t.context
  };
}
var gi = (e, t) => Ye(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Fs = () => {
}, rn = ({ kind: e }) => e !== "mutation" && e !== "query", Vs = ({ forward: e, client: t, dispatchDebug: n }) => {
  var i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = (o) => {
    var u = Ye(o.kind, o);
    return u.query = Ds(o.query), u;
  }, s = (o) => o.kind === "query" && o.context.requestPolicy !== "network-only" && (o.context.requestPolicy === "cache-only" || i.has(o.key));
  return (o) => {
    var u = Be((c) => {
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
        operation: process.env.NODE_ENV !== "production" ? gi(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (d.stale = !0, vi(t, c)), d;
    })(X((c) => !rn(c) && s(c))(o)), l = Wt((c) => {
      var { operation: f } = c;
      if (f) {
        var d = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (d = ((m) => [...Sn(m, /* @__PURE__ */ new Set())])(c.data).concat(d)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var p = /* @__PURE__ */ new Set();
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
          for (var h = 0; h < d.length; h++) {
            var b = d[h], v = r.get(b);
            v || r.set(b, v = /* @__PURE__ */ new Set());
            for (var A of v.values())
              p.add(A);
            v.clear();
          }
          for (var x of p.values())
            i.has(x) && (f = i.get(x).operation, i.delete(x), vi(t, f));
        } else if (f.kind === "query" && c.data) {
          i.set(f.key, c);
          for (var I = 0; I < d.length; I++) {
            var y = d[I], S = r.get(y);
            S || r.set(y, S = /* @__PURE__ */ new Set()), S.add(f.key);
          }
        }
      }
    })(e(X((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(Be((c) => process.env.NODE_ENV !== "production" ? gi(c, {
      cacheOutcome: "miss"
    }) : c)(We([Be(a)(X((c) => !rn(c) && !s(c))(o)), X((c) => rn(c))(o)])))));
    return We([u, l]);
  };
}, vi = (e, t) => e.reexecuteOperation(Ye(t.kind, t, {
  requestPolicy: "network-only"
})), an = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: n }) => ({ client: i, forward: r }) => {
  var a = n || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var o = ft((l) => {
      var { key: c } = l, f = X((d) => d.kind === "teardown" && d.key === c)(s);
      return Dn(f)(((d) => {
        var p = e(lr(d), d);
        return Fn(({ next: h, complete: b }) => {
          var v = !1, A, x;
          return Promise.resolve().then(() => {
            v || (A = p.subscribe({
              next(I) {
                h(x = x ? vn(x, I) : bn(d, I));
              },
              error(I) {
                h(ur(d, I));
              },
              complete() {
                v || (v = !0, d.kind === "subscription" && i.reexecuteOperation(Ye("teardown", d, d.context)), x && x.hasNext && h(vn(x, {
                  hasNext: !1
                })), b());
              }
            }));
          }), () => {
            v = !0, A && A.unsubscribe();
          };
        });
      })(l));
    })(X((l) => l.kind !== "teardown" && a(l))(s)), u = r(X((l) => l.kind === "teardown" || !a(l))(s));
    return We([o, u]);
  };
}, Cs = ({ forward: e, dispatchDebug: t }) => (n) => {
  var i = ft((a) => {
    var s = lr(a), o = Ps(a, s), u = Es(a, s);
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
    var l = Dn(X((c) => c.kind === "teardown" && c.key === a.key)(n))(js(a, o, u));
    return process.env.NODE_ENV !== "production" ? Wt((c) => {
      var f = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: o,
          fetchOptions: u,
          value: f || c
        },
        source: "fetchExchange"
      });
    })(l) : l;
  })(X((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(n)), r = e(X((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(n));
  return We([i, r]);
}, $s = (e) => ({ client: t, forward: n, dispatchDebug: i }) => e.reduceRight((r, a) => {
  var s = !1;
  return a({
    client: t,
    forward(o) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return pt(r(pt(o)));
    },
    dispatchDebug(o) {
      process.env.NODE_ENV !== "production" && i({
        timestamp: Date.now(),
        source: a.name,
        ...o
      });
    }
  });
}, n), cr = ({ onOperation: e, onResult: t, onError: n }) => ({ forward: i }) => (r) => ft((a) => {
  n && a.error && n(a.error, a.operation);
  var s = t && t(a) || a;
  return "then" in s ? ui(s) : ot(s);
})(i(ft((a) => {
  var s = e && e(a) || a;
  return "then" in s ? ui(s) : ot(s);
})(r))), Rs = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Wt((n) => {
  if (n.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var i = `No exchange has handled operations of kind "${n.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: i,
      operation: n,
      source: "fallbackExchange"
    }), console.warn(i);
  }
})(t)), X((n) => !1)(t)), Si = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var n = 0, i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), s = [], o = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = oi();
  function l(y) {
    (y.kind === "mutation" || y.kind === "teardown" || !a.has(y.key)) && (y.kind === "teardown" ? a.delete(y.key) : y.kind !== "mutation" && a.add(y.key), u.next(y));
  }
  var c = !1;
  function f(y) {
    if (y && l(y), !c) {
      for (c = !0; c && (y = s.shift()); )
        l(y);
      c = !1;
    }
  }
  var d = (y) => {
    var S = Dn(X((m) => m.kind === "teardown" && m.key === y.key)(u.source))(X((m) => m.operation.kind === y.kind && m.operation.key === y.key && (!m.operation.context._instance || m.operation.context._instance === y.context._instance))(I));
    return y.kind !== "query" ? S = ps((m) => !!m.hasNext, !0)(S) : S = si((m) => {
      var R = ot(m);
      return m.stale || m.hasNext ? R : We([R, Be(() => (m.stale = !0, m))(rr(1)(X((Ve) => Ve.key === y.key)(u.source)))]);
    })(S), y.kind !== "mutation" ? S = ir(() => {
      a.delete(y.key), i.delete(y.key), r.delete(y.key), c = !1;
      for (var m = s.length - 1; m >= 0; m--)
        s[m].key === y.key && s.splice(m, 1);
      l(Ye("teardown", y, y.context));
    })(Wt((m) => {
      if (m.stale) {
        for (var R of s)
          if (R.key === m.operation.key) {
            a.delete(R.key);
            break;
          }
      } else
        m.hasNext || a.delete(y.key);
      i.set(y.key, m);
    })(S)) : S = ai(() => {
      l(y);
    })(S), t.maskTypename && (S = Be((m) => ({
      ...m,
      data: Tn(m.data, !0)
    }))(S)), pt(S);
  }, p = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(p, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(y) {
      y.kind === "teardown" ? f(y) : (y.kind === "mutation" || r.has(y.key)) && (s.push(y), Promise.resolve().then(f));
    },
    createRequestOperation(y, S, m) {
      m || (m = {});
      var R;
      if (process.env.NODE_ENV !== "production" && y !== "teardown" && (R = Os(S.query)) !== y)
        throw new Error(`Expected operation of type "${y}" but found "${R}"`);
      return Ye(y, S, {
        _instance: y === "mutation" ? n = n + 1 | 0 : void 0,
        ...o,
        ...m,
        requestPolicy: m.requestPolicy || o.requestPolicy,
        suspense: m.suspense || m.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(y) {
      return y.kind === "mutation" ? bi(d(y)) : bi(hs(() => {
        var S = r.get(y.key);
        S || r.set(y.key, S = d(y)), S = ai(() => {
          f(y);
        })(S);
        var m = i.get(y.key);
        return y.kind === "query" && m && (m.stale || m.hasNext) ? si(ot)(We([S, X((R) => R === i.get(y.key))(ot(m))])) : S;
      }));
    },
    executeQuery(y, S) {
      var m = h.createRequestOperation("query", y, S);
      return h.executeRequestOperation(m);
    },
    executeSubscription(y, S) {
      var m = h.createRequestOperation("subscription", y, S);
      return h.executeRequestOperation(m);
    },
    executeMutation(y, S) {
      var m = h.createRequestOperation("mutation", y, S);
      return h.executeRequestOperation(m);
    },
    readQuery(y, S, m) {
      var R = null;
      return Ct((Ve) => {
        R = Ve;
      })(h.query(y, S, m)).unsubscribe(), R;
    },
    query: (y, S, m) => h.executeQuery(nn(y, S), m),
    subscription: (y, S, m) => h.executeSubscription(nn(y, S), m),
    mutation: (y, S, m) => h.executeMutation(nn(y, S), m)
  }), b = Fs;
  if (process.env.NODE_ENV !== "production") {
    var { next: v, source: A } = oi();
    h.subscribeToDebugTarget = (y) => Ct(y)(A), b = v;
  }
  var x = $s(t.exchanges), I = pt(x({
    client: h,
    dispatchDebug: b,
    forward: Rs({
      dispatchDebug: b
    })
  })(u.source));
  return bs(I), h;
};
function re(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function _e(e) {
  return re(e) === "object";
}
function Ms(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function wi(e, t) {
  return e.length < 124 ? e : t;
}
const qs = "graphql-transport-ws";
var ie;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(ie || (ie = {}));
var U;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(U || (U = {}));
function dr(e) {
  if (!_e(e))
    throw new Error(`Message is expected to be an object, but got ${re(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${re(e.type)}`);
  switch (e.type) {
    case U.ConnectionInit:
    case U.ConnectionAck:
    case U.Ping:
    case U.Pong: {
      if (e.payload != null && !_e(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case U.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${re(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!_e(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${re(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${re(e.payload.query)}`);
      if (e.payload.variables != null && !_e(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${re(e.payload.variables)}`);
      if (e.payload.operationName != null && re(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${re(e.payload.operationName)}`);
      if (e.payload.extensions != null && !_e(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${re(e.payload.extensions)}`);
      break;
    }
    case U.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${re(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!_e(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${re(e.payload)}`);
      break;
    }
    case U.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${re(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ms(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case U.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${re(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Ls(e, t) {
  return dr(typeof e == "string" ? JSON.parse(e, t) : e);
}
function nt(e, t) {
  return dr(e), JSON.stringify(e, t);
}
function Us(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: i = !0,
    onNonLazyError: r = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: o,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: l = 5,
    retryWait: c = async function(B) {
      let C = 1e3;
      for (let k = 0; k < B; k++)
        C *= 2;
      await new Promise((k) => setTimeout(k, C + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = Et,
    isFatalConnectionProblem: d,
    on: p,
    webSocketImpl: h,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: b = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (B) => {
        const C = Math.random() * 16 | 0;
        return (B == "x" ? C : C & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: v,
    jsonMessageReviver: A
  } = e;
  let x;
  if (h) {
    if (!Bs(h))
      throw new Error("Invalid WebSocket implementation provided");
    x = h;
  } else
    typeof WebSocket < "u" ? x = WebSocket : typeof global < "u" ? x = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (x = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!x)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const I = x, y = (() => {
    const N = (() => {
      const C = {};
      return {
        on(k, L) {
          return C[k] = L, () => {
            delete C[k];
          };
        },
        emit(k) {
          var L;
          "id" in k && ((L = C[k.id]) === null || L === void 0 || L.call(C, k));
        }
      };
    })(), B = {
      connecting: p != null && p.connecting ? [p.connecting] : [],
      opened: p != null && p.opened ? [p.opened] : [],
      connected: p != null && p.connected ? [p.connected] : [],
      ping: p != null && p.ping ? [p.ping] : [],
      pong: p != null && p.pong ? [p.pong] : [],
      message: p != null && p.message ? [N.emit, p.message] : [N.emit],
      closed: p != null && p.closed ? [p.closed] : [],
      error: p != null && p.error ? [p.error] : []
    };
    return {
      onMessage: N.on,
      on(C, k) {
        const L = B[C];
        return L.push(k), () => {
          L.splice(L.indexOf(k), 1);
        };
      },
      emit(C, ...k) {
        for (const L of [...B[C]])
          L(...k);
      }
    };
  })();
  function S(N) {
    const B = [
      // errors are fatal and more critical than close events, throw them first
      y.on("error", (C) => {
        B.forEach((k) => k()), N(C);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      y.on("closed", (C) => {
        B.forEach((k) => k()), N(C);
      })
    ];
  }
  let m, R = 0, Ve, Xt = !1, wt = 0, Un = !1;
  async function Gn() {
    clearTimeout(Ve);
    const [N, B] = await (m ?? (m = new Promise((L, ke) => (async () => {
      if (Xt) {
        if (await c(wt), !R)
          return m = void 0, ke({ code: 1e3, reason: "All Subscriptions Gone" });
        wt++;
      }
      y.emit("connecting");
      const D = new I(typeof t == "function" ? await t() : t, qs);
      let Ce, tt;
      function Tt() {
        isFinite(s) && s > 0 && (clearTimeout(tt), tt = setTimeout(() => {
          D.readyState === I.OPEN && (D.send(nt({ type: U.Ping })), y.emit("ping", !1, void 0));
        }, s));
      }
      S((H) => {
        m = void 0, clearTimeout(Ce), clearTimeout(tt), ke(H), Et(H) && H.code === 4499 && (D.close(4499, "Terminated"), D.onerror = null, D.onclose = null);
      }), D.onerror = (H) => y.emit("error", H), D.onclose = (H) => y.emit("closed", H), D.onopen = async () => {
        try {
          y.emit("opened", D);
          const H = typeof n == "function" ? await n() : n;
          if (D.readyState !== I.OPEN)
            return;
          D.send(nt(H ? {
            type: U.ConnectionInit,
            payload: H
          } : {
            type: U.ConnectionInit
            // payload is completely absent if not provided
          }, v)), isFinite(u) && u > 0 && (Ce = setTimeout(() => {
            D.close(ie.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), Tt();
        } catch (H) {
          y.emit("error", H), D.close(ie.InternalClientError, wi(H instanceof Error ? H.message : new Error(H).message, "Internal client error"));
        }
      };
      let $e = !1;
      D.onmessage = ({ data: H }) => {
        try {
          const K = Ls(H, A);
          if (y.emit("message", K), K.type === "ping" || K.type === "pong") {
            y.emit(K.type, !0, K.payload), K.type === "pong" ? Tt() : o || (D.send(nt(K.payload ? {
              type: U.Pong,
              payload: K.payload
            } : {
              type: U.Pong
              // payload is completely absent if not provided
            })), y.emit("pong", !1, K.payload));
            return;
          }
          if ($e)
            return;
          if (K.type !== U.ConnectionAck)
            throw new Error(`First message cannot be of type ${K.type}`);
          clearTimeout(Ce), $e = !0, y.emit("connected", D, K.payload), Xt = !1, wt = 0, L([
            D,
            new Promise((Nu, Ir) => S(Ir))
          ]);
        } catch (K) {
          D.onmessage = null, y.emit("error", K), D.close(ie.BadResponse, wi(K instanceof Error ? K.message : new Error(K).message, "Bad response"));
        }
      };
    })())));
    N.readyState === I.CLOSING && await B;
    let C = () => {
    };
    const k = new Promise((L) => C = L);
    return [
      N,
      C,
      Promise.race([
        // wait for
        k.then(() => {
          if (!R) {
            const L = () => N.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ve = setTimeout(() => {
              N.readyState === I.OPEN && L();
            }, a) : L();
          }
        }),
        // or
        B
      ])
    ];
  }
  function Bn(N) {
    if (Et(N) && (Gs(N.code) || [
      ie.InternalServerError,
      ie.InternalClientError,
      ie.BadRequest,
      ie.BadResponse,
      ie.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      ie.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      ie.SubscriberAlreadyExists,
      ie.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(N.code)))
      throw N;
    if (Un)
      return !1;
    if (Et(N) && N.code === 1e3)
      return R > 0;
    if (!l || wt >= l || !f(N) || d != null && d(N))
      throw N;
    return Xt = !0;
  }
  return i || (async () => {
    for (R++; ; )
      try {
        const [, , N] = await Gn();
        await N;
      } catch (N) {
        try {
          if (!Bn(N))
            return;
        } catch (B) {
          return r == null ? void 0 : r(B);
        }
      }
  })(), {
    on: y.on,
    subscribe(N, B) {
      const C = b(N);
      let k = !1, L = !1, ke = () => {
        R--, k = !0;
      };
      return (async () => {
        for (R++; ; )
          try {
            const [D, Ce, tt] = await Gn();
            if (k)
              return Ce();
            const Tt = y.onMessage(C, ($e) => {
              switch ($e.type) {
                case U.Next: {
                  B.next($e.payload);
                  return;
                }
                case U.Error: {
                  L = !0, k = !0, B.error($e.payload), ke();
                  return;
                }
                case U.Complete: {
                  k = !0, ke();
                  return;
                }
              }
            });
            D.send(nt({
              id: C,
              type: U.Subscribe,
              payload: N
            }, v)), ke = () => {
              !k && D.readyState === I.OPEN && D.send(nt({
                id: C,
                type: U.Complete
              }, v)), R--, k = !0, Ce();
            }, await tt.finally(Tt);
            return;
          } catch (D) {
            if (!Bn(D))
              return;
          }
      })().then(() => {
        L || B.complete();
      }).catch((D) => {
        B.error(D);
      }), () => {
        k || ke();
      };
    },
    async dispose() {
      if (Un = !0, m) {
        const [N] = await m;
        N.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      m && y.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Et(e) {
  return _e(e) && "code" in e && "reason" in e;
}
function Gs(e) {
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
function Bs(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Me = null;
typeof WebSocket < "u" ? Me = WebSocket : typeof MozWebSocket < "u" ? Me = MozWebSocket : typeof global < "u" ? Me = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Me = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Me = self.WebSocket || self.MozWebSocket);
const zs = Me;
function de(e) {
  if (typeof e != "object")
    return e;
  var t, n, i = Object.prototype.toString.call(e);
  if (i === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = de(e[t]));
    } else {
      n = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(n, t, {
          value: de(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : n[t] = de(e[t]);
    }
    return n;
  }
  if (i === "[object Array]") {
    for (t = e.length, n = Array(t); t--; )
      n[t] = de(e[t]);
    return n;
  }
  return i === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(r) {
    n.add(de(r));
  }), n) : i === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(r, a) {
    n.set(de(a), de(r));
  }), n) : i === "[object Date]" ? /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : i === "[object DataView]" ? new e.constructor(de(e.buffer)) : i === "[object ArrayBuffer]" ? e.slice(0) : i.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var ne;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ne || (ne = {}));
class Qs {
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
    }), this.__gadget.instantiatedFields = de(t), this.__gadget.persistedFields = de(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((i) => this.__gadget.fieldKeysTracker[i] = !0));
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
  hasChanges(t = ne.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const n = t == ne.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((i) => !At(n[i], this.__gadget.fields[i]));
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
  changes(t, n = ne.SinceLoaded) {
    const r = (typeof t == "string" ? n : t || n) == ne.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = r[t], s = this.__gadget.fields[t], o = !At(s, a);
      return o ? { changed: o, current: s, previous: a } : { changed: o };
    } else {
      const a = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const o = this.__gadget.fieldKeys[s];
        At(r[o], this.__gadget.fields[o]) || (a[o] = { current: this.__gadget.fields[o], previous: r[o] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ne.SinceLoaded) {
    const n = t == ne.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, i = {};
    for (let r = 0; r < this.__gadget.fieldKeys.length; r++) {
      const a = this.__gadget.fieldKeys[r];
      At(n[a], this.__gadget.fields[a]) || (i[a] = this.__gadget.fields[a]);
    }
    return i;
  }
  changed(t, n = ne.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, n).changed : this.hasChanges(t === void 0 ? n : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ne.SinceLoaded) {
    t == ne.SinceLoaded ? this.__gadget.instantiatedFields = de(this.__gadget.fields) : t == ne.SinceLastPersisted && (this.__gadget.persistedFields = de(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ne.SinceLoaded) {
    let n;
    t == ne.SinceLoaded ? n = Object.keys(this.__gadget.instantiatedFields) : n = Object.keys(this.__gadget.persistedFields);
    for (const i of this.__gadget.fieldKeys)
      n.includes(i) || delete this.__gadget.fields[i];
    t == ne.SinceLoaded ? Object.assign(this.__gadget.fields, de(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, de(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Pn({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const fr = Qs;
class Ws extends Error {
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
class In extends Error {
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
class Jt extends Error {
  constructor(t, n) {
    super(t.startsWith("GGT_") ? t : `${n}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
}
class Ti extends Error {
  constructor(t) {
    let n;
    On(t) ? n = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : n = "GraphQL websocket closed unexpectedly by the server", super(n), Object.defineProperty(this, "code", {
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
class Js extends Error {
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
class Ys extends Error {
  constructor(t, n, i, r) {
    const a = n.slice(0, 3), s = n.length > 3 ? `, and ${n.length - 3} more error${n.length > 4 ? "s" : ""} need${n.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${i ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: o, message: u }) => `${o} ${u}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = n, this.modelApiIdentifier = i, this.record = r;
  }
}
class pr extends Error {
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
class Hs extends Error {
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
class Ks extends Error {
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
function Ii(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const qt = (e, t) => {
  const n = t.length;
  let i = 0;
  for (; e != null && i < n; )
    e = e[t[i++]];
  return i && i == n ? e : void 0;
}, On = (e) => (e == null ? void 0 : e.type) == "close", Ie = (e, t) => typeof e != "string" ? "" : Yt(e, t), Oi = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Yt = (e, t = !0) => {
  let n = "" + e;
  return t ? n = n.replace(/^[a-z\d]*/, (i) => Oi(i)) : n = n.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (i) => i.toLowerCase()), n = n.replace(/(?:_|(\/))([a-z\d]*)/gi, (i, r, a, s, o) => (r || (r = ""), "" + r + Oi(a))), n;
}, Xs = (e) => `${Yt(e)}Sort`, Zs = (e) => `${Yt(e)}Filter`, eo = (e, t, n) => new pr(`More than one record found for ${e}.${t} = ${n}. Please confirm your unique validation is not reporting an error.`), Pe = (e, t, n = !1) => {
  var i;
  if (e.error)
    throw e.error instanceof vt && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((o) => "[Network] " + o.message).join(`
`)), e.error;
  const r = qt(e.data, t), a = qt(r, ["edges"]), s = a ?? r;
  if (r === void 0)
    throw new Ws(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null || n && Array.isArray(s) && s.length === 0)
    throw new Hs(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return r;
}, ut = (e, t) => {
  var n;
  if (e.error)
    throw e.error instanceof vt && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((r) => "[Network] " + r.message).join(`
`)), e.error;
  const i = qt(e.data, t);
  return i ?? null;
}, hr = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Ys(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new pr(e.message) : new Jt(e.message, e.code);
}, je = (e, t) => {
  const n = Pe(e, t);
  if (!n.success) {
    const i = n.errors && n.errors[0];
    throw i ? hr(i) : new Jt("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return n;
}, yr = (e) => {
  var t, n, i, r;
  if (!((n = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || n === void 0) && n.hydrations)
    return new Pr((r = (i = e.data) === null || i === void 0 ? void 0 : i.gadgetMeta) === null || r === void 0 ? void 0 : r.hydrations);
}, lt = (e, t) => {
  const n = yr(e);
  return n && (t = n.apply(t)), new fr(t);
}, Cn = (e, t) => {
  const n = yr(e);
  return n && (t = n.apply(t)), t == null ? void 0 : t.map((i) => new fr(i));
}, Lt = (e, t) => {
  const n = t.edges.map((i) => i.node);
  return Cn(e, n);
}, Pn = (e) => {
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
          t[n] = i === void 0 ? null : Pn(i);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const n of Object.keys(e)) {
          const i = Pn(e[n]);
          i !== void 0 && (t[n] = i);
        }
        return t;
      }
    }
  }
}, sn = "gstk", Pi = (e) => {
  try {
    const t = window[e];
    return t.setItem(sn, sn), t.removeItem(sn), !0;
  } catch {
    return !1;
  }
}, Ni = Object.prototype.toString, Ei = Object.getPrototypeOf, Ai = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, rt = (e, t, n) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (n.indexOf(e) > -1 && n.indexOf(t) > -1)
    return !0;
  const i = Ni.call(e), r = Ni.call(t);
  let a, s, o;
  if (n.push(e, t), i != r || (a = Ai(e), s = Ai(t), a.length != s.length || a.some(function(u) {
    return !rt(e[u], t[u], n);
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
        if (o = a.next(), !rt(o.value, s.next().value, n))
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
        if (!(!(o in e) && !(o in t)) && (o in e != o in t || !rt(e[o], t[o], n)))
          return !1;
      return !0;
    case "Object":
      return rt(Ei(e), Ei(t), n);
    default:
      return !1;
  }
}, At = (e, t) => rt(e, t, []);
class mr extends Error {
}
class to {
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
    throw Pe(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new mr("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Pe(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Pe(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class no {
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
const io = (e) => {
  const t = [...e.definitions].reverse().find((n) => n.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((i) => i.kind == "Field").name.value;
}, ki = cr({
  onOperation: (e) => {
    var t, n;
    (t = (n = e.context).operationName) !== null && t !== void 0 || (n.operationName = io(e.query) || "unknown");
  }
}), ro = cr({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), ao = 2, so = 4800, oo = 1e4, uo = [ie.ConnectionAcknowledgementTimeout, ie.ConnectionInitialisationTimeout], _i = Symbol.for("gadget/connection"), lo = "token", co = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var z;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(z || (z = {}));
class br {
  constructor(t) {
    var n, i, r, a, s;
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
      value: z.Anonymous
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
        let f = null, d;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(b) {
              return console.warn("Transport error encountered during transaction processing", b), !0;
            },
            connectionAckWaitTimeout: so,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const p = new Si({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              ki,
              ...this.exchanges.beforeAsync,
              an({
                forwardSubscription(b) {
                  const v = { ...b, query: b.query || "" };
                  return {
                    subscribe: (A) => ({
                      unsubscribe: f.subscribe(v, A)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          p[_i] = this, d = new to(p, f), this.currentTransaction = d, await d.start();
          const h = await l(d);
          return await d.commit(), h;
        } catch (p) {
          try {
            d != null && d.open && await d.rollback();
          } catch (h) {
            h instanceof mr || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw On(p) ? new Ti(p) : p;
        } finally {
          await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (o, u = {}) => {
        var l;
        o = fo(o, (l = this.options.baseRouteURL) !== null && l !== void 0 ? l : this.options.endpoint), this.isGadgetRequest(o) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == z.Custom && await this.options.authenticationMode.custom.processFetch(o, u));
        const c = await this._fetchImplementation(o, u);
        if (this.authenticationMode == z.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), d = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          d && this.sessionTokenStore.setItem(this.sessionStorageKey, d);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...o) => {
      const { fetch: u } = await import("./browser-ponyfill-a950d05c.js").then((l) => l.b);
      return await u(...o);
    }, this.websocketImplementation = (i = (n = t.websocketImplementation) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.WebSocket) !== null && i !== void 0 ? i : zs, this.websocketsEndpoint = (r = t.websocketsEndpoint) !== null && r !== void 0 ? r : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${lo}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = z.InternalAuthToken : t.apiKey ? this.authenticationMode = z.APIKey : t.custom && (this.authenticationMode = z.Custom), this.options.authenticationMode = t), (n = this.authenticationMode) !== null && n !== void 0 || (this.authenticationMode = z.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = z.BrowserSession;
    const n = !t || typeof t == "boolean" ? at.Durable : t.storageType;
    let i;
    n == at.Durable && Pi("localStorage") ? i = window.localStorage : n == at.Session && Pi("sessionStorage") ? i = window.sessionStorage : i = new no(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && i.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = i, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let n;
    if (typeof t == "string" ? n = t : typeof t == "object" && "url" in t ? n = t.url : n = String(t), Nn(this.options.endpoint))
      return !!Nn(n);
    const i = new URL(this.options.endpoint).host;
    return n.includes(i);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, ki, ro];
    typeof window < "u" && t.push(Vs), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      an({
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
      an({
        isSubscriptionOperation: (i) => i.query.definitions.some((r) => Oa(r, i.variables)),
        forwardSubscription: (i) => ({
          subscribe: (r) => {
            const a = { ...i, query: i.query || "" };
            return {
              unsubscribe: Qa(Ua(za((s) => this.getBaseSubscriptionClient().subscribe(a, s))), r)
            };
          }
        })
      }),
      Cs,
      ...this.exchanges.afterAll
    );
    const n = new Si({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return n[_i] = this, n;
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
    return Us({
      url: n,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var i, r;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == z.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == z.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == z.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == z.Custom && await ((r = (i = this.options.authenticationMode) === null || i === void 0 ? void 0 : i.custom) === null || r === void 0 ? void 0 : r.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (i, r) => {
          var a, s, o, u, l, c;
          if (this.authenticationMode == z.BrowserSession && (r != null && r.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, r.sessionToken);
          }
          (u = (o = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || o === void 0 ? void 0 : o.connected) === null || u === void 0 || u.call(o, i, r), (c = (l = t == null ? void 0 : t.on) === null || l === void 0 ? void 0 : l.connected) === null || c === void 0 || c.call(l, i, r);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const n = {};
    if (this.authenticationMode == z.InternalAuthToken)
      n.authorization = "Basic " + co("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == z.APIKey)
      n.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == z.BrowserSession) {
      const i = this.sessionTokenStore.getItem(this.sessionStorageKey);
      i && (n.authorization = `Session ${i}`);
    }
    return n["x-gadget-environment"] = this.environment, n;
  }
  async waitForOpenedConnection(t) {
    let n = this.newSubscriptionClient(t), i = [], r = t.connectionAttempts || ao;
    const a = t.connectionGlobalTimeoutMs || oo, s = () => {
      i.forEach((o) => o()), i = [];
    };
    return await new Promise((o, u) => {
      const l = setTimeout(() => {
        this.disposeClient(n), f(new Js("Timeout opening websocket connection to Gadget API"));
      }, a), c = (h) => {
        if (On(h) && uo.includes(h.code) && r > 0) {
          r -= 1, this.disposeClient(n), n = this.newSubscriptionClient(t), p();
          return;
        }
        clearTimeout(l), u(new Ti(h));
      }, f = (h) => {
        clearTimeout(l), u(h);
      }, d = () => {
        clearTimeout(l), o(n);
      }, p = () => {
        s(), i.push(n.on("connected", d)), i.push(n.on("closed", c)), i.push(n.on("error", f));
      };
      p();
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
Object.defineProperty(br, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.9"
});
function fo(e, t) {
  if (typeof e != "string")
    return e;
  if (Nn(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Nn(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class ht extends Array {
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
  static boot(t, n, i) {
    const r = new ht();
    return r.push(...n), r.modelManager = t, r.pagination = i, Object.freeze(r), r;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Jt("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new In("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new In("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: n, last: i, after: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: i || n
    });
  }
}
const En = (e) => Object.entries(e).flatMap(([t, n]) => {
  if (typeof n == "boolean")
    return n ? t : !1;
  if (n instanceof Rn) {
    let i = "";
    const r = Object.entries(n.args).filter(([a, s]) => s != null).map(([a, s]) => {
      var o;
      return `${a}: ${s instanceof Mn ? `$${(o = s.name) !== null && o !== void 0 ? o : a}` : JSON.stringify(s)}`;
    });
    return r.length > 0 && (i = `(${r.join(", ")})`), n.subselection ? [`${t}${i} {`, ...En(n.subselection), "}"] : `${t}${i}`;
  } else
    return [`${t} {`, ...En(n), "}"];
}).filter((t) => !!t).map((t) => "  " + t), $n = (e) => {
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
    r instanceof Rn ? Object.entries(r.args).forEach(([a, s]) => {
      var o;
      s instanceof Mn && (t[(o = s.name) !== null && o !== void 0 ? o : n(a)] = s);
    }) : typeof r == "object" && r !== null && Object.assign(t, $n(r));
  }), t;
}, po = (e) => {
  const t = $n(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([i, r]) => `$${i}: ${r.type}`).join(", ")})`;
};
class Rn {
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
class Mn {
  constructor(t, n, i) {
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
      value: i
    });
  }
  present() {
    return this.value != null;
  }
}
const Xe = (e, t) => new Rn(e, t), Y = (e) => new Mn(e.type + (e.required ? "!" : ""), e.name, e.value), ho = (e) => {
  var t;
  const n = po(e), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${n}${i} {
${En(e.fields).join(`
`)}
}`;
}, Ze = (e) => {
  const t = $n(e.fields);
  return {
    query: ho(e),
    variables: Object.entries(t ?? {}).reduce((n, [i, r]) => (typeof r.value < "u" && (n[i] = r.value), n), {})
  };
}, St = `
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
`, et = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, yo = (e) => `
    query InternalFind${Ie(e)}($id: GadgetID!, $select: [String!]) {
      ${et(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, gr = (e, t) => ({
  search: t != null && t.search ? Y({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? Y({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? Y({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? Y({ value: vr(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), mo = (e, t) => {
  const n = Ie(e), i = gr(n, t);
  return Ze({
    type: "query",
    name: `InternalFindFirst${n}`,
    fields: {
      internal: {
        [`list${n}`]: Xe({
          ...i,
          first: Y({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, bo = (e, t) => {
  const n = Ie(e), i = gr(n, t);
  return Ze({
    type: "query",
    name: `InternalFindMany${n}`,
    fields: {
      internal: {
        [`list${n}`]: Xe({
          ...i,
          after: Y({ value: t == null ? void 0 : t.after, type: "String" }),
          before: Y({ value: t == null ? void 0 : t.before, type: "String" }),
          first: Y({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: Y({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, go = (e) => {
  const t = Ie(e);
  return `
    ${St}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${et(e)}
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
}, vo = (e, t) => {
  const n = Ie(e), i = Ie(t);
  return `
    ${St}

    mutation InternalBulkCreate${i}($records: [Internal${n}Input]!) {
      ${et(e)}
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
}, So = (e) => {
  const t = Ie(e);
  return `
    ${St}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${et(e)}
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
}, wo = (e) => {
  const t = Ie(e);
  return `
    ${St}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${et(e)}
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
}, To = (e) => {
  const t = Ie(e);
  return `
    ${St}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${et(e)}
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
class ge {
  constructor(t, n, i) {
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
      value: i
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = Yt(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((i) => i === this.apiIdentifier);
  }
  getRecordFromData(t, n) {
    let i = t;
    if (!this.validateRecord(t))
      throw new Jt(`Invalid arguments found in variables. Did you mean to use ${n}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const r = await this.connection.currentClient.query(yo(this.apiIdentifier), { id: t, select: vr(n == null ? void 0 : n.select) }).toPromise(), s = (i ? Pe : ut)(r, ["internal", this.apiIdentifier]);
    return lt(r, s);
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
    const n = bo(this.apiIdentifier, t), i = await this.connection.currentClient.query(n.query, n.variables).toPromise(), r = ut(i, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Lt(i, r);
    return ht.boot(this, a, { options: t, pageInfo: r.pageInfo });
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
    const i = mo(this.apiIdentifier, t), r = await this.connection.currentClient.query(i.query, i.variables).toPromise();
    let a;
    n === !1 ? a = ut(r, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Pe(r, ["internal", `list${this.capitalizedApiIdentifier}`], n);
    const s = Lt(r, a);
    return ht.boot(this, s, { options: t, pageInfo: a.pageInfo })[0];
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
    const n = await this.connection.currentClient.mutation(go(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), i = je(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return lt(n, i[this.apiIdentifier]);
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
      throw new In("Cannot perform bulkCreate without a pluralApiIdentifier");
    const i = Ie(this.options.pluralApiIdentifier), r = await this.connection.currentClient.mutation(vo(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = je(r, ["internal", `bulkCreate${i}`]);
    return Cn(r, a[this.options.pluralApiIdentifier]);
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
    Ii(t, "Can't update a record without an ID passed");
    const i = await this.connection.currentClient.mutation(So(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(n, "update")
    }).toPromise(), r = je(i, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return lt(i, r[this.apiIdentifier]);
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
    Ii(t, "Can't delete a record without an ID");
    const n = await this.connection.currentClient.mutation(wo(this.apiIdentifier), { id: t }).toPromise();
    je(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const n = await this.connection.currentClient.mutation(To(this.apiIdentifier), t).toPromise();
    je(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function vr(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [n, i] of Object.entries(e))
    i && t.push(n);
  return t;
}
const qn = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ln = (e, t = !1) => {
  const n = { ...e };
  return t && (n.__typename = !0), n;
}, Ht = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Io = (e, t, n, i, r) => {
  const a = {};
  return typeof t < "u" && (a.id = Y({ type: "GadgetID!", value: t })), Ze({
    type: "query",
    name: e,
    fields: {
      [e]: Xe(a, Ln((r == null ? void 0 : r.select) || n, !0)),
      ...qn(i)
    },
    directives: Ht(r)
  });
}, Oo = (e, t, n, i, r, a) => Sr(e, i, r, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: n
    }
  }
}), Sr = (e, t, n, i) => Ze({
  type: "query",
  name: e,
  fields: {
    [e]: Xe({
      after: Y({ value: i == null ? void 0 : i.after, type: "String" }),
      first: Y({ value: i == null ? void 0 : i.first, type: "Int" }),
      before: Y({ value: i == null ? void 0 : i.before, type: "String" }),
      last: Y({ value: i == null ? void 0 : i.last, type: "Int" }),
      sort: i != null && i.sort ? Y({ value: i.sort, type: `[${Xs(n)}!]` }) : void 0,
      filter: i != null && i.filter ? Y({ value: i.filter, type: `[${Zs(n)}!]` }) : void 0,
      search: i != null && i.search ? Y({ value: i.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ln((i == null ? void 0 : i.select) || t, !0)
      }
    }),
    ...qn(n)
  },
  directives: Ht(i)
}), wr = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Tr = (e) => Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Y(n)])), Po = (e, t, n, i, r, a, s, o, u) => {
  const l = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: Xe(Tr(r), {
      success: !0,
      errors: wr,
      [i]: l && !u ? Ln(l, !0) : !1,
      [o ? "results" : "result"]: !!u
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
      ...qn(n)
    },
    directives: Ht(a)
  };
  return Ze(f);
}, No = (e, t, n, i) => {
  let r = {
    [e]: Xe(Tr(t), {
      success: !0,
      errors: wr,
      result: !0
    })
  };
  return n && (r = {
    [n]: r
  }), Ze({
    type: "mutation",
    name: e,
    fields: r,
    directives: Ht(i)
  });
}, q = async (e, t, n, i, r, a, s = !0) => {
  const o = Io(t, n, i, r, a), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), c = (s ? Pe : ut)(u, [t]);
  return lt(u, c);
}, Kt = async (e, t, n, i, r, a, s) => {
  const o = Oo(t, n, i, r, a, s), u = await e.connection.currentClient.query(o.query, o.variables).toPromise(), l = Pe(u, [t]), c = Lt(u, l);
  if (c.length > 1)
    throw eo(a, n, i);
  return c[0];
}, E = async (e, t, n, i, r, a) => {
  const s = Sr(t, n, i, r), o = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let u;
  a === !1 ? u = ut(o, [t]) : u = Pe(o, [t], a);
  const l = Lt(o, u);
  return ht.boot(e, l, { options: r, pageInfo: u.pageInfo });
}, w = async (e, t, n, i, r, a, s, o, u, l) => {
  const c = Po(t, n, i, r, s, o, u, a, l), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), d = u ? [u, t] : [t];
  if (a) {
    const p = qt(f.data, d), h = p[r] && n ? Cn(f, p[r]) : void 0;
    if (p.errors) {
      const b = p.errors.map((v) => hr(v));
      throw new Ks(b, h);
    }
    return h;
  } else {
    const p = je(f, d);
    return n == null ? void 0 : l ? p.result : lt(f, p[r]);
  }
}, Eo = async (e, t, n, i) => {
  const r = No(t, n, i), a = await e.currentClient.mutation(r.query, r.variables).toPromise();
  return je(a, i ? [i, t] : [t]).result;
};
function V(e, t, n = {}, i) {
  var s;
  if (e.hasAmbiguousIdentifier && Object.keys(n).some((o) => {
    var u;
    return !((u = e.paramOnlyVariables) != null && u.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let r;
  const a = Object.entries(e.variables).find(([o, u]) => o === "id" && u.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in n && typeof n[e.modelApiIdentifier] == "object" && n[e.modelApiIdentifier] !== null || !i[e.modelApiIdentifier])
      r = n;
    else {
      r = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, u] of Object.entries(n))
        (s = e.paramOnlyVariables) != null && s.includes(o) ? r[o] = u : a && o === a[0] ? r.id = u : r[e.modelApiIdentifier][o] = u;
    }
  else
    r = n;
  return r.id ?? (r.id = t), r;
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
};
async function Ao(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createUser",
    Q,
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
async function ko(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateUser",
    Q,
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
async function _o(e, t) {
  return await w(
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
async function xo(e, t) {
  const n = V(
    this.signUp,
    void 0,
    e,
    this.signUp.variables
  );
  return await w(
    this,
    "signUpUser",
    Q,
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
class jo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "user",
        n,
        Q,
        "user",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "user",
          n,
          Q,
          "user",
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
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "users",
        Q,
        "user",
        n
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "users",
        Q,
        "user",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "users",
          Q,
          "user",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (n, i) => await Kt(
        this,
        "users",
        "email",
        n,
        Q,
        "user",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: Q,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Ao,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Q,
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
      ko,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Q,
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
      _o,
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
      async (n, i) => await w(
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
        i,
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
      xo,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: Q,
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
const ae = {
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
async function Do(e, t) {
  const n = V(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await w(
    this,
    "logInViaEmail",
    ae,
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
async function Fo(e) {
  return await w(
    this,
    "logOut",
    ae,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
class Vo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "session",
        n,
        ae,
        "session",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "session",
          n,
          ae,
          "session",
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
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "sessions",
        ae,
        "session",
        n
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "sessions",
        ae,
        "session",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "sessions",
          ae,
          "session",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logInViaEmail = Object.assign(
      Do,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ae,
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
      Fo,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: ae,
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
const se = {
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
async function Co(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createShopifyProduct",
    se,
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
async function $o(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateShopifyProduct",
    se,
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
async function Ro(e, t) {
  return await w(
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
class Mo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifyProduct",
        n,
        se,
        "shopifyProduct",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifyProduct",
          n,
          se,
          "shopifyProduct",
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
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifyProducts",
        se,
        "shopifyProduct",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifyProducts",
        se,
        "shopifyProduct",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifyProducts",
          se,
          "shopifyProduct",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: se,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Co,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: se,
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
      $o,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
      Ro,
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
      async (n, i) => await w(
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
        i,
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
const oe = {
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
async function qo(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createShopifyProductImage",
    oe,
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
async function Lo(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateShopifyProductImage",
    oe,
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
async function Uo(e, t) {
  return await w(
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
class Go {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifyProductImage",
        n,
        oe,
        "shopifyProductImage",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifyProductImage",
          n,
          oe,
          "shopifyProductImage",
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
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifyProductImages",
        oe,
        "shopifyProductImage",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifyProductImages",
        oe,
        "shopifyProductImage",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifyProductImages",
          oe,
          "shopifyProductImage",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      qo,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: oe,
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
      Lo,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
      Uo,
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
      async (n, i) => await w(
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
        i,
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
const ue = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  name: !0,
  position: !0,
  state: !0,
  updatedAt: !0,
  values: !0
};
async function Bo(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createShopifyProductOption",
    ue,
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
async function zo(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateShopifyProductOption",
    ue,
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
async function Qo(e, t) {
  return await w(
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
class Wo {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifyProductOption",
        n,
        ue,
        "shopifyProductOption",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifyProductOption",
          n,
          ue,
          "shopifyProductOption",
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
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifyProductOptions",
        ue,
        "shopifyProductOption",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifyProductOptions",
        ue,
        "shopifyProductOption",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifyProductOptions",
          ue,
          "shopifyProductOption",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: ue,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Bo,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ue,
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
      zo,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: ue,
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
      Qo,
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
      async (n, i) => await w(
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
        i,
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
const le = {
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
async function Jo(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createShopifyProductVariant",
    le,
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
async function Yo(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateShopifyProductVariant",
    le,
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
async function Ho(e, t) {
  return await w(
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
class Ko {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifyProductVariant",
        n,
        le,
        "shopifyProductVariant",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifyProductVariant",
          n,
          le,
          "shopifyProductVariant",
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
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifyProductVariants",
        le,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifyProductVariants",
        le,
        "shopifyProductVariant",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifyProductVariants",
          le,
          "shopifyProductVariant",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Jo,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: le,
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
      Yo,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: le,
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
      Ho,
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
      async (n, i) => await w(
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
        i,
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
};
async function Xo(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createShopifyShop",
    J,
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
async function Zo(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateShopifyShop",
    J,
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
async function eu(e, t) {
  return await w(
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
async function tu(e, t, n) {
  const i = V(
    this.uninstall,
    e,
    t,
    this.uninstall.variables
  );
  return await w(
    this,
    "uninstallShopifyShop",
    J,
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
async function nu(e, t, n) {
  const i = V(
    this.reinstall,
    e,
    t,
    this.reinstall.variables
  );
  return await w(
    this,
    "reinstallShopifyShop",
    J,
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
class iu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifyShop",
        n,
        J,
        "shopifyShop",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: J,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifyShop",
          n,
          J,
          "shopifyShop",
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
        defaultSelection: J,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifyShops",
        J,
        "shopifyShop",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: J,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifyShops",
        J,
        "shopifyShop",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: J,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifyShops",
          J,
          "shopifyShop",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: J,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      Xo,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: J,
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
      Zo,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: J,
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
      eu,
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
      async (n, i) => await w(
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
        i,
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
      tu,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: J,
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
      nu,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: J,
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
const ce = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  state: !0,
  updatedAt: !0
};
async function ru(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createProductPairing",
    ce,
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
async function au(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateProductPairing",
    ce,
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
async function su(e, t) {
  return await w(
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
class ou {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "productPairing",
        n,
        ce,
        "productPairing",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "productPairing",
          n,
          ce,
          "productPairing",
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
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "productPairings",
        ce,
        "productPairing",
        n
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "productPairings",
        ce,
        "productPairing",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "productPairings",
          ce,
          "productPairing",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ce,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      ru,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: ce,
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
      au,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      su,
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
      async (n, i) => await w(
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
        i,
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
const W = {
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
async function uu(e, t) {
  const n = V(
    this.run,
    void 0,
    e,
    this.run.variables
  );
  return await w(
    this,
    "runShopifySync",
    W,
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
async function lu(e, t, n) {
  const i = V(
    this.complete,
    e,
    t,
    this.complete.variables
  );
  return await w(
    this,
    "completeShopifySync",
    W,
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
async function cu(e, t, n) {
  const i = V(
    this.error,
    e,
    t,
    this.error.variables
  );
  return await w(
    this,
    "errorShopifySync",
    W,
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
class du {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "shopifySync",
        n,
        W,
        "shopifySync",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "shopifySync",
          n,
          W,
          "shopifySync",
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
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "shopifySyncs",
        W,
        "shopifySync",
        n
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "shopifySyncs",
        W,
        "shopifySync",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "shopifySyncs",
          W,
          "shopifySync",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, i) => await Kt(
        this,
        "shopifySyncs",
        "id",
        n,
        W,
        "shopifySync",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      uu,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: W,
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
      lu,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: W,
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
      cu,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: W,
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
const ee = {
  __typename: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  id: !0,
  updatedAt: !0
};
async function fu(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createAmbiguous",
    ee,
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
async function pu(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateAmbiguous",
    ee,
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
async function hu(e, t) {
  return await w(
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
class yu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "ambiguous",
        n,
        ee,
        "ambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "ambiguous",
          n,
          ee,
          "ambiguous",
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
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "ambiguouss",
        ee,
        "ambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "ambiguouss",
        ee,
        "ambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "ambiguouss",
          ee,
          "ambiguous",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, i) => await Kt(
        this,
        "ambiguouss",
        "id",
        n,
        ee,
        "ambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      fu,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ee,
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
      pu,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ee,
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
      hu,
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
      async (n, i) => await w(
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
        i,
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
const te = {
  __typename: !0,
  createdAt: !0,
  id: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
};
async function mu(e, t) {
  const n = V(
    this.create,
    void 0,
    e,
    this.create.variables
  );
  return await w(
    this,
    "createUnambiguous",
    te,
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
async function bu(e, t, n) {
  const i = V(
    this.update,
    e,
    t,
    this.update.variables
  );
  return await w(
    this,
    "updateUnambiguous",
    te,
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
async function gu(e, t) {
  return await w(
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
class vu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (n, i) => await q(
        this,
        "unambiguous",
        n,
        te,
        "unambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (n, i) => {
        const r = await q(
          this,
          "unambiguous",
          n,
          te,
          "unambiguous",
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
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (n) => await E(
        this,
        "unambiguouss",
        te,
        "unambiguous",
        n
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (n) => (await E(
        this,
        "unambiguouss",
        te,
        "unambiguous",
        { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (n) => {
        const i = await E(
          this,
          "unambiguouss",
          te,
          "unambiguous",
          { ...n, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (i == null ? void 0 : i[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (n, i) => await Kt(
        this,
        "unambiguouss",
        "id",
        n,
        te,
        "unambiguous",
        i
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.create = Object.assign(
      mu,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: te,
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
      bu,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: te,
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
      gu,
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
      async (n, i) => await w(
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
        i,
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
const Le = {
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
async function Su(e) {
  return await w(
    this,
    "logOut",
    Le,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession",
    !1
  );
}
async function wu(e, t) {
  const n = V(
    this.logInViaEmail,
    void 0,
    e,
    this.logInViaEmail.variables
  );
  return await w(
    this,
    "logInViaEmail",
    Le,
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
class Tu {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (n) => await q(
        this,
        "currentSession",
        void 0,
        Le,
        "session",
        n
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Le,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      Su,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Le,
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
      wu,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Le,
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
const on = "production", kt = "development", Iu = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class Ou {
  constructor(t) {
    var a;
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async (s) => await Eo(
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
    const n = (t == null ? void 0 : t.environment) ?? Iu() ?? kt;
    let i = n.toLocaleLowerCase();
    i != kt && i != on && (console.warn("Invalid environment", n, "defaulting to development"), i = kt);
    const r = { ...t == null ? void 0 : t.exchanges };
    if (i === kt) {
      const s = ({ forward: o }) => (u) => {
        const l = o(u);
        return vs(
          l,
          Be((c) => {
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
    if (this.connection = new br({
      endpoint: new URL("api/graphql", i == on ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: r,
      environment: i == on ? "Production" : "Development"
    }), typeof window < "u" && this.connection.authenticationMode == z.APIKey && !((a = t == null ? void 0 : t.authenticationMode) != null && a.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new jo(this.connection), this.session = new Vo(this.connection), this.shopifyProduct = new Mo(this.connection), this.shopifyProductImage = new Go(this.connection), this.shopifyProductOption = new Wo(this.connection), this.shopifyProductVariant = new Ko(this.connection), this.shopifyShop = new iu(this.connection), this.productPairing = new ou(this.connection), this.shopifySync = new du(this.connection), this.ambiguous = new yu(this.connection), this.unambiguous = new vu(this.connection), this.currentSession = new Tu(this.connection), this.internal = {
      user: new ge("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new ge("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new ge("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new ge("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new ge("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new ge("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new ge("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new ge("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new ge("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new ge("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new ge("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
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
const Pu = new Ou(), Eu = async () => {
  await Pu.shopifyProduct.findMany();
};
export {
  Eu as read
};
