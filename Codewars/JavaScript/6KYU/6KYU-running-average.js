/*
https://www.codewars.com/kata/running-average/javascript

Javascript // Lua:

Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;
*/

function runningAverage() {
  let counter = 1;
  let sum = 0;
  return value => {
    sum = value + sum;
    return Number((sum / counter++).toFixed(2));
  };
}
