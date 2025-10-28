// sum
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

console.log(sum);
 
// product
const numbers2 = [5, 2, 3, 4];
const product = numbers2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);
 
// 🧩 Level 1 – Basics
// 👉 Use the given student array.
// 1️⃣
// Print only the names of all students using forEach().
// 2️⃣
// Create a new array containing only students’ roll numbers using map().
// 3️⃣
// Create a new array where each student’s testMarks are increased by 5 (without modifying the original array).
// 4️⃣
// Find the total marks of all students using reduce().
// 5️⃣
// Find the average marks of all students using reduce().
// 🧩 Level 2 – Moderate
// 6️⃣
// Using forEach(), print:
// Avinash scored 8 marksRamesh scored 12 marksSuresh scored 9 marks 
// 7️⃣
// Using map(), return an array of objects with a new key result:
// [
//   { name: "avinash", result: "fail" },
//   { name: "ramesh", result: "pass" },
//   { name: "suresh", result: "fail" }
// ]
// 👉 (Assume passing marks = 10)
// 8️⃣
// Find the highest testMarks using reduce().
// 9️⃣
// Find the lowest testMarks using reduce().
// 🔟
// Count how many students passed and how many failed using reduce().

// Output should be:
// { pass: 1, fail: 2 }



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
  }
  
];
// Print only the names of all students using forEach().
students.forEach((c)=>{
  console.log(c.name)
})  

// Create a new array containing only students’ roll numbers using map().
let rollNum= students.map((c)=>c.rollNumber)
console.log(rollNum)
 
// Create a new array where each student’s testMarks are increased by 5 (without modifying the original array).
let newMar = students.map((c)=> c.testMarks + 5)
console.log(newMar)
console.log(students.map((c)=>c.testMarks))

// Find the total marks of all students using reduce().
let totalMarks = students.reduce((sum, student) => sum + student.testMarks, 0);
console.log(totalMarks)

// Find the average marks of all students using reduce().
let averageMarks = students.reduce((sum, student) => sum + student.testMarks, 0) / students.length;
console.log(averageMarks)

// Using forEach(), print:
// Avinash scored 8 marksRamesh scored 12 marksSuresh scored 9 marks 
students.forEach((str)=>{
  console.log(`${str.name} scored ${str.testMarks}`)
})

// Using map(), return an array of objects with a new key result:
// [
//   { name: "avinash", result: "fail" },
//   { name: "ramesh", result: "pass" },
//   { name: "suresh", result: "fail" }
// ]
// 👉 (Assume passing marks = 10)
let results = students.map(student => ({
  name: student.name.toLowerCase(),
  result: student.testMarks >= 10 ? "pass" : "fail"
}));
console.log(results)

// Find the highest testMarks using reduce().
let highestMarks = students.reduce((max, student) => 
  student.testMarks > max ? student.testMarks : max, 
  students[0].testMarks
);
console.log("Highest Marks:", highestMarks) 

// Find the lowest testMarks using reduce()
let lowestMarks = students.reduce((min, student) => 
  student.testMarks < min ? student.testMarks : min, 
  students[0].testMarks
);
console.log("Lowest Marks:", lowestMarks)

// Count how many students passed and how many failed using reduce().
// let passFailCount = students.reduce(
//   (acc, student) => {
//     if (student.testMarks >= 10) acc.passed++;
//     else acc.failed++;
//     return acc;
//   },
//   { passed: 0, failed: 0 }
// );
// console.log(passFailCount)
// another method of doing this problem 
let countPF = students.reduce((a,s)=>((s.testMarks>=10 ?a.pass++:a.fail++),a),
{pass:0,fail:0}

);
console.log(countPF)


// more examples on for each

const university = {
  departments: [
    {
      name: "Computer Science",
      courses: [
        {
          code: "CS101",
          students: [
            { name: "Amit", grades: [85, 90, 78] },
            { name: "Sara", grades: [92, 88, 95] }
          ]
        },
        {
          code: "CS102",
          students: [
            { name: "John", grades: [70, 89, 80] },
            { name: "Priya", grades: [88, 94, 91] }
          ]
        }
      ]
    },
    {
      name: "Mathematics",
      courses: [
        {
          code: "MA101",
          students: [
            { name: "Rahul", grades: [75, 85, 79] },
            { name: "Neha", grades: [90, 92, 85] }
          ]
        }
      ]
    }
  ]
};

let a=[10,20,30,40,50]
a.forEach((ele)=>{
  console.log(ele)
})