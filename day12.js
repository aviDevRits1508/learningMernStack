//array of object full marks 20
// let student = [
//     {
//         name: "avinash",
//         class: "10",
//         address: "bangalore",
//         rollNumber: 1,
//         testMarks: 8
//     },
//     {
//         name: "ramesh",
//         class: "10",
//         address: "bangalore",
//         rollNumber: 2,
//         testMarks: 12
//     },
//     {
//         name: "suresh",
//         class: "10",
//         address: "bangalore",
//         rollNumber: 3,
//         testMarks: 9
//     }
// ]
  
// student.map((a) => {
//     console.log(a)
// })

// let bonusMarks = student.map((a) => {
//     return a.testMarks + 5
// })

// console.log(bonusMarks)



// let names = student.map((s) => s.name.toUpperCase())
// console.log(names)

// let updatedMarks = student.map((s) => ({...s, testMarks: s.testMarks + 5}))

// console.log(updatedMarks)


// let summery = student.map((s) => `${s.name} has scored ${s.testMarks} marks`)

// console.log(summery)

//filter


// let arr = [20, 40, 50, 60, 70, 80, 90, 100]

// let filtered = arr.filter((a) => a > 50)
// console.log(filtered)

// let clothes = [
//     {
//         brand: "levis",
//         price: 500,
//         color: "black",
//         size: "L"
//     },
//     {
//         brand: "zara",
//         price: 600,
//         color: "black",
//         size: "L"
//     },
//     {
//         brand: "levis",
//         price: 700,
//         color: "white",
//         size: "XL"
//     },
//     {
//         brand: "puma",
//         price: 700,
//         color: "pink",
//         size: "XL"
//     },
//     {
//         brand: "nike",
//         price: 542,
//         color: "pink",
//         size: "XL"
//     }
// ]


//i want to see only puma
// let puma = clothes.filter((c) => c.brand === "puma") ;
// console.log(puma)

// let size = clothes.filter((c) => c.size === "XL" && c.brand === "puma")
// console.log(size)


// let cloth = {
//     brand: "levis",
//     price: 500,
//     color: "black",
//     size: "L"
// }


// let pricelessThan600 = clothes.filter((c) => c.price < 600).map((c) => c.brand)
// console.log(pricelessThan600)


// function add (a, b){
//     return a + b
// }

// function sub (a, b){
//     return a - b
// }

// console.log(add(10, 20))
// console.log(sub(10, 20))


// function a() {
//   console.log("Inside a");
//   b();
// }

// function b() {
//   console.log("Inside b");
//   c();
// }

// function c() {
//   console.log("Inside c");
// }

// a();

//  let student =[
//     {
//         name:"Heyansha",
//         rollnumber:'01',
//         address:"Belgium",
//     },
//     {
//         name:"chaithanya",
//         rollnumber:'02',
//         address:"Brussels",
//     },
//     {
//         name:"Punith",
//         rollnumber:'03',
//         address:"Evere",
//     }
//  ];

    // student.map((c)=>{
    //   console.log(c.name)
    // })

//  let address=student.map((a)=>a.address)
//     console.log(address)
 
// let studentinfo = student.map((a) => ({
//   name: a.name,
//   address: a.address,
//   rollnumber: a.rollnumber
// }));

// studentinfo.forEach((a) => {
//   console.log(a.name, a.rollnumber, a.address);
// });
 
// let nameRoll = student.map((a) => `${a.name}: ${a.rollnumber}`);
// console.log(nameRoll);

// let student = [
//     { name: "Alice", rollNumber: 101, testMarks: 45 },  // out of 50
//     { name: "Bob", rollNumber: 102, testMarks: 40 },
//     { name: "Charlie", rollNumber: 103, testMarks: 35 }
// ];

// let studentsWithPercentage = student.map((s) => {
//     return {
//         ...s,  // copy all existing properties
//         percentage: (s.testMarks / 50) * 100  // calculate percentage
//     };
// });

// console.log(studentsWithPercentage);

let student=[
    {name:"CHAITHANYA"},
    {name:"HEYANSHA"},
    {name:"PUNITH"}

];

let studentnameinlowercase=student.map((a)=>a.name.toLowerCase());
console.log(studentnameinlowercase);
 