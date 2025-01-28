import { P, C as f } from "./Page-061ebe36.js";
import "./Pagination-e176776e.js";
import { P as l, i as u } from "./PolarisAutoForm-401e2485.js";
import { u as c, P as i, t as m, F as p } from "./apis-0c1c184f.js";
import { A as d } from "./dateTimeUtils-a817f99d.js";
import { t as n } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as e } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const E = (t) =>
    e.createElement(l, { action: m.widget.create }, e.createElement(P, null, e.createElement(f, null, e.createElement(u, { ...t })))),
  w = {
    title: "Polaris/StringInput",
    component: E,
    decorators: [
      (t, { parameters: g }) =>
        e.createElement(i, { api: m }, e.createElement(d, { i18n: n }, e.createElement(p, { ...c() }, e.createElement(t, null)))),
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
const O = ["Primary"];
export { r as Primary, O as __namedExportsOrder, w as default };
