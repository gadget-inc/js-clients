var De;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(De || (De = {}));
const Gi = {
  DateTime(e) {
    return new Date(e);
  }
};
class Bi {
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
    for (const [n, r] of Object.entries(this.plan)) {
      const a = i[n];
      a != null && (i[n] = Gi[r](a));
    }
    return i;
  }
}
var Ie = {
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
class mt extends Error {
  constructor(t, i, n, r, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), i && (this.nodes = Array.isArray(i) ? i : [i]), n && (this.source = n), r && (this.positions = r), o && (this.originalError = o);
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
}
var N, v;
function F(e) {
  return new mt(`Syntax Error: Unexpected token at ${v} in ${e}`);
}
function ae(e) {
  if (e.lastIndex = v, e.test(N))
    return N.slice(v, v = e.lastIndex);
}
var Qe = / +(?=[^\s])/y;
function Ri(e) {
  for (var t = e.split(`
`), i = "", n = 0, r = 0, a = t.length - 1, o = 0; o < t.length; o++)
    Qe.lastIndex = 0, Qe.test(t[o]) && (o && (!n || Qe.lastIndex < n) && (n = Qe.lastIndex), r = r || o, a = o);
  for (var s = r; s <= a; s++)
    s !== r && (i += `
`), i += t[s].slice(n).replace(/\\"""/g, '"""');
  return i;
}
function S() {
  for (var e = 0 | N.charCodeAt(v++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | N.charCodeAt(v++))
    if (e === 35)
      for (; (e = N.charCodeAt(v++)) !== 10 && e !== 13; )
        ;
  v--;
}
var mi = /[_A-Za-z]\w*/y;
function de() {
  var e;
  if (e = ae(mi))
    return {
      kind: "Name",
      value: e
    };
}
var Li = /(?:null|true|false)/y, gi = /\$[_A-Za-z]\w*/y, zi = /-?\d+/y, Wi = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Ki = /\\/g, Qi = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Ji = /"(?:"|[^\r\n]*?[^\\]")/y;
function Ze(e) {
  var t, i;
  if (i = ae(Li))
    t = i === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: i === "true"
    };
  else if (!e && (i = ae(gi)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: i.slice(1)
      }
    };
  else if (i = ae(zi)) {
    var n = i;
    (i = ae(Wi)) ? t = {
      kind: "FloatValue",
      value: n + i
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (i = ae(mi))
    t = {
      kind: "EnumValue",
      value: i
    };
  else if (i = ae(Qi))
    t = {
      kind: "StringValue",
      value: Ri(i.slice(3, -3)),
      block: !0
    };
  else if (i = ae(Ji))
    t = {
      kind: "StringValue",
      value: Ki.test(i) ? JSON.parse(i) : i.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (N.charCodeAt(v) === 91) {
      v++, S();
      for (var s = []; o = Ze(a); )
        s.push(o);
      if (N.charCodeAt(v++) !== 93)
        throw F("ListValue");
      return S(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (N.charCodeAt(v) === 123) {
      v++, S();
      for (var o = [], s; s = de(); ) {
        if (S(), N.charCodeAt(v++) !== 58)
          throw F("ObjectField");
        S();
        var u = Ze(a);
        if (!u)
          throw F("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: u
        });
      }
      if (N.charCodeAt(v++) !== 125)
        throw F("ObjectValue");
      return S(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return S(), t;
}
function bi(e) {
  var t = [];
  if (S(), N.charCodeAt(v) === 40) {
    v++, S();
    for (var i; i = de(); ) {
      if (S(), N.charCodeAt(v++) !== 58)
        throw F("Argument");
      S();
      var n = Ze(e);
      if (!n)
        throw F("Argument");
      t.push({
        kind: "Argument",
        name: i,
        value: n
      });
    }
    if (!t.length || N.charCodeAt(v++) !== 41)
      throw F("Argument");
    S();
  }
  return t;
}
function Pe(e) {
  var t = [];
  for (S(); N.charCodeAt(v) === 64; ) {
    v++;
    var i = de();
    if (!i)
      throw F("Directive");
    S(), t.push({
      kind: "Directive",
      name: i,
      arguments: bi(e)
    });
  }
  return t;
}
function Hi() {
  var e = de();
  if (e) {
    S();
    var t;
    if (N.charCodeAt(v) === 58) {
      if (v++, S(), t = e, !(e = de()))
        throw F("Field");
      S();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: bi(!1),
      directives: Pe(!1),
      selectionSet: at()
    };
  }
}
function vi() {
  var e;
  if (S(), N.charCodeAt(v) === 91) {
    v++, S();
    var t = vi();
    if (!t || N.charCodeAt(v++) !== 93)
      throw F("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = de())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw F("NamedType");
  return S(), N.charCodeAt(v) === 33 ? (v++, S(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Yi = /on/y;
function Si() {
  if (ae(Yi)) {
    S();
    var e = de();
    if (!e)
      throw F("NamedType");
    return S(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Zi = /\.\.\./y;
function Xi() {
  if (ae(Zi)) {
    S();
    var e = v, t;
    if ((t = de()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Pe(!1)
      };
    v = e;
    var i = Si(), n = Pe(!1), r = at();
    if (!r)
      throw F("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: i,
      directives: n,
      selectionSet: r
    };
  }
}
function at() {
  var e;
  if (S(), N.charCodeAt(v) === 123) {
    v++, S();
    for (var t = []; e = Xi() || Hi(); )
      t.push(e);
    if (!t.length || N.charCodeAt(v++) !== 125)
      throw F("SelectionSet");
    return S(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var en = /fragment/y;
function tn() {
  if (ae(en)) {
    S();
    var e = de();
    if (!e)
      throw F("FragmentDefinition");
    S();
    var t = Si();
    if (!t)
      throw F("FragmentDefinition");
    var i = Pe(!1), n = at();
    if (!n)
      throw F("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: i,
      selectionSet: n
    };
  }
}
var nn = /(?:query|mutation|subscription)/y;
function rn() {
  var e, t, i = [], n = [];
  (e = ae(nn)) && (S(), t = de(), i = function() {
    var o, s = [];
    if (S(), N.charCodeAt(v) === 40) {
      for (v++, S(); o = ae(gi); ) {
        if (S(), N.charCodeAt(v++) !== 58)
          throw F("VariableDefinition");
        var u = vi(), c = void 0;
        if (N.charCodeAt(v) === 61 && (v++, S(), !(c = Ze(!0))))
          throw F("VariableDefinition");
        S(), s.push({
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
          directives: Pe(!0)
        });
      }
      if (N.charCodeAt(v++) !== 41)
        throw F("VariableDefinition");
      S();
    }
    return s;
  }(), n = Pe(!1));
  var r = at();
  if (r)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: i,
      directives: n,
      selectionSet: r
    };
}
function an(e, t) {
  return N = typeof e.body == "string" ? e.body : e, v = 0, function() {
    var n;
    S();
    for (var r = []; n = tn() || rn(); )
      r.push(n);
    return {
      kind: "Document",
      definitions: r
    };
  }();
}
function on(e) {
  return JSON.stringify(e);
}
function sn(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var se = (e) => !(!e || !e.length), z = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !se(e.variableDefinitions) && !se(e.directives))
      return z.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), se(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(z.VariableDefinition).join(", ") + ")"), se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), t + " " + z.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = z.Variable(e.variable) + ": " + ue(e.type);
    return e.defaultValue && (t += " = " + ue(e.defaultValue)), se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (se(e.arguments)) {
      var i = e.arguments.map(z.Argument), n = t + "(" + i.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + i.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), e.selectionSet ? t + " " + z.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? sn(e.value) : on(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(ue).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(z.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + ue(e.value),
  Document: (e) => se(e.definitions) ? e.definitions.map(ue).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(ue).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + ue(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), t + " " + ue(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, se(e.directives) && (t += " " + e.directives.map(z.Directive).join(" ")), t + " " + ue(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return se(e.arguments) && (t += "(" + e.arguments.map(z.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + ue(e.type) + "]",
  NonNullType: (e) => ue(e.type) + "!"
};
function ue(e) {
  return z[e.kind] ? z[e.kind](e) : "";
}
var Et = () => {
}, oe = Et;
function ce(e) {
  return {
    tag: 0,
    0: e
  };
}
function Re(e) {
  return {
    tag: 1,
    0: e
  };
}
var un = (e) => e;
function L(e) {
  return (t) => (i) => {
    var n = oe;
    t((r) => {
      r === 0 ? i(0) : r.tag === 0 ? (n = r[0], i(r)) : e(r[0]) ? i(r) : n(0);
    });
  };
}
function xe(e) {
  return (t) => (i) => t((n) => {
    n === 0 || n.tag === 0 ? i(n) : i(Re(e(n[0])));
  });
}
function Me(e) {
  return (t) => (i) => {
    var n = [], r = oe, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, n.length || i(0)) : s.tag === 0 ? r = s[0] : (a = !1, function(c) {
        var l = oe;
        c((p) => {
          if (p === 0) {
            if (n.length) {
              var y = n.indexOf(l);
              y > -1 && (n = n.slice()).splice(y, 1), n.length || (o ? i(0) : a || (a = !0, r(0)));
            }
          } else
            p.tag === 0 ? (n.push(l = p[0]), l(0)) : n.length && (i(p), l(0));
        });
      }(e(s[0])), a || (a = !0, r(0))));
    }), i(ce((s) => {
      if (s === 1) {
        o || (o = !0, r(1));
        for (var u = 0, c = n, l = n.length; u < l; u++)
          c[u](1);
        n.length = 0;
      } else {
        !o && !a ? (a = !0, r(0)) : a = !1;
        for (var p = 0, y = n, f = n.length; p < f; p++)
          y[p](0);
      }
    }));
  };
}
function ln(e) {
  return Me(un)(e);
}
function Ae(e) {
  return ln(fn(e));
}
function wi(e) {
  return (t) => (i) => {
    var n = !1;
    t((r) => {
      if (!n)
        if (r === 0)
          n = !0, i(0), e();
        else if (r.tag === 0) {
          var a = r[0];
          i(ce((o) => {
            o === 1 ? (n = !0, a(1), e()) : a(o);
          }));
        } else
          i(r);
    });
  };
}
function ot(e) {
  return (t) => (i) => {
    var n = !1;
    t((r) => {
      if (!n)
        if (r === 0)
          n = !0, i(0);
        else if (r.tag === 0) {
          var a = r[0];
          i(ce((o) => {
            o === 1 && (n = !0), a(o);
          }));
        } else
          e(r[0]), i(r);
    });
  };
}
function Rt(e) {
  return (t) => (i) => t((n) => {
    n === 0 ? i(0) : n.tag === 0 ? (i(n), e()) : i(n);
  });
}
function Ge(e) {
  var t = [], i = oe, n = !1;
  return (r) => {
    t.push(r), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, u = t.length; o < u; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        i = a[0];
      else {
        n = !1;
        for (var c = 0, l = t, p = t.length; c < p; c++)
          l[c](a);
      }
    }), r(ce((a) => {
      if (a === 1) {
        var o = t.indexOf(r);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || i(1);
      } else
        n || (n = !0, i(0));
    }));
  };
}
function Lt(e) {
  return (t) => (i) => {
    var n = oe, r = oe, a = !1, o = !1, s = !1, u = !1;
    t((c) => {
      u || (c === 0 ? (u = !0, s || i(0)) : c.tag === 0 ? n = c[0] : (s && (r(1), r = oe), a ? a = !1 : (a = !0, n(0)), function(p) {
        s = !0, p((y) => {
          s && (y === 0 ? (s = !1, u ? i(0) : a || (a = !0, n(0))) : y.tag === 0 ? (o = !1, (r = y[0])(0)) : (i(y), o ? o = !1 : r(0)));
        });
      }(e(c[0]))));
    }), i(ce((c) => {
      c === 1 ? (u || (u = !0, n(1)), s && (s = !1, r(1))) : (!u && !a && (a = !0, n(0)), s && !o && (o = !0, r(0)));
    }));
  };
}
function Oi(e) {
  return (t) => (i) => {
    var n = oe, r = !1, a = 0;
    t((o) => {
      r || (o === 0 ? (r = !0, i(0)) : o.tag === 0 ? e <= 0 ? (r = !0, i(0), o[0](1)) : n = o[0] : a++ < e ? (i(o), !r && a >= e && (r = !0, i(0), n(1))) : i(o));
    }), i(ce((o) => {
      o === 1 && !r ? (r = !0, n(1)) : o === 0 && !r && a < e && n(0);
    }));
  };
}
function _t(e) {
  return (t) => (i) => {
    var n = oe, r = oe, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, r(1), i(0)) : o.tag === 0 ? (n = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (r = s[0])(0) : (a = !0, r(1), n(1), i(0)));
      })) : i(o));
    }), i(ce((o) => {
      o === 1 && !a ? (a = !0, n(1), r(1)) : a || n(0);
    }));
  };
}
function cn(e, t) {
  return (i) => (n) => {
    var r = oe, a = !1;
    i((o) => {
      a || (o === 0 ? (a = !0, n(0)) : o.tag === 0 ? (r = o[0], n(o)) : e(o[0]) ? n(o) : (a = !0, t && n(o), n(0), r(1)));
    });
  };
}
function dn(e) {
  return (t) => e()(t);
}
function Ii(e) {
  return (t) => {
    var i = e[Symbol.asyncIterator](), n = !1, r = !1, a = !1, o;
    t(ce(async (s) => {
      if (s === 1)
        n = !0, i.return && i.return();
      else if (r)
        a = !0;
      else {
        for (a = r = !0; a && !n; )
          if ((o = await i.next()).done)
            n = !0, i.return && await i.return(), t(0);
          else
            try {
              a = !1, t(Re(o.value));
            } catch (u) {
              if (i.throw)
                (n = !!(await i.throw(u)).done) && t(0);
              else
                throw u;
            }
        r = !1;
      }
    }));
  };
}
function pn(e) {
  return e[Symbol.asyncIterator] ? Ii(e) : (t) => {
    var i = e[Symbol.iterator](), n = !1, r = !1, a = !1, o;
    t(ce((s) => {
      if (s === 1)
        n = !0, i.return && i.return();
      else if (r)
        a = !0;
      else {
        for (a = r = !0; a && !n; )
          if ((o = i.next()).done)
            n = !0, i.return && i.return(), t(0);
          else
            try {
              a = !1, t(Re(o.value));
            } catch (u) {
              if (i.throw)
                (n = !!i.throw(u).done) && t(0);
              else
                throw u;
            }
        r = !1;
      }
    }));
  };
}
var fn = pn;
function qe(e) {
  return (t) => {
    var i = !1;
    t(ce((n) => {
      n === 1 ? i = !0 : i || (i = !0, t(Re(e)), t(0));
    }));
  };
}
function Vt(e) {
  return (t) => {
    var i = !1, n = e({
      next(r) {
        i || t(Re(r));
      },
      complete() {
        i || (i = !0, t(0));
      }
    });
    t(ce((r) => {
      r === 1 && !i && (i = !0, n());
    }));
  };
}
function zt() {
  var e, t;
  return {
    source: Ge(Vt((i) => (e = i.next, t = i.complete, Et))),
    next(i) {
      e && e(i);
    },
    complete() {
      t && t();
    }
  };
}
function Wt(e) {
  return Vt((t) => (e.then((i) => {
    Promise.resolve(i).then(() => {
      t.next(i), t.complete();
    });
  }), Et));
}
function Xe(e) {
  return (t) => {
    var i = oe, n = !1;
    return t((r) => {
      r === 0 ? n = !0 : r.tag === 0 ? (i = r[0])(0) : n || (e(r[0]), i(0));
    }), {
      unsubscribe() {
        n || (n = !0, i(1));
      }
    };
  };
}
function yn(e) {
  Xe((t) => {
  })(e);
}
function hn(e) {
  return new Promise((t) => {
    var i = oe, n;
    e((r) => {
      r === 0 ? Promise.resolve(n).then(t) : r.tag === 0 ? (i = r[0])(0) : (n = r[0], i(0));
    });
  });
}
var mn = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new mt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new mt(e);
class Le extends Error {
  constructor(t) {
    var i = (t.graphQLErrors || []).map(mn), n = ((r, a) => {
      var o = "";
      if (r)
        return `[Network] ${r.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(t.networkError, i);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = i, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var gt = (e, t) => {
  for (var i = 0 | (t || 5381), n = 0, r = 0 | e.length; n < r; n++)
    i = (i << 5) + i + e.charCodeAt(n);
  return i;
}, ge = /* @__PURE__ */ new Set(), Kt = /* @__PURE__ */ new WeakMap(), we = (e) => {
  if (e === null || ge.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return we(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var i of e)
      t.length > 1 && (t += ","), t += we(i) || "null";
    return t += "]";
  } else if (tt !== ke && e instanceof tt || it !== ke && e instanceof it)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var r = Kt.get(e) || Math.random().toString(36).slice(2);
    return Kt.set(e, r), we({
      __key: r
    });
  }
  ge.add(e);
  var a = "{";
  for (var o of n) {
    var s = we(e[o]);
    s && (a.length > 1 && (a += ","), a += we(o) + ":" + s);
  }
  return ge.delete(e), a += "}";
}, bt = (e, t, i) => {
  if (!(i == null || typeof i != "object" || i.toJSON || ge.has(i)))
    if (Array.isArray(i))
      for (var n = 0, r = i.length; n < r; n++)
        bt(e, `${t}.${n}`, i[n]);
    else if (i instanceof tt || i instanceof it)
      e.set(t, i);
    else {
      ge.add(i);
      for (var a of Object.keys(i))
        bt(e, `${t}.${a}`, i[a]);
    }
}, et = (e) => (ge.clear(), we(e));
class ke {
}
var tt = typeof File < "u" ? File : ke, it = typeof Blob < "u" ? Blob : ke, gn = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, bn = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, vn = (e, t) => t % 2 == 0 ? e.replace(bn, `
`) : e, Qt = (e) => e.split(gn).map(vn).join("").trim(), Jt = /* @__PURE__ */ new Map(), Ye = /* @__PURE__ */ new Map(), Ct = (e) => {
  var t;
  return typeof e == "string" ? t = Qt(e) : e.loc && Ye.get(e.__key) === e ? t = e.loc.source.body : (t = Jt.get(e) || Qt(ue(e)), Jt.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Ht = (e) => {
  var t = gt(Ct(e));
  if (e.definitions) {
    var i = Pi(e);
    i && (t = gt(`
# ${i}`, t));
  }
  return t;
}, Ti = (e) => {
  var t, i;
  return typeof e == "string" ? (t = Ht(e), i = Ye.get(t) || an(e)) : (t = e.__key || Ht(e), i = Ye.get(t) || e), i.loc || Ct(i), i.__key = t, Ye.set(t, i), i;
}, dt = (e, t, i) => {
  var n = t || {}, r = Ti(e), a = et(n), o = r.__key;
  return a !== "{}" && (o = gt(a, o)), {
    key: o,
    query: r,
    variables: n,
    extensions: i
  };
}, Pi = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ie.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Sn = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ie.OPERATION_DEFINITION)
      return t.operation;
}, vt = (e, t, i) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new Le({
      graphQLErrors: t.errors,
      response: i
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, St = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var i of Object.keys(t))
      e[i] = St(e[i], t[i]);
    return e;
  }
  return t;
}, wt = (e, t, i) => {
  var n = e.error ? e.error.graphQLErrors : [], r = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var u of o) {
      Array.isArray(u.errors) && n.push(...u.errors), u.extensions && (Object.assign(a, u.extensions), r = !0);
      for (var c = "data", l = s, p = 0, y = u.path.length; p < y; c = u.path[p++])
        l = l[c] = Array.isArray(l[c]) ? [...l[c]] : {
          ...l[c]
        };
      if (u.items)
        for (var f = +c >= 0 ? c : 0, m = 0, T = u.items.length; m < T; m++)
          l[f + m] = St(l[f + m], u.items[m]);
      else
        u.data !== void 0 && (l[c] = St(l[c], u.data));
    }
  else
    s.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: s.data,
    error: n.length ? new Le({
      graphQLErrors: n,
      response: i
    }) : void 0,
    extensions: r ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Ai = (e, t, i) => ({
  operation: e,
  data: void 0,
  error: new Le({
    networkError: t,
    response: i
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ki(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Ct(e.query),
    operationName: Pi(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var wn = (e, t) => {
  var i = e.kind === "query" && e.context.preferGetMethod;
  if (!i || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var r in t) {
    var a = t[r];
    a && n.searchParams.set(r, typeof a == "object" ? et(a) : a);
  }
  var o = n.toString();
  return o.length > 2047 && i !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, On = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var i = et(t), n = ((s) => {
      var u = /* @__PURE__ */ new Map();
      return (tt !== ke || it !== ke) && (ge.clear(), bt(u, "variables", s)), u;
    })(t.variables);
    if (n.size) {
      var r = new FormData();
      r.append("operations", i), r.append("map", et({
        ...[...n.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of n.values())
        r.append("" + a++, o);
      return r;
    }
    return i;
  }
}, In = (e, t) => {
  var i = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var r in n.headers)
      i[r.toLowerCase()] = n.headers[r];
  var a = On(e, t);
  return typeof a == "string" && !i["content-type"] && (i["content-type"] = "application/json"), {
    ...n,
    method: a ? "POST" : "GET",
    body: a,
    headers: i
  };
}, Tn = typeof TextDecoder < "u" ? new TextDecoder() : null, Pn = /boundary="?([^=";]+)"?/i, An = /data: ?([^\n]+)/, Yt = (e) => e.constructor.name === "Buffer" ? e.toString() : Tn.decode(e);
async function* Zt(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Yt(t);
  else {
    var i = e.body.getReader(), n;
    try {
      for (; !(n = await i.read()).done; )
        yield Yt(n.value);
    } finally {
      i.cancel();
    }
  }
}
async function* Xt(e, t) {
  var i = "", n;
  for await (var r of e)
    for (i += r; (n = i.indexOf(t)) > -1; )
      yield i.slice(0, n), i = i.slice(n + t.length);
}
async function* kn(e, t, i) {
  var n = !0, r = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, i)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (l, p) {
        var y = l.match(Pn), f = "--" + (y ? y[1] : "-"), m = !0, T;
        for await (var A of Xt(Zt(p), `\r
` + f)) {
          if (m) {
            m = !1;
            var H = A.indexOf(f);
            if (H > -1)
              A = A.slice(H + f.length);
            else
              continue;
          }
          try {
            yield T = JSON.parse(A.slice(A.indexOf(`\r
\r
`) + 4));
          } catch (E) {
            if (!T)
              throw E;
          }
          if (T && T.hasNext === !1)
            break;
        }
        T && T.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (l) {
        var p;
        for await (var y of Xt(Zt(l), `

`)) {
          var f = y.match(An);
          if (f) {
            var m = f[1];
            try {
              yield p = JSON.parse(m);
            } catch (T) {
              if (!p)
                throw T;
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
      s = async function* (l) {
        yield JSON.parse(await l.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var u of s)
      r = r ? wt(r, u, a) : vt(e, u, a), n = !1, yield r, n = !0;
    r || (yield r = vt(e, {}, a));
  } catch (c) {
    if (!n)
      throw c;
    yield Ai(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : c, a);
  }
}
function Nn(e, t, i) {
  var n;
  return typeof AbortController < "u" && (i.signal = (n = new AbortController()).signal), wi(() => {
    n && n.abort();
  })(L((r) => !!r)(Ii(kn(e, t, i))));
}
var Ot = (e, t) => {
  if (Array.isArray(e))
    for (var i of e)
      Ot(i, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : Ot(e[n], t);
  return t;
}, It = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var i = [];
    for (var n of e.definitions) {
      var r = It(n);
      t = t || r !== n, i.push(r);
    }
    if (t)
      return {
        ...e,
        definitions: i
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Ie.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Ie.FIELD && s.name.value === "__typename" && !s.alias;
        var u = It(s);
        t = t || u !== s, a.push(u);
      }
      if (o || (t = !0, a.push({
        kind: Ie.FIELD,
        name: {
          kind: Ie.NAME,
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
}, ei = /* @__PURE__ */ new Map(), jn = (e) => {
  var t = Ti(e), i = ei.get(t.__key);
  return i || (ei.set(t.__key, i = It(t)), Object.defineProperty(i, "__key", {
    value: t.__key,
    enumerable: !1
  })), i;
}, Tt = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((r) => Tt(r));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var i = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(i, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : i[n] = Tt(e[n]);
    return i;
  } else
    return e;
};
function ti(e) {
  var t = (i) => e(i);
  return t.toPromise = () => hn(Oi(1)(L((i) => !i.stale && !i.hasNext)(t))), t.then = (i, n) => t.toPromise().then(i, n), t.subscribe = (i) => Xe(i)(t), t;
}
function Ne(e, t, i) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...i
    } : i || t.context
  };
}
var ii = (e, t) => Ne(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), En = () => {
}, pt = ({ kind: e }) => e !== "mutation" && e !== "query", _n = ({ forward: e, client: t, dispatchDebug: i }) => {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = (s) => {
    var u = Ne(s.kind, s);
    return u.query = jn(s.query), u;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || n.has(s.key));
  return (s) => {
    var u = xe((l) => {
      var p = n.get(l.key);
      process.env.NODE_ENV !== "production" && i({
        operation: l,
        ...p ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var y = p;
      return process.env.NODE_ENV !== "production" && (y = {
        ...y,
        operation: process.env.NODE_ENV !== "production" ? ii(l, {
          cacheOutcome: p ? "hit" : "miss"
        }) : l
      }), l.context.requestPolicy === "cache-and-network" && (y.stale = !0, ni(t, l)), y;
    })(L((l) => !pt(l) && o(l))(s)), c = ot((l) => {
      var { operation: p } = l;
      if (p) {
        var y = p.context.additionalTypenames || [];
        if (l.operation.kind !== "subscription" && (y = ((h) => [...Ot(h, /* @__PURE__ */ new Set())])(l.data).concat(y)), l.operation.kind === "mutation" || l.operation.kind === "subscription") {
          var f = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && i({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${y}`,
            operation: p,
            data: {
              typenames: y,
              response: l
            },
            source: "cacheExchange"
          });
          for (var m = 0; m < y.length; m++) {
            var T = y[m], A = r.get(T);
            A || r.set(T, A = /* @__PURE__ */ new Set());
            for (var H of A.values())
              f.add(H);
            A.clear();
          }
          for (var E of f.values())
            n.has(E) && (p = n.get(E).operation, n.delete(E), ni(t, p));
        } else if (p.kind === "query" && l.data) {
          n.set(p.key, l);
          for (var x = 0; x < y.length; x++) {
            var d = y[x], b = r.get(d);
            b || r.set(d, b = /* @__PURE__ */ new Set()), b.add(p.key);
          }
        }
      }
    })(e(L((l) => l.kind !== "query" || l.context.requestPolicy !== "cache-only")(xe((l) => process.env.NODE_ENV !== "production" ? ii(l, {
      cacheOutcome: "miss"
    }) : l)(Ae([xe(a)(L((l) => !pt(l) && !o(l))(s)), L((l) => pt(l))(s)])))));
    return Ae([u, c]);
  };
}, ni = (e, t) => e.reexecuteOperation(Ne(t.kind, t, {
  requestPolicy: "network-only"
})), ri = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: i }) => ({ client: n, forward: r }) => {
  var a = i || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = Me((c) => {
      var { key: l } = c, p = L((y) => y.kind === "teardown" && y.key === l)(o);
      return _t(p)(((y) => {
        var f = e(ki(y), y);
        return Vt(({ next: m, complete: T }) => {
          var A = !1, H, E;
          return Promise.resolve().then(() => {
            A || (H = f.subscribe({
              next(x) {
                m(E = E ? wt(E, x) : vt(y, x));
              },
              error(x) {
                m(Ai(y, x));
              },
              complete() {
                A || (A = !0, y.kind === "subscription" && n.reexecuteOperation(Ne("teardown", y, y.context)), E && E.hasNext && m(wt(E, {
                  hasNext: !1
                })), T());
              }
            }));
          }), () => {
            A = !0, H && H.unsubscribe();
          };
        });
      })(c));
    })(L((c) => c.kind !== "teardown" && a(c))(o)), u = r(L((c) => c.kind === "teardown" || !a(c))(o));
    return Ae([s, u]);
  };
}, Vn = ({ forward: e, dispatchDebug: t }) => (i) => {
  var n = Me((a) => {
    var o = ki(a), s = wn(a, o), u = In(a, o);
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
    var c = _t(L((l) => l.kind === "teardown" && l.key === a.key)(i))(Nn(a, s, u));
    return process.env.NODE_ENV !== "production" ? ot((l) => {
      var p = l.data ? void 0 : l.error;
      process.env.NODE_ENV !== "production" && t({
        type: p ? "fetchError" : "fetchSuccess",
        message: `A ${p ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: u,
          value: p || l
        },
        source: "fetchExchange"
      });
    })(c) : c;
  })(L((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(i)), r = e(L((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(i));
  return Ae([n, r]);
}, Cn = (e) => ({ client: t, forward: i, dispatchDebug: n }) => e.reduceRight((r, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return Ge(r(Ge(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, i), Ni = ({ onOperation: e, onResult: t, onError: i }) => ({ forward: n }) => (r) => Me((a) => {
  i && a.error && i(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? Wt(o) : qe(o);
})(n(Me((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Wt(o) : qe(o);
})(r))), Fn = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = ot((i) => {
  if (i.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${i.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: i,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), L((i) => !1)(t)), ai = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var i = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, u = zt();
  function c(d) {
    (d.kind === "mutation" || d.kind === "teardown" || !a.has(d.key)) && (d.kind === "teardown" ? a.delete(d.key) : d.kind !== "mutation" && a.add(d.key), u.next(d));
  }
  var l = !1;
  function p(d) {
    if (d && c(d), !l) {
      for (l = !0; l && (d = o.shift()); )
        c(d);
      l = !1;
    }
  }
  var y = (d) => {
    var b = _t(L((h) => h.kind === "teardown" && h.key === d.key)(u.source))(L((h) => h.operation.kind === d.kind && h.operation.key === d.key && (!h.operation.context._instance || h.operation.context._instance === d.context._instance))(x));
    return d.kind !== "query" ? b = cn((h) => !!h.hasNext, !0)(b) : b = Lt((h) => {
      var _ = qe(h);
      return h.stale || h.hasNext ? _ : Ae([_, xe(() => (h.stale = !0, h))(Oi(1)(L((be) => be.key === d.key)(u.source)))]);
    })(b), d.kind !== "mutation" ? b = wi(() => {
      a.delete(d.key), n.delete(d.key), r.delete(d.key), l = !1;
      for (var h = o.length - 1; h >= 0; h--)
        o[h].key === d.key && o.splice(h, 1);
      c(Ne("teardown", d, d.context));
    })(ot((h) => {
      if (h.stale) {
        for (var _ of o)
          if (_.key === h.operation.key) {
            a.delete(_.key);
            break;
          }
      } else
        h.hasNext || a.delete(d.key);
      n.set(d.key, h);
    })(b)) : b = Rt(() => {
      c(d);
    })(b), t.maskTypename && (b = xe((h) => ({
      ...h,
      data: Tt(h.data, !0)
    }))(b)), Ge(b);
  }, f = this instanceof e ? this : Object.create(e.prototype), m = Object.assign(f, {
    suspense: !!t.suspense,
    operations$: u.source,
    reexecuteOperation(d) {
      d.kind === "teardown" ? p(d) : (d.kind === "mutation" || r.has(d.key)) && (o.push(d), Promise.resolve().then(p));
    },
    createRequestOperation(d, b, h) {
      h || (h = {});
      var _;
      if (process.env.NODE_ENV !== "production" && d !== "teardown" && (_ = Sn(b.query)) !== d)
        throw new Error(`Expected operation of type "${d}" but found "${_}"`);
      return Ne(d, b, {
        _instance: d === "mutation" ? i = i + 1 | 0 : void 0,
        ...s,
        ...h,
        requestPolicy: h.requestPolicy || s.requestPolicy,
        suspense: h.suspense || h.suspense !== !1 && m.suspense
      });
    },
    executeRequestOperation(d) {
      return d.kind === "mutation" ? ti(y(d)) : ti(dn(() => {
        var b = r.get(d.key);
        b || r.set(d.key, b = y(d)), b = Rt(() => {
          p(d);
        })(b);
        var h = n.get(d.key);
        return d.kind === "query" && h && (h.stale || h.hasNext) ? Lt(qe)(Ae([b, L((_) => _ === n.get(d.key))(qe(h))])) : b;
      }));
    },
    executeQuery(d, b) {
      var h = m.createRequestOperation("query", d, b);
      return m.executeRequestOperation(h);
    },
    executeSubscription(d, b) {
      var h = m.createRequestOperation("subscription", d, b);
      return m.executeRequestOperation(h);
    },
    executeMutation(d, b) {
      var h = m.createRequestOperation("mutation", d, b);
      return m.executeRequestOperation(h);
    },
    readQuery(d, b, h) {
      var _ = null;
      return Xe((be) => {
        _ = be;
      })(m.query(d, b, h)).unsubscribe(), _;
    },
    query: (d, b, h) => m.executeQuery(dt(d, b), h),
    subscription: (d, b, h) => m.executeSubscription(dt(d, b), h),
    mutation: (d, b, h) => m.executeMutation(dt(d, b), h)
  }), T = En;
  if (process.env.NODE_ENV !== "production") {
    var { next: A, source: H } = zt();
    m.subscribeToDebugTarget = (d) => Xe(d)(H), T = A;
  }
  var E = Cn(t.exchanges), x = Ge(E({
    client: m,
    dispatchDebug: T,
    forward: Fn({
      dispatchDebug: T
    })
  })(u.source));
  return yn(x), m;
};
function Y(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function he(e) {
  return Y(e) === "object";
}
function Dn(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function oi(e, t) {
  return e.length < 124 ? e : t;
}
const xn = "graphql-transport-ws";
var J;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(J || (J = {}));
var C;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(C || (C = {}));
function ji(e) {
  if (!he(e))
    throw new Error(`Message is expected to be an object, but got ${Y(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${Y(e.type)}`);
  switch (e.type) {
    case C.ConnectionInit:
    case C.ConnectionAck:
    case C.Ping:
    case C.Pong: {
      if (e.payload != null && !he(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case C.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Y(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!he(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Y(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Y(e.payload.query)}`);
      if (e.payload.variables != null && !he(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Y(e.payload.variables)}`);
      if (e.payload.operationName != null && Y(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Y(e.payload.operationName)}`);
      if (e.payload.extensions != null && !he(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Y(e.payload.extensions)}`);
      break;
    }
    case C.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Y(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!he(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Y(e.payload)}`);
      break;
    }
    case C.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Y(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Dn(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case C.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Y(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function qn(e, t) {
  return ji(typeof e == "string" ? JSON.parse(e, t) : e);
}
function Ce(e, t) {
  return ji(e), JSON.stringify(e, t);
}
function $n(e) {
  const {
    url: t,
    connectionParams: i,
    lazy: n = !0,
    onNonLazyError: r = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: u = 0,
    retryAttempts: c = 5,
    retryWait: l = async function(D) {
      let k = 1e3;
      for (let I = 0; I < D; I++)
        k *= 2;
      await new Promise((I) => setTimeout(I, k + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: p = Je,
    isFatalConnectionProblem: y,
    on: f,
    webSocketImpl: m,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: T = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (D) => {
        const k = Math.random() * 16 | 0;
        return (D == "x" ? k : k & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: A,
    jsonMessageReviver: H
  } = e;
  let E;
  if (m) {
    if (!Mn(m))
      throw new Error("Invalid WebSocket implementation provided");
    E = m;
  } else
    typeof WebSocket < "u" ? E = WebSocket : typeof global < "u" ? E = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (E = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!E)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const x = E, d = (() => {
    const w = (() => {
      const k = {};
      return {
        on(I, V) {
          return k[I] = V, () => {
            delete k[I];
          };
        },
        emit(I) {
          var V;
          "id" in I && ((V = k[I.id]) === null || V === void 0 || V.call(k, I));
        }
      };
    })(), D = {
      connecting: f != null && f.connecting ? [f.connecting] : [],
      opened: f != null && f.opened ? [f.opened] : [],
      connected: f != null && f.connected ? [f.connected] : [],
      ping: f != null && f.ping ? [f.ping] : [],
      pong: f != null && f.pong ? [f.pong] : [],
      message: f != null && f.message ? [w.emit, f.message] : [w.emit],
      closed: f != null && f.closed ? [f.closed] : [],
      error: f != null && f.error ? [f.error] : []
    };
    return {
      onMessage: w.on,
      on(k, I) {
        const V = D[k];
        return V.push(I), () => {
          V.splice(V.indexOf(I), 1);
        };
      },
      emit(k, ...I) {
        for (const V of [...D[k]])
          V(...I);
      }
    };
  })();
  function b(w) {
    const D = [
      // errors are fatal and more critical than close events, throw them first
      d.on("error", (k) => {
        D.forEach((I) => I()), w(k);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      d.on("closed", (k) => {
        D.forEach((I) => I()), w(k);
      })
    ];
  }
  let h, _ = 0, be, ct = !1, We = 0, Mt = !1;
  async function Gt() {
    clearTimeout(be);
    const [w, D] = await (h ?? (h = new Promise((V, ye) => (async () => {
      if (ct) {
        if (await l(We), !_)
          return h = void 0, ye({ code: 1e3, reason: "All Subscriptions Gone" });
        We++;
      }
      d.emit("connecting");
      const P = new x(typeof t == "function" ? await t() : t, xn);
      let ve, Ve;
      function Ke() {
        isFinite(o) && o > 0 && (clearTimeout(Ve), Ve = setTimeout(() => {
          P.readyState === x.OPEN && (P.send(Ce({ type: C.Ping })), d.emit("ping", !1, void 0));
        }, o));
      }
      b((B) => {
        h = void 0, clearTimeout(ve), clearTimeout(Ve), ye(B), Je(B) && B.code === 4499 && (P.close(4499, "Terminated"), P.onerror = null, P.onclose = null);
      }), P.onerror = (B) => d.emit("error", B), P.onclose = (B) => d.emit("closed", B), P.onopen = async () => {
        try {
          d.emit("opened", P);
          const B = typeof i == "function" ? await i() : i;
          if (P.readyState !== x.OPEN)
            return;
          P.send(Ce(B ? {
            type: C.ConnectionInit,
            payload: B
          } : {
            type: C.ConnectionInit
            // payload is completely absent if not provided
          }, A)), isFinite(u) && u > 0 && (ve = setTimeout(() => {
            P.close(J.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, u)), Ke();
        } catch (B) {
          d.emit("error", B), P.close(J.InternalClientError, oi(B instanceof Error ? B.message : new Error(B).message, "Internal client error"));
        }
      };
      let Se = !1;
      P.onmessage = ({ data: B }) => {
        try {
          const R = qn(B, H);
          if (d.emit("message", R), R.type === "ping" || R.type === "pong") {
            d.emit(R.type, !0, R.payload), R.type === "pong" ? Ke() : s || (P.send(Ce(R.payload ? {
              type: C.Pong,
              payload: R.payload
            } : {
              type: C.Pong
              // payload is completely absent if not provided
            })), d.emit("pong", !1, R.payload));
            return;
          }
          if (Se)
            return;
          if (R.type !== C.ConnectionAck)
            throw new Error(`First message cannot be of type ${R.type}`);
          clearTimeout(ve), Se = !0, d.emit("connected", P, R.payload), ct = !1, We = 0, V([
            P,
            new Promise((Oa, Mi) => b(Mi))
          ]);
        } catch (R) {
          P.onmessage = null, d.emit("error", R), P.close(J.BadResponse, oi(R instanceof Error ? R.message : new Error(R).message, "Bad response"));
        }
      };
    })())));
    w.readyState === x.CLOSING && await D;
    let k = () => {
    };
    const I = new Promise((V) => k = V);
    return [
      w,
      k,
      Promise.race([
        // wait for
        I.then(() => {
          if (!_) {
            const V = () => w.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? be = setTimeout(() => {
              w.readyState === x.OPEN && V();
            }, a) : V();
          }
        }),
        // or
        D
      ])
    ];
  }
  function Bt(w) {
    if (Je(w) && (Un(w.code) || [
      J.InternalServerError,
      J.InternalClientError,
      J.BadRequest,
      J.BadResponse,
      J.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      J.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      J.SubscriberAlreadyExists,
      J.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(w.code)))
      throw w;
    if (Mt)
      return !1;
    if (Je(w) && w.code === 1e3)
      return _ > 0;
    if (!c || We >= c || !p(w) || y != null && y(w))
      throw w;
    return ct = !0;
  }
  return n || (async () => {
    for (_++; ; )
      try {
        const [, , w] = await Gt();
        await w;
      } catch (w) {
        try {
          if (!Bt(w))
            return;
        } catch (D) {
          return r == null ? void 0 : r(D);
        }
      }
  })(), {
    on: d.on,
    subscribe(w, D) {
      const k = T(w);
      let I = !1, V = !1, ye = () => {
        _--, I = !0;
      };
      return (async () => {
        for (_++; ; )
          try {
            const [P, ve, Ve] = await Gt();
            if (I)
              return ve();
            const Ke = d.onMessage(k, (Se) => {
              switch (Se.type) {
                case C.Next: {
                  D.next(Se.payload);
                  return;
                }
                case C.Error: {
                  V = !0, I = !0, D.error(Se.payload), ye();
                  return;
                }
                case C.Complete: {
                  I = !0, ye();
                  return;
                }
              }
            });
            P.send(Ce({
              id: k,
              type: C.Subscribe,
              payload: w
            }, A)), ye = () => {
              !I && P.readyState === x.OPEN && P.send(Ce({
                id: k,
                type: C.Complete
              }, A)), _--, I = !0, ve();
            }, await Ve.finally(Ke);
            return;
          } catch (P) {
            if (!Bt(P))
              return;
          }
      })().then(() => {
        V || D.complete();
      }).catch((P) => {
        D.error(P);
      }), () => {
        I || ye();
      };
    },
    async dispose() {
      if (Mt = !0, h) {
        const [w] = await h;
        w.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      h && d.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function Je(e) {
  return he(e) && "code" in e && "reason" in e;
}
function Un(e) {
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
function Mn(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Oe = null;
typeof WebSocket < "u" ? Oe = WebSocket : typeof MozWebSocket < "u" ? Oe = MozWebSocket : typeof global < "u" ? Oe = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Oe = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Oe = self.WebSocket || self.MozWebSocket);
const Gn = Oe;
function re(e) {
  if (typeof e != "object")
    return e;
  var t, i, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      i = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && i[t] !== e[t] && (i[t] = re(e[t]));
    } else {
      i = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(i, t, {
          value: re(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : i[t] = re(e[t]);
    }
    return i;
  }
  if (n === "[object Array]") {
    for (t = e.length, i = Array(t); t--; )
      i[t] = re(e[t]);
    return i;
  }
  return n === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(r) {
    i.add(re(r));
  }), i) : n === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(r, a) {
    i.set(re(a), re(r));
  }), i) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (i = new RegExp(e.source, e.flags), i.lastIndex = e.lastIndex, i) : n === "[object DataView]" ? new e.constructor(re(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var Q;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(Q || (Q = {}));
class Bn {
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
    }), this.__gadget.instantiatedFields = re(t), this.__gadget.persistedFields = re(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
    const i = {
      get: (n, r) => {
        if (r in this)
          return this[r];
        if (r in n)
          return n[r];
      },
      set: (n, r, a) => (this.trackKey(r), n[r.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, i);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const i = t.toString();
    this.__gadget.fieldKeysTracker[i] || (this.__gadget.fieldKeysTracker[i] = !0, this.__gadget.fieldKeys.push(i));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = Q.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const i = t == Q.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !He(i[n], this.__gadget.fields[n]));
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
  changes(t, i = Q.SinceLoaded) {
    const r = (typeof t == "string" ? i : t || i) == Q.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = r[t], o = this.__gadget.fields[t], s = !He(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        He(r[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: r[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = Q.SinceLoaded) {
    const i = t == Q.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let r = 0; r < this.__gadget.fieldKeys.length; r++) {
      const a = this.__gadget.fieldKeys[r];
      He(i[a], this.__gadget.fields[a]) || (n[a] = this.__gadget.fields[a]);
    }
    return n;
  }
  changed(t, i = Q.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, i).changed : this.hasChanges(t === void 0 ? i : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = Q.SinceLoaded) {
    t == Q.SinceLoaded ? this.__gadget.instantiatedFields = re(this.__gadget.fields) : t == Q.SinceLastPersisted && (this.__gadget.persistedFields = re(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = Q.SinceLoaded) {
    let i;
    t == Q.SinceLoaded ? i = Object.keys(this.__gadget.instantiatedFields) : i = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      i.includes(n) || delete this.__gadget.fields[n];
    t == Q.SinceLoaded ? Object.assign(this.__gadget.fields, re(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, re(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return kt({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const Ei = Bn;
class Rn extends Error {
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
class Pt extends Error {
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
class st extends Error {
  constructor(t, i) {
    super(t.startsWith("GGT_") ? t : `${i}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    });
  }
}
class si extends Error {
  constructor(t) {
    let i;
    At(t) ? i = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : i = "GraphQL websocket closed unexpectedly by the server", super(i), Object.defineProperty(this, "code", {
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
class Ln extends Error {
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
class zn extends Error {
  constructor(t, i, n, r) {
    const a = i.slice(0, 3), o = i.length > 3 ? `, and ${i.length - 3} more error${i.length > 4 ? "s" : ""} need${i.length > 4 ? "" : "s"} to be corrected` : "";
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
    }), this.validationErrors = i, this.modelApiIdentifier = n, this.record = r;
  }
}
class _i extends Error {
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
class Wn extends Error {
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
class Kn extends Error {
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
function ui(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const nt = (e, t) => {
  const i = t.length;
  let n = 0;
  for (; e != null && n < i; )
    e = e[t[n++]];
  return n && n == i ? e : void 0;
}, At = (e) => (e == null ? void 0 : e.type) == "close", pe = (e, t) => typeof e != "string" ? "" : ut(e, t), li = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ut = (e, t = !0) => {
  let i = "" + e;
  return t ? i = i.replace(/^[a-z\d]*/, (n) => li(n)) : i = i.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), i = i.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, r, a, o, s) => (r || (r = ""), "" + r + li(a))), i;
}, Qn = (e) => `${ut(e)}Sort`, Jn = (e) => `${ut(e)}Filter`, Hn = (e, t, i) => new _i(`More than one record found for ${e}.${t} = ${i}. Please confirm your unique validation is not reporting an error.`), fe = (e, t, i = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof Le && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const r = nt(e.data, t), a = nt(r, ["edges"]), o = a ?? r;
  if (r === void 0)
    throw new Rn(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (r === null || i && Array.isArray(o) && o.length === 0)
    throw new Wn(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return r;
}, $e = (e, t) => {
  var i;
  if (e.error)
    throw e.error instanceof Le && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((r) => "[Network] " + r.message).join(`
`)), e.error;
  const n = nt(e.data, t);
  return n ?? null;
}, Vi = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new zn(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new _i(e.message) : new st(e.message, e.code);
}, me = (e, t) => {
  const i = fe(e, t);
  if (!i.success) {
    const n = i.errors && i.errors[0];
    throw n ? Vi(n) : new st("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return i;
}, Ci = (e) => {
  var t, i, n, r;
  if (!((i = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || i === void 0) && i.hydrations)
    return new Bi((r = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || r === void 0 ? void 0 : r.hydrations);
}, Ue = (e, t) => {
  const i = Ci(e);
  return i && (t = i.apply(t)), new Ei(t);
}, Ft = (e, t) => {
  const i = Ci(e);
  return i && (t = i.apply(t)), t == null ? void 0 : t.map((n) => new Ei(n));
}, rt = (e, t) => {
  const i = t.edges.map((n) => n.node);
  return Ft(e, i);
}, kt = (e) => {
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
          const n = e[i];
          t[i] = n === void 0 ? null : kt(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const i of Object.keys(e)) {
          const n = kt(e[i]);
          n !== void 0 && (t[i] = n);
        }
        return t;
      }
    }
  }
}, ft = "gstk", ci = (e) => {
  try {
    const t = window[e];
    return t.setItem(ft, ft), t.removeItem(ft), !0;
  } catch {
    return !1;
  }
}, di = Object.prototype.toString, pi = Object.getPrototypeOf, fi = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, Fe = (e, t, i) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (i.indexOf(e) > -1 && i.indexOf(t) > -1)
    return !0;
  const n = di.call(e), r = di.call(t);
  let a, o, s;
  if (i.push(e, t), n != r || (a = fi(e), o = fi(t), a.length != o.length || a.some(function(u) {
    return !Fe(e[u], t[u], i);
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
        if (s = a.next(), !Fe(s.value, o.next().value, i))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !Fe(e[s], t[s], i)))
          return !1;
      return !0;
    case "Object":
      return Fe(pi(e), pi(t), i);
    default:
      return !1;
  }
}, He = (e, t) => Fe(e, t, []);
class Fi extends Error {
}
class Yn {
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
    throw fe(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Fi("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    fe(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    fe(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Zn {
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
const Xn = (e) => {
  const t = [...e.definitions].reverse().find((i) => i.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, yi = Ni({
  onOperation: (e) => {
    var t, i;
    (t = (i = e.context).operationName) !== null && t !== void 0 || (i.operationName = Xn(e.query) || "unknown");
  }
}), er = Ni({
  onOperation: (e) => {
    e.context.url && e.context.operationName && !e.context.url.includes("?") && (e.context.url += `?operation=${e.context.operationName}`);
  }
}), tr = 2, ir = 4800, nr = 1e4, rr = [J.ConnectionAcknowledgementTimeout, J.ConnectionInitialisationTimeout], hi = Symbol.for("gadget/connection"), ar = "token", or = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var q;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(q || (q = {}));
class sr {
  constructor(t) {
    var i, n, r, a, o;
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
      value: q.Anonymous
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
        let c, l;
        if (u ? (c = u, l = s) : (c = s, l = {}), this.currentTransaction)
          return await c(this.currentTransaction);
        let p = null, y;
        try {
          p = await this.waitForOpenedConnection({
            isFatalConnectionProblem(T) {
              return console.warn("Transport error encountered during transaction processing", T), !0;
            },
            connectionAckWaitTimeout: ir,
            ...l,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const f = new ai({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ...this.exchanges.beforeAll,
              yi,
              ...this.exchanges.beforeAsync,
              ri({
                forwardSubscription(T) {
                  const A = { ...T, query: T.query || "" };
                  return {
                    subscribe: (H) => ({
                      unsubscribe: p.subscribe(A, H)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          f[hi] = this, y = new Yn(f, p), this.currentTransaction = y, await y.start();
          const m = await c(y);
          return await y.commit(), m;
        } catch (f) {
          try {
            y != null && y.open && await y.rollback();
          } catch (m) {
            m instanceof Fi || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", m);
          }
          throw At(f) ? new si(f) : f;
        } finally {
          await (p == null ? void 0 : p.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, u = {}) => {
        var c;
        s = ur(s, (c = this.options.baseRouteURL) !== null && c !== void 0 ? c : this.options.endpoint), this.isGadgetRequest(s) && (u.headers = { ...this.requestHeaders(), ...u.headers }, this.authenticationMode == q.Custom && await this.options.authenticationMode.custom.processFetch(s, u));
        const l = await this._fetchImplementation(s, u);
        if (this.authenticationMode == q.BrowserSession) {
          const p = l.headers.get("x-set-authorization"), y = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          y && this.sessionTokenStore.setItem(this.sessionStorageKey, y);
        }
        return l;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = async (...s) => {
      const { fetch: u } = await import("./browser-ponyfill-a950d05c.js").then((c) => c.b);
      return await u(...s);
    }, this.websocketImplementation = (n = (i = t.websocketImplementation) !== null && i !== void 0 ? i : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Gn, this.websocketsEndpoint = (r = t.websocketsEndpoint) !== null && r !== void 0 ? r : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 }), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${ar}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = q.InternalAuthToken : t.apiKey ? this.authenticationMode = q.APIKey : t.custom && (this.authenticationMode = q.Custom), this.options.authenticationMode = t), (i = this.authenticationMode) !== null && i !== void 0 || (this.authenticationMode = q.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = q.BrowserSession;
    const i = !t || typeof t == "boolean" ? De.Durable : t.storageType;
    let n;
    i == De.Durable && ci("localStorage") ? n = window.localStorage : i == De.Session && ci("sessionStorage") ? n = window.sessionStorage : n = new Zn(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let i;
    if (typeof t == "string" ? i = t : typeof t == "object" && "url" in t ? i = t.url : i = String(t), Nt(this.options.endpoint))
      return !!Nt(i);
    const n = new URL(this.options.endpoint).host;
    return i.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, yi, er];
    typeof window < "u" && t.push(_n), t.push(...this.exchanges.beforeAsync, Vn, ri({
      forwardSubscription: (n) => ({
        subscribe: (r) => {
          const a = { ...n, query: n.query || "" };
          return {
            unsubscribe: this.baseSubscriptionClient.subscribe(a, r)
          };
        }
      })
    }), ...this.exchanges.afterAll);
    const i = new ai({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return i[hi] = this, i;
  }
  newSubscriptionClient(t) {
    let i = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [r, a] of Object.entries(t.urlParams))
        a && n.set(r, a);
      i += "?" + n.toString();
    }
    return $n({
      url: i,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, r;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == q.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == q.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == q.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == q.Custom && await ((r = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || r === void 0 ? void 0 : r.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, r) => {
          var a, o, s, u, c, l;
          if (this.authenticationMode == q.BrowserSession && (r != null && r.sessionToken)) {
            const p = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (p !== null && typeof p == "object" ? p.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, r.sessionToken);
          }
          (u = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || u === void 0 || u.call(s, n, r), (l = (c = t == null ? void 0 : t.on) === null || c === void 0 ? void 0 : c.connected) === null || l === void 0 || l.call(c, n, r);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const i = {};
    if (this.authenticationMode == q.InternalAuthToken)
      i.authorization = "Basic " + or("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == q.APIKey)
      i.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == q.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (i.authorization = `Session ${n}`);
    }
    return i["x-gadget-environment"] = this.environment, i;
  }
  async waitForOpenedConnection(t) {
    let i = this.newSubscriptionClient(t), n = [], r = t.connectionAttempts || tr;
    const a = t.connectionGlobalTimeoutMs || nr, o = () => {
      n.forEach((s) => s()), n = [];
    };
    return await new Promise((s, u) => {
      const c = setTimeout(() => {
        this.disposeClient(i), p(new Ln("Timeout opening websocket connection to Gadget API"));
      }, a), l = (m) => {
        if (At(m) && rr.includes(m.code) && r > 0) {
          r -= 1, this.disposeClient(i), i = this.newSubscriptionClient(t), f();
          return;
        }
        clearTimeout(c), u(new si(m));
      }, p = (m) => {
        clearTimeout(c), u(m);
      }, y = () => {
        clearTimeout(c), s(i);
      }, f = () => {
        o(), n.push(i.on("connected", y)), n.push(i.on("closed", l)), n.push(i.on("error", p));
      };
      f();
    }).finally(o);
  }
  disposeClient(t) {
    const i = t.dispose();
    i && i.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
}
function ur(e, t) {
  if (typeof e != "string")
    return e;
  if (Nt(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Nt(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class Be extends Array {
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
  static boot(t, i, n) {
    const r = new Be();
    return r.push(...i), r.modelManager = t, r.pagination = n, Object.freeze(r), r;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new st("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Pt("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: i, last: n, before: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: i || n
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new Pt("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: i, last: n, after: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: n || i
    });
  }
}
const jt = (e) => Object.entries(e).flatMap(([t, i]) => {
  if (typeof i == "boolean")
    return i ? t : !1;
  if (i instanceof xt) {
    let n = "";
    const r = Object.entries(i.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof qt ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return r.length > 0 && (n = `(${r.join(", ")})`), i.subselection ? [`${t}${n} {`, ...jt(i.subselection), "}"] : `${t}${n}`;
  } else
    return [`${t} {`, ...jt(i), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Dt = (e) => {
  const t = {}, i = (n) => {
    let r = 1;
    if (t[n]) {
      for (; t[`${n}${r}`]; )
        r++;
      return `${n}${r}`;
    }
    return n;
  };
  return Object.entries(e).forEach(([n, r]) => {
    r instanceof xt ? Object.entries(r.args).forEach(([a, o]) => {
      var s;
      o instanceof qt && (t[(s = o.name) !== null && s !== void 0 ? s : i(a)] = o);
    }) : typeof r == "object" && r !== null && Object.assign(t, Dt(r));
  }), t;
}, lr = (e) => {
  const t = Dt(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([n, r]) => `$${n}: ${r.type}`).join(", ")})`;
};
class xt {
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
class qt {
  constructor(t, i, n) {
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
      value: n
    });
  }
  present() {
    return this.value != null;
  }
}
const je = (e, t) => new xt(e, t), G = (e) => new qt(e.type + (e.required ? "!" : ""), e.name, e.value), cr = (e) => {
  var t;
  const i = lr(e), n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${i}${n} {
${jt(e.fields).join(`
`)}
}`;
}, Ee = (e) => {
  const t = Dt(e.fields);
  return {
    query: cr(e),
    variables: Object.entries(t ?? {}).reduce((i, [n, r]) => (typeof r.value < "u" && (i[n] = r.value), i), {})
  };
}, ze = `
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
`, _e = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, dr = (e) => `
    query InternalFind${pe(e)}($id: GadgetID!, $select: [String!]) {
      ${_e(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Di = (e, t) => ({
  search: t != null && t.search ? G({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? G({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? G({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? G({ value: xi(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), pr = (e, t) => {
  const i = pe(e), n = Di(i, t);
  return Ee({
    type: "query",
    name: `InternalFindFirst${i}`,
    fields: {
      internal: {
        [`list${i}`]: je({
          ...n,
          first: G({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, fr = (e, t) => {
  const i = pe(e), n = Di(i, t);
  return Ee({
    type: "query",
    name: `InternalFindMany${i}`,
    fields: {
      internal: {
        [`list${i}`]: je({
          ...n,
          after: G({ value: t == null ? void 0 : t.after, type: "String" }),
          before: G({ value: t == null ? void 0 : t.before, type: "String" }),
          first: G({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: G({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, yr = (e) => {
  const t = pe(e);
  return `
    ${ze}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${_e(e)}
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
}, hr = (e, t) => {
  const i = pe(e), n = pe(t);
  return `
    ${ze}

    mutation InternalBulkCreate${n}($records: [Internal${i}Input]!) {
      ${_e(e)}
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
}, mr = (e) => {
  const t = pe(e);
  return `
    ${ze}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${_e(e)}
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
}, gr = (e) => {
  const t = pe(e);
  return `
    ${ze}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${_e(e)}
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
}, br = (e) => {
  const t = pe(e);
  return `
    ${ze}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${_e(e)}
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
class le {
  constructor(t, i, n) {
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
      value: n
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = ut(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, i) {
    let n = t;
    if (!this.validateRecord(t))
      throw new st(`Invalid arguments found in variables. Did you mean to use ${i}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
  async findOne(t, i, n = !0) {
    const r = await this.connection.currentClient.query(dr(this.apiIdentifier), { id: t, select: xi(i == null ? void 0 : i.select) }).toPromise(), o = (n ? fe : $e)(r, ["internal", this.apiIdentifier]);
    return Ue(r, o);
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
    const n = await this.findOne(t, i, !1);
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
    const i = fr(this.apiIdentifier, t), n = await this.connection.currentClient.query(i.query, i.variables).toPromise(), r = $e(n, ["internal", `list${this.capitalizedApiIdentifier}`]), a = rt(n, r);
    return Be.boot(this, a, { options: t, pageInfo: r.pageInfo });
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
    const n = pr(this.apiIdentifier, t), r = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let a;
    i === !1 ? a = $e(r, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = fe(r, ["internal", `list${this.capitalizedApiIdentifier}`], i);
    const o = rt(r, a);
    return Be.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const i = await this.connection.currentClient.mutation(yr(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), n = me(i, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return Ue(i, n[this.apiIdentifier]);
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
      throw new Pt("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = pe(this.options.pluralApiIdentifier), r = await this.connection.currentClient.mutation(hr(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = me(r, ["internal", `bulkCreate${n}`]);
    return Ft(r, a[this.options.pluralApiIdentifier]);
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
    ui(t, "Can't update a record without an ID passed");
    const n = await this.connection.currentClient.mutation(mr(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(i, "update")
    }).toPromise(), r = me(n, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return Ue(n, r[this.apiIdentifier]);
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
    ui(t, "Can't delete a record without an ID");
    const i = await this.connection.currentClient.mutation(gr(this.apiIdentifier), { id: t }).toPromise();
    me(i, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const i = await this.connection.currentClient.mutation(br(this.apiIdentifier), t).toPromise();
    me(i, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function xi(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [i, n] of Object.entries(e))
    n && t.push(i);
  return t;
}
const $t = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), Ut = (e, t = !1) => {
  const i = { ...e };
  return t && (i.__typename = !0), i;
}, vr = (e, t, i, n, r) => {
  const a = {};
  return typeof t < "u" && (a.id = G({ type: "GadgetID!", value: t })), Ee({
    type: "query",
    name: e,
    fields: {
      [e]: je(a, Ut((r == null ? void 0 : r.select) || i, !0)),
      ...$t(n)
    }
  });
}, Sr = (e, t, i, n, r, a) => qi(e, n, r, {
  select: a == null ? void 0 : a.select,
  first: 2,
  filter: {
    [t]: {
      equals: i
    }
  }
}), qi = (e, t, i, n) => Ee({
  type: "query",
  name: e,
  fields: {
    [e]: je({
      after: G({ value: n == null ? void 0 : n.after, type: "String" }),
      first: G({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: G({ value: n == null ? void 0 : n.before, type: "String" }),
      last: G({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? G({ value: n.sort, type: `[${Qn(i)}!]` }) : void 0,
      filter: n != null && n.filter ? G({ value: n.filter, type: `[${Jn(i)}!]` }) : void 0,
      search: n != null && n.search ? G({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Ut((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...$t(i)
  }
}), $i = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Ui = (e) => Object.fromEntries(Object.entries(e).map(([t, i]) => [t, G(i)])), wr = (e, t, i, n, r, a, o, s, u) => {
  const c = (a == null ? void 0 : a.select) || t;
  let l = {
    [e]: je(Ui(r), {
      success: !0,
      errors: $i,
      [n]: c && !u ? Ut(c, !0) : !1,
      [s ? "results" : "result"]: !!u
    })
  };
  o && (l = {
    [o]: l
  });
  const p = {
    type: "mutation",
    name: e,
    fields: {
      ...l,
      ...$t(i)
    }
  };
  return Ee(p);
}, Or = (e, t, i) => {
  let n = {
    [e]: je(Ui(t), {
      success: !0,
      errors: $i,
      result: !0
    })
  };
  return i && (n = {
    [i]: n
  }), Ee({
    type: "mutation",
    name: e,
    fields: n
  });
}, j = async (e, t, i, n, r, a, o = !0) => {
  const s = vr(t, i, n, r, a), u = await e.connection.currentClient.query(s.query, s.variables).toPromise(), l = (o ? fe : $e)(u, [t]);
  return Ue(u, l);
}, lt = async (e, t, i, n, r, a, o) => {
  const s = Sr(t, i, n, r, a, o), u = await e.connection.currentClient.query(s.query, s.variables).toPromise(), c = fe(u, [t]), l = rt(u, c);
  if (l.length > 1)
    throw Hn(a, i, n);
  return l[0];
}, O = async (e, t, i, n, r, a) => {
  const o = qi(t, i, n, r), s = await e.connection.currentClient.query(o.query, o.variables).toPromise();
  let u;
  a === !1 ? u = $e(s, [t]) : u = fe(s, [t], a);
  const c = rt(s, u);
  return Be.boot(e, c, { options: r, pageInfo: u.pageInfo });
}, g = async (e, t, i, n, r, a, o, s, u, c) => {
  const l = wr(t, i, n, r, o, s, u, a, c), p = await e.connection.currentClient.mutation(l.query, l.variables).toPromise(), y = u ? [u, t] : [t];
  if (a) {
    const f = nt(p.data, y), m = f[r] && i ? Ft(p, f[r]) : void 0;
    if (f.errors) {
      const T = f.errors.map((A) => Vi(A));
      throw new Kn(T, m);
    }
    return m;
  } else {
    const f = me(p, y);
    return i == null ? void 0 : c ? f.result : Ue(p, f[r]);
  }
}, Ir = async (e, t, i, n) => {
  const r = Or(t, i, n), a = await e.currentClient.mutation(r.query, r.variables).toPromise();
  return me(a, n ? [n, t] : [t]).result;
}, $ = {
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
async function Tr(e, t) {
  return await g(
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
async function Pr(e, t, i) {
  let n;
  const r = [], a = "user";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateUser",
    $,
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
    i,
    null
  );
}
async function Ar(e, t) {
  let i;
  const n = [], r = "user";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createUser",
    $,
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
async function kr(e, t) {
  let i;
  const n = [], r = "user";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "signUpUser",
    $,
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
class Nr {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "user",
        i,
        $,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "user",
          i,
          $,
          "user",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "users",
        $,
        "user",
        i
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "users",
        $,
        "user",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "users",
          $,
          "user",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (i, n) => await lt(
        this,
        "users",
        "email",
        i,
        $,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: $,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Tr,
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
      async (i, n) => await g(
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
      Pr,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: $,
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
      Ar,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: $,
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
      kr,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: $,
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
const Z = {
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
async function jr(e) {
  return await g(
    this,
    "logOut",
    Z,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Er(e, t) {
  const i = e;
  return await g(
    this,
    "logInViaEmail",
    Z,
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
class _r {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "session",
        i,
        Z,
        "session",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "session",
          i,
          Z,
          "session",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "sessions",
        Z,
        "session",
        i
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "sessions",
        Z,
        "session",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "sessions",
          Z,
          "session",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Z,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      jr,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Z,
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
      Er,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Z,
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
const X = {
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
async function Vr(e, t) {
  return await g(
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
async function Cr(e, t) {
  let i;
  const n = [], r = "shopifyProduct";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createShopifyProduct",
    X,
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
async function Fr(e, t, i) {
  let n;
  const r = [], a = "shopifyProduct";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateShopifyProduct",
    X,
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
    i,
    null
  );
}
class Dr {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifyProduct",
        i,
        X,
        "shopifyProduct",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifyProduct",
          i,
          X,
          "shopifyProduct",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifyProducts",
        X,
        "shopifyProduct",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifyProducts",
        X,
        "shopifyProduct",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifyProducts",
          X,
          "shopifyProduct",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: X,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Vr,
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
      async (i, n) => await g(
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
      Cr,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: X,
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
      Fr,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
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
const ee = {
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
async function xr(e, t) {
  return await g(
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
async function qr(e, t) {
  let i;
  const n = [], r = "shopifyProductImage";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createShopifyProductImage",
    ee,
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
async function $r(e, t, i) {
  let n;
  const r = [], a = "shopifyProductImage";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateShopifyProductImage",
    ee,
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
    i,
    null
  );
}
class Ur {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifyProductImage",
        i,
        ee,
        "shopifyProductImage",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifyProductImage",
          i,
          ee,
          "shopifyProductImage",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifyProductImages",
        ee,
        "shopifyProductImage",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifyProductImages",
        ee,
        "shopifyProductImage",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifyProductImages",
          ee,
          "shopifyProductImage",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: ee,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      xr,
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
      async (i, n) => await g(
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
      qr,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: ee,
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
      $r,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
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
const te = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function Mr(e, t) {
  return await g(
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
async function Gr(e, t) {
  let i;
  const n = [], r = "shopifyProductOption";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createShopifyProductOption",
    te,
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
async function Br(e, t, i) {
  let n;
  const r = [], a = "shopifyProductOption";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateShopifyProductOption",
    te,
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
    i,
    null
  );
}
class Rr {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifyProductOption",
        i,
        te,
        "shopifyProductOption",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifyProductOption",
          i,
          te,
          "shopifyProductOption",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifyProductOptions",
        te,
        "shopifyProductOption",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifyProductOptions",
        te,
        "shopifyProductOption",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifyProductOptions",
          te,
          "shopifyProductOption",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Mr,
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
      async (i, n) => await g(
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
      Gr,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: te,
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
      Br,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
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
const ie = {
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
async function Lr(e, t) {
  return await g(
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
async function zr(e, t, i) {
  let n;
  const r = [], a = "shopifyProductVariant";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateShopifyProductVariant",
    ie,
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
    i,
    null
  );
}
async function Wr(e, t) {
  let i;
  const n = [], r = "shopifyProductVariant";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createShopifyProductVariant",
    ie,
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
class Kr {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifyProductVariant",
        i,
        ie,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifyProductVariant",
          i,
          ie,
          "shopifyProductVariant",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifyProductVariants",
        ie,
        "shopifyProductVariant",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifyProductVariants",
        ie,
        "shopifyProductVariant",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifyProductVariants",
          ie,
          "shopifyProductVariant",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Lr,
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
      async (i, n) => await g(
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
      zr,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
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
      Wr,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: ie,
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
const M = {
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
async function Qr(e, t) {
  return await g(
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
async function Jr(e, t) {
  let i;
  const n = [], r = "shopifyShop";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createShopifyShop",
    M,
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
async function Hr(e, t, i) {
  let n;
  const r = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateShopifyShop",
    M,
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
    i,
    null
  );
}
async function Yr(e, t, i) {
  let n;
  const r = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "reinstallShopifyShop",
    M,
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
    i,
    null
  );
}
async function Zr(e, t, i) {
  let n;
  const r = [], a = "shopifyShop";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "uninstallShopifyShop",
    M,
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
    i,
    null
  );
}
class Xr {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifyShop",
        i,
        M,
        "shopifyShop",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifyShop",
          i,
          M,
          "shopifyShop",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifyShops",
        M,
        "shopifyShop",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifyShops",
        M,
        "shopifyShop",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifyShops",
          M,
          "shopifyShop",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: M,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Qr,
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
      async (i, n) => await g(
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
      Jr,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: M,
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
      Hr,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: M,
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
      Yr,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: M,
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
      Zr,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: M,
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
const ne = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function ea(e, t) {
  return await g(
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
async function ta(e, t, i) {
  let n;
  const r = [], a = "productPairing";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateProductPairing",
    ne,
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
    i,
    null
  );
}
async function ia(e, t) {
  let i;
  const n = [], r = "productPairing";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createProductPairing",
    ne,
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
class na {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "productPairing",
        i,
        ne,
        "productPairing",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "productPairing",
          i,
          ne,
          "productPairing",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "productPairings",
        ne,
        "productPairing",
        i
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "productPairings",
        ne,
        "productPairing",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "productPairings",
          ne,
          "productPairing",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ea,
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
      async (i, n) => await g(
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
      ta,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
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
      ia,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: ne,
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
const U = {
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
async function ra(e, t) {
  let i;
  const n = [], r = "shopifySync";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "runShopifySync",
    U,
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
async function aa(e, t, i) {
  let n;
  const r = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "errorShopifySync",
    U,
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
    i,
    null
  );
}
async function oa(e, t, i) {
  let n;
  const r = [], a = "shopifySync";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "completeShopifySync",
    U,
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
    i,
    null
  );
}
class sa {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "shopifySync",
        i,
        U,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "shopifySync",
          i,
          U,
          "shopifySync",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "shopifySyncs",
        U,
        "shopifySync",
        i
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "shopifySyncs",
        U,
        "shopifySync",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "shopifySyncs",
          U,
          "shopifySync",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, n) => await lt(
        this,
        "shopifySyncs",
        "id",
        i,
        U,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: U,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      ra,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: U,
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
      aa,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: U,
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
      oa,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: U,
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
const W = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function ua(e, t, i) {
  let n;
  const r = [], a = "ambiguous";
  if (Object.keys(t).some((o) => !r.includes(o) && o !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${a}: { ... } })?`);
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateAmbiguous",
    W,
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
    i,
    null
  );
}
async function la(e, t) {
  return await g(
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
async function ca(e, t) {
  let i;
  const n = [], r = "ambiguous";
  if (Object.keys(e).some((a) => !n.includes(a) && a !== r))
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${r}: { ... } })?`);
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createAmbiguous",
    W,
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
class da {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "ambiguous",
        i,
        W,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "ambiguous",
          i,
          W,
          "ambiguous",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "ambiguouss",
        W,
        "ambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "ambiguouss",
        W,
        "ambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "ambiguouss",
          W,
          "ambiguous",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, n) => await lt(
        this,
        "ambiguouss",
        "id",
        i,
        W,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: W,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      ua,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
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
      la,
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
      async (i, n) => await g(
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
      ca,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: W,
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
const K = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function pa(e, t, i) {
  let n;
  const r = [], a = "unambiguous";
  if (a in t && typeof t[a] == "object" && t[a] !== null)
    n = t;
  else {
    n = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(t))
      r.includes(o) ? n[o] = s : n[a][o] = s;
  }
  return await g(
    this,
    "updateUnambiguous",
    K,
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
    i,
    null
  );
}
async function fa(e, t) {
  let i;
  const n = [], r = "unambiguous";
  if (r in e && typeof e[r] == "object" && e[r] !== null)
    i = e;
  else {
    i = {
      [r]: {}
    };
    for (const [a, o] of Object.entries(e))
      n.includes(a) ? i[a] = o : i[r][a] = o;
  }
  return await g(
    this,
    "createUnambiguous",
    K,
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
async function ya(e, t) {
  return await g(
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
class ha {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (i, n) => await j(
        this,
        "unambiguous",
        i,
        K,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (i, n) => {
        const r = await j(
          this,
          "unambiguous",
          i,
          K,
          "unambiguous",
          n,
          !1
        );
        return r.isEmpty() ? null : r;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (i) => await O(
        this,
        "unambiguouss",
        K,
        "unambiguous",
        i
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (i) => (await O(
        this,
        "unambiguouss",
        K,
        "unambiguous",
        { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (i) => {
        const n = await O(
          this,
          "unambiguouss",
          K,
          "unambiguous",
          { ...i, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (i, n) => await lt(
        this,
        "unambiguouss",
        "id",
        i,
        K,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: K,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      pa,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: K,
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
      fa,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: K,
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
      ya,
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
      async (i, n) => await g(
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
const Te = {
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
async function ma(e) {
  return await g(
    this,
    "logOut",
    Te,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function ga(e, t) {
  const i = e;
  return await g(
    this,
    "logInViaEmail",
    Te,
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
class ba {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (i) => await j(
        this,
        "currentSession",
        void 0,
        Te,
        "session",
        i
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      ma,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Te,
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
      ga,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Te,
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
const yt = "production", ht = "development", va = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class Sa {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await Ir(
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
    ), this.transaction = async (r) => await this.connection.transaction(r), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const i = (t == null ? void 0 : t.environment) ?? va() ?? ht;
    let n = i.toLocaleLowerCase();
    n != ht && n != yt && (console.warn("Invalid environment", i, "defaulting to development"), n = ht), this.connection = new sr({
      endpoint: new URL("api/graphql", n == yt ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: n == yt ? "Production" : "Development"
    }), this.user = new Nr(this.connection), this.session = new _r(this.connection), this.shopifyProduct = new Dr(this.connection), this.shopifyProductImage = new Ur(this.connection), this.shopifyProductOption = new Rr(this.connection), this.shopifyProductVariant = new Kr(this.connection), this.shopifyShop = new Xr(this.connection), this.productPairing = new na(this.connection), this.shopifySync = new sa(this.connection), this.ambiguous = new da(this.connection), this.unambiguous = new ha(this.connection), this.currentSession = new ba(this.connection), this.internal = {
      user: new le("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new le("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new le("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new le("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new le("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new le("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new le("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new le("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new le("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new le("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new le("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a)
      throw a;
    return r;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, i) {
    const { data: n, error: r } = await this.connection.currentClient.mutation(t, i).toPromise();
    if (r)
      throw r;
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
const wa = new Sa(), Ia = async () => {
  await wa.shopifyProduct.findMany();
};
export {
  Ia as read
};
