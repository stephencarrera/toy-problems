/*
Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

function snail(array) {
  let snailPath = [];

  if (array.length === 0) {
    return snailPath;
  }

  snailPath = snailPath.concat(array.shift());

  for (let i = 0; i < array.length; i++) {
    snailPath.push(array[i].pop());
  }

  snailPath = snailPath.concat((array.pop() || []).reverse());

  for (let i = array.length - 1; i >= 0; i--) {
    snailPath.push(array[i].shift());
  }

  snailPath = snailPath.concat(snail(array));

  return snailPath;
}
