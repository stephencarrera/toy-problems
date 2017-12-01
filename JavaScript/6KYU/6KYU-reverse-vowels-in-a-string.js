/*
https://www.codewars.com/kata/reverse-vowels-in-a-string/

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

*/
function reverseVowels(str) {
  let array = str.split("");
  let vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowels = [];

  for (let i = 0; i < array.length; i++) {
    if (vowelList.includes(array[i])) {
      vowels.push(array[i]);
    }
  }

  vowels = vowels.reverse();

  for (let i = 0; i < array.length; i++) {
    if (vowelList.includes(array[i])) {
      array[i] = vowels.shift();
    }
  }

  return array.join("");
}
