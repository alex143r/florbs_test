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
})({"6XBLD":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6aa254f66b908b8be3bbdb035f01b7b2"; // @flow
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

},{}],"tGwvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gotrueJs = require("gotrue-js");
var _gotrueJsDefault = parcelHelpers.interopDefault(_gotrueJs);
let user;
let user2;
let loggedIn = false;
checkUser();
function checkUser() {
    let auth = new _gotrueJsDefault.default({
        APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
        setCookie: true
    });
    user = auth.currentUser();
    console.log(user);
    setUser();
    setSidebar();
}
function setUser() {
    if (user === null) {
        console.log("naa dude");
        loggedIn = false;
    }
    if (user !== null) {
        loggedIn = true;
        console.log(user);
        document.querySelector(".username").innerHTML = user.user_metadata.data.full_name;
    }
    // document.querySelector(".username").innerHTML =
    //   user.user_metadata.data.full_name;
    document.querySelector(".logout").addEventListener("click", handleLogout);
}
function handleLogout() {
    user.logout().then((response)=>{
        location.reload();
        loggedIn = false;
        console.log("User logged out");
    }).catch((error)=>{
        console.log("Failed to logout user: %o", error);
        throw error;
    });
    setSidebar();
}
function setSidebar() {
    console.log("setSide");
    if (loggedIn === true) {
        document.querySelector(".sidebar-logged-out").classList.add("hide");
        document.querySelector(".sidebar-logged-in").classList.remove("hide");
    }
    if (loggedIn === false) {
        document.querySelector(".sidebar-logged-out").classList.remove("hide");
        document.querySelector(".sidebar-logged-in").classList.add("hide");
    }
}

},{"gotrue-js":"67DNY","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"67DNY":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _microApiClient = _interopRequireWildcard(require("micro-api-client"));
var _user = _interopRequireDefault(require("./user.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache1() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var HTTPRegexp = /^http:\/\//;
var defaultApiURL = "/.netlify/identity";
var GoTrue = /*#__PURE__*/ function() {
    function GoTrue1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, _ref$APIUrl = _ref.APIUrl, APIUrl = _ref$APIUrl === void 0 ? defaultApiURL : _ref$APIUrl, _ref$audience = _ref.audience, audience = _ref$audience === void 0 ? '' : _ref$audience, _ref$setCookie = _ref.setCookie, setCookie = _ref$setCookie === void 0 ? false : _ref$setCookie;
        _classCallCheck(this, GoTrue1);
        if (APIUrl.match(HTTPRegexp)) console.warn('Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely.');
        if (audience) this.audience = audience;
        this.setCookie = setCookie;
        this.api = new _microApiClient["default"](APIUrl);
    }
    _createClass(GoTrue1, [
        {
            key: "_request",
            value: function _request(path) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                options.headers = options.headers || {
                };
                var aud = options.audience || this.audience;
                if (aud) options.headers['X-JWT-AUD'] = aud;
                return this.api.request(path, options)["catch"](function(error) {
                    if (error instanceof _microApiClient.JSONHTTPError && error.json) {
                        if (error.json.msg) error.message = error.json.msg;
                        else if (error.json.error) error.message = "".concat(error.json.error, ": ").concat(error.json.error_description);
                    }
                    return Promise.reject(error);
                });
            }
        },
        {
            key: "settings",
            value: function settings() {
                return this._request('/settings');
            }
        },
        {
            key: "signup",
            value: function signup(email, password, data) {
                return this._request('/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        data: data
                    })
                });
            }
        },
        {
            key: "login",
            value: function login(email, password, remember) {
                var _this = this;
                this._setRememberHeaders(remember);
                return this._request('/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: "grant_type=password&username=".concat(encodeURIComponent(email), "&password=").concat(encodeURIComponent(password))
                }).then(function(response) {
                    _user["default"].removeSavedSession();
                    return _this.createUser(response, remember);
                });
            }
        },
        {
            key: "loginExternalUrl",
            value: function loginExternalUrl(provider) {
                return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider);
            }
        },
        {
            key: "confirm",
            value: function confirm(token, remember) {
                this._setRememberHeaders(remember);
                return this.verify('signup', token, remember);
            }
        },
        {
            key: "requestPasswordRecovery",
            value: function requestPasswordRecovery(email) {
                return this._request('/recover', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email
                    })
                });
            }
        },
        {
            key: "recover",
            value: function recover(token, remember) {
                this._setRememberHeaders(remember);
                return this.verify('recovery', token, remember);
            }
        },
        {
            key: "acceptInvite",
            value: function acceptInvite(token, password, remember) {
                var _this2 = this;
                this._setRememberHeaders(remember);
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        password: password,
                        type: 'signup'
                    })
                }).then(function(response) {
                    return _this2.createUser(response, remember);
                });
            }
        },
        {
            key: "acceptInviteExternalUrl",
            value: function acceptInviteExternalUrl(provider, token) {
                return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider, "&invite_token=").concat(token);
            }
        },
        {
            key: "createUser",
            value: function createUser(tokenResponse) {
                var remember = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                this._setRememberHeaders(remember);
                var user = new _user["default"](this.api, tokenResponse, this.audience);
                return user.getUserData().then(function(userData) {
                    if (remember) userData._saveSession();
                    return userData;
                });
            }
        },
        {
            key: "currentUser",
            value: function currentUser() {
                var user = _user["default"].recoverSession(this.api);
                user && this._setRememberHeaders(user._fromStorage);
                return user;
            }
        },
        {
            key: "verify",
            value: function verify(type, token, remember) {
                var _this3 = this;
                this._setRememberHeaders(remember);
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        type: type
                    })
                }).then(function(response) {
                    return _this3.createUser(response, remember);
                });
            }
        },
        {
            key: "_setRememberHeaders",
            value: function _setRememberHeaders(remember) {
                if (this.setCookie) {
                    this.api.defaultHeaders = this.api.defaultHeaders || {
                    };
                    this.api.defaultHeaders['X-Use-Cookie'] = remember ? '1' : 'session';
                }
            }
        }
    ]);
    return GoTrue1;
}();
exports["default"] = GoTrue;
if (typeof window !== 'undefined') window.GoTrue = GoTrue;

},{"micro-api-client":"6Tnrw","./user.js":"rYOcs"}],"6Tnrw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONHTTPError = exports.TextHTTPError = exports.HTTPError = exports.getPagination = undefined;
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _pagination = require("./pagination");
Object.defineProperty(exports, "getPagination", {
    enumerable: true,
    get: function get() {
        return _pagination.getPagination;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }
    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (Object.setPrototypeOf) Object.setPrototypeOf(ExtendableBuiltin, cls);
    else ExtendableBuiltin.__proto__ = cls;
    return ExtendableBuiltin;
}
var HTTPError1 = exports.HTTPError = function(_extendableBuiltin2) {
    _inherits(HTTPError2, _extendableBuiltin2);
    function HTTPError2(response) {
        _classCallCheck(this, HTTPError2);
        var _this = _possibleConstructorReturn(this, (HTTPError2.__proto__ || Object.getPrototypeOf(HTTPError2)).call(this, response.statusText));
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(_this, _this.constructor);
        else _this.stack = new Error(response.statusText).stack;
        _this.status = response.status;
        return _this;
    }
    return HTTPError2;
}(_extendableBuiltin(Error));
var TextHTTPError1 = exports.TextHTTPError = function(_HTTPError) {
    _inherits(TextHTTPError2, _HTTPError);
    function TextHTTPError2(response, data) {
        _classCallCheck(this, TextHTTPError2);
        var _this2 = _possibleConstructorReturn(this, (TextHTTPError2.__proto__ || Object.getPrototypeOf(TextHTTPError2)).call(this, response));
        _this2.data = data;
        return _this2;
    }
    return TextHTTPError2;
}(HTTPError1);
var JSONHTTPError1 = exports.JSONHTTPError = function(_HTTPError2) {
    _inherits(JSONHTTPError2, _HTTPError2);
    function JSONHTTPError2(response, json) {
        _classCallCheck(this, JSONHTTPError2);
        var _this3 = _possibleConstructorReturn(this, (JSONHTTPError2.__proto__ || Object.getPrototypeOf(JSONHTTPError2)).call(this, response));
        _this3.json = json;
        return _this3;
    }
    return JSONHTTPError2;
}(HTTPError1);
var API = function() {
    function API1() {
        var apiURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var options = arguments[1];
        _classCallCheck(this, API1);
        this.apiURL = apiURL;
        if (this.apiURL.match(/\/[^\/]?/)) // eslint-disable-line no-useless-escape
        this._sameOrigin = true;
        this.defaultHeaders = options && options.defaultHeaders || {
        };
    }
    _createClass(API1, [
        {
            key: "headers",
            value: function headers() {
                var _headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                return _extends({
                }, this.defaultHeaders, {
                    "Content-Type": "application/json"
                }, _headers);
            }
        },
        {
            key: "parseJsonResponse",
            value: function parseJsonResponse(response) {
                return response.json().then(function(json) {
                    if (!response.ok) return Promise.reject(new JSONHTTPError1(response, json));
                    var pagination = _pagination.getPagination(response);
                    return pagination ? {
                        pagination: pagination,
                        items: json
                    } : json;
                });
            }
        },
        {
            key: "request",
            value: function request(path) {
                var _this4 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                var headers = this.headers(options.headers || {
                });
                if (this._sameOrigin) options.credentials = options.credentials || "same-origin";
                return fetch(this.apiURL + path, _extends({
                }, options, {
                    headers: headers
                })).then(function(response) {
                    var contentType = response.headers.get("Content-Type");
                    if (contentType && contentType.match(/json/)) return _this4.parseJsonResponse(response);
                    if (!response.ok) return response.text().then(function(data) {
                        return Promise.reject(new TextHTTPError1(response, data));
                    });
                    return response.text().then(function(data) {
                    });
                });
            }
        }
    ]);
    return API1;
}();
exports.default = API;

},{"./pagination":"6qJBu"}],"6qJBu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
exports.getPagination = getPagination;
function getPagination(response) {
    var links = response.headers.get("Link");
    var pagination = {
    };
    //var link, url, rel, m, page;
    if (links == null) return null;
    links = links.split(",");
    var total = response.headers.get("X-Total-Count");
    for(var i = 0, len = links.length; i < len; i++){
        var link = links[i].replace(/(^\s*|\s*$)/, "");
        var _link$split = link.split(";"), _link$split2 = _slicedToArray(_link$split, 2), url = _link$split2[0], rel = _link$split2[1];
        var m = url.match(/page=(\d+)/);
        var page = m && parseInt(m[1], 10);
        if (rel.match(/last/)) pagination.last = page;
        else if (rel.match(/next/)) pagination.next = page;
        else if (rel.match(/prev/)) pagination.prev = page;
        else if (rel.match(/first/)) pagination.first = page;
    }
    pagination.last = Math.max(pagination.last || 0, pagination.prev && pagination.prev + 1 || 0);
    pagination.current = pagination.next ? pagination.next - 1 : pagination.last || 1;
    pagination.total = total ? parseInt(total, 10) : null;
    return pagination;
}

},{}],"rYOcs":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _microApiClient = _interopRequireWildcard(require("micro-api-client"));
var _admin = _interopRequireDefault(require("./admin.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache1() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ExpiryMargin = 60000;
var storageKey = 'gotrue.user';
var refreshPromises = {
};
var currentUser = null;
var forbiddenUpdateAttributes = {
    api: 1,
    token: 1,
    audience: 1,
    url: 1
};
var forbiddenSaveAttributes = {
    api: 1
};
var isBrowser = function isBrowser1() {
    return typeof window !== 'undefined';
};
var User = /*#__PURE__*/ function() {
    function User1(api, tokenResponse, audience) {
        _classCallCheck(this, User1);
        this.api = api;
        this.url = api.apiURL;
        this.audience = audience;
        this._processTokenResponse(tokenResponse);
        currentUser = this;
    }
    _createClass(User1, [
        {
            key: "update",
            value: function update(attributes) {
                var _this = this;
                return this._request('/user', {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                }).then(function(response) {
                    return _this._saveUserData(response)._refreshSavedSession();
                });
            }
        },
        {
            key: "jwt",
            value: function jwt(forceRefresh) {
                var token = this.tokenDetails();
                if (token === null || token === undefined) return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));
                var expires_at = token.expires_at, refresh_token = token.refresh_token, access_token = token.access_token;
                if (forceRefresh || expires_at - ExpiryMargin < Date.now()) return this._refreshToken(refresh_token);
                return Promise.resolve(access_token);
            }
        },
        {
            key: "logout",
            value: function logout() {
                return this._request('/logout', {
                    method: 'POST'
                }).then(this.clearSession.bind(this))["catch"](this.clearSession.bind(this));
            }
        },
        {
            key: "_refreshToken",
            value: function _refreshToken(refresh_token) {
                var _this2 = this;
                if (refreshPromises[refresh_token]) return refreshPromises[refresh_token];
                return refreshPromises[refresh_token] = this.api.request('/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: "grant_type=refresh_token&refresh_token=".concat(refresh_token)
                }).then(function(response) {
                    delete refreshPromises[refresh_token];
                    _this2._processTokenResponse(response);
                    _this2._refreshSavedSession();
                    return _this2.token.access_token;
                })["catch"](function(error) {
                    delete refreshPromises[refresh_token];
                    _this2.clearSession();
                    return Promise.reject(error);
                });
            }
        },
        {
            key: "_request",
            value: function _request(path) {
                var _this3 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                options.headers = options.headers || {
                };
                var aud = options.audience || this.audience;
                if (aud) options.headers['X-JWT-AUD'] = aud;
                return this.jwt().then(function(token) {
                    return _this3.api.request(path, _objectSpread({
                        headers: Object.assign(options.headers, {
                            Authorization: "Bearer ".concat(token)
                        })
                    }, options))["catch"](function(error) {
                        if (error instanceof _microApiClient.JSONHTTPError && error.json) {
                            if (error.json.msg) error.message = error.json.msg;
                            else if (error.json.error) error.message = "".concat(error.json.error, ": ").concat(error.json.error_description);
                        }
                        return Promise.reject(error);
                    });
                });
            }
        },
        {
            key: "getUserData",
            value: function getUserData() {
                return this._request('/user').then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
            }
        },
        {
            key: "_saveUserData",
            value: function _saveUserData(attributes, fromStorage) {
                for(var key in attributes){
                    if (key in User1.prototype || key in forbiddenUpdateAttributes) continue;
                    this[key] = attributes[key];
                }
                if (fromStorage) this._fromStorage = true;
                return this;
            }
        },
        {
            key: "_processTokenResponse",
            value: function _processTokenResponse(tokenResponse) {
                this.token = tokenResponse;
                try {
                    var claims = JSON.parse(urlBase64Decode(tokenResponse.access_token.split('.')[1]));
                    this.token.expires_at = claims.exp * 1000;
                } catch (error) {
                    console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(error)));
                }
            }
        },
        {
            key: "_refreshSavedSession",
            value: function _refreshSavedSession() {
                // only update saved session if we previously saved something
                if (isBrowser() && localStorage.getItem(storageKey)) this._saveSession();
                return this;
            }
        },
        {
            key: "_saveSession",
            value: function _saveSession() {
                isBrowser() && localStorage.setItem(storageKey, JSON.stringify(this._details));
                return this;
            }
        },
        {
            key: "tokenDetails",
            value: function tokenDetails() {
                return this.token;
            }
        },
        {
            key: "clearSession",
            value: function clearSession() {
                User1.removeSavedSession();
                this.token = null;
                currentUser = null;
            }
        },
        {
            key: "admin",
            get: function get() {
                return new _admin["default"](this);
            }
        },
        {
            key: "_details",
            get: function get() {
                var userCopy = {
                };
                for(var key in this){
                    if (key in User1.prototype || key in forbiddenSaveAttributes) continue;
                    userCopy[key] = this[key];
                }
                return userCopy;
            }
        }
    ], [
        {
            key: "removeSavedSession",
            value: function removeSavedSession() {
                isBrowser() && localStorage.removeItem(storageKey);
            }
        },
        {
            key: "recoverSession",
            value: function recoverSession(apiInstance) {
                if (currentUser) return currentUser;
                var json = isBrowser() && localStorage.getItem(storageKey);
                if (json) try {
                    var data = JSON.parse(json);
                    var url = data.url, token = data.token, audience = data.audience;
                    if (!url || !token) return null;
                    var api = apiInstance || new _microApiClient["default"](url, {
                    });
                    return new User1(api, token, audience)._saveUserData(data, true);
                } catch (error) {
                    console.error(new Error("Gotrue-js: Error recovering session: ".concat(error)));
                    return null;
                }
                return null;
            }
        }
    ]);
    return User1;
}();
exports["default"] = User;
function urlBase64Decode(str) {
    // From https://jwt.io/js/jwt.js
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw 'Illegal base64url string!';
    } // polifyll https://github.com/davidchambers/Base64.js
    var result = window.atob(output);
    try {
        return decodeURIComponent(escape(result));
    } catch (error) {
        return result;
    }
}

},{"micro-api-client":"6Tnrw","./admin.js":"7BTxE"}],"7BTxE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Admin = /*#__PURE__*/ function() {
    function Admin1(user) {
        _classCallCheck(this, Admin1);
        this.user = user;
    } // Return a list of all users in an audience
    _createClass(Admin1, [
        {
            key: "listUsers",
            value: function listUsers(aud) {
                return this.user._request('/admin/users', {
                    method: 'GET',
                    audience: aud
                });
            }
        },
        {
            key: "getUser",
            value: function getUser(user) {
                return this.user._request("/admin/users/".concat(user.id));
            }
        },
        {
            key: "updateUser",
            value: function updateUser(user) {
                var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                return this.user._request("/admin/users/".concat(user.id), {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: "createUser",
            value: function createUser(email, password) {
                var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                attributes.email = email;
                attributes.password = password;
                return this.user._request('/admin/users', {
                    method: 'POST',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: "deleteUser",
            value: function deleteUser(user) {
                return this.user._request("/admin/users/".concat(user.id), {
                    method: 'DELETE'
                });
            }
        }
    ]);
    return Admin1;
}();
exports["default"] = Admin;

},{}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["6XBLD","tGwvA"], "tGwvA", "parcelRequiredca8")

//# sourceMappingURL=dashboard.5f01b7b2.js.map
