import {
  d as B,
  s as D,
  g as H,
  L as K,
  b as L,
  i as M,
  G as N,
  f as OO,
  m as X,
  I as aO,
  H as d,
  a as eO,
  E as h,
  h as iO,
  t as n,
  e as nO,
  N as rO,
} from "./PolarisAutoRichTextInput-11134d05.js";
import "./apis-0c1c184f.js";
import "./dateTimeUtils-a817f99d.js";
import "./extends-98964cd2.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import "./index-7c191284.js";
import "./index-f0f16ed8.js";
import "./jsx-runtime-69eee039.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const QO = 1,
  w = 194,
  Z = 195,
  tO = 196,
  _ = 197,
  oO = 198,
  dO = 199,
  sO = 200,
  lO = 2,
  E = 3,
  k = 201,
  TO = 24,
  SO = 25,
  pO = 49,
  qO = 50,
  gO = 55,
  mO = 56,
  PO = 57,
  $O = 59,
  hO = 60,
  cO = 61,
  XO = 62,
  fO = 63,
  yO = 65,
  WO = 238,
  zO = 71,
  RO = 241,
  vO = 242,
  _O = 243,
  kO = 244,
  xO = 245,
  UO = 246,
  uO = 247,
  VO = 248,
  j = 72,
  bO = 249,
  GO = 250,
  wO = 251,
  ZO = 252,
  EO = 253,
  jO = 254,
  YO = 255,
  FO = 256,
  CO = 73,
  JO = 77,
  AO = 263,
  IO = 112,
  NO = 130,
  DO = 151,
  LO = 152,
  HO = 155,
  p = 10,
  q = 13,
  R = 32,
  c = 9,
  v = 35,
  BO = 40,
  KO = 46,
  z = 123,
  x = 125,
  Y = 39,
  F = 34,
  MO = 92,
  Oi = 111,
  ii = 120,
  ei = 78,
  ai = 117,
  ni = 85,
  ri = new Set([SO, pO, qO, AO, yO, NO, mO, PO, WO, XO, fO, j, CO, JO, hO, cO, DO, LO, HO, IO]);
function f(O) {
  return O == p || O == q;
}
function y(O) {
  return (O >= 48 && O <= 57) || (O >= 65 && O <= 70) || (O >= 97 && O <= 102);
}
const Qi = new h(
    (O, i) => {
      let e;
      if (O.next < 0) O.acceptToken(dO);
      else if (i.context.flags & P) f(O.next) && O.acceptToken(oO, 1);
      else if (((e = O.peek(-1)) < 0 || f(e)) && i.canShift(_)) {
        let a = 0;
        for (; O.next == R || O.next == c; ) O.advance(), a++;
        (O.next == p || O.next == q || O.next == v) && O.acceptToken(_, -a);
      } else f(O.next) && O.acceptToken(tO, 1);
    },
    { contextual: !0 }
  ),
  ti = new h((O, i) => {
    let e = i.context;
    if (e.flags) return;
    let a = O.peek(-1);
    if (a == p || a == q) {
      let r = 0,
        t = 0;
      for (;;) {
        if (O.next == R) r++;
        else if (O.next == c) r += 8 - (r % 8);
        else break;
        O.advance(), t++;
      }
      r != e.indent && O.next != p && O.next != q && O.next != v && (r < e.indent ? O.acceptToken(Z, -t) : O.acceptToken(w));
    }
  }),
  P = 1,
  C = 2,
  s = 4,
  l = 8,
  T = 16,
  S = 32;
function $(O, i, e) {
  (this.parent = O), (this.indent = i), (this.flags = e), (this.hash = (O ? (O.hash + O.hash) << 8 : 0) + i + (i << 4) + e + (e << 6));
}
const oi = new $(null, 0, 0);
function di(O) {
  let i = 0;
  for (let e = 0; e < O.length; e++) i += O.charCodeAt(e) == c ? 8 - (i % 8) : 1;
  return i;
}
const U = new Map(
    [
      [RO, 0],
      [vO, s],
      [_O, l],
      [kO, l | s],
      [xO, T],
      [UO, T | s],
      [uO, T | l],
      [VO, T | l | s],
      [bO, S],
      [GO, S | s],
      [wO, S | l],
      [ZO, S | l | s],
      [EO, S | T],
      [jO, S | T | s],
      [YO, S | T | l],
      [FO, S | T | l | s],
    ].map(([O, i]) => [O, i | C])
  ),
  si = new N({
    start: oi,
    reduce(O, i, e, a) {
      return (O.flags & P && ri.has(i)) || ((i == zO || i == j) && O.flags & C) ? O.parent : O;
    },
    shift(O, i, e, a) {
      return i == w
        ? new $(O, di(a.read(a.pos, e.pos)), 0)
        : i == Z
        ? O.parent
        : i == TO || i == gO || i == $O || i == E
        ? new $(O, 0, P)
        : U.has(i)
        ? new $(O, 0, U.get(i) | (O.flags & P))
        : O;
    },
    hash(O) {
      return O.hash;
    },
  }),
  li = new h((O) => {
    for (let i = 0; i < 5; i++) {
      if (O.next != "print".charCodeAt(i)) return;
      O.advance();
    }
    if (!/\w/.test(String.fromCharCode(O.next)))
      for (let i = 0; ; i++) {
        let e = O.peek(i);
        if (!(e == R || e == c)) {
          e != BO && e != KO && e != p && e != q && e != v && O.acceptToken(QO);
          return;
        }
      }
  }),
  Ti = new h((O, i) => {
    let { flags: e } = i.context,
      a = e & s ? F : Y,
      r = (e & l) > 0,
      t = !(e & T),
      Q = (e & S) > 0,
      o = O.pos;
    for (; !(O.next < 0); )
      if (Q && O.next == z)
        if (O.peek(1) == z) O.advance(2);
        else {
          if (O.pos == o) {
            O.acceptToken(E, 1);
            return;
          }
          break;
        }
      else if (t && O.next == MO) {
        if (O.pos == o) {
          O.advance();
          let g = O.next;
          g >= 0 && (O.advance(), Si(O, g)), O.acceptToken(lO);
          return;
        }
        break;
      } else if (O.next == a && (!r || (O.peek(1) == a && O.peek(2) == a))) {
        if (O.pos == o) {
          O.acceptToken(k, r ? 3 : 1);
          return;
        }
        break;
      } else if (O.next == p) {
        if (r) O.advance();
        else if (O.pos == o) {
          O.acceptToken(k);
          return;
        }
        break;
      } else O.advance();
    O.pos > o && O.acceptToken(sO);
  });
