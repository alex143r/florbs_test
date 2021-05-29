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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.e308ff8e.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/alex/Desktop/florbs-test/dist/lufga-bold-webfont.59f8a94b.woff2":[["lufga-bold-webfont.59f8a94b.b8b85c0b.woff2","lufga-bold-webfont.59f8a94b.woff2"],"lufga-bold-webfont.59f8a94b.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-bold-webfont.8db783e2.woff":[["lufga-bold-webfont.8db783e2.90a97928.woff","lufga-bold-webfont.8db783e2.woff"],"lufga-bold-webfont.8db783e2.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-bolditalic-webfont.5505a92c.woff2":[["lufga-bolditalic-webfont.5505a92c.751030d1.woff2","lufga-bolditalic-webfont.5505a92c.woff2"],"lufga-bolditalic-webfont.5505a92c.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-bolditalic-webfont.d8545b3a.woff":[["lufga-bolditalic-webfont.d8545b3a.322cd055.woff","lufga-bolditalic-webfont.d8545b3a.woff"],"lufga-bolditalic-webfont.d8545b3a.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-extrabold-webfont.659bea0b.woff2":[["lufga-extrabold-webfont.659bea0b.ab51c715.woff2","lufga-extrabold-webfont.659bea0b.woff2"],"lufga-extrabold-webfont.659bea0b.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-extrabold-webfont.3e65ffcb.woff":[["lufga-extrabold-webfont.3e65ffcb.035ddca6.woff","lufga-extrabold-webfont.3e65ffcb.woff"],"lufga-extrabold-webfont.3e65ffcb.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-extrabolditalic-webfont.77533260.woff2":[["lufga-extrabolditalic-webfont.77533260.527fbc32.woff2","lufga-extrabolditalic-webfont.77533260.woff2"],"lufga-extrabolditalic-webfont.77533260.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-extrabolditalic-webfont.3a5044f1.woff":[["lufga-extrabolditalic-webfont.3a5044f1.48d7c273.woff","lufga-extrabolditalic-webfont.3a5044f1.woff"],"lufga-extrabolditalic-webfont.3a5044f1.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-extralight-webfont.18702827.woff2":[["lufga-extralight-webfont.18702827.ec2e688f.woff2","lufga-extralight-webfont.18702827.woff2"],"lufga-extralight-webfont.18702827.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-extralight-webfont.aac2b329.woff":[["lufga-extralight-webfont.aac2b329.9cd66429.woff","lufga-extralight-webfont.aac2b329.woff"],"lufga-extralight-webfont.aac2b329.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-extralightitalic-webfont.21f1675e.woff2":[["lufga-extralightitalic-webfont.21f1675e.0ef5acbe.woff2","lufga-extralightitalic-webfont.21f1675e.woff2"],"lufga-extralightitalic-webfont.21f1675e.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-extralightitalic-webfont.d284c753.woff":[["lufga-extralightitalic-webfont.d284c753.46f646fd.woff","lufga-extralightitalic-webfont.d284c753.woff"],"lufga-extralightitalic-webfont.d284c753.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-italic-webfont.5904a6a7.woff2":[["lufga-italic-webfont.5904a6a7.73c3ea93.woff2","lufga-italic-webfont.5904a6a7.woff2"],"lufga-italic-webfont.5904a6a7.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-italic-webfont.0e5d67cb.woff":[["lufga-italic-webfont.0e5d67cb.ded2f2a1.woff","lufga-italic-webfont.0e5d67cb.woff"],"lufga-italic-webfont.0e5d67cb.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-light-webfont.011e47a7.woff2":[["lufga-light-webfont.011e47a7.1d68d621.woff2","lufga-light-webfont.011e47a7.woff2"],"lufga-light-webfont.011e47a7.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-light-webfont.2c507212.woff":[["lufga-light-webfont.2c507212.30a4046a.woff","lufga-light-webfont.2c507212.woff"],"lufga-light-webfont.2c507212.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-lightitalic-webfont.5b9c15d8.woff2":[["lufga-lightitalic-webfont.5b9c15d8.aad2ad75.woff2","lufga-lightitalic-webfont.5b9c15d8.woff2"],"lufga-lightitalic-webfont.5b9c15d8.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-lightitalic-webfont.f92a889e.woff":[["lufga-lightitalic-webfont.f92a889e.0a661309.woff","lufga-lightitalic-webfont.f92a889e.woff"],"lufga-lightitalic-webfont.f92a889e.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-medium-webfont.68eeaa9b.woff2":[["lufga-medium-webfont.68eeaa9b.76c90f03.woff2","lufga-medium-webfont.68eeaa9b.woff2"],"lufga-medium-webfont.68eeaa9b.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-medium-webfont.da31310a.woff":[["lufga-medium-webfont.da31310a.cdf036fd.woff","lufga-medium-webfont.da31310a.woff"],"lufga-medium-webfont.da31310a.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-mediumitalic-webfont.0e1f49ed.woff2":[["lufga-mediumitalic-webfont.0e1f49ed.b791227c.woff2","lufga-mediumitalic-webfont.0e1f49ed.woff2"],"lufga-mediumitalic-webfont.0e1f49ed.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-mediumitalic-webfont.95bfebdf.woff":[["lufga-mediumitalic-webfont.95bfebdf.8a9f5703.woff","lufga-mediumitalic-webfont.95bfebdf.woff"],"lufga-mediumitalic-webfont.95bfebdf.woff"],"/Users/alex/Desktop/florbs-test/dist/lufga-regular-webfont.4fe7260a.woff2":[["lufga-regular-webfont.4fe7260a.0cadfdea.woff2","lufga-regular-webfont.4fe7260a.woff2"],"lufga-regular-webfont.4fe7260a.woff2"],"/Users/alex/Desktop/florbs-test/dist/lufga-regular-webfont.cca1422c.woff":[["lufga-regular-webfont.cca1422c.6300688d.woff","lufga-regular-webfont.cca1422c.woff"],"lufga-regular-webfont.cca1422c.woff"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}]