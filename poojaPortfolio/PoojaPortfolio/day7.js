// Sum of all elements in an array
// let a1 = [1,2,3,4,5,6,7,8];
// let sum1=0;
// for (let i=0; i<a1.length; i++){
//     sum1 = sum1 + a1[i];
// }
// console.log("sum of a",sum1)


// Find the index of a given element
// let hh = [2,3,4]
// console.log(hh.indexOf(4))
// console.log(hh.length)


// Calculate the average of all elements in an array
// let pp = [1,2,3,4,5]
// let sum=0;
// for (let i=0; i<pp.length; i++){
//     sum= sum + pp[i] 
// }
// console.log("sum of pp",sum)
// let average = sum/pp.length
// console.log("average of pp",average)


// Find the maximum element in an array
// let a = [30,25,15,10]
// max = a[0]
// for (let i=0; i<a.length; i++){
//     if(a[i]>max){
//         max=a[i]
//     }
// }
// console.log(max)

// Find the minimum element in an array
 
//  let b= [4,7,69,47]
//  min=a[0]
// for(let i=1; i<b.length; i++){
//     if(b[i]<max){
//         min=b[i]
//     }  
// }
// console.log(min)

// Reverse an array (without using .reverse())    

// let x = [1,2,3,4,5,6,7]
// reverse=[]
// for(i=x.length-1; i>=0; i--){
//     reverse[reverse.length]=x[i]
   
// }
// console.log("reverse of x",reverse)


////////////built in array  method//////////////////////////////

// //Use push() to add one element to the array
// //w3 ex-1
// const fruits = ["Banana","Orange","Apple","Mango"]
// fruits.push("Kiwi")
// console.log(fruits)
// //ex-2
// let m=[5,6,7]
// m.push(8)
// console.log(m)

// //Use pop to remove last element to the array
// //W3 EX-1
// let fruit=["banana","orange","apple","mango",]
// fruit.pop()
// console.log("adding the last element",fruit)
// //ex-2
// let v=[5,8,9,3]
// v.pop()
// console.log("removing the last value",v)

// //Use shift() to remove the first element
// //w3 ex-1
// const fruts=["banana","orange","apple","mango"]
// fruts.shift()
// console.log("removed initial element",fruts)
// //ex-2
// let n=[5,56,78,9]
// n.shift()
// console.log("removed initial value",n)

// //Use unshift() to add an element at the beginning of array
// //w3 ex-1
// let frt=["banana","orange","apple","mango"]
// frt.unshift("lemon")
// console.log("adding new element to the beginning",frt)
// //ex-2
// let o=[2,3,5,6]
// o.unshift(6)
// console.log("adding new element in beginning",o)

// // create array of 5 numbers and print length of an array
// //w3 ex-
// const ft=["banana","orange","apple","mango"]
// let size= ft.length
// console.log("length of ft", size)
// //ex-2
// let array=[1,2,3,4,5]
// let size1=array.length
// console.log("length of an array",size1)

// //Use includes() to check if an array contains specific value and us esort()
// //w3 ex-1
// let fff=["banana","orange","apple","mango"]
// let gg=fff.includes("apple")
// console.log(gg)
// // //ex-2
// let d=[2,5,7,0]
// let dd=d.includes(3)
// console.log(dd)
// console.log(d.sort())

// //Use slice() to copy only part of array
// //w3 ex-1
// const jk=["banana","orange","apple","mango"]
// let ad=jk.slice(3)
// console.log("slicing the element from starting element to third",ad)
// //ex-2
// let z=["car","jeep","ship","truck"]
// let zz= z.slice(2)
// console.log("slicing element from the start",zz)

// //Use splice() to remove & add new element in the middle of an array
// //w3 ex-1
// const months=["jan","feb","mar","apr"]
// console.log("original array",months)
// let newmonth=months.splice(0,2)
// console.log("new array",newmonth)
// //ex-2
// let cc=["facebbok","instagram","telegram","snapchat"]
// console.log(cc.splice(2,2))

// // Use tospliced()
// //ex-1
// let fd=["monday","tuesday","wednesday"]
// console.log(fd.toSpliced(1,1))

// //Use concat to merge two arrays
// //w3 ex-1
// let arr1=["emil","tobias","linus"]
// let ar=arr1.concat("peter")
// console.log("merging element",ar)
// //ex-2
// let s=[11,13,14,16]
// let j=[20,34,65,70]
// console.log("merging",s.concat(j))
// //ex-3
// let f=["a","b"]
// let k=["c","d"]
// let u=[...f,...k]
// console.log("spreading",u)

//array flat(concatinating with the sub array)
//w3 ex-1
// const myarr=[[1,2],[3,4],[5,6]]
// mynew=myarr.flat()
// console.log("concatinating withsub array",mynew)
// //ex-2
// let abc = [["a","b"],["c","d"],["e","f"]]
// console.log(abc.flat())

// /Use tostring to print array into string
//w3 ex-1
// let vv=["banana","orange","apple","mango"]
// let list =vv.toString()
// console.log("return the array as comma seperated string",list)
// //ex-2
// let Dd=[10,20,15,35]
// let newdd= Dd.toString()
// console.log("return the array as comma seperated string",newdd)

