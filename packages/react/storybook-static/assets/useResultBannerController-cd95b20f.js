import {
  E as D,
  l as De,
  U as Ee,
  z as Fe,
  s as Ge,
  r as He,
  i as Ie,
  c as Je,
  v as Ke,
  O as L,
  o as Le,
  x as Me,
  I as N,
  h as Ne,
  D as Oe,
  u as Qe,
  w as U,
  m as Ue,
  $ as We,
  C as Xe,
  d as Ye,
  H as Ze,
  Q as ae,
  W as at,
  a as be,
  Z as dt,
  K as et,
  M as he,
  f as ie,
  S as it,
  A as ke,
  Y as lt,
  R as nt,
  X as ot,
  q as qe,
  B as re,
  N as rt,
  g as se,
  V as st,
  L as tt,
  j as ve,
  J as w,
  T as we,
  k as xe,
  y as ze,
} from "./apis-0c1c184f.js";
import { R as ct, r as y } from "./index-7c191284.js";
import { u as ut } from "./useAction-f9651b8b.js";
const ft = (e, t, r) => {
    const n = be(r),
      i = y.useMemo(
        () => Ne(e.operationName, e.findByVariableName, t, e.defaultSelection, e.modelApiIdentifier, n, e.namespace),
        [e, t, n]
      ),
      [s, l] = Ie(ve(i, r));
    return [
      y.useMemo(() => {
        const o = ie([e.operationName], e.namespace);
        let d = s.data,
          u = [];
        if (d) {
          const f = se(s.data, o);
          f && ((u = xe(s, f)), (d = u[0]));
        }
        let c = D.forMaybeCombinedError(s.error);
        return (
          c ||
            (u.length > 1
              ? (c = D.forClientSideError(De(e.modelApiIdentifier, e.findByVariableName, t)))
              : s.data &&
                !u[0] &&
                (c = D.forClientSideError(new Ue(`${e.modelApiIdentifier} record with ${e.findByVariableName}=${t} not found`)))),
          { ...s, data: d, error: c }
        );
      }, [s, e, t]),
      l,
    ];
  },
  mt = (e, t, r) => {
    const n = be(r),
      i = y.useMemo(
        () => Le(e.findOne.operationName, t, e.findOne.defaultSelection, e.findOne.modelApiIdentifier, n, e.findOne.namespace),
        [e, t, n]
      ),
      [s, l] = Ie(ve(i, r));
    return [
      y.useMemo(() => {
        const o = ie([e.findOne.operationName], e.findOne.namespace);
        let d = s.data && se(s.data, o);
        d && (d = qe(s, d));
        const u = D.errorIfDataAbsent(s, o, r == null ? void 0 : r.pause);
        return { ...s, data: d, error: u };
      }, [e.findOne.operationName, s, r == null ? void 0 : r.pause]),
      l,
    ];
  },
  Z = [{ fetching: !1 }, () => {}],
  ht = (e, t, r) => {
    if (!e || !t) return Z;
    if (typeof t == "string") return mt(e, t, r);
    if (typeof t == "object" && !Array.isArray(t) && Object.keys(t).length) {
      const [i, s] = Object.entries(t)[0],
        l = `findBy${He(i)}`;
      if (!(l in e)) {
        if (r.throwOnInvalidFindByObject === void 0 || r.throwOnInvalidFindByObject)
          throw new Error(`Invalid findBy object: ${JSON.stringify(t)}. ${l} is not a valid findBy operation for this model.`);
        return Z;
      }
      const a = e[l];
      return ft(a, s, r);
    }
    return Z;
  },
  Pe = ["id", "createdAt", "updatedAt", "__typename"],
  ye = (e) => {
    const t = { ...e };
    for (const r of Pe) delete t[r];
    return t;
  },
  ne = (e) => {
    const { modelApiIdentifier: t, data: r, defaultValues: n } = e;
    yt(r);
    const i = Re(t, r);
    return e.hasAmbiguousDefaultValues ? { ...n, [t]: i } : { ...n, ...i, [t]: i };
  },
  yt = (e) => {
    for (const t of Object.keys(e))
      Array.isArray(e[t]) &&
        e[t].length &&
        (e[t] = e[t].map((n) => (typeof n == "object" && "__typename" in n && n.__typename === "Role" && "key" in n ? n.key : n)));
  },
  Re = (e, t) => ((t = ye(t)), e && t[e] && typeof t[e] == "object" && (t[e] = ye(t[e])), H(t)),
  H = (e) => {
    if (e !== null || (e !== void 0 && typeof e == "object")) {
      if (Array.isArray(e)) return e.map(H);
      if (x(e)) {
        if (e.edges && Array.isArray(e.edges)) return e.edges.map((r) => H(r.node));
        const t = {};
        for (const r of Object.keys(e)) t[r] = H(e[r]);
        return t;
      }
      return e;
    }
  },
  gt = (e, t, r) => {
    const n = H(t),
      i = Object.keys(n).filter((a) => !Pe.includes(a)),
      s = Object.fromEntries(Object.entries(e).flatMap(([a, o]) => (i.includes(a) ? [] : [[a, o]]))),
      l = { ...e[r.modelApiIdentifier] };
    for (const a of Object.keys(l)) {
      const o = n[a];
      e[r.modelApiIdentifier] &&
      typeof e[r.modelApiIdentifier] == "object" &&
      a in e[r.modelApiIdentifier] &&
      !Ge(o, e[r.modelApiIdentifier][a])
        ? (l[a] = e[r.modelApiIdentifier][a])
        : a in e && o !== e[a] && a in e && o !== e[a] && (l[a] = e[a]);
    }
    return (s[r.modelApiIdentifier] = l), s;
  };
