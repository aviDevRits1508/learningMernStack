console.log("hello prerana")
console.log("Marks of the students are as follows..")
let kannada=98
let english=78
let science=65
let social=99
let maths=100

console.log("kannada:", kannada)
console.log("english:",english)
console.log("science:",science)
console.log("social:",social)
console.log("maths:",maths)

function total(kannada,english,science,social,maths){
    return kannada + english + science + social + maths

}
let marks=total(kannada,english,science,social,maths)
console.log(`total marks of the student is : `, {marks} )