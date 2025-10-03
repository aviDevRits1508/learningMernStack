// 1. Even or Odd

// Write a program that checks whether a number is even or odd.
// 👉 Practice with both if-else and the ternary operator.

// using if-else
function iseven(a) {
    if (a % 2 == 0)
        return "Even Number"
    else if (a % 2 == 1)
        return "odd Number"
    else {
        return "not a even or not a odd"
    }
}
console.log(iseven(4))

// using turnery 

let a = 10

function isodd(a) {
    return a % 2 == 1 ? "odd" : "Even"
}
console.log(isodd(a))

// 2. Positive, Negative, or Zero

// Take a number as input and check whether it is positive, negative, or zero.

//  using if else
function ispositive(b) {
    if (b > 0)
        return "positive"
    else if (b < 0)
        return "negetive"
    else {
        return "zero"
    }
}
console.log(ispositive(3))

// using turnery

let b = 0

function isnegetive(b) {
    return b < 0 ? "negetive" : "positive"
}
console.log(isnegetive(b))

// 3. Largest of Two Numbers

// Write a program to find the larger number between two given numbers.

// using else if

function larger(c, d) {
    if (c > d)
        return c
    else if (d > c)
        return c
    else {
        return " both are equal"
    }

}
console.log (larger(5, 6))

// using turnery:

let c=10
let d=11

function smaller(c,d){
    return (c<d) ? c : d
}
console.log(smaller(c,d))
// 4. Pass or Fail

// If marks are greater than or equal to 40, print "Pass", otherwise print "Fail".


// using else if

function pass(a){
    if (a>=85)
        return "distingtion"
    else if(a>=40)
        return "pass"
    else{
        return "fail"
    }
}
console.log(pass(43))

// using ternery

let e=30

function fail(e){
    return (e<40) ? "fail" : "pass"
}
console.log(fail(e))

// 5. Age Check

// If a person’s age is 18 or above, print "Eligible to vote", else print "Not eligible".

// using Else if

function eligible(age){
    if (age>=18)
        return "YOU CAN VOTE"
    else if (age<=18)
        return "YOU ARE NOT ABLE TO VOTE"
    else{
        return "VOTER ID APPLICATION IS UNDER PROCESS"
    }
}
console.log(eligible(20))

// using turnery

let age=17

function noteligible(age){
    return (age<18) ? "Can't Vote" : "Can VOte"
}
console.log(noteligible(age))


// switch

let z=2

function even(z){
    switch(z){
        case(z%2==0):
            console.log("even")
            break;
        case(z%2==1):
            console.log("odd")
            break;
        default:
            console.log("natural")   
    }
}
even(z)


