var or;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(or || (or = {}));
const Ua = {
  DateTime(e) {
    return new Date(e);
  }
};
class Ba {
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
    for (const [n, a] of Object.entries(this.plan)) {
      const o = r[n];
      o != null && (r[n] = Ua[a](o));
    }
    return r;
  }
}
var Nt = {
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
class si extends Error {
  constructor(t, r, n, a, o, s, l) {
    super(t), this.name = "GraphQLError", this.message = t, o && (this.path = o), r && (this.nodes = Array.isArray(r) ? r : [r]), n && (this.source = n), a && (this.positions = a), s && (this.originalError = s);
    var f = l;
    if (!f && s) {
      var h = s.extensions;
      h && typeof h == "object" && (f = h);
    }
    this.extensions = f || {};
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
var L, k;
function J(e) {
  return new si(`Syntax Error: Unexpected token at ${k} in ${e}`);
}
function ke(e) {
  if (e.lastIndex = k, e.test(L))
    return L.slice(k, k = e.lastIndex);
}
var Lr = / +(?=[^\s])/y;
function Ga(e) {
  for (var t = e.split(`
`), r = "", n = 0, a = 0, o = t.length - 1, s = 0; s < t.length; s++)
    Lr.lastIndex = 0, Lr.test(t[s]) && (s && (!n || Lr.lastIndex < n) && (n = Lr.lastIndex), a = a || s, o = s);
  for (var l = a; l <= o; l++)
    l !== a && (r += `
`), r += t[l].slice(n).replace(/\\"""/g, '"""');
  return r;
}
function F() {
  for (var e = 0 | L.charCodeAt(k++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | L.charCodeAt(k++))
    if (e === 35)
      for (; (e = L.charCodeAt(k++)) !== 10 && e !== 13; )
        ;
  k--;
}
var fa = /[_A-Za-z]\w*/y;
function Qe() {
  var e;
  if (e = ke(fa))
    return {
      kind: "Name",
      value: e
    };
}
var La = /(?:null|true|false)/y, pa = /\$[_A-Za-z]\w*/y, za = /-?\d+/y, Ka = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, Wa = /\\/g, Ha = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Qa = /"(?:"|[^\r\n]*?[^\\]")/y;
function Qr(e) {
  var t, r;
  if (r = ke(La))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = ke(pa)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = ke(za)) {
    var n = r;
    (r = ke(Ka)) ? t = {
      kind: "FloatValue",
      value: n + r
    } : t = {
      kind: "IntValue",
      value: n
    };
  } else if (r = ke(fa))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = ke(Ha))
    t = {
      kind: "StringValue",
      value: Ga(r.slice(3, -3)),
      block: !0
    };
  else if (r = ke(Qa))
    t = {
      kind: "StringValue",
      value: Wa.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(o) {
    var s;
    if (L.charCodeAt(k) === 91) {
      k++, F();
      for (var l = []; s = Qr(o); )
        l.push(s);
      if (L.charCodeAt(k++) !== 93)
        throw J("ListValue");
      return F(), {
        kind: "ListValue",
        values: l
      };
    }
  }(e) || function(o) {
    if (L.charCodeAt(k) === 123) {
      k++, F();
      for (var s = [], l; l = Qe(); ) {
        if (F(), L.charCodeAt(k++) !== 58)
          throw J("ObjectField");
        F();
        var f = Qr(o);
        if (!f)
          throw J("ObjectField");
        s.push({
          kind: "ObjectField",
          name: l,
          value: f
        });
      }
      if (L.charCodeAt(k++) !== 125)
        throw J("ObjectValue");
      return F(), {
        kind: "ObjectValue",
        fields: s
      };
    }
  }(e))
    return t;
  return F(), t;
}
function ya(e) {
  var t = [];
  if (F(), L.charCodeAt(k) === 40) {
    k++, F();
    for (var r; r = Qe(); ) {
      if (F(), L.charCodeAt(k++) !== 58)
        throw J("Argument");
      F();
      var n = Qr(e);
      if (!n)
        throw J("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: n
      });
    }
    if (!t.length || L.charCodeAt(k++) !== 41)
      throw J("Argument");
    F();
  }
  return t;
}
function kt(e) {
  var t = [];
  for (F(); L.charCodeAt(k) === 64; ) {
    k++;
    var r = Qe();
    if (!r)
      throw J("Directive");
    F(), t.push({
      kind: "Directive",
      name: r,
      arguments: ya(e)
    });
  }
  return t;
}
function Ja() {
  var e = Qe();
  if (e) {
    F();
    var t;
    if (L.charCodeAt(k) === 58) {
      if (k++, F(), t = e, !(e = Qe()))
        throw J("Field");
      F();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: ya(!1),
      directives: kt(!1),
      selectionSet: sn()
    };
  }
}
function ha() {
  var e;
  if (F(), L.charCodeAt(k) === 91) {
    k++, F();
    var t = ha();
    if (!t || L.charCodeAt(k++) !== 93)
      throw J("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Qe())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw J("NamedType");
  return F(), L.charCodeAt(k) === 33 ? (k++, F(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Xa = /on/y;
function ma() {
  if (ke(Xa)) {
    F();
    var e = Qe();
    if (!e)
      throw J("NamedType");
    return F(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Ya = /\.\.\./y;
function Za() {
  if (ke(Ya)) {
    F();
    var e = k, t;
    if ((t = Qe()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: kt(!1)
      };
    k = e;
    var r = ma(), n = kt(!1), a = sn();
    if (!a)
      throw J("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: n,
      selectionSet: a
    };
  }
}
function sn() {
  var e;
  if (F(), L.charCodeAt(k) === 123) {
    k++, F();
    for (var t = []; e = Za() || Ja(); )
      t.push(e);
    if (!t.length || L.charCodeAt(k++) !== 125)
      throw J("SelectionSet");
    return F(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var eo = /fragment/y;
function to() {
  if (ke(eo)) {
    F();
    var e = Qe();
    if (!e)
      throw J("FragmentDefinition");
    F();
    var t = ma();
    if (!t)
      throw J("FragmentDefinition");
    var r = kt(!1), n = sn();
    if (!n)
      throw J("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: n
    };
  }
}
var ro = /(?:query|mutation|subscription)/y;
function no() {
  var e, t, r = [], n = [];
  (e = ke(ro)) && (F(), t = Qe(), r = function() {
    var s, l = [];
    if (F(), L.charCodeAt(k) === 40) {
      for (k++, F(); s = ke(pa); ) {
        if (F(), L.charCodeAt(k++) !== 58)
          throw J("VariableDefinition");
        var f = ha(), h = void 0;
        if (L.charCodeAt(k) === 61 && (k++, F(), !(h = Qr(!0))))
          throw J("VariableDefinition");
        F(), l.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: s.slice(1)
            }
          },
          type: f,
          defaultValue: h,
          directives: kt(!0)
        });
      }
      if (L.charCodeAt(k++) !== 41)
        throw J("VariableDefinition");
      F();
    }
    return l;
  }(), n = kt(!1));
  var a = sn();
  if (a)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: r,
      directives: n,
      selectionSet: a
    };
}
function io(e, t) {
  return L = typeof e.body == "string" ? e.body : e, k = 0, function() {
    var n;
    F();
    for (var a = []; n = to() || no(); )
      a.push(n);
    return {
      kind: "Document",
      definitions: a
    };
  }();
}
function ao(e) {
  return JSON.stringify(e);
}
function oo(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var Ve = (e) => !(!e || !e.length), pe = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !Ve(e.variableDefinitions) && !Ve(e.directives))
      return pe.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), Ve(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(pe.VariableDefinition).join(", ") + ")"), Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + pe.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = pe.Variable(e.variable) + ": " + qe(e.type);
    return e.defaultValue && (t += " = " + qe(e.defaultValue)), Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (Ve(e.arguments)) {
      var r = e.arguments.map(pe.Argument), n = t + "(" + r.join(", ") + ")";
      t = n.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : n;
    }
    return Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), e.selectionSet ? t + " " + pe.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? oo(e.value) : ao(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(qe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(pe.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + qe(e.value),
  Document: (e) => Ve(e.definitions) ? e.definitions.map(qe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(qe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + qe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + qe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, Ve(e.directives) && (t += " " + e.directives.map(pe.Directive).join(" ")), t + " " + qe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return Ve(e.arguments) && (t += "(" + e.arguments.map(pe.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + qe(e.type) + "]",
  NonNullType: (e) => qe(e.type) + "!"
};
function qe(e) {
  return pe[e.kind] ? pe[e.kind](e) : "";
}
var ga = () => {
}, Ce = ga;
function Ge(e) {
  return {
    tag: 0,
    0: e
  };
}
function mr(e) {
  return {
    tag: 1,
    0: e
  };
}
var so = (e) => e;
function se(e) {
  return (t) => (r) => {
    var n = Ce;
    t((a) => {
      a === 0 ? r(0) : a.tag === 0 ? (n = a[0], r(a)) : e(a[0]) ? r(a) : n(0);
    });
  };
}
function sr(e) {
  return (t) => (r) => t((n) => {
    n === 0 || n.tag === 0 ? r(n) : r(mr(e(n[0])));
  });
}
function Ii(e) {
  return (t) => (r) => {
    var n = [], a = Ce, o = !1, s = !1;
    t((l) => {
      s || (l === 0 ? (s = !0, n.length || r(0)) : l.tag === 0 ? a = l[0] : (o = !1, function(h) {
        var p = Ce;
        h((b) => {
          if (b === 0) {
            if (n.length) {
              var w = n.indexOf(p);
              w > -1 && (n = n.slice()).splice(w, 1), n.length || (s ? r(0) : o || (o = !0, a(0)));
            }
          } else
            b.tag === 0 ? (n.push(p = b[0]), p(0)) : n.length && (r(b), p(0));
        });
      }(e(l[0])), o || (o = !0, a(0))));
    }), r(Ge((l) => {
      if (l === 1) {
        s || (s = !0, a(1));
        for (var f = 0, h = n, p = n.length; f < p; f++)
          h[f](1);
        n.length = 0;
      } else {
        !s && !o ? (o = !0, a(0)) : o = !1;
        for (var b = 0, w = n, O = n.length; b < O; b++)
          w[b](0);
      }
    }));
  };
}
function uo(e) {
  return Ii(so)(e);
}
function Ct(e) {
  return uo(po(e));
}
function ba(e) {
  return (t) => (r) => {
    var n = !1;
    t((a) => {
      if (!n)
        if (a === 0)
          n = !0, r(0), e();
        else if (a.tag === 0) {
          var o = a[0];
          r(Ge((s) => {
            s === 1 ? (n = !0, o(1), e()) : o(s);
          }));
        } else
          r(a);
    });
  };
}
function gr(e) {
  return (t) => (r) => {
    var n = !1;
    t((a) => {
      if (!n)
        if (a === 0)
          n = !0, r(0);
        else if (a.tag === 0) {
          var o = a[0];
          r(Ge((s) => {
            s === 1 && (n = !0), o(s);
          }));
        } else
          e(a[0]), r(a);
    });
  };
}
function Ui(e) {
  return (t) => (r) => t((n) => {
    n === 0 ? r(0) : n.tag === 0 ? (r(n), e()) : r(n);
  });
}
function dr(e) {
  var t = [], r = Ce, n = !1;
  return (a) => {
    t.push(a), t.length === 1 && e((o) => {
      if (o === 0) {
        for (var s = 0, l = t, f = t.length; s < f; s++)
          l[s](0);
        t.length = 0;
      } else if (o.tag === 0)
        r = o[0];
      else {
        n = !1;
        for (var h = 0, p = t, b = t.length; h < b; h++)
          p[h](o);
      }
    }), a(Ge((o) => {
      if (o === 1) {
        var s = t.indexOf(a);
        s > -1 && (t = t.slice()).splice(s, 1), t.length || r(1);
      } else
        n || (n = !0, r(0));
    }));
  };
}
function Bi(e) {
  return (t) => (r) => {
    var n = Ce, a = Ce, o = !1, s = !1, l = !1, f = !1;
    t((h) => {
      f || (h === 0 ? (f = !0, l || r(0)) : h.tag === 0 ? n = h[0] : (l && (a(1), a = Ce), o ? o = !1 : (o = !0, n(0)), function(b) {
        l = !0, b((w) => {
          l && (w === 0 ? (l = !1, f ? r(0) : o || (o = !0, n(0))) : w.tag === 0 ? (s = !1, (a = w[0])(0)) : (r(w), s ? s = !1 : a(0)));
        });
      }(e(h[0]))));
    }), r(Ge((h) => {
      h === 1 ? (f || (f = !0, n(1)), l && (l = !1, a(1))) : (!f && !o && (o = !0, n(0)), l && !s && (s = !0, a(0)));
    }));
  };
}
function va(e) {
  return (t) => (r) => {
    var n = Ce, a = !1, o = 0;
    t((s) => {
      a || (s === 0 ? (a = !0, r(0)) : s.tag === 0 ? e <= 0 ? (a = !0, r(0), s[0](1)) : n = s[0] : o++ < e ? (r(s), !a && o >= e && (a = !0, r(0), n(1))) : r(s));
    }), r(Ge((s) => {
      s === 1 && !a ? (a = !0, n(1)) : s === 0 && !a && o < e && n(0);
    }));
  };
}
function Pi(e) {
  return (t) => (r) => {
    var n = Ce, a = Ce, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, a(1), r(0)) : s.tag === 0 ? (n = s[0], e((l) => {
        l === 0 || (l.tag === 0 ? (a = l[0])(0) : (o = !0, a(1), n(1), r(0)));
      })) : r(s));
    }), r(Ge((s) => {
      s === 1 && !o ? (o = !0, n(1), a(1)) : o || n(0);
    }));
  };
}
function lo(e, t) {
  return (r) => (n) => {
    var a = Ce, o = !1;
    r((s) => {
      o || (s === 0 ? (o = !0, n(0)) : s.tag === 0 ? (a = s[0], n(s)) : e(s[0]) ? n(s) : (o = !0, t && n(s), n(0), a(1)));
    });
  };
}
function co(e) {
  return (t) => e()(t);
}
function Sa(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), n = !1, a = !1, o = !1, s;
    t(Ge(async (l) => {
      if (l === 1)
        n = !0, r.return && r.return();
      else if (a)
        o = !0;
      else {
        for (o = a = !0; o && !n; )
          if ((s = await r.next()).done)
            n = !0, r.return && await r.return(), t(0);
          else
            try {
              o = !1, t(mr(s.value));
            } catch (f) {
              if (r.throw)
                (n = !!(await r.throw(f)).done) && t(0);
              else
                throw f;
            }
        a = !1;
      }
    }));
  };
}
function fo(e) {
  return e[Symbol.asyncIterator] ? Sa(e) : (t) => {
    var r = e[Symbol.iterator](), n = !1, a = !1, o = !1, s;
    t(Ge((l) => {
      if (l === 1)
        n = !0, r.return && r.return();
      else if (a)
        o = !0;
      else {
        for (o = a = !0; o && !n; )
          if ((s = r.next()).done)
            n = !0, r.return && r.return(), t(0);
          else
            try {
              o = !1, t(mr(s.value));
            } catch (f) {
              if (r.throw)
                (n = !!r.throw(f).done) && t(0);
              else
                throw f;
            }
        a = !1;
      }
    }));
  };
}
var po = fo;
function Yn(e) {
  return (t) => {
    var r = !1;
    t(Ge((n) => {
      n === 1 ? r = !0 : r || (r = !0, t(mr(e)), t(0));
    }));
  };
}
function wa(e) {
  return (t) => {
    var r = !1, n = e({
      next(a) {
        r || t(mr(a));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(Ge((a) => {
      a === 1 && !r && (r = !0, n());
    }));
  };
}
function Gi() {
  var e, t;
  return {
    source: dr(wa((r) => (e = r.next, t = r.complete, ga))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function Jr(e) {
  return (t) => {
    var r = Ce, n = !1;
    return t((a) => {
      a === 0 ? n = !0 : a.tag === 0 ? (r = a[0])(0) : n || (e(a[0]), r(0));
    }), {
      unsubscribe() {
        n || (n = !0, r(1));
      }
    };
  };
}
function yo(e) {
  Jr((t) => {
  })(e);
}
function ho(e) {
  return new Promise((t) => {
    var r = Ce, n;
    e((a) => {
      a === 0 ? Promise.resolve(n).then(t) : a.tag === 0 ? (r = a[0])(0) : (n = a[0], r(0));
    });
  });
}
var mo = (...e) => {
  for (var t = e[0], r = 1, n = e.length; r < n; r++)
    t = e[r](t);
  return t;
}, go = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new si(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new si(e);
class br extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(go), n = ((a, o) => {
      var s = "";
      if (a)
        return `[Network] ${a.message}`;
      if (o)
        for (var l of o)
          s && (s += `
`), s += `[GraphQL] ${l.message}`;
      return s;
    })(t.networkError, r);
    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var ui = (e, t) => {
  for (var r = 0 | (t || 5381), n = 0, a = 0 | e.length; n < a; n++)
    r = (r << 5) + r + e.charCodeAt(n);
  return r;
}, yt = /* @__PURE__ */ new Set(), Li = /* @__PURE__ */ new WeakMap(), At = (e) => {
  if (e === null || yt.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return At(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += At(r) || "null";
    return t += "]";
  } else if (Yr !== Dt && e instanceof Yr || Zr !== Dt && e instanceof Zr)
    return "null";
  var n = Object.keys(e).sort();
  if (!n.length && e.constructor && e.constructor !== Object) {
    var a = Li.get(e) || Math.random().toString(36).slice(2);
    return Li.set(e, a), At({
      __key: a
    });
  }
  yt.add(e);
  var o = "{";
  for (var s of n) {
    var l = At(e[s]);
    l && (o.length > 1 && (o += ","), o += At(s) + ":" + l);
  }
  return yt.delete(e), o += "}";
}, li = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || yt.has(r)))
    if (Array.isArray(r))
      for (var n = 0, a = r.length; n < a; n++)
        li(e, `${t}.${n}`, r[n]);
    else if (r instanceof Yr || r instanceof Zr)
      e.set(t, r);
    else {
      yt.add(r);
      for (var o of Object.keys(r))
        li(e, `${t}.${o}`, r[o]);
    }
}, Xr = (e) => (yt.clear(), At(e));
class Dt {
}
var Yr = typeof File < "u" ? File : Dt, Zr = typeof Blob < "u" ? Blob : Dt, bo = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, vo = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, So = (e, t) => t % 2 == 0 ? e.replace(vo, `
`) : e, zi = (e) => e.split(bo).map(So).join("").trim(), Ki = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), _i = (e) => {
  var t;
  return typeof e == "string" ? t = zi(e) : e.loc && Wr.get(e.__key) === e ? t = e.loc.source.body : (t = Ki.get(e) || zi(qe(e)), Ki.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, Wi = (e) => {
  var t = ui(_i(e));
  if (e.definitions) {
    var r = Ta(e);
    r && (t = ui(`
# ${r}`, t));
  }
  return t;
}, Oa = (e) => {
  var t, r;
  return typeof e == "string" ? (t = Wi(e), r = Wr.get(t) || io(e)) : (t = e.__key || Wi(e), r = Wr.get(t) || e), r.loc || _i(r), r.__key = t, Wr.set(t, r), r;
}, Zn = (e, t, r) => {
  var n = t || {}, a = Oa(e), o = Xr(n), s = a.__key;
  return o !== "{}" && (s = ui(o, s)), {
    key: s,
    query: a,
    variables: n,
    extensions: r
  };
}, Ta = (e) => {
  for (var t of e.definitions)
    if (t.kind === Nt.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, wo = (e) => {
  for (var t of e.definitions)
    if (t.kind === Nt.OPERATION_DEFINITION)
      return t.operation;
}, ci = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var n = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new br({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? n : t.hasNext,
    stale: !1
  };
}, di = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = di(e[r], t[r]);
    return e;
  }
  return t;
}, fi = (e, t, r) => {
  var n = e.error ? e.error.graphQLErrors : [], a = !!e.extensions || !!t.extensions, o = {
    ...e.extensions,
    ...t.extensions
  }, s = t.incremental;
  "path" in t && (s = [t]);
  var l = {
    data: e.data
  };
  if (s)
    for (var f of s) {
      Array.isArray(f.errors) && n.push(...f.errors), f.extensions && (Object.assign(o, f.extensions), a = !0);
      for (var h = "data", p = l, b = 0, w = f.path.length; b < w; h = f.path[b++])
        p = p[h] = Array.isArray(p[h]) ? [...p[h]] : {
          ...p[h]
        };
      if (f.items)
        for (var O = +h >= 0 ? h : 0, S = 0, D = f.items.length; S < D; S++)
          p[O + S] = di(p[O + S], f.items[S]);
      else
        f.data !== void 0 && (p[h] = di(p[h], f.data));
    }
  else
    l.data = t.data || e.data, n = t.errors || n;
  return {
    operation: e.operation,
    data: l.data,
    error: n.length ? new br({
      graphQLErrors: n,
      response: r
    }) : void 0,
    extensions: a ? o : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, Ia = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new br({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function Pa(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : _i(e.query),
    operationName: Ta(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var Oo = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var n = new URL(e.context.url);
  for (var a in t) {
    var o = t[a];
    o && n.searchParams.set(a, typeof o == "object" ? Xr(o) : o);
  }
  var s = n.toString();
  return s.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s;
}, To = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Xr(t), n = ((l) => {
      var f = /* @__PURE__ */ new Map();
      return (Yr !== Dt || Zr !== Dt) && (yt.clear(), li(f, "variables", l)), f;
    })(t.variables);
    if (n.size) {
      var a = new FormData();
      a.append("operations", r), a.append("map", Xr({
        ...[...n.keys()].map((l) => [l])
      }));
      var o = 0;
      for (var s of n.values())
        a.append("" + o++, s);
      return a;
    }
    return r;
  }
}, Io = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (n.headers)
    for (var a in n.headers)
      r[a.toLowerCase()] = n.headers[a];
  var o = To(e, t);
  return typeof o == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...n,
    method: o ? "POST" : "GET",
    body: o,
    headers: r
  };
}, Po = typeof TextDecoder < "u" ? new TextDecoder() : null, _o = /boundary="?([^=";]+)"?/i, Ao = /data: ?([^\n]+)/, Hi = (e) => e.constructor.name === "Buffer" ? e.toString() : Po.decode(e);
async function* Qi(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Hi(t);
  else {
    var r = e.body.getReader(), n;
    try {
      for (; !(n = await r.read()).done; )
        yield Hi(n.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Ji(e, t) {
  var r = "", n;
  for await (var a of e)
    for (r += a; (n = r.indexOf(t)) > -1; )
      yield r.slice(0, n), r = r.slice(n + t.length);
}
async function* Eo(e, t, r) {
  var n = !0, a = null, o;
  try {
    yield await Promise.resolve();
    var s = (o = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", l;
    if (/multipart\/mixed/i.test(s))
      l = async function* (p, b) {
        var w = p.match(_o), O = "--" + (w ? w[1] : "-"), S = !0, D;
        for await (var V of Ji(Qi(b), `\r
` + O)) {
          if (S) {
            S = !1;
            var z = V.indexOf(O);
            if (z > -1)
              V = V.slice(z + O.length);
            else
              continue;
          }
          try {
            yield D = JSON.parse(V.slice(V.indexOf(`\r
\r
`) + 4));
          } catch (q) {
            if (!D)
              throw q;
          }
          if (D && D.hasNext === !1)
            break;
        }
        D && D.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(s, o);
    else if (/text\/event-stream/i.test(s))
      l = async function* (p) {
        var b;
        for await (var w of Ji(Qi(p), `

`)) {
          var O = w.match(Ao);
          if (O) {
            var S = O[1];
            try {
              yield b = JSON.parse(S);
            } catch (D) {
              if (!b)
                throw D;
            }
            if (b && b.hasNext === !1)
              break;
          }
        }
        b && b.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o);
    else if (!/text\//i.test(s))
      l = async function* (p) {
        yield JSON.parse(await p.text());
      }(o);
    else
      throw new Error(await o.text());
    for await (var f of l)
      a = a ? fi(a, f, o) : ci(e, f, o), n = !1, yield a, n = !0;
    a || (yield a = ci(e, {}, o));
  } catch (h) {
    if (!n)
      throw h;
    yield Ia(e, o && (o.status < 200 || o.status >= 300) && o.statusText ? new Error(o.statusText) : h, o);
  }
}
function No(e, t, r) {
  var n;
  return typeof AbortController < "u" && (r.signal = (n = new AbortController()).signal), ba(() => {
    n && n.abort();
  })(se((a) => !!a)(Sa(Eo(e, t, r))));
}
var pi = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      pi(r, t);
  else if (typeof e == "object" && e !== null)
    for (var n in e)
      n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : pi(e[n], t);
  return t;
}, yi = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var n of e.definitions) {
      var a = yi(n);
      t = t || a !== n, r.push(a);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var o = [], s = e.kind === Nt.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var l of e.selectionSet.selections || []) {
        s = s || l.kind === Nt.FIELD && l.name.value === "__typename" && !l.alias;
        var f = yi(l);
        t = t || f !== l, o.push(f);
      }
      if (s || (t = !0, o.push({
        kind: Nt.FIELD,
        name: {
          kind: Nt.NAME,
          value: "__typename"
        }
      })), t)
        return {
          ...e,
          selectionSet: {
            ...e.selectionSet,
            selections: o
          }
        };
    }
  }
  return e;
}, Xi = /* @__PURE__ */ new Map(), jo = (e) => {
  var t = Oa(e), r = Xi.get(t.__key);
  return r || (Xi.set(t.__key, r = yi(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, hi = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((a) => hi(a));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var n in e)
      n === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[n] = hi(e[n]);
    return r;
  } else
    return e;
};
function Yi(e) {
  var t = (r) => e(r);
  return t.toPromise = () => ho(va(1)(se((r) => !r.stale && !r.hasNext)(t))), t.then = (r, n) => t.toPromise().then(r, n), t.subscribe = (r) => Jr(r)(t), t;
}
function Ft(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Zi = (e, t) => Ft(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), xo = () => {
}, ei = ({ kind: e }) => e !== "mutation" && e !== "query", ko = ({ forward: e, client: t, dispatchDebug: r }) => {
  var n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (l) => {
    var f = Ft(l.kind, l);
    return f.query = jo(l.query), f;
  }, s = (l) => l.kind === "query" && l.context.requestPolicy !== "network-only" && (l.context.requestPolicy === "cache-only" || n.has(l.key));
  return (l) => {
    var f = sr((p) => {
      var b = n.get(p.key);
      process.env.NODE_ENV !== "production" && r({
        operation: p,
        ...b ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var w = b;
      return process.env.NODE_ENV !== "production" && (w = {
        ...w,
        operation: process.env.NODE_ENV !== "production" ? Zi(p, {
          cacheOutcome: b ? "hit" : "miss"
        }) : p
      }), p.context.requestPolicy === "cache-and-network" && (w.stale = !0, ea(t, p)), w;
    })(se((p) => !ei(p) && s(p))(l)), h = gr((p) => {
      var { operation: b } = p;
      if (b) {
        var w = b.context.additionalTypenames || [];
        if (p.operation.kind !== "subscription" && (w = ((v) => [...pi(v, /* @__PURE__ */ new Set())])(p.data).concat(w)), p.operation.kind === "mutation" || p.operation.kind === "subscription") {
          var O = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${w}`,
            operation: b,
            data: {
              typenames: w,
              response: p
            },
            source: "cacheExchange"
          });
          for (var S = 0; S < w.length; S++) {
            var D = w[S], V = a.get(D);
            V || a.set(D, V = /* @__PURE__ */ new Set());
            for (var z of V.values())
              O.add(z);
            V.clear();
          }
          for (var q of O.values())
            n.has(q) && (b = n.get(q).operation, n.delete(q), ea(t, b));
        } else if (b.kind === "query" && p.data) {
          n.set(b.key, p);
          for (var G = 0; G < w.length; G++) {
            var g = w[G], A = a.get(g);
            A || a.set(g, A = /* @__PURE__ */ new Set()), A.add(b.key);
          }
        }
      }
    })(e(se((p) => p.kind !== "query" || p.context.requestPolicy !== "cache-only")(sr((p) => process.env.NODE_ENV !== "production" ? Zi(p, {
      cacheOutcome: "miss"
    }) : p)(Ct([sr(o)(se((p) => !ei(p) && !s(p))(l)), se((p) => ei(p))(l)])))));
    return Ct([f, h]);
  };
}, ea = (e, t) => e.reexecuteOperation(Ft(t.kind, t, {
  requestPolicy: "network-only"
})), ta = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: n, forward: a }) => {
  var o = r || ((s) => s.kind === "subscription" || !!t && (s.kind === "query" || s.kind === "mutation"));
  return (s) => {
    var l = Ii((h) => {
      var { key: p } = h, b = se((w) => w.kind === "teardown" && w.key === p)(s);
      return Pi(b)(((w) => {
        var O = e(Pa(w), w);
        return wa(({ next: S, complete: D }) => {
          var V = !1, z, q;
          return Promise.resolve().then(() => {
            V || (z = O.subscribe({
              next(G) {
                S(q = q ? fi(q, G) : ci(w, G));
              },
              error(G) {
                S(Ia(w, G));
              },
              complete() {
                V || (V = !0, w.kind === "subscription" && n.reexecuteOperation(Ft("teardown", w, w.context)), q && q.hasNext && S(fi(q, {
                  hasNext: !1
                })), D());
              }
            }));
          }), () => {
            V = !0, z && z.unsubscribe();
          };
        });
      })(h));
    })(se((h) => h.kind !== "teardown" && o(h))(s)), f = a(se((h) => h.kind === "teardown" || !o(h))(s));
    return Ct([l, f]);
  };
}, Co = ({ forward: e, dispatchDebug: t }) => (r) => {
  var n = Ii((o) => {
    var s = Pa(o), l = Oo(o, s), f = Io(o, s);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: o,
      data: {
        url: l,
        fetchOptions: f
      },
      source: "fetchExchange"
    });
    var h = Pi(se((p) => p.kind === "teardown" && p.key === o.key)(r))(No(o, l, f));
    return process.env.NODE_ENV !== "production" ? gr((p) => {
      var b = p.data ? void 0 : p.error;
      process.env.NODE_ENV !== "production" && t({
        type: b ? "fetchError" : "fetchSuccess",
        message: `A ${b ? "failed" : "successful"} fetch response has been returned.`,
        operation: o,
        data: {
          url: l,
          fetchOptions: f,
          value: b || p
        },
        source: "fetchExchange"
      });
    })(h) : h;
  })(se((o) => o.kind !== "teardown" && (o.kind !== "subscription" || !!o.context.fetchSubscriptions))(r)), a = e(se((o) => o.kind === "teardown" || o.kind === "subscription" && !o.context.fetchSubscriptions)(r));
  return Ct([n, a]);
}, Do = (e) => ({ client: t, forward: r, dispatchDebug: n }) => e.reduceRight((a, o) => {
  var s = !1;
  return o({
    client: t,
    forward(l) {
      if (process.env.NODE_ENV !== "production") {
        if (s)
          throw new Error("forward() must only be called once in each Exchange.");
        s = !0;
      }
      return dr(a(dr(l)));
    },
    dispatchDebug(l) {
      process.env.NODE_ENV !== "production" && n({
        timestamp: Date.now(),
        source: o.name,
        ...l
      });
    }
  });
}, r), Fo = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = gr((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var n = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: n,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(n);
  }
})(t)), se((r) => !1)(t)), ra = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [], l = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, f = Gi();
  function h(g) {
    (g.kind === "mutation" || g.kind === "teardown" || !o.has(g.key)) && (g.kind === "teardown" ? o.delete(g.key) : g.kind !== "mutation" && o.add(g.key), f.next(g));
  }
  var p = !1;
  function b(g) {
    if (g && h(g), !p) {
      for (p = !0; p && (g = s.shift()); )
        h(g);
      p = !1;
    }
  }
  var w = (g) => {
    var A = Pi(se((v) => v.kind === "teardown" && v.key === g.key)(f.source))(se((v) => v.operation.kind === g.kind && v.operation.key === g.key && (!v.operation.context._instance || v.operation.context._instance === g.context._instance))(G));
    return g.kind !== "query" ? A = lo((v) => !!v.hasNext, !0)(A) : A = Bi((v) => {
      var B = Yn(v);
      return v.stale || v.hasNext ? B : Ct([B, sr(() => (v.stale = !0, v))(va(1)(se((X) => X.key === g.key)(f.source)))]);
    })(A), g.kind !== "mutation" ? A = ba(() => {
      o.delete(g.key), n.delete(g.key), a.delete(g.key), p = !1;
      for (var v = s.length - 1; v >= 0; v--)
        s[v].key === g.key && s.splice(v, 1);
      h(Ft("teardown", g, g.context));
    })(gr((v) => {
      if (v.stale) {
        for (var B of s)
          if (B.key === v.operation.key) {
            o.delete(B.key);
            break;
          }
      } else
        v.hasNext || o.delete(g.key);
      n.set(g.key, v);
    })(A)) : A = Ui(() => {
      h(g);
    })(A), t.maskTypename && (A = sr((v) => ({
      ...v,
      data: hi(v.data, !0)
    }))(A)), dr(A);
  }, O = this instanceof e ? this : Object.create(e.prototype), S = Object.assign(O, {
    suspense: !!t.suspense,
    operations$: f.source,
    reexecuteOperation(g) {
      g.kind === "teardown" ? b(g) : (g.kind === "mutation" || a.has(g.key)) && (s.push(g), Promise.resolve().then(b));
    },
    createRequestOperation(g, A, v) {
      v || (v = {});
      var B;
      if (process.env.NODE_ENV !== "production" && g !== "teardown" && (B = wo(A.query)) !== g)
        throw new Error(`Expected operation of type "${g}" but found "${B}"`);
      return Ft(g, A, {
        _instance: g === "mutation" ? r = r + 1 | 0 : void 0,
        ...l,
        ...v,
        requestPolicy: v.requestPolicy || l.requestPolicy,
        suspense: v.suspense || v.suspense !== !1 && S.suspense
      });
    },
    executeRequestOperation(g) {
      return g.kind === "mutation" ? Yi(w(g)) : Yi(co(() => {
        var A = a.get(g.key);
        A || a.set(g.key, A = w(g)), A = Ui(() => {
          b(g);
        })(A);
        var v = n.get(g.key);
        return g.kind === "query" && v && (v.stale || v.hasNext) ? Bi(Yn)(Ct([A, se((B) => B === n.get(g.key))(Yn(v))])) : A;
      }));
    },
    executeQuery(g, A) {
      var v = S.createRequestOperation("query", g, A);
      return S.executeRequestOperation(v);
    },
    executeSubscription(g, A) {
      var v = S.createRequestOperation("subscription", g, A);
      return S.executeRequestOperation(v);
    },
    executeMutation(g, A) {
      var v = S.createRequestOperation("mutation", g, A);
      return S.executeRequestOperation(v);
    },
    readQuery(g, A, v) {
      var B = null;
      return Jr((X) => {
        B = X;
      })(S.query(g, A, v)).unsubscribe(), B;
    },
    query: (g, A, v) => S.executeQuery(Zn(g, A), v),
    subscription: (g, A, v) => S.executeSubscription(Zn(g, A), v),
    mutation: (g, A, v) => S.executeMutation(Zn(g, A), v)
  }), D = xo;
  if (process.env.NODE_ENV !== "production") {
    var { next: V, source: z } = Gi();
    S.subscribeToDebugTarget = (g) => Jr(g)(z), D = V;
  }
  var q = Do(t.exchanges), G = dr(q({
    client: S,
    dispatchDebug: D,
    forward: Fo({
      dispatchDebug: D
    })
  })(f.source));
  return yo(G), S;
}, tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mi = { exports: {} };
(function(e, t) {
  var r = typeof self < "u" ? self : tt, n = function() {
    function o() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return o.prototype = r, new o();
  }();
  (function(o) {
    (function(s) {
      var l = {
        searchParams: "URLSearchParams" in o,
        iterable: "Symbol" in o && "iterator" in Symbol,
        blob: "FileReader" in o && "Blob" in o && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in o,
        arrayBuffer: "ArrayBuffer" in o
      };
      function f(d) {
        return d && DataView.prototype.isPrototypeOf(d);
      }
      if (l.arrayBuffer)
        var h = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], p = ArrayBuffer.isView || function(d) {
          return d && h.indexOf(Object.prototype.toString.call(d)) > -1;
        };
      function b(d) {
        if (typeof d != "string" && (d = String(d)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(d))
          throw new TypeError("Invalid character in header field name");
        return d.toLowerCase();
      }
      function w(d) {
        return typeof d != "string" && (d = String(d)), d;
      }
      function O(d) {
        var m = {
          next: function() {
            var T = d.shift();
            return { done: T === void 0, value: T };
          }
        };
        return l.iterable && (m[Symbol.iterator] = function() {
          return m;
        }), m;
      }
      function S(d) {
        this.map = {}, d instanceof S ? d.forEach(function(m, T) {
          this.append(T, m);
        }, this) : Array.isArray(d) ? d.forEach(function(m) {
          this.append(m[0], m[1]);
        }, this) : d && Object.getOwnPropertyNames(d).forEach(function(m) {
          this.append(m, d[m]);
        }, this);
      }
      S.prototype.append = function(d, m) {
        d = b(d), m = w(m);
        var T = this.map[d];
        this.map[d] = T ? T + ", " + m : m;
      }, S.prototype.delete = function(d) {
        delete this.map[b(d)];
      }, S.prototype.get = function(d) {
        return d = b(d), this.has(d) ? this.map[d] : null;
      }, S.prototype.has = function(d) {
        return this.map.hasOwnProperty(b(d));
      }, S.prototype.set = function(d, m) {
        this.map[b(d)] = w(m);
      }, S.prototype.forEach = function(d, m) {
        for (var T in this.map)
          this.map.hasOwnProperty(T) && d.call(m, this.map[T], T, this);
      }, S.prototype.keys = function() {
        var d = [];
        return this.forEach(function(m, T) {
          d.push(T);
        }), O(d);
      }, S.prototype.values = function() {
        var d = [];
        return this.forEach(function(m) {
          d.push(m);
        }), O(d);
      }, S.prototype.entries = function() {
        var d = [];
        return this.forEach(function(m, T) {
          d.push([T, m]);
        }), O(d);
      }, l.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function D(d) {
        if (d.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        d.bodyUsed = !0;
      }
      function V(d) {
        return new Promise(function(m, T) {
          d.onload = function() {
            m(d.result);
          }, d.onerror = function() {
            T(d.error);
          };
        });
      }
      function z(d) {
        var m = new FileReader(), T = V(m);
        return m.readAsArrayBuffer(d), T;
      }
      function q(d) {
        var m = new FileReader(), T = V(m);
        return m.readAsText(d), T;
      }
      function G(d) {
        for (var m = new Uint8Array(d), T = new Array(m.length), _ = 0; _ < m.length; _++)
          T[_] = String.fromCharCode(m[_]);
        return T.join("");
      }
      function g(d) {
        if (d.slice)
          return d.slice(0);
        var m = new Uint8Array(d.byteLength);
        return m.set(new Uint8Array(d)), m.buffer;
      }
      function A() {
        return this.bodyUsed = !1, this._initBody = function(d) {
          this._bodyInit = d, d ? typeof d == "string" ? this._bodyText = d : l.blob && Blob.prototype.isPrototypeOf(d) ? this._bodyBlob = d : l.formData && FormData.prototype.isPrototypeOf(d) ? this._bodyFormData = d : l.searchParams && URLSearchParams.prototype.isPrototypeOf(d) ? this._bodyText = d.toString() : l.arrayBuffer && l.blob && f(d) ? (this._bodyArrayBuffer = g(d.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(d) || p(d)) ? this._bodyArrayBuffer = g(d) : this._bodyText = d = Object.prototype.toString.call(d) : this._bodyText = "", this.headers.get("content-type") || (typeof d == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(d) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, l.blob && (this.blob = function() {
          var d = D(this);
          if (d)
            return d;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? D(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(z);
        }), this.text = function() {
          var d = D(this);
          if (d)
            return d;
          if (this._bodyBlob)
            return q(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(G(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, l.formData && (this.formData = function() {
          return this.text().then(Le);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function B(d) {
        var m = d.toUpperCase();
        return v.indexOf(m) > -1 ? m : d;
      }
      function X(d, m) {
        m = m || {};
        var T = m.body;
        if (d instanceof X) {
          if (d.bodyUsed)
            throw new TypeError("Already read");
          this.url = d.url, this.credentials = d.credentials, m.headers || (this.headers = new S(d.headers)), this.method = d.method, this.mode = d.mode, this.signal = d.signal, !T && d._bodyInit != null && (T = d._bodyInit, d.bodyUsed = !0);
        } else
          this.url = String(d);
        if (this.credentials = m.credentials || this.credentials || "same-origin", (m.headers || !this.headers) && (this.headers = new S(m.headers)), this.method = B(m.method || this.method || "GET"), this.mode = m.mode || this.mode || null, this.signal = m.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && T)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(T);
      }
      X.prototype.clone = function() {
        return new X(this, { body: this._bodyInit });
      };
      function Le(d) {
        var m = new FormData();
        return d.trim().split("&").forEach(function(T) {
          if (T) {
            var _ = T.split("="), x = _.shift().replace(/\+/g, " "), C = _.join("=").replace(/\+/g, " ");
            m.append(decodeURIComponent(x), decodeURIComponent(C));
          }
        }), m;
      }
      function Ee(d) {
        var m = new S(), T = d.replace(/\r?\n[\t ]+/g, " ");
        return T.split(/\r?\n/).forEach(function(_) {
          var x = _.split(":"), C = x.shift().trim();
          if (C) {
            var I = x.join(":").trim();
            m.append(C, I);
          }
        }), m;
      }
      A.call(X.prototype);
      function Y(d, m) {
        m || (m = {}), this.type = "default", this.status = m.status === void 0 ? 200 : m.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in m ? m.statusText : "OK", this.headers = new S(m.headers), this.url = m.url || "", this._initBody(d);
      }
      A.call(Y.prototype), Y.prototype.clone = function() {
        return new Y(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new S(this.headers),
          url: this.url
        });
      }, Y.error = function() {
        var d = new Y(null, { status: 0, statusText: "" });
        return d.type = "error", d;
      };
      var De = [301, 302, 303, 307, 308];
      Y.redirect = function(d, m) {
        if (De.indexOf(m) === -1)
          throw new RangeError("Invalid status code");
        return new Y(null, { status: m, headers: { location: d } });
      }, s.DOMException = o.DOMException;
      try {
        new s.DOMException();
      } catch {
        s.DOMException = function(m, T) {
          this.message = m, this.name = T;
          var _ = Error(m);
          this.stack = _.stack;
        }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
      }
      function Me(d, m) {
        return new Promise(function(T, _) {
          var x = new X(d, m);
          if (x.signal && x.signal.aborted)
            return _(new s.DOMException("Aborted", "AbortError"));
          var C = new XMLHttpRequest();
          function I() {
            C.abort();
          }
          C.onload = function() {
            var ue = {
              status: C.status,
              statusText: C.statusText,
              headers: Ee(C.getAllResponseHeaders() || "")
            };
            ue.url = "responseURL" in C ? C.responseURL : ue.headers.get("X-Request-URL");
            var Ne = "response" in C ? C.response : C.responseText;
            T(new Y(Ne, ue));
          }, C.onerror = function() {
            _(new TypeError("Network request failed"));
          }, C.ontimeout = function() {
            _(new TypeError("Network request failed"));
          }, C.onabort = function() {
            _(new s.DOMException("Aborted", "AbortError"));
          }, C.open(x.method, x.url, !0), x.credentials === "include" ? C.withCredentials = !0 : x.credentials === "omit" && (C.withCredentials = !1), "responseType" in C && l.blob && (C.responseType = "blob"), x.headers.forEach(function(ue, Ne) {
            C.setRequestHeader(Ne, ue);
          }), x.signal && (x.signal.addEventListener("abort", I), C.onreadystatechange = function() {
            C.readyState === 4 && x.signal.removeEventListener("abort", I);
          }), C.send(typeof x._bodyInit > "u" ? null : x._bodyInit);
        });
      }
      return Me.polyfill = !0, o.fetch || (o.fetch = Me, o.Headers = S, o.Request = X, o.Response = Y), s.Headers = S, s.Request = X, s.Response = Y, s.fetch = Me, Object.defineProperty(s, "__esModule", { value: !0 }), s;
    })({});
  })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
  var a = n;
  t = a.fetch, t.default = a.fetch, t.fetch = a.fetch, t.Headers = a.Headers, t.Request = a.Request, t.Response = a.Response, e.exports = t;
})(mi, mi.exports);
var Vo = mi.exports;
const qo = /* @__PURE__ */ Ai(Vo);
function we(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function ft(e) {
  return we(e) === "object";
}
function Mo(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function na(e, t) {
  return e.length < 124 ? e : t;
}
const $o = "graphql-transport-ws";
var be;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(be || (be = {}));
var H;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(H || (H = {}));
function _a(e) {
  if (!ft(e))
    throw new Error(`Message is expected to be an object, but got ${we(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${we(e.type)}`);
  switch (e.type) {
    case H.ConnectionInit:
    case H.ConnectionAck:
    case H.Ping:
    case H.Pong: {
      if (e.payload != null && !ft(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case H.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ft(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${we(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${we(e.payload.query)}`);
      if (e.payload.variables != null && !ft(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${we(e.payload.variables)}`);
      if (e.payload.operationName != null && we(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${we(e.payload.operationName)}`);
      if (e.payload.extensions != null && !ft(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${we(e.payload.extensions)}`);
      break;
    }
    case H.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!ft(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${we(e.payload)}`);
      break;
    }
    case H.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Mo(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case H.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${we(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Ro(e, t) {
  return _a(typeof e == "string" ? JSON.parse(e, t) : e);
}
function ir(e, t) {
  return _a(e), JSON.stringify(e, t);
}
function Uo(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: a = console.error,
    lazyCloseTimeout: o = 0,
    keepAlive: s = 0,
    disablePong: l,
    connectionAckWaitTimeout: f = 0,
    retryAttempts: h = 5,
    retryWait: p = async function(m) {
      let T = 1e3;
      for (let _ = 0; _ < m; _++)
        T *= 2;
      await new Promise((_) => setTimeout(_, T + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: b = zr,
    isFatalConnectionProblem: w,
    on: O,
    webSocketImpl: S,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: D = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (m) => {
        const T = Math.random() * 16 | 0;
        return (m == "x" ? T : T & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: V,
    jsonMessageReviver: z
  } = e;
  let q;
  if (S) {
    if (!Go(S))
      throw new Error("Invalid WebSocket implementation provided");
    q = S;
  } else
    typeof WebSocket < "u" ? q = WebSocket : typeof global < "u" ? q = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (q = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!q)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const G = q, g = (() => {
    const d = (() => {
      const T = {};
      return {
        on(_, x) {
          return T[_] = x, () => {
            delete T[_];
          };
        },
        emit(_) {
          var x;
          "id" in _ && ((x = T[_.id]) === null || x === void 0 || x.call(T, _));
        }
      };
    })(), m = {
      connecting: O != null && O.connecting ? [O.connecting] : [],
      opened: O != null && O.opened ? [O.opened] : [],
      connected: O != null && O.connected ? [O.connected] : [],
      ping: O != null && O.ping ? [O.ping] : [],
      pong: O != null && O.pong ? [O.pong] : [],
      message: O != null && O.message ? [d.emit, O.message] : [d.emit],
      closed: O != null && O.closed ? [O.closed] : [],
      error: O != null && O.error ? [O.error] : []
    };
    return {
      onMessage: d.on,
      on(T, _) {
        const x = m[T];
        return x.push(_), () => {
          x.splice(x.indexOf(_), 1);
        };
      },
      emit(T, ..._) {
        for (const x of [...m[T]])
          x(..._);
      }
    };
  })();
  function A(d) {
    const m = [
      // errors are fatal and more critical than close events, throw them first
      g.on("error", (T) => {
        m.forEach((_) => _()), d(T);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      g.on("closed", (T) => {
        m.forEach((_) => _()), d(T);
      })
    ];
  }
  let v, B = 0, X, Le = !1, Ee = 0, Y = !1;
  async function De() {
    clearTimeout(X);
    const [d, m] = await (v ?? (v = new Promise((x, C) => (async () => {
      if (Le) {
        if (await p(Ee), !B)
          return v = void 0, C({ code: 1e3, reason: "All Subscriptions Gone" });
        Ee++;
      }
      g.emit("connecting");
      const I = new G(typeof t == "function" ? await t() : t, $o);
      let ue, Ne;
      function le() {
        isFinite(s) && s > 0 && (clearTimeout(Ne), Ne = setTimeout(() => {
          I.readyState === G.OPEN && (I.send(ir({ type: H.Ping })), g.emit("ping", !1, void 0));
        }, s));
      }
      A((E) => {
        v = void 0, clearTimeout(ue), clearTimeout(Ne), C(E), zr(E) && E.code === 4499 && (I.close(4499, "Terminated"), I.onerror = null, I.onclose = null);
      }), I.onerror = (E) => g.emit("error", E), I.onclose = (E) => g.emit("closed", E), I.onopen = async () => {
        try {
          g.emit("opened", I);
          const E = typeof r == "function" ? await r() : r;
          if (I.readyState !== G.OPEN)
            return;
          I.send(ir(E ? {
            type: H.ConnectionInit,
            payload: E
          } : {
            type: H.ConnectionInit
            // payload is completely absent if not provided
          }, V)), isFinite(f) && f > 0 && (ue = setTimeout(() => {
            I.close(be.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, f)), le();
        } catch (E) {
          g.emit("error", E), I.close(be.InternalClientError, na(E instanceof Error ? E.message : new Error(E).message, "Internal client error"));
        }
      };
      let $e = !1;
      I.onmessage = ({ data: E }) => {
        try {
          const W = Ro(E, z);
          if (g.emit("message", W), W.type === "ping" || W.type === "pong") {
            g.emit(W.type, !0, W.payload), W.type === "pong" ? le() : l || (I.send(ir(W.payload ? {
              type: H.Pong,
              payload: W.payload
            } : {
              type: H.Pong
              // payload is completely absent if not provided
            })), g.emit("pong", !1, W.payload));
            return;
          }
          if ($e)
            return;
          if (W.type !== H.ConnectionAck)
            throw new Error(`First message cannot be of type ${W.type}`);
          clearTimeout(ue), $e = !0, g.emit("connected", I, W.payload), Le = !1, Ee = 0, x([
            I,
            new Promise((Sr, je) => A(je))
          ]);
        } catch (W) {
          I.onmessage = null, g.emit("error", W), I.close(be.BadResponse, na(W instanceof Error ? W.message : new Error(W).message, "Bad response"));
        }
      };
    })())));
    d.readyState === G.CLOSING && await m;
    let T = () => {
    };
    const _ = new Promise((x) => T = x);
    return [
      d,
      T,
      Promise.race([
        // wait for
        _.then(() => {
          if (!B) {
            const x = () => d.close(1e3, "Normal Closure");
            isFinite(o) && o > 0 ? X = setTimeout(() => {
              d.readyState === G.OPEN && x();
            }, o) : x();
          }
        }),
        // or
        m
      ])
    ];
  }
  function Me(d) {
    if (zr(d) && (Bo(d.code) || [
      be.InternalServerError,
      be.InternalClientError,
      be.BadRequest,
      be.BadResponse,
      be.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      be.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      be.SubscriberAlreadyExists,
      be.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(d.code)))
      throw d;
    if (Y)
      return !1;
    if (zr(d) && d.code === 1e3)
      return B > 0;
    if (!h || Ee >= h || !b(d) || w != null && w(d))
      throw d;
    return Le = !0;
  }
  return n || (async () => {
    for (B++; ; )
      try {
        const [, , d] = await De();
        await d;
      } catch (d) {
        try {
          if (!Me(d))
            return;
        } catch (m) {
          return a == null ? void 0 : a(m);
        }
      }
  })(), {
    on: g.on,
    subscribe(d, m) {
      const T = D(d);
      let _ = !1, x = !1, C = () => {
        B--, _ = !0;
      };
      return (async () => {
        for (B++; ; )
          try {
            const [I, ue, Ne] = await De();
            if (_)
              return ue();
            const le = g.onMessage(T, ($e) => {
              switch ($e.type) {
                case H.Next: {
                  m.next($e.payload);
                  return;
                }
                case H.Error: {
                  x = !0, _ = !0, m.error($e.payload), C();
                  return;
                }
                case H.Complete: {
                  _ = !0, C();
                  return;
                }
              }
            });
            I.send(ir({
              id: T,
              type: H.Subscribe,
              payload: d
            }, V)), C = () => {
              !_ && I.readyState === G.OPEN && I.send(ir({
                id: T,
                type: H.Complete
              }, V)), B--, _ = !0, ue();
            }, await Ne.finally(le);
            return;
          } catch (I) {
            if (!Me(I))
              return;
          }
      })().then(() => {
        x || m.complete();
      }).catch((I) => {
        m.error(I);
      }), () => {
        _ || C();
      };
    },
    async dispose() {
      if (Y = !0, v) {
        const [d] = await v;
        d.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      v && g.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function zr(e) {
  return ft(e) && "code" in e && "reason" in e;
}
function Bo(e) {
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
function Go(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Et = null;
typeof WebSocket < "u" ? Et = WebSocket : typeof MozWebSocket < "u" ? Et = MozWebSocket : typeof global < "u" ? Et = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Et = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Et = self.WebSocket || self.MozWebSocket);
const Lo = Et;
var zo = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, xt = "1.4.0", ia = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Ko(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(ia);
  if (!n)
    return function() {
      return !1;
    };
  var a = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (a.prerelease != null)
    return function(f) {
      return f === e;
    };
  function o(l) {
    return r.add(l), !1;
  }
  function s(l) {
    return t.add(l), !0;
  }
  return function(f) {
    if (t.has(f))
      return !0;
    if (r.has(f))
      return !1;
    var h = f.match(ia);
    if (!h)
      return o(f);
    var p = {
      major: +h[1],
      minor: +h[2],
      patch: +h[3],
      prerelease: h[4]
    };
    return p.prerelease != null || a.major !== p.major ? o(f) : a.major === 0 ? a.minor === p.minor && a.patch <= p.patch ? s(f) : o(f) : a.minor <= p.minor ? s(f) : o(f);
  };
}
var Wo = Ko(xt), Ho = xt.split(".")[0], fr = Symbol.for("opentelemetry.js.api." + Ho), pr = zo;
function Ei(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var o = pr[fr] = (a = pr[fr]) !== null && a !== void 0 ? a : {
    version: xt
  };
  if (!n && o[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(s.stack || s.message), !1;
  }
  if (o.version !== xt) {
    var s = new Error("@opentelemetry/api: All API registration versions must match");
    return r.error(s.stack || s.message), !1;
  }
  return o[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + xt + "."), !0;
}
function yr(e) {
  var t, r, n = (t = pr[fr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Wo(n)))
    return (r = pr[fr]) === null || r === void 0 ? void 0 : r[e];
}
function Ni(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + xt + ".");
  var r = pr[fr];
  r && delete r[e];
}
var Qo = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}, Jo = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, Xo = (
  /** @class */
  function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ar("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ar("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ar("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ar("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return ar("verbose", this._namespace, t);
    }, e;
  }()
);
function ar(e, t, r) {
  var n = yr("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, Jo([], Qo(r), !1));
}
var xe;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(xe || (xe = {}));
function Yo(e, t) {
  e < xe.NONE ? e = xe.NONE : e > xe.ALL && (e = xe.ALL), t = t || {};
  function r(n, a) {
    var o = t[n];
    return typeof o == "function" && e >= a ? o.bind(t) : function() {
    };
  }
  return {
    error: r("error", xe.ERROR),
    warn: r("warn", xe.WARN),
    info: r("info", xe.INFO),
    debug: r("debug", xe.DEBUG),
    verbose: r("verbose", xe.VERBOSE)
  };
}
var Zo = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}, es = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ts = "diag", en = (
  /** @class */
  function() {
    function e() {
      function t(a) {
        return function() {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          var l = yr("diag");
          if (l)
            return l[a].apply(l, es([], Zo(o), !1));
        };
      }
      var r = this, n = function(a, o) {
        var s, l, f;
        if (o === void 0 && (o = { logLevel: xe.INFO }), a === r) {
          var h = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((s = h.stack) !== null && s !== void 0 ? s : h.message), !1;
        }
        typeof o == "number" && (o = {
          logLevel: o
        });
        var p = yr("diag"), b = Yo((l = o.logLevel) !== null && l !== void 0 ? l : xe.INFO, a);
        if (p && !o.suppressOverrideMessage) {
          var w = (f = new Error().stack) !== null && f !== void 0 ? f : "<failed to generate stacktrace>";
          p.warn("Current logger will be overwritten from " + w), b.warn("Current logger will overwrite one already registered from " + w);
        }
        return Ei("diag", b, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Ni(ts, r);
      }, r.createComponentLogger = function(a) {
        return new Xo(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  }()
);
function rs(e) {
  return Symbol.for(e);
}
var ns = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
        return r._currentContext.get(n);
      }, r.setValue = function(n, a) {
        var o = new e(r._currentContext);
        return o._currentContext.set(n, a), o;
      }, r.deleteValue = function(n) {
        var a = new e(r._currentContext);
        return a._currentContext.delete(n), a;
      };
    }
    return e;
  }()
), is = new ns(), as = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}, os = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ss = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.active = function() {
      return is;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], o = 3; o < arguments.length; o++)
        a[o - 3] = arguments[o];
      return r.call.apply(r, os([n], as(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  }()
), us = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}, ls = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ti = "context", cs = new ss(), ji = (
  /** @class */
  function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Ei(ti, t, en.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, o = [], s = 3; s < arguments.length; s++)
        o[s - 3] = arguments[s];
      return (a = this._getContextManager()).with.apply(a, ls([t, r, n], us(o), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return yr(ti) || cs;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Ni(ti, en.instance());
    }, e;
  }()
), gi;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(gi || (gi = {}));
var Aa = "0000000000000000", Ea = "00000000000000000000000000000000", ds = {
  traceId: Ea,
  spanId: Aa,
  traceFlags: gi.NONE
}, ur = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = ds), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, r) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, r) {
      return this;
    }, e.prototype.setStatus = function(t) {
      return this;
    }, e.prototype.updateName = function(t) {
      return this;
    }, e.prototype.end = function(t) {
    }, e.prototype.isRecording = function() {
      return !1;
    }, e.prototype.recordException = function(t, r) {
    }, e;
  }()
), xi = rs("OpenTelemetry Context Key SPAN");
function ki(e) {
  return e.getValue(xi) || void 0;
}
function fs() {
  return ki(ji.getInstance().active());
}
function Ci(e, t) {
  return e.setValue(xi, t);
}
function ps(e) {
  return e.deleteValue(xi);
}
function ys(e, t) {
  return Ci(e, new ur(t));
}
function Na(e) {
  var t;
  return (t = ki(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var hs = /^([0-9a-f]{32})$/i, ms = /^[0-9a-f]{16}$/i;
function gs(e) {
  return hs.test(e) && e !== Ea;
}
function bs(e) {
  return ms.test(e) && e !== Aa;
}
function ja(e) {
  return gs(e.traceId) && bs(e.spanId);
}
function vs(e) {
  return new ur(e);
}
var ri = ji.getInstance(), xa = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = ri.active());
      var a = !!(r != null && r.root);
      if (a)
        return new ur();
      var o = n && Na(n);
      return Ss(o) && ja(o) ? new ur(o) : new ur();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var o, s, l;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? l = r : arguments.length === 3 ? (o = r, l = n) : (o = r, s = n, l = a);
        var f = s ?? ri.active(), h = this.startSpan(t, o, f), p = Ci(f, h);
        return ri.with(p, l, void 0, h);
      }
    }, e;
  }()
);
function Ss(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var ws = new xa(), Os = (
  /** @class */
  function() {
    function e(t, r, n, a) {
      this._provider = t, this.name = r, this.version = n, this.options = a;
    }
    return e.prototype.startSpan = function(t, r, n) {
      return this._getTracer().startSpan(t, r, n);
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var o = this._getTracer();
      return Reflect.apply(o.startActiveSpan, o, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : ws;
    }, e;
  }()
), Ts = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new xa();
    }, e;
  }()
), Is = new Ts(), aa = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new Os(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Is;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  }()
), bi;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(bi || (bi = {}));
var Hr = ji.getInstance(), ni = "trace", Ps = (
  /** @class */
  function() {
    function e() {
      this._proxyTracerProvider = new aa(), this.wrapSpanContext = vs, this.isSpanContextValid = ja, this.deleteSpan = ps, this.getSpan = ki, this.getActiveSpan = fs, this.getSpanContext = Na, this.setSpan = Ci, this.setSpanContext = ys;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Ei(ni, this._proxyTracerProvider, en.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return yr(ni) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Ni(ni, en.instance()), this._proxyTracerProvider = new aa();
    }, e;
  }()
), Di = Ps.getInstance(), tn = { exports: {} };
tn.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", a = 9007199254740991, o = "[object Arguments]", s = "[object Array]", l = "[object Boolean]", f = "[object Date]", h = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", w = "[object Map]", O = "[object Number]", S = "[object Object]", D = "[object Promise]", V = "[object RegExp]", z = "[object Set]", q = "[object String]", G = "[object Symbol]", g = "[object WeakMap]", A = "[object ArrayBuffer]", v = "[object DataView]", B = "[object Float32Array]", X = "[object Float64Array]", Le = "[object Int8Array]", Ee = "[object Int16Array]", Y = "[object Int32Array]", De = "[object Uint8Array]", Me = "[object Uint8ClampedArray]", d = "[object Uint16Array]", m = "[object Uint32Array]", T = /[\\^$.*+?()[\]{}|]/g, _ = /\w*$/, x = /^\[object .+?Constructor\]$/, C = /^(?:0|[1-9]\d*)$/, I = {};
  I[o] = I[s] = I[A] = I[v] = I[l] = I[f] = I[B] = I[X] = I[Le] = I[Ee] = I[Y] = I[w] = I[O] = I[S] = I[V] = I[z] = I[q] = I[G] = I[De] = I[Me] = I[d] = I[m] = !0, I[h] = I[p] = I[g] = !1;
  var ue = typeof tt == "object" && tt && tt.Object === Object && tt, Ne = typeof self == "object" && self && self.Object === Object && self, le = ue || Ne || Function("return this")(), $e = t && !t.nodeType && t, E = $e && !0 && e && !e.nodeType && e, W = E && E.exports === $e;
  function Sr(i, u) {
    return i.set(u[0], u[1]), i;
  }
  function je(i, u) {
    return i.add(u), i;
  }
  function wr(i, u) {
    for (var c = -1, y = i ? i.length : 0; ++c < y && u(i[c], c, i) !== !1; )
      ;
    return i;
  }
  function Or(i, u) {
    for (var c = -1, y = u.length, j = i.length; ++c < y; )
      i[j + c] = u[c];
    return i;
  }
  function $t(i, u, c, y) {
    var j = -1, P = i ? i.length : 0;
    for (y && P && (c = i[++j]); ++j < P; )
      c = u(c, i[j], j, i);
    return c;
  }
  function Rt(i, u) {
    for (var c = -1, y = Array(i); ++c < i; )
      y[c] = u(c);
    return y;
  }
  function Tr(i, u) {
    return i == null ? void 0 : i[u];
  }
  function Ut(i) {
    var u = !1;
    if (i != null && typeof i.toString != "function")
      try {
        u = !!(i + "");
      } catch {
      }
    return u;
  }
  function Ir(i) {
    var u = -1, c = Array(i.size);
    return i.forEach(function(y, j) {
      c[++u] = [j, y];
    }), c;
  }
  function Bt(i, u) {
    return function(c) {
      return i(u(c));
    };
  }
  function Pr(i) {
    var u = -1, c = Array(i.size);
    return i.forEach(function(y) {
      c[++u] = y;
    }), c;
  }
  var dn = Array.prototype, fn = Function.prototype, ht = Object.prototype, Gt = le["__core-js_shared__"], _r = function() {
    var i = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Ar = fn.toString, ze = ht.hasOwnProperty, mt = ht.toString, pn = RegExp(
    "^" + Ar.call(ze).replace(T, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), at = W ? le.Buffer : void 0, gt = le.Symbol, Lt = le.Uint8Array, Fe = Bt(Object.getPrototypeOf, Object), Er = Object.create, Nr = ht.propertyIsEnumerable, yn = dn.splice, zt = Object.getOwnPropertySymbols, bt = at ? at.isBuffer : void 0, jr = Bt(Object.keys, Object), vt = Ue(le, "DataView"), ot = Ue(le, "Map"), Re = Ue(le, "Promise"), St = Ue(le, "Set"), Kt = Ue(le, "WeakMap"), st = Ue(Object, "create"), Wt = me(vt), ut = me(ot), Ht = me(Re), Qt = me(St), Jt = me(Kt), nt = gt ? gt.prototype : void 0, xr = nt ? nt.valueOf : void 0;
  function Xe(i) {
    var u = -1, c = i ? i.length : 0;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function hn() {
    this.__data__ = st ? st(null) : {};
  }
  function mn(i) {
    return this.has(i) && delete this.__data__[i];
  }
  function gn(i) {
    var u = this.__data__;
    if (st) {
      var c = u[i];
      return c === n ? void 0 : c;
    }
    return ze.call(u, i) ? u[i] : void 0;
  }
  function kr(i) {
    var u = this.__data__;
    return st ? u[i] !== void 0 : ze.call(u, i);
  }
  function Xt(i, u) {
    var c = this.__data__;
    return c[i] = st && u === void 0 ? n : u, this;
  }
  Xe.prototype.clear = hn, Xe.prototype.delete = mn, Xe.prototype.get = gn, Xe.prototype.has = kr, Xe.prototype.set = Xt;
  function ae(i) {
    var u = -1, c = i ? i.length : 0;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function bn() {
    this.__data__ = [];
  }
  function vn(i) {
    var u = this.__data__, c = Ot(u, i);
    if (c < 0)
      return !1;
    var y = u.length - 1;
    return c == y ? u.pop() : yn.call(u, c, 1), !0;
  }
  function Sn(i) {
    var u = this.__data__, c = Ot(u, i);
    return c < 0 ? void 0 : u[c][1];
  }
  function wn(i) {
    return Ot(this.__data__, i) > -1;
  }
  function On(i, u) {
    var c = this.__data__, y = Ot(c, i);
    return y < 0 ? c.push([i, u]) : c[y][1] = u, this;
  }
  ae.prototype.clear = bn, ae.prototype.delete = vn, ae.prototype.get = Sn, ae.prototype.has = wn, ae.prototype.set = On;
  function ce(i) {
    var u = -1, c = i ? i.length : 0;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function Tn() {
    this.__data__ = {
      hash: new Xe(),
      map: new (ot || ae)(),
      string: new Xe()
    };
  }
  function In(i) {
    return ct(this, i).delete(i);
  }
  function Pn(i) {
    return ct(this, i).get(i);
  }
  function _n(i) {
    return ct(this, i).has(i);
  }
  function An(i, u) {
    return ct(this, i).set(i, u), this;
  }
  ce.prototype.clear = Tn, ce.prototype.delete = In, ce.prototype.get = Pn, ce.prototype.has = _n, ce.prototype.set = An;
  function ve(i) {
    this.__data__ = new ae(i);
  }
  function En() {
    this.__data__ = new ae();
  }
  function Nn(i) {
    return this.__data__.delete(i);
  }
  function jn(i) {
    return this.__data__.get(i);
  }
  function xn(i) {
    return this.__data__.has(i);
  }
  function kn(i, u) {
    var c = this.__data__;
    if (c instanceof ae) {
      var y = c.__data__;
      if (!ot || y.length < r - 1)
        return y.push([i, u]), this;
      c = this.__data__ = new ce(y);
    }
    return c.set(i, u), this;
  }
  ve.prototype.clear = En, ve.prototype.delete = Nn, ve.prototype.get = jn, ve.prototype.has = xn, ve.prototype.set = kn;
  function wt(i, u) {
    var c = tr(i) || It(i) ? Rt(i.length, String) : [], y = c.length, j = !!y;
    for (var P in i)
      (u || ze.call(i, P)) && !(j && (P == "length" || Kn(P, y))) && c.push(P);
    return c;
  }
  function Cr(i, u, c) {
    var y = i[u];
    (!(ze.call(i, u) && Mr(y, c)) || c === void 0 && !(u in i)) && (i[u] = c);
  }
  function Ot(i, u) {
    for (var c = i.length; c--; )
      if (Mr(i[c][0], u))
        return c;
    return -1;
  }
  function Ke(i, u) {
    return i && er(u, nr(u), i);
  }
  function Yt(i, u, c, y, j, P, M) {
    var $;
    if (y && ($ = P ? y(i, j, P, M) : y(i)), $ !== void 0)
      return $;
    if (!He(i))
      return i;
    var Q = tr(i);
    if (Q) {
      if ($ = Ln(i), !u)
        return Un(i, $);
    } else {
      var U = Ze(i), de = U == p || U == b;
      if ($r(i))
        return Tt(i, u);
      if (U == S || U == o || de && !P) {
        if (Ut(i))
          return P ? i : {};
        if ($ = We(de ? {} : i), !u)
          return Bn(i, Ke($, i));
      } else {
        if (!I[U])
          return P ? i : {};
        $ = zn(i, U, Yt, u);
      }
    }
    M || (M = new ve());
    var Se = M.get(i);
    if (Se)
      return Se;
    if (M.set(i, $), !Q)
      var Z = c ? Gn(i) : nr(i);
    return wr(Z || i, function(fe, oe) {
      Z && (oe = fe, fe = i[oe]), Cr($, oe, Yt(fe, u, c, y, oe, i, M));
    }), $;
  }
  function Cn(i) {
    return He(i) ? Er(i) : {};
  }
  function Dn(i, u, c) {
    var y = u(i);
    return tr(i) ? y : Or(y, c(i));
  }
  function Fn(i) {
    return mt.call(i);
  }
  function Vn(i) {
    if (!He(i) || Hn(i))
      return !1;
    var u = rr(i) || Ut(i) ? pn : x;
    return u.test(me(i));
  }
  function qn(i) {
    if (!Vr(i))
      return jr(i);
    var u = [];
    for (var c in Object(i))
      ze.call(i, c) && c != "constructor" && u.push(c);
    return u;
  }
  function Tt(i, u) {
    if (u)
      return i.slice();
    var c = new i.constructor(i.length);
    return i.copy(c), c;
  }
  function Zt(i) {
    var u = new i.constructor(i.byteLength);
    return new Lt(u).set(new Lt(i)), u;
  }
  function lt(i, u) {
    var c = u ? Zt(i.buffer) : i.buffer;
    return new i.constructor(c, i.byteOffset, i.byteLength);
  }
  function Dr(i, u, c) {
    var y = u ? c(Ir(i), !0) : Ir(i);
    return $t(y, Sr, new i.constructor());
  }
  function Fr(i) {
    var u = new i.constructor(i.source, _.exec(i));
    return u.lastIndex = i.lastIndex, u;
  }
  function Mn(i, u, c) {
    var y = u ? c(Pr(i), !0) : Pr(i);
    return $t(y, je, new i.constructor());
  }
  function $n(i) {
    return xr ? Object(xr.call(i)) : {};
  }
  function Rn(i, u) {
    var c = u ? Zt(i.buffer) : i.buffer;
    return new i.constructor(c, i.byteOffset, i.length);
  }
  function Un(i, u) {
    var c = -1, y = i.length;
    for (u || (u = Array(y)); ++c < y; )
      u[c] = i[c];
    return u;
  }
  function er(i, u, c, y) {
    c || (c = {});
    for (var j = -1, P = u.length; ++j < P; ) {
      var M = u[j], $ = y ? y(c[M], i[M], M, c, i) : void 0;
      Cr(c, M, $ === void 0 ? i[M] : $);
    }
    return c;
  }
  function Bn(i, u) {
    return er(i, Ye(i), u);
  }
  function Gn(i) {
    return Dn(i, nr, Ye);
  }
  function ct(i, u) {
    var c = i.__data__;
    return Wn(u) ? c[typeof u == "string" ? "string" : "hash"] : c.map;
  }
  function Ue(i, u) {
    var c = Tr(i, u);
    return Vn(c) ? c : void 0;
  }
  var Ye = zt ? Bt(zt, Object) : Jn, Ze = Fn;
  (vt && Ze(new vt(new ArrayBuffer(1))) != v || ot && Ze(new ot()) != w || Re && Ze(Re.resolve()) != D || St && Ze(new St()) != z || Kt && Ze(new Kt()) != g) && (Ze = function(i) {
    var u = mt.call(i), c = u == S ? i.constructor : void 0, y = c ? me(c) : void 0;
    if (y)
      switch (y) {
        case Wt:
          return v;
        case ut:
          return w;
        case Ht:
          return D;
        case Qt:
          return z;
        case Jt:
          return g;
      }
    return u;
  });
  function Ln(i) {
    var u = i.length, c = i.constructor(u);
    return u && typeof i[0] == "string" && ze.call(i, "index") && (c.index = i.index, c.input = i.input), c;
  }
  function We(i) {
    return typeof i.constructor == "function" && !Vr(i) ? Cn(Fe(i)) : {};
  }
  function zn(i, u, c, y) {
    var j = i.constructor;
    switch (u) {
      case A:
        return Zt(i);
      case l:
      case f:
        return new j(+i);
      case v:
        return lt(i, y);
      case B:
      case X:
      case Le:
      case Ee:
      case Y:
      case De:
      case Me:
      case d:
      case m:
        return Rn(i, y);
      case w:
        return Dr(i, y, c);
      case O:
      case q:
        return new j(i);
      case V:
        return Fr(i);
      case z:
        return Mn(i, y, c);
      case G:
        return $n(i);
    }
  }
  function Kn(i, u) {
    return u = u ?? a, !!u && (typeof i == "number" || C.test(i)) && i > -1 && i % 1 == 0 && i < u;
  }
  function Wn(i) {
    var u = typeof i;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? i !== "__proto__" : i === null;
  }
  function Hn(i) {
    return !!_r && _r in i;
  }
  function Vr(i) {
    var u = i && i.constructor, c = typeof u == "function" && u.prototype || ht;
    return i === c;
  }
  function me(i) {
    if (i != null) {
      try {
        return Ar.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function qr(i) {
    return Yt(i, !0, !0);
  }
  function Mr(i, u) {
    return i === u || i !== i && u !== u;
  }
  function It(i) {
    return Qn(i) && ze.call(i, "callee") && (!Nr.call(i, "callee") || mt.call(i) == o);
  }
  var tr = Array.isArray;
  function Pt(i) {
    return i != null && Rr(i.length) && !rr(i);
  }
  function Qn(i) {
    return Ur(i) && Pt(i);
  }
  var $r = bt || Xn;
  function rr(i) {
    var u = He(i) ? mt.call(i) : "";
    return u == p || u == b;
  }
  function Rr(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= a;
  }
  function He(i) {
    var u = typeof i;
    return !!i && (u == "object" || u == "function");
  }
  function Ur(i) {
    return !!i && typeof i == "object";
  }
  function nr(i) {
    return Pt(i) ? wt(i) : qn(i);
  }
  function Jn() {
    return [];
  }
  function Xn() {
    return !1;
  }
  e.exports = qr;
})(tn, tn.exports);
var _s = tn.exports;
const _t = /* @__PURE__ */ Ai(_s);
var rn = { exports: {} };
rn.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", a = 1, o = 2, s = 9007199254740991, l = "[object Arguments]", f = "[object Array]", h = "[object AsyncFunction]", p = "[object Boolean]", b = "[object Date]", w = "[object Error]", O = "[object Function]", S = "[object GeneratorFunction]", D = "[object Map]", V = "[object Number]", z = "[object Null]", q = "[object Object]", G = "[object Promise]", g = "[object Proxy]", A = "[object RegExp]", v = "[object Set]", B = "[object String]", X = "[object Symbol]", Le = "[object Undefined]", Ee = "[object WeakMap]", Y = "[object ArrayBuffer]", De = "[object DataView]", Me = "[object Float32Array]", d = "[object Float64Array]", m = "[object Int8Array]", T = "[object Int16Array]", _ = "[object Int32Array]", x = "[object Uint8Array]", C = "[object Uint8ClampedArray]", I = "[object Uint16Array]", ue = "[object Uint32Array]", Ne = /[\\^$.*+?()[\]{}|]/g, le = /^\[object .+?Constructor\]$/, $e = /^(?:0|[1-9]\d*)$/, E = {};
  E[Me] = E[d] = E[m] = E[T] = E[_] = E[x] = E[C] = E[I] = E[ue] = !0, E[l] = E[f] = E[Y] = E[p] = E[De] = E[b] = E[w] = E[O] = E[D] = E[V] = E[q] = E[A] = E[v] = E[B] = E[Ee] = !1;
  var W = typeof tt == "object" && tt && tt.Object === Object && tt, Sr = typeof self == "object" && self && self.Object === Object && self, je = W || Sr || Function("return this")(), wr = t && !t.nodeType && t, Or = wr && !0 && e && !e.nodeType && e, $t = Or && Or.exports === wr, Rt = $t && W.process, Tr = function() {
    try {
      return Rt && Rt.binding && Rt.binding("util");
    } catch {
    }
  }(), Ut = Tr && Tr.isTypedArray;
  function Ir(i, u) {
    for (var c = -1, y = i == null ? 0 : i.length, j = 0, P = []; ++c < y; ) {
      var M = i[c];
      u(M, c, i) && (P[j++] = M);
    }
    return P;
  }
  function Bt(i, u) {
    for (var c = -1, y = u.length, j = i.length; ++c < y; )
      i[j + c] = u[c];
    return i;
  }
  function Pr(i, u) {
    for (var c = -1, y = i == null ? 0 : i.length; ++c < y; )
      if (u(i[c], c, i))
        return !0;
    return !1;
  }
  function dn(i, u) {
    for (var c = -1, y = Array(i); ++c < i; )
      y[c] = u(c);
    return y;
  }
  function fn(i) {
    return function(u) {
      return i(u);
    };
  }
  function ht(i, u) {
    return i.has(u);
  }
  function Gt(i, u) {
    return i == null ? void 0 : i[u];
  }
  function _r(i) {
    var u = -1, c = Array(i.size);
    return i.forEach(function(y, j) {
      c[++u] = [j, y];
    }), c;
  }
  function Ar(i, u) {
    return function(c) {
      return i(u(c));
    };
  }
  function ze(i) {
    var u = -1, c = Array(i.size);
    return i.forEach(function(y) {
      c[++u] = y;
    }), c;
  }
  var mt = Array.prototype, pn = Function.prototype, at = Object.prototype, gt = je["__core-js_shared__"], Lt = pn.toString, Fe = at.hasOwnProperty, Er = function() {
    var i = /[^.]+$/.exec(gt && gt.keys && gt.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Nr = at.toString, yn = RegExp(
    "^" + Lt.call(Fe).replace(Ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), zt = $t ? je.Buffer : void 0, bt = je.Symbol, jr = je.Uint8Array, vt = at.propertyIsEnumerable, ot = mt.splice, Re = bt ? bt.toStringTag : void 0, St = Object.getOwnPropertySymbols, Kt = zt ? zt.isBuffer : void 0, st = Ar(Object.keys, Object), Wt = Ye(je, "DataView"), ut = Ye(je, "Map"), Ht = Ye(je, "Promise"), Qt = Ye(je, "Set"), Jt = Ye(je, "WeakMap"), nt = Ye(Object, "create"), xr = me(Wt), Xe = me(ut), hn = me(Ht), mn = me(Qt), gn = me(Jt), kr = bt ? bt.prototype : void 0, Xt = kr ? kr.valueOf : void 0;
  function ae(i) {
    var u = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function bn() {
    this.__data__ = nt ? nt(null) : {}, this.size = 0;
  }
  function vn(i) {
    var u = this.has(i) && delete this.__data__[i];
    return this.size -= u ? 1 : 0, u;
  }
  function Sn(i) {
    var u = this.__data__;
    if (nt) {
      var c = u[i];
      return c === n ? void 0 : c;
    }
    return Fe.call(u, i) ? u[i] : void 0;
  }
  function wn(i) {
    var u = this.__data__;
    return nt ? u[i] !== void 0 : Fe.call(u, i);
  }
  function On(i, u) {
    var c = this.__data__;
    return this.size += this.has(i) ? 0 : 1, c[i] = nt && u === void 0 ? n : u, this;
  }
  ae.prototype.clear = bn, ae.prototype.delete = vn, ae.prototype.get = Sn, ae.prototype.has = wn, ae.prototype.set = On;
  function ce(i) {
    var u = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function Tn() {
    this.__data__ = [], this.size = 0;
  }
  function In(i) {
    var u = this.__data__, c = Tt(u, i);
    if (c < 0)
      return !1;
    var y = u.length - 1;
    return c == y ? u.pop() : ot.call(u, c, 1), --this.size, !0;
  }
  function Pn(i) {
    var u = this.__data__, c = Tt(u, i);
    return c < 0 ? void 0 : u[c][1];
  }
  function _n(i) {
    return Tt(this.__data__, i) > -1;
  }
  function An(i, u) {
    var c = this.__data__, y = Tt(c, i);
    return y < 0 ? (++this.size, c.push([i, u])) : c[y][1] = u, this;
  }
  ce.prototype.clear = Tn, ce.prototype.delete = In, ce.prototype.get = Pn, ce.prototype.has = _n, ce.prototype.set = An;
  function ve(i) {
    var u = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++u < c; ) {
      var y = i[u];
      this.set(y[0], y[1]);
    }
  }
  function En() {
    this.size = 0, this.__data__ = {
      hash: new ae(),
      map: new (ut || ce)(),
      string: new ae()
    };
  }
  function Nn(i) {
    var u = Ue(this, i).delete(i);
    return this.size -= u ? 1 : 0, u;
  }
  function jn(i) {
    return Ue(this, i).get(i);
  }
  function xn(i) {
    return Ue(this, i).has(i);
  }
  function kn(i, u) {
    var c = Ue(this, i), y = c.size;
    return c.set(i, u), this.size += c.size == y ? 0 : 1, this;
  }
  ve.prototype.clear = En, ve.prototype.delete = Nn, ve.prototype.get = jn, ve.prototype.has = xn, ve.prototype.set = kn;
  function wt(i) {
    var u = -1, c = i == null ? 0 : i.length;
    for (this.__data__ = new ve(); ++u < c; )
      this.add(i[u]);
  }
  function Cr(i) {
    return this.__data__.set(i, n), this;
  }
  function Ot(i) {
    return this.__data__.has(i);
  }
  wt.prototype.add = wt.prototype.push = Cr, wt.prototype.has = Ot;
  function Ke(i) {
    var u = this.__data__ = new ce(i);
    this.size = u.size;
  }
  function Yt() {
    this.__data__ = new ce(), this.size = 0;
  }
  function Cn(i) {
    var u = this.__data__, c = u.delete(i);
    return this.size = u.size, c;
  }
  function Dn(i) {
    return this.__data__.get(i);
  }
  function Fn(i) {
    return this.__data__.has(i);
  }
  function Vn(i, u) {
    var c = this.__data__;
    if (c instanceof ce) {
      var y = c.__data__;
      if (!ut || y.length < r - 1)
        return y.push([i, u]), this.size = ++c.size, this;
      c = this.__data__ = new ve(y);
    }
    return c.set(i, u), this.size = c.size, this;
  }
  Ke.prototype.clear = Yt, Ke.prototype.delete = Cn, Ke.prototype.get = Dn, Ke.prototype.has = Fn, Ke.prototype.set = Vn;
  function qn(i, u) {
    var c = It(i), y = !c && Mr(i), j = !c && !y && Pt(i), P = !c && !y && !j && Ur(i), M = c || y || j || P, $ = M ? dn(i.length, String) : [], Q = $.length;
    for (var U in i)
      (u || Fe.call(i, U)) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
      (U == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      j && (U == "offset" || U == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      P && (U == "buffer" || U == "byteLength" || U == "byteOffset") || // Skip index properties.
      zn(U, Q))) && $.push(U);
    return $;
  }
  function Tt(i, u) {
    for (var c = i.length; c--; )
      if (qr(i[c][0], u))
        return c;
    return -1;
  }
  function Zt(i, u, c) {
    var y = u(i);
    return It(i) ? y : Bt(y, c(i));
  }
  function lt(i) {
    return i == null ? i === void 0 ? Le : z : Re && Re in Object(i) ? Ze(i) : Vr(i);
  }
  function Dr(i) {
    return He(i) && lt(i) == l;
  }
  function Fr(i, u, c, y, j) {
    return i === u ? !0 : i == null || u == null || !He(i) && !He(u) ? i !== i && u !== u : Mn(i, u, c, y, Fr, j);
  }
  function Mn(i, u, c, y, j, P) {
    var M = It(i), $ = It(u), Q = M ? f : We(i), U = $ ? f : We(u);
    Q = Q == l ? q : Q, U = U == l ? q : U;
    var de = Q == q, Se = U == q, Z = Q == U;
    if (Z && Pt(i)) {
      if (!Pt(u))
        return !1;
      M = !0, de = !1;
    }
    if (Z && !de)
      return P || (P = new Ke()), M || Ur(i) ? er(i, u, c, y, j, P) : Bn(i, u, Q, c, y, j, P);
    if (!(c & a)) {
      var fe = de && Fe.call(i, "__wrapped__"), oe = Se && Fe.call(u, "__wrapped__");
      if (fe || oe) {
        var it = fe ? i.value() : i, et = oe ? u.value() : u;
        return P || (P = new Ke()), j(it, et, c, y, P);
      }
    }
    return Z ? (P || (P = new Ke()), Gn(i, u, c, y, j, P)) : !1;
  }
  function $n(i) {
    if (!Rr(i) || Wn(i))
      return !1;
    var u = $r(i) ? yn : le;
    return u.test(me(i));
  }
  function Rn(i) {
    return He(i) && rr(i.length) && !!E[lt(i)];
  }
  function Un(i) {
    if (!Hn(i))
      return st(i);
    var u = [];
    for (var c in Object(i))
      Fe.call(i, c) && c != "constructor" && u.push(c);
    return u;
  }
  function er(i, u, c, y, j, P) {
    var M = c & a, $ = i.length, Q = u.length;
    if ($ != Q && !(M && Q > $))
      return !1;
    var U = P.get(i);
    if (U && P.get(u))
      return U == u;
    var de = -1, Se = !0, Z = c & o ? new wt() : void 0;
    for (P.set(i, u), P.set(u, i); ++de < $; ) {
      var fe = i[de], oe = u[de];
      if (y)
        var it = M ? y(oe, fe, de, u, i, P) : y(fe, oe, de, i, u, P);
      if (it !== void 0) {
        if (it)
          continue;
        Se = !1;
        break;
      }
      if (Z) {
        if (!Pr(u, function(et, dt) {
          if (!ht(Z, dt) && (fe === et || j(fe, et, c, y, P)))
            return Z.push(dt);
        })) {
          Se = !1;
          break;
        }
      } else if (!(fe === oe || j(fe, oe, c, y, P))) {
        Se = !1;
        break;
      }
    }
    return P.delete(i), P.delete(u), Se;
  }
  function Bn(i, u, c, y, j, P, M) {
    switch (c) {
      case De:
        if (i.byteLength != u.byteLength || i.byteOffset != u.byteOffset)
          return !1;
        i = i.buffer, u = u.buffer;
      case Y:
        return !(i.byteLength != u.byteLength || !P(new jr(i), new jr(u)));
      case p:
      case b:
      case V:
        return qr(+i, +u);
      case w:
        return i.name == u.name && i.message == u.message;
      case A:
      case B:
        return i == u + "";
      case D:
        var $ = _r;
      case v:
        var Q = y & a;
        if ($ || ($ = ze), i.size != u.size && !Q)
          return !1;
        var U = M.get(i);
        if (U)
          return U == u;
        y |= o, M.set(i, u);
        var de = er($(i), $(u), y, j, P, M);
        return M.delete(i), de;
      case X:
        if (Xt)
          return Xt.call(i) == Xt.call(u);
    }
    return !1;
  }
  function Gn(i, u, c, y, j, P) {
    var M = c & a, $ = ct(i), Q = $.length, U = ct(u), de = U.length;
    if (Q != de && !M)
      return !1;
    for (var Se = Q; Se--; ) {
      var Z = $[Se];
      if (!(M ? Z in u : Fe.call(u, Z)))
        return !1;
    }
    var fe = P.get(i);
    if (fe && P.get(u))
      return fe == u;
    var oe = !0;
    P.set(i, u), P.set(u, i);
    for (var it = M; ++Se < Q; ) {
      Z = $[Se];
      var et = i[Z], dt = u[Z];
      if (y)
        var Ri = M ? y(dt, et, Z, u, i, P) : y(et, dt, Z, i, u, P);
      if (!(Ri === void 0 ? et === dt || j(et, dt, c, y, P) : Ri)) {
        oe = !1;
        break;
      }
      it || (it = Z == "constructor");
    }
    if (oe && !it) {
      var Br = i.constructor, Gr = u.constructor;
      Br != Gr && "constructor" in i && "constructor" in u && !(typeof Br == "function" && Br instanceof Br && typeof Gr == "function" && Gr instanceof Gr) && (oe = !1);
    }
    return P.delete(i), P.delete(u), oe;
  }
  function ct(i) {
    return Zt(i, nr, Ln);
  }
  function Ue(i, u) {
    var c = i.__data__;
    return Kn(u) ? c[typeof u == "string" ? "string" : "hash"] : c.map;
  }
  function Ye(i, u) {
    var c = Gt(i, u);
    return $n(c) ? c : void 0;
  }
  function Ze(i) {
    var u = Fe.call(i, Re), c = i[Re];
    try {
      i[Re] = void 0;
      var y = !0;
    } catch {
    }
    var j = Nr.call(i);
    return y && (u ? i[Re] = c : delete i[Re]), j;
  }
  var Ln = St ? function(i) {
    return i == null ? [] : (i = Object(i), Ir(St(i), function(u) {
      return vt.call(i, u);
    }));
  } : Jn, We = lt;
  (Wt && We(new Wt(new ArrayBuffer(1))) != De || ut && We(new ut()) != D || Ht && We(Ht.resolve()) != G || Qt && We(new Qt()) != v || Jt && We(new Jt()) != Ee) && (We = function(i) {
    var u = lt(i), c = u == q ? i.constructor : void 0, y = c ? me(c) : "";
    if (y)
      switch (y) {
        case xr:
          return De;
        case Xe:
          return D;
        case hn:
          return G;
        case mn:
          return v;
        case gn:
          return Ee;
      }
    return u;
  });
  function zn(i, u) {
    return u = u ?? s, !!u && (typeof i == "number" || $e.test(i)) && i > -1 && i % 1 == 0 && i < u;
  }
  function Kn(i) {
    var u = typeof i;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? i !== "__proto__" : i === null;
  }
  function Wn(i) {
    return !!Er && Er in i;
  }
  function Hn(i) {
    var u = i && i.constructor, c = typeof u == "function" && u.prototype || at;
    return i === c;
  }
  function Vr(i) {
    return Nr.call(i);
  }
  function me(i) {
    if (i != null) {
      try {
        return Lt.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function qr(i, u) {
    return i === u || i !== i && u !== u;
  }
  var Mr = Dr(function() {
    return arguments;
  }()) ? Dr : function(i) {
    return He(i) && Fe.call(i, "callee") && !vt.call(i, "callee");
  }, It = Array.isArray;
  function tr(i) {
    return i != null && rr(i.length) && !$r(i);
  }
  var Pt = Kt || Xn;
  function Qn(i, u) {
    return Fr(i, u);
  }
  function $r(i) {
    if (!Rr(i))
      return !1;
    var u = lt(i);
    return u == O || u == S || u == h || u == g;
  }
  function rr(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= s;
  }
  function Rr(i) {
    var u = typeof i;
    return i != null && (u == "object" || u == "function");
  }
  function He(i) {
    return i != null && typeof i == "object";
  }
  var Ur = Ut ? fn(Ut) : Rn;
  function nr(i) {
    return tr(i) ? qn(i) : Un(i);
  }
  function Jn() {
    return [];
  }
  function Xn() {
    return !1;
  }
  e.exports = Qn;
})(rn, rn.exports);
var As = rn.exports;
const Kr = /* @__PURE__ */ Ai(As);
var ge;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(ge || (ge = {}));
class Es {
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
    }), this.__gadget.instantiatedFields = _t(t), this.__gadget.persistedFields = _t(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((n) => this.__gadget.fieldKeysTracker[n] = !0));
    const r = {
      get: (n, a) => {
        if (a in this)
          return this[a];
        if (a in n)
          return n[a];
      },
      set: (n, a, o) => (this.trackKey(a), n[a.toString()] = o, !0)
    };
    return new Proxy(this.__gadget.fields, r);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this.__gadget.fieldKeysTracker[r] || (this.__gadget.fieldKeysTracker[r] = !0, this.__gadget.fieldKeys.push(r));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = ge.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((n) => !Kr(r[n], this.__gadget.fields[n]));
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
  changes(t, r = ge.SinceLoaded) {
    const a = (typeof t == "string" ? r : t || r) == ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const o = a[t], s = this.__gadget.fields[t], l = !Kr(s, o);
      return l ? { changed: l, current: s, previous: o } : { changed: l };
    } else {
      const o = {};
      for (let s = 0; s < this.__gadget.fieldKeys.length; s++) {
        const l = this.__gadget.fieldKeys[s];
        Kr(a[l], this.__gadget.fields[l]) || (o[l] = { current: this.__gadget.fields[l], previous: a[l] });
      }
      return o;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = ge.SinceLoaded) {
    const r = t == ge.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, n = {};
    for (let a = 0; a < this.__gadget.fieldKeys.length; a++) {
      const o = this.__gadget.fieldKeys[a];
      Kr(r[o], this.__gadget.fields[o]) || (n[o] = this.__gadget.fields[o]);
    }
    return n;
  }
  changed(t, r = ge.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = ge.SinceLoaded) {
    t == ge.SinceLoaded ? this.__gadget.instantiatedFields = _t(this.__gadget.fields) : t == ge.SinceLastPersisted && (this.__gadget.persistedFields = _t(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = ge.SinceLoaded) {
    let r;
    t == ge.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const n of this.__gadget.fieldKeys)
      r.includes(n) || delete this.__gadget.fields[n];
    t == ge.SinceLoaded ? Object.assign(this.__gadget.fields, _t(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, _t(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return wi({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const ka = Es;
class Ns extends Error {
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
class vi extends Error {
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
class un extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class oa extends Error {
  constructor(t) {
    let r;
    Si(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class js extends Error {
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
class xs extends Error {
  constructor(t, r, n, a) {
    const o = r.slice(0, 3), s = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${o.map(({ apiIdentifier: l, message: f }) => `${l} ${f}`).join(", ")}${s}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = r, this.modelApiIdentifier = n, this.record = a;
  }
}
class Ca extends Error {
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
class ks extends Error {
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
function sa(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const nn = (e, t) => {
  const r = t.length;
  let n = 0;
  for (; e != null && n < r; )
    e = e[t[n++]];
  return n && n == r ? e : void 0;
}, Si = (e) => (e == null ? void 0 : e.type) == "close", Je = (e, t) => typeof e != "string" ? "" : ln(e, t), ua = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ln = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (n) => ua(n)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, a, o, s, l) => (a || (a = ""), "" + a + ua(o))), r;
}, Cs = (e) => `${ln(e)}Sort`, Ds = (e) => `${ln(e)}Filter`, Fs = (e, t, r) => new Ca(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), rt = (e, t, r = !1) => {
  var n;
  if (e.error)
    throw e.error instanceof br && (!((n = e.error.networkError) === null || n === void 0) && n.length) && (e.error.message = e.error.networkError.map((l) => "[Network] " + l.message).join(`
`)), e.error;
  const a = nn(e.data, t), o = nn(a, ["edges"]), s = o ?? a;
  if (a === void 0)
    throw new Ns(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (a === null || r && Array.isArray(s) && s.length === 0)
    throw new ks(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return a;
}, lr = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof br && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((a) => "[Network] " + a.message).join(`
`)), e.error;
  const n = nn(e.data, t);
  return n ?? null;
}, Vs = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new xs(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Ca(e.message) : new un(e.message, e.code);
}, pt = (e, t) => {
  const r = rt(e, t);
  if (!r.success) {
    const n = r.errors && r.errors[0];
    throw n ? Vs(n) : new un("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return r;
}, Da = (e) => {
  var t, r, n, a;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Ba((a = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || a === void 0 ? void 0 : a.hydrations);
}, cr = (e, t) => {
  const r = Da(e);
  return r && (t = r.apply(t)), new ka(t);
}, Fi = (e, t) => {
  const r = Da(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((n) => new ka(n));
}, an = (e, t) => {
  const r = t.edges.map((n) => n.node);
  return Fi(e, r);
}, wi = (e) => {
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
          t[r] = n === void 0 ? null : wi(n);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const n = wi(e[r]);
          n !== void 0 && (t[r] = n);
        }
        return t;
      }
    }
  }
}, qs = Di.getTracer("gadget-api-client"), Ms = (e) => typeof e == "string" ? e : e && (e != null && e.message) ? e.message : String(e), la = (e, t, r) => async function(...n) {
  const a = qs.startSpan(e, r, Hr.active());
  return await Hr.with(Di.setSpan(Hr.active(), a), async () => {
    try {
      const o = await t.call(this, ...n);
      return a.end(), o;
    } catch (o) {
      throw a.setStatus({ code: bi.ERROR, message: Ms(o) }), a.end(), o;
    }
  });
}, $s = () => Di.getSpan(Hr.active()), ii = "gstk", ca = (e) => {
  try {
    const t = window[e];
    return t.setItem(ii, ii), t.removeItem(ii), !0;
  } catch {
    return !1;
  }
};
class Fa extends Error {
}
class Rs {
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
    throw rt(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Fa("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    rt(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    rt(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Us {
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
const Bs = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
}, Gs = ({ forward: e }) => (t) => mo(t, gr((r) => {
  if (r.context.url && r.query && !r.context.url.includes("?")) {
    const n = Bs(r.query) || "unknown";
    r.context = {
      ...r.context,
      url: r.context.url + `?operation=${n}`
    };
  }
}), e), Ls = 2, zs = 4800, Ks = 1e4, Ws = [be.ConnectionAcknowledgementTimeout, be.ConnectionInitialisationTimeout], da = Symbol.for("gadget/connection"), Hs = "token", Qs = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var ee;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(ee || (ee = {}));
class Js {
  constructor(t) {
    var r, n, a, o, s;
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
      value: ee.Anonymous
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
      value: la("api-client.transaction", async (l, f) => {
        var h;
        let p, b;
        if (f ? (p = f, b = l) : (p = l, b = {}), this.currentTransaction)
          return await p(this.currentTransaction);
        (h = $s()) === null || h === void 0 || h.setAttributes({ applicationId: this.options.applicationId, environmentName: this.environment });
        let w = null, O;
        try {
          w = await this.waitForOpenedConnection({
            isFatalConnectionProblem(V) {
              return console.warn("Transport error encountered during transaction processing", V), !0;
            },
            connectionAckWaitTimeout: zs,
            ...b,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const S = new ra({
            url: "/-",
            requestPolicy: "network-only",
            exchanges: [
              ta({
                forwardSubscription(V) {
                  const z = { ...V, query: V.query || "" };
                  return {
                    subscribe: (q) => ({
                      unsubscribe: w.subscribe(z, q)
                    })
                  };
                },
                enableAllOperations: !0
              })
            ]
          });
          S[da] = this, O = new Rs(S, w), this.currentTransaction = O, await O.start();
          const D = await p(O);
          return await O.commit(), D;
        } catch (S) {
          try {
            O != null && O.open && await O.rollback();
          } catch (D) {
            D instanceof Fa || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", D);
          }
          throw Si(S) ? new oa(S) : S;
        } finally {
          await (w == null ? void 0 : w.dispose()), this.currentTransaction = null;
        }
      })
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: la("api-client.fetch", async (l, f = {}) => {
        l = Xs(l, this.options.endpoint), this.isGadgetRequest(l) && (f.headers = { ...this.requestHeaders(), ...f.headers }, this.authenticationMode == ee.Custom && await this.options.authenticationMode.custom.processFetch(l, f));
        const h = await this._fetchImplementation(l, f);
        if (this.authenticationMode == ee.BrowserSession) {
          const p = h.headers.get("x-set-authorization"), b = p != null && p.startsWith("Session ") ? p.replace("Session ", "") : null;
          b && this.sessionTokenStore.setItem(this.sessionStorageKey, b);
        }
        return h;
      })
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof window < "u" && window.fetch ? this._fetchImplementation = window.fetch.bind(window) : this._fetchImplementation = qo, this.websocketImplementation = (n = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && n !== void 0 ? n : Lo, this.websocketsEndpoint = (a = t.websocketsEndpoint) !== null && a !== void 0 ? a : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (o = t.environment) !== null && o !== void 0 ? o : "Development", this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network", this.setAuthenticationMode(t.authenticationMode), this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 }), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Hs}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = ee.InternalAuthToken : t.apiKey ? this.authenticationMode = ee.APIKey : t.custom && (this.authenticationMode = ee.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = ee.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = ee.BrowserSession;
    const r = !t || typeof t == "boolean" ? or.Durable : t.storageType;
    let n;
    r == or.Durable && ca("localStorage") ? n = window.localStorage : r == or.Session && ca("sessionStorage") ? n = window.sessionStorage : n = new Us(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = n, this.resetClients();
  }
  close() {
    this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Oi(this.options.endpoint))
      return !!Oi(r);
    const n = new URL(this.options.endpoint).host;
    return r.includes(n);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [Gs];
    typeof window < "u" && t.push(ko), t.push(Co, ta({
      forwardSubscription: (n) => ({
        subscribe: (a) => {
          const o = { ...n, query: n.query || "" };
          return {
            unsubscribe: this.baseSubscriptionClient.subscribe(o, a)
          };
        }
      })
    }));
    const r = new ra({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[da] = this, r;
  }
  newSubscriptionClient(t) {
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const n = new URLSearchParams();
      for (const [a, o] of Object.entries(t.urlParams))
        o && n.set(a, o);
      r += "?" + n.toString();
    }
    return Uo({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var n, a;
        const o = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == ee.APIKey ? o.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == ee.InternalAuthToken ? o.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == ee.BrowserSession ? o.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == ee.Custom && await ((a = (n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.custom) === null || a === void 0 ? void 0 : a.processTransactionConnectionParams(o)), o;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (n, a) => {
          var o, s, l, f, h, p;
          if (this.authenticationMode == ee.BrowserSession && (a != null && a.sessionToken)) {
            const b = (o = this.options.authenticationMode) === null || o === void 0 ? void 0 : o.browserSession;
            (b !== null && typeof b == "object" ? b.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, a.sessionToken);
          }
          (f = (l = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || l === void 0 ? void 0 : l.connected) === null || f === void 0 || f.call(l, n, a), (p = (h = t == null ? void 0 : t.on) === null || h === void 0 ? void 0 : h.connected) === null || p === void 0 || p.call(h, n, a);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == ee.InternalAuthToken)
      r.authorization = "Basic " + Qs("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == ee.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == ee.BrowserSession) {
      const n = this.sessionTokenStore.getItem(this.sessionStorageKey);
      n && (r.authorization = `Session ${n}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), n = [], a = t.connectionAttempts || Ls;
    const o = t.connectionGlobalTimeoutMs || Ks, s = () => {
      n.forEach((l) => l()), n = [];
    };
    return await new Promise((l, f) => {
      const h = setTimeout(() => {
        this.disposeClient(r), b(new js("Timeout opening websocket connection to Gadget API"));
      }, o), p = (S) => {
        if (Si(S) && Ws.includes(S.code) && a > 0) {
          a -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), O();
          return;
        }
        clearTimeout(h), f(new oa(S));
      }, b = (S) => {
        clearTimeout(h), f(S);
      }, w = () => {
        clearTimeout(h), l(r);
      }, O = () => {
        s(), n.push(r.on("connected", w)), n.push(r.on("closed", p)), n.push(r.on("error", b));
      };
      O();
    }).finally(s);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
}
function Xs(e, t) {
  if (typeof e != "string")
    return e;
  if (Oi(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Oi(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
class hr extends Array {
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
    const a = new hr();
    return a.push(...r), a.modelManager = t, a.pagination = n, Object.freeze(a), a;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new un("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new vi("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: r, last: n, before: a, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      after: this.pagination.pageInfo.endCursor,
      first: r || n
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new vi("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: n, after: a, ...o } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...o,
      before: this.pagination.pageInfo.startCursor,
      last: n || r
    });
  }
}
const Ys = (e, t) => e.split(`
`).map((r) => " ".repeat(t) + r).join(`
`), Ti = (e, t = !1) => {
  const r = Object.entries(e).map(([n, a]) => {
    if (typeof a == "boolean")
      return a ? n : !1;
    if (a instanceof qi) {
      let o = "", s = Object.entries(a.args).filter(([h, p]) => p != null);
      t && (s = s.filter(([h, p]) => p instanceof on ? p.present() : !0));
      const l = s.map(([h, p]) => {
        var b;
        return `${h}: ${p instanceof on ? `$${(b = p.name) !== null && b !== void 0 ? b : h}` : JSON.stringify(p)}`;
      });
      l.length > 0 && (o = `(${l.join(", ")})`);
      const f = a.subselection ? `{ 
${Ti(a.subselection, t)} 
}` : "";
      return `${n}${o} ${f}`;
    } else
      return `${n} {
${Ti(a, t)}
}`;
  }).filter((n) => !!n).join(`
`);
  return Ys(r, 2);
}, Vi = (e, t = !1) => {
  const r = {};
  if (Object.entries(e).forEach(([n, a]) => {
    a instanceof qi ? Object.entries(a.args).forEach(([o, s]) => {
      var l;
      s instanceof on && (r[(l = s.name) !== null && l !== void 0 ? l : o] = s);
    }) : typeof a == "object" && a !== null && Object.assign(r, Vi(a));
  }), t)
    for (const [n, a] of Object.entries(r))
      a.value == null && delete r[n];
  return r;
}, Zs = (e, t = !1) => {
  const r = Vi(e.fields, t);
  return Object.keys(r).length === 0 ? "" : `(${Object.entries(r).map(([a, o]) => `$${a}: ${o.type}${o.required ? "!" : ""}`).join(", ")})`;
};
class qi {
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
class on {
  constructor(t, r = !1, n, a) {
    Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "required", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }), Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: a
    });
  }
  present() {
    return this.value != null;
  }
}
const Vt = (e, t) => new qi(e, t), ie = (e) => new on(e.type, e.required, e.name, e.value), eu = (e, t = !1) => {
  var r;
  const n = Zs(e, t), a = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(r = e.name) !== null && r !== void 0 ? r : ""}${n}${a} {
${Ti(e.fields, t)}
}`;
}, qt = (e) => {
  const t = Vi(e.fields, !0);
  return {
    query: eu(e, !0),
    variables: Object.entries(t ?? {}).reduce((r, [n, a]) => (r[n] = a.value, r), {})
  };
}, vr = `
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
`, Mt = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, tu = (e) => `
    query InternalFind${Je(e)}($id: GadgetID!, $select: [String!]) {
      ${Mt(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, Va = (e, t) => ({
  search: t != null && t.search ? ie({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? ie({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? ie({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? ie({ value: qa(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), ru = (e, t) => {
  const r = Je(e), n = Va(r, t);
  return qt({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: Vt({
          ...n,
          first: ie({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, nu = (e, t) => {
  const r = Je(e), n = Va(r, t);
  return qt({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: Vt({
          ...n,
          after: ie({ value: t == null ? void 0 : t.after, type: "String" }),
          before: ie({ value: t == null ? void 0 : t.before, type: "String" }),
          first: ie({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: ie({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, iu = (e) => {
  const t = Je(e);
  return `
    ${vr}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Mt(e)}
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
}, au = (e, t) => {
  const r = Je(e), n = Je(t);
  return `
    ${vr}

    mutation InternalBulkCreate${n}($records: [Internal${r}Input]!) {
      ${Mt(e)}
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
}, ou = (e) => {
  const t = Je(e);
  return `
    ${vr}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Mt(e)}
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
}, su = (e) => {
  const t = Je(e);
  return `
    ${vr}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Mt(e)}
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
}, uu = (e) => {
  const t = Je(e);
  return `
    ${vr}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Mt(e)}
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
class Be {
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
    }), this.capitalizedApiIdentifier = ln(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let n = t;
    if (!this.validateRecord(t))
      throw new un(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const a = await this.connection.currentClient.query(tu(this.apiIdentifier), { id: t, select: qa(r == null ? void 0 : r.select) }).toPromise(), s = (n ? rt : lr)(a, ["internal", this.apiIdentifier]);
    return cr(a, s);
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
    const r = nu(this.apiIdentifier, t), n = await this.connection.currentClient.query(r.query, r.variables).toPromise(), a = lr(n, ["internal", `list${this.capitalizedApiIdentifier}`]), o = an(n, a);
    return hr.boot(this, o, { options: t, pageInfo: a.pageInfo });
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
    const n = ru(this.apiIdentifier, t), a = await this.connection.currentClient.query(n.query, n.variables).toPromise();
    let o;
    r === !1 ? o = lr(a, ["internal", `list${this.capitalizedApiIdentifier}`]) : o = rt(a, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const s = an(a, o);
    return hr.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
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
    return await this.transaction(async (r) => {
      const n = await r.client.mutation(iu(this.apiIdentifier), {
        record: this.getRecordFromData(t, "create")
      }).toPromise(), a = pt(n, ["internal", `create${this.capitalizedApiIdentifier}`]);
      return cr(n, a[this.apiIdentifier]);
    });
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
    return await this.transaction(async (r) => {
      var n;
      if (!(!((n = this.options) === null || n === void 0) && n.pluralApiIdentifier))
        throw new vi("Cannot perform bulkCreate without a pluralApiIdentifier");
      const a = Je(this.options.pluralApiIdentifier), o = await r.client.mutation(au(this.apiIdentifier, this.options.pluralApiIdentifier), {
        records: t
      }).toPromise(), s = pt(o, ["internal", `bulkCreate${a}`]);
      return Fi(o, s[this.options.pluralApiIdentifier]);
    });
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
    return sa(t, "Can't update a record without an ID passed"), await this.transaction(async (n) => {
      const a = await n.client.mutation(ou(this.apiIdentifier), {
        id: t,
        record: this.getRecordFromData(r, "update")
      }).toPromise(), o = pt(a, ["internal", `update${this.capitalizedApiIdentifier}`]);
      return cr(a, o[this.apiIdentifier]);
    });
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
    return sa(t, "Can't delete a record without an ID"), await this.transaction(async (r) => {
      const n = await r.client.mutation(su(this.apiIdentifier), { id: t }).toPromise();
      pt(n, ["internal", `delete${this.capitalizedApiIdentifier}`]);
    });
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
    return await this.transaction(async (r) => {
      const n = await r.client.mutation(uu(this.apiIdentifier), t).toPromise();
      pt(n, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
    });
  }
  /** @private */
  async transaction(t) {
    return await this.connection.transaction(t);
  }
}
function qa(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, n] of Object.entries(e))
    n && t.push(r);
  return t;
}
const Mi = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), $i = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, lu = (e, t, r, n, a) => {
  const o = {};
  return typeof t < "u" && (o.id = ie({ type: "GadgetID", required: !0, value: t })), qt({
    type: "query",
    name: e,
    fields: {
      [e]: Vt(o, $i((a == null ? void 0 : a.select) || r, !0)),
      ...Mi(n)
    }
  });
}, cu = (e, t, r, n, a, o) => Ma(e, n, a, {
  select: o == null ? void 0 : o.select,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), Ma = (e, t, r, n) => qt({
  type: "query",
  name: e,
  fields: {
    [e]: Vt({
      after: ie({ value: n == null ? void 0 : n.after, type: "String" }),
      first: ie({ value: n == null ? void 0 : n.first, type: "Int" }),
      before: ie({ value: n == null ? void 0 : n.before, type: "String" }),
      last: ie({ value: n == null ? void 0 : n.last, type: "Int" }),
      sort: n != null && n.sort ? ie({ value: n.sort, type: `[${Cs(r)}!]` }) : void 0,
      filter: n != null && n.filter ? ie({ value: n.filter, type: `[${Ds(r)}!]` }) : void 0,
      search: n != null && n.search ? ie({ value: n.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: $i((n == null ? void 0 : n.select) || t, !0)
      }
    }),
    ...Mi(r)
  }
}), $a = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, Ra = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, ie(r)])), du = (e, t, r, n, a, o, s) => {
  const l = (o == null ? void 0 : o.select) || t;
  let f = {
    [e]: Vt(Ra(a), {
      success: !0,
      errors: $a,
      [n]: l ? $i(l, !0) : !1
    })
  };
  s && (f = {
    [s]: f
  });
  const h = {
    type: "mutation",
    name: e,
    fields: {
      ...f,
      ...Mi(r)
    }
  };
  return qt(h);
}, fu = (e, t, r) => {
  let n = {
    [e]: Vt(Ra(t), {
      success: !0,
      errors: $a,
      result: !0
    })
  };
  return r && (n = {
    [r]: n
  }), qt({
    type: "mutation",
    name: e,
    fields: n
  });
}, K = async (e, t, r, n, a, o, s = !0) => {
  const l = lu(t, r, n, a, o), f = await e.connection.currentClient.query(l.query, l.variables).toPromise(), p = (s ? rt : lr)(f, [t]);
  return cr(f, p);
}, cn = async (e, t, r, n, a, o, s) => {
  const l = cu(t, r, n, a, o, s), f = await e.connection.currentClient.query(l.query, l.variables).toPromise(), h = rt(f, [t]), p = an(f, h);
  if (p.length > 1)
    throw Fs(o, r, n);
  return p[0];
}, R = async (e, t, r, n, a, o) => {
  const s = Ma(t, r, n, a), l = await e.connection.currentClient.query(s.query, s.variables).toPromise();
  let f;
  o === !1 ? f = lr(l, [t]) : f = rt(l, [t], o);
  const h = an(l, f);
  return hr.boot(e, h, { options: a, pageInfo: f.pageInfo });
}, N = async (e, t, r, n, a, o, s, l, f) => {
  const h = du(t, r, n, a, s, l, f), p = await e.connection.currentClient.mutation(h.query, h.variables).toPromise(), b = f ? [f, t] : [t], w = o ? nn(p.data, b) : pt(p, b);
  if (r != null)
    return o ? Fi(p, w[a]) : cr(p, w[a]);
}, pu = async (e, t, r, n) => {
  const a = fu(t, r, n), o = await e.currentClient.mutation(a.query, a.variables).toPromise();
  return pt(o, n ? [n, t] : [t]).result;
}, te = {
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
async function yu(e, t) {
  return await N(
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
async function hu(e, t, r) {
  let n;
  const a = [], o = "user";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateUser",
    te,
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
    r,
    null
  );
}
async function mu(e, t) {
  let r;
  const n = [], a = "user";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createUser",
    te,
    "user",
    "user",
    !1,
    {
      user: {
        value: r.user,
        required: !1,
        type: "CreateUserInput"
      }
    },
    t,
    null
  );
}
async function gu(e, t) {
  let r;
  const n = [], a = "user";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "signUpUser",
    te,
    "user",
    "user",
    !1,
    {
      user: {
        value: r.user,
        required: !1,
        type: "SignUpUserInput"
      }
    },
    t,
    null
  );
}
class bu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "user",
        r,
        te,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "user",
          r,
          te,
          "user",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "users",
        te,
        "user",
        r
      ),
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "users",
        te,
        "user",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "users",
          te,
          "user",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findByEmail = Object.assign(
      async (r, n) => await cn(
        this,
        "users",
        "email",
        r,
        te,
        "user",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      yu,
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
      async (r, n) => await N(
        this,
        "bulkDeleteUsers",
        null,
        "user",
        "users",
        !0,
        {
          ids: {
            value: r,
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
      hu,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
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
      mu,
      {
        type: "action",
        operationName: "createUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: te,
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
      gu,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: !1,
        defaultSelection: te,
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
const Oe = {
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
async function vu(e) {
  return await N(
    this,
    "logOut",
    Oe,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function Su(e, t) {
  const r = e;
  return await N(
    this,
    "logInViaEmail",
    Oe,
    "session",
    "session",
    !1,
    {
      email: {
        value: r.email,
        required: !1,
        type: "String"
      },
      password: {
        value: r.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class wu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "session",
        r,
        Oe,
        "session",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "session",
          r,
          Oe,
          "session",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: "session",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "sessions",
        Oe,
        "session",
        r
      ),
      {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "sessions",
        Oe,
        "session",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "sessions",
          Oe,
          "session",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessions",
        modelApiIdentifier: "session",
        defaultSelection: Oe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      vu,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Oe,
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
      Su,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: Oe,
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
const Te = {
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
async function Ou(e, t) {
  return await N(
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
async function Tu(e, t) {
  let r;
  const n = [], a = "shopifyProduct";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createShopifyProduct",
    Te,
    "shopifyProduct",
    "shopifyProduct",
    !1,
    {
      shopifyProduct: {
        value: r.shopifyProduct,
        required: !1,
        type: "CreateShopifyProductInput"
      }
    },
    t,
    null
  );
}
async function Iu(e, t, r) {
  let n;
  const a = [], o = "shopifyProduct";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateShopifyProduct",
    Te,
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
    r,
    null
  );
}
class Pu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProduct",
        r,
        Te,
        "shopifyProduct",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifyProduct",
          r,
          Te,
          "shopifyProduct",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProduct",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifyProducts",
        Te,
        "shopifyProduct",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifyProducts",
        Te,
        "shopifyProduct",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifyProducts",
          Te,
          "shopifyProduct",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProducts",
        modelApiIdentifier: "shopifyProduct",
        defaultSelection: Te,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Ou,
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
      async (r, n) => await N(
        this,
        "bulkDeleteShopifyProducts",
        null,
        "shopifyProduct",
        "shopifyProducts",
        !0,
        {
          ids: {
            value: r,
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
      Tu,
      {
        type: "action",
        operationName: "createShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Te,
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
      Iu,
      {
        type: "action",
        operationName: "updateShopifyProduct",
        namespace: null,
        modelApiIdentifier: "shopifyProduct",
        modelSelectionField: "shopifyProduct",
        isBulk: !1,
        defaultSelection: Te,
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
const Ie = {
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
async function _u(e, t) {
  return await N(
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
async function Au(e, t) {
  let r;
  const n = [], a = "shopifyProductImage";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createShopifyProductImage",
    Ie,
    "shopifyProductImage",
    "shopifyProductImage",
    !1,
    {
      shopifyProductImage: {
        value: r.shopifyProductImage,
        required: !1,
        type: "CreateShopifyProductImageInput"
      }
    },
    t,
    null
  );
}
async function Eu(e, t, r) {
  let n;
  const a = [], o = "shopifyProductImage";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateShopifyProductImage",
    Ie,
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
    r,
    null
  );
}
class Nu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductImage",
        r,
        Ie,
        "shopifyProductImage",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifyProductImage",
          r,
          Ie,
          "shopifyProductImage",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductImage",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifyProductImages",
        Ie,
        "shopifyProductImage",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifyProductImages",
        Ie,
        "shopifyProductImage",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifyProductImages",
          Ie,
          "shopifyProductImage",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductImages",
        modelApiIdentifier: "shopifyProductImage",
        defaultSelection: Ie,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      _u,
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
      async (r, n) => await N(
        this,
        "bulkDeleteShopifyProductImages",
        null,
        "shopifyProductImage",
        "shopifyProductImages",
        !0,
        {
          ids: {
            value: r,
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
      Au,
      {
        type: "action",
        operationName: "createShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Ie,
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
      Eu,
      {
        type: "action",
        operationName: "updateShopifyProductImage",
        namespace: null,
        modelApiIdentifier: "shopifyProductImage",
        modelSelectionField: "shopifyProductImage",
        isBulk: !1,
        defaultSelection: Ie,
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
const Pe = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0,
  name: !0,
  position: !0,
  values: !0
};
async function ju(e, t) {
  return await N(
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
async function xu(e, t) {
  let r;
  const n = [], a = "shopifyProductOption";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createShopifyProductOption",
    Pe,
    "shopifyProductOption",
    "shopifyProductOption",
    !1,
    {
      shopifyProductOption: {
        value: r.shopifyProductOption,
        required: !1,
        type: "CreateShopifyProductOptionInput"
      }
    },
    t,
    null
  );
}
async function ku(e, t, r) {
  let n;
  const a = [], o = "shopifyProductOption";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateShopifyProductOption",
    Pe,
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
    r,
    null
  );
}
class Cu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductOption",
        r,
        Pe,
        "shopifyProductOption",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifyProductOption",
          r,
          Pe,
          "shopifyProductOption",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductOption",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifyProductOptions",
        Pe,
        "shopifyProductOption",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifyProductOptions",
        Pe,
        "shopifyProductOption",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifyProductOptions",
          Pe,
          "shopifyProductOption",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductOptions",
        modelApiIdentifier: "shopifyProductOption",
        defaultSelection: Pe,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      ju,
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
      async (r, n) => await N(
        this,
        "bulkDeleteShopifyProductOptions",
        null,
        "shopifyProductOption",
        "shopifyProductOptions",
        !0,
        {
          ids: {
            value: r,
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
      xu,
      {
        type: "action",
        operationName: "createShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Pe,
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
      ku,
      {
        type: "action",
        operationName: "updateShopifyProductOption",
        namespace: null,
        modelApiIdentifier: "shopifyProductOption",
        modelSelectionField: "shopifyProductOption",
        isBulk: !1,
        defaultSelection: Pe,
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
const _e = {
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
async function Du(e, t) {
  return await N(
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
async function Fu(e, t, r) {
  let n;
  const a = [], o = "shopifyProductVariant";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateShopifyProductVariant",
    _e,
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
    r,
    null
  );
}
async function Vu(e, t) {
  let r;
  const n = [], a = "shopifyProductVariant";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createShopifyProductVariant",
    _e,
    "shopifyProductVariant",
    "shopifyProductVariant",
    !1,
    {
      shopifyProductVariant: {
        value: r.shopifyProductVariant,
        required: !1,
        type: "CreateShopifyProductVariantInput"
      }
    },
    t,
    null
  );
}
class qu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyProductVariant",
        r,
        _e,
        "shopifyProductVariant",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifyProductVariant",
          r,
          _e,
          "shopifyProductVariant",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyProductVariant",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifyProductVariants",
        _e,
        "shopifyProductVariant",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifyProductVariants",
        _e,
        "shopifyProductVariant",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifyProductVariants",
          _e,
          "shopifyProductVariant",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyProductVariants",
        modelApiIdentifier: "shopifyProductVariant",
        defaultSelection: _e,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Du,
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
      async (r, n) => await N(
        this,
        "bulkDeleteShopifyProductVariants",
        null,
        "shopifyProductVariant",
        "shopifyProductVariants",
        !0,
        {
          ids: {
            value: r,
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
      Fu,
      {
        type: "action",
        operationName: "updateShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: _e,
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
      Vu,
      {
        type: "action",
        operationName: "createShopifyProductVariant",
        namespace: null,
        modelApiIdentifier: "shopifyProductVariant",
        modelSelectionField: "shopifyProductVariant",
        isBulk: !1,
        defaultSelection: _e,
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
const ne = {
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
async function Mu(e, t) {
  return await N(
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
async function $u(e, t) {
  let r;
  const n = [], a = "shopifyShop";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createShopifyShop",
    ne,
    "shopifyShop",
    "shopifyShop",
    !1,
    {
      shopifyShop: {
        value: r.shopifyShop,
        required: !1,
        type: "CreateShopifyShopInput"
      }
    },
    t,
    null
  );
}
async function Ru(e, t, r) {
  let n;
  const a = [], o = "shopifyShop";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateShopifyShop",
    ne,
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
    r,
    null
  );
}
async function Uu(e, t, r) {
  let n;
  const a = [], o = "shopifyShop";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "reinstallShopifyShop",
    ne,
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
    r,
    null
  );
}
async function Bu(e, t, r) {
  let n;
  const a = [], o = "shopifyShop";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "uninstallShopifyShop",
    ne,
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
    r,
    null
  );
}
class Gu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifyShop",
        r,
        ne,
        "shopifyShop",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifyShop",
          r,
          ne,
          "shopifyShop",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShop",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifyShops",
        ne,
        "shopifyShop",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifyShops",
        ne,
        "shopifyShop",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifyShops",
          ne,
          "shopifyShop",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShops",
        modelApiIdentifier: "shopifyShop",
        defaultSelection: ne,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Mu,
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
      async (r, n) => await N(
        this,
        "bulkDeleteShopifyShops",
        null,
        "shopifyShop",
        "shopifyShops",
        !0,
        {
          ids: {
            value: r,
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
      $u,
      {
        type: "action",
        operationName: "createShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
        isBulk: !1,
        defaultSelection: ne,
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
      Ru,
      {
        type: "action",
        operationName: "updateShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Uu,
      {
        type: "action",
        operationName: "reinstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
      Bu,
      {
        type: "action",
        operationName: "uninstallShopifyShop",
        namespace: null,
        modelApiIdentifier: "shopifyShop",
        modelSelectionField: "shopifyShop",
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
const Ae = {
  id: !0,
  __typename: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
};
async function Lu(e, t) {
  return await N(
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
async function zu(e, t, r) {
  let n;
  const a = [], o = "productPairing";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateProductPairing",
    Ae,
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
    r,
    null
  );
}
async function Ku(e, t) {
  let r;
  const n = [], a = "productPairing";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createProductPairing",
    Ae,
    "productPairing",
    "productPairing",
    !1,
    {
      productPairing: {
        value: r.productPairing,
        required: !1,
        type: "CreateProductPairingInput"
      }
    },
    t,
    null
  );
}
class Wu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "productPairing",
        r,
        Ae,
        "productPairing",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "productPairing",
          r,
          Ae,
          "productPairing",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "productPairing",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "productPairings",
        Ae,
        "productPairing",
        r
      ),
      {
        type: "findMany",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "productPairings",
        Ae,
        "productPairing",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "productPairings",
          Ae,
          "productPairing",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "productPairings",
        modelApiIdentifier: "productPairing",
        defaultSelection: Ae,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.delete = Object.assign(
      Lu,
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
      async (r, n) => await N(
        this,
        "bulkDeleteProductPairings",
        null,
        "productPairing",
        "productPairings",
        !0,
        {
          ids: {
            value: r,
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
      zu,
      {
        type: "action",
        operationName: "updateProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Ae,
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
      Ku,
      {
        type: "action",
        operationName: "createProductPairing",
        namespace: null,
        modelApiIdentifier: "productPairing",
        modelSelectionField: "productPairing",
        isBulk: !1,
        defaultSelection: Ae,
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
const re = {
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
async function Hu(e, t) {
  let r;
  const n = [], a = "shopifySync";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "runShopifySync",
    re,
    "shopifySync",
    "shopifySync",
    !1,
    {
      shopifySync: {
        value: r.shopifySync,
        required: !1,
        type: "RunShopifySyncInput"
      },
      startReason: {
        value: r.startReason,
        required: !1,
        type: "String"
      }
    },
    t,
    null
  );
}
async function Qu(e, t, r) {
  let n;
  const a = [], o = "shopifySync";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "errorShopifySync",
    re,
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
    r,
    null
  );
}
async function Ju(e, t, r) {
  let n;
  const a = [], o = "shopifySync";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "completeShopifySync",
    re,
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
    r,
    null
  );
}
class Xu {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "shopifySync",
        r,
        re,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "shopifySync",
          r,
          re,
          "shopifySync",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySync",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "shopifySyncs",
        re,
        "shopifySync",
        r
      ),
      {
        type: "findMany",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "shopifySyncs",
        re,
        "shopifySync",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "shopifySyncs",
          re,
          "shopifySync",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await cn(
        this,
        "shopifySyncs",
        "id",
        r,
        re,
        "shopifySync",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySyncs",
        modelApiIdentifier: "shopifySync",
        defaultSelection: re,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.run = Object.assign(
      Hu,
      {
        type: "action",
        operationName: "runShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
        isBulk: !1,
        defaultSelection: re,
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
      Qu,
      {
        type: "action",
        operationName: "errorShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
      Ju,
      {
        type: "action",
        operationName: "completeShopifySync",
        namespace: null,
        modelApiIdentifier: "shopifySync",
        modelSelectionField: "shopifySync",
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
const ye = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  ambiguous: !0,
  booleanField: !0
};
async function Yu(e, t, r) {
  let n;
  const a = [], o = "ambiguous";
  if (Object.keys(t).some((s) => !a.includes(s) && s !== o))
    throw Error(`Invalid arguments found in variables. Did you mean to use update({ ${o}: { ... } })?`);
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateAmbiguous",
    ye,
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
    r,
    null
  );
}
async function Zu(e, t) {
  return await N(
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
async function el(e, t) {
  let r;
  const n = [], a = "ambiguous";
  if (Object.keys(e).some((o) => !n.includes(o) && o !== a))
    throw Error(`Invalid arguments found in variables. Did you mean to use create({ ${a}: { ... } })?`);
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createAmbiguous",
    ye,
    "ambiguous",
    "ambiguous",
    !1,
    {
      ambiguous: {
        value: r.ambiguous,
        required: !1,
        type: "CreateAmbiguousInput"
      }
    },
    t,
    null
  );
}
class tl {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "ambiguous",
        r,
        ye,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "ambiguous",
          r,
          ye,
          "ambiguous",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "ambiguous",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "ambiguouss",
        ye,
        "ambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "ambiguouss",
        ye,
        "ambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "ambiguouss",
          ye,
          "ambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await cn(
        this,
        "ambiguouss",
        "id",
        r,
        ye,
        "ambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "ambiguouss",
        modelApiIdentifier: "ambiguous",
        defaultSelection: ye,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      Yu,
      {
        type: "action",
        operationName: "updateAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
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
      Zu,
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
      async (r, n) => await N(
        this,
        "bulkDeleteAmbiguous",
        null,
        "ambiguous",
        "ambiguous",
        !0,
        {
          ids: {
            value: r,
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
      el,
      {
        type: "action",
        operationName: "createAmbiguous",
        namespace: null,
        modelApiIdentifier: "ambiguous",
        modelSelectionField: "ambiguous",
        isBulk: !1,
        defaultSelection: ye,
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
const he = {
  id: !0,
  __typename: !0,
  createdAt: !0,
  updatedAt: !0,
  stringField: !0,
  numberField: !0
};
async function rl(e, t, r) {
  let n;
  const a = [], o = "unambiguous";
  if (o in t && typeof t[o] == "object" && t[o] !== null)
    n = t;
  else {
    n = {
      [o]: {}
    };
    for (const [s, l] of Object.entries(t))
      a.includes(s) ? n[s] = l : n[o][s] = l;
  }
  return await N(
    this,
    "updateUnambiguous",
    he,
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
    r,
    null
  );
}
async function nl(e, t) {
  let r;
  const n = [], a = "unambiguous";
  if (a in e && typeof e[a] == "object" && e[a] !== null)
    r = e;
  else {
    r = {
      [a]: {}
    };
    for (const [o, s] of Object.entries(e))
      n.includes(o) ? r[o] = s : r[a][o] = s;
  }
  return await N(
    this,
    "createUnambiguous",
    he,
    "unambiguous",
    "unambiguous",
    !1,
    {
      unambiguous: {
        value: r.unambiguous,
        required: !1,
        type: "CreateUnambiguousInput"
      }
    },
    t,
    null
  );
}
async function il(e, t) {
  return await N(
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
class al {
  constructor(t) {
    this.connection = t, this.findOne = Object.assign(
      async (r, n) => await K(
        this,
        "unambiguous",
        r,
        he,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindOne = Object.assign(
      async (r, n) => {
        const a = await K(
          this,
          "unambiguous",
          r,
          he,
          "unambiguous",
          n,
          !1
        );
        return a.isEmpty() ? null : a;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "unambiguous",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findMany = Object.assign(
      async (r) => await R(
        this,
        "unambiguouss",
        he,
        "unambiguous",
        r
      ),
      {
        type: "findMany",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findFirst = Object.assign(
      async (r) => (await R(
        this,
        "unambiguouss",
        he,
        "unambiguous",
        { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
        !0
      ))[0],
      {
        type: "findFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.maybeFindFirst = Object.assign(
      async (r) => {
        const n = await R(
          this,
          "unambiguouss",
          he,
          "unambiguous",
          { ...r, first: 1, last: void 0, before: void 0, after: void 0 },
          !1
        );
        return (n == null ? void 0 : n[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.findById = Object.assign(
      async (r, n) => await cn(
        this,
        "unambiguouss",
        "id",
        r,
        he,
        "unambiguous",
        n
      ),
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "unambiguouss",
        modelApiIdentifier: "unambiguous",
        defaultSelection: he,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.update = Object.assign(
      rl,
      {
        type: "action",
        operationName: "updateUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: he,
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
      nl,
      {
        type: "action",
        operationName: "createUnambiguous",
        namespace: null,
        modelApiIdentifier: "unambiguous",
        modelSelectionField: "unambiguous",
        isBulk: !1,
        defaultSelection: he,
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
      il,
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
      async (r, n) => await N(
        this,
        "bulkDeleteUnambiguous",
        null,
        "unambiguous",
        "unambiguous",
        !0,
        {
          ids: {
            value: r,
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
const jt = {
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
async function ol(e) {
  return await N(
    this,
    "logOut",
    jt,
    "session",
    "session",
    !1,
    {},
    e,
    "currentSession"
  );
}
async function sl(e, t) {
  const r = e;
  return await N(
    this,
    "logInViaEmail",
    jt,
    "session",
    "session",
    !1,
    {
      email: {
        value: r.email,
        required: !1,
        type: "String"
      },
      password: {
        value: r.password,
        required: !1,
        type: "String"
      }
    },
    t,
    "currentSession"
  );
}
class ul {
  constructor(t) {
    this.connection = t, this.get = Object.assign(
      async (r) => await K(
        this,
        "currentSession",
        void 0,
        jt,
        "session",
        r
      ),
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: jt,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    ), this.logOut = Object.assign(
      ol,
      {
        type: "action",
        operationName: "logOut",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: jt,
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
      sl,
      {
        type: "action",
        operationName: "logInViaEmail",
        namespace: "currentSession",
        modelApiIdentifier: "session",
        modelSelectionField: "session",
        isBulk: !1,
        defaultSelection: jt,
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
const ai = "production", oi = "development", ll = () => {
  try {
    return process.env.NODE_ENV;
  } catch {
    return;
  }
};
class cl {
  constructor(t) {
    this.developmentApiRoot = "https://related-products-example.gadget.host/", this.productionApiRoot = "https://related-products-example.gadget.host/", this.applicationId = "1268", this.globalShopifySync = Object.assign(
      async () => await pu(
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
    ), this.transaction = async (a) => await this.connection.transaction(a), this.getDirectUploadToken = async () => (await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
      requestPolicy: "network-only"
    })).gadgetMeta.directUploadToken;
    const r = (t == null ? void 0 : t.environment) ?? ll() ?? oi;
    let n = r.toLocaleLowerCase();
    n != oi && n != ai && (console.warn("Invalid environment", r, "defaulting to development"), n = oi), this.connection = new Js({
      endpoint: new URL("api/graphql", n == ai ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      environment: n == ai ? "Production" : "Development"
    }), this.user = new bu(this.connection), this.session = new wu(this.connection), this.shopifyProduct = new Pu(this.connection), this.shopifyProductImage = new Nu(this.connection), this.shopifyProductOption = new Cu(this.connection), this.shopifyProductVariant = new qu(this.connection), this.shopifyShop = new Gu(this.connection), this.productPairing = new Wu(this.connection), this.shopifySync = new Xu(this.connection), this.ambiguous = new tl(this.connection), this.unambiguous = new al(this.connection), this.currentSession = new ul(this.connection), this.internal = {
      user: new Be("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new Be("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new Be("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new Be("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new Be("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new Be("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new Be("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new Be("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new Be("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new Be("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new Be("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, r, n) {
    const { data: a, error: o } = await this.connection.currentClient.query(t, r, n).toPromise();
    if (o)
      throw o;
    return a;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, r) {
    const { data: n, error: a } = await this.connection.currentClient.mutation(t, r).toPromise();
    if (a)
      throw a;
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
  async fetch(t, r = {}) {
    return await this.connection.fetch(t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
const dl = new cl(), fl = async () => {
  await dl.shopifyProduct.findMany();
};
export {
  fl as read
};
