import { r as Va } from "./index-363833c6.js";
import { g as Ga, r as c, R as n } from "./index-7c191284.js";
let ue;
(function (e) {
  (e[(e.Backspace = 8)] = "Backspace"),
    (e[(e.Tab = 9)] = "Tab"),
    (e[(e.Enter = 13)] = "Enter"),
    (e[(e.Shift = 16)] = "Shift"),
    (e[(e.Ctrl = 17)] = "Ctrl"),
    (e[(e.Alt = 18)] = "Alt"),
    (e[(e.Pause = 19)] = "Pause"),
    (e[(e.CapsLock = 20)] = "CapsLock"),
    (e[(e.Escape = 27)] = "Escape"),
    (e[(e.Space = 32)] = "Space"),
    (e[(e.PageUp = 33)] = "PageUp"),
    (e[(e.PageDown = 34)] = "PageDown"),
    (e[(e.End = 35)] = "End"),
    (e[(e.Home = 36)] = "Home"),
    (e[(e.LeftArrow = 37)] = "LeftArrow"),
    (e[(e.UpArrow = 38)] = "UpArrow"),
    (e[(e.RightArrow = 39)] = "RightArrow"),
    (e[(e.DownArrow = 40)] = "DownArrow"),
    (e[(e.Insert = 45)] = "Insert"),
    (e[(e.Delete = 46)] = "Delete"),
    (e[(e.Key0 = 48)] = "Key0"),
    (e[(e.Key1 = 49)] = "Key1"),
    (e[(e.Key2 = 50)] = "Key2"),
    (e[(e.Key3 = 51)] = "Key3"),
    (e[(e.Key4 = 52)] = "Key4"),
    (e[(e.Key5 = 53)] = "Key5"),
    (e[(e.Key6 = 54)] = "Key6"),
    (e[(e.Key7 = 55)] = "Key7"),
    (e[(e.Key8 = 56)] = "Key8"),
    (e[(e.Key9 = 57)] = "Key9"),
    (e[(e.KeyA = 65)] = "KeyA"),
    (e[(e.KeyB = 66)] = "KeyB"),
    (e[(e.KeyC = 67)] = "KeyC"),
    (e[(e.KeyD = 68)] = "KeyD"),
    (e[(e.KeyE = 69)] = "KeyE"),
    (e[(e.KeyF = 70)] = "KeyF"),
    (e[(e.KeyG = 71)] = "KeyG"),
    (e[(e.KeyH = 72)] = "KeyH"),
    (e[(e.KeyI = 73)] = "KeyI"),
    (e[(e.KeyJ = 74)] = "KeyJ"),
    (e[(e.KeyK = 75)] = "KeyK"),
    (e[(e.KeyL = 76)] = "KeyL"),
    (e[(e.KeyM = 77)] = "KeyM"),
    (e[(e.KeyN = 78)] = "KeyN"),
    (e[(e.KeyO = 79)] = "KeyO"),
    (e[(e.KeyP = 80)] = "KeyP"),
    (e[(e.KeyQ = 81)] = "KeyQ"),
    (e[(e.KeyR = 82)] = "KeyR"),
    (e[(e.KeyS = 83)] = "KeyS"),
    (e[(e.KeyT = 84)] = "KeyT"),
    (e[(e.KeyU = 85)] = "KeyU"),
    (e[(e.KeyV = 86)] = "KeyV"),
    (e[(e.KeyW = 87)] = "KeyW"),
    (e[(e.KeyX = 88)] = "KeyX"),
    (e[(e.KeyY = 89)] = "KeyY"),
    (e[(e.KeyZ = 90)] = "KeyZ"),
    (e[(e.LeftMeta = 91)] = "LeftMeta"),
    (e[(e.RightMeta = 92)] = "RightMeta"),
    (e[(e.Select = 93)] = "Select"),
    (e[(e.Numpad0 = 96)] = "Numpad0"),
    (e[(e.Numpad1 = 97)] = "Numpad1"),
    (e[(e.Numpad2 = 98)] = "Numpad2"),
    (e[(e.Numpad3 = 99)] = "Numpad3"),
    (e[(e.Numpad4 = 100)] = "Numpad4"),
    (e[(e.Numpad5 = 101)] = "Numpad5"),
    (e[(e.Numpad6 = 102)] = "Numpad6"),
    (e[(e.Numpad7 = 103)] = "Numpad7"),
    (e[(e.Numpad8 = 104)] = "Numpad8"),
    (e[(e.Numpad9 = 105)] = "Numpad9"),
    (e[(e.Multiply = 106)] = "Multiply"),
    (e[(e.Add = 107)] = "Add"),
    (e[(e.Subtract = 109)] = "Subtract"),
    (e[(e.Decimal = 110)] = "Decimal"),
    (e[(e.Divide = 111)] = "Divide"),
    (e[(e.F1 = 112)] = "F1"),
    (e[(e.F2 = 113)] = "F2"),
    (e[(e.F3 = 114)] = "F3"),
    (e[(e.F4 = 115)] = "F4"),
    (e[(e.F5 = 116)] = "F5"),
    (e[(e.F6 = 117)] = "F6"),
    (e[(e.F7 = 118)] = "F7"),
    (e[(e.F8 = 119)] = "F8"),
    (e[(e.F9 = 120)] = "F9"),
    (e[(e.F10 = 121)] = "F10"),
    (e[(e.F11 = 122)] = "F11"),
    (e[(e.F12 = 123)] = "F12"),
    (e[(e.NumLock = 144)] = "NumLock"),
    (e[(e.ScrollLock = 145)] = "ScrollLock"),
    (e[(e.Semicolon = 186)] = "Semicolon"),
    (e[(e.Equals = 187)] = "Equals"),
    (e[(e.Comma = 188)] = "Comma"),
    (e[(e.Dash = 189)] = "Dash"),
    (e[(e.Period = 190)] = "Period"),
    (e[(e.ForwardSlash = 191)] = "ForwardSlash"),
    (e[(e.GraveAccent = 192)] = "GraveAccent"),
    (e[(e.OpenBracket = 219)] = "OpenBracket"),
    (e[(e.BackSlash = 220)] = "BackSlash"),
    (e[(e.CloseBracket = 221)] = "CloseBracket"),
    (e[(e.SingleQuote = 222)] = "SingleQuote");
})(ue || (ue = {}));
const at = { props: { "data-polaris-scrollable": !0 }, selector: "[data-polaris-scrollable]" },
  qa = { props: { "data-polaris-overlay": !0 }, selector: "[data-polaris-overlay]" },
  Ya = { props: { "data-polaris-layer": !0 }, selector: "[data-polaris-layer]" },
  Lt = { props: { "data-polaris-unstyled": !0 }, selector: "[data-polaris-unstyled]" },
  uo = { props: { "data-polaris-top-bar": !0 }, selector: "[data-polaris-top-bar]" },
  Zl = { props: { "data-polaris-header-cell": !0 }, selector: "[data-polaris-header-cell]" },
  Xa = { props: ["data-portal-id"], selector: "[data-portal-id]" };
var fo = ["xs", "sm", "md", "lg", "xl"],
  Qa = {
    "breakpoints-xs": {
      value: "0px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage.",
    },
    "breakpoints-sm": {
      value: "490px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage.",
    },
    "breakpoints-md": {
      value: "768px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage.",
    },
    "breakpoints-lg": {
      value: "1040px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage.",
    },
    "breakpoints-xl": {
      value: "1440px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage.",
    },
  };
