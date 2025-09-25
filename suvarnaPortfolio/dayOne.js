//console.log("Hello World");

//Variable 1st ---let
// let name = "Mno";
//console.log(name);

//Variable 2nd ---let
//let lname = "Khan";
//console.log(lname);

//Variable 3rd---let
//let Mname = "R";cd
//console.log(Mname);

//name="Johan";
//console.log(name);

// const name1="suvi";


var a=5;

a=8

console.log(a)

//functions
function sum(a,b){
    console.log("control1 came here")
    return a+b
}
 
//execute the sum1
let sum1 = (1000,2000)
console.log(sum1)




function mul(a,b){
    console.log("control2 came here")
    return a*b
}

//craete a one function whic is calculated the total makrs of student
 function studentMarks(name,Hindi,English,kannada,Science,Socail,Maths){
    //sum of all marks
    let totalMarks = Hindi+English+kannada+Science+Socail+Maths;
 
 //print result
    console.log(`${name}'s total marks: ${totalMarks}`);
 }
 //call function
   studentMarks("Rahul",95,85,98,88,95,90);
 




