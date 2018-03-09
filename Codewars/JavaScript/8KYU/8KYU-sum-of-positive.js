/*

https://www.codewars.com/kata/sum-of-positive


You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.


*/

const positiveSum = arr => {
  return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
};
