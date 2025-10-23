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