function pt(e) {
  const t = {};
  function r(n, i = void 0, s = 0, l) {
    if (Array.isArray(n))
      return n.flatMap((a) => {
        const o = x(a) && "id" in a ? a.id : void 0;
        if (!o) return [];
        const d = i ? `${i}.${o}` : o.toString();
        return r(a, d, s + 1, !0);
      });
    if (n != null && typeof n == "object") {
      const a = {};
      for (const o of Object.keys(n)) {
        const d = i ? `${i}.${o}` : o;
        a[o] = r(n[o], d, s + 1);
      }
      if (s > 1) {
        const o = l ? (i == null ? void 0 : i.split(".").slice(0, -1).join(".")) : i;
        "id" in n && (t[o] || (t[o] = []), t[o].push(n.id));
      }
      return a;
    }
    return n;
  }
  return r(e), t;
}
const At = (e) => ({ markdown: e.markdown }),
  bt = (e) =>
    e.base64
      ? { fileName: e.fileName, mimeType: e.mimeType, base64: e.base64 }
      : e.file
      ? { fileName: e.fileName, mimeType: e.mimeType, file: e.file }
      : e.copyUrl
      ? { fileName: e.fileName, mimeType: e.mimeType, copyUrl: e.copyUrl }
      : e.directUploadToken
      ? { fileName: e.fileName, mimeType: e.mimeType, directUploadToken: e.directUploadToken }
      : void 0,
  It = async (e, t, r) => {
    const n = e[We];
    if (!n)
      throw new Error("No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app");
    const i = pt(t);
    function s(a, o) {
      const { depth: d, path: u, fieldType: c, fieldRelationships: f, idPath: h } = o;
      if (u && Array.isArray(a)) {
        const A = [];
        let b;
        c && h && (c.type == "HasMany" || c.type == "HasManyThrough") && (b = i[h]);
        const v = [];
        return (
          b &&
            h &&
            A.push(
              b.map((I, g) => {
                const m = a.find((p) => p.id == I);
                if (m) {
                  const p = a.findIndex((V) => V.id == I);
                  delete i[h][g], v.push(p);
                  const k = u ? `${u}.${p}` : p.toString(),
                    F = h && x(m) && m.id ? `${h}.${m.id}` : void 0;
                  return s(m, { depth: d + 1, path: k, idPath: F, fieldType: c, fieldRelationships: f, parent: o });
                } else {
                  const k = Object.entries(i).find(([F, V]) => F.includes(u + "." + I));
                  if (k) {
                    const { 0: F, 1: V } = k;
                    delete i[F];
                  }
                  return { delete: { id: I } };
                }
              })
            ),
          A.push(
            a
              .filter((I, g) => !v.includes(g))
              .map((I, g) => {
                const m = u ? `${u}.${g}` : g.toString(),
                  p = h && x(I) && I.id ? `${h}.${I.id}` : void 0;
                return s(I, { depth: d + 1, path: m, idPath: p, fieldType: c, fieldRelationships: f, parent: o });
              })
          ),
          A.flatMap((I) => I)
        );
      } else if (x(a)) {
        let A = {};
        for (const m of Object.keys(a)) {
          const p = u ? `${u}.${m}` : m,
            k = h ? `${h}.${m}` : m,
            F = f ? f[m] : null,
            V = F ? (n == null ? void 0 : n[F.model]) : n == null ? void 0 : n[m];
          A[m] = s(a[m], { depth: d + 1, path: p, idPath: k, fieldType: F, fieldRelationships: V, parent: o });
        }
        const { __typename: b, ...v } = A;
        if (b == "RichText") return At(v);
        if (b == "StoredFile") return bt(v);
        let I = null;
        const g = f
          ? Object.entries(f)
              .filter(([m, p]) => p.type === "BelongsTo")
              .reduce((m, [p, k]) => ((m[p] = k), m), {})
          : null;
        for (const m of Object.keys(g ?? {}))
          `${m}Id` in a && (I == null && (I = {}), (I = { ...I, [m]: { _link: a[`${m}Id`] } }), delete v[`${m}Id`]);
        if ((I ? (A = { ...v, ...I }) : (A = v), d <= 1 || c == null)) return A;
        switch (c.type) {
          case "HasOne":
            return Mt({ input: a, result: A, defaultValues: t, path: u });
          case "HasMany":
          case "HasManyThrough":
            return Ft({ input: a, result: A });
          case "BelongsTo":
            return vt({ input: a, result: A, recordIdsAtPath: i, idPath: h });
          default:
            throw new Error(
              `Can't transform input, Unknown field type ${c == null ? void 0 : c.type}. ${JSON.stringify(
                { input: a, path: u, referencedTypes: n },
                null,
                2
              )}`
            );
        }
      }
      return a;
    }
    return s(r, { depth: 0 });
  },
  vt = (e) => {
    const { input: t, result: r, recordIdsAtPath: n, idPath: i } = e,
      { __typename: s, ...l } = r;
    if (!!("_link" in t && t._link)) return { _link: t._link };
    if (!!("_unlink" in t && t._unlink)) return { _link: null };
    const d = "id" in t,
      u = Object.keys(t).filter((f) => f !== "id" && f !== "__typename").length > 0;
    return d
      ? t.id === null
        ? { _link: null }
        : u
        ? { update: { id: t.id, ...l } }
        : { _link: t.id }
      : (i && n[i] && n[i].length > 0 ? n[i][0] : void 0) && !u
      ? { _link: null }
      : { create: { ...l } };
  },
  Mt = (e) => {
    const { input: t, result: r, defaultValues: n, path: i } = e,
      { __typename: s, ...l } = r,
      a = U(n, i),
      o = a == null ? void 0 : a.id,
      d = l._link ?? t.id;
    if ("_unlink" in t && t._unlink) return { _unlink: t._unlink };
    const u = o && o !== d ? { _unlink: o } : void 0;
    return "_link" in l && l._link
      ? { update: { id: l._link }, ...u }
      : "id" in t
      ? { update: { ...l }, ...u }
      : { create: { ...l }, ...u };
  },
  Ft = (e) => {
    const { input: t, result: r } = e,
      { __typename: n, ...i } = r;
    if ("_link" in i && i._link) return { update: { id: i._link } };
    if ("_unlink" in i && i._unlink) {
      const { id: l, inverseFieldApiIdentifier: a } = i._unlink;
      return { update: { id: l, [a]: { _link: null } } };
    }
    return "id" in t ? { update: { ...i } } : { create: { ...i } };
  },
  x = (e) => {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  };
