// function Student(maths,english,kannada,social,science,hindi){

//     console.log(`the marks of this Student in Maths is : ${maths}`)
//     console.log(`the marks of this Student in English is : ${english}`)
//     console.log(`the marks of this Student in Kannada is : ${kannada}`)
//     console.log(`the marks of this Student in Social Science is : ${social}`)
//     console.log(`the marks of this Student in science is : ${science}`)
//     console.log(`the marks of this Student in Hindi is : ${hindi}`)
//     let totalmarks=maths+english+kannada+social+science+hindi
//     console.log(totalmarks)
//     let percentage=(totalmarks/600)*100
//     console.log(percentage)
// }
// Student(98,99,100,97,96,97)
// Student(99,90,80,70,60,60)
function grocery(sugar, oil, Rice, Milk) {
    console.log(`the Price of the sugar : ${sugar}`)
    console.log(`the Price of the oil  : ${oil}`)
    console.log(`the Price of the sugar  : ${Rice}`)
    console.log(`the Price of the sugar : ${Milk}`)
    let totalbill = sugar + oil + Rice + Milk
    console.log(totalbill)
    let percentage = (totalbill / 300) * 100
    console.log(percentage)
}
grocery(55, 180, 100, 75)
// area of traingle
function calculatetriangle(b,h){
    areaoftriangle=(1/2)*b*h
    console.log(`the area of triangle is :${areaoftriangle}`)
}
calculatetriangle(300,300)
// area of rectagle
function calculaterectangle(l,b){
    areaofrectangle=l*b
    console.log(`the area of rectangle is :${areaofrectangle}`)
}
calculaterectangle(100,300)

//  area of circle
function circle(r){
    areaofcircle=3.14*r**2
    console.log(`the area of circle is :${areaofcircle}`)
}
circle(30)

// square
function square(side){
    areaofsquare=side*side
    console.log(`the area of square is :${areaofsquare}`)
}
square(30)
// multiplcation
function mul(x,y){
    return x * y
}
let multi =mul(20,30)
console.log(multi)

// addition
function sum(x,y){
    return x + y
}
let sum1 =sum(20,30)
console.log(sum1)

// substraction
function sub(a,b){
    return a-b
}
let sub1=sub(30,30)
console.log(sub1)

// division
function div(a,b){
    return a/b
}
let div1=div(20,10)
console.log(div1)

// floor
function float(c,d){
    return c/d
}
let float1=float(12,5)
console.log(float1)