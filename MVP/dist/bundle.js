/*! For license information please see ../tests/tape-test-sample.js */
/******/ (function(modules) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
        };
        /******/
        /******/
        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;
    }
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/
    // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/
    // identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function(value) {
        return value;
    };
    /******/
    /******/
    // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
            });
        }
    };
    /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ? /******/
        function getDefault() {
            return module["default"];
        } : /******/
        function getModuleExports() {
            return module;
        };
        /******/
        __webpack_require__.d(getter, "a", getter);
        /******/
        return getter;
    };
    /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/
    // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 2);
})([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var newTest = {};
    /* ß∂dNß0j1const newTest = require('C:/Users/Batul/Desktop/CS-big-project/dab.js/MVP/src/newTest.js');
const supertest = require('supertest');
*/
    newTest.add = function(a, b) {
        return a + b;
    };
    /* ß∂dNß0j1test('my ADD func', function (t) {
	t.notEqual(add(2,4),  1, 'Error: my ADD func');
	t.end();
});*/
    module.exports = newTest;
}, /* 1 */
/***/
function(module, exports, __webpack_require__) {
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
    /* ß∂dNß0j1const stressTest = require('C:/Users/Batul/Desktop/CS-big-project/dab.js/MVP/src/stressTest.js');
*/
    /* ß∂dNß0j1var numbers= [1,3,4];
*/
    var stressTest = {};
    stressTest.reverseObject = function(object) {
        var result = {};
        for (key in object) {
            result[object[key]] = key;
        }
        return result;
    };
    /* ß∂dNß0j1test('should reverse multiple properties', function (t) {
	t.deepEqual(stressTest.reverseObject({a:1,b:2}),  {'1':'a','2':'b'}, 'Error: should reverse multiple properties');
	t.end();
});*/
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
    /* ß∂dNß0j1test.skip('should return all odd numbers in an array', function (t) {
	t.deepEqual(stressTest.filter([1, 2, 3, 4, 5, 6], num => num % 2 !== 0),  [1, 3, 5], 'Error: should return all odd numbers in an array');
	t.end();
});*/
    /* ß∂dNß0j1test('should filter all odd values in obj', function (t) {
	t.deepEqual(stressTest.filter({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0),  {a:1, c:3}, 'Error: should filter all odd values in obj');
	t.end();
});*/
    /* ß∂dNß0j1test('should filter all odd values in obj', function (t) {
	t.deepEqual(stressTest.filter({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0),  {a:1, c:3}, 'Error: should filter all odd values in obj');
	t.end();
});*/
    /* ß∂dNß0j1test('should not mutate the input array', function (t) {
	numbers = [1, 2, 3, 4];
duplicatedThroughFilter = stressTest.filter(numbers, () => true);
	t.notEqual(stressTest.filter(numbers, () => true),  duplicatedThroughFilter, 'Error: should not mutate the input array');
	t.end();
});*/
    stressTest.memoize = function(func) {
        var cache = {};
        return function() {
            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }
            var args = params.map(function(e) {
                return JSON.stringify(e);
            });
            // allows us to use it on objects containing objects
            if (cache[args]) return cache[args]; else {
                cache[args] = func.apply(undefined, params);
                return cache[args];
            }
        };
    };
    /* ß∂dNß0j1test('memoize', function (t) {
	let fib, fastFib, timeCheck, fastTimeCheck, add, fastAdd, wait
        fib = (n) => (n < 2) ? n : fib(n - 1) + fib(n - 2);
        fastFib = stressTest.memoize(fib);
        timeCheck = (str) => str + Date.now();
        fastTimeCheck = stressTest.memoize(timeCheck);
        add = (a, b, c) => a + b + c;
        fastAdd = stressTest.memoize(add);
    // Synchronous sleep: terrible for web development, awesome for testing memoize
        wait = (t) => {
          const start = Date.now();
          while ((Date.now() - start) < t) 'wait';
        };
            let firstTime = timeCheck('shazaam!');
                wait(5);
            let secondTime = fastTimeCheck('shazaam!');
                wait(5);
	t.equal(fib(10),  55, 'Error: memoize');
	t.equal(fastFib(10),  55, 'Error: memoize');
	t.notEqual(fastFib(10),  fastFib(7), 'Error: memoize');
	t.notEqual(firstTime,  secondTime, 'Error: memoize');
	t.equal(fastTimeCheck('shazaam!'),  secondTime, 'Error: memoize');
	t.equal(add(10,5,4),  19 , 'should accept multiple args');
	t.equal(fastAdd(10, 5, 4),  19 , 'should accept multiple args');
	firstTime = timeCheck({ foo: 'bar' });
    wait(5);
    secondTime = fastTimeCheck({ foo: 'bar' });
    wait(5);
	t.notEqual(firstTime,  secondTime, 'Error: memoize');
	t.deepEqual(fastTimeCheck({foo:'bar'}),  secondTime, 'Error: memoize');
	t.notEqual(fastTimeCheck({foo:'bar'}),  fastTimeCheck({different: 'result'}), 'Error: memoize');
	t.end();
});*/
    stressTest.delay = function(func, wait) {
        var args = arguments;
        var argsArray = [].concat(_toConsumableArray(args));
        var slicedArgs = argsArray.slice(2);
        setTimeout.apply(undefined, [ func, wait ].concat(_toConsumableArray(slicedArgs)));
    };
    /* ß∂dNß0j1test('this IS NOT GOOING NOW', function (t) {
	t.plan(2);
	let count = 0;
stressTest.delay(() => count++, 50);
setTimeout(() => {	t.equal(count,  0, 'Error: this IS NOT GOOING NOW');
	}, 49);
setTimeout(() => {	t.equal(count,  1 , 'message');
	}, 51);
});*/
    module.exports = stressTest;
}, /* 2 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var stressTest = __webpack_require__(1);
    var newTest = __webpack_require__(0);
} ]);