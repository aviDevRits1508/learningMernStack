// uppercse

let a = "hello World";
console.log(a.toUpperCase());

//lower case

let b = "JAVASCRIPT";
console.log(b.toLowerCase());

//find a word in sentence

let str = "my name is Aishwarya";
let word="Aishwarya"
console.log(str.includes("Aishwarya"))

// find word podsition

let sentence = "hello world";
console.log(sentence.indexOf("world"))

//extract substring

let text = "JavaScript";
console.log(text.slice(4))

//replace a word

let string = "my name is john";
console.log(string.replace("john", "Avinash"))

//count string length

let count = "i love coding";
console.log(count.length)

//combine two string

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat("World"))

//check start or end word

let c = "Hello JavaScript"
console.log(c.substring(0, 5))
console.log(c.substring(10))

//reverse a string

let d = "Avinash";
console.log(d.split("").reverse().join(''))
