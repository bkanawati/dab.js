/*! For license information please see ../tests/tape-test-sample.js */
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value;
    };
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 1);
})([ function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var mvpDemo = {};
    mvpDemo.isNegativeOrOdd = function(value) {
        return value < 0 || value % 2 !== 0;
    };
    mvpDemo.add = function(a, b) {
        return a + b;
    };
    mvpDemo.multiply = function(a, b) {
        return a * b;
    };
    mvpDemo.reverseString = function(string) {
        return string.split("").reverse().join("");
    };
    mvpDemo.cloneDeep = function(value) {
        var keys = Object.keys(value);
        var cloned = {};
        keys.forEach(function(e) {
            if (_typeof(value[e]) === "object") {
                cloned[e] = mvpDemo.cloneDeep(value[e]);
            } else {
                cloned[e] = value[e];
            }
        });
        return cloned;
    };
    mvpDemo.clone = function(value) {
        if (Array.isArray(value)) {
            return value.map(function(ele, i) {
                return ele;
            });
        } else {
            var obj = {};
            for (var key in value) {
                obj[key] = value[key];
            }
            return obj;
        }
    };
    mvpDemo.memoize = function(func) {
        var cache = {};
        return function() {
            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }
            var args = params.map(function(e) {
                return JSON.stringify(e);
            });
            if (cache[args]) return cache[args]; else {
                cache[args] = func.apply(undefined, params);
                return cache[args];
            }
        };
    };
    module.exports = mvpDemo;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var mvpDemo = __webpack_require__(0);
} ]);