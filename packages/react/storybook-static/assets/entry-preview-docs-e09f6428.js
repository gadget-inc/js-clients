import { _ as Du, b as K, d as Vn, c as mu, a as rt } from "./chunk-XP5HYGXS-8b50b325.js";
import { r as Ge, R as ft } from "./index-7c191284.js";
import { B as Bu, n as Cu, y as Eu, z as Fu, g as Un, j as Wn, l as ee, c as gu, a as mt, Y as qn, o as yu } from "./index-a393eeba.js";
const { logger: xt } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { defaultDecorateStory: xu, addons: vu, useEffect: _u } = __STORYBOOK_MODULE_PREVIEW_API__;
var Su = K({
    "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(e, t) {
      var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      t.exports = n;
    },
  }),
  bu = K({
    "../../node_modules/prop-types/factoryWithThrowingShims.js"(e, t) {
      var n = Su();
      function r() {}
      function i() {}
      (i.resetWarningCache = r),
        (t.exports = function () {
          function o(p, A, D, y, C, g) {
            if (g !== n) {
              var m = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((m.name = "Invariant Violation"), m);
            }
          }
          o.isRequired = o;
          function s() {
            return o;
          }
          var h = {
            array: o,
            bigint: o,
            bool: o,
            func: o,
            number: o,
            object: o,
            string: o,
            symbol: o,
            any: o,
            arrayOf: s,
            element: o,
            elementType: o,
            instanceOf: s,
            node: o,
            objectOf: s,
            oneOf: s,
            oneOfType: s,
            shape: s,
            exact: s,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return (h.PropTypes = h), h;
        });
    },
  }),
  wu = K({
    "../../node_modules/prop-types/index.js"(e, t) {
      t.exports = bu()();
    },
  }),
  ku = K({
    "../../node_modules/html-tags/html-tags.json"(e, t) {
      t.exports = [
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
    },
  }),
  Iu = K({
    "../../node_modules/html-tags/index.js"(e, t) {
      t.exports = ku();
    },
  }),
  Tu = K({
    "../../node_modules/estraverse/estraverse.js"(e) {
      (function t(n) {
        var r, i, o, s, h, p;
        function A(B) {
          var F = {},
            x,
            b;
          for (x in B) B.hasOwnProperty(x) && ((b = B[x]), typeof b == "object" && b !== null ? (F[x] = A(b)) : (F[x] = b));
          return F;
        }
        function D(B, F) {
          var x, b, P, j;
          for (b = B.length, P = 0; b; ) (x = b >>> 1), (j = P + x), F(B[j]) ? (b = x) : ((P = j + 1), (b -= x + 1));
          return P;
        }
        (r = {
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
          (o = {
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
          (s = {}),
          (h = {}),
          (p = {}),
          (i = { Break: s, Skip: h, Remove: p });
        function y(B, F) {
          (this.parent = B), (this.key = F);
        }
        (y.prototype.replace = function (B) {
          this.parent[this.key] = B;
        }),
          (y.prototype.remove = function () {
            return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
          });
        function C(B, F, x, b) {
          (this.node = B), (this.path = F), (this.wrap = x), (this.ref = b);
        }
        function g() {}
        (g.prototype.path = function () {
          var B, F, x, b, P, j;
          function M(V, U) {
            if (Array.isArray(U)) for (x = 0, b = U.length; x < b; ++x) V.push(U[x]);
            else V.push(U);
          }
          if (!this.__current.path) return null;
          for (P = [], B = 2, F = this.__leavelist.length; B < F; ++B) (j = this.__leavelist[B]), M(P, j.path);
          return M(P, this.__current.path), P;
        }),
          (g.prototype.type = function () {
            var B = this.current();
            return B.type || this.__current.wrap;
          }),
          (g.prototype.parents = function () {
            var B, F, x;
            for (x = [], B = 1, F = this.__leavelist.length; B < F; ++B) x.push(this.__leavelist[B].node);
            return x;
          }),
          (g.prototype.current = function () {
            return this.__current.node;
          }),
          (g.prototype.__execute = function (B, F) {
            var x, b;
            return (
              (b = void 0),
              (x = this.__current),
              (this.__current = F),
              (this.__state = null),
              B && (b = B.call(this, F.node, this.__leavelist[this.__leavelist.length - 1].node)),
              (this.__current = x),
              b
            );
          }),
          (g.prototype.notify = function (B) {
            this.__state = B;
          }),
          (g.prototype.skip = function () {
            this.notify(h);
          }),
          (g.prototype.break = function () {
            this.notify(s);
          }),
          (g.prototype.remove = function () {
            this.notify(p);
          }),
          (g.prototype.__initialize = function (B, F) {
            (this.visitor = F),
              (this.root = B),
              (this.__worklist = []),
              (this.__leavelist = []),
              (this.__current = null),
              (this.__state = null),
              (this.__fallback = null),
              F.fallback === "iteration"
                ? (this.__fallback = Object.keys)
                : typeof F.fallback == "function" && (this.__fallback = F.fallback),
              (this.__keys = o),
              F.keys && (this.__keys = Object.assign(Object.create(this.__keys), F.keys));
          });
        function m(B) {
          return B == null ? !1 : typeof B == "object" && typeof B.type == "string";
        }
        function E(B, F) {
          return (B === r.ObjectExpression || B === r.ObjectPattern) && F === "properties";
        }
        function w(B, F) {
          for (var x = B.length - 1; x >= 0; --x) if (B[x].node === F) return !0;
          return !1;
        }
        (g.prototype.traverse = function (B, F) {
          var x, b, P, j, M, V, U, H, re, ie, se, Z;
          for (
            this.__initialize(B, F),
              Z = {},
              x = this.__worklist,
              b = this.__leavelist,
              x.push(new C(B, null, null, null)),
              b.push(new C(null, null, null, null));
            x.length;

          ) {
            if (((P = x.pop()), P === Z)) {
              if (((P = b.pop()), (V = this.__execute(F.leave, P)), this.__state === s || V === s)) return;
              continue;
            }
            if (P.node) {
              if (((V = this.__execute(F.enter, P)), this.__state === s || V === s)) return;
              if ((x.push(Z), b.push(P), this.__state === h || V === h)) continue;
              if (((j = P.node), (M = j.type || P.wrap), (ie = this.__keys[M]), !ie))
                if (this.__fallback) ie = this.__fallback(j);
                else throw new Error("Unknown node type " + M + ".");
              for (H = ie.length; (H -= 1) >= 0; )
                if (((U = ie[H]), (se = j[U]), !!se)) {
                  if (Array.isArray(se)) {
                    for (re = se.length; (re -= 1) >= 0; )
                      if (se[re] && !w(b, se[re])) {
                        if (E(M, ie[H])) P = new C(se[re], [U, re], "Property", null);
                        else if (m(se[re])) P = new C(se[re], [U, re], null, null);
                        else continue;
                        x.push(P);
                      }
                  } else if (m(se)) {
                    if (w(b, se)) continue;
                    x.push(new C(se, U, null, null));
                  }
                }
            }
          }
        }),
          (g.prototype.replace = function (B, F) {
            var x, b, P, j, M, V, U, H, re, ie, se, Z, we;
            function it(Re) {
              var R, Je, je, st;
              if (Re.ref.remove()) {
                for (Je = Re.ref.key, st = Re.ref.parent, R = x.length; R--; )
                  if (((je = x[R]), je.ref && je.ref.parent === st)) {
                    if (je.ref.key < Je) break;
                    --je.ref.key;
                  }
              }
            }
            for (
              this.__initialize(B, F),
                se = {},
                x = this.__worklist,
                b = this.__leavelist,
                Z = { root: B },
                V = new C(B, null, null, new y(Z, "root")),
                x.push(V),
                b.push(V);
              x.length;

            ) {
              if (((V = x.pop()), V === se)) {
                if (
                  ((V = b.pop()),
                  (M = this.__execute(F.leave, V)),
                  M !== void 0 && M !== s && M !== h && M !== p && V.ref.replace(M),
                  (this.__state === p || M === p) && it(V),
                  this.__state === s || M === s)
                )
                  return Z.root;
                continue;
              }
              if (
                ((M = this.__execute(F.enter, V)),
                M !== void 0 && M !== s && M !== h && M !== p && (V.ref.replace(M), (V.node = M)),
                (this.__state === p || M === p) && (it(V), (V.node = null)),
                this.__state === s || M === s)
              )
                return Z.root;
              if (((P = V.node), !!P && (x.push(se), b.push(V), !(this.__state === h || M === h)))) {
                if (((j = P.type || V.wrap), (re = this.__keys[j]), !re))
                  if (this.__fallback) re = this.__fallback(P);
                  else throw new Error("Unknown node type " + j + ".");
                for (U = re.length; (U -= 1) >= 0; )
                  if (((we = re[U]), (ie = P[we]), !!ie))
                    if (Array.isArray(ie)) {
                      for (H = ie.length; (H -= 1) >= 0; )
                        if (ie[H]) {
                          if (E(j, re[U])) V = new C(ie[H], [we, H], "Property", new y(ie, H));
                          else if (m(ie[H])) V = new C(ie[H], [we, H], null, new y(ie, H));
                          else continue;
                          x.push(V);
                        }
                    } else m(ie) && x.push(new C(ie, we, null, new y(P, we)));
              }
            }
            return Z.root;
          });
        function S(B, F) {
          var x = new g();
          return x.traverse(B, F);
        }
        function _(B, F) {
          var x = new g();
          return x.replace(B, F);
        }
        function L(B, F) {
          var x;
          return (
            (x = D(F, function (b) {
              return b.range[0] > B.range[0];
            })),
            (B.extendedRange = [B.range[0], B.range[1]]),
            x !== F.length && (B.extendedRange[1] = F[x].range[0]),
            (x -= 1),
            x >= 0 && (B.extendedRange[0] = F[x].range[1]),
            B
          );
        }
        function v(B, F, x) {
          var b = [],
            P,
            j,
            M,
            V;
          if (!B.range) throw new Error("attachComments needs range information");
          if (!x.length) {
            if (F.length) {
              for (M = 0, j = F.length; M < j; M += 1) (P = A(F[M])), (P.extendedRange = [0, B.range[0]]), b.push(P);
              B.leadingComments = b;
            }
            return B;
          }
          for (M = 0, j = F.length; M < j; M += 1) b.push(L(A(F[M]), x));
          return (
            (V = 0),
            S(B, {
              enter: function (U) {
                for (var H; V < b.length && ((H = b[V]), !(H.extendedRange[1] > U.range[0])); )
                  H.extendedRange[1] === U.range[0]
                    ? (U.leadingComments || (U.leadingComments = []), U.leadingComments.push(H), b.splice(V, 1))
                    : (V += 1);
                if (V === b.length) return i.Break;
                if (b[V].extendedRange[0] > U.range[1]) return i.Skip;
              },
            }),
            (V = 0),
            S(B, {
              leave: function (U) {
                for (var H; V < b.length && ((H = b[V]), !(U.range[1] < H.extendedRange[0])); )
                  U.range[1] === H.extendedRange[0]
                    ? (U.trailingComments || (U.trailingComments = []), U.trailingComments.push(H), b.splice(V, 1))
                    : (V += 1);
                if (V === b.length) return i.Break;
                if (b[V].extendedRange[0] > U.range[1]) return i.Skip;
              },
            }),
            B
          );
        }
        return (
          (n.Syntax = r),
          (n.traverse = S),
          (n.replace = _),
          (n.attachComments = v),
          (n.VisitorKeys = o),
          (n.VisitorOption = i),
          (n.Controller = g),
          (n.cloneEnvironment = function () {
            return t({});
          }),
          n
        );
      })(e);
    },
  }),
  Pu = K({
    "../../node_modules/esutils/lib/ast.js"(e, t) {
      (function () {
        function n(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return !0;
          }
          return !1;
        }
        function r(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }
          return !1;
        }
        function i(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return !0;
          }
          return !1;
        }
        function o(p) {
          return i(p) || (p != null && p.type === "FunctionDeclaration");
        }
        function s(p) {
          switch (p.type) {
            case "IfStatement":
              return p.alternate != null ? p.alternate : p.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return p.body;
          }
          return null;
        }
        function h(p) {
          var A;
          if (p.type !== "IfStatement" || p.alternate == null) return !1;
          A = p.consequent;
          do {
            if (A.type === "IfStatement" && A.alternate == null) return !0;
            A = s(A);
          } while (A);
          return !1;
        }
        t.exports = {
          isExpression: n,
          isStatement: i,
          isIterationStatement: r,
          isSourceElement: o,
          isProblematicIfStatement: h,
          trailingStatement: s,
        };
      })();
    },
  }),
  Fr = K({
    "../../node_modules/esutils/lib/code.js"(e, t) {
      (function () {
        var n, r, i, o, s, h;
        (r = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        }),
          (n = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
          });
        function p(_) {
          return 48 <= _ && _ <= 57;
        }
        function A(_) {
          return (48 <= _ && _ <= 57) || (97 <= _ && _ <= 102) || (65 <= _ && _ <= 70);
        }
        function D(_) {
          return _ >= 48 && _ <= 55;
        }
        i = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
        function y(_) {
          return _ === 32 || _ === 9 || _ === 11 || _ === 12 || _ === 160 || (_ >= 5760 && i.indexOf(_) >= 0);
        }
        function C(_) {
          return _ === 10 || _ === 13 || _ === 8232 || _ === 8233;
        }
        function g(_) {
          if (_ <= 65535) return String.fromCharCode(_);
          var L = String.fromCharCode(Math.floor((_ - 65536) / 1024) + 55296),
            v = String.fromCharCode(((_ - 65536) % 1024) + 56320);
          return L + v;
        }
        for (o = new Array(128), h = 0; h < 128; ++h) o[h] = (h >= 97 && h <= 122) || (h >= 65 && h <= 90) || h === 36 || h === 95;
        for (s = new Array(128), h = 0; h < 128; ++h)
          s[h] = (h >= 97 && h <= 122) || (h >= 65 && h <= 90) || (h >= 48 && h <= 57) || h === 36 || h === 95;
        function m(_) {
          return _ < 128 ? o[_] : r.NonAsciiIdentifierStart.test(g(_));
        }
        function E(_) {
          return _ < 128 ? s[_] : r.NonAsciiIdentifierPart.test(g(_));
        }
        function w(_) {
          return _ < 128 ? o[_] : n.NonAsciiIdentifierStart.test(g(_));
        }
        function S(_) {
          return _ < 128 ? s[_] : n.NonAsciiIdentifierPart.test(g(_));
        }
        t.exports = {
          isDecimalDigit: p,
          isHexDigit: A,
          isOctalDigit: D,
          isWhiteSpace: y,
          isLineTerminator: C,
          isIdentifierStartES5: m,
          isIdentifierPartES5: E,
          isIdentifierStartES6: w,
          isIdentifierPartES6: S,
        };
      })();
    },
  }),
  Nu = K({
    "../../node_modules/esutils/lib/keyword.js"(e, t) {
      (function () {
        var n = Fr();
        function r(m) {
          switch (m) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return !0;
            default:
              return !1;
          }
        }
        function i(m, E) {
          return !E && m === "yield" ? !1 : o(m, E);
        }
        function o(m, E) {
          if (E && r(m)) return !0;
          switch (m.length) {
            case 2:
              return m === "if" || m === "in" || m === "do";
            case 3:
              return m === "var" || m === "for" || m === "new" || m === "try";
            case 4:
              return m === "this" || m === "else" || m === "case" || m === "void" || m === "with" || m === "enum";
            case 5:
              return (
                m === "while" ||
                m === "break" ||
                m === "catch" ||
                m === "throw" ||
                m === "const" ||
                m === "yield" ||
                m === "class" ||
                m === "super"
              );
            case 6:
              return m === "return" || m === "typeof" || m === "delete" || m === "switch" || m === "export" || m === "import";
            case 7:
              return m === "default" || m === "finally" || m === "extends";
            case 8:
              return m === "function" || m === "continue" || m === "debugger";
            case 10:
              return m === "instanceof";
            default:
              return !1;
          }
        }
        function s(m, E) {
          return m === "null" || m === "true" || m === "false" || i(m, E);
        }
        function h(m, E) {
          return m === "null" || m === "true" || m === "false" || o(m, E);
        }
        function p(m) {
          return m === "eval" || m === "arguments";
        }
        function A(m) {
          var E, w, S;
          if (m.length === 0 || ((S = m.charCodeAt(0)), !n.isIdentifierStartES5(S))) return !1;
          for (E = 1, w = m.length; E < w; ++E) if (((S = m.charCodeAt(E)), !n.isIdentifierPartES5(S))) return !1;
          return !0;
        }
        function D(m, E) {
          return (m - 55296) * 1024 + (E - 56320) + 65536;
        }
        function y(m) {
          var E, w, S, _, L;
          if (m.length === 0) return !1;
          for (L = n.isIdentifierStartES6, E = 0, w = m.length; E < w; ++E) {
            if (((S = m.charCodeAt(E)), 55296 <= S && S <= 56319)) {
              if ((++E, E >= w || ((_ = m.charCodeAt(E)), !(56320 <= _ && _ <= 57343)))) return !1;
              S = D(S, _);
            }
            if (!L(S)) return !1;
            L = n.isIdentifierPartES6;
          }
          return !0;
        }
        function C(m, E) {
          return A(m) && !s(m, E);
        }
        function g(m, E) {
          return y(m) && !h(m, E);
        }
        t.exports = {
          isKeywordES5: i,
          isKeywordES6: o,
          isReservedWordES5: s,
          isReservedWordES6: h,
          isRestrictedWord: p,
          isIdentifierNameES5: A,
          isIdentifierNameES6: y,
          isIdentifierES5: C,
          isIdentifierES6: g,
        };
      })();
    },
  }),
  Lu = K({
    "../../node_modules/esutils/lib/utils.js"(e) {
      (function () {
        (e.ast = Pu()), (e.code = Fr()), (e.keyword = Nu());
      })();
    },
  }),
  Ou = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/base64.js"(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      (e.encode = function (n) {
        if (0 <= n && n < t.length) return t[n];
        throw new TypeError("Must be between 0 and 63: " + n);
      }),
        (e.decode = function (n) {
          var r = 65,
            i = 90,
            o = 97,
            s = 122,
            h = 48,
            p = 57,
            A = 43,
            D = 47,
            y = 26,
            C = 52;
          return r <= n && n <= i ? n - r : o <= n && n <= s ? n - o + y : h <= n && n <= p ? n - h + C : n == A ? 62 : n == D ? 63 : -1;
        });
    },
  }),
  yr = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/base64-vlq.js"(e) {
      var t = Ou(),
        n = 5,
        r = 1 << n,
        i = r - 1,
        o = r;
      function s(p) {
        return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
      }
      function h(p) {
        var A = (p & 1) === 1,
          D = p >> 1;
        return A ? -D : D;
      }
      (e.encode = function (p) {
        var A = "",
          D,
          y = s(p);
        do (D = y & i), (y >>>= n), y > 0 && (D |= o), (A += t.encode(D));
        while (y > 0);
        return A;
      }),
        (e.decode = function (p, A, D) {
          var y = p.length,
            C = 0,
            g = 0,
            m,
            E;
          do {
            if (A >= y) throw new Error("Expected more digits in base 64 VLQ value.");
            if (((E = t.decode(p.charCodeAt(A++))), E === -1)) throw new Error("Invalid base64 digit: " + p.charAt(A - 1));
            (m = !!(E & o)), (E &= i), (C = C + (E << g)), (g += n);
          } while (m);
          (D.value = h(C)), (D.rest = A);
        });
    },
  }),
  Ct = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/util.js"(e) {
      function t(v, B, F) {
        if (B in v) return v[B];
        if (arguments.length === 3) return F;
        throw new Error('"' + B + '" is a required argument.');
      }
      e.getArg = t;
      var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        r = /^data:.+\,.+$/;
      function i(v) {
        var B = v.match(n);
        return B ? { scheme: B[1], auth: B[2], host: B[3], port: B[4], path: B[5] } : null;
      }
      e.urlParse = i;
      function o(v) {
        var B = "";
        return (
          v.scheme && (B += v.scheme + ":"),
          (B += "//"),
          v.auth && (B += v.auth + "@"),
          v.host && (B += v.host),
          v.port && (B += ":" + v.port),
          v.path && (B += v.path),
          B
        );
      }
      e.urlGenerate = o;
      function s(v) {
        var B = v,
          F = i(v);
        if (F) {
          if (!F.path) return v;
          B = F.path;
        }
        for (var x = e.isAbsolute(B), b = B.split(/\/+/), P, j = 0, M = b.length - 1; M >= 0; M--)
          (P = b[M]),
            P === "." ? b.splice(M, 1) : P === ".." ? j++ : j > 0 && (P === "" ? (b.splice(M + 1, j), (j = 0)) : (b.splice(M, 2), j--));
        return (B = b.join("/")), B === "" && (B = x ? "/" : "."), F ? ((F.path = B), o(F)) : B;
      }
      e.normalize = s;
      function h(v, B) {
        v === "" && (v = "."), B === "" && (B = ".");
        var F = i(B),
          x = i(v);
        if ((x && (v = x.path || "/"), F && !F.scheme)) return x && (F.scheme = x.scheme), o(F);
        if (F || B.match(r)) return B;
        if (x && !x.host && !x.path) return (x.host = B), o(x);
        var b = B.charAt(0) === "/" ? B : s(v.replace(/\/+$/, "") + "/" + B);
        return x ? ((x.path = b), o(x)) : b;
      }
      (e.join = h),
        (e.isAbsolute = function (v) {
          return v.charAt(0) === "/" || n.test(v);
        });
      function p(v, B) {
        v === "" && (v = "."), (v = v.replace(/\/$/, ""));
        for (var F = 0; B.indexOf(v + "/") !== 0; ) {
          var x = v.lastIndexOf("/");
          if (x < 0 || ((v = v.slice(0, x)), v.match(/^([^\/]+:\/)?\/*$/))) return B;
          ++F;
        }
        return Array(F + 1).join("../") + B.substr(v.length + 1);
      }
      e.relative = p;
      var A = (function () {
        var v = Object.create(null);
        return !("__proto__" in v);
      })();
      function D(v) {
        return v;
      }
      function y(v) {
        return g(v) ? "$" + v : v;
      }
      e.toSetString = A ? D : y;
      function C(v) {
        return g(v) ? v.slice(1) : v;
      }
      e.fromSetString = A ? D : C;
      function g(v) {
        if (!v) return !1;
        var B = v.length;
        if (
          B < 9 ||
          v.charCodeAt(B - 1) !== 95 ||
          v.charCodeAt(B - 2) !== 95 ||
          v.charCodeAt(B - 3) !== 111 ||
          v.charCodeAt(B - 4) !== 116 ||
          v.charCodeAt(B - 5) !== 111 ||
          v.charCodeAt(B - 6) !== 114 ||
          v.charCodeAt(B - 7) !== 112 ||
          v.charCodeAt(B - 8) !== 95 ||
          v.charCodeAt(B - 9) !== 95
        )
          return !1;
        for (var F = B - 10; F >= 0; F--) if (v.charCodeAt(F) !== 36) return !1;
        return !0;
      }
      function m(v, B, F) {
        var x = w(v.source, B.source);
        return x !== 0 ||
          ((x = v.originalLine - B.originalLine), x !== 0) ||
          ((x = v.originalColumn - B.originalColumn), x !== 0 || F) ||
          ((x = v.generatedColumn - B.generatedColumn), x !== 0) ||
          ((x = v.generatedLine - B.generatedLine), x !== 0)
          ? x
          : w(v.name, B.name);
      }
      e.compareByOriginalPositions = m;
      function E(v, B, F) {
        var x = v.generatedLine - B.generatedLine;
        return x !== 0 ||
          ((x = v.generatedColumn - B.generatedColumn), x !== 0 || F) ||
          ((x = w(v.source, B.source)), x !== 0) ||
          ((x = v.originalLine - B.originalLine), x !== 0) ||
          ((x = v.originalColumn - B.originalColumn), x !== 0)
          ? x
          : w(v.name, B.name);
      }
      e.compareByGeneratedPositionsDeflated = E;
      function w(v, B) {
        return v === B ? 0 : v === null ? 1 : B === null ? -1 : v > B ? 1 : -1;
      }
      function S(v, B) {
        var F = v.generatedLine - B.generatedLine;
        return F !== 0 ||
          ((F = v.generatedColumn - B.generatedColumn), F !== 0) ||
          ((F = w(v.source, B.source)), F !== 0) ||
          ((F = v.originalLine - B.originalLine), F !== 0) ||
          ((F = v.originalColumn - B.originalColumn), F !== 0)
          ? F
          : w(v.name, B.name);
      }
      e.compareByGeneratedPositionsInflated = S;
      function _(v) {
        return JSON.parse(v.replace(/^\)]}'[^\n]*\n/, ""));
      }
      e.parseSourceMapInput = _;
      function L(v, B, F) {
        if (((B = B || ""), v && (v[v.length - 1] !== "/" && B[0] !== "/" && (v += "/"), (B = v + B)), F)) {
          var x = i(F);
          if (!x) throw new Error("sourceMapURL could not be parsed");
          if (x.path) {
            var b = x.path.lastIndexOf("/");
            b >= 0 && (x.path = x.path.substring(0, b + 1));
          }
          B = h(o(x), B);
        }
        return s(B);
      }
      e.computeSourceURL = L;
    },
  }),
  Br = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/array-set.js"(e) {
      var t = Ct(),
        n = Object.prototype.hasOwnProperty,
        r = typeof Map < "u";
      function i() {
        (this._array = []), (this._set = r ? new Map() : Object.create(null));
      }
      (i.fromArray = function (o, s) {
        for (var h = new i(), p = 0, A = o.length; p < A; p++) h.add(o[p], s);
        return h;
      }),
        (i.prototype.size = function () {
          return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
        }),
        (i.prototype.add = function (o, s) {
          var h = r ? o : t.toSetString(o),
            p = r ? this.has(o) : n.call(this._set, h),
            A = this._array.length;
          (!p || s) && this._array.push(o), p || (r ? this._set.set(o, A) : (this._set[h] = A));
        }),
        (i.prototype.has = function (o) {
          if (r) return this._set.has(o);
          var s = t.toSetString(o);
          return n.call(this._set, s);
        }),
        (i.prototype.indexOf = function (o) {
          if (r) {
            var s = this._set.get(o);
            if (s >= 0) return s;
          } else {
            var h = t.toSetString(o);
            if (n.call(this._set, h)) return this._set[h];
          }
          throw new Error('"' + o + '" is not in the set.');
        }),
        (i.prototype.at = function (o) {
          if (o >= 0 && o < this._array.length) return this._array[o];
          throw new Error("No element indexed by " + o);
        }),
        (i.prototype.toArray = function () {
          return this._array.slice();
        }),
        (e.ArraySet = i);
    },
  }),
  Ru = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/mapping-list.js"(e) {
      var t = Ct();
      function n(i, o) {
        var s = i.generatedLine,
          h = o.generatedLine,
          p = i.generatedColumn,
          A = o.generatedColumn;
        return h > s || (h == s && A >= p) || t.compareByGeneratedPositionsInflated(i, o) <= 0;
      }
      function r() {
        (this._array = []), (this._sorted = !0), (this._last = { generatedLine: -1, generatedColumn: 0 });
      }
      (r.prototype.unsortedForEach = function (i, o) {
        this._array.forEach(i, o);
      }),
        (r.prototype.add = function (i) {
          n(this._last, i) ? ((this._last = i), this._array.push(i)) : ((this._sorted = !1), this._array.push(i));
        }),
        (r.prototype.toArray = function () {
          return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), (this._sorted = !0)), this._array;
        }),
        (e.MappingList = r);
    },
  }),
  xr = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-map-generator.js"(e) {
      var t = yr(),
        n = Ct(),
        r = Br().ArraySet,
        i = Ru().MappingList;
      function o(s) {
        s || (s = {}),
          (this._file = n.getArg(s, "file", null)),
          (this._sourceRoot = n.getArg(s, "sourceRoot", null)),
          (this._skipValidation = n.getArg(s, "skipValidation", !1)),
          (this._sources = new r()),
          (this._names = new r()),
          (this._mappings = new i()),
          (this._sourcesContents = null);
      }
      (o.prototype._version = 3),
        (o.fromSourceMap = function (s) {
          var h = s.sourceRoot,
            p = new o({ file: s.file, sourceRoot: h });
          return (
            s.eachMapping(function (A) {
              var D = { generated: { line: A.generatedLine, column: A.generatedColumn } };
              A.source != null &&
                ((D.source = A.source),
                h != null && (D.source = n.relative(h, D.source)),
                (D.original = { line: A.originalLine, column: A.originalColumn }),
                A.name != null && (D.name = A.name)),
                p.addMapping(D);
            }),
            s.sources.forEach(function (A) {
              var D = A;
              h !== null && (D = n.relative(h, A)), p._sources.has(D) || p._sources.add(D);
              var y = s.sourceContentFor(A);
              y != null && p.setSourceContent(A, y);
            }),
            p
          );
        }),
        (o.prototype.addMapping = function (s) {
          var h = n.getArg(s, "generated"),
            p = n.getArg(s, "original", null),
            A = n.getArg(s, "source", null),
            D = n.getArg(s, "name", null);
          this._skipValidation || this._validateMapping(h, p, A, D),
            A != null && ((A = String(A)), this._sources.has(A) || this._sources.add(A)),
            D != null && ((D = String(D)), this._names.has(D) || this._names.add(D)),
            this._mappings.add({
              generatedLine: h.line,
              generatedColumn: h.column,
              originalLine: p != null && p.line,
              originalColumn: p != null && p.column,
              source: A,
              name: D,
            });
        }),
        (o.prototype.setSourceContent = function (s, h) {
          var p = s;
          this._sourceRoot != null && (p = n.relative(this._sourceRoot, p)),
            h != null
              ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), (this._sourcesContents[n.toSetString(p)] = h))
              : this._sourcesContents &&
                (delete this._sourcesContents[n.toSetString(p)],
                Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
        }),
        (o.prototype.applySourceMap = function (s, h, p) {
          var A = h;
          if (h == null) {
            if (s.file == null)
              throw new Error(
                `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
              );
            A = s.file;
          }
          var D = this._sourceRoot;
          D != null && (A = n.relative(D, A));
          var y = new r(),
            C = new r();
          this._mappings.unsortedForEach(function (g) {
            if (g.source === A && g.originalLine != null) {
              var m = s.originalPositionFor({ line: g.originalLine, column: g.originalColumn });
              m.source != null &&
                ((g.source = m.source),
                p != null && (g.source = n.join(p, g.source)),
                D != null && (g.source = n.relative(D, g.source)),
                (g.originalLine = m.line),
                (g.originalColumn = m.column),
                m.name != null && (g.name = m.name));
            }
            var E = g.source;
            E != null && !y.has(E) && y.add(E);
            var w = g.name;
            w != null && !C.has(w) && C.add(w);
          }, this),
            (this._sources = y),
            (this._names = C),
            s.sources.forEach(function (g) {
              var m = s.sourceContentFor(g);
              m != null && (p != null && (g = n.join(p, g)), D != null && (g = n.relative(D, g)), this.setSourceContent(g, m));
            }, this);
        }),
        (o.prototype._validateMapping = function (s, h, p, A) {
          if (h && typeof h.line != "number" && typeof h.column != "number")
            throw new Error(
              "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
            );
          if (!(s && "line" in s && "column" in s && s.line > 0 && s.column >= 0 && !h && !p && !A)) {
            if (
              s &&
              "line" in s &&
              "column" in s &&
              h &&
              "line" in h &&
              "column" in h &&
              s.line > 0 &&
              s.column >= 0 &&
              h.line > 0 &&
              h.column >= 0 &&
              p
            )
              return;
            throw new Error("Invalid mapping: " + JSON.stringify({ generated: s, source: p, original: h, name: A }));
          }
        }),
        (o.prototype._serializeMappings = function () {
          for (
            var s = 0, h = 1, p = 0, A = 0, D = 0, y = 0, C = "", g, m, E, w, S = this._mappings.toArray(), _ = 0, L = S.length;
            _ < L;
            _++
          ) {
            if (((m = S[_]), (g = ""), m.generatedLine !== h)) for (s = 0; m.generatedLine !== h; ) (g += ";"), h++;
            else if (_ > 0) {
              if (!n.compareByGeneratedPositionsInflated(m, S[_ - 1])) continue;
              g += ",";
            }
            (g += t.encode(m.generatedColumn - s)),
              (s = m.generatedColumn),
              m.source != null &&
                ((w = this._sources.indexOf(m.source)),
                (g += t.encode(w - y)),
                (y = w),
                (g += t.encode(m.originalLine - 1 - A)),
                (A = m.originalLine - 1),
                (g += t.encode(m.originalColumn - p)),
                (p = m.originalColumn),
                m.name != null && ((E = this._names.indexOf(m.name)), (g += t.encode(E - D)), (D = E))),
              (C += g);
          }
          return C;
        }),
        (o.prototype._generateSourcesContent = function (s, h) {
          return s.map(function (p) {
            if (!this._sourcesContents) return null;
            h != null && (p = n.relative(h, p));
            var A = n.toSetString(p);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, A) ? this._sourcesContents[A] : null;
          }, this);
        }),
        (o.prototype.toJSON = function () {
          var s = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings(),
          };
          return (
            this._file != null && (s.file = this._file),
            this._sourceRoot != null && (s.sourceRoot = this._sourceRoot),
            this._sourcesContents && (s.sourcesContent = this._generateSourcesContent(s.sources, s.sourceRoot)),
            s
          );
        }),
        (o.prototype.toString = function () {
          return JSON.stringify(this.toJSON());
        }),
        (e.SourceMapGenerator = o);
    },
  }),
  ju = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/binary-search.js"(e) {
      (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
      function t(n, r, i, o, s, h) {
        var p = Math.floor((r - n) / 2) + n,
          A = s(i, o[p], !0);
        return A === 0
          ? p
          : A > 0
          ? r - p > 1
            ? t(p, r, i, o, s, h)
            : h == e.LEAST_UPPER_BOUND
            ? r < o.length
              ? r
              : -1
            : p
          : p - n > 1
          ? t(n, p, i, o, s, h)
          : h == e.LEAST_UPPER_BOUND
          ? p
          : n < 0
          ? -1
          : n;
      }
      e.search = function (n, r, i, o) {
        if (r.length === 0) return -1;
        var s = t(-1, r.length, n, r, i, o || e.GREATEST_LOWER_BOUND);
        if (s < 0) return -1;
        for (; s - 1 >= 0 && i(r[s], r[s - 1], !0) === 0; ) --s;
        return s;
      };
    },
  }),
  Mu = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/quick-sort.js"(e) {
      function t(i, o, s) {
        var h = i[o];
        (i[o] = i[s]), (i[s] = h);
      }
      function n(i, o) {
        return Math.round(i + Math.random() * (o - i));
      }
      function r(i, o, s, h) {
        if (s < h) {
          var p = n(s, h),
            A = s - 1;
          t(i, p, h);
          for (var D = i[h], y = s; y < h; y++) o(i[y], D) <= 0 && ((A += 1), t(i, A, y));
          t(i, A + 1, y);
          var C = A + 1;
          r(i, o, s, C - 1), r(i, o, C + 1, h);
        }
      }
      e.quickSort = function (i, o) {
        r(i, o, 0, i.length - 1);
      };
    },
  }),
  Vu = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-map-consumer.js"(e) {
      var t = Ct(),
        n = ju(),
        r = Br().ArraySet,
        i = yr(),
        o = Mu().quickSort;
      function s(D, y) {
        var C = D;
        return typeof D == "string" && (C = t.parseSourceMapInput(D)), C.sections != null ? new A(C, y) : new h(C, y);
      }
      (s.fromSourceMap = function (D, y) {
        return h.fromSourceMap(D, y);
      }),
        (s.prototype._version = 3),
        (s.prototype.__generatedMappings = null),
        Object.defineProperty(s.prototype, "_generatedMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
          },
        }),
        (s.prototype.__originalMappings = null),
        Object.defineProperty(s.prototype, "_originalMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
          },
        }),
        (s.prototype._charIsMappingSeparator = function (D, y) {
          var C = D.charAt(y);
          return C === ";" || C === ",";
        }),
        (s.prototype._parseMappings = function (D, y) {
          throw new Error("Subclasses must implement _parseMappings");
        }),
        (s.GENERATED_ORDER = 1),
        (s.ORIGINAL_ORDER = 2),
        (s.GREATEST_LOWER_BOUND = 1),
        (s.LEAST_UPPER_BOUND = 2),
        (s.prototype.eachMapping = function (D, y, C) {
          var g = y || null,
            m = C || s.GENERATED_ORDER,
            E;
          switch (m) {
            case s.GENERATED_ORDER:
              E = this._generatedMappings;
              break;
            case s.ORIGINAL_ORDER:
              E = this._originalMappings;
              break;
            default:
              throw new Error("Unknown order of iteration.");
          }
          var w = this.sourceRoot;
          E.map(function (S) {
            var _ = S.source === null ? null : this._sources.at(S.source);
            return (
              (_ = t.computeSourceURL(w, _, this._sourceMapURL)),
              {
                source: _,
                generatedLine: S.generatedLine,
                generatedColumn: S.generatedColumn,
                originalLine: S.originalLine,
                originalColumn: S.originalColumn,
                name: S.name === null ? null : this._names.at(S.name),
              }
            );
          }, this).forEach(D, g);
        }),
        (s.prototype.allGeneratedPositionsFor = function (D) {
          var y = t.getArg(D, "line"),
            C = { source: t.getArg(D, "source"), originalLine: y, originalColumn: t.getArg(D, "column", 0) };
          if (((C.source = this._findSourceIndex(C.source)), C.source < 0)) return [];
          var g = [],
            m = this._findMapping(
              C,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              t.compareByOriginalPositions,
              n.LEAST_UPPER_BOUND
            );
          if (m >= 0) {
            var E = this._originalMappings[m];
            if (D.column === void 0)
              for (var w = E.originalLine; E && E.originalLine === w; )
                g.push({
                  line: t.getArg(E, "generatedLine", null),
                  column: t.getArg(E, "generatedColumn", null),
                  lastColumn: t.getArg(E, "lastGeneratedColumn", null),
                }),
                  (E = this._originalMappings[++m]);
            else
              for (var S = E.originalColumn; E && E.originalLine === y && E.originalColumn == S; )
                g.push({
                  line: t.getArg(E, "generatedLine", null),
                  column: t.getArg(E, "generatedColumn", null),
                  lastColumn: t.getArg(E, "lastGeneratedColumn", null),
                }),
                  (E = this._originalMappings[++m]);
          }
          return g;
        }),
        (e.SourceMapConsumer = s);
      function h(D, y) {
        var C = D;
        typeof D == "string" && (C = t.parseSourceMapInput(D));
        var g = t.getArg(C, "version"),
          m = t.getArg(C, "sources"),
          E = t.getArg(C, "names", []),
          w = t.getArg(C, "sourceRoot", null),
          S = t.getArg(C, "sourcesContent", null),
          _ = t.getArg(C, "mappings"),
          L = t.getArg(C, "file", null);
        if (g != this._version) throw new Error("Unsupported version: " + g);
        w && (w = t.normalize(w)),
          (m = m
            .map(String)
            .map(t.normalize)
            .map(function (v) {
              return w && t.isAbsolute(w) && t.isAbsolute(v) ? t.relative(w, v) : v;
            })),
          (this._names = r.fromArray(E.map(String), !0)),
          (this._sources = r.fromArray(m, !0)),
          (this._absoluteSources = this._sources.toArray().map(function (v) {
            return t.computeSourceURL(w, v, y);
          })),
          (this.sourceRoot = w),
          (this.sourcesContent = S),
          (this._mappings = _),
          (this._sourceMapURL = y),
          (this.file = L);
      }
      (h.prototype = Object.create(s.prototype)),
        (h.prototype.consumer = s),
        (h.prototype._findSourceIndex = function (D) {
          var y = D;
          if ((this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))) return this._sources.indexOf(y);
          var C;
          for (C = 0; C < this._absoluteSources.length; ++C) if (this._absoluteSources[C] == D) return C;
          return -1;
        }),
        (h.fromSourceMap = function (D, y) {
          var C = Object.create(h.prototype),
            g = (C._names = r.fromArray(D._names.toArray(), !0)),
            m = (C._sources = r.fromArray(D._sources.toArray(), !0));
          (C.sourceRoot = D._sourceRoot),
            (C.sourcesContent = D._generateSourcesContent(C._sources.toArray(), C.sourceRoot)),
            (C.file = D._file),
            (C._sourceMapURL = y),
            (C._absoluteSources = C._sources.toArray().map(function (F) {
              return t.computeSourceURL(C.sourceRoot, F, y);
            }));
          for (
            var E = D._mappings.toArray().slice(), w = (C.__generatedMappings = []), S = (C.__originalMappings = []), _ = 0, L = E.length;
            _ < L;
            _++
          ) {
            var v = E[_],
              B = new p();
            (B.generatedLine = v.generatedLine),
              (B.generatedColumn = v.generatedColumn),
              v.source &&
                ((B.source = m.indexOf(v.source)),
                (B.originalLine = v.originalLine),
                (B.originalColumn = v.originalColumn),
                v.name && (B.name = g.indexOf(v.name)),
                S.push(B)),
              w.push(B);
          }
          return o(C.__originalMappings, t.compareByOriginalPositions), C;
        }),
        (h.prototype._version = 3),
        Object.defineProperty(h.prototype, "sources", {
          get: function () {
            return this._absoluteSources.slice();
          },
        });
      function p() {
        (this.generatedLine = 0),
          (this.generatedColumn = 0),
          (this.source = null),
          (this.originalLine = null),
          (this.originalColumn = null),
          (this.name = null);
      }
      (h.prototype._parseMappings = function (D, y) {
        for (var C = 1, g = 0, m = 0, E = 0, w = 0, S = 0, _ = D.length, L = 0, v = {}, B = {}, F = [], x = [], b, P, j, M, V; L < _; )
          if (D.charAt(L) === ";") C++, L++, (g = 0);
          else if (D.charAt(L) === ",") L++;
          else {
            for (b = new p(), b.generatedLine = C, M = L; M < _ && !this._charIsMappingSeparator(D, M); M++);
            if (((P = D.slice(L, M)), (j = v[P]), j)) L += P.length;
            else {
              for (j = []; L < M; ) i.decode(D, L, B), (V = B.value), (L = B.rest), j.push(V);
              if (j.length === 2) throw new Error("Found a source, but no line and column");
              if (j.length === 3) throw new Error("Found a source and line, but no column");
              v[P] = j;
            }
            (b.generatedColumn = g + j[0]),
              (g = b.generatedColumn),
              j.length > 1 &&
                ((b.source = w + j[1]),
                (w += j[1]),
                (b.originalLine = m + j[2]),
                (m = b.originalLine),
                (b.originalLine += 1),
                (b.originalColumn = E + j[3]),
                (E = b.originalColumn),
                j.length > 4 && ((b.name = S + j[4]), (S += j[4]))),
              x.push(b),
              typeof b.originalLine == "number" && F.push(b);
          }
        o(x, t.compareByGeneratedPositionsDeflated),
          (this.__generatedMappings = x),
          o(F, t.compareByOriginalPositions),
          (this.__originalMappings = F);
      }),
        (h.prototype._findMapping = function (D, y, C, g, m, E) {
          if (D[C] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + D[C]);
          if (D[g] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + D[g]);
          return n.search(D, y, m, E);
        }),
        (h.prototype.computeColumnSpans = function () {
          for (var D = 0; D < this._generatedMappings.length; ++D) {
            var y = this._generatedMappings[D];
            if (D + 1 < this._generatedMappings.length) {
              var C = this._generatedMappings[D + 1];
              if (y.generatedLine === C.generatedLine) {
                y.lastGeneratedColumn = C.generatedColumn - 1;
                continue;
              }
            }
            y.lastGeneratedColumn = 1 / 0;
          }
        }),
        (h.prototype.originalPositionFor = function (D) {
          var y = { generatedLine: t.getArg(D, "line"), generatedColumn: t.getArg(D, "column") },
            C = this._findMapping(
              y,
              this._generatedMappings,
              "generatedLine",
              "generatedColumn",
              t.compareByGeneratedPositionsDeflated,
              t.getArg(D, "bias", s.GREATEST_LOWER_BOUND)
            );
          if (C >= 0) {
            var g = this._generatedMappings[C];
            if (g.generatedLine === y.generatedLine) {
              var m = t.getArg(g, "source", null);
              m !== null && ((m = this._sources.at(m)), (m = t.computeSourceURL(this.sourceRoot, m, this._sourceMapURL)));
              var E = t.getArg(g, "name", null);
              return (
                E !== null && (E = this._names.at(E)),
                { source: m, line: t.getArg(g, "originalLine", null), column: t.getArg(g, "originalColumn", null), name: E }
              );
            }
          }
          return { source: null, line: null, column: null, name: null };
        }),
        (h.prototype.hasContentsOfAllSources = function () {
          return this.sourcesContent
            ? this.sourcesContent.length >= this._sources.size() &&
                !this.sourcesContent.some(function (D) {
                  return D == null;
                })
            : !1;
        }),
        (h.prototype.sourceContentFor = function (D, y) {
          if (!this.sourcesContent) return null;
          var C = this._findSourceIndex(D);
          if (C >= 0) return this.sourcesContent[C];
          var g = D;
          this.sourceRoot != null && (g = t.relative(this.sourceRoot, g));
          var m;
          if (this.sourceRoot != null && (m = t.urlParse(this.sourceRoot))) {
            var E = g.replace(/^file:\/\//, "");
            if (m.scheme == "file" && this._sources.has(E)) return this.sourcesContent[this._sources.indexOf(E)];
            if ((!m.path || m.path == "/") && this._sources.has("/" + g)) return this.sourcesContent[this._sources.indexOf("/" + g)];
          }
          if (y) return null;
          throw new Error('"' + g + '" is not in the SourceMap.');
        }),
        (h.prototype.generatedPositionFor = function (D) {
          var y = t.getArg(D, "source");
          if (((y = this._findSourceIndex(y)), y < 0)) return { line: null, column: null, lastColumn: null };
          var C = { source: y, originalLine: t.getArg(D, "line"), originalColumn: t.getArg(D, "column") },
            g = this._findMapping(
              C,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              t.compareByOriginalPositions,
              t.getArg(D, "bias", s.GREATEST_LOWER_BOUND)
            );
          if (g >= 0) {
            var m = this._originalMappings[g];
            if (m.source === C.source)
              return {
                line: t.getArg(m, "generatedLine", null),
                column: t.getArg(m, "generatedColumn", null),
                lastColumn: t.getArg(m, "lastGeneratedColumn", null),
              };
          }
          return { line: null, column: null, lastColumn: null };
        }),
        (e.BasicSourceMapConsumer = h);
      function A(D, y) {
        var C = D;
        typeof D == "string" && (C = t.parseSourceMapInput(D));
        var g = t.getArg(C, "version"),
          m = t.getArg(C, "sections");
        if (g != this._version) throw new Error("Unsupported version: " + g);
        (this._sources = new r()), (this._names = new r());
        var E = { line: -1, column: 0 };
        this._sections = m.map(function (w) {
          if (w.url) throw new Error("Support for url field in sections not implemented.");
          var S = t.getArg(w, "offset"),
            _ = t.getArg(S, "line"),
            L = t.getArg(S, "column");
          if (_ < E.line || (_ === E.line && L < E.column)) throw new Error("Section offsets must be ordered and non-overlapping.");
          return (E = S), { generatedOffset: { generatedLine: _ + 1, generatedColumn: L + 1 }, consumer: new s(t.getArg(w, "map"), y) };
        });
      }
      (A.prototype = Object.create(s.prototype)),
        (A.prototype.constructor = s),
        (A.prototype._version = 3),
        Object.defineProperty(A.prototype, "sources", {
          get: function () {
            for (var D = [], y = 0; y < this._sections.length; y++)
              for (var C = 0; C < this._sections[y].consumer.sources.length; C++) D.push(this._sections[y].consumer.sources[C]);
            return D;
          },
        }),
        (A.prototype.originalPositionFor = function (D) {
          var y = { generatedLine: t.getArg(D, "line"), generatedColumn: t.getArg(D, "column") },
            C = n.search(y, this._sections, function (m, E) {
              var w = m.generatedLine - E.generatedOffset.generatedLine;
              return w || m.generatedColumn - E.generatedOffset.generatedColumn;
            }),
            g = this._sections[C];
          return g
            ? g.consumer.originalPositionFor({
                line: y.generatedLine - (g.generatedOffset.generatedLine - 1),
                column:
                  y.generatedColumn - (g.generatedOffset.generatedLine === y.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
                bias: D.bias,
              })
            : { source: null, line: null, column: null, name: null };
        }),
        (A.prototype.hasContentsOfAllSources = function () {
          return this._sections.every(function (D) {
            return D.consumer.hasContentsOfAllSources();
          });
        }),
        (A.prototype.sourceContentFor = function (D, y) {
          for (var C = 0; C < this._sections.length; C++) {
            var g = this._sections[C],
              m = g.consumer.sourceContentFor(D, !0);
            if (m) return m;
          }
          if (y) return null;
          throw new Error('"' + D + '" is not in the SourceMap.');
        }),
        (A.prototype.generatedPositionFor = function (D) {
          for (var y = 0; y < this._sections.length; y++) {
            var C = this._sections[y];
            if (C.consumer._findSourceIndex(t.getArg(D, "source")) !== -1) {
              var g = C.consumer.generatedPositionFor(D);
              if (g) {
                var m = {
                  line: g.line + (C.generatedOffset.generatedLine - 1),
                  column: g.column + (C.generatedOffset.generatedLine === g.line ? C.generatedOffset.generatedColumn - 1 : 0),
                };
                return m;
              }
            }
          }
          return { line: null, column: null };
        }),
        (A.prototype._parseMappings = function (D, y) {
          (this.__generatedMappings = []), (this.__originalMappings = []);
          for (var C = 0; C < this._sections.length; C++)
            for (var g = this._sections[C], m = g.consumer._generatedMappings, E = 0; E < m.length; E++) {
              var w = m[E],
                S = g.consumer._sources.at(w.source);
              (S = t.computeSourceURL(g.consumer.sourceRoot, S, this._sourceMapURL)), this._sources.add(S), (S = this._sources.indexOf(S));
              var _ = null;
              w.name && ((_ = g.consumer._names.at(w.name)), this._names.add(_), (_ = this._names.indexOf(_)));
              var L = {
                source: S,
                generatedLine: w.generatedLine + (g.generatedOffset.generatedLine - 1),
                generatedColumn:
                  w.generatedColumn + (g.generatedOffset.generatedLine === w.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
                originalLine: w.originalLine,
                originalColumn: w.originalColumn,
                name: _,
              };
              this.__generatedMappings.push(L), typeof L.originalLine == "number" && this.__originalMappings.push(L);
            }
          o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
        }),
        (e.IndexedSourceMapConsumer = A);
    },
  }),
  qu = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-node.js"(e) {
      var t = xr().SourceMapGenerator,
        n = Ct(),
        r = /(\r?\n)/,
        i = 10,
        o = "$$$isSourceNode$$$";
      function s(h, p, A, D, y) {
        (this.children = []),
          (this.sourceContents = {}),
          (this.line = h ?? null),
          (this.column = p ?? null),
          (this.source = A ?? null),
          (this.name = y ?? null),
          (this[o] = !0),
          D != null && this.add(D);
      }
      (s.fromStringWithSourceMap = function (h, p, A) {
        var D = new s(),
          y = h.split(r),
          C = 0,
          g = function () {
            var _ = v(),
              L = v() || "";
            return _ + L;
            function v() {
              return C < y.length ? y[C++] : void 0;
            }
          },
          m = 1,
          E = 0,
          w = null;
        return (
          p.eachMapping(function (_) {
            if (w !== null)
              if (m < _.generatedLine) S(w, g()), m++, (E = 0);
              else {
                var L = y[C] || "",
                  v = L.substr(0, _.generatedColumn - E);
                (y[C] = L.substr(_.generatedColumn - E)), (E = _.generatedColumn), S(w, v), (w = _);
                return;
              }
            for (; m < _.generatedLine; ) D.add(g()), m++;
            if (E < _.generatedColumn) {
              var L = y[C] || "";
              D.add(L.substr(0, _.generatedColumn)), (y[C] = L.substr(_.generatedColumn)), (E = _.generatedColumn);
            }
            w = _;
          }, this),
          C < y.length && (w && S(w, g()), D.add(y.splice(C).join(""))),
          p.sources.forEach(function (_) {
            var L = p.sourceContentFor(_);
            L != null && (A != null && (_ = n.join(A, _)), D.setSourceContent(_, L));
          }),
          D
        );
        function S(_, L) {
          if (_ === null || _.source === void 0) D.add(L);
          else {
            var v = A ? n.join(A, _.source) : _.source;
            D.add(new s(_.originalLine, _.originalColumn, v, L, _.name));
          }
        }
      }),
        (s.prototype.add = function (h) {
          if (Array.isArray(h))
            h.forEach(function (p) {
              this.add(p);
            }, this);
          else if (h[o] || typeof h == "string") h && this.children.push(h);
          else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h);
          return this;
        }),
        (s.prototype.prepend = function (h) {
          if (Array.isArray(h)) for (var p = h.length - 1; p >= 0; p--) this.prepend(h[p]);
          else if (h[o] || typeof h == "string") this.children.unshift(h);
          else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h);
          return this;
        }),
        (s.prototype.walk = function (h) {
          for (var p, A = 0, D = this.children.length; A < D; A++)
            (p = this.children[A]),
              p[o] ? p.walk(h) : p !== "" && h(p, { source: this.source, line: this.line, column: this.column, name: this.name });
        }),
        (s.prototype.join = function (h) {
          var p,
            A,
            D = this.children.length;
          if (D > 0) {
            for (p = [], A = 0; A < D - 1; A++) p.push(this.children[A]), p.push(h);
            p.push(this.children[A]), (this.children = p);
          }
          return this;
        }),
        (s.prototype.replaceRight = function (h, p) {
          var A = this.children[this.children.length - 1];
          return (
            A[o]
              ? A.replaceRight(h, p)
              : typeof A == "string"
              ? (this.children[this.children.length - 1] = A.replace(h, p))
              : this.children.push("".replace(h, p)),
            this
          );
        }),
        (s.prototype.setSourceContent = function (h, p) {
          this.sourceContents[n.toSetString(h)] = p;
        }),
        (s.prototype.walkSourceContents = function (h) {
          for (var p = 0, A = this.children.length; p < A; p++) this.children[p][o] && this.children[p].walkSourceContents(h);
          for (var D = Object.keys(this.sourceContents), p = 0, A = D.length; p < A; p++)
            h(n.fromSetString(D[p]), this.sourceContents[D[p]]);
        }),
        (s.prototype.toString = function () {
          var h = "";
          return (
            this.walk(function (p) {
              h += p;
            }),
            h
          );
        }),
        (s.prototype.toStringWithSourceMap = function (h) {
          var p = { code: "", line: 1, column: 0 },
            A = new t(h),
            D = !1,
            y = null,
            C = null,
            g = null,
            m = null;
          return (
            this.walk(function (E, w) {
              (p.code += E),
                w.source !== null && w.line !== null && w.column !== null
                  ? ((y !== w.source || C !== w.line || g !== w.column || m !== w.name) &&
                      A.addMapping({
                        source: w.source,
                        original: { line: w.line, column: w.column },
                        generated: { line: p.line, column: p.column },
                        name: w.name,
                      }),
                    (y = w.source),
                    (C = w.line),
                    (g = w.column),
                    (m = w.name),
                    (D = !0))
                  : D && (A.addMapping({ generated: { line: p.line, column: p.column } }), (y = null), (D = !1));
              for (var S = 0, _ = E.length; S < _; S++)
                E.charCodeAt(S) === i
                  ? (p.line++,
                    (p.column = 0),
                    S + 1 === _
                      ? ((y = null), (D = !1))
                      : D &&
                        A.addMapping({
                          source: w.source,
                          original: { line: w.line, column: w.column },
                          generated: { line: p.line, column: p.column },
                          name: w.name,
                        }))
                  : p.column++;
            }),
            this.walkSourceContents(function (E, w) {
              A.setSourceContent(E, w);
            }),
            { code: p.code, map: A }
          );
        }),
        (e.SourceNode = s);
    },
  }),
  Uu = K({
    "../../node_modules/escodegen/node_modules/source-map/source-map.js"(e) {
      (e.SourceMapGenerator = xr().SourceMapGenerator), (e.SourceMapConsumer = Vu().SourceMapConsumer), (e.SourceNode = qu().SourceNode);
    },
  }),
  Wu = K({
    "../../node_modules/escodegen/package.json"(e, t) {
      t.exports = {
        name: "escodegen",
        description: "ECMAScript code generator",
        homepage: "http://github.com/estools/escodegen",
        main: "escodegen.js",
        bin: { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
        files: ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
        version: "2.1.0",
        engines: { node: ">=6.0" },
        maintainers: [{ name: "Yusuke Suzuki", email: "utatane.tea@gmail.com", web: "http://github.com/Constellation" }],
        repository: { type: "git", url: "http://github.com/estools/escodegen.git" },
        dependencies: { estraverse: "^5.2.0", esutils: "^2.0.2", esprima: "^4.0.1" },
        optionalDependencies: { "source-map": "~0.6.1" },
        devDependencies: {
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
        license: "BSD-2-Clause",
        scripts: {
          test: "gulp travis",
          "unit-test": "gulp test",
          lint: "gulp lint",
          release: "node tools/release.js",
          "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
          build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
        },
      };
    },
  }),
  zu = K({
    "../../node_modules/escodegen/escodegen.js"(e) {
      (function () {
        var t, n, r, i, o, s, h, p, A, D, y, C, g, m, E, w, S, _, L, v, B, F, x, b, P, j;
        (o = Tu()), (s = Lu()), (t = o.Syntax);
        function M(u) {
          return oe.Expression.hasOwnProperty(u.type);
        }
        function V(u) {
          return oe.Statement.hasOwnProperty(u.type);
        }
        (n = {
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
          (r = {
            "??": n.Coalesce,
            "||": n.LogicalOR,
            "&&": n.LogicalAND,
            "|": n.BitwiseOR,
            "^": n.BitwiseXOR,
            "&": n.BitwiseAND,
            "==": n.Equality,
            "!=": n.Equality,
            "===": n.Equality,
            "!==": n.Equality,
            is: n.Equality,
            isnt: n.Equality,
            "<": n.Relational,
            ">": n.Relational,
            "<=": n.Relational,
            ">=": n.Relational,
            in: n.Relational,
            instanceof: n.Relational,
            "<<": n.BitwiseSHIFT,
            ">>": n.BitwiseSHIFT,
            ">>>": n.BitwiseSHIFT,
            "+": n.Additive,
            "-": n.Additive,
            "*": n.Multiplicative,
            "%": n.Multiplicative,
            "/": n.Multiplicative,
            "**": n.Exponentiation,
          });
        var U = 1,
          H = 2,
          re = 4,
          ie = 8,
          se = 16,
          Z = 32,
          we = 64,
          it = H | re,
          Re = U | H,
          R = U | H | re,
          Je = U,
          je = re,
          st = U | re,
          ne = U,
          Be = U | Z,
          Ft = 0,
          nu = U | se,
          ru = U | ie;
        function In() {
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
        function Me(u, l) {
          var a = "";
          for (l |= 0; l > 0; l >>>= 1, u += u) l & 1 && (a += u);
          return a;
        }
        function uu(u) {
          return /[\r\n]/g.test(u);
        }
        function he(u) {
          var l = u.length;
          return l && s.code.isLineTerminator(u.charCodeAt(l - 1));
        }
        function Tn(u, l) {
          var a;
          for (a in l) l.hasOwnProperty(a) && (u[a] = l[a]);
          return u;
        }
        function yt(u, l) {
          var a, c;
          function d(k) {
            return typeof k == "object" && k instanceof Object && !(k instanceof RegExp);
          }
          for (a in l) l.hasOwnProperty(a) && ((c = l[a]), d(c) ? (d(u[a]) ? yt(u[a], c) : (u[a] = yt({}, c))) : (u[a] = c));
          return u;
        }
        function iu(u) {
          var l, a, c, d, k;
          if (u !== u) throw new Error("Numeric literal whose value is NaN");
          if (u < 0 || (u === 0 && 1 / u < 0)) throw new Error("Numeric literal whose value is negative");
          if (u === 1 / 0) return A ? "null" : D ? "1e400" : "1e+400";
          if (((l = "" + u), !D || l.length < 3)) return l;
          for (
            a = l.indexOf("."),
              !A && l.charCodeAt(0) === 48 && a === 1 && ((a = 0), (l = l.slice(1))),
              c = l,
              l = l.replace("e+", "e"),
              d = 0,
              (k = c.indexOf("e")) > 0 && ((d = +c.slice(k + 1)), (c = c.slice(0, k))),
              a >= 0 && ((d -= c.length - a - 1), (c = +(c.slice(0, a) + c.slice(a + 1)) + "")),
              k = 0;
            c.charCodeAt(c.length + k - 1) === 48;

          )
            --k;
          return (
            k !== 0 && ((d -= k), (c = c.slice(0, k))),
            d !== 0 && (c += "e" + d),
            (c.length < l.length || (y && u > 1e12 && Math.floor(u) === u && (c = "0x" + u.toString(16)).length < l.length)) &&
              +c === u &&
              (l = c),
            l
          );
        }
        function Pn(u, l) {
          return (u & -2) === 8232
            ? (l ? "u" : "\\u") + (u === 8232 ? "2028" : "2029")
            : u === 10 || u === 13
            ? (l ? "" : "\\") + (u === 10 ? "n" : "r")
            : String.fromCharCode(u);
        }
        function su(u) {
          var l, a, c, d, k, I, T, O;
          if (((a = u.toString()), u.source)) {
            if (((l = a.match(/\/([^/]*)$/)), !l)) return a;
            for (c = l[1], a = "", T = !1, O = !1, d = 0, k = u.source.length; d < k; ++d)
              (I = u.source.charCodeAt(d)),
                O
                  ? ((a += Pn(I, O)), (O = !1))
                  : (T ? I === 93 && (T = !1) : I === 47 ? (a += "\\") : I === 91 && (T = !0), (a += Pn(I, O)), (O = I === 92));
            return "/" + a + "/" + c;
          }
          return a;
        }
        function au(u, l) {
          var a;
          return u === 8
            ? "\\b"
            : u === 12
            ? "\\f"
            : u === 9
            ? "\\t"
            : ((a = u.toString(16).toUpperCase()),
              A || u > 255
                ? "\\u" + "0000".slice(a.length) + a
                : u === 0 && !s.code.isDecimalDigit(l)
                ? "\\0"
                : u === 11
                ? "\\x0B"
                : "\\x" + "00".slice(a.length) + a);
        }
        function ou(u) {
          if (u === 92) return "\\\\";
          if (u === 10) return "\\n";
          if (u === 13) return "\\r";
          if (u === 8232) return "\\u2028";
          if (u === 8233) return "\\u2029";
          throw new Error("Incorrectly classified character");
        }
        function lu(u) {
          var l, a, c, d;
          for (d = C === "double" ? '"' : "'", l = 0, a = u.length; l < a; ++l)
            if (((c = u.charCodeAt(l)), c === 39)) {
              d = '"';
              break;
            } else if (c === 34) {
              d = "'";
              break;
            } else c === 92 && ++l;
          return d + u + d;
        }
        function cu(u) {
          var l = "",
            a,
            c,
            d,
            k = 0,
            I = 0,
            T,
            O;
          for (a = 0, c = u.length; a < c; ++a) {
            if (((d = u.charCodeAt(a)), d === 39)) ++k;
            else if (d === 34) ++I;
            else if (d === 47 && A) l += "\\";
            else if (s.code.isLineTerminator(d) || d === 92) {
              l += ou(d);
              continue;
            } else if (!s.code.isIdentifierPartES5(d) && ((A && d < 32) || (!A && !g && (d < 32 || d > 126)))) {
              l += au(d, u.charCodeAt(a + 1));
              continue;
            }
            l += String.fromCharCode(d);
          }
          if (((T = !(C === "double" || (C === "auto" && I < k))), (O = T ? "'" : '"'), !(T ? k : I))) return O + l + O;
          for (u = l, l = O, a = 0, c = u.length; a < c; ++a)
            (d = u.charCodeAt(a)), ((d === 39 && T) || (d === 34 && !T)) && (l += "\\"), (l += String.fromCharCode(d));
          return l + O;
        }
        function Nn(u) {
          var l,
            a,
            c,
            d = "";
          for (l = 0, a = u.length; l < a; ++l) (c = u[l]), (d += Array.isArray(c) ? Nn(c) : c);
          return d;
        }
        function Y(u, l) {
          if (!F) return Array.isArray(u) ? Nn(u) : u;
          if (l == null) {
            if (u instanceof i) return u;
            l = {};
          }
          return l.loc == null
            ? new i(null, null, F, u, l.name || null)
            : new i(l.loc.start.line, l.loc.start.column, F === !0 ? l.loc.source || null : F, u, l.name || null);
        }
        function pe() {
          return E || " ";
        }
        function W(u, l) {
          var a, c, d, k;
          return (
            (a = Y(u).toString()),
            a.length === 0
              ? [l]
              : ((c = Y(l).toString()),
                c.length === 0
                  ? [u]
                  : ((d = a.charCodeAt(a.length - 1)),
                    (k = c.charCodeAt(0)),
                    ((d === 43 || d === 45) && d === k) ||
                    (s.code.isIdentifierPartES5(d) && s.code.isIdentifierPartES5(k)) ||
                    (d === 47 && k === 105)
                      ? [u, pe(), l]
                      : s.code.isWhiteSpace(d) || s.code.isLineTerminator(d) || s.code.isWhiteSpace(k) || s.code.isLineTerminator(k)
                      ? [u, l]
                      : [u, E, l]))
          );
        }
        function fe(u) {
          return [h, u];
        }
        function ae(u) {
          var l;
          (l = h), (h += p), u(h), (h = l);
        }
        function hu(u) {
          var l;
          for (l = u.length - 1; l >= 0 && !s.code.isLineTerminator(u.charCodeAt(l)); --l);
          return u.length - 1 - l;
        }
        function pu(u, l) {
          var a, c, d, k, I, T, O, J;
          for (a = u.split(/\r\n|[\r\n]/), T = Number.MAX_VALUE, c = 1, d = a.length; c < d; ++c) {
            for (k = a[c], I = 0; I < k.length && s.code.isWhiteSpace(k.charCodeAt(I)); ) ++I;
            T > I && (T = I);
          }
          for (
            typeof l < "u" ? ((O = h), a[1][T] === "*" && (l += " "), (h = l)) : (T & 1 && --T, (O = h)), c = 1, d = a.length;
            c < d;
            ++c
          )
            (J = Y(fe(a[c].slice(T)))), (a[c] = F ? J.join("") : J);
          return (
            (h = O),
            a.join(`
`)
          );
        }
        function ke(u, l) {
          if (u.type === "Line") {
            if (he(u.value)) return "//" + u.value;
            var a = "//" + u.value;
            return (
              b ||
                (a += `
`),
              a
            );
          }
          return v.format.indent.adjustMultilineComment && /[\n\r]/.test(u.value) ? pu("/*" + u.value + "*/", l) : "/*" + u.value + "*/";
        }
        function Ln(u, l) {
          var a, c, d, k, I, T, O, J, ce, Ve, He, jn, Mn, xe;
          if (u.leadingComments && u.leadingComments.length > 0) {
            if (((k = l), b)) {
              for (
                d = u.leadingComments[0],
                  l = [],
                  J = d.extendedRange,
                  ce = d.range,
                  He = x.substring(J[0], ce[0]),
                  xe = (He.match(/\n/g) || []).length,
                  xe > 0
                    ? (l.push(
                        Me(
                          `
`,
                          xe
                        )
                      ),
                      l.push(fe(ke(d))))
                    : (l.push(He), l.push(ke(d))),
                  Ve = ce,
                  a = 1,
                  c = u.leadingComments.length;
                a < c;
                a++
              )
                (d = u.leadingComments[a]),
                  (ce = d.range),
                  (jn = x.substring(Ve[1], ce[0])),
                  (xe = (jn.match(/\n/g) || []).length),
                  l.push(
                    Me(
                      `
`,
                      xe
                    )
                  ),
                  l.push(fe(ke(d))),
                  (Ve = ce);
              (Mn = x.substring(ce[1], J[1])),
                (xe = (Mn.match(/\n/g) || []).length),
                l.push(
                  Me(
                    `
`,
                    xe
                  )
                );
            } else
              for (
                d = u.leadingComments[0],
                  l = [],
                  _ &&
                    u.type === t.Program &&
                    u.body.length === 0 &&
                    l.push(`
`),
                  l.push(ke(d)),
                  he(Y(l).toString()) ||
                    l.push(`
`),
                  a = 1,
                  c = u.leadingComments.length;
                a < c;
                ++a
              )
                (d = u.leadingComments[a]),
                  (O = [ke(d)]),
                  he(Y(O).toString()) ||
                    O.push(`
`),
                  l.push(fe(O));
            l.push(fe(k));
          }
          if (u.trailingComments)
            if (b)
              (d = u.trailingComments[0]),
                (J = d.extendedRange),
                (ce = d.range),
                (He = x.substring(J[0], ce[0])),
                (xe = (He.match(/\n/g) || []).length),
                xe > 0
                  ? (l.push(
                      Me(
                        `
`,
                        xe
                      )
                    ),
                    l.push(fe(ke(d))))
                  : (l.push(He), l.push(ke(d)));
            else
              for (I = !he(Y(l).toString()), T = Me(" ", hu(Y([h, l, p]).toString())), a = 0, c = u.trailingComments.length; a < c; ++a)
                (d = u.trailingComments[a]),
                  I ? (a === 0 ? (l = [l, p]) : (l = [l, T]), l.push(ke(d, T))) : (l = [l, fe(ke(d))]),
                  a !== c - 1 &&
                    !he(Y(l).toString()) &&
                    (l = [
                      l,
                      `
`,
                    ]);
          return l;
        }
        function Xe(u, l, a) {
          var c,
            d = 0;
          for (c = u; c < l; c++)
            x[c] ===
              `
` && d++;
          for (c = 1; c < d; c++) a.push(m);
        }
        function le(u, l, a) {
          return l < a ? ["(", u, ")"] : u;
        }
        function On(u) {
          var l, a, c;
          for (c = u.split(/\r\n|\n/), l = 1, a = c.length; l < a; l++) c[l] = m + h + c[l];
          return c;
        }
        function fu(u, l) {
          var a, c, d;
          return (
            (a = u[v.verbatim]),
            typeof a == "string"
              ? (c = le(On(a), n.Sequence, l))
              : ((c = On(a.content)), (d = a.precedence != null ? a.precedence : n.Sequence), (c = le(c, d, l))),
            Y(c, u)
          );
        }
        function oe() {}
        (oe.prototype.maybeBlock = function (u, l) {
          var a,
            c,
            d = this;
          return (
            (c = !v.comment || !u.leadingComments),
            u.type === t.BlockStatement && c
              ? [E, this.generateStatement(u, l)]
              : u.type === t.EmptyStatement && c
              ? ";"
              : (ae(function () {
                  a = [m, fe(d.generateStatement(u, l))];
                }),
                a)
          );
        }),
          (oe.prototype.maybeBlockSuffix = function (u, l) {
            var a = he(Y(l).toString());
            return u.type === t.BlockStatement && (!v.comment || !u.leadingComments) && !a ? [l, E] : a ? [l, h] : [l, m, h];
          });
        function Ce(u) {
          return Y(u.name, u);
        }
        function at(u, l) {
          return u.async ? "async" + (l ? pe() : E) : "";
        }
        function Bt(u) {
          var l = u.generator && !v.moz.starlessGenerator;
          return l ? "*" + E : "";
        }
        function Rn(u) {
          var l = u.value,
            a = "";
          return l.async && (a += at(l, !u.computed)), l.generator && (a += Bt(l) ? "*" : ""), a;
        }
        (oe.prototype.generatePattern = function (u, l, a) {
          return u.type === t.Identifier ? Ce(u) : this.generateExpression(u, l, a);
        }),
          (oe.prototype.generateFunctionParams = function (u) {
            var l, a, c, d;
            if (
              ((d = !1),
              u.type === t.ArrowFunctionExpression &&
                !u.rest &&
                (!u.defaults || u.defaults.length === 0) &&
                u.params.length === 1 &&
                u.params[0].type === t.Identifier)
            )
              c = [at(u, !0), Ce(u.params[0])];
            else {
              for (
                c = u.type === t.ArrowFunctionExpression ? [at(u, !1)] : [],
                  c.push("("),
                  u.defaults && (d = !0),
                  l = 0,
                  a = u.params.length;
                l < a;
                ++l
              )
                d && u.defaults[l]
                  ? c.push(this.generateAssignment(u.params[l], u.defaults[l], "=", n.Assignment, R))
                  : c.push(this.generatePattern(u.params[l], n.Assignment, R)),
                  l + 1 < a && c.push("," + E);
              u.rest && (u.params.length && c.push("," + E), c.push("..."), c.push(Ce(u.rest))), c.push(")");
            }
            return c;
          }),
          (oe.prototype.generateFunctionBody = function (u) {
            var l, a;
            return (
              (l = this.generateFunctionParams(u)),
              u.type === t.ArrowFunctionExpression && (l.push(E), l.push("=>")),
              u.expression
                ? (l.push(E),
                  (a = this.generateExpression(u.body, n.Assignment, R)),
                  a.toString().charAt(0) === "{" && (a = ["(", a, ")"]),
                  l.push(a))
                : l.push(this.maybeBlock(u.body, ru)),
              l
            );
          }),
          (oe.prototype.generateIterationForStatement = function (u, l, a) {
            var c = ["for" + (l.await ? pe() + "await" : "") + E + "("],
              d = this;
            return (
              ae(function () {
                l.left.type === t.VariableDeclaration
                  ? ae(function () {
                      c.push(l.left.kind + pe()), c.push(d.generateStatement(l.left.declarations[0], Ft));
                    })
                  : c.push(d.generateExpression(l.left, n.Call, R)),
                  (c = W(c, u)),
                  (c = [W(c, d.generateExpression(l.right, n.Assignment, R)), ")"]);
              }),
              c.push(this.maybeBlock(l.body, a)),
              c
            );
          }),
          (oe.prototype.generatePropertyKey = function (u, l) {
            var a = [];
            return l && a.push("["), a.push(this.generateExpression(u, n.Assignment, R)), l && a.push("]"), a;
          }),
          (oe.prototype.generateAssignment = function (u, l, a, c, d) {
            return (
              n.Assignment < c && (d |= U),
              le([this.generateExpression(u, n.Call, d), E + a + E, this.generateExpression(l, n.Assignment, d)], n.Assignment, c)
            );
          }),
          (oe.prototype.semicolon = function (u) {
            return !S && u & Z ? "" : ";";
          }),
          (oe.Statement = {
            BlockStatement: function (u, l) {
              var a,
                c,
                d = ["{", m],
                k = this;
              return (
                ae(function () {
                  u.body.length === 0 &&
                    b &&
                    ((a = u.range),
                    a[1] - a[0] > 2 &&
                      ((c = x.substring(a[0] + 1, a[1] - 1)),
                      c[0] ===
                        `
` && (d = ["{"]),
                      d.push(c)));
                  var I, T, O, J;
                  for (J = ne, l & ie && (J |= se), I = 0, T = u.body.length; I < T; ++I)
                    b &&
                      (I === 0 &&
                        (u.body[0].leadingComments &&
                          ((a = u.body[0].leadingComments[0].extendedRange),
                          (c = x.substring(a[0], a[1])),
                          c[0] ===
                            `
` && (d = ["{"])),
                        u.body[0].leadingComments || Xe(u.range[0], u.body[0].range[0], d)),
                      I > 0 &&
                        !u.body[I - 1].trailingComments &&
                        !u.body[I].leadingComments &&
                        Xe(u.body[I - 1].range[1], u.body[I].range[0], d)),
                      I === T - 1 && (J |= Z),
                      u.body[I].leadingComments && b
                        ? (O = k.generateStatement(u.body[I], J))
                        : (O = fe(k.generateStatement(u.body[I], J))),
                      d.push(O),
                      he(Y(O).toString()) || (b && I < T - 1 && u.body[I + 1].leadingComments) || d.push(m),
                      b && I === T - 1 && (u.body[I].trailingComments || Xe(u.body[I].range[1], u.range[1], d));
                }),
                d.push(fe("}")),
                d
              );
            },
            BreakStatement: function (u, l) {
              return u.label ? "break " + u.label.name + this.semicolon(l) : "break" + this.semicolon(l);
            },
            ContinueStatement: function (u, l) {
              return u.label ? "continue " + u.label.name + this.semicolon(l) : "continue" + this.semicolon(l);
            },
            ClassBody: function (u, l) {
              var a = ["{", m],
                c = this;
              return (
                ae(function (d) {
                  var k, I;
                  for (k = 0, I = u.body.length; k < I; ++k)
                    a.push(d), a.push(c.generateExpression(u.body[k], n.Sequence, R)), k + 1 < I && a.push(m);
                }),
                he(Y(a).toString()) || a.push(m),
                a.push(h),
                a.push("}"),
                a
              );
            },
            ClassDeclaration: function (u, l) {
              var a, c;
              return (
                (a = ["class"]),
                u.id && (a = W(a, this.generateExpression(u.id, n.Sequence, R))),
                u.superClass && ((c = W("extends", this.generateExpression(u.superClass, n.Unary, R))), (a = W(a, c))),
                a.push(E),
                a.push(this.generateStatement(u.body, Be)),
                a
              );
            },
            DirectiveStatement: function (u, l) {
              return v.raw && u.raw ? u.raw + this.semicolon(l) : lu(u.directive) + this.semicolon(l);
            },
            DoWhileStatement: function (u, l) {
              var a = W("do", this.maybeBlock(u.body, ne));
              return (
                (a = this.maybeBlockSuffix(u.body, a)),
                W(a, ["while" + E + "(", this.generateExpression(u.test, n.Sequence, R), ")" + this.semicolon(l)])
              );
            },
            CatchClause: function (u, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  var d;
                  u.param
                    ? ((a = ["catch" + E + "(", c.generateExpression(u.param, n.Sequence, R), ")"]),
                      u.guard && ((d = c.generateExpression(u.guard, n.Sequence, R)), a.splice(2, 0, " if ", d)))
                    : (a = ["catch"]);
                }),
                a.push(this.maybeBlock(u.body, ne)),
                a
              );
            },
            DebuggerStatement: function (u, l) {
              return "debugger" + this.semicolon(l);
            },
            EmptyStatement: function (u, l) {
              return ";";
            },
            ExportDefaultDeclaration: function (u, l) {
              var a = ["export"],
                c;
              return (
                (c = l & Z ? Be : ne),
                (a = W(a, "default")),
                V(u.declaration)
                  ? (a = W(a, this.generateStatement(u.declaration, c)))
                  : (a = W(a, this.generateExpression(u.declaration, n.Assignment, R) + this.semicolon(l))),
                a
              );
            },
            ExportNamedDeclaration: function (u, l) {
              var a = ["export"],
                c,
                d = this;
              return (
                (c = l & Z ? Be : ne),
                u.declaration
                  ? W(a, this.generateStatement(u.declaration, c))
                  : (u.specifiers &&
                      (u.specifiers.length === 0
                        ? (a = W(a, "{" + E + "}"))
                        : u.specifiers[0].type === t.ExportBatchSpecifier
                        ? (a = W(a, this.generateExpression(u.specifiers[0], n.Sequence, R)))
                        : ((a = W(a, "{")),
                          ae(function (k) {
                            var I, T;
                            for (a.push(m), I = 0, T = u.specifiers.length; I < T; ++I)
                              a.push(k), a.push(d.generateExpression(u.specifiers[I], n.Sequence, R)), I + 1 < T && a.push("," + m);
                          }),
                          he(Y(a).toString()) || a.push(m),
                          a.push(h + "}")),
                      u.source
                        ? (a = W(a, ["from" + E, this.generateExpression(u.source, n.Sequence, R), this.semicolon(l)]))
                        : a.push(this.semicolon(l))),
                    a)
              );
            },
            ExportAllDeclaration: function (u, l) {
              return ["export" + E, "*" + E, "from" + E, this.generateExpression(u.source, n.Sequence, R), this.semicolon(l)];
            },
            ExpressionStatement: function (u, l) {
              var a, c;
              function d(T) {
                var O;
                return T.slice(0, 5) !== "class"
                  ? !1
                  : ((O = T.charCodeAt(5)), O === 123 || s.code.isWhiteSpace(O) || s.code.isLineTerminator(O));
              }
              function k(T) {
                var O;
                return T.slice(0, 8) !== "function"
                  ? !1
                  : ((O = T.charCodeAt(8)), O === 40 || s.code.isWhiteSpace(O) || O === 42 || s.code.isLineTerminator(O));
              }
              function I(T) {
                var O, J, ce;
                if (T.slice(0, 5) !== "async" || !s.code.isWhiteSpace(T.charCodeAt(5))) return !1;
                for (J = 6, ce = T.length; J < ce && s.code.isWhiteSpace(T.charCodeAt(J)); ++J);
                return J === ce || T.slice(J, J + 8) !== "function"
                  ? !1
                  : ((O = T.charCodeAt(J + 8)), O === 40 || s.code.isWhiteSpace(O) || O === 42 || s.code.isLineTerminator(O));
              }
              return (
                (a = [this.generateExpression(u.expression, n.Sequence, R)]),
                (c = Y(a).toString()),
                c.charCodeAt(0) === 123 ||
                d(c) ||
                k(c) ||
                I(c) ||
                (L && l & se && u.expression.type === t.Literal && typeof u.expression.value == "string")
                  ? (a = ["(", a, ")" + this.semicolon(l)])
                  : a.push(this.semicolon(l)),
                a
              );
            },
            ImportDeclaration: function (u, l) {
              var a,
                c,
                d = this;
              return u.specifiers.length === 0
                ? ["import", E, this.generateExpression(u.source, n.Sequence, R), this.semicolon(l)]
                : ((a = ["import"]),
                  (c = 0),
                  u.specifiers[c].type === t.ImportDefaultSpecifier &&
                    ((a = W(a, [this.generateExpression(u.specifiers[c], n.Sequence, R)])), ++c),
                  u.specifiers[c] &&
                    (c !== 0 && a.push(","),
                    u.specifiers[c].type === t.ImportNamespaceSpecifier
                      ? (a = W(a, [E, this.generateExpression(u.specifiers[c], n.Sequence, R)]))
                      : (a.push(E + "{"),
                        u.specifiers.length - c === 1
                          ? (a.push(E), a.push(this.generateExpression(u.specifiers[c], n.Sequence, R)), a.push(E + "}" + E))
                          : (ae(function (k) {
                              var I, T;
                              for (a.push(m), I = c, T = u.specifiers.length; I < T; ++I)
                                a.push(k), a.push(d.generateExpression(u.specifiers[I], n.Sequence, R)), I + 1 < T && a.push("," + m);
                            }),
                            he(Y(a).toString()) || a.push(m),
                            a.push(h + "}" + E)))),
                  (a = W(a, ["from" + E, this.generateExpression(u.source, n.Sequence, R), this.semicolon(l)])),
                  a);
            },
            VariableDeclarator: function (u, l) {
              var a = l & U ? R : it;
              return u.init
                ? [this.generateExpression(u.id, n.Assignment, a), E, "=", E, this.generateExpression(u.init, n.Assignment, a)]
                : this.generatePattern(u.id, n.Assignment, a);
            },
            VariableDeclaration: function (u, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              (a = [u.kind]), (I = l & U ? ne : Ft);
              function O() {
                for (
                  k = u.declarations[0],
                    v.comment && k.leadingComments
                      ? (a.push(`
`),
                        a.push(fe(T.generateStatement(k, I))))
                      : (a.push(pe()), a.push(T.generateStatement(k, I))),
                    c = 1,
                    d = u.declarations.length;
                  c < d;
                  ++c
                )
                  (k = u.declarations[c]),
                    v.comment && k.leadingComments
                      ? (a.push("," + m), a.push(fe(T.generateStatement(k, I))))
                      : (a.push("," + E), a.push(T.generateStatement(k, I)));
              }
              return u.declarations.length > 1 ? ae(O) : O(), a.push(this.semicolon(l)), a;
            },
            ThrowStatement: function (u, l) {
              return [W("throw", this.generateExpression(u.argument, n.Sequence, R)), this.semicolon(l)];
            },
            TryStatement: function (u, l) {
              var a, c, d, k;
              if (((a = ["try", this.maybeBlock(u.block, ne)]), (a = this.maybeBlockSuffix(u.block, a)), u.handlers))
                for (c = 0, d = u.handlers.length; c < d; ++c)
                  (a = W(a, this.generateStatement(u.handlers[c], ne))),
                    (u.finalizer || c + 1 !== d) && (a = this.maybeBlockSuffix(u.handlers[c].body, a));
              else {
                for (k = u.guardedHandlers || [], c = 0, d = k.length; c < d; ++c)
                  (a = W(a, this.generateStatement(k[c], ne))), (u.finalizer || c + 1 !== d) && (a = this.maybeBlockSuffix(k[c].body, a));
                if (u.handler)
                  if (Array.isArray(u.handler))
                    for (c = 0, d = u.handler.length; c < d; ++c)
                      (a = W(a, this.generateStatement(u.handler[c], ne))),
                        (u.finalizer || c + 1 !== d) && (a = this.maybeBlockSuffix(u.handler[c].body, a));
                  else (a = W(a, this.generateStatement(u.handler, ne))), u.finalizer && (a = this.maybeBlockSuffix(u.handler.body, a));
              }
              return u.finalizer && (a = W(a, ["finally", this.maybeBlock(u.finalizer, ne)])), a;
            },
            SwitchStatement: function (u, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              if (
                (ae(function () {
                  a = ["switch" + E + "(", T.generateExpression(u.discriminant, n.Sequence, R), ")" + E + "{" + m];
                }),
                u.cases)
              )
                for (I = ne, d = 0, k = u.cases.length; d < k; ++d)
                  d === k - 1 && (I |= Z), (c = fe(this.generateStatement(u.cases[d], I))), a.push(c), he(Y(c).toString()) || a.push(m);
              return a.push(fe("}")), a;
            },
            SwitchCase: function (u, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              return (
                ae(function () {
                  for (
                    u.test ? (a = [W("case", T.generateExpression(u.test, n.Sequence, R)), ":"]) : (a = ["default:"]),
                      d = 0,
                      k = u.consequent.length,
                      k && u.consequent[0].type === t.BlockStatement && ((c = T.maybeBlock(u.consequent[0], ne)), a.push(c), (d = 1)),
                      d !== k && !he(Y(a).toString()) && a.push(m),
                      I = ne;
                    d < k;
                    ++d
                  )
                    d === k - 1 && l & Z && (I |= Z),
                      (c = fe(T.generateStatement(u.consequent[d], I))),
                      a.push(c),
                      d + 1 !== k && !he(Y(c).toString()) && a.push(m);
                }),
                a
              );
            },
            IfStatement: function (u, l) {
              var a,
                c,
                d,
                k = this;
              return (
                ae(function () {
                  a = ["if" + E + "(", k.generateExpression(u.test, n.Sequence, R), ")"];
                }),
                (d = l & Z),
                (c = ne),
                d && (c |= Z),
                u.alternate
                  ? (a.push(this.maybeBlock(u.consequent, ne)),
                    (a = this.maybeBlockSuffix(u.consequent, a)),
                    u.alternate.type === t.IfStatement
                      ? (a = W(a, ["else ", this.generateStatement(u.alternate, c)]))
                      : (a = W(a, W("else", this.maybeBlock(u.alternate, c)))))
                  : a.push(this.maybeBlock(u.consequent, c)),
                a
              );
            },
            ForStatement: function (u, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  (a = ["for" + E + "("]),
                    u.init
                      ? u.init.type === t.VariableDeclaration
                        ? a.push(c.generateStatement(u.init, Ft))
                        : (a.push(c.generateExpression(u.init, n.Sequence, it)), a.push(";"))
                      : a.push(";"),
                    u.test && (a.push(E), a.push(c.generateExpression(u.test, n.Sequence, R))),
                    a.push(";"),
                    u.update && (a.push(E), a.push(c.generateExpression(u.update, n.Sequence, R))),
                    a.push(")");
                }),
                a.push(this.maybeBlock(u.body, l & Z ? Be : ne)),
                a
              );
            },
            ForInStatement: function (u, l) {
              return this.generateIterationForStatement("in", u, l & Z ? Be : ne);
            },
            ForOfStatement: function (u, l) {
              return this.generateIterationForStatement("of", u, l & Z ? Be : ne);
            },
            LabeledStatement: function (u, l) {
              return [u.label.name + ":", this.maybeBlock(u.body, l & Z ? Be : ne)];
            },
            Program: function (u, l) {
              var a, c, d, k, I;
              for (
                k = u.body.length,
                  a = [
                    _ && k > 0
                      ? `
`
                      : "",
                  ],
                  I = nu,
                  d = 0;
                d < k;
                ++d
              )
                !_ && d === k - 1 && (I |= Z),
                  b &&
                    (d === 0 && (u.body[0].leadingComments || Xe(u.range[0], u.body[d].range[0], a)),
                    d > 0 &&
                      !u.body[d - 1].trailingComments &&
                      !u.body[d].leadingComments &&
                      Xe(u.body[d - 1].range[1], u.body[d].range[0], a)),
                  (c = fe(this.generateStatement(u.body[d], I))),
                  a.push(c),
                  d + 1 < k && !he(Y(c).toString()) && ((b && u.body[d + 1].leadingComments) || a.push(m)),
                  b && d === k - 1 && (u.body[d].trailingComments || Xe(u.body[d].range[1], u.range[1], a));
              return a;
            },
            FunctionDeclaration: function (u, l) {
              return [at(u, !0), "function", Bt(u) || pe(), u.id ? Ce(u.id) : "", this.generateFunctionBody(u)];
            },
            ReturnStatement: function (u, l) {
              return u.argument
                ? [W("return", this.generateExpression(u.argument, n.Sequence, R)), this.semicolon(l)]
                : ["return" + this.semicolon(l)];
            },
            WhileStatement: function (u, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  a = ["while" + E + "(", c.generateExpression(u.test, n.Sequence, R), ")"];
                }),
                a.push(this.maybeBlock(u.body, l & Z ? Be : ne)),
                a
              );
            },
            WithStatement: function (u, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  a = ["with" + E + "(", c.generateExpression(u.object, n.Sequence, R), ")"];
                }),
                a.push(this.maybeBlock(u.body, l & Z ? Be : ne)),
                a
              );
            },
          }),
          Tn(oe.prototype, oe.Statement),
          (oe.Expression = {
            SequenceExpression: function (u, l, a) {
              var c, d, k;
              for (n.Sequence < l && (a |= U), c = [], d = 0, k = u.expressions.length; d < k; ++d)
                c.push(this.generateExpression(u.expressions[d], n.Assignment, a)), d + 1 < k && c.push("," + E);
              return le(c, n.Sequence, l);
            },
            AssignmentExpression: function (u, l, a) {
              return this.generateAssignment(u.left, u.right, u.operator, l, a);
            },
            ArrowFunctionExpression: function (u, l, a) {
              return le(this.generateFunctionBody(u), n.ArrowFunction, l);
            },
            ConditionalExpression: function (u, l, a) {
              return (
                n.Conditional < l && (a |= U),
                le(
                  [
                    this.generateExpression(u.test, n.Coalesce, a),
                    E + "?" + E,
                    this.generateExpression(u.consequent, n.Assignment, a),
                    E + ":" + E,
                    this.generateExpression(u.alternate, n.Assignment, a),
                  ],
                  n.Conditional,
                  l
                )
              );
            },
            LogicalExpression: function (u, l, a) {
              return u.operator === "??" && (a |= we), this.BinaryExpression(u, l, a);
            },
            BinaryExpression: function (u, l, a) {
              var c, d, k, I, T, O;
              return (
                (I = r[u.operator]),
                (d = u.operator === "**" ? n.Postfix : I),
                (k = u.operator === "**" ? I : I + 1),
                I < l && (a |= U),
                (T = this.generateExpression(u.left, d, a)),
                (O = T.toString()),
                O.charCodeAt(O.length - 1) === 47 && s.code.isIdentifierPartES5(u.operator.charCodeAt(0))
                  ? (c = [T, pe(), u.operator])
                  : (c = W(T, u.operator)),
                (T = this.generateExpression(u.right, k, a)),
                (u.operator === "/" && T.toString().charAt(0) === "/") ||
                (u.operator.slice(-1) === "<" && T.toString().slice(0, 3) === "!--")
                  ? (c.push(pe()), c.push(T))
                  : (c = W(c, T)),
                u.operator === "in" && !(a & U)
                  ? ["(", c, ")"]
                  : (u.operator === "||" || u.operator === "&&") && a & we
                  ? ["(", c, ")"]
                  : le(c, I, l)
              );
            },
            CallExpression: function (u, l, a) {
              var c, d, k;
              for (
                c = [this.generateExpression(u.callee, n.Call, Re)], u.optional && c.push("?."), c.push("("), d = 0, k = u.arguments.length;
                d < k;
                ++d
              )
                c.push(this.generateExpression(u.arguments[d], n.Assignment, R)), d + 1 < k && c.push("," + E);
              return c.push(")"), a & H ? le(c, n.Call, l) : ["(", c, ")"];
            },
            ChainExpression: function (u, l, a) {
              n.OptionalChaining < l && (a |= H);
              var c = this.generateExpression(u.expression, n.OptionalChaining, a);
              return le(c, n.OptionalChaining, l);
            },
            NewExpression: function (u, l, a) {
              var c, d, k, I, T;
              if (
                ((d = u.arguments.length),
                (T = a & re && !w && d === 0 ? st : Je),
                (c = W("new", this.generateExpression(u.callee, n.New, T))),
                !(a & re) || w || d > 0)
              ) {
                for (c.push("("), k = 0, I = d; k < I; ++k)
                  c.push(this.generateExpression(u.arguments[k], n.Assignment, R)), k + 1 < I && c.push("," + E);
                c.push(")");
              }
              return le(c, n.New, l);
            },
            MemberExpression: function (u, l, a) {
              var c, d;
              return (
                (c = [this.generateExpression(u.object, n.Call, a & H ? Re : Je)]),
                u.computed
                  ? (u.optional && c.push("?."),
                    c.push("["),
                    c.push(this.generateExpression(u.property, n.Sequence, a & H ? R : st)),
                    c.push("]"))
                  : (!u.optional &&
                      u.object.type === t.Literal &&
                      typeof u.object.value == "number" &&
                      ((d = Y(c).toString()),
                      d.indexOf(".") < 0 &&
                        !/[eExX]/.test(d) &&
                        s.code.isDecimalDigit(d.charCodeAt(d.length - 1)) &&
                        !(d.length >= 2 && d.charCodeAt(0) === 48) &&
                        c.push(" ")),
                    c.push(u.optional ? "?." : "."),
                    c.push(Ce(u.property))),
                le(c, n.Member, l)
              );
            },
            MetaProperty: function (u, l, a) {
              var c;
              return (
                (c = []),
                c.push(typeof u.meta == "string" ? u.meta : Ce(u.meta)),
                c.push("."),
                c.push(typeof u.property == "string" ? u.property : Ce(u.property)),
                le(c, n.Member, l)
              );
            },
            UnaryExpression: function (u, l, a) {
              var c, d, k, I, T;
              return (
                (d = this.generateExpression(u.argument, n.Unary, R)),
                E === ""
                  ? (c = W(u.operator, d))
                  : ((c = [u.operator]),
                    u.operator.length > 2
                      ? (c = W(c, d))
                      : ((I = Y(c).toString()),
                        (T = I.charCodeAt(I.length - 1)),
                        (k = d.toString().charCodeAt(0)),
                        (((T === 43 || T === 45) && T === k) || (s.code.isIdentifierPartES5(T) && s.code.isIdentifierPartES5(k))) &&
                          c.push(pe()),
                        c.push(d))),
                le(c, n.Unary, l)
              );
            },
            YieldExpression: function (u, l, a) {
              var c;
              return (
                u.delegate ? (c = "yield*") : (c = "yield"),
                u.argument && (c = W(c, this.generateExpression(u.argument, n.Yield, R))),
                le(c, n.Yield, l)
              );
            },
            AwaitExpression: function (u, l, a) {
              var c = W(u.all ? "await*" : "await", this.generateExpression(u.argument, n.Await, R));
              return le(c, n.Await, l);
            },
            UpdateExpression: function (u, l, a) {
              return u.prefix
                ? le([u.operator, this.generateExpression(u.argument, n.Unary, R)], n.Unary, l)
                : le([this.generateExpression(u.argument, n.Postfix, R), u.operator], n.Postfix, l);
            },
            FunctionExpression: function (u, l, a) {
              var c = [at(u, !0), "function"];
              return u.id ? (c.push(Bt(u) || pe()), c.push(Ce(u.id))) : c.push(Bt(u) || E), c.push(this.generateFunctionBody(u)), c;
            },
            ArrayPattern: function (u, l, a) {
              return this.ArrayExpression(u, l, a, !0);
            },
            ArrayExpression: function (u, l, a, c) {
              var d,
                k,
                I = this;
              return u.elements.length
                ? ((k = c ? !1 : u.elements.length > 1),
                  (d = ["[", k ? m : ""]),
                  ae(function (T) {
                    var O, J;
                    for (O = 0, J = u.elements.length; O < J; ++O)
                      u.elements[O]
                        ? (d.push(k ? T : ""), d.push(I.generateExpression(u.elements[O], n.Assignment, R)))
                        : (k && d.push(T), O + 1 === J && d.push(",")),
                        O + 1 < J && d.push("," + (k ? m : E));
                  }),
                  k && !he(Y(d).toString()) && d.push(m),
                  d.push(k ? h : ""),
                  d.push("]"),
                  d)
                : "[]";
            },
            RestElement: function (u, l, a) {
              return "..." + this.generatePattern(u.argument);
            },
            ClassExpression: function (u, l, a) {
              var c, d;
              return (
                (c = ["class"]),
                u.id && (c = W(c, this.generateExpression(u.id, n.Sequence, R))),
                u.superClass && ((d = W("extends", this.generateExpression(u.superClass, n.Unary, R))), (c = W(c, d))),
                c.push(E),
                c.push(this.generateStatement(u.body, Be)),
                c
              );
            },
            MethodDefinition: function (u, l, a) {
              var c, d;
              return (
                u.static ? (c = ["static" + E]) : (c = []),
                u.kind === "get" || u.kind === "set"
                  ? (d = [W(u.kind, this.generatePropertyKey(u.key, u.computed)), this.generateFunctionBody(u.value)])
                  : (d = [Rn(u), this.generatePropertyKey(u.key, u.computed), this.generateFunctionBody(u.value)]),
                W(c, d)
              );
            },
            Property: function (u, l, a) {
              return u.kind === "get" || u.kind === "set"
                ? [u.kind, pe(), this.generatePropertyKey(u.key, u.computed), this.generateFunctionBody(u.value)]
                : u.shorthand
                ? u.value.type === "AssignmentPattern"
                  ? this.AssignmentPattern(u.value, n.Sequence, R)
                  : this.generatePropertyKey(u.key, u.computed)
                : u.method
                ? [Rn(u), this.generatePropertyKey(u.key, u.computed), this.generateFunctionBody(u.value)]
                : [this.generatePropertyKey(u.key, u.computed), ":" + E, this.generateExpression(u.value, n.Assignment, R)];
            },
            ObjectExpression: function (u, l, a) {
              var c,
                d,
                k,
                I = this;
              return u.properties.length
                ? ((c = u.properties.length > 1),
                  ae(function () {
                    k = I.generateExpression(u.properties[0], n.Sequence, R);
                  }),
                  !c && !uu(Y(k).toString())
                    ? ["{", E, k, E, "}"]
                    : (ae(function (T) {
                        var O, J;
                        if (((d = ["{", m, T, k]), c))
                          for (d.push("," + m), O = 1, J = u.properties.length; O < J; ++O)
                            d.push(T), d.push(I.generateExpression(u.properties[O], n.Sequence, R)), O + 1 < J && d.push("," + m);
                      }),
                      he(Y(d).toString()) || d.push(m),
                      d.push(h),
                      d.push("}"),
                      d))
                : "{}";
            },
            AssignmentPattern: function (u, l, a) {
              return this.generateAssignment(u.left, u.right, "=", l, a);
            },
            ObjectPattern: function (u, l, a) {
              var c,
                d,
                k,
                I,
                T,
                O = this;
              if (!u.properties.length) return "{}";
              if (((I = !1), u.properties.length === 1))
                (T = u.properties[0]), T.type === t.Property && T.value.type !== t.Identifier && (I = !0);
              else
                for (d = 0, k = u.properties.length; d < k; ++d)
                  if (((T = u.properties[d]), T.type === t.Property && !T.shorthand)) {
                    I = !0;
                    break;
                  }
              return (
                (c = ["{", I ? m : ""]),
                ae(function (J) {
                  var ce, Ve;
                  for (ce = 0, Ve = u.properties.length; ce < Ve; ++ce)
                    c.push(I ? J : ""),
                      c.push(O.generateExpression(u.properties[ce], n.Sequence, R)),
                      ce + 1 < Ve && c.push("," + (I ? m : E));
                }),
                I && !he(Y(c).toString()) && c.push(m),
                c.push(I ? h : ""),
                c.push("}"),
                c
              );
            },
            ThisExpression: function (u, l, a) {
              return "this";
            },
            Super: function (u, l, a) {
              return "super";
            },
            Identifier: function (u, l, a) {
              return Ce(u);
            },
            ImportDefaultSpecifier: function (u, l, a) {
              return Ce(u.id || u.local);
            },
            ImportNamespaceSpecifier: function (u, l, a) {
              var c = ["*"],
                d = u.id || u.local;
              return d && c.push(E + "as" + pe() + Ce(d)), c;
            },
            ImportSpecifier: function (u, l, a) {
              var c = u.imported,
                d = [c.name],
                k = u.local;
              return k && k.name !== c.name && d.push(pe() + "as" + pe() + Ce(k)), d;
            },
            ExportSpecifier: function (u, l, a) {
              var c = u.local,
                d = [c.name],
                k = u.exported;
              return k && k.name !== c.name && d.push(pe() + "as" + pe() + Ce(k)), d;
            },
            Literal: function (u, l, a) {
              var c;
              if (u.hasOwnProperty("raw") && B && v.raw)
                try {
                  if (((c = B(u.raw).body[0].expression), c.type === t.Literal && c.value === u.value)) return u.raw;
                } catch {}
              return u.regex
                ? "/" + u.regex.pattern + "/" + u.regex.flags
                : typeof u.value == "bigint"
                ? u.value.toString() + "n"
                : u.bigint
                ? u.bigint + "n"
                : u.value === null
                ? "null"
                : typeof u.value == "string"
                ? cu(u.value)
                : typeof u.value == "number"
                ? iu(u.value)
                : typeof u.value == "boolean"
                ? u.value
                  ? "true"
                  : "false"
                : su(u.value);
            },
            GeneratorExpression: function (u, l, a) {
              return this.ComprehensionExpression(u, l, a);
            },
            ComprehensionExpression: function (u, l, a) {
              var c,
                d,
                k,
                I,
                T = this;
              return (
                (c = u.type === t.GeneratorExpression ? ["("] : ["["]),
                v.moz.comprehensionExpressionStartsWithAssignment && ((I = this.generateExpression(u.body, n.Assignment, R)), c.push(I)),
                u.blocks &&
                  ae(function () {
                    for (d = 0, k = u.blocks.length; d < k; ++d)
                      (I = T.generateExpression(u.blocks[d], n.Sequence, R)),
                        d > 0 || v.moz.comprehensionExpressionStartsWithAssignment ? (c = W(c, I)) : c.push(I);
                  }),
                u.filter && ((c = W(c, "if" + E)), (I = this.generateExpression(u.filter, n.Sequence, R)), (c = W(c, ["(", I, ")"]))),
                v.moz.comprehensionExpressionStartsWithAssignment ||
                  ((I = this.generateExpression(u.body, n.Assignment, R)), (c = W(c, I))),
                c.push(u.type === t.GeneratorExpression ? ")" : "]"),
                c
              );
            },
            ComprehensionBlock: function (u, l, a) {
              var c;
              return (
                u.left.type === t.VariableDeclaration
                  ? (c = [u.left.kind, pe(), this.generateStatement(u.left.declarations[0], Ft)])
                  : (c = this.generateExpression(u.left, n.Call, R)),
                (c = W(c, u.of ? "of" : "in")),
                (c = W(c, this.generateExpression(u.right, n.Sequence, R))),
                ["for" + E + "(", c, ")"]
              );
            },
            SpreadElement: function (u, l, a) {
              return ["...", this.generateExpression(u.argument, n.Assignment, R)];
            },
            TaggedTemplateExpression: function (u, l, a) {
              var c = Re;
              a & H || (c = Je);
              var d = [this.generateExpression(u.tag, n.Call, c), this.generateExpression(u.quasi, n.Primary, je)];
              return le(d, n.TaggedTemplate, l);
            },
            TemplateElement: function (u, l, a) {
              return u.value.raw;
            },
            TemplateLiteral: function (u, l, a) {
              var c, d, k;
              for (c = ["`"], d = 0, k = u.quasis.length; d < k; ++d)
                c.push(this.generateExpression(u.quasis[d], n.Primary, R)),
                  d + 1 < k && (c.push("${" + E), c.push(this.generateExpression(u.expressions[d], n.Sequence, R)), c.push(E + "}"));
              return c.push("`"), c;
            },
            ModuleSpecifier: function (u, l, a) {
              return this.Literal(u, l, a);
            },
            ImportExpression: function (u, l, a) {
              return le(["import(", this.generateExpression(u.source, n.Assignment, R), ")"], n.Call, l);
            },
          }),
          Tn(oe.prototype, oe.Expression),
          (oe.prototype.generateExpression = function (u, l, a) {
            var c, d;
            return (
              (d = u.type || t.Property),
              v.verbatim && u.hasOwnProperty(v.verbatim) ? fu(u, l) : ((c = this[d](u, l, a)), v.comment && (c = Ln(u, c)), Y(c, u))
            );
          }),
          (oe.prototype.generateStatement = function (u, l) {
            var a, c;
            return (
              (a = this[u.type](u, l)),
              v.comment && (a = Ln(u, a)),
              (c = Y(a).toString()),
              u.type === t.Program &&
                !_ &&
                m === "" &&
                c.charAt(c.length - 1) ===
                  `
` &&
                (a = F ? Y(a).replaceRight(/\s+$/, "") : c.replace(/\s+$/, "")),
              Y(a, u)
            );
          });
        function du(u) {
          var l;
          if (((l = new oe()), V(u))) return l.generateStatement(u, ne);
          if (M(u)) return l.generateExpression(u, n.Sequence, R);
          throw new Error("Unknown node type: " + u.type);
        }
        function Au(u, l) {
          var a = In(),
            c,
            d;
          return (
            l != null
              ? (typeof l.indent == "string" && (a.format.indent.style = l.indent),
                typeof l.base == "number" && (a.format.indent.base = l.base),
                (l = yt(a, l)),
                (p = l.format.indent.style),
                typeof l.base == "string" ? (h = l.base) : (h = Me(p, l.format.indent.base)))
              : ((l = a), (p = l.format.indent.style), (h = Me(p, l.format.indent.base))),
            (A = l.format.json),
            (D = l.format.renumber),
            (y = A ? !1 : l.format.hexadecimal),
            (C = A ? "double" : l.format.quotes),
            (g = l.format.escapeless),
            (m = l.format.newline),
            (E = l.format.space),
            l.format.compact && (m = E = p = h = ""),
            (w = l.format.parentheses),
            (S = l.format.semicolons),
            (_ = l.format.safeConcatenation),
            (L = l.directive),
            (B = A ? null : l.parse),
            (F = l.sourceMap),
            (x = l.sourceCode),
            (b = l.format.preserveBlankLines && x !== null),
            (v = l),
            F && (e.browser ? (i = global.sourceMap.SourceNode) : (i = Uu().SourceNode)),
            (c = du(u)),
            F
              ? ((d = c.toStringWithSourceMap({ file: l.file, sourceRoot: l.sourceMapRoot })),
                l.sourceContent && d.map.setSourceContent(l.sourceMap, l.sourceContent),
                l.sourceMapWithCode ? d : d.map.toString())
              : ((d = { code: c.toString(), map: null }), l.sourceMapWithCode ? d : d.code)
          );
        }
        (P = {
          indent: { style: "", base: 0 },
          renumber: !0,
          hexadecimal: !0,
          quotes: "auto",
          escapeless: !0,
          compact: !0,
          parentheses: !1,
          semicolons: !1,
        }),
          (j = In().format),
          (e.version = Wu().version),
          (e.generate = Au),
          (e.attachComments = o.attachComments),
          (e.Precedence = yt({}, n)),
          (e.browser = !1),
          (e.FORMAT_MINIFY = P),
          (e.FORMAT_DEFAULTS = j);
      })();
    },
  }),
  on = {};
