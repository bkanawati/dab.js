 /* %Tape */

 const mvpDemo = {};

 mvpDemo.isNegativeOrOdd = function(value) {
   return value < 0 || value % 2 !== 0;
 }
 

 mvpDemo.add = (a, b) => {
  return a + b;
};
/*
  ~ Add two numbers correctly
   ~ mvpDemo.add(1,2) equal 3
*/

mvpDemo.multiply = (a, b) => {
  return a * b;
}

/* ~ Multiple numbers
  ~v: let n = 2; let m = 1
  ~   mvpDemo.multiply(n,m) equal 2

*/


mvpDemo.reverseString =  function (string) {
   return string.split('').reverse().join('');
 }
/* ~Reverse String
   ~mvpDemo.reverseString('will') equal 'lliw'
   ~mvpDemo.reverseString('hello') notEqual 'lliw'
*/

mvpDemo.cloneDeep = function(value) {

   const keys = Object.keys(value);
    const cloned = {};
    keys.forEach(e => {
      if(typeof value[e]==='object'){
      cloned[e] = mvpDemo.cloneDeep(value[e]);
    }else {
      cloned[e] = value[e];
    }
    });
    return cloned;
  }

/*
 ~should return deep copy of object
  ~v: const users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      { 'user': 'andy', friends: { 'user': 'alex' } }
    ];
    ~mvpDemo.cloneDeep(users) equal users | equal users
    ~mvpDemo.cloneDeep(users) equal users
    ~mvpDemo.cloneDeep(users)[0] deepEqual users[0]
    ~mvpDemo.cloneDeep(users)[0] deepEqual users[0]
    ~mvpDemo.cloneDeep(users)[0].user deepEqual users[0].user
    ~mvpDemo.cloneDeep(users)[2].friends deepEqual users[2].friends
    ~mvpDemo.cloneDeep(users)[2].friends deepEqual users[2].friends | friends equal
  });
*/

mvpDemo.clone = function(value) {
    if (Array.isArray(value)){
        return value.map(function(ele, i) {
            return ele;
        });
    }
    else {
        var obj = {};
        for (var key in value){
            obj[key] = value[key];
        }
        return obj;
    }
}

/*~ should clone my stuff
~v: var arr = [1,2,4,5];
let obj = {"a": "b", "hello": "hi"};
~ mvpDemo.clone(arr) deepEqual [1,2,4,5]
~ mvpDemo.clone(obj) deepEqual {"l":2}
*/

mvpDemo.memoize = function(func) {
  const cache = {};
  return (...params) => {
    const args = params.map(e => JSON.stringify(e)); // allows us to use it on objects containing objects
    if (cache[args]) return cache[args];
    else {
      cache[args] = func(...params);
      return cache[args];
    }
  };
}
/*
  ~ memoize
  ~v: let fib, fastFib, timeCheck, fastTimeCheck, add, fastAdd, wait
        fib = (n) => (n < 2) ? n : fib(n - 1) + fib(n - 2);
        fastFib = mvpDemo.memoize(fib);
        timeCheck = (str) => str + Date.now();
        fastTimeCheck = mvpDemo.memoize(timeCheck);
        add = (a, b, c) => a + b + c;
        fastAdd = mvpDemo.memoize(add);

    // Synchronous sleep: terrible for web development, awesome for testing memoize
        wait = (t) => {
          const start = Date.now();
          while ((Date.now() - start) < t) 'wait';
        };

            let firstTime = timeCheck('shazaam!');
                wait(5);
            let secondTime = fastTimeCheck('shazaam!');
                wait(5);

 ~ fib(10) equal 55
  ~ fastFib(10) equal 55
  ~ fastFib(10) notEqual fastFib(7)
  ~ firstTime notEqual secondTime
  ~ fastTimeCheck('shazaam!') equal secondTime
  ~ add(10,5,4) equal 19 | should accept multiple args
  ~ fastAdd(10, 5, 4) equal 19 | should accept multiple args

 ~v: firstTime = timeCheck({ foo: 'bar' });
    wait(5);
     secondTime = fastTimeCheck({ foo: 'bar' });
    wait(5);

 ~ firstTime notEqual secondTime
  ~ fastTimeCheck({foo:'bar'}) deepEqual secondTime
  ~ fastTimeCheck({foo:'bar'}) notEqual fastTimeCheck({different: 'result'})

*/
  module.exports = mvpDemo;
