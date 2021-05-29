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
})({"baf.3f9cff3d.js":[function(require,module,exports) {
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
  "W1Cj": [function (require, module, exports) {
    function t(t, n) {
      var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

      if (!e) {
        if (Array.isArray(t) || (e = r(t)) || n && t && "number" == typeof t.length) {
          e && (t = e);

          var o = 0,
              a = function a() {};

          return {
            s: a,
            n: function n() {
              return o >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[o++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: a
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          l = !0,
          u = !1;
      return {
        s: function s() {
          e = e.call(t);
        },
        n: function n() {
          var t = e.next();
          return l = t.done, t;
        },
        e: function e(t) {
          u = !0, i = t;
        },
        f: function f() {
          try {
            l || null == e.return || e.return();
          } finally {
            if (u) throw i;
          }
        }
      };
    }

    function r(t, r) {
      if (t) {
        if ("string" == typeof t) return n(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? n(t, r) : void 0;
      }
    }

    function n(t, r) {
      (null == r || r > t.length) && (r = t.length);

      for (var n = 0, e = new Array(r); n < r; n++) {
        e[n] = t[n];
      }

      return e;
    }

    var e,
        o = document.querySelectorAll(".tab"),
        a = t(o);

    try {
      for (a.s(); !(e = a.n()).done;) {
        var i = e.value;
        i.addEventListener("click", l);
      }
    } catch (u) {
      a.e(u);
    } finally {
      a.f();
    }

    function l() {
      this.classList.add("selected");
    }
  }, {}]
}, {}, ["W1Cj"], null);
},{}]