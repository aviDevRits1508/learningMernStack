// arry , object , map, filter, reduce, for each, for of, for in
// spred opreators, rest opreators, destructuring, 
//types of function 


// let arr = [1, 2, 3, 4, 5]

// let ele1 = arr[0];

// let len = arr.length

// console.log(len)




// let a = new Array(5)

// a[0] = 21;
// a[1] = 22;
// a[2] = 23;
// a[3] = 24;
// a[4] = 25;

// // console.log(a[0]);
// // console.log(a[1]);
// // console.log(a[2]);
// // console.log(a[3]);
// // console.log(a[4]);


// // console.log(a.length)

// function printElementOfArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(`element at index ${i} is ${arr[i ] * 2}`)
//     }   
// }

// printElementOfArray(a)


// let storeAns 



// let ans = new Array(numbers.length);

// function doubleArrayElements(arr, ans) {  // 2, 4, 6, 8, 5
//     for(let i = 0; i < arr.length; i++){
//         ans[i] = arr[i] * 2;
//     }
//     return ans
// }


// console.log(doubleArrayElements(numbers, ans))


// let numbers = [1, 2, 3, 4, 5, 10, 10];
// let key = 10

// function serch(arr, key){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === key){
//             return i
//         }
//     }
//     return -1
// }

// console.log(serch(numbers, key))

//O of (n2) 

function createMatrix() {
  let matrix = [];
  for (let i = 0; i < 2; i++) {
    matrix[i] = new Array(2).fill(7);
  }
  return matrix;
}

console.log(createMatrix())