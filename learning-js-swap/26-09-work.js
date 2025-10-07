

// work of >>>> 26/09/2025

// 1. Even or Odd

// Write a program that checks whether a number is even or odd.
// 👉 Practice with both if-else and the ternary operator.

function checkEvenOdd(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(checkEvenOdd(5));

// 2. Positive, Negative, or Zero

// Take a number as input and check whether it is positive, negative, or zero.

let num1 = -10789;
if(num1>0){
    console.log("Positive");
}else if(num1<0){
    console.log("Negative");
}else{
    console.log("Zero");
}

// 3. Largest of Two Numbers

// Write a program to find the larger number between two given numbers.

function largest(n,m){
    if(n>m){
        console.log(n,"is greater")
    }else if(m>n){
        console.log(m,"is greater")
    }else{
        console.log(n,"and",m,"are equal.")
    }
}
console.log(largest(5,8))
console.log(largest(70,30))
console.log(largest(50,50))

// 4. Pass or Fail

// If marks are greater than or equal to 40, print "Pass", otherwise print "Fail".

function Result(marks){
    if(marks>=40){
        return "Pass"
    }else{
        return "Fail"
    }
}

console.log(Result(70));
console.log(Result(40));
console.log(Result(35))

// 5. Age Check

// If a person’s age is 18 or above, print "Eligible to vote", else print "Not eligible".
let age = 20

if(age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to vote.");
}