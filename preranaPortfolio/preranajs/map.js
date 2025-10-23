// Print only the roll numbers of all students using map().
// Create an array of student addresses.
// Make an array that shows "Name: RollNumber" format for each student.
// Create a new array of all students with testMarks converted to percentages (out of 125).
// Make a new array of all student names in lowercase.
 
 
let student = [
    {
        name: "Prerana",
        class: "8",
        address: "bangalore",
        rollNumber: 22,
        testMarks: 98
    },
    {
        name: "Ganesh",
        class: "10",
        address: "bhalki",
        rollNumber: 27,
        testMarks: 45
    },
    {
        name: "Pavani",
        class: "6",
        address: "bidar",
        rollNumber: 3,
        testMarks: 78
    }
]

// Print only the roll numbers of all students using map().
let rollNum = student.map((a) => {
    return a.rollNumber
})
console.log(rollNum)

// Create an array of student addresses.
let addr = student.map((a) => {
    return a.address
})
console.log(addr)

// Make an array that shows "Name: RollNumber" format for each student.
let summary = student.map((s) => `${s.name}: ${s.rollNumber}`)

console.log(summary)

// Make a new array of all student names in lowercase.
let names = student.map((s) => s.name.toLowerCase())
console.log(names)

// Create a new array of all students with testMarks converted to percentages (out of 125).
let newArr=student.map((s) => `the ${s.testMarks} and the converted percentage is ${(s.testMarks/125)*100}`)
console.log(newArr)



const persons = {
  name: "Ali",
  age: 25,
  address:{
    city:"pune",
    area:"samta nagar"
  }
};
const allKeys = [...Object.keys(persons), ...Object.keys(persons.address),...Object.values(persons),...Object.values(persons.address)];
console.log(allKeys);