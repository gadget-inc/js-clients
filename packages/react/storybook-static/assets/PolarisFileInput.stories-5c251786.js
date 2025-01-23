import "../sb-preview/runtime.js";
import { g as d, P as u } from "./PolarisAutoForm-e187dbdc.js";
import { u as c, P as l, t as m, A as n, F as p } from "./apis-d6201c92.js";
import { t as i } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const P = (t) => e.createElement(u, { action: m.game.stadium.create }, e.createElement(d, { ...t })),
  h = {
    title: "Polaris/FileInput",
    component: P,
    decorators: [
      (t, { parameters: f }) =>
        e.createElement(n, { i18n: i }, e.createElement(p, { ...c() }, e.createElement(l, { api: m }, e.createElement(t, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "photo" } };
var o, a, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    field: "photo"
  }
}`,
      ...((s = (a = r.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source),
    },
  },
};
const x = ["Primary"];
export { r as Primary, x as __namedExportsOrder, h as default };