function Ja(e, r) {
  var t = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (t != null) {
    var o,
      a,
      i,
      l,
      s = [],
      g = !0,
      m = !1;
    try {
      if (((i = (t = t.call(e)).next), r === 0)) {
        if (Object(t) !== t) return;
        g = !1;
      } else for (; !(g = (o = i.call(t)).done) && (s.push(o.value), s.length !== r); g = !0);
    } catch (u) {
      (m = !0), (a = u);
    } finally {
      try {
        if (!g && t.return != null && ((l = t.return()), Object(l) !== l)) return;
      } finally {
        if (m) throw a;
      }
    }
    return s;
  }
}
function Ka(e, r) {
  return r || (r = e.slice(0)), (e.raw = r), e;
}
function Tr(e, r) {
  return en(e) || Ja(e, r) || rn(e, r) || tn();
}
function en(e) {
  if (Array.isArray(e)) return e;
}
function rn(e, r) {
  if (e) {
    if (typeof e == "string") return Ot(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if ((t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")) return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ot(e, r);
  }
}
function Ot(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Rt,
  Er = 16,
  Ze = "px",
  je = "em",
  We = "rem",
  ho = new RegExp(String.raw(Rt || (Rt = Ka(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"])))),
  on = new RegExp(Ze + "|" + je + "|" + We);
function nt(e) {
  e === void 0 && (e = "");
  var r = e.match(new RegExp(ho.source + "(" + on.source + ")"));
  return r && r[1];
}
function an(e) {
  e === void 0 && (e = "");
  var r = nt(e);
  if (!r || r === Ze) return e;
  if (r === je || r === We) return "" + parseFloat(e) * Er + Ze;
}
function po(e, r) {
  e === void 0 && (e = ""), r === void 0 && (r = Er);
  var t = nt(e);
  if (!t || t === je) return e;
  if (t === Ze) return "" + parseFloat(e) / r + je;
  if (t === We) return "" + (parseFloat(e) * Er) / r + je;
}
function nn(e) {
  e === void 0 && (e = "");
  var r = nt(e);
  if (!r || r === We) return e;
  if (r === je) return "" + parseFloat(e) + We;
  if (r === Ze) return "" + parseFloat(e) / Er + We;
}
function ln(e) {
  return e.replace(new RegExp(ho.source + "(" + Ze + ")", "g"), function (r) {
    var t;
    return (t = nn(r)) != null ? t : r;
  });
}
function vo(e) {
  return Object.fromEntries(
    Object.entries(e).map(function (r) {
      var t = Tr(r, 2),
        o = t[0],
        a = t[1];
      return [o, Object.assign(Object.assign({}, a), {}, { value: ln(a.value) })];
    })
  );
}
function xo(e) {
  return "--p-" + e;
}
function h(e) {
  return "var(" + xo(e) + ")";
}
function sn(e) {
  return Object.values(e).flatMap(function (r) {
    return Object.keys(r);
  });
}
function cn(e) {
  var r = Object.entries(e),
    t = r.length - 1;
  return Object.fromEntries(
    r.map(function (o, a) {
      var i = o,
        l = Tr(i, 2),
        s = l[0],
        g = l[1],
        m = gn(g),
        u = Ut(g),
        f = a === t ? m : m + " and " + Ut(r[a + 1][1]);
      return [s, { up: m, down: u, only: f }];
    })
  );
}
function gn(e) {
  return "(min-width: " + po(e) + ")";
}
function Ut(e) {
  var r,
    t = parseFloat((r = an(e)) != null ? r : "") - 0.04;
  return "(max-width: " + po(t + "px") + ")";
}
var yo = ["border", "breakpoints", "font", "height", "shadow", "space", "text", "width"];
function dn(e) {
  return Object.fromEntries(
    Object.entries(e).map(function (r) {
      var t = Tr(r, 2),
        o = t[0],
        a = t[1];
      return [o, yo.includes(o) ? vo(a) : a];
    })
  );
}
var mn = function (r) {
  return bn(r) && !un(r);
};
function bn(e) {
  return !!e && typeof e == "object";
}
function un(e) {
  var r = Object.prototype.toString.call(e);
  return r === "[object RegExp]" || r === "[object Date]" || pn(e);
}
var fn = typeof Symbol == "function" && Symbol.for,
  hn = fn ? Symbol.for("react.element") : 60103;
function pn(e) {
  return e.$$typeof === hn;
}
function vn(e) {
  return Array.isArray(e) ? [] : {};
}
function lr(e, r) {
  return r.clone !== !1 && r.isMergeableObject(e) ? Ge(vn(e), e, r) : e;
}
function xn(e, r, t) {
  return e.concat(r).map(function (o) {
    return lr(o, t);
  });
}
function yn(e, r) {
  if (!r.customMerge) return Ge;
  var t = r.customMerge(e);
  return typeof t == "function" ? t : Ge;
}
function wn(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (r) {
        return Object.propertyIsEnumerable.call(e, r);
      })
    : [];
}
function Ht(e) {
  return Object.keys(e).concat(wn(e));
}
function wo(e, r) {
  try {
    return r in e;
  } catch {
    return !1;
  }
}
function kn(e, r) {
  return wo(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r));
}
function Sn(e, r, t) {
  var o = {};
  return (
    t.isMergeableObject(e) &&
      Ht(e).forEach(function (a) {
        o[a] = lr(e[a], t);
      }),
    Ht(r).forEach(function (a) {
      kn(e, a) || (wo(e, a) && t.isMergeableObject(r[a]) ? (o[a] = yn(a, t)(e[a], r[a], t)) : (o[a] = lr(r[a], t)));
    }),
    o
  );
}
function Ge(e, r, t) {
  (t = t || {}),
    (t.arrayMerge = t.arrayMerge || xn),
    (t.isMergeableObject = t.isMergeableObject || mn),
    (t.cloneUnlessOtherwiseSpecified = lr);
  var o = Array.isArray(r),
    a = Array.isArray(e),
    i = o === a;
  return i ? (o ? t.arrayMerge(e, r, t) : Sn(e, r, t)) : lr(r, t);
}
Ge.all = function (r, t) {
  if (!Array.isArray(r)) throw new Error("first argument should be an array");
  return r.reduce(function (o, a) {
    return Ge(o, a, t);
  }, {});
};
var En = Ge,
  Pn = En;
const In = Ga(Pn);
var b = {
    0: "0px",
    "0165": "0.66px",
    "025": "1px",
    "050": "2px",
    100: "4px",
    150: "6px",
    200: "8px",
    275: "11px",
    300: "12px",
    325: "13px",
    350: "14px",
    400: "16px",
    450: "18px",
    500: "20px",
    550: "22px",
    600: "24px",
    700: "28px",
    750: "30px",
    800: "32px",
    900: "36px",
    1e3: "40px",
    1200: "48px",
    1600: "64px",
    2e3: "80px",
    2400: "96px",
    2800: "112px",
    3200: "128px",
  },
  Tn = {
    "border-radius-0": { value: b[0] },
    "border-radius-050": { value: b["050"] },
    "border-radius-100": { value: b[100] },
    "border-radius-150": { value: b[150] },
    "border-radius-200": { value: b[200] },
    "border-radius-300": { value: b[300] },
    "border-radius-400": { value: b[400] },
    "border-radius-500": { value: b[500] },
    "border-radius-750": { value: b[750] },
    "border-radius-full": { value: "9999px" },
    "border-width-0": { value: b[0] },
    "border-width-0165": { value: b["0165"] },
    "border-width-025": { value: b["025"] },
    "border-width-050": { value: b["050"] },
    "border-width-100": { value: b[100] },
  },
  d = {
    1: "rgba(255, 255, 255, 1)",
    2: "rgba(253, 253, 253, 1)",
    3: "rgba(250, 250, 250, 1)",
    4: "rgba(247, 247, 247, 1)",
    5: "rgba(243, 243, 243, 1)",
    6: "rgba(241, 241, 241, 1)",
    7: "rgba(235, 235, 235, 1)",
    8: "rgba(227, 227, 227, 1)",
    9: "rgba(212, 212, 212, 1)",
    10: "rgba(204, 204, 204, 1)",
    11: "rgba(181, 181, 181, 1)",
    12: "rgba(138, 138, 138, 1)",
    13: "rgba(97, 97, 97, 1)",
    14: "rgba(74, 74, 74, 1)",
    15: "rgba(48, 48, 48, 1)",
    16: "rgba(26, 26, 26, 1)",
  },
  V = {
    1: "rgba(251, 253, 255, 1)",
    2: "rgba(242, 249, 255, 1)",
    3: "rgba(234, 244, 255, 1)",
    4: "rgba(224, 240, 255, 1)",
    5: "rgba(213, 235, 255, 1)",
    6: "rgba(202, 230, 255, 1)",
    7: "rgba(192, 225, 255, 1)",
    8: "rgba(168, 216, 255, 1)",
    9: "rgba(145, 208, 255, 1)",
    10: "rgba(81, 192, 255, 1)",
    11: "rgba(0, 148, 213, 1)",
    12: "rgba(0, 124, 180, 1)",
    13: "rgba(0, 103, 155, 1)",
    14: "rgba(0, 82, 124, 1)",
    15: "rgba(0, 58, 90, 1)",
    16: "rgba(0, 33, 51, 1)",
  },
  U = {
    1: "rgba(252, 253, 255, 1)",
    2: "rgba(246, 248, 255, 1)",
    3: "rgba(240, 242, 255, 1)",
    4: "rgba(234, 237, 255, 1)",
    5: "rgba(226, 231, 255, 1)",
    6: "rgba(219, 225, 255, 1)",
    7: "rgba(213, 220, 255, 1)",
    8: "rgba(197, 208, 255, 1)",
    9: "rgba(186, 199, 255, 1)",
    10: "rgba(151, 173, 255, 1)",
    11: "rgba(65, 136, 255, 1)",
    12: "rgba(0, 113, 233, 1)",
    13: "rgba(0, 91, 211, 1)",
    14: "rgba(0, 66, 153, 1)",
    15: "rgba(0, 46, 106, 1)",
    16: "rgba(0, 22, 51, 1)",
  },
  q = {
    1: "rgba(248, 255, 251, 1)",
    2: "rgba(227, 255, 237, 1)",
    3: "rgba(205, 254, 225, 1)",
    4: "rgba(180, 254, 210, 1)",
    5: "rgba(146, 254, 194, 1)",
    6: "rgba(99, 253, 176, 1)",
    7: "rgba(56, 250, 163, 1)",
    8: "rgba(53, 238, 155, 1)",
    9: "rgba(50, 225, 147, 1)",
    10: "rgba(46, 211, 137, 1)",
    11: "rgba(50, 160, 110, 1)",
    12: "rgba(41, 132, 90, 1)",
    13: "rgba(19, 111, 69, 1)",
    14: "rgba(12, 81, 50, 1)",
    15: "rgba(8, 61, 37, 1)",
    16: "rgba(9, 42, 27, 1)",
  },
  Dt = {
    1: "rgba(250, 255, 250, 1)",
    2: "rgba(228, 255, 229, 1)",
    3: "rgba(208, 255, 209, 1)",
    4: "rgba(187, 254, 190, 1)",
    5: "rgba(157, 254, 160, 1)",
    6: "rgba(119, 254, 122, 1)",
    7: "rgba(56, 254, 62, 1)",
    8: "rgba(40, 242, 47, 1)",
    9: "rgba(37, 232, 43, 1)",
    10: "rgba(32, 207, 39, 1)",
    11: "rgba(24, 168, 29, 1)",
    12: "rgba(17, 135, 21, 1)",
    13: "rgba(12, 113, 15, 1)",
    14: "rgba(11, 85, 13, 1)",
    15: "rgba(3, 61, 5, 1)",
    16: "rgba(3, 33, 4, 1)",
  },
  $t = {
    1: "rgba(255, 253, 255, 1)",
    2: "rgba(255, 245, 255, 1)",
    3: "rgba(253, 239, 253, 1)",
    4: "rgba(254, 231, 254, 1)",
    5: "rgba(252, 223, 252, 1)",
    6: "rgba(251, 215, 251, 1)",
    7: "rgba(251, 207, 251, 1)",
    8: "rgba(249, 190, 249, 1)",
    9: "rgba(248, 177, 248, 1)",
    10: "rgba(246, 141, 246, 1)",
    11: "rgba(225, 86, 225, 1)",
    12: "rgba(197, 48, 197, 1)",
    13: "rgba(159, 38, 159, 1)",
    14: "rgba(121, 26, 121, 1)",
    15: "rgba(86, 16, 86, 1)",
    16: "rgba(52, 6, 52, 1)",
  },
  oe = {
    1: "rgba(255, 253, 250, 1)",
    2: "rgba(255, 247, 238, 1)",
    3: "rgba(255, 241, 227, 1)",
    4: "rgba(255, 235, 213, 1)",
    5: "rgba(255, 228, 198, 1)",
    6: "rgba(255, 221, 182, 1)",
    7: "rgba(255, 214, 164, 1)",
    8: "rgba(255, 200, 121, 1)",
    9: "rgba(255, 184, 0, 1)",
    10: "rgba(229, 165, 0, 1)",
    11: "rgba(178, 132, 0, 1)",
    12: "rgba(149, 111, 0, 1)",
    13: "rgba(124, 88, 0, 1)",
    14: "rgba(94, 66, 0, 1)",
    15: "rgba(65, 45, 0, 1)",
    16: "rgba(37, 26, 0, 1)",
  },
  Y = {
    1: "rgba(253, 253, 255, 1)",
    2: "rgba(248, 247, 255, 1)",
    3: "rgba(243, 241, 255, 1)",
    4: "rgba(239, 236, 255, 1)",
    5: "rgba(233, 229, 255, 1)",
    6: "rgba(228, 222, 255, 1)",
    7: "rgba(223, 217, 255, 1)",
    8: "rgba(212, 204, 255, 1)",
    9: "rgba(199, 188, 255, 1)",
    10: "rgba(170, 149, 255, 1)",
    11: "rgba(148, 116, 255, 1)",
    12: "rgba(128, 81, 255, 1)",
    13: "rgba(113, 38, 255, 1)",
    14: "rgba(87, 0, 209, 1)",
    15: "rgba(59, 0, 147, 1)",
    16: "rgba(28, 0, 79, 1)",
  },
  X = {
    1: "rgba(255, 251, 251, 1)",
    2: "rgba(255, 246, 246, 1)",
    3: "rgba(255, 237, 236, 1)",
    4: "rgba(254, 233, 232, 1)",
    5: "rgba(254, 226, 225, 1)",
    6: "rgba(254, 218, 217, 1)",
    7: "rgba(254, 211, 209, 1)",
    8: "rgba(254, 195, 193, 1)",
    9: "rgba(253, 176, 172, 1)",
    10: "rgba(253, 129, 122, 1)",
    11: "rgba(239, 77, 47, 1)",
    12: "rgba(229, 28, 0, 1)",
    13: "rgba(181, 38, 11, 1)",
    14: "rgba(142, 31, 11, 1)",
    15: "rgba(95, 21, 7, 1)",
    16: "rgba(47, 10, 4, 1)",
  },
  jt = {
    1: "rgba(255, 253, 253, 1)",
    2: "rgba(255, 246, 248, 1)",
    3: "rgba(255, 239, 243, 1)",
    4: "rgba(255, 232, 238, 1)",
    5: "rgba(255, 225, 232, 1)",
    6: "rgba(255, 217, 227, 1)",
    7: "rgba(254, 209, 221, 1)",
    8: "rgba(254, 193, 210, 1)",
    9: "rgba(254, 181, 202, 1)",
    10: "rgba(254, 142, 177, 1)",
    11: "rgba(253, 75, 146, 1)",
    12: "rgba(227, 12, 118, 1)",
    13: "rgba(185, 7, 95, 1)",
    14: "rgba(141, 4, 72, 1)",
    15: "rgba(100, 2, 49, 1)",
    16: "rgba(62, 1, 28, 1)",
  },
  Wt = {
    1: "rgba(248, 255, 254, 1)",
    2: "rgba(232, 252, 250, 1)",
    3: "rgba(215, 250, 247, 1)",
    4: "rgba(195, 247, 242, 1)",
    5: "rgba(170, 246, 239, 1)",
    6: "rgba(137, 245, 236, 1)",
    7: "rgba(112, 240, 229, 1)",
    8: "rgba(90, 230, 219, 1)",
    9: "rgba(44, 224, 212, 1)",
    10: "rgba(30, 199, 188, 1)",
    11: "rgba(0, 161, 152, 1)",
    12: "rgba(18, 131, 124, 1)",
    13: "rgba(12, 106, 100, 1)",
    14: "rgba(12, 83, 79, 1)",
    15: "rgba(3, 60, 57, 1)",
    16: "rgba(6, 44, 41, 1)",
  },
  ae = {
    1: "rgba(255, 253, 246, 1)",
    2: "rgba(255, 248, 219, 1)",
    3: "rgba(255, 244, 191, 1)",
    4: "rgba(255, 239, 157, 1)",
    5: "rgba(255, 235, 120, 1)",
    6: "rgba(255, 230, 0, 1)",
    7: "rgba(247, 223, 0, 1)",
    8: "rgba(234, 211, 0, 1)",
    9: "rgba(225, 203, 0, 1)",
    10: "rgba(197, 178, 0, 1)",
    11: "rgba(153, 138, 0, 1)",
    12: "rgba(130, 117, 0, 1)",
    13: "rgba(105, 95, 0, 1)",
    14: "rgba(79, 71, 0, 1)",
    15: "rgba(51, 46, 0, 1)",
    16: "rgba(31, 28, 0, 1)",
  },
  Z = {
    1: "rgba(0, 0, 0, 0)",
    2: "rgba(0, 0, 0, 0.01)",
    3: "rgba(0, 0, 0, 0.02)",
    4: "rgba(0, 0, 0, 0.03)",
    5: "rgba(0, 0, 0, 0.05)",
    6: "rgba(0, 0, 0, 0.06)",
    7: "rgba(0, 0, 0, 0.08)",
    8: "rgba(0, 0, 0, 0.11)",
    9: "rgba(0, 0, 0, 0.17)",
    10: "rgba(0, 0, 0, 0.20)",
    11: "rgba(0, 0, 0, 0.29)",
    12: "rgba(0, 0, 0, 0.46)",
    13: "rgba(0, 0, 0, 0.62)",
    14: "rgba(0, 0, 0, 0.71)",
    15: "rgba(0, 0, 0, 0.81)",
    16: "rgba(0, 0, 0, 0.90)",
  },
  ge = {
    1: "rgba(255, 255, 255, 0)",
    2: "rgba(255, 255, 255, 0.01)",
    3: "rgba(255, 255, 255, 0.02)",
    4: "rgba(255, 255, 255, 0.03)",
    5: "rgba(255, 255, 255, 0.05)",
    6: "rgba(255, 255, 255, 0.06)",
    7: "rgba(255, 255, 255, 0.08)",
    8: "rgba(255, 255, 255, 0.11)",
    9: "rgba(255, 255, 255, 0.17)",
    10: "rgba(255, 255, 255, 0.20)",
    11: "rgba(255, 255, 255, 0.28)",
    12: "rgba(255, 255, 255, 0.46)",
    13: "rgba(255, 255, 255, 0.62)",
    14: "rgba(255, 255, 255, 0.71)",
    15: "rgba(255, 255, 255, 0.81)",
    16: "rgba(255, 255, 255, 0.90)",
  },
  Cn = {
    "color-scheme": { value: "light" },
    "color-bg": { value: d[6], description: "The default background color of the admin." },
    "color-bg-inverse": { value: d[16], description: "Use for high contrast page or component backgrounds." },
    "color-bg-surface": {
      value: d[1],
      description: "The background color for elements with the highest level of prominence, like a card.",
    },
    "color-bg-surface-hover": { value: d[4], description: "The hover state color for elements with the highest level of prominence." },
    "color-bg-surface-active": {
      value: d[5],
      description: "The active state (on press) color for elements with the highest level of prominence.",
    },
    "color-bg-surface-selected": {
      value: d[6],
      description: "The selected state color for elements with the highest level of prominence.",
    },
    "color-bg-surface-disabled": { value: Z[5], description: "The disabled state color for elements." },
    "color-bg-surface-secondary": { value: d[4], description: "The background color for elements with a secondary level of prominence." },
    "color-bg-surface-secondary-hover": {
      value: d[6],
      description: "The hover state color for elements with a secondary level of prominence.",
    },
    "color-bg-surface-secondary-active": {
      value: d[7],
      description: "The active state (on press) color for elements with a secondary level of prominence.",
    },
    "color-bg-surface-secondary-selected": {
      value: d[7],
      description: "The selected state color for elements with a secondary level of prominence.",
    },
    "color-bg-surface-tertiary": { value: d[5], description: "The background color for elements with a third level of prominence." },
    "color-bg-surface-tertiary-hover": { value: d[7], description: "The hover state color for elements with a third level of prominence." },
    "color-bg-surface-tertiary-active": {
      value: d[8],
      description: "The active state (on press) color for elements with a third level of prominence.",
    },
    "color-bg-surface-brand": { value: d[8], description: "Use to apply the key color to elements." },
    "color-bg-surface-brand-hover": { value: d[7], description: "The hover state color for key elements." },
    "color-bg-surface-brand-active": { value: d[6], description: "The active state (on press) color for key elements." },
    "color-bg-surface-brand-selected": { value: d[6], description: "The selected state color for key elements." },
    "color-bg-surface-info": { value: V[3], description: "Use for backgrounds communicating important information, like banners." },
    "color-bg-surface-info-hover": { value: V[4], description: "The hover state color for communicating important information." },
    "color-bg-surface-info-active": {
      value: V[6],
      description: "The active state (on press) color for communicating important information.",
    },
    "color-bg-surface-success": { value: q[3], description: "Use for backgrounds communicating success, like banners." },
    "color-bg-surface-success-hover": { value: q[4], description: "The hover state color for communicating success." },
    "color-bg-surface-success-active": { value: q[5], description: "The active state (on press) color for communicating success." },
    "color-bg-surface-caution": { value: ae[2], description: "Use for backgrounds communicating caution, like banners." },
    "color-bg-surface-caution-hover": { value: ae[3], description: "The hover state for communicating caution." },
    "color-bg-surface-caution-active": { value: ae[4], description: "The active state (on press) color for communicating caution." },
    "color-bg-surface-warning": { value: oe[3], description: "Use for backgrounds communicating warning, like banners." },
    "color-bg-surface-warning-hover": { value: oe[4], description: "The hover state color for communicating warning." },
    "color-bg-surface-warning-active": { value: oe[5], description: "The active state (on press) color for communicating warning." },
    "color-bg-surface-critical": {
      value: X[4],
      description: "Use for backgrounds communicating critical information, like banners or input errors.",
    },
    "color-bg-surface-critical-hover": { value: X[5], description: "The hover state color for communicating critical information." },
    "color-bg-surface-critical-active": {
      value: X[6],
      description: "The active state (on press) color for communicating critical information.",
    },
    "color-bg-surface-emphasis": {
      value: U[3],
      description: "Use for backgrounds indicating areas of focus in editors, such as the theme editor.",
    },
    "color-bg-surface-emphasis-hover": {
      value: U[4],
      description: "The hover state color for elements indicating areas of focus in editors.",
    },
    "color-bg-surface-emphasis-active": {
      value: U[5],
      description: "The active state (on press) color for elements indicating areas of focus in editors.",
    },
    "color-bg-surface-magic": { value: Y[2], description: "Use for backgrounds of elements suggested by magic AI." },
    "color-bg-surface-magic-hover": { value: Y[3], description: "The hover state color for elements suggested by magic AI." },
    "color-bg-surface-magic-active": { value: Y[5], description: "The active state (on press) color for elements suggested by magic AI." },
    "color-bg-surface-inverse": { value: d[15], description: "Use for elements on bg-inverse." },
    "color-bg-surface-transparent": { value: Z[1], description: "Use for elements that need a fully transparent background." },
    "color-bg-fill": { value: d[1], description: "The background color of contained elements with a smaller surface area, like a button." },
    "color-bg-fill-hover": {
      value: d[3],
      description: "The hover state color of contained elements with a smaller surface area, like a button.",
    },
    "color-bg-fill-active": {
      value: d[4],
      description: "The active state (on press) color of contained elements with a smaller surface area, like a button.",
    },
    "color-bg-fill-selected": {
      value: d[10],
      description: "The selected state color of contained elements with a smaller surface area, like a button or checkbox.",
    },
    "color-bg-fill-disabled": {
      value: Z[5],
      description: "The disabled state color of contained elements with a smaller surface area, like a button.",
    },
    "color-bg-fill-secondary": {
      value: d[6],
      description: "The background color of elements with a smaller surface area and a secondary level of prominence.",
    },
    "color-bg-fill-secondary-hover": {
      value: d[7],
      description: "The hover state color of elements with a smaller surface area and a secondary level of prominence.",
    },
    "color-bg-fill-secondary-active": {
      value: d[8],
      description: "The active state (on press) color of elements with a smaller surface area and a secondary level of prominence.",
    },
    "color-bg-fill-tertiary": {
      value: d[8],
      description: "The background color of elements with a smaller surface area and a third level of prominence.",
    },
    "color-bg-fill-tertiary-hover": {
      value: d[9],
      description: "The hover state color of elements with a smaller surface area and a third level of prominence.",
    },
    "color-bg-fill-tertiary-active": {
      value: d[10],
      description: "The active state (on press) color of elements with a smaller surface area and a third level of prominence.",
    },
    "color-bg-fill-brand": { value: d[15], description: "The background color of main actions, like primary buttons." },
    "color-bg-fill-brand-hover": { value: d[16], description: "The hover state color of main actions, like primary buttons." },
    "color-bg-fill-brand-active": { value: d[16], description: "The active state (on press) color of main actions, like primary buttons." },
    "color-bg-fill-brand-selected": { value: d[15], description: "The selected state color of main actions, like primary buttons." },
    "color-bg-fill-brand-disabled": { value: Z[9], description: "The disabled state color of main actions, like primary buttons." },
    "color-bg-fill-info": {
      value: V[9],
      description:
        "Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button.",
    },
    "color-bg-fill-info-hover": {
      value: V[10],
      description: "The hover state color for communicating important information on elements with a smaller surface area.",
    },
    "color-bg-fill-info-active": {
      value: V[11],
      description: "The active state (on press) color for communicating important information on elements with a smaller surface area.",
    },
    "color-bg-fill-info-secondary": {
      value: V[5],
      description:
        "Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence.",
    },
    "color-bg-fill-success": {
      value: q[12],
      description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner.",
    },
    "color-bg-fill-success-hover": {
      value: q[13],
      description: "The hover state color for communicating success on elements with a smaller surface area.",
    },
    "color-bg-fill-success-active": {
      value: q[14],
      description: "The active state (on press) color for communicating success on elements with a smaller surface area.",
    },
    "color-bg-fill-success-secondary": {
      value: q[4],
      description:
        "Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence.",
    },
    "color-bg-fill-warning": {
      value: oe[9],
      description: "Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner.",
    },
    "color-bg-fill-warning-hover": {
      value: oe[10],
      description: "The hover state color for communicating warning on elements with a smaller surface area.",
    },
    "color-bg-fill-warning-active": {
      value: oe[11],
      description: "The active state (on press) color for communicating warning on elements with a smaller surface area.",
    },
    "color-bg-fill-warning-secondary": {
      value: oe[7],
      description:
        "Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence.",
    },
    "color-bg-fill-caution": {
      value: ae[6],
      description: "Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner.",
    },
    "color-bg-fill-caution-hover": {
      value: ae[8],
      description: "The hover state color for communicating caution on elements with a smaller surface area.",
    },
    "color-bg-fill-caution-active": {
      value: ae[9],
      description: "The active state (on press) color for communicating caution on elements with a smaller surface area.",
    },
    "color-bg-fill-caution-secondary": {
      value: ae[5],
      description:
        "Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence.",
    },
    "color-bg-fill-critical": {
      value: X[12],
      description:
        "Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner.",
    },
    "color-bg-fill-critical-hover": {
      value: X[13],
      description: "The hover state color for communicating critical information on elements with a smaller surface area.",
    },
    "color-bg-fill-critical-active": {
      value: X[14],
      description: "The active state (on press) color for communicating critical information on elements with a smaller surface area.",
    },
    "color-bg-fill-critical-selected": {
      value: X[14],
      description: "The selected state color for communicating critical information on elements with a smaller surface area.",
    },
    "color-bg-fill-critical-secondary": {
      value: X[7],
      description:
        "Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence.",
    },
    "color-bg-fill-emphasis": {
      value: U[13],
      description:
        "Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge.",
    },
    "color-bg-fill-emphasis-hover": {
      value: U[14],
      description: "The hover state color for indicating areas of focus in editors on elements with a smaller surface area.",
    },
    "color-bg-fill-emphasis-active": {
      value: U[15],
      description: "The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area.",
    },
    "color-bg-fill-magic": {
      value: Y[12],
      description: "The background color of elements suggested by magic AI, like a badge or a banner.",
    },
    "color-bg-fill-magic-secondary": {
      value: Y[5],
      description: "The background color of elements suggested by magic AI, with a secondary level of prominence.",
    },
    "color-bg-fill-magic-secondary-hover": {
      value: Y[6],
      description: "The hover state color of elements suggested by magic AI, with a secondary level of prominence.",
    },
    "color-bg-fill-magic-secondary-active": {
      value: Y[7],
      description: "The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence.",
    },
    "color-bg-fill-inverse": {
      value: d[15],
      description: "The background color of elements with a smaller surface area on an inverse background.",
    },
    "color-bg-fill-inverse-hover": {
      value: d[14],
      description: "The hover state color of elements with a smaller surface area on an inverse background.",
    },
    "color-bg-fill-inverse-active": {
      value: d[13],
      description: "The active state (on press) color of elements with a smaller surface area on an inverse background.",
    },
    "color-bg-fill-transparent": {
      value: Z[3],
      description: "The background color of elements that need to sit on different background colors, like tabs.",
    },
    "color-bg-fill-transparent-hover": {
      value: Z[5],
      description: "The hover state color of elements that need to sit on different background colors, like tabs.",
    },
    "color-bg-fill-transparent-active": {
      value: Z[7],
      description: "The active state (on press) color of elements that need to sit on different background colors, like tabs.",
    },
    "color-bg-fill-transparent-selected": {
      value: Z[7],
      description: "The selected state color of elements that need to sit on different background colors, like tabs.",
    },
    "color-bg-fill-transparent-secondary": {
      value: Z[6],
      description:
        "The background color of elements that need to sit on different background colors, with a secondary level of prominence.",
    },
    "color-bg-fill-transparent-secondary-hover": {
      value: Z[7],
      description:
        "The hover state color of elements that need to sit on different background colors, with a secondary level of prominence.",
    },
    "color-bg-fill-transparent-secondary-active": {
      value: Z[8],
      description:
        "The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence.",
    },
    "color-text": { value: d[15], description: "The default text color." },
    "color-text-secondary": { value: d[13], description: "Use for text with a secondary level of prominence." },
    "color-text-disabled": { value: d[11], description: "Use for text in a disabled state." },
    "color-text-link": { value: U[13], description: "Use for text links." },
    "color-text-link-hover": { value: U[14], description: "The hover state color for text links." },
    "color-text-link-active": { value: U[15], description: "The active state (on press) color for text links." },
    "color-text-brand": { value: d[14], description: "Use for text that needs to pull attention." },
    "color-text-brand-hover": { value: d[15], description: "The hover state color for text that needs to pull attention." },
    "color-text-brand-on-bg-fill": { value: d[1], description: "Use for text on bg-fill-brand, like primary buttons." },
    "color-text-brand-on-bg-fill-hover": { value: d[8], description: "The hover state color for text on bg-fill-brand-hover." },
    "color-text-brand-on-bg-fill-active": { value: d[10], description: "The active state (on press) color for text on bg-fill-brand." },
    "color-text-brand-on-bg-fill-disabled": { value: d[1], description: "The disabled state color for text on bg-fill-brand-disabled." },
    "color-text-info": { value: V[15], description: "Use for text communicating important information." },
    "color-text-info-hover": { value: V[15], description: "The hover state color for text communicating important information." },
    "color-text-info-active": {
      value: V[16],
      description: "The active state (on press) color for text communicating important information.",
    },
    "color-text-info-secondary": {
      value: V[12],
      description: "Use for text communicating important information with a secondary level of prominence.",
    },
    "color-text-info-on-bg-fill": { value: V[16], description: "Use for text and icons on bg-fill-info." },
    "color-text-success": { value: q[14], description: "Use for text communicating success." },
    "color-text-success-hover": { value: q[15], description: "The hover state color for text communicating success." },
    "color-text-success-active": { value: q[16], description: "The active state (on press) color for text communicating success." },
    "color-text-success-secondary": {
      value: q[12],
      description: "Use for text communicating success with a secondary level of prominence.",
    },
    "color-text-success-on-bg-fill": { value: q[1], description: "Use for text and icons on bg-fill-success." },
    "color-text-caution": { value: ae[14], description: "Use for text communicating caution." },
    "color-text-caution-hover": { value: ae[15], description: "The hover state color for text communicating caution." },
    "color-text-caution-active": { value: ae[16], description: "The active state (on press) color for text communicating caution." },
    "color-text-caution-secondary": {
      value: ae[12],
      description: "Use for text communicating caution with a secondary level of prominence.",
    },
    "color-text-caution-on-bg-fill": { value: ae[15], description: "Use for text and icons on bg-fill-caution." },
    "color-text-warning": { value: oe[14], description: "Use for text communicating warning." },
    "color-text-warning-hover": { value: oe[15], description: "The hover state color for text communicating warning." },
    "color-text-warning-active": { value: oe[16], description: "The active state (on press) color for text communicating warning." },
    "color-text-warning-secondary": {
      value: oe[12],
      description: "Use for text communicating warning with a secondary level of prominence.",
    },
    "color-text-warning-on-bg-fill": { value: oe[16], description: "Use for text and icons on bg-fill-warning." },
    "color-text-critical": { value: X[14], description: "Use for text communicating critical information." },
    "color-text-critical-hover": { value: X[15], description: "The hover state color for text communicating critical information." },
    "color-text-critical-active": {
      value: X[16],
      description: "The active state (on press) color for text communicating critical information.",
    },
    "color-text-critical-secondary": {
      value: X[12],
      description: "Use for text communicating critical information with a secondary level of prominence.",
    },
    "color-text-critical-on-bg-fill": { value: X[1], description: "Use for text and icons on bg-fill-critical." },
    "color-text-emphasis": { value: U[13], description: "Use for text indicating areas of focus in editors, like the theme editor." },
    "color-text-emphasis-hover": { value: U[14], description: "The hover state color for text indicating areas of focus." },
    "color-text-emphasis-active": { value: U[15], description: "The active state (on press) color for text indicating areas of focus." },
    "color-text-emphasis-on-bg-fill": { value: U[1], description: "Use for text and icons on bg-fill-emphasis." },
    "color-text-emphasis-on-bg-fill-hover": { value: U[5], description: "Use for text and icons on bg-fill-emphasis-hover." },
    "color-text-emphasis-on-bg-fill-active": { value: U[7], description: "Use for text and icons on bg-fill-emphasis-active." },
    "color-text-magic": { value: Y[14], description: "Use for text suggested by magic AI." },
    "color-text-magic-secondary": { value: Y[13], description: "Use for text suggested by magic AI with a secondary level of prominence." },
    "color-text-magic-on-bg-fill": { value: Y[1], description: "Use for text and icons on bg-fill-magic." },
    "color-text-inverse": { value: d[8], description: "Use for text on an inverse background." },
    "color-text-inverse-secondary": { value: d[11], description: "Use for secondary text on an inverse background." },
    "color-text-link-inverse": { value: U[8], description: "Use for text links on an inverse background." },
    "color-border": { value: d[8], description: "The default color for borders on any element." },
    "color-border-hover": { value: d[10], description: "The hover color for borders on any element." },
    "color-border-disabled": { value: d[7], description: "The disabled color for borders on any element." },
    "color-border-secondary": { value: d[7], description: "The color for hr elements or any visual dividers." },
    "color-border-tertiary": {
      value: d[10],
      description: "The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary.",
    },
    "color-border-focus": { value: U[13], description: "The focus ring for any interactive element in a focused state." },
    "color-border-brand": { value: d[8], description: "Use for borders paired with brand colors." },
    "color-border-info": { value: V[8], description: "Use for borders communicating information." },
    "color-border-success": { value: q[5], description: "Use for borders communicating success." },
    "color-border-caution": { value: ae[5], description: "Use for borders communicating caution." },
    "color-border-warning": { value: oe[8], description: "Use for borders communicating warning." },
    "color-border-critical": { value: X[8], description: "Use for borders communicating critical information." },
    "color-border-critical-secondary": {
      value: X[14],
      description: "Use for borders communicating critical information, such as borders on invalid text fields.",
    },
    "color-border-emphasis": { value: U[13], description: "Use for borders indicating areas of focus." },
    "color-border-emphasis-hover": { value: U[14], description: "The hover state color for borders indicating areas of focus." },
    "color-border-emphasis-active": {
      value: U[15],
      description: "The active state (on press) color for borders indicating areas of focus.",
    },
    "color-border-magic": { value: Y[6], description: "Use for borders suggested by magic AI." },
    "color-border-magic-secondary": { value: Y[11], description: "Use for borders suggested by magic AI, such as borders on text fields." },
    "color-border-magic-secondary-hover": {
      value: Y[12],
      description: "Use for borders suggested by magic AI, such as borders on text fields.",
    },
    "color-border-inverse": {
      value: d[13],
      description: "Use for borders on an inverse background, such as borders on the global search.",
    },
    "color-border-inverse-hover": { value: d[10], description: "The hover state color for borders on an inverse background." },
    "color-border-inverse-active": { value: d[8], description: "The active state (on press) color for borders on an inverse background." },
    "color-tooltip-tail-down-border-experimental": { value: d[9], description: "The border color for tooltip tails pointing down." },
    "color-tooltip-tail-up-border-experimental": { value: d[8], description: "The border color for tooltip tails pointing up." },
    "color-border-gradient-experimental": { value: "linear-gradient(to bottom, " + d[7] + ", " + d[10] + " 78%, " + d[11] + ")" },
    "color-border-gradient-hover-experimental": { value: "linear-gradient(to bottom, " + d[7] + ", " + d[10] + " 78%, " + d[11] + ")" },
    "color-border-gradient-selected-experimental": { value: "linear-gradient(to bottom, " + d[7] + ", " + d[10] + " 78%, " + d[11] + ")" },
    "color-border-gradient-active-experimental": { value: "linear-gradient(to bottom, " + d[7] + ", " + d[10] + " 78%, " + d[11] + ")" },
    "color-icon": { value: d[14], description: "The default color for icons." },
    "color-icon-hover": { value: d[15], description: "The hover state color for icons." },
    "color-icon-active": { value: d[16], description: "The active state (on press) color for icons." },
    "color-icon-disabled": { value: d[10], description: "The disabled state color for icons." },
    "color-icon-secondary": { value: d[12], description: "Use for secondary icons." },
    "color-icon-secondary-hover": { value: d[13], description: "The hover state color for secondary icons." },
    "color-icon-secondary-active": { value: d[14], description: "The active state (on press) color for secondary icons." },
    "color-icon-brand": { value: d[16], description: "Use for icons that need to pull more focus." },
    "color-icon-info": { value: V[11], description: "Use for icons communicating information." },
    "color-icon-success": { value: q[12], description: "Use for icons communicating success." },
    "color-icon-caution": { value: ae[11], description: "Use for icons communicating caution." },
    "color-icon-warning": { value: oe[11], description: "Use for icons communicating warning." },
    "color-icon-critical": { value: X[11], description: "Use for icons communicating critical information." },
    "color-icon-emphasis": { value: U[13], description: "Use for icons indicating areas of focus in editors, like the theme editor." },
    "color-icon-emphasis-hover": { value: U[14], description: "The hover color for icons indicating areas of focus in editors." },
    "color-icon-emphasis-active": {
      value: U[15],
      description: "The active state (on press) color for icons indicating areas of focus in editors.",
    },
    "color-icon-magic": { value: Y[12], description: "Use for icons suggested by magic AI." },
    "color-icon-inverse": { value: d[8], description: "Use for icons on an inverse background." },
    "color-avatar-bg-fill": { value: d[11] },
    "color-avatar-five-bg-fill": { value: jt[11] },
    "color-avatar-five-text-on-bg-fill": { value: jt[2] },
    "color-avatar-four-bg-fill": { value: V[10] },
    "color-avatar-four-text-on-bg-fill": { value: V[16] },
    "color-avatar-one-bg-fill": { value: $t[12] },
    "color-avatar-one-text-on-bg-fill": { value: $t[3] },
    "color-avatar-seven-bg-fill": { value: Y[11] },
    "color-avatar-seven-text-on-bg-fill": { value: Y[2] },
    "color-avatar-six-bg-fill": { value: Dt[9] },
    "color-avatar-six-text-on-bg-fill": { value: Dt[15] },
    "color-avatar-text-on-bg-fill": { value: d[1] },
    "color-avatar-three-bg-fill": { value: Wt[9] },
    "color-avatar-three-text-on-bg-fill": { value: Wt[15] },
    "color-avatar-two-bg-fill": { value: q[7] },
    "color-avatar-two-text-on-bg-fill": { value: q[14] },
    "color-backdrop-bg": { value: Z[14] },
    "color-button-gradient-bg-fill": { value: "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)" },
    "color-checkbox-bg-surface-disabled": { value: Z[7] },
    "color-checkbox-icon-disabled": { value: d[1] },
    "color-input-bg-surface": { value: d[2] },
    "color-input-bg-surface-hover": { value: d[3] },
    "color-input-bg-surface-active": { value: d[4] },
    "color-input-border": { value: d[12] },
    "color-input-border-hover": { value: d[13] },
    "color-input-border-active": { value: d[16] },
    "color-nav-bg": { value: d[7] },
    "color-nav-bg-surface": { value: Z[3] },
    "color-nav-bg-surface-hover": { value: d[6] },
    "color-nav-bg-surface-active": { value: d[3] },
    "color-nav-bg-surface-selected": { value: d[3] },
    "color-radio-button-bg-surface-disabled": { value: Z[7] },
    "color-radio-button-icon-disabled": { value: d[1] },
    "color-video-thumbnail-play-button-bg-fill-hover": { value: Z[15] },
    "color-video-thumbnail-play-button-bg-fill": { value: Z[14] },
    "color-video-thumbnail-play-button-text-on-bg-fill": { value: d[1] },
    "color-scrollbar-thumb-bg-hover": { value: d[12] },
  },
  Bn = {
    "font-family-sans": {
      value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    },
    "font-family-mono": { value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace" },
    "font-size-275": { value: b[275] },
    "font-size-300": { value: b[300] },
    "font-size-325": { value: b[325] },
    "font-size-350": { value: b[350] },
    "font-size-400": { value: b[400] },
    "font-size-450": { value: b[450] },
    "font-size-500": { value: b[500] },
    "font-size-550": { value: b[550] },
    "font-size-600": { value: b[600] },
    "font-size-750": { value: b[750] },
    "font-size-800": { value: b[800] },
    "font-size-900": { value: b[900] },
    "font-size-1000": { value: b[1e3] },
    "font-weight-regular": { value: "450" },
    "font-weight-medium": { value: "550" },
    "font-weight-semibold": { value: "650" },
    "font-weight-bold": { value: "700" },
    "font-letter-spacing-densest": { value: "-0.54px" },
    "font-letter-spacing-denser": { value: "-0.3px" },
    "font-letter-spacing-dense": { value: "-0.2px" },
    "font-letter-spacing-normal": { value: "0px" },
    "font-line-height-300": { value: b[300] },
    "font-line-height-400": { value: b[400] },
    "font-line-height-500": { value: b[500] },
    "font-line-height-600": { value: b[600] },
    "font-line-height-700": { value: b[700] },
    "font-line-height-800": { value: b[800] },
    "font-line-height-1000": { value: b[1e3] },
    "font-line-height-1200": { value: b[1200] },
  },
  Nn = {
    "height-0": { value: b[0] },
    "height-025": { value: b["025"] },
    "height-050": { value: b["050"] },
    "height-100": { value: b[100] },
    "height-150": { value: b[150] },
    "height-200": { value: b[200] },
    "height-300": { value: b[300] },
    "height-400": { value: b[400] },
    "height-500": { value: b[500] },
    "height-600": { value: b[600] },
    "height-700": { value: b[700] },
    "height-800": { value: b[800] },
    "height-900": { value: b[900] },
    "height-1000": { value: b[1e3] },
    "height-1200": { value: b[1200] },
    "height-1600": { value: b[1600] },
    "height-2000": { value: b[2e3] },
    "height-2400": { value: b[2400] },
    "height-2800": { value: b[2800] },
    "height-3200": { value: b[3200] },
  },
  Mn = {
    "motion-duration-0": { value: "0ms" },
    "motion-duration-50": { value: "50ms" },
    "motion-duration-100": { value: "100ms" },
    "motion-duration-150": { value: "150ms" },
    "motion-duration-200": { value: "200ms" },
    "motion-duration-250": { value: "250ms" },
    "motion-duration-300": { value: "300ms" },
    "motion-duration-350": { value: "350ms" },
    "motion-duration-400": { value: "400ms" },
    "motion-duration-450": { value: "450ms" },
    "motion-duration-500": { value: "500ms" },
    "motion-duration-5000": { value: "5000ms" },
    "motion-ease": {
      value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      description: "Responds quickly and finishes with control. A great default for any user interaction.",
    },
    "motion-ease-in": { value: "cubic-bezier(0.42, 0, 1, 1)", description: "Starts slowly and finishes at top speed. Use sparingly." },
    "motion-ease-out": {
      value: "cubic-bezier(0.19, 0.91, 0.38, 1)",
      description: "Starts at top speed and finishes slowly. Use sparingly.",
    },
    "motion-ease-in-out": {
      value: "cubic-bezier(0.42, 0, 0.58, 1)",
      description: "Starts and finishes with equal speed. A good default for transitions triggered by the system.",
    },
    "motion-linear": {
      value: "cubic-bezier(0, 0, 1, 1)",
      description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners.",
    },
    "motion-keyframes-bounce": {
      value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
    },
    "motion-keyframes-fade-in": { value: "{ to { opacity: 1 } }" },
    "motion-keyframes-pulse": { value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }" },
    "motion-keyframes-spin": { value: "{ to { transform: rotate(1turn) } }" },
    "motion-keyframes-appear-above": {
      value: "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
    },
    "motion-keyframes-appear-below": {
      value: "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
    },
  },
  Fn = {
    "shadow-0": { value: "none" },
    "shadow-100": { value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07)" },
    "shadow-200": { value: "0px 3px 1px -1px rgba(26, 26, 26, 0.07)" },
    "shadow-300": { value: "0px 4px 6px -2px rgba(26, 26, 26, 0.20)" },
    "shadow-400": { value: "0px 8px 16px -4px rgba(26, 26, 26, 0.22)" },
    "shadow-500": { value: "0px 12px 20px -8px rgba(26, 26, 26, 0.24)" },
    "shadow-600": { value: "0px 20px 20px -8px rgba(26, 26, 26, 0.28)" },
    "shadow-bevel-100": {
      value:
        "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset",
    },
    "shadow-inset-100": { value: "0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset" },
    "shadow-inset-200": {
      value:
        "0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset",
    },
    "shadow-button": { value: "0px -1px 0px 0px #b5b5b5 inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset, 0px 0.5px 0px 1.5px #FFF inset" },
    "shadow-button-hover": {
      value: "0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset",
    },
    "shadow-button-inset": {
      value:
        "-1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 0px 2px 1px 0px rgba(26, 26, 26, 0.2) inset",
    },
    "shadow-button-primary": {
      value:
        "0px -1px 0px 1px rgba(0, 0, 0, 0.8) inset, 0px 0px 0px 1px rgba(48, 48, 48, 1) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.25) inset;",
    },
    "shadow-button-primary-hover": {
      value:
        "0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A",
    },
    "shadow-button-primary-inset": { value: "0px 3px 0px 0px rgb(0, 0, 0) inset" },
    "shadow-button-primary-critical": {
      value:
        "0px -1px 0px 1px rgba(142, 31, 11, 0.8) inset, 0px 0px 0px 1px rgba(181, 38, 11, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.349) inset",
    },
    "shadow-button-primary-critical-hover": {
      value:
        "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset",
    },
    "shadow-button-primary-critical-inset": {
      value:
        "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset",
    },
    "shadow-button-primary-success": {
      value:
        "0px -1px 0px 1px rgba(12, 81, 50, 0.8) inset, 0px 0px 0px 1px rgba(19, 111, 69, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.251) inset",
    },
    "shadow-button-primary-success-hover": {
      value:
        "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset",
    },
    "shadow-button-primary-success-inset": {
      value:
        "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset",
    },
    "shadow-border-inset": { value: "0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset" },
  },
  zn = {
    "space-0": { value: b[0] },
    "space-025": { value: b["025"] },
    "space-050": { value: b["050"] },
    "space-100": { value: b[100] },
    "space-150": { value: b[150] },
    "space-200": { value: b[200] },
    "space-300": { value: b[300] },
    "space-400": { value: b[400] },
    "space-500": { value: b[500] },
    "space-600": { value: b[600] },
    "space-800": { value: b[800] },
    "space-1000": { value: b[1e3] },
    "space-1200": { value: b[1200] },
    "space-1600": { value: b[1600] },
    "space-2000": { value: b[2e3] },
    "space-2400": { value: b[2400] },
    "space-2800": { value: b[2800] },
    "space-3200": { value: b[3200] },
    "space-button-group-gap": { value: hr("space-200") },
    "space-card-gap": { value: hr("space-400") },
    "space-card-padding": { value: hr("space-400") },
    "space-table-cell-padding": { value: hr("space-150") },
  };
function hr(e) {
  return "var(" + xo(e) + ")";
}
var An = {
    "text-heading-3xl-font-family": { value: h("font-family-sans") },
    "text-heading-3xl-font-size": { value: h("font-size-900") },
    "text-heading-3xl-font-weight": { value: h("font-weight-bold") },
    "text-heading-3xl-font-letter-spacing": { value: h("font-letter-spacing-densest") },
    "text-heading-3xl-font-line-height": { value: h("font-line-height-1200") },
    "text-heading-2xl-font-family": { value: h("font-family-sans") },
    "text-heading-2xl-font-size": { value: h("font-size-750") },
    "text-heading-2xl-font-weight": { value: h("font-weight-bold") },
    "text-heading-2xl-font-letter-spacing": { value: h("font-letter-spacing-denser") },
    "text-heading-2xl-font-line-height": { value: h("font-line-height-1000") },
    "text-heading-xl-font-family": { value: h("font-family-sans") },
    "text-heading-xl-font-size": { value: h("font-size-600") },
    "text-heading-xl-font-weight": { value: h("font-weight-bold") },
    "text-heading-xl-font-letter-spacing": { value: h("font-letter-spacing-dense") },
    "text-heading-xl-font-line-height": { value: h("font-line-height-800") },
    "text-heading-lg-font-family": { value: h("font-family-sans") },
    "text-heading-lg-font-size": { value: h("font-size-500") },
    "text-heading-lg-font-weight": { value: h("font-weight-semibold") },
    "text-heading-lg-font-letter-spacing": { value: h("font-letter-spacing-dense") },
    "text-heading-lg-font-line-height": { value: h("font-line-height-600") },
    "text-heading-md-font-family": { value: h("font-family-sans") },
    "text-heading-md-font-size": { value: h("font-size-350") },
    "text-heading-md-font-weight": { value: h("font-weight-semibold") },
    "text-heading-md-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-heading-md-font-line-height": { value: h("font-line-height-500") },
    "text-heading-sm-font-family": { value: h("font-family-sans") },
    "text-heading-sm-font-size": { value: h("font-size-325") },
    "text-heading-sm-font-weight": { value: h("font-weight-semibold") },
    "text-heading-sm-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-heading-sm-font-line-height": { value: h("font-line-height-500") },
    "text-heading-xs-font-family": { value: h("font-family-sans") },
    "text-heading-xs-font-size": { value: h("font-size-300") },
    "text-heading-xs-font-weight": { value: h("font-weight-semibold") },
    "text-heading-xs-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-heading-xs-font-line-height": { value: h("font-line-height-400") },
    "text-body-lg-font-family": { value: h("font-family-sans") },
    "text-body-lg-font-size": { value: h("font-size-350") },
    "text-body-lg-font-weight": { value: h("font-weight-regular") },
    "text-body-lg-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-body-lg-font-line-height": { value: h("font-line-height-500") },
    "text-body-md-font-family": { value: h("font-family-sans") },
    "text-body-md-font-size": { value: h("font-size-325") },
    "text-body-md-font-weight": { value: h("font-weight-regular") },
    "text-body-md-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-body-md-font-line-height": { value: h("font-line-height-500") },
    "text-body-sm-font-family": { value: h("font-family-sans") },
    "text-body-sm-font-size": { value: h("font-size-300") },
    "text-body-sm-font-weight": { value: h("font-weight-regular") },
    "text-body-sm-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-body-sm-font-line-height": { value: h("font-line-height-400") },
    "text-body-xs-font-family": { value: h("font-family-sans") },
    "text-body-xs-font-size": { value: h("font-size-275") },
    "text-body-xs-font-weight": { value: h("font-weight-regular") },
    "text-body-xs-font-letter-spacing": { value: h("font-letter-spacing-normal") },
    "text-body-xs-font-line-height": { value: h("font-line-height-300") },
  },
  _n = {
    "width-0": { value: b[0] },
    "width-025": { value: b["025"] },
    "width-050": { value: b["050"] },
    "width-100": { value: b[100] },
    "width-150": { value: b[150] },
    "width-200": { value: b[200] },
    "width-300": { value: b[300] },
    "width-400": { value: b[400] },
    "width-500": { value: b[500] },
    "width-600": { value: b[600] },
    "width-700": { value: b[700] },
    "width-800": { value: b[800] },
    "width-900": { value: b[900] },
    "width-1000": { value: b[1e3] },
    "width-1200": { value: b[1200] },
    "width-1600": { value: b[1600] },
    "width-2000": { value: b[2e3] },
    "width-2400": { value: b[2400] },
    "width-2800": { value: b[2800] },
    "width-3200": { value: b[3200] },
  },
  Ln = {
    "z-index-0": { value: "auto" },
    "z-index-1": { value: "100" },
    "z-index-2": { value: "400" },
    "z-index-3": { value: "510" },
    "z-index-4": { value: "512" },
    "z-index-5": { value: "513" },
    "z-index-6": { value: "514" },
    "z-index-7": { value: "515" },
    "z-index-8": { value: "516" },
    "z-index-9": { value: "517" },
    "z-index-10": { value: "518" },
    "z-index-11": { value: "519" },
    "z-index-12": { value: "520" },
  },
  ko = dn({
    border: Tn,
    breakpoints: Qa,
    color: Cn,
    font: Bn,
    height: Nn,
    motion: Mn,
    shadow: Fn,
    space: zn,
    text: An,
    width: _n,
    zIndex: Ln,
  });
function Cr(e) {
  return Object.fromEntries(
    Object.entries(e).map(function (r) {
      var t = Tr(r, 2),
        o = t[0],
        a = t[1];
      return [o, a && yo.includes(o) ? vo(a) : a];
    })
  );
}
function dr(e) {
  return In(ko, e);
}
function So(e) {
  return "p-theme-" + e;
}
function Eo(e) {
  var r = new Set(sn(e));
  return function (t) {
    return r.has(t);
  };
}
Eo(ko);
var Po = "light",
  Ve = Po,
  On = [Po, "light-mobile", "light-high-contrast-experimental", "dark-experimental"],
  Io = Cr({});
dr(Io);
var To = Cr({
  color: {
    "color-text": { value: d[16] },
    "color-text-secondary": { value: d[16] },
    "color-text-brand": { value: d[16] },
    "color-icon-secondary": { value: d[14] },
    "color-border": { value: d[12] },
    "color-input-border": { value: d[14] },
    "color-border-secondary": { value: d[12] },
    "color-bg-surface-secondary": { value: d[6] },
  },
  shadow: {
    "shadow-bevel-100": {
      value:
        "0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 0px 0px rgba(208, 208, 208, 0.40) inset, 1px 0px 0px 0px #CCC inset, -1px 0px 0px 0px #CCC inset, 0px -1px 0px 0px #999 inset",
    },
  },
});
dr(To);
var jr = "0 0 0 " + h("border-width-025") + " " + h("color-border") + " inset",
  Co = Cr({
    color: { "color-button-gradient-bg-fill": { value: "none" } },
    shadow: {
      "shadow-100": { value: "none" },
      "shadow-bevel-100": { value: "none" },
      "shadow-button": { value: jr },
      "shadow-button-hover": { value: jr },
      "shadow-button-inset": { value: jr },
      "shadow-button-primary": { value: "none" },
      "shadow-button-primary-hover": { value: "none" },
      "shadow-button-primary-inset": { value: "none" },
      "shadow-button-primary-critical": { value: "none" },
      "shadow-button-primary-critical-hover": { value: "none" },
      "shadow-button-primary-critical-inset": { value: "none" },
      "shadow-button-primary-success": { value: "none" },
      "shadow-button-primary-success-hover": { value: "none" },
      "shadow-button-primary-success-inset": { value: "none" },
    },
    space: { "space-card-gap": { value: h("space-200") } },
    text: {
      "text-heading-2xl-font-size": { value: h("font-size-800") },
      "text-heading-xl-font-size": { value: h("font-size-550") },
      "text-heading-xl-font-line-height": { value: h("font-line-height-700") },
      "text-heading-lg-font-size": { value: h("font-size-450") },
      "text-heading-md-font-size": { value: h("font-size-400") },
      "text-heading-sm-font-size": { value: h("font-size-350") },
      "text-body-lg-font-size": { value: h("font-size-450") },
      "text-body-lg-font-line-height": { value: h("font-line-height-700") },
      "text-body-md-font-size": { value: h("font-size-400") },
      "text-body-md-font-line-height": { value: h("font-line-height-600") },
      "text-body-sm-font-size": { value: h("font-size-350") },
      "text-body-sm-font-line-height": { value: h("font-line-height-500") },
      "text-body-xs-font-size": { value: h("font-size-300") },
      "text-body-xs-font-line-height": { value: h("font-line-height-400") },
    },
  });
dr(Co);
var Bo = Cr({
  color: {
    "color-scheme": { value: "dark" },
    "color-bg": { value: d[16] },
    "color-bg-surface": { value: d[15] },
    "color-bg-fill": { value: d[15] },
    "color-icon": { value: d[8] },
    "color-icon-secondary": { value: d[12] },
    "color-text": { value: d[8] },
    "color-text-secondary": { value: d[11] },
    "color-bg-surface-secondary-active": { value: d[13] },
    "color-bg-surface-secondary-hover": { value: d[14] },
    "color-bg-fill-transparent": { value: ge[8] },
    "color-bg-fill-brand": { value: d[1] },
    "color-text-brand-on-bg-fill": { value: d[15] },
    "color-bg-surface-hover": { value: d[14] },
    "color-bg-fill-hover": { value: d[14] },
    "color-bg-fill-transparent-hover": { value: ge[9] },
    "color-bg-fill-brand-hover": { value: d[5] },
    "color-bg-surface-selected": { value: d[13] },
    "color-bg-fill-selected": { value: d[13] },
    "color-bg-fill-transparent-selected": { value: ge[11] },
    "color-bg-fill-brand-selected": { value: d[9] },
    "color-bg-surface-active": { value: d[13] },
    "color-bg-fill-active": { value: d[13] },
    "color-bg-fill-transparent-active": { value: ge[10] },
    "color-bg-fill-brand-active": { value: d[4] },
    "color-bg-surface-brand-selected": { value: d[14] },
    "color-border-secondary": { value: d[13] },
    "color-tooltip-tail-down-border-experimental": { value: "rgba(60, 60, 60, 1)" },
    "color-tooltip-tail-up-border-experimental": { value: "rgba(71, 71, 71, 1)" },
    "color-border-gradient-experimental": { value: "linear-gradient(to bottom, " + ge[9] + ", " + ge[4] + ")" },
    "color-border-gradient-hover-experimental": { value: "linear-gradient(to bottom, " + ge[9] + ", " + ge[4] + ")" },
    "color-border-gradient-selected-experimental": { value: "linear-gradient(to bottom, " + Z[10] + ", " + ge[10] + ")" },
    "color-border-gradient-active-experimental": { value: "linear-gradient(to bottom, " + ge[10] + ", " + ge[4] + ")" },
  },
  shadow: {
    "shadow-bevel-100": {
      value:
        "1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, -1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px -1px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.16) inset",
    },
  },
});
dr(Bo);
var Rn = { light: Io, "light-mobile": Co, "light-high-contrast-experimental": To, "dark-experimental": Bo },
  Un = Rn[Ve];
dr(Un);
var it = {
    light: {
      border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem",
      },
      breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem",
      },
      color: {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      },
      font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem",
      },
      height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem",
      },
      motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce":
          "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above":
          "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below":
          "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
      },
      shadow: {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100":
          "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
        "shadow-inset-100":
          "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200":
          "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button":
          "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover":
          "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary":
          "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical":
          "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success":
          "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset",
      },
      space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem",
      },
      text: {
        "text-heading-3xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem",
      },
      width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem",
      },
      zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520",
      },
    },
    "light-mobile": {
      border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem",
      },
      breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem",
      },
      color: {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "none",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      },
      font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem",
      },
      height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem",
      },
      motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce":
          "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above":
          "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below":
          "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
      },
      shadow: {
        "shadow-0": "none",
        "shadow-100": "none",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100": "none",
        "shadow-inset-100":
          "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200":
          "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-hover": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-inset": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-primary": "none",
        "shadow-button-primary-hover": "none",
        "shadow-button-primary-inset": "none",
        "shadow-button-primary-critical": "none",
        "shadow-button-primary-critical-hover": "none",
        "shadow-button-primary-critical-inset": "none",
        "shadow-button-primary-success": "none",
        "shadow-button-primary-success-hover": "none",
        "shadow-button-primary-success-inset": "none",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset",
      },
      space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "0.5rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem",
      },
      text: {
        "text-heading-3xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "2rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.375rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "1.75rem",
        "text-heading-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.125rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "1rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.875rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "1.125rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.75rem",
        "text-body-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "1rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.5rem",
        "text-body-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.875rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1.25rem",
        "text-body-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.75rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "1rem",
      },
      width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem",
      },
      zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520",
      },
    },
    "light-high-contrast-experimental": {
      border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem",
      },
      breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem",
      },
      color: {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(26, 26, 26, 1)",
        "color-text-secondary": "rgba(26, 26, 26, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(26, 26, 26, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(138, 138, 138, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(138, 138, 138, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental":
          "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(74, 74, 74, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(74, 74, 74, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      },
      font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem",
      },
      height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem",
      },
      motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce":
          "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above":
          "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below":
          "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
      },
      shadow: {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100":
          "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
        "shadow-inset-100":
          "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200":
          "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button":
          "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover":
          "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary":
          "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical":
          "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success":
          "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset",
      },
      space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem",
      },
      text: {
        "text-heading-3xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem",
      },
      width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem",
      },
      zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520",
      },
    },
    "dark-experimental": {
      border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem",
      },
      breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem",
      },
      color: {
        "color-scheme": "dark",
        "color-bg": "rgba(26, 26, 26, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(48, 48, 48, 1)",
        "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
        "color-bg-surface-active": "rgba(97, 97, 97, 1)",
        "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(74, 74, 74, 1)",
        "color-bg-surface-secondary-active": "rgba(97, 97, 97, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(48, 48, 48, 1)",
        "color-bg-fill-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
        "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
        "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
        "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.17)",
        "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.20)",
        "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.28)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(227, 227, 227, 1)",
        "color-text-secondary": "rgba(181, 181, 181, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(97, 97, 97, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(60, 60, 60, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(71, 71, 71, 1)",
        "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
        "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
        "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(255, 255, 255, 0.20))",
        "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.03))",
        "color-icon": "rgba(227, 227, 227, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
      },
      font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem",
      },
      height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem",
      },
      motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce":
          "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above":
          "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below":
          "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
      },
      shadow: {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100":
          "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset",
        "shadow-inset-100":
          "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200":
          "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button":
          "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover":
          "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary":
          "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical":
          "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success":
          "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover":
          "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset":
          "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset",
      },
      space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem",
      },
      text: {
        "text-heading-3xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family":
          "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem",
      },
      width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem",
      },
      zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520",
      },
    },
  },
  lt = it[Ve];
