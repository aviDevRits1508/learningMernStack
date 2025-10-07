
// function totalMarks(social, science, maths, english, hindi) {
//   return social + science + maths + english + hindi;
  
// }

// let total = totalMarks(85, 90, 78, 95, 88);
// let percentage = (total / 500) * 100;

// console.log("Total Marks:", total);
// console.log("Percentage:", percentage + "%")


// // day2

// function isSick(a){
//   if(a){
//     console.log()
//   }else{
//     console.log()
//   }
// }


// let a=4
// let b=10

// if (a>b){
//   console.log(a*b)
// }else{
//   console.log(a-b)
// }



// // let num1 = -10789;
// // if(num1>0){
// //     console.log("Positive");
// // }else if(num1<0){
// //     console.log("Negative");
// // }else{
// //     console.log("Zero");
// // }


// for(let i=0; i <=10; i++){
//   console.log(i)
// }



// 6oct

// loop and increment
// for(let a=0; a<=20;a++){
//   console.log(a);
// }



// loop and decrement
// for(let a=10;a>=1;a--){
//   console.log(a);
// }



// global scope and local scope
// let value=0
// for(let a=10;a<=11;a++){
//   console.log(a)
//   value=value+a;
// }
// console.log(a) :local scope cannot be called outside the function where as global scope can be called.



// if&else conditions
// let sick = true;
// if(sick){
//   console.log("not able to work")
// }else{
//   console.log("able to work")
// }



// use in function
// function isSick(a){
// if(a){
//   console.log("not able to work")
// }else{
//   console.log("able to work")
// }
// }

// let sick = true
// console.log(isSick(sick))



// how to multiply using loop in function
// table for 7
// for (let i=1; i<=10; i++){
//   console.log("7 x" +i+"="+(7*i))

// }
// table for six
// function table(a){
//   for(let i=1;i<=10;i++){
//     console.log((a*i));
//   }
// }

// table(6);


// modulus
// function even(a){
//   for(let i=1;i<=a;i++)
//   {
//     if(i%2==0){
//       console.log(i)
//     }
//   }
// }
// even(10)



// function odd(b){
//   for (let i=0;i<b;i++){
//     if(i%2==0){
//       console.log(1, "even")
//     }else{
//       console.log(1, "odd")
//     }
//   }
// }
// odd(10)



// function Printnumber(a)
// {
//    let num=0; 
//    for(let i=1;i<=a;i++){
//      num=num+i;
//   }

//      console.log(num);
// }

// Printnumber(5)


// 7oct
// 1 Print 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 6 Print 1 to N using while
// let i = 1;
// while (i <= 40) {
//   console.log(i);
//   i++;
// }


// 7 Sum of digits
// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   sum += num % 4;
//   num = (num / 4);
// }

// console.log("Sum of digits:", sum);


// 8 Count digits in a number
// let num = 98765;
// let count = 0;
// let temp = num;

// while (temp > 0) {
//   let dot = 0;
//   while (temp >= 10) {
//     temp = temp - 10;
//     dot++;
//   }
//   temp = dot;
//   count++;
// }

// console.log("Number of digits:", count);