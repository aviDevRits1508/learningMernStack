// 1. Even or Odd Checker
// Write a function called checkEvenOrOdd that takes a number as a parameter and prints whether it's even or odd
// function checkEvenOrOdd(a) {
//     if (a % 2 == 0) {
//         console.log("a is : Even");
//     }
//     else {
//         console.log("b is : Odd");
//     }
// }
// checkEvenOrOdd(10);
// checkEvenOrOdd(9);


/*2. Greet User with Time of Day
Create a function named greetUser that takes a username and hour (number from 0–23).
Print:
"Good morning, [username]!" if hour < 12
"Good afternoon, [username]!" if hour is between 12–17
"Good evening, [username]!" if hour >= 18*/

// function greetUser(Mahadev, Hour) {
//     if (Hour <  5) {
//         console.log("Good Morning", Mahadev);
//     }

//     else if (Hour > 12 && Hour < 17){
//         console.log("Good After", Mahadev);
//     }

//     else if (Hour = 18 && Hour < 22) {
//         console.log("Good Evening" , Mahadev)
//     }
// }
// greetUser("Mahadev" , 18);

/*3.Multiply Two Numbers
Write a function multiply that takes two numbers as parameters and returns their product.
Call it with different numbers and print the result.*/

// function multiply (c,d) {
//     console.log(c * d);
// }
// multiply(5 , 5);
// multiply(9 , 5);

/*4. Age Eligibility Checker
Create a function isEligibleToVote that takes name and age as parameters.
Print whether the person is eligible to vote (age 18 or older).*/
// function isEligibleToVote (name , age){
//     if (age < 18){
//         console.log("Age is Not Eligible:", age);
//     }

//     else 
//     console.log("Age is Eligible:", age);
// }
// isEligibleToVote("name",12);
// isEligibleToVote("name", 12);

/*5. Find the Largest Number
Write a function findLargest that takes three numbers and prints which one is the largest.*/
/*function findLargest (e, f) {
    if (e > f ){
        console.log("This is the largest number", e);
    }

    else {
        console.log("This is the largest number", f)
    }
}
findLargest (14, 10);


function findlargest (a,b,c){
    if (a >= b && a >= c){
        console.log("This is the largest number:", a);
    }

    else if (b >= a && b >= c) {
        console.log("This is the largest number:", b);
    }

    else {
        console.log("This is the largest number:", c);
    }
}

findlargest(10, 20, 30);
findlargest(20, 30, 50);
findlargest(20, 40, 27);*/

// Positive, Negative, or Zero
// Write a program that checks if a number is positive, negative, or zero.
/*function num(a,b,c){
    if (a > b) {
        console.log("The number is positive", a);
    }

    else if ( a < b){
        console.log("The number is negative", b);
    }

    else {
        console.log("The number is zero");
    }
}
num(12, 3, 5);  
//  Note: Else cannot have a condition

// Write a function that checks if a student has passed or failed (pass mark = 40)
function student(marks){
    if (marks >= 40) {
        console.log("The student is: Pass");
    }

    else {
        console.log("The student is: Fail");
    }
}

student(40);
student(35);*/

// Write a function that checks if a number is divisible by 5 and 11.
/*function div(num) {
    if (num % 5 == 0 && num % 11 == 0){
        console.log("It is divisible by 5 and 11", num);
    }

    else {
        console.log("It is not divisible by 5 and 11", num);
    }
}

div(100);
div(900);
div(23);
div(55);
div(110); */

// Write a function that checks if a given year is a leap year.
//  function leapYear(a){
//     if (a >= 365){
//         console.log("It is a Leap Year");
//     }

//     else {
//         console.log("It's not a Leap Year");
//     }
// }

// leapYear(2004);
// leapYear(1999);  // I have solved the problem // But i did't get this properly 

// Write a function that checks a simple login (username and password).
/*function login(username , password) {
    if (username === "admin" && password === "1234") {
        console.log("Login Successful");
    }
    else {
        console.log("Try again");
    }
}

login("Mahadev" , "1234");
login("admin", "1234");*/

// Write a function that checks whether a number is prime or not.
// function num (n) {
//     if (n <= 1) {
//         console.log("This is a Prime number");
//     }

//     else if (n >= 0) {
//         console.log("This is a Composite number");
// }
// }

// num(100);
// num(85);
// num(23);

function table (three) {
    console.log(3*1);
}
