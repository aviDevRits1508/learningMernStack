
// operaters

function operater (a,b){
    let  sum=a+b
    console.log(sum)

    let sub=a-b
    console.log(sub)

    let mul=a*b
    console.log(mul)

    let div=a/b
    console.log(div)

    let module=a%b
    console.log(module)
}

operater (5,9)

// this is my name 

console.log("swati ghante")

// this is total marks of student

function totalmarks (english, maths, social, science, hindi, kannada ) {
    let marks=english+maths+social+science+hindi+kannada
    console.log(marks)

    let per=(marks/600)*100
    console.log(per)
}

totalmarks(90,89,78,80,65,99)
totalmarks(89,45,99,67,62,89)

// this is total amount of grocerices

function groceries (vegetables, rice, suger, snacks, drinks, dairy) {
    let items=vegetables+rice+suger+snacks+drinks+ dairy
    console.log(items)

    let discount=20

    let total=items-items*(discount/100)
    console.log(total)
}

groceries (150,500,200,250,800,400)

// these are some area of circle, triangle, squre, rectangle

function areas (radius, base, height, aera, width, length){
 
    let c=3.14*radius*radius
    console.log(c)

    let t=(base*height)/2
    console.log(t)

    let s=(aera*aera)
    console.log(s)

    let r=(width*length)
    console.log(r)
}

areas(10,8,5,5,8,3)
areas(4,6,3,7,9,2)

