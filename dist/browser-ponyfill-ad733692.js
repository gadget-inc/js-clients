import { c as C } from "./shopify-read-e51d1cae.js";
function k(b, c) {
  for (var p = 0; p < c.length; p++) {
    const l = c[p];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const h in l)
        if (h !== "default" && !(h in b)) {
          const n = Object.getOwnPropertyDescriptor(l, h);
          n && Object.defineProperty(b, h, n.get ? n : {
            enumerable: !0,
            get: () => l[h]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(b, Symbol.toStringTag, { value: "Module" }));
}
var B = { exports: {} };
(function(b, c) {
  var p = typeof self < "u" ? self : C, l = function() {
    function n() {
      this.fetch = !1, this.DOMException = p.DOMException;
    }
    return n.prototype = p, new n();
  }();
  (function(n) {
    (function(f) {
      var u = {
        searchParams: "URLSearchParams" in n,
        iterable: "Symbol" in n && "iterator" in Symbol,
        blob: "FileReader" in n && "Blob" in n && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in n,
        arrayBuffer: "ArrayBuffer" in n
      };
      function x(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      if (u.arrayBuffer)
        var R = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], U = ArrayBuffer.isView || function(e) {
          return e && R.indexOf(Object.prototype.toString.call(e)) > -1;
        };
      function m(e) {
        if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function O(e) {
        return typeof e != "string" && (e = String(e)), e;
      }
      function _(e) {
        var t = {
          next: function() {
            var r = e.shift();
            return { done: r === void 0, value: r };
          }
        };
        return u.iterable && (t[Symbol.iterator] = function() {
          return t;
        }), t;
      }
      function i(e) {
        this.map = {}, e instanceof i ? e.forEach(function(t, r) {
          this.append(r, t);
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
          this.append(t[0], t[1]);
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
          this.append(t, e[t]);
        }, this);
      }
      i.prototype.append = function(e, t) {
        e = m(e), t = O(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t;
      }, i.prototype.delete = function(e) {
        delete this.map[m(e)];
      }, i.prototype.get = function(e) {
        return e = m(e), this.has(e) ? this.map[e] : null;
      }, i.prototype.has = function(e) {
        return this.map.hasOwnProperty(m(e));
      }, i.prototype.set = function(e, t) {
        this.map[m(e)] = O(t);
      }, i.prototype.forEach = function(e, t) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
      }, i.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push(r);
        }), _(e);
      }, i.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
          e.push(t);
        }), _(e);
      }, i.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push([r, t]);
        }), _(e);
      }, u.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
      function A(e) {
        if (e.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function T(e) {
        return new Promise(function(t, r) {
          e.onload = function() {
            t(e.result);
          }, e.onerror = function() {
            r(e.error);
          };
        });
      }
      function j(e) {
        var t = new FileReader(), r = T(t);
        return t.readAsArrayBuffer(e), r;
      }
      function S(e) {
        var t = new FileReader(), r = T(t);
        return t.readAsText(e), r;
      }
      function F(e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), a = 0; a < t.length; a++)
          r[a] = String.fromCharCode(t[a]);
        return r.join("");
      }
      function P(e) {
        if (e.slice)
          return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function D() {
        return this.bodyUsed = !1, this._initBody = function(e) {
          this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : u.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : u.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : u.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u.arrayBuffer && u.blob && x(e) ? (this._bodyArrayBuffer = P(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || U(e)) ? this._bodyArrayBuffer = P(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, u.blob && (this.blob = function() {
          var e = A(this);
          if (e)
            return e;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? A(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(j);
        }), this.text = function() {
          var e = A(this);
          if (e)
            return e;
          if (this._bodyBlob)
            return S(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(F(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, u.formData && (this.formData = function() {
          return this.text().then(H);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var I = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function M(e) {
        var t = e.toUpperCase();
        return I.indexOf(t) > -1 ? t : e;
      }
      function y(e, t) {
        t = t || {};
        var r = t.body;
        if (e instanceof y) {
          if (e.bodyUsed)
            throw new TypeError("Already read");
          this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
        } else
          this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new i(t.headers)), this.method = M(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r);
      }
      y.prototype.clone = function() {
        return new y(this, { body: this._bodyInit });
      };
      function H(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function(r) {
          if (r) {
            var a = r.split("="), s = a.shift().replace(/\+/g, " "), o = a.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(s), decodeURIComponent(o));
          }
        }), t;
      }
      function q(e) {
        var t = new i(), r = e.replace(/\r?\n[\t ]+/g, " ");
        return r.split(/\r?\n/).forEach(function(a) {
          var s = a.split(":"), o = s.shift().trim();
          if (o) {
            var v = s.join(":").trim();
            t.append(o, v);
          }
        }), t;
      }
      D.call(y.prototype);
      function d(e, t) {
        t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new i(t.headers), this.url = t.url || "", this._initBody(e);
      }
      D.call(d.prototype), d.prototype.clone = function() {
        return new d(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new i(this.headers),
          url: this.url
        });
      }, d.error = function() {
        var e = new d(null, { status: 0, statusText: "" });
        return e.type = "error", e;
      };
      var L = [301, 302, 303, 307, 308];
      d.redirect = function(e, t) {
        if (L.indexOf(t) === -1)
          throw new RangeError("Invalid status code");
        return new d(null, { status: t, headers: { location: e } });
      }, f.DOMException = n.DOMException;
      try {
        new f.DOMException();
      } catch {
        f.DOMException = function(t, r) {
          this.message = t, this.name = r;
          var a = Error(t);
          this.stack = a.stack;
        }, f.DOMException.prototype = Object.create(Error.prototype), f.DOMException.prototype.constructor = f.DOMException;
      }
      function E(e, t) {
        return new Promise(function(r, a) {
          var s = new y(e, t);
          if (s.signal && s.signal.aborted)
            return a(new f.DOMException("Aborted", "AbortError"));
          var o = new XMLHttpRequest();
          function v() {
            o.abort();
          }
          o.onload = function() {
            var w = {
              status: o.status,
              statusText: o.statusText,
              headers: q(o.getAllResponseHeaders() || "")
            };
            w.url = "responseURL" in o ? o.responseURL : w.headers.get("X-Request-URL");
            var g = "response" in o ? o.response : o.responseText;
            r(new d(g, w));
          }, o.onerror = function() {
            a(new TypeError("Network request failed"));
          }, o.ontimeout = function() {
            a(new TypeError("Network request failed"));
          }, o.onabort = function() {
            a(new f.DOMException("Aborted", "AbortError"));
          }, o.open(s.method, s.url, !0), s.credentials === "include" ? o.withCredentials = !0 : s.credentials === "omit" && (o.withCredentials = !1), "responseType" in o && u.blob && (o.responseType = "blob"), s.headers.forEach(function(w, g) {
            o.setRequestHeader(g, w);
          }), s.signal && (s.signal.addEventListener("abort", v), o.onreadystatechange = function() {
            o.readyState === 4 && s.signal.removeEventListener("abort", v);
          }), o.send(typeof s._bodyInit > "u" ? null : s._bodyInit);
        });
      }
      return E.polyfill = !0, n.fetch || (n.fetch = E, n.Headers = i, n.Request = y, n.Response = d), f.Headers = i, f.Request = y, f.Response = d, f.fetch = E, Object.defineProperty(f, "__esModule", { value: !0 }), f;
    })({});
  })(l), l.fetch.ponyfill = !0, delete l.fetch.polyfill;
  var h = l;
  c = h.fetch, c.default = h.fetch, c.fetch = h.fetch, c.Headers = h.Headers, c.Request = h.Request, c.Response = h.Response, b.exports = c;
})(B, B.exports);
var N = B.exports;
const G = /* @__PURE__ */ k({
  __proto__: null
}, [N]);
export {
  G as b
};
