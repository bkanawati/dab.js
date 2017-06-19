const test = require( 'tape' ); 
const mvpDemo = require('/Users/jordan/Documents/codesmith-master/senior-project/dab.js/MVP/src/mvpDemo.js');

test('Negative or Odd', function (t) {
  t.equal(mvpDemo.isNegativeOrOdd(1),  true   , 'error');
  t.equal(mvpDemo.isNegativeOrOdd(10),  false, 'errorr');
  t.notEqual(mvpDemo.isNegativeOrOdd(10),  true, 'errorr');
  t.end();
});

test('Add two numbers correctly', function (t) {
   t.equal(mvpDemo.add(1,2),  3 , 'errorr');
   t.end();
});

test('Multiple numbers', function (t) {
   t.equal(mvpDemo.multiply(1,2),  2, 'errorr');
   t.end();
});

test('Reverse String', function (t) {
   t.equal(mvpDemo.reverseString('will'),  'lliw', 'errorr');
   t.notEqual(mvpDemo.reverseString('hello'),  'lliw', 'errorr');
   t.end();
});

test('Reverse Object', function (t) {
  let obj={a:1,b:"c",d:4};
   t.equal(mvpDemo.reverseObject(obj),  {1:a,c:"b",4:"d"}, 'errorr');
  t.notEqual(mvpDemo.reverseObject(obj),  {a:1,b:"c",d:4}, 'errorr');
  t.end();
});
