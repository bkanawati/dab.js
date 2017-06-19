 /* %Tape */
 
 const mvpDemo = {}; 

 mvpDemo.isNegativeOrOdd = function(value) {
   return value < 0 || value % 2 !== 0;
 }
 /* ~Negative or Odd
   ~mvpDemo.isNegativeOrOdd(1) equal true   |  error
   ~mvpDemo.isNegativeOrOdd(10) equal false
   ~mvpDemo.isNegativeOrOdd(10) notEqual true
*/

 mvpDemo.add = (a, b) => {
  return a + b;
};
/*
  ~Add two numbers correctly
   ~mvpDemo.add(1,2) equal 3 
*/

mvpDemo.multiply = (a, b) => {
  return a * b;
}

/* ~Multiple numbers
  ~mvpDemo.multiply(1,2) equal 2
*/


mvpDemo.reverseString =  function (string) {
   return string.split('').reverse().join('');
 }
/* ~Reverse String
   ~mvpDemo.reverseString('will') equal 'lliw'
   ~mvpDemo.reverseString('hello') notEqual 'lliw'
*/


  mvpDemo.reverseObject = function (object) {
   var output = {};
   for(var prop in object){
     output[object[prop]] = prop;
   }
   return output;
 }

 /* ~Reverse Object
   ~v obj = {a:1,b:"c",d:4}
   ~mvpDemo.reverseObject(obj) equal {1:a,c:"b",4:"d"}
   ~mvpDemo.reverseObject(obj) notEqual {a:1,b:"c",d:4}
*/

  module.exports = mvpDemo; 