// // with no function
// let number = 3;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// // with one function
// function Table(num) {
//     console.log(`Multiplication Table of ${num}:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }
// Table(7)
// Table(6)
// Table(3)

// // with 2 functions
// function printRow(num, i) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         printRow(num, i);
//     }
// }

// printTable(5)


// // without function
// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// // with function
// function printTables(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(`Multiplication Table of ${i}`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// printTables(1, 5);
// printTables(1, 9);
// printTables(1, 10);


// // four parameters
// function new1(a,b,c,d){
//     for(let i=a;i<=c;i++){
//         console.log("-----------------")
//         for(let j=b;j<=d;j++){
//             console.log(`${i} x ${j} = ${i * j}`)

//         }
//     }
// }
// new1(1,1,5,5)

// reverse
// function new1(a,b,c,d){
//     for(let i=b;i>=d;i--){
//         console.log("-----------------")
//         for(let j=a;j>=c;j--){
//             console.log(`${i} x ${j} = ${i * j}`)

//         }
//     }
// }
// new1(1,5,5,5)


// function new1(a, b, c, d) {
//     for (let i = d; i >= b; i--) { 
//         console.log("-----------------");
//         for (let j = c; j >= a; j--) { 
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// new1(1,5,5,5)
// new1(5,2,10,10)

// // switch-case
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Another day");
// }

// function Table(num) {
//     console.log(`Multiplication Table of ${num}:`);
//     for (let i = 10; i >= 1; i--) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }
// Table(7)
