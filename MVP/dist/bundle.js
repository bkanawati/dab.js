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
    module.exports = mvpDemo;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var mvpDemo = __webpack_require__(0);
} ]);