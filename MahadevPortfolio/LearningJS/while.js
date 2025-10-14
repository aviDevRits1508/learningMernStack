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
// let a = 1;
// while (a <= 10){
//     console.log(a);
//     a = a + 1;
// }

// 2. Print even numbers between 1 to 20
// let b = 2;
// while (b <= 20){
//     console.log(b);
//     b = b + 2;
// }

// 3. Print odd numbers between 1 to 15
// let c = 1;
// while(c <= 15){
//     console.log(c);
//     c = c + 2;
// }

// 4. Print numbers in reverse from 10 to 1
// let d = 10;
// while(d >= 1){
//     console.log(d);
//     d = d - 1;
// }

// 5. Print sum of numbers from 1 to 5
// let sum = 0;
// let e = 1;
// while(e <= 5){
//     sum = sum + e;
//     e = e + 1;
// }
// console.log("sum of e :" , sum);

// 6. Print table of 15
// let f = 1;
// while(f <= 10){
//     console.log("multiple of 15:", f * 15);
//     f = f + 1;
// }

// 7. Print squares of numbers from 1 to 10
// let g = 1;
// while(g <= 10){
//     console.log("squares:", g ** 2);
//     g = g + 1;
// }

// 2nd method squares of numbers from 1 to 10
// let h = 1;
// while (h <= 10) {
//   console.log("new method:" , h * h);
//   h++;
// }


// 8. Print only numbers divisible by 3 (from 1 to 30)
// let i = 1;
// while(i <= 30){
//     if (i % 3 === 0){
//         console.log("Divisible by 3;" , i)
//     }
//     i = i + 1;
// }


// 9. Reverse count and stop when number = 5
// let j = 10;
// while (j >= 1){
//     console.log("reverse", j);
//     if(j === 5){
//         console.log("stop");
//         break;
//     }
//     j--;
// }


// 14th Oct 2025 
// 1. Print star triangle pattern
// *
// * *
// * * *
// * * * *
let a = 1;
while (a <= 4){
    let row = " ";
    let b = 1;
    while (b <= a){
        row = row + "* ";
        b = b + 1;
    }
    console.log(row);
    a++;
}


// 2. Print number triangle
// 1
// 1 2
// 1 2 3
// 1 2 3 4
let c = 1;
while(c <= 4){
    row = " ";

    let d = 1;
    while(d <= c){
        row = row  + d + " ";
        d = d + 1;
    }
    console.log(row);
    c = c + 1;
}


// 3. Print same number in each row
// 1
// 2 2
// 3 3 3
// 4 4 4 4
let e = 1;
while (e <= 4){
    row = " ";

    let f = 1;
    while(f <= e){
        row = row + e + " ";
        f = f + 1;
    }
    console.log(row);
    e = e + 1;
}


// 4. Print reverse star pattern
// * * * *
// * * *
// * *
// *
let g = 4;
while(g >= 1){
    row = " ";

    h = 1;
    while(h <= g){
        row = row + "* ";
        h = h + 1;
    }
    console.log(row);
    g = g - 1;
}


// 5. Print number pyramid
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let i = 1;
let num = 1;

while(i <= 4){
    let row = " ";

    let j = 1;
    while(j <= i){
        row = row + num + " ";
        num = num + 1;
        j = j + 1;
    }
    console.log(row);
    i = i + 1;
}


// 6. Print right-angled pattern with spaces
//       *
//     * *
//   * * *
// * * * *
let k = 1;
while(k <= 4){
    row = "";

    let l = 1;
    while(l <= 4 - k){
        row = row + "  ";
        l = l + 1;
    }

    let s = 1;
    while(s <= k){
        row = row + "* ";
        s = s + 1;
    }
    console.log(row);
    k = k + 1;
}

// for (let a = 1; a <= 4; a++){
//     row = " ";

//     for (let s = 1; s <= 4 - a; s++){
//         row = row + "  ";
//     }

//     for (let b = 1; b <= a; b++){
//         row = row + "* ";
//     }
//     console.log(row);
// }

// 7. Print square pattern of stars
// * * * *
// * * * *
// * * * *
// * * * *
let m = 1;
while(m <= 4){
    row = "";

    let n = 1;
    while(n <= 4){
        row = row + "* ";
        n = n + 1;
    }
    console.log(row);
    m = m + 1;
}


// 8. Print multiplication table (1 to 5)    
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 10 = 50   
for (let t = 1; t <= 5; t++){

    for (let u = 1; u <= 10; u++){
        
        console.log(`${t} x ${u} = ${t * u}`);
    }
}                             


// 9. Print pattern of increasing letters     
// A
// A B
// A B C
// A B C D
let o = 1;
while(o <= 4){
    row = "";

    let p = 1;
    while(p <= o){
        row = row + String.fromCharCode(65 + p - 1) + " ";
        p++;
    }
    console.log(row);
    o++;                                   
}


// 10. Print pattern of decreasing numbers
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
let q = 5;
while(q >= 1){
    let r = q;
    row = "";

    while(r >= 1){
        row = row +  r + " ";
        r = r - 1;
    }
    console.log(row);
    q--;
}

for (let op = 5; op >= 1; op--){
    row = "";
    for (let pq = op; pq >= 1; pq--){
        row = row + pq + " "
    }
    console.log(row);
}

let z = "A"
console.log("A".charCodeAt(0));

for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i) + " = " + i);
}
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i) + " = " + i);
}






















