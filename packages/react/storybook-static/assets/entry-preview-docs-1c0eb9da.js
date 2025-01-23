import {
  S as $n,
  e as Gn,
  T as Gr,
  m as Hn,
  n as Qn,
  c as Un,
  l as Ur,
  f as Wn,
  p as Yn,
  o as ht,
  j as jr,
  u as qn,
  k as qr,
  h as te,
  b as vi,
  d as xi,
  g as zn,
} from "./_getPrototype-374d77d3.js";
import { d as Jn } from "./index-356e4a49.js";
import { a as Kn, P as Wr } from "./index-baeb160b.js";
import { r as Ge, c as at, g as fr, R as it } from "./index-c6dae603.js";
const Xn = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
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
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
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
  "slot",
  "small",
  "source",
  "span",
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
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];
var Zn = Xn;
const es = fr(Zn);
var bi = {},
  Si = {};
(function (e) {
  (function t(r) {
    var i, s, a, u, f, d;
    function g(v) {
      var w = {},
        A,
        P;
      for (A in v) v.hasOwnProperty(A) && ((P = v[A]), typeof P == "object" && P !== null ? (w[A] = g(P)) : (w[A] = P));
      return w;
    }
    function m(v, w) {
      var A, P, B, F;
      for (P = v.length, B = 0; P; ) (A = P >>> 1), (F = B + A), w(v[F]) ? (P = A) : ((B = F + 1), (P -= A + 1));
      return B;
    }
    (i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (a = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (u = {}),
      (f = {}),
      (d = {}),
      (s = { Break: u, Skip: f, Remove: d });
    function x(v, w) {
      (this.parent = v), (this.key = w);
    }
    (x.prototype.replace = function (w) {
      this.parent[this.key] = w;
    }),
      (x.prototype.remove = function () {
        return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
      });
    function C(v, w, A, P) {
      (this.node = v), (this.path = w), (this.wrap = A), (this.ref = P);
    }
    function b() {}
    (b.prototype.path = function () {
      var w, A, P, B, F, W;
      function q(V, Y) {
        if (Array.isArray(Y)) for (P = 0, B = Y.length; P < B; ++P) V.push(Y[P]);
        else V.push(Y);
      }
      if (!this.__current.path) return null;
      for (F = [], w = 2, A = this.__leavelist.length; w < A; ++w) (W = this.__leavelist[w]), q(F, W.path);
      return q(F, this.__current.path), F;
    }),
      (b.prototype.type = function () {
        var v = this.current();
        return v.type || this.__current.wrap;
      }),
      (b.prototype.parents = function () {
        var w, A, P;
        for (P = [], w = 1, A = this.__leavelist.length; w < A; ++w) P.push(this.__leavelist[w].node);
        return P;
      }),
      (b.prototype.current = function () {
        return this.__current.node;
      }),
      (b.prototype.__execute = function (w, A) {
        var P, B;
        return (
          (B = void 0),
          (P = this.__current),
          (this.__current = A),
          (this.__state = null),
          w && (B = w.call(this, A.node, this.__leavelist[this.__leavelist.length - 1].node)),
          (this.__current = P),
          B
        );
      }),
      (b.prototype.notify = function (w) {
        this.__state = w;
      }),
      (b.prototype.skip = function () {
        this.notify(f);
      }),
      (b.prototype.break = function () {
        this.notify(u);
      }),
      (b.prototype.remove = function () {
        this.notify(d);
      }),
      (b.prototype.__initialize = function (v, w) {
        (this.visitor = w),
          (this.root = v),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          w.fallback === "iteration" ? (this.__fallback = Object.keys) : typeof w.fallback == "function" && (this.__fallback = w.fallback),
          (this.__keys = a),
          w.keys && (this.__keys = Object.assign(Object.create(this.__keys), w.keys));
      });
    function S(v) {
      return v == null ? !1 : typeof v == "object" && typeof v.type == "string";
    }
    function y(v, w) {
      return (v === i.ObjectExpression || v === i.ObjectPattern) && w === "properties";
    }
    function I(v, w) {
      for (var A = v.length - 1; A >= 0; --A) if (v[A].node === w) return !0;
      return !1;
    }
    (b.prototype.traverse = function (w, A) {
      var P, B, F, W, q, V, Y, ie, ue, re, K, ve;
      for (
        this.__initialize(w, A),
          ve = {},
          P = this.__worklist,
          B = this.__leavelist,
          P.push(new C(w, null, null, null)),
          B.push(new C(null, null, null, null));
        P.length;

      ) {
        if (((F = P.pop()), F === ve)) {
          if (((F = B.pop()), (V = this.__execute(A.leave, F)), this.__state === u || V === u)) return;
          continue;
        }
        if (F.node) {
          if (((V = this.__execute(A.enter, F)), this.__state === u || V === u)) return;
          if ((P.push(ve), B.push(F), this.__state === f || V === f)) continue;
          if (((W = F.node), (q = W.type || F.wrap), (re = this.__keys[q]), !re))
            if (this.__fallback) re = this.__fallback(W);
            else throw new Error("Unknown node type " + q + ".");
          for (ie = re.length; (ie -= 1) >= 0; )
            if (((Y = re[ie]), (K = W[Y]), !!K)) {
              if (Array.isArray(K)) {
                for (ue = K.length; (ue -= 1) >= 0; )
                  if (K[ue] && !I(B, K[ue])) {
                    if (y(q, re[ie])) F = new C(K[ue], [Y, ue], "Property", null);
                    else if (S(K[ue])) F = new C(K[ue], [Y, ue], null, null);
                    else continue;
                    P.push(F);
                  }
              } else if (S(K)) {
                if (I(B, K)) continue;
                P.push(new C(K, Y, null, null));
              }
            }
        }
      }
    }),
      (b.prototype.replace = function (w, A) {
        var P, B, F, W, q, V, Y, ie, ue, re, K, ve, Pe;
        function $e(M) {
          var De, yt, Re, ee;
          if (M.ref.remove()) {
            for (yt = M.ref.key, ee = M.ref.parent, De = P.length; De--; )
              if (((Re = P[De]), Re.ref && Re.ref.parent === ee)) {
                if (Re.ref.key < yt) break;
                --Re.ref.key;
              }
          }
        }
        for (
          this.__initialize(w, A),
            K = {},
            P = this.__worklist,
            B = this.__leavelist,
            ve = { root: w },
            V = new C(w, null, null, new x(ve, "root")),
            P.push(V),
            B.push(V);
          P.length;

        ) {
          if (((V = P.pop()), V === K)) {
            if (
              ((V = B.pop()),
              (q = this.__execute(A.leave, V)),
              q !== void 0 && q !== u && q !== f && q !== d && V.ref.replace(q),
              (this.__state === d || q === d) && $e(V),
              this.__state === u || q === u)
            )
              return ve.root;
            continue;
          }
          if (
            ((q = this.__execute(A.enter, V)),
            q !== void 0 && q !== u && q !== f && q !== d && (V.ref.replace(q), (V.node = q)),
            (this.__state === d || q === d) && ($e(V), (V.node = null)),
            this.__state === u || q === u)
          )
            return ve.root;
          if (((F = V.node), !!F && (P.push(K), B.push(V), !(this.__state === f || q === f)))) {
            if (((W = F.type || V.wrap), (ue = this.__keys[W]), !ue))
              if (this.__fallback) ue = this.__fallback(F);
              else throw new Error("Unknown node type " + W + ".");
            for (Y = ue.length; (Y -= 1) >= 0; )
              if (((Pe = ue[Y]), (re = F[Pe]), !!re))
                if (Array.isArray(re)) {
                  for (ie = re.length; (ie -= 1) >= 0; )
                    if (re[ie]) {
                      if (y(W, ue[Y])) V = new C(re[ie], [Pe, ie], "Property", new x(re, ie));
                      else if (S(re[ie])) V = new C(re[ie], [Pe, ie], null, new x(re, ie));
                      else continue;
                      P.push(V);
                    }
                } else S(re) && P.push(new C(re, Pe, null, new x(F, Pe)));
          }
        }
        return ve.root;
      });
    function O(v, w) {
      var A = new b();
      return A.traverse(v, w);
    }
    function N(v, w) {
      var A = new b();
      return A.replace(v, w);
    }
    function j(v, w) {
      var A;
      return (
        (A = m(w, function (B) {
          return B.range[0] > v.range[0];
        })),
        (v.extendedRange = [v.range[0], v.range[1]]),
        A !== w.length && (v.extendedRange[1] = w[A].range[0]),
        (A -= 1),
        A >= 0 && (v.extendedRange[0] = w[A].range[1]),
        v
      );
    }
    function _(v, w, A) {
      var P = [],
        B,
        F,
        W,
        q;
      if (!v.range) throw new Error("attachComments needs range information");
      if (!A.length) {
        if (w.length) {
          for (W = 0, F = w.length; W < F; W += 1) (B = g(w[W])), (B.extendedRange = [0, v.range[0]]), P.push(B);
          v.leadingComments = P;
        }
        return v;
      }
      for (W = 0, F = w.length; W < F; W += 1) P.push(j(g(w[W]), A));
      return (
        (q = 0),
        O(v, {
          enter: function (V) {
            for (var Y; q < P.length && ((Y = P[q]), !(Y.extendedRange[1] > V.range[0])); )
              Y.extendedRange[1] === V.range[0]
                ? (V.leadingComments || (V.leadingComments = []), V.leadingComments.push(Y), P.splice(q, 1))
                : (q += 1);
            if (q === P.length) return s.Break;
            if (P[q].extendedRange[0] > V.range[1]) return s.Skip;
          },
        }),
        (q = 0),
        O(v, {
          leave: function (V) {
            for (var Y; q < P.length && ((Y = P[q]), !(V.range[1] < Y.extendedRange[0])); )
              V.range[1] === Y.extendedRange[0]
                ? (V.trailingComments || (V.trailingComments = []), V.trailingComments.push(Y), P.splice(q, 1))
                : (q += 1);
            if (q === P.length) return s.Break;
            if (P[q].extendedRange[0] > V.range[1]) return s.Skip;
          },
        }),
        v
      );
    }
    return (
      (r.Syntax = i),
      (r.traverse = O),
      (r.replace = N),
      (r.attachComments = _),
      (r.VisitorKeys = a),
      (r.VisitorOption = s),
      (r.Controller = b),
      (r.cloneEnvironment = function () {
        return t({});
      }),
      r
    );
  })(e);
})(Si);
var et = {},
  Ht = {},
  St = {},
  _t = {},
  zr;
function ts() {
  if (zr) return _t;
  zr = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return (
    (_t.encode = function (t) {
      if (0 <= t && t < e.length) return e[t];
      throw new TypeError("Must be between 0 and 63: " + t);
    }),
    (_t.decode = function (t) {
      var r = 65,
        i = 90,
        s = 97,
        a = 122,
        u = 48,
        f = 57,
        d = 43,
        g = 47,
        m = 26,
        x = 52;
      return r <= t && t <= i ? t - r : s <= t && t <= a ? t - s + m : u <= t && t <= f ? t - u + x : t == d ? 62 : t == g ? 63 : -1;
    }),
    _t
  );
}
var $r;
function _i() {
  if ($r) return St;
  $r = 1;
  var e = ts(),
    t = 5,
    r = 1 << t,
    i = r - 1,
    s = r;
  function a(f) {
    return f < 0 ? (-f << 1) + 1 : (f << 1) + 0;
  }
  function u(f) {
    var d = (f & 1) === 1,
      g = f >> 1;
    return d ? -g : g;
  }
  return (
    (St.encode = function (d) {
      var g = "",
        m,
        x = a(d);
      do (m = x & i), (x >>>= t), x > 0 && (m |= s), (g += e.encode(m));
      while (x > 0);
      return g;
    }),
    (St.decode = function (d, g, m) {
      var x = d.length,
        C = 0,
        b = 0,
        S,
        y;
      do {
        if (g >= x) throw new Error("Expected more digits in base 64 VLQ value.");
        if (((y = e.decode(d.charCodeAt(g++))), y === -1)) throw new Error("Invalid base64 digit: " + d.charAt(g - 1));
        (S = !!(y & s)), (y &= i), (C = C + (y << b)), (b += t);
      } while (S);
      (m.value = u(C)), (m.rest = g);
    }),
    St
  );
}
var Qt = {},
  Hr;
function ft() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        function t(_, v, w) {
          if (v in _) return _[v];
          if (arguments.length === 3) return w;
          throw new Error('"' + v + '" is a required argument.');
        }
        e.getArg = t;
        var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          i = /^data:.+\,.+$/;
        function s(_) {
          var v = _.match(r);
          return v ? { scheme: v[1], auth: v[2], host: v[3], port: v[4], path: v[5] } : null;
        }
        e.urlParse = s;
        function a(_) {
          var v = "";
          return (
            _.scheme && (v += _.scheme + ":"),
            (v += "//"),
            _.auth && (v += _.auth + "@"),
            _.host && (v += _.host),
            _.port && (v += ":" + _.port),
            _.path && (v += _.path),
            v
          );
        }
        e.urlGenerate = a;
        function u(_) {
          var v = _,
            w = s(_);
          if (w) {
            if (!w.path) return _;
            v = w.path;
          }
          for (var A = e.isAbsolute(v), P = v.split(/\/+/), B, F = 0, W = P.length - 1; W >= 0; W--)
            (B = P[W]),
              B === "." ? P.splice(W, 1) : B === ".." ? F++ : F > 0 && (B === "" ? (P.splice(W + 1, F), (F = 0)) : (P.splice(W, 2), F--));
          return (v = P.join("/")), v === "" && (v = A ? "/" : "."), w ? ((w.path = v), a(w)) : v;
        }
        e.normalize = u;
        function f(_, v) {
          _ === "" && (_ = "."), v === "" && (v = ".");
          var w = s(v),
            A = s(_);
          if ((A && (_ = A.path || "/"), w && !w.scheme)) return A && (w.scheme = A.scheme), a(w);
          if (w || v.match(i)) return v;
          if (A && !A.host && !A.path) return (A.host = v), a(A);
          var P = v.charAt(0) === "/" ? v : u(_.replace(/\/+$/, "") + "/" + v);
          return A ? ((A.path = P), a(A)) : P;
        }
        (e.join = f),
          (e.isAbsolute = function (_) {
            return _.charAt(0) === "/" || r.test(_);
          });
        function d(_, v) {
          _ === "" && (_ = "."), (_ = _.replace(/\/$/, ""));
          for (var w = 0; v.indexOf(_ + "/") !== 0; ) {
            var A = _.lastIndexOf("/");
            if (A < 0 || ((_ = _.slice(0, A)), _.match(/^([^\/]+:\/)?\/*$/))) return v;
            ++w;
          }
          return Array(w + 1).join("../") + v.substr(_.length + 1);
        }
        e.relative = d;
        var g = (function () {
          var _ = Object.create(null);
          return !("__proto__" in _);
        })();
        function m(_) {
          return _;
        }
        function x(_) {
          return b(_) ? "$" + _ : _;
        }
        e.toSetString = g ? m : x;
        function C(_) {
          return b(_) ? _.slice(1) : _;
        }
        e.fromSetString = g ? m : C;
        function b(_) {
          if (!_) return !1;
          var v = _.length;
          if (
            v < 9 ||
            _.charCodeAt(v - 1) !== 95 ||
            _.charCodeAt(v - 2) !== 95 ||
            _.charCodeAt(v - 3) !== 111 ||
            _.charCodeAt(v - 4) !== 116 ||
            _.charCodeAt(v - 5) !== 111 ||
            _.charCodeAt(v - 6) !== 114 ||
            _.charCodeAt(v - 7) !== 112 ||
            _.charCodeAt(v - 8) !== 95 ||
            _.charCodeAt(v - 9) !== 95
          )
            return !1;
          for (var w = v - 10; w >= 0; w--) if (_.charCodeAt(w) !== 36) return !1;
          return !0;
        }
        function S(_, v, w) {
          var A = I(_.source, v.source);
          return A !== 0 ||
            ((A = _.originalLine - v.originalLine), A !== 0) ||
            ((A = _.originalColumn - v.originalColumn), A !== 0 || w) ||
            ((A = _.generatedColumn - v.generatedColumn), A !== 0) ||
            ((A = _.generatedLine - v.generatedLine), A !== 0)
            ? A
            : I(_.name, v.name);
        }
        e.compareByOriginalPositions = S;
        function y(_, v, w) {
          var A = _.generatedLine - v.generatedLine;
          return A !== 0 ||
            ((A = _.generatedColumn - v.generatedColumn), A !== 0 || w) ||
            ((A = I(_.source, v.source)), A !== 0) ||
            ((A = _.originalLine - v.originalLine), A !== 0) ||
            ((A = _.originalColumn - v.originalColumn), A !== 0)
            ? A
            : I(_.name, v.name);
        }
        e.compareByGeneratedPositionsDeflated = y;
        function I(_, v) {
          return _ === v ? 0 : _ === null ? 1 : v === null ? -1 : _ > v ? 1 : -1;
        }
        function O(_, v) {
          var w = _.generatedLine - v.generatedLine;
          return w !== 0 ||
            ((w = _.generatedColumn - v.generatedColumn), w !== 0) ||
            ((w = I(_.source, v.source)), w !== 0) ||
            ((w = _.originalLine - v.originalLine), w !== 0) ||
            ((w = _.originalColumn - v.originalColumn), w !== 0)
            ? w
            : I(_.name, v.name);
        }
        e.compareByGeneratedPositionsInflated = O;
        function N(_) {
          return JSON.parse(_.replace(/^\)]}'[^\n]*\n/, ""));
        }
        e.parseSourceMapInput = N;
        function j(_, v, w) {
          if (((v = v || ""), _ && (_[_.length - 1] !== "/" && v[0] !== "/" && (_ += "/"), (v = _ + v)), w)) {
            var A = s(w);
            if (!A) throw new Error("sourceMapURL could not be parsed");
            if (A.path) {
              var P = A.path.lastIndexOf("/");
              P >= 0 && (A.path = A.path.substring(0, P + 1));
            }
            v = f(a(A), v);
          }
          return u(v);
        }
        e.computeSourceURL = j;
      })(Qt)),
    Qt
  );
}
var Yt = {},
  Qr;
function Ei() {
  if (Qr) return Yt;
  Qr = 1;
  var e = ft(),
    t = Object.prototype.hasOwnProperty,
    r = typeof Map < "u";
  function i() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (i.fromArray = function (a, u) {
      for (var f = new i(), d = 0, g = a.length; d < g; d++) f.add(a[d], u);
      return f;
    }),
    (i.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (i.prototype.add = function (a, u) {
      var f = r ? a : e.toSetString(a),
        d = r ? this.has(a) : t.call(this._set, f),
        g = this._array.length;
      (!d || u) && this._array.push(a), d || (r ? this._set.set(a, g) : (this._set[f] = g));
    }),
    (i.prototype.has = function (a) {
      if (r) return this._set.has(a);
      var u = e.toSetString(a);
      return t.call(this._set, u);
    }),
    (i.prototype.indexOf = function (a) {
      if (r) {
        var u = this._set.get(a);
        if (u >= 0) return u;
      } else {
        var f = e.toSetString(a);
        if (t.call(this._set, f)) return this._set[f];
      }
      throw new Error('"' + a + '" is not in the set.');
    }),
    (i.prototype.at = function (a) {
      if (a >= 0 && a < this._array.length) return this._array[a];
      throw new Error("No element indexed by " + a);
    }),
    (i.prototype.toArray = function () {
      return this._array.slice();
    }),
    (Yt.ArraySet = i),
    Yt
  );
}
var Kt = {},
  Yr;
function rs() {
  if (Yr) return Kt;
  Yr = 1;
  var e = ft();
  function t(i, s) {
    var a = i.generatedLine,
      u = s.generatedLine,
      f = i.generatedColumn,
      d = s.generatedColumn;
    return u > a || (u == a && d >= f) || e.compareByGeneratedPositionsInflated(i, s) <= 0;
  }
  function r() {
    (this._array = []), (this._sorted = !0), (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (s, a) {
      this._array.forEach(s, a);
    }),
    (r.prototype.add = function (s) {
      t(this._last, s) ? ((this._last = s), this._array.push(s)) : ((this._sorted = !1), this._array.push(s));
    }),
    (r.prototype.toArray = function () {
      return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), (this._sorted = !0)), this._array;
    }),
    (Kt.MappingList = r),
    Kt
  );
}
var Kr;
function Ci() {
  if (Kr) return Ht;
  Kr = 1;
  var e = _i(),
    t = ft(),
    r = Ei().ArraySet,
    i = rs().MappingList;
  function s(a) {
    a || (a = {}),
      (this._file = t.getArg(a, "file", null)),
      (this._sourceRoot = t.getArg(a, "sourceRoot", null)),
      (this._skipValidation = t.getArg(a, "skipValidation", !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new i()),
      (this._sourcesContents = null);
  }
  return (
    (s.prototype._version = 3),
    (s.fromSourceMap = function (u) {
      var f = u.sourceRoot,
        d = new s({ file: u.file, sourceRoot: f });
      return (
        u.eachMapping(function (g) {
          var m = { generated: { line: g.generatedLine, column: g.generatedColumn } };
          g.source != null &&
            ((m.source = g.source),
            f != null && (m.source = t.relative(f, m.source)),
            (m.original = { line: g.originalLine, column: g.originalColumn }),
            g.name != null && (m.name = g.name)),
            d.addMapping(m);
        }),
        u.sources.forEach(function (g) {
          var m = g;
          f !== null && (m = t.relative(f, g)), d._sources.has(m) || d._sources.add(m);
          var x = u.sourceContentFor(g);
          x != null && d.setSourceContent(g, x);
        }),
        d
      );
    }),
    (s.prototype.addMapping = function (u) {
      var f = t.getArg(u, "generated"),
        d = t.getArg(u, "original", null),
        g = t.getArg(u, "source", null),
        m = t.getArg(u, "name", null);
      this._skipValidation || this._validateMapping(f, d, g, m),
        g != null && ((g = String(g)), this._sources.has(g) || this._sources.add(g)),
        m != null && ((m = String(m)), this._names.has(m) || this._names.add(m)),
        this._mappings.add({
          generatedLine: f.line,
          generatedColumn: f.column,
          originalLine: d != null && d.line,
          originalColumn: d != null && d.column,
          source: g,
          name: m,
        });
    }),
    (s.prototype.setSourceContent = function (u, f) {
      var d = u;
      this._sourceRoot != null && (d = t.relative(this._sourceRoot, d)),
        f != null
          ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), (this._sourcesContents[t.toSetString(d)] = f))
          : this._sourcesContents &&
            (delete this._sourcesContents[t.toSetString(d)],
            Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
    }),
    (s.prototype.applySourceMap = function (u, f, d) {
      var g = f;
      if (f == null) {
        if (u.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        g = u.file;
      }
      var m = this._sourceRoot;
      m != null && (g = t.relative(m, g));
      var x = new r(),
        C = new r();
      this._mappings.unsortedForEach(function (b) {
        if (b.source === g && b.originalLine != null) {
          var S = u.originalPositionFor({ line: b.originalLine, column: b.originalColumn });
          S.source != null &&
            ((b.source = S.source),
            d != null && (b.source = t.join(d, b.source)),
            m != null && (b.source = t.relative(m, b.source)),
            (b.originalLine = S.line),
            (b.originalColumn = S.column),
            S.name != null && (b.name = S.name));
        }
        var y = b.source;
        y != null && !x.has(y) && x.add(y);
        var I = b.name;
        I != null && !C.has(I) && C.add(I);
      }, this),
        (this._sources = x),
        (this._names = C),
        u.sources.forEach(function (b) {
          var S = u.sourceContentFor(b);
          S != null && (d != null && (b = t.join(d, b)), m != null && (b = t.relative(m, b)), this.setSourceContent(b, S));
        }, this);
    }),
    (s.prototype._validateMapping = function (u, f, d, g) {
      if (f && typeof f.line != "number" && typeof f.column != "number")
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      if (!(u && "line" in u && "column" in u && u.line > 0 && u.column >= 0 && !f && !d && !g)) {
        if (
          u &&
          "line" in u &&
          "column" in u &&
          f &&
          "line" in f &&
          "column" in f &&
          u.line > 0 &&
          u.column >= 0 &&
          f.line > 0 &&
          f.column >= 0 &&
          d
        )
          return;
        throw new Error("Invalid mapping: " + JSON.stringify({ generated: u, source: d, original: f, name: g }));
      }
    }),
    (s.prototype._serializeMappings = function () {
      for (
        var u = 0, f = 1, d = 0, g = 0, m = 0, x = 0, C = "", b, S, y, I, O = this._mappings.toArray(), N = 0, j = O.length;
        N < j;
        N++
      ) {
        if (((S = O[N]), (b = ""), S.generatedLine !== f)) for (u = 0; S.generatedLine !== f; ) (b += ";"), f++;
        else if (N > 0) {
          if (!t.compareByGeneratedPositionsInflated(S, O[N - 1])) continue;
          b += ",";
        }
        (b += e.encode(S.generatedColumn - u)),
          (u = S.generatedColumn),
          S.source != null &&
            ((I = this._sources.indexOf(S.source)),
            (b += e.encode(I - x)),
            (x = I),
            (b += e.encode(S.originalLine - 1 - g)),
            (g = S.originalLine - 1),
            (b += e.encode(S.originalColumn - d)),
            (d = S.originalColumn),
            S.name != null && ((y = this._names.indexOf(S.name)), (b += e.encode(y - m)), (m = y))),
          (C += b);
      }
      return C;
    }),
    (s.prototype._generateSourcesContent = function (u, f) {
      return u.map(function (d) {
        if (!this._sourcesContents) return null;
        f != null && (d = t.relative(f, d));
        var g = t.toSetString(d);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
      }, this);
    }),
    (s.prototype.toJSON = function () {
      var u = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (u.file = this._file),
        this._sourceRoot != null && (u.sourceRoot = this._sourceRoot),
        this._sourcesContents && (u.sourcesContent = this._generateSourcesContent(u.sources, u.sourceRoot)),
        u
      );
    }),
    (s.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Ht.SourceMapGenerator = s),
    Ht
  );
}
var tt = {},
  Jt = {},
  Jr;
function is() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function t(r, i, s, a, u, f) {
          var d = Math.floor((i - r) / 2) + r,
            g = u(s, a[d], !0);
          return g === 0
            ? d
            : g > 0
            ? i - d > 1
              ? t(d, i, s, a, u, f)
              : f == e.LEAST_UPPER_BOUND
              ? i < a.length
                ? i
                : -1
              : d
            : d - r > 1
            ? t(r, d, s, a, u, f)
            : f == e.LEAST_UPPER_BOUND
            ? d
            : r < 0
            ? -1
            : r;
        }
        e.search = function (i, s, a, u) {
          if (s.length === 0) return -1;
          var f = t(-1, s.length, i, s, a, u || e.GREATEST_LOWER_BOUND);
          if (f < 0) return -1;
          for (; f - 1 >= 0 && a(s[f], s[f - 1], !0) === 0; ) --f;
          return f;
        };
      })(Jt)),
    Jt
  );
}
var Xt = {},
  Xr;
function ns() {
  if (Xr) return Xt;
  Xr = 1;
  function e(i, s, a) {
    var u = i[s];
    (i[s] = i[a]), (i[a] = u);
  }
  function t(i, s) {
    return Math.round(i + Math.random() * (s - i));
  }
  function r(i, s, a, u) {
    if (a < u) {
      var f = t(a, u),
        d = a - 1;
      e(i, f, u);
      for (var g = i[u], m = a; m < u; m++) s(i[m], g) <= 0 && ((d += 1), e(i, d, m));
      e(i, d + 1, m);
      var x = d + 1;
      r(i, s, a, x - 1), r(i, s, x + 1, u);
    }
  }
  return (
    (Xt.quickSort = function (i, s) {
      r(i, s, 0, i.length - 1);
    }),
    Xt
  );
}
var Zr;
function ss() {
  if (Zr) return tt;
  Zr = 1;
  var e = ft(),
    t = is(),
    r = Ei().ArraySet,
    i = _i(),
    s = ns().quickSort;
  function a(g, m) {
    var x = g;
    return typeof g == "string" && (x = e.parseSourceMapInput(g)), x.sections != null ? new d(x, m) : new u(x, m);
  }
  (a.fromSourceMap = function (g, m) {
    return u.fromSourceMap(g, m);
  }),
    (a.prototype._version = 3),
    (a.prototype.__generatedMappings = null),
    Object.defineProperty(a.prototype, "_generatedMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
      },
    }),
    (a.prototype.__originalMappings = null),
    Object.defineProperty(a.prototype, "_originalMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
      },
    }),
    (a.prototype._charIsMappingSeparator = function (m, x) {
      var C = m.charAt(x);
      return C === ";" || C === ",";
    }),
    (a.prototype._parseMappings = function (m, x) {
      throw new Error("Subclasses must implement _parseMappings");
    }),
    (a.GENERATED_ORDER = 1),
    (a.ORIGINAL_ORDER = 2),
    (a.GREATEST_LOWER_BOUND = 1),
    (a.LEAST_UPPER_BOUND = 2),
    (a.prototype.eachMapping = function (m, x, C) {
      var b = x || null,
        S = C || a.GENERATED_ORDER,
        y;
      switch (S) {
        case a.GENERATED_ORDER:
          y = this._generatedMappings;
          break;
        case a.ORIGINAL_ORDER:
          y = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var I = this.sourceRoot;
      y.map(function (O) {
        var N = O.source === null ? null : this._sources.at(O.source);
        return (
          (N = e.computeSourceURL(I, N, this._sourceMapURL)),
          {
            source: N,
            generatedLine: O.generatedLine,
            generatedColumn: O.generatedColumn,
            originalLine: O.originalLine,
            originalColumn: O.originalColumn,
            name: O.name === null ? null : this._names.at(O.name),
          }
        );
      }, this).forEach(m, b);
    }),
    (a.prototype.allGeneratedPositionsFor = function (m) {
      var x = e.getArg(m, "line"),
        C = { source: e.getArg(m, "source"), originalLine: x, originalColumn: e.getArg(m, "column", 0) };
      if (((C.source = this._findSourceIndex(C.source)), C.source < 0)) return [];
      var b = [],
        S = this._findMapping(
          C,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          t.LEAST_UPPER_BOUND
        );
      if (S >= 0) {
        var y = this._originalMappings[S];
        if (m.column === void 0)
          for (var I = y.originalLine; y && y.originalLine === I; )
            b.push({
              line: e.getArg(y, "generatedLine", null),
              column: e.getArg(y, "generatedColumn", null),
              lastColumn: e.getArg(y, "lastGeneratedColumn", null),
            }),
              (y = this._originalMappings[++S]);
        else
          for (var O = y.originalColumn; y && y.originalLine === x && y.originalColumn == O; )
            b.push({
              line: e.getArg(y, "generatedLine", null),
              column: e.getArg(y, "generatedColumn", null),
              lastColumn: e.getArg(y, "lastGeneratedColumn", null),
            }),
              (y = this._originalMappings[++S]);
      }
      return b;
    }),
    (tt.SourceMapConsumer = a);
  function u(g, m) {
    var x = g;
    typeof g == "string" && (x = e.parseSourceMapInput(g));
    var C = e.getArg(x, "version"),
      b = e.getArg(x, "sources"),
      S = e.getArg(x, "names", []),
      y = e.getArg(x, "sourceRoot", null),
      I = e.getArg(x, "sourcesContent", null),
      O = e.getArg(x, "mappings"),
      N = e.getArg(x, "file", null);
    if (C != this._version) throw new Error("Unsupported version: " + C);
    y && (y = e.normalize(y)),
      (b = b
        .map(String)
        .map(e.normalize)
        .map(function (j) {
          return y && e.isAbsolute(y) && e.isAbsolute(j) ? e.relative(y, j) : j;
        })),
      (this._names = r.fromArray(S.map(String), !0)),
      (this._sources = r.fromArray(b, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (j) {
        return e.computeSourceURL(y, j, m);
      })),
      (this.sourceRoot = y),
      (this.sourcesContent = I),
      (this._mappings = O),
      (this._sourceMapURL = m),
      (this.file = N);
  }
  (u.prototype = Object.create(a.prototype)),
    (u.prototype.consumer = a),
    (u.prototype._findSourceIndex = function (g) {
      var m = g;
      if ((this.sourceRoot != null && (m = e.relative(this.sourceRoot, m)), this._sources.has(m))) return this._sources.indexOf(m);
      var x;
      for (x = 0; x < this._absoluteSources.length; ++x) if (this._absoluteSources[x] == g) return x;
      return -1;
    }),
    (u.fromSourceMap = function (m, x) {
      var C = Object.create(u.prototype),
        b = (C._names = r.fromArray(m._names.toArray(), !0)),
        S = (C._sources = r.fromArray(m._sources.toArray(), !0));
      (C.sourceRoot = m._sourceRoot),
        (C.sourcesContent = m._generateSourcesContent(C._sources.toArray(), C.sourceRoot)),
        (C.file = m._file),
        (C._sourceMapURL = x),
        (C._absoluteSources = C._sources.toArray().map(function (w) {
          return e.computeSourceURL(C.sourceRoot, w, x);
        }));
      for (
        var y = m._mappings.toArray().slice(), I = (C.__generatedMappings = []), O = (C.__originalMappings = []), N = 0, j = y.length;
        N < j;
        N++
      ) {
        var _ = y[N],
          v = new f();
        (v.generatedLine = _.generatedLine),
          (v.generatedColumn = _.generatedColumn),
          _.source &&
            ((v.source = S.indexOf(_.source)),
            (v.originalLine = _.originalLine),
            (v.originalColumn = _.originalColumn),
            _.name && (v.name = b.indexOf(_.name)),
            O.push(v)),
          I.push(v);
      }
      return s(C.__originalMappings, e.compareByOriginalPositions), C;
    }),
    (u.prototype._version = 3),
    Object.defineProperty(u.prototype, "sources", {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function f() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (u.prototype._parseMappings = function (m, x) {
    for (var C = 1, b = 0, S = 0, y = 0, I = 0, O = 0, N = m.length, j = 0, _ = {}, v = {}, w = [], A = [], P, B, F, W, q; j < N; )
      if (m.charAt(j) === ";") C++, j++, (b = 0);
      else if (m.charAt(j) === ",") j++;
      else {
        for (P = new f(), P.generatedLine = C, W = j; W < N && !this._charIsMappingSeparator(m, W); W++);
        if (((B = m.slice(j, W)), (F = _[B]), F)) j += B.length;
        else {
          for (F = []; j < W; ) i.decode(m, j, v), (q = v.value), (j = v.rest), F.push(q);
          if (F.length === 2) throw new Error("Found a source, but no line and column");
          if (F.length === 3) throw new Error("Found a source and line, but no column");
          _[B] = F;
        }
        (P.generatedColumn = b + F[0]),
          (b = P.generatedColumn),
          F.length > 1 &&
            ((P.source = I + F[1]),
            (I += F[1]),
            (P.originalLine = S + F[2]),
            (S = P.originalLine),
            (P.originalLine += 1),
            (P.originalColumn = y + F[3]),
            (y = P.originalColumn),
            F.length > 4 && ((P.name = O + F[4]), (O += F[4]))),
          A.push(P),
          typeof P.originalLine == "number" && w.push(P);
      }
    s(A, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = A),
      s(w, e.compareByOriginalPositions),
      (this.__originalMappings = w);
  }),
    (u.prototype._findMapping = function (m, x, C, b, S, y) {
      if (m[C] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + m[C]);
      if (m[b] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + m[b]);
      return t.search(m, x, S, y);
    }),
    (u.prototype.computeColumnSpans = function () {
      for (var m = 0; m < this._generatedMappings.length; ++m) {
        var x = this._generatedMappings[m];
        if (m + 1 < this._generatedMappings.length) {
          var C = this._generatedMappings[m + 1];
          if (x.generatedLine === C.generatedLine) {
            x.lastGeneratedColumn = C.generatedColumn - 1;
            continue;
          }
        }
        x.lastGeneratedColumn = 1 / 0;
      }
    }),
    (u.prototype.originalPositionFor = function (m) {
      var x = { generatedLine: e.getArg(m, "line"), generatedColumn: e.getArg(m, "column") },
        C = this._findMapping(
          x,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          e.compareByGeneratedPositionsDeflated,
          e.getArg(m, "bias", a.GREATEST_LOWER_BOUND)
        );
      if (C >= 0) {
        var b = this._generatedMappings[C];
        if (b.generatedLine === x.generatedLine) {
          var S = e.getArg(b, "source", null);
          S !== null && ((S = this._sources.at(S)), (S = e.computeSourceURL(this.sourceRoot, S, this._sourceMapURL)));
          var y = e.getArg(b, "name", null);
          return (
            y !== null && (y = this._names.at(y)),
            { source: S, line: e.getArg(b, "originalLine", null), column: e.getArg(b, "originalColumn", null), name: y }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (u.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (m) {
              return m == null;
            })
        : !1;
    }),
    (u.prototype.sourceContentFor = function (m, x) {
      if (!this.sourcesContent) return null;
      var C = this._findSourceIndex(m);
      if (C >= 0) return this.sourcesContent[C];
      var b = m;
      this.sourceRoot != null && (b = e.relative(this.sourceRoot, b));
      var S;
      if (this.sourceRoot != null && (S = e.urlParse(this.sourceRoot))) {
        var y = b.replace(/^file:\/\//, "");
        if (S.scheme == "file" && this._sources.has(y)) return this.sourcesContent[this._sources.indexOf(y)];
        if ((!S.path || S.path == "/") && this._sources.has("/" + b)) return this.sourcesContent[this._sources.indexOf("/" + b)];
      }
      if (x) return null;
      throw new Error('"' + b + '" is not in the SourceMap.');
    }),
    (u.prototype.generatedPositionFor = function (m) {
      var x = e.getArg(m, "source");
      if (((x = this._findSourceIndex(x)), x < 0)) return { line: null, column: null, lastColumn: null };
      var C = { source: x, originalLine: e.getArg(m, "line"), originalColumn: e.getArg(m, "column") },
        b = this._findMapping(
          C,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          e.getArg(m, "bias", a.GREATEST_LOWER_BOUND)
        );
      if (b >= 0) {
        var S = this._originalMappings[b];
        if (S.source === C.source)
          return {
            line: e.getArg(S, "generatedLine", null),
            column: e.getArg(S, "generatedColumn", null),
            lastColumn: e.getArg(S, "lastGeneratedColumn", null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (tt.BasicSourceMapConsumer = u);
  function d(g, m) {
    var x = g;
    typeof g == "string" && (x = e.parseSourceMapInput(g));
    var C = e.getArg(x, "version"),
      b = e.getArg(x, "sections");
    if (C != this._version) throw new Error("Unsupported version: " + C);
    (this._sources = new r()), (this._names = new r());
    var S = { line: -1, column: 0 };
    this._sections = b.map(function (y) {
      if (y.url) throw new Error("Support for url field in sections not implemented.");
      var I = e.getArg(y, "offset"),
        O = e.getArg(I, "line"),
        N = e.getArg(I, "column");
      if (O < S.line || (O === S.line && N < S.column)) throw new Error("Section offsets must be ordered and non-overlapping.");
      return (S = I), { generatedOffset: { generatedLine: O + 1, generatedColumn: N + 1 }, consumer: new a(e.getArg(y, "map"), m) };
    });
  }
  return (
    (d.prototype = Object.create(a.prototype)),
    (d.prototype.constructor = a),
    (d.prototype._version = 3),
    Object.defineProperty(d.prototype, "sources", {
      get: function () {
        for (var g = [], m = 0; m < this._sections.length; m++)
          for (var x = 0; x < this._sections[m].consumer.sources.length; x++) g.push(this._sections[m].consumer.sources[x]);
        return g;
      },
    }),
    (d.prototype.originalPositionFor = function (m) {
      var x = { generatedLine: e.getArg(m, "line"), generatedColumn: e.getArg(m, "column") },
        C = t.search(x, this._sections, function (S, y) {
          var I = S.generatedLine - y.generatedOffset.generatedLine;
          return I || S.generatedColumn - y.generatedOffset.generatedColumn;
        }),
        b = this._sections[C];
      return b
        ? b.consumer.originalPositionFor({
            line: x.generatedLine - (b.generatedOffset.generatedLine - 1),
            column: x.generatedColumn - (b.generatedOffset.generatedLine === x.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
            bias: m.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (d.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (m) {
        return m.consumer.hasContentsOfAllSources();
      });
    }),
    (d.prototype.sourceContentFor = function (m, x) {
      for (var C = 0; C < this._sections.length; C++) {
        var b = this._sections[C],
          S = b.consumer.sourceContentFor(m, !0);
        if (S) return S;
      }
      if (x) return null;
      throw new Error('"' + m + '" is not in the SourceMap.');
    }),
    (d.prototype.generatedPositionFor = function (m) {
      for (var x = 0; x < this._sections.length; x++) {
        var C = this._sections[x];
        if (C.consumer._findSourceIndex(e.getArg(m, "source")) !== -1) {
          var b = C.consumer.generatedPositionFor(m);
          if (b) {
            var S = {
              line: b.line + (C.generatedOffset.generatedLine - 1),
              column: b.column + (C.generatedOffset.generatedLine === b.line ? C.generatedOffset.generatedColumn - 1 : 0),
            };
            return S;
          }
        }
      }
      return { line: null, column: null };
    }),
    (d.prototype._parseMappings = function (m, x) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var C = 0; C < this._sections.length; C++)
        for (var b = this._sections[C], S = b.consumer._generatedMappings, y = 0; y < S.length; y++) {
          var I = S[y],
            O = b.consumer._sources.at(I.source);
          (O = e.computeSourceURL(b.consumer.sourceRoot, O, this._sourceMapURL)), this._sources.add(O), (O = this._sources.indexOf(O));
          var N = null;
          I.name && ((N = b.consumer._names.at(I.name)), this._names.add(N), (N = this._names.indexOf(N)));
          var j = {
            source: O,
            generatedLine: I.generatedLine + (b.generatedOffset.generatedLine - 1),
            generatedColumn:
              I.generatedColumn + (b.generatedOffset.generatedLine === I.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
            originalLine: I.originalLine,
            originalColumn: I.originalColumn,
            name: N,
          };
          this.__generatedMappings.push(j), typeof j.originalLine == "number" && this.__originalMappings.push(j);
        }
      s(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), s(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (tt.IndexedSourceMapConsumer = d),
    tt
  );
}
var Zt = {},
  ei;
function as() {
  if (ei) return Zt;
  ei = 1;
  var e = Ci().SourceMapGenerator,
    t = ft(),
    r = /(\r?\n)/,
    i = 10,
    s = "$$$isSourceNode$$$";
  function a(u, f, d, g, m) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = u ?? null),
      (this.column = f ?? null),
      (this.source = d ?? null),
      (this.name = m ?? null),
      (this[s] = !0),
      g != null && this.add(g);
  }
  return (
    (a.fromStringWithSourceMap = function (f, d, g) {
      var m = new a(),
        x = f.split(r),
        C = 0,
        b = function () {
          var N = _(),
            j = _() || "";
          return N + j;
          function _() {
            return C < x.length ? x[C++] : void 0;
          }
        },
        S = 1,
        y = 0,
        I = null;
      return (
        d.eachMapping(function (N) {
          if (I !== null)
            if (S < N.generatedLine) O(I, b()), S++, (y = 0);
            else {
              var j = x[C] || "",
                _ = j.substr(0, N.generatedColumn - y);
              (x[C] = j.substr(N.generatedColumn - y)), (y = N.generatedColumn), O(I, _), (I = N);
              return;
            }
          for (; S < N.generatedLine; ) m.add(b()), S++;
          if (y < N.generatedColumn) {
            var j = x[C] || "";
            m.add(j.substr(0, N.generatedColumn)), (x[C] = j.substr(N.generatedColumn)), (y = N.generatedColumn);
          }
          I = N;
        }, this),
        C < x.length && (I && O(I, b()), m.add(x.splice(C).join(""))),
        d.sources.forEach(function (N) {
          var j = d.sourceContentFor(N);
          j != null && (g != null && (N = t.join(g, N)), m.setSourceContent(N, j));
        }),
        m
      );
      function O(N, j) {
        if (N === null || N.source === void 0) m.add(j);
        else {
          var _ = g ? t.join(g, N.source) : N.source;
          m.add(new a(N.originalLine, N.originalColumn, _, j, N.name));
        }
      }
    }),
    (a.prototype.add = function (f) {
      if (Array.isArray(f))
        f.forEach(function (d) {
          this.add(d);
        }, this);
      else if (f[s] || typeof f == "string") f && this.children.push(f);
      else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f);
      return this;
    }),
    (a.prototype.prepend = function (f) {
      if (Array.isArray(f)) for (var d = f.length - 1; d >= 0; d--) this.prepend(f[d]);
      else if (f[s] || typeof f == "string") this.children.unshift(f);
      else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f);
      return this;
    }),
    (a.prototype.walk = function (f) {
      for (var d, g = 0, m = this.children.length; g < m; g++)
        (d = this.children[g]),
          d[s] ? d.walk(f) : d !== "" && f(d, { source: this.source, line: this.line, column: this.column, name: this.name });
    }),
    (a.prototype.join = function (f) {
      var d,
        g,
        m = this.children.length;
      if (m > 0) {
        for (d = [], g = 0; g < m - 1; g++) d.push(this.children[g]), d.push(f);
        d.push(this.children[g]), (this.children = d);
      }
      return this;
    }),
    (a.prototype.replaceRight = function (f, d) {
      var g = this.children[this.children.length - 1];
      return (
        g[s]
          ? g.replaceRight(f, d)
          : typeof g == "string"
          ? (this.children[this.children.length - 1] = g.replace(f, d))
          : this.children.push("".replace(f, d)),
        this
      );
    }),
    (a.prototype.setSourceContent = function (f, d) {
      this.sourceContents[t.toSetString(f)] = d;
    }),
    (a.prototype.walkSourceContents = function (f) {
      for (var d = 0, g = this.children.length; d < g; d++) this.children[d][s] && this.children[d].walkSourceContents(f);
      for (var m = Object.keys(this.sourceContents), d = 0, g = m.length; d < g; d++) f(t.fromSetString(m[d]), this.sourceContents[m[d]]);
    }),
    (a.prototype.toString = function () {
      var f = "";
      return (
        this.walk(function (d) {
          f += d;
        }),
        f
      );
    }),
    (a.prototype.toStringWithSourceMap = function (f) {
      var d = { code: "", line: 1, column: 0 },
        g = new e(f),
        m = !1,
        x = null,
        C = null,
        b = null,
        S = null;
      return (
        this.walk(function (y, I) {
          (d.code += y),
            I.source !== null && I.line !== null && I.column !== null
              ? ((x !== I.source || C !== I.line || b !== I.column || S !== I.name) &&
                  g.addMapping({
                    source: I.source,
                    original: { line: I.line, column: I.column },
                    generated: { line: d.line, column: d.column },
                    name: I.name,
                  }),
                (x = I.source),
                (C = I.line),
                (b = I.column),
                (S = I.name),
                (m = !0))
              : m && (g.addMapping({ generated: { line: d.line, column: d.column } }), (x = null), (m = !1));
          for (var O = 0, N = y.length; O < N; O++)
            y.charCodeAt(O) === i
              ? (d.line++,
                (d.column = 0),
                O + 1 === N
                  ? ((x = null), (m = !1))
                  : m &&
                    g.addMapping({
                      source: I.source,
                      original: { line: I.line, column: I.column },
                      generated: { line: d.line, column: d.column },
                      name: I.name,
                    }))
              : d.column++;
        }),
        this.walkSourceContents(function (y, I) {
          g.setSourceContent(y, I);
        }),
        { code: d.code, map: g }
      );
    }),
    (Zt.SourceNode = a),
    Zt
  );
}
var ti;
function os() {
  return (
    ti ||
      ((ti = 1),
      (et.SourceMapGenerator = Ci().SourceMapGenerator),
      (et.SourceMapConsumer = ss().SourceMapConsumer),
      (et.SourceNode = as().SourceNode)),
    et
  );
}
const us = "escodegen",
  ls = "ECMAScript code generator",
  cs = "http://github.com/estools/escodegen",
  hs = "escodegen.js",
  fs = { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
  ps = ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
  ds = "2.1.0",
  ms = { node: ">=6.0" },
  gs = [{ name: "Yusuke Suzuki", email: "utatane.tea@gmail.com", web: "http://github.com/Constellation" }],
  ys = { type: "git", url: "http://github.com/estools/escodegen.git" },
  vs = { estraverse: "^5.2.0", esutils: "^2.0.2", esprima: "^4.0.1" },
  xs = { "source-map": "~0.6.1" },
  bs = {
    acorn: "^8.0.4",
    bluebird: "^3.4.7",
    "bower-registry-client": "^1.0.0",
    chai: "^4.2.0",
    "chai-exclude": "^2.0.2",
    "commonjs-everywhere": "^0.9.7",
    gulp: "^4.0.2",
    "gulp-eslint": "^6.0.0",
    "gulp-mocha": "^7.0.2",
    minimist: "^1.2.5",
    optionator: "^0.9.1",
    semver: "^7.3.4",
  },
  Ss = "BSD-2-Clause",
  _s = {
    test: "gulp travis",
    "unit-test": "gulp test",
    lint: "gulp lint",
    release: "node tools/release.js",
    "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
    build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
  },
  Es = {
    name: us,
    description: ls,
    homepage: cs,
    main: hs,
    bin: fs,
    files: ps,
    version: ds,
    engines: ms,
    maintainers: gs,
    repository: ys,
    dependencies: vs,
    optionalDependencies: xs,
    devDependencies: bs,
    license: Ss,
    scripts: _s,
  };
(function (e) {
  (function () {
    var t, r, i, s, a, u, f, d, g, m, x, C, b, S, y, I, O, N, j, _, v, w, A, P, B, F;
    (a = Si), (u = qn), (t = a.Syntax);
    function W(n) {
      return ae.Expression.hasOwnProperty(n.type);
    }
    function q(n) {
      return ae.Statement.hasOwnProperty(n.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22,
    }),
      (i = {
        "??": r.Coalesce,
        "||": r.LogicalOR,
        "&&": r.LogicalAND,
        "|": r.BitwiseOR,
        "^": r.BitwiseXOR,
        "&": r.BitwiseAND,
        "==": r.Equality,
        "!=": r.Equality,
        "===": r.Equality,
        "!==": r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        "<": r.Relational,
        ">": r.Relational,
        "<=": r.Relational,
        ">=": r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        "<<": r.BitwiseSHIFT,
        ">>": r.BitwiseSHIFT,
        ">>>": r.BitwiseSHIFT,
        "+": r.Additive,
        "-": r.Additive,
        "*": r.Multiplicative,
        "%": r.Multiplicative,
        "/": r.Multiplicative,
        "**": r.Exponentiation,
      });
    var V = 1,
      Y = 2,
      ie = 4,
      ue = 8,
      re = 16,
      K = 32,
      ve = 64,
      Pe = Y | ie,
      $e = V | Y,
      M = V | Y | ie,
      De = V,
      yt = ie,
      Re = V | ie,
      ee = V,
      we = V | K,
      vt = 0,
      kn = V | re,
      Pn = V | ue;
    function Lr() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: { comprehensionExpressionStartsWithAssignment: !1, starlessGenerator: !1 },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function je(n, l) {
      var o = "";
      for (l |= 0; l > 0; l >>>= 1, n += n) l & 1 && (o += n);
      return o;
    }
    function In(n) {
      return /[\r\n]/g.test(n);
    }
    function he(n) {
      var l = n.length;
      return l && u.code.isLineTerminator(n.charCodeAt(l - 1));
    }
    function Nr(n, l) {
      var o;
      for (o in l) l.hasOwnProperty(o) && (n[o] = l[o]);
      return n;
    }
    function xt(n, l) {
      var o, c;
      function p(E) {
        return typeof E == "object" && E instanceof Object && !(E instanceof RegExp);
      }
      for (o in l) l.hasOwnProperty(o) && ((c = l[o]), p(c) ? (p(n[o]) ? xt(n[o], c) : (n[o] = xt({}, c))) : (n[o] = c));
      return n;
    }
    function Tn(n) {
      var l, o, c, p, E;
      if (n !== n) throw new Error("Numeric literal whose value is NaN");
      if (n < 0 || (n === 0 && 1 / n < 0)) throw new Error("Numeric literal whose value is negative");
      if (n === 1 / 0) return g ? "null" : m ? "1e400" : "1e+400";
      if (((l = "" + n), !m || l.length < 3)) return l;
      for (
        o = l.indexOf("."),
          !g && l.charCodeAt(0) === 48 && o === 1 && ((o = 0), (l = l.slice(1))),
          c = l,
          l = l.replace("e+", "e"),
          p = 0,
          (E = c.indexOf("e")) > 0 && ((p = +c.slice(E + 1)), (c = c.slice(0, E))),
          o >= 0 && ((p -= c.length - o - 1), (c = +(c.slice(0, o) + c.slice(o + 1)) + "")),
          E = 0;
        c.charCodeAt(c.length + E - 1) === 48;

      )
        --E;
      return (
        E !== 0 && ((p -= E), (c = c.slice(0, E))),
        p !== 0 && (c += "e" + p),
        (c.length < l.length || (x && n > 1e12 && Math.floor(n) === n && (c = "0x" + n.toString(16)).length < l.length)) &&
          +c === n &&
          (l = c),
        l
      );
    }
    function Or(n, l) {
      return (n & -2) === 8232
        ? (l ? "u" : "\\u") + (n === 8232 ? "2028" : "2029")
        : n === 10 || n === 13
        ? (l ? "" : "\\") + (n === 10 ? "n" : "r")
        : String.fromCharCode(n);
    }
    function Ln(n) {
      var l, o, c, p, E, k, T, R;
      if (((o = n.toString()), n.source)) {
        if (((l = o.match(/\/([^/]*)$/)), !l)) return o;
        for (c = l[1], o = "", T = !1, R = !1, p = 0, E = n.source.length; p < E; ++p)
          (k = n.source.charCodeAt(p)),
            R
              ? ((o += Or(k, R)), (R = !1))
              : (T ? k === 93 && (T = !1) : k === 47 ? (o += "\\") : k === 91 && (T = !0), (o += Or(k, R)), (R = k === 92));
        return "/" + o + "/" + c;
      }
      return o;
    }
    function Nn(n, l) {
      var o;
      return n === 8
        ? "\\b"
        : n === 12
        ? "\\f"
        : n === 9
        ? "\\t"
        : ((o = n.toString(16).toUpperCase()),
          g || n > 255
            ? "\\u" + "0000".slice(o.length) + o
            : n === 0 && !u.code.isDecimalDigit(l)
            ? "\\0"
            : n === 11
            ? "\\x0B"
            : "\\x" + "00".slice(o.length) + o);
    }
    function On(n) {
      if (n === 92) return "\\\\";
      if (n === 10) return "\\n";
      if (n === 13) return "\\r";
      if (n === 8232) return "\\u2028";
      if (n === 8233) return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function Rn(n) {
      var l, o, c, p;
      for (p = C === "double" ? '"' : "'", l = 0, o = n.length; l < o; ++l)
        if (((c = n.charCodeAt(l)), c === 39)) {
          p = '"';
          break;
        } else if (c === 34) {
          p = "'";
          break;
        } else c === 92 && ++l;
      return p + n + p;
    }
    function Mn(n) {
      var l = "",
        o,
        c,
        p,
        E = 0,
        k = 0,
        T,
        R;
      for (o = 0, c = n.length; o < c; ++o) {
        if (((p = n.charCodeAt(o)), p === 39)) ++E;
        else if (p === 34) ++k;
        else if (p === 47 && g) l += "\\";
        else if (u.code.isLineTerminator(p) || p === 92) {
          l += On(p);
          continue;
        } else if (!u.code.isIdentifierPartES5(p) && ((g && p < 32) || (!g && !b && (p < 32 || p > 126)))) {
          l += Nn(p, n.charCodeAt(o + 1));
          continue;
        }
        l += String.fromCharCode(p);
      }
      if (((T = !(C === "double" || (C === "auto" && k < E))), (R = T ? "'" : '"'), !(T ? E : k))) return R + l + R;
      for (n = l, l = R, o = 0, c = n.length; o < c; ++o)
        (p = n.charCodeAt(o)), ((p === 39 && T) || (p === 34 && !T)) && (l += "\\"), (l += String.fromCharCode(p));
      return l + R;
    }
    function Rr(n) {
      var l,
        o,
        c,
        p = "";
      for (l = 0, o = n.length; l < o; ++l) (c = n[l]), (p += Array.isArray(c) ? Rr(c) : c);
      return p;
    }
    function X(n, l) {
      if (!w) return Array.isArray(n) ? Rr(n) : n;
      if (l == null) {
        if (n instanceof s) return n;
        l = {};
      }
      return l.loc == null
        ? new s(null, null, w, n, l.name || null)
        : new s(l.loc.start.line, l.loc.start.column, w === !0 ? l.loc.source || null : w, n, l.name || null);
    }
    function fe() {
      return y || " ";
    }
    function U(n, l) {
      var o, c, p, E;
      return (
        (o = X(n).toString()),
        o.length === 0
          ? [l]
          : ((c = X(l).toString()),
            c.length === 0
              ? [n]
              : ((p = o.charCodeAt(o.length - 1)),
                (E = c.charCodeAt(0)),
                ((p === 43 || p === 45) && p === E) ||
                (u.code.isIdentifierPartES5(p) && u.code.isIdentifierPartES5(E)) ||
                (p === 47 && E === 105)
                  ? [n, fe(), l]
                  : u.code.isWhiteSpace(p) || u.code.isLineTerminator(p) || u.code.isWhiteSpace(E) || u.code.isLineTerminator(E)
                  ? [n, l]
                  : [n, y, l]))
      );
    }
    function pe(n) {
      return [f, n];
    }
    function se(n) {
      var l;
      (l = f), (f += d), n(f), (f = l);
    }
    function Fn(n) {
      var l;
      for (l = n.length - 1; l >= 0 && !u.code.isLineTerminator(n.charCodeAt(l)); --l);
      return n.length - 1 - l;
    }
    function Vn(n, l) {
      var o, c, p, E, k, T, R, H;
      for (o = n.split(/\r\n|[\r\n]/), T = Number.MAX_VALUE, c = 1, p = o.length; c < p; ++c) {
        for (E = o[c], k = 0; k < E.length && u.code.isWhiteSpace(E.charCodeAt(k)); ) ++k;
        T > k && (T = k);
      }
      for (typeof l < "u" ? ((R = f), o[1][T] === "*" && (l += " "), (f = l)) : (T & 1 && --T, (R = f)), c = 1, p = o.length; c < p; ++c)
        (H = X(pe(o[c].slice(T)))), (o[c] = w ? H.join("") : H);
      return (
        (f = R),
        o.join(`
`)
      );
    }
    function Ie(n, l) {
      if (n.type === "Line") {
        if (he(n.value)) return "//" + n.value;
        var o = "//" + n.value;
        return (
          P ||
            (o += `
`),
          o
        );
      }
      return _.format.indent.adjustMultilineComment && /[\n\r]/.test(n.value) ? Vn("/*" + n.value + "*/", l) : "/*" + n.value + "*/";
    }
    function Mr(n, l) {
      var o, c, p, E, k, T, R, H, ce, qe, Qe, Br, Dr, Ae;
      if (n.leadingComments && n.leadingComments.length > 0) {
        if (((E = l), P)) {
          for (
            p = n.leadingComments[0],
              l = [],
              H = p.extendedRange,
              ce = p.range,
              Qe = A.substring(H[0], ce[0]),
              Ae = (Qe.match(/\n/g) || []).length,
              Ae > 0
                ? (l.push(
                    je(
                      `
`,
                      Ae
                    )
                  ),
                  l.push(pe(Ie(p))))
                : (l.push(Qe), l.push(Ie(p))),
              qe = ce,
              o = 1,
              c = n.leadingComments.length;
            o < c;
            o++
          )
            (p = n.leadingComments[o]),
              (ce = p.range),
              (Br = A.substring(qe[1], ce[0])),
              (Ae = (Br.match(/\n/g) || []).length),
              l.push(
                je(
                  `
`,
                  Ae
                )
              ),
              l.push(pe(Ie(p))),
              (qe = ce);
          (Dr = A.substring(ce[1], H[1])),
            (Ae = (Dr.match(/\n/g) || []).length),
            l.push(
              je(
                `
`,
                Ae
              )
            );
        } else
          for (
            p = n.leadingComments[0],
              l = [],
              N &&
                n.type === t.Program &&
                n.body.length === 0 &&
                l.push(`
`),
              l.push(Ie(p)),
              he(X(l).toString()) ||
                l.push(`
`),
              o = 1,
              c = n.leadingComments.length;
            o < c;
            ++o
          )
            (p = n.leadingComments[o]),
              (R = [Ie(p)]),
              he(X(R).toString()) ||
                R.push(`
`),
              l.push(pe(R));
        l.push(pe(E));
      }
      if (n.trailingComments)
        if (P)
          (p = n.trailingComments[0]),
            (H = p.extendedRange),
            (ce = p.range),
            (Qe = A.substring(H[0], ce[0])),
            (Ae = (Qe.match(/\n/g) || []).length),
            Ae > 0
              ? (l.push(
                  je(
                    `
`,
                    Ae
                  )
                ),
                l.push(pe(Ie(p))))
              : (l.push(Qe), l.push(Ie(p)));
        else
          for (k = !he(X(l).toString()), T = je(" ", Fn(X([f, l, d]).toString())), o = 0, c = n.trailingComments.length; o < c; ++o)
            (p = n.trailingComments[o]),
              k ? (o === 0 ? (l = [l, d]) : (l = [l, T]), l.push(Ie(p, T))) : (l = [l, pe(Ie(p))]),
              o !== c - 1 &&
                !he(X(l).toString()) &&
                (l = [
                  l,
                  `
`,
                ]);
      return l;
    }
    function He(n, l, o) {
      var c,
        p = 0;
      for (c = n; c < l; c++)
        A[c] ===
          `
` && p++;
      for (c = 1; c < p; c++) o.push(S);
    }
    function le(n, l, o) {
      return l < o ? ["(", n, ")"] : n;
    }
    function Fr(n) {
      var l, o, c;
      for (c = n.split(/\r\n|\n/), l = 1, o = c.length; l < o; l++) c[l] = S + f + c[l];
      return c;
    }
    function Bn(n, l) {
      var o, c, p;
      return (
        (o = n[_.verbatim]),
        typeof o == "string"
          ? (c = le(Fr(o), r.Sequence, l))
          : ((c = Fr(o.content)), (p = o.precedence != null ? o.precedence : r.Sequence), (c = le(c, p, l))),
        X(c, n)
      );
    }
    function ae() {}
    (ae.prototype.maybeBlock = function (n, l) {
      var o,
        c,
        p = this;
      return (
        (c = !_.comment || !n.leadingComments),
        n.type === t.BlockStatement && c
          ? [y, this.generateStatement(n, l)]
          : n.type === t.EmptyStatement && c
          ? ";"
          : (se(function () {
              o = [S, pe(p.generateStatement(n, l))];
            }),
            o)
      );
    }),
      (ae.prototype.maybeBlockSuffix = function (n, l) {
        var o = he(X(l).toString());
        return n.type === t.BlockStatement && (!_.comment || !n.leadingComments) && !o ? [l, y] : o ? [l, f] : [l, S, f];
      });
    function ge(n) {
      return X(n.name, n);
    }
    function Ze(n, l) {
      return n.async ? "async" + (l ? fe() : y) : "";
    }
    function bt(n) {
      var l = n.generator && !_.moz.starlessGenerator;
      return l ? "*" + y : "";
    }
    function Vr(n) {
      var l = n.value,
        o = "";
      return l.async && (o += Ze(l, !n.computed)), l.generator && (o += bt(l) ? "*" : ""), o;
    }
    (ae.prototype.generatePattern = function (n, l, o) {
      return n.type === t.Identifier ? ge(n) : this.generateExpression(n, l, o);
    }),
      (ae.prototype.generateFunctionParams = function (n) {
        var l, o, c, p;
        if (
          ((p = !1),
          n.type === t.ArrowFunctionExpression &&
            !n.rest &&
            (!n.defaults || n.defaults.length === 0) &&
            n.params.length === 1 &&
            n.params[0].type === t.Identifier)
        )
          c = [Ze(n, !0), ge(n.params[0])];
        else {
          for (
            c = n.type === t.ArrowFunctionExpression ? [Ze(n, !1)] : [], c.push("("), n.defaults && (p = !0), l = 0, o = n.params.length;
            l < o;
            ++l
          )
            p && n.defaults[l]
              ? c.push(this.generateAssignment(n.params[l], n.defaults[l], "=", r.Assignment, M))
              : c.push(this.generatePattern(n.params[l], r.Assignment, M)),
              l + 1 < o && c.push("," + y);
          n.rest && (n.params.length && c.push("," + y), c.push("..."), c.push(ge(n.rest))), c.push(")");
        }
        return c;
      }),
      (ae.prototype.generateFunctionBody = function (n) {
        var l, o;
        return (
          (l = this.generateFunctionParams(n)),
          n.type === t.ArrowFunctionExpression && (l.push(y), l.push("=>")),
          n.expression
            ? (l.push(y),
              (o = this.generateExpression(n.body, r.Assignment, M)),
              o.toString().charAt(0) === "{" && (o = ["(", o, ")"]),
              l.push(o))
            : l.push(this.maybeBlock(n.body, Pn)),
          l
        );
      }),
      (ae.prototype.generateIterationForStatement = function (n, l, o) {
        var c = ["for" + (l.await ? fe() + "await" : "") + y + "("],
          p = this;
        return (
          se(function () {
            l.left.type === t.VariableDeclaration
              ? se(function () {
                  c.push(l.left.kind + fe()), c.push(p.generateStatement(l.left.declarations[0], vt));
                })
              : c.push(p.generateExpression(l.left, r.Call, M)),
              (c = U(c, n)),
              (c = [U(c, p.generateExpression(l.right, r.Assignment, M)), ")"]);
          }),
          c.push(this.maybeBlock(l.body, o)),
          c
        );
      }),
      (ae.prototype.generatePropertyKey = function (n, l) {
        var o = [];
        return l && o.push("["), o.push(this.generateExpression(n, r.Assignment, M)), l && o.push("]"), o;
      }),
      (ae.prototype.generateAssignment = function (n, l, o, c, p) {
        return (
          r.Assignment < c && (p |= V),
          le([this.generateExpression(n, r.Call, p), y + o + y, this.generateExpression(l, r.Assignment, p)], r.Assignment, c)
        );
      }),
      (ae.prototype.semicolon = function (n) {
        return !O && n & K ? "" : ";";
      }),
      (ae.Statement = {
        BlockStatement: function (n, l) {
          var o,
            c,
            p = ["{", S],
            E = this;
          return (
            se(function () {
              n.body.length === 0 &&
                P &&
                ((o = n.range),
                o[1] - o[0] > 2 &&
                  ((c = A.substring(o[0] + 1, o[1] - 1)),
                  c[0] ===
                    `
` && (p = ["{"]),
                  p.push(c)));
              var k, T, R, H;
              for (H = ee, l & ue && (H |= re), k = 0, T = n.body.length; k < T; ++k)
                P &&
                  (k === 0 &&
                    (n.body[0].leadingComments &&
                      ((o = n.body[0].leadingComments[0].extendedRange),
                      (c = A.substring(o[0], o[1])),
                      c[0] ===
                        `
` && (p = ["{"])),
                    n.body[0].leadingComments || He(n.range[0], n.body[0].range[0], p)),
                  k > 0 &&
                    !n.body[k - 1].trailingComments &&
                    !n.body[k].leadingComments &&
                    He(n.body[k - 1].range[1], n.body[k].range[0], p)),
                  k === T - 1 && (H |= K),
                  n.body[k].leadingComments && P ? (R = E.generateStatement(n.body[k], H)) : (R = pe(E.generateStatement(n.body[k], H))),
                  p.push(R),
                  he(X(R).toString()) || (P && k < T - 1 && n.body[k + 1].leadingComments) || p.push(S),
                  P && k === T - 1 && (n.body[k].trailingComments || He(n.body[k].range[1], n.range[1], p));
            }),
            p.push(pe("}")),
            p
          );
        },
        BreakStatement: function (n, l) {
          return n.label ? "break " + n.label.name + this.semicolon(l) : "break" + this.semicolon(l);
        },
        ContinueStatement: function (n, l) {
          return n.label ? "continue " + n.label.name + this.semicolon(l) : "continue" + this.semicolon(l);
        },
        ClassBody: function (n, l) {
          var o = ["{", S],
            c = this;
          return (
            se(function (p) {
              var E, k;
              for (E = 0, k = n.body.length; E < k; ++E)
                o.push(p), o.push(c.generateExpression(n.body[E], r.Sequence, M)), E + 1 < k && o.push(S);
            }),
            he(X(o).toString()) || o.push(S),
            o.push(f),
            o.push("}"),
            o
          );
        },
        ClassDeclaration: function (n, l) {
          var o, c;
          return (
            (o = ["class"]),
            n.id && (o = U(o, this.generateExpression(n.id, r.Sequence, M))),
            n.superClass && ((c = U("extends", this.generateExpression(n.superClass, r.Unary, M))), (o = U(o, c))),
            o.push(y),
            o.push(this.generateStatement(n.body, we)),
            o
          );
        },
        DirectiveStatement: function (n, l) {
          return _.raw && n.raw ? n.raw + this.semicolon(l) : Rn(n.directive) + this.semicolon(l);
        },
        DoWhileStatement: function (n, l) {
          var o = U("do", this.maybeBlock(n.body, ee));
          return (
            (o = this.maybeBlockSuffix(n.body, o)),
            U(o, ["while" + y + "(", this.generateExpression(n.test, r.Sequence, M), ")" + this.semicolon(l)])
          );
        },
        CatchClause: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              var p;
              n.param
                ? ((o = ["catch" + y + "(", c.generateExpression(n.param, r.Sequence, M), ")"]),
                  n.guard && ((p = c.generateExpression(n.guard, r.Sequence, M)), o.splice(2, 0, " if ", p)))
                : (o = ["catch"]);
            }),
            o.push(this.maybeBlock(n.body, ee)),
            o
          );
        },
        DebuggerStatement: function (n, l) {
          return "debugger" + this.semicolon(l);
        },
        EmptyStatement: function (n, l) {
          return ";";
        },
        ExportDefaultDeclaration: function (n, l) {
          var o = ["export"],
            c;
          return (
            (c = l & K ? we : ee),
            (o = U(o, "default")),
            q(n.declaration)
              ? (o = U(o, this.generateStatement(n.declaration, c)))
              : (o = U(o, this.generateExpression(n.declaration, r.Assignment, M) + this.semicolon(l))),
            o
          );
        },
        ExportNamedDeclaration: function (n, l) {
          var o = ["export"],
            c,
            p = this;
          return (
            (c = l & K ? we : ee),
            n.declaration
              ? U(o, this.generateStatement(n.declaration, c))
              : (n.specifiers &&
                  (n.specifiers.length === 0
                    ? (o = U(o, "{" + y + "}"))
                    : n.specifiers[0].type === t.ExportBatchSpecifier
                    ? (o = U(o, this.generateExpression(n.specifiers[0], r.Sequence, M)))
                    : ((o = U(o, "{")),
                      se(function (E) {
                        var k, T;
                        for (o.push(S), k = 0, T = n.specifiers.length; k < T; ++k)
                          o.push(E), o.push(p.generateExpression(n.specifiers[k], r.Sequence, M)), k + 1 < T && o.push("," + S);
                      }),
                      he(X(o).toString()) || o.push(S),
                      o.push(f + "}")),
                  n.source
                    ? (o = U(o, ["from" + y, this.generateExpression(n.source, r.Sequence, M), this.semicolon(l)]))
                    : o.push(this.semicolon(l))),
                o)
          );
        },
        ExportAllDeclaration: function (n, l) {
          return ["export" + y, "*" + y, "from" + y, this.generateExpression(n.source, r.Sequence, M), this.semicolon(l)];
        },
        ExpressionStatement: function (n, l) {
          var o, c;
          function p(T) {
            var R;
            return T.slice(0, 5) !== "class"
              ? !1
              : ((R = T.charCodeAt(5)), R === 123 || u.code.isWhiteSpace(R) || u.code.isLineTerminator(R));
          }
          function E(T) {
            var R;
            return T.slice(0, 8) !== "function"
              ? !1
              : ((R = T.charCodeAt(8)), R === 40 || u.code.isWhiteSpace(R) || R === 42 || u.code.isLineTerminator(R));
          }
          function k(T) {
            var R, H, ce;
            if (T.slice(0, 5) !== "async" || !u.code.isWhiteSpace(T.charCodeAt(5))) return !1;
            for (H = 6, ce = T.length; H < ce && u.code.isWhiteSpace(T.charCodeAt(H)); ++H);
            return H === ce || T.slice(H, H + 8) !== "function"
              ? !1
              : ((R = T.charCodeAt(H + 8)), R === 40 || u.code.isWhiteSpace(R) || R === 42 || u.code.isLineTerminator(R));
          }
          return (
            (o = [this.generateExpression(n.expression, r.Sequence, M)]),
            (c = X(o).toString()),
            c.charCodeAt(0) === 123 ||
            p(c) ||
            E(c) ||
            k(c) ||
            (j && l & re && n.expression.type === t.Literal && typeof n.expression.value == "string")
              ? (o = ["(", o, ")" + this.semicolon(l)])
              : o.push(this.semicolon(l)),
            o
          );
        },
        ImportDeclaration: function (n, l) {
          var o,
            c,
            p = this;
          return n.specifiers.length === 0
            ? ["import", y, this.generateExpression(n.source, r.Sequence, M), this.semicolon(l)]
            : ((o = ["import"]),
              (c = 0),
              n.specifiers[c].type === t.ImportDefaultSpecifier &&
                ((o = U(o, [this.generateExpression(n.specifiers[c], r.Sequence, M)])), ++c),
              n.specifiers[c] &&
                (c !== 0 && o.push(","),
                n.specifiers[c].type === t.ImportNamespaceSpecifier
                  ? (o = U(o, [y, this.generateExpression(n.specifiers[c], r.Sequence, M)]))
                  : (o.push(y + "{"),
                    n.specifiers.length - c === 1
                      ? (o.push(y), o.push(this.generateExpression(n.specifiers[c], r.Sequence, M)), o.push(y + "}" + y))
                      : (se(function (E) {
                          var k, T;
                          for (o.push(S), k = c, T = n.specifiers.length; k < T; ++k)
                            o.push(E), o.push(p.generateExpression(n.specifiers[k], r.Sequence, M)), k + 1 < T && o.push("," + S);
                        }),
                        he(X(o).toString()) || o.push(S),
                        o.push(f + "}" + y)))),
              (o = U(o, ["from" + y, this.generateExpression(n.source, r.Sequence, M), this.semicolon(l)])),
              o);
        },
        VariableDeclarator: function (n, l) {
          var o = l & V ? M : Pe;
          return n.init
            ? [this.generateExpression(n.id, r.Assignment, o), y, "=", y, this.generateExpression(n.init, r.Assignment, o)]
            : this.generatePattern(n.id, r.Assignment, o);
        },
        VariableDeclaration: function (n, l) {
          var o,
            c,
            p,
            E,
            k,
            T = this;
          (o = [n.kind]), (k = l & V ? ee : vt);
          function R() {
            for (
              E = n.declarations[0],
                _.comment && E.leadingComments
                  ? (o.push(`
`),
                    o.push(pe(T.generateStatement(E, k))))
                  : (o.push(fe()), o.push(T.generateStatement(E, k))),
                c = 1,
                p = n.declarations.length;
              c < p;
              ++c
            )
              (E = n.declarations[c]),
                _.comment && E.leadingComments
                  ? (o.push("," + S), o.push(pe(T.generateStatement(E, k))))
                  : (o.push("," + y), o.push(T.generateStatement(E, k)));
          }
          return n.declarations.length > 1 ? se(R) : R(), o.push(this.semicolon(l)), o;
        },
        ThrowStatement: function (n, l) {
          return [U("throw", this.generateExpression(n.argument, r.Sequence, M)), this.semicolon(l)];
        },
        TryStatement: function (n, l) {
          var o, c, p, E;
          if (((o = ["try", this.maybeBlock(n.block, ee)]), (o = this.maybeBlockSuffix(n.block, o)), n.handlers))
            for (c = 0, p = n.handlers.length; c < p; ++c)
              (o = U(o, this.generateStatement(n.handlers[c], ee))),
                (n.finalizer || c + 1 !== p) && (o = this.maybeBlockSuffix(n.handlers[c].body, o));
          else {
            for (E = n.guardedHandlers || [], c = 0, p = E.length; c < p; ++c)
              (o = U(o, this.generateStatement(E[c], ee))), (n.finalizer || c + 1 !== p) && (o = this.maybeBlockSuffix(E[c].body, o));
            if (n.handler)
              if (Array.isArray(n.handler))
                for (c = 0, p = n.handler.length; c < p; ++c)
                  (o = U(o, this.generateStatement(n.handler[c], ee))),
                    (n.finalizer || c + 1 !== p) && (o = this.maybeBlockSuffix(n.handler[c].body, o));
              else (o = U(o, this.generateStatement(n.handler, ee))), n.finalizer && (o = this.maybeBlockSuffix(n.handler.body, o));
          }
          return n.finalizer && (o = U(o, ["finally", this.maybeBlock(n.finalizer, ee)])), o;
        },
        SwitchStatement: function (n, l) {
          var o,
            c,
            p,
            E,
            k,
            T = this;
          if (
            (se(function () {
              o = ["switch" + y + "(", T.generateExpression(n.discriminant, r.Sequence, M), ")" + y + "{" + S];
            }),
            n.cases)
          )
            for (k = ee, p = 0, E = n.cases.length; p < E; ++p)
              p === E - 1 && (k |= K), (c = pe(this.generateStatement(n.cases[p], k))), o.push(c), he(X(c).toString()) || o.push(S);
          return o.push(pe("}")), o;
        },
        SwitchCase: function (n, l) {
          var o,
            c,
            p,
            E,
            k,
            T = this;
          return (
            se(function () {
              for (
                n.test ? (o = [U("case", T.generateExpression(n.test, r.Sequence, M)), ":"]) : (o = ["default:"]),
                  p = 0,
                  E = n.consequent.length,
                  E && n.consequent[0].type === t.BlockStatement && ((c = T.maybeBlock(n.consequent[0], ee)), o.push(c), (p = 1)),
                  p !== E && !he(X(o).toString()) && o.push(S),
                  k = ee;
                p < E;
                ++p
              )
                p === E - 1 && l & K && (k |= K),
                  (c = pe(T.generateStatement(n.consequent[p], k))),
                  o.push(c),
                  p + 1 !== E && !he(X(c).toString()) && o.push(S);
            }),
            o
          );
        },
        IfStatement: function (n, l) {
          var o,
            c,
            p,
            E = this;
          return (
            se(function () {
              o = ["if" + y + "(", E.generateExpression(n.test, r.Sequence, M), ")"];
            }),
            (p = l & K),
            (c = ee),
            p && (c |= K),
            n.alternate
              ? (o.push(this.maybeBlock(n.consequent, ee)),
                (o = this.maybeBlockSuffix(n.consequent, o)),
                n.alternate.type === t.IfStatement
                  ? (o = U(o, ["else ", this.generateStatement(n.alternate, c)]))
                  : (o = U(o, U("else", this.maybeBlock(n.alternate, c)))))
              : o.push(this.maybeBlock(n.consequent, c)),
            o
          );
        },
        ForStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              (o = ["for" + y + "("]),
                n.init
                  ? n.init.type === t.VariableDeclaration
                    ? o.push(c.generateStatement(n.init, vt))
                    : (o.push(c.generateExpression(n.init, r.Sequence, Pe)), o.push(";"))
                  : o.push(";"),
                n.test && (o.push(y), o.push(c.generateExpression(n.test, r.Sequence, M))),
                o.push(";"),
                n.update && (o.push(y), o.push(c.generateExpression(n.update, r.Sequence, M))),
                o.push(")");
            }),
            o.push(this.maybeBlock(n.body, l & K ? we : ee)),
            o
          );
        },
        ForInStatement: function (n, l) {
          return this.generateIterationForStatement("in", n, l & K ? we : ee);
        },
        ForOfStatement: function (n, l) {
          return this.generateIterationForStatement("of", n, l & K ? we : ee);
        },
        LabeledStatement: function (n, l) {
          return [n.label.name + ":", this.maybeBlock(n.body, l & K ? we : ee)];
        },
        Program: function (n, l) {
          var o, c, p, E, k;
          for (
            E = n.body.length,
              o = [
                N && E > 0
                  ? `
`
                  : "",
              ],
              k = kn,
              p = 0;
            p < E;
            ++p
          )
            !N && p === E - 1 && (k |= K),
              P &&
                (p === 0 && (n.body[0].leadingComments || He(n.range[0], n.body[p].range[0], o)),
                p > 0 &&
                  !n.body[p - 1].trailingComments &&
                  !n.body[p].leadingComments &&
                  He(n.body[p - 1].range[1], n.body[p].range[0], o)),
              (c = pe(this.generateStatement(n.body[p], k))),
              o.push(c),
              p + 1 < E && !he(X(c).toString()) && ((P && n.body[p + 1].leadingComments) || o.push(S)),
              P && p === E - 1 && (n.body[p].trailingComments || He(n.body[p].range[1], n.range[1], o));
          return o;
        },
        FunctionDeclaration: function (n, l) {
          return [Ze(n, !0), "function", bt(n) || fe(), n.id ? ge(n.id) : "", this.generateFunctionBody(n)];
        },
        ReturnStatement: function (n, l) {
          return n.argument
            ? [U("return", this.generateExpression(n.argument, r.Sequence, M)), this.semicolon(l)]
            : ["return" + this.semicolon(l)];
        },
        WhileStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              o = ["while" + y + "(", c.generateExpression(n.test, r.Sequence, M), ")"];
            }),
            o.push(this.maybeBlock(n.body, l & K ? we : ee)),
            o
          );
        },
        WithStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              o = ["with" + y + "(", c.generateExpression(n.object, r.Sequence, M), ")"];
            }),
            o.push(this.maybeBlock(n.body, l & K ? we : ee)),
            o
          );
        },
      }),
      Nr(ae.prototype, ae.Statement),
      (ae.Expression = {
        SequenceExpression: function (n, l, o) {
          var c, p, E;
          for (r.Sequence < l && (o |= V), c = [], p = 0, E = n.expressions.length; p < E; ++p)
            c.push(this.generateExpression(n.expressions[p], r.Assignment, o)), p + 1 < E && c.push("," + y);
          return le(c, r.Sequence, l);
        },
        AssignmentExpression: function (n, l, o) {
          return this.generateAssignment(n.left, n.right, n.operator, l, o);
        },
        ArrowFunctionExpression: function (n, l, o) {
          return le(this.generateFunctionBody(n), r.ArrowFunction, l);
        },
        ConditionalExpression: function (n, l, o) {
          return (
            r.Conditional < l && (o |= V),
            le(
              [
                this.generateExpression(n.test, r.Coalesce, o),
                y + "?" + y,
                this.generateExpression(n.consequent, r.Assignment, o),
                y + ":" + y,
                this.generateExpression(n.alternate, r.Assignment, o),
              ],
              r.Conditional,
              l
            )
          );
        },
        LogicalExpression: function (n, l, o) {
          return n.operator === "??" && (o |= ve), this.BinaryExpression(n, l, o);
        },
        BinaryExpression: function (n, l, o) {
          var c, p, E, k, T, R;
          return (
            (k = i[n.operator]),
            (p = n.operator === "**" ? r.Postfix : k),
            (E = n.operator === "**" ? k : k + 1),
            k < l && (o |= V),
            (T = this.generateExpression(n.left, p, o)),
            (R = T.toString()),
            R.charCodeAt(R.length - 1) === 47 && u.code.isIdentifierPartES5(n.operator.charCodeAt(0))
              ? (c = [T, fe(), n.operator])
              : (c = U(T, n.operator)),
            (T = this.generateExpression(n.right, E, o)),
            (n.operator === "/" && T.toString().charAt(0) === "/") || (n.operator.slice(-1) === "<" && T.toString().slice(0, 3) === "!--")
              ? (c.push(fe()), c.push(T))
              : (c = U(c, T)),
            n.operator === "in" && !(o & V)
              ? ["(", c, ")"]
              : (n.operator === "||" || n.operator === "&&") && o & ve
              ? ["(", c, ")"]
              : le(c, k, l)
          );
        },
        CallExpression: function (n, l, o) {
          var c, p, E;
          for (
            c = [this.generateExpression(n.callee, r.Call, $e)], n.optional && c.push("?."), c.push("("), p = 0, E = n.arguments.length;
            p < E;
            ++p
          )
            c.push(this.generateExpression(n.arguments[p], r.Assignment, M)), p + 1 < E && c.push("," + y);
          return c.push(")"), o & Y ? le(c, r.Call, l) : ["(", c, ")"];
        },
        ChainExpression: function (n, l, o) {
          r.OptionalChaining < l && (o |= Y);
          var c = this.generateExpression(n.expression, r.OptionalChaining, o);
          return le(c, r.OptionalChaining, l);
        },
        NewExpression: function (n, l, o) {
          var c, p, E, k, T;
          if (
            ((p = n.arguments.length),
            (T = o & ie && !I && p === 0 ? Re : De),
            (c = U("new", this.generateExpression(n.callee, r.New, T))),
            !(o & ie) || I || p > 0)
          ) {
            for (c.push("("), E = 0, k = p; E < k; ++E)
              c.push(this.generateExpression(n.arguments[E], r.Assignment, M)), E + 1 < k && c.push("," + y);
            c.push(")");
          }
          return le(c, r.New, l);
        },
        MemberExpression: function (n, l, o) {
          var c, p;
          return (
            (c = [this.generateExpression(n.object, r.Call, o & Y ? $e : De)]),
            n.computed
              ? (n.optional && c.push("?."),
                c.push("["),
                c.push(this.generateExpression(n.property, r.Sequence, o & Y ? M : Re)),
                c.push("]"))
              : (!n.optional &&
                  n.object.type === t.Literal &&
                  typeof n.object.value == "number" &&
                  ((p = X(c).toString()),
                  p.indexOf(".") < 0 &&
                    !/[eExX]/.test(p) &&
                    u.code.isDecimalDigit(p.charCodeAt(p.length - 1)) &&
                    !(p.length >= 2 && p.charCodeAt(0) === 48) &&
                    c.push(" ")),
                c.push(n.optional ? "?." : "."),
                c.push(ge(n.property))),
            le(c, r.Member, l)
          );
        },
        MetaProperty: function (n, l, o) {
          var c;
          return (
            (c = []),
            c.push(typeof n.meta == "string" ? n.meta : ge(n.meta)),
            c.push("."),
            c.push(typeof n.property == "string" ? n.property : ge(n.property)),
            le(c, r.Member, l)
          );
        },
        UnaryExpression: function (n, l, o) {
          var c, p, E, k, T;
          return (
            (p = this.generateExpression(n.argument, r.Unary, M)),
            y === ""
              ? (c = U(n.operator, p))
              : ((c = [n.operator]),
                n.operator.length > 2
                  ? (c = U(c, p))
                  : ((k = X(c).toString()),
                    (T = k.charCodeAt(k.length - 1)),
                    (E = p.toString().charCodeAt(0)),
                    (((T === 43 || T === 45) && T === E) || (u.code.isIdentifierPartES5(T) && u.code.isIdentifierPartES5(E))) &&
                      c.push(fe()),
                    c.push(p))),
            le(c, r.Unary, l)
          );
        },
        YieldExpression: function (n, l, o) {
          var c;
          return (
            n.delegate ? (c = "yield*") : (c = "yield"),
            n.argument && (c = U(c, this.generateExpression(n.argument, r.Yield, M))),
            le(c, r.Yield, l)
          );
        },
        AwaitExpression: function (n, l, o) {
          var c = U(n.all ? "await*" : "await", this.generateExpression(n.argument, r.Await, M));
          return le(c, r.Await, l);
        },
        UpdateExpression: function (n, l, o) {
          return n.prefix
            ? le([n.operator, this.generateExpression(n.argument, r.Unary, M)], r.Unary, l)
            : le([this.generateExpression(n.argument, r.Postfix, M), n.operator], r.Postfix, l);
        },
        FunctionExpression: function (n, l, o) {
          var c = [Ze(n, !0), "function"];
          return n.id ? (c.push(bt(n) || fe()), c.push(ge(n.id))) : c.push(bt(n) || y), c.push(this.generateFunctionBody(n)), c;
        },
        ArrayPattern: function (n, l, o) {
          return this.ArrayExpression(n, l, o, !0);
        },
        ArrayExpression: function (n, l, o, c) {
          var p,
            E,
            k = this;
          return n.elements.length
            ? ((E = c ? !1 : n.elements.length > 1),
              (p = ["[", E ? S : ""]),
              se(function (T) {
                var R, H;
                for (R = 0, H = n.elements.length; R < H; ++R)
                  n.elements[R]
                    ? (p.push(E ? T : ""), p.push(k.generateExpression(n.elements[R], r.Assignment, M)))
                    : (E && p.push(T), R + 1 === H && p.push(",")),
                    R + 1 < H && p.push("," + (E ? S : y));
              }),
              E && !he(X(p).toString()) && p.push(S),
              p.push(E ? f : ""),
              p.push("]"),
              p)
            : "[]";
        },
        RestElement: function (n, l, o) {
          return "..." + this.generatePattern(n.argument);
        },
        ClassExpression: function (n, l, o) {
          var c, p;
          return (
            (c = ["class"]),
            n.id && (c = U(c, this.generateExpression(n.id, r.Sequence, M))),
            n.superClass && ((p = U("extends", this.generateExpression(n.superClass, r.Unary, M))), (c = U(c, p))),
            c.push(y),
            c.push(this.generateStatement(n.body, we)),
            c
          );
        },
        MethodDefinition: function (n, l, o) {
          var c, p;
          return (
            n.static ? (c = ["static" + y]) : (c = []),
            n.kind === "get" || n.kind === "set"
              ? (p = [U(n.kind, this.generatePropertyKey(n.key, n.computed)), this.generateFunctionBody(n.value)])
              : (p = [Vr(n), this.generatePropertyKey(n.key, n.computed), this.generateFunctionBody(n.value)]),
            U(c, p)
          );
        },
        Property: function (n, l, o) {
          return n.kind === "get" || n.kind === "set"
            ? [n.kind, fe(), this.generatePropertyKey(n.key, n.computed), this.generateFunctionBody(n.value)]
            : n.shorthand
            ? n.value.type === "AssignmentPattern"
              ? this.AssignmentPattern(n.value, r.Sequence, M)
              : this.generatePropertyKey(n.key, n.computed)
            : n.method
            ? [Vr(n), this.generatePropertyKey(n.key, n.computed), this.generateFunctionBody(n.value)]
            : [this.generatePropertyKey(n.key, n.computed), ":" + y, this.generateExpression(n.value, r.Assignment, M)];
        },
        ObjectExpression: function (n, l, o) {
          var c,
            p,
            E,
            k = this;
          return n.properties.length
            ? ((c = n.properties.length > 1),
              se(function () {
                E = k.generateExpression(n.properties[0], r.Sequence, M);
              }),
              !c && !In(X(E).toString())
                ? ["{", y, E, y, "}"]
                : (se(function (T) {
                    var R, H;
                    if (((p = ["{", S, T, E]), c))
                      for (p.push("," + S), R = 1, H = n.properties.length; R < H; ++R)
                        p.push(T), p.push(k.generateExpression(n.properties[R], r.Sequence, M)), R + 1 < H && p.push("," + S);
                  }),
                  he(X(p).toString()) || p.push(S),
                  p.push(f),
                  p.push("}"),
                  p))
            : "{}";
        },
        AssignmentPattern: function (n, l, o) {
          return this.generateAssignment(n.left, n.right, "=", l, o);
        },
        ObjectPattern: function (n, l, o) {
          var c,
            p,
            E,
            k,
            T,
            R = this;
          if (!n.properties.length) return "{}";
          if (((k = !1), n.properties.length === 1))
            (T = n.properties[0]), T.type === t.Property && T.value.type !== t.Identifier && (k = !0);
          else
            for (p = 0, E = n.properties.length; p < E; ++p)
              if (((T = n.properties[p]), T.type === t.Property && !T.shorthand)) {
                k = !0;
                break;
              }
          return (
            (c = ["{", k ? S : ""]),
            se(function (H) {
              var ce, qe;
              for (ce = 0, qe = n.properties.length; ce < qe; ++ce)
                c.push(k ? H : ""), c.push(R.generateExpression(n.properties[ce], r.Sequence, M)), ce + 1 < qe && c.push("," + (k ? S : y));
            }),
            k && !he(X(c).toString()) && c.push(S),
            c.push(k ? f : ""),
            c.push("}"),
            c
          );
        },
        ThisExpression: function (n, l, o) {
          return "this";
        },
        Super: function (n, l, o) {
          return "super";
        },
        Identifier: function (n, l, o) {
          return ge(n);
        },
        ImportDefaultSpecifier: function (n, l, o) {
          return ge(n.id || n.local);
        },
        ImportNamespaceSpecifier: function (n, l, o) {
          var c = ["*"],
            p = n.id || n.local;
          return p && c.push(y + "as" + fe() + ge(p)), c;
        },
        ImportSpecifier: function (n, l, o) {
          var c = n.imported,
            p = [c.name],
            E = n.local;
          return E && E.name !== c.name && p.push(fe() + "as" + fe() + ge(E)), p;
        },
        ExportSpecifier: function (n, l, o) {
          var c = n.local,
            p = [c.name],
            E = n.exported;
          return E && E.name !== c.name && p.push(fe() + "as" + fe() + ge(E)), p;
        },
        Literal: function (n, l, o) {
          var c;
          if (n.hasOwnProperty("raw") && v && _.raw)
            try {
              if (((c = v(n.raw).body[0].expression), c.type === t.Literal && c.value === n.value)) return n.raw;
            } catch {}
          return n.regex
            ? "/" + n.regex.pattern + "/" + n.regex.flags
            : typeof n.value == "bigint"
            ? n.value.toString() + "n"
            : n.bigint
            ? n.bigint + "n"
            : n.value === null
            ? "null"
            : typeof n.value == "string"
            ? Mn(n.value)
            : typeof n.value == "number"
            ? Tn(n.value)
            : typeof n.value == "boolean"
            ? n.value
              ? "true"
              : "false"
            : Ln(n.value);
        },
        GeneratorExpression: function (n, l, o) {
          return this.ComprehensionExpression(n, l, o);
        },
        ComprehensionExpression: function (n, l, o) {
          var c,
            p,
            E,
            k,
            T = this;
          return (
            (c = n.type === t.GeneratorExpression ? ["("] : ["["]),
            _.moz.comprehensionExpressionStartsWithAssignment && ((k = this.generateExpression(n.body, r.Assignment, M)), c.push(k)),
            n.blocks &&
              se(function () {
                for (p = 0, E = n.blocks.length; p < E; ++p)
                  (k = T.generateExpression(n.blocks[p], r.Sequence, M)),
                    p > 0 || _.moz.comprehensionExpressionStartsWithAssignment ? (c = U(c, k)) : c.push(k);
              }),
            n.filter && ((c = U(c, "if" + y)), (k = this.generateExpression(n.filter, r.Sequence, M)), (c = U(c, ["(", k, ")"]))),
            _.moz.comprehensionExpressionStartsWithAssignment || ((k = this.generateExpression(n.body, r.Assignment, M)), (c = U(c, k))),
            c.push(n.type === t.GeneratorExpression ? ")" : "]"),
            c
          );
        },
        ComprehensionBlock: function (n, l, o) {
          var c;
          return (
            n.left.type === t.VariableDeclaration
              ? (c = [n.left.kind, fe(), this.generateStatement(n.left.declarations[0], vt)])
              : (c = this.generateExpression(n.left, r.Call, M)),
            (c = U(c, n.of ? "of" : "in")),
            (c = U(c, this.generateExpression(n.right, r.Sequence, M))),
            ["for" + y + "(", c, ")"]
          );
        },
        SpreadElement: function (n, l, o) {
          return ["...", this.generateExpression(n.argument, r.Assignment, M)];
        },
        TaggedTemplateExpression: function (n, l, o) {
          var c = $e;
          o & Y || (c = De);
          var p = [this.generateExpression(n.tag, r.Call, c), this.generateExpression(n.quasi, r.Primary, yt)];
          return le(p, r.TaggedTemplate, l);
        },
        TemplateElement: function (n, l, o) {
          return n.value.raw;
        },
        TemplateLiteral: function (n, l, o) {
          var c, p, E;
          for (c = ["`"], p = 0, E = n.quasis.length; p < E; ++p)
            c.push(this.generateExpression(n.quasis[p], r.Primary, M)),
              p + 1 < E && (c.push("${" + y), c.push(this.generateExpression(n.expressions[p], r.Sequence, M)), c.push(y + "}"));
          return c.push("`"), c;
        },
        ModuleSpecifier: function (n, l, o) {
          return this.Literal(n, l, o);
        },
        ImportExpression: function (n, l, o) {
          return le(["import(", this.generateExpression(n.source, r.Assignment, M), ")"], r.Call, l);
        },
      }),
      Nr(ae.prototype, ae.Expression),
      (ae.prototype.generateExpression = function (n, l, o) {
        var c, p;
        return (
          (p = n.type || t.Property),
          _.verbatim && n.hasOwnProperty(_.verbatim) ? Bn(n, l) : ((c = this[p](n, l, o)), _.comment && (c = Mr(n, c)), X(c, n))
        );
      }),
      (ae.prototype.generateStatement = function (n, l) {
        var o, c;
        return (
          (o = this[n.type](n, l)),
          _.comment && (o = Mr(n, o)),
          (c = X(o).toString()),
          n.type === t.Program &&
            !N &&
            S === "" &&
            c.charAt(c.length - 1) ===
              `
` &&
            (o = w ? X(o).replaceRight(/\s+$/, "") : c.replace(/\s+$/, "")),
          X(o, n)
        );
      });
    function Dn(n) {
      var l;
      if (((l = new ae()), q(n))) return l.generateStatement(n, ee);
      if (W(n)) return l.generateExpression(n, r.Sequence, M);
      throw new Error("Unknown node type: " + n.type);
    }
    function jn(n, l) {
      var o = Lr(),
        c,
        p;
      return (
        l != null
          ? (typeof l.indent == "string" && (o.format.indent.style = l.indent),
            typeof l.base == "number" && (o.format.indent.base = l.base),
            (l = xt(o, l)),
            (d = l.format.indent.style),
            typeof l.base == "string" ? (f = l.base) : (f = je(d, l.format.indent.base)))
          : ((l = o), (d = l.format.indent.style), (f = je(d, l.format.indent.base))),
        (g = l.format.json),
        (m = l.format.renumber),
        (x = g ? !1 : l.format.hexadecimal),
        (C = g ? "double" : l.format.quotes),
        (b = l.format.escapeless),
        (S = l.format.newline),
        (y = l.format.space),
        l.format.compact && (S = y = d = f = ""),
        (I = l.format.parentheses),
        (O = l.format.semicolons),
        (N = l.format.safeConcatenation),
        (j = l.directive),
        (v = g ? null : l.parse),
        (w = l.sourceMap),
        (A = l.sourceCode),
        (P = l.format.preserveBlankLines && A !== null),
        (_ = l),
        w && (e.browser ? (s = at.sourceMap.SourceNode) : (s = os().SourceNode)),
        (c = Dn(n)),
        w
          ? ((p = c.toStringWithSourceMap({ file: l.file, sourceRoot: l.sourceMapRoot })),
            l.sourceContent && p.map.setSourceContent(l.sourceMap, l.sourceContent),
            l.sourceMapWithCode ? p : p.map.toString())
          : ((p = { code: c.toString(), map: null }), l.sourceMapWithCode ? p : p.code)
      );
    }
    (B = {
      indent: { style: "", base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (F = Lr().format),
      (e.version = Es.version),
      (e.generate = jn),
      (e.attachComments = a.attachComments),
      (e.Precedence = xt({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = B),
      (e.FORMAT_DEFAULTS = F);
  })();
})(bi);
var er = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments",
  },
  tr =
    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
  Cs = { 5: tr, "5module": tr + " export import", 6: tr + " const class extends export import super" },
  ws = /^in(stanceof)?$/,
  pr =
    "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
  wi =
    "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
  As = new RegExp("[" + pr + "]"),
  ks = new RegExp("[" + pr + wi + "]");
