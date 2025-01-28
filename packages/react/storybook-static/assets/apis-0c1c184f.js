var Kp = Object.defineProperty;
var Jp = (e, t, i) => (t in e ? Kp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[t] = i));
var qr = (e, t, i) => (Jp(e, typeof t != "symbol" ? t + "" : t, i), i);
import { _ as Td } from "./iframe-35b6cbe2.js";
import { R as U, g as Yu, r as ae } from "./index-7c191284.js";
var Yp = typeof Element < "u",
  Zp = typeof Map == "function",
  Xp = typeof Set == "function",
  ef = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Xs(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var i, n, r;
    if (Array.isArray(e)) {
      if (((i = e.length), i != t.length)) return !1;
      for (n = i; n-- !== 0; ) if (!Xs(e[n], t[n])) return !1;
      return !0;
    }
    var a;
    if (Zp && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; ) if (!t.has(n.value[0])) return !1;
      for (a = e.entries(); !(n = a.next()).done; ) if (!Xs(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Xp && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; ) if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (ef && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((i = e.length), i != t.length)) return !1;
      for (n = i; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (((r = Object.keys(e)), (i = r.length), i !== Object.keys(t).length)) return !1;
    for (n = i; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, r[n])) return !1;
    if (Yp && e instanceof Element) return !1;
    for (n = i; n-- !== 0; )
      if (!((r[n] === "_owner" || r[n] === "__v" || r[n] === "__o") && e.$$typeof) && !Xs(e[r[n]], t[r[n]])) return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var tf = function (t, i) {
  try {
    return Xs(t, i);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const nf = Yu(tf),
  GS = Symbol.for("gadget/modelRelationships"),
  af = (e) => e && "connection" in e && e.connection && "endpoint" in e.connection;
var jo = () => {},
  Vi = jo;
function On(e) {
  return { tag: 0, 0: e };
}
function Vs(e) {
  return { tag: 1, 0: e };
}
var rf = (e) => e;
function ct(e) {
  return (t) => (i) => {
    var n = Vi;
    t((r) => {
      r === 0 ? i(0) : r.tag === 0 ? ((n = r[0]), i(r)) : e(r[0]) ? i(r) : n(0);
    });
  };
}
function ri(e) {
  return (t) => (i) =>
    t((n) => {
      n === 0 || n.tag === 0 ? i(n) : i(Vs(e(n[0])));
    });
}
function Os(e) {
  return (t) => (i) => {
    var n = [],
      r = Vi,
      a = !1,
      s = !1;
    t((l) => {
      s ||
        (l === 0
          ? ((s = !0), n.length || i(0))
          : l.tag === 0
          ? (r = l[0])
          : ((a = !1),
            (function (d) {
              var u = Vi;
              d((f) => {
                if (f === 0) {
                  if (n.length) {
                    var c = n.indexOf(u);
                    c > -1 && (n = n.slice()).splice(c, 1), n.length || (s ? i(0) : a || ((a = !0), r(0)));
                  }
                } else f.tag === 0 ? (n.push((u = f[0])), u(0)) : n.length && (i(f), u(0));
              });
            })(e(l[0])),
            a || ((a = !0), r(0))));
    }),
      i(
        On((l) => {
          if (l === 1) {
            s || ((s = !0), r(1));
            for (var o = 0, d = n, u = n.length; o < u; o++) d[o](1);
            n.length = 0;
          } else {
            !s && !a ? ((a = !0), r(0)) : (a = !1);
            for (var f = 0, c = n, y = n.length; f < y; f++) c[f](0);
          }
        })
      );
  };
}
function sf(e) {
  return Os(rf)(e);
}
function ts(e) {
  return sf(df(e));
}
function Wo(e) {
  return (t) => (i) => {
    var n = !1;
    t((r) => {
      if (!n)
        if (r === 0) (n = !0), i(0), e();
        else if (r.tag === 0) {
          var a = r[0];
          i(
            On((s) => {
              s === 1 ? ((n = !0), a(1), e()) : a(s);
            })
          );
        } else i(r);
    });
  };
}
function Ts(e) {
  return (t) => (i) => {
    var n = !1;
    t((r) => {
      if (!n)
        if (r === 0) (n = !0), i(0);
        else if (r.tag === 0) {
          var a = r[0];
          i(
            On((s) => {
              s === 1 && (n = !0), a(s);
            })
          );
        } else e(r[0]), i(r);
    });
  };
}
function Rd(e) {
  return (t) => (i) =>
    t((n) => {
      n === 0 ? i(0) : n.tag === 0 ? (i(n), e()) : i(n);
    });
}
function Rs(e) {
  var t = [],
    i = Vi,
    n = !1;
  return (r) => {
    t.push(r),
      t.length === 1 &&
        e((a) => {
          if (a === 0) {
            for (var s = 0, l = t, o = t.length; s < o; s++) l[s](0);
            t.length = 0;
          } else if (a.tag === 0) i = a[0];
          else {
            n = !1;
            for (var d = 0, u = t, f = t.length; d < f; d++) u[d](a);
          }
        }),
      r(
        On((a) => {
          if (a === 1) {
            var s = t.indexOf(r);
            s > -1 && (t = t.slice()).splice(s, 1), t.length || i(1);
          } else n || ((n = !0), i(0));
        })
      );
  };
}
function Bd(e) {
  return (t) => (i) => {
    var n = Vi,
      r = Vi,
      a = !1,
      s = !1,
      l = !1,
      o = !1;
    t((d) => {
      o ||
        (d === 0
          ? ((o = !0), l || i(0))
          : d.tag === 0
          ? (n = d[0])
          : (l && (r(1), (r = Vi)),
            a ? (a = !1) : ((a = !0), n(0)),
            (function (f) {
              (l = !0),
                f((c) => {
                  l &&
                    (c === 0
                      ? ((l = !1), o ? i(0) : a || ((a = !0), n(0)))
                      : c.tag === 0
                      ? ((s = !1), (r = c[0])(0))
                      : (i(c), s ? (s = !1) : r(0)));
                });
            })(e(d[0]))));
    }),
      i(
        On((d) => {
          d === 1 ? (o || ((o = !0), n(1)), l && ((l = !1), r(1))) : (!o && !a && ((a = !0), n(0)), l && !s && ((s = !0), r(0)));
        })
      );
  };
}
function Es(e) {
  return (t) => (i) => {
    var n = Vi,
      r = !1,
      a = 0;
    t((s) => {
      r ||
        (s === 0
          ? ((r = !0), i(0))
          : s.tag === 0
          ? e <= 0
            ? ((r = !0), i(0), s[0](1))
            : (n = s[0])
          : a++ < e
          ? (i(s), !r && a >= e && ((r = !0), i(0), n(1)))
          : i(s));
    }),
      i(
        On((s) => {
          s === 1 && !r ? ((r = !0), n(1)) : s === 0 && !r && a < e && n(0);
        })
      );
  };
}
function Lo(e) {
  return (t) => (i) => {
    var n = Vi,
      r = Vi,
      a = !1;
    t((s) => {
      a ||
        (s === 0
          ? ((a = !0), r(1), i(0))
          : s.tag === 0
          ? ((n = s[0]),
            e((l) => {
              l === 0 || (l.tag === 0 ? (r = l[0])(0) : ((a = !0), r(1), n(1), i(0)));
            }))
          : i(s));
    }),
      i(
        On((s) => {
          s === 1 && !a ? ((a = !0), n(1), r(1)) : a || n(0);
        })
      );
  };
}
function Zu(e, t) {
  return (i) => (n) => {
    var r = Vi,
      a = !1;
    i((s) => {
      a || (s === 0 ? ((a = !0), n(0)) : s.tag === 0 ? ((r = s[0]), n(s)) : e(s[0]) ? n(s) : ((a = !0), t && n(s), n(0), r(1)));
    });
  };
}
function lf(e) {
  return (t) => e()(t);
}
function Xu(e) {
  return (t) => {
    var i = e[Symbol.asyncIterator](),
      n = !1,
      r = !1,
      a = !1,
      s;
    t(
      On(async (l) => {
        if (l === 1) (n = !0), i.return && i.return();
        else if (r) a = !0;
        else {
          for (a = r = !0; a && !n; )
            if ((s = await i.next()).done) (n = !0), i.return && (await i.return()), t(0);
            else
              try {
                (a = !1), t(Vs(s.value));
              } catch (o) {
                if (i.throw) (n = !!(await i.throw(o)).done) && t(0);
                else throw o;
              }
          r = !1;
        }
      })
    );
  };
}
function of(e) {
  return e[Symbol.asyncIterator]
    ? Xu(e)
    : (t) => {
        var i = e[Symbol.iterator](),
          n = !1,
          r = !1,
          a = !1,
          s;
        t(
          On((l) => {
            if (l === 1) (n = !0), i.return && i.return();
            else if (r) a = !0;
            else {
              for (a = r = !0; a && !n; )
                if ((s = i.next()).done) (n = !0), i.return && i.return(), t(0);
                else
                  try {
                    (a = !1), t(Vs(s.value));
                  } catch (o) {
                    if (i.throw) (n = !!i.throw(o).done) && t(0);
                    else throw o;
                  }
              r = !1;
            }
          })
        );
      };
}
var df = of;
function vs(e) {
  return (t) => {
    var i = !1;
    t(
      On((n) => {
        n === 1 ? (i = !0) : i || ((i = !0), t(Vs(e)), t(0));
      })
    );
  };
}
function zo(e) {
  return (t) => {
    var i = !1,
      n = e({
        next(r) {
          i || t(Vs(r));
        },
        complete() {
          i || ((i = !0), t(0));
        },
      });
    t(
      On((r) => {
        r === 1 && !i && ((i = !0), n());
      })
    );
  };
}
function uf() {
  var e, t;
  return {
    source: Rs(zo((i) => ((e = i.next), (t = i.complete), jo))),
    next(i) {
      e && e(i);
    },
    complete() {
      t && t();
    },
  };
}
function Dd(e) {
  return zo(
    (t) => (
      e.then((i) => {
        Promise.resolve(i).then(() => {
          t.next(i), t.complete();
        });
      }),
      jo
    )
  );
}
function is(e) {
  return (t) => {
    var i = Vi,
      n = !1;
    return (
      t((r) => {
        r === 0 ? (n = !0) : r.tag === 0 ? (i = r[0])(0) : n || (e(r[0]), i(0));
      }),
      {
        unsubscribe() {
          n || ((n = !0), i(1));
        },
      }
    );
  };
}
function cf(e) {
  is((t) => {})(e);
}
var $l = { done: !0 },
  pf = (e) => ({
    [Symbol.asyncIterator]() {
      var t = [],
        i = !1,
        n = Vi,
        r;
      return (
        e((a) => {
          i ||
            (a === 0 ? (r && (r = r($l)), (i = !0)) : a.tag === 0 ? (n = a[0])(0) : r ? (r = r({ value: a[0], done: !1 })) : t.push(a[0]));
        }),
        {
          async next() {
            return i && !t.length
              ? $l
              : (!i && t.length <= 1 && n(0), t.length ? { value: t.shift(), done: !1 } : new Promise((a) => (r = a)));
          },
          async return() {
            return i || (r = n(1)), (i = !0), $l;
          },
        }
      );
    },
  });
function Al(e) {
  return new Promise((t) => {
    var i = Vi,
      n;
    e((r) => {
      r === 0 ? Promise.resolve(n).then(t) : r.tag === 0 ? (i = r[0])(0) : ((n = r[0]), i(0));
    });
  });
}
var sn = (...e) => {
    for (var t = e[0], i = 1, n = e.length; i < n; i++) t = e[i](t);
    return t;
  },
  Is = {
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
    NON_NULL_TYPE: "NonNullType",
  };
class Bs extends Error {
  constructor(t, i, n, r, a, s, l) {
    super(t),
      (this.name = "GraphQLError"),
      (this.message = t),
      a && (this.path = a),
      i && (this.nodes = Array.isArray(i) ? i : [i]),
      n && (this.source = n),
      r && (this.positions = r),
      s && (this.originalError = s);
    var o = l;
    if (!o && s) {
      var d = s.extensions;
      d && typeof d == "object" && (o = d);
    }
    this.extensions = o || {};
  }
  toJSON() {
    return { ...this, message: this.message };
  }
  toString() {
    return this.message;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
}
var Ne, L;
function pt(e) {
  return new Bs(`Syntax Error: Unexpected token at ${L} in ${e}`);
}
function Hi(e) {
  if (((e.lastIndex = L), e.test(Ne))) return Ne.slice(L, (L = e.lastIndex));
}
var Qs = / +(?=[^\s])/y;
function ff(e) {
  for (
    var t = e.split(`
`),
      i = "",
      n = 0,
      r = 0,
      a = t.length - 1,
      s = 0;
    s < t.length;
    s++
  )
    (Qs.lastIndex = 0), Qs.test(t[s]) && (s && (!n || Qs.lastIndex < n) && (n = Qs.lastIndex), (r = r || s), (a = s));
  for (var l = r; l <= a; l++)
    l !== r &&
      (i += `
`),
      (i += t[l].slice(n).replace(/\\"""/g, '"""'));
  return i;
}
function Q() {
  for (
    var e = 0 | Ne.charCodeAt(L++);
    e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
    e = 0 | Ne.charCodeAt(L++)
  )
    if (e === 35) for (; (e = Ne.charCodeAt(L++)) !== 10 && e !== 13; );
  L--;
}
var ec = /[_A-Za-z]\w*/y;
function ha() {
  var e;
  if ((e = Hi(ec))) return { kind: "Name", value: e };
}
var mf = /(?:null|true|false)/y,
  tc = /\$[_A-Za-z]\w*/y,
  yf = /-?\d+/y,
  hf = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
  gf = /\\/g,
  bf = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
  If = /"(?:"|[^\r\n]*?[^\\]")/y;
function sl(e) {
  var t, i;
  if ((i = Hi(mf))) t = i === "null" ? { kind: "NullValue" } : { kind: "BooleanValue", value: i === "true" };
  else if (!e && (i = Hi(tc))) t = { kind: "Variable", name: { kind: "Name", value: i.slice(1) } };
  else if ((i = Hi(yf))) {
    var n = i;
    (i = Hi(hf)) ? (t = { kind: "FloatValue", value: n + i }) : (t = { kind: "IntValue", value: n });
  } else if ((i = Hi(ec))) t = { kind: "EnumValue", value: i };
  else if ((i = Hi(bf))) t = { kind: "StringValue", value: ff(i.slice(3, -3)), block: !0 };
  else if ((i = Hi(If))) t = { kind: "StringValue", value: gf.test(i) ? JSON.parse(i) : i.slice(1, -1), block: !1 };
  else if (
    (t =
      (function (a) {
        var s;
        if (Ne.charCodeAt(L) === 91) {
          L++, Q();
          for (var l = []; (s = sl(a)); ) l.push(s);
          if (Ne.charCodeAt(L++) !== 93) throw pt("ListValue");
          return Q(), { kind: "ListValue", values: l };
        }
      })(e) ||
      (function (a) {
        if (Ne.charCodeAt(L) === 123) {
          L++, Q();
          for (var s = [], l; (l = ha()); ) {
            if ((Q(), Ne.charCodeAt(L++) !== 58)) throw pt("ObjectField");
            Q();
            var o = sl(a);
            if (!o) throw pt("ObjectField");
            s.push({ kind: "ObjectField", name: l, value: o });
          }
          if (Ne.charCodeAt(L++) !== 125) throw pt("ObjectValue");
          return Q(), { kind: "ObjectValue", fields: s };
        }
      })(e))
  )
    return t;
  return Q(), t;
}
function ic(e) {
  var t = [];
  if ((Q(), Ne.charCodeAt(L) === 40)) {
    L++, Q();
    for (var i; (i = ha()); ) {
      if ((Q(), Ne.charCodeAt(L++) !== 58)) throw pt("Argument");
      Q();
      var n = sl(e);
      if (!n) throw pt("Argument");
      t.push({ kind: "Argument", name: i, value: n });
    }
    if (!t.length || Ne.charCodeAt(L++) !== 41) throw pt("Argument");
    Q();
  }
  return t;
}
function ns(e) {
  var t = [];
  for (Q(); Ne.charCodeAt(L) === 64; ) {
    L++;
    var i = ha();
    if (!i) throw pt("Directive");
    Q(), t.push({ kind: "Directive", name: i, arguments: ic(e) });
  }
  return t;
}
function Sf() {
  var e = ha();
  if (e) {
    Q();
    var t;
    if (Ne.charCodeAt(L) === 58) {
      if ((L++, Q(), (t = e), !(e = ha()))) throw pt("Field");
      Q();
    }
    return { kind: "Field", alias: t, name: e, arguments: ic(!1), directives: ns(!1), selectionSet: Fl() };
  }
}
function nc() {
  var e;
  if ((Q(), Ne.charCodeAt(L) === 91)) {
    L++, Q();
    var t = nc();
    if (!t || Ne.charCodeAt(L++) !== 93) throw pt("ListType");
    e = { kind: "ListType", type: t };
  } else if ((e = ha())) e = { kind: "NamedType", name: e };
  else throw pt("NamedType");
  return Q(), Ne.charCodeAt(L) === 33 ? (L++, Q(), { kind: "NonNullType", type: e }) : e;
}
var kf = /on/y;
function ac() {
  if (Hi(kf)) {
    Q();
    var e = ha();
    if (!e) throw pt("NamedType");
    return Q(), { kind: "NamedType", name: e };
  }
}
var vf = /\.\.\./y;
function Nf() {
  if (Hi(vf)) {
    Q();
    var e = L,
      t;
    if ((t = ha()) && t.value !== "on") return { kind: "FragmentSpread", name: t, directives: ns(!1) };
    L = e;
    var i = ac(),
      n = ns(!1),
      r = Fl();
    if (!r) throw pt("InlineFragment");
    return { kind: "InlineFragment", typeCondition: i, directives: n, selectionSet: r };
  }
}
function Fl() {
  var e;
  if ((Q(), Ne.charCodeAt(L) === 123)) {
    L++, Q();
    for (var t = []; (e = Nf() || Sf()); ) t.push(e);
    if (!t.length || Ne.charCodeAt(L++) !== 125) throw pt("SelectionSet");
    return Q(), { kind: "SelectionSet", selections: t };
  }
}
var Af = /fragment/y;
function Ff() {
  if (Hi(Af)) {
    Q();
    var e = ha();
    if (!e) throw pt("FragmentDefinition");
    Q();
    var t = ac();
    if (!t) throw pt("FragmentDefinition");
    var i = ns(!1),
      n = Fl();
    if (!n) throw pt("FragmentDefinition");
    return { kind: "FragmentDefinition", name: e, typeCondition: t, directives: i, selectionSet: n };
  }
}
var wf = /(?:query|mutation|subscription)/y;
function Mf() {
  var e,
    t,
    i = [],
    n = [];
  (e = Hi(wf)) &&
    (Q(),
    (t = ha()),
    (i = (function () {
      var s,
        l = [];
      if ((Q(), Ne.charCodeAt(L) === 40)) {
        for (L++, Q(); (s = Hi(tc)); ) {
          if ((Q(), Ne.charCodeAt(L++) !== 58)) throw pt("VariableDefinition");
          var o = nc(),
            d = void 0;
          if (Ne.charCodeAt(L) === 61 && (L++, Q(), !(d = sl(!0)))) throw pt("VariableDefinition");
          Q(),
            l.push({
              kind: "VariableDefinition",
              variable: { kind: "Variable", name: { kind: "Name", value: s.slice(1) } },
              type: o,
              defaultValue: d,
              directives: ns(!0),
            });
        }
        if (Ne.charCodeAt(L++) !== 41) throw pt("VariableDefinition");
        Q();
      }
      return l;
    })()),
    (n = ns(!1)));
  var r = Fl();
  if (r) return { kind: "OperationDefinition", operation: e || "query", name: t, variableDefinitions: i, directives: n, selectionSet: r };
}
function Of(e, t) {
  return (
    (Ne = typeof e.body == "string" ? e.body : e),
    (L = 0),
    (function () {
      var n;
      Q();
      for (var r = []; (n = Ff() || Mf()); ) r.push(n);
      return { kind: "Document", definitions: r };
    })()
  );
}
function Tf(e) {
  return JSON.stringify(e);
}
function Rf(e) {
  return (
    `"""
` +
    e.replace(/"""/g, '\\"""') +
    `
"""`
  );
}
var Ji = (e) => !(!e || !e.length),
  Yt = {
    OperationDefinition(e) {
      if (e.operation === "query" && !e.name && !Ji(e.variableDefinitions) && !Ji(e.directives)) return Yt.SelectionSet(e.selectionSet);
      var t = e.operation;
      return (
        e.name && (t += " " + e.name.value),
        Ji(e.variableDefinitions) && (e.name || (t += " "), (t += "(" + e.variableDefinitions.map(Yt.VariableDefinition).join(", ") + ")")),
        Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")),
        t + " " + Yt.SelectionSet(e.selectionSet)
      );
    },
    VariableDefinition(e) {
      var t = Yt.Variable(e.variable) + ": " + nn(e.type);
      return (
        e.defaultValue && (t += " = " + nn(e.defaultValue)), Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")), t
      );
    },
    Field(e) {
      var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
      if (Ji(e.arguments)) {
        var i = e.arguments.map(Yt.Argument),
          n = t + "(" + i.join(", ") + ")";
        t =
          n.length > 80
            ? t +
              `(
  ` +
              i
                .join(
                  `
`
                )
                .replace(
                  /\n/g,
                  `
  `
                ) +
              `
)`
            : n;
      }
      return (
        Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")),
        e.selectionSet ? t + " " + Yt.SelectionSet(e.selectionSet) : t
      );
    },
    StringValue: (e) => (e.block ? Rf(e.value) : Tf(e.value)),
    BooleanValue: (e) => "" + e.value,
    NullValue: (e) => "null",
    IntValue: (e) => e.value,
    FloatValue: (e) => e.value,
    EnumValue: (e) => e.value,
    Name: (e) => e.value,
    Variable: (e) => "$" + e.name.value,
    ListValue: (e) => "[" + e.values.map(nn).join(", ") + "]",
    ObjectValue: (e) => "{" + e.fields.map(Yt.ObjectField).join(", ") + "}",
    ObjectField: (e) => e.name.value + ": " + nn(e.value),
    Document: (e) =>
      Ji(e.definitions)
        ? e.definitions.map(nn).join(`

`)
        : "",
    SelectionSet: (e) =>
      `{
  ` +
      e.selections
        .map(nn)
        .join(
          `
`
        )
        .replace(
          /\n/g,
          `
  `
        ) +
      `
}`,
    Argument: (e) => e.name.value + ": " + nn(e.value),
    FragmentSpread(e) {
      var t = "..." + e.name.value;
      return Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")), t;
    },
    InlineFragment(e) {
      var t = "...";
      return (
        e.typeCondition && (t += " on " + e.typeCondition.name.value),
        Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")),
        t + " " + nn(e.selectionSet)
      );
    },
    FragmentDefinition(e) {
      var t = "fragment " + e.name.value;
      return (
        (t += " on " + e.typeCondition.name.value),
        Ji(e.directives) && (t += " " + e.directives.map(Yt.Directive).join(" ")),
        t + " " + nn(e.selectionSet)
      );
    },
    Directive(e) {
      var t = "@" + e.name.value;
      return Ji(e.arguments) && (t += "(" + e.arguments.map(Yt.Argument).join(", ") + ")"), t;
    },
    NamedType: (e) => e.name.value,
    ListType: (e) => "[" + nn(e.type) + "]",
    NonNullType: (e) => nn(e.type) + "!",
  };
function nn(e) {
  return Yt[e.kind] ? Yt[e.kind](e) : "";
}
var Bf = (e) =>
  e && e.message && (e.extensions || e.name === "GraphQLError")
    ? e
    : typeof e == "object" && e.message
    ? new Bs(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
    : new Bs(e);
class _s extends Error {
  constructor(t) {
    var i = (t.graphQLErrors || []).map(Bf),
      n = ((r, a) => {
        var s = "";
        if (r) return `[Network] ${r.message}`;
        if (a)
          for (var l of a)
            s &&
              (s += `
`),
              (s += `[GraphQL] ${l.message}`);
        return s;
      })(t.networkError, i);
    super(n),
      (this.name = "CombinedError"),
      (this.message = n),
      (this.graphQLErrors = i),
      (this.networkError = t.networkError),
      (this.response = t.response);
  }
  toString() {
    return this.message;
  }
}
var po = (e, t) => {
    for (var i = 0 | (t || 5381), n = 0, r = 0 | e.length; n < r; n++) i = (i << 5) + i + e.charCodeAt(n);
    return i;
  },
  Mr = new Set(),
  Cd = new WeakMap(),
  Jr = (e) => {
    if (e === null || Mr.has(e)) return "null";
    if (typeof e != "object") return JSON.stringify(e) || "";
    if (e.toJSON) return Jr(e.toJSON());
    if (Array.isArray(e)) {
      var t = "[";
      for (var i of e) t.length > 1 && (t += ","), (t += Jr(i) || "null");
      return (t += "]");
    } else if ((ol !== as && e instanceof ol) || (dl !== as && e instanceof dl)) return "null";
    var n = Object.keys(e).sort();
    if (!n.length && e.constructor && e.constructor !== Object) {
      var r = Cd.get(e) || Math.random().toString(36).slice(2);
      return Cd.set(e, r), Jr({ __key: r });
    }
    Mr.add(e);
    var a = "{";
    for (var s of n) {
      var l = Jr(e[s]);
      l && (a.length > 1 && (a += ","), (a += Jr(s) + ":" + l));
    }
    return Mr.delete(e), (a += "}");
  },
  fo = (e, t, i) => {
    if (!(i == null || typeof i != "object" || i.toJSON || Mr.has(i)))
      if (Array.isArray(i)) for (var n = 0, r = i.length; n < r; n++) fo(e, `${t}.${n}`, i[n]);
      else if (i instanceof ol || i instanceof dl) e.set(t, i);
      else {
        Mr.add(i);
        for (var a of Object.keys(i)) fo(e, `${t}.${a}`, i[a]);
      }
  },
  ll = (e) => (Mr.clear(), Jr(e));
class as {}
var ol = typeof File < "u" ? File : as,
  dl = typeof Blob < "u" ? Blob : as,
  Df = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
  Cf = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
  Uf = (e, t) =>
    t % 2 == 0
      ? e.replace(
          Cf,
          `
`
        )
      : e,
  Ud = (e) => e.split(Df).map(Uf).join("").trim(),
  qd = new Map(),
  el = new Map(),
  Ho = (e) => {
    var t;
    return (
      typeof e == "string"
        ? (t = Ud(e))
        : e.loc && el.get(e.__key) === e
        ? (t = e.loc.source.body)
        : ((t = qd.get(e) || Ud(nn(e))), qd.set(e, t)),
      typeof e != "string" &&
        !e.loc &&
        (e.loc = { start: 0, end: t.length, source: { body: t, name: "gql", locationOffset: { line: 1, column: 1 } } }),
      t
    );
  },
  Pd = (e) => {
    var t = po(Ho(e));
    if (e.definitions) {
      var i = sc(e);
      i &&
        (t = po(
          `
# ${i}`,
          t
        ));
    }
    return t;
  },
  rc = (e) => {
    var t, i;
    return (
      typeof e == "string" ? ((t = Pd(e)), (i = el.get(t) || Of(e))) : ((t = e.__key || Pd(e)), (i = el.get(t) || e)),
      i.loc || Ho(i),
      (i.__key = t),
      el.set(t, i),
      i
    );
  },
  Ns = (e, t, i) => {
    var n = t || {},
      r = rc(e),
      a = ll(n),
      s = r.__key;
    return a !== "{}" && (s = po(a, s)), { key: s, query: r, variables: n, extensions: i };
  },
  sc = (e) => {
    for (var t of e.definitions) if (t.kind === Is.OPERATION_DEFINITION) return t.name ? t.name.value : void 0;
  },
  mo = (e, t, i) => {
    if (!("data" in t) && !("errors" in t)) throw new Error("No Content");
    var n = e.kind === "subscription";
    return {
      operation: e,
      data: t.data,
      error: Array.isArray(t.errors) ? new _s({ graphQLErrors: t.errors, response: i }) : void 0,
      extensions: t.extensions ? { ...t.extensions } : void 0,
      hasNext: t.hasNext == null ? n : t.hasNext,
      stale: !1,
    };
  },
  yo = (e, t) => {
    if (typeof e == "object" && e != null && (!e.constructor || e.constructor === Object || Array.isArray(e))) {
      e = Array.isArray(e) ? [...e] : { ...e };
      for (var i of Object.keys(t)) e[i] = yo(e[i], t[i]);
      return e;
    }
    return t;
  },
  ho = (e, t, i) => {
    var n = e.error ? e.error.graphQLErrors : [],
      r = !!e.extensions || !!t.extensions,
      a = { ...e.extensions, ...t.extensions },
      s = t.incremental;
    "path" in t && (s = [t]);
    var l = { data: e.data };
    if (s)
      for (var o of s) {
        Array.isArray(o.errors) && n.push(...o.errors), o.extensions && (Object.assign(a, o.extensions), (r = !0));
        for (var d = "data", u = l, f = 0, c = o.path.length; f < c; d = o.path[f++])
          u = u[d] = Array.isArray(u[d]) ? [...u[d]] : { ...u[d] };
        if (o.items) for (var y = +d >= 0 ? d : 0, g = 0, F = o.items.length; g < F; g++) u[y + g] = yo(u[y + g], o.items[g]);
        else o.data !== void 0 && (u[d] = yo(u[d], o.data));
      }
    else (l.data = t.data || e.data), (n = t.errors || n);
    return {
      operation: e.operation,
      data: l.data,
      error: n.length ? new _s({ graphQLErrors: n, response: i }) : void 0,
      extensions: r ? a : void 0,
      hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
      stale: !1,
    };
  },
  lc = (e, t, i) => ({
    operation: e,
    data: void 0,
    error: new _s({ networkError: t, response: i }),
    extensions: void 0,
    hasNext: !1,
    stale: !1,
  });
function oc(e) {
  return {
    query: e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss ? void 0 : Ho(e.query),
    operationName: sc(e.query),
    variables: e.variables || void 0,
    extensions: e.extensions,
  };
}
var qf = (e, t) => {
    var i = e.kind === "query" && e.context.preferGetMethod;
    if (!i || !t) return e.context.url;
    var n = new URL(e.context.url);
    for (var r in t) {
      var a = t[r];
      a && n.searchParams.set(r, typeof a == "object" ? ll(a) : a);
    }
    var s = n.toString();
    return s.length > 2047 && i !== "force" ? ((e.context.preferGetMethod = !1), e.context.url) : s;
  },
  Pf = (e, t) => {
    if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
      var i = ll(t),
        n = ((l) => {
          var o = new Map();
          return (ol !== as || dl !== as) && (Mr.clear(), fo(o, "variables", l)), o;
        })(t.variables);
      if (n.size) {
        var r = new FormData();
        r.append("operations", i), r.append("map", ll({ ...[...n.keys()].map((l) => [l]) }));
        var a = 0;
        for (var s of n.values()) r.append("" + a++, s);
        return r;
      }
      return i;
    }
  },
  Vf = (e, t) => {
    var i = {
        accept:
          e.kind === "subscription"
            ? "text/event-stream, multipart/mixed"
            : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed",
      },
      n = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
    if (n.headers) for (var r in n.headers) i[r.toLowerCase()] = n.headers[r];
    var a = Pf(e, t);
    return (
      typeof a == "string" && !i["content-type"] && (i["content-type"] = "application/json"),
      { ...n, method: a ? "POST" : "GET", body: a, headers: i }
    );
  },
  Ef = typeof TextDecoder < "u" ? new TextDecoder() : null,
  _f = /boundary="?([^=";]+)"?/i,
  xf = /data: ?([^\n]+)/,
  Vd = (e) => (e.constructor.name === "Buffer" ? e.toString() : Ef.decode(e));
async function* Ed(e) {
  if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield Vd(t);
  else {
    var i = e.body.getReader(),
      n;
    try {
      for (; !(n = await i.read()).done; ) yield Vd(n.value);
    } finally {
      i.cancel();
    }
  }
}
async function* _d(e, t) {
  var i = "",
    n;
  for await (var r of e) for (i += r; (n = i.indexOf(t)) > -1; ) yield i.slice(0, n), (i = i.slice(n + t.length));
}
async function* $f(e, t, i) {
  var n = !0,
    r = null,
    a;
  try {
    yield await Promise.resolve();
    var s = (a = await (e.context.fetch || fetch)(t, i)).headers.get("Content-Type") || "",
      l;
    if (/multipart\/mixed/i.test(s))
      l = (async function* (u, f) {
        var c = u.match(_f),
          y = "--" + (c ? c[1] : "-"),
          g = !0,
          F;
        for await (var C of _d(
          Ed(f),
          `\r
` + y
        )) {
          if (g) {
            g = !1;
            var O = C.indexOf(y);
            if (O > -1) C = C.slice(O + y.length);
            else continue;
          }
          try {
            yield (F = JSON.parse(
              C.slice(
                C.indexOf(`\r
\r
`) + 4
              )
            ));
          } catch (m) {
            if (!F) throw m;
          }
          if (F && F.hasNext === !1) break;
        }
        F && F.hasNext !== !1 && (yield { hasNext: !1 });
      })(s, a);
    else if (/text\/event-stream/i.test(s))
      l = (async function* (u) {
        var f;
        for await (var c of _d(
          Ed(u),
          `

`
        )) {
          var y = c.match(xf);
          if (y) {
            var g = y[1];
            try {
              yield (f = JSON.parse(g));
            } catch (F) {
              if (!f) throw F;
            }
            if (f && f.hasNext === !1) break;
          }
        }
        f && f.hasNext !== !1 && (yield { hasNext: !1 });
      })(a);
    else if (!/text\//i.test(s))
      l = (async function* (u) {
        yield JSON.parse(await u.text());
      })(a);
    else throw new Error(await a.text());
    for await (var o of l) (r = r ? ho(r, o, a) : mo(e, o, a)), (n = !1), yield r, (n = !0);
    r || (yield (r = mo(e, {}, a)));
  } catch (d) {
    if (!n) throw d;
    yield lc(e, a && (a.status < 200 || a.status >= 300) && a.statusText ? new Error(a.statusText) : d, a);
  }
}
function Gf(e, t, i) {
  var n;
  return (
    typeof AbortController < "u" && (i.signal = (n = new AbortController()).signal),
    Wo(() => {
      n && n.abort();
    })(ct((r) => !!r)(Xu($f(e, t, i))))
  );
}
var go = (e, t) => {
    if (Array.isArray(e)) for (var i of e) go(i, t);
    else if (typeof e == "object" && e !== null) for (var n in e) n === "__typename" && typeof e[n] == "string" ? t.add(e[n]) : go(e[n], t);
    return t;
  },
  bo = (e) => {
    var t = !1;
    if ("definitions" in e) {
      var i = [];
      for (var n of e.definitions) {
        var r = bo(n);
        (t = t || r !== n), i.push(r);
      }
      if (t) return { ...e, definitions: i };
    } else if ("selectionSet" in e) {
      var a = [],
        s = e.kind === Is.OPERATION_DEFINITION;
      if (e.selectionSet) {
        for (var l of e.selectionSet.selections || []) {
          s = s || (l.kind === Is.FIELD && l.name.value === "__typename" && !l.alias);
          var o = bo(l);
          (t = t || o !== l), a.push(o);
        }
        if ((s || ((t = !0), a.push({ kind: Is.FIELD, name: { kind: Is.NAME, value: "__typename" } })), t))
          return { ...e, selectionSet: { ...e.selectionSet, selections: a } };
      }
    }
    return e;
  },
  xd = new Map(),
  jf = (e) => {
    var t = rc(e),
      i = xd.get(t.__key);
    return i || (xd.set(t.__key, (i = bo(t))), Object.defineProperty(i, "__key", { value: t.__key, enumerable: !1 })), i;
  },
  Io = (e, t) => {
    if (!e || typeof e != "object") return e;
    if (Array.isArray(e)) return e.map((r) => Io(r));
    if (e && typeof e == "object" && (t || "__typename" in e)) {
      var i = {};
      for (var n in e)
        n === "__typename" ? Object.defineProperty(i, "__typename", { enumerable: !1, value: e.__typename }) : (i[n] = Io(e[n]));
      return i;
    } else return e;
  };
function $d(e) {
  var t = (i) => e(i);
  return (
    (t.toPromise = () => Al(Es(1)(ct((i) => !i.stale && !i.hasNext)(t)))),
    (t.then = (i, n) => t.toPromise().then(i, n)),
    (t.subscribe = (i) => is(i)(t)),
    t
  );
}
function Ds(e, t, i) {
  return { ...t, kind: e, context: t.context ? { ...t.context, ...i } : i || t.context };
}
var Wf = () => {},
  Gl = ({ kind: e }) => e !== "mutation" && e !== "query",
  Lf = ({ forward: e, client: t, dispatchDebug: i }) => {
    var n = new Map(),
      r = new Map(),
      a = (l) => {
        var o = Ds(l.kind, l);
        return (o.query = jf(l.query)), o;
      },
      s = (l) =>
        l.kind === "query" && l.context.requestPolicy !== "network-only" && (l.context.requestPolicy === "cache-only" || n.has(l.key));
    return (l) => {
      var o = ri((u) => {
          var f = n.get(u.key),
            c = f;
          return u.context.requestPolicy === "cache-and-network" && ((c.stale = !0), Gd(t, u)), c;
        })(ct((u) => !Gl(u) && s(u))(l)),
        d = Ts((u) => {
          var { operation: f } = u;
          if (f) {
            var c = f.context.additionalTypenames || [];
            if (
              (u.operation.kind !== "subscription" && (c = ((w) => [...go(w, new Set())])(u.data).concat(c)),
              u.operation.kind === "mutation" || u.operation.kind === "subscription")
            ) {
              for (var y = new Set(), g = 0; g < c.length; g++) {
                var F = c[g],
                  C = r.get(F);
                C || r.set(F, (C = new Set()));
                for (var O of C.values()) y.add(O);
                C.clear();
              }
              for (var m of y.values()) n.has(m) && ((f = n.get(m).operation), n.delete(m), Gd(t, f));
            } else if (f.kind === "query" && u.data) {
              n.set(f.key, u);
              for (var I = 0; I < c.length; I++) {
                var S = c[I],
                  k = r.get(S);
                k || r.set(S, (k = new Set())), k.add(f.key);
              }
            }
          }
        })(
          e(
            ct((u) => u.kind !== "query" || u.context.requestPolicy !== "cache-only")(
              ri((u) => u)(ts([ri(a)(ct((u) => !Gl(u) && !s(u))(l)), ct((u) => Gl(u))(l)]))
            )
          )
        );
      return ts([o, d]);
    };
  },
  Gd = (e, t) => e.reexecuteOperation(Ds(t.kind, t, { requestPolicy: "network-only" })),
  jl =
    ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: i }) =>
    ({ client: n, forward: r }) => {
      var a = i || ((s) => s.kind === "subscription" || (!!t && (s.kind === "query" || s.kind === "mutation")));
      return (s) => {
        var l = Os((d) => {
            var { key: u } = d,
              f = ct((c) => c.kind === "teardown" && c.key === u)(s);
            return Lo(f)(
              ((c) => {
                var y = e(oc(c), c);
                return zo(({ next: g, complete: F }) => {
                  var C = !1,
                    O,
                    m;
                  return (
                    Promise.resolve().then(() => {
                      C ||
                        (O = y.subscribe({
                          next(I) {
                            g((m = m ? ho(m, I) : mo(c, I)));
                          },
                          error(I) {
                            g(lc(c, I));
                          },
                          complete() {
                            C ||
                              ((C = !0),
                              c.kind === "subscription" && n.reexecuteOperation(Ds("teardown", c, c.context)),
                              m && m.hasNext && g(ho(m, { hasNext: !1 })),
                              F());
                          },
                        }));
                    }),
                    () => {
                      (C = !0), O && O.unsubscribe();
                    }
                  );
                });
              })(d)
            );
          })(ct((d) => d.kind !== "teardown" && a(d))(s)),
          o = r(ct((d) => d.kind === "teardown" || !a(d))(s));
        return ts([l, o]);
      };
    },
  zf =
    ({ forward: e, dispatchDebug: t }) =>
    (i) => {
      var n = Os((a) => {
          var s = oc(a),
            l = qf(a, s),
            o = Vf(a, s),
            d = Lo(ct((u) => u.kind === "teardown" && u.key === a.key)(i))(Gf(a, l, o));
          return d;
        })(ct((a) => a.kind !== "teardown" && (a.kind !== "subscription" || !!a.context.fetchSubscriptions))(i)),
        r = e(ct((a) => a.kind === "teardown" || (a.kind === "subscription" && !a.context.fetchSubscriptions))(i));
      return ts([n, r]);
    },
  Hf =
    (e) =>
    ({ client: t, forward: i, dispatchDebug: n }) =>
      e.reduceRight(
        (r, a) =>
          a({
            client: t,
            forward(s) {
              return Rs(r(Rs(s)));
            },
            dispatchDebug(s) {},
          }),
        i
      ),
  dc =
    ({ onOperation: e, onResult: t, onError: i }) =>
    ({ forward: n }) =>
    (r) =>
      Os((a) => {
        i && a.error && i(a.error, a.operation);
        var s = (t && t(a)) || a;
        return "then" in s ? Dd(s) : vs(s);
      })(
        n(
          Os((a) => {
            var s = (e && e(a)) || a;
            return "then" in s ? Dd(s) : vs(s);
          })(r)
        )
      ),
  Qf =
    ({ dispatchDebug: e }) =>
    (t) =>
      ct((i) => !1)(t),
  jd = function e(t) {
    var i = 0,
      n = new Map(),
      r = new Map(),
      a = new Set(),
      s = [],
      l = {
        url: t.url,
        fetchSubscriptions: t.fetchSubscriptions,
        fetchOptions: t.fetchOptions,
        fetch: t.fetch,
        preferGetMethod: !!t.preferGetMethod,
        requestPolicy: t.requestPolicy || "cache-first",
      },
      o = uf();
    function d(m) {
      (m.kind === "mutation" || m.kind === "teardown" || !a.has(m.key)) &&
        (m.kind === "teardown" ? a.delete(m.key) : m.kind !== "mutation" && a.add(m.key), o.next(m));
    }
    var u = !1;
    function f(m) {
      if ((m && d(m), !u)) {
        for (u = !0; u && (m = s.shift()); ) d(m);
        u = !1;
      }
    }
    var c = (m) => {
        var I = Lo(ct((S) => S.kind === "teardown" && S.key === m.key)(o.source))(
          ct(
            (S) =>
              S.operation.kind === m.kind &&
              S.operation.key === m.key &&
              (!S.operation.context._instance || S.operation.context._instance === m.context._instance)
          )(O)
        );
        return (
          m.kind !== "query"
            ? (I = Zu((S) => !!S.hasNext, !0)(I))
            : (I = Bd((S) => {
                var k = vs(S);
                return S.stale || S.hasNext ? k : ts([k, ri(() => ((S.stale = !0), S))(Es(1)(ct((w) => w.key === m.key)(o.source)))]);
              })(I)),
          m.kind !== "mutation"
            ? (I = Wo(() => {
                a.delete(m.key), n.delete(m.key), r.delete(m.key), (u = !1);
                for (var S = s.length - 1; S >= 0; S--) s[S].key === m.key && s.splice(S, 1);
                d(Ds("teardown", m, m.context));
              })(
                Ts((S) => {
                  if (S.stale) {
                    for (var k of s)
                      if (k.key === S.operation.key) {
                        a.delete(k.key);
                        break;
                      }
                  } else S.hasNext || a.delete(m.key);
                  n.set(m.key, S);
                })(I)
              ))
            : (I = Rd(() => {
                d(m);
              })(I)),
          t.maskTypename && (I = ri((S) => ({ ...S, data: Io(S.data, !0) }))(I)),
          Rs(I)
        );
      },
      y = this instanceof e ? this : Object.create(e.prototype),
      g = Object.assign(y, {
        suspense: !!t.suspense,
        operations$: o.source,
        reexecuteOperation(m) {
          m.kind === "teardown" ? f(m) : (m.kind === "mutation" || r.has(m.key)) && (s.push(m), Promise.resolve().then(f));
        },
        createRequestOperation(m, I, S) {
          return (
            S || (S = {}),
            Ds(m, I, {
              _instance: m === "mutation" ? (i = (i + 1) | 0) : void 0,
              ...l,
              ...S,
              requestPolicy: S.requestPolicy || l.requestPolicy,
              suspense: S.suspense || (S.suspense !== !1 && g.suspense),
            })
          );
        },
        executeRequestOperation(m) {
          return m.kind === "mutation"
            ? $d(c(m))
            : $d(
                lf(() => {
                  var I = r.get(m.key);
                  I || r.set(m.key, (I = c(m))),
                    (I = Rd(() => {
                      f(m);
                    })(I));
                  var S = n.get(m.key);
                  return m.kind === "query" && S && (S.stale || S.hasNext) ? Bd(vs)(ts([I, ct((k) => k === n.get(m.key))(vs(S))])) : I;
                })
              );
        },
        executeQuery(m, I) {
          var S = g.createRequestOperation("query", m, I);
          return g.executeRequestOperation(S);
        },
        executeSubscription(m, I) {
          var S = g.createRequestOperation("subscription", m, I);
          return g.executeRequestOperation(S);
        },
        executeMutation(m, I) {
          var S = g.createRequestOperation("mutation", m, I);
          return g.executeRequestOperation(S);
        },
        readQuery(m, I, S) {
          var k = null;
          return (
            is((w) => {
              k = w;
            })(g.query(m, I, S)).unsubscribe(),
            k
          );
        },
        query: (m, I, S) => g.executeQuery(Ns(m, I), S),
        subscription: (m, I, S) => g.executeSubscription(Ns(m, I), S),
        mutation: (m, I, S) => g.executeMutation(Ns(m, I), S),
      }),
      F = Wf,
      C = Hf(t.exchanges),
      O = Rs(C({ client: g, dispatchDebug: F, forward: Qf({ dispatchDebug: F }) })(o.source));
    return cf(O), g;
  };
const So = (e) =>
    Object.entries(e)
      .flatMap(([t, i]) => {
        if (typeof i == "boolean") return i ? t : !1;
        if (i instanceof Qo) {
          let n = "";
          const r = Object.entries(i.args)
            .filter(([a, s]) => s != null)
            .map(([a, s]) => {
              var l;
              return `${a}: ${s instanceof Ko ? `$${(l = s.name) !== null && l !== void 0 ? l : a}` : JSON.stringify(s)}`;
            });
          return r.length > 0 && (n = `(${r.join(", ")})`), i.subselection ? [`${t}${n} {`, ...So(i.subselection), "}"] : `${t}${n}`;
        } else return [`${t} {`, ...So(i), "}"];
      })
      .filter((t) => !!t)
      .map((t) => "  " + t),
  ul = (e) => {
    const t = {},
      i = (n) => {
        let r = 1;
        if (t[n]) {
          for (; t[`${n}${r}`]; ) r++;
          return `${n}${r}`;
        }
        return n;
      };
    return (
      Object.entries(e).forEach(([n, r]) => {
        r instanceof Qo
          ? (Object.entries(r.args).forEach(([a, s]) => {
              var l;
              s instanceof Ko && (t[(l = s.name) !== null && l !== void 0 ? l : i(a)] = s);
            }),
            r.subselection && Object.assign(t, ul(r.subselection)))
          : typeof r == "object" && r !== null && Object.assign(t, ul(r));
      }),
      t
    );
  },
  Kf = (e) => {
    const t = ul(e.fields);
    return Object.keys(t).length === 0
      ? ""
      : `(${Object.entries(t)
          .map(([n, r]) => `$${n}: ${r.type}`)
          .join(", ")})`;
  };
class Qo {
  constructor(t, i) {
    Object.defineProperty(this, "args", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "subselection", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
}
class Ko {
  constructor(t, i, n) {
    Object.defineProperty(this, "type", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: i }),
      Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, writable: !0, value: n });
  }
  present() {
    return this.value != null;
  }
}
const Ut = (e, t) => new Qo(e, t),
  ee = (e) => new Ko(e.type + (e.required ? "!" : ""), e.name, e.value),
  uc = (e) => {
    var t;
    const i = Kf(e),
      n = e.directives && e.directives.length > 0 ? ` ${e.directives.join(" ")}` : "";
    return `${e.type} ${(t = e.name) !== null && t !== void 0 ? t : ""}${i}${n} {
${So(e.fields).join(`
`)}
}`;
  },
  xt = (e) => {
    const t = ul(e.fields);
    return { query: uc(e), variables: Object.entries(t ?? {}).reduce((i, [n, r]) => (typeof r.value < "u" && (i[n] = r.value), i), {}) };
  },
  Jf = {
    DateTime(e) {
      return new Date(e);
    },
  };
class Yf {
  constructor(t) {
    Object.defineProperty(this, "plan", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  apply(t) {
    return Array.isArray(t) ? t.map((i) => this.hydrateObject(i)) : this.hydrateObject(t);
  }
  hydrateObject(t) {
    const i = { ...t };
    for (const [n, r] of Object.entries(this.plan)) {
      const a = i[n];
      a != null && (i[n] = Jf[r](a));
    }
    return i;
  }
}
function qi(e) {
  if (typeof e != "object") return e;
  var t,
    i,
    n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      i = new e.constructor();
      for (t in e) e.hasOwnProperty(t) && i[t] !== e[t] && (i[t] = qi(e[t]));
    } else {
      i = {};
      for (t in e)
        t === "__proto__"
          ? Object.defineProperty(i, t, { value: qi(e[t]), configurable: !0, enumerable: !0, writable: !0 })
          : (i[t] = qi(e[t]));
    }
    return i;
  }
  if (n === "[object Array]") {
    for (t = e.length, i = Array(t); t--; ) i[t] = qi(e[t]);
    return i;
  }
  return n === "[object Set]"
    ? ((i = new Set()),
      e.forEach(function (r) {
        i.add(qi(r));
      }),
      i)
    : n === "[object Map]"
    ? ((i = new Map()),
      e.forEach(function (r, a) {
        i.set(qi(a), qi(r));
      }),
      i)
    : n === "[object Date]"
    ? new Date(+e)
    : n === "[object RegExp]"
    ? ((i = new RegExp(e.source, e.flags)), (i.lastIndex = e.lastIndex), i)
    : n === "[object DataView]"
    ? new e.constructor(qi(e.buffer))
    : n === "[object ArrayBuffer]"
    ? e.slice(0)
    : n.slice(-6) === "Array]"
    ? new e.constructor(e)
    : e;
}
var cc, pc, fc, mc, yc, ii;
(function (e) {
  (e[(e.SinceLoaded = 0)] = "SinceLoaded"), (e[(e.SinceLastPersisted = 1)] = "SinceLastPersisted");
})(ii || (ii = {}));
const Dt = Symbol.for("g/fields"),
  sr = Symbol.for("g/if"),
  lr = Symbol.for("g/pf"),
  or = Symbol.for("g/fk"),
  Ss = Symbol.for("g/t");
class Zf {
  constructor(t) {
    var i, n;
    Object.defineProperty(this, cc, { enumerable: !0, configurable: !0, writable: !0, value: {} }),
      Object.defineProperty(this, pc, { enumerable: !0, configurable: !0, writable: !0, value: {} }),
      Object.defineProperty(this, fc, { enumerable: !0, configurable: !0, writable: !0, value: {} }),
      Object.defineProperty(this, mc, { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, yc, { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "empty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      (this[sr] = (i = qi(t)) !== null && i !== void 0 ? i : {}),
      (this[lr] = (n = qi(t)) !== null && n !== void 0 ? n : {}),
      Object.assign(this[Dt], t),
      !t || Object.keys(t).length === 0 ? ((this.empty = !0), (this[or] = new Set())) : (this[or] = new Set(Object.keys(this[Dt])));
    const r = this,
      a = {
        get: (s, l) => {
          if (l in r || typeof l == "symbol") {
            let o = r[l];
            return typeof o == "function" && (o = o.bind(r)), o;
          } else if (l in s) return s[l];
        },
        set: (s, l, o) => (r.trackKey(l), (s[l.toString()] = o), !0),
      };
    return new Proxy(this[Dt], a);
  }
  trackKey(t) {
    const i = t.toString();
    this[or].add(i);
  }
  hasValueChanged(t, i) {
    if ((t instanceof Date && typeof i == "string") || (i instanceof Date && typeof t == "string")) {
      const n = t instanceof Date ? t : new Date(t),
        r = i instanceof Date ? i : new Date(i);
      return !isNaN(n.getTime()) && !isNaN(r.getTime()) ? n.getTime() !== r.getTime() : !0;
    }
    return !Ll(t, i);
  }
  hasChanges(t = ii.SinceLoaded) {
    if (this[Ss]) return !0;
    const i = t == ii.SinceLoaded ? this[sr] : this[lr];
    return [...this[or]].some((n) => this.hasValueChanged(this[Dt][n], i[n]));
  }
  isEmpty() {
    return this.empty;
  }
  getField(t) {
    return this[Dt][t];
  }
  setField(t, i) {
    return this.trackKey(t), (this[Dt][t] = i);
  }
  changes(t, i = ii.SinceLoaded) {
    const r = (typeof t == "string" ? i : t || i) == ii.SinceLoaded ? this[sr] : this[lr];
    if (t && typeof t == "string") {
      const a = r[t],
        s = this[Dt][t],
        l = this.hasValueChanged(s, a);
      return l ? { changed: l, current: s, previous: a } : { changed: l };
    } else {
      const a = {};
      for (const s of this[or]) Ll(r[s], this[Dt][s]) || (a[s] = { current: this[Dt][s], previous: r[s] });
      return a;
    }
  }
  toChangedJSON(t = ii.SinceLoaded) {
    const i = t == ii.SinceLoaded ? this[sr] : this[lr],
      n = {};
    for (const r of this[or]) Ll(i[r], this[Dt][r]) || (n[r] = this[Dt][r]);
    return n;
  }
  changed(t, i = ii.SinceLoaded) {
    return t && typeof t == "string" ? this.changes(t, i).changed : this.hasChanges(t === void 0 ? i : t);
  }
  flushChanges(t = ii.SinceLoaded) {
    t == ii.SinceLoaded ? (this[sr] = qi(this[Dt])) : t == ii.SinceLastPersisted && (this[lr] = qi(this[Dt])), (this[Ss] = !1);
  }
  revertChanges(t = ii.SinceLoaded) {
    let i;
    t == ii.SinceLoaded ? (i = Object.keys(this[sr])) : (i = Object.keys(this[lr]));
    for (const n of this[or]) i.includes(n) || delete this[Dt][n];
    t == ii.SinceLoaded ? Object.assign(this[Dt], qi(this[sr])) : Object.assign(this[Dt], qi(this[lr])), (this[Ss] = !1);
  }
  toJSON() {
    return Ao({ ...this[Dt] });
  }
  touch() {
    this[Ss] = !0;
  }
}
(cc = Dt), (pc = sr), (fc = lr), (mc = or), (yc = Ss);
const hc = Zf;
class gc extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_INTERNAL_ERROR" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "InternalError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 500 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class ko extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_CLIENT_ERROR" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "ClientError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 500 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !0 });
  }
}
class wl extends Error {
  constructor(t, i) {
    super(t.startsWith("GGT_") ? t : `${i}: ${t}`),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
}
class Wd extends Error {
  constructor(t) {
    let i;
    vo(t)
      ? (i = `GraphQL websocket closed unexpectedly by the server with error code ${t.code} and reason "${t.reason}"`)
      : (i = "GraphQL websocket closed unexpectedly by the server"),
      super(i),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_UNKNOWN" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "UnexpectedCloseError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 500 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "event", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.event = t);
  }
}
class Xf extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_WEBSOCKET_CONNECTION_TIMEOUT" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "WebsocketConnectionTimeoutError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 500 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class em extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_TOO_MANY_REQUESTS" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "TooManyRequestsError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 429 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class tm extends Error {
  constructor(t, i, n, r) {
    const a = i.slice(0, 3),
      s = i.length > 3 ? `, and ${i.length - 3} more error${i.length > 4 ? "s" : ""} need${i.length > 4 ? "" : "s"} to be corrected` : "";
    super(
      t ??
        `GGT_INVALID_RECORD: ${n ?? "Record"} is invalid and can't be saved. ${a
          .map(({ apiIdentifier: l, message: o }) => `${l} ${o}`)
          .join(", ")}${s}.`
    ),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_INVALID_RECORD" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "InvalidRecordError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 422 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
      Object.defineProperty(this, "validationErrors", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "modelApiIdentifier", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "record", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.validationErrors = i),
      (this.modelApiIdentifier = n),
      (this.record = r);
  }
}
class bc extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_NON_UNIQUE_DATA" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "NonUniqueDataError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 417 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class Jo extends Error {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "code", { enumerable: !0, configurable: !0, writable: !0, value: "GGT_RECORD_NOT_FOUND" }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "RecordNotFoundError" }),
      Object.defineProperty(this, "statusCode", { enumerable: !0, configurable: !0, writable: !0, value: 404 }),
      Object.defineProperty(this, "causedByClient", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class im extends Error {
  constructor(t, i) {
    super(t.length > 1 ? "Multiple errors occurred" : t[0].message),
      Object.defineProperty(this, "errors", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "results", { enumerable: !0, configurable: !0, writable: !0, value: i }),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "ErrorGroup" });
  }
  get code() {
    return `GGT_ERROR_GROUP(${this.errors
      .slice(0, 10)
      .map((t) => {
        var i;
        return (i = t.code) !== null && i !== void 0 ? i : "GGT_UNKNOWN";
      })
      .join(",")})`;
  }
  get statusCode() {
    return Math.max(
      ...this.errors.map((t) => {
        var i;
        return (i = t.statusCode) !== null && i !== void 0 ? i : 500;
      })
    );
  }
}
function tt(e, t) {
  if (!e) throw new Error("assertion error" + (t ? `: ${t}` : ""));
  return e;
}
const rs = (e, t) => {
    const i = t.length;
    let n = 0;
    for (; e != null && n < i; ) e = e[t[n++]];
    return n && n == i ? e : void 0;
  },
  vo = (e) => (e == null ? void 0 : e.type) == "close",
  Tn = (e, t) => (typeof e != "string" ? "" : xs(e, t)),
  Ld = (e) => {
    const t = e == null ? "" : String(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  xs = (e, t = !0) => {
    let i = "" + e;
    return (
      t ? (i = i.replace(/^[a-z\d]*/, (n) => Ld(n))) : (i = i.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (n) => n.toLowerCase())),
      (i = i.replace(/(?:_|(\/))([a-z\d]*)/gi, (n, r, a, s, l) => (r || (r = ""), "" + r + Ld(a)))),
      i
    );
  },
  Yo = (e, t) => [...(Array.isArray(t) ? t : t ? [t] : []), e].map((r) => xs(r)).join(""),
  Ic = (e, t) => `${Yo(e, t)}Sort`,
  Zo = (e, t) => `${Yo(e, t)}Filter`,
  nm = (e, t, i) =>
    new bc(`More than one record found for ${e}.${t} = ${i}. Please confirm your unique validation is not reporting an error.`),
  am = (e, t) => {
    if (e.fetching) return;
    const i = rs(e.data, t);
    if (i === void 0) return new gc(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
    if (i === null) return new Jo(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
  },
  rn = (e, t, i = !1) => {
    var n;
    if (e.error)
      throw (
        (e.error instanceof _s &&
          !((n = e.error.networkError) === null || n === void 0) &&
          n.length &&
          (e.error.message = e.error.networkError.map((l) => "[Network] " + l.message).join(`
`)),
        e.error)
      );
    const r = rs(e.data, t),
      a = rs(r, ["edges"]),
      s = a ?? r;
    if (r === void 0) throw new gc(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${t.join(".")}`);
    if (r === null || (i && Array.isArray(s) && s.length === 0))
      throw new Jo(`Record Not Found Error: Gadget API returned no data at ${t.join(".")}`);
    return r;
  },
  As = (e, t) => {
    var i;
    if (e.error)
      throw (
        (e.error instanceof _s &&
          !((i = e.error.networkError) === null || i === void 0) &&
          i.length &&
          (e.error.message = e.error.networkError.map((r) => "[Network] " + r.message).join(`
`)),
        e.error)
      );
    const n = rs(e.data, t);
    return n ?? null;
  },
  Xo = (e) => {
    var t;
    return e.code == "GGT_INVALID_RECORD"
      ? new tm(e.message, e.validationErrors, (t = e.model) === null || t === void 0 ? void 0 : t.apiIdentifier, e.record)
      : e.code == "GGT_UNKNOWN" && e.message.includes("duplicate key value violates unique constraint")
      ? new bc(e.message)
      : new wl(e.message, e.code);
  },
  Ta = (e, t) => {
    const i = rn(e, t);
    return Sc(i);
  },
  Sc = (e) => {
    if (!e.success) {
      const t = e.errors && e.errors[0];
      throw t ? Xo(t) : new wl("Gadget API operation not successful.", "GGT_UNKNOWN");
    }
    return e;
  },
  kc = (e) => {
    var t, i, n, r;
    if (!((i = (t = e.data) === null || t === void 0 ? void 0 : t.gadgetMeta) === null || i === void 0) && i.hydrations)
      return new Yf((r = (n = e.data) === null || n === void 0 ? void 0 : n.gadgetMeta) === null || r === void 0 ? void 0 : r.hydrations);
  },
  Fr = (e, t) => {
    const i = kc(e);
    return i && (t = i.apply(t)), new hc(t);
  },
  ed = (e, t) => {
    const i = kc(e);
    return i && (t = i.apply(t)), t == null ? void 0 : t.map((n) => new hc(n));
  },
  Cs = (e, t) => {
    const i = t.edges.map((n) => n.node);
    return ed(e, i);
  },
  No = "[object Object]",
  zd = "[object String]",
  Ao = (e) => {
    if ((e != null && typeof e.toJSON == "function" && (e = e.toJSON()), e !== void 0)) {
      if (e === null) return null;
      if (typeof e == "boolean" || typeof e == "string") return e;
      if (typeof e == "number") return Number.isFinite(e) ? e : null;
      if (typeof e == "object") {
        if (Array.isArray(e)) {
          const t = [];
          for (let i = 0; i < e.length; i++) {
            const n = e[i];
            t[i] = n === void 0 ? null : Ao(n);
          }
          return t;
        }
        if (Object.prototype.toString.call(e) === "[object Error]") return {};
        if (Object.prototype.toString.call(e) === No) {
          const t = {};
          for (const i of Object.keys(e)) {
            const n = Ao(e[i]);
            n !== void 0 && (t[i] = n);
          }
          return t;
        }
      }
    }
  },
  Wl = "gstk",
  Hd = (e) => {
    try {
      const t = window[e];
      return t.setItem(Wl, Wl), t.removeItem(Wl), !0;
    } catch {
      return !1;
    }
  },
  Qd = Object.prototype.toString,
  Kd = Object.getPrototypeOf,
  Jd = Object.getOwnPropertySymbols ? (e) => Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : Object.keys,
  ks = (e, t, i) => {
    if (e === t) return !0;
    if (e == null || t == null) return !1;
    if (i.indexOf(e) > -1 && i.indexOf(t) > -1) return !0;
    const n = Qd.call(e),
      r = Qd.call(t);
    let a, s, l;
    if ((i.push(e, t), n == No && r == zd && "_link" in e && Object.keys(e).length == 1)) return e._link === t;
    if (r == No && n == zd && "_link" in t && Object.keys(t).length == 1) return t._link === e;
    if (
      n != r ||
      ((a = Jd(e)),
      (s = Jd(t)),
      a.length != s.length ||
        a.some(function (o) {
          return !ks(e[o], t[o], i);
        }))
    )
      return !1;
    switch (n.slice(8, -1)) {
      case "Symbol":
        return e.valueOf() == t.valueOf();
      case "Date":
      case "Number":
        return +e == +t || (+e != +e && +t != +t);
      case "RegExp":
      case "Function":
      case "String":
      case "Boolean":
        return "" + e == "" + t;
      case "Set":
      case "Map": {
        (a = e.entries()), (s = t.entries());
        do if (((l = a.next()), !ks(l.value, s.next().value, i))) return !1;
        while (!l.done);
        return !0;
      }
      case "ArrayBuffer":
        (e = new Uint8Array(e)), (t = new Uint8Array(t));
      case "DataView":
        (e = new Uint8Array(e.buffer)), (t = new Uint8Array(t.buffer));
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
        if (e.length != t.length) return !1;
        for (l = 0; l < e.length; l++) if (!(!(l in e) && !(l in t)) && (l in e != l in t || !ks(e[l], t[l], i))) return !1;
        return !0;
      case "Object":
        return ks(Kd(e), Kd(t), i);
      default:
        return !1;
    }
  },
  Ll = (e, t) => ks(e, t, []),
  vc = (e, t) => {
    var i, n, r;
    if ((t ?? (t = {}), !("hasAmbiguousIdentifier" in e) && !("acceptsModelInput" in e))) return t;
    if (
      e.hasAmbiguousIdentifier &&
      Object.keys(t).some((l) => {
        var o;
        return l !== "id" && !(!((o = e.paramOnlyVariables) === null || o === void 0) && o.includes(l)) && l !== e.modelApiIdentifier;
      })
    )
      throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
    let a;
    const s = (i = e.operatesWithRecordIdentity) !== null && i !== void 0 ? i : !0;
    if ((n = e.acceptsModelInput) !== null && n !== void 0 ? n : e.hasCreateOrUpdateEffect)
      if (e.modelApiIdentifier in t && typeof t[e.modelApiIdentifier] == "object" && t[e.modelApiIdentifier] != null) a = t;
      else {
        a = { [e.modelApiIdentifier]: {} };
        for (const [l, o] of Object.entries(t))
          !((r = e.paramOnlyVariables) === null || r === void 0) && r.includes(l)
            ? (a[l] = o)
            : l == "id" && s
            ? (a.id = o)
            : (a[e.modelApiIdentifier][l] = o);
      }
    else a = t;
    return a;
  },
  rm = (e, t = {}) => {
    var i;
    return e.variables.ids
      ? Array.isArray(t)
        ? { ids: t }
        : t
      : { inputs: ((i = Array.isArray(t) ? t : t.inputs) !== null && i !== void 0 ? i : []).map((r) => vc(e, r)) };
  },
  sm = (e, t) => {
    const i = {};
    for (const [n, r] of Object.entries(e)) i[n] = { ...r, value: t[n] };
    return i;
  },
  Ba = (e, t) => (t && e.unshift(...(Array.isArray(t) ? t : [t])), e),
  ga = (e, t) => {
    const i = t ? [...(Array.isArray(t) ? t : [t]), e].join(".") : e;
    return { gadgetMeta: { hydrations: Ut({ modelName: i }) } };
  };
function _i(e, t) {
  if (!e) return t;
  if ((Array.isArray(e) || (e = [e]), e)) for (let i = e.length - 1; i >= 0; i--) t = { [e[i]]: t };
  return t;
}
const cr = {
  errors: {
    message: !0,
    code: !0,
    "... on InvalidRecordError": { model: { apiIdentifier: !0 }, validationErrors: { message: !0, apiIdentifier: !0 } },
  },
};
class ss extends Array {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "modelManager", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "pagination", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  static boot(t, i, n) {
    const r = new ss();
    return r.push(...i), (r.modelManager = t), (r.pagination = n), Object.freeze(r), r;
  }
  static get [Symbol.species]() {
    return Array;
  }
  firstOrThrow() {
    if (!this[0]) throw new wl("No records found.", "GGT_RECORD_NOT_FOUND");
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
    if (!this.hasNextPage) throw new ko("Cannot request next page because there isn't one, should check 'hasNextPage' to see if it exists");
    const { first: i, last: n, before: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({ ...a, after: this.pagination.pageInfo.endCursor, first: i || n });
  }
  async previousPage() {
    var t;
    if (!this.hasPreviousPage)
      throw new ko("Cannot request previous page because there isn't one, should check 'hasPreviousPage' to see if it exists");
    const { first: i, last: n, after: r, ...a } = (t = this.pagination.options) !== null && t !== void 0 ? t : {};
    return await this.modelManager.findMany({ ...a, before: this.pagination.pageInfo.startCursor, last: n || i });
  }
}
const cl = (e, t = !1) => {
    const i = { ...e };
    return t && (i.__typename = !0), i;
  },
  Ml = (e) => {
    if (e != null && e.live) return ["@live"];
  },
  td = (e, t, i, n, r, a) => {
    const s = {};
    typeof t < "u" && (s.id = ee({ type: "GadgetID!", value: t }));
    let l = { [e]: Ut(s, cl((r == null ? void 0 : r.select) || i, !0)) };
    return (l = _i(a, l)), xt({ type: "query", name: e, fields: { ...l, ...ga(n, a) }, directives: Ml(r) });
  },
  id = (e, t, i, n, r, a, s) => Tr(e, n, r, { ...a, first: 2, filter: { [t]: { equals: i } } }, s),
  Tr = (e, t, i, n, r) => {
    let a = {
      [e]: Ut(
        {
          after: ee({ value: n == null ? void 0 : n.after, type: "String" }),
          first: ee({ value: n == null ? void 0 : n.first, type: "Int" }),
          before: ee({ value: n == null ? void 0 : n.before, type: "String" }),
          last: ee({ value: n == null ? void 0 : n.last, type: "Int" }),
          sort: n != null && n.sort ? ee({ value: n.sort, type: `[${Ic(i, r)}!]` }) : void 0,
          filter: n != null && n.filter ? ee({ value: n.filter, type: `[${Zo(i, r)}!]` }) : void 0,
          search: n != null && n.search ? ee({ value: n.search, type: "String" }) : void 0,
        },
        {
          pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 },
          edges: { cursor: !0, node: cl((n == null ? void 0 : n.select) || t, !0) },
        }
      ),
    };
    return r && (a = _i(r, a)), xt({ type: "query", name: e, fields: { ...a, ...ga(i, r) }, directives: Ml(n) });
  },
  nd = (e) => Object.fromEntries(Object.entries(e).map(([t, i]) => [t, ee(i)])),
  ad = (e, t, i, n, r = 0) => {
    const a = r == 0 ? { success: !0, ...cr } : {};
    if (n && typeof n != "boolean")
      for (const [s, l] of Object.entries(n))
        "select" in l ? (a[s] = cl(t, !0)) : (a[s] = { __typename: s.includes("... on"), ...ad(e, t, i, l.hasReturnType, r + 1) });
    else n ? (a[i && r == 0 ? "results" : "result"] = !0) : t && (a[e] = cl(t, !0));
    return a;
  },
  Us = (e, t, i, n, r, a, s, l, o) => {
    const d = (a == null ? void 0 : a.select) || t;
    let u = { [e]: Ut(nd(r), ad(n, d, l, o)) };
    u = _i(s, u);
    const f = { type: "mutation", name: e, fields: { ...u, ...ga(i, s) }, directives: Ml(a) };
    return xt(f);
  },
  lm = (e, t, i) => {
    let n = {},
      r = t.operationName,
      a;
    switch (
      (t.isBulk && (r = t.operationName.replace(/^bulk/, "").replace(/s$/, "")),
      t.operationReturnType ? (a = `${t.operationReturnType}Result`) : (a = `${xs(r)}Result`),
      t.type)
    ) {
      case "action": {
        const l = (i == null ? void 0 : i.select) || t.defaultSelection;
        n = { [`... on ${a}`]: ad(t.modelApiIdentifier, l, t.isBulk, t.hasReturnType) };
        break;
      }
      case "globalAction":
        n = { [`... on ${a}`]: Nc() };
    }
    const s = {
      type: "subscription",
      name: Tn(r) + "BackgroundResult",
      fields: { backgroundAction: Ut({ id: ee({ value: e, type: "String!" }) }, { id: !0, outcome: !0, result: { ...n } }) },
    };
    return xt(s);
  },
  Nc = () => ({ success: !0, ...cr, result: !0 }),
  rd = (e, t, i, n) => {
    let r = { [e]: Ut(nd(t), Nc()) };
    return (r = _i(i, r)), xt({ type: "mutation", name: e, fields: r, directives: Ml(n) });
  },
  om = (e) => {
    if (!e) return null;
    const t = { ...e };
    typeof t.retries == "number" && (t.retries = { retryCount: t.retries }),
      typeof t.queue == "string" && (t.queue = { name: t.queue }),
      t.startAt instanceof Date && (t.startAt = t.startAt.toISOString());
    for (const i of Object.keys(t)) ["id", "retries", "queue", "priority", "startAt"].includes(i) || delete t[i];
    return t;
  },
  dm = (e, t, i, n, r) => {
    let a = {
      [e]: Ut(
        { ...nd(t), backgroundOptions: ee({ type: "EnqueueBackgroundActionOptions", value: om(n) }) },
        { success: !0, errors: { message: !0, code: !0 }, [r ? "backgroundActions" : "backgroundAction"]: { id: !0 } }
      ),
    };
    return (a = _i(i, a)), xt({ type: "mutation", name: "enqueue" + xs(e), fields: { background: a } });
  },
  um = (e, t) => ({
    [Symbol.asyncIterator]() {
      const i = e[Symbol.asyncIterator]();
      return {
        async next() {
          const { done: n, value: r } = await i.next();
          return { done: n, value: typeof r < "u" ? t(r) : void 0 };
        },
        async return(n) {
          var r;
          return await ((r = i.return) === null || r === void 0 ? void 0 : r.call(i, n));
        },
      };
    },
  });
function sd(e, t, i) {
  return i != null && i.live
    ? um(pf(e), t)
    : sn(
        e,
        ct((r) => !r.stale && !r.hasNext),
        Es(1),
        Al
      ).then((r) => t(r));
}
const ie = (e, t, i, n, r, a, s = !0, l) => {
    const o = td(t, i, n, r, a, l),
      d = e.connection.currentClient.query(o.query, o.variables);
    return sd(
      d,
      (u) => {
        const f = s ? rn : As,
          c = Ba([t], l),
          y = f(u, c);
        return Fr(u, y);
      },
      a
    );
  },
  Xt = (e, t, i, n, r, a, s, l = !0, o) => {
    const d = id(t, i, n, r, a, s, o),
      u = Ba([t], o),
      f = e.connection.currentClient.query(d.query, d.variables);
    return sd(
      f,
      (c) => {
        const y = rn(c, u),
          g = Cs(c, y);
        if (g.length > 1) throw nm(a, i, n);
        const F = g[0];
        if (!F && l) throw new Jo(`${a} record with ${i}=${n} not found`);
        return F ?? null;
      },
      s
    );
  },
  H = (e, t, i, n, r, a, s) => {
    const l = Tr(t, i, n, r, s),
      o = e.connection.currentClient.query(l.query, l.variables),
      d = Ba([t], s);
    return sd(
      o,
      (u) => {
        let f;
        a === !1 ? (f = As(u, d)) : (f = rn(u, d, a));
        const c = Cs(u, f);
        return ss.boot(e, c, { options: r, pageInfo: f.pageInfo });
      },
      r
    );
  },
  D = async (e, t, i, n, r, a, s, l, o, d) => {
    const u = Us(t, i, n, r, s, l, o, a, d),
      f = await e.connection.currentClient.mutation(u.query, u.variables).toPromise(),
      c = Ba([t], o);
    if (a) {
      const y = rs(f.data, c),
        g = cm(i, f, y, r, d);
      if (y.errors) {
        const F = y.errors.map((C) => Xo(C));
        throw new im(F, g);
      }
      return g;
    } else {
      const y = Ta(f, c);
      return Ol(i, f, y, r, d);
    }
  },
  cm = (e, t, i, n, r) => {
    if (e != null)
      return r
        ? typeof r == "boolean"
          ? i.results
          : Object.entries(r).flatMap(([a, s]) => {
              const l = i[a];
              return Array.isArray(l)
                ? l.map((o) => {
                    const d = "hasReturnType" in s ? Ac(o, s.hasReturnType) : !1;
                    return d ? Ol(e, t, o, n, d) : Fr(t, o);
                  })
                : [];
            })
        : ed(t, i[n]);
  },
  Ol = (e, t, i, n, r) => {
    if (e != null)
      if (r) {
        if (typeof r == "boolean") return i.result;
        {
          const a = Ac(i, r);
          return Ol(e, t, i, n, a);
        }
      } else return Fr(t, i[n]);
  },
  Ac = (e, t) => {
    if (typeof t == "boolean") return t;
    const i = t[`... on ${e.__typename}`];
    return i && "hasReturnType" in i ? i.hasReturnType : !1;
  },
  ls = async (e, t, i, n) => {
    const r = rd(t, i, n),
      a = await e.currentClient.mutation(r.query, r.variables).toPromise(),
      s = Ba([t], n);
    return Ta(a, s).result;
  };
async function ba(e, t, i, n = {}) {
  const r = t.isBulk ? rm(t, i) : vc(t, i),
    a = sm(t.variables, r),
    s = dm(t.operationName, a, t.namespace, n, t.isBulk),
    l = await e.currentClient.mutation(s.query, s.variables, n).toPromise(),
    o = ["background", ...Ba([t.operationName], t.namespace)];
  try {
    const d = Ta(l, o);
    return t.isBulk ? d.backgroundActions.map((u) => new Ki(e, t, u.id)) : new Ki(e, t, d.backgroundAction.id);
  } catch (d) {
    if ("code" in d && d.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && n != null && n.id && n.onDuplicateID == "ignore")
      return new Ki(e, t, n.id);
    throw d;
  }
}
const pm = async (e, t, i, n) => {
  const r = lm(t, i, n),
    a = e.currentClient.subscription(r.query, r.variables),
    s = await sn(
      a,
      ct((o) => {
        var d, u;
        return (
          o.error ||
          ((u = (d = o.data) === null || d === void 0 ? void 0 : d.backgroundAction) === null || u === void 0 ? void 0 : u.outcome)
        );
      }),
      Es(1),
      Al
    ),
    l = rn(s, ["backgroundAction"]);
  switch ((Sc(l.result), i.type)) {
    case "action": {
      l.result = Ol(i.defaultSelection, s.data, l.result, i.isBulk ? i.modelApiIdentifier : i.modelSelectionField, i.hasReturnType);
      break;
    }
    case "globalAction": {
      l.result = l.result.result;
      break;
    }
  }
  return l;
};
class Ki {
  constructor(t, i, n) {
    Object.defineProperty(this, "connection", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "action", { enumerable: !0, configurable: !0, writable: !0, value: i }),
      Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: n });
  }
  async result(t) {
    return (await pm(this.connection, this.id, this.action, t)).result;
  }
}
var Fs;
(function (e) {
  (e.Durable = "Durable"), (e.Session = "session"), (e.Temporary = "temporary");
})(Fs || (Fs = {}));
function Ci(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Nr(e) {
  return Ci(e) === "object";
}
function fm(e) {
  return Array.isArray(e) && e.length > 0 && e.every((t) => "message" in t);
}
function Yd(e, t) {
  return e.length < 124 ? e : t;
}
const mm = "graphql-transport-ws";
var ni;
(function (e) {
  (e[(e.InternalServerError = 4500)] = "InternalServerError"),
    (e[(e.InternalClientError = 4005)] = "InternalClientError"),
    (e[(e.BadRequest = 4400)] = "BadRequest"),
    (e[(e.BadResponse = 4004)] = "BadResponse"),
    (e[(e.Unauthorized = 4401)] = "Unauthorized"),
    (e[(e.Forbidden = 4403)] = "Forbidden"),
    (e[(e.SubprotocolNotAcceptable = 4406)] = "SubprotocolNotAcceptable"),
    (e[(e.ConnectionInitialisationTimeout = 4408)] = "ConnectionInitialisationTimeout"),
    (e[(e.ConnectionAcknowledgementTimeout = 4504)] = "ConnectionAcknowledgementTimeout"),
    (e[(e.SubscriberAlreadyExists = 4409)] = "SubscriberAlreadyExists"),
    (e[(e.TooManyInitialisationRequests = 4429)] = "TooManyInitialisationRequests");
})(ni || (ni = {}));
var et;
(function (e) {
  (e.ConnectionInit = "connection_init"),
    (e.ConnectionAck = "connection_ack"),
    (e.Ping = "ping"),
    (e.Pong = "pong"),
    (e.Subscribe = "subscribe"),
    (e.Next = "next"),
    (e.Error = "error"),
    (e.Complete = "complete");
})(et || (et = {}));
function Fc(e) {
  if (!Nr(e)) throw new Error(`Message is expected to be an object, but got ${Ci(e)}`);
  if (!e.type) throw new Error("Message is missing the 'type' property");
  if (typeof e.type != "string") throw new Error(`Message is expects the 'type' property to be a string, but got ${Ci(e.type)}`);
  switch (e.type) {
    case et.ConnectionInit:
    case et.ConnectionAck:
    case et.Ping:
    case et.Pong: {
      if (e.payload != null && !Nr(e.payload))
        throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
      break;
    }
    case et.Subscribe: {
      if (typeof e.id != "string") throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ci(e.id)}`);
      if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Nr(e.payload)) throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ci(e.payload)}`);
      if (typeof e.payload.query != "string")
        throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ci(e.payload.query)}`);
      if (e.payload.variables != null && !Nr(e.payload.variables))
        throw new Error(
          `"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ci(
            e.payload.variables
          )}`
        );
      if (e.payload.operationName != null && Ci(e.payload.operationName) !== "string")
        throw new Error(
          `"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ci(
            e.payload.operationName
          )}`
        );
      if (e.payload.extensions != null && !Nr(e.payload.extensions))
        throw new Error(
          `"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ci(
            e.payload.extensions
          )}`
        );
      break;
    }
    case et.Next: {
      if (typeof e.id != "string") throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ci(e.id)}`);
      if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!Nr(e.payload)) throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ci(e.payload)}`);
      break;
    }
    case et.Error: {
      if (typeof e.id != "string") throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ci(e.id)}`);
      if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      if (!fm(e.payload))
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`
        );
      break;
    }
    case et.Complete: {
      if (typeof e.id != "string") throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ci(e.id)}`);
      if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
      break;
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  return e;
}
function ym(e, t) {
  return Fc(typeof e == "string" ? JSON.parse(e, t) : e);
}
function cs(e, t) {
  return Fc(e), JSON.stringify(e, t);
}
function hm(e) {
  const {
    url: t,
    connectionParams: i,
    lazy: n = !0,
    onNonLazyError: r = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: s = 0,
    disablePong: l,
    connectionAckWaitTimeout: o = 0,
    retryAttempts: d = 5,
    retryWait: u = async function (Z) {
      let z = 1e3;
      for (let G = 0; G < Z; G++) z *= 2;
      await new Promise((G) => setTimeout(G, z + Math.floor(Math.random() * (3e3 - 300) + 300)));
    },
    shouldRetry: f = Ks,
    isFatalConnectionProblem: c,
    on: y,
    webSocketImpl: g,
    generateID: F = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (Z) => {
        const z = (Math.random() * 16) | 0;
        return (Z == "x" ? z : (z & 3) | 8).toString(16);
      });
    },
    jsonMessageReplacer: C,
    jsonMessageReviver: O,
  } = e;
  let m;
  if (g) {
    if (!bm(g)) throw new Error("Invalid WebSocket implementation provided");
    m = g;
  } else
    typeof WebSocket < "u"
      ? (m = WebSocket)
      : typeof global < "u"
      ? (m = global.WebSocket || global.MozWebSocket)
      : typeof window < "u" && (m = window.WebSocket || window.MozWebSocket);
  if (!m)
    throw new Error(
      "WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`"
    );
  const I = m,
    S = (() => {
      const R = (() => {
          const z = {};
          return {
            on(G, le) {
              return (
                (z[G] = le),
                () => {
                  delete z[G];
                }
              );
            },
            emit(G) {
              var le;
              "id" in G && ((le = z[G.id]) === null || le === void 0 || le.call(z, G));
            },
          };
        })(),
        Z = {
          connecting: y != null && y.connecting ? [y.connecting] : [],
          opened: y != null && y.opened ? [y.opened] : [],
          connected: y != null && y.connected ? [y.connected] : [],
          ping: y != null && y.ping ? [y.ping] : [],
          pong: y != null && y.pong ? [y.pong] : [],
          message: y != null && y.message ? [R.emit, y.message] : [R.emit],
          closed: y != null && y.closed ? [y.closed] : [],
          error: y != null && y.error ? [y.error] : [],
        };
      return {
        onMessage: R.on,
        on(z, G) {
          const le = Z[z];
          return (
            le.push(G),
            () => {
              le.splice(le.indexOf(G), 1);
            }
          );
        },
        emit(z, ...G) {
          for (const le of [...Z[z]]) le(...G);
        },
      };
    })();
  function k(R) {
    const Z = [
      S.on("error", (z) => {
        Z.forEach((G) => G()), R(z);
      }),
      S.on("closed", (z) => {
        Z.forEach((G) => G()), R(z);
      }),
    ];
  }
  let w,
    q = 0,
    ce,
    oe = !1,
    Ae = 0,
    K = !1;
  async function _() {
    clearTimeout(ce);
    const [R, Z] = await (w ??
      (w = new Promise((le, $i) =>
        (async () => {
          if (oe) {
            if ((await u(Ae), !q)) return (w = void 0), $i({ code: 1e3, reason: "All Subscriptions Gone" });
            Ae++;
          }
          S.emit("connecting");
          const ne = new I(typeof t == "function" ? await t() : t, mm);
          let Bn, Da;
          function pr() {
            isFinite(s) &&
              s > 0 &&
              (clearTimeout(Da),
              (Da = setTimeout(() => {
                ne.readyState === I.OPEN && (ne.send(cs({ type: et.Ping })), S.emit("ping", !1, void 0));
              }, s)));
          }
          k((it) => {
            (w = void 0),
              clearTimeout(Bn),
              clearTimeout(Da),
              $i(it),
              Ks(it) && it.code === 4499 && (ne.close(4499, "Terminated"), (ne.onerror = null), (ne.onclose = null));
          }),
            (ne.onerror = (it) => S.emit("error", it)),
            (ne.onclose = (it) => S.emit("closed", it)),
            (ne.onopen = async () => {
              try {
                S.emit("opened", ne);
                const it = typeof i == "function" ? await i() : i;
                if (ne.readyState !== I.OPEN) return;
                ne.send(cs(it ? { type: et.ConnectionInit, payload: it } : { type: et.ConnectionInit }, C)),
                  isFinite(o) &&
                    o > 0 &&
                    (Bn = setTimeout(() => {
                      ne.close(ni.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
                    }, o)),
                  pr();
              } catch (it) {
                S.emit("error", it),
                  ne.close(ni.InternalClientError, Yd(it instanceof Error ? it.message : new Error(it).message, "Internal client error"));
              }
            });
          let Ca = !1;
          ne.onmessage = ({ data: it }) => {
            try {
              const ft = ym(it, O);
              if ((S.emit("message", ft), ft.type === "ping" || ft.type === "pong")) {
                S.emit(ft.type, !0, ft.payload),
                  ft.type === "pong"
                    ? pr()
                    : l ||
                      (ne.send(cs(ft.payload ? { type: et.Pong, payload: ft.payload } : { type: et.Pong })),
                      S.emit("pong", !1, ft.payload));
                return;
              }
              if (Ca) return;
              if (ft.type !== et.ConnectionAck) throw new Error(`First message cannot be of type ${ft.type}`);
              clearTimeout(Bn),
                (Ca = !0),
                S.emit("connected", ne, ft.payload),
                (oe = !1),
                (Ae = 0),
                le([ne, new Promise((Ls, zs) => k(zs))]);
            } catch (ft) {
              (ne.onmessage = null),
                S.emit("error", ft),
                ne.close(ni.BadResponse, Yd(ft instanceof Error ? ft.message : new Error(ft).message, "Bad response"));
            }
          };
        })()
      )));
    R.readyState === I.CLOSING && (await Z);
    let z = () => {};
    const G = new Promise((le) => (z = le));
    return [
      R,
      z,
      Promise.race([
        G.then(() => {
          if (!q) {
            const le = () => R.close(1e3, "Normal Closure");
            isFinite(a) && a > 0
              ? (ce = setTimeout(() => {
                  R.readyState === I.OPEN && le();
                }, a))
              : le();
          }
        }),
        Z,
      ]),
    ];
  }
  function x(R) {
    if (
      Ks(R) &&
      (gm(R.code) ||
        [
          ni.InternalServerError,
          ni.InternalClientError,
          ni.BadRequest,
          ni.BadResponse,
          ni.Unauthorized,
          ni.SubprotocolNotAcceptable,
          ni.SubscriberAlreadyExists,
          ni.TooManyInitialisationRequests,
        ].includes(R.code))
    )
      throw R;
    if (K) return !1;
    if (Ks(R) && R.code === 1e3) return q > 0;
    if (!d || Ae >= d || !f(R) || (c != null && c(R))) throw R;
    return (oe = !0);
  }
  return (
    n ||
      (async () => {
        for (q++; ; )
          try {
            const [, , R] = await _();
            await R;
          } catch (R) {
            try {
              if (!x(R)) return;
            } catch (Z) {
              return r == null ? void 0 : r(Z);
            }
          }
      })(),
    {
      on: S.on,
      subscribe(R, Z) {
        const z = F(R);
        let G = !1,
          le = !1,
          $i = () => {
            q--, (G = !0);
          };
        return (
          (async () => {
            for (q++; ; )
              try {
                const [ne, Bn, Da] = await _();
                if (G) return Bn();
                const pr = S.onMessage(z, (Ca) => {
                  switch (Ca.type) {
                    case et.Next: {
                      Z.next(Ca.payload);
                      return;
                    }
                    case et.Error: {
                      (le = !0), (G = !0), Z.error(Ca.payload), $i();
                      return;
                    }
                    case et.Complete: {
                      (G = !0), $i();
                      return;
                    }
                  }
                });
                ne.send(cs({ id: z, type: et.Subscribe, payload: R }, C)),
                  ($i = () => {
                    !G && ne.readyState === I.OPEN && ne.send(cs({ id: z, type: et.Complete }, C)), q--, (G = !0), Bn();
                  }),
                  await Da.finally(pr);
                return;
              } catch (ne) {
                if (!x(ne)) return;
              }
          })()
            .then(() => {
              le || Z.complete();
            })
            .catch((ne) => {
              Z.error(ne);
            }),
          () => {
            G || $i();
          }
        );
      },
      async dispose() {
        if (((K = !0), w)) {
          const [R] = await w;
          R.close(1e3, "Normal Closure");
        }
      },
      terminate() {
        w && S.emit("closed", { code: 4499, reason: "Terminated", wasClean: !1 });
      },
    }
  );
}
function Ks(e) {
  return Nr(e) && "code" in e && "reason" in e;
}
function gm(e) {
  return [1e3, 1001, 1006, 1005, 1012, 1013, 1013].includes(e) ? !1 : e >= 1e3 && e <= 1999;
}
function bm(e) {
  return typeof e == "function" && "constructor" in e && "CLOSED" in e && "CLOSING" in e && "CONNECTING" in e && "OPEN" in e;
}
var Yr = null;
typeof WebSocket < "u"
  ? (Yr = WebSocket)
  : typeof MozWebSocket < "u"
  ? (Yr = MozWebSocket)
  : typeof global < "u"
  ? (Yr = global.WebSocket || global.MozWebSocket)
  : typeof window < "u"
  ? (Yr = window.WebSocket || window.MozWebSocket)
  : typeof self < "u" && (Yr = self.WebSocket || self.MozWebSocket);
const Im = Yr;
class wc extends Error {}
class Sm {
  constructor(t, i) {
    Object.defineProperty(this, "client", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "subscriptionClient", { enumerable: !0, configurable: !0, writable: !0, value: i }),
      Object.defineProperty(this, "open", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  close() {
    this.open && this.rollback().catch(() => null), this.subscriptionClient.dispose();
  }
  async rollback() {
    throw (
      (rn(await this.client.mutation("mutation RollbackTransaction { internal { rollbackTransaction }}", {}).toPromise(), [
        "internal",
        "rollbackTransaction",
      ]),
      (this.open = !1),
      new wc("Transaction rolled back."))
    );
  }
  async start() {
    rn(await this.client.mutation("mutation StartTransaction { internal { startTransaction }}", {}).toPromise(), [
      "internal",
      "startTransaction",
    ]),
      (this.open = !0);
  }
  async commit() {
    rn(await this.client.mutation("mutation CommitTransaction { internal { commitTransaction }}", {}).toPromise(), [
      "internal",
      "commitTransaction",
    ]),
      (this.open = !1);
  }
}
class km {
  constructor() {
    Object.defineProperty(this, "values", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  getItem(t) {
    return this.values[t] || null;
  }
  setItem(t, i) {
    this.values[t] = i;
  }
}
const vm = (e) => {
    const t = [...e.definitions].reverse().find((i) => i.kind == "OperationDefinition");
    if (t) return t.name ? t.name.value : t.selectionSet.selections.find((n) => n.kind == "Field").name.value;
  },
  Zd = dc({
    onOperation: (e) => {
      var t, i;
      ((t = (i = e.context).operationName) !== null && t !== void 0) || (i.operationName = vm(e.query) || "unknown");
    },
  }),
  Mc = (e, t) => {
    const [i, n] = e.split("?"),
      r = new URLSearchParams(n);
    for (const [a, s] of Object.entries(t)) r.set(a, s);
    return `${i}?${r.toString()}`;
  },
  Nm = dc({
    onOperation: (e) => {
      if (e.context.url && e.context.operationName)
        try {
          e.context.url = Mc(e.context.url, { operation: e.context.operationName });
        } catch {}
    },
  });
var Fo;
(function (e) {
  e[(e.TooManyRequests = 4294)] = "TooManyRequests";
})(Fo || (Fo = {}));
const Am = 2,
  Fm = 4800,
  wm = 1e4,
  Mm = [ni.ConnectionAcknowledgementTimeout, ni.ConnectionInitialisationTimeout],
  Xd = Symbol.for("gadget/connection"),
  Om = "token",
  Tm = typeof btoa < "u" ? btoa : (e) => Buffer.from(e).toString("base64");
var J;
(function (e) {
  (e.BrowserSession = "browser-session"),
    (e.APIKey = "api-key"),
    (e.Internal = "internal"),
    (e.InternalAuthToken = "internal-auth-token"),
    (e.Anonymous = "anonymous"),
    (e.Custom = "custom");
})(J || (J = {}));
const Js = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
class Rn {
  constructor(t) {
    var i, n, r, a, s, l;
    if (
      (Object.defineProperty(this, "options", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "endpoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "subscriptionClientOptions", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "websocketsEndpoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "websocketImplementation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_fetchImplementation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "environment", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "exchanges", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "baseClient", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "baseSubscriptionClient", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "currentTransaction", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "authenticationMode", { enumerable: !0, configurable: !0, writable: !0, value: J.Anonymous }),
      Object.defineProperty(this, "sessionTokenStore", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "requestPolicy", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "createSubscriptionClient", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "transaction", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: async (o, d) => {
          let u, f;
          if ((d ? ((u = d), (f = o)) : ((u = o), (f = {})), this.currentTransaction)) return await u(this.currentTransaction);
          let c = null,
            y;
          try {
            c = await this.waitForOpenedConnection({
              isFatalConnectionProblem(C) {
                return console.warn("Transport error encountered during transaction processing", C), !0;
              },
              connectionAckWaitTimeout: Fm,
              ...f,
              lazy: !1,
              lazyCloseTimeout: 1e5,
              retryAttempts: 0,
            });
            const g = new jd({
              url: "/-",
              requestPolicy: "network-only",
              exchanges: [
                ...this.exchanges.beforeAll,
                Zd,
                ...this.exchanges.beforeAsync,
                jl({
                  forwardSubscription(C) {
                    const O = { ...C, query: C.query || "" };
                    return { subscribe: (m) => ({ unsubscribe: c.subscribe(O, m) }) };
                  },
                  enableAllOperations: !0,
                }),
                ...this.exchanges.afterAll,
              ],
            });
            (g[Xd] = this), (y = new Sm(g, c)), (this.currentTransaction = y), await y.start();
            const F = await u(y);
            return await y.commit(), F;
          } catch (g) {
            try {
              y != null && y.open && (await y.rollback());
            } catch (F) {
              F instanceof wc ||
                console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", F);
            }
            throw vo(g) ? new Wd(g) : g;
          } finally {
            await (c == null ? void 0 : c.dispose()), (this.currentTransaction = null);
          }
        },
      }),
      Object.defineProperty(this, "fetch", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: async (o, d = {}) => {
          var u;
          if (
            ((o = Rm(o, (u = this.options.baseRouteURL) !== null && u !== void 0 ? u : this.options.endpoint)), this.isGadgetRequest(o))
          ) {
            const c = await this.requestHeaders();
            (d.headers = { ...c, ...d.headers }),
              this.authenticationMode == J.Custom && (await this.options.authenticationMode.custom.processFetch(o, d));
          }
          const f = await this._fetchImplementation(o, d);
          if (this.authenticationMode == J.BrowserSession) {
            const c = f.headers.get("x-set-authorization"),
              y = c != null && c.startsWith("Session ") ? c.replace("Session ", "") : null;
            y && this.sessionTokenStore.setItem(this.sessionStorageKey, y);
          }
          return f;
        },
      }),
      !t.endpoint)
    )
      throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    (this.endpoint = t.endpoint),
      t.fetchImplementation
        ? (this._fetchImplementation = t.fetchImplementation)
        : typeof Js < "u" && Js.fetch
        ? (this._fetchImplementation = Js.fetch.bind(Js))
        : (this._fetchImplementation = async (...o) => {
            let d = await Td(
              () => import("./browser-ponyfill-95990512.js").then((u) => u.b),
              ["./browser-ponyfill-95990512.js", "./index-7c191284.js"],
              import.meta.url
            );
            return d.default && (d = d.default), await d(...o);
          }),
      (this.websocketImplementation =
        (n = (i = t.websocketImplementation) !== null && i !== void 0 ? i : globalThis == null ? void 0 : globalThis.WebSocket) !== null &&
        n !== void 0
          ? n
          : Im),
      (this.websocketsEndpoint = (r = t.websocketsEndpoint) !== null && r !== void 0 ? r : t.endpoint + "/batch"),
      (this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws")),
      (this.environment = (a = t.environment) !== null && a !== void 0 ? a : "Development"),
      (this.requestPolicy = (s = t.requestPolicy) !== null && s !== void 0 ? s : "cache-and-network"),
      (this.exchanges = { beforeAll: [], beforeAsync: [], afterAll: [], ...t.exchanges }),
      (this.createSubscriptionClient = (l = t.createSubscriptionClient) !== null && l !== void 0 ? l : hm),
      this.setAuthenticationMode(t.authenticationMode),
      (this.baseClient = this.newBaseClient());
  }
  get sessionStorageKey() {
    return `${Om}-${this.endpoint}`;
  }
  get currentClient() {
    var t;
    return ((t = this.currentTransaction) === null || t === void 0 ? void 0 : t.client) || this.baseClient;
  }
  set fetchImplementation(t) {
    (this._fetchImplementation = t), this.resetClients();
  }
  setAuthenticationMode(t) {
    var i;
    t &&
      (t.browserSession
        ? this.enableSessionMode(t.browserSession)
        : t.internal
        ? (this.authenticationMode = J.Internal)
        : t.internalAuthToken
        ? (this.authenticationMode = J.InternalAuthToken)
        : t.apiKey
        ? (this.authenticationMode = J.APIKey)
        : t.custom && (this.authenticationMode = J.Custom),
      (this.options.authenticationMode = t)),
      ((i = this.authenticationMode) !== null && i !== void 0) || (this.authenticationMode = J.Anonymous);
  }
  enableSessionMode(t) {
    this.authenticationMode = J.BrowserSession;
    const i = !t || typeof t == "boolean" ? Fs.Durable : t.storageType;
    let n;
    i == Fs.Durable && Hd("localStorage")
      ? (n = window.localStorage)
      : i == Fs.Session && Hd("sessionStorage")
      ? (n = window.sessionStorage)
      : (n = new km()),
      t !== null && typeof t == "object" && "initialToken" in t && t.initialToken && n.setItem(this.sessionStorageKey, t.initialToken),
      (this.sessionTokenStore = n),
      this.resetClients();
  }
  close() {
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient),
      this.currentTransaction && this.currentTransaction.close();
  }
  isGadgetRequest(t) {
    let i;
    if ((typeof t == "string" ? (i = t) : typeof t == "object" && "url" in t ? (i = t.url) : (i = String(t)), wo(this.options.endpoint)))
      return !!wo(i);
    const n = new URL(this.options.endpoint).host;
    return i.includes(n);
  }
  resetClients() {
    if (this.currentTransaction) throw new Error("Can't reset clients while a transaction is open");
    this.baseSubscriptionClient && this.disposeClient(this.baseSubscriptionClient),
      this.baseClient && (this.baseClient = this.newBaseClient());
  }
  newBaseClient() {
    const t = [...this.exchanges.beforeAll, Zd, Nm];
    typeof window < "u" && t.push(Lf),
      t.push(
        ...this.exchanges.beforeAsync,
        jl({
          forwardSubscription: (r) => ({
            subscribe: (a) => {
              const s = { ...r, query: r.query || "" };
              return { unsubscribe: this.getBaseSubscriptionClient().subscribe(s, a) };
            },
          }),
        }),
        jl({
          isSubscriptionOperation: (r) => r.query.definitions.some((a) => eu(a)),
          forwardSubscription: (r) => ({
            subscribe: (a) => {
              let s;
              const l = Td(() => import("./index-89e040af.js"), [], import.meta.url)
                .then(({ applyAsyncIterableIteratorToSink: o, applyLiveQueryJSONDiffPatch: d, makeAsyncIterableIteratorFromSink: u }) => {
                  const f = { ...r, query: r.query || "" };
                  return (s = o(d(u((c) => this.getBaseSubscriptionClient().subscribe(f, c))), a)), s;
                })
                .catch((o) => a.error(o));
              return {
                unsubscribe: () => {
                  s
                    ? s()
                    : l.then((o) => {
                        o && o();
                      });
                },
              };
            },
          }),
        }),
        zf,
        ...this.exchanges.afterAll
      );
    const i = new jd({ url: this.endpoint, fetch: this.fetch, exchanges: t, requestPolicy: this.requestPolicy });
    i[Xd] = this;
    const n = i.reexecuteOperation.bind(i);
    return (
      (i.reexecuteOperation = (r) => {
        r.query.definitions.some(eu) || n(r);
      }),
      i
    );
  }
  newSubscriptionClient(t) {
    if (!this.websocketImplementation)
      throw new Error(
        "Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor."
      );
    let i = this.websocketsEndpoint;
    return (
      t != null && t.urlParams && (i = Mc(i, t.urlParams)),
      this.createSubscriptionClient({
        url: i,
        webSocketImpl: this.websocketImplementation,
        connectionParams: async () => {
          var n, r, a, s;
          const l = { environment: this.environment, auth: { type: this.authenticationMode } };
          if (this.authenticationMode == J.APIKey) l.auth.key = this.options.authenticationMode.apiKey;
          else if (this.authenticationMode == J.Internal || this.authenticationMode == J.InternalAuthToken) {
            const o =
              this.authenticationMode == J.Internal
                ? this.options.authenticationMode.internal.authToken
                : this.options.authenticationMode.internalAuthToken;
            (l.auth.token = o),
              this.authenticationMode == J.Internal &&
                this.options.authenticationMode.internal.actAsSession &&
                ((l.auth.actAsInternalSession = !0),
                (l.auth.internalSessionId = await ((r = (n = this.options.authenticationMode.internal).getSessionId) === null ||
                r === void 0
                  ? void 0
                  : r.call(n))));
          } else
            this.authenticationMode == J.BrowserSession
              ? (l.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey))
              : this.authenticationMode == J.Custom &&
                (await ((s = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.custom) === null || s === void 0
                  ? void 0
                  : s.processTransactionConnectionParams(l)));
          return l;
        },
        onNonLazyError: () => {},
        on: {
          connected: (n, r) => {
            var a, s, l, o, d, u;
            if (this.authenticationMode == J.BrowserSession && r != null && r.sessionToken) {
              const f = (a = this.options.authenticationMode) === null || a === void 0 ? void 0 : a.browserSession;
              (f !== null && typeof f == "object" ? f.initialToken : null) ||
                this.sessionTokenStore.setItem(this.sessionStorageKey, r.sessionToken);
            }
            (o =
              (l = (s = this.subscriptionClientOptions) === null || s === void 0 ? void 0 : s.on) === null || l === void 0
                ? void 0
                : l.connected) === null ||
              o === void 0 ||
              o.call(l, n, r),
              (u = (d = t == null ? void 0 : t.on) === null || d === void 0 ? void 0 : d.connected) === null ||
                u === void 0 ||
                u.call(d, n, r);
          },
        },
        ...this.subscriptionClientOptions,
        ...t,
      })
    );
  }
  async requestHeaders() {
    var t, i, n;
    const r = {};
    if (this.authenticationMode == J.Internal || this.authenticationMode == J.InternalAuthToken) {
      const a =
        this.authenticationMode == J.Internal
          ? this.options.authenticationMode.internal.authToken
          : this.options.authenticationMode.internalAuthToken;
      if (
        ((r.authorization = "Basic " + Tm("gadget-internal:" + a)),
        this.authenticationMode == J.Internal && this.options.authenticationMode.internal.actAsSession)
      ) {
        r["x-gadget-act-as-internal-session"] = "true";
        const s = await ((i = (t = this.options.authenticationMode.internal).getSessionId) === null || i === void 0 ? void 0 : i.call(t));
        s && (r["x-gadget-internal-session-id"] = s);
      }
    } else if (this.authenticationMode == J.APIKey)
      r.authorization = `Bearer ${(n = this.options.authenticationMode) === null || n === void 0 ? void 0 : n.apiKey}`;
    else if (this.authenticationMode == J.BrowserSession) {
      const a = this.sessionTokenStore.getItem(this.sessionStorageKey);
      a && (r.authorization = `Session ${a}`);
    }
    return (r["x-gadget-environment"] = this.environment), r;
  }
  async waitForOpenedConnection(t) {
    let i = this.newSubscriptionClient(t),
      n = [],
      r = t.connectionAttempts || Am;
    const a = t.connectionGlobalTimeoutMs || wm,
      s = () => {
        n.forEach((l) => l()), (n = []);
      };
    return await new Promise((l, o) => {
      const d = setTimeout(() => {
          this.disposeClient(i), f(new Xf("Timeout opening websocket connection to Gadget API"));
        }, a),
        u = (g) => {
          if (vo(g)) {
            if (g.code == Fo.TooManyRequests) return s(), f(new em(g.reason));
            if (Mm.includes(g.code) && r > 0) {
              (r -= 1), this.disposeClient(i), (i = this.newSubscriptionClient(t)), y();
              return;
            }
          }
          clearTimeout(d), o(new Wd(g));
        },
        f = (g) => {
          clearTimeout(d), o(g);
        },
        c = () => {
          clearTimeout(d), l(i);
        },
        y = () => {
          s(), n.push(i.on("connected", c)), n.push(i.on("closed", u)), n.push(i.on("error", f));
        };
      y();
    }).finally(s);
  }
  disposeClient(t) {
    const i = t.dispose();
    i && i.catch((n) => console.error(`Error closing SubscriptionClient: ${n.message}`));
  }
  getBaseSubscriptionClient() {
    return (
      this.baseSubscriptionClient || (this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: !0 })), this.baseSubscriptionClient
    );
  }
}
Object.defineProperty(Rn, "version", { enumerable: !0, configurable: !0, writable: !0, value: "0.15.38" });
function Rm(e, t) {
  if (typeof e != "string") return e;
  if (wo(e))
    try {
      return String(new URL(e, t));
    } catch {
      return e;
    }
  return e;
}
function wo(e) {
  return e.startsWith("/") && !e.startsWith("//");
}
const Bm = (e) => {
    var t;
    return e.kind !== "OperationDefinition" || e.operation !== "query"
      ? null
      : (t = e.directives) === null || t === void 0
      ? void 0
      : t.find((i) => i.name.value === "live");
  },
  eu = (e) => !!Bm(e),
  Dm = (e, t, i, n) => {
    const r = Tn(e);
    return xt({
      type: "query",
      name: `InternalFind${r}`,
      fields: {
        internal: _i(i, { [e]: Ut({ id: ee({ value: t, type: "GadgetID!" }), select: ee({ value: ld(n), type: "[String!]" }) }) }),
        ...ga(e, i),
      },
    });
  },
  Oc = (e, t, i) => ({
    search: i != null && i.search ? ee({ value: i == null ? void 0 : i.search, type: "String" }) : void 0,
    sort: i != null && i.sort ? ee({ value: i == null ? void 0 : i.sort, type: `[${Ic(e, t)}!]` }) : void 0,
    filter: i != null && i.filter ? ee({ value: i == null ? void 0 : i.filter, type: `[${Zo(e, t)}!]` }) : void 0,
    select: i != null && i.select ? ee({ value: ld(i == null ? void 0 : i.select), type: "[String!]" }) : void 0,
  }),
  Cm = (e, t, i) => {
    const n = Tn(e),
      r = Oc(n, t, i);
    return xt({
      type: "query",
      name: `InternalFindFirst${n}`,
      fields: {
        internal: _i(t, { [`list${n}`]: Ut({ ...r, first: ee({ value: 1, type: "Int" }) }, { edges: { node: !0 } }) }),
        ...ga(e, t),
      },
    });
  },
  Um = (e, t, i) => {
    const n = Tn(e),
      r = Oc(n, t, i);
    return xt({
      type: "query",
      name: `InternalFindMany${n}`,
      fields: {
        internal: _i(t, {
          [`list${n}`]: Ut(
            {
              ...r,
              after: i != null && i.after ? ee({ value: i.after, type: "String" }) : void 0,
              before: i != null && i.before ? ee({ value: i == null ? void 0 : i.before, type: "String" }) : void 0,
              first: i != null && i.first ? ee({ value: i == null ? void 0 : i.first, type: "Int" }) : void 0,
              last: i != null && i.last ? ee({ value: i == null ? void 0 : i.last, type: "Int" }) : void 0,
            },
            { pageInfo: { hasNextPage: !0, hasPreviousPage: !0, startCursor: !0, endCursor: !0 }, edges: { cursor: !0, node: !0 } }
          ),
        }),
        ...ga(e, t),
      },
    });
  },
  Tl = (e, t) => `Internal${Yo(e, t)}Input`,
  qm = (e, t, i) => {
    const n = Tn(e);
    return xt({
      type: "mutation",
      name: `InternalCreate${n}`,
      fields: {
        internal: _i(t, { [`create${n}`]: Ut({ [e]: ee({ value: i, type: Tl(e, t) }) }, { success: !0, ...cr, [e]: !0 }) }),
        ...ga(e, t),
      },
    });
  },
  Pm = (e, t, i, n) => {
    const r = Tn(t);
    return xt({
      type: "mutation",
      name: `InternalBulkCreate${r}`,
      fields: {
        internal: _i(i, { [`bulkCreate${r}`]: Ut({ [t]: ee({ value: n, type: `[${Tl(e, i)}]!` }) }, { success: !0, ...cr, [t]: !0 }) }),
        ...ga(e, i),
      },
    });
  },
  Vm = (e, t, i, n) => {
    const r = Tn(e);
    return xt({
      type: "mutation",
      name: `InternalUpdate${r}`,
      fields: {
        internal: _i(t, {
          [`update${r}`]: Ut(
            { id: ee({ value: i, type: "GadgetID!" }), [e]: ee({ value: n, type: Tl(e, t) }) },
            { success: !0, ...cr, [e]: !0 }
          ),
        }),
        ...ga(e, t),
      },
    });
  },
  Em = (e, t, i, n) => {
    const r = Tn(e);
    return xt({
      type: "mutation",
      name: `InternalUpsert${r}`,
      fields: {
        internal: _i(t, {
          [`upsert${r}`]: Ut(
            { on: ee({ value: i, type: "[String!]" }), [e]: ee({ value: n, type: Tl(e, t) }) },
            { success: !0, ...cr, [e]: !0 }
          ),
        }),
        ...ga(e, t),
      },
    });
  },
  _m = (e, t, i) => {
    const n = Tn(e);
    return xt({
      type: "mutation",
      name: `InternalDelete${n}`,
      fields: { internal: _i(t, { [`delete${n}`]: Ut({ id: ee({ value: i, type: "GadgetID!" }) }, { success: !0, ...cr }) }) },
    });
  },
  xm = (e, t, i) => {
    const n = Tn(e);
    return xt({
      type: "mutation",
      name: `InternalDeleteMany${n}`,
      fields: {
        internal: _i(t, {
          [`deleteMany${n}`]: Ut(
            {
              search: i != null && i.search ? ee({ value: i == null ? void 0 : i.search, type: "String" }) : void 0,
              filter: i != null && i.filter ? ee({ value: i == null ? void 0 : i.filter, type: `[${Zo(e, t)}!]` }) : void 0,
            },
            { success: !0, ...cr }
          ),
        }),
      },
    });
  };
class N {
  constructor(t, i, n) {
    Object.defineProperty(this, "apiIdentifier", { enumerable: !0, configurable: !0, writable: !0, value: t }),
      Object.defineProperty(this, "connection", { enumerable: !0, configurable: !0, writable: !0, value: i }),
      Object.defineProperty(this, "options", { enumerable: !0, configurable: !0, writable: !0, value: n }),
      Object.defineProperty(this, "capitalizedApiIdentifier", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "namespace", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.capitalizedApiIdentifier = xs(t)),
      (this.namespace = (n == null ? void 0 : n.namespace) || []);
  }
  validateRecord(t) {
    return !this.options || !this.options.hasAmbiguousIdentifiers ? !0 : Object.keys(t).every((n) => n === this.apiIdentifier);
  }
  getRecordFromData(t, i) {
    let n = t;
    if (!this.validateRecord(t))
      throw new wl(
        `Invalid arguments found in variables. Did you mean to use ${i}({ ${this.apiIdentifier}: { ... } })?`,
        "GGT_INVALID_RECORD_DATA"
      );
    return this.apiIdentifier in t && (n = n[this.apiIdentifier]), n;
  }
  async findOne(t, i, n = !0) {
    const r = Dm(this.apiIdentifier, t, this.namespace, ld(i == null ? void 0 : i.select)),
      a = await this.connection.currentClient.query(r.query, r.variables).toPromise(),
      l = (n ? rn : As)(a, this.dataPath(this.apiIdentifier));
    return Fr(a, l);
  }
  async maybeFindOne(t, i) {
    const n = await this.findOne(t, i, !1);
    return n.isEmpty() ? null : n;
  }
  async findMany(t) {
    const i = Um(this.apiIdentifier, this.namespace, t),
      n = await this.connection.currentClient.query(i.query, i.variables).toPromise(),
      r = As(n, this.dataPath(`list${this.capitalizedApiIdentifier}`)),
      a = Cs(n, r);
    return ss.boot(this, a, { options: t, pageInfo: r.pageInfo });
  }
  async findFirst(t, i = !0) {
    const n = Cm(this.apiIdentifier, this.namespace, t),
      r = await this.connection.currentClient.query(n.query, n.variables).toPromise(),
      a = this.dataPath(`list${this.capitalizedApiIdentifier}`);
    let s;
    i === !1 ? (s = As(r, a)) : (s = rn(r, a, i));
    const l = Cs(r, s);
    return ss.boot(this, l, { options: t, pageInfo: s.pageInfo })[0];
  }
  async maybeFindFirst(t) {
    return await this.findFirst(t, !1);
  }
  async create(t) {
    const i = qm(this.apiIdentifier, this.namespace, this.getRecordFromData(t, "create")),
      n = await this.connection.currentClient.mutation(i.query, i.variables).toPromise(),
      r = Ta(n, this.dataPath(`create${this.capitalizedApiIdentifier}`));
    return Fr(n, r[this.apiIdentifier]);
  }
  async bulkCreate(t) {
    var i;
    if (!(!((i = this.options) === null || i === void 0) && i.pluralApiIdentifier))
      throw new ko("Cannot perform bulkCreate without a pluralApiIdentifier");
    const n = Tn(this.options.pluralApiIdentifier),
      r = Pm(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, t),
      a = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(),
      s = Ta(a, this.dataPath(`bulkCreate${n}`));
    return ed(a, s[this.options.pluralApiIdentifier]);
  }
  async update(t, i) {
    tt(t, "Can't update a record without an ID passed");
    const n = Vm(this.apiIdentifier, this.namespace, t, this.getRecordFromData(i, "update")),
      r = await this.connection.currentClient.mutation(n.query, n.variables).toPromise(),
      a = Ta(r, this.dataPath(`update${this.capitalizedApiIdentifier}`));
    return Fr(r, a[this.apiIdentifier]);
  }
  async upsert(t) {
    const { on: i, ...n } = t;
    i && tt(i.length > 0, "Must specify at least one field to upsert on");
    const r = Em(this.apiIdentifier, this.namespace, i, this.getRecordFromData(n, "upsert")),
      a = await this.connection.currentClient.mutation(r.query, r.variables).toPromise(),
      s = Ta(a, this.dataPath(`upsert${this.capitalizedApiIdentifier}`));
    return Fr(a, s[this.apiIdentifier]);
  }
  async delete(t) {
    tt(t, "Can't delete a record without an ID");
    const i = _m(this.apiIdentifier, this.namespace, t),
      n = await this.connection.currentClient.mutation(i.query, i.variables).toPromise();
    Ta(n, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
  }
  async deleteMany(t) {
    const i = xm(this.apiIdentifier, this.namespace, t),
      n = await this.connection.currentClient.mutation(i.query, i.variables).toPromise();
    Ta(n, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
  }
  dataPath(t) {
    return ["internal", ...Ba([t], this.namespace)];
  }
}
function ld(e) {
  if (!e) return;
  if (Array.isArray(e)) return e;
  const t = [];
  for (const [i, n] of Object.entries(e)) n && t.push(i);
  return t;
}
var Tc = {},
  Rl = ae.createContext(Tc),
  $m = Rl.Provider;
Rl.Consumer;
Rl.displayName = "UrqlContext";
var Rc = () => {
    var e = ae.useContext(Rl);
    if (e === Tc && !1) var t;
    return e;
  },
  Mo = { fetching: !1, stale: !1, error: void 0, data: void 0, extensions: void 0, operation: void 0 },
  Gm = (e, t) => e === t || !(!e || !t || e.key !== t.key),
  zl = (e, t) => {
    var i = { ...e, ...t, data: t.data !== void 0 || t.error ? t.data : e.data, fetching: !!t.fetching, stale: !!t.stale };
    return ((n, r) => {
      for (var a in n) if (!(a in r)) return !0;
      for (var s in r) if (s === "operation" ? !Gm(n[s], r[s]) : n[s] !== r[s]) return !0;
      return !1;
    })(e, i)
      ? i
      : e;
  },
  jm = (e, t) => {
    for (var i = 0, n = t.length; i < n; i++) if (e[i] !== t[i]) return !0;
    return !1;
  };
function pl(e, t) {
  e(t);
}
function Wm(e) {
  var t = ae.useRef(!0),
    i = Rc(),
    [n, r] = ae.useState(Mo),
    a = ae.useCallback(
      (s, l) => (
        pl(r, { ...Mo, fetching: !0 }),
        Al(
          Es(1)(
            ct((o) => !o.hasNext)(
              Ts((o) => {
                t.current &&
                  pl(r, { fetching: !1, stale: o.stale, data: o.data, error: o.error, extensions: o.extensions, operation: o.operation });
              })(i.executeMutation(Ns(e, s), l || {}))
            )
          )
        )
      ),
      [i, e, r]
    );
  return (
    ae.useEffect(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    [n, a]
  );
}
function Lm(e, t) {
  var i = ae.useRef(void 0);
  return ae.useMemo(() => {
    var n = Ns(e, t);
    return i.current !== void 0 && i.current.key === n.key ? i.current : ((i.current = n), n);
  }, [e, t]);
}
var zm = (e) => {
    if (!e._react) {
      var t = new Set(),
        i = new Map();
      e.operations$ &&
        is((n) => {
          n.kind === "teardown" && t.has(n.key) && (t.delete(n.key), i.delete(n.key));
        })(e.operations$),
        (e._react = {
          get: (n) => i.get(n),
          set(n, r) {
            t.delete(n), i.set(n, r);
          },
          dispose(n) {
            t.add(n);
          },
        });
    }
    return e._react;
  },
  Hm = (e, t) => e.suspense && (!t || t.suspense !== !1);
function Qm(e) {
  var t = Rc(),
    i = zm(t),
    n = Hm(t, e.context),
    r = Lm(e.query, e.variables),
    a = ae.useMemo(() => {
      if (e.pause) return null;
      var c = t.executeQuery(r, { requestPolicy: e.requestPolicy, ...e.context });
      return n
        ? Ts((y) => {
            i.set(r.key, y);
          })(c)
        : c;
    }, [i, t, r, n, e.pause, e.requestPolicy, e.context]),
    s = ae.useCallback(
      (c, y) => {
        if (!c) return { fetching: !1 };
        var g = i.get(r.key);
        if (g) {
          if (y && g != null && "then" in g) throw g;
        } else {
          var F,
            C = is((m) => {
              (g = m), F && F(g);
            })(Zu(() => (y && !F) || !g)(c));
          if (g == null && y) {
            var O = new Promise((m) => {
              F = m;
            });
            throw (i.set(r.key, O), O);
          } else C.unsubscribe();
        }
        return g || { fetching: !0 };
      },
      [i, r]
    ),
    l = [t, r, e.requestPolicy, e.context, e.pause],
    [o, d] = ae.useState(() => [a, zl(Mo, s(a, n)), l]),
    u = o[1];
  a !== o[0] && jm(o[2], l) && d([a, (u = zl(o[1], s(a, n))), l]),
    ae.useEffect(() => {
      var c = o[0],
        y = o[2][1],
        g = !1,
        F = (O) => {
          (g = !0),
            pl(d, (m) => {
              var I = zl(m[1], O);
              return m[1] !== I ? [m[0], I, m[2]] : m;
            });
        };
      if (c) {
        var C = is(F)(
          Wo(() => {
            F({ fetching: !1 });
          })(c)
        );
        return (
          g || F({ fetching: !0 }),
          () => {
            i.dispose(y.key), C.unsubscribe();
          }
        );
      } else F({ fetching: !1 });
    }, [i, o[0], o[2][1]]);
  var f = ae.useCallback(
    (c) => {
      var y = { requestPolicy: e.requestPolicy, ...e.context, ...c };
      pl(d, (g) => [
        n
          ? Ts((F) => {
              i.set(r.key, F);
            })(t.executeQuery(r, y))
          : t.executeQuery(r, y),
        g[1],
        l,
      ]);
    },
    [t, i, r, n, s, e.requestPolicy, e.context]
  );
  return [u, f];
}
const Bl = U.createContext(void 0),
  Bc = U.createContext(void 0),
  Km = "/",
  Jm = "signOut",
  Ym = "/";
function Zm(e) {
  let t, i;
  if ("api" in e) {
    if (!af(e.api))
      throw new Error(
        "Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
      );
    (t = e.api), (i = e.api.connection.currentClient);
  } else if (e.value) i = e.value;
  else
    throw new Error(
      "No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
    );
  i.suspense = !0;
  let n = Km,
    r = Jm,
    a = Ym;
  if ("auth" in e) {
    const { auth: s } = e;
    s != null && s.signInPath && (n = s.signInPath),
      s != null && s.signOutActionApiIdentifier && (r = s.signOutActionApiIdentifier),
      s != null && s.redirectOnSuccessfulSignInPath && (a = s.redirectOnSuccessfulSignInPath);
  }
  return U.createElement(
    Bl.Provider,
    { value: i },
    U.createElement(
      Bc.Provider,
      {
        value: { api: t, navigate: e.navigate, auth: { signInPath: n, signOutActionApiIdentifier: r, redirectOnSuccessfulSignInPath: a } },
      },
      U.createElement($m, { value: i }, e.children)
    )
  );
}
const Dc = () => {
  const e = ae.useContext(Bc),
    t = ae.useContext(Bl);
  if (!e || !e.api)
    throw t
      ? new Error(`useApi hook called in context with deprecated <Provider/> convention. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react and passing it an instance of your api client, like <Provider api={api} />.

        The <Provider /> component is currently being passed a value, like <Provider value={api.connection.currentClient}/>. Please update this to <Provider api={api} />.`)
      : new Error(`useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
  return e.api;
};
Zm.__docgenInfo = {
  description: `Provider wrapper component that passes an api client instance to the other hooks.

This component is __required__ as a wrapper around any React components using the other hooks in this library, like \`useFindMany\` or \`useAction\`.

Pass an instance of your app's api client to the \`api\` prop.

@example
<Provider api={api}>
  <MyApp />
</Provider>

@example the Provider accepts the deprecated form of passing an urql client object right in -- this is deprecated and will be removed in a future version. Instead, just pass the whole api instance.
<Provider value={api.connection.currentClient}>
  <MyApp />
</Provider>

@example the Provider accepts option sign in and sign out paths.
<Provider api={api} signInPath="/auth/signin" signOutActionApiIdentifier="signOut">
  <MyApp />
</Provider>`,
  methods: [],
  displayName: "Provider",
};
var $s = (e) => e.type === "checkbox",
  Zr = (e) => e instanceof Date,
  ai = (e) => e == null;
const Cc = (e) => typeof e == "object";
var yt = (e) => !ai(e) && !Array.isArray(e) && Cc(e) && !Zr(e),
  Uc = (e) => (yt(e) && e.target ? ($s(e.target) ? e.target.checked : e.target.value) : e),
  Xm = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  qc = (e, t) => e.has(Xm(t)),
  ey = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return yt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  od = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Zt(e) {
  let t;
  const i = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(od && (e instanceof Blob || e instanceof FileList)) && (i || yt(e)))
    if (((t = i ? [] : {}), !i && !ey(e))) t = e;
    else for (const n in e) e.hasOwnProperty(n) && (t[n] = Zt(e[n]));
  else return e;
  return t;
}
var ds = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  ye = (e) => e === void 0,
  A = (e, t, i) => {
    if (!t || !yt(e)) return i;
    const n = ds(t.split(/[,[\].]+?/)).reduce((r, a) => (ai(r) ? r : r[a]), e);
    return ye(n) || n === e ? (ye(e[t]) ? i : e[t]) : n;
  },
  fa = (e) => typeof e == "boolean";
const fl = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  an = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
  Ia = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Pc = U.createContext(null),
  Gs = () => U.useContext(Pc),
  jS = (e) => {
    const { children: t, ...i } = e;
    return U.createElement(Pc.Provider, { value: i }, t);
  };
var Vc = (e, t, i, n = !0) => {
    const r = { defaultValues: t._defaultValues };
    for (const a in e)
      Object.defineProperty(r, a, {
        get: () => {
          const s = a;
          return t._proxyFormState[s] !== an.all && (t._proxyFormState[s] = !n || an.all), i && (i[s] = !0), e[s];
        },
      });
    return r;
  },
  zi = (e) => yt(e) && !Object.keys(e).length,
  Ec = (e, t, i, n) => {
    i(e);
    const { name: r, ...a } = e;
    return zi(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!n || an.all));
  },
  Qi = (e) => (Array.isArray(e) ? e : [e]),
  _c = (e, t, i) => !e || !t || e === t || Qi(e).some((n) => n && (i ? n === t : n.startsWith(t) || t.startsWith(n)));
function Dl(e) {
  const t = U.useRef(e);
  (t.current = e),
    U.useEffect(() => {
      const i = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
        i && i.unsubscribe();
      };
    }, [e.disabled]);
}
function ty(e) {
  const t = Gs(),
    { control: i = t.control, disabled: n, name: r, exact: a } = e || {},
    [s, l] = U.useState(i._formState),
    o = U.useRef(!0),
    d = U.useRef({ isDirty: !1, isLoading: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 }),
    u = U.useRef(r);
  return (
    (u.current = r),
    Dl({
      disabled: n,
      next: (f) => o.current && _c(u.current, f.name, a) && Ec(f, d.current, i._updateFormState) && l({ ...i._formState, ...f }),
      subject: i._subjects.state,
    }),
    U.useEffect(
      () => (
        (o.current = !0),
        d.current.isValid && i._updateValid(!0),
        () => {
          o.current = !1;
        }
      ),
      [i]
    ),
    Vc(s, i, d.current, !1)
  );
}
var ya = (e) => typeof e == "string",
  xc = (e, t, i, n, r) =>
    ya(e)
      ? (n && t.watch.add(e), A(i, e, r))
      : Array.isArray(e)
      ? e.map((a) => (n && t.watch.add(a), A(i, a)))
      : (n && (t.watchAll = !0), i);
function iy(e) {
  const t = Gs(),
    { control: i = t.control, name: n, defaultValue: r, disabled: a, exact: s } = e || {},
    l = U.useRef(n);
  (l.current = n),
    Dl({
      disabled: a,
      subject: i._subjects.values,
      next: (u) => {
        _c(l.current, u.name, s) && d(Zt(xc(l.current, i._names, u.values || i._formValues, !1, r)));
      },
    });
  const [o, d] = U.useState(i._getWatch(n, r));
  return U.useEffect(() => i._removeUnmounted()), o;
}
var dd = (e) => /^\w*$/.test(e),
  $c = (e) => ds(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function pe(e, t, i) {
  let n = -1;
  const r = dd(t) ? [t] : $c(t),
    a = r.length,
    s = a - 1;
  for (; ++n < a; ) {
    const l = r[n];
    let o = i;
    if (n !== s) {
      const d = e[l];
      o = yt(d) || Array.isArray(d) ? d : isNaN(+r[n + 1]) ? {} : [];
    }
    (e[l] = o), (e = e[l]);
  }
  return e;
}
function Gc(e) {
  const t = Gs(),
    { name: i, disabled: n, control: r = t.control, shouldUnregister: a } = e,
    s = qc(r._names.array, i),
    l = iy({ control: r, name: i, defaultValue: A(r._formValues, i, A(r._defaultValues, i, e.defaultValue)), exact: !0 }),
    o = ty({ control: r, name: i }),
    d = U.useRef(r.register(i, { ...e.rules, value: l }));
  return (
    (d.current = r.register(i, e.rules)),
    U.useEffect(() => {
      const u = r._options.shouldUnregister || a,
        f = (c, y) => {
          const g = A(r._fields, c);
          g && (g._f.mount = y);
        };
      if ((f(i, !0), u)) {
        const c = Zt(A(r._options.defaultValues, i));
        pe(r._defaultValues, i, c), ye(A(r._formValues, i)) && pe(r._formValues, i, c);
      }
      return () => {
        (s ? u && !r._state.action : u) ? r.unregister(i) : f(i, !1);
      };
    }, [i, r, s, a]),
    U.useEffect(() => {
      A(r._fields, i) && r._updateDisabledField({ disabled: n, fields: r._fields, name: i, value: A(r._fields, i)._f.value });
    }, [n, i, r]),
    {
      field: {
        name: i,
        value: l,
        ...(fa(n) || fa(o.disabled) ? { disabled: o.disabled || n } : {}),
        onChange: U.useCallback((u) => d.current.onChange({ target: { value: Uc(u), name: i }, type: fl.CHANGE }), [i]),
        onBlur: U.useCallback(() => d.current.onBlur({ target: { value: A(r._formValues, i), name: i }, type: fl.BLUR }), [i, r]),
        ref: (u) => {
          const f = A(r._fields, i);
          f &&
            u &&
            (f._f.ref = {
              focus: () => u.focus(),
              select: () => u.select(),
              setCustomValidity: (c) => u.setCustomValidity(c),
              reportValidity: () => u.reportValidity(),
            });
        },
      },
      formState: o,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!A(o.errors, i) },
          isDirty: { enumerable: !0, get: () => !!A(o.dirtyFields, i) },
          isTouched: { enumerable: !0, get: () => !!A(o.touchedFields, i) },
          error: { enumerable: !0, get: () => A(o.errors, i) },
        }
      ),
    }
  );
}
const WS = (e) => e.render(Gc(e));
var ny = (e, t, i, n, r) => (t ? { ...i[e], types: { ...(i[e] && i[e].types ? i[e].types : {}), [n]: r || !0 } } : {}),
  Ua = () => {
    const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
      const i = (Math.random() * 16 + e) % 16 | 0;
      return (t == "x" ? i : (i & 3) | 8).toString(16);
    });
  },
  Hl = (e, t, i = {}) => (i.shouldFocus || ye(i.shouldFocus) ? i.focusName || `${e}.${ye(i.focusIndex) ? t : i.focusIndex}.` : ""),
  Oo = (e) => ({
    isOnSubmit: !e || e === an.onSubmit,
    isOnBlur: e === an.onBlur,
    isOnChange: e === an.onChange,
    isOnAll: e === an.all,
    isOnTouch: e === an.onTouched,
  }),
  To = (e, t, i) => !i && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const ws = (e, t, i, n) => {
  for (const r of i || Object.keys(e)) {
    const a = A(e, r);
    if (a) {
      const { _f: s, ...l } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], r) && !n) break;
        if (s.ref && t(s.ref, s.name) && !n) break;
      } else yt(l) && ws(l, t);
    }
  }
};
var jc = (e, t, i) => {
    const n = ds(A(e, i));
    return pe(n, "root", t[i]), pe(e, i, n), e;
  },
  ud = (e) => e.type === "file",
  ur = (e) => typeof e == "function",
  ml = (e) => {
    if (!od) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  tl = (e) => ya(e),
  cd = (e) => e.type === "radio",
  yl = (e) => e instanceof RegExp;
const tu = { value: !1, isValid: !1 },
  iu = { value: !0, isValid: !0 };
var Wc = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !ye(e[0].attributes.value)
        ? ye(e[0].value) || e[0].value === ""
          ? iu
          : { value: e[0].value, isValid: !0 }
        : iu
      : tu;
  }
  return tu;
};
const nu = { isValid: !1, value: null };
var Lc = (e) => (Array.isArray(e) ? e.reduce((t, i) => (i && i.checked && !i.disabled ? { isValid: !0, value: i.value } : t), nu) : nu);
function au(e, t, i = "validate") {
  if (tl(e) || (Array.isArray(e) && e.every(tl)) || (fa(e) && !e)) return { type: i, message: tl(e) ? e : "", ref: t };
}
var Pr = (e) => (yt(e) && !yl(e) ? e : { value: e, message: "" }),
  Ro = async (e, t, i, n, r) => {
    const {
        ref: a,
        refs: s,
        required: l,
        maxLength: o,
        minLength: d,
        min: u,
        max: f,
        pattern: c,
        validate: y,
        name: g,
        valueAsNumber: F,
        mount: C,
        disabled: O,
      } = e._f,
      m = A(t, g);
    if (!C || O) return {};
    const I = s ? s[0] : a,
      S = (_) => {
        n && I.reportValidity && (I.setCustomValidity(fa(_) ? "" : _ || ""), I.reportValidity());
      },
      k = {},
      w = cd(a),
      q = $s(a),
      ce = w || q,
      oe = ((F || ud(a)) && ye(a.value) && ye(m)) || (ml(a) && a.value === "") || m === "" || (Array.isArray(m) && !m.length),
      Ae = ny.bind(null, g, i, k),
      K = (_, x, R, Z = Ia.maxLength, z = Ia.minLength) => {
        const G = _ ? x : R;
        k[g] = { type: _ ? Z : z, message: G, ref: a, ...Ae(_ ? Z : z, G) };
      };
    if (
      r ? !Array.isArray(m) || !m.length : l && ((!ce && (oe || ai(m))) || (fa(m) && !m) || (q && !Wc(s).isValid) || (w && !Lc(s).isValid))
    ) {
      const { value: _, message: x } = tl(l) ? { value: !!l, message: l } : Pr(l);
      if (_ && ((k[g] = { type: Ia.required, message: x, ref: I, ...Ae(Ia.required, x) }), !i)) return S(x), k;
    }
    if (!oe && (!ai(u) || !ai(f))) {
      let _, x;
      const R = Pr(f),
        Z = Pr(u);
      if (!ai(m) && !isNaN(m)) {
        const z = a.valueAsNumber || (m && +m);
        ai(R.value) || (_ = z > R.value), ai(Z.value) || (x = z < Z.value);
      } else {
        const z = a.valueAsDate || new Date(m),
          G = (ne) => new Date(new Date().toDateString() + " " + ne),
          le = a.type == "time",
          $i = a.type == "week";
        ya(R.value) && m && (_ = le ? G(m) > G(R.value) : $i ? m > R.value : z > new Date(R.value)),
          ya(Z.value) && m && (x = le ? G(m) < G(Z.value) : $i ? m < Z.value : z < new Date(Z.value));
      }
      if ((_ || x) && (K(!!_, R.message, Z.message, Ia.max, Ia.min), !i)) return S(k[g].message), k;
    }
    if ((o || d) && !oe && (ya(m) || (r && Array.isArray(m)))) {
      const _ = Pr(o),
        x = Pr(d),
        R = !ai(_.value) && m.length > +_.value,
        Z = !ai(x.value) && m.length < +x.value;
      if ((R || Z) && (K(R, _.message, x.message), !i)) return S(k[g].message), k;
    }
    if (c && !oe && ya(m)) {
      const { value: _, message: x } = Pr(c);
      if (yl(_) && !m.match(_) && ((k[g] = { type: Ia.pattern, message: x, ref: a, ...Ae(Ia.pattern, x) }), !i)) return S(x), k;
    }
    if (y) {
      if (ur(y)) {
        const _ = await y(m, t),
          x = au(_, I);
        if (x && ((k[g] = { ...x, ...Ae(Ia.validate, x.message) }), !i)) return S(x.message), k;
      } else if (yt(y)) {
        let _ = {};
        for (const x in y) {
          if (!zi(_) && !i) break;
          const R = au(await y[x](m, t), I, x);
          R && ((_ = { ...R, ...Ae(x, R.message) }), S(R.message), i && (k[g] = _));
        }
        if (!zi(_) && ((k[g] = { ref: I, ..._ }), !i)) return k;
      }
    }
    return S(!0), k;
  };
function Ql(e, t) {
  return [...e, ...Qi(t)];
}
var Kl = (e) => (Array.isArray(e) ? e.map(() => {}) : void 0);
function Jl(e, t, i) {
  return [...e.slice(0, t), ...Qi(i), ...e.slice(t)];
}
var Yl = (e, t, i) => (Array.isArray(e) ? (ye(e[i]) && (e[i] = void 0), e.splice(i, 0, e.splice(t, 1)[0]), e) : []);
function Zl(e, t) {
  return [...Qi(t), ...Qi(e)];
}
function ay(e, t) {
  let i = 0;
  const n = [...e];
  for (const r of t) n.splice(r - i, 1), i++;
  return ds(n).length ? n : [];
}
var Xl = (e, t) =>
    ye(t)
      ? []
      : ay(
          e,
          Qi(t).sort((i, n) => i - n)
        ),
  eo = (e, t, i) => {
    e[t] = [e[i], (e[i] = e[t])][0];
  };
function ry(e, t) {
  const i = t.slice(0, -1).length;
  let n = 0;
  for (; n < i; ) e = ye(e) ? n++ : e[t[n++]];
  return e;
}
function sy(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !ye(e[t])) return !1;
  return !0;
}
function Ct(e, t) {
  const i = Array.isArray(t) ? t : dd(t) ? [t] : $c(t),
    n = i.length === 1 ? e : ry(e, i),
    r = i.length - 1,
    a = i[r];
  return n && delete n[a], r !== 0 && ((yt(n) && zi(n)) || (Array.isArray(n) && sy(n))) && Ct(e, i.slice(0, -1)), e;
}
var ru = (e, t, i) => ((e[t] = i), e);
function LS(e) {
  const t = Gs(),
    { control: i = t.control, name: n, keyName: r = "id", shouldUnregister: a } = e,
    [s, l] = U.useState(i._getFieldArray(n)),
    o = U.useRef(i._getFieldArray(n).map(Ua)),
    d = U.useRef(s),
    u = U.useRef(n),
    f = U.useRef(!1);
  (u.current = n),
    (d.current = s),
    i._names.array.add(n),
    e.rules && i.register(n, e.rules),
    Dl({
      next: ({ values: k, name: w }) => {
        if (w === u.current || !w) {
          const q = A(k, u.current);
          Array.isArray(q) && (l(q), (o.current = q.map(Ua)));
        }
      },
      subject: i._subjects.array,
    });
  const c = U.useCallback(
      (k) => {
        (f.current = !0), i._updateFieldArray(n, k);
      },
      [i, n]
    ),
    y = (k, w) => {
      const q = Qi(Zt(k)),
        ce = Ql(i._getFieldArray(n), q);
      (i._names.focus = Hl(n, ce.length - 1, w)),
        (o.current = Ql(o.current, q.map(Ua))),
        c(ce),
        l(ce),
        i._updateFieldArray(n, ce, Ql, { argA: Kl(k) });
    },
    g = (k, w) => {
      const q = Qi(Zt(k)),
        ce = Zl(i._getFieldArray(n), q);
      (i._names.focus = Hl(n, 0, w)), (o.current = Zl(o.current, q.map(Ua))), c(ce), l(ce), i._updateFieldArray(n, ce, Zl, { argA: Kl(k) });
    },
    F = (k) => {
      const w = Xl(i._getFieldArray(n), k);
      (o.current = Xl(o.current, k)), c(w), l(w), i._updateFieldArray(n, w, Xl, { argA: k });
    },
    C = (k, w, q) => {
      const ce = Qi(Zt(w)),
        oe = Jl(i._getFieldArray(n), k, ce);
      (i._names.focus = Hl(n, k, q)),
        (o.current = Jl(o.current, k, ce.map(Ua))),
        c(oe),
        l(oe),
        i._updateFieldArray(n, oe, Jl, { argA: k, argB: Kl(w) });
    },
    O = (k, w) => {
      const q = i._getFieldArray(n);
      eo(q, k, w), eo(o.current, k, w), c(q), l(q), i._updateFieldArray(n, q, eo, { argA: k, argB: w }, !1);
    },
    m = (k, w) => {
      const q = i._getFieldArray(n);
      Yl(q, k, w), Yl(o.current, k, w), c(q), l(q), i._updateFieldArray(n, q, Yl, { argA: k, argB: w }, !1);
    },
    I = (k, w) => {
      const q = Zt(w),
        ce = ru(i._getFieldArray(n), k, q);
      (o.current = [...ce].map((oe, Ae) => (!oe || Ae === k ? Ua() : o.current[Ae]))),
        c(ce),
        l([...ce]),
        i._updateFieldArray(n, ce, ru, { argA: k, argB: q }, !0, !1);
    },
    S = (k) => {
      const w = Qi(Zt(k));
      (o.current = w.map(Ua)), c([...w]), l([...w]), i._updateFieldArray(n, [...w], (q) => q, {}, !0, !1);
    };
  return (
    U.useEffect(() => {
      if (
        ((i._state.action = !1),
        To(n, i._names) && i._subjects.state.next({ ...i._formState }),
        f.current && (!Oo(i._options.mode).isOnSubmit || i._formState.isSubmitted))
      )
        if (i._options.resolver)
          i._executeSchema([n]).then((k) => {
            const w = A(k.errors, n),
              q = A(i._formState.errors, n);
            (q ? (!w && q.type) || (w && (q.type !== w.type || q.message !== w.message)) : w && w.type) &&
              (w ? pe(i._formState.errors, n, w) : Ct(i._formState.errors, n), i._subjects.state.next({ errors: i._formState.errors }));
          });
        else {
          const k = A(i._fields, n);
          k &&
            k._f &&
            Ro(k, i._formValues, i._options.criteriaMode === an.all, i._options.shouldUseNativeValidation, !0).then(
              (w) => !zi(w) && i._subjects.state.next({ errors: jc(i._formState.errors, w, n) })
            );
        }
      i._subjects.values.next({ name: n, values: { ...i._formValues } }),
        i._names.focus &&
          ws(i._fields, (k, w) => {
            if (i._names.focus && w.startsWith(i._names.focus) && k.focus) return k.focus(), 1;
          }),
        (i._names.focus = ""),
        i._updateValid(),
        (f.current = !1);
    }, [s, n, i]),
    U.useEffect(
      () => (
        !A(i._formValues, n) && i._updateFieldArray(n),
        () => {
          (i._options.shouldUnregister || a) && i.unregister(n);
        }
      ),
      [n, i, r, a]
    ),
    {
      swap: U.useCallback(O, [c, n, i]),
      move: U.useCallback(m, [c, n, i]),
      prepend: U.useCallback(g, [c, n, i]),
      append: U.useCallback(y, [c, n, i]),
      remove: U.useCallback(F, [c, n, i]),
      insert: U.useCallback(C, [c, n, i]),
      update: U.useCallback(I, [c, n, i]),
      replace: U.useCallback(S, [c, n, i]),
      fields: U.useMemo(() => s.map((k, w) => ({ ...k, [r]: o.current[w] || Ua() })), [s, r]),
    }
  );
}
function to() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (r) => {
      for (const a of e) a.next && a.next(r);
    },
    subscribe: (r) => (
      e.push(r),
      {
        unsubscribe: () => {
          e = e.filter((a) => a !== r);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var hl = (e) => ai(e) || !Cc(e);
function wr(e, t) {
  if (hl(e) || hl(t)) return e === t;
  if (Zr(e) && Zr(t)) return e.getTime() === t.getTime();
  const i = Object.keys(e),
    n = Object.keys(t);
  if (i.length !== n.length) return !1;
  for (const r of i) {
    const a = e[r];
    if (!n.includes(r)) return !1;
    if (r !== "ref") {
      const s = t[r];
      if ((Zr(a) && Zr(s)) || (yt(a) && yt(s)) || (Array.isArray(a) && Array.isArray(s)) ? !wr(a, s) : a !== s) return !1;
    }
  }
  return !0;
}
var zc = (e) => e.type === "select-multiple",
  ly = (e) => cd(e) || $s(e),
  io = (e) => ml(e) && e.isConnected,
  Hc = (e) => {
    for (const t in e) if (ur(e[t])) return !0;
    return !1;
  };
function gl(e, t = {}) {
  const i = Array.isArray(e);
  if (yt(e) || i)
    for (const n in e)
      Array.isArray(e[n]) || (yt(e[n]) && !Hc(e[n])) ? ((t[n] = Array.isArray(e[n]) ? [] : {}), gl(e[n], t[n])) : ai(e[n]) || (t[n] = !0);
  return t;
}
function Qc(e, t, i) {
  const n = Array.isArray(e);
  if (yt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (yt(e[r]) && !Hc(e[r]))
        ? ye(t) || hl(i[r])
          ? (i[r] = Array.isArray(e[r]) ? gl(e[r], []) : { ...gl(e[r]) })
          : Qc(e[r], ai(t) ? {} : t[r], i[r])
        : (i[r] = !wr(e[r], t[r]));
  return i;
}
var no = (e, t) => Qc(e, t, gl(t)),
  Kc = (e, { valueAsNumber: t, valueAsDate: i, setValueAs: n }) =>
    ye(e) ? e : t ? (e === "" ? NaN : e && +e) : i && ya(e) ? new Date(e) : n ? n(e) : e;
function ao(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((i) => i.disabled) : t.disabled))
    return ud(t)
      ? t.files
      : cd(t)
      ? Lc(e.refs).value
      : zc(t)
      ? [...t.selectedOptions].map(({ value: i }) => i)
      : $s(t)
      ? Wc(e.refs).value
      : Kc(ye(t.value) ? e.ref.value : t.value, e);
}
var oy = (e, t, i, n) => {
    const r = {};
    for (const a of e) {
      const s = A(t, a);
      s && pe(r, a, s._f);
    }
    return { criteriaMode: i, names: [...e], fields: r, shouldUseNativeValidation: n };
  },
  ps = (e) => (ye(e) ? e : yl(e) ? e.source : yt(e) ? (yl(e.value) ? e.value.source : e.value) : e),
  dy = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function su(e, t, i) {
  const n = A(e, i);
  if (n || dd(i)) return { error: n, name: i };
  const r = i.split(".");
  for (; r.length; ) {
    const a = r.join("."),
      s = A(t, a),
      l = A(e, a);
    if (s && !Array.isArray(s) && i !== a) return { name: i };
    if (l && l.type) return { name: a, error: l };
    r.pop();
  }
  return { name: i };
}
var uy = (e, t, i, n, r) =>
    r.isOnAll ? !1 : !i && r.isOnTouch ? !(t || e) : (i ? n.isOnBlur : r.isOnBlur) ? !e : (i ? n.isOnChange : r.isOnChange) ? e : !0,
  cy = (e, t) => !ds(A(e, t)).length && Ct(e, t);
const py = { mode: an.onSubmit, reValidateMode: an.onChange, shouldFocusError: !0 };
function fy(e = {}, t) {
  let i = { ...py, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: ur(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
      disabled: !1,
    },
    r = {},
    a = yt(i.defaultValues) || yt(i.values) ? Zt(i.defaultValues || i.values) || {} : {},
    s = i.shouldUnregister ? {} : Zt(a),
    l = { action: !1, mount: !1, watch: !1 },
    o = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    d,
    u = 0;
  const f = { isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
    c = { values: to(), array: to(), state: to() },
    y = e.resetOptions && e.resetOptions.keepDirtyValues,
    g = Oo(i.mode),
    F = Oo(i.reValidateMode),
    C = i.criteriaMode === an.all,
    O = (p) => (h) => {
      clearTimeout(u), (u = setTimeout(p, h));
    },
    m = async (p) => {
      if (f.isValid || p) {
        const h = i.resolver ? zi((await oe()).errors) : await K(r, !0);
        h !== n.isValid && c.state.next({ isValid: h });
      }
    },
    I = (p) => f.isValidating && c.state.next({ isValidating: p }),
    S = (p, h = [], b, B, M = !0, v = !0) => {
      if (B && b) {
        if (((l.action = !0), v && Array.isArray(A(r, p)))) {
          const P = b(A(r, p), B.argA, B.argB);
          M && pe(r, p, P);
        }
        if (v && Array.isArray(A(n.errors, p))) {
          const P = b(A(n.errors, p), B.argA, B.argB);
          M && pe(n.errors, p, P), cy(n.errors, p);
        }
        if (f.touchedFields && v && Array.isArray(A(n.touchedFields, p))) {
          const P = b(A(n.touchedFields, p), B.argA, B.argB);
          M && pe(n.touchedFields, p, P);
        }
        f.dirtyFields && (n.dirtyFields = no(a, s)),
          c.state.next({ name: p, isDirty: x(p, h), dirtyFields: n.dirtyFields, errors: n.errors, isValid: n.isValid });
      } else pe(s, p, h);
    },
    k = (p, h) => {
      pe(n.errors, p, h), c.state.next({ errors: n.errors });
    },
    w = (p, h, b, B) => {
      const M = A(r, p);
      if (M) {
        const v = A(s, p, ye(b) ? A(a, p) : b);
        ye(v) || (B && B.defaultChecked) || h ? pe(s, p, h ? v : ao(M._f)) : z(p, v), l.mount && m();
      }
    },
    q = (p, h, b, B, M) => {
      let v = !1,
        P = !1;
      const fe = { name: p };
      if (!b || B) {
        f.isDirty && ((P = n.isDirty), (n.isDirty = fe.isDirty = x()), (v = P !== fe.isDirty));
        const nt = wr(A(a, p), h);
        (P = A(n.dirtyFields, p)),
          nt ? Ct(n.dirtyFields, p) : pe(n.dirtyFields, p, !0),
          (fe.dirtyFields = n.dirtyFields),
          (v = v || (f.dirtyFields && P !== !nt));
      }
      if (b) {
        const nt = A(n.touchedFields, p);
        nt || (pe(n.touchedFields, p, b), (fe.touchedFields = n.touchedFields), (v = v || (f.touchedFields && nt !== b)));
      }
      return v && M && c.state.next(fe), v ? fe : {};
    },
    ce = (p, h, b, B) => {
      const M = A(n.errors, p),
        v = f.isValid && fa(h) && n.isValid !== h;
      if (
        (e.delayError && b
          ? ((d = O(() => k(p, b))), d(e.delayError))
          : (clearTimeout(u), (d = null), b ? pe(n.errors, p, b) : Ct(n.errors, p)),
        (b ? !wr(M, b) : M) || !zi(B) || v)
      ) {
        const P = { ...B, ...(v && fa(h) ? { isValid: h } : {}), errors: n.errors, name: p };
        (n = { ...n, ...P }), c.state.next(P);
      }
      I(!1);
    },
    oe = async (p) => i.resolver(s, i.context, oy(p || o.mount, r, i.criteriaMode, i.shouldUseNativeValidation)),
    Ae = async (p) => {
      const { errors: h } = await oe(p);
      if (p)
        for (const b of p) {
          const B = A(h, b);
          B ? pe(n.errors, b, B) : Ct(n.errors, b);
        }
      else n.errors = h;
      return h;
    },
    K = async (p, h, b = { valid: !0 }) => {
      for (const B in p) {
        const M = p[B];
        if (M) {
          const { _f: v, ...P } = M;
          if (v) {
            const fe = o.array.has(v.name),
              nt = await Ro(M, s, C, i.shouldUseNativeValidation && !h, fe);
            if (nt[v.name] && ((b.valid = !1), h)) break;
            !h && (A(nt, v.name) ? (fe ? jc(n.errors, nt, v.name) : pe(n.errors, v.name, nt[v.name])) : Ct(n.errors, v.name));
          }
          P && (await K(P, h, b));
        }
      }
      return b.valid;
    },
    _ = () => {
      for (const p of o.unMount) {
        const h = A(r, p);
        h && (h._f.refs ? h._f.refs.every((b) => !io(b)) : !io(h._f.ref)) && Ls(p);
      }
      o.unMount = new Set();
    },
    x = (p, h) => (p && h && pe(s, p, h), !wr(Da(), a)),
    R = (p, h, b) => xc(p, o, { ...(l.mount ? s : ye(h) ? a : ya(p) ? { [p]: h } : h) }, b, h),
    Z = (p) => ds(A(l.mount ? s : a, p, e.shouldUnregister ? A(a, p, []) : [])),
    z = (p, h, b = {}) => {
      const B = A(r, p);
      let M = h;
      if (B) {
        const v = B._f;
        v &&
          (!v.disabled && pe(s, p, Kc(h, v)),
          (M = ml(v.ref) && ai(h) ? "" : h),
          zc(v.ref)
            ? [...v.ref.options].forEach((P) => (P.selected = M.includes(P.value)))
            : v.refs
            ? $s(v.ref)
              ? v.refs.length > 1
                ? v.refs.forEach(
                    (P) =>
                      (!P.defaultChecked || !P.disabled) &&
                      (P.checked = Array.isArray(M) ? !!M.find((fe) => fe === P.value) : M === P.value)
                  )
                : v.refs[0] && (v.refs[0].checked = !!M)
              : v.refs.forEach((P) => (P.checked = P.value === M))
            : ud(v.ref)
            ? (v.ref.value = "")
            : ((v.ref.value = M), v.ref.type || c.values.next({ name: p, values: { ...s } })));
      }
      (b.shouldDirty || b.shouldTouch) && q(p, M, b.shouldTouch, b.shouldDirty, !0), b.shouldValidate && Bn(p);
    },
    G = (p, h, b) => {
      for (const B in h) {
        const M = h[B],
          v = `${p}.${B}`,
          P = A(r, v);
        (o.array.has(p) || !hl(M) || (P && !P._f)) && !Zr(M) ? G(v, M, b) : z(v, M, b);
      }
    },
    le = (p, h, b = {}) => {
      const B = A(r, p),
        M = o.array.has(p),
        v = Zt(h);
      pe(s, p, v),
        M
          ? (c.array.next({ name: p, values: { ...s } }),
            (f.isDirty || f.dirtyFields) && b.shouldDirty && c.state.next({ name: p, dirtyFields: no(a, s), isDirty: x(p, v) }))
          : B && !B._f && !ai(v)
          ? G(p, v, b)
          : z(p, v, b),
        To(p, o) && c.state.next({ ...n }),
        c.values.next({ name: p, values: { ...s } }),
        !l.mount && t();
    },
    $i = async (p) => {
      const h = p.target;
      let b = h.name,
        B = !0;
      const M = A(r, b),
        v = () => (h.type ? ao(M._f) : Uc(p)),
        P = (fe) => {
          B = Number.isNaN(fe) || fe === A(s, b, fe);
        };
      if (M) {
        let fe, nt;
        const Hs = v(),
          Ur = p.type === fl.BLUR || p.type === fl.FOCUS_OUT,
          zp = (!dy(M._f) && !i.resolver && !A(n.errors, b) && !M._f.deps) || uy(Ur, A(n.touchedFields, b), n.isSubmitted, F, g),
          _l = To(b, o, Ur);
        pe(s, b, Hs), Ur ? (M._f.onBlur && M._f.onBlur(p), d && d(0)) : M._f.onChange && M._f.onChange(p);
        const xl = q(b, Hs, Ur, !1),
          Hp = !zi(xl) || _l;
        if ((!Ur && c.values.next({ name: b, type: p.type, values: { ...s } }), zp))
          return f.isValid && m(), Hp && c.state.next({ name: b, ...(_l ? {} : xl) });
        if ((!Ur && _l && c.state.next({ ...n }), I(!0), i.resolver)) {
          const { errors: Md } = await oe([b]);
          if ((P(Hs), B)) {
            const Qp = su(n.errors, r, b),
              Od = su(Md, r, Qp.name || b);
            (fe = Od.error), (b = Od.name), (nt = zi(Md));
          }
        } else
          (fe = (await Ro(M, s, C, i.shouldUseNativeValidation))[b]), P(Hs), B && (fe ? (nt = !1) : f.isValid && (nt = await K(r, !0)));
        B && (M._f.deps && Bn(M._f.deps), ce(b, nt, fe, xl));
      }
    },
    ne = (p, h) => {
      if (A(n.errors, h) && p.focus) return p.focus(), 1;
    },
    Bn = async (p, h = {}) => {
      let b, B;
      const M = Qi(p);
      if ((I(!0), i.resolver)) {
        const v = await Ae(ye(p) ? p : M);
        (b = zi(v)), (B = p ? !M.some((P) => A(v, P)) : b);
      } else
        p
          ? ((B = (
              await Promise.all(
                M.map(async (v) => {
                  const P = A(r, v);
                  return await K(P && P._f ? { [v]: P } : P);
                })
              )
            ).every(Boolean)),
            !(!B && !n.isValid) && m())
          : (B = b = await K(r));
      return (
        c.state.next({
          ...(!ya(p) || (f.isValid && b !== n.isValid) ? {} : { name: p }),
          ...(i.resolver || !p ? { isValid: b } : {}),
          errors: n.errors,
          isValidating: !1,
        }),
        h.shouldFocus && !B && ws(r, ne, p ? M : o.mount),
        B
      );
    },
    Da = (p) => {
      const h = { ...a, ...(l.mount ? s : {}) };
      return ye(p) ? h : ya(p) ? A(h, p) : p.map((b) => A(h, b));
    },
    pr = (p, h) => ({
      invalid: !!A((h || n).errors, p),
      isDirty: !!A((h || n).dirtyFields, p),
      isTouched: !!A((h || n).touchedFields, p),
      error: A((h || n).errors, p),
    }),
    Ca = (p) => {
      p && Qi(p).forEach((h) => Ct(n.errors, h)), c.state.next({ errors: p ? n.errors : {} });
    },
    it = (p, h, b) => {
      const B = (A(r, p, { _f: {} })._f || {}).ref;
      pe(n.errors, p, { ...h, ref: B }),
        c.state.next({ name: p, errors: n.errors, isValid: !1 }),
        b && b.shouldFocus && B && B.focus && B.focus();
    },
    ft = (p, h) => (ur(p) ? c.values.subscribe({ next: (b) => p(R(void 0, h), b) }) : R(p, h, !0)),
    Ls = (p, h = {}) => {
      for (const b of p ? Qi(p) : o.mount)
        o.mount.delete(b),
          o.array.delete(b),
          h.keepValue || (Ct(r, b), Ct(s, b)),
          !h.keepError && Ct(n.errors, b),
          !h.keepDirty && Ct(n.dirtyFields, b),
          !h.keepTouched && Ct(n.touchedFields, b),
          !i.shouldUnregister && !h.keepDefaultValue && Ct(a, b);
      c.values.next({ values: { ...s } }), c.state.next({ ...n, ...(h.keepDirty ? { isDirty: x() } : {}) }), !h.keepIsValid && m();
    },
    zs = ({ disabled: p, name: h, field: b, fields: B, value: M }) => {
      if (fa(p)) {
        const v = p ? void 0 : ye(M) ? ao(b ? b._f : A(B, h)._f) : M;
        pe(s, h, v), q(h, v, !1, !1, !0);
      }
    },
    El = (p, h = {}) => {
      let b = A(r, p);
      const B = fa(h.disabled);
      return (
        pe(r, p, { ...(b || {}), _f: { ...(b && b._f ? b._f : { ref: { name: p } }), name: p, mount: !0, ...h } }),
        o.mount.add(p),
        b ? zs({ field: b, disabled: h.disabled, name: p }) : w(p, !0, h.value),
        {
          ...(B ? { disabled: h.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!h.required,
                min: ps(h.min),
                max: ps(h.max),
                minLength: ps(h.minLength),
                maxLength: ps(h.maxLength),
                pattern: ps(h.pattern),
              }
            : {}),
          name: p,
          onChange: $i,
          onBlur: $i,
          ref: (M) => {
            if (M) {
              El(p, h), (b = A(r, p));
              const v = (ye(M.value) && M.querySelectorAll && M.querySelectorAll("input,select,textarea")[0]) || M,
                P = ly(v),
                fe = b._f.refs || [];
              if (P ? fe.find((nt) => nt === v) : v === b._f.ref) return;
              pe(r, p, {
                _f: {
                  ...b._f,
                  ...(P
                    ? { refs: [...fe.filter(io), v, ...(Array.isArray(A(a, p)) ? [{}] : [])], ref: { type: v.type, name: p } }
                    : { ref: v }),
                },
              }),
                w(p, !1, void 0, v);
            } else
              (b = A(r, p, {})),
                b._f && (b._f.mount = !1),
                (i.shouldUnregister || h.shouldUnregister) && !(qc(o.array, p) && l.action) && o.unMount.add(p);
          },
        }
      );
    },
    Nd = () => i.shouldFocusError && ws(r, ne, o.mount),
    Wp = (p) => {
      fa(p) &&
        (c.state.next({ disabled: p }),
        ws(
          r,
          (h) => {
            h.disabled = p;
          },
          0,
          !1
        ));
    },
    Ad = (p, h) => async (b) => {
      b && (b.preventDefault && b.preventDefault(), b.persist && b.persist());
      let B = Zt(s);
      if ((c.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: M, values: v } = await oe();
        (n.errors = M), (B = v);
      } else await K(r);
      Ct(n.errors, "root"),
        zi(n.errors) ? (c.state.next({ errors: {} }), await p(B, b)) : (h && (await h({ ...n.errors }, b)), Nd(), setTimeout(Nd)),
        c.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: zi(n.errors),
          submitCount: n.submitCount + 1,
          errors: n.errors,
        });
    },
    Lp = (p, h = {}) => {
      A(r, p) &&
        (ye(h.defaultValue) ? le(p, A(a, p)) : (le(p, h.defaultValue), pe(a, p, h.defaultValue)),
        h.keepTouched || Ct(n.touchedFields, p),
        h.keepDirty || (Ct(n.dirtyFields, p), (n.isDirty = h.defaultValue ? x(p, A(a, p)) : x())),
        h.keepError || (Ct(n.errors, p), f.isValid && m()),
        c.state.next({ ...n }));
    },
    Fd = (p, h = {}) => {
      const b = p ? Zt(p) : a,
        B = Zt(b),
        M = p && !zi(p) ? B : a;
      if ((h.keepDefaultValues || (a = b), !h.keepValues)) {
        if (h.keepDirtyValues || y) for (const v of o.mount) A(n.dirtyFields, v) ? pe(M, v, A(s, v)) : le(v, A(M, v));
        else {
          if (od && ye(p))
            for (const v of o.mount) {
              const P = A(r, v);
              if (P && P._f) {
                const fe = Array.isArray(P._f.refs) ? P._f.refs[0] : P._f.ref;
                if (ml(fe)) {
                  const nt = fe.closest("form");
                  if (nt) {
                    nt.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = e.shouldUnregister ? (h.keepDefaultValues ? Zt(a) : {}) : Zt(M)),
          c.array.next({ values: { ...M } }),
          c.values.next({ values: { ...M } });
      }
      (o = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }),
        !l.mount && t(),
        (l.mount = !f.isValid || !!h.keepIsValid),
        (l.watch = !!e.shouldUnregister),
        c.state.next({
          submitCount: h.keepSubmitCount ? n.submitCount : 0,
          isDirty: h.keepDirty ? n.isDirty : !!(h.keepDefaultValues && !wr(p, a)),
          isSubmitted: h.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: h.keepDirtyValues ? n.dirtyFields : h.keepDefaultValues && p ? no(a, p) : {},
          touchedFields: h.keepTouched ? n.touchedFields : {},
          errors: h.keepErrors ? n.errors : {},
          isSubmitSuccessful: h.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    wd = (p, h) => Fd(ur(p) ? p(s) : p, h);
  return {
    control: {
      register: El,
      unregister: Ls,
      getFieldState: pr,
      handleSubmit: Ad,
      setError: it,
      _executeSchema: oe,
      _getWatch: R,
      _getDirty: x,
      _updateValid: m,
      _removeUnmounted: _,
      _updateFieldArray: S,
      _updateDisabledField: zs,
      _getFieldArray: Z,
      _reset: Fd,
      _resetDefaultValues: () =>
        ur(i.defaultValues) &&
        i.defaultValues().then((p) => {
          wd(p, i.resetOptions), c.state.next({ isLoading: !1 });
        }),
      _updateFormState: (p) => {
        n = { ...n, ...p };
      },
      _disableForm: Wp,
      _subjects: c,
      _proxyFormState: f,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return l;
      },
      set _state(p) {
        l = p;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return o;
      },
      set _names(p) {
        o = p;
      },
      get _formState() {
        return n;
      },
      set _formState(p) {
        n = p;
      },
      get _options() {
        return i;
      },
      set _options(p) {
        i = { ...i, ...p };
      },
    },
    trigger: Bn,
    register: El,
    handleSubmit: Ad,
    watch: ft,
    setValue: le,
    getValues: Da,
    reset: wd,
    resetField: Lp,
    clearErrors: Ca,
    unregister: Ls,
    setError: it,
    setFocus: (p, h = {}) => {
      const b = A(r, p),
        B = b && b._f;
      if (B) {
        const M = B.refs ? B.refs[0] : B.ref;
        M.focus && (M.focus(), h.shouldSelect && M.select());
      }
    },
    getFieldState: pr,
  };
}
function zS(e = {}) {
  const t = U.useRef(),
    i = U.useRef(),
    [n, r] = U.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ur(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      disabled: !1,
      defaultValues: ur(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...fy(e, () => r((s) => ({ ...s }))), formState: n });
  const a = t.current.control;
  return (
    (a._options = e),
    Dl({
      subject: a._subjects.state,
      next: (s) => {
        Ec(s, a._proxyFormState, a._updateFormState, !0) && r({ ...a._formState });
      },
    }),
    U.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]),
    U.useEffect(() => {
      if (a._proxyFormState.isDirty) {
        const s = a._getDirty();
        s !== n.isDirty && a._subjects.state.next({ isDirty: s });
      }
    }, [a, n.isDirty]),
    U.useEffect(() => {
      e.values && !wr(e.values, i.current)
        ? (a._reset(e.values, a._options.resetOptions), (i.current = e.values))
        : a._resetDefaultValues();
    }, [e.values, a]),
    U.useEffect(() => {
      a._state.mount || (a._updateValid(), (a._state.mount = !0)),
        a._state.watch && ((a._state.watch = !1), a._subjects.state.next({ ...a._formState })),
        a._removeUnmounted();
    }),
    (t.current.formState = Vc(n, a)),
    t.current
  );
}
const Jc = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>",
  my = (e, t) => {
    let i = "";
    return (
      e !== void 0
        ? (i = `[Network] ${e.message}`)
        : t !== void 0
        ? t.forEach((n) => {
            i += `[GraphQL] ${n.message}
`;
          })
        : (i = "Unknown error"),
      i.trim()
    );
  },
  yy = (e) =>
    typeof e == "string"
      ? new Bs(e)
      : e != null && e.message && !e.code
      ? new Bs(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
      : e;
class ma extends Error {
  constructor({ networkError: i, executionErrors: n, response: r }) {
    const a = (n || []).map(yy),
      s = my(i, a);
    super(s);
    qr(this, "message");
    qr(this, "executionErrors");
    qr(this, "networkError");
    qr(this, "graphQLErrors");
    qr(this, "response");
    (this.message = s), (this.executionErrors = a), (this.graphQLErrors = a), (this.networkError = i), (this.response = r);
  }
  static forClientSideError(i, n) {
    return new ma({ executionErrors: [i], response: n });
  }
  static forErrorsResponse(i, n) {
    return new ma({ executionErrors: i.map(Xo), response: n });
  }
  static forMaybeCombinedError(i) {
    if (i) return new ma({ networkError: i.networkError, executionErrors: i.graphQLErrors, response: i.response });
  }
  static errorIfDataAbsent(i, n, r = !1) {
    const a = am(i, n);
    let s = ma.forMaybeCombinedError(i.error);
    return !s && a && !r && (s = ma.forClientSideError(a)), s;
  }
  get name() {
    return "ErrorWrapper";
  }
  toString() {
    return this.message;
  }
  get validationErrors() {
    const i = this.executionErrors.find((n) => n.code == "GGT_INVALID_RECORD");
    return (i == null ? void 0 : i.validationErrors) ?? null;
  }
}
const hy = (e) => {
    const { context: t, suspense: i, ...n } = e ?? {},
      r = ae.useMemo(
        () => ({ suspense: !!(e != null && e.suspense), ...(e == null ? void 0 : e.context) }),
        [e == null ? void 0 : e.suspense, e == null ? void 0 : e.context]
      );
    return { ...n, context: r };
  },
  gy = (e, t) => ({ query: e.query, variables: e.variables, ...t }),
  pd = (e) => (Array.isArray(e) ? e : e.match(/([^[.\]])+/g)),
  Ms = (e, t) => {
    if (t) return pd(t).reduce((i, n) => i && i[n], e);
  },
  ro = (e, t, i) => {
    const n = pd(t);
    n.reduce((r, a, s) => (r[a] === void 0 && (r[a] = {}), s === n.length - 1 && (r[a] = i), r[a]), e);
  },
  HS = (e, t) => {
    const i = (n) => n[t];
    return e.filter((n, r, a) => r === a.findIndex((s) => i(n) === i(s)));
  },
  QS = (e) => [...new Set(e)],
  KS = (e, t) => {
    const i = pd(t);
    i.reduce((n, r, a) => (a === i.length - 1 && delete n[r], n[r]), e);
  },
  JS = (e, t) => ((e = { ...e }), t.forEach((i) => delete e[i]), e),
  YS = (e, t = 300) => {
    let i;
    return (...n) => {
      clearTimeout(i), (i = setTimeout(() => e.apply(void 0, n), t));
    };
  },
  by = (e, t, i) => Ms(e, Ba([t], i).join(".")),
  ZS = (e, t, i = "asc") => e.sort((n, r) => (n[t] < r[t] ? (i === "asc" ? -1 : 1) : n[t] > r[t] ? (i === "asc" ? 1 : -1) : 0)),
  XS = (e) => {
    const { ref: t, ...i } = e;
    return i;
  },
  ek = (e) =>
    !(
      !Array.isArray(e) ||
      e.length === 0 ||
      !e.every((t) => t !== null && typeof t == "object" && "__typename" in t && t.__typename === "Role")
    ),
  tk = (e) => {
    const t = /([a-z\d])([A-Z])/g;
    let i = e.replace(t, "$1 $2");
    return (
      (i = i.replace(/([a-zA-Z])(\d)/g, "$1 $2")), (i = i.replace(/(\d)([a-zA-Z])/g, "$1 $2")), i.replace(/^./, (n) => n.toUpperCase())
    );
  },
  Yc = (e, t = "", i = ".") => {
    const n = {};
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const a = t ? `${t}${i}${r}` : r;
        typeof e[r] == "object" && e[r] !== null && !Array.isArray(e[r]) ? Object.assign(n, Yc(e[r], a, i)) : (n[a] = e[r]);
      }
    return n;
  },
  ik = (e) => Object.keys(Yc(e)),
  Bo = (e, t = !0) => {
    const i = {},
      n = t ? Array.from(new Set(e)) : e;
    for (const r of n) {
      const [a, ...s] = r.split(".");
      i[a] ?? (i[a] = []), s.length && i[a].push(s.join("."));
    }
    return i;
  },
  nk = (e) => (e === 0 ? 1 : +`0.${"0".repeat(e - 1)}1`),
  ak = (e) => {
    if (e.includes("e")) return 0;
    const [, t] = e.split(".");
    return (t == null ? void 0 : t.length) ?? 0;
  },
  rk = (e) =>
    e.includes("GGT_PERMISSION_DENIED")
      ? "Missing permissions. Cannot read related model"
      : e.includes("GGT_INVALID_STORED_DATA")
      ? "Invalid records found in related model"
      : "Cannot retrieve records from related model",
  Cl = (e) => {
    if (!ae.useContext(Bl)) throw new Error(Jc);
    const t = hy(e);
    return Qm(t);
  },
  Iy = (e) => {
    const t = ae.useRef();
    return e ? (t.current === void 0 || !nf(e, t.current)) && (t.current = e) : (t.current = void 0), t.current;
  },
  sk = (e) => {
    if (!ae.useContext(Bl)) throw new Error(Jc);
    return Wm(e);
  };
var j = ((e) => (
  (e.Any = "Any"),
  (e.Array = "Array"),
  (e.BelongsTo = "BelongsTo"),
  (e.Boolean = "Boolean"),
  (e.Code = "Code"),
  (e.Color = "Color"),
  (e.Computed = "Computed"),
  (e.DateTime = "DateTime"),
  (e.Email = "Email"),
  (e.EncryptedString = "EncryptedString"),
  (e.Enum = "Enum"),
  (e.File = "File"),
  (e.HasMany = "HasMany"),
  (e.HasManyThrough = "HasManyThrough"),
  (e.HasOne = "HasOne"),
  (e.Id = "ID"),
  (e.Json = "JSON"),
  (e.Money = "Money"),
  (e.Null = "Null"),
  (e.Number = "Number"),
  (e.Object = "Object"),
  (e.Password = "Password"),
  (e.RecordState = "RecordState"),
  (e.RichText = "RichText"),
  (e.RoleAssignments = "RoleAssignments"),
  (e.String = "String"),
  (e.Url = "URL"),
  (e.Vector = "Vector"),
  e
))(j || {});
const Sy = {
    kind: "Document",
    definitions: [
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "FieldMetadata" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            { kind: "Field", name: { kind: "Name", value: "name" } },
            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
            { kind: "Field", name: { kind: "Name", value: "fieldType" } },
            { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
            {
              kind: "InlineFragment",
              typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "sortable" } },
                  { kind: "Field", name: { kind: "Name", value: "filterable" } },
                ],
              },
            },
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "validations" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "pattern" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "min" } },
                              { kind: "Field", name: { kind: "Name", value: "max" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "joinModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseJoinModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseRelatedModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        { kind: "Field", name: { kind: "Name", value: "joinModelHasManyFieldApiIdentifier" } },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                        { kind: "Field", name: { kind: "Name", value: "allowOther" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "options" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "color" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  ky = {
    kind: "Document",
    definitions: [
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "SubFields" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "configuration" },
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                    {
                                      kind: "InlineFragment",
                                      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                      selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                          { kind: "Field", name: { kind: "Name", value: "name" } },
                                          {
                                            kind: "Field",
                                            name: { kind: "Name", value: "fields" },
                                            selectionSet: {
                                              kind: "SelectionSet",
                                              selections: [
                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                {
                                                  kind: "Field",
                                                  name: { kind: "Name", value: "configuration" },
                                                  selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                      {
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                          kind: "NamedType",
                                                          name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                        },
                                                        selectionSet: {
                                                          kind: "SelectionSet",
                                                          selections: [
                                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                                            {
                                                              kind: "Field",
                                                              name: { kind: "Name", value: "fields" },
                                                              selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                  {
                                                                    kind: "FragmentSpread",
                                                                    name: { kind: "Name", value: "FieldMetadata" },
                                                                  },
                                                                ],
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "FieldMetadata" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            { kind: "Field", name: { kind: "Name", value: "name" } },
            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
            { kind: "Field", name: { kind: "Name", value: "fieldType" } },
            { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
            {
              kind: "InlineFragment",
              typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "sortable" } },
                  { kind: "Field", name: { kind: "Name", value: "filterable" } },
                ],
              },
            },
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "validations" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "pattern" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "min" } },
                              { kind: "Field", name: { kind: "Name", value: "max" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "joinModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseJoinModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseRelatedModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        { kind: "Field", name: { kind: "Name", value: "joinModelHasManyFieldApiIdentifier" } },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                        { kind: "Field", name: { kind: "Name", value: "allowOther" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "options" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "color" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  vy = {
    kind: "Document",
    definitions: [
      {
        kind: "OperationDefinition",
        operation: "query",
        name: { kind: "Name", value: "GetModelMetadata" },
        variableDefinitions: [
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          },
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
            type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
          },
        ],
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "gadgetMeta" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "modelAndRelatedModels" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "apiIdentifier" },
                        value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                      },
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "namespace" },
                        value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                      },
                    ],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "key" } },
                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "defaultDisplayField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "FieldMetadata" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            { kind: "Field", name: { kind: "Name", value: "name" } },
            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
            { kind: "Field", name: { kind: "Name", value: "fieldType" } },
            { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
            {
              kind: "InlineFragment",
              typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "sortable" } },
                  { kind: "Field", name: { kind: "Name", value: "filterable" } },
                ],
              },
            },
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "validations" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "pattern" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "min" } },
                              { kind: "Field", name: { kind: "Name", value: "max" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "joinModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseJoinModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseRelatedModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        { kind: "Field", name: { kind: "Name", value: "joinModelHasManyFieldApiIdentifier" } },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                        { kind: "Field", name: { kind: "Name", value: "allowOther" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "options" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "color" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  Ny = {
    kind: "Document",
    definitions: [
      {
        kind: "OperationDefinition",
        operation: "query",
        name: { kind: "Name", value: "ModelActionMetadata" },
        variableDefinitions: [
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          },
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
            type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
          },
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "action" } },
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          },
        ],
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "gadgetMeta" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "modelAndRelatedModels" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "apiIdentifier" },
                        value: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                      },
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "namespace" },
                        value: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                      },
                    ],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "key" } },
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                        { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                              { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "defaultDisplayField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "model" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "apiIdentifier" },
                        value: { kind: "Variable", name: { kind: "Name", value: "modelApiIdentifier" } },
                      },
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "namespace" },
                        value: { kind: "Variable", name: { kind: "Name", value: "modelNamespace" } },
                      },
                    ],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "key" } },
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        { kind: "Field", name: { kind: "Name", value: "namespace" } },
                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                        { kind: "Field", name: { kind: "Name", value: "defaultRecord" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "action" },
                          arguments: [
                            {
                              kind: "Argument",
                              name: { kind: "Name", value: "apiIdentifier" },
                              value: { kind: "Variable", name: { kind: "Name", value: "action" } },
                            },
                          ],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "operatesWithRecordIdentity" } },
                              { kind: "Field", name: { kind: "Name", value: "isDeleteAction" } },
                              { kind: "Field", name: { kind: "Name", value: "isUpsertMetaAction" } },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "inputFields" },
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                    { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                                  ],
                                },
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "triggers" },
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "FieldMetadata" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            { kind: "Field", name: { kind: "Name", value: "name" } },
            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
            { kind: "Field", name: { kind: "Name", value: "fieldType" } },
            { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
            {
              kind: "InlineFragment",
              typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "sortable" } },
                  { kind: "Field", name: { kind: "Name", value: "filterable" } },
                ],
              },
            },
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "validations" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "pattern" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "min" } },
                              { kind: "Field", name: { kind: "Name", value: "max" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "joinModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseJoinModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseRelatedModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        { kind: "Field", name: { kind: "Name", value: "joinModelHasManyFieldApiIdentifier" } },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                        { kind: "Field", name: { kind: "Name", value: "allowOther" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "options" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "color" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "SubFields" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "configuration" },
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                    {
                                      kind: "InlineFragment",
                                      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                      selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                          { kind: "Field", name: { kind: "Name", value: "name" } },
                                          {
                                            kind: "Field",
                                            name: { kind: "Name", value: "fields" },
                                            selectionSet: {
                                              kind: "SelectionSet",
                                              selections: [
                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                {
                                                  kind: "Field",
                                                  name: { kind: "Name", value: "configuration" },
                                                  selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                      {
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                          kind: "NamedType",
                                                          name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                        },
                                                        selectionSet: {
                                                          kind: "SelectionSet",
                                                          selections: [
                                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                                            {
                                                              kind: "Field",
                                                              name: { kind: "Name", value: "fields" },
                                                              selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                  {
                                                                    kind: "FragmentSpread",
                                                                    name: { kind: "Name", value: "FieldMetadata" },
                                                                  },
                                                                ],
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  Ay = {
    kind: "Document",
    definitions: [
      {
        kind: "OperationDefinition",
        operation: "query",
        name: { kind: "Name", value: "GlobalActionMetadata" },
        variableDefinitions: [
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          },
          {
            kind: "VariableDefinition",
            variable: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
            type: { kind: "ListType", type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } },
          },
        ],
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "gadgetMeta" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "globalAction" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "apiIdentifier" },
                        value: { kind: "Variable", name: { kind: "Name", value: "apiIdentifier" } },
                      },
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "namespace" },
                        value: { kind: "Variable", name: { kind: "Name", value: "namespace" } },
                      },
                    ],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inputFields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                              { kind: "FragmentSpread", name: { kind: "Name", value: "SubFields" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "triggers" },
                          selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "specID" } }] },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "FieldMetadata" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            { kind: "Field", name: { kind: "Name", value: "name" } },
            { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
            { kind: "Field", name: { kind: "Name", value: "fieldType" } },
            { kind: "Field", name: { kind: "Name", value: "requiredArgumentForInput" } },
            {
              kind: "InlineFragment",
              typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetModelField" } },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "sortable" } },
                  { kind: "Field", name: { kind: "Name", value: "filterable" } },
                ],
              },
            },
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  { kind: "Field", name: { kind: "Name", value: "fieldType" } },
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "validations" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "__typename" } },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRegexFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "pattern" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetRangeFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "min" } },
                              { kind: "Field", name: { kind: "Name", value: "max" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetOnlyImageFileFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                              { kind: "Field", name: { kind: "Name", value: "allowAnimatedImages" } },
                            ],
                          },
                        },
                        {
                          kind: "InlineFragment",
                          typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetGenericFieldValidation" } },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "specID" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyThroughConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "joinModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseJoinModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseRelatedModelField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                        { kind: "Field", name: { kind: "Name", value: "joinModelHasManyFieldApiIdentifier" } },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasManyConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "isJoinModelHasManyField" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetHasOneConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "inverseField" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{ kind: "Field", name: { kind: "Name", value: "apiIdentifier" } }],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetBelongsToConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "relatedModel" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "key" } },
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "apiIdentifier" } },
                              { kind: "Field", name: { kind: "Name", value: "namespace" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetEnumConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "allowMultiple" } },
                        { kind: "Field", name: { kind: "Name", value: "allowOther" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "options" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "Field", name: { kind: "Name", value: "name" } },
                              { kind: "Field", name: { kind: "Name", value: "color" } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetDateTimeConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "includeTime" } }] },
                  },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetNumberConfig" } },
                    selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "decimals" } }] },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: "FragmentDefinition",
        name: { kind: "Name", value: "SubFields" },
        typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetField" } },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "configuration" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                  {
                    kind: "InlineFragment",
                    typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fields" },
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "configuration" },
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                    {
                                      kind: "InlineFragment",
                                      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GadgetObjectFieldConfig" } },
                                      selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                          { kind: "Field", name: { kind: "Name", value: "name" } },
                                          {
                                            kind: "Field",
                                            name: { kind: "Name", value: "fields" },
                                            selectionSet: {
                                              kind: "SelectionSet",
                                              selections: [
                                                { kind: "FragmentSpread", name: { kind: "Name", value: "FieldMetadata" } },
                                                {
                                                  kind: "Field",
                                                  name: { kind: "Name", value: "configuration" },
                                                  selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                      { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                                      {
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                          kind: "NamedType",
                                                          name: { kind: "Name", value: "GadgetObjectFieldConfig" },
                                                        },
                                                        selectionSet: {
                                                          kind: "SelectionSet",
                                                          selections: [
                                                            { kind: "Field", name: { kind: "Name", value: "name" } },
                                                            {
                                                              kind: "Field",
                                                              name: { kind: "Name", value: "fields" },
                                                              selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                  {
                                                                    kind: "FragmentSpread",
                                                                    name: { kind: "Name", value: "FieldMetadata" },
                                                                  },
                                                                ],
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  Fy = {
    kind: "Document",
    definitions: [
      {
        kind: "OperationDefinition",
        operation: "query",
        name: { kind: "Name", value: "RolesMetadata" },
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "Field",
              name: { kind: "Name", value: "gadgetMeta" },
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "roles" },
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        { kind: "Field", name: { kind: "Name", value: "name" } },
                        { kind: "Field", name: { kind: "Name", value: "key" } },
                        { kind: "Field", name: { kind: "Name", value: "selectable" } },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  wy = {
    "\n  fragment FieldMetadata on GadgetField {\n    name\n    apiIdentifier\n    fieldType\n    requiredArgumentForInput\n    ... on GadgetModelField {\n      sortable\n      filterable\n    }\n    configuration {\n      __typename\n      fieldType\n      validations {\n        __typename\n        ... on GadgetRegexFieldValidation {\n          name\n          specID\n          pattern\n        }\n        ... on GadgetRangeFieldValidation {\n          name\n          specID\n          min\n          max\n        }\n        ... on GadgetOnlyImageFileFieldValidation {\n          name\n          specID\n          allowAnimatedImages\n        }\n        ... on GadgetGenericFieldValidation {\n          name\n          specID\n        }\n      }\n      ... on GadgetHasManyThroughConfig {\n        relatedModel {\n          key\n          name\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n        joinModel {\n          key\n          apiIdentifier\n          namespace\n        }\n        inverseJoinModelField {\n          apiIdentifier\n        }\n        inverseRelatedModelField {\n          apiIdentifier\n        }\n        joinModelHasManyFieldApiIdentifier\n      }\n      ... on GadgetHasManyConfig {\n        isJoinModelHasManyField\n        relatedModel {\n          key\n          name\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetHasOneConfig {\n        relatedModel {\n          key\n          name\n          apiIdentifier\n          namespace\n        }\n        inverseField {\n          apiIdentifier\n        }\n      }\n      ... on GadgetBelongsToConfig {\n        relatedModel {\n          key\n          name\n          apiIdentifier\n          namespace\n        }\n      }\n      ... on GadgetEnumConfig {\n        allowMultiple\n        allowOther\n        options {\n          name\n          color\n        }\n      }\n      ... on GadgetDateTimeConfig {\n        includeTime\n      }\n      ... on GadgetNumberConfig {\n        decimals\n      }\n    }\n  }\n":
      Sy,
    "\n  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      modelAndRelatedModels(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        key\n        apiIdentifier\n        namespace\n        name\n        fields {\n          ...FieldMetadata\n        }\n        defaultDisplayField {\n          name\n          apiIdentifier\n          fieldType\n        }\n      }\n    }\n  }\n":
      vy,
    "\n  fragment SubFields on GadgetField {\n    configuration {\n      __typename\n      ... on GadgetObjectFieldConfig {\n        name\n        fields {\n          ...FieldMetadata\n          configuration {\n            __typename\n            ... on GadgetObjectFieldConfig {\n              name\n              fields {\n                ...FieldMetadata\n                configuration {\n                  __typename\n                  ... on GadgetObjectFieldConfig {\n                    name\n                    fields {\n                      ...FieldMetadata\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n":
      ky,
    "\n  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {\n    gadgetMeta {\n      modelAndRelatedModels(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        key\n        name\n        namespace\n        apiIdentifier\n        defaultRecord\n        fields {\n          ...FieldMetadata\n          ...SubFields\n        }\n        defaultDisplayField {\n          name\n          apiIdentifier\n          fieldType\n        }\n      }\n      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {\n        key\n        name\n        namespace\n        apiIdentifier\n        defaultRecord\n        action(apiIdentifier: $action) {\n          name\n          apiIdentifier\n          operatesWithRecordIdentity\n          isDeleteAction\n          isUpsertMetaAction\n          inputFields {\n            ...FieldMetadata\n            ...SubFields\n          }\n          triggers {\n            specID\n          }\n        }\n      }\n    }\n  }\n":
      Ny,
    "\n  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {\n    gadgetMeta {\n      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {\n        name\n        apiIdentifier\n        inputFields {\n          ...FieldMetadata\n          ...SubFields\n        }\n        triggers {\n          specID\n        }\n      }\n    }\n  }\n":
      Ay,
    "\n  query RolesMetadata {\n    gadgetMeta {\n      roles {\n        name\n        key\n        selectable\n      }\n    }\n  }\n": Fy,
  };
function us(e) {
  return wy[e] ?? {};
}
const $ = j;
us(`
  fragment FieldMetadata on GadgetField {
    name
    apiIdentifier
    fieldType
    requiredArgumentForInput
    ... on GadgetModelField {
      sortable
      filterable
    }
    configuration {
      __typename
      fieldType
      validations {
        __typename
        ... on GadgetRegexFieldValidation {
          name
          specID
          pattern
        }
        ... on GadgetRangeFieldValidation {
          name
          specID
          min
          max
        }
        ... on GadgetOnlyImageFileFieldValidation {
          name
          specID
          allowAnimatedImages
        }
        ... on GadgetGenericFieldValidation {
          name
          specID
        }
      }
      ... on GadgetHasManyThroughConfig {
        relatedModel {
          key
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
        joinModel {
          key
          apiIdentifier
          namespace
        }
        inverseJoinModelField {
          apiIdentifier
        }
        inverseRelatedModelField {
          apiIdentifier
        }
        joinModelHasManyFieldApiIdentifier
      }
      ... on GadgetHasManyConfig {
        isJoinModelHasManyField
        relatedModel {
          key
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetHasOneConfig {
        relatedModel {
          key
          name
          apiIdentifier
          namespace
        }
        inverseField {
          apiIdentifier
        }
      }
      ... on GadgetBelongsToConfig {
        relatedModel {
          key
          name
          apiIdentifier
          namespace
        }
      }
      ... on GadgetEnumConfig {
        allowMultiple
        allowOther
        options {
          name
          color
        }
      }
      ... on GadgetDateTimeConfig {
        includeTime
      }
      ... on GadgetNumberConfig {
        decimals
      }
    }
  }
`);
const My = us(`
  query GetModelMetadata($apiIdentifier: String!, $namespace: [String!]) {
    gadgetMeta {
      modelAndRelatedModels(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        key
        apiIdentifier
        namespace
        name
        fields {
          ...FieldMetadata
        }
        defaultDisplayField {
          name
          apiIdentifier
          fieldType
        }
      }
    }
  }
`);
us(`
  fragment SubFields on GadgetField {
    configuration {
      __typename
      ... on GadgetObjectFieldConfig {
        name
        fields {
          ...FieldMetadata
          configuration {
            __typename
            ... on GadgetObjectFieldConfig {
              name
              fields {
                ...FieldMetadata
                configuration {
                  __typename
                  ... on GadgetObjectFieldConfig {
                    name
                    fields {
                      ...FieldMetadata
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);
const Oy = us(`
  query ModelActionMetadata($modelApiIdentifier: String!, $modelNamespace: [String!], $action: String!) {
    gadgetMeta {
      modelAndRelatedModels(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        key
        name
        namespace
        apiIdentifier
        defaultRecord
        fields {
          ...FieldMetadata
          ...SubFields
        }
        defaultDisplayField {
          name
          apiIdentifier
          fieldType
        }
      }
      model(apiIdentifier: $modelApiIdentifier, namespace: $modelNamespace) {
        key
        name
        namespace
        apiIdentifier
        defaultRecord
        action(apiIdentifier: $action) {
          name
          apiIdentifier
          operatesWithRecordIdentity
          isDeleteAction
          isUpsertMetaAction
          inputFields {
            ...FieldMetadata
            ...SubFields
          }
          triggers {
            specID
          }
        }
      }
    }
  }
`),
  Ty = us(`
  query GlobalActionMetadata($apiIdentifier: String!, $namespace: [String!]) {
    gadgetMeta {
      globalAction(apiIdentifier: $apiIdentifier, namespace: $namespace) {
        name
        apiIdentifier
        inputFields {
          ...FieldMetadata
          ...SubFields
        }
        triggers {
          specID
        }
      }
    }
  }
`),
  Ry = us(`
  query RolesMetadata {
    gadgetMeta {
      roles {
        name
        key
        selectable
      }
    }
  }
`),
  Zc = (e) => {
    const t = {};
    for (const n of e) t[n.key] = n;
    const i = (n) => {
      for (const r of n)
        "relatedModel" in r.configuration &&
          r.configuration.relatedModel &&
          (r.configuration.relatedModel = t[r.configuration.relatedModel.key]),
          "joinModel" in r.configuration && r.configuration.joinModel && (r.configuration.joinModel = t[r.configuration.joinModel.key]),
          r.configuration.__typename == "GadgetObjectFieldConfig" && "fields" in r.configuration && i(r.configuration.fields);
    };
    for (const n of e) i(n.fields), "action" in n && n.action && i(n.action.inputFields);
    return e[0];
  },
  lk = (e, t) => {
    const [{ data: i, fetching: n, error: r }] = Cl({ query: My, variables: { apiIdentifier: e, namespace: t } });
    return {
      metadata: i && tt(Zc(i.gadgetMeta.modelAndRelatedModels), "no model metadata found in response from Gadget API"),
      fetching: n,
      error: r ? ma.forClientSideError(r) : void 0,
    };
  },
  By = (e, t) => {
    let i = e;
    if (t.namespace) for (const n of Array.isArray(t.namespace) ? t.namespace : [t.namespace]) i = i[n];
    for (const [n, r] of Object.entries(i)) if (r === t) return n;
    throw new Error("global action function not found on model manager");
  },
  ok = (e) => {
    var o;
    const t = Dc();
    let i, n;
    if (e.type === "globalAction") (i = Ty), (n = { apiIdentifier: By(t, e), namespace: e.namespace });
    else if (e.type === "action") {
      i = Oy;
      const d = tt(by(t, e.modelApiIdentifier, e.namespace), "no model manager found for action function");
      let u;
      const f = Object.getPrototypeOf(d);
      for (const [c, y] of Object.entries(f))
        if (y === e) {
          u = c;
          break;
        }
      if (!u && ((u = e.operationName.slice(0, -e.modelApiIdentifier.length)), !u || !(u in d)))
        throw new Error("action function not found on model manager");
      n = { modelApiIdentifier: e.modelApiIdentifier, modelNamespace: e.namespace, action: u };
    } else throw new Error("Invalid action function type");
    const [{ data: r, fetching: a, error: s }] = Cl({ query: i, variables: n });
    let l;
    if (r && !s)
      if ("globalAction" in r.gadgetMeta) l = tt(r.gadgetMeta.globalAction, "no global action metadata found from Gadget API");
      else {
        const d = r;
        tt((o = d.gadgetMeta.model) == null ? void 0 : o.action, "no model metadata found from Gadget API");
        const f = [{ ...d.gadgetMeta.model, ...d.gadgetMeta.modelAndRelatedModels[0] }, ...d.gadgetMeta.modelAndRelatedModels.slice(1)];
        l = Zc(f);
      }
    return { metadata: l, fetching: a, error: s ? ma.forClientSideError(s) : void 0 };
  },
  lu = (e, t) => {
    var r, a;
    if (!e) return [];
    let i = e.map((s) => [s.apiIdentifier, s]);
    if (t != null && t.include && t != null && t.exclude)
      throw new Error("Cannot use both 'include' and 'exclude' options at the same time");
    if (t != null && t.include) {
      i = [];
      const s = Bo(t.include);
      for (const [l, o] of Object.entries(s)) {
        const d = e.find((u) => u.apiIdentifier === l);
        if (d) {
          if (
            (i.push([l, d]), o.length > 0 && "relatedModel" in d.configuration && (r = d.configuration.relatedModel) != null && r.fields)
          ) {
            const u = lu(d.configuration.relatedModel.fields, { include: o });
            i.push(...u.map(([f, c]) => [`${l}.${f}`, c]));
          }
          if (o.length > 0 && "joinModel" in d.configuration && (a = d.configuration.joinModel) != null && a.fields) {
            const u = Bo(o);
            for (const [f, c] of Object.entries(u))
              if (d.configuration.joinModel.apiIdentifier === f) {
                const y = lu(d.configuration.joinModel.fields, { include: c });
                i.push(...y.map(([g, F]) => [`${l}.${f}.${g}`, F]));
              }
          }
        }
      }
    }
    if (t != null && t.exclude) {
      const s = new Set(t.exclude);
      i = i.filter(([l, o]) => !s.has(o.apiIdentifier));
    }
    i = i.filter(([s, l]) => !qy(l));
    const n = i.filter(([s, l]) => (t != null && t.isUpsertAction ? Uy(l) : Xc(l)));
    return t != null && t.include ? n : n.filter(([s, l]) => Dy(l));
  },
  Dy = (e) => {
    const t = e.configuration && "relatedModel" in e.configuration && e.configuration.relatedModel && e.configuration.relatedModel.key;
    return typeof t == "string" ? !Cy.has(t) : !0;
  },
  Cy = new Set(["DataModel-Shopify-Shop"]),
  Xc = (e) => Py.has(e.fieldType),
  Uy = (e) => e.fieldType === $.Id || Xc(e),
  qy = (e) => e.fieldType === $.HasMany && e.configuration.__typename === "GadgetHasManyConfig" && e.configuration.isJoinModelHasManyField,
  Py = new Set([
    $.Boolean,
    $.Color,
    $.Computed,
    $.DateTime,
    $.Email,
    $.EncryptedString,
    $.Enum,
    $.File,
    $.Json,
    $.Number,
    $.Password,
    $.RichText,
    $.RoleAssignments,
    $.String,
    $.Url,
    $.Vector,
    $.RichText,
    $.BelongsTo,
    $.HasMany,
    $.HasOne,
    $.HasManyThrough,
  ]),
  ou = (e) => {
    let t = e;
    return (
      (t = t.filter((i) => i.fieldType !== j.HasOne && i.fieldType !== j.HasMany && i.fieldType !== j.BelongsTo)),
      t.filter((i) => ep.has(i.fieldType))
    );
  },
  ep = new Set([
    $.Id,
    $.Boolean,
    $.Color,
    $.Computed,
    $.DateTime,
    $.Email,
    $.EncryptedString,
    $.Enum,
    $.File,
    $.Json,
    $.Number,
    $.RichText,
    $.RoleAssignments,
    $.String,
    $.Url,
    $.RichText,
    $.BelongsTo,
    $.HasMany,
    $.HasManyThrough,
    $.HasOne,
  ]),
  dk = () => {
    const [{ data: e, fetching: t, error: i }] = Cl({ query: Ry });
    return { roles: e == null ? void 0 : e.gadgetMeta.roles, fetching: t, error: i ? ma.forClientSideError(i) : void 0 };
  },
  uk = (e) => "action" in e,
  ck = (e, t, i, n) => {
    const r = { targetColumns: [], fieldMetadataTree: Uo(e), defaultSelection: n };
    if (t && i) throw new Error("Cannot use both 'columns' and 'excludeColumns' options at the same time");
    if (t) r.targetColumns = t;
    else if (i) {
      const a = new Set(i);
      r.targetColumns = ou(e)
        .filter((s) => !a.has(s.apiIdentifier))
        .map((s) => s.apiIdentifier);
    } else {
      const a = new Set(Object.keys(n));
      r.targetColumns = ou(e.filter((s) => a.has(s.apiIdentifier))).map((s) => s.apiIdentifier);
    }
    return r;
  },
  pk = (e) => {
    let t = { id: !0 };
    for (const i of e.targetColumns) {
      if (fd(i)) {
        t = { ...t, ...e.defaultSelection };
        continue;
      }
      const { field: n } = md(i),
        r = n.split("."),
        a = n.split(".")[0];
      let s = 0;
      for (let l = 0; l < r.length; l++) {
        if (l < s) continue;
        s = l + 1;
        const o = r.slice(0, l + 1).join("."),
          d = l === r.length - 1,
          u = ap(e.fieldMetadataTree, o);
        if (!u) {
          if (l >= 1) {
            const y = il(r.slice(l).join(".")),
              g = qs(e.fieldMetadataTree, a);
            if (os(g)) throw new Error(y.RELATED_HAS_ONE_OR_BELONGS_TO_FIELD_NOT_EXIST);
            if (Rr(g)) throw new Error(y.RELATED_HAS_MANY_FIELD_NOT_EXIST);
          }
          throw new Error(il(o).NOT_EXIST);
        }
        const f = os(u),
          c = Rr(u);
        if (!ep.has(u.fieldType)) throw new Error(`Field '${n}' cannot be shown in the table`);
        if (f || c) {
          const y = Do(o, "id", u);
          ro(t, y, !0);
          const g = d ? yd(e.fieldMetadataTree, o) : void 0;
          if (g) {
            ro(t, Do(o, g.apiIdentifier, u), Co(g));
            continue;
          }
          if (f) continue;
          if (r[l + 1] === "edges" && r[l + 2] === "node" && r[l + 3]) {
            s = l + 3;
            continue;
          }
          throw new Error(il(r.slice(l + 1).join(".")).RELATED_HAS_MANY_FIELD_NOT_EXIST);
        }
        ro(t, o, Co(u));
      }
    }
    return t;
  },
  fk = (e, t, i) => i.map((n, r) => Vy(e, t, n, r)),
  mk = (e) => {
    var i;
    const t = [];
    for (const [n, r] of e.targetColumns.entries()) {
      if (fd(r)) {
        const g = crypto.randomUUID();
        t.push({
          identifier: g,
          render: r.render,
          header: r.header,
          field: r.header,
          type: "CustomRenderer",
          sortable: !1,
          style: r.style,
        });
        continue;
      }
      const { header: a, field: s, sortable: l, style: o } = md(r),
        { firstField: d, targetField: u, isHasManyOrHasManyThrough: f, isHasOneOrBelongsTo: c } = tp(e.fieldMetadataTree, s),
        y = {
          identifier: s,
          header: a ?? d.name,
          field: s,
          type: u.fieldType,
          sortable: du({ fieldMetadata: { ...u, apiIdentifier: s }, sortable: l, isRelationshipField: c || f }),
          style: o,
        };
      if (c || f) {
        const g = yd(e.fieldMetadataTree, s);
        g &&
          ((y.type = g.fieldType), (y.sortable = du({ fieldMetadata: { ...g, apiIdentifier: s }, sortable: l, isRelationshipField: !0 }))),
          (y.relationshipType = d.fieldType);
      }
      ((i = u.configuration) == null ? void 0 : i.__typename) === "GadgetDateTimeConfig" && (y.includeTime = u.configuration.includeTime),
        t.push(y);
    }
    return t;
  },
  Vy = (e, t, i, n) => {
    var a, s;
    const r = { id: i.id };
    for (const l of t)
      if (l.type === "CustomRenderer") {
        const o = l.render;
        if (!o) throw new Error(`Custom cell renderer for column with header'${l.header}' is invalid`);
        r[l.identifier] = U.createElement(o, { record: i, index: n });
        continue;
      }
    for (const l of e.targetColumns) {
      if (fd(l)) continue;
      const { field: o } = md(l),
        { firstPathSegment: d, targetField: u, isHasManyOrHasManyThrough: f, isHasOneOrBelongsTo: c } = tp(e.fieldMetadataTree, o);
      if (c || f) {
        const y = yd(e.fieldMetadataTree, o) ?? u;
        f
          ? (r[o] = (a = Ms(i, d)) == null ? void 0 : a.edges.map((g) => g.node[y.apiIdentifier]))
          : (r[o] = (s = Ms(i, d)) == null ? void 0 : s[y.apiIdentifier]);
      } else r[o] = Ms(i, o);
    }
    return r;
  },
  tp = (e, t) => {
    const i = t.split(".")[0],
      n = qs(e, i),
      r = qs(e, t),
      a = os(n),
      s = Rr(n);
    return { firstPathSegment: i, firstField: n, targetField: r, isHasOneOrBelongsTo: a, isHasManyOrHasManyThrough: s };
  },
  fd = (e) => typeof e == "object" && e !== null && "render" in e,
  md = (e) => {
    if (typeof e == "string") return { field: e };
    if (typeof e == "object" && e !== null && "field" in e && typeof e.field == "string") return e;
    throw new Error(`Invalid column value: ${JSON.stringify(e)}`);
  },
  du = (e) => {
    const { fieldMetadata: t, sortable: i, isRelationshipField: n } = e,
      r = n !== !0 && "sortable" in t && !!t.sortable;
    if (i && !r) throw new Error(`Field '${t.apiIdentifier}' is not sortable`);
    return i ?? r;
  },
  Do = (e, t, i) => (Rr(i) ? `${e}.edges.node.${t}` : `${e}.${t}`),
  ip = (e) => e.fieldType === j.BelongsTo,
  os = (e) => e.fieldType === j.HasOne || ip(e),
  np = (e) => e.fieldType === j.HasMany,
  Ey = (e) => e.fieldType === j.HasManyThrough,
  Rr = (e) => np(e) || Ey(e),
  _y = (e) => os(e) || Rr(e),
  xy = { markdown: !0, truncatedHTML: !0 },
  $y = { url: !0, mimeType: !0, fileName: !0 },
  Gy = { key: !0, name: !0 },
  Co = (e, t = !1) => {
    if (e.__typename !== "GadgetModelField" && t) return !1;
    switch (e.fieldType) {
      case j.RichText:
        return xy;
      case j.File:
        return $y;
      case j.RoleAssignments:
        return Gy;
      case j.Password:
        return !1;
      default:
        return !0;
    }
  },
  yd = (e, t) => {
    const i = qs(e, t),
      n = jy(i);
    if (n) {
      const r = Do(t, n.defaultDisplayField.apiIdentifier, i);
      return qs(e, r);
    }
  },
  Uo = (e, t = 0) => {
    t += 1;
    const i = {},
      n = (r) => {
        var a;
        return "configuration" in r ? ((a = r.configuration.relatedModel) == null ? void 0 : a.fields) ?? [] : [];
      };
    for (const r of e)
      (i[r.apiIdentifier] = {}),
        os(r) && t < 3
          ? (i[r.apiIdentifier] = { $field: r, ...Uo(n(r), t) })
          : Rr(r) && t < 3
          ? (i[r.apiIdentifier] = { $field: r, edges: { node: Uo(n(r), t) } })
          : (i[r.apiIdentifier] = r);
    return i;
  },
  ap = (e, t) => {
    const i = Ms(e, t);
    return i ? ("$field" in i ? i.$field : i) : void 0;
  },
  qs = (e, t) => {
    const i = ap(e, t);
    if (!i) throw new Error(il(t).NOT_EXIST);
    return i;
  },
  jy = (e) => {
    if ((os(e) || Rr(e)) && "configuration" in e) return e.configuration.relatedModel;
  },
  il = (e) => ({
    NOT_EXIST: `Field '${e}' does not exist in the model`,
    RELATED_HAS_MANY_FIELD_NOT_EXIST: `Field '${e}' does not exist in the related model. hasMany fields require 'edges.node' segment before the related field.`,
    RELATED_HAS_ONE_OR_BELONGS_TO_FIELD_NOT_EXIST: `Field '${e}' does not exist in the related model`,
  }),
  so = (e, t, i) => {
    const n = { id: !0 },
      r = Bo(t, !1);
    for (const [a, s] of Object.entries(r)) {
      const l = i.find((o) => o.apiIdentifier == a);
      if (!l) throw new Error(`No metadata found for ${a}`);
      if (_y(l)) {
        const o = l.configuration;
        if (o && "joinModel" in o && o.joinModel) {
          const d = o.joinModel,
            u = o.relatedModel,
            f = o.joinModelHasManyFieldApiIdentifier,
            c = s.filter((F) => F.startsWith(`${d.apiIdentifier}.`)).map((F) => F.replace(`${d.apiIdentifier}.`, "")),
            y = s.filter((F) => !F.startsWith(`${d.apiIdentifier}.`));
          let g = {};
          u && (g = { id: !0, [u.defaultDisplayField.apiIdentifier]: !0, ...(s.length && u.fields ? so(a, y, u.fields) : {}) }),
            (n[f] = {
              edges: {
                node: {
                  id: !0,
                  [d.defaultDisplayField.apiIdentifier]: !0,
                  ...(c.length && d.fields ? so(d.apiIdentifier, c, d.fields) : {}),
                  [o.inverseRelatedModelField.apiIdentifier]: g,
                },
              },
            });
        } else if (o && "relatedModel" in o && o.relatedModel) {
          const d = o.relatedModel,
            u = {
              id: !0,
              [d == null ? void 0 : d.defaultDisplayField.apiIdentifier]: !0,
              ...(s.length && d.fields ? so(a, s, d.fields) : {}),
            };
          np(l) ? (n[l.apiIdentifier] = { edges: { node: u } }) : ((n[l.apiIdentifier] = u), ip(l) && (n[`${l.apiIdentifier}Id`] = !0));
        }
      } else n[l.apiIdentifier] = Co(l, !0);
    }
    return n;
  };
function Br(e) {
  (this._maxSize = e), this.clear();
}
Br.prototype.clear = function () {
  (this._size = 0), (this._values = Object.create(null));
};
Br.prototype.get = function (e) {
  return this._values[e];
};
Br.prototype.set = function (e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, (this._values[e] = t);
};
var Wy = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  rp = /^\d+$/,
  Ly = /^\d/,
  zy = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  Hy = /^\s*(['"]?)(.*?)(\1)\s*$/,
  hd = 512,
  uu = new Br(hd),
  cu = new Br(hd),
  pu = new Br(hd),
  Or = {
    Cache: Br,
    split: qo,
    normalizePath: lo,
    setter: function (e) {
      var t = lo(e);
      return (
        cu.get(e) ||
        cu.set(e, function (n, r) {
          for (var a = 0, s = t.length, l = n; a < s - 1; ) {
            var o = t[a];
            if (o === "__proto__" || o === "constructor" || o === "prototype") return n;
            l = l[t[a++]];
          }
          l[t[a]] = r;
        })
      );
    },
    getter: function (e, t) {
      var i = lo(e);
      return (
        pu.get(e) ||
        pu.set(e, function (r) {
          for (var a = 0, s = i.length; a < s; )
            if (r != null || !t) r = r[i[a++]];
            else return;
          return r;
        })
      );
    },
    join: function (e) {
      return e.reduce(function (t, i) {
        return t + (gd(i) || rp.test(i) ? "[" + i + "]" : (t ? "." : "") + i);
      }, "");
    },
    forEach: function (e, t, i) {
      Qy(Array.isArray(e) ? e : qo(e), t, i);
    },
  };
function lo(e) {
  return (
    uu.get(e) ||
    uu.set(
      e,
      qo(e).map(function (t) {
        return t.replace(Hy, "$2");
      })
    )
  );
}
function qo(e) {
  return e.match(Wy) || [""];
}
function Qy(e, t, i) {
  var n = e.length,
    r,
    a,
    s,
    l;
  for (a = 0; a < n; a++)
    (r = e[a]), r && (Yy(r) && (r = '"' + r + '"'), (l = gd(r)), (s = !l && /^\d+$/.test(r)), t.call(i, r, l, s, a, e));
}
function gd(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function Ky(e) {
  return e.match(Ly) && !e.match(rp);
}
function Jy(e) {
  return zy.test(e);
}
function Yy(e) {
  return !gd(e) && (Ky(e) || Jy(e));
}
const Zy =
    /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  Ul = (e) => e.match(Zy) || [],
  ql = (e) => e[0].toUpperCase() + e.slice(1),
  bd = (e, t) => Ul(e).join(t).toLowerCase(),
  sp = (e) => Ul(e).reduce((t, i) => `${t}${t ? i[0].toUpperCase() + i.slice(1).toLowerCase() : i.toLowerCase()}`, ""),
  Xy = (e) => ql(sp(e)),
  eh = (e) => bd(e, "_"),
  th = (e) => bd(e, "-"),
  ih = (e) => ql(bd(e, " ")),
  nh = (e) => Ul(e).map(ql).join(" ");
var oo = { words: Ul, upperFirst: ql, camelCase: sp, pascalCase: Xy, snakeCase: eh, kebabCase: th, sentenceCase: ih, titleCase: nh },
  Id = { exports: {} };
Id.exports = function (e) {
  return lp(ah(e), e);
};
Id.exports.array = lp;
function lp(e, t) {
  var i = e.length,
    n = new Array(i),
    r = {},
    a = i,
    s = rh(t),
    l = sh(e);
  for (
    t.forEach(function (d) {
      if (!l.has(d[0]) || !l.has(d[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    });
    a--;

  )
    r[a] || o(e[a], a, new Set());
  return n;
  function o(d, u, f) {
    if (f.has(d)) {
      var c;
      try {
        c = ", node was:" + JSON.stringify(d);
      } catch {
        c = "";
      }
      throw new Error("Cyclic dependency" + c);
    }
    if (!l.has(d)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(d));
    if (!r[u]) {
      r[u] = !0;
      var y = s.get(d) || new Set();
      if (((y = Array.from(y)), (u = y.length))) {
        f.add(d);
        do {
          var g = y[--u];
          o(g, l.get(g), f);
        } while (u);
        f.delete(d);
      }
      n[--i] = d;
    }
  }
}
function ah(e) {
  for (var t = new Set(), i = 0, n = e.length; i < n; i++) {
    var r = e[i];
    t.add(r[0]), t.add(r[1]);
  }
  return Array.from(t);
}
function rh(e) {
  for (var t = new Map(), i = 0, n = e.length; i < n; i++) {
    var r = e[i];
    t.has(r[0]) || t.set(r[0], new Set()), t.has(r[1]) || t.set(r[1], new Set()), t.get(r[0]).add(r[1]);
  }
  return t;
}
function sh(e) {
  for (var t = new Map(), i = 0, n = e.length; i < n; i++) t.set(e[i], i);
  return t;
}
var lh = Id.exports;
const oh = Yu(lh),
  dh = Object.prototype.toString,
  uh = Error.prototype.toString,
  ch = RegExp.prototype.toString,
  ph = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
  fh = /^Symbol\((.*)\)(.*)$/;
function mh(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function fu(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const i = typeof e;
  if (i === "number") return mh(e);
  if (i === "string") return t ? `"${e}"` : e;
  if (i === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (i === "symbol") return ph.call(e).replace(fh, "Symbol($1)");
  const n = dh.call(e).slice(8, -1);
  return n === "Date"
    ? isNaN(e.getTime())
      ? "" + e
      : e.toISOString(e)
    : n === "Error" || e instanceof Error
    ? "[" + uh.call(e) + "]"
    : n === "RegExp"
    ? ch.call(e)
    : null;
}
function Ra(e, t) {
  let i = fu(e, t);
  return i !== null
    ? i
    : JSON.stringify(
        e,
        function (n, r) {
          let a = fu(this[n], t);
          return a !== null ? a : r;
        },
        2
      );
}
function op(e) {
  return e == null ? [] : [].concat(e);
}
let dp,
  up,
  cp,
  yh = /\$\{\s*(\w+)\s*\}/g;
dp = Symbol.toStringTag;
class mu {
  constructor(t, i, n, r) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[dp] = "Error"),
      (this.name = "ValidationError"),
      (this.value = i),
      (this.path = n),
      (this.type = r),
      (this.errors = []),
      (this.inner = []),
      op(t).forEach((a) => {
        if (Pi.isError(a)) {
          this.errors.push(...a.errors);
          const s = a.inner.length ? a.inner : [a];
          this.inner.push(...s);
        } else this.errors.push(a);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
up = Symbol.hasInstance;
cp = Symbol.toStringTag;
class Pi extends Error {
  static formatError(t, i) {
    const n = i.label || i.path || "this";
    return (
      n !== i.path && (i = Object.assign({}, i, { path: n })),
      typeof t == "string" ? t.replace(yh, (r, a) => Ra(i[a])) : typeof t == "function" ? t(i) : t
    );
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, i, n, r, a) {
    const s = new mu(t, i, n, r);
    if (a) return s;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[cp] = "Error"),
      (this.name = s.name),
      (this.message = s.message),
      (this.type = s.type),
      (this.value = s.value),
      (this.path = s.path),
      (this.errors = s.errors),
      (this.inner = s.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, Pi);
  }
  static [up](t) {
    return mu[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let pa = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({ path: e, type: t, value: i, originalValue: n }) => {
      const r = n != null && n !== i ? ` (cast from the value \`${Ra(n, !0)}\`).` : ".";
      return t !== "mixed"
        ? `${e} must be a \`${t}\` type, but the final value was: \`${Ra(i, !0)}\`` + r
        : `${e} must match the configured type. The validated value was: \`${Ra(i, !0)}\`` + r;
    },
  },
  Ui = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  dr = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  Po = { min: "${path} field must be later than ${min}", max: "${path} field must be at earlier than ${max}" },
  Vo = { isValue: "${path} field must be ${value}" },
  Eo = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
  nl = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  },
  hh = {
    notType: (e) => {
      const { path: t, value: i, spec: n } = e,
        r = n.types.length;
      if (Array.isArray(i)) {
        if (i.length < r)
          return `${t} tuple value has too few items, expected a length of ${r} but got ${i.length} for value: \`${Ra(i, !0)}\``;
        if (i.length > r)
          return `${t} tuple value has too many items, expected a length of ${r} but got ${i.length} for value: \`${Ra(i, !0)}\``;
      }
      return Pi.formatError(pa.notType, e);
    },
  };
Object.assign(Object.create(null), { mixed: pa, string: Ui, number: dr, date: Po, object: Eo, array: nl, boolean: Vo, tuple: hh });
const Pl = (e) => e && e.__isYupSchema__;
class bl {
  static fromOptions(t, i) {
    if (!i.then && !i.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let { is: n, then: r, otherwise: a } = i,
      s = typeof n == "function" ? n : (...l) => l.every((o) => o === n);
    return new bl(t, (l, o) => {
      var d;
      let u = s(...l) ? r : a;
      return (d = u == null ? void 0 : u(o)) != null ? d : o;
    });
  }
  constructor(t, i) {
    (this.fn = void 0), (this.refs = t), (this.refs = t), (this.fn = i);
  }
  resolve(t, i) {
    let n = this.refs.map((a) => a.getValue(i == null ? void 0 : i.value, i == null ? void 0 : i.parent, i == null ? void 0 : i.context)),
      r = this.fn(n, t, i);
    if (r === void 0 || r === t) return t;
    if (!Pl(r)) throw new TypeError("conditions must return a schema object");
    return r.resolve(i);
  }
}
const Ys = { context: "$", value: "." };
class Dr {
  constructor(t, i = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof t != "string")
    )
      throw new TypeError("ref must be a string, got: " + t);
    if (((this.key = t.trim()), t === "")) throw new TypeError("ref must be a non-empty string");
    (this.isContext = this.key[0] === Ys.context),
      (this.isValue = this.key[0] === Ys.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let n = this.isContext ? Ys.context : this.isValue ? Ys.value : "";
    (this.path = this.key.slice(n.length)), (this.getter = this.path && Or.getter(this.path, !0)), (this.map = i.map);
  }
  getValue(t, i, n) {
    let r = this.isContext ? n : this.isValue ? t : i;
    return this.getter && (r = this.getter(r || {})), this.map && (r = this.map(r)), r;
  }
  cast(t, i) {
    return this.getValue(t, i == null ? void 0 : i.parent, i == null ? void 0 : i.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: "ref", key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Dr.prototype.__isYupRef = !0;
const Mn = (e) => e == null;
function Vr(e) {
  function t({ value: i, path: n = "", options: r, originalValue: a, schema: s }, l, o) {
    const { name: d, test: u, params: f, message: c, skipAbsent: y } = e;
    let { parent: g, context: F, abortEarly: C = s.spec.abortEarly, disableStackTrace: O = s.spec.disableStackTrace } = r;
    function m(K) {
      return Dr.isRef(K) ? K.getValue(i, g, F) : K;
    }
    function I(K = {}) {
      const _ = Object.assign(
        { value: i, originalValue: a, label: s.spec.label, path: K.path || n, spec: s.spec, disableStackTrace: K.disableStackTrace || O },
        f,
        K.params
      );
      for (const R of Object.keys(_)) _[R] = m(_[R]);
      const x = new Pi(Pi.formatError(K.message || c, _), i, _.path, K.type || d, _.disableStackTrace);
      return (x.params = _), x;
    }
    const S = C ? l : o;
    let k = { path: n, parent: g, type: d, from: r.from, createError: I, resolve: m, options: r, originalValue: a, schema: s };
    const w = (K) => {
        Pi.isError(K) ? S(K) : K ? o(null) : S(I());
      },
      q = (K) => {
        Pi.isError(K) ? S(K) : l(K);
      };
    if (y && Mn(i)) return w(!0);
    let oe;
    try {
      var Ae;
      if (((oe = u.call(k, i, k)), typeof ((Ae = oe) == null ? void 0 : Ae.then) == "function")) {
        if (r.sync)
          throw new Error(
            `Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
        return Promise.resolve(oe).then(w, q);
      }
    } catch (K) {
      q(K);
      return;
    }
    w(oe);
  }
  return (t.OPTIONS = e), t;
}
function gh(e, t, i, n = i) {
  let r, a, s;
  return t
    ? (Or.forEach(t, (l, o, d) => {
        let u = o ? l.slice(1, l.length - 1) : l;
        e = e.resolve({ context: n, parent: r, value: i });
        let f = e.type === "tuple",
          c = d ? parseInt(u, 10) : 0;
        if (e.innerType || f) {
          if (f && !d)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`
            );
          if (i && c >= i.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `
            );
          (r = i), (i = i && i[c]), (e = f ? e.spec.types[c] : e.innerType);
        }
        if (!d) {
          if (!e.fields || !e.fields[u])
            throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);
          (r = i), (i = i && i[u]), (e = e.fields[u]);
        }
        (a = u), (s = o ? "[" + l + "]" : "." + l);
      }),
      { schema: e, parent: r, parentPath: a })
    : { parent: r, parentPath: t, schema: e };
}
class Il extends Set {
  describe() {
    const t = [];
    for (const i of this.values()) t.push(Dr.isRef(i) ? i.describe() : i);
    return t;
  }
  resolveAll(t) {
    let i = [];
    for (const n of this.values()) i.push(t(n));
    return i;
  }
  clone() {
    return new Il(this.values());
  }
  merge(t, i) {
    const n = this.clone();
    return t.forEach((r) => n.add(r)), i.forEach((r) => n.delete(r)), n;
  }
}
function Xr(e, t = new Map()) {
  if (Pl(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let i;
  if (e instanceof Date) (i = new Date(e.getTime())), t.set(e, i);
  else if (e instanceof RegExp) (i = new RegExp(e)), t.set(e, i);
  else if (Array.isArray(e)) {
    (i = new Array(e.length)), t.set(e, i);
    for (let n = 0; n < e.length; n++) i[n] = Xr(e[n], t);
  } else if (e instanceof Map) {
    (i = new Map()), t.set(e, i);
    for (const [n, r] of e.entries()) i.set(n, Xr(r, t));
  } else if (e instanceof Set) {
    (i = new Set()), t.set(e, i);
    for (const n of e) i.add(Xr(n, t));
  } else if (e instanceof Object) {
    (i = {}), t.set(e, i);
    for (const [n, r] of Object.entries(e)) i[n] = Xr(r, t);
  } else throw Error(`Unable to clone ${e}`);
  return i;
}
class Ei {
  constructor(t) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Il()),
      (this._blacklist = new Il()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(pa.notType);
      }),
      (this.type = t.type),
      (this._typeCheck = t.check),
      (this.spec = Object.assign(
        { strip: !1, strict: !1, abortEarly: !0, recursive: !0, disableStackTrace: !1, nullable: !1, optional: !0, coerce: !0 },
        t == null ? void 0 : t.spec
      )),
      this.withMutation((i) => {
        i.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate) return t && Object.assign(this.spec, t), this;
    const i = Object.create(Object.getPrototypeOf(this));
    return (
      (i.type = this.type),
      (i._typeCheck = this._typeCheck),
      (i._whitelist = this._whitelist.clone()),
      (i._blacklist = this._blacklist.clone()),
      (i.internalTests = Object.assign({}, this.internalTests)),
      (i.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (i.deps = [...this.deps]),
      (i.conditions = [...this.conditions]),
      (i.tests = [...this.tests]),
      (i.transforms = [...this.transforms]),
      (i.spec = Xr(Object.assign({}, this.spec, t))),
      i
    );
  }
  label(t) {
    let i = this.clone();
    return (i.spec.label = t), i;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let i = this.clone();
    return (i.spec.meta = Object.assign(i.spec.meta || {}, t[0])), i;
  }
  withMutation(t) {
    let i = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return (this._mutate = i), n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let i = this,
      n = t.clone();
    const r = Object.assign({}, i.spec, n.spec);
    return (
      (n.spec = r),
      (n.internalTests = Object.assign({}, i.internalTests, n.internalTests)),
      (n._whitelist = i._whitelist.merge(t._whitelist, t._blacklist)),
      (n._blacklist = i._blacklist.merge(t._blacklist, t._whitelist)),
      (n.tests = i.tests),
      (n.exclusiveTests = i.exclusiveTests),
      n.withMutation((a) => {
        t.tests.forEach((s) => {
          a.test(s.OPTIONS);
        });
      }),
      (n.transforms = [...i.transforms, ...n.transforms]),
      n
    );
  }
  isType(t) {
    return t == null ? !!((this.spec.nullable && t === null) || (this.spec.optional && t === void 0)) : this._typeCheck(t);
  }
  resolve(t) {
    let i = this;
    if (i.conditions.length) {
      let n = i.conditions;
      (i = i.clone()), (i.conditions = []), (i = n.reduce((r, a) => a.resolve(r, t), i)), (i = i.resolve(t));
    }
    return i;
  }
  resolveOptions(t) {
    var i, n, r, a;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (i = t.strict) != null ? i : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (r = t.recursive) != null ? r : this.spec.recursive,
      disableStackTrace: (a = t.disableStackTrace) != null ? a : this.spec.disableStackTrace,
    });
  }
  cast(t, i = {}) {
    let n = this.resolve(Object.assign({ value: t }, i)),
      r = i.assert === "ignore-optionality",
      a = n._cast(t, i);
    if (i.assert !== !1 && !n.isType(a)) {
      if (r && Mn(a)) return a;
      let s = Ra(t),
        l = Ra(a);
      throw new TypeError(
        `The value of ${i.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${s} 
` + (l !== s ? `result of cast: ${l}` : "")
      );
    }
    return a;
  }
  _cast(t, i) {
    let n = t === void 0 ? t : this.transforms.reduce((r, a) => a.call(this, r, t, this), t);
    return n === void 0 && (n = this.getDefault(i)), n;
  }
  _validate(t, i = {}, n, r) {
    let { path: a, originalValue: s = t, strict: l = this.spec.strict } = i,
      o = t;
    l || (o = this._cast(o, Object.assign({ assert: !1 }, i)));
    let d = [];
    for (let u of Object.values(this.internalTests)) u && d.push(u);
    this.runTests({ path: a, value: o, originalValue: s, options: i, tests: d }, n, (u) => {
      if (u.length) return r(u, o);
      this.runTests({ path: a, value: o, originalValue: s, options: i, tests: this.tests }, n, r);
    });
  }
  runTests(t, i, n) {
    let r = !1,
      { tests: a, value: s, originalValue: l, path: o, options: d } = t,
      u = (F) => {
        r || ((r = !0), i(F, s));
      },
      f = (F) => {
        r || ((r = !0), n(F, s));
      },
      c = a.length,
      y = [];
    if (!c) return f([]);
    let g = { value: s, originalValue: l, path: o, options: d, schema: this };
    for (let F = 0; F < a.length; F++) {
      const C = a[F];
      C(g, u, function (m) {
        m && (Array.isArray(m) ? y.push(...m) : y.push(m)), --c <= 0 && f(y);
      });
    }
  }
  asNestedTest({ key: t, index: i, parent: n, parentPath: r, originalParent: a, options: s }) {
    const l = t ?? i;
    if (l == null) throw TypeError("Must include `key` or `index` for nested validations");
    const o = typeof l == "number";
    let d = n[l];
    const u = Object.assign({}, s, {
      strict: !0,
      parent: n,
      value: d,
      originalValue: a[l],
      key: void 0,
      [o ? "index" : "key"]: l,
      path: o || l.includes(".") ? `${r || ""}[${o ? l : `"${l}"`}]` : (r ? `${r}.` : "") + t,
    });
    return (f, c, y) => this.resolve(u)._validate(d, u, c, y);
  }
  validate(t, i) {
    var n;
    let r = this.resolve(Object.assign({}, i, { value: t })),
      a = (n = i == null ? void 0 : i.disableStackTrace) != null ? n : r.spec.disableStackTrace;
    return new Promise((s, l) =>
      r._validate(
        t,
        i,
        (o, d) => {
          Pi.isError(o) && (o.value = d), l(o);
        },
        (o, d) => {
          o.length ? l(new Pi(o, d, void 0, void 0, a)) : s(d);
        }
      )
    );
  }
  validateSync(t, i) {
    var n;
    let r = this.resolve(Object.assign({}, i, { value: t })),
      a,
      s = (n = i == null ? void 0 : i.disableStackTrace) != null ? n : r.spec.disableStackTrace;
    return (
      r._validate(
        t,
        Object.assign({}, i, { sync: !0 }),
        (l, o) => {
          throw (Pi.isError(l) && (l.value = o), l);
        },
        (l, o) => {
          if (l.length) throw new Pi(l, t, void 0, void 0, s);
          a = o;
        }
      ),
      a
    );
  }
  isValid(t, i) {
    return this.validate(t, i).then(
      () => !0,
      (n) => {
        if (Pi.isError(n)) return !1;
        throw n;
      }
    );
  }
  isValidSync(t, i) {
    try {
      return this.validateSync(t, i), !0;
    } catch (n) {
      if (Pi.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let i = this.spec.default;
    return i == null ? i : typeof i == "function" ? i.call(this, t) : Xr(i);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({ default: t });
  }
  strict(t = !0) {
    return this.clone({ strict: t });
  }
  nullability(t, i) {
    const n = this.clone({ nullable: t });
    return (
      (n.internalTests.nullable = Vr({
        message: i,
        name: "nullable",
        test(r) {
          return r === null ? this.schema.spec.nullable : !0;
        },
      })),
      n
    );
  }
  optionality(t, i) {
    const n = this.clone({ optional: t });
    return (
      (n.internalTests.optionality = Vr({
        message: i,
        name: "optionality",
        test(r) {
          return r === void 0 ? this.schema.spec.optional : !0;
        },
      })),
      n
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = pa.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = pa.notNull) {
    return this.nullability(!1, t);
  }
  required(t = pa.required) {
    return this.clone().withMutation((i) => i.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let i = this.clone();
    return i.transforms.push(t), i;
  }
  test(...t) {
    let i;
    if (
      (t.length === 1
        ? typeof t[0] == "function"
          ? (i = { test: t[0] })
          : (i = t[0])
        : t.length === 2
        ? (i = { name: t[0], test: t[1] })
        : (i = { name: t[0], message: t[1], test: t[2] }),
      i.message === void 0 && (i.message = pa.default),
      typeof i.test != "function")
    )
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(),
      r = Vr(i),
      a = i.exclusive || (i.name && n.exclusiveTests[i.name] === !0);
    if (i.exclusive && !i.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return (
      i.name && (n.exclusiveTests[i.name] = !!i.exclusive),
      (n.tests = n.tests.filter((s) => !(s.OPTIONS.name === i.name && (a || s.OPTIONS.test === r.OPTIONS.test)))),
      n.tests.push(r),
      n
    );
  }
  when(t, i) {
    !Array.isArray(t) && typeof t != "string" && ((i = t), (t = "."));
    let n = this.clone(),
      r = op(t).map((a) => new Dr(a));
    return (
      r.forEach((a) => {
        a.isSibling && n.deps.push(a.key);
      }),
      n.conditions.push(typeof i == "function" ? new bl(r, i) : bl.fromOptions(r, i)),
      n
    );
  }
  typeError(t) {
    let i = this.clone();
    return (
      (i.internalTests.typeError = Vr({
        message: t,
        name: "typeError",
        skipAbsent: !0,
        test(n) {
          return this.schema._typeCheck(n) ? !0 : this.createError({ params: { type: this.schema.type } });
        },
      })),
      i
    );
  }
  oneOf(t, i = pa.oneOf) {
    let n = this.clone();
    return (
      t.forEach((r) => {
        n._whitelist.add(r), n._blacklist.delete(r);
      }),
      (n.internalTests.whiteList = Vr({
        message: i,
        name: "oneOf",
        skipAbsent: !0,
        test(r) {
          let a = this.schema._whitelist,
            s = a.resolveAll(this.resolve);
          return s.includes(r) ? !0 : this.createError({ params: { values: Array.from(a).join(", "), resolved: s } });
        },
      })),
      n
    );
  }
  notOneOf(t, i = pa.notOneOf) {
    let n = this.clone();
    return (
      t.forEach((r) => {
        n._blacklist.add(r), n._whitelist.delete(r);
      }),
      (n.internalTests.blacklist = Vr({
        message: i,
        name: "notOneOf",
        test(r) {
          let a = this.schema._blacklist,
            s = a.resolveAll(this.resolve);
          return s.includes(r) ? this.createError({ params: { values: Array.from(a).join(", "), resolved: s } }) : !0;
        },
      })),
      n
    );
  }
  strip(t = !0) {
    let i = this.clone();
    return (i.spec.strip = t), i;
  }
  describe(t) {
    const i = (t ? this.resolve(t) : this).clone(),
      { label: n, meta: r, optional: a, nullable: s } = i.spec;
    return {
      meta: r,
      label: n,
      optional: a,
      nullable: s,
      default: i.getDefault(t),
      type: i.type,
      oneOf: i._whitelist.describe(),
      notOneOf: i._blacklist.describe(),
      tests: i.tests
        .map((o) => ({ name: o.OPTIONS.name, params: o.OPTIONS.params }))
        .filter((o, d, u) => u.findIndex((f) => f.name === o.name) === d),
    };
  }
}
Ei.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  Ei.prototype[`${e}At`] = function (t, i, n = {}) {
    const { parent: r, parentPath: a, schema: s } = gh(this, t, i, n.context);
    return s[e](r && r[a], Object.assign({}, n, { parent: r, path: t }));
  };
for (const e of ["equals", "is"]) Ei.prototype[e] = Ei.prototype.oneOf;
for (const e of ["not", "nope"]) Ei.prototype[e] = Ei.prototype.notOneOf;
const bh = () => !0;
function al(e) {
  return new Sl(e);
}
class Sl extends Ei {
  constructor(t) {
    super(typeof t == "function" ? { type: "mixed", check: t } : Object.assign({ type: "mixed", check: bh }, t));
  }
}
al.prototype = Sl.prototype;
function pp() {
  return new fp();
}
class fp extends Ei {
  constructor() {
    super({
      type: "boolean",
      check(t) {
        return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
      },
    }),
      this.withMutation(() => {
        this.transform((t, i, n) => {
          if (n.spec.coerce && !n.isType(t)) {
            if (/^(true|1)$/i.test(String(t))) return !0;
            if (/^(false|0)$/i.test(String(t))) return !1;
          }
          return t;
        });
      });
  }
  isTrue(t = Vo.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: { value: "true" },
      test(i) {
        return Mn(i) || i === !0;
      },
    });
  }
  isFalse(t = Vo.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: { value: "false" },
      test(i) {
        return Mn(i) || i === !1;
      },
    });
  }
  default(t) {
    return super.default(t);
  }
  defined(t) {
    return super.defined(t);
  }
  optional() {
    return super.optional();
  }
  required(t) {
    return super.required(t);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(t) {
    return super.nonNullable(t);
  }
  strip(t) {
    return super.strip(t);
  }
}
pp.prototype = fp.prototype;
const Ih =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Sh(e) {
  const t = _o(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let i = 0;
  return (
    t.z !== "Z" && t.plusMinus !== void 0 && ((i = t.hourOffset * 60 + t.minuteOffset), t.plusMinus === "+" && (i = 0 - i)),
    Date.UTC(t.year, t.month, t.day, t.hour, t.minute + i, t.second, t.millisecond)
  );
}
function _o(e) {
  var t, i;
  const n = Ih.exec(e);
  return n
    ? {
        year: Sa(n[1]),
        month: Sa(n[2], 1) - 1,
        day: Sa(n[3], 1),
        hour: Sa(n[4]),
        minute: Sa(n[5]),
        second: Sa(n[6]),
        millisecond: n[7] ? Sa(n[7].substring(0, 3)) : 0,
        precision: (t = (i = n[7]) == null ? void 0 : i.length) != null ? t : void 0,
        z: n[8] || void 0,
        plusMinus: n[9] || void 0,
        hourOffset: Sa(n[10]),
        minuteOffset: Sa(n[11]),
      }
    : null;
}
function Sa(e, t = 0) {
  return Number(e) || t;
}
let kh =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  vh =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  Nh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  Ah = "^\\d{4}-\\d{2}-\\d{2}",
  Fh = "\\d{2}:\\d{2}:\\d{2}",
  wh = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
  Mh = new RegExp(`${Ah}T${Fh}(\\.\\d+)?${wh}$`),
  Oh = (e) => Mn(e) || e === e.trim(),
  Th = {}.toString();
function wn() {
  return new kl();
}
class kl extends Ei {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      },
    }),
      this.withMutation(() => {
        this.transform((t, i, n) => {
          if (!n.spec.coerce || n.isType(t) || Array.isArray(t)) return t;
          const r = t != null && t.toString ? t.toString() : t;
          return r === Th ? t : r;
        });
      });
  }
  required(t) {
    return super
      .required(t)
      .withMutation((i) => i.test({ message: t || pa.required, name: "required", skipAbsent: !0, test: (n) => !!n.length }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => ((t.tests = t.tests.filter((i) => i.OPTIONS.name !== "required")), t));
  }
  length(t, i = Ui.length) {
    return this.test({
      message: i,
      name: "length",
      exclusive: !0,
      params: { length: t },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      },
    });
  }
  min(t, i = Ui.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: { min: t },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      },
    });
  }
  max(t, i = Ui.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: i,
      params: { max: t },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      },
    });
  }
  matches(t, i) {
    let n = !1,
      r,
      a;
    return (
      i && (typeof i == "object" ? ({ excludeEmptyString: n = !1, message: r, name: a } = i) : (r = i)),
      this.test({
        name: a || "matches",
        message: r || Ui.matches,
        params: { regex: t },
        skipAbsent: !0,
        test: (s) => (s === "" && n) || s.search(t) !== -1,
      })
    );
  }
  email(t = Ui.email) {
    return this.matches(kh, { name: "email", message: t, excludeEmptyString: !0 });
  }
  url(t = Ui.url) {
    return this.matches(vh, { name: "url", message: t, excludeEmptyString: !0 });
  }
  uuid(t = Ui.uuid) {
    return this.matches(Nh, { name: "uuid", message: t, excludeEmptyString: !1 });
  }
  datetime(t) {
    let i = "",
      n,
      r;
    return (
      t && (typeof t == "object" ? ({ message: i = "", allowOffset: n = !1, precision: r = void 0 } = t) : (i = t)),
      this.matches(Mh, { name: "datetime", message: i || Ui.datetime, excludeEmptyString: !0 })
        .test({
          name: "datetime_offset",
          message: i || Ui.datetime_offset,
          params: { allowOffset: n },
          skipAbsent: !0,
          test: (a) => {
            if (!a || n) return !0;
            const s = _o(a);
            return s ? !!s.z : !1;
          },
        })
        .test({
          name: "datetime_precision",
          message: i || Ui.datetime_precision,
          params: { precision: r },
          skipAbsent: !0,
          test: (a) => {
            if (!a || r == null) return !0;
            const s = _o(a);
            return s ? s.precision === r : !1;
          },
        })
    );
  }
  ensure() {
    return this.default("").transform((t) => (t === null ? "" : t));
  }
  trim(t = Ui.trim) {
    return this.transform((i) => (i != null ? i.trim() : i)).test({ message: t, name: "trim", test: Oh });
  }
  lowercase(t = Ui.lowercase) {
    return this.transform((i) => (Mn(i) ? i : i.toLowerCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => Mn(i) || i === i.toLowerCase(),
    });
  }
  uppercase(t = Ui.uppercase) {
    return this.transform((i) => (Mn(i) ? i : i.toUpperCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => Mn(i) || i === i.toUpperCase(),
    });
  }
}
wn.prototype = kl.prototype;
let Rh = (e) => e != +e;
function xo() {
  return new Sd();
}
class Sd extends Ei {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Rh(t);
      },
    }),
      this.withMutation(() => {
        this.transform((t, i, n) => {
          if (!n.spec.coerce) return t;
          let r = t;
          if (typeof r == "string") {
            if (((r = r.replace(/\s/g, "")), r === "")) return NaN;
            r = +r;
          }
          return n.isType(r) || r === null ? r : parseFloat(r);
        });
      });
  }
  min(t, i = dr.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: { min: t },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(t);
      },
    });
  }
  max(t, i = dr.max) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: { max: t },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(t);
      },
    });
  }
  lessThan(t, i = dr.lessThan) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: { less: t },
      skipAbsent: !0,
      test(n) {
        return n < this.resolve(t);
      },
    });
  }
  moreThan(t, i = dr.moreThan) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: { more: t },
      skipAbsent: !0,
      test(n) {
        return n > this.resolve(t);
      },
    });
  }
  positive(t = dr.positive) {
    return this.moreThan(0, t);
  }
  negative(t = dr.negative) {
    return this.lessThan(0, t);
  }
  integer(t = dr.integer) {
    return this.test({ name: "integer", message: t, skipAbsent: !0, test: (i) => Number.isInteger(i) });
  }
  truncate() {
    return this.transform((t) => (Mn(t) ? t : t | 0));
  }
  round(t) {
    var i;
    let n = ["ceil", "floor", "round", "trunc"];
    if (((t = ((i = t) == null ? void 0 : i.toLowerCase()) || "round"), t === "trunc")) return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + n.join(", "));
    return this.transform((r) => (Mn(r) ? r : Math[t](r)));
  }
}
xo.prototype = Sd.prototype;
let mp = new Date(""),
  Bh = (e) => Object.prototype.toString.call(e) === "[object Date]";
function kd() {
  return new js();
}
class js extends Ei {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Bh(t) && !isNaN(t.getTime());
      },
    }),
      this.withMutation(() => {
        this.transform((t, i, n) =>
          !n.spec.coerce || n.isType(t) || t === null ? t : ((t = Sh(t)), isNaN(t) ? js.INVALID_DATE : new Date(t))
        );
      });
  }
  prepareParam(t, i) {
    let n;
    if (Dr.isRef(t)) n = t;
    else {
      let r = this.cast(t);
      if (!this._typeCheck(r)) throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = r;
    }
    return n;
  }
  min(t, i = Po.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: { min: t },
      skipAbsent: !0,
      test(r) {
        return r >= this.resolve(n);
      },
    });
  }
  max(t, i = Po.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: { max: t },
      skipAbsent: !0,
      test(r) {
        return r <= this.resolve(n);
      },
    });
  }
}
js.INVALID_DATE = mp;
kd.prototype = js.prototype;
kd.INVALID_DATE = mp;
function Dh(e, t = []) {
  let i = [],
    n = new Set(),
    r = new Set(t.map(([s, l]) => `${s}-${l}`));
  function a(s, l) {
    let o = Or.split(s)[0];
    n.add(o), r.has(`${l}-${o}`) || i.push([l, o]);
  }
  for (const s of Object.keys(e)) {
    let l = e[s];
    n.add(s), Dr.isRef(l) && l.isSibling ? a(l.path, s) : Pl(l) && "deps" in l && l.deps.forEach((o) => a(o, s));
  }
  return oh.array(Array.from(n), i).reverse();
}
function yu(e, t) {
  let i = 1 / 0;
  return (
    e.some((n, r) => {
      var a;
      if ((a = t.path) != null && a.includes(n)) return (i = r), !0;
    }),
    i
  );
}
function yp(e) {
  return (t, i) => yu(e, t) - yu(e, i);
}
const hp = (e, t, i) => {
  if (typeof e != "string") return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {}
  return i.isType(n) ? n : e;
};
function rl(e) {
  if ("fields" in e) {
    const t = {};
    for (const [i, n] of Object.entries(e.fields)) t[i] = rl(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = rl(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({ types: e.spec.types.map(rl) }) : "optional" in e ? e.optional() : e;
}
const Ch = (e, t) => {
  const i = [...Or.normalizePath(t)];
  if (i.length === 1) return i[0] in e;
  let n = i.pop(),
    r = Or.getter(Or.join(i), !0)(e);
  return !!(r && n in r);
};
let hu = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Uh(e, t) {
  let i = Object.keys(e.fields);
  return Object.keys(t).filter((n) => i.indexOf(n) === -1);
}
const qh = yp([]);
function Ps(e) {
  return new gp(e);
}
class gp extends Ei {
  constructor(t) {
    super({
      type: "object",
      check(i) {
        return hu(i) || typeof i == "function";
      },
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = qh),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        t && this.shape(t);
      });
  }
  _cast(t, i = {}) {
    var n;
    let r = super._cast(t, i);
    if (r === void 0) return this.getDefault(i);
    if (!this._typeCheck(r)) return r;
    let a = this.fields,
      s = (n = i.stripUnknown) != null ? n : this.spec.noUnknown,
      l = [].concat(
        this._nodes,
        Object.keys(r).filter((f) => !this._nodes.includes(f))
      ),
      o = {},
      d = Object.assign({}, i, { parent: o, __validating: i.__validating || !1 }),
      u = !1;
    for (const f of l) {
      let c = a[f],
        y = f in r;
      if (c) {
        let g,
          F = r[f];
        (d.path = (i.path ? `${i.path}.` : "") + f), (c = c.resolve({ value: F, context: i.context, parent: o }));
        let C = c instanceof Ei ? c.spec : void 0,
          O = C == null ? void 0 : C.strict;
        if (C != null && C.strip) {
          u = u || f in r;
          continue;
        }
        (g = !i.__validating || !O ? c.cast(r[f], d) : r[f]), g !== void 0 && (o[f] = g);
      } else y && !s && (o[f] = r[f]);
      (y !== f in o || o[f] !== r[f]) && (u = !0);
    }
    return u ? o : r;
  }
  _validate(t, i = {}, n, r) {
    let { from: a = [], originalValue: s = t, recursive: l = this.spec.recursive } = i;
    (i.from = [{ schema: this, value: s }, ...a]),
      (i.__validating = !0),
      (i.originalValue = s),
      super._validate(t, i, n, (o, d) => {
        if (!l || !hu(d)) {
          r(o, d);
          return;
        }
        s = s || d;
        let u = [];
        for (let f of this._nodes) {
          let c = this.fields[f];
          !c || Dr.isRef(c) || u.push(c.asNestedTest({ options: i, key: f, parent: d, parentPath: i.path, originalParent: s }));
        }
        this.runTests({ tests: u, value: d, originalValue: s, options: i }, n, (f) => {
          r(f.sort(this._sortErrors).concat(o), d);
        });
      });
  }
  clone(t) {
    const i = super.clone(t);
    return (
      (i.fields = Object.assign({}, this.fields)),
      (i._nodes = this._nodes),
      (i._excludedEdges = this._excludedEdges),
      (i._sortErrors = this._sortErrors),
      i
    );
  }
  concat(t) {
    let i = super.concat(t),
      n = i.fields;
    for (let [r, a] of Object.entries(this.fields)) {
      const s = n[r];
      n[r] = s === void 0 ? a : s;
    }
    return i.withMutation((r) => r.setFields(n, [...this._excludedEdges, ...t._excludedEdges]));
  }
  _getDefault(t) {
    if ("default" in this.spec) return super._getDefault(t);
    if (!this._nodes.length) return;
    let i = {};
    return (
      this._nodes.forEach((n) => {
        var r;
        const a = this.fields[n];
        let s = t;
        (r = s) != null && r.value && (s = Object.assign({}, s, { parent: s.value, value: s.value[n] })),
          (i[n] = a && "getDefault" in a ? a.getDefault(s) : void 0);
      }),
      i
    );
  }
  setFields(t, i) {
    let n = this.clone();
    return (n.fields = t), (n._nodes = Dh(t, i)), (n._sortErrors = yp(Object.keys(t))), i && (n._excludedEdges = i), n;
  }
  shape(t, i = []) {
    return this.clone().withMutation((n) => {
      let r = n._excludedEdges;
      return i.length && (Array.isArray(i[0]) || (i = [i]), (r = [...n._excludedEdges, ...i])), n.setFields(Object.assign(n.fields, t), r);
    });
  }
  partial() {
    const t = {};
    for (const [i, n] of Object.entries(this.fields)) t[i] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return rl(this);
  }
  pick(t) {
    const i = {};
    for (const n of t) this.fields[n] && (i[n] = this.fields[n]);
    return this.setFields(
      i,
      this._excludedEdges.filter(([n, r]) => t.includes(n) && t.includes(r))
    );
  }
  omit(t) {
    const i = [];
    for (const n of Object.keys(this.fields)) t.includes(n) || i.push(n);
    return this.pick(i);
  }
  from(t, i, n) {
    let r = Or.getter(t, !0);
    return this.transform((a) => {
      if (!a) return a;
      let s = a;
      return Ch(a, t) && ((s = Object.assign({}, a)), n || delete s[t], (s[i] = r(a))), s;
    });
  }
  json() {
    return this.transform(hp);
  }
  noUnknown(t = !0, i = Eo.noUnknown) {
    typeof t != "boolean" && ((i = t), (t = !0));
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: i,
      test(r) {
        if (r == null) return !0;
        const a = Uh(this.schema, r);
        return !t || a.length === 0 || this.createError({ params: { unknown: a.join(", ") } });
      },
    });
    return (n.spec.noUnknown = t), n;
  }
  unknown(t = !0, i = Eo.noUnknown) {
    return this.noUnknown(!t, i);
  }
  transformKeys(t) {
    return this.transform((i) => {
      if (!i) return i;
      const n = {};
      for (const r of Object.keys(i)) n[t(r)] = i[r];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(oo.camelCase);
  }
  snakeCase() {
    return this.transformKeys(oo.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => oo.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const i = (t ? this.resolve(t) : this).clone(),
      n = super.describe(t);
    n.fields = {};
    for (const [a, s] of Object.entries(i.fields)) {
      var r;
      let l = t;
      (r = l) != null && r.value && (l = Object.assign({}, l, { parent: l.value, value: l.value[a] })), (n.fields[a] = s.describe(l));
    }
    return n;
  }
}
Ps.prototype = gp.prototype;
function Ar(e) {
  return new bp(e);
}
class bp extends Ei {
  constructor(t) {
    super({
      type: "array",
      spec: { types: t },
      check(i) {
        return Array.isArray(i);
      },
    }),
      (this.innerType = void 0),
      (this.innerType = t);
  }
  _cast(t, i) {
    const n = super._cast(t, i);
    if (!this._typeCheck(n) || !this.innerType) return n;
    let r = !1;
    const a = n.map((s, l) => {
      const o = this.innerType.cast(s, Object.assign({}, i, { path: `${i.path || ""}[${l}]` }));
      return o !== s && (r = !0), o;
    });
    return r ? a : n;
  }
  _validate(t, i = {}, n, r) {
    var a;
    let s = this.innerType,
      l = (a = i.recursive) != null ? a : this.spec.recursive;
    i.originalValue != null && i.originalValue,
      super._validate(t, i, n, (o, d) => {
        var u;
        if (!l || !s || !this._typeCheck(d)) {
          r(o, d);
          return;
        }
        let f = new Array(d.length);
        for (let y = 0; y < d.length; y++) {
          var c;
          f[y] = s.asNestedTest({
            options: i,
            index: y,
            parent: d,
            parentPath: i.path,
            originalParent: (c = i.originalValue) != null ? c : t,
          });
        }
        this.runTests({ value: d, tests: f, originalValue: (u = i.originalValue) != null ? u : t, options: i }, n, (y) =>
          r(y.concat(o), d)
        );
      });
  }
  clone(t) {
    const i = super.clone(t);
    return (i.innerType = this.innerType), i;
  }
  json() {
    return this.transform(hp);
  }
  concat(t) {
    let i = super.concat(t);
    return (i.innerType = this.innerType), t.innerType && (i.innerType = i.innerType ? i.innerType.concat(t.innerType) : t.innerType), i;
  }
  of(t) {
    let i = this.clone();
    if (!Pl(t)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + Ra(t));
    return (i.innerType = t), (i.spec = Object.assign({}, i.spec, { types: t })), i;
  }
  length(t, i = nl.length) {
    return this.test({
      message: i,
      name: "length",
      exclusive: !0,
      params: { length: t },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      },
    });
  }
  min(t, i) {
    return (
      (i = i || nl.min),
      this.test({
        message: i,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(n) {
          return n.length >= this.resolve(t);
        },
      })
    );
  }
  max(t, i) {
    return (
      (i = i || nl.max),
      this.test({
        message: i,
        name: "max",
        exclusive: !0,
        params: { max: t },
        skipAbsent: !0,
        test(n) {
          return n.length <= this.resolve(t);
        },
      })
    );
  }
  ensure() {
    return this.default(() => []).transform((t, i) => (this._typeCheck(t) ? t : i == null ? [] : [].concat(i)));
  }
  compact(t) {
    let i = t ? (n, r, a) => !t(n, r, a) : (n) => !!n;
    return this.transform((n) => (n != null ? n.filter(i) : n));
  }
  describe(t) {
    const i = (t ? this.resolve(t) : this).clone(),
      n = super.describe(t);
    if (i.innerType) {
      var r;
      let a = t;
      (r = a) != null && r.value && (a = Object.assign({}, a, { parent: a.value, value: a.value[0] })),
        (n.innerType = i.innerType.describe(a));
    }
    return n;
  }
}
Ar.prototype = bp.prototype;
/**
 * filesize
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 10.1.2
 */ const Ph = "array",
  Vh = "bit",
  gu = "bits",
  Eh = "byte",
  bu = "bytes",
  Er = "",
  _h = "exponent",
  xh = "function",
  Iu = "iec",
  $h = "Invalid number",
  Gh = "Invalid rounding method",
  uo = "jedec",
  jh = "object",
  Su = ".",
  Wh = "round",
  Lh = "s",
  zh = "si",
  Hh = "kbit",
  Qh = "kB",
  Kh = " ",
  Jh = "string",
  Yh = "0",
  co = {
    symbol: {
      iec: {
        bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
        bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
      },
      jedec: {
        bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
        bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      },
    },
    fullform: {
      iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
      jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"],
    },
  };
function fs(
  e,
  {
    bits: t = !1,
    pad: i = !1,
    base: n = -1,
    round: r = 2,
    locale: a = Er,
    localeOptions: s = {},
    separator: l = Er,
    spacer: o = Kh,
    symbols: d = {},
    standard: u = Er,
    output: f = Jh,
    fullform: c = !1,
    fullforms: y = [],
    exponent: g = -1,
    roundingMethod: F = Wh,
    precision: C = 0,
  } = {}
) {
  let O = g,
    m = Number(e),
    I = [],
    S = 0,
    k = Er;
  u === zh ? ((n = 10), (u = uo)) : u === Iu || u === uo ? (n = 2) : n === 2 ? (u = Iu) : ((n = 10), (u = uo));
  const w = n === 10 ? 1e3 : 1024,
    q = c === !0,
    ce = m < 0,
    oe = Math[F];
  if (typeof e != "bigint" && isNaN(e)) throw new TypeError($h);
  if (typeof oe !== xh) throw new TypeError(Gh);
  if (
    (ce && (m = -m),
    (O === -1 || isNaN(O)) && ((O = Math.floor(Math.log(m) / Math.log(w))), O < 0 && (O = 0)),
    O > 8 && (C > 0 && (C += 8 - O), (O = 8)),
    f === _h)
  )
    return O;
  if (m === 0) (I[0] = 0), (k = I[1] = co.symbol[u][t ? gu : bu][O]);
  else {
    (S = m / (n === 2 ? Math.pow(2, O * 10) : Math.pow(1e3, O))), t && ((S = S * 8), S >= w && O < 8 && ((S = S / w), O++));
    const Ae = Math.pow(10, O > 0 ? r : 0);
    (I[0] = oe(S * Ae) / Ae),
      I[0] === w && O < 8 && g === -1 && ((I[0] = 1), O++),
      (k = I[1] = n === 10 && O === 1 ? (t ? Hh : Qh) : co.symbol[u][t ? gu : bu][O]);
  }
  if (
    (ce && (I[0] = -I[0]),
    C > 0 && (I[0] = I[0].toPrecision(C)),
    (I[1] = d[I[1]] || I[1]),
    a === !0
      ? (I[0] = I[0].toLocaleString())
      : a.length > 0
      ? (I[0] = I[0].toLocaleString(a, s))
      : l.length > 0 && (I[0] = I[0].toString().replace(Su, l)),
    i && Number.isInteger(I[0]) === !1 && r > 0)
  ) {
    const Ae = l || Su,
      K = I[0].toString().split(Ae),
      _ = K[1] || Er,
      x = _.length,
      R = r - x;
    I[0] = `${K[0]}${Ae}${_.padEnd(x + R, Yh)}`;
  }
  return (
    q && (I[1] = y[O] ? y[O] : co.fullform[u][O] + (t ? Vh : Eh) + (I[0] === 1 ? Er : Lh)),
    f === Ph ? I : f === jh ? { value: I[0], symbol: I[1], exponent: O, unit: k } : I.join(o)
  );
}
const Zh = U.createContext(void 0),
  Xh = () => {
    const e = ae.useContext(Zh);
    if (!e)
      throw new Error(`useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    return e;
  },
  yk = () => {
    const e = ae.useContext(Ip);
    if (!e)
      throw new Error(`useFieldsFromChildComponents hook called in context where no AutoFormFieldsFromChildComponents context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    return e;
  },
  Ip = U.createContext(void 0),
  eg = ({ children: e }) => {
    const t = ig(U.Children.count(e) > 0);
    return U.createElement(Ip.Provider, { value: t }, e);
  },
  tg = (e, t) => new Set([...e, ...t.fields]),
  ig = (e) => {
    const [t, i] = ae.useReducer(tg, new Set()),
      n = ae.useCallback(
        (r) => {
          e && i({ type: "add", fields: r });
        },
        [e, i]
      );
    return { hasChildren: e, fieldSet: t, registerFields: n };
  };
eg.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "AutoFormFieldsFromChildComponentsProvider",
  props: { children: { required: !0, tsType: { name: "ReactReactNode", raw: "React.ReactNode" }, description: "" } },
};
const ng = (e) => {
    const { model: t, fields: i } = Xh(),
      r = t && t.apiIdentifier ? t.apiIdentifier + "." + e : e,
      a = i.find((s) => s.path === r || ag(e, s));
    if (!a) throw new Error(`Field "${e}" not found in metadata`);
    return a;
  },
  ag = (e, t) => t.metadata.__typename !== "GadgetModelField" && t.path === e,
  rg = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"],
  hk = (e) => {
    const { field: t, control: i } = e,
      [n, r] = ae.useState(),
      { path: a, metadata: s } = ng(t),
      l = Dc(),
      {
        field: o,
        fieldState: { error: d },
      } = Gc({ control: i, name: a }),
      { setError: u, clearErrors: f } = Gs();
    ae.useEffect(() => {
      o.value && vl(o.value) && o.value.url && r(o.value.url);
    }, [o.value]);
    const c = ae.useMemo(
        () => !s.configuration.validations.find((O) => (O == null ? void 0 : O.specID) === mg),
        [s.configuration.validations]
      ),
      y = ae.useMemo(
        () => s.configuration.validations.find((O) => (O == null ? void 0 : O.__typename) === "GadgetRangeFieldValidation"),
        [s]
      ),
      g = ae.useMemo(() => {
        const O = s.configuration.validations.find((I) => (I == null ? void 0 : I.__typename) === "GadgetOnlyImageFileFieldValidation");
        if (!O) return;
        const m = [...rg];
        return O.allowAnimatedImages && m.push("image/gif"), { acceptedTypes: m, allowAnimatedImages: O.allowAnimatedImages };
      }, [s]),
      F = ae.useCallback(() => {
        o.onChange(null), r(void 0), f(a);
      }, [f, o, a]),
      C = ae.useCallback(
        async (O) => {
          if (O.length === 0) return;
          const m = O[0],
            I = { fileName: m.name, mimeType: m.type };
          if ((r(window.URL.createObjectURL(m)), y && ((y.min && m.size < y.min) || (y.max && m.size > y.max)))) {
            u(a, { message: Sp(y, m.size), type: "validate" }), o.onChange({ ...I, $invalidFileSize: m.size });
            return;
          }
          o.onChange({ ...I, $uploading: !0 });
          const { url: S, token: k } = await l.getDirectUploadToken();
          await fetch(S, { method: "PUT", headers: { "Content-Type": m.type }, body: m }), o.onChange({ directUploadToken: k, ...I });
        },
        [l, o, y, a, u]
      );
    return {
      fieldProps: o,
      isError: !!d,
      errorMessage: d == null ? void 0 : d.message,
      imageThumbnailURL: n,
      onFileUpload: C,
      clearFileValue: F,
      validations: { fileSize: y, onlyImages: g },
      metadata: s,
      canClearFileValue: c,
    };
  },
  sg = (e, t) => {
    if (e.min) return e.max ? t.inRange(e.min, e.max) : t.min(e.min);
    if (e.max) return t.max(e.max);
  },
  Sp = (e, t) => {
    let i = sg(e, {
      inRange: (n, r) => `must be a file between ${fs(n)} and ${fs(r)} big`,
      max: (n) => `must be a file smaller than ${fs(n)}`,
      min: (n) => `must be a file larger than than ${fs(n)}`,
    });
    return i && (i = `must be a file ${i}, and this file's size is ${fs(t)}.`), i;
  },
  lg = (e, t = [], i = "") => {
    let n;
    const r = i ? `${i}.${e.apiIdentifier}` : e.apiIdentifier;
    switch (e.fieldType) {
      case j.Boolean: {
        n = pp();
        break;
      }
      case j.Code:
      case j.Password:
      case j.EncryptedString:
      case j.Color:
      case j.String: {
        n = wn();
        break;
      }
      case j.DateTime: {
        n = kd();
        break;
      }
      case j.Email: {
        n = wn().email();
        break;
      }
      case j.Url: {
        n = wn().url();
        break;
      }
      case j.Enum: {
        const a = e.configuration;
        if (a.allowOther) n = a.allowMultiple ? Ar(wn()) : wn();
        else {
          const s = wn().oneOf(a.options.map((l) => l.name));
          n = a.allowMultiple ? Ar(s) : s;
        }
        break;
      }
      case j.File: {
        n = al().test("is-uploading", function (a) {
          const { path: s, createError: l } = this;
          return vl(a) && a.$uploading ? l({ path: s, message: "file is still uploading" }) : !0;
        });
        break;
      }
      case j.Number: {
        n = xo();
        break;
      }
      case j.Id: {
        n = wn();
        break;
      }
      case j.Json: {
        n = al().test("is-valid-json", function (a) {
          if (typeof a > "u") return !0;
          const { path: s, createError: l } = this;
          return gg(a) ? l({ path: s, message: a.error.message }) : !0;
        });
        break;
      }
      case j.RecordState:
      case j.Any: {
        n = al();
        break;
      }
      case j.Money: {
        n = wn();
        break;
      }
      case j.Object: {
        const a = e.configuration;
        n = bg(a.fields, t, r);
        break;
      }
      case j.RichText: {
        n = Ps({});
        break;
      }
      case j.RoleAssignments: {
        n = Ar(wn());
        break;
      }
      case j.Vector: {
        n = Ar(xo());
        break;
      }
      case j.BelongsTo:
      case j.HasOne: {
        n = Ps();
        break;
      }
      case j.HasManyThrough:
      case j.HasMany: {
        n = Ar();
        break;
      }
      case j.Array: {
        n = Ar();
        break;
      }
      default:
        throw new Error(`unknown field type ${e.fieldType} for validator generation`);
    }
    return (n = og(e, n, t.includes(r))), n;
  },
  og = (e, t, i) => {
    if (
      (e.requiredArgumentForInput && i
        ? (e.fieldType === j.RichText && (t = Ps({ markdown: wn().required() })), (t = t.required(`${e.name} is required`)))
        : (t = t.nullable().default(null)),
      !i)
    )
      return t;
    for (const n of e.configuration.validations)
      switch (n == null ? void 0 : n.__typename) {
        case "GadgetRangeFieldValidation": {
          const { min: r, max: a } = n;
          t instanceof kl || t instanceof Sd
            ? (r && (t = t.min(r)), a && (t = t.max(a)))
            : e.fieldType === j.File &&
              t instanceof Sl &&
              (t = t.test("is-valid-file-size", function (s) {
                const { path: l, createError: o } = this;
                return vl(s) && s.$invalidFileSize ? o({ path: l, message: Sp(n, s.$invalidFileSize) }) : !0;
              }));
          break;
        }
        case "GadgetRegexFieldValidation": {
          const r = n;
          r.pattern && t instanceof kl && (t = t.matches(new RegExp(r.pattern)));
          break;
        }
        case "GadgetOnlyImageFileFieldValidation": {
          t instanceof Sl &&
            (t = t.test("is-valid-image-file", function (r) {
              const { allowAnimatedImages: a } = n;
              if (typeof r > "u") return !0;
              const { path: s, createError: l } = this;
              if (vl(r)) {
                if (!r.mimeType.startsWith("image/"))
                  return l({ path: s, message: `must be a valid image file type; file type was detected as "${r.mimeType}"` });
                if (!a && r.mimeType === "image/gif") return l({ path: s, message: "must not be an animated image file" });
              }
              return !0;
            }));
          break;
        }
        case "GadgetGenericFieldValidation": {
          const { specID: r } = n;
          t = dg(t, r);
          break;
        }
      }
    return t;
  },
  dg = (e, t) => {
    switch (t) {
      case cg:
        return e.matches(yg, "Must be a color");
      case ug:
        return e.email();
      case pg:
        return e.matches(hg, "Must contain at least 8 characters, 1 number and 1 special character");
      case fg:
        return e.url();
      default:
        return e;
    }
  },
  ug = "gadget/validation/email-address",
  cg = "gadget/validation/color",
  pg = "gadget/validation/password",
  fg = "gadget/validation/url",
  mg = "gadget/validation/required",
  yg = new RegExp(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/),
  hg = new RegExp(`^(?=.*\\d)(?=.*[!@#$%^&*\\-=_+\\[\\]{}|;:'",.<>/?])(.{8,})$`),
  gg = (e) => e && typeof e == "object" && "$failedParse" in e,
  bg = (e, t = [], i = "") => {
    const n = {};
    for (const r of e) n[r.apiIdentifier] = lg(r, t, i);
    return Ps(n);
  },
  vl = (e) => typeof e == "object" && e !== null && "mimeType" in e && "fileName" in e,
  gk = (e, t) => {
    const i = Iy(t),
      n = ae.useMemo(
        () => Tr(e.findMany.operationName, e.findMany.defaultSelection, e.findMany.modelApiIdentifier, i, e.findMany.namespace),
        [e, i]
      ),
      [r, a] = Cl(gy(n, t));
    return [
      ae.useMemo(() => {
        const l = Ba([e.findMany.operationName], e.findMany.namespace);
        let o = r.data;
        if (o) {
          const u = rs(r.data, l);
          if (u) {
            const f = Cs(r, u);
            o = ss.boot(e, f, u);
          }
        }
        const d = ma.errorIfDataAbsent(r, l, t == null ? void 0 : t.pause);
        return { ...r, data: o, error: d };
      }, [e, t == null ? void 0 : t.pause, r]),
      a,
    ];
  },
  Yi = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Dn = "session";
let Ig = class {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "session", i, Yi, Dn, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: Dn,
        defaultSelection: Yi,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "session", i, Yi, Dn, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "session", modelApiIdentifier: "session", defaultSelection: Yi }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "sessions", Yi, "session", i), {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: Dn,
        defaultSelection: Yi,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "sessions", Yi, Dn, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "sessions", modelApiIdentifier: Dn, defaultSelection: Yi }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "sessions", Yi, Dn, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "sessions", modelApiIdentifier: Dn, defaultSelection: Yi }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "sessions", "id", i, Yi, Dn, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "sessions",
        modelApiIdentifier: Dn,
        defaultSelection: Yi,
      }));
  }
};
function Nl(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
const lt = {
    __typename: !0,
    attachment: { mimeType: !0, url: !0 },
    body: { markdown: !0, truncatedHTML: !0 },
    createdAt: !0,
    id: !0,
    publishedAt: !0,
    title: !0,
    updatedAt: !0,
  },
  Ie = "post";
async function Sg(e, t) {
  const i = Nl(this.create, void 0, e);
  return await D(this, "createPost", lt, Ie, Ie, !1, { post: { value: i.post, required: !1, type: "CreatePostInput" } }, t, null, !1);
}
async function kg(e, t, i) {
  const n = Nl(this.update, e, t);
  return await D(
    this,
    "updatePost",
    lt,
    Ie,
    Ie,
    !1,
    { id: { value: e, required: !0, type: "GadgetID" }, post: { value: n.post, required: !1, type: "UpdatePostInput" } },
    i,
    null,
    !1
  );
}
async function vg(e, t) {
  return await D(this, "deletePost", null, Ie, Ie, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
class Ng {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "post", i, lt, Ie, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "post",
        modelApiIdentifier: Ie,
        defaultSelection: lt,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "post", i, lt, Ie, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "post", modelApiIdentifier: "post", defaultSelection: lt }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "posts", lt, "post", i), {
        type: "findMany",
        operationName: "posts",
        modelApiIdentifier: Ie,
        defaultSelection: lt,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "posts", lt, Ie, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "posts", modelApiIdentifier: Ie, defaultSelection: lt }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "posts", lt, Ie, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "posts", modelApiIdentifier: Ie, defaultSelection: lt }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "posts", "id", i, lt, Ie, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "posts",
        modelApiIdentifier: Ie,
        defaultSelection: lt,
      })),
      (this.create = Object.assign(Sg, {
        type: "action",
        operationName: "createPost",
        namespace: null,
        modelApiIdentifier: Ie,
        modelSelectionField: Ie,
        isBulk: !1,
        defaultSelection: lt,
        variables: { post: { required: !1, type: "CreatePostInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkCreate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => Nl(this.create, void 0, a));
          return await D(
            this,
            "bulkCreatePosts",
            lt,
            "post",
            "posts",
            !0,
            { inputs: { value: r, ...this.bulkCreate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkCreatePosts",
          namespace: null,
          modelApiIdentifier: Ie,
          modelSelectionField: "posts",
          isBulk: !0,
          defaultSelection: lt,
          variables: { inputs: { required: !0, type: "[BulkCreatePostsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.update = Object.assign(kg, {
        type: "action",
        operationName: "updatePost",
        namespace: null,
        modelApiIdentifier: Ie,
        modelSelectionField: Ie,
        isBulk: !1,
        defaultSelection: lt,
        variables: { id: { required: !0, type: "GadgetID" }, post: { required: !1, type: "UpdatePostInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkUpdate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => Nl(this.update, void 0, a));
          return await D(
            this,
            "bulkUpdatePosts",
            lt,
            "post",
            "posts",
            !0,
            { inputs: { value: r, ...this.bulkUpdate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkUpdatePosts",
          namespace: null,
          modelApiIdentifier: Ie,
          modelSelectionField: "posts",
          isBulk: !0,
          defaultSelection: lt,
          variables: { inputs: { required: !0, type: "[BulkUpdatePostsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.delete = Object.assign(vg, {
        type: "action",
        operationName: "deletePost",
        namespace: null,
        modelApiIdentifier: Ie,
        modelSelectionField: Ie,
        isBulk: !1,
        defaultSelection: null,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkDelete = Object.assign(
        async (i, n) =>
          await D(this, "bulkDeletePosts", null, "post", "posts", !0, { ids: { value: i, ...this.bulkDelete.variables.ids } }, n, null, !1),
        {
          type: "action",
          operationName: "bulkDeletePosts",
          namespace: null,
          modelApiIdentifier: Ie,
          modelSelectionField: "posts",
          isBulk: !0,
          defaultSelection: null,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      ));
  }
}
const ku = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, updatedAt: !0 };
let Ag = class {
  constructor(t) {
    (this.connection = t),
      (this.get = Object.assign(async (i) => await ie(this, "currentSession", void 0, ku, "session", i), {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: ku,
      }));
  }
};
var kp;
const vu = "production",
  Fg = "development",
  wg = Symbol.for("gadget/modelRelationships"),
  Mg = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Og = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://app-with-file-fields--development.gadget.app/",
      production: "https://app-with-file-fields.gadget.app/",
    }),
      (this.applicationId = "121756"),
      (this[kp] = { session: {}, post: {} }),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? Mg() ?? Fg).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://app-with-file-fields${this.environment == vu ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== vu) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.session = new Ig(this.connection)),
      (this.post = new Ng(this.connection)),
      (this.currentSession = new Ag(this.connection)),
      (this.internal = {
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        post: new N("post", this.connection, { pluralApiIdentifier: "posts", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
kp = wg;
const Zi = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Cn = "session";
let Tg = class {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "session", i, Zi, Cn, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: Cn,
        defaultSelection: Zi,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "session", i, Zi, Cn, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "session", modelApiIdentifier: "session", defaultSelection: Zi }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "sessions", Zi, "session", i), {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: Cn,
        defaultSelection: Zi,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "sessions", Zi, Cn, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "sessions", modelApiIdentifier: Cn, defaultSelection: Zi }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "sessions", Zi, Cn, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "sessions", modelApiIdentifier: Cn, defaultSelection: Zi }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "sessions", "id", i, Zi, Cn, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "sessions",
        modelApiIdentifier: Cn,
        defaultSelection: Zi,
      }));
  }
};
const Nu = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, updatedAt: !0 };
let Rg = class {
  constructor(t) {
    (this.connection = t),
      (this.get = Object.assign(async (i) => await ie(this, "currentSession", void 0, Nu, "session", i), {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: Nu,
      }));
  }
};
var vp;
const Au = "production",
  Bg = "development",
  Dg = Symbol.for("gadget/modelRelationships"),
  Cg = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Ug = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://app-with-no-user-model--development.gadget.app/",
      production: "https://app-with-no-user-model.gadget.app/",
    }),
      (this.applicationId = "45852"),
      (this[vp] = { session: {} }),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? Cg() ?? Bg).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://app-with-no-user-model${this.environment == Au ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Au) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.session = new Tg(this.connection)),
      (this.currentSession = new Rg(this.connection)),
      (this.internal = { session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }) });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
vp = Dg;
const Vl = (e, t, i, n) => {
  const r = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a
          ? (r.prototype[a.functionName] = Object.assign(async function (s, l) {
              return await Xt(this, a.operationName, a.findByField, s, i, e, l);
            }, a))
          : (r.prototype[a.type] = Object.assign(async function (s, l) {
              const o = await ie(this, e, s, i, e, l, a.type != "maybeFindOne");
              return o.isEmpty() ? null : o;
            }, a));
        break;
      }
      case "findMany": {
        r.prototype.findMany = Object.assign(async function (s) {
          return await H(this, t, i, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        r.prototype[a.type] = Object.assign(async function (s) {
          const l = await H(this, t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.type != "maybeFindFirst");
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        r.prototype.get = Object.assign(async function (s) {
          return await ie(this, a.operationName, void 0, i, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          r.prototype[a.functionName] = Object.assign(async function (l, o) {
            let d;
            return (
              s
                ? (d = { ids: { ...a.variables.ids, value: l } })
                : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Np(this[a.singleActionFunctionName], void 0, u)) } }),
              await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
            );
          }, a);
        } else {
          const s = !!a.variables.id,
            l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
          r.prototype[a.functionName] = Object.assign(async function (...o) {
            const [d, u] = qg(a, s, l, o);
            return await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !1, d, u, a.namespace, a.hasReturnType);
          }, a);
        }
        break;
      }
    }
  return r;
};
function Np(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function qg(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Np(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
const on = { __typename: !0, id: !0, state: !0, createdAt: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  ei = "session",
  fr = "sessions",
  Pg = Vl(ei, fr, on, [
    { type: "findOne", operationName: ei, modelApiIdentifier: ei, findByVariableName: "id", defaultSelection: on },
    { type: "maybeFindOne", operationName: ei, modelApiIdentifier: ei, findByVariableName: "id", defaultSelection: on },
    { type: "findMany", operationName: fr, modelApiIdentifier: ei, defaultSelection: on },
    { type: "findFirst", operationName: fr, modelApiIdentifier: ei, defaultSelection: on },
    { type: "maybeFindFirst", operationName: fr, modelApiIdentifier: ei, defaultSelection: on },
    {
      type: "findOne",
      operationName: fr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ei,
      defaultSelection: on,
    },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: ei,
      modelSelectionField: ei,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !1, type: "String" }, password: { required: !1, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: on,
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
      modelApiIdentifier: ei,
      modelSelectionField: fr,
      namespace: "currentSession",
      variables: { inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" } },
      defaultSelection: on,
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: ei,
      modelSelectionField: ei,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: on,
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
      modelApiIdentifier: ei,
      modelSelectionField: fr,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: on,
    },
  ]),
  si = { __typename: !0, id: !0, createdAt: !0, email: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Oe = "user",
  Un = "users",
  Vg = Vl(Oe, Un, si, [
    { type: "findOne", operationName: Oe, modelApiIdentifier: Oe, findByVariableName: "id", defaultSelection: si },
    { type: "maybeFindOne", operationName: Oe, modelApiIdentifier: Oe, findByVariableName: "id", defaultSelection: si },
    { type: "findMany", operationName: Un, modelApiIdentifier: Oe, defaultSelection: si },
    { type: "findFirst", operationName: Un, modelApiIdentifier: Oe, defaultSelection: si },
    { type: "maybeFindFirst", operationName: Un, modelApiIdentifier: Oe, defaultSelection: si },
    {
      type: "findOne",
      operationName: Un,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Oe,
      defaultSelection: si,
    },
    {
      type: "findOne",
      operationName: Un,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: Oe,
      defaultSelection: si,
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: Oe,
      modelSelectionField: Oe,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: si,
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
      modelApiIdentifier: Oe,
      modelSelectionField: Un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: si,
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Oe,
      modelSelectionField: Oe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: si,
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
      modelApiIdentifier: Oe,
      modelSelectionField: Un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: si,
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Oe,
      modelSelectionField: Oe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Oe,
      modelSelectionField: Un,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Oe,
      modelSelectionField: Oe,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: si,
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
      modelApiIdentifier: Oe,
      modelSelectionField: Un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: si,
    },
  ]),
  Gi = { __typename: !0, id: !0, createdAt: !0, name: !0, updatedAt: !0 },
  Ye = "widget",
  ka = "widgets",
  Eg = Vl(Ye, ka, Gi, [
    { type: "findOne", operationName: Ye, modelApiIdentifier: Ye, findByVariableName: "id", defaultSelection: Gi },
    { type: "maybeFindOne", operationName: Ye, modelApiIdentifier: Ye, findByVariableName: "id", defaultSelection: Gi },
    { type: "findMany", operationName: ka, modelApiIdentifier: Ye, defaultSelection: Gi },
    { type: "findFirst", operationName: ka, modelApiIdentifier: Ye, defaultSelection: Gi },
    { type: "maybeFindFirst", operationName: ka, modelApiIdentifier: Ye, defaultSelection: Gi },
    {
      type: "findOne",
      operationName: ka,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ye,
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "createWidget",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ye,
      modelSelectionField: Ye,
      isBulk: !1,
      isDeleter: !1,
      variables: { widget: { required: !1, type: "CreateWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "bulkCreateWidgets",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ye,
      modelSelectionField: ka,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateWidgetsInput!]" } },
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "updateWidget",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ye,
      modelSelectionField: Ye,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, widget: { required: !1, type: "UpdateWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "bulkUpdateWidgets",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ye,
      modelSelectionField: ka,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateWidgetsInput!]" } },
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "deleteWidget",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ye,
      modelSelectionField: Ye,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteWidgets",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ye,
      modelSelectionField: ka,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "flipDownWidget",
      functionName: "flipDown",
      namespace: null,
      modelApiIdentifier: Ye,
      modelSelectionField: Ye,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: Gi,
    },
    {
      type: "action",
      operationName: "bulkFlipDownWidgets",
      functionName: "bulkFlipDown",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "flipDown",
      modelApiIdentifier: Ye,
      modelSelectionField: ka,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: Gi,
    },
  ]),
  Fu = { __typename: !0, id: !0, state: !0, createdAt: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  wu = "session",
  _g = "sessions",
  xg = Vl(wu, _g, Fu, [{ type: "get", operationName: "currentSession", defaultSelection: Fu, modelApiIdentifier: wu }]);
var Ap;
const Mu = "production",
  $g = "development",
  Gg = Symbol.for("gadget/modelRelationships"),
  jg = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Wg = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://bulk-actions-test--development.gadget.app/",
      production: "https://bulk-actions-test.gadget.app/",
    }),
      (this.applicationId = "6681"),
      (this[Ap] = {
        session: { user: { type: "BelongsTo", model: "user" } },
        user: { sessions: { type: "HasMany", model: "session" } },
        widget: {},
      }),
      (this.flipAll = Object.assign(
        async (a) => await ls(this.connection, "flipAll", { why: { value: a.why, required: !1, type: "String" } }, null),
        { type: "globalAction", operationName: "flipAll", namespace: null, variables: { why: { required: !1, type: "String" } } }
      )),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? jg() ?? $g).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://bulk-actions-test${this.environment == Mu ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Mu) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.session = new Pg(this.connection)),
      (this.user = new Vg(this.connection)),
      (this.widget = new Eg(this.connection)),
      (this.currentSession = new xg(this.connection)),
      (this.internal = {
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifier: !1 }),
        widget: new N("widget", this.connection, { pluralApiIdentifier: "widgets", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
Ap = Gg;
const vd = (e, t, i, n) => {
  const r = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a
          ? (r.prototype[a.functionName] = Object.assign(async function (s, l) {
              return await Xt(this, a.operationName, a.findByField, s, i, e, l);
            }, a))
          : (r.prototype[a.type] = Object.assign(async function (s, l) {
              const o = await ie(this, e, s, i, e, l, a.type != "maybeFindOne");
              return o.isEmpty() ? null : o;
            }, a));
        break;
      }
      case "findMany": {
        r.prototype.findMany = Object.assign(async function (s) {
          return await H(this, t, i, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        r.prototype[a.type] = Object.assign(async function (s) {
          const l = await H(this, t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.type != "maybeFindFirst");
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        r.prototype.get = Object.assign(async function (s) {
          return await ie(this, a.operationName, void 0, i, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          r.prototype[a.functionName] = Object.assign(async function (l, o) {
            let d;
            return (
              s
                ? (d = { ids: { ...a.variables.ids, value: l } })
                : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Fp(this[a.singleActionFunctionName], void 0, u)) } }),
              await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
            );
          }, a);
        } else {
          const s = !!a.variables.id,
            l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
          r.prototype[a.functionName] = Object.assign(async function (...o) {
            const [d, u] = Lg(a, s, l, o);
            return await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !1, d, u, a.namespace, a.hasReturnType);
          }, a);
        }
        break;
      }
    }
  return r;
};
function Fp(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function Lg(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Fp(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
const mr = { __typename: !0, id: !0, state: !0, createdAt: !0, updatedAt: !0 },
  va = "session",
  ms = "sessions",
  zg = vd(va, ms, mr, [
    { type: "findOne", operationName: va, modelApiIdentifier: va, findByVariableName: "id", defaultSelection: mr },
    { type: "maybeFindOne", operationName: va, modelApiIdentifier: va, findByVariableName: "id", defaultSelection: mr },
    { type: "findMany", operationName: ms, modelApiIdentifier: va, defaultSelection: mr },
    { type: "findFirst", operationName: ms, modelApiIdentifier: va, defaultSelection: mr },
    { type: "maybeFindFirst", operationName: ms, modelApiIdentifier: va, defaultSelection: mr },
    {
      type: "findOne",
      operationName: ms,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: va,
      defaultSelection: mr,
    },
  ]),
  me = {
    __typename: !0,
    id: !0,
    createdAt: !0,
    email: !0,
    emailVerificationToken: !0,
    emailVerificationTokenExpiration: !0,
    emailVerified: !0,
    firstName: !0,
    googleImageUrl: !0,
    googleProfileId: !0,
    lastName: !0,
    lastSignedIn: !0,
    resetPasswordToken: !0,
    resetPasswordTokenExpiration: !0,
    roles: { key: !0, name: !0 },
    updatedAt: !0,
  },
  W = "user",
  $t = "users",
  Hg = vd(W, $t, me, [
    { type: "findOne", operationName: W, modelApiIdentifier: W, findByVariableName: "id", defaultSelection: me },
    { type: "maybeFindOne", operationName: W, modelApiIdentifier: W, findByVariableName: "id", defaultSelection: me },
    { type: "findMany", operationName: $t, modelApiIdentifier: W, defaultSelection: me },
    { type: "findFirst", operationName: $t, modelApiIdentifier: W, defaultSelection: me },
    { type: "maybeFindFirst", operationName: $t, modelApiIdentifier: W, defaultSelection: me },
    {
      type: "findOne",
      operationName: $t,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: W,
      defaultSelection: me,
    },
    {
      type: "findOne",
      operationName: $t,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: W,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkSignUpUsers",
      functionName: "bulkSignUp",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      singleActionFunctionName: "signUp",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "signInUser",
      functionName: "signIn",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkSignInUsers",
      functionName: "bulkSignIn",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "signIn",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignInUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "signOutUser",
      functionName: "signOut",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "SignOutUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkSignOutUsers",
      functionName: "bulkSignOut",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "signOut",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignOutUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: me,
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
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "deleteUser",
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
      defaultSelection: null,
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
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "sendVerifyEmailUser",
      functionName: "sendVerifyEmail",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkSendVerifyEmailUsers",
      functionName: "bulkSendVerifyEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      singleActionFunctionName: "sendVerifyEmail",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSendVerifyEmailUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "verifyEmailUser",
      functionName: "verifyEmail",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { code: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkVerifyEmailUsers",
      functionName: "bulkVerifyEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      singleActionFunctionName: "verifyEmail",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkVerifyEmailUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "sendResetPasswordUser",
      functionName: "sendResetPassword",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkSendResetPasswordUsers",
      functionName: "bulkSendResetPassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      singleActionFunctionName: "sendResetPassword",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSendResetPasswordUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "resetPasswordUser",
      functionName: "resetPassword",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: { password: { required: !0, type: "String" }, code: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkResetPasswordUsers",
      functionName: "bulkResetPassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      singleActionFunctionName: "resetPassword",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkResetPasswordUsersInput!]" } },
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "changePasswordUser",
      functionName: "changePassword",
      namespace: null,
      modelApiIdentifier: W,
      modelSelectionField: W,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        currentPassword: { required: !0, type: "String" },
        newPassword: { required: !0, type: "String" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: me,
    },
    {
      type: "action",
      operationName: "bulkChangePasswordUsers",
      functionName: "bulkChangePassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "changePassword",
      modelApiIdentifier: W,
      modelSelectionField: $t,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkChangePasswordUsersInput!]" } },
      defaultSelection: me,
    },
  ]),
  Ou = { __typename: !0, id: !0, state: !0, createdAt: !0, updatedAt: !0 },
  Tu = "session",
  Qg = "sessions",
  Kg = vd(Tu, Qg, Ou, [{ type: "get", operationName: "currentSession", defaultSelection: Ou, modelApiIdentifier: Tu }]);
var wp;
const Ru = "production",
  Jg = "development",
  Yg = Symbol.for("gadget/modelRelationships"),
  Zg = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Xg = class {
  constructor(t) {
    var r;
    (this.apiRoots = { development: "https://full-auth--development.gadget.app/", production: "https://full-auth.gadget.app/" }),
      (this.applicationId = "66538"),
      (this[wp] = { session: { user: { type: "BelongsTo", model: "user" } }, user: {} }),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? Zg() ?? Jg).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://full-auth${this.environment == Ru ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Ru) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.session = new zg(this.connection)),
      (this.user = new Hg(this.connection)),
      (this.currentSession = new Kg(this.connection)),
      (this.internal = {
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
wp = Yg;
const eb = (e, t = !1) => {
    const i = { ...e };
    return t && (i.__typename = !0), i;
  },
  Mp = (e) => Object.fromEntries(Object.entries(e).map(([t, i]) => [t, ee(i)])),
  Op = (e, t, i, n, r) => {
    let a = { [e]: Ut(i ? Mp(i) : {}, eb(n ?? t, !0)) };
    return (
      r && (a = Tp(r, a)),
      i ? xt({ type: "query", name: e, fields: a }) : { query: uc({ type: "query", name: e, fields: a }), variables: {} }
    );
  },
  Bu = async (e, t, i, n, r, a) => {
    const { query: s, variables: l } = Op(t, i, n, r, a),
      o = await e.currentClient.query(s, l),
      d = Rp([t], a);
    return rn(o, d);
  },
  tb = (e, t, i, n) => {
    const r = t,
      a = { query: ee({ type: "String", value: e, required: !0 }) };
    i && (a.variables = ee({ type: "JSONObject", value: i }));
    let s = { [r]: Ut(Mp(a)) };
    return n && (s = Tp(n, s)), xt({ type: "query", name: r, fields: s });
  },
  ib = async (e, t, i, n, r) => {
    const { query: a, variables: s } = tb(i, t, n, r),
      l = await e.currentClient.query(a, s),
      o = Rp([t], r);
    return rn(l, o);
  };
function Tp(e, t) {
  if (!e) return t;
  if ((Array.isArray(e) || (e = [e]), e)) for (let i = e.length - 1; i >= 0; i--) t = { [e[i]]: t };
  return t;
}
const Rp = (e, t) => (t && e.unshift(...(Array.isArray(t) ? t : [t])), e),
  Y = (e, t, i, n) => {
    const r = class {
      constructor(a) {
        this.connection = a;
      }
    };
    Object.defineProperty(r, "name", { value: `${e}Manager` });
    for (const a of n)
      switch (a.type) {
        case "maybeFindOne":
        case "findOne": {
          const s = !a.type.startsWith("maybe");
          "functionName" in a
            ? (r.prototype[a.functionName] = Object.assign(
                function (l, o) {
                  return Xt(this, a.operationName, a.findByField, l, i, e, o, s, a.namespace);
                },
                a,
                {
                  plan: function (l, o, d) {
                    return id(a.operationName, l, o, i, e, d, a.namespace);
                  },
                }
              ))
            : (r.prototype[a.type] = Object.assign(
                function (l, o) {
                  const d = ie(this, e, l, i, e, o, s, a.namespace);
                  return Du(d, (u) => (u.isEmpty() ? null : u));
                },
                a,
                {
                  plan: function (l, o) {
                    return td(a.operationName, l, i, e, o, a.namespace);
                  },
                }
              ));
          break;
        }
        case "findMany": {
          r.prototype.findMany = Object.assign(
            function (s) {
              return H(this, t, i, e, s, void 0, a.namespace);
            },
            a,
            {
              plan: function (s) {
                return Tr(t, i, e, s, a.namespace);
              },
            }
          );
          break;
        }
        case "maybeFindFirst":
        case "findFirst": {
          r.prototype[a.type] = Object.assign(
            function (s) {
              const l = H(
                this,
                t,
                i,
                e,
                { ...s, first: 1, last: void 0, before: void 0, after: void 0 },
                a.type != "maybeFindFirst",
                a.namespace
              );
              return Du(l, (o) => (o == null ? void 0 : o[0]) ?? null);
            },
            a,
            {
              plan: function (s) {
                return Tr(t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.namespace);
              },
            }
          );
          break;
        }
        case "get": {
          r.prototype.get = Object.assign(function (s) {
            return ie(this, a.operationName, void 0, i, e, s, void 0, a.namespace);
          }, a);
          break;
        }
        case "action": {
          if (a.isBulk) {
            const s = !!a.variables.ids;
            r.prototype[a.functionName] = Object.assign(
              async function (l, o) {
                let d;
                return (
                  s
                    ? (d = { ids: { ...a.variables.ids, value: l } })
                    : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Bp(this[a.singleActionFunctionName], void 0, u)) } }),
                  await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
                );
              },
              a,
              {
                plan: function (l) {
                  return Us(
                    a.operationName,
                    a.isDeleter ? null : a.defaultSelection,
                    e,
                    a.modelSelectionField,
                    a.variables,
                    l,
                    a.namespace,
                    !0,
                    a.hasReturnType
                  );
                },
              }
            );
          } else {
            const s = !!a.variables.id,
              l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
            r.prototype[a.functionName] = Object.assign(
              async function (...o) {
                const [d, u] = sb(a, s, l, o);
                return await D(
                  this,
                  a.operationName,
                  a.isDeleter ? null : i,
                  e,
                  a.modelSelectionField,
                  !1,
                  d,
                  u,
                  a.namespace,
                  a.hasReturnType
                );
              },
              a,
              {
                plan: function (o) {
                  return Us(
                    a.operationName,
                    a.isDeleter ? null : a.defaultSelection,
                    e,
                    a.modelSelectionField,
                    a.variables,
                    o,
                    a.namespace,
                    !1,
                    a.hasReturnType
                  );
                },
              }
            );
          }
          break;
        }
        case "stubbedAction": {
          r.prototype[a.functionName] = Object.assign(function (...s) {
            throw (Dp(a), new Error(a.errorMessage));
          }, a);
          break;
        }
        case "computedView":
          r.prototype[a.operationName] = rb(a) ? ab(a) : nb(a);
      }
    return r;
  },
  es = (e, t) =>
    t.type == "stubbedAction"
      ? Object.assign((...i) => {
          throw (Dp(t), new Error(t.errorMessage));
        }, t)
      : Object.assign(
          async (i = {}) => {
            const n = {};
            for (const [r, a] of Object.entries(t.variables)) n[r] = { value: i[r], ...a };
            return await ls(e.connection, t.operationName, n, t.namespace);
          },
          t,
          {
            plan: function (i, n, r) {
              return rd(i, n, r);
            },
          }
        );
function nb(e) {
  const t = e.variables
    ? async function (i = {}, n) {
        let r;
        if (e.variables) {
          r = {};
          for (const [a, s] of Object.entries(e.variables)) r[a] = { value: i[a], ...s };
        }
        return await Bu(this.connection, e.gqlFieldName, e.defaultSelection, r, n == null ? void 0 : n.select, e.namespace);
      }
    : async function (i) {
        return await Bu(this.connection, e.gqlFieldName, e.defaultSelection, void 0, i == null ? void 0 : i.select, e.namespace);
      };
  return Object.assign(t, e, {
    plan: function (i, n, r) {
      return Op(i, e.defaultSelection, n, void 0, r);
    },
  });
}
function ab(e) {
  return Object.assign(async function (i, n) {
    return await ib(this.connection, e.gqlFieldName, i, n, e.namespace);
  }, e);
}
function rb(e) {
  return e.functionName == "view";
}
function Bp(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function sb(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Bp(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
function Du(e, t) {
  return Symbol.asyncIterator in e
    ? {
        [Symbol.asyncIterator]: async function* () {
          for await (const i of e) yield t(i);
        },
      }
    : e.then(t);
}
const Dp = (e) => {
    try {
      if (typeof window < "u" && typeof CustomEvent == "function") {
        const t = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: e.reason,
            action: {
              functionName: e.functionName,
              actionApiIdentifier: e.actionApiIdentifier,
              modelApiIdentifier: e.modelApiIdentifier,
              dataPath: e.dataPath,
            },
          },
        });
        window.dispatchEvent(t);
      }
    } catch (t) {
      console.warn("[gadget] error dispatching gadget dev harness event", t);
    }
  },
  at = {
    __typename: !0,
    id: !0,
    createdAt: !0,
    email: !0,
    emailVerified: !0,
    firstName: !0,
    googleImageUrl: !0,
    googleProfileId: !0,
    lastName: !0,
    lastSignedIn: !0,
    roles: { key: !0, name: !0 },
    updatedAt: !0,
  },
  re = "user",
  li = "users",
  lb = Y(re, li, at, [
    { type: "findOne", operationName: re, modelApiIdentifier: re, findByVariableName: "id", defaultSelection: at, namespace: null },
    { type: "maybeFindOne", operationName: re, modelApiIdentifier: re, findByVariableName: "id", defaultSelection: at, namespace: null },
    { type: "findMany", operationName: li, modelApiIdentifier: re, defaultSelection: at, namespace: null },
    { type: "findFirst", operationName: li, modelApiIdentifier: re, defaultSelection: at, namespace: null },
    { type: "maybeFindFirst", operationName: li, modelApiIdentifier: re, defaultSelection: at, namespace: null },
    {
      type: "findOne",
      operationName: li,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: re,
      defaultSelection: at,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: li,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: re,
      defaultSelection: at,
      namespace: null,
    },
    {
      type: "findOne",
      operationName: li,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: re,
      defaultSelection: at,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: li,
      functionName: "maybeFindByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: re,
      defaultSelection: at,
      namespace: null,
    },
    {
      type: "action",
      operationName: "signUpUser",
      operationReturnType: "SignUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !1,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "bulkSignUpUsers",
      functionName: "bulkSignUp",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "signUp",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "signInUser",
      operationReturnType: "SignInUser",
      functionName: "signIn",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "SignInUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "bulkSignInUsers",
      functionName: "bulkSignIn",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "signIn",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignInUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "signOutUser",
      operationReturnType: "SignOutUser",
      functionName: "signOut",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "SignOutUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "bulkSignOutUsers",
      functionName: "bulkSignOut",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "signOut",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignOutUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "updateUser",
      operationReturnType: "UpdateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "bulkUpdateUsers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "deleteUser",
      operationReturnType: "DeleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteUsers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertUser",
      operationReturnType: "UpsertUser",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: re,
      operatesWithRecordIdentity: !1,
      modelSelectionField: re,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, user: { required: !1, type: "UpsertUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on SignUpUserResult": { hasReturnType: !1 }, "... on UpdateUserResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: at,
    },
    {
      type: "action",
      operationName: "bulkUpsertUsers",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: re,
      modelSelectionField: li,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertUsersInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: at,
    },
  ]),
  qa = {
    __typename: !0,
    id: !0,
    state: !0,
    createdAt: !0,
    roles: { key: !0, name: !0 },
    shopId: !0,
    shopifySID: !0,
    updatedAt: !0,
    userId: !0,
  },
  qn = "session",
  _r = "sessions",
  ob = Y(qn, _r, qa, [
    { type: "findOne", operationName: qn, modelApiIdentifier: qn, findByVariableName: "id", defaultSelection: qa, namespace: null },
    { type: "maybeFindOne", operationName: qn, modelApiIdentifier: qn, findByVariableName: "id", defaultSelection: qa, namespace: null },
    { type: "findMany", operationName: _r, modelApiIdentifier: qn, defaultSelection: qa, namespace: null },
    { type: "findFirst", operationName: _r, modelApiIdentifier: qn, defaultSelection: qa, namespace: null },
    { type: "maybeFindFirst", operationName: _r, modelApiIdentifier: qn, defaultSelection: qa, namespace: null },
    {
      type: "findOne",
      operationName: _r,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: qn,
      defaultSelection: qa,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: _r,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: qn,
      defaultSelection: qa,
      namespace: null,
    },
  ]),
  Cu = {
    __typename: !0,
    id: !0,
    state: !0,
    createdAt: !0,
    roles: { key: !0, name: !0 },
    shopId: !0,
    shopifySID: !0,
    updatedAt: !0,
    userId: !0,
  },
  Uu = "session",
  db = "sessions",
  ub = Y(Uu, db, Cu, [{ type: "get", operationName: "currentSession", defaultSelection: Cu, modelApiIdentifier: Uu, namespace: null }]),
  Te = {
    __typename: !0,
    id: !0,
    anything: !0,
    birthday: !0,
    category: !0,
    color: !0,
    createdAt: !0,
    description: { markdown: !0, truncatedHTML: !0 },
    embedding: !0,
    inStock: !0,
    inventoryCount: !0,
    isChecked: !0,
    metafields: !0,
    mustBeLongString: !0,
    name: !0,
    roles: { key: !0, name: !0 },
    secretKey: !0,
    sectionId: !0,
    startsAt: !0,
    updatedAt: !0,
  },
  X = "widget",
  oi = "widgets",
  cb = Y(X, oi, Te, [
    { type: "findOne", operationName: X, modelApiIdentifier: X, findByVariableName: "id", defaultSelection: Te, namespace: null },
    { type: "maybeFindOne", operationName: X, modelApiIdentifier: X, findByVariableName: "id", defaultSelection: Te, namespace: null },
    { type: "findMany", operationName: oi, modelApiIdentifier: X, defaultSelection: Te, namespace: null },
    { type: "findFirst", operationName: oi, modelApiIdentifier: X, defaultSelection: Te, namespace: null },
    { type: "maybeFindFirst", operationName: oi, modelApiIdentifier: X, defaultSelection: Te, namespace: null },
    {
      type: "findOne",
      operationName: oi,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: Te,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: oi,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: X,
      defaultSelection: Te,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createWidget",
      operationReturnType: "CreateWidget",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !1,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { widget: { required: !1, type: "CreateWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkCreateWidgets",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateWidgetsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "updateWidget",
      operationReturnType: "UpdateWidget",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !0,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, widget: { required: !1, type: "UpdateWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkUpdateWidgets",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateWidgetsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "deleteWidget",
      operationReturnType: "DeleteWidget",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !0,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteWidgets",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "addInventoryWidget",
      operationReturnType: "AddInventoryWidget",
      functionName: "addInventory",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !0,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, count: { required: !1, type: "Float" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["count"],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkAddInventoryWidgets",
      functionName: "bulkAddInventory",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "addInventory",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkAddInventoryWidgetsInput!]" } },
      paramOnlyVariables: ["count"],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "alwaysThrowErrorWidget",
      operationReturnType: "AlwaysThrowErrorWidget",
      functionName: "alwaysThrowError",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !1,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { widget: { required: !1, type: "AlwaysThrowErrorWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkAlwaysThrowErrorWidgets",
      functionName: "bulkAlwaysThrowError",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "alwaysThrowError",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkAlwaysThrowErrorWidgetsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "createWithCustomParamsWidget",
      operationReturnType: "CreateWithCustomParamsWidget",
      functionName: "createWithCustomParams",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !1,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        widget: { required: !1, type: "CreateWithCustomParamsWidgetInput" },
        customStringParam: { required: !1, type: "String" },
        customNumberParam: { required: !1, type: "Float" },
        customBooleanParam: { required: !1, type: "Boolean" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["customStringParam", "customNumberParam", "customBooleanParam"],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkCreateWithCustomParamsWidgets",
      functionName: "bulkCreateWithCustomParams",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "createWithCustomParams",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateWithCustomParamsWidgetsInput!]" } },
      paramOnlyVariables: ["customStringParam", "customNumberParam", "customBooleanParam"],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "updateWithCustomParamsWidget",
      operationReturnType: "UpdateWithCustomParamsWidget",
      functionName: "updateWithCustomParams",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !0,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        widget: { required: !1, type: "UpdateWithCustomParamsWidgetInput" },
        customStringParam: { required: !1, type: "String" },
        customNumberParam: { required: !1, type: "Float" },
        customBooleanParam: { required: !1, type: "Boolean" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["customStringParam", "customNumberParam", "customBooleanParam"],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkUpdateWithCustomParamsWidgets",
      functionName: "bulkUpdateWithCustomParams",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "updateWithCustomParams",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateWithCustomParamsWidgetsInput!]" } },
      paramOnlyVariables: ["customStringParam", "customNumberParam", "customBooleanParam"],
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "upsertWidget",
      operationReturnType: "UpsertWidget",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: X,
      operatesWithRecordIdentity: !1,
      modelSelectionField: X,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, widget: { required: !1, type: "UpsertWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateWidgetResult": { hasReturnType: !1 }, "... on UpdateWidgetResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Te,
    },
    {
      type: "action",
      operationName: "bulkUpsertWidgets",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: X,
      modelSelectionField: oi,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertWidgetsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Te,
    },
  ]),
  di = {
    __typename: !0,
    id: !0,
    attachment: { url: !0, mimeType: !0, fileName: !0 },
    createdAt: !0,
    name: !0,
    orientation: !0,
    updatedAt: !0,
    widgetId: !0,
  },
  Re = "gizmo",
  Pn = "gizmos",
  pb = Y(Re, Pn, di, [
    { type: "findOne", operationName: Re, modelApiIdentifier: Re, findByVariableName: "id", defaultSelection: di, namespace: null },
    { type: "maybeFindOne", operationName: Re, modelApiIdentifier: Re, findByVariableName: "id", defaultSelection: di, namespace: null },
    { type: "findMany", operationName: Pn, modelApiIdentifier: Re, defaultSelection: di, namespace: null },
    { type: "findFirst", operationName: Pn, modelApiIdentifier: Re, defaultSelection: di, namespace: null },
    { type: "maybeFindFirst", operationName: Pn, modelApiIdentifier: Re, defaultSelection: di, namespace: null },
    {
      type: "findOne",
      operationName: Pn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Re,
      defaultSelection: di,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Pn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Re,
      defaultSelection: di,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createGizmo",
      operationReturnType: "CreateGizmo",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Re,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Re,
      isBulk: !1,
      isDeleter: !1,
      variables: { gizmo: { required: !1, type: "CreateGizmoInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: di,
    },
    {
      type: "action",
      operationName: "bulkCreateGizmos",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Re,
      modelSelectionField: Pn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateGizmosInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: di,
    },
    {
      type: "action",
      operationName: "updateGizmo",
      operationReturnType: "UpdateGizmo",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Re,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, gizmo: { required: !1, type: "UpdateGizmoInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: di,
    },
    {
      type: "action",
      operationName: "bulkUpdateGizmos",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Re,
      modelSelectionField: Pn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateGizmosInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: di,
    },
    {
      type: "action",
      operationName: "deleteGizmo",
      operationReturnType: "DeleteGizmo",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Re,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Re,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteGizmos",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Re,
      modelSelectionField: Pn,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertGizmo",
      operationReturnType: "UpsertGizmo",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Re,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Re,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, gizmo: { required: !1, type: "UpsertGizmoInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGizmoResult": { hasReturnType: !1 }, "... on UpdateGizmoResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: di,
    },
    {
      type: "action",
      operationName: "bulkUpsertGizmos",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Re,
      modelSelectionField: Pn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertGizmosInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: di,
    },
  ]),
  ui = { __typename: !0, id: !0, createdAt: !0, label: !0, name: !0, updatedAt: !0 },
  Be = "section",
  Vn = "sections",
  fb = Y(Be, Vn, ui, [
    { type: "findOne", operationName: Be, modelApiIdentifier: Be, findByVariableName: "id", defaultSelection: ui, namespace: null },
    { type: "maybeFindOne", operationName: Be, modelApiIdentifier: Be, findByVariableName: "id", defaultSelection: ui, namespace: null },
    { type: "findMany", operationName: Vn, modelApiIdentifier: Be, defaultSelection: ui, namespace: null },
    { type: "findFirst", operationName: Vn, modelApiIdentifier: Be, defaultSelection: ui, namespace: null },
    { type: "maybeFindFirst", operationName: Vn, modelApiIdentifier: Be, defaultSelection: ui, namespace: null },
    {
      type: "findOne",
      operationName: Vn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Be,
      defaultSelection: ui,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Vn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Be,
      defaultSelection: ui,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createSection",
      operationReturnType: "CreateSection",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Be,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Be,
      isBulk: !1,
      isDeleter: !1,
      variables: { section: { required: !1, type: "CreateSectionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ui,
    },
    {
      type: "action",
      operationName: "bulkCreateSections",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Be,
      modelSelectionField: Vn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateSectionsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: ui,
    },
    {
      type: "action",
      operationName: "updateSection",
      operationReturnType: "UpdateSection",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Be,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Be,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, section: { required: !1, type: "UpdateSectionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ui,
    },
    {
      type: "action",
      operationName: "bulkUpdateSections",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Be,
      modelSelectionField: Vn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateSectionsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: ui,
    },
    {
      type: "action",
      operationName: "deleteSection",
      operationReturnType: "DeleteSection",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Be,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Be,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteSections",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Be,
      modelSelectionField: Vn,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertSection",
      operationReturnType: "UpsertSection",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Be,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Be,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, section: { required: !1, type: "UpsertSectionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateSectionResult": { hasReturnType: !1 }, "... on UpdateSectionResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ui,
    },
    {
      type: "action",
      operationName: "bulkUpsertSections",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Be,
      modelSelectionField: Vn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertSectionsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: ui,
    },
  ]),
  ci = { __typename: !0, id: !0, createdAt: !0, updatedAt: !0 },
  De = "modelA",
  En = "modelAs",
  mb = Y(De, En, ci, [
    { type: "findOne", operationName: De, modelApiIdentifier: De, findByVariableName: "id", defaultSelection: ci, namespace: null },
    { type: "maybeFindOne", operationName: De, modelApiIdentifier: De, findByVariableName: "id", defaultSelection: ci, namespace: null },
    { type: "findMany", operationName: En, modelApiIdentifier: De, defaultSelection: ci, namespace: null },
    { type: "findFirst", operationName: En, modelApiIdentifier: De, defaultSelection: ci, namespace: null },
    { type: "maybeFindFirst", operationName: En, modelApiIdentifier: De, defaultSelection: ci, namespace: null },
    {
      type: "findOne",
      operationName: En,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: De,
      defaultSelection: ci,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: En,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: De,
      defaultSelection: ci,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createModelA",
      operationReturnType: "CreateModelA",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: De,
      operatesWithRecordIdentity: !1,
      modelSelectionField: De,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ci,
    },
    {
      type: "action",
      operationName: "bulkCreateModelAs",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: De,
      modelSelectionField: En,
      namespace: null,
      variables: { inputs: { required: !0, type: "[JSON!]" } },
      paramOnlyVariables: [],
      defaultSelection: ci,
    },
    {
      type: "action",
      operationName: "updateModelA",
      operationReturnType: "UpdateModelA",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: De,
      operatesWithRecordIdentity: !0,
      modelSelectionField: De,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ci,
    },
    {
      type: "action",
      operationName: "bulkUpdateModelAs",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: De,
      modelSelectionField: En,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: ci,
    },
    {
      type: "action",
      operationName: "deleteModelA",
      operationReturnType: "DeleteModelA",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: De,
      operatesWithRecordIdentity: !0,
      modelSelectionField: De,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteModelAs",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: De,
      modelSelectionField: En,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertModelA",
      operationReturnType: "UpsertModelA",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: De,
      operatesWithRecordIdentity: !1,
      modelSelectionField: De,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, modelA: { required: !1, type: "UpsertModelAInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateModelAResult": { hasReturnType: !1 }, "... on UpdateModelAResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ci,
    },
    {
      type: "action",
      operationName: "bulkUpsertModelAs",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: De,
      modelSelectionField: En,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertModelAsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: ci,
    },
  ]),
  Gt = { __typename: !0, id: !0, count: !0, createdAt: !0, name: !0, notes: !0, updatedAt: !0 },
  he = "part",
  dn = "parts",
  yb = Y(he, dn, Gt, [
    { type: "findOne", operationName: he, modelApiIdentifier: he, findByVariableName: "id", defaultSelection: Gt, namespace: null },
    { type: "maybeFindOne", operationName: he, modelApiIdentifier: he, findByVariableName: "id", defaultSelection: Gt, namespace: null },
    { type: "findMany", operationName: dn, modelApiIdentifier: he, defaultSelection: Gt, namespace: null },
    { type: "findFirst", operationName: dn, modelApiIdentifier: he, defaultSelection: Gt, namespace: null },
    { type: "maybeFindFirst", operationName: dn, modelApiIdentifier: he, defaultSelection: Gt, namespace: null },
    {
      type: "findOne",
      operationName: dn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: he,
      defaultSelection: Gt,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: dn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: he,
      defaultSelection: Gt,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createPart",
      operationReturnType: "CreatePart",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: he,
      operatesWithRecordIdentity: !1,
      modelSelectionField: he,
      isBulk: !1,
      isDeleter: !1,
      variables: { part: { required: !1, type: "CreatePartInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "bulkCreateParts",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: he,
      modelSelectionField: dn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreatePartsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "updatePart",
      operationReturnType: "UpdatePart",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: he,
      operatesWithRecordIdentity: !0,
      modelSelectionField: he,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, part: { required: !1, type: "UpdatePartInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "bulkUpdateParts",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: he,
      modelSelectionField: dn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdatePartsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "deletePart",
      operationReturnType: "DeletePart",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: he,
      operatesWithRecordIdentity: !0,
      modelSelectionField: he,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteParts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: he,
      modelSelectionField: dn,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "whateverPart",
      operationReturnType: "WhateverPart",
      functionName: "whatever",
      namespace: null,
      modelApiIdentifier: he,
      operatesWithRecordIdentity: !0,
      modelSelectionField: he,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, part: { required: !1, type: "WhateverPartInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "bulkWhateverParts",
      functionName: "bulkWhatever",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "whatever",
      modelApiIdentifier: he,
      modelSelectionField: dn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkWhateverPartsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "upsertPart",
      operationReturnType: "UpsertPart",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: he,
      operatesWithRecordIdentity: !1,
      modelSelectionField: he,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, part: { required: !1, type: "UpsertPartInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreatePartResult": { hasReturnType: !1 }, "... on UpdatePartResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Gt,
    },
    {
      type: "action",
      operationName: "bulkUpsertParts",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: he,
      modelSelectionField: dn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertPartsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Gt,
    },
  ]),
  rt = {
    __typename: !0,
    id: !0,
    bool: !0,
    computed: !0,
    createdAt: !0,
    dt: !0,
    email: !0,
    enum: !0,
    es: !0,
    file: { url: !0, mimeType: !0, fileName: !0 },
    json: !0,
    num: !0,
    rl: { key: !0, name: !0 },
    rt: { markdown: !0, truncatedHTML: !0 },
    str: !0,
    updatedAt: !0,
    url: !0,
    vect: !0,
  },
  te = "autoTableTest",
  ji = "autoTableTests",
  hb = Y(te, ji, rt, [
    { type: "findOne", operationName: te, modelApiIdentifier: te, findByVariableName: "id", defaultSelection: rt, namespace: null },
    { type: "maybeFindOne", operationName: te, modelApiIdentifier: te, findByVariableName: "id", defaultSelection: rt, namespace: null },
    { type: "findMany", operationName: ji, modelApiIdentifier: te, defaultSelection: rt, namespace: null },
    { type: "findFirst", operationName: ji, modelApiIdentifier: te, defaultSelection: rt, namespace: null },
    { type: "maybeFindFirst", operationName: ji, modelApiIdentifier: te, defaultSelection: rt, namespace: null },
    {
      type: "findOne",
      operationName: ji,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: te,
      defaultSelection: rt,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: ji,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: te,
      defaultSelection: rt,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createAutoTableTest",
      operationReturnType: "CreateAutoTableTest",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !1,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: { autoTableTest: { required: !1, type: "CreateAutoTableTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkCreateAutoTableTests",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAutoTableTestsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "updateAutoTableTest",
      operationReturnType: "UpdateAutoTableTest",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !0,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, autoTableTest: { required: !1, type: "UpdateAutoTableTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkUpdateAutoTableTests",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAutoTableTestsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "deleteAutoTableTest",
      operationReturnType: "DeleteAutoTableTest",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !0,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteAutoTableTests",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "customActionAutoTableTest",
      operationReturnType: "CustomActionAutoTableTest",
      functionName: "customAction",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !0,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkCustomActionAutoTableTests",
      functionName: "bulkCustomAction",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "customAction",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "customActionWithParamsAutoTableTest",
      operationReturnType: "CustomActionWithParamsAutoTableTest",
      functionName: "customActionWithParams",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !0,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        stringParam1: { required: !1, type: "String" },
        numberParam1: { required: !1, type: "Float" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["stringParam1", "numberParam1"],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkCustomActionWithParamsAutoTableTests",
      functionName: "bulkCustomActionWithParams",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "customActionWithParams",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCustomActionWithParamsAutoTableTestsInput!]" } },
      paramOnlyVariables: ["stringParam1", "numberParam1"],
      defaultSelection: rt,
    },
    {
      type: "stubbedAction",
      operationName: "noTriggerActionAutoTableTest",
      functionName: "noTriggerAction",
      errorMessage:
        "The action noTriggerAction on model autoTableTest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "noTriggerAction",
      modelApiIdentifier: te,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "autoTableTest.noTriggerAction",
    },
    {
      type: "stubbedAction",
      operationName: "bulkNoTriggerActionAutoTableTests",
      functionName: "bulkNoTriggerAction",
      errorMessage:
        "The action noTriggerAction on model autoTableTest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "noTriggerAction",
      modelApiIdentifier: te,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "autoTableTest.bulkNoTriggerAction",
    },
    {
      type: "action",
      operationName: "updateWithCustomParamsAutoTableTest",
      operationReturnType: "UpdateWithCustomParamsAutoTableTest",
      functionName: "updateWithCustomParams",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !0,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        autoTableTest: { required: !1, type: "UpdateWithCustomParamsAutoTableTestInput" },
        stringParam1: { required: !1, type: "String" },
        str: { required: !1, type: "String" },
        numberParam1: { required: !1, type: "Float" },
        num: { required: !1, type: "Float" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["stringParam1", "str", "numberParam1", "num"],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkUpdateWithCustomParamsAutoTableTests",
      functionName: "bulkUpdateWithCustomParams",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "updateWithCustomParams",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateWithCustomParamsAutoTableTestsInput!]" } },
      paramOnlyVariables: ["stringParam1", "str", "numberParam1", "num"],
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "upsertAutoTableTest",
      operationReturnType: "UpsertAutoTableTest",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: te,
      operatesWithRecordIdentity: !1,
      modelSelectionField: te,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, autoTableTest: { required: !1, type: "UpsertAutoTableTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateAutoTableTestResult": { hasReturnType: !1 },
        "... on UpdateAutoTableTestResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: rt,
    },
    {
      type: "action",
      operationName: "bulkUpsertAutoTableTests",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: te,
      modelSelectionField: ji,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertAutoTableTestsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: rt,
    },
  ]),
  pi = {
    __typename: !0,
    id: !0,
    belongsToParentId: !0,
    createdAt: !0,
    manyBelongsToParentId: !0,
    name: !0,
    someBool: !0,
    someNumber: !0,
    updatedAt: !0,
  },
  Ce = "foo",
  _n = "foos",
  gb = Y(Ce, _n, pi, [
    { type: "findOne", operationName: Ce, modelApiIdentifier: Ce, findByVariableName: "id", defaultSelection: pi, namespace: null },
    { type: "maybeFindOne", operationName: Ce, modelApiIdentifier: Ce, findByVariableName: "id", defaultSelection: pi, namespace: null },
    { type: "findMany", operationName: _n, modelApiIdentifier: Ce, defaultSelection: pi, namespace: null },
    { type: "findFirst", operationName: _n, modelApiIdentifier: Ce, defaultSelection: pi, namespace: null },
    { type: "maybeFindFirst", operationName: _n, modelApiIdentifier: Ce, defaultSelection: pi, namespace: null },
    {
      type: "findOne",
      operationName: _n,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ce,
      defaultSelection: pi,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: _n,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ce,
      defaultSelection: pi,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createFoo",
      operationReturnType: "CreateFoo",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ce,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ce,
      isBulk: !1,
      isDeleter: !1,
      variables: { foo: { required: !1, type: "CreateFooInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: pi,
    },
    {
      type: "action",
      operationName: "bulkCreateFoos",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ce,
      modelSelectionField: _n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateFoosInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: pi,
    },
    {
      type: "action",
      operationName: "updateFoo",
      operationReturnType: "UpdateFoo",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ce,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ce,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, foo: { required: !1, type: "UpdateFooInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: pi,
    },
    {
      type: "action",
      operationName: "bulkUpdateFoos",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ce,
      modelSelectionField: _n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateFoosInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: pi,
    },
    {
      type: "action",
      operationName: "deleteFoo",
      operationReturnType: "DeleteFoo",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ce,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ce,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteFoos",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ce,
      modelSelectionField: _n,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertFoo",
      operationReturnType: "UpsertFoo",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Ce,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ce,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, foo: { required: !1, type: "UpsertFooInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateFooResult": { hasReturnType: !1 }, "... on UpdateFooResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: pi,
    },
    {
      type: "action",
      operationName: "bulkUpsertFoos",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ce,
      modelSelectionField: _n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertFoosInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: pi,
    },
  ]),
  Pa = { __typename: !0, id: !0, createdAt: !0, payload: !0, shopId: !0, topic: !0, updatedAt: !0 },
  fi = "shopifyGdprRequest",
  xr = "shopifyGdprRequests",
  bb = Y(fi, xr, Pa, [
    { type: "findOne", operationName: fi, modelApiIdentifier: fi, findByVariableName: "id", defaultSelection: Pa, namespace: null },
    { type: "maybeFindOne", operationName: fi, modelApiIdentifier: fi, findByVariableName: "id", defaultSelection: Pa, namespace: null },
    { type: "findMany", operationName: xr, modelApiIdentifier: fi, defaultSelection: Pa, namespace: null },
    { type: "findFirst", operationName: xr, modelApiIdentifier: fi, defaultSelection: Pa, namespace: null },
    { type: "maybeFindFirst", operationName: xr, modelApiIdentifier: fi, defaultSelection: Pa, namespace: null },
    {
      type: "findOne",
      operationName: xr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: fi,
      defaultSelection: Pa,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: xr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: fi,
      defaultSelection: Pa,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyGdprRequest",
      functionName: "create",
      errorMessage:
        "The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: fi,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyGdprRequest.create",
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyGdprRequests",
      functionName: "bulkCreate",
      errorMessage:
        "The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: fi,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyGdprRequest.bulkCreate",
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyGdprRequest",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: fi,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyGdprRequest.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyGdprRequests",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: fi,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyGdprRequest.bulkUpdate",
    },
  ]),
  Va = {
    __typename: !0,
    id: !0,
    body: !0,
    category: !0,
    compareAtPriceRange: !0,
    createdAt: !0,
    handle: !0,
    productCategory: !0,
    productType: !0,
    publishedAt: !0,
    shopId: !0,
    shopifyCreatedAt: !0,
    shopifyUpdatedAt: !0,
    status: !0,
    tags: !0,
    templateSuffix: !0,
    title: !0,
    updatedAt: !0,
    vendor: !0,
  },
  jt = "shopifyProduct",
  $r = "shopifyProducts",
  Ib = Y(jt, $r, Va, [
    { type: "findOne", operationName: jt, modelApiIdentifier: jt, findByVariableName: "id", defaultSelection: Va, namespace: null },
    { type: "maybeFindOne", operationName: jt, modelApiIdentifier: jt, findByVariableName: "id", defaultSelection: Va, namespace: null },
    { type: "findMany", operationName: $r, modelApiIdentifier: jt, defaultSelection: Va, namespace: null },
    { type: "findFirst", operationName: $r, modelApiIdentifier: jt, defaultSelection: Va, namespace: null },
    { type: "maybeFindFirst", operationName: $r, modelApiIdentifier: jt, defaultSelection: Va, namespace: null },
    {
      type: "findOne",
      operationName: $r,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: jt,
      defaultSelection: Va,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: $r,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: jt,
      defaultSelection: Va,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyProduct",
      functionName: "create",
      errorMessage:
        "The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.create",
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyProducts",
      functionName: "bulkCreate",
      errorMessage:
        "The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.bulkCreate",
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyProduct",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyProducts",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.bulkUpdate",
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyProduct",
      functionName: "delete",
      errorMessage:
        "The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.delete",
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyProducts",
      functionName: "bulkDelete",
      errorMessage:
        "The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: jt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProduct.bulkDelete",
    },
  ]),
  Ea = {
    __typename: !0,
    id: !0,
    alt: !0,
    createdAt: !0,
    height: !0,
    position: !0,
    productId: !0,
    shopId: !0,
    shopifyCreatedAt: !0,
    shopifyUpdatedAt: !0,
    source: !0,
    updatedAt: !0,
    width: !0,
  },
  Wt = "shopifyProductImage",
  Gr = "shopifyProductImages",
  Sb = Y(Wt, Gr, Ea, [
    { type: "findOne", operationName: Wt, modelApiIdentifier: Wt, findByVariableName: "id", defaultSelection: Ea, namespace: null },
    { type: "maybeFindOne", operationName: Wt, modelApiIdentifier: Wt, findByVariableName: "id", defaultSelection: Ea, namespace: null },
    { type: "findMany", operationName: Gr, modelApiIdentifier: Wt, defaultSelection: Ea, namespace: null },
    { type: "findFirst", operationName: Gr, modelApiIdentifier: Wt, defaultSelection: Ea, namespace: null },
    { type: "maybeFindFirst", operationName: Gr, modelApiIdentifier: Wt, defaultSelection: Ea, namespace: null },
    {
      type: "findOne",
      operationName: Gr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Wt,
      defaultSelection: Ea,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Gr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Wt,
      defaultSelection: Ea,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyProductImage",
      functionName: "create",
      errorMessage:
        "The action create on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.create",
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyProductImages",
      functionName: "bulkCreate",
      errorMessage:
        "The action create on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.bulkCreate",
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyProductImages",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.bulkUpdate",
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyProductImage",
      functionName: "delete",
      errorMessage:
        "The action delete on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.delete",
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyProductImages",
      functionName: "bulkDelete",
      errorMessage:
        "The action delete on model shopifyProductImage does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: Wt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductImage.bulkDelete",
    },
  ]),
  _a = { __typename: !0, id: !0, createdAt: !0, name: !0, position: !0, productId: !0, shopId: !0, updatedAt: !0, values: !0 },
  Lt = "shopifyProductOption",
  jr = "shopifyProductOptions",
  kb = Y(Lt, jr, _a, [
    { type: "findOne", operationName: Lt, modelApiIdentifier: Lt, findByVariableName: "id", defaultSelection: _a, namespace: null },
    { type: "maybeFindOne", operationName: Lt, modelApiIdentifier: Lt, findByVariableName: "id", defaultSelection: _a, namespace: null },
    { type: "findMany", operationName: jr, modelApiIdentifier: Lt, defaultSelection: _a, namespace: null },
    { type: "findFirst", operationName: jr, modelApiIdentifier: Lt, defaultSelection: _a, namespace: null },
    { type: "maybeFindFirst", operationName: jr, modelApiIdentifier: Lt, defaultSelection: _a, namespace: null },
    {
      type: "findOne",
      operationName: jr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Lt,
      defaultSelection: _a,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: jr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Lt,
      defaultSelection: _a,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyProductOption",
      functionName: "create",
      errorMessage:
        "The action create on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.create",
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyProductOptions",
      functionName: "bulkCreate",
      errorMessage:
        "The action create on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.bulkCreate",
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyProductOptions",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.bulkUpdate",
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      errorMessage:
        "The action delete on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.delete",
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyProductOptions",
      functionName: "bulkDelete",
      errorMessage:
        "The action delete on model shopifyProductOption does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: Lt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductOption.bulkDelete",
    },
  ]),
  xa = {
    __typename: !0,
    id: !0,
    barcode: !0,
    compareAtPrice: !0,
    createdAt: !0,
    inventoryPolicy: !0,
    inventoryQuantity: !0,
    option1: !0,
    option2: !0,
    option3: !0,
    position: !0,
    presentmentPrices: !0,
    price: !0,
    productId: !0,
    productImageId: !0,
    selectedOptions: !0,
    shopId: !0,
    shopifyCreatedAt: !0,
    shopifyUpdatedAt: !0,
    sku: !0,
    taxCode: !0,
    taxable: !0,
    title: !0,
    updatedAt: !0,
  },
  zt = "shopifyProductVariant",
  Wr = "shopifyProductVariants",
  vb = Y(zt, Wr, xa, [
    { type: "findOne", operationName: zt, modelApiIdentifier: zt, findByVariableName: "id", defaultSelection: xa, namespace: null },
    { type: "maybeFindOne", operationName: zt, modelApiIdentifier: zt, findByVariableName: "id", defaultSelection: xa, namespace: null },
    { type: "findMany", operationName: Wr, modelApiIdentifier: zt, defaultSelection: xa, namespace: null },
    { type: "findFirst", operationName: Wr, modelApiIdentifier: zt, defaultSelection: xa, namespace: null },
    { type: "maybeFindFirst", operationName: Wr, modelApiIdentifier: zt, defaultSelection: xa, namespace: null },
    {
      type: "findOne",
      operationName: Wr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: zt,
      defaultSelection: xa,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Wr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: zt,
      defaultSelection: xa,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      errorMessage:
        "The action create on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.create",
    },
    {
      type: "stubbedAction",
      operationName: "bulkCreateShopifyProductVariants",
      functionName: "bulkCreate",
      errorMessage:
        "The action create on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "create",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.bulkCreate",
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyProductVariants",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.bulkUpdate",
    },
    {
      type: "stubbedAction",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      errorMessage:
        "The action delete on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.delete",
    },
    {
      type: "stubbedAction",
      operationName: "bulkDeleteShopifyProductVariants",
      functionName: "bulkDelete",
      errorMessage:
        "The action delete on model shopifyProductVariant does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "delete",
      modelApiIdentifier: zt,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyProductVariant.bulkDelete",
    },
  ]),
  $a = {
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
    customerAccountsV2: !0,
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
    zipCode: !0,
  },
  ht = "shopifyShop",
  Lr = "shopifyShops",
  Nb = Y(ht, Lr, $a, [
    { type: "findOne", operationName: ht, modelApiIdentifier: ht, findByVariableName: "id", defaultSelection: $a, namespace: null },
    { type: "maybeFindOne", operationName: ht, modelApiIdentifier: ht, findByVariableName: "id", defaultSelection: $a, namespace: null },
    { type: "findMany", operationName: Lr, modelApiIdentifier: ht, defaultSelection: $a, namespace: null },
    { type: "findFirst", operationName: Lr, modelApiIdentifier: ht, defaultSelection: $a, namespace: null },
    { type: "maybeFindFirst", operationName: Lr, modelApiIdentifier: ht, defaultSelection: $a, namespace: null },
    {
      type: "findOne",
      operationName: Lr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ht,
      defaultSelection: $a,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Lr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ht,
      defaultSelection: $a,
      namespace: null,
    },
    {
      type: "stubbedAction",
      operationName: "updateShopifyShop",
      functionName: "update",
      errorMessage:
        "The action update on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.update",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUpdateShopifyShops",
      functionName: "bulkUpdate",
      errorMessage:
        "The action update on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "update",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.bulkUpdate",
    },
    {
      type: "stubbedAction",
      operationName: "installShopifyShop",
      functionName: "install",
      errorMessage:
        "The action install on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "install",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.install",
    },
    {
      type: "stubbedAction",
      operationName: "bulkInstallShopifyShops",
      functionName: "bulkInstall",
      errorMessage:
        "The action install on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "install",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.bulkInstall",
    },
    {
      type: "stubbedAction",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      errorMessage:
        "The action reinstall on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "reinstall",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.reinstall",
    },
    {
      type: "stubbedAction",
      operationName: "bulkReinstallShopifyShops",
      functionName: "bulkReinstall",
      errorMessage:
        "The action reinstall on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "reinstall",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.bulkReinstall",
    },
    {
      type: "stubbedAction",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      errorMessage:
        "The action uninstall on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "uninstall",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.uninstall",
    },
    {
      type: "stubbedAction",
      operationName: "bulkUninstallShopifyShops",
      functionName: "bulkUninstall",
      errorMessage:
        "The action uninstall on model shopifyShop does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
      actionApiIdentifier: "uninstall",
      modelApiIdentifier: ht,
      variables: {},
      reason: "MissingApiTrigger",
      dataPath: "shopifyShop.bulkUninstall",
    },
  ]),
  gt = {
    __typename: !0,
    id: !0,
    state: !0,
    createdAt: !0,
    domain: !0,
    errorDetails: !0,
    errorMessage: !0,
    force: !0,
    models: !0,
    shopId: !0,
    syncSince: !0,
    updatedAt: !0,
  },
  ge = "shopifySync",
  un = "shopifySyncs",
  Ab = Y(ge, un, gt, [
    { type: "findOne", operationName: ge, modelApiIdentifier: ge, findByVariableName: "id", defaultSelection: gt, namespace: null },
    { type: "maybeFindOne", operationName: ge, modelApiIdentifier: ge, findByVariableName: "id", defaultSelection: gt, namespace: null },
    { type: "findMany", operationName: un, modelApiIdentifier: ge, defaultSelection: gt, namespace: null },
    { type: "findFirst", operationName: un, modelApiIdentifier: ge, defaultSelection: gt, namespace: null },
    { type: "maybeFindFirst", operationName: un, modelApiIdentifier: ge, defaultSelection: gt, namespace: null },
    {
      type: "findOne",
      operationName: un,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ge,
      defaultSelection: gt,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: un,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ge,
      defaultSelection: gt,
      namespace: null,
    },
    {
      type: "action",
      operationName: "abortShopifySync",
      operationReturnType: "AbortShopifySync",
      functionName: "abort",
      namespace: null,
      modelApiIdentifier: ge,
      operatesWithRecordIdentity: !0,
      modelSelectionField: ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "AbortShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "bulkAbortShopifySyncs",
      functionName: "bulkAbort",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "abort",
      modelApiIdentifier: ge,
      modelSelectionField: un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkAbortShopifySyncsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      operationReturnType: "CompleteShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: ge,
      operatesWithRecordIdentity: !0,
      modelSelectionField: ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "CompleteShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "bulkCompleteShopifySyncs",
      functionName: "bulkComplete",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "complete",
      modelApiIdentifier: ge,
      modelSelectionField: un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      operationReturnType: "ErrorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: ge,
      operatesWithRecordIdentity: !0,
      modelSelectionField: ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "ErrorShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "bulkErrorShopifySyncs",
      functionName: "bulkError",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "error",
      modelApiIdentifier: ge,
      modelSelectionField: un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "runShopifySync",
      operationReturnType: "RunShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: ge,
      operatesWithRecordIdentity: !1,
      modelSelectionField: ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifySync: { required: !1, type: "RunShopifySyncInput" }, startReason: { required: !1, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "bulkRunShopifySyncs",
      functionName: "bulkRun",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "run",
      modelApiIdentifier: ge,
      modelSelectionField: un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "upsertShopifySync",
      operationReturnType: "UpsertShopifySync",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: ge,
      operatesWithRecordIdentity: !1,
      modelSelectionField: ge,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        on: { required: !1, type: "[String!]" },
        shopifySync: { required: !1, type: "UpsertShopifySyncInput" },
        startReason: { required: !1, type: "String" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on RunShopifySyncResult": { hasReturnType: !1 }, "... on AbortShopifySyncResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gt,
    },
    {
      type: "action",
      operationName: "bulkUpsertShopifySyncs",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: ge,
      modelSelectionField: un,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertShopifySyncsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: gt,
    },
  ]),
  mi = { __typename: !0, id: !0, active: !0, createdAt: !0, gizmoId: !0, name: !0, size: !0, updatedAt: !0, weight: !0, widgetId: !0 },
  Ue = "doodad",
  xn = "doodads",
  Fb = Y(Ue, xn, mi, [
    { type: "findOne", operationName: Ue, modelApiIdentifier: Ue, findByVariableName: "id", defaultSelection: mi, namespace: null },
    { type: "maybeFindOne", operationName: Ue, modelApiIdentifier: Ue, findByVariableName: "id", defaultSelection: mi, namespace: null },
    { type: "findMany", operationName: xn, modelApiIdentifier: Ue, defaultSelection: mi, namespace: null },
    { type: "findFirst", operationName: xn, modelApiIdentifier: Ue, defaultSelection: mi, namespace: null },
    { type: "maybeFindFirst", operationName: xn, modelApiIdentifier: Ue, defaultSelection: mi, namespace: null },
    {
      type: "findOne",
      operationName: xn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ue,
      defaultSelection: mi,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: xn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ue,
      defaultSelection: mi,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createDoodad",
      operationReturnType: "CreateDoodad",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ue,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ue,
      isBulk: !1,
      isDeleter: !1,
      variables: { doodad: { required: !1, type: "CreateDoodadInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: mi,
    },
    {
      type: "action",
      operationName: "bulkCreateDoodads",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ue,
      modelSelectionField: xn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateDoodadsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: mi,
    },
    {
      type: "action",
      operationName: "updateDoodad",
      operationReturnType: "UpdateDoodad",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ue,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ue,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, doodad: { required: !1, type: "UpdateDoodadInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: mi,
    },
    {
      type: "action",
      operationName: "bulkUpdateDoodads",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ue,
      modelSelectionField: xn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateDoodadsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: mi,
    },
    {
      type: "action",
      operationName: "deleteDoodad",
      operationReturnType: "DeleteDoodad",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ue,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ue,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteDoodads",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ue,
      modelSelectionField: xn,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertDoodad",
      operationReturnType: "UpsertDoodad",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Ue,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ue,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, doodad: { required: !1, type: "UpsertDoodadInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateDoodadResult": { hasReturnType: !1 }, "... on UpdateDoodadResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: mi,
    },
    {
      type: "action",
      operationName: "bulkUpsertDoodads",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ue,
      modelSelectionField: xn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertDoodadsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: mi,
    },
  ]),
  yi = { __typename: !0, id: !0, createdAt: !0, ended: !0, followeeId: !0, followerId: !0, started: !0, updatedAt: !0 },
  qe = "friendship",
  $n = "friendships",
  wb = Y(qe, $n, yi, [
    { type: "findOne", operationName: qe, modelApiIdentifier: qe, findByVariableName: "id", defaultSelection: yi, namespace: null },
    { type: "maybeFindOne", operationName: qe, modelApiIdentifier: qe, findByVariableName: "id", defaultSelection: yi, namespace: null },
    { type: "findMany", operationName: $n, modelApiIdentifier: qe, defaultSelection: yi, namespace: null },
    { type: "findFirst", operationName: $n, modelApiIdentifier: qe, defaultSelection: yi, namespace: null },
    { type: "maybeFindFirst", operationName: $n, modelApiIdentifier: qe, defaultSelection: yi, namespace: null },
    {
      type: "findOne",
      operationName: $n,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: qe,
      defaultSelection: yi,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: $n,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: qe,
      defaultSelection: yi,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createFriendship",
      operationReturnType: "CreateFriendship",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: qe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { friendship: { required: !1, type: "CreateFriendshipInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: yi,
    },
    {
      type: "action",
      operationName: "bulkCreateFriendships",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: qe,
      modelSelectionField: $n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateFriendshipsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: yi,
    },
    {
      type: "action",
      operationName: "updateFriendship",
      operationReturnType: "UpdateFriendship",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: qe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, friendship: { required: !1, type: "UpdateFriendshipInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: yi,
    },
    {
      type: "action",
      operationName: "bulkUpdateFriendships",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: qe,
      modelSelectionField: $n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateFriendshipsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: yi,
    },
    {
      type: "action",
      operationName: "deleteFriendship",
      operationReturnType: "DeleteFriendship",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: qe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: qe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteFriendships",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: qe,
      modelSelectionField: $n,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertFriendship",
      operationReturnType: "UpsertFriendship",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: qe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, friendship: { required: !1, type: "UpsertFriendshipInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateFriendshipResult": { hasReturnType: !1 }, "... on UpdateFriendshipResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: yi,
    },
    {
      type: "action",
      operationName: "bulkUpsertFriendships",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: qe,
      modelSelectionField: $n,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertFriendshipsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: yi,
    },
  ]),
  hi = { __typename: !0, id: !0, cityId: !0, createdAt: !0, name: !0, updatedAt: !0 },
  Pe = "tweeter",
  Gn = "tweeters",
  Mb = Y(Pe, Gn, hi, [
    { type: "findOne", operationName: Pe, modelApiIdentifier: Pe, findByVariableName: "id", defaultSelection: hi, namespace: null },
    { type: "maybeFindOne", operationName: Pe, modelApiIdentifier: Pe, findByVariableName: "id", defaultSelection: hi, namespace: null },
    { type: "findMany", operationName: Gn, modelApiIdentifier: Pe, defaultSelection: hi, namespace: null },
    { type: "findFirst", operationName: Gn, modelApiIdentifier: Pe, defaultSelection: hi, namespace: null },
    { type: "maybeFindFirst", operationName: Gn, modelApiIdentifier: Pe, defaultSelection: hi, namespace: null },
    {
      type: "findOne",
      operationName: Gn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Pe,
      defaultSelection: hi,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Gn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Pe,
      defaultSelection: hi,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createTweeter",
      operationReturnType: "CreateTweeter",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Pe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Pe,
      isBulk: !1,
      isDeleter: !1,
      variables: { tweeter: { required: !1, type: "CreateTweeterInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: hi,
    },
    {
      type: "action",
      operationName: "bulkCreateTweeters",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Pe,
      modelSelectionField: Gn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateTweetersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: hi,
    },
    {
      type: "action",
      operationName: "updateTweeter",
      operationReturnType: "UpdateTweeter",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Pe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Pe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, tweeter: { required: !1, type: "UpdateTweeterInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: hi,
    },
    {
      type: "action",
      operationName: "bulkUpdateTweeters",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Pe,
      modelSelectionField: Gn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateTweetersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: hi,
    },
    {
      type: "action",
      operationName: "deleteTweeter",
      operationReturnType: "DeleteTweeter",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Pe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Pe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteTweeters",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Pe,
      modelSelectionField: Gn,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertTweeter",
      operationReturnType: "UpsertTweeter",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Pe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Pe,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, tweeter: { required: !1, type: "UpsertTweeterInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateTweeterResult": { hasReturnType: !1 }, "... on UpdateTweeterResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: hi,
    },
    {
      type: "action",
      operationName: "bulkUpsertTweeters",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Pe,
      modelSelectionField: Gn,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertTweetersInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: hi,
    },
  ]),
  gi = { __typename: !0, id: !0, createdAt: !0, currentRoundId: !0, name: !0, updatedAt: !0 },
  Ve = "player",
  jn = "players",
  Ob = Y(Ve, jn, gi, [
    { type: "findOne", operationName: Ve, modelApiIdentifier: Ve, findByVariableName: "id", defaultSelection: gi, namespace: "game" },
    { type: "maybeFindOne", operationName: Ve, modelApiIdentifier: Ve, findByVariableName: "id", defaultSelection: gi, namespace: "game" },
    { type: "findMany", operationName: jn, modelApiIdentifier: Ve, defaultSelection: gi, namespace: "game" },
    { type: "findFirst", operationName: jn, modelApiIdentifier: Ve, defaultSelection: gi, namespace: "game" },
    { type: "maybeFindFirst", operationName: jn, modelApiIdentifier: Ve, defaultSelection: gi, namespace: "game" },
    {
      type: "findOne",
      operationName: jn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ve,
      defaultSelection: gi,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: jn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ve,
      defaultSelection: gi,
      namespace: "game",
    },
    {
      type: "action",
      operationName: "createPlayer",
      operationReturnType: "CreateGamePlayer",
      functionName: "create",
      namespace: "game",
      modelApiIdentifier: Ve,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ve,
      isBulk: !1,
      isDeleter: !1,
      variables: { player: { required: !1, type: "CreateGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gi,
    },
    {
      type: "action",
      operationName: "bulkCreatePlayers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ve,
      modelSelectionField: jn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCreateGamePlayersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gi,
    },
    {
      type: "action",
      operationName: "updatePlayer",
      operationReturnType: "UpdateGamePlayer",
      functionName: "update",
      namespace: "game",
      modelApiIdentifier: Ve,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ve,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, player: { required: !1, type: "UpdateGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gi,
    },
    {
      type: "action",
      operationName: "bulkUpdatePlayers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ve,
      modelSelectionField: jn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpdateGamePlayersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: gi,
    },
    {
      type: "action",
      operationName: "deletePlayer",
      operationReturnType: "DeleteGamePlayer",
      functionName: "delete",
      namespace: "game",
      modelApiIdentifier: Ve,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ve,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeletePlayers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ve,
      modelSelectionField: jn,
      namespace: "game",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertPlayer",
      operationReturnType: "UpsertGamePlayer",
      functionName: "upsert",
      namespace: "game",
      modelApiIdentifier: Ve,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ve,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, player: { required: !1, type: "UpsertGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGamePlayerResult": { hasReturnType: !1 }, "... on UpdateGamePlayerResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: gi,
    },
    {
      type: "action",
      operationName: "bulkUpsertPlayers",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ve,
      modelSelectionField: jn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpsertGamePlayersInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: gi,
    },
  ]),
  bi = { __typename: !0, id: !0, createdAt: !0, name: !0, stadiumId: !0, updatedAt: !0 },
  Ee = "round",
  Wn = "rounds",
  Tb = Y(Ee, Wn, bi, [
    { type: "findOne", operationName: Ee, modelApiIdentifier: Ee, findByVariableName: "id", defaultSelection: bi, namespace: "game" },
    { type: "maybeFindOne", operationName: Ee, modelApiIdentifier: Ee, findByVariableName: "id", defaultSelection: bi, namespace: "game" },
    { type: "findMany", operationName: Wn, modelApiIdentifier: Ee, defaultSelection: bi, namespace: "game" },
    { type: "findFirst", operationName: Wn, modelApiIdentifier: Ee, defaultSelection: bi, namespace: "game" },
    { type: "maybeFindFirst", operationName: Wn, modelApiIdentifier: Ee, defaultSelection: bi, namespace: "game" },
    {
      type: "findOne",
      operationName: Wn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ee,
      defaultSelection: bi,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: Wn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ee,
      defaultSelection: bi,
      namespace: "game",
    },
    {
      type: "action",
      operationName: "createRound",
      operationReturnType: "CreateGameRound",
      functionName: "create",
      namespace: "game",
      modelApiIdentifier: Ee,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ee,
      isBulk: !1,
      isDeleter: !1,
      variables: { round: { required: !1, type: "CreateGameRoundInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: bi,
    },
    {
      type: "action",
      operationName: "bulkCreateRounds",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ee,
      modelSelectionField: Wn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCreateGameRoundsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: bi,
    },
    {
      type: "action",
      operationName: "updateRound",
      operationReturnType: "UpdateGameRound",
      functionName: "update",
      namespace: "game",
      modelApiIdentifier: Ee,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ee,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, round: { required: !1, type: "UpdateGameRoundInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: bi,
    },
    {
      type: "action",
      operationName: "bulkUpdateRounds",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ee,
      modelSelectionField: Wn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpdateGameRoundsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: bi,
    },
    {
      type: "action",
      operationName: "deleteRound",
      operationReturnType: "DeleteGameRound",
      functionName: "delete",
      namespace: "game",
      modelApiIdentifier: Ee,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ee,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteRounds",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ee,
      modelSelectionField: Wn,
      namespace: "game",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertRound",
      operationReturnType: "UpsertGameRound",
      functionName: "upsert",
      namespace: "game",
      modelApiIdentifier: Ee,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ee,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, round: { required: !1, type: "UpsertGameRoundInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGameRoundResult": { hasReturnType: !1 }, "... on UpdateGameRoundResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: bi,
    },
    {
      type: "action",
      operationName: "bulkUpsertRounds",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ee,
      modelSelectionField: Wn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpsertGameRoundsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: bi,
    },
  ]),
  Ii = {
    __typename: !0,
    id: !0,
    cityId: !0,
    createdAt: !0,
    name: !0,
    photo: { url: !0, mimeType: !0, fileName: !0 },
    tags: !0,
    type: !0,
    updatedAt: !0,
  },
  _e = "stadium",
  Ln = "stadia",
  Rb = Y(_e, Ln, Ii, [
    { type: "findOne", operationName: _e, modelApiIdentifier: _e, findByVariableName: "id", defaultSelection: Ii, namespace: "game" },
    { type: "maybeFindOne", operationName: _e, modelApiIdentifier: _e, findByVariableName: "id", defaultSelection: Ii, namespace: "game" },
    { type: "findMany", operationName: Ln, modelApiIdentifier: _e, defaultSelection: Ii, namespace: "game" },
    { type: "findFirst", operationName: Ln, modelApiIdentifier: _e, defaultSelection: Ii, namespace: "game" },
    { type: "maybeFindFirst", operationName: Ln, modelApiIdentifier: _e, defaultSelection: Ii, namespace: "game" },
    {
      type: "findOne",
      operationName: Ln,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: _e,
      defaultSelection: Ii,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: Ln,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: _e,
      defaultSelection: Ii,
      namespace: "game",
    },
    {
      type: "action",
      operationName: "createStadium",
      operationReturnType: "CreateGameStadium",
      functionName: "create",
      namespace: "game",
      modelApiIdentifier: _e,
      operatesWithRecordIdentity: !1,
      modelSelectionField: _e,
      isBulk: !1,
      isDeleter: !1,
      variables: { stadium: { required: !1, type: "CreateGameStadiumInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ii,
    },
    {
      type: "action",
      operationName: "bulkCreateStadia",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: _e,
      modelSelectionField: Ln,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCreateGameStadiaInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ii,
    },
    {
      type: "action",
      operationName: "updateStadium",
      operationReturnType: "UpdateGameStadium",
      functionName: "update",
      namespace: "game",
      modelApiIdentifier: _e,
      operatesWithRecordIdentity: !0,
      modelSelectionField: _e,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, stadium: { required: !1, type: "UpdateGameStadiumInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ii,
    },
    {
      type: "action",
      operationName: "bulkUpdateStadia",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: _e,
      modelSelectionField: Ln,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpdateGameStadiaInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ii,
    },
    {
      type: "action",
      operationName: "deleteStadium",
      operationReturnType: "DeleteGameStadium",
      functionName: "delete",
      namespace: "game",
      modelApiIdentifier: _e,
      operatesWithRecordIdentity: !0,
      modelSelectionField: _e,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteStadia",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: _e,
      modelSelectionField: Ln,
      namespace: "game",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertStadium",
      operationReturnType: "UpsertGameStadium",
      functionName: "upsert",
      namespace: "game",
      modelApiIdentifier: _e,
      operatesWithRecordIdentity: !1,
      modelSelectionField: _e,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, stadium: { required: !1, type: "UpsertGameStadiumInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGameStadiumResult": { hasReturnType: !1 }, "... on UpdateGameStadiumResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ii,
    },
    {
      type: "action",
      operationName: "bulkUpsertStadia",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: _e,
      modelSelectionField: Ln,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpsertGameStadiaInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Ii,
    },
  ]),
  Ht = { __typename: !0, id: !0, createdAt: !0, name: !0, updatedAt: !0 },
  be = "city",
  cn = "cities",
  Bb = Y(be, cn, Ht, [
    { type: "findOne", operationName: be, modelApiIdentifier: be, findByVariableName: "id", defaultSelection: Ht, namespace: "game" },
    { type: "maybeFindOne", operationName: be, modelApiIdentifier: be, findByVariableName: "id", defaultSelection: Ht, namespace: "game" },
    { type: "findMany", operationName: cn, modelApiIdentifier: be, defaultSelection: Ht, namespace: "game" },
    { type: "findFirst", operationName: cn, modelApiIdentifier: be, defaultSelection: Ht, namespace: "game" },
    { type: "maybeFindFirst", operationName: cn, modelApiIdentifier: be, defaultSelection: Ht, namespace: "game" },
    {
      type: "findOne",
      operationName: cn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: be,
      defaultSelection: Ht,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: cn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: be,
      defaultSelection: Ht,
      namespace: "game",
    },
    {
      type: "action",
      operationName: "createCity",
      operationReturnType: "CreateGameCity",
      functionName: "create",
      namespace: "game",
      modelApiIdentifier: be,
      operatesWithRecordIdentity: !1,
      modelSelectionField: be,
      isBulk: !1,
      isDeleter: !1,
      variables: { city: { required: !1, type: "CreateGameCityInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "bulkCreateCities",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: be,
      modelSelectionField: cn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCreateGameCitiesInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "updateCity",
      operationReturnType: "UpdateGameCity",
      functionName: "update",
      namespace: "game",
      modelApiIdentifier: be,
      operatesWithRecordIdentity: !0,
      modelSelectionField: be,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, city: { required: !1, type: "UpdateGameCityInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "bulkUpdateCities",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: be,
      modelSelectionField: cn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpdateGameCitiesInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "deleteCity",
      operationReturnType: "DeleteGameCity",
      functionName: "delete",
      namespace: "game",
      modelApiIdentifier: be,
      operatesWithRecordIdentity: !0,
      modelSelectionField: be,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteCities",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: be,
      modelSelectionField: cn,
      namespace: "game",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "customObjectParamsCity",
      operationReturnType: "CustomObjectParamsGameCity",
      functionName: "customObjectParams",
      namespace: "game",
      modelApiIdentifier: be,
      operatesWithRecordIdentity: !0,
      modelSelectionField: be,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        city: { required: !1, type: "CustomObjectParamsGameCityInput" },
        objParam: { required: !1, type: "CustomObjectParamsObjParamInput" },
        rootLevelStr: { required: !1, type: "String" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["objParam", "rootLevelStr"],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "bulkCustomObjectParamsCities",
      functionName: "bulkCustomObjectParams",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "customObjectParams",
      modelApiIdentifier: be,
      modelSelectionField: cn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCustomObjectParamsGameCitiesInput!]" } },
      paramOnlyVariables: ["objParam", "rootLevelStr"],
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "upsertCity",
      operationReturnType: "UpsertGameCity",
      functionName: "upsert",
      namespace: "game",
      modelApiIdentifier: be,
      operatesWithRecordIdentity: !1,
      modelSelectionField: be,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, city: { required: !1, type: "UpsertGameCityInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGameCityResult": { hasReturnType: !1 }, "... on UpdateGameCityResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ht,
    },
    {
      type: "action",
      operationName: "bulkUpsertCities",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: be,
      modelSelectionField: cn,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpsertGameCitiesInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Ht,
    },
  ]);
let Db = class {
  constructor(t) {
    (this.clientOrParent = t),
      (this.connection = this.clientOrParent.connection),
      (this.player = new Ob(this.connection)),
      (this.round = new Tb(this.connection)),
      (this.stadium = new Rb(this.connection)),
      (this.city = new Bb(this.connection));
  }
};
const Si = { __typename: !0, id: !0, baseModelName: !0, createdAt: !0, updatedAt: !0 },
  xe = "baseModel",
  zn = "baseModels",
  Cb = Y(xe, zn, Si, [
    {
      type: "findOne",
      operationName: xe,
      modelApiIdentifier: xe,
      findByVariableName: "id",
      defaultSelection: Si,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: xe,
      modelApiIdentifier: xe,
      findByVariableName: "id",
      defaultSelection: Si,
      namespace: "hasManyThrough",
    },
    { type: "findMany", operationName: zn, modelApiIdentifier: xe, defaultSelection: Si, namespace: "hasManyThrough" },
    { type: "findFirst", operationName: zn, modelApiIdentifier: xe, defaultSelection: Si, namespace: "hasManyThrough" },
    { type: "maybeFindFirst", operationName: zn, modelApiIdentifier: xe, defaultSelection: Si, namespace: "hasManyThrough" },
    {
      type: "findOne",
      operationName: zn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: xe,
      defaultSelection: Si,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: zn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: xe,
      defaultSelection: Si,
      namespace: "hasManyThrough",
    },
    {
      type: "action",
      operationName: "createBaseModel",
      operationReturnType: "CreateHasManyThroughBaseModel",
      functionName: "create",
      namespace: "hasManyThrough",
      modelApiIdentifier: xe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { baseModel: { required: !1, type: "CreateHasManyThroughBaseModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Si,
    },
    {
      type: "action",
      operationName: "bulkCreateBaseModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: xe,
      modelSelectionField: zn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkCreateHasManyThroughBaseModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Si,
    },
    {
      type: "action",
      operationName: "updateBaseModel",
      operationReturnType: "UpdateHasManyThroughBaseModel",
      functionName: "update",
      namespace: "hasManyThrough",
      modelApiIdentifier: xe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, baseModel: { required: !1, type: "UpdateHasManyThroughBaseModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Si,
    },
    {
      type: "action",
      operationName: "bulkUpdateBaseModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: xe,
      modelSelectionField: zn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpdateHasManyThroughBaseModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Si,
    },
    {
      type: "action",
      operationName: "deleteBaseModel",
      operationReturnType: "DeleteHasManyThroughBaseModel",
      functionName: "delete",
      namespace: "hasManyThrough",
      modelApiIdentifier: xe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: xe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteBaseModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: xe,
      modelSelectionField: zn,
      namespace: "hasManyThrough",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertBaseModel",
      operationReturnType: "UpsertHasManyThroughBaseModel",
      functionName: "upsert",
      namespace: "hasManyThrough",
      modelApiIdentifier: xe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, baseModel: { required: !1, type: "UpsertHasManyThroughBaseModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateHasManyThroughBaseModelResult": { hasReturnType: !1 },
        "... on UpdateHasManyThroughBaseModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Si,
    },
    {
      type: "action",
      operationName: "bulkUpsertBaseModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: xe,
      modelSelectionField: zn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpsertHasManyThroughBaseModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Si,
    },
  ]),
  ki = { __typename: !0, id: !0, createdAt: !0, joinerBelongsToBaseId: !0, joinerBelongsToSiblingId: !0, updatedAt: !0 },
  $e = "joinerModel",
  Hn = "joinerModels",
  Ub = Y($e, Hn, ki, [
    {
      type: "findOne",
      operationName: $e,
      modelApiIdentifier: $e,
      findByVariableName: "id",
      defaultSelection: ki,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: $e,
      modelApiIdentifier: $e,
      findByVariableName: "id",
      defaultSelection: ki,
      namespace: "hasManyThrough",
    },
    { type: "findMany", operationName: Hn, modelApiIdentifier: $e, defaultSelection: ki, namespace: "hasManyThrough" },
    { type: "findFirst", operationName: Hn, modelApiIdentifier: $e, defaultSelection: ki, namespace: "hasManyThrough" },
    { type: "maybeFindFirst", operationName: Hn, modelApiIdentifier: $e, defaultSelection: ki, namespace: "hasManyThrough" },
    {
      type: "findOne",
      operationName: Hn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: $e,
      defaultSelection: ki,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: Hn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: $e,
      defaultSelection: ki,
      namespace: "hasManyThrough",
    },
    {
      type: "action",
      operationName: "createJoinerModel",
      operationReturnType: "CreateHasManyThroughJoinerModel",
      functionName: "create",
      namespace: "hasManyThrough",
      modelApiIdentifier: $e,
      operatesWithRecordIdentity: !1,
      modelSelectionField: $e,
      isBulk: !1,
      isDeleter: !1,
      variables: { joinerModel: { required: !1, type: "CreateHasManyThroughJoinerModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ki,
    },
    {
      type: "action",
      operationName: "bulkCreateJoinerModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: $e,
      modelSelectionField: Hn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkCreateHasManyThroughJoinerModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: ki,
    },
    {
      type: "action",
      operationName: "updateJoinerModel",
      operationReturnType: "UpdateHasManyThroughJoinerModel",
      functionName: "update",
      namespace: "hasManyThrough",
      modelApiIdentifier: $e,
      operatesWithRecordIdentity: !0,
      modelSelectionField: $e,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, joinerModel: { required: !1, type: "UpdateHasManyThroughJoinerModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ki,
    },
    {
      type: "action",
      operationName: "bulkUpdateJoinerModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: $e,
      modelSelectionField: Hn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpdateHasManyThroughJoinerModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: ki,
    },
    {
      type: "action",
      operationName: "deleteJoinerModel",
      operationReturnType: "DeleteHasManyThroughJoinerModel",
      functionName: "delete",
      namespace: "hasManyThrough",
      modelApiIdentifier: $e,
      operatesWithRecordIdentity: !0,
      modelSelectionField: $e,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteJoinerModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: $e,
      modelSelectionField: Hn,
      namespace: "hasManyThrough",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertJoinerModel",
      operationReturnType: "UpsertHasManyThroughJoinerModel",
      functionName: "upsert",
      namespace: "hasManyThrough",
      modelApiIdentifier: $e,
      operatesWithRecordIdentity: !1,
      modelSelectionField: $e,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, joinerModel: { required: !1, type: "UpsertHasManyThroughJoinerModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateHasManyThroughJoinerModelResult": { hasReturnType: !1 },
        "... on UpdateHasManyThroughJoinerModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ki,
    },
    {
      type: "action",
      operationName: "bulkUpsertJoinerModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: $e,
      modelSelectionField: Hn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpsertHasManyThroughJoinerModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: ki,
    },
  ]),
  vi = { __typename: !0, id: !0, createdAt: !0, siblingName: !0, updatedAt: !0 },
  Ge = "siblingModel",
  Qn = "siblingModels",
  qb = Y(Ge, Qn, vi, [
    {
      type: "findOne",
      operationName: Ge,
      modelApiIdentifier: Ge,
      findByVariableName: "id",
      defaultSelection: vi,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: Ge,
      modelApiIdentifier: Ge,
      findByVariableName: "id",
      defaultSelection: vi,
      namespace: "hasManyThrough",
    },
    { type: "findMany", operationName: Qn, modelApiIdentifier: Ge, defaultSelection: vi, namespace: "hasManyThrough" },
    { type: "findFirst", operationName: Qn, modelApiIdentifier: Ge, defaultSelection: vi, namespace: "hasManyThrough" },
    { type: "maybeFindFirst", operationName: Qn, modelApiIdentifier: Ge, defaultSelection: vi, namespace: "hasManyThrough" },
    {
      type: "findOne",
      operationName: Qn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ge,
      defaultSelection: vi,
      namespace: "hasManyThrough",
    },
    {
      type: "maybeFindOne",
      operationName: Qn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ge,
      defaultSelection: vi,
      namespace: "hasManyThrough",
    },
    {
      type: "action",
      operationName: "createSiblingModel",
      operationReturnType: "CreateHasManyThroughSiblingModel",
      functionName: "create",
      namespace: "hasManyThrough",
      modelApiIdentifier: Ge,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { siblingModel: { required: !1, type: "CreateHasManyThroughSiblingModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: vi,
    },
    {
      type: "action",
      operationName: "bulkCreateSiblingModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ge,
      modelSelectionField: Qn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkCreateHasManyThroughSiblingModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: vi,
    },
    {
      type: "action",
      operationName: "updateSiblingModel",
      operationReturnType: "UpdateHasManyThroughSiblingModel",
      functionName: "update",
      namespace: "hasManyThrough",
      modelApiIdentifier: Ge,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, siblingModel: { required: !1, type: "UpdateHasManyThroughSiblingModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: vi,
    },
    {
      type: "action",
      operationName: "bulkUpdateSiblingModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ge,
      modelSelectionField: Qn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpdateHasManyThroughSiblingModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: vi,
    },
    {
      type: "action",
      operationName: "deleteSiblingModel",
      operationReturnType: "DeleteHasManyThroughSiblingModel",
      functionName: "delete",
      namespace: "hasManyThrough",
      modelApiIdentifier: Ge,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ge,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteSiblingModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ge,
      modelSelectionField: Qn,
      namespace: "hasManyThrough",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertSiblingModel",
      operationReturnType: "UpsertHasManyThroughSiblingModel",
      functionName: "upsert",
      namespace: "hasManyThrough",
      modelApiIdentifier: Ge,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ge,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, siblingModel: { required: !1, type: "UpsertHasManyThroughSiblingModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateHasManyThroughSiblingModelResult": { hasReturnType: !1 },
        "... on UpdateHasManyThroughSiblingModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: vi,
    },
    {
      type: "action",
      operationName: "bulkUpsertSiblingModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ge,
      modelSelectionField: Qn,
      namespace: "hasManyThrough",
      variables: { inputs: { required: !0, type: "[BulkUpsertHasManyThroughSiblingModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: vi,
    },
  ]);
class Pb {
  constructor(t) {
    (this.clientOrParent = t),
      (this.connection = this.clientOrParent.connection),
      (this.baseModel = new Cb(this.connection)),
      (this.joinerModel = new Ub(this.connection)),
      (this.siblingModel = new qb(this.connection));
  }
}
const st = {
    __typename: !0,
    id: !0,
    createdAt: !0,
    nonUniqueString: !0,
    uniqueBelongsToId: !0,
    uniqueEmail: !0,
    uniqueString: !0,
    updatedAt: !0,
  },
  de = "mainModel",
  Qt = "mainModels",
  Vb = Y(de, Qt, st, [
    {
      type: "findOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: de,
      modelApiIdentifier: de,
      findByVariableName: "id",
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    { type: "findMany", operationName: Qt, modelApiIdentifier: de, defaultSelection: st, namespace: "uniqueFields" },
    { type: "findFirst", operationName: Qt, modelApiIdentifier: de, defaultSelection: st, namespace: "uniqueFields" },
    { type: "maybeFindFirst", operationName: Qt, modelApiIdentifier: de, defaultSelection: st, namespace: "uniqueFields" },
    {
      type: "findOne",
      operationName: Qt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Qt,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "findOne",
      operationName: Qt,
      functionName: "findByUniqueString",
      findByField: "uniqueString",
      findByVariableName: "uniqueString",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Qt,
      functionName: "maybeFindByUniqueString",
      findByField: "uniqueString",
      findByVariableName: "uniqueString",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "findOne",
      operationName: Qt,
      functionName: "findByUniqueEmail",
      findByField: "uniqueEmail",
      findByVariableName: "uniqueEmail",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Qt,
      functionName: "maybeFindByUniqueEmail",
      findByField: "uniqueEmail",
      findByVariableName: "uniqueEmail",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "findOne",
      operationName: Qt,
      functionName: "findByUniqueBelongsTo",
      findByField: "uniqueBelongsToId",
      findByVariableName: "uniqueBelongsToId",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Qt,
      functionName: "maybeFindByUniqueBelongsTo",
      findByField: "uniqueBelongsToId",
      findByVariableName: "uniqueBelongsToId",
      modelApiIdentifier: de,
      defaultSelection: st,
      namespace: "uniqueFields",
    },
    {
      type: "action",
      operationName: "createMainModel",
      operationReturnType: "CreateUniqueFieldsMainModel",
      functionName: "create",
      namespace: "uniqueFields",
      modelApiIdentifier: de,
      operatesWithRecordIdentity: !1,
      modelSelectionField: de,
      isBulk: !1,
      isDeleter: !1,
      variables: { mainModel: { required: !1, type: "CreateUniqueFieldsMainModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: st,
    },
    {
      type: "action",
      operationName: "bulkCreateMainModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: de,
      modelSelectionField: Qt,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkCreateUniqueFieldsMainModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: st,
    },
    {
      type: "action",
      operationName: "updateMainModel",
      operationReturnType: "UpdateUniqueFieldsMainModel",
      functionName: "update",
      namespace: "uniqueFields",
      modelApiIdentifier: de,
      operatesWithRecordIdentity: !0,
      modelSelectionField: de,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, mainModel: { required: !1, type: "UpdateUniqueFieldsMainModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: st,
    },
    {
      type: "action",
      operationName: "bulkUpdateMainModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: de,
      modelSelectionField: Qt,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpdateUniqueFieldsMainModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: st,
    },
    {
      type: "action",
      operationName: "deleteMainModel",
      operationReturnType: "DeleteUniqueFieldsMainModel",
      functionName: "delete",
      namespace: "uniqueFields",
      modelApiIdentifier: de,
      operatesWithRecordIdentity: !0,
      modelSelectionField: de,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteMainModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: de,
      modelSelectionField: Qt,
      namespace: "uniqueFields",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertMainModel",
      operationReturnType: "UpsertUniqueFieldsMainModel",
      functionName: "upsert",
      namespace: "uniqueFields",
      modelApiIdentifier: de,
      operatesWithRecordIdentity: !1,
      modelSelectionField: de,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, mainModel: { required: !1, type: "UpsertUniqueFieldsMainModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateUniqueFieldsMainModelResult": { hasReturnType: !1 },
        "... on UpdateUniqueFieldsMainModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: st,
    },
    {
      type: "action",
      operationName: "bulkUpsertMainModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: de,
      modelSelectionField: Qt,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpsertUniqueFieldsMainModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: st,
    },
  ]),
  Kt = { __typename: !0, id: !0, createdAt: !0, parentNonUniqueString: !0, parentUniqueString: !0, updatedAt: !0 },
  Fe = "parentModel",
  Xi = "parentModels",
  Eb = Y(Fe, Xi, Kt, [
    {
      type: "findOne",
      operationName: Fe,
      modelApiIdentifier: Fe,
      findByVariableName: "id",
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Fe,
      modelApiIdentifier: Fe,
      findByVariableName: "id",
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    { type: "findMany", operationName: Xi, modelApiIdentifier: Fe, defaultSelection: Kt, namespace: "uniqueFields" },
    { type: "findFirst", operationName: Xi, modelApiIdentifier: Fe, defaultSelection: Kt, namespace: "uniqueFields" },
    { type: "maybeFindFirst", operationName: Xi, modelApiIdentifier: Fe, defaultSelection: Kt, namespace: "uniqueFields" },
    {
      type: "findOne",
      operationName: Xi,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Fe,
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Xi,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Fe,
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    {
      type: "findOne",
      operationName: Xi,
      functionName: "findByParentUniqueString",
      findByField: "parentUniqueString",
      findByVariableName: "parentUniqueString",
      modelApiIdentifier: Fe,
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Xi,
      functionName: "maybeFindByParentUniqueString",
      findByField: "parentUniqueString",
      findByVariableName: "parentUniqueString",
      modelApiIdentifier: Fe,
      defaultSelection: Kt,
      namespace: "uniqueFields",
    },
    {
      type: "action",
      operationName: "createParentModel",
      operationReturnType: "CreateUniqueFieldsParentModel",
      functionName: "create",
      namespace: "uniqueFields",
      modelApiIdentifier: Fe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Fe,
      isBulk: !1,
      isDeleter: !1,
      variables: { parentModel: { required: !1, type: "CreateUniqueFieldsParentModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Kt,
    },
    {
      type: "action",
      operationName: "bulkCreateParentModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Fe,
      modelSelectionField: Xi,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkCreateUniqueFieldsParentModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Kt,
    },
    {
      type: "action",
      operationName: "updateParentModel",
      operationReturnType: "UpdateUniqueFieldsParentModel",
      functionName: "update",
      namespace: "uniqueFields",
      modelApiIdentifier: Fe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Fe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, parentModel: { required: !1, type: "UpdateUniqueFieldsParentModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Kt,
    },
    {
      type: "action",
      operationName: "bulkUpdateParentModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Fe,
      modelSelectionField: Xi,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpdateUniqueFieldsParentModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Kt,
    },
    {
      type: "action",
      operationName: "deleteParentModel",
      operationReturnType: "DeleteUniqueFieldsParentModel",
      functionName: "delete",
      namespace: "uniqueFields",
      modelApiIdentifier: Fe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Fe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteParentModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Fe,
      modelSelectionField: Xi,
      namespace: "uniqueFields",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertParentModel",
      operationReturnType: "UpsertUniqueFieldsParentModel",
      functionName: "upsert",
      namespace: "uniqueFields",
      modelApiIdentifier: Fe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Fe,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, parentModel: { required: !1, type: "UpsertUniqueFieldsParentModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateUniqueFieldsParentModelResult": { hasReturnType: !1 },
        "... on UpdateUniqueFieldsParentModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Kt,
    },
    {
      type: "action",
      operationName: "bulkUpsertParentModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Fe,
      modelSelectionField: Xi,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpsertUniqueFieldsParentModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Kt,
    },
  ]),
  Ni = { __typename: !0, id: !0, alias: !0, createdAt: !0, mainModelParentId: !0, updatedAt: !0 },
  je = "childModel",
  Kn = "childModels",
  _b = Y(je, Kn, Ni, [
    {
      type: "findOne",
      operationName: je,
      modelApiIdentifier: je,
      findByVariableName: "id",
      defaultSelection: Ni,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: je,
      modelApiIdentifier: je,
      findByVariableName: "id",
      defaultSelection: Ni,
      namespace: "uniqueFields",
    },
    { type: "findMany", operationName: Kn, modelApiIdentifier: je, defaultSelection: Ni, namespace: "uniqueFields" },
    { type: "findFirst", operationName: Kn, modelApiIdentifier: je, defaultSelection: Ni, namespace: "uniqueFields" },
    { type: "maybeFindFirst", operationName: Kn, modelApiIdentifier: je, defaultSelection: Ni, namespace: "uniqueFields" },
    {
      type: "findOne",
      operationName: Kn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: je,
      defaultSelection: Ni,
      namespace: "uniqueFields",
    },
    {
      type: "maybeFindOne",
      operationName: Kn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: je,
      defaultSelection: Ni,
      namespace: "uniqueFields",
    },
    {
      type: "action",
      operationName: "createChildModel",
      operationReturnType: "CreateUniqueFieldsChildModel",
      functionName: "create",
      namespace: "uniqueFields",
      modelApiIdentifier: je,
      operatesWithRecordIdentity: !1,
      modelSelectionField: je,
      isBulk: !1,
      isDeleter: !1,
      variables: { childModel: { required: !1, type: "CreateUniqueFieldsChildModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ni,
    },
    {
      type: "action",
      operationName: "bulkCreateChildModels",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: je,
      modelSelectionField: Kn,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkCreateUniqueFieldsChildModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ni,
    },
    {
      type: "action",
      operationName: "updateChildModel",
      operationReturnType: "UpdateUniqueFieldsChildModel",
      functionName: "update",
      namespace: "uniqueFields",
      modelApiIdentifier: je,
      operatesWithRecordIdentity: !0,
      modelSelectionField: je,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, childModel: { required: !1, type: "UpdateUniqueFieldsChildModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ni,
    },
    {
      type: "action",
      operationName: "bulkUpdateChildModels",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: je,
      modelSelectionField: Kn,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpdateUniqueFieldsChildModelsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ni,
    },
    {
      type: "action",
      operationName: "deleteChildModel",
      operationReturnType: "DeleteUniqueFieldsChildModel",
      functionName: "delete",
      namespace: "uniqueFields",
      modelApiIdentifier: je,
      operatesWithRecordIdentity: !0,
      modelSelectionField: je,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteChildModels",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: je,
      modelSelectionField: Kn,
      namespace: "uniqueFields",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertChildModel",
      operationReturnType: "UpsertUniqueFieldsChildModel",
      functionName: "upsert",
      namespace: "uniqueFields",
      modelApiIdentifier: je,
      operatesWithRecordIdentity: !1,
      modelSelectionField: je,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, childModel: { required: !1, type: "UpsertUniqueFieldsChildModelInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateUniqueFieldsChildModelResult": { hasReturnType: !1 },
        "... on UpdateUniqueFieldsChildModelResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ni,
    },
    {
      type: "action",
      operationName: "bulkUpsertChildModels",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: je,
      modelSelectionField: Kn,
      namespace: "uniqueFields",
      variables: { inputs: { required: !0, type: "[BulkUpsertUniqueFieldsChildModelsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Ni,
    },
  ]);
class xb {
  constructor(t) {
    (this.clientOrParent = t),
      (this.connection = this.clientOrParent.connection),
      (this.mainModel = new Vb(this.connection)),
      (this.parentModel = new Eb(this.connection)),
      (this.childModel = new _b(this.connection));
  }
}
const Ai = { __typename: !0, id: !0, createdAt: !0, department: !0, firstName: !0, lastName: !0, updatedAt: !0, year: !0 },
  We = "student",
  Jn = "students",
  $b = Y(We, Jn, Ai, [
    {
      type: "findOne",
      operationName: We,
      modelApiIdentifier: We,
      findByVariableName: "id",
      defaultSelection: Ai,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: We,
      modelApiIdentifier: We,
      findByVariableName: "id",
      defaultSelection: Ai,
      namespace: ["whatever", "university"],
    },
    { type: "findMany", operationName: Jn, modelApiIdentifier: We, defaultSelection: Ai, namespace: ["whatever", "university"] },
    { type: "findFirst", operationName: Jn, modelApiIdentifier: We, defaultSelection: Ai, namespace: ["whatever", "university"] },
    { type: "maybeFindFirst", operationName: Jn, modelApiIdentifier: We, defaultSelection: Ai, namespace: ["whatever", "university"] },
    {
      type: "findOne",
      operationName: Jn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: We,
      defaultSelection: Ai,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Jn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: We,
      defaultSelection: Ai,
      namespace: ["whatever", "university"],
    },
    {
      type: "action",
      operationName: "createStudent",
      operationReturnType: "CreateWhateverUniversityStudent",
      functionName: "create",
      namespace: ["whatever", "university"],
      modelApiIdentifier: We,
      operatesWithRecordIdentity: !1,
      modelSelectionField: We,
      isBulk: !1,
      isDeleter: !1,
      variables: { student: { required: !1, type: "CreateWhateverUniversityStudentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ai,
    },
    {
      type: "action",
      operationName: "bulkCreateStudents",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: We,
      modelSelectionField: Jn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkCreateWhateverUniversityStudentsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ai,
    },
    {
      type: "action",
      operationName: "updateStudent",
      operationReturnType: "UpdateWhateverUniversityStudent",
      functionName: "update",
      namespace: ["whatever", "university"],
      modelApiIdentifier: We,
      operatesWithRecordIdentity: !0,
      modelSelectionField: We,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, student: { required: !1, type: "UpdateWhateverUniversityStudentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ai,
    },
    {
      type: "action",
      operationName: "bulkUpdateStudents",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: We,
      modelSelectionField: Jn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpdateWhateverUniversityStudentsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ai,
    },
    {
      type: "action",
      operationName: "deleteStudent",
      operationReturnType: "DeleteWhateverUniversityStudent",
      functionName: "delete",
      namespace: ["whatever", "university"],
      modelApiIdentifier: We,
      operatesWithRecordIdentity: !0,
      modelSelectionField: We,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteStudents",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: We,
      modelSelectionField: Jn,
      namespace: ["whatever", "university"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertStudent",
      operationReturnType: "UpsertWhateverUniversityStudent",
      functionName: "upsert",
      namespace: ["whatever", "university"],
      modelApiIdentifier: We,
      operatesWithRecordIdentity: !1,
      modelSelectionField: We,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, student: { required: !1, type: "UpsertWhateverUniversityStudentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateWhateverUniversityStudentResult": { hasReturnType: !1 },
        "... on UpdateWhateverUniversityStudentResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ai,
    },
    {
      type: "action",
      operationName: "bulkUpsertStudents",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: We,
      modelSelectionField: Jn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpsertWhateverUniversityStudentsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Ai,
    },
  ]),
  Fi = { __typename: !0, id: !0, createdAt: !0, description: { markdown: !0, truncatedHTML: !0 }, title: !0, updatedAt: !0 },
  Le = "course",
  Yn = "courses",
  Gb = Y(Le, Yn, Fi, [
    {
      type: "findOne",
      operationName: Le,
      modelApiIdentifier: Le,
      findByVariableName: "id",
      defaultSelection: Fi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Le,
      modelApiIdentifier: Le,
      findByVariableName: "id",
      defaultSelection: Fi,
      namespace: ["whatever", "university"],
    },
    { type: "findMany", operationName: Yn, modelApiIdentifier: Le, defaultSelection: Fi, namespace: ["whatever", "university"] },
    { type: "findFirst", operationName: Yn, modelApiIdentifier: Le, defaultSelection: Fi, namespace: ["whatever", "university"] },
    { type: "maybeFindFirst", operationName: Yn, modelApiIdentifier: Le, defaultSelection: Fi, namespace: ["whatever", "university"] },
    {
      type: "findOne",
      operationName: Yn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Le,
      defaultSelection: Fi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Yn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Le,
      defaultSelection: Fi,
      namespace: ["whatever", "university"],
    },
    {
      type: "action",
      operationName: "createCourse",
      operationReturnType: "CreateWhateverUniversityCourse",
      functionName: "create",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Le,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Le,
      isBulk: !1,
      isDeleter: !1,
      variables: { course: { required: !1, type: "CreateWhateverUniversityCourseInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Fi,
    },
    {
      type: "action",
      operationName: "bulkCreateCourses",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Le,
      modelSelectionField: Yn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkCreateWhateverUniversityCoursesInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Fi,
    },
    {
      type: "action",
      operationName: "updateCourse",
      operationReturnType: "UpdateWhateverUniversityCourse",
      functionName: "update",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Le,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Le,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, course: { required: !1, type: "UpdateWhateverUniversityCourseInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Fi,
    },
    {
      type: "action",
      operationName: "bulkUpdateCourses",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Le,
      modelSelectionField: Yn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpdateWhateverUniversityCoursesInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Fi,
    },
    {
      type: "action",
      operationName: "deleteCourse",
      operationReturnType: "DeleteWhateverUniversityCourse",
      functionName: "delete",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Le,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Le,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteCourses",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Le,
      modelSelectionField: Yn,
      namespace: ["whatever", "university"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertCourse",
      operationReturnType: "UpsertWhateverUniversityCourse",
      functionName: "upsert",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Le,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Le,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, course: { required: !1, type: "UpsertWhateverUniversityCourseInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateWhateverUniversityCourseResult": { hasReturnType: !1 },
        "... on UpdateWhateverUniversityCourseResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Fi,
    },
    {
      type: "action",
      operationName: "bulkUpsertCourses",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Le,
      modelSelectionField: Yn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpsertWhateverUniversityCoursesInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Fi,
    },
  ]),
  wi = { __typename: !0, id: !0, courseId: !0, createdAt: !0, effectiveFrom: !0, effectiveTo: !0, studentId: !0, updatedAt: !0 },
  ze = "registration",
  Zn = "registrations",
  jb = Y(ze, Zn, wi, [
    {
      type: "findOne",
      operationName: ze,
      modelApiIdentifier: ze,
      findByVariableName: "id",
      defaultSelection: wi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: ze,
      modelApiIdentifier: ze,
      findByVariableName: "id",
      defaultSelection: wi,
      namespace: ["whatever", "university"],
    },
    { type: "findMany", operationName: Zn, modelApiIdentifier: ze, defaultSelection: wi, namespace: ["whatever", "university"] },
    { type: "findFirst", operationName: Zn, modelApiIdentifier: ze, defaultSelection: wi, namespace: ["whatever", "university"] },
    { type: "maybeFindFirst", operationName: Zn, modelApiIdentifier: ze, defaultSelection: wi, namespace: ["whatever", "university"] },
    {
      type: "findOne",
      operationName: Zn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ze,
      defaultSelection: wi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Zn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ze,
      defaultSelection: wi,
      namespace: ["whatever", "university"],
    },
    {
      type: "action",
      operationName: "createRegistration",
      operationReturnType: "CreateWhateverUniversityRegistration",
      functionName: "create",
      namespace: ["whatever", "university"],
      modelApiIdentifier: ze,
      operatesWithRecordIdentity: !1,
      modelSelectionField: ze,
      isBulk: !1,
      isDeleter: !1,
      variables: { registration: { required: !1, type: "CreateWhateverUniversityRegistrationInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: wi,
    },
    {
      type: "action",
      operationName: "bulkCreateRegistrations",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: ze,
      modelSelectionField: Zn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkCreateWhateverUniversityRegistrationsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: wi,
    },
    {
      type: "action",
      operationName: "updateRegistration",
      operationReturnType: "UpdateWhateverUniversityRegistration",
      functionName: "update",
      namespace: ["whatever", "university"],
      modelApiIdentifier: ze,
      operatesWithRecordIdentity: !0,
      modelSelectionField: ze,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        registration: { required: !1, type: "UpdateWhateverUniversityRegistrationInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: wi,
    },
    {
      type: "action",
      operationName: "bulkUpdateRegistrations",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: ze,
      modelSelectionField: Zn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpdateWhateverUniversityRegistrationsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: wi,
    },
    {
      type: "action",
      operationName: "deleteRegistration",
      operationReturnType: "DeleteWhateverUniversityRegistration",
      functionName: "delete",
      namespace: ["whatever", "university"],
      modelApiIdentifier: ze,
      operatesWithRecordIdentity: !0,
      modelSelectionField: ze,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteRegistrations",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: ze,
      modelSelectionField: Zn,
      namespace: ["whatever", "university"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertRegistration",
      operationReturnType: "UpsertWhateverUniversityRegistration",
      functionName: "upsert",
      namespace: ["whatever", "university"],
      modelApiIdentifier: ze,
      operatesWithRecordIdentity: !1,
      modelSelectionField: ze,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        on: { required: !1, type: "[String!]" },
        registration: { required: !1, type: "UpsertWhateverUniversityRegistrationInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateWhateverUniversityRegistrationResult": { hasReturnType: !1 },
        "... on UpdateWhateverUniversityRegistrationResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: wi,
    },
    {
      type: "action",
      operationName: "bulkUpsertRegistrations",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: ze,
      modelSelectionField: Zn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpsertWhateverUniversityRegistrationsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: wi,
    },
  ]),
  Mi = { __typename: !0, id: !0, createdAt: !0, firstName: !0, lastName: !0, title: !0, updatedAt: !0 },
  He = "professor",
  Xn = "professors",
  Wb = Y(He, Xn, Mi, [
    {
      type: "findOne",
      operationName: He,
      modelApiIdentifier: He,
      findByVariableName: "id",
      defaultSelection: Mi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: He,
      modelApiIdentifier: He,
      findByVariableName: "id",
      defaultSelection: Mi,
      namespace: ["whatever", "university"],
    },
    { type: "findMany", operationName: Xn, modelApiIdentifier: He, defaultSelection: Mi, namespace: ["whatever", "university"] },
    { type: "findFirst", operationName: Xn, modelApiIdentifier: He, defaultSelection: Mi, namespace: ["whatever", "university"] },
    { type: "maybeFindFirst", operationName: Xn, modelApiIdentifier: He, defaultSelection: Mi, namespace: ["whatever", "university"] },
    {
      type: "findOne",
      operationName: Xn,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: He,
      defaultSelection: Mi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Xn,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: He,
      defaultSelection: Mi,
      namespace: ["whatever", "university"],
    },
    {
      type: "action",
      operationName: "createProfessor",
      operationReturnType: "CreateWhateverUniversityProfessor",
      functionName: "create",
      namespace: ["whatever", "university"],
      modelApiIdentifier: He,
      operatesWithRecordIdentity: !1,
      modelSelectionField: He,
      isBulk: !1,
      isDeleter: !1,
      variables: { professor: { required: !1, type: "CreateWhateverUniversityProfessorInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Mi,
    },
    {
      type: "action",
      operationName: "bulkCreateProfessors",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: He,
      modelSelectionField: Xn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkCreateWhateverUniversityProfessorsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Mi,
    },
    {
      type: "action",
      operationName: "updateProfessor",
      operationReturnType: "UpdateWhateverUniversityProfessor",
      functionName: "update",
      namespace: ["whatever", "university"],
      modelApiIdentifier: He,
      operatesWithRecordIdentity: !0,
      modelSelectionField: He,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, professor: { required: !1, type: "UpdateWhateverUniversityProfessorInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Mi,
    },
    {
      type: "action",
      operationName: "bulkUpdateProfessors",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: He,
      modelSelectionField: Xn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpdateWhateverUniversityProfessorsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Mi,
    },
    {
      type: "action",
      operationName: "deleteProfessor",
      operationReturnType: "DeleteWhateverUniversityProfessor",
      functionName: "delete",
      namespace: ["whatever", "university"],
      modelApiIdentifier: He,
      operatesWithRecordIdentity: !0,
      modelSelectionField: He,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteProfessors",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: He,
      modelSelectionField: Xn,
      namespace: ["whatever", "university"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertProfessor",
      operationReturnType: "UpsertWhateverUniversityProfessor",
      functionName: "upsert",
      namespace: ["whatever", "university"],
      modelApiIdentifier: He,
      operatesWithRecordIdentity: !1,
      modelSelectionField: He,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, professor: { required: !1, type: "UpsertWhateverUniversityProfessorInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateWhateverUniversityProfessorResult": { hasReturnType: !1 },
        "... on UpdateWhateverUniversityProfessorResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Mi,
    },
    {
      type: "action",
      operationName: "bulkUpsertProfessors",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: He,
      modelSelectionField: Xn,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpsertWhateverUniversityProfessorsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Mi,
    },
  ]),
  Oi = { __typename: !0, id: !0, courseId: !0, createdAt: !0, professorId: !0, updatedAt: !0 },
  Qe = "assignment",
  ea = "assignments",
  Lb = Y(Qe, ea, Oi, [
    {
      type: "findOne",
      operationName: Qe,
      modelApiIdentifier: Qe,
      findByVariableName: "id",
      defaultSelection: Oi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: Qe,
      modelApiIdentifier: Qe,
      findByVariableName: "id",
      defaultSelection: Oi,
      namespace: ["whatever", "university"],
    },
    { type: "findMany", operationName: ea, modelApiIdentifier: Qe, defaultSelection: Oi, namespace: ["whatever", "university"] },
    { type: "findFirst", operationName: ea, modelApiIdentifier: Qe, defaultSelection: Oi, namespace: ["whatever", "university"] },
    { type: "maybeFindFirst", operationName: ea, modelApiIdentifier: Qe, defaultSelection: Oi, namespace: ["whatever", "university"] },
    {
      type: "findOne",
      operationName: ea,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Qe,
      defaultSelection: Oi,
      namespace: ["whatever", "university"],
    },
    {
      type: "maybeFindOne",
      operationName: ea,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Qe,
      defaultSelection: Oi,
      namespace: ["whatever", "university"],
    },
    {
      type: "action",
      operationName: "createAssignment",
      operationReturnType: "CreateWhateverUniversityAssignment",
      functionName: "create",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Qe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { assignment: { required: !1, type: "CreateWhateverUniversityAssignmentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oi,
    },
    {
      type: "action",
      operationName: "bulkCreateAssignments",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Qe,
      modelSelectionField: ea,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkCreateWhateverUniversityAssignmentsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Oi,
    },
    {
      type: "action",
      operationName: "updateAssignment",
      operationReturnType: "UpdateWhateverUniversityAssignment",
      functionName: "update",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Qe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, assignment: { required: !1, type: "UpdateWhateverUniversityAssignmentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oi,
    },
    {
      type: "action",
      operationName: "bulkUpdateAssignments",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Qe,
      modelSelectionField: ea,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpdateWhateverUniversityAssignmentsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Oi,
    },
    {
      type: "action",
      operationName: "deleteAssignment",
      operationReturnType: "DeleteWhateverUniversityAssignment",
      functionName: "delete",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Qe,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Qe,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteAssignments",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Qe,
      modelSelectionField: ea,
      namespace: ["whatever", "university"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertAssignment",
      operationReturnType: "UpsertWhateverUniversityAssignment",
      functionName: "upsert",
      namespace: ["whatever", "university"],
      modelApiIdentifier: Qe,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Qe,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, assignment: { required: !1, type: "UpsertWhateverUniversityAssignmentInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateWhateverUniversityAssignmentResult": { hasReturnType: !1 },
        "... on UpdateWhateverUniversityAssignmentResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Oi,
    },
    {
      type: "action",
      operationName: "bulkUpsertAssignments",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Qe,
      modelSelectionField: ea,
      namespace: ["whatever", "university"],
      variables: { inputs: { required: !0, type: "[BulkUpsertWhateverUniversityAssignmentsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Oi,
    },
  ]);
class zb {
  constructor(t) {
    (this.clientOrParent = t),
      (this.connection = this.clientOrParent.connection),
      (this.student = new $b(this.connection)),
      (this.course = new Gb(this.connection)),
      (this.registration = new jb(this.connection)),
      (this.professor = new Wb(this.connection)),
      (this.assignment = new Lb(this.connection));
  }
}
class Hb {
  constructor(t) {
    (this.clientOrParent = t), (this.connection = this.clientOrParent.connection), (this.university = new zb(this));
  }
}
class Qb {
  constructor(t) {
    (this.clientOrParent = t),
      (this.actionA = es(this, {
        type: "globalAction",
        functionName: "actionA",
        operationName: "actionA",
        operationReturnType: "NameSpacedActionA",
        namespace: ["name", "spaced"],
        variables: {},
      })),
      (this.customObjectParams = es(this, {
        type: "globalAction",
        functionName: "customObjectParams",
        operationName: "customObjectParams",
        operationReturnType: "NameSpacedCustomObjectParams",
        namespace: ["name", "spaced"],
        variables: {
          objParam: { required: !1, type: "NameSpacedCustomObjectParamsObjParamInput" },
          rootLevelStr: { required: !1, type: "String" },
        },
      })),
      (this.noTriggerGlobalAction = es(this, {
        type: "stubbedAction",
        functionName: "noTriggerGlobalAction",
        actionApiIdentifier: "noTriggerGlobalAction",
        dataPath: "name.spaced.noTriggerGlobalAction",
        errorMessage:
          "The action name/spaced/noTriggerGlobalAction does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
        variables: {},
        reason: "MissingApiTrigger",
      })),
      (this.connection = this.clientOrParent.connection);
  }
}
class Kb {
  constructor(t) {
    (this.clientOrParent = t), (this.connection = this.clientOrParent.connection), (this.spaced = new Qb(this));
  }
}
const qu = "production",
  Jb = "development",
  Yb = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Cp = class $o {
  constructor(t) {
    var a, s;
    (this.options = t),
      (this.createTestData = es(this, {
        type: "globalAction",
        functionName: "createTestData",
        operationName: "createTestData",
        operationReturnType: "CreateTestData",
        namespace: null,
        variables: {},
      })),
      (this.flipAll = es(this, {
        type: "globalAction",
        functionName: "flipAll",
        operationName: "flipAll",
        operationReturnType: "FlipAll",
        namespace: null,
        variables: { inventoryCount: { required: !1, type: "Float" }, title: { required: !1, type: "String" } },
      })),
      (this.noTriggerGlobalAction = es(this, {
        type: "stubbedAction",
        functionName: "noTriggerGlobalAction",
        actionApiIdentifier: "noTriggerGlobalAction",
        dataPath: "noTriggerGlobalAction",
        errorMessage:
          "The action noTriggerGlobalAction does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers",
        variables: {},
        reason: "MissingApiTrigger",
      })),
      (this.apiRoots = {
        development: "https://js-clients-test--development.gadget.app/",
        production: "https://js-clients-test.gadget.app/",
      }),
      (this.applicationId = "57882"),
      (this.transaction = async (l) => await this.connection.transaction(l)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken);
    let i = !1;
    try {
      i = !!({ BASE_URL: "./", MODE: "production", DEV: !1, PROD: !0, SSR: !1, STORYBOOK: "true" } && !1);
    } catch {}
    if (i) {
      const l = (a = globalThis.GadgetGlobals) == null ? void 0 : a.api;
      if (l) return l.actAsSession;
    }
    this.environment = ((t == null ? void 0 : t.environment) ?? Yb() ?? Jb).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment]
      ? (n = this.apiRoots[this.environment])
      : (n = `https://js-clients-test${this.environment == qu ? "" : `--${this.environment}`}.gadget.app`);
    const r = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== qu) {
      const l =
        ({ forward: o }) =>
        (d) => {
          const u = o(d);
          return sn(
            u,
            ri((f) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const c = new CustomEvent("gadget:devharness:graphqlresult", { detail: f });
                  window.dispatchEvent(c);
                }
              } catch (c) {
                console.warn("[gadget] error dispatching gadget dev harness event", c);
              }
              return f;
            })
          );
        };
      r.beforeAll = [l, ...(r.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", n).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: r,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((s = t == null ? void 0 : t.authenticationMode) != null && s.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.user = new lb(this.connection)),
      (this.session = new ob(this.connection)),
      (this.currentSession = new ub(this.connection)),
      (this.widget = new cb(this.connection)),
      (this.gizmo = new pb(this.connection)),
      (this.section = new fb(this.connection)),
      (this.modelA = new mb(this.connection)),
      (this.part = new yb(this.connection)),
      (this.autoTableTest = new hb(this.connection)),
      (this.foo = new gb(this.connection)),
      (this.shopifyGdprRequest = new bb(this.connection)),
      (this.shopifyProduct = new Ib(this.connection)),
      (this.shopifyProductImage = new Sb(this.connection)),
      (this.shopifyProductOption = new kb(this.connection)),
      (this.shopifyProductVariant = new vb(this.connection)),
      (this.shopifyShop = new Nb(this.connection)),
      (this.shopifySync = new Ab(this.connection)),
      (this.doodad = new Fb(this.connection)),
      (this.friendship = new wb(this.connection)),
      (this.tweeter = new Mb(this.connection)),
      (this.game = new Db(this)),
      (this.hasManyThrough = new Pb(this)),
      (this.uniqueFields = new xb(this)),
      (this.whatever = new Hb(this)),
      (this.name = new Kb(this)),
      (this.internal = {
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifiers: !1, namespace: [] }),
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifiers: !1, namespace: [] }),
        widget: new N("widget", this.connection, { pluralApiIdentifier: "widgets", hasAmbiguousIdentifiers: !1, namespace: [] }),
        gizmo: new N("gizmo", this.connection, { pluralApiIdentifier: "gizmos", hasAmbiguousIdentifiers: !1, namespace: [] }),
        section: new N("section", this.connection, { pluralApiIdentifier: "sections", hasAmbiguousIdentifiers: !1, namespace: [] }),
        modelA: new N("modelA", this.connection, { pluralApiIdentifier: "modelAs", hasAmbiguousIdentifiers: !1, namespace: [] }),
        part: new N("part", this.connection, { pluralApiIdentifier: "parts", hasAmbiguousIdentifiers: !1, namespace: [] }),
        autoTableTest: new N("autoTableTest", this.connection, {
          pluralApiIdentifier: "autoTableTests",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        foo: new N("foo", this.connection, { pluralApiIdentifier: "foos", hasAmbiguousIdentifiers: !1, namespace: [] }),
        shopifyGdprRequest: new N("shopifyGdprRequest", this.connection, {
          pluralApiIdentifier: "shopifyGdprRequests",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifyProduct: new N("shopifyProduct", this.connection, {
          pluralApiIdentifier: "shopifyProducts",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifyProductImage: new N("shopifyProductImage", this.connection, {
          pluralApiIdentifier: "shopifyProductImages",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifyProductOption: new N("shopifyProductOption", this.connection, {
          pluralApiIdentifier: "shopifyProductOptions",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifyProductVariant: new N("shopifyProductVariant", this.connection, {
          pluralApiIdentifier: "shopifyProductVariants",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifyShop: new N("shopifyShop", this.connection, {
          pluralApiIdentifier: "shopifyShops",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        shopifySync: new N("shopifySync", this.connection, {
          pluralApiIdentifier: "shopifySyncs",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        doodad: new N("doodad", this.connection, { pluralApiIdentifier: "doodads", hasAmbiguousIdentifiers: !1, namespace: [] }),
        friendship: new N("friendship", this.connection, {
          pluralApiIdentifier: "friendships",
          hasAmbiguousIdentifiers: !1,
          namespace: [],
        }),
        tweeter: new N("tweeter", this.connection, { pluralApiIdentifier: "tweeters", hasAmbiguousIdentifiers: !1, namespace: [] }),
        game: {
          player: new N("player", this.connection, { pluralApiIdentifier: "players", hasAmbiguousIdentifiers: !1, namespace: ["game"] }),
          round: new N("round", this.connection, { pluralApiIdentifier: "rounds", hasAmbiguousIdentifiers: !1, namespace: ["game"] }),
          stadium: new N("stadium", this.connection, { pluralApiIdentifier: "stadia", hasAmbiguousIdentifiers: !1, namespace: ["game"] }),
          city: new N("city", this.connection, { pluralApiIdentifier: "cities", hasAmbiguousIdentifiers: !1, namespace: ["game"] }),
        },
        hasManyThrough: {
          baseModel: new N("baseModel", this.connection, {
            pluralApiIdentifier: "baseModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["hasManyThrough"],
          }),
          joinerModel: new N("joinerModel", this.connection, {
            pluralApiIdentifier: "joinerModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["hasManyThrough"],
          }),
          siblingModel: new N("siblingModel", this.connection, {
            pluralApiIdentifier: "siblingModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["hasManyThrough"],
          }),
        },
        uniqueFields: {
          mainModel: new N("mainModel", this.connection, {
            pluralApiIdentifier: "mainModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["uniqueFields"],
          }),
          parentModel: new N("parentModel", this.connection, {
            pluralApiIdentifier: "parentModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["uniqueFields"],
          }),
          childModel: new N("childModel", this.connection, {
            pluralApiIdentifier: "childModels",
            hasAmbiguousIdentifiers: !1,
            namespace: ["uniqueFields"],
          }),
        },
        whatever: {
          university: {
            student: new N("student", this.connection, {
              pluralApiIdentifier: "students",
              hasAmbiguousIdentifiers: !1,
              namespace: ["whatever", "university"],
            }),
            course: new N("course", this.connection, {
              pluralApiIdentifier: "courses",
              hasAmbiguousIdentifiers: !1,
              namespace: ["whatever", "university"],
            }),
            registration: new N("registration", this.connection, {
              pluralApiIdentifier: "registrations",
              hasAmbiguousIdentifiers: !1,
              namespace: ["whatever", "university"],
            }),
            professor: new N("professor", this.connection, {
              pluralApiIdentifier: "professors",
              hasAmbiguousIdentifiers: !1,
              namespace: ["whatever", "university"],
            }),
            assignment: new N("assignment", this.connection, {
              pluralApiIdentifier: "assignments",
              hasAmbiguousIdentifiers: !1,
              namespace: ["whatever", "university"],
            }),
          },
        },
        name: { spaced: {} },
      });
  }
  get actAsAdmin() {
    var t, i;
    return (
      tt(
        (i = (t = this.options) == null ? void 0 : t.authenticationMode) == null ? void 0 : i.internal,
        "actAsAdmin can only be used for API clients using internal authentication"
      ),
      new $o({ ...this.options, authenticationMode: { internal: { ...this.options.authenticationMode.internal, actAsSession: !1 } } })
    );
  }
  get actAsSession() {
    var t, i;
    return (
      tt(
        (i = (t = this.options) == null ? void 0 : t.authenticationMode) == null ? void 0 : i.internal,
        "actAsSession can only be used for API clients using internal authentication"
      ),
      new $o({ ...this.options, authenticationMode: { internal: { ...this.options.authenticationMode.internal, actAsSession: !0 } } })
    );
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
Cp.prototype[Symbol.for("gadget/modelRelationships")] = {
  user: {},
  session: { user: { type: "BelongsTo", model: "user" }, shop: { type: "BelongsTo", model: "shopifyShop" } },
  widget: {
    gizmos: { type: "HasMany", model: "gizmo" },
    section: { type: "BelongsTo", model: "section" },
    doodad: { type: "HasOne", model: "doodad" },
  },
  gizmo: { widget: { type: "BelongsTo", model: "widget" }, doodads: { type: "HasMany", model: "doodad" } },
  section: { widgets: { type: "HasMany", model: "widget" } },
  modelA: {},
  player: { currentRound: { type: "BelongsTo", model: "round" } },
  round: { stadium: { type: "BelongsTo", model: "stadium" }, players: { type: "HasMany", model: "player" } },
  stadium: { rounds: { type: "HasMany", model: "round" }, city: { type: "BelongsTo", model: "city" } },
  city: { stadium: { type: "HasOne", model: "stadium" }, tweeters: { type: "HasMany", model: "tweeter" } },
  part: {},
  autoTableTest: { hasOne: { type: "HasOne", model: "foo" }, hasMany: { type: "HasMany", model: "foo" } },
  foo: {
    belongsToParent: { type: "BelongsTo", model: "autoTableTest" },
    manyBelongsToParent: { type: "BelongsTo", model: "autoTableTest" },
  },
  shopifyGdprRequest: { shop: { type: "BelongsTo", model: "shopifyShop" } },
  shopifyProduct: {
    images: { type: "HasMany", model: "shopifyProductImage" },
    options: { type: "HasMany", model: "shopifyProductOption" },
    variants: { type: "HasMany", model: "shopifyProductVariant" },
    shop: { type: "BelongsTo", model: "shopifyShop" },
  },
  shopifyProductImage: {
    variants: { type: "HasMany", model: "shopifyProductVariant" },
    product: { type: "BelongsTo", model: "shopifyProduct" },
    shop: { type: "BelongsTo", model: "shopifyShop" },
  },
  shopifyProductOption: { product: { type: "BelongsTo", model: "shopifyProduct" }, shop: { type: "BelongsTo", model: "shopifyShop" } },
  shopifyProductVariant: {
    product: { type: "BelongsTo", model: "shopifyProduct" },
    productImage: { type: "BelongsTo", model: "shopifyProductImage" },
    shop: { type: "BelongsTo", model: "shopifyShop" },
  },
  shopifyShop: {
    productOptions: { type: "HasMany", model: "shopifyProductOption" },
    productImages: { type: "HasMany", model: "shopifyProductImage" },
    productVariants: { type: "HasMany", model: "shopifyProductVariant" },
    products: { type: "HasMany", model: "shopifyProduct" },
    syncs: { type: "HasMany", model: "shopifySync" },
    gdprRequests: { type: "HasMany", model: "shopifyGdprRequest" },
  },
  shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } },
  baseModel: {
    joinerModels: { type: "HasMany", model: "joinerModel" },
    baseModelHmtField: { type: "HasManyThrough", model: "siblingModel", through: "joinerModel" },
  },
  joinerModel: {
    joinerBelongsToSibling: { type: "BelongsTo", model: "siblingModel" },
    joinerBelongsToBase: { type: "BelongsTo", model: "baseModel" },
  },
  siblingModel: {
    joinerModels: { type: "HasMany", model: "joinerModel" },
    siblingModelHmtField: { type: "HasManyThrough", model: "baseModel", through: "joinerModel" },
  },
  mainModel: { uniqueBelongsTo: { type: "BelongsTo", model: "parentModel" }, childModelEntries: { type: "HasMany", model: "childModel" } },
  parentModel: { baseModel: { type: "HasOne", model: "mainModel" } },
  childModel: { mainModelParent: { type: "BelongsTo", model: "mainModel" } },
  student: {
    registrations: { type: "HasMany", model: "registration" },
    courses: { type: "HasManyThrough", model: "course", through: "registration" },
  },
  course: {
    registrations: { type: "HasMany", model: "registration" },
    students: { type: "HasManyThrough", model: "student", through: "registration" },
    assignments: { type: "HasMany", model: "assignment" },
    professors: { type: "HasManyThrough", model: "professor", through: "assignment" },
  },
  registration: { student: { type: "BelongsTo", model: "student" }, course: { type: "BelongsTo", model: "course" } },
  professor: {
    assignments: { type: "HasMany", model: "assignment" },
    courses: { type: "HasManyThrough", model: "course", through: "assignment" },
  },
  assignment: { course: { type: "BelongsTo", model: "course" }, professor: { type: "BelongsTo", model: "professor" } },
  doodad: { widget: { type: "BelongsTo", model: "widget" }, gizmo: { type: "BelongsTo", model: "gizmo" } },
  friendship: { follower: { type: "BelongsTo", model: "tweeter" }, followee: { type: "BelongsTo", model: "tweeter" } },
  tweeter: {
    followerFriendships: { type: "HasMany", model: "friendship" },
    followers: { type: "HasManyThrough", model: "tweeter", through: "friendship" },
    followeeFriendships: { type: "HasMany", model: "friendship" },
    followees: { type: "HasManyThrough", model: "tweeter", through: "friendship" },
    city: { type: "BelongsTo", model: "city" },
  },
};
const Cr = (e, t, i, n) => {
    const r = class {
      constructor(a) {
        this.connection = a;
      }
    };
    Object.defineProperty(r, "name", { value: `${e}Manager` });
    for (const a of n)
      switch (a.type) {
        case "maybeFindOne":
        case "findOne": {
          const s = !a.type.startsWith("maybe");
          "functionName" in a
            ? (r.prototype[a.functionName] = Object.assign(
                function (l, o) {
                  return Xt(this, a.operationName, a.findByField, l, i, e, o, s, a.namespace);
                },
                a,
                {
                  plan: function (l, o, d) {
                    return id(a.operationName, l, o, i, e, d, a.namespace);
                  },
                }
              ))
            : (r.prototype[a.type] = Object.assign(
                function (l, o) {
                  const d = ie(this, e, l, i, e, o, s, a.namespace);
                  return Pu(d, (u) => (u.isEmpty() ? null : u));
                },
                a,
                {
                  plan: function (l, o) {
                    return td(a.operationName, l, i, e, o, a.namespace);
                  },
                }
              ));
          break;
        }
        case "findMany": {
          r.prototype.findMany = Object.assign(
            function (s) {
              return H(this, t, i, e, s, void 0, a.namespace);
            },
            a,
            {
              plan: function (s) {
                return Tr(t, i, e, s, a.namespace);
              },
            }
          );
          break;
        }
        case "maybeFindFirst":
        case "findFirst": {
          r.prototype[a.type] = Object.assign(
            function (s) {
              const l = H(
                this,
                t,
                i,
                e,
                { ...s, first: 1, last: void 0, before: void 0, after: void 0 },
                a.type != "maybeFindFirst",
                a.namespace
              );
              return Pu(l, (o) => (o == null ? void 0 : o[0]) ?? null);
            },
            a,
            {
              plan: function (s) {
                return Tr(t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.namespace);
              },
            }
          );
          break;
        }
        case "get": {
          r.prototype.get = Object.assign(function (s) {
            return ie(this, a.operationName, void 0, i, e, s, void 0, a.namespace);
          }, a);
          break;
        }
        case "action": {
          if (a.isBulk) {
            const s = !!a.variables.ids;
            r.prototype[a.functionName] = Object.assign(
              async function (l, o) {
                let d;
                return (
                  s
                    ? (d = { ids: { ...a.variables.ids, value: l } })
                    : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Up(this[a.singleActionFunctionName], void 0, u)) } }),
                  await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
                );
              },
              a,
              {
                plan: function (l) {
                  return Us(
                    a.operationName,
                    a.isDeleter ? null : a.defaultSelection,
                    e,
                    a.modelSelectionField,
                    a.variables,
                    l,
                    a.namespace,
                    !0,
                    a.hasReturnType
                  );
                },
              }
            );
          } else {
            const s = !!a.variables.id,
              l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
            r.prototype[a.functionName] = Object.assign(
              async function (...o) {
                const [d, u] = Xb(a, s, l, o);
                return await D(
                  this,
                  a.operationName,
                  a.isDeleter ? null : i,
                  e,
                  a.modelSelectionField,
                  !1,
                  d,
                  u,
                  a.namespace,
                  a.hasReturnType
                );
              },
              a,
              {
                plan: function (o) {
                  return Us(
                    a.operationName,
                    a.isDeleter ? null : a.defaultSelection,
                    e,
                    a.modelSelectionField,
                    a.variables,
                    o,
                    a.namespace,
                    !1,
                    a.hasReturnType
                  );
                },
              }
            );
          }
          break;
        }
        case "stubbedAction": {
          r.prototype[a.functionName] = Object.assign(function (...s) {
            throw (qp(a), new Error(a.errorMessage));
          }, a);
          break;
        }
      }
    return r;
  },
  Zb = (e, t) =>
    t.type == "stubbedAction"
      ? Object.assign((...i) => {
          throw (qp(t), new Error(t.errorMessage));
        }, t)
      : Object.assign(
          async (i = {}) => {
            const n = {};
            for (const [r, a] of Object.entries(t.variables)) n[r] = { value: i[r], ...a };
            return await ls(e.connection, t.operationName, n, t.namespace);
          },
          t,
          {
            plan: function (i, n, r) {
              return rd(i, n, r);
            },
          }
        );
function Up(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function Xb(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Up(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
function Pu(e, t) {
  return Symbol.asyncIterator in e
    ? {
        [Symbol.asyncIterator]: async function* () {
          for await (const i of e) yield t(i);
        },
      }
    : e.then(t);
}
const qp = (e) => {
    try {
      if (typeof window < "u" && typeof CustomEvent == "function") {
        const t = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: e.reason,
            action: {
              functionName: e.functionName,
              actionApiIdentifier: e.actionApiIdentifier,
              modelApiIdentifier: e.modelApiIdentifier,
              dataPath: e.dataPath,
            },
          },
        });
        window.dispatchEvent(t);
      }
    } catch (t) {
      console.warn("[gadget] error dispatching gadget dev harness event", t);
    }
  },
  Ga = { __typename: !0, id: !0, createdAt: !0, updatedAt: !0, userId: !0 },
  ta = "session",
  zr = "sessions",
  eI = Cr(ta, zr, Ga, [
    { type: "findOne", operationName: ta, modelApiIdentifier: ta, findByVariableName: "id", defaultSelection: Ga, namespace: null },
    { type: "maybeFindOne", operationName: ta, modelApiIdentifier: ta, findByVariableName: "id", defaultSelection: Ga, namespace: null },
    { type: "findMany", operationName: zr, modelApiIdentifier: ta, defaultSelection: Ga, namespace: null },
    { type: "findFirst", operationName: zr, modelApiIdentifier: ta, defaultSelection: Ga, namespace: null },
    { type: "maybeFindFirst", operationName: zr, modelApiIdentifier: ta, defaultSelection: Ga, namespace: null },
    {
      type: "findOne",
      operationName: zr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ta,
      defaultSelection: Ga,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: zr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: ta,
      defaultSelection: Ga,
      namespace: null,
    },
  ]),
  Vu = { __typename: !0, id: !0, createdAt: !0, updatedAt: !0, userId: !0 },
  Eu = "session",
  tI = "sessions",
  iI = Cr(Eu, tI, Vu, [{ type: "get", operationName: "currentSession", defaultSelection: Vu, modelApiIdentifier: Eu, namespace: null }]),
  se = {
    __typename: !0,
    id: !0,
    createdAt: !0,
    email: !0,
    emailVerificationToken: !0,
    emailVerificationTokenExpiration: !0,
    emailVerified: !0,
    firstName: !0,
    googleImageUrl: !0,
    googleProfileId: !0,
    lastName: !0,
    lastSignedIn: !0,
    resetPasswordToken: !0,
    resetPasswordTokenExpiration: !0,
    roles: { key: !0, name: !0 },
    updatedAt: !0,
  },
  E = "user",
  mt = "users",
  nI = Cr(E, mt, se, [
    { type: "findOne", operationName: E, modelApiIdentifier: E, findByVariableName: "id", defaultSelection: se, namespace: null },
    { type: "maybeFindOne", operationName: E, modelApiIdentifier: E, findByVariableName: "id", defaultSelection: se, namespace: null },
    { type: "findMany", operationName: mt, modelApiIdentifier: E, defaultSelection: se, namespace: null },
    { type: "findFirst", operationName: mt, modelApiIdentifier: E, defaultSelection: se, namespace: null },
    { type: "maybeFindFirst", operationName: mt, modelApiIdentifier: E, defaultSelection: se, namespace: null },
    {
      type: "findOne",
      operationName: mt,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: E,
      defaultSelection: se,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: mt,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: E,
      defaultSelection: se,
      namespace: null,
    },
    {
      type: "findOne",
      operationName: mt,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: E,
      defaultSelection: se,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: mt,
      functionName: "maybeFindByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: E,
      defaultSelection: se,
      namespace: null,
    },
    {
      type: "action",
      operationName: "signUpUser",
      operationReturnType: "SignUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !1,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkSignUpUsers",
      functionName: "bulkSignUp",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "signUp",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "signInUser",
      operationReturnType: "SignInUser",
      functionName: "signIn",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkSignInUsers",
      functionName: "bulkSignIn",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "signIn",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignInUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "signOutUser",
      operationReturnType: "SignOutUser",
      functionName: "signOut",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkSignOutUsers",
      functionName: "bulkSignOut",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "signOut",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "updateUser",
      operationReturnType: "UpdateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkUpdateUsers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "deleteUser",
      operationReturnType: "DeleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteUsers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "sendVerifyEmailUser",
      operationReturnType: "SendVerifyEmailUser",
      functionName: "sendVerifyEmail",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkSendVerifyEmailUsers",
      functionName: "bulkSendVerifyEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "sendVerifyEmail",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSendVerifyEmailUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "verifyEmailUser",
      operationReturnType: "VerifyEmailUser",
      functionName: "verifyEmail",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { code: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkVerifyEmailUsers",
      functionName: "bulkVerifyEmail",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "verifyEmail",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkVerifyEmailUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "sendResetPasswordUser",
      operationReturnType: "SendResetPasswordUser",
      functionName: "sendResetPassword",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkSendResetPasswordUsers",
      functionName: "bulkSendResetPassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "sendResetPassword",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSendResetPasswordUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "resetPasswordUser",
      operationReturnType: "ResetPasswordUser",
      functionName: "resetPassword",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: { password: { required: !0, type: "String" }, code: { required: !0, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !0,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkResetPasswordUsers",
      functionName: "bulkResetPassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !0,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "resetPassword",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkResetPasswordUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "changePasswordUser",
      operationReturnType: "ChangePasswordUser",
      functionName: "changePassword",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !0,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        currentPassword: { required: !0, type: "String" },
        newPassword: { required: !0, type: "String" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkChangePasswordUsers",
      functionName: "bulkChangePassword",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "changePassword",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkChangePasswordUsersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "upsertUser",
      operationReturnType: "UpsertUser",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: E,
      operatesWithRecordIdentity: !1,
      modelSelectionField: E,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        on: { required: !1, type: "[String!]" },
        user: { required: !1, type: "UpsertUserInput" },
        email: { required: !0, type: "String" },
        password: { required: !0, type: "String" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on SignUpUserResult": { hasReturnType: !0 }, "... on UpdateUserResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: se,
    },
    {
      type: "action",
      operationName: "bulkUpsertUsers",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: { users: { hasReturnType: { "... on User": { select: !0 }, "... on UpsertUserReturnType": { hasReturnType: !0 } } } },
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: E,
      modelSelectionField: mt,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertUsersInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: se,
    },
  ]),
  Ti = {
    __typename: !0,
    id: !0,
    birthday: !0,
    category: !0,
    checked: !0,
    createdAt: !0,
    embedding: !0,
    image: { url: !0, mimeType: !0, fileName: !0 },
    inStock: !0,
    inventoryCount: !0,
    lastRestockedAt: !0,
    metafields: !0,
    name: !0,
    ownerEmail: !0,
    productURL: !0,
    reallyReallyReallyLongFieldName: !0,
    secret: !0,
    tags: !0,
    updatedAt: !0,
  },
  Ke = "widget",
  ia = "widgets",
  aI = Cr(Ke, ia, Ti, [
    { type: "findOne", operationName: Ke, modelApiIdentifier: Ke, findByVariableName: "id", defaultSelection: Ti, namespace: null },
    { type: "maybeFindOne", operationName: Ke, modelApiIdentifier: Ke, findByVariableName: "id", defaultSelection: Ti, namespace: null },
    { type: "findMany", operationName: ia, modelApiIdentifier: Ke, defaultSelection: Ti, namespace: null },
    { type: "findFirst", operationName: ia, modelApiIdentifier: Ke, defaultSelection: Ti, namespace: null },
    { type: "maybeFindFirst", operationName: ia, modelApiIdentifier: Ke, defaultSelection: Ti, namespace: null },
    {
      type: "findOne",
      operationName: ia,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ke,
      defaultSelection: Ti,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: ia,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ke,
      defaultSelection: Ti,
      namespace: null,
    },
    {
      type: "action",
      operationName: "createWidget",
      operationReturnType: "CreateWidget",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ke,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ke,
      isBulk: !1,
      isDeleter: !1,
      variables: { widget: { required: !1, type: "CreateWidgetInput" }, foobar: { required: !1, type: "CreateFoobarInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["foobar"],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ti,
    },
    {
      type: "action",
      operationName: "bulkCreateWidgets",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ke,
      modelSelectionField: ia,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateWidgetsInput!]" } },
      paramOnlyVariables: ["foobar"],
      defaultSelection: Ti,
    },
    {
      type: "action",
      operationName: "updateWidget",
      operationReturnType: "UpdateWidget",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ke,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ke,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, widget: { required: !1, type: "UpdateWidgetInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ti,
    },
    {
      type: "action",
      operationName: "bulkUpdateWidgets",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ke,
      modelSelectionField: ia,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateWidgetsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ti,
    },
    {
      type: "action",
      operationName: "deleteWidget",
      operationReturnType: "DeleteWidget",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ke,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Ke,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteWidgets",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ke,
      modelSelectionField: ia,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertWidget",
      operationReturnType: "UpsertWidget",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier: Ke,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Ke,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        on: { required: !1, type: "[String!]" },
        widget: { required: !1, type: "UpsertWidgetInput" },
        foobar: { required: !1, type: "UpsertFoobarInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on", "foobar"],
      hasReturnType: { "... on CreateWidgetResult": { hasReturnType: !1 }, "... on UpdateWidgetResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ti,
    },
    {
      type: "action",
      operationName: "bulkUpsertWidgets",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Ke,
      modelSelectionField: ia,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpsertWidgetsInput!]" } },
      paramOnlyVariables: ["on", "foobar"],
      defaultSelection: Ti,
    },
  ]),
  ja = { __typename: !0, id: !0, bar: !0, createdAt: !0, foo: !0, updatedAt: !0 },
  na = "test",
  Hr = "tests",
  rI = Cr(na, Hr, ja, [
    { type: "findOne", operationName: na, modelApiIdentifier: na, findByVariableName: "id", defaultSelection: ja, namespace: null },
    { type: "maybeFindOne", operationName: na, modelApiIdentifier: na, findByVariableName: "id", defaultSelection: ja, namespace: null },
    { type: "findMany", operationName: Hr, modelApiIdentifier: na, defaultSelection: ja, namespace: null },
    { type: "findFirst", operationName: Hr, modelApiIdentifier: na, defaultSelection: ja, namespace: null },
    { type: "maybeFindFirst", operationName: Hr, modelApiIdentifier: na, defaultSelection: ja, namespace: null },
    {
      type: "findOne",
      operationName: Hr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: na,
      defaultSelection: ja,
      namespace: null,
    },
    {
      type: "maybeFindOne",
      operationName: Hr,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: na,
      defaultSelection: ja,
      namespace: null,
    },
  ]),
  Jt = { __typename: !0, id: !0, createdAt: !0, name: !0, number: !0, updatedAt: !0 },
  we = "player",
  en = "players",
  sI = Cr(we, en, Jt, [
    { type: "findOne", operationName: we, modelApiIdentifier: we, findByVariableName: "id", defaultSelection: Jt, namespace: "game" },
    { type: "maybeFindOne", operationName: we, modelApiIdentifier: we, findByVariableName: "id", defaultSelection: Jt, namespace: "game" },
    { type: "findMany", operationName: en, modelApiIdentifier: we, defaultSelection: Jt, namespace: "game" },
    { type: "findFirst", operationName: en, modelApiIdentifier: we, defaultSelection: Jt, namespace: "game" },
    { type: "maybeFindFirst", operationName: en, modelApiIdentifier: we, defaultSelection: Jt, namespace: "game" },
    {
      type: "findOne",
      operationName: en,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: we,
      defaultSelection: Jt,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: en,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: we,
      defaultSelection: Jt,
      namespace: "game",
    },
    {
      type: "findOne",
      operationName: en,
      functionName: "findByName",
      findByField: "name",
      findByVariableName: "name",
      modelApiIdentifier: we,
      defaultSelection: Jt,
      namespace: "game",
    },
    {
      type: "maybeFindOne",
      operationName: en,
      functionName: "maybeFindByName",
      findByField: "name",
      findByVariableName: "name",
      modelApiIdentifier: we,
      defaultSelection: Jt,
      namespace: "game",
    },
    {
      type: "action",
      operationName: "createPlayer",
      operationReturnType: "CreateGamePlayer",
      functionName: "create",
      namespace: "game",
      modelApiIdentifier: we,
      operatesWithRecordIdentity: !1,
      modelSelectionField: we,
      isBulk: !1,
      isDeleter: !1,
      variables: { player: { required: !1, type: "CreateGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Jt,
    },
    {
      type: "action",
      operationName: "bulkCreatePlayers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: we,
      modelSelectionField: en,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkCreateGamePlayersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Jt,
    },
    {
      type: "action",
      operationName: "updatePlayer",
      operationReturnType: "UpdateGamePlayer",
      functionName: "update",
      namespace: "game",
      modelApiIdentifier: we,
      operatesWithRecordIdentity: !0,
      modelSelectionField: we,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, player: { required: !1, type: "UpdateGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Jt,
    },
    {
      type: "action",
      operationName: "bulkUpdatePlayers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: we,
      modelSelectionField: en,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpdateGamePlayersInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Jt,
    },
    {
      type: "action",
      operationName: "deletePlayer",
      operationReturnType: "DeleteGamePlayer",
      functionName: "delete",
      namespace: "game",
      modelApiIdentifier: we,
      operatesWithRecordIdentity: !0,
      modelSelectionField: we,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeletePlayers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: we,
      modelSelectionField: en,
      namespace: "game",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertPlayer",
      operationReturnType: "UpsertGamePlayer",
      functionName: "upsert",
      namespace: "game",
      modelApiIdentifier: we,
      operatesWithRecordIdentity: !1,
      modelSelectionField: we,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, player: { required: !1, type: "UpsertGamePlayerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: { "... on CreateGamePlayerResult": { hasReturnType: !1 }, "... on UpdateGamePlayerResult": { hasReturnType: !1 } },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Jt,
    },
    {
      type: "action",
      operationName: "bulkUpsertPlayers",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: we,
      modelSelectionField: en,
      namespace: "game",
      variables: { inputs: { required: !0, type: "[BulkUpsertGamePlayersInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Jt,
    },
  ]),
  Ri = { __typename: !0, id: !0, createdAt: !0, foo: !0, updatedAt: !0 },
  Je = "test",
  aa = "tests",
  lI = Cr(Je, aa, Ri, [
    {
      type: "findOne",
      operationName: Je,
      modelApiIdentifier: Je,
      findByVariableName: "id",
      defaultSelection: Ri,
      namespace: ["game", "inner"],
    },
    {
      type: "maybeFindOne",
      operationName: Je,
      modelApiIdentifier: Je,
      findByVariableName: "id",
      defaultSelection: Ri,
      namespace: ["game", "inner"],
    },
    { type: "findMany", operationName: aa, modelApiIdentifier: Je, defaultSelection: Ri, namespace: ["game", "inner"] },
    { type: "findFirst", operationName: aa, modelApiIdentifier: Je, defaultSelection: Ri, namespace: ["game", "inner"] },
    { type: "maybeFindFirst", operationName: aa, modelApiIdentifier: Je, defaultSelection: Ri, namespace: ["game", "inner"] },
    {
      type: "findOne",
      operationName: aa,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Je,
      defaultSelection: Ri,
      namespace: ["game", "inner"],
    },
    {
      type: "maybeFindOne",
      operationName: aa,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Je,
      defaultSelection: Ri,
      namespace: ["game", "inner"],
    },
    {
      type: "action",
      operationName: "createTest",
      operationReturnType: "CreateGameInnerTest",
      functionName: "create",
      namespace: ["game", "inner"],
      modelApiIdentifier: Je,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Je,
      isBulk: !1,
      isDeleter: !1,
      variables: { test: { required: !1, type: "CreateGameInnerTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ri,
    },
    {
      type: "action",
      operationName: "bulkCreateTests",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "create",
      modelApiIdentifier: Je,
      modelSelectionField: aa,
      namespace: ["game", "inner"],
      variables: { inputs: { required: !0, type: "[BulkCreateGameInnerTestsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ri,
    },
    {
      type: "action",
      operationName: "updateTest",
      operationReturnType: "UpdateGameInnerTest",
      functionName: "update",
      namespace: ["game", "inner"],
      modelApiIdentifier: Je,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Je,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, test: { required: !1, type: "UpdateGameInnerTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ri,
    },
    {
      type: "action",
      operationName: "bulkUpdateTests",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Je,
      modelSelectionField: aa,
      namespace: ["game", "inner"],
      variables: { inputs: { required: !0, type: "[BulkUpdateGameInnerTestsInput!]" } },
      paramOnlyVariables: [],
      defaultSelection: Ri,
    },
    {
      type: "action",
      operationName: "deleteTest",
      operationReturnType: "DeleteGameInnerTest",
      functionName: "delete",
      namespace: ["game", "inner"],
      modelApiIdentifier: Je,
      operatesWithRecordIdentity: !0,
      modelSelectionField: Je,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteTests",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      operatesWithRecordIdentity: !0,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Je,
      modelSelectionField: aa,
      namespace: ["game", "inner"],
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "upsertTest",
      operationReturnType: "UpsertGameInnerTest",
      functionName: "upsert",
      namespace: ["game", "inner"],
      modelApiIdentifier: Je,
      operatesWithRecordIdentity: !1,
      modelSelectionField: Je,
      isBulk: !1,
      isDeleter: !1,
      variables: { on: { required: !1, type: "[String!]" }, test: { required: !1, type: "UpsertGameInnerTestInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateGameInnerTestResult": { hasReturnType: !1 },
        "... on UpdateGameInnerTestResult": { hasReturnType: !1 },
      },
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ri,
    },
    {
      type: "action",
      operationName: "bulkUpsertTests",
      functionName: "bulkUpsert",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      operatesWithRecordIdentity: !1,
      singleActionFunctionName: "upsert",
      modelApiIdentifier: Je,
      modelSelectionField: aa,
      namespace: ["game", "inner"],
      variables: { inputs: { required: !0, type: "[BulkUpsertGameInnerTestsInput!]" } },
      paramOnlyVariables: ["on"],
      defaultSelection: Ri,
    },
  ]);
class oI {
  constructor(t) {
    (this.clientOrParent = t), (this.connection = this.clientOrParent.connection), (this.test = new lI(this.connection));
  }
}
class dI {
  constructor(t) {
    (this.clientOrParent = t),
      (this.calculateScore = Zb(this, {
        type: "globalAction",
        functionName: "calculateScore",
        operationName: "calculateScore",
        operationReturnType: "GameCalculateScore",
        namespace: "game",
        variables: { why: { required: !1, type: "String" } },
      })),
      (this.connection = this.clientOrParent.connection),
      (this.player = new sI(this.connection)),
      (this.inner = new oI(this));
  }
}
const _u = "production",
  uI = "development",
  cI = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let Pp = class Go {
  constructor(t) {
    var a, s;
    (this.options = t),
      (this.apiRoots = { development: "https://kitchen-sink--development.gadget.app/", production: "https://kitchen-sink.gadget.app/" }),
      (this.applicationId = "97394"),
      (this.transaction = async (l) => await this.connection.transaction(l)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken);
    let i = !1;
    try {
      i = !!({ BASE_URL: "./", MODE: "production", DEV: !1, PROD: !0, SSR: !1, STORYBOOK: "true" } && !1);
    } catch {}
    if (i) {
      const l = (a = globalThis.GadgetGlobals) == null ? void 0 : a.api;
      if (l) return l.actAsSession;
    }
    this.environment = ((t == null ? void 0 : t.environment) ?? cI() ?? uI).toLocaleLowerCase();
    let n;
    this.apiRoots[this.environment]
      ? (n = this.apiRoots[this.environment])
      : (n = `https://kitchen-sink${this.environment == _u ? "" : `--${this.environment}`}.gadget.app`);
    const r = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== _u) {
      const l =
        ({ forward: o }) =>
        (d) => {
          const u = o(d);
          return sn(
            u,
            ri((f) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const c = new CustomEvent("gadget:devharness:graphqlresult", { detail: f });
                  window.dispatchEvent(c);
                }
              } catch (c) {
                console.warn("[gadget] error dispatching gadget dev harness event", c);
              }
              return f;
            })
          );
        };
      r.beforeAll = [l, ...(r.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", n).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: r,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((s = t == null ? void 0 : t.authenticationMode) != null && s.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.session = new eI(this.connection)),
      (this.currentSession = new iI(this.connection)),
      (this.user = new nI(this.connection)),
      (this.widget = new aI(this.connection)),
      (this.test = new rI(this.connection)),
      (this.game = new dI(this)),
      (this.internal = {
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifiers: !1, namespace: [] }),
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifiers: !1, namespace: [] }),
        widget: new N("widget", this.connection, { pluralApiIdentifier: "widgets", hasAmbiguousIdentifiers: !1, namespace: [] }),
        test: new N("test", this.connection, { pluralApiIdentifier: "tests", hasAmbiguousIdentifiers: !1, namespace: [] }),
        game: {
          player: new N("player", this.connection, { pluralApiIdentifier: "players", hasAmbiguousIdentifiers: !1, namespace: ["game"] }),
          inner: {
            test: new N("test", this.connection, {
              pluralApiIdentifier: "tests",
              hasAmbiguousIdentifiers: !1,
              namespace: ["game", "inner"],
            }),
          },
        },
      });
  }
  get actAsAdmin() {
    var t, i;
    return (
      tt(
        (i = (t = this.options) == null ? void 0 : t.authenticationMode) == null ? void 0 : i.internal,
        "actAsAdmin can only be used for API clients using internal authentication"
      ),
      new Go({ ...this.options, authenticationMode: { internal: { ...this.options.authenticationMode.internal, actAsSession: !1 } } })
    );
  }
  get actAsSession() {
    var t, i;
    return (
      tt(
        (i = (t = this.options) == null ? void 0 : t.authenticationMode) == null ? void 0 : i.internal,
        "actAsSession can only be used for API clients using internal authentication"
      ),
      new Go({ ...this.options, authenticationMode: { internal: { ...this.options.authenticationMode.internal, actAsSession: !0 } } })
    );
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
Pp.prototype[Symbol.for("gadget/modelRelationships")] = {
  session: { user: { type: "BelongsTo", model: "user" } },
  user: {},
  widget: {},
  test: {},
  player: {},
};
const ln = (e, t, i, n) => {
  const r = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a
          ? (r.prototype[a.functionName] = Object.assign(async function (s, l) {
              return await Xt(this, a.operationName, a.findByField, s, i, e, l);
            }, a))
          : (r.prototype[a.type] = Object.assign(async function (s, l) {
              const o = await ie(this, e, s, i, e, l, a.type != "maybeFindOne");
              return o.isEmpty() ? null : o;
            }, a));
        break;
      }
      case "findMany": {
        r.prototype.findMany = Object.assign(async function (s) {
          return await H(this, t, i, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        r.prototype[a.type] = Object.assign(async function (s) {
          const l = await H(this, t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.type != "maybeFindFirst");
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        r.prototype.get = Object.assign(async function (s) {
          return await ie(this, a.operationName, void 0, i, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          r.prototype[a.functionName] = Object.assign(async function (l, o) {
            let d;
            return (
              s
                ? (d = { ids: { ...a.variables.ids, value: l } })
                : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Vp(this[a.singleActionFunctionName], void 0, u)) } }),
              await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
            );
          }, a);
        } else {
          const s = !!a.variables.id,
            l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
          r.prototype[a.functionName] = Object.assign(async function (...o) {
            const [d, u] = pI(a, s, l, o);
            return await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !1, d, u, a.namespace, a.hasReturnType);
          }, a);
        }
        break;
      }
    }
  return r;
};
function Vp(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function pI(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Vp(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
const Wi = { __typename: !0, id: !0, state: !0, createdAt: !0, email: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Ze = "user",
  Na = "users",
  fI = ln(Ze, Na, Wi, [
    { type: "findOne", operationName: Ze, modelApiIdentifier: Ze, findByVariableName: "id", defaultSelection: Wi },
    { type: "maybeFindOne", operationName: Ze, modelApiIdentifier: Ze, findByVariableName: "id", defaultSelection: Wi },
    { type: "findMany", operationName: Na, modelApiIdentifier: Ze, defaultSelection: Wi },
    { type: "findFirst", operationName: Na, modelApiIdentifier: Ze, defaultSelection: Wi },
    { type: "maybeFindFirst", operationName: Na, modelApiIdentifier: Ze, defaultSelection: Wi },
    {
      type: "findOne",
      operationName: Na,
      functionName: "findByEmail",
      findByField: "email",
      findByVariableName: "email",
      modelApiIdentifier: Ze,
      defaultSelection: Wi,
    },
    {
      type: "action",
      operationName: "signUpUser",
      functionName: "signUp",
      namespace: null,
      modelApiIdentifier: Ze,
      modelSelectionField: Ze,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "SignUpUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Wi,
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
      modelApiIdentifier: Ze,
      modelSelectionField: Na,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
      defaultSelection: Wi,
    },
    {
      type: "action",
      operationName: "updateUser",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ze,
      modelSelectionField: Ze,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Wi,
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
      modelApiIdentifier: Ze,
      modelSelectionField: Na,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
      defaultSelection: Wi,
    },
    {
      type: "action",
      operationName: "deleteUser",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ze,
      modelSelectionField: Ze,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Ze,
      modelSelectionField: Na,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "createUser",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ze,
      modelSelectionField: Ze,
      isBulk: !1,
      isDeleter: !1,
      variables: { user: { required: !1, type: "CreateUserInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Wi,
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
      modelApiIdentifier: Ze,
      modelSelectionField: Na,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUsersInput!]" } },
      defaultSelection: Wi,
    },
  ]),
  ra = { __typename: !0, id: !0, state: !0, createdAt: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 },
  Bi = "session",
  Qr = "sessions",
  mI = ln(Bi, Qr, ra, [
    { type: "findOne", operationName: Bi, modelApiIdentifier: Bi, findByVariableName: "id", defaultSelection: ra },
    { type: "maybeFindOne", operationName: Bi, modelApiIdentifier: Bi, findByVariableName: "id", defaultSelection: ra },
    { type: "findMany", operationName: Qr, modelApiIdentifier: Bi, defaultSelection: ra },
    { type: "findFirst", operationName: Qr, modelApiIdentifier: Bi, defaultSelection: ra },
    { type: "maybeFindFirst", operationName: Qr, modelApiIdentifier: Bi, defaultSelection: ra },
    {
      type: "action",
      operationName: "logInViaEmail",
      functionName: "logInViaEmail",
      namespace: "currentSession",
      modelApiIdentifier: Bi,
      modelSelectionField: Bi,
      isBulk: !1,
      isDeleter: !1,
      variables: { email: { required: !1, type: "String" }, password: { required: !1, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ra,
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
      modelApiIdentifier: Bi,
      modelSelectionField: Qr,
      namespace: "currentSession",
      variables: { inputs: { required: !0, type: "[BulkLogInViaEmailSessionsInput!]" } },
      defaultSelection: ra,
    },
    {
      type: "action",
      operationName: "logOut",
      functionName: "logOut",
      namespace: "currentSession",
      modelApiIdentifier: Bi,
      modelSelectionField: Bi,
      isBulk: !1,
      isDeleter: !1,
      variables: {},
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: ra,
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
      modelApiIdentifier: Bi,
      modelSelectionField: Qr,
      namespace: "currentSession",
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: ra,
    },
  ]),
  sa = {
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
    vendor: !0,
  },
  qt = "shopifyProduct",
  yr = "shopifyProducts",
  yI = ln(qt, yr, sa, [
    { type: "findOne", operationName: qt, modelApiIdentifier: qt, findByVariableName: "id", defaultSelection: sa },
    { type: "maybeFindOne", operationName: qt, modelApiIdentifier: qt, findByVariableName: "id", defaultSelection: sa },
    { type: "findMany", operationName: yr, modelApiIdentifier: qt, defaultSelection: sa },
    { type: "findFirst", operationName: yr, modelApiIdentifier: qt, defaultSelection: sa },
    { type: "maybeFindFirst", operationName: yr, modelApiIdentifier: qt, defaultSelection: sa },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: qt,
      modelSelectionField: qt,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyProduct: { required: !1, type: "CreateShopifyProductInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: sa,
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
      modelApiIdentifier: qt,
      modelSelectionField: yr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" } },
      defaultSelection: sa,
    },
    {
      type: "action",
      operationName: "updateShopifyProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: qt,
      modelSelectionField: qt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifyProduct: { required: !1, type: "UpdateShopifyProductInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: sa,
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
      modelApiIdentifier: qt,
      modelSelectionField: yr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateShopifyProductsInput!]" } },
      defaultSelection: sa,
    },
    {
      type: "action",
      operationName: "deleteShopifyProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: qt,
      modelSelectionField: qt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: qt,
      modelSelectionField: yr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  la = {
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
    width: !0,
  },
  Pt = "shopifyProductImage",
  hr = "shopifyProductImages",
  hI = ln(Pt, hr, la, [
    { type: "findOne", operationName: Pt, modelApiIdentifier: Pt, findByVariableName: "id", defaultSelection: la },
    { type: "maybeFindOne", operationName: Pt, modelApiIdentifier: Pt, findByVariableName: "id", defaultSelection: la },
    { type: "findMany", operationName: hr, modelApiIdentifier: Pt, defaultSelection: la },
    { type: "findFirst", operationName: hr, modelApiIdentifier: Pt, defaultSelection: la },
    { type: "maybeFindFirst", operationName: hr, modelApiIdentifier: Pt, defaultSelection: la },
    {
      type: "action",
      operationName: "createShopifyProductImage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Pt,
      modelSelectionField: Pt,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyProductImage: { required: !1, type: "CreateShopifyProductImageInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: la,
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
      modelApiIdentifier: Pt,
      modelSelectionField: hr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyProductImagesInput!]" } },
      defaultSelection: la,
    },
    {
      type: "action",
      operationName: "updateShopifyProductImage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Pt,
      modelSelectionField: Pt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifyProductImage: { required: !1, type: "UpdateShopifyProductImageInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: la,
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
      modelApiIdentifier: Pt,
      modelSelectionField: hr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateShopifyProductImagesInput!]" } },
      defaultSelection: la,
    },
    {
      type: "action",
      operationName: "deleteShopifyProductImage",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Pt,
      modelSelectionField: Pt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Pt,
      modelSelectionField: hr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  oa = { __typename: !0, id: !0, state: !0, createdAt: !0, name: !0, position: !0, updatedAt: !0, values: !0 },
  Vt = "shopifyProductOption",
  gr = "shopifyProductOptions",
  gI = ln(Vt, gr, oa, [
    { type: "findOne", operationName: Vt, modelApiIdentifier: Vt, findByVariableName: "id", defaultSelection: oa },
    { type: "maybeFindOne", operationName: Vt, modelApiIdentifier: Vt, findByVariableName: "id", defaultSelection: oa },
    { type: "findMany", operationName: gr, modelApiIdentifier: Vt, defaultSelection: oa },
    { type: "findFirst", operationName: gr, modelApiIdentifier: Vt, defaultSelection: oa },
    { type: "maybeFindFirst", operationName: gr, modelApiIdentifier: Vt, defaultSelection: oa },
    {
      type: "action",
      operationName: "createShopifyProductOption",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Vt,
      modelSelectionField: Vt,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyProductOption: { required: !1, type: "CreateShopifyProductOptionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: oa,
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
      modelApiIdentifier: Vt,
      modelSelectionField: gr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyProductOptionsInput!]" } },
      defaultSelection: oa,
    },
    {
      type: "action",
      operationName: "updateShopifyProductOption",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Vt,
      modelSelectionField: Vt,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductOption: { required: !1, type: "UpdateShopifyProductOptionInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: oa,
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
      modelApiIdentifier: Vt,
      modelSelectionField: gr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateShopifyProductOptionsInput!]" } },
      defaultSelection: oa,
    },
    {
      type: "action",
      operationName: "deleteShopifyProductOption",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Vt,
      modelSelectionField: Vt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Vt,
      modelSelectionField: gr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  da = {
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
    weightUnit: !0,
  },
  Et = "shopifyProductVariant",
  br = "shopifyProductVariants",
  bI = ln(Et, br, da, [
    { type: "findOne", operationName: Et, modelApiIdentifier: Et, findByVariableName: "id", defaultSelection: da },
    { type: "maybeFindOne", operationName: Et, modelApiIdentifier: Et, findByVariableName: "id", defaultSelection: da },
    { type: "findMany", operationName: br, modelApiIdentifier: Et, defaultSelection: da },
    { type: "findFirst", operationName: br, modelApiIdentifier: Et, defaultSelection: da },
    { type: "maybeFindFirst", operationName: br, modelApiIdentifier: Et, defaultSelection: da },
    {
      type: "action",
      operationName: "createShopifyProductVariant",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Et,
      modelSelectionField: Et,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyProductVariant: { required: !1, type: "CreateShopifyProductVariantInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: da,
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
      modelApiIdentifier: Et,
      modelSelectionField: br,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyProductVariantsInput!]" } },
      defaultSelection: da,
    },
    {
      type: "action",
      operationName: "updateShopifyProductVariant",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Et,
      modelSelectionField: Et,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        shopifyProductVariant: { required: !1, type: "UpdateShopifyProductVariantInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: da,
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
      modelApiIdentifier: Et,
      modelSelectionField: br,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateShopifyProductVariantsInput!]" } },
      defaultSelection: da,
    },
    {
      type: "action",
      operationName: "deleteShopifyProductVariant",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Et,
      modelSelectionField: Et,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Et,
      modelSelectionField: br,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Di = {
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
    zipCode: !0,
  },
  Me = "shopifyShop",
  Aa = "shopifyShops",
  II = ln(Me, Aa, Di, [
    { type: "findOne", operationName: Me, modelApiIdentifier: Me, findByVariableName: "id", defaultSelection: Di },
    { type: "maybeFindOne", operationName: Me, modelApiIdentifier: Me, findByVariableName: "id", defaultSelection: Di },
    { type: "findMany", operationName: Aa, modelApiIdentifier: Me, defaultSelection: Di },
    { type: "findFirst", operationName: Aa, modelApiIdentifier: Me, defaultSelection: Di },
    { type: "maybeFindFirst", operationName: Aa, modelApiIdentifier: Me, defaultSelection: Di },
    {
      type: "action",
      operationName: "createShopifyShop",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Me,
      modelSelectionField: Me,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyShop: { required: !1, type: "CreateShopifyShopInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Di,
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
      modelApiIdentifier: Me,
      modelSelectionField: Aa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyShopsInput!]" } },
      defaultSelection: Di,
    },
    {
      type: "action",
      operationName: "updateShopifyShop",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Me,
      modelSelectionField: Me,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifyShop: { required: !1, type: "UpdateShopifyShopInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Di,
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
      modelApiIdentifier: Me,
      modelSelectionField: Aa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateShopifyShopsInput!]" } },
      defaultSelection: Di,
    },
    {
      type: "action",
      operationName: "deleteShopifyShop",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Me,
      modelSelectionField: Me,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: Me,
      modelSelectionField: Aa,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "reinstallShopifyShop",
      functionName: "reinstall",
      namespace: null,
      modelApiIdentifier: Me,
      modelSelectionField: Me,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifyShop: { required: !1, type: "ReinstallShopifyShopInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Di,
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
      modelApiIdentifier: Me,
      modelSelectionField: Aa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkReinstallShopifyShopsInput!]" } },
      defaultSelection: Di,
    },
    {
      type: "action",
      operationName: "uninstallShopifyShop",
      functionName: "uninstall",
      namespace: null,
      modelApiIdentifier: Me,
      modelSelectionField: Me,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifyShop: { required: !1, type: "UninstallShopifyShopInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Di,
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
      modelApiIdentifier: Me,
      modelSelectionField: Aa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUninstallShopifyShopsInput!]" } },
      defaultSelection: Di,
    },
  ]),
  ua = { __typename: !0, id: !0, state: !0, createdAt: !0, updatedAt: !0 },
  _t = "productPairing",
  Ir = "productPairings",
  SI = ln(_t, Ir, ua, [
    { type: "findOne", operationName: _t, modelApiIdentifier: _t, findByVariableName: "id", defaultSelection: ua },
    { type: "maybeFindOne", operationName: _t, modelApiIdentifier: _t, findByVariableName: "id", defaultSelection: ua },
    { type: "findMany", operationName: Ir, modelApiIdentifier: _t, defaultSelection: ua },
    { type: "findFirst", operationName: Ir, modelApiIdentifier: _t, defaultSelection: ua },
    { type: "maybeFindFirst", operationName: Ir, modelApiIdentifier: _t, defaultSelection: ua },
    {
      type: "action",
      operationName: "createProductPairing",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: _t,
      modelSelectionField: _t,
      isBulk: !1,
      isDeleter: !1,
      variables: { productPairing: { required: !1, type: "CreateProductPairingInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ua,
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
      modelApiIdentifier: _t,
      modelSelectionField: Ir,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateProductPairingsInput!]" } },
      defaultSelection: ua,
    },
    {
      type: "action",
      operationName: "updateProductPairing",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: _t,
      modelSelectionField: _t,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, productPairing: { required: !1, type: "UpdateProductPairingInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ua,
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
      modelApiIdentifier: _t,
      modelSelectionField: Ir,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateProductPairingsInput!]" } },
      defaultSelection: ua,
    },
    {
      type: "action",
      operationName: "deleteProductPairing",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: _t,
      modelSelectionField: _t,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: _t,
      modelSelectionField: Ir,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Li = {
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
    updatedAt: !0,
  },
  bt = "shopifySync",
  Wa = "shopifySyncs",
  kI = ln(bt, Wa, Li, [
    { type: "findOne", operationName: bt, modelApiIdentifier: bt, findByVariableName: "id", defaultSelection: Li },
    { type: "maybeFindOne", operationName: bt, modelApiIdentifier: bt, findByVariableName: "id", defaultSelection: Li },
    { type: "findMany", operationName: Wa, modelApiIdentifier: bt, defaultSelection: Li },
    { type: "findFirst", operationName: Wa, modelApiIdentifier: bt, defaultSelection: Li },
    { type: "maybeFindFirst", operationName: Wa, modelApiIdentifier: bt, defaultSelection: Li },
    {
      type: "findOne",
      operationName: Wa,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: bt,
      defaultSelection: Li,
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: bt,
      modelSelectionField: bt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "CompleteShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Li,
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
      modelApiIdentifier: bt,
      modelSelectionField: Wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" } },
      defaultSelection: Li,
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: bt,
      modelSelectionField: bt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "ErrorShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Li,
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
      modelApiIdentifier: bt,
      modelSelectionField: Wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" } },
      defaultSelection: Li,
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: bt,
      modelSelectionField: bt,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifySync: { required: !1, type: "RunShopifySyncInput" }, startReason: { required: !1, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Li,
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
      modelApiIdentifier: bt,
      modelSelectionField: Wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: Li,
    },
  ]),
  pn = { __typename: !0, id: !0, ambiguous: !0, booleanField: !0, createdAt: !0, updatedAt: !0 },
  It = "ambiguous",
  La = "ambiguouss",
  vI = ln(It, La, pn, [
    { type: "findOne", operationName: It, modelApiIdentifier: It, findByVariableName: "id", defaultSelection: pn },
    { type: "maybeFindOne", operationName: It, modelApiIdentifier: It, findByVariableName: "id", defaultSelection: pn },
    { type: "findMany", operationName: La, modelApiIdentifier: It, defaultSelection: pn },
    { type: "findFirst", operationName: La, modelApiIdentifier: It, defaultSelection: pn },
    { type: "maybeFindFirst", operationName: La, modelApiIdentifier: It, defaultSelection: pn },
    {
      type: "findOne",
      operationName: La,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: It,
      defaultSelection: pn,
    },
    {
      type: "action",
      operationName: "createAmbiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: It,
      modelSelectionField: It,
      isBulk: !1,
      isDeleter: !1,
      variables: { ambiguous: { required: !1, type: "CreateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: pn,
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
      modelApiIdentifier: It,
      modelSelectionField: La,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAmbiguousInput!]" } },
      defaultSelection: pn,
    },
    {
      type: "action",
      operationName: "updateAmbiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: It,
      modelSelectionField: It,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, ambiguous: { required: !1, type: "UpdateAmbiguousInput" } },
      hasAmbiguousIdentifier: !0,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: pn,
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
      modelApiIdentifier: It,
      modelSelectionField: La,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAmbiguousInput!]" } },
      defaultSelection: pn,
    },
    {
      type: "action",
      operationName: "deleteAmbiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: It,
      modelSelectionField: It,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: It,
      modelSelectionField: La,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  fn = { __typename: !0, id: !0, createdAt: !0, numberField: !0, stringField: !0, updatedAt: !0 },
  St = "unambiguous",
  za = "unambiguouss",
  NI = ln(St, za, fn, [
    { type: "findOne", operationName: St, modelApiIdentifier: St, findByVariableName: "id", defaultSelection: fn },
    { type: "maybeFindOne", operationName: St, modelApiIdentifier: St, findByVariableName: "id", defaultSelection: fn },
    { type: "findMany", operationName: za, modelApiIdentifier: St, defaultSelection: fn },
    { type: "findFirst", operationName: za, modelApiIdentifier: St, defaultSelection: fn },
    { type: "maybeFindFirst", operationName: za, modelApiIdentifier: St, defaultSelection: fn },
    {
      type: "findOne",
      operationName: za,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: St,
      defaultSelection: fn,
    },
    {
      type: "action",
      operationName: "createUnambiguous",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: St,
      modelSelectionField: St,
      isBulk: !1,
      isDeleter: !1,
      variables: { unambiguous: { required: !1, type: "CreateUnambiguousInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: fn,
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
      modelApiIdentifier: St,
      modelSelectionField: za,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateUnambiguousInput!]" } },
      defaultSelection: fn,
    },
    {
      type: "action",
      operationName: "updateUnambiguous",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: St,
      modelSelectionField: St,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, unambiguous: { required: !1, type: "UpdateUnambiguousInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: fn,
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
      modelApiIdentifier: St,
      modelSelectionField: za,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateUnambiguousInput!]" } },
      defaultSelection: fn,
    },
    {
      type: "action",
      operationName: "deleteUnambiguous",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: St,
      modelSelectionField: St,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
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
      modelApiIdentifier: St,
      modelSelectionField: za,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  xu = { __typename: !0, id: !0, state: !0, createdAt: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 },
  $u = "session",
  AI = "sessions",
  FI = ln($u, AI, xu, [{ type: "get", operationName: "currentSession", defaultSelection: xu, modelApiIdentifier: $u }]);
var Ep;
const Gu = "production",
  wI = "development",
  MI = Symbol.for("gadget/modelRelationships"),
  OI = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let TI = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://related-products-example.gadget.app/",
      production: "https://related-products-example.gadget.host/",
    }),
      (this.applicationId = "1268"),
      (this[Ep] = {
        user: { sessions: { type: "HasMany", model: "session" } },
        session: { shop: { type: "BelongsTo", model: "shopifyShop" }, user: { type: "BelongsTo", model: "user" } },
        shopifyProduct: {
          incomingPairedProducts: { type: "HasManyThrough", model: "shopifyProduct" },
          images: { type: "HasMany", model: "shopifyProductImage" },
          options: { type: "HasMany", model: "shopifyProductOption" },
          variants: { type: "HasMany", model: "shopifyProductVariant" },
          pairedProducts: { type: "HasManyThrough", model: "shopifyProduct" },
          shop: { type: "BelongsTo", model: "shopifyShop" },
        },
        shopifyProductImage: {
          variants: { type: "HasMany", model: "shopifyProductVariant" },
          product: { type: "BelongsTo", model: "shopifyProduct" },
          shop: { type: "BelongsTo", model: "shopifyShop" },
        },
        shopifyProductOption: {
          product: { type: "BelongsTo", model: "shopifyProduct" },
          shop: { type: "BelongsTo", model: "shopifyShop" },
        },
        shopifyProductVariant: {
          product: { type: "BelongsTo", model: "shopifyProduct" },
          productImage: { type: "BelongsTo", model: "shopifyProductImage" },
          shop: { type: "BelongsTo", model: "shopifyShop" },
        },
        shopifyShop: {
          productImages: { type: "HasMany", model: "shopifyProductImage" },
          productOptions: { type: "HasMany", model: "shopifyProductOption" },
          syncs: { type: "HasMany", model: "shopifySync" },
          products: { type: "HasMany", model: "shopifyProduct" },
          productVariants: { type: "HasMany", model: "shopifyProductVariant" },
        },
        productPairing: {
          productA: { type: "BelongsTo", model: "shopifyProduct" },
          productB: { type: "BelongsTo", model: "shopifyProduct" },
        },
        shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } },
        ambiguous: {},
        unambiguous: {},
      }),
      (this.globalShopifySync = Object.assign(
        async (a) =>
          await ls(
            this.connection,
            "globalShopifySync",
            {
              apiKeys: { value: a.apiKeys, required: !1, type: "[String!]" },
              syncSince: { value: a.syncSince, required: !1, type: "DateTime" },
              models: { value: a.models, required: !1, type: "[String!]" },
              force: { value: a.force, required: !1, type: "Boolean" },
              startReason: { value: a.startReason, required: !1, type: "String" },
            },
            null
          ),
        {
          type: "globalAction",
          operationName: "globalShopifySync",
          namespace: null,
          variables: {
            apiKeys: { required: !1, type: "[String!]" },
            syncSince: { required: !1, type: "DateTime" },
            models: { required: !1, type: "[String!]" },
            force: { required: !1, type: "Boolean" },
            startReason: { required: !1, type: "String" },
          },
        }
      )),
      (this.test = Object.assign(async () => await ls(this.connection, "test", {}, null), {
        type: "globalAction",
        operationName: "test",
        namespace: null,
        variables: {},
      })),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? OI() ?? wI).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://related-products-example${this.environment == Gu ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Gu) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.user = new fI(this.connection)),
      (this.session = new mI(this.connection)),
      (this.shopifyProduct = new yI(this.connection)),
      (this.shopifyProductImage = new hI(this.connection)),
      (this.shopifyProductOption = new gI(this.connection)),
      (this.shopifyProductVariant = new bI(this.connection)),
      (this.shopifyShop = new II(this.connection)),
      (this.productPairing = new SI(this.connection)),
      (this.shopifySync = new kI(this.connection)),
      (this.ambiguous = new vI(this.connection)),
      (this.unambiguous = new NI(this.connection)),
      (this.currentSession = new FI(this.connection)),
      (this.internal = {
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifier: !1 }),
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        shopifyProduct: new N("shopifyProduct", this.connection, { pluralApiIdentifier: "shopifyProducts", hasAmbiguousIdentifier: !1 }),
        shopifyProductImage: new N("shopifyProductImage", this.connection, {
          pluralApiIdentifier: "shopifyProductImages",
          hasAmbiguousIdentifier: !1,
        }),
        shopifyProductOption: new N("shopifyProductOption", this.connection, {
          pluralApiIdentifier: "shopifyProductOptions",
          hasAmbiguousIdentifier: !1,
        }),
        shopifyProductVariant: new N("shopifyProductVariant", this.connection, {
          pluralApiIdentifier: "shopifyProductVariants",
          hasAmbiguousIdentifier: !1,
        }),
        shopifyShop: new N("shopifyShop", this.connection, { pluralApiIdentifier: "shopifyShops", hasAmbiguousIdentifier: !1 }),
        productPairing: new N("productPairing", this.connection, { pluralApiIdentifier: "productPairings", hasAmbiguousIdentifier: !1 }),
        shopifySync: new N("shopifySync", this.connection, { pluralApiIdentifier: "shopifySyncs", hasAmbiguousIdentifier: !1 }),
        ambiguous: new N("ambiguous", this.connection, { pluralApiIdentifier: "ambiguouss", hasAmbiguousIdentifier: !0 }),
        unambiguous: new N("unambiguous", this.connection, { pluralApiIdentifier: "unambiguouss", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
Ep = MI;
const xi = (e, t, i, n) => {
  const r = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a
          ? (r.prototype[a.functionName] = Object.assign(async function (s, l) {
              return await Xt(this, a.operationName, a.findByField, s, i, e, l);
            }, a))
          : (r.prototype[a.type] = Object.assign(async function (s, l) {
              const o = await ie(this, e, s, i, e, l, a.type != "maybeFindOne");
              return o.isEmpty() ? null : o;
            }, a));
        break;
      }
      case "findMany": {
        r.prototype.findMany = Object.assign(async function (s) {
          return await H(this, t, i, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        r.prototype[a.type] = Object.assign(async function (s) {
          const l = await H(this, t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.type != "maybeFindFirst");
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        r.prototype.get = Object.assign(async function (s) {
          return await ie(this, a.operationName, void 0, i, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          r.prototype[a.functionName] = Object.assign(async function (l, o) {
            let d;
            return (
              s
                ? (d = { ids: { ...a.variables.ids, value: l } })
                : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => _p(this[a.singleActionFunctionName], void 0, u)) } }),
              await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
            );
          }, a);
        } else {
          const s = !!a.variables.id,
            l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
          r.prototype[a.functionName] = Object.assign(async function (...o) {
            const [d, u] = RI(a, s, l, o);
            return await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !1, d, u, a.namespace, a.hasReturnType);
          }, a);
        }
        break;
      }
    }
  return r;
};
function _p(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function RI(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = _p(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
const mn = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  kt = "answer",
  Ha = "answers",
  BI = xi(kt, Ha, mn, [
    { type: "findOne", operationName: kt, modelApiIdentifier: kt, findByVariableName: "id", defaultSelection: mn },
    { type: "maybeFindOne", operationName: kt, modelApiIdentifier: kt, findByVariableName: "id", defaultSelection: mn },
    { type: "findMany", operationName: Ha, modelApiIdentifier: kt, defaultSelection: mn },
    { type: "findFirst", operationName: Ha, modelApiIdentifier: kt, defaultSelection: mn },
    { type: "maybeFindFirst", operationName: Ha, modelApiIdentifier: kt, defaultSelection: mn },
    {
      type: "findOne",
      operationName: Ha,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: kt,
      defaultSelection: mn,
    },
    {
      type: "action",
      operationName: "createAnswer",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: kt,
      modelSelectionField: kt,
      isBulk: !1,
      isDeleter: !1,
      variables: { answer: { required: !1, type: "CreateAnswerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: mn,
    },
    {
      type: "action",
      operationName: "bulkCreateAnswers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: kt,
      modelSelectionField: Ha,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAnswersInput!]" } },
      defaultSelection: mn,
    },
    {
      type: "action",
      operationName: "updateAnswer",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: kt,
      modelSelectionField: kt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, answer: { required: !1, type: "UpdateAnswerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: mn,
    },
    {
      type: "action",
      operationName: "bulkUpdateAnswers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: kt,
      modelSelectionField: Ha,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAnswersInput!]" } },
      defaultSelection: mn,
    },
    {
      type: "action",
      operationName: "deleteAnswer",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: kt,
      modelSelectionField: kt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteAnswers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: kt,
      modelSelectionField: Ha,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  yn = { __typename: !0, id: !0, createdAt: !0, productMetadata: !0, updatedAt: !0 },
  vt = "recommendedProduct",
  Qa = "recommendedProducts",
  DI = xi(vt, Qa, yn, [
    { type: "findOne", operationName: vt, modelApiIdentifier: vt, findByVariableName: "id", defaultSelection: yn },
    { type: "maybeFindOne", operationName: vt, modelApiIdentifier: vt, findByVariableName: "id", defaultSelection: yn },
    { type: "findMany", operationName: Qa, modelApiIdentifier: vt, defaultSelection: yn },
    { type: "findFirst", operationName: Qa, modelApiIdentifier: vt, defaultSelection: yn },
    { type: "maybeFindFirst", operationName: Qa, modelApiIdentifier: vt, defaultSelection: yn },
    {
      type: "findOne",
      operationName: Qa,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: vt,
      defaultSelection: yn,
    },
    {
      type: "action",
      operationName: "createRecommendedProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: vt,
      modelSelectionField: vt,
      isBulk: !1,
      isDeleter: !1,
      variables: { recommendedProduct: { required: !1, type: "CreateRecommendedProductInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: yn,
    },
    {
      type: "action",
      operationName: "bulkCreateRecommendedProducts",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: vt,
      modelSelectionField: Qa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateRecommendedProductsInput!]" } },
      defaultSelection: yn,
    },
    {
      type: "action",
      operationName: "updateRecommendedProduct",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: vt,
      modelSelectionField: vt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, recommendedProduct: { required: !1, type: "UpdateRecommendedProductInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: yn,
    },
    {
      type: "action",
      operationName: "bulkUpdateRecommendedProducts",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: vt,
      modelSelectionField: Qa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateRecommendedProductsInput!]" } },
      defaultSelection: yn,
    },
    {
      type: "action",
      operationName: "deleteRecommendedProduct",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: vt,
      modelSelectionField: vt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteRecommendedProducts",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: vt,
      modelSelectionField: Qa,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  hn = { __typename: !0, id: !0, createdAt: !0, updatedAt: !0 },
  Nt = "notificationMetadata",
  Ka = "notificationMetadatas",
  CI = xi(Nt, Ka, hn, [
    { type: "findOne", operationName: Nt, modelApiIdentifier: Nt, findByVariableName: "id", defaultSelection: hn },
    { type: "maybeFindOne", operationName: Nt, modelApiIdentifier: Nt, findByVariableName: "id", defaultSelection: hn },
    { type: "findMany", operationName: Ka, modelApiIdentifier: Nt, defaultSelection: hn },
    { type: "findFirst", operationName: Ka, modelApiIdentifier: Nt, defaultSelection: hn },
    { type: "maybeFindFirst", operationName: Ka, modelApiIdentifier: Nt, defaultSelection: hn },
    {
      type: "findOne",
      operationName: Ka,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Nt,
      defaultSelection: hn,
    },
    {
      type: "action",
      operationName: "createNotificationMetadata",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Nt,
      modelSelectionField: Nt,
      isBulk: !1,
      isDeleter: !1,
      variables: { notificationMetadata: { required: !1, type: "CreateNotificationMetadataInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: hn,
    },
    {
      type: "action",
      operationName: "bulkCreateNotificationMetadata",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Nt,
      modelSelectionField: Ka,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateNotificationMetadataInput!]" } },
      defaultSelection: hn,
    },
    {
      type: "action",
      operationName: "updateNotificationMetadata",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Nt,
      modelSelectionField: Nt,
      isBulk: !1,
      isDeleter: !1,
      variables: {
        id: { required: !0, type: "GadgetID" },
        notificationMetadata: { required: !1, type: "UpdateNotificationMetadataInput" },
      },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: hn,
    },
    {
      type: "action",
      operationName: "bulkUpdateNotificationMetadata",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Nt,
      modelSelectionField: Ka,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateNotificationMetadataInput!]" } },
      defaultSelection: hn,
    },
    {
      type: "action",
      operationName: "deleteNotificationMetadata",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Nt,
      modelSelectionField: Nt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteNotificationMetadata",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Nt,
      modelSelectionField: Ka,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Sr = { __typename: !0, id: !0, createdAt: !0, payload: !0, topic: !0, updatedAt: !0 },
  Fa = "shopifyGdprRequest",
  ys = "shopifyGdprRequests",
  UI = xi(Fa, ys, Sr, [
    { type: "findOne", operationName: Fa, modelApiIdentifier: Fa, findByVariableName: "id", defaultSelection: Sr },
    { type: "maybeFindOne", operationName: Fa, modelApiIdentifier: Fa, findByVariableName: "id", defaultSelection: Sr },
    { type: "findMany", operationName: ys, modelApiIdentifier: Fa, defaultSelection: Sr },
    { type: "findFirst", operationName: ys, modelApiIdentifier: Fa, defaultSelection: Sr },
    { type: "maybeFindFirst", operationName: ys, modelApiIdentifier: Fa, defaultSelection: Sr },
    {
      type: "findOne",
      operationName: ys,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Fa,
      defaultSelection: Sr,
    },
  ]),
  Ja = {
    __typename: !0,
    id: !0,
    body: !0,
    compareAtPriceRange: !0,
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
    vendor: !0,
  },
  gn = "shopifyProduct",
  hs = "shopifyProducts",
  qI = xi(gn, hs, Ja, [
    { type: "findOne", operationName: gn, modelApiIdentifier: gn, findByVariableName: "id", defaultSelection: Ja },
    { type: "maybeFindOne", operationName: gn, modelApiIdentifier: gn, findByVariableName: "id", defaultSelection: Ja },
    { type: "findMany", operationName: hs, modelApiIdentifier: gn, defaultSelection: Ja },
    { type: "findFirst", operationName: hs, modelApiIdentifier: gn, defaultSelection: Ja },
    { type: "maybeFindFirst", operationName: hs, modelApiIdentifier: gn, defaultSelection: Ja },
    {
      type: "action",
      operationName: "createShopifyProduct",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: gn,
      modelSelectionField: gn,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifyProduct: { required: !1, type: "CreateShopifyProductInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Ja,
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
      modelApiIdentifier: gn,
      modelSelectionField: hs,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateShopifyProductsInput!]" } },
      defaultSelection: Ja,
    },
  ]),
  Kr = {
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
    customerAccountsV2: !0,
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
    zipCode: !0,
  },
  Ya = "shopifyShop",
  Zs = "shopifyShops",
  PI = xi(Ya, Zs, Kr, [
    { type: "findOne", operationName: Ya, modelApiIdentifier: Ya, findByVariableName: "id", defaultSelection: Kr },
    { type: "maybeFindOne", operationName: Ya, modelApiIdentifier: Ya, findByVariableName: "id", defaultSelection: Kr },
    { type: "findMany", operationName: Zs, modelApiIdentifier: Ya, defaultSelection: Kr },
    { type: "findFirst", operationName: Zs, modelApiIdentifier: Ya, defaultSelection: Kr },
    { type: "maybeFindFirst", operationName: Zs, modelApiIdentifier: Ya, defaultSelection: Kr },
  ]),
  ti = {
    __typename: !0,
    id: !0,
    state: !0,
    createdAt: !0,
    domain: !0,
    errorDetails: !0,
    errorMessage: !0,
    force: !0,
    models: !0,
    syncSince: !0,
    updatedAt: !0,
  },
  Xe = "shopifySync",
  wa = "shopifySyncs",
  VI = xi(Xe, wa, ti, [
    { type: "findOne", operationName: Xe, modelApiIdentifier: Xe, findByVariableName: "id", defaultSelection: ti },
    { type: "maybeFindOne", operationName: Xe, modelApiIdentifier: Xe, findByVariableName: "id", defaultSelection: ti },
    { type: "findMany", operationName: wa, modelApiIdentifier: Xe, defaultSelection: ti },
    { type: "findFirst", operationName: wa, modelApiIdentifier: Xe, defaultSelection: ti },
    { type: "maybeFindFirst", operationName: wa, modelApiIdentifier: Xe, defaultSelection: ti },
    {
      type: "findOne",
      operationName: wa,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Xe,
      defaultSelection: ti,
    },
    {
      type: "action",
      operationName: "abortShopifySync",
      functionName: "abort",
      namespace: null,
      modelApiIdentifier: Xe,
      modelSelectionField: Xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "AbortShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ti,
    },
    {
      type: "action",
      operationName: "bulkAbortShopifySyncs",
      functionName: "bulkAbort",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "abort",
      modelApiIdentifier: Xe,
      modelSelectionField: wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkAbortShopifySyncsInput!]" } },
      defaultSelection: ti,
    },
    {
      type: "action",
      operationName: "completeShopifySync",
      functionName: "complete",
      namespace: null,
      modelApiIdentifier: Xe,
      modelSelectionField: Xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "CompleteShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ti,
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
      modelApiIdentifier: Xe,
      modelSelectionField: wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCompleteShopifySyncsInput!]" } },
      defaultSelection: ti,
    },
    {
      type: "action",
      operationName: "errorShopifySync",
      functionName: "error",
      namespace: null,
      modelApiIdentifier: Xe,
      modelSelectionField: Xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, shopifySync: { required: !1, type: "ErrorShopifySyncInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ti,
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
      modelApiIdentifier: Xe,
      modelSelectionField: wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkErrorShopifySyncsInput!]" } },
      defaultSelection: ti,
    },
    {
      type: "action",
      operationName: "runShopifySync",
      functionName: "run",
      namespace: null,
      modelApiIdentifier: Xe,
      modelSelectionField: Xe,
      isBulk: !1,
      isDeleter: !1,
      variables: { shopifySync: { required: !1, type: "RunShopifySyncInput" }, startReason: { required: !1, type: "String" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: ti,
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
      modelApiIdentifier: Xe,
      modelSelectionField: wa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkRunShopifySyncsInput!]" } },
      defaultSelection: ti,
    },
  ]),
  bn = { __typename: !0, id: !0, createdAt: !0, updatedAt: !0 },
  At = "questionable",
  Za = "questionables",
  EI = xi(At, Za, bn, [
    { type: "findOne", operationName: At, modelApiIdentifier: At, findByVariableName: "id", defaultSelection: bn },
    { type: "maybeFindOne", operationName: At, modelApiIdentifier: At, findByVariableName: "id", defaultSelection: bn },
    { type: "findMany", operationName: Za, modelApiIdentifier: At, defaultSelection: bn },
    { type: "findFirst", operationName: Za, modelApiIdentifier: At, defaultSelection: bn },
    { type: "maybeFindFirst", operationName: Za, modelApiIdentifier: At, defaultSelection: bn },
    {
      type: "findOne",
      operationName: Za,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: At,
      defaultSelection: bn,
    },
    {
      type: "action",
      operationName: "createQuestionable",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: At,
      modelSelectionField: At,
      isBulk: !1,
      isDeleter: !1,
      variables: { questionable: { required: !1, type: "CreateQuestionableInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: bn,
    },
    {
      type: "action",
      operationName: "bulkCreateQuestionables",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: At,
      modelSelectionField: Za,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateQuestionablesInput!]" } },
      defaultSelection: bn,
    },
    {
      type: "action",
      operationName: "updateQuestionable",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: At,
      modelSelectionField: At,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, questionable: { required: !1, type: "UpdateQuestionableInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: bn,
    },
    {
      type: "action",
      operationName: "bulkUpdateQuestionables",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: At,
      modelSelectionField: Za,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateQuestionablesInput!]" } },
      defaultSelection: bn,
    },
    {
      type: "action",
      operationName: "deleteQuestionable",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: At,
      modelSelectionField: At,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteQuestionables",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: At,
      modelSelectionField: Za,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  In = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  Ft = "notificationMessage",
  Xa = "notificationMessages",
  _I = xi(Ft, Xa, In, [
    { type: "findOne", operationName: Ft, modelApiIdentifier: Ft, findByVariableName: "id", defaultSelection: In },
    { type: "maybeFindOne", operationName: Ft, modelApiIdentifier: Ft, findByVariableName: "id", defaultSelection: In },
    { type: "findMany", operationName: Xa, modelApiIdentifier: Ft, defaultSelection: In },
    { type: "findFirst", operationName: Xa, modelApiIdentifier: Ft, defaultSelection: In },
    { type: "maybeFindFirst", operationName: Xa, modelApiIdentifier: Ft, defaultSelection: In },
    {
      type: "findOne",
      operationName: Xa,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ft,
      defaultSelection: In,
    },
    {
      type: "action",
      operationName: "createNotificationMessage",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ft,
      modelSelectionField: Ft,
      isBulk: !1,
      isDeleter: !1,
      variables: { notificationMessage: { required: !1, type: "CreateNotificationMessageInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: In,
    },
    {
      type: "action",
      operationName: "bulkCreateNotificationMessages",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ft,
      modelSelectionField: Xa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateNotificationMessagesInput!]" } },
      defaultSelection: In,
    },
    {
      type: "action",
      operationName: "updateNotificationMessage",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ft,
      modelSelectionField: Ft,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, notificationMessage: { required: !1, type: "UpdateNotificationMessageInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: In,
    },
    {
      type: "action",
      operationName: "bulkUpdateNotificationMessages",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ft,
      modelSelectionField: Xa,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateNotificationMessagesInput!]" } },
      defaultSelection: In,
    },
    {
      type: "action",
      operationName: "deleteNotificationMessage",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ft,
      modelSelectionField: Ft,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteNotificationMessages",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ft,
      modelSelectionField: Xa,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Sn = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  wt = "question",
  er = "questions",
  xI = xi(wt, er, Sn, [
    { type: "findOne", operationName: wt, modelApiIdentifier: wt, findByVariableName: "id", defaultSelection: Sn },
    { type: "maybeFindOne", operationName: wt, modelApiIdentifier: wt, findByVariableName: "id", defaultSelection: Sn },
    { type: "findMany", operationName: er, modelApiIdentifier: wt, defaultSelection: Sn },
    { type: "findFirst", operationName: er, modelApiIdentifier: wt, defaultSelection: Sn },
    { type: "maybeFindFirst", operationName: er, modelApiIdentifier: wt, defaultSelection: Sn },
    {
      type: "findOne",
      operationName: er,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: wt,
      defaultSelection: Sn,
    },
    {
      type: "action",
      operationName: "createQuestion",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: wt,
      modelSelectionField: wt,
      isBulk: !1,
      isDeleter: !1,
      variables: { question: { required: !1, type: "CreateQuestionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Sn,
    },
    {
      type: "action",
      operationName: "bulkCreateQuestions",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: wt,
      modelSelectionField: er,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateQuestionsInput!]" } },
      defaultSelection: Sn,
    },
    {
      type: "action",
      operationName: "updateQuestion",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: wt,
      modelSelectionField: wt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, question: { required: !1, type: "UpdateQuestionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Sn,
    },
    {
      type: "action",
      operationName: "bulkUpdateQuestions",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: wt,
      modelSelectionField: er,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateQuestionsInput!]" } },
      defaultSelection: Sn,
    },
    {
      type: "action",
      operationName: "deleteQuestion",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: wt,
      modelSelectionField: wt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteQuestions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: wt,
      modelSelectionField: er,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  kn = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  Mt = "quiz",
  tr = "quizzes",
  $I = xi(Mt, tr, kn, [
    { type: "findOne", operationName: Mt, modelApiIdentifier: Mt, findByVariableName: "id", defaultSelection: kn },
    { type: "maybeFindOne", operationName: Mt, modelApiIdentifier: Mt, findByVariableName: "id", defaultSelection: kn },
    { type: "findMany", operationName: tr, modelApiIdentifier: Mt, defaultSelection: kn },
    { type: "findFirst", operationName: tr, modelApiIdentifier: Mt, defaultSelection: kn },
    { type: "maybeFindFirst", operationName: tr, modelApiIdentifier: Mt, defaultSelection: kn },
    {
      type: "findOne",
      operationName: tr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Mt,
      defaultSelection: kn,
    },
    {
      type: "action",
      operationName: "createQuiz",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Mt,
      modelSelectionField: Mt,
      isBulk: !1,
      isDeleter: !1,
      variables: { quiz: { required: !1, type: "CreateQuizInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: kn,
    },
    {
      type: "action",
      operationName: "bulkCreateQuizzes",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Mt,
      modelSelectionField: tr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateQuizzesInput!]" } },
      defaultSelection: kn,
    },
    {
      type: "action",
      operationName: "updateQuiz",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Mt,
      modelSelectionField: Mt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, quiz: { required: !1, type: "UpdateQuizInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: kn,
    },
    {
      type: "action",
      operationName: "bulkUpdateQuizzes",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Mt,
      modelSelectionField: tr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateQuizzesInput!]" } },
      defaultSelection: kn,
    },
    {
      type: "action",
      operationName: "deleteQuiz",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Mt,
      modelSelectionField: Mt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteQuizzes",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Mt,
      modelSelectionField: tr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  vn = { __typename: !0, id: !0, createdAt: !0, enabled: !0, sendOutDate: !0, updatedAt: !0 },
  Ot = "notification",
  ir = "notifications",
  GI = xi(Ot, ir, vn, [
    { type: "findOne", operationName: Ot, modelApiIdentifier: Ot, findByVariableName: "id", defaultSelection: vn },
    { type: "maybeFindOne", operationName: Ot, modelApiIdentifier: Ot, findByVariableName: "id", defaultSelection: vn },
    { type: "findMany", operationName: ir, modelApiIdentifier: Ot, defaultSelection: vn },
    { type: "findFirst", operationName: ir, modelApiIdentifier: Ot, defaultSelection: vn },
    { type: "maybeFindFirst", operationName: ir, modelApiIdentifier: Ot, defaultSelection: vn },
    {
      type: "findOne",
      operationName: ir,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ot,
      defaultSelection: vn,
    },
    {
      type: "action",
      operationName: "createNotification",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Ot,
      modelSelectionField: Ot,
      isBulk: !1,
      isDeleter: !1,
      variables: { notification: { required: !1, type: "CreateNotificationInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: vn,
    },
    {
      type: "action",
      operationName: "bulkCreateNotifications",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Ot,
      modelSelectionField: ir,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateNotificationsInput!]" } },
      defaultSelection: vn,
    },
    {
      type: "action",
      operationName: "updateNotification",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Ot,
      modelSelectionField: Ot,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, notification: { required: !1, type: "UpdateNotificationInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: vn,
    },
    {
      type: "action",
      operationName: "bulkUpdateNotifications",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Ot,
      modelSelectionField: ir,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateNotificationsInput!]" } },
      defaultSelection: vn,
    },
    {
      type: "action",
      operationName: "deleteNotification",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Ot,
      modelSelectionField: Ot,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteNotifications",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Ot,
      modelSelectionField: ir,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  kr = { __typename: !0, id: !0, createdAt: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 },
  Ma = "session",
  gs = "sessions",
  jI = xi(Ma, gs, kr, [
    { type: "findOne", operationName: Ma, modelApiIdentifier: Ma, findByVariableName: "id", defaultSelection: kr },
    { type: "maybeFindOne", operationName: Ma, modelApiIdentifier: Ma, findByVariableName: "id", defaultSelection: kr },
    { type: "findMany", operationName: gs, modelApiIdentifier: Ma, defaultSelection: kr },
    { type: "findFirst", operationName: gs, modelApiIdentifier: Ma, defaultSelection: kr },
    { type: "maybeFindFirst", operationName: gs, modelApiIdentifier: Ma, defaultSelection: kr },
    {
      type: "findOne",
      operationName: gs,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Ma,
      defaultSelection: kr,
    },
  ]),
  ju = { __typename: !0, id: !0, createdAt: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 },
  Wu = "session",
  WI = "sessions",
  LI = xi(Wu, WI, ju, [{ type: "get", operationName: "currentSession", defaultSelection: ju, modelApiIdentifier: Wu }]);
var xp;
const Lu = "production",
  zI = "development",
  HI = Symbol.for("gadget/modelRelationships"),
  QI = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let KI = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://zxcv-deeply-nested--development.gadget.app/",
      production: "https://zxcv-deeply-nested.gadget.app/",
    }),
      (this.applicationId = "76013"),
      (this[xp] = {
        answer: {
          question: { type: "BelongsTo", model: "question" },
          notification: { type: "HasOne", model: "notification" },
          questionable: { type: "BelongsTo", model: "questionable" },
          recommendedProduct: { type: "HasOne", model: "recommendedProduct" },
        },
        recommendedProduct: {
          productSuggestion: { type: "BelongsTo", model: "shopifyShop" },
          answer: { type: "BelongsTo", model: "answer" },
          anotherProductSuggestion: { type: "BelongsTo", model: "shopifyShop" },
        },
        notificationMetadata: { notificationMessages: { type: "HasMany", model: "notificationMessage" } },
        shopifyGdprRequest: { shop: { type: "BelongsTo", model: "shopifyShop" } },
        shopifyProduct: { shop: { type: "BelongsTo", model: "shopifyShop" } },
        shopifyShop: {
          syncs: { type: "HasMany", model: "shopifySync" },
          products: { type: "HasMany", model: "shopifyProduct" },
          gdprRequests: { type: "HasMany", model: "shopifyGdprRequest" },
          recommendedProducts: { type: "HasMany", model: "recommendedProduct" },
        },
        shopifySync: { shop: { type: "BelongsTo", model: "shopifyShop" } },
        questionable: { quiz: { type: "BelongsTo", model: "quiz" }, answers: { type: "HasMany", model: "answer" } },
        notificationMessage: {
          notificationMetadata: { type: "BelongsTo", model: "notificationMetadata" },
          notification: { type: "BelongsTo", model: "notification" },
        },
        question: { answers: { type: "HasMany", model: "answer" }, quiz: { type: "BelongsTo", model: "quiz" } },
        quiz: { questionables: { type: "HasMany", model: "questionable" }, questions: { type: "HasMany", model: "question" } },
        notification: {
          notificationMessage: { type: "HasOne", model: "notificationMessage" },
          answer: { type: "BelongsTo", model: "answer" },
        },
        session: { shop: { type: "BelongsTo", model: "shopifyShop" } },
      }),
      (this.globalShopifySync = Object.assign(
        async (a) =>
          await ls(
            this.connection,
            "globalShopifySync",
            {
              apiKeys: { value: a.apiKeys, required: !1, type: "[String!]" },
              syncSince: { value: a.syncSince, required: !1, type: "DateTime" },
              models: { value: a.models, required: !1, type: "[String!]" },
              force: { value: a.force, required: !1, type: "Boolean" },
              startReason: { value: a.startReason, required: !1, type: "String" },
            },
            null
          ),
        {
          type: "globalAction",
          operationName: "globalShopifySync",
          namespace: null,
          variables: {
            apiKeys: { required: !1, type: "[String!]" },
            syncSince: { required: !1, type: "DateTime" },
            models: { required: !1, type: "[String!]" },
            force: { required: !1, type: "Boolean" },
            startReason: { required: !1, type: "String" },
          },
        }
      )),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? QI() ?? zI).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://zxcv-deeply-nested${this.environment == Lu ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Lu) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.answer = new BI(this.connection)),
      (this.recommendedProduct = new DI(this.connection)),
      (this.notificationMetadata = new CI(this.connection)),
      (this.shopifyGdprRequest = new UI(this.connection)),
      (this.shopifyProduct = new qI(this.connection)),
      (this.shopifyShop = new PI(this.connection)),
      (this.shopifySync = new VI(this.connection)),
      (this.questionable = new EI(this.connection)),
      (this.notificationMessage = new _I(this.connection)),
      (this.question = new xI(this.connection)),
      (this.quiz = new $I(this.connection)),
      (this.notification = new GI(this.connection)),
      (this.session = new jI(this.connection)),
      (this.currentSession = new LI(this.connection)),
      (this.internal = {
        answer: new N("answer", this.connection, { pluralApiIdentifier: "answers", hasAmbiguousIdentifier: !1 }),
        recommendedProduct: new N("recommendedProduct", this.connection, {
          pluralApiIdentifier: "recommendedProducts",
          hasAmbiguousIdentifier: !1,
        }),
        notificationMetadata: new N("notificationMetadata", this.connection, {
          pluralApiIdentifier: "notificationMetadatas",
          hasAmbiguousIdentifier: !1,
        }),
        shopifyGdprRequest: new N("shopifyGdprRequest", this.connection, {
          pluralApiIdentifier: "shopifyGdprRequests",
          hasAmbiguousIdentifier: !1,
        }),
        shopifyProduct: new N("shopifyProduct", this.connection, { pluralApiIdentifier: "shopifyProducts", hasAmbiguousIdentifier: !1 }),
        shopifyShop: new N("shopifyShop", this.connection, { pluralApiIdentifier: "shopifyShops", hasAmbiguousIdentifier: !1 }),
        shopifySync: new N("shopifySync", this.connection, { pluralApiIdentifier: "shopifySyncs", hasAmbiguousIdentifier: !1 }),
        questionable: new N("questionable", this.connection, { pluralApiIdentifier: "questionables", hasAmbiguousIdentifier: !1 }),
        notificationMessage: new N("notificationMessage", this.connection, {
          pluralApiIdentifier: "notificationMessages",
          hasAmbiguousIdentifier: !1,
        }),
        question: new N("question", this.connection, { pluralApiIdentifier: "questions", hasAmbiguousIdentifier: !1 }),
        quiz: new N("quiz", this.connection, { pluralApiIdentifier: "quizzes", hasAmbiguousIdentifier: !1 }),
        notification: new N("notification", this.connection, { pluralApiIdentifier: "notifications", hasAmbiguousIdentifier: !1 }),
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
xp = HI;
function ue(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
const V = {
    __typename: !0,
    createdAt: !0,
    email: !0,
    emailVerificationToken: !0,
    emailVerificationTokenExpiration: !0,
    emailVerified: !0,
    firstName: !0,
    googleImageUrl: !0,
    googleProfileId: !0,
    id: !0,
    lastName: !0,
    lastSignedIn: !0,
    resetPasswordToken: !0,
    resetPasswordTokenExpiration: !0,
    roles: { key: !0, name: !0 },
    updatedAt: !0,
  },
  T = "user";
async function JI(e, t) {
  const i = ue(this.signUp, void 0, e);
  return await D(
    this,
    "signUpUser",
    V,
    T,
    T,
    !1,
    { email: { value: i.email, required: !0, type: "String" }, password: { value: i.password, required: !0, type: "String" } },
    t,
    null,
    !0
  );
}
async function YI(e, t) {
  const i = ue(this.signIn, void 0, e);
  return await D(
    this,
    "signInUser",
    V,
    T,
    T,
    !1,
    { email: { value: i.email, required: !0, type: "String" }, password: { value: i.password, required: !0, type: "String" } },
    t,
    null,
    !1
  );
}
async function ZI(e, t) {
  return await D(this, "signOutUser", V, T, T, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
async function XI(e, t, i) {
  const n = ue(this.update, e, t);
  return await D(
    this,
    "updateUser",
    V,
    T,
    T,
    !1,
    { id: { value: e, required: !0, type: "GadgetID" }, user: { value: n.user, required: !1, type: "UpdateUserInput" } },
    i,
    null,
    !1
  );
}
async function eS(e, t) {
  return await D(this, "deleteUser", null, T, T, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
async function tS(e, t) {
  const i = ue(this.sendVerifyEmail, void 0, e);
  return await D(this, "sendVerifyEmailUser", V, T, T, !1, { email: { value: i.email, required: !0, type: "String" } }, t, null, !0);
}
async function iS(e, t) {
  const i = ue(this.verifyEmail, void 0, e);
  return await D(this, "verifyEmailUser", V, T, T, !1, { code: { value: i.code, required: !0, type: "String" } }, t, null, !0);
}
async function nS(e, t) {
  const i = ue(this.sendResetPassword, void 0, e);
  return await D(this, "sendResetPasswordUser", V, T, T, !1, { email: { value: i.email, required: !0, type: "String" } }, t, null, !0);
}
async function aS(e, t) {
  const i = ue(this.resetPassword, void 0, e);
  return await D(
    this,
    "resetPasswordUser",
    V,
    T,
    T,
    !1,
    { password: { value: i.password, required: !0, type: "String" }, code: { value: i.code, required: !0, type: "String" } },
    t,
    null,
    !0
  );
}
async function rS(e, t, i) {
  const n = ue(this.changePassword, e, t);
  return await D(
    this,
    "changePasswordUser",
    V,
    T,
    T,
    !1,
    {
      id: { value: e, required: !0, type: "GadgetID" },
      currentPassword: { value: n.currentPassword, required: !0, type: "String" },
      newPassword: { value: n.newPassword, required: !0, type: "String" },
    },
    i,
    null,
    !1
  );
}
class sS {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "user", i, V, T, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: T,
        defaultSelection: V,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "user", i, V, T, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "user", modelApiIdentifier: "user", defaultSelection: V }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "users", V, "user", i), {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: T,
        defaultSelection: V,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "users", V, T, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "users", modelApiIdentifier: T, defaultSelection: V }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "users", V, T, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "users", modelApiIdentifier: T, defaultSelection: V }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "users", "id", i, V, T, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "users",
        modelApiIdentifier: T,
        defaultSelection: V,
      })),
      (this.findByEmail = Object.assign(async (i, n) => await Xt(this, "users", "email", i, V, T, n), {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: T,
        defaultSelection: V,
      })),
      (this.signUp = Object.assign(JI, {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !0,
        acceptsModelInput: !1,
      })),
      (this.bulkSignUp = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.signUp, void 0, a));
          return await D(
            this,
            "bulkSignUpUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkSignUp.variables.inputs } },
            n,
            null,
            !0
          );
        },
        {
          type: "action",
          operationName: "bulkSignUpUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkSignUpUsersInput!]" } },
          hasReturnType: !0,
          acceptsModelInput: !1,
        }
      )),
      (this.signIn = Object.assign(YI, {
        type: "action",
        operationName: "signInUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { email: { required: !0, type: "String" }, password: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkSignIn = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.signIn, void 0, a));
          return await D(
            this,
            "bulkSignInUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkSignIn.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkSignInUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkSignInUsersInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      )),
      (this.signOut = Object.assign(ZI, {
        type: "action",
        operationName: "signOutUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkSignOut = Object.assign(
        async (i, n) =>
          await D(this, "bulkSignOutUsers", V, "user", "users", !0, { ids: { value: i, ...this.bulkSignOut.variables.ids } }, n, null, !1),
        {
          type: "action",
          operationName: "bulkSignOutUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      )),
      (this.update = Object.assign(XI, {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { id: { required: !0, type: "GadgetID" }, user: { required: !1, type: "UpdateUserInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkUpdate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.update, void 0, a));
          return await D(
            this,
            "bulkUpdateUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkUpdate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkUpdateUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkUpdateUsersInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.delete = Object.assign(eS, {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: null,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkDelete = Object.assign(
        async (i, n) =>
          await D(this, "bulkDeleteUsers", null, "user", "users", !0, { ids: { value: i, ...this.bulkDelete.variables.ids } }, n, null, !1),
        {
          type: "action",
          operationName: "bulkDeleteUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: null,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      )),
      (this.sendVerifyEmail = Object.assign(tS, {
        type: "action",
        operationName: "sendVerifyEmailUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { email: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !0,
        acceptsModelInput: !1,
      })),
      (this.bulkSendVerifyEmail = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.sendVerifyEmail, void 0, a));
          return await D(
            this,
            "bulkSendVerifyEmailUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkSendVerifyEmail.variables.inputs } },
            n,
            null,
            !0
          );
        },
        {
          type: "action",
          operationName: "bulkSendVerifyEmailUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkSendVerifyEmailUsersInput!]" } },
          hasReturnType: !0,
          acceptsModelInput: !1,
        }
      )),
      (this.verifyEmail = Object.assign(iS, {
        type: "action",
        operationName: "verifyEmailUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { code: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !0,
        acceptsModelInput: !1,
      })),
      (this.bulkVerifyEmail = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.verifyEmail, void 0, a));
          return await D(
            this,
            "bulkVerifyEmailUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkVerifyEmail.variables.inputs } },
            n,
            null,
            !0
          );
        },
        {
          type: "action",
          operationName: "bulkVerifyEmailUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkVerifyEmailUsersInput!]" } },
          hasReturnType: !0,
          acceptsModelInput: !1,
        }
      )),
      (this.sendResetPassword = Object.assign(nS, {
        type: "action",
        operationName: "sendResetPasswordUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { email: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !0,
        acceptsModelInput: !1,
      })),
      (this.bulkSendResetPassword = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.sendResetPassword, void 0, a));
          return await D(
            this,
            "bulkSendResetPasswordUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkSendResetPassword.variables.inputs } },
            n,
            null,
            !0
          );
        },
        {
          type: "action",
          operationName: "bulkSendResetPasswordUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkSendResetPasswordUsersInput!]" } },
          hasReturnType: !0,
          acceptsModelInput: !1,
        }
      )),
      (this.resetPassword = Object.assign(aS, {
        type: "action",
        operationName: "resetPasswordUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: { password: { required: !0, type: "String" }, code: { required: !0, type: "String" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !0,
        acceptsModelInput: !1,
      })),
      (this.bulkResetPassword = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.resetPassword, void 0, a));
          return await D(
            this,
            "bulkResetPasswordUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkResetPassword.variables.inputs } },
            n,
            null,
            !0
          );
        },
        {
          type: "action",
          operationName: "bulkResetPasswordUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkResetPasswordUsersInput!]" } },
          hasReturnType: !0,
          acceptsModelInput: !1,
        }
      )),
      (this.changePassword = Object.assign(rS, {
        type: "action",
        operationName: "changePasswordUser",
        namespace: null,
        modelApiIdentifier: T,
        modelSelectionField: T,
        isBulk: !1,
        defaultSelection: V,
        variables: {
          id: { required: !0, type: "GadgetID" },
          currentPassword: { required: !0, type: "String" },
          newPassword: { required: !0, type: "String" },
        },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkChangePassword = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.changePassword, void 0, a));
          return await D(
            this,
            "bulkChangePasswordUsers",
            V,
            "user",
            "users",
            !0,
            { inputs: { value: r, ...this.bulkChangePassword.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkChangePasswordUsers",
          namespace: null,
          modelApiIdentifier: T,
          modelSelectionField: "users",
          isBulk: !0,
          defaultSelection: V,
          variables: { inputs: { required: !0, type: "[BulkChangePasswordUsersInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      ));
  }
}
const ot = { __typename: !0, createdAt: !0, fullName: !0, id: !0, updatedAt: !0 },
  Se = "student";
async function lS(e, t) {
  const i = ue(this.create, void 0, e);
  return await D(
    this,
    "createStudent",
    ot,
    Se,
    Se,
    !1,
    { student: { value: i.student, required: !1, type: "CreateStudentInput" } },
    t,
    null,
    !1
  );
}
async function oS(e, t, i) {
  const n = ue(this.update, e, t);
  return await D(
    this,
    "updateStudent",
    ot,
    Se,
    Se,
    !1,
    { id: { value: e, required: !0, type: "GadgetID" }, student: { value: n.student, required: !1, type: "UpdateStudentInput" } },
    i,
    null,
    !1
  );
}
async function dS(e, t) {
  return await D(this, "deleteStudent", null, Se, Se, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
class uS {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "student", i, ot, Se, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "student",
        modelApiIdentifier: Se,
        defaultSelection: ot,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "student", i, ot, Se, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "student", modelApiIdentifier: "student", defaultSelection: ot }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "students", ot, "student", i), {
        type: "findMany",
        operationName: "students",
        modelApiIdentifier: Se,
        defaultSelection: ot,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "students", ot, Se, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "students", modelApiIdentifier: Se, defaultSelection: ot }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "students", ot, Se, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "students", modelApiIdentifier: Se, defaultSelection: ot }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "students", "id", i, ot, Se, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "students",
        modelApiIdentifier: Se,
        defaultSelection: ot,
      })),
      (this.create = Object.assign(lS, {
        type: "action",
        operationName: "createStudent",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: ot,
        variables: { student: { required: !1, type: "CreateStudentInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkCreate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.create, void 0, a));
          return await D(
            this,
            "bulkCreateStudents",
            ot,
            "student",
            "students",
            !0,
            { inputs: { value: r, ...this.bulkCreate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkCreateStudents",
          namespace: null,
          modelApiIdentifier: Se,
          modelSelectionField: "students",
          isBulk: !0,
          defaultSelection: ot,
          variables: { inputs: { required: !0, type: "[BulkCreateStudentsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.update = Object.assign(oS, {
        type: "action",
        operationName: "updateStudent",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: ot,
        variables: { id: { required: !0, type: "GadgetID" }, student: { required: !1, type: "UpdateStudentInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkUpdate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.update, void 0, a));
          return await D(
            this,
            "bulkUpdateStudents",
            ot,
            "student",
            "students",
            !0,
            { inputs: { value: r, ...this.bulkUpdate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkUpdateStudents",
          namespace: null,
          modelApiIdentifier: Se,
          modelSelectionField: "students",
          isBulk: !0,
          defaultSelection: ot,
          variables: { inputs: { required: !0, type: "[BulkUpdateStudentsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.delete = Object.assign(dS, {
        type: "action",
        operationName: "deleteStudent",
        namespace: null,
        modelApiIdentifier: Se,
        modelSelectionField: Se,
        isBulk: !1,
        defaultSelection: null,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkDelete = Object.assign(
        async (i, n) =>
          await D(
            this,
            "bulkDeleteStudents",
            null,
            "student",
            "students",
            !0,
            { ids: { value: i, ...this.bulkDelete.variables.ids } },
            n,
            null,
            !1
          ),
        {
          type: "action",
          operationName: "bulkDeleteStudents",
          namespace: null,
          modelApiIdentifier: Se,
          modelSelectionField: "students",
          isBulk: !0,
          defaultSelection: null,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      ));
  }
}
const tn = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 },
  ca = "session";
let cS = class {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "session", i, tn, ca, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "session",
        modelApiIdentifier: ca,
        defaultSelection: tn,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "session", i, tn, ca, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "session", modelApiIdentifier: "session", defaultSelection: tn }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "sessions", tn, "session", i), {
        type: "findMany",
        operationName: "sessions",
        modelApiIdentifier: ca,
        defaultSelection: tn,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "sessions", tn, ca, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "sessions", modelApiIdentifier: ca, defaultSelection: tn }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "sessions", tn, ca, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "sessions", modelApiIdentifier: ca, defaultSelection: tn }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "sessions", "id", i, tn, ca, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "sessions",
        modelApiIdentifier: ca,
        defaultSelection: tn,
      }));
  }
};
const dt = { __typename: !0, createdAt: !0, id: !0, title: !0, updatedAt: !0 },
  ke = "course";
async function pS(e, t) {
  const i = ue(this.create, void 0, e);
  return await D(
    this,
    "createCourse",
    dt,
    ke,
    ke,
    !1,
    { course: { value: i.course, required: !1, type: "CreateCourseInput" } },
    t,
    null,
    !1
  );
}
async function fS(e, t, i) {
  const n = ue(this.update, e, t);
  return await D(
    this,
    "updateCourse",
    dt,
    ke,
    ke,
    !1,
    { id: { value: e, required: !0, type: "GadgetID" }, course: { value: n.course, required: !1, type: "UpdateCourseInput" } },
    i,
    null,
    !1
  );
}
async function mS(e, t) {
  return await D(this, "deleteCourse", null, ke, ke, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
class yS {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "course", i, dt, ke, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "course",
        modelApiIdentifier: ke,
        defaultSelection: dt,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "course", i, dt, ke, n, !1);
          return r.isEmpty() ? null : r;
        },
        { type: "maybeFindOne", findByVariableName: "id", operationName: "course", modelApiIdentifier: "course", defaultSelection: dt }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "courses", dt, "course", i), {
        type: "findMany",
        operationName: "courses",
        modelApiIdentifier: ke,
        defaultSelection: dt,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "courses", dt, ke, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "courses", modelApiIdentifier: ke, defaultSelection: dt }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "courses", dt, ke, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "courses", modelApiIdentifier: ke, defaultSelection: dt }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "courses", "id", i, dt, ke, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "courses",
        modelApiIdentifier: ke,
        defaultSelection: dt,
      })),
      (this.create = Object.assign(pS, {
        type: "action",
        operationName: "createCourse",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: dt,
        variables: { course: { required: !1, type: "CreateCourseInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkCreate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.create, void 0, a));
          return await D(
            this,
            "bulkCreateCourses",
            dt,
            "course",
            "courses",
            !0,
            { inputs: { value: r, ...this.bulkCreate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkCreateCourses",
          namespace: null,
          modelApiIdentifier: ke,
          modelSelectionField: "courses",
          isBulk: !0,
          defaultSelection: dt,
          variables: { inputs: { required: !0, type: "[BulkCreateCoursesInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.update = Object.assign(fS, {
        type: "action",
        operationName: "updateCourse",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: dt,
        variables: { id: { required: !0, type: "GadgetID" }, course: { required: !1, type: "UpdateCourseInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkUpdate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.update, void 0, a));
          return await D(
            this,
            "bulkUpdateCourses",
            dt,
            "course",
            "courses",
            !0,
            { inputs: { value: r, ...this.bulkUpdate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkUpdateCourses",
          namespace: null,
          modelApiIdentifier: ke,
          modelSelectionField: "courses",
          isBulk: !0,
          defaultSelection: dt,
          variables: { inputs: { required: !0, type: "[BulkUpdateCoursesInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.delete = Object.assign(mS, {
        type: "action",
        operationName: "deleteCourse",
        namespace: null,
        modelApiIdentifier: ke,
        modelSelectionField: ke,
        isBulk: !1,
        defaultSelection: null,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkDelete = Object.assign(
        async (i, n) =>
          await D(
            this,
            "bulkDeleteCourses",
            null,
            "course",
            "courses",
            !0,
            { ids: { value: i, ...this.bulkDelete.variables.ids } },
            n,
            null,
            !1
          ),
        {
          type: "action",
          operationName: "bulkDeleteCourses",
          namespace: null,
          modelApiIdentifier: ke,
          modelSelectionField: "courses",
          isBulk: !0,
          defaultSelection: null,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      ));
  }
}
const ut = { __typename: !0, createdAt: !0, description: !0, id: !0, updatedAt: !0 },
  ve = "registration";
async function hS(e, t) {
  const i = ue(this.create, void 0, e);
  return await D(
    this,
    "createRegistration",
    ut,
    ve,
    ve,
    !1,
    { registration: { value: i.registration, required: !1, type: "CreateRegistrationInput" } },
    t,
    null,
    !1
  );
}
async function gS(e, t, i) {
  const n = ue(this.update, e, t);
  return await D(
    this,
    "updateRegistration",
    ut,
    ve,
    ve,
    !1,
    {
      id: { value: e, required: !0, type: "GadgetID" },
      registration: { value: n.registration, required: !1, type: "UpdateRegistrationInput" },
    },
    i,
    null,
    !1
  );
}
async function bS(e, t) {
  return await D(this, "deleteRegistration", null, ve, ve, !1, { id: { value: e, required: !0, type: "GadgetID" } }, t, null, !1);
}
class IS {
  constructor(t) {
    (this.connection = t),
      (this.findOne = Object.assign(async (i, n) => await ie(this, "registration", i, ut, ve, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "registration",
        modelApiIdentifier: ve,
        defaultSelection: ut,
      })),
      (this.maybeFindOne = Object.assign(
        async (i, n) => {
          const r = await ie(this, "registration", i, ut, ve, n, !1);
          return r.isEmpty() ? null : r;
        },
        {
          type: "maybeFindOne",
          findByVariableName: "id",
          operationName: "registration",
          modelApiIdentifier: "registration",
          defaultSelection: ut,
        }
      )),
      (this.findMany = Object.assign(async (i) => await H(this, "registrations", ut, "registration", i), {
        type: "findMany",
        operationName: "registrations",
        modelApiIdentifier: ve,
        defaultSelection: ut,
      })),
      (this.findFirst = Object.assign(
        async (i) => (await H(this, "registrations", ut, ve, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !0))[0],
        { type: "findFirst", operationName: "registrations", modelApiIdentifier: ve, defaultSelection: ut }
      )),
      (this.maybeFindFirst = Object.assign(
        async (i) => {
          const n = await H(this, "registrations", ut, ve, { ...i, first: 1, last: void 0, before: void 0, after: void 0 }, !1);
          return (n == null ? void 0 : n[0]) ?? null;
        },
        { type: "maybeFindFirst", operationName: "registrations", modelApiIdentifier: ve, defaultSelection: ut }
      )),
      (this.findById = Object.assign(async (i, n) => await Xt(this, "registrations", "id", i, ut, ve, n), {
        type: "findOne",
        findByVariableName: "id",
        operationName: "registrations",
        modelApiIdentifier: ve,
        defaultSelection: ut,
      })),
      (this.create = Object.assign(hS, {
        type: "action",
        operationName: "createRegistration",
        namespace: null,
        modelApiIdentifier: ve,
        modelSelectionField: ve,
        isBulk: !1,
        defaultSelection: ut,
        variables: { registration: { required: !1, type: "CreateRegistrationInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkCreate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.create, void 0, a));
          return await D(
            this,
            "bulkCreateRegistrations",
            ut,
            "registration",
            "registrations",
            !0,
            { inputs: { value: r, ...this.bulkCreate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkCreateRegistrations",
          namespace: null,
          modelApiIdentifier: ve,
          modelSelectionField: "registrations",
          isBulk: !0,
          defaultSelection: ut,
          variables: { inputs: { required: !0, type: "[BulkCreateRegistrationsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.update = Object.assign(gS, {
        type: "action",
        operationName: "updateRegistration",
        namespace: null,
        modelApiIdentifier: ve,
        modelSelectionField: ve,
        isBulk: !1,
        defaultSelection: ut,
        variables: { id: { required: !0, type: "GadgetID" }, registration: { required: !1, type: "UpdateRegistrationInput" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !0,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !0,
      })),
      (this.bulkUpdate = Object.assign(
        async (i, n) => {
          const r = i.map((a) => ue(this.update, void 0, a));
          return await D(
            this,
            "bulkUpdateRegistrations",
            ut,
            "registration",
            "registrations",
            !0,
            { inputs: { value: r, ...this.bulkUpdate.variables.inputs } },
            n,
            null,
            !1
          );
        },
        {
          type: "action",
          operationName: "bulkUpdateRegistrations",
          namespace: null,
          modelApiIdentifier: ve,
          modelSelectionField: "registrations",
          isBulk: !0,
          defaultSelection: ut,
          variables: { inputs: { required: !0, type: "[BulkUpdateRegistrationsInput!]" } },
          hasReturnType: !1,
          acceptsModelInput: !0,
        }
      )),
      (this.delete = Object.assign(bS, {
        type: "action",
        operationName: "deleteRegistration",
        namespace: null,
        modelApiIdentifier: ve,
        modelSelectionField: ve,
        isBulk: !1,
        defaultSelection: null,
        variables: { id: { required: !0, type: "GadgetID" } },
        hasAmbiguousIdentifier: !1,
        hasCreateOrUpdateEffect: !1,
        paramOnlyVariables: [],
        hasReturnType: !1,
        acceptsModelInput: !1,
      })),
      (this.bulkDelete = Object.assign(
        async (i, n) =>
          await D(
            this,
            "bulkDeleteRegistrations",
            null,
            "registration",
            "registrations",
            !0,
            { ids: { value: i, ...this.bulkDelete.variables.ids } },
            n,
            null,
            !1
          ),
        {
          type: "action",
          operationName: "bulkDeleteRegistrations",
          namespace: null,
          modelApiIdentifier: ve,
          modelSelectionField: "registrations",
          isBulk: !0,
          defaultSelection: null,
          variables: { ids: { required: !0, type: "[GadgetID!]" } },
          hasReturnType: !1,
          acceptsModelInput: !1,
        }
      ));
  }
}
const zu = { __typename: !0, createdAt: !0, id: !0, roles: { key: !0, name: !0 }, shopifySID: !0, updatedAt: !0 };
let SS = class {
  constructor(t) {
    (this.connection = t),
      (this.get = Object.assign(async (i) => await ie(this, "currentSession", void 0, zu, "session", i), {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: zu,
      }));
  }
};
var $p;
const Hu = "production",
  kS = "development",
  vS = Symbol.for("gadget/modelRelationships"),
  NS = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
let AS = class {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://zxcv-manythrough-example--development.gadget.app/",
      production: "https://zxcv-manythrough-example.gadget.app/",
    }),
      (this.applicationId = "114722"),
      (this[$p] = {
        user: {},
        student: {
          courses: { type: "HasManyThrough", model: "course", through: "registration" },
          registrations: { model: "registration", type: "HasMany" },
        },
        session: { user: { type: "BelongsTo", model: "user" } },
        course: {
          students: { type: "HasManyThrough", model: "student", through: "registration" },
          registrations: { model: "registration", type: "HasMany" },
        },
        registration: { student: { type: "BelongsTo", model: "student" }, course: { type: "BelongsTo", model: "course" } },
      }),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? NS() ?? kS).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://zxcv-manythrough-example${this.environment == Hu ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Hu) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.user = new sS(this.connection)),
      (this.student = new uS(this.connection)),
      (this.session = new cS(this.connection)),
      (this.course = new yS(this.connection)),
      (this.registration = new IS(this.connection)),
      (this.currentSession = new SS(this.connection)),
      (this.internal = {
        user: new N("user", this.connection, { pluralApiIdentifier: "users", hasAmbiguousIdentifier: !1 }),
        student: new N("student", this.connection, { pluralApiIdentifier: "students", hasAmbiguousIdentifier: !1 }),
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        course: new N("course", this.connection, { pluralApiIdentifier: "courses", hasAmbiguousIdentifier: !1 }),
        registration: new N("registration", this.connection, { pluralApiIdentifier: "registrations", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
};
$p = vS;
const Ws = (e, t, i, n) => {
  const r = class {
    constructor(a) {
      this.connection = a;
    }
  };
  for (const a of n)
    switch (a.type) {
      case "maybeFindOne":
      case "findOne": {
        "functionName" in a
          ? (r.prototype[a.functionName] = Object.assign(async function (s, l) {
              return await Xt(this, a.operationName, a.findByField, s, i, e, l);
            }, a))
          : (r.prototype[a.type] = Object.assign(async function (s, l) {
              const o = await ie(this, e, s, i, e, l, a.type != "maybeFindOne");
              return o.isEmpty() ? null : o;
            }, a));
        break;
      }
      case "findMany": {
        r.prototype.findMany = Object.assign(async function (s) {
          return await H(this, t, i, e, s);
        }, a);
        break;
      }
      case "maybeFindFirst":
      case "findFirst": {
        r.prototype[a.type] = Object.assign(async function (s) {
          const l = await H(this, t, i, e, { ...s, first: 1, last: void 0, before: void 0, after: void 0 }, a.type != "maybeFindFirst");
          return (l == null ? void 0 : l[0]) ?? null;
        }, a);
        break;
      }
      case "get": {
        r.prototype.get = Object.assign(async function (s) {
          return await ie(this, a.operationName, void 0, i, e, s);
        }, a);
        break;
      }
      case "action": {
        if (a.isBulk) {
          const s = !!a.variables.ids;
          r.prototype[a.functionName] = Object.assign(async function (l, o) {
            let d;
            return (
              s
                ? (d = { ids: { ...a.variables.ids, value: l } })
                : (d = { inputs: { ...a.variables.inputs, value: l.map((u) => Gp(this[a.singleActionFunctionName], void 0, u)) } }),
              await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !0, d, o, a.namespace, a.hasReturnType)
            );
          }, a);
        } else {
          const s = !!a.variables.id,
            l = Object.keys(a.variables).filter((o) => o != "id").length > 0;
          r.prototype[a.functionName] = Object.assign(async function (...o) {
            const [d, u] = FS(a, s, l, o);
            return await D(this, a.operationName, a.isDeleter ? null : i, e, a.modelSelectionField, !1, d, u, a.namespace, a.hasReturnType);
          }, a);
        }
        break;
      }
    }
  return r;
};
function Gp(e, t, i = {}) {
  var a;
  if (
    e.hasAmbiguousIdentifier &&
    Object.keys(i).some((s) => {
      var l;
      return !((l = e.paramOnlyVariables) != null && l.includes(s)) && s !== e.modelApiIdentifier;
    })
  )
    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${e.modelApiIdentifier}: { ... } })?`);
  let n;
  const r = Object.entries(e.variables).find(([s, l]) => s === "id" && l.type === "GadgetID");
  if (e.acceptsModelInput || e.hasCreateOrUpdateEffect)
    if (
      (e.modelApiIdentifier in i && typeof i[e.modelApiIdentifier] == "object" && i[e.modelApiIdentifier] !== null) ||
      !e.variables[e.modelApiIdentifier]
    )
      n = i;
    else {
      n = { [e.modelApiIdentifier]: {} };
      for (const [s, l] of Object.entries(i))
        (a = e.paramOnlyVariables) != null && a.includes(s) ? (n[s] = l) : r && s === r[0] ? (n.id = l) : (n[e.modelApiIdentifier][s] = l);
    }
  else n = i;
  return n.id ?? (n.id = t), n;
}
function FS(e, t, i, n) {
  let r, a;
  t && (r = n.shift()), i && (a = n.shift());
  const s = n.shift();
  let l = a;
  (r || a) && (l = Gp(e, r, a));
  const o = {};
  for (const [d, u] of Object.entries(e.variables)) o[d] = { value: d == "id" ? r : l == null ? void 0 : l[d], ...u };
  return [o, s];
}
const Nn = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  Tt = "quiz",
  nr = "quizzes",
  wS = Ws(Tt, nr, Nn, [
    { type: "findOne", operationName: Tt, modelApiIdentifier: Tt, findByVariableName: "id", defaultSelection: Nn },
    { type: "maybeFindOne", operationName: Tt, modelApiIdentifier: Tt, findByVariableName: "id", defaultSelection: Nn },
    { type: "findMany", operationName: nr, modelApiIdentifier: Tt, defaultSelection: Nn },
    { type: "findFirst", operationName: nr, modelApiIdentifier: Tt, defaultSelection: Nn },
    { type: "maybeFindFirst", operationName: nr, modelApiIdentifier: Tt, defaultSelection: Nn },
    {
      type: "findOne",
      operationName: nr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Tt,
      defaultSelection: Nn,
    },
    {
      type: "action",
      operationName: "createQuiz",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Tt,
      modelSelectionField: Tt,
      isBulk: !1,
      isDeleter: !1,
      variables: { quiz: { required: !1, type: "CreateQuizInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Nn,
    },
    {
      type: "action",
      operationName: "bulkCreateQuizzes",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Tt,
      modelSelectionField: nr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateQuizzesInput!]" } },
      defaultSelection: Nn,
    },
    {
      type: "action",
      operationName: "updateQuiz",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Tt,
      modelSelectionField: Tt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, quiz: { required: !1, type: "UpdateQuizInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Nn,
    },
    {
      type: "action",
      operationName: "bulkUpdateQuizzes",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Tt,
      modelSelectionField: nr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateQuizzesInput!]" } },
      defaultSelection: Nn,
    },
    {
      type: "action",
      operationName: "deleteQuiz",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Tt,
      modelSelectionField: Tt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteQuizzes",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Tt,
      modelSelectionField: nr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  vr = { __typename: !0, id: !0, createdAt: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Oa = "session",
  bs = "sessions",
  MS = Ws(Oa, bs, vr, [
    { type: "findOne", operationName: Oa, modelApiIdentifier: Oa, findByVariableName: "id", defaultSelection: vr },
    { type: "maybeFindOne", operationName: Oa, modelApiIdentifier: Oa, findByVariableName: "id", defaultSelection: vr },
    { type: "findMany", operationName: bs, modelApiIdentifier: Oa, defaultSelection: vr },
    { type: "findFirst", operationName: bs, modelApiIdentifier: Oa, defaultSelection: vr },
    { type: "maybeFindFirst", operationName: bs, modelApiIdentifier: Oa, defaultSelection: vr },
    {
      type: "findOne",
      operationName: bs,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Oa,
      defaultSelection: vr,
    },
  ]),
  An = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  Rt = "question",
  ar = "questions",
  OS = Ws(Rt, ar, An, [
    { type: "findOne", operationName: Rt, modelApiIdentifier: Rt, findByVariableName: "id", defaultSelection: An },
    { type: "maybeFindOne", operationName: Rt, modelApiIdentifier: Rt, findByVariableName: "id", defaultSelection: An },
    { type: "findMany", operationName: ar, modelApiIdentifier: Rt, defaultSelection: An },
    { type: "findFirst", operationName: ar, modelApiIdentifier: Rt, defaultSelection: An },
    { type: "maybeFindFirst", operationName: ar, modelApiIdentifier: Rt, defaultSelection: An },
    {
      type: "findOne",
      operationName: ar,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Rt,
      defaultSelection: An,
    },
    {
      type: "action",
      operationName: "createQuestion",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Rt,
      modelSelectionField: Rt,
      isBulk: !1,
      isDeleter: !1,
      variables: { question: { required: !1, type: "CreateQuestionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: An,
    },
    {
      type: "action",
      operationName: "bulkCreateQuestions",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Rt,
      modelSelectionField: ar,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateQuestionsInput!]" } },
      defaultSelection: An,
    },
    {
      type: "action",
      operationName: "updateQuestion",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Rt,
      modelSelectionField: Rt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, question: { required: !1, type: "UpdateQuestionInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: An,
    },
    {
      type: "action",
      operationName: "bulkUpdateQuestions",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Rt,
      modelSelectionField: ar,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateQuestionsInput!]" } },
      defaultSelection: An,
    },
    {
      type: "action",
      operationName: "deleteQuestion",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Rt,
      modelSelectionField: Rt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteQuestions",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Rt,
      modelSelectionField: ar,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Fn = { __typename: !0, id: !0, createdAt: !0, text: !0, updatedAt: !0 },
  Bt = "answer",
  rr = "answers",
  TS = Ws(Bt, rr, Fn, [
    { type: "findOne", operationName: Bt, modelApiIdentifier: Bt, findByVariableName: "id", defaultSelection: Fn },
    { type: "maybeFindOne", operationName: Bt, modelApiIdentifier: Bt, findByVariableName: "id", defaultSelection: Fn },
    { type: "findMany", operationName: rr, modelApiIdentifier: Bt, defaultSelection: Fn },
    { type: "findFirst", operationName: rr, modelApiIdentifier: Bt, defaultSelection: Fn },
    { type: "maybeFindFirst", operationName: rr, modelApiIdentifier: Bt, defaultSelection: Fn },
    {
      type: "findOne",
      operationName: rr,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier: Bt,
      defaultSelection: Fn,
    },
    {
      type: "action",
      operationName: "createAnswer",
      functionName: "create",
      namespace: null,
      modelApiIdentifier: Bt,
      modelSelectionField: Bt,
      isBulk: !1,
      isDeleter: !1,
      variables: { answer: { required: !1, type: "CreateAnswerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Fn,
    },
    {
      type: "action",
      operationName: "bulkCreateAnswers",
      functionName: "bulkCreate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "create",
      modelApiIdentifier: Bt,
      modelSelectionField: rr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkCreateAnswersInput!]" } },
      defaultSelection: Fn,
    },
    {
      type: "action",
      operationName: "updateAnswer",
      functionName: "update",
      namespace: null,
      modelApiIdentifier: Bt,
      modelSelectionField: Bt,
      isBulk: !1,
      isDeleter: !1,
      variables: { id: { required: !0, type: "GadgetID" }, answer: { required: !1, type: "UpdateAnswerInput" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !0,
      hasCreateOrUpdateEffect: !0,
      defaultSelection: Fn,
    },
    {
      type: "action",
      operationName: "bulkUpdateAnswers",
      functionName: "bulkUpdate",
      isBulk: !0,
      isDeleter: !1,
      hasReturnType: !1,
      acceptsModelInput: !0,
      singleActionFunctionName: "update",
      modelApiIdentifier: Bt,
      modelSelectionField: rr,
      namespace: null,
      variables: { inputs: { required: !0, type: "[BulkUpdateAnswersInput!]" } },
      defaultSelection: Fn,
    },
    {
      type: "action",
      operationName: "deleteAnswer",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier: Bt,
      modelSelectionField: Bt,
      isBulk: !1,
      isDeleter: !0,
      variables: { id: { required: !0, type: "GadgetID" } },
      hasAmbiguousIdentifier: !1,
      paramOnlyVariables: [],
      hasReturnType: !1,
      acceptsModelInput: !1,
      hasCreateOrUpdateEffect: !1,
      defaultSelection: null,
    },
    {
      type: "action",
      operationName: "bulkDeleteAnswers",
      functionName: "bulkDelete",
      isBulk: !0,
      isDeleter: !0,
      hasReturnType: !1,
      acceptsModelInput: !1,
      singleActionFunctionName: "delete",
      modelApiIdentifier: Bt,
      modelSelectionField: rr,
      namespace: null,
      variables: { ids: { required: !0, type: "[GadgetID!]" } },
      defaultSelection: null,
    },
  ]),
  Qu = { __typename: !0, id: !0, createdAt: !0, roles: { key: !0, name: !0 }, updatedAt: !0 },
  Ku = "session",
  RS = "sessions",
  BS = Ws(Ku, RS, Qu, [{ type: "get", operationName: "currentSession", defaultSelection: Qu, modelApiIdentifier: Ku }]);
var jp;
const Ju = "production",
  DS = "development",
  CS = Symbol.for("gadget/modelRelationships"),
  US = () => {
    try {
      return {}.GADGET_ENV;
    } catch {
      return;
    }
  };
class qS {
  constructor(t) {
    var r;
    (this.apiRoots = {
      development: "https://zxcv-simple-relationship--development.gadget.app/",
      production: "https://zxcv-simple-relationship.gadget.app/",
    }),
      (this.applicationId = "79412"),
      (this[jp] = {
        quiz: { question: { type: "HasOne", model: "question" } },
        session: {},
        question: { quiz: { type: "BelongsTo", model: "quiz" }, answer: { type: "HasOne", model: "answer" } },
        answer: { question: { type: "BelongsTo", model: "question" } },
      }),
      (this.transaction = async (a) => await this.connection.transaction(a)),
      (this.getDirectUploadToken = async () =>
        (
          await this.query(
            "query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }",
            { nonce: Math.random().toString(36).slice(2, 7) },
            { requestPolicy: "network-only" }
          )
        ).gadgetMeta.directUploadToken),
      (this.environment = ((t == null ? void 0 : t.environment) ?? US() ?? DS).toLocaleLowerCase());
    let i;
    this.apiRoots[this.environment]
      ? (i = this.apiRoots[this.environment])
      : (i = `https://zxcv-simple-relationship${this.environment == Ju ? "" : `--${this.environment}`}.gadget.app`);
    const n = { ...(t == null ? void 0 : t.exchanges) };
    if (this.environment !== Ju) {
      const a =
        ({ forward: s }) =>
        (l) => {
          const o = s(l);
          return sn(
            o,
            ri((d) => {
              try {
                if (typeof window < "u" && typeof CustomEvent == "function") {
                  const u = new CustomEvent("gadget:devharness:graphqlresult", { detail: d });
                  window.dispatchEvent(u);
                }
              } catch (u) {
                console.warn("[gadget] error dispatching gadget dev harness event", u);
              }
              return d;
            })
          );
        };
      n.beforeAll = [a, ...(n.beforeAll ?? [])];
    }
    if (
      ((this.connection = new Rn({
        endpoint: new URL("api/graphql", i).toString(),
        applicationId: this.applicationId,
        authenticationMode:
          (t == null ? void 0 : t.authenticationMode) ?? (typeof window > "u" ? { anonymous: !0 } : { browserSession: !0 }),
        ...t,
        exchanges: n,
        environment: this.environment,
      })),
      typeof window < "u" &&
        this.connection.authenticationMode == J.APIKey &&
        !((r = t == null ? void 0 : t.authenticationMode) != null && r.dangerouslyAllowBrowserApiKey))
    )
      throw new Error(
        "GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode."
      );
    (this.quiz = new wS(this.connection)),
      (this.session = new MS(this.connection)),
      (this.question = new OS(this.connection)),
      (this.answer = new TS(this.connection)),
      (this.currentSession = new BS(this.connection)),
      (this.internal = {
        quiz: new N("quiz", this.connection, { pluralApiIdentifier: "quizzes", hasAmbiguousIdentifier: !1 }),
        session: new N("session", this.connection, { pluralApiIdentifier: "sessions", hasAmbiguousIdentifier: !1 }),
        question: new N("question", this.connection, { pluralApiIdentifier: "questions", hasAmbiguousIdentifier: !1 }),
        answer: new N("answer", this.connection, { pluralApiIdentifier: "answers", hasAmbiguousIdentifier: !1 }),
      });
  }
  async query(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.query(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async mutate(t, i, n) {
    const { data: r, error: a } = await this.connection.currentClient.mutation(t, i, n).toPromise();
    if (a) throw a;
    return r;
  }
  async fetch(t, i = {}) {
    return await this.connection.fetch(t, i);
  }
  async enqueue(t, i, n) {
    tt(t, ".enqueue must be passed an action as the first argument but was passed undefined");
    let r, a;
    return (
      typeof n < "u"
        ? ((r = i), (a = n))
        : !t.variables || Object.keys(t.variables).length == 0
        ? ((r = {}), (a = i))
        : (typeof i == "string" ? (r = { id: i }) : (r = i), (a = {})),
      await ba(this.connection, t, r, a)
    );
  }
  handle(t, i) {
    return new Ki(this.connection, t, i);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
jp = CS;
new TI({ environment: "Development" });
new Wg({ environment: "Development" });
new Xg({ environment: "Development" });
new Ug({ environment: "Development" });
new KI({ environment: "Development" });
new qS({ environment: "Development" });
new Pp({ environment: "Development" });
new AS({ environment: "Development" });
new Og({ environment: "Development" });
const Dk = new Cp({
  environment: "Development",
  authenticationMode:
    "VITE_JS_CLIENTS_TEST_API_KEY" in import.meta
      ? {
          apiKey: { BASE_URL: "./", MODE: "production", DEV: !1, PROD: !0, SSR: !1, STORYBOOK: "true" }.VITE_JS_CLIENTS_TEST_API_KEY,
          dangerouslyAllowBrowserApiKey: !0,
        }
      : void 0,
});
export {
  GS as $,
  by as A,
  A as B,
  ny as C,
  yk as D,
  ma as E,
  jS as F,
  Bl as G,
  ok as H,
  uk as I,
  $ as J,
  ik as K,
  bg as L,
  lu as M,
  so as N,
  ng as O,
  Zm as P,
  Gc as Q,
  dk as R,
  tt as S,
  Xh as T,
  HS as U,
  gk as V,
  ZS as W,
  Gs as X,
  iy as Y,
  LS as Z,
  nk as _,
  Iy as a,
  ak as a0,
  rk as a1,
  XS as a2,
  eg as a3,
  tk as a4,
  Zh as a5,
  hk as a6,
  sg as a7,
  vl as a8,
  rg as a9,
  fs as aa,
  nf as ab,
  gg as ac,
  YS as ad,
  QS as ae,
  JS as af,
  lk as ag,
  ck as ah,
  pk as ai,
  mk as aj,
  fk as ak,
  rm as al,
  ed as am,
  ek as an,
  WS as ao,
  Us as b,
  sk as c,
  vc as d,
  Tn as e,
  Ba as f,
  rs as g,
  id as h,
  Cl as i,
  gy as j,
  Cs as k,
  nm as l,
  Jo as m,
  Jc as n,
  td as o,
  Ol as p,
  Fr as q,
  xs as r,
  Ll as s,
  Dk as t,
  zS as u,
  KS as v,
  Ms as w,
  ro as x,
  rd as y,
  Dc as z,
};
