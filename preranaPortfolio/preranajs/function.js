// 💡 Question 1 — Greeting Message

// Goal:
// Write a function that prints "Hello, <name>!" to the console.
// Use a named function.

// Input:

// greet("Avinash")


// Expected Output:

// Hello, Avinash!


// 👉 Hint: Use a console.log() statement inside your function.

// 💡 Question 2 — Square a Number

// Goal:
// Create a function expression that takes a number and returns its square.

// Input:

// console.log(square(5))


// Expected Output:

// 25


// 👉 Hint: Use let square = function(num) { ... }

// 💡 Question 3 — Find Even Numbers

// Goal:
// Write an arrow function that takes an array of numbers and returns only even numbers.

// Input:

// console.log(findEvens([10, 15, 22, 33, 40]))


// Expected Output:

// [10, 22, 40]


// 👉 Hint: You can use .filter() inside your arrow function.

// 💡 Question 4 — Add Two Numbers

// Goal:
// Write a named function that adds two numbers and returns the result.

// Input:

// console.log(add(7, 8))


// Expected Output:

// 15


// 👉 Hint: Return the sum inside the function.

// 💡 Question 5 — Count Words in a Sentence

// Goal:
// Write a function expression that counts how many words are in a given sentence.

// Input:

// console.log(countWords("I love learning JavaScript"))


// Expected Output:

// 4


// 👉 Hint: Use .split(" ") to turn the sentence into an array.


// Write a function that prints "Hello, <name>!" to the console.
// Use a named function.
function greet(Name){
    console.log("Hello",Name)
}
greet("Prerana")

// Goal:
// Create a function expression that takes a number and returns its square.
function square(n){
    console.log(n**2)
}
square(5)

// Write an arrow function that takes an array of numbers and returns only even numbers.
const findEvens = (numbers) => {
  return numbers.filter(num => num % 2 === 0);
}
console.log(findEvens([10, 15, 22, 33, 40])); 

// Write a named function that adds two numbers and returns the result.
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
let result = addTwoNumbers(5, 10);
console.log(result);

// Write a function expression that counts how many words are in a given sentence.
const countWords = function(sentence) {
  const words = sentence.split(" ");
  return words.length;
}
console.log(countWords("I love learning JavaScript and python"))
