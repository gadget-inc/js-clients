import { S as so } from "./StorybookErrorBoundary-69cec270.js";
import {
  H as Hn,
  X as Jn,
  t as L,
  a1 as Qn,
  F as Qr,
  J as U,
  _ as Wt,
  I as Xn,
  w as Yn,
  Q as Yr,
  a0 as Zn,
  T as Zr,
  u as ao,
  O as ct,
  a2 as eo,
  a5 as no,
  P as oo,
  a4 as ro,
  a3 as to,
} from "./apis-0c1c184f.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { r as i, R as m } from "./index-7c191284.js";
import {
  g as Co,
  F as Eo,
  P as G,
  u as He,
  T as Io,
  j as No,
  A as Ro,
  D as So,
  b as Xe,
  c as bo,
  i as ko,
  f as ne,
  C as nn,
  a as rn,
  S as tn,
  d as vo,
  e as wo,
  h as xo,
  R as yo,
} from "./index-f0f16ed8.js";
import { j as _ } from "./jsx-runtime-69eee039.js";
import { u as lo } from "./useAction-f9651b8b.js";
import {
  i as Gt,
  g as co,
  b as dt,
  a as ee,
  e as en,
  h as fo,
  v as go,
  j as ho,
  u as io,
  d as mo,
  f as po,
  c as uo,
} from "./useResultBannerController-cd95b20f.js";
const Ao = (e) => {
    const { action: r, variables: t, onSuccess: o, onError: n, ...a } = e,
      { metadata: l, fetching: s, error: u } = Hn(r),
      [{ data: c, fetching: d, error: p }, g] = r.type == "globalAction" ? io(r) : lo(r);
    let b,
      h = !1;
    l ? (Xn(l) ? ((b = `${l.action.name} ${l.name}`), (h = l.action.isDeleteAction)) : (b = l.name)) : (b = "loading...");
    const v = i.useCallback(async () => {
      const y = await g(t);
      y.error ? n == null || n(y.error, y) : o == null || o(y);
    }, [g, t, o, n]);
    return { result: c, fetching: s || d, running: d, error: u || p, label: b, isDestructive: h, run: v, buttonProps: a };
  },
  Mo =
    ({ Button: e, toast: r }) =>
    (t) => {
      const {
        fetching: o,
        isDestructive: n,
        run: a,
        label: l,
        buttonProps: s,
      } = Ao({
        onSuccess: (u) => {
          r({ title: `${l} succeeded.` });
        },
        onError: (u, c) => {
          r({ title: `${l} encountered an error: ${u.message}.`, variant: "destructive" });
        },
        ...t,
      });
      return m.createElement(
        e,
        { disabled: o, variant: n ? "destructive" : "default", onClick: a, ...s },
        (t == null ? void 0 : t.children) ?? l
      );
    },
  _o = ({ Checkbox: e, Label: r }) => {
    function t(o) {
      const { field: n, control: a, ...l } = o,
        { path: s, metadata: u } = ct(n),
        {
          field: c,
          fieldState: { error: d },
        } = Yr({ control: a, name: s }),
        {
          formState: { defaultValues: p },
        } = Jn();
      i.useEffect(() => {
        if (u.requiredArgumentForInput) {
          const v = Yn(p ?? {}, s) ?? !1;
          c.onChange(v);
        }
      }, [u.requiredArgumentForInput, p]);
      const g = o.label ?? u.name,
        { value: b, ...h } = c;
      return m.createElement(
        "div",
        { className: "flex items-center space-x-2" },
        m.createElement(e, { ...h, id: s, checked: b, "aria-invalid": !!d, ...l, disabled: o.disabled ?? !1, onCheckedChange: c.onChange }),
        m.createElement(r, { htmlFor: s, className: `${o.className ?? ""} ${d ? "text-red-500" : ""}` }, g),
        d && m.createElement("span", { className: "text-sm text-red-500" }, d.message)
      );
    }
    return ee(t);
  };
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Po = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  on = (...e) =>
    e
      .filter((r, t, o) => !!r && r.trim() !== "" && o.indexOf(r) === t)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var To = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Do = i.forwardRef(
  (
    {
      color: e = "currentColor",
      size: r = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: o,
      className: n = "",
      children: a,
      iconNode: l,
      ...s
    },
    u
  ) =>
    i.createElement(
      "svg",
      {
        ref: u,
        ...To,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: o ? (Number(t) * 24) / Number(r) : t,
        className: on("lucide", n),
        ...s,
      },
      [...l.map(([c, d]) => i.createElement(c, d)), ...(Array.isArray(a) ? a : [a])]
    )
);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = (e, r) => {
  const t = i.forwardRef(({ className: o, ...n }, a) =>
    i.createElement(Do, { ref: a, iconNode: r, className: on(`lucide-${Po(e)}`, o), ...n })
  );
  return (t.displayName = `${e}`), t;
};
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oo = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Fo = be("Check", Oo);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $o = [
    ["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  jo = be("EyeOff", $o);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zo = [
    ["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Lo = be("Eye", zo);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bo = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  Vo = be("Pencil", Bo);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wo = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  Go = be("Search", Wo);
/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qo = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Se = be("X", qo),
  Je = ({ Input: e, Label: r }) => {
    function t(o) {
      const { field: n, control: a, label: l, suffix: s, ...u } = o,
        c = dt({ field: n, control: a }),
        d = `${n}-input`,
        { name: p, placeholder: g, value: b, autoComplete: h, type: v, label: y, metadata: x, errorMessage: R, onChange: O, onBlur: P } = c,
        E = l || y || x.name;
      return m.createElement(
        "div",
        null,
        m.createElement(r, { htmlFor: d }, E),
        m.createElement(
          "div",
          { className: s ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative" },
          m.createElement(
            "div",
            { className: "relative flex items-center" },
            m.createElement(e, {
              name: p,
              type: v || "text",
              id: d,
              value: b ?? "",
              autoComplete: h,
              onChange: O,
              onBlur: P,
              required: x.requiredArgumentForInput || !1,
              className: s ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : "",
              ...u,
              placeholder: g || E,
            }),
            s && m.createElement("div", { className: " h-10 flex items-center px-3" }, s)
          ),
          R && m.createElement("p", { className: "text-sm text-red-500" }, R)
        )
      );
    }
    return ee(t);
  },
  an = ({ Input: e, Label: r, Button: t }) => {
    const o = Je({ Input: e, Label: r });
    function n(a) {
      const [l, s] = i.useState(!1),
        { suffix: u, ...c } = a,
        d = m.createElement(
          t,
          {
            variant: "ghost",
            size: "icon",
            type: "button",
            onClick: () => s(!l),
            className: "h-8 w-8",
            role: `${a.field}ToggleShowHideButton`,
          },
          l ? m.createElement(jo, { className: "h-4 w-4" }) : m.createElement(Lo, { className: "h-4 w-4" })
        );
      return m.createElement(o, { ...c, type: l ? "text" : "password", suffix: u ?? d });
    }
    return ee(n);
  },
  Uo = (e) => {
    const r = Je(e);
    function t(o) {
      const { field: n, label: a } = o,
        { name: l, metadata: s } = dt({ field: n });
      if (s.fieldType !== U.Id || n !== "id") throw new Error(`ShadcnAutoIdInput: field ${n} is not of type Id`);
      return m.createElement(r, { field: n, type: "number", step: 1, min: 1, label: a || "ID", name: l });
    }
    return ee(t);
  },
  Ko = ({ Input: e, Label: r }) => {
    const t = Je({ Input: e, Label: r });
    function o(n) {
      const { field: a, control: l } = n,
        { metadata: s, value: u } = dt({ field: a, control: l }),
        c =
          s.configuration.__typename === "GadgetNumberConfig" && s.configuration.decimals && s.configuration.decimals > 0
            ? Wt(s.configuration.decimals)
            : u
            ? Wt(Zn(`${u}`))
            : 1;
      return m.createElement(t, { ...n, step: c, type: "number" });
    }
    return ee(o);
  },
  Ho = "********";
function Xo({ Input: e, Label: r, Button: t }) {
  const o = an({ Input: e, Label: r, Button: t });
  function n(a) {
    const { findBy: l } = Zr(),
      { path: s } = ct(a.field),
      { field: u } = Yr({ name: s }),
      [c, d] = i.useState(!l),
      p = i.useCallback(() => {
        u.onChange(""), d(!0);
      }, [u]);
    return m.createElement(o, {
      ...a,
      ...(c
        ? { placeholder: "Password" }
        : {
            placeholder: Ho,
            disabled: !0,
            className: "pr-20",
            suffix: m.createElement(
              t,
              { variant: "ghost", size: "icon", type: "button", onClick: p, className: "h-8 w-8", role: `${a.field}EditPasswordButton` },
              m.createElement(Vo, { className: "h-4 w-4" })
            ),
          }),
    });
  }
  return ee(n);
}
const Jo = ({ CommandEmpty: e, CommandItem: r, Checkbox: t, Label: o }) => {
    function n(s) {
      const { message: u = "No records found" } = s;
      return m.createElement(e, null, u);
    }
    function a(s) {
      const { label: u, id: c, selected: d, onSelect: p, allowMultiple: g } = s,
        b = d ? "bg-muted" : "";
      return typeof u == "string"
        ? m.createElement(
            r,
            {
              key: c,
              id: c,
              className: b,
              onMouseDown: (h) => {
                h.preventDefault(), h.stopPropagation();
              },
              onSelect: () => {
                p == null || p(c);
              },
              onKeyDown: (h) => {
                h.key === "Enter" && (p == null || p(c));
              },
            },
            g
              ? m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(t, {
                    id: c,
                    defaultChecked: d,
                    onCheckedChange: (h) => {
                      p == null || p(c);
                    },
                  }),
                  m.createElement(o, { htmlFor: c, className: "flex-1 ml-2" }, u)
                )
              : u
          )
        : null;
    }
    function l(s) {
      const { message: u } = s;
      return m.createElement(e, null, u);
    }
    return { ListMessage: l, NoRecordsMessage: n, ShadcnSelectableOption: a, getErrorMessage: Qn };
  },
  Yo = (e) => {
    const { CommandList: r, CommandEmpty: t, CommandGroup: o } = e,
      { ListMessage: n, NoRecordsMessage: a, ShadcnSelectableOption: l, getErrorMessage: s } = Jo(e);
    function u(c) {
      const { checkSelected: d, onSelect: p, isLoading: g, errorMessage: b, options: h, records: v, actions: y } = c,
        x = i.useMemo(
          () => [
            ...(y ?? []),
            ...h.map((R) =>
              c.renderOption
                ? c.renderOption(R)
                : m.createElement(l, {
                    ...R,
                    selected: (d == null ? void 0 : d(R.id)) ?? !1,
                    allowMultiple: c.allowMultiple,
                    onSelect: (O) => {
                      const P = (v == null ? void 0 : v.find((j) => j.id === O)) ?? { id: O },
                        { createdAt: E, updatedAt: k, ...N } = P;
                      p(N);
                    },
                    key: R.id,
                  })
            ),
          ],
          [y, h, c.renderOption, v, d, p]
        );
      return m.createElement(
        r,
        null,
        g ? m.createElement(t, null, "Loading...") : m.createElement(a, null),
        x.length ? m.createElement(o, null, x) : b ? m.createElement(n, { message: s(b) }) : m.createElement(a, null)
      );
    }
    return (u.displayName = "RelatedModelOption"), u;
  },
  ut = ({ Command: e, CommandInput: r, Label: t, CommandItem: o, CommandList: n, CommandEmpty: a, CommandGroup: l, Checkbox: s }) => {
    const u = Yo({ CommandItem: o, CommandList: n, CommandEmpty: a, CommandGroup: l, Checkbox: s, Label: t });
    function c(d) {
      const p = i.useRef(null),
        [g, b] = i.useState(!1),
        [h, v] = i.useState(""),
        y = `${d.path}-input`,
        x = d.label || d.metadata.name;
      return m.createElement(
        "div",
        null,
        m.createElement(t, { htmlFor: y }, x),
        m.createElement(
          "div",
          { className: `relative ${g ? "ring-1 ring-ring rounded-md border" : "border rounded-md"}` },
          d.selectedRecordTag && m.createElement("div", { className: "py-2 px-2 pt-2 pb-1" }, d.selectedRecordTag),
          m.createElement(
            e,
            { className: "overflow-visible z-50 h-[300px]" },
            m.createElement(r, {
              name: d.path,
              ref: p,
              value: h,
              onValueChange: v,
              onBlur: () => b(!1),
              onFocus: () => b(!0),
              placeholder: "Search",
              className: "ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1",
            }),
            m.createElement(
              "div",
              { className: "relative" },
              g && d.options.length > 0
                ? m.createElement(
                    "div",
                    { className: "" },
                    m.createElement(u, {
                      isLoading: d.isLoading,
                      errorMessage: d.errorMessage,
                      options: d.options,
                      records: d.records,
                      onSelect: d.onSelect,
                      checkSelected: d.checkSelected,
                      allowMultiple: d.allowMultiple,
                    })
                  )
                : null
            )
          )
        )
      );
    }
    return c;
  },
  sn = ({ Badge: e, Button: r }) => {
    function t(n) {
      const { selectedRecords: a, optionLabel: l, onRemoveRecord: s } = n,
        u = co(a, l);
      return u.length
        ? m.createElement(
            m.Fragment,
            null,
            u.map((c, d) =>
              m.createElement(
                e,
                { key: `option-${c.id || d}`, variant: "outline" },
                c.label,
                m.createElement(
                  r,
                  {
                    onClick: () => {
                      const p = a.find((g) => g.id === c.id);
                      s(p ?? { id: c.id });
                    },
                    variant: "ghost",
                    "aria-label": "Remove",
                    size: "icon",
                  },
                  m.createElement(Se, null)
                )
              )
            )
          )
        : null;
    }
    function o(n) {
      return n.selectedRecords.length ? m.createElement(t, { ...n }) : null;
    }
    return { SelectedRecordTags: t, getSelectedRecordTags: o };
  },
  Zo = ({
    Badge: e,
    Button: r,
    Command: t,
    CommandItem: o,
    CommandInput: n,
    Label: a,
    CommandList: l,
    CommandEmpty: s,
    CommandGroup: u,
    Checkbox: c,
  }) => {
    const { SelectedRecordTags: d } = sn({ Badge: e, Button: r }),
      p = ut({ Command: t, CommandInput: n, Label: a, CommandItem: o, CommandList: l, CommandEmpty: s, CommandGroup: u, Checkbox: c });
    function g(b) {
      const { options: h, loading: v, rolesError: y, fieldError: x, selectedRoleKeys: R, fieldProps: O, metadata: P } = uo(b),
        E = i.useCallback(
          (A) => {
            O.onChange(A);
          },
          [O]
        ),
        k = i.useMemo(() => (R ? (R.length > 0 ? R : [R]) : []), [R]),
        N = h.filter((A) => k.includes(A.value)),
        j = (A) => {
          const I = (N == null ? void 0 : N.map((z) => z.value)) ?? [],
            V = I.includes(A.value) ? I.filter((z) => z !== A.value) : [...I, A.value];
          E(V);
        },
        B = i.useMemo(() => (h == null ? void 0 : h.map((A) => ({ id: A.value, label: A.label }))) ?? [], [h]),
        W = i.useMemo(() => (h == null ? void 0 : h.map((A) => ({ id: A.value, label: A.label, value: A.value }))) ?? [], [h]);
      if (y) throw y;
      if (x) throw x;
      return v || !h || h.length === 0
        ? null
        : m.createElement(p, {
            ...b,
            options: B,
            path: O.name,
            metadata: P,
            selectedRecordTag: m.createElement(d, {
              selectedRecords: N,
              optionLabel: "label",
              onRemoveRecord: (A) => {
                j({ value: A.value });
              },
            }),
            ...eo(O),
            onSelect: j,
            isLoading: v,
            checkSelected: (A) => k.includes(A),
            errorMessage: x,
            allowMultiple: !0,
            records: W,
          });
    }
    return ee(g);
  },
  Qo = ({
    Badge: e,
    Button: r,
    Command: t,
    CommandItem: o,
    CommandInput: n,
    Label: a,
    CommandList: l,
    CommandEmpty: s,
    CommandGroup: u,
    Checkbox: c,
  }) => {
    const d = ut({ Command: t, CommandInput: n, Label: a, CommandItem: o, CommandList: l, CommandEmpty: s, CommandGroup: u, Checkbox: c });
    function p(g) {
      const {
          fieldMetadata: { path: b, metadata: h },
          relatedModelOptions: { options: v, searchFilterOptions: y, pagination: x, search: R, relatedModel: O },
          isLoading: P,
          errorMessage: E,
          selectedRecord: k,
          danglingSelectedRecordId: N,
          onSelectRecord: j,
          onRemoveRecord: B,
        } = mo(g),
        W = en(g.field, g.optionLabel),
        A = k ? po(k, W) : null,
        I =
          A && A.id
            ? m.createElement(
                e,
                { key: `selectedRecordTag_${A.id}`, variant: "outline" },
                A.label,
                m.createElement(r, { "aria-label": "Remove", onClick: B, variant: "ghost", size: "icon" }, m.createElement(Se, null))
              )
            : N
            ? m.createElement(
                e,
                { key: `selectedRecordTag_${N}`, variant: "outline" },
                m.createElement("p", { id: `${N}`, style: { color: "red" } }, "id: ", N),
                m.createElement(r, { "aria-label": "Remove", onClick: B, variant: "ghost", size: "icon" }, m.createElement(Se, null))
              )
            : null,
        V = (z) => {
          const H = z.id;
          (k == null ? void 0 : k.id) === H ? B() : j(z);
        };
      return m.createElement(d, {
        ...g,
        options: v,
        path: b,
        metadata: h,
        selectedRecordTag: I,
        onSelect: V,
        isLoading: P,
        errorMessage: E,
        records: O.records,
      });
    }
    return ee(p);
  },
  ea = ({
    Badge: e,
    Button: r,
    Command: t,
    CommandItem: o,
    CommandInput: n,
    Label: a,
    CommandList: l,
    CommandEmpty: s,
    CommandGroup: u,
    Checkbox: c,
  }) => {
    const { SelectedRecordTags: d } = sn({ Badge: e, Button: r }),
      p = ut({ Command: t, CommandInput: n, Label: a, CommandItem: o, CommandList: l, CommandEmpty: s, CommandGroup: u, Checkbox: c });
    function g(b) {
      const { field: h } = b,
        {
          fieldMetadata: { path: v, metadata: y },
          relatedModelOptions: { options: x, searchFilterOptions: R, search: O, pagination: P, relatedModel: E },
          selectedRecords: k,
          errorMessage: N,
          isLoading: j,
          onSelectRecord: B,
          onRemoveRecord: W,
        } = fo(b),
        A = en(h, b.optionLabel),
        I = i.useMemo(() => k.map((V) => V.id).filter((V) => !!V), [k]);
      return m.createElement(p, {
        ...b,
        options: x,
        path: v,
        metadata: y,
        selectedRecordTag: m.createElement(d, { selectedRecords: k, optionLabel: A, onRemoveRecord: W }),
        onSelect: B,
        checkSelected: (V) => I.includes(V),
        isLoading: j,
        errorMessage: N,
        records: E.records,
      });
    }
    return ee(g);
  },
  ln = (e) => {
    const r = {
        idInput: Uo(e),
        textInput: Je(e),
        numberInput: Ko(e),
        encryptedInput: an(e),
        passwordInput: Xo(e),
        booleanInput: _o(e),
        belongsToInput: Qo(e),
        hasManyInput: ea(e),
        rolesInput: Zo(e),
      },
      t = m.memo(function (n) {
        const { metadata: a } = ct(n.field);
        switch (a.configuration.fieldType) {
          case U.Id:
            return r.idInput(n);
          case U.String:
          case U.Email:
          case U.Color:
          case U.Url:
            return r.textInput(n);
          case U.Number:
            return r.numberInput(n);
          case U.RoleAssignments:
            return r.rolesInput(n);
          case U.HasOne:
            return null;
          case U.HasMany:
            return r.hasManyInput(n);
          case U.HasManyThrough:
            return null;
          case U.EncryptedString:
            return r.encryptedInput(n);
          case U.BelongsTo:
            return r.belongsToInput(n);
          case U.Password:
            return r.passwordInput(n);
          case U.Boolean:
            return r.booleanInput(n);
          default:
            return r.textInput(n);
        }
      });
    return (t.displayName = "ShadcnAutoInput"), ee(t);
  },
  cn = ({ Button: e }) => {
    function r(t) {
      const { submitResult: o } = Zr(),
        n = t.isSubmitting ?? o.isSubmitting;
      return m.createElement(e, { type: "submit", disabled: n, ...t }, t.children ?? "Submit");
    }
    return r;
  },
  ta = ({ Alert: e, AlertTitle: r, AlertDescription: t, Button: o }) => {
    if (!e || !r || !t || !o) throw new Error("Alert components are required");
    const n = (s) => {
        const { show: u, successful: c, title: d, hide: p } = Gt();
        return !u || !c
          ? null
          : m.createElement(
              e,
              { className: "relative p-4", ...s },
              m.createElement(r, null, "Success"),
              m.createElement(t, null, d || "Operation completed successfully"),
              m.createElement(
                o,
                {
                  className: "absolute top-2 right-2 h-4 w-4 cursor-pointer",
                  variant: "ghost",
                  size: "icon",
                  "aria-label": "Dismiss notification",
                  onClick: p,
                },
                m.createElement(Se, null)
              )
            );
      },
      a = (s) => {
        const { show: u, successful: c, hide: d, title: p } = Gt();
        return !u || c
          ? null
          : m.createElement(
              e,
              { className: "relative", variant: "destructive", ...s, ...s },
              m.createElement(r, null, "Error"),
              m.createElement(t, null, p || "An error occurred"),
              m.createElement(
                o,
                {
                  className: "absolute top-2 right-2 h-4 w-4 cursor-pointer",
                  variant: "ghost",
                  size: "icon",
                  "aria-label": "Dismiss notification",
                  onClick: d,
                },
                m.createElement(Se, null)
              )
            );
      };
    return {
      ShadcnSubmitResultBanner: (s) =>
        m.createElement(m.Fragment, null, m.createElement(n, { ...s.successBannerProps }), m.createElement(a, { ...s.errorBannerProps })),
      ShadcnSubmitSuccessfulBanner: n,
      ShadcnSubmitErrorBanner: a,
    };
  },
  ra = ({
    Form: e,
    Input: r,
    Button: t,
    Alert: o,
    Skeleton: n,
    AlertTitle: a,
    AlertDescription: l,
    Label: s,
    Checkbox: u,
    Badge: c,
    Command: d,
    CommandInput: p,
    CommandItem: g,
    CommandList: b,
    CommandEmpty: h,
    CommandGroup: v,
  }) => {
    const y = ln({
        Input: r,
        Label: s,
        Button: t,
        Checkbox: u,
        Badge: c,
        Command: d,
        CommandInput: p,
        CommandItem: g,
        CommandList: b,
        CommandEmpty: h,
        CommandGroup: v,
      }),
      x = cn({ Button: t }),
      { ShadcnSubmitSuccessfulBanner: R, ShadcnSubmitErrorBanner: O } = ta({ Alert: o, AlertTitle: a, AlertDescription: l, Button: t });
    return (E) => {
      const { action: k, findBy: N } = E;
      go(E);
      const j = `${k.modelApiIdentifier ?? ""}.${k.operationName}.${JSON.stringify(N)}`;
      return m.createElement(
        to,
        null,
        m.createElement(P, {
          key: j,
          ...E,
          elements: {
            Form: e,
            Input: r,
            Button: t,
            Alert: o,
            Skeleton: n,
            AlertTitle: a,
            AlertDescription: l,
            ShadcnAutoInput: y,
            ShadcnAutoSubmit: x,
          },
        })
      );
    };
    function P(E) {
      const { record: k, action: N, findBy: j, ...B } = E,
        { Form: W, Skeleton: A, ShadcnAutoInput: I, ShadcnAutoSubmit: V } = E.elements,
        {
          metadata: z,
          fetchingMetadata: H,
          metadataError: X,
          fields: te,
          submit: Z,
          formError: Q,
          isSubmitting: le,
          isSubmitSuccessful: q,
          originalFormMethods: f,
          isLoading: S,
        } = ho(E),
        M = E.title === void 0 ? ro(N.operationName) : E.title;
      if (E.successContent && q) return E.successContent;
      if (H) return m.createElement(W, { ...B, onSubmit: Z }, m.createElement(A, null));
      const w = {
          findBy: j,
          submit: Z,
          metadata: z,
          submitResult: { isSuccessful: q, error: Q ?? X, isSubmitting: le },
          model: { apiIdentifier: N.modelApiIdentifier, namespace: N.namespace },
          fields: te,
        },
        T =
          E.children ??
          m.createElement(
            m.Fragment,
            null,
            M && m.createElement("h2", { className: "text-2xl font-bold" }, M),
            !E.onSuccess && m.createElement(R, null),
            !E.onFailure && m.createElement(O, null),
            !X &&
              m.createElement(
                m.Fragment,
                null,
                te.map(({ metadata: D }) => m.createElement(I, { field: D.apiIdentifier, key: D.apiIdentifier })),
                m.createElement(V, null, E.submitLabel ?? "Submit")
              )
          );
      return m.createElement(
        no.Provider,
        { value: w },
        m.createElement(
          Qr,
          { ...f },
          S && m.createElement(A, null),
          m.createElement("div", { hidden: S }, m.createElement(W, { ...B, onSubmit: Z }, T))
        )
      );
    }
  },
  na = (e) => ({ AutoButton: Mo(e), AutoForm: ra(e) });
function dn(e) {
  var r,
    t,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (r = 0; r < n; r++) e[r] && (t = dn(e[r])) && (o && (o += " "), (o += t));
    } else for (t in e) e[t] && (o && (o += " "), (o += t));
  return o;
}
function un() {
  for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (r = dn(e)) && (o && (o += " "), (o += r));
  return o;
}
const qt = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Ut = un,
  ke = (e, r) => (t) => {
    var o;
    if ((r == null ? void 0 : r.variants) == null) return Ut(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
    const { variants: n, defaultVariants: a } = r,
      l = Object.keys(n).map((c) => {
        const d = t == null ? void 0 : t[c],
          p = a == null ? void 0 : a[c];
        if (d === null) return null;
        const g = qt(d) || qt(p);
        return n[c][g];
      }),
      s =
        t &&
        Object.entries(t).reduce((c, d) => {
          let [p, g] = d;
          return g === void 0 || (c[p] = g), c;
        }, {}),
      u =
        r == null || (o = r.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((c, d) => {
              let { class: p, className: g, ...b } = d;
              return Object.entries(b).every((h) => {
                let [v, y] = h;
                return Array.isArray(y) ? y.includes({ ...a, ...s }[v]) : { ...a, ...s }[v] === y;
              })
                ? [...c, p, g]
                : c;
            }, []);
    return Ut(e, l, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  },
  mt = "-",
  oa = (e) => {
    const r = sa(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (l) => {
        const s = l.split(mt);
        return s[0] === "" && s.length !== 1 && s.shift(), mn(s, r) || aa(l);
      },
      getConflictingClassGroupIds: (l, s) => {
        const u = t[l] || [];
        return s && o[l] ? [...u, ...o[l]] : u;
      },
    };
  },
  mn = (e, r) => {
    var l;
    if (e.length === 0) return r.classGroupId;
    const t = e[0],
      o = r.nextPart.get(t),
      n = o ? mn(e.slice(1), o) : void 0;
    if (n) return n;
    if (r.validators.length === 0) return;
    const a = e.join(mt);
    return (l = r.validators.find(({ validator: s }) => s(a))) == null ? void 0 : l.classGroupId;
  },
  Kt = /^\[(.+)\]$/,
  aa = (e) => {
    if (Kt.test(e)) {
      const r = Kt.exec(e)[1],
        t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  },
  sa = (e) => {
    const { theme: r, prefix: t } = e,
      o = { nextPart: new Map(), validators: [] };
    return (
      ia(Object.entries(e.classGroups), t).forEach(([a, l]) => {
        st(l, o, a, r);
      }),
      o
    );
  },
  st = (e, r, t, o) => {
    e.forEach((n) => {
      if (typeof n == "string") {
        const a = n === "" ? r : Ht(r, n);
        a.classGroupId = t;
        return;
      }
      if (typeof n == "function") {
        if (la(n)) {
          st(n(o), r, t, o);
          return;
        }
        r.validators.push({ validator: n, classGroupId: t });
        return;
      }
      Object.entries(n).forEach(([a, l]) => {
        st(l, Ht(r, a), t, o);
      });
    });
  },
  Ht = (e, r) => {
    let t = e;
    return (
      r.split(mt).forEach((o) => {
        t.nextPart.has(o) || t.nextPart.set(o, { nextPart: new Map(), validators: [] }), (t = t.nextPart.get(o));
      }),
      t
    );
  },
  la = (e) => e.isThemeGetter,
  ia = (e, r) =>
    r
      ? e.map(([t, o]) => {
          const n = o.map((a) =>
            typeof a == "string" ? r + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([l, s]) => [r + l, s])) : a
          );
          return [t, n];
        })
      : e,
  ca = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      t = new Map(),
      o = new Map();
    const n = (a, l) => {
      t.set(a, l), r++, r > e && ((r = 0), (o = t), (t = new Map()));
    };
    return {
      get(a) {
        let l = t.get(a);
        if (l !== void 0) return l;
        if ((l = o.get(a)) !== void 0) return n(a, l), l;
      },
      set(a, l) {
        t.has(a) ? t.set(a, l) : n(a, l);
      },
    };
  },
  pn = "!",
  da = (e) => {
    const { separator: r, experimentalParseClassName: t } = e,
      o = r.length === 1,
      n = r[0],
      a = r.length,
      l = (s) => {
        const u = [];
        let c = 0,
          d = 0,
          p;
        for (let y = 0; y < s.length; y++) {
          let x = s[y];
          if (c === 0) {
            if (x === n && (o || s.slice(y, y + a) === r)) {
              u.push(s.slice(d, y)), (d = y + a);
              continue;
            }
            if (x === "/") {
              p = y;
              continue;
            }
          }
          x === "[" ? c++ : x === "]" && c--;
        }
        const g = u.length === 0 ? s : s.substring(d),
          b = g.startsWith(pn),
          h = b ? g.substring(1) : g,
          v = p && p > d ? p - d : void 0;
        return { modifiers: u, hasImportantModifier: b, baseClassName: h, maybePostfixModifierPosition: v };
      };
    return t ? (s) => t({ className: s, parseClassName: l }) : l;
  },
  ua = (e) => {
    if (e.length <= 1) return e;
    const r = [];
    let t = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
      }),
      r.push(...t.sort()),
      r
    );
  },
  ma = (e) => ({ cache: ca(e.cacheSize), parseClassName: da(e), ...oa(e) }),
  pa = /\s+/,
  fa = (e, r) => {
    const { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: n } = r,
      a = [],
      l = e.trim().split(pa);
    let s = "";
    for (let u = l.length - 1; u >= 0; u -= 1) {
      const c = l[u],
        { modifiers: d, hasImportantModifier: p, baseClassName: g, maybePostfixModifierPosition: b } = t(c);
      let h = !!b,
        v = o(h ? g.substring(0, b) : g);
      if (!v) {
        if (!h) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((v = o(g)), !v)) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        h = !1;
      }
      const y = ua(d).join(":"),
        x = p ? y + pn : y,
        R = x + v;
      if (a.includes(R)) continue;
      a.push(R);
      const O = n(v, h);
      for (let P = 0; P < O.length; ++P) {
        const E = O[P];
        a.push(x + E);
      }
      s = c + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function ga() {
  let e = 0,
    r,
    t,
    o = "";
  for (; e < arguments.length; ) (r = arguments[e++]) && (t = fn(r)) && (o && (o += " "), (o += t));
  return o;
}
const fn = (e) => {
  if (typeof e == "string") return e;
  let r,
    t = "";
  for (let o = 0; o < e.length; o++) e[o] && (r = fn(e[o])) && (t && (t += " "), (t += r));
  return t;
};
function ha(e, ...r) {
  let t,
    o,
    n,
    a = l;
  function l(u) {
    const c = r.reduce((d, p) => p(d), e());
    return (t = ma(c)), (o = t.cache.get), (n = t.cache.set), (a = s), s(u);
  }
  function s(u) {
    const c = o(u);
    if (c) return c;
    const d = fa(u, t);
    return n(u, d), d;
  }
  return function () {
    return a(ga.apply(null, arguments));
  };
}
const F = (e) => {
    const r = (t) => t[e] || [];
    return (r.isThemeGetter = !0), r;
  },
  gn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ba = /^\d+\/\d+$/,
  va = new Set(["px", "full", "screen"]),
  ya = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wa = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Ea = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Sa = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  re = (e) => ge(e) || va.has(e) || ba.test(e),
  oe = (e) => ve(e, "length", _a),
  ge = (e) => !!e && !Number.isNaN(Number(e)),
  Ze = (e) => ve(e, "number", ge),
  ye = (e) => !!e && Number.isInteger(Number(e)),
  Ca = (e) => e.endsWith("%") && ge(e.slice(0, -1)),
  C = (e) => gn.test(e),
  ae = (e) => ya.test(e),
  ka = new Set(["length", "size", "percentage"]),
  Ia = (e) => ve(e, ka, hn),
  Ra = (e) => ve(e, "position", hn),
  Na = new Set(["image", "url"]),
  Aa = (e) => ve(e, Na, Ta),
  Ma = (e) => ve(e, "", Pa),
  xe = () => !0,
  ve = (e, r, t) => {
    const o = gn.exec(e);
    return o ? (o[1] ? (typeof r == "string" ? o[1] === r : r.has(o[1])) : t(o[2])) : !1;
  },
  _a = (e) => xa.test(e) && !wa.test(e),
  hn = () => !1,
  Pa = (e) => Ea.test(e),
  Ta = (e) => Sa.test(e),
  Da = () => {
    const e = F("colors"),
      r = F("spacing"),
      t = F("blur"),
      o = F("brightness"),
      n = F("borderColor"),
      a = F("borderRadius"),
      l = F("borderSpacing"),
      s = F("borderWidth"),
      u = F("contrast"),
      c = F("grayscale"),
      d = F("hueRotate"),
      p = F("invert"),
      g = F("gap"),
      b = F("gradientColorStops"),
      h = F("gradientColorStopPositions"),
      v = F("inset"),
      y = F("margin"),
      x = F("opacity"),
      R = F("padding"),
      O = F("saturate"),
      P = F("scale"),
      E = F("sepia"),
      k = F("skew"),
      N = F("space"),
      j = F("translate"),
      B = () => ["auto", "contain", "none"],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      A = () => ["auto", C, r],
      I = () => [C, r],
      V = () => ["", re, oe],
      z = () => ["auto", ge, C],
      H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      X = () => ["solid", "dashed", "dotted", "double", "none"],
      te = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      Q = () => ["", "0", C],
      le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      q = () => [ge, C];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [xe],
        spacing: [re, oe],
        blur: ["none", "", ae, C],
        brightness: q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ae, C],
        borderSpacing: I(),
        borderWidth: V(),
        contrast: q(),
        grayscale: Q(),
        hueRotate: q(),
        invert: Q(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ca, oe],
        inset: A(),
        margin: A(),
        opacity: q(),
        padding: I(),
        saturate: q(),
        scale: q(),
        sepia: Q(),
        skew: q(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", C] }],
        container: ["container"],
        columns: [{ columns: [ae] }],
        "break-after": [{ "break-after": le() }],
        "break-before": [{ "break-before": le() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [...H(), C] }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: B() }],
        "overscroll-x": [{ "overscroll-x": B() }],
        "overscroll-y": [{ "overscroll-y": B() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ye, C] }],
        basis: [{ basis: A() }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", C] }],
        grow: [{ grow: Q() }],
        shrink: [{ shrink: Q() }],
        order: [{ order: ["first", "last", "none", ye, C] }],
        "grid-cols": [{ "grid-cols": [xe] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ye, C] }, C] }],
        "col-start": [{ "col-start": z() }],
        "col-end": [{ "col-end": z() }],
        "grid-rows": [{ "grid-rows": [xe] }],
        "row-start-end": [{ row: ["auto", { span: [ye, C] }, C] }],
        "row-start": [{ "row-start": z() }],
        "row-end": [{ "row-end": z() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", C] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", C] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...Z()] }],
        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
        "align-content": [{ content: ["normal", ...Z(), "baseline"] }],
        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
        "place-content": [{ "place-content": [...Z(), "baseline"] }],
        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
        p: [{ p: [R] }],
        px: [{ px: [R] }],
        py: [{ py: [R] }],
        ps: [{ ps: [R] }],
        pe: [{ pe: [R] }],
        pt: [{ pt: [R] }],
        pr: [{ pr: [R] }],
        pb: [{ pb: [R] }],
        pl: [{ pl: [R] }],
        m: [{ m: [y] }],
        mx: [{ mx: [y] }],
        my: [{ my: [y] }],
        ms: [{ ms: [y] }],
        me: [{ me: [y] }],
        mt: [{ mt: [y] }],
        mr: [{ mr: [y] }],
        mb: [{ mb: [y] }],
        ml: [{ ml: [y] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", C, r] }],
        "min-w": [{ "min-w": [C, r, "min", "max", "fit"] }],
        "max-w": [{ "max-w": [C, r, "none", "full", "min", "max", "fit", "prose", { screen: [ae] }, ae] }],
        h: [{ h: [C, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [{ "min-h": [C, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "max-h": [{ "max-h": [C, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        size: [{ size: [C, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ae, oe] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ze] }],
        "font-family": [{ font: [xe] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", C] }],
        "line-clamp": [{ "line-clamp": ["none", ge, Ze] }],
        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", re, C] }],
        "list-image": [{ "list-image": ["none", C] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", C] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [x] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [x] }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...X(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", re, oe] }],
        "underline-offset": [{ "underline-offset": ["auto", re, C] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C] }],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", C] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [x] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), Ra] }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ia] }],
        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Aa] }],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [h] }],
        "gradient-via-pos": [{ via: [h] }],
        "gradient-to-pos": [{ to: [h] }],
        "gradient-from": [{ from: [b] }],
        "gradient-via": [{ via: [b] }],
        "gradient-to": [{ to: [b] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [x] }],
        "border-style": [{ border: [...X(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [x] }],
        "divide-style": [{ divide: X() }],
        "border-color": [{ border: [n] }],
        "border-color-x": [{ "border-x": [n] }],
        "border-color-y": [{ "border-y": [n] }],
        "border-color-s": [{ "border-s": [n] }],
        "border-color-e": [{ "border-e": [n] }],
        "border-color-t": [{ "border-t": [n] }],
        "border-color-r": [{ "border-r": [n] }],
        "border-color-b": [{ "border-b": [n] }],
        "border-color-l": [{ "border-l": [n] }],
        "divide-color": [{ divide: [n] }],
        "outline-style": [{ outline: ["", ...X()] }],
        "outline-offset": [{ "outline-offset": [re, C] }],
        "outline-w": [{ outline: [re, oe] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [x] }],
        "ring-offset-w": [{ "ring-offset": [re, oe] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ae, Ma] }],
        "shadow-color": [{ shadow: [xe] }],
        opacity: [{ opacity: [x] }],
        "mix-blend": [{ "mix-blend": [...te(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": te() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [t] }],
        brightness: [{ brightness: [o] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ae, C] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [O] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [t] }],
        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [x] }],
        "backdrop-saturate": [{ "backdrop-saturate": [O] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C] }],
        duration: [{ duration: q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", C] }],
        delay: [{ delay: q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", C] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [P] }],
        "scale-x": [{ "scale-x": [P] }],
        "scale-y": [{ "scale-y": [P] }],
        rotate: [{ rotate: [ye, C] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          { origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C] },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              C,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", C] }],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [re, oe, Ze] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Oa = ha(Da);
function $(...e) {
  return Oa(un(e));
}
const Fa = ke(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  pt = i.forwardRef(({ className: e, variant: r, ...t }, o) =>
    i.createElement("div", { ref: o, role: "alert", className: $(Fa({ variant: r }), e), ...t })
  );
pt.displayName = "Alert";
const ft = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("h5", { ref: t, className: $("mb-1 font-medium leading-none tracking-tight", e), ...r })
);
ft.displayName = "AlertTitle";
const gt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("text-sm [&_p]:leading-relaxed", e), ...r })
);
gt.displayName = "AlertDescription";
pt.__docgenInfo = { description: "", methods: [], displayName: "Alert" };
gt.__docgenInfo = { description: "", methods: [], displayName: "AlertDescription" };
ft.__docgenInfo = { description: "", methods: [], displayName: "AlertTitle" };
const $a = ke(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function bn({ className: e, variant: r, ...t }) {
  return i.createElement("div", { className: $($a({ variant: r }), e), ...t });
}
bn.__docgenInfo = { description: "", methods: [], displayName: "Badge", composes: ["VariantProps"] };
const ja = ke(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-6 w-6" },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  ht = i.forwardRef(({ className: e, variant: r, size: t, asChild: o = !1, ...n }, a) => {
    const l = o ? tn : "button";
    return i.createElement(l, { className: $(ja({ variant: r, size: t, className: e })), ref: a, ...n });
  });
ht.displayName = "Button";
ht.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: { asChild: { defaultValue: { value: "false", computed: !1 }, required: !1 } },
};
const bt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("rounded-xl border bg-card text-card-foreground shadow", e), ...r })
);
bt.displayName = "Card";
const vt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("flex flex-col space-y-1.5 p-6", e), ...r })
);
vt.displayName = "CardHeader";
const yt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("font-semibold leading-none tracking-tight", e), ...r })
);
yt.displayName = "CardTitle";
const xt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("text-sm text-muted-foreground", e), ...r })
);
xt.displayName = "CardDescription";
const wt = i.forwardRef(({ className: e, ...r }, t) => i.createElement("div", { ref: t, className: $("p-6 pt-0", e), ...r }));
wt.displayName = "CardContent";
const Et = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("div", { ref: t, className: $("flex items-center p-6 pt-0", e), ...r })
);
Et.displayName = "CardFooter";
bt.__docgenInfo = { description: "", methods: [], displayName: "Card" };
wt.__docgenInfo = { description: "", methods: [], displayName: "CardContent" };
xt.__docgenInfo = { description: "", methods: [], displayName: "CardDescription" };
Et.__docgenInfo = { description: "", methods: [], displayName: "CardFooter" };
vt.__docgenInfo = { description: "", methods: [], displayName: "CardHeader" };
yt.__docgenInfo = { description: "", methods: [], displayName: "CardTitle" };
function za(e, r = []) {
  let t = [];
  function o(a, l) {
    const s = i.createContext(l),
      u = t.length;
    t = [...t, l];
    const c = (p) => {
      var x;
      const { scope: g, children: b, ...h } = p,
        v = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[u]) || s,
        y = i.useMemo(() => h, Object.values(h));
      return _.jsx(v.Provider, { value: y, children: b });
    };
    c.displayName = a + "Provider";
    function d(p, g) {
      var v;
      const b = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[u]) || s,
        h = i.useContext(b);
      if (h) return h;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [c, d];
  }
  const n = () => {
    const a = t.map((l) => i.createContext(l));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || a;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (n.scopeName = e), [o, La(n, ...r)];
}
function La(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const o = e.map((n) => ({ useScope: n(), scopeName: n.scopeName }));
    return function (a) {
      const l = o.reduce((s, { useScope: u, scopeName: c }) => {
        const p = u(a)[`__scope${c}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${r.scopeName}`]: l }), [l]);
    };
  };
  return (t.scopeName = r.scopeName), t;
}
function Xt(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (n) {
    if ((e == null || e(n), t === !1 || !n.defaultPrevented)) return r == null ? void 0 : r(n);
  };
}
var St = "Checkbox",
  [Ba, fl] = za(St),
  [Va, Wa] = Ba(St),
  vn = i.forwardRef((e, r) => {
    const {
        __scopeCheckbox: t,
        name: o,
        checked: n,
        defaultChecked: a,
        required: l,
        disabled: s,
        value: u = "on",
        onCheckedChange: c,
        form: d,
        ...p
      } = e,
      [g, b] = i.useState(null),
      h = He(r, (P) => b(P)),
      v = i.useRef(!1),
      y = g ? d || !!g.closest("form") : !0,
      [x = !1, R] = rn({ prop: n, defaultProp: a, onChange: c }),
      O = i.useRef(x);
    return (
      i.useEffect(() => {
        const P = g == null ? void 0 : g.form;
        if (P) {
          const E = () => R(O.current);
          return P.addEventListener("reset", E), () => P.removeEventListener("reset", E);
        }
      }, [g, R]),
      _.jsxs(Va, {
        scope: t,
        state: x,
        disabled: s,
        children: [
          _.jsx(G.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": se(x) ? "mixed" : x,
            "aria-required": l,
            "data-state": wn(x),
            "data-disabled": s ? "" : void 0,
            disabled: s,
            value: u,
            ...p,
            ref: h,
            onKeyDown: Xt(e.onKeyDown, (P) => {
              P.key === "Enter" && P.preventDefault();
            }),
            onClick: Xt(e.onClick, (P) => {
              R((E) => (se(E) ? !0 : !E)), y && ((v.current = P.isPropagationStopped()), v.current || P.stopPropagation());
            }),
          }),
          y &&
            _.jsx(Ga, {
              control: g,
              bubbles: !v.current,
              name: o,
              value: u,
              checked: x,
              required: l,
              disabled: s,
              form: d,
              style: { transform: "translateX(-100%)" },
              defaultChecked: se(a) ? !1 : a,
            }),
        ],
      })
    );
  });