pr = wi = null;
var Ai = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19,
    35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25,
    71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35,
    349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2,
    0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21,
    2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0,
    2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37,
    22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47,
    17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106,
    6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6,
    2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67,
    8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0,
    2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541,
    1507, 4938,
  ],
  Ps = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3,
    46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2,
    10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14,
    166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21,
    2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6,
    2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function ir(e, t) {
  for (var r = 65536, i = 0; i < t.length; i += 2) {
    if (((r += t[i]), r > e)) return !1;
    if (((r += t[i + 1]), r >= e)) return !0;
  }
}
function Fe(e, t) {
  return e < 65
    ? e === 36
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && As.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : ir(e, Ai);
}
function Ye(e, t) {
  return e < 48
    ? e === 36
    : e < 58
    ? !0
    : e < 65
    ? !1
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && ks.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : ir(e, Ai) || ir(e, Ps);
}
var J = function (t, r) {
  r === void 0 && (r = {}),
    (this.label = t),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function xe(e, t) {
  return new J(e, { beforeExpr: !0, binop: t });
}
var be = { beforeExpr: !0 },
  ye = { startsExpr: !0 },
  dr = {};
function Q(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (dr[e] = new J(e, t));
}
var h = {
    num: new J("num", ye),
    regexp: new J("regexp", ye),
    string: new J("string", ye),
    name: new J("name", ye),
    eof: new J("eof"),
    bracketL: new J("[", { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new J("]"),
    braceL: new J("{", { beforeExpr: !0, startsExpr: !0 }),
    braceR: new J("}"),
    parenL: new J("(", { beforeExpr: !0, startsExpr: !0 }),
    parenR: new J(")"),
    comma: new J(",", be),
    semi: new J(";", be),
    colon: new J(":", be),
    dot: new J("."),
    question: new J("?", be),
    questionDot: new J("?."),
    arrow: new J("=>", be),
    template: new J("template"),
    invalidTemplate: new J("invalidTemplate"),
    ellipsis: new J("...", be),
    backQuote: new J("`", ye),
    dollarBraceL: new J("${", { beforeExpr: !0, startsExpr: !0 }),
    eq: new J("=", { beforeExpr: !0, isAssign: !0 }),
    assign: new J("_=", { beforeExpr: !0, isAssign: !0 }),
    incDec: new J("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new J("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: xe("||", 1),
    logicalAND: xe("&&", 2),
    bitwiseOR: xe("|", 3),
    bitwiseXOR: xe("^", 4),
    bitwiseAND: xe("&", 5),
    equality: xe("==/!=/===/!==", 6),
    relational: xe("</>/<=/>=", 7),
    bitShift: xe("<</>>/>>>", 8),
    plusMin: new J("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
    modulo: xe("%", 10),
    star: xe("*", 10),
    slash: xe("/", 10),
    starstar: new J("**", { beforeExpr: !0 }),
    coalesce: xe("??", 1),
    _break: Q("break"),
    _case: Q("case", be),
    _catch: Q("catch"),
    _continue: Q("continue"),
    _debugger: Q("debugger"),
    _default: Q("default", be),
    _do: Q("do", { isLoop: !0, beforeExpr: !0 }),
    _else: Q("else", be),
    _finally: Q("finally"),
    _for: Q("for", { isLoop: !0 }),
    _function: Q("function", ye),
    _if: Q("if"),
    _return: Q("return", be),
    _switch: Q("switch"),
    _throw: Q("throw", be),
    _try: Q("try"),
    _var: Q("var"),
    _const: Q("const"),
    _while: Q("while", { isLoop: !0 }),
    _with: Q("with"),
    _new: Q("new", { beforeExpr: !0, startsExpr: !0 }),
    _this: Q("this", ye),
    _super: Q("super", ye),
    _class: Q("class", ye),
    _extends: Q("extends", be),
    _export: Q("export"),
    _import: Q("import", ye),
    _null: Q("null", ye),
    _true: Q("true", ye),
    _false: Q("false", ye),
    _in: Q("in", { beforeExpr: !0, binop: 7 }),
    _instanceof: Q("instanceof", { beforeExpr: !0, binop: 7 }),
    _typeof: Q("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: Q("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: Q("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  _e = /\r\n?|\n|\u2028|\u2029/,
  ot = new RegExp(_e.source, "g");
function pt(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
var ki = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Se = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Pi = Object.prototype,
  Is = Pi.hasOwnProperty,
  Ts = Pi.toString;
function It(e, t) {
  return Is.call(e, t);
}
var ri =
  Array.isArray ||
  function (e) {
    return Ts.call(e) === "[object Array]";
  };
function Ue(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var ut = function (t, r) {
  (this.line = t), (this.column = r);
};
ut.prototype.offset = function (t) {
  return new ut(this.line, this.column + t);
};
var Tt = function (t, r, i) {
  (this.start = r), (this.end = i), t.sourceFile !== null && (this.source = t.sourceFile);
};
function Ii(e, t) {
  for (var r = 1, i = 0; ; ) {
    ot.lastIndex = i;
    var s = ot.exec(e);
    if (s && s.index < t) ++r, (i = s.index + s[0].length);
    else return new ut(r, t - i);
  }
}
var nr = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function Ls(e) {
  var t = {};
  for (var r in nr) t[r] = e && It(e, r) ? e[r] : nr[r];
  if ((t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), ri(t.onToken))) {
    var i = t.onToken;
    t.onToken = function (s) {
      return i.push(s);
    };
  }
  return ri(t.onComment) && (t.onComment = Ns(t, t.onComment)), t;
}
function Ns(e, t) {
  return function (r, i, s, a, u, f) {
    var d = { type: r ? "Block" : "Line", value: i, start: s, end: a };
    e.locations && (d.loc = new Tt(this, u, f)), e.ranges && (d.range = [s, a]), t.push(d);
  };
}
var lt = 1,
  dt = 2,
  mr = lt | dt,
  Ti = 4,
  Li = 8,
  Ni = 16,
  Oi = 32,
  Ri = 64,
  Mi = 128;
function gr(e, t) {
  return dt | (e ? Ti : 0) | (t ? Li : 0);
}
var ii = 0,
  yr = 1,
  Le = 2,
  Fi = 3,
  Vi = 4,
  Bi = 5,
  oe = function (t, r, i) {
    (this.options = t = Ls(t)),
      (this.sourceFile = t.sourceFile),
      (this.keywords = Ue(Cs[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]));
    var s = "";
    if (t.allowReserved !== !0) {
      for (var a = t.ecmaVersion; !(s = er[a]); a--);
      t.sourceType === "module" && (s += " await");
    }
    this.reservedWords = Ue(s);
    var u = (s ? s + " " : "") + er.strict;
    (this.reservedWordsStrict = Ue(u)),
      (this.reservedWordsStrictBind = Ue(u + " " + er.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      i
        ? ((this.pos = i),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              i - 1
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(_e).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = h.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = t.sourceType === "module"),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(lt),
      (this.regexpState = null);
  },
  We = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
oe.prototype.parse = function () {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
We.inFunction.get = function () {
  return (this.currentVarScope().flags & dt) > 0;
};
We.inGenerator.get = function () {
  return (this.currentVarScope().flags & Li) > 0;
};
We.inAsync.get = function () {
  return (this.currentVarScope().flags & Ti) > 0;
};
We.allowSuper.get = function () {
  return (this.currentThisScope().flags & Ri) > 0;
};
We.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Mi) > 0;
};
We.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
oe.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & dt) > 0;
};
oe.extend = function () {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
  return i;
};
oe.parse = function (t, r) {
  return new this(r, t).parse();
};
oe.parseExpressionAt = function (t, r, i) {
  var s = new this(i, t, r);
  return s.nextToken(), s.parseExpression();
};
oe.tokenizer = function (t, r) {
  return new this(r, t);
};
Object.defineProperties(oe.prototype, We);
var me = oe.prototype,
  Os = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
me.strictDirective = function (e) {
  for (;;) {
    (Se.lastIndex = e), (e += Se.exec(this.input)[0].length);
    var t = Os.exec(this.input.slice(e));
    if (!t) return !1;
    if ((t[1] || t[2]) === "use strict") {
      Se.lastIndex = e + t[0].length;
      var r = Se.exec(this.input),
        i = r.index + r[0].length,
        s = this.input.charAt(i);
      return (
        s === ";" || s === "}" || (_e.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || (s === "!" && this.input.charAt(i + 1) === "=")))
      );
    }
    (e += t[0].length), (Se.lastIndex = e), (e += Se.exec(this.input)[0].length), this.input[e] === ";" && e++;
  }
};
me.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
me.isContextual = function (e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
me.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
me.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
me.canInsertSemicolon = function () {
  return this.type === h.eof || this.type === h.braceR || _e.test(this.input.slice(this.lastTokEnd, this.start));
};
me.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
me.semicolon = function () {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
me.afterTrailingComma = function (e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
me.expect = function (e) {
  this.eat(e) || this.unexpected();
};
me.unexpected = function (e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Lt() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
me.checkPatternErrors = function (e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
me.checkExpressionErrors = function (e, t) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    i = e.doubleProto;
  if (!t) return r >= 0 || i >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"),
    i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
};
me.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, "Yield expression cannot be a default value"),
    this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
me.isSimpleAssignTarget = function (e) {
  return e.type === "ParenthesizedExpression"
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === "Identifier" || e.type === "MemberExpression";
};
var G = oe.prototype;
G.parseTopLevel = function (e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var i = 0, s = Object.keys(this.undefinedExports); i < s.length; i += 1) {
      var a = s[i];
      this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), (e.sourceType = this.options.sourceType), this.finishNode(e, "Program");
};
var vr = { kind: "loop" },
  Rs = { kind: "switch" };
G.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
  Se.lastIndex = this.pos;
  var t = Se.exec(this.input),
    r = this.pos + t[0].length,
    i = this.input.charCodeAt(r);
  if (i === 91) return !0;
  if (e) return !1;
  if (i === 123) return !0;
  if (Fe(i, !0)) {
    for (var s = r + 1; Ye(this.input.charCodeAt(s), !0); ) ++s;
    var a = this.input.slice(r, s);
    if (!ws.test(a)) return !0;
  }
  return !1;
};
G.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
  Se.lastIndex = this.pos;
  var e = Se.exec(this.input),
    t = this.pos + e[0].length;
  return (
    !_e.test(this.input.slice(this.pos, t)) &&
    this.input.slice(t, t + 8) === "function" &&
    (t + 8 === this.input.length || !Ye(this.input.charAt(t + 8)))
  );
};
G.parseStatement = function (e, t, r) {
  var i = this.type,
    s = this.startNode(),
    a;
  switch ((this.isLet(e) && ((i = h._var), (a = "let")), i)) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(s, i.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(s);
    case h._do:
      return this.parseDoStatement(s);
    case h._for:
      return this.parseForStatement(s);
    case h._function:
      return (
        e && (this.strict || (e !== "if" && e !== "label")) && this.options.ecmaVersion >= 6 && this.unexpected(),
        this.parseFunctionStatement(s, !1, !e)
      );
    case h._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case h._if:
      return this.parseIfStatement(s);
    case h._return:
      return this.parseReturnStatement(s);
    case h._switch:
      return this.parseSwitchStatement(s);
    case h._throw:
      return this.parseThrowStatement(s);
    case h._try:
      return this.parseTryStatement(s);
    case h._const:
    case h._var:
      return (a = a || this.value), e && a !== "var" && this.unexpected(), this.parseVarStatement(s, a);
    case h._while:
      return this.parseWhileStatement(s);
    case h._with:
      return this.parseWithStatement(s);
    case h.braceL:
      return this.parseBlock(!0, s);
    case h.semi:
      return this.parseEmptyStatement(s);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && i === h._import) {
        Se.lastIndex = this.pos;
        var u = Se.exec(this.input),
          f = this.pos + u[0].length,
          d = this.input.charCodeAt(f);
        if (d === 40 || d === 46) return this.parseExpressionStatement(s, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"),
          this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")),
        i === h._import ? this.parseImport(s) : this.parseExport(s, r)
      );
    default:
      if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var g = this.value,
        m = this.parseExpression();
      return i === h.name && m.type === "Identifier" && this.eat(h.colon)
        ? this.parseLabeledStatement(s, g, m, e)
        : this.parseExpressionStatement(s, m);
  }
};
G.parseBreakContinueStatement = function (e, t) {
  var r = t === "break";
  this.next(),
    this.eat(h.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== h.name
      ? this.unexpected()
      : ((e.label = this.parseIdent()), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var s = this.labels[i];
    if ((e.label == null || s.name === e.label.name) && ((s.kind != null && (r || s.kind === "loop")) || (e.label && r))) break;
  }
  return (
    i === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
  );
};
G.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
G.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(vr),
    (e.body = this.parseStatement("do")),
    this.labels.pop(),
    this.expect(h._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(),
    this.finishNode(e, "DoWhileStatement")
  );
};
G.parseForStatement = function (e) {
  this.next();
  var t =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual("await")
      ? this.lastTokStart
      : -1;
  if ((this.labels.push(vr), this.enterScope(0), this.expect(h.parenL), this.type === h.semi))
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var i = this.startNode(),
      s = r ? "let" : this.value;
    return (
      this.next(),
      this.parseVar(i, !0, s),
      this.finishNode(i, "VariableDeclaration"),
      (this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && i.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
          this.parseForIn(e, i))
        : (t > -1 && this.unexpected(t), this.parseFor(e, i))
    );
  }
  var a = new Lt(),
    u = this.parseExpression(!0, a);
  return this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))
    ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
      this.toAssignable(u, !1, a),
      this.checkLVal(u),
      this.parseForIn(e, u))
    : (this.checkExpressionErrors(a, !0), t > -1 && this.unexpected(t), this.parseFor(e, u));
};
G.parseFunctionStatement = function (e, t, r) {
  return this.next(), this.parseFunction(e, nt | (r ? 0 : sr), !1, t);
};
G.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement("if")),
    (e.alternate = this.eat(h._else) ? this.parseStatement("if") : null),
    this.finishNode(e, "IfStatement")
  );
};
G.parseReturnStatement = function (e) {
  return (
    !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(h.semi) || this.insertSemicolon() ? (e.argument = null) : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, "ReturnStatement")
  );
};
G.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(h.braceL),
    this.labels.push(Rs),
    this.enterScope(0);
  for (var t, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var i = this.type === h._case;
      t && this.finishNode(t, "SwitchCase"),
        e.cases.push((t = this.startNode())),
        (t.consequent = []),
        this.next(),
        i
          ? (t.test = this.parseExpression())
          : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), (r = !0), (t.test = null)),
        this.expect(h.colon);
    } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
