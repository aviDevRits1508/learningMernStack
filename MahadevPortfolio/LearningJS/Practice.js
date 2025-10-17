// for (let a = 1; a <= 5; a++) 
// {
//     console.log(a);
// }


// for (let b = 0; b < 7; b++) {
//     console.log(b);
// }

// For Loop Practice (Beginner Level)
// 1️⃣
// Write a for loop that prints numbers from 1 to 10.
// for (let a = 1; a <= 10; a++) {
//     console.log(a);
// }

// 2️⃣
// Write a for loop that prints numbers from 5 to 1 (reverse counting).
// for (let b = 5; b >= 1; b--) {
//     console.log(b);
// }

// 3️⃣
// Write a for loop that prints only even numbers from 1 to 20.
// for (let c = 2; c <= 20; c = c+2) {
//     console.log(c);
// }

// 4️⃣
// Write a for loop that prints only odd numbers from 1 to 15.
// for (let d = 1; d <= 15; d = d + 2) {
//     console.log(d);
// }

// 5️⃣
// // Write a for loop that prints the table of 5 like:
// for (let e = 1; e <= 10; e++) {
//     console.log(e * 5);
// }

// 6️⃣
// Write a for loop that prints the sum of numbers from 1 to 10.
// let sum = 0;
// for (let f = 1; f <= 10; f++) {
//     sum = sum + f;
// }
// console.log(sum);

// 7️⃣
// Write a for loop that prints numbers from 10 to 100, but only those that are multiples of 10.
// for (let g = 10; g <=100; g = g + 10) {
//     console.log(g)
// }

// 8️⃣
// Write a for loop that prints every number from 1 to 50, but stops when it reaches 25.
// 👉 Use break.
// for (let h = 1; h <= 50; h++) {
//     if (h > 25) {
//         break;
//     }
//     console.log(h); 
// }

// 9️⃣
// Write a for loop that skips the number 5 while printing from 1 to 10.
// 👉 Use continue.
// for ( let i = 1; i <= 10; i++) {
//     if ( i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// 🔟
// Write a for loop that prints:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// (Hint: You’ll need one loop inside another — called a nested loop.)
// for (let j = 1; j <= 5; j++) {
//     let row = " ";

//     for ( let k = 1; k <= j; k++) {
//         row = row + k + " ";
//     }
//     console.log(row);
// }


// 11. Print Same number in a row
// 1 1 1 1 1
// for (let a = 1; a <= 1; a++) {
//     let row = " ";
//     for(let b = 1; b <= 5; b++){
//         row = row + " 1 ";
//     }
//     console.log(row);
// }

// 12. Numbers in rows and columns
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// for (let a = 1; a <= 3; a++){
//     let row = " ";
//     for (let b = 1; b <= 5; b++){
//         row = row + b + " ";
//     }
//     console.log(row);
// }


// 13. Increasing triangle 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let a = 1; a <= 5; a++) {
//     let row = " ";
//     for (let b = 1; b <= a; b++) {
//         row = row + b + " ";
//     }
//     console.log(row);
// }

// 14. Star triangle
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let a = 1; a <= 5; a++){
//     let row = " ";
//     for (let b = 1; b <=a; b++) {
//         row = row + " * ";
//     }
//     console.log(row);
// }

// 15. Reverse triangle
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// for (let a = 5; a <= 1; a--){
//     // let row = "";
//     // for (let b = 1; b <= a; b--){
//     //     row = row + ""
//     // }{
//     }
//     console.log(a);

// for (let a = 5; a >= 1; a--){
//     let row = "";
//     for (let b = 1; b <= a; b++){
//         row = row + b + "";
//     }
//     console.log(row);
// }

// for (let a = 5; a >=1; a--){
//     console.log(a);
// }

// Print 1 1 1 1 1
// for (let a = 1; a <= 1; a++){
//     let row = ""
//     for (let b = 1; b <=5; b++){
//         row = row + " 1 "
//     }
//     console.log(row);
// }

// Print 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let a = 1; a <= 5; a++) {
//     let row = ""
//     for (let b = 1; b <= a; b++){
//         row = row + b + " ";
//     }
//     console.log(row);
// }

// print
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let a = 1; a <= 5; a++) {
//     let row = ""
//     for (let b = 1; b <= a; b++){
//         row = row + "* "
//     }
//     console.log(row);
// }

// Print reverse pyramind 
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// for (let a = 5; a >= 1; a--){
//     let row = ""
//     for (let b = 1; b <= a; b++){
//         row = row + b + " "
//     }
//     console.log(row);
// }

// Star reverse triangle
// * * * * *
// * * * *
// * * *
// * *
// *
// for (let a = 5; a >= 1; a--){
//     let row = ""
//     for (let b = 1; b <= a; b++){
//         row = row + "* "
//     }
//     console.log(row);
// }

// Right aligned triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *




