const test = require('tape'); 
const mvpDemo = require('C:/Users/Batul/Desktop/dab.js/MVP/src/mvpDemo.js');

test('Negative or Odd', function (t) {
t.equal(mvpDemo.sNegativeOrOdd(1),  true , 'error');
t.equal(mvpDemo.isNegativeOrOdd(10),  false, 'Error: Negative or Odd');
t.notEqual(mvpDemo.isNegativeOrOdd(10),  true, 'Error: Negative or Odd');
t.end();
});

test('Add two numbers correctly', function (t) {
	t.equal(mvpDemo.add(1,2),  3, 'Error: Add two numbers correctly');
	t.end();
});

test('Multiple numbers', function (t) {
	let n = 2;
	let m = 1;

	t.equal(mvpDemo.multiply(n,m),  2, 'Error: Multiple numbers');
	t.end();
});

test('Reverse String', function (t) {
	t.equal(mvpDemo.reverseString('will'),  'lliw', 'Error: Reverse String');
	t.notEqual(mvpDemo.reverseString('hello'),  'lliw', 'Error: Reverse String');
	t.end();
});

test('should return deep copy of object', function (t) {
	const users = [ { 'user': 'barney' }, { 'user': 'fred' }, { 'user': 'andy', friends: { 'user': 'alex' } } ];
	let deepClone = mvpDemo.cloneDeep(users);

	t.equal(mvpDemo.deepClone,  users , 'equal users');
	t.equal(mvpDemo.deepClone,  users, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.deepClone[0],  users[0], 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.deepClone[0],  users[0], 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.deepClone[0].user,  users[0].user, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.deepClone[2].friends,  users[2].friends, 'Error: should return deep copy of object');
	t.deepEqual(mvpDemo.deepClone[2].friends,  users[2].friends , 'friends equal');
	t.end();
});