G.parseThrowStatement = function (e) {
  return (
    this.next(),
    _e.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, "ThrowStatement")
  );
};
var Ms = [];
G.parseTryStatement = function (e) {
  if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === h._catch)) {
    var t = this.startNode();
    if ((this.next(), this.eat(h.parenL))) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === "Identifier";
      this.enterScope(r ? Oi : 0), this.checkLVal(t.param, r ? Vi : Le), this.expect(h.parenR);
    } else this.options.ecmaVersion < 10 && this.unexpected(), (t.param = null), this.enterScope(0);
    (t.body = this.parseBlock(!1)), this.exitScope(), (e.handler = this.finishNode(t, "CatchClause"));
  }
  return (
    (e.finalizer = this.eat(h._finally) ? this.parseBlock() : null),
    !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"),
    this.finishNode(e, "TryStatement")
  );
};
G.parseVarStatement = function (e, t) {
  return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
G.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(vr),
    (e.body = this.parseStatement("while")),
    this.labels.pop(),
    this.finishNode(e, "WhileStatement")
  );
};
G.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement("with")),
    this.finishNode(e, "WithStatement")
  );
};
G.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
G.parseLabeledStatement = function (e, t, r, i) {
  for (var s = 0, a = this.labels; s < a.length; s += 1) {
    var u = a[s];
    u.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var f = this.type.isLoop ? "loop" : this.type === h._switch ? "switch" : null, d = this.labels.length - 1; d >= 0; d--) {
    var g = this.labels[d];
    if (g.statementStart === e.start) (g.statementStart = this.start), (g.kind = f);
    else break;
  }
  return (
    this.labels.push({ name: t, kind: f, statementStart: this.start }),
    (e.body = this.parseStatement(i ? (i.indexOf("label") === -1 ? i + "label" : i) : "label")),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, "LabeledStatement")
  );
};
G.parseExpressionStatement = function (e, t) {
  return (e.expression = t), this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
G.parseBlock = function (e, t, r) {
  for (
    e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(h.braceL), e && this.enterScope(0);
    this.type !== h.braceR;

  ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
G.parseFor = function (e, t) {
  return (
    (e.init = t),
    this.expect(h.semi),
    (e.test = this.type === h.semi ? null : this.parseExpression()),
    this.expect(h.semi),
    (e.update = this.type === h.parenR ? null : this.parseExpression()),
    this.expect(h.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, "ForStatement")
  );
};
G.parseForIn = function (e, t) {
  var r = this.type === h._in;
  return (
    this.next(),
    t.type === "VariableDeclaration" &&
    t.declarations[0].init != null &&
    (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier")
      ? this.raise(t.start, (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
      : t.type === "AssignmentPattern" && this.raise(t.start, "Invalid left-hand side in for-loop"),
    (e.left = t),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(h.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
  );
};
G.parseVar = function (e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (
      (this.parseVarId(i, r),
      this.eat(h.eq)
        ? (i.init = this.parseMaybeAssign(t))
        : r === "const" && !(this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))
        ? this.unexpected()
        : i.id.type !== "Identifier" && !(t && (this.type === h._in || this.isContextual("of")))
        ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value")
        : (i.init = null),
      e.declarations.push(this.finishNode(i, "VariableDeclarator")),
      !this.eat(h.comma))
    )
      break;
  }
  return e;
};
G.parseVarId = function (e, t) {
  (e.id = this.parseBindingAtom()), this.checkLVal(e.id, t === "var" ? yr : Le, !1);
};
var nt = 1,
  sr = 2,
  Di = 4;
G.parseFunction = function (e, t, r, i) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
      (this.type === h.star && t & sr && this.unexpected(), (e.generator = this.eat(h.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!i),
    t & nt &&
      ((e.id = t & Di && this.type !== h.name ? null : this.parseIdent()),
      e.id && !(t & sr) && this.checkLVal(e.id, this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? yr : Le) : Fi));
  var s = this.yieldPos,
    a = this.awaitPos,
    u = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(gr(e.async, e.generator)),
    t & nt || (e.id = this.type === h.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = s),
    (this.awaitPos = a),
    (this.awaitIdentPos = u),
    this.finishNode(e, t & nt ? "FunctionDeclaration" : "FunctionExpression")
  );
};
G.parseFunctionParams = function (e) {
  this.expect(h.parenL),
    (e.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8)),
    this.checkYieldAwaitInDefaultParams();
};
G.parseClass = function (e, t) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.startNode(),
    s = !1;
  for (i.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a &&
      (i.body.push(a),
      a.type === "MethodDefinition" &&
        a.kind === "constructor" &&
        (s && this.raise(a.start, "Duplicate constructor in the same class"), (s = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(i, "ClassBody")),
    this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
  );
};
G.parseClassElement = function (e) {
  var t = this;
  if (this.eat(h.semi)) return null;
  var r = this.startNode(),
    i = function (d, g) {
      g === void 0 && (g = !1);
      var m = t.start,
        x = t.startLoc;
      return t.eatContextual(d)
        ? t.type !== h.parenL && (!g || !t.canInsertSemicolon())
          ? !0
          : (r.key && t.unexpected(),
            (r.computed = !1),
            (r.key = t.startNodeAt(m, x)),
            (r.key.name = d),
            t.finishNode(r.key, "Identifier"),
            !1)
        : !1;
    };
  (r.kind = "method"), (r.static = i("static"));
  var s = this.eat(h.star),
    a = !1;
  s ||
    (this.options.ecmaVersion >= 8 && i("async", !0)
      ? ((a = !0), (s = this.options.ecmaVersion >= 9 && this.eat(h.star)))
      : i("get")
      ? (r.kind = "get")
      : i("set") && (r.kind = "set")),
    r.key || this.parsePropertyName(r);
  var u = r.key,
    f = !1;
  return (
    !r.computed &&
    !r.static &&
    ((u.type === "Identifier" && u.name === "constructor") || (u.type === "Literal" && u.value === "constructor"))
      ? (r.kind !== "method" && this.raise(u.start, "Constructor can't have get/set modifier"),
        s && this.raise(u.start, "Constructor can't be a generator"),
        a && this.raise(u.start, "Constructor can't be an async method"),
        (r.kind = "constructor"),
        (f = e))
      : r.static &&
        u.type === "Identifier" &&
        u.name === "prototype" &&
        this.raise(u.start, "Classes may not have a static property named prototype"),
    this.parseClassMethod(r, s, a, f),
    r.kind === "get" && r.value.params.length !== 0 && this.raiseRecoverable(r.value.start, "getter should have no params"),
    r.kind === "set" && r.value.params.length !== 1 && this.raiseRecoverable(r.value.start, "setter should have exactly one param"),
    r.kind === "set" &&
      r.value.params[0].type === "RestElement" &&
      this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"),
    r
  );
};
G.parseClassMethod = function (e, t, r, i) {
  return (e.value = this.parseMethod(t, r, i)), this.finishNode(e, "MethodDefinition");
};
G.parseClassId = function (e, t) {
  this.type === h.name ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, Le, !1)) : (t === !0 && this.unexpected(), (e.id = null));
};
G.parseClassSuper = function (e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts() : null;
};
G.parseExport = function (e, t) {
  if ((this.next(), this.eat(h.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? ((e.exported = this.parseIdent(!0)), this.checkExport(t, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual("from"),
      this.type !== h.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, "ExportAllDeclaration")
    );
  if (this.eat(h._default)) {
    this.checkExport(t, "default", this.lastTokStart);
    var r;
    if (this.type === h._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(), r && this.next(), (e.declaration = this.parseFunction(i, nt | Di, !1, r));
    } else if (this.type === h._class) {
      var s = this.startNode();
      e.declaration = this.parseClass(s, "nullableID");
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === "VariableDeclaration"
        ? this.checkVariableExport(t, e.declaration.declarations)
        : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (((e.declaration = null), (e.specifiers = this.parseExportSpecifiers(t)), this.eatContextual("from")))
      this.type !== h.string && this.unexpected(), (e.source = this.parseExprAtom());
    else {
      for (var a = 0, u = e.specifiers; a < u.length; a += 1) {
        var f = u[a];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
G.checkExport = function (e, t, r) {
  e && (It(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), (e[t] = !0));
};
G.checkPatternExport = function (e, t) {
  var r = t.type;
  if (r === "Identifier") this.checkExport(e, t.name, t.start);
  else if (r === "ObjectPattern")
    for (var i = 0, s = t.properties; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(e, a);
    }
  else if (r === "ArrayPattern")
    for (var u = 0, f = t.elements; u < f.length; u += 1) {
      var d = f[u];
      d && this.checkPatternExport(e, d);
    }
  else
    r === "Property"
      ? this.checkPatternExport(e, t.value)
      : r === "AssignmentPattern"
      ? this.checkPatternExport(e, t.left)
      : r === "RestElement"
      ? this.checkPatternExport(e, t.argument)
      : r === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
};
G.checkVariableExport = function (e, t) {
  if (e)
    for (var r = 0, i = t; r < i.length; r += 1) {
      var s = i[r];
      this.checkPatternExport(e, s.id);
    }
};
G.shouldParseExportStatement = function () {
  return (
    this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
G.parseExportSpecifiers = function (e) {
  var t = [],
    r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var i = this.startNode();
    (i.local = this.parseIdent(!0)),
      (i.exported = this.eatContextual("as") ? this.parseIdent(!0) : i.local),
      this.checkExport(e, i.exported.name, i.exported.start),
      t.push(this.finishNode(i, "ExportSpecifier"));
  }
  return t;
};
G.parseImport = function (e) {
  return (
    this.next(),
    this.type === h.string
      ? ((e.specifiers = Ms), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual("from"),
        (e.source = this.type === h.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, "ImportDeclaration")
  );
};
G.parseImportSpecifiers = function () {
  var e = [],
    t = !0;
  if (this.type === h.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()), this.checkLVal(r.local, Le), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(h.comma))
    )
      return e;
  }
  if (this.type === h.star) {
    var i = this.startNode();
    return (
      this.next(),
      this.expectContextual("as"),
      (i.local = this.parseIdent()),
      this.checkLVal(i.local, Le),
      e.push(this.finishNode(i, "ImportNamespaceSpecifier")),
      e
    );
  }
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t) t = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var s = this.startNode();
    (s.imported = this.parseIdent(!0)),
      this.eatContextual("as") ? (s.local = this.parseIdent()) : (this.checkUnreserved(s.imported), (s.local = s.imported)),
      this.checkLVal(s.local, Le),
      e.push(this.finishNode(s, "ImportSpecifier"));
  }
  return e;
};
G.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
};
G.isDirectiveCandidate = function (e) {
  return (
    e.type === "ExpressionStatement" &&
    e.expression.type === "Literal" &&
    typeof e.expression.value == "string" &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var Ne = oe.prototype;
Ne.toAssignable = function (e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        (e.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
        for (var i = 0, s = e.properties; i < s.length; i += 1) {
          var a = s[i];
          this.toAssignable(a, t),
            a.type === "RestElement" &&
              (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") &&
              this.raise(a.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        (e.type = "ArrayPattern"), r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        (e.type = "RestElement"),
          this.toAssignable(e.argument, t),
          e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."),
          (e.type = "AssignmentPattern"),
          delete e.operator,
          this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t) break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
Ne.toAssignableList = function (e, t) {
  for (var r = e.length, i = 0; i < r; i++) {
    var s = e[i];
    s && this.toAssignable(s, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 &&
      t &&
      a &&
      a.type === "RestElement" &&
      a.argument.type !== "Identifier" &&
      this.unexpected(a.argument.start);
  }
  return e;
};
Ne.parseSpread = function (e) {
  var t = this.startNode();
  return this.next(), (t.argument = this.parseMaybeAssign(!1, e)), this.finishNode(t, "SpreadElement");
};
Ne.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, "RestElement")
  );
};
Ne.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return this.next(), (e.elements = this.parseBindingList(h.bracketR, !0, !0)), this.finishNode(e, "ArrayPattern");
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Ne.parseBindingList = function (e, t, r) {
  for (var i = [], s = !0; !this.eat(e); )
    if ((s ? (s = !1) : this.expect(h.comma), t && this.type === h.comma)) i.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === h.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a),
          i.push(a),
          this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"),
          this.expect(e);
        break;
      } else {
        var u = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(u), i.push(u);
      }
    }
  return i;
};
Ne.parseBindingListItem = function (e) {
  return e;
};
Ne.parseMaybeDefault = function (e, t, r) {
  if (((r = r || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(h.eq))) return r;
  var i = this.startNodeAt(e, t);
  return (i.left = r), (i.right = this.parseMaybeAssign()), this.finishNode(i, "AssignmentPattern");
};
Ne.checkLVal = function (e, t, r) {
  switch ((t === void 0 && (t = ii), e.type)) {
    case "Identifier":
      t === Le && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"),
        r && (It(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), (r[e.name] = !0)),
        t !== ii && t !== Bi && this.declareName(e.name, t, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      t && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var i = 0, s = e.properties; i < s.length; i += 1) {
        var a = s[i];
        this.checkLVal(a, t, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, r);
      break;
    case "ArrayPattern":
      for (var u = 0, f = e.elements; u < f.length; u += 1) {
        var d = f[u];
        d && this.checkLVal(d, t, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var z = oe.prototype;
z.checkPropClash = function (e, t, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var i = e.key,
      s;
    switch (i.type) {
      case "Identifier":
        s = i.name;
        break;
      case "Literal":
        s = String(i.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      s === "__proto__" &&
        a === "init" &&
        (t.proto &&
          (r ? r.doubleProto < 0 && (r.doubleProto = i.start) : this.raiseRecoverable(i.start, "Redefinition of __proto__ property")),
        (t.proto = !0));
      return;
    }
    s = "$" + s;
    var u = t[s];
    if (u) {
      var f;
      a === "init" ? (f = (this.strict && u.init) || u.get || u.set) : (f = u.init || u[a]),
        f && this.raiseRecoverable(i.start, "Redefinition of property");
    } else u = t[s] = { init: !1, get: !1, set: !1 };
    u[a] = !0;
  }
};
z.parseExpression = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var a = this.startNodeAt(r, i);
    for (a.expressions = [s]; this.eat(h.comma); ) a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, "SequenceExpression");
  }
  return s;
};
z.parseMaybeAssign = function (e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var i = !1,
    s = -1,
    a = -1;
  t ? ((s = t.parenthesizedAssign), (a = t.trailingComma), (t.parenthesizedAssign = t.trailingComma = -1)) : ((t = new Lt()), (i = !0));
  var u = this.start,
    f = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start);
  var d = this.parseMaybeConditional(e, t);
  if ((r && (d = r.call(this, d, u, f)), this.type.isAssign)) {
    var g = this.startNodeAt(u, f);
    return (
      (g.operator = this.value),
      (g.left = this.type === h.eq ? this.toAssignable(d, !1, t) : d),
      i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
      t.shorthandAssign >= g.left.start && (t.shorthandAssign = -1),
      this.checkLVal(d),
      this.next(),
      (g.right = this.parseMaybeAssign(e)),
      this.finishNode(g, "AssignmentExpression")
    );
  } else i && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), a > -1 && (t.trailingComma = a), d;
};
z.parseMaybeConditional = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) return s;
  if (this.eat(h.question)) {
    var a = this.startNodeAt(r, i);
    return (
      (a.test = s),
      (a.consequent = this.parseMaybeAssign()),
      this.expect(h.colon),
      (a.alternate = this.parseMaybeAssign(e)),
      this.finishNode(a, "ConditionalExpression")
    );
  }
  return s;
};
z.parseExprOps = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || (s.start === r && s.type === "ArrowFunctionExpression") ? s : this.parseExprOp(s, r, i, -1, e);
};
z.parseExprOp = function (e, t, r, i, s) {
  var a = this.type.binop;
  if (a != null && (!s || this.type !== h._in) && a > i) {
    var u = this.type === h.logicalOR || this.type === h.logicalAND,
      f = this.type === h.coalesce;
    f && (a = h.logicalAND.binop);
    var d = this.value;
    this.next();
    var g = this.start,
      m = this.startLoc,
      x = this.parseExprOp(this.parseMaybeUnary(null, !1), g, m, a, s),
      C = this.buildBinary(t, r, e, x, d, u || f);
    return (
      ((u && this.type === h.coalesce) || (f && (this.type === h.logicalOR || this.type === h.logicalAND))) &&
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"),
      this.parseExprOp(C, t, r, i, s)
    );
  }
  return e;
};
z.buildBinary = function (e, t, r, i, s, a) {
  var u = this.startNodeAt(e, t);
  return (u.left = r), (u.operator = s), (u.right = i), this.finishNode(u, a ? "LogicalExpression" : "BinaryExpression");
};
z.parseMaybeUnary = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s;
  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)))
    (s = this.parseAwait()), (t = !0);
  else if (this.type.prefix) {
    var a = this.startNode(),
      u = this.type === h.incDec;
    (a.operator = this.value),
      (a.prefix = !0),
      this.next(),
      (a.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      u
        ? this.checkLVal(a.argument)
        : this.strict && a.operator === "delete" && a.argument.type === "Identifier"
        ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode")
        : (t = !0),
      (s = this.finishNode(a, u ? "UpdateExpression" : "UnaryExpression"));
  } else {
    if (((s = this.parseExprSubscripts(e)), this.checkExpressionErrors(e))) return s;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, i);
      (f.operator = this.value),
        (f.prefix = !1),
        (f.argument = s),
        this.checkLVal(s),
        this.next(),
        (s = this.finishNode(f, "UpdateExpression"));
    }
  }
  return !t && this.eat(h.starstar) ? this.buildBinary(r, i, s, this.parseMaybeUnary(null, !1), "**", !1) : s;
};
z.parseExprSubscripts = function (e) {
  var t = this.start,
    r = this.startLoc,
    i = this.parseExprAtom(e);
  if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return i;
  var s = this.parseSubscripts(i, t, r);
  return (
    e &&
      s.type === "MemberExpression" &&
      (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)),
    s
  );
};
z.parseSubscripts = function (e, t, r, i) {
  for (
    var s =
        this.options.ecmaVersion >= 8 &&
        e.type === "Identifier" &&
        e.name === "async" &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      a = !1;
    ;

  ) {
    var u = this.parseSubscript(e, t, r, i, s, a);
    if ((u.optional && (a = !0), u === e || u.type === "ArrowFunctionExpression")) {
      if (a) {
        var f = this.startNodeAt(t, r);
        (f.expression = u), (u = this.finishNode(f, "ChainExpression"));
      }
      return u;
    }
    e = u;
  }
};
z.parseSubscript = function (e, t, r, i, s, a) {
  var u = this.options.ecmaVersion >= 11,
    f = u && this.eat(h.questionDot);
  i && f && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var d = this.eat(h.bracketL);
  if (d || (f && this.type !== h.parenL && this.type !== h.backQuote) || this.eat(h.dot)) {
    var g = this.startNodeAt(t, r);
    (g.object = e),
      (g.property = d ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never")),
      (g.computed = !!d),
      d && this.expect(h.bracketR),
      u && (g.optional = f),
      (e = this.finishNode(g, "MemberExpression"));
  } else if (!i && this.eat(h.parenL)) {
    var m = new Lt(),
      x = this.yieldPos,
      C = this.awaitPos,
      b = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var S = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, m);
    if (s && !f && !this.canInsertSemicolon() && this.eat(h.arrow))
      return (
        this.checkPatternErrors(m, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"),
        (this.yieldPos = x),
        (this.awaitPos = C),
        (this.awaitIdentPos = b),
        this.parseArrowExpression(this.startNodeAt(t, r), S, !0)
      );
    this.checkExpressionErrors(m, !0),
      (this.yieldPos = x || this.yieldPos),
      (this.awaitPos = C || this.awaitPos),
      (this.awaitIdentPos = b || this.awaitIdentPos);
    var y = this.startNodeAt(t, r);
    (y.callee = e), (y.arguments = S), u && (y.optional = f), (e = this.finishNode(y, "CallExpression"));
  } else if (this.type === h.backQuote) {
    (f || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var I = this.startNodeAt(t, r);
    (I.tag = e), (I.quasi = this.parseTemplate({ isTagged: !0 })), (e = this.finishNode(I, "TaggedTemplateExpression"));
  }
  return e;
};
z.parseExprAtom = function (e) {
  this.type === h.slash && this.readRegexp();
  var t,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return (
        this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
        (t = this.startNode()),
        this.next(),
        this.type === h.parenL && !this.allowDirectSuper && this.raise(t.start, "super() call outside constructor of a subclass"),
        this.type !== h.dot && this.type !== h.bracketL && this.type !== h.parenL && this.unexpected(),
        this.finishNode(t, "Super")
      );
    case h._this:
      return (t = this.startNode()), this.next(), this.finishNode(t, "ThisExpression");
    case h.name:
      var i = this.start,
        s = this.startLoc,
        a = this.containsEsc,
        u = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && u.name === "async" && !this.canInsertSemicolon() && this.eat(h._function))
        return this.parseFunction(this.startNodeAt(i, s), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow)) return this.parseArrowExpression(this.startNodeAt(i, s), [u], !1);
        if (this.options.ecmaVersion >= 8 && u.name === "async" && this.type === h.name && !a)
          return (
            (u = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(i, s), [u], !0)
          );
      }
      return u;
    case h.regexp:
      var f = this.value;
      return (t = this.parseLiteral(f.value)), (t.regex = { pattern: f.pattern, flags: f.flags }), t;
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return (
        (t = this.startNode()),
        (t.value = this.type === h._null ? null : this.type === h._true),
        (t.raw = this.type.keyword),
        this.next(),
        this.finishNode(t, "Literal")
      );
    case h.parenL:
      var d = this.start,
        g = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(g) && (e.parenthesizedAssign = d),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = d)),
        g
      );
    case h.bracketL:
      return (
        (t = this.startNode()), this.next(), (t.elements = this.parseExprList(h.bracketR, !0, !0, e)), this.finishNode(t, "ArrayExpression")
      );
    case h.braceL:
      return this.parseObj(!1, e);
    case h._function:
      return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
