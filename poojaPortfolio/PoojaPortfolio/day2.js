 console.log("hello everyone");

 let a=8;
 console.log(a)

 let b=5;
 console.log(b)

 
//    --------operators--------

//   -----ADDITION--------
  function sum(x,y){
    let value1=x+y
    console.log(value1)
  }
  sum(8,6)

//   --------MULTIPLICATION----
 function mul(a,b){
  let value2= a * b
  console.log(value2)
 }
 mul(5,8)

//    ----------SUBTRACTION-----
 function sub(p,q){
    let value3=p-q
    console.log(value3)
 }
 sub(90,45)

//   -------DIVISION------
 function div(c,d){
    let value4=c/d
    console.log(value4)
 }
 div(84,20)

// --------MODULUS----
 function mod(m,n){
    let value5=m%n
    console.log(value5)
 }
 mod(45,25)

 

 
//   -----totalmarks of student-----
 
 function calculatetotalmarks(maths,hindi,english,kannada,science){
    let total=maths+hindi+english+kannada+science;
    console.log(total)
    let maxmarks=500
  let percentage=(total/maxmarks)*100
  console.log(percentage)
 }
   calculatetotalmarks(55,75,85,80,70)

   calculatetotalmarks(90,65,80,75,90)

   calculatetotalmarks(95,75,50,60,75)


        //    ----total of groceries---
 function totalbill(mango,orange,avacado,grapes,apple){
    let groceriestotal=mango+orange+avacado+grapes+apple;
    console.log(groceriestotal);
   discount=30
   let total=groceriestotal-groceriestotal*(discount/100)
   console.log(total)
 }
    totalbill(120,80,65,70,150);

    //  ---  area of square ---
    function area(a){
        let square=a*a
        console.log(square)
    }
    area(10,10)

    //  ---area of rectangle--
    function area1(l,w){
        let rectangle=l*w
        console.log(rectangle)
    }
    area1(10,20)

    // ---area of triangle---
function area2(b,h){
    let triangle=(1/2)*b*h
    console.log(triangle)
}
area2(15,15)
area2(10,10)

    // ---area of circle----
function area3(r,pa){
    let circle=(pa*r*r)
  console.log(circle)
}
area3(12,3.14)
 

 

 
