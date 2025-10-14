
// // 1. Uppercase Conversion
// let str1 = "hello world";
// console.log("Uppercase:", str1.toUpperCase());

// // 2. Lowercase Conversion
// let str2 = "HELLO WORLD";
// console.log("Lowercase:", str2.toLowerCase());

// // 3. Find Word in Sentence
// str1="my name is prajwal"
// console.log(str1.includes("prajwal"))

// // 4. Find Word Position
// let sentence1 = "Hello world";
// console.log("Position of 'world':", sentence1.indexOf("world")); 

// // 5. Extract Substring
// let lang = "JavaScript";
// console.log("Extracted Substring:", lang.slice(4));
// function slice(a){
//     console.log(a.slice(4,10))
// }
// slice("javascript")

// // 6. Replace a Word
// let nameStr = "My name is John";
// console.log("After Replace:", nameStr.replace("John", "Prajwal"));

// // 7. Count String Length
// let message = "I love coding";
// console.log("Length:", message.length);

// // 8. Combine Two Strings
// let str3 = "Hello";
// let str4 = "World";
// console.log("Combined:",str3.concat(" ",str4));

// // 9. Check Start or End Word
// let str5 = "Hello JavaScript";
// console.log("Starts with 'Hello':", str5.slice(0,5));
// console.log("Ends with 'Script':", str5.slice(10,16));

// // 10. Reverse a String
// function reverseString(str) {
//    console.log(str.split("").reverse().join(""));
// }
// reverseString("Prajwal")



// let num=0;
// for(i=0;i<=10;i++){
//     for(j=0;j<=10;j++)
//         num++;

// }
// console.log(num)



// // 1. Uppercase Conversion
// let str1 = "hello world";
// console.log("Uppercase:", str1.toUpperCase());

// // 2. Lowercase Conversion
// let str2 = "HELLO WORLD";
// console.log("Lowercase:", str2.toLowerCase());

// // 3. Find Word in Sentence
// str1="my name is prajwal"
// console.log(str1.includes("prajwal"))

// // 4. Find Word Position
// let sentence1 = "Hello world";
// console.log("Position of 'world':", sentence1.indexOf("world")); 

// // 5. Extract Substring
// let lang = "JavaScript";
// console.log("Extracted Substring:", lang.slice(4));
// function slice(a){
//     console.log(a.slice(4,10))
// }
// slice("javascript")

// // 6. Replace a Word
// let nameStr = "My name is John";
// console.log("After Replace:", nameStr.replace("John", "Prajwal"));

// // 7. Count String Length
// let message = "I love coding";
// console.log("Length:", message.length);

// // 8. Combine Two Strings
// let str3 = "Hello";
// let str4 = "World";
// console.log("Combined:",str3.concat(" ",str4));

// // 9. Check Start or End Word
// let str5 = "Hello JavaScript";
// console.log("Starts with 'Hello':", str5.slice(0,5));
// console.log("Ends with 'Script':", str5.slice(10,16));

// 10. Reverse a String
function reverseString(str) {
   console.log(str.split("").reverse().join(""));
}
reverseString("Prajwal")

// let count = 0;
// for(let i = 1; i <= 2; i++){
//     for(let j = 1; j <= 2; j++){
//         for(let k = 1; k <= 10; k++){
//            for(let l = 1; l <= 10; l++){
//             let it = 0;
//             while(it < 10){
//                 count++
//                 it++
//             }
//            }
//         }
//     }
// }
// console.log(count);




// let z=1;
// while(z<=1){
//     console.log("!")
//     z++;

// }                                                                                     o

  
// let m=1;
// while(m<=5){
//     let row=" ";
//     let j=1;
//     while(j<=m){
//         row+=j+" ";       
//         j++
//     }
//     m++;                                                                                                                                                            
//     console.log(row)
// }



let y = 0;
while (y < 5) {
    let row = "";
    let num = 5;

    while (num > y) {
        row += num+" ";
        num--;
    }

    console.log(row);
    y++;
}

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


let i = 1;
while (i <= 4) {
    let j = 1;
    let line = "";
    while (j <= 4) {
        line += j + " ";
        j++;
    }
    console.log(line.trim());
    i++;
}


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


let a = 1;
let num = 1;
while (a <= 5) {
    let b = 1;
    let row = "";
    while (b <= a) {
        row += num + " ";
        num++;
        b++;
    }
    console.log(row.trim());
    a++;
}

// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1

let x = 1;
while (x <= 2) {
    let y = 10;
    let row = "";
    while (y >= 1) {
        row += y + " ";
        y--;
    }
    console.log(row.trim());
    x++;
}


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let m = 5;
while (m >= 1) {
    let n = 1;
    let line = "";
    while (n <= m) {
        line += n + " ";
        n++;
    }
    console.log(line.trim());
    m--;
}








 



