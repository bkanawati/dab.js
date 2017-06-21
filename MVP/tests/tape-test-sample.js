const test = require('tape'); 
const mvpDemo = require('C:/Users/Batul/Desktop/dab.js/MVP/src/mvpDemo.js');

test('Negative or Odd', function (t) {
t.equal(mvpDemo.isNegativeOrOdd(1),  true , 'error');
t.equal(mvpDemo.isNegativeOrOdd(10),  false, 'error');
t.notEqual(mvpDemo.isNegativeOrOdd(10),  true, 'error');
t.end();
});

test('Add two numbers correctly', function (t) {
	t.equal(mvpDemo.add(1,2),  3, 'error');
	t.end();
});

test('Multiple numbers', function (t) {
	t.equal(mvpDemo.multiply(1,2),  2, 'error');
	t.end();
});

test('Reverse String', function (t) {
	t.equal(mvpDemo.reverseString('will'),  'lliw', 'error');
	t.notEqual(mvpDemo.reverseString('hello'),  'lliw', 'error');
	t.end();
});
