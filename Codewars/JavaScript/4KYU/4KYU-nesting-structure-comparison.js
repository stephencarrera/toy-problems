/**
https://www.codewars.com/kata/nesting-structure-comparison/train/javascript

Complete the function/method (depending on the language) to return true/True when its 
argument is an array that has the same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared and defined that
returns true if its argument is an array, false otherwise.

*/

Array.prototype.sameStructureAs = function(other) {
  if (Array.isArray(other) && this.length !== other.length) {
    return false;
  } else {
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
        return false;
      }
      if (Array.isArray(this[i]) && Array.isArray(other[i])) {
        return this[i].sameStructureAs(other[i]);
      }
    }
  }
  return true;
};

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
const expect = require('chai').expect;
const assert = require('chai').assert;
require('chai').should();

Test.expect([1, 1].sameStructureAs([2, 2]), '[1,1] same as [2,2]');
Test.expect(
  ![1, [1, 1]].sameStructureAs([2, [2]]),
  '[1,[1,1]] not same as [2,[2]]'
);
Test.expect(![].sameStructureAs(1), '[] not same as 1');
Test.expect(![].sameStructureAs({}), '[] not same as {}');

/*
Interesting solution

Array.prototype.sameStructureAs = function(other) {
  let ret = Array.isArray(other) && other.length === this.length;

  for (let i = 0; ret && i < this.length; ++i) {
    const a = this[i];
    const b = other[i];
    ret =
      Array.isArray(a) == Array.isArray(b) &&
      (!Array.isArray(a) || a.sameStructureAs(b));
  }
  return ret;
};

*/
