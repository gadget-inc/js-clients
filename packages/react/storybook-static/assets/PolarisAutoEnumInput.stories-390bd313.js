import "../sb-preview/runtime.js";
import { C as A, P as f } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { P as E, c as g } from "./PolarisAutoForm-e187dbdc.js";
import { u as P, F as d, t as l, P as p, A as u } from "./apis-d6201c92.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const y = ({ field: a }) =>
    e.createElement(
      E,
      { action: l.game.stadium.create },
      e.createElement(f, null, e.createElement(A, null, e.createElement(g, { field: a })))
    ),
  b = {
    title: "Polaris/EnumInput",
    component: y,
    decorators: [
      (a, { parameters: F }) =>
        e.createElement(p, { api: l }, e.createElement(u, null, e.createElement(d, { ...P() }, e.createElement(a, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "type" } },
  t = { args: { field: "tags" } };
var o, s, m;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    field: "type"
  }
}`,
      ...((m = (s = r.parameters) == null ? void 0 : s.docs) == null ? void 0 : m.source),
    },
  },
};
var n, c, i;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    field: "tags"
  }
}`,
      ...((i = (c = t.parameters) == null ? void 0 : c.docs) == null ? void 0 : i.source),
    },
  },
};
const h = ["Primary", "MultiSelect"];
export { t as MultiSelect, r as Primary, h as __namedExportsOrder, b as default };
