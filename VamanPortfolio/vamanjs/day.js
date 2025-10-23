

// // a > b peform subtraction else perform addition

// let a=50;
// let b=60;

// if (a>b){
//     console.log(a-b)
// }else{
//     console.log(a+b)
// }

// // comparision

// // Not equal to

// let x=10;
// let y=20;

// let z=(x!=y)
// console.log(z)

// // double equal

// let c=10;
// let d=20;

// console.log(c == d)

// // trible equal 

// let f='10';
// let h='20';

// console.log(f === h)

// // greater 

// let j=30;
// let k=20;

// console.log(j>k)

// // lessthan

// let m=30;
// let v=20;

// console.log(m<v)





// array methods

// 1 push add element 

// let fruits=["apple" , "banana" , "grapes" ];
// fruits.push("mango");
// console.log(fruits);

// 2 pop  removes last element

// let fruits=["apple" , "banana" , "grapes" ];
// fruits.pop();
// console.log(fruits);

// 3 shift removes fist element


// 6 Array at

// let car1=["jeep" ,"thar" , "xuv700" ,"maruti" , "alto"];
// console.log(car1.at(2));

// // 7 Array delete removes element not space

// let fruits=["apple" , "banana" , "grapes" ];
// delete fruits[1];
// console.log(fruits);

// 8 Array splice removes space and element

// let fruit1=["apple" , "banana" , "grapes" ];
//  fruit1.splice(1 , 1);
// console.log(fruit1);

// // 9 Array concat

// let car2=["jeep" ,"thar" , "xuv700"];
// let addcars=["maruti" , "alto" , "swift"];
// let allcars=car2.concat(addcars);
// console.log(allcars);

// // 10 Array slice

// let cars=["jeep" ,"thar" , "xuv700" ,"maruti" , "alto" , "swift"];
// let bike=cars.slice(3);
// console.log(bike);

// let cars1=["jeep" ,"thar" , "xuv700" ,"maruti" , "alto" , "swift"];
// let bike1=cars1.slice(2,5);
// console.log(bike1);

// // odd & even numbers

// let numbers=[1,2,3,4,5,6];
// let evencount=0;
// let oddcount=0;

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         evencount++;
//     }else{
//         oddcount++;
//     }
// }

// console.log(evencount,oddcount);


// // Second Largest Element

// let array=[10,20,5,30,25];
// array.sort((a,b)=>b-a);

// console.log(array[1]);



// objects

// let person={
//     name:"vaman",
//     age: "24",
//     city: "banglore"

// }

// console.log(person);
// console.log(person["age"]);


// // shallowcopy

// let person1={
//     name:"vaman",
//     age: "24",
//     city: "banglore",
//     address:{
//         city:"bidar",
//     }
// }

// let shallowcopy={...person};

// shallowcopy.name="patil";

// // shallowcopy.address.city="humnabad";

// console.log(person);
// console.log(shallowcopy);


// Array indexof (it return the index value or array )

// let fruits=["apple" , "mango" , "banana" , "grapes"];
// console.log(fruits.indexOf("mango"));


// Array lastindexof (it returns last index in an array or if the element is not found it return -1)

// let number=[10, 20, 30, 20, 40];
// console.log(number.lastIndexOf(20));

// let arr=[1, 2, 3, 4, 5];
// console.log(arr.lastIndexOf(6));


// Array includes (this method checks whether an array conyains or not If exists returns true, or false)


// let fruits=["apple" , "mango" , "banana" , "grapes"];
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("kiwi"));


// array reverse ( It is used to reverse the element in array)

// let number=[1,2,3,4,5,6];
// number.reverse()
// console.log(number);

// let fruits=["apple" , "mango" , "banana" , "grapes"];
// fruits.reverse()
// console.log(fruits);



// Math.min( This method is used to find the smallest number)

// let minNumber= Math.min(1,2,3,4,5,6,);
// console.log(minNumber);

// let minNumber1= Math.min(10,20,30,40);
// console.log(minNumber1);


// Math.max( This method is used to find the largest number)

// let minNumber1= Math.max(10,20,30,40);
// console.log(minNumber1);



// let cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// cars.sort((a,b)=>a-b);
// console.log(cars);


// // problem

// let student={
//   name:"vaman patil",
//   class:"12",
//   address:"banglore",
//   marks:{
//     maths:90,
//     social:95,
//     science:85,
//     english:90,
//     kannada:90

//   }
// };

// for(let key in student){
// console.log("this is the $(key) of the student", student[key]);
// }


// Array Iteration Methods

// 1.for each (executes a function for each element : no return)

// let number=[10,20,30,40];
// number.forEach((num)=>{
//   console.log(num);
// })


// 2.map (creates a new array by applying a function to each element)

// let num=[1,2,3,4,5];
// let mul=num.map((n)=>n*2);
// console.log(mul);


// 3.filter(return a new array with Element that pass by a condition)

// let number=[10,20,30,40,50];
// let above30=number.filter((n)=>n>20);
// console.log(above30);


// find dublictes

// let a=[1,1,2,2,3,3,4];
// let b=[];

// for (let i=0; i<a.length; i++){
//   if(b.indexOf(a[i])===-1){
//     b.push(a[i]);
//   }
// }

// console.log(b);



// filters



