//conditional


// if else


// let marks = 10

// if(marks >= 90){
//     console.log("good")
// }else if(marks >= 70){
//     console.log("average")
// }else{
//     console.log("poor")
// }


// function checkgrade2(marks){
//     if(marks >= 90){
//     //   return "good"
//     console.log("good")
//     }else if(marks >= 70){
//         // return "average"
//         console.log("average")
//     }else{
//         // return "poor"
//         console.log("poor")
//     }
// }

// function checkgrade(marks){
//     if(marks >= 90){
//       return "good"
//     // console.log("good")
//     }else if(marks >= 70){
//         return "average"
//         // console.log("average")
//     }else{
//         return "poor"
//         // console.log("poor")
//     }
// }

// // let studenta = 50;

// let output = checkgrade(60);
// let output2 = checkgrade2(90);
// console.log("output come from the check grade",output)
// console.log("the output come form the check grade 2",output2)

// // console.log(checkgrade(studenta))



//nested if else

// function nestedFunction(marks){
//     if(marks >= 90){

//         if(marks >= 95){
//             return "A+"
//         }else{
//             return "A"
//         }

//     }else{
//         return "B"
//     }
// }


// console.log(nestedFunction(95))
// console.log(nestedFunction(90))
// console.log(nestedFunction(70))


//terniry opreators

let temp = 90

// let result = temp >= 102 ? "fever" : "not fever"


function checkFever(temp){
    return temp >= 102 ? "fever" : "not fever"
}

console.log(checkFever(temp))




// 1. Even or Odd

// Write a program that checks whether a number is even or odd.
// 👉 Practice with both if-else and the ternary operator.

// 2. Positive, Negative, or Zero

// Take a number as input and check whether it is positive, negative, or zero.

// 3. Largest of Two Numbers

// Write a program to find the larger number between two given numbers.

// 4. Pass or Fail

// If marks are greater than or equal to 40, print "Pass", otherwise print "Fail".

// 5. Age Check

// If a person’s age is 18 or above, print "Eligible to vote", else print "Not eligible".