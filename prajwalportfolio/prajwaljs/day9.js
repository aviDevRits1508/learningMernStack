// const car = {
//   type: "Fiat",
//   model: "500",
//   color: "white"
// };
// console.log(car)



// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person.age)




// const persons = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(persons.firstName)


// // using function
// function man(name, age, height, weight) {
//   this.name = name; this.age = age; this.height = height; this.weight = weight
// }
// const mybrother = new man("prajwal", 22, 5.9, 70)
// console.log(mybrother)



// const fruit = [
//   ["banana", 50],
//   ["apple", 120],
//   ["sapota", 150],
//   ["kivi", 200]
// ];
// const myobj = Object.fromEntries(fruit)
// console.log(myobj.apple)





// // Sum of all elements in an array
// let arr = [1, 2, 3, 4, 5]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)

// //  // Sum of all elements in an array using function
// function sumofarray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }

// }
// console.log("this sum of arrey is", sum)


// //  Find the maximum element in an array

// const arr1 = [4, 10, 2, 99, 23];
// let max = arr1[0];

// for (let i = 1; i < arr1.length; i++) {
//   if (arr1[i] > max) {
//     max = arr1[i];
//   }
// }

// console.log("Maximum element:", max);


// // min
// const arr2 = [4, 10, 2, 99, 23];
// let min = arr2[0];

// for (let i = 1; i < arr2.length; i++) {
//   if (arr2[i] < min) {
//     min = arr2[i];
//   }
// }

// console.log("Min:", min);


// // find the index
// let n = [1, 2, 3, 4, 5];
// for (let i = 0; i < n.length; i++) {
//   console.log(`the index value of${n[i]} is ${i}`)
// }

// // reverse
// let a1 = [1, 2, 3, 4, 5, 6]
// let b1 = []
// for (let i = a1.length - 1; i >= 0; i--) {
//   b1[b1.length] = a1[i];
// }
// console.log(b1)



// // avarage
// const arr4 = [4, 10, 2, 99, 23];
// let total = 0;

// for (let i = 0; i < arr4.length; i++) {
//   total += arr4[i];
// }

// let average = total / arr4.length;

// console.log("Average:", average);



const person = {
  firstName: "prajwal",
  lastname: "mainalle",
  age: 23,
  id: 1234,
  details: function () {
    return this.firstName + " " + this.lastname;
  }

};
console.log(person.details())


const details = {
  name: "prajwalm",
  address: "basavakalyan",
  cars: {
    car1: "defender",
    car2: "ladrover"

  }
}
console.log(details.cars.car1)



const person1 = {
  name: "prajwal",
  age: 23,
  address: "bidar"
}
let text = " ";
for (let x in person1) {
  text += person1[x] + " ";
};
console.log(text)


const fruits = {
  banana: 100,
  apple: 130,
  kivi: 200
};
let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text1 += fruit + ": " + value + " "
}
console.log(text1)



const fruit = {
  banana: 100,
  apple: 130,
  kivi: 200
};

text1 = JSON.stringify(fruit)
console.log(text1)

// ====shallow copy ====

const person11 = {
  name: "arav",
  address: {
    city: "banglore",
    pin: 560060
  }
}
const shallowCopy = { ...person11 };
shallowCopy.name = "prajwal";
shallowCopy.address.city = "Basavakalyan";
console.log("orginal-=-=-=-=-=-=>", person11)
console.log("shallow copy-=-=-=-=-=-=>", shallowCopy)
console.log(person11.address.city);
console.log(shallowCopy.address.city);



let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(numbers => numbers * 3);
console.log(newNumbers)


let filtered = numbers.filter(numbers => numbers > 2);
console.log(filtered)


let found = numbers.find(numbers => numbers === 3);
console.log(found)


let index = numbers.findIndex(numbers => numbers === 4);
console.log(index)


numbers.push(6);
console.log(numbers)


numbers.pop();
console.log(numbers)


numbers.shift();
console.log(numbers)


numbers.unshift(0);
console.log(numbers)



let sliced = numbers.slice(1, 4);
console.log(sliced)


let copied = [...numbers];
console.log(numbers)


numbers.sort((a, b) => b - a);
console.log(numbers)


numbers.reverse();
console.log(numbers)


let includesThree = numbers.includes(3);
console.log(includesThree)


let length = numbers.length;
console.log(length)





// Find Duplicate Number
// Given an array of n+1 integers where each integer is between 1 and n (inclusive), find the duplicate number.
// Input: [1, 3, 4, 2, 2] → Output: 2

let nums = [1, 3, 4, 2, 2]
function duplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return nums[i]
    }
  }
}
console.log(duplicate(nums))


// Second Largest Element
// Find the second largest element in the array.
// Input: [10, 20, 5, 30, 25] → Output: 25

let num1 = [10, 20, 5, 30, 25]
function secondlargest(arr) {
  arr.sort((a, b) => a - b)
  return arr[3]
}
console.log(secondlargest(num1))

// Count Even and Odd Numbers
// Count how many even and odd numbers are present in a given array.
// Input: [1, 2, 3, 4, 5, 6] → Output: Even: 3, Odd: 3


let num2 = [1, 2, 3, 4, 5, 6]
let even = 0;
let odd = 0;
function evenodd(array) {
  for (let i of array)
    if (i % 2 === 0) {
      even++;
    }
    else {
      odd++;
    }
  return (`even: ${even},odd:${odd} `)

}
console.log(evenodd(num2))

// Count Positive, Negative, and Zero Elements
// Problem:
// Given an array of integers, count how many elements are positive, negative, and zero using if-else.
// Input: [1, -2, 0, 4, -5, 0]
// Output: Positive: 2, Negative: 2, Zero: 2