// //array at
// //w3 ex-1
// let as=["banana","orange","apple","mango"]
// let zn= as.at(3)
// console.log("index of 3 is",zn)
// let hi=[1,4,5,7]
// let gs=hi.at(0)
// console.log("index of 0",gs)

// //array delete
// //w3 ex-1
// let value=["banana","orange","apple","mango"]
// delete value[2]
// console.log(value)
// //ex2
// let num=[1,2,3,4]
// delete num[3]
// console.log(num)

// //Array join
// //w3 ex-1
// let mn=["banana","oarange","apple","mango"]
// let st=mn.join("*")
// console.log("joining the element",st)
// //ex-2
// let hhh=[1,2,3,4,5]
// let vj=hhh.join("+")
// console.log(vj)

//copy within
//ex-1
// let yyy=["sugar","rice","wheat","peanut"]
// console.log(yyy.copyWithin(0,3))



//----------------------------------------//js array sort//-----------------------------------------
// //reverse method
//w3 ex-1
// const fts=["banana","orange","apple","mango"]
// let name=fts.reverse()
// console.log("reversing the fts",name)
// //ex-2
// let jj=[1,2,3,5]
// console.log("reverse the array",jj.reverse())

// //use sort to arrange elements in a alphabetical manner
// let nm=[3,5,2,9]
// let sorted=nm.sort()
// console.log("sorted in alphabeticalmanner",sorted)
// console.log("modifies the original array",nm)

// //array tosorted
// //w3 ex-1
// const mnths=["jan","feb","mar","apr"]
// let mnt=mnths.toSorted()
// console.log(mnt)
// //ex-2
// const gh=["amit","chetan","bhavya","diksha"]
// let hj=gh.toSorted()
// console.log("changes the original array",hj)
// console.log("it will not modifies the original array",gh)

// //array sorting objects
// //w3 ex-1
// const cars=[
//     {type:"volvo",year:2016},
//     {type:"saab",year:2001},
//     {type:"BMW",year:2010 } 
//        ];
// let vehicles=cars.sort((a,b)=>b-a)
// console.log(vehicles)
// //ex-2
// let students=[
//     {name:"divya",marks:89},
//     {name:"disha",marks:90},
//     {name:"manasvi",marks:75}
// ];
// let stds=students.sort((a,b)=>a-b)
// console.log(stds)

// //numeric sort
// //ex-1
// let num=[1,3,65,22,23]
// let values=num.sort((a,b)=>a-b)
// console.log("sorted numerically",values)

//Array iteration method//////////////////////////////////////
// Array map
// //ex-1
// let cv=[56,65,7,3,22]
// let ans=cv.map(function(cv){
//     return cv*2
// })
// console.log("doubles each element",ans)

// //flat map
// //ex-1
// let line=[1,7,2]
// let dp=line.flatMap(num=>[num,num*2])
// console.log(dp)



////////////////////////////////////////////////////////////////////////////////////////////
// Count Even and Odd Numbers
// let pp=[1, 2, 3, 4, 5, 6]
// let even=0
// let odd=0
// for(let i=0; i<pp.length; i++)
//     if (pp[i]%2==0){
//         even++  
//     }else{
//         odd++    
//     }   
//     console.log("count of even numbers",even)
//     console.log("count of odd numbers",odd)

    // Count Positive, Negative, and Zero Elements

// let gg=[1, -2, 0, 4, -5, 0]
// let positive=0
// let negative=0
// let zero=0
// for (i=0; i<gg.length; i++){
//     if(gg[i]>0){
//         positive++
//     }else if (gg[i]<0) {
//         negative++
//     } else {
//      zero++
        
//     }{

//     }
// }
// console.log("positive value",positive)
// console.log("negative value",negative)
// console.log("zero value",zero)

// Compare Elements of Two Arrays
// let A = [1, 2, 3]
// let B = [1, 4, 3]
// for (i=0; i<A.length; i++){
//     if(A[i]==B[i]){
//        console.log("same")  
//     }else{
//      console.log("different")
//     }
// }
   
//   Find Grade Based on Average Marks  
// let d=[85, 78, 92, 88]
// let sum=0
// let grade;

// for(i=0; i<d.length;i++){
//    sum=sum+d[i] 
// }
// let average = sum/d.length
// if(average>90){
//     grade="A";
// }else if(average>=80){
//    grade="B";
// }else if(average>=70){
//    grade="C";
// }else if(average>=60){
//     grade-"D";
// }else{
//     grade="F"
// }
// console.log("sum of d",sum)  
// console.log("average of d",average)  
// console.log("grade",grade)
 

// // Second Largest Element
// let xyz=[10, 20, 5, 30, 25]
//   xyz.sort((a,b)=>b-a);
// let SLnumber=xyz[1]
//   console.log(SLnumber) 


// Remove Duplicates from Sorted Array
let cc=[1, 1, 2, 2, 3]
let empty=[]
for(i=0; i<cc.length; i++){
if(empty.indexOf(cc[i])==-1){
    empty.push(cc[i])
}else{
    "false"
}
}
console.log(empty)

