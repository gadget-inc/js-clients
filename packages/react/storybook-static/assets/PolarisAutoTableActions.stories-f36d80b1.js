import "../sb-preview/runtime.js";
import "./Pagination-bb3280d2.js";
import { P as v, L as x } from "./PolarisAutoTable-2df7ca9c.js";
import { S as k } from "./StorybookErrorBoundary-83104d8c.js";
import "./_commonjs-dynamic-modules-c617d3ef.js";
import { P as E, b as N, A as T, t as s, a as w } from "./apis-d6201c92.js";
import { t as S } from "./en-a85f1ff1.js";
import "./extends-98964cd2.js";
import "./iframe-5aa777a6.js";
import { R as o } from "./index-c6dae603.js";
import "./index-eb008d06.js";
const j = {
    title: "Polaris/AutoTable/ActionParameters",
    component: v,
    decorators: [
      (e) =>
        o.createElement(
          E,
          { api: s },
          o.createElement(
            T,
            { i18n: S },
            o.createElement(
              "div",
              { style: { width: "100%" } },
              o.createElement(
                w,
                { paddingBlockEnd: "400" },
                o.createElement(N, { gap: "200" }, o.createElement(x, null, o.createElement(k, null, o.createElement(e, null))))
              )
            )
          )
        ),
    ],
  },
  r = {
    args: {
      model: s.autoTableTest,
      actions: [
        "delete",
        "customAction",
        { label: "Alternate action label", action: "customAction" },
        { label: "Sum Nums callback", promoted: !1, action: (e) => n(`Sum of record "num" values: ${c(e)}`) },
        { label: "Sum Nums promoted", promoted: !0, action: (e) => n(`Sum of record "num" values: ${c(e)}`) },
      ],
    },
  },
  t = { args: { model: s.autoTableTest, excludeActions: ["delete"] } },
  a = { args: { model: s.shopifyProductVariant } },
  n = (e) => {
    window.alert(e);
  },
  c = (e) => e.reduce((f, P) => f + (P.num ?? 0), 0);
var l, m, i;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((l = r.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    model: api.autoTableTest,
    actions: ["delete", "customAction", {
      label: "Alternate action label",
      action: "customAction"
    }, {
      label: "Sum Nums callback",
      promoted: false,
      action: records => windowAlert(\`Sum of record "num" values: \${sumRecordNumValues(records)}\`)
    }, {
      label: "Sum Nums promoted",
      promoted: true,
      action: records => windowAlert(\`Sum of record "num" values: \${sumRecordNumValues(records)}\`)
    }]
  }
}`,
      ...((i = (m = r.parameters) == null ? void 0 : m.docs) == null ? void 0 : i.source),
    },
  },
};
var u, d, p;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((u = t.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    model: api.autoTableTest,
    excludeActions: ["delete"]
  }
}`,
      ...((p = (d = t.parameters) == null ? void 0 : d.docs) == null ? void 0 : p.source),
    },
  },
};
var A, b, g;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((A = a.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  args: {
    model: api.shopifyProductVariant
  }
}`,
      ...((g = (b = a.parameters) == null ? void 0 : b.docs) == null ? void 0 : g.source),
    },
  },
};
const q = ["IncludedActionParameters", "ExcludedActionParameters", "NoTriggerableActions"];
export { t as ExcludedActionParameters, r as IncludedActionParameters, a as NoTriggerableActions, q as __namedExportsOrder, j as default };