let num3 = [1, -2, 0, 4, -5, 0]
let possitive = 0;
let negetive = 0;
let zero = 0;
function possitivenegetive(a) {
  for (let b of a)
    if (b === 0) {
      zero++;
    }
    else if
      (b >= 1) {
      possitive++;
    }
    else {
      negetive++;
    }
  return (`positive:${possitive},negetive:${negetive},zero:${zero}`)

}
console.log(possitivenegetive(num3))

// Problem:
// Given an array of marks (integers), calculate the average and print the grade using if-else:
// A: 90+
// B: 80–89
// C: 70–79
// D: 60–69
// F: < 60
// Input: [85, 78, 92, 88] → Average: 85.75 → Output: Grade: B

let marks = [85, 78, 92, 88]
let sum = 0;
function findaverage(marks) {
  for (let mark of marks)
    sum += mark;
}
findaverage(marks)

let average = sum / marks.length;
let grade = "";

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`average: ${average}`)
console.log(`grade: ${grade}`)

// Compare Elements of Two Arrays
// Problem:
// Given two arrays of same length, compare elements at each index. Print:
// “Same” if equal
// “Different” otherwise
// Input: A = [1, 2, 3], B = [1, 4, 3]
// Output:
// Index 0: SameIndex 1: DifferentIndex 2: Same

A = [1, 2, 3]
B = [1, 4, 3]
function comapare(A, B) {
  for (let i = 0; i < A.length; i++)
    if (A[i] === B[i]) {
      console.log(`Index${i} : same`)
    }
    else {
      console.log(`Index ${i}:different`)
    }
}
comapare(A, B)

// ====shallow copy 1====
const motors = {
  bike: "splender",
  cars: {
    mini: "dezire",
    suv: "fortuner"
  }
}
const vehicals = { ...motors }

vehicals.bike = "xpulse"
vehicals.cars.mini = "baleno"
console.log("shallo copy==============", vehicals)
console.log("original==========", motors)



// ====shallow copy 2====
const mart = {
  sugar: "5kg",
  chilli: "2kg",
  retail: {
    rice: "30kg",
    wheat: "30kg"

  }
}
const mall = { ...mart }
mall.sugar = "10kg"
mall.retail.rice = "2packet"
console.log("shallo copy==============", mall)
console.log("original==========", mart)




// ====deep copy 1===
const marks1 = {
  kannada: 100,
  math: 100,
  english: 100,
  marks2: {
    hindi: 97,
    social: 100
  }

}
const deep = JSON.parse(JSON.stringify(marks1))
deep.english = 99;
deep.marks2.social = 90;
console.log("original=========", marks1);
console.log("deepcopy========", deep)

// ====deep copy2 ======
const person12 = {
  name: "Prajwal",
  address: {
    city: "banglore",
    pin: 560060
  }
};

const deepCopy = JSON.parse(JSON.stringify(person12));
deepCopy.address.city = "Basavakalyan";

console.log("deepcopy=========", deepCopy);
console.log("orginal=======", person12);


// Remove Duplicates from Sorted Array
// Given a sorted array, remove the duplicates in-place such that each element appears only once. Return the length of the new array.
// Input: [1, 1, 2, 2, 3] → Output: 3 (Array becomes [1, 2, 3]
// let a=[1, 1, 2, 2, 3];
// let b=[];
// console.log(b.includes("param"))
// console.log(b.indexOf(a[0]))
// console.log(b.indexOf(3))
// console.log(b.push(a[0]));
// console.log(b)

let arr3 = [1, 1, 2, 2, 3];
let dup1 = [];
for (let i = 0; i < arr3.length; i++) {
  if (dup1.includes(arr3[i])) {
  } else {
    dup1.push(arr3[i])
  }
}
console.log(dup1)




// ===Array method=====
const students = [
  { 
    name: "Prajwal",
    rollNumber: 101,
    address: "Hubli", 
    testMarks: 45 
  },
  { 
    name: "Ravi",
    rollNumber: 102,
    address: "Dharwad", 
    testMarks: 50
   },
  { 
    name: "Anu", 
    rollNumber: 103, 
    address: "Bangalore", 
    testMarks: 48 
  },
];


// Print only the roll numbers of all students

const rollNumbers = students.map(student => student.rollNumber);
console.log(rollNumbers);

// Create an array of student addresses
const addresses = students.map(student => student.address);
console.log(addresses);

// Make an array that shows "Name: RollNumber" format
const nameRoll = students.map(student => `${student.name}: ${student.rollNumber}`);
console.log(nameRoll);

// Create a new array of all students with testMarks converted to percentages (out of 100)
const percentageStudents = students.map(student => ({ ...student, testMarks: (student.testMarks / 50) * 100 }));
console.log(percentageStudents);   


// Make a new array of all student names in lowercase
const lowercaseNames = students.map(student => student.name.toLowerCase());
console.log(lowercaseNames)

// shallow
const shallow=[...students]
students[0].name="pramod"
shallow.forEach(students =>
{
  students.percentage=89
}
)
console.log("shallo================",shallow)
console.log("shallow original======",students)

// deepcopy
const deep1=[JSON.parse(JSON.stringify(students))]
students[0].name="pramod"
console.log("deep==========",deep1)
console.log("deep original==========",students)


const persons = {
  name: "Ali",
  age: 25,
  address:{
    city:"pune",
    area:"samta nagar"
  }
};
const allKeys = [...Object.keys(persons), ...Object.keys(persons.address)];
console.log(allKeys);


// merge====


const a = {
  user: {
    name: "Ravi",
    age: 30  }
};
const b = {
  user: {
    city: "Ahmedabad",
    country: "India"  }
};

const merged = {
  user: {...a.user,...b.user}
};
console.log(merged);

