import {
  z as Ae,
  y as Be,
  U as Ce,
  L as Fe,
  a as I,
  v as Ie,
  K,
  M as Le,
  w as Me,
  J as Ne,
  O as Oe,
  j as Pe,
  k as Q,
  Q as Re,
  x as Se,
  l as Te,
  I as X,
  q as ee,
  m as j,
  o as ke,
  B as ne,
  D as oe,
  H as te,
  T as w,
  b as we,
  s as xe,
  r as ye,
  N as z,
} from "./apis-d6201c92.js";
import { R as e, r as u } from "./index-c6dae603.js";
var se = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", {
      fillRule: "evenodd",
      d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z",
    })
  );
};
se.displayName = "ChevronLeftIcon";
var ie = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", {
      fillRule: "evenodd",
      d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z",
    })
  );
};
ie.displayName = "ChevronRightIcon";
var _e = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", { d: "M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" }),
    e.createElement("path", { d: "M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" }),
    e.createElement("path", { d: "M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" })
  );
};
_e.displayName = "MenuHorizontalIcon";
var ce = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", {
      fillRule: "evenodd",
      d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    })
  );
};
ce.displayName = "SearchIcon";
const ue = u.createContext(!1);
function Xe({ children: t, filterActions: n }) {
  return e.createElement(ue.Provider, { value: n }, t);
}
var B = {
    Item: "Polaris-ActionList__Item",
    default: "Polaris-ActionList--default",
    active: "Polaris-ActionList--active",
    destructive: "Polaris-ActionList--destructive",
    disabled: "Polaris-ActionList--disabled",
    Prefix: "Polaris-ActionList__Prefix",
    Suffix: "Polaris-ActionList__Suffix",
    indented: "Polaris-ActionList--indented",
    menu: "Polaris-ActionList--menu",
    Text: "Polaris-ActionList__Text",
  },
  ae = { TooltipContainer: "Polaris-Tooltip__TooltipContainer", HasUnderline: "Polaris-Tooltip__HasUnderline" };
function He() {
  const t = u.useContext(Pe);
  if (!t)
    throw new Error(
      "No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions."
    );
  return t;
}
var L = {
  TooltipOverlay: "Polaris-Tooltip-TooltipOverlay",
  Tail: "Polaris-Tooltip-TooltipOverlay__Tail",
  positionedAbove: "Polaris-Tooltip-TooltipOverlay--positionedAbove",
  measuring: "Polaris-Tooltip-TooltipOverlay--measuring",
  measured: "Polaris-Tooltip-TooltipOverlay--measured",
  instant: "Polaris-Tooltip-TooltipOverlay--instant",
  Content: "Polaris-Tooltip-TooltipOverlay__Content",
  default: "Polaris-Tooltip-TooltipOverlay--default",
  wide: "Polaris-Tooltip-TooltipOverlay--wide",
};
const Ue = e.createElement(
    e.Fragment,
    null,
    e.createElement("path", {
      d: "M18.829 8.171 11.862.921A3 3 0 0 0 7.619.838L0 8.171h1.442l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557h1.387Z",
      fill: "var(--p-color-tooltip-tail-up-border-experimental)",
    }),
    e.createElement("path", { d: "M17.442 10.171h-16v-2l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557v2Z", fill: "var(--p-color-bg-surface)" })
  ),
  $e = e.createElement(
    e.Fragment,
    null,
    e.createElement("path", {
      d: "m0 2 6.967 7.25a3 3 0 0 0 4.243.083L18.829 2h-1.442l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2H0Z",
      fill: "var(--p-color-tooltip-tail-down-border-experimental)",
    }),
    e.createElement("path", { d: "M1.387 0h16v2l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2V0Z", fill: "var(--p-color-bg-surface)" })
  );
