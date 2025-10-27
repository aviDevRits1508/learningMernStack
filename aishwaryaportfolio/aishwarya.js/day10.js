// let students = [
//   { name: "Aishwarya", rollNo: 10, address: "Pune", testMarks: 45 },
//   { name: "Bhavani", rollNo: 11, address: "Mumbai", testMarks: 78 },
//   { name: "jyoti", rollNo: 12, address: "Delhi", testMarks: 92 },
//   { name: "nikita", rollNo: 13, address: "Bangalore", testMarks: 67 }
// ];


// let rollNumbers = students.map(student => student.rollNo);

// console.log(rollNumbers);

// let addresses = students.map(student => student.address);
// console.log(addresses);

// let nameRollArray = students.map(student => `${student.name}: ${student.rollNo}`);

// console.log(nameRollArray);

// let lowerCaseNames = students.map(student => student.name.toLowerCase());

// console.log(lowerCaseNames);

// let Percentage = students.map(student => ({percentage: (student.testMarks / 150) * 100}));

// console.log(Percentage);



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



// // Get all students from Bangalore.

// let fromBangalore = students.filter(student => student.city === "Bangalore");
// console.log("Students from Bangalore:", fromBangalore);

// //Get all students who have grade "A".

// let gradeAStudents = students.filter(student => student.grade === "A");
// console.log("Students with Grade A:", gradeAStudents);

// //Get all students with fees less than 10,000.

// let lowFeesStudents = students.filter(student => student.fees < 10000);
// console.log("Students with fees < 10000:", lowFeesStudents);

// //Get all students whose age is above 21.

// let above21Students = students.filter(student => student.age > 21);
// console.log("Students with age > 21:", above21Students);

// //Get all students from Mumbai with grade "B".

// let mumbaiGradeB = students.filter(student => student.city === "Mumbai" && student.grade === "B");
// console.log("Students from Mumbai with Grade B:", mumbaiGradeB);

// //Get all students who are grade “A” and pay fees more than 10,000.

// let gradeAHighFees = students.filter(student => student.grade === "A" && student.fees > 10000);

// console.log("Students with Grade A and fees > 10000:", gradeAHighFees);

// // Get all students who are not from Delhi.

// let notFromDelhi = students.filter(student => student.city !== "Delhi");
// console.log("Students not from Delhi:", notFromDelhi);

// // Get all students with grade “C” and fees less than 6000.

// let gradeCUnder6000 = students.filter(student => student.grade === "C" && student.fees < 6000);
// console.log("Students with Grade C and fees < 6000:", gradeCUnder6000);

// // Get all students whose name starts with “R”.

// let nameStartsWithR = students.filter(student => student.name.startsWith("R")).map(students => students.name);
// console.log("Students whose name starts with R:", nameStartsWithR);

// // Get all students who are either from Bangalore or Pune.
// let FromBangaloreOrPune = students.filter(student => student.city === "Bangalore" || student.city === "Pune");
// console.log("Students from Bangalore || Pune:", FromBangaloreOrPune);

// // Get only the names of students whose fees are more than 9000.
// let highFeeNames = students.filter(student => student.fees > 9000).map(student => student.name);
// console.log("Students with fees > 9000:", highFeeNames);

// // Get an array of names of “A” grade students.
// let gradeAStudent = students.filter(student => student.grade === "A").map(student => student.name);
// console.log("A Grade Students:", gradeAStudent);

// // Get an array of cities where students have grade “B”.
// const gradeBCities = students.filter(student => student.grade === "B").map(student => student.city);
// console.log("Cities of Grade B Students:", gradeBCities);

// // Get the names and fees of students from Bangalore.

// const bangaloreNameFees = students.filter(student => student.city === "Bangalore").map(student => ({ name: student.name, fees: student.fees }));
// console.log("Students from Bangalore (Name & Fees):", bangaloreNameFees);




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

students.forEach(student => console.log(student.name));

// Create a new array containing only students’ roll numbers using map().

let rollNumbers = students.map(student => student.rollNumber);
console.log(rollNumbers);

// Create a new array where each student’s testMarks are increased by 5 (without modifying the original array).

let Marks = students.map(student => student.testMarks + 5);
console.log(Marks);

// Find the total marks of all students using reduce().
let totalmarks = students.reduce((total,student) =>total + student.testMarks,0 )
console.log(totalmarks)

// Find the average marks of all students using reduce()
let avgmark=students.reduce((total,student) =>total+student.testMarks,0)/students.length;
console.log(avgmark)

// Using forEach(), print:
// Avinash scored 8 marksRamesh scored 12 marksSuresh scored 9 marks 

let newname=students.forEach(student=>{
  console.log(`${student.name} scored ${student.testMarks} marks`)})

  // Using map(), return an array of objects with a new key result:

  let result = students.map(student => ({name: student.name,
    result: student.testMarks >= 10 ? "pass" : "fail"}));
console.log(result);

// Find the highest testMarks using reduce()

let highestMarks = students.reduce((max, stu) => stu.testMarks > max ? stu.testMarks : max, students[0].testMarks);
console.log(highestMarks);

// Find the lowest testMarks using reduce().
const lowestMarks = students.reduce((min, stu) => stu.testMarks < min ? stu.testMarks : min, students[0].testMarks);
console.log(lowestMarks);

// Count how many students passed and how many failed using reduce().