function Si(O, i) {
  if (i == Oi) for (let e = 0; e < 2 && O.next >= 48 && O.next <= 55; e++) O.advance();
  else if (i == ii) for (let e = 0; e < 2 && y(O.next); e++) O.advance();
  else if (i == ai) for (let e = 0; e < 4 && y(O.next); e++) O.advance();
  else if (i == ni) for (let e = 0; e < 8 && y(O.next); e++) O.advance();
  else if (i == ei && O.next == z) {
    for (O.advance(); O.next >= 0 && O.next != x && O.next != Y && O.next != F && O.next != p; ) O.advance();
    O.next == x && O.advance();
  }
}
const pi = D({
    'async "*" "**" FormatConversion FormatSpec': n.modifier,
    "for while if elif else try except finally return raise break continue with pass assert await yield match case": n.controlKeyword,
    "in not and or is del": n.operatorKeyword,
    "from def class global nonlocal lambda": n.definitionKeyword,
    import: n.moduleKeyword,
    "with as print": n.keyword,
    Boolean: n.bool,
    None: n.null,
    VariableName: n.variableName,
    "CallExpression/VariableName": n.function(n.variableName),
    "FunctionDefinition/VariableName": n.function(n.definition(n.variableName)),
    "ClassDefinition/VariableName": n.definition(n.className),
    PropertyName: n.propertyName,
    "CallExpression/MemberExpression/PropertyName": n.function(n.propertyName),
    Comment: n.lineComment,
    Number: n.number,
    String: n.string,
    FormatString: n.special(n.string),
    Escape: n.escape,
    UpdateOp: n.updateOperator,
    "ArithOp!": n.arithmeticOperator,
    BitOp: n.bitwiseOperator,
    CompareOp: n.compareOperator,
    AssignOp: n.definitionOperator,
    Ellipsis: n.punctuation,
    At: n.meta,
    "( )": n.paren,
    "[ ]": n.squareBracket,
    "{ }": n.brace,
    ".": n.derefOperator,
    ", ;": n.separator,
  }),
  qi = {
    __proto__: null,
    await: 44,
    or: 54,
    and: 56,
    in: 60,
    not: 62,
    is: 64,
    if: 70,
    else: 72,
    lambda: 76,
    yield: 94,
    from: 96,
    async: 102,
    for: 104,
    None: 162,
    True: 164,
    False: 164,
    del: 178,
    pass: 182,
    break: 186,
    continue: 190,
    return: 194,
    raise: 202,
    import: 206,
    as: 208,
    global: 212,
    nonlocal: 214,
    assert: 218,
    type: 223,
    elif: 236,
    while: 240,
    try: 246,
    except: 248,
    finally: 250,
    with: 254,
    def: 258,
    class: 268,
    match: 279,
    case: 285,
  },
  gi = L.deserialize({
    version: 14,
    states:
      "##jO`QeOOP$}OSOOO&WQtO'#HUOOQS'#Co'#CoOOQS'#Cp'#CpO'vQdO'#CnO*UQtO'#HTOOQS'#HU'#HUOOQS'#DU'#DUOOQS'#HT'#HTO*rQdO'#D_O+VQdO'#DfO+gQdO'#DjO+zOWO'#DuO,VOWO'#DvO.[QtO'#GuOOQS'#Gu'#GuO'vQdO'#GtO0ZQtO'#GtOOQS'#Eb'#EbO0rQdO'#EcOOQS'#Gs'#GsO0|QdO'#GrOOQV'#Gr'#GrO1XQdO'#FYOOQS'#G^'#G^O1^QdO'#FXOOQV'#IS'#ISOOQV'#Gq'#GqOOQV'#Fq'#FqQ`QeOOO'vQdO'#CqO1lQdO'#C}O1sQdO'#DRO2RQdO'#HYO2cQtO'#EVO'vQdO'#EWOOQS'#EY'#EYOOQS'#E['#E[OOQS'#E^'#E^O2wQdO'#E`O3_QdO'#EdO3rQdO'#EfO3zQtO'#EfO1XQdO'#EiO0rQdO'#ElO1XQdO'#EnO0rQdO'#EtO0rQdO'#EwO4VQdO'#EyO4^QdO'#FOO4iQdO'#EzO0rQdO'#FOO1XQdO'#FQO1XQdO'#FVO4nQdO'#F[P4uOdO'#GpPOOO)CBd)CBdOOQS'#Ce'#CeOOQS'#Cf'#CfOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Cl'#ClO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO5QQdO'#DoOOQS,5:Y,5:YO5eQdO'#HdOOQS,5:],5:]O5rQ!fO,5:]O5wQtO,59YO1lQdO,59bO1lQdO,59bO1lQdO,59bO8gQdO,59bO8lQdO,59bO8sQdO,59jO8zQdO'#HTO:QQdO'#HSOOQS'#HS'#HSOOQS'#D['#D[O:iQdO,59aO'vQdO,59aO:wQdO,59aOOQS,59y,59yO:|QdO,5:RO'vQdO,5:ROOQS,5:Q,5:QO;[QdO,5:QO;aQdO,5:XO'vQdO,5:XO'vQdO,5:VOOQS,5:U,5:UO;rQdO,5:UO;wQdO,5:WOOOW'#Fy'#FyO;|OWO,5:aOOQS,5:a,5:aO<XQdO'#HwOOOW'#Dw'#DwOOOW'#Fz'#FzO<iOWO,5:bOOQS,5:b,5:bOOQS'#F}'#F}O<wQtO,5:iO?iQtO,5=`O@SQ#xO,5=`O@sQtO,5=`OOQS,5:},5:}OA[QeO'#GWOBnQdO,5;^OOQV,5=^,5=^OByQtO'#IPOChQdO,5;tOOQS-E:[-E:[OOQV,5;s,5;sO4dQdO'#FQOOQV-E9o-E9oOCpQtO,59]OEwQtO,59iOFbQdO'#HVOFmQdO'#HVO1XQdO'#HVOFxQdO'#DTOGQQdO,59mOGVQdO'#HZO'vQdO'#HZO0rQdO,5=tOOQS,5=t,5=tO0rQdO'#EROOQS'#ES'#ESOGtQdO'#GPOHUQdO,58|OHUQdO,58|O*xQdO,5:oOHdQtO'#H]OOQS,5:r,5:rOOQS,5:z,5:zOHwQdO,5;OOIYQdO'#IOO1XQdO'#H}OOQS,5;Q,5;QOOQS'#GT'#GTOInQtO,5;QOI|QdO,5;QOJRQdO'#IQOOQS,5;T,5;TOJaQdO'#H|OOQS,5;W,5;WOJrQdO,5;YO4iQdO,5;`O4iQdO,5;cOJzQtO'#ITO'vQdO'#ITOKUQdO,5;eO4VQdO,5;eO0rQdO,5;jO1XQdO,5;lOKZQeO'#EuOLgQgO,5;fO!!hQdO'#IUO4iQdO,5;jO!!sQdO,5;lO!!{QdO,5;qO!#WQtO,5;vO'vQdO,5;vPOOO,5=[,5=[P!#_OSO,5=[P!#dOdO,5=[O!&XQtO1G.jO!&`QtO1G.jO!)PQtO1G.jO!)ZQtO1G.jO!+tQtO1G.jO!,XQtO1G.jO!,lQdO'#HcO!,zQtO'#GuO0rQdO'#HcO!-UQdO'#HbOOQS,5:Z,5:ZO!-^QdO,5:ZO!-cQdO'#HeO!-nQdO'#HeO!.RQdO,5>OOOQS'#Ds'#DsOOQS1G/w1G/wOOQS1G.|1G.|O!/RQtO1G.|O!/YQtO1G.|O1lQdO1G.|O!/uQdO1G/UOOQS'#DZ'#DZO0rQdO,59tOOQS1G.{1G.{O!/|QdO1G/eO!0^QdO1G/eO!0fQdO1G/fO'vQdO'#H[O!0kQdO'#H[O!0pQtO1G.{O!1QQdO,59iO!2WQdO,5=zO!2hQdO,5=zO!2pQdO1G/mO!2uQtO1G/mOOQS1G/l1G/lO!3VQdO,5=uO!3|QdO,5=uO0rQdO1G/qO!4kQdO1G/sO!4pQtO1G/sO!5QQtO1G/qOOQS1G/p1G/pOOQS1G/r1G/rOOOW-E9w-E9wOOQS1G/{1G/{O!5bQdO'#HxO0rQdO'#HxO!5sQdO,5>cOOOW-E9x-E9xOOQS1G/|1G/|OOQS-E9{-E9{O!6RQ#xO1G2zO!6rQtO1G2zO'vQdO,5<jOOQS,5<j,5<jOOQS-E9|-E9|OOQS,5<r,5<rOOQS-E:U-E:UOOQV1G0x1G0xO1XQdO'#GRO!7ZQtO,5>kOOQS1G1`1G1`O!7xQdO1G1`OOQS'#DV'#DVO0rQdO,5=qOOQS,5=q,5=qO!7}QdO'#FrO!8YQdO,59oO!8bQdO1G/XO!8lQtO,5=uOOQS1G3`1G3`OOQS,5:m,5:mO!9]QdO'#GtOOQS,5<k,5<kOOQS-E9}-E9}O!9nQdO1G.hOOQS1G0Z1G0ZO!9|QdO,5=wO!:^QdO,5=wO0rQdO1G0jO0rQdO1G0jO!:oQdO,5>jO!;QQdO,5>jO1XQdO,5>jO!;cQdO,5>iOOQS-E:R-E:RO!;hQdO1G0lO!;sQdO1G0lO!;xQdO,5>lO!<WQdO,5>lO!<fQdO,5>hO!<|QdO,5>hO!=_QdO'#EpO0rQdO1G0tO!=jQdO1G0tO!=oQgO1G0zO!AmQgO1G0}O!EhQdO,5>oO!ErQdO,5>oO!EzQtO,5>oO0rQdO1G1PO!FUQdO1G1PO4iQdO1G1UO!!sQdO1G1WOOQV,5;a,5;aO!FZQfO,5;aO!F`QgO1G1QO!JaQdO'#GZO4iQdO1G1QO4iQdO1G1QO!JqQdO,5>pO!KOQdO,5>pO1XQdO,5>pOOQV1G1U1G1UO!KWQdO'#FSO!KiQ!fO1G1WO!KqQdO1G1WOOQV1G1]1G1]O4iQdO1G1]O!KvQdO1G1]O!LOQdO'#F^OOQV1G1b1G1bO!#WQtO1G1bPOOO1G2v1G2vP!LTOSO1G2vOOQS,5=},5=}OOQS'#Dp'#DpO0rQdO,5=}O!LYQdO,5=|O!LmQdO,5=|OOQS1G/u1G/uO!LuQdO,5>PO!MVQdO,5>PO!M_QdO,5>PO!MrQdO,5>PO!NSQdO,5>POOQS1G3j1G3jOOQS7+$h7+$hO!8bQdO7+$pO# uQdO1G.|O# |QdO1G.|OOQS1G/`1G/`OOQS,5<`,5<`O'vQdO,5<`OOQS7+%P7+%PO#!TQdO7+%POOQS-E9r-E9rOOQS7+%Q7+%QO#!eQdO,5=vO'vQdO,5=vOOQS7+$g7+$gO#!jQdO7+%PO#!rQdO7+%QO#!wQdO1G3fOOQS7+%X7+%XO##XQdO1G3fO##aQdO7+%XOOQS,5<_,5<_O'vQdO,5<_O##fQdO1G3aOOQS-E9q-E9qO#$]QdO7+%]OOQS7+%_7+%_O#$kQdO1G3aO#%YQdO7+%_O#%_QdO1G3gO#%oQdO1G3gO#%wQdO7+%]O#%|QdO,5>dO#&gQdO,5>dO#&gQdO,5>dOOQS'#Dx'#DxO#&xO&jO'#DzO#'TO`O'#HyOOOW1G3}1G3}O#'YQdO1G3}O#'bQdO1G3}O#'mQ#xO7+(fO#(^QtO1G2UP#(wQdO'#GOOOQS,5<m,5<mOOQS-E:P-E:POOQS7+&z7+&zOOQS1G3]1G3]OOQS,5<^,5<^OOQS-E9p-E9pOOQS7+$s7+$sO#)UQdO,5=`O#)oQdO,5=`O#*QQtO,5<aO#*eQdO1G3cOOQS-E9s-E9sOOQS7+&U7+&UO#*uQdO7+&UO#+TQdO,5<nO#+iQdO1G4UOOQS-E:Q-E:QO#+zQdO1G4UOOQS1G4T1G4TOOQS7+&W7+&WO#,]QdO7+&WOOQS,5<p,5<pO#,hQdO1G4WOOQS-E:S-E:SOOQS,5<l,5<lO#,vQdO1G4SOOQS-E:O-E:OO1XQdO'#EqO#-^QdO'#EqO#-iQdO'#IRO#-qQdO,5;[OOQS7+&`7+&`O0rQdO7+&`O#-vQgO7+&fO!JdQdO'#GXO4iQdO7+&fO4iQdO7+&iO#1tQtO,5<tO'vQdO,5<tO#2OQdO1G4ZOOQS-E:W-E:WO#2YQdO1G4ZO4iQdO7+&kO0rQdO7+&kOOQV7+&p7+&pO!KiQ!fO7+&rO!KqQdO7+&rO`QeO1G0{OOQV-E:X-E:XO4iQdO7+&lO4iQdO7+&lOOQV,5<u,5<uO#2bQdO,5<uO!JdQdO,5<uOOQV7+&l7+&lO#2mQgO7+&lO#6hQdO,5<vO#6sQdO1G4[OOQS-E:Y-E:YO#7QQdO1G4[O#7YQdO'#IWO#7hQdO'#IWO1XQdO'#IWOOQS'#IW'#IWO#7sQdO'#IVOOQS,5;n,5;nO#7{QdO,5;nO0rQdO'#FUOOQV7+&r7+&rO4iQdO7+&rOOQV7+&w7+&wO4iQdO7+&wO#8QQfO,5;xOOQV7+&|7+&|POOO7+(b7+(bO#8VQdO1G3iOOQS,5<c,5<cO#8eQdO1G3hOOQS-E9u-E9uO#8xQdO,5<dO#9TQdO,5<dO#9hQdO1G3kOOQS-E9v-E9vO#9xQdO1G3kO#:QQdO1G3kO#:bQdO1G3kO#9xQdO1G3kOOQS<<H[<<H[O#:mQtO1G1zOOQS<<Hk<<HkP#:zQdO'#FtO8sQdO1G3bO#;XQdO1G3bO#;^QdO<<HkOOQS<<Hl<<HlO#;nQdO7+)QOOQS<<Hs<<HsO#<OQtO1G1yP#<oQdO'#FsO#<|QdO7+)RO#=^QdO7+)RO#=fQdO<<HwO#=kQdO7+({OOQS<<Hy<<HyO#>bQdO,5<bO'vQdO,5<bOOQS-E9t-E9tOOQS<<Hw<<HwOOQS,5<g,5<gO0rQdO,5<gO#>gQdO1G4OOOQS-E9y-E9yO#?QQdO1G4OO<XQdO'#H{OOOO'#D{'#D{OOOO'#F|'#F|O#?cO&jO,5:fOOOW,5>e,5>eOOOW7+)i7+)iO#?nQdO7+)iO#?vQdO1G2zO#@aQdO1G2zP'vQdO'#FuO0rQdO<<IpO1XQdO1G2YP1XQdO'#GSO#@rQdO7+)pO#ATQdO7+)pOOQS<<Ir<<IrP1XQdO'#GUP0rQdO'#GQOOQS,5;],5;]O#AfQdO,5>mO#AtQdO,5>mOOQS1G0v1G0vOOQS<<Iz<<IzOOQV-E:V-E:VO4iQdO<<JQOOQV,5<s,5<sO4iQdO,5<sOOQV<<JQ<<JQOOQV<<JT<<JTO#A|QtO1G2`P#BWQdO'#GYO#B_QdO7+)uO#BiQgO<<JVO4iQdO<<JVOOQV<<J^<<J^O4iQdO<<J^O!KiQ!fO<<J^O#FdQgO7+&gOOQV<<JW<<JWO#FnQgO<<JWOOQV1G2a1G2aO1XQdO1G2aO#JiQdO1G2aO4iQdO<<JWO1XQdO1G2bP0rQdO'#G[O#JtQdO7+)vO#KRQdO7+)vOOQS'#FT'#FTO0rQdO,5>rO#KZQdO,5>rOOQS,5>r,5>rO#KfQdO,5>qO#KwQdO,5>qOOQS1G1Y1G1YOOQS,5;p,5;pOOQV<<Jc<<JcO#LPQdO1G1dOOQS7+)T7+)TP#LUQdO'#FwO#LfQdO1G2OO#LyQdO1G2OO#MZQdO1G2OP#MfQdO'#FxO#MsQdO7+)VO#NTQdO7+)VO#NTQdO7+)VO#N]QdO7+)VO#NmQdO7+(|O8sQdO7+(|OOQSAN>VAN>VO$ WQdO<<LmOOQSAN>cAN>cO0rQdO1G1|O$ hQtO1G1|P$ rQdO'#FvOOQS1G2R1G2RP$!PQdO'#F{O$!^QdO7+)jO$!wQdO,5>gOOOO-E9z-E9zOOOW<<MT<<MTO$#VQdO7+(fOOQSAN?[AN?[OOQS7+'t7+'tO$#pQdO<<M[OOQS,5<q,5<qO$$RQdO1G4XOOQS-E:T-E:TOOQVAN?lAN?lOOQV1G2_1G2_O4iQdOAN?qO$$aQgOAN?qOOQVAN?xAN?xO4iQdOAN?xOOQV<<JR<<JRO4iQdOAN?rO4iQdO7+'{OOQV7+'{7+'{O1XQdO7+'{OOQVAN?rAN?rOOQS7+'|7+'|O$([QdO<<MbOOQS1G4^1G4^O0rQdO1G4^OOQS,5<w,5<wO$(iQdO1G4]OOQS-E:Z-E:ZOOQU'#G_'#G_O$(zQfO7+'OO$)VQdO'#F_O$*^QdO7+'jO$*nQdO7+'jOOQS7+'j7+'jO$*yQdO<<LqO$+ZQdO<<LqO$+ZQdO<<LqO$+cQdO'#H^OOQS<<Lh<<LhO$+mQdO<<LhOOQS7+'h7+'hOOQS'#D|'#D|OOOO1G4R1G4RO$,WQdO1G4RO$,`QdO1G4RP!=_QdO'#GVOOQVG25]G25]O4iQdOG25]OOQVG25dG25dOOQVG25^G25^OOQV<<Kg<<KgO4iQdO<<KgOOQS7+)x7+)xP$,kQdO'#G]OOQU-E:]-E:]OOQV<<Jj<<JjO$-_QtO'#FaOOQS'#Fc'#FcO$-oQdO'#FbO$.aQdO'#FbOOQS'#Fb'#FbO$.fQdO'#IYO$)VQdO'#FiO$)VQdO'#FiO$.}QdO'#FjO$)VQdO'#FkO$/UQdO'#IZOOQS'#IZ'#IZO$/sQdO,5;yOOQS<<KU<<KUO$/{QdO<<KUO$0]QdOANB]O$0mQdOANB]O$0uQdO'#H_OOQS'#H_'#H_O1sQdO'#DcO$1`QdO,5=xOOQSANBSANBSOOOO7+)m7+)mO$1wQdO7+)mOOQVLD*wLD*wOOQVANARANARO5rQ!fO'#GaO$2PQtO,5<SO$)VQdO'#FmOOQS,5<W,5<WOOQS'#Fd'#FdO$2qQdO,5;|O$2vQdO,5;|OOQS'#Fg'#FgO$)VQdO'#G`O$3hQdO,5<QO$4SQdO,5>tO$4dQdO,5>tO1XQdO,5<PO$4uQdO,5<TO$4zQdO,5<TO$)VQdO'#I[O$5PQdO'#I[O$5UQdO,5<UOOQS,5<V,5<VO'vQdO'#FpOOQU1G1e1G1eO4iQdO1G1eOOQSAN@pAN@pO$5ZQdOG27wO$5kQdO,59}OOQS1G3d1G3dOOOO<<MX<<MXOOQS,5<{,5<{OOQS-E:_-E:_O$5pQtO'#FaO$5wQdO'#I]O$6VQdO'#I]O$6_QdO,5<XOOQS1G1h1G1hO$6dQdO1G1hO$6iQdO,5<zOOQS-E:^-E:^O$7TQdO,5=OO$7lQdO1G4`OOQS-E:b-E:bOOQS1G1k1G1kOOQS1G1o1G1oO$7|QdO,5>vO$)VQdO,5>vOOQS1G1p1G1pO$8[QtO,5<[OOQU7+'P7+'PO$+cQdO1G/iO$)VQdO,5<YO$8cQdO,5>wO$8jQdO,5>wOOQS1G1s1G1sOOQS7+'S7+'SP$)VQdO'#GdO$8rQdO1G4bO$8|QdO1G4bO$9UQdO1G4bOOQS7+%T7+%TO$9dQdO1G1tO$9rQtO'#FaO$9yQdO,5<}OOQS,5<},5<}O$:XQdO1G4cOOQS-E:a-E:aO$)VQdO,5<|O$:`QdO,5<|O$:eQdO7+)|OOQS-E:`-E:`O$:oQdO7+)|O$)VQdO,5<ZP$)VQdO'#GcO$:wQdO1G2hO$)VQdO1G2hP$;VQdO'#GbO$;^QdO<<MhO$;hQdO1G1uO$;vQdO7+(SO8sQdO'#C}O8sQdO,59bO8sQdO,59bO8sQdO,59bO$<UQtO,5=`O8sQdO1G.|O0rQdO1G/XO0rQdO7+$pP$<iQdO'#GOO'vQdO'#GtO$<vQdO,59bO$<{QdO,59bO$=SQdO,59mO$=XQdO1G/UO1sQdO'#DRO8sQdO,59j",
    stateData:
      "$=r~O%cOS%^OSSOS%]PQ~OPdOVaOfoOhYOopOs!POvqO!PrO!Q{O!T!SO!U!RO!XZO!][O!h`O!r`O!s`O!t`O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#l!QO#o!TO#s!UO#u!VO#z!WO#}hO$P!XO%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~O%]!YO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%j![O%k!]O%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aO~Ok%xXl%xXm%xXn%xXo%xXp%xXs%xXz%xX{%xX!x%xX#g%xX%[%xX%_%xX%z%xXg%xX!T%xX!U%xX%{%xX!W%xX![%xX!Q%xX#[%xXt%xX!m%xX~P%SOfoOhYO!XZO!][O!h`O!r`O!s`O!t`O%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~Oz%wX{%wX#g%wX%[%wX%_%wX%z%wX~Ok!pOl!qOm!oOn!oOo!rOp!sOs!tO!x%wX~P)pOV!zOg!|Oo0cOv0qO!PrO~P'vOV#OOo0cOv0qO!W#PO~P'vOV#SOa#TOo0cOv0qO![#UO~P'vOQ#XO%`#XO%a#ZO~OQ#^OR#[O%`#^O%a#`O~OV%iX_%iXa%iXh%iXk%iXl%iXm%iXn%iXo%iXp%iXs%iXz%iX!X%iX!f%iX%j%iX%k%iX%l%iX%m%iX%n%iX%o%iX%p%iX%q%iX%r%iX%s%iXg%iX!T%iX!U%iX~O&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O{%iX!x%iX#g%iX%[%iX%_%iX%z%iX%{%iX!W%iX![%iX!Q%iX#[%iXt%iX!m%iX~P,eOz#dO{%hX!x%hX#g%hX%[%hX%_%hX%z%hX~Oo0cOv0qO~P'vO#g#gO%[#iO%_#iO~O%uWO~O!T#nO#u!VO#z!WO#}hO~OopO~P'vOV#sOa#tO%uWO{wP~OV#xOo0cOv0qO!Q#yO~P'vO{#{O!x$QO%z#|O#g!yX%[!yX%_!yX~OV#xOo0cOv0qO#g#SX%[#SX%_#SX~P'vOo0cOv0qO#g#WX%[#WX%_#WX~P'vOh$WO%uWO~O!f$YO!r$YO%uWO~OV$eO~P'vO!U$gO#s$hO#u$iO~O{$jO~OV$qO~P'vOS$sO%[$rO%c$tO~OV$}Oa$}Og%POo0cOv0qO~P'vOo0cOv0qO{%SO~P'vO&Y%UO~Oa!bOh!iO!X!kO!f!mOVba_bakbalbambanbaobapbasbazba{ba!xba#gba%[ba%_ba%jba%kba%lba%mba%nba%oba%pba%qba%rba%sba%zbagba!Tba!Uba%{ba!Wba![ba!Qba#[batba!mba~On%ZO~Oo%ZO~P'vOo0cO~P'vOk0eOl0fOm0dOn0dOo0mOp0nOs0rOg%wX!T%wX!U%wX%{%wX!W%wX![%wX!Q%wX#[%wX!m%wX~P)pO%{%]Og%vXz%vX!T%vX!U%vX!W%vX{%vX~Og%_Oz%`O!T%dO!U%cO~Og%_O~Oz%gO!T%dO!U%cO!W&SX~O!W%kO~Oz%lO{%nO!T%dO!U%cO![%}X~O![%rO~O![%sO~OQ#XO%`#XO%a%uO~OV%wOo0cOv0qO!PrO~P'vOQ#^OR#[O%`#^O%a%zO~OV!qa_!qaa!qah!qak!qal!qam!qan!qao!qap!qas!qaz!qa{!qa!X!qa!f!qa!x!qa#g!qa%[!qa%_!qa%j!qa%k!qa%l!qa%m!qa%n!qa%o!qa%p!qa%q!qa%r!qa%s!qa%z!qag!qa!T!qa!U!qa%{!qa!W!qa![!qa!Q!qa#[!qat!qa!m!qa~P#yOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P%SOV&OOopOvqO{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P'vOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#g$zX%[$zX%_$zX~P'vO#g#gO%[&TO%_&TO~O!f&UOh&sX%[&sXz&sX#[&sX#g&sX%_&sX#Z&sXg&sX~Oh!iO%[&WO~Okealeameaneaoeapeaseazea{ea!xea#gea%[ea%_ea%zeagea!Tea!Uea%{ea!Wea![ea!Qea#[eatea!mea~P%SOsqazqa{qa#gqa%[qa%_qa%zqa~Ok!pOl!qOm!oOn!oOo!rOp!sO!xqa~PE`O%z&YOz%yX{%yX~O%uWOz%yX{%yX~Oz&]O{wX~O{&_O~Oz%lO#g%}X%[%}X%_%}Xg%}X{%}X![%}X!m%}X%z%}X~OV0lOo0cOv0qO!PrO~P'vO%z#|O#gUa%[Ua%_Ua~Oz&hO#g&PX%[&PX%_&PXn&PX~P%SOz&kO!Q&jO#g#Wa%[#Wa%_#Wa~Oz&lO#[&nO#g&rX%[&rX%_&rXg&rX~O!f$YO!r$YO#Z&qO%uWO~O#Z&qO~Oz&sO#g&tX%[&tX%_&tX~Oz&uO#g&pX%[&pX%_&pX{&pX~O!X&wO%z&xO~Oz&|On&wX~P%SOn'PO~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO%['UO~P'vOt'YO#p'WO#q'XOP#naV#naf#nah#nao#nas#nav#na!P#na!Q#na!T#na!U#na!X#na!]#na!h#na!r#na!s#na!t#na!{#na!}#na#P#na#R#na#T#na#X#na#Z#na#^#na#_#na#a#na#c#na#l#na#o#na#s#na#u#na#z#na#}#na$P#na%X#na%o#na%p#na%t#na%u#na&Z#na&[#na&]#na&^#na&_#na&`#na&a#na&b#na&c#na&d#na&e#na&f#na&g#na&h#na&i#na&j#na%Z#na%_#na~Oz'ZO#[']O{&xX~Oh'_O!X&wO~Oh!iO{$jO!X&wO~O{'eO~P%SO%['hO~OS'iO%['hO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%k!]O~P!#lO%kWi~P!#lOV!aO_!aOa!bOh!iO!X!kO!f!mO%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%m!_O%n!_O~P!&gO%mWi%nWi~P!&gOa!bOh!iO!X!kO!f!mOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%mWi%nWi%oWi%pWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~OV!aO_!aO%q!aO%r!aO%s!aO~P!)eOVWi_Wi%qWi%rWi%sWi~P!)eO!T%dO!U%cOg&VXz&VX~O%z'kO%{'kO~P,eOz'mOg&UX~Og'oO~Oz'pO{'rO!W&XX~Oo0cOv0qOz'pO{'sO!W&XX~P'vO!W'uO~Om!oOn!oOo!rOp!sOkjisjizji{ji!xji#gji%[ji%_ji%zji~Ol!qO~P!.WOlji~P!.WOk0eOl0fOm0dOn0dOo0mOp0nO~Ot'wO~P!/aOV'|Og'}Oo0cOv0qO~P'vOg'}Oz(OO~Og(QO~O!U(SO~Og(TOz(OO!T%dO!U%cO~P%SOk0eOl0fOm0dOn0dOo0mOp0nOgqa!Tqa!Uqa%{qa!Wqa![qa!Qqa#[qatqa!mqa~PE`OV'|Oo0cOv0qO!W&Sa~P'vOz(WO!W&Sa~O!W(XO~Oz(WO!T%dO!U%cO!W&Sa~P%SOV(]Oo0cOv0qO![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~P'vOz(^O![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~O![(aO~Oz(^O!T%dO!U%cO![%}a~P%SOz(dO!T%dO!U%cO![&Ta~P%SOz(gO{&lX![&lX!m&lX%z&lX~O{(kO![(mO!m(nO%z(jO~OV&OOopOvqO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~P'vOz(pO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~O!f&UOh&sa%[&saz&sa#[&sa#g&sa%_&sa#Z&sag&sa~O%[(uO~OV#sOa#tO%uWO~Oz&]O{wa~OopOvqO~P'vOz(^O#g%}a%[%}a%_%}ag%}a{%}a![%}a!m%}a%z%}a~P%SOz(zO#g%hX%[%hX%_%hX%z%hX~O%z#|O#gUi%[Ui%_Ui~O#g&Pa%[&Pa%_&Pan&Pa~P'vOz(}O#g&Pa%[&Pa%_&Pan&Pa~O%uWO#g&ra%[&ra%_&rag&ra~Oz)SO#g&ra%[&ra%_&rag&ra~Og)VO~OV)WOh$WO%uWO~O#Z)XO~O%uWO#g&ta%[&ta%_&ta~Oz)ZO#g&ta%[&ta%_&ta~Oo0cOv0qO#g&pa%[&pa%_&pa{&pa~P'vOz)^O#g&pa%[&pa%_&pa{&pa~OV)`Oa)`O%uWO~O%z)eO~Ot)hO#j)gOP#hiV#hif#hih#hio#his#hiv#hi!P#hi!Q#hi!T#hi!U#hi!X#hi!]#hi!h#hi!r#hi!s#hi!t#hi!{#hi!}#hi#P#hi#R#hi#T#hi#X#hi#Z#hi#^#hi#_#hi#a#hi#c#hi#l#hi#o#hi#s#hi#u#hi#z#hi#}#hi$P#hi%X#hi%o#hi%p#hi%t#hi%u#hi&Z#hi&[#hi&]#hi&^#hi&_#hi&`#hi&a#hi&b#hi&c#hi&d#hi&e#hi&f#hi&g#hi&h#hi&i#hi&j#hi%Z#hi%_#hi~Ot)iOP#kiV#kif#kih#kio#kis#kiv#ki!P#ki!Q#ki!T#ki!U#ki!X#ki!]#ki!h#ki!r#ki!s#ki!t#ki!{#ki!}#ki#P#ki#R#ki#T#ki#X#ki#Z#ki#^#ki#_#ki#a#ki#c#ki#l#ki#o#ki#s#ki#u#ki#z#ki#}#ki$P#ki%X#ki%o#ki%p#ki%t#ki%u#ki&Z#ki&[#ki&]#ki&^#ki&_#ki&`#ki&a#ki&b#ki&c#ki&d#ki&e#ki&f#ki&g#ki&h#ki&i#ki&j#ki%Z#ki%_#ki~OV)kOn&wa~P'vOz)lOn&wa~Oz)lOn&wa~P%SOn)pO~O%Y)tO~Ot)wO#p'WO#q)vOP#niV#nif#nih#nio#nis#niv#ni!P#ni!Q#ni!T#ni!U#ni!X#ni!]#ni!h#ni!r#ni!s#ni!t#ni!{#ni!}#ni#P#ni#R#ni#T#ni#X#ni#Z#ni#^#ni#_#ni#a#ni#c#ni#l#ni#o#ni#s#ni#u#ni#z#ni#}#ni$P#ni%X#ni%o#ni%p#ni%t#ni%u#ni&Z#ni&[#ni&]#ni&^#ni&_#ni&`#ni&a#ni&b#ni&c#ni&d#ni&e#ni&f#ni&g#ni&h#ni&i#ni&j#ni%Z#ni%_#ni~OV)zOo0cOv0qO{$jO~P'vOo0cOv0qO{&xa~P'vOz*OO{&xa~OV*SOa*TOg*WO%q*UO%uWO~O{$jO&{*YO~Oh'_O~Oh!iO{$jO~O%[*_O~O%[*aO~OV$}Oa$}Oo0cOv0qOg&Ua~P'vOz*dOg&Ua~Oo0cOv0qO{*gO!W&Xa~P'vOz*hO!W&Xa~Oo0cOv0qOz*hO{*kO!W&Xa~P'vOo0cOv0qOz*hO!W&Xa~P'vOz*hO{*kO!W&Xa~Om0dOn0dOo0mOp0nOgjikjisjizji!Tji!Uji%{ji!Wji{ji![ji#gji%[ji%_ji!Qji#[jitji!mji%zji~Ol0fO~P!N_Olji~P!N_OV'|Og*pOo0cOv0qO~P'vOn*rO~Og*pOz*tO~Og*uO~OV'|Oo0cOv0qO!W&Si~P'vOz*vO!W&Si~O!W*wO~OV(]Oo0cOv0qO![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~P'vOz*zO!T%dO!U%cO![&Ti~Oz*}O![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~O![+OO~Oa+QOo0cOv0qO![&Ti~P'vOz*zO![&Ti~O![+SO~OV+UOo0cOv0qO{&la![&la!m&la%z&la~P'vOz+VO{&la![&la!m&la%z&la~O!]+YO&n+[O![!nX~O![+^O~O{(kO![+_O~O{(kO![+_O!m+`O~OV&OOopOvqO{%hq!x%hq#g%hq%[%hq%_%hq%z%hq~P'vOz$ri{$ri!x$ri#g$ri%[$ri%_$ri%z$ri~P%SOV&OOopOvqO~P'vOV&OOo0cOv0qO#g%ha%[%ha%_%ha%z%ha~P'vOz+aO#g%ha%[%ha%_%ha%z%ha~Oz$ia#g$ia%[$ia%_$ian$ia~P%SO#g&Pi%[&Pi%_&Pin&Pi~P'vOz+dO#g#Wq%[#Wq%_#Wq~O#[+eOz$va#g$va%[$va%_$vag$va~O%uWO#g&ri%[&ri%_&rig&ri~Oz+gO#g&ri%[&ri%_&rig&ri~OV+iOh$WO%uWO~O%uWO#g&ti%[&ti%_&ti~Oo0cOv0qO#g&pi%[&pi%_&pi{&pi~P'vO{#{Oz#eX!W#eX~Oz+mO!W&uX~O!W+oO~Ot+rO#j)gOP#hqV#hqf#hqh#hqo#hqs#hqv#hq!P#hq!Q#hq!T#hq!U#hq!X#hq!]#hq!h#hq!r#hq!s#hq!t#hq!{#hq!}#hq#P#hq#R#hq#T#hq#X#hq#Z#hq#^#hq#_#hq#a#hq#c#hq#l#hq#o#hq#s#hq#u#hq#z#hq#}#hq$P#hq%X#hq%o#hq%p#hq%t#hq%u#hq&Z#hq&[#hq&]#hq&^#hq&_#hq&`#hq&a#hq&b#hq&c#hq&d#hq&e#hq&f#hq&g#hq&h#hq&i#hq&j#hq%Z#hq%_#hq~On$|az$|a~P%SOV)kOn&wi~P'vOz+yOn&wi~Oz,TO{$jO#[,TO~O#q,VOP#nqV#nqf#nqh#nqo#nqs#nqv#nq!P#nq!Q#nq!T#nq!U#nq!X#nq!]#nq!h#nq!r#nq!s#nq!t#nq!{#nq!}#nq#P#nq#R#nq#T#nq#X#nq#Z#nq#^#nq#_#nq#a#nq#c#nq#l#nq#o#nq#s#nq#u#nq#z#nq#}#nq$P#nq%X#nq%o#nq%p#nq%t#nq%u#nq&Z#nq&[#nq&]#nq&^#nq&_#nq&`#nq&a#nq&b#nq&c#nq&d#nq&e#nq&f#nq&g#nq&h#nq&i#nq&j#nq%Z#nq%_#nq~O#[,WOz%Oa{%Oa~Oo0cOv0qO{&xi~P'vOz,YO{&xi~O{#{O%z,[Og&zXz&zX~O%uWOg&zXz&zX~Oz,`Og&yX~Og,bO~O%Y,eO~O!T%dO!U%cOg&Viz&Vi~OV$}Oa$}Oo0cOv0qOg&Ui~P'vO{,hOz$la!W$la~Oo0cOv0qO{,iOz$la!W$la~P'vOo0cOv0qO{*gO!W&Xi~P'vOz,lO!W&Xi~Oo0cOv0qOz,lO!W&Xi~P'vOz,lO{,oO!W&Xi~Og$hiz$hi!W$hi~P%SOV'|Oo0cOv0qO~P'vOn,qO~OV'|Og,rOo0cOv0qO~P'vOV'|Oo0cOv0qO!W&Sq~P'vOz$gi![$gi#g$gi%[$gi%_$gig$gi{$gi!m$gi%z$gi~P%SOV(]Oo0cOv0qO~P'vOa+QOo0cOv0qO![&Tq~P'vOz,sO![&Tq~O![,tO~OV(]Oo0cOv0qO![%}q#g%}q%[%}q%_%}qg%}q{%}q!m%}q%z%}q~P'vO{,uO~OV+UOo0cOv0qO{&li![&li!m&li%z&li~P'vOz,zO{&li![&li!m&li%z&li~O!]+YO&n+[O![!na~O{(kO![,}O~OV&OOo0cOv0qO#g%hi%[%hi%_%hi%z%hi~P'vOz-OO#g%hi%[%hi%_%hi%z%hi~O%uWO#g&rq%[&rq%_&rqg&rq~Oz-RO#g&rq%[&rq%_&rqg&rq~OV)`Oa)`O%uWO!W&ua~Oz-TO!W&ua~On$|iz$|i~P%SOV)kO~P'vOV)kOn&wq~P'vOt-XOP#myV#myf#myh#myo#mys#myv#my!P#my!Q#my!T#my!U#my!X#my!]#my!h#my!r#my!s#my!t#my!{#my!}#my#P#my#R#my#T#my#X#my#Z#my#^#my#_#my#a#my#c#my#l#my#o#my#s#my#u#my#z#my#}#my$P#my%X#my%o#my%p#my%t#my%u#my&Z#my&[#my&]#my&^#my&_#my&`#my&a#my&b#my&c#my&d#my&e#my&f#my&g#my&h#my&i#my&j#my%Z#my%_#my~O%Z-]O%_-]O~P`O#q-^OP#nyV#nyf#nyh#nyo#nys#nyv#ny!P#ny!Q#ny!T#ny!U#ny!X#ny!]#ny!h#ny!r#ny!s#ny!t#ny!{#ny!}#ny#P#ny#R#ny#T#ny#X#ny#Z#ny#^#ny#_#ny#a#ny#c#ny#l#ny#o#ny#s#ny#u#ny#z#ny#}#ny$P#ny%X#ny%o#ny%p#ny%t#ny%u#ny&Z#ny&[#ny&]#ny&^#ny&_#ny&`#ny&a#ny&b#ny&c#ny&d#ny&e#ny&f#ny&g#ny&h#ny&i#ny&j#ny%Z#ny%_#ny~Oz-aO{$jO#[-aO~Oo0cOv0qO{&xq~P'vOz-dO{&xq~O%z,[Og&zaz&za~OV*SOa*TO%q*UO%uWOg&ya~Oz-hOg&ya~O$S-lO~OV$}Oa$}Oo0cOv0qO~P'vOo0cOv0qO{-mOz$li!W$li~P'vOo0cOv0qOz$li!W$li~P'vO{-mOz$li!W$li~Oo0cOv0qO{*gO~P'vOo0cOv0qO{*gO!W&Xq~P'vOz-pO!W&Xq~Oo0cOv0qOz-pO!W&Xq~P'vOs-sO!T%dO!U%cOg&Oq!W&Oq![&Oqz&Oq~P!/aOa+QOo0cOv0qO![&Ty~P'vOz$ji![$ji~P%SOa+QOo0cOv0qO~P'vOV+UOo0cOv0qO~P'vOV+UOo0cOv0qO{&lq![&lq!m&lq%z&lq~P'vO{(kO![-xO!m-yO%z-wO~OV&OOo0cOv0qO#g%hq%[%hq%_%hq%z%hq~P'vO%uWO#g&ry%[&ry%_&ryg&ry~OV)`Oa)`O%uWO!W&ui~Ot-}OP#m!RV#m!Rf#m!Rh#m!Ro#m!Rs#m!Rv#m!R!P#m!R!Q#m!R!T#m!R!U#m!R!X#m!R!]#m!R!h#m!R!r#m!R!s#m!R!t#m!R!{#m!R!}#m!R#P#m!R#R#m!R#T#m!R#X#m!R#Z#m!R#^#m!R#_#m!R#a#m!R#c#m!R#l#m!R#o#m!R#s#m!R#u#m!R#z#m!R#}#m!R$P#m!R%X#m!R%o#m!R%p#m!R%t#m!R%u#m!R&Z#m!R&[#m!R&]#m!R&^#m!R&_#m!R&`#m!R&a#m!R&b#m!R&c#m!R&d#m!R&e#m!R&f#m!R&g#m!R&h#m!R&i#m!R&j#m!R%Z#m!R%_#m!R~Oo0cOv0qO{&xy~P'vOV*SOa*TO%q*UO%uWOg&yi~O$S-lO%Z.VO%_.VO~OV.aOh._O!X.^O!].`O!h.YO!s.[O!t.[O%p.XO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O~Oo0cOv0qOz$lq!W$lq~P'vO{.fOz$lq!W$lq~Oo0cOv0qO{*gO!W&Xy~P'vOz.gO!W&Xy~Oo0cOv.kO~P'vOs-sO!T%dO!U%cOg&Oy!W&Oy![&Oyz&Oy~P!/aO{(kO![.nO~O{(kO![.nO!m.oO~OV*SOa*TO%q*UO%uWO~Oh.tO!f.rOz$TX#[$TX%j$TXg$TX~Os$TX{$TX!W$TX![$TX~P$,yO%o.vO%p.vOs$UXz$UX{$UX#[$UX%j$UX!W$UXg$UX![$UX~O!h.xO~Oz.|O#[/OO%j.yOs&|X{&|X!W&|Xg&|X~Oa/RO~P$)cOh.tOs&}Xz&}X{&}X#[&}X%j&}X!W&}Xg&}X![&}X~Os/VO{$jO~Oo0cOv0qOz$ly!W$ly~P'vOo0cOv0qO{*gO!W&X!R~P'vOz/ZO!W&X!R~Og&RXs&RX!T&RX!U&RX!W&RX![&RXz&RX~P!/aOs-sO!T%dO!U%cOg&Qa!W&Qa![&Qaz&Qa~O{(kO![/^O~O!f.rOh$[as$[az$[a{$[a#[$[a%j$[a!W$[ag$[a![$[a~O!h/eO~O%o.vO%p.vOs$Uaz$Ua{$Ua#[$Ua%j$Ua!W$Uag$Ua![$Ua~O%j.yOs$Yaz$Ya{$Ya#[$Ya!W$Yag$Ya![$Ya~Os&|a{&|a!W&|ag&|a~P$)VOz/jOs&|a{&|a!W&|ag&|a~O!W/mO~Og/mO~O{/oO~O![/pO~Oo0cOv0qO{*gO!W&X!Z~P'vO{/sO~O%z/tO~P$,yOz/uO#[/OO%j.yOg'PX~Oz/uOg'PX~Og/wO~O!h/xO~O#[/OOs%Saz%Sa{%Sa%j%Sa!W%Sag%Sa![%Sa~O#[/OO%j.yOs%Waz%Wa{%Wa!W%Wag%Wa~Os&|i{&|i!W&|ig&|i~P$)VOz/zO#[/OO%j.yO!['Oa~O{$da~P%SOg'Pa~P$)VOz0SOg'Pa~Oa0UO!['Oi~P$)cOz0WO!['Oi~Oz0WO#[/OO%j.yO!['Oi~O#[/OO%j.yOg$biz$bi~O%z0ZO~P$,yO#[/OO%j.yOg%Vaz%Va~Og'Pi~P$)VO{0^O~Oa0UO!['Oq~P$)cOz0`O!['Oq~O#[/OO%j.yOz%Ui![%Ui~Oa0UO~P$)cOa0UO!['Oy~P$)cO#[/OO%j.yOg$ciz$ci~O#[/OO%j.yOz%Uq![%Uq~Oz+aO#g%ha%[%ha%_%ha%z%ha~P%SOV&OOo0cOv0qO~P'vOn0hO~Oo0hO~P'vO{0iO~Ot0jO~P!/aO&]&Z&j&h&i&g&f&d&e&c&b&`&a&_&^&[%u~",
    goto: "!=l'QPPPPPP'RP'Z*s+]+v,b,}-kP.YP'Z.y.y'ZPPP'Z2cPPPPPP2c5VPP5VP7g7p=xPP={>m>pPP'Z'ZPP?PPP'Z'ZPP'Z'Z'Z'Z'Z?T?}'ZP@QP@WD_G{HPPHSH^Hb'ZPPPHeHn'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RP'RPHtIQIYPIaIgPIaPIaIaPPPIaPKuPLOLYL`KuPIaLiPIaPLpLvPLzM`M}NhLzLzNnN{LzLzLzLz! a! g! j! o! r! |!!S!!`!!r!!x!#S!#Y!#v!#|!$S!$^!$d!$j!$|!%W!%^!%d!%n!%t!%z!&Q!&W!&^!&h!&n!&x!'O!'X!'_!'n!'v!(Q!(XPPPPPPPPPPP!(_!(b!(h!(q!({!)WPPPPPPPPPPPP!-z!/`!3`!6pPP!6x!7X!7b!8Z!8Q!8d!8j!8m!8p!8s!8{!9lPPPPPPPPPPPPPPPPP!9o!9s!9yP!:_!:c!:o!:x!;U!;l!;o!;r!;x!<O!<U!<XP!<a!<j!=f!=i]eOn#g$j)t,P'}`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r}!cQ#c#p$R$d$p%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!P!dQ#c#p$R$d$p$u%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!R!eQ#c#p$R$d$p$u$v%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!T!fQ#c#p$R$d$p$u$v$w%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!V!gQ#c#p$R$d$p$u$v$w$x%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!X!hQ#c#p$R$d$p$u$v$w$x$y%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!]!hQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g'}TOTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r&cVOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0r%mXOYZ[dnrxy}!P!Q!U!i!k#[#d#g#y#{#}$Q$h$j$}%S%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#vqQ/[.kR0o0q't`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rh#jhz{$W$Z&l&q)S)X+f+g-RW#rq&].k0qQ$]|Q$a!OQ$n!VQ$o!WW$|!i'm*d,gS&[#s#tQ'S$iQ(s&UQ)U&nU)Y&s)Z+jW)a&w+m-T-{Q*Q']W*R'_,`-h.TQ+l)`S,_*S*TQ-Q+eQ-_,TQ-c,WQ.R-al.W-l.^._.a.z.|/R/j/o/t/y0U0Z0^Q/S.`Q/a.tQ/l/OU0P/u0S0[X0V/z0W0_0`R&Z#r!_!wYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZR%^!vQ!{YQ%x#[Q&d#}Q&g$QR,{+YT.j-s/s![!jQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gQ&X#kQ'c$oR*^'dR'l$|Q%V!mR/_.r'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rS#a_#b!P.[-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rT#a_#bT#^^#_R(o%xa(l%x(n(o+`,{-y-z.oT+[(k+]R-z,{Q$PsQ+l)aR,^*RX#}s$O$P&fQ&y$aQ'a$nQ'd$oR)s'SQ)b&wV-S+m-T-{ZgOn$j)t,PXkOn)t,PQ$k!TQ&z$bQ&{$cQ'^$mQ'b$oQ)q'RQ)x'WQ){'XQ)|'YQ*Z'`S*]'c'dQ+s)gQ+u)hQ+v)iQ+z)oS+|)r*[Q,Q)vQ,R)wS,S)y)zQ,d*^Q-V+rQ-W+tQ-Y+{S-Z+},OQ-`,UQ-b,VQ-|-XQ.O-[Q.P-^Q.Q-_Q.p-}Q.q.RQ/W.dR/r/XWkOn)t,PR#mjQ'`$nS)r'S'aR,O)sQ,]*RR-f,^Q*['`Q+})rR-[,OZiOjn)t,PQ'f$pR*`'gT-j,e-ku.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^t.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^Q/S.`X0V/z0W0_0`!P.Z-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`Q.w.YR/f.xg.z.].{/b/i/n/|0O0Q0]0a0bu.b-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^X.u.W.b/a0PR/c.tV0R/u0S0[R/X.dQnOS#on,PR,P)tQ&^#uR(x&^S%m#R#wS(_%m(bT(b%p&`Q%a!yQ%h!}W(P%a%h(U(YQ(U%eR(Y%jQ&i$RR)O&iQ(e%qQ*{(`T+R(e*{Q'n%OR*e'nS'q%R%SY*i'q*j,m-q.hU*j'r's'tU,m*k*l*mS-q,n,oR.h-rQ#Y]R%t#YQ#_^R%y#_Q(h%vS+W(h+XR+X(iQ+](kR,|+]Q#b_R%{#bQ#ebQ%}#cW&Q#e%}({+bQ({&cR+b0gQ$OsS&e$O&fR&f$PQ&v$_R)_&vQ&V#jR(t&VQ&m$VS)T&m+hR+h)UQ$Z{R&p$ZQ&t$]R)[&tQ+n)bR-U+nQ#hfR&S#hQ)f&zR+q)fQ&}$dS)m&})nR)n'OQ'V$kR)u'VQ'[$lS*P'[,ZR,Z*QQ,a*VR-i,aWjOn)t,PR#ljQ-k,eR.U-kd.{.]/b/i/n/|0O0Q0]0a0bR/h.{U.s.W/a0PR/`.sQ/{/nS0X/{0YR0Y/|S/v/b/cR0T/vQ.}.]R/k.}R!ZPXmOn)t,PWlOn)t,PR'T$jYfOn$j)t,PR&R#g[sOn#g$j)t,PR&d#}&bQOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0rQ!nTQ#caQ#poU$Rt%c(SS$d!R$gQ$p!XQ$u!cQ$v!dQ$w!eQ$x!fQ$y!gQ$z!hQ%e!zQ%j#OQ%p#SQ%q#TQ&`#xQ'O$eQ'g$qQ(q&OU(|&h(}+cW)j&|)l+x+yQ*o'|Q*x(]Q+w)kQ,v+QQ/q/VR0g0lQ!yYQ!}ZQ$b!PQ$c!QQ%R!kQ't%S^'{%`%g(O(W*q*t*v^*f'p*h,k,l-p.g/ZQ*l'rQ*m'sQ+t)gQ,j*gQ,n*kQ-n,hQ-o,iQ-r,oQ.e-mR/Y.f[bOn#g$j)t,P!^!vYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZQ#R[Q#fdS#wrxQ$UyW$_}$Q'P)pS$l!U$hW${!i'm*d,gS%v#[+Y`&P#d%|(p(r(z+a-O0kQ&a#yQ&b#{Q&c#}Q'j$}Q'z%^W([%l(^*y*}Q(`%nQ(i%wQ(v&ZS(y&_0iQ)P&jQ)Q&kU)]&u)^+kQ)d&xQ)y'WY)}'Z*O,X,Y-dQ*b'lS*n'w0jW+P(d*z,s,wW+T(g+V,y,zQ+p)eQ,U)zQ,c*YQ,x+UQ-P+dQ-e,]Q-v,uR.S-fhUOn#d#g$j%|&_'w(p(r)t,P%S!uYZ[drxy}!P!Q!U!i!k#[#y#{#}$Q$h$}%S%^%`%g%l%n%w&Z&j&k&u&x'P'W'Z'l'm'p'r's(O(W(^(d(g(z)^)e)g)p)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#qpW%W!o!s0d0nQ%X!pQ%Y!qQ%[!tQ%f0cS'v%Z0hQ'x0eQ'y0fQ,p*rQ-u,qS.i-s/sR0p0rU#uq.k0qR(w&][cOn#g$j)t,PZ!xY#[#}$Q+YQ#W[Q#zrR$TxQ%b!yQ%i!}Q%o#RQ'j${Q(V%eQ(Z%jQ(c%pQ(f%qQ*|(`Q,f*bQ-t,pQ.m-uR/].lQ$StQ(R%cR*s(SQ.l-sR/}/sR#QZR#V[R%Q!iQ%O!iV*c'm*d,g!]!lQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gR%T!kT#]^#_Q%x#[R,{+YQ(m%xS+_(n(oQ,}+`Q-x,{S.n-y-zR/^.oT+Z(k+]Q$`}Q&g$QQ)o'PR+{)pQ$XzQ)W&qR+i)XQ$XzQ&o$WQ)W&qR+i)XQ#khW$Vz$W&q)XQ$[{Q&r$ZZ)R&l)S+f+g-RR$^|R)c&wXlOn)t,PQ$f!RR'Q$gQ$m!UR'R$hR*X'_Q*V'_V-g,`-h.TQ.d-lQ/P.^R/Q._U.]-l.^._Q/U.aQ/b.tQ/g.zU/i.|/j/yQ/n/RQ/|/oQ0O/tU0Q/u0S0[Q0]0UQ0a0ZR0b0^R/T.`R/d.t",
    nodeNames:
      "⚠ print Escape { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatSelfDoc FormatConversion FormatSpec FormatReplacement FormatSelfDoc ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert TypeDefinition type TypeParamList TypeParam StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",
    maxTerm: 277,
    context: si,
    nodeProps: [
      ["isolate", -5, 4, 71, 72, 73, 77, ""],
      [
        "group",
        -15,
        6,
        85,
        87,
        88,
        90,
        92,
        94,
        96,
        98,
        99,
        100,
        102,
        105,
        108,
        110,
        "Statement Statement",
        -22,
        8,
        18,
        21,
        25,
        40,
        49,
        50,
        56,
        57,
        60,
        61,
        62,
        63,
        64,
        67,
        70,
        71,
        72,
        79,
        80,
        81,
        82,
        "Expression",
        -10,
        114,
        116,
        119,
        121,
        122,
        126,
        128,
        133,
        135,
        138,
        "Statement",
        -9,
        143,
        144,
        147,
        148,
        150,
        151,
        152,
        153,
        154,
        "Pattern",
      ],
      ["openedBy", 23, "(", 54, "[", 58, "{"],
      ["closedBy", 24, ")", 55, "]", 59, "}"],
    ],
    propSources: [pi],
    skippedNodes: [0, 4],
    repeatNodeCount: 34,
    tokenData:
      "!2|~R!`OX%TXY%oY[%T[]%o]p%Tpq%oqr'ars)Yst*xtu%Tuv,dvw-hwx.Uxy/tyz0[z{0r{|2S|}2p}!O3W!O!P4_!P!Q:Z!Q!R;k!R![>_![!]Do!]!^Es!^!_FZ!_!`Gk!`!aHX!a!b%T!b!cIf!c!dJU!d!eK^!e!hJU!h!i!#f!i!tJU!t!u!,|!u!wJU!w!x!.t!x!}JU!}#O!0S#O#P&o#P#Q!0j#Q#R!1Q#R#SJU#S#T%T#T#UJU#U#VK^#V#YJU#Y#Z!#f#Z#fJU#f#g!,|#g#iJU#i#j!.t#j#oJU#o#p!1n#p#q!1s#q#r!2a#r#s!2f#s$g%T$g;'SJU;'S;=`KW<%lOJU`%YT&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T`%lP;=`<%l%To%v]&n`%c_OX%TXY%oY[%T[]%o]p%Tpq%oq#O%T#O#P&o#P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To&tX&n`OY%TYZ%oZ]%T]^%o^#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc'f[&n`O!_%T!_!`([!`#T%T#T#U(r#U#f%T#f#g(r#g#h(r#h#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(cTmR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(yT!mR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk)aV&n`&[ZOr%Trs)vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk){V&n`Or%Trs*bs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk*iT&n`&^ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To+PZS_&n`OY*xYZ%TZ]*x]^%T^#o*x#o#p+r#p#q*x#q#r+r#r;'S*x;'S;=`,^<%lO*x_+wTS_OY+rZ]+r^;'S+r;'S;=`,W<%lO+r_,ZP;=`<%l+ro,aP;=`<%l*xj,kV%rQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-XT!xY&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-oV%lQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.]V&n`&ZZOw%Twx.rx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.wV&n`Ow%Twx/^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/eT&n`&]ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/{ThZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc0cTgR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk0yXVZ&n`Oz%Tz{1f{!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk1mVaR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk2ZV%oZ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc2wTzR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To3_W%pZ&n`O!_%T!_!`-Q!`!a3w!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Td4OT&{S&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk4fX!fQ&n`O!O%T!O!P5R!P!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5WV&n`O!O%T!O!P5m!P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5tT!rZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti6[a!hX&n`O!Q%T!Q![6T![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S6T#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti7fZ&n`O{%T{|8X|}%T}!O8X!O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8^V&n`O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8z]!hX&n`O!Q%T!Q![8s![!l%T!l!m9s!m#R%T#R#S8s#S#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti9zT!hX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk:bX%qR&n`O!P%T!P!Q:}!Q!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj;UV%sQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti;ro!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!d%T!d!e?q!e!g%T!g!h7a!h!l%T!l!m9s!m!q%T!q!rA]!r!z%T!z!{Bq!{#R%T#R#S>_#S#U%T#U#V?q#V#X%T#X#Y7a#Y#^%T#^#_9s#_#c%T#c#dA]#d#l%T#l#mBq#m#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti=xV&n`O!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti>fc!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S>_#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti?vY&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti@mY!hX&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiAbX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBUX!hX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBv]&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiCv]!hX&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToDvV{_&n`O!_%T!_!`E]!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TcEdT%{R&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkEzT#gZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkFbXmR&n`O!^%T!^!_F}!_!`([!`!a([!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjGUV%mQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkGrV%zZ&n`O!_%T!_!`([!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkH`WmR&n`O!_%T!_!`([!`!aHx!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjIPV%nQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkIoV_Q#}P&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToJ_]&n`&YS%uZO!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoKZP;=`<%lJUoKge&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!tJU!t!uLx!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#gLx#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoMRa&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUkN_V&n`&`ZOr%TrsNts#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkNyV&n`Or%Trs! `s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! gT&n`&bZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! }V&n`&_ZOw%Twx!!dx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!!iV&n`Ow%Twx!#Ox#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!#VT&n`&aZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!#oe&n`&YS%uZOr%Trs!%Qsw%Twx!&px!Q%T!Q![JU![!c%T!c!tJU!t!u!(`!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#g!(`#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!%XV&n`&dZOr%Trs!%ns#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!%sV&n`Or%Trs!&Ys#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&aT&n`&fZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&wV&n`&cZOw%Twx!'^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!'cV&n`Ow%Twx!'xx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!(PT&n`&eZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!(ia&n`&YS%uZOr%Trs!)nsw%Twx!+^x!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!)uV&n`&hZOr%Trs!*[s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*aV&n`Or%Trs!*vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*}T&n`&jZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!+eV&n`&gZOw%Twx!+zx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,PV&n`Ow%Twx!,fx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,mT&n`&iZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!-Vi&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!dJU!d!eLx!e!hJU!h!i!(`!i!}JU!}#R%T#R#SJU#S#T%T#T#UJU#U#VLx#V#YJU#Y#Z!(`#Z#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUo!.}a&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!0ZT!XZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc!0qT!WR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj!1XV%kQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!1sO!]~k!1zV%jR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!2fO![~i!2mT%tX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T",
    tokenizers: [li, ti, Qi, Ti, 0, 1, 2, 3, 4],
    topRules: { Script: [0, 5] },
    specialized: [{ term: 221, get: (O) => qi[O] || -1 }],
    tokenPrec: 7652,
  }),
  u = new rO(),
  J = new Set(["Script", "Body", "FunctionDefinition", "ClassDefinition", "LambdaExpression", "ForStatement", "MatchClause"]);
