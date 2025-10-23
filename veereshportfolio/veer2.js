//nested for loop---a forloop inside that another for loop is called nested for loop------------------------
// for(let i=0;i<3;i++){
//     console.log(`outer`)     
//     for (let j=0;j<3;j++)
//         console.log(`inner`)
// }

// //-----------------------------------------------------------------------------------------------------
// for(let i=0;i<=4;i++)
// {
//     let output=''
//     for(let j=1;j<=5;j++){
//         output+=j+''
//     }
//     console.log(output)

// }
// //-------------------------------------------------------------------------------------------------------
// for(let i=0;i<4;i++){
//     let output=''
//     for(j=1;j<5;j++){
//         output+=j+''
//         console.log(output)
//     }
//     console.log(output)
// }

// //-----------------------------------------------------------------------------------------------------
// //Write a for loop that prints numbers from 1 to 10.

// for(i=0;i<=10;i++)
//     console.log(i)

// // Use a for loop to calculate and print the sum of numbers from 1 to 10.
// function print(b){
//     let num=0
//     for(let i=0;i<=b;i++){
//               num=num+i

//     }
//     console.log(num);

// }
// print(10)

// // even or odd
// function evenodd(x){
//     for(let i=0;i<x;i++){
//         if(i%2==0){
//             console.log(`even`,i);
//     }
//     else
//     {
//         console.log(`odd`,i);
//     }
// }
// }
// evenodd(20)

// // Write a for loop to print numbers from 10 down to 1.
// function revers(x){
// for(let i=10;i>=0;i--){
//     console.log(x*i)
// }

// }
// revers(1)

// //Take a number from the user and print its multiplication table (e.g., table of 5).
//  function five(num){
//         num=0
//         for(let i=1;i<=50;i++){
//             if(i%5==0){
//                 console.log(i)
//                 num+=i
//             }

//         }
//         console.log(`total`,num)
//     }
//     five(50)

//     // Write a for loop to print numbers from 10 down to 1.
//     function down(f)
//     {
//         for(let i=0;i<=f;i--)
//         console.log(i)
        

//     }
//     down(10)

//     // -----------------while------------------------------------------------------------------------
//     // Take input N and print numbers from 1 to N using a while loop.

// function number(num){
//     let i=1;
//     while(i<=num){
//         console.log(i)

//         i++
//     }
// }
// number(20)



  

// console.log("hello")

// //factorial
// function factorial(num){
//     let result=1;
//     let i=1;
//     while(i<=num){
//         result*=i;
//         i++
//     }
//     console.log(result)
// }
// factorial(4)


// //Use a while loop to reverse a number (e.g., 123 → 321).
// let num = 123;     
// let reversed = 0;
 
// while (num > 0) {
//     let digit = num % 10;                
//     reversed = reversed * 10 + digit;  
//     num = Math.floor(num / 10);          
 
// console.log("Reversed number:", reversed);
// }

// //Use a while loop to count how many digits are in a number (e.g., 98765 → 5 digits).
// let num = 12345345;
// let reversed =0;
// while(num>0){
//     num=Math.floor(num/10);
//     reversed++;
// }
// console.log("reversed number",reversed)

//---------------------------------------------------------------------

// let row = 1;  

// while (row <= 4) {
//     let number = 1; 
//     let currentRow = '';

//     while (number <= row) {
//         currentRow += number + ' ';  
//         number++;
//     }
//     console.log(currentRow.trim());
//     row++; 
// }


//sum of given digit

// function sumdigit(num){
//     let sum=0;
//     while(num>0){
//         let lastdegit=num%10;
//         sum=sum+lastdegit;
//         num=Math.floor(num/10);
    

//     }
//     return sum
// }
// console.log(sumdigit(1239))

//count the number of digits 

// function count(num){
//     let count=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         count++;
//     }
//     console.log(count)
// }
// count(2345)





//------------------------------------------------------------------------------------------------------
// function pNumber(start) {
//     let i = start;

//     while (i > 0) {
//         let j = 1;
//         let line = "";

//         while (j <= i) {
//             line =line+ j;
//             j++;
//         }

//         console.log(line);
//         i--;
//     }
// }

// pNumber(4);


// function even(v){
//     for(let i=0;i<v;i++)
//         if(i%2==0){
//             console.log(`odd`,i)
//         }else{
//             console.log(`even`,i)
//         }
    
// }
// even(30)

// function fact(num){
//     let result=1;
//     let i=1;
//     while(i<=num){
//         result=result*i
//         i++
//     }
//     console.log(`fact`,result)

// }
// fact(5)

// for(let i=4;i>=1;i--){
//     let row='';
//     for(let j=1;j<=i;j++){
//         row=row+j+'';
//     }
//     console.log(row)
// }

// for (let i=1; i<=4; i++) {
//   let row = '';
//   for (let j=1; j<=i; j++) {
//     row=row+i
//   }
//   console.log(row);
// }
//-------------------------------------------------------------------------------------------------------
// for(let i=4;i>=1;i--){
//   let num='';
//   for(let j=1;j<=i;j++){
//     num=num+i;
//   }
//   console.log(num)
// }

// function print(n){
//   for(i=1;i<=n;i++){
//     let row='';
//     for(j=1;j<=i;j++){
//       row=row+j;
//   }
//   console.log(row)
// }
// }
// print(6);
//-----------------------------------------------------------------------------------------------------

// function printincress( end){
//   for(let i=1;i<=end;i++){
//     let row='';
//     for(let j=1;j<=i;j++){
//       row=row+j;
//     }    
//     console.log(row)
//   }
// }
// printincress(9)

//same number in acending order using for loop
// function printaccending(n){
//   for(let i=1;i<=n;i++){
//     let row='';
//     for(let j=1;j<=i;j++){
//       row=row+i;
//   }
//   console.log(row)
// }
// }
// printaccending(6);

// //same number in dissending order using for loop
// function dissending(n){
//     for(let i=n;i>=1;i--){
//         let row='';

//     for(let j=1;j<=i;j++){
//         row=row+i;
//     }
//     console.log(row);
// }
// }
// dissending(4)

//same number in accending order using while loop
// function accendingw(w){
//     let i=1;
//     while(i<=w){
//         row='';

//       let j=1;
//       while(j<=i){
//         row=row+i;
//         j++;
//       }
//       console.log(row)
//       i++;
//     }
// }
// accendingw(7)



//same number indissending using while loop
// function dissendingw(d){
//     let i=d;
//     while(i>=1){
//         row='';

//         let j=1;
//             while(j<=i){
//                 row=row+i;
//                 j++;
//         }
//         console.log(row);
//         i--;

//     }
// }
// dissendingw(7)