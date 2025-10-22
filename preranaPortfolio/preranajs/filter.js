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
// Get all students from Bangalore.
// Get all students who have grade "A".
// Get all students with fees less than 10,000.
// Get all students whose age is above 21.
// Get all students from Mumbai with grade "B".

// Get all students from Bangalore.
let place = students.filter((c)=>c.city === "Bangalore")
console.log(place)
console.log("------------------------------------------------------------------")

// Get all students who have grade "A".
let grades = students.filter((c)=>c.grade === "A")
console.log(grades)
console.log("------------------------------------------------------------------")

// Get all students with fees less than 10,000.
let fee = students.filter((c)=>c.fees<10000)
console.log(fee)
console.log("------------------------------------------------------------------")

// Get all students whose age is above 21.
let aa = students.filter((c)=>c.age>21)
console.log(aa)
console.log("------------------------------------------------------------------")

// Get all students from Mumbai with grade "B".
let ab = students.filter((c)=>c.city === "Mumbai"&& c.grade === "B" )
console.log(ab)
console.log("------------------------------------------------------------------")

// Get all students who are grade “A” and pay fees more than 10,000.
// Get all students who are not from Delhi.
// Get all students with grade “C” and fees less than 6000.
// Get all students whose name starts with “R”.
// Get all students who are either from Bangalore or Pune.

// Get all students who are grade “A” and pay fees more than 10,000.
let both = students.filter((c)=>c.grade === "A"&& c.fees >10000 )
console.log(both)
console.log("------------------------------------------------------------------")

// Get all students who are not from Delhi.
let not= students.filter((c)=>c.city !== "Delhi")
console.log(not)
console.log("------------------------------------------------------------------")

// Get all students with grade “C” and fees less than 6000.
let both2 = students.filter((c)=>c.grade === "C"&& c.fees <6000 )
console.log(both2)
console.log("------------------------------------------------------------------")

// Get all students whose name starts with “R”.
let start = students.filter((c)=> c.name.startsWith("R"))
console.log(start)
console.log("------------------------------------------------------------------")

// Get all students who are either from Bangalore or Pune.
let both3 = students.filter((c)=>c.city === "Bangalore"|| c.city === "Pune" )
console.log(both3)
console.log("------------------------------------------------------------------")

// Get only the names of students whose fees are more than 9000.
// Get an array of names of “A” grade students.
// Get an array of cities where students have grade “B”.
// Get the names and fees of students from Bangalore.
// Create an array of strings like "Avinash - A - 12000" for all students.


// Get only the names of students whose fees are more than 9000.
const feesMore = students.filter(s => s.fees>9000).map((s) =>s.name) ;
console.log(feesMore);

// Get the names and fees of students from Bangalore.
const bangaloreNamesFees = students.filter(s => s.city === "Bangalore").map(s => ({ name: s.name, fees: s.fees }));
console.log("Names & fees from Bangalore:", bangaloreNamesFees);

// Get an array of names of “A” grade students.
const smart = students.filter(s => s.grade === "A").map((s) =>s.name) ;
console.log("Smart students who scored A grade are :",smart);

// Get an array of cities where students have grade “B”.
const smartB = students.filter(s => s.grade === "B").map((s) =>s.city) ;
console.log("Smart students who scored B grade are from city :",smartB);

// Create an array of strings like "Avinash - A - 12000" for all students.
// let result = students
//   .filter(student => student.grade === 'A')
//   .map(student => `${student.name} - ${student.grade} - ${student.fees}`);
// console.log(result);

let result = students.map(student => `${student.name} - ${student.grade} - ${student.fees}`);
console.log(result);


