

// types of function
//1. named function
//2. anonymous function
//3. arrow function
//4. self invoking function
//5. IIFE
//6 constructor function



//named function 

// greet()


// function greet () {
//     console.log("hello world")
// }

//function expression

// console.log(tellmrname())

// let tellmrname = function () {
//     return "Avinash"
// }

// let arr = [ 50, 75, 81, 100]

// let retrunEven = function (arr) {
//     let even = []
//     let odd = []
//     arr.forEach(element => {
//         if(element % 2 == 0){
//             even.push(element)
//         }else{
//             odd.push(element)
//         }
//     });
//     return {
//         even,
//         odd
//     }
// }

// console.log(retrunEven(arr))


// function giveEve (arr){
//     let even = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             even.push(arr[i])
//         }
//     }
//     return even
// }

// console.log(giveEve(arr))


//arrow function

// let greet = () => {
//     console.log("hello world")
// }

// greet()

// let tellName = () => {
//     console.log("Avinash")
// }


// tellName()

// let adda = (a, b) => a + b;
// console.log(adda(5, 6))


// function addn(a, b) {
//     return a + b
// }

// console.log(addn(5, 6))

// let arr = [ 50, 75, 81, 100]

// let double = (arr) => arr.map((a) => a * 2).double.filter((a) => a > 100)   



// console.log(double)

// function ndouble(arr){
//     let double = []
//     for(let i = 0; i < arr.length; i++){
//         // double.push(arr[i] * 2)

//         if(arr[i] * 2 > 100){
//             double.push(arr[i] * 2)
//         }

//     }
//     return double
// }
// console.log(ndouble(arr))




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