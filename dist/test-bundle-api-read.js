var ur = () => {
}, ae = ur;
function ge(e) {
  return {
    tag: 0,
    0: e
  };
}
function ht(e) {
  return {
    tag: 1,
    0: e
  };
}
var Gi = (e) => e;
function _(e) {
  return (t) => (r) => {
    var i = ae;
    t((n) => {
      n === 0 ? r(0) : n.tag === 0 ? (i = n[0], r(n)) : e(n[0]) ? r(n) : i(0);
    });
  };
}
function et(e) {
  return (t) => (r) => t((i) => {
    i === 0 || i.tag === 0 ? r(i) : r(ht(e(i[0])));
  });
}
function pt(e) {
  return (t) => (r) => {
    var i = [], n = ae, a = !1, o = !1;
    t((s) => {
      o || (s === 0 ? (o = !0, i.length || r(0)) : s.tag === 0 ? n = s[0] : (a = !1, function(c) {
        var u = ae;
        c((f) => {
          if (f === 0) {
            if (i.length) {
              var p = i.indexOf(u);
              p > -1 && (i = i.slice()).splice(p, 1), i.length || (o ? r(0) : a || (a = !0, n(0)));
            }
          } else
            f.tag === 0 ? (i.push(u = f[0]), u(0)) : i.length && (r(f), u(0));
        });
      }(e(s[0])), a || (a = !0, n(0))));
    }), r(ge((s) => {
      if (s === 1) {
        o || (o = !0, n(1));
        for (var l = 0, c = i, u = i.length; l < u; l++)
          c[l](1);
        i.length = 0;
      } else {
        !o && !a ? (a = !0, n(0)) : a = !1;
        for (var f = 0, p = i, y = i.length; f < y; f++)
          p[f](0);
      }
    }));
  };
}
function Li(e) {
  return pt(Gi)(e);
}
function tt(e) {
  return Li(Qi(e));
}
function si(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0), e();
        else if (n.tag === 0) {
          var a = n[0];
          r(ge((o) => {
            o === 1 ? (i = !0, a(1), e()) : a(o);
          }));
        } else
          r(n);
    });
  };
}
function jt(e) {
  return (t) => (r) => {
    var i = !1;
    t((n) => {
      if (!i)
        if (n === 0)
          i = !0, r(0);
        else if (n.tag === 0) {
          var a = n[0];
          r(ge((o) => {
            o === 1 && (i = !0), a(o);
          }));
        } else
          e(n[0]), r(n);
    });
  };
}
function Er(e) {
  return (t) => (r) => t((i) => {
    i === 0 ? r(0) : i.tag === 0 ? (r(i), e()) : r(i);
  });
}
function yt(e) {
  var t = [], r = ae, i = !1;
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
        for (var c = 0, u = t, f = t.length; c < f; c++)
          u[c](a);
      }
    }), n(ge((a) => {
      if (a === 1) {
        var o = t.indexOf(n);
        o > -1 && (t = t.slice()).splice(o, 1), t.length || r(1);
      } else
        i || (i = !0, r(0));
    }));
  };
}
function Tr(e) {
  return (t) => (r) => {
    var i = ae, n = ae, a = !1, o = !1, s = !1, l = !1;
    t((c) => {
      l || (c === 0 ? (l = !0, s || r(0)) : c.tag === 0 ? i = c[0] : (s && (n(1), n = ae), a ? a = !1 : (a = !0, i(0)), function(f) {
        s = !0, f((p) => {
          s && (p === 0 ? (s = !1, l ? r(0) : a || (a = !0, i(0))) : p.tag === 0 ? (o = !1, (n = p[0])(0)) : (r(p), o ? o = !1 : n(0)));
        });
      }(e(c[0]))));
    }), r(ge((c) => {
      c === 1 ? (l || (l = !0, i(1)), s && (s = !1, n(1))) : (!l && !a && (a = !0, i(0)), s && !o && (o = !0, n(0)));
    }));
  };
}
function qt(e) {
  return (t) => (r) => {
    var i = ae, n = !1, a = 0;
    t((o) => {
      n || (o === 0 ? (n = !0, r(0)) : o.tag === 0 ? e <= 0 ? (n = !0, r(0), o[0](1)) : i = o[0] : a++ < e ? (r(o), !n && a >= e && (n = !0, r(0), i(1))) : r(o));
    }), r(ge((o) => {
      o === 1 && !n ? (n = !0, i(1)) : o === 0 && !n && a < e && i(0);
    }));
  };
}
function cr(e) {
  return (t) => (r) => {
    var i = ae, n = ae, a = !1;
    t((o) => {
      a || (o === 0 ? (a = !0, n(1), r(0)) : o.tag === 0 ? (i = o[0], e((s) => {
        s === 0 || (s.tag === 0 ? (n = s[0])(0) : (a = !0, n(1), i(1), r(0)));
      })) : r(o));
    }), r(ge((o) => {
      o === 1 && !a ? (a = !0, i(1), n(1)) : a || i(0);
    }));
  };
}
function zi(e, t) {
  return (r) => (i) => {
    var n = ae, a = !1;
    r((o) => {
      a || (o === 0 ? (a = !0, i(0)) : o.tag === 0 ? (n = o[0], i(o)) : e(o[0]) ? i(o) : (a = !0, t && i(o), i(0), n(1)));
    });
  };
}
function Wi(e) {
  return (t) => e()(t);
}
function li(e) {
  return (t) => {
    var r = e[Symbol.asyncIterator](), i = !1, n = !1, a = !1, o;
    t(ge(async (s) => {
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
              a = !1, t(ht(o.value));
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
function Ki(e) {
  return e[Symbol.asyncIterator] ? li(e) : (t) => {
    var r = e[Symbol.iterator](), i = !1, n = !1, a = !1, o;
    t(ge((s) => {
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
              a = !1, t(ht(o.value));
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
var Qi = Ki;
function ut(e) {
  return (t) => {
    var r = !1;
    t(ge((i) => {
      i === 1 ? r = !0 : r || (r = !0, t(ht(e)), t(0));
    }));
  };
}
function dr(e) {
  return (t) => {
    var r = !1, i = e({
      next(n) {
        r || t(ht(n));
      },
      complete() {
        r || (r = !0, t(0));
      }
    });
    t(ge((n) => {
      n === 1 && !r && (r = !0, i());
    }));
  };
}
function Cr() {
  var e, t;
  return {
    source: yt(dr((r) => (e = r.next, t = r.complete, ur))),
    next(r) {
      e && e(r);
    },
    complete() {
      t && t();
    }
  };
}
function Dr(e) {
  return dr((t) => (e.then((r) => {
    Promise.resolve(r).then(() => {
      t.next(r), t.complete();
    });
  }), ur));
}
function Pt(e) {
  return (t) => {
    var r = ae, i = !1;
    return t((n) => {
      n === 0 ? i = !0 : n.tag === 0 ? (r = n[0])(0) : i || (e(n[0]), r(0));
    }), {
      unsubscribe() {
        i || (i = !0, r(1));
      }
    };
  };
}
function Ji(e) {
  Pt((t) => {
  })(e);
}
var Vt = {
  done: !0
}, Hi = (e) => ({
  [Symbol.asyncIterator]() {
    var t = [], r = !1, i = ae, n;
    return e((a) => {
      r || (a === 0 ? (n && (n = n(Vt)), r = !0) : a.tag === 0 ? (i = a[0])(0) : n ? n = n({
        value: a[0],
        done: !1
      }) : t.push(a[0]));
    }), {
      async next() {
        return r && !t.length ? Vt : (!r && t.length <= 1 && i(0), t.length ? {
          value: t.shift(),
          done: !1
        } : new Promise((a) => n = a));
      },
      async return() {
        return r || (n = i(1)), r = !0, Vt;
      }
    };
  }
});
function fr(e) {
  return new Promise((t) => {
    var r = ae, i;
    e((n) => {
      n === 0 ? Promise.resolve(i).then(t) : n.tag === 0 ? (r = n[0])(0) : (i = n[0], r(0));
    });
  });
}
var pr = (...e) => {
  for (var t = e[0], r = 1, i = e.length; r < i; r++)
    t = e[r](t);
  return t;
}, Xe = {
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
class Wt extends Error {
  constructor(t, r, i, n, a, o, s) {
    super(t), this.name = "GraphQLError", this.message = t, a && (this.path = a), r && (this.nodes = Array.isArray(r) ? r : [r]), i && (this.source = i), n && (this.positions = n), o && (this.originalError = o);
    var l = s;
    if (!l && o) {
      var c = o.extensions;
      c && typeof c == "object" && (l = c);
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
var P, g;
function M(e) {
  return new Wt(`Syntax Error: Unexpected token at ${g} in ${e}`);
}
function ue(e) {
  if (e.lastIndex = g, e.test(P))
    return P.slice(g, g = e.lastIndex);
}
var It = / +(?=[^\s])/y;
function Yi(e) {
  for (var t = e.split(`
`), r = "", i = 0, n = 0, a = t.length - 1, o = 0; o < t.length; o++)
    It.lastIndex = 0, It.test(t[o]) && (o && (!i || It.lastIndex < i) && (i = It.lastIndex), n = n || o, a = o);
  for (var s = n; s <= a; s++)
    s !== n && (r += `
`), r += t[s].slice(i).replace(/\\"""/g, '"""');
  return r;
}
function v() {
  for (var e = 0 | P.charCodeAt(g++); e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279; e = 0 | P.charCodeAt(g++))
    if (e === 35)
      for (; (e = P.charCodeAt(g++)) !== 10 && e !== 13; )
        ;
  g--;
}
var ui = /[_A-Za-z]\w*/y;
function Oe() {
  var e;
  if (e = ue(ui))
    return {
      kind: "Name",
      value: e
    };
}
var Zi = /(?:null|true|false)/y, ci = /\$[_A-Za-z]\w*/y, Xi = /-?\d+/y, en = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y, tn = /\\/g, rn = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y, nn = /"(?:"|[^\r\n]*?[^\\]")/y;
function Et(e) {
  var t, r;
  if (r = ue(Zi))
    t = r === "null" ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: r === "true"
    };
  else if (!e && (r = ue(ci)))
    t = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: r.slice(1)
      }
    };
  else if (r = ue(Xi)) {
    var i = r;
    (r = ue(en)) ? t = {
      kind: "FloatValue",
      value: i + r
    } : t = {
      kind: "IntValue",
      value: i
    };
  } else if (r = ue(ui))
    t = {
      kind: "EnumValue",
      value: r
    };
  else if (r = ue(rn))
    t = {
      kind: "StringValue",
      value: Yi(r.slice(3, -3)),
      block: !0
    };
  else if (r = ue(nn))
    t = {
      kind: "StringValue",
      value: tn.test(r) ? JSON.parse(r) : r.slice(1, -1),
      block: !1
    };
  else if (t = function(a) {
    var o;
    if (P.charCodeAt(g) === 91) {
      g++, v();
      for (var s = []; o = Et(a); )
        s.push(o);
      if (P.charCodeAt(g++) !== 93)
        throw M("ListValue");
      return v(), {
        kind: "ListValue",
        values: s
      };
    }
  }(e) || function(a) {
    if (P.charCodeAt(g) === 123) {
      g++, v();
      for (var o = [], s; s = Oe(); ) {
        if (v(), P.charCodeAt(g++) !== 58)
          throw M("ObjectField");
        v();
        var l = Et(a);
        if (!l)
          throw M("ObjectField");
        o.push({
          kind: "ObjectField",
          name: s,
          value: l
        });
      }
      if (P.charCodeAt(g++) !== 125)
        throw M("ObjectValue");
      return v(), {
        kind: "ObjectValue",
        fields: o
      };
    }
  }(e))
    return t;
  return v(), t;
}
function di(e) {
  var t = [];
  if (v(), P.charCodeAt(g) === 40) {
    g++, v();
    for (var r; r = Oe(); ) {
      if (v(), P.charCodeAt(g++) !== 58)
        throw M("Argument");
      v();
      var i = Et(e);
      if (!i)
        throw M("Argument");
      t.push({
        kind: "Argument",
        name: r,
        value: i
      });
    }
    if (!t.length || P.charCodeAt(g++) !== 41)
      throw M("Argument");
    v();
  }
  return t;
}
function rt(e) {
  var t = [];
  for (v(); P.charCodeAt(g) === 64; ) {
    g++;
    var r = Oe();
    if (!r)
      throw M("Directive");
    v(), t.push({
      kind: "Directive",
      name: r,
      arguments: di(e)
    });
  }
  return t;
}
function an() {
  var e = Oe();
  if (e) {
    v();
    var t;
    if (P.charCodeAt(g) === 58) {
      if (g++, v(), t = e, !(e = Oe()))
        throw M("Field");
      v();
    }
    return {
      kind: "Field",
      alias: t,
      name: e,
      arguments: di(!1),
      directives: rt(!1),
      selectionSet: _t()
    };
  }
}
function fi() {
  var e;
  if (v(), P.charCodeAt(g) === 91) {
    g++, v();
    var t = fi();
    if (!t || P.charCodeAt(g++) !== 93)
      throw M("ListType");
    e = {
      kind: "ListType",
      type: t
    };
  } else if (e = Oe())
    e = {
      kind: "NamedType",
      name: e
    };
  else
    throw M("NamedType");
  return v(), P.charCodeAt(g) === 33 ? (g++, v(), {
    kind: "NonNullType",
    type: e
  }) : e;
}
var on = /on/y;
function pi() {
  if (ue(on)) {
    v();
    var e = Oe();
    if (!e)
      throw M("NamedType");
    return v(), {
      kind: "NamedType",
      name: e
    };
  }
}
var sn = /\.\.\./y;
function ln() {
  if (ue(sn)) {
    v();
    var e = g, t;
    if ((t = Oe()) && t.value !== "on")
      return {
        kind: "FragmentSpread",
        name: t,
        directives: rt(!1)
      };
    g = e;
    var r = pi(), i = rt(!1), n = _t();
    if (!n)
      throw M("InlineFragment");
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
  if (v(), P.charCodeAt(g) === 123) {
    g++, v();
    for (var t = []; e = ln() || an(); )
      t.push(e);
    if (!t.length || P.charCodeAt(g++) !== 125)
      throw M("SelectionSet");
    return v(), {
      kind: "SelectionSet",
      selections: t
    };
  }
}
var un = /fragment/y;
function cn() {
  if (ue(un)) {
    v();
    var e = Oe();
    if (!e)
      throw M("FragmentDefinition");
    v();
    var t = pi();
    if (!t)
      throw M("FragmentDefinition");
    var r = rt(!1), i = _t();
    if (!i)
      throw M("FragmentDefinition");
    return {
      kind: "FragmentDefinition",
      name: e,
      typeCondition: t,
      directives: r,
      selectionSet: i
    };
  }
}
var dn = /(?:query|mutation|subscription)/y;
function fn() {
  var e, t, r = [], i = [];
  (e = ue(dn)) && (v(), t = Oe(), r = function() {
    var o, s = [];
    if (v(), P.charCodeAt(g) === 40) {
      for (g++, v(); o = ue(ci); ) {
        if (v(), P.charCodeAt(g++) !== 58)
          throw M("VariableDefinition");
        var l = fi(), c = void 0;
        if (P.charCodeAt(g) === 61 && (g++, v(), !(c = Et(!0))))
          throw M("VariableDefinition");
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
          defaultValue: c,
          directives: rt(!0)
        });
      }
      if (P.charCodeAt(g++) !== 41)
        throw M("VariableDefinition");
      v();
    }
    return s;
  }(), i = rt(!1));
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
function pn(e, t) {
  return P = typeof e.body == "string" ? e.body : e, g = 0, function() {
    var i;
    v();
    for (var n = []; i = cn() || fn(); )
      n.push(i);
    return {
      kind: "Document",
      definitions: n
    };
  }();
}
function yn(e) {
  return JSON.stringify(e);
}
function mn(e) {
  return `"""
` + e.replace(/"""/g, '\\"""') + `
"""`;
}
var de = (e) => !(!e || !e.length), H = {
  OperationDefinition(e) {
    if (e.operation === "query" && !e.name && !de(e.variableDefinitions) && !de(e.directives))
      return H.SelectionSet(e.selectionSet);
    var t = e.operation;
    return e.name && (t += " " + e.name.value), de(e.variableDefinitions) && (e.name || (t += " "), t += "(" + e.variableDefinitions.map(H.VariableDefinition).join(", ") + ")"), de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), t + " " + H.SelectionSet(e.selectionSet);
  },
  VariableDefinition(e) {
    var t = H.Variable(e.variable) + ": " + fe(e.type);
    return e.defaultValue && (t += " = " + fe(e.defaultValue)), de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), t;
  },
  Field(e) {
    var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
    if (de(e.arguments)) {
      var r = e.arguments.map(H.Argument), i = t + "(" + r.join(", ") + ")";
      t = i.length > 80 ? t + `(
  ` + r.join(`
`).replace(/\n/g, `
  `) + `
)` : i;
    }
    return de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), e.selectionSet ? t + " " + H.SelectionSet(e.selectionSet) : t;
  },
  StringValue: (e) => e.block ? mn(e.value) : yn(e.value),
  BooleanValue: (e) => "" + e.value,
  NullValue: (e) => "null",
  IntValue: (e) => e.value,
  FloatValue: (e) => e.value,
  EnumValue: (e) => e.value,
  Name: (e) => e.value,
  Variable: (e) => "$" + e.name.value,
  ListValue: (e) => "[" + e.values.map(fe).join(", ") + "]",
  ObjectValue: (e) => "{" + e.fields.map(H.ObjectField).join(", ") + "}",
  ObjectField: (e) => e.name.value + ": " + fe(e.value),
  Document: (e) => de(e.definitions) ? e.definitions.map(fe).join(`

`) : "",
  SelectionSet: (e) => `{
  ` + e.selections.map(fe).join(`
`).replace(/\n/g, `
  `) + `
}`,
  Argument: (e) => e.name.value + ": " + fe(e.value),
  FragmentSpread(e) {
    var t = "..." + e.name.value;
    return de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), t;
  },
  InlineFragment(e) {
    var t = "...";
    return e.typeCondition && (t += " on " + e.typeCondition.name.value), de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), t + " " + fe(e.selectionSet);
  },
  FragmentDefinition(e) {
    var t = "fragment " + e.name.value;
    return t += " on " + e.typeCondition.name.value, de(e.directives) && (t += " " + e.directives.map(H.Directive).join(" ")), t + " " + fe(e.selectionSet);
  },
  Directive(e) {
    var t = "@" + e.name.value;
    return de(e.arguments) && (t += "(" + e.arguments.map(H.Argument).join(", ") + ")"), t;
  },
  NamedType: (e) => e.name.value,
  ListType: (e) => "[" + fe(e.type) + "]",
  NonNullType: (e) => fe(e.type) + "!"
};
function fe(e) {
  return H[e.kind] ? H[e.kind](e) : "";
}
var hn = (e) => e && e.message && (e.extensions || e.name === "GraphQLError") ? e : typeof e == "object" && e.message ? new Wt(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : new Wt(e);
class bt extends Error {
  constructor(t) {
    var r = (t.graphQLErrors || []).map(hn), i = ((n, a) => {
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
var Kt = (e, t) => {
  for (var r = 0 | (t || 5381), i = 0, n = 0 | e.length; i < n; i++)
    r = (r << 5) + r + e.charCodeAt(i);
  return r;
}, Le = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new WeakMap(), Ye = (e) => {
  if (e === null || Le.has(e))
    return "null";
  if (typeof e != "object")
    return JSON.stringify(e) || "";
  if (e.toJSON)
    return Ye(e.toJSON());
  if (Array.isArray(e)) {
    var t = "[";
    for (var r of e)
      t.length > 1 && (t += ","), t += Ye(r) || "null";
    return t += "]";
  } else if (Ct !== it && e instanceof Ct || Dt !== it && e instanceof Dt)
    return "null";
  var i = Object.keys(e).sort();
  if (!i.length && e.constructor && e.constructor !== Object) {
    var n = Fr.get(e) || Math.random().toString(36).slice(2);
    return Fr.set(e, n), Ye({
      __key: n
    });
  }
  Le.add(e);
  var a = "{";
  for (var o of i) {
    var s = Ye(e[o]);
    s && (a.length > 1 && (a += ","), a += Ye(o) + ":" + s);
  }
  return Le.delete(e), a += "}";
}, Qt = (e, t, r) => {
  if (!(r == null || typeof r != "object" || r.toJSON || Le.has(r)))
    if (Array.isArray(r))
      for (var i = 0, n = r.length; i < n; i++)
        Qt(e, `${t}.${i}`, r[i]);
    else if (r instanceof Ct || r instanceof Dt)
      e.set(t, r);
    else {
      Le.add(r);
      for (var a of Object.keys(r))
        Qt(e, `${t}.${a}`, r[a]);
    }
}, Tt = (e) => (Le.clear(), Ye(e));
class it {
}
var Ct = typeof File < "u" ? File : it, Dt = typeof Blob < "u" ? Blob : it, bn = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g, gn = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g, vn = (e, t) => t % 2 == 0 ? e.replace(gn, `
`) : e, xr = (e) => e.split(bn).map(vn).join("").trim(), Mr = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), yr = (e) => {
  var t;
  return typeof e == "string" ? t = xr(e) : e.loc && Nt.get(e.__key) === e ? t = e.loc.source.body : (t = Mr.get(e) || xr(fe(e)), Mr.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
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
}, jr = (e) => {
  var t = Kt(yr(e));
  if (e.definitions) {
    var r = mi(e);
    r && (t = Kt(`
# ${r}`, t));
  }
  return t;
}, yi = (e) => {
  var t, r;
  return typeof e == "string" ? (t = jr(e), r = Nt.get(t) || pn(e)) : (t = e.__key || jr(e), r = Nt.get(t) || e), r.loc || yr(r), r.__key = t, Nt.set(t, r), r;
}, Ut = (e, t, r) => {
  var i = t || {}, n = yi(e), a = Tt(i), o = n.__key;
  return a !== "{}" && (o = Kt(a, o)), {
    key: o,
    query: n,
    variables: i,
    extensions: r
  };
}, mi = (e) => {
  for (var t of e.definitions)
    if (t.kind === Xe.OPERATION_DEFINITION)
      return t.name ? t.name.value : void 0;
}, Sn = (e) => {
  for (var t of e.definitions)
    if (t.kind === Xe.OPERATION_DEFINITION)
      return t.operation;
}, Jt = (e, t, r) => {
  if (!("data" in t) && !("errors" in t))
    throw new Error("No Content");
  var i = e.kind === "subscription";
  return {
    operation: e,
    data: t.data,
    error: Array.isArray(t.errors) ? new bt({
      graphQLErrors: t.errors,
      response: r
    }) : void 0,
    extensions: t.extensions ? {
      ...t.extensions
    } : void 0,
    hasNext: t.hasNext == null ? i : t.hasNext,
    stale: !1
  };
}, Ht = (e, t) => {
  if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
    e = Array.isArray(e) ? [...e] : {
      ...e
    };
    for (var r of Object.keys(t))
      e[r] = Ht(e[r], t[r]);
    return e;
  }
  return t;
}, Yt = (e, t, r) => {
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
      for (var c = "data", u = s, f = 0, p = l.path.length; f < p; c = l.path[f++])
        u = u[c] = Array.isArray(u[c]) ? [...u[c]] : {
          ...u[c]
        };
      if (l.items)
        for (var y = +c >= 0 ? c : 0, h = 0, I = l.items.length; h < I; h++)
          u[y + h] = Ht(u[y + h], l.items[h]);
      else
        l.data !== void 0 && (u[c] = Ht(u[c], l.data));
    }
  else
    s.data = t.data || e.data, i = t.errors || i;
  return {
    operation: e.operation,
    data: s.data,
    error: i.length ? new bt({
      graphQLErrors: i,
      response: r
    }) : void 0,
    extensions: n ? a : void 0,
    hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
    stale: !1
  };
}, hi = (e, t, r) => ({
  operation: e,
  data: void 0,
  error: new bt({
    networkError: t,
    response: r
  }),
  extensions: void 0,
  hasNext: !1,
  stale: !1
});
function bi(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : yr(e.query),
    operationName: mi(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions
  };
}
var In = (e, t) => {
  var r = e.kind === "query" && e.context.preferGetMethod;
  if (!r || !t)
    return e.context.url;
  var i = new URL(e.context.url);
  for (var n in t) {
    var a = t[n];
    a && i.searchParams.set(n, typeof a == "object" ? Tt(a) : a);
  }
  var o = i.toString();
  return o.length > 2047 && r !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : o;
}, wn = (e, t) => {
  if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
    var r = Tt(t), i = ((s) => {
      var l = /* @__PURE__ */ new Map();
      return (Ct !== it || Dt !== it) && (Le.clear(), Qt(l, "variables", s)), l;
    })(t.variables);
    if (i.size) {
      var n = new FormData();
      n.append("operations", r), n.append("map", Tt({
        ...[...i.keys()].map((s) => [s])
      }));
      var a = 0;
      for (var o of i.values())
        n.append("" + a++, o);
      return n;
    }
    return r;
  }
}, An = (e, t) => {
  var r = {
    accept: e.kind === "subscription" ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  }, i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
  if (i.headers)
    for (var n in i.headers)
      r[n.toLowerCase()] = i.headers[n];
  var a = wn(e, t);
  return typeof a == "string" && !r["content-type"] && (r["content-type"] = "application/json"), {
    ...i,
    method: a ? "POST" : "GET",
    body: a,
    headers: r
  };
}, kn = typeof TextDecoder < "u" ? new TextDecoder() : null, Nn = /boundary="?([^=";]+)"?/i, On = /data: ?([^\n]+)/, qr = (e) => e.constructor.name === "Buffer" ? e.toString() : kn.decode(e);
async function* _r(e) {
  if (e.body[Symbol.asyncIterator])
    for await (var t of e.body)
      yield qr(t);
  else {
    var r = e.body.getReader(), i;
    try {
      for (; !(i = await r.read()).done; )
        yield qr(i.value);
    } finally {
      r.cancel();
    }
  }
}
async function* Rr(e, t) {
  var r = "", i;
  for await (var n of e)
    for (r += n; (i = r.indexOf(t)) > -1; )
      yield r.slice(0, i), r = r.slice(i + t.length);
}
async function* Pn(e, t, r) {
  var i = !0, n = null, a;
  try {
    yield await Promise.resolve();
    var o = (a = await (e.context.fetch || fetch)(t, r)).headers.get("Content-Type") || "", s;
    if (/multipart\/mixed/i.test(o))
      s = async function* (u, f) {
        var p = u.match(Nn), y = "--" + (p ? p[1] : "-"), h = !0, I;
        for await (var N of Rr(_r(f), `\r
` + y)) {
          if (h) {
            h = !1;
            var ee = N.indexOf(y);
            if (ee > -1)
              N = N.slice(ee + y.length);
            else
              continue;
          }
          try {
            yield I = JSON.parse(N.slice(N.indexOf(`\r
\r
`) + 4));
          } catch (T) {
            if (!I)
              throw T;
          }
          if (I && I.hasNext === !1)
            break;
        }
        I && I.hasNext !== !1 && (yield {
          hasNext: !1
        });
      }(o, a);
    else if (/text\/event-stream/i.test(o))
      s = async function* (u) {
        var f;
        for await (var p of Rr(_r(u), `

`)) {
          var y = p.match(On);
          if (y) {
            var h = y[1];
            try {
              yield f = JSON.parse(h);
            } catch (I) {
              if (!f)
                throw I;
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
      s = async function* (u) {
        yield JSON.parse(await u.text());
      }(a);
    else
      throw new Error(await a.text());
    for await (var l of s)
      n = n ? Yt(n, l, a) : Jt(e, l, a), i = !1, yield n, i = !0;
    n || (yield n = Jt(e, {}, a));
  } catch (c) {
    if (!i)
      throw c;
    yield hi(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : c, a);
  }
}
function En(e, t, r) {
  var i;
  return typeof AbortController < "u" && (r.signal = (i = new AbortController()).signal), si(() => {
    i && i.abort();
  })(_((n) => !!n)(li(Pn(e, t, r))));
}
var Zt = (e, t) => {
  if (Array.isArray(e))
    for (var r of e)
      Zt(r, t);
  else if (typeof e == "object" && e !== null)
    for (var i in e)
      i === "__typename" && typeof e[i] == "string" ? t.add(e[i]) : Zt(e[i], t);
  return t;
}, Xt = (e) => {
  var t = !1;
  if ("definitions" in e) {
    var r = [];
    for (var i of e.definitions) {
      var n = Xt(i);
      t = t || n !== i, r.push(n);
    }
    if (t)
      return {
        ...e,
        definitions: r
      };
  } else if ("selectionSet" in e) {
    var a = [], o = e.kind === Xe.OPERATION_DEFINITION;
    if (e.selectionSet) {
      for (var s of e.selectionSet.selections || []) {
        o = o || s.kind === Xe.FIELD && s.name.value === "__typename" && !s.alias;
        var l = Xt(s);
        t = t || l !== s, a.push(l);
      }
      if (o || (t = !0, a.push({
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
}, Br = /* @__PURE__ */ new Map(), Tn = (e) => {
  var t = yi(e), r = Br.get(t.__key);
  return r || (Br.set(t.__key, r = Xt(t)), Object.defineProperty(r, "__key", {
    value: t.__key,
    enumerable: !1
  })), r;
}, er = (e, t) => {
  if (!e || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map((n) => er(n));
  if (e && typeof e == "object" && (t || "__typename" in e)) {
    var r = {};
    for (var i in e)
      i === "__typename" ? Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: e.__typename
      }) : r[i] = er(e[i]);
    return r;
  } else
    return e;
};
function $r(e) {
  var t = (r) => e(r);
  return t.toPromise = () => fr(qt(1)(_((r) => !r.stale && !r.hasNext)(t))), t.then = (r, i) => t.toPromise().then(r, i), t.subscribe = (r) => Pt(r)(t), t;
}
function nt(e, t, r) {
  return {
    ...t,
    kind: e,
    context: t.context ? {
      ...t.context,
      ...r
    } : r || t.context
  };
}
var Vr = (e, t) => nt(e.kind, e, {
  meta: {
    ...e.context.meta,
    ...t
  }
}), Cn = () => {
}, Gt = ({ kind: e }) => e !== "mutation" && e !== "query", Dn = ({ forward: e, client: t, dispatchDebug: r }) => {
  var i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (s) => {
    var l = nt(s.kind, s);
    return l.query = Tn(s.query), l;
  }, o = (s) => s.kind === "query" && s.context.requestPolicy !== "network-only" && (s.context.requestPolicy === "cache-only" || i.has(s.key));
  return (s) => {
    var l = et((u) => {
      var f = i.get(u.key);
      process.env.NODE_ENV !== "production" && r({
        operation: u,
        ...f ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var p = f;
      return process.env.NODE_ENV !== "production" && (p = {
        ...p,
        operation: process.env.NODE_ENV !== "production" ? Vr(u, {
          cacheOutcome: f ? "hit" : "miss"
        }) : u
      }), u.context.requestPolicy === "cache-and-network" && (p.stale = !0, Ur(t, u)), p;
    })(_((u) => !Gt(u) && o(u))(s)), c = jt((u) => {
      var { operation: f } = u;
      if (f) {
        var p = f.context.additionalTypenames || [];
        if (u.operation.kind !== "subscription" && (p = ((m) => [...Zt(m, /* @__PURE__ */ new Set())])(u.data).concat(p)), u.operation.kind === "mutation" || u.operation.kind === "subscription") {
          var y = /* @__PURE__ */ new Set();
          process.env.NODE_ENV !== "production" && r({
            type: "cacheInvalidation",
            message: `The following typenames have been invalidated: ${p}`,
            operation: f,
            data: {
              typenames: p,
              response: u
            },
            source: "cacheExchange"
          });
          for (var h = 0; h < p.length; h++) {
            var I = p[h], N = n.get(I);
            N || n.set(I, N = /* @__PURE__ */ new Set());
            for (var ee of N.values())
              y.add(ee);
            N.clear();
          }
          for (var T of y.values())
            i.has(T) && (f = i.get(T).operation, i.delete(T), Ur(t, f));
        } else if (f.kind === "query" && u.data) {
          i.set(f.key, u);
          for (var R = 0; R < p.length; R++) {
            var d = p[R], b = n.get(d);
            b || n.set(d, b = /* @__PURE__ */ new Set()), b.add(f.key);
          }
        }
      }
    })(e(_((u) => u.kind !== "query" || u.context.requestPolicy !== "cache-only")(et((u) => process.env.NODE_ENV !== "production" ? Vr(u, {
      cacheOutcome: "miss"
    }) : u)(tt([et(a)(_((u) => !Gt(u) && !o(u))(s)), _((u) => Gt(u))(s)])))));
    return tt([l, c]);
  };
}, Ur = (e, t) => e.reexecuteOperation(nt(t.kind, t, {
  requestPolicy: "network-only"
})), Lt = ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) => ({ client: i, forward: n }) => {
  var a = r || ((o) => o.kind === "subscription" || !!t && (o.kind === "query" || o.kind === "mutation"));
  return (o) => {
    var s = pt((c) => {
      var { key: u } = c, f = _((p) => p.kind === "teardown" && p.key === u)(o);
      return cr(f)(((p) => {
        var y = e(bi(p), p);
        return dr(({ next: h, complete: I }) => {
          var N = !1, ee, T;
          return Promise.resolve().then(() => {
            N || (ee = y.subscribe({
              next(R) {
                h(T = T ? Yt(T, R) : Jt(p, R));
              },
              error(R) {
                h(hi(p, R));
              },
              complete() {
                N || (N = !0, p.kind === "subscription" && i.reexecuteOperation(nt("teardown", p, p.context)), T && T.hasNext && h(Yt(T, {
                  hasNext: !1
                })), I());
              }
            }));
          }), () => {
            N = !0, ee && ee.unsubscribe();
          };
        });
      })(c));
    })(_((c) => c.kind !== "teardown" && a(c))(o)), l = n(_((c) => c.kind === "teardown" || !a(c))(o));
    return tt([s, l]);
  };
}, Fn = ({ forward: e, dispatchDebug: t }) => (r) => {
  var i = pt((a) => {
    var o = bi(a), s = In(a, o), l = An(a, o);
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
    var c = cr(_((u) => u.kind === "teardown" && u.key === a.key)(r))(En(a, s, l));
    return process.env.NODE_ENV !== "production" ? jt((u) => {
      var f = u.data ? void 0 : u.error;
      process.env.NODE_ENV !== "production" && t({
        type: f ? "fetchError" : "fetchSuccess",
        message: `A ${f ? "failed" : "successful"} fetch response has been returned.`,
        operation: a,
        data: {
          url: s,
          fetchOptions: l,
          value: f || u
        },
        source: "fetchExchange"
      });
    })(c) : c;
  })(_((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(r)), n = e(_((a) => a.kind === "teardown" || a.kind === "subscription" && !a.context.fetchSubscriptions)(r));
  return tt([i, n]);
}, xn = (e) => ({ client: t, forward: r, dispatchDebug: i }) => e.reduceRight((n, a) => {
  var o = !1;
  return a({
    client: t,
    forward(s) {
      if (process.env.NODE_ENV !== "production") {
        if (o)
          throw new Error("forward() must only be called once in each Exchange.");
        o = !0;
      }
      return yt(n(yt(s)));
    },
    dispatchDebug(s) {
      process.env.NODE_ENV !== "production" && i({
        timestamp: Date.now(),
        source: a.name,
        ...s
      });
    }
  });
}, r), gi = ({ onOperation: e, onResult: t, onError: r }) => ({ forward: i }) => (n) => pt((a) => {
  r && a.error && r(a.error, a.operation);
  var o = t && t(a) || a;
  return "then" in o ? Dr(o) : ut(o);
})(i(pt((a) => {
  var o = e && e(a) || a;
  return "then" in o ? Dr(o) : ut(o);
})(n))), Mn = ({ dispatchDebug: e }) => (t) => (process.env.NODE_ENV !== "production" && (t = jt((r) => {
  if (r.kind !== "teardown" && process.env.NODE_ENV !== "production") {
    var i = `No exchange has handled operations of kind "${r.kind}". Check whether you've added an exchange responsible for these operations.`;
    process.env.NODE_ENV !== "production" && e({
      type: "fallbackCatch",
      message: i,
      operation: r,
      source: "fallbackExchange"
    }), console.warn(i);
  }
})(t)), _((r) => !1)(t)), Gr = function e(t) {
  if (process.env.NODE_ENV !== "production" && !t.url)
    throw new Error("You are creating an urql-client without a url.");
  var r = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [], s = {
    url: t.url,
    fetchSubscriptions: t.fetchSubscriptions,
    fetchOptions: t.fetchOptions,
    fetch: t.fetch,
    preferGetMethod: !!t.preferGetMethod,
    requestPolicy: t.requestPolicy || "cache-first"
  }, l = Cr();
  function c(d) {
    (d.kind === "mutation" || d.kind === "teardown" || !a.has(d.key)) && (d.kind === "teardown" ? a.delete(d.key) : d.kind !== "mutation" && a.add(d.key), l.next(d));
  }
  var u = !1;
  function f(d) {
    if (d && c(d), !u) {
      for (u = !0; u && (d = o.shift()); )
        c(d);
      u = !1;
    }
  }
  var p = (d) => {
    var b = cr(_((m) => m.kind === "teardown" && m.key === d.key)(l.source))(_((m) => m.operation.kind === d.kind && m.operation.key === d.key && (!m.operation.context._instance || m.operation.context._instance === d.context._instance))(R));
    return d.kind !== "query" ? b = zi((m) => !!m.hasNext, !0)(b) : b = Tr((m) => {
      var C = ut(m);
      return m.stale || m.hasNext ? C : tt([C, et(() => (m.stale = !0, m))(qt(1)(_((Ke) => Ke.key === d.key)(l.source)))]);
    })(b), d.kind !== "mutation" ? b = si(() => {
      a.delete(d.key), i.delete(d.key), n.delete(d.key), u = !1;
      for (var m = o.length - 1; m >= 0; m--)
        o[m].key === d.key && o.splice(m, 1);
      c(nt("teardown", d, d.context));
    })(jt((m) => {
      if (m.stale) {
        for (var C of o)
          if (C.key === m.operation.key) {
            a.delete(C.key);
            break;
          }
      } else
        m.hasNext || a.delete(d.key);
      i.set(d.key, m);
    })(b)) : b = Er(() => {
      c(d);
    })(b), t.maskTypename && (b = et((m) => ({
      ...m,
      data: er(m.data, !0)
    }))(b)), yt(b);
  }, y = this instanceof e ? this : Object.create(e.prototype), h = Object.assign(y, {
    suspense: !!t.suspense,
    operations$: l.source,
    reexecuteOperation(d) {
      d.kind === "teardown" ? f(d) : (d.kind === "mutation" || n.has(d.key)) && (o.push(d), Promise.resolve().then(f));
    },
    createRequestOperation(d, b, m) {
      m || (m = {});
      var C;
      if (process.env.NODE_ENV !== "production" && d !== "teardown" && (C = Sn(b.query)) !== d)
        throw new Error(`Expected operation of type "${d}" but found "${C}"`);
      return nt(d, b, {
        _instance: d === "mutation" ? r = r + 1 | 0 : void 0,
        ...s,
        ...m,
        requestPolicy: m.requestPolicy || s.requestPolicy,
        suspense: m.suspense || m.suspense !== !1 && h.suspense
      });
    },
    executeRequestOperation(d) {
      return d.kind === "mutation" ? $r(p(d)) : $r(Wi(() => {
        var b = n.get(d.key);
        b || n.set(d.key, b = p(d)), b = Er(() => {
          f(d);
        })(b);
        var m = i.get(d.key);
        return d.kind === "query" && m && (m.stale || m.hasNext) ? Tr(ut)(tt([b, _((C) => C === i.get(d.key))(ut(m))])) : b;
      }));
    },
    executeQuery(d, b) {
      var m = h.createRequestOperation("query", d, b);
      return h.executeRequestOperation(m);
    },
    executeSubscription(d, b) {
      var m = h.createRequestOperation("subscription", d, b);
      return h.executeRequestOperation(m);
    },
    executeMutation(d, b) {
      var m = h.createRequestOperation("mutation", d, b);
      return h.executeRequestOperation(m);
    },
    readQuery(d, b, m) {
      var C = null;
      return Pt((Ke) => {
        C = Ke;
      })(h.query(d, b, m)).unsubscribe(), C;
    },
    query: (d, b, m) => h.executeQuery(Ut(d, b), m),
    subscription: (d, b, m) => h.executeSubscription(Ut(d, b), m),
    mutation: (d, b, m) => h.executeMutation(Ut(d, b), m)
  }), I = Cn;
  if (process.env.NODE_ENV !== "production") {
    var { next: N, source: ee } = Cr();
    h.subscribeToDebugTarget = (d) => Pt(d)(ee), I = N;
  }
  var T = xn(t.exchanges), R = yt(T({
    client: h,
    dispatchDebug: I,
    forward: Mn({
      dispatchDebug: I
    })
  })(l.source));
  return Ji(R), h;
};
const tr = (e) => Object.entries(e).flatMap(([t, r]) => {
  if (typeof r == "boolean")
    return r ? t : !1;
  if (r instanceof mr) {
    let i = "";
    const n = Object.entries(r.args).filter(([a, o]) => o != null).map(([a, o]) => {
      var s;
      return `${a}: ${o instanceof hr ? `$${(s = o.name) !== null && s !== void 0 ? s : a}` : JSON.stringify(o)}`;
    });
    return n.length > 0 && (i = `(${n.join(", ")})`), r.subselection ? [`${t}${i} {`, ...tr(r.subselection), "}"] : `${t}${i}`;
  } else
    return [`${t} {`, ...tr(r), "}"];
}).filter((t) => !!t).map((t) => "  " + t), Ft = (e) => {
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
    n instanceof mr ? (Object.entries(n.args).forEach(([a, o]) => {
      var s;
      o instanceof hr && (t[(s = o.name) !== null && s !== void 0 ? s : r(a)] = o);
    }), n.subselection && Object.assign(t, Ft(n.subselection))) : typeof n == "object" && n !== null && Object.assign(t, Ft(n));
  }), t;
}, jn = (e) => {
  const t = Ft(e.fields);
  return Object.keys(t).length === 0 ? "" : `(${Object.entries(t).map(([i, n]) => `$${i}: ${n.type}`).join(", ")})`;
};
class mr {
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
class hr {
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
const X = (e, t) => new mr(e, t), A = (e) => new hr(e.type + (e.required ? "!" : ""), e.name, e.value), qn = (e) => {
  var t;
  const r = jn(e), i = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
  return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${r}${i} {
${tr(e.fields).join(`
`)}
}`;
}, oe = (e) => {
  const t = Ft(e.fields);
  return {
    query: qn(e),
    variables: Object.entries(t ?? {}).reduce((r, [i, n]) => (typeof n.value < "u" && (r[i] = n.value), r), {})
  };
}, _n = {
  DateTime(e) {
    return new Date(e);
  }
};
class Rn {
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
      a != null && (r[i] = _n[n](a));
    }
    return r;
  }
}
function ne(e) {
  if (typeof e != "object")
    return e;
  var t, r, i = Object.prototype.toString.call(e);
  if (i === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e)
        e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = ne(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__" ? Object.defineProperty(r, t, {
          value: ne(e[t]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[t] = ne(e[t]);
    }
    return r;
  }
  if (i === "[object Array]") {
    for (t = e.length, r = Array(t); t--; )
      r[t] = ne(e[t]);
    return r;
  }
  return i === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(n) {
    r.add(ne(n));
  }), r) : i === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(n, a) {
    r.set(ne(a), ne(n));
  }), r) : i === "[object Date]" ? /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : i === "[object DataView]" ? new e.constructor(ne(e.buffer)) : i === "[object ArrayBuffer]" ? e.slice(0) : i.slice(-6) === "Array]" ? new e.constructor(e) : e;
}
var vi, Si, Ii, wi, Ai, Y;
(function(e) {
  e[e.SinceLoaded = 0] = "SinceLoaded", e[e.SinceLastPersisted = 1] = "SinceLastPersisted";
})(Y || (Y = {}));
const U = Symbol.for("g/fields"), xe = Symbol.for("g/if"), Me = Symbol.for("g/pf"), je = Symbol.for("g/fk"), st = Symbol.for("g/t");
class Bn {
  constructor(t) {
    var r, i;
    Object.defineProperty(this, vi, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, Si, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, Ii, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, wi, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Ai, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "empty", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), this[xe] = (r = ne(t)) !== null && r !== void 0 ? r : {}, this[Me] = (i = ne(t)) !== null && i !== void 0 ? i : {}, Object.assign(this[U], t), !t || Object.keys(t).length === 0 ? (this.empty = !0, this[je] = /* @__PURE__ */ new Set()) : this[je] = new Set(Object.keys(this[U]));
    const n = this, a = {
      get: (o, s) => {
        if (s in n || typeof s == "symbol") {
          let l = n[s];
          return typeof l == "function" && (l = l.bind(n)), l;
        } else if (s in o)
          return o[s];
      },
      set: (o, s, l) => (n.trackKey(s), o[s.toString()] = l, !0)
    };
    return new Proxy(this[U], a);
  }
  /** Makes sure our data keys are all tracked, to avoid repeated runtime object-to-array conversions */
  trackKey(t) {
    const r = t.toString();
    this[je].add(r);
  }
  /** Returns true if even a single field has changed */
  hasChanges(t = Y.SinceLoaded) {
    if (this[st])
      return !0;
    const r = t == Y.SinceLoaded ? this[xe] : this[Me];
    return [...this[je]].some((i) => !wt(r[i], this[U][i]));
  }
  /** Checks if the original constructor data was empty or not */
  isEmpty() {
    return this.empty;
  }
  /** Returns the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  getField(t) {
    return this[U][t];
  }
  /** Sets the value of the field for the given `apiIdentifier`. These properties may also be accessed on this record directly. This method can be used if your model field `apiIdentifier` conflicts with the `GadgetRecord` helper functions. */
  setField(t, r) {
    return this.trackKey(t), this[U][t] = r;
  }
  changes(t, r = Y.SinceLoaded) {
    const n = (typeof t == "string" ? r : t || r) == Y.SinceLoaded ? this[xe] : this[Me];
    if (t && typeof t == "string") {
      const a = n[t], o = this[U][t], s = !wt(o, a);
      return s ? { changed: s, current: o, previous: a } : { changed: s };
    } else {
      const a = {};
      for (const o of this[je])
        wt(n[o], this[U][o]) || (a[o] = { current: this[U][o], previous: n[o] });
      return a;
    }
  }
  /** Returns all current values for fields that have changed */
  toChangedJSON(t = Y.SinceLoaded) {
    const r = t == Y.SinceLoaded ? this[xe] : this[Me], i = {};
    for (const n of this[je])
      wt(r[n], this[U][n]) || (i[n] = this[U][n]);
    return i;
  }
  changed(t, r = Y.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, r).changed : this.hasChanges(t === void 0 ? r : t);
  }
  /** Flushes all `changes` and starts tracking new changes from the current state of the record. */
  flushChanges(t = Y.SinceLoaded) {
    t == Y.SinceLoaded ? this[xe] = ne(this[U]) : t == Y.SinceLastPersisted && (this[Me] = ne(this[U])), this[st] = !1;
  }
  /** Reverts all `changes` on the record, and returns to either the values this record were instantiated with, or the values at the time of the last `flushChanges` call. */
  revertChanges(t = Y.SinceLoaded) {
    let r;
    t == Y.SinceLoaded ? r = Object.keys(this[xe]) : r = Object.keys(this[Me]);
    for (const i of this[je])
      r.includes(i) || delete this[U][i];
    t == Y.SinceLoaded ? Object.assign(this[U], ne(this[xe])) : Object.assign(this[U], ne(this[Me])), this[st] = !1;
  }
  /** Returns a JSON representation of all fields on this record. */
  toJSON() {
    return or({ ...this[U] });
  }
  /** Marks this record as changed so that the next save will save it and adjust any `updatedAt` timestamps */
  touch() {
    this[st] = !0;
  }
}
vi = U, Si = xe, Ii = Me, wi = je, Ai = st;
const ki = Bn;
class $n extends Error {
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
class rr extends Error {
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
class Rt extends Error {
  constructor(t, r) {
    super(t.startsWith("GGT_") ? t : `${r}: ${t}`), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
}
class Lr extends Error {
  constructor(t) {
    let r;
    nr(t) ? r = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"` : r = "GraphQL websocket closed unexpectedly by the server", super(r), Object.defineProperty(this, "code", {
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
class Vn extends Error {
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
class Un extends Error {
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
class Gn extends Error {
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
class Ni extends Error {
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
class Oi extends Error {
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
class Ln extends Error {
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
function ir(e, t) {
  if (!e)
    throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const xt = (e, t) => {
  const r = t.length;
  let i = 0;
  for (; e != null && i < r; )
    e = e[t[i++]];
  return i && i == r ? e : void 0;
}, nr = (e) => (e == null ? void 0 : e.type) == "close", be = (e, t) => typeof e != "string" ? "" : gt(e, t), zr = (e) => {
  const t = e == null ? "" : String(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, gt = (e, t = !0) => {
  let r = "" + e;
  return t ? r = r.replace(/^[a-z\d]*/, (i) => zr(i)) : r = r.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (i) => i.toLowerCase()), r = r.replace(/(?:_|(\/))([a-z\d]*)/gi, (i, n, a, o, s) => (n || (n = ""), "" + n + zr(a))), r;
}, br = (e, t) => [...Array.isArray(t) ? t : t ? [t] : [], e].map((n) => gt(n)).join(""), Pi = (e, t) => `${br(e, t)}Sort`, gr = (e, t) => `${br(e, t)}Filter`, zn = (e, t, r) => new Ni(`More than one record found for ${e}.${t} = ${r}. Please confirm your unique validation is not reporting an error.`), Ne = (e, t, r = !1) => {
  var i;
  if (e.error)
    throw e.error instanceof bt && (!((i = e.error.networkError) === null || i === void 0) && i.length) && (e.error.message = e.error.networkError.map((s) => "[Network] " + s.message).join(`
`)), e.error;
  const n = xt(e.data, t), a = xt(n, ["edges"]), o = a ?? n;
  if (n === void 0)
    throw new $n(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
  if (n === null || r && Array.isArray(o) && o.length === 0)
    throw new Oi(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  return n;
}, ct = (e, t) => {
  var r;
  if (e.error)
    throw e.error instanceof bt && (!((r = e.error.networkError) === null || r === void 0) && r.length) && (e.error.message = e.error.networkError.map((n) => "[Network] " + n.message).join(`
`)), e.error;
  const i = xt(e.data, t);
  return i ?? null;
}, Ei = (e) => {
  var t;
  return e.code == "GGT_INVALID_RECORD" ? new Gn(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record) : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint") ? new Ni(e.message) : new Rt(e.message, e.code);
}, qe = (e, t) => {
  const r = Ne(e, t);
  return Ti(r);
}, Ti = (e) => {
  if (!e.success) {
    const t = e.errors && e.errors[0];
    throw t ? Ei(t) : new Rt("Gadget API operation not successful.", "GGT_UNKNOWN");
  }
  return e;
}, Ci = (e) => {
  var t, r, i, n;
  if (!((r = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || r === void 0) && r.hydrations)
    return new Rn((n = (i = e.data) === null || i === void 0 ? void 0 : i.gadgetMeta) === null || n === void 0 ? void 0 : n.hydrations);
}, dt = (e, t) => {
  const r = Ci(e);
  return r && (t = r.apply(t)), new ki(t);
}, vr = (e, t) => {
  const r = Ci(e);
  return r && (t = r.apply(t)), t == null ? void 0 : t.map((i) => new ki(i));
}, Mt = (e, t) => {
  const r = t.edges.map((i) => i.node);
  return vr(e, r);
}, ar = "[object Object]", Wr = "[object String]", or = (e) => {
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
          t[r] = i === void 0 ? null : or(i);
        }
        return t;
      }
      if (Object.prototype.toString.call(e) === "[object Error]")
        return {};
      if (Object.prototype.toString.call(e) === ar) {
        const t = {};
        for (const r of Object.keys(e)) {
          const i = or(e[r]);
          i !== void 0 && (t[r] = i);
        }
        return t;
      }
    }
  }
}, zt = "gstk", Kr = (e) => {
  try {
    const t = window[e];
    return t.setItem(zt, zt), t.removeItem(zt), !0;
  } catch {
    return !1;
  }
}, Qr = Object.prototype.toString, Jr = Object.getPrototypeOf, Hr = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys, lt = (e, t, r) => {
  if (e === t)
    return !0;
  if (e == null || t == null)
    return !1;
  if (r.indexOf(e) > -1 && r.indexOf(t) > -1)
    return !0;
  const i = Qr.call(e), n = Qr.call(t);
  let a, o, s;
  if (r.push(e, t), i == ar && n == Wr && "_link" in e && Object.keys(e).length == 1)
    return e._link === t;
  if (n == ar && i == Wr && "_link" in t && Object.keys(t).length == 1)
    return t._link === e;
  if (i != n || (a = Hr(e), o = Hr(t), a.length != o.length || a.some(function(l) {
    return !lt(e[l], t[l], r);
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
        if (s = a.next(), !lt(s.value, o.next().value, r))
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
        if (!(!(s in e) && !(s in t)) && (s in e != s in t || !lt(e[s], t[s], r)))
          return !1;
      return !0;
    case "Object":
      return lt(Jr(e), Jr(t), r);
    default:
      return !1;
  }
}, wt = (e, t) => lt(e, t, []), Di = (e, t) => {
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
}, Wn = (e, t = {}) => {
  var r;
  return e.variables.ids ? Array.isArray(t) ? { ids: t } : t : {
    inputs: ((r = Array.isArray(t) ? t : t.inputs) !== null && r !== void 0 ? r : []).map((n) => Di(e, n))
  };
}, Kn = (e, t) => {
  const r = {};
  for (const [i, n] of Object.entries(e))
    r[i] = { ...n, value: t[i] };
  return r;
}, ze = (e, t) => (t && e.unshift(...Array.isArray(t) ? t : [t]), e), Te = (e, t) => {
  const r = t ? [...Array.isArray(t) ? t : [t], e].join(".") : e;
  return {
    gadgetMeta: {
      hydrations: X({ modelName: r })
    }
  };
};
function ce(e, t) {
  if (!e)
    return t;
  if (Array.isArray(e) || (e = [e]), e)
    for (let r = e.length - 1; r >= 0; r--)
      t = {
        [e[r]]: t
      };
  return t;
}
const We = {
  errors: {
    message: !0,
    code: !0,
    "... on InvalidRecordError": {
      validationErrors: {
        message: !0,
        apiIdentifier: !0
      }
    }
  }
};
class mt extends Array {
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
    const n = new mt();
    return n.push(...r), n.modelManager = t, n.pagination = i, Object.freeze(n), n;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0])
      throw new Rt("No records found.", "GGT_RECORD_NOT_FOUND");
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
      throw new rr("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
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
      throw new rr("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: r, last: i, after: n, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({
      ...a,
      before: this.pagination.pageInfo.startCursor,
      last: i || r
    });
  }
}
const Sr = (e, t = !1) => {
  const r = { ...e };
  return t && (r.__typename = !0), r;
}, Bt = (e) => {
  if (e != null && e.live)
    return ["@live"];
}, Qn = (e, t, r, i, n, a) => {
  const o = {};
  typeof t < "u" && (o.id = A({ type: "GadgetID!", value: t }));
  let s = {
    [e]: X(o, Sr((n == null ? void 0 : n.select) || r, !0))
  };
  return s = ce(a, s), oe({
    type: "query",
    name: e,
    fields: {
      ...s,
      ...Te(i, a)
    },
    directives: Bt(n)
  });
}, Jn = (e, t, r, i, n, a, o) => Fi(e, i, n, {
  ...a,
  first: 2,
  filter: {
    [t]: {
      equals: r
    }
  }
}, o), Fi = (e, t, r, i, n) => {
  let a = {
    [e]: X({
      after: A({ value: i == null ? void 0 : i.after, type: "String" }),
      first: A({ value: i == null ? void 0 : i.first, type: "Int" }),
      before: A({ value: i == null ? void 0 : i.before, type: "String" }),
      last: A({ value: i == null ? void 0 : i.last, type: "Int" }),
      sort: i != null && i.sort ? A({ value: i.sort, type: `[${Pi(r, n)}!]` }) : void 0,
      filter: i != null && i.filter ? A({ value: i.filter, type: `[${gr(r, n)}!]` }) : void 0,
      search: i != null && i.search ? A({ value: i.search, type: "String" }) : void 0
    }, {
      pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
      edges: {
        cursor: !0,
        node: Sr((i == null ? void 0 : i.select) || t, !0)
      }
    })
  };
  return n && (a = ce(n, a)), oe({
    type: "query",
    name: e,
    fields: {
      ...a,
      ...Te(r, n)
    },
    directives: Bt(i)
  });
}, Ir = (e) => Object.fromEntries(Object.entries(e).map(([t, r]) => [t, A(r)])), xi = (e, t, r) => ({
  success: !0,
  ...We,
  [e]: t && !r ? Sr(t, !0) : !1,
  result: !!r
}), Hn = (e, t, r, i, n, a, o, s, l) => {
  const c = (a == null ? void 0 : a.select) || t;
  let u = {
    [e]: X(Ir(n), xi(i, c, l))
  };
  u = ce(o, u);
  const f = {
    type: "mutation",
    name: e,
    fields: {
      ...u,
      ...Te(r, o)
    },
    directives: Bt(a)
  };
  return oe(f);
}, Yn = (e, t, r) => {
  let i = {}, n = t.operationName, a;
  switch (t.isBulk && (n = t.operationName.replace(/^bulk/, "").replace(/s$/, "")), t.operationReturnType ? a = `${t.operationReturnType}Result` : a = `${gt(n)}Result`, t.type) {
    case "action": {
      const s = (r == null ? void 0 : r.select) || t.defaultSelection;
      i = {
        [`... on ${a}`]: xi(t.modelApiIdentifier, s, t.hasReturnType)
      };
      break;
    }
    case "globalAction":
      i = {
        [`... on ${a}`]: Mi()
      };
  }
  const o = {
    type: "subscription",
    name: be(n) + "BackgroundResult",
    fields: {
      backgroundAction: X({ id: A({ value: e, type: "String!" }) }, {
        id: !0,
        outcome: !0,
        result: {
          ...i
        }
      })
    }
  };
  return oe(o);
}, Mi = () => ({
  success: !0,
  ...We,
  result: !0
}), Zn = (e, t, r, i) => {
  let n = {
    [e]: X(Ir(t), Mi())
  };
  return n = ce(r, n), oe({
    type: "mutation",
    name: e,
    fields: n,
    directives: Bt(i)
  });
}, Xn = (e) => {
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
}, ea = (e, t, r, i, n) => {
  let a = {
    [e]: X({
      ...Ir(t),
      backgroundOptions: A({
        type: "EnqueueBackgroundActionOptions",
        value: Xn(i)
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
  };
  return a = ce(r, a), oe({
    type: "mutation",
    name: "enqueue" + gt(e),
    fields: {
      background: a
    }
  });
}, ta = (e, t) => ({
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
function wr(e, t, r) {
  return r != null && r.live ? ta(Hi(e), t) : pr(e, _((n) => !n.stale && !n.hasNext), qt(1), fr).then((n) => t(n));
}
const Yr = (e, t, r, i, n, a, o = !0, s) => {
  const l = Qn(t, r, i, n, a, s), c = e.connection.currentClient.query(l.query, l.variables);
  return wr(c, (u) => {
    const f = o ? Ne : ct, p = ze([t], s), y = f(u, p);
    return dt(u, y);
  }, a);
}, ra = (e, t, r, i, n, a, o, s = !0, l) => {
  const c = Jn(t, r, i, n, a, o), u = ze([t], l), f = e.connection.currentClient.query(c.query, c.variables);
  return wr(f, (p) => {
    const y = Ne(p, u), h = Mt(p, y);
    if (h.length > 1)
      throw zn(a, r, i);
    const I = h[0];
    if (!I && s)
      throw new Oi(`${a} record with ${r}=${i} not found`);
    return I ?? null;
  }, o);
}, Zr = (e, t, r, i, n, a, o) => {
  const s = Fi(t, r, i, n, o), l = e.connection.currentClient.query(s.query, s.variables), c = ze([t], o);
  return wr(l, (u) => {
    let f;
    a === !1 ? f = ct(u, c) : f = Ne(u, c, a);
    const p = Mt(u, f);
    return mt.boot(e, p, { options: n, pageInfo: f.pageInfo });
  }, n);
}, Xr = async (e, t, r, i, n, a, o, s, l, c) => {
  const u = Hn(t, r, i, n, o, s, l, a, c), f = await e.connection.currentClient.mutation(u.query, u.variables).toPromise(), p = ze([t], l);
  if (a) {
    const y = xt(f.data, p), h = y[n] && r ? vr(f, y[n]) : void 0;
    if (y.errors) {
      const I = y.errors.map((N) => Ei(N));
      throw new Ln(I, h);
    }
    return h;
  } else {
    const y = qe(f, p);
    return ji(r, f, y, n, c);
  }
}, ji = (e, t, r, i, n) => {
  if (e != null)
    return n ? r.result : dt(t, r[i]);
}, ei = async (e, t, r, i) => {
  const n = Zn(t, r, i), a = await e.currentClient.mutation(n.query, n.variables).toPromise(), o = ze([t], i);
  return qe(a, o).result;
};
async function ia(e, t, r, i = {}) {
  const n = t.isBulk ? Wn(t, r) : Di(t, r), a = Kn(t.variables, n), o = ea(t.operationName, a, t.namespace, i, t.isBulk), s = await e.currentClient.mutation(o.query, o.variables, i).toPromise(), l = ["background", ...ze([t.operationName], t.namespace)];
  try {
    const c = qe(s, l);
    return t.isBulk ? c.backgroundActions.map((u) => new Ot(e, t, u.id)) : new Ot(e, t, c.backgroundAction.id);
  } catch (c) {
    if ("code" in c && c.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (i != null && i.id) && i.onDuplicateID == "ignore")
      return new Ot(e, t, i.id);
    throw c;
  }
}
const na = async (e, t, r, i) => {
  const n = Yn(t, r, i), a = e.currentClient.subscription(n.query, n.variables), o = await pr(a, _((l) => {
    var c, u;
    return l.error || ((u = (c = l.data) === null || c === void 0 ? void 0 : c.backgroundAction) === null || u === void 0 ? void 0 : u.outcome);
  }), qt(1), fr), s = Ne(o, ["backgroundAction"]);
  switch (Ti(s.result), r.type) {
    case "action": {
      s.result = ji(r.defaultSelection, o.data, s.result, r.isBulk ? r.modelApiIdentifier : r.modelSelectionField, r.hasReturnType);
      break;
    }
    case "globalAction": {
      s.result = s.result.result;
      break;
    }
  }
  return s;
};
class Ot {
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
    return (await na(this.connection, this.id, this.action, t)).result;
  }
}
var ft;
(function(e) {
  e.Durable = "Durable", e.Session = "session", e.Temporary = "temporary";
})(ft || (ft = {}));
function ie(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Ge(e) {
  return ie(e) === "object";
}
function aa(e) {
  return Array.isArray(e) && // must be at least one error
  e.length > 0 && // error has at least a message
  e.every((t) => "message" in t);
}
function ti(e, t) {
  return e.length < 124 ? e : t;
}
const oa = "graphql-transport-ws";
var Z;
(function(e) {
  e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests";
})(Z || (Z = {}));
var x;
(function(e) {
  e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete";
})(x || (x = {}));
function qi(e) {
  if (!Ge(e))
    throw new Error(`Message is expected to be an object, but got ${ie(e)}`);
  if (!e.type)
    throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string")
    throw new Error(`Message is expects the 'type' property to be a string, but got ${ie(e.type)}`);
  switch (e.type) {
    case x.ConnectionInit:
    case x.ConnectionAck:
    case x.Ping:
    case x.Pong: {
      if (e.payload != null && !Ge(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case x.Subscribe: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ie(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ge(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ie(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ie(e.payload.query)}`);
      if (e.payload.variables != null && !Ge(e.payload.variables))
        throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ie(e.payload.variables)}`);
      if (e.payload.operationName != null && ie(e.payload.operationName) !== "string")
        throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ie(e.payload.operationName)}`);
      if (e.payload.extensions != null && !Ge(e.payload.extensions))
        throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ie(e.payload.extensions)}`);
      break;
    }
    case x.Next: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ie(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Ge(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ie(e.payload)}`);
      break;
    }
    case x.Error: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ie(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!aa(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
      break;
    }
    case x.Complete: {
      if (typeof e.id != "string")
        throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ie(e.id)}`);
      if (!e.id)
        throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function sa(e, t) {
  return qi(typeof e == "string" ? JSON.parse(e, t) : e);
}
function ot(e, t) {
  return qi(e), JSON.stringify(e, t);
}
function la(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: i = !0,
    onNonLazyError: n = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: o = 0,
    disablePong: s,
    connectionAckWaitTimeout: l = 0,
    retryAttempts: c = 5,
    retryWait: u = async function(j) {
      let O = 1e3;
      for (let w = 0; w < j; w++)
        O *= 2;
      await new Promise((w) => setTimeout(w, O + // add random timeout from 300ms to 3s
      Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = At,
    isFatalConnectionProblem: p,
    on: y,
    webSocketImpl: h,
    /**
     * Generates a v4 UUID to be used as the ID using `Math`
     * as the random number generator. Supply your own generator
     * in case you need more uniqueness.
     *
     * Reference: https://gist.github.com/jed/982883
     */
    generateID: I = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (j) => {
        const O = Math.random() * 16 | 0;
        return (j == "x" ? O : O & 3 | 8).toString(16);
      });
    },
    jsonMessageReplacer: N,
    jsonMessageReviver: ee
  } = e;
  let T;
  if (h) {
    if (!ca(h))
      throw new Error("Invalid WebSocket implementation provided");
    T = h;
  } else
    typeof WebSocket < "u" ? T = WebSocket : typeof global < "u" ? T = global.WebSocket || // @ts-expect-error: Support more browsers
    global.MozWebSocket : typeof window < "u" && (T = window.WebSocket || // @ts-expect-error: Support more browsers
    window.MozWebSocket);
  if (!T)
    throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
  const R = T, d = (() => {
    const S = (() => {
      const O = {};
      return {
        on(w, D) {
          return O[w] = D, () => {
            delete O[w];
          };
        },
        emit(w) {
          var D;
          "id" in w && ((D = O[w.id]) === null || D === void 0 || D.call(O, w));
        }
      };
    })(), j = {
      connecting: y != null && y.connecting ? [y.connecting] : [],
      opened: y != null && y.opened ? [y.opened] : [],
      connected: y != null && y.connected ? [y.connected] : [],
      ping: y != null && y.ping ? [y.ping] : [],
      pong: y != null && y.pong ? [y.pong] : [],
      message: y != null && y.message ? [S.emit, y.message] : [S.emit],
      closed: y != null && y.closed ? [y.closed] : [],
      error: y != null && y.error ? [y.error] : []
    };
    return {
      onMessage: S.on,
      on(O, w) {
        const D = j[O];
        return D.push(w), () => {
          D.splice(D.indexOf(w), 1);
        };
      },
      emit(O, ...w) {
        for (const D of [...j[O]])
          D(...w);
      }
    };
  })();
  function b(S) {
    const j = [
      // errors are fatal and more critical than close events, throw them first
      d.on("error", (O) => {
        j.forEach((w) => w()), S(O);
      }),
      // closes can be graceful and not fatal, throw them second (if error didnt throw)
      d.on("closed", (O) => {
        j.forEach((w) => w()), S(O);
      })
    ];
  }
  let m, C = 0, Ke, $t = !1, vt = 0, Nr = !1;
  async function Or() {
    clearTimeout(Ke);
    const [S, j] = await (m ?? (m = new Promise((D, _e) => (async () => {
      if ($t) {
        if (await u(vt), !C)
          return m = void 0, _e({ code: 1e3, reason: "All Subscriptions Gone" });
        vt++;
      }
      d.emit("connecting");
      const k = new R(typeof t == "function" ? await t() : t, oa);
      let Qe, at;
      function St() {
        isFinite(o) && o > 0 && (clearTimeout(at), at = setTimeout(() => {
          k.readyState === R.OPEN && (k.send(ot({ type: x.Ping })), d.emit("ping", !1, void 0));
        }, o));
      }
      b((G) => {
        m = void 0, clearTimeout(Qe), clearTimeout(at), _e(G), At(G) && G.code === 4499 && (k.close(4499, "Terminated"), k.onerror = null, k.onclose = null);
      }), k.onerror = (G) => d.emit("error", G), k.onclose = (G) => d.emit("closed", G), k.onopen = async () => {
        try {
          d.emit("opened", k);
          const G = typeof r == "function" ? await r() : r;
          if (k.readyState !== R.OPEN)
            return;
          k.send(ot(G ? {
            type: x.ConnectionInit,
            payload: G
          } : {
            type: x.ConnectionInit
            // payload is completely absent if not provided
          }, N)), isFinite(l) && l > 0 && (Qe = setTimeout(() => {
            k.close(Z.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
          }, l)), St();
        } catch (G) {
          d.emit("error", G), k.close(Z.InternalClientError, ti(G instanceof Error ? G.message : new Error(G).message, "Internal client error"));
        }
      };
      let Je = !1;
      k.onmessage = ({ data: G }) => {
        try {
          const L = sa(G, ee);
          if (d.emit("message", L), L.type === "ping" || L.type === "pong") {
            d.emit(L.type, !0, L.payload), L.type === "pong" ? St() : s || (k.send(ot(L.payload ? {
              type: x.Pong,
              payload: L.payload
            } : {
              type: x.Pong
              // payload is completely absent if not provided
            })), d.emit("pong", !1, L.payload));
            return;
          }
          if (Je)
            return;
          if (L.type !== x.ConnectionAck)
            throw new Error(`First message cannot be of type ${L.type}`);
          clearTimeout(Qe), Je = !0, d.emit("connected", k, L.payload), $t = !1, vt = 0, D([
            k,
            new Promise((Za, Ui) => b(Ui))
          ]);
        } catch (L) {
          k.onmessage = null, d.emit("error", L), k.close(Z.BadResponse, ti(L instanceof Error ? L.message : new Error(L).message, "Bad response"));
        }
      };
    })())));
    S.readyState === R.CLOSING && await j;
    let O = () => {
    };
    const w = new Promise((D) => O = D);
    return [
      S,
      O,
      Promise.race([
        // wait for
        w.then(() => {
          if (!C) {
            const D = () => S.close(1e3, "Normal Closure");
            isFinite(a) && a > 0 ? Ke = setTimeout(() => {
              S.readyState === R.OPEN && D();
            }, a) : D();
          }
        }),
        // or
        j
      ])
    ];
  }
  function Pr(S) {
    if (At(S) && (ua(S.code) || [
      Z.InternalServerError,
      Z.InternalClientError,
      Z.BadRequest,
      Z.BadResponse,
      Z.Unauthorized,
      // CloseCode.Forbidden, might grant access out after retry
      Z.SubprotocolNotAcceptable,
      // CloseCode.ConnectionInitialisationTimeout, might not time out after retry
      // CloseCode.ConnectionAcknowledgementTimeout, might not time out after retry
      Z.SubscriberAlreadyExists,
      Z.TooManyInitialisationRequests
      // 4499, // Terminated, probably because the socket froze, we want to retry
    ].includes(S.code)))
      throw S;
    if (Nr)
      return !1;
    if (At(S) && S.code === 1e3)
      return C > 0;
    if (!c || vt >= c || !f(S) || p != null && p(S))
      throw S;
    return $t = !0;
  }
  return i || (async () => {
    for (C++; ; )
      try {
        const [, , S] = await Or();
        await S;
      } catch (S) {
        try {
          if (!Pr(S))
            return;
        } catch (j) {
          return n == null ? void 0 : n(j);
        }
      }
  })(), {
    on: d.on,
    subscribe(S, j) {
      const O = I(S);
      let w = !1, D = !1, _e = () => {
        C--, w = !0;
      };
      return (async () => {
        for (C++; ; )
          try {
            const [k, Qe, at] = await Or();
            if (w)
              return Qe();
            const St = d.onMessage(O, (Je) => {
              switch (Je.type) {
                case x.Next: {
                  j.next(Je.payload);
                  return;
                }
                case x.Error: {
                  D = !0, w = !0, j.error(Je.payload), _e();
                  return;
                }
                case x.Complete: {
                  w = !0, _e();
                  return;
                }
              }
            });
            k.send(ot({
              id: O,
              type: x.Subscribe,
              payload: S
            }, N)), _e = () => {
              !w && k.readyState === R.OPEN && k.send(ot({
                id: O,
                type: x.Complete
              }, N)), C--, w = !0, Qe();
            }, await at.finally(St);
            return;
          } catch (k) {
            if (!Pr(k))
              return;
          }
      })().then(() => {
        D || j.complete();
      }).catch((k) => {
        j.error(k);
      }), () => {
        w || _e();
      };
    },
    async dispose() {
      if (Nr = !0, m) {
        const [S] = await m;
        S.close(1e3, "Normal Closure");
      }
    },
    terminate() {
      m && d.emit("closed", {
        code: 4499,
        reason: "Terminated",
        wasClean: !1
      });
    }
  };
}
function At(e) {
  return Ge(e) && "code" in e && "reason" in e;
}
function ua(e) {
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
function ca(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Ze = null;
typeof WebSocket < "u" ? Ze = WebSocket : typeof MozWebSocket < "u" ? Ze = MozWebSocket : typeof global < "u" ? Ze = global.WebSocket || global.MozWebSocket : typeof window < "u" ? Ze = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ze = self.WebSocket || self.MozWebSocket);
const da = Ze;
class _i extends Error {
}
class fa {
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
    throw Ne(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
      "internal",
      "rollbackTransaction"
    ]), this.open = !1, new _i("Transaction rolled back.");
  }
  /**
   * @private
   */
  async start() {
    Ne(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction"
    ]), this.open = !0;
  }
  /**
   * @private
   */
  async commit() {
    Ne(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction"
    ]), this.open = !1;
  }
}
class pa {
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
const ya = (e) => {
  const t = [...e.definitions].reverse().find((r) => r.kind == "OperationDefinition");
  if (t)
    return t.name ? t.name.value : t.selectionSet.selections.find((i) => i.kind == "Field").name.value;
}, ri = gi({
  onOperation: (e) => {
    var t, r;
    (t = (r = e.context).operationName) !== null && t !== void 0 || (r.operationName = ya(e.query) || "unknown");
  }
}), ma = gi({
  onOperation: (e) => {
    if (e.context.url && e.context.operationName)
      try {
        const [t, r] = e.context.url.split("?"), i = new URLSearchParams(r);
        i.set("operation", e.context.operationName), e.context.url = `${t}?${i.toString()}`;
      } catch {
      }
  }
});
var sr;
(function(e) {
  e[e.TooManyRequests = 4294] = "TooManyRequests";
})(sr || (sr = {}));
const ha = 2, ba = 4800, ga = 1e4, va = [Z.ConnectionAcknowledgementTimeout, Z.ConnectionInitialisationTimeout], ii = Symbol.for("gadget/connection"), Sa = "token", Ia = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var q;
(function(e) {
  e.BrowserSession = "browser-session", e.APIKey = "api-key", e.InternalAuthToken = "internal-auth-token", e.Anonymous = "anonymous", e.Custom = "custom";
})(q || (q = {}));
const kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Ri {
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
        let c, u;
        if (l ? (c = l, u = s) : (c = s, u = {}), this.currentTransaction)
          return await c(this.currentTransaction);
        let f = null, p;
        try {
          f = await this.waitForOpenedConnection({
            isFatalConnectionProblem(I) {
              return console.warn("Transport error encountered during transaction processing", I), !0;
            },
            connectionAckWaitTimeout: ba,
            ...u,
            lazy: !1,
            // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
            lazyCloseTimeout: 1e5,
            retryAttempts: 0
          });
          const y = new Gr({
            url: "/-",
            // not used because there's no fetch exchange, set for clarity
            requestPolicy: "network-only",
            // skip any cached data during transactions
            exchanges: [
              ...this.exchanges.beforeAll,
              ri,
              ...this.exchanges.beforeAsync,
              Lt({
                forwardSubscription(I) {
                  const N = { ...I, query: I.query || "" };
                  return {
                    subscribe: (ee) => ({
                      unsubscribe: f.subscribe(N, ee)
                    })
                  };
                },
                enableAllOperations: !0
              }),
              ...this.exchanges.afterAll
            ]
          });
          y[ii] = this, p = new fa(y, f), this.currentTransaction = p, await p.start();
          const h = await c(p);
          return await p.commit(), h;
        } catch (y) {
          try {
            p != null && p.open && await p.rollback();
          } catch (h) {
            h instanceof _i || console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", h);
          }
          throw nr(y) ? new Lr(y) : y;
        } finally {
          await (f == null ? void 0 : f.dispose()), this.currentTransaction = null;
        }
      }
    }), Object.defineProperty(this, "fetch", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s, l = {}) => {
        var c;
        s = wa(s, (c = this.options.baseRouteURL) !== null && c !== void 0 ? c : this.options.endpoint), this.isGadgetRequest(s) && (l.headers = { ...this.requestHeaders(), ...l.headers }, this.authenticationMode == q.Custom && await this.options.authenticationMode.custom.processFetch(s, l));
        const u = await this._fetchImplementation(s, l);
        if (this.authenticationMode == q.BrowserSession) {
          const f = u.headers.get("x-set-authorization"), p = f != null && f.startsWith("Session ") ? f.replace("Session ", "") : null;
          p && this.sessionTokenStore.setItem(this.sessionStorageKey, p);
        }
        return u;
      }
    }), !t.endpoint)
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = t.endpoint, t.fetchImplementation ? this._fetchImplementation = t.fetchImplementation : typeof kt < "u" && kt.fetch ? this._fetchImplementation = kt.fetch.bind(kt) : this._fetchImplementation = async (...s) => {
      let l = await import("./browser-ponyfill-793fe4ea.js").then((c) => c.b);
      return l.default && (l = l.default), await l(...s);
    }, this.websocketImplementation = (i = (r = t.websocketImplementation) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.WebSocket) !== null && i !== void 0 ? i : da, this.websocketsEndpoint = (n = t.websocketsEndpoint) !== null && n !== void 0 ? n : t.endpoint + "/batch", this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws"), this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development", this.requestPolicy = (o = t.requestPolicy) !== null && o !== void 0 ? o : "cache-and-network", this.exchanges = {
      beforeAll: [],
      beforeAsync: [],
      afterAll: [],
      ...t.exchanges
    }, this.setAuthenticationMode(t.authenticationMode), this.baseClient = this.newBaseClient();
  }
  get sessionStorageKey() {
    return `${Sa}-${this.endpoint}`;
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
    const r = !t || typeof t == "boolean" ? ft.Durable : t.storageType;
    let i;
    r == ft.Durable && Kr("localStorage") ? i = window.localStorage : r == ft.Session && Kr("sessionStorage") ? i = window.sessionStorage : i = new pa(), t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && i.setItem(this.sessionStorageKey, t.initialToken), this.sessionTokenStore = i, this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let r;
    if (typeof t == "string" ? r = t : typeof t == "object" && "url" in t ? r = t.url : r = String(t), lr(this.options.endpoint))
      return !!lr(r);
    const i = new URL(this.options.endpoint).host;
    return r.includes(i);
  }
  resetClients() {
    if (this.currentTransaction)
      throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient), this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, ri, ma];
    typeof window < "u" && t.push(Dn), t.push(
      ...this.exchanges.beforeAsync,
      // standard subscriptions for normal GraphQL subscriptions
      Lt({
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
      Lt({
        isSubscriptionOperation: (i) => i.query.definitions.some((n) => ka(n)),
        forwardSubscription: (i) => ({
          subscribe: (n) => {
            let a;
            const o = import("./index-d5d487d7.js").then(({ applyAsyncIterableIteratorToSink: s, applyLiveQueryJSONDiffPatch: l, makeAsyncIterableIteratorFromSink: c }) => {
              const u = { ...i, query: i.query || "" };
              return a = s(l(c((f) => this.getBaseSubscriptionClient().subscribe(u, f))), n), a;
            }).catch((s) => n.error(s));
            return {
              unsubscribe: () => {
                a ? a() : o.then((s) => {
                  s && s();
                });
              }
            };
          }
        })
      }),
      Fn,
      ...this.exchanges.afterAll
    );
    const r = new Gr({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: t,
      requestPolicy: this.requestPolicy
    });
    return r[ii] = this, r;
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
    return la({
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
          var a, o, s, l, c, u;
          if (this.authenticationMode == q.BrowserSession && (n != null && n.sessionToken)) {
            const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
            (f !== null && typeof f == "object" ? f.initialToken : null) || this.sessionTokenStore.setItem(this.sessionStorageKey, n.sessionToken);
          }
          (l = (s = (o = this.subscriptionClientOptions) === null || o === void 0 ? void 0 : o.on) === null || s === void 0 ? void 0 : s.connected) === null || l === void 0 || l.call(s, i, n), (u = (c = t == null ? void 0 : t.on) === null || c === void 0 ? void 0 : c.connected) === null || u === void 0 || u.call(c, i, n);
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
      r.authorization = "Basic " + Ia("gadget-internal:" + this.options.authenticationMode.internalAuthToken);
    else if (this.authenticationMode == q.APIKey)
      r.authorization = `Bearer ${(t = this.options.authenticationMode) === null || t === void 0 ? void 0 : t.apiKey}`;
    else if (this.authenticationMode == q.BrowserSession) {
      const i = this.sessionTokenStore.getItem(this.sessionStorageKey);
      i && (r.authorization = `Session ${i}`);
    }
    return r["x-gadget-environment"] = this.environment, r;
  }
  async waitForOpenedConnection(t) {
    let r = this.newSubscriptionClient(t), i = [], n = t.connectionAttempts || ha;
    const a = t.connectionGlobalTimeoutMs || ga, o = () => {
      i.forEach((s) => s()), i = [];
    };
    return await new Promise((s, l) => {
      const c = setTimeout(() => {
        this.disposeClient(r), f(new Vn("Timeout opening websocket connection to Gadget API"));
      }, a), u = (h) => {
        if (nr(h)) {
          if (h.code == sr.TooManyRequests)
            return o(), f(new Un(h.reason));
          if (va.includes(h.code) && n > 0) {
            n -= 1, this.disposeClient(r), r = this.newSubscriptionClient(t), y();
            return;
          }
        }
        clearTimeout(c), l(new Lr(h));
      }, f = (h) => {
        clearTimeout(c), l(h);
      }, p = () => {
        clearTimeout(c), s(r);
      }, y = () => {
        o(), i.push(r.on("connected", p)), i.push(r.on("closed", u)), i.push(r.on("error", f));
      };
      y();
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
Object.defineProperty(Ri, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "0.15.24"
});
function wa(e, t) {
  if (typeof e != "string")
    return e;
  if (lr(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function lr(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Aa = (e) => {
  var t;
  return e.kind !== "OperationDefinition" || e.operation !== "query" ? null : (t = e.directives) === null || t === void 0 ? void 0 : t.find((r) => r.name.value === "live");
}, ka = (e) => !!Aa(e), Na = (e, t, r, i) => {
  const n = be(e);
  return oe({
    type: "query",
    name: `InternalFind${n}`,
    fields: {
      internal: ce(r, {
        [e]: X({
          id: A({ value: t, type: "GadgetID!" }),
          select: A({ value: kr(i), type: "[String!]" })
        })
      }),
      ...Te(e, r)
    }
  });
}, Bi = (e, t, r) => ({
  search: r != null && r.search ? A({ value: r == null ? void 0 : r.search, type: "String" }) : void 0,
  sort: r != null && r.sort ? A({ value: r == null ? void 0 : r.sort, type: `[${Pi(e, t)}!]` }) : void 0,
  filter: r != null && r.filter ? A({ value: r == null ? void 0 : r.filter, type: `[${gr(e, t)}!]` }) : void 0,
  select: r != null && r.select ? A({ value: kr(r == null ? void 0 : r.select), type: "[String!]" }) : void 0
}), Oa = (e, t, r) => {
  const i = be(e), n = Bi(i, t, r);
  return oe({
    type: "query",
    name: `InternalFindFirst${i}`,
    fields: {
      internal: ce(t, {
        [`list${i}`]: X({
          ...n,
          first: A({ value: 1, type: "Int" })
        }, {
          edges: {
            node: !0
          }
        })
      }),
      ...Te(e, t)
    }
  });
}, Pa = (e, t, r) => {
  const i = be(e), n = Bi(i, t, r);
  return oe({
    type: "query",
    name: `InternalFindMany${i}`,
    fields: {
      internal: ce(t, {
        [`list${i}`]: X({
          ...n,
          after: A({ value: r == null ? void 0 : r.after, type: "String" }),
          before: A({ value: r == null ? void 0 : r.before, type: "String" }),
          first: A({ value: r == null ? void 0 : r.first, type: "Int" }),
          last: A({ value: r == null ? void 0 : r.last, type: "Int" })
        }, {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: !0 }
        })
      }),
      ...Te(e, t)
    }
  });
}, Ar = (e, t) => `Internal${br(e, t)}Input`, Ea = (e, t, r) => {
  const i = be(e);
  return oe({
    type: "mutation",
    name: `InternalCreate${i}`,
    fields: {
      internal: ce(t, {
        [`create${i}`]: X({
          [e]: A({ value: r, type: Ar(e, t) })
        }, {
          success: !0,
          ...We,
          [e]: !0
        })
      }),
      ...Te(e, t)
    }
  });
}, Ta = (e, t, r, i) => {
  be(e);
  const n = be(t);
  return oe({
    type: "mutation",
    name: `InternalBulkCreate${n}`,
    fields: {
      internal: ce(r, {
        [`bulkCreate${n}`]: X({
          [t]: A({ value: i, type: `[${Ar(e, r)}]!` })
        }, {
          success: !0,
          ...We,
          [t]: !0
        })
      }),
      ...Te(e, r)
    }
  });
}, Ca = (e, t, r, i) => {
  const n = be(e);
  return oe({
    type: "mutation",
    name: `InternalUpdate${n}`,
    fields: {
      internal: ce(t, {
        [`update${n}`]: X({
          id: A({ value: r, type: "GadgetID!" }),
          [e]: A({ value: i, type: Ar(e, t) })
        }, {
          success: !0,
          ...We,
          [e]: !0
        })
      }),
      ...Te(e, t)
    }
  });
}, Da = (e, t, r) => {
  const i = be(e);
  return oe({
    type: "mutation",
    name: `InternalDelete${i}`,
    fields: {
      internal: ce(t, {
        [`delete${i}`]: X({
          id: A({ value: r, type: "GadgetID!" })
        }, {
          success: !0,
          ...We
        })
      })
    }
  });
}, Fa = (e, t, r) => {
  const i = be(e);
  return oe({
    type: "mutation",
    name: `InternalDeleteMany${i}`,
    fields: {
      internal: ce(t, {
        [`deleteMany${i}`]: X({
          search: A({ value: r == null ? void 0 : r.search, type: "String" }),
          filter: A({ value: r == null ? void 0 : r.filter, type: `[${gr(e, t)}!]` })
        }, {
          success: !0,
          ...We
        })
      })
    }
  });
};
class ye {
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
    }), Object.defineProperty(this, "namespace", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.capitalizedApiIdentifier = gt(t), this.namespace = (i == null ? void 0 : i.namespace) || [];
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((i) => i === this.apiIdentifier);
  }
  getRecordFromData(t, r) {
    let i = t;
    if (!this.validateRecord(t))
      throw new Rt(`Invalid arguments found in variables. Did you mean to use ${r}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
    const n = Na(this.apiIdentifier, t, this.namespace, kr(r == null ? void 0 : r.select)), a = await this.connection.currentClient.query(n.query, n.variables).toPromise(), s = (i ? Ne : ct)(a, this.dataPath(this.apiIdentifier));
    return dt(a, s);
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
    const r = Pa(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.query(r.query, r.variables).toPromise(), n = ct(i, this.dataPath(`list${this.capitalizedApiIdentifier}`)), a = Mt(i, n);
    return mt.boot(this, a, { options: t, pageInfo: n.pageInfo });
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
    const i = Oa(this.apiIdentifier, this.namespace, t), n = await this.connection.currentClient.query(i.query, i.variables).toPromise(), a = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let o;
    r === !1 ? o = ct(n, a) : o = Ne(n, a, r);
    const s = Mt(n, o);
    return mt.boot(this, s, { options: t, pageInfo: o.pageInfo })[0];
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
    const r = Ea(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")), i = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(), n = qe(i, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return dt(i, n[this.apiIdentifier]);
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
      throw new rr("Cannot perform bulkCreate without a pluralApiIdentifier");
    const i = be(this.options.pluralApiIdentifier), n = Ta(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t), a = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(), o = qe(a, this.dataPath(`bulkCreate${i}`));
    return vr(a, o[this.options.pluralApiIdentifier]);
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
    ir(t, "Can't update a record without an ID passed");
    const i = Ca(this.apiIdentifier, this.namespace, t, this.getRecordFromData(r, "update")), n = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(), a = qe(n, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return dt(n, a[this.apiIdentifier]);
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
    ir(t, "Can't delete a record without an ID");
    const r = Da(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    qe(i, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
    const r = Fa(this.apiIdentifier, this.namespace, t), i = await this.connection.currentClient.mutation(r.query, r.variables).toPromise();
    qe(i, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...ze([t], this.namespace)];
  }
}
function kr(e) {
  if (!e)
    return;
  if (Array.isArray(e))
    return e;
  const t = [];
  for (const [r, i] of Object.entries(e))
    i && t.push(r);
  return t;
}
const pe = (e, t, r, i) => {
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
            return await ra(
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
            const l = await Yr(
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
          return await Zr(this, t, r, e, o);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        n.prototype[a.type] = Object.assign(async function(o) {
          const s = await Zr(
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
          return await Yr(this, a.operationName, void 0, r, e, o);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const o = !!a.variables.ids;
          n.prototype[a.functionName] = Object.assign(
            async function(s, l) {
              let c;
              return o ? c = {
                ids: {
                  ...a.variables.ids,
                  value: s
                }
              } : c = {
                inputs: {
                  ...a.variables.inputs,
                  value: s.map(
                    (u) => $i(this[a.singleActionFunctionName], void 0, u)
                  )
                }
              }, await Xr(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !0,
                c,
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
              const [c, u] = xa(a, o, s, l);
              return await Xr(
                this,
                a.operationName,
                a.isDeleter ? null : r,
                e,
                a.modelSelectionField,
                !1,
                c,
                u,
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
function $i(e, t, r = {}) {
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
function xa(e, t, r, i) {
  let n, a;
  t && (n = i.shift()), r && (a = i.shift());
  const o = i.shift();
  let s = a;
  (n || a) && (s = $i(e, n, a));
  const l = {};
  for (const [c, u] of Object.entries(e.variables))
    l[c] = {
      value: c == "id" ? n : s == null ? void 0 : s[c],
      ...u
    };
  return [l, o];
}
const se = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  email: !0,
  roles: { key: !0, name: !0 },
  updatedAt: !0
}, F = "user", Pe = "users", Ma = pe(
  F,
  Pe,
  se,
  [
    {
      type: "findOne",
      operationName: F,
      modelApiIdentifier: F,
      findByVariableName: "id",
      defaultSelection: se
    },
    {
      type: "maybeFindOne",
      operationName: F,
      modelApiIdentifier: F,
      findByVariableName: "id",
      defaultSelection: se
    },
    {
      type: "findMany",
      operationName: Pe,
      modelApiIdentifier: F,
      defaultSelection: se
    },
    {
      type: "findFirst",
      operationName: Pe,
      modelApiIdentifier: F,
      defaultSelection: se
    },
    {
      type: "maybeFindFirst",
      operationName: Pe,
      modelApiIdentifier: F,
      defaultSelection: se
    },
    {
      type: "findOne",
      operationName: Pe,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: F,
      defaultSelection: se
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: F,
      modelSelectionField: F,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: se
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
      modelApiIdentifier: F,
      modelSelectionField: Pe,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: se
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: F,
      modelSelectionField: F,
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
      defaultSelection: se
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
      modelApiIdentifier: F,
      modelSelectionField: Pe,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: se
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: F,
      modelSelectionField: F,
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
      modelApiIdentifier: F,
      modelSelectionField: Pe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: F,
      modelSelectionField: F,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: se
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
      modelApiIdentifier: F,
      modelSelectionField: Pe,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: se
    }
  ]
), ve = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, te = "session", He = "sessions", ja = pe(
  te,
  He,
  ve,
  [
    {
      type: "findOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "maybeFindOne",
      operationName: te,
      modelApiIdentifier: te,
      findByVariableName: "id",
      defaultSelection: ve
    },
    {
      type: "findMany",
      operationName: He,
      modelApiIdentifier: te,
      defaultSelection: ve
    },
    {
      type: "findFirst",
      operationName: He,
      modelApiIdentifier: te,
      defaultSelection: ve
    },
    {
      type: "maybeFindFirst",
      operationName: He,
      modelApiIdentifier: te,
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: te,
      modelSelectionField: te,
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
      defaultSelection: ve
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
      modelApiIdentifier: te,
      modelSelectionField: He,
      namespace: "currentSession",
      variables: {
        inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" }
      },
      defaultSelection: ve
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: te,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ve
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
      modelApiIdentifier: te,
      modelSelectionField: He,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: ve
    }
  ]
), Se = {
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
}, z = "shopifyProduct", Re = "shopifyProducts", qa = pe(
  z,
  Re,
  Se,
  [
    {
      type: "findOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "maybeFindOne",
      operationName: z,
      modelApiIdentifier: z,
      findByVariableName: "id",
      defaultSelection: Se
    },
    {
      type: "findMany",
      operationName: Re,
      modelApiIdentifier: z,
      defaultSelection: Se
    },
    {
      type: "findFirst",
      operationName: Re,
      modelApiIdentifier: z,
      defaultSelection: Se
    },
    {
      type: "maybeFindFirst",
      operationName: Re,
      modelApiIdentifier: z,
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      defaultSelection: Se
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
      modelApiIdentifier: z,
      modelSelectionField: Re,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: z,
      modelSelectionField: z,
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
      defaultSelection: Se
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
      modelApiIdentifier: z,
      modelSelectionField: Re,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" }
      },
      defaultSelection: Se
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
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
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: z,
      modelSelectionField: Re,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ie = {
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
}, W = "shopifyProductImage", Be = "shopifyProductImages", _a = pe(
  W,
  Be,
  Ie,
  [
    {
      type: "findOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: Ie
    },
    {
      type: "maybeFindOne",
      operationName: W,
      modelApiIdentifier: W,
      findByVariableName: "id",
      defaultSelection: Ie
    },
    {
      type: "findMany",
      operationName: Be,
      modelApiIdentifier: W,
      defaultSelection: Ie
    },
    {
      type: "findFirst",
      operationName: Be,
      modelApiIdentifier: W,
      defaultSelection: Ie
    },
    {
      type: "maybeFindFirst",
      operationName: Be,
      modelApiIdentifier: W,
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      defaultSelection: Ie
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
      modelApiIdentifier: W,
      modelSelectionField: Be,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
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
      defaultSelection: Ie
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
      modelApiIdentifier: W,
      modelSelectionField: Be,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductImagesInput!]"
        }
      },
      defaultSelection: Ie
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
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
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: W,
      modelSelectionField: Be,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), we = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  name: !0,
  position: !0,
  updatedAt: !0,
  values: !0
}, K = "shopifyProductOption", $e = "shopifyProductOptions", Ra = pe(
  K,
  $e,
  we,
  [
    {
      type: "findOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: we
    },
    {
      type: "maybeFindOne",
      operationName: K,
      modelApiIdentifier: K,
      findByVariableName: "id",
      defaultSelection: we
    },
    {
      type: "findMany",
      operationName: $e,
      modelApiIdentifier: K,
      defaultSelection: we
    },
    {
      type: "findFirst",
      operationName: $e,
      modelApiIdentifier: K,
      defaultSelection: we
    },
    {
      type: "maybeFindFirst",
      operationName: $e,
      modelApiIdentifier: K,
      defaultSelection: we
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
      defaultSelection: we
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
      modelSelectionField: $e,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: we
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
      defaultSelection: we
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
      modelSelectionField: $e,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductOptionsInput!]"
        }
      },
      defaultSelection: we
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
      modelSelectionField: $e,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), Ae = {
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
}, Q = "shopifyProductVariant", Ve = "shopifyProductVariants", Ba = pe(
  Q,
  Ve,
  Ae,
  [
    {
      type: "findOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Ae
    },
    {
      type: "maybeFindOne",
      operationName: Q,
      modelApiIdentifier: Q,
      findByVariableName: "id",
      defaultSelection: Ae
    },
    {
      type: "findMany",
      operationName: Ve,
      modelApiIdentifier: Q,
      defaultSelection: Ae
    },
    {
      type: "findFirst",
      operationName: Ve,
      modelApiIdentifier: Q,
      defaultSelection: Ae
    },
    {
      type: "maybeFindFirst",
      operationName: Ve,
      modelApiIdentifier: Q,
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      defaultSelection: Ae
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
      modelApiIdentifier: Q,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkCreateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Q,
      modelSelectionField: Q,
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
      defaultSelection: Ae
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
      modelApiIdentifier: Q,
      modelSelectionField: Ve,
      namespace: null,
      variables: {
        inputs: {
          required: !0,
          type: "[BulkUpdateShopifyProductVariantsInput!]"
        }
      },
      defaultSelection: Ae
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
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
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Q,
      modelSelectionField: Ve,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), re = {
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
}, E = "shopifyShop", Ee = "shopifyShops", $a = pe(
  E,
  Ee,
  re,
  [
    {
      type: "findOne",
      operationName: E,
      modelApiIdentifier: E,
      findByVariableName: "id",
      defaultSelection: re
    },
    {
      type: "maybeFindOne",
      operationName: E,
      modelApiIdentifier: E,
      findByVariableName: "id",
      defaultSelection: re
    },
    {
      type: "findMany",
      operationName: Ee,
      modelApiIdentifier: E,
      defaultSelection: re
    },
    {
      type: "findFirst",
      operationName: Ee,
      modelApiIdentifier: E,
      defaultSelection: re
    },
    {
      type: "maybeFindFirst",
      operationName: Ee,
      modelApiIdentifier: E,
      defaultSelection: re
    },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: E,
      modelSelectionField: E,
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
      defaultSelection: re
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
      modelApiIdentifier: E,
      modelSelectionField: Ee,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" }
      },
      defaultSelection: re
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: E,
      modelSelectionField: E,
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
      defaultSelection: re
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
      modelApiIdentifier: E,
      modelSelectionField: Ee,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" }
      },
      defaultSelection: re
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: E,
      modelSelectionField: E,
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
      modelApiIdentifier: E,
      modelSelectionField: Ee,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: E,
      modelSelectionField: E,
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
      defaultSelection: re
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
      modelApiIdentifier: E,
      modelSelectionField: Ee,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" }
      },
      defaultSelection: re
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: E,
      modelSelectionField: E,
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
      defaultSelection: re
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
      modelApiIdentifier: E,
      modelSelectionField: Ee,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" }
      },
      defaultSelection: re
    }
  ]
), ke = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  updatedAt: !0
}, J = "productPairing", Ue = "productPairings", Va = pe(
  J,
  Ue,
  ke,
  [
    {
      type: "findOne",
      operationName: J,
      modelApiIdentifier: J,
      findByVariableName: "id",
      defaultSelection: ke
    },
    {
      type: "maybeFindOne",
      operationName: J,
      modelApiIdentifier: J,
      findByVariableName: "id",
      defaultSelection: ke
    },
    {
      type: "findMany",
      operationName: Ue,
      modelApiIdentifier: J,
      defaultSelection: ke
    },
    {
      type: "findFirst",
      operationName: Ue,
      modelApiIdentifier: J,
      defaultSelection: ke
    },
    {
      type: "maybeFindFirst",
      operationName: Ue,
      modelApiIdentifier: J,
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ke
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
      modelApiIdentifier: J,
      modelSelectionField: Ue,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" }
      },
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      defaultSelection: ke
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
      modelApiIdentifier: J,
      modelSelectionField: Ue,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" }
      },
      defaultSelection: ke
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: J,
      modelSelectionField: J,
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
      modelApiIdentifier: J,
      modelSelectionField: Ue,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), le = {
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
}, B = "shopifySync", Ce = "shopifySyncs", Ua = pe(
  B,
  Ce,
  le,
  [
    {
      type: "findOne",
      operationName: B,
      modelApiIdentifier: B,
      findByVariableName: "id",
      defaultSelection: le
    },
    {
      type: "maybeFindOne",
      operationName: B,
      modelApiIdentifier: B,
      findByVariableName: "id",
      defaultSelection: le
    },
    {
      type: "findMany",
      operationName: Ce,
      modelApiIdentifier: B,
      defaultSelection: le
    },
    {
      type: "findFirst",
      operationName: Ce,
      modelApiIdentifier: B,
      defaultSelection: le
    },
    {
      type: "maybeFindFirst",
      operationName: Ce,
      modelApiIdentifier: B,
      defaultSelection: le
    },
    {
      type: "findOne",
      operationName: Ce,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: B,
      defaultSelection: le
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
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
      defaultSelection: le
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
      modelApiIdentifier: B,
      modelSelectionField: Ce,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" }
      },
      defaultSelection: le
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
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
      defaultSelection: le
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
      modelApiIdentifier: B,
      modelSelectionField: Ce,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" }
      },
      defaultSelection: le
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: B,
      modelSelectionField: B,
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
      defaultSelection: le
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
      modelApiIdentifier: B,
      modelSelectionField: Ce,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: le
    }
  ]
), me = {
  __typename: !0,
  id: !0,
  ambiguous: !0,
  booleanField: !0,
  createdAt: !0,
  updatedAt: !0
}, $ = "ambiguous", De = "ambiguouss", Ga = pe(
  $,
  De,
  me,
  [
    {
      type: "findOne",
      operationName: $,
      modelApiIdentifier: $,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "maybeFindOne",
      operationName: $,
      modelApiIdentifier: $,
      findByVariableName: "id",
      defaultSelection: me
    },
    {
      type: "findMany",
      operationName: De,
      modelApiIdentifier: $,
      defaultSelection: me
    },
    {
      type: "findFirst",
      operationName: De,
      modelApiIdentifier: $,
      defaultSelection: me
    },
    {
      type: "maybeFindFirst",
      operationName: De,
      modelApiIdentifier: $,
      defaultSelection: me
    },
    {
      type: "findOne",
      operationName: De,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: $,
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me
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
      modelApiIdentifier: $,
      modelSelectionField: De,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
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
      defaultSelection: me
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
      modelApiIdentifier: $,
      modelSelectionField: De,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: me
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: $,
      modelSelectionField: $,
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
      modelApiIdentifier: $,
      modelSelectionField: De,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), he = {
  __typename: !0,
  id: !0,
  createdAt: !0,
  numberField: !0,
  stringField: !0,
  updatedAt: !0
}, V = "unambiguous", Fe = "unambiguouss", La = pe(
  V,
  Fe,
  he,
  [
    {
      type: "findOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "maybeFindOne",
      operationName: V,
      modelApiIdentifier: V,
      findByVariableName: "id",
      defaultSelection: he
    },
    {
      type: "findMany",
      operationName: Fe,
      modelApiIdentifier: V,
      defaultSelection: he
    },
    {
      type: "findFirst",
      operationName: Fe,
      modelApiIdentifier: V,
      defaultSelection: he
    },
    {
      type: "maybeFindFirst",
      operationName: Fe,
      modelApiIdentifier: V,
      defaultSelection: he
    },
    {
      type: "findOne",
      operationName: Fe,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: V,
      defaultSelection: he
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
      defaultSelection: he
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
      modelSelectionField: Fe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" }
      },
      defaultSelection: he
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
      defaultSelection: he
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
      modelSelectionField: Fe,
      namespace: null,
      variables: {
        inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" }
      },
      defaultSelection: he
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
      modelSelectionField: Fe,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null
    }
  ]
), ni = {
  __typename: !0,
  id: !0,
  state: !0,
  createdAt: !0,
  roles: { key: !0, name: !0 },
  shopifySID: !0,
  updatedAt: !0
}, ai = "session", za = "sessions", Wa = pe(
  ai,
  za,
  ni,
  [
    {
      type: "get",
      operationName: "currentSession",
      defaultSelection: ni,
      modelApiIdentifier: ai
    }
  ]
);
var Vi;
const oi = "production", Ka = "development", Qa = Symbol.for("gadget/modelRelationships"), Ja = () => {
  try {
    return process.env.GADGET_ENV;
  } catch {
    return;
  }
};
class Ha {
  constructor(t) {
    var n;
    this.apiRoots = { development: "https://related-products-example.gadget.app/", production: "https://related-products-example.gadget.host/" }, this.applicationId = "1268", this[Vi] = { user: { sessions: { type: "HasMany", model: "session" } }, session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } }, shopifyProduct: { incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, images: { type: "HasMany", model: "shopifyProductImage" }, options: { type: "HasMany", model: "shopifyProductOption" }, variants: { type: "HasMany", model: "shopifyProductVariant" }, pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductImage: { variants: { type: "HasMany", model: "shopifyProductVariant" }, product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyProductVariant: { product: { type: "BelongsTo", model: "shopifyProduct" }, productImage: { type: "BelongsTo", model: "shopifyProductImage" }, shop: { type: "BelongsTo", model: "shopifyShop" } }, shopifyShop: { productImages: { type: "HasMany", model: "shopifyProductImage" }, productOptions: { type: "HasMany", model: "shopifyProductOption" }, syncs: { type: "HasMany", model: "shopifySync" }, products: { type: "HasMany", model: "shopifyProduct" }, productVariants: { type: "HasMany", model: "shopifyProductVariant" } }, productPairing: { productA: { type: "BelongsTo", model: "shopifyProduct" }, productB: { type: "BelongsTo", model: "shopifyProduct" } }, shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } }, ambiguous: {}, unambiguous: {} }, this.globalShopifySync = Object.assign(
      async (a) => await ei(
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
      async () => await ei(
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
    })).gadgetMeta.directUploadToken, this.environment = ((t == null ? void 0 : t.environment) ?? Ja() ?? Ka).toLocaleLowerCase();
    let r;
    this.apiRoots[this.environment] ? r = this.apiRoots[this.environment] : r = `https://related-products-example${this.environment == oi ? "" : `--${this.environment}`}.gadget.app`;
    const i = { ...t == null ? void 0 : t.exchanges };
    if (this.environment !== oi) {
      const a = ({ forward: o }) => (s) => {
        const l = o(s);
        return pr(
          l,
          et((c) => {
            try {
              if (typeof window < "u" && typeof CustomEvent == "function") {
                const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: c });
                window.dispatchEvent(u);
              }
            } catch (u) {
              console.warn("[gadget] error dispatching gadget dev harness event", u);
            }
            return c;
          })
        );
      };
      i.beforeAll = [
        a,
        ...i.beforeAll ?? []
      ];
    }
    if (this.connection = new Ri({
      endpoint: new URL("api/graphql", r).toString(),
      applicationId: this.applicationId,
      authenticationMode: (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
      ...t,
      exchanges: i,
      environment: this.environment
    }), typeof window < "u" && this.connection.authenticationMode == q.APIKey && !((n = t == null ? void 0 : t.authenticationMode) != null && n.dangerouslyAllowBrowserApiKey))
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    this.user = new Ma(this.connection), this.session = new ja(this.connection), this.shopifyProduct = new qa(this.connection), this.shopifyProductImage = new _a(this.connection), this.shopifyProductOption = new Ra(this.connection), this.shopifyProductVariant = new Ba(this.connection), this.shopifyShop = new $a(this.connection), this.productPairing = new Va(this.connection), this.shopifySync = new Ua(this.connection), this.ambiguous = new Ga(this.connection), this.unambiguous = new La(this.connection), this.currentSession = new Wa(this.connection), this.internal = {
      user: new ye("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      session: new ye("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProduct: new ye("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductImage: new ye("shopifyProductImage", this.connection, {
        pluralApiIdentifier: "shopifyProductImages",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductOption: new ye("shopifyProductOption", this.connection, {
        pluralApiIdentifier: "shopifyProductOptions",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyProductVariant: new ye("shopifyProductVariant", this.connection, {
        pluralApiIdentifier: "shopifyProductVariants",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifyShop: new ye("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      productPairing: new ye("productPairing", this.connection, {
        pluralApiIdentifier: "productPairings",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      shopifySync: new ye("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: !1
      }),
      ambiguous: new ye("ambiguous", this.connection, {
        pluralApiIdentifier: "ambiguouss",
        // @ts-ignore
        hasAmbiguousIdentifier: !0
      }),
      unambiguous: new ye("unambiguous", this.connection, {
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
    ir(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let n, a;
    return typeof i < "u" ? (n = r, a = i) : !t.variables || Object.keys(t.variables).length == 0 ? (n = {}, a = r) : (typeof r == "string" ? n = { id: r } : n = r, a = {}), await ia(this.connection, t, n, a);
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
    return new Ot(this.connection, t, r);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Vi = Qa;
const Ya = new Ha(), Xa = async () => {
  await Ya.shopifyProduct.findMany();
};
export {
  Xa as read
};
