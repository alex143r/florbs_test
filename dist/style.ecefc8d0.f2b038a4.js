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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.ecefc8d0.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./lufga-bold-webfont.0df05e19.woff2":[["lufga-bold-webfont.0df05e19.a040da6b.woff2","lufga-bold-webfont.0df05e19.woff2"],"lufga-bold-webfont.0df05e19.woff2"],"./lufga-bold-webfont.52558aa0.woff":[["lufga-bold-webfont.52558aa0.04a78d19.woff","lufga-bold-webfont.52558aa0.woff"],"lufga-bold-webfont.52558aa0.woff"],"./lufga-bolditalic-webfont.efd2e3b7.woff2":[["lufga-bolditalic-webfont.efd2e3b7.eb123bd2.woff2","lufga-bolditalic-webfont.efd2e3b7.woff2"],"lufga-bolditalic-webfont.efd2e3b7.woff2"],"./lufga-bolditalic-webfont.ea989474.woff":[["lufga-bolditalic-webfont.ea989474.e486d0cb.woff","lufga-bolditalic-webfont.ea989474.woff"],"lufga-bolditalic-webfont.ea989474.woff"],"./lufga-extrabold-webfont.b2b5f504.woff2":[["lufga-extrabold-webfont.b2b5f504.3d98bd6e.woff2","lufga-extrabold-webfont.b2b5f504.woff2"],"lufga-extrabold-webfont.b2b5f504.woff2"],"./lufga-extrabold-webfont.e0bc7ca6.woff":[["lufga-extrabold-webfont.e0bc7ca6.ab5d0c63.woff","lufga-extrabold-webfont.e0bc7ca6.woff"],"lufga-extrabold-webfont.e0bc7ca6.woff"],"./lufga-extrabolditalic-webfont.8a1ee46c.woff2":[["lufga-extrabolditalic-webfont.8a1ee46c.6be1dddc.woff2","lufga-extrabolditalic-webfont.8a1ee46c.woff2"],"lufga-extrabolditalic-webfont.8a1ee46c.woff2"],"./lufga-extrabolditalic-webfont.5e8f0cf4.woff":[["lufga-extrabolditalic-webfont.5e8f0cf4.f3d7f2bd.woff","lufga-extrabolditalic-webfont.5e8f0cf4.woff"],"lufga-extrabolditalic-webfont.5e8f0cf4.woff"],"./lufga-extralight-webfont.cea91f83.woff2":[["lufga-extralight-webfont.cea91f83.6c0b5860.woff2","lufga-extralight-webfont.cea91f83.woff2"],"lufga-extralight-webfont.cea91f83.woff2"],"./lufga-extralight-webfont.fcdadff3.woff":[["lufga-extralight-webfont.fcdadff3.1231a91b.woff","lufga-extralight-webfont.fcdadff3.woff"],"lufga-extralight-webfont.fcdadff3.woff"],"./lufga-extralightitalic-webfont.9a46c137.woff2":[["lufga-extralightitalic-webfont.9a46c137.06efb591.woff2","lufga-extralightitalic-webfont.9a46c137.woff2"],"lufga-extralightitalic-webfont.9a46c137.woff2"],"./lufga-extralightitalic-webfont.30406d73.woff":[["lufga-extralightitalic-webfont.30406d73.b33ff12b.woff","lufga-extralightitalic-webfont.30406d73.woff"],"lufga-extralightitalic-webfont.30406d73.woff"],"./lufga-italic-webfont.9e8e4d70.woff2":[["lufga-italic-webfont.9e8e4d70.3a55f3ab.woff2","lufga-italic-webfont.9e8e4d70.woff2"],"lufga-italic-webfont.9e8e4d70.woff2"],"./lufga-italic-webfont.3ff38ff7.woff":[["lufga-italic-webfont.3ff38ff7.fef11e64.woff","lufga-italic-webfont.3ff38ff7.woff"],"lufga-italic-webfont.3ff38ff7.woff"],"./lufga-light-webfont.8ecd5910.woff2":[["lufga-light-webfont.8ecd5910.d8804220.woff2","lufga-light-webfont.8ecd5910.woff2"],"lufga-light-webfont.8ecd5910.woff2"],"./lufga-light-webfont.cecb5c1f.woff":[["lufga-light-webfont.cecb5c1f.ef755f52.woff","lufga-light-webfont.cecb5c1f.woff"],"lufga-light-webfont.cecb5c1f.woff"],"./lufga-lightitalic-webfont.a77c6478.woff2":[["lufga-lightitalic-webfont.a77c6478.5f0028c0.woff2","lufga-lightitalic-webfont.a77c6478.woff2"],"lufga-lightitalic-webfont.a77c6478.woff2"],"./lufga-lightitalic-webfont.490c0d05.woff":[["lufga-lightitalic-webfont.490c0d05.e2d7fb0c.woff","lufga-lightitalic-webfont.490c0d05.woff"],"lufga-lightitalic-webfont.490c0d05.woff"],"./lufga-medium-webfont.b0894124.woff2":[["lufga-medium-webfont.b0894124.994774f9.woff2","lufga-medium-webfont.b0894124.woff2"],"lufga-medium-webfont.b0894124.woff2"],"./lufga-medium-webfont.1f72f8a6.woff":[["lufga-medium-webfont.1f72f8a6.a3cbc4db.woff","lufga-medium-webfont.1f72f8a6.woff"],"lufga-medium-webfont.1f72f8a6.woff"],"./lufga-mediumitalic-webfont.26ac5391.woff2":[["lufga-mediumitalic-webfont.26ac5391.189d7db1.woff2","lufga-mediumitalic-webfont.26ac5391.woff2"],"lufga-mediumitalic-webfont.26ac5391.woff2"],"./lufga-mediumitalic-webfont.26a35411.woff":[["lufga-mediumitalic-webfont.26a35411.2ef1e508.woff","lufga-mediumitalic-webfont.26a35411.woff"],"lufga-mediumitalic-webfont.26a35411.woff"],"./lufga-regular-webfont.bc1f550a.woff2":[["lufga-regular-webfont.bc1f550a.79cf17fd.woff2","lufga-regular-webfont.bc1f550a.woff2"],"lufga-regular-webfont.bc1f550a.woff2"],"./lufga-regular-webfont.9171028b.woff":[["lufga-regular-webfont.9171028b.e2e8fbb2.woff","lufga-regular-webfont.9171028b.woff"],"lufga-regular-webfont.9171028b.woff"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}]