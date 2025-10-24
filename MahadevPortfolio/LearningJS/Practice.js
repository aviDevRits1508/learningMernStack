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





// 15th Oct 2025

// Beginner level (1 - 5)

// 1️. Print this pattern: in both for and while loops:
// * 
// * * 
// * * * 
// * * * * 
// for (let a = 1; a <= 4; a++){
//     row = "";

//     for (let b = 1; b <= a; b++){
//         row = row + "* ";
//     }
//     console.log(row)
// }

// let c = 1;
// while(c <= 4){
//     row = ""

//     let d = 1;
//     while(d <= c){
//         row = row + "* "
//         d++;
//     }
//     console.log(row);
//     c++;
// }

// 2. Print numbers like this: in both for and while loops:
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// for (e = 1; e <= 4; e++){
//     row = "";

//     for (f = 1; f <= e; f++){
//         row = row + f + " "
//     }
//     console.log(row);
// }

// let g = 1;
// while(g <= 4){
//     row = "";

//     h = 1;
//     while(h <= g){
//         row = row + h + " ";
//         h++;
//     }
//     console.log(row);
//     g++;
// }


// 3. Print same number in each row: in both for and while loops:
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// for (let i = 1; i <= 4; i++){
//     row = "";

//     for (let j = 1; j <= i; j++){
//         row = row + i + " "
//     }
//     console.log(row);
// }

// let k = 1;
// while(k <= 4){
//     row = ""

//     let l = 1;
//     while(l <= k){
//         row = row + k + " ";
//         l++;
//     }
//     console.log(row);
//     k++;
// }

// 4. Print reverse numbers in each row: in both for and while loops:
// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
// for (let m = 1; m <= 4; m++){
//     row = "";

//     for (let n = m; n >= 1; n--){
//         row = row + n + " "
//     }
//     console.log(row);
// }

// let o =1;
// while(o <= 4){
//     row = "";

//     let p = o;
//     while(p >= 1){
//         row = row + p + " ";
//         p--
//     }
//     console.log(row);
//     o++;
// }

// 5. Print this pattern with letters: in both for and while loops:
// A 
// A B 
// A B C 
// A B C D 
// for (let q = 1; q <= 4; q++){
//     row = ""

//     for (let r = 1; r <= q; r++){
//         row = row + String.fromCharCode(65 + r - 1) + " "
//     }
//     console.log(row);
// }

// let s = 1;
// while(s <= 4){
//     row = ""

//     t = 1;
//     while(t <= s){
//         row = row + String.fromCharCode(65 + t - 1) + " "
//         t++;
//     }
//     console.log(row);
//     s++;
// }



// Medium Level (6–10)

// 6️. Print inverted stars: in both for and while loops:
// * * * * 
// * * * 
// * * 
// * 
// for(let u = 4; u >= 1; u--){
//     row = ""

//     for (let v = u; v >= 1; v--){
//         row = row  + "* ";
//     }
//     console.log(row);
// }

// let w = 4;
// while(w >= 1){
//     row = ""

//     x = w;
//     while(x >= 1){
//         row = row + "* "
//         x--;
//     }
//     console.log(row);
//     w--;
// }


// 7. Print inverted right-aligned triangle: in both for and while loops:
// * * * * 
//   * * * 
//     * * 
//       * 
// for (let y = 4; y >= 1; y--){
//     row = ""

//     for(let ab = 4; ab > y; ab--){
//         row = row + "  ";
//     }

//     for (let z = y; z >= 1; z--){
//         row = row + "* "
//     }
//     console.log(row);
// }

// let bc = 4;
// while(bc >= 1){
//     row = ""

//     let cd = 4;
//     while(cd > bc){
//         row = row + "  ";
//         cd--;
//     }

//     let de = bc;
//     while(de >= 1){
//         row = row + "* ";
//         de--;
//     }
//     console.log(row);
//     bc--;
// }


// 8. Print continuous numbers : in both for and while loops:
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// let sum = 1;
// for (let ef = 1; ef <= 4; ef++){
//     row = ""

//     for (let fg = 1; fg <= ef; fg++){
//         row = row + sum + " ";
//         sum++;
//     }
//     console.log(row);
// }

// let num = 1;
// let gh = 1;
// while(gh <= 4){
//     row = ""

//     let hi = 1;
//     while(hi <= gh){
//         row = row + num + " ";
//         hi = hi + 1;
//         num++;
//     }
//     console.log(row);
//     gh = gh + 1;
// }






