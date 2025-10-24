// for(let i = 1; i <= 2; i++){
//     for(let j = 1; j <= 2; j++){
//         for(let k = 1; k <= 10; k++){
//             console.log("hello world")
//         }
//     }
// }


let count = 0;

for(let i = 1; i <= 5; i++){ 
     console.log(count, "first loop");  
            
    for(let j = 1; j <= 4; j++){     
        console.log(count, "Second loop");  
        for(let k = 1; k <= 3; k++){
            console.log(count, "Third loop");  
            for(let l = 1; l <= 2; l++){ 
            //  console.log("Inside fourth loop, Before increment count value : ", count, "value of i : ", i,  "value of j : ", j,  "value of k : ", k,  "value of l : ", l);  
             count ++;
             console.log("Inside fourth loop, After increment count value : ", count, "value of i : ", i,  "value of j : ", j,  "value of k : ", k,  "value of l : ",l);
            }
        }
    }
}

console.log(count);


// let count = 0;

// for(let i = 0; i < 2; i++){         // Outer loop → 2 times
//     for(let j = 1; j < 2; j++){     // Second loop → 1 time per i
//         for(let k = 1; k < 10; k++){// Third loop → 9 times per j
//             for(let l = 1; l < 10; l++){ // Innermost loop → 9 times per k
//                 count++;
//             }
//             console.log(`k iteration ${k}`, count);
//         }
//     }
// }

// console.log(count);