Eo(it[Ve]);
const st = c.createContext(null),
  ct = c.createContext(null);
function No(e) {
  return it[e];
}
function Gl() {
  const e = c.useContext(st);
  if (!e)
    throw new Error(
      "No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions."
    );
  return e;
}
function Hn() {
  const e = c.useContext(ct);
  if (!e)
    throw new Error(
      "No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions."
    );
  return e;
}
function Mo(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function");
}
function C(...e) {
  return e.filter(Boolean).join(" ");
}
function D(e, r) {
  return `${e}${r.charAt(0).toUpperCase()}${r.slice(1)}`;
}
function gt(e) {
  const r = Object.entries(e).filter(([t, o]) => o != null);
  return r.length ? Object.fromEntries(r) : void 0;
}
function fe(e, r, t, o) {
  if (!o) return {};
  let a;
  return (
    Mo(o)
      ? (a = Object.fromEntries(Object.entries(o).map(([i, l]) => [i, `var(--p-${t}-${l})`])))
      : (a = { [fo[0]]: `var(--p-${t}-${o})` }),
    Object.fromEntries(Object.entries(a).map(([i, l]) => [`--pc-${e}-${r}-${i}`, l]))
  );
}
function Fo(e, r, t) {
  return t
    ? Mo(t)
      ? Object.fromEntries(Object.entries(t).map(([o, a]) => [`--pc-${e}-${r}-${o}`, a]))
      : { [`--pc-${e}-${r}-${fo[0]}`]: t }
    : {};
}
var Dn = { themeContainer: "Polaris-ThemeProvider--themeContainer" };
const $n = ["light", "dark-experimental"],
  jn = (e) => $n.includes(e);
function Wn(e) {
  const { as: r = "div", children: t, className: o, theme: a = Ve } = e;
  return n.createElement(
    ct.Provider,
    { value: a },
    n.createElement(
      st.Provider,
      { value: No(a) },
      n.createElement(r, { "data-portal-id": e["data-portal-id"], className: C(So(a), Dn.themeContainer, o) }, t)
    )
  );
}
const zo = c.createContext(!1),
  dt = typeof window > "u" || typeof document > "u",
  sr = dt ? c.useEffect : c.useLayoutEffect;
