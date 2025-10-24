//array of object full marks 20
let student = [
    {
        name: "avinash",
        class: "10",
        address: "bangalore",
        rollNumber: 1,
        testMarks: 8
    },
    {
        name: "ramesh",
        class: "10",
        address: "bangalore",
        rollNumber: 2,
        testMarks: 12
    },
    {
        name: "suresh",
        class: "10",
        address: "bangalore",
        rollNumber: 3,
        testMarks: 9
    }
]


//map
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

let clothes = [
    {
        brand: "levis",
        price: 500,
        color: "black",
        size: "L"
    },
    {
        brand: "zara",
        price: 600,
        color: "black",
        size: "L"
    },
    {
        brand: "levis",
        price: 700,
        color: "white",
        size: "XL"
    },
    {
        brand: "puma",
        price: 700,
        color: "pink",
        size: "XL"
    },
    {
        brand: "nike",
        price: 542,
        color: "pink",
        size: "XL"
    }
]


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


function a() {
  console.log("Inside a");
  b();
}

function b() {
  console.log("Inside b");
  c();
}

function c() {
  console.log("Inside c");
}

a();



