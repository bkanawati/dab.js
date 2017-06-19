const operations = {};

operations.add = (a, b) => {
  return a + b;
};

operations.multiply = (a, b) => {
  return a * b;
}

/* %Tape */

/* ~>add: add two numbers correctly
   ~>operations.add(1,2) equal 3
   */

/* ~dab(Multiply numbers, equal(operations.multiply(1|2), 3, Multiply numbers));
*/

/* ~dab(adds numbers,
  ~const two = 2;
  ~const zero = 0;
  ~equal(operations.add(1, 2), two);
  ~equal(operations.add(3, 4), 7);
  ~notEqual(operations.add(3, 4), zero);
)
*/

/* ~> Multiply numbers
  ~> inp1 = 1, inp2 = 2
  ~> operations.multiply(inp1,inp2) equal 3 : Multiple numbers
*/

//  change ~ > symbol? maybe \. ?
//  change ~ > > double arrow
//  equal(func), expected vs func() equal expected
// separator vs |

tape('Add - adds numbers', function(t) {
  const two = 2;
  const zero = 0;
  t.equal(numbers.add(1, 2), two); // should fail
  t.equal(numbers.add(3, 4), 7);
  t.notEqual(numbers.add(3, 4), zero);
  t.end();
});

// dab hello

module.exports = operations;