function Ao(e, r, t, o) {
  const a = c.useRef(r),
    i = c.useRef(o);
  sr(() => {
    a.current = r;
  }, [r]),
    sr(() => {
      i.current = o;
    }, [o]),
    c.useEffect(() => {
      if (!(typeof e == "string" && t !== null)) return;
      let l;
      if (typeof t > "u") l = window;
      else if ("current" in t) {
        if (t.current === null) return;
        l = t.current;
      } else l = t;
      const s = i.current,
        g = (m) => a.current(m);
      return (
        l.addEventListener(e, g, s),
        () => {
          l.removeEventListener(e, g, s);
        }
      );
    }, [e, t]);
}
const _o = { navigationBarCollapsed: "767.95px", stackedContent: "1039.95px" },
  Lo = {
    media: "",
    addListener: tr,
    removeListener: tr,
    matches: !1,
    onchange: tr,
    addEventListener: tr,
    removeEventListener: tr,
    dispatchEvent: (e) => !0,
  };
function tr() {}
function Wr() {
  return typeof window > "u" ? Lo : window.matchMedia(`(max-width: ${_o.navigationBarCollapsed})`);
}
function Zn() {
  return typeof window > "u" ? Lo : window.matchMedia(`(max-width: ${_o.stackedContent})`);
}
const wr = Gn(lt.breakpoints);
function Zt(e, r) {
  return Object.fromEntries(
    !dt && !r
      ? wr.map(([t, o]) => [t, window.matchMedia(o).matches])
      : typeof e == "object" && e !== null
      ? wr.map(([t]) => [t, e[t] ?? !1])
      : wr.map(([t]) => [t, e ?? !1])
  );
}
function mt(e) {
  const [r, t] = c.useState(Zt(e == null ? void 0 : e.defaults, !0));
  return (
    sr(() => {
      const o = wr.map(([i, l]) => window.matchMedia(l)),
        a = () => t(Zt());
      return (
        o.forEach((i) => {
          i.addListener ? i.addListener(a) : i.addEventListener("change", a);
        }),
        a(),
        () => {
          o.forEach((i) => {
            i.removeListener ? i.removeListener(a) : i.removeEventListener("change", a);
          });
        }
      );
    }, []),
    r
  );
}
function Gn(e) {
  return Object.entries(cn(e))
    .map(([t, o]) => Object.entries(o).map(([a, i]) => [`${t.split("-")[1]}${Vn(a)}`, i]))
    .flat();
}
function Vn(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pr(e, r, t) {
  let o,
    a,
    i,
    l,
    s,
    g,
    m = 0,
    u = !1,
    f = !1,
    v = !0;
  const p = !r && r !== 0;
  if (typeof e != "function") throw new TypeError("Expected a function");
  const y = r || 0;
  typeof t == "object" &&
    ((u = !!t.leading),
    (f = "maxWait" in t),
    (i = f ? Math.max(Number(t.maxWait) || 0, y) : void 0),
    (v = "trailing" in t ? !!t.trailing : v));
  function S(I) {
    const A = o,
      W = a;
    return (o = void 0), (a = void 0), (m = I), (l = e.apply(W, A)), l;
  }
  function w(I, A) {
    return p ? (cancelAnimationFrame(s), requestAnimationFrame(I)) : setTimeout(I, A);
  }
  function F(I) {
    if (p) return cancelAnimationFrame(I);
    clearTimeout(I);
  }
  function E(I) {
    return (m = I), (s = w(L, y)), u ? S(I) : l;
  }
  function O(I) {
    const A = I - g,
      W = I - m,
      K = y - A;
    return f && i ? Math.min(K, i - W) : K;
  }
  function _(I) {
    const A = I - g,
      W = I - m;
    return g === void 0 || A >= y || A < 0 || (f && i && W >= i);
  }
  function L() {
    const I = Date.now();
    if (_(I)) return N(I);
    s = w(L, O(I));
  }
  function N(I) {
    return (s = void 0), v && o ? S(I) : ((o = a = void 0), l);
  }
  function P() {
    s !== void 0 && F(s), (m = 0), (o = g = a = s = void 0);
  }
  function k() {
    return s === void 0 ? l : N(Date.now());
  }
  function B() {
    return s !== void 0;
  }
  function z(...I) {
    const A = Date.now(),
      W = _(A);
    if (((o = I), (a = this), (g = A), W)) {
      if (s === void 0) return E(g);
      if (f) return (s = w(L, y)), S(g);
    }
    return s === void 0 && (s = w(L, y)), l;
  }
  return (z.cancel = P), (z.flush = k), (z.pending = B), z;
}
class _e {
  static get zero() {
    return new _e();
  }
  constructor({ top: r = 0, left: t = 0, width: o = 0, height: a = 0 } = {}) {
    (this.top = r), (this.left = t), (this.width = o), (this.height = a);
  }
  get center() {
    return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
  }
}
function ve(e) {
  if (!(e instanceof Element)) return new _e({ width: window.innerWidth, height: window.innerHeight });
  const r = e.getBoundingClientRect();
  return new _e({ top: r.top, left: r.left, width: r.width, height: r.height });
}
const pr = 1e3 / 60;
class Oo {
  constructor(r) {
    (this.stickyItems = []),
      (this.stuckItems = []),
      (this.container = null),
      (this.topBarOffset = 0),
      (this.handleResize = Pr(
        () => {
          this.manageStickyItems();
        },
        pr,
        { leading: !0, trailing: !0, maxWait: pr }
      )),
      (this.handleScroll = Pr(
        () => {
          this.manageStickyItems();
        },
        pr,
        { leading: !0, trailing: !0, maxWait: pr }
      )),
      r && this.setContainer(r);
  }
  registerStickyItem(r) {
    this.stickyItems.push(r);
  }
  unregisterStickyItem(r) {
    const t = this.stickyItems.findIndex(({ stickyNode: o }) => r === o);
    this.stickyItems.splice(t, 1);
  }
  setContainer(r) {
    (this.container = r),
      Ro(r) && this.setTopBarOffset(r),
      this.container.addEventListener("scroll", this.handleScroll),
      window.addEventListener("resize", this.handleResize),
      this.manageStickyItems();
  }
  removeScrollListener() {
    this.container &&
      (this.container.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize));
  }
  manageStickyItems() {
    if (this.stickyItems.length <= 0) return;
    const r = this.container ? qn(this.container) : 0,
      t = ve(this.container).top + this.topBarOffset;
    this.stickyItems.forEach((o) => {
      const { handlePositioning: a } = o,
        { sticky: i, top: l, left: s, width: g } = this.evaluateStickyItem(o, r, t);
      this.updateStuckItems(o, i), a(i, l, s, g);
    });
  }
  evaluateStickyItem(r, t, o) {
    var w;
    const { stickyNode: a, placeHolderNode: i, boundingElement: l, offset: s, disableWhenStacked: g } = r;
    if (g && Zn().matches) return { sticky: !1, top: 0, left: 0, width: "auto" };
    const m = s ? this.getOffset(a) + parseInt(lt.space["space-500"], 10) : this.getOffset(a),
      u = t + m,
      f = i.getBoundingClientRect().top - o + t,
      v = o + m,
      p = i.getBoundingClientRect().width,
      y = i.getBoundingClientRect().left;
    let S;
    if (l == null) S = u >= f;
    else {
      const F = a.getBoundingClientRect().height || ((w = a.firstElementChild) == null ? void 0 : w.getBoundingClientRect().height) || 0,
        E = l.getBoundingClientRect().bottom - F + t - o;
      S = u >= f && u < E;
    }
    return { sticky: S, top: v, left: y, width: p };
  }
  updateStuckItems(r, t) {
    const { stickyNode: o } = r;
    t && !this.isNodeStuck(o) ? this.addStuckItem(r) : !t && this.isNodeStuck(o) && this.removeStuckItem(r);
  }
  addStuckItem(r) {
    this.stuckItems.push(r);
  }
  removeStuckItem(r) {
    const { stickyNode: t } = r,
      o = this.stuckItems.findIndex(({ stickyNode: a }) => t === a);
    this.stuckItems.splice(o, 1);
  }
  getOffset(r) {
    if (this.stuckItems.length === 0) return 0;
    let t = 0,
      o = 0;
    const a = this.stuckItems.length,
      i = ve(r);
    for (; o < a; ) {
      const l = this.stuckItems[o].stickyNode;
      if (l !== r) {
        const s = ve(l);
        Yn(i, s) || (t += ve(l).height);
      } else break;
      o++;
    }
    return t;
  }
  isNodeStuck(r) {
    return this.stuckItems.findIndex(({ stickyNode: o }) => r === o) >= 0;
  }
  setTopBarOffset(r) {
    const t = r.querySelector(`:not(${at.selector}) ${uo.selector}`);
    this.topBarOffset = t ? t.clientHeight : 0;
  }
}
function Ro(e) {
  return e === document;
}
function qn(e) {
  return Ro(e) ? document.body.scrollTop || document.documentElement.scrollTop : e.scrollTop;
}
function Yn(e, r) {
  const t = e.left,
    o = e.left + e.width,
    a = r.left;
  return r.left + r.width < t || o < a;
}
const Gt = "data-lock-scrolling",
  Vt = "data-lock-scrolling-hidden",
  qt = "data-lock-scrolling-wrapper";
let vr = 0;
function Xn() {
  const { body: e } = document;
  return e.scrollHeight > e.clientHeight;
}
class Qn {
  constructor() {
    (this.scrollLocks = 0), (this.locked = !1);
  }
  registerScrollLock() {
    (this.scrollLocks += 1), this.handleScrollLocking();
  }
  unregisterScrollLock() {
    (this.scrollLocks -= 1), this.handleScrollLocking();
  }
  handleScrollLocking() {
    if (dt) return;
    const { scrollLocks: r } = this,
      { body: t } = document,
      o = t.firstElementChild;
    r === 0
      ? (t.removeAttribute(Gt), t.removeAttribute(Vt), o && o.removeAttribute(qt), window.scroll(0, vr), (this.locked = !1))
      : r > 0 &&
        !this.locked &&
        ((vr = window.pageYOffset),
        t.setAttribute(Gt, ""),
        Xn() || t.setAttribute(Vt, ""),
        o && (o.setAttribute(qt, ""), (o.scrollTop = vr)),
        (this.locked = !0));
  }
  resetScrollPosition() {
    vr = 0;
  }
}
const Jn = /\[(.*?)\]|(\w+)/g;
function Yt(e, r, t) {
  if (e == null) return;
  const o = Array.isArray(r) ? r : Kn(r);
  let a = e;
  for (let i = 0; i < o.length; i++) {
    const l = a[o[i]];
    if (l === void 0) return t;
    a = l;
  }
  return a;
}
function Kn(e) {
  const r = [];
  let t;
  for (; (t = Jn.exec(e)); ) {
    const [, o, a] = t;
    r.push(o || a);
  }
  return r;
}
function ei(...e) {
  let r = {};
  for (const t of e) r = Uo(r, t);
  return r;
}
function Uo(e, r) {
  const t = Array.isArray(e) ? [...e] : { ...e };
  for (const o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) Xt(r[o]) && Xt(t[o]) ? (t[o] = Uo(t[o], r[o])) : (t[o] = r[o]);
    else continue;
  return t;
}
function Xt(e) {
  return e !== null && typeof e == "object";
}
const ri = /{([^}]*)}/g;
class Qt {
  constructor(r) {
    (this.translation = {}), (this.translation = Array.isArray(r) ? ei(...r.slice().reverse()) : r);
  }
  translate(r, t) {
    const o = Yt(this.translation, r, "");
    return o
      ? t
        ? o.replace(ri, (a) => {
            const i = a.substring(1, a.length - 1);
            if (t[i] === void 0) {
              const l = JSON.stringify(t);
              throw new Error(
                `Error in translation for key '${r}'. No replacement found for key '${i}'. The following replacements were passed: '${l}'`
              );
            }
            return t[i];
          })
        : o
      : "";
  }
  translationKeyExists(r) {
    return !!Yt(this.translation, r);
  }
}
const ti = c.createContext(void 0),
  Ho = c.createContext(void 0),
  oi = c.createContext(void 0),
  Do = c.createContext(void 0),
  $o = c.createContext(void 0),
  ai = c.createContext(void 0);
class cr extends c.PureComponent {
  componentDidMount() {
    this.attachListener();
  }
  componentDidUpdate({ passive: r, ...t }) {
    this.detachListener(t), this.attachListener();
  }
  componentWillUnmount() {
    this.detachListener();
  }
  render() {
    return null;
  }
  attachListener() {
    const { event: r, handler: t, capture: o, passive: a } = this.props;
    window.addEventListener(r, t, { capture: o, passive: a });
  }
  detachListener(r) {
    const { event: t, handler: o, capture: a } = r || this.props;
    window.removeEventListener(t, o, a);
  }
}
const ni = function ({ children: r }) {
  const [t, o] = c.useState(Wr().matches),
    a = c.useCallback(
      Pr(
        () => {
          t !== Wr().matches && o(!t);
        },
        40,
        { trailing: !0, leading: !0, maxWait: 40 }
      ),
      [t]
    );
  c.useEffect(() => {
    o(Wr().matches);
  }, []);
  const i = c.useMemo(() => ({ isNavigationCollapsed: t }), [t]);
  return n.createElement(ai.Provider, { value: i }, n.createElement(cr, { event: "resize", handler: a }), r);
};
function Br() {
  const [e, r] = c.useState(!1);
  return (
    c.useEffect(() => {
      r(!0);
    }, []),
    e
  );
}
const bt = c.createContext(void 0);
function ii(e, r) {
  return n.createElement("div", { id: "PolarisPortalsContainer", ref: r });
}
const li = c.forwardRef(ii);
function si({ children: e, container: r }) {
  const t = Br(),
    o = c.useRef(null),
    a = c.useMemo(() => (r ? { container: r } : t ? { container: o.current } : { container: null }), [r, t]);
  return n.createElement(bt.Provider, { value: a }, e, r ? null : n.createElement(li, { ref: o }));
}
const ci = c.createContext(void 0);
function gi({ children: e }) {
  const [r, t] = c.useState([]),
    o = c.useCallback((l) => {
      t((s) => [...s, l]);
    }, []),
    a = c.useCallback((l) => {
      let s = !0;
      return (
        t((g) => {
          const m = [...g],
            u = m.indexOf(l);
          return u === -1 ? (s = !1) : m.splice(u, 1), m;
        }),
        s
      );
    }, []),
    i = c.useMemo(() => ({ trapFocusList: r, add: o, remove: a }), [o, r, a]);
  return n.createElement(ci.Provider, { value: i }, e);
}
const di = c.createContext(void 0),
  mi = { tooltip: 0, hovercard: 0 };
function bi({ children: e }) {
  const [r, t] = c.useState(mi),
    o = c.useCallback((l) => {
      t((s) => ({ ...s, [l]: s[l] + 1 }));
    }, []),
    a = c.useCallback((l) => {
      t((s) => ({ ...s, [l]: s[l] - 1 }));
    }, []),
    i = c.useMemo(
      () => ({
        presenceList: Object.entries(r).reduce((l, s) => {
          const [g, m] = s;
          return { ...l, [g]: m >= 1 };
        }, {}),
        presenceCounter: r,
        addPresence: o,
        removePresence: a,
      }),
      [o, a, r]
    );
  return n.createElement(di.Provider, { value: i }, e);
}
const ui = 20,
  kr = 30,
  fi = kr + 10;