function Se(e) {
  if (typeof e != "object" || e == null) return e === "ReadOnly" ? !0 : e;
  const t = Array.isArray(e) ? [] : {};
  for (const r in e) {
    const n = e[r];
    t[r] = Se(n);
  }
  return t;
}
function oe(e, t = "") {
  if (!e) return [];
  let r = [];
  for (const n of Object.keys(e)) {
    let i = t ? `${t}.${n}` : n;
    i.includes("edges.node") && (i = i.replace("edges.node", "*")),
      e[n] === "ReadOnly" ? r.push(i) : typeof e[n] == "object" && e[n] != null && (r = r.concat(oe(e[n], i)));
  }
  return r;
}
function kt(e) {
  const { select: t, send: r, data: n, modelApiIdentifier: i } = e,
    s = oe(t, i),
    l = (d, u = "") => {
      const c = Object.keys(d || {}).filter((f) => typeof d[f] == "object" && d[f] !== null);
      for (const f of c) {
        const h = u ? `${u}.${f}` : f,
          A = Object.keys(d[f]).map((v) => `${h}.${v}`),
          b = A.filter((v) => s.includes(v));
        b.length > 0 && b.length === A.length ? s.push(h) : l(d[f], h);
      }
    };
  l(t, i);
  for (const d of s) Ke(n, d);
  if (!r) return n;
  const a = {},
    o = typeof r == "function" ? r() : r;
  for (const d of o) {
    const u = [d];
    i && u.push(`${i}.${d}`);
    for (const c of u) {
      const f = U(n, c);
      if (typeof f < "u") {
        const A = c.split(".").slice(0, -1).join(".");
        U(a, A) !== null && Me(a, c, f);
        break;
      }
    }
  }
  return a;
}
const Ot = (e) => {
    y.useEffect(() => {
      if (e.type === "stubbedAction") {
        const s = e;
        if (!("reason" in s) || !("dataPath" in s)) return;
        const l = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: s.reason,
            action: { functionName: s.functionName, actionApiIdentifier: s.actionApiIdentifier, dataPath: s.dataPath },
          },
        });
        globalThis.dispatchEvent(l);
      }
    }, []);
    const t = y.useMemo(() => ze(e.operationName, e.variables, e.namespace), [e]),
      [r, n] = Je(t.query);
    return [
      y.useMemo(() => ge(r, e), [r, e]),
      y.useCallback(
        async (s, l) => {
          const a = await n(s ?? {}, l);
          return ge({ fetching: !1, ...a }, e);
        },
        [e, n]
      ),
    ];
  },
  ge = (e, t) => {
    let r = D.forMaybeCombinedError(e.error),
      n;
    if (e.data) {
      const i = ie([t.operationName], t.namespace);
      if (((n = se(e.data, i)), n)) {
        const s = n.errors;
        (n = n.result), s && s[0] && (r = D.forErrorsResponse(s));
      }
    }
    return { ...e, error: r, data: n };
  },
  wt = (e, t) => {
    var $, G, W;
    const r = t && "findBy" in t ? t.findBy : void 0,
      n = t && "findBy" in t ? (t == null ? void 0 : t.throwOnInvalidFindByObject) ?? !0 : !0,
      i = t && "pause" in t ? t.pause : void 0,
      s = Fe(),
      l = !!r,
      a = y.useRef(!l),
      o = "modelApiIdentifier" in e,
      d = t != null && t.select ? Se(t.select) : void 0,
      u = o ? ke(s, e.modelApiIdentifier, e.namespace) : void 0,
      [c] = ht(u, r || "1", { pause: i || !l, select: d, throwOnInvalidFindByObject: n }),
      f = !l || !!c.data;
    let h = t == null ? void 0 : t.defaultValues;
    o &&
      c.data &&
      (h = ne({
        hasAmbiguousDefaultValues: e.hasAmbiguousIdentifier ?? !1,
        modelApiIdentifier: e.modelApiIdentifier,
        defaultValues: t == null ? void 0 : t.defaultValues,
        data: c.data,
      }));
    let A;
    ($ = c.data) != null && $.id
      ? (A = c.data.id)
      : h != null && h.id
      ? (A = h.id)
      : o &&
        (G = h == null ? void 0 : h[e.modelApiIdentifier]) != null &&
        G.id &&
        (A = (W = h == null ? void 0 : h[e.modelApiIdentifier]) == null ? void 0 : W.id);
    const b = Qe({ ...t, defaultValues: Re(o ? e.modelApiIdentifier : void 0, h) }),
      { handleSubmit: v, formState: I, ...g } = b;
    y.useEffect(() => {
      f && !a.current && h && ((a.current = !0), g.reset(h));
    }, [f, h, g]);
    const [m, p] = o ? ut(e, { select: d }) : Ot(e),
      k = y.useCallback(
        (S) => {
          var M;
          if ("executionErrors" in S) {
            const O = S,
              R = O.executionErrors;
            if (R.length > 0)
              for (const E of R)
                if ("validationErrors" in E)
                  for (const _ of E.validationErrors) {
                    const C = o ? `${e.modelApiIdentifier}.${_.apiIdentifier}` : _.apiIdentifier;
                    g.setError(C, { message: _.message });
                  }
                else {
                  const _ = "code" in E ? `${E.code}: ` : "",
                    C = E.message.replace(_, "");
                  g.setError("root", { message: C });
                }
            else O.networkError && g.setError("root", { message: O.networkError.message });
          }
          (M = t == null ? void 0 : t.onError) == null || M.call(t, S);
        },
        [e, g, t, o]
      ),
      F = y.useCallback(
        async (S) => {
          let M;
          return (
            g.clearErrors(),
            await v(
              async (O) => {
                var E, _;
                t != null &&
                  t.debug &&
                  console.debug("[useActionForm] form submitted", {
                    hasAmbiguousIdentifier: o && e.hasAmbiguousIdentifier,
                    existingRecordId: A,
                    defaultValues: h,
                    data: O,
                    findResultData: c.data,
                  }),
                  o &&
                    (e.hasAmbiguousIdentifier || (c.data ? (O = gt(O, c.data, e)) : (O = Ye(e, O))),
                    t != null && t.debug && console.debug("[useActionForm] disambiguated data", { data: O }),
                    ((t != null && t.select) || (t != null && t.send)) &&
                      (O = kt({ data: O, modelApiIdentifier: e.modelApiIdentifier, select: t.select, send: t.send })),
                    t != null && t.debug && console.debug("[useActionForm] reshaping data for graphql api", { data: O, defaultValues: h }),
                    (O = await It(s, h, O)),
                    t != null && t.debug && console.debug("[useActionForm] reshaped data for graphql api", { data: O }));
                let R = { ...O };
                if ((A && (R.id = A), !o && t != null && t.send)) {
                  const C = R;
                  R = {};
                  for (const j of typeof t.send == "function" ? t.send() : t.send) Me(R, j, U(C, j));
                }
                if (
                  ((E = t == null ? void 0 : t.onSubmit) == null || E.call(t),
                  t != null && t.debug && console.debug("[useActionForm] running action", { variables: R }),
                  (M = await p(R)),
                  !M.error && ((_ = t == null ? void 0 : t.onSuccess) == null || _.call(t, M.data), o && M.data))
                ) {
                  if (l) {
                    const C = ne({
                      data: M.data,
                      defaultValues: t == null ? void 0 : t.defaultValues,
                      modelApiIdentifier: e.modelApiIdentifier,
                      hasAmbiguousDefaultValues: e.hasAmbiguousIdentifier ?? !1,
                    });
                    g.reset(C, { keepValues: !0 });
                  }
                  if (t != null && t.select) {
                    const C = oe(t.select);
                    for (const j of C) {
                      const q = U(M.data, j);
                      g.setValue(j, q), g.setValue(`${e.modelApiIdentifier}.${j}`, q);
                    }
                  }
                }
              },
              (O) => {
                k(O);
              }
            )(S),
            M != null && M.error && k(M.error),
            M
          );
        },
        [g, v, o, A, t, p, e, c.data, s, h, l, k]
      ),
      V = new Proxy(I, {
        get: (S, M) =>
          M === "isSubmitting"
            ? S.isSubmitting || m.fetching
            : M === "isSubmitSuccessful"
            ? S.isSubmitSuccessful && !m.fetching && !m.error
            : M === "isLoading"
            ? S.isLoading || c.fetching
            : M === "isReady"
            ? f
            : S[M],
      });
    return (
      t != null &&
        t.debug &&
        console.debug("[useActionForm] rendering form hook", {
          isReady: f,
          hasSetInitialValues: a.current,
          hasAmbiguousIdentifier: o && e.hasAmbiguousIdentifier,
          isModelAction: o,
          findExistingRecord: l,
          findResult: c,
          actionResult: m,
          defaultValues: h,
          existingRecordId: A,
          modelApiIdentifier: o ? e.modelApiIdentifier : void 0,
          actionSelect: d,
        }),
      { ...g, formState: V, error: c.error || m.error, submit: F, actionData: m.data, originalFormMethods: b, findResult: c }
    );
  };
