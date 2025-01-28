import { C as A, P as f } from "./Page-061ebe36.js";
import "./Pagination-e176776e.js";
import { c as E, P } from "./PolarisAutoForm-401e2485.js";
import { u as d, t as l, P as p, F as u } from "./apis-0c1c184f.js";
import { A as g } from "./dateTimeUtils-a817f99d.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as e } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const y = ({ field: a }) =>
    e.createElement(
      P,
      { action: l.game.stadium.create },
      e.createElement(f, null, e.createElement(A, null, e.createElement(E, { field: a })))
    ),
  h = {
    title: "Polaris/EnumInput",
    component: y,
    decorators: [
      (a, { parameters: F }) =>
        e.createElement(p, { api: l }, e.createElement(g, null, e.createElement(u, { ...d() }, e.createElement(a, null)))),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  r = { args: { field: "type" } },
  t = { args: { field: "tags" } };
var o, s, m;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    field: "type"
  }
}`,
      ...((m = (s = r.parameters) == null ? void 0 : s.docs) == null ? void 0 : m.source),
    },
  },
};
var n, c, i;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    field: "tags"
  }
}`,
      ...((i = (c = t.parameters) == null ? void 0 : c.docs) == null ? void 0 : i.source),
    },
  },
};
const j = ["Primary", "MultiSelect"];
export { t as MultiSelect, r as Primary, j as __namedExportsOrder, h as default };
