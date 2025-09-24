// console.log("hello")






 function totalmarks(sub1,sub2,sub3,sub4)  {
    let marks = sub1 + sub2 + sub3 + sub4;
    console.log(marks)

    let percent=(sub1+sub2+sub3+sub4)/400*100
    console.log(percent)
    return marks;
  }    
totalmarks(79, 80, 85, 90);



// grosoryprice

function grosoryprice(pen, pencil, carcol, colors, brush){
    let items=pen+pencil+carcol+colors+brush;
    console.log(items)

    let offer=(items)/2000*100
    console.log(offer)
    return items;

}
grosoryprice(10,300,100,450,470)


// formul of shapes
// area of rectangle

function area(l,w){
    let rec=l*w
    console.log(rec)
    return rec

}
area(4,8)

// // tringle

function tringle(b,h){
let areaoftringle=(1/2)*b*h
console.log(areaoftringle)
return areaoftringle


}
tringle(4 ,9)

// crical

function crical(r){
    let form=3.14159*(r*r)
    console.log(form)
}
crical(10)
crical(30)


// square

function square(l, w){
    let sqf=l*w
    console.log(sqf)

}
square(10,21)

// Parallelogram
function parall(b , h){
    let prf= b*h
console.log(prf)
}
parall(4,12)

// Trapezium

function trep(a ,b, h){
    let trf=1/2*(a+b)*h
console.log(trf)
}
trep(3,4,6)

// area of squar

function sq(a){
    let af=(a*a)
    console.log(af)

}
sq(4)

// opertors

// addition
function add(x,y){
    let addf= x+y
console.log(addf)

}
add( 4,5)

//subtraction
function sub(a ,b){
    let subf=(a-b)
console.log(subf)

}
sub(10,4)

//multiplication
function mul(x ,y){
    let mulf=(x*y)
console.log(mulf)
}
mul(5,6)

// division

function div(x ,y){
    let divf=(x/y)
    console.log(divf)
}
div( 10 ,2)


