import "../sb-preview/runtime.js";
import { f as E, P as f } from "./PolarisAutoForm-e187dbdc.js";
import { u as P, t as c, A as d, P as g, F as u } from "./apis-d6201c92.js";
import { t as p } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const h = (o) => e.createElement(f, { action: c.widget.create }, e.createElement(E, { ...o })),
  k = {
    title: "Polaris/BooleanInput",
    component: h,
    decorators: [
      (o, { parameters: A }) =>
        e.createElement(d, { i18n: p }, e.createElement(u, { ...P() }, e.createElement(g, { api: c }, e.createElement(o, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "isChecked" } },
  a = { args: { ...r.args, label: "I agree to do something", labelHidden: !1 } };
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
a.parameters = {
  ...a.parameters,
  docs: {
    ...((i = a.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    ...Primary.args,
    label: "I agree to do something",
    labelHidden: false
  }
}`,
      ...((l = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : l.source),
    },
  },
};
const x = ["Primary", "WithPolarisCustomProperties"];
export { r as Primary, a as WithPolarisCustomProperties, x as __namedExportsOrder, k as default };
