// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"APyxP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "cacbc5a6b9b4a900d90b5e8ab68e9f2d"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6zM1h":[function(require,module,exports) {
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && undefined;
                if (!u && a) return a(o, true);
                if (i) return i(o, true);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {
                }
            };
            t[o][0].call(l.exports, function(e1) {
                var n1 = t[o][1][e1];
                return s(n1 ? n1 : e1);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof require == "function" && undefined;
    for(var o = 0; o < r.length; o++)s(r[o]);
    return s;
})({
    1: [
        function(require, module, exports) {
            // Generated by LiveScript 1.3.1
            var presets, simpleStr, wrap, slice$ = [].slice, toString$ = {
            }.toString;
            presets = require('./presets').presets;
            simpleStr = function(arr) {
                return arr.join('');
            };
            wrap = function(content) {
                return "data:image/svg+xml;base64," + btoa(content);
            };
            (function() {
                var make, handler, ldBar;
                make = {
                    head: function(viewBox) {
                        return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
                    },
                    gradient: function(dir, dur) {
                        var colors, ret, len, gx, gy, x, y, i$, i, idx;
                        dir == null && (dir = 45);
                        dur == null && (dur = 1);
                        colors = slice$.call(arguments, 2);
                        ret = [
                            this.head("0 0 100 100")
                        ];
                        len = colors.length * 4 + 1;
                        dir = dir * Math.PI / 180;
                        gx = Math.pow(Math.cos(dir), 2);
                        gy = Math.sqrt(gx - Math.pow(gx, 2));
                        if (dir > Math.PI * 0.25) {
                            gy = Math.pow(Math.sin(dir), 2);
                            gx = Math.sqrt(gy - Math.pow(gy, 2));
                        }
                        x = gx * 100;
                        y = gy * 100;
                        ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");
                        for(i$ = 0; i$ < len; ++i$){
                            i = i$;
                            idx = i * 100 / (len - 1);
                            ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
                        }
                        ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
                        return wrap(ret.join(""));
                    },
                    stripe: function(c1, c2, dur) {
                        var ret, i;
                        c1 == null && (c1 = '#b4b4b4');
                        c2 == null && (c2 = '#e6e6e6');
                        dur == null && (dur = 1);
                        ret = [
                            this.head("0 0 100 100")
                        ];
                        ret = ret.concat([
                            "<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>",
                            "<g><g>",
                            (function() {
                                var i$, results$ = [];
                                for(i$ = 0; i$ < 13; ++i$){
                                    i = i$;
                                    results$.push("<polygon fill=\"" + c1 + "\" " + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
                                }
                                return results$;
                            })().join(""),
                            "</g><animateTransform attributeName=\"transform\" type=\"translate\" ",
                            "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"
                        ].join(""));
                        return wrap(ret);
                    },
                    bubble: function(c1, c2, count, dur, size, sw) {
                        var ret, i$, i, idx, x, r, d;
                        c1 == null && (c1 = '#39d');
                        c2 == null && (c2 = '#9cf');
                        count == null && (count = 15);
                        dur == null && (dur = 1);
                        size == null && (size = 6);
                        sw == null && (sw = 1);
                        ret = [
                            this.head("0 0 200 200"),
                            "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"
                        ];
                        for(i$ = 0; i$ < count; ++i$){
                            i = i$;
                            idx = -(i / count) * dur;
                            x = Math.random() * 184 + 8;
                            r = (Math.random() * 0.7 + 0.3) * size;
                            d = dur * (1 + Math.random() * 0.5);
                            ret.push([
                                "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">",
                                "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ",
                                "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>",
                                "</circle>",
                                "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">",
                                "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ",
                                "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>",
                                "</circle>"
                            ].join(""));
                        }
                        return wrap(ret.join("") + "</svg>");
                    }
                };
                handler = {
                    queue: {
                    },
                    running: false,
                    main: function(timestamp) {
                        var keepon, removed, k, ref$, func, ret, this$ = this;
                        keepon = false;
                        removed = [];
                        for(k in ref$ = this.queue){
                            func = ref$[k];
                            ret = func(timestamp);
                            if (!ret) removed.push(func);
                            keepon = keepon || ret;
                        }
                        for(k in ref$ = this.queue){
                            func = ref$[k];
                            if (removed.indexOf(func) >= 0) delete this.queue[k];
                        }
                        if (keepon) return requestAnimationFrame(function(it) {
                            return this$.main(it);
                        });
                        else return this.running = false;
                    },
                    add: function(key, f) {
                        var this$ = this;
                        if (!this.queue[key]) this.queue[key] = f;
                        if (!this.running) {
                            this.running = true;
                            return requestAnimationFrame(function(it) {
                                return this$.main(it);
                            });
                        }
                    }
                };
                window.ldBar = ldBar = function(selector, option) {
                    var xmlns, root, cls, idPrefix, id, domTree, newNode, x$, config, attr, that, isStroke, parseRes, dom, svg, text, group, length, path0, path1, patimg, img, ret, size, this$ = this;
                    option == null && (option = {
                    });
                    xmlns = {
                        xlink: "http://www.w3.org/1999/xlink"
                    };
                    root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;
                    if (!root.ldBar) root.ldBar = this;
                    else return root.ldBar;
                    cls = root.getAttribute('class') || '';
                    if (!~cls.indexOf('ldBar')) root.setAttribute('class', cls + " ldBar");
                    idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
                    id = {
                        key: idPrefix,
                        clip: idPrefix + "-clip",
                        filter: idPrefix + "-filter",
                        pattern: idPrefix + "-pattern",
                        mask: idPrefix + "-mask",
                        maskPath: idPrefix + "-mask-path"
                    };
                    domTree = function(n, o) {
                        var k, v;
                        n = newNode(n);
                        for(k in o){
                            v = o[k];
                            if (k !== 'attr') n.appendChild(domTree(k, v || {
                            }));
                        }
                        n.attrs(o.attr || {
                        });
                        return n;
                    };
                    newNode = function(n) {
                        return document.createElementNS("http://www.w3.org/2000/svg", n);
                    };
                    x$ = document.body.__proto__.__proto__.__proto__;
                    x$.text = function(t) {
                        return this.appendChild(document.createTextNode(t));
                    };
                    x$.attrs = function(o) {
                        var k, v, ret1, results$ = [];
                        for(k in o){
                            v = o[k];
                            ret1 = /([^:]+):([^:]+)/.exec(k);
                            if (!ret1 || !xmlns[ret1[1]]) results$.push(this.setAttribute(k, v));
                            else results$.push(this.setAttributeNS(xmlns[ret1[1]], k, v));
                        }
                        return results$;
                    };
                    x$.styles = function(o) {
                        var k, v, results$ = [];
                        for(k in o){
                            v = o[k];
                            results$.push(this.style[k] = v);
                        }
                        return results$;
                    };
                    x$.append = function(n) {
                        var r;
                        return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
                    };
                    x$.attr = function(n, v) {
                        if (v != null) return this.setAttribute(n, v);
                        else return this.getAttribute(n);
                    };
                    config = {
                        "type": 'stroke',
                        "img": '',
                        "path": 'M10 10L90 10M90 8M90 12',
                        "fill-dir": 'btt',
                        "fill": '#25b',
                        "fill-background": '#ddd',
                        "fill-background-extrude": 3,
                        "pattern-size": null,
                        "stroke-dir": 'normal',
                        "stroke": '#25b',
                        "stroke-width": '3',
                        "stroke-trail": '#ddd',
                        "stroke-trail-width": 0.5,
                        "duration": 1,
                        "easing": 'linear',
                        "value": 0,
                        "img-size": null,
                        "bbox": null,
                        "set-dim": true,
                        "aspect-ratio": "xMidYMid",
                        "transition-in": false,
                        "min": 0,
                        "max": 100,
                        "precision": 0,
                        "padding": undefined
                    };
                    config["preset"] = root.attr("data-preset") || option["preset"];
                    if (config.preset != null) import$(config, presets[config.preset]);
                    for(attr in config)if (that = that = root.attr("data-" + attr)) config[attr] = that;
                    import$(config, option);
                    if (config.img) config.path = null;
                    isStroke = config.type === 'stroke';
                    parseRes = function(v) {
                        var parser, ret1;
                        parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
                        ret1 = parser.exec(v);
                        if (!ret1) return v;
                        return ret1 = make[ret1[1]].apply(make, ret1[2].split(','));
                    };
                    config.fill = parseRes(config.fill);
                    config.stroke = parseRes(config.stroke);
                    if (config["set-dim"] === 'false') config["set-dim"] = false;
                    dom = {
                        attr: {
                            "xmlns:xlink": 'http://www.w3.org/1999/xlink',
                            preserveAspectRatio: config["aspect-ratio"],
                            width: "100%",
                            height: "100%"
                        },
                        defs: {
                            filter: {
                                attr: {
                                    id: id.filter,
                                    x: -1,
                                    y: -1,
                                    width: 3,
                                    height: 3
                                },
                                feMorphology: {
                                    attr: {
                                        operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
                                        radius: Math.abs(+config["fill-background-extrude"])
                                    }
                                },
                                feColorMatrix: {
                                    attr: {
                                        values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
                                        result: "cm"
                                    }
                                }
                            },
                            mask: {
                                attr: {
                                    id: id.mask
                                },
                                image: {
                                    attr: {
                                        "xlink:href": config.img,
                                        filter: "url(#" + id.filter + ")",
                                        x: 0,
                                        y: 0,
                                        width: 100,
                                        height: 100,
                                        preserveAspectRatio: config["aspect-ratio"]
                                    }
                                }
                            },
                            g: {
                                mask: {
                                    attr: {
                                        id: id.maskPath
                                    },
                                    path: {
                                        attr: {
                                            d: config.path || "",
                                            fill: '#fff',
                                            stroke: '#fff',
                                            filter: "url(#" + id.filter + ")"
                                        }
                                    }
                                }
                            },
                            clipPath: {
                                attr: {
                                    id: id.clip
                                },
                                rect: {
                                    attr: {
                                        'class': 'mask',
                                        fill: '#000'
                                    }
                                }
                            },
                            pattern: {
                                attr: {
                                    id: id.pattern,
                                    patternUnits: 'userSpaceOnUse',
                                    x: 0,
                                    y: 0,
                                    width: 300,
                                    height: 300
                                },
                                image: {
                                    attr: {
                                        x: 0,
                                        y: 0,
                                        width: 300,
                                        height: 300
                                    }
                                }
                            }
                        }
                    };
                    svg = domTree('svg', dom);
                    text = document.createElement('div');
                    text.setAttribute('class', 'ldBar-label');
                    root.appendChild(svg);
                    root.appendChild(text);
                    group = [
                        0,
                        0
                    ];
                    length = 0;
                    this.fit = function() {
                        var that1, box, d, rect;
                        if (that1 = config["bbox"]) {
                            box = that1.split(' ').map(function(it) {
                                return +it.trim();
                            });
                            box = {
                                x: box[0],
                                y: box[1],
                                width: box[2],
                                height: box[3]
                            };
                        } else box = group[1].getBBox();
                        if (!box || box.width === 0 || box.height === 0) box = {
                            x: 0,
                            y: 0,
                            width: 100,
                            height: 100
                        };
                        d = Math.max.apply(null, [
                            'stroke-width',
                            'stroke-trail-width',
                            'fill-background-extrude'
                        ].map(function(it) {
                            return config[it];
                        })) * 1.5;
                        if (config["padding"] != null) d = +config["padding"];
                        svg.attrs({
                            viewBox: [
                                box.x - d,
                                box.y - d,
                                box.width + d * 2,
                                box.height + d * 2
                            ].join(" ")
                        });
                        if (config["set-dim"]) [
                            'width',
                            'height'
                        ].map(function(it) {
                            if (!root.style[it] || this$.fit[it]) {
                                root.style[it] = box[it] + d * 2 + "px";
                                return this$.fit[it] = true;
                            }
                        });
                        rect = group[0].querySelector('rect');
                        if (rect) return rect.attrs({
                            x: box.x - d,
                            y: box.y - d,
                            width: box.width + d * 2,
                            height: box.height + d * 2
                        });
                    };
                    if (config.path) {
                        if (isStroke) group[0] = domTree('g', {
                            path: {
                                attr: {
                                    d: config.path,
                                    fill: 'none',
                                    'class': 'baseline'
                                }
                            }
                        });
                        else group[0] = domTree('g', {
                            rect: {
                                attr: {
                                    x: 0,
                                    y: 0,
                                    width: 100,
                                    height: 100,
                                    mask: "url(#" + id.maskPath + ")",
                                    fill: config["fill-background"],
                                    'class': 'frame'
                                }
                            }
                        });
                        svg.appendChild(group[0]);
                        group[1] = domTree('g', {
                            path: {
                                attr: {
                                    d: config.path,
                                    'class': isStroke ? 'mainline' : 'solid',
                                    "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
                                }
                            }
                        });
                        svg.appendChild(group[1]);
                        path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
                        path1 = group[1].querySelector('path');
                        if (isStroke) path1.attrs({
                            fill: 'none'
                        });
                        patimg = svg.querySelector('pattern image');
                        img = new Image();
                        img.addEventListener('load', function() {
                            var box, that1;
                            box = (that1 = config["pattern-size"]) ? {
                                width: +that1,
                                height: +that1
                            } : img.width && img.height ? {
                                width: img.width,
                                height: img.height
                            } : {
                                width: 300,
                                height: 300
                            };
                            svg.querySelector('pattern').attrs({
                                width: box.width,
                                height: box.height
                            });
                            return patimg.attrs({
                                width: box.width,
                                height: box.height
                            });
                        });
                        if (/.+\..+|^data:/.exec(!isStroke ? config.fill : config.stroke)) {
                            img.src = !isStroke ? config.fill : config.stroke;
                            patimg.attrs({
                                "xlink:href": img.src
                            });
                        }
                        if (isStroke) {
                            path0.attrs({
                                stroke: config["stroke-trail"],
                                "stroke-width": config["stroke-trail-width"]
                            });
                            path1.attrs({
                                "stroke-width": config["stroke-width"],
                                stroke: /.+\..+|^data:/.exec(config.stroke) ? "url(#" + id.pattern + ")" : config.stroke
                            });
                        }
                        if (config.fill && !isStroke) path1.attrs({
                            fill: /.+\..+|^data:/.exec(config.fill) ? "url(#" + id.pattern + ")" : config.fill
                        });
                        length = path1.getTotalLength();
                        this.fit();
                        this.inited = true;
                    } else if (config.img) {
                        if (config["img-size"]) {
                            ret = config["img-size"].split(',');
                            size = {
                                width: +ret[0],
                                height: +ret[1]
                            };
                        } else size = {
                            width: 100,
                            height: 100
                        };
                        group[0] = domTree('g', {
                            rect: {
                                attr: {
                                    x: 0,
                                    y: 0,
                                    width: 100,
                                    height: 100,
                                    mask: "url(#" + id.mask + ")",
                                    fill: config["fill-background"]
                                }
                            }
                        });
                        svg.querySelector('mask image').attrs({
                            width: size.width,
                            height: size.height
                        });
                        group[1] = domTree('g', {
                            image: {
                                attr: {
                                    width: size.width,
                                    height: size.height,
                                    x: 0,
                                    y: 0,
                                    preserveAspectRatio: config["aspect-ratio"],
                                    "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
                                    "xlink:href": config.img,
                                    'class': 'solid'
                                }
                            }
                        });
                        img = new Image();
                        img.addEventListener('load', function() {
                            var ret1, size1, v;
                            if (config["img-size"]) {
                                ret1 = config["img-size"].split(',');
                                size1 = {
                                    width: +ret1[0],
                                    height: +ret1[1]
                                };
                            } else if (img.width && img.height) size1 = {
                                width: img.width,
                                height: img.height
                            };
                            else size1 = {
                                width: 100,
                                height: 100
                            };
                            svg.querySelector('mask image').attrs({
                                width: size1.width,
                                height: size1.height
                            });
                            group[1].querySelector('image').attrs({
                                width: size1.width,
                                height: size1.height
                            });
                            this$.fit();
                            v = this$.value;
                            this$.value = undefined;
                            this$.set(v, true);
                            return this$.inited = true;
                        });
                        img.src = config.img;
                        svg.appendChild(group[0]);
                        svg.appendChild(group[1]);
                    }
                    svg.attrs({
                        width: '100%',
                        height: '100%'
                    });
                    this.transition = {
                        value: {
                            src: 0,
                            des: 0
                        },
                        time: {
                        },
                        ease: function(t, b, c, d) {
                            t = t / (d * 0.5);
                            if (t < 1) return c * 0.5 * t * t + b;
                            t = t - 1;
                            return -c * 0.5 * (t * (t - 2) - 1) + b;
                        },
                        handler: function(time, doTransition) {
                            var ref$, min, max, prec, dv, dt, dur, v, p, node, style, box, dir;
                            doTransition == null && (doTransition = true);
                            if (this.time.src == null) this.time.src = time;
                            ref$ = [
                                config["min"],
                                config["max"],
                                1 / config["precision"]
                            ], min = ref$[0], max = ref$[1], prec = ref$[2];
                            ref$ = [
                                this.value.des - this.value.src,
                                (time - this.time.src) * 0.001,
                                +config["duration"] || 1
                            ], dv = ref$[0], dt = ref$[1], dur = ref$[2];
                            v = doTransition ? this.ease(dt, this.value.src, dv, dur) : this.value.des;
                            if (config.precision) v = Math.round(v * prec) / prec;
                            else if (doTransition) v = Math.round(v);
                            v >= min || (v = min);
                            v <= max || (v = max);
                            text.textContent = v;
                            p = 100 * (v - min) / (max - min);
                            if (isStroke) {
                                node = path1;
                                style = {
                                    "stroke-dasharray": config["stroke-dir"] === 'reverse' ? "0 " + length * (100 - p) * 0.01 + " " + length * p * 0.01 + " 0" : p * 0.01 * length + " " + ((100 - p) * 0.01 * length + 1)
                                };
                            } else {
                                box = group[1].getBBox();
                                dir = config["fill-dir"];
                                style = dir === 'btt' || !dir ? {
                                    y: box.y + box.height * (100 - p) * 0.01,
                                    height: box.height * p * 0.01,
                                    x: box.x,
                                    width: box.width
                                } : dir === 'ttb' ? {
                                    y: box.y,
                                    height: box.height * p * 0.01,
                                    x: box.x,
                                    width: box.width
                                } : dir === 'ltr' ? {
                                    y: box.y,
                                    height: box.height,
                                    x: box.x,
                                    width: box.width * p * 0.01
                                } : dir === 'rtl' ? {
                                    y: box.y,
                                    height: box.height,
                                    x: box.x + box.width * (100 - p) * 0.01,
                                    width: box.width * p * 0.01
                                } : void 0;
                                node = svg.querySelector('rect');
                            }
                            node.attrs(style);
                            if (dt >= dur) {
                                delete this.time.src;
                                return false;
                            }
                            return true;
                        },
                        start: function(src, des, doTransition) {
                            var ref$, this$1 = this;
                            ref$ = this.value;
                            ref$.src = src;
                            ref$.des = des;
                            root.offsetWidth || root.offsetHeight || root.getClientRects().length;
                            if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
                                this.time.src = 0;
                                this.handler(1000, false);
                                return;
                            }
                            return handler.add(id.key, function(time) {
                                return this$1.handler(time);
                            });
                        }
                    };
                    this.set = function(v, doTransition) {
                        var src, des;
                        doTransition == null && (doTransition = true);
                        src = this.value || 0;
                        if (v != null) this.value = v;
                        else v = this.value;
                        des = this.value;
                        return this.transition.start(src, des, doTransition);
                    };
                    this.set(+config.value || 0, config["transition-in"]);
                    return this;
                };
                return window.addEventListener('load', function() {
                    var i$, ref$, len$, node, results$ = [];
                    for(i$ = 0, len$ = (ref$ = document.querySelectorAll('.ldBar')).length; i$ < len$; ++i$){
                        node = ref$[i$];
                        if (!node.ldBar) results$.push(node.ldBar = new ldBar(node));
                    }
                    return results$;
                }, false);
            })();
            module.exports = ldBar;
            function import$(obj, src) {
                var own = {
                }.hasOwnProperty;
                for(var key in src)if (own.call(src, key)) obj[key] = src[key];
                return obj;
            }
        },
        {
            "./presets": 2
        }
    ],
    2: [
        function(require, module, exports) {
            // Generated by LiveScript 1.3.1
            var presets, out$ = typeof exports != 'undefined' && exports || this;
            out$.presets = presets = {
                rainbow: {
                    "type": 'stroke',
                    "path": 'M10 10L90 10',
                    "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)',
                    "bbox": "10 10 80 10"
                },
                energy: {
                    "type": 'fill',
                    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
                    "stroke": '#f00',
                    "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
                    "fill-dir": "ltr",
                    "fill-background": '#444',
                    "fill-background-extrude": 1,
                    "bbox": "10 5 80 10"
                },
                stripe: {
                    "type": 'fill',
                    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
                    "stroke": '#f00',
                    "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
                    "fill-dir": "ltr",
                    "fill-background": '#ddd',
                    "fill-background-extrude": 1,
                    "bbox": "10 5 80 10"
                },
                text: {
                    "type": 'fill',
                    "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
                    "fill-background-extrude": 1.3,
                    "pattern-size": 100,
                    "fill-dir": "ltr",
                    "img-size": "70,20",
                    "bbox": "0 0 70 20"
                },
                line: {
                    "type": 'stroke',
                    "path": 'M10 10L90 10',
                    "stroke": '#25b',
                    "stroke-width": 3,
                    "stroke-trail": '#ddd',
                    "stroke-trail-width": 1,
                    "bbox": "10 10 80 10"
                },
                fan: {
                    "type": 'stroke',
                    "path": 'M10 90A40 40 0 0 1 90 90',
                    "fill-dir": 'btt',
                    "fill": '#25b',
                    "fill-background": '#ddd',
                    "fill-background-extrude": 3,
                    "stroke-dir": 'normal',
                    "stroke": '#25b',
                    "stroke-width": '3',
                    "stroke-trail": '#ddd',
                    "stroke-trail-width": 0.5,
                    "bbox": "10 50 80 40"
                },
                circle: {
                    "type": 'stroke',
                    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
                    "fill-dir": 'btt',
                    "fill": '#25b',
                    "fill-background": '#ddd',
                    "fill-background-extrude": 3,
                    "stroke-dir": 'normal',
                    "stroke": '#25b',
                    "stroke-width": '3',
                    "stroke-trail": '#ddd',
                    "stroke-trail-width": 0.5,
                    "bbox": "10 10 80 80"
                },
                bubble: {
                    "type": 'fill',
                    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
                    "fill-dir": 'btt',
                    "fill": 'data:ldbar/res,bubble(#39d,#cef)',
                    "pattern-size": "150",
                    "fill-background": '#ddd',
                    "fill-background-extrude": 2,
                    "stroke-dir": 'normal',
                    "stroke": '#25b',
                    "stroke-width": '3',
                    "stroke-trail": '#ddd',
                    "stroke-trail-width": 0.5,
                    "bbox": "10 10 80 80"
                }
            };
        },
        {
        }
    ]
}, {
}, [
    1
]);

},{}]},["APyxP","6zM1h"], "6zM1h", "parcelRequiredca8")

//# sourceMappingURL=florbs.b68e9f2d.js.map