z.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(!0);
  switch (this.type) {
    case h.parenL:
      return this.parseDynamicImport(e);
    case h.dot:
      return (e.meta = t), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
z.parseDynamicImport = function (e) {
  if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(h.parenR))) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
z.parseImportMeta = function (e) {
  this.next();
  var t = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"),
    t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
    this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
    this.finishNode(e, "MetaProperty")
  );
};
z.parseLiteral = function (e) {
  var t = this.startNode();
  return (
    (t.value = e),
    (t.raw = this.input.slice(this.start, this.end)),
    t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
    this.next(),
    this.finishNode(t, "Literal")
  );
};
z.parseParenExpression = function () {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
z.parseParenAndDistinguishExpression = function (e) {
  var t = this.start,
    r = this.startLoc,
    i,
    s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start,
      u = this.startLoc,
      f = [],
      d = !0,
      g = !1,
      m = new Lt(),
      x = this.yieldPos,
      C = this.awaitPos,
      b;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if ((d ? (d = !1) : this.expect(h.comma), s && this.afterTrailingComma(h.parenR, !0))) {
        g = !0;
        break;
      } else if (this.type === h.ellipsis) {
        (b = this.start),
          f.push(this.parseParenItem(this.parseRestBinding())),
          this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      } else f.push(this.parseMaybeAssign(!1, m, this.parseParenItem));
    var S = this.start,
      y = this.startLoc;
    if ((this.expect(h.parenR), e && !this.canInsertSemicolon() && this.eat(h.arrow)))
      return (
        this.checkPatternErrors(m, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = x),
        (this.awaitPos = C),
        this.parseParenArrowList(t, r, f)
      );
    (!f.length || g) && this.unexpected(this.lastTokStart),
      b && this.unexpected(b),
      this.checkExpressionErrors(m, !0),
      (this.yieldPos = x || this.yieldPos),
      (this.awaitPos = C || this.awaitPos),
      f.length > 1 ? ((i = this.startNodeAt(a, u)), (i.expressions = f), this.finishNodeAt(i, "SequenceExpression", S, y)) : (i = f[0]);
  } else i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var I = this.startNodeAt(t, r);
    return (I.expression = i), this.finishNode(I, "ParenthesizedExpression");
  } else return i;
};
z.parseParenItem = function (e) {
  return e;
};
z.parseParenArrowList = function (e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var Fs = [];
z.parseNew = function () {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(),
    t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"),
      r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
      this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"),
      this.finishNode(e, "MetaProperty")
    );
  }
  var i = this.start,
    s = this.startLoc,
    a = this.type === h._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), i, s, !0)),
    a && e.callee.type === "ImportExpression" && this.raise(i, "Cannot use new with import()"),
    this.eat(h.parenL) ? (e.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1)) : (e.arguments = Fs),
    this.finishNode(e, "NewExpression")
  );
};
z.parseTemplateElement = function (e) {
  var t = e.isTagged,
    r = this.startNode();
  return (
    this.type === h.invalidTemplate
      ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === h.backQuote),
    this.finishNode(r, "TemplateElement")
  );
};
z.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var i = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [i]; !i.tail; )
    this.type === h.eof && this.raise(this.pos, "Unterminated template literal"),
      this.expect(h.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(h.braceR),
      r.quasis.push((i = this.parseTemplateElement({ isTagged: t })));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
z.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === "Identifier" &&
    e.key.name === "async" &&
    (this.type === h.name ||
      this.type === h.num ||
      this.type === h.string ||
      this.type === h.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === h.star)) &&
    !_e.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
