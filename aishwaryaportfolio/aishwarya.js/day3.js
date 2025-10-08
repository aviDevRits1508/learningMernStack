
/* Even or Odd*/
function EvenorOdd(num){
if (num%2 == 0) {
    console.log(num, "is Even");
}
else {
    console.log(num, "is Odd");
}

}
EvenorOdd(5);


function checkevenorZero(number){
let result = (number%2 === 0) ? "Even" : "Odd";
console.log(number, "is" , result);
}
checkevenorZero(1);


/* Positive or Negative*/
function checkPositiveorNegative(a){

if(a>0){
    console.log(a, "is positive");
}
else if (a<0) {
    console.log(a, "is negative");
}
else {
    console.log("the number is zero");
}
}
checkPositiveorNegative(4)



function checkPositiveorNegative(b){

let ans = (b>0) ? "positive" : (b<0) ? "negative" : "zero";
console.log(b, "is" , ans);
}
checkPositiveorNegative(-4)



let x= ("enter a number:");
if (x>0){
    console.log(x, "is positive");
}
else if(x<0){
    console.log(x, "is negative");
}
else{
    console.log("the number is zero")
}

/*laregest two number*/
function biggerorsmaller(p,q) {
if(p>q) {
    console.log(p, "is bigger");
}
else {
    console.log(p, "is smaller");
}
}
biggerorsmaller(30,40);


function biggerorsmaller(c,d){
let answer = (c>d) ? "bigger" : "smaller";
console.log(c , "is", answer);
}
biggerorsmaller(1,2);

/*pass or fail*/

let marks=40
if(marks>=40) {
    console.log("Pass");
}
else{
    console.log("Fail")
}

let mark=40
let results= (marks>40) ? "pass" : "fail";
console.log(mark, "is", results);

/*age check*/
 
function checkage(age){
if(age>17){
    console.log("eligible for vote");
}
else{
    console.log("not eligible for vote");
}
}
checkage(18);

let girl = 17
let voting = (girl>18) ? "eligible to vote" : "not eligible to vote";
console.log(girl, "is" , voting);
