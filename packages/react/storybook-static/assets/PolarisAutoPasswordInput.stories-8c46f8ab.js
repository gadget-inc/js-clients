import "../sb-preview/runtime.js";
import { P as C, C as F } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { e as A, d as f, P as g, a as w } from "./PolarisAutoForm-e187dbdc.js";
import { u as E, F as P, A as d, t as s, P as u } from "./apis-d6201c92.js";
import { t as l } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const O = {
    title: "Polaris/AutoPasswordInput",
    component: (t) =>
      e.createElement(g, { ...t }, e.createElement(f, null), e.createElement(A, { field: "password" }), e.createElement(w, null)),
    decorators: [
      (t) =>
        e.createElement(
          u,
          { api: s },
          e.createElement(
            d,
            { i18n: l },
            e.createElement(P, { ...E() }, e.createElement(C, null, e.createElement(F, null, e.createElement(t, null))))
          )
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { action: s.user.signUp } },
  a = { args: { action: s.user.update, findBy: "1" } };
var o, n, i;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    action: api.user.signUp
  }
}`,
      ...((i = (n = r.parameters) == null ? void 0 : n.docs) == null ? void 0 : i.source),
    },
  },
};
var m, p, c;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    action: api.user.update,
    findBy: "1"
  }
}`,
      ...((c = (p = a.parameters) == null ? void 0 : p.docs) == null ? void 0 : c.source),
    },
  },
};
const h = ["Create", "Update"];
export { r as Create, a as Update, h as __namedExportsOrder, O as default };