z.parseObj = function (e, t) {
  var r = this.startNode(),
    i = !0,
    s = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (i) i = !1;
    else if ((this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))) break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, s, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
z.parseProperty = function (e, t) {
  var r = this.startNode(),
    i,
    s,
    a,
    u;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"),
        this.finishNode(r, "RestElement"))
      : (this.type === h.parenL &&
          t &&
          (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
          t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, t)),
        this.type === h.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
        this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1), (r.shorthand = !1), (e || t) && ((a = this.start), (u = this.startLoc)), e || (i = this.eat(h.star)));
  var f = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !f && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r)
      ? ((s = !0), (i = this.options.ecmaVersion >= 9 && this.eat(h.star)), this.parsePropertyName(r, t))
      : (s = !1),
    this.parsePropertyValue(r, e, i, s, a, u, t, f),
    this.finishNode(r, "Property")
  );
};
z.parsePropertyValue = function (e, t, r, i, s, a, u, f) {
  if (((r || i) && this.type === h.colon && this.unexpected(), this.eat(h.colon)))
    (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u)), (e.kind = "init");
  else if (this.options.ecmaVersion >= 6 && this.type === h.parenL)
    t && this.unexpected(), (e.kind = "init"), (e.method = !0), (e.value = this.parseMethod(r, i));
  else if (
    !t &&
    !f &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === "Identifier" &&
    (e.key.name === "get" || e.key.name === "set") &&
    this.type !== h.comma &&
    this.type !== h.braceR &&
    this.type !== h.eq
  ) {
    (r || i) && this.unexpected(), (e.kind = e.key.name), this.parsePropertyName(e), (e.value = this.parseMethod(!1));
    var d = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== d) {
      var g = e.value.start;
      e.kind === "get"
        ? this.raiseRecoverable(g, "getter should have no params")
        : this.raiseRecoverable(g, "setter should have exactly one param");
    } else
      e.kind === "set" &&
        e.value.params[0].type === "RestElement" &&
        this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
      ? ((r || i) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s),
        (e.kind = "init"),
        t
          ? (e.value = this.parseMaybeDefault(s, a, e.key))
          : this.type === h.eq && u
          ? (u.shorthandAssign < 0 && (u.shorthandAssign = this.start), (e.value = this.parseMaybeDefault(s, a, e.key)))
          : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
