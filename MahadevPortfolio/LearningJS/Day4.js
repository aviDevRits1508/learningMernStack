// 1. Even or Odd

// Write a program that checks whether a number is even or odd.
// 👉 Practice with both if-else and the ternary operator.

let num = 7;

if (num % 2 === 0) {
    console.log(num , " is Even");
} else {
    console.log(num , " is Odd");
}


let number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(number + " is " + result);


// 2. Positive, Negative, or Zero

// Take a number as input and check whether it is positive, negative, or zero.

let num1 = -5;

if (num1 > 0) {
    console.log(num1 , " is Positive");
} else if (num1 < 0) {
    console.log(num1 , " is Negative");
} else {
    console.log("The number is Zero");
}

let number1 = 0;

let res = (number1 > 0) ? "Positive" 
            : (number1 < 0) ? "Negative" 
            : "Zero";

console.log(number1 , " is " , res);

// 3. Largest of Two Numbers

// Write a program to find the larger number between two given numbers.

// If, else-if, else

let a  = 10;
let b = 10;
if (a > b)
    {
        console.log(a , "is Larger");
}
else if(a < b)
{
    console.log(b , "is Larger");
}
else{
    console.log("Wrong number");
}

// If, else-if, else
let c  = 10;
let d = 20;
if (c > d)
    {
        console.log(c , "is Larger");
}
else if(c < d)
{
    console.log(d , "is Larger");
}
else{
    console.log("Wrong number");
}



// 4. Pass or Fail
// If marks are greater than or equal to 40, print "Pass", otherwise print "Fail".
// Turnery
let e = 36;
let marks = (e > 35) ? "Pass" : (e < 35) ? "Fail": "Not attempted";
console.log(e, "is" ,marks);
// If, else-if, else
let f = 45;
let g = 35;
if (f > g) {
    console.log("Pass");
}
else if (f > g){
    console.log("Fail");
}
else {
    console.log("Not attempted");
}

// Age Check
// If a person’s age is 18 or above, print "Eligible to vote", else print "Not eligible".
// Turnery
let age = 18;
let age1 = (age > 18) ? "Elifible to vote" : (age < 18) ? "Not eligible to vote": "Exactly 18, Eligible to vote";
console.log(age1, "is" , age);

// If, else-if, else
let age2 = 18;
let age3 = 20;
if (age2 > age3) {
    console.log("Not Eligible")
}

else if (age2 < age3) {
    console.log("Eligible")
}

else {
    console.log("Exactly 18, Eligible to vote");
}


