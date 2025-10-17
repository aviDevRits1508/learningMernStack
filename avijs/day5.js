
//looping

// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");
// console.log("avinash");

//types of loop
//1. for loop
//2. while loop
//3. do while
//4. for in loop
//5. for of loop

// let j = 0;
// console.log(j++)
// console.log(j,++j)


// for(let i = 0; i < 4; i++){
//     console.log(`iteration ${i} avinash`);
// }


// for(let i = 0; i < 10; i++){
//     console.log(i + 1)
// }



// for(let i = 0; i < 3; i++ ){
//     console.log("outer loop")
//     for(let j = 0; j < 3; j++){
//         console.log("inner loop")
//     }
// }

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// for(let i = 0; i <= 0; i++){
//     let output = ""
//     for(let j = 1; j <= 5; j++){
//         output += j + " "
//         // console.log(output)
//     }
//     console.log(output)
// }



// for(let i = 0; i < 5; i++){
//     if(i > 4){
//         break;
//     }
//     console.log(i)
// }


// let i = 0;

// while(i < 5){

//     for(let j = 0 ; j < 5; j++){
//             console.log(j);
//     i++;
//     }

// }



// 4567 

// 4 + 5 + 6 + 7 = 22

// let num = 1565767575757576875;

// console.log(num % 10);
// console.log(Math.floor(num / 10));



function sumOfDegit(num){
    let sum = 0;
    while(num > 0){
        let lastDegit = num % 10;
        sum = sum + lastDegit;
        num = Math.floor(num / 10);
    }
    return sum 
}

console.log(sumOfDegit(1578))