z.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL)) return (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(h.bracketR), e.key;
    e.computed = !1;
  }
  return (e.key =
    this.type === h.num || this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"));
};
z.initFunction = function (e) {
  (e.id = null), this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
z.parseMethod = function (e, t, r) {
  var i = this.startNode(),
    s = this.yieldPos,
    a = this.awaitPos,
    u = this.awaitIdentPos;
  return (
    this.initFunction(i),
    this.options.ecmaVersion >= 6 && (i.generator = e),
    this.options.ecmaVersion >= 8 && (i.async = !!t),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(gr(t, i.generator) | Ri | (r ? Mi : 0)),
    this.expect(h.parenL),
    (i.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8)),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(i, !1, !0),
    (this.yieldPos = s),
    (this.awaitPos = a),
    (this.awaitIdentPos = u),
    this.finishNode(i, "FunctionExpression")
  );
};
z.parseArrowExpression = function (e, t, r) {
  var i = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.enterScope(gr(r, !1) | Ni),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(t, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = i),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(e, "ArrowFunctionExpression")
  );
};
z.parseFunctionBody = function (e, t, r) {
  var i = t && this.type !== h.braceL,
    s = this.strict,
    a = !1;
  if (i) (e.body = this.parseMaybeAssign()), (e.expression = !0), this.checkParams(e, !1);
  else {
    var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!s || u) &&
      ((a = this.strictDirective(this.end)),
      a && u && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var f = this.labels;
    (this.labels = []),
      a && (this.strict = !0),
      this.checkParams(e, !s && !a && !t && !r && this.isSimpleParamList(e.params)),
      this.strict && e.id && this.checkLVal(e.id, Bi),
      (e.body = this.parseBlock(!1, void 0, a && !s)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = f);
  }
  this.exitScope();
};
z.isSimpleParamList = function (e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var i = r[t];
    if (i.type !== "Identifier") return !1;
  }
  return !0;
};
z.checkParams = function (e, t) {
  for (var r = {}, i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    this.checkLVal(a, yr, t ? null : r);
  }
};
z.parseExprList = function (e, t, r, i) {
  for (var s = [], a = !0; !this.eat(e); ) {
    if (a) a = !1;
    else if ((this.expect(h.comma), t && this.afterTrailingComma(e))) break;
    var u = void 0;
    r && this.type === h.comma
      ? (u = null)
      : this.type === h.ellipsis
      ? ((u = this.parseSpread(i)), i && this.type === h.comma && i.trailingComma < 0 && (i.trailingComma = this.start))
      : (u = this.parseMaybeAssign(!1, i)),
      s.push(u);
  }
  return s;
};
z.checkUnreserved = function (e) {
  var t = e.start,
    r = e.end,
    i = e.name;
  if (
    (this.inGenerator && i === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
    this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
    this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"),
    !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1))
  ) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(i) &&
      (!this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
      this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
  }
};
z.parseIdent = function (e, t) {
  var r = this.startNode();
  return (
    this.type === h.name
      ? (r.name = this.value)
      : this.type.keyword
      ? ((r.name = this.type.keyword),
        (r.name === "class" || r.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) &&
          this.context.pop())
      : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, "Identifier"),
    e || (this.checkUnreserved(r), r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)),
    r
  );
};
z.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return (
    this.next(),
    this.type === h.semi || this.canInsertSemicolon() || (this.type !== h.star && !this.type.startsExpr)
      ? ((t.delegate = !1), (t.argument = null))
      : ((t.delegate = this.eat(h.star)), (t.argument = this.parseMaybeAssign(e))),
    this.finishNode(t, "YieldExpression")
  );
};
z.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), (e.argument = this.parseMaybeUnary(null, !1)), this.finishNode(e, "AwaitExpression");
};
var wt = oe.prototype;
wt.raise = function (e, t) {
  var r = Ii(this.input, e);
  t += " (" + r.line + ":" + r.column + ")";
  var i = new SyntaxError(t);
  throw ((i.pos = e), (i.loc = r), (i.raisedAt = this.pos), i);
};
wt.raiseRecoverable = wt.raise;
wt.curPosition = function () {
  if (this.options.locations) return new ut(this.curLine, this.pos - this.lineStart);
};
var Be = oe.prototype,
  Vs = function (t) {
    (this.flags = t), (this.var = []), (this.lexical = []), (this.functions = []);
  };
Be.enterScope = function (e) {
  this.scopeStack.push(new Vs(e));
};
Be.exitScope = function () {
  this.scopeStack.pop();
};
Be.treatFunctionsAsVarInScope = function (e) {
  return e.flags & dt || (!this.inModule && e.flags & lt);
};
Be.declareName = function (e, t, r) {
  var i = !1;
  if (t === Le) {
    var s = this.currentScope();
    (i = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1),
      s.lexical.push(e),
      this.inModule && s.flags & lt && delete this.undefinedExports[e];
  } else if (t === Vi) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === Fi) {
    var u = this.currentScope();
    this.treatFunctionsAsVar ? (i = u.lexical.indexOf(e) > -1) : (i = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1),
      u.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var d = this.scopeStack[f];
      if (
        (d.lexical.indexOf(e) > -1 && !(d.flags & Oi && d.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(d) && d.functions.indexOf(e) > -1)
      ) {
        i = !0;
        break;
      }
      if ((d.var.push(e), this.inModule && d.flags & lt && delete this.undefinedExports[e], d.flags & mr)) break;
    }
  i && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
Be.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Be.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
Be.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & mr) return t;
  }
};
Be.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & mr && !(t.flags & Ni)) return t;
  }
};
var xr = function (t, r, i) {
    (this.type = ""),
      (this.start = r),
      (this.end = 0),
      t.options.locations && (this.loc = new Tt(t, i)),
      t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
      t.options.ranges && (this.range = [r, 0]);
  },
  Nt = oe.prototype;
Nt.startNode = function () {
  return new xr(this, this.start, this.startLoc);
};
Nt.startNodeAt = function (e, t) {
  return new xr(this, e, t);
};
function ji(e, t, r, i) {
  return (e.type = t), (e.end = r), this.options.locations && (e.loc.end = i), this.options.ranges && (e.range[1] = r), e;
}
Nt.finishNode = function (e, t) {
  return ji.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Nt.finishNodeAt = function (e, t, r, i) {
  return ji.call(this, e, t, r, i);
};
var Ce = function (t, r, i, s, a) {
    (this.token = t), (this.isExpr = !!r), (this.preserveSpace = !!i), (this.override = s), (this.generator = !!a);
  },
  ne = {
    b_stat: new Ce("{", !1),
    b_expr: new Ce("{", !0),
    b_tmpl: new Ce("${", !1),
    p_stat: new Ce("(", !1),
    p_expr: new Ce("(", !0),
    q_tmpl: new Ce("`", !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new Ce("function", !1),
    f_expr: new Ce("function", !0),
    f_expr_gen: new Ce("function", !0, !1, null, !0),
    f_gen: new Ce("function", !1, !1, null, !0),
  },
  Ot = oe.prototype;
Ot.initialContext = function () {
  return [ne.b_stat];
};
Ot.braceIsBlock = function (e) {
  var t = this.curContext();
  return t === ne.f_expr || t === ne.f_stat
    ? !0
    : e === h.colon && (t === ne.b_stat || t === ne.b_expr)
    ? !t.isExpr
    : e === h._return || (e === h.name && this.exprAllowed)
    ? _e.test(this.input.slice(this.lastTokEnd, this.start))
    : e === h._else || e === h.semi || e === h.eof || e === h.parenR || e === h.arrow
    ? !0
    : e === h.braceL
    ? t === ne.b_stat
    : e === h._var || e === h._const || e === h.name
    ? !1
    : !this.exprAllowed;
};
Ot.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function") return t.generator;
  }
  return !1;
};
Ot.updateContext = function (e) {
  var t,
    r = this.type;
  r.keyword && e === h.dot ? (this.exprAllowed = !1) : (t = r.updateContext) ? t.call(this, e) : (this.exprAllowed = r.beforeExpr);
};
h.parenR.updateContext = h.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === ne.b_stat && this.curContext().token === "function" && (e = this.context.pop()), (this.exprAllowed = !e.isExpr);
};
h.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? ne.b_stat : ne.b_expr), (this.exprAllowed = !0);
};
h.dollarBraceL.updateContext = function () {
  this.context.push(ne.b_tmpl), (this.exprAllowed = !0);
};
h.parenL.updateContext = function (e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? ne.p_stat : ne.p_expr), (this.exprAllowed = !0);
};
h.incDec.updateContext = function () {};
h._function.updateContext = h._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== h.semi &&
  e !== h._else &&
  !(e === h._return && _e.test(this.input.slice(this.lastTokEnd, this.start))) &&
  !((e === h.colon || e === h.braceL) && this.curContext() === ne.b_stat)
    ? this.context.push(ne.f_expr)
    : this.context.push(ne.f_stat),
    (this.exprAllowed = !1);
};
h.backQuote.updateContext = function () {
  this.curContext() === ne.q_tmpl ? this.context.pop() : this.context.push(ne.q_tmpl), (this.exprAllowed = !1);
};
h.star.updateContext = function (e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === ne.f_expr ? (this.context[t] = ne.f_expr_gen) : (this.context[t] = ne.f_gen);
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function (e) {
  var t = !1;
  this.options.ecmaVersion >= 6 &&
    e !== h.dot &&
    ((this.value === "of" && !this.exprAllowed) || (this.value === "yield" && this.inGeneratorContext())) &&
    (t = !0),
    (this.exprAllowed = t);
};
var qi =
    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
  Ui = qi + " Extended_Pictographic",
  Bs = Ui,
  Ds = { 9: qi, 10: Ui, 11: Bs },
  ni =
    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
  Gi =
    "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
  Wi = Gi + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
  js = Wi + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
  qs = { 9: Gi, 10: Wi, 11: js },
  zi = {};
function br(e) {
  var t = (zi[e] = { binary: Ue(Ds[e] + " " + ni), nonBinary: { General_Category: Ue(ni), Script: Ue(qs[e]) } });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
br(9);
br(10);
br(11);
var D = oe.prototype,
  Oe = function (t) {
    (this.parser = t),
      (this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "")),
      (this.unicodeProperties = zi[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
      (this.source = ""),
      (this.flags = ""),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ""),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
Oe.prototype.reset = function (t, r, i) {
  var s = i.indexOf("u") !== -1;
  (this.start = t | 0),
    (this.source = r + ""),
    (this.flags = i),
    (this.switchU = s && this.parser.options.ecmaVersion >= 6),
    (this.switchN = s && this.parser.options.ecmaVersion >= 9);
};
Oe.prototype.raise = function (t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Oe.prototype.at = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    s = i.length;
  if (t >= s) return -1;
  var a = i.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s) return a;
  var u = i.charCodeAt(t + 1);
  return u >= 56320 && u <= 57343 ? (a << 10) + u - 56613888 : a;
};
Oe.prototype.nextIndex = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    s = i.length;
  if (t >= s) return s;
  var a = i.charCodeAt(t),
    u;
  return !(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (u = i.charCodeAt(t + 1)) < 56320 || u > 57343 ? t + 1 : t + 2;
};
Oe.prototype.current = function (t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Oe.prototype.lookahead = function (t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Oe.prototype.advance = function (t) {
  t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t));
};
Oe.prototype.eat = function (t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
function At(e) {
  return e <= 65535 ? String.fromCharCode(e) : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
D.validateRegExpFlags = function (e) {
  for (var t = e.validFlags, r = e.flags, i = 0; i < r.length; i++) {
    var s = r.charAt(i);
    t.indexOf(s) === -1 && this.raise(e.start, "Invalid regular expression flag"),
      r.indexOf(s, i + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
};
D.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && ((e.switchN = !0), this.regexp_pattern(e));
};
D.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ""),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
    e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var i = r[t];
    e.groupNames.indexOf(i) === -1 && e.raise("Invalid named capture referenced");
  }
};
D.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
};
D.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
D.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
    ? (this.regexp_eatQuantifier(e), !0)
    : !1;
};
D.regexp_eatAssertion = function (e) {
  var t = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if ((this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33)))
      return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), (e.lastAssertionIsQuantifiable = !r), !0;
  }
  return (e.pos = t), !1;
};
D.regexp_eatQuantifier = function (e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
};
D.regexp_eatQuantifierPrefix = function (e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
};
D.regexp_eatBracedQuantifier = function (e, t) {
  var r = e.pos;
  if (e.eat(123)) {
    var i = 0,
      s = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((i = e.lastIntValue), e.eat(44) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue), e.eat(125))
    )
      return s !== -1 && s < i && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = r);
  }
  return !1;
};
D.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
D.regexp_eatReverseSolidusAtomEscape = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = t;
  }
  return !1;
};
D.regexp_eatUncapturingGroup = function (e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
D.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise("Unterminated group");
  }
  return !1;
};
D.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
D.regexp_eatInvalidBracedQuantifier = function (e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
D.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current();
  return $i(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
function $i(e) {
  return e === 36 || (e >= 40 && e <= 43) || e === 46 || e === 63 || (e >= 91 && e <= 94) || (e >= 123 && e <= 125);
}
D.regexp_eatPatternCharacters = function (e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !$i(r); ) e.advance();
  return e.pos !== t;
};
D.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124
    ? (e.advance(), !0)
    : !1;
};
D.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
D.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ""), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
D.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
    for (e.lastStringValue += At(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); ) e.lastStringValue += At(e.lastIntValue);
    return !0;
  }
  return !1;
};
D.regexp_eatRegExpIdentifierStart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue),
    Us(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function Us(e) {
  return Fe(e, !0) || e === 36 || e === 95;
}
D.regexp_eatRegExpIdentifierPart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue),
    Gs(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function Gs(e) {
  return Ye(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
D.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
D.regexp_eatBackReference = function (e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU) return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = t;
  }
  return !1;
};
D.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
D.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
D.regexp_eatCControlLetter = function (e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = t;
  }
  return !1;
};
D.regexp_eatZero = function (e) {
  return e.current() === 48 && !Rt(e.lookahead()) ? ((e.lastIntValue = 0), e.advance(), !0) : !1;
};
D.regexp_eatControlEscape = function (e) {
  var t = e.current();
  return t === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : t === 110
    ? ((e.lastIntValue = 10), e.advance(), !0)
    : t === 118
    ? ((e.lastIntValue = 11), e.advance(), !0)
    : t === 102
    ? ((e.lastIntValue = 12), e.advance(), !0)
    : t === 114
    ? ((e.lastIntValue = 13), e.advance(), !0)
    : !1;
};
D.regexp_eatControlLetter = function (e) {
  var t = e.current();
  return Hi(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
function Hi(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
D.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  t === void 0 && (t = !1);
  var r = e.pos,
    i = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var s = e.lastIntValue;
      if (i && s >= 55296 && s <= 56319) {
        var a = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var u = e.lastIntValue;
          if (u >= 56320 && u <= 57343) return (e.lastIntValue = (s - 55296) * 1024 + (u - 56320) + 65536), !0;
        }
        (e.pos = a), (e.lastIntValue = s);
      }
      return !0;
    }
    if (i && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Ws(e.lastIntValue)) return !0;
    i && e.raise("Invalid unicode escape"), (e.pos = r);
  }
  return !1;
};
function Ws(e) {
  return e >= 0 && e <= 1114111;
}
D.regexp_eatIdentityEscape = function (e) {
  if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? ((e.lastIntValue = 47), !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
D.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
D.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current();
  if (zs(t)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (((e.lastIntValue = -1), e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))) return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function zs(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
D.regexp_eatUnicodePropertyValueExpression = function (e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, i), !0;
    }
  }
  if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s), !0;
  }
  return !1;
};
D.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
  It(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"),
    e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
D.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
};
D.regexp_eatUnicodePropertyName = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; Qi((t = e.current())); ) (e.lastStringValue += At(t)), e.advance();
  return e.lastStringValue !== "";
};
function Qi(e) {
  return Hi(e) || e === 95;
}
D.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; $s((t = e.current())); ) (e.lastStringValue += At(t)), e.advance();
  return e.lastStringValue !== "";
};
function $s(e) {
  return Qi(e) || Rt(e);
}
D.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
D.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
D.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"),
        t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
