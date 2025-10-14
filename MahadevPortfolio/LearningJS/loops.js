// for (i = 0; i < 10; i++) {
//     console.log("Hello World!");
// }
   

//1. Write a for loop that prints "Good Morning" exactly 5 times.
// for (a = 0; a < 5; a++) {
//     console.log ("Good Morning");
// }

// // 2. Create a for loop that prints numbers from 1 to 20.
// for (b = 0; b < 20; b++) {
//     console.log(b +1);
// }

// 3. Make a for loop that prints 2 tables till 20
// for (c = 2; c <=20; c++) {
//     console.log(c*2);
// }






// 3. Make a for loop that prints 3 tables till 30
// for ( let d = 1; d <= 10; d++) { 
//     console.log("3 x" +d+ "=" + (d*3));
// }

// 4. Make a for loop that prints 4 tables till 40
// for ( let e = 1; e <= 10; e++) {
//     console.log("4 x" +e+ "=" + (e*4));
// }

    // 5 tables using for loop;
    // for (let a = 1; a <=10; a++) {
    //     console.log("5 x " +a+ "=" +  (a*5));
    // }

    // 5 tables using function, for loop;
    // function tables(multi) {
    //     for (let b = 1; b <=10; b++) {
    //         console.log("5 x " +b+ "=" +  (b*5));
    //     }
    // }

    // tables(5*1)

//     Write a function sumOfTable(number) that calculates the sum of all products in the multiplication table of a number.
//     Example: sum of table of 3 → 3 + 6 + 9 + … + 30 = 165

// function sumOfTable (number) {
//     for (let c = 1; c <=55; c++)
//         console.log(c*3);
// }
// sumOfTable(3)



// Write a function evenTable(number) that prints only even multiples of the given number up to 10.
// function evenTable(number) {
    // for ( let d = 0; d <= 10; d++)
    //     console.log(d*2);
// }
// evenTable()    //Doubt//





// 7th October Assignment 

    // For Loop Practice Questions

// 1. Write a for loop that prints numbers from 1 to 10. 

    //   for (let a = 1; a <= 10; a++) {
    //     console.log(a)
    //   }

// 2. Sum of first 10 numbers. Use a for loop to calculate and print the sum of numbers from 1 to 10. 

    //   let sum = 0;
    //   for (let b = 1; b <= 10; b++) {
    //   sum += b;
    //   }
    //     console.log(sum);

// 3. Print even numbers. Write a for loop that prints all even numbers between 1 and 20. 
 
    // for (let c = 1; c <= 20; c++) {
    //     if (c % 2 === 0) {
    //     console.log(c)
    //     }
    //      }

// 4. Print multiplication table. Take a number from the user and print its multiplication table (e.g., table of 5). 

// for (let d = 1; d <= 10; d++) {
//     console.log(d * 3)
// }

// 5. Print reverse numbers. . Write a for loop to print numbers from 10 down to 1.
//    for (let e = 10; e >= 1; e--) {
//     console.log(e)
//    }

// for (let a = 1; a <= 5; a++) {
//     let line = "";
//     for (let b = 1; b <= a; b++) {
//         line +=b +"";
//     }
//     console.log(line)
// }


// 1 2 3 4
// 1 2 3
// 1 2 
// 1

// for (let a = 4; a >= 1; a--) {
//     let value = " ";

//     for (let b = 1; b <= a; b++) {
//         value +=b +"";
//     }
//     console.log(value);
    
// }

// 5 5 5 5 5
// 4 4 4 4 
// 3 3 3
// 2 2
// 1

// for (let c = 5; c >= 1; c--) {
//     console.log(c)
// }   









// 10th Oct 2025 Problems

// 1. print 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let a = 1; a <= 5; a++){
//     let row = ""
//     for (let b = 1; b <= a; b++){
//         row = row + b + " "
//     }
//     console.log(row);
// }


// 2. Print 
// 1 2 3 4 5 
// for (let c = 1; c <= 1; c++){
//     let row = ""
//     for (let d = 1; d <= 5; d++){
//         row = row + d + " "
//     }
//     console.log(row);
// }

// 3. Print
// 1 2 3 4
// 1 2 3
// 1 2 
// 1
// for (let e = 4; e >= 1; e--){
//     let row = ""
//     for (let f = 1; f <= e; f++){
//         row = row + f + " "
//     }
//     console.log(row);
// }

// 4. Print
// 5 5 5 5 5
// 4 4 4 4 
// 3 3 3
// 2 2
// 1
// for (let g = 5; g >= 1; g--){
//     let row = " "
//     for (let h = 1; h <= g; h++){
//         row = row + g + " "
//     }
//     console.log(row);
// }

// 5. Print
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// for(let i = 1; i <= 5; i++){
//     let row = ""
//     for (let j = 1; j <= i; j++){
//         row = row + i + " "
//     }
//     console.log(row);
// }

// 6. Print
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// for (let k = 1; k <= 4; k++){
//     let row = " "
//     for (let l = 1; l <= 4; l++){
//         row = row + l + " "
//     }
//     console.log(row);
// }

// 7. Print
// 10 9 8 7 6 5 4 3 2 1  ========> Not solving 

// 8. Print
// 10
// 10 9
// 10 9 8 
// 10 9 8 7
// 10 9 8 7 6......
// for (let m = 10; m <= 1; m++){
//     let row = ""
//     for (let n = 1; n <= m; n++){
//         row = row + n + " "
//     }
//     console.log(row);    ========> Not solving 
// }  

// 9. Print
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// let num = 1;
// for (let a = 1; a <= 5; a++){
//     let row = ""
//     for (let b = 1; b <=a; b++){
//         row = row + num + " "
//         num++
//     }
//     console.log(row);
// }



// 11111
// for (let a = 1; a <= 1; a++){
//     let row = ""
//     for (let b = 1; b <=5; b++){
//         row = row + "1 "
//     }
//     console.log(row);
// }



// 13th Oct 2025 Problems

// Reverse pyramid
// * * * * *
// * * * *
// * * *
// * *
// *
// for (let a = 5; a >= 1; a--){
//     let row = " ";
//     for (let b = 1; b <= a; b++){
//         row = row + "* "
//     }
//        console.log(row); 
// }


// Number pyramid
//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
// for (let a = 1; a <= 5; a++){
//     let row = " ";

//     for (let b = 1; b <= a; b++){
//         row = row + b + " ";
//     }
//     console.log(row);
// }
// for (let a = 1; a <= 5; a++) {
//     let row = ""; // empty row

//     // 1. spaces before numbers (to make pyramid shape)
//     for (let s = 1; s <= 5 - a; s++) {
//         row = row + " ";
//     }

//     // 2️. numbers from 1 to a
//     for (let b = 1; b <= a; b++) {
//         row = row + b + " ";
//     }

//     console.log(row);
// }


// Floyd’s Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let sum = 1;
// for (let a = 1; a <= 4; a++){
//     let row = " ";
//     for (let b = 1; b <= a; b++){
//         row = row + sum + " ";
//         sum++; 
//     }
//     console.log(row);
// }


// Inverted numbers
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// for (let a = 5; a >= 1; a--){
//     let row = " ";
//     for (let b = a; b >= 1; b--){
//         row = row + b  + " ";
//     }
//     console.log(row);
// }
