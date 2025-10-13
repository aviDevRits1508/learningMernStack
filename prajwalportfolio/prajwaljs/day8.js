// 1. Uppercase Conversion
let str1 = "hello world";
console.log("Uppercase:", str1.toUpperCase());

// 2. Lowercase Conversion
let str2 = "HELLO WORLD";
console.log("Lowercase:", str2.toLowerCase());

// 3. Find Word in Sentence
str1="my name is prajwal"
console.log(str1.includes("prajwal"))

// 4. Find Word Position
let sentence1 = "Hello world";
console.log("Position of 'world':", sentence1.indexOf("world")); 

// 5. Extract Substring
let lang = "JavaScript";
console.log("Extracted Substring:", lang.slice(4));
function slice(a){
    console.log(a.slice(4,10))
}
slice("javascript")

// 6. Replace a Word
let nameStr = "My name is John";
console.log("After Replace:", nameStr.replace("John", "Prajwal"));

// 7. Count String Length
let message = "I love coding";
console.log("Length:", message.length);

// 8. Combine Two Strings
let str3 = "Hello";
let str4 = "World";
console.log("Combined:",str3.concat(" ",str4));

// 9. Check Start or End Word
let str5 = "Hello JavaScript";
console.log("Starts with 'Hello':", str5.slice(0,5));
console.log("Ends with 'Script':", str5.slice(10,16));

// 10. Reverse a String
function reverseString(str) {
   console.log(str.split("").reverse().join(""));
}
reverseString("Prajwal")

