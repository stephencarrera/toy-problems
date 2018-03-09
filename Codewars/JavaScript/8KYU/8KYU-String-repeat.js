// https://www.codewars.com/kata/string-repeat

/* Instructions:

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


Solution:
*/

function repeatStr(n, s) {
  return s.repeat(n);
}
