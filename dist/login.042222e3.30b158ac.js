// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"login.042222e3.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "cZC5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t = function () {
      return function (t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, r) {
          var e = [],
              n = !0,
              a = !1,
              l = void 0;

          try {
            for (var i, o = t[Symbol.iterator](); !(n = (i = o.next()).done) && (e.push(i.value), !r || e.length !== r); n = !0) {
              ;
            }
          } catch (s) {
            a = !0, l = s;
          } finally {
            try {
              !n && o.return && o.return();
            } finally {
              if (a) throw l;
            }
          }

          return e;
        }(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();

    function r(r) {
      var e = r.headers.get("Link"),
          n = {};
      if (null == e) return null;
      e = e.split(",");

      for (var a = r.headers.get("X-Total-Count"), l = 0, i = e.length; l < i; l++) {
        var o = e[l].replace(/(^\s*|\s*$)/, "").split(";"),
            s = t(o, 2),
            u = s[0],
            c = s[1],
            p = u.match(/page=(\d+)/),
            f = p && parseInt(p[1], 10);
        c.match(/last/) ? n.last = f : c.match(/next/) ? n.next = f : c.match(/prev/) ? n.prev = f : c.match(/first/) && (n.first = f);
      }

      return n.last = Math.max(n.last || 0, n.prev && n.prev + 1 || 0), n.current = n.next ? n.next - 1 : n.last || 1, n.total = a ? parseInt(a, 10) : null, n;
    }

    exports.getPagination = r;
  }, {}],
  "JvKM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.JSONHTTPError = exports.TextHTTPError = exports.HTTPError = exports.getPagination = void 0;

    var t = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
      }

      return t;
    },
        e = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    }(),
        r = require("./pagination");

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function i(t) {
      function e() {
        var e = Reflect.construct(t, Array.from(arguments));
        return Object.setPrototypeOf(e, Object.getPrototypeOf(this)), e;
      }

      return e.prototype = Object.create(t.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t, e;
    }

    Object.defineProperty(exports, "getPagination", {
      enumerable: !0,
      get: function get() {
        return r.getPagination;
      }
    });

    var s = exports.HTTPError = function (t) {
      function e(t) {
        n(this, e);
        var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.statusText));
        return r.name = r.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(r, r.constructor) : r.stack = new Error(t.statusText).stack, r.status = t.status, r;
      }

      return a(e, i(Error)), e;
    }(),
        u = exports.TextHTTPError = function (t) {
      function e(t, r) {
        n(this, e);
        var a = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return a.data = r, a;
      }

      return a(e, s), e;
    }(),
        c = exports.JSONHTTPError = function (t) {
      function e(t, r) {
        n(this, e);
        var a = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return a.json = r, a;
      }

      return a(e, s), e;
    }(),
        f = function () {
      function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1];
        n(this, o), this.apiURL = t, this.apiURL.match(/\/[^\/]?/) && (this._sameOrigin = !0), this.defaultHeaders = e && e.defaultHeaders || {};
      }

      return e(o, [{
        key: "headers",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t({}, this.defaultHeaders, {
            "Content-Type": "application/json"
          }, e);
        }
      }, {
        key: "parseJsonResponse",
        value: function value(t) {
          return t.json().then(function (e) {
            if (!t.ok) return Promise.reject(new c(t, e));
            var n = (0, r.getPagination)(t);
            return n ? {
              pagination: n,
              items: e
            } : e;
          });
        }
      }, {
        key: "request",
        value: function value(e) {
          var r = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = this.headers(n.headers || {});
          return this._sameOrigin && (n.credentials = n.credentials || "same-origin"), fetch(this.apiURL + e, t({}, n, {
            headers: o
          })).then(function (t) {
            var e = t.headers.get("Content-Type");
            return e && e.match(/json/) ? r.parseJsonResponse(t) : t.ok ? t.text().then(function (t) {}) : t.text().then(function (e) {
              return Promise.reject(new u(t, e));
            });
          });
        }
      }]), o;
    }();

    exports.default = f;
  }, {
    "./pagination": "cZC5"
  }],
  "r84U": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function t(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function r(e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var n = function () {
      function t(r) {
        e(this, t), this.user = r;
      }

      return r(t, [{
        key: "listUsers",
        value: function value(e) {
          return this.user._request("/admin/users", {
            method: "GET",
            audience: e
          });
        }
      }, {
        key: "getUser",
        value: function value(e) {
          return this.user._request("/admin/users/".concat(e.id));
        }
      }, {
        key: "updateUser",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.user._request("/admin/users/".concat(e.id), {
            method: "PUT",
            body: JSON.stringify(t)
          });
        }
      }, {
        key: "createUser",
        value: function value(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return r.email = e, r.password = t, this.user._request("/admin/users", {
            method: "POST",
            body: JSON.stringify(r)
          });
        }
      }, {
        key: "deleteUser",
        value: function value(e) {
          return this.user._request("/admin/users/".concat(e.id), {
            method: "DELETE"
          });
        }
      }]), t;
    }();

    exports.default = n;
  }, {}],
  "qc9g": [function (require, module, exports) {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = s(require("micro-api-client")),
        r = n(require("./admin.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return o = function o() {
        return e;
      }, e;
    }

    function s(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
      };
      var r = o();
      if (r && r.has(t)) return r.get(t);
      var n = {},
          s = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          var a = s ? Object.getOwnPropertyDescriptor(t, i) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i];
        }
      }

      return n.default = t, r && r.set(t, n), n;
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function f(e, t, r) {
      return t && l(e.prototype, t), r && l(e, r), e;
    }

    var h = 6e4,
        p = "gotrue.user",
        y = {},
        d = null,
        v = {
      api: 1,
      token: 1,
      audience: 1,
      url: 1
    },
        b = {
      api: 1
    },
        k = function k() {
      return "undefined" != typeof window;
    },
        g = function () {
      function e(t, r, n) {
        c(this, e), this.api = t, this.url = t.apiURL, this.audience = n, this._processTokenResponse(r), d = this;
      }

      return f(e, [{
        key: "update",
        value: function value(e) {
          var t = this;
          return this._request("/user", {
            method: "PUT",
            body: JSON.stringify(e)
          }).then(function (e) {
            return t._saveUserData(e)._refreshSavedSession();
          });
        }
      }, {
        key: "jwt",
        value: function value(e) {
          var t = this.tokenDetails();
          if (null == t) return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));
          var r = t.expires_at,
              n = t.refresh_token,
              o = t.access_token;
          return e || r - h < Date.now() ? this._refreshToken(n) : Promise.resolve(o);
        }
      }, {
        key: "logout",
        value: function value() {
          return this._request("/logout", {
            method: "POST"
          }).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this));
        }
      }, {
        key: "_refreshToken",
        value: function value(e) {
          var t = this;
          return y[e] ? y[e] : y[e] = this.api.request("/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=refresh_token&refresh_token=".concat(e)
          }).then(function (r) {
            return delete y[e], t._processTokenResponse(r), t._refreshSavedSession(), t.token.access_token;
          }).catch(function (r) {
            return delete y[e], t.clearSession(), Promise.reject(r);
          });
        }
      }, {
        key: "_request",
        value: function value(e) {
          var r = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          n.headers = n.headers || {};
          var o = n.audience || this.audience;
          return o && (n.headers["X-JWT-AUD"] = o), this.jwt().then(function (o) {
            return r.api.request(e, a({
              headers: Object.assign(n.headers, {
                Authorization: "Bearer ".concat(o)
              })
            }, n)).catch(function (e) {
              return e instanceof t.JSONHTTPError && e.json && (e.json.msg ? e.message = e.json.msg : e.json.error && (e.message = "".concat(e.json.error, ": ").concat(e.json.error_description))), Promise.reject(e);
            });
          });
        }
      }, {
        key: "getUserData",
        value: function value() {
          return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
        }
      }, {
        key: "_saveUserData",
        value: function value(t, r) {
          for (var n in t) {
            n in e.prototype || n in v || (this[n] = t[n]);
          }

          return r && (this._fromStorage = !0), this;
        }
      }, {
        key: "_processTokenResponse",
        value: function value(e) {
          this.token = e;

          try {
            var t = JSON.parse(_(e.access_token.split(".")[1]));
            this.token.expires_at = 1e3 * t.exp;
          } catch (r) {
            console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(r)));
          }
        }
      }, {
        key: "_refreshSavedSession",
        value: function value() {
          return k() && localStorage.getItem(p) && this._saveSession(), this;
        }
      }, {
        key: "_saveSession",
        value: function value() {
          return k() && localStorage.setItem(p, JSON.stringify(this._details)), this;
        }
      }, {
        key: "tokenDetails",
        value: function value() {
          return this.token;
        }
      }, {
        key: "clearSession",
        value: function value() {
          e.removeSavedSession(), this.token = null, d = null;
        }
      }, {
        key: "admin",
        get: function get() {
          return new r.default(this);
        }
      }, {
        key: "_details",
        get: function get() {
          var t = {};

          for (var r in this) {
            r in e.prototype || r in b || (t[r] = this[r]);
          }

          return t;
        }
      }], [{
        key: "removeSavedSession",
        value: function value() {
          k() && localStorage.removeItem(p);
        }
      }, {
        key: "recoverSession",
        value: function value(r) {
          if (d) return d;
          var n = k() && localStorage.getItem(p);
          if (n) try {
            var o = JSON.parse(n),
                s = o.url,
                i = o.token,
                a = o.audience;
            return s && i ? new e(r || new t.default(s, {}), i, a)._saveUserData(o, !0) : null;
          } catch (u) {
            return console.error(new Error("Gotrue-js: Error recovering session: ".concat(u))), null;
          }
          return null;
        }
      }]), e;
    }();

    function _(e) {
      var t = e.replace(/-/g, "+").replace(/_/g, "/");

      switch (t.length % 4) {
        case 0:
          break;

        case 2:
          t += "==";
          break;

        case 3:
          t += "=";
          break;

        default:
          throw "Illegal base64url string!";
      }

      var r = window.atob(t);

      try {
        return decodeURIComponent(escape(r));
      } catch (n) {
        return r;
      }
    }

    exports.default = g;
  }, {
    "micro-api-client": "JvKM",
    "./admin.js": "r84U"
  }],
  "Sndt": [function (require, module, exports) {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = i(require("micro-api-client")),
        r = n(require("./user.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return o = function o() {
        return e;
      }, e;
    }

    function i(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
      };
      var r = o();
      if (r && r.has(t)) return r.get(t);
      var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var s in t) {
        if (Object.prototype.hasOwnProperty.call(t, s)) {
          var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = t[s];
        }
      }

      return n.default = t, r && r.set(t, n), n;
    }

    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function a(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function u(e, t, r) {
      return t && a(e.prototype, t), r && a(e, r), e;
    }

    var c = /^http:\/\//,
        f = "/.netlify/identity",
        d = function () {
      function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = r.APIUrl,
            o = void 0 === n ? f : n,
            i = r.audience,
            a = void 0 === i ? "" : i,
            u = r.setCookie,
            d = void 0 !== u && u;
        s(this, e), o.match(c) && console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."), a && (this.audience = a), this.setCookie = d, this.api = new t.default(o);
      }

      return u(e, [{
        key: "_request",
        value: function value(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          r.headers = r.headers || {};
          var n = r.audience || this.audience;
          return n && (r.headers["X-JWT-AUD"] = n), this.api.request(e, r).catch(function (e) {
            return e instanceof t.JSONHTTPError && e.json && (e.json.msg ? e.message = e.json.msg : e.json.error && (e.message = "".concat(e.json.error, ": ").concat(e.json.error_description))), Promise.reject(e);
          });
        }
      }, {
        key: "settings",
        value: function value() {
          return this._request("/settings");
        }
      }, {
        key: "signup",
        value: function value(e, t, r) {
          return this._request("/signup", {
            method: "POST",
            body: JSON.stringify({
              email: e,
              password: t,
              data: r
            })
          });
        }
      }, {
        key: "login",
        value: function value(e, t, n) {
          var o = this;
          return this._setRememberHeaders(n), this._request("/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=password&username=".concat(encodeURIComponent(e), "&password=").concat(encodeURIComponent(t))
          }).then(function (e) {
            return r.default.removeSavedSession(), o.createUser(e, n);
          });
        }
      }, {
        key: "loginExternalUrl",
        value: function value(e) {
          return "".concat(this.api.apiURL, "/authorize?provider=").concat(e);
        }
      }, {
        key: "confirm",
        value: function value(e, t) {
          return this._setRememberHeaders(t), this.verify("signup", e, t);
        }
      }, {
        key: "requestPasswordRecovery",
        value: function value(e) {
          return this._request("/recover", {
            method: "POST",
            body: JSON.stringify({
              email: e
            })
          });
        }
      }, {
        key: "recover",
        value: function value(e, t) {
          return this._setRememberHeaders(t), this.verify("recovery", e, t);
        }
      }, {
        key: "acceptInvite",
        value: function value(e, t, r) {
          var n = this;
          return this._setRememberHeaders(r), this._request("/verify", {
            method: "POST",
            body: JSON.stringify({
              token: e,
              password: t,
              type: "signup"
            })
          }).then(function (e) {
            return n.createUser(e, r);
          });
        }
      }, {
        key: "acceptInviteExternalUrl",
        value: function value(e, t) {
          return "".concat(this.api.apiURL, "/authorize?provider=").concat(e, "&invite_token=").concat(t);
        }
      }, {
        key: "createUser",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return this._setRememberHeaders(t), new r.default(this.api, e, this.audience).getUserData().then(function (e) {
            return t && e._saveSession(), e;
          });
        }
      }, {
        key: "currentUser",
        value: function value() {
          var e = r.default.recoverSession(this.api);
          return e && this._setRememberHeaders(e._fromStorage), e;
        }
      }, {
        key: "verify",
        value: function value(e, t, r) {
          var n = this;
          return this._setRememberHeaders(r), this._request("/verify", {
            method: "POST",
            body: JSON.stringify({
              token: t,
              type: e
            })
          }).then(function (e) {
            return n.createUser(e, r);
          });
        }
      }, {
        key: "_setRememberHeaders",
        value: function value(e) {
          this.setCookie && (this.api.defaultHeaders = this.api.defaultHeaders || {}, this.api.defaultHeaders["X-Use-Cookie"] = e ? "1" : "session");
        }
      }]), e;
    }();

    exports.default = d, "undefined" != typeof window && (window.GoTrue = d);
  }, {
    "micro-api-client": "JvKM",
    "./user.js": "qc9g"
  }],
  "mnjM": [function (require, module, exports) {
    "use strict";

    var e,
        t = o(require("gotrue-js"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      document.querySelector(".login-switch").addEventListener("click", c), document.querySelector(".create-switch").addEventListener("click", r), document.querySelector(".create-switch").addEventListener("click", r), document.querySelector(".forgot-btn").addEventListener("click", s), document.querySelector(".forgot-back-btn").addEventListener("click", c);
    }

    function c() {
      console.log("toggleExisting"), document.querySelector(".login-switch").classList.add("selected"), document.querySelector(".create-switch").classList.remove("selected"), document.querySelector(".login").classList.remove("hide"), document.querySelector(".signup").classList.add("hide"), document.querySelector(".recover-pass").classList.add("hide");
    }

    function r() {
      console.log("toggleCreate"), document.querySelector(".login-switch").classList.remove("selected"), document.querySelector(".create-switch").classList.add("selected"), document.querySelector(".signup").classList.remove("hide"), document.querySelector(".login").classList.add("hide");
    }

    function s() {
      console.log("forgot pass"), document.querySelector(".login").classList.add("hide"), document.querySelector(".recover-pass").classList.remove("hide");
    }

    function l() {}

    window.addEventListener("DOMContentLoaded", n);
    var i = new t.default({
      APIUrl: "https://confident-hoover-cccfcc.netlify.app/.netlify/identity",
      setCookie: !0
    });

    function u(e) {
      d("<p>Did you paste in your API endpoint?</p>", e);
    }

    function a(e) {
      d("<p>User not found</p>", e);
    }

    function d(e, t) {
      t.querySelector(".message").innerHTML = e;
    }

    function g() {
      document.querySelectorAll(".message").forEach(function (e) {
        e.textContent = "";
      });
    }

    document.querySelector("form[name='signup']").addEventListener("submit", function (e) {
      if (e.preventDefault(), console.log(e.target.elements.password.value), e.target.elements.password.value === e.target.elements.password2.value) {
        console.log("succ");
        var t = e.target;
        i || u(t);
        var o = t.elements,
            n = o.email,
            c = o.password;
        i.signup(n.value, c.value).then(function (e) {
          console.log(e), d("<p>Created a user! </p><p>Response: </p><code>".concat(JSON.stringify(e), "</code>"), t);
        }).catch(function (e) {
          d("Failed :( <code>".concat(JSON.stringify(e), "</code>"), t), console.log(e);
        });
      } else d("Passwords do not match", e.target), console.log("faill");
    }), document.querySelector("form[name='login']").addEventListener("submit", function (t) {
      t.preventDefault();
      var o = t.target;
      i || u(o);
      var n = o.elements,
          c = n.email,
          r = n.password;
      i.login(c.value, r.value, !0).then(function (t) {
        d("<p>Log in successful! </p>", o), console.log(t), e = i.currentUser(), localStorage.setItem("user", JSON.stringify(e.token)), window.location.href = "/index.html";
      }).catch(function (e) {
        d("Failed to log in :", o), console.log(e);
      });
    }), document.querySelector("form[name='recover-pass']").addEventListener("submit", function (e) {
      e.preventDefault();
      var t = e.target;
      i || u(t), i.currentUser() || a(t);
      var o = i.currentUser().email;
      i.requestPasswordRecovery(o).then(function (e) {
        d("<p>Recovery email sent, check your inbox! </p>", t), console.log(e);
      }).catch(function (e) {
        d("Something went wrong :(", t), console.log(e);
      });
    });
  }, {
    "gotrue-js": "Sndt"
  }]
}, {}, ["mnjM"], null);
},{}]