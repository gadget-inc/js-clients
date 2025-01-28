import { h as d, P as l } from "./PolarisAutoForm-401e2485.js";
import { u as c, P as i, t as m, F as p } from "./apis-0c1c184f.js";
import { A as u } from "./dateTimeUtils-a817f99d.js";
import { t as n } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as r } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const P = (t) => r.createElement(l, { action: m.widget.create }, r.createElement(d, { ...t })),
  x = {
    title: "Polaris/JsonInput",
    component: P,
    decorators: [
      (t, { parameters: f }) =>
        r.createElement(i, { api: m }, r.createElement(u, { i18n: n }, r.createElement(p, { ...c() }, r.createElement(t, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  e = { args: { field: "metafields" } };
var o, a, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    field: "metafields"
  }
}`,
      ...((s = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source),
    },
  },
};
const O = ["Primary"];
export { e as Primary, O as __namedExportsOrder, x as default };
