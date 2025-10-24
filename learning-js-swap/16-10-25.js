// Object
// key-value pairs

let student ={
    name : "swapnita",
    age : 22,
    address : "Pune"
}

//replace value
student.name = "patil "
console.log(student)

//delete element
delete student.address;
console.log(student)


let student2 = {...student}  //expand operator

console.log(student2)

//adding

student.color ="wine"

console.log(student, ": after adding")

//nested object


//shallo copy

// let student1 = {
//   name: "avinash",
//   class: "10",
//   marks: {
//     math: 100,
//     science: 100,
//     social: 100,
//     english: 100,
//   },
// };

// let student2 = { ...student1 }; 
// student2.name = "jhon";

// console.log(student1);
// console.log(student2);



//deep copy

// const student1 = {
//   name: "Avinash",
//   class: "10",
//   marks: {
//     math: 100,
//     science: 95
//   }
// };

// const student2 = structuredClone(student1);

// // Change values in copied object
// student2.name = "John";
// student2.marks.math = 50;

// console.log("student1:", student1);
// console.log("student2:", student2);