// let students = [
//   { name: "Avinash", age: 20, grade: "A", city: "Bangalore", fees: 12000 },
//   { name: "Ramesh", age: 22, grade: "B", city: "Mumbai", fees: 8000 },
//   { name: "Suresh", age: 19, grade: "C", city: "Delhi", fees: 5000 },
//   { name: "Mahesh", age: 21, grade: "A", city: "Bangalore", fees: 15000 },
//   { name: "Naresh", age: 23, grade: "B", city: "Hyderabad", fees: 9000 },
//   { name: "Divya", age: 20, grade: "A", city: "Pune", fees: 11000 },
//   { name: "Priya", age: 19, grade: "C", city: "Bangalore", fees: 4000 },
//   { name: "Ravi", age: 22, grade: "B", city: "Delhi", fees: 9500 },
//   { name: "Tejas", age: 18, grade: "A", city: "Mumbai", fees: 10000 },
// ];


// 1. Students from Bangalore

// let bangaloreStudents = students.filter(student => student.city === "Bangalore");
// console.log(bangaloreStudents);

// 2. Students with grade "A"

// let gradeAStudents = students.filter(student => student.grade === "A");
// console.log(gradeAStudents);

// 3. Students with fees less than 10,000

// let FeeStudents = students.filter(student => student.fees < 10000);
// console.log(FeeStudents);


// 4. Students with age above 21

// let ageStudents = students.filter(student => student.age > 21);
// console.log(ageStudents);


// 5. Students from Mumbai with grade "B"

// let mumbaiGradeBStudents = students.filter(student => student.city === "Mumbai" && student.grade === "B");
// console.log(mumbaiGradeBStudents);



// 1. Get all students who are grade “A” and pay fees more than 10,000.

// let gradeAHighFeeStudents = students.filter(student => student.grade === "A" && student.fees > 10000);
// console.log(gradeAHighFeeStudents);


// 2. Get all students who are not from Delhi.

// let notFromDelhiStudents = students.filter(student => student.city !== "Delhi");
// console.log(notFromDelhiStudents);


// 3. Get all students with grade “C” and fees less than 6000.

// let gradeCLowFeeStudents = students.filter(student => student.grade === "C" && student.fees < 6000);
// console.log(gradeCLowFeeStudents);


// 4. Get all students whose name starts with “R”.

// let nameStartsWithR = students.filter(student => student.name.startsWith("R"));
// console.log(nameStartsWithR);


// 5. Get all students who are either from Bangalore or Pune.

// let bangalorePuneStudents = students.filter(student => student.city === "Bangalore"  | student.city=== "Pune");
// console.log(bangalorePuneStudents);



// 1. Get only the names of students whose fees are more than 9000.

// let highFeeNames = students.filter(student => student.fees > 9000)
// .map(student => student.name);
// console.log(highFeeNames);


// 2. Get an array of names of “A” grade students.

// let aGradeNames = students.filter(student => student.grade === "A")
// .map(student => student.name);
// console.log(aGradeNames);



// 1. Sum of All Numbers

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum); 


// 2 .Product of All Numbers

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((a, b) => a * b);
// console.log(sum); 


// 3 Find the Maximum Number

// let num = [3, 7, 2, 9, 4]

//  let max = num.reduce((a , b) => Math.max(a , b))
//  console.log(max);


// 4 Find the Minimum Number

// let num = [3, 7, 2, 9, 4]

//  let min = num.reduce((a , b) => Math.min(a , b))
//  console.log(min);



// 23/10/2025 assignment


let students = [
  {
    name: "Avinash",
    class: "10",
    address: "Bangalore",
    rollNumber: 1,
    testMarks: 8
  },
  {
    name: "Ramesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 2,
    testMarks: 12
  },
  {
    name: "Suresh",
    class: "10",
    address: "Bangalore",
    rollNumber: 3,
    testMarks: 9
  },
  {
    name: "Mahesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 4,
    testMarks: 15
  },
  {
    name: "Lokesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 5,
    testMarks: 7
  }
];


// 1 Print only the names of all students using forEach()

students.forEach(student => {
console.log(student.name);
});


// 2 Create a new array containing only students roll numbers using map()

let rollNumbers = students.map(student => student.rollNumber);
console.log(rollNumbers);


// 3 Create a new array where each student’s testMarks are increased by 5

let increasedMarks = students.map(student =>student.testMarks + 5)
console.log(increasedMarks);

// 4 Find the total marks of all students using reduce()

let totalMarks = students.reduce((sum, student) => sum + student.testMarks , 0);
console.log(totalMarks);


// 5 Find the average marks of all students using reduce()

let averageMarks = students.reduce((sum, student) => sum + student.testMarks  / 5)
console.log(averageMarks);


// 6 Find the highest testMarks using reduce().

let highestMarks = students.reduce((max, student) => 
student.testMarks > max ? student.testMarks : max,0);

console.log(highestMarks); 


// 7 Find lowest testMarks  using reduce().


let lowestMarks = students.reduce((min, student) => 
student.testMarks < min ? student.testMarks : min, students[0].testMarks);

console.log(lowestMarks); 


// 8 Count how many students passed and how many failed using reduce().

let passed = 0;
let failed = 0;

for (let student of students) {
  if (student.testMarks >= 10) {
    passed++;
  } else {
    failed++;
  }
}

console.log( passed, failed );




