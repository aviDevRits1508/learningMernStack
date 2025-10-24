
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

// //  Get all students from Bangalore.
// let list= students.filter((a) => a.city==="Bangalore")
// console.log("students from bangalore",list)


// // Get all students who have grade "A".
// let result=students.filter((p) => p.grade==="A")
// console.log("grade A of students",result)
   

// // Get all students with fees less than 10,000
// let fees=students.filter((x) => x.fees<10000)
// console.log("students fees less than 10000",fees)


// // Get all students whose age is above 21
// let studentage=students.filter((y) => y.age>21)
// console.log("student age above 21",studentage)


// // // Get all students from Mumbai with grade "B".
// let both=students.filter((b) => b.city==="Mumbai" && b.grade==="B")
// console.log("all students from Mumbai with grade B",both)


// // Get all students who are grade “A” and pay fees more than 10,000
// let gra=students.filter((k) => k.grade==="A" && k.fees>10000)
// console.log("all students who are grade “A” and pay fees more than 10,000",gra)


// // Get all students who are not from Delhi
// let not=students.filter((d) =>d.city!="Delhi")
// console.log("all students who are not from Delhi",not)


// // Get all students with grade “C” and fees less than 6000.
// let gradec= students.filter((g) =>g.grade==="C" && g.fees<6000 )
// console.log(" all students with grade “C” and fees less than 6000",gradec)


// // Get all students whose name starts with “R”.
// let start=students.filter((o) => o.name.startsWith("R"))
// console.log("all students whose name starts with R",start)


// // Get all students who are either from Bangalore or Pune.
// let eitheror=students.filter((z) => z.city==="Bangalore" || z.city==="Pune")
// console.log( "all students who are either from Bangalore or Pune",eitheror)


// // Get only the names of students whose fees are more than 9000
// let onlynames=students.filter((r) => r.fees>9000).map((r) =>r.name)
// console.log(" names of students whose fees are more than 9000",onlynames)


// // Get an array of names of “A” grade students
// let array=students.filter((d) => d.grade==="A").map((d) => d.name)
// console.log("array of names of “A” grade students",array)


// // Get an array of cities where students have grade “B”.
// let cityarray=students.filter((l) => l.grade==="B").map((l) => l.city)
// console.log("array of cities where students have grade B", cityarray)


// // Get the names and fees of students from Bangalore.
// let namefee= students.filter((jj) => jj.city==="Bangalore").map((jj) =>`${jj.name} ${jj.fees}`)
// console.log("names and fees of students from Bangalore",namefee)


// // Create an array of strings like "Avinash - A - 12000" for all students.
// let strings=students.map((w) => `${w.name} ${w.grade} ${w.fees}`)
// console.log("array of strings like Avinash -A- 12000 for all students",strings)



/////////////////////////////////////////reduce method///////////////////////////////////////////////
// Sum of All Numbers
let input= [1, 2, 3, 4]
let sum= input.reduce((sum,ele) =>sum + ele,0)
console.log(sum)

// Product of All Numbers
values= [1, 2, 3, 4]
let product=values.reduce((mul,index) =>mul * index,1)
console.log(product)


// Find the Maximum Number
let numbers= [3, 7, 2, 9, 4]
let maximum=Math.max(...numbers)
console.log(maximum)


// Find the Minimum Number
let num= [3, 7, 2, 9, 4]
let minimum=Math.min(...numbers)
console.log(minimum)



////////////////////////////////////////////////////////////////
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


// Print only the names of all students using forEach().
students.forEach(student => {
  console.log(student.name)
});


// Create a new array containing only students’ roll numbers using map()
let rollnum= students.map((h) => h.rollNumber)
console.log("array containing only students roll numbers",rollnum)


// Find the total marks of all students using reduce()
let totalmarks=students.reduce((total,student) => total+student.testMarks, 0)
console.log("total marks of all students", totalmarks)


// Find the average marks of all students using reduce()
let average = students.reduce((total,student) => total+student.testMarks,0)/students.length
console.log(average)


// Using forEach(), print:
// Avinash scored 8 marksRamesh scored 12 marksSuresh scored 9 marks 
students.forEach((a) => {
  console.log(`${a.name} scored ${a.testMarks}`)
})


// Using map(), return an array of objects with a new key result:
// (Assume passing marks = 10)
// [
//   { name: "avinash", result: "fail" },
//   { name: "ramesh", result: "pass" },
//   { name: "suresh", result: "fail" }
// ]
// // 
   let newkey=students.map(a => {
    return {...a,results:a.testMarks>=10? "pass":"fail"}})
  console.log(newkey)


  // Create a new array where each student’s testMarks are increased by 5 (without modifying the original array).
//  let increasedmarks=students.map((v) =>v.testMarks + 5)
//   console.log(increasedmarks)
//  console.log(students.map((v) =>v.testMarks))


// //  Find the highest testMarks using reduce()
// let highest=students.reduce((max,n) => {
//      return n.testMarks>max? n.testMarks:max},0)
// console.log(highest)


// Find the lowest testMarks using reduce()
let lowest=students.reduce((min,v) =>{
  return v.testMarks<max? v.testMarks:min
})
