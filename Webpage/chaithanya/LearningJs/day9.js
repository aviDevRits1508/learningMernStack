// let count=0;
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 4; j++){    
//         for(let k = 1; k <= 3; k++){
//             for(let l = 1; l <= 2; l++){
//              count=count+1;
             
//             }
//         }
//     }
// }
 
//

// let number= [1,2,3,4,5];
// let ans=new Array(number.length);

// function reversearray(arr,ans){
//     for(let i=1;i<=arr.length;i++){
//         ans[i]=arr[i]*2;
//     }
//     return ans;
// }

// console.log(reversearray(number,ans));

// let num =[1,2,3,4,5];
// let key=3;
// function searcharray(arr,key){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===key){
//             return i;
//         }
//     }
// }

// console.log(searcharray(num,key));

// let arr=[1,2,3,4,5];
// let sum=0;

// function sumofarray(arr){
//     for(i=0;i<arr.length;i++){  //1+3+6+10+15
//         sum=sum+arr[i];
//     }
//     return sum;
// }

// console.log(sumofarray(arr));

//  Minimum number in array
// let arr=[5,4,3,2,1];
// let min=arr[0];

// function minofarray(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     return min;
// }

// console.log(minofarray(arr));

// Maximum number in array
// let arr=[5,4,3,8,1];
// let max=arr[0];

// function maxofarray(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];

//         }  
//     }
//     return max;
// }
//  console.log(maxofarray(arr));

// Reverse an array
// let arr=[1,2,3,4,5];
// let start=0;
// let end=arr.length-1;

// function reversearray(arr){

// }


// Average of an array
// let arr1=[2,7,4,2,0,2,3];
// let sum=0;

// function averageofarray(aar1){
//     for(let i=0;i<arr1.length;i++){
//         sum=sum+arr1[i];
//     }
//        return sum;
// } 

// console.log(averageofarray(arr1));

// Reverse an array
// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr);

// Reverse a String 
// let str="Chaithanya";
// console.log(str.split("").reverse().join(""));

// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed); // Output: [5, 4, 3, 2, 1]

// Find the index of a given element
function searcharray(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i; // index found
        }
    }
    return -1; // not found
}

// let result = searcharray(arr, key);
// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log("Element not found");
// }

   

