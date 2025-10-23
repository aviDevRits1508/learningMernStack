    // let a = new Array(5)

// a[0] = 21;
// a[1] = 22;
// a[2] = 23;
// a[3] = 24;
// a[4] = 25;

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);


// console.log(a.length)

// function printElementOfArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(`element at index ${i} is ${arr[i ] * 2}`)
//     }   
// }

// printElementOfArray(a)


// let aw =new Array(4)
// aw[0]=5;
// aw[1]=6;
// aw[2]=7;
// aw[3]=8;

// console.log(aw (0+1))

// let arr = [1, 2, 3, 4, 5,6];
// let total = arr.reduce((acc, num) =>acc + num);
// console.log(total); 



//array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let size1 = fruits.length
// console.log(size1)


//average of number
// let number = [4,5,6,7,8];
// let total = number.reduce((sum,current)=>sum+current,0);   //reduce for total of array
// let average= total/number.length;

// console.log(average)

//minimum and maximum
// let arr=[10,20,30,40];

// let maxvalue=arr[0];
// let minvalue=arr[0];

// for(let item of arr){
//     if(item>maxvalue){
//         maxvalue=item;
//     if(item<minvalue){
//         minvalue=item;
//     }
// }
    //     }
 
// console.log(minvalue)
// console.log(maxvalue)



//maximum  
// const val1=[10,9,8,7,6];
// let max = val1[0]

// for(let i=1;i<val1.length;i++){
//     if(val1[i] > max){
//         max=val1[i];
//     }
// }
// console .log(max)

//minimum
// const val2=[10,30,80,45];
// let min= val2[0]

// for(let i=1;i>val2;i++){
//     if(val[i]<min){
//         min=val2[i];

//     }
// }
// console.log(min)

//revarse 
// let a=[1,2,3,4,5,6]
// let b=[];

// for(let i=a.length-1;i>=0;i--){
//     b[b.length]=a[i]

// }
// console.log(b)

//array method--------------------------------------------------------------------------------------
//length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let size = fruits.length;
// console.log(size)

//toString-----------------------------------------------------------------------------------------------
// const arr = [1,2,3,4,5,6]
// let myarr = arr.toString
// console.log(myarr)

//index of (posttion)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit)


//push------------------------------------------------------------------------------------------------
// let pireatas = ['luffy','zoro','sanji','ussop']
// pireatas.push ('franky')
// console.log(pireatas)

// //pop------------------------------------------------------------------------------------------------

// let pireat = ['nami','vivi','robin']
// pireat.pop ('vivi')
// console.log(pireat)

// //shift--------------------------------------------------------------------------------------------
// let team7 = ['sai','kakashi','naruto','sasuke','sakura']
// team7.shift()
// console.log(team7)

// //unshift-------------------------------------------------------------------------------------------
// let sanin = ['jiriya','tusade','orchimaru']
// sanin.unshift()
// console.log(sanin)


//concat----------------------------------adding both array-----------------------------------------------------------
// let boy = ['asta', 'yuno' ,'yami']
// let girl = ['sharlet','noyel']

// const both = boy.concat(girl);

// console.log(both)

//copywith
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.copyWithin(2,1);
// console.log(fruits)

//array-flt-------binding subarray----------------------------------------------------------------------
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

//array splice ----------------  adding array and whith postion can deside-----------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)


//

//array search-----------------------------------------------------------------------------------------
//arrray include-------------------------------------------------------------------------------------
// const name1 =['law','bepo','luffy','choper'];
// // name1.includes('bepo');
// console.log(name1.includes('bepo'));



//evenor odd
// const arr = [1,2,3,4,5,6,7,8,9]

// even = 0;
// odd=0
// for(let i=0;i<arr.length;i++){
// if (arr[i] % 2 ==0)
//     even=even+1;

// // }else{(arr[i]%!2==0)
// //     // odd=odd+1;

     
// //  }

// console.log(`even`,even)
// // console.log(odd)
// }


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let even = 0;
// let odd = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {

//     odd++;
//   } else {
//     even++;
//   }
// }

// console.log("Even numbers:", even);
// console.log("Odd numbers:", odd);
   


//positine ,negative ,and zero
// let number = [1, 2, 3, 4 ,5, -2 ,0 , 4]
// let positive=0;
// let negative=0;
// let zero=0;

// for(let i=0;i<number.length;i++){
//     if (number[i]>0){
//         positive++;
//     }else if(number.length[i]<0){
//         negative++;
//     }else{
//         zero++;
//     }

//     }

//     console.log('positive',positive);
//     console.log('negative',negative);

//sort array --------------------------------------------------------------------------------------------
// const lol=[ "luffy","zoro","chopper","sanji","nami"]
// console.log(lol.sort())

//revarse array-----------------------------------------------------------------------------------------
// const lolre=[ "luffy","zoro","nami","sanji","ussop"]
// console.log(lolre.reverse())


