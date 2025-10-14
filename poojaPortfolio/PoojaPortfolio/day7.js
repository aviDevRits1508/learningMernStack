// Sum of all elements in an array
let a1 = [1,2,3,4,5,6,7,8];
let sum1=0;
for (let i=0; i<a1.length; i++){
    sum1 = sum1 + a1[i];
}
console.log("sum of a",sum1)


// Find the index of a given element
let hh = [2,3,4]
console.log(hh.indexOf(4))
console.log(hh.length)


// Calculate the average of all elements in an array
let pp = [1,2,3,4,5]
let sum=0;
for (let i=0; i<pp.length; i++){
    sum= sum + pp[i] 
}
console.log("sum of pp",sum)
let average = sum/pp.length
console.log("average of pp",average)


// Find the maximum element in an array
let a = [30,25,15,10]
max = a[0]
for (let i=0; i<a.length; i++){
    if(a[i]>max){
        max=a[i]
    }
}
console.log(max)

// Find the minimum element in an array
 
 let b= [4,7,69,47]
 min=a[0]
for(let i=1; i<b.length; i++){
    if(b[i]<max){
        min=b[i]
    }  
}
console.log(min)

// Reverse an array (without using .reverse())    

let x = [1,2,3,4,5]
reverse=[]
for(i=x.length-1; i>=0; i--){
    reverse[reverse.length]=x[i]
   
}
console.log("reverse of x",reverse)
