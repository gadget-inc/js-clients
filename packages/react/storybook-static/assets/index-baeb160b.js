import { g as _t, c as ai } from "./index-c6dae603.js";
var kt = { exports: {} },
  ri = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ni = ri,
  ui = ni;
function St() {}
function wt() {}
wt.resetWarningCache = St;
var oi = function () {
  function E(ee, te, ce, W, ie, b) {
    if (b !== ui) {
      var B = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((B.name = "Invariant Violation"), B);
    }
  }
  E.isRequired = E;
  function j() {
    return E;
  }
  var C = {
    array: E,
    bigint: E,
    bool: E,
    func: E,
    number: E,
    object: E,
    string: E,
    symbol: E,
    any: E,
    arrayOf: j,
    element: E,
    elementType: E,
    instanceOf: j,
    node: E,
    objectOf: j,
    oneOf: j,
    oneOfType: j,
    shape: j,
    exact: j,
    checkPropTypes: wt,
    resetWarningCache: St,
  };
  return (C.PropTypes = C), C;
};
kt.exports = oi();
var hi = kt.exports;
const fi = _t(hi);
var Et = { exports: {} },
  ci = {
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
  },
  Ae = { exports: {} },
  yt;
function Ct() {
  return (
    yt ||
      ((yt = 1),
      (function (E, j) {
        (function (C, ee) {
          ee(j);
        })(ai, function (C) {
          var ee = [
              509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2,
              54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
              3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3,
              8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4,
              0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4,
              2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2,
              54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0,
              15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9,
              4759, 9, 787719, 239,
            ],
            te = [
              0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4,
              43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2,
              41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
              2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28,
              11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3,
              22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0,
              13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117,
              63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72,
              264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80,
              921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18,
              689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3,
              9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2,
              27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7,
              5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26,
              2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0,
              3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467,
              541, 1507, 4938, 6, 4191,
            ],
            ce =
              "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･",
            W =
              "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            ie = {
              3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
              5: "class enum extends super const export import",
              6: "enum",
              strict: "implements interface let package private protected public static yield",
              strictBind: "eval arguments",
            },
            b =
              "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            B = { 5: b, "5module": b + " export import", 6: b + " const class extends export import super" },
            q = /^in(stanceof)?$/,
            U = new RegExp("[" + W + "]"),
            _ = new RegExp("[" + W + ce + "]");
          function S(e, t) {
            for (var i = 65536, s = 0; s < t.length; s += 2) {
              if (((i += t[s]), i > e)) return !1;
              if (((i += t[s + 1]), i >= e)) return !0;
            }
            return !1;
          }
          function T(e, t) {
            return e < 65
              ? e === 36
              : e < 91
              ? !0
              : e < 97
              ? e === 95
              : e < 123
              ? !0
              : e <= 65535
              ? e >= 170 && U.test(String.fromCharCode(e))
              : t === !1
              ? !1
              : S(e, te);
          }
          function V(e, t) {
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
              ? e >= 170 && _.test(String.fromCharCode(e))
              : t === !1
              ? !1
              : S(e, te) || S(e, ee);
          }
          var m = function (t, i) {
            i === void 0 && (i = {}),
              (this.label = t),
              (this.keyword = i.keyword),
              (this.beforeExpr = !!i.beforeExpr),
              (this.startsExpr = !!i.startsExpr),
              (this.isLoop = !!i.isLoop),
              (this.isAssign = !!i.isAssign),
              (this.prefix = !!i.prefix),
              (this.postfix = !!i.postfix),
              (this.binop = i.binop || null),
              (this.updateContext = null);
          };
          function A(e, t) {
            return new m(e, { beforeExpr: !0, binop: t });
          }
          var N = { beforeExpr: !0 },
            I = { startsExpr: !0 },
            se = {};
          function o(e, t) {
            return t === void 0 && (t = {}), (t.keyword = e), (se[e] = new m(e, t));
          }
          var a = {
              num: new m("num", I),
              regexp: new m("regexp", I),
              string: new m("string", I),
              name: new m("name", I),
              privateId: new m("privateId", I),
              eof: new m("eof"),
              bracketL: new m("[", { beforeExpr: !0, startsExpr: !0 }),
              bracketR: new m("]"),
              braceL: new m("{", { beforeExpr: !0, startsExpr: !0 }),
              braceR: new m("}"),
              parenL: new m("(", { beforeExpr: !0, startsExpr: !0 }),
              parenR: new m(")"),
              comma: new m(",", N),
              semi: new m(";", N),
              colon: new m(":", N),
              dot: new m("."),
              question: new m("?", N),
              questionDot: new m("?."),
              arrow: new m("=>", N),
              template: new m("template"),
              invalidTemplate: new m("invalidTemplate"),
              ellipsis: new m("...", N),
              backQuote: new m("`", I),
              dollarBraceL: new m("${", { beforeExpr: !0, startsExpr: !0 }),
              eq: new m("=", { beforeExpr: !0, isAssign: !0 }),
              assign: new m("_=", { beforeExpr: !0, isAssign: !0 }),
              incDec: new m("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
              prefix: new m("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              logicalOR: A("||", 1),
              logicalAND: A("&&", 2),
              bitwiseOR: A("|", 3),
              bitwiseXOR: A("^", 4),
              bitwiseAND: A("&", 5),
              equality: A("==/!=/===/!==", 6),
              relational: A("</>/<=/>=", 7),
              bitShift: A("<</>>/>>>", 8),
              plusMin: new m("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
              modulo: A("%", 10),
              star: A("*", 10),
              slash: A("/", 10),
              starstar: new m("**", { beforeExpr: !0 }),
              coalesce: A("??", 1),
              _break: o("break"),
              _case: o("case", N),
              _catch: o("catch"),
              _continue: o("continue"),
              _debugger: o("debugger"),
              _default: o("default", N),
              _do: o("do", { isLoop: !0, beforeExpr: !0 }),
              _else: o("else", N),
              _finally: o("finally"),
              _for: o("for", { isLoop: !0 }),
              _function: o("function", I),
              _if: o("if"),
              _return: o("return", N),
              _switch: o("switch"),
              _throw: o("throw", N),
              _try: o("try"),
              _var: o("var"),
              _const: o("const"),
              _while: o("while", { isLoop: !0 }),
              _with: o("with"),
              _new: o("new", { beforeExpr: !0, startsExpr: !0 }),
              _this: o("this", I),
              _super: o("super", I),
              _class: o("class", I),
              _extends: o("extends", N),
              _export: o("export"),
              _import: o("import", I),
              _null: o("null", I),
              _true: o("true", I),
              _false: o("false", I),
              _in: o("in", { beforeExpr: !0, binop: 7 }),
              _instanceof: o("instanceof", { beforeExpr: !0, binop: 7 }),
              _typeof: o("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _void: o("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _delete: o("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
            },
            l = /\r\n?|\n|\u2028|\u2029/,
            y = new RegExp(l.source, "g");
          function L(e) {
            return e === 10 || e === 13 || e === 8232 || e === 8233;
          }
          function Y(e, t, i) {
            i === void 0 && (i = e.length);
            for (var s = t; s < i; s++) {
              var r = e.charCodeAt(s);
              if (L(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
            }
            return -1;
          }
          var Z = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            O = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            Fe = Object.prototype,
            At = Fe.hasOwnProperty,
            It = Fe.toString,
            pe =
              Object.hasOwn ||
              function (e, t) {
                return At.call(e, t);
              },
            De =
              Array.isArray ||
              function (e) {
                return It.call(e) === "[object Array]";
              },
            Me = Object.create(null);
          function J(e) {
            return Me[e] || (Me[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
          }
          function K(e) {
            return e <= 65535 ? String.fromCharCode(e) : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
          }
          var Pt = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
            ae = function (t, i) {
              (this.line = t), (this.column = i);
            };
          ae.prototype.offset = function (t) {
            return new ae(this.line, this.column + t);
          };
          var le = function (t, i, s) {
            (this.start = i), (this.end = s), t.sourceFile !== null && (this.source = t.sourceFile);
          };
          function Ie(e, t) {
            for (var i = 1, s = 0; ; ) {
              var r = Y(e, s, t);
              if (r < 0) return new ae(i, t - s);
              ++i, (s = r);
            }
          }
          var be = {
              ecmaVersion: null,
              sourceType: "script",
              onInsertedSemicolon: null,
              onTrailingComma: null,
              allowReserved: null,
              allowReturnOutsideFunction: !1,
              allowImportExportEverywhere: !1,
              allowAwaitOutsideFunction: null,
              allowSuperOutsideMethod: null,
              allowHashBang: !1,
              checkPrivateFields: !0,
              locations: !1,
              onToken: null,
              onComment: null,
              ranges: !1,
              program: null,
              sourceFile: null,
              directSourceFile: null,
              preserveParens: !1,
            },
            je = !1;
          function Nt(e) {
            var t = {};
            for (var i in be) t[i] = e && pe(e, i) ? e[i] : be[i];
            if (
              (t.ecmaVersion === "latest"
                ? (t.ecmaVersion = 1e8)
                : t.ecmaVersion == null
                ? (!je &&
                    typeof console == "object" &&
                    console.warn &&
                    ((je = !0),
                    console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)),
                  (t.ecmaVersion = 11))
                : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
              t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
              (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14),
              De(t.onToken))
            ) {
              var s = t.onToken;
              t.onToken = function (r) {
                return s.push(r);
              };
            }
            return De(t.onComment) && (t.onComment = Tt(t, t.onComment)), t;
          }
          function Tt(e, t) {
            return function (i, s, r, n, u, h) {
              var c = { type: i ? "Block" : "Line", value: s, start: r, end: n };
              e.locations && (c.loc = new le(this, u, h)), e.ranges && (c.range = [r, n]), t.push(c);
            };
          }
          var fe = 1,
            re = 2,
            Pe = 4,
            Ue = 8,
            qe = 16,
            Ge = 32,
            Ne = 64,
            He = 128,
            de = 256,
            Te = fe | re | de;
          function Ve(e, t) {
            return re | (e ? Pe : 0) | (t ? Ue : 0);
          }
          var ye = 0,
            Le = 1,
            z = 2,
            We = 3,
            ze = 4,
            Xe = 5,
            w = function (t, i, s) {
              (this.options = t = Nt(t)),
                (this.sourceFile = t.sourceFile),
                (this.keywords = J(B[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]));
              var r = "";
              t.allowReserved !== !0 &&
                ((r = ie[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3]), t.sourceType === "module" && (r += " await")),
                (this.reservedWords = J(r));
              var n = (r ? r + " " : "") + ie.strict;
              (this.reservedWordsStrict = J(n)),
                (this.reservedWordsStrictBind = J(n + " " + ie.strictBind)),
                (this.input = String(i)),
                (this.containsEsc = !1),
                s
                  ? ((this.pos = s),
                    (this.lineStart =
                      this.input.lastIndexOf(
                        `
`,
                        s - 1
                      ) + 1),
                    (this.curLine = this.input.slice(0, this.lineStart).split(l).length))
                  : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                (this.type = a.eof),
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
                (this.potentialArrowInForAwait = !1),
                (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                (this.labels = []),
                (this.undefinedExports = Object.create(null)),
                this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2),
                (this.scopeStack = []),
                this.enterScope(fe),
                (this.regexpState = null),
                (this.privateNameStack = []);
            },
            G = {
              inFunction: { configurable: !0 },
              inGenerator: { configurable: !0 },
              inAsync: { configurable: !0 },
              canAwait: { configurable: !0 },
              allowSuper: { configurable: !0 },
              allowDirectSuper: { configurable: !0 },
              treatFunctionsAsVar: { configurable: !0 },
              allowNewDotTarget: { configurable: !0 },
              inClassStaticBlock: { configurable: !0 },
            };
          (w.prototype.parse = function () {
            var t = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(t);
          }),
            (G.inFunction.get = function () {
              return (this.currentVarScope().flags & re) > 0;
            }),
            (G.inGenerator.get = function () {
              return (this.currentVarScope().flags & Ue) > 0 && !this.currentVarScope().inClassFieldInit;
            }),
            (G.inAsync.get = function () {
              return (this.currentVarScope().flags & Pe) > 0 && !this.currentVarScope().inClassFieldInit;
            }),
            (G.canAwait.get = function () {
              for (var e = this.scopeStack.length - 1; e >= 0; e--) {
                var t = this.scopeStack[e];
                if (t.inClassFieldInit || t.flags & de) return !1;
                if (t.flags & re) return (t.flags & Pe) > 0;
              }
              return (this.inModule && this.options.ecmaVersion >= 13) || this.options.allowAwaitOutsideFunction;
            }),
            (G.allowSuper.get = function () {
              var e = this.currentThisScope(),
                t = e.flags,
                i = e.inClassFieldInit;
              return (t & Ne) > 0 || i || this.options.allowSuperOutsideMethod;
            }),
            (G.allowDirectSuper.get = function () {
              return (this.currentThisScope().flags & He) > 0;
            }),
            (G.treatFunctionsAsVar.get = function () {
              return this.treatFunctionsAsVarInScope(this.currentScope());
            }),
            (G.allowNewDotTarget.get = function () {
              var e = this.currentThisScope(),
                t = e.flags,
                i = e.inClassFieldInit;
              return (t & (re | de)) > 0 || i;
            }),
            (G.inClassStaticBlock.get = function () {
              return (this.currentVarScope().flags & de) > 0;
            }),
            (w.extend = function () {
              for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
              for (var s = this, r = 0; r < t.length; r++) s = t[r](s);
              return s;
            }),
            (w.parse = function (t, i) {
              return new this(i, t).parse();
            }),
            (w.parseExpressionAt = function (t, i, s) {
              var r = new this(s, t, i);
              return r.nextToken(), r.parseExpression();
            }),
            (w.tokenizer = function (t, i) {
              return new this(i, t);
            }),
            Object.defineProperties(w.prototype, G);
          var R = w.prototype,
            Vt = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
          (R.strictDirective = function (e) {
            if (this.options.ecmaVersion < 5) return !1;
            for (;;) {
              (O.lastIndex = e), (e += O.exec(this.input)[0].length);
              var t = Vt.exec(this.input.slice(e));
              if (!t) return !1;
              if ((t[1] || t[2]) === "use strict") {
                O.lastIndex = e + t[0].length;
                var i = O.exec(this.input),
                  s = i.index + i[0].length,
                  r = this.input.charAt(s);
                return (
                  r === ";" ||
                  r === "}" ||
                  (l.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || (r === "!" && this.input.charAt(s + 1) === "=")))
                );
              }
              (e += t[0].length), (O.lastIndex = e), (e += O.exec(this.input)[0].length), this.input[e] === ";" && e++;
            }
          }),
            (R.eat = function (e) {
              return this.type === e ? (this.next(), !0) : !1;
            }),
            (R.isContextual = function (e) {
              return this.type === a.name && this.value === e && !this.containsEsc;
            }),
            (R.eatContextual = function (e) {
              return this.isContextual(e) ? (this.next(), !0) : !1;
            }),
            (R.expectContextual = function (e) {
              this.eatContextual(e) || this.unexpected();
            }),
            (R.canInsertSemicolon = function () {
              return this.type === a.eof || this.type === a.braceR || l.test(this.input.slice(this.lastTokEnd, this.start));
            }),
            (R.insertSemicolon = function () {
              if (this.canInsertSemicolon())
                return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
            }),
            (R.semicolon = function () {
              !this.eat(a.semi) && !this.insertSemicolon() && this.unexpected();
            }),
            (R.afterTrailingComma = function (e, t) {
              if (this.type === e)
                return (
                  this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
                  t || this.next(),
                  !0
                );
            }),
            (R.expect = function (e) {
              this.eat(e) || this.unexpected();
            }),
            (R.unexpected = function (e) {
              this.raise(e ?? this.start, "Unexpected token");
            });
          var Ce = function () {
            this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
          };
          (R.checkPatternErrors = function (e, t) {
            if (e) {
              e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
              var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
              i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
            }
          }),
            (R.checkExpressionErrors = function (e, t) {
              if (!e) return !1;
              var i = e.shorthandAssign,
                s = e.doubleProto;
              if (!t) return i >= 0 || s >= 0;
              i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"),
                s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
            }),
            (R.checkYieldAwaitInDefaultParams = function () {
              this.yieldPos &&
                (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                this.raise(this.yieldPos, "Yield expression cannot be a default value"),
                this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
            }),
            (R.isSimpleAssignTarget = function (e) {
              return e.type === "ParenthesizedExpression"
                ? this.isSimpleAssignTarget(e.expression)
                : e.type === "Identifier" || e.type === "MemberExpression";
            });
          var f = w.prototype;
          f.parseTopLevel = function (e) {
            var t = Object.create(null);
            for (e.body || (e.body = []); this.type !== a.eof; ) {
              var i = this.parseStatement(null, !0, t);
              e.body.push(i);
            }
            if (this.inModule)
              for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
                var n = r[s];
                this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
              }
            return (
              this.adaptDirectivePrologue(e.body), this.next(), (e.sourceType = this.options.sourceType), this.finishNode(e, "Program")
            );
          };
          var Re = { kind: "loop" },
            Lt = { kind: "switch" };
          (f.isLet = function (e) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
            O.lastIndex = this.pos;
            var t = O.exec(this.input),
              i = this.pos + t[0].length,
              s = this.input.charCodeAt(i);
            if (s === 91 || s === 92) return !0;
            if (e) return !1;
            if (s === 123 || (s > 55295 && s < 56320)) return !0;
            if (T(s, !0)) {
              for (var r = i + 1; V((s = this.input.charCodeAt(r)), !0); ) ++r;
              if (s === 92 || (s > 55295 && s < 56320)) return !0;
              var n = this.input.slice(i, r);
              if (!q.test(n)) return !0;
            }
            return !1;
          }),
            (f.isAsyncFunction = function () {
              if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
              O.lastIndex = this.pos;
              var e = O.exec(this.input),
                t = this.pos + e[0].length,
                i;
              return (
                !l.test(this.input.slice(this.pos, t)) &&
                this.input.slice(t, t + 8) === "function" &&
                (t + 8 === this.input.length || !(V((i = this.input.charCodeAt(t + 8))) || (i > 55295 && i < 56320)))
              );
            }),
            (f.parseStatement = function (e, t, i) {
              var s = this.type,
                r = this.startNode(),
                n;
              switch ((this.isLet(e) && ((s = a._var), (n = "let")), s)) {
                case a._break:
                case a._continue:
                  return this.parseBreakContinueStatement(r, s.keyword);
                case a._debugger:
                  return this.parseDebuggerStatement(r);
                case a._do:
                  return this.parseDoStatement(r);
                case a._for:
                  return this.parseForStatement(r);
                case a._function:
                  return (
                    e && (this.strict || (e !== "if" && e !== "label")) && this.options.ecmaVersion >= 6 && this.unexpected(),
                    this.parseFunctionStatement(r, !1, !e)
                  );
                case a._class:
                  return e && this.unexpected(), this.parseClass(r, !0);
                case a._if:
                  return this.parseIfStatement(r);
                case a._return:
                  return this.parseReturnStatement(r);
                case a._switch:
                  return this.parseSwitchStatement(r);
                case a._throw:
                  return this.parseThrowStatement(r);
                case a._try:
                  return this.parseTryStatement(r);
                case a._const:
                case a._var:
                  return (n = n || this.value), e && n !== "var" && this.unexpected(), this.parseVarStatement(r, n);
                case a._while:
                  return this.parseWhileStatement(r);
                case a._with:
                  return this.parseWithStatement(r);
                case a.braceL:
                  return this.parseBlock(!0, r);
                case a.semi:
                  return this.parseEmptyStatement(r);
                case a._export:
                case a._import:
                  if (this.options.ecmaVersion > 10 && s === a._import) {
                    O.lastIndex = this.pos;
                    var u = O.exec(this.input),
                      h = this.pos + u[0].length,
                      c = this.input.charCodeAt(h);
                    if (c === 40 || c === 46) return this.parseExpressionStatement(r, this.parseExpression());
                  }
                  return (
                    this.options.allowImportExportEverywhere ||
                      (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"),
                      this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")),
                    s === a._import ? this.parseImport(r) : this.parseExport(r, i)
                  );
                default:
                  if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(r, !0, !e);
                  var x = this.value,
                    g = this.parseExpression();
                  return s === a.name && g.type === "Identifier" && this.eat(a.colon)
                    ? this.parseLabeledStatement(r, x, g, e)
                    : this.parseExpressionStatement(r, g);
              }
            }),
            (f.parseBreakContinueStatement = function (e, t) {
              var i = t === "break";
              this.next(),
                this.eat(a.semi) || this.insertSemicolon()
                  ? (e.label = null)
                  : this.type !== a.name
                  ? this.unexpected()
                  : ((e.label = this.parseIdent()), this.semicolon());
              for (var s = 0; s < this.labels.length; ++s) {
                var r = this.labels[s];
                if ((e.label == null || r.name === e.label.name) && ((r.kind != null && (i || r.kind === "loop")) || (e.label && i))) break;
              }
              return (
                s === this.labels.length && this.raise(e.start, "Unsyntactic " + t),
                this.finishNode(e, i ? "BreakStatement" : "ContinueStatement")
              );
            }),
            (f.parseDebuggerStatement = function (e) {
              return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
            }),
            (f.parseDoStatement = function (e) {
              return (
                this.next(),
                this.labels.push(Re),
                (e.body = this.parseStatement("do")),
                this.labels.pop(),
                this.expect(a._while),
                (e.test = this.parseParenExpression()),
                this.options.ecmaVersion >= 6 ? this.eat(a.semi) : this.semicolon(),
                this.finishNode(e, "DoWhileStatement")
              );
            }),
            (f.parseForStatement = function (e) {
              this.next();
              var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
              if ((this.labels.push(Re), this.enterScope(0), this.expect(a.parenL), this.type === a.semi))
                return t > -1 && this.unexpected(t), this.parseFor(e, null);
              var i = this.isLet();
              if (this.type === a._var || this.type === a._const || i) {
                var s = this.startNode(),
                  r = i ? "let" : this.value;
                return (
                  this.next(),
                  this.parseVar(s, !0, r),
                  this.finishNode(s, "VariableDeclaration"),
                  (this.type === a._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && s.declarations.length === 1
                    ? (this.options.ecmaVersion >= 9 && (this.type === a._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
                      this.parseForIn(e, s))
                    : (t > -1 && this.unexpected(t), this.parseFor(e, s))
                );
              }
              var n = this.isContextual("let"),
                u = !1,
                h = new Ce(),
                c = this.parseExpression(t > -1 ? "await" : !0, h);
              return this.type === a._in || (u = this.options.ecmaVersion >= 6 && this.isContextual("of"))
                ? (this.options.ecmaVersion >= 9 && (this.type === a._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
                  n && u && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'."),
                  this.toAssignable(c, !1, h),
                  this.checkLValPattern(c),
                  this.parseForIn(e, c))
                : (this.checkExpressionErrors(h, !0), t > -1 && this.unexpected(t), this.parseFor(e, c));
            }),
            (f.parseFunctionStatement = function (e, t, i) {
              return this.next(), this.parseFunction(e, xe | (i ? 0 : Be), !1, t);
            }),
            (f.parseIfStatement = function (e) {
              return (
                this.next(),
                (e.test = this.parseParenExpression()),
                (e.consequent = this.parseStatement("if")),
                (e.alternate = this.eat(a._else) ? this.parseStatement("if") : null),
                this.finishNode(e, "IfStatement")
              );
            }),
            (f.parseReturnStatement = function (e) {
              return (
                !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"),
                this.next(),
                this.eat(a.semi) || this.insertSemicolon()
                  ? (e.argument = null)
                  : ((e.argument = this.parseExpression()), this.semicolon()),
                this.finishNode(e, "ReturnStatement")
              );
            }),
            (f.parseSwitchStatement = function (e) {
              this.next(),
                (e.discriminant = this.parseParenExpression()),
                (e.cases = []),
                this.expect(a.braceL),
                this.labels.push(Lt),
                this.enterScope(0);
              for (var t, i = !1; this.type !== a.braceR; )
                if (this.type === a._case || this.type === a._default) {
                  var s = this.type === a._case;
                  t && this.finishNode(t, "SwitchCase"),
                    e.cases.push((t = this.startNode())),
                    (t.consequent = []),
                    this.next(),
                    s
                      ? (t.test = this.parseExpression())
                      : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), (i = !0), (t.test = null)),
                    this.expect(a.colon);
                } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
              return (
                this.exitScope(),
                t && this.finishNode(t, "SwitchCase"),
                this.next(),
                this.labels.pop(),
                this.finishNode(e, "SwitchStatement")
              );
            }),
            (f.parseThrowStatement = function (e) {
              return (
                this.next(),
                l.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"),
                (e.argument = this.parseExpression()),
                this.semicolon(),
                this.finishNode(e, "ThrowStatement")
              );
            });
          var Rt = [];
          (f.parseCatchClauseParam = function () {
            var e = this.parseBindingAtom(),
              t = e.type === "Identifier";
            return this.enterScope(t ? Ge : 0), this.checkLValPattern(e, t ? ze : z), this.expect(a.parenR), e;
          }),
            (f.parseTryStatement = function (e) {
              if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === a._catch)) {
                var t = this.startNode();
                this.next(),
                  this.eat(a.parenL)
                    ? (t.param = this.parseCatchClauseParam())
                    : (this.options.ecmaVersion < 10 && this.unexpected(), (t.param = null), this.enterScope(0)),
                  (t.body = this.parseBlock(!1)),
                  this.exitScope(),
                  (e.handler = this.finishNode(t, "CatchClause"));
              }
              return (
                (e.finalizer = this.eat(a._finally) ? this.parseBlock() : null),
                !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"),
                this.finishNode(e, "TryStatement")
              );
            }),
            (f.parseVarStatement = function (e, t, i) {
              return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
            }),
            (f.parseWhileStatement = function (e) {
              return (
                this.next(),
                (e.test = this.parseParenExpression()),
                this.labels.push(Re),
                (e.body = this.parseStatement("while")),
                this.labels.pop(),
                this.finishNode(e, "WhileStatement")
              );
            }),
            (f.parseWithStatement = function (e) {
              return (
                this.strict && this.raise(this.start, "'with' in strict mode"),
                this.next(),
                (e.object = this.parseParenExpression()),
                (e.body = this.parseStatement("with")),
                this.finishNode(e, "WithStatement")
              );
            }),
            (f.parseEmptyStatement = function (e) {
              return this.next(), this.finishNode(e, "EmptyStatement");
            }),
            (f.parseLabeledStatement = function (e, t, i, s) {
              for (var r = 0, n = this.labels; r < n.length; r += 1) {
                var u = n[r];
                u.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
              }
              for (var h = this.type.isLoop ? "loop" : this.type === a._switch ? "switch" : null, c = this.labels.length - 1; c >= 0; c--) {
                var x = this.labels[c];
                if (x.statementStart === e.start) (x.statementStart = this.start), (x.kind = h);
                else break;
              }
              return (
                this.labels.push({ name: t, kind: h, statementStart: this.start }),
                (e.body = this.parseStatement(s ? (s.indexOf("label") === -1 ? s + "label" : s) : "label")),
                this.labels.pop(),
                (e.label = i),
                this.finishNode(e, "LabeledStatement")
              );
            }),
            (f.parseExpressionStatement = function (e, t) {
              return (e.expression = t), this.semicolon(), this.finishNode(e, "ExpressionStatement");
            }),
            (f.parseBlock = function (e, t, i) {
              for (
                e === void 0 && (e = !0),
                  t === void 0 && (t = this.startNode()),
                  t.body = [],
                  this.expect(a.braceL),
                  e && this.enterScope(0);
                this.type !== a.braceR;

              ) {
                var s = this.parseStatement(null);
                t.body.push(s);
              }
              return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
            }),
            (f.parseFor = function (e, t) {
              return (
                (e.init = t),
                this.expect(a.semi),
                (e.test = this.type === a.semi ? null : this.parseExpression()),
                this.expect(a.semi),
                (e.update = this.type === a.parenR ? null : this.parseExpression()),
                this.expect(a.parenR),
                (e.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(e, "ForStatement")
              );
            }),
            (f.parseForIn = function (e, t) {
              var i = this.type === a._in;
              return (
                this.next(),
                t.type === "VariableDeclaration" &&
                  t.declarations[0].init != null &&
                  (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") &&
                  this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"),
                (e.left = t),
                (e.right = i ? this.parseExpression() : this.parseMaybeAssign()),
                this.expect(a.parenR),
                (e.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(e, i ? "ForInStatement" : "ForOfStatement")
              );
            }),
            (f.parseVar = function (e, t, i, s) {
              for (e.declarations = [], e.kind = i; ; ) {
                var r = this.startNode();
                if (
                  (this.parseVarId(r, i),
                  this.eat(a.eq)
                    ? (r.init = this.parseMaybeAssign(t))
                    : !s && i === "const" && !(this.type === a._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))
                    ? this.unexpected()
                    : !s && r.id.type !== "Identifier" && !(t && (this.type === a._in || this.isContextual("of")))
                    ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value")
                    : (r.init = null),
                  e.declarations.push(this.finishNode(r, "VariableDeclarator")),
                  !this.eat(a.comma))
                )
                  break;
              }
              return e;
            }),
            (f.parseVarId = function (e, t) {
              (e.id = this.parseBindingAtom()), this.checkLValPattern(e.id, t === "var" ? Le : z, !1);
            });
          var xe = 1,
            Be = 2,
            Je = 4;
          (f.parseFunction = function (e, t, i, s, r) {
            this.initFunction(e),
              (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !s)) &&
                (this.type === a.star && t & Be && this.unexpected(), (e.generator = this.eat(a.star))),
              this.options.ecmaVersion >= 8 && (e.async = !!s),
              t & xe &&
                ((e.id = t & Je && this.type !== a.name ? null : this.parseIdent()),
                e.id &&
                  !(t & Be) &&
                  this.checkLValSimple(e.id, this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? Le : z) : We));
            var n = this.yieldPos,
              u = this.awaitPos,
              h = this.awaitIdentPos;
            return (
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              this.enterScope(Ve(e.async, e.generator)),
              t & xe || (e.id = this.type === a.name ? this.parseIdent() : null),
              this.parseFunctionParams(e),
              this.parseFunctionBody(e, i, !1, r),
              (this.yieldPos = n),
              (this.awaitPos = u),
              (this.awaitIdentPos = h),
              this.finishNode(e, t & xe ? "FunctionDeclaration" : "FunctionExpression")
            );
          }),
            (f.parseFunctionParams = function (e) {
              this.expect(a.parenL),
                (e.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8)),
                this.checkYieldAwaitInDefaultParams();
            }),
            (f.parseClass = function (e, t) {
              this.next();
              var i = this.strict;
              (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
              var s = this.enterClassBody(),
                r = this.startNode(),
                n = !1;
              for (r.body = [], this.expect(a.braceL); this.type !== a.braceR; ) {
                var u = this.parseClassElement(e.superClass !== null);
                u &&
                  (r.body.push(u),
                  u.type === "MethodDefinition" && u.kind === "constructor"
                    ? (n && this.raiseRecoverable(u.start, "Duplicate constructor in the same class"), (n = !0))
                    : u.key &&
                      u.key.type === "PrivateIdentifier" &&
                      Bt(s, u) &&
                      this.raiseRecoverable(u.key.start, "Identifier '#" + u.key.name + "' has already been declared"));
              }
              return (
                (this.strict = i),
                this.next(),
                (e.body = this.finishNode(r, "ClassBody")),
                this.exitClassBody(),
                this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
              );
            }),
            (f.parseClassElement = function (e) {
              if (this.eat(a.semi)) return null;
              var t = this.options.ecmaVersion,
                i = this.startNode(),
                s = "",
                r = !1,
                n = !1,
                u = "method",
                h = !1;
              if (this.eatContextual("static")) {
                if (t >= 13 && this.eat(a.braceL)) return this.parseClassStaticBlock(i), i;
                this.isClassElementNameStart() || this.type === a.star ? (h = !0) : (s = "static");
              }
              if (
                ((i.static = h),
                !s &&
                  t >= 8 &&
                  this.eatContextual("async") &&
                  ((this.isClassElementNameStart() || this.type === a.star) && !this.canInsertSemicolon() ? (n = !0) : (s = "async")),
                !s && (t >= 9 || !n) && this.eat(a.star) && (r = !0),
                !s && !n && !r)
              ) {
                var c = this.value;
                (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? (u = c) : (s = c));
              }
              if (
                (s
                  ? ((i.computed = !1),
                    (i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc)),
                    (i.key.name = s),
                    this.finishNode(i.key, "Identifier"))
                  : this.parseClassElementName(i),
                t < 13 || this.type === a.parenL || u !== "method" || r || n)
              ) {
                var x = !i.static && _e(i, "constructor"),
                  g = x && e;
                x && u !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"),
                  (i.kind = x ? "constructor" : u),
                  this.parseClassMethod(i, r, n, g);
              } else this.parseClassField(i);
              return i;
            }),
            (f.isClassElementNameStart = function () {
              return (
                this.type === a.name ||
                this.type === a.privateId ||
                this.type === a.num ||
                this.type === a.string ||
                this.type === a.bracketL ||
                this.type.keyword
              );
            }),
            (f.parseClassElementName = function (e) {
              this.type === a.privateId
                ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"),
                  (e.computed = !1),
                  (e.key = this.parsePrivateIdent()))
                : this.parsePropertyName(e);
            }),
            (f.parseClassMethod = function (e, t, i, s) {
              var r = e.key;
              e.kind === "constructor"
                ? (t && this.raise(r.start, "Constructor can't be a generator"),
                  i && this.raise(r.start, "Constructor can't be an async method"))
                : e.static && _e(e, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
              var n = (e.value = this.parseMethod(t, i, s));
              return (
                e.kind === "get" && n.params.length !== 0 && this.raiseRecoverable(n.start, "getter should have no params"),
                e.kind === "set" && n.params.length !== 1 && this.raiseRecoverable(n.start, "setter should have exactly one param"),
                e.kind === "set" &&
                  n.params[0].type === "RestElement" &&
                  this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params"),
                this.finishNode(e, "MethodDefinition")
              );
            }),
            (f.parseClassField = function (e) {
              if (
                (_e(e, "constructor")
                  ? this.raise(e.key.start, "Classes can't have a field named 'constructor'")
                  : e.static && _e(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"),
                this.eat(a.eq))
              ) {
                var t = this.currentThisScope(),
                  i = t.inClassFieldInit;
                (t.inClassFieldInit = !0), (e.value = this.parseMaybeAssign()), (t.inClassFieldInit = i);
              } else e.value = null;
              return this.semicolon(), this.finishNode(e, "PropertyDefinition");
            }),
            (f.parseClassStaticBlock = function (e) {
              e.body = [];
              var t = this.labels;
              for (this.labels = [], this.enterScope(de | Ne); this.type !== a.braceR; ) {
                var i = this.parseStatement(null);
                e.body.push(i);
              }
              return this.next(), this.exitScope(), (this.labels = t), this.finishNode(e, "StaticBlock");
            }),
            (f.parseClassId = function (e, t) {
              this.type === a.name
                ? ((e.id = this.parseIdent()), t && this.checkLValSimple(e.id, z, !1))
                : (t === !0 && this.unexpected(), (e.id = null));
            }),
            (f.parseClassSuper = function (e) {
              e.superClass = this.eat(a._extends) ? this.parseExprSubscripts(null, !1) : null;
            }),
            (f.enterClassBody = function () {
              var e = { declared: Object.create(null), used: [] };
              return this.privateNameStack.push(e), e.declared;
            }),
            (f.exitClassBody = function () {
              var e = this.privateNameStack.pop(),
                t = e.declared,
                i = e.used;
              if (this.options.checkPrivateFields)
                for (var s = this.privateNameStack.length, r = s === 0 ? null : this.privateNameStack[s - 1], n = 0; n < i.length; ++n) {
                  var u = i[n];
                  pe(t, u.name) ||
                    (r
                      ? r.used.push(u)
                      : this.raiseRecoverable(u.start, "Private field '#" + u.name + "' must be declared in an enclosing class"));
                }
            });
          function Bt(e, t) {
            var i = t.key.name,
              s = e[i],
              r = "true";
            return (
              t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (r = (t.static ? "s" : "i") + t.kind),
              (s === "iget" && r === "iset") ||
              (s === "iset" && r === "iget") ||
              (s === "sget" && r === "sset") ||
              (s === "sset" && r === "sget")
                ? ((e[i] = "true"), !1)
                : s
                ? !0
                : ((e[i] = r), !1)
            );
          }
          function _e(e, t) {
            var i = e.computed,
              s = e.key;
            return !i && ((s.type === "Identifier" && s.name === t) || (s.type === "Literal" && s.value === t));
          }
          (f.parseExportAllDeclaration = function (e, t) {
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual("as")
                  ? ((e.exported = this.parseModuleExportName()), this.checkExport(t, e.exported, this.lastTokStart))
                  : (e.exported = null)),
              this.expectContextual("from"),
              this.type !== a.string && this.unexpected(),
              (e.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(e, "ExportAllDeclaration")
            );
          }),
            (f.parseExport = function (e, t) {
              if ((this.next(), this.eat(a.star))) return this.parseExportAllDeclaration(e, t);
              if (this.eat(a._default))
                return (
                  this.checkExport(t, "default", this.lastTokStart),
                  (e.declaration = this.parseExportDefaultDeclaration()),
                  this.finishNode(e, "ExportDefaultDeclaration")
                );
              if (this.shouldParseExportStatement())
                (e.declaration = this.parseExportDeclaration(e)),
                  e.declaration.type === "VariableDeclaration"
                    ? this.checkVariableExport(t, e.declaration.declarations)
                    : this.checkExport(t, e.declaration.id, e.declaration.id.start),
                  (e.specifiers = []),
                  (e.source = null);
              else {
                if (((e.declaration = null), (e.specifiers = this.parseExportSpecifiers(t)), this.eatContextual("from")))
                  this.type !== a.string && this.unexpected(), (e.source = this.parseExprAtom());
                else {
                  for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
                    var r = s[i];
                    this.checkUnreserved(r.local),
                      this.checkLocalExport(r.local),
                      r.local.type === "Literal" &&
                        this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
                  }
                  e.source = null;
                }
                this.semicolon();
              }
              return this.finishNode(e, "ExportNamedDeclaration");
            }),
            (f.parseExportDeclaration = function (e) {
              return this.parseStatement(null);
            }),
            (f.parseExportDefaultDeclaration = function () {
              var e;
              if (this.type === a._function || (e = this.isAsyncFunction())) {
                var t = this.startNode();
                return this.next(), e && this.next(), this.parseFunction(t, xe | Je, !1, e);
              } else if (this.type === a._class) {
                var i = this.startNode();
                return this.parseClass(i, "nullableID");
              } else {
                var s = this.parseMaybeAssign();
                return this.semicolon(), s;
              }
            }),
            (f.checkExport = function (e, t, i) {
              e &&
                (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value),
                pe(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"),
                (e[t] = !0));
            }),
            (f.checkPatternExport = function (e, t) {
              var i = t.type;
              if (i === "Identifier") this.checkExport(e, t, t.start);
              else if (i === "ObjectPattern")
                for (var s = 0, r = t.properties; s < r.length; s += 1) {
                  var n = r[s];
                  this.checkPatternExport(e, n);
                }
              else if (i === "ArrayPattern")
                for (var u = 0, h = t.elements; u < h.length; u += 1) {
                  var c = h[u];
                  c && this.checkPatternExport(e, c);
                }
              else
                i === "Property"
                  ? this.checkPatternExport(e, t.value)
                  : i === "AssignmentPattern"
                  ? this.checkPatternExport(e, t.left)
                  : i === "RestElement" && this.checkPatternExport(e, t.argument);
            }),
            (f.checkVariableExport = function (e, t) {
              if (e)
                for (var i = 0, s = t; i < s.length; i += 1) {
                  var r = s[i];
                  this.checkPatternExport(e, r.id);
                }
            }),
            (f.shouldParseExportStatement = function () {
              return (
                this.type.keyword === "var" ||
                this.type.keyword === "const" ||
                this.type.keyword === "class" ||
                this.type.keyword === "function" ||
                this.isLet() ||
                this.isAsyncFunction()
              );
            }),
            (f.parseExportSpecifier = function (e) {
              var t = this.startNode();
              return (
                (t.local = this.parseModuleExportName()),
                (t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local),
                this.checkExport(e, t.exported, t.exported.start),
                this.finishNode(t, "ExportSpecifier")
              );
            }),
            (f.parseExportSpecifiers = function (e) {
              var t = [],
                i = !0;
              for (this.expect(a.braceL); !this.eat(a.braceR); ) {
                if (i) i = !1;
                else if ((this.expect(a.comma), this.afterTrailingComma(a.braceR))) break;
                t.push(this.parseExportSpecifier(e));
              }
              return t;
            }),
            (f.parseImport = function (e) {
              return (
                this.next(),
                this.type === a.string
                  ? ((e.specifiers = Rt), (e.source = this.parseExprAtom()))
                  : ((e.specifiers = this.parseImportSpecifiers()),
                    this.expectContextual("from"),
                    (e.source = this.type === a.string ? this.parseExprAtom() : this.unexpected())),
                this.semicolon(),
                this.finishNode(e, "ImportDeclaration")
              );
            }),
            (f.parseImportSpecifier = function () {
              var e = this.startNode();
              return (
                (e.imported = this.parseModuleExportName()),
                this.eatContextual("as") ? (e.local = this.parseIdent()) : (this.checkUnreserved(e.imported), (e.local = e.imported)),
                this.checkLValSimple(e.local, z),
                this.finishNode(e, "ImportSpecifier")
              );
            }),
            (f.parseImportDefaultSpecifier = function () {
              var e = this.startNode();
              return (e.local = this.parseIdent()), this.checkLValSimple(e.local, z), this.finishNode(e, "ImportDefaultSpecifier");
            }),
            (f.parseImportNamespaceSpecifier = function () {
              var e = this.startNode();
              return (
                this.next(),
                this.expectContextual("as"),
                (e.local = this.parseIdent()),
                this.checkLValSimple(e.local, z),
                this.finishNode(e, "ImportNamespaceSpecifier")
              );
            }),
            (f.parseImportSpecifiers = function () {
              var e = [],
                t = !0;
              if (this.type === a.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(a.comma))) return e;
              if (this.type === a.star) return e.push(this.parseImportNamespaceSpecifier()), e;
              for (this.expect(a.braceL); !this.eat(a.braceR); ) {
                if (t) t = !1;
                else if ((this.expect(a.comma), this.afterTrailingComma(a.braceR))) break;
                e.push(this.parseImportSpecifier());
              }
              return e;
            }),
            (f.parseModuleExportName = function () {
              if (this.options.ecmaVersion >= 13 && this.type === a.string) {
                var e = this.parseLiteral(this.value);
                return Pt.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
              }
              return this.parseIdent(!0);
            }),
            (f.adaptDirectivePrologue = function (e) {
              for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
            }),
            (f.isDirectiveCandidate = function (e) {
              return (
                this.options.ecmaVersion >= 5 &&
                e.type === "ExpressionStatement" &&
                e.expression.type === "Literal" &&
                typeof e.expression.value == "string" &&
                (this.input[e.start] === '"' || this.input[e.start] === "'")
              );
            });
          var F = w.prototype;
          (F.toAssignable = function (e, t, i) {
            if (this.options.ecmaVersion >= 6 && e)
              switch (e.type) {
                case "Identifier":
                  this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
                  break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  break;
                case "ObjectExpression":
                  (e.type = "ObjectPattern"), i && this.checkPatternErrors(i, !0);
                  for (var s = 0, r = e.properties; s < r.length; s += 1) {
                    var n = r[s];
                    this.toAssignable(n, t),
                      n.type === "RestElement" &&
                        (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern") &&
                        this.raise(n.argument.start, "Unexpected token");
                  }
                  break;
                case "Property":
                  e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"),
                    this.toAssignable(e.value, t);
                  break;
                case "ArrayExpression":
                  (e.type = "ArrayPattern"), i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);
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
                  break;
                case "ParenthesizedExpression":
                  this.toAssignable(e.expression, t, i);
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                  break;
                case "MemberExpression":
                  if (!t) break;
                default:
                  this.raise(e.start, "Assigning to rvalue");
              }
            else i && this.checkPatternErrors(i, !0);
            return e;
          }),
            (F.toAssignableList = function (e, t) {
              for (var i = e.length, s = 0; s < i; s++) {
                var r = e[s];
                r && this.toAssignable(r, t);
              }
              if (i) {
                var n = e[i - 1];
                this.options.ecmaVersion === 6 &&
                  t &&
                  n &&
                  n.type === "RestElement" &&
                  n.argument.type !== "Identifier" &&
                  this.unexpected(n.argument.start);
              }
              return e;
            }),
            (F.parseSpread = function (e) {
              var t = this.startNode();
              return this.next(), (t.argument = this.parseMaybeAssign(!1, e)), this.finishNode(t, "SpreadElement");
            }),
            (F.parseRestBinding = function () {
              var e = this.startNode();
              return (
                this.next(),
                this.options.ecmaVersion === 6 && this.type !== a.name && this.unexpected(),
                (e.argument = this.parseBindingAtom()),
                this.finishNode(e, "RestElement")
              );
            }),
            (F.parseBindingAtom = function () {
              if (this.options.ecmaVersion >= 6)
                switch (this.type) {
                  case a.bracketL:
                    var e = this.startNode();
                    return this.next(), (e.elements = this.parseBindingList(a.bracketR, !0, !0)), this.finishNode(e, "ArrayPattern");
                  case a.braceL:
                    return this.parseObj(!0);
                }
              return this.parseIdent();
            }),
            (F.parseBindingList = function (e, t, i, s) {
              for (var r = [], n = !0; !this.eat(e); )
                if ((n ? (n = !1) : this.expect(a.comma), t && this.type === a.comma)) r.push(null);
                else {
                  if (i && this.afterTrailingComma(e)) break;
                  if (this.type === a.ellipsis) {
                    var u = this.parseRestBinding();
                    this.parseBindingListItem(u),
                      r.push(u),
                      this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"),
                      this.expect(e);
                    break;
                  } else r.push(this.parseAssignableListItem(s));
                }
              return r;
            }),
            (F.parseAssignableListItem = function (e) {
              var t = this.parseMaybeDefault(this.start, this.startLoc);
              return this.parseBindingListItem(t), t;
            }),
            (F.parseBindingListItem = function (e) {
              return e;
            }),
            (F.parseMaybeDefault = function (e, t, i) {
              if (((i = i || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(a.eq))) return i;
              var s = this.startNodeAt(e, t);
              return (s.left = i), (s.right = this.parseMaybeAssign()), this.finishNode(s, "AssignmentPattern");
            }),
            (F.checkLValSimple = function (e, t, i) {
              t === void 0 && (t = ye);
              var s = t !== ye;
              switch (e.type) {
                case "Identifier":
                  this.strict &&
                    this.reservedWordsStrictBind.test(e.name) &&
                    this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode"),
                    s &&
                      (t === z && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"),
                      i && (pe(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), (i[e.name] = !0)),
                      t !== Xe && this.declareName(e.name, t, e.start));
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                  break;
                case "MemberExpression":
                  s && this.raiseRecoverable(e.start, "Binding member expression");
                  break;
                case "ParenthesizedExpression":
                  return s && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
                default:
                  this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
              }
            }),
            (F.checkLValPattern = function (e, t, i) {
              switch ((t === void 0 && (t = ye), e.type)) {
                case "ObjectPattern":
                  for (var s = 0, r = e.properties; s < r.length; s += 1) {
                    var n = r[s];
                    this.checkLValInnerPattern(n, t, i);
                  }
                  break;
                case "ArrayPattern":
                  for (var u = 0, h = e.elements; u < h.length; u += 1) {
                    var c = h[u];
                    c && this.checkLValInnerPattern(c, t, i);
                  }
                  break;
                default:
                  this.checkLValSimple(e, t, i);
              }
            }),
            (F.checkLValInnerPattern = function (e, t, i) {
              switch ((t === void 0 && (t = ye), e.type)) {
                case "Property":
                  this.checkLValInnerPattern(e.value, t, i);
                  break;
                case "AssignmentPattern":
                  this.checkLValPattern(e.left, t, i);
                  break;
                case "RestElement":
                  this.checkLValPattern(e.argument, t, i);
                  break;
                default:
                  this.checkLValPattern(e, t, i);
              }
            });
          var D = function (t, i, s, r, n) {
              (this.token = t), (this.isExpr = !!i), (this.preserveSpace = !!s), (this.override = r), (this.generator = !!n);
            },
            k = {
              b_stat: new D("{", !1),
              b_expr: new D("{", !0),
              b_tmpl: new D("${", !1),
              p_stat: new D("(", !1),
              p_expr: new D("(", !0),
              q_tmpl: new D("`", !0, !0, function (e) {
                return e.tryReadTemplateToken();
              }),
              f_stat: new D("function", !1),
              f_expr: new D("function", !0),
              f_expr_gen: new D("function", !0, !1, null, !0),
              f_gen: new D("function", !1, !1, null, !0),
            },
            ne = w.prototype;
          (ne.initialContext = function () {
            return [k.b_stat];
          }),
            (ne.curContext = function () {
              return this.context[this.context.length - 1];
            }),
            (ne.braceIsBlock = function (e) {
              var t = this.curContext();
              return t === k.f_expr || t === k.f_stat
                ? !0
                : e === a.colon && (t === k.b_stat || t === k.b_expr)
                ? !t.isExpr
                : e === a._return || (e === a.name && this.exprAllowed)
                ? l.test(this.input.slice(this.lastTokEnd, this.start))
                : e === a._else || e === a.semi || e === a.eof || e === a.parenR || e === a.arrow
                ? !0
                : e === a.braceL
                ? t === k.b_stat
                : e === a._var || e === a._const || e === a.name
                ? !1
                : !this.exprAllowed;
            }),
            (ne.inGeneratorContext = function () {
              for (var e = this.context.length - 1; e >= 1; e--) {
                var t = this.context[e];
                if (t.token === "function") return t.generator;
              }
              return !1;
            }),
            (ne.updateContext = function (e) {
              var t,
                i = this.type;
              i.keyword && e === a.dot
                ? (this.exprAllowed = !1)
                : (t = i.updateContext)
                ? t.call(this, e)
                : (this.exprAllowed = i.beforeExpr);
            }),
            (ne.overrideContext = function (e) {
              this.curContext() !== e && (this.context[this.context.length - 1] = e);
            }),
            (a.parenR.updateContext = a.braceR.updateContext =
              function () {
                if (this.context.length === 1) {
                  this.exprAllowed = !0;
                  return;
                }
                var e = this.context.pop();
                e === k.b_stat && this.curContext().token === "function" && (e = this.context.pop()), (this.exprAllowed = !e.isExpr);
              }),
            (a.braceL.updateContext = function (e) {
              this.context.push(this.braceIsBlock(e) ? k.b_stat : k.b_expr), (this.exprAllowed = !0);
            }),
            (a.dollarBraceL.updateContext = function () {
              this.context.push(k.b_tmpl), (this.exprAllowed = !0);
            }),
            (a.parenL.updateContext = function (e) {
              var t = e === a._if || e === a._for || e === a._with || e === a._while;
              this.context.push(t ? k.p_stat : k.p_expr), (this.exprAllowed = !0);
            }),
            (a.incDec.updateContext = function () {}),
            (a._function.updateContext = a._class.updateContext =
              function (e) {
                e.beforeExpr &&
                e !== a._else &&
                !(e === a.semi && this.curContext() !== k.p_stat) &&
                !(e === a._return && l.test(this.input.slice(this.lastTokEnd, this.start))) &&
                !((e === a.colon || e === a.braceL) && this.curContext() === k.b_stat)
                  ? this.context.push(k.f_expr)
                  : this.context.push(k.f_stat),
                  (this.exprAllowed = !1);
              }),
            (a.colon.updateContext = function () {
              this.curContext().token === "function" && this.context.pop(), (this.exprAllowed = !0);
            }),
            (a.backQuote.updateContext = function () {
              this.curContext() === k.q_tmpl ? this.context.pop() : this.context.push(k.q_tmpl), (this.exprAllowed = !1);
            }),
            (a.star.updateContext = function (e) {
              if (e === a._function) {
                var t = this.context.length - 1;
                this.context[t] === k.f_expr ? (this.context[t] = k.f_expr_gen) : (this.context[t] = k.f_gen);
              }
              this.exprAllowed = !0;
            }),
            (a.name.updateContext = function (e) {
              var t = !1;
              this.options.ecmaVersion >= 6 &&
                e !== a.dot &&
                ((this.value === "of" && !this.exprAllowed) || (this.value === "yield" && this.inGeneratorContext())) &&
                (t = !0),
                (this.exprAllowed = t);
            });
          var d = w.prototype;
          (d.checkPropClash = function (e, t, i) {
            if (
              !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
              !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
            ) {
              var s = e.key,
                r;
              switch (s.type) {
                case "Identifier":
                  r = s.name;
                  break;
                case "Literal":
                  r = String(s.value);
                  break;
                default:
                  return;
              }
              var n = e.kind;
              if (this.options.ecmaVersion >= 6) {
                r === "__proto__" &&
                  n === "init" &&
                  (t.proto &&
                    (i
                      ? i.doubleProto < 0 && (i.doubleProto = s.start)
                      : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")),
                  (t.proto = !0));
                return;
              }
              r = "$" + r;
              var u = t[r];
              if (u) {
                var h;
                n === "init" ? (h = (this.strict && u.init) || u.get || u.set) : (h = u.init || u[n]),
                  h && this.raiseRecoverable(s.start, "Redefinition of property");
              } else u = t[r] = { init: !1, get: !1, set: !1 };
              u[n] = !0;
            }
          }),
            (d.parseExpression = function (e, t) {
              var i = this.start,
                s = this.startLoc,
                r = this.parseMaybeAssign(e, t);
              if (this.type === a.comma) {
                var n = this.startNodeAt(i, s);
                for (n.expressions = [r]; this.eat(a.comma); ) n.expressions.push(this.parseMaybeAssign(e, t));
                return this.finishNode(n, "SequenceExpression");
              }
              return r;
            }),
            (d.parseMaybeAssign = function (e, t, i) {
              if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(e);
                this.exprAllowed = !1;
              }
              var s = !1,
                r = -1,
                n = -1,
                u = -1;
              t
                ? ((r = t.parenthesizedAssign), (n = t.trailingComma), (u = t.doubleProto), (t.parenthesizedAssign = t.trailingComma = -1))
                : ((t = new Ce()), (s = !0));
              var h = this.start,
                c = this.startLoc;
              (this.type === a.parenL || this.type === a.name) &&
                ((this.potentialArrowAt = this.start), (this.potentialArrowInForAwait = e === "await"));
              var x = this.parseMaybeConditional(e, t);
              if ((i && (x = i.call(this, x, h, c)), this.type.isAssign)) {
                var g = this.startNodeAt(h, c);
                return (
                  (g.operator = this.value),
                  this.type === a.eq && (x = this.toAssignable(x, !1, t)),
                  s || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
                  t.shorthandAssign >= x.start && (t.shorthandAssign = -1),
                  this.type === a.eq ? this.checkLValPattern(x) : this.checkLValSimple(x),
                  (g.left = x),
                  this.next(),
                  (g.right = this.parseMaybeAssign(e)),
                  u > -1 && (t.doubleProto = u),
                  this.finishNode(g, "AssignmentExpression")
                );
              } else s && this.checkExpressionErrors(t, !0);
              return r > -1 && (t.parenthesizedAssign = r), n > -1 && (t.trailingComma = n), x;
            }),
            (d.parseMaybeConditional = function (e, t) {
              var i = this.start,
                s = this.startLoc,
                r = this.parseExprOps(e, t);
              if (this.checkExpressionErrors(t)) return r;
              if (this.eat(a.question)) {
                var n = this.startNodeAt(i, s);
                return (
                  (n.test = r),
                  (n.consequent = this.parseMaybeAssign()),
                  this.expect(a.colon),
                  (n.alternate = this.parseMaybeAssign(e)),
                  this.finishNode(n, "ConditionalExpression")
                );
              }
              return r;
            }),
            (d.parseExprOps = function (e, t) {
              var i = this.start,
                s = this.startLoc,
                r = this.parseMaybeUnary(t, !1, !1, e);
              return this.checkExpressionErrors(t) || (r.start === i && r.type === "ArrowFunctionExpression")
                ? r
                : this.parseExprOp(r, i, s, -1, e);
            }),
            (d.parseExprOp = function (e, t, i, s, r) {
              var n = this.type.binop;
              if (n != null && (!r || this.type !== a._in) && n > s) {
                var u = this.type === a.logicalOR || this.type === a.logicalAND,
                  h = this.type === a.coalesce;
                h && (n = a.logicalAND.binop);
                var c = this.value;
                this.next();
                var x = this.start,
                  g = this.startLoc,
                  P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), x, g, n, r),
                  $ = this.buildBinary(t, i, e, P, c, u || h);
                return (
                  ((u && this.type === a.coalesce) || (h && (this.type === a.logicalOR || this.type === a.logicalAND))) &&
                    this.raiseRecoverable(
                      this.start,
                      "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                    ),
                  this.parseExprOp($, t, i, s, r)
                );
              }
              return e;
            }),
            (d.buildBinary = function (e, t, i, s, r, n) {
              s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
              var u = this.startNodeAt(e, t);
              return (u.left = i), (u.operator = r), (u.right = s), this.finishNode(u, n ? "LogicalExpression" : "BinaryExpression");
            }),
            (d.parseMaybeUnary = function (e, t, i, s) {
              var r = this.start,
                n = this.startLoc,
                u;
              if (this.isContextual("await") && this.canAwait) (u = this.parseAwait(s)), (t = !0);
              else if (this.type.prefix) {
                var h = this.startNode(),
                  c = this.type === a.incDec;
                (h.operator = this.value),
                  (h.prefix = !0),
                  this.next(),
                  (h.argument = this.parseMaybeUnary(null, !0, c, s)),
                  this.checkExpressionErrors(e, !0),
                  c
                    ? this.checkLValSimple(h.argument)
                    : this.strict && h.operator === "delete" && h.argument.type === "Identifier"
                    ? this.raiseRecoverable(h.start, "Deleting local variable in strict mode")
                    : h.operator === "delete" && Ke(h.argument)
                    ? this.raiseRecoverable(h.start, "Private fields can not be deleted")
                    : (t = !0),
                  (u = this.finishNode(h, c ? "UpdateExpression" : "UnaryExpression"));
              } else if (!t && this.type === a.privateId)
                (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(),
                  (u = this.parsePrivateIdent()),
                  this.type !== a._in && this.unexpected();
              else {
                if (((u = this.parseExprSubscripts(e, s)), this.checkExpressionErrors(e))) return u;
                for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                  var x = this.startNodeAt(r, n);
                  (x.operator = this.value),
                    (x.prefix = !1),
                    (x.argument = u),
                    this.checkLValSimple(u),
                    this.next(),
                    (u = this.finishNode(x, "UpdateExpression"));
                }
              }
              if (!i && this.eat(a.starstar))
                if (t) this.unexpected(this.lastTokStart);
                else return this.buildBinary(r, n, u, this.parseMaybeUnary(null, !1, !1, s), "**", !1);
              else return u;
            });
          function Ke(e) {
            return (
              (e.type === "MemberExpression" && e.property.type === "PrivateIdentifier") ||
              (e.type === "ChainExpression" && Ke(e.expression))
            );
          }
          (d.parseExprSubscripts = function (e, t) {
            var i = this.start,
              s = this.startLoc,
              r = this.parseExprAtom(e, t);
            if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
            var n = this.parseSubscripts(r, i, s, !1, t);
            return (
              e &&
                n.type === "MemberExpression" &&
                (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1),
                e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1),
                e.trailingComma >= n.start && (e.trailingComma = -1)),
              n
            );
          }),
            (d.parseSubscripts = function (e, t, i, s, r) {
              for (
                var n =
                    this.options.ecmaVersion >= 8 &&
                    e.type === "Identifier" &&
                    e.name === "async" &&
                    this.lastTokEnd === e.end &&
                    !this.canInsertSemicolon() &&
                    e.end - e.start === 5 &&
                    this.potentialArrowAt === e.start,
                  u = !1;
                ;

              ) {
                var h = this.parseSubscript(e, t, i, s, n, u, r);
                if ((h.optional && (u = !0), h === e || h.type === "ArrowFunctionExpression")) {
                  if (u) {
                    var c = this.startNodeAt(t, i);
                    (c.expression = h), (h = this.finishNode(c, "ChainExpression"));
                  }
                  return h;
                }
                e = h;
              }
            }),
            (d.shouldParseAsyncArrow = function () {
              return !this.canInsertSemicolon() && this.eat(a.arrow);
            }),
            (d.parseSubscriptAsyncArrow = function (e, t, i, s) {
              return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, s);
            }),
            (d.parseSubscript = function (e, t, i, s, r, n, u) {
              var h = this.options.ecmaVersion >= 11,
                c = h && this.eat(a.questionDot);
              s && c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
              var x = this.eat(a.bracketL);
              if (x || (c && this.type !== a.parenL && this.type !== a.backQuote) || this.eat(a.dot)) {
                var g = this.startNodeAt(t, i);
                (g.object = e),
                  x
                    ? ((g.property = this.parseExpression()), this.expect(a.bracketR))
                    : this.type === a.privateId && e.type !== "Super"
                    ? (g.property = this.parsePrivateIdent())
                    : (g.property = this.parseIdent(this.options.allowReserved !== "never")),
                  (g.computed = !!x),
                  h && (g.optional = c),
                  (e = this.finishNode(g, "MemberExpression"));
              } else if (!s && this.eat(a.parenL)) {
                var P = new Ce(),
                  $ = this.yieldPos,
                  ve = this.awaitPos,
                  ue = this.awaitIdentPos;
                (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
                var Ee = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1, P);
                if (r && !c && this.shouldParseAsyncArrow())
                  return (
                    this.checkPatternErrors(P, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"),
                    (this.yieldPos = $),
                    (this.awaitPos = ve),
                    (this.awaitIdentPos = ue),
                    this.parseSubscriptAsyncArrow(t, i, Ee, u)
                  );
                this.checkExpressionErrors(P, !0),
                  (this.yieldPos = $ || this.yieldPos),
                  (this.awaitPos = ve || this.awaitPos),
                  (this.awaitIdentPos = ue || this.awaitIdentPos);
                var oe = this.startNodeAt(t, i);
                (oe.callee = e), (oe.arguments = Ee), h && (oe.optional = c), (e = this.finishNode(oe, "CallExpression"));
              } else if (this.type === a.backQuote) {
                (c || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                var he = this.startNodeAt(t, i);
                (he.tag = e), (he.quasi = this.parseTemplate({ isTagged: !0 })), (e = this.finishNode(he, "TaggedTemplateExpression"));
              }
              return e;
            }),
            (d.parseExprAtom = function (e, t, i) {
              this.type === a.slash && this.readRegexp();
              var s,
                r = this.potentialArrowAt === this.start;
              switch (this.type) {
                case a._super:
                  return (
                    this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
                    (s = this.startNode()),
                    this.next(),
                    this.type === a.parenL &&
                      !this.allowDirectSuper &&
                      this.raise(s.start, "super() call outside constructor of a subclass"),
                    this.type !== a.dot && this.type !== a.bracketL && this.type !== a.parenL && this.unexpected(),
                    this.finishNode(s, "Super")
                  );
                case a._this:
                  return (s = this.startNode()), this.next(), this.finishNode(s, "ThisExpression");
                case a.name:
                  var n = this.start,
                    u = this.startLoc,
                    h = this.containsEsc,
                    c = this.parseIdent(!1);
                  if (this.options.ecmaVersion >= 8 && !h && c.name === "async" && !this.canInsertSemicolon() && this.eat(a._function))
                    return this.overrideContext(k.f_expr), this.parseFunction(this.startNodeAt(n, u), 0, !1, !0, t);
                  if (r && !this.canInsertSemicolon()) {
                    if (this.eat(a.arrow)) return this.parseArrowExpression(this.startNodeAt(n, u), [c], !1, t);
                    if (
                      this.options.ecmaVersion >= 8 &&
                      c.name === "async" &&
                      this.type === a.name &&
                      !h &&
                      (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)
                    )
                      return (
                        (c = this.parseIdent(!1)),
                        (this.canInsertSemicolon() || !this.eat(a.arrow)) && this.unexpected(),
                        this.parseArrowExpression(this.startNodeAt(n, u), [c], !0, t)
                      );
                  }
                  return c;
                case a.regexp:
                  var x = this.value;
                  return (s = this.parseLiteral(x.value)), (s.regex = { pattern: x.pattern, flags: x.flags }), s;
                case a.num:
                case a.string:
                  return this.parseLiteral(this.value);
                case a._null:
                case a._true:
                case a._false:
                  return (
                    (s = this.startNode()),
                    (s.value = this.type === a._null ? null : this.type === a._true),
                    (s.raw = this.type.keyword),
                    this.next(),
                    this.finishNode(s, "Literal")
                  );
                case a.parenL:
                  var g = this.start,
                    P = this.parseParenAndDistinguishExpression(r, t);
                  return (
                    e &&
                      (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (e.parenthesizedAssign = g),
                      e.parenthesizedBind < 0 && (e.parenthesizedBind = g)),
                    P
                  );
                case a.bracketL:
                  return (
                    (s = this.startNode()),
                    this.next(),
                    (s.elements = this.parseExprList(a.bracketR, !0, !0, e)),
                    this.finishNode(s, "ArrayExpression")
                  );
                case a.braceL:
                  return this.overrideContext(k.b_expr), this.parseObj(!1, e);
                case a._function:
                  return (s = this.startNode()), this.next(), this.parseFunction(s, 0);
                case a._class:
                  return this.parseClass(this.startNode(), !1);
                case a._new:
                  return this.parseNew();
                case a.backQuote:
                  return this.parseTemplate();
                case a._import:
                  return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
                default:
                  return this.parseExprAtomDefault();
              }
            }),
            (d.parseExprAtomDefault = function () {
              this.unexpected();
            }),
            (d.parseExprImport = function (e) {
              var t = this.startNode();
              if (
                (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"),
                this.next(),
                this.type === a.parenL && !e)
              )
                return this.parseDynamicImport(t);
              if (this.type === a.dot) {
                var i = this.startNodeAt(t.start, t.loc && t.loc.start);
                return (i.name = "import"), (t.meta = this.finishNode(i, "Identifier")), this.parseImportMeta(t);
              } else this.unexpected();
            }),
            (d.parseDynamicImport = function (e) {
              if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(a.parenR))) {
                var t = this.start;
                this.eat(a.comma) && this.eat(a.parenR)
                  ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()")
                  : this.unexpected(t);
              }
              return this.finishNode(e, "ImportExpression");
            }),
            (d.parseImportMeta = function (e) {
              this.next();
              var t = this.containsEsc;
              return (
                (e.property = this.parseIdent(!0)),
                e.property.name !== "meta" &&
                  this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"),
                t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
                this.options.sourceType !== "module" &&
                  !this.options.allowImportExportEverywhere &&
                  this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
                this.finishNode(e, "MetaProperty")
              );
            }),
            (d.parseLiteral = function (e) {
              var t = this.startNode();
              return (
                (t.value = e),
                (t.raw = this.input.slice(this.start, this.end)),
                t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
                this.next(),
                this.finishNode(t, "Literal")
              );
            }),
            (d.parseParenExpression = function () {
              this.expect(a.parenL);
              var e = this.parseExpression();
              return this.expect(a.parenR), e;
            }),
            (d.shouldParseArrow = function (e) {
              return !this.canInsertSemicolon();
            }),
            (d.parseParenAndDistinguishExpression = function (e, t) {
              var i = this.start,
                s = this.startLoc,
                r,
                n = this.options.ecmaVersion >= 8;
              if (this.options.ecmaVersion >= 6) {
                this.next();
                var u = this.start,
                  h = this.startLoc,
                  c = [],
                  x = !0,
                  g = !1,
                  P = new Ce(),
                  $ = this.yieldPos,
                  ve = this.awaitPos,
                  ue;
                for (this.yieldPos = 0, this.awaitPos = 0; this.type !== a.parenR; )
                  if ((x ? (x = !1) : this.expect(a.comma), n && this.afterTrailingComma(a.parenR, !0))) {
                    g = !0;
                    break;
                  } else if (this.type === a.ellipsis) {
                    (ue = this.start),
                      c.push(this.parseParenItem(this.parseRestBinding())),
                      this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                    break;
                  } else c.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
                var Ee = this.lastTokEnd,
                  oe = this.lastTokEndLoc;
                if ((this.expect(a.parenR), e && this.shouldParseArrow(c) && this.eat(a.arrow)))
                  return (
                    this.checkPatternErrors(P, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    (this.yieldPos = $),
                    (this.awaitPos = ve),
                    this.parseParenArrowList(i, s, c, t)
                  );
                (!c.length || g) && this.unexpected(this.lastTokStart),
                  ue && this.unexpected(ue),
                  this.checkExpressionErrors(P, !0),
                  (this.yieldPos = $ || this.yieldPos),
                  (this.awaitPos = ve || this.awaitPos),
                  c.length > 1
                    ? ((r = this.startNodeAt(u, h)), (r.expressions = c), this.finishNodeAt(r, "SequenceExpression", Ee, oe))
                    : (r = c[0]);
              } else r = this.parseParenExpression();
              if (this.options.preserveParens) {
                var he = this.startNodeAt(i, s);
                return (he.expression = r), this.finishNode(he, "ParenthesizedExpression");
              } else return r;
            }),
            (d.parseParenItem = function (e) {
              return e;
            }),
            (d.parseParenArrowList = function (e, t, i, s) {
              return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, s);
            });
          var Ot = [];
          (d.parseNew = function () {
            this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
            var e = this.startNode();
            if ((this.next(), this.options.ecmaVersion >= 6 && this.type === a.dot)) {
              var t = this.startNodeAt(e.start, e.loc && e.loc.start);
              (t.name = "new"), (e.meta = this.finishNode(t, "Identifier")), this.next();
              var i = this.containsEsc;
              return (
                (e.property = this.parseIdent(!0)),
                e.property.name !== "target" &&
                  this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"),
                i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
                this.allowNewDotTarget ||
                  this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"),
                this.finishNode(e, "MetaProperty")
              );
            }
            var s = this.start,
              r = this.startLoc;
            return (
              (e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, r, !0, !1)),
              this.eat(a.parenL) ? (e.arguments = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1)) : (e.arguments = Ot),
              this.finishNode(e, "NewExpression")
            );
          }),
            (d.parseTemplateElement = function (e) {
              var t = e.isTagged,
                i = this.startNode();
              return (
                this.type === a.invalidTemplate
                  ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"),
                    (i.value = { raw: this.value, cooked: null }))
                  : (i.value = {
                      raw: this.input.slice(this.start, this.end).replace(
                        /\r\n?/g,
                        `
`
                      ),
                      cooked: this.value,
                    }),
                this.next(),
                (i.tail = this.type === a.backQuote),
                this.finishNode(i, "TemplateElement")
              );
            }),
            (d.parseTemplate = function (e) {
              e === void 0 && (e = {});
              var t = e.isTagged;
              t === void 0 && (t = !1);
              var i = this.startNode();
              this.next(), (i.expressions = []);
              var s = this.parseTemplateElement({ isTagged: t });
              for (i.quasis = [s]; !s.tail; )
                this.type === a.eof && this.raise(this.pos, "Unterminated template literal"),
                  this.expect(a.dollarBraceL),
                  i.expressions.push(this.parseExpression()),
                  this.expect(a.braceR),
                  i.quasis.push((s = this.parseTemplateElement({ isTagged: t })));
              return this.next(), this.finishNode(i, "TemplateLiteral");
            }),
            (d.isAsyncProp = function (e) {
              return (
                !e.computed &&
                e.key.type === "Identifier" &&
                e.key.name === "async" &&
                (this.type === a.name ||
                  this.type === a.num ||
                  this.type === a.string ||
                  this.type === a.bracketL ||
                  this.type.keyword ||
                  (this.options.ecmaVersion >= 9 && this.type === a.star)) &&
                !l.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (d.parseObj = function (e, t) {
              var i = this.startNode(),
                s = !0,
                r = {};
              for (i.properties = [], this.next(); !this.eat(a.braceR); ) {
                if (s) s = !1;
                else if ((this.expect(a.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(a.braceR))) break;
                var n = this.parseProperty(e, t);
                e || this.checkPropClash(n, r, t), i.properties.push(n);
              }
              return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
            }),
            (d.parseProperty = function (e, t) {
              var i = this.startNode(),
                s,
                r,
                n,
                u;
              if (this.options.ecmaVersion >= 9 && this.eat(a.ellipsis))
                return e
                  ? ((i.argument = this.parseIdent(!1)),
                    this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"),
                    this.finishNode(i, "RestElement"))
                  : ((i.argument = this.parseMaybeAssign(!1, t)),
                    this.type === a.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
                    this.finishNode(i, "SpreadElement"));
              this.options.ecmaVersion >= 6 &&
                ((i.method = !1), (i.shorthand = !1), (e || t) && ((n = this.start), (u = this.startLoc)), e || (s = this.eat(a.star)));
              var h = this.containsEsc;
              return (
                this.parsePropertyName(i),
                !e && !h && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i)
                  ? ((r = !0), (s = this.options.ecmaVersion >= 9 && this.eat(a.star)), this.parsePropertyName(i))
                  : (r = !1),
                this.parsePropertyValue(i, e, s, r, n, u, t, h),
                this.finishNode(i, "Property")
              );
            }),
            (d.parseGetterSetter = function (e) {
              (e.kind = e.key.name), this.parsePropertyName(e), (e.value = this.parseMethod(!1));
              var t = e.kind === "get" ? 0 : 1;
              if (e.value.params.length !== t) {
                var i = e.value.start;
                e.kind === "get"
                  ? this.raiseRecoverable(i, "getter should have no params")
                  : this.raiseRecoverable(i, "setter should have exactly one param");
              } else
                e.kind === "set" &&
                  e.value.params[0].type === "RestElement" &&
                  this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
            }),
            (d.parsePropertyValue = function (e, t, i, s, r, n, u, h) {
              (i || s) && this.type === a.colon && this.unexpected(),
                this.eat(a.colon)
                  ? ((e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u)), (e.kind = "init"))
                  : this.options.ecmaVersion >= 6 && this.type === a.parenL
                  ? (t && this.unexpected(), (e.kind = "init"), (e.method = !0), (e.value = this.parseMethod(i, s)))
                  : !t &&
                    !h &&
                    this.options.ecmaVersion >= 5 &&
                    !e.computed &&
                    e.key.type === "Identifier" &&
                    (e.key.name === "get" || e.key.name === "set") &&
                    this.type !== a.comma &&
                    this.type !== a.braceR &&
                    this.type !== a.eq
                  ? ((i || s) && this.unexpected(), this.parseGetterSetter(e))
                  : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
                  ? ((i || s) && this.unexpected(),
                    this.checkUnreserved(e.key),
                    e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r),
                    (e.kind = "init"),
                    t
                      ? (e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key)))
                      : this.type === a.eq && u
                      ? (u.shorthandAssign < 0 && (u.shorthandAssign = this.start),
                        (e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key))))
                      : (e.value = this.copyNode(e.key)),
                    (e.shorthand = !0))
                  : this.unexpected();
            }),
            (d.parsePropertyName = function (e) {
              if (this.options.ecmaVersion >= 6) {
                if (this.eat(a.bracketL)) return (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(a.bracketR), e.key;
                e.computed = !1;
              }
              return (e.key =
                this.type === a.num || this.type === a.string
                  ? this.parseExprAtom()
                  : this.parseIdent(this.options.allowReserved !== "never"));
            }),
            (d.initFunction = function (e) {
              (e.id = null),
                this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
                this.options.ecmaVersion >= 8 && (e.async = !1);
            }),
            (d.parseMethod = function (e, t, i) {
              var s = this.startNode(),
                r = this.yieldPos,
                n = this.awaitPos,
                u = this.awaitIdentPos;
              return (
                this.initFunction(s),
                this.options.ecmaVersion >= 6 && (s.generator = e),
                this.options.ecmaVersion >= 8 && (s.async = !!t),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                this.enterScope(Ve(t, s.generator) | Ne | (i ? He : 0)),
                this.expect(a.parenL),
                (s.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8)),
                this.checkYieldAwaitInDefaultParams(),
                this.parseFunctionBody(s, !1, !0, !1),
                (this.yieldPos = r),
                (this.awaitPos = n),
                (this.awaitIdentPos = u),
                this.finishNode(s, "FunctionExpression")
              );
            }),
            (d.parseArrowExpression = function (e, t, i, s) {
              var r = this.yieldPos,
                n = this.awaitPos,
                u = this.awaitIdentPos;
              return (
                this.enterScope(Ve(i, !1) | qe),
                this.initFunction(e),
                this.options.ecmaVersion >= 8 && (e.async = !!i),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                (e.params = this.toAssignableList(t, !0)),
                this.parseFunctionBody(e, !0, !1, s),
                (this.yieldPos = r),
                (this.awaitPos = n),
                (this.awaitIdentPos = u),
                this.finishNode(e, "ArrowFunctionExpression")
              );
            }),
            (d.parseFunctionBody = function (e, t, i, s) {
              var r = t && this.type !== a.braceL,
                n = this.strict,
                u = !1;
              if (r) (e.body = this.parseMaybeAssign(s)), (e.expression = !0), this.checkParams(e, !1);
              else {
                var h = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
                (!n || h) &&
                  ((u = this.strictDirective(this.end)),
                  u && h && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
                var c = this.labels;
                (this.labels = []),
                  u && (this.strict = !0),
                  this.checkParams(e, !n && !u && !t && !i && this.isSimpleParamList(e.params)),
                  this.strict && e.id && this.checkLValSimple(e.id, Xe),
                  (e.body = this.parseBlock(!1, void 0, u && !n)),
                  (e.expression = !1),
                  this.adaptDirectivePrologue(e.body.body),
                  (this.labels = c);
              }
              this.exitScope();
            }),
            (d.isSimpleParamList = function (e) {
              for (var t = 0, i = e; t < i.length; t += 1) {
                var s = i[t];
                if (s.type !== "Identifier") return !1;
              }
              return !0;
            }),
            (d.checkParams = function (e, t) {
              for (var i = Object.create(null), s = 0, r = e.params; s < r.length; s += 1) {
                var n = r[s];
                this.checkLValInnerPattern(n, Le, t ? null : i);
              }
            }),
            (d.parseExprList = function (e, t, i, s) {
              for (var r = [], n = !0; !this.eat(e); ) {
                if (n) n = !1;
                else if ((this.expect(a.comma), t && this.afterTrailingComma(e))) break;
                var u = void 0;
                i && this.type === a.comma
                  ? (u = null)
                  : this.type === a.ellipsis
                  ? ((u = this.parseSpread(s)), s && this.type === a.comma && s.trailingComma < 0 && (s.trailingComma = this.start))
                  : (u = this.parseMaybeAssign(!1, s)),
                  r.push(u);
              }
              return r;
            }),
            (d.checkUnreserved = function (e) {
              var t = e.start,
                i = e.end,
                s = e.name;
              if (
                (this.inGenerator && s === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
                this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
                this.currentThisScope().inClassFieldInit &&
                  s === "arguments" &&
                  this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"),
                this.inClassStaticBlock &&
                  (s === "arguments" || s === "await") &&
                  this.raise(t, "Cannot use " + s + " in class static initialization block"),
                this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'"),
                !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1))
              ) {
                var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
                r.test(s) &&
                  (!this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
                  this.raiseRecoverable(t, "The keyword '" + s + "' is reserved"));
              }
            }),
            (d.parseIdent = function (e) {
              var t = this.parseIdentNode();
              return (
                this.next(!!e),
                this.finishNode(t, "Identifier"),
                e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)),
                t
              );
            }),
            (d.parseIdentNode = function () {
              var e = this.startNode();
              return (
                this.type === a.name
                  ? (e.name = this.value)
                  : this.type.keyword
                  ? ((e.name = this.type.keyword),
                    (e.name === "class" || e.name === "function") &&
                      (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) &&
                      this.context.pop(),
                    (this.type = a.name))
                  : this.unexpected(),
                e
              );
            }),
            (d.parsePrivateIdent = function () {
              var e = this.startNode();
              return (
                this.type === a.privateId ? (e.name = this.value) : this.unexpected(),
                this.next(),
                this.finishNode(e, "PrivateIdentifier"),
                this.options.checkPrivateFields &&
                  (this.privateNameStack.length === 0
                    ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class")
                    : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)),
                e
              );
            }),
            (d.parseYield = function (e) {
              this.yieldPos || (this.yieldPos = this.start);
              var t = this.startNode();
              return (
                this.next(),
                this.type === a.semi || this.canInsertSemicolon() || (this.type !== a.star && !this.type.startsExpr)
                  ? ((t.delegate = !1), (t.argument = null))
                  : ((t.delegate = this.eat(a.star)), (t.argument = this.parseMaybeAssign(e))),
                this.finishNode(t, "YieldExpression")
              );
            }),
            (d.parseAwait = function (e) {
              this.awaitPos || (this.awaitPos = this.start);
              var t = this.startNode();
              return this.next(), (t.argument = this.parseMaybeUnary(null, !0, !1, e)), this.finishNode(t, "AwaitExpression");
            });
          var ke = w.prototype;
          (ke.raise = function (e, t) {
            var i = Ie(this.input, e);
            t += " (" + i.line + ":" + i.column + ")";
            var s = new SyntaxError(t);
            throw ((s.pos = e), (s.loc = i), (s.raisedAt = this.pos), s);
          }),
            (ke.raiseRecoverable = ke.raise),
            (ke.curPosition = function () {
              if (this.options.locations) return new ae(this.curLine, this.pos - this.lineStart);
            });
          var Q = w.prototype,
            Ft = function (t) {
              (this.flags = t), (this.var = []), (this.lexical = []), (this.functions = []), (this.inClassFieldInit = !1);
            };
          (Q.enterScope = function (e) {
            this.scopeStack.push(new Ft(e));
          }),
            (Q.exitScope = function () {
              this.scopeStack.pop();
            }),
            (Q.treatFunctionsAsVarInScope = function (e) {
              return e.flags & re || (!this.inModule && e.flags & fe);
            }),
            (Q.declareName = function (e, t, i) {
              var s = !1;
              if (t === z) {
                var r = this.currentScope();
                (s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1),
                  r.lexical.push(e),
                  this.inModule && r.flags & fe && delete this.undefinedExports[e];
              } else if (t === ze) {
                var n = this.currentScope();
                n.lexical.push(e);
              } else if (t === We) {
                var u = this.currentScope();
                this.treatFunctionsAsVar ? (s = u.lexical.indexOf(e) > -1) : (s = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1),
                  u.functions.push(e);
              } else
                for (var h = this.scopeStack.length - 1; h >= 0; --h) {
                  var c = this.scopeStack[h];
                  if (
                    (c.lexical.indexOf(e) > -1 && !(c.flags & Ge && c.lexical[0] === e)) ||
                    (!this.treatFunctionsAsVarInScope(c) && c.functions.indexOf(e) > -1)
                  ) {
                    s = !0;
                    break;
                  }
                  if ((c.var.push(e), this.inModule && c.flags & fe && delete this.undefinedExports[e], c.flags & Te)) break;
                }
              s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
            }),
            (Q.checkLocalExport = function (e) {
              this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
                this.scopeStack[0].var.indexOf(e.name) === -1 &&
                (this.undefinedExports[e.name] = e);
            }),
            (Q.currentScope = function () {
              return this.scopeStack[this.scopeStack.length - 1];
            }),
            (Q.currentVarScope = function () {
              for (var e = this.scopeStack.length - 1; ; e--) {
                var t = this.scopeStack[e];
                if (t.flags & Te) return t;
              }
            }),
            (Q.currentThisScope = function () {
              for (var e = this.scopeStack.length - 1; ; e--) {
                var t = this.scopeStack[e];
                if (t.flags & Te && !(t.flags & qe)) return t;
              }
            });
          var me = function (t, i, s) {
              (this.type = ""),
                (this.start = i),
                (this.end = 0),
                t.options.locations && (this.loc = new le(t, s)),
                t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
                t.options.ranges && (this.range = [i, 0]);
            },
            ge = w.prototype;
          (ge.startNode = function () {
            return new me(this, this.start, this.startLoc);
          }),
            (ge.startNodeAt = function (e, t) {
              return new me(this, e, t);
            });
          function Qe(e, t, i, s) {
            return (e.type = t), (e.end = i), this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = i), e;
          }
          (ge.finishNode = function (e, t) {
            return Qe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
          }),
            (ge.finishNodeAt = function (e, t, i, s) {
              return Qe.call(this, e, t, i, s);
            }),
            (ge.copyNode = function (e) {
              var t = new me(this, e.start, this.startLoc);
              for (var i in e) t[i] = e[i];
              return t;
            });
          var Ye =
              "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
            Ze = Ye + " Extended_Pictographic",
            $e = Ze,
            et = $e + " EBase EComp EMod EPres ExtPict",
            tt = et,
            Dt = tt,
            Mt = { 9: Ye, 10: Ze, 11: $e, 12: et, 13: tt, 14: Dt },
            jt =
              "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji",
            Ut = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: jt },
            it =
              "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
            st =
              "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
            at = st + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
            rt = at + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
            nt = rt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
            ut = nt + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
            qt = ut + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz",
            Gt = { 9: st, 10: at, 11: rt, 12: nt, 13: ut, 14: qt },
            ot = {};
          function Ht(e) {
            var t = (ot[e] = {
              binary: J(Mt[e] + " " + it),
              binaryOfStrings: J(Ut[e]),
              nonBinary: { General_Category: J(it), Script: J(Gt[e]) },
            });
            (t.nonBinary.Script_Extensions = t.nonBinary.Script),
              (t.nonBinary.gc = t.nonBinary.General_Category),
              (t.nonBinary.sc = t.nonBinary.Script),
              (t.nonBinary.scx = t.nonBinary.Script_Extensions);
          }
          for (var Oe = 0, ht = [9, 10, 11, 12, 13, 14]; Oe < ht.length; Oe += 1) {
            var Wt = ht[Oe];
            Ht(Wt);
          }
          var p = w.prototype,
            H = function (t) {
              (this.parser = t),
                (this.validFlags =
                  "gim" +
                  (t.options.ecmaVersion >= 6 ? "uy" : "") +
                  (t.options.ecmaVersion >= 9 ? "s" : "") +
                  (t.options.ecmaVersion >= 13 ? "d" : "") +
                  (t.options.ecmaVersion >= 15 ? "v" : "")),
                (this.unicodeProperties = ot[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion]),
                (this.source = ""),
                (this.flags = ""),
                (this.start = 0),
                (this.switchU = !1),
                (this.switchV = !1),
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
          (H.prototype.reset = function (t, i, s) {
            var r = s.indexOf("v") !== -1,
              n = s.indexOf("u") !== -1;
            (this.start = t | 0),
              (this.source = i + ""),
              (this.flags = s),
              r && this.parser.options.ecmaVersion >= 15
                ? ((this.switchU = !0), (this.switchV = !0), (this.switchN = !0))
                : ((this.switchU = n && this.parser.options.ecmaVersion >= 6),
                  (this.switchV = !1),
                  (this.switchN = n && this.parser.options.ecmaVersion >= 9));
          }),
            (H.prototype.raise = function (t) {
              this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
            }),
            (H.prototype.at = function (t, i) {
              i === void 0 && (i = !1);
              var s = this.source,
                r = s.length;
              if (t >= r) return -1;
              var n = s.charCodeAt(t);
              if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r) return n;
              var u = s.charCodeAt(t + 1);
              return u >= 56320 && u <= 57343 ? (n << 10) + u - 56613888 : n;
            }),
            (H.prototype.nextIndex = function (t, i) {
              i === void 0 && (i = !1);
              var s = this.source,
                r = s.length;
              if (t >= r) return r;
              var n = s.charCodeAt(t),
                u;
              return !(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r || (u = s.charCodeAt(t + 1)) < 56320 || u > 57343
                ? t + 1
                : t + 2;
            }),
            (H.prototype.current = function (t) {
              return t === void 0 && (t = !1), this.at(this.pos, t);
            }),
            (H.prototype.lookahead = function (t) {
              return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
            }),
            (H.prototype.advance = function (t) {
              t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t));
            }),
            (H.prototype.eat = function (t, i) {
              return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
            }),
            (H.prototype.eatChars = function (t, i) {
              i === void 0 && (i = !1);
              for (var s = this.pos, r = 0, n = t; r < n.length; r += 1) {
                var u = n[r],
                  h = this.at(s, i);
                if (h === -1 || h !== u) return !1;
                s = this.nextIndex(s, i);
              }
              return (this.pos = s), !0;
            }),
            (p.validateRegExpFlags = function (e) {
              for (var t = e.validFlags, i = e.flags, s = !1, r = !1, n = 0; n < i.length; n++) {
                var u = i.charAt(n);
                t.indexOf(u) === -1 && this.raise(e.start, "Invalid regular expression flag"),
                  i.indexOf(u, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"),
                  u === "u" && (s = !0),
                  u === "v" && (r = !0);
              }
              this.options.ecmaVersion >= 15 && s && r && this.raise(e.start, "Invalid regular expression flag");
            }),
            (p.validateRegExpPattern = function (e) {
              this.regexp_pattern(e),
                !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && ((e.switchN = !0), this.regexp_pattern(e));
            }),
            (p.regexp_pattern = function (e) {
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
              for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
                var s = i[t];
                e.groupNames.indexOf(s) === -1 && e.raise("Invalid named capture referenced");
              }
            }),
            (p.regexp_disjunction = function (e) {
              for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
              this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
            }),
            (p.regexp_alternative = function (e) {
              for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
            }),
            (p.regexp_eatTerm = function (e) {
              return this.regexp_eatAssertion(e)
                ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0)
                : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
                ? (this.regexp_eatQuantifier(e), !0)
                : !1;
            }),
            (p.regexp_eatAssertion = function (e) {
              var t = e.pos;
              if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
              if (e.eat(92)) {
                if (e.eat(66) || e.eat(98)) return !0;
                e.pos = t;
              }
              if (e.eat(40) && e.eat(63)) {
                var i = !1;
                if ((this.options.ecmaVersion >= 9 && (i = e.eat(60)), e.eat(61) || e.eat(33)))
                  return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), (e.lastAssertionIsQuantifiable = !i), !0;
              }
              return (e.pos = t), !1;
            }),
            (p.regexp_eatQuantifier = function (e, t) {
              return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
            }),
            (p.regexp_eatQuantifierPrefix = function (e, t) {
              return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
            }),
            (p.regexp_eatBracedQuantifier = function (e, t) {
              var i = e.pos;
              if (e.eat(123)) {
                var s = 0,
                  r = -1;
                if (
                  this.regexp_eatDecimalDigits(e) &&
                  ((s = e.lastIntValue), e.eat(44) && this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue), e.eat(125))
                )
                  return r !== -1 && r < s && !t && e.raise("numbers out of order in {} quantifier"), !0;
                e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = i);
              }
              return !1;
            }),
            (p.regexp_eatAtom = function (e) {
              return (
                this.regexp_eatPatternCharacters(e) ||
                e.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(e) ||
                this.regexp_eatCharacterClass(e) ||
                this.regexp_eatUncapturingGroup(e) ||
                this.regexp_eatCapturingGroup(e)
              );
            }),
            (p.regexp_eatReverseSolidusAtomEscape = function (e) {
              var t = e.pos;
              if (e.eat(92)) {
                if (this.regexp_eatAtomEscape(e)) return !0;
                e.pos = t;
              }
              return !1;
            }),
            (p.regexp_eatUncapturingGroup = function (e) {
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
            (p.regexp_eatCapturingGroup = function (e) {
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
            (p.regexp_eatExtendedAtom = function (e) {
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
            (p.regexp_eatInvalidBracedQuantifier = function (e) {
              return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
            }),
            (p.regexp_eatSyntaxCharacter = function (e) {
              var t = e.current();
              return ct(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
            });
          function ct(e) {
            return e === 36 || (e >= 40 && e <= 43) || e === 46 || e === 63 || (e >= 91 && e <= 94) || (e >= 123 && e <= 125);
          }
          (p.regexp_eatPatternCharacters = function (e) {
            for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !ct(i); ) e.advance();
            return e.pos !== t;
          }),
            (p.regexp_eatExtendedPatternCharacter = function (e) {
              var t = e.current();
              return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124
                ? (e.advance(), !0)
                : !1;
            }),
            (p.regexp_groupSpecifier = function (e) {
              if (e.eat(63)) {
                if (this.regexp_eatGroupName(e)) {
                  e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"),
                    e.groupNames.push(e.lastStringValue);
                  return;
                }
                e.raise("Invalid group");
              }
            }),
            (p.regexp_eatGroupName = function (e) {
              if (((e.lastStringValue = ""), e.eat(60))) {
                if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
                e.raise("Invalid capture group name");
              }
              return !1;
            }),
            (p.regexp_eatRegExpIdentifierName = function (e) {
              if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
                for (e.lastStringValue += K(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
                  e.lastStringValue += K(e.lastIntValue);
                return !0;
              }
              return !1;
            }),
            (p.regexp_eatRegExpIdentifierStart = function (e) {
              var t = e.pos,
                i = this.options.ecmaVersion >= 11,
                s = e.current(i);
              return (
                e.advance(i),
                s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue),
                zt(s) ? ((e.lastIntValue = s), !0) : ((e.pos = t), !1)
              );
            });
          function zt(e) {
            return T(e, !0) || e === 36 || e === 95;
          }
          p.regexp_eatRegExpIdentifierPart = function (e) {
            var t = e.pos,
              i = this.options.ecmaVersion >= 11,
              s = e.current(i);
            return (
              e.advance(i),
              s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue),
              Xt(s) ? ((e.lastIntValue = s), !0) : ((e.pos = t), !1)
            );
          };
          function Xt(e) {
            return V(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
          }
          (p.regexp_eatAtomEscape = function (e) {
            return this.regexp_eatBackReference(e) ||
              this.regexp_eatCharacterClassEscape(e) ||
              this.regexp_eatCharacterEscape(e) ||
              (e.switchN && this.regexp_eatKGroupName(e))
              ? !0
              : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
          }),
            (p.regexp_eatBackReference = function (e) {
              var t = e.pos;
              if (this.regexp_eatDecimalEscape(e)) {
                var i = e.lastIntValue;
                if (e.switchU) return i > e.maxBackReference && (e.maxBackReference = i), !0;
                if (i <= e.numCapturingParens) return !0;
                e.pos = t;
              }
              return !1;
            }),
            (p.regexp_eatKGroupName = function (e) {
              if (e.eat(107)) {
                if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
                e.raise("Invalid named reference");
              }
              return !1;
            }),
            (p.regexp_eatCharacterEscape = function (e) {
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
            (p.regexp_eatCControlLetter = function (e) {
              var t = e.pos;
              if (e.eat(99)) {
                if (this.regexp_eatControlLetter(e)) return !0;
                e.pos = t;
              }
              return !1;
            }),
            (p.regexp_eatZero = function (e) {
              return e.current() === 48 && !Se(e.lookahead()) ? ((e.lastIntValue = 0), e.advance(), !0) : !1;
            }),
            (p.regexp_eatControlEscape = function (e) {
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
            (p.regexp_eatControlLetter = function (e) {
              var t = e.current();
              return pt(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
            });
          function pt(e) {
            return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
          }
          p.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
            t === void 0 && (t = !1);
            var i = e.pos,
              s = t || e.switchU;
            if (e.eat(117)) {
              if (this.regexp_eatFixedHexDigits(e, 4)) {
                var r = e.lastIntValue;
                if (s && r >= 55296 && r <= 56319) {
                  var n = e.pos;
                  if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                    var u = e.lastIntValue;
                    if (u >= 56320 && u <= 57343) return (e.lastIntValue = (r - 55296) * 1024 + (u - 56320) + 65536), !0;
                  }
                  (e.pos = n), (e.lastIntValue = r);
                }
                return !0;
              }
              if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Jt(e.lastIntValue)) return !0;
              s && e.raise("Invalid unicode escape"), (e.pos = i);
            }
            return !1;
          };
          function Jt(e) {
            return e >= 0 && e <= 1114111;
          }
          (p.regexp_eatIdentityEscape = function (e) {
            if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? ((e.lastIntValue = 47), !0) : !1;
            var t = e.current();
            return t !== 99 && (!e.switchN || t !== 107) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
          }),
            (p.regexp_eatDecimalEscape = function (e) {
              e.lastIntValue = 0;
              var t = e.current();
              if (t >= 49 && t <= 57) {
                do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
                while ((t = e.current()) >= 48 && t <= 57);
                return !0;
              }
              return !1;
            });
          var lt = 0,
            X = 1,
            M = 2;
          p.regexp_eatCharacterClassEscape = function (e) {
            var t = e.current();
            if (Kt(t)) return (e.lastIntValue = -1), e.advance(), X;
            var i = !1;
            if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
              (e.lastIntValue = -1), e.advance();
              var s;
              if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125))
                return i && s === M && e.raise("Invalid property name"), s;
              e.raise("Invalid property name");
            }
            return lt;
          };
          function Kt(e) {
            return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
          }
          (p.regexp_eatUnicodePropertyValueExpression = function (e) {
            var t = e.pos;
            if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
              var i = e.lastStringValue;
              if (this.regexp_eatUnicodePropertyValue(e)) {
                var s = e.lastStringValue;
                return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), X;
              }
            }
            if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
              var r = e.lastStringValue;
              return this.regexp_validateUnicodePropertyNameOrValue(e, r);
            }
            return lt;
          }),
            (p.regexp_validateUnicodePropertyNameAndValue = function (e, t, i) {
              pe(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"),
                e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
            }),
            (p.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
              if (e.unicodeProperties.binary.test(t)) return X;
              if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return M;
              e.raise("Invalid property name");
            }),
            (p.regexp_eatUnicodePropertyName = function (e) {
              var t = 0;
              for (e.lastStringValue = ""; ft((t = e.current())); ) (e.lastStringValue += K(t)), e.advance();
              return e.lastStringValue !== "";
            });
          function ft(e) {
            return pt(e) || e === 95;
          }
          p.regexp_eatUnicodePropertyValue = function (e) {
            var t = 0;
            for (e.lastStringValue = ""; Qt((t = e.current())); ) (e.lastStringValue += K(t)), e.advance();
            return e.lastStringValue !== "";
          };
          function Qt(e) {
            return ft(e) || Se(e);
          }
          (p.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
            return this.regexp_eatUnicodePropertyValue(e);
          }),
            (p.regexp_eatCharacterClass = function (e) {
              if (e.eat(91)) {
                var t = e.eat(94),
                  i = this.regexp_classContents(e);
                return (
                  e.eat(93) || e.raise("Unterminated character class"),
                  t && i === M && e.raise("Negated character class may contain strings"),
                  !0
                );
              }
              return !1;
            }),
            (p.regexp_classContents = function (e) {
              return e.current() === 93 ? X : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), X);
            }),
            (p.regexp_nonEmptyClassRanges = function (e) {
              for (; this.regexp_eatClassAtom(e); ) {
                var t = e.lastIntValue;
                if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                  var i = e.lastIntValue;
                  e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"),
                    t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
                }
              }
            }),
            (p.regexp_eatClassAtom = function (e) {
              var t = e.pos;
              if (e.eat(92)) {
                if (this.regexp_eatClassEscape(e)) return !0;
                if (e.switchU) {
                  var i = e.current();
                  (i === 99 || mt(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
                }
                e.pos = t;
              }
              var s = e.current();
              return s !== 93 ? ((e.lastIntValue = s), e.advance(), !0) : !1;
            }),
            (p.regexp_eatClassEscape = function (e) {
              var t = e.pos;
              if (e.eat(98)) return (e.lastIntValue = 8), !0;
              if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
              if (!e.switchU && e.eat(99)) {
                if (this.regexp_eatClassControlLetter(e)) return !0;
                e.pos = t;
              }
              return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
            }),
            (p.regexp_classSetExpression = function (e) {
              var t = X,
                i;
              if (!this.regexp_eatClassSetRange(e))
                if ((i = this.regexp_eatClassSetOperand(e))) {
                  i === M && (t = M);
                  for (var s = e.pos; e.eatChars([38, 38]); ) {
                    if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
                      i !== M && (t = X);
                      continue;
                    }
                    e.raise("Invalid character in character class");
                  }
                  if (s !== e.pos) return t;
                  for (; e.eatChars([45, 45]); ) this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
                  if (s !== e.pos) return t;
                } else e.raise("Invalid character in character class");
              for (;;)
                if (!this.regexp_eatClassSetRange(e)) {
                  if (((i = this.regexp_eatClassSetOperand(e)), !i)) return t;
                  i === M && (t = M);
                }
            }),
            (p.regexp_eatClassSetRange = function (e) {
              var t = e.pos;
              if (this.regexp_eatClassSetCharacter(e)) {
                var i = e.lastIntValue;
                if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
                  var s = e.lastIntValue;
                  return i !== -1 && s !== -1 && i > s && e.raise("Range out of order in character class"), !0;
                }
                e.pos = t;
              }
              return !1;
            }),
            (p.regexp_eatClassSetOperand = function (e) {
              return this.regexp_eatClassSetCharacter(e) ? X : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
            }),
            (p.regexp_eatNestedClass = function (e) {
              var t = e.pos;
              if (e.eat(91)) {
                var i = e.eat(94),
                  s = this.regexp_classContents(e);
                if (e.eat(93)) return i && s === M && e.raise("Negated character class may contain strings"), s;
                e.pos = t;
              }
              if (e.eat(92)) {
                var r = this.regexp_eatCharacterClassEscape(e);
                if (r) return r;
                e.pos = t;
              }
              return null;
            }),
            (p.regexp_eatClassStringDisjunction = function (e) {
              var t = e.pos;
              if (e.eatChars([92, 113])) {
                if (e.eat(123)) {
                  var i = this.regexp_classStringDisjunctionContents(e);
                  if (e.eat(125)) return i;
                } else e.raise("Invalid escape");
                e.pos = t;
              }
              return null;
            }),
            (p.regexp_classStringDisjunctionContents = function (e) {
              for (var t = this.regexp_classString(e); e.eat(124); ) this.regexp_classString(e) === M && (t = M);
              return t;
            }),
            (p.regexp_classString = function (e) {
              for (var t = 0; this.regexp_eatClassSetCharacter(e); ) t++;
              return t === 1 ? X : M;
            }),
            (p.regexp_eatClassSetCharacter = function (e) {
              var t = e.pos;
              if (e.eat(92))
                return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e)
                  ? !0
                  : e.eat(98)
                  ? ((e.lastIntValue = 8), !0)
                  : ((e.pos = t), !1);
              var i = e.current();
              return i < 0 || (i === e.lookahead() && Yt(i)) || Zt(i) ? !1 : (e.advance(), (e.lastIntValue = i), !0);
            });
          function Yt(e) {
            return (
              e === 33 ||
              (e >= 35 && e <= 38) ||
              (e >= 42 && e <= 44) ||
              e === 46 ||
              (e >= 58 && e <= 64) ||
              e === 94 ||
              e === 96 ||
              e === 126
            );
          }
          function Zt(e) {
            return e === 40 || e === 41 || e === 45 || e === 47 || (e >= 91 && e <= 93) || (e >= 123 && e <= 125);
          }
          p.regexp_eatClassSetReservedPunctuator = function (e) {
            var t = e.current();
            return $t(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
          };
          function $t(e) {
            return (
              e === 33 ||
              e === 35 ||
              e === 37 ||
              e === 38 ||
              e === 44 ||
              e === 45 ||
              (e >= 58 && e <= 62) ||
              e === 64 ||
              e === 96 ||
              e === 126
            );
          }
          (p.regexp_eatClassControlLetter = function (e) {
            var t = e.current();
            return Se(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
          }),
            (p.regexp_eatHexEscapeSequence = function (e) {
              var t = e.pos;
              if (e.eat(120)) {
                if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                e.switchU && e.raise("Invalid escape"), (e.pos = t);
              }
              return !1;
            }),
            (p.regexp_eatDecimalDigits = function (e) {
              var t = e.pos,
                i = 0;
              for (e.lastIntValue = 0; Se((i = e.current())); ) (e.lastIntValue = 10 * e.lastIntValue + (i - 48)), e.advance();
              return e.pos !== t;
            });
          function Se(e) {
            return e >= 48 && e <= 57;
          }
          p.regexp_eatHexDigits = function (e) {
            var t = e.pos,
              i = 0;
            for (e.lastIntValue = 0; dt((i = e.current())); ) (e.lastIntValue = 16 * e.lastIntValue + xt(i)), e.advance();
            return e.pos !== t;
          };
          function dt(e) {
            return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
          }
          function xt(e) {
            return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
          }
          (p.regexp_eatLegacyOctalEscapeSequence = function (e) {
            if (this.regexp_eatOctalDigit(e)) {
              var t = e.lastIntValue;
              if (this.regexp_eatOctalDigit(e)) {
                var i = e.lastIntValue;
                t <= 3 && this.regexp_eatOctalDigit(e) ? (e.lastIntValue = t * 64 + i * 8 + e.lastIntValue) : (e.lastIntValue = t * 8 + i);
              } else e.lastIntValue = t;
              return !0;
            }
            return !1;
          }),
            (p.regexp_eatOctalDigit = function (e) {
              var t = e.current();
              return mt(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1);
            });
          function mt(e) {
            return e >= 48 && e <= 55;
          }
          p.regexp_eatFixedHexDigits = function (e, t) {
            var i = e.pos;
            e.lastIntValue = 0;
            for (var s = 0; s < t; ++s) {
              var r = e.current();
              if (!dt(r)) return (e.pos = i), !1;
              (e.lastIntValue = 16 * e.lastIntValue + xt(r)), e.advance();
            }
            return !0;
          };
          var we = function (t) {
              (this.type = t.type),
                (this.value = t.value),
                (this.start = t.start),
                (this.end = t.end),
                t.options.locations && (this.loc = new le(t, t.startLoc, t.endLoc)),
                t.options.ranges && (this.range = [t.start, t.end]);
            },
            v = w.prototype;
          (v.next = function (e) {
            !e &&
              this.type.keyword &&
              this.containsEsc &&
              this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword),
              this.options.onToken && this.options.onToken(new we(this)),
              (this.lastTokEnd = this.end),
              (this.lastTokStart = this.start),
              (this.lastTokEndLoc = this.endLoc),
              (this.lastTokStartLoc = this.startLoc),
              this.nextToken();
          }),
            (v.getToken = function () {
              return this.next(), new we(this);
            }),
            typeof Symbol < "u" &&
              (v[Symbol.iterator] = function () {
                var e = this;
                return {
                  next: function () {
                    var t = e.getToken();
                    return { done: t.type === a.eof, value: t };
                  },
                };
              }),
            (v.nextToken = function () {
              var e = this.curContext();
              if (
                ((!e || !e.preserveSpace) && this.skipSpace(),
                (this.start = this.pos),
                this.options.locations && (this.startLoc = this.curPosition()),
                this.pos >= this.input.length)
              )
                return this.finishToken(a.eof);
              if (e.override) return e.override(this);
              this.readToken(this.fullCharCodeAtPos());
            }),
            (v.readToken = function (e) {
              return T(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
            }),
            (v.fullCharCodeAtPos = function () {
              var e = this.input.charCodeAt(this.pos);
              if (e <= 55295 || e >= 56320) return e;
              var t = this.input.charCodeAt(this.pos + 1);
              return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
            }),
            (v.skipBlockComment = function () {
              var e = this.options.onComment && this.curPosition(),
                t = this.pos,
                i = this.input.indexOf("*/", (this.pos += 2));
              if ((i === -1 && this.raise(this.pos - 2, "Unterminated comment"), (this.pos = i + 2), this.options.locations))
                for (var s = void 0, r = t; (s = Y(this.input, r, this.pos)) > -1; ) ++this.curLine, (r = this.lineStart = s);
              this.options.onComment && this.options.onComment(!0, this.input.slice(t + 2, i), t, this.pos, e, this.curPosition());
            }),
            (v.skipLineComment = function (e) {
              for (
                var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt((this.pos += e));
                this.pos < this.input.length && !L(s);

              )
                s = this.input.charCodeAt(++this.pos);
              this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
            }),
            (v.skipSpace = function () {
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
                    if ((e > 8 && e < 14) || (e >= 5760 && Z.test(String.fromCharCode(e)))) ++this.pos;
                    else break e;
                }
              }
            }),
            (v.finishToken = function (e, t) {
              (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
              var i = this.type;
              (this.type = e), (this.value = t), this.updateContext(i);
            }),
            (v.readToken_dot = function () {
              var e = this.input.charCodeAt(this.pos + 1);
              if (e >= 48 && e <= 57) return this.readNumber(!0);
              var t = this.input.charCodeAt(this.pos + 2);
              return this.options.ecmaVersion >= 6 && e === 46 && t === 46
                ? ((this.pos += 3), this.finishToken(a.ellipsis))
                : (++this.pos, this.finishToken(a.dot));
            }),
            (v.readToken_slash = function () {
              var e = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.slash, 1);
            }),
            (v.readToken_mult_modulo_exp = function (e) {
              var t = this.input.charCodeAt(this.pos + 1),
                i = 1,
                s = e === 42 ? a.star : a.modulo;
              return (
                this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, (s = a.starstar), (t = this.input.charCodeAt(this.pos + 2))),
                t === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(s, i)
              );
            }),
            (v.readToken_pipe_amp = function (e) {
              var t = this.input.charCodeAt(this.pos + 1);
              if (t === e) {
                if (this.options.ecmaVersion >= 12) {
                  var i = this.input.charCodeAt(this.pos + 2);
                  if (i === 61) return this.finishOp(a.assign, 3);
                }
                return this.finishOp(e === 124 ? a.logicalOR : a.logicalAND, 2);
              }
              return t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(e === 124 ? a.bitwiseOR : a.bitwiseAND, 1);
            }),
            (v.readToken_caret = function () {
              var e = this.input.charCodeAt(this.pos + 1);
              return e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.bitwiseXOR, 1);
            }),
            (v.readToken_plus_min = function (e) {
              var t = this.input.charCodeAt(this.pos + 1);
              return t === e
                ? t === 45 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 62 &&
                  (this.lastTokEnd === 0 || l.test(this.input.slice(this.lastTokEnd, this.pos)))
                  ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
                  : this.finishOp(a.incDec, 2)
                : t === 61
                ? this.finishOp(a.assign, 2)
                : this.finishOp(a.plusMin, 1);
            }),
            (v.readToken_lt_gt = function (e) {
              var t = this.input.charCodeAt(this.pos + 1),
                i = 1;
              return t === e
                ? ((i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
                  this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(a.bitShift, i))
                : t === 33 &&
                  e === 60 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 45 &&
                  this.input.charCodeAt(this.pos + 3) === 45
                ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                : (t === 61 && (i = 2), this.finishOp(a.relational, i));
            }),
            (v.readToken_eq_excl = function (e) {
              var t = this.input.charCodeAt(this.pos + 1);
              return t === 61
                ? this.finishOp(a.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
                : e === 61 && t === 62 && this.options.ecmaVersion >= 6
                ? ((this.pos += 2), this.finishToken(a.arrow))
                : this.finishOp(e === 61 ? a.eq : a.prefix, 1);
            }),
            (v.readToken_question = function () {
              var e = this.options.ecmaVersion;
              if (e >= 11) {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t === 46) {
                  var i = this.input.charCodeAt(this.pos + 2);
                  if (i < 48 || i > 57) return this.finishOp(a.questionDot, 2);
                }
                if (t === 63) {
                  if (e >= 12) {
                    var s = this.input.charCodeAt(this.pos + 2);
                    if (s === 61) return this.finishOp(a.assign, 3);
                  }
                  return this.finishOp(a.coalesce, 2);
                }
              }
              return this.finishOp(a.question, 1);
            }),
            (v.readToken_numberSign = function () {
              var e = this.options.ecmaVersion,
                t = 35;
              if (e >= 13 && (++this.pos, (t = this.fullCharCodeAtPos()), T(t, !0) || t === 92))
                return this.finishToken(a.privateId, this.readWord1());
              this.raise(this.pos, "Unexpected character '" + K(t) + "'");
            }),
            (v.getTokenFromCode = function (e) {
              switch (e) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(a.parenL);
                case 41:
                  return ++this.pos, this.finishToken(a.parenR);
                case 59:
                  return ++this.pos, this.finishToken(a.semi);
                case 44:
                  return ++this.pos, this.finishToken(a.comma);
                case 91:
                  return ++this.pos, this.finishToken(a.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(a.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(a.braceL);
                case 125:
                  return ++this.pos, this.finishToken(a.braceR);
                case 58:
                  return ++this.pos, this.finishToken(a.colon);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(a.backQuote);
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
                  return this.finishOp(a.prefix, 1);
                case 35:
                  return this.readToken_numberSign();
              }
              this.raise(this.pos, "Unexpected character '" + K(e) + "'");
            }),
            (v.finishOp = function (e, t) {
              var i = this.input.slice(this.pos, this.pos + t);
              return (this.pos += t), this.finishToken(e, i);
            }),
            (v.readRegexp = function () {
              for (var e, t, i = this.pos; ; ) {
                this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                var s = this.input.charAt(this.pos);
                if ((l.test(s) && this.raise(i, "Unterminated regular expression"), e)) e = !1;
                else {
                  if (s === "[") t = !0;
                  else if (s === "]" && t) t = !1;
                  else if (s === "/" && !t) break;
                  e = s === "\\";
                }
                ++this.pos;
              }
              var r = this.input.slice(i, this.pos);
              ++this.pos;
              var n = this.pos,
                u = this.readWord1();
              this.containsEsc && this.unexpected(n);
              var h = this.regexpState || (this.regexpState = new H(this));
              h.reset(i, r, u), this.validateRegExpFlags(h), this.validateRegExpPattern(h);
              var c = null;
              try {
                c = new RegExp(r, u);
              } catch {}
              return this.finishToken(a.regexp, { pattern: r, flags: u, value: c });
            }),
            (v.readInt = function (e, t, i) {
              for (
                var s = this.options.ecmaVersion >= 12 && t === void 0,
                  r = i && this.input.charCodeAt(this.pos) === 48,
                  n = this.pos,
                  u = 0,
                  h = 0,
                  c = 0,
                  x = t ?? 1 / 0;
                c < x;
                ++c, ++this.pos
              ) {
                var g = this.input.charCodeAt(this.pos),
                  P = void 0;
                if (s && g === 95) {
                  r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"),
                    h === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"),
                    c === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"),
                    (h = g);
                  continue;
                }
                if ((g >= 97 ? (P = g - 97 + 10) : g >= 65 ? (P = g - 65 + 10) : g >= 48 && g <= 57 ? (P = g - 48) : (P = 1 / 0), P >= e))
                  break;
                (h = g), (u = u * e + P);
              }
              return (
                s && h === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"),
                this.pos === n || (t != null && this.pos - n !== t) ? null : u
              );
            });
          function ei(e, t) {
            return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
          }
          function gt(e) {
            return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
          }
          (v.readRadixNumber = function (e) {
            var t = this.pos;
            this.pos += 2;
            var i = this.readInt(e);
            return (
              i == null && this.raise(this.start + 2, "Expected number in radix " + e),
              this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
                ? ((i = gt(this.input.slice(t, this.pos))), ++this.pos)
                : T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
              this.finishToken(a.num, i)
            );
          }),
            (v.readNumber = function (e) {
              var t = this.pos;
              !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
              var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
              i && this.strict && this.raise(t, "Invalid number");
              var s = this.input.charCodeAt(this.pos);
              if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
                var r = gt(this.input.slice(t, this.pos));
                return (
                  ++this.pos,
                  T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
                  this.finishToken(a.num, r)
                );
              }
              i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1),
                s === 46 && !i && (++this.pos, this.readInt(10), (s = this.input.charCodeAt(this.pos))),
                (s === 69 || s === 101) &&
                  !i &&
                  ((s = this.input.charCodeAt(++this.pos)),
                  (s === 43 || s === 45) && ++this.pos,
                  this.readInt(10) === null && this.raise(t, "Invalid number")),
                T(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
              var n = ei(this.input.slice(t, this.pos), i);
              return this.finishToken(a.num, n);
            }),
            (v.readCodePoint = function () {
              var e = this.input.charCodeAt(this.pos),
                t;
              if (e === 123) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var i = ++this.pos;
                (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
                  ++this.pos,
                  t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
              } else t = this.readHexChar(4);
              return t;
            }),
            (v.readString = function (e) {
              for (var t = "", i = ++this.pos; ; ) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                var s = this.input.charCodeAt(this.pos);
                if (s === e) break;
                s === 92
                  ? ((t += this.input.slice(i, this.pos)), (t += this.readEscapedChar(!1)), (i = this.pos))
                  : s === 8232 || s === 8233
                  ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"),
                    ++this.pos,
                    this.options.locations && (this.curLine++, (this.lineStart = this.pos)))
                  : (L(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
              }
              return (t += this.input.slice(i, this.pos++)), this.finishToken(a.string, t);
            });
          var vt = {};
          (v.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
              this.readTmplToken();
            } catch (e) {
              if (e === vt) this.readInvalidTemplateToken();
              else throw e;
            }
            this.inTemplateElement = !1;
          }),
            (v.invalidStringToken = function (e, t) {
              if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw vt;
              this.raise(e, t);
            }),
            (v.readTmplToken = function () {
              for (var e = "", t = this.pos; ; ) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                var i = this.input.charCodeAt(this.pos);
                if (i === 96 || (i === 36 && this.input.charCodeAt(this.pos + 1) === 123))
                  return this.pos === this.start && (this.type === a.template || this.type === a.invalidTemplate)
                    ? i === 36
                      ? ((this.pos += 2), this.finishToken(a.dollarBraceL))
                      : (++this.pos, this.finishToken(a.backQuote))
                    : ((e += this.input.slice(t, this.pos)), this.finishToken(a.template, e));
                if (i === 92) (e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos);
                else if (L(i)) {
                  switch (((e += this.input.slice(t, this.pos)), ++this.pos, i)) {
                    case 13:
                      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                    case 10:
                      e += `
`;
                      break;
                    default:
                      e += String.fromCharCode(i);
                      break;
                  }
                  this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (t = this.pos);
                } else ++this.pos;
              }
            }),
            (v.readInvalidTemplateToken = function () {
              for (; this.pos < this.input.length; this.pos++)
                switch (this.input[this.pos]) {
                  case "\\":
                    ++this.pos;
                    break;
                  case "$":
                    if (this.input[this.pos + 1] !== "{") break;
                  case "`":
                    return this.finishToken(a.invalidTemplate, this.input.slice(this.start, this.pos));
                }
              this.raise(this.start, "Unterminated template");
            }),
            (v.readEscapedChar = function (e) {
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
                  return K(this.readCodePoint());
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
                  if ((this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e)) {
                    var i = this.pos - 1;
                    this.invalidStringToken(i, "Invalid escape sequence in template string");
                  }
                default:
                  if (t >= 48 && t <= 55) {
                    var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                      r = parseInt(s, 8);
                    return (
                      r > 255 && ((s = s.slice(0, -1)), (r = parseInt(s, 8))),
                      (this.pos += s.length - 1),
                      (t = this.input.charCodeAt(this.pos)),
                      (s !== "0" || t === 56 || t === 57) &&
                        (this.strict || e) &&
                        this.invalidStringToken(
                          this.pos - 1 - s.length,
                          e ? "Octal literal in template string" : "Octal literal in strict mode"
                        ),
                      String.fromCharCode(r)
                    );
                  }
                  return L(t) ? "" : String.fromCharCode(t);
              }
            }),
            (v.readHexChar = function (e) {
              var t = this.pos,
                i = this.readInt(16, e);
              return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
            }),
            (v.readWord1 = function () {
              this.containsEsc = !1;
              for (var e = "", t = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
                var r = this.fullCharCodeAtPos();
                if (V(r, s)) this.pos += r <= 65535 ? 1 : 2;
                else if (r === 92) {
                  (this.containsEsc = !0), (e += this.input.slice(i, this.pos));
                  var n = this.pos;
                  this.input.charCodeAt(++this.pos) !== 117 &&
                    this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
                    ++this.pos;
                  var u = this.readCodePoint();
                  (t ? T : V)(u, s) || this.invalidStringToken(n, "Invalid Unicode escape"), (e += K(u)), (i = this.pos);
                } else break;
                t = !1;
              }
              return e + this.input.slice(i, this.pos);
            }),
            (v.readWord = function () {
              var e = this.readWord1(),
                t = a.name;
              return this.keywords.test(e) && (t = se[e]), this.finishToken(t, e);
            });
          var bt = "8.11.3";
          w.acorn = {
            Parser: w,
            version: bt,
            defaultOptions: be,
            Position: ae,
            SourceLocation: le,
            getLineInfo: Ie,
            Node: me,
            TokenType: m,
            tokTypes: a,
            keywordTypes: se,
            TokContext: D,
            tokContexts: k,
            isIdentifierChar: V,
            isIdentifierStart: T,
            Token: we,
            isNewLine: L,
            lineBreak: l,
            lineBreakG: y,
            nonASCIIwhitespace: Z,
          };
          function ti(e, t) {
            return w.parse(e, t);
          }
          function ii(e, t, i) {
            return w.parseExpressionAt(e, t, i);
          }
          function si(e, t) {
            return w.tokenizer(e, t);
          }
          (C.Node = me),
            (C.Parser = w),
            (C.Position = ae),
            (C.SourceLocation = le),
            (C.TokContext = D),
            (C.Token = we),
            (C.TokenType = m),
            (C.defaultOptions = be),
            (C.getLineInfo = Ie),
            (C.isIdentifierChar = V),
            (C.isIdentifierStart = T),
            (C.isNewLine = L),
            (C.keywordTypes = se),
            (C.lineBreak = l),
            (C.lineBreakG = y),
            (C.nonASCIIwhitespace = Z),
            (C.parse = ti),
            (C.parseExpressionAt = ii),
            (C.tokContexts = k),
            (C.tokTypes = a),
            (C.tokenizer = si),
            (C.version = bt);
        });
      })(Ae, Ae.exports)),
    Ae.exports
  );
}
(function (E) {
  const j = ci,
    C = /^[\da-fA-F]+$/,
    ee = /^\d+$/,
    te = new WeakMap();
  function ce(b) {
    b = b.Parser.acorn || b;
    let B = te.get(b);
    if (!B) {
      const q = b.tokTypes,
        U = b.TokContext,
        _ = b.TokenType,
        S = new U("<tag", !1),
        T = new U("</tag", !1),
        V = new U("<tag>...</tag>", !0, !0),
        m = { tc_oTag: S, tc_cTag: T, tc_expr: V },
        A = {
          jsxName: new _("jsxName"),
          jsxText: new _("jsxText", { beforeExpr: !0 }),
          jsxTagStart: new _("jsxTagStart", { startsExpr: !0 }),
          jsxTagEnd: new _("jsxTagEnd"),
        };
      (A.jsxTagStart.updateContext = function () {
        this.context.push(V), this.context.push(S), (this.exprAllowed = !1);
      }),
        (A.jsxTagEnd.updateContext = function (N) {
          let I = this.context.pop();
          (I === S && N === q.slash) || I === T
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === V))
            : (this.exprAllowed = !0);
        }),
        (B = { tokContexts: m, tokTypes: A }),
        te.set(b, B);
    }
    return B;
  }
  function W(b) {
    if (!b) return b;
    if (b.type === "JSXIdentifier") return b.name;
    if (b.type === "JSXNamespacedName") return b.namespace.name + ":" + b.name.name;
    if (b.type === "JSXMemberExpression") return W(b.object) + "." + W(b.property);
  }
  (E.exports = function (b) {
    return (
      (b = b || {}),
      function (B) {
        return ie({ allowNamespaces: b.allowNamespaces !== !1, allowNamespacedObjects: !!b.allowNamespacedObjects }, B);
      }
    );
  }),
    Object.defineProperty(E.exports, "tokTypes", {
      get: function () {
        return ce(Ct()).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function ie(b, B) {
    const q = B.acorn || Ct(),
      U = ce(q),
      _ = q.tokTypes,
      S = U.tokTypes,
      T = q.tokContexts,
      V = U.tokContexts.tc_oTag,
      m = U.tokContexts.tc_cTag,
      A = U.tokContexts.tc_expr,
      N = q.isNewLine,
      I = q.isIdentifierStart,
      se = q.isIdentifierChar;
    return class extends B {
      static get acornJsx() {
        return U;
      }
      jsx_readToken() {
        let o = "",
          a = this.pos;
        for (;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let l = this.input.charCodeAt(this.pos);
          switch (l) {
            case 60:
            case 123:
              return this.pos === this.start
                ? l === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(S.jsxTagStart))
                  : this.getTokenFromCode(l)
                : ((o += this.input.slice(a, this.pos)), this.finishToken(S.jsxText, o));
            case 38:
              (o += this.input.slice(a, this.pos)), (o += this.jsx_readEntity()), (a = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" +
                  this.input[this.pos] +
                  "`. Did you mean `" +
                  (l === 62 ? "&gt;" : "&rbrace;") +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?'
              );
            default:
              N(l) ? ((o += this.input.slice(a, this.pos)), (o += this.jsx_readNewLine(!0)), (a = this.pos)) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(o) {
        let a = this.input.charCodeAt(this.pos),
          l;
        return (
          ++this.pos,
          a === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (l = o
                ? `
`
                : `\r
`))
            : (l = String.fromCharCode(a)),
          this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
          l
        );
      }
      jsx_readString(o) {
        let a = "",
          l = ++this.pos;
        for (;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let y = this.input.charCodeAt(this.pos);
          if (y === o) break;
          y === 38
            ? ((a += this.input.slice(l, this.pos)), (a += this.jsx_readEntity()), (l = this.pos))
            : N(y)
            ? ((a += this.input.slice(l, this.pos)), (a += this.jsx_readNewLine(!1)), (l = this.pos))
            : ++this.pos;
        }
        return (a += this.input.slice(l, this.pos++)), this.finishToken(_.string, a);
      }
      jsx_readEntity() {
        let o = "",
          a = 0,
          l,
          y = this.input[this.pos];
        y !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let L = ++this.pos;
        for (; this.pos < this.input.length && a++ < 10; ) {
          if (((y = this.input[this.pos++]), y === ";")) {
            o[0] === "#"
              ? o[1] === "x"
                ? ((o = o.substr(2)), C.test(o) && (l = String.fromCharCode(parseInt(o, 16))))
                : ((o = o.substr(1)), ee.test(o) && (l = String.fromCharCode(parseInt(o, 10))))
              : (l = j[o]);
            break;
          }
          o += y;
        }
        return l || ((this.pos = L), "&");
      }
      jsx_readWord() {
        let o,
          a = this.pos;
        do o = this.input.charCodeAt(++this.pos);
        while (se(o) || o === 45);
        return this.finishToken(S.jsxName, this.input.slice(a, this.pos));
      }
      jsx_parseIdentifier() {
        let o = this.startNode();
        return (
          this.type === S.jsxName ? (o.name = this.value) : this.type.keyword ? (o.name = this.type.keyword) : this.unexpected(),
          this.next(),
          this.finishNode(o, "JSXIdentifier")
        );
      }
      jsx_parseNamespacedName() {
        let o = this.start,
          a = this.startLoc,
          l = this.jsx_parseIdentifier();
        if (!b.allowNamespaces || !this.eat(_.colon)) return l;
        var y = this.startNodeAt(o, a);
        return (y.namespace = l), (y.name = this.jsx_parseIdentifier()), this.finishNode(y, "JSXNamespacedName");
      }
      jsx_parseElementName() {
        if (this.type === S.jsxTagEnd) return "";
        let o = this.start,
          a = this.startLoc,
          l = this.jsx_parseNamespacedName();
        for (this.type === _.dot && l.type === "JSXNamespacedName" && !b.allowNamespacedObjects && this.unexpected(); this.eat(_.dot); ) {
          let y = this.startNodeAt(o, a);
          (y.object = l), (y.property = this.jsx_parseIdentifier()), (l = this.finishNode(y, "JSXMemberExpression"));
        }
        return l;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case _.braceL:
            let o = this.jsx_parseExpressionContainer();
            return (
              o.expression.type === "JSXEmptyExpression" &&
                this.raise(o.start, "JSX attributes must only be assigned a non-empty expression"),
              o
            );
          case S.jsxTagStart:
          case _.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      jsx_parseEmptyExpression() {
        let o = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(o, "JSXEmptyExpression", this.start, this.startLoc);
      }
      jsx_parseExpressionContainer() {
        let o = this.startNode();
        return (
          this.next(),
          (o.expression = this.type === _.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()),
          this.expect(_.braceR),
          this.finishNode(o, "JSXExpressionContainer")
        );
      }
      jsx_parseAttribute() {
        let o = this.startNode();
        return this.eat(_.braceL)
          ? (this.expect(_.ellipsis),
            (o.argument = this.parseMaybeAssign()),
            this.expect(_.braceR),
            this.finishNode(o, "JSXSpreadAttribute"))
          : ((o.name = this.jsx_parseNamespacedName()),
            (o.value = this.eat(_.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(o, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(o, a) {
        let l = this.startNodeAt(o, a);
        l.attributes = [];
        let y = this.jsx_parseElementName();
        for (y && (l.name = y); this.type !== _.slash && this.type !== S.jsxTagEnd; ) l.attributes.push(this.jsx_parseAttribute());
        return (
          (l.selfClosing = this.eat(_.slash)), this.expect(S.jsxTagEnd), this.finishNode(l, y ? "JSXOpeningElement" : "JSXOpeningFragment")
        );
      }
      jsx_parseClosingElementAt(o, a) {
        let l = this.startNodeAt(o, a),
          y = this.jsx_parseElementName();
        return y && (l.name = y), this.expect(S.jsxTagEnd), this.finishNode(l, y ? "JSXClosingElement" : "JSXClosingFragment");
      }
      jsx_parseElementAt(o, a) {
        let l = this.startNodeAt(o, a),
          y = [],
          L = this.jsx_parseOpeningElementAt(o, a),
          Y = null;
        if (!L.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case S.jsxTagStart:
                if (((o = this.start), (a = this.startLoc), this.next(), this.eat(_.slash))) {
                  Y = this.jsx_parseClosingElementAt(o, a);
                  break e;
                }
                y.push(this.jsx_parseElementAt(o, a));
                break;
              case S.jsxText:
                y.push(this.parseExprAtom());
                break;
              case _.braceL:
                y.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          W(Y.name) !== W(L.name) && this.raise(Y.start, "Expected corresponding JSX closing tag for <" + W(L.name) + ">");
        }
        let Z = L.name ? "Element" : "Fragment";
        return (
          (l["opening" + Z] = L),
          (l["closing" + Z] = Y),
          (l.children = y),
          this.type === _.relational &&
            this.value === "<" &&
            this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"),
          this.finishNode(l, "JSX" + Z)
        );
      }
      jsx_parseText() {
        let o = this.parseLiteral(this.value);
        return (o.type = "JSXText"), o;
      }
      jsx_parseElement() {
        let o = this.start,
          a = this.startLoc;
        return this.next(), this.jsx_parseElementAt(o, a);
      }
      parseExprAtom(o) {
        return this.type === S.jsxText
          ? this.jsx_parseText()
          : this.type === S.jsxTagStart
          ? this.jsx_parseElement()
          : super.parseExprAtom(o);
      }
      readToken(o) {
        let a = this.curContext();
        if (a === A) return this.jsx_readToken();
        if (a === V || a === m) {
          if (I(o)) return this.jsx_readWord();
          if (o == 62) return ++this.pos, this.finishToken(S.jsxTagEnd);
          if ((o === 34 || o === 39) && a == V) return this.jsx_readString(o);
        }
        return o === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(S.jsxTagStart))
          : super.readToken(o);
      }
      updateContext(o) {
        if (this.type == _.braceL) {
          var a = this.curContext();
          a == V ? this.context.push(T.b_expr) : a == A ? this.context.push(T.b_tmpl) : super.updateContext(o), (this.exprAllowed = !0);
        } else if (this.type === _.slash && o === S.jsxTagStart) (this.context.length -= 2), this.context.push(m), (this.exprAllowed = !1);
        else return super.updateContext(o);
      }
    };
  }
})(Et);
var pi = Et.exports;
const di = _t(pi);
export { fi as P, di as a, Ct as r };
