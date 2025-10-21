let student = [
    {
       name:"SACHIN",
       class:"10",
       address:"Bengaluru",
       rollnumber:5,
       testscores: 400
    },
     {
       name:"RAHUL",
       class:"10",
       address:"Hydrabad",
       rollnumber:6,
       testscores: 500
    },
     {
       name:"RAMESH",
       class:"10",
       address:"Chennai",
       rollnumber:7,
       testscores: 420
    },
     {
       name:"ROHIT",
       class:"10",
       address:"Pune",
       rollnumber:8,
       testscores: 350
    }
]

// console.log(student)

// let roll = student.map((k)=> k.name="Virat kohli")
// console.log("the rollnumber is",  roll)



// let add = student.map((m)=> m.address)
// console.log("the address is",  add)



// let lower = student.map((p)=> p.name.toLowerCase())
// console.log("converted into lowercase is",  lower)



// let per = student.map((d)=> (d.testscores*100/600))
// console.log("percantage is", per)





// shalow copy for name key

let stud2 = {...student}
stud2[0].name="virat kohli"
console.log("this is original one", student)
console.log("this is the shalow copy",stud2)


// deep copy for name key

// let dive = JSON.parse(JSON.stringify(student))
// dive[0].name = "Rohit sharma"
// console.log("this is original one", student)
// console.log("this is the deep copy",dive)



// shalow copy for class key
// let stud3 = {...student}
// stud3[0].class="11"
// console.log("this is original one", student)
// console.log("this is the shalow copy",stud3)


// deep copy for class key
// let deepdive = JSON.parse(JSON.stringify(student))
// deepdive[0].class = "11"
// console.log("this is original one", student)
// console.log("this is the deep copy",deepdive)




//   merging two nested objects    
// const a = {
//   user: {
//     name: "Ravi",
//     age: 30  }
// };
// const b = {
//   user: {
//     city: "Ahmedabad",
//     country: "India"  }
// };
// let v =a.user.
// console.log(a.user)
//  console.log()a.join(b)

























































// const person = {
//   name: "Ali",
//   age: 25,
//   address:{
//     city:"pune",
//     area:"samta nagar"
//   }
// };
//   console.log(Object.keys(person))





