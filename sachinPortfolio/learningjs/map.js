// let student = [
//     {
//        name:"SACHIN",
//        class:"10",
//        address:"Bengaluru",
//        rollnumber:5,
//        testscores: 400
//     },
//      {
//        name:"RAHUL",
//        class:"10",
//        address:"Hydrabad",
//        rollnumber:6,
//        testscores: 500
//     },
//      {
//        name:"RAMESH",
//        class:"10",
//        address:"Chennai",
//        rollnumber:7,
//        testscores: 420
//     },    
      // {
      //  name:"ROHIT",
      //  class:"10",
      //  address:"Pune",
      //  rollnumber:8,
      //  testscores: 350  
      // } 
      // ]


// // console.log(student)

// // let roll = student.map((k)=> k.name="Virat kohli")
// console.log("the rollnumber is",  roll)



// let add = student.map((m)=> m.address)
// console.log("the address is",  add)



// let lower = student.map((p)=> p.name.toLowerCase())
// console.log("converted into lowercase is",  lower)



// let per = student.map((d)=> (d.testscores*100/600))
// console.log("percantage is", per)
       
      //  this is the shalow copy
   //  let shalow = {...student}
   //  shalow.name = "mahesh"
   //  shalow.class = "11"
   //  shalow.address = "London"
   //  shalow.rollnumber = "56"
   //  shalow.testscores = 444
   //  console.log("this is the orginal one", student)
   //  console.log("this is the shalow copy one", shalow)


      //   this is the deep copy
   //  let deepdive = JSON.parse(JSON.stringify(student))
   //  deepdive.name = "mahesh"
   //  deepdive.class = "11"
   //  deepdive.address = "London"
   //  deepdive.rollnumber = "56"
   //  deepdive.testscores = 444
   //  console.log("this is the orginal one", student)
   //  console.log("this is the deep copy one", deepdive)



   //   this is the shalow copy for updating the name
// let stud2 = {...student}
// stud2[0].name="virat kohli"
// console.log("this is original one", student)
// console.log("this is the shalow copy",stud2)


//         deep copy for name key

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



// let students = [
//   { name: "Avinash", age: 20, grade: "A", city: "Bangalore", fees: 12000 },
//   { name: "Ramesh", age: 22, grade: "B", city: "Mumbai", fees: 8000 },
//   { name: "Suresh", age: 19, grade: "C", city: "Delhi", fees: 5000 },
//   { name: "Mahesh", age: 21, grade: "A", city: "Bangalore", fees: 15000 },
//   { name: "Naresh", age: 23, grade: "B", city: "Hyderabad", fees: 9000 },
//   { name: "Divya", age: 20, grade: "A", city: "Pune", fees: 11000 },
//   { name: "Priya", age: 19, grade: "C", city: "Bangalore", fees: 4000 },
//   { name: "Ravi", age: 22, grade: "B", city: "Delhi", fees: 9500 },
//   { name: "Tejas", age: 18, grade: "A", city: "Mumbai", fees: 10000 },
// ];

//  let blr = students.filter((a)=>a.city === "Bangalore")
//  console.log("student from banglore only", blr)

//  let gra = students.filter((b)=>b.grade === "A")
//  console.log("student have grade A", gra)

//  let fe = students.filter((c)=>c.fees < 10000)
//  console.log("student have fess less than 10000  are", fe)

//  let ag = students.filter((d)=>d.age > 21)
//  console.log("student have age grater than 21 are", ag)

//  let mum = students.filter((e)=>e.city === "Mumbai" && e.grade === "B")
//  console.log("city mumbai with grade with B", mum)

//  let pay = students.filter((f)=>f.grade === "A" && f.fees > 10000)
//  console.log("grade b and fees greater than 10000"  , pay)

//  let not = students.filter((g) => g.city != "Delhi")
//  console.log("not from delhi", not)

//  let six = students.filter((h)=>h.grade === "C" && h.fees < 6000)
//  console.log("grade c and fees less than 6000"  , six)

//  let sta = students.filter((i)=>i.name.startsWith("R"))
//  console.log(" name start with R"  , sta)

//  let either = students.filter((k)=>k.city === "Bangalore" || k.city === "Pune")
//  console.log("student from bengalore or pune"  , either)


//  let both = students.filter((l)=> l.fees>9000).map((l)=>l.name)
//  console.log("names whose fees is greater than 9000 are",both)