// //revarsing and sorting array------------------------------------------------------------------------------
// const lolr=[ "luffy","zoro","nami","sanji","ussop"]
// console.log(lolr .sort().reverse())
// console.log(lolr.reverse().sort())

// //numaric sort --------------accending----------------------------------------------------------------------------
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(`accending`,points)

// //numaric sort ------------------------------dissending--------------------------------------------------
// const pointsd = [40, 100, 1, 5, 25, 10];
// pointsd.sort(function(a, b){return b -a});
// console.log(`dissending`,pointsd)



//sorting randon array -----------------------------------------------------------------------------------
// sor.sort(function(){return 0.5 - Math.random()});
// console.log(sor())


//JavaScript Array Iterations--------------------------------------------------------------------------
// const sor = [20,80,54,78,90]
//for each -------------printing each number in colum--------------------------------------------------- 
// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(function(number){

// console.log(number)
// });


//maping means transforming each number in a array
//JavaScript Array map()-----multiply the  array and doesnot change orignal value------------------------------------------------
// const arrd = [5,4,2,4,1]

// function binary(x){
//     return x  .toString(2);
// }
// const output =arrd.map(binary)
// console.log(output)

//double by map----------------------------------------------------------------------------------------
// const arrdt = [2,4,6,8,10]
// function double(x){
//     return x*2;
// }
// const doub =arrdt.map(double)
// console.log(doub)





//--------------------------------------------------------------------------------------------------------
//cello copy---------------------------------------------------------------------------------------------
// let originalArray = [1, 2, 3, 4];
// let copyArray = [...originalArray];
// console.log(copyArray);
    

//     console.log(originalArray)


  //---------------------------------------------------------------------------------------------------
// let student1 = {
//     name: "Avinash",
//     classNum: 10,
//     marks: {
//         math: 100,
//         science: 100
//     }
// }
// let student2 = { ...student1 };
// student2.name = "John";
// student2.marks.math = 80;

// console.log("Student 1:", student1);
// console.log("Student 2:", student2);

//deep copy---------------------------------------------------------------------------------------------
// let student1 = {
//     name: "Avinash",
//     classNum: 10,
//     marks: {
//         math: 100,
//         science: 100
//     }
// };

// let student2 = JSON.parse(JSON.stringify(student1));
// student2.name = "John";
// student2.marks.math = 80;

// // console.log("Student 1:", student1);
// console.log("Student 2:", student2);


//example 2-----
// let marvel = {
//     name2 : "tony",
//     post : "iron man(tech)",
//     tech:{
//         tech1 : 'edith',
//         tech2 : 'jarvis'
//     }
// }
// let marvel2 = JSON.parse(JSON.stringify(marvel));
// marvel2.name2 = "roger"
// marvel2.tech.tech1="sheld"
// marvel2.post='captan'

// console.log("marvel2:",marvel2)
// console.log(marvel)



//freeze method in object--------------------------------------------------------------------------------
// let student = {
//     name : "luffy",
//     class: "10"
// }
// Object.freeze(student);
// console.log(student)   

//seal method object-------------------------???????????????????------------------------------------------------------------
// let student3 = {
//     name : "naruto",
//     class : "00"
// }
// Object.seal(student3)
// student3.name = "sasukke";
// student3.address = "bangaluru";

// console.log(student3)
// console.log(student3.address)

//keys----------------------------------------------------------------------------------
// let student4 = {
//     name2 : "shikamaru",
//     sname : "nara"
// }
// let keys = Object.keys(student4)
// console.log(keys)

// let values=Object.values(student4)
// console.log(values)

// let entire = Object.entire(student4)
// console.log(entire)  


//------------------------------------------------------------------------------------------------
// let student5 = {
//     name1 : "kiba",
//     class : "10",
//     address :"gujrath",
//     roolnumber : "101",
//     marks:{
//             maths:100,
//             science:100,
//             cs:100
//     }
// };
//     for (let key in student5){
//     console.log(`This is the tech ${key} of the student: ${student5[key]}`);
//     }
// for (let key in student5.marks){
//     console.log(`this is tech ${key} of the student: ${student5.marks[key]}`);
// }


//removing duplicate value using "include function"-----------------------------------------------------------------------    
// let a=[1,2,3,8,4,1,5]
// let b =[];
// // console.log(b.indexOf(a[3]))
// console.log(b.push(a[3]))

// let a=["hello","param"];
// let b=["param"];
// console.log(b.indexOf(a[0]))
// console.log(b.indexOf(0))
// console.log(b.push(a[0]));
// console.log(b)
 
// for(let i=0;i<a.length;i++){
//   if(b.includes(a[i])){

//   }

//     else{
//       b.push(a[i])

//     }
// }
// console.log(b)

let dup1= [];
let arr3 = [1,2,3,2,4,5,6,5,4,3,7,8];
for(let i=0;i<arr3.length;i++){
  if(!dup1.includes(arr3[i])){
    dup1.push(arr3[i]);

  }
}
console.log(dup1)
