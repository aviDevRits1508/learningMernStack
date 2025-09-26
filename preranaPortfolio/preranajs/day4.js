// 1. Even or Odd
function Num(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(Num(20)) 
console.log(Num(23)) 
console.log(Num(5))

// by ternary operator
function Num(number) {
    return (number % 2 === 0) ? "even" : "odd";
}

console.log(Num(10));  
console.log(Num(7));

// 2. Positive, Negative, or Zero
function checkNum(num){
    if(num>0){
        return "Positive"
    }else if(num<0){
        return "Negative"
    }else{
        return "Zero"
    }
}
console.log(checkNum(9))
console.log(checkNum(-9))
console.log(checkNum(0))

// by ternary operator
function checkNumber(n) {
    return (n > 0) ? "positive"  : (n < 0) ? "negative"  : "zero"
}

console.log(checkNumber(10));   
console.log(checkNumber(-5));  
console.log(checkNumber(0));



// 3. Largest of Two Numbers
function compareNum(a,b){
    if(a>b){
        return "a is largest"
    }else{
        return "b is largest"
    }
}
console.log(compareNum(2,7))
console.log(compareNum(9,2))
console.log(compareNum(1,9))

// by ternary operator
function compareNum2(a, b) {
    return (a > b) ? a : b;
}

console.log(compareNum2(10, 20));  
console.log(compareNum2(30, 15));  



// 4. Pass or Fail
function marks(m1){
    if(m1>=40){
        return "Pass"
    }else{
        return "Fail"
    }
}
console.log(marks(20))
console.log(marks(93))
console.log(marks(40))

// by ternary operator
function checkResult(marks) {
    return (marks >= 40) ? "Pass" : "Fail";
}

console.log(checkResult(75));  
console.log(checkResult(32));


// 5. Age Check
function ageCheck(age){
    if(age>=18){
        return "Eligible to vote"
    }else if(0<age){
        return "Not Eligible "
    }else{
        return "Not a valid age"
    }
}
console.log(ageCheck(9))
console.log(ageCheck(19))
console.log(ageCheck(-99))

// by ternary operator
function ageCheck2(age) {
    return (age >= 18) ? "Eligible to vote" : "Not eligible";
}

console.log(ageCheck2(20)); 
console.log(ageCheck2(16));