function k(e) {
  const n = {
    left: e.left,
    delta: e.delta,
    children: void 0,
    name: void 0,
    nested: !1,
    stopped: !1
  };
  function t(r) {
    var o;
    const l = [
      j,
      D,
      N,
      F,
      L
    ];
    for (const i of l)
      if (i(r), r.stopped) {
        r.stopped = !1;
        break;
      }
    if (r.children)
      for (const i of r.children)
        t(i), r.result = (o = r.result) !== null && o !== void 0 ? o : r.left, "result" in i ? r.result[i.name] = i.result : delete r.result[i.name];
  }
  return t(n), n.result;
}
function j(e) {
  if (!(!e || !e.children) && !e.delta._t) {
    for (let n of e.children)
      Object.prototype.hasOwnProperty.call(e.left, n.name) && n.result === void 0 ? delete e.left[n.name] : e.left[n.name] !== n.result && (e.left[n.name] = n.result);
    e.result = e.left, e.stopped = !0;
  }
}
function D(e) {
  if (!e || !e.children || e.delta._t !== "a")
    return;
  let n = e.children.length, t;
  for (let r = 0; r < n; r++)
    t = e.children[r], e.left[t.name] = t.result;
  e.result = e.left, e.stopped = !0;
}
function N(e) {
  if (typeof e.delta > "u") {
    e.result = e.left;
    return;
  }
  if (e.nested = !Array.isArray(e.delta), !e.nested) {
    if (e.delta.length === 1) {
      e.result = e.delta[0], e.stopped = !0;
      return;
    }
    if (e.delta.length === 2) {
      e.result = e.delta[1], e.stopped = !0;
      return;
    }
    e.delta.length === 3 && e.delta[2] === 0 && (e.stopped = !0);
  }
}
function F(e) {
  if (e.nested && !e.delta._t) {
    for (let n in e.delta)
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[n],
        delta: e.delta[n],
        name: n,
        stopped: !1
      });
    e.stopped = !0;
  }
}
const E = 3;
let I = {
  numerically(e, n) {
    return e - n;
  },
  numericallyBy(e) {
    return (n, t) => n[e] - t[e];
  }
};
function L(e) {
  if (!e.nested || e.delta._t !== "a")
    return;
  let n, t, r = e.delta, o = e.left, l = [], i = [], s = [];
  for (n in r)
    if (n !== "_t")
      if (n[0] === "_")
        if (r[n][2] === 0 || r[n][2] === E)
          l.push(parseInt(n.slice(1), 10));
        else
          throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${r[n][2]}`);
      else
        r[n].length === 1 ? i.push({
          index: parseInt(n, 10),
          value: r[n][0]
        }) : s.push({
          index: parseInt(n, 10),
          delta: r[n]
        });
  for (l = l.sort(I.numerically), n = l.length - 1; n >= 0; n--) {
    t = l[n];
    let a = r[`_${t}`], R = o.splice(t, 1)[0];
    a[2] === E && i.push({
      index: a[1],
      value: R
    });
  }
  i = i.sort(I.numericallyBy("index"));
  let u = i.length;
  for (n = 0; n < u; n++) {
    let a = i[n];
    o.splice(a.index, 0, a.value);
  }
  let _ = s.length;
  if (_ > 0)
    for (n = 0; n < _; n++) {
      let a = s[n];
      e.children === void 0 && (e.children = []), e.children.push({
        left: e.left[a.index],
        delta: a.delta,
        name: a.index,
        stopped: !1
      });
    }
  if (!e.children) {
    e.result = e.left, e.stopped = !0;
    return;
  }
}
class M extends Error {
  constructor(n) {
    super(n), Object.defineProperty(this, "name", {
      value: "RepeaterOverflowError",
      enumerable: !1
    }), typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(this, this.constructor.prototype) : this.__proto__ = this.constructor.prototype, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, this.constructor);
  }
}
function g(e) {
  e != null && typeof e.then == "function" && e.then(m, m);
}
const w = 0, O = 1, d = 2, y = 3, b = 4, v = 1024, m = () => {
};
function h(e) {
  const n = e.err, t = Promise.resolve(e.execution).then((r) => {
    if (n != null)
      throw n;
    return r;
  });
  return e.err = void 0, e.execution = t.then(() => {
  }, () => {
  }), e.pending === void 0 ? t : e.pending.then(() => t);
}
function f(e, n) {
  const t = e.state >= y;
  return Promise.resolve(n).then((r) => !t && e.state >= b ? h(e).then((o) => ({
    value: o,
    done: !0
  })) : { value: r, done: t });
}
function P(e, n) {
  if (!(e.state >= d))
    if (e.state = d, e.onnext(), e.onstop(), e.err == null && (e.err = n), e.pushes.length === 0 && (typeof e.buffer > "u" || e.buffer.empty))
      c(e);
    else
      for (const t of e.pushes)
        t.resolve();
}
function c(e) {
  if (!(e.state >= y)) {
    e.state < d && P(e), e.state = y, e.buffer = void 0;
    for (const n of e.nexts) {
      const t = e.pending === void 0 ? h(e) : e.pending.then(() => h(e));
      n.resolve(f(e, t));
    }
    e.pushes = [], e.nexts = [];
  }
}
function S(e) {
  e.state >= b || (e.state < y && c(e), e.state = b);
}
function T(e, n) {
  if (g(n), e.pushes.length >= v)
    throw new M(`No more than ${v} pending calls to push are allowed on a single repeater.`);
  if (e.state >= d)
    return Promise.resolve(void 0);
  let t = e.pending === void 0 ? Promise.resolve(n) : e.pending.then(() => n);
  t = t.catch((s) => {
    e.state < d && (e.err = s), S(e);
  });
  let r;
  e.nexts.length ? (e.nexts.shift().resolve(f(e, t)), e.nexts.length ? r = Promise.resolve(e.nexts[0].value) : r = new Promise((u) => e.onnext = u)) : typeof e.buffer < "u" && !e.buffer.full ? (e.buffer.add(t), r = Promise.resolve(void 0)) : r = new Promise((s) => e.pushes.push({ resolve: s, value: t }));
  let o = !0;
  const l = {}, i = r.catch((s) => {
    if (o)
      throw s;
  });
  return l.then = (s, u) => (o = !1, Promise.prototype.then.call(r, s, u)), l.catch = (s) => (o = !1, Promise.prototype.catch.call(r, s)), l.finally = r.finally.bind(r), e.pending = t.then(() => i).catch((s) => {
    e.err = s, S(e);
  }), l;
}
function V(e) {
  const n = P.bind(null, e), t = new Promise((r) => e.onstop = r);
  return n.then = t.then.bind(t), n.catch = t.catch.bind(t), n.finally = t.finally.bind(t), n;
}
function W(e) {
  if (e.state >= O)
    return;
  e.state = O;
  const n = T.bind(null, e), t = V(e);
  e.execution = new Promise((r) => r(e.executor(n, t))), e.execution.catch(() => P(e));
}
const p = /* @__PURE__ */ new WeakMap();
class $ {
  constructor(n, t) {
    p.set(this, {
      executor: n,
      buffer: t,
      err: void 0,
      state: w,
      pushes: [],
      nexts: [],
      pending: void 0,
      execution: void 0,
      onnext: m,
      onstop: m
    });
  }
  next(n) {
    g(n);
    const t = p.get(this);
    if (t === void 0)
      throw new Error("WeakMap error");
    if (t.nexts.length >= v)
      throw new M(`No more than ${v} pending calls to next are allowed on a single repeater.`);
    if (t.state <= w && W(t), t.onnext(n), typeof t.buffer < "u" && !t.buffer.empty) {
      const r = f(t, t.buffer.remove());
      if (t.pushes.length) {
        const o = t.pushes.shift();
        t.buffer.add(o.value), t.onnext = o.resolve;
      }
      return r;
    } else if (t.pushes.length) {
      const r = t.pushes.shift();
      return t.onnext = r.resolve, f(t, r.value);
    } else if (t.state >= d)
      return c(t), f(t, h(t));
    return new Promise((r) => t.nexts.push({ resolve: r, value: n }));
  }
  return(n) {
    g(n);
    const t = p.get(this);
    if (t === void 0)
      throw new Error("WeakMap error");
    return c(t), t.execution = Promise.resolve(t.execution).then(() => n), f(t, h(t));
  }
  throw(n) {
    const t = p.get(this);
    if (t === void 0)
      throw new Error("WeakMap error");
    return t.state <= w || t.state >= d || typeof t.buffer < "u" && !t.buffer.empty ? (c(t), t.err == null && (t.err = n), f(t, h(t))) : this.next(Promise.reject(n));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}
const C = (e) => (n) => new $(async (t, r) => {
  const o = n[Symbol.asyncIterator]();
  r.then(() => {
    var u;
    return (u = o.return) === null || u === void 0 ? void 0 : u.call(o);
  }).catch(console.log);
  let l = null, i = 0, s;
  for (; (s = await o.next()).done === !1; ) {
    if ("revision" in s.value && s.value.revision) {
      const u = {};
      if (s.value.revision === 1) {
        if (!s.value.data)
          throw new Error("Missing data.");
        u.data = s.value.data, l = s.value.data, i = 1;
      } else {
        if (!l)
          throw new Error("No previousData available.");
        if (!s.value.patch)
          throw new Error("Missing patch.");
        if (i + 1 !== s.value.revision)
          throw new Error("Wrong revision received.");
        l = e(l, s.value.patch), u.data = { ...l }, i++;
      }
      s.value.extensions && (u.extensions = s.value.extensions), s.value.errors && (u.errors = s.value.errors), await t(u);
      continue;
    }
    await t(s.value);
  }
  r();
});
function Q(e, n, t) {
  const r = async function* () {
    yield* e;
  }(), o = r.return.bind(r);
  if (n && (r.return = (...l) => (n(), o(...l))), t) {
    const l = r.throw.bind(r);
    r.throw = (i) => (t(i), l(i));
  }
  return r;
}
function A() {
  const e = {};
  return e.promise = new Promise((n, t) => {
    e.resolve = n, e.reject = t;
  }), e;
}
function B() {
  let e = {
    type: "running"
    /* running */
  }, n = A();
  const t = [];
  function r(i) {
    e.type === "running" && (t.push(i), n.resolve(), n = A());
  }
  const o = async function* () {
    for (; ; )
      if (t.length > 0)
        yield t.shift();
      else {
        if (e.type === "error")
          throw e.error;
        if (e.type === "finished")
          return;
        await n.promise;
      }
  }(), l = Q(o, () => {
    e.type === "running" && (e = {
      type: "finished"
      /* finished */
    }, n.resolve());
  }, (i) => {
    e.type === "running" && (e = {
      type: "error",
      error: i
    }, n.resolve());
  });
  return {
    pushValue: r,
    asyncIterableIterator: l
  };
}
const J = (e) => {
  const { pushValue: n, asyncIterableIterator: t } = B(), r = e({
    next: (i) => {
      n(i);
    },
    complete: () => {
      t.return();
    },
    error: (i) => {
      t.throw(i);
    }
  }), o = t.return;
  let l;
  return t.return = () => (l === void 0 && (r(), l = o()), l), t;
};
function U(e, n) {
  return (async () => {
    try {
      for await (const r of e)
        n.next(r);
      n.complete();
    } catch (r) {
      n.error(r);
    }
  })(), () => {
    var r;
    (r = e.return) === null || r === void 0 || r.call(e);
  };
}
const H = (e, n) => k({
  left: e,
  delta: n
}), G = C(H);
export {
  U as applyAsyncIterableIteratorToSink,
  H as applyJSONDiffPatch,
  G as applyLiveQueryJSONDiffPatch,
  J as makeAsyncIterableIteratorFromSink
};
