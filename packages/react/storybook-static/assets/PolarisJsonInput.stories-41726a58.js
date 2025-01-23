import "../sb-preview/runtime.js";
import { P as d, h as u } from "./PolarisAutoForm-e187dbdc.js";
import { F as c, P as i, u as l, t as m, A as p } from "./apis-d6201c92.js";
import { t as n } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const P = (t) => e.createElement(d, { action: m.widget.create }, e.createElement(u, { ...t })),
  _ = {
    title: "Polaris/JsonInput",
    component: P,
    decorators: [
      (t, { parameters: f }) =>
        e.createElement(i, { api: m }, e.createElement(p, { i18n: n }, e.createElement(c, { ...l() }, e.createElement(t, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "metafields" } };
var a, o, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((a = r.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    field: "metafields"
  }
}`,
      ...((s = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source),
    },
  },
};
const x = ["Primary"];
export { r as Primary, x as __namedExportsOrder, _ as default };
