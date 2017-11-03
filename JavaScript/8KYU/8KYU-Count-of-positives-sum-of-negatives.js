/*

https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives

Instructions:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!

The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].


Solution:

*/

const countPositivesSumNegatives = input => {
  return !input || !input.length
    ? []
    : [
        input.reduce((count, pos) => (pos > 0 ? count + 1 : count), 0),
        input.reduce((sum, neg) => (neg < 0 ? sum + neg : sum), 0)
      ];
};
