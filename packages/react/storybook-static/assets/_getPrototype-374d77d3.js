import { c as Bu, g as Uu } from "./index-c6dae603.js";
var or = typeof Bu == "object" && Bu && Bu.Object === Object && Bu,
  be = or,
  Fr = be,
  Cr = typeof self == "object" && self && self.Object === Object && self,
  lr = Fr || Cr || Function("return this")(),
  H = lr,
  cr = H,
  Er = cr.Symbol,
  gu = Er,
  Xu = gu,
  Se = Object.prototype,
  fr = Se.hasOwnProperty,
  pr = Se.toString,
  su = Xu ? Xu.toStringTag : void 0;
function Br(u) {
  var e = fr.call(u, su),
    r = u[su];
  try {
    u[su] = void 0;
    var t = !0;
  } catch {}
  var a = pr.call(u);
  return t && (e ? (u[su] = r) : delete u[su]), a;
}
var hr = Br,
  dr = Object.prototype,
  vr = dr.toString;
function yr(u) {
  return vr.call(u);
}
var gr = yr,
  Zu = gu,
  mr = hr,
  _r = gr,
  xr = "[object Null]",
  Tr = "[object Undefined]",
  ue = Zu ? Zu.toStringTag : void 0;
function br(u) {
  return u == null ? (u === void 0 ? Tr : xr) : ue && ue in Object(u) ? mr(u) : _r(u);
}
var lu = br;
function Sr(u) {
  var e = typeof u;
  return u != null && (e == "object" || e == "function");
}
var ju = Sr,
  $r = lu,
  wr = ju,
  Or = "[object AsyncFunction]",
  Nr = "[object Function]",
  Pr = "[object GeneratorFunction]",
  Ir = "[object Proxy]";
function Rr(u) {
  if (!wr(u)) return !1;
  var e = $r(u);
  return e == Nr || e == Pr || e == Or || e == Ir;
}
var Gu = Rr;
const Ao = Uu(Gu);
var Lr = H,
  Mr = Lr["__core-js_shared__"],
  kr = Mr,
  Ou = kr,
  ee = (function () {
    var u = /[^.]+$/.exec((Ou && Ou.keys && Ou.keys.IE_PROTO) || "");
    return u ? "Symbol(src)_1." + u : "";
  })();
function Ur(u) {
  return !!ee && ee in u;
}
var jr = Ur,
  Gr = Function.prototype,
  Kr = Gr.toString;
