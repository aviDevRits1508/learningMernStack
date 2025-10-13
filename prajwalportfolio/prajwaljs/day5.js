// // function printtable(num){
// //     for (let num=2;num<=10;num++)
// //     {
// //         console.log(`the table of : ${num}`);
// //         for(let i=1;i<=10;i++){
// //             console.log(`${num}* ${i}=${num*i}`)
// //         }
// //             }

// // }
// // printtable()

// // without function

// // for(i=2;i<=10;i++)
// //     for(j=1;j<=10;j++){
// //         console.log(i*j)
// //     }

// // using two Function

// // function printRow(num, i) {
// //   console.log(`${num} * ${i} = ${num * i}`);
// // }
// // function printTable(num) {
// //   console.log(`\nTable of ${num}:`);
// //   for (let i = 1; i <= 10; i++) {
// //     printRow(num, i);
// //   }
// // }
// // for (let n = 2; n <= 10; n++) {
// //   printTable(n);
// // }

// // function table(num1,num2,num3,num4){
// //     for(i=num1;i<=num3;i++){
// //         for(j=num2;j<=num4;j++){
// //             console.log(i*j)
// //         }
// //     }
// // }
// // table(2,1,15,10)

// // 5 counts

// // function table1(num5,num6,num7,num8){
// //     for(i=num5;i<=num7;i++){
// //         for(j=num6;j<=num8;j++){
// //             console.log(i*j)
// //         }
// //     }
// // }
// // table1(2,1,10,5)


// // reverse
// function reverse(){
//     for(let i=10;i>=1;i--){
//         console.log(i)
//     }
// }
// reverse()


// //reverse table

// function tablereverse(a,b){
//     for(let i=a;i>=1;i--){
//         console.log(`multiplcation of : ${i}`)
//         for(let j=b;j>=1;j--)
//             console.log(`${i}*${j} = ${i*j}`)
//     }
// }
// tablereverse(10,10)

function even(a){
    for( let i=1;i<=a;i++)
    {
        if(i%4==0){
            console.log(i)
        }
        else console.log(i +"odd")
    }
}
even(10)


// function printtable(num){
//     for (let num=2;num<=10;num++)
//     {
//         console.log(`the table of : ${num}`);
//         for(let i=1;i<=10;i++){
//             console.log(`${num}* ${i}=${num*i}`)
//         }
//             }

// }
// printtable()

// without function

// for(i=2;i<=10;i++)
//     for(j=1;j<=10;j++){
//         console.log(i*j)
//     }

// using two Function

// function printRow(num, i) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }
// function printTable(num) {
//   console.log(`\nTable of ${num}:`);
//   for (let i = 1; i <= 10; i++) {
//     printRow(num, i);
//   }
// }
// for (let n = 2; n <= 10; n++) {
//   printTable(n);
// }

// function table(num1,num2,num3,num4){
//     for(i=num1;i<=num3;i++){
//         for(j=num2;j<=num4;j++){
//             console.log(i*j)
//         }
//     }
// }
// table(2,1,15,10)

// 5 counts

// function table1(num5,num6,num7,num8){
//     for(i=num5;i<=num7;i++){
//         for(j=num6;j<=num8;j++){
//             console.log(i*j)
//         }
//     }
// }
// table1(2,1,10,5)


// reverse
function reverse(){
    for(let i=10;i>=1;i--){
        console.log(i)
    }
}
reverse()


//reverse table

function tablereverse(a,b){
    for(let i=a;i>=1;i--){
        console.log(`multiplcation of : ${i}`)
        for(let j=b;j>=1;j--)
            console.log(`${i}*${j} = ${i*j}`)
    }
}
tablereverse(10,10)