function m(O) {
  return (i, e, a) => {
    if (a) return !1;
    let r = i.node.getChild("VariableName");
    return r && e(r, O), !0;
  };
}
const mi = {
  FunctionDefinition: m("function"),
  ClassDefinition: m("class"),
  ForStatement(O, i, e) {
    if (e) {
      for (let a = O.node.firstChild; a; a = a.nextSibling)
        if (a.name == "VariableName") i(a, "variable");
        else if (a.name == "in") break;
    }
  },
  ImportStatement(O, i) {
    var e, a;
    let { node: r } = O,
      t = ((e = r.firstChild) === null || e === void 0 ? void 0 : e.name) == "from";
    for (let Q = r.getChild("import"); Q; Q = Q.nextSibling)
      Q.name == "VariableName" &&
        ((a = Q.nextSibling) === null || a === void 0 ? void 0 : a.name) != "as" &&
        i(Q, t ? "variable" : "namespace");
  },
  AssignStatement(O, i) {
    for (let e = O.node.firstChild; e; e = e.nextSibling)
      if (e.name == "VariableName") i(e, "variable");
      else if (e.name == ":" || e.name == "AssignOp") break;
  },
  ParamList(O, i) {
    for (let e = null, a = O.node.firstChild; a; a = a.nextSibling)
      a.name == "VariableName" && (!e || !/\*|AssignOp/.test(e.name)) && i(a, "variable"), (e = a);
  },
  CapturePattern: m("variable"),
  AsPattern: m("variable"),
  __proto__: null,
};
function A(O, i) {
  let e = u.get(i);
  if (e) return e;
  let a = [],
    r = !0;
  function t(Q, o) {
    let g = O.sliceString(Q.from, Q.to);
    a.push({ label: g, type: o });
  }
  return (
    i.cursor(aO.IncludeAnonymous).iterate((Q) => {
      if (Q.name) {
        let o = mi[Q.name];
        if ((o && o(Q, t, r)) || (!r && J.has(Q.name))) return !1;
        r = !1;
      } else if (Q.to - Q.from > 8192) {
        for (let o of A(O, Q.node)) a.push(o);
        return !1;
      }
    }),
    u.set(i, a),
    a
  );
}
const V = /^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/,
  I = ["String", "FormatString", "Comment", "PropertyName"];