Du(on, {
  Node: () => ht,
  Parser: () => te,
  Position: () => Ue,
  SourceLocation: () => et,
  TokContext: () => Fe,
  Token: () => pt,
  TokenType: () => Q,
  defaultOptions: () => At,
  getLineInfo: () => cn,
  isIdentifierChar: () => qe,
  isIdentifierStart: () => Te,
  isNewLine: () => Ke,
  keywordTypes: () => dt,
  lineBreak: () => me,
  lineBreakG: () => ze,
  nonASCIIwhitespace: () => Ot,
  parse: () => Zu,
  parseExpressionAt: () => ei,
  tokContexts: () => ue,
  tokTypes: () => f,
  tokenizer: () => ti,
  version: () => Dn,
});
function ln(e, t) {
  for (var n = 65536, r = 0; r < t.length; r += 2) {
    if (((n += t[r]), n > e)) return !1;
    if (((n += t[r + 1]), n >= e)) return !0;
  }
}
function Te(e, t) {
  return e < 65
    ? e === 36
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && Sr.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : ln(e, xn);
}
function qe(e, t) {
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
    ? e >= 170 && br.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : ln(e, xn) || ln(e, wr);
}
function ye(e, t) {
  return new Q(e, { beforeExpr: !0, binop: t });
}
function X(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (dt[e] = new Q(e, t));
}
function Ke(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
function Nt(e, t) {
  return kr.call(e, t);
}
function We(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
function cn(e, t) {
  for (var n = 1, r = 0; ; ) {
    ze.lastIndex = r;
    var i = ze.exec(e);
    if (i && i.index < t) ++n, (r = i.index + i[0].length);
    else return new Ue(n, t - r);
  }
}
function Gu(e) {
  var t = {};
  for (var n in At) t[n] = e && Nt(e, n) ? e[n] : At[n];
  if ((t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), hn(t.onToken))) {
    var r = t.onToken;
    t.onToken = function (i) {
      return r.push(i);
    };
  }
  return hn(t.onComment) && (t.onComment = $u(t, t.onComment)), t;
}
function $u(e, t) {
  return function (n, r, i, o, s, h) {
    var p = { type: n ? "Block" : "Line", value: r, start: i, end: o };
    e.locations && (p.loc = new et(this, s, h)), e.ranges && (p.range = [i, o]), t.push(p);
  };
}
function Vt(e, t) {
  return Ze | (e ? pn : 0) | (t ? fn : 0);
}
function vt() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
function zn(e, t, n, r) {
  return (e.type = t), (e.end = n), this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = n), e;
}
function qt(e) {
  var t = (An[e] = { binary: We(Ir[e] + " " + dn), nonBinary: { General_Category: We(dn), Script: We(Tr[e]) } });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
function _t(e) {
  return e <= 65535 ? String.fromCharCode(e) : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function Gn(e) {
  return e === 36 || (e >= 40 && e <= 43) || e === 46 || e === 63 || (e >= 91 && e <= 94) || (e >= 123 && e <= 125);
}
function Ju(e) {
  return Te(e, !0) || e === 36 || e === 95;
}
function Xu(e) {
  return qe(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
function vr(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Hu(e) {
  return e >= 0 && e <= 1114111;
}
function Qu(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
function _r(e) {
  return vr(e) || e === 95;
}
function Yu(e) {
  return _r(e) || Lt(e);
}
function Lt(e) {
  return e >= 48 && e <= 57;
}
function $n(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function Jn(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
function Xn(e) {
  return e >= 48 && e <= 55;
}
function Ku(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Hn(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
function Ut(e) {
  return e <= 65535 ? String.fromCharCode(e) : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function Zu(e, t) {
  return te.parse(e, t);
}
function ei(e, t, n) {
  return te.parseExpressionAt(e, t, n);
}
function ti(e, t) {
  return te.tokenizer(e, t);
}
var St,
  bt,
  Qn,
  Yn,
  wt,
  Wt,
  Sr,
  br,
  xn,
  wr,
  Q,
  ge,
  De,
  dt,
  f,
  me,
  ze,
  Ot,
  Ee,
  zt,
  kr,
  Kn,
  hn,
  Ue,
  et,
  At,
  Qe,
  Ze,
  kt,
  pn,
  fn,
  Gt,
  $t,
  Jt,
  Xt,
  Ht,
  It,
  ve,
  Qt,
  Yt,
  Kt,
  te,
  Ne,
  de,
  Zn,
  z,
  Tt,
  er,
  tr,
  Ye,
  Pt,
  Zt,
  _e,
  G,
  nr,
  ot,
  Ie,
  rr,
  ht,
  lt,
  Fe,
  ue,
  ct,
  en,
  tn,
  ur,
  Ir,
  dn,
  nn,
  rn,
  ir,
  Tr,
  An,
  q,
  Se,
  pt,
  $,
  un,
  Dn,
  mn = mu({
    "../../node_modules/acorn/dist/acorn.mjs"() {
      (St = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments",
      }),
        (bt =
          "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
        (Qn = { 5: bt, "5module": bt + " export import", 6: bt + " const class extends export import super" }),
        (Yn = /^in(stanceof)?$/),
        (wt =
          "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"),
        (Wt =
          "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿"),
        (Sr = new RegExp("[" + wt + "]")),
        (br = new RegExp("[" + wt + Wt + "]")),
        (wt = Wt = null),
        (xn = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43,
          157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1,
          11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56,
          50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4,
          0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0,
          19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63,
          32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8,
          2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749,
          1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135,
          9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2,
          0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24,
          2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0,
          2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2,
          16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
        ]),
        (wr = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9,
          16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6,
          3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84,
          14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15,
          406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60,
          6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0,
          15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
        ]),
        (Q = function (e, t) {
          t === void 0 && (t = {}),
            (this.label = e),
            (this.keyword = t.keyword),
            (this.beforeExpr = !!t.beforeExpr),
            (this.startsExpr = !!t.startsExpr),
            (this.isLoop = !!t.isLoop),
            (this.isAssign = !!t.isAssign),
            (this.prefix = !!t.prefix),
            (this.postfix = !!t.postfix),
            (this.binop = t.binop || null),
            (this.updateContext = null);
        }),
        (ge = { beforeExpr: !0 }),
        (De = { startsExpr: !0 }),
        (dt = {}),
        (f = {
          num: new Q("num", De),
          regexp: new Q("regexp", De),
          string: new Q("string", De),
          name: new Q("name", De),
          eof: new Q("eof"),
          bracketL: new Q("[", { beforeExpr: !0, startsExpr: !0 }),
          bracketR: new Q("]"),
          braceL: new Q("{", { beforeExpr: !0, startsExpr: !0 }),
          braceR: new Q("}"),
          parenL: new Q("(", { beforeExpr: !0, startsExpr: !0 }),
          parenR: new Q(")"),
          comma: new Q(",", ge),
          semi: new Q(";", ge),
          colon: new Q(":", ge),
          dot: new Q("."),
          question: new Q("?", ge),
          questionDot: new Q("?."),
          arrow: new Q("=>", ge),
          template: new Q("template"),
          invalidTemplate: new Q("invalidTemplate"),
          ellipsis: new Q("...", ge),
          backQuote: new Q("`", De),
          dollarBraceL: new Q("${", { beforeExpr: !0, startsExpr: !0 }),
          eq: new Q("=", { beforeExpr: !0, isAssign: !0 }),
          assign: new Q("_=", { beforeExpr: !0, isAssign: !0 }),
          incDec: new Q("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
          prefix: new Q("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          logicalOR: ye("||", 1),
          logicalAND: ye("&&", 2),
          bitwiseOR: ye("|", 3),
          bitwiseXOR: ye("^", 4),
          bitwiseAND: ye("&", 5),
          equality: ye("==/!=/===/!==", 6),
          relational: ye("</>/<=/>=", 7),
          bitShift: ye("<</>>/>>>", 8),
          plusMin: new Q("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
          modulo: ye("%", 10),
          star: ye("*", 10),
          slash: ye("/", 10),
          starstar: new Q("**", { beforeExpr: !0 }),
          coalesce: ye("??", 1),
          _break: X("break"),
          _case: X("case", ge),
          _catch: X("catch"),
          _continue: X("continue"),
          _debugger: X("debugger"),
          _default: X("default", ge),
          _do: X("do", { isLoop: !0, beforeExpr: !0 }),
          _else: X("else", ge),
          _finally: X("finally"),
          _for: X("for", { isLoop: !0 }),
          _function: X("function", De),
          _if: X("if"),
          _return: X("return", ge),
          _switch: X("switch"),
          _throw: X("throw", ge),
          _try: X("try"),
          _var: X("var"),
          _const: X("const"),
          _while: X("while", { isLoop: !0 }),
          _with: X("with"),
          _new: X("new", { beforeExpr: !0, startsExpr: !0 }),
          _this: X("this", De),
          _super: X("super", De),
          _class: X("class", De),
          _extends: X("extends", ge),
          _export: X("export"),
          _import: X("import", De),
          _null: X("null", De),
          _true: X("true", De),
          _false: X("false", De),
          _in: X("in", { beforeExpr: !0, binop: 7 }),
          _instanceof: X("instanceof", { beforeExpr: !0, binop: 7 }),
          _typeof: X("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _void: X("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _delete: X("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        }),
        (me = /\r\n?|\n|\u2028|\u2029/),
        (ze = new RegExp(me.source, "g")),
        (Ot = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/),
        (Ee = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g),
        (zt = Object.prototype),
        (kr = zt.hasOwnProperty),
        (Kn = zt.toString),
        (hn =
          Array.isArray ||
          function (e) {
            return Kn.call(e) === "[object Array]";
          }),
        (Ue = function (e, t) {
          (this.line = e), (this.column = t);
        }),
        (Ue.prototype.offset = function (e) {
          return new Ue(this.line, this.column + e);
        }),
        (et = function (e, t, n) {
          (this.start = t), (this.end = n), e.sourceFile !== null && (this.source = e.sourceFile);
        }),
        (At = {
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
        }),
        (Qe = 1),
        (Ze = 2),
        (kt = Qe | Ze),
        (pn = 4),
        (fn = 8),
        (Gt = 16),
        ($t = 32),
        (Jt = 64),
        (Xt = 128),
        (Ht = 0),
        (It = 1),
        (ve = 2),
        (Qt = 3),
        (Yt = 4),
        (Kt = 5),
        (te = function (e, t, n) {
          (this.options = e = Gu(e)),
            (this.sourceFile = e.sourceFile),
            (this.keywords = We(Qn[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]));
          var r = "";
          if (e.allowReserved !== !0) {
            for (var i = e.ecmaVersion; !(r = St[i]); i--);
            e.sourceType === "module" && (r += " await");
          }
          this.reservedWords = We(r);
          var o = (r ? r + " " : "") + St.strict;
          (this.reservedWordsStrict = We(o)),
            (this.reservedWordsStrictBind = We(o + " " + St.strictBind)),
            (this.input = String(t)),
            (this.containsEsc = !1),
            n
              ? ((this.pos = n),
                (this.lineStart =
                  this.input.lastIndexOf(
                    `
`,
                    n - 1
                  ) + 1),
                (this.curLine = this.input.slice(0, this.lineStart).split(me).length))
              : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
            (this.type = f.eof),
            (this.value = null),
            (this.start = this.end = this.pos),
            (this.startLoc = this.endLoc = this.curPosition()),
            (this.lastTokEndLoc = this.lastTokStartLoc = null),
            (this.lastTokStart = this.lastTokEnd = this.pos),
            (this.context = this.initialContext()),
            (this.exprAllowed = !0),
            (this.inModule = e.sourceType === "module"),
            (this.strict = this.inModule || this.strictDirective(this.pos)),
            (this.potentialArrowAt = -1),
            (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
            (this.labels = []),
            (this.undefinedExports = {}),
            this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2),
            (this.scopeStack = []),
            this.enterScope(Qe),
            (this.regexpState = null);
        }),
        (Ne = {
          inFunction: { configurable: !0 },
          inGenerator: { configurable: !0 },
          inAsync: { configurable: !0 },
          allowSuper: { configurable: !0 },
          allowDirectSuper: { configurable: !0 },
          treatFunctionsAsVar: { configurable: !0 },
        }),
        (te.prototype.parse = function () {
          var e = this.options.program || this.startNode();
          return this.nextToken(), this.parseTopLevel(e);
        }),
        (Ne.inFunction.get = function () {
          return (this.currentVarScope().flags & Ze) > 0;
        }),
        (Ne.inGenerator.get = function () {
          return (this.currentVarScope().flags & fn) > 0;
        }),
        (Ne.inAsync.get = function () {
          return (this.currentVarScope().flags & pn) > 0;
        }),
        (Ne.allowSuper.get = function () {
          return (this.currentThisScope().flags & Jt) > 0;
        }),
        (Ne.allowDirectSuper.get = function () {
          return (this.currentThisScope().flags & Xt) > 0;
        }),
        (Ne.treatFunctionsAsVar.get = function () {
          return this.treatFunctionsAsVarInScope(this.currentScope());
        }),
        (te.prototype.inNonArrowFunction = function () {
          return (this.currentThisScope().flags & Ze) > 0;
        }),
        (te.extend = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var n = this, r = 0; r < e.length; r++) n = e[r](n);
          return n;
        }),
        (te.parse = function (e, t) {
          return new this(t, e).parse();
        }),
        (te.parseExpressionAt = function (e, t, n) {
          var r = new this(n, e, t);
          return r.nextToken(), r.parseExpression();
        }),
        (te.tokenizer = function (e, t) {
          return new this(t, e);
        }),
        Object.defineProperties(te.prototype, Ne),
        (de = te.prototype),
        (Zn = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/),
        (de.strictDirective = function (e) {
          for (;;) {
            (Ee.lastIndex = e), (e += Ee.exec(this.input)[0].length);
            var t = Zn.exec(this.input.slice(e));
            if (!t) return !1;
            if ((t[1] || t[2]) === "use strict") {
              Ee.lastIndex = e + t[0].length;
              var n = Ee.exec(this.input),
                r = n.index + n[0].length,
                i = this.input.charAt(r);
              return (
                i === ";" ||
                i === "}" ||
                (me.test(n[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || (i === "!" && this.input.charAt(r + 1) === "=")))
              );
            }
            (e += t[0].length), (Ee.lastIndex = e), (e += Ee.exec(this.input)[0].length), this.input[e] === ";" && e++;
          }
        }),
        (de.eat = function (e) {
          return this.type === e ? (this.next(), !0) : !1;
        }),
        (de.isContextual = function (e) {
          return this.type === f.name && this.value === e && !this.containsEsc;
        }),
        (de.eatContextual = function (e) {
          return this.isContextual(e) ? (this.next(), !0) : !1;
        }),
        (de.expectContextual = function (e) {
          this.eatContextual(e) || this.unexpected();
        }),
        (de.canInsertSemicolon = function () {
          return this.type === f.eof || this.type === f.braceR || me.test(this.input.slice(this.lastTokEnd, this.start));
        }),
        (de.insertSemicolon = function () {
          if (this.canInsertSemicolon())
            return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
        }),
        (de.semicolon = function () {
          !this.eat(f.semi) && !this.insertSemicolon() && this.unexpected();
        }),
        (de.afterTrailingComma = function (e, t) {
          if (this.type === e)
            return (
              this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0
            );
        }),
        (de.expect = function (e) {
          this.eat(e) || this.unexpected();
        }),
        (de.unexpected = function (e) {
          this.raise(e ?? this.start, "Unexpected token");
        }),
        (de.checkPatternErrors = function (e, t) {
          if (e) {
            e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
            var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
            n > -1 && this.raiseRecoverable(n, "Parenthesized pattern");
          }
        }),
        (de.checkExpressionErrors = function (e, t) {
          if (!e) return !1;
          var n = e.shorthandAssign,
            r = e.doubleProto;
          if (!t) return n >= 0 || r >= 0;
          n >= 0 && this.raise(n, "Shorthand property assignments are valid only in destructuring patterns"),
            r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
        }),
        (de.checkYieldAwaitInDefaultParams = function () {
          this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos) &&
            this.raise(this.yieldPos, "Yield expression cannot be a default value"),
            this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
        }),
        (de.isSimpleAssignTarget = function (e) {
          return e.type === "ParenthesizedExpression"
            ? this.isSimpleAssignTarget(e.expression)
            : e.type === "Identifier" || e.type === "MemberExpression";
        }),
        (z = te.prototype),
        (z.parseTopLevel = function (e) {
          var t = {};
          for (e.body || (e.body = []); this.type !== f.eof; ) {
            var n = this.parseStatement(null, !0, t);
            e.body.push(n);
          }
          if (this.inModule)
            for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
              var o = i[r];
              this.raiseRecoverable(this.undefinedExports[o].start, "Export '" + o + "' is not defined");
            }
          return this.adaptDirectivePrologue(e.body), this.next(), (e.sourceType = this.options.sourceType), this.finishNode(e, "Program");
        }),
        (Tt = { kind: "loop" }),
        (er = { kind: "switch" }),
        (z.isLet = function (e) {
          if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
          Ee.lastIndex = this.pos;
          var t = Ee.exec(this.input),
            n = this.pos + t[0].length,
            r = this.input.charCodeAt(n);
          if (r === 91) return !0;
          if (e) return !1;
          if (r === 123) return !0;
          if (Te(r, !0)) {
            for (var i = n + 1; qe(this.input.charCodeAt(i), !0); ) ++i;
            var o = this.input.slice(n, i);
            if (!Yn.test(o)) return !0;
          }
          return !1;
        }),
        (z.isAsyncFunction = function () {
          if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
          Ee.lastIndex = this.pos;
          var e = Ee.exec(this.input),
            t = this.pos + e[0].length;
          return (
            !me.test(this.input.slice(this.pos, t)) &&
            this.input.slice(t, t + 8) === "function" &&
            (t + 8 === this.input.length || !qe(this.input.charAt(t + 8)))
          );
        }),
        (z.parseStatement = function (e, t, n) {
          var r = this.type,
            i = this.startNode(),
            o;
          switch ((this.isLet(e) && ((r = f._var), (o = "let")), r)) {
            case f._break:
            case f._continue:
              return this.parseBreakContinueStatement(i, r.keyword);
            case f._debugger:
              return this.parseDebuggerStatement(i);
            case f._do:
              return this.parseDoStatement(i);
            case f._for:
              return this.parseForStatement(i);
            case f._function:
              return (
                e && (this.strict || (e !== "if" && e !== "label")) && this.options.ecmaVersion >= 6 && this.unexpected(),
                this.parseFunctionStatement(i, !1, !e)
              );
            case f._class:
              return e && this.unexpected(), this.parseClass(i, !0);
            case f._if:
              return this.parseIfStatement(i);
            case f._return:
              return this.parseReturnStatement(i);
            case f._switch:
              return this.parseSwitchStatement(i);
            case f._throw:
              return this.parseThrowStatement(i);
            case f._try:
              return this.parseTryStatement(i);
            case f._const:
            case f._var:
              return (o = o || this.value), e && o !== "var" && this.unexpected(), this.parseVarStatement(i, o);
            case f._while:
              return this.parseWhileStatement(i);
            case f._with:
              return this.parseWithStatement(i);
            case f.braceL:
              return this.parseBlock(!0, i);
            case f.semi:
              return this.parseEmptyStatement(i);
            case f._export:
            case f._import:
              if (this.options.ecmaVersion > 10 && r === f._import) {
                Ee.lastIndex = this.pos;
                var s = Ee.exec(this.input),
                  h = this.pos + s[0].length,
                  p = this.input.charCodeAt(h);
                if (p === 40 || p === 46) return this.parseExpressionStatement(i, this.parseExpression());
              }
              return (
                this.options.allowImportExportEverywhere ||
                  (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"),
                  this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")),
                r === f._import ? this.parseImport(i) : this.parseExport(i, n)
              );
            default:
              if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
              var A = this.value,
                D = this.parseExpression();
              return r === f.name && D.type === "Identifier" && this.eat(f.colon)
                ? this.parseLabeledStatement(i, A, D, e)
                : this.parseExpressionStatement(i, D);
          }
        }),
        (z.parseBreakContinueStatement = function (e, t) {
          var n = t === "break";
          this.next(),
            this.eat(f.semi) || this.insertSemicolon()
              ? (e.label = null)
              : this.type !== f.name
              ? this.unexpected()
              : ((e.label = this.parseIdent()), this.semicolon());
          for (var r = 0; r < this.labels.length; ++r) {
            var i = this.labels[r];
            if ((e.label == null || i.name === e.label.name) && ((i.kind != null && (n || i.kind === "loop")) || (e.label && n))) break;
          }
          return (
            r === this.labels.length && this.raise(e.start, "Unsyntactic " + t),
            this.finishNode(e, n ? "BreakStatement" : "ContinueStatement")
          );
        }),
        (z.parseDebuggerStatement = function (e) {
          return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
        }),
        (z.parseDoStatement = function (e) {
          return (
            this.next(),
            this.labels.push(Tt),
            (e.body = this.parseStatement("do")),
            this.labels.pop(),
            this.expect(f._while),
            (e.test = this.parseParenExpression()),
            this.options.ecmaVersion >= 6 ? this.eat(f.semi) : this.semicolon(),
            this.finishNode(e, "DoWhileStatement")
          );
        }),
        (z.parseForStatement = function (e) {
          this.next();
          var t =
            this.options.ecmaVersion >= 9 &&
            (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
            this.eatContextual("await")
              ? this.lastTokStart
              : -1;
          if ((this.labels.push(Tt), this.enterScope(0), this.expect(f.parenL), this.type === f.semi))
            return t > -1 && this.unexpected(t), this.parseFor(e, null);
          var n = this.isLet();
          if (this.type === f._var || this.type === f._const || n) {
            var r = this.startNode(),
              i = n ? "let" : this.value;
            return (
              this.next(),
              this.parseVar(r, !0, i),
              this.finishNode(r, "VariableDeclaration"),
              (this.type === f._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && r.declarations.length === 1
                ? (this.options.ecmaVersion >= 9 && (this.type === f._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
                  this.parseForIn(e, r))
                : (t > -1 && this.unexpected(t), this.parseFor(e, r))
            );
          }
          var o = new vt(),
            s = this.parseExpression(!0, o);
          return this.type === f._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))
            ? (this.options.ecmaVersion >= 9 && (this.type === f._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
              this.toAssignable(s, !1, o),
              this.checkLVal(s),
              this.parseForIn(e, s))
            : (this.checkExpressionErrors(o, !0), t > -1 && this.unexpected(t), this.parseFor(e, s));
        }),
        (z.parseFunctionStatement = function (e, t, n) {
          return this.next(), this.parseFunction(e, Ye | (n ? 0 : Pt), !1, t);
        }),
        (z.parseIfStatement = function (e) {
          return (
            this.next(),
            (e.test = this.parseParenExpression()),
            (e.consequent = this.parseStatement("if")),
            (e.alternate = this.eat(f._else) ? this.parseStatement("if") : null),
            this.finishNode(e, "IfStatement")
          );
        }),
        (z.parseReturnStatement = function (e) {
          return (
            !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"),
            this.next(),
            this.eat(f.semi) || this.insertSemicolon() ? (e.argument = null) : ((e.argument = this.parseExpression()), this.semicolon()),
            this.finishNode(e, "ReturnStatement")
          );
        }),
        (z.parseSwitchStatement = function (e) {
          this.next(),
            (e.discriminant = this.parseParenExpression()),
            (e.cases = []),
            this.expect(f.braceL),
            this.labels.push(er),
            this.enterScope(0);
          for (var t, n = !1; this.type !== f.braceR; )
            if (this.type === f._case || this.type === f._default) {
              var r = this.type === f._case;
              t && this.finishNode(t, "SwitchCase"),
                e.cases.push((t = this.startNode())),
                (t.consequent = []),
                this.next(),
                r
                  ? (t.test = this.parseExpression())
                  : (n && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), (n = !0), (t.test = null)),
                this.expect(f.colon);
            } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
          return (
            this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement")
          );
        }),
        (z.parseThrowStatement = function (e) {
          return (
            this.next(),
            me.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"),
            (e.argument = this.parseExpression()),
            this.semicolon(),
            this.finishNode(e, "ThrowStatement")
          );
        }),
        (tr = []),
        (z.parseTryStatement = function (e) {
          if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === f._catch)) {
            var t = this.startNode();
            if ((this.next(), this.eat(f.parenL))) {
              t.param = this.parseBindingAtom();
              var n = t.param.type === "Identifier";
              this.enterScope(n ? $t : 0), this.checkLVal(t.param, n ? Yt : ve), this.expect(f.parenR);
            } else this.options.ecmaVersion < 10 && this.unexpected(), (t.param = null), this.enterScope(0);
            (t.body = this.parseBlock(!1)), this.exitScope(), (e.handler = this.finishNode(t, "CatchClause"));
          }
          return (
            (e.finalizer = this.eat(f._finally) ? this.parseBlock() : null),
            !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"),
            this.finishNode(e, "TryStatement")
          );
        }),
        (z.parseVarStatement = function (e, t) {
          return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
        }),
        (z.parseWhileStatement = function (e) {
          return (
            this.next(),
            (e.test = this.parseParenExpression()),
            this.labels.push(Tt),
            (e.body = this.parseStatement("while")),
            this.labels.pop(),
            this.finishNode(e, "WhileStatement")
          );
        }),
        (z.parseWithStatement = function (e) {
          return (
            this.strict && this.raise(this.start, "'with' in strict mode"),
            this.next(),
            (e.object = this.parseParenExpression()),
            (e.body = this.parseStatement("with")),
            this.finishNode(e, "WithStatement")
          );
        }),
        (z.parseEmptyStatement = function (e) {
          return this.next(), this.finishNode(e, "EmptyStatement");
        }),
        (z.parseLabeledStatement = function (e, t, n, r) {
          for (var i = 0, o = this.labels; i < o.length; i += 1) {
            var s = o[i];
            s.name === t && this.raise(n.start, "Label '" + t + "' is already declared");
          }
          for (var h = this.type.isLoop ? "loop" : this.type === f._switch ? "switch" : null, p = this.labels.length - 1; p >= 0; p--) {
            var A = this.labels[p];
            if (A.statementStart === e.start) (A.statementStart = this.start), (A.kind = h);
            else break;
          }
          return (
            this.labels.push({ name: t, kind: h, statementStart: this.start }),
            (e.body = this.parseStatement(r ? (r.indexOf("label") === -1 ? r + "label" : r) : "label")),
            this.labels.pop(),
            (e.label = n),
            this.finishNode(e, "LabeledStatement")
          );
        }),
        (z.parseExpressionStatement = function (e, t) {
          return (e.expression = t), this.semicolon(), this.finishNode(e, "ExpressionStatement");
        }),
        (z.parseBlock = function (e, t, n) {
          for (
            e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(f.braceL), e && this.enterScope(0);
            this.type !== f.braceR;

          ) {
            var r = this.parseStatement(null);
            t.body.push(r);
          }
          return n && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
        }),
        (z.parseFor = function (e, t) {
          return (
            (e.init = t),
            this.expect(f.semi),
            (e.test = this.type === f.semi ? null : this.parseExpression()),
            this.expect(f.semi),
            (e.update = this.type === f.parenR ? null : this.parseExpression()),
            this.expect(f.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, "ForStatement")
          );
        }),
        (z.parseForIn = function (e, t) {
          var n = this.type === f._in;
          return (
            this.next(),
            t.type === "VariableDeclaration" &&
            t.declarations[0].init != null &&
            (!n || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier")
              ? this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
              : t.type === "AssignmentPattern" && this.raise(t.start, "Invalid left-hand side in for-loop"),
            (e.left = t),
            (e.right = n ? this.parseExpression() : this.parseMaybeAssign()),
            this.expect(f.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, n ? "ForInStatement" : "ForOfStatement")
          );
        }),
        (z.parseVar = function (e, t, n) {
          for (e.declarations = [], e.kind = n; ; ) {
            var r = this.startNode();
            if (
              (this.parseVarId(r, n),
              this.eat(f.eq)
                ? (r.init = this.parseMaybeAssign(t))
                : n === "const" && !(this.type === f._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))
                ? this.unexpected()
                : r.id.type !== "Identifier" && !(t && (this.type === f._in || this.isContextual("of")))
                ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value")
                : (r.init = null),
              e.declarations.push(this.finishNode(r, "VariableDeclarator")),
              !this.eat(f.comma))
            )
              break;
          }
          return e;
        }),
        (z.parseVarId = function (e, t) {
          (e.id = this.parseBindingAtom()), this.checkLVal(e.id, t === "var" ? It : ve, !1);
        }),
        (Ye = 1),
        (Pt = 2),
        (Zt = 4),
        (z.parseFunction = function (e, t, n, r) {
          this.initFunction(e),
            (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !r)) &&
              (this.type === f.star && t & Pt && this.unexpected(), (e.generator = this.eat(f.star))),
            this.options.ecmaVersion >= 8 && (e.async = !!r),
            t & Ye &&
              ((e.id = t & Zt && this.type !== f.name ? null : this.parseIdent()),
              e.id && !(t & Pt) && this.checkLVal(e.id, this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? It : ve) : Qt));
          var i = this.yieldPos,
            o = this.awaitPos,
            s = this.awaitIdentPos;
          return (
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(Vt(e.async, e.generator)),
            t & Ye || (e.id = this.type === f.name ? this.parseIdent() : null),
            this.parseFunctionParams(e),
            this.parseFunctionBody(e, n, !1),
            (this.yieldPos = i),
            (this.awaitPos = o),
            (this.awaitIdentPos = s),
            this.finishNode(e, t & Ye ? "FunctionDeclaration" : "FunctionExpression")
          );
        }),
        (z.parseFunctionParams = function (e) {
          this.expect(f.parenL),
            (e.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8)),
            this.checkYieldAwaitInDefaultParams();
        }),
        (z.parseClass = function (e, t) {
          this.next();
          var n = this.strict;
          (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
          var r = this.startNode(),
            i = !1;
          for (r.body = [], this.expect(f.braceL); this.type !== f.braceR; ) {
            var o = this.parseClassElement(e.superClass !== null);
            o &&
              (r.body.push(o),
              o.type === "MethodDefinition" &&
                o.kind === "constructor" &&
                (i && this.raise(o.start, "Duplicate constructor in the same class"), (i = !0)));
          }
          return (
            (this.strict = n),
            this.next(),
            (e.body = this.finishNode(r, "ClassBody")),
            this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
          );
        }),
        (z.parseClassElement = function (e) {
          var t = this;
          if (this.eat(f.semi)) return null;
          var n = this.startNode(),
            r = function (p, A) {
              A === void 0 && (A = !1);
              var D = t.start,
                y = t.startLoc;
              return t.eatContextual(p)
                ? t.type !== f.parenL && (!A || !t.canInsertSemicolon())
                  ? !0
                  : (n.key && t.unexpected(),
                    (n.computed = !1),
                    (n.key = t.startNodeAt(D, y)),
                    (n.key.name = p),
                    t.finishNode(n.key, "Identifier"),
                    !1)
                : !1;
            };
          (n.kind = "method"), (n.static = r("static"));
          var i = this.eat(f.star),
            o = !1;
          i ||
            (this.options.ecmaVersion >= 8 && r("async", !0)
              ? ((o = !0), (i = this.options.ecmaVersion >= 9 && this.eat(f.star)))
              : r("get")
              ? (n.kind = "get")
              : r("set") && (n.kind = "set")),
            n.key || this.parsePropertyName(n);
          var s = n.key,
            h = !1;
          return (
            !n.computed &&
            !n.static &&
            ((s.type === "Identifier" && s.name === "constructor") || (s.type === "Literal" && s.value === "constructor"))
              ? (n.kind !== "method" && this.raise(s.start, "Constructor can't have get/set modifier"),
                i && this.raise(s.start, "Constructor can't be a generator"),
                o && this.raise(s.start, "Constructor can't be an async method"),
                (n.kind = "constructor"),
                (h = e))
              : n.static &&
                s.type === "Identifier" &&
                s.name === "prototype" &&
                this.raise(s.start, "Classes may not have a static property named prototype"),
            this.parseClassMethod(n, i, o, h),
            n.kind === "get" && n.value.params.length !== 0 && this.raiseRecoverable(n.value.start, "getter should have no params"),
            n.kind === "set" && n.value.params.length !== 1 && this.raiseRecoverable(n.value.start, "setter should have exactly one param"),
            n.kind === "set" &&
              n.value.params[0].type === "RestElement" &&
              this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params"),
            n
          );
        }),
        (z.parseClassMethod = function (e, t, n, r) {
          return (e.value = this.parseMethod(t, n, r)), this.finishNode(e, "MethodDefinition");
        }),
        (z.parseClassId = function (e, t) {
          this.type === f.name
            ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, ve, !1))
            : (t === !0 && this.unexpected(), (e.id = null));
        }),
        (z.parseClassSuper = function (e) {
          e.superClass = this.eat(f._extends) ? this.parseExprSubscripts() : null;
        }),
        (z.parseExport = function (e, t) {
          if ((this.next(), this.eat(f.star)))
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual("as")
                  ? ((e.exported = this.parseIdent(!0)), this.checkExport(t, e.exported.name, this.lastTokStart))
                  : (e.exported = null)),
              this.expectContextual("from"),
              this.type !== f.string && this.unexpected(),
              (e.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(e, "ExportAllDeclaration")
            );
          if (this.eat(f._default)) {
            this.checkExport(t, "default", this.lastTokStart);
            var n;
            if (this.type === f._function || (n = this.isAsyncFunction())) {
              var r = this.startNode();
              this.next(), n && this.next(), (e.declaration = this.parseFunction(r, Ye | Zt, !1, n));
            } else if (this.type === f._class) {
              var i = this.startNode();
              e.declaration = this.parseClass(i, "nullableID");
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
              this.type !== f.string && this.unexpected(), (e.source = this.parseExprAtom());
            else {
              for (var o = 0, s = e.specifiers; o < s.length; o += 1) {
                var h = s[o];
                this.checkUnreserved(h.local), this.checkLocalExport(h.local);
              }
              e.source = null;
            }
            this.semicolon();
          }
          return this.finishNode(e, "ExportNamedDeclaration");
        }),
        (z.checkExport = function (e, t, n) {
          e && (Nt(e, t) && this.raiseRecoverable(n, "Duplicate export '" + t + "'"), (e[t] = !0));
        }),
        (z.checkPatternExport = function (e, t) {
          var n = t.type;
          if (n === "Identifier") this.checkExport(e, t.name, t.start);
          else if (n === "ObjectPattern")
            for (var r = 0, i = t.properties; r < i.length; r += 1) {
              var o = i[r];
              this.checkPatternExport(e, o);
            }
          else if (n === "ArrayPattern")
            for (var s = 0, h = t.elements; s < h.length; s += 1) {
              var p = h[s];
              p && this.checkPatternExport(e, p);
            }
          else
            n === "Property"
              ? this.checkPatternExport(e, t.value)
              : n === "AssignmentPattern"
              ? this.checkPatternExport(e, t.left)
              : n === "RestElement"
              ? this.checkPatternExport(e, t.argument)
              : n === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
        }),
        (z.checkVariableExport = function (e, t) {
          if (e)
            for (var n = 0, r = t; n < r.length; n += 1) {
              var i = r[n];
              this.checkPatternExport(e, i.id);
            }
        }),
        (z.shouldParseExportStatement = function () {
          return (
            this.type.keyword === "var" ||
            this.type.keyword === "const" ||
            this.type.keyword === "class" ||
            this.type.keyword === "function" ||
            this.isLet() ||
            this.isAsyncFunction()
          );
        }),
        (z.parseExportSpecifiers = function (e) {
          var t = [],
            n = !0;
          for (this.expect(f.braceL); !this.eat(f.braceR); ) {
            if (n) n = !1;
            else if ((this.expect(f.comma), this.afterTrailingComma(f.braceR))) break;
            var r = this.startNode();
            (r.local = this.parseIdent(!0)),
              (r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local),
              this.checkExport(e, r.exported.name, r.exported.start),
              t.push(this.finishNode(r, "ExportSpecifier"));
          }
          return t;
        }),
        (z.parseImport = function (e) {
          return (
            this.next(),
            this.type === f.string
              ? ((e.specifiers = tr), (e.source = this.parseExprAtom()))
              : ((e.specifiers = this.parseImportSpecifiers()),
                this.expectContextual("from"),
                (e.source = this.type === f.string ? this.parseExprAtom() : this.unexpected())),
            this.semicolon(),
            this.finishNode(e, "ImportDeclaration")
          );
        }),
        (z.parseImportSpecifiers = function () {
          var e = [],
            t = !0;
          if (this.type === f.name) {
            var n = this.startNode();
            if (
              ((n.local = this.parseIdent()),
              this.checkLVal(n.local, ve),
              e.push(this.finishNode(n, "ImportDefaultSpecifier")),
              !this.eat(f.comma))
            )
              return e;
          }
          if (this.type === f.star) {
            var r = this.startNode();
            return (
              this.next(),
              this.expectContextual("as"),
              (r.local = this.parseIdent()),
              this.checkLVal(r.local, ve),
              e.push(this.finishNode(r, "ImportNamespaceSpecifier")),
              e
            );
          }
          for (this.expect(f.braceL); !this.eat(f.braceR); ) {
            if (t) t = !1;
            else if ((this.expect(f.comma), this.afterTrailingComma(f.braceR))) break;
            var i = this.startNode();
            (i.imported = this.parseIdent(!0)),
              this.eatContextual("as") ? (i.local = this.parseIdent()) : (this.checkUnreserved(i.imported), (i.local = i.imported)),
              this.checkLVal(i.local, ve),
              e.push(this.finishNode(i, "ImportSpecifier"));
          }
          return e;
        }),
        (z.adaptDirectivePrologue = function (e) {
          for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
        }),
        (z.isDirectiveCandidate = function (e) {
          return (
            e.type === "ExpressionStatement" &&
            e.expression.type === "Literal" &&
            typeof e.expression.value == "string" &&
            (this.input[e.start] === '"' || this.input[e.start] === "'")
          );
        }),
        (_e = te.prototype),
        (_e.toAssignable = function (e, t, n) {
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
                (e.type = "ObjectPattern"), n && this.checkPatternErrors(n, !0);
                for (var r = 0, i = e.properties; r < i.length; r += 1) {
                  var o = i[r];
                  this.toAssignable(o, t),
                    o.type === "RestElement" &&
                      (o.argument.type === "ArrayPattern" || o.argument.type === "ObjectPattern") &&
                      this.raise(o.argument.start, "Unexpected token");
                }
                break;
              case "Property":
                e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"),
                  this.toAssignable(e.value, t);
                break;
              case "ArrayExpression":
                (e.type = "ArrayPattern"), n && this.checkPatternErrors(n, !0), this.toAssignableList(e.elements, t);
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
                this.toAssignable(e.expression, t, n);
                break;
              case "ChainExpression":
                this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                break;
              case "MemberExpression":
                if (!t) break;
              default:
                this.raise(e.start, "Assigning to rvalue");
            }
          else n && this.checkPatternErrors(n, !0);
          return e;
        }),
        (_e.toAssignableList = function (e, t) {
          for (var n = e.length, r = 0; r < n; r++) {
            var i = e[r];
            i && this.toAssignable(i, t);
          }
          if (n) {
            var o = e[n - 1];
            this.options.ecmaVersion === 6 &&
              t &&
              o &&
              o.type === "RestElement" &&
              o.argument.type !== "Identifier" &&
              this.unexpected(o.argument.start);
          }
          return e;
        }),
        (_e.parseSpread = function (e) {
          var t = this.startNode();
          return this.next(), (t.argument = this.parseMaybeAssign(!1, e)), this.finishNode(t, "SpreadElement");
        }),
        (_e.parseRestBinding = function () {
          var e = this.startNode();
          return (
            this.next(),
            this.options.ecmaVersion === 6 && this.type !== f.name && this.unexpected(),
            (e.argument = this.parseBindingAtom()),
            this.finishNode(e, "RestElement")
          );
        }),
        (_e.parseBindingAtom = function () {
          if (this.options.ecmaVersion >= 6)
            switch (this.type) {
              case f.bracketL:
                var e = this.startNode();
                return this.next(), (e.elements = this.parseBindingList(f.bracketR, !0, !0)), this.finishNode(e, "ArrayPattern");
              case f.braceL:
                return this.parseObj(!0);
            }
          return this.parseIdent();
        }),
        (_e.parseBindingList = function (e, t, n) {
          for (var r = [], i = !0; !this.eat(e); )
            if ((i ? (i = !1) : this.expect(f.comma), t && this.type === f.comma)) r.push(null);
            else {
              if (n && this.afterTrailingComma(e)) break;
              if (this.type === f.ellipsis) {
                var o = this.parseRestBinding();
                this.parseBindingListItem(o),
                  r.push(o),
                  this.type === f.comma && this.raise(this.start, "Comma is not permitted after the rest element"),
                  this.expect(e);
                break;
              } else {
                var s = this.parseMaybeDefault(this.start, this.startLoc);
                this.parseBindingListItem(s), r.push(s);
              }
            }
          return r;
        }),
        (_e.parseBindingListItem = function (e) {
          return e;
        }),
        (_e.parseMaybeDefault = function (e, t, n) {
          if (((n = n || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(f.eq))) return n;
          var r = this.startNodeAt(e, t);
          return (r.left = n), (r.right = this.parseMaybeAssign()), this.finishNode(r, "AssignmentPattern");
        }),
        (_e.checkLVal = function (e, t, n) {
          switch ((t === void 0 && (t = Ht), e.type)) {
            case "Identifier":
              t === ve && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"),
                this.strict &&
                  this.reservedWordsStrictBind.test(e.name) &&
                  this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"),
                n && (Nt(n, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), (n[e.name] = !0)),
                t !== Ht && t !== Kt && this.declareName(e.name, t, e.start);
              break;
            case "ChainExpression":
              this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              t && this.raiseRecoverable(e.start, "Binding member expression");
              break;
            case "ObjectPattern":
              for (var r = 0, i = e.properties; r < i.length; r += 1) {
                var o = i[r];
                this.checkLVal(o, t, n);
              }
              break;
            case "Property":
              this.checkLVal(e.value, t, n);
              break;
            case "ArrayPattern":
              for (var s = 0, h = e.elements; s < h.length; s += 1) {
                var p = h[s];
                p && this.checkLVal(p, t, n);
              }
              break;
            case "AssignmentPattern":
              this.checkLVal(e.left, t, n);
              break;
            case "RestElement":
              this.checkLVal(e.argument, t, n);
              break;
            case "ParenthesizedExpression":
              this.checkLVal(e.expression, t, n);
              break;
            default:
              this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
          }
        }),
        (G = te.prototype),
        (G.checkPropClash = function (e, t, n) {
          if (
            !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
            !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
          ) {
            var r = e.key,
              i;
            switch (r.type) {
              case "Identifier":
                i = r.name;
                break;
              case "Literal":
                i = String(r.value);
                break;
              default:
                return;
            }
            var o = e.kind;
            if (this.options.ecmaVersion >= 6) {
              i === "__proto__" &&
                o === "init" &&
                (t.proto &&
                  (n
                    ? n.doubleProto < 0 && (n.doubleProto = r.start)
                    : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")),
                (t.proto = !0));
              return;
            }
            i = "$" + i;
            var s = t[i];
            if (s) {
              var h;
              o === "init" ? (h = (this.strict && s.init) || s.get || s.set) : (h = s.init || s[o]),
                h && this.raiseRecoverable(r.start, "Redefinition of property");
            } else s = t[i] = { init: !1, get: !1, set: !1 };
            s[o] = !0;
          }
        }),
        (G.parseExpression = function (e, t) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseMaybeAssign(e, t);
          if (this.type === f.comma) {
            var o = this.startNodeAt(n, r);
            for (o.expressions = [i]; this.eat(f.comma); ) o.expressions.push(this.parseMaybeAssign(e, t));
            return this.finishNode(o, "SequenceExpression");
          }
          return i;
        }),
        (G.parseMaybeAssign = function (e, t, n) {
          if (this.isContextual("yield")) {
            if (this.inGenerator) return this.parseYield(e);
            this.exprAllowed = !1;
          }
          var r = !1,
            i = -1,
            o = -1;
          t
            ? ((i = t.parenthesizedAssign), (o = t.trailingComma), (t.parenthesizedAssign = t.trailingComma = -1))
            : ((t = new vt()), (r = !0));
          var s = this.start,
            h = this.startLoc;
          (this.type === f.parenL || this.type === f.name) && (this.potentialArrowAt = this.start);
          var p = this.parseMaybeConditional(e, t);
          if ((n && (p = n.call(this, p, s, h)), this.type.isAssign)) {
            var A = this.startNodeAt(s, h);
            return (
              (A.operator = this.value),
              (A.left = this.type === f.eq ? this.toAssignable(p, !1, t) : p),
              r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
              t.shorthandAssign >= A.left.start && (t.shorthandAssign = -1),
              this.checkLVal(p),
              this.next(),
              (A.right = this.parseMaybeAssign(e)),
              this.finishNode(A, "AssignmentExpression")
            );
          } else r && this.checkExpressionErrors(t, !0);
          return i > -1 && (t.parenthesizedAssign = i), o > -1 && (t.trailingComma = o), p;
        }),
        (G.parseMaybeConditional = function (e, t) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseExprOps(e, t);
          if (this.checkExpressionErrors(t)) return i;
          if (this.eat(f.question)) {
            var o = this.startNodeAt(n, r);
            return (
              (o.test = i),
              (o.consequent = this.parseMaybeAssign()),
              this.expect(f.colon),
              (o.alternate = this.parseMaybeAssign(e)),
              this.finishNode(o, "ConditionalExpression")
            );
          }
          return i;
        }),
        (G.parseExprOps = function (e, t) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseMaybeUnary(t, !1);
          return this.checkExpressionErrors(t) || (i.start === n && i.type === "ArrowFunctionExpression")
            ? i
            : this.parseExprOp(i, n, r, -1, e);
        }),
        (G.parseExprOp = function (e, t, n, r, i) {
          var o = this.type.binop;
          if (o != null && (!i || this.type !== f._in) && o > r) {
            var s = this.type === f.logicalOR || this.type === f.logicalAND,
              h = this.type === f.coalesce;
            h && (o = f.logicalAND.binop);
            var p = this.value;
            this.next();
            var A = this.start,
              D = this.startLoc,
              y = this.parseExprOp(this.parseMaybeUnary(null, !1), A, D, o, i),
              C = this.buildBinary(t, n, e, y, p, s || h);
            return (
              ((s && this.type === f.coalesce) || (h && (this.type === f.logicalOR || this.type === f.logicalAND))) &&
                this.raiseRecoverable(
                  this.start,
                  "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                ),
              this.parseExprOp(C, t, n, r, i)
            );
          }
          return e;
        }),
        (G.buildBinary = function (e, t, n, r, i, o) {
          var s = this.startNodeAt(e, t);
          return (s.left = n), (s.operator = i), (s.right = r), this.finishNode(s, o ? "LogicalExpression" : "BinaryExpression");
        }),
        (G.parseMaybeUnary = function (e, t) {
          var n = this.start,
            r = this.startLoc,
            i;
          if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)))
            (i = this.parseAwait()), (t = !0);
          else if (this.type.prefix) {
            var o = this.startNode(),
              s = this.type === f.incDec;
            (o.operator = this.value),
              (o.prefix = !0),
              this.next(),
              (o.argument = this.parseMaybeUnary(null, !0)),
              this.checkExpressionErrors(e, !0),
              s
                ? this.checkLVal(o.argument)
                : this.strict && o.operator === "delete" && o.argument.type === "Identifier"
                ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode")
                : (t = !0),
              (i = this.finishNode(o, s ? "UpdateExpression" : "UnaryExpression"));
          } else {
            if (((i = this.parseExprSubscripts(e)), this.checkExpressionErrors(e))) return i;
            for (; this.type.postfix && !this.canInsertSemicolon(); ) {
              var h = this.startNodeAt(n, r);
              (h.operator = this.value),
                (h.prefix = !1),
                (h.argument = i),
                this.checkLVal(i),
                this.next(),
                (i = this.finishNode(h, "UpdateExpression"));
            }
          }
          return !t && this.eat(f.starstar) ? this.buildBinary(n, r, i, this.parseMaybeUnary(null, !1), "**", !1) : i;
        }),
        (G.parseExprSubscripts = function (e) {
          var t = this.start,
            n = this.startLoc,
            r = this.parseExprAtom(e);
          if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
          var i = this.parseSubscripts(r, t, n);
          return (
            e &&
              i.type === "MemberExpression" &&
              (e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1),
              e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)),
            i
          );
        }),
        (G.parseSubscripts = function (e, t, n, r) {
          for (
            var i =
                this.options.ecmaVersion >= 8 &&
                e.type === "Identifier" &&
                e.name === "async" &&
                this.lastTokEnd === e.end &&
                !this.canInsertSemicolon() &&
                e.end - e.start === 5 &&
                this.potentialArrowAt === e.start,
              o = !1;
            ;

          ) {
            var s = this.parseSubscript(e, t, n, r, i, o);
            if ((s.optional && (o = !0), s === e || s.type === "ArrowFunctionExpression")) {
              if (o) {
                var h = this.startNodeAt(t, n);
                (h.expression = s), (s = this.finishNode(h, "ChainExpression"));
              }
              return s;
            }
            e = s;
          }
        }),
        (G.parseSubscript = function (e, t, n, r, i, o) {
          var s = this.options.ecmaVersion >= 11,
            h = s && this.eat(f.questionDot);
          r && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
          var p = this.eat(f.bracketL);
          if (p || (h && this.type !== f.parenL && this.type !== f.backQuote) || this.eat(f.dot)) {
            var A = this.startNodeAt(t, n);
            (A.object = e),
              (A.property = p ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never")),
              (A.computed = !!p),
              p && this.expect(f.bracketR),
              s && (A.optional = h),
              (e = this.finishNode(A, "MemberExpression"));
          } else if (!r && this.eat(f.parenL)) {
            var D = new vt(),
              y = this.yieldPos,
              C = this.awaitPos,
              g = this.awaitIdentPos;
            (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
            var m = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1, D);
            if (i && !h && !this.canInsertSemicolon() && this.eat(f.arrow))
              return (
                this.checkPatternErrors(D, !1),
                this.checkYieldAwaitInDefaultParams(),
                this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"),
                (this.yieldPos = y),
                (this.awaitPos = C),
                (this.awaitIdentPos = g),
                this.parseArrowExpression(this.startNodeAt(t, n), m, !0)
              );
            this.checkExpressionErrors(D, !0),
              (this.yieldPos = y || this.yieldPos),
              (this.awaitPos = C || this.awaitPos),
              (this.awaitIdentPos = g || this.awaitIdentPos);
            var E = this.startNodeAt(t, n);
            (E.callee = e), (E.arguments = m), s && (E.optional = h), (e = this.finishNode(E, "CallExpression"));
          } else if (this.type === f.backQuote) {
            (h || o) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
            var w = this.startNodeAt(t, n);
            (w.tag = e), (w.quasi = this.parseTemplate({ isTagged: !0 })), (e = this.finishNode(w, "TaggedTemplateExpression"));
          }
          return e;
        }),
        (G.parseExprAtom = function (e) {
          this.type === f.slash && this.readRegexp();
          var t,
            n = this.potentialArrowAt === this.start;
          switch (this.type) {
            case f._super:
              return (
                this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
                (t = this.startNode()),
                this.next(),
                this.type === f.parenL && !this.allowDirectSuper && this.raise(t.start, "super() call outside constructor of a subclass"),
                this.type !== f.dot && this.type !== f.bracketL && this.type !== f.parenL && this.unexpected(),
                this.finishNode(t, "Super")
              );
            case f._this:
              return (t = this.startNode()), this.next(), this.finishNode(t, "ThisExpression");
            case f.name:
              var r = this.start,
                i = this.startLoc,
                o = this.containsEsc,
                s = this.parseIdent(!1);
              if (this.options.ecmaVersion >= 8 && !o && s.name === "async" && !this.canInsertSemicolon() && this.eat(f._function))
                return this.parseFunction(this.startNodeAt(r, i), 0, !1, !0);
              if (n && !this.canInsertSemicolon()) {
                if (this.eat(f.arrow)) return this.parseArrowExpression(this.startNodeAt(r, i), [s], !1);
                if (this.options.ecmaVersion >= 8 && s.name === "async" && this.type === f.name && !o)
                  return (
                    (s = this.parseIdent(!1)),
                    (this.canInsertSemicolon() || !this.eat(f.arrow)) && this.unexpected(),
                    this.parseArrowExpression(this.startNodeAt(r, i), [s], !0)
                  );
              }
              return s;
            case f.regexp:
              var h = this.value;
              return (t = this.parseLiteral(h.value)), (t.regex = { pattern: h.pattern, flags: h.flags }), t;
            case f.num:
            case f.string:
              return this.parseLiteral(this.value);
            case f._null:
            case f._true:
            case f._false:
              return (
                (t = this.startNode()),
                (t.value = this.type === f._null ? null : this.type === f._true),
                (t.raw = this.type.keyword),
                this.next(),
                this.finishNode(t, "Literal")
              );
            case f.parenL:
              var p = this.start,
                A = this.parseParenAndDistinguishExpression(n);
              return (
                e &&
                  (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(A) && (e.parenthesizedAssign = p),
                  e.parenthesizedBind < 0 && (e.parenthesizedBind = p)),
                A
              );
            case f.bracketL:
              return (
                (t = this.startNode()),
                this.next(),
                (t.elements = this.parseExprList(f.bracketR, !0, !0, e)),
                this.finishNode(t, "ArrayExpression")
              );
            case f.braceL:
              return this.parseObj(!1, e);
            case f._function:
              return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
            case f._class:
              return this.parseClass(this.startNode(), !1);
            case f._new:
              return this.parseNew();
            case f.backQuote:
              return this.parseTemplate();
            case f._import:
              return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
            default:
              this.unexpected();
          }
        }),
        (G.parseExprImport = function () {
          var e = this.startNode();
          this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
          var t = this.parseIdent(!0);
          switch (this.type) {
            case f.parenL:
              return this.parseDynamicImport(e);
            case f.dot:
              return (e.meta = t), this.parseImportMeta(e);
            default:
              this.unexpected();
          }
        }),
        (G.parseDynamicImport = function (e) {
          if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(f.parenR))) {
            var t = this.start;
            this.eat(f.comma) && this.eat(f.parenR)
              ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()")
              : this.unexpected(t);
          }
          return this.finishNode(e, "ImportExpression");
        }),
        (G.parseImportMeta = function (e) {
          this.next();
          var t = this.containsEsc;
          return (
            (e.property = this.parseIdent(!0)),
            e.property.name !== "meta" &&
              this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"),
            t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
            this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
            this.finishNode(e, "MetaProperty")
          );
        }),
        (G.parseLiteral = function (e) {
          var t = this.startNode();
          return (
            (t.value = e),
            (t.raw = this.input.slice(this.start, this.end)),
            t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
            this.next(),
            this.finishNode(t, "Literal")
          );
        }),
        (G.parseParenExpression = function () {
          this.expect(f.parenL);
          var e = this.parseExpression();
          return this.expect(f.parenR), e;
        }),
        (G.parseParenAndDistinguishExpression = function (e) {
          var t = this.start,
            n = this.startLoc,
            r,
            i = this.options.ecmaVersion >= 8;
          if (this.options.ecmaVersion >= 6) {
            this.next();
            var o = this.start,
              s = this.startLoc,
              h = [],
              p = !0,
              A = !1,
              D = new vt(),
              y = this.yieldPos,
              C = this.awaitPos,
              g;
            for (this.yieldPos = 0, this.awaitPos = 0; this.type !== f.parenR; )
              if ((p ? (p = !1) : this.expect(f.comma), i && this.afterTrailingComma(f.parenR, !0))) {
                A = !0;
                break;
              } else if (this.type === f.ellipsis) {
                (g = this.start),
                  h.push(this.parseParenItem(this.parseRestBinding())),
                  this.type === f.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                break;
              } else h.push(this.parseMaybeAssign(!1, D, this.parseParenItem));
            var m = this.start,
              E = this.startLoc;
            if ((this.expect(f.parenR), e && !this.canInsertSemicolon() && this.eat(f.arrow)))
              return (
                this.checkPatternErrors(D, !1),
                this.checkYieldAwaitInDefaultParams(),
                (this.yieldPos = y),
                (this.awaitPos = C),
                this.parseParenArrowList(t, n, h)
              );
            (!h.length || A) && this.unexpected(this.lastTokStart),
              g && this.unexpected(g),
              this.checkExpressionErrors(D, !0),
              (this.yieldPos = y || this.yieldPos),
              (this.awaitPos = C || this.awaitPos),
              h.length > 1
                ? ((r = this.startNodeAt(o, s)), (r.expressions = h), this.finishNodeAt(r, "SequenceExpression", m, E))
                : (r = h[0]);
          } else r = this.parseParenExpression();
          if (this.options.preserveParens) {
            var w = this.startNodeAt(t, n);
            return (w.expression = r), this.finishNode(w, "ParenthesizedExpression");
          } else return r;
        }),
        (G.parseParenItem = function (e) {
          return e;
        }),
        (G.parseParenArrowList = function (e, t, n) {
          return this.parseArrowExpression(this.startNodeAt(e, t), n);
        }),
        (nr = []),
        (G.parseNew = function () {
          this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
          var e = this.startNode(),
            t = this.parseIdent(!0);
          if (this.options.ecmaVersion >= 6 && this.eat(f.dot)) {
            e.meta = t;
            var n = this.containsEsc;
            return (
              (e.property = this.parseIdent(!0)),
              e.property.name !== "target" &&
                this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"),
              n && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
              this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"),
              this.finishNode(e, "MetaProperty")
            );
          }
          var r = this.start,
            i = this.startLoc,
            o = this.type === f._import;
          return (
            (e.callee = this.parseSubscripts(this.parseExprAtom(), r, i, !0)),
            o && e.callee.type === "ImportExpression" && this.raise(r, "Cannot use new with import()"),
            this.eat(f.parenL) ? (e.arguments = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1)) : (e.arguments = nr),
            this.finishNode(e, "NewExpression")
          );
        }),
        (G.parseTemplateElement = function (e) {
          var t = e.isTagged,
            n = this.startNode();
          return (
            this.type === f.invalidTemplate
              ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"),
                (n.value = { raw: this.value, cooked: null }))
              : (n.value = {
                  raw: this.input.slice(this.start, this.end).replace(
                    /\r\n?/g,
                    `
`
                  ),
                  cooked: this.value,
                }),
            this.next(),
            (n.tail = this.type === f.backQuote),
            this.finishNode(n, "TemplateElement")
          );
        }),
        (G.parseTemplate = function (e) {
          e === void 0 && (e = {});
          var t = e.isTagged;
          t === void 0 && (t = !1);
          var n = this.startNode();
          this.next(), (n.expressions = []);
          var r = this.parseTemplateElement({ isTagged: t });
          for (n.quasis = [r]; !r.tail; )
            this.type === f.eof && this.raise(this.pos, "Unterminated template literal"),
              this.expect(f.dollarBraceL),
              n.expressions.push(this.parseExpression()),
              this.expect(f.braceR),
              n.quasis.push((r = this.parseTemplateElement({ isTagged: t })));
          return this.next(), this.finishNode(n, "TemplateLiteral");
        }),
        (G.isAsyncProp = function (e) {
          return (
            !e.computed &&
            e.key.type === "Identifier" &&
            e.key.name === "async" &&
            (this.type === f.name ||
              this.type === f.num ||
              this.type === f.string ||
              this.type === f.bracketL ||
              this.type.keyword ||
              (this.options.ecmaVersion >= 9 && this.type === f.star)) &&
            !me.test(this.input.slice(this.lastTokEnd, this.start))
          );
        }),
        (G.parseObj = function (e, t) {
          var n = this.startNode(),
            r = !0,
            i = {};
          for (n.properties = [], this.next(); !this.eat(f.braceR); ) {
            if (r) r = !1;
            else if ((this.expect(f.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(f.braceR))) break;
            var o = this.parseProperty(e, t);
            e || this.checkPropClash(o, i, t), n.properties.push(o);
          }
          return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression");
        }),
        (G.parseProperty = function (e, t) {
          var n = this.startNode(),
            r,
            i,
            o,
            s;
          if (this.options.ecmaVersion >= 9 && this.eat(f.ellipsis))
            return e
              ? ((n.argument = this.parseIdent(!1)),
                this.type === f.comma && this.raise(this.start, "Comma is not permitted after the rest element"),
                this.finishNode(n, "RestElement"))
              : (this.type === f.parenL &&
                  t &&
                  (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
                  t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
                (n.argument = this.parseMaybeAssign(!1, t)),
                this.type === f.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
                this.finishNode(n, "SpreadElement"));
          this.options.ecmaVersion >= 6 &&
            ((n.method = !1), (n.shorthand = !1), (e || t) && ((o = this.start), (s = this.startLoc)), e || (r = this.eat(f.star)));
          var h = this.containsEsc;
          return (
            this.parsePropertyName(n),
            !e && !h && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(n)
              ? ((i = !0), (r = this.options.ecmaVersion >= 9 && this.eat(f.star)), this.parsePropertyName(n, t))
              : (i = !1),
            this.parsePropertyValue(n, e, r, i, o, s, t, h),
            this.finishNode(n, "Property")
          );
        }),
        (G.parsePropertyValue = function (e, t, n, r, i, o, s, h) {
          if (((n || r) && this.type === f.colon && this.unexpected(), this.eat(f.colon)))
            (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, s)), (e.kind = "init");
          else if (this.options.ecmaVersion >= 6 && this.type === f.parenL)
            t && this.unexpected(), (e.kind = "init"), (e.method = !0), (e.value = this.parseMethod(n, r));
          else if (
            !t &&
            !h &&
            this.options.ecmaVersion >= 5 &&
            !e.computed &&
            e.key.type === "Identifier" &&
            (e.key.name === "get" || e.key.name === "set") &&
            this.type !== f.comma &&
            this.type !== f.braceR &&
            this.type !== f.eq
          ) {
            (n || r) && this.unexpected(), (e.kind = e.key.name), this.parsePropertyName(e), (e.value = this.parseMethod(!1));
            var p = e.kind === "get" ? 0 : 1;
            if (e.value.params.length !== p) {
              var A = e.value.start;
              e.kind === "get"
                ? this.raiseRecoverable(A, "getter should have no params")
                : this.raiseRecoverable(A, "setter should have exactly one param");
            } else
              e.kind === "set" &&
                e.value.params[0].type === "RestElement" &&
                this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
          } else
            this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
              ? ((n || r) && this.unexpected(),
                this.checkUnreserved(e.key),
                e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i),
                (e.kind = "init"),
                t
                  ? (e.value = this.parseMaybeDefault(i, o, e.key))
                  : this.type === f.eq && s
                  ? (s.shorthandAssign < 0 && (s.shorthandAssign = this.start), (e.value = this.parseMaybeDefault(i, o, e.key)))
                  : (e.value = e.key),
                (e.shorthand = !0))
              : this.unexpected();
        }),
        (G.parsePropertyName = function (e) {
          if (this.options.ecmaVersion >= 6) {
            if (this.eat(f.bracketL)) return (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(f.bracketR), e.key;
            e.computed = !1;
          }
          return (e.key =
            this.type === f.num || this.type === f.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"));
        }),
        (G.initFunction = function (e) {
          (e.id = null),
            this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
            this.options.ecmaVersion >= 8 && (e.async = !1);
        }),
        (G.parseMethod = function (e, t, n) {
          var r = this.startNode(),
            i = this.yieldPos,
            o = this.awaitPos,
            s = this.awaitIdentPos;
          return (
            this.initFunction(r),
            this.options.ecmaVersion >= 6 && (r.generator = e),
            this.options.ecmaVersion >= 8 && (r.async = !!t),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(Vt(t, r.generator) | Jt | (n ? Xt : 0)),
            this.expect(f.parenL),
            (r.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8)),
            this.checkYieldAwaitInDefaultParams(),
            this.parseFunctionBody(r, !1, !0),
            (this.yieldPos = i),
            (this.awaitPos = o),
            (this.awaitIdentPos = s),
            this.finishNode(r, "FunctionExpression")
          );
        }),
        (G.parseArrowExpression = function (e, t, n) {
          var r = this.yieldPos,
            i = this.awaitPos,
            o = this.awaitIdentPos;
          return (
            this.enterScope(Vt(n, !1) | Gt),
            this.initFunction(e),
            this.options.ecmaVersion >= 8 && (e.async = !!n),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            (e.params = this.toAssignableList(t, !0)),
            this.parseFunctionBody(e, !0, !1),
            (this.yieldPos = r),
            (this.awaitPos = i),
            (this.awaitIdentPos = o),
            this.finishNode(e, "ArrowFunctionExpression")
          );
        }),
        (G.parseFunctionBody = function (e, t, n) {
          var r = t && this.type !== f.braceL,
            i = this.strict,
            o = !1;
          if (r) (e.body = this.parseMaybeAssign()), (e.expression = !0), this.checkParams(e, !1);
          else {
            var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
            (!i || s) &&
              ((o = this.strictDirective(this.end)),
              o && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
            var h = this.labels;
            (this.labels = []),
              o && (this.strict = !0),
              this.checkParams(e, !i && !o && !t && !n && this.isSimpleParamList(e.params)),
              this.strict && e.id && this.checkLVal(e.id, Kt),
              (e.body = this.parseBlock(!1, void 0, o && !i)),
              (e.expression = !1),
              this.adaptDirectivePrologue(e.body.body),
              (this.labels = h);
          }
          this.exitScope();
        }),
        (G.isSimpleParamList = function (e) {
          for (var t = 0, n = e; t < n.length; t += 1) {
            var r = n[t];
            if (r.type !== "Identifier") return !1;
          }
          return !0;
        }),
        (G.checkParams = function (e, t) {
          for (var n = {}, r = 0, i = e.params; r < i.length; r += 1) {
            var o = i[r];
            this.checkLVal(o, It, t ? null : n);
          }
        }),
        (G.parseExprList = function (e, t, n, r) {
          for (var i = [], o = !0; !this.eat(e); ) {
            if (o) o = !1;
            else if ((this.expect(f.comma), t && this.afterTrailingComma(e))) break;
            var s = void 0;
            n && this.type === f.comma
              ? (s = null)
              : this.type === f.ellipsis
              ? ((s = this.parseSpread(r)), r && this.type === f.comma && r.trailingComma < 0 && (r.trailingComma = this.start))
              : (s = this.parseMaybeAssign(!1, r)),
              i.push(s);
          }
          return i;
        }),
        (G.checkUnreserved = function (e) {
          var t = e.start,
            n = e.end,
            r = e.name;
          if (
            (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
            this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
            this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"),
            !(this.options.ecmaVersion < 6 && this.input.slice(t, n).indexOf("\\") !== -1))
          ) {
            var i = this.strict ? this.reservedWordsStrict : this.reservedWords;
            i.test(r) &&
              (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
              this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
          }
        }),
        (G.parseIdent = function (e, t) {
          var n = this.startNode();
          return (
            this.type === f.name
              ? (n.name = this.value)
              : this.type.keyword
              ? ((n.name = this.type.keyword),
                (n.name === "class" || n.name === "function") &&
                  (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) &&
                  this.context.pop())
              : this.unexpected(),
            this.next(!!e),
            this.finishNode(n, "Identifier"),
            e || (this.checkUnreserved(n), n.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n.start)),
            n
          );
        }),
        (G.parseYield = function (e) {
          this.yieldPos || (this.yieldPos = this.start);
          var t = this.startNode();
          return (
            this.next(),
            this.type === f.semi || this.canInsertSemicolon() || (this.type !== f.star && !this.type.startsExpr)
              ? ((t.delegate = !1), (t.argument = null))
              : ((t.delegate = this.eat(f.star)), (t.argument = this.parseMaybeAssign(e))),
            this.finishNode(t, "YieldExpression")
          );
        }),
        (G.parseAwait = function () {
          this.awaitPos || (this.awaitPos = this.start);
          var e = this.startNode();
          return this.next(), (e.argument = this.parseMaybeUnary(null, !1)), this.finishNode(e, "AwaitExpression");
        }),
        (ot = te.prototype),
        (ot.raise = function (e, t) {
          var n = cn(this.input, e);
          t += " (" + n.line + ":" + n.column + ")";
          var r = new SyntaxError(t);
          throw ((r.pos = e), (r.loc = n), (r.raisedAt = this.pos), r);
        }),
        (ot.raiseRecoverable = ot.raise),
        (ot.curPosition = function () {
          if (this.options.locations) return new Ue(this.curLine, this.pos - this.lineStart);
        }),
        (Ie = te.prototype),
        (rr = function (e) {
          (this.flags = e), (this.var = []), (this.lexical = []), (this.functions = []);
        }),
        (Ie.enterScope = function (e) {
          this.scopeStack.push(new rr(e));
        }),
        (Ie.exitScope = function () {
          this.scopeStack.pop();
        }),
        (Ie.treatFunctionsAsVarInScope = function (e) {
          return e.flags & Ze || (!this.inModule && e.flags & Qe);
        }),
        (Ie.declareName = function (e, t, n) {
          var r = !1;
          if (t === ve) {
            var i = this.currentScope();
            (r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1),
              i.lexical.push(e),
              this.inModule && i.flags & Qe && delete this.undefinedExports[e];
          } else if (t === Yt) {
            var o = this.currentScope();
            o.lexical.push(e);
          } else if (t === Qt) {
            var s = this.currentScope();
            this.treatFunctionsAsVar ? (r = s.lexical.indexOf(e) > -1) : (r = s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1),
              s.functions.push(e);
          } else
            for (var h = this.scopeStack.length - 1; h >= 0; --h) {
              var p = this.scopeStack[h];
              if (
                (p.lexical.indexOf(e) > -1 && !(p.flags & $t && p.lexical[0] === e)) ||
                (!this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1)
              ) {
                r = !0;
                break;
              }
              if ((p.var.push(e), this.inModule && p.flags & Qe && delete this.undefinedExports[e], p.flags & kt)) break;
            }
          r && this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared");
        }),
        (Ie.checkLocalExport = function (e) {
          this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
            this.scopeStack[0].var.indexOf(e.name) === -1 &&
            (this.undefinedExports[e.name] = e);
        }),
        (Ie.currentScope = function () {
          return this.scopeStack[this.scopeStack.length - 1];
        }),
        (Ie.currentVarScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (t.flags & kt) return t;
          }
        }),
        (Ie.currentThisScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (t.flags & kt && !(t.flags & Gt)) return t;
          }
        }),
        (ht = function (e, t, n) {
          (this.type = ""),
            (this.start = t),
            (this.end = 0),
            e.options.locations && (this.loc = new et(e, n)),
            e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile),
            e.options.ranges && (this.range = [t, 0]);
        }),
        (lt = te.prototype),
        (lt.startNode = function () {
          return new ht(this, this.start, this.startLoc);
        }),
        (lt.startNodeAt = function (e, t) {
          return new ht(this, e, t);
        }),
        (lt.finishNode = function (e, t) {
          return zn.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
        }),
        (lt.finishNodeAt = function (e, t, n, r) {
          return zn.call(this, e, t, n, r);
        }),
        (Fe = function (e, t, n, r, i) {
          (this.token = e), (this.isExpr = !!t), (this.preserveSpace = !!n), (this.override = r), (this.generator = !!i);
        }),
        (ue = {
          b_stat: new Fe("{", !1),
          b_expr: new Fe("{", !0),
          b_tmpl: new Fe("${", !1),
          p_stat: new Fe("(", !1),
          p_expr: new Fe("(", !0),
          q_tmpl: new Fe("`", !0, !0, function (e) {
            return e.tryReadTemplateToken();
          }),
          f_stat: new Fe("function", !1),
          f_expr: new Fe("function", !0),
          f_expr_gen: new Fe("function", !0, !1, null, !0),
          f_gen: new Fe("function", !1, !1, null, !0),
        }),
        (ct = te.prototype),
        (ct.initialContext = function () {
          return [ue.b_stat];
        }),
        (ct.braceIsBlock = function (e) {
          var t = this.curContext();
          return t === ue.f_expr || t === ue.f_stat
            ? !0
            : e === f.colon && (t === ue.b_stat || t === ue.b_expr)
            ? !t.isExpr
            : e === f._return || (e === f.name && this.exprAllowed)
            ? me.test(this.input.slice(this.lastTokEnd, this.start))
            : e === f._else || e === f.semi || e === f.eof || e === f.parenR || e === f.arrow
            ? !0
            : e === f.braceL
            ? t === ue.b_stat
            : e === f._var || e === f._const || e === f.name
            ? !1
            : !this.exprAllowed;
        }),
        (ct.inGeneratorContext = function () {
          for (var e = this.context.length - 1; e >= 1; e--) {
            var t = this.context[e];
            if (t.token === "function") return t.generator;
          }
          return !1;
        }),
        (ct.updateContext = function (e) {
          var t,
            n = this.type;
          n.keyword && e === f.dot ? (this.exprAllowed = !1) : (t = n.updateContext) ? t.call(this, e) : (this.exprAllowed = n.beforeExpr);
        }),
        (f.parenR.updateContext = f.braceR.updateContext =
          function () {
            if (this.context.length === 1) {
              this.exprAllowed = !0;
              return;
            }
            var e = this.context.pop();
            e === ue.b_stat && this.curContext().token === "function" && (e = this.context.pop()), (this.exprAllowed = !e.isExpr);
          }),
        (f.braceL.updateContext = function (e) {
          this.context.push(this.braceIsBlock(e) ? ue.b_stat : ue.b_expr), (this.exprAllowed = !0);
        }),
        (f.dollarBraceL.updateContext = function () {
          this.context.push(ue.b_tmpl), (this.exprAllowed = !0);
        }),
        (f.parenL.updateContext = function (e) {
          var t = e === f._if || e === f._for || e === f._with || e === f._while;
          this.context.push(t ? ue.p_stat : ue.p_expr), (this.exprAllowed = !0);
        }),
        (f.incDec.updateContext = function () {}),
        (f._function.updateContext = f._class.updateContext =
          function (e) {
            e.beforeExpr &&
            e !== f.semi &&
            e !== f._else &&
            !(e === f._return && me.test(this.input.slice(this.lastTokEnd, this.start))) &&
            !((e === f.colon || e === f.braceL) && this.curContext() === ue.b_stat)
              ? this.context.push(ue.f_expr)
              : this.context.push(ue.f_stat),
              (this.exprAllowed = !1);
          }),
        (f.backQuote.updateContext = function () {
          this.curContext() === ue.q_tmpl ? this.context.pop() : this.context.push(ue.q_tmpl), (this.exprAllowed = !1);
        }),
        (f.star.updateContext = function (e) {
          if (e === f._function) {
            var t = this.context.length - 1;
            this.context[t] === ue.f_expr ? (this.context[t] = ue.f_expr_gen) : (this.context[t] = ue.f_gen);
          }
          this.exprAllowed = !0;
        }),
        (f.name.updateContext = function (e) {
          var t = !1;
          this.options.ecmaVersion >= 6 &&
            e !== f.dot &&
            ((this.value === "of" && !this.exprAllowed) || (this.value === "yield" && this.inGeneratorContext())) &&
            (t = !0),
            (this.exprAllowed = t);
        }),
        (en =
          "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS"),
        (tn = en + " Extended_Pictographic"),
        (ur = tn),
        (Ir = { 9: en, 10: tn, 11: ur }),
        (dn =
          "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu"),
        (nn =
          "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb"),
        (rn = nn + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd"),
        (ir = rn + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"),
        (Tr = { 9: nn, 10: rn, 11: ir }),
        (An = {}),
        qt(9),
        qt(10),
        qt(11),
        (q = te.prototype),
        (Se = function (e) {
          (this.parser = e),
            (this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "")),
            (this.unicodeProperties = An[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion]),
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
        }),
        (Se.prototype.reset = function (e, t, n) {
          var r = n.indexOf("u") !== -1;
          (this.start = e | 0),
            (this.source = t + ""),
            (this.flags = n),
            (this.switchU = r && this.parser.options.ecmaVersion >= 6),
            (this.switchN = r && this.parser.options.ecmaVersion >= 9);
        }),
        (Se.prototype.raise = function (e) {
          this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
        }),
        (Se.prototype.at = function (e, t) {
          t === void 0 && (t = !1);
          var n = this.source,
            r = n.length;
          if (e >= r) return -1;
          var i = n.charCodeAt(e);
          if (!(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r) return i;
          var o = n.charCodeAt(e + 1);
          return o >= 56320 && o <= 57343 ? (i << 10) + o - 56613888 : i;
        }),
        (Se.prototype.nextIndex = function (e, t) {
          t === void 0 && (t = !1);
          var n = this.source,
            r = n.length;
          if (e >= r) return r;
          var i = n.charCodeAt(e),
            o;
          return !(t || this.switchU) || i <= 55295 || i >= 57344 || e + 1 >= r || (o = n.charCodeAt(e + 1)) < 56320 || o > 57343
            ? e + 1
            : e + 2;
        }),
        (Se.prototype.current = function (e) {
          return e === void 0 && (e = !1), this.at(this.pos, e);
        }),
        (Se.prototype.lookahead = function (e) {
          return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
        }),
        (Se.prototype.advance = function (e) {
          e === void 0 && (e = !1), (this.pos = this.nextIndex(this.pos, e));
        }),
        (Se.prototype.eat = function (e, t) {
          return t === void 0 && (t = !1), this.current(t) === e ? (this.advance(t), !0) : !1;
        }),
        (q.validateRegExpFlags = function (e) {
          for (var t = e.validFlags, n = e.flags, r = 0; r < n.length; r++) {
            var i = n.charAt(r);
            t.indexOf(i) === -1 && this.raise(e.start, "Invalid regular expression flag"),
              n.indexOf(i, r + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
          }
        }),
        (q.validateRegExpPattern = function (e) {
          this.regexp_pattern(e),
            !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && ((e.switchN = !0), this.regexp_pattern(e));
        }),
        (q.regexp_pattern = function (e) {
          (e.pos = 0),
            (e.lastIntValue = 0),
            (e.lastStringValue = ""),
            (e.lastAssertionIsQuantifiable = !1),
            (e.numCapturingParens = 0),
            (e.maxBackReference = 0),
            (e.groupNames.length = 0),
            (e.backReferenceNames.length = 0),
            this.regexp_disjunction(e),
            e.pos !== e.source.length &&
              (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
            e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
          for (var t = 0, n = e.backReferenceNames; t < n.length; t += 1) {
            var r = n[t];
            e.groupNames.indexOf(r) === -1 && e.raise("Invalid named capture referenced");
          }
        }),
        (q.regexp_disjunction = function (e) {
          for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
          this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
        }),
        (q.regexp_alternative = function (e) {
          for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
        }),
        (q.regexp_eatTerm = function (e) {
          return this.regexp_eatAssertion(e)
            ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0)
            : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
            ? (this.regexp_eatQuantifier(e), !0)
            : !1;
        }),
        (q.regexp_eatAssertion = function (e) {
          var t = e.pos;
          if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
          if (e.eat(92)) {
            if (e.eat(66) || e.eat(98)) return !0;
            e.pos = t;
          }
          if (e.eat(40) && e.eat(63)) {
            var n = !1;
            if ((this.options.ecmaVersion >= 9 && (n = e.eat(60)), e.eat(61) || e.eat(33)))
              return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), (e.lastAssertionIsQuantifiable = !n), !0;
          }
          return (e.pos = t), !1;
        }),
        (q.regexp_eatQuantifier = function (e, t) {
          return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
        }),
        (q.regexp_eatQuantifierPrefix = function (e, t) {
          return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
        }),
        (q.regexp_eatBracedQuantifier = function (e, t) {
          var n = e.pos;
          if (e.eat(123)) {
            var r = 0,
              i = -1;
            if (
              this.regexp_eatDecimalDigits(e) &&
              ((r = e.lastIntValue), e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))
            )
              return i !== -1 && i < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
            e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = n);
          }
          return !1;
        }),
        (q.regexp_eatAtom = function (e) {
          return (
            this.regexp_eatPatternCharacters(e) ||
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e)
          );
        }),
        (q.regexp_eatReverseSolidusAtomEscape = function (e) {
          var t = e.pos;
          if (e.eat(92)) {
            if (this.regexp_eatAtomEscape(e)) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatUncapturingGroup = function (e) {
          var t = e.pos;
          if (e.eat(40)) {
            if (e.eat(63) && e.eat(58)) {
              if ((this.regexp_disjunction(e), e.eat(41))) return !0;
              e.raise("Unterminated group");
            }
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatCapturingGroup = function (e) {
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
        }),
        (q.regexp_eatExtendedAtom = function (e) {
          return (
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e) ||
            this.regexp_eatInvalidBracedQuantifier(e) ||
            this.regexp_eatExtendedPatternCharacter(e)
          );
        }),
        (q.regexp_eatInvalidBracedQuantifier = function (e) {
          return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
        }),
        (q.regexp_eatSyntaxCharacter = function (e) {
          var t = e.current();
          return Gn(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
        }),
        (q.regexp_eatPatternCharacters = function (e) {
          for (var t = e.pos, n = 0; (n = e.current()) !== -1 && !Gn(n); ) e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatExtendedPatternCharacter = function (e) {
          var t = e.current();
          return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124
            ? (e.advance(), !0)
            : !1;
        }),
        (q.regexp_groupSpecifier = function (e) {
          if (e.eat(63)) {
            if (this.regexp_eatGroupName(e)) {
              e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"),
                e.groupNames.push(e.lastStringValue);
              return;
            }
            e.raise("Invalid group");
          }
        }),
        (q.regexp_eatGroupName = function (e) {
          if (((e.lastStringValue = ""), e.eat(60))) {
            if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
            e.raise("Invalid capture group name");
          }
          return !1;
        }),
        (q.regexp_eatRegExpIdentifierName = function (e) {
          if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
            for (e.lastStringValue += _t(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); ) e.lastStringValue += _t(e.lastIntValue);
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatRegExpIdentifierStart = function (e) {
          var t = e.pos,
            n = this.options.ecmaVersion >= 11,
            r = e.current(n);
          return (
            e.advance(n),
            r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue),
            Ju(r) ? ((e.lastIntValue = r), !0) : ((e.pos = t), !1)
          );
        }),
        (q.regexp_eatRegExpIdentifierPart = function (e) {
          var t = e.pos,
            n = this.options.ecmaVersion >= 11,
            r = e.current(n);
          return (
            e.advance(n),
            r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, n) && (r = e.lastIntValue),
            Xu(r) ? ((e.lastIntValue = r), !0) : ((e.pos = t), !1)
          );
        }),
        (q.regexp_eatAtomEscape = function (e) {
          return this.regexp_eatBackReference(e) ||
            this.regexp_eatCharacterClassEscape(e) ||
            this.regexp_eatCharacterEscape(e) ||
            (e.switchN && this.regexp_eatKGroupName(e))
            ? !0
            : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
        }),
        (q.regexp_eatBackReference = function (e) {
          var t = e.pos;
          if (this.regexp_eatDecimalEscape(e)) {
            var n = e.lastIntValue;
            if (e.switchU) return n > e.maxBackReference && (e.maxBackReference = n), !0;
            if (n <= e.numCapturingParens) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatKGroupName = function (e) {
          if (e.eat(107)) {
            if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
            e.raise("Invalid named reference");
          }
          return !1;
        }),
        (q.regexp_eatCharacterEscape = function (e) {
          return (
            this.regexp_eatControlEscape(e) ||
            this.regexp_eatCControlLetter(e) ||
            this.regexp_eatZero(e) ||
            this.regexp_eatHexEscapeSequence(e) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
            (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
            this.regexp_eatIdentityEscape(e)
          );
        }),
        (q.regexp_eatCControlLetter = function (e) {
          var t = e.pos;
          if (e.eat(99)) {
            if (this.regexp_eatControlLetter(e)) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatZero = function (e) {
          return e.current() === 48 && !Lt(e.lookahead()) ? ((e.lastIntValue = 0), e.advance(), !0) : !1;
        }),
        (q.regexp_eatControlEscape = function (e) {
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
        }),
        (q.regexp_eatControlLetter = function (e) {
          var t = e.current();
          return vr(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
        }),
        (q.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
          t === void 0 && (t = !1);
          var n = e.pos,
            r = t || e.switchU;
          if (e.eat(117)) {
            if (this.regexp_eatFixedHexDigits(e, 4)) {
              var i = e.lastIntValue;
              if (r && i >= 55296 && i <= 56319) {
                var o = e.pos;
                if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                  var s = e.lastIntValue;
                  if (s >= 56320 && s <= 57343) return (e.lastIntValue = (i - 55296) * 1024 + (s - 56320) + 65536), !0;
                }
                (e.pos = o), (e.lastIntValue = i);
              }
              return !0;
            }
            if (r && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Hu(e.lastIntValue)) return !0;
            r && e.raise("Invalid unicode escape"), (e.pos = n);
          }
          return !1;
        }),
        (q.regexp_eatIdentityEscape = function (e) {
          if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? ((e.lastIntValue = 47), !0) : !1;
          var t = e.current();
          return t !== 99 && (!e.switchN || t !== 107) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
        }),
        (q.regexp_eatDecimalEscape = function (e) {
          e.lastIntValue = 0;
          var t = e.current();
          if (t >= 49 && t <= 57) {
            do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
            while ((t = e.current()) >= 48 && t <= 57);
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatCharacterClassEscape = function (e) {
          var t = e.current();
          if (Qu(t)) return (e.lastIntValue = -1), e.advance(), !0;
          if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
            if (((e.lastIntValue = -1), e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)))
              return !0;
            e.raise("Invalid property name");
          }
          return !1;
        }),
        (q.regexp_eatUnicodePropertyValueExpression = function (e) {
          var t = e.pos;
          if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
            var n = e.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(e)) {
              var r = e.lastStringValue;
              return this.regexp_validateUnicodePropertyNameAndValue(e, n, r), !0;
            }
          }
          if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
            var i = e.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0;
          }
          return !1;
        }),
        (q.regexp_validateUnicodePropertyNameAndValue = function (e, t, n) {
          Nt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"),
            e.unicodeProperties.nonBinary[t].test(n) || e.raise("Invalid property value");
        }),
        (q.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
          e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
        }),
        (q.regexp_eatUnicodePropertyName = function (e) {
          var t = 0;
          for (e.lastStringValue = ""; _r((t = e.current())); ) (e.lastStringValue += _t(t)), e.advance();
          return e.lastStringValue !== "";
        }),
        (q.regexp_eatUnicodePropertyValue = function (e) {
          var t = 0;
          for (e.lastStringValue = ""; Yu((t = e.current())); ) (e.lastStringValue += _t(t)), e.advance();
          return e.lastStringValue !== "";
        }),
        (q.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
          return this.regexp_eatUnicodePropertyValue(e);
        }),
        (q.regexp_eatCharacterClass = function (e) {
          if (e.eat(91)) {
            if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
            e.raise("Unterminated character class");
          }
          return !1;
        }),
        (q.regexp_classRanges = function (e) {
          for (; this.regexp_eatClassAtom(e); ) {
            var t = e.lastIntValue;
            if (e.eat(45) && this.regexp_eatClassAtom(e)) {
              var n = e.lastIntValue;
              e.switchU && (t === -1 || n === -1) && e.raise("Invalid character class"),
                t !== -1 && n !== -1 && t > n && e.raise("Range out of order in character class");
            }
          }
        }),
        (q.regexp_eatClassAtom = function (e) {
          var t = e.pos;
          if (e.eat(92)) {
            if (this.regexp_eatClassEscape(e)) return !0;
            if (e.switchU) {
              var n = e.current();
              (n === 99 || Xn(n)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
            }
            e.pos = t;
          }
          var r = e.current();
          return r !== 93 ? ((e.lastIntValue = r), e.advance(), !0) : !1;
        }),
        (q.regexp_eatClassEscape = function (e) {
          var t = e.pos;
          if (e.eat(98)) return (e.lastIntValue = 8), !0;
          if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
          if (!e.switchU && e.eat(99)) {
            if (this.regexp_eatClassControlLetter(e)) return !0;
            e.pos = t;
          }
          return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
        }),
        (q.regexp_eatClassControlLetter = function (e) {
          var t = e.current();
          return Lt(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
        }),
        (q.regexp_eatHexEscapeSequence = function (e) {
          var t = e.pos;
          if (e.eat(120)) {
            if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
            e.switchU && e.raise("Invalid escape"), (e.pos = t);
          }
          return !1;
        }),
        (q.regexp_eatDecimalDigits = function (e) {
          var t = e.pos,
            n = 0;
          for (e.lastIntValue = 0; Lt((n = e.current())); ) (e.lastIntValue = 10 * e.lastIntValue + (n - 48)), e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatHexDigits = function (e) {
          var t = e.pos,
            n = 0;
          for (e.lastIntValue = 0; $n((n = e.current())); ) (e.lastIntValue = 16 * e.lastIntValue + Jn(n)), e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatLegacyOctalEscapeSequence = function (e) {
          if (this.regexp_eatOctalDigit(e)) {
            var t = e.lastIntValue;
            if (this.regexp_eatOctalDigit(e)) {
              var n = e.lastIntValue;
              t <= 3 && this.regexp_eatOctalDigit(e) ? (e.lastIntValue = t * 64 + n * 8 + e.lastIntValue) : (e.lastIntValue = t * 8 + n);
            } else e.lastIntValue = t;
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatOctalDigit = function (e) {
          var t = e.current();
          return Xn(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1);
        }),
        (q.regexp_eatFixedHexDigits = function (e, t) {
          var n = e.pos;
          e.lastIntValue = 0;
          for (var r = 0; r < t; ++r) {
            var i = e.current();
            if (!$n(i)) return (e.pos = n), !1;
            (e.lastIntValue = 16 * e.lastIntValue + Jn(i)), e.advance();
          }
          return !0;
        }),
        (pt = function (e) {
          (this.type = e.type),
            (this.value = e.value),
            (this.start = e.start),
            (this.end = e.end),
            e.options.locations && (this.loc = new et(e, e.startLoc, e.endLoc)),
            e.options.ranges && (this.range = [e.start, e.end]);
        }),
        ($ = te.prototype),
        ($.next = function (e) {
          !e &&
            this.type.keyword &&
            this.containsEsc &&
            this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword),
            this.options.onToken && this.options.onToken(new pt(this)),
            (this.lastTokEnd = this.end),
            (this.lastTokStart = this.start),
            (this.lastTokEndLoc = this.endLoc),
            (this.lastTokStartLoc = this.startLoc),
            this.nextToken();
        }),
        ($.getToken = function () {
          return this.next(), new pt(this);
        }),
        typeof Symbol < "u" &&
          ($[Symbol.iterator] = function () {
            var e = this;
            return {
              next: function () {
                var t = e.getToken();
                return { done: t.type === f.eof, value: t };
              },
            };
          }),
        ($.curContext = function () {
          return this.context[this.context.length - 1];
        }),
        ($.nextToken = function () {
          var e = this.curContext();
          if (
            ((!e || !e.preserveSpace) && this.skipSpace(),
            (this.start = this.pos),
            this.options.locations && (this.startLoc = this.curPosition()),
            this.pos >= this.input.length)
          )
            return this.finishToken(f.eof);
          if (e.override) return e.override(this);
          this.readToken(this.fullCharCodeAtPos());
        }),
        ($.readToken = function (e) {
          return Te(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
        }),
        ($.fullCharCodeAtPos = function () {
          var e = this.input.charCodeAt(this.pos);
          if (e <= 55295 || e >= 57344) return e;
          var t = this.input.charCodeAt(this.pos + 1);
          return (e << 10) + t - 56613888;
        }),
        ($.skipBlockComment = function () {
          var e = this.options.onComment && this.curPosition(),
            t = this.pos,
            n = this.input.indexOf("*/", (this.pos += 2));
          if ((n === -1 && this.raise(this.pos - 2, "Unterminated comment"), (this.pos = n + 2), this.options.locations)) {
            ze.lastIndex = t;
            for (var r; (r = ze.exec(this.input)) && r.index < this.pos; ) ++this.curLine, (this.lineStart = r.index + r[0].length);
          }
          this.options.onComment && this.options.onComment(!0, this.input.slice(t + 2, n), t, this.pos, e, this.curPosition());
        }),
        ($.skipLineComment = function (e) {
          for (
            var t = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt((this.pos += e));
            this.pos < this.input.length && !Ke(r);

          )
            r = this.input.charCodeAt(++this.pos);
          this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, n, this.curPosition());
        }),
        ($.skipSpace = function () {
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
                if ((e > 8 && e < 14) || (e >= 5760 && Ot.test(String.fromCharCode(e)))) ++this.pos;
                else break e;
            }
          }
        }),
        ($.finishToken = function (e, t) {
          (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
          var n = this.type;
          (this.type = e), (this.value = t), this.updateContext(n);
        }),
        ($.readToken_dot = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          if (e >= 48 && e <= 57) return this.readNumber(!0);
          var t = this.input.charCodeAt(this.pos + 2);
          return this.options.ecmaVersion >= 6 && e === 46 && t === 46
            ? ((this.pos += 3), this.finishToken(f.ellipsis))
            : (++this.pos, this.finishToken(f.dot));
        }),
        ($.readToken_slash = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(f.assign, 2) : this.finishOp(f.slash, 1);
        }),
        ($.readToken_mult_modulo_exp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1),
            n = 1,
            r = e === 42 ? f.star : f.modulo;
          return (
            this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++n, (r = f.starstar), (t = this.input.charCodeAt(this.pos + 2))),
            t === 61 ? this.finishOp(f.assign, n + 1) : this.finishOp(r, n)
          );
        }),
        ($.readToken_pipe_amp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          if (t === e) {
            if (this.options.ecmaVersion >= 12) {
              var n = this.input.charCodeAt(this.pos + 2);
              if (n === 61) return this.finishOp(f.assign, 3);
            }
            return this.finishOp(e === 124 ? f.logicalOR : f.logicalAND, 2);
          }
          return t === 61 ? this.finishOp(f.assign, 2) : this.finishOp(e === 124 ? f.bitwiseOR : f.bitwiseAND, 1);
        }),
        ($.readToken_caret = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          return e === 61 ? this.finishOp(f.assign, 2) : this.finishOp(f.bitwiseXOR, 1);
        }),
        ($.readToken_plus_min = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          return t === e
            ? t === 45 &&
              !this.inModule &&
              this.input.charCodeAt(this.pos + 2) === 62 &&
              (this.lastTokEnd === 0 || me.test(this.input.slice(this.lastTokEnd, this.pos)))
              ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
              : this.finishOp(f.incDec, 2)
            : t === 61
            ? this.finishOp(f.assign, 2)
            : this.finishOp(f.plusMin, 1);
        }),
        ($.readToken_lt_gt = function (e) {
          var t = this.input.charCodeAt(this.pos + 1),
            n = 1;
          return t === e
            ? ((n = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
              this.input.charCodeAt(this.pos + n) === 61 ? this.finishOp(f.assign, n + 1) : this.finishOp(f.bitShift, n))
            : t === 33 &&
              e === 60 &&
              !this.inModule &&
              this.input.charCodeAt(this.pos + 2) === 45 &&
              this.input.charCodeAt(this.pos + 3) === 45
            ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
            : (t === 61 && (n = 2), this.finishOp(f.relational, n));
        }),
        ($.readToken_eq_excl = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          return t === 61
            ? this.finishOp(f.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
            : e === 61 && t === 62 && this.options.ecmaVersion >= 6
            ? ((this.pos += 2), this.finishToken(f.arrow))
            : this.finishOp(e === 61 ? f.eq : f.prefix, 1);
        }),
        ($.readToken_question = function () {
          var e = this.options.ecmaVersion;
          if (e >= 11) {
            var t = this.input.charCodeAt(this.pos + 1);
            if (t === 46) {
              var n = this.input.charCodeAt(this.pos + 2);
              if (n < 48 || n > 57) return this.finishOp(f.questionDot, 2);
            }
            if (t === 63) {
              if (e >= 12) {
                var r = this.input.charCodeAt(this.pos + 2);
                if (r === 61) return this.finishOp(f.assign, 3);
              }
              return this.finishOp(f.coalesce, 2);
            }
          }
          return this.finishOp(f.question, 1);
        }),
        ($.getTokenFromCode = function (e) {
          switch (e) {
            case 46:
              return this.readToken_dot();
            case 40:
              return ++this.pos, this.finishToken(f.parenL);
            case 41:
              return ++this.pos, this.finishToken(f.parenR);
            case 59:
              return ++this.pos, this.finishToken(f.semi);
            case 44:
              return ++this.pos, this.finishToken(f.comma);
            case 91:
              return ++this.pos, this.finishToken(f.bracketL);
            case 93:
              return ++this.pos, this.finishToken(f.bracketR);
            case 123:
              return ++this.pos, this.finishToken(f.braceL);
            case 125:
              return ++this.pos, this.finishToken(f.braceR);
            case 58:
              return ++this.pos, this.finishToken(f.colon);
            case 96:
              if (this.options.ecmaVersion < 6) break;
              return ++this.pos, this.finishToken(f.backQuote);
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
              return this.finishOp(f.prefix, 1);
          }
          this.raise(this.pos, "Unexpected character '" + Ut(e) + "'");
        }),
        ($.finishOp = function (e, t) {
          var n = this.input.slice(this.pos, this.pos + t);
          return (this.pos += t), this.finishToken(e, n);
        }),
        ($.readRegexp = function () {
          for (var e, t, n = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(n, "Unterminated regular expression");
            var r = this.input.charAt(this.pos);
            if ((me.test(r) && this.raise(n, "Unterminated regular expression"), e)) e = !1;
            else {
              if (r === "[") t = !0;
              else if (r === "]" && t) t = !1;
              else if (r === "/" && !t) break;
              e = r === "\\";
            }
            ++this.pos;
          }
          var i = this.input.slice(n, this.pos);
          ++this.pos;
          var o = this.pos,
            s = this.readWord1();
          this.containsEsc && this.unexpected(o);
          var h = this.regexpState || (this.regexpState = new Se(this));
          h.reset(n, i, s), this.validateRegExpFlags(h), this.validateRegExpPattern(h);
          var p = null;
          try {
            p = new RegExp(i, s);
          } catch {}
          return this.finishToken(f.regexp, { pattern: i, flags: s, value: p });
        }),
        ($.readInt = function (e, t, n) {
          for (
            var r = this.options.ecmaVersion >= 12 && t === void 0,
              i = n && this.input.charCodeAt(this.pos) === 48,
              o = this.pos,
              s = 0,
              h = 0,
              p = 0,
              A = t ?? 1 / 0;
            p < A;
            ++p, ++this.pos
          ) {
            var D = this.input.charCodeAt(this.pos),
              y = void 0;
            if (r && D === 95) {
              i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"),
                h === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"),
                p === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"),
                (h = D);
              continue;
            }
            if ((D >= 97 ? (y = D - 97 + 10) : D >= 65 ? (y = D - 65 + 10) : D >= 48 && D <= 57 ? (y = D - 48) : (y = 1 / 0), y >= e))
              break;
            (h = D), (s = s * e + y);
          }
          return (
            r && h === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"),
            this.pos === o || (t != null && this.pos - o !== t) ? null : s
          );
        }),
        ($.readRadixNumber = function (e) {
          var t = this.pos;
          this.pos += 2;
          var n = this.readInt(e);
          return (
            n == null && this.raise(this.start + 2, "Expected number in radix " + e),
            this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
              ? ((n = Hn(this.input.slice(t, this.pos))), ++this.pos)
              : Te(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
            this.finishToken(f.num, n)
          );
        }),
        ($.readNumber = function (e) {
          var t = this.pos;
          !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
          var n = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
          n && this.strict && this.raise(t, "Invalid number");
          var r = this.input.charCodeAt(this.pos);
          if (!n && !e && this.options.ecmaVersion >= 11 && r === 110) {
            var i = Hn(this.input.slice(t, this.pos));
            return (
              ++this.pos,
              Te(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
              this.finishToken(f.num, i)
            );
          }
          n && /[89]/.test(this.input.slice(t, this.pos)) && (n = !1),
            r === 46 && !n && (++this.pos, this.readInt(10), (r = this.input.charCodeAt(this.pos))),
            (r === 69 || r === 101) &&
              !n &&
              ((r = this.input.charCodeAt(++this.pos)),
              (r === 43 || r === 45) && ++this.pos,
              this.readInt(10) === null && this.raise(t, "Invalid number")),
            Te(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
          var o = Ku(this.input.slice(t, this.pos), n);
          return this.finishToken(f.num, o);
        }),
        ($.readCodePoint = function () {
          var e = this.input.charCodeAt(this.pos),
            t;
          if (e === 123) {
            this.options.ecmaVersion < 6 && this.unexpected();
            var n = ++this.pos;
            (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
              ++this.pos,
              t > 1114111 && this.invalidStringToken(n, "Code point out of bounds");
          } else t = this.readHexChar(4);
          return t;
        }),
        ($.readString = function (e) {
          for (var t = "", n = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var r = this.input.charCodeAt(this.pos);
            if (r === e) break;
            r === 92
              ? ((t += this.input.slice(n, this.pos)), (t += this.readEscapedChar(!1)), (n = this.pos))
              : (Ke(r, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
          }
          return (t += this.input.slice(n, this.pos++)), this.finishToken(f.string, t);
        }),
        (un = {}),
        ($.tryReadTemplateToken = function () {
          this.inTemplateElement = !0;
          try {
            this.readTmplToken();
          } catch (e) {
            if (e === un) this.readInvalidTemplateToken();
            else throw e;
          }
          this.inTemplateElement = !1;
        }),
        ($.invalidStringToken = function (e, t) {
          if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw un;
          this.raise(e, t);
        }),
        ($.readTmplToken = function () {
          for (var e = "", t = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
            var n = this.input.charCodeAt(this.pos);
            if (n === 96 || (n === 36 && this.input.charCodeAt(this.pos + 1) === 123))
              return this.pos === this.start && (this.type === f.template || this.type === f.invalidTemplate)
                ? n === 36
                  ? ((this.pos += 2), this.finishToken(f.dollarBraceL))
                  : (++this.pos, this.finishToken(f.backQuote))
                : ((e += this.input.slice(t, this.pos)), this.finishToken(f.template, e));
            if (n === 92) (e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos);
            else if (Ke(n)) {
              switch (((e += this.input.slice(t, this.pos)), ++this.pos, n)) {
                case 13:
                  this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                case 10:
                  e += `
`;
                  break;
                default:
                  e += String.fromCharCode(n);
                  break;
              }
              this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (t = this.pos);
            } else ++this.pos;
          }
        }),
        ($.readInvalidTemplateToken = function () {
          for (; this.pos < this.input.length; this.pos++)
            switch (this.input[this.pos]) {
              case "\\":
                ++this.pos;
                break;
              case "$":
                if (this.input[this.pos + 1] !== "{") break;
              case "`":
                return this.finishToken(f.invalidTemplate, this.input.slice(this.start, this.pos));
            }
          this.raise(this.start, "Unterminated template");
        }),
        ($.readEscapedChar = function (e) {
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
              return Ut(this.readCodePoint());
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
                var n = this.pos - 1;
                return this.invalidStringToken(n, "Invalid escape sequence in template string"), null;
              }
            default:
              if (t >= 48 && t <= 55) {
                var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                  i = parseInt(r, 8);
                return (
                  i > 255 && ((r = r.slice(0, -1)), (i = parseInt(r, 8))),
                  (this.pos += r.length - 1),
                  (t = this.input.charCodeAt(this.pos)),
                  (r !== "0" || t === 56 || t === 57) &&
                    (this.strict || e) &&
                    this.invalidStringToken(
                      this.pos - 1 - r.length,
                      e ? "Octal literal in template string" : "Octal literal in strict mode"
                    ),
                  String.fromCharCode(i)
                );
              }
              return Ke(t) ? "" : String.fromCharCode(t);
          }
        }),
        ($.readHexChar = function (e) {
          var t = this.pos,
            n = this.readInt(16, e);
          return n === null && this.invalidStringToken(t, "Bad character escape sequence"), n;
        }),
        ($.readWord1 = function () {
          this.containsEsc = !1;
          for (var e = "", t = !0, n = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
            var i = this.fullCharCodeAtPos();
            if (qe(i, r)) this.pos += i <= 65535 ? 1 : 2;
            else if (i === 92) {
              (this.containsEsc = !0), (e += this.input.slice(n, this.pos));
              var o = this.pos;
              this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
                ++this.pos;
              var s = this.readCodePoint();
              (t ? Te : qe)(s, r) || this.invalidStringToken(o, "Invalid Unicode escape"), (e += Ut(s)), (n = this.pos);
            } else break;
            t = !1;
          }
          return e + this.input.slice(n, this.pos);
        }),
        ($.readWord = function () {
          var e = this.readWord1(),
            t = f.name;
          return this.keywords.test(e) && (t = dt[e]), this.finishToken(t, e);
        }),
        (Dn = "7.4.1"),
        (te.acorn = {
          Parser: te,
          version: Dn,
          defaultOptions: At,
          Position: Ue,
          SourceLocation: et,
          getLineInfo: cn,
          Node: ht,
          TokenType: Q,
          tokTypes: f,
          keywordTypes: dt,
          TokContext: Fe,
          tokContexts: ue,
          isIdentifierChar: qe,
          isIdentifierStart: Te,
          Token: pt,
          isNewLine: Ke,
          lineBreak: me,
          lineBreakG: ze,
          nonASCIIwhitespace: Ot,
        });
    },
  }),
  ni = K({
    "../../node_modules/acorn-jsx/xhtml.js"(e, t) {
      t.exports = {
        quot: '"',
        amp: "&",
        apos: "'",
        lt: "<",
        gt: ">",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        times: "×",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        divide: "÷",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        frasl: "⁄",
        euro: "€",
        image: "ℑ",
        weierp: "℘",
        real: "ℜ",
        trade: "™",
        alefsym: "ℵ",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lArr: "⇐",
        uArr: "⇑",
        rArr: "⇒",
        dArr: "⇓",
        hArr: "⇔",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        lang: "〈",
        rang: "〉",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦",
      };
    },
  }),
  ri = K({
    "../../node_modules/acorn-jsx/index.js"(e, t) {
      var n = ni(),
        r = /^[\da-fA-F]+$/,
        i = /^\d+$/,
        o = new WeakMap();
      function s(A) {
        A = A.Parser.acorn || A;
        let D = o.get(A);
        if (!D) {
          let y = A.tokTypes,
            C = A.TokContext,
            g = A.TokenType,
            m = new C("<tag", !1),
            E = new C("</tag", !1),
            w = new C("<tag>...</tag>", !0, !0),
            S = { tc_oTag: m, tc_cTag: E, tc_expr: w },
            _ = {
              jsxName: new g("jsxName"),
              jsxText: new g("jsxText", { beforeExpr: !0 }),
              jsxTagStart: new g("jsxTagStart", { startsExpr: !0 }),
              jsxTagEnd: new g("jsxTagEnd"),
            };
          (_.jsxTagStart.updateContext = function () {
            this.context.push(w), this.context.push(m), (this.exprAllowed = !1);
          }),
            (_.jsxTagEnd.updateContext = function (L) {
              let v = this.context.pop();
              (v === m && L === y.slash) || v === E
                ? (this.context.pop(), (this.exprAllowed = this.curContext() === w))
                : (this.exprAllowed = !0);
            }),
            (D = { tokContexts: S, tokTypes: _ }),
            o.set(A, D);
        }
        return D;
      }
      function h(A) {
        if (!A) return A;
        if (A.type === "JSXIdentifier") return A.name;
        if (A.type === "JSXNamespacedName") return A.namespace.name + ":" + A.name.name;
        if (A.type === "JSXMemberExpression") return h(A.object) + "." + h(A.property);
      }
      (t.exports = function (A) {
        return (
          (A = A || {}),
          function (D) {
            return p({ allowNamespaces: A.allowNamespaces !== !1, allowNamespacedObjects: !!A.allowNamespacedObjects }, D);
          }
        );
      }),
        Object.defineProperty(t.exports, "tokTypes", {
          get: function () {
            return s((mn(), Vn(on))).tokTypes;
          },
          configurable: !0,
          enumerable: !0,
        });
      function p(A, D) {
        let y = D.acorn || (mn(), Vn(on)),
          C = s(y),
          g = y.tokTypes,
          m = C.tokTypes,
          E = y.tokContexts,
          w = C.tokContexts.tc_oTag,
          S = C.tokContexts.tc_cTag,
          _ = C.tokContexts.tc_expr,
          L = y.isNewLine,
          v = y.isIdentifierStart,
          B = y.isIdentifierChar;
        return class extends D {
          static get acornJsx() {
            return C;
          }
          jsx_readToken() {
            let F = "",
              x = this.pos;
            for (;;) {
              this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
              let b = this.input.charCodeAt(this.pos);
              switch (b) {
                case 60:
                case 123:
                  return this.pos === this.start
                    ? b === 60 && this.exprAllowed
                      ? (++this.pos, this.finishToken(m.jsxTagStart))
                      : this.getTokenFromCode(b)
                    : ((F += this.input.slice(x, this.pos)), this.finishToken(m.jsxText, F));
                case 38:
                  (F += this.input.slice(x, this.pos)), (F += this.jsx_readEntity()), (x = this.pos);
                  break;
                case 62:
                case 125:
                  this.raise(
                    this.pos,
                    "Unexpected token `" +
                      this.input[this.pos] +
                      "`. Did you mean `" +
                      (b === 62 ? "&gt;" : "&rbrace;") +
                      '` or `{"' +
                      this.input[this.pos] +
                      '"}`?'
                  );
                default:
                  L(b) ? ((F += this.input.slice(x, this.pos)), (F += this.jsx_readNewLine(!0)), (x = this.pos)) : ++this.pos;
              }
            }
          }
          jsx_readNewLine(F) {
            let x = this.input.charCodeAt(this.pos),
              b;
            return (
              ++this.pos,
              x === 13 && this.input.charCodeAt(this.pos) === 10
                ? (++this.pos,
                  (b = F
                    ? `
`
                    : `\r
`))
                : (b = String.fromCharCode(x)),
              this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
              b
            );
          }
          jsx_readString(F) {
            let x = "",
              b = ++this.pos;
            for (;;) {
              this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
              let P = this.input.charCodeAt(this.pos);
              if (P === F) break;
              P === 38
                ? ((x += this.input.slice(b, this.pos)), (x += this.jsx_readEntity()), (b = this.pos))
                : L(P)
                ? ((x += this.input.slice(b, this.pos)), (x += this.jsx_readNewLine(!1)), (b = this.pos))
                : ++this.pos;
            }
            return (x += this.input.slice(b, this.pos++)), this.finishToken(g.string, x);
          }
          jsx_readEntity() {
            let F = "",
              x = 0,
              b,
              P = this.input[this.pos];
            P !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
            let j = ++this.pos;
            for (; this.pos < this.input.length && x++ < 10; ) {
              if (((P = this.input[this.pos++]), P === ";")) {
                F[0] === "#"
                  ? F[1] === "x"
                    ? ((F = F.substr(2)), r.test(F) && (b = String.fromCharCode(parseInt(F, 16))))
                    : ((F = F.substr(1)), i.test(F) && (b = String.fromCharCode(parseInt(F, 10))))
                  : (b = n[F]);
                break;
              }
              F += P;
            }
            return b || ((this.pos = j), "&");
          }
          jsx_readWord() {
            let F,
              x = this.pos;
            do F = this.input.charCodeAt(++this.pos);
            while (B(F) || F === 45);
            return this.finishToken(m.jsxName, this.input.slice(x, this.pos));
          }
          jsx_parseIdentifier() {
            let F = this.startNode();
            return (
              this.type === m.jsxName ? (F.name = this.value) : this.type.keyword ? (F.name = this.type.keyword) : this.unexpected(),
              this.next(),
              this.finishNode(F, "JSXIdentifier")
            );
          }
          jsx_parseNamespacedName() {
            let F = this.start,
              x = this.startLoc,
              b = this.jsx_parseIdentifier();
            if (!A.allowNamespaces || !this.eat(g.colon)) return b;
            var P = this.startNodeAt(F, x);
            return (P.namespace = b), (P.name = this.jsx_parseIdentifier()), this.finishNode(P, "JSXNamespacedName");
          }
          jsx_parseElementName() {
            if (this.type === m.jsxTagEnd) return "";
            let F = this.start,
              x = this.startLoc,
              b = this.jsx_parseNamespacedName();
            for (
              this.type === g.dot && b.type === "JSXNamespacedName" && !A.allowNamespacedObjects && this.unexpected();
              this.eat(g.dot);

            ) {
              let P = this.startNodeAt(F, x);
              (P.object = b), (P.property = this.jsx_parseIdentifier()), (b = this.finishNode(P, "JSXMemberExpression"));
            }
            return b;
          }
          jsx_parseAttributeValue() {
            switch (this.type) {
              case g.braceL:
                let F = this.jsx_parseExpressionContainer();
                return (
                  F.expression.type === "JSXEmptyExpression" &&
                    this.raise(F.start, "JSX attributes must only be assigned a non-empty expression"),
                  F
                );
              case m.jsxTagStart:
              case g.string:
                return this.parseExprAtom();
              default:
                this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
            }
          }
          jsx_parseEmptyExpression() {
            let F = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
            return this.finishNodeAt(F, "JSXEmptyExpression", this.start, this.startLoc);
          }
          jsx_parseExpressionContainer() {
            let F = this.startNode();
            return (
              this.next(),
              (F.expression = this.type === g.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()),
              this.expect(g.braceR),
              this.finishNode(F, "JSXExpressionContainer")
            );
          }
          jsx_parseAttribute() {
            let F = this.startNode();
            return this.eat(g.braceL)
              ? (this.expect(g.ellipsis),
                (F.argument = this.parseMaybeAssign()),
                this.expect(g.braceR),
                this.finishNode(F, "JSXSpreadAttribute"))
              : ((F.name = this.jsx_parseNamespacedName()),
                (F.value = this.eat(g.eq) ? this.jsx_parseAttributeValue() : null),
                this.finishNode(F, "JSXAttribute"));
          }
          jsx_parseOpeningElementAt(F, x) {
            let b = this.startNodeAt(F, x);
            b.attributes = [];
            let P = this.jsx_parseElementName();
            for (P && (b.name = P); this.type !== g.slash && this.type !== m.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
            return (
              (b.selfClosing = this.eat(g.slash)),
              this.expect(m.jsxTagEnd),
              this.finishNode(b, P ? "JSXOpeningElement" : "JSXOpeningFragment")
            );
          }
          jsx_parseClosingElementAt(F, x) {
            let b = this.startNodeAt(F, x),
              P = this.jsx_parseElementName();
            return P && (b.name = P), this.expect(m.jsxTagEnd), this.finishNode(b, P ? "JSXClosingElement" : "JSXClosingFragment");
          }
          jsx_parseElementAt(F, x) {
            let b = this.startNodeAt(F, x),
              P = [],
              j = this.jsx_parseOpeningElementAt(F, x),
              M = null;
            if (!j.selfClosing) {
              e: for (;;)
                switch (this.type) {
                  case m.jsxTagStart:
                    if (((F = this.start), (x = this.startLoc), this.next(), this.eat(g.slash))) {
                      M = this.jsx_parseClosingElementAt(F, x);
                      break e;
                    }
                    P.push(this.jsx_parseElementAt(F, x));
                    break;
                  case m.jsxText:
                    P.push(this.parseExprAtom());
                    break;
                  case g.braceL:
                    P.push(this.jsx_parseExpressionContainer());
                    break;
                  default:
                    this.unexpected();
                }
              h(M.name) !== h(j.name) && this.raise(M.start, "Expected corresponding JSX closing tag for <" + h(j.name) + ">");
            }
            let V = j.name ? "Element" : "Fragment";
            return (
              (b["opening" + V] = j),
              (b["closing" + V] = M),
              (b.children = P),
              this.type === g.relational &&
                this.value === "<" &&
                this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"),
              this.finishNode(b, "JSX" + V)
            );
          }
          jsx_parseText() {
            let F = this.parseLiteral(this.value);
            return (F.type = "JSXText"), F;
          }
          jsx_parseElement() {
            let F = this.start,
              x = this.startLoc;
            return this.next(), this.jsx_parseElementAt(F, x);
          }
          parseExprAtom(F) {
            return this.type === m.jsxText
              ? this.jsx_parseText()
              : this.type === m.jsxTagStart
              ? this.jsx_parseElement()
              : super.parseExprAtom(F);
          }
          readToken(F) {
            let x = this.curContext();
            if (x === _) return this.jsx_readToken();
            if (x === w || x === S) {
              if (v(F)) return this.jsx_readWord();
              if (F == 62) return ++this.pos, this.finishToken(m.jsxTagEnd);
              if ((F === 34 || F === 39) && x == w) return this.jsx_readString(F);
            }
            return F === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33
              ? (++this.pos, this.finishToken(m.jsxTagStart))
              : super.readToken(F);
          }
          updateContext(F) {
            if (this.type == g.braceL) {
              var x = this.curContext();
              x == w ? this.context.push(E.b_expr) : x == _ ? this.context.push(E.b_tmpl) : super.updateContext(F), (this.exprAllowed = !0);
            } else if (this.type === g.slash && F === m.jsxTagStart)
              (this.context.length -= 2), this.context.push(S), (this.exprAllowed = !1);
            else return super.updateContext(F);
          }
        };
      }
    },
  }),
  ui = K({
    "../../node_modules/@base2/pretty-print-object/dist/index.js"(e) {
      var t =
          (e && e.__assign) ||
          function () {
            return (
              (t =
                Object.assign ||
                function (p) {
                  for (var A, D = 1, y = arguments.length; D < y; D++) {
                    A = arguments[D];
                    for (var C in A) Object.prototype.hasOwnProperty.call(A, C) && (p[C] = A[C]);
                  }
                  return p;
                }),
              t.apply(this, arguments)
            );
          },
        n =
          (e && e.__spreadArrays) ||
          function () {
            for (var p = 0, A = 0, D = arguments.length; A < D; A++) p += arguments[A].length;
            for (var y = Array(p), C = 0, A = 0; A < D; A++) for (var g = arguments[A], m = 0, E = g.length; m < E; m++, C++) y[C] = g[m];
            return y;
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = [];
      function i(p) {
        var A = typeof p;
        return p !== null && (A === "object" || A === "function");
      }
      function o(p) {
        return Object.prototype.toString.call(p) === "[object RegExp]";
      }
      function s(p) {
        return Object.getOwnPropertySymbols(p).filter(function (A) {
          return Object.prototype.propertyIsEnumerable.call(p, A);
        });
      }
      function h(p, A, D) {
        D === void 0 && (D = "");
        var y = { indent: "	", singleQuotes: !0 },
          C = t(t({}, y), A),
          g;
        C.inlineCharacterLimit === void 0
          ? (g = {
              newLine: `
`,
              newLineOrSpace: `
`,
              pad: D,
              indent: D + C.indent,
            })
          : (g = {
              newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
              newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
              pad: "@@__PRETTY_PRINT_PAD__@@",
              indent: "@@__PRETTY_PRINT_INDENT__@@",
            });
        var m = function (S) {
          if (C.inlineCharacterLimit === void 0) return S;
          var _ = S.replace(new RegExp(g.newLine, "g"), "")
            .replace(new RegExp(g.newLineOrSpace, "g"), " ")
            .replace(new RegExp(g.pad + "|" + g.indent, "g"), "");
          return _.length <= C.inlineCharacterLimit
            ? _
            : S.replace(
                new RegExp(g.newLine + "|" + g.newLineOrSpace, "g"),
                `
`
              )
                .replace(new RegExp(g.pad, "g"), D)
                .replace(new RegExp(g.indent, "g"), D + C.indent);
        };
        if (r.indexOf(p) !== -1) return '"[Circular]"';
        if (p == null || typeof p == "number" || typeof p == "boolean" || typeof p == "function" || typeof p == "symbol" || o(p))
          return String(p);
        if (p instanceof Date) return "new Date('" + p.toISOString() + "')";
        if (Array.isArray(p)) {
          if (p.length === 0) return "[]";
          r.push(p);
          var E =
            "[" +
            g.newLine +
            p
              .map(function (S, _) {
                var L = p.length - 1 === _ ? g.newLine : "," + g.newLineOrSpace,
                  v = h(S, C, D + C.indent);
                return C.transform && (v = C.transform(p, _, v)), g.indent + v + L;
              })
              .join("") +
            g.pad +
            "]";
          return r.pop(), m(E);
        }
        if (i(p)) {
          var w = n(Object.keys(p), s(p));
          if (
            (C.filter &&
              (w = w.filter(function (_) {
                return C.filter && C.filter(p, _);
              })),
            w.length === 0)
          )
            return "{}";
          r.push(p);
          var E =
            "{" +
            g.newLine +
            w
              .map(function (_, L) {
                var v = w.length - 1 === L ? g.newLine : "," + g.newLineOrSpace,
                  B = typeof _ == "symbol",
                  F = !B && /^[a-z$_][a-z$_0-9]*$/i.test(_.toString()),
                  x = B || F ? _ : h(_, C),
                  b = h(p[_], C, D + C.indent);
                return C.transform && (b = C.transform(p, _, b)), g.indent + String(x) + ": " + b + v;
              })
              .join("") +
            g.pad +
            "}";
          return r.pop(), m(E);
        }
        return (
          (p = String(p).replace(/[\r\n]/g, function (S) {
            return S ===
              `
`
              ? "\\n"
              : "\\r";
          })),
          C.singleQuotes ? ((p = p.replace(/\\?'/g, "\\'")), "'" + p + "'") : ((p = p.replace(/"/g, '\\"')), '"' + p + '"')
        );
      }
      e.prettyPrint = h;
    },
  }),
  ii = K({
    "../../node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.production.min.js"(e) {
      var t = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        h = Symbol.for("react.context"),
        p = Symbol.for("react.server_context"),
        A = Symbol.for("react.forward_ref"),
        D = Symbol.for("react.suspense"),
        y = Symbol.for("react.suspense_list"),
        C = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        m = Symbol.for("react.offscreen"),
        E;
      E = Symbol.for("react.module.reference");
      function w(S) {
        if (typeof S == "object" && S !== null) {
          var _ = S.$$typeof;
          switch (_) {
            case t:
              switch (((S = S.type), S)) {
                case r:
                case o:
                case i:
                case D:
                case y:
                  return S;
                default:
                  switch (((S = S && S.$$typeof), S)) {
                    case p:
                    case h:
                    case A:
                    case g:
                    case C:
                    case s:
                      return S;
                    default:
                      return _;
                  }
              }
            case n:
              return _;
          }
        }
      }
      (e.ContextConsumer = h),
        (e.ContextProvider = s),
        (e.Element = t),
        (e.ForwardRef = A),
        (e.Fragment = r),
        (e.Lazy = g),
        (e.Memo = C),
        (e.Portal = n),
        (e.Profiler = o),
        (e.StrictMode = i),
        (e.Suspense = D),
        (e.SuspenseList = y),
        (e.isAsyncMode = function () {
          return !1;
        }),
        (e.isConcurrentMode = function () {
          return !1;
        }),
        (e.isContextConsumer = function (S) {
          return w(S) === h;
        }),
        (e.isContextProvider = function (S) {
          return w(S) === s;
        }),
        (e.isElement = function (S) {
          return typeof S == "object" && S !== null && S.$$typeof === t;
        }),
        (e.isForwardRef = function (S) {
          return w(S) === A;
        }),
        (e.isFragment = function (S) {
          return w(S) === r;
        }),
        (e.isLazy = function (S) {
          return w(S) === g;
        }),
        (e.isMemo = function (S) {
          return w(S) === C;
        }),
        (e.isPortal = function (S) {
          return w(S) === n;
        }),
        (e.isProfiler = function (S) {
          return w(S) === o;
        }),
        (e.isStrictMode = function (S) {
          return w(S) === i;
        }),
        (e.isSuspense = function (S) {
          return w(S) === D;
        }),
        (e.isSuspenseList = function (S) {
          return w(S) === y;
        }),
        (e.isValidElementType = function (S) {
          return (
            typeof S == "string" ||
            typeof S == "function" ||
            S === r ||
            S === o ||
            S === i ||
            S === D ||
            S === y ||
            S === m ||
            (typeof S == "object" &&
              S !== null &&
              (S.$$typeof === g ||
                S.$$typeof === C ||
                S.$$typeof === s ||
                S.$$typeof === h ||
                S.$$typeof === A ||
                S.$$typeof === E ||
                S.getModuleId !== void 0))
          );
        }),
        (e.typeOf = w);
    },
  }),
  si = K({
    "../../node_modules/react-element-to-jsx-string/node_modules/react-is/index.js"(e, t) {
      t.exports = ii();
    },
  }),
  sr = rt(wu()),
  Cn = "custom",
  gt = "object",
  vn = "array",
  ai = "class",
  tt = "func",
  ut = "element",
  oi = rt(Iu());
function _n(e) {
  return oi.default.includes(e.toLowerCase());
}
var li = rt(zu());
function ci(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Array.from(typeof e == "string" ? [e] : e);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var i = r.reduce(function (h, p) {
    var A = p.match(/\n([\t ]+|(?!\s).)/g);
    return A
      ? h.concat(
          A.map(function (D) {
            var y, C;
            return (C = (y = D.match(/[\t ]/g)) === null || y === void 0 ? void 0 : y.length) !== null && C !== void 0 ? C : 0;
          })
        )
      : h;
  }, []);
  if (i.length) {
    var o = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, i) +
        "}",
      "g"
    );
    r = r.map(function (h) {
      return h.replace(
        o,
        `
`
      );
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return (
    t.forEach(function (h, p) {
      var A = s.match(/(?:^|\n)( *)$/),
        D = A ? A[1] : "",
        y = h;
      typeof h == "string" &&
        h.includes(`
`) &&
        (y = String(h)
          .split(
            `
`
          )
          .map(function (C, g) {
            return g === 0 ? C : "" + D + C;
          }).join(`
`)),
        (s += y + r[p + 1]);
    }),
    s
  );
}
var Pr = { format: { indent: { style: "  " }, semicolons: !1 } },
  hi = { ...Pr, format: { newline: "" } },
  pi = { ...Pr };
function Le(e, t = !1) {
  return (0, li.generate)(e, t ? hi : pi);
}
function gn(e, t = !1) {
  return t ? fi(e) : Le(e);
}
function fi(e) {
  let t = Le(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function ar(e, t = !1) {
  return t ? Ai(e) : di(e);
}
function di(e) {
  let t = Le(e);
  return t.endsWith("  }]") && (t = ci(t)), t;
}
function Ai(e) {
  let t = Le(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var Nr = (e) => e.$$typeof === Symbol.for("react.memo"),
  Di = (e) => e.$$typeof === Symbol.for("react.forward_ref");
mn();
var mi = rt(ri());
function Lr(e, t, n, r, i) {
  n || (n = N),
    (function o(s, h, p) {
      var A = p || s.type,
        D = t[A];
      n[A](s, h, o), D && D(s, h);
    })(e, r, i);
}
function Ci(e, t, n, r, i) {
  var o = [];
  n || (n = N),
    (function s(h, p, A) {
      var D = A || h.type,
        y = t[D],
        C = h !== o[o.length - 1];
      C && o.push(h), n[D](h, p, s), y && y(h, p || o, o), C && o.pop();
    })(e, r, i);
}
function Sn(e, t, n) {
  n(e, t);
}
function $e(e, t, n) {}
var N = {};
N.Program = N.BlockStatement = function (e, t, n) {
  for (var r = 0, i = e.body; r < i.length; r += 1) {
    var o = i[r];
    n(o, t, "Statement");
  }
};
N.Statement = Sn;
N.EmptyStatement = $e;
N.ExpressionStatement =
  N.ParenthesizedExpression =
  N.ChainExpression =
    function (e, t, n) {
      return n(e.expression, t, "Expression");
    };
N.IfStatement = function (e, t, n) {
  n(e.test, t, "Expression"), n(e.consequent, t, "Statement"), e.alternate && n(e.alternate, t, "Statement");
};
N.LabeledStatement = function (e, t, n) {
  return n(e.body, t, "Statement");
};
N.BreakStatement = N.ContinueStatement = $e;
N.WithStatement = function (e, t, n) {
  n(e.object, t, "Expression"), n(e.body, t, "Statement");
};
N.SwitchStatement = function (e, t, n) {
  n(e.discriminant, t, "Expression");
  for (var r = 0, i = e.cases; r < i.length; r += 1) {
    var o = i[r];
    o.test && n(o.test, t, "Expression");
    for (var s = 0, h = o.consequent; s < h.length; s += 1) {
      var p = h[s];
      n(p, t, "Statement");
    }
  }
};
N.SwitchCase = function (e, t, n) {
  e.test && n(e.test, t, "Expression");
  for (var r = 0, i = e.consequent; r < i.length; r += 1) {
    var o = i[r];
    n(o, t, "Statement");
  }
};
N.ReturnStatement =
  N.YieldExpression =
  N.AwaitExpression =
    function (e, t, n) {
      e.argument && n(e.argument, t, "Expression");
    };
N.ThrowStatement = N.SpreadElement = function (e, t, n) {
  return n(e.argument, t, "Expression");
};
N.TryStatement = function (e, t, n) {
  n(e.block, t, "Statement"), e.handler && n(e.handler, t), e.finalizer && n(e.finalizer, t, "Statement");
};
N.CatchClause = function (e, t, n) {
  e.param && n(e.param, t, "Pattern"), n(e.body, t, "Statement");
};
N.WhileStatement = N.DoWhileStatement = function (e, t, n) {
  n(e.test, t, "Expression"), n(e.body, t, "Statement");
};
N.ForStatement = function (e, t, n) {
  e.init && n(e.init, t, "ForInit"),
    e.test && n(e.test, t, "Expression"),
    e.update && n(e.update, t, "Expression"),
    n(e.body, t, "Statement");
};
N.ForInStatement = N.ForOfStatement = function (e, t, n) {
  n(e.left, t, "ForInit"), n(e.right, t, "Expression"), n(e.body, t, "Statement");
};
N.ForInit = function (e, t, n) {
  e.type === "VariableDeclaration" ? n(e, t) : n(e, t, "Expression");
};
N.DebuggerStatement = $e;
N.FunctionDeclaration = function (e, t, n) {
  return n(e, t, "Function");
};
N.VariableDeclaration = function (e, t, n) {
  for (var r = 0, i = e.declarations; r < i.length; r += 1) {
    var o = i[r];
    n(o, t);
  }
};
N.VariableDeclarator = function (e, t, n) {
  n(e.id, t, "Pattern"), e.init && n(e.init, t, "Expression");
};
N.Function = function (e, t, n) {
  e.id && n(e.id, t, "Pattern");
  for (var r = 0, i = e.params; r < i.length; r += 1) {
    var o = i[r];
    n(o, t, "Pattern");
  }
  n(e.body, t, e.expression ? "Expression" : "Statement");
};
N.Pattern = function (e, t, n) {
  e.type === "Identifier" ? n(e, t, "VariablePattern") : e.type === "MemberExpression" ? n(e, t, "MemberPattern") : n(e, t);
};
N.VariablePattern = $e;
N.MemberPattern = Sn;
N.RestElement = function (e, t, n) {
  return n(e.argument, t, "Pattern");
};
N.ArrayPattern = function (e, t, n) {
  for (var r = 0, i = e.elements; r < i.length; r += 1) {
    var o = i[r];
    o && n(o, t, "Pattern");
  }
};
N.ObjectPattern = function (e, t, n) {
  for (var r = 0, i = e.properties; r < i.length; r += 1) {
    var o = i[r];
    o.type === "Property"
      ? (o.computed && n(o.key, t, "Expression"), n(o.value, t, "Pattern"))
      : o.type === "RestElement" && n(o.argument, t, "Pattern");
  }
};
N.Expression = Sn;
N.ThisExpression = N.Super = N.MetaProperty = $e;
N.ArrayExpression = function (e, t, n) {
  for (var r = 0, i = e.elements; r < i.length; r += 1) {
    var o = i[r];
    o && n(o, t, "Expression");
  }
};
N.ObjectExpression = function (e, t, n) {
  for (var r = 0, i = e.properties; r < i.length; r += 1) {
    var o = i[r];
    n(o, t);
  }
};
N.FunctionExpression = N.ArrowFunctionExpression = N.FunctionDeclaration;
N.SequenceExpression = function (e, t, n) {
  for (var r = 0, i = e.expressions; r < i.length; r += 1) {
    var o = i[r];
    n(o, t, "Expression");
  }
};
N.TemplateLiteral = function (e, t, n) {
  for (var r = 0, i = e.quasis; r < i.length; r += 1) {
    var o = i[r];
    n(o, t);
  }
  for (var s = 0, h = e.expressions; s < h.length; s += 1) {
    var p = h[s];
    n(p, t, "Expression");
  }
};
N.TemplateElement = $e;
N.UnaryExpression = N.UpdateExpression = function (e, t, n) {
  n(e.argument, t, "Expression");
};
N.BinaryExpression = N.LogicalExpression = function (e, t, n) {
  n(e.left, t, "Expression"), n(e.right, t, "Expression");
};
N.AssignmentExpression = N.AssignmentPattern = function (e, t, n) {
  n(e.left, t, "Pattern"), n(e.right, t, "Expression");
};
N.ConditionalExpression = function (e, t, n) {
  n(e.test, t, "Expression"), n(e.consequent, t, "Expression"), n(e.alternate, t, "Expression");
};
N.NewExpression = N.CallExpression = function (e, t, n) {
  if ((n(e.callee, t, "Expression"), e.arguments))
    for (var r = 0, i = e.arguments; r < i.length; r += 1) {
      var o = i[r];
      n(o, t, "Expression");
    }
};
N.MemberExpression = function (e, t, n) {
  n(e.object, t, "Expression"), e.computed && n(e.property, t, "Expression");
};
N.ExportNamedDeclaration = N.ExportDefaultDeclaration = function (e, t, n) {
  e.declaration && n(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"),
    e.source && n(e.source, t, "Expression");
};
N.ExportAllDeclaration = function (e, t, n) {
  e.exported && n(e.exported, t), n(e.source, t, "Expression");
};
N.ImportDeclaration = function (e, t, n) {
  for (var r = 0, i = e.specifiers; r < i.length; r += 1) {
    var o = i[r];
    n(o, t);
  }
  n(e.source, t, "Expression");
};
N.ImportExpression = function (e, t, n) {
  n(e.source, t, "Expression");
};
N.ImportSpecifier = N.ImportDefaultSpecifier = N.ImportNamespaceSpecifier = N.Identifier = N.Literal = $e;
N.TaggedTemplateExpression = function (e, t, n) {
  n(e.tag, t, "Expression"), n(e.quasi, t, "Expression");
};
N.ClassDeclaration = N.ClassExpression = function (e, t, n) {
  return n(e, t, "Class");
};
N.Class = function (e, t, n) {
  e.id && n(e.id, t, "Pattern"), e.superClass && n(e.superClass, t, "Expression"), n(e.body, t);
};
N.ClassBody = function (e, t, n) {
  for (var r = 0, i = e.body; r < i.length; r += 1) {
    var o = i[r];
    n(o, t);
  }
};
N.MethodDefinition = N.Property = function (e, t, n) {
  e.computed && n(e.key, t, "Expression"), n(e.value, t, "Expression");
};
var bn = { ...N, JSXElement: () => {} },
  gi = te.extend((0, mi.default)());
function Et(e) {
  return e != null ? e.name : null;
}
function or(e) {
  return e.filter((t) => t.type === "ObjectExpression" || t.type === "ArrayExpression");
}
function Or(e) {
  let t = [];
  return (
    Ci(
      e,
      {
        ObjectExpression(n, r) {
          t.push(or(r).length);
        },
        ArrayExpression(n, r) {
          t.push(or(r).length);
        },
      },
      bn
    ),
    Math.max(...t)
  );
}
function Ei(e) {
  return { inferredType: { type: "Identifier", identifier: Et(e) }, ast: e };
}
function Fi(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function yi(e) {
  let t;
  Lr(
    e.body,
    {
      JSXElement(i) {
        t = i;
      },
    },
    bn
  );
  let n = { type: t != null ? "Element" : "Function", params: e.params, hasParams: e.params.length !== 0 },
    r = Et(e.id);
  return r != null && (n.identifier = r), { inferredType: n, ast: e };
}
function Bi(e) {
  let t;
  return (
    Lr(
      e.body,
      {
        JSXElement(n) {
          t = n;
        },
      },
      bn
    ),
    { inferredType: { type: t != null ? "Element" : "Class", identifier: Et(e.id) }, ast: e }
  );
}
function xi(e) {
  let t = { type: "Element" },
    n = Et(e.openingElement.name);
  return n != null && (t.identifier = n), { inferredType: t, ast: e };
}
function vi(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return Et(t) === "shape" ? Rr(e.arguments[0]) : null;
}
function Rr(e) {
  return { inferredType: { type: "Object", depth: Or(e) }, ast: e };
}
function _i(e) {
  return { inferredType: { type: "Array", depth: Or(e) }, ast: e };
}
function Si(e) {
  switch (e.type) {
    case "Identifier":
      return Ei(e);
    case "Literal":
      return Fi(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return yi(e);
    case "ClassExpression":
      return Bi(e);
    case "JSXElement":
      return xi(e);
    case "CallExpression":
      return vi(e);
    case "ObjectExpression":
      return Rr(e);
    case "ArrayExpression":
      return _i(e);
    default:
      return null;
  }
}
function bi(e) {
  let t = gi.parse(`(${e})`, { ecmaVersion: 2020 }),
    n = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let r = t.body[0];
    switch (r.type) {
      case "ExpressionStatement": {
        let i = Si(r.expression);
        i != null && (n = i);
        break;
      }
    }
  }
  return n;
}
function Oe(e) {
  try {
    return { ...bi(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
function jr({ inferredType: e, ast: t }) {
  let { depth: n } = e;
  if (n <= 2) {
    let r = ar(t, !0);
    if (!mt(r)) return ee(r);
  }
  return ee(vn, ar(t));
}
function Mr({ inferredType: e, ast: t }) {
  let { depth: n } = e;
  if (n === 1) {
    let r = gn(t, !0);
    if (!mt(r)) return ee(r);
  }
  return ee(gt, gn(t));
}
function wn(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function jt(e) {
  return `<${e} />`;
}
function Vr(e) {
  let { type: t, identifier: n } = e;
  switch (t) {
    case "Function":
      return wn(n, e.hasParams);
    case "Element":
      return jt(n);
    default:
      return n;
  }
}
function wi({ inferredType: e, ast: t }) {
  let { identifier: n } = e;
  if (n != null) return ee(Vr(e), Le(t));
  let r = Le(t, !0);
  return mt(r) ? ee(tt, Le(t)) : ee(r);
}
function ki(e, t) {
  let { inferredType: n } = t,
    { identifier: r } = n;
  if (r != null && !_n(r)) {
    let i = Vr(n);
    return ee(i, e);
  }
  return mt(e) ? ee(ut, e) : ee(e);
}
function qr(e) {
  try {
    let t = Oe(e);
    switch (t.inferredType.type) {
      case "Object":
        return Mr(t);
      case "Function":
        return wi(t);
      case "Element":
        return ki(e, t);
      case "Array":
        return jr(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function lr(e) {
  return typeof e == "function";
}
function Ii(e) {
  return typeof e == "string" || e instanceof String;
}
function Ti(e) {
  var n;
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    let r = e[Symbol.toStringTag];
    return r == null || !((n = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) != null && n.writable)
      ? !1
      : e.toString() === `[object ${r}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function cr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Pi(e) {
  var t, n;
  return cr(e) === !1
    ? !1
    : ((t = e.constructor), t === void 0 ? !0 : ((n = t.prototype), !(cr(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
var Ni = rt(ui()),
  be = rt(si()),
  Pe = function (e, t) {
    return e === 0 ? "" : new Array(e * t).fill(" ").join("");
  };
function Dt(e) {
  "@babel/helpers - typeof";
  return (
    (Dt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    Dt(e)
  );
}
function Li(e) {
  return Oi(e) || Ri(e) || ji(e) || Mi();
}
function Oi(e) {
  if (Array.isArray(e)) return En(e);
}
function Ri(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function ji(e, t) {
  if (e) {
    if (typeof e == "string") return En(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")) return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return En(e, t);
  }
}
function En(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fn(e, t) {
  return e === null || Dt(e) !== "object" || e instanceof Date || e instanceof RegExp || Ge.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (n) {
            return Fn(n, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (n, r) {
              return r === "_owner" || (r === "current" || t.has(e[r]) ? (n[r] = "[Circular]") : (n[r] = Fn(e[r], t))), n;
            }, {}));
}
function Vi(e) {
  return Fn(e, new WeakSet());
}
var Ur = function (e) {
    return { type: "string", value: e };
  },
  qi = function (e) {
    return { type: "number", value: e };
  },
  Ui = function (e, t, n, r) {
    return { type: "ReactElement", displayName: e, props: t, defaultProps: n, childrens: r };
  },
  Wi = function (e, t) {
    return { type: "ReactFragment", key: e, childrens: t };
  },
  zi = !!Ge.Fragment,
  Wr = function (e) {
    return !e.name || e.name === "_default" ? "No Display Name" : e.name;
  },
  Gi = function e(t) {
    switch (!0) {
      case !!t.displayName:
        return t.displayName;
      case t.$$typeof === be.Memo:
        return e(t.type);
      case t.$$typeof === be.ForwardRef:
        return e(t.render);
      default:
        return Wr(t);
    }
  },
  $i = function (e) {
    switch (!0) {
      case typeof e.type == "string":
        return e.type;
      case typeof e.type == "function":
        return e.type.displayName ? e.type.displayName : Wr(e.type);
      case (0, be.isForwardRef)(e):
      case (0, be.isMemo)(e):
        return Gi(e.type);
      case (0, be.isContextConsumer)(e):
        return "".concat(e.type._context.displayName || "Context", ".Consumer");
      case (0, be.isContextProvider)(e):
        return "".concat(e.type._context.displayName || "Context", ".Provider");
      case (0, be.isLazy)(e):
        return "Lazy";
      case (0, be.isProfiler)(e):
        return "Profiler";
      case (0, be.isStrictMode)(e):
        return "StrictMode";
      case (0, be.isSuspense)(e):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  hr = function (e, t) {
    return t !== "children";
  },
  Ji = function (e) {
    return e !== !0 && e !== !1 && e !== null && e !== "";
  },
  pr = function (e, t) {
    var n = {};
    return (
      Object.keys(e)
        .filter(function (r) {
          return t(e[r], r);
        })
        .forEach(function (r) {
          return (n[r] = e[r]);
        }),
      n
    );
  },
  kn = function e(t, n) {
    var r = n.displayName,
      i = r === void 0 ? $i : r;
    if (typeof t == "string") return Ur(t);
    if (typeof t == "number") return qi(t);
    if (!ft.isValidElement(t)) throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(Dt(t), "`"));
    var o = i(t),
      s = pr(t.props, hr);
    t.ref !== null && (s.ref = t.ref);
    var h = t.key;
    typeof h == "string" && h.search(/^\./) && (s.key = h);
    var p = pr(t.type.defaultProps || {}, hr),
      A = ft.Children.toArray(t.props.children)
        .filter(Ji)
        .map(function (D) {
          return e(D, n);
        });
    return zi && t.type === Ge.Fragment ? Wi(h, A) : Ui(o, s, p, A);
  };
function Xi() {}
var Hi = function (e) {
    return e
      .toString()
      .split(
        `
`
      )
      .map(function (t) {
        return t.trim();
      })
      .join("");
  },
  fr = Hi,
  zr = function (e, t) {
    var n = t.functionValue,
      r = n === void 0 ? fr : n,
      i = t.showFunctions;
    return r(!i && r === fr ? Xi : e);
  },
  Qi = function (e, t, n, r) {
    var i = Vi(e),
      o = (0, Ni.prettyPrint)(i, {
        transform: function (s, h, p) {
          var A = s[h];
          return A && Ge.isValidElement(A) ? Mt(kn(A, r), !0, n, r) : typeof A == "function" ? zr(A, r) : p;
        },
      });
    return t
      ? o.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]")
      : o.replace(/\t/g, Pe(1, r.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(Pe(n + 1, r.tabStop), "$1")
        );
  },
  Yi = function (e) {
    return e.replace(/"/g, "&quot;");
  },
  Ki = function (e, t, n, r) {
    if (typeof e == "number") return "{".concat(String(e), "}");
    if (typeof e == "string") return '"'.concat(Yi(e), '"');
    if (Dt(e) === "symbol") {
      var i = e
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return i ? "{Symbol('".concat(i, "')}") : "{Symbol()}";
    }
    return typeof e == "function"
      ? "{".concat(zr(e, r), "}")
      : Ge.isValidElement(e)
      ? "{".concat(Mt(kn(e, r), !0, n, r), "}")
      : e instanceof Date
      ? isNaN(e.valueOf())
        ? "{new Date(NaN)}"
        : '{new Date("'.concat(e.toISOString(), '")}')
      : Pi(e) || Array.isArray(e)
      ? "{".concat(Qi(e, t, n, r), "}")
      : "{".concat(String(e), "}");
  },
  Zi = function (e, t, n, r, i, o, s, h) {
    if (!t && !r) throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
    var p = t ? n : i,
      A = h.useBooleanShorthandSyntax,
      D = h.tabStop,
      y = Ki(p, o, s, h),
      C = " ",
      g = `
`.concat(Pe(s + 1, D)),
      m = y.includes(`
`);
    return (
      A && y === "{false}" && !r
        ? ((C = ""), (g = ""))
        : A && y === "{true}"
        ? ((C += "".concat(e)), (g += "".concat(e)))
        : ((C += "".concat(e, "=").concat(y)), (g += "".concat(e, "=").concat(y))),
      { attributeFormattedInline: C, attributeFormattedMultiline: g, isMultilineAttribute: m }
    );
  },
  es = function (e, t) {
    var n = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      r = e[e.length - 1];
    return (
      r && (t.type === "string" || t.type === "number") && (r.type === "string" || r.type === "number")
        ? n.push(Ur(String(r.value) + String(t.value)))
        : (r && n.push(r), n.push(t)),
      n
    );
  },
  ts = function (e) {
    return ["key", "ref"].includes(e);
  },
  ns = function (e) {
    return function (t) {
      var n = t.includes("key"),
        r = t.includes("ref"),
        i = t.filter(function (s) {
          return !ts(s);
        }),
        o = Li(e ? i.sort() : i);
      return r && o.unshift("ref"), n && o.unshift("key"), o;
    };
  };
function rs(e, t) {
  return Array.isArray(t)
    ? function (n) {
        return t.indexOf(n) === -1;
      }
    : function (n) {
        return t(e[n], n);
      };
}
var us = function (e, t, n, r, i) {
    var o = i.tabStop;
    return e.type === "string"
      ? t
          .split(
            `
`
          )
          .map(function (s, h) {
            return h === 0 ? s : "".concat(Pe(r, o)).concat(s);
          }).join(`
`)
      : t;
  },
  is = function (e, t, n) {
    return function (r) {
      return us(r, Mt(r, e, t, n), e, t, n);
    };
  },
  ss = function (e, t) {
    return function (n) {
      var r = Object.keys(e).includes(n);
      return !r || (r && e[n] !== t[n]);
    };
  },
  Gr = function (e, t, n, r, i) {
    return i ? Pe(n, r).length + t.length > i : e.length > 1;
  },
  as = function (e, t, n, r, i, o, s) {
    return (Gr(e, t, i, o, s) || n) && !r;
  },
  $r = function (e, t, n, r) {
    var i = e.type,
      o = e.displayName,
      s = o === void 0 ? "" : o,
      h = e.childrens,
      p = e.props,
      A = p === void 0 ? {} : p,
      D = e.defaultProps,
      y = D === void 0 ? {} : D;
    if (i !== "ReactElement")
      throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(i));
    var C = r.filterProps,
      g = r.maxInlineAttributesLineLength,
      m = r.showDefaultProps,
      E = r.sortProps,
      w = r.tabStop,
      S = "<".concat(s),
      _ = S,
      L = S,
      v = !1,
      B = [],
      F = rs(A, C);
    Object.keys(A)
      .filter(F)
      .filter(ss(y, A))
      .forEach(function (P) {
        return B.push(P);
      }),
      Object.keys(y)
        .filter(F)
        .filter(function () {
          return m;
        })
        .filter(function (P) {
          return !B.includes(P);
        })
        .forEach(function (P) {
          return B.push(P);
        });
    var x = ns(E)(B);
    if (
      (x.forEach(function (P) {
        var j = Zi(P, Object.keys(A).includes(P), A[P], Object.keys(y).includes(P), y[P], t, n, r),
          M = j.attributeFormattedInline,
          V = j.attributeFormattedMultiline,
          U = j.isMultilineAttribute;
        U && (v = !0), (_ += M), (L += V);
      }),
      (L += `
`.concat(Pe(n, w))),
      as(x, _, v, t, n, w, g) ? (S = L) : (S = _),
      h && h.length > 0)
    ) {
      var b = n + 1;
      (S += ">"),
        t ||
          ((S += `
`),
          (S += Pe(b, w))),
        (S += h
          .reduce(es, [])
          .map(is(t, b, r))
          .join(
            t
              ? ""
              : `
`.concat(Pe(b, w))
          )),
        t ||
          ((S += `
`),
          (S += Pe(b - 1, w))),
        (S += "</".concat(s, ">"));
    } else Gr(x, _, n, w, g) || (S += " "), (S += "/>");
    return S;
  },
  os = "",
  dr = "React.Fragment",
  ls = function (e, t, n) {
    var r = {};
    return t && (r = { key: t }), { type: "ReactElement", displayName: e, props: r, defaultProps: {}, childrens: n };
  },
  cs = function (e) {
    var t = e.key;
    return !!t;
  },
  hs = function (e) {
    var t = e.childrens;
    return t.length === 0;
  },
  ps = function (e, t, n, r) {
    var i = e.type,
      o = e.key,
      s = e.childrens;
    if (i !== "ReactFragment")
      throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(i));
    var h = r.useFragmentShortSyntax,
      p;
    return h ? (hs(e) || cs(e) ? (p = dr) : (p = os)) : (p = dr), $r(ls(p, o, s), t, n, r);
  },
  fs = ["<", ">", "{", "}"],
  ds = function (e) {
    return fs.some(function (t) {
      return e.includes(t);
    });
  },
  As = function (e) {
    return ds(e) ? "{`".concat(e, "`}") : e;
  },
  Ds = function (e) {
    var t = e;
    return (
      t.endsWith(" ") && (t = t.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), t.startsWith(" ") && (t = t.replace(/^(\s+)(.*)$/, "{'$1'}$2")), t
    );
  },
  Mt = function (e, t, n, r) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string") return e.value ? "".concat(Ds(As(String(e.value)))) : "";
    if (e.type === "ReactElement") return $r(e, t, n, r);
    if (e.type === "ReactFragment") return ps(e, t, n, r);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  ms = function (e, t) {
    return Mt(e, !1, 0, t);
  },
  Jr = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.filterProps,
      r = n === void 0 ? [] : n,
      i = t.showDefaultProps,
      o = i === void 0 ? !0 : i,
      s = t.showFunctions,
      h = s === void 0 ? !1 : s,
      p = t.functionValue,
      A = t.tabStop,
      D = A === void 0 ? 2 : A,
      y = t.useBooleanShorthandSyntax,
      C = y === void 0 ? !0 : y,
      g = t.useFragmentShortSyntax,
      m = g === void 0 ? !0 : g,
      E = t.sortProps,
      w = E === void 0 ? !0 : E,
      S = t.maxInlineAttributesLineLength,
      _ = t.displayName;
    if (!e) throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var L = {
      filterProps: r,
      showDefaultProps: o,
      showFunctions: h,
      functionValue: p,
      tabStop: D,
      useBooleanShorthandSyntax: C,
      useFragmentShortSyntax: m,
      sortProps: w,
      maxInlineAttributesLineLength: S,
      displayName: _,
    };
    return ms(kn(e, L), L);
  },
  Ar = Jr;
function Xr(e) {
  return e.$$typeof != null;
}
function Hr(e, t) {
  let { name: n } = e;
  return n !== "" && n !== "anonymous" && n !== t ? n : null;
}
var Cs = (e) => ee(JSON.stringify(e));
function gs(e) {
  let { type: t } = e,
    { displayName: n } = t,
    r = Ar(e, {});
  if (n != null) {
    let i = jt(n);
    return ee(i, r);
  }
  if (Ii(t) && _n(t)) {
    let i = Ar(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!mt(i)) return ee(i);
  }
  return ee(ut, r);
}
var Es = (e) => {
    if (Xr(e) && e.type != null) return gs(e);
    if (Ti(e)) {
      let t = Oe(JSON.stringify(e));
      return Mr(t);
    }
    if (Array.isArray(e)) {
      let t = Oe(JSON.stringify(e));
      return jr(t);
    }
    return ee(gt);
  },
  Fs = (e, t) => {
    let n = !1,
      r;
    if (lr(e.render)) n = !0;
    else if (e.prototype != null && lr(e.prototype.render)) n = !0;
    else {
      let o;
      try {
        r = Oe(e.toString());
        let { hasParams: s, params: h } = r.inferredType;
        s ? h.length === 1 && h[0].type === "ObjectPattern" && (o = e({})) : (o = e()), o != null && Xr(o) && (n = !0);
      } catch {}
    }
    let i = Hr(e, t.name);
    if (i != null) {
      if (n) return ee(jt(i));
      r != null && (r = Oe(e.toString()));
      let { hasParams: o } = r.inferredType;
      return ee(wn(i, o));
    }
    return ee(n ? ut : tt);
  },
  ys = (e) => ee(e.toString()),
  Qr = { string: Cs, object: Es, function: Fs, default: ys };
function Bs(e = {}) {
  return { ...Qr, ...e };
}
function Yr(e, t, n = Qr) {
  try {
    switch (typeof e) {
      case "string":
        return n.string(e, t);
      case "object":
        return n.object(e, t);
      case "function":
        return n.function(e, t);
      default:
        return n.default(e, t);
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function xs(e, t) {
  let n = e != null,
    r = t != null;
  if (!n && !r) return "";
  let i = [];
  if (n) {
    let o = e.map((s) => {
      let h = s.getPrettyName(),
        p = s.getTypeName();
      return p != null ? `${h}: ${p}` : h;
    });
    i.push(`(${o.join(", ")})`);
  } else i.push("()");
  return r && i.push(`=> ${t.getTypeName()}`), i.join(" ");
}
function vs(e, t) {
  let n = e != null,
    r = t != null;
  if (!n && !r) return "";
  let i = [];
  return n ? i.push("( ... )") : i.push("()"), r && i.push(`=> ${t.getTypeName()}`), i.join(" ");
}
function _s(e) {
  return e.replace(
    /,/g,
    `,\r
`
  );
}
var Ss = 150;
function Ae({ name: e, short: t, compact: n, full: r, inferredType: i }) {
  return { name: e, short: t, compact: n, full: r ?? t, inferredType: i };
}
function Kr(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function Dr(e) {
  return e.split(/\r?\n/);
}
function Rt(e, t = !1) {
  return Kr(gn(e, t));
}
function mr(e, t = !1) {
  return Kr(Le(e, t));
}
function bs(e) {
  switch (e) {
    case "Object":
      return gt;
    case "Array":
      return vn;
    case "Class":
      return ai;
    case "Function":
      return tt;
    case "Element":
      return ut;
    default:
      return Cn;
  }
}
function Zr(e, t) {
  let { inferredType: n, ast: r } = Oe(e),
    { type: i } = n,
    o,
    s,
    h;
  switch (i) {
    case "Identifier":
    case "Literal":
      (o = e), (s = e);
      break;
    case "Object": {
      let { depth: p } = n;
      (o = gt), (s = p === 1 ? Rt(r, !0) : null), (h = Rt(r));
      break;
    }
    case "Element": {
      let { identifier: p } = n;
      (o = p != null && !_n(p) ? p : ut), (s = Dr(e).length === 1 ? e : null), (h = e);
      break;
    }
    case "Array": {
      let { depth: p } = n;
      (o = vn), (s = p <= 2 ? mr(r, !0) : null), (h = mr(r));
      break;
    }
    default:
      (o = bs(i)), (s = Dr(e).length === 1 ? e : null), (h = e);
      break;
  }
  return Ae({ name: t, short: o, compact: s, full: h, inferredType: i });
}
function ws({ raw: e }) {
  return e != null ? Zr(e, "custom") : Ae({ name: "custom", short: Cn, compact: Cn });
}
function ks(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null)
    ? Ae({ name: "func", short: vs(t.params, t.returns), compact: null, full: xs(t.params, t.returns) })
    : Ae({ name: "func", short: tt, compact: tt });
}
function Is(e, t) {
  let n = Object.keys(e.value)
      .map((s) => `${s}: ${nt(e.value[s], t).full}`)
      .join(", "),
    { inferredType: r, ast: i } = Oe(`{ ${n} }`),
    { depth: o } = r;
  return Ae({ name: "shape", short: gt, compact: o === 1 && i ? Rt(i, !0) : null, full: i ? Rt(i) : null });
}
function sn(e) {
  return `objectOf(${e})`;
}
function Ts(e, t) {
  let { short: n, compact: r, full: i } = nt(e.value, t);
  return Ae({ name: "objectOf", short: sn(n), compact: r != null ? sn(r) : null, full: i && sn(i) });
}
function Ps(e, t) {
  if (Array.isArray(e.value)) {
    let n = e.value.reduce(
      (r, i) => {
        let { short: o, compact: s, full: h } = nt(i, t);
        return r.short.push(o), r.compact.push(s), r.full.push(h), r;
      },
      { short: [], compact: [], full: [] }
    );
    return Ae({
      name: "union",
      short: n.short.join(" | "),
      compact: n.compact.every((r) => r != null) ? n.compact.join(" | ") : null,
      full: n.full.join(" | "),
    });
  }
  return Ae({ name: "union", short: e.value, compact: null });
}
function Ns({ value: e, computed: t }) {
  return t ? Zr(e, "enumvalue") : Ae({ name: "enumvalue", short: e, compact: e });
}
function Ls(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce(
      (n, r) => {
        let { short: i, compact: o, full: s } = Ns(r);
        return n.short.push(i), n.compact.push(o), n.full.push(s), n;
      },
      { short: [], compact: [], full: [] }
    );
    return Ae({
      name: "enum",
      short: t.short.join(" | "),
      compact: t.compact.every((n) => n != null) ? t.compact.join(" | ") : null,
      full: t.full.join(" | "),
    });
  }
  return Ae({ name: "enum", short: e.value, compact: e.value });
}
function yn(e) {
  return `${e}[]`;
}
function Cr(e) {
  return `[${e}]`;
}
function gr(e, t, n) {
  return Ae({ name: "arrayOf", short: yn(e), compact: t != null ? Cr(t) : null, full: n && Cr(n) });
}
function Os(e, t) {
  let { name: n, short: r, compact: i, full: o, inferredType: s } = nt(e.value, t);
  if (n === "custom") {
    if (s === "Object") return gr(r, i, o);
  } else if (n === "shape") return gr(r, i, o);
  return Ae({ name: "arrayOf", short: yn(r), compact: yn(r) });
}
function nt(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return ws(e);
      case "func":
        return ks(t);
      case "shape":
        return Is(e, t);
      case "instanceOf":
        return Ae({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return Ts(e, t);
      case "union":
        return Ps(e, t);
      case "enum":
        return Ls(e);
      case "arrayOf":
        return Os(e, t);
      default:
        return Ae({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (n) {
    console.error(n);
  }
  return Ae({ name: "unknown", short: "unknown", compact: "unknown" });
}
function Rs(e) {
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
        let { short: n, compact: r, full: i } = nt(t, e);
        return r != null && !Bu(r) ? ee(r) : i ? ee(n, i) : ee(n);
      }
      case "func": {
        let { short: n, full: r } = nt(t, e),
          i = n,
          o;
        return r && r.length < Ss ? (i = r) : r && (o = _s(r)), ee(i, o);
      }
      default:
        return null;
    }
  } catch (n) {
    console.error(n);
  }
  return null;
}
var js = (e, { name: t, type: n }) => {
    let r = (n == null ? void 0 : n.summary) === "element" || (n == null ? void 0 : n.summary) === "elementType",
      i = Hr(e, t);
    if (i != null) {
      if (r) return ee(jt(i));
      let { hasParams: o } = Oe(e.toString()).inferredType;
      return ee(wn(i, o));
    }
    return ee(r ? ut : tt);
  },
  Ms = Bs({ function: js });
function Vs(e, t) {
  let { propTypes: n } = t;
  return n != null
    ? Object.keys(n)
        .map((r) => e.find((i) => i.name === r))
        .filter(Boolean)
    : e;
}
function qs(e, t) {
  let { propDef: n } = e,
    r = Rs(e);
  r != null && (n.type = r);
  let { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let o = qr(i.value);
    o != null && (n.defaultValue = o);
  } else if (t != null) {
    let o = Yr(t, n, Ms);
    o != null && (n.defaultValue = o);
  }
  return n;
}
function Us(e, t) {
  let n = t.defaultProps != null ? t.defaultProps : {},
    r = e.map((i) => qs(i, n[i.propDef.name]));
  return Vs(r, t);
}
function Ws(e, t) {
  let { propDef: n } = e,
    { defaultValue: r } = e.docgenInfo;
  if (r != null && r.value != null) {
    let i = qr(r.value);
    i != null && (n.defaultValue = i);
  } else if (t != null) {
    let i = Yr(t, n);
    i != null && (n.defaultValue = i);
  }
  return n;
}
function zs(e) {
  return e.map((t) => Ws(t));
}
var Er = new Map();
Object.keys(sr.default).forEach((e) => {
  let t = sr.default[e];
  Er.set(t, e), Er.set(t.isRequired, e);
});
function Gs(e, t) {
  let n = e;
  !Fu(e) && !e.propTypes && Nr(e) && (n = e.type);
  let r = yu(n, t);
  if (r.length === 0) return [];
  switch (r[0].typeSystem) {
    case Wn.JAVASCRIPT:
      return Us(r, e);
    case Wn.TYPESCRIPT:
      return zs(r);
    default:
      return r.map((i) => i.propDef);
  }
}
var $s = (e) => ({ rows: Gs(e, "props") }),
  Js = (e) => {
    if (e) {
      let { rows: t } = $s(e);
      if (t)
        return t.reduce((n, r) => {
          let { name: i, description: o, type: s, sbType: h, defaultValue: p, jsDocTags: A, required: D } = r;
          return (
            (n[i] = {
              name: i,
              description: o,
              type: { required: D, ...h },
              table: { type: s ?? void 0, jsDocTags: A, defaultValue: p ?? void 0 },
            }),
            n
          );
        }, {});
    }
    return null;
  },
  an = Jr,
  Xs = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  Hs = (e) =>
    (e.$$typeof || e)
      .toString()
      .replace(/^Symbol\((.*)\)$/, "$1")
      .split(".")
      .map((t) => t.split("_").map(Xs).join(""))
      .join(".");
function Bn(e) {
  if (Ge.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((n, r) => ((n[r] = Bn(e.props[r])), n), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(Bn) : e;
}
var Qs = (e, t) => {
    if (typeof e > "u") return xt.warn("Too many skip or undefined component"), null;
    let n = e,
      r = n.type;
    for (let s = 0; s < (t == null ? void 0 : t.skip); s += 1) {
      if (typeof n > "u") return xt.warn("Cannot skip undefined element"), null;
      if (ft.Children.count(n) > 1) return xt.warn("Trying to skip an array of elements"), null;
      typeof n.props.children > "u"
        ? (xt.warn("Not enough children to skip elements."),
          typeof n.type == "function" && n.type.name === "" && (n = ft.createElement(r, { ...n.props })))
        : typeof n.props.children == "function"
        ? (n = n.props.children())
        : (n = n.props.children);
    }
    let i;
    typeof (t == null ? void 0 : t.displayName) == "string"
      ? (i = { showFunctions: !0, displayName: () => t.displayName })
      : (i = {
          displayName: (s) => {
            var h;
            return s.type.displayName
              ? s.type.displayName
              : qn(s.type, "displayName")
              ? qn(s.type, "displayName")
              : (h = s.type.render) != null && h.displayName
              ? s.type.render.displayName
              : typeof s.type == "symbol" || (s.type.$$typeof && typeof s.type.$$typeof == "symbol")
              ? Hs(s.type)
              : s.type.name && s.type.name !== "_default"
              ? s.type.name
              : typeof s.type == "function"
              ? "No Display Name"
              : Di(s.type)
              ? s.type.render.name
              : Nr(s.type)
              ? s.type.type.name
              : s.type;
          },
        });
    let o = { ...i, filterProps: (s, h) => s !== void 0, ...t };
    return ft.Children.map(e, (s) => {
      let h = typeof s == "number" ? s.toString() : s,
        p = (typeof an == "function" ? an : an.default)(Bn(h), o);
      if (p.indexOf("&quot;") > -1) {
        let A = p.match(/\S+=\\"([^"]*)\\"/g);
        A &&
          A.forEach((D) => {
            p = p.replace(D, D.replace(/&quot;/g, "'"));
          });
      }
      return p;
    })
      .join(
        `
`
      )
      .replace(/function\s+noRefCheck\(\)\s*\{\}/g, "() => {}");
  },
  Ys = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  Ks = (e) => {
    var r;
    let t = (r = e == null ? void 0 : e.parameters.docs) == null ? void 0 : r.source,
      n = e == null ? void 0 : e.parameters.__isArgsStory;
    return (t == null ? void 0 : t.type) === Un.DYNAMIC
      ? !1
      : !n || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === Un.CODE;
  },
  Zs = (e) => {
    var t, n;
    return ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" && !!((n = e.props) != null && n.mdxType);
  },
  eu = (e) => {
    if (!Zs(e)) return e;
    let { mdxType: t, originalType: n, children: r, ...i } = e.props,
      o = [];
    return r && (o = (Array.isArray(r) ? r : [r]).map(eu)), Ge.createElement(n, i, ...o);
  },
  tu = (e, t) => {
    var D, y;
    let n = vu.getChannel(),
      r = Ks(t),
      i = "";
    _u(() => {
      if (!r) {
        let { id: C, unmappedArgs: g } = t;
        n.emit(Eu, { id: C, source: i, args: g });
      }
    });
    let o = e();
    if (r) return o;
    let s = { ...Ys, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
      h =
        (y = (D = t == null ? void 0 : t.parameters.docs) == null ? void 0 : D.source) != null && y.excludeDecorators
          ? t.originalStoryFn(t.args, t)
          : o,
      p = eu(h),
      A = Qs(p, s);
    return A && (i = A), o;
  },
  ra = (e, t) => {
    let n = t.findIndex((i) => i.originalFn === tu),
      r = n === -1 ? t : [...t.splice(n, 1), ...t];
    return xu(e, r);
  },
  ua = { docs: { story: { inline: !0 }, extractArgTypes: Js, extractComponentDescription: Cu } },
  ia = [tu],
  sa = [gu];
export { ra as applyDecorators, sa as argTypesEnhancers, ia as decorators, ua as parameters };
