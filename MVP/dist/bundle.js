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
    return __webpack_require__(__webpack_require__.s = 2);
})([ function(module, exports, __webpack_require__) {
    "use strict";
    var anotherFile = {};
    anotherFile.square = function(a) {
        return a * a;
    };
    module.exports = anotherFile;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var operations = {};
    operations.add = function(a, b) {
        return a + b;
    };
    operations.multiply = function(a, b) {
        return a * b;
    };
    tape("Add - adds numbers", function(t) {
        var two = 2;
        var zero = 0;
        t.equal(numbers.add(1, 2), two);
        t.equal(numbers.add(3, 4), 7);
        t.notEqual(numbers.add(3, 4), zero);
        t.end();
    });
    module.exports = operations;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var operations = __webpack_require__(1);
    var anotherFile = __webpack_require__(0);
} ]);