vn.displayName = St;
var yn = "CheckboxIndicator",
  xn = i.forwardRef((e, r) => {
    const { __scopeCheckbox: t, forceMount: o, ...n } = e,
      a = Wa(yn, t);
    return _.jsx(Xe, {
      present: o || se(a.state) || a.state === !0,
      children: _.jsx(G.span, {
        "data-state": wn(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: r,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
xn.displayName = yn;
var Ga = (e) => {
  const { control: r, checked: t, bubbles: o = !0, defaultChecked: n, ...a } = e,
    l = i.useRef(null),
    s = bo(t),
    u = vo(r);
  i.useEffect(() => {
    const d = l.current,
      p = window.HTMLInputElement.prototype,
      b = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (s !== t && b) {
      const h = new Event("click", { bubbles: o });
      (d.indeterminate = se(t)), b.call(d, se(t) ? !1 : t), d.dispatchEvent(h);
    }
  }, [s, t, o]);
  const c = i.useRef(se(t) ? !1 : t);
  return _.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n ?? c.current,
    ...a,
    tabIndex: -1,
    ref: l,
    style: { ...e.style, ...u, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 },
  });
};
function se(e) {
  return e === "indeterminate";
}
function wn(e) {
  return se(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var En = vn,
  qa = xn;
const Ct = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(
    En,
    {
      ref: t,
      className: $(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        e
      ),
      ...r,
    },
    i.createElement(qa, { className: $("flex items-center justify-center text-current") }, i.createElement(Fo, { className: "h-4 w-4" }))
  )
);
Ct.displayName = En.displayName;
Ct.__docgenInfo = { description: "", methods: [] };
var Jt = 1,
  Ua = 0.9,
  Ka = 0.8,
  Ha = 0.17,
  Qe = 0.1,
  et = 0.999,
  Xa = 0.9999,
  Ja = 0.99,
  Ya = /[\\\/_+.#"@\[\(\{&]/,
  Za = /[\\\/_+.#"@\[\(\{&]/g,
  Qa = /[\s-]/,
  Sn = /[\s-]/g;
function lt(e, r, t, o, n, a, l) {
  if (a === r.length) return n === e.length ? Jt : Ja;
  var s = `${n},${a}`;
  if (l[s] !== void 0) return l[s];
  for (var u = o.charAt(a), c = t.indexOf(u, n), d = 0, p, g, b, h; c >= 0; )
    (p = lt(e, r, t, o, c + 1, a + 1, l)),
      p > d &&
        (c === n
          ? (p *= Jt)
          : Ya.test(e.charAt(c - 1))
          ? ((p *= Ka), (b = e.slice(n, c - 1).match(Za)), b && n > 0 && (p *= Math.pow(et, b.length)))
          : Qa.test(e.charAt(c - 1))
          ? ((p *= Ua), (h = e.slice(n, c - 1).match(Sn)), h && n > 0 && (p *= Math.pow(et, h.length)))
          : ((p *= Ha), n > 0 && (p *= Math.pow(et, c - n))),
        e.charAt(c) !== r.charAt(a) && (p *= Xa)),
      ((p < Qe && t.charAt(c - 1) === o.charAt(a + 1)) || (o.charAt(a + 1) === o.charAt(a) && t.charAt(c - 1) !== o.charAt(a))) &&
        ((g = lt(e, r, t, o, c + 1, a + 2, l)), g * Qe > p && (p = g * Qe)),
      p > d && (d = p),
      (c = t.indexOf(u, c + 1));
  return (l[s] = d), d;
}
function Yt(e) {
  return e.toLowerCase().replace(Sn, " ");
}
function es(e, r, t) {
  return (e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e), lt(e, r, Yt(e), Yt(r), 0, 0, {});
}
function Ee(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (n) {
    if ((e == null || e(n), t === !1 || !n.defaultPrevented)) return r == null ? void 0 : r(n);
  };
}
function ts(e, r) {
  const t = i.createContext(r),
    o = (a) => {
      const { children: l, ...s } = a,
        u = i.useMemo(() => s, Object.values(s));
      return _.jsx(t.Provider, { value: u, children: l });
    };
  o.displayName = e + "Provider";
  function n(a) {
    const l = i.useContext(t);
    if (l) return l;
    if (r !== void 0) return r;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, n];
}
function rs(e, r = []) {
  let t = [];
  function o(a, l) {
    const s = i.createContext(l),
      u = t.length;
    t = [...t, l];
    const c = (p) => {
      var x;
      const { scope: g, children: b, ...h } = p,
        v = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[u]) || s,
        y = i.useMemo(() => h, Object.values(h));
      return _.jsx(v.Provider, { value: y, children: b });
    };
    c.displayName = a + "Provider";
    function d(p, g) {
      var v;
      const b = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[u]) || s,
        h = i.useContext(b);
      if (h) return h;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [c, d];
  }
  const n = () => {
    const a = t.map((l) => i.createContext(l));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || a;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (n.scopeName = e), [o, ns(n, ...r)];
}
function ns(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const o = e.map((n) => ({ useScope: n(), scopeName: n.scopeName }));
    return function (a) {
      const l = o.reduce((s, { useScope: u, scopeName: c }) => {
        const p = u(a)[`__scope${c}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${r.scopeName}`]: l }), [l]);
    };
  };
  return (t.scopeName = r.scopeName), t;
}
var kt = "Dialog",
  [Cn, gl] = rs(kt),
  [os, Y] = Cn(kt),
  kn = (e) => {
    const { __scopeDialog: r, children: t, open: o, defaultOpen: n, onOpenChange: a, modal: l = !0 } = e,
      s = i.useRef(null),
      u = i.useRef(null),
      [c = !1, d] = rn({ prop: o, defaultProp: n, onChange: a });
    return _.jsx(os, {
      scope: r,
      triggerRef: s,
      contentRef: u,
      contentId: ne(),
      titleId: ne(),
      descriptionId: ne(),
      open: c,
      onOpenChange: d,
      onOpenToggle: i.useCallback(() => d((p) => !p), [d]),
      modal: l,
      children: t,
    });
  };
kn.displayName = kt;
var In = "DialogTrigger",
  as = i.forwardRef((e, r) => {
    const { __scopeDialog: t, ...o } = e,
      n = Y(In, t),
      a = He(r, n.triggerRef);
    return _.jsx(G.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": n.open,
      "aria-controls": n.contentId,
      "data-state": Nt(n.open),
      ...o,
      ref: a,
      onClick: Ee(e.onClick, n.onOpenToggle),
    });
  });
as.displayName = In;
var It = "DialogPortal",
  [ss, Rn] = Cn(It, { forceMount: void 0 }),
  Nn = (e) => {
    const { __scopeDialog: r, forceMount: t, children: o, container: n } = e,
      a = Y(It, r);
    return _.jsx(ss, {
      scope: r,
      forceMount: t,
      children: i.Children.map(o, (l) =>
        _.jsx(Xe, { present: t || a.open, children: _.jsx(Co, { asChild: !0, container: n, children: l }) })
      ),
    });
  };
Nn.displayName = It;
var Ke = "DialogOverlay",
  An = i.forwardRef((e, r) => {
    const t = Rn(Ke, e.__scopeDialog),
      { forceMount: o = t.forceMount, ...n } = e,
      a = Y(Ke, e.__scopeDialog);
    return a.modal ? _.jsx(Xe, { present: o || a.open, children: _.jsx(ls, { ...n, ref: r }) }) : null;
  });
An.displayName = Ke;
var ls = i.forwardRef((e, r) => {
    const { __scopeDialog: t, ...o } = e,
      n = Y(Ke, t);
    return _.jsx(yo, {
      as: tn,
      allowPinchZoom: !0,
      shards: [n.contentRef],
      children: _.jsx(G.div, { "data-state": Nt(n.open), ...o, ref: r, style: { pointerEvents: "auto", ...o.style } }),
    });
  }),
  de = "DialogContent",
  Mn = i.forwardRef((e, r) => {
    const t = Rn(de, e.__scopeDialog),
      { forceMount: o = t.forceMount, ...n } = e,
      a = Y(de, e.__scopeDialog);
    return _.jsx(Xe, { present: o || a.open, children: a.modal ? _.jsx(is, { ...n, ref: r }) : _.jsx(cs, { ...n, ref: r }) });
  });
Mn.displayName = de;
var is = i.forwardRef((e, r) => {
    const t = Y(de, e.__scopeDialog),
      o = i.useRef(null),
      n = He(r, t.contentRef, o);
    return (
      i.useEffect(() => {
        const a = o.current;
        if (a) return xo(a);
      }, []),
      _.jsx(_n, {
        ...e,
        ref: n,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ee(e.onCloseAutoFocus, (a) => {
          var l;
          a.preventDefault(), (l = t.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: Ee(e.onPointerDownOutside, (a) => {
          const l = a.detail.originalEvent,
            s = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: Ee(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  cs = i.forwardRef((e, r) => {
    const t = Y(de, e.__scopeDialog),
      o = i.useRef(!1),
      n = i.useRef(!1);
    return _.jsx(_n, {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var l, s;
        (l = e.onCloseAutoFocus) == null || l.call(e, a),
          a.defaultPrevented || (o.current || (s = t.triggerRef.current) == null || s.focus(), a.preventDefault()),
          (o.current = !1),
          (n.current = !1);
      },
      onInteractOutside: (a) => {
        var u, c;
        (u = e.onInteractOutside) == null || u.call(e, a),
          a.defaultPrevented || ((o.current = !0), a.detail.originalEvent.type === "pointerdown" && (n.current = !0));
        const l = a.target;
        ((c = t.triggerRef.current) == null ? void 0 : c.contains(l)) && a.preventDefault(),
          a.detail.originalEvent.type === "focusin" && n.current && a.preventDefault();
      },
    });
  }),
  _n = i.forwardRef((e, r) => {
    const { __scopeDialog: t, trapFocus: o, onOpenAutoFocus: n, onCloseAutoFocus: a, ...l } = e,
      s = Y(de, t),
      u = i.useRef(null),
      c = He(r, u);
    return (
      wo(),
      _.jsxs(_.Fragment, {
        children: [
          _.jsx(Eo, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: _.jsx(So, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Nt(s.open),
              ...l,
              ref: c,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          _.jsxs(_.Fragment, {
            children: [_.jsx(ps, { titleId: s.titleId }), _.jsx(gs, { contentRef: u, descriptionId: s.descriptionId })],
          }),
        ],
      })
    );
  }),
  Rt = "DialogTitle",
  ds = i.forwardRef((e, r) => {
    const { __scopeDialog: t, ...o } = e,
      n = Y(Rt, t);
    return _.jsx(G.h2, { id: n.titleId, ...o, ref: r });
  });
ds.displayName = Rt;
var Pn = "DialogDescription",
  us = i.forwardRef((e, r) => {
    const { __scopeDialog: t, ...o } = e,
      n = Y(Pn, t);
    return _.jsx(G.p, { id: n.descriptionId, ...o, ref: r });
  });
us.displayName = Pn;
var Tn = "DialogClose",
  ms = i.forwardRef((e, r) => {
    const { __scopeDialog: t, ...o } = e,
      n = Y(Tn, t);
    return _.jsx(G.button, { type: "button", ...o, ref: r, onClick: Ee(e.onClick, () => n.onOpenChange(!1)) });
  });
ms.displayName = Tn;
function Nt(e) {
  return e ? "open" : "closed";
}
var Dn = "DialogTitleWarning",
  [hl, On] = ts(Dn, { contentName: de, titleName: Rt, docsSlug: "dialog" }),
  ps = ({ titleId: e }) => {
    const r = On(Dn),
      t = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
    return (
      i.useEffect(() => {
        e && (document.getElementById(e) || console.error(t));
      }, [t, e]),
      null
    );
  },
  fs = "DialogDescriptionWarning",
  gs = ({ contentRef: e, descriptionId: r }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${On(fs).contentName}}.`;
    return (
      i.useEffect(() => {
        var a;
        const n = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
        r && n && (document.getElementById(r) || console.warn(o));
      }, [o, e, r]),
      null
    );
  },
  hs = kn,
  bs = Nn,
  vs = An,
  ys = Mn,
  Fn = { exports: {} },
  $n = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var he = i;
function xs(e, r) {
  return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
}
var ws = typeof Object.is == "function" ? Object.is : xs,
  Es = he.useState,
  Ss = he.useEffect,
  Cs = he.useLayoutEffect,
  ks = he.useDebugValue;
function Is(e, r) {
  var t = r(),
    o = Es({ inst: { value: t, getSnapshot: r } }),
    n = o[0].inst,
    a = o[1];
  return (
    Cs(
      function () {
        (n.value = t), (n.getSnapshot = r), tt(n) && a({ inst: n });
      },
      [e, t, r]
    ),
    Ss(
      function () {
        return (
          tt(n) && a({ inst: n }),
          e(function () {
            tt(n) && a({ inst: n });
          })
        );
      },
      [e]
    ),
    ks(t),
    t
  );
}
function tt(e) {
  var r = e.getSnapshot;
  e = e.value;
  try {
    var t = r();
    return !ws(e, t);
  } catch {
    return !0;
  }
}
function Rs(e, r) {
  return r();
}
var Ns = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Rs : Is;
$n.useSyncExternalStore = he.useSyncExternalStore !== void 0 ? he.useSyncExternalStore : Ns;
Fn.exports = $n;
var As = Fn.exports,
  we = '[cmdk-group=""]',
  rt = '[cmdk-group-items=""]',
  Ms = '[cmdk-group-heading=""]',
  At = '[cmdk-item=""]',
  Zt = `${At}:not([aria-disabled="true"])`,
  it = "cmdk-item-select",
  ce = "data-value",
  _s = (e, r, t) => es(e, r, t),
  jn = i.createContext(void 0),
  Ie = () => i.useContext(jn),
  zn = i.createContext(void 0),
  Mt = () => i.useContext(zn),
  Ln = i.createContext(void 0),
  Bn = i.forwardRef((e, r) => {
    let t = pe(() => {
        var f, S;
        return {
          search: "",
          value: (S = (f = e.value) != null ? f : e.defaultValue) != null ? S : "",
          filtered: { count: 0, items: new Map(), groups: new Set() },
        };
      }),
      o = pe(() => new Set()),
      n = pe(() => new Map()),
      a = pe(() => new Map()),
      l = pe(() => new Set()),
      s = Vn(e),
      {
        label: u,
        children: c,
        value: d,
        onValueChange: p,
        filter: g,
        shouldFilter: b,
        loop: h,
        disablePointerSelection: v = !1,
        vimBindings: y = !0,
        ...x
      } = e,
      R = ne(),
      O = ne(),
      P = ne(),
      E = i.useRef(null),
      k = Vs();
    ue(() => {
      if (d !== void 0) {
        let f = d.trim();
        (t.current.value = f), N.emit();
      }
    }, [d]),
      ue(() => {
        k(6, V);
      }, []);
    let N = i.useMemo(
        () => ({
          subscribe: (f) => (l.current.add(f), () => l.current.delete(f)),
          snapshot: () => t.current,
          setState: (f, S, M) => {
            var w, T, D;
            if (!Object.is(t.current[f], S)) {
              if (((t.current[f] = S), f === "search")) I(), W(), k(1, A);
              else if (f === "value" && (M || k(5, V), ((w = s.current) == null ? void 0 : w.value) !== void 0)) {
                let J = S ?? "";
                (D = (T = s.current).onValueChange) == null || D.call(T, J);
                return;
              }
              N.emit();
            }
          },
          emit: () => {
            l.current.forEach((f) => f());
          },
        }),
        []
      ),
      j = i.useMemo(
        () => ({
          value: (f, S, M) => {
            var w;
            S !== ((w = a.current.get(f)) == null ? void 0 : w.value) &&
              (a.current.set(f, { value: S, keywords: M }),
              t.current.filtered.items.set(f, B(S, M)),
              k(2, () => {
                W(), N.emit();
              }));
          },
          item: (f, S) => (
            o.current.add(f),
            S && (n.current.has(S) ? n.current.get(S).add(f) : n.current.set(S, new Set([f]))),
            k(3, () => {
              I(), W(), t.current.value || A(), N.emit();
            }),
            () => {
              a.current.delete(f), o.current.delete(f), t.current.filtered.items.delete(f);
              let M = z();
              k(4, () => {
                I(), (M == null ? void 0 : M.getAttribute("id")) === f && A(), N.emit();
              });
            }
          ),
          group: (f) => (
            n.current.has(f) || n.current.set(f, new Set()),
            () => {
              a.current.delete(f), n.current.delete(f);
            }
          ),
          filter: () => s.current.shouldFilter,
          label: u || e["aria-label"],
          getDisablePointerSelection: () => s.current.disablePointerSelection,
          listId: R,
          inputId: P,
          labelId: O,
          listInnerRef: E,
        }),
        []
      );
    function B(f, S) {
      var M, w;
      let T = (w = (M = s.current) == null ? void 0 : M.filter) != null ? w : _s;
      return f ? T(f, t.current.search, S) : 0;
    }
    function W() {
      if (!t.current.search || s.current.shouldFilter === !1) return;
      let f = t.current.filtered.items,
        S = [];
      t.current.filtered.groups.forEach((w) => {
        let T = n.current.get(w),
          D = 0;
        T.forEach((J) => {
          let ie = f.get(J);
          D = Math.max(ie, D);
        }),
          S.push([w, D]);
      });
      let M = E.current;
      H()
        .sort((w, T) => {
          var D, J;
          let ie = w.getAttribute("id"),
            Ne = T.getAttribute("id");
          return ((D = f.get(Ne)) != null ? D : 0) - ((J = f.get(ie)) != null ? J : 0);
        })
        .forEach((w) => {
          let T = w.closest(rt);
          T
            ? T.appendChild(w.parentElement === T ? w : w.closest(`${rt} > *`))
            : M.appendChild(w.parentElement === M ? w : w.closest(`${rt} > *`));
        }),
        S.sort((w, T) => T[1] - w[1]).forEach((w) => {
          var T;
          let D = (T = E.current) == null ? void 0 : T.querySelector(`${we}[${ce}="${encodeURIComponent(w[0])}"]`);
          D == null || D.parentElement.appendChild(D);
        });
    }
    function A() {
      let f = H().find((M) => M.getAttribute("aria-disabled") !== "true"),
        S = f == null ? void 0 : f.getAttribute(ce);
      N.setState("value", S || void 0);
    }
    function I() {
      var f, S, M, w;
      if (!t.current.search || s.current.shouldFilter === !1) {
        t.current.filtered.count = o.current.size;
        return;
      }
      t.current.filtered.groups = new Set();
      let T = 0;
      for (let D of o.current) {
        let J = (S = (f = a.current.get(D)) == null ? void 0 : f.value) != null ? S : "",
          ie = (w = (M = a.current.get(D)) == null ? void 0 : M.keywords) != null ? w : [],
          Ne = B(J, ie);
        t.current.filtered.items.set(D, Ne), Ne > 0 && T++;
      }
      for (let [D, J] of n.current)
        for (let ie of J)
          if (t.current.filtered.items.get(ie) > 0) {
            t.current.filtered.groups.add(D);
            break;
          }
      t.current.filtered.count = T;
    }
    function V() {
      var f, S, M;
      let w = z();
      w &&
        (((f = w.parentElement) == null ? void 0 : f.firstChild) === w &&
          ((M = (S = w.closest(we)) == null ? void 0 : S.querySelector(Ms)) == null || M.scrollIntoView({ block: "nearest" })),
        w.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      var f;
      return (f = E.current) == null ? void 0 : f.querySelector(`${At}[aria-selected="true"]`);
    }
    function H() {
      var f;
      return Array.from(((f = E.current) == null ? void 0 : f.querySelectorAll(Zt)) || []);
    }
    function X(f) {
      let S = H()[f];
      S && N.setState("value", S.getAttribute(ce));
    }
    function te(f) {
      var S;
      let M = z(),
        w = H(),
        T = w.findIndex((J) => J === M),
        D = w[T + f];
      (S = s.current) != null && S.loop && (D = T + f < 0 ? w[w.length - 1] : T + f === w.length ? w[0] : w[T + f]),
        D && N.setState("value", D.getAttribute(ce));
    }
    function Z(f) {
      let S = z(),
        M = S == null ? void 0 : S.closest(we),
        w;
      for (; M && !w; ) (M = f > 0 ? Ls(M, we) : Bs(M, we)), (w = M == null ? void 0 : M.querySelector(Zt));
      w ? N.setState("value", w.getAttribute(ce)) : te(f);
    }
    let Q = () => X(H().length - 1),
      le = (f) => {
        f.preventDefault(), f.metaKey ? Q() : f.altKey ? Z(1) : te(1);
      },
      q = (f) => {
        f.preventDefault(), f.metaKey ? X(0) : f.altKey ? Z(-1) : te(-1);
      };
    return i.createElement(
      G.div,
      {
        ref: r,
        tabIndex: -1,
        ...x,
        "cmdk-root": "",
        onKeyDown: (f) => {
          var S;
          if (((S = x.onKeyDown) == null || S.call(x, f), !f.defaultPrevented))
            switch (f.key) {
              case "n":
              case "j": {
                y && f.ctrlKey && le(f);
                break;
              }
              case "ArrowDown": {
                le(f);
                break;
              }
              case "p":
              case "k": {
                y && f.ctrlKey && q(f);
                break;
              }
              case "ArrowUp": {
                q(f);
                break;
              }
              case "Home": {
                f.preventDefault(), X(0);
                break;
              }
              case "End": {
                f.preventDefault(), Q();
                break;
              }
              case "Enter":
                if (!f.nativeEvent.isComposing && f.keyCode !== 229) {
                  f.preventDefault();
                  let M = z();
                  if (M) {
                    let w = new Event(it);
                    M.dispatchEvent(w);
                  }
                }
            }
        },
      },
      i.createElement("label", { "cmdk-label": "", htmlFor: j.inputId, id: j.labelId, style: Gs }, u),
      Ye(e, (f) => i.createElement(zn.Provider, { value: N }, i.createElement(jn.Provider, { value: j }, f)))
    );
  }),
  Ps = i.forwardRef((e, r) => {
    var t, o;
    let n = ne(),
      a = i.useRef(null),
      l = i.useContext(Ln),
      s = Ie(),
      u = Vn(e),
      c = (o = (t = u.current) == null ? void 0 : t.forceMount) != null ? o : l == null ? void 0 : l.forceMount;
    ue(() => {
      if (!c) return s.item(n, l == null ? void 0 : l.id);
    }, [c]);
    let d = Wn(n, a, [e.value, e.children, a], e.keywords),
      p = Mt(),
      g = me((k) => k.value && k.value === d.current),
      b = me((k) => (c || s.filter() === !1 ? !0 : k.search ? k.filtered.items.get(n) > 0 : !0));
    i.useEffect(() => {
      let k = a.current;
      if (!(!k || e.disabled)) return k.addEventListener(it, h), () => k.removeEventListener(it, h);
    }, [b, e.onSelect, e.disabled]);
    function h() {
      var k, N;
      v(), (N = (k = u.current).onSelect) == null || N.call(k, d.current);
    }
    function v() {
      p.setState("value", d.current, !0);
    }
    if (!b) return null;
    let { disabled: y, value: x, onSelect: R, forceMount: O, keywords: P, ...E } = e;
    return i.createElement(
      G.div,
      {
        ref: Ce([a, r]),
        ...E,
        id: n,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!y,
        "aria-selected": !!g,
        "data-disabled": !!y,
        "data-selected": !!g,
        onPointerMove: y || s.getDisablePointerSelection() ? void 0 : v,
        onClick: y ? void 0 : h,
      },
      e.children
    );
  }),
  Ts = i.forwardRef((e, r) => {
    let { heading: t, children: o, forceMount: n, ...a } = e,
      l = ne(),
      s = i.useRef(null),
      u = i.useRef(null),
      c = ne(),
      d = Ie(),
      p = me((b) => (n || d.filter() === !1 ? !0 : b.search ? b.filtered.groups.has(l) : !0));
    ue(() => d.group(l), []), Wn(l, s, [e.value, e.heading, u]);
    let g = i.useMemo(() => ({ id: l, forceMount: n }), [n]);
    return i.createElement(
      G.div,
      { ref: Ce([s, r]), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 },
      t && i.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, t),
      Ye(e, (b) =>
        i.createElement(
          "div",
          { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? c : void 0 },
          i.createElement(Ln.Provider, { value: g }, b)
        )
      )
    );
  }),
  Ds = i.forwardRef((e, r) => {
    let { alwaysRender: t, ...o } = e,
      n = i.useRef(null),
      a = me((l) => !l.search);
    return !t && !a ? null : i.createElement(G.div, { ref: Ce([n, r]), ...o, "cmdk-separator": "", role: "separator" });
  }),
  Os = i.forwardRef((e, r) => {
    let { onValueChange: t, ...o } = e,
      n = e.value != null,
      a = Mt(),
      l = me((d) => d.search),
      s = me((d) => d.value),
      u = Ie(),
      c = i.useMemo(() => {
        var d;
        let p = (d = u.listInnerRef.current) == null ? void 0 : d.querySelector(`${At}[${ce}="${encodeURIComponent(s)}"]`);
        return p == null ? void 0 : p.getAttribute("id");
      }, []);
    return (
      i.useEffect(() => {
        e.value != null && a.setState("search", e.value);
      }, [e.value]),
      i.createElement(G.input, {
        ref: r,
        ...o,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": u.listId,
        "aria-labelledby": u.labelId,
        "aria-activedescendant": c,
        id: u.inputId,
        type: "text",
        value: n ? e.value : l,
        onChange: (d) => {
          n || a.setState("search", d.target.value), t == null || t(d.target.value);
        },
      })
    );
  }),
  Fs = i.forwardRef((e, r) => {
    let { children: t, label: o = "Suggestions", ...n } = e,
      a = i.useRef(null),
      l = i.useRef(null),
      s = Ie();
    return (
      i.useEffect(() => {
        if (l.current && a.current) {
          let u = l.current,
            c = a.current,
            d,
            p = new ResizeObserver(() => {
              d = requestAnimationFrame(() => {
                let g = u.offsetHeight;
                c.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
              });
            });
          return (
            p.observe(u),
            () => {
              cancelAnimationFrame(d), p.unobserve(u);
            }
          );
        }
      }, []),
      i.createElement(
        G.div,
        { ref: Ce([a, r]), ...n, "cmdk-list": "", role: "listbox", "aria-label": o, id: s.listId },
        Ye(e, (u) => i.createElement("div", { ref: Ce([l, s.listInnerRef]), "cmdk-list-sizer": "" }, u))
      )
    );
  }),
  $s = i.forwardRef((e, r) => {
    let { open: t, onOpenChange: o, overlayClassName: n, contentClassName: a, container: l, ...s } = e;
    return i.createElement(
      hs,
      { open: t, onOpenChange: o },
      i.createElement(
        bs,
        { container: l },
        i.createElement(vs, { "cmdk-overlay": "", className: n }),
        i.createElement(ys, { "aria-label": e.label, "cmdk-dialog": "", className: a }, i.createElement(Bn, { ref: r, ...s }))
      )
    );
  }),
  js = i.forwardRef((e, r) =>
    me((t) => t.filtered.count === 0) ? i.createElement(G.div, { ref: r, ...e, "cmdk-empty": "", role: "presentation" }) : null
  ),
  zs = i.forwardRef((e, r) => {
    let { progress: t, children: o, label: n = "Loading...", ...a } = e;
    return i.createElement(
      G.div,
      {
        ref: r,
        ...a,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": t,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": n,
      },
      Ye(e, (l) => i.createElement("div", { "aria-hidden": !0 }, l))
    );
  }),
  K = Object.assign(Bn, { List: Fs, Item: Ps, Input: Os, Group: Ts, Separator: Ds, Dialog: $s, Empty: js, Loading: zs });
function Ls(e, r) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.nextElementSibling;
  }
}
function Bs(e, r) {
  let t = e.previousElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.previousElementSibling;
  }
}
function Vn(e) {
  let r = i.useRef(e);
  return (
    ue(() => {
      r.current = e;
    }),
    r
  );
}
var ue = typeof window > "u" ? i.useEffect : i.useLayoutEffect;
function pe(e) {
  let r = i.useRef();
  return r.current === void 0 && (r.current = e()), r;
}
function Ce(e) {
  return (r) => {
    e.forEach((t) => {
      typeof t == "function" ? t(r) : t != null && (t.current = r);
    });
  };
}
function me(e) {
  let r = Mt(),
    t = () => e(r.snapshot());
  return As.useSyncExternalStore(r.subscribe, t, t);
}
function Wn(e, r, t, o = []) {
  let n = i.useRef(),
    a = Ie();
  return (
    ue(() => {
      var l;
      let s = (() => {
          var c;
          for (let d of t) {
            if (typeof d == "string") return d.trim();
            if (typeof d == "object" && "current" in d)
              return d.current ? ((c = d.current.textContent) == null ? void 0 : c.trim()) : n.current;
          }
        })(),
        u = o.map((c) => c.trim());
      a.value(e, s, u), (l = r.current) == null || l.setAttribute(ce, s), (n.current = s);
    }),
    n
  );
}
var Vs = () => {
  let [e, r] = i.useState(),
    t = pe(() => new Map());
  return (
    ue(() => {
      t.current.forEach((o) => o()), (t.current = new Map());
    }, [e]),
    (o, n) => {
      t.current.set(o, n), r({});
    }
  );
};
function Ws(e) {
  let r = e.type;
  return typeof r == "function" ? r(e.props) : "render" in r ? r.render(e.props) : e;
}
function Ye({ asChild: e, children: r }, t) {
  return e && i.isValidElement(r) ? i.cloneElement(Ws(r), { ref: r.ref }, t(r.props.children)) : t(r);
}
var Gs = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
};
const _t = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(K, {
    ref: t,
    className: $("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
    ...r,
  })
);
_t.displayName = K.displayName;
const Pt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(
    "div",
    { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" },
    i.createElement(Go, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    i.createElement(K.Input, {
      ref: t,
      className: $(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...r,
    })
  )
);
Pt.displayName = K.Input.displayName;
const Tt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(K.List, { ref: t, className: $("max-h-[300px] overflow-y-auto overflow-x-hidden", e), ...r })
);
Tt.displayName = K.List.displayName;
const Dt = i.forwardRef((e, r) => i.createElement(K.Empty, { ref: r, className: "py-6 text-center text-sm", ...e }));
Dt.displayName = K.Empty.displayName;
const Ot = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(K.Group, {
    ref: t,
    className: $(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...r,
  })
);
Ot.displayName = K.Group.displayName;
const Ft = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(K.Separator, { ref: t, className: $("-mx-1 h-px bg-border", e), ...r })
);
Ft.displayName = K.Separator.displayName;
const $t = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement(K.Item, {
    ref: t,
    className: $(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...r,
  })
);
$t.displayName = K.Item.displayName;
_t.__docgenInfo = { description: "", methods: [] };
Dt.__docgenInfo = { description: "", methods: [] };
Ot.__docgenInfo = { description: "", methods: [] };
Pt.__docgenInfo = { description: "", methods: [] };
$t.__docgenInfo = { description: "", methods: [] };
Tt.__docgenInfo = { description: "", methods: [] };
Ft.__docgenInfo = { description: "", methods: [] };
const jt = i.forwardRef(({ className: e, ...r }, t) =>
  i.createElement("form", { ref: t, noValidate: !0, className: $("space-y-6", e), ...r })
);
jt.displayName = "Form";
jt.__docgenInfo = { description: "", methods: [], displayName: "Form" };
const zt = i.forwardRef(({ className: e, type: r, ...t }, o) =>
  i.createElement("input", {
    type: r,
    className: $(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm",
      e
    ),
    ref: o,
    ...t,
  })
);
zt.displayName = "Input";
zt.__docgenInfo = { description: "", methods: [], displayName: "Input" };
var qs = "Label",
  Gn = i.forwardRef((e, r) =>
    _.jsx(G.label, {
      ...e,
      ref: r,
      onMouseDown: (t) => {
        var n;
        t.target.closest("button, input, select, textarea") ||
          ((n = e.onMouseDown) == null || n.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    })
  );
Gn.displayName = qs;
var qn = Gn;
const Us = ke("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
  Lt = i.forwardRef(({ className: e, ...r }, t) => i.createElement(qn, { ref: t, className: $(Us(), e), ...r }));
Lt.displayName = qn.displayName;
Lt.__docgenInfo = { description: "", methods: [] };
const Ks = ko,
  Hs = Io,
  Xs = Ro,
  Bt = i.forwardRef(({ className: e, align: r = "center", sideOffset: t = 4, ...o }, n) =>
    i.createElement(
      No,
      null,
      i.createElement(nn, {
        ref: n,
        align: r,
        sideOffset: t,
        className: $(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e
        ),
        ...o,
      })
    )
  );
Bt.displayName = nn.displayName;
Bt.__docgenInfo = {
  description: "",
  methods: [],
  props: {
    align: { defaultValue: { value: '"center"', computed: !1 }, required: !1 },
    sideOffset: { defaultValue: { value: "4", computed: !1 }, required: !1 },
  },
};
const Js = ke("animate-pulse rounded-md bg-primary/10", {
    variants: { size: { sm: "h-4 w-16", md: "h-6 w-32", lg: "h-8 w-64" }, shape: { rectangle: "rounded-md", circle: "rounded-full" } },
    defaultVariants: { size: "md", shape: "rectangle" },
  }),
  Vt = m.forwardRef(({ className: e, size: r, shape: t, ...o }, n) =>
    m.createElement("div", { className: $(Js({ size: r, shape: t, className: e })), ref: n, ...o })
  );
Vt.displayName = "Skeleton";
Vt.__docgenInfo = { description: "", methods: [], displayName: "Skeleton" };
const Ys = 1,
  Zs = 1e6;
let nt = 0;
function Qs() {
  return (nt = (nt + 1) % Number.MAX_SAFE_INTEGER), nt.toString();
}
const ot = new Map(),
  Qt = (e) => {
    if (ot.has(e)) return;
    const r = setTimeout(() => {
      ot.delete(e), Ue({ type: "REMOVE_TOAST", toastId: e });
    }, Zs);
    ot.set(e, r);
  },
  el = (e, r) => {
    switch (r.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [r.toast, ...e.toasts].slice(0, Ys) };
      case "UPDATE_TOAST":
        return { ...e, toasts: e.toasts.map((t) => (t.id === r.toast.id ? { ...t, ...r.toast } : t)) };
      case "DISMISS_TOAST": {
        const { toastId: t } = r;
        return (
          t
            ? Qt(t)
            : e.toasts.forEach((o) => {
                Qt(o.id);
              }),
          { ...e, toasts: e.toasts.map((o) => (o.id === t || t === void 0 ? { ...o, open: !1 } : o)) }
        );
      }
      case "REMOVE_TOAST":
        return r.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((t) => t.id !== r.toastId) };
    }
  },
  tl = [];
let at = { toasts: [] };
function Ue(e) {
  (at = el(at, e)),
    tl.forEach((r) => {
      r(at);
    });
}
function rl({ ...e }) {
  const r = Qs(),
    t = (n) => Ue({ type: "UPDATE_TOAST", toast: { ...n, id: r } }),
    o = () => Ue({ type: "DISMISS_TOAST", toastId: r });
  return (
    Ue({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: r,
        open: !0,
        onOpenChange: (n) => {
          n || o();
        },
      },
    }),
    { id: r, dismiss: o, update: t }
  );
}
const Re = {
    Alert: pt,
    AlertDescription: gt,
    AlertTitle: ft,
    Badge: bn,
    Button: ht,
    Card: bt,
    CardContent: wt,
    CardDescription: xt,
    CardFooter: Et,
    CardHeader: vt,
    CardTitle: yt,
    Checkbox: Ct,
    Command: _t,
    CommandEmpty: Dt,
    CommandGroup: Ot,
    CommandInput: Pt,
    CommandItem: $t,
    CommandList: Tt,
    CommandSeparator: Ft,
    Popover: Ks,
    PopoverAnchor: Xs,
    PopoverContent: Bt,
    PopoverTrigger: Hs,
    Input: zt,
    Label: Lt,
    Form: jt,
    Skeleton: Vt,
    toast: rl,
    mergeClassNames: $,
  },
  nl = na(Re).AutoForm,
  fe = ln(Re),
  Un = cn(Re),
  bl = {
    title: "Shadcn/AutoForm",
    component: nl,
    decorators: [
      (e) =>
        m.createElement(
          "div",
          { style: { width: "600px", backgroundColor: "white" } },
          m.createElement(
            oo,
            { api: L },
            m.createElement(
              Qr,
              { ...ao() },
              m.createElement(
                so,
                null,
                m.createElement(Re.Card, { className: "p-6 w-full bg-white shadow-lg rounded-lg" }, m.createElement(e, null))
              )
            )
          )
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  Ae = { args: { action: L.widget.create } },
  Me = { args: { action: L.widget.createWithCustomParams } },
  _e = { args: { action: L.widget.update, findBy: "999" } },
  Pe = { args: { action: L.widget.updateWithCustomParams, findBy: "999" } },
  Te = { args: { action: L.widget.upsert, findBy: "1" } },
  De = { args: { action: L.widget.upsert } },
  Oe = { args: { action: L.widget.create, exclude: ["birthday", "roles", "name"] } },
  Fe = {
    args: {
      action: L.widget.create,
      exclude: ["name"],
      defaultValues: { widget: { name: "Name from default when there is no field input component" } },
    },
  },
  $e = { args: { action: L.widget.create, include: ["name"] } },
  je = {
    args: {
      action: L.widget.create,
      include: ["inventoryCount"],
      defaultValues: { widget: { name: "Name from default when there is no field input component" } },
    },
  },
  ol = () => {
    const [e, r] = i.useState(!1);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(Re.Button, { onClick: () => r(!e) }, e ? "Hide" : "Show", " other inputs"),
      e &&
        m.createElement(
          m.Fragment,
          null,
          m.createElement(fe, { field: "isChecked" }),
          m.createElement(fe, { field: "section" }),
          m.createElement(fe, { field: "gizmos" }),
          m.createElement(fe, { field: "customStringParam" })
        )
    );
  },
  Kn = () =>
    m.createElement(
      m.Fragment,
      null,
      m.createElement(fe, { field: "name" }),
      m.createElement(fe, { field: "inventoryCount" }),
      m.createElement(ol, null)
    ),
  ze = {
    args: {
      action: L.widget.updateWithCustomParams,
      findBy: "999",
      children: m.createElement(m.Fragment, null, m.createElement(Kn, null), m.createElement(Un, null)),
    },
  },
  Le = {
    args: {
      action: L.widget.updateWithCustomParams,
      select: {
        name: !0,
        inventoryCount: !0,
        isChecked: !0,
        sectionId: !0,
        section: { id: !0, name: !0 },
        gizmos: { edges: { node: { id: !0, name: !0 } } },
      },
      findBy: "999",
      children: m.createElement(m.Fragment, null, m.createElement(Kn, null), m.createElement(Un, null)),
    },
  },
  Be = { args: { action: L.game.city.update, findBy: "1" } },
  Ve = { args: { action: L.flipAll } },
  We = {
    name: "onSuccess callback",
    args: {
      action: L.widget.create,
      onSuccess: (e) => {
        window.alert(`Record created: ${JSON.stringify(e, null, 2)}`);
      },
    },
  },
  Ge = {
    name: "onFailure callback",
    args: {
      action: L.widget.alwaysThrowError,
      onFailure: (e) => {
        window.alert(`Error: ${e.message} (see console for details)`), console.error(e);
      },
    },
  },
  qe = { name: "HasManyThrough fields", args: { action: L.hasManyThrough.baseModel.create } };
var er, tr, rr;
Ae.parameters = {
  ...Ae.parameters,
  docs: {
    ...((er = Ae.parameters) == null ? void 0 : er.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create
  }
}`,
      ...((rr = (tr = Ae.parameters) == null ? void 0 : tr.docs) == null ? void 0 : rr.source),
    },
  },
};
var nr, or, ar;
Me.parameters = {
  ...Me.parameters,
  docs: {
    ...((nr = Me.parameters) == null ? void 0 : nr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.createWithCustomParams
  }
}`,
      ...((ar = (or = Me.parameters) == null ? void 0 : or.docs) == null ? void 0 : ar.source),
    },
  },
};
var sr, lr, ir;
_e.parameters = {
  ..._e.parameters,
  docs: {
    ...((sr = _e.parameters) == null ? void 0 : sr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.update,
    findBy: "999"
  }
}`,
      ...((ir = (lr = _e.parameters) == null ? void 0 : lr.docs) == null ? void 0 : ir.source),
    },
  },
};
var cr, dr, ur;
Pe.parameters = {
  ...Pe.parameters,
  docs: {
    ...((cr = Pe.parameters) == null ? void 0 : cr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999"
  }
}`,
      ...((ur = (dr = Pe.parameters) == null ? void 0 : dr.docs) == null ? void 0 : ur.source),
    },
  },
};
var mr, pr, fr;
Te.parameters = {
  ...Te.parameters,
  docs: {
    ...((mr = Te.parameters) == null ? void 0 : mr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.upsert,
    findBy: "1"
  }
}`,
      ...((fr = (pr = Te.parameters) == null ? void 0 : pr.docs) == null ? void 0 : fr.source),
    },
  },
};
var gr, hr, br;
De.parameters = {
  ...De.parameters,
  docs: {
    ...((gr = De.parameters) == null ? void 0 : gr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.upsert
  }
}`,
      ...((br = (hr = De.parameters) == null ? void 0 : hr.docs) == null ? void 0 : br.source),
    },
  },
};
var vr, yr, xr;
Oe.parameters = {
  ...Oe.parameters,
  docs: {
    ...((vr = Oe.parameters) == null ? void 0 : vr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"]
  }
}`,
      ...((xr = (yr = Oe.parameters) == null ? void 0 : yr.docs) == null ? void 0 : xr.source),
    },
  },
};
var wr, Er, Sr;
Fe.parameters = {
  ...Fe.parameters,
  docs: {
    ...((wr = Fe.parameters) == null ? void 0 : wr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,
      ...((Sr = (Er = Fe.parameters) == null ? void 0 : Er.docs) == null ? void 0 : Sr.source),
    },
  },
};
var Cr, kr, Ir;
$e.parameters = {
  ...$e.parameters,
  docs: {
    ...((Cr = $e.parameters) == null ? void 0 : Cr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"]
  }
}`,
      ...((Ir = (kr = $e.parameters) == null ? void 0 : kr.docs) == null ? void 0 : Ir.source),
    },
  },
};
var Rr, Nr, Ar;
je.parameters = {
  ...je.parameters,
  docs: {
    ...((Rr = je.parameters) == null ? void 0 : Rr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    include: ["inventoryCount"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,
      ...((Ar = (Nr = je.parameters) == null ? void 0 : Nr.docs) == null ? void 0 : Ar.source),
    },
  },
};
var Mr, _r, Pr;
ze.parameters = {
  ...ze.parameters,
  docs: {
    ...((Mr = ze.parameters) == null ? void 0 : Mr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
    children: <>
        <CustomComponentWithAutoInputs />
        <ShadcnAutoSubmit />
      </>
  }
}`,
      ...((Pr = (_r = ze.parameters) == null ? void 0 : _r.docs) == null ? void 0 : Pr.source),
    },
  },
};
var Tr, Dr, Or;
Le.parameters = {
  ...Le.parameters,
  docs: {
    ...((Tr = Le.parameters) == null ? void 0 : Tr.docs),
    source: {
      originalSource: `{
  // The explicit select for the conditionally rendered AutoInputs will prevent additional lookups in the useActionForm findBy
  args: {
    action: api.widget.updateWithCustomParams,
    select: {
      name: true,
      inventoryCount: true,
      isChecked: true,
      sectionId: true,
      section: {
        id: true,
        name: true
      },
      gizmos: {
        edges: {
          node: {
            id: true,
            name: true
          }
        }
      }
    },
    findBy: "999",
    children: <>
        <CustomComponentWithAutoInputs />
        <ShadcnAutoSubmit />
      </>
  }
}`,
      ...((Or = (Dr = Le.parameters) == null ? void 0 : Dr.docs) == null ? void 0 : Or.source),
    },
  },
};
var Fr, $r, jr;
Be.parameters = {
  ...Be.parameters,
  docs: {
    ...((Fr = Be.parameters) == null ? void 0 : Fr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.game.city.update,
    findBy: "1"
  }
}`,
      ...((jr = ($r = Be.parameters) == null ? void 0 : $r.docs) == null ? void 0 : jr.source),
    },
  },
};
var zr, Lr, Br;
Ve.parameters = {
  ...Ve.parameters,
  docs: {
    ...((zr = Ve.parameters) == null ? void 0 : zr.docs),
    source: {
      originalSource: `{
  args: {
    action: api.flipAll
  }
}`,
      ...((Br = (Lr = Ve.parameters) == null ? void 0 : Lr.docs) == null ? void 0 : Br.source),
    },
  },
};
var Vr, Wr, Gr;
We.parameters = {
  ...We.parameters,
  docs: {
    ...((Vr = We.parameters) == null ? void 0 : Vr.docs),
    source: {
      originalSource: `{
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: record => {
      // eslint-disable-next-line no-undef
      window.alert(\`Record created: \${JSON.stringify(record, null, 2)}\`);
    }
  }
}`,
      ...((Gr = (Wr = We.parameters) == null ? void 0 : Wr.docs) == null ? void 0 : Gr.source),
    },
  },
};
var qr, Ur, Kr;
Ge.parameters = {
  ...Ge.parameters,
  docs: {
    ...((qr = Ge.parameters) == null ? void 0 : qr.docs),
    source: {
      originalSource: `{
  name: "onFailure callback",
  args: {
    action: api.widget.alwaysThrowError,
    onFailure: error => {
      // eslint-disable-next-line no-undef
      window.alert(\`Error: \${error.message} (see console for details)\`);
      // eslint-disable-next-line no-undef
      console.error(error);
    }
  }
}`,
      ...((Kr = (Ur = Ge.parameters) == null ? void 0 : Ur.docs) == null ? void 0 : Kr.source),
    },
  },
};
var Hr, Xr, Jr;
qe.parameters = {
  ...qe.parameters,
  docs: {
    ...((Hr = qe.parameters) == null ? void 0 : Hr.docs),
    source: {
      originalSource: `{
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create
  }
}`,
      ...((Jr = (Xr = qe.parameters) == null ? void 0 : Xr.docs) == null ? void 0 : Jr.source),
    },
  },
};
const vl = [
  "Primary",
  "CreateWithCustomParams",
  "UpdateRecord",
  "UpdateRecordWithCustomParams",
  "UpsertRecordWithFindBy",
  "UpsertRecordWithoutFindBy",
  "Excluded",
  "ExcludedWithDefaultValues",
  "Included",
  "IncludedWithDefaultValues",
  "Expanded",
  "ExpandedWithExplicitSelect",
  "Namespaced",
  "GlobalAction",
  "onSuccessCallback",
  "onFailureCallback",
  "hasManyThrough",
];
export {
  Me as CreateWithCustomParams,
  Oe as Excluded,
  Fe as ExcludedWithDefaultValues,
  ze as Expanded,
  Le as ExpandedWithExplicitSelect,
  Ve as GlobalAction,
  $e as Included,
  je as IncludedWithDefaultValues,
  Be as Namespaced,
  Ae as Primary,
  _e as UpdateRecord,
  Pe as UpdateRecordWithCustomParams,
  Te as UpsertRecordWithFindBy,
  De as UpsertRecordWithoutFindBy,
  vl as __namedExportsOrder,
  bl as default,
  qe as hasManyThrough,
  Ge as onFailureCallback,
  We as onSuccessCallback,
};
