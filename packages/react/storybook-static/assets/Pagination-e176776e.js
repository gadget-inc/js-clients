import {
  k as Ae,
  j as Be,
  U as Ce,
  w as Fe,
  e as Ie,
  I as J,
  K,
  p as Le,
  h as Me,
  o as Ne,
  s as Oe,
  E as Pe,
  r as Re,
  i as Se,
  P as Te,
  u as Y,
  d as ee,
  c as j,
  l as ke,
  B as ne,
  m as oe,
  n as te,
  T as w,
  b as we,
  a as x,
  g as xe,
  f as ye,
  q as z,
} from "./dateTimeUtils-a817f99d.js";
import { R as e, r as u } from "./index-7c191284.js";
var ie = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", {
      fillRule: "evenodd",
      d: "M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z",
    })
  );
};
ie.displayName = "ChevronLeftIcon";
var se = function (n) {
  return e.createElement(
    "svg",
    Object.assign({ viewBox: "0 0 20 20" }, n),
    e.createElement("path", {
      fillRule: "evenodd",
      d: "M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z",
    })
  );
};
se.displayName = "ChevronRightIcon";
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
function Je({ children: t, filterActions: n }) {
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
  preventInteraction: i,
  id: m,
  children: E,
  accessibilityLabel: h,
  width: r,
  padding: o,
  borderRadius: v,
  zIndexOverride: p,
  instant: f,
}) {
  const s = Y();
  return t
    ? e.createElement(Te, { active: t, activator: n, preferredPosition: l, preventInteraction: i, render: b, zIndexOverride: p })
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
          "aria-label": h ? s.translate("Polaris.TooltipOverlay.accessibilityLabel", { label: h }) : void 0,
        },
        E
      )
    );
  }
}
const je = 150;
function X({
  children: t,
  content: n,
  dismissOnMouseOut: l,
  active: i,
  hoverDelay: m,
  preferredPosition: E = "above",
  activatorWrapper: h = "span",
  accessibilityLabel: r,
  width: o = "default",
  padding: v = "default",
  borderRadius: p,
  zIndexOverride: f,
  hasUnderline: s,
  persistOnClick: g,
  onOpen: b,
  onClose: c,
}) {
  const P = p || "200",
    M = h,
    { value: y, setTrue: S, setFalse: T } = ee(!!i),
    { value: C, toggle: k } = ee(!!i && !!g),
    [a, d] = u.useState(null),
    { presenceList: A, addPresence: O, removePresence: H } = He(),
    N = u.useId(),
    I = u.useRef(null),
    Z = u.useRef(!1),
    [me, Q] = u.useState(!i),
    U = u.useRef(null),
    V = u.useRef(null),
    q = u.useCallback(() => {
      i !== !1 && S();
    }, [i, S]);
  u.useEffect(() => {
    const _ = (I.current ? ye(I.current) : null) || I.current;
    _ && ((_.tabIndex = 0), _.setAttribute("aria-describedby", N), _.setAttribute("data-polaris-tooltip-activator", "true"));
  }, [N, t]),
    u.useEffect(
      () => () => {
        U.current && clearTimeout(U.current), V.current && clearTimeout(V.current);
      },
      []
    );
  const G = u.useCallback(() => {
      Q(!A.tooltip && !y), b == null || b(), O("tooltip");
    }, [O, A.tooltip, b, y]),
    F = u.useCallback(() => {
      c == null || c(),
        Q(!1),
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
    i === !1 && y && (F(), T());
  }, [i, y, F, T]);
  const fe = a
      ? e.createElement(
          Ie,
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
    ge = j(h === "div" && ae.TooltipContainer, s && ae.HasUnderline);
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
    const _ = I;
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
  accessibilityLabel: i,
  helpText: m,
  url: E,
  onAction: h,
  onMouseEnter: r,
  icon: o,
  image: v,
  prefix: p,
  suffix: f,
  disabled: s,
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
    s && B.disabled,
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
          e.createElement(x, null, k),
          e.createElement(w, { as: "span", variant: "bodySm", tone: M || s ? void 0 : "subdued" }, m)
        )
      : e.createElement(w, { as: "span", variant: "bodyMd", fontWeight: M ? "semibold" : "regular" }, k),
    d = n && e.createElement("span", { className: B.Suffix }, e.createElement(xe, { tone: n.tone }, n.content)),
    A = f && e.createElement(x, null, e.createElement("span", { className: B.Suffix }, f)),
    O = e.createElement(
      "span",
      { className: B.Text },
      e.createElement(w, { as: "span", variant: "bodyMd", fontWeight: M ? "semibold" : "regular" }, a)
    ),
    H = e.createElement(J, { blockAlign: "center", gap: "150", wrap: !1 }, C, O, d, A),
    N = e.createElement(x, { width: "100%" }, H),
    I = M ? e.createElement(Me.ScrollTo, null) : null,
    Z = E
      ? e.createElement(Ce, { id: t, url: s ? null : E, className: T, external: g, "aria-label": i, onClick: s ? null : h, role: y }, N)
      : e.createElement(
          "button",
          { id: t, type: "button", className: T, disabled: s, "aria-label": i, onClick: h, onMouseUp: Ae, role: y, onMouseEnter: r },
          N
        );
  return e.createElement(e.Fragment, null, I, Z);
}
const We = ({ children: t }) => {
  const n = Se(),
    l = u.useRef(null),
    [i, m] = u.useState(!1);
  return (
    Be(() => {
      l.current && m(l.current.scrollWidth > l.current.offsetWidth);
    }, [t]),
    i
      ? e.createElement(
          X,
          {
            zIndexOverride: Number(n.zIndex["z-index-11"]),
            preferredPosition: "above",
            hoverDelay: 1e3,
            content: t,
            dismissOnMouseOut: !0,
          },
          e.createElement(w, { as: "span", truncate: !0 }, t)
        )
      : e.createElement(w, { as: "span", truncate: !0 }, e.createElement(x, { width: "100%", ref: l }, t))
  );
};
function De({ section: t, hasMultipleSections: n, isFirst: l, actionRole: i, onActionAnyItem: m }) {
  const E = (p) => () => {
      p && p(), m && m();
    },
    h = t.items.map(({ content: p, helpText: f, onAction: s, ...g }, b) => {
      const c = e.createElement(de, Object.assign({ content: p, helpText: f, role: i, onAction: E(s) }, g));
      return e.createElement(
        x,
        { as: "li", key: `${p}-${b}`, role: i === "menuitem" ? "presentation" : void 0 },
        e.createElement(J, { wrap: !1 }, c)
      );
    });
  let r = null;
  t.title &&
    (r =
      typeof t.title == "string"
        ? e.createElement(
            x,
            { paddingBlockStart: "300", paddingBlockEnd: "100", paddingInlineStart: "300", paddingInlineEnd: "300" },
            e.createElement(w, { as: "p", variant: "headingSm" }, t.title)
          )
        : e.createElement(x, { padding: "200", paddingInlineEnd: "150" }, t.title));
  let o;
  switch (i) {
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
      x,
      Object.assign({ as: "div", padding: "150" }, n && { paddingBlockStart: "0" }, { tabIndex: n ? void 0 : -1 }),
      e.createElement(we, Object.assign({ gap: "050", as: "ul" }, o && { role: o }), h)
    )
  );
  return n
    ? e.createElement(
        x,
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
function Ve({ items: t, sections: n = [], actionRole: l, allowFiltering: i, onActionAnyItem: m }) {
  const E = Y(),
    h = u.useContext(ue);
  let r = [];
  const o = u.useRef(null),
    [v, p] = u.useState("");
  t ? (r = [{ items: t }, ...n]) : n && (r = n);
  const f = r == null ? void 0 : r.some((a) => a.items.some((d) => typeof d.content == "string")),
    s = r.length > 1,
    g = s && l === "menuitem" ? "menu" : void 0,
    b = s && l === "menuitem" ? -1 : void 0,
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
            hasMultipleSections: s,
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
    (i || h) &&
      k &&
      f &&
      e.createElement(
        x,
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
    e.createElement(x, { as: s ? "ul" : "div", ref: o, role: g, tabIndex: b }, S, P)
  );
}
Ve.Item = de;
var qe = { Bleed: "Polaris-Bleed" };
const Qe = ({
  marginInline: t,
  marginBlock: n,
  marginBlockStart: l,
  marginBlockEnd: i,
  marginInlineStart: m,
  marginInlineEnd: E,
  children: h,
}) => {
  const r = (g) => {
      const b = ["marginInlineStart", "marginInlineEnd"],
        c = ["marginBlockStart", "marginBlockEnd"],
        P = { marginBlockStart: l, marginBlockEnd: i, marginInlineStart: m, marginInlineEnd: E, marginInline: t, marginBlock: n };
      if (P[g]) return P[g];
      if (b.includes(g) && t) return P.marginInline;
      if (c.includes(g) && n) return P.marginBlock;
    },
    o = r("marginBlockStart"),
    v = r("marginBlockEnd"),
    p = r("marginInlineStart"),
    f = r("marginInlineEnd"),
    s = {
      ...z("bleed", "margin-block-start", "space", o),
      ...z("bleed", "margin-block-end", "space", v),
      ...z("bleed", "margin-inline-start", "space", p),
      ...z("bleed", "margin-inline-end", "space", f),
    };
  return e.createElement("div", { className: qe.Bleed, style: Oe(s) }, h);
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
  previousURL: i,
  onNext: m,
  onPrevious: E,
  nextTooltip: h,
  previousTooltip: r,
  nextKeys: o,
  previousKeys: v,
  accessibilityLabel: p,
  accessibilityLabels: f,
  label: s,
  type: g = "page",
}) {
  const b = Y(),
    c = u.createRef(),
    P = p || b.translate("Polaris.Pagination.pagination"),
    M = (f == null ? void 0 : f.previous) || b.translate("Polaris.Pagination.previous"),
    y = (f == null ? void 0 : f.next) || b.translate("Polaris.Pagination.next"),
    S = e.createElement(ne, { icon: ie, accessibilityLabel: M, url: i, onClick: E, disabled: !n, id: "previousURL" }),
    T = r && n ? e.createElement(X, { activatorWrapper: "span", content: r, preferredPosition: "below" }, S) : S,
    C = e.createElement(ne, { icon: se, accessibilityLabel: y, url: l, onClick: m, disabled: !t, id: "nextURL" }),
    k = h && t ? e.createElement(X, { activatorWrapper: "span", content: h, preferredPosition: "below" }, C) : C,
    a = E || le,
    d = v && (i || E) && n && v.map((I) => e.createElement(K, { key: I, keyCode: I, handler: D(i ? re("previousURL", c) : a) })),
    A = m || le,
    O = o && (l || m) && t && o.map((I) => e.createElement(K, { key: I, keyCode: I, handler: D(l ? re("nextURL", c) : A) }));
  if (g === "table") {
    const I = s
      ? e.createElement(
          x,
          { padding: "300", paddingBlockStart: "0", paddingBlockEnd: "0" },
          e.createElement(w, { as: "span", variant: "bodySm", fontWeight: "medium" }, s)
        )
      : null;
    return e.createElement(
      "nav",
      { "aria-label": P, ref: c, className: j(W.Pagination, W.table) },
      d,
      O,
      e.createElement(
        x,
        {
          background: "bg-surface-secondary",
          paddingBlockStart: "150",
          paddingBlockEnd: "150",
          paddingInlineStart: "300",
          paddingInlineEnd: "200",
        },
        e.createElement(
          J,
          { align: "center", blockAlign: "center" },
          e.createElement(
            "div",
            { className: W.TablePaginationActions, "data-buttongroup-variant": "segmented" },
            e.createElement("div", null, T),
            I,
            e.createElement("div", null, k)
          )
        )
      )
    );
  }
  const H = t && n ? e.createElement("span", null, s) : e.createElement(w, { tone: "subdued", as: "span" }, s),
    N = s
      ? e.createElement(
          x,
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
export { Ve as A, Qe as B, Je as F, et as P, _e as S, X as T, ie as a, se as b, ce as c };
