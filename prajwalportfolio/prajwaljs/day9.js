const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
console.log(car)



const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person.age)




const persons = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(persons.firstName)


// using function
function man(name, age, height, weight) {
  this.name = name; this.age = age; this.height = height; this.weight = weight
}
const mybrother = new man("prajwal", 22, 5.9, 70)
console.log(mybrother)



const fruit = [
  ["banana", 50],
  ["apple", 120],
  ["sapota", 150],
  ["kivi", 200]
];
const myobj = Object.fromEntries(fruit)
console.log(myobj.apple)





// Sum of all elements in an array
let arr = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)

//  // Sum of all elements in an array using function
function sumofarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

}
console.log("this sum of arrey is", sum)


//  Find the maximum element in an array

const arr1 = [4, 10, 2, 99, 23];
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}

console.log("Maximum element:", max);


// min
const arr2 = [4, 10, 2, 99, 23];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}

console.log("Min:", min);


// find the index
let n = [1, 2, 3, 4, 5];
for (let i = 0; i < n.length; i++) {
  console.log(`the index value of${n[i]} is ${i}`)
}

// reverse
let a1 = [1, 2, 3, 4, 5, 6]
let b1 = []
for (let i = a1.length - 1; i >= 0; i--) {
  b1[b1.length] = a1[i];
}
console.log(b1)



// avarage
const arr4 = [4, 10, 2, 99, 23];
let total = 0;

for (let i = 0; i < arr4.length; i++) {
  total += arr4[i];
}

let average = total / arr4.length;

console.log("Average:", average);