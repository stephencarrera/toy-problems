// https://www.codewars.com/kata/remove-string-spaces/train/javascript

// Instructions:

//Simple, remove the spaces from the string, then return the resultant string.

// Solution:

function noSpace(x) {
  return x.replace(/\s+/g, "");
}
