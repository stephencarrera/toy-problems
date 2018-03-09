/*
https://www.codewars.com/kata/only-duplicates/train/javascript

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

const onlyDuplicates = str => str
    .split("")
    .filter(char => str.indexOf(char) !== str.lastIndexOf(char))
    .join("");