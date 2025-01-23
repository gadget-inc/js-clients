import "../sb-preview/runtime.js";
import { P as B, C as G } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { P as y } from "./PolarisAutoForm-e187dbdc.js";
import { A as M, u as S, F as W, P as h, t as o } from "./apis-d6201c92.js";
import { t as v } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as r } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const z = {
    title: "Polaris/AutoForm/Errors",
    component: y,
    decorators: [
      (F) =>
        r.createElement(
          h,
          { api: o },
          r.createElement(
            M,
            { i18n: v },
            r.createElement(W, { ...S() }, r.createElement(B, null, r.createElement(G, null, r.createElement(F, null))))
          )
        ),
    ],
  },
  a = { args: { action: o.autoTableTest.invalidAction } },
  e = { args: {} },
  t = { args: { findBy: "1", action: o.autoTableTest.updateWithCustomParams } },
  s = { args: { findBy: "70", action: o.autoTableTest.noTriggerAction } },
  i = { args: { action: o.noTriggerGlobalAction } };
var n, c, m;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((n = a.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    action: api.autoTableTest.invalidAction
  }
}`,
      ...((m = (c = a.parameters) == null ? void 0 : c.docs) == null ? void 0 : m.source),
    },
  },
};
var l, p, u;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((u = (p = e.parameters) == null ? void 0 : p.docs) == null ? void 0 : u.source),
    },
  },
};
var d, g, A;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((d = t.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    findBy: "1",
    action: api.autoTableTest.updateWithCustomParams
  }
}`,
      ...((A = (g = t.parameters) == null ? void 0 : g.docs) == null ? void 0 : A.source),
    },
  },
};
var T, P, E;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((T = s.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    findBy: "70",
    action: api.autoTableTest.noTriggerAction
  }
}`,
      ...((E = (P = s.parameters) == null ? void 0 : P.docs) == null ? void 0 : E.source),
    },
  },
};
var b, f, C;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((b = i.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    action: api.noTriggerGlobalAction
  }
}`,
      ...((C = (f = i.parameters) == null ? void 0 : f.docs) == null ? void 0 : C.source),
    },
  },
};
const D = [
  "InvalidModelAction",
  "MissingActionProp",
  "FieldNameCustomParamCollisionError",
  "ModelActionWithoutApiTrigger",
  "GlobalActionWithoutApiTrigger",
];
export {
  t as FieldNameCustomParamCollisionError,
  i as GlobalActionWithoutApiTrigger,
  a as InvalidModelAction,
  e as MissingActionProp,
  s as ModelActionWithoutApiTrigger,
  D as __namedExportsOrder,
  z as default,
};
