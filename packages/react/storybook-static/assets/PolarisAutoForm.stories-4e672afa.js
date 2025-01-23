import "../sb-preview/runtime.js";
import { C as We, P as xe } from "./Page-b573f6f0.js";
import "./Pagination-bb3280d2.js";
import { a as Pe, P as be, b as t } from "./PolarisAutoForm-e187dbdc.js";
import { S as Fe } from "./StorybookErrorBoundary-83104d8c.js";
import { B as Ce, F as Ee, u as Se, t as a, P as we, A as ye } from "./apis-d6201c92.js";
import { t as he } from "./en-a85f1ff1.js";
import "./iframe-5aa777a6.js";
import { R as e, r as fe } from "./index-c6dae603.js";
import "./index-eb008d06.js";
import "./useAction-e2e8ce4c.js";
const He = {
    title: "Polaris/AutoForm",
    component: be,
    decorators: [
      (r) =>
        e.createElement(
          we,
          { api: a },
          e.createElement(
            ye,
            { i18n: he },
            e.createElement(
              Ee,
              { ...Se() },
              e.createElement(xe, null, e.createElement(We, null, e.createElement(Fe, null, e.createElement(r, null))))
            )
          )
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
  },
  n = { args: { action: a.widget.create } },
  o = { args: { action: a.widget.createWithCustomParams } },
  s = { args: { action: a.widget.update, findBy: "999" } },
  c = { args: { action: a.widget.updateWithCustomParams, findBy: "999" } },
  i = { args: { action: a.widget.upsert, findBy: "1" } },
  d = { args: { action: a.widget.upsert } },
  l = { args: { action: a.widget.create, exclude: ["birthday", "roles", "name"] } },
  u = {
    args: {
      action: a.widget.create,
      exclude: ["name"],
      defaultValues: { widget: { name: "Name from default when there is no field input component" } },
    },
  },
  m = { args: { action: a.widget.create, include: ["name"] } },
  p = {
    args: {
      action: a.widget.create,
      include: ["inventoryCount"],
      defaultValues: { widget: { name: "Name from default when there is no field input component" } },
    },
  },
  Ae = () => {
    const [r, ge] = fe.useState(!1);
    return e.createElement(
      e.Fragment,
      null,
      e.createElement(Ce, { onClick: () => ge(!r) }, r ? "Hide" : "Show", " other inputs"),
      r &&
        e.createElement(
          e.Fragment,
          null,
          e.createElement(t, { field: "isChecked" }),
          e.createElement(t, { field: "section" }),
          e.createElement(t, { field: "gizmos" })
        )
    );
  },
  Be = () =>
    e.createElement(
      e.Fragment,
      null,
      e.createElement(t, { field: "name" }),
      e.createElement(t, { field: "inventoryCount" }),
      e.createElement(Ae, null)
    ),
  g = {
    args: {
      action: a.widget.update,
      findBy: "1",
      children: e.createElement(e.Fragment, null, e.createElement(Be, null), e.createElement(Pe, null)),
    },
    tags: ["!autodocs"],
    docs: { source: { language: "tsx", code: "hi world" } },
  },
  h = { args: { action: a.game.city.update, findBy: "1" } },
  f = { args: { action: a.flipAll } },
  w = {
    name: "onSuccess callback",
    args: {
      action: a.widget.create,
      onSuccess: (r) => {
        window.alert(`Record created: ${JSON.stringify(r, null, 2)}`);
      },
    },
  },
  y = {
    name: "onFailure callback",
    args: {
      action: a.widget.alwaysThrowError,
      onFailure: (r) => {
        window.alert(`Error: ${r.message} (see console for details)`), console.error(r);
      },
    },
  },
  E = { name: "HasManyThrough fields", args: { action: a.hasManyThrough.baseModel.create } };
var S, C, b;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((S = n.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create
  }
}`,
      ...((b = (C = n.parameters) == null ? void 0 : C.docs) == null ? void 0 : b.source),
    },
  },
};
var P, F, x;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((P = o.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.createWithCustomParams
  }
}`,
      ...((x = (F = o.parameters) == null ? void 0 : F.docs) == null ? void 0 : x.source),
    },
  },
};
var W, A, B;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((W = s.parameters) == null ? void 0 : W.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.update,
    findBy: "999"
  }
}`,
      ...((B = (A = s.parameters) == null ? void 0 : A.docs) == null ? void 0 : B.source),
    },
  },
};
var R, k, I;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((R = c.parameters) == null ? void 0 : R.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999"
  }
}`,
      ...((I = (k = c.parameters) == null ? void 0 : k.docs) == null ? void 0 : I.source),
    },
  },
};
var M, T, v;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((M = i.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.upsert,
    findBy: "1"
  }
}`,
      ...((v = (T = i.parameters) == null ? void 0 : T.docs) == null ? void 0 : v.source),
    },
  },
};
var N, U, V;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((N = d.parameters) == null ? void 0 : N.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.upsert
  }
}`,
      ...((V = (U = d.parameters) == null ? void 0 : U.docs) == null ? void 0 : V.source),
    },
  },
};
var D, $, H;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((D = l.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"]
  }
}`,
      ...((H = ($ = l.parameters) == null ? void 0 : $.docs) == null ? void 0 : H.source),
    },
  },
};
var O, _, G;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((O = u.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,
      ...((G = (_ = u.parameters) == null ? void 0 : _.docs) == null ? void 0 : G.source),
    },
  },
};
var J, q, z;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((J = m.parameters) == null ? void 0 : J.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"]
  }
}`,
      ...((z = (q = m.parameters) == null ? void 0 : q.docs) == null ? void 0 : z.source),
    },
  },
};
var j, K, L;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((j = p.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.create,
    include: ["inventoryCount"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,
      ...((L = (K = p.parameters) == null ? void 0 : K.docs) == null ? void 0 : L.source),
    },
  },
};
var Q, X, Y;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((Q = g.parameters) == null ? void 0 : Q.docs),
    source: {
      originalSource: `{
  args: {
    action: api.widget.update,
    findBy: "1",
    children: <>
        <CustomComponentWithAutoInputs />
        <PolarisAutoSubmit />
      </>
  },
  tags: ["!autodocs"],
  docs: {
    source: {
      language: "tsx",
      code: "hi world"
    }
  }
}`,
      ...((Y = (X = g.parameters) == null ? void 0 : X.docs) == null ? void 0 : Y.source),
    },
  },
};
var Z, ee, ae;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((Z = h.parameters) == null ? void 0 : Z.docs),
    source: {
      originalSource: `{
  args: {
    action: api.game.city.update,
    findBy: "1"
  }
}`,
      ...((ae = (ee = h.parameters) == null ? void 0 : ee.docs) == null ? void 0 : ae.source),
    },
  },
};
var re, te, ne;
f.parameters = {
  ...f.parameters,
  docs: {
    ...((re = f.parameters) == null ? void 0 : re.docs),
    source: {
      originalSource: `{
  args: {
    action: api.flipAll
  }
}`,
      ...((ne = (te = f.parameters) == null ? void 0 : te.docs) == null ? void 0 : ne.source),
    },
  },
};
var oe, se, ce;
w.parameters = {
  ...w.parameters,
  docs: {
    ...((oe = w.parameters) == null ? void 0 : oe.docs),
    source: {
      originalSource: `{
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: record => {
      // eslint-disable-next-line no-undef
      window.alert(\`Record created: \${JSON.stringify(record, null, 2)}\`);
    }
  }
}`,
      ...((ce = (se = w.parameters) == null ? void 0 : se.docs) == null ? void 0 : ce.source),
    },
  },
};
var ie, de, le;
y.parameters = {
  ...y.parameters,
  docs: {
    ...((ie = y.parameters) == null ? void 0 : ie.docs),
    source: {
      originalSource: `{
  name: "onFailure callback",
  args: {
    action: api.widget.alwaysThrowError,
    onFailure: error => {
      // eslint-disable-next-line no-undef
      window.alert(\`Error: \${error.message} (see console for details)\`);
      // eslint-disable-next-line no-undef
      console.error(error);
    }
  }
}`,
      ...((le = (de = y.parameters) == null ? void 0 : de.docs) == null ? void 0 : le.source),
    },
  },
};
var ue, me, pe;
E.parameters = {
  ...E.parameters,
  docs: {
    ...((ue = E.parameters) == null ? void 0 : ue.docs),
    source: {
      originalSource: `{
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create
  }
}`,
      ...((pe = (me = E.parameters) == null ? void 0 : me.docs) == null ? void 0 : pe.source),
    },
  },
};
const Oe = [
  "Primary",
  "CreateWithCustomParams",
  "UpdateRecord",
  "UpdateRecordWithCustomParams",
  "UpsertRecordWithFindBy",
  "UpsertRecordWithoutFindBy",
  "Excluded",
  "ExcludedWithDefaultValues",
  "Included",
  "IncludedWithDefaultValues",
  "Expanded",
  "Namespaced",
  "GlobalAction",
  "onSuccessCallback",
  "onFailureCallback",
  "hasManyThrough",
];
export {
  o as CreateWithCustomParams,
  l as Excluded,
  u as ExcludedWithDefaultValues,
  g as Expanded,
  f as GlobalAction,
  m as Included,
  p as IncludedWithDefaultValues,
  h as Namespaced,
  n as Primary,
  s as UpdateRecord,
  c as UpdateRecordWithCustomParams,
  i as UpsertRecordWithFindBy,
  d as UpsertRecordWithoutFindBy,
  Oe as __namedExportsOrder,
  He as default,
  E as hasManyThrough,
  y as onFailureCallback,
  w as onSuccessCallback,
};