var pe = function (e, t, r) {
    if (e && "reportValidity" in e) {
      var n = re(r, t);
      e.setCustomValidity((n && n.message) || ""), e.reportValidity();
    }
  },
  _e = function (e, t) {
    var r = function (i) {
      var s = t.fields[i];
      s && s.ref && "reportValidity" in s.ref
        ? pe(s.ref, i, e)
        : s.refs &&
          s.refs.forEach(function (l) {
            return pe(l, i, e);
          });
    };
    for (var n in t.fields) r(n);
  },
  Et = function (e) {
    return e instanceof Date;
  },
  Pt = function (e) {
    return e == null;
  },
  Rt = function (e) {
    return typeof e == "object";
  },
  St = function (e) {
    return !Pt(e) && !Array.isArray(e) && Rt(e) && !Et(e);
  },
  _t = function (e) {
    return /^\w*$/.test(e);
  },
  ee = function (e, t, r) {
    for (
      var n = -1,
        i = _t(t)
          ? [t]
          : (function (u) {
              return (c = u.replace(/["|']|\]/g, "").split(/\.|\[/)), Array.isArray(c) ? c.filter(Boolean) : [];
              var c;
            })(t),
        s = i.length,
        l = s - 1;
      ++n < s;

    ) {
      var a = i[n],
        o = r;
      if (n !== l) {
        var d = e[a];
        o = St(d) || Array.isArray(d) ? d : isNaN(+i[n + 1]) ? {} : [];
      }
      (e[a] = o), (e = e[a]);
    }
    return e;
  },
  Tt = function (e, t) {
    t.shouldUseNativeValidation && _e(e, t);
    var r = {};
    for (var n in e) {
      var i = re(t.fields, n),
        s = Object.assign(e[n] || {}, { ref: i && i.ref });
      if (Ct(t.names || Object.keys(e), n)) {
        var l = Object.assign({}, re(r, n));
        ee(l, "root", s), ee(r, n, l);
      } else ee(r, n, s);
    }
    return r;
  },
  Ct = function (e, t) {
    return e.some(function (r) {
      return r.startsWith(t + ".");
    });
  };
function $t(e, t, r) {
  return (
    t === void 0 && (t = {}),
    r === void 0 && (r = {}),
    function (n, i, s) {
      try {
        return Promise.resolve(
          (function (l, a) {
            try {
              var o =
                (t.context,
                Promise.resolve(
                  e[r.mode === "sync" ? "validateSync" : "validate"](n, Object.assign({ abortEarly: !1 }, t, { context: i }))
                ).then(function (d) {
                  return s.shouldUseNativeValidation && _e({}, s), { values: r.raw ? n : d, errors: {} };
                }));
            } catch (d) {
              return a(d);
            }
            return o && o.then ? o.then(void 0, a) : o;
          })(0, function (l) {
            if (!l.inner) throw l;
            return {
              values: {},
              errors: Tt(
                ((a = l),
                (o = !s.shouldUseNativeValidation && s.criteriaMode === "all"),
                (a.inner || []).reduce(function (d, u) {
                  if ((d[u.path] || (d[u.path] = { message: u.message, type: u.type }), o)) {
                    var c = d[u.path].types,
                      f = c && c[u.type];
                    d[u.path] = Xe(u.path, o, d, u.type, f ? [].concat(f, u.message) : u.message);
                  }
                  return d;
                }, {})),
                s
              ),
            };
            var a, o;
          })
        );
      } catch (l) {
        return Promise.reject(l);
      }
    }
  );
}
const Vt = (e) => {
    if (e.isBulk) throw new Error("Bulk actions are not supported in AutoForms");
  },
  jt = "gadget/trigger/graphql_api",
  Bt = "Specify a valid Gagdet action to use AutoForm",
  Nt = '"action" is not a valid Gadget action',
  Te = '"action" requires an API trigger to be used in AutoForm',
  xt = ["globalAction", "action"],
  Dt = (e) => {
    if (!xt.includes(e.type)) throw new Error(Te);
  },
  Ar = (e) => {
    if (!("action" in e)) throw new Error(Bt);
    if (!e.action) throw new Error(Nt);
    if (e.children) {
      if (e.include) throw new Error("AutoForm components with children cannot use the include option");
      if (e.exclude) throw new Error("AutoForm components with children cannot use the exclude option");
    }
  },
  Ut = (e) => {
    if (!e) return;
    if (
      !((e.__typename === "GadgetGlobalAction" ? e.triggers : e.__typename === "GadgetModel" ? e.action.triggers : []) ?? []).some(
        (n) => n.specID === jt
      )
    )
      throw new Error(Te);
  },
  Lt = (e, t) => {
    if (!t || typeof t == "string") return;
    if (!x(t) || Object.keys(t).length !== 1)
      throw new Error("The findBy prop in AutoForm must be an object containing a single unique Gadget field API identifier as a key.");
    if (!e || !e.length) return;
    const r = Object.keys(t)[0];
    if (
      !e
        .filter((i) => i.metadata.configuration.validations.some((s) => (s == null ? void 0 : s.specID) === "gadget/validation/unique"))
        .map((i) => i.metadata.apiIdentifier)
        .includes(r)
    )
      throw new Error(
        `The findBy prop in AutoForm must be an object containing a unique Gadget field API identifier as a key. "${r}" is not a unique field name.`
      );
  },
  qt = (e, t) =>
    y.useMemo(() => {
      if (!e) return;
      const r = N(e) ? e.action : e;
      return $t(tt(r.inputFields, t));
    }, [e, t]),
  Ht = (e) => {
    if (e) return N(e) ? e.action.isUpsertMetaAction : !1;
  },
  Gt = (e, t) =>
    y.useMemo(() => {
      if (!e) return [];
      const r = N(e) ? e.action : e,
        i =
          e.__typename === "GadgetModel"
            ? r.inputFields.filter((d) => d.configuration.__typename === "GadgetObjectFieldConfig" && d.apiIdentifier === e.apiIdentifier)
            : [],
        s = r.inputFields.filter((d) => d.configuration.__typename !== "GadgetObjectFieldConfig"),
        l = he(s, t).map(([d, u]) => ({ path: d, metadata: u })),
        o = [
          ...i.flatMap((d) =>
            he(d.configuration.fields, { ...t, isUpsertAction: !0 }).map(([u, c]) => ({ path: `${d.apiIdentifier}.${u}`, metadata: c }))
          ),
          ...l,
        ];
      return Kt(r.apiIdentifier, o), o;
    }, [e, t]),
  Wt = (e) => {
    const { modelApiIdentifier: t, fields: r, select: n } = e;
    if (n) return n;
    if (!t || !r.length) return;
    const i = r.map((l) => l.path.replace(new RegExp(`^${t}\\.`), "")),
      s = r.map((l) => l.metadata);
    return rt(t, i, s);
  },
  Kt = (e, t) => {
    const r = new Set(),
      n = new Set();
    for (const { path: i, metadata: s } of t) {
      if (n.has(s.apiIdentifier) || r.has(i)) throw new Error(`Input "${s.apiIdentifier}" is not unique for action "${e}"`);
      n.add(s.apiIdentifier), r.add(i);
    }
  },
  br = (e) => {
    const { action: t, record: r, onSuccess: n, onFailure: i, findBy: s, select: l } = e;
    let a = e.include,
      o = e.exclude;
    const { hasChildren: d, fieldSet: u } = Oe(),
      c = d && u.size > 0;
    c && ((a = Array.from(u)), (o = void 0)), Vt(t), Dt(t);
    const { metadata: f, fetching: h, error: A } = Ze(e.action);
    Ut(f);
    const b = Gt(f, { include: a, exclude: o });
    Lt(b, s);
    const v = f && N(f) && f.action.isDeleteAction,
      I = t.type === "globalAction",
      g = !!(f && N(f) && f.action.operatesWithRecordIdentity),
      m = t.type == "action" ? t.modelApiIdentifier : void 0,
      p = Ht(f),
      k = Wt({ modelApiIdentifier: m, fields: b, select: l }),
      F = p && !!s,
      V = y.useMemo(() => b.map(({ path: B }) => B), [b]),
      $ = y.useMemo(
        () =>
          e.defaultValues ??
          (t.type === "globalAction"
            ? {}
            : { [m]: r ?? (!(g || F) && f && N(f) && f.defaultRecord), id: typeof s == "string" ? s : void 0 }),
        [e.defaultValues, t.type, m, r, g, f, F, s]
      ),
      G = "findBy" in e ? h || !k || !c : !0,
      {
        submit: W,
        error: S,
        reset: M,
        setValue: O,
        getValues: R,
        findResult: E,
        formState: { isSubmitSuccessful: _, submitCount: C, isLoading: j, isReady: q, isSubmitting: $e, touchedFields: Ve, errors: mr },
        originalFormMethods: Q,
      } = wt(t, {
        defaultValues: $,
        findBy: "findBy" in e ? e.findBy : void 0,
        throwOnInvalidFindByObject: !1,
        pause: G,
        select: k,
        resolver: qt(f, V),
        send: () => {
          const B = new Set(
              b.flatMap(({ path: P, metadata: T }) => (T.fieldType === w.HasMany || T.fieldType === w.HasManyThrough ? P : []))
            ),
            Y = {};
          for (const { path: P, metadata: T } of b)
            if (T.fieldType === w.HasManyThrough) {
              const z = T.configuration,
                J = P.split(".").slice(0, -1);
              Y[P] = [...J, z.joinModelHasManyFieldApiIdentifier].join(".");
            }
          const K = b
            .filter(({ path: P, metadata: T }) => {
              var ue, fe;
              const z = T.fieldType;
              if (z === w.Password && "findBy" in e && !U(Ve, P)) return !1;
              if (z === w.BelongsTo) {
                const me = R(P),
                  X = R(`${P}Id`);
                if (me === null && X) return !1;
              }
              const J = P.split(".");
              return J.some((me, X) => {
                const Be = J.slice(0, X).join(".");
                return B.has(Be);
              })
                ? !1
                : e.include
                ? (ue = e.include) == null
                  ? void 0
                  : ue.includes(T.apiIdentifier)
                : e.exclude
                ? !((fe = e.exclude) != null && fe.includes(T.apiIdentifier))
                : !0;
            })
            .map(({ path: P }) => P);
          return (
            g && K.push("id"),
            e.defaultValues &&
              m &&
              et(e.defaultValues).forEach((T) => {
                K.includes(T) || K.push(T);
              }),
            K.map((P) => (Y[P] ? Y[P] : P))
          );
        },
        onError: i,
        onSuccess: n,
        debug: e.debug,
      }),
      le = !g && !v && !I && !p,
      de = p && !F;
    y.useEffect(() => {
      if (_ && (le || de || I)) {
        const B = m && k ? zt(m, $, k) : $;
        M(B);
      }
    }, [_, le, de, I, M, $, C, k, m]);
    const ce = y.useRef(!1);
    return (
      y.useEffect(() => {
        q && !ce.current && m && $[m] && ((ce.current = !0), Q.reset($));
      }, [q, $, Q, m]),
      h || Qt({ operatesWithRecordId: g, hasFindBy: !!s, isUpsertMetaAction: !!p }),
      y.useEffect(() => {
        F && O(`${m}.id`, s);
      }, [R(`${m}.id`), F]),
      y.useEffect(() => {
        if (!s || !c || l || !t || !("modelApiIdentifier" in t) || !E || E.fetching || E.error || !E.data) return;
        const B = ne({
          data: E.data,
          defaultValues: e.defaultValues,
          modelApiIdentifier: t.modelApiIdentifier,
          hasAmbiguousDefaultValues: t.hasAmbiguousIdentifier ?? !1,
        });
        M(B, { keepDirtyValues: !0, keepTouched: !0 });
      }, [Array.from(u).join(","), E == null ? void 0 : E.fetching]),
      {
        metadata: f,
        fetchingMetadata: h,
        metadataError: A,
        fields: b.filter(Jt(F)),
        submit: W,
        formError: S,
        isSubmitting: $e,
        isSubmitSuccessful: _,
        isLoading: j,
        originalFormMethods: Q,
      }
    );
  },
  zt = (e, t, r) => {
    const n = (i) =>
      Object.keys(i).reduce((s, l) => {
        const a = i[l];
        if (x(a))
          if ("edges" in a) s[l] = [];
          else {
            const o = n(a);
            Object.keys(o).length > 0 && (s[l] = o);
          }
        return s;
      }, {});
    return { ...t, [e]: { ...(t[e] ?? {}), ...n(r) } };
  },
  Jt = (e) => (t) => t.metadata.fieldType === w.Id ? !e : !0,
  Qt = (e) => {
    const { operatesWithRecordId: t, hasFindBy: r, isUpsertMetaAction: n } = e;
    if (!n) {
      if (t && !r) throw new Error("The 'findBy' prop is required for actions that operate with a record identity.");
      if (!t && r) throw new Error("The 'findBy' prop is only allowed for actions that operate with a record identity.");
    }
  };
function Ir(e) {
  const t = (r) => {
    const { registerFields: n, fieldSet: i } = Oe();
    return (
      y.useEffect(() => {
        n([r.field]);
      }, [n]),
      i.has(r.field) ? ct.createElement(e, { ...r }) : null
    );
  };
  return (t.__autoInput = !0), t;
}
const Yt = { [w.Number]: "number", [w.Email]: "email", [w.Password]: "password", [w.EncryptedString]: "password" },
  Xt = {
    [w.String]: "Enter text",
    [w.Number]: "Enter number",
    [w.Email]: "example@email.com",
    [w.Password]: "Value",
    [w.EncryptedString]: "Enter text",
    [w.Color]: "Enter color",
    [w.Url]: "example.com",
  },
  vr = (e) => {
    const { field: t, ...r } = e,
      { path: n, metadata: i } = L(t),
      {
        field: s,
        fieldState: { error: l },
      } = ae({ name: n, ...r }),
      { value: a, ...o } = s,
      d = Xt[i.fieldType];
    return {
      id: n,
      label: i.name,
      type: Yt[i.fieldType],
      isError: !!l,
      errorMessage: l == null ? void 0 : l.message,
      autoComplete: "off",
      placeholder: d,
      metadata: i,
      value: Zt(a, i.fieldType),
      ...o,
    };
  },
  Zt = (e, t) => (t === w.Json ? e : e ?? ""),
  Mr = (e) => {
    const { field: t, control: r } = e,
      { path: n, metadata: i } = L(t),
      {
        field: s,
        fieldState: { error: l },
      } = ae({ control: r, name: n }),
      { roles: a, fetching: o, error: d } = nt(),
      u = y.useMemo(() => (a ? a.filter((f) => !er.includes(f.key)).map((f) => ({ value: f.key, label: f.name })) : []), [a]),
      c = o || u.length === 0;
    return { selectedRoleKeys: s.value ?? [], metadata: i, options: u, fieldProps: s, loading: c, rolesError: d, fieldError: l };
  },
  er = ["sysadmin"],
  tr = (e) => {
    const { apiIdentifier: t, namespace: r } = e,
      n = Fe(),
      i = ke(n, t, r);
    if (!i) {
      const s = [...(r ?? []), t].join(".");
      throw new Error(`no model manager for "${s}" found for action function`);
    }
    return i;
  },
  Ae = 25,
  rr = (e) => {
    var u, c, f;
    const { field: t } = e,
      { metadata: r } = L(t),
      { findBy: n } = we(),
      i = r.configuration.fieldType === w.HasMany,
      s = r.configuration,
      l = (u = s.relatedModel) == null ? void 0 : u.apiIdentifier,
      a = (c = s.relatedModel) == null ? void 0 : c.namespace,
      o = "inverseField" in s ? ((f = s.inverseField) == null ? void 0 : f.apiIdentifier) : void 0;
    return {
      relatedModelRecords: lr({
        relatedModel: { apiIdentifier: l, namespace: a },
        filter: i ? nr({ enabled: !1, relatedModelInverseFieldApiId: o, findBy: n }) : void 0,
      }),
    };
  },
  nr = (e) => {
    const { enabled: t, relatedModelInverseFieldApiId: r, findBy: n } = e;
    if (!(!t || !r)) return { OR: [{ [r + "Id"]: { isSet: !1 } }, ...(n !== void 0 ? [{ [r + "Id"]: { equals: n } }] : [])] };
  },
  ir = (e, t) => {
    var i;
    const { metadata: r } = L(e),
      n = r.configuration;
    return it(
      t ?? ((i = n.relatedModel) == null ? void 0 : i.defaultDisplayField.apiIdentifier),
      "Option label is required for relationships"
    );
  },
  Ce = (e) => {
    const { field: t } = e,
      r = ir(t, e.optionLabel),
      { relatedModelRecords: n } = rr(e),
      { relatedModel: i, pagination: s, search: l } = n,
      a = () => Ee(or(i.records, r, e.secondaryLabel, e.tertiaryLabel), "id"),
      [o, d] = y.useState(a()),
      u = sr(i.records);
    return (
      y.useEffect(() => {
        i.fetching || d(a());
      }, [i.fetching, u]),
      {
        options: o,
        searchFilterOptions: o.filter((c) => (l.value ? `${c.label}`.toLowerCase().includes(l.value.toLowerCase()) : !0)),
        relatedModel: i,
        pagination: s,
        search: l,
      }
    );
  },
  te = (e, t) => (typeof t == "string" ? e[t] : Array.isArray(t) ? t.map((r) => e[r]).join(" ") : t(e)),
  sr = (e) =>
    e == null
      ? void 0
      : e
          .map((t) => t.id)
          .sort()
          .join(","),
  ar = (e, t, r, n) => ({ id: e.id, label: te(e, t), secondaryLabel: r ? te(e, r) : void 0, tertiaryLabel: n ? te(e, n) : void 0 }),
  or = (e, t, r, n) => (e == null ? void 0 : e.map((i) => ar(i, t, r, n))) ?? [],
  lr = (e) => {
    const { optionLabel: t, relatedModel: r } = e;
    let n;
    t && typeof t == "string" ? (n = { id: !0, [t]: !0 }) : t && Array.isArray(t) && (n = t.reduce((m, p) => ((m[p] = !0), m), { id: !0 }));
    const i = tr(r),
      [s, l] = y.useState([]),
      [a, o] = y.useState(void 0),
      [d, u] = y.useState(),
      [{ data: c, fetching: f, error: h }, A] = st(i, {
        first: Ae,
        ...(e.filter && { filter: e.filter }),
        ...(a && { after: a }),
        ...(d && { search: d }),
        ...(n && { select: n }),
      }),
      b = !!(c != null && c.hasNextPage),
      v = y.useCallback(() => o(void 0), []),
      I = y.useCallback(() => {
        c && c.length >= Ae && b && c.endCursor && o(c.endCursor);
      }, [c]),
      g = y.useCallback((m) => {
        v(), u(m === "" ? void 0 : m);
      }, []);
    return (
      y.useEffect(() => {
        if (f || !c) return;
        const m = [...s, ...c.map((F) => F)],
          p = Ee(m, "id"),
          k = at(p, "id");
        l(k);
      }, [a, d, f]),
      {
        relatedModel: { records: s, error: h, fetching: f },
        pagination: { clearPagination: v, loadNextPage: I, hasNextPage: b },
        search: { value: d, set: g },
      }
    );
  },
  dr = (e) => {
    var c;
    const { field: t, primaryLabel: r, secondaryLabel: n, tertiaryLabel: i } = e,
      s = L(t),
      { path: l } = s,
      a = lt({ name: l }),
      o = Ce({ field: t, optionLabel: r, secondaryLabel: n, tertiaryLabel: i }),
      d = o.relatedModel.fetching,
      u = (c = o.relatedModel.error) == null ? void 0 : c.message;
    return { record: a, fieldMetadata: s, relatedModelOptions: o, isLoading: d, errorMessage: u };
  },
  Fr = (e) => {
    const { field: t, control: r, optionLabel: n } = e,
      { fieldMetadata: i, relatedModelOptions: s, isLoading: l, errorMessage: a } = dr({ field: t, primaryLabel: n }),
      { path: o } = i,
      {
        field: { value: d, onChange: u },
      } = cr({ name: o, control: r }),
      {
        danglingSelectedRecordId: c,
        selectedRecord: f,
        maybeClearDanglingSelectedRecord: h,
      } = ur({ path: o, relatedModelOptions: s, selectedRecordIdFromController: d }),
      A = y.useCallback(
        (v) => {
          u(v.id);
        },
        [u]
      ),
      b = y.useCallback(() => {
        u(null), h();
      }, [u, h]);
    return {
      fieldMetadata: i,
      relatedModelOptions: s,
      onSelectRecord: A,
      onRemoveRecord: b,
      selectedRecord: f,
      danglingSelectedRecordId: c,
      isLoading: l,
      errorMessage: a,
    };
  },
  cr = (e) => {
    const { name: t, control: r } = e,
      {
        field: { value: n, onChange: i },
      } = ae({ name: t, control: r }),
      s = n == null ? void 0 : n.id,
      l = y.useCallback(
        (a) => {
          i({ id: a });
        },
        [i]
      );
    return { field: { value: s, onChange: l } };
  },
  ur = (e) => {
    const { path: t, relatedModelOptions: r, selectedRecordIdFromController: n } = e,
      { getValues: i, setValue: s } = ot(),
      l = i(t),
      a = i(`${t}Id`),
      o = a == null,
      d = !o && l === null && a ? a : void 0,
      u = y.useCallback(() => {
        s(`${t}Id`, null);
      }, [s, t]),
      c = r.relatedModel.records.find((f) => f.id === n) ?? l;
    return { noSelectedRecord: o, danglingSelectedRecordId: d, maybeClearDanglingSelectedRecord: u, selectedRecord: c };
  },
  fr = (e) => {
    const { field: t } = e,
      r = L(t),
      { path: n } = r,
      i = dt({ name: n, keyName: "_fieldArrayKey" }),
      s = y.useMemo(
        () =>
          i.fields.map((l) => {
            const { _fieldArrayKey: a, ...o } = l;
            return o;
          }),
        [i.fields]
      );
    return { fieldArrayPath: n, fieldMetadata: r, fieldArray: i, records: s };
  },
  kr = (e) => {
    var I;
    const { field: t } = e,
      { fieldMetadata: r, fieldArray: n, records: i } = fr({ field: t }),
      { metadata: s } = r,
      l = y.useMemo(() => {
        var g;
        return (g = s.configuration.inverseField) == null ? void 0 : g.apiIdentifier;
      }, [s.configuration]),
      { remove: a, append: o, update: d } = n,
      u = Ce(e),
      { relatedModel: c } = u,
      f = (I = c.error) == null ? void 0 : I.message,
      h = c.fetching,
      A = y.useMemo(() => (i ?? []).filter((g) => !("_unlink" in g && g._unlink)), [i]),
      b = y.useCallback(
        (g) => {
          const m = i.findIndex((p) => p.id === g.id);
          m < 0 || ("_link" in g ? a(m) : d(m, { ...g, _unlink: { id: g.id, inverseFieldApiIdentifier: l } }));
        },
        [l, i, a, d]
      ),
      v = y.useCallback(
        (g) => {
          const m = (i ?? []).findIndex((p) => p.id === g.id);
          if (m >= 0) {
            const p = i[m];
            if ("_unlink" in p && p._unlink) {
              const { _unlink: k, ...F } = p;
              d(m, F);
            } else b(g);
          } else o({ ...g, _link: g.id });
        },
        [i, b, d, o]
      );
    return {
      fieldMetadata: r,
      relatedModelOptions: u,
      selectedRecords: A,
      errorMessage: f,
      isLoading: h,
      onSelectRecord: v,
      onRemoveRecord: b,
    };
  },
  Or = () => {
    const { metadata: e, submitResult: t } = we(),
      [r, n] = y.useState(!0),
      [i, s] = y.useState(void 0),
      l = y.useCallback(() => n(!0), []);
    y.useEffect(() => {
      (!t.isSuccessful && !t.error) || (s(t), n(!1));
    }, [t]);
    const a = y.useMemo(() => {
      var o;
      if (i != null && i.isSuccessful)
        return e && N(e) ? `Saved ${`${e == null ? void 0 : e.name} `}successfully.` : `${e == null ? void 0 : e.name} succeeded.`;
      if (i != null && i.error) return (o = i == null ? void 0 : i.error) == null ? void 0 : o.message;
    }, [i, e]);
    return { show: !r, hide: l, successful: i == null ? void 0 : i.isSuccessful, title: a };
  };
export { Ir as a, vr as b, Mr as c, Fr as d, ir as e, ar as f, or as g, kr as h, Or as i, br as j, Ae as o, Ot as u, Ar as v };
