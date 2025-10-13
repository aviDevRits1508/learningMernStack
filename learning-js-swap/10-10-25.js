// Uppercase Conversion
// Take a string "hello world" and print it in uppercase.

let str= "hello!! this is for upper case";

console.log(str.toUpperCase());

// Lowercase Conversion
// Take a string "JAVASCRIPT" and print it in lowercase.

let str2="THis IS for LOWER CASE."

console.log(str2.toLowerCase());

// Find Word in Sentence
// Write a function that checks if a given word exists in a sentence (use includes()).
// Example:
// Input → "My name is Avinash", "Avifvnash"
// Output → true

let text4="My name is Avinash";

console.log(text4.includes("is"));
console.log(text4.includes("Avifvnash"));

// Find Word Position
// Find the position (index) of "world" in the string "Hello world" using indexOf().

let text2 ="Today's day is beautiful.";

console.log(text2.indexOf("day"));
console.log(text2.indexOf("cool"));
console.log(text2.indexOf("Today"))

// Extract Substring
// From "JavaScript", extract and print "Script" using slice().

let text5="javascript";

console.log(text5.slice(4,10))

// Replace a Word
// Replace "John" with "Avinash" in the string "My name is John".

let text6 ="My name is john."
let newName= text6.replace("john", "avinash");

console.log(newName);

// Count String Length
// Print the total number of characters in "I love coding" (use .length).

let text7 = "I Love Coding."

console.log(text7.length);

// Combine Two Strings
// Combine "Hello" and "World" using template literals to get "Hello World".

let h1 = "Hello";
let h2 = "world";

console.log(`${h1} ${h2}`);

// Check Start or End Word
// Check if a string "Hello JavaScript" starts with "Hello" and ends with "Script".


// Reverse a String (using loop or methods)
// Write a function that takes "Avinash" and returns "hsanivA".
//split("") → turns the string into an array of characters
// "Avinash" → ["A", "v", "i", "n", "a", "s", "h"]
// reverse() → reverses the array
// ["h", "s", "a", "n", "i", "v", "A"]
// join("") → joins them back into a string

function reverseStr(text8){
    console.log(text8.split("").reverse().join(""));
}

console.log(reverseStr("Swapnita"));