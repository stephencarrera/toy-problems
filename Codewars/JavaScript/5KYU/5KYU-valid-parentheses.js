/*
https://www.codewars.com/kata/valid-parentheses/train/javascript

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= input.length <= 100

*/

function validParentheses(str) {
  const matches = {
    ")": "("
  };
  const stack = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") stack.push(str[i]);
    else if (stack[stack.length - 1] === matches[str[i]]) stack.pop();
    else return false;
  }
  return stack.length === 0;
}