function Hr(u) {
  if (u != null) {
    try {
      return Kr.call(u);
    } catch {}
    try {
      return u + "";
    } catch {}
  }
  return "";
}
var $e = Hr,
  Wr = Gu,
  qr = jr,
  zr = ju,
  Vr = $e,
  Jr = /[\\^$.*+?()[\]{}|]/g,
  Qr = /^\[object .+?Constructor\]$/,
  Yr = Function.prototype,
  Xr = Object.prototype,
  Zr = Yr.toString,
  ut = Xr.hasOwnProperty,
  et = RegExp(
    "^" +
      Zr.call(ut)
        .replace(Jr, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function rt(u) {
  if (!zr(u) || qr(u)) return !1;
  var e = Wr(u) ? et : Qr;
  return e.test(Vr(u));
}
var tt = rt;
function at(u, e) {
  return u == null ? void 0 : u[e];
}
var nt = at,
  it = tt,
  st = nt;
function Dt(u, e) {
  var r = st(u, e);
  return it(r) ? r : void 0;
}
var Y = Dt,
  At = Y,
  ot = (function () {
    try {
      var u = At(Object, "defineProperty");
      return u({}, "", {}), u;
    } catch {}
  })(),
  Ft = ot,
  re = Ft;
function Ct(u, e, r) {
  e == "__proto__" && re ? re(u, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (u[e] = r);
}
var lt = Ct;
function ct(u) {
  return function (e, r, t) {
    for (var a = -1, i = Object(e), n = t(e), C = n.length; C--; ) {
      var E = n[u ? C : ++a];
      if (r(i[E], E, i) === !1) break;
    }
    return e;
  };
}
var Et = ct,
  ft = Et,
  pt = ft(),
  Bt = pt;
function ht(u, e) {
  for (var r = -1, t = Array(u); ++r < u; ) t[r] = e(r);
  return t;
}
var dt = ht;
function vt(u) {
  return u != null && typeof u == "object";
}
var cu = vt,
  yt = lu,
  gt = cu,
  mt = "[object Arguments]";
function _t(u) {
  return gt(u) && yt(u) == mt;
}
var xt = _t,
  te = xt,
  Tt = cu,
  we = Object.prototype,
  bt = we.hasOwnProperty,
  St = we.propertyIsEnumerable,
  $t = te(
    (function () {
      return arguments;
    })()
  )
    ? te
    : function (u) {
        return Tt(u) && bt.call(u, "callee") && !St.call(u, "callee");
      },
  Oe = $t,
  wt = Array.isArray,
  q = wt,
  du = { exports: {} };
function Ot() {
  return !1;
}
var Nt = Ot;
du.exports;
(function (u, e) {
  var r = H,
    t = Nt,
    a = e && !e.nodeType && e,
    i = a && !0 && u && !u.nodeType && u,
    n = i && i.exports === a,
    C = n ? r.Buffer : void 0,
    E = C ? C.isBuffer : void 0,
    f = E || t;
  u.exports = f;
})(du, du.exports);
var Ne = du.exports,
  Pt = 9007199254740991,
  It = /^(?:0|[1-9]\d*)$/;
function Rt(u, e) {
  var r = typeof u;
  return (e = e ?? Pt), !!e && (r == "number" || (r != "symbol" && It.test(u))) && u > -1 && u % 1 == 0 && u < e;
}
var Pe = Rt,
  Lt = 9007199254740991;
function Mt(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Lt;
}
var Ku = Mt,
  kt = lu,
  Ut = Ku,
  jt = cu,
  Gt = "[object Arguments]",
  Kt = "[object Array]",
  Ht = "[object Boolean]",
  Wt = "[object Date]",
  qt = "[object Error]",
  zt = "[object Function]",
  Vt = "[object Map]",
  Jt = "[object Number]",
  Qt = "[object Object]",
  Yt = "[object RegExp]",
  Xt = "[object Set]",
  Zt = "[object String]",
  u0 = "[object WeakMap]",
  e0 = "[object ArrayBuffer]",
  r0 = "[object DataView]",
  t0 = "[object Float32Array]",
  a0 = "[object Float64Array]",
  n0 = "[object Int8Array]",
  i0 = "[object Int16Array]",
  s0 = "[object Int32Array]",
  D0 = "[object Uint8Array]",
  A0 = "[object Uint8ClampedArray]",
  o0 = "[object Uint16Array]",
  F0 = "[object Uint32Array]",
  S = {};
S[t0] = S[a0] = S[n0] = S[i0] = S[s0] = S[D0] = S[A0] = S[o0] = S[F0] = !0;
S[Gt] = S[Kt] = S[e0] = S[Ht] = S[r0] = S[Wt] = S[qt] = S[zt] = S[Vt] = S[Jt] = S[Qt] = S[Yt] = S[Xt] = S[Zt] = S[u0] = !1;
function C0(u) {
  return jt(u) && Ut(u.length) && !!S[kt(u)];
}
var l0 = C0;
function c0(u) {
  return function (e) {
    return u(e);
  };
}
var E0 = c0,
  vu = { exports: {} };
vu.exports;
(function (u, e) {
  var r = be,
    t = e && !e.nodeType && e,
    a = t && !0 && u && !u.nodeType && u,
    i = a && a.exports === t,
    n = i && r.process,
    C = (function () {
      try {
        var E = a && a.require && a.require("util").types;
        return E || (n && n.binding && n.binding("util"));
      } catch {}
    })();
  u.exports = C;
})(vu, vu.exports);
var f0 = vu.exports,
  p0 = l0,
  B0 = E0,
  ae = f0,
  ne = ae && ae.isTypedArray,
  h0 = ne ? B0(ne) : p0,
  Ie = h0,
  d0 = dt,
  v0 = Oe,
  y0 = q,
  g0 = Ne,
  m0 = Pe,
  _0 = Ie,
  x0 = Object.prototype,
  T0 = x0.hasOwnProperty;
function b0(u, e) {
  var r = y0(u),
    t = !r && v0(u),
    a = !r && !t && g0(u),
    i = !r && !t && !a && _0(u),
    n = r || t || a || i,
    C = n ? d0(u.length, String) : [],
    E = C.length;
  for (var f in u)
    (e || T0.call(u, f)) &&
      !(
        n &&
        (f == "length" ||
          (a && (f == "offset" || f == "parent")) ||
          (i && (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
          m0(f, E))
      ) &&
      C.push(f);
  return C;
}
var S0 = b0,
  $0 = Object.prototype;
function w0(u) {
  var e = u && u.constructor,
    r = (typeof e == "function" && e.prototype) || $0;
  return u === r;
}
var O0 = w0;
function N0(u, e) {
  return function (r) {
    return u(e(r));
  };
}
var Re = N0,
  P0 = Re,
  I0 = P0(Object.keys, Object),
  R0 = I0,
  L0 = O0,
  M0 = R0,
  k0 = Object.prototype,
  U0 = k0.hasOwnProperty;
function j0(u) {
  if (!L0(u)) return M0(u);
  var e = [];
  for (var r in Object(u)) U0.call(u, r) && r != "constructor" && e.push(r);
  return e;
}
var G0 = j0,
  K0 = Gu,
  H0 = Ku;
function W0(u) {
  return u != null && H0(u.length) && !K0(u);
}
var q0 = W0,
  z0 = S0,
  V0 = G0,
  J0 = q0;
function Q0(u) {
  return J0(u) ? z0(u) : V0(u);
}
var Hu = Q0,
  Y0 = Bt,
  X0 = Hu;
function Z0(u, e) {
  return u && Y0(u, e, X0);
}
var ua = Z0;
function ea() {
  (this.__data__ = []), (this.size = 0);
}
var ra = ea;
function ta(u, e) {
  return u === e || (u !== u && e !== e);
}
var Le = ta,
  aa = Le;
function na(u, e) {
  for (var r = u.length; r--; ) if (aa(u[r][0], e)) return r;
  return -1;
}
var mu = na,
  ia = mu,
  sa = Array.prototype,
  Da = sa.splice;
function Aa(u) {
  var e = this.__data__,
    r = ia(e, u);
  if (r < 0) return !1;
  var t = e.length - 1;
  return r == t ? e.pop() : Da.call(e, r, 1), --this.size, !0;
}
var oa = Aa,
  Fa = mu;
function Ca(u) {
  var e = this.__data__,
    r = Fa(e, u);
  return r < 0 ? void 0 : e[r][1];
}
var la = Ca,
  ca = mu;
function Ea(u) {
  return ca(this.__data__, u) > -1;
}
var fa = Ea,
  pa = mu;
function Ba(u, e) {
  var r = this.__data__,
    t = pa(r, u);
  return t < 0 ? (++this.size, r.push([u, e])) : (r[t][1] = e), this;
}
var ha = Ba,
  da = ra,
  va = oa,
  ya = la,
  ga = fa,
  ma = ha;
function uu(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
uu.prototype.clear = da;
uu.prototype.delete = va;
uu.prototype.get = ya;
uu.prototype.has = ga;
uu.prototype.set = ma;
var _u = uu,
  _a = _u;
function xa() {
  (this.__data__ = new _a()), (this.size = 0);
}
var Ta = xa;
function ba(u) {
  var e = this.__data__,
    r = e.delete(u);
  return (this.size = e.size), r;
}
var Sa = ba;
function $a(u) {
  return this.__data__.get(u);
}
var wa = $a;
function Oa(u) {
  return this.__data__.has(u);
}
var Na = Oa,
  Pa = Y,
  Ia = H,
  Ra = Pa(Ia, "Map"),
  Wu = Ra,
  La = Y,
  Ma = La(Object, "create"),
  xu = Ma,
  ie = xu;
function ka() {
  (this.__data__ = ie ? ie(null) : {}), (this.size = 0);
}
var Ua = ka;
function ja(u) {
  var e = this.has(u) && delete this.__data__[u];
  return (this.size -= e ? 1 : 0), e;
}
var Ga = ja,
  Ka = xu,
  Ha = "__lodash_hash_undefined__",
  Wa = Object.prototype,
  qa = Wa.hasOwnProperty;
function za(u) {
  var e = this.__data__;
  if (Ka) {
    var r = e[u];
    return r === Ha ? void 0 : r;
  }
  return qa.call(e, u) ? e[u] : void 0;
}
var Va = za,
  Ja = xu,
  Qa = Object.prototype,
  Ya = Qa.hasOwnProperty;
function Xa(u) {
  var e = this.__data__;
  return Ja ? e[u] !== void 0 : Ya.call(e, u);
}
var Za = Xa,
  un = xu,
  en = "__lodash_hash_undefined__";
function rn(u, e) {
  var r = this.__data__;
  return (this.size += this.has(u) ? 0 : 1), (r[u] = un && e === void 0 ? en : e), this;
}
var tn = rn,
  an = Ua,
  nn = Ga,
  sn = Va,
  Dn = Za,
  An = tn;
function eu(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
eu.prototype.clear = an;
eu.prototype.delete = nn;
eu.prototype.get = sn;
eu.prototype.has = Dn;
eu.prototype.set = An;
var on = eu,
  se = on,
  Fn = _u,
  Cn = Wu;
function ln() {
  (this.size = 0), (this.__data__ = { hash: new se(), map: new (Cn || Fn)(), string: new se() });
}
var cn = ln;
function En(u) {
  var e = typeof u;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? u !== "__proto__" : u === null;
}
var fn = En,
  pn = fn;
function Bn(u, e) {
  var r = u.__data__;
  return pn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var Tu = Bn,
  hn = Tu;
function dn(u) {
  var e = hn(this, u).delete(u);
  return (this.size -= e ? 1 : 0), e;
}
var vn = dn,
  yn = Tu;
function gn(u) {
  return yn(this, u).get(u);
}
var mn = gn,
  _n = Tu;
function xn(u) {
  return _n(this, u).has(u);
}
var Tn = xn,
  bn = Tu;
function Sn(u, e) {
  var r = bn(this, u),
    t = r.size;
  return r.set(u, e), (this.size += r.size == t ? 0 : 1), this;
}
var $n = Sn,
  wn = cn,
  On = vn,
  Nn = mn,
  Pn = Tn,
  In = $n;
function ru(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
ru.prototype.clear = wn;
ru.prototype.delete = On;
ru.prototype.get = Nn;
ru.prototype.has = Pn;
ru.prototype.set = In;
var qu = ru,
  Rn = _u,
  Ln = Wu,
  Mn = qu,
  kn = 200;
function Un(u, e) {
  var r = this.__data__;
  if (r instanceof Rn) {
    var t = r.__data__;
    if (!Ln || t.length < kn - 1) return t.push([u, e]), (this.size = ++r.size), this;
    r = this.__data__ = new Mn(t);
  }
  return r.set(u, e), (this.size = r.size), this;
}
var jn = Un,
  Gn = _u,
  Kn = Ta,
  Hn = Sa,
  Wn = wa,
  qn = Na,
  zn = jn;
function tu(u) {
  var e = (this.__data__ = new Gn(u));
  this.size = e.size;
}
tu.prototype.clear = Kn;
tu.prototype.delete = Hn;
tu.prototype.get = Wn;
tu.prototype.has = qn;
tu.prototype.set = zn;
var Me = tu,
  Vn = "__lodash_hash_undefined__";
function Jn(u) {
  return this.__data__.set(u, Vn), this;
}
var Qn = Jn;
function Yn(u) {
  return this.__data__.has(u);
}
var Xn = Yn,
  Zn = qu,
  ui = Qn,
  ei = Xn;
function yu(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.__data__ = new Zn(); ++e < r; ) this.add(u[e]);
}
yu.prototype.add = yu.prototype.push = ui;
yu.prototype.has = ei;
var ri = yu;
function ti(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length; ++r < t; ) if (e(u[r], r, u)) return !0;
  return !1;
}
var ai = ti;
function ni(u, e) {
  return u.has(e);
}
var ii = ni,
  si = ri,
  Di = ai,
  Ai = ii,
  oi = 1,
  Fi = 2;
function Ci(u, e, r, t, a, i) {
  var n = r & oi,
    C = u.length,
    E = e.length;
  if (C != E && !(n && E > C)) return !1;
  var f = i.get(u),
    T = i.get(e);
  if (f && T) return f == e && T == u;
  var x = -1,
    F = !0,
    m = r & Fi ? new si() : void 0;
  for (i.set(u, e), i.set(e, u); ++x < C; ) {
    var v = u[x],
      c = e[x];
    if (t) var p = n ? t(c, v, x, e, u, i) : t(v, c, x, u, e, i);
    if (p !== void 0) {
      if (p) continue;
      F = !1;
      break;
    }
    if (m) {
      if (
        !Di(e, function (I, L) {
          if (!Ai(m, L) && (v === I || a(v, I, r, t, i))) return m.push(L);
        })
      ) {
        F = !1;
        break;
      }
    } else if (!(v === c || a(v, c, r, t, i))) {
      F = !1;
      break;
    }
  }
  return i.delete(u), i.delete(e), F;
}
var ke = Ci,
  li = H,
  ci = li.Uint8Array,
  Ei = ci;
function fi(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (t, a) {
      r[++e] = [a, t];
    }),
    r
  );
}
var pi = fi;
function Bi(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (t) {
      r[++e] = t;
    }),
    r
  );
}
var hi = Bi,
  De = gu,
  Ae = Ei,
  di = Le,
  vi = ke,
  yi = pi,
  gi = hi,
  mi = 1,
  _i = 2,
  xi = "[object Boolean]",
  Ti = "[object Date]",
  bi = "[object Error]",
  Si = "[object Map]",
  $i = "[object Number]",
  wi = "[object RegExp]",
  Oi = "[object Set]",
  Ni = "[object String]",
  Pi = "[object Symbol]",
  Ii = "[object ArrayBuffer]",
  Ri = "[object DataView]",
  oe = De ? De.prototype : void 0,
  Nu = oe ? oe.valueOf : void 0;
function Li(u, e, r, t, a, i, n) {
  switch (r) {
    case Ri:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset) return !1;
      (u = u.buffer), (e = e.buffer);
    case Ii:
      return !(u.byteLength != e.byteLength || !i(new Ae(u), new Ae(e)));
    case xi:
    case Ti:
    case $i:
      return di(+u, +e);
    case bi:
      return u.name == e.name && u.message == e.message;
    case wi:
    case Ni:
      return u == e + "";
    case Si:
      var C = yi;
    case Oi:
      var E = t & mi;
      if ((C || (C = gi), u.size != e.size && !E)) return !1;
      var f = n.get(u);
      if (f) return f == e;
      (t |= _i), n.set(u, e);
      var T = vi(C(u), C(e), t, a, i, n);
      return n.delete(u), T;
    case Pi:
      if (Nu) return Nu.call(u) == Nu.call(e);
  }
  return !1;
}
var Mi = Li;
function ki(u, e) {
  for (var r = -1, t = e.length, a = u.length; ++r < t; ) u[a + r] = e[r];
  return u;
}
var Ui = ki,
  ji = Ui,
  Gi = q;
function Ki(u, e, r) {
  var t = e(u);
  return Gi(u) ? t : ji(t, r(u));
}
var Hi = Ki;
function Wi(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = 0, i = []; ++r < t; ) {
    var n = u[r];
    e(n, r, u) && (i[a++] = n);
  }
  return i;
}
var qi = Wi;
function zi() {
  return [];
}
var Vi = zi,
  Ji = qi,
  Qi = Vi,
  Yi = Object.prototype,
  Xi = Yi.propertyIsEnumerable,
  Fe = Object.getOwnPropertySymbols,
  Zi = Fe
    ? function (u) {
        return u == null
          ? []
          : ((u = Object(u)),
            Ji(Fe(u), function (e) {
              return Xi.call(u, e);
            }));
      }
    : Qi,
  us = Zi,
  es = Hi,
  rs = us,
  ts = Hu;
function as(u) {
  return es(u, ts, rs);
}
var ns = as,
  Ce = ns,
  is = 1,
  ss = Object.prototype,
  Ds = ss.hasOwnProperty;
function As(u, e, r, t, a, i) {
  var n = r & is,
    C = Ce(u),
    E = C.length,
    f = Ce(e),
    T = f.length;
  if (E != T && !n) return !1;
  for (var x = E; x--; ) {
    var F = C[x];
    if (!(n ? F in e : Ds.call(e, F))) return !1;
  }
  var m = i.get(u),
    v = i.get(e);
  if (m && v) return m == e && v == u;
  var c = !0;
  i.set(u, e), i.set(e, u);
  for (var p = n; ++x < E; ) {
    F = C[x];
    var I = u[F],
      L = e[F];
    if (t) var z = n ? t(L, I, F, e, u, i) : t(I, L, F, u, e, i);
    if (!(z === void 0 ? I === L || a(I, L, r, t, i) : z)) {
      c = !1;
      break;
    }
    p || (p = F == "constructor");
  }
  if (c && !p) {
    var M = u.constructor,
      _ = e.constructor;
    M != _ &&
      "constructor" in u &&
      "constructor" in e &&
      !(typeof M == "function" && M instanceof M && typeof _ == "function" && _ instanceof _) &&
      (c = !1);
  }
  return i.delete(u), i.delete(e), c;
}
var os = As,
  Fs = Y,
  Cs = H,
  ls = Fs(Cs, "DataView"),
  cs = ls,
  Es = Y,
  fs = H,
  ps = Es(fs, "Promise"),
  Bs = ps,
  hs = Y,
  ds = H,
  vs = hs(ds, "Set"),
  ys = vs,
  gs = Y,
  ms = H,
  _s = gs(ms, "WeakMap"),
  xs = _s,
  Iu = cs,
  Ru = Wu,
  Lu = Bs,
  Mu = ys,
  ku = xs,
  Ue = lu,
  au = $e,
  le = "[object Map]",
  Ts = "[object Object]",
  ce = "[object Promise]",
  Ee = "[object Set]",
  fe = "[object WeakMap]",
  pe = "[object DataView]",
  bs = au(Iu),
  Ss = au(Ru),
  $s = au(Lu),
  ws = au(Mu),
  Os = au(ku),
  Q = Ue;
((Iu && Q(new Iu(new ArrayBuffer(1))) != pe) ||
  (Ru && Q(new Ru()) != le) ||
  (Lu && Q(Lu.resolve()) != ce) ||
  (Mu && Q(new Mu()) != Ee) ||
  (ku && Q(new ku()) != fe)) &&
  (Q = function (u) {
    var e = Ue(u),
      r = e == Ts ? u.constructor : void 0,
      t = r ? au(r) : "";
    if (t)
      switch (t) {
        case bs:
          return pe;
        case Ss:
          return le;
        case $s:
          return ce;
        case ws:
          return Ee;
        case Os:
          return fe;
      }
    return e;
  });
var Ns = Q,
  Pu = Me,
  Ps = ke,
  Is = Mi,
  Rs = os,
  Be = Ns,
  he = q,
  de = Ne,
  Ls = Ie,
  Ms = 1,
  ve = "[object Arguments]",
  ye = "[object Array]",
  hu = "[object Object]",
  ks = Object.prototype,
  ge = ks.hasOwnProperty;
function Us(u, e, r, t, a, i) {
  var n = he(u),
    C = he(e),
    E = n ? ye : Be(u),
    f = C ? ye : Be(e);
  (E = E == ve ? hu : E), (f = f == ve ? hu : f);
  var T = E == hu,
    x = f == hu,
    F = E == f;
  if (F && de(u)) {
    if (!de(e)) return !1;
    (n = !0), (T = !1);
  }
  if (F && !T) return i || (i = new Pu()), n || Ls(u) ? Ps(u, e, r, t, a, i) : Is(u, e, E, r, t, a, i);
  if (!(r & Ms)) {
    var m = T && ge.call(u, "__wrapped__"),
      v = x && ge.call(e, "__wrapped__");
    if (m || v) {
      var c = m ? u.value() : u,
        p = v ? e.value() : e;
      return i || (i = new Pu()), a(c, p, r, t, i);
    }
  }
  return F ? (i || (i = new Pu()), Rs(u, e, r, t, a, i)) : !1;
}
var js = Us,
  Gs = js,
  me = cu;
function je(u, e, r, t, a) {
  return u === e ? !0 : u == null || e == null || (!me(u) && !me(e)) ? u !== u && e !== e : Gs(u, e, r, t, je, a);
}
var Ge = je,
  Ks = Me,
  Hs = Ge,
  Ws = 1,
  qs = 2;
function zs(u, e, r, t) {
  var a = r.length,
    i = a,
    n = !t;
  if (u == null) return !i;
  for (u = Object(u); a--; ) {
    var C = r[a];
    if (n && C[2] ? C[1] !== u[C[0]] : !(C[0] in u)) return !1;
  }
  for (; ++a < i; ) {
    C = r[a];
    var E = C[0],
      f = u[E],
      T = C[1];
    if (n && C[2]) {
      if (f === void 0 && !(E in u)) return !1;
    } else {
      var x = new Ks();
      if (t) var F = t(f, T, E, u, e, x);
      if (!(F === void 0 ? Hs(T, f, Ws | qs, t, x) : F)) return !1;
    }
  }
  return !0;
}
var Vs = zs,
  Js = ju;
function Qs(u) {
  return u === u && !Js(u);
}
var Ke = Qs,
  Ys = Ke,
  Xs = Hu;
function Zs(u) {
  for (var e = Xs(u), r = e.length; r--; ) {
    var t = e[r],
      a = u[t];
    e[r] = [t, a, Ys(a)];
  }
  return e;
}
var uD = Zs;
function eD(u, e) {
  return function (r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r));
  };
}
var He = eD,
  rD = Vs,
  tD = uD,
  aD = He;
