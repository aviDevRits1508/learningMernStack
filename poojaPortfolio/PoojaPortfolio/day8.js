//objects
//ex-1
// let employee={
//     name: "priya",
//     department : "technical",
//     salary : 40000
//      }
//      console.log(employee.salary)
//      console.log(employee.name);
//     console.log(Object.keys(employee))
  

    //shallo copy
    // let employee1={
    // name: "akash",
    // department : "admin",
    // salary : 30000,
    // leaves :{
    //     year1: 8,
    //     year2: 6,
    //     year4: 10
    // }
    //  }
    //  let shallo={...employee1}
    //  shallo.department="HR"
    //  shallo.leaves.year2=4
    //  console.log("original============>",employee1)
    //  console.log("shallo copy==========>",shallo)
    

    //  deep copy
    //  let student={
    //     name: "samnit",
    //     age : 3,
    //     adress : {
    //         city : "bangalore",
    //         location : "marathalli"
    //     }
    //  }
    //  let deep = JSON.parse(JSON.stringify(student));
    //  deep.adress.location="vartur"
    //  console.log("original==========>",student)
    //  console.log("deep copy===============>",deep)


    //map() method
    // let numbers = [1,2,3,4]
    // let squares = numbers.map(num => num*num)
    // console.log(squares)

    //filter iteration method
    //   let values = [1,2,3,4,5,6]
    //   let evennumbers=values.filter(number =>number%2===0)
    //   let oddnumbers=values.filter(number=>number%2!=0)
    //   console.log(evennumbers)
    //   console.log(oddnumbers)
        

     ///assignments
     //Print only the roll numbers of all students using map().
    //  let students=[
    //     {
    //         name:"Sakshi",
    //         class:9,
    //         rollno:2,
    //         address:"bangalore"
    //     },
    //     {
    //         name:"Shreya",
    //         class:10,
    //         rollno:5,
    //         address:"bangalore"
    //     }
    //  ]
    //  let rollno = students.map((a) => 
    //       a.rollno
    //  )
    // console.log(rollno)

    // Make an array that shows "Name: RollNumber" format for each student
//    let studentss = [
//     {
//         name:"pooja",
//         rollno: 14
//     },
//     {
//         name:"preeti",
//         rollno:10
//     },
//     {
//         name:"gouri",
//         rollno:5
//     }
//    ]
//    let total= studentss.map(b =>`${b.name}:${b.rollno}`)
// console.log(total)


// // Make a new array of all student names in lowercase
// let studentlist = [
//     {
//         name: "SAMNIT",
//         marks:96
//     },
//     {
//         name:"RAHUL",
//         marks:85
//     },
//     {
//         name:"PRIYA",
//         marks:90
//     }
//     ]
//     let name = studentlist.map(c =>c.name.toLowerCase())
//     console.log(name)
     

    // Create an array of student addresses.
    let student=[
        {
       name1: "samnit",
        address : {
            city : "delhi"
        },
         name1: "rohit",
        address : {
            city : "bangalore"
        },
         name1: "sushma",
        address : {
            city : "chennai"
        }
    }]
     let address = student.map((q)=> q.address)
  console.log(address)


//   Create a new array of all students with testMarks converted to percentages (out of 100)
// let list=[
//         {
//             name:"Sakshi",
//             class:9,
//             rollno:2,
//             testmarks:96,
            
//         },
//             {
//             name:"Sakshi",
//             class:9,
//             rollno:2,
//             testmarks:85,
            
//         },
//          {
//             name:"nitesh",
//             class:9,
//             rollno:2,
//             testmarks:80,
//          }
//     ]
//         let totalmarks=200 
//        let result=list.map(s=>{
//         return{name:s.name,percentage:(s.testmarks*100/100)}
//        })
//        console.log(result)





// const person = {
//   name: "Ali",
//   age: 25,
//   address:{
//     city:"pune",
//     area:"samta nagar"
//   }
// };
// console.log(Object.keys(person))




     