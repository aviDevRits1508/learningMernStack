
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
// if(num1>0){
//     console.log("Positive");
// }else if(num1<0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }


// for(let i=0; i <=10; i++){
//   console.log(i)
// }



// // 6oct

// // loop and increment
// for(let a=0; a<=20;a++){
//   console.log(a);
// }



// // loop and decrement
// for(let a=10;a>=1;a--){
//   console.log(a);
// }



// // global scope and local scope
// let value=0
// for(let a=10;a<=11;a++){
//   console.log(a)
//   value=value+a;
// }
// console.log(a) 
// // :local scope cannot be called outside the function where as global scope can be called.



// // if&else conditions
// let sick = true;
// if(sick){
//   console.log("not able to work")
// }else{
//   console.log("able to work")
// }



// // use in function
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
<<<<<<< HEAD

//      console.log(num);
// }
=======

//      console.log(num);
// }

// Printnumber(5)


// 7oct
// 1 Print 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i=1;i<=5;i++){
//    let count="";
//    for(let j=1;j<=5;j++){
//       if(j<=i){
//          count+=j+'';
//       }else{
//          break; 
//       }
//    }
//    console.log(count);
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

// 6 Print 1 to N using while
// let i = 1;
// while (i <= 50) {
//   console.log(i);
//   i++;
// }

>>>>>>> 21fc310f86bce382eb3afb4ae7ac81f1e3e3ed21

// Printnumber(5)


// // 7oct
// for loop
// 1. Print 1 to 11
// for (let i = 1; i <= 11; i++) {
//   console.log(i);
// }


// // 2.Sum of first 10 numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log("Sum of first 10 numbers:", sum);


// // 3.Print even numbers
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // 4.Print multiplication table
// // table for 5
// for (let i=1; i<=10; i++){
//   console.log("5 x" +i+"="+(5*i))

// }


// // 5.Print reverse numbers
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // while loop
// // 6. Print 1 to N using while
//    function print(n){
//       let i=1;
//       while(i<=n){
//          console.log(i);
//          i++;
//       }
//    }
//    print(9)


// // 7. Sum of digits
//  function printsum(){
//    let sum=0;
//    let i=0;
//    while (i<=5){
//       sum=sum+i;
//       i++
//       }
//       console.log(sum)
//  }
// printsum(1234)


// // 8. Count digits in a number
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


// // 9.Reverse a number
// let num = 123;
// let rev = 0;

// while (num > 0) {
 
//   let digit = num;
//   while (digit >= 10) {
//     digit = digit - 10;
//   }


//   rev = rev * 10 + digit;

  
//   let divided = 0;
//   while (num >= 10) {
//     num = num - 10;
//     divided++;
//   }
//   num = divided;
// }

// console.log(rev);


// // 10.Factorial using while loop
// let num = 5;       // You can change this to any number
// let fact = 1;
// let i = 1;

// while (i <= num) {
//   fact = fact * i;
//   i++;
// }

// console.log("Factorial:", fact);



// // 8 oct
// function sumofdigit(num){
//    let sum= 0;
//    while(num > 0){
//        let lastdigit = num % 10;
//       sum = sum + lastdigit;
//       num = Math.floor(num / 10);
//    }
//    return sum
// }
// console.log(sumofdigit(1578))



// for (let i = 1; i <= 1; i++) {
//   console.log(i);
// }


// for (let i= 1; i<=5;i++){
// let count = "";
// for(let j=1;j<=i;j++){
//    count+=j+'';
// }
// console.log(count);
// }


// let i=1;
// while(i<=5){
//    let j=1;
//    let count="";

//    while(j<=i){
//       count+=j+"";
//       j++
//    }

//    console.log(count);
//    i++;
// }


// for (let i=1;i<=5;i++){
//    let count="";
//    for(let j=1;j<=5;j++){
//       if(j<=i){
//          count+=j+'';
//       }else{
//          break; 
//       }
//    }
//    console.log(count);
// }

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += i + " ";
//   }
//   console.log(line.trim());
// }


// for (let i = 5; i >= 1; i--) {
//    let line = " ";
//    for(let j=1; j<=i; j++){
//       line+= i +" ";
//    }
//    console.log(line);
// }


// 8oct
// Uppercase Conversion
// let str1 = "viquar";
// console.log(str1.toUpperCase()); 

// lowercase Conversion
// let str2 = "VIQUAR";
// console.log(str2.toLowerCase()); 

// Find Word in Sentence
// let result = check("My name is viquar", "viquar");
// console.log(result); 

// Find Word Position
// let value="my name is Viquar"
// let word="Viquar"
// console.log(value.indexOf(word))


// Extract Substring
// let str = "JavaScript";
// let substring = str.slice(4);
// console.log(substring); 


// Replace a Word
// let str = "My name is John";
// let newStr = str.replace("John", "viquar");
// console.log(newStr); 


// Count String Length
// let str = "I love coding";
// console.log(str.length); 

// Combine Two Strings
// let one = "Hello";
// let two = "World";
// let combined = `${one} ${two}`;
// console.log(combined); 


// Check Start or End Word
// let str = "Hello JavaScript";
// let startsWithHello = str.startsWith("Hello");
// let endsWithScript = str.endsWith("Script");
// console.log(startsWithHello); 
// console.log(endsWithScript);  

