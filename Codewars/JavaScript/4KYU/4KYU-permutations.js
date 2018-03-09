/*
https://www.codewars.com/kata/permutations/javascript

In this kata you have to create all permutations of an input string and remove 
duplicates, if present. This means, you have to shuffle all letters from the 
input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(string) {
    const uniques = new Set();
    function helper(base, letters) {
        if (base.length === string.length) {
            uniques.add(base);
        } else {
            for (let i = 0; i < letters.length; i++) {
                helper(
                    base + letters[i],
                    letters.substring(0, i) + letters.substring(i + 1)
                );
            }
        }
    }
    helper('', string);
    return Array.from(uniques);
}