function Pi(O) {
  let i = H(O.state).resolveInner(O.pos, -1);
  if (I.indexOf(i.name) > -1) return null;
  let e = i.name == "VariableName" || (i.to - i.from < 20 && V.test(O.state.sliceDoc(i.from, i.to)));
  if (!e && !O.explicit) return null;
  let a = [];
  for (let r = i; r; r = r.parent) J.has(r.name) && (a = a.concat(A(O.state.doc, r)));
  return { options: a, from: e ? i.from : O.pos, validFor: V };
}
const $i = [
    "__annotations__",
    "__builtins__",
    "__debug__",
    "__doc__",
    "__import__",
    "__name__",
    "__loader__",
    "__package__",
    "__spec__",
    "False",
    "None",
    "True",
  ]
    .map((O) => ({ label: O, type: "constant" }))
    .concat(
      [
        "ArithmeticError",
        "AssertionError",
        "AttributeError",
        "BaseException",
        "BlockingIOError",
        "BrokenPipeError",
        "BufferError",
        "BytesWarning",
        "ChildProcessError",
        "ConnectionAbortedError",
        "ConnectionError",
        "ConnectionRefusedError",
        "ConnectionResetError",
        "DeprecationWarning",
        "EOFError",
        "Ellipsis",
        "EncodingWarning",
        "EnvironmentError",
        "Exception",
        "FileExistsError",
        "FileNotFoundError",
        "FloatingPointError",
        "FutureWarning",
        "GeneratorExit",
        "IOError",
        "ImportError",
        "ImportWarning",
        "IndentationError",
        "IndexError",
        "InterruptedError",
        "IsADirectoryError",
        "KeyError",
        "KeyboardInterrupt",
        "LookupError",
        "MemoryError",
        "ModuleNotFoundError",
        "NameError",
        "NotADirectoryError",
        "NotImplemented",
        "NotImplementedError",
        "OSError",
        "OverflowError",
        "PendingDeprecationWarning",
        "PermissionError",
        "ProcessLookupError",
        "RecursionError",
        "ReferenceError",
        "ResourceWarning",
        "RuntimeError",
        "RuntimeWarning",
        "StopAsyncIteration",
        "StopIteration",
        "SyntaxError",
        "SyntaxWarning",
        "SystemError",
        "SystemExit",
        "TabError",
        "TimeoutError",
        "TypeError",
        "UnboundLocalError",
        "UnicodeDecodeError",
        "UnicodeEncodeError",
        "UnicodeError",
        "UnicodeTranslateError",
        "UnicodeWarning",
        "UserWarning",
        "ValueError",
        "Warning",
        "ZeroDivisionError",
      ].map((O) => ({ label: O, type: "type" }))
    )
    .concat(
      [
        "bool",
        "bytearray",
        "bytes",
        "classmethod",
        "complex",
        "float",
        "frozenset",
        "int",
        "list",
        "map",
        "memoryview",
        "object",
        "range",
        "set",
        "staticmethod",
        "str",
        "super",
        "tuple",
        "type",
      ].map((O) => ({ label: O, type: "class" }))
    )
    .concat(
      [
        "abs",
        "aiter",
        "all",
        "anext",
        "any",
        "ascii",
        "bin",
        "breakpoint",
        "callable",
        "chr",
        "compile",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "exit",
        "filter",
        "format",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "license",
        "locals",
        "max",
        "min",
        "next",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "quit",
        "repr",
        "reversed",
        "round",
        "setattr",
        "slice",
        "sorted",
        "sum",
        "vars",
        "zip",
      ].map((O) => ({ label: O, type: "function" }))
    ),
  hi = [
    d("def ${name}(${params}):\n	${}", { label: "def", detail: "function", type: "keyword" }),
    d("for ${name} in ${collection}:\n	${}", { label: "for", detail: "loop", type: "keyword" }),
    d("while ${}:\n	${}", { label: "while", detail: "loop", type: "keyword" }),
    d("try:\n	${}\nexcept ${error}:\n	${}", { label: "try", detail: "/ except block", type: "keyword" }),
    d(
      `if \${}:
	
`,
      { label: "if", detail: "block", type: "keyword" }
    ),
    d("if ${}:\n	${}\nelse:\n	${}", { label: "if", detail: "/ else block", type: "keyword" }),
    d("class ${name}:\n	def __init__(self, ${params}):\n			${}", { label: "class", detail: "definition", type: "keyword" }),
    d("import ${module}", { label: "import", detail: "statement", type: "keyword" }),
    d("from ${module} import ${names}", { label: "from", detail: "import", type: "keyword" }),
  ],
  ci = B(I, nO($i.concat(hi)));
