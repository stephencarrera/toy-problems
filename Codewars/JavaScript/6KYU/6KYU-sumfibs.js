/*
https://www.codewars.com/kata/sumfibs/train/javascript

Create a function that takes an argument n and sums even fibonacci numbers 
upto n's index in the fibonacci sequence.

Example:

sumFibs(5) === 2. (0, 1, 1, 2, 3, 5); 2 is the only number in the sequence 
and doesn't have another number in the sequence to get added to in the indexed 
fibbonacci sequence.

Example:

sumFibs(9) === 44. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34); 
2 + 8 + 34 = 44;

*/

function sumFibs(pos) {
  if (pos < 2) {
    return 0;
  }
  let sLast = 0;
  let last = 1;
  let currPos = 2;
  let evenSum = 0;

  while (currPos <= pos) {
    let temp = last;
    last = last + sLast;
    sLast = temp;
    if (last % 2 === 0) {
      evenSum += last;
    }
    currPos++;
  }
  return evenSum;
}

// Using Destructuring:

function sumFibs(pos) {
  let [sLast, last] = [0, 1];
  let evenSum = 0;
  let currPos = 2;
  while (currPos <= pos) {
    [sLast, last] = [last, sLast + last];
    if (last % 2 === 0) {
      evenSum += last;
    }
    currPos++;
  }
  return evenSum;
}