function Ze({
  active: t,
  activator: n,
  preferredPosition: l = "above",
  preventInteraction: s,
  id: m,
  children: E,
  accessibilityLabel: h,
  width: r,
  padding: o,
  borderRadius: v,
  zIndexOverride: p,
  instant: f,
}) {
  const i = Q();
  return t
    ? e.createElement(Te, { active: t, activator: n, preferredPosition: l, preventInteraction: s, render: b, zIndexOverride: p })
    : null;
  function b(c) {
    const { measuring: P, desiredHeight: M, positioning: y, chevronOffset: S } = c,
      T = j(L.TooltipOverlay, P && L.measuring, !P && L.measured, f && L.instant, y === "above" && L.positionedAbove),
      C = j(L.Content, r && L[r]),
      k = P ? void 0 : { minHeight: M },
      a = {
        "--pc-tooltip-chevron-x-pos": `${S}px`,
        "--pc-tooltip-border-radius": v ? `var(--p-border-radius-${v})` : void 0,
        "--pc-tooltip-padding": o && o === "default" ? "var(--p-space-100) var(--p-space-200)" : `var(--p-space-${o})`,
      };
    return e.createElement(
      "div",
      Object.assign({ style: a, className: T }, ke.props),
      e.createElement("svg", { className: L.Tail, width: "19", height: "11", fill: "none" }, y === "above" ? $e : Ue),
      e.createElement(
        "div",
        {
          id: m,
          role: "tooltip",
          className: C,
          style: { ...k, ...a },
          "aria-label": h ? i.translate("Polaris.TooltipOverlay.accessibilityLabel", { label: h }) : void 0,
        },
        E
      )
    );
  }
}
const je = 150;
function J({
  children: t,
  content: n,
  dismissOnMouseOut: l,
  active: s,
  hoverDelay: m,
  preferredPosition: E = "above",
  activatorWrapper: h = "span",
  accessibilityLabel: r,
  width: o = "default",
  padding: v = "default",
  borderRadius: p,
  zIndexOverride: f,
  hasUnderline: i,
  persistOnClick: g,
  onOpen: b,
  onClose: c,
}) {
  const P = p || "200",
    M = h,
    { value: y, setTrue: S, setFalse: T } = ee(!!s),
    { value: C, toggle: k } = ee(!!s && !!g),
    [a, d] = u.useState(null),
    { presenceList: A, addPresence: O, removePresence: H } = He(),
    N = u.useId(),
    x = u.useRef(null),
    Z = u.useRef(!1),
    [me, Y] = u.useState(!s),
    U = u.useRef(null),
    V = u.useRef(null),
    q = u.useCallback(() => {
      s !== !1 && S();
    }, [s, S]);
  u.useEffect(() => {
    const _ = (x.current ? ye(x.current) : null) || x.current;
    _ && ((_.tabIndex = 0), _.setAttribute("aria-describedby", N), _.setAttribute("data-polaris-tooltip-activator", "true"));
  }, [N, t]),
    u.useEffect(
      () => () => {
        U.current && clearTimeout(U.current), V.current && clearTimeout(V.current);
      },
      []
    );
  const G = u.useCallback(() => {
      Y(!A.tooltip && !y), b == null || b(), O("tooltip");
    }, [O, A.tooltip, b, y]),
    F = u.useCallback(() => {
      c == null || c(),
        Y(!1),
        (V.current = setTimeout(() => {
          H("tooltip");
        }, je));
    }, [H, c]),
    pe = u.useCallback(
      (R) => {
        R.key === "Escape" && (F == null || F(), T(), g && k());
      },
      [T, F, g, k]
    );
  u.useEffect(() => {
    s === !1 && y && (F(), T());
  }, [s, y, F, T]);
  const fe = a
      ? e.createElement(
          xe,
          { idPrefix: "tooltip" },
          e.createElement(
            Ze,
            {
              id: N,
              preferredPosition: E,
              activator: a,
              active: y,
              accessibilityLabel: r,
              onClose: ze,
              preventInteraction: l,
              width: o,
              padding: v,
              borderRadius: P,
              zIndexOverride: f,
              instant: !me,
            },
            e.createElement(w, { as: "span", variant: "bodyMd" }, n)
          )
        )
      : null,
    ge = j(h === "div" && ae.TooltipContainer, i && ae.HasUnderline);
  return e.createElement(
    M,
    {
      onFocus: () => {
        G(), q();
      },
      onBlur: () => {
        F(), T(), g && k();
      },
      onMouseLeave: be,
      onMouseOver: he,
      onMouseDown: g ? k : void 0,
      ref: Ee,
      onKeyUp: pe,
      className: ge,
    },
    t,
    fe
  );
  function Ee(R) {
    const _ = x;
    if (R == null) {
      (_.current = null), d(null);
      return;
    }
    R.firstElementChild instanceof HTMLElement && d(R.firstElementChild), (_.current = R);
  }
  function ve() {
    (Z.current = !0),
      m && !A.tooltip
        ? (U.current = setTimeout(() => {
            G(), q();
          }, m))
        : (G(), q());
  }
  function be() {
    U.current && (clearTimeout(U.current), (U.current = null)), (Z.current = !1), F(), C || T();
  }
  function he() {
    !Z.current && ve();
  }
}
function ze() {}
function de({
  id: t,
  badge: n,
  content: l,
  accessibilityLabel: s,
  helpText: m,
  url: E,
  onAction: h,
  onMouseEnter: r,
  icon: o,
  image: v,
  prefix: p,
  suffix: f,
  disabled: i,
  external: g,
  destructive: b,
  ellipsis: c,
  truncate: P,
  active: M,
  role: y,
  variant: S = "default",
}) {
  const T = j(
    B.Item,
    i && B.disabled,
    b && B.destructive,
    M && B.active,
    S === "default" && B.default,
    S === "indented" && B.indented,
    S === "menu" && B.menu
  );
  let C = null;
  p
    ? (C = e.createElement("span", { className: B.Prefix }, p))
    : o
    ? (C = e.createElement("span", { className: B.Prefix }, e.createElement(oe, { source: o })))
    : v && (C = e.createElement("span", { role: "presentation", className: B.Prefix, style: { backgroundImage: `url(${v}` } }));
  let k = l || "";
  P && l ? (k = e.createElement(We, null, l)) : c && (k = `${l}…`);
  const a = m
      ? e.createElement(
          e.Fragment,
          null,
          e.createElement(I, null, k),
          e.createElement(w, { as: "span", variant: "bodySm", tone: M || i ? void 0 : "subdued" }, m)
        )
      : e.createElement(w, { as: "span", variant: "bodyMd", fontWeight: M ? "semibold" : "regular" }, k),
    d = n && e.createElement("span", { className: B.Suffix }, e.createElement(Ie, { tone: n.tone }, n.content)),
    A = f && e.createElement(I, null, e.createElement("span", { className: B.Suffix }, f)),
    O = e.createElement(
      "span",
      { className: B.Text },
      e.createElement(w, { as: "span", variant: "bodyMd", fontWeight: M ? "semibold" : "regular" }, a)
    ),
    H = e.createElement(X, { blockAlign: "center", gap: "150", wrap: !1 }, C, O, d, A),
    N = e.createElement(I, { width: "100%" }, H),
    x = M ? e.createElement(Me.ScrollTo, null) : null,
    Z = E
      ? e.createElement(Ce, { id: t, url: i ? null : E, className: T, external: g, "aria-label": s, onClick: i ? null : h, role: y }, N)
      : e.createElement(
          "button",
          { id: t, type: "button", className: T, disabled: i, "aria-label": s, onClick: h, onMouseUp: Ae, role: y, onMouseEnter: r },
          N
        );
  return e.createElement(e.Fragment, null, x, Z);
}
const We = ({ children: t }) => {
  const n = Se(),
    l = u.useRef(null),
    [s, m] = u.useState(!1);
  return (
    Be(() => {
      l.current && m(l.current.scrollWidth > l.current.offsetWidth);
    }, [t]),
    s
      ? e.createElement(
          J,
          {
            zIndexOverride: Number(n.zIndex["z-index-11"]),
            preferredPosition: "above",
            hoverDelay: 1e3,
            content: t,
            dismissOnMouseOut: !0,
          },
          e.createElement(w, { as: "span", truncate: !0 }, t)
        )
      : e.createElement(w, { as: "span", truncate: !0 }, e.createElement(I, { width: "100%", ref: l }, t))
  );
};
function De({ section: t, hasMultipleSections: n, isFirst: l, actionRole: s, onActionAnyItem: m }) {
  const E = (p) => () => {
      p && p(), m && m();
    },
    h = t.items.map(({ content: p, helpText: f, onAction: i, ...g }, b) => {
      const c = e.createElement(de, Object.assign({ content: p, helpText: f, role: s, onAction: E(i) }, g));
      return e.createElement(
        I,
        { as: "li", key: `${p}-${b}`, role: s === "menuitem" ? "presentation" : void 0 },
        e.createElement(X, { wrap: !1 }, c)
      );
    });
  let r = null;
  t.title &&
    (r =
      typeof t.title == "string"
        ? e.createElement(
            I,
            { paddingBlockStart: "300", paddingBlockEnd: "100", paddingInlineStart: "300", paddingInlineEnd: "300" },
            e.createElement(w, { as: "p", variant: "headingSm" }, t.title)
          )
        : e.createElement(I, { padding: "200", paddingInlineEnd: "150" }, t.title));
  let o;
  switch (s) {
    case "option":
      o = "presentation";
      break;
    case "menuitem":
      o = n ? "presentation" : "menu";
      break;
    default:
      o = void 0;
      break;
  }
  const v = e.createElement(
    e.Fragment,
    null,
    r,
    e.createElement(
      I,
      Object.assign({ as: "div", padding: "150" }, n && { paddingBlockStart: "0" }, { tabIndex: n ? void 0 : -1 }),
      e.createElement(we, Object.assign({ gap: "050", as: "ul" }, o && { role: o }), h)
    )
  );
  return n
    ? e.createElement(
        I,
        Object.assign(
          { as: "li", role: "presentation", borderColor: "border-secondary" },
          !l && { borderBlockStartWidth: "025" },
          !t.title && { paddingBlockStart: "150" }
        ),
        v
      )
    : v;
}
const Ke = 8;
function Ve({ items: t, sections: n = [], actionRole: l, allowFiltering: s, onActionAnyItem: m }) {
  const E = Q(),
    h = u.useContext(ue);
  let r = [];
  const o = u.useRef(null),
    [v, p] = u.useState("");
  t ? (r = [{ items: t }, ...n]) : n && (r = n);
  const f = r == null ? void 0 : r.some((a) => a.items.some((d) => typeof d.content == "string")),
    i = r.length > 1,
    g = i && l === "menuitem" ? "menu" : void 0,
    b = i && l === "menuitem" ? -1 : void 0,
    c =
      r == null
        ? void 0
        : r.map((a) => ({
            ...a,
            items: a.items.filter(({ content: d }) =>
              typeof d == "string" ? (d == null ? void 0 : d.toLowerCase().includes(v.toLowerCase())) : d
            ),
          })),
    P = c.map((a, d) =>
      a.items.length > 0
        ? e.createElement(De, {
            key: typeof a.title == "string" ? a.title : d,
            section: a,
            hasMultipleSections: i,
            actionRole: l,
            onActionAnyItem: m,
            isFirst: d === 0,
          })
        : null
    ),
    M = (a) => {
      a.preventDefault(), o.current && a.target && o.current.contains(a.target) && Fe(o.current, a.target);
    },
    y = (a) => {
      a.preventDefault(), o.current && a.target && o.current.contains(a.target) && Le(o.current, a.target);
    },
    S =
      l === "menuitem"
        ? e.createElement(
            e.Fragment,
            null,
            e.createElement(K, { keyEvent: "keydown", keyCode: te.DownArrow, handler: y }),
            e.createElement(K, { keyEvent: "keydown", keyCode: te.UpArrow, handler: M })
          )
        : null,
    T = u.useMemo(() => (c == null ? void 0 : c.reduce((d, A) => d + A.items.length, 0)) || 0, [c]),
    k = ((r == null ? void 0 : r.reduce((a, d) => a + d.items.length, 0)) || 0) >= Ke;
  return e.createElement(
    e.Fragment,
    null,
    (s || h) &&
      k &&
      f &&
      e.createElement(
        I,
        { padding: "200", paddingBlockEnd: T > 0 ? "0" : "200" },
        e.createElement(Ne, {
          clearButton: !0,
          labelHidden: !0,
          label: E.translate("Polaris.ActionList.SearchField.placeholder"),
          placeholder: E.translate("Polaris.ActionList.SearchField.placeholder"),
          autoComplete: "off",
          value: v,
          onChange: (a) => p(a),
          prefix: e.createElement(oe, { source: ce }),
          onClearButtonClick: () => p(""),
        })
      ),
    e.createElement(I, { as: i ? "ul" : "div", ref: o, role: g, tabIndex: b }, S, P)
  );
}
Ve.Item = de;
var qe = { Bleed: "Polaris-Bleed" };
const Ye = ({
  marginInline: t,
  marginBlock: n,
  marginBlockStart: l,
  marginBlockEnd: s,
  marginInlineStart: m,
  marginInlineEnd: E,
  children: h,
}) => {
  const r = (g) => {
      const b = ["marginInlineStart", "marginInlineEnd"],
        c = ["marginBlockStart", "marginBlockEnd"],
        P = { marginBlockStart: l, marginBlockEnd: s, marginInlineStart: m, marginInlineEnd: E, marginInline: t, marginBlock: n };
      if (P[g]) return P[g];
      if (b.includes(g) && t) return P.marginInline;
      if (c.includes(g) && n) return P.marginBlock;
    },
    o = r("marginBlockStart"),
    v = r("marginBlockEnd"),
    p = r("marginInlineStart"),
    f = r("marginInlineEnd"),
    i = {
      ...z("bleed", "margin-block-start", "space", o),
      ...z("bleed", "margin-block-end", "space", v),
      ...z("bleed", "margin-inline-start", "space", p),
      ...z("bleed", "margin-inline-end", "space", f),
    };
  return e.createElement("div", { className: qe.Bleed, style: Oe(i) }, h);
};
var $;
(function (t) {
  (t.Input = "INPUT"), (t.Textarea = "TEXTAREA"), (t.Select = "SELECT"), (t.ContentEditable = "contenteditable");
})($ || ($ = {}));
function Ge() {
  if (document == null || document.activeElement == null) return !1;
  const { tagName: t } = document.activeElement;
  return t === $.Input || t === $.Textarea || t === $.Select || document.activeElement.hasAttribute($.ContentEditable);
}
var W = {
  Pagination: "Polaris-Pagination",
  table: "Polaris-Pagination--table",
  TablePaginationActions: "Polaris-Pagination__TablePaginationActions",
};
function et({
  hasNext: t,
  hasPrevious: n,
  nextURL: l,
  previousURL: s,
  onNext: m,
  onPrevious: E,
  nextTooltip: h,
  previousTooltip: r,
  nextKeys: o,
  previousKeys: v,
  accessibilityLabel: p,
  accessibilityLabels: f,
  label: i,
  type: g = "page",
}) {
  const b = Q(),
    c = u.createRef(),
    P = p || b.translate("Polaris.Pagination.pagination"),
    M = (f == null ? void 0 : f.previous) || b.translate("Polaris.Pagination.previous"),
    y = (f == null ? void 0 : f.next) || b.translate("Polaris.Pagination.next"),
    S = e.createElement(ne, { icon: se, accessibilityLabel: M, url: s, onClick: E, disabled: !n, id: "previousURL" }),
    T = r && n ? e.createElement(J, { activatorWrapper: "span", content: r, preferredPosition: "below" }, S) : S,
    C = e.createElement(ne, { icon: ie, accessibilityLabel: y, url: l, onClick: m, disabled: !t, id: "nextURL" }),
    k = h && t ? e.createElement(J, { activatorWrapper: "span", content: h, preferredPosition: "below" }, C) : C,
    a = E || le,
    d = v && (s || E) && n && v.map((x) => e.createElement(K, { key: x, keyCode: x, handler: D(s ? re("previousURL", c) : a) })),
    A = m || le,
    O = o && (l || m) && t && o.map((x) => e.createElement(K, { key: x, keyCode: x, handler: D(l ? re("nextURL", c) : A) }));
  if (g === "table") {
    const x = i
      ? e.createElement(
          I,
          { padding: "300", paddingBlockStart: "0", paddingBlockEnd: "0" },
          e.createElement(w, { as: "span", variant: "bodySm", fontWeight: "medium" }, i)
        )
      : null;
    return e.createElement(
      "nav",
      { "aria-label": P, ref: c, className: j(W.Pagination, W.table) },
      d,
      O,
      e.createElement(
        I,
        {
          background: "bg-surface-secondary",
          paddingBlockStart: "150",
          paddingBlockEnd: "150",
          paddingInlineStart: "300",
          paddingInlineEnd: "200",
        },
        e.createElement(
          X,
          { align: "center", blockAlign: "center" },
          e.createElement(
            "div",
            { className: W.TablePaginationActions, "data-buttongroup-variant": "segmented" },
            e.createElement("div", null, T),
            x,
            e.createElement("div", null, k)
          )
        )
      )
    );
  }
  const H = t && n ? e.createElement("span", null, i) : e.createElement(w, { tone: "subdued", as: "span" }, i),
    N = i
      ? e.createElement(
          I,
          { padding: "300", paddingBlockStart: "0", paddingBlockEnd: "0" },
          e.createElement("div", { "aria-live": "polite" }, H)
        )
      : null;
  return e.createElement(
    "nav",
    { "aria-label": P, ref: c, className: W.Pagination },
    d,
    O,
    e.createElement(Re, { variant: "segmented" }, T, N, k)
  );
}
function re(t, n) {
  return () => {
    if (n.current == null) return;
    const l = n.current.querySelector(`#${t}`);
    l && l.click();
  };
}
function D(t) {
  return () => {
    Ge() || t();
  };
}
function le() {}
export { Ve as A, Ye as B, Xe as F, et as P, _e as S, J as T, se as a, ie as b, ce as c };
