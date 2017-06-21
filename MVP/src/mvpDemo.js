 /* %Tape */

 const mvpDemo = {};

 mvpDemo.isNegativeOrOdd = function(value) {
   return value < 0 || value % 2 !== 0;
 }
 /* ~Negative or Odd
   ~sNegativeOrOdd(1) equal true | error
   ~isNegativeOrOdd(10) equal false
   ~isNegativeOrOdd(10) notEqual true
*/

 mvpDemo.add = (a, b) => {
  return a + b;
};
/*
  ~ Add two numbers correctly
   ~ add(1,2) equal 3
*/

mvpDemo.multiply = (a, b) => {
  return a * b;
}

/* ~ Multiple numbers
  ~v n = 2; m = 1
  ~   multiply(n,m) equal 2
*/


mvpDemo.reverseString =  function (string) {
   return string.split('').reverse().join('');
 }
/* ~Reverse String
   ~reverseString('will') equal 'lliw'
   ~reverseString('hello') notEqual 'lliw'
*/

// function cloneDeep(value) {
//    var keys = Object.keys(value);
//    var cloned = {};
//    keys.forEach(function(ele,i ){
//        if (typeof value[ele] === 'object'){
//            cloned[ele] = cloneDeep(value[ele]);
//        } else {
//            cloned[ele] = value[ele];
//        }
//    });
//     return cloned;
// }
mvpDemo.cloneDeep = function(value) {

   const keys = Object.keys(value);
    const cloned = {};
    keys.forEach(e => {
      if(typeof value[e]==='object'){
      cloned[e] = cloneDeep(value[e]);
    }else {
      cloned[e] = value[e];
    }
    });
    return cloned;
  }

/*
 ~should return deep copy of object
  ~v const users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      { 'user': 'andy', friends: { 'user': 'alex' } }
    ];
    deepClone = mvpDemo.cloneDeep(users);
    ~deepClone equal users | equal users
    ~deepClone equal users
    ~deepClone[0] deepEqual users[0]
    ~deepClone[0] deepEqual users[0]
    ~deepClone[0].user deepEqual users[0].user
    ~deepClone[2].friends deepEqual users[2].friends
    ~deepClone[2].friends deepEqual users[2].friends | friends equal
  });
*/

mvpDemo.clone = function(value) {
    if (isArray(value)){
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

/*

*/

  module.exports = mvpDemo;
