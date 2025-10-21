//object

// let student = {
//     name: "avinash",
//     age: 20,
//     address: "bangalore"
// }

// console.log(student)

// console.log(student.name)
// console.log(student.age)
// console.log(student.address)

// console.log(student["name"])
// console.log(student["age"])
// console.log(student["address"])




// console.log(student.name)
// student.name = "jhon"
// console.log(student.name)

// delete student.address
// console.log(student)




// let student2 = student


// let student3 = {...student}

// console.log(student3)


// let student = {
//     name: "avinash",
//     age: 20,
//     address: "bangalore",
//     marks: {
//         math: 100,
//         science: 100,
//         social: 100,
//         english: 100,
//     }
// }

// const shallo = {...student}
// // const deep = JSON.parse(JSON.stringify(student))

// shallo.marks.math = 90

// console.log("shallo copy-=-=-=-=-=-=>",shallo)
// console.log("orignal-=-=-=-=-=-=>",student)





// let student = {
//     name: "avinash",  // base address 55000
//     age: 20,          // base address 56000
//     address: "bangalore",  // base address 57000
//     marks: {               // base address 58000
//         math: 100,
//         science: 100,
//         social: 100,
//         english: 100,
//     }
// }


// let shallo = {
//     name: "avinash",  // base address 578000
//     age: 20,          // base address 57900
//     address: "bangalore",  // base address 55656700
//     marks: {               // base address 58000
//         math: 100,
//         science: 100,
//         social: 100,
//         english: 100,
//     }
// }


// let student1 = {
//     name: "avinash",
//     class: "10",
//     marks: {
//         math: 100,
//         science: 100,
//         social: 100,
//         english: 100,
//     }
// }

// let student2 = {...student1}
// let student3 = {...student1}

// student2.name = "jhon"
// student2.marks.math = 90
// student3.marks.science = 30


// console.log(student1)
// console.log(student2)
// console.log(student3)



// let student = {
//     name: "avinash",
//     class: "10",
//     marks: {
//         math: 100,
//         science: 100,
//         social: 100,
//         english: 100,
//     }
// }

// // let student2 = JSON.parse(JSON.stringify(student))
// let student2 = structuredClone(student)

// student2.marks.math = 90    


// console.log(student);
// console.log(student2);




// let student = {
//     name: "avinash",
//     class: "10"
// }

// let student2 = { ...student }
// student2.name = "jhon"

// if(student.name !== student2.name){
//     student.name = student2.name;
// }

// console.log(student)
// console.log(student2)



//freeeze method in object

// let student = {
//     name: "avinash",
//     class: "10"
// }
// Object.freeze(student);
// student.name = "jhon"

// console.log(student)


//seal method of object

// let student = {
//     name: "avinash",
//     class: "10"
// }
// Object.seal(student);
// student.name = "jhon"
// student.address = "bangalore"


// console.log(student)


// let student = {
//     name: "avinash",
//     class: "10"
// }

// let keys = Object.keys(student)
// console.log(keys)

// let values = Object.values(student)
// console.log(values)

// let entries = Object.entries(student)
// console.log(entries)




let student = {
    name: "avinash",
    class: "10",
    address: "bangalore",
    rollNumber: 1,
    marks: {
        math: 100,
        science: 100,
        social: 100,
        english: 100,
    }
}


console.log(typeof student)
console.log(typeof student.name)
console.log(typeof student.marks)


// for(let key in student){
//     console.log(`this is  teh ${key} of the student: ${student[key]}`)
// }
// for(let key in student.marks){
//     console.log(`this is  teh ${key} of the student: ${student.marks[key]}`)
// }