//  let second = students.filter((m)=> m.grade === "A").map((m)=>m.name)
//  console.log("names whose grade is A",second)


//  let third = students.filter((p)=> p.grade === "B").map((p)=>p.city)
//  console.log("city whose grade is B",third)

//  let fourth = students.filter((q)=> q.city === "Bangalore").map((q)=>`${q.name}  ${q.fees}`)
//  console.log("name and fees from bengalore city are",  fourth)

//  let fifth = students.map((z)=>`${z.name} ${z.grade} ${z.fees}`)
//  console.log("created this string for all students", fifth)



// sum of all numbers
// let add = [1, 2, 3, 4]  
// let store = add.reduce((a,b)=>a+b)
// console.log("The sum  of array is",store)


//    // product of numbers
// let mul = [1, 2, 3, 4]
// let cross = mul.reduce((k,l)=>k*l)
// console.log("The product of number are",cross)

//    //  for finding max
// let max1 = [3, 7, 2, 9, 4]
// let item =max1.reduce((p,t)=>Math.max(max1))
// console.log("The maximum item is", item)


//    //  for finding min
// let min1 = [3, 7, 2, 9, 4]
// let item2 =min1.reduce((n,z)=>Math.min(min1))
// console.log("The maximum item is", item2)



let students = [
  {
    name: "Avinash",
    class: "10",
    address: "Bangalore",
    rollNumber: 1,
    testMarks: 8,
    result : "fail"

  },
  {
    name: "Ramesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 2,
    testMarks: 12,
    result : "pass"
  },
  {
    name: "Suresh",
    class: "10",
    address: "Bangalore",
    rollNumber: 3,
    testMarks: 9,
    result : "fail"
  },
  {
    name: "Mahesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 4,
    testMarks: 15,
    result : "fail"
  },
  {
    name: "Lokesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 5,
    testMarks: 7,
    result : "fail"
  }
];

      // printing the name of all students
//  students.forEach((b) => {
//   console.log(b.name);
// })


  
// let aa = students.map((m)=>m.rollNumber)
// console.log("The student roll number is", aa)


// let bb = students.map((k)=>k.testMarks+5)
// console.log("The students testmarks are incresed by 5", bb)


let cc = students.reduce((a,b)=> a + b.testMarks ,1)
console.log("the student total marks are",  cc)


// let dd = students.reduce((avg,s)=>(avg + s.testMarks/students.length))
// console.log("the student average marks are", dd)

// let gg = students.map((p)=>`${p.name} ${p.result}`)
// console.log("name and result is", gg)


// let big = students.reduce((max, a) =>  a.testMarks > max ? a.testMarks : max, 0)
//  console.log("Highest Marks are:", big);


// let small = students.reduce((min, s) => s.testMarks < min ? s.testMarks : min,Infinity)
// console.log("Lowest Marks are:", small);


// // Avinash scored 8 marksRamesh scored 12 marksSuresh scored 9 marks 

//    students.forEach((x)=>{
//     console.log(`${x.name} scored ${x.testMarks} marks`)
//    })


   // couting how many passed and hom many failed
   
   let count = students.reduce((a,n)=>{
      
      if(n.testMarks>=10)
          a.pass++;
      
      else if(n.testMarks<10)
         a.fail++;
       
      
     return a

   },{pass:0,fail:0})

   console.log("pass",count)
   






  let university = {
  departments: [
    {
      name: "Computer Science",
      courses: [
        {
          code: "CS101",
          students: [
            { name: "Amit", grades: [85, 90, 78] },
            { name: "Sara", grades: [92, 88, 95] }
          ]
        },
        {
          code: "CS102",
          students: [
            { name: "John", grades: [70, 89, 80] },
            { name: "Priya", grades: [88, 94, 91] }
          ]
        }
      ]
    },
    {
      name: "Mathematics",
      courses: [
        {
          code: "MA101",
          students: [
            { name: "Rahul", grades: [75, 85, 79] },
            { name: "Neha", grades: [90, 92, 85] }
          ]
        }
      ]
    }
  ]
};

      //  printing the student names 
   // university.students.forEach((l)=>{
   //   console.log("the all the students are", l.name)
     
   // })


   //   printing course code in each department
         // courses.forEach((f)=>{
         // console.log(f.code)
         // })

  















































// const person = {
//   name: "Ali",
//   age: 25,
//   address:{
//     city:"pune",
//     area:"samta nagar"
//   }
// };
//   console.log(Object.keys(person))