function b(O) {
  let { node: i, pos: e } = O,
    a = O.lineIndent(e, -1),
    r = null;
  for (;;) {
    let t = i.childBefore(e);
    if (t)
      if (t.name == "Comment") e = t.from;
      else if (t.name == "Body") O.baseIndentFor(t) + O.unit <= a && (r = t), (i = t);
      else if (t.type.is("Statement")) i = t;
      else break;
    else break;
  }
  return r;
}
function G(O, i) {
  let e = O.baseIndentFor(i),
    a = O.lineAt(O.pos, -1),
    r = a.from + a.text.length;
  return (/^\s*($|#)/.test(a.text) && O.node.to < r + 100 && !/\S/.test(O.state.sliceDoc(r, O.node.to)) && O.lineIndent(O.pos, -1) <= e) ||
    (/^\s*(else:|elif |except |finally:)/.test(O.textAfter) && O.lineIndent(O.pos, -1) > e)
    ? null
    : e + O.unit;
}
const W = K.define({
  name: "python",
  parser: gi.configure({
    props: [
      M.add({
        Body: (O) => {
          var i;
          let e = b(O);
          return (i = G(O, e || O.node)) !== null && i !== void 0 ? i : O.continue();
        },
        IfStatement: (O) => (/^\s*(else:|elif )/.test(O.textAfter) ? O.baseIndent : O.continue()),
        "ForStatement WhileStatement": (O) => (/^\s*else:/.test(O.textAfter) ? O.baseIndent : O.continue()),
        TryStatement: (O) => (/^\s*(except |finally:|else:)/.test(O.textAfter) ? O.baseIndent : O.continue()),
        "TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression": X({ closing: ")" }),
        "DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression": X({ closing: "}" }),
        "ArrayExpression ArrayComprehensionExpression": X({ closing: "]" }),
        "String FormatString": () => null,
        Script: (O) => {
          var i;
          let e = b(O);
          return (i = e && G(O, e)) !== null && i !== void 0 ? i : O.continue();
        },
      }),
      OO.add({
        "ArrayExpression DictionaryExpression SetExpression TupleExpression": iO,
        Body: (O, i) => ({ from: O.from + 1, to: O.to - (O.to == i.doc.length ? 0 : 1) }),
      }),
    ],
  }),
  languageData: {
    closeBrackets: {
      brackets: ["(", "[", "{", "'", '"', "'''", '"""'],
      stringPrefixes: ["f", "fr", "rf", "r", "u", "b", "br", "rb", "F", "FR", "RF", "R", "U", "B", "BR", "RB"],
    },
    commentTokens: { line: "#" },
    indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
  },
});
function ui() {
  return new eO(W, [W.data.of({ autocomplete: Pi }), W.data.of({ autocomplete: ci })]);
}
export { ci as globalCompletion, Pi as localCompletionSource, ui as python, W as pythonLanguage };
