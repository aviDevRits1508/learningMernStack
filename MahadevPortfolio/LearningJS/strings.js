//1. Uppercase Conversion
// Take a string "hello world" and print it in uppercase.
let string1 = "hello world";
console.log(string1.toUpperCase());


// 2. Lowercase Conversion
// Take a string "JAVASCRIPT" and print it in lowercase.
let string2 = "JAVASCRIPT";
console.log(string2.toLocaleLowerCase());


// 3. Find Word in Sentence
// Write a function that checks if a given word exists in a sentence (use includes()).
// Example:
// Input → "My name is Avinash", "Avinash"
// Output → true
let sen = "Bengaluru is also as called IT Hub";
let wrd1 = "IT";
console.log(sen.includes(wrd1));


// 4. Find Word Position
// Find the position (index) of "world" in the string "Hello world" using indexOf().
let string3 = "Hello world";
let word = "world";
console.log(string3.indexOf(word));


// 5. Extract Substring
// From "JavaScript", extract and print "Script" using slice().
let lan = "JavaScript";
console.log(lan.slice(4));


// 6. Replace a Word
// Replace "John" with "Avinash" in the string "My name is John"
let Fname = "My name is John";
let wrd = "Avinash";
console.log(Fname.replace("John",wrd));


// 7. Count String Length
// Print the total number of characters in "I love coding" (use .length).
let num = "I love coding";
console.log(num.length);


// 8. Combine Two Strings
// Combine "Hello" and "World" using template literals to get "Hello World".
let first = "Hello";
let second = "World";
let greeting = first + " " + second;
console.log(greeting);

// 9. Check Start or End Word
// Check if a string "Hello JavaScript" starts with "Hello" and ends with "Script".
let string4 = "Hello JavaScript";
console.log(string4.startsWith("Hello"));
console.log(string4.endsWith("Script"));              


// 10. Reverse a String (using loop or methods)
// Write a function that takes "Avinash" and returns "hsanivA".
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// let name = "Avinash";
// console.log(reverseString(name)); //Doubt  //Doubt  //Doubt  //Doubt  //Doubt 

