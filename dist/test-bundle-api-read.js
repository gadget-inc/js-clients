var er = () => {
}, ie = er;
function me(e) {
  return {
    tag: 0,
    0: e
  };
}
function ut(e) {
  return {
    tag: 1,
    0: e
  };
}
var Pi = (e) => e;
function j(e) {
  return (t) => (r) => {
    var i = ie;
    t((n) => {
      n === 0 ? r(0) : n.tag === 0 ? (i = n[0], r(n)) : e(n[0]) ? r(n) : i(0);
    });
  };
}
function We(e) {
  return (t) => (r) => t((i) => {
    i === 0 || i.tag === 0 ? r(i) : r(ut(e(i[0])));
  });
}
function ot(e) {
  return (t) => (r) => {
    var i = [], n = ie, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, i.length || r(0)) : s.tag === 0 ? n = s[0] : (a = !1, function(u) {
        var c = ie;
        u((f) => {
          if (f === 0) {
            if (i.length) {
              var m = i.indexOf(c);
              m > -1 && (i = i.slice()).splice(m, 1), i.length || (o ? r(0) : a || (a = !0, n(0)));
            }
          } else
            f.tag === 0 ? (i.push(c = f[0]), c(0)) : i.length && (r(f), c(0));
        });
      }(e(s[0])), a || (a = !0, n(0))));
    }), r(me((s) => {
      if (s === 1) {
        o || (o = !0, n(1));
        for (var l = 0, u = i, c = i.length; l < c; l++)
          u[l](1);
        i.length = 0;
      } else {
        !o && !a ? (a = !0, n(0)) : a = !1;
        for (var f = 0, m = i, p = i.length; f < p; f++)
          m[f](0);
      }
    }));
  };
}
function Ei(e) {
  return ot(Pi)(e);
}
function Qe(e) {
  return Ei(Di(e));
}
function Jr(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0), e();
        else if (n.tag === 0) {
          var a = n[0];
          r(me((o) => {
            o === 1 ? (i = !0, a(1), e()) : a(o);
          }));
        } else
          r(n);
    });
  };
}
function Pt(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0);
        else if (n.tag === 0) {
          var a = n[0];
          r(me((o) => {
            o === 1 && (i = !0), a(o);
          }));
        } else
          e(n[0]), r(n);
    });
  };
}
function br(e) {
  return (t) => (r) => t((i) => {
    i === 0 ? r(0) : i.tag === 0 ? (r(i), e()) : r(i);
  });
}
function st(e) {
  var t = [], r = ie, i = !1;
  return (n) => {
    t.push(n), t.length === 1 && e((a) => {
      if (a === 0) {
        for (var o = 0, s = t, l = t.length; o < l; o++)
          s[o](0);
        t.length = 0;
      } else if (a.tag === 0)
        r = a[0];
      else {
        i = !1;
        for (var u = 0, c = t, f = t.length; u < f; u++)
          c[u](a);
      }
    }), n(me((a) => {
      if (a === 1) {
        var o = t.indexOf(n);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        i || (i = !0, r(0));
    }));
  };
}
function gr(e) {
  return (t) => (r) => {
    var i = ie, n = ie, a = !1, o = !1, s = !1, l = !1;
    t((u) => {
      l || (u === 0 ? (l = !0, s || r(0)) : u.tag === 0 ? i = u[0] : (s && (n(1), n = ie), a ? a = !1 : (a = !0, i(0)), function(f) {
        s = !0, f((m) => {
          s && (m === 0 ? (s = !1, l ? r(0) : a || (a = !0, i(0))) : m.tag === 0 ? (o = !1, (n = m[0])(0)) : (r(m), o ? o = !1 : n(0)));
        });
      }(e(u[0]))));
    }), r(me((u) => {
      u === 1 ? (l || (l = !0, i(1)), s && (s = !1, n(1))) : (!l && !a && (a = !0, i(0)), s && !o && (o = !0, n(0)));
    }));
  };
}
function Et(e) {
  return (t) => (r) => {
    var i = ie, n = !1, a = 0;
    t((o) => {
      n || (o === 0 ? (n = !0, r(0)) : o.tag === 0 ? e <= 0 ? (n = !0, r(0), o[0](1)) : i = o[0] : a++ < e ? (r(o), !n && a >= e && (n = !0, r(0), i(1))) : r(o));
    }), r(me((o) => {
      o === 1 && !n ? (n = !0, i(1)) : o === 0 && !n && a < e && i(0);
    }));
  };
}
function tr(e) {
  return (t) => (r) => {
    var i = ie, n = ie, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, n(1), r(0)) : o.tag === 0 ? (i = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (n = s[0])(0) : (a = !0, n(1), i(1), r(0)));
      })) : r(o));
    }), r(me((o) => {
      o === 1 && !a ? (a = !0, i(1), n(1)) : a || i(0);
    }));
  };
}
function _i(e, t) {
  return (r) => (i) => {
    var n = ie, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, i(0)) : o.tag === 0 ? (n = o[0], i(o)) : e(o[0]) ? i(o) : (a = !0, t && i(o), i(0), n(1)));
    });
  };
}
function Ti(e) {
  return (t) => e()(t);
}
function Hr(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), i = !1, n = !1, a = !1, o;
    t(me(async (s) => {
      if (s === 1)
        i = !0, r.return && r.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !i; )
          if ((o = await r.next()).done)
            i = !0, r.return && await r.return(), t(0);
          else
            try {
              a = !1, t(ut(o.value));
            } catch (l) {
              if (r.throw)
                (i = !!(await r.throw(l)).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
function Ci(e) {
  return e[Symbol.asyncIterator] ? Hr(e) : (t) => {
    var r = e[Symbol.iterator](), i = !1, n = !1, a = !1, o;
    t(me((s) => {
      if (s === 1)
        i = !0, r.return && r.return();
      else if (n)
        a = !0;
      else {
        for (a = n = !0; a && !i; )
          if ((o = r.next()).done)
            i = !0, r.return && r.return(), t(0);
          else
            try {
              a = !1, t(ut(o.value));
            } catch (l) {
              if (r.throw)
                (i = !!r.throw(l).done) && t(0);
              else
                throw l;
            }
        n = !1;
      }
    }));
  };
}
var Di = Ci;
function rt(e) {
  return (t) => {
    var r = !1;
    t(me((i) => {
      i === 1 ? r = !0 : r || (r = !0, t(ut(e)), t(0));
    }));
  };
}
function rr(e) {
  return (t) => {
    var r = !1, i = e({
      next(n) {
        r || t(ut(n));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(me((n) => {
      n === 1 && !r && (r = !0, i());
    }));
  };
}
function vr() {
  var e, t;
  return {
    source: st(rr((r) => (e = r.next, t = r.complete, er))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function Sr(e) {
  return rr((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), er));
}
function St(e) {
  return (t) => {
    var r = ie, i = !1;
    return t((n) => {
      n === 0 ? i = !0 : n.tag === 0 ? (r = n[0])(0) : i || (e(n[0]), r(0));
    }), {
      unsubscribe() {
        i || (i = !0, r(1));
      }
    };
  };
}
function Fi(e) {
  St((t) => {
  })(e);
}
var Ft = {
  done: !0
}, xi = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, i = ie, n;
    return e((a) => {
      r || (a === 0 ? (n && (n = n(Ft)), r = !0) : a.tag === 0 ? (i = a[0])(0) : n ? n = n({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? Ft : (!r && t.length <= 1 && i(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => n = a));
      },
      async return() {
        return r || (n = i(1)), r = !0, Ft;
      }
    };
  }
});
function ir(e) {
  return new Promise((t) => {
    var r = ie, i;
    e((n) => {
      n === 0 ? Promise.resolve(i).then(t) : n.tag === 0 ? (r = n[0])(0) : (i = n[0], r(0));
    });
  });
}
var nr = (...e) => {
  for (var t = e[0], r = 1, i = e.length; r < i; r++)
    t = e[r](t);
  return t;
}, Ke = {
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
class Rt extends Error {
  constructor(t, r, i, n, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), i && (this.source = i), n && (this.positions = n), o && (this.originalError = o);
    var l = s;
    if (!l && o) {
      var u = o.extensions;
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
var O, g;
function x(e) {
  return new Rt(`Syntax Error: Unexpected token at ${g} in ${e}`);
}
function oe(e) {
  if (e.lastIndex = g, e.test(O))
    return O.slice(g, g = e.lastIndex);
}
var mt = / +(?=[^\s])/y;
function Mi(e) {
  for (var t = e.split(`
`), r = "", i = 0, n = 0, a = t.length - 1, o = 0; o < t.length; o++)
    mt.lastIndex = 0, mt.test(t[o]) && (o && (!i || mt.lastIndex < i) && (i = mt.lastIndex), n = n || o, a = o);
  for (var s = n; s <= a; s++)
    s !== n && (r += `
`), r += t[s].slice(i).replace(/\\"""/g, '"""');
  return r;
}
function v() {
  for (var e = 0 | O.charCodeAt(g++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | O.charCodeAt(g++))
    if (e === 35)
      for (; (e = O.charCodeAt(g++)) !== 10 && e !== 13; )
        ;
  g--;
}
var Yr = /[_A-Za-z]\w*/y;
function we() {
  var e;
  if (e = oe(Yr))
    return {
      kind: "Name",
      value: e
    };
}
var qi = /(?:null|true|false)/y, Zr = /\$[_A-Za-z]\w*/y, ji = /-?\d+/y, Ri = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, $i = /\\/g, Bi = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, Vi = /"(?:"|[^\r\n]*?[^\\]")/y;
function It(e) {
  var t, r;
  if (r = oe(qi))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = oe(Zr)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = oe(ji)) {
    var i = r;
    (r = oe(Ri)) ? t = {
      kind: "FloatValue",
      value: i + r
    } : t = {
      kind: "IntValue",
      value: i
    };
  } else if (r = oe(Yr))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = oe(Bi))
    t = {
      kind: "StringValue",
      value: Mi(r.slice(3, -3)),
      block: !0
    };
  else if (r = oe(Vi))
    t = {
      kind: "StringValue",
      value: $i.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (O.charCodeAt(g) === 91) {
      g++, v();
      for (var s = []; o = It(a); )
        s.push(o);
      if (O.charCodeAt(g++) !== 93)
        throw x("ListValue");
      return v(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (O.charCodeAt(g) === 123) {
      g++, v();
      for (var o = [], s; s = we(); ) {
        if (v(), O.charCodeAt(g++) !== 58)
          throw x("ObjectField");
        v();
        var l = It(a);
        if (!l)
          throw x("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (O.charCodeAt(g++) !== 125)
        throw x("ObjectValue");
      return v(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return v(), t;
}
function Xr(e) {
  var t = [];
  if (v(), O.charCodeAt(g) === 40) {
    g++, v();
    for (var r; r = we(); ) {
      if (v(), O.charCodeAt(g++) !== 58)
        throw x("Argument");
      v();
      var i = It(e);
      if (!i)
        throw x("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: i
      });
    }
    if (!t.length || O.charCodeAt(g++) !== 41)
      throw x("Argument");
    v();
  }
  return t;
}
function Je(e) {
  var t = [];
  for (v(); O.charCodeAt(g) === 64; ) {
    g++;
    var r = we();
    if (!r)
      throw x("Directive");
    v(), t.push({
      kind: "Directive",
      name: r,
      arguments: Xr(e)
    });
  }
  return t;
}
function Ui() {
  var e = we();
  if (e) {
    v();
    var t;
    if (O.charCodeAt(g) === 58) {
      if (g++, v(), t = e, !(e = we()))
        throw x("Field");
      v();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: Xr(!1),
      directives: Je(!1),
      selectionSet: _t()
    };
  }
}
function ei() {
  var e;
  if (v(), O.charCodeAt(g) === 91) {
    g++, v();
    var t = ei();
    if (!t || O.charCodeAt(g++) !== 93)
      throw x("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = we())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw x("NamedType");
  return v(), O.charCodeAt(g) === 33 ? (g++, v(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var Gi = /on/y;
function ti() {
  if (oe(Gi)) {
    v();
    var e = we();
    if (!e)
      throw x("NamedType");
    return v(), {
      kind: "NamedType",
      name: e
    };
  }
}
var Li = /\.\.\./y;
function zi() {
  if (oe(Li)) {
    v();
    var e = g, t;
    if ((t = we()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: Je(!1)
      };
    g = e;
    var r = ti(), i = Je(!1), n = _t();
    if (!n)
      throw x("InlineFragment");
    return {
      kind: "InlineFragment",
      typeCondition: r,
      directives: i,
      selectionSet: n
    };
  }
}
function _t() {
  var e;
  if (v(), O.charCodeAt(g) === 123) {
    g++, v();
    for (var t = []; e = zi() || Ui(); )
      t.push(e);
    if (!t.length || O.charCodeAt(g++) !== 125)
      throw x("SelectionSet");
    return v(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var Ki = /fragment/y;
function Wi() {
  if (oe(Ki)) {
    v();
    var e = we();
    if (!e)
      throw x("FragmentDefinition");
    v();
    var t = ti();
    if (!t)
      throw x("FragmentDefinition");
    var r = Je(!1), i = _t();
    if (!i)
      throw x("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: i
    };
  }
}
var Qi = /(?:query|mutation|subscription)/y;
function Ji() {
  var e, t, r = [], i = [];
  (e = oe(Qi)) && (v(), t = we(), r = function() {
    var o, s = [];
    if (v(), O.charCodeAt(g) === 40) {
      for (g++, v(); o = oe(Zr); ) {
        if (v(), O.charCodeAt(g++) !== 58)
          throw x("VariableDefinition");
        var l = ei(), u = void 0;
        if (O.charCodeAt(g) === 61 && (g++, v(), !(u = It(!0))))
          throw x("VariableDefinition");
        v(), s.push({
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: o.slice(1)
            }
          },
          type: l,
          defaultValue: u,
          directives: Je(!0)
        });
      }
      if (O.charCodeAt(g++) !== 41)
        throw x("VariableDefinition");
      v();
    }
    return s;
  }(), i = Je(!1));
  var n = _t();
  if (n)
    return {
      kind: "OperationDefinition",
      operation: e || "query",
      name: t,
      variableDefinitions: r,
      directives: i,
      selectionSet: n
    };
}
function Hi(e, t) {
  return O = typeof e.body == "string" ? e.body : e, g = 0, function() {
    var i;
    v();
    for (var n = []; i = Wi() || Ji(); )
      n.push(i);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function Yi(e) {
  return JSON.stringify(e);
}
function Zi(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var se = (e) => !(!e || !e.length), J = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !se(e.variableDefinitions) && !se(e.directives))
      return J.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), se(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(J.VariableDefinition).join(", ") + ")"), se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), t + " " + J.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = J.Variable(e.variable) + ": " + le(e.type);
    return e.defaultValue && (t += " = " + le(e.defaultValue)), se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (se(e.arguments)) {
      var r = e.arguments.map(J.Argument), i = t + "(" + r.join(", ") + ")";
      t = i.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : i;
    }
    return se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), e.selectionSet ? t + " " + J.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? Zi(e.value) : Yi(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(le).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(J.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + le(e.value),
  Document: (e) => se(e.definitions) ? e.definitions.map(le).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(le).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + le(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), t + " " + le(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, se(e.directives) && (t += " " + e.directives.map(J.Directive).join(" ")), t + " " + le(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return se(e.arguments) && (t += "(" + e.arguments.map(J.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + le(e.type) + "]",
  NonNullType: (e) => le(e.type) + "!"
};
function le(e) {
  return J[e.kind] ? J[e.kind](e) : "";
}
var Xi = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Rt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Rt(e);
class ct extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(Xi), i = ((n, a) => {
      var o = "";
      if (n)
        return `[Network] ${n.message}`;
      if (a)
        for (var s of a)
          o && (o += `
`), o += `[GraphQL] ${s.message}`;
      return o;
    })(t.networkError, r);
    super(i), this.name = "CombinedError", this.message = i, this.graphQLErrors = r, this.networkError = t.networkError, this.response = t.response;
  }
  toString() {
    return this.message;
  }
}
var $t = (e, t) => {
  for (var r = 0 | (t || 5381), i = 0, n = 0 | e.length; i < n; i++)
    r = (r << 5) + r + e.charCodeAt(i);
  return r;
}, Re = /* @__PURE__ */ new Set(), Ir = /* @__PURE__ */ new WeakMap(), Le = (e) => {
  if (e === null || Re.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Le(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Le(r) || "null";
    return t += "]";
  } else if (At !== He && e instanceof At || kt !== He && e instanceof kt)
    return "null";
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var n = Ir.get(e) || Math.random().toString(36).slice(2);
    return Ir.set(e, n), Le({
      __key: n
    });
  }
  Re.add(e);
  var a = "{";
  for (var o of i) {
    var s = Le(e[o]);
    s && (a.length > 1 && (a += ","), a += Le(o) + ":" + s);
  }
  return Re.delete(e), a += "}";
}, Bt = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || Re.has(r)))
    if (Array.isArray(r))
      for (var i = 0, n = r.length; i < n; i++)
        Bt(e, `${t}.${i}`, r[i]);
    else if (r instanceof At || r instanceof kt)
      e.set(t, r);
    else {
      Re.add(r);
      for (var a of Object.keys(r))
        Bt(e, `${t}.${a}`, r[a]);
    }
}, wt = (e) => (Re.clear(), Le(e));
class He {
}
var At = typeof File < "u" ? File : He, kt = typeof Blob < "u" ? Blob : He, en = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, tn = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, rn = (e, t) => t % 2 == 0 ? e.replace(tn, `
`) : e, wr = (e) => e.split(en).map(rn).join("").trim(), Ar = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ar = (e) => {
  var t;
  return typeof e == "string" ? t = wr(e) : e.loc && gt.get(e.__key) === e ? t = e.loc.source.body : (t = Ar.get(e) || wr(le(e)), Ar.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, kr = (e) => {
  var t = $t(ar(e));
  if (e.definitions) {
    var r = ii(e);
    r && (t = $t(`
# ${r}`, t));
  }
  return t;
}, ri = (e) => {
  var t, r;
  return typeof e == "string" ? (t = kr(e), r = gt.get(t) || Hi(e)) : (t = e.__key || kr(e), r = gt.get(t) || e), r.loc || ar(r), r.__key = t, gt.set(t, r), r;
}, xt = (e, t, r) => {
  var i = t || {}, n = ri(e), a = wt(i), o = n.__key;
  return a !== "{}" && (o = $t(a, o)), {
    key: o,
    query: n,
    variables: i,
    extensions: r
  };
}, ii = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ke.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, nn = (e) => {
  for (var t of e.definitions)
    if (t.kind === Ke.OPERATION_DEFINITION)
      return t.operation;
}, Vt = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var i = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new ct({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? i : t.hasNext,
    stale: !1
  };
}, Ut = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Ut(e[r], t[r]);
    return e;
  }
  return t;
}, Gt = (e, t, r) => {
  var i = e.error ? e.error.graphQLErrors : [], n = !!e.extensions || !!t.extensions, a = {
    ...e.extensions,
    ...t.extensions
  }, o = t.incremental;
  "path" in t && (o = [t]);
  var s = {
    data: e.data
  };
  if (o)
    for (var l of o) {
      Array.isArray(l.errors) && i.push(...l.errors), l.extensions && (Object.assign(a, l.extensions), n = !0);
      for (var u = "data", c = s, f = 0, m = l.path.length; f < m; u = l.path[f++])
        c = c[u] = Array.isArray(c[u]) ? [...c[u]] : {
          ...c[u]
        };
      if (l.items)
        for (var p = +u >= 0 ? u : 0, h = 0, w = l.items.length; h < w; h++)
          c[p + h] = Ut(c[p + h], l.items[h]);
      else
        l.data !== void 0 && (c[u] = Ut(c[u], l.data));
    }
  else
    s.data = t.data || e.data, i = t.errors || i;
  return {
    operation: e.operation,
    data: s.data,
    error: i.length ? new ct({
      graphQLErrors: i,
      response: r
    }) : void 0,
    extensions: n ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, ni = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new ct({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function ai(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : ar(e.query),
    operationName: ii(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var an = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var i = new URL(e.context.url);
  for (var n in t) {
    var a = t[n];
    a && i.searchParams.set(n, typeof a == "object" ? wt(a) : a);
  }
  var o = i.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, on = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = wt(t), i = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (At !== He || kt !== He) && (Re.clear(), Bt(l, "variables", s)), l;
    })(t.variables);
    if (i.size) {
      var n = new FormData();
      n.append("operations", r), n.append("map", wt({
        ...[...i.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of i.values())
        n.append("" + a++, o);
      return n;
    }
    return r;
  }
}, sn = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var n in i.headers)
      r[n.toLowerCase()] = i.headers[n];
  var a = on(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...i,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, ln = typeof TextDecoder < "u" ? new TextDecoder() : null, un = /boundary="?([^=";]+)"?/i, cn = /data: ?([^\n]+)/, Nr = (e) => e.constructor.name === "Buffer" ? e.toString() : ln.decode(e);
async function* Or(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield Nr(t);
  else {
    var r = e.body.getReader(), i;
    try {
      for (; !(i = await r.read()).done; )
        yield Nr(i.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Pr(e, t) {
  var r = "", i;
  for await (var n of e)
    for (r += n; (i = r.indexOf(t)) > -1; )
      yield r.slice(0, i), r = r.slice(i + t.length);
}
async function* dn(e, t, r) {
  var i = !0, n = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (c, f) {
        var m = c.match(un), p = "--" + (m ? m[1] : "-"), h = !0, w;
        for await (var k of Pr(Or(f), `\r
` + p)) {
          if (h) {
            h = !1;
            var Z = k.indexOf(p);
            if (Z > -1)
              k = k.slice(Z + p.length);
            else
              continue;
          }
          try {
            yield w = JSON.parse(k.slice(k.indexOf(`\r
\r
`) + 4));
          } catch (E) {
            if (!w)
              throw E;
          }
          if (w && w.hasNext === !1)
            break;
        }
        w && w.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (c) {
        var f;
        for await (var m of Pr(Or(c), `

`)) {
          var p = m.match(cn);
          if (p) {
            var h = p[1];
            try {
              yield f = JSON.parse(h);
            } catch (w) {
              if (!f)
                throw w;
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
      s = async function* (c) {
        yield JSON.parse(await c.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of s)
      n = n ? Gt(n, l, a) : Vt(e, l, a), i = !1, yield n, i = !0;
    n || (yield n = Vt(e, {}, a));
  } catch (u) {
    if (!i)
      throw u;
    yield ni(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : u, a);
  }
}
function fn(e, t, r) {
  var i;
  return typeof AbortController < "u" && (r.signal = (i = new AbortController()).signal), Jr(() => {
    i && i.abort();
  })(j((n) => !!n)(Hr(dn(e, t, r))));
}
var Lt = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Lt(r, t);
  else if (typeof e == "object" && e !== null)
    for (var i in e)
      i === "__typename" && typeof e[i] == "string" ? t.add(e[i]) : Lt(e[i], t);
  return t;
}, zt = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var i of e.definitions) {
      var n = zt(i);
      t = t || n !== i, r.push(n);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Ke.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Ke.FIELD && s.name.value === "__typename" && !s.alias;
        var l = zt(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
        kind: Ke.FIELD,
        name: {
          kind: Ke.NAME,
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
}, Er = /* @__PURE__ */ new Map(), pn = (e) => {
  var t = ri(e), r = Er.get(t.__key);
  return r || (Er.set(t.__key, r = zt(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, Kt = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((n) => Kt(n));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var i in e)
      i === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[i] = Kt(e[i]);
    return r;
  } else
    return e;
};
function _r(e) {
  var t = (r) => e(r);
  return t.toPromise = () => ir(Et(1)(j((r) => !r.stale && !r.hasNext)(t))), t.then = (r, i) => t.toPromise().then(r, i), t.subscribe = (r) => St(r)(t), t;
}
function Ye(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Tr = (e, t) => Ye(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), mn = () => {
}, Mt = ({ kind: e }) => e !== "mutation" && e !== "query", yn = ({ forward: e, client: t, dispatchDebug: r }) => {
  var i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (s) => {
    var l = Ye(s.kind, s);
    return l.query = pn(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || i.has(s.key));
  return (s) => {
    var l = We((c) => {
      var f = i.get(c.key);
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
        operation: process.env.NODE_ENV !== "production" ? Tr(c, {
          cacheOutcome: f ? "hit" : "miss"
        }) : c
      }), c.context.requestPolicy === "cache-and-network" && (m.stale = !0, Cr(t, c)), m;
    })(j((c) => !Mt(c) && o(c))(s)), u = Pt((c) => {
      var { operation: f } = c;
      if (f) {
        var m = f.context.additionalTypenames || [];
        if (c.operation.kind !== "subscription" && (m = ((y) => [...Lt(y, /* @__PURE__ */ new Set())])(c.data).concat(m)), c.operation.kind === "mutation" || c.operation.kind === "subscription") {
          var p = /* @__PURE__ */ new Set();
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
          for (var h = 0; h < m.length; h++) {
            var w = m[h], k = n.get(w);
            k || n.set(w, k = /* @__PURE__ */ new Set());
            for (var Z of k.values())
              p.add(Z);
            k.clear();
          }
          for (var E of p.values())
            i.has(E) && (f = i.get(E).operation, i.delete(E), Cr(t, f));
        } else if (f.kind === "query" && c.data) {
          i.set(f.key, c);
          for (var R = 0; R < m.length; R++) {
            var d = m[R], b = n.get(d);
            b || n.set(d, b = /* @__PURE__ */ new Set()), b.add(f.key);
          }
        }
      }
    })(e(j((c) => c.kind !== "query" || c.context.requestPolicy !== "cache-only")(We((c) => process.env.NODE_ENV !== "production" ? Tr(c, {
      cacheOutcome: "miss"
    }) : c)(Qe([We(a)(j((c) => !Mt(c) && !o(c))(s)), j((c) => Mt(c))(s)])))));
    return Qe([l, u]);
  };
}, Cr = (e, t) => e.reexecuteOperation(Ye(t.kind, t, {
  requestPolicy: "network-only"
})), qt = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: i, forward: n }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = ot((u) => {
      var { key: c } = u, f = j((m) => m.kind === "teardown" && m.key === c)(o);
      return tr(f)(((m) => {
        var p = e(ai(m), m);
        return rr(({ next: h, complete: w }) => {
          var k = !1, Z, E;
          return Promise.resolve().then(() => {
            k || (Z = p.subscribe({
              next(R) {
                h(E = E ? Gt(E, R) : Vt(m, R));
              },
              error(R) {
                h(ni(m, R));
              },
              complete() {
                k || (k = !0, m.kind === "subscription" && i.reexecuteOperation(Ye("teardown", m, m.context)), E && E.hasNext && h(Gt(E, {
                  hasNext: !1
                })), w());
              }
            }));
          }), () => {
            k = !0, Z && Z.unsubscribe();
          };
        });
      })(u));
    })(j((u) => u.kind !== "teardown" && a(u))(o)), l = n(j((u) => u.kind === "teardown" || !a(u))(o));
    return Qe([s, l]);
  };
}, hn = ({ forward: e, dispatchDebug: t }) => (r) => {
  var i = ot((a) => {
    var o = ai(a), s = an(a, o), l = sn(a, o);
    process.env.NODE_ENV !== "production" && t({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: a,
      data: {
        url: s,
        fetchOptions: l
      },
      source: "fetchExchange"
    });
    var u = tr(j((c) => c.kind === "teardown" && c.key === a.key)(r))(fn(a, s, l));
    return process.env.NODE_ENV !== "production" ? Pt((c) => {
      var f = c.data ? void 0 : c.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: l,
          value: f || c
        },
        source: "fetchExchange"
      });
    })(u) : u;
  })(j((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), n = e(j((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return Qe([i, n]);
}, bn = (e) => ({ client: t, forward: r, dispatchDebug: i }) => e.reduceRight((n, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return st(n(st(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && i({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), oi = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: i }) => (n) => ot((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? Sr(o) : rt(o);
})(i(ot((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Sr(o) : rt(o);
})(n))), gn = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = Pt((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var i = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: i,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(i);
  }
})(t)), j((r) => !1)(t)), Dr = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = vr();
  function u(d) {
    (d.kind === "mutation" || d.kind === "teardown" || !a.has(d.key)) && (d.kind === "teardown" ? a.delete(d.key) : d.kind !== "mutation" && a.add(d.key), l.next(d));
  }
  var c = !1;
  function f(d) {
    if (d && u(d), !c) {
      for (c = !0; c && (d = o.shift()); )
        u(d);
      c = !1;
    }
  }
  var m = (d) => {
    var b = tr(j((y) => y.kind === "teardown" && y.key === d.key)(l.source))(j((y) => y.operation.kind === d.kind && y.operation.key === d.key && (!y.operation.context._instance || y.operation.context._instance === d.context._instance))(R));
    return d.kind !== "query" ? b = _i((y) => !!y.hasNext, !0)(b) : b = gr((y) => {
      var _ = rt(y);
      return y.stale || y.hasNext ? _ : Qe([_, We(() => (y.stale = !0, y))(Et(1)(j((Be) => Be.key === d.key)(l.source)))]);
    })(b), d.kind !== "mutation" ? b = Jr(() => {
      a.delete(d.key), i.delete(d.key), n.delete(d.key), c = !1;
      for (var y = o.length - 1; y >= 0; y--)
        o[y].key === d.key && o.splice(y, 1);
      u(Ye("teardown", d, d.context));
    })(Pt((y) => {
      if (y.stale) {
        for (var _ of o)
          if (_.key === y.operation.key) {
            a.delete(_.key);
            break;
          }
      } else
        y.hasNext || a.delete(d.key);
      i.set(d.key, y);
    })(b)) : b = br(() => {
      u(d);
    })(b), t.maskTypename && (b = We((y) => ({
      ...y,
      data: Kt(y.data, !0)
    }))(b)), st(b);
  }, p = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(p, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(d) {
      d.kind === "teardown" ? f(d) : (d.kind === "mutation" || n.has(d.key)) && (o.push(d), Promise.resolve().then(f));
    },
    createRequestOperation(d, b, y) {
      y || (y = {});
      var _;
      if (process.env.NODE_ENV !== "production" && d !== "teardown" && (_ = nn(b.query)) !== d)
        throw new Error(`Expected operation of type "${d}" but found "${_}"`);
      return Ye(d, b, {
        _instance: d === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...y,
        requestPolicy: y.requestPolicy || s.requestPolicy,
        suspense: y.suspense || y.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(d) {
      return d.kind === "mutation" ? _r(m(d)) : _r(Ti(() => {
        var b = n.get(d.key);
        b || n.set(d.key, b = m(d)), b = br(() => {
          f(d);
        })(b);
        var y = i.get(d.key);
        return d.kind === "query" && y && (y.stale || y.hasNext) ? gr(rt)(Qe([b, j((_) => _ === i.get(d.key))(rt(y))])) : b;
      }));
    },
    executeQuery(d, b) {
      var y = h.createRequestOperation("query", d, b);
      return h.executeRequestOperation(y);
    },
    executeSubscription(d, b) {
      var y = h.createRequestOperation("subscription", d, b);
      return h.executeRequestOperation(y);
    },
    executeMutation(d, b) {
      var y = h.createRequestOperation("mutation", d, b);
      return h.executeRequestOperation(y);
    },
    readQuery(d, b, y) {
      var _ = null;
      return St((Be) => {
        _ = Be;
      })(h.query(d, b, y)).unsubscribe(), _;
    },
    query: (d, b, y) => h.executeQuery(xt(d, b), y),
    subscription: (d, b, y) => h.executeSubscription(xt(d, b), y),
    mutation: (d, b, y) => h.executeMutation(xt(d, b), y)
  }), w = mn;
  if (process.env.NODE_ENV !== "production") {
    var { next: k, source: Z } = vr();
    h.subscribeToDebugTarget = (d) => St(d)(Z), w = k;
  }
  var E = bn(t.exchanges), R = st(E({
    client: h,
    dispatchDebug: w,
    forward: gn({
      dispatchDebug: w
    })
  })(l.source));
  return Fi(R), h;
};
const vn = {
  DateTime(e) {
    return new Date(e);
  }
};
class Sn {
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
    for (const [i, n] of Object.entries(this.plan)) {
      const a = r[i];
      a != null && (r[i] = vn[n](a));
    }
    return r;
  }
}
function re(e) {
  if (typeof e != "object")
    return e;
  var t, r, i = Object.prototype.toString.call(e);
  if (i === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = re(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: re(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = re(e[t]);
    }
    return r;
  }
  if (i === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = re(e[t]);
    return r;
  }
  return i === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(n) {
    r.add(re(n));
  }), r) : i === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(n, a) {
    r.set(re(a), re(n));
  }), r) : i === "[object Date]" ? /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : i === "[object DataView]" ? new e.constructor(re(e.buffer)) : i === "[object ArrayBuffer]" ? e.slice(0) : i.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var H;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(H || (H = {}));
class In {
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
    }), this.__gadget.instantiatedFields = re(t), this.__gadget.persistedFields = re(t), Object.assign(this.__gadget.fields, t), !t || Object.keys(t).length === 0 ? this.empty = !0 : (this.__gadget.fieldKeys = Object.keys(this.__gadget.fields), this.__gadget.fieldKeys.forEach((i) => this.__gadget.fieldKeysTracker[i] = !0));
    const r = {
      get: (i, n) => {
        if (n in this)
          return this[n];
        if (n in i)
          return i[n];
      },
      set: (i, n, a) => (this.trackKey(n), i[n.toString()] = a, !0)
    };
    return new Proxy(this.__gadget.fields, r);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this.__gadget.fieldKeysTracker[r] || (this.__gadget.fieldKeysTracker[r] = !0, this.__gadget.fieldKeys.push(r));
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = H.SinceLoaded) {
    if (this.__gadget.touched)
      return !0;
    const r = t == H.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    return this.__gadget.fieldKeys.some((i) => !yt(r[i], this.__gadget.fields[i]));
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
  changes(t, r = H.SinceLoaded) {
    const n = (typeof t == "string" ? r : t || r) == H.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields;
    if (t && typeof t == "string") {
      const a = n[t], o = this.__gadget.fields[t], s = !yt(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (let o = 0; o < this.__gadget.fieldKeys.length; o++) {
        const s = this.__gadget.fieldKeys[o];
        yt(n[s], this.__gadget.fields[s]) || (a[s] = { current: this.__gadget.fields[s], previous: n[s] });
      }
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = H.SinceLoaded) {
    const r = t == H.SinceLoaded ? this.__gadget.instantiatedFields : this.__gadget.persistedFields, i = {};
    for (let n = 0; n < this.__gadget.fieldKeys.length; n++) {
      const a = this.__gadget.fieldKeys[n];
      yt(r[a], this.__gadget.fields[a]) || (i[a] = this.__gadget.fields[a]);
    }
    return i;
  }
  changed(t, r = H.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = H.SinceLoaded) {
    t == H.SinceLoaded ? this.__gadget.instantiatedFields = re(this.__gadget.fields) : t == H.SinceLastPersisted && (this.__gadget.persistedFields = re(this.__gadget.fields)), this.__gadget.touched = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = H.SinceLoaded) {
    let r;
    t == H.SinceLoaded ? r = Object.keys(this.__gadget.instantiatedFields) : r = Object.keys(this.__gadget.persistedFields);
    for (const i of this.__gadget.fieldKeys)
      r.includes(i) || delete this.__gadget.fields[i];
    t == H.SinceLoaded ? Object.assign(this.__gadget.fields, re(this.__gadget.instantiatedFields)) : Object.assign(this.__gadget.fields, re(this.__gadget.persistedFields)), this.__gadget.touched = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return Ht({ ...this.__gadget.fields });
  }
  touch() {
    this.__gadget.touched = !0;
  }
}
const si = In;
class wn extends Error {
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
class Wt extends Error {
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
class Tt extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Fr extends Error {
  constructor(t) {
    let r;
    Jt(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class An extends Error {
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
class kn extends Error {
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
class Nn extends Error {
  constructor(t, r, i, n) {
    const a = r.slice(0, 3), o = r.length > 3 ? `, and ${r.length - 3} more error${r.length > 4 ? "s" : ""} need${r.length > 4 ? "" : "s"} to be corrected` : "";
    super(t ?? `GGT_INVALID_RECORD: ${i ?? "Record"} is invalid and can't be saved. ${a.map(({ apiIdentifier: s, message: l }) => `${s} ${l}`).join(", ")}${o}.`), Object.defineProperty(this, "code", {
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
    }), this.validationErrors = r, this.modelApiIdentifier = i, this.record = n;
  }
}
class li extends Error {
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
class ui extends Error {
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
class On extends Error {
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
function Qt(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const Nt = (e, t) => {
  const r = t.length;
  let i = 0;
  for (; e != null && i < r; )
    e = e[t[i++]];
  return i && i == r ? e : void 0;
}, Jt = (e) => (e == null ? void 0 : e.type) == "close", pe = (e, t) => typeof e != "string" ? "" : $e(e, t), xr = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, $e = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (i) => xr(i)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (i) => i.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (i, n, a, o, s) => (n || (n = ""), "" + n + xr(a))), r;
}, Pn = (e) => `${$e(e)}Sort`, En = (e) => `${$e(e)}Filter`, _n = (e, t, r) => new li(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Ie = (e, t, r = !1) => {
  var i;
  if (e.error)
    throw e.error instanceof ct && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const n = Nt(e.data, t), a = Nt(n, ["edges"]), o = a ?? n;
  if (n === void 0)
    throw new wn(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null || r && Array.isArray(o) && o.length === 0)
    throw new ui(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return n;
}, it = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof ct && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((n) => "[Network] " + n.message).join(`
`)), e.error;
  const i = Nt(e.data, t);
  return i ?? null;
}, ci = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Nn(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new li(e.message) : new Tt(e.message, e.code);
}, Ee = (e, t) => {
  const r = Ie(e, t);
  return di(r);
}, di = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? ci(t) : new Tt("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, fi = (e) => {
  var t, r, i, n;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Sn((n = (i = e.data) === null || i === void 0 ? void 0 : i.gadgetMeta) === null || n === void 0 ? void 0 : n.hydrations);
}, nt = (e, t) => {
  const r = fi(e);
  return r && (t = r.apply(t)), new si(t);
}, or = (e, t) => {
  const r = fi(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((i) => new si(i));
}, Ot = (e, t) => {
  const r = t.edges.map((i) => i.node);
  return or(e, r);
}, Ht = (e) => {
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
          const i = e[r];
          t[r] = i === void 0 ? null : Ht(i);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === "[object Object]") {
        const t = {};
        for (const r of Object.keys(e)) {
          const i = Ht(e[r]);
          i !== void 0 && (t[r] = i);
        }
        return t;
      }
    }
  }
}, jt = "gstk", Mr = (e) => {
  try {
    const t = window[e];
    return t.setItem(jt, jt), t.removeItem(jt), !0;
  } catch {
    return !1;
  }
}, qr = Object.prototype.toString, jr = Object.getPrototypeOf, Rr = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, tt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const i = qr.call(e), n = qr.call(t);
  let a, o, s;
  if (r.push(e, t), i != n || (a = Rr(e), o = Rr(t), a.length != o.length || a.some(function(l) {
    return !tt(e[l], t[l], r);
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
      a = e.entries(), o = t.entries();
      do
        if (s = a.next(), !tt(s.value, o.next().value, r))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !tt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return tt(jr(e), jr(t), r);
    default:
      return !1;
  }
}, yt = (e, t) => tt(e, t, []), pi = (e, t) => {
  var r, i;
  if (t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))
    return t;
  if (e.hasAmbiguousIdentifier && Object.keys(t).some((a) => {
    var o;
    return a !== "id" && !(!((o = e.paramOnlyVariables) === null || o === void 0) && o.includes(a)) && a !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  if ((r = e.acceptsModelInput) !== null && r !== void 0 ? r : e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] != null)
      n = t;
    else {
      n = {
        [e.modelApiIdentifier]: {}
      };
      for (const [a, o] of Object.entries(t))
        !((i = e.paramOnlyVariables) === null || i === void 0) && i.includes(a) ? n[a] = o : a == "id" ? n.id = o : n[e.modelApiIdentifier][a] = o;
    }
  else
    n = t;
  return n;
}, Tn = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((n) => pi(e, n))
  };
}, Cn = (e, t) => {
  const r = {};
  for (const [i, n] of Object.entries(e))
    r[i] = { ...n, value: t[i] };
  return r;
};
class lt extends Array {
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
  static boot(t, r, i) {
    const n = new lt();
    return n.push(...r), n.modelManager = t, n.pagination = i, Object.freeze(n), n;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Tt("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new Wt("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: r, last: i, before: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      after: this.pagination.pageInfo.endCursor,
      first: r || i
    });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new Wt("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: i, after: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: i || r
    });
  }
}
const Yt = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof lr) {
    let i = "";
    const n = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof ur ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return n.length > 0 && (i = `(${n.join(", ")})`), r.subselection ? [`${t}${i} {`, ...Yt(r.subselection), "}"] : `${t}${i}`;
  } else
    return [`${t} {`, ...Yt(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), sr = (e) => {
  const t = {}, r = (i) => {
    let n = 1;
    if (t[i]) {
      for (; t[`${i}${n}`]; )
        n++;
      return `${i}${n}`;
    }
    return i;
  };
  return Object.entries(e).forEach(([i, n]) => {
    n instanceof lr ? Object.entries(n.args).forEach(([a, o]) => {
      var s;
      o instanceof ur && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }) : typeof n == "object" && n !== null && Object.assign(t, sr(n));
  }), t;
}, Dn = (e) => {
  const t = sr(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([i, n]) => `$${i}: ${n.type}`).join(", ")})`;
};
class lr {
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
class ur {
  constructor(t, r, i) {
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
      value: i
    });
  }
  present() {
    return this.value != null;
  }
}
const _e = (e, t) => new lr(e, t), F = (e) => new ur(e.type + (e.required ? "!" : ""), e.name, e.value), Fn = (e) => {
  var t;
  const r = Dn(e), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${i} {
${Yt(e.fields).join(`
`)}
}`;
}, Te = (e) => {
  const t = sr(e.fields);
  return {
    query: Fn(e),
    variables: Object.entries(t ?? {}).reduce((r, [i, n]) => (typeof n.value < "u" && (r[i] = n.value), r), {})
  };
}, cr = (e) => ({
  gadgetMeta: {
    [`hydrations(modelName: "${e}")`]: !0
  }
}), dr = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Ct = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, xn = (e, t, r, i, n) => {
  const a = {};
  return typeof t < "u" && (a.id = F({ type: "GadgetID!", value: t })), Te({
    type: "query",
    name: e,
    fields: {
      [e]: _e(a, dr((n == null ? void 0 : n.select) || r, !0)),
      ...cr(i)
    },
    directives: Ct(n)
  });
}, Mn = (e, t, r, i, n, a) => mi(e, i, n, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}), mi = (e, t, r, i) => Te({
  type: "query",
  name: e,
  fields: {
    [e]: _e({
      after: F({ value: i == null ? void 0 : i.after, type: "String" }),
      first: F({ value: i == null ? void 0 : i.first, type: "Int" }),
      before: F({ value: i == null ? void 0 : i.before, type: "String" }),
      last: F({ value: i == null ? void 0 : i.last, type: "Int" }),
      sort: i != null && i.sort ? F({ value: i.sort, type: `[${Pn(r)}!]` }) : void 0,
      filter: i != null && i.filter ? F({ value: i.filter, type: `[${En(r)}!]` }) : void 0,
      search: i != null && i.search ? F({ value: i.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: dr((i == null ? void 0 : i.select) || t, !0)
      }
    }),
    ...cr(r)
  },
  directives: Ct(i)
}), yi = {
  message: !0,
  code: !0,
  "... on InvalidRecordError": {
    validationErrors: {
      message: !0,
      apiIdentifier: !0
    }
  }
}, fr = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, F(r)])), hi = (e, t, r) => ({
  success: !0,
  errors: yi,
  [e]: t && !r ? dr(t, !0) : !1,
  result: !!r
}), qn = (e, t, r, i, n, a, o, s, l) => {
  const u = (a == null ? void 0 : a.select) || t;
  let c = {
    [e]: _e(fr(n), hi(i, u, l))
  };
  o && (c = {
    [o]: c
  });
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...c,
      ...cr(r)
    },
    directives: Ct(a)
  };
  return Te(f);
}, jn = (e, t, r) => {
  let i = {}, n = t.operationName;
  switch (t.type) {
    case "action": {
      const o = (r == null ? void 0 : r.select) || t.defaultSelection;
      t.isBulk && (n = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), i = {
        [`... on ${`${$e(n)}Result`}`]: hi(t.modelApiIdentifier, o, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      i = {
        [`... on ${$e(n)}Result`]: bi()
      };
  }
  const a = {
    type: "subscription",
    name: pe(n) + "BackgroundResult",
    fields: {
      backgroundAction: _e({ id: F({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...i
        }
      })
    }
  };
  return Te(a);
}, bi = () => ({
  success: !0,
  errors: yi,
  result: !0
}), Rn = (e, t, r, i) => {
  let n = {
    [e]: _e(fr(t), bi())
  };
  return r && (n = {
    [r]: n
  }), Te({
    type: "mutation",
    name: e,
    fields: n,
    directives: Ct(i)
  });
}, $n = (e) => {
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
}, Bn = (e, t, r, i, n) => {
  let a = {
    background: {
      [e]: _e({
        ...fr(t),
        backgroundOptions: F({
          type: "EnqueueBackgroundActionOptions",
          value: $n(i)
        })
      }, {
        success: !0,
        errors: {
          message: !0,
          code: !0
        },
        [n ? "backgroundActions" : "backgroundAction"]: {
          id: !0
        }
      })
    }
  };
  return r && (a = {
    [r]: a
  }), Te({
    type: "mutation",
    name: "enqueue" + $e(e),
    fields: a
  });
}, Vn = (e, t) => ({
  [Symbol.asyncIterator]() {
    const r = e[Symbol.asyncIterator]();
    return {
      async next() {
        const { done: i, value: n } = await r.next();
        return {
          done: i,
          value: typeof n < "u" ? t(n) : void 0
        };
      },
      async return(i) {
        var n;
        return await ((n = r.return) === null || n === void 0 ? void 0 : n.call(r, i));
      }
    };
  }
});
function pr(e, t, r) {
  return r != null && r.live ? Vn(xi(e), t) : nr(e, j((n) => !n.stale && !n.hasNext), Et(1), ir).then((n) => t(n));
}
const $r = (e, t, r, i, n, a, o = !0) => {
  const s = xn(t, r, i, n, a), l = e.connection.currentClient.query(s.query, s.variables);
  return pr(l, (u) => {
    const f = (o ? Ie : it)(u, [t]);
    return nt(u, f);
  }, a);
}, Un = (e, t, r, i, n, a, o, s = !0) => {
  const l = Mn(t, r, i, n, a, o), u = e.connection.currentClient.query(l.query, l.variables);
  return pr(u, (c) => {
    const f = Ie(c, [t]), m = Ot(c, f);
    if (m.length > 1)
      throw _n(a, r, i);
    const p = m[0];
    if (!p && s)
      throw new ui(`${a} record with ${r}=${i} not found`);
    return p ?? null;
  }, o);
}, Br = (e, t, r, i, n, a) => {
  const o = mi(t, r, i, n), s = e.connection.currentClient.query(o.query, o.variables);
  return pr(s, (l) => {
    let u;
    a === !1 ? u = it(l, [t]) : u = Ie(l, [t], a);
    const c = Ot(l, u);
    return lt.boot(e, c, { options: n, pageInfo: u.pageInfo });
  }, n);
}, Vr = async (e, t, r, i, n, a, o, s, l, u) => {
  const c = qn(t, r, i, n, o, s, l, a, u), f = await e.connection.currentClient.mutation(c.query, c.variables).toPromise(), m = l ? [l, t] : [t];
  if (a) {
    const p = Nt(f.data, m), h = p[n] && r ? or(f, p[n]) : void 0;
    if (p.errors) {
      const w = p.errors.map((k) => ci(k));
      throw new On(w, h);
    }
    return h;
  } else {
    const p = Ee(f, m);
    return gi(r, f, p, n, u);
  }
}, gi = (e, t, r, i, n) => {
  if (e != null)
    return n ? r.result : nt(t, r[i]);
}, Ur = async (e, t, r, i) => {
  const n = Rn(t, r, i), a = await e.currentClient.mutation(n.query, n.variables).toPromise();
  return Ee(a, i ? [i, t] : [t]).result;
};
async function Gn(e, t, r, i = {}) {
  const n = t.isBulk ? Tn(t, r) : pi(t, r), a = Cn(t.variables, n), o = Bn(t.operationName, a, t.namespace, i, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, i).toPromise(), l = ["background", t.operationName];
  t.namespace && l.unshift(t.namespace);
  try {
    const u = Ee(s, l);
    return t.isBulk ? u.backgroundActions.map((c) => new vt(e, t, c.id)) : new vt(e, t, u.backgroundAction.id);
  } catch (u) {
    if ("code" in u && u.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (i != null && i.id) && i.onDuplicateID == "ignore")
      return new vt(e, t, i.id);
    throw u;
  }
}
const Ln = async (e, t, r, i) => {
  const n = jn(t, r, i), a = e.currentClient.subscription(n.query, n.variables), o = await nr(a, j((l) => {
    var u, c;
    return l.error || ((c = (u = l.data) === null || u === void 0 ? void 0 : u.backgroundAction) === null || c === void 0 ? void 0 : c.outcome);
  }), Et(1), ir), s = Ie(o, ["backgroundAction"]);
  switch (di(s.result), r.type) {
    case "action": {
      s.result = gi(r.defaultSelection, o.data, s.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class vt {
  constructor(t, r, i) {
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
      value: i
    });
  }
  /** Wait for this background action to complete and return the result. */
  async result(t) {
    return (await Ln(this.connection, this.id, this.action, t)).result;
  }
}
var at;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(at || (at = {}));
function te(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function je(e) {
  return te(e) === "object";
}
function zn(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function Gr(e, t) {
  return e.length < 124 ? e : t;
}
const Kn = "graphql-transport-ws";
var Y;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Y || (Y = {}));
var D;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(D || (D = {}));
function vi(e) {
  if (!je(e))
    throw new Error(`Message is expected to be an object, but got ${te(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${te(e.type)}`);
  switch (e.type) {
    case D.ConnectionInit:
    case D.ConnectionAck:
    case D.Ping:
    case D.Pong: {
      if (e.payload != null && !je(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case D.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${te(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!je(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${te(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${te(e.payload.query)}`);
      if (e.payload.variables != null && !je(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${te(e.payload.variables)}`);
      if (e.payload.operationName != null && te(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${te(e.payload.operationName)}`);
      if (e.payload.extensions != null && !je(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${te(e.payload.extensions)}`);
      break;
    }
    case D.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${te(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!je(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${te(e.payload)}`);
      break;
    }
    case D.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${te(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!zn(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case D.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${te(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function Wn(e, t) {
  return vi(typeof e == "string" ? JSON.parse(e, t) : e);
}
function et(e, t) {
  return vi(e), JSON.stringify(e, t);
}
function Qn(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: i = !0,
    onNonLazyError: n = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: u = 5,
    retryWait: c = async function(M) {
      let N = 1e3;
      for (let I = 0; I < M; I++)
        N *= 2;
      await new Promise((I) => setTimeout(I, N + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = ht,
    isFatalConnectionProblem: m,
    on: p,
    webSocketImpl: h,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: w = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (M) => {
        const N = Math.random() * 16 | 0;
        return (M == "x" ? N : N & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: k,
    jsonMessageReviver: Z
  } = e;
  let E;
  if (h) {
    if (!Hn(h))
      throw new Error("Invalid WebSocket implementation provided");
    E = h;
  } else
    typeof WebSocket < "u" ? E = WebSocket : typeof global < "u" ? E = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (E = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!E)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const R = E, d = (() => {
    const S = (() => {
      const N = {};
      return {
        on(I, T) {
          return N[I] = T, () => {
            delete N[I];
          };
        },
        emit(I) {
          var T;
          "id" in I && ((T = N[I.id]) === null || T === void 0 || T.call(N, I));
        }
      };
    })(), M = {
      connecting: p != null && p.connecting ? [p.connecting] : [],
      opened: p != null && p.opened ? [p.opened] : [],
      connected: p != null && p.connected ? [p.connected] : [],
      ping: p != null && p.ping ? [p.ping] : [],
      pong: p != null && p.pong ? [p.pong] : [],
      message: p != null && p.message ? [S.emit, p.message] : [S.emit],
      closed: p != null && p.closed ? [p.closed] : [],
      error: p != null && p.error ? [p.error] : []
    };
    return {
      onMessage: S.on,
      on(N, I) {
        const T = M[N];
        return T.push(I), () => {
          T.splice(T.indexOf(I), 1);
        };
      },
      emit(N, ...I) {
        for (const T of [...M[N]])
          T(...I);
      }
    };
  })();
  function b(S) {
    const M = [
      // errors are fatal and more critical than close events, throw them first
      d.on("error", (N) => {
        M.forEach((I) => I()), S(N);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      d.on("closed", (N) => {
        M.forEach((I) => I()), S(N);
      })
    ];
  }
  let y, _ = 0, Be, Dt = !1, ft = 0, mr = !1;
  async function yr() {
    clearTimeout(Be);
    const [S, M] = await (y ?? (y = new Promise((T, Ce) => (async () => {
      if (Dt) {
        if (await c(ft), !_)
          return y = void 0, Ce({ code: 1e3, reason: "All Subscriptions Gone" });
        ft++;
      }
      d.emit("connecting");
      const A = new R(typeof t == "function" ? await t() : t, Kn);
      let Ve, Xe;
      function pt() {
        isFinite(o) && o > 0 && (clearTimeout(Xe), Xe = setTimeout(() => {
          A.readyState === R.OPEN && (A.send(et({ type: D.Ping })), d.emit("ping", !1, void 0));
        }, o));
      }
      b((U) => {
        y = void 0, clearTimeout(Ve), clearTimeout(Xe), Ce(U), ht(U) && U.code === 4499 && (A.close(4499, "Terminated"), A.onerror = null, A.onclose = null);
      }), A.onerror = (U) => d.emit("error", U), A.onclose = (U) => d.emit("closed", U), A.onopen = async () => {
        try {
          d.emit("opened", A);
          const U = typeof r == "function" ? await r() : r;
          if (A.readyState !== R.OPEN)
            return;
          A.send(et(U ? {
            type: D.ConnectionInit,
            payload: U
          } : {
            type: D.ConnectionInit
            // payload is completely absent if not provided
          }, k)), isFinite(l) && l > 0 && (Ve = setTimeout(() => {
            A.close(Y.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), pt();
        } catch (U) {
          d.emit("error", U), A.close(Y.InternalClientError, Gr(U instanceof Error ? U.message : new Error(U).message, "Internal client error"));
        }
      };
      let Ue = !1;
      A.onmessage = ({ data: U }) => {
        try {
          const G = Wn(U, Z);
          if (d.emit("message", G), G.type === "ping" || G.type === "pong") {
            d.emit(G.type, !0, G.payload), G.type === "pong" ? pt() : s || (A.send(et(G.payload ? {
              type: D.Pong,
              payload: G.payload
            } : {
              type: D.Pong
              // payload is completely absent if not provided
            })), d.emit("pong", !1, G.payload));
            return;
          }
          if (Ue)
            return;
          if (G.type !== D.ConnectionAck)
            throw new Error(`First message cannot be of type ${G.type}`);
          clearTimeout(Ve), Ue = !0, d.emit("connected", A, G.payload), Dt = !1, ft = 0, T([
            A,
            new Promise((Ra, Oi) => b(Oi))
          ]);
        } catch (G) {
          A.onmessage = null, d.emit("error", G), A.close(Y.BadResponse, Gr(G instanceof Error ? G.message : new Error(G).message, "Bad response"));
        }
      };
    })())));
    S.readyState === R.CLOSING && await M;
    let N = () => {
    };
    const I = new Promise((T) => N = T);
    return [
      S,
      N,
      Promise.race([
        // wait for
        I.then(() => {
          if (!_) {
            const T = () => S.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Be = setTimeout(() => {
              S.readyState === R.OPEN && T();
            }, a) : T();
          }
        }),
        // or
        M
      ])
    ];
  }
  function hr(S) {
    if (ht(S) && (Jn(S.code) || [
      Y.InternalServerError,
      Y.InternalClientError,
      Y.BadRequest,
      Y.BadResponse,
      Y.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Y.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Y.SubscriberAlreadyExists,
      Y.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(S.code)))
      throw S;
    if (mr)
      return !1;
    if (ht(S) && S.code === 1e3)
      return _ > 0;
    if (!u || ft >= u || !f(S) || m != null && m(S))
      throw S;
    return Dt = !0;
  }
  return i || (async () => {
    for (_++; ; )
      try {
        const [, , S] = await yr();
        await S;
      } catch (S) {
        try {
          if (!hr(S))
            return;
        } catch (M) {
          return n == null ? void 0 : n(M);
        }
      }
  })(), {
    on: d.on,
    subscribe(S, M) {
      const N = w(S);
      let I = !1, T = !1, Ce = () => {
        _--, I = !0;
      };
      return (async () => {
        for (_++; ; )
          try {
            const [A, Ve, Xe] = await yr();
            if (I)
              return Ve();
            const pt = d.onMessage(N, (Ue) => {
              switch (Ue.type) {
                case D.Next: {
                  M.next(Ue.payload);
                  return;
                }
                case D.Error: {
                  T = !0, I = !0, M.error(Ue.payload), Ce();
                  return;
                }
                case D.Complete: {
                  I = !0, Ce();
                  return;
                }
              }
            });
            A.send(et({
              id: N,
              type: D.Subscribe,
              payload: S
            }, k)), Ce = () => {
              !I && A.readyState === R.OPEN && A.send(et({
                id: N,
                type: D.Complete
              }, k)), _--, I = !0, Ve();
            }, await Xe.finally(pt);
            return;
          } catch (A) {
            if (!hr(A))
              return;
          }
      })().then(() => {
        T || M.complete();
      }).catch((A) => {
        M.error(A);
      }), () => {
        I || Ce();
      };
    },
    async dispose() {
      if (mr = !0, y) {
        const [S] = await y;
        S.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      y && d.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function ht(e) {
  return je(e) && "code" in e && "reason" in e;
}
function Jn(e) {
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
function Hn(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var ze = null;
typeof WebSocket < "u" ? ze = WebSocket : typeof MozWebSocket < "u" ? ze = MozWebSocket : typeof global < "u" ? ze = global.WebSocket || global.MozWebSocket : typeof window < "u" ? ze = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ze = self.WebSocket || self.MozWebSocket);
const Yn = ze;
class Si extends Error {
}
class Zn {
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
    throw Ie(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new Si("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ie(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ie(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class Xn {
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
const ea = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((i) => i.kind == "Field").name.value;
}, Lr = oi({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = ea(e.query) || "unknown");
  }
}), ta = oi({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), i = new URLSearchParams(r);
        i.set("operation", e.context.operationName), e.context.url = `${t}?${i.toString()}`;
      } catch {
      }
  }
});
var Zt;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(Zt || (Zt = {}));
const ra = 2, ia = 4800, na = 1e4, aa = [Y.ConnectionAcknowledgementTimeout, Y.ConnectionInitialisationTimeout], zr = Symbol.for("gadget/connection"), oa = "token", sa = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var q;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(q || (q = {}));
const bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Ii {
  constructor(t) {
    var r, i, n, a, o;
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
      value: async (s, l) => {
        let u, c;
        if (l ? (u = l, c = s) : (u = s, c = {}), this.currentTransaction)
          return await u(this.currentTransaction);
        let f = null, m;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(w) {
              return console.warn("Transport error encountered during transaction processing", w), !0;
            },
            connectionAckWaitTimeout: ia,
            ...c,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const p = new Dr({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              Lr,
              ...this.exchanges.beforeAsync,
              qt({
                forwardSubscription(w) {
                  const k = { ...w, query: w.query || "" };
                  return {
                    subscribe: (Z) => ({
                      unsubscribe: f.subscribe(k, Z)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          p[zr] = this, m = new Zn(p, f), this.currentTransaction = m, await m.start();
          const h = await u(m);
          return await m.commit(), h;
        } catch (p) {
          try {
            m != null && m.open && await m.rollback();
          } catch (h) {
            h instanceof Si || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw Jt(p) ? new Fr(p) : p;
        } finally {
          await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, l = {}) => {
        var u;
        s = la(s, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == q.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const c = await this._fetchImplementation(s, l);
        if (this.authenticationMode == q.BrowserSession) {
          const f = c.headers.get("x-set-authorization"), m = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          m && this.sessionTokenStore.setItem(this.sessionStorageKey, m);
        }
        return c;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof bt < "u" && bt.fetch ? this._fetchImplementation = bt.fetch.bind(bt) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-793fe4ea.js").then((u) => u.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (i = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && i !== void 0 ? i : Yn, this.websocketsEndpoint = (n = t.websocketsEndpoint) !== null && n !== void 0 ? n : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${oa}-${this.endpoint}`;
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
    t && (t.browserSession ? this.enableSessionMode(t.browserSession) : t.internalAuthToken ? this.authenticationMode = q.InternalAuthToken : t.apiKey ? this.authenticationMode = q.APIKey : t.custom && (this.authenticationMode = q.Custom), this.options.authenticationMode = t), (r = this.authenticationMode) !== null && r !== void 0 || (this.authenticationMode = q.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = q.BrowserSession;
    const r = !t || typeof t == "boolean" ? at.Durable : t.storageType;
    let i;
    r == at.Durable && Mr("localStorage") ? i = window.localStorage : r == at.Session && Mr("sessionStorage") ? i = window.sessionStorage : i = new Xn(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && i.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = i, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), Xt(this.options.endpoint))
      return !!Xt(r);
    const i = new URL(this.options.endpoint).host;
    return r.includes(i);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Lr, ta];
    typeof window < "u" && t.push(yn), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      qt({
        forwardSubscription: (i) => ({
          subscribe: (n) => {
            const a = { ...i, query: i.query || "" };
            return {
              unsubscribe: this.getBaseSubscriptionClient().subscribe(a, n)
            };
          }
        })
      }),
      // another subscription exchange for live queries
      // live queries pass through the same WS client, but use jsondiffs for patching in results
      qt({
        isSubscriptionOperation: (i) => i.query.definitions.some((n) => ca(n)),
        forwardSubscription: (i) => ({
          subscribe: (n) => {
            let a;
            const o = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: s, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: u }) => {
              const c = { ...i, query: i.query || "" };
              return a = s(l(u((f) => this.getBaseSubscriptionClient().subscribe(c, f))), n), a;
            });
            return {
              unsubscribe: () => {
                a ? a() : o.then((s) => s());
              }
            };
          }
        })
      }),
      hn,
      ...this.exchanges.afterAll
    );
    const r = new Dr({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[zr] = this, r;
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
    let r = this.websocketsEndpoint;
    if (t != null && t.urlParams) {
      const i = new URLSearchParams();
      for (const [n, a] of Object.entries(t.urlParams))
        a && i.set(n, a);
      r += "?" + i.toString();
    }
    return Qn({
      url: r,
      webSocketImpl: this.websocketImplementation,
      connectionParams: async () => {
        var i, n;
        const a = { environment: this.environment, auth: { type: this.authenticationMode } };
        return this.authenticationMode == q.APIKey ? a.auth.key = this.options.authenticationMode.apiKey : this.authenticationMode == q.InternalAuthToken ? a.auth.token = this.options.authenticationMode.internalAuthToken : this.authenticationMode == q.BrowserSession ? a.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey) : this.authenticationMode == q.Custom && await ((n = (i = this.options.authenticationMode) === null || i === void 0 ? void 0 : i.custom) === null || n === void 0 ? void 0 : n.processTransactionConnectionParams(a)), a;
      },
      onNonLazyError: () => {
      },
      on: {
        connected: (i, n) => {
          var a, o, s, l, u, c;
          if (this.authenticationMode == q.BrowserSession && (n != null && n.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, n.sessionToken);
          }
          (l = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || l === void 0 || l.call(s, i, n), (c = (u = t == null ? void 0 : t.on) === null || u === void 0 ? void 0 : u.connected) === null || c === void 0 || c.call(u, i, n);
        }
      },
      ...this.subscriptionClientOptions,
      ...t
    });
  }
  requestHeaders() {
    var t;
    const r = {};
    if (this.authenticationMode == q.InternalAuthToken)
      r.authorization = "Basic " + sa("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == q.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == q.BrowserSession) {
      const i = this.sessionTokenStore.getItem(this.sessionStorageKey);
      i && (r.authorization = `Session ${i}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), i = [], n = t.connectionAttempts || ra;
    const a = t.connectionGlobalTimeoutMs || na, o = () => {
      i.forEach((s) => s()), i = [];
    };
    return await new Promise((s, l) => {
      const u = setTimeout(() => {
        this.disposeClient(r), f(new An("Timeout opening websocket connection to Gadget API"));
      }, a), c = (h) => {
        if (Jt(h)) {
          if (h.code == Zt.TooManyRequests)
            return o(), f(new kn(h.reason));
          if (aa.includes(h.code) && n > 0) {
            n -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), p();
            return;
          }
        }
        clearTimeout(u), l(new Fr(h));
      }, f = (h) => {
        clearTimeout(u), l(h);
      }, m = () => {
        clearTimeout(u), s(r);
      }, p = () => {
        o(), i.push(r.on("connected", m)), i.push(r.on("closed", c)), i.push(r.on("error", f));
      };
      p();
    }).finally(o);
  }
  disposeClient(t) {
    const r = t.dispose();
    r && r.catch((i) => console.error(`Error closing SubscriptionClient: ${i.message}`));
  }
  getBaseSubscriptionClient() {
    return this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient;
  }
}
Object.defineProperty(Ii, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.20"
});
function la(e, t) {
  if (typeof e != "string")
    return e;
  if (Xt(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function Xt(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const ua = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, ca = (e) => !!ua(e), dt = `
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
`, Ze = (e) => `
  gadgetMeta {
    hydrations(modelName: "${e}")
  }
`, da = (e) => `
    query InternalFind${pe(e)}($id: GadgetID!, $select: [String!]) {
      ${Ze(e)}
      internal {
        ${e}(id: $id, select: $select)
      }
    }
    `, wi = (e, t) => ({
  search: t != null && t.search ? F({ value: t == null ? void 0 : t.search, type: "String" }) : void 0,
  sort: t != null && t.sort ? F({ value: t == null ? void 0 : t.sort, type: `[${e}Sort!]` }) : void 0,
  filter: t != null && t.filter ? F({ value: t == null ? void 0 : t.filter, type: `[${e}Filter!]` }) : void 0,
  select: t != null && t.select ? F({ value: Ai(t == null ? void 0 : t.select), type: "[String!]" }) : void 0
}), fa = (e, t) => {
  const r = pe(e), i = wi(r, t);
  return Te({
    type: "query",
    name: `InternalFindFirst${r}`,
    fields: {
      internal: {
        [`list${r}`]: _e({
          ...i,
          first: F({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }
    }
  });
}, pa = (e, t) => {
  const r = pe(e), i = wi(r, t);
  return Te({
    type: "query",
    name: `InternalFindMany${r}`,
    fields: {
      internal: {
        [`list${r}`]: _e({
          ...i,
          after: F({ value: t == null ? void 0 : t.after, type: "String" }),
          before: F({ value: t == null ? void 0 : t.before, type: "String" }),
          first: F({ value: t == null ? void 0 : t.first, type: "Int" }),
          last: F({ value: t == null ? void 0 : t.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }
    }
  });
}, ma = (e) => {
  const t = pe(e);
  return `
    ${dt}

    mutation InternalCreate${t}($record: Internal${t}Input) {
      ${Ze(e)}
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
}, ya = (e, t) => {
  const r = pe(e), i = pe(t);
  return `
    ${dt}

    mutation InternalBulkCreate${i}($records: [Internal${r}Input]!) {
      ${Ze(e)}
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
}, ha = (e) => {
  const t = pe(e);
  return `
    ${dt}

    mutation InternalUpdate${t}($id: GadgetID!, $record: Internal${t}Input) {
      ${Ze(e)}
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
}, ba = (e) => {
  const t = pe(e);
  return `
    ${dt}

    mutation InternalDelete${t}($id: GadgetID!) {
      ${Ze(e)}
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
}, ga = (e) => {
  const t = pe(e);
  return `
    ${dt}

    mutation InternalDeleteMany${t}(
      $search: String
      $filter: [${t}Filter!]
    ) {
      ${Ze(e)}
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
class ce {
  constructor(t, r, i) {
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
      value: i
    }), Object.defineProperty(this, "capitalizedApiIdentifier", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = $e(t);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((i) => i === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let i = t;
    if (!this.validateRecord(t))
      throw new Tt(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
  async findOne(t, r, i = !0) {
    const n = await this.connection.currentClient.query(da(this.apiIdentifier), { id: t, select: Ai(r == null ? void 0 : r.select) }).toPromise(), o = (i ? Ie : it)(n, ["internal", this.apiIdentifier]);
    return nt(n, o);
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
    const i = await this.findOne(t, r, !1);
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
    const r = pa(this.apiIdentifier, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise(), n = it(i, ["internal", `list${this.capitalizedApiIdentifier}`]), a = Ot(i, n);
    return lt.boot(this, a, { options: t, pageInfo: n.pageInfo });
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
    const i = fa(this.apiIdentifier, t), n = await this.connection.currentClient.query(i.query, i.variables).toPromise();
    let a;
    r === !1 ? a = it(n, ["internal", `list${this.capitalizedApiIdentifier}`]) : a = Ie(n, ["internal", `list${this.capitalizedApiIdentifier}`], r);
    const o = Ot(n, a);
    return lt.boot(this, o, { options: t, pageInfo: a.pageInfo })[0];
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
    const r = await this.connection.currentClient.mutation(ma(this.apiIdentifier), {
      record: this.getRecordFromData(t, "create")
    }).toPromise(), i = Ee(r, ["internal", `create${this.capitalizedApiIdentifier}`]);
    return nt(r, i[this.apiIdentifier]);
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
      throw new Wt("Cannot perform bulkCreate without a pluralApiIdentifier");
    const i = pe(this.options.pluralApiIdentifier), n = await this.connection.currentClient.mutation(ya(this.apiIdentifier, this.options.pluralApiIdentifier), {
      records: t
    }).toPromise(), a = Ee(n, ["internal", `bulkCreate${i}`]);
    return or(n, a[this.options.pluralApiIdentifier]);
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
    Qt(t, "Can't update a record without an ID passed");
    const i = await this.connection.currentClient.mutation(ha(this.apiIdentifier), {
      id: t,
      record: this.getRecordFromData(r, "update")
    }).toPromise(), n = Ee(i, ["internal", `update${this.capitalizedApiIdentifier}`]);
    return nt(i, n[this.apiIdentifier]);
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
    Qt(t, "Can't delete a record without an ID");
    const r = await this.connection.currentClient.mutation(ba(this.apiIdentifier), { id: t }).toPromise();
    Ee(r, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
    const r = await this.connection.currentClient.mutation(ga(this.apiIdentifier), t).toPromise();
    Ee(r, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
  }
}
function Ai(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, i] of Object.entries(e))
    i && t.push(r);
  return t;
}
const ue = (e, t, r, i) => {
  const n = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of i)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a ? n.prototype[a.functionName] = Object.assign(
          async function(o, s) {
            return await Un(
              this,
              a.operationName,
              a.findByField,
              o,
              r,
              e,
              s
            );
          },
          a
        ) : n.prototype[a.type] = Object.assign(
          async function(o, s) {
            const l = await $r(
              this,
              e,
              o,
              r,
              e,
              s,
              a.type != "maybeFindOne"
            );
            return l.isEmpty() ? null : l;
          },
          a
        );
        break;
      }
      case "findMany": {
        n.prototype.findMany = Object.assign(async function(o) {
          return await Br(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        n.prototype[a.type] = Object.assign(async function(o) {
          const s = await Br(
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
          return (s == null ? void 0 : s[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        n.prototype.get = Object.assign(async function(o) {
          return await $r(this, a.operationName, void 0, r, e, o);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const o = !!a.variables.ids;
          n.prototype[a.functionName] = Object.assign(
            async function(s, l) {
              let u;
              return o ? u = {
                ids: {
                  ...a.variables.ids,
                  value: s
                }
              } : u = {
                inputs: {
                  ...a.variables.inputs,
                  value: s.map(
                    (c) => ki(this[a.singleActionFunctionName], void 0, c)
                  )
                }
              }, await Vr(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !0,
                u,
                l,
                a.namespace,
                a.hasReturnType
              );
            },
            a
          );
        } else {
          const o = !!a.variables.id, s = Object.keys(a.variables).filter((l) => l != "id").length > 0;
          n.prototype[a.functionName] = Object.assign(
            async function(...l) {
              const [u, c] = va(a, o, s, l);
              return await Vr(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !1,
                u,
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
  return n;
};
function ki(e, t, r = {}) {
  var a;
  if (e.hasAmbiguousIdentifier && Object.keys(r).some((o) => {
    var s;
    return !((s = e.paramOnlyVariables) != null && s.includes(o)) && o !== e.modelApiIdentifier;
  }))
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let i;
  const n = Object.entries(e.variables).find(([o, s]) => o === "id" && s.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (e.modelApiIdentifier in r && typeof r[e.modelApiIdentifier] == "object" && r[e.modelApiIdentifier] !== null || !e.variables[e.modelApiIdentifier])
      i = r;
    else {
      i = {
        [e.modelApiIdentifier]: {}
      };
      for (const [o, s] of Object.entries(r))
        (a = e.paramOnlyVariables) != null && a.includes(o) ? i[o] = s : n && o === n[0] ? i.id = s : i[e.modelApiIdentifier][o] = s;
    }
  else
    i = r;
  return i.id ?? (i.id = t), i;
}
function va(e, t, r, i) {
  let n, a;
  t && (n = i.shift()), r && (a = i.shift());
  const o = i.shift();
  let s = a;
  (n || a) && (s = ki(e, n, a));
  const l = {};
  for (const [u, c] of Object.entries(e.variables))
    l[u] = {
      value: u == "id" ? n : s == null ? void 0 : s[u],
      ...c
    };
  return [l, o];
}
const ne = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, C = "user", Ae = "users", Sa = ue(
  C,
  Ae,
  ne,
  [
    {
      type: "findOne",
      operationName: C,
      modelApiIdentifier: C,
      findByVariableName: "id",
      defaultSelection: ne
    },
    {
      type: "maybeFindOne",
      operationName: C,
      modelApiIdentifier: C,
      findByVariableName: "id",
      defaultSelection: ne
    },
    {
      type: "findMany",
      operationName: Ae,
      modelApiIdentifier: C,
      defaultSelection: ne
    },
    {
      type: "findFirst",
      operationName: Ae,
      modelApiIdentifier: C,
      defaultSelection: ne
    },
    {
      type: "maybeFindFirst",
      operationName: Ae,
      modelApiIdentifier: C,
      defaultSelection: ne
    },
    {
      type: "findOne",
      operationName: Ae,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: C,
      defaultSelection: ne
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: C,
      modelSelectionField: C,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ne
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
      modelApiIdentifier: C,
      modelSelectionField: Ae,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: ne
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: C,
      modelSelectionField: C,
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
      defaultSelection: ne
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
      modelApiIdentifier: C,
      modelSelectionField: Ae,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: ne
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: C,
      modelSelectionField: C,
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
      modelApiIdentifier: C,
      modelSelectionField: Ae,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: C,
      modelSelectionField: C,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ne
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
      modelApiIdentifier: C,
      modelSelectionField: Ae,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: ne
    }
  ]
), ye = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, X = "session", Ge = "sessions", Ia = ue(
  X,
  Ge,
  ye,
  [
    {
      type: "findOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: ye
    },
    {
      type: "maybeFindOne",
      operationName: X,
      modelApiIdentifier: X,
      findByVariableName: "id",
      defaultSelection: ye
    },
    {
      type: "findMany",
      operationName: Ge,
      modelApiIdentifier: X,
      defaultSelection: ye
    },
    {
      type: "findFirst",
      operationName: Ge,
      modelApiIdentifier: X,
      defaultSelection: ye
    },
    {
      type: "maybeFindFirst",
      operationName: Ge,
      modelApiIdentifier: X,
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: X,
      modelSelectionField: X,
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
      defaultSelection: ye
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
      modelApiIdentifier: X,
      modelSelectionField: Ge,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: ye
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: X,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ye
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
      modelApiIdentifier: X,
      modelSelectionField: Ge,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: ye
    }
  ]
), he = {
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
}, L = "shopifyProduct", De = "shopifyProducts", wa = ue(
  L,
  De,
  he,
  [
    {
      type: "findOne",
      operationName: L,
      modelApiIdentifier: L,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "maybeFindOne",
      operationName: L,
      modelApiIdentifier: L,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "findMany",
      operationName: De,
      modelApiIdentifier: L,
      defaultSelection: he
    },
    {
      type: "findFirst",
      operationName: De,
      modelApiIdentifier: L,
      defaultSelection: he
    },
    {
      type: "maybeFindFirst",
      operationName: De,
      modelApiIdentifier: L,
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
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
      defaultSelection: he
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
      modelApiIdentifier: L,
      modelSelectionField: De,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: L,
      modelSelectionField: L,
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
      defaultSelection: he
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
      modelApiIdentifier: L,
      modelSelectionField: De,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: he
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: L,
      modelSelectionField: De,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), be = {
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
}, z = "shopifyProductImage", Fe = "shopifyProductImages", Aa = ue(
  z,
  Fe,
  be,
  [
    {
      type: "findOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "maybeFindOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: be
    },
    {
      type: "findMany",
      operationName: Fe,
      modelApiIdentifier: z,
      defaultSelection: be
    },
    {
      type: "findFirst",
      operationName: Fe,
      modelApiIdentifier: z,
      defaultSelection: be
    },
    {
      type: "maybeFindFirst",
      operationName: Fe,
      modelApiIdentifier: z,
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      defaultSelection: be
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
      modelApiIdentifier: z,
      modelSelectionField: Fe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      defaultSelection: be
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
      modelApiIdentifier: z,
      modelSelectionField: Fe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: be
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      modelApiIdentifier: z,
      modelSelectionField: Fe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ge = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, K = "shopifyProductOption", xe = "shopifyProductOptions", ka = ue(
  K,
  xe,
  ge,
  [
    {
      type: "findOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "maybeFindOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: ge
    },
    {
      type: "findMany",
      operationName: xe,
      modelApiIdentifier: K,
      defaultSelection: ge
    },
    {
      type: "findFirst",
      operationName: xe,
      modelApiIdentifier: K,
      defaultSelection: ge
    },
    {
      type: "maybeFindFirst",
      operationName: xe,
      modelApiIdentifier: K,
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
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
      defaultSelection: ge
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
      modelApiIdentifier: K,
      modelSelectionField: xe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
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
      defaultSelection: ge
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
      modelApiIdentifier: K,
      modelSelectionField: xe,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: ge
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: K,
      modelSelectionField: K,
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
      modelApiIdentifier: K,
      modelSelectionField: xe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ve = {
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
}, W = "shopifyProductVariant", Me = "shopifyProductVariants", Na = ue(
  W,
  Me,
  ve,
  [
    {
      type: "findOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "maybeFindOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "findMany",
      operationName: Me,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "findFirst",
      operationName: Me,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "maybeFindFirst",
      operationName: Me,
      modelApiIdentifier: W,
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      defaultSelection: ve
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
      modelApiIdentifier: W,
      modelSelectionField: Me,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      defaultSelection: ve
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
      modelApiIdentifier: W,
      modelSelectionField: Me,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      modelApiIdentifier: W,
      modelSelectionField: Me,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ee = {
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
}, P = "shopifyShop", ke = "shopifyShops", Oa = ue(
  P,
  ke,
  ee,
  [
    {
      type: "findOne",
      operationName: P,
      modelApiIdentifier: P,
      findByVariableName: "id",
      defaultSelection: ee
    },
    {
      type: "maybeFindOne",
      operationName: P,
      modelApiIdentifier: P,
      findByVariableName: "id",
      defaultSelection: ee
    },
    {
      type: "findMany",
      operationName: ke,
      modelApiIdentifier: P,
      defaultSelection: ee
    },
    {
      type: "findFirst",
      operationName: ke,
      modelApiIdentifier: P,
      defaultSelection: ee
    },
    {
      type: "maybeFindFirst",
      operationName: ke,
      modelApiIdentifier: P,
      defaultSelection: ee
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: P,
      modelSelectionField: P,
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
      defaultSelection: ee
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
      modelApiIdentifier: P,
      modelSelectionField: ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: ee
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: P,
      modelSelectionField: P,
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
      defaultSelection: ee
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
      modelApiIdentifier: P,
      modelSelectionField: ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: ee
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: P,
      modelSelectionField: P,
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
      modelApiIdentifier: P,
      modelSelectionField: ke,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: P,
      modelSelectionField: P,
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
      defaultSelection: ee
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
      modelApiIdentifier: P,
      modelSelectionField: ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: ee
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: P,
      modelSelectionField: P,
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
      defaultSelection: ee
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
      modelApiIdentifier: P,
      modelSelectionField: ke,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: ee
    }
  ]
), Se = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, Q = "productPairing", qe = "productPairings", Pa = ue(
  Q,
  qe,
  Se,
  [
    {
      type: "findOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "maybeFindOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "findMany",
      operationName: qe,
      modelApiIdentifier: Q,
      defaultSelection: Se
    },
    {
      type: "findFirst",
      operationName: qe,
      modelApiIdentifier: Q,
      defaultSelection: Se
    },
    {
      type: "maybeFindFirst",
      operationName: qe,
      modelApiIdentifier: Q,
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      defaultSelection: Se
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
      modelApiIdentifier: Q,
      modelSelectionField: qe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      defaultSelection: Se
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
      modelApiIdentifier: Q,
      modelSelectionField: qe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      modelApiIdentifier: Q,
      modelSelectionField: qe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ae = {
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
}, $ = "shopifySync", Ne = "shopifySyncs", Ea = ue(
  $,
  Ne,
  ae,
  [
    {
      type: "findOne",
      operationName: $,
      modelApiIdentifier: $,
      findByVariableName: "id",
      defaultSelection: ae
    },
    {
      type: "maybeFindOne",
      operationName: $,
      modelApiIdentifier: $,
      findByVariableName: "id",
      defaultSelection: ae
    },
    {
      type: "findMany",
      operationName: Ne,
      modelApiIdentifier: $,
      defaultSelection: ae
    },
    {
      type: "findFirst",
      operationName: Ne,
      modelApiIdentifier: $,
      defaultSelection: ae
    },
    {
      type: "maybeFindFirst",
      operationName: Ne,
      modelApiIdentifier: $,
      defaultSelection: ae
    },
    {
      type: "findOne",
      operationName: Ne,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: $,
      defaultSelection: ae
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
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
      defaultSelection: ae
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
      modelApiIdentifier: $,
      modelSelectionField: Ne,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: ae
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
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
      defaultSelection: ae
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
      modelApiIdentifier: $,
      modelSelectionField: Ne,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: ae
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
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
      defaultSelection: ae
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
      modelApiIdentifier: $,
      modelSelectionField: Ne,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: ae
    }
  ]
), de = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, B = "ambiguous", Oe = "ambiguouss", _a = ue(
  B,
  Oe,
  de,
  [
    {
      type: "findOne",
      operationName: B,
      modelApiIdentifier: B,
      findByVariableName: "id",
      defaultSelection: de
    },
    {
      type: "maybeFindOne",
      operationName: B,
      modelApiIdentifier: B,
      findByVariableName: "id",
      defaultSelection: de
    },
    {
      type: "findMany",
      operationName: Oe,
      modelApiIdentifier: B,
      defaultSelection: de
    },
    {
      type: "findFirst",
      operationName: Oe,
      modelApiIdentifier: B,
      defaultSelection: de
    },
    {
      type: "maybeFindFirst",
      operationName: Oe,
      modelApiIdentifier: B,
      defaultSelection: de
    },
    {
      type: "findOne",
      operationName: Oe,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: B,
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: de
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
      modelApiIdentifier: B,
      modelSelectionField: Oe,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
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
      defaultSelection: de
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
      modelApiIdentifier: B,
      modelSelectionField: Oe,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: de
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
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
      modelApiIdentifier: B,
      modelSelectionField: Oe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), fe = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, V = "unambiguous", Pe = "unambiguouss", Ta = ue(
  V,
  Pe,
  fe,
  [
    {
      type: "findOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: fe
    },
    {
      type: "maybeFindOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: fe
    },
    {
      type: "findMany",
      operationName: Pe,
      modelApiIdentifier: V,
      defaultSelection: fe
    },
    {
      type: "findFirst",
      operationName: Pe,
      modelApiIdentifier: V,
      defaultSelection: fe
    },
    {
      type: "maybeFindFirst",
      operationName: Pe,
      modelApiIdentifier: V,
      defaultSelection: fe
    },
    {
      type: "findOne",
      operationName: Pe,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: V,
      defaultSelection: fe
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
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
      defaultSelection: fe
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
      modelApiIdentifier: V,
      modelSelectionField: Pe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: fe
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: V,
      modelSelectionField: V,
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
      defaultSelection: fe
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
      modelApiIdentifier: V,
      modelSelectionField: Pe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: fe
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
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
      operationName: "bulkDeleteUnambiguous",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: V,
      modelSelectionField: Pe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Kr = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, Wr = "session", Ca = "sessions", Da = ue(
  Wr,
  Ca,
  Kr,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: Kr,
      modelApiIdentifier: Wr
    }
  ]
);
var Ni;
const Qr = "production", Fa = "development", xa = Symbol.for("gadget/modelRelationships"), Ma = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class qa {
  constructor(t) {
    var n;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Ni] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await Ur(
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
      async () => await Ur(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Ma() ?? Fa).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == Qr ? "" : `--${this.environment}`}.gadget.app`;
    const i = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== Qr) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return nr(
          l,
          We((u) => {
            try {
              if (typeof window < "u" && typeof CustomEvent == "function") {
                const c = new CustomEvent("gadget:devharness:graphqlresult", { detail: u });
                window.dispatchEvent(c);
              }
            } catch (c) {
              console.warn("[gadget] error dispatching gadget dev harness event", c);
            }
            return u;
          })
        );
      };
      i.beforeAll = [
        a,
        ...i.beforeAll ?? []
      ];
    }
    if (this.connection = new Ii({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: i,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == q.APIKey && !((n = t == null ? void 0 : t.authenticationMode) != null && n.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Sa(this.connection), this.session = new Ia(this.connection), this.shopifyProduct = new wa(this.connection), this.shopifyProductImage = new Aa(this.connection), this.shopifyProductOption = new ka(this.connection), this.shopifyProductVariant = new Na(this.connection), this.shopifyShop = new Oa(this.connection), this.productPairing = new Pa(this.connection), this.shopifySync = new Ea(this.connection), this.ambiguous = new _a(this.connection), this.unambiguous = new Ta(this.connection), this.currentSession = new Da(this.connection), this.internal = {
      user: new ce("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new ce("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new ce("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new ce("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new ce("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new ce("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new ce("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new ce("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new ce("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new ce("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new ce("unambiguous", this.connection, {
        pluralApiIdentifier: "unambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(t, r, i) {
    const { data: n, error: a } = await this.connection.currentClient.query(t, r, i).toPromise();
    if (a)
      throw a;
    return n;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(t, r, i) {
    const { data: n, error: a } = await this.connection.currentClient.mutation(t, r, i).toPromise();
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
  async enqueue(t, r, i) {
    Qt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let n, a;
    return typeof i < "u" ? (n = r, a = i) : !t.variables || Object.keys(t.variables).length == 0 ? (n = {}, a = r) : (typeof r == "string" ? n = { id: r } : n = r, a = {}), await Gn(this.connection, t, n, a);
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
    return new vt(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Ni = xa;
const ja = new qa(), $a = async () => {
  await ja.shopifyProduct.findMany();
};
export {
  $a as read
};
