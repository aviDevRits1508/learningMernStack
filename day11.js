//object

let student = {
    name: "avinash",
    age: 20,
    address: {"bangalore": "560100",
    subaddress:"Vidyaranyapuram"}

 }

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
// shallo.name = "jhon"
// shallo.age=25

// console.log("shallo copy-=-=-=-=-=-=>",shallo)
// console.log("orignal-=-=-=-=-=-=>",student)





let student = {
    name: "avinash",  // base address 55000
    age: 20,          // base address 56000
    address: "bangalore",  // base address 57000
    marks: {               // base address 58000
        math: 100,
        science: 100,
        social: 100,
        english: 100,
    }
}


let shallo = {
    name: "Heyansha",  // base address 578000
    age: 2,          // base address 57900
    address: "Belgium",  // base address 55656700
    marks: {               // base address 58000
        math: 100,
        science: 100,
        social: 100,
        english: 100,
    }
}


// let student={
//     name:"Heyansha",
//     age:2,
//     address:"bangalore",
//     marks:{
//         math:100,
//         science:100,
//         social:100,
//         english:100,
//     }
//     }

// const shallo={...student}
// shallo.marks.social=80
// shallo.name="Punith"
// shallo.age=22
console.log("shallo copy-=-=-=-=-=-=>",shallo)
console.log("orignal-=-=-=-=-=-=>",student)