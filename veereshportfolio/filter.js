// let arr = [20,30,40,50,60,70,80]
// let filtred = arr.filter((a) => a>50)
// console.log(filtred)

///--------------------------------------------------------------------------------------------------------------------

// let clouths=[
//     {
//         brand :"puma",
//         color :"white",
//         size :"xl",
//         price:2000
//     },
//       {
//         brand :"zara",
//         color :"red",
//         size :"xxl",
//         price:2200
//     },
//       {
//         brand :"addidas",
//         color :"white",
//         size :"m",
//         price:4000
//     },
//       {
//         brand :"nikki",
//         color :"white",
//         size :"xl",
//         price:2000
//     },
//      {
//         brand :"puma",
//         color :"white",
//         size :"xl",
//         price:2000
//     }
// ]

// //filtaring with brand name
// let puma = clouths.filter((c) => c.brand == "puma")
// console.log(puma)

// //filtaring with size
// let size = clouths.filter((c) => c.size==="xl")
// console.log(size)


// //filtering with size and brand name
// let size1 = clouths.filter((c) => c.size ==="xl" && c.brand==="puma")
// console.log(size1)

// let priceless = clouths.filter((c) =>  c.price<3000).map((c)=> c.brand)
// console.log(priceless)

//-----------------------------------------------------------------------------------------------------------------------
let students = [
  { name: "Avinash", age: 20, grade: "A", city: "Bangalore", fees: 12000 },
  { name: "Ramesh", age: 22, grade: "B", city: "Mumbai", fees: 8000 },
  { name: "Suresh", age: 19, grade: "C", city: "Delhi", fees: 5000 },
  { name: "Mahesh", age: 21, grade: "A", city: "Bangalore", fees: 15000 },
  { name: "Naresh", age: 23, grade: "B", city: "Hyderabad", fees: 9000 },
  { name: "Divya", age: 20, grade: "A", city: "Pune", fees: 11000 },
  { name: "Priya", age: 19, grade: "C", city: "Bangalore", fees: 4000 },
  { name: "Ravi", age: 22, grade: "B", city: "Delhi", fees: 9500 },
  { name: "Tejas", age: 18, grade: "A", city: "Mumbai", fees: 10000 },
];

//Get all students from Bangalore.
// let student3 = students.filter((s) => s.city==="Bangalore")
// console.log(student3)

//Get all students who have grade "A".
// let student4 = students.filter((s) => s.grade ==="A")
// console.log(student4)

//Get all students with fees less than 10,000.
// let student5 = students.filter((s) => s.fees>10000)
// console.log(student5)


//Get all students whose age is above 21.
// let student6 = students.filter((s) => s.age>21)
// console.log(student6)

//Get all students from Mumbai with grade "B".
// let student7 = students.filter((s)  => s.city==="Mumbai" && s.grade==="B")
// console.log(student7)

//Get all students who are grade “A” and pay fees more than 10,000.
// let student8 = students.filter((s) =>  s.grade==="A"  && s.fees>10000)
// console.log(student8)

//Get all students who are not from Delhi.
// let student9 = students.filter((s) =>  s.city!=="Delhi")
// console.log(student9)

//Get all students with grade “C” and fees less than 6000.
// let student10 = students.filter((s) => s.grade==="C" && s.fees<6000)
// console.log(student10)

//Get all students whose name starts with “R”.
// let student11 = students.filter(student => student.name.startsWith("R"));
// console.log(student11);

//Get all students who are either from Bangalore or Pune.
// let student12 = students.filter((s) => s.city==="Bangalore"|| s.city==="Pune")
// console.log(student12)

//Get only the names of students whose fees are more than 9000.
// let student13 = students.filter((s) => s.fees<9000).map((s) =>s.name)
// console.log(student13)

//Get an array of names of “A” grade students.
let student14 = students.filter((s) =>  s.grade==="A").map((s) => s.name)
console.log(student14)

let student15 =students.filter((s)  => s.grade==="A").map((s) =>s.city)
console.log(student15)

//Get the names and fees of students from Bangalore.
let student16 = students.filter((s) => s.city==="Bangalore").map((s) => s.name && s.fees)
console.log(student16)

//Create an array of strings like "Avinash - A - 12000" for all students.
let student17 = students.map((student)  => `${student.name} - ${student.grade} - ${student.fees}`)
console.log(student17)


