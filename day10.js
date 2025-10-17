// sum  of all element
let number =[10,20,30,50];
let sum=0;
for(let i=0;i<number.length;i++){
    sum=sum+number[i];
}
console.log(`sum of all element`,sum)


//find the maximum element in an array
 let number1=[20,59,90,45];
 let max=number1[0];
 for(let i=1;i<number1.length;i++){
    if(number1[i]>max){
      max=number1[i];          
    }
 }
console.log(`maximum element`,max)


//find the minimum element in an array
let number2=[20,59,90,45];
let min=number2[0];
for(let i=1;i<number2.length;i++){
  if(number2[i]<min){
    min=number2[i];
  }
}
console.log(`minimum element`,min)


//Revers an array
let a=[1,2,3,4,5,6];
let b=[];
for(let i=a.length-1; i>=0; i--){
  b[b.length]=a[i]

}
console.log(`revers elements`,b);


//find the index of given element
let a1=[1,2,3,4,5,6];
let max1=a[0];
for(let i=1; i<a1.length; i++){
  if(a1[i]>max1){
    max1=a1[i]
  }
}
console.log(`index of element1`,max1)


//calaculate the average of all elements in an array
let arr=[10,20,30,40,50];
let sum1=0;
for(let i=0; i<arr.length; i++){
  sum1=sum1+arr[i];
}
let average = sum/arr.length;
console.log(`average of all elements`,average);

