// ------question1-------
function condition(a){
    if (a%2==0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(condition(5))
console.log(condition(8))
// ------ternary operator (1)-----
function condition(a){
  return a%2==0 ? "even" : "odd"
}
console.log(condition(5))


// ------question2------
function condition1(number){
    if (number>0) {
     return  "positive"

     } else if (number<0){
           return "negative"

    } else {
        return "zero"
    }
}
console.log(condition1(6))
console.log(condition1(-7))
// -----ternary operator (2)-------
function condition1(number){
    return number>0 ? "positive": (number<0) ? "negative" : "zero"
}
console.log(condition1(6))


// -------question 3-------
function condition2(x,y){
    if (x>y) {
        return " x is smaller"
    } else if (x<y) {
        return " y is larger"   
    } else {
        return "no larger "
    }
}
 console.log(condition2(6,12))
// --------ternary operator (3)------
function condition2(x,y){
    return x>y ? "x is smaller" : (x<y) ? "y is larger" : "no larger";
}
console.log(condition2(6,12))


// -------question4-----
function condition3(marks){
    if (marks>=40) {
        return "pass"
    } else {
        return "fail"
    }
}
console.log(condition3(95))
// -----ternary operator (4)-----
function condition3(marks){
     return marks>=40 ? "pass" : "fail";
}
console.log(condition3(95))


// ----question 5------
function condition4(age){
    if (age>=18) {
        return "eligible to vote"
    } else {
        return "not eligible"
    }
}
console.log(condition4(55))
console.log(condition4(16))
// ------ternary operator (5)-----
function condition4(age){
    return age>=18 ? "eligible to vote" : "not eligible"
}
console.log(condition4(55))