function hi() {
  var a;
  const e = document.createElement("div");
  e.setAttribute(
    "style",
    `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${kr}px; height:${kr}px;`
  );
  const r = document.createElement("div");
  r.setAttribute("style", `width:100%; height: ${fi}; overflow:scroll; scrollbar-width: thin;`),
    e.appendChild(r),
    document.body.appendChild(e);
  const t = kr - (((a = e.firstElementChild) == null ? void 0 : a.clientWidth) ?? 0),
    o = Math.min(t, ui);
  document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${o}px`), document.body.removeChild(e);
}
class Vl extends c.Component {
  constructor(r) {
    super(r),
      (this.setBodyStyles = () => {
        (document.body.style.backgroundColor = "var(--p-color-bg)"), (document.body.style.color = "var(--p-color-text)");
      }),
      (this.setRootAttributes = () => {
        const a = this.getThemeName();
        On.forEach((i) => {
          document.documentElement.classList.toggle(So(i), i === a);
        });
      }),
      (this.getThemeName = () => this.props.theme ?? Ve),
      (this.stickyManager = new Oo()),
      (this.scrollLockManager = new Qn());
    const { i18n: t, linkComponent: o } = this.props;
    this.state = { link: o, intl: new Qt(t) };
  }
  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document), this.setBodyStyles(), this.setRootAttributes();
      const r =
          navigator.userAgent.includes("Safari") &&
          !navigator.userAgent.includes("Chrome") &&
          (navigator.userAgent.includes("Version/16.1") ||
            navigator.userAgent.includes("Version/16.2") ||
            navigator.userAgent.includes("Version/16.3")),
        t =
          navigator.userAgent.includes("Shopify Mobile/iOS") &&
          (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
      (r || t) && document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch");
    }
    hi();
  }
  componentDidUpdate({ i18n: r, linkComponent: t }) {
    const { i18n: o, linkComponent: a } = this.props;
    this.setRootAttributes(), !(o === r && a === t) && this.setState({ link: a, intl: new Qt(o) });
  }
  render() {
    const { children: r, features: t } = this.props,
      o = this.getThemeName(),
      { intl: a, link: i } = this.state;
    return n.createElement(
      ct.Provider,
      { value: o },
      n.createElement(
        st.Provider,
        { value: No(o) },
        n.createElement(
          ti.Provider,
          { value: t },
          n.createElement(
            Ho.Provider,
            { value: a },
            n.createElement(
              oi.Provider,
              { value: this.scrollLockManager },
              n.createElement(
                Do.Provider,
                { value: this.stickyManager },
                n.createElement(
                  $o.Provider,
                  { value: i },
                  n.createElement(ni, null, n.createElement(si, null, n.createElement(gi, null, n.createElement(bi, null, r))))
                )
              )
            )
          )
        )
      )
    );
  }
}
var jo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z" }),
    n.createElement("path", { d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z",
    })
  );
};
jo.displayName = "AlertCircleIcon";
var Wo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z" }),
    n.createElement("path", { d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z",
    })
  );
};
Wo.displayName = "AlertDiamondIcon";
var Zo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z" }),
    n.createElement("path", { d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z",
    })
  );
};
Zo.displayName = "AlertTriangleIcon";
var Go = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z",
    })
  );
};
Go.displayName = "CheckIcon";
var ut = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z",
    })
  );
};
ut.displayName = "ChevronDownIcon";
var ft = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z",
    })
  );
};
ft.displayName = "ChevronUpIcon";
var pi = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z" }),
    n.createElement("path", { d: "M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z",
    })
  );
};
pi.displayName = "DeleteIcon";
var vi = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z",
    })
  );
};
vi.displayName = "EditIcon";
var xi = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      d: "M11.977 4.751a7.598 7.598 0 0 0-1.977-.251c-2.444 0-4.196 1.045-5.325 2.233a7.188 7.188 0 0 0-1.243 1.773c-.26.532-.432 1.076-.432 1.494 0 .418.171.962.432 1.493.172.354.4.734.687 1.116l1.074-1.074a5.388 5.388 0 0 1-.414-.7c-.221-.453-.279-.753-.279-.835 0-.082.058-.382.279-.835a5.71 5.71 0 0 1 .983-1.398c.89-.937 2.264-1.767 4.238-1.767.24 0 .471.012.693.036l1.284-1.285Z",
    }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M4.25 14.6a.75.75 0 0 0 1.067 1.053l1.062-1.061c.975.543 2.177.908 3.621.908 2.45 0 4.142-1.05 5.24-2.242 1.078-1.17 1.588-2.476 1.738-3.076a.749.749 0 0 0 0-.364c-.15-.6-.66-1.906-1.738-3.076a7.245 7.245 0 0 0-.51-.502l.923-.923a.75.75 0 0 0-1.053-1.068l-.008.008-10.335 10.336-.008.007Zm5.75-.6c-.978 0-1.809-.204-2.506-.523l1.108-1.109a2.75 2.75 0 0 0 3.766-3.766l1.3-1.299c.169.147.325.3.469.455a6.387 6.387 0 0 1 1.332 2.242 6.387 6.387 0 0 1-1.332 2.242c-.86.933-2.17 1.758-4.137 1.758Zm0-2.75c-.087 0-.172-.01-.254-.026l1.478-1.478a1.25 1.25 0 0 1-1.224 1.504Z",
    })
  );
};
xi.displayName = "HideIcon";
var Vo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z" }),
    n.createElement("path", { d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z",
    })
  );
};
Vo.displayName = "InfoIcon";
var qo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M5 10c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75Z",
    })
  );
};
qo.displayName = "MinusIcon";
var yi = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { d: "M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7Z" }),
    n.createElement("path", { d: "M7 9.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4h-2.25Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-.22.53l-4 4a.75.75 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75v-7.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h4.75v-2.25c0-.966.784-1.75 1.75-1.75h2.25v-4.75c0-.69-.56-1.25-1.25-1.25h-7.5Zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19l1.44-1.44Z",
    })
  );
};
yi.displayName = "NoteIcon";
var Yo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z",
    }),
    n.createElement("path", {
      d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z",
    })
  );
};
Yo.displayName = "SelectIcon";
var wi = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", { fillRule: "evenodd", d: "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z",
    })
  );
};
wi.displayName = "ViewIcon";
var Xo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      d: "M13.03 6.97a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z",
    }),
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z",
    })
  );
};
Xo.displayName = "XCircleIcon";
var Qo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z",
    })
  );
};
Qo.displayName = "XIcon";
var Jo = function (r) {
  return n.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, r),
    n.createElement("path", {
      d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z",
    })
  );
};
Jo.displayName = "XSmallIcon";
function ki(e) {
  const { top: r, left: t, bottom: o, right: a } = e.getBoundingClientRect();
  return r >= 0 && a <= window.innerWidth && o <= window.innerHeight && t >= 0;
}
const rt =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]',
  Ir =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])',
  Si =
    'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])',
  ht = ({ currentTarget: e }) => e.blur();
function Ei(e, r) {
  const t = [...document.querySelectorAll(rt)],
    o = t.indexOf(e) + 1,
    a = t.slice(o);
  for (const i of a) if (ki(i) && (!r || (r && r(i)))) return i;
  return null;
}
function Pi(e, r = !0) {
  return !r && Nr(e, rt) ? e : e.querySelector(rt);
}
function or(e) {
  const r = "a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";
  return Nr(e, r) ? e : e.querySelector(r);
}
function ql(e, r = !0) {
  var t;
  (t = Pi(e, r)) == null || t.focus();
}
function Jt(e, r) {
  const t = Ei(e, r);
  return t && t instanceof HTMLElement ? (t.focus(), !0) : !1;
}
function Ko(e, r = !0) {
  return !r && Nr(e, Ir) ? e : e.querySelector(Ir);
}
function Yl(e, r = !0) {
  const t = Ko(e, r);
  return t ? (t.focus(), !0) : !1;
}
function Ii(e, r = !0) {
  if (!r && Nr(e, Ir)) return e;
  const t = e.querySelectorAll(Ir);
  return t[t.length - 1];
}
function Xl(e, r = !0) {
  const t = Ii(e, r);
  return t ? (t.focus(), !0) : !1;
}
function Ql(e, r) {
  const t = ea(e),
    o = ra(t, r);
  o === -1 ? t[0].focus() : t[(o - 1 + t.length) % t.length].focus();
}
function Jl(e, r) {
  const t = ea(e),
    o = ra(t, r);
  o === -1 ? t[0].focus() : t[(o + 1) % t.length].focus();
}
function ea(e) {
  return e.querySelectorAll(Si);
}
function ra(e, r) {
  let t = 0;
  for (const o of e) {
    if (o === r) break;
    t++;
  }
  return t === e.length ? -1 : t;
}
function Nr(e, r) {
  if (e.matches) return e.matches(r);
  const t = (e.ownerDocument || document).querySelectorAll(r);
  let o = t.length;
  for (; --o >= 0 && t.item(o) !== e; ) return o > -1;
}
var j = {
    Button: "Polaris-Button",
    disabled: "Polaris-Button--disabled",
    pressed: "Polaris-Button--pressed",
    variantPrimary: "Polaris-Button--variantPrimary",
    variantSecondary: "Polaris-Button--variantSecondary",
    variantTertiary: "Polaris-Button--variantTertiary",
    variantPlain: "Polaris-Button--variantPlain",
    removeUnderline: "Polaris-Button--removeUnderline",
    variantMonochromePlain: "Polaris-Button--variantMonochromePlain",
    toneSuccess: "Polaris-Button--toneSuccess",
    toneCritical: "Polaris-Button--toneCritical",
    sizeMicro: "Polaris-Button--sizeMicro",
    sizeSlim: "Polaris-Button--sizeSlim",
    sizeMedium: "Polaris-Button--sizeMedium",
    sizeLarge: "Polaris-Button--sizeLarge",
    textAlignCenter: "Polaris-Button--textAlignCenter",
    textAlignStart: "Polaris-Button--textAlignStart",
    textAlignLeft: "Polaris-Button--textAlignLeft",
    textAlignEnd: "Polaris-Button--textAlignEnd",
    textAlignRight: "Polaris-Button--textAlignRight",
    fullWidth: "Polaris-Button--fullWidth",
    iconOnly: "Polaris-Button--iconOnly",
    iconWithText: "Polaris-Button--iconWithText",
    disclosure: "Polaris-Button--disclosure",
    loading: "Polaris-Button--loading",
    pressable: "Polaris-Button--pressable",
    hidden: "Polaris-Button--hidden",
    Icon: "Polaris-Button__Icon",
    Spinner: "Polaris-Button__Spinner",
  },
  ar = {
    Icon: "Polaris-Icon",
    toneInherit: "Polaris-Icon--toneInherit",
    toneBase: "Polaris-Icon--toneBase",
    toneSubdued: "Polaris-Icon--toneSubdued",
    toneCaution: "Polaris-Icon--toneCaution",
    toneWarning: "Polaris-Icon--toneWarning",
    toneCritical: "Polaris-Icon--toneCritical",
    toneInteractive: "Polaris-Icon--toneInteractive",
    toneInfo: "Polaris-Icon--toneInfo",
    toneSuccess: "Polaris-Icon--toneSuccess",
    tonePrimary: "Polaris-Icon--tonePrimary",
    toneEmphasis: "Polaris-Icon--toneEmphasis",
    toneMagic: "Polaris-Icon--toneMagic",
    toneTextCaution: "Polaris-Icon--toneTextCaution",
    toneTextWarning: "Polaris-Icon--toneTextWarning",
    toneTextCritical: "Polaris-Icon--toneTextCritical",
    toneTextInfo: "Polaris-Icon--toneTextInfo",
    toneTextPrimary: "Polaris-Icon--toneTextPrimary",
    toneTextSuccess: "Polaris-Icon--toneTextSuccess",
    toneTextMagic: "Polaris-Icon--toneTextMagic",
    Svg: "Polaris-Icon__Svg",
    Img: "Polaris-Icon__Img",
    Placeholder: "Polaris-Icon__Placeholder",
  },
  de = {
    root: "Polaris-Text--root",
    block: "Polaris-Text--block",
    truncate: "Polaris-Text--truncate",
    visuallyHidden: "Polaris-Text--visuallyHidden",
    start: "Polaris-Text--start",
    center: "Polaris-Text--center",
    end: "Polaris-Text--end",
    justify: "Polaris-Text--justify",
    base: "Polaris-Text--base",
    inherit: "Polaris-Text--inherit",
    disabled: "Polaris-Text--disabled",
    success: "Polaris-Text--success",
    critical: "Polaris-Text--critical",
    caution: "Polaris-Text--caution",
    subdued: "Polaris-Text--subdued",
    magic: "Polaris-Text--magic",
    "magic-subdued": "Polaris-Text__magic--subdued",
    "text-inverse": "Polaris-Text__text--inverse",
    "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
    headingXs: "Polaris-Text--headingXs",
    headingSm: "Polaris-Text--headingSm",
    headingMd: "Polaris-Text--headingMd",
    headingLg: "Polaris-Text--headingLg",
    headingXl: "Polaris-Text--headingXl",
    heading2xl: "Polaris-Text--heading2xl",
    heading3xl: "Polaris-Text--heading3xl",
    bodyXs: "Polaris-Text--bodyXs",
    bodySm: "Polaris-Text--bodySm",
    bodyMd: "Polaris-Text--bodyMd",
    bodyLg: "Polaris-Text--bodyLg",
    regular: "Polaris-Text--regular",
    medium: "Polaris-Text--medium",
    semibold: "Polaris-Text--semibold",
    bold: "Polaris-Text--bold",
    break: "Polaris-Text--break",
    numeric: "Polaris-Text--numeric",
    "line-through": "Polaris-Text__line--through",
  };
const $ = ({
  alignment: e,
  as: r,
  breakWord: t,
  children: o,
  tone: a,
  fontWeight: i,
  id: l,
  numeric: s = !1,
  truncate: g = !1,
  variant: m,
  visuallyHidden: u = !1,
  textDecorationLine: f,
}) => {
  const v = r || (u ? "span" : "p"),
    p = C(
      de.root,
      m && de[m],
      i && de[i],
      (e || g) && de.block,
      e && de[e],
      t && de.break,
      a && de[a],
      s && de.numeric,
      g && de.truncate,
      u && de.visuallyHidden,
      f && de[f]
    );
  return n.createElement(v, Object.assign({ className: p }, l && { id: l }), o);
};
function ne({ source: e, tone: r, accessibilityLabel: t }) {
  let o;
  typeof e == "function" ? (o = "function") : e === "placeholder" ? (o = "placeholder") : (o = "external");
  const a = C(ar.Icon, r && ar[D("tone", r)]),
    { mdDown: i } = mt(),
    l = e,
    s = {
      function: n.createElement(
        l,
        Object.assign({ className: ar.Svg, focusable: "false", "aria-hidden": "true" }, i ? { viewBox: "1 1 18 18" } : {})
      ),
      placeholder: n.createElement("div", { className: ar.Placeholder }),
      external: n.createElement("img", { className: ar.Img, src: `data:image/svg+xml;utf8,${e}`, alt: "", "aria-hidden": "true" }),
    };
  return n.createElement("span", { className: a }, t && n.createElement($, { as: "span", visuallyHidden: !0 }, t), s[o]);
}
var Kt = { Spinner: "Polaris-Spinner", sizeSmall: "Polaris-Spinner--sizeSmall", sizeLarge: "Polaris-Spinner--sizeLarge" };
function ta({ size: e = "large", accessibilityLabel: r, hasFocusableParent: t }) {
  const o = Br(),
    a = C(Kt.Spinner, e && Kt[D("size", e)]),
    i =
      e === "large"
        ? n.createElement(
            "svg",
            { viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg" },
            n.createElement("path", {
              d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z",
            })
          )
        : n.createElement(
            "svg",
            { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
            n.createElement("path", {
              d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z",
            })
          ),
    l = { ...(!t && { role: "status" }) },
    s = (o || !t) && n.createElement($, { as: "span", visuallyHidden: !0 }, r);
  return n.createElement(n.Fragment, null, n.createElement("span", { className: a }, i), n.createElement("span", l, s));
}
function Ti(e, r) {
  const t = c.useCallback(
    (o) => {
      e && (o.preventDefault(), o.stopPropagation());
    },
    [e]
  );
  return e ? t : r;
}
function Ci() {
  return c.useContext($o);
}
const Bi = c.memo(
  c.forwardRef(function (r, t) {
    const o = Ci();
    if (o) return n.createElement(o, Object.assign({}, Lt.props, r, { ref: t }));
    const { external: a, url: i, target: l, ...s } = r;
    let g;
    a ? (g = "_blank") : (g = l ?? void 0);
    const m = g === "_blank" ? "noopener noreferrer" : void 0;
    return n.createElement("a", Object.assign({ target: g }, s, { href: i, rel: m }, Lt.props, { ref: t }));
  })
);
function Ni({
  id: e,
  children: r,
  className: t,
  url: o,
  external: a,
  target: i,
  download: l,
  submit: s,
  disabled: g,
  loading: m,
  pressed: u,
  accessibilityLabel: f,
  role: v,
  ariaControls: p,
  ariaExpanded: y,
  ariaDescribedBy: S,
  ariaChecked: w,
  onClick: F,
  onFocus: E,
  onBlur: O,
  onKeyDown: _,
  onKeyPress: L,
  onKeyUp: N,
  onMouseEnter: P,
  onTouchStart: k,
  ...B
}) {
  let z;
  const I = { id: e, className: t, "aria-label": f },
    A = { ...I, role: v, onClick: F, onFocus: E, onBlur: O, onMouseUp: ht, onMouseEnter: P, onTouchStart: k },
    W = Ti(g, F);
  return (
    o
      ? (z = g
          ? n.createElement("a", I, r)
          : n.createElement(Bi, Object.assign({}, A, { url: o, external: a, target: i, download: l }, B), r))
      : (z = n.createElement(
          "button",
          Object.assign(
            {},
            A,
            {
              "aria-disabled": g,
              type: s ? "submit" : "button",
              "aria-busy": m ? !0 : void 0,
              "aria-controls": p,
              "aria-expanded": y,
              "aria-describedby": S,
              "aria-checked": w,
              "aria-pressed": u,
              onKeyDown: _,
              onKeyUp: N,
              onKeyPress: L,
              onClick: W,
              tabIndex: g ? -1 : void 0,
            },
            B
          ),
          r
        )),
    z
  );
}
class Mi extends Error {
  constructor(r = "") {
    super(
      `${
        r && `${r} `
      }Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`
    ),
      (this.name = "MissingAppProviderError");
  }
}
function Re() {
  const e = c.useContext(Ho);
  if (!e) throw new Mi("No i18n was provided.");
  return e;
}
function Sr({
  id: e,
  children: r,
  url: t,
  disabled: o,
  external: a,
  download: i,
  target: l,
  submit: s,
  loading: g,
  pressed: m,
  accessibilityLabel: u,
  role: f,
  ariaControls: v,
  ariaExpanded: p,
  ariaDescribedBy: y,
  ariaChecked: S,
  onClick: w,
  onFocus: F,
  onBlur: E,
  onKeyDown: O,
  onKeyPress: _,
  onKeyUp: L,
  onMouseEnter: N,
  onTouchStart: P,
  onPointerDown: k,
  icon: B,
  disclosure: z,
  removeUnderline: I,
  size: A = "medium",
  textAlign: W = "center",
  fullWidth: K,
  dataPrimaryLink: Te,
  tone: ye,
  variant: ee = "secondary",
}) {
  const we = Re(),
    ke = o || g,
    { mdUp: Ce } = mt(),
    Be = C(
      j.Button,
      j.pressable,
      j[D("variant", ee)],
      j[D("size", A)],
      j[D("textAlign", W)],
      K && j.fullWidth,
      z && j.disclosure,
      B && r && j.iconWithText,
      B && r == null && j.iconOnly,
      ke && j.disabled,
      g && j.loading,
      m && !o && !t && j.pressed,
      I && j.removeUnderline,
      ye && j[D("tone", ye)]
    ),
    Se = z
      ? n.createElement("span", { className: g ? j.hidden : j.Icon }, n.createElement(ne, { source: g ? "placeholder" : zi(z, ft, ut) }))
      : null,
    Ee = Fi(B) ? n.createElement(ne, { source: g ? "placeholder" : B }) : B,
    Ne = Ee ? n.createElement("span", { className: g ? j.hidden : j.Icon }, Ee) : null,
    Me = ["plain", "monochromePlain"].includes(ee);
  let Pe = "medium";
  Me ? (Pe = "regular") : ee === "primary" && (Pe = Ce ? "medium" : "semibold");
  let re = "bodySm";
  (A === "large" || (Me && A !== "micro")) && (re = "bodyMd");
  const Ue = r ? n.createElement($, { as: "span", variant: re, fontWeight: Pe, key: o ? "text-disabled" : "text" }, r) : null,
    qe = g
      ? n.createElement(
          "span",
          { className: j.Spinner },
          n.createElement(ta, { size: "small", accessibilityLabel: we.translate("Polaris.Button.spinnerAccessibilityLabel") })
        )
      : null,
    He = {
      id: e,
      className: Be,
      accessibilityLabel: u,
      ariaDescribedBy: y,
      role: f,
      onClick: w,
      onFocus: F,
      onBlur: E,
      onMouseUp: ht,
      onMouseEnter: N,
      onTouchStart: P,
      "data-primary-link": Te,
    },
    te = { url: t, external: a, download: i, target: l },
    se = {
      submit: s,
      disabled: ke,
      loading: g,
      ariaControls: v,
      ariaExpanded: p,
      ariaChecked: S,
      pressed: m,
      onKeyDown: O,
      onKeyUp: L,
      onKeyPress: _,
      onPointerDown: k,
    };
  return n.createElement(Ni, Object.assign({}, He, te, se), qe, Ne, Ue, Se);
}
function Fi(e) {
  return typeof e == "string" || (typeof e == "object" && e.body) || typeof e == "function";
}
function zi(e, r, t) {
  return e === "select" ? Yo : e === "up" ? r : t;
}
function Kl(e, r = {}) {
  return Array.isArray(e) ? e.map((t, o) => tt(t, r, o)) : tt(e, r);
}
function tt({ content: e, onAction: r, plain: t, destructive: o, ...a }, i, l) {
  const s = t ? "plain" : void 0,
    g = o ? "primary" : void 0,
    m = !(i != null && i.tone) && o ? "critical" : i == null ? void 0 : i.tone;
  return n.createElement(Sr, Object.assign({ key: l, onClick: r, tone: m, variant: s || g }, a, i), e);
}
var xr = {
  listReset: "Polaris-Box--listReset",
  Box: "Polaris-Box",
  visuallyHidden: "Polaris-Box--visuallyHidden",
  printHidden: "Polaris-Box--printHidden",
};
const ce = c.forwardRef(
  (
    {
      as: e = "div",
      background: r,
      borderColor: t,
      borderStyle: o,
      borderWidth: a,
      borderBlockStartWidth: i,
      borderBlockEndWidth: l,
      borderInlineStartWidth: s,
      borderInlineEndWidth: g,
      borderRadius: m,
      borderEndStartRadius: u,
      borderEndEndRadius: f,
      borderStartStartRadius: v,
      borderStartEndRadius: p,
      children: y,
      color: S,
      id: w,
      minHeight: F,
      minWidth: E,
      maxWidth: O,
      overflowX: _,
      overflowY: L,
      outlineColor: N,
      outlineStyle: P,
      outlineWidth: k,
      padding: B,
      paddingBlock: z,
      paddingBlockStart: I,
      paddingBlockEnd: A,
      paddingInline: W,
      paddingInlineStart: K,
      paddingInlineEnd: Te,
      role: ye,
      shadow: ee,
      tabIndex: we,
      width: ke,
      printHidden: Ce,
      visuallyHidden: Be,
      position: Se,
      insetBlockStart: Ee,
      insetBlockEnd: Ne,
      insetInlineStart: Me,
      insetInlineEnd: Pe,
      zIndex: re,
      opacity: Ue,
      ...qe
    },
    He
  ) => {
    const te = o || (t || a || i || l || s || g ? "solid" : void 0),
      se = P || (N || k ? "solid" : void 0),
      Ye = {
        "--pc-box-color": S ? `var(--p-color-${S})` : void 0,
        "--pc-box-background": r ? `var(--p-color-${r})` : void 0,
        "--pc-box-border-color": t ? (t === "transparent" ? "transparent" : `var(--p-color-${t})`) : void 0,
        "--pc-box-border-style": te,
        "--pc-box-border-radius": m ? `var(--p-border-radius-${m})` : void 0,
        "--pc-box-border-end-start-radius": u ? `var(--p-border-radius-${u})` : void 0,
        "--pc-box-border-end-end-radius": f ? `var(--p-border-radius-${f})` : void 0,
        "--pc-box-border-start-start-radius": v ? `var(--p-border-radius-${v})` : void 0,
        "--pc-box-border-start-end-radius": p ? `var(--p-border-radius-${p})` : void 0,
        "--pc-box-border-width": a ? `var(--p-border-width-${a})` : void 0,
        "--pc-box-border-block-start-width": i ? `var(--p-border-width-${i})` : void 0,
        "--pc-box-border-block-end-width": l ? `var(--p-border-width-${l})` : void 0,
        "--pc-box-border-inline-start-width": s ? `var(--p-border-width-${s})` : void 0,
        "--pc-box-border-inline-end-width": g ? `var(--p-border-width-${g})` : void 0,
        "--pc-box-min-height": F,
        "--pc-box-min-width": E,
        "--pc-box-max-width": O,
        "--pc-box-outline-color": N ? `var(--p-color-${N})` : void 0,
        "--pc-box-outline-style": se,
        "--pc-box-outline-width": k ? `var(--p-border-width-${k})` : void 0,
        "--pc-box-overflow-x": _,
        "--pc-box-overflow-y": L,
        ...fe("box", "padding-block-start", "space", I || z || B),
        ...fe("box", "padding-block-end", "space", A || z || B),
        ...fe("box", "padding-inline-start", "space", K || W || B),
        ...fe("box", "padding-inline-end", "space", Te || W || B),
        "--pc-box-shadow": ee ? `var(--p-shadow-${ee})` : void 0,
        "--pc-box-width": ke,
        position: Se,
        "--pc-box-inset-block-start": Ee ? `var(--p-space-${Ee})` : void 0,
        "--pc-box-inset-block-end": Ne ? `var(--p-space-${Ne})` : void 0,
        "--pc-box-inset-inline-start": Me ? `var(--p-space-${Me})` : void 0,
        "--pc-box-inset-inline-end": Pe ? `var(--p-space-${Pe})` : void 0,
        zIndex: re,
        opacity: Ue,
      },
      mr = C(xr.Box, Be && xr.visuallyHidden, Ce && xr.printHidden, e === "ul" && xr.listReset);
    return n.createElement(e, { className: mr, id: w, ref: He, style: gt(Ye), role: ye, tabIndex: we, ...qe }, y);
  }
);
ce.displayName = "Box";
var Ai = { InlineStack: "Polaris-InlineStack" };
const Le = function ({ as: r = "div", align: t, direction: o = "row", blockAlign: a, gap: i, wrap: l = !0, children: s }) {
  const g = {
    "--pc-inline-stack-align": t,
    "--pc-inline-stack-block-align": a,
    "--pc-inline-stack-wrap": l ? "wrap" : "nowrap",
    ...fe("inline-stack", "gap", "space", i),
    ...Fo("inline-stack", "flex-direction", o),
  };
  return n.createElement(r, { className: Ai.InlineStack, style: g }, s);
};
var Zr = {
  BlockStack: "Polaris-BlockStack",
  listReset: "Polaris-BlockStack--listReset",
  fieldsetReset: "Polaris-BlockStack--fieldsetReset",
};
const Oe = ({ as: e = "div", children: r, align: t, inlineAlign: o, gap: a, id: i, reverseOrder: l = !1, ...s }) => {
  const g = C(Zr.BlockStack, (e === "ul" || e === "ol") && Zr.listReset, e === "fieldset" && Zr.fieldsetReset),
    m = {
      "--pc-block-stack-align": t ? `${t}` : null,
      "--pc-block-stack-inline-align": o ? `${o}` : null,
      "--pc-block-stack-order": l ? "column-reverse" : "column",
      ...fe("block-stack", "gap", "space", a),
    };
  return n.createElement(e, { className: g, id: i, style: gt(m), ...s }, r);
};
function _i({ alt: e, sourceSet: r, source: t, crossOrigin: o, onLoad: a, className: i, ...l }) {
  const s = r ? r.map(({ source: m, descriptor: u }) => `${m} ${u}`).join(",") : null,
    g = c.useCallback(() => {
      a && a();
    }, [a]);
  return n.createElement("img", Object.assign({ alt: e, src: t, crossOrigin: o, className: i, onLoad: g }, s ? { srcSet: s } : {}, l));
}
const Li = c.createContext(!1);
var $e = {
  Badge: "Polaris-Badge",
  toneSuccess: "Polaris-Badge--toneSuccess",
  "toneSuccess-strong": "Polaris-Badge__toneSuccess--strong",
  toneInfo: "Polaris-Badge--toneInfo",
  "toneInfo-strong": "Polaris-Badge__toneInfo--strong",
  toneAttention: "Polaris-Badge--toneAttention",
  "toneAttention-strong": "Polaris-Badge__toneAttention--strong",
  toneWarning: "Polaris-Badge--toneWarning",
  "toneWarning-strong": "Polaris-Badge__toneWarning--strong",
  toneCritical: "Polaris-Badge--toneCritical",
  "toneCritical-strong": "Polaris-Badge__toneCritical--strong",
  toneNew: "Polaris-Badge--toneNew",
  toneMagic: "Polaris-Badge--toneMagic",
  "toneRead-only": "Polaris-Badge__toneRead--only",
  toneEnabled: "Polaris-Badge--toneEnabled",
  sizeLarge: "Polaris-Badge--sizeLarge",
  withinFilter: "Polaris-Badge--withinFilter",
  Icon: "Polaris-Badge__Icon",
  PipContainer: "Polaris-Badge__PipContainer",
};
let J;
(function (e) {
  (e.Info = "info"),
    (e.Success = "success"),
    (e.Warning = "warning"),
    (e.Critical = "critical"),
    (e.Attention = "attention"),
    (e.New = "new"),
    (e.Magic = "magic"),
    (e.InfoStrong = "info-strong"),
    (e.SuccessStrong = "success-strong"),
    (e.WarningStrong = "warning-strong"),
    (e.CriticalStrong = "critical-strong"),
    (e.AttentionStrong = "attention-strong"),
    (e.ReadOnly = "read-only"),
    (e.Enabled = "enabled");
})(J || (J = {}));
let ir;
(function (e) {
  (e.Incomplete = "incomplete"), (e.PartiallyComplete = "partiallyComplete"), (e.Complete = "complete");
})(ir || (ir = {}));
function oa(e, r, t) {
  let o = "",
    a = "";
  if (!r && !t) return "";
  switch (r) {
    case ir.Incomplete:
      o = e.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
      break;
    case ir.PartiallyComplete:
      o = e.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
      break;
    case ir.Complete:
      o = e.translate("Polaris.Badge.PROGRESS_LABELS.complete");
      break;
  }
  switch (t) {
    case J.Info:
    case J.InfoStrong:
      a = e.translate("Polaris.Badge.TONE_LABELS.info");
      break;
    case J.Success:
    case J.SuccessStrong:
      a = e.translate("Polaris.Badge.TONE_LABELS.success");
      break;
    case J.Warning:
    case J.WarningStrong:
      a = e.translate("Polaris.Badge.TONE_LABELS.warning");
      break;
    case J.Critical:
    case J.CriticalStrong:
      a = e.translate("Polaris.Badge.TONE_LABELS.critical");
      break;
    case J.Attention:
    case J.AttentionStrong:
      a = e.translate("Polaris.Badge.TONE_LABELS.attention");
      break;
    case J.New:
      a = e.translate("Polaris.Badge.TONE_LABELS.new");
      break;
    case J.ReadOnly:
      a = e.translate("Polaris.Badge.TONE_LABELS.readOnly");
      break;
    case J.Enabled:
      a = e.translate("Polaris.Badge.TONE_LABELS.enabled");
      break;
  }
  return !t && r ? o : t && !r ? a : e.translate("Polaris.Badge.progressAndTone", { progressLabel: o, toneLabel: a });
}
var Gr = {
  Pip: "Polaris-Badge-Pip",
  toneInfo: "Polaris-Badge-Pip--toneInfo",
  toneSuccess: "Polaris-Badge-Pip--toneSuccess",
  toneNew: "Polaris-Badge-Pip--toneNew",
  toneAttention: "Polaris-Badge-Pip--toneAttention",
  toneWarning: "Polaris-Badge-Pip--toneWarning",
  toneCritical: "Polaris-Badge-Pip--toneCritical",
  progressIncomplete: "Polaris-Badge-Pip--progressIncomplete",
  progressPartiallyComplete: "Polaris-Badge-Pip--progressPartiallyComplete",
  progressComplete: "Polaris-Badge-Pip--progressComplete",
};
function Oi({ tone: e, progress: r = "complete", accessibilityLabelOverride: t }) {
  const o = Re(),
    a = C(Gr.Pip, e && Gr[D("tone", e)], r && Gr[D("progress", r)]),
    i = t || oa(o, r, e);
  return n.createElement("span", { className: a }, n.createElement($, { as: "span", visuallyHidden: !0 }, i));
}
const eo = "medium",
  Ri = {
    complete: () =>
      n.createElement(
        "svg",
        { viewBox: "0 0 20 20" },
        n.createElement("path", {
          d: "M6 10c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C8.605 6 9.07 6 10 6c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C14 8.605 14 9.07 14 10s0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C11.395 14 10.93 14 10 14s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.121C6 11.395 6 10.93 6 10Z",
        })
      ),
    partiallyComplete: () =>
      n.createElement(
        "svg",
        { viewBox: "0 0 20 20" },
        n.createElement("path", {
          fillRule: "evenodd",
          d: "m8.888 6.014-.017-.018-.02.02c-.253.013-.45.038-.628.086a3 3 0 0 0-2.12 2.122C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C8.605 14 9.07 14 10 14c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C11.395 6 10.93 6 10 6c-.475 0-.829 0-1.112.014ZM8.446 7.34a1.75 1.75 0 0 0-1.041.94l4.314 4.315c.443-.2.786-.576.941-1.042L8.446 7.34Zm4.304 2.536L10.124 7.25c.908.001 1.154.013 1.329.06a1.75 1.75 0 0 1 1.237 1.237c.047.175.059.42.06 1.329ZM8.547 12.69c.182.05.442.06 1.453.06h.106L7.25 9.894V10c0 1.01.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237Z",
        })
      ),
    incomplete: () =>
      n.createElement(
        "svg",
        { viewBox: "0 0 20 20" },
        n.createElement("path", {
          fillRule: "evenodd",
          d: "M8.547 12.69c.183.05.443.06 1.453.06s1.27-.01 1.453-.06a1.75 1.75 0 0 0 1.237-1.237c.05-.182.06-.443.06-1.453s-.01-1.27-.06-1.453a1.75 1.75 0 0 0-1.237-1.237c-.182-.05-.443-.06-1.453-.06s-1.27.01-1.453.06A1.75 1.75 0 0 0 7.31 8.547c-.05.183-.06.443-.06 1.453s.01 1.27.06 1.453a1.75 1.75 0 0 0 1.237 1.237ZM6.102 8.224C6 8.605 6 9.07 6 10s0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C8.605 14 9.07 14 10 14s1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C14 11.395 14 10.93 14 10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C11.395 6 10.93 6 10 6c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z",
        })
      ),
  };
function Ui({ children: e, tone: r, progress: t, icon: o, size: a = eo, toneAndProgressLabelOverride: i }) {
  const l = Re(),
    s = c.useContext(Li),
    g = C($e.Badge, r && $e[D("tone", r)], a && a !== eo && $e[D("size", a)], s && $e.withinFilter),
    m = i || oa(l, t, r);
  let u = !!m && n.createElement($, { as: "span", visuallyHidden: !0 }, m);
  return (
    t && !o && (u = n.createElement("span", { className: $e.Icon }, n.createElement(ne, { accessibilityLabel: m, source: Ri[t] }))),
    n.createElement(
      "span",
      { className: g },
      u,
      o && n.createElement("span", { className: $e.Icon }, n.createElement(ne, { source: o })),
      e && n.createElement($, { as: "span", variant: "bodySm", fontWeight: r === "new" ? "medium" : void 0 }, e)
    )
  );
}
Ui.Pip = Oi;
function aa(e) {
  const [r, t] = c.useState(e);
  return {
    value: r,
    toggle: c.useCallback(() => t((o) => !o), []),
    setTrue: c.useCallback(() => t(!0), []),
    setFalse: c.useCallback(() => t(!1), []),
  };
}
function Hi() {
  const e = c.useContext(bt);
  if (!e)
    throw new Error(
      "No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions."
    );
  return e;
}
function Di({ children: e, idPrefix: r = "", onPortalCreated: t = $i }) {
  const o = Hn(),
    { container: a } = Hi(),
    i = c.useId(),
    l = r !== "" ? `${r}-${i}` : i;
  return (
    c.useEffect(() => {
      t();
    }, [t]),
    a ? Va.createPortal(n.createElement(Wn, { theme: jn(o) ? o : Ve, "data-portal-id": l }, e), a) : null
  );
}
function $i() {}
function ji(e, r, t, o, a, i, l, s = 0) {
  const g = e.top,
    m = g + e.height,
    u = e.top - s,
    f = a.height - e.top - e.height,
    v = r.height,
    p = t.activator + t.container,
    y = t.container,
    S = e.top - Math.max(o.top, 0),
    w = a.top + Math.min(a.height, o.top + o.height) - (e.top + e.height),
    F = S >= y,
    E = w >= y,
    O = Math.min(u, v),
    _ = Math.min(f, v),
    L = Math.min(u + e.height, v),
    N = Math.min(f + e.height, v),
    P = l ? 0 : a.top,
    k = { height: O - p, top: g + P - O, positioning: "above" },
    B = { height: _ - p, top: m + P, positioning: "below" },
    z = { height: N - p, top: g + P, positioning: "cover" },
    I = { height: L - p, top: g + P - O + e.height + p, positioning: "cover" };
  return i === "above"
    ? (F || (S >= w && !E)) && (u > v || u > f)
      ? k
      : B
    : i === "below"
    ? (E || (w >= S && !F)) && (f > v || f > u)
      ? B
      : k
    : i === "cover"
    ? (E || (w >= S && !F)) && (f + e.height > v || f > u)
      ? z
      : I
    : F && E
    ? u > f
      ? k
      : B
    : S > y
    ? k
    : B;
}
function Wi(e, r, t, o, a) {
  const i = t.width - r.width;
  if (a === "left") return Math.min(i, Math.max(0, e.left - o.horizontal));
  if (a === "right") {
    const l = t.width - (e.left + e.width);
    return Math.min(i, Math.max(0, l - o.horizontal));
  }
  return Math.min(i, Math.max(0, e.center.x - r.width / 2));
}
function Zi(e, r) {
  const { center: t } = e;
  return t.y < r.top || t.y > r.top + r.height;
}
function Gi(e, r = na()) {
  const t = Math.max(e.top, 0),
    o = Math.max(e.left, 0),
    a = Math.min(e.top + e.height, r.height),
    i = Math.min(e.left + e.width, r.width);
  return new _e({ top: t, left: o, height: a - t, width: i - o });
}
function na() {
  return new _e({ top: window.scrollY, left: window.scrollX, height: window.innerHeight, width: document.body.clientWidth });
}
var Vr = {
  PositionedOverlay: "Polaris-PositionedOverlay",
  fixed: "Polaris-PositionedOverlay--fixed",
  calculating: "Polaris-PositionedOverlay--calculating",
  preventInteraction: "Polaris-PositionedOverlay--preventInteraction",
};
const ro = Symbol("unique_identifier");
function Vi(e) {
  const r = c.useRef(ro);
  return r.current === ro && (r.current = e()), r;
}
function qi(e) {
  const r = Br(),
    t = c.useRef(!1);
  if (r && !t.current) return (t.current = !0), e();
}
const ia = c.createContext(void 0);
var Fe = {
  Scrollable: "Polaris-Scrollable",
  hasTopShadow: "Polaris-Scrollable--hasTopShadow",
  hasBottomShadow: "Polaris-Scrollable--hasBottomShadow",
  horizontal: "Polaris-Scrollable--horizontal",
  vertical: "Polaris-Scrollable--vertical",
  scrollbarWidthThin: "Polaris-Scrollable--scrollbarWidthThin",
  scrollbarWidthNone: "Polaris-Scrollable--scrollbarWidthNone",
  scrollbarWidthAuto: "Polaris-Scrollable--scrollbarWidthAuto",
  scrollbarGutterStable: "Polaris-Scrollable--scrollbarGutterStable",
  "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges",
};
function Yi() {
  const e = c.useRef(null),
    r = c.useContext(ia);
  c.useEffect(() => {
    !r || !e.current || r(e.current.offsetTop);
  }, [r]);
  const t = c.useId();
  return n.createElement("a", { id: t, ref: e });
}
const to = 100,
  la = 2,
  sa = c.forwardRef(
    (
      {
        children: e,
        className: r,
        horizontal: t = !0,
        vertical: o = !0,
        shadow: a,
        hint: i,
        focusable: l,
        scrollbarWidth: s = "thin",
        scrollbarGutter: g,
        onScrolledToBottom: m,
        ...u
      },
      f
    ) => {
      const [v, p] = c.useState(!1),
        [y, S] = c.useState(!1),
        w = Vi(() => new Oo()),
        F = c.useRef(null),
        E = c.useCallback((N, P = {}) => {
          var z;
          const k = P.behavior || "smooth",
            B = ca() ? "auto" : k;
          (z = F.current) == null || z.scrollTo({ top: N, behavior: B });
        }, []),
        O = c.useRef();
      c.useImperativeHandle(f || O, () => ({ scrollTo: E }));
      const _ = c.useCallback(() => {
        const N = F.current;
        N &&
          requestAnimationFrame(() => {
            const { scrollTop: P, clientHeight: k, scrollHeight: B } = N,
              z = B > k,
              I = P > 0,
              A = P + k >= B - la;
            p(I), S(!A), z && A && m && m();
          });
      }, [m]);
      qi(() => {
        _(), i && requestAnimationFrame(() => Xi(F.current));
      }),
        c.useEffect(() => {
          var k;
          const N = F.current;
          if (!N) return;
          const P = Pr(_, 50, { trailing: !0 });
          return (
            (k = w.current) == null || k.setContainer(N),
            N.addEventListener("scroll", _),
            globalThis.addEventListener("resize", P),
            () => {
              N.removeEventListener("scroll", _), globalThis.removeEventListener("resize", P);
            }
          );
        }, [w, _]);
      const L = C(
        r,
        Fe.Scrollable,
        o && Fe.vertical,
        t && Fe.horizontal,
        a && v && Fe.hasTopShadow,
        a && y && Fe.hasBottomShadow,
        s && Fe[D("scrollbarWidth", s)],
        g && Fe[D("scrollbarGutter", g.replace(" ", ""))]
      );
      return n.createElement(
        ia.Provider,
        { value: E },
        n.createElement(
          Do.Provider,
          { value: w.current },
          n.createElement("div", Object.assign({ className: L }, at.props, u, { ref: F, tabIndex: l ? 0 : void 0 }), e)
        )
      );
    }
  );
sa.displayName = "Scrollable";
function ca() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return !1;
  }
}
function Xi(e) {
  if (!e || ca()) return;
  const r = e.scrollHeight - e.clientHeight,
    t = Math.min(to, r) - la,
    o = () => {
      requestAnimationFrame(() => {
        e.scrollTop >= t && (e.removeEventListener("scroll", o), e.scrollTo({ top: 0, behavior: "smooth" }));
      });
    };
  e.addEventListener("scroll", o), e.scrollTo({ top: to, behavior: "smooth" });
}
const Qi = (e) => {
    const r = e.closest(at.selector);
    return r instanceof HTMLElement ? r : document;
  },
  gr = sa;
gr.ScrollTo = Yi;
gr.forNode = Qi;
const oo = { childList: !0, subtree: !0, characterData: !0, attributeFilter: ["style"] };
class Ji extends c.PureComponent {
  constructor(r) {
    super(r),
      (this.state = {
        measuring: !0,
        activatorRect: ve(this.props.activator),
        right: void 0,
        left: void 0,
        top: 0,
        height: 0,
        width: null,
        positioning: "below",
        zIndex: null,
        outsideScrollableContainer: !1,
        lockPosition: !1,
        chevronOffset: 0,
      }),
      (this.overlay = null),
      (this.scrollableContainers = []),
      (this.overlayDetails = () => {
        const { measuring: t, left: o, right: a, positioning: i, height: l, activatorRect: s, chevronOffset: g } = this.state;
        return { measuring: t, left: o, right: a, desiredHeight: l, positioning: i, activatorRect: s, chevronOffset: g };
      }),
      (this.setOverlay = (t) => {
        this.overlay = t;
      }),
      (this.setScrollableContainers = () => {
        const t = [];
        let o = gr.forNode(this.props.activator);
        if (o) for (t.push(o); o != null && o.parentElement; ) (o = gr.forNode(o.parentElement)), t.push(o);
        this.scrollableContainers = t;
      }),
      (this.registerScrollHandlers = () => {
        this.scrollableContainers.forEach((t) => {
          t.addEventListener("scroll", this.handleMeasurement);
        });
      }),
      (this.unregisterScrollHandlers = () => {
        this.scrollableContainers.forEach((t) => {
          t.removeEventListener("scroll", this.handleMeasurement);
        });
      }),
      (this.handleMeasurement = () => {
        const { lockPosition: t, top: o } = this.state;
        this.observer.disconnect(),
          this.setState(
            ({ left: a, top: i, right: l }) => ({ left: a, right: l, top: i, height: 0, positioning: "below", measuring: !0 }),
            () => {
              if (this.overlay == null || this.firstScrollableContainer == null) return;
              const {
                  activator: a,
                  preferredPosition: i = "below",
                  preferredAlignment: l = "center",
                  onScrollOut: s,
                  fullWidth: g,
                  fixed: m,
                  preferInputActivator: u = !0,
                } = this.props,
                f = (u && a.querySelector("input")) || a,
                v = ve(f),
                p = ve(this.overlay),
                y = rl(this.firstScrollableContainer) ? document.body : this.firstScrollableContainer,
                S = ve(y),
                w = g || i === "cover" ? new _e({ ...p, width: v.width }) : p;
              y === document.body && (S.height = document.body.scrollHeight);
              let F = 0;
              const E = y.querySelector(`${uo.selector}`);
              E && (F = E.clientHeight);
              const O =
                  this.overlay.firstElementChild && this.overlay.firstChild instanceof HTMLElement
                    ? Ki(this.overlay.firstElementChild)
                    : { activator: 0, container: 0, horizontal: 0 },
                _ = na(),
                L = el(a),
                N = L == null ? L : L + 1,
                P = ji(v, w, O, S, _, i, m, F),
                k = Wi(v, w, _, O, l),
                B = v.center.x - k + O.horizontal * 2;
              this.setState(
                {
                  measuring: !1,
                  activatorRect: ve(a),
                  left: l !== "right" ? k : void 0,
                  right: l === "right" ? k : void 0,
                  top: t ? o : P.top,
                  lockPosition: !!m,
                  height: P.height || 0,
                  width: g || i === "cover" ? w.width : null,
                  positioning: P.positioning,
                  outsideScrollableContainer: s != null && Zi(v, Gi(S)),
                  zIndex: N,
                  chevronOffset: B,
                },
                () => {
                  this.overlay && (this.observer.observe(this.overlay, oo), this.observer.observe(a, oo));
                }
              );
            }
          );
      }),
      (this.observer = new MutationObserver(this.handleMeasurement));
  }
  componentDidMount() {
    this.setScrollableContainers(),
      this.scrollableContainers.length && !this.props.fixed && this.registerScrollHandlers(),
      this.handleMeasurement();
  }
  componentWillUnmount() {
    this.observer.disconnect(), this.scrollableContainers.length && !this.props.fixed && this.unregisterScrollHandlers();
  }
  componentDidUpdate() {
    const { outsideScrollableContainer: r, top: t } = this.state,
      { onScrollOut: o, active: a } = this.props;
    a && o != null && t !== 0 && r && o();
  }
  render() {
    const { left: r, right: t, top: o, zIndex: a, width: i } = this.state,
      { render: l, fixed: s, preventInteraction: g, classNames: m, zIndexOverride: u } = this.props,
      f = {
        top: o == null || isNaN(o) ? void 0 : o,
        left: r == null || isNaN(r) ? void 0 : r,
        right: t == null || isNaN(t) ? void 0 : t,
        width: i == null || isNaN(i) ? void 0 : i,
        zIndex: u || a || void 0,
      },
      v = C(Vr.PositionedOverlay, s && Vr.fixed, g && Vr.preventInteraction, m);
    return n.createElement(
      "div",
      { className: v, style: f, ref: this.setOverlay },
      n.createElement(cr, { event: "resize", handler: this.handleMeasurement }),
      l(this.overlayDetails())
    );
  }
  get firstScrollableContainer() {
    return this.scrollableContainers[0] ?? null;
  }
  forceUpdatePosition() {
    requestAnimationFrame(this.handleMeasurement);
  }
}
function Ki(e) {
  const r = window.getComputedStyle(e);
  return {
    activator: parseFloat(r.marginTop || "0"),
    container: parseFloat(r.marginBottom || "0"),
    horizontal: parseFloat(r.marginLeft || "0"),
  };
}
function el(e) {
  const r = e.closest(Ya.selector) || document.body,
    t = r === document.body ? "auto" : parseInt(window.getComputedStyle(r).zIndex || "0", 10);
  return t === "auto" || isNaN(t) ? null : t;
}
function rl(e) {
  return e === document;
}
function tl({ keyCode: e, handler: r, keyEvent: t = "keyup", options: o, useCapture: a }) {
  const i = c.useRef({ handler: r, keyCode: e });
  sr(() => {
    i.current = { handler: r, keyCode: e };
  }, [r, e]);
  const l = c.useCallback((s) => {
    const { handler: g, keyCode: m } = i.current;
    s.keyCode === m && g(s);
  }, []);
  return (
    c.useEffect(
      () => (
        document.addEventListener(t, l, a || o),
        () => {
          document.removeEventListener(t, l, a || o);
        }
      ),
      [t, l, a, o]
    ),
    null
  );
}
var T = {
  TextField: "Polaris-TextField",
  ClearButton: "Polaris-TextField__ClearButton",
  Loading: "Polaris-TextField__Loading",
  disabled: "Polaris-TextField--disabled",
  error: "Polaris-TextField--error",
  readOnly: "Polaris-TextField--readOnly",
  Input: "Polaris-TextField__Input",
  Backdrop: "Polaris-TextField__Backdrop",
  multiline: "Polaris-TextField--multiline",
  hasValue: "Polaris-TextField--hasValue",
  focus: "Polaris-TextField--focus",
  VerticalContent: "Polaris-TextField__VerticalContent",
  InputAndSuffixWrapper: "Polaris-TextField__InputAndSuffixWrapper",
  toneMagic: "Polaris-TextField--toneMagic",
  Prefix: "Polaris-TextField__Prefix",
  Suffix: "Polaris-TextField__Suffix",
  AutoSizeWrapper: "Polaris-TextField__AutoSizeWrapper",
  AutoSizeWrapperWithSuffix: "Polaris-TextField__AutoSizeWrapperWithSuffix",
  suggestion: "Polaris-TextField--suggestion",
  borderless: "Polaris-TextField--borderless",
  slim: "Polaris-TextField--slim",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Input-autoSize": "Polaris-TextField__Input--autoSize",
  PrefixIcon: "Polaris-TextField__PrefixIcon",
  CharacterCount: "Polaris-TextField__CharacterCount",
  AlignFieldBottom: "Polaris-TextField__AlignFieldBottom",
  Spinner: "Polaris-TextField__Spinner",
  SpinnerIcon: "Polaris-TextField__SpinnerIcon",
  Resizer: "Polaris-TextField__Resizer",
  DummyInput: "Polaris-TextField__DummyInput",
  Segment: "Polaris-TextField__Segment",
  monospaced: "Polaris-TextField--monospaced",
};
const ol = n.forwardRef(function ({ onChange: r, onClick: t, onMouseDown: o, onMouseUp: a, onBlur: i }, l) {
  function s(m) {
    return () => r(m);
  }
  function g(m) {
    return (u) => {
      u.button === 0 && (o == null || o(m));
    };
  }
  return n.createElement(
    "div",
    { className: T.Spinner, onClick: t, "aria-hidden": !0, ref: l },
    n.createElement(
      "div",
      { role: "button", className: T.Segment, tabIndex: -1, onClick: s(1), onMouseDown: g(s(1)), onMouseUp: a, onBlur: i },
      n.createElement("div", { className: T.SpinnerIcon }, n.createElement(ne, { source: ft }))
    ),
    n.createElement(
      "div",
      { role: "button", className: T.Segment, tabIndex: -1, onClick: s(-1), onMouseDown: g(s(-1)), onMouseUp: a, onBlur: i },
      n.createElement("div", { className: T.SpinnerIcon }, n.createElement(ne, { source: ut }))
    )
  );
});
var ze = {
    hidden: "Polaris-Labelled--hidden",
    LabelWrapper: "Polaris-Labelled__LabelWrapper",
    disabled: "Polaris-Labelled--disabled",
    HelpText: "Polaris-Labelled__HelpText",
    readOnly: "Polaris-Labelled--readOnly",
    Error: "Polaris-Labelled__Error",
    Action: "Polaris-Labelled__Action",
  },
  ao = { InlineError: "Polaris-InlineError", Icon: "Polaris-InlineError__Icon" };
function ga({ message: e, fieldID: r }) {
  return e
    ? n.createElement(
        "div",
        { id: da(r), className: ao.InlineError },
        n.createElement("div", { className: ao.Icon }, n.createElement(ne, { source: jo })),
        n.createElement($, { as: "span", variant: "bodyMd" }, e)
      )
    : null;
}
function da(e) {
  return `${e}Error`;
}
var yr = {
  Label: "Polaris-Label",
  hidden: "Polaris-Label--hidden",
  Text: "Polaris-Label__Text",
  RequiredIndicator: "Polaris-Label__RequiredIndicator",
};
function ma(e) {
  return `${e}Label`;
}
function al({ children: e, id: r, hidden: t, requiredIndicator: o }) {
  const a = C(yr.Label, t && yr.hidden);
  return n.createElement(
    "div",
    { className: a },
    n.createElement(
      "label",
      { id: ma(r), htmlFor: r, className: C(yr.Text, o && yr.RequiredIndicator) },
      n.createElement($, { as: "span", variant: "bodyMd" }, e)
    )
  );
}
function nl({
  id: e,
  label: r,
  error: t,
  action: o,
  helpText: a,
  children: i,
  labelHidden: l,
  requiredIndicator: s,
  disabled: g,
  readOnly: m,
  ...u
}) {
  const f = C(l && ze.hidden, g && ze.disabled, m && ze.readOnly),
    v = o ? n.createElement("div", { className: ze.Action }, tt(o, { variant: "plain" })) : null,
    p = a
      ? n.createElement(
          "div",
          { className: ze.HelpText, id: ba(e), "aria-disabled": g },
          n.createElement($, { as: "span", tone: "subdued", variant: "bodyMd", breakWord: !0 }, a)
        )
      : null,
    y = t && typeof t != "boolean" && n.createElement("div", { className: ze.Error }, n.createElement(ga, { message: t, fieldID: e })),
    S = r
      ? n.createElement(
          "div",
          { className: ze.LabelWrapper },
          n.createElement(al, Object.assign({ id: e, requiredIndicator: s }, u, { hidden: !1 }), r),
          v
        )
      : null;
  return n.createElement("div", { className: f }, S, i, y, p);
}
function ba(e) {
  return `${e}HelpText`;
}
var nr = {
  Connected: "Polaris-Connected",
  Item: "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-focused": "Polaris-Connected__Item--focused",
};
function qr({ children: e, position: r }) {
  const { value: t, setTrue: o, setFalse: a } = aa(!1),
    i = C(nr.Item, t && nr["Item-focused"], r === "primary" ? nr["Item-primary"] : nr["Item-connection"]);
  return n.createElement("div", { onBlur: a, onFocus: o, className: i }, e);
}
function il({ children: e, left: r, right: t }) {
  const o = r ? n.createElement(qr, { position: "left" }, r) : null,
    a = t ? n.createElement(qr, { position: "right" }, t) : null;
  return n.createElement("div", { className: nr.Connected }, o, n.createElement(qr, { position: "primary" }, e), a);
}
function ll({ contents: e, currentHeight: r = null, minimumLines: t, onHeightChange: o }) {
  const a = c.useRef(null),
    i = c.useRef(null),
    l = c.useRef(),
    s = c.useRef(r);
  r !== s.current && (s.current = r),
    c.useEffect(
      () => () => {
        l.current && cancelAnimationFrame(l.current);
      },
      []
    );
  const g = t ? n.createElement("div", { ref: i, className: T.DummyInput, dangerouslySetInnerHTML: { __html: gl(t) } }) : null,
    m = c.useCallback(() => {
      l.current && cancelAnimationFrame(l.current),
        (l.current = requestAnimationFrame(() => {
          if (!a.current || !i.current) return;
          const u = Math.max(a.current.offsetHeight, i.current.offsetHeight);
          u !== s.current && o(u);
        }));
    }, [o]);
  return (
    sr(() => {
      m();
    }),
    n.createElement(
      "div",
      { "aria-hidden": !0, className: T.Resizer },
      n.createElement(cr, { event: "resize", handler: m }),
      n.createElement("div", { ref: a, className: T.DummyInput, dangerouslySetInnerHTML: { __html: dl(e) } }),
      g
    )
  );
}
const ua = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\n": "<br>", "\r": "" },
  sl = new RegExp(`[${Object.keys(ua).join()}]`, "g");
function cl(e) {
  return ua[e];
}
function gl(e) {
  let r = "";
  for (let t = 0; t < e; t++) r += "<br>";
  return r;
}
function dl(e) {
  return e ? `${e.replace(sl, cl)}<br>` : "<br>";
}
function es({
  prefix: e,
  suffix: r,
  verticalContent: t,
  placeholder: o,
  value: a = "",
  helpText: i,
  label: l,
  labelAction: s,
  labelHidden: g,
  disabled: m,
  clearButton: u,
  readOnly: f,
  autoFocus: v,
  focused: p,
  multiline: y,
  error: S,
  connectedRight: w,
  connectedLeft: F,
  type: E = "text",
  name: O,
  id: _,
  role: L,
  step: N,
  largeStep: P,
  autoComplete: k,
  max: B,
  maxLength: z,
  maxHeight: I,
  min: A,
  minLength: W,
  pattern: K,
  inputMode: Te,
  spellCheck: ye,
  ariaOwns: ee,
  ariaControls: we,
  ariaExpanded: ke,
  ariaActiveDescendant: Ce,
  ariaAutocomplete: Be,
  showCharacterCount: Se,
  align: Ee,
  requiredIndicator: Ne,
  monospaced: Me,
  selectTextOnFocus: Pe,
  suggestion: re,
  variant: Ue = "inherit",
  size: qe = "medium",
  onClearButtonClick: He,
  onChange: te,
  onSpinnerChange: se,
  onFocus: Ye,
  onBlur: mr,
  tone: xt,
  autoSize: Fr,
  loading: wa,
}) {
  const zr = Re(),
    [Ar, ka] = c.useState(null),
    [Xe, _r] = c.useState(!!p),
    Sa = Br(),
    Ea = c.useId(),
    R = _ ?? Ea,
    yt = c.useRef(null),
    he = c.useRef(null),
    wt = c.useRef(null),
    Lr = c.useRef(null),
    Or = c.useRef(null),
    Rr = c.useRef(null),
    br = c.useRef(null),
    Ur = c.useRef(),
    Hr = c.useRef(null),
    De = c.useCallback(() => (y ? wt.current : he.current), [y]);
  c.useEffect(() => {
    const x = De();
    !x || p === void 0 || (p ? x.focus() : x.blur());
  }, [p, t, De]),
    c.useEffect(() => {
      const x = he.current;
      !x ||
        !(E === "text" || E === "tel" || E === "search" || E === "url" || E === "password") ||
        !re ||
        x.setSelectionRange(a.length, re.length);
    }, [Xe, a, E, re]);
  const Qe = re || a,
    kt = N ?? 1,
    St = B ?? 1 / 0,
    Et = A ?? -1 / 0,
    Pa = C(
      T.TextField,
      !!Qe && T.hasValue,
      m && T.disabled,
      f && T.readOnly,
      S && T.error,
      xt && T[D("tone", xt)],
      y && T.multiline,
      Xe && !m && T.focus,
      Ue !== "inherit" && T[Ue],
      qe === "slim" && T.slim
    ),
    Ia = E === "currency" ? "text" : E,
    ur = E === "number" || E === "integer",
    Ta = n.isValidElement(e) && e.type === ne,
    Ca = e
      ? n.createElement(
          "div",
          { className: C(T.Prefix, Ta && T.PrefixIcon), id: `${R}-Prefix`, ref: Lr },
          n.createElement($, { as: "span", variant: "bodyMd" }, e)
        )
      : null,
    Pt = r
      ? n.createElement(
          "div",
          { className: T.Suffix, id: `${R}-Suffix`, ref: Or },
          n.createElement($, { as: "span", variant: "bodyMd" }, r)
        )
      : null,
    Ba = wa ? n.createElement("div", { className: T.Loading, id: `${R}-Loading`, ref: Rr }, n.createElement(ta, { size: "small" })) : null;
  let It = null;
  if (Se) {
    const x = Qe.length,
      M = z
        ? zr.translate("Polaris.TextField.characterCountWithMaxLength", { count: x, limit: z })
        : zr.translate("Polaris.TextField.characterCount", { count: x }),
      G = C(T.CharacterCount, y && T.AlignFieldBottom),
      Q = z ? `${x}/${z}` : x;
    It = n.createElement(
      "div",
      {
        id: `${R}-CharacterCounter`,
        className: G,
        "aria-label": M,
        "aria-live": Xe ? "polite" : "off",
        "aria-atomic": "true",
        onClick: fr,
      },
      n.createElement($, { as: "span", variant: "bodyMd" }, Q)
    );
  }
  const Na =
      u && Qe !== ""
        ? n.createElement(
            "button",
            { type: "button", className: T.ClearButton, onClick: $a, disabled: m },
            n.createElement($, { as: "span", visuallyHidden: !0 }, zr.translate("Polaris.Common.clear")),
            n.createElement(ne, { source: Xo, tone: "base" })
          )
        : null,
    Je = c.useCallback(
      (x, M = kt) => {
        if (te == null && se == null) return;
        const G = (Za) => (Za.toString().split(".")[1] || []).length,
          Q = a ? parseFloat(a) : 0;
        if (isNaN(Q)) return;
        const me = E === "integer" ? 0 : Math.max(G(Q), G(M)),
          rr = Math.min(Number(St), Math.max(Q + x * M, Number(Et)));
        se != null ? se(String(rr.toFixed(me)), R) : te != null && te(String(rr.toFixed(me)), R);
      },
      [R, St, Et, te, se, kt, E, a]
    ),
    Dr = c.useCallback(() => {
      clearTimeout(Ur.current);
    }, []),
    Ma = c.useCallback(
      (x) => {
        let Q = 200;
        const me = () => {
          Q > 50 && (Q -= 10), x(0), (Ur.current = window.setTimeout(me, Q));
        };
        (Ur.current = window.setTimeout(me, Q)), document.addEventListener("mouseup", Dr, { once: !0 });
      },
      [Dr]
    ),
    Fa =
      ur && N !== 0 && !m && !f
        ? n.createElement(ol, { onClick: fr, onChange: Je, onMouseDown: Ma, onMouseUp: Dr, ref: Hr, onBlur: Mt })
        : null,
    za = y && Ar ? { height: Ar, maxHeight: I } : null,
    Aa = c.useCallback((x) => {
      ka(x);
    }, []),
    _a =
      y && Sa
        ? n.createElement(ll, { contents: Qe || o, currentHeight: Ar, minimumLines: typeof y == "number" ? y : 1, onHeightChange: Aa })
        : null,
    Ke = [];
  S && Ke.push(`${R}Error`), i && Ke.push(ba(R)), Se && Ke.push(`${R}-CharacterCounter`);
  const er = [];
  e && er.push(`${R}-Prefix`), r && er.push(`${R}-Suffix`), t && er.push(`${R}-VerticalContent`), er.unshift(ma(R));
  const La = C(
      T.Input,
      Ee && T[D("Input-align", Ee)],
      r && T["Input-suffixed"],
      u && T["Input-hasClearButton"],
      Me && T.monospaced,
      re && T.suggestion,
      Fr && T["Input-autoSize"]
    ),
    Tt = (x) => {
      if ((_r(!0), Pe && !re)) {
        const M = De();
        M == null || M.select();
      }
      Ye && Ye(x);
    };
  Ao("wheel", Oa, he);
  function Oa(x) {
    document.activeElement === x.target && ur && x.stopPropagation();
  }
  const Ct = c.createElement(y ? "textarea" : "input", {
      name: O,
      id: R,
      disabled: m,
      readOnly: f,
      role: L,
      autoFocus: v,
      value: Qe,
      placeholder: o,
      style: za,
      autoComplete: k,
      className: La,
      ref: y ? wt : he,
      min: A,
      max: B,
      step: N,
      minLength: W,
      maxLength: z,
      spellCheck: ye,
      pattern: K,
      inputMode: Te,
      type: Ia,
      rows: ml(y),
      size: Fr ? 1 : void 0,
      "aria-describedby": Ke.length ? Ke.join(" ") : void 0,
      "aria-labelledby": er.join(" "),
      "aria-invalid": !!S,
      "aria-owns": ee,
      "aria-activedescendant": Ce,
      "aria-autocomplete": Be,
      "aria-controls": we,
      "aria-expanded": ke,
      "aria-required": Ne,
      ...bl(y),
      onFocus: Tt,
      onBlur: Mt,
      onClick: fr,
      onKeyPress: ja,
      onKeyDown: Wa,
      onChange: re ? void 0 : Nt,
      onInput: re ? Nt : void 0,
      "data-1p-ignore": k === "off" || void 0,
      "data-lpignore": k === "off" || void 0,
      "data-form-type": k === "off" ? "other" : void 0,
    }),
    Ra = t ? n.createElement("div", { className: T.VerticalContent, id: `${R}-VerticalContent`, ref: br, onClick: fr }, t, Ct) : null,
    Bt = t ? Ra : Ct,
    Ua = n.createElement("div", { className: C(T.Backdrop, F && T["Backdrop-connectedLeft"], w && T["Backdrop-connectedRight"]) }),
    Ha = Fr
      ? n.createElement(
          "div",
          { className: T.InputAndSuffixWrapper },
          n.createElement("div", { className: C(T.AutoSizeWrapper, r && T.AutoSizeWrapperWithSuffix), "data-auto-size-value": a || o }, Bt),
          Pt
        )
      : n.createElement(n.Fragment, null, Bt, Pt);
  return n.createElement(
    nl,
    { label: l, id: R, error: S, action: s, labelHidden: g, helpText: i, requiredIndicator: Ne, disabled: m, readOnly: f },
    n.createElement(
      il,
      { left: F, right: w },
      n.createElement("div", { className: Pa, onClick: Da, ref: yt }, Ca, Ha, It, Ba, Na, Fa, Ua, _a)
    )
  );
  function Nt(x) {
    te && te(x.currentTarget.value, R);
  }
  function Da(x) {
    var Q, me, rr;
    const { target: M } = x,
      G = (Q = he == null ? void 0 : he.current) == null ? void 0 : Q.getAttribute("role");
    if (M === he.current && G === "combobox") {
      (me = he.current) == null || me.focus(), Tt(x);
      return;
    }
    Ft(M) || _t(M) || $r(M) || zt(M) || At(M) || Xe || (rr = De()) == null || rr.focus();
  }
  function fr(x) {
    var M;
    !zt(x.target) && !$r(x.target) && x.stopPropagation(),
      !(Ft(x.target) || _t(x.target) || $r(x.target) || At(x.target) || Xe) && (_r(!0), (M = De()) == null || M.focus());
  }
  function $a() {
    He && He(R);
  }
  function ja(x) {
    const { key: M, which: G } = x,
      Q = /[\d.,eE+-]$/,
      me = /[\deE+-]$/;
    !ur || G === ue.Enter || (E === "number" && Q.test(M)) || (E === "integer" && me.test(M)) || x.preventDefault();
  }
  function Wa(x) {
    if (!ur) return;
    const { key: M, which: G } = x;
    E === "integer" && (M === "ArrowUp" || G === ue.UpArrow) && (Je(1), x.preventDefault()),
      E === "integer" && (M === "ArrowDown" || G === ue.DownArrow) && (Je(-1), x.preventDefault()),
      (G === ue.Home || M === "Home") && A !== void 0 && (se != null ? se(String(A), R) : te != null && te(String(A), R)),
      (G === ue.End || M === "End") && B !== void 0 && (se != null ? se(String(B), R) : te != null && te(String(B), R)),
      (G === ue.PageUp || M === "PageUp") && P !== void 0 && Je(1, P),
      (G === ue.PageDown || M === "PageDown") && P !== void 0 && Je(-1, P);
  }
  function Mt(x) {
    var M;
    _r(!1), !((M = yt.current) != null && M.contains(x == null ? void 0 : x.relatedTarget)) && mr && mr(x);
  }
  function $r(x) {
    const M = De();
    return x instanceof HTMLElement && M && (M.contains(x) || M.contains(document.activeElement));
  }
  function Ft(x) {
    return x instanceof Element && ((Lr.current && Lr.current.contains(x)) || (Or.current && Or.current.contains(x)));
  }
  function zt(x) {
    return x instanceof Element && Hr.current && Hr.current.contains(x);
  }
  function At(x) {
    return x instanceof Element && Rr.current && Rr.current.contains(x);
  }
  function _t(x) {
    return x instanceof Element && br.current && (br.current.contains(x) || br.current.contains(document.activeElement));
  }
}
function ml(e) {
  if (e) return typeof e == "number" ? e : 1;
}
function bl(e) {
  if (e) return e || (typeof e == "number" && e > 0) ? { "aria-multiline": !0 } : void 0;
}
function ul(e, { id: r, active: t = !1, ariaHaspopup: o, activatorDisabled: a = !1 }) {
  a || (e.tabIndex = e.tabIndex || 0),
    e.setAttribute("aria-controls", r),
    e.setAttribute("aria-owns", r),
    e.setAttribute("aria-expanded", String(t)),
    e.setAttribute("data-state", t ? "open" : "closed"),
    o != null && e.setAttribute("aria-haspopup", String(o));
}
function Mr(e, r, t) {
  return e == null ? null : pt(e, r) ? e : n.createElement(r, t, e);
}
const fl = (e, r) => e === r;
function pt(e, r) {
  var l;
  if (e == null || !c.isValidElement(e) || typeof e.type == "string") return !1;
  const { type: t } = e,
    a = ((l = e.props) == null ? void 0 : l.__type__) || t;
  return (Array.isArray(r) ? r : [r]).some((s) => typeof a != "string" && fl(s, a));
}
function hl(e, r = () => !0) {
  return c.Children.toArray(e).filter((t) => c.isValidElement(t) && r(t));
}
function rs({ condition: e, wrapper: r, children: t }) {
  return e ? r(t) : t;
}
function ts({ condition: e, children: r }) {
  return e ? r : null;
}
var H = {
  Popover: "Polaris-Popover",
  PopoverOverlay: "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-noAnimation": "Polaris-Popover__PopoverOverlay--noAnimation",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  measuring: "Polaris-Popover--measuring",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  fullWidth: "Polaris-Popover--fullWidth",
  Content: "Polaris-Popover__Content",
  positionedAbove: "Polaris-Popover--positionedAbove",
  positionedCover: "Polaris-Popover--positionedCover",
  ContentContainer: "Polaris-Popover__ContentContainer",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  Pane: "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Pane-subdued": "Polaris-Popover__Pane--subdued",
  "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
  Section: "Polaris-Popover__Section",
  FocusTracker: "Polaris-Popover__FocusTracker",
  "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint",
};
function fa({ children: e }) {
  return n.createElement(
    "div",
    { className: H.Section },
    n.createElement(ce, { paddingInlineStart: "300", paddingInlineEnd: "300", paddingBlockStart: "200", paddingBlockEnd: "150" }, e)
  );
}
function ot({ captureOverscroll: e = !1, fixed: r, sectioned: t, children: o, height: a, subdued: i, onScrolledToBottom: l }) {
  const s = C(H.Pane, r && H["Pane-fixed"], i && H["Pane-subdued"], e && H["Pane-captureOverscroll"]),
    g = t ? Mr(o, fa, {}) : o,
    m = a ? { height: a, maxHeight: a, minHeight: a } : void 0;
  return r
    ? n.createElement("div", { style: m, className: s }, g)
    : n.createElement(gr, { shadow: !0, className: s, style: m, onScrolledToBottom: l, scrollbarWidth: "thin" }, g);
}
let xe;
(function (e) {
  (e[(e.Click = 0)] = "Click"),
    (e[(e.EscapeKeypress = 1)] = "EscapeKeypress"),
    (e[(e.FocusOut = 2)] = "FocusOut"),
    (e[(e.ScrollOut = 3)] = "ScrollOut");
})(xe || (xe = {}));
var le;
(function (e) {
  (e.Entering = "entering"), (e.Entered = "entered"), (e.Exiting = "exiting"), (e.Exited = "exited");
})(le || (le = {}));
class ha extends c.PureComponent {
  constructor(r) {
    super(r),
      (this.state = { transitionStatus: this.props.active ? le.Entering : le.Exited }),
      (this.contentNode = c.createRef()),
      (this.renderPopover = (t) => {
        const { measuring: o, desiredHeight: a, positioning: i } = t,
          {
            id: l,
            children: s,
            sectioned: g,
            fullWidth: m,
            fullHeight: u,
            fluidContent: f,
            hideOnPrint: v,
            autofocusTarget: p,
            captureOverscroll: y,
          } = this.props,
          S = i === "cover",
          w = C(H.Popover, o && H.measuring, (m || S) && H.fullWidth, v && H["PopoverOverlay-hideOnPrint"], i && H[D("positioned", i)]),
          F = o ? void 0 : { height: a },
          E = C(H.Content, u && H["Content-fullHeight"], f && H["Content-fluidContent"]);
        return n.createElement(
          "div",
          Object.assign({ className: w }, qa.props),
          n.createElement(cr, { event: "click", handler: this.handleClick }),
          n.createElement(cr, { event: "touchstart", handler: this.handleClick }),
          n.createElement(tl, { keyCode: ue.Escape, handler: this.handleEscape }),
          n.createElement("div", { className: H.FocusTracker, tabIndex: 0, onFocus: this.handleFocusFirstItem }),
          n.createElement(
            "div",
            { className: H.ContentContainer },
            n.createElement(
              "div",
              { id: l, tabIndex: p === "none" ? void 0 : -1, className: E, style: F, ref: this.contentNode },
              pl(s, { captureOverscroll: y, sectioned: g })
            )
          ),
          n.createElement("div", { className: H.FocusTracker, tabIndex: 0, onFocus: this.handleFocusLastItem })
        );
      }),
      (this.handleClick = (t) => {
        const o = t.target,
          {
            contentNode: a,
            props: { activator: i, onClose: l, preventCloseOnChildOverlayClick: s },
          } = this,
          g = t.composedPath(),
          m = s ? vl(g, this.context.container) : io(g, a),
          u = no(i, o);
        m || u || this.state.transitionStatus !== le.Entered || l(xe.Click);
      }),
      (this.handleScrollOut = () => {
        this.props.onClose(xe.ScrollOut);
      }),
      (this.handleEscape = (t) => {
        const o = t.target,
          {
            contentNode: a,
            props: { activator: i },
          } = this,
          l = t.composedPath(),
          s = io(l, a),
          g = no(i, o);
        (s || g) && this.props.onClose(xe.EscapeKeypress);
      }),
      (this.handleFocusFirstItem = () => {
        this.props.onClose(xe.FocusOut);
      }),
      (this.handleFocusLastItem = () => {
        this.props.onClose(xe.FocusOut);
      }),
      (this.overlayRef = c.createRef());
  }
  forceUpdatePosition() {
    var r;
    (r = this.overlayRef.current) == null || r.forceUpdatePosition();
  }
  changeTransitionStatus(r, t) {
    this.setState({ transitionStatus: r }, t), this.contentNode.current && this.contentNode.current.getBoundingClientRect();
  }
  componentDidMount() {
    this.props.active && (this.focusContent(), this.changeTransitionStatus(le.Entered));
  }
  componentDidUpdate(r) {
    this.props.active &&
      !r.active &&
      (this.focusContent(),
      this.changeTransitionStatus(le.Entering, () => {
        this.clearTransitionTimeout(),
          (this.enteringTimer = window.setTimeout(() => {
            this.setState({ transitionStatus: le.Entered });
          }, parseInt(lt.motion["motion-duration-100"], 10)));
      })),
      !this.props.active && r.active && (this.clearTransitionTimeout(), this.setState({ transitionStatus: le.Exited }));
  }
  componentWillUnmount() {
    this.clearTransitionTimeout();
  }
  render() {
    const {
        active: r,
        activator: t,
        fullWidth: o,
        preferredPosition: a = "below",
        preferredAlignment: i = "center",
        preferInputActivator: l = !0,
        fixed: s,
        zIndexOverride: g,
      } = this.props,
      { transitionStatus: m } = this.state;
    if (m === le.Exited && !r) return null;
    const u = C(
      H.PopoverOverlay,
      m === le.Entering && H["PopoverOverlay-entering"],
      m === le.Entered && H["PopoverOverlay-open"],
      m === le.Exiting && H["PopoverOverlay-exiting"],
      a === "cover" && H["PopoverOverlay-noAnimation"]
    );
    return n.createElement(Ji, {
      ref: this.overlayRef,
      fullWidth: o,
      active: r,
      activator: t,
      preferInputActivator: l,
      preferredPosition: a,
      preferredAlignment: i,
      render: this.renderPopover.bind(this),
      fixed: s,
      onScrollOut: this.handleScrollOut,
      classNames: u,
      zIndexOverride: g,
    });
  }
  clearTransitionTimeout() {
    this.enteringTimer && window.clearTimeout(this.enteringTimer);
  }
  focusContent() {
    const { autofocusTarget: r = "container" } = this.props;
    r === "none" ||
      this.contentNode == null ||
      requestAnimationFrame(() => {
        if (this.contentNode.current == null) return;
        const t = Ko(this.contentNode.current);
        t && r === "first-node" ? t.focus({ preventScroll: !1 }) : this.contentNode.current.focus({ preventScroll: !1 });
      });
  }
}
ha.contextType = bt;
function pl(e, r) {
  const t = c.Children.toArray(e);
  return pt(t[0], ot) ? t : Mr(t, ot, r);
}
function no(e, r) {
  if (e === r) return !0;
  let t = r.parentNode;
  for (; t != null; ) {
    if (t === e) return !0;
    t = t.parentNode;
  }
  return !1;
}
function io(e, r) {
  return r.current != null && e.includes(r.current);
}
function vl(e, r) {
  return e.some((t) => t instanceof Node && (r == null ? void 0 : r.contains(t)));
}
const xl = c.forwardRef(function (
  {
    activatorWrapper: r = "div",
    children: t,
    onClose: o,
    activator: a,
    preventFocusOnClose: i,
    active: l,
    fixed: s,
    ariaHaspopup: g,
    preferInputActivator: m = !0,
    zIndexOverride: u,
    ...f
  },
  v
) {
  const [p, y] = c.useState(),
    S = c.useRef(null),
    w = c.useRef(null),
    F = r,
    E = c.useId();
  function O() {
    var P;
    (P = S.current) == null || P.forceUpdatePosition();
  }
  c.useImperativeHandle(v, () => ({ forceUpdatePosition: O }));
  const _ = c.useCallback(() => {
      if (w.current == null) return;
      const k = or(w.current) || w.current,
        B = "disabled" in k && !!k.disabled;
      ul(k, { id: E, active: l, ariaHaspopup: g, activatorDisabled: B });
    }, [E, l, g]),
    L = (P) => {
      if ((o(P), !(w.current == null || i))) {
        if (P === xe.FocusOut && p) {
          const k = or(p) || or(w.current) || w.current;
          Jt(k, lo) || k.focus();
        } else if (P === xe.EscapeKeypress && p) {
          const k = or(p) || or(w.current) || w.current;
          k ? k.focus() : Jt(k, lo);
        }
      }
    };
  c.useEffect(() => {
    ((!p && w.current) || (p && w.current && !w.current.contains(p))) && y(w.current.firstElementChild), _();
  }, [p, _]),
    c.useEffect(() => {
      p && w.current && y(w.current.firstElementChild), _();
    }, [p, _]);
  const N = p
    ? n.createElement(
        Di,
        { idPrefix: "popover" },
        n.createElement(
          ha,
          Object.assign({ ref: S, id: E, activator: p, preferInputActivator: m, onClose: L, active: l, fixed: s, zIndexOverride: u }, f),
          t
        )
      )
    : null;
  return n.createElement(F, { ref: w }, c.Children.only(a), N);
});
function lo(e) {
  let r = e.parentElement;
  for (; r; ) {
    if (r.matches(Xa.selector)) return !1;
    r = r.parentElement;
  }
  return !0;
}
const os = Object.assign(xl, { Pane: ot, Section: fa }),
  as = c.createContext(void 0),
  yl = c.createContext(!1),
  ns = c.createContext(!1);
var be = {
    Checkbox: "Polaris-Checkbox",
    ChoiceLabel: "Polaris-Checkbox__ChoiceLabel",
    Backdrop: "Polaris-Checkbox__Backdrop",
    Input: "Polaris-Checkbox__Input",
    "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
    Icon: "Polaris-Checkbox__Icon",
    animated: "Polaris-Checkbox--animated",
    toneMagic: "Polaris-Checkbox--toneMagic",
    hover: "Polaris-Checkbox--hover",
    error: "Polaris-Checkbox--error",
    checked: "Polaris-Checkbox--checked",
    pathAnimation: "Polaris-Checkbox--pathAnimation",
  },
  pe = {
    Choice: "Polaris-Choice",
    labelHidden: "Polaris-Choice--labelHidden",
    Label: "Polaris-Choice__Label",
    Control: "Polaris-Choice__Control",
    disabled: "Polaris-Choice--disabled",
    toneMagic: "Polaris-Choice--toneMagic",
    Descriptions: "Polaris-Choice__Descriptions",
    HelpText: "Polaris-Choice__HelpText",
  };
function wl({
  id: e,
  label: r,
  disabled: t,
  error: o,
  children: a,
  labelHidden: i,
  helpText: l,
  onClick: s,
  labelClassName: g,
  fill: m,
  bleed: u,
  bleedBlockStart: f,
  bleedBlockEnd: v,
  bleedInlineStart: p,
  bleedInlineEnd: y,
  tone: S,
}) {
  const w = C(pe.Choice, i && pe.labelHidden, t && pe.disabled, S && pe[D("tone", S)], g),
    F = {
      ...fe("choice", "bleed-block-end", "space", v || u),
      ...fe("choice", "bleed-block-start", "space", f || u),
      ...fe("choice", "bleed-inline-start", "space", p || u),
      ...fe("choice", "bleed-inline-end", "space", y || u),
      ...Object.fromEntries(Object.entries(Fo("choice", "fill", m)).map(([N, P]) => [N, P ? "100%" : "auto"])),
    },
    E = n.createElement(
      "label",
      { className: w, htmlFor: e, onClick: s, style: gt(F) },
      n.createElement("span", { className: pe.Control }, a),
      n.createElement("span", { className: pe.Label }, n.createElement($, { as: "span", variant: "bodyMd" }, r))
    ),
    O = l
      ? n.createElement("div", { className: pe.HelpText, id: pa(e) }, n.createElement($, { as: "span", tone: t ? void 0 : "subdued" }, l))
      : null,
    _ = o && typeof o != "boolean" && n.createElement("div", { className: pe.Error }, n.createElement(ga, { message: o, fieldID: e })),
    L = O || _ ? n.createElement("div", { className: pe.Descriptions }, _, O) : null;
  return L ? n.createElement("div", null, E, L) : E;
}
function pa(e) {
  return `${e}HelpText`;
}
const is = c.forwardRef(function (
  {
    ariaControls: r,
    ariaDescribedBy: t,
    label: o,
    labelHidden: a,
    checked: i = !1,
    helpText: l,
    disabled: s,
    id: g,
    name: m,
    value: u,
    error: f,
    onChange: v,
    onFocus: p,
    onBlur: y,
    labelClassName: S,
    fill: w,
    bleed: F,
    bleedBlockStart: E,
    bleedBlockEnd: O,
    bleedInlineStart: _,
    bleedInlineEnd: L,
    tone: N,
  },
  P
) {
  const k = c.useRef(null),
    B = c.useId(),
    z = g ?? B,
    I = c.useContext(yl);
  c.useImperativeHandle(P, () => ({
    focus: () => {
      k.current && k.current.focus();
    },
  }));
  const A = () => {
      y && y();
    },
    W = () => {
      v == null || k.current == null || s || (v(k.current.checked, z), k.current.focus());
    },
    K = [];
  f && typeof f != "boolean" && K.push(da(z)), l && K.push(pa(z)), t && K.push(t);
  const Te = K.length ? K.join(" ") : void 0,
    ye = C(be.Checkbox, f && be.error),
    ee = i === "indeterminate",
    we = !ee && !!i,
    ke = ee ? { indeterminate: "true", "aria-checked": "mixed" } : { "aria-checked": we },
    Ce = n.createElement(
      "svg",
      { viewBox: "0 0 16 16", shapeRendering: "geometricPrecision", textRendering: "geometricPrecision" },
      n.createElement("path", {
        className: C(i && be.checked),
        d: "M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",
        transform: "translate(2 2.980376)",
        opacity: "0",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pathLength: "1",
      })
    ),
    Be = C(be.Input, ee && be["Input-indeterminate"], N && be[D("tone", N)]),
    Se = { helpText: l, error: f, bleed: F, bleedBlockStart: E, bleedBlockEnd: O, bleedInlineStart: _, bleedInlineEnd: L };
  return n.createElement(
    wl,
    Object.assign({ id: z, label: o, labelHidden: a, disabled: s, labelClassName: C(be.ChoiceLabel, S), fill: w, tone: N }, Se),
    n.createElement(
      "span",
      { className: ye },
      n.createElement(
        "input",
        Object.assign(
          {
            ref: k,
            id: z,
            name: m,
            value: u,
            type: "checkbox",
            checked: we,
            disabled: s,
            className: Be,
            onBlur: A,
            onChange: kl,
            onClick: W,
            onFocus: p,
            "aria-invalid": f != null,
            "aria-controls": r,
            "aria-describedby": Te,
            role: I ? "presentation" : "checkbox",
          },
          ke
        )
      ),
      n.createElement("span", { className: be.Backdrop, onClick: so, onKeyUp: so }),
      n.createElement("span", { className: C(be.Icon, !ee && be.animated) }, ee ? n.createElement(ne, { source: qo }) : Ce)
    )
  );
});
function kl() {}
function so(e) {
  e.stopPropagation();
}
const Sl = c.createContext(!1);
var Ae = {
  Banner: "Polaris-Banner",
  keyFocused: "Polaris-Banner--keyFocused",
  withinContentContainer: "Polaris-Banner--withinContentContainer",
  withinPage: "Polaris-Banner--withinPage",
  DismissIcon: "Polaris-Banner__DismissIcon",
  "text-success-on-bg-fill": "Polaris-Banner--textSuccessOnBgFill",
  "text-success": "Polaris-Banner__text--success",
  "text-warning-on-bg-fill": "Polaris-Banner--textWarningOnBgFill",
  "text-warning": "Polaris-Banner__text--warning",
  "text-critical-on-bg-fill": "Polaris-Banner--textCriticalOnBgFill",
  "text-critical": "Polaris-Banner__text--critical",
  "text-info-on-bg-fill": "Polaris-Banner--textInfoOnBgFill",
  "text-info": "Polaris-Banner__text--info",
  "icon-secondary": "Polaris-Banner__icon--secondary",
};
const Yr = {
  success: {
    withinPage: { background: "bg-fill-success", text: "text-success-on-bg-fill", icon: "text-success-on-bg-fill" },
    withinContentContainer: { background: "bg-surface-success", text: "text-success", icon: "text-success" },
    icon: Go,
  },
  warning: {
    withinPage: { background: "bg-fill-warning", text: "text-warning-on-bg-fill", icon: "text-warning-on-bg-fill" },
    withinContentContainer: { background: "bg-surface-warning", text: "text-warning", icon: "text-warning" },
    icon: Zo,
  },
  critical: {
    withinPage: { background: "bg-fill-critical", text: "text-critical-on-bg-fill", icon: "text-critical-on-bg-fill" },
    withinContentContainer: { background: "bg-surface-critical", text: "text-critical", icon: "text-critical" },
    icon: Wo,
  },
  info: {
    withinPage: { background: "bg-fill-info", text: "text-info-on-bg-fill", icon: "text-info-on-bg-fill" },
    withinContentContainer: { background: "bg-surface-info", text: "text-info", icon: "text-info" },
    icon: Vo,
  },
};
function El(e) {
  const r = c.useRef(null),
    [t, o] = c.useState(!1);
  return (
    c.useImperativeHandle(
      e,
      () => ({
        focus: () => {
          var s;
          (s = r.current) == null || s.focus(), o(!0);
        },
      }),
      []
    ),
    {
      wrapperRef: r,
      handleKeyUp: (s) => {
        s.target === r.current && o(!0);
      },
      handleBlur: () => o(!1),
      handleMouseUp: (s) => {
        s.currentTarget.blur(), o(!1);
      },
      shouldShowFocus: t,
    }
  );
}
var Ie = {
  ButtonGroup: "Polaris-ButtonGroup",
  Item: "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  variantSegmented: "Polaris-ButtonGroup--variantSegmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  fullWidth: "Polaris-ButtonGroup--fullWidth",
  extraTight: "Polaris-ButtonGroup--extraTight",
  tight: "Polaris-ButtonGroup--tight",
  loose: "Polaris-ButtonGroup--loose",
  noWrap: "Polaris-ButtonGroup--noWrap",
};
function Pl({ button: e }) {
  const { value: r, setTrue: t, setFalse: o } = aa(!1),
    a = C(Ie.Item, r && Ie["Item-focused"], e.props.variant === "plain" && Ie["Item-plain"]);
  return n.createElement("div", { className: a, onFocus: t, onBlur: o }, e);
}
function Il({ children: e, gap: r, variant: t, fullWidth: o, connectedTop: a, noWrap: i }) {
  const l = C(Ie.ButtonGroup, r && Ie[r], t && Ie[D("variant", t)], o && Ie.fullWidth, i && Ie.noWrap),
    s = hl(e).map((g, m) => n.createElement(Pl, { button: g, key: m }));
  return n.createElement(
    "div",
    {
      className: l,
      "data-buttongroup-variant": t,
      "data-buttongroup-connected-top": a,
      "data-buttongroup-full-width": o,
      "data-buttongroup-no-wrap": i,
    },
    s
  );
}
const ls = c.forwardRef(function (r, t) {
  const { tone: o, stopAnnouncements: a } = r,
    i = c.useContext(zo),
    { wrapperRef: l, handleKeyUp: s, handleBlur: g, handleMouseUp: m, shouldShowFocus: u } = El(t),
    f = C(Ae.Banner, u && Ae.keyFocused, i ? Ae.withinContentContainer : Ae.withinPage);
  return n.createElement(
    Sl.Provider,
    { value: !0 },
    n.createElement(
      "div",
      {
        className: f,
        tabIndex: 0,
        ref: l,
        role: o === "warning" || o === "critical" ? "alert" : "status",
        "aria-live": a ? "off" : "polite",
        onMouseUp: m,
        onKeyUp: s,
        onBlur: g,
      },
      n.createElement(Tl, r)
    )
  );
});
function Tl({ tone: e = "info", icon: r, hideIcon: t, onDismiss: o, action: a, secondaryAction: i, title: l, children: s }) {
  const g = Re(),
    m = c.useContext(zo),
    u = !l && !m,
    f = Object.keys(Yr).includes(e) ? e : "info",
    v = Yr[f][m ? "withinContentContainer" : "withinPage"],
    p = {
      backgroundColor: v.background,
      textColor: v.text,
      bannerTitle: l ? n.createElement($, { as: "h2", variant: "headingSm", breakWord: !0 }, l) : null,
      bannerIcon: t ? null : n.createElement("span", { className: Ae[v.icon] }, n.createElement(ne, { source: r ?? Yr[f].icon })),
      actionButtons:
        a || i
          ? n.createElement(
              Il,
              null,
              a && n.createElement(Sr, Object.assign({ onClick: a.onAction }, a), a.content),
              i && n.createElement(Sr, Object.assign({ onClick: i.onAction }, i), i.content)
            )
          : null,
      dismissButton: o
        ? n.createElement(Sr, {
            variant: "tertiary",
            icon: n.createElement("span", { className: Ae[u ? "icon-secondary" : v.icon] }, n.createElement(ne, { source: Qo })),
            onClick: o,
            accessibilityLabel: g.translate("Polaris.Banner.dismissButton"),
          })
        : null,
    },
    y = s ? n.createElement($, { as: "span", variant: "bodyMd" }, s) : null;
  return m ? n.createElement(Nl, p, y) : u ? n.createElement(Bl, p, y) : n.createElement(Cl, p, y);
}
function Cl({ backgroundColor: e, textColor: r, bannerTitle: t, bannerIcon: o, actionButtons: a, dismissButton: i, children: l }) {
  const { smUp: s } = mt(),
    g = l || a;
  return n.createElement(
    ce,
    { width: "100%" },
    n.createElement(
      Oe,
      { align: "space-between" },
      n.createElement(
        ce,
        {
          background: e,
          color: r,
          borderStartStartRadius: s ? "300" : void 0,
          borderStartEndRadius: s ? "300" : void 0,
          borderEndStartRadius: !g && s ? "300" : void 0,
          borderEndEndRadius: !g && s ? "300" : void 0,
          padding: "300",
        },
        n.createElement(
          Le,
          { align: "space-between", blockAlign: "center", gap: "200", wrap: !1 },
          n.createElement(Le, { gap: "100", wrap: !1 }, o, t),
          i
        )
      ),
      g &&
        n.createElement(
          ce,
          { padding: { xs: "300", md: "400" }, paddingBlockStart: "300" },
          n.createElement(Oe, { gap: "200" }, n.createElement("div", null, l), a)
        )
    )
  );
}
function Bl({ backgroundColor: e, bannerIcon: r, actionButtons: t, dismissButton: o, children: a }) {
  const [i, l] = c.useState("center"),
    s = c.useRef(null),
    g = c.useRef(null),
    m = c.useRef(null),
    u = c.useCallback(() => {
      var p, y, S;
      const f = (p = s.current) == null ? void 0 : p.offsetHeight,
        v = ((y = g.current) == null ? void 0 : y.offsetHeight) || ((S = m.current) == null ? void 0 : S.offsetHeight);
      !f || !v || (f > v ? l("start") : l("center"));
    }, []);
  return (
    c.useEffect(() => u(), [u]),
    Ao("resize", u),
    n.createElement(
      ce,
      { width: "100%", padding: "300", borderRadius: "300" },
      n.createElement(
        Le,
        { align: "space-between", blockAlign: i, wrap: !1 },
        n.createElement(
          ce,
          { width: "100%" },
          n.createElement(
            Le,
            { gap: "200", wrap: !1, blockAlign: i },
            r ? n.createElement("div", { ref: g }, n.createElement(ce, { background: e, borderRadius: "200", padding: "100" }, r)) : null,
            n.createElement(ce, { ref: s, width: "100%" }, n.createElement(Oe, { gap: "200" }, n.createElement("div", null, a), t))
          )
        ),
        n.createElement("div", { ref: m, className: Ae.DismissIcon }, o)
      )
    )
  );
}
function Nl({ backgroundColor: e, textColor: r, bannerTitle: t, bannerIcon: o, actionButtons: a, dismissButton: i, children: l }) {
  return n.createElement(
    ce,
    { width: "100%", background: e, padding: "200", borderRadius: "200", color: r },
    n.createElement(
      Le,
      { align: "space-between", blockAlign: "start", wrap: !1, gap: "200" },
      n.createElement(
        Le,
        { gap: "150", wrap: !1 },
        o,
        n.createElement(
          ce,
          { width: "100%" },
          n.createElement(Oe, { gap: "200" }, n.createElement(Oe, { gap: "050" }, t, n.createElement("div", null, l)), a)
        )
      ),
      i
    )
  );
}
function ss({
  acceptCharset: e,
  action: r,
  autoComplete: t,
  children: o,
  encType: a,
  implicitSubmit: i = !0,
  method: l = "post",
  name: s,
  noValidate: g,
  preventDefault: m = !0,
  target: u,
  onSubmit: f,
}) {
  const v = Re(),
    p = c.useCallback(
      (w) => {
        m && (w.preventDefault(), f(w));
      },
      [f, m]
    ),
    y = Ml(t),
    S = i
      ? n.createElement(
          $,
          { as: "span", visuallyHidden: !0 },
          n.createElement("button", { type: "submit", "aria-hidden": "true", tabIndex: -1 }, v.translate("Polaris.Common.submit"))
        )
      : null;
  return n.createElement(
    "form",
    { acceptCharset: e, action: r, autoComplete: y, encType: a, method: l, name: s, noValidate: g, target: u, onSubmit: p },
    S,
    o
  );
}
function Ml(e) {
  return e == null ? e : e ? "on" : "off";
}
var Xr = { Item: "Polaris-FormLayout__Item", grouped: "Polaris-FormLayout--grouped", condensed: "Polaris-FormLayout--condensed" };
function va({ children: e, condensed: r = !1 }) {
  const t = C(Xr.Item, r ? Xr.condensed : Xr.grouped);
  return e ? n.createElement("div", { className: t }, e) : null;
}
function xa({ children: e, condensed: r, title: t, helpText: o }) {
  const a = c.useId();
  let i = null,
    l,
    s = null,
    g;
  o && ((l = `${a}HelpText`), (i = n.createElement(ce, { id: l, color: "text-secondary" }, o))),
    t && ((g = `${a}Title`), (s = n.createElement($, { id: g, as: "p" }, t)));
  const m = c.Children.map(e, (u) => Mr(u, va, { condensed: r }));
  return n.createElement(
    Oe,
    { role: "group", gap: "200", "aria-labelledby": g, "aria-describedby": l },
    s,
    n.createElement(Le, { gap: "300" }, m),
    i
  );
}
const Fl = c.memo(function ({ children: r }) {
  return n.createElement(Oe, { gap: "400" }, c.Children.map(r, zl));
});
Fl.Group = xa;
function zl(e, r) {
  return pt(e, xa) ? e : Mr(e, va, { key: r });
}
var ie = {
  Tag: "Polaris-Tag",
  disabled: "Polaris-Tag--disabled",
  clickable: "Polaris-Tag--clickable",
  linkable: "Polaris-Tag--linkable",
  removable: "Polaris-Tag--removable",
  Button: "Polaris-Tag__Button",
  Link: "Polaris-Tag__Link",
  segmented: "Polaris-Tag--segmented",
  Text: "Polaris-Tag__Text",
  sizeLarge: "Polaris-Tag--sizeLarge",
  overlay: "Polaris-Tag--overlay",
};
function cs({ children: e, disabled: r = !1, onClick: t, onRemove: o, accessibilityLabel: a, url: i, size: l }) {
  const s = Re(),
    g = o && i,
    m = C(ie.Tag, r && ie.disabled, t && ie.clickable, o && ie.removable, i && !r && ie.linkable, g && ie.segmented, l && ie[D("size", l)]);
  let u = a;
  u || (u = typeof e == "string" ? e : void 0);
  const f = n.createElement(
    $,
    { as: "span", variant: "bodySm", truncate: !0 },
    n.createElement("span", { title: u, className: ie.Text }, e)
  );
  if (t) return n.createElement("button", { type: "button", disabled: r, className: m, onClick: t }, f);
  const v = s.translate("Polaris.Tag.ariaLabel", { children: u || "" }),
    p = o
      ? n.createElement(
          "button",
          { type: "button", "aria-label": v, className: C(ie.Button, g && ie.segmented), onClick: o, onMouseUp: ht, disabled: r },
          n.createElement(ne, { source: Jo })
        )
      : null,
    y = i && !r ? n.createElement("a", { className: C(ie.Link, g && ie.segmented), href: i }, f) : f;
  return n.createElement(
    "span",
    { className: m, "aria-disabled": r },
    y,
    l === "large" && n.createElement("span", { className: ie.overlay }),
    p
  );
}
var co = { SkeletonBodyTextContainer: "Polaris-SkeletonBodyText__SkeletonBodyTextContainer", SkeletonBodyText: "Polaris-SkeletonBodyText" };
function gs({ lines: e = 3 }) {
  const r = [];
  for (let t = 0; t < e; t++) r.push(n.createElement("div", { className: co.SkeletonBodyText, key: t }));
  return n.createElement("div", { className: co.SkeletonBodyTextContainer }, r);
}
var Qr = {
  Thumbnail: "Polaris-Thumbnail",
  sizeExtraSmall: "Polaris-Thumbnail--sizeExtraSmall",
  sizeSmall: "Polaris-Thumbnail--sizeSmall",
  sizeMedium: "Polaris-Thumbnail--sizeMedium",
  sizeLarge: "Polaris-Thumbnail--sizeLarge",
  transparent: "Polaris-Thumbnail--transparent",
};
function ds({ source: e, alt: r, size: t = "medium", transparent: o }) {
  const a = C(Qr.Thumbnail, t && Qr[D("size", t)], o && Qr.transparent),
    i = typeof e == "string" ? n.createElement(_i, { alt: r, source: e }) : n.createElement(ne, { accessibilityLabel: r, source: e });
  return n.createElement("span", { className: a }, i);
}
const ms = (e) => {
    if (!e) return "";
    const r = e.getFullYear(),
      t = String(e.getMonth() + 1).padStart(2, "0"),
      o = String(e.getDate()).padStart(2, "0");
    return `${r}-${t}-${o}`;
  },
  bs = (e, r) => {
    if (!e) return "";
    const t = e.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    if (r) {
      const o = e.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 });
      return `${t} ${o}`;
    } else return t;
  },
  us = (e) => e instanceof Date && !isNaN(e.getTime()),
  fs = (e, r) => {
    const t = vt(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()).getTime(),
      o = ya(r, new Date(t));
    return new Date(t + o);
  },
  hs = (e, r) => {
    const t = ya(r, e, !0),
      o = new Date(e.getTime() - t),
      a = new Date(0);
    return (
      a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()),
      a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()),
      a
    );
  },
  Jr = { timezone: /([Z+-].*)$/, timezoneZ: /^(Z)$/, timezoneHH: /^([+-]\d{2})$/, timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/ },
  go = {},
  mo = 36e5,
  Al = 6e4,
  _l = (e) => {
    if (go[e]) return !0;
    try {
      return new Intl.DateTimeFormat(void 0, { timeZone: e }), (go[e] = !0), !0;
    } catch {
      return !1;
    }
  },
  ya = (e, r, t) => {
    if (!e) return 0;
    let o = Jr.timezoneZ.exec(e);
    if (o) return 0;
    let a, i;
    if (((o = Jr.timezoneHH.exec(e)), o)) return (a = parseInt(o[1], 10)), bo(a) ? -(a * mo) : NaN;
    if (((o = Jr.timezoneHHMM.exec(e)), o)) {
      a = parseInt(o[2], 10);
      const s = parseInt(o[3], 10);
      return bo(a, s) ? ((i = Math.abs(a) * mo + s * Al), o[1] === "+" ? -i : i) : NaN;
    }
    const l = (s, g, m) => {
      let f = s.getTime() - g;
      const v = Kr(new Date(f), m);
      if (g === v) return g;
      f -= v - g;
      const p = Kr(new Date(f), m);
      return v === p ? v : Math.max(v, p);
    };
    if (_l(e)) {
      r = new Date(r || Date.now());
      const s = t ? r : Ll(r),
        g = Kr(s, e);
      return -(t ? g : l(r, g, e));
    }
    return NaN;
  },
  bo = (e, r) => -23 <= e && e <= 23 && (r == null || (0 <= r && r <= 59)),
  Kr = (e, r) => {
    const t = Ol(e, r),
      o = vt(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime();
    let a = e.getTime();
    const i = a % 1e3;
    return (a -= i >= 0 ? i : 1e3 + i), o - a;
  },
  Ll = (e) => vt(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()),
  vt = (e, r, t, o, a, i, l) => {
    const s = new Date(0);
    return s.setUTCFullYear(e, r, t), s.setUTCHours(o, a, i, l), s;
  },
  Ol = (e, r) => {
    const t = Rl(r);
    return "formatToParts" in t ? Hl(t, e) : Dl(t, e);
  },
  et = {},
  Rl = (e) => {
    if (!et[e]) {
      const r = new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: "America/New_York",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date("2014-06-25T04:00:00.123Z")),
        t = r === "06/25/2014, 00:00:00" || r === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      et[e] = t
        ? new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        : new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
    }
    return et[e];
  },
  Ul = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
  Hl = (e, r) => {
    try {
      const t = e.formatToParts(r),
        o = [];
      for (let a = 0; a < t.length; a++) {
        const i = Ul[t[a].type];
        i !== void 0 && (o[i] = parseInt(t[a].value, 10));
      }
      return o;
    } catch (t) {
      if (t instanceof RangeError) return [NaN];
      throw t;
    }
  },
  Dl = (e, r) => {
    const t = e.format(r),
      o = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
    return [parseInt(o[3], 10), parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[4], 10), parseInt(o[5], 10), parseInt(o[6], 10)];
  };
export {
  fs as $,
  Vl as A,
  Sr as B,
  is as C,
  rs as D,
  di as E,
  tt as F,
  ns as G,
  Go as H,
  Le as I,
  ta as J,
  tl as K,
  as as L,
  ai as M,
  Pr as N,
  at as O,
  Ji as P,
  yl as Q,
  ma as R,
  pi as S,
  $ as T,
  Bi as U,
  dt as V,
  zo as W,
  qi as X,
  D as Y,
  nl as Z,
  jo as _,
  ce as a,
  us as a0,
  hs as a1,
  ms as a2,
  xi as a3,
  wi as a4,
  cs as a5,
  ds as a6,
  yi as a7,
  ga as a8,
  vi as a9,
  Yl as aA,
  Xl as aB,
  Qo as aC,
  Vo as aD,
  bs as aE,
  al as aF,
  ls as aa,
  ss as ab,
  Fl as ac,
  gs as ad,
  oi as ae,
  Mi as af,
  Ni as ag,
  Kl as ah,
  hl as ai,
  Mr as aj,
  wl as ak,
  pa as al,
  da as am,
  Zl as an,
  Br as ao,
  Do as ap,
  ve as aq,
  cr as ar,
  _i as as,
  Jo as at,
  ut as au,
  ql as av,
  ci as aw,
  Xa as ax,
  Ko as ay,
  Ii as az,
  Oe as b,
  C as c,
  aa as d,
  Di as e,
  Pi as f,
  Ui as g,
  gr as h,
  Gl as i,
  sr as j,
  ht as k,
  Ya as l,
  ne as m,
  ue as n,
  es as o,
  Jl as p,
  fe as q,
  Il as r,
  gt as s,
  Fo as t,
  Re as u,
  mt as v,
  Ql as w,
  os as x,
  Ao as y,
  ts as z,
};
