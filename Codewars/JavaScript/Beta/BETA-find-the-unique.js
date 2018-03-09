/*
/https://www.codewars.com/kata/find-the-unique/javascript

There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'
It’s guaranteed that array contains more than 3 elements. Array may contain anything.

*/

function findUniq(arr) {
  let seen = new Set();
  let seenOnce = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seenOnce.add(arr[i]);
      seen.add(arr[i]);
    } else if (seenOnce.has(arr[i])) {
      seenOnce.delete(arr[i]);
    }
  }
  return seenOnce.values().next().value;
}
