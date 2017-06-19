const operations = {};

operations.add = (a, b) => {
  return a + b;
};

operations.multiply = (a, b) => {
  return a * b;
}

/* %Tape */

 const mvpDemo = {};

 /* ~Negative or Odd
   ~v arr = [1,2,3,4];
   arr = {hello: 'world'};       -> spacing is off
   ~mvpDemo.isNegativeOrOdd(1) equal true
   ~mvpDemo.isNegativeOrOdd(10) equal false
   ~mvpDemo.isNegativeOrOdd(10) notEqual true
*/

 mvpDemo.isNegativeOrOdd = function(value) {
   return value < 0 || value % 2 !== 0;
 }

/* ~Reverse String
   ~mvpDemo.reverseString('will') equal 'lliw'
   ~mvpDemo.reverseString('hello') notEqual 'lliw'
*/

mvpDemo.reverseString =  function (string) {
   return string.split('').reverse().join('');
 }

module.exports = mvpDemo;

module.exports = operations;
