function V(c, y) {
  for (var m = 0; m < y.length; m++) {
    const p = y[m];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const l in p)
        if (l !== "default" && !(l in c)) {
          const b = Object.getOwnPropertyDescriptor(p, l);
          b && Object.defineProperty(c, l, b.get ? b : {
            enumerable: !0,
            get: () => p[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function z(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var O = { exports: {} };
(function(c, y) {
  var m = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof R < "u" && R, p = function() {
    function b() {
      this.fetch = !1, this.DOMException = m.DOMException;
    }
    return b.prototype = m, new b();
  }();
  (function(b) {
    (function(u) {
      var a = typeof b < "u" && b || typeof self < "u" && self || typeof a < "u" && a, f = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob: "FileReader" in a && "Blob" in a && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a
      };
      function j(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      if (f.arrayBuffer)
        var S = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], F = ArrayBuffer.isView || function(e) {
          return e && S.indexOf(Object.prototype.toString.call(e)) > -1;
        };
      function v(e) {
        if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
          throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase();
      }
      function A(e) {
        return typeof e != "string" && (e = String(e)), e;
      }
      function E(e) {
        var t = {
          next: function() {
            var r = e.shift();
            return { done: r === void 0, value: r };
          }
        };
        return f.iterable && (t[Symbol.iterator] = function() {
          return t;
        }), t;
      }
      function s(e) {
        this.map = {}, e instanceof s ? e.forEach(function(t, r) {
          this.append(r, t);
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
          this.append(t[0], t[1]);
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
          this.append(t, e[t]);
        }, this);
      }
      s.prototype.append = function(e, t) {
        e = v(e), t = A(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t;
      }, s.prototype.delete = function(e) {
        delete this.map[v(e)];
      }, s.prototype.get = function(e) {
        return e = v(e), this.has(e) ? this.map[e] : null;
      }, s.prototype.has = function(e) {
        return this.map.hasOwnProperty(v(e));
      }, s.prototype.set = function(e, t) {
        this.map[v(e)] = A(t);
      }, s.prototype.forEach = function(e, t) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
      }, s.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push(r);
        }), E(e);
      }, s.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
          e.push(t);
        }), E(e);
      }, s.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
          e.push([r, t]);
        }), E(e);
      }, f.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
      function T(e) {
        if (e.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function P(e) {
        return new Promise(function(t, r) {
          e.onload = function() {
            t(e.result);
          }, e.onerror = function() {
            r(e.error);
          };
        });
      }
      function M(e) {
        var t = new FileReader(), r = P(t);
        return t.readAsArrayBuffer(e), r;
      }
      function I(e) {
        var t = new FileReader(), r = P(t);
        return t.readAsText(e), r;
      }
      function H(e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
          r[n] = String.fromCharCode(t[n]);
        return r.join("");
      }
      function D(e) {
        if (e.slice)
          return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function x() {
        return this.bodyUsed = !1, this._initBody = function(e) {
          this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : f.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : f.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : f.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : f.arrayBuffer && f.blob && j(e) ? (this._bodyArrayBuffer = D(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || F(e)) ? this._bodyArrayBuffer = D(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, f.blob && (this.blob = function() {
          var e = T(this);
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
          if (this._bodyArrayBuffer) {
            var e = T(this);
            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            ) : Promise.resolve(this._bodyArrayBuffer));
          } else
            return this.blob().then(M);
        }), this.text = function() {
          var e = T(this);
          if (e)
            return e;
          if (this._bodyBlob)
            return I(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(H(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, f.formData && (this.formData = function() {
          return this.text().then(C);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var q = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function L(e) {
        var t = e.toUpperCase();
        return q.indexOf(t) > -1 ? t : e;
      }
      function w(e, t) {
        if (!(this instanceof w))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t = t || {};
        var r = t.body;
        if (e instanceof w) {
          if (e.bodyUsed)
            throw new TypeError("Already read");
          this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new s(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
        } else
          this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new s(t.headers)), this.method = L(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(r), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
          var n = /([?&])_=[^&]*/;
          if (n.test(this.url))
            this.url = this.url.replace(n, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
          else {
            var i = /\?/;
            this.url += (i.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
          }
        }
      }
      w.prototype.clone = function() {
        return new w(this, { body: this._bodyInit });
      };
      function C(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function(r) {
          if (r) {
            var n = r.split("="), i = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(i), decodeURIComponent(o));
          }
        }), t;
      }
      function k(e) {
        var t = new s(), r = e.replace(/\r?\n[\t ]+/g, " ");
        return r.split("\r").map(function(n) {
          return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n;
        }).forEach(function(n) {
          var i = n.split(":"), o = i.shift().trim();
          if (o) {
            var _ = i.join(":").trim();
            t.append(o, _);
          }
        }), t;
      }
      x.call(w.prototype);
      function d(e, t) {
        if (!(this instanceof d))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new s(t.headers), this.url = t.url || "", this._initBody(e);
      }
      x.call(d.prototype), d.prototype.clone = function() {
        return new d(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new s(this.headers),
          url: this.url
        });
      }, d.error = function() {
        var e = new d(null, { status: 0, statusText: "" });
        return e.type = "error", e;
      };
      var N = [301, 302, 303, 307, 308];
      d.redirect = function(e, t) {
        if (N.indexOf(t) === -1)
          throw new RangeError("Invalid status code");
        return new d(null, { status: t, headers: { location: e } });
      }, u.DOMException = a.DOMException;
      try {
        new u.DOMException();
      } catch {
        u.DOMException = function(t, r) {
          this.message = t, this.name = r;
          var n = Error(t);
          this.stack = n.stack;
        }, u.DOMException.prototype = Object.create(Error.prototype), u.DOMException.prototype.constructor = u.DOMException;
      }
      function B(e, t) {
        return new Promise(function(r, n) {
          var i = new w(e, t);
          if (i.signal && i.signal.aborted)
            return n(new u.DOMException("Aborted", "AbortError"));
          var o = new XMLHttpRequest();
          function _() {
            o.abort();
          }
          o.onload = function() {
            var h = {
              status: o.status,
              statusText: o.statusText,
              headers: k(o.getAllResponseHeaders() || "")
            };
            h.url = "responseURL" in o ? o.responseURL : h.headers.get("X-Request-URL");
            var g = "response" in o ? o.response : o.responseText;
            setTimeout(function() {
              r(new d(g, h));
            }, 0);
          }, o.onerror = function() {
            setTimeout(function() {
              n(new TypeError("Network request failed"));
            }, 0);
          }, o.ontimeout = function() {
            setTimeout(function() {
              n(new TypeError("Network request failed"));
            }, 0);
          }, o.onabort = function() {
            setTimeout(function() {
              n(new u.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function G(h) {
            try {
              return h === "" && a.location.href ? a.location.href : h;
            } catch {
              return h;
            }
          }
          o.open(i.method, G(i.url), !0), i.credentials === "include" ? o.withCredentials = !0 : i.credentials === "omit" && (o.withCredentials = !1), "responseType" in o && (f.blob ? o.responseType = "blob" : f.arrayBuffer && i.headers.get("Content-Type") && i.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (o.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof s) ? Object.getOwnPropertyNames(t.headers).forEach(function(h) {
            o.setRequestHeader(h, A(t.headers[h]));
          }) : i.headers.forEach(function(h, g) {
            o.setRequestHeader(g, h);
          }), i.signal && (i.signal.addEventListener("abort", _), o.onreadystatechange = function() {
            o.readyState === 4 && i.signal.removeEventListener("abort", _);
          }), o.send(typeof i._bodyInit > "u" ? null : i._bodyInit);
        });
      }
      return B.polyfill = !0, a.fetch || (a.fetch = B, a.Headers = s, a.Request = w, a.Response = d), u.Headers = s, u.Request = w, u.Response = d, u.fetch = B, u;
    })({});
  })(p), p.fetch.ponyfill = !0, delete p.fetch.polyfill;
  var l = m.fetch ? m : p;
  y = l.fetch, y.default = l.fetch, y.fetch = l.fetch, y.Headers = l.Headers, y.Request = l.Request, y.Response = l.Response, c.exports = y;
})(O, O.exports);
var U = O.exports;
const $ = /* @__PURE__ */ z(U), X = /* @__PURE__ */ V({
  __proto__: null,
  default: $
}, [U]);
export {
  X as b
};
