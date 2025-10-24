
// let students = [
//   { name: "Mahadev", roll: 101, address: "Pune" },
//   { name: "Param", roll: 102, address: "Mumbai" },
//   { name: "Vishal", roll: 103, address: "Delhi" }
// ];

// 1. Print only the roll numbers of all students using map().
// let rollNumbers = students.map(students => students.roll);
// console.log(rollNumbers);

// 2. Create an array of student addresses.
// let address = students.map(students => students.address);
// console.log(address);

// 3. Make an array that shows "Name: RollNumber" format for each student
// const NameRoll = students.map(students => students.name + " : " + students.roll);
// console.log(NameRoll);



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

 
 
 
// Get all students from Bangalore.
// let a = students.filter(b => b.city === "Bangalore");
// console.log(a);

// Get all students who have grade "A".
// let c = students.filter(d => d.grade === "A");
// console.log(c);

// Get all students with fees less than 10,000.
// let e = students.filter(f => f.fees < 10000);
// console.log(e);

// Get all students whose age is above 21.
// let g = students.filter(h => h.age > 21);
// console.log(g);

// Get all students from Mumbai with grade "B".
// let i = students.filter(j => j.grade === "B" && j.city === "Mumbai");
// console.log(i);

// Get all students who are grade “A” and pay fees more than 10,000.
// let k = students.filter(l => l.grade === "A" && l.fees > 10000);
// console.log(k);

// Get all students who are not from Delhi.
// let m = students.filter(n => n.city !== "Delhi");
// console.log(m);

// Get all students with grade “C” and fees less than 6000.
// let o = students.filter(p => p.grade == "C" && p.fees < 6000);
// console.log(o);

// Get all students whose name starts with “R”.
// let q = students.filter(r => r.name.startsWith("R"));
// console.log(q);

// Get all students who are either from Bangalore or Pune.
// let s = students.filter(t => t.city === "Bangalore" || t.city === "Pune");
// console.log(s);

// Get only the names of students whose fees are more than 9000.
// let u = students
// .filter(v => v.fees > 9000)
// .map (v => v.name);
// console.log(u);

// Get an array of names of “A” grade students.
// let w = students
// .filter(x => x.grade == "A")
// .map(x => x.name);
// console.log(w);

// Get an array of cities where students have grade “B”.
// let y = students
// .filter(z => z.grade == "B")
// .map(z => z.name);
// console.log(y);

// Get the names and fees of students from Bangalore.
// let aa = students
// .filter(a => a.city === "Bangalore")
// .map(a => ({name : a.name , fees : a.fees}));
// console.log(aa);

// Create an array of strings like "Avinash - A - 12000" for all students.
// let bb = students
// .map(s => `${s.name} , ${s.grade} , ${s.fees}`);
// console.log(bb);

 
// 23/10/2025
// 1. Sum of All Numbers
// Input: [1, 2, 3, 4]
// Expected Output: 10
// Description: Use reduce to find the sum of all elements in the list.
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// 2. Product of All Numbers
// Input: [1, 2, 3, 4]
// Expected Output: 24
// let a = [1, 2, 3, 4];
// let product = a.reduce((acc, curr) => acc * curr, 1);
// console.log(product); 


// 3. Find the Maximum Number
// Input: [3, 7, 2, 9, 4]
// Expected Output: 9
// let b = [3, 7, 2, 9, 4];
// let max = b.reduce((acc, curr) => acc > curr ? acc : curr);
// console.log(max); 

// 4. Find the Minimum Number
// Input: [3, 7, 2, 9, 4]
// Expected Output: 2
// let c = [3, 7, 2, 9, 4];
// let min = c.reduce((acc, curr) => acc < curr ? acc : curr);
// console.log(min); 



// 23/10/2025 Problems 


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


// 1. Print only the names of all students using forEach().
// students.forEach(students => console.log(students.name));

// 2. Create a new array containing only students’ roll numbers using map().
// let roll = students.map(students => students.age);
// console.log(roll);

// 3. Create a new array where each student’s testMarks are increased by 5 (without modifying the original array).
let newFees = students.map(students => students.fees + 5)
console.log(newFees);

// 4. Find the total marks of all students using reduce().
// let total = students.map(students => students.fees)
// console.log(total);



