import { P as l, g as u } from "./PolarisAutoForm-401e2485.js";
import { P as c, t as m, F as n, u as p } from "./apis-0c1c184f.js";
import { A as d } from "./dateTimeUtils-a817f99d.js";
import { t as i } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as r } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const P = (t) => r.createElement(l, { action: m.game.stadium.create }, r.createElement(u, { ...t })),
  x = {
    title: "Polaris/FileInput",
    component: P,
    decorators: [
      (t, { parameters: f }) =>
        r.createElement(d, { i18n: i }, r.createElement(n, { ...p() }, r.createElement(c, { api: m }, r.createElement(t, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  e = { args: { field: "photo" } };
var o, a, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    field: "photo"
  }
}`,
      ...((s = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source),
    },
  },
};
const R = ["Primary"];
export { e as Primary, R as __namedExportsOrder, x as default };
