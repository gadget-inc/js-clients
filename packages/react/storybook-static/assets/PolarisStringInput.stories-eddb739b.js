import "../sb-preview/runtime.js";
import { C as E, P } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { i as d, P as u } from "./PolarisAutoForm-e187dbdc.js";
import { A as c, P as i, u as l, t as m, F as p } from "./apis-d6201c92.js";
import { t as n } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const f = (t) =>
    e.createElement(u, { action: m.widget.create }, e.createElement(P, null, e.createElement(E, null, e.createElement(d, { ...t })))),
  R = {
    title: "Polaris/StringInput",
    component: f,
    decorators: [
      (t, { parameters: g }) =>
        e.createElement(i, { api: m }, e.createElement(c, { i18n: n }, e.createElement(p, { ...l() }, e.createElement(t, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "secretKey" } };
var a, o, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((a = r.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    field: "secretKey"
  }
}`,
      ...((s = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source),
    },
  },
};
const w = ["Primary"];
export { r as Primary, w as __namedExportsOrder, R as default };
