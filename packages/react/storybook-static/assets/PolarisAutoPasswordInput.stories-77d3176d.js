import { P as C, C as F } from "./Page-061ebe36.js";
import "./Pagination-e176776e.js";
import { a as A, P as E, d as f, e as g } from "./PolarisAutoForm-401e2485.js";
import { u as P, F as d, t as s, P as u } from "./apis-0c1c184f.js";
import { A as w } from "./dateTimeUtils-a817f99d.js";
import { t as l } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as e } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const h = {
    title: "Polaris/AutoPasswordInput",
    component: (a) =>
      e.createElement(E, { ...a }, e.createElement(f, null), e.createElement(g, { field: "password" }), e.createElement(A, null)),
    decorators: [
      (a) =>
        e.createElement(
          u,
          { api: s },
          e.createElement(
            w,
            { i18n: l },
            e.createElement(d, { ...P() }, e.createElement(C, null, e.createElement(F, null, e.createElement(a, null))))
          )
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { action: s.user.signUp } },
  t = { args: { action: s.user.update, findBy: "1" } };
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
t.parameters = {
  ...t.parameters,
  docs: {
    ...((m = t.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    action: api.user.update,
    findBy: "1"
  }
}`,
      ...((c = (p = t.parameters) == null ? void 0 : p.docs) == null ? void 0 : c.source),
    },
  },
};
const j = ["Create", "Update"];
export { r as Create, t as Update, j as __namedExportsOrder, h as default };
