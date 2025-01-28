import { P as B, C as G } from "./Page-061ebe36.js";
import "./Pagination-e176776e.js";
import { P as S } from "./PolarisAutoForm-401e2485.js";
import { F as M, u as W, P as h, t as o } from "./apis-0c1c184f.js";
import { A as y } from "./dateTimeUtils-a817f99d.js";
import { t as v } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as r } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const D = {
    title: "Polaris/AutoForm/Errors",
    component: S,
    decorators: [
      (F) =>
        r.createElement(
          h,
          { api: o },
          r.createElement(
            y,
            { i18n: v },
            r.createElement(M, { ...W() }, r.createElement(B, null, r.createElement(G, null, r.createElement(F, null))))
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
var T, P, f;
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
      ...((f = (P = s.parameters) == null ? void 0 : P.docs) == null ? void 0 : f.source),
    },
  },
};
var E, b, C;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((E = i.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    action: api.noTriggerGlobalAction
  }
}`,
      ...((C = (b = i.parameters) == null ? void 0 : b.docs) == null ? void 0 : C.source),
    },
  },
};
const H = [
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
  H as __namedExportsOrder,
  D as default,
};
