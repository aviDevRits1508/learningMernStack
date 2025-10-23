//arrra of object---------------
// let student = [
//     {
//         name:"arjun",
//         class: 12,
//         rollno : 112,
//         testmarks : 9
//     },

//     {
//         name:"karan",
//         class: 12,
//         rollno : 114,
//         testmarks : 8
//     },
//      {
//         name:"krishna",
//         class: 12,
//         rollno : 115,
//         testmarks : 7
//     }
// ]

// console.log(student)

// student.map((a) =>{console.log(a)})

// //adding bonus marks indual to all-------------------------
//  let bonusmarks = student.map((a) => {
//    return a.testmarks + 5
//  })
//  console.log(bonusmarks)

//all names in uppercase------------------------------------------
// let name = student.map((s) => s.name.toUpperCase())
// console.log(name)

// let updatedmarks = student.map((s) => ({...s, testmarks: s.testmarks + 5}))
// console.log(updatedmarks)

// //all details in one suntance-------------------------------------
// let summery = student.map((s) => `${s.name} has scored ${s.testMarks} marks`)
// console.log(summery)

//------------------------------------------------------------------------------------------------------------------------

let student1 = [
    {
        name :"vishnu",
        rollnumber:21,
        testmarks:90,
        address:"bengaluru"


    },
      {
        name :"Maheshwar",
        rollnumber:22,
        testmarks:96,
        address:"hubli"

    },
      {
        name :"Bramhanad",
        rollnumber:23,
        testmarks:97,
        address:"balari"

    }
]


// console.log(student1)

//Print only the roll numbers of all students using map().---------------------------------
// let roll = student1.map((a) => {return a.rollnumber})
// console.log(roll)

// //Create an array of student addresses.-----------------------------------------------------
// let add = student1.map((a) => {return a.address})
// console.log(add)

//Make an array that shows "Name: RollNumber" format for each student.-------------------------------------
// let nameroll = student1.map((a)  => `student name:${a.name} , rollnumber :${a.rollnumber}`)
// console.log(nameroll)

//Create a new array of all students with testMarks converted to percentages (out of 100).
// let percnt = student1.map((a) =>a.testmarks)
// let totalMarks = student1.reduce((sum, testMarks) => sum + testmarks, 0);

// console.log(totalMarks)

// //tolowercase------------------------------------------------------
// let name = student1.map((s) => s.name.toLowerCase())
// console.log(name)

// let adda = student1.map((s) => `the ${s.testmarks}and the percentage ${(s.testmarks/125)*100}`)
// console.log(adda)


//shallo
const shallo = [...student1]
student1[0].name="bhavi"
student1[0]
console.log("shallo==============",shallo)
console.log("shallo orignal======",student1)

//deepcopy
const deep1 = [JSON.stringify(student1)]
student1[0].name='aryan'
console.log("deep=====",deep1)
console.log("deep orignal===",student1)



// const person = {
//   name: "Ali",
//   age: 25,
//   address:{
//     city:"pune",
//     area:"samta nagar"
//   }
// };







