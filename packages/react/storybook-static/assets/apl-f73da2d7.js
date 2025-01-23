var l = {
    "+": ["conjugate", "add"],
    "−": ["negate", "subtract"],
    "×": ["signOf", "multiply"],
    "÷": ["reciprocal", "divide"],
    "⌈": ["ceiling", "greaterOf"],
    "⌊": ["floor", "lesserOf"],
    "∣": ["absolute", "residue"],
    "⍳": ["indexGenerate", "indexOf"],
    "?": ["roll", "deal"],
    "⋆": ["exponentiate", "toThePowerOf"],
    "⍟": ["naturalLog", "logToTheBase"],
    "○": ["piTimes", "circularFuncs"],
    "!": ["factorial", "binomial"],
    "⌹": ["matrixInverse", "matrixDivide"],
    "<": [null, "lessThan"],
    "≤": [null, "lessThanOrEqual"],
    "=": [null, "equals"],
    ">": [null, "greaterThan"],
    "≥": [null, "greaterThanOrEqual"],
    "≠": [null, "notEqual"],
    "≡": ["depth", "match"],
    "≢": [null, "notMatch"],
    "∈": ["enlist", "membership"],
    "⍷": [null, "find"],
    "∪": ["unique", "union"],
    "∩": [null, "intersection"],
    "∼": ["not", "without"],
    "∨": [null, "or"],
    "∧": [null, "and"],
    "⍱": [null, "nor"],
    "⍲": [null, "nand"],
    "⍴": ["shapeOf", "reshape"],
    ",": ["ravel", "catenate"],
    "⍪": [null, "firstAxisCatenate"],
    "⌽": ["reverse", "rotate"],
    "⊖": ["axis1Reverse", "axis1Rotate"],
    "⍉": ["transpose", null],
    "↑": ["first", "take"],
    "↓": [null, "drop"],
    "⊂": ["enclose", "partitionWithAxis"],
    "⊃": ["diclose", "pick"],
    "⌷": [null, "index"],
    "⍋": ["gradeUp", null],
    "⍒": ["gradeDown", null],
    "⊤": ["encode", null],
    "⊥": ["decode", null],
    "⍕": ["format", "formatByExample"],
    "⍎": ["execute", null],
    "⊣": ["stop", "left"],
    "⊢": ["pass", "right"],
  },
  t = /[\.\/⌿⍀¨⍣]/,
  a = /⍬/,
  i = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/,
  u = /←/,
  o = /[⍝#].*$/,
  s = function (r) {
    var n;
    return (
      (n = !1),
      function (e) {
        return (n = e), e === r ? n === "\\" : !0;
      }
    );
  };
const f = {
  name: "apl",
  startState: function () {
    return { prev: !1, func: !1, op: !1, string: !1, escape: !1 };
  },
  token: function (r, n) {
    var e;
    return r.eatSpace()
      ? null
      : ((e = r.next()),
        e === '"' || e === "'"
          ? (r.eatWhile(s(e)), r.next(), (n.prev = !0), "string")
          : /[\[{\(]/.test(e)
          ? ((n.prev = !1), null)
          : /[\]}\)]/.test(e)
          ? ((n.prev = !0), null)
          : a.test(e)
          ? ((n.prev = !1), "atom")
          : /[¯\d]/.test(e)
          ? (n.func ? ((n.func = !1), (n.prev = !1)) : (n.prev = !0), r.eatWhile(/[\w\.]/), "number")
          : t.test(e) || u.test(e)
          ? "operator"
          : i.test(e)
          ? ((n.func = !0), (n.prev = !1), l[e] ? "variableName.function.standard" : "variableName.function")
          : o.test(e)
          ? (r.skipToEnd(), "comment")
          : e === "∘" && r.peek() === "."
          ? (r.next(), "variableName.function")
          : (r.eatWhile(/[\w\$_]/), (n.prev = !0), "keyword"));
  },
};
export { f as apl };
