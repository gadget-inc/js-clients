import { f, P as g } from "./PolarisAutoForm-401e2485.js";
import { P, t as c, F as d, u } from "./apis-0c1c184f.js";
import { A as E } from "./dateTimeUtils-a817f99d.js";
import { t as p } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as e } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const h = (a) => e.createElement(g, { action: c.widget.create }, e.createElement(f, { ...a })),
  x = {
    title: "Polaris/BooleanInput",
    component: h,
    decorators: [
      (a, { parameters: A }) =>
        e.createElement(E, { i18n: p }, e.createElement(d, { ...u() }, e.createElement(P, { api: c }, e.createElement(a, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "isChecked" } },
  o = { args: { ...r.args, label: "I agree to do something", labelHidden: !1 } };
var t, s, n;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    field: "isChecked"
  }
}`,
      ...((n = (s = r.parameters) == null ? void 0 : s.docs) == null ? void 0 : n.source),
    },
  },
};
var i, m, l;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((i = o.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    ...Primary.args,
    label: "I agree to do something",
    labelHidden: false
  }
}`,
      ...((l = (m = o.parameters) == null ? void 0 : m.docs) == null ? void 0 : l.source),
    },
  },
};
const H = ["Primary", "WithPolarisCustomProperties"];
export { r as Primary, o as WithPolarisCustomProperties, H as __namedExportsOrder, x as default };