function nD(u) {
  var e = tD(u);
  return e.length == 1 && e[0][2]
    ? aD(e[0][0], e[0][1])
    : function (r) {
        return r === u || rD(r, u, e);
      };
}
var iD = nD,
  sD = lu,
  DD = cu,
  AD = "[object Symbol]";
function oD(u) {
  return typeof u == "symbol" || (DD(u) && sD(u) == AD);
}
var zu = oD,
  FD = q,
  CD = zu,
  lD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  cD = /^\w*$/;
function ED(u, e) {
  if (FD(u)) return !1;
  var r = typeof u;
  return r == "number" || r == "symbol" || r == "boolean" || u == null || CD(u)
    ? !0
    : cD.test(u) || !lD.test(u) || (e != null && u in Object(e));
}
var Vu = ED,
  We = qu,
  fD = "Expected a function";
function Ju(u, e) {
  if (typeof u != "function" || (e != null && typeof e != "function")) throw new TypeError(fD);
  var r = function () {
    var t = arguments,
      a = e ? e.apply(this, t) : t[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var n = u.apply(this, t);
    return (r.cache = i.set(a, n) || i), n;
  };
  return (r.cache = new (Ju.Cache || We)()), r;
}
Ju.Cache = We;
var pD = Ju,
  BD = pD,
  hD = 500;
function dD(u) {
  var e = BD(u, function (t) {
      return r.size === hD && r.clear(), t;
    }),
    r = e.cache;
  return e;
}
var vD = dD,
  yD = vD,
  gD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  mD = /\\(\\)?/g,
  _D = yD(function (u) {
    var e = [];
    return (
      u.charCodeAt(0) === 46 && e.push(""),
      u.replace(gD, function (r, t, a, i) {
        e.push(a ? i.replace(mD, "$1") : t || r);
      }),
      e
    );
  }),
  xD = _D;
function TD(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = Array(t); ++r < t; ) a[r] = e(u[r], r, u);
  return a;
}
var bD = TD,
  _e = gu,
  SD = bD,
  $D = q,
  wD = zu,
  OD = 1 / 0,
  xe = _e ? _e.prototype : void 0,
  Te = xe ? xe.toString : void 0;
function qe(u) {
  if (typeof u == "string") return u;
  if ($D(u)) return SD(u, qe) + "";
  if (wD(u)) return Te ? Te.call(u) : "";
  var e = u + "";
  return e == "0" && 1 / u == -OD ? "-0" : e;
}
var ND = qe,
  PD = ND;
function ID(u) {
  return u == null ? "" : PD(u);
}
var RD = ID,
  LD = q,
  MD = Vu,
  kD = xD,
  UD = RD;
function jD(u, e) {
  return LD(u) ? u : MD(u, e) ? [u] : kD(UD(u));
}
var ze = jD,
  GD = zu,
  KD = 1 / 0;
function HD(u) {
  if (typeof u == "string" || GD(u)) return u;
  var e = u + "";
  return e == "0" && 1 / u == -KD ? "-0" : e;
}
var bu = HD,
  WD = ze,
  qD = bu;
function zD(u, e) {
  e = WD(e, u);
  for (var r = 0, t = e.length; u != null && r < t; ) u = u[qD(e[r++])];
  return r && r == t ? u : void 0;
}
var Ve = zD,
  VD = Ve;
function JD(u, e, r) {
  var t = u == null ? void 0 : VD(u, e);
  return t === void 0 ? r : t;
}
var QD = JD;
function YD(u, e) {
  return u != null && e in Object(u);
}
var XD = YD,
  ZD = ze,
  u1 = Oe,
  e1 = q,
  r1 = Pe,
  t1 = Ku,
  a1 = bu;
function n1(u, e, r) {
  e = ZD(e, u);
  for (var t = -1, a = e.length, i = !1; ++t < a; ) {
    var n = a1(e[t]);
    if (!(i = u != null && r(u, n))) break;
    u = u[n];
  }
  return i || ++t != a ? i : ((a = u == null ? 0 : u.length), !!a && t1(a) && r1(n, a) && (e1(u) || u1(u)));
}
var i1 = n1,
  s1 = XD,
  D1 = i1;
function A1(u, e) {
  return u != null && D1(u, e, s1);
}
var o1 = A1,
  F1 = Ge,
  C1 = QD,
  l1 = o1,
  c1 = Vu,
  E1 = Ke,
  f1 = He,
  p1 = bu,
  B1 = 1,
  h1 = 2;
function d1(u, e) {
  return c1(u) && E1(e)
    ? f1(p1(u), e)
    : function (r) {
        var t = C1(r, u);
        return t === void 0 && t === e ? l1(r, u) : F1(e, t, B1 | h1);
      };
}
var v1 = d1;
function y1(u) {
  return u;
}
var g1 = y1;
function m1(u) {
  return function (e) {
    return e == null ? void 0 : e[u];
  };
}
var _1 = m1,
  x1 = Ve;
function T1(u) {
  return function (e) {
    return x1(e, u);
  };
}
var b1 = T1,
  S1 = _1,
  $1 = b1,
  w1 = Vu,
  O1 = bu;
function N1(u) {
  return w1(u) ? S1(O1(u)) : $1(u);
}
var P1 = N1,
  I1 = iD,
  R1 = v1,
  L1 = g1,
  M1 = q,
  k1 = P1;
function U1(u) {
  return typeof u == "function" ? u : u == null ? L1 : typeof u == "object" ? (M1(u) ? R1(u[0], u[1]) : I1(u)) : k1(u);
}
var j1 = U1,
  G1 = lt,
  K1 = ua,
  H1 = j1;
function W1(u, e) {
  var r = {};
  return (
    (e = H1(e)),
    K1(u, function (t, a, i) {
      G1(r, a, e(t, a, i));
    }),
    r
  );
}
var q1 = W1;
const z1 = Uu(q1);
var Je = {},
  ou = {},
  Qe = { exports: {} };
