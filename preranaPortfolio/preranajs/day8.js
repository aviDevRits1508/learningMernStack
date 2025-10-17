console.log('Good Afternoon')

// Sum of all elements in an array
let num = [1, 2, 3, 4, 15];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

// Find the index of a given element
function findIndex(a){
  let b=[10,30,50,70,90];
  let index = b.indexOf(a);
  console.log(`Index of ${a} is ${index}`);
  
}
findIndex(70)
findIndex(50)
findIndex(20)

// Calculate the average of all elements in an array
let arr = [10, 20, 30, 40, 50];

let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  sum2 += arr[i];
}

const average = sum2 / arr.length;

console.log("Average of sum is:", average);


// Find the maximum element in an array
let arr2 = [15, 8, 22, 3, 42, 7];

let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}

console.log(max);


// Find the minimum element in an array
let arr3 = [16, 8, 20, 3, 49, 7];

let min = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }
}

console.log(min);

// reverse an array without reverse method
let arr4 = [1, 2, 3, 4, 5];
let reverse=[]
for(let i=arr4.length-1;i>=0;i--){
  reverse[reverse.length]=arr4[i]
}
console.log(reverse)

// with reverse method
let arr5 = [1,2,3,4,5];
console.log(arr5.reverse())


// let sum2=[1,2,3,4,5];
// let sum3=[]  
// let j=0;
// for(let i=sum2.length-1;i>=0;i--){
//      sum3[j]=sum2[i];
//      j++
// }
// console.log(sum3);
 
// let sum2=[1,2,3,4,5];
// let sum3=[]  
// let j=0;
// for(let i=sum2.length-1;i>=0;i--){
//      sum3[j]=sum2[i];
//      j++
// }
// console.log(sum3);