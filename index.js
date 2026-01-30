// Homework 1: JavaScript Fundamentals
// Name: Anna Belenko
// Date: 1/30/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
  // TODO: Return the sum of all numbers
  // Hint: Use a for loop or arr.reduce()
  return arr.reduce((total, num) => total + num, 0);
}

function average(arr) {
  // TODO: Return the average
  // Hint: Use your sum function!
  return sum(arr) / arr.length;
}

function min(arr) {
  // TODO: Return the smallest number
  // Hint: Use Math.min(...arr)
  return Math.min(...arr);
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
  // "hello" -> "Hello"
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  // TODO: Return the string reversed
  // "hello" -> "olleh"
  // Hint: str.split("").reverse().join("")
  return str.split("").reverse().join("");
}

function countVowels(str) {
  // TODO: Return count of vowels (a, e, i, o, u)
  // "hello" -> 2
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}