import { P as A, C as x } from "./Page-061ebe36.js";
import "./Pagination-e176776e.js";
import { P as S } from "./PolarisAutoForm-401e2485.js";
import { F as E, u as P, P as U, t as n } from "./apis-0c1c184f.js";
import { A as M } from "./dateTimeUtils-a817f99d.js";
import { t as f } from "./en-a85f1ff1.js";
import "./iframe-35b6cbe2.js";
import "./index-363833c6.js";
import { R as e } from "./index-7c191284.js";
import "./useAction-f9651b8b.js";
import "./useResultBannerController-cd95b20f.js";
const k = {
    title: "Polaris/AutoForm/FindByUniqueField",
    component: S,
    decorators: [
      (y) =>
        e.createElement(
          U,
          { api: n },
          e.createElement(
            M,
            { i18n: f },
            e.createElement(E, { ...P() }, e.createElement(A, null, e.createElement(x, null, e.createElement(y, null))))
          )
        ),
    ],
  },
  i = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueString: "u1" } } },
  r = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueBelongsTo: "22" } } },
  a = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueEmail: "u3@email.com" } } },
  o = { args: { action: n.uniqueFields.mainModel.update, findBy: { nonUniqueString: "example" } } };
var t, s, u;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((t = i.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      uniqueString: "u1"
    }
  }
}`,
      ...((u = (s = i.parameters) == null ? void 0 : s.docs) == null ? void 0 : u.source),
    },
  },
};
var d, m, l;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((d = r.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      uniqueBelongsTo: "22"
    }
  }
}`,
      ...((l = (m = r.parameters) == null ? void 0 : m.docs) == null ? void 0 : l.source),
    },
  },
};
var c, p, F;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      uniqueEmail: "u3@email.com"
    }
  }
}`,
      ...((F = (p = a.parameters) == null ? void 0 : p.docs) == null ? void 0 : F.source),
    },
  },
};
var q, g, B;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((q = o.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      nonUniqueString: "example"
    }
  }
}`,
      ...((B = (g = o.parameters) == null ? void 0 : g.docs) == null ? void 0 : B.source),
    },
  },
};
const w = ["FindByUniqueString", "FindByUniqueBelongsTo", "FindByUniqueEmail", "FindByNonIUniqueField"];
export {
  o as FindByNonIUniqueField,
  r as FindByUniqueBelongsTo,
  a as FindByUniqueEmail,
  i as FindByUniqueString,
  w as __namedExportsOrder,
  k as default,
};
