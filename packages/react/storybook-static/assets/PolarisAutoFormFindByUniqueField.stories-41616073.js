import "../sb-preview/runtime.js";
import { P as A, C as x } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { P as M } from "./PolarisAutoForm-e187dbdc.js";
import { A as E, F as P, u as S, P as U, t as n } from "./apis-d6201c92.js";
import { t as f } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const j = {
    title: "Polaris/AutoForm/FindByUniqueField",
    component: M,
    decorators: [
      (y) =>
        e.createElement(
          U,
          { api: n },
          e.createElement(
            E,
            { i18n: f },
            e.createElement(P, { ...S() }, e.createElement(A, null, e.createElement(x, null, e.createElement(y, null))))
          )
        ),
    ],
  },
  i = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueString: "u1" } } },
  a = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueBelongsTo: "22" } } },
  r = { args: { action: n.uniqueFields.mainModel.update, findBy: { uniqueEmail: "u3@email.com" } } },
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
a.parameters = {
  ...a.parameters,
  docs: {
    ...((d = a.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      uniqueBelongsTo: "22"
    }
  }
}`,
      ...((l = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : l.source),
    },
  },
};
var c, p, F;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((c = r.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    action: api.uniqueFields.mainModel.update,
    findBy: {
      uniqueEmail: "u3@email.com"
    }
  }
}`,
      ...((F = (p = r.parameters) == null ? void 0 : p.docs) == null ? void 0 : F.source),
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
const k = ["FindByUniqueString", "FindByUniqueBelongsTo", "FindByUniqueEmail", "FindByNonIUniqueField"];
export {
  o as FindByNonIUniqueField,
  a as FindByUniqueBelongsTo,
  r as FindByUniqueEmail,
  i as FindByUniqueString,
  k as __namedExportsOrder,
  j as default,
};
