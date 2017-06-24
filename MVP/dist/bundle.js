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
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    var stressTest = {};
    stressTest.reverseObject = function(object) {
        var result = {};
        for (key in object) {
            result[object[key]] = key;
        }
        return result;
    };
    stressTest.filter = function(collection, callback) {
        if (Array.isArray(collection)) {
            var filtered = [];
            collection.forEach(function(v, i, a) {
                if (callback(collection[i], i, collection)) {
                    filtered.push(collection[i]);
                }
            });
            return filtered;
        } else {
            var _filtered = {};
            for (key in collection) {
                if (callback(collection[key], key, collection)) {
                    _filtered[key] = collection[key];
                }
            }
            return _filtered;
        }
    };
    stressTest.memoize = function(func) {
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
    stressTest.delay = function(func, wait) {
        var args = arguments;
        var argsArray = [].concat(_toConsumableArray(args));
        var slicedArgs = argsArray.slice(2);
        setTimeout.apply(undefined, [ func, wait ].concat(_toConsumableArray(slicedArgs)));
    };
    module.exports = stressTest;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var stressTest = __webpack_require__(0);
} ]);