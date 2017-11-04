/*

https://www.codewars.com/kata/shortest-word

x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShort = s =>
  Math.min(
    ...s
      .split(" ")
      .filter(Boolean)
      .map(w => w.length)
  );
