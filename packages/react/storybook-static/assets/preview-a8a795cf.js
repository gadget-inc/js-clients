let p;
const A = new Uint8Array(16);
function b() {
  if (!p && ((p = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !p))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return p(A);
}
const o = [];
for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
function D(e, t = 0) {
  return (
    o[e[t + 0]] +
    o[e[t + 1]] +
    o[e[t + 2]] +
    o[e[t + 3]] +
    "-" +
    o[e[t + 4]] +
    o[e[t + 5]] +
    "-" +
    o[e[t + 6]] +
    o[e[t + 7]] +
    "-" +
    o[e[t + 8]] +
    o[e[t + 9]] +
    "-" +
    o[e[t + 10]] +
    o[e[t + 11]] +
    o[e[t + 12]] +
    o[e[t + 13]] +
    o[e[t + 14]] +
    o[e[t + 15]]
  );
}
const I = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  m = { randomUUID: I };
function v(e, t, n) {
  if (m.randomUUID && !t && !e) return m.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || b)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (let i = 0; i < 16; ++i) t[n + i] = r[i];
    return t;
  }
  return D(r);
}
const { addons: w } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: l } = __STORYBOOK_MODULE_GLOBAL__,
  { ImplicitActionsDuringRendering: U } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var j = "storybook/actions",
  V = `${j}/action-event`,
  C = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  E = (e, t) => {
    let n = Object.getPrototypeOf(e);
    return !n || t(n) ? n : E(n, t);
  },
  K = (e) =>
    !!(typeof e == "object" && e && E(e, (t) => /^Synthetic(?:Base)?Event$/.test(t.constructor.name)) && typeof e.persist == "function"),
  L = (e) => {
    if (K(e)) {
      let t = Object.create(e.constructor.prototype, Object.getOwnPropertyDescriptors(e));
      t.persist();
      let n = Object.getOwnPropertyDescriptor(t, "view"),
        r = n == null ? void 0 : n.value;
      return (
        typeof r == "object" &&
          (r == null ? void 0 : r.constructor.name) === "Window" &&
          Object.defineProperty(t, "view", { ...n, value: Object.create(r.constructor.prototype) }),
        t
      );
    }
    return e;
  },
  B = () =>
    typeof crypto == "object" && typeof crypto.getRandomValues == "function"
      ? v()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function u(e, t = {}) {
  let n = { ...C, ...t },
    r = function (...i) {
      var g, O;
      if (t.implicit) {
        let y =
          (g = "__STORYBOOK_PREVIEW__" in l ? l.__STORYBOOK_PREVIEW__ : void 0) == null
            ? void 0
            : g.storyRenders.find((d) => d.phase === "playing" || d.phase === "rendering");
        if (y) {
          let d = !((O = window == null ? void 0 : window.FEATURES) != null && O.disallowImplicitActionsInRenderV8),
            R = new U({ phase: y.phase, name: e, deprecated: d });
          if (d) console.warn(R);
          else throw R;
        }
      }
      let c = w.getChannel(),
        s = B(),
        a = 5,
        _ = i.map(L),
        x = i.length > 1 ? _ : _[0],
        S = {
          id: s,
          count: 0,
          data: { name: e, args: x },
          options: { ...n, maxDepth: a + (n.depth || 3), allowFunction: n.allowFunction || !1 },
        };
      c.emit(V, S);
    };
  return (r.isAction = !0), (r.implicit = t.implicit), r;
}
var T = (e, t) => typeof t[e] > "u" && !(e in t),
  M = (e) => {
    let {
      initialArgs: t,
      argTypes: n,
      id: r,
      parameters: { actions: i },
    } = e;
    if (!i || i.disable || !i.argTypesRegex || !n) return {};
    let c = new RegExp(i.argTypesRegex);
    return Object.entries(n)
      .filter(([s]) => !!c.test(s))
      .reduce((s, [a, _]) => (T(a, t) && (s[a] = u(a, { implicit: !0, id: r })), s), {});
  },
  P = (e) => {
    let {
      initialArgs: t,
      argTypes: n,
      parameters: { actions: r },
    } = e;
    return (r != null && r.disable) || !n
      ? {}
      : Object.entries(n)
          .filter(([i, c]) => !!c.action)
          .reduce((i, [c, s]) => (T(c, t) && (i[c] = u(typeof s.action == "string" ? s.action : c)), i), {});
  },
  f = [P, M],
  h = !1,
  Y = (e) => {
    let {
      parameters: { actions: t },
    } = e;
    if (
      !(t != null && t.disable) &&
      !h &&
      "__STORYBOOK_TEST_ON_MOCK_CALL__" in l &&
      typeof l.__STORYBOOK_TEST_ON_MOCK_CALL__ == "function"
    ) {
      let n = l.__STORYBOOK_TEST_ON_MOCK_CALL__;
      n((r, i) => {
        let c = r.getMockName();
        (!/^next\/.*::/.test(c) ||
          [
            "next/router::useRouter()",
            "next/navigation::useRouter()",
            "next/navigation::redirect",
            "next/cache::",
            "next/headers::cookies().set",
            "next/headers::cookies().delete",
            "next/headers::headers().set",
            "next/headers::headers().delete",
          ].some((s) => c.startsWith(s))) &&
          u(c)(i);
      }),
        (h = !0);
    }
  },
  N = [Y];
export { f as argsEnhancers, N as loaders };