(function () {
  function u(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function e(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(n) {
    if (n == null) return !1;
    switch (n.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function t(n) {
    return r(n) || (n != null && n.type === "FunctionDeclaration");
  }
  function a(n) {
    switch (n.type) {
      case "IfStatement":
        return n.alternate != null ? n.alternate : n.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return n.body;
    }
    return null;
  }
  function i(n) {
    var C;
    if (n.type !== "IfStatement" || n.alternate == null) return !1;
    C = n.consequent;
    do {
      if (C.type === "IfStatement" && C.alternate == null) return !0;
      C = a(C);
    } while (C);
    return !1;
  }
  Qe.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: t,
    isProblematicIfStatement: i,
    trailingStatement: a,
  };
})();
var V1 = Qe.exports,
  Ye = { exports: {} };
(function () {
  var u, e, r, t, a, i;
  (e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function n(p) {
    return 48 <= p && p <= 57;
  }
  function C(p) {
    return (48 <= p && p <= 57) || (97 <= p && p <= 102) || (65 <= p && p <= 70);
  }
  function E(p) {
    return p >= 48 && p <= 55;
  }
  r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
  function f(p) {
    return p === 32 || p === 9 || p === 11 || p === 12 || p === 160 || (p >= 5760 && r.indexOf(p) >= 0);
  }
  function T(p) {
    return p === 10 || p === 13 || p === 8232 || p === 8233;
  }
  function x(p) {
    if (p <= 65535) return String.fromCharCode(p);
    var I = String.fromCharCode(Math.floor((p - 65536) / 1024) + 55296),
      L = String.fromCharCode(((p - 65536) % 1024) + 56320);
    return I + L;
  }
  for (t = new Array(128), i = 0; i < 128; ++i) t[i] = (i >= 97 && i <= 122) || (i >= 65 && i <= 90) || i === 36 || i === 95;
  for (a = new Array(128), i = 0; i < 128; ++i)
    a[i] = (i >= 97 && i <= 122) || (i >= 65 && i <= 90) || (i >= 48 && i <= 57) || i === 36 || i === 95;
  function F(p) {
    return p < 128 ? t[p] : e.NonAsciiIdentifierStart.test(x(p));
  }
  function m(p) {
    return p < 128 ? a[p] : e.NonAsciiIdentifierPart.test(x(p));
  }
  function v(p) {
    return p < 128 ? t[p] : u.NonAsciiIdentifierStart.test(x(p));
  }
  function c(p) {
    return p < 128 ? a[p] : u.NonAsciiIdentifierPart.test(x(p));
  }
  Ye.exports = {
    isDecimalDigit: n,
    isHexDigit: C,
    isOctalDigit: E,
    isWhiteSpace: f,
    isLineTerminator: T,
    isIdentifierStartES5: F,
    isIdentifierPartES5: m,
    isIdentifierStartES6: v,
    isIdentifierPartES6: c,
  };
})();
var Xe = Ye.exports,
  Ze = { exports: {} };
(function () {
  var u = Xe;
  function e(F) {
    switch (F) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(F, m) {
    return !m && F === "yield" ? !1 : t(F, m);
  }
  function t(F, m) {
    if (m && e(F)) return !0;
    switch (F.length) {
      case 2:
        return F === "if" || F === "in" || F === "do";
      case 3:
        return F === "var" || F === "for" || F === "new" || F === "try";
      case 4:
        return F === "this" || F === "else" || F === "case" || F === "void" || F === "with" || F === "enum";
      case 5:
        return (
          F === "while" ||
          F === "break" ||
          F === "catch" ||
          F === "throw" ||
          F === "const" ||
          F === "yield" ||
          F === "class" ||
          F === "super"
        );
      case 6:
        return F === "return" || F === "typeof" || F === "delete" || F === "switch" || F === "export" || F === "import";
      case 7:
        return F === "default" || F === "finally" || F === "extends";
      case 8:
        return F === "function" || F === "continue" || F === "debugger";
      case 10:
        return F === "instanceof";
      default:
        return !1;
    }
  }
  function a(F, m) {
    return F === "null" || F === "true" || F === "false" || r(F, m);
  }
  function i(F, m) {
    return F === "null" || F === "true" || F === "false" || t(F, m);
  }
  function n(F) {
    return F === "eval" || F === "arguments";
  }
  function C(F) {
    var m, v, c;
    if (F.length === 0 || ((c = F.charCodeAt(0)), !u.isIdentifierStartES5(c))) return !1;
    for (m = 1, v = F.length; m < v; ++m) if (((c = F.charCodeAt(m)), !u.isIdentifierPartES5(c))) return !1;
    return !0;
  }
  function E(F, m) {
    return (F - 55296) * 1024 + (m - 56320) + 65536;
  }
  function f(F) {
    var m, v, c, p, I;
    if (F.length === 0) return !1;
    for (I = u.isIdentifierStartES6, m = 0, v = F.length; m < v; ++m) {
      if (((c = F.charCodeAt(m)), 55296 <= c && c <= 56319)) {
        if ((++m, m >= v || ((p = F.charCodeAt(m)), !(56320 <= p && p <= 57343)))) return !1;
        c = E(c, p);
      }
      if (!I(c)) return !1;
      I = u.isIdentifierPartES6;
    }
    return !0;
  }
  function T(F, m) {
    return C(F) && !a(F, m);
  }
  function x(F, m) {
    return f(F) && !i(F, m);
  }
  Ze.exports = {
    isKeywordES5: r,
    isKeywordES6: t,
    isReservedWordES5: a,
    isReservedWordES6: i,
    isRestrictedWord: n,
    isIdentifierNameES5: C,
    isIdentifierNameES6: f,
    isIdentifierES5: T,
    isIdentifierES6: x,
  };
})();
var J1 = Ze.exports;
(function () {
  (ou.ast = V1), (ou.code = Xe), (ou.keyword = J1);
})();
var Du = {},
  X = {};
const Q1 = "doctrine",
  Y1 = "JSDoc parser",
  X1 = "https://github.com/eslint/doctrine",
  Z1 = "lib/doctrine.js",
  uA = "3.0.0",
  eA = { node: ">=6.0.0" },
  rA = { lib: "./lib" },
  tA = ["lib"],
  aA = [
    { name: "Nicholas C. Zakas", email: "nicholas+npm@nczconsulting.com", web: "https://www.nczonline.net" },
    { name: "Yusuke Suzuki", email: "utatane.tea@gmail.com", web: "https://github.com/Constellation" },
  ],
  nA = "eslint/doctrine",
  iA = {
    coveralls: "^3.0.1",
    dateformat: "^1.0.11",
    eslint: "^1.10.3",
    "eslint-release": "^1.0.0",
    linefix: "^0.1.1",
    mocha: "^3.4.2",
    "npm-license": "^0.3.1",
    nyc: "^10.3.2",
    semver: "^5.0.3",
    shelljs: "^0.5.3",
    "shelljs-nodecli": "^0.1.1",
    should: "^5.0.1",
  },
  sA = "Apache-2.0",
  DA = {
    pretest: "npm run lint",
    test: "nyc mocha",
    coveralls: "nyc report --reporter=text-lcov | coveralls",
    lint: "eslint lib/",
    "generate-release": "eslint-generate-release",
    "generate-alpharelease": "eslint-generate-prerelease alpha",
    "generate-betarelease": "eslint-generate-prerelease beta",
    "generate-rcrelease": "eslint-generate-prerelease rc",
    "publish-release": "eslint-publish-release",
  },
  AA = { esutils: "^2.0.2" },
  oA = {
    name: Q1,
    description: Y1,
    homepage: X1,
    main: Z1,
    version: uA,
    engines: eA,
    directories: rA,
    files: tA,
    maintainers: aA,
    repository: nA,
    devDependencies: iA,
    license: sA,
    scripts: DA,
    dependencies: AA,
  };
function FA(u, e) {
  if (!u) throw new Error(e || "unknown assertion error");
}
var CA = FA;
(function () {
  var u;
  (u = oA.version), (X.VERSION = u);
  function e(t) {
    (this.name = "DoctrineError"), (this.message = t);
  }
  (e.prototype = (function () {
    var t = function () {};
    return (t.prototype = Error.prototype), new t();
  })()),
    (e.prototype.constructor = e),
    (X.DoctrineError = e);
  function r(t) {
    throw new e(t);
  }
  (X.throwError = r), (X.assert = CA);
})();
(function () {
  var u, e, r, t, a, i, n, C, E, f, T, x;
  (E = ou),
    (f = X),
    (u = {
      NullableLiteral: "NullableLiteral",
      AllLiteral: "AllLiteral",
      NullLiteral: "NullLiteral",
      UndefinedLiteral: "UndefinedLiteral",
      VoidLiteral: "VoidLiteral",
      UnionType: "UnionType",
      ArrayType: "ArrayType",
      RecordType: "RecordType",
      FieldType: "FieldType",
      FunctionType: "FunctionType",
      ParameterType: "ParameterType",
      RestType: "RestType",
      NonNullableType: "NonNullableType",
      OptionalType: "OptionalType",
      NullableType: "NullableType",
      NameExpression: "NameExpression",
      TypeApplication: "TypeApplication",
      StringLiteralType: "StringLiteralType",
      NumericLiteralType: "NumericLiteralType",
      BooleanLiteralType: "BooleanLiteralType",
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function F(s) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(s)) === -1 && !E.code.isWhiteSpace(s) && !E.code.isLineTerminator(s);
  }
  function m(s, D, d, o) {
    (this._previous = s), (this._index = D), (this._token = d), (this._value = o);
  }
  (m.prototype.restore = function () {
    (i = this._previous), (a = this._index), (n = this._token), (C = this._value);
  }),
    (m.save = function () {
      return new m(i, a, n, C);
    });
  function v(s, D) {
    return x && (s.range = [D[0] + T, D[1] + T]), s;
  }
  function c() {
    var s = r.charAt(a);
    return (a += 1), s;
  }
  function p(s) {
    var D,
      d,
      o,
      A = 0;
    for (d = s === "u" ? 4 : 2, D = 0; D < d; ++D)
      if (a < t && E.code.isHexDigit(r.charCodeAt(a))) (o = c()), (A = A * 16 + "0123456789abcdef".indexOf(o.toLowerCase()));
      else return "";
    return String.fromCharCode(A);
  }
  function I() {
    var s = "",
      D,
      d,
      o,
      A,
      h;
    for (D = r.charAt(a), ++a; a < t; )
      if (((d = c()), d === D)) {
        D = "";
        break;
      } else if (d === "\\")
        if (((d = c()), E.code.isLineTerminator(d.charCodeAt(0)))) d === "\r" && r.charCodeAt(a) === 10 && ++a;
        else
          switch (d) {
            case "n":
              s += `
`;
              break;
            case "r":
              s += "\r";
              break;
            case "t":
              s += "	";
              break;
            case "u":
            case "x":
              (h = a), (A = p(d)), A ? (s += A) : ((a = h), (s += d));
              break;
            case "b":
              s += "\b";
              break;
            case "f":
              s += "\f";
              break;
            case "v":
              s += "\v";
              break;
            default:
              E.code.isOctalDigit(d.charCodeAt(0))
                ? ((o = "01234567".indexOf(d)),
                  a < t &&
                    E.code.isOctalDigit(r.charCodeAt(a)) &&
                    ((o = o * 8 + "01234567".indexOf(c())),
                    "0123".indexOf(d) >= 0 && a < t && E.code.isOctalDigit(r.charCodeAt(a)) && (o = o * 8 + "01234567".indexOf(c()))),
                  (s += String.fromCharCode(o)))
                : (s += d);
              break;
          }
      else {
        if (E.code.isLineTerminator(d.charCodeAt(0))) break;
        s += d;
      }
    return D !== "" && f.throwError("unexpected quote"), (C = s), e.STRING;
  }
  function L() {
    var s, D;
    if (((s = ""), (D = r.charCodeAt(a)), D !== 46)) {
      if (((s = c()), (D = r.charCodeAt(a)), s === "0")) {
        if (D === 120 || D === 88) {
          for (s += c(); a < t && ((D = r.charCodeAt(a)), !!E.code.isHexDigit(D)); ) s += c();
          return (
            s.length <= 2 && f.throwError("unexpected token"),
            a < t && ((D = r.charCodeAt(a)), E.code.isIdentifierStartES5(D) && f.throwError("unexpected token")),
            (C = parseInt(s, 16)),
            e.NUMBER
          );
        }
        if (E.code.isOctalDigit(D)) {
          for (s += c(); a < t && ((D = r.charCodeAt(a)), !!E.code.isOctalDigit(D)); ) s += c();
          return (
            a < t &&
              ((D = r.charCodeAt(a)), (E.code.isIdentifierStartES5(D) || E.code.isDecimalDigit(D)) && f.throwError("unexpected token")),
            (C = parseInt(s, 8)),
            e.NUMBER
          );
        }
        E.code.isDecimalDigit(D) && f.throwError("unexpected token");
      }
      for (; a < t && ((D = r.charCodeAt(a)), !!E.code.isDecimalDigit(D)); ) s += c();
    }
    if (D === 46) for (s += c(); a < t && ((D = r.charCodeAt(a)), !!E.code.isDecimalDigit(D)); ) s += c();
    if (D === 101 || D === 69)
      if (((s += c()), (D = r.charCodeAt(a)), (D === 43 || D === 45) && (s += c()), (D = r.charCodeAt(a)), E.code.isDecimalDigit(D)))
        for (s += c(); a < t && ((D = r.charCodeAt(a)), !!E.code.isDecimalDigit(D)); ) s += c();
      else f.throwError("unexpected token");
    return (
      a < t && ((D = r.charCodeAt(a)), E.code.isIdentifierStartES5(D) && f.throwError("unexpected token")), (C = parseFloat(s)), e.NUMBER
    );
  }
  function z() {
    var s, D;
    for (C = c(); a < t && F(r.charCodeAt(a)); ) {
      if (((s = r.charCodeAt(a)), s === 46)) {
        if (a + 1 >= t) return e.ILLEGAL;
        if (((D = r.charCodeAt(a + 1)), D === 60)) break;
      }
      C += c();
    }
    return e.NAME;
  }
  function M() {
    var s;
    for (i = a; a < t && E.code.isWhiteSpace(r.charCodeAt(a)); ) c();
    if (a >= t) return (n = e.EOF), n;
    switch (((s = r.charCodeAt(a)), s)) {
      case 39:
      case 34:
        return (n = I()), n;
      case 58:
        return c(), (n = e.COLON), n;
      case 44:
        return c(), (n = e.COMMA), n;
      case 40:
        return c(), (n = e.LPAREN), n;
      case 41:
        return c(), (n = e.RPAREN), n;
      case 91:
        return c(), (n = e.LBRACK), n;
      case 93:
        return c(), (n = e.RBRACK), n;
      case 123:
        return c(), (n = e.LBRACE), n;
      case 125:
        return c(), (n = e.RBRACE), n;
      case 46:
        if (a + 1 < t) {
          if (((s = r.charCodeAt(a + 1)), s === 60)) return c(), c(), (n = e.DOT_LT), n;
          if (s === 46 && a + 2 < t && r.charCodeAt(a + 2) === 46) return c(), c(), c(), (n = e.REST), n;
          if (E.code.isDecimalDigit(s)) return (n = L()), n;
        }
        return (n = e.ILLEGAL), n;
      case 60:
        return c(), (n = e.LT), n;
      case 62:
        return c(), (n = e.GT), n;
      case 42:
        return c(), (n = e.STAR), n;
      case 124:
        return c(), (n = e.PIPE), n;
      case 63:
        return c(), (n = e.QUESTION), n;
      case 33:
        return c(), (n = e.BANG), n;
      case 61:
        return c(), (n = e.EQUAL), n;
      case 45:
        return (n = L()), n;
      default:
        return E.code.isDecimalDigit(s) ? ((n = L()), n) : (f.assert(F(s)), (n = z()), n);
    }
  }
  function _(s, D) {
    f.assert(n === s, D || "consumed token not matched"), M();
  }
  function l(s, D) {
    n !== s && f.throwError(D || "unexpected token"), M();
  }
  function k() {
    var s,
      D = a - 1;
    if ((_(e.LPAREN, "UnionType should start with ("), (s = []), n !== e.RPAREN)) for (; s.push(U()), n !== e.RPAREN; ) l(e.PIPE);
    return _(e.RPAREN, "UnionType should end with )"), v({ type: u.UnionType, elements: s }, [D, i]);
  }
  function B() {
    var s,
      D = a - 1,
      d;
    for (_(e.LBRACK, "ArrayType should start with ["), s = []; n !== e.RBRACK; ) {
      if (n === e.REST) {
        (d = a - 3), _(e.REST), s.push(v({ type: u.RestType, expression: U() }, [d, i]));
        break;
      } else s.push(U());
      n !== e.RBRACK && l(e.COMMA);
    }
    return l(e.RBRACK), v({ type: u.ArrayType, elements: s }, [D, i]);
  }
  function j() {
    var s = C;
    if (n === e.NAME || n === e.STRING) return M(), s;
    if (n === e.NUMBER) return _(e.NUMBER), String(s);
    f.throwError("unexpected token");
  }
  function G() {
    var s,
      D = i;
    return (
      (s = j()),
      n === e.COLON
        ? (_(e.COLON), v({ type: u.FieldType, key: s, value: U() }, [D, i]))
        : v({ type: u.FieldType, key: s, value: null }, [D, i])
    );
  }
  function g() {
    var s,
      D = a - 1,
      d;
    if ((_(e.LBRACE, "RecordType should start with {"), (s = []), n === e.COMMA)) _(e.COMMA);
    else for (; n !== e.RBRACE; ) s.push(G()), n !== e.RBRACE && l(e.COMMA);
    return (d = a), l(e.RBRACE), v({ type: u.RecordType, fields: s }, [D, d]);
  }
  function nu() {
    var s = C,
      D = a - s.length;
    return (
      l(e.NAME),
      n === e.COLON && (s === "module" || s === "external" || s === "event") && (_(e.COLON), (s += ":" + C), l(e.NAME)),
      v({ type: u.NameExpression, name: s }, [D, i])
    );
  }
  function Eu() {
    var s = [];
    for (s.push(K()); n === e.COMMA; ) _(e.COMMA), s.push(K());
    return s;
  }
  function V() {
    var s,
      D,
      d = a - C.length;
    return (
      (s = nu()),
      n === e.DOT_LT || n === e.LT ? (M(), (D = Eu()), l(e.GT), v({ type: u.TypeApplication, expression: s, applications: D }, [d, i])) : s
    );
  }
  function fu() {
    return _(e.COLON, "ResultType should start with :"), n === e.NAME && C === "void" ? (_(e.NAME), { type: u.VoidLiteral }) : U();
  }
  function $() {
    for (var s = [], D = !1, d, o = !1, A, h = a - 3, y; n !== e.RPAREN; )
      n === e.REST && (_(e.REST), (o = !0)),
        (A = i),
        (d = U()),
        d.type === u.NameExpression &&
          n === e.COLON &&
          ((y = i - d.name.length), _(e.COLON), (d = v({ type: u.ParameterType, name: d.name, expression: U() }, [y, i]))),
        n === e.EQUAL
          ? (_(e.EQUAL), (d = v({ type: u.OptionalType, expression: d }, [A, i])), (D = !0))
          : D && f.throwError("unexpected token"),
        o && (d = v({ type: u.RestType, expression: d }, [h, i])),
        s.push(d),
        n !== e.RPAREN && l(e.COMMA);
    return s;
  }
  function $u() {
    var s,
      D,
      d,
      o,
      A,
      h = a - C.length;
    return (
      f.assert(n === e.NAME && C === "function", "FunctionType should start with 'function'"),
      _(e.NAME),
      l(e.LPAREN),
      (s = !1),
      (d = []),
      (D = null),
      n !== e.RPAREN &&
        (n === e.NAME && (C === "this" || C === "new")
          ? ((s = C === "new"), _(e.NAME), l(e.COLON), (D = V()), n === e.COMMA && (_(e.COMMA), (d = $())))
          : (d = $())),
      l(e.RPAREN),
      (o = null),
      n === e.COLON && (o = fu()),
      (A = v({ type: u.FunctionType, params: d, result: o }, [h, i])),
      D && ((A.this = D), s && (A.new = !0)),
      A
    );
  }
  function iu() {
    var s, D;
    switch (n) {
      case e.STAR:
        return _(e.STAR), v({ type: u.AllLiteral }, [i - 1, i]);
      case e.LPAREN:
        return k();
      case e.LBRACK:
        return B();
      case e.LBRACE:
        return g();
      case e.NAME:
        if (((D = a - C.length), C === "null")) return _(e.NAME), v({ type: u.NullLiteral }, [D, i]);
        if (C === "undefined") return _(e.NAME), v({ type: u.UndefinedLiteral }, [D, i]);
        if (C === "true" || C === "false") return _(e.NAME), v({ type: u.BooleanLiteralType, value: C === "true" }, [D, i]);
        if (((s = m.save()), C === "function"))
          try {
            return $u();
          } catch {
            s.restore();
          }
        return V();
      case e.STRING:
        return M(), v({ type: u.StringLiteralType, value: C }, [i - C.length - 2, i]);
      case e.NUMBER:
        return M(), v({ type: u.NumericLiteralType, value: C }, [i - String(C).length, i]);
      default:
        f.throwError("unexpected token");
    }
  }
  function U() {
    var s, D;
    return n === e.QUESTION
      ? ((D = a - 1),
        _(e.QUESTION),
        n === e.COMMA || n === e.EQUAL || n === e.RBRACE || n === e.RPAREN || n === e.PIPE || n === e.EOF || n === e.RBRACK || n === e.GT
          ? v({ type: u.NullableLiteral }, [D, i])
          : v({ type: u.NullableType, expression: iu(), prefix: !0 }, [D, i]))
      : n === e.BANG
      ? ((D = a - 1), _(e.BANG), v({ type: u.NonNullableType, expression: iu(), prefix: !0 }, [D, i]))
      : ((D = i),
        (s = iu()),
        n === e.BANG
          ? (_(e.BANG), v({ type: u.NonNullableType, expression: s, prefix: !1 }, [D, i]))
          : n === e.QUESTION
          ? (_(e.QUESTION), v({ type: u.NullableType, expression: s, prefix: !1 }, [D, i]))
          : n === e.LBRACK
          ? (_(e.LBRACK),
            l(e.RBRACK, "expected an array-style type declaration (" + C + "[])"),
            v({ type: u.TypeApplication, expression: v({ type: u.NameExpression, name: "Array" }, [D, i]), applications: [s] }, [D, i]))
          : s);
  }
  function K() {
    var s, D;
    if (((s = U()), n !== e.PIPE)) return s;
    for (D = [s], _(e.PIPE); D.push(U()), n === e.PIPE; ) _(e.PIPE);
    return v({ type: u.UnionType, elements: D }, [0, a]);
  }
  function J() {
    var s;
    return n === e.REST
      ? (_(e.REST), v({ type: u.RestType, expression: K() }, [0, a]))
      : ((s = K()), n === e.EQUAL ? (_(e.EQUAL), v({ type: u.OptionalType, expression: s }, [0, a])) : s);
  }
  function pu(s, D) {
    var d;
    return (
      (r = s),
      (t = r.length),
      (a = 0),
      (i = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (d = K()),
      D && D.midstream ? { expression: d, index: i } : (n !== e.EOF && f.throwError("not reach to EOF"), d)
    );
  }
  function wu(s, D) {
    var d;
    return (
      (r = s),
      (t = r.length),
      (a = 0),
      (i = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (d = J()),
      D && D.midstream ? { expression: d, index: i } : (n !== e.EOF && f.throwError("not reach to EOF"), d)
    );
  }
  function w(s, D, d) {
    var o, A, h;
    switch (s.type) {
      case u.NullableLiteral:
        o = "?";
        break;
      case u.AllLiteral:
        o = "*";
        break;
      case u.NullLiteral:
        o = "null";
        break;
      case u.UndefinedLiteral:
        o = "undefined";
        break;
      case u.VoidLiteral:
        o = "void";
        break;
      case u.UnionType:
        for (d ? (o = "") : (o = "("), A = 0, h = s.elements.length; A < h; ++A)
          (o += w(s.elements[A], D)), A + 1 !== h && (o += D ? "|" : " | ");
        d || (o += ")");
        break;
      case u.ArrayType:
        for (o = "[", A = 0, h = s.elements.length; A < h; ++A) (o += w(s.elements[A], D)), A + 1 !== h && (o += D ? "," : ", ");
        o += "]";
        break;
      case u.RecordType:
        for (o = "{", A = 0, h = s.fields.length; A < h; ++A) (o += w(s.fields[A], D)), A + 1 !== h && (o += D ? "," : ", ");
        o += "}";
        break;
      case u.FieldType:
        s.value ? (o = s.key + (D ? ":" : ": ") + w(s.value, D)) : (o = s.key);
        break;
      case u.FunctionType:
        for (
          o = D ? "function(" : "function (",
            s.this &&
              (s.new ? (o += D ? "new:" : "new: ") : (o += D ? "this:" : "this: "),
              (o += w(s.this, D)),
              s.params.length !== 0 && (o += D ? "," : ", ")),
            A = 0,
            h = s.params.length;
          A < h;
          ++A
        )
          (o += w(s.params[A], D)), A + 1 !== h && (o += D ? "," : ", ");
        (o += ")"), s.result && (o += (D ? ":" : ": ") + w(s.result, D));
        break;
      case u.ParameterType:
        o = s.name + (D ? ":" : ": ") + w(s.expression, D);
        break;
      case u.RestType:
        (o = "..."), s.expression && (o += w(s.expression, D));
        break;
      case u.NonNullableType:
        s.prefix ? (o = "!" + w(s.expression, D)) : (o = w(s.expression, D) + "!");
        break;
      case u.OptionalType:
        o = w(s.expression, D) + "=";
        break;
      case u.NullableType:
        s.prefix ? (o = "?" + w(s.expression, D)) : (o = w(s.expression, D) + "?");
        break;
      case u.NameExpression:
        o = s.name;
        break;
      case u.TypeApplication:
        for (o = w(s.expression, D) + ".<", A = 0, h = s.applications.length; A < h; ++A)
          (o += w(s.applications[A], D)), A + 1 !== h && (o += D ? "," : ", ");
        o += ">";
        break;
      case u.StringLiteralType:
        o = '"' + s.value + '"';
        break;
      case u.NumericLiteralType:
        o = String(s.value);
        break;
      case u.BooleanLiteralType:
        o = String(s.value);
        break;
      default:
        f.throwError("Unknown type " + s.type);
    }
    return o;
  }
  function O(s, D) {
    return D == null && (D = {}), w(s, D.compact, D.topLevel);
  }
  (Du.parseType = pu), (Du.parseParamType = wu), (Du.stringify = O), (Du.Syntax = u);
})();
(function (u) {
  (function () {
    var e, r, t, a, i;
    (a = ou), (e = Du), (r = X);
    function n(l, k, B) {
      return l.slice(k, B);
    }
    i = (function () {
      var l = Object.prototype.hasOwnProperty;
      return function (B, j) {
        return l.call(B, j);
      };
    })();
    function C(l) {
      var k = {},
        B;
      for (B in l) l.hasOwnProperty(B) && (k[B] = l[B]);
      return k;
    }
    function E(l) {
      return (l >= 97 && l <= 122) || (l >= 65 && l <= 90) || (l >= 48 && l <= 57);
    }
    function f(l) {
      return l === "param" || l === "argument" || l === "arg";
    }
    function T(l) {
      return l === "return" || l === "returns";
    }
    function x(l) {
      return l === "property" || l === "prop";
    }
    function F(l) {
      return f(l) || x(l) || l === "alias" || l === "this" || l === "mixes" || l === "requires";
    }
    function m(l) {
      return F(l) || l === "const" || l === "constant";
    }
    function v(l) {
      return x(l) || f(l);
    }
    function c(l) {
      return x(l) || f(l);
    }
    function p(l) {
      return (
        f(l) || T(l) || l === "define" || l === "enum" || l === "implements" || l === "this" || l === "type" || l === "typedef" || x(l)
      );
    }
    function I(l) {
      return (
        p(l) ||
        l === "throws" ||
        l === "const" ||
        l === "constant" ||
        l === "namespace" ||
        l === "member" ||
        l === "var" ||
        l === "module" ||
        l === "constructor" ||
        l === "class" ||
        l === "extends" ||
        l === "augments" ||
        l === "public" ||
        l === "private" ||
        l === "protected"
      );
    }
    var L = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
      z =
        "(" +
        L +
        "*(?:\\*" +
        L +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function M(l) {
      return l
        .replace(/^\/\*\*?/, "")
        .replace(/\*\/$/, "")
        .replace(new RegExp(z, "g"), "$2")
        .replace(/\s*$/, "");
    }
    function _(l, k) {
      for (var B = l.replace(/^\/\*\*?/, ""), j = 0, G = new RegExp(z, "g"), g; (g = G.exec(B)); )
        if (((j += g[1].length), g.index + g[0].length > k + j)) return k + j + l.length - B.length;
      return l.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function (l) {
      var k, B, j, G, g, nu, Eu, V, fu;
      function $() {
        var o = g.charCodeAt(B);
        return (B += 1), a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(B) === 10) && (j += 1), String.fromCharCode(o);
      }
      function $u() {
        var o = "";
        for ($(); B < G && E(g.charCodeAt(B)); ) o += $();
        return o;
      }
      function iu() {
        var o,
          A,
          h = B;
        for (A = !1; h < G; ) {
          if (((o = g.charCodeAt(h)), a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(h + 1) === 10))) A = !0;
          else if (A) {
            if (o === 64) break;
            a.code.isWhiteSpace(o) || (A = !1);
          }
          h += 1;
        }
        return h;
      }
      function U(o, A, h) {
        for (var y, N, b, R, W = !1; B < A; )
          if (((y = g.charCodeAt(B)), a.code.isWhiteSpace(y))) $();
          else if (y === 123) {
            $();
            break;
          } else {
            W = !0;
            break;
          }
        if (W) return null;
        for (N = 1, b = ""; B < A; )
          if (((y = g.charCodeAt(B)), a.code.isLineTerminator(y))) $();
          else {
            if (y === 125) {
              if (((N -= 1), N === 0)) {
                $();
                break;
              }
            } else y === 123 && (N += 1);
            b === "" && (R = B), (b += $());
          }
        return N !== 0
          ? r.throwError("Braces are not balanced")
          : c(o)
          ? e.parseParamType(b, { startIndex: w(R), range: h })
          : e.parseType(b, { startIndex: w(R), range: h });
      }
      function K(o) {
        var A;
        if (!a.code.isIdentifierStartES5(g.charCodeAt(B)) && !g[B].match(/[0-9]/)) return null;
        for (A = $(); B < o && a.code.isIdentifierPartES5(g.charCodeAt(B)); ) A += $();
        return A;
      }
      function J(o) {
        for (; B < o && (a.code.isWhiteSpace(g.charCodeAt(B)) || a.code.isLineTerminator(g.charCodeAt(B))); ) $();
      }
      function pu(o, A, h) {
        var y = "",
          N,
          b;
        if ((J(o), B >= o)) return null;
        if (g.charCodeAt(B) === 91)
          if (A) (N = !0), (y = $());
          else return null;
        if (((y += K(o)), h))
          for (
            g.charCodeAt(B) === 58 && (y === "module" || y === "external" || y === "event") && ((y += $()), (y += K(o))),
              g.charCodeAt(B) === 91 && g.charCodeAt(B + 1) === 93 && ((y += $()), (y += $()));
            g.charCodeAt(B) === 46 || g.charCodeAt(B) === 47 || g.charCodeAt(B) === 35 || g.charCodeAt(B) === 45 || g.charCodeAt(B) === 126;

          )
            (y += $()), (y += K(o));
        if (N) {
          if ((J(o), g.charCodeAt(B) === 61)) {
            (y += $()), J(o);
            for (var R, W = 1; B < o; ) {
              if (
                ((R = g.charCodeAt(B)),
                a.code.isWhiteSpace(R) && (b || (J(o), (R = g.charCodeAt(B)))),
                R === 39 && (b ? b === "'" && (b = "") : (b = "'")),
                R === 34 && (b ? b === '"' && (b = "") : (b = '"')),
                R === 91)
              )
                W++;
              else if (R === 93 && --W === 0) break;
              y += $();
            }
          }
          if ((J(o), B >= o || g.charCodeAt(B) !== 93)) return null;
          y += $();
        }
        return y;
      }
      function wu() {
        for (; B < G && g.charCodeAt(B) !== 64; ) $();
        return B >= G ? !1 : (r.assert(g.charCodeAt(B) === 64), !0);
      }
      function w(o) {
        return g === nu ? o : _(nu, o);
      }
      function O(o, A) {
        (this._options = o),
          (this._title = A.toLowerCase()),
          (this._tag = { title: A, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = j),
          (this._first = B - A.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (O.prototype.addError = function (A) {
        var h = Array.prototype.slice.call(arguments, 1),
          y = A.replace(/%(\d)/g, function (N, b) {
            return r.assert(b < h.length, "Message reference must be in range"), h[b];
          });
        return this._tag.errors || (this._tag.errors = []), fu && r.throwError(y), this._tag.errors.push(y), Eu;
      }),
        (O.prototype.parseType = function () {
          if (p(this._title))
            try {
              if (
                ((this._tag.type = U(this._title, this._last, this._options.range)),
                !this._tag.type && !f(this._title) && !T(this._title) && !this.addError("Missing or invalid tag type"))
              )
                return !1;
            } catch (o) {
              if (((this._tag.type = null), !this.addError(o.message))) return !1;
            }
          else if (I(this._title))
            try {
              this._tag.type = U(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (O.prototype._parseNamePath = function (o) {
          var A;
          return (
            (A = pu(this._last, V && c(this._title), !0)),
            !A && !o && !this.addError("Missing or invalid tag name") ? !1 : ((this._tag.name = A), !0)
          );
        }),
        (O.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (O.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (O.prototype.parseName = function () {
          var o, A;
          if (m(this._title))
            if (((this._tag.name = pu(this._last, V && c(this._title), v(this._title))), this._tag.name))
              (A = this._tag.name),
                A.charAt(0) === "[" &&
                  A.charAt(A.length - 1) === "]" &&
                  ((o = A.substring(1, A.length - 1).split("=")),
                  o.length > 1 && (this._tag.default = o.slice(1).join("=")),
                  (this._tag.name = o[0]),
                  this._tag.type &&
                    this._tag.type.type !== "OptionalType" &&
                    (this._tag.type = { type: "OptionalType", expression: this._tag.type }));
            else {
              if (!F(this._title)) return !0;
              if (f(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type), (this._tag.name = this._tag.type.name), (this._tag.type = null);
              else if (!this.addError("Missing or invalid tag name")) return !1;
            }
          return !0;
        }),
        (O.prototype.parseDescription = function () {
          var A = n(g, B, this._last).trim();
          return A && (/^-\s+/.test(A) && (A = A.substring(2)), (this._tag.description = A)), !0;
        }),
        (O.prototype.parseCaption = function () {
          var A = n(g, B, this._last).trim(),
            h = "<caption>",
            y = "</caption>",
            N = A.indexOf(h),
            b = A.indexOf(y);
          return (
            N >= 0 && b >= 0
              ? ((this._tag.caption = A.substring(N + h.length, b).trim()), (this._tag.description = A.substring(b + y.length).trim()))
              : (this._tag.description = A),
            !0
          );
        }),
        (O.prototype.parseKind = function () {
          var A, h;
          return (
            (h = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (A = n(g, B, this._last).trim()),
            (this._tag.kind = A),
            !(!i(h, A) && !this.addError("Invalid kind name '%0'", A))
          );
        }),
        (O.prototype.parseAccess = function () {
          var A;
          return (
            (A = n(g, B, this._last).trim()),
            (this._tag.access = A),
            !(A !== "private" && A !== "protected" && A !== "public" && !this.addError("Invalid access name '%0'", A))
          );
        }),
        (O.prototype.parseThis = function () {
          var A = n(g, B, this._last).trim();
          if (A && A.charAt(0) === "{") {
            var h = this.parseType();
            return (h && this._tag.type.type === "NameExpression") || this._tag.type.type === "UnionType"
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError("Invalid name for this");
          } else return this.parseNamePath();
        }),
        (O.prototype.parseVariation = function () {
          var A, h;
          return (
            (h = n(g, B, this._last).trim()),
            (A = parseFloat(h, 10)),
            (this._tag.variation = A),
            !(isNaN(A) && !this.addError("Invalid variation '%0'", h))
          );
        }),
        (O.prototype.ensureEnd = function () {
          var o = n(g, B, this._last).trim();
          return !(o && !this.addError("Unknown content '%0'", o));
        }),
        (O.prototype.epilogue = function () {
          var A;
          return (
            (A = this._tag.description),
            !(
              c(this._title) &&
              !this._tag.type &&
              A &&
              A.charAt(0) === "[" &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !V && !this.addError("Missing or invalid tag name"))
            )
          );
        }),
        (k = {
          access: ["parseAccess"],
          alias: ["parseNamePath", "ensureEnd"],
          augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
          constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
          class: ["parseType", "parseNamePathOptional", "ensureEnd"],
          extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
          example: ["parseCaption"],
          deprecated: ["parseDescription"],
          global: ["ensureEnd"],
          inner: ["ensureEnd"],
          instance: ["ensureEnd"],
          kind: ["parseKind"],
          mixes: ["parseNamePath", "ensureEnd"],
          mixin: ["parseNamePathOptional", "ensureEnd"],
          member: ["parseType", "parseNamePathOptional", "ensureEnd"],
          method: ["parseNamePathOptional", "ensureEnd"],
          module: ["parseType", "parseNamePathOptional", "ensureEnd"],
          func: ["parseNamePathOptional", "ensureEnd"],
          function: ["parseNamePathOptional", "ensureEnd"],
          var: ["parseType", "parseNamePathOptional", "ensureEnd"],
          name: ["parseNamePath", "ensureEnd"],
          namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
          private: ["parseType", "parseDescription"],
          protected: ["parseType", "parseDescription"],
          public: ["parseType", "parseDescription"],
          readonly: ["ensureEnd"],
          requires: ["parseNamePath", "ensureEnd"],
          since: ["parseDescription"],
          static: ["ensureEnd"],
          summary: ["parseDescription"],
          this: ["parseThis", "ensureEnd"],
          todo: ["parseDescription"],
          typedef: ["parseType", "parseNamePathOptional"],
          variation: ["parseVariation"],
          version: ["parseDescription"],
        }),
        (O.prototype.parse = function () {
          var A, h, y, N;
          if (!this._title && !this.addError("Missing or invalid title")) return null;
          for (
            this._last = iu(this._title),
              this._options.range && (this._tag.range = [this._first, g.slice(0, this._last).replace(/\s*$/, "").length].map(w)),
              i(k, this._title) ? (y = k[this._title]) : (y = ["parseType", "parseName", "parseDescription", "epilogue"]),
              A = 0,
              h = y.length;
            A < h;
            ++A
          )
            if (((N = y[A]), !this[N]())) return null;
          return this._tag;
        });
      function s(o) {
        var A, h, y;
        if (!wu()) return null;
        for (A = $u(), h = new O(o, A), y = h.parse(); B < h._last; ) $();
        return y;
      }
      function D(o) {
        var A = "",
          h,
          y;
        for (y = !0; B < G && ((h = g.charCodeAt(B)), !(y && h === 64)); )
          a.code.isLineTerminator(h) ? (y = !0) : y && !a.code.isWhiteSpace(h) && (y = !1), (A += $());
        return o ? A : A.trim();
      }
      function d(o, A) {
        var h = [],
          y,
          N,
          b,
          R,
          W;
        if ((A === void 0 && (A = {}), typeof A.unwrap == "boolean" && A.unwrap ? (g = M(o)) : (g = o), (nu = o), A.tags))
          if (Array.isArray(A.tags))
            for (b = {}, R = 0, W = A.tags.length; R < W; R++)
              typeof A.tags[R] == "string" ? (b[A.tags[R]] = !0) : r.throwError('Invalid "tags" parameter: ' + A.tags);
          else r.throwError('Invalid "tags" parameter: ' + A.tags);
        for (G = g.length, B = 0, j = 0, Eu = A.recoverable, V = A.sloppy, fu = A.strict, N = D(A.preserveWhitespace); (y = s(A)), !!y; )
          (!b || b.hasOwnProperty(y.title)) && h.push(y);
        return { description: N, tags: h };
      }
      l.parse = d;
    })((t = {})),
      (u.version = r.VERSION),
      (u.parse = t.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = M),
      (u.Syntax = C(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = { Syntax: u.Syntax, parseType: e.parseType, parseParamType: e.parseParamType, stringify: e.stringify });
  })();
})(Je);
const lA = Uu(Je),
  { UnknownArgTypesError: ur } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,
  { combineParameters: cA } = __STORYBOOK_MODULE_PREVIEW_API__;
var er = /^['"]|['"]$/g,
  EA = (u) => u.replace(er, ""),
  fA = (u) => er.test(u),
  rr = (u) => {
    let e = EA(u);
    return fA(u) || Number.isNaN(Number(e)) ? e : Number(e);
  },
  pA = (u) => {
    switch (u.type) {
      case "function":
        return { name: "function" };
      case "object":
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Fu(r.value);
          }),
          { name: "object", value: e }
        );
      default:
        throw new ur({ type: u, language: "Typescript" });
    }
  },
  Fu = (u) => {
    var a, i, n, C;
    let { name: e, raw: r } = u,
      t = {};
    switch ((typeof r < "u" && (t.raw = r), u.name)) {
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...t, name: e };
      case "Array":
        return { ...t, name: "array", value: u.elements.map(Fu) };
      case "signature":
        return { ...t, ...pA(u) };
      case "union":
        let E;
        return (
          (a = u.elements) != null && a.every((f) => f.name === "literal")
            ? (E = { ...t, name: "enum", value: (i = u.elements) == null ? void 0 : i.map((f) => rr(f.value)) })
            : (E = { ...t, name: e, value: (n = u.elements) == null ? void 0 : n.map(Fu) }),
          E
        );
      case "intersection":
        return { ...t, name: e, value: (C = u.elements) == null ? void 0 : C.map(Fu) };
      default:
        return { ...t, name: "other", value: e };
    }
  },
  BA = (u) => u.name === "literal",
  hA = (u) => u.value.replace(/['|"]/g, ""),
  dA = (u) => {
    switch (u.type) {
      case "function":
        return { name: "function" };
      case "object":
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Cu(r.value);
          }),
          { name: "object", value: e }
        );
      default:
        throw new ur({ type: u, language: "Flow" });
    }
  },
  Cu = (u) => {
    var a, i, n, C;
    let { name: e, raw: r } = u,
      t = {};
    switch ((typeof r < "u" && (t.raw = r), u.name)) {
      case "literal":
        return { ...t, name: "other", value: u.value };
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...t, name: e };
      case "Array":
        return { ...t, name: "array", value: u.elements.map(Cu) };
      case "signature":
        return { ...t, ...dA(u) };
      case "union":
        return (a = u.elements) != null && a.every(BA)
          ? { ...t, name: "enum", value: (i = u.elements) == null ? void 0 : i.map(hA) }
          : { ...t, name: e, value: (n = u.elements) == null ? void 0 : n.map(Cu) };
      case "intersection":
        return { ...t, name: e, value: (C = u.elements) == null ? void 0 : C.map(Cu) };
      default:
        return { ...t, name: "other", value: e };
    }
  },
  vA = /^\(.*\) => /,
  Au = (u) => {
    let { name: e, raw: r, computed: t, value: a } = u,
      i = {};
    switch ((typeof r < "u" && (i.raw = r), e)) {
      case "enum": {
        let C = t ? a : a.map((E) => rr(E.value));
        return { ...i, name: e, value: C };
      }
      case "string":
      case "number":
      case "symbol":
        return { ...i, name: e };
      case "func":
        return { ...i, name: "function" };
      case "bool":
      case "boolean":
        return { ...i, name: "boolean" };
      case "arrayOf":
      case "array":
        return { ...i, name: "array", value: a && Au(a) };
      case "object":
        return { ...i, name: e };
      case "objectOf":
        return { ...i, name: e, value: Au(a) };
      case "shape":
      case "exact":
        let n = z1(a, (C) => Au(C));
        return { ...i, name: "object", value: n };
      case "union":
        return { ...i, name: "union", value: a.map((C) => Au(C)) };
      case "instanceOf":
      case "element":
      case "elementType":
      default: {
        if ((e == null ? void 0 : e.indexOf("|")) > 0)
          try {
            let f = e.split("|").map((T) => JSON.parse(T));
            return { ...i, name: "enum", value: f };
          } catch {}
        let C = a ? `${e}(${a})` : e,
          E = vA.test(e) ? "function" : "other";
        return { ...i, name: E, value: C };
      }
    }
  },
  Qu = (u) => {
    let { type: e, tsType: r, flowType: t } = u;
    try {
      if (e != null) return Au(e);
      if (r != null) return Fu(r);
      if (t != null) return Cu(t);
    } catch (a) {
      console.error(a);
    }
    return null;
  },
  yA = ((u) => ((u.JAVASCRIPT = "JavaScript"), (u.FLOW = "Flow"), (u.TYPESCRIPT = "TypeScript"), (u.UNKNOWN = "Unknown"), u))(yA || {}),
  gA = ["null", "undefined"];
function Yu(u) {
  return gA.some((e) => e === u);
}
var mA = (u) => {
  if (!u) return "";
  if (typeof u == "string") return u;
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`);
};
function tr(u) {
  return !!u.__docgenInfo;
}
function _A(u) {
  return u != null && Object.keys(u).length > 0;
}
function xA(u, e) {
  return tr(u) ? u.__docgenInfo[e] : null;
}
function TA(u) {
  return tr(u) ? mA(u.__docgenInfo.description) : "";
}
function bA(u) {
  return u != null && u.includes("@");
}
function SA(u, e) {
  let r;
  try {
    r = lA.parse(u ?? "", { tags: e, sloppy: !0 });
  } catch (t) {
    throw (console.error(t), new Error("Cannot parse JSDoc tags."));
  }
  return r;
}
var $A = { tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"] },
  wA = (u, e = $A) => {
    if (!bA(u)) return { includesJsDoc: !1, ignore: !1 };
    let r = SA(u, e.tags),
      t = OA(r);
    return t.ignore ? { includesJsDoc: !0, ignore: !0 } : { includesJsDoc: !0, ignore: !1, description: r.description, extractedTags: t };
  };
function OA(u) {
  let e = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let r = 0; r < u.tags.length; r += 1) {
    let t = u.tags[r];
    if (t.title === "ignore") {
      e.ignore = !0;
      break;
    } else
      switch (t.title) {
        case "param":
        case "arg":
        case "argument": {
          let a = NA(t);
          a != null && (e.params == null && (e.params = []), e.params.push(a));
          break;
        }
        case "deprecated": {
          let a = PA(t);
          a != null && (e.deprecated = a);
          break;
        }
        case "returns": {
          let a = IA(t);
          a != null && (e.returns = a);
          break;
        }
      }
  }
  return e;
}
function NA(u) {
  let e = u.name;
  return e != null && e !== "null-null"
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: () => (e.includes("null") ? e.replace("-null", "").replace(".null", "") : u.name),
        getTypeName: () => (u.type != null ? Z(u.type) : null),
      }
    : null;
}
function PA(u) {
  return u.title != null ? u.description : null;
}
function IA(u) {
  return u.type != null ? { type: u.type, description: u.description, getTypeName: () => Z(u.type) } : null;
}
function Z(u) {
  return (u == null ? void 0 : u.type) === "NameExpression"
    ? u.name
    : (u == null ? void 0 : u.type) === "RecordType"
    ? `({${u.fields
        .map((e) => {
          if (e.type === "FieldType" && e.value != null) {
            let r = Z(e.value);
            return `${e.key}: ${r}`;
          }
          return e.key;
        })
        .join(", ")}})`
    : (u == null ? void 0 : u.type) === "UnionType"
    ? `(${u.elements.map(Z).join("|")})`
    : (u == null ? void 0 : u.type) === "ArrayType"
    ? "[]"
    : (u == null ? void 0 : u.type) === "TypeApplication" && u.expression != null && u.expression.name === "Array"
    ? `${Z(u.applications[0])}[]`
    : (u == null ? void 0 : u.type) === "NullableType" ||
      (u == null ? void 0 : u.type) === "NonNullableType" ||
      (u == null ? void 0 : u.type) === "OptionalType"
    ? Z(u.expression)
    : (u == null ? void 0 : u.type) === "AllLiteral"
    ? "any"
    : null;
}
function ar(u) {
  return u.length > 90;
}
function RA(u) {
  return u.length > 50;
}
function P(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e };
}
function nr({ name: u, value: e, elements: r, raw: t }) {
  return e ?? (r != null ? r.map(nr).join(" | ") : t ?? u);
}
function LA({ name: u, raw: e, elements: r }) {
  return r != null ? P(r.map(nr).join(" | ")) : e != null ? P(e.replace(/^\|\s*/, "")) : P(u);
}
function MA({ type: u, raw: e }) {
  return e != null ? P(e) : P(u);
}
function kA({ type: u, raw: e }) {
  return e != null ? (ar(e) ? P(u, e) : P(e)) : P(u);
}
function UA(u) {
  let { type: e } = u;
  return e === "object" ? kA(u) : MA(u);
}
function jA({ name: u, raw: e }) {
  return e != null ? (ar(e) ? P(u, e) : P(e)) : P(u);
}
function GA(u) {
  if (u == null) return null;
  switch (u.name) {
    case "union":
      return LA(u);
    case "signature":
      return UA(u);
    default:
      return jA(u);
  }
}
function KA(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Yu(r)) return RA(r) ? P(e == null ? void 0 : e.name, r) : P(r);
  }
  return null;
}
var HA = (u, e) => {
  let { flowType: r, description: t, required: a, defaultValue: i } = e;
  return { name: u, type: GA(r), required: a, description: t, defaultValue: KA(i ?? null, r ?? null) };
};
function WA({ tsType: u, required: e }) {
  if (u == null) return null;
  let r = u.name;
  return e || (r = r.replace(" | undefined", "")), P(["Array", "Record", "signature"].includes(u.name) ? u.raw : r);
}
function qA({ defaultValue: u }) {
  if (u != null) {
    let { value: e } = u;
    if (!Yu(e)) return P(e);
  }
  return null;
}
var zA = (u, e) => {
  let { description: r, required: t } = e;
  return { name: u, type: WA(e), required: t, description: r, defaultValue: qA(e) };
};
function VA(u) {
  return u != null ? P(u.name) : null;
}
function JA(u) {
  let { computed: e, func: r } = u;
  return typeof e > "u" && typeof r > "u";
}
function QA(u) {
  return u
    ? u.name === "string"
      ? !0
      : u.name === "enum"
      ? Array.isArray(u.value) && u.value.every(({ value: e }) => typeof e == "string" && e[0] === '"' && e[e.length - 1] === '"')
      : !1
    : !1;
}
function YA(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Yu(r)) return JA(u) && QA(e) ? P(JSON.stringify(r)) : P(r);
  }
  return null;
}
function ir(u, e, r) {
  let { description: t, required: a, defaultValue: i } = r;
  return { name: u, type: VA(e), required: a, description: t, defaultValue: YA(i, e) };
}
function Su(u, e) {
  var r;
  if (e != null && e.includesJsDoc) {
    let { description: t, extractedTags: a } = e;
    t != null && (u.description = e.description);
    let i = {
      ...a,
      params:
        (r = a == null ? void 0 : a.params) == null ? void 0 : r.map((n) => ({ name: n.getPrettyName(), description: n.description })),
    };
    Object.values(i).filter(Boolean).length > 0 && (u.jsDocTags = i);
  }
  return u;
}
var XA = (u, e, r) => {
    let t = ir(u, e.type, e);
    return (t.sbType = Qu(e)), Su(t, r);
  },
  ZA = (u, e, r) => {
    let t = zA(u, e);
    return (t.sbType = Qu(e)), Su(t, r);
  },
  uo = (u, e, r) => {
    let t = HA(u, e);
    return (t.sbType = Qu(e)), Su(t, r);
  },
  eo = (u, e, r) => {
    let t = ir(u, { name: "unknown" }, e);
    return Su(t, r);
  },
  sr = (u) => {
    switch (u) {
      case "JavaScript":
        return XA;
      case "TypeScript":
        return ZA;
      case "Flow":
        return uo;
      default:
        return eo;
    }
  },
  Dr = (u) => (u.type != null ? "JavaScript" : u.flowType != null ? "Flow" : u.tsType != null ? "TypeScript" : "Unknown"),
  ro = (u) => {
    let e = Dr(u[0]),
      r = sr(e);
    return u.map((t) => {
      var i;
      let a = t;
      return (i = t.type) != null && i.elements && (a = { ...t, type: { ...t.type, value: t.type.elements } }), Ar(a.name, a, e, r);
    });
  },
  to = (u) => {
    let e = Object.keys(u),
      r = Dr(u[e[0]]),
      t = sr(r);
    return e
      .map((a) => {
        let i = u[a];
        return i != null ? Ar(a, i, r, t) : null;
      })
      .filter(Boolean);
  },
  oo = (u, e) => {
    let r = xA(u, e);
    return _A(r) ? (Array.isArray(r) ? ro(r) : to(r)) : [];
  };
function Ar(u, e, r, t) {
  let a = wA(e.description);
  return a.includesJsDoc && a.ignore ? null : { propDef: t(u, e, a), jsDocTags: a.extractedTags, docgenInfo: e, typeSystem: r };
}
function Fo(u) {
  return u != null ? TA(u) : "";
}
var Co = (u) => {
    let {
        component: e,
        argTypes: r,
        parameters: { docs: t = {} },
      } = u,
      { extractArgTypes: a } = t,
      i = a && e ? a(e) : {};
    return i ? cA(i, r) : r;
  },
  ao = "storybook/docs",
  lo = `${ao}/snippet-rendered`,
  no = ((u) => ((u.AUTO = "auto"), (u.CODE = "code"), (u.DYNAMIC = "dynamic"), u))(no || {}),
  io = Re,
  so = io(Object.getPrototypeOf, Object),
  co = so;
export {
  O0 as A,
  S0 as B,
  q0 as C,
  Hi as D,
  bD as E,
  j1 as F,
  ys as G,
  hi as H,
  ri as I,
  ii as J,
  Hu as K,
  Ei as L,
  gu as M,
  Ns as N,
  f0 as O,
  E0 as P,
  Me as Q,
  Ne as R,
  lo as S,
  yA as T,
  ns as U,
  H as _,
  zu as a,
  lu as b,
  co as c,
  cu as d,
  q as e,
  Fo as f,
  Co as g,
  P as h,
  ju as i,
  xA as j,
  no as k,
  Ao as l,
  tr as m,
  oo as n,
  RA as o,
  ar as p,
  lt as q,
  Le as r,
  ze as s,
  Pe as t,
  ou as u,
  bu as v,
  Ve as w,
  Ui as x,
  us as y,
  Vi as z,
};
