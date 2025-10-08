// // // sum of all digits
// function numSum(num){
//   temp=0
//   for(let i=1;i<=num;i++){
//     temp=temp+i
//   }
//     console.log(temp)
// }
// numSum(30) 

// // // product of all digits
// function product(num){
//   temp=1
//   for(let i=1;i<=num;i++){
//     temp=temp*i
//   }
//     console.log(temp)
// }
// product(5)

// sum of product
// function prodDigit(a,b){
//     let pro=0
//     for(i=a;i<=b;i++){
//         pro+=i;
//     }
//     console.log("the sum of product is",pro)
// }
// prodDigit(1,10)

// // // divisible numbers 4
// function divisible(num){
//     for(let i=1;i<=num;i++){
//         if(i%4==0){
//             console.log(i)
//         }

//     }
// }
// divisible(20)

// // // divisible numbers 3 and it's sum
// function divisibleSum(num){
//     temp=0
//     temp1=0
//     for(let i=1;i<=num;i++){
        
//         if(i%3==0){

//             console.log(i)
//             temp=temp+i
//         }
//         else{
//             confirm.log(i)
//             temp1=temp1+i
//         }

//     }
//     console.log(temp)
//     console.log(temp1)
// }
// divisibleSum(10)

// // // divisible by 5 and sum of all digits
// function divisibleSum2(num){
//     temp=0
//     for(let i=1;i<=50;i++){
        
//         if(i%5==0){

//             console.log(i)
//             temp=temp+i
//         }

//     }
//     console.log(temp)
// }
// divisibleSum2(50)

// // printing all even numbers in reverse and it's sum
// function even (a){
//     temp=0
//     for(let i=a;i>=1;i--){
//         if(i%2==0){
//             console.log(i)
//             temp=temp+i
//         }
//     }
//     console.log(temp)
// }
// even(30)

// // printing all even and odd
// function num(a){
//     even=0
//     odd=0
//     for(let i=1;i<=a;i++){
//         if(i%2==0){
//             console.log(i," is even")
//             even=even+i
//             // console.log(even)

//         }
//         else{
//             console.log(i ," is odd")
//             odd=odd+i
//             // console.log(odd)
            
//         }
//     }
//     console.log("sum of all even numbers is",even)
//     console.log("sum of all odd numbers is",odd)
// }
// num(30)

// for (let i = 0; i < outerLimit; i++) {
//   // Code for the outer loop
//   for (let j = 0; j < innerLimit; j++) {
//     // Code for the inner loop
//     // This code executes for each iteration of the inner loop
//     // which runs completely for every single iteration of the outer loop.
//     console.log(`Outer loop iteration: ${i}, Inner loop iteration: ${j}`);
//   }
// }


// using while loop


// table of 2
// function table(num){
//     let i=1;
//     while(i<=10){
//         console.log(i*2);
//         i++;
//     }
// }
// table(4)

// sum of all digits
// function sum(N){
//     temp=0
//     let i=1;
//     while(i<=N){
//         console.log(i);
//         temp=temp+i
//         i++;
//     }
//     console.log(temp)
// }
// sum(10)

// even numbers
// function even(num){
//     temp=0
//     let i=1;
//     while(i<=num){
//         if(i%2==0){
//             console.log(i);
//             temp=temp+i
//             }
//         i++;
//     }
//     console.log("sum of all even num is",temp)

// }
// even(10)

// // odd numbers
// function odd(num){
//     temp=0
//     let i=1;
//     while(i<=num){
//         if(i%2!=0){
//             console.log(i);
//             temp=temp+i
            
//          }
//          i++;
//      }
//      console.log("sum of all odd num is",temp)
 
//  }
//  odd(10)

// divisible by 5 and it's sum
// function divisible(num){
//     temp=0
//     let i=1;
//     while(i<=num){
//         if(i%5==0){
//             console.log(i)
//             temp=temp+i
//         }
//         i++;
//     }
//     console.log(temp)
// } 
// divisible(35)        
   

// printing odd num in reverse and its sum
function reverse(a){
    temp=0
    let i=a;
    while(i>=1){
        if(i%2!=0){
            console.log(i)
            temp=temp+i
        }
        i--;

    }
    console.log(temp)
} 
reverse(30)