import { a as A, c as E, f as I, p as M, n as b, G as c, d as g, b as h, E as u, g as v, e as y } from "./apis-0c1c184f.js";
import { r as i } from "./index-7c191284.js";
const P = (e, t) => {
    if (!i.useContext(c)) throw new Error(b);
    i.useEffect(() => {
      if (e.type === "stubbedAction") {
        const a = e;
        if (!("reason" in a) || !("dataPath" in a) || !("actionApiIdentifier" in a)) return;
        const n = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: a.reason,
            action: {
              functionName: a.functionName,
              actionApiIdentifier: a.actionApiIdentifier,
              modelApiIdentifier: a.modelApiIdentifier,
              dataPath: a.dataPath,
            },
          },
        });
        globalThis.dispatchEvent(n);
      }
    }, []);
    const s = A(t),
      o = i.useMemo(
        () =>
          h(
            e.operationName,
            e.defaultSelection,
            e.modelApiIdentifier,
            e.modelSelectionField,
            e.variables,
            s,
            e.namespace,
            e.isBulk,
            e.hasReturnType
          ),
        [e, s]
      ),
      [d, r] = E(o.query);
    return [
      i.useMemo(() => p(d, e), [d, e]),
      i.useCallback(
        async (a, n) => {
          const m = g(e, a),
            f = await r(m, {
              ...n,
              additionalTypenames: [...((n == null ? void 0 : n.additionalTypenames) ?? []), y(e.modelApiIdentifier)],
            });
          return p({ fetching: !1, ...f }, e);
        },
        [e, r]
      ),
    ];
  },
  p = (e, t) => {
    let s = u.forMaybeCombinedError(e.error),
      o = null;
    if (e.data) {
      const d = I([t.operationName], t.namespace),
        r = v(e.data, d);
      if (r) {
        const l = r.errors;
        l && l[0]
          ? (s = u.forErrorsResponse(l, s == null ? void 0 : s.response))
          : (o = M(t.defaultSelection, e, r, t.modelSelectionField, t.hasReturnType));
      }
    }
    return { ...e, error: s, data: o };
  };
export { P as u };
