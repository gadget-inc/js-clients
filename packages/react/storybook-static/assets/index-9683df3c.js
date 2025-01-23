import "../sb-preview/runtime.js";
import "./PolarisAutoForm-e187dbdc.js";
import { i as P, h as Q, c as a, f as i, L as n, s as o, a as p, t as r, b as s } from "./PolarisAutoRichTextInput-c5e8a199.js";
import "./apis-d6201c92.js";
import "./extends-98964cd2.js";
import "./iframe-5aa777a6.js";
import "./index-0511f421.js";
import "./index-baeb160b.js";
import "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const c = o({
    String: r.string,
    Number: r.number,
    "True False": r.bool,
    PropertyName: r.propertyName,
    Null: r.null,
    ",": r.separator,
    "[ ]": r.squareBracket,
    "{ }": r.brace,
  }),
  g = s.deserialize({
    version: 14,
    states:
      "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
    stateData: "#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",
    goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
    nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
    maxTerm: 25,
    nodeProps: [
      ["isolate", -2, 6, 11, ""],
      ["openedBy", 7, "{", 12, "["],
      ["closedBy", 8, "}", 13, "]"],
    ],
    propSources: [c],
    skippedNodes: [0],
    repeatNodeCount: 2,
    tokenData:
      "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
    tokenizers: [0],
    topRules: { JsonText: [0, 1] },
    tokenPrec: 0,
  }),
  $ = () => (t) => {
    try {
      JSON.parse(t.state.doc.toString());
    } catch (O) {
      if (!(O instanceof SyntaxError)) throw O;
      const e = m(O, t.state.doc);
      return [{ from: e, message: O.message, severity: "error", to: e }];
    }
    return [];
  };
function m(t, O) {
  let e;
  return (e = t.message.match(/at position (\d+)/))
    ? Math.min(+e[1], O.length)
    : (e = t.message.match(/at line (\d+) column (\d+)/))
    ? Math.min(O.line(+e[1]).from + +e[2] - 1, O.length)
    : 0;
}
const u = n.define({
  name: "json",
  parser: g.configure({
    props: [P.add({ Object: a({ except: /^\s*\}/ }), Array: a({ except: /^\s*\]/ }) }), i.add({ "Object Array": Q })],
  }),
  languageData: { closeBrackets: { brackets: ["[", "{", '"'] }, indentOnInput: /^\s*[\}\]]$/ },
});
function Z() {
  return new p(u);
}
export { Z as json, u as jsonLanguage, $ as jsonParseLinter };