D.regexp_eatClassAtom = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || Ji(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
D.regexp_eatClassEscape = function (e) {
  var t = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
D.regexp_eatClassControlLetter = function (e) {
  var t = e.current();
  return Rt(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
D.regexp_eatHexEscapeSequence = function (e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise("Invalid escape"), (e.pos = t);
  }
  return !1;
};
D.regexp_eatDecimalDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Rt((r = e.current())); ) (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== t;
};
function Rt(e) {
  return e >= 48 && e <= 57;
}
D.regexp_eatHexDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Yi((r = e.current())); ) (e.lastIntValue = 16 * e.lastIntValue + Ki(r)), e.advance();
  return e.pos !== t;
};
function Yi(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function Ki(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
D.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue) : (e.lastIntValue = t * 8 + r);
    } else e.lastIntValue = t;
    return !0;
  }
  return !1;
};
D.regexp_eatOctalDigit = function (e) {
  var t = e.current();
  return Ji(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1);
};
function Ji(e) {
  return e >= 48 && e <= 55;
}
D.regexp_eatFixedHexDigits = function (e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var s = e.current();
    if (!Yi(s)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + Ki(s)), e.advance();
  }
  return !0;
};
var Sr = function (t) {
    (this.type = t.type),
      (this.value = t.value),
      (this.start = t.start),
      (this.end = t.end),
      t.options.locations && (this.loc = new Tt(t, t.startLoc, t.endLoc)),
      t.options.ranges && (this.range = [t.start, t.end]);
  },
  $ = oe.prototype;
$.next = function (e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword),
    this.options.onToken && this.options.onToken(new Sr(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
$.getToken = function () {
  return this.next(), new Sr(this);
};
typeof Symbol < "u" &&
  ($[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var t = e.getToken();
        return { done: t.type === h.eof, value: t };
      },
    };
  });
$.curContext = function () {
  return this.context[this.context.length - 1];
};
$.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(h.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
$.readToken = function (e) {
  return Fe(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
$.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
$.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    t = this.pos,
    r = this.input.indexOf("*/", (this.pos += 2));
  if ((r === -1 && this.raise(this.pos - 2, "Unterminated comment"), (this.pos = r + 2), this.options.locations)) {
    ot.lastIndex = t;
    for (var i; (i = ot.exec(this.input)) && i.index < this.pos; ) ++this.curLine, (this.lineStart = i.index + i[0].length);
  }
  this.options.onComment && this.options.onComment(!0, this.input.slice(t + 2, r), t, this.pos, e, this.curPosition());
};
$.skipLineComment = function (e) {
  for (
    var t = this.pos, r = this.options.onComment && this.curPosition(), i = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !pt(i);

  )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, r, this.curPosition());
};
$.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && ki.test(String.fromCharCode(e)))) ++this.pos;
        else break e;
    }
  }
};
$.finishToken = function (e, t) {
  (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = t), this.updateContext(r);
};
$.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46
    ? ((this.pos += 3), this.finishToken(h.ellipsis))
    : (++this.pos, this.finishToken(h.dot));
};
$.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.slash, 1);
};
$.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1,
    i = e === 42 ? h.star : h.modulo;
  return (
    this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, (i = h.starstar), (t = this.input.charCodeAt(this.pos + 2))),
    t === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(i, r)
  );
};
$.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
$.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
$.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e
    ? t === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 || _e.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(h.incDec, 2)
    : t === 61
    ? this.finishOp(h.assign, 2)
    : this.finishOp(h.plusMin, 1);
};
$.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return t === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(h.bitShift, r))
    : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45
    ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    : (t === 61 && (r = 2), this.finishOp(h.relational, r));
};
$.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61
    ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
    : e === 61 && t === 62 && this.options.ecmaVersion >= 6
    ? ((this.pos += 2), this.finishToken(h.arrow))
    : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
