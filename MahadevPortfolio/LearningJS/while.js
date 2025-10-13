// 13th October 2025

// Print 1 to 10
// let a = 1;
// while (a <= 10) {
//     console.log(a);
//     a = a + 1;
// }

// Print even numbers 2 to 10
// let b = 2;
// while (b <= 20){
//     console.log(b);
//     b = b + 2;
// }

// Print numbers from 10 to 1 (reverse)
// let c = 10;
// while (c >= 1){
//     console.log(c)
//     c--;
// }

// Print all odd numbers from 1 to 15
// let d = 1;
// while (d <= 15){
//     console.log(d);
//     d = d + 2;
// }

// Find the sum of first 10 numbers (1 + 2 + … + 10)
// let sum = 0;
// let e = 1;
// while (e <= 10){
//     sum = sum + e;
//     e = e + 1;
// }
// console.log(sum);


// Find the sum of all even numbers from 1 to 20
// let sum = 0;
// let f = 1;
// while (f <= 20){
//     sum = sum + f;
//     f = f + 2;
// }
// console.log(sum)


// Print the multiplication table of 5
// let g = 1;
// while (g <= 10){
//     console.log(g * 5);
//     g = g + 1;
// }


// Print factorial of 5 (1 × 2 × 3 × 4 × 5) ===============> Doubt



// Print this triangle:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// for (let a = 1; a <= 4; a++){
//     row = " ";
//     for (let b = 1; b <= a; b++){
//         row = row + b + " "
//     }
//     console.log(row);
// }

// let a = 1;
// while (a <= 10){
//     let b = 1;
//     let row = " ";

//     while(b<=a){
//         row = row + b + " ";
//         b++;
//     }
//     console.log(row);
//     a++;
// }


// Beginner Practice Problems (While Loop in JS)
// 1. Print numbers from 1 to 10
let a = 1;
while (a <= 10){
    console.log(a);
    a = a + 1;
}

// 2. Print even numbers between 1 to 20
let b = 2;
while (b <= 20){
    console.log(b);
    b = b + 2;
}

// 3. Print odd numbers between 1 to 15
let c = 1;
while(c <= 15){
    console.log(c);
    c = c + 2;
}

// 4. Print numbers in reverse from 10 to 1
let d = 10;
while(d >= 1){
    console.log(d);
    d = d - 1;
}

// 5. Print sum of numbers from 1 to 5
let sum = 0;
let e = 1;
while(e <= 5){
    sum = sum + e;
    e = e + 1;
}
console.log("sum of e :" , sum);

// 6. Print table of 15
let f = 1;
while(f <= 10){
    console.log("multiple of 15:", f * 15);
    f = f + 1;
}

// 7. Print squares of numbers from 1 to 10
let g = 1;
while(g <= 10){
    console.log("squares:", g ** 2);
    g = g + 1;
}

// 2nd method squares of numbers from 1 to 10
let h = 1;
while (h <= 10) {
  console.log("new method:" , h * h);
  h++;
}


// 8. Print only numbers divisible by 3 (from 1 to 30)
let i = 1;
while(i <= 30){
    if (i % 3 === 0){
        console.log("Divisible by 3;" , i)
    }
    i = i + 1;
}


// 9. Reverse count and stop when number = 5
let j = 10;
while (j >= 1){
    console.log("aejdkdhwjdwlk", j);
    if(j === 5){
        console.log("stop");
        break;
    }
    j--;
}






