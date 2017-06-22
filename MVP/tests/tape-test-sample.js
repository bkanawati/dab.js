const test = require('tape'); 
const mvpDemo = require('C:/Users/Batul/Desktop/dab.js/MVP/src/mvpDemo.js');

test('Add two numbers correctly', function (t) {
	t.equal(mvpDemo.add(1,2),  3, 'Error: Add two numbers correctly');
	t.end();
});

test('Multiple numbers', function (t) {
	let n = 2; let m = 1
	t.equal(mvpDemo.multiply(n,m),  2, 'Error: Multiple numbers');
	t.end();
});

test('Reverse String', function (t) {
	t.equal(mvpDemo.reverseString('will'),  'lliw', 'Error: Reverse String');
	t.notEqual(mvpDemo.reverseString('hello'),  'lliw', 'Error: Reverse String');
	t.end();
});

test('should return deep copy of object', function (t) {
	const users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      { 'user': 'andy', friends: { 'user': 'alex' } }
    ];
	t.equal(mvpDemo.cloneDeep(users),  users , 'equal users');
	t.equal(mvpDemo.cloneDeep(users),  users, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.cloneDeep(users)[0],  users[0], 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.cloneDeep(users)[0],  users[0], 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.cloneDeep(users)[0].user,  users[0].user, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.cloneDeep(users)[2].friends,  users[2].friends, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.cloneDeep(users)[2].friends,  users[2].friends , 'friends equal');
	t.end();
});

test('should clone my stuff', function (t) {
	var arr = [1,2,4,5];
let obj = {"a": "b", "hello": "hi"};
	t.deepEqual(mvpDemo.clone(arr),  [1,2,4,5], 'Error: should clone my stuff');
	t.deepEqual(mvpDemo.clone(obj),  {"l":2}, 'Error: should clone my stuff');
	t.end();
});

test('memoize', function (t) {
	let fib, fastFib, timeCheck, fastTimeCheck, add, fastAdd, wait
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
});
