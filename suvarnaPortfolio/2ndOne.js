//Operators
//camparison operators
// let a=5;
// let b=2;
// let c=5;
// console.log("a==b",a==b); //false   5==2
// console.log("a!=b",a!=b); //true    5!=2
// console.log("a==c",a==c); //true    5==5
// console.log("a!=c",a!=c); //true    5!=5

//number + string in camparison 
// let x=5; //number
// let y="5"; //string
// console.log("x==y",x==y);  // true  "5" string is converted into number in js. then it will compare the nbr to nbr


//strict verison
// let a=10;
// let b=20;
// let c=10;
// console.log("a===b",a===b) // false
// console.log("a!==b",a!==b) // true
// console.log("a===c",a===c) // true
// console.log(a===b,b==c,c==a) // false false true

// >, >=, <, <=

// let a=5;
// let b=3;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// let a=5;
// let b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);

//Logical operators    && || ! (and, or ,not)

//AND && Operator
// let a=5;
// let b=6;
// let cond1=a<b;
// let cond2=a===5;
// console.log("cond1 && cond2",cond1 && cond2);  // AND ==   True*True=True 

// let cond3=a>b;
// let cond4=b===6;
// console.log("cond3 && cond4",cond3 && cond4);


//OR || Operator 

// let a=6;
// let b=5;
// let cond1=a==6;
// let cond2=b>a;
// console.log(cond1 || cond2); //true  one condition is ture then o/p will be true

// let cond3=a!=6;
// let cond4=b>a;
// console.log(cond3 || cond4);  //false

// let cond5=a===6;
// let cond6=b<a;
// console.log(cond5 || cond6);  //true


//NOT Operator (!)

// let a=5;
// let b=5;
// console.log(a<b); //true
// //when we used ! operator it wll visa versa
// console.log(!(a<b));  // false

// conditional statments
let age=18;

if(age>=18){
console.log("you can vote");
}

if(age<18){
    console.log("can not vote");
}

// exapmle 2
let mode ="dark";
let color;
if (mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);

//emple 3
let modde="blue"
color;
if(modde==="dark"){
    color="black"
}
else{
    color="white"
}
console.log(color);

// age example
let agge=25;
if(agge>=18){
    console.log("Vote");
}
else{
    console.log("Not Vote");
}

// age example
let aggge=16;
if(aggge>=18){
    console.log("Vote");
}
else{
    console.log("Not Vote");
}

// let add or even

let num=10;
if (num%2===0){
    console.log(num,"even");
}else{
    console.log(num,"odd");
}

//odd
let num1=7;
if (num1%2===0){
    console.log(num1,"even");
}else{
    console.log(num1,"odd");
}

//else if stament
let mode2="dark";
let colors;
if(mode2==="blue"){
    colors="blue";
}else if(mode2==="silver"){
    colors="white";   
}else if (mode2==="dark"){
    colors="black";
}else{
    colors="pink";
}
 console.log(colors);   //black

 //else if stament
let mode3="light";
let colorss;
if(mode2==="blue"){
    colorss="blue";
}else if(mode3==="silver"){
    colorss="white";   
}else if (mode3==="dark"){
    colorss="black";
}else{
    colorss="pink";
}
 console.log(colorss);    //pink


 //ternar operator
 let age3=25;
 let result=age>=18? "adult":"not adult";
 console.log(result);


 //promptcls

//  let num5 = prompt("Enter a number:");
//  if(num5%5===0){
//     console.log(num5,"is multiple of 5");
//  }else{
//     console.log(num5,"not multiple of 5");
//  }

 //
 let score=65;
 let garade;
 if(score>=90 && score<=100){
    garde= "A";
 }else if(score>=70 && score<=89){
    garde= "b";
 }else if(score>=60 && score<=69){
    garde= "c";
 }else if(score>=50 && score<=59){
    garde= "d";
 }else if(score>=0 && score<=49){
    garde= "f";
 }
 console.log("Accodring to scores garde will dsiplay",garde);

 // h/w
 let a=50;
 let b=60;
 if(a>b){
    console.log("sub:",a-b);
 }else{
    console.log("add:",a+b);
 }