$.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61) return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
$.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(h.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(h.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + _r(e) + "'");
};
$.finishOp = function (e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return (this.pos += t), this.finishToken(e, r);
};
$.readRegexp = function () {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if ((_e.test(i) && this.raise(r, "Unterminated regular expression"), e)) e = !1;
    else {
      if (i === "[") t = !0;
      else if (i === "]" && t) t = !1;
      else if (i === "/" && !t) break;
      e = i === "\\";
    }
    ++this.pos;
  }
  var s = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos,
    u = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var f = this.regexpState || (this.regexpState = new Oe(this));
  f.reset(r, s, u), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var d = null;
  try {
    d = new RegExp(s, u);
  } catch {}
  return this.finishToken(h.regexp, { pattern: s, flags: u, value: d });
};
$.readInt = function (e, t, r) {
  for (
    var i = this.options.ecmaVersion >= 12 && t === void 0,
      s = r && this.input.charCodeAt(this.pos) === 48,
      a = this.pos,
      u = 0,
      f = 0,
      d = 0,
      g = t ?? 1 / 0;
    d < g;
    ++d, ++this.pos
  ) {
    var m = this.input.charCodeAt(this.pos),
      x = void 0;
    if (i && m === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"),
        f === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"),
        d === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"),
        (f = m);
      continue;
    }
    if ((m >= 97 ? (x = m - 97 + 10) : m >= 65 ? (x = m - 65 + 10) : m >= 48 && m <= 57 ? (x = m - 48) : (x = 1 / 0), x >= e)) break;
    (f = m), (u = u * e + x);
  }
  return (
    i && f === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"),
    this.pos === a || (t != null && this.pos - a !== t) ? null : u
  );
};
function Hs(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Xi(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
$.readRadixNumber = function (e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, "Expected number in radix " + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = Xi(this.input.slice(t, this.pos))), ++this.pos)
      : Fe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
    this.finishToken(h.num, r)
  );
};
$.readNumber = function (e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var s = Xi(this.input.slice(t, this.pos));
    return ++this.pos, Fe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, s);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
    i === 46 && !r && (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
    (i === 69 || i === 101) &&
      !r &&
      ((i = this.input.charCodeAt(++this.pos)),
      (i === 43 || i === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(t, "Invalid number")),
    Fe(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var a = Hs(this.input.slice(t, this.pos), r);
  return this.finishToken(h.num, a);
};
$.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
      ++this.pos,
      t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else t = this.readHexChar(4);
  return t;
};
function _r(e) {
  return e <= 65535 ? String.fromCharCode(e) : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
$.readString = function (e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === e) break;
    i === 92
      ? ((t += this.input.slice(r, this.pos)), (t += this.readEscapedChar(!1)), (r = this.pos))
      : (pt(i, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return (t += this.input.slice(r, this.pos++)), this.finishToken(h.string, t);
};
var Zi = {};
$.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Zi) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
$.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Zi;
  this.raise(e, t);
};
$.readTmplToken = function () {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start && (this.type === h.template || this.type === h.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(h.dollarBraceL))
          : (++this.pos, this.finishToken(h.backQuote))
        : ((e += this.input.slice(t, this.pos)), this.finishToken(h.template, e));
    if (r === 92) (e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos);
    else if (pt(r)) {
      switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (t = this.pos);
    } else ++this.pos;
  }
};
$.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
};
$.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, t)) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return _r(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && ((this.lineStart = this.pos), ++this.curLine), "";
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(r, "Invalid escape sequence in template string"), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          s = parseInt(i, 8);
        return (
          s > 255 && ((i = i.slice(0, -1)), (s = parseInt(i, 8))),
          (this.pos += i.length - 1),
          (t = this.input.charCodeAt(this.pos)),
          (i !== "0" || t === 56 || t === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(this.pos - 1 - i.length, e ? "Octal literal in template string" : "Octal literal in strict mode"),
          String.fromCharCode(s)
        );
      }
      return pt(t) ? "" : String.fromCharCode(t);
  }
};
$.readHexChar = function (e) {
  var t = this.pos,
    r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
$.readWord1 = function () {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (Ye(s, i)) this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
        ++this.pos;
      var u = this.readCodePoint();
      (t ? Fe : Ye)(u, i) || this.invalidStringToken(a, "Invalid Unicode escape"), (e += _r(u)), (r = this.pos);
    } else break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
$.readWord = function () {
  var e = this.readWord1(),
    t = h.name;
  return this.keywords.test(e) && (t = dr[e]), this.finishToken(t, e);
};
var Qs = "7.4.1";
oe.acorn = {
  Parser: oe,
  version: Qs,
  defaultOptions: nr,
  Position: ut,
  SourceLocation: Tt,
  getLineInfo: Ii,
  Node: xr,
  TokenType: J,
  tokTypes: h,
  keywordTypes: dr,
  TokContext: Ce,
  tokContexts: ne,
  isIdentifierChar: Ye,
  isIdentifierStart: Fe,
  Token: Sr,
  isNewLine: pt,
  lineBreak: _e,
  lineBreakG: ot,
  nonASCIIwhitespace: ki,
};
function en(e, t, r, i, s) {
  r || (r = L),
    (function a(u, f, d) {
      var g = d || u.type,
        m = t[g];
      r[g](u, f, a), m && m(u, f);
    })(e, i, s);
}
function Ys(e, t, r, i, s) {
  var a = [];
  r || (r = L),
    (function u(f, d, g) {
      var m = g || f.type,
        x = t[m],
        C = f !== a[a.length - 1];
      C && a.push(f), r[m](f, d, u), x && x(f, d || a, a), C && a.pop();
    })(e, i, s);
}
function Er(e, t, r) {
  r(e, t);
}
function ze(e, t, r) {}
var L = {};
L.Program = L.BlockStatement = function (e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
L.Statement = Er;
L.EmptyStatement = ze;
L.ExpressionStatement =
  L.ParenthesizedExpression =
  L.ChainExpression =
    function (e, t, r) {
      return r(e.expression, t, "Expression");
    };
L.IfStatement = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
L.LabeledStatement = function (e, t, r) {
  return r(e.body, t, "Statement");
};
L.BreakStatement = L.ContinueStatement = ze;
L.WithStatement = function (e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
L.SwitchStatement = function (e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var i = 0, s = e.cases; i < s.length; i += 1) {
    var a = s[i];
    a.test && r(a.test, t, "Expression");
    for (var u = 0, f = a.consequent; u < f.length; u += 1) {
      var d = f[u];
      r(d, t, "Statement");
    }
  }
};
L.SwitchCase = function (e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var i = 0, s = e.consequent; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
L.ReturnStatement =
  L.YieldExpression =
  L.AwaitExpression =
    function (e, t, r) {
      e.argument && r(e.argument, t, "Expression");
    };
L.ThrowStatement = L.SpreadElement = function (e, t, r) {
  return r(e.argument, t, "Expression");
};
L.TryStatement = function (e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
L.CatchClause = function (e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
L.WhileStatement = L.DoWhileStatement = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
L.ForStatement = function (e, t, r) {
  e.init && r(e.init, t, "ForInit"),
    e.test && r(e.test, t, "Expression"),
    e.update && r(e.update, t, "Expression"),
    r(e.body, t, "Statement");
};
L.ForInStatement = L.ForOfStatement = function (e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
L.ForInit = function (e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
L.DebuggerStatement = ze;
L.FunctionDeclaration = function (e, t, r) {
  return r(e, t, "Function");
};
L.VariableDeclaration = function (e, t, r) {
  for (var i = 0, s = e.declarations; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
L.VariableDeclarator = function (e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
L.Function = function (e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
L.Pattern = function (e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
L.VariablePattern = ze;
L.MemberPattern = Er;
L.RestElement = function (e, t, r) {
  return r(e.argument, t, "Pattern");
};
L.ArrayPattern = function (e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Pattern");
  }
};
L.ObjectPattern = function (e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    a.type === "Property"
      ? (a.computed && r(a.key, t, "Expression"), r(a.value, t, "Pattern"))
      : a.type === "RestElement" && r(a.argument, t, "Pattern");
  }
};
L.Expression = Er;
L.ThisExpression = L.Super = L.MetaProperty = ze;
L.ArrayExpression = function (e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Expression");
  }
};
L.ObjectExpression = function (e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
L.FunctionExpression = L.ArrowFunctionExpression = L.FunctionDeclaration;
L.SequenceExpression = function (e, t, r) {
  for (var i = 0, s = e.expressions; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Expression");
  }
};
L.TemplateLiteral = function (e, t, r) {
  for (var i = 0, s = e.quasis; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  for (var u = 0, f = e.expressions; u < f.length; u += 1) {
    var d = f[u];
    r(d, t, "Expression");
  }
};
L.TemplateElement = ze;
L.UnaryExpression = L.UpdateExpression = function (e, t, r) {
  r(e.argument, t, "Expression");
};
L.BinaryExpression = L.LogicalExpression = function (e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
L.AssignmentExpression = L.AssignmentPattern = function (e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
L.ConditionalExpression = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
L.NewExpression = L.CallExpression = function (e, t, r) {
  if ((r(e.callee, t, "Expression"), e.arguments))
    for (var i = 0, s = e.arguments; i < s.length; i += 1) {
      var a = s[i];
      r(a, t, "Expression");
    }
};
L.MemberExpression = function (e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
L.ExportNamedDeclaration = L.ExportDefaultDeclaration = function (e, t, r) {
  e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"),
    e.source && r(e.source, t, "Expression");
};
L.ExportAllDeclaration = function (e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
L.ImportDeclaration = function (e, t, r) {
  for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  r(e.source, t, "Expression");
};
L.ImportExpression = function (e, t, r) {
  r(e.source, t, "Expression");
};
L.ImportSpecifier = L.ImportDefaultSpecifier = L.ImportNamespaceSpecifier = L.Identifier = L.Literal = ze;
L.TaggedTemplateExpression = function (e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
L.ClassDeclaration = L.ClassExpression = function (e, t, r) {
  return r(e, t, "Class");
};
L.Class = function (e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
L.ClassBody = function (e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
L.MethodDefinition = L.Property = function (e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var Ks = vi,
  Js = Un,
  Xs = xi,
  Zs = "[object Object]",
  ea = Function.prototype,
  ta = Object.prototype,
  tn = ea.toString,
  ra = ta.hasOwnProperty,
  ia = tn.call(Object);
function na(e) {
  if (!Xs(e) || Ks(e) != Zs) return !1;
  var t = Js(e);
  if (t === null) return !0;
  var r = ra.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && tn.call(r) == ia;
}
var sa = na;
const aa = fr(sa);
var oa = vi,
  ua = Gn,
  la = xi,
  ca = "[object String]";
function ha(e) {
  return typeof e == "string" || (!ua(e) && la(e) && oa(e) == ca);
}
var fa = ha;
const pa = fr(fa);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function si(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function da(e) {
  var t, r;
  return si(e) === !1
    ? !1
    : ((t = e.constructor), t === void 0 ? !0 : ((r = t.prototype), !(si(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var rn = {},
  kt =
    (at && at.__assign) ||
    function () {
      return (
        (kt =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) {
              t = arguments[r];
              for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        kt.apply(this, arguments)
      );
    },
  ma =
    (at && at.__spreadArrays) ||
    function () {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      for (var i = Array(e), s = 0, t = 0; t < r; t++) for (var a = arguments[t], u = 0, f = a.length; u < f; u++, s++) i[s] = a[u];
      return i;
    };
Object.defineProperty(rn, "__esModule", { value: !0 });
var rt = [];
function ga(e) {
  var t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function ya(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function va(e) {
  return Object.getOwnPropertySymbols(e).filter(function (t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function Ct(e, t, r) {
  r === void 0 && (r = "");
  var i = { indent: "	", singleQuotes: !0 },
    s = kt(kt({}, i), t),
    a;
  s.inlineCharacterLimit === void 0
    ? (a = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + s.indent,
      })
    : (a = {
        newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
        newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
        pad: "@@__PRETTY_PRINT_PAD__@@",
        indent: "@@__PRETTY_PRINT_INDENT__@@",
      });
  var u = function (g) {
    if (s.inlineCharacterLimit === void 0) return g;
    var m = g
      .replace(new RegExp(a.newLine, "g"), "")
      .replace(new RegExp(a.newLineOrSpace, "g"), " ")
      .replace(new RegExp(a.pad + "|" + a.indent, "g"), "");
    return m.length <= s.inlineCharacterLimit
      ? m
      : g
          .replace(
            new RegExp(a.newLine + "|" + a.newLineOrSpace, "g"),
            `
`
          )
          .replace(new RegExp(a.pad, "g"), r)
          .replace(new RegExp(a.indent, "g"), r + s.indent);
  };
  if (rt.indexOf(e) !== -1) return '"[Circular]"';
  if (e == null || typeof e == "number" || typeof e == "boolean" || typeof e == "function" || typeof e == "symbol" || ya(e))
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    rt.push(e);
    var f =
      "[" +
      a.newLine +
      e
        .map(function (g, m) {
          var x = e.length - 1 === m ? a.newLine : "," + a.newLineOrSpace,
            C = Ct(g, s, r + s.indent);
          return s.transform && (C = s.transform(e, m, C)), a.indent + C + x;
        })
        .join("") +
      a.pad +
      "]";
    return rt.pop(), u(f);
  }
  if (ga(e)) {
    var d = ma(Object.keys(e), va(e));
    if (
      (s.filter &&
        (d = d.filter(function (m) {
          return s.filter && s.filter(e, m);
        })),
      d.length === 0)
    )
      return "{}";
    rt.push(e);
    var f =
      "{" +
      a.newLine +
      d
        .map(function (m, x) {
          var C = d.length - 1 === x ? a.newLine : "," + a.newLineOrSpace,
            b = typeof m == "symbol",
            S = !b && /^[a-z$_][a-z$_0-9]*$/i.test(m.toString()),
            y = b || S ? m : Ct(m, s),
            I = Ct(e[m], s, r + s.indent);
          return s.transform && (I = s.transform(e, m, I)), a.indent + String(y) + ": " + I + C;
        })
        .join("") +
      a.pad +
      "}";
    return rt.pop(), u(f);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (g) {
      return g ===
        `
`
        ? "\\n"
        : "\\r";
    })),
    s.singleQuotes ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'") : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var xa = (rn.prettyPrint = Ct),
  nn = { exports: {} },
  Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cr = Symbol.for("react.element"),
  wr = Symbol.for("react.portal"),
  Mt = Symbol.for("react.fragment"),
  Ft = Symbol.for("react.strict_mode"),
  Vt = Symbol.for("react.profiler"),
  Bt = Symbol.for("react.provider"),
  Dt = Symbol.for("react.context"),
  ba = Symbol.for("react.server_context"),
  jt = Symbol.for("react.forward_ref"),
  qt = Symbol.for("react.suspense"),
  Ut = Symbol.for("react.suspense_list"),
  Gt = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  Sa = Symbol.for("react.offscreen"),
  sn;
sn = Symbol.for("react.module.reference");
function Ee(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cr:
        switch (((e = e.type), e)) {
          case Mt:
          case Vt:
          case Ft:
          case qt:
          case Ut:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ba:
              case Dt:
              case jt:
              case Wt:
              case Gt:
              case Bt:
                return e;
              default:
                return t;
            }
        }
      case wr:
        return t;
    }
  }
}
Z.ContextConsumer = Dt;
Z.ContextProvider = Bt;
Z.Element = Cr;
Z.ForwardRef = jt;
Z.Fragment = Mt;
Z.Lazy = Wt;
Z.Memo = Gt;
Z.Portal = wr;
Z.Profiler = Vt;
Z.StrictMode = Ft;
Z.Suspense = qt;
Z.SuspenseList = Ut;
Z.isAsyncMode = function () {
  return !1;
};
Z.isConcurrentMode = function () {
  return !1;
};
Z.isContextConsumer = function (e) {
  return Ee(e) === Dt;
};
Z.isContextProvider = function (e) {
  return Ee(e) === Bt;
};
Z.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
};
Z.isForwardRef = function (e) {
  return Ee(e) === jt;
};
Z.isFragment = function (e) {
  return Ee(e) === Mt;
};
Z.isLazy = function (e) {
  return Ee(e) === Wt;
};
Z.isMemo = function (e) {
  return Ee(e) === Gt;
};
Z.isPortal = function (e) {
  return Ee(e) === wr;
};
Z.isProfiler = function (e) {
  return Ee(e) === Vt;
};
Z.isStrictMode = function (e) {
  return Ee(e) === Ft;
};
Z.isSuspense = function (e) {
  return Ee(e) === qt;
};
Z.isSuspenseList = function (e) {
  return Ee(e) === Ut;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Mt ||
    e === Vt ||
    e === Ft ||
    e === qt ||
    e === Ut ||
    e === Sa ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Wt ||
        e.$$typeof === Gt ||
        e.$$typeof === Bt ||
        e.$$typeof === Dt ||
        e.$$typeof === jt ||
        e.$$typeof === sn ||
        e.getModuleId !== void 0))
  );
};
Z.typeOf = Ee;
nn.exports = Z;
var ke = nn.exports,
  Te = function (e, t) {
    return e === 0 ? "" : new Array(e * t).fill(" ").join("");
  };
function ct(e) {
  "@babel/helpers - typeof";
  return (
    (ct =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    ct(e)
  );
}
function ai(e) {
  return _a(e) || Ea(e) || Ca(e) || wa();
}
function _a(e) {
  if (Array.isArray(e)) return ar(e);
}
function Ea(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Ca(e, t) {
  if (e) {
    if (typeof e == "string") return ar(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ar(e, t);
  }
}
function ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function wa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function or(e, t) {
  return e === null || ct(e) !== "object" || e instanceof Date || e instanceof RegExp || Ge.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return or(r, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, i) {
              return i === "_owner" || (i === "current" || t.has(e[i]) ? (r[i] = "[Circular]") : (r[i] = or(e[i], t))), r;
            }, {}));
}
function Aa(e) {
  return or(e, new WeakSet());
}
var an = function (t) {
    return { type: "string", value: t };
  },
  ka = function (t) {
    return { type: "number", value: t };
  },
  Pa = function (t, r, i, s) {
    return { type: "ReactElement", displayName: t, props: r, defaultProps: i, childrens: s };
  },
  Ia = function (t, r) {
    return { type: "ReactFragment", key: t, childrens: r };
  },
  Ta = !!Ge.Fragment,
  on = function (t) {
    return !t.name || t.name === "_default" ? "No Display Name" : t.name;
  },
  La = function e(t) {
    switch (!0) {
      case !!t.displayName:
        return t.displayName;
      case t.$$typeof === ke.Memo:
        return e(t.type);
      case t.$$typeof === ke.ForwardRef:
        return e(t.render);
      default:
        return on(t);
    }
  },
  Na = function (t) {
    switch (!0) {
      case typeof t.type == "string":
        return t.type;
      case typeof t.type == "function":
        return t.type.displayName ? t.type.displayName : on(t.type);
      case ke.isForwardRef(t):
      case ke.isMemo(t):
        return La(t.type);
      case ke.isContextConsumer(t):
        return "".concat(t.type._context.displayName || "Context", ".Consumer");
      case ke.isContextProvider(t):
        return "".concat(t.type._context.displayName || "Context", ".Provider");
      case ke.isLazy(t):
        return "Lazy";
      case ke.isProfiler(t):
        return "Profiler";
      case ke.isStrictMode(t):
        return "StrictMode";
      case ke.isSuspense(t):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  oi = function (t, r) {
    return r !== "children";
  },
  Oa = function (t) {
    return t !== !0 && t !== !1 && t !== null && t !== "";
  },
  ui = function (t, r) {
    var i = {};
    return (
      Object.keys(t)
        .filter(function (s) {
          return r(t[s], s);
        })
        .forEach(function (s) {
          return (i[s] = t[s]);
        }),
      i
    );
  },
  Ar = function e(t, r) {
    var i = r.displayName,
      s = i === void 0 ? Na : i;
    if (typeof t == "string") return an(t);
    if (typeof t == "number") return ka(t);
    if (!it.isValidElement(t)) throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(ct(t), "`"));
    var a = s(t),
      u = ui(t.props, oi);
    t.ref !== null && (u.ref = t.ref);
    var f = t.key;
    typeof f == "string" && f.search(/^\./) && (u.key = f);
    var d = ui(t.type.defaultProps || {}, oi),
      g = it.Children.toArray(t.props.children)
        .filter(Oa)
        .map(function (m) {
          return e(m, r);
        });
    return Ta && t.type === Ge.Fragment ? Ia(f, g) : Pa(a, u, d, g);
  };
function Ra() {}
var Ma = function (t) {
    return t
      .toString()
      .split(
        `
`
      )
      .map(function (r) {
        return r.trim();
      })
      .join("");
  },
  li = Ma,
  un = function (e, t) {
    var r = t.functionValue,
      i = r === void 0 ? li : r,
      s = t.showFunctions;
    return i(!s && i === li ? Ra : e);
  },
  Fa = function (e, t, r, i) {
    var s = Aa(e),
      a = xa(s, {
        transform: function (f, d, g) {
          var m = f[d];
          return m && Ge.isValidElement(m) ? zt(Ar(m, i), !0, r, i) : typeof m == "function" ? un(m, i) : g;
        },
      });
    return t
      ? a.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]")
      : a.replace(/\t/g, Te(1, i.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(Te(r + 1, i.tabStop), "$1")
        );
  },
  Va = function (t) {
    return t.replace(/"/g, "&quot;");
  },
  Ba = function (t, r, i, s) {
    if (typeof t == "number") return "{".concat(String(t), "}");
    if (typeof t == "string") return '"'.concat(Va(t), '"');
    if (ct(t) === "symbol") {
      var a = t
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return a ? "{Symbol('".concat(a, "')}") : "{Symbol()}";
    }
    return typeof t == "function"
      ? "{".concat(un(t, s), "}")
      : Ge.isValidElement(t)
      ? "{".concat(zt(Ar(t, s), !0, i, s), "}")
      : t instanceof Date
      ? isNaN(t.valueOf())
        ? "{new Date(NaN)}"
        : '{new Date("'.concat(t.toISOString(), '")}')
      : da(t) || Array.isArray(t)
      ? "{".concat(Fa(t, r, i, s), "}")
      : "{".concat(String(t), "}");
  },
  Da = function (e, t, r, i, s, a, u, f) {
    if (!t && !i) throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
    var d = t ? r : s,
      g = f.useBooleanShorthandSyntax,
      m = f.tabStop,
      x = Ba(d, a, u, f),
      C = " ",
      b = `
`.concat(Te(u + 1, m)),
      S = x.includes(`
`);
    return (
      g && x === "{false}" && !i
        ? ((C = ""), (b = ""))
        : g && x === "{true}"
        ? ((C += "".concat(e)), (b += "".concat(e)))
        : ((C += "".concat(e, "=").concat(x)), (b += "".concat(e, "=").concat(x))),
      { attributeFormattedInline: C, attributeFormattedMultiline: b, isMultilineAttribute: S }
    );
  },
  ja = function (e, t) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      i = e[e.length - 1];
    return (
      i && (t.type === "string" || t.type === "number") && (i.type === "string" || i.type === "number")
        ? r.push(an(String(i.value) + String(t.value)))
        : (i && r.push(i), r.push(t)),
      r
    );
  },
  qa = function (t) {
    return ["key", "ref"].includes(t);
  },
  Ua = function (e) {
    return function (t) {
      var r = t.includes("key"),
        i = t.includes("ref"),
        s = t.filter(function (u) {
          return !qa(u);
        }),
        a = ai(e ? s.sort() : s);
      return i && a.unshift("ref"), r && a.unshift("key"), a;
    };
  };
function Ga(e, t) {
  return Array.isArray(t)
    ? function (r) {
        return t.indexOf(r) === -1;
      }
    : function (r) {
        return t(e[r], r);
      };
}
var Wa = function (t, r, i, s, a) {
    var u = a.tabStop;
    return t.type === "string"
      ? r
          .split(
            `
`
          )
          .map(function (f, d) {
            return d === 0 ? f : "".concat(Te(s, u)).concat(f);
          }).join(`
`)
      : r;
  },
  za = function (t, r, i) {
    return function (s) {
      return Wa(s, zt(s, t, r, i), t, r, i);
    };
  },
  $a = function (t, r) {
    return function (i) {
      var s = Object.keys(t).includes(i);
      return !s || (s && t[i] !== r[i]);
    };
  },
  ln = function (t, r, i, s, a) {
    return a ? Te(i, s).length + r.length > a : t.length > 1;
  },
  Ha = function (t, r, i, s, a, u, f) {
    return (ln(t, r, a, u, f) || i) && !s;
  },
  cn = function (e, t, r, i) {
    var s = e.type,
      a = e.displayName,
      u = a === void 0 ? "" : a,
      f = e.childrens,
      d = e.props,
      g = d === void 0 ? {} : d,
      m = e.defaultProps,
      x = m === void 0 ? {} : m;
    if (s !== "ReactElement")
      throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(s));
    var C = i.filterProps,
      b = i.maxInlineAttributesLineLength,
      S = i.showDefaultProps,
      y = i.sortProps,
      I = i.tabStop,
      O = "<".concat(u),
      N = O,
      j = O,
      _ = !1,
      v = [],
      w = Ga(g, C);
    Object.keys(g)
      .filter(w)
      .filter($a(x, g))
      .forEach(function (B) {
        return v.push(B);
      }),
      Object.keys(x)
        .filter(w)
        .filter(function () {
          return S;
        })
        .filter(function (B) {
          return !v.includes(B);
        })
        .forEach(function (B) {
          return v.push(B);
        });
    var A = Ua(y)(v);
    if (
      (A.forEach(function (B) {
        var F = Da(B, Object.keys(g).includes(B), g[B], Object.keys(x).includes(B), x[B], t, r, i),
          W = F.attributeFormattedInline,
          q = F.attributeFormattedMultiline,
          V = F.isMultilineAttribute;
        V && (_ = !0), (N += W), (j += q);
      }),
      (j += `
`.concat(Te(r, I))),
      Ha(A, N, _, t, r, I, b) ? (O = j) : (O = N),
      f && f.length > 0)
    ) {
      var P = r + 1;
      (O += ">"),
        t ||
          ((O += `
`),
          (O += Te(P, I))),
        (O += f
          .reduce(ja, [])
          .map(za(t, P, i))
          .join(
            t
              ? ""
              : `
`.concat(Te(P, I))
          )),
        t ||
          ((O += `
`),
          (O += Te(P - 1, I))),
        (O += "</".concat(u, ">"));
    } else ln(A, N, r, I, b) || (O += " "), (O += "/>");
    return O;
  },
  Qa = "",
  ci = "React.Fragment",
  Ya = function (t, r, i) {
    var s = {};
    return r && (s = { key: r }), { type: "ReactElement", displayName: t, props: s, defaultProps: {}, childrens: i };
  },
  Ka = function (t) {
    var r = t.key;
    return !!r;
  },
  Ja = function (t) {
    var r = t.childrens;
    return r.length === 0;
  },
  Xa = function (e, t, r, i) {
    var s = e.type,
      a = e.key,
      u = e.childrens;
    if (s !== "ReactFragment")
      throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(s));
    var f = i.useFragmentShortSyntax,
      d;
    return f ? (Ja(e) || Ka(e) ? (d = ci) : (d = Qa)) : (d = ci), cn(Ya(d, a, u), t, r, i);
  },
  Za = ["<", ">", "{", "}"],
  eo = function (t) {
    return Za.some(function (r) {
      return t.includes(r);
    });
  },
  to = function (t) {
    return eo(t) ? "{`".concat(t, "`}") : t;
  },
  ro = function (t) {
    var r = t;
    return (
      r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")), r
    );
  },
  zt = function (e, t, r, i) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string") return e.value ? "".concat(ro(to(String(e.value)))) : "";
    if (e.type === "ReactElement") return cn(e, t, r, i);
    if (e.type === "ReactFragment") return Xa(e, t, r, i);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  io = function (e, t) {
    return zt(e, !1, 0, t);
  },
  st = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = r.filterProps,
      s = i === void 0 ? [] : i,
      a = r.showDefaultProps,
      u = a === void 0 ? !0 : a,
      f = r.showFunctions,
      d = f === void 0 ? !1 : f,
      g = r.functionValue,
      m = r.tabStop,
      x = m === void 0 ? 2 : m,
      C = r.useBooleanShorthandSyntax,
      b = C === void 0 ? !0 : C,
      S = r.useFragmentShortSyntax,
      y = S === void 0 ? !0 : S,
      I = r.sortProps,
      O = I === void 0 ? !0 : I,
      N = r.maxInlineAttributesLineLength,
      j = r.displayName;
    if (!t) throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var _ = {
      filterProps: s,
      showDefaultProps: u,
      showFunctions: d,
      functionValue: g,
      tabStop: x,
      useBooleanShorthandSyntax: b,
      useFragmentShortSyntax: y,
      sortProps: O,
      maxInlineAttributesLineLength: N,
      displayName: j,
    };
    return io(Ar(t, _), _);
  };
const { defaultDecorateStory: no, addons: so, useEffect: ao } = __STORYBOOK_MODULE_PREVIEW_API__,
  { logger: Et } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function oo(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return "";
  let s = [];
  if (r) {
    let a = e.map((u) => {
      let f = u.getPrettyName(),
        d = u.getTypeName();
      return d != null ? `${f}: ${d}` : f;
    });
    s.push(`(${a.join(", ")})`);
  } else s.push("()");
  return i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function uo(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return "";
  let s = [];
  return r ? s.push("( ... )") : s.push("()"), i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function lo(e) {
  return e.replace(
    /,/g,
    `,\r
`
  );
}
var ur = "custom",
  mt = "object",
  kr = "array",
  co = "class",
  Ke = "func",
  Xe = "element";
function Pr(e) {
  return es.includes(e.toLowerCase());
}
var hn = { format: { indent: { style: "  " }, semicolons: !1 } },
  ho = { ...hn, format: { newline: "" } },
  fo = { ...hn };
function Me(e, t = !1) {
  return bi.generate(e, t ? ho : fo);
}
function lr(e, t = !1) {
  return t ? po(e) : Me(e);
}
function po(e) {
  let t = Me(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function hi(e, t = !1) {
  return t ? go(e) : mo(e);
}
function mo(e) {
  let t = Me(e);
  return t.endsWith("  }]") && (t = Jn(t)), t;
}
function go(e) {
  let t = Me(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var fn = (e) => e.$$typeof === Symbol.for("react.memo"),
  yo = (e) => e.$$typeof === Symbol.for("react.forward_ref"),
  Ir = { ...L, JSXElement: () => {} },
  vo = oe.extend(Kn());
function gt(e) {
  return e != null ? e.name : null;
}
function fi(e) {
  return e.filter((t) => t.type === "ObjectExpression" || t.type === "ArrayExpression");
}
function pn(e) {
  let t = [];
  return (
    Ys(
      e,
      {
        ObjectExpression(r, i) {
          t.push(fi(i).length);
        },
        ArrayExpression(r, i) {
          t.push(fi(i).length);
        },
      },
      Ir
    ),
    Math.max(...t)
  );
}
function xo(e) {
  return { inferredType: { type: "Identifier", identifier: gt(e) }, ast: e };
}
function bo(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function So(e) {
  let t;
  en(
    e.body,
    {
      JSXElement(s) {
        t = s;
      },
    },
    Ir
  );
  let r = { type: t != null ? "Element" : "Function", params: e.params, hasParams: e.params.length !== 0 },
    i = gt(e.id);
  return i != null && (r.identifier = i), { inferredType: r, ast: e };
}
function _o(e) {
  let t;
  return (
    en(
      e.body,
      {
        JSXElement(r) {
          t = r;
        },
      },
      Ir
    ),
    { inferredType: { type: t != null ? "Element" : "Class", identifier: gt(e.id) }, ast: e }
  );
}
function Eo(e) {
  let t = { type: "Element" },
    r = gt(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function Co(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return gt(t) === "shape" ? dn(e.arguments[0]) : null;
}
function dn(e) {
  return { inferredType: { type: "Object", depth: pn(e) }, ast: e };
}
function wo(e) {
  return { inferredType: { type: "Array", depth: pn(e) }, ast: e };
}
function Ao(e) {
  switch (e.type) {
    case "Identifier":
      return xo(e);
    case "Literal":
      return bo(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return So(e);
    case "ClassExpression":
      return _o(e);
    case "JSXElement":
      return Eo(e);
    case "CallExpression":
      return Co(e);
    case "ObjectExpression":
      return dn(e);
    case "ArrayExpression":
      return wo(e);
    default:
      return null;
  }
}
function ko(e) {
  let t = vo.parse(`(${e})`, { ecmaVersion: 2020 }),
    r = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let i = t.body[0];
    switch (i.type) {
      case "ExpressionStatement": {
        let s = Ao(i.expression);
        s != null && (r = s);
        break;
      }
    }
  }
  return r;
}
function Ve(e) {
  try {
    return { ...ko(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
var Po = 150;
function de({ name: e, short: t, compact: r, full: i, inferredType: s }) {
  return { name: e, short: t, compact: r, full: i ?? t, inferredType: s };
}
function mn(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function pi(e) {
  return e.split(/\r?\n/);
}
function Pt(e, t = !1) {
  return mn(lr(e, t));
}
function di(e, t = !1) {
  return mn(Me(e, t));
}
function Io(e) {
  switch (e) {
    case "Object":
      return mt;
    case "Array":
      return kr;
    case "Class":
      return co;
    case "Function":
      return Ke;
    case "Element":
      return Xe;
    default:
      return ur;
  }
}
function gn(e, t) {
  let { inferredType: r, ast: i } = Ve(e),
    { type: s } = r,
    a,
    u,
    f;
  switch (s) {
    case "Identifier":
    case "Literal":
      (a = e), (u = e);
      break;
    case "Object": {
      let { depth: d } = r;
      (a = mt), (u = d === 1 ? Pt(i, !0) : null), (f = Pt(i));
      break;
    }
    case "Element": {
      let { identifier: d } = r;
      (a = d != null && !Pr(d) ? d : Xe), (u = pi(e).length === 1 ? e : null), (f = e);
      break;
    }
    case "Array": {
      let { depth: d } = r;
      (a = kr), (u = d <= 2 ? di(i, !0) : null), (f = di(i));
      break;
    }
    default:
      (a = Io(s)), (u = pi(e).length === 1 ? e : null), (f = e);
      break;
  }
  return de({ name: t, short: a, compact: u, full: f, inferredType: s });
}
function To({ raw: e }) {
  return e != null ? gn(e, "custom") : de({ name: "custom", short: ur, compact: ur });
}
function Lo(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null)
    ? de({ name: "func", short: uo(t.params, t.returns), compact: null, full: oo(t.params, t.returns) })
    : de({ name: "func", short: Ke, compact: Ke });
}
function No(e, t) {
  let r = Object.keys(e.value)
      .map((u) => `${u}: ${Je(e.value[u], t).full}`)
      .join(", "),
    { inferredType: i, ast: s } = Ve(`{ ${r} }`),
    { depth: a } = i;
  return de({ name: "shape", short: mt, compact: a === 1 && s ? Pt(s, !0) : null, full: s ? Pt(s) : null });
}
function rr(e) {
  return `objectOf(${e})`;
}
function Oo(e, t) {
  let { short: r, compact: i, full: s } = Je(e.value, t);
  return de({ name: "objectOf", short: rr(r), compact: i != null ? rr(i) : null, full: s && rr(s) });
}
function Ro(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (i, s) => {
        let { short: a, compact: u, full: f } = Je(s, t);
        return i.short.push(a), i.compact.push(u), i.full.push(f), i;
      },
      { short: [], compact: [], full: [] }
    );
    return de({
      name: "union",
      short: r.short.join(" | "),
      compact: r.compact.every((i) => i != null) ? r.compact.join(" | ") : null,
      full: r.full.join(" | "),
    });
  }
  return de({ name: "union", short: e.value, compact: null });
}
function Mo({ value: e, computed: t }) {
  return t ? gn(e, "enumvalue") : de({ name: "enumvalue", short: e, compact: e });
}
function Fo(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce(
      (r, i) => {
        let { short: s, compact: a, full: u } = Mo(i);
        return r.short.push(s), r.compact.push(a), r.full.push(u), r;
      },
      { short: [], compact: [], full: [] }
    );
    return de({
      name: "enum",
      short: t.short.join(" | "),
      compact: t.compact.every((r) => r != null) ? t.compact.join(" | ") : null,
      full: t.full.join(" | "),
    });
  }
  return de({ name: "enum", short: e.value, compact: e.value });
}
function cr(e) {
  return `${e}[]`;
}
function mi(e) {
  return `[${e}]`;
}
function gi(e, t, r) {
  return de({ name: "arrayOf", short: cr(e), compact: t != null ? mi(t) : null, full: r && mi(r) });
}
function Vo(e, t) {
  let { name: r, short: i, compact: s, full: a, inferredType: u } = Je(e.value, t);
  if (r === "custom") {
    if (u === "Object") return gi(i, s, a);
  } else if (r === "shape") return gi(i, s, a);
  return de({ name: "arrayOf", short: cr(i), compact: cr(i) });
}
function Je(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return To(e);
      case "func":
        return Lo(t);
      case "shape":
        return No(e, t);
      case "instanceOf":
        return de({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return Oo(e, t);
      case "union":
        return Ro(e, t);
      case "enum":
        return Fo(e);
      case "arrayOf":
        return Vo(e, t);
      default:
        return de({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return de({ name: "unknown", short: "unknown", compact: "unknown" });
}
function Bo(e) {
  let { type: t } = e.docgenInfo;
  if (t == null) return null;
  try {
    switch (t.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: i, full: s } = Je(t, e);
        return i != null && !Yn(i) ? te(i) : s ? te(r, s) : te(r);
      }
      case "func": {
        let { short: r, full: i } = Je(t, e),
          s = r,
          a;
        return i && i.length < Po ? (s = i) : i && (a = lo(i)), te(s, a);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function yn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let i = lr(t, !0);
    if (!ht(i)) return te(i);
  }
  return te(mt, lr(t));
}
function vn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let i = hi(t, !0);
    if (!ht(i)) return te(i);
  }
  return te(kr, hi(t));
}
function Tr(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function $t(e) {
  return `<${e} />`;
}
function xn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case "Function":
      return Tr(r, e.hasParams);
    case "Element":
      return $t(r);
    default:
      return r;
  }
}
function Do({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null) return te(xn(e), Me(t));
  let i = Me(t, !0);
  return ht(i) ? te(Ke, Me(t)) : te(i);
}
function jo(e, t) {
  let { inferredType: r } = t,
    { identifier: i } = r;
  if (i != null && !Pr(i)) {
    let s = xn(r);
    return te(s, e);
  }
  return ht(e) ? te(Xe, e) : te(e);
}
function bn(e) {
  try {
    let t = Ve(e);
    switch (t.inferredType.type) {
      case "Object":
        return yn(t);
      case "Function":
        return Do(t);
      case "Element":
        return jo(e, t);
      case "Array":
        return vn(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function Sn(e) {
  return e.$$typeof != null;
}
function _n(e, t) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var qo = (e) => te(JSON.stringify(e));
function Uo(e) {
  let { type: t } = e,
    { displayName: r } = t,
    i = st(e, {});
  if (r != null) {
    let s = $t(r);
    return te(s, i);
  }
  if (pa(t) && Pr(t)) {
    let s = st(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!ht(s)) return te(s);
  }
  return te(Xe, i);
}
var Go = (e) => {
    if (Sn(e) && e.type != null) return Uo(e);
    if (aa(e)) {
      let t = Ve(JSON.stringify(e));
      return yn(t);
    }
    if (Array.isArray(e)) {
      let t = Ve(JSON.stringify(e));
      return vn(t);
    }
    return te(mt);
  },
  Wo = (e, t) => {
    let r = !1,
      i;
    if (Ur(e.render)) r = !0;
    else if (e.prototype != null && Ur(e.prototype.render)) r = !0;
    else {
      let a;
      try {
        i = Ve(e.toString());
        let { hasParams: u, params: f } = i.inferredType;
        u ? f.length === 1 && f[0].type === "ObjectPattern" && (a = e({})) : (a = e()), a != null && Sn(a) && (r = !0);
      } catch {}
    }
    let s = _n(e, t.name);
    if (s != null) {
      if (r) return te($t(s));
      i != null && (i = Ve(e.toString()));
      let { hasParams: a } = i.inferredType;
      return te(Tr(s, a));
    }
    return te(r ? Xe : Ke);
  },
  zo = (e) => te(e.toString()),
  En = { string: qo, object: Go, function: Wo, default: zo };
function $o(e = {}) {
  return { ...En, ...e };
}
function Cn(e, t, r = En) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function Ho(e, t) {
  let { propTypes: r } = t;
  return r != null
    ? Object.keys(r)
        .map((i) => e.find((s) => s.name === i))
        .filter(Boolean)
    : e;
}
var Qo = (e, { name: t, type: r }) => {
    let i = (r == null ? void 0 : r.summary) === "element" || (r == null ? void 0 : r.summary) === "elementType",
      s = _n(e, t);
    if (s != null) {
      if (i) return te($t(s));
      let { hasParams: a } = Ve(e.toString()).inferredType;
      return te(Tr(s, a));
    }
    return te(i ? Xe : Ke);
  },
  Yo = $o({ function: Qo });
function Ko(e, t) {
  let { propDef: r } = e,
    i = Bo(e);
  i != null && (r.type = i);
  let { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let a = bn(s.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    let a = Cn(t, r, Yo);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function Jo(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {},
    i = e.map((s) => Ko(s, r[s.propDef.name]));
  return Ho(i, t);
}
function Xo(e, t) {
  let { propDef: r } = e,
    { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let s = bn(i.value);
    s != null && (r.defaultValue = s);
  } else if (t != null) {
    let s = Cn(t, r);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function Zo(e) {
  return e.map((t) => Xo(t));
}
var yi = new Map();
Object.keys(Wr).forEach((e) => {
  let t = Wr[e];
  yi.set(t, e), yi.set(t.isRequired, e);
});
function eu(e, t) {
  let r = e;
  !Hn(e) && !e.propTypes && fn(e) && (r = e.type);
  let i = Qn(r, t);
  if (i.length === 0) return [];
  switch (i[0].typeSystem) {
    case Gr.JAVASCRIPT:
      return Jo(i, e);
    case Gr.TYPESCRIPT:
      return Zo(i);
    default:
      return i.map((s) => s.propDef);
  }
}
var tu = (e) => ({ rows: eu(e, "props") }),
  ru = (e) => {
    if (e) {
      let { rows: t } = tu(e);
      if (t)
        return t.reduce((r, i) => {
          let { name: s, description: a, type: u, sbType: f, defaultValue: d, jsDocTags: g, required: m } = i;
          return (
            (r[s] = {
              name: s,
              description: a,
              type: { required: m, ...f },
              table: { type: u ?? void 0, jsDocTags: g, defaultValue: d ?? void 0 },
            }),
            r
          );
        }, {});
    }
    return null;
  },
  iu = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  nu = (e) =>
    (e.$$typeof || e)
      .toString()
      .replace(/^Symbol\((.*)\)$/, "$1")
      .split(".")
      .map((t) => t.split("_").map(iu).join(""))
      .join(".");
function hr(e) {
  if (Ge.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((r, i) => ((r[i] = hr(e.props[i])), r), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(hr) : e;
}
var su = (e, t) => {
    if (typeof e > "u") return Et.warn("Too many skip or undefined component"), null;
    let r = e,
      i = r.type;
    for (let u = 0; u < (t == null ? void 0 : t.skip); u += 1) {
      if (typeof r > "u") return Et.warn("Cannot skip undefined element"), null;
      if (it.Children.count(r) > 1) return Et.warn("Trying to skip an array of elements"), null;
      typeof r.props.children > "u"
        ? (Et.warn("Not enough children to skip elements."),
          typeof r.type == "function" && r.type.name === "" && (r = it.createElement(i, { ...r.props })))
        : typeof r.props.children == "function"
        ? (r = r.props.children())
        : (r = r.props.children);
    }
    let s;
    typeof (t == null ? void 0 : t.displayName) == "string"
      ? (s = { showFunctions: !0, displayName: () => t.displayName })
      : (s = {
          displayName: (u) => {
            var f;
            return u.type.displayName
              ? u.type.displayName
              : jr(u.type, "displayName")
              ? jr(u.type, "displayName")
              : (f = u.type.render) != null && f.displayName
              ? u.type.render.displayName
              : typeof u.type == "symbol" || (u.type.$$typeof && typeof u.type.$$typeof == "symbol")
              ? nu(u.type)
              : u.type.name && u.type.name !== "_default"
              ? u.type.name
              : typeof u.type == "function"
              ? "No Display Name"
              : yo(u.type)
              ? u.type.render.name
              : fn(u.type)
              ? u.type.type.name
              : u.type;
          },
        });
    let a = { ...s, filterProps: (u, f) => u !== void 0, ...t };
    return it.Children.map(e, (u) => {
      let f = typeof u == "number" ? u.toString() : u,
        d = (typeof st == "function" ? st : st.default)(hr(f), a);
      if (d.indexOf("&quot;") > -1) {
        let g = d.match(/\S+=\\"([^"]*)\\"/g);
        g &&
          g.forEach((m) => {
            d = d.replace(m, m.replace(/&quot;/g, "'"));
          });
      }
      return d;
    })
      .join(
        `
`
      )
      .replace(/function\s+noRefCheck\(\)\s*\{\}/g, "() => {}");
  },
  au = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  ou = (e) => {
    var i;
    let t = (i = e == null ? void 0 : e.parameters.docs) == null ? void 0 : i.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (t == null ? void 0 : t.type) === qr.DYNAMIC
      ? !1
      : !r || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === qr.CODE;
  },
  uu = (e) => {
    var t, r;
    return ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" && !!((r = e.props) != null && r.mdxType);
  },
  wn = (e) => {
    if (!uu(e)) return e;
    let { mdxType: t, originalType: r, children: i, ...s } = e.props,
      a = [];
    return i && (a = (Array.isArray(i) ? i : [i]).map(wn)), Ge.createElement(r, s, ...a);
  },
  An = (e, t) => {
    var m, x;
    let r = so.getChannel(),
      i = ou(t),
      s = "";
    ao(() => {
      if (!i) {
        let { id: C, unmappedArgs: b } = t;
        r.emit($n, { id: C, source: s, args: b });
      }
    });
    let a = e();
    if (i) return a;
    let u = { ...au, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
      f =
        (x = (m = t == null ? void 0 : t.parameters.docs) == null ? void 0 : m.source) != null && x.excludeDecorators
          ? t.originalStoryFn(t.args, t)
          : a,
      d = wn(f),
      g = su(d, u);
    return g && (s = g), a;
  },
  pu = (e, t) => {
    let r = t.findIndex((s) => s.originalFn === An),
      i = r === -1 ? t : [...t.splice(r, 1), ...t];
    return no(e, i);
  },
  du = { docs: { story: { inline: !0 }, extractArgTypes: ru, extractComponentDescription: Wn } },
  mu = [An],
  gu = [zn];
export { pu as applyDecorators, gu as argTypesEnhancers, mu as decorators, du as parameters };
