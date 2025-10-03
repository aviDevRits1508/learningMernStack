
// 1.Write a program that checks whether a number is even or odd.


function checkEvenOdd(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(checkEvenOdd(45));



// 2.Take a number as input and check whether it is positive, negative, or zero.

let num1 = -25;
if(num1>0){
    console.log("Positive");
}else if(num1<0){
    console.log("Negative");
}else{
    console.log("Zero");
}


// 3.Write a program to find the larger number between two given numbers.

function largest(n,m){
    if(n>m){
        console.log(n,"is greater")
    }else if(m>n){
        console.log(m,"is greater")
    }else{
        console.log(n,"and",m,"are equal.")
    }
}
console.log(largest(18,45))
console.log(largest(17,7))
console.log(largest(45,45))


// 4.If marks are greater than or equal to 40, print "Pass", otherwise print "Fail".

function Result(marks){
    if(marks>=40){
        return "Pass"
    }else{
        return "Fail"
    }
}

console.log(Result(98));
console.log(Result(44));
console.log(Result(33))



//5. If a person’s age is 18 or above, print "Eligible to vote", else print "Not eligible".
let age = 25

if(age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to vote.");
}