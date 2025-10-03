// console.log("hello")






//  function totalmarks(sub1,sub2,sub3,sub4)  {
//     let marks = sub1 + sub2 + sub3 + sub4;
//     console.log(marks)

//     let percent=(sub1+sub2+sub3+sub4)/400*100
//     console.log(percent)
//     return marks;
//   }    
// totalmarks(79, 80, 85, 90);



// // grosoryprice

// function grosoryprice(pen, pencil, carcol, colors, brush){
//     let items=pen+pencil+carcol+colors+brush;
//     console.log(items)

//     let offer=(items)/2000*100
//     console.log(offer)
//     return items;

// }
// grosoryprice(10,300,100,450,470)


// // formul of shapes
// // area of rectangle

// function area(l,w){
//     let rec=l*w
//     console.log(rec)
//     return rec

// }
// area(4,8)

// // // tringle

// function tringle(b,h){
// let areaoftringle=(1/2)*b*h
// console.log(areaoftringle)
// return areaoftringle


// }
// tringle(4 ,9)

// // crical

// function crical(r){
//     let form=3.14159*(r*r)
//     console.log(form)
// }
// crical(10)
// crical(30)


// // square

// function square(l, w){
//     let sqf=l*w
//     console.log(sqf)

// }
// square(10,21)

// // Parallelogram
// function parall(b , h){
//     let prf= b*h
// console.log(prf)
// }
// parall(4,12)

// // Trapezium

// function trep(a ,b, h){
//     let trf=1/2*(a+b)*h
// console.log(trf)
// }
// trep(3,4,6)

// // area of squar

// function sq(a){
//     let af=(a*a)
//     console.log(af)

// }
// sq(4)

// // opertors

// // addition
// function add(x,y){
//     let addf= x+y
// console.log(addf)

// }
// add( 4,5)

// //subtraction
// function sub(a ,b){
//     let subf=(a-b)
// console.log(subf)

// }
// sub(10,4)

// //multiplication
// function mul(x ,y){
//     let mulf=(x*y)
// console.log(mulf)
// }
// mul(5,6)

// // division

// function div(x ,y){
//     let divf=(x/y)
//     console.log(divf)
// }
// div( 10 ,2)

// // s-------------------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------------------
//     // comparison

//     let x=20;
//     let y=30;
//     let z=(x==y)

//     console.log(z)

// // not equal

// let a=30;
// let s=40;
// let q=(a!=s)

// console.log(q)

// //comparsion with tripal equal  "==="

// let d=40;
// let i='40';
// let j=(d===i)

// console.log(j)    


// let c=59;
// let l=59;
// let trip=(c===l)

// console.log(trip)


// // compare with less and grater

// let qw=60;
// let we=20;
// let qwe=(qw>we)

// console.log(qwe)


// let as=30;
// let sa=78;
// let asa=(as<=sa)

// console.log(asa)

// // conditcional if statment

// let sick=false;
// if(sick){
//     console.log("not able connect")
// }

//     else{
//         console.log("able to work")
//     }


    //Day 4-----------------------------------------------------------------------------------------------

//   //Eligiblity for vote
// function markksfun(age){
//     if(age >18){
//         return "Eligibal for vote"
//     }else{
//         return "Not eligibal for vote"
//     }
// }

// console.log(markksfun(12))


//  //Eligiblity for vote tremaret

//  function vote(age){
//     return age>=18? "aligibal for vote":"not eligibal for vote"
//  }
//  console.log(vote(40))
// // -------------------------------------------------------------------------------------------------------


// // //marks grater then 40 or not

// function examarks(marks){
//     if (marks<40){
//         return "pass"
//     }else{
//         return "fail"
//     }
// }
// console.log(examarks(50))


// function exam(mar){
//     return mar<40?"pass": "fail"
// }

// console.log(exam(30))
// //--------------------------------------------------------------------------------------------------------
// //value is positive , negative or zero

// // function number(value){
   
// //         if(value<0){
// //             return "positive"
// //         }else if(value >0){
// //             return "negetive"}
// //             else(value=0)
// //             return "zero"
// // }


// // console.log(number(0))

// function numb(val){
//     return val<0?"negative": val>0?"positive": "zero"
//  }

//  console.log(numb(5))
//  console.log(numb(0))

// //largest of two number

// function find(num1, num2) {
//     if (num1 > num2) {
//         return num1 + " is the largest.";
//     } else if (num2 > num1) {
//         return num2 + " is the largest.";
//     }
// }

// // console.log(findL(20,30))

// // function find1(num1,num2){
// //     return num1+
// // }


// day4----------------------------------------------------------------------------------------------------


// for(let i=0;i<10;i++){
//     console.log(i+1)
// }

// for(let i=1;i<=10;i++){
//     console.log(i*2)
// }

// function table(num){
//     for(let i=1;i<=10;i++){
//     console.log(i*num)
// }

// }
// table(4)
// ------------------------------------------------------------------------------------------------------------
// function table(num){
//     for(let a=num; a<=10;a++){
//         console.log (`the table of `,a)
//         for(let b=1;b<=10;b++)
//             console.log(a*b)
//     }

// }
// table(2)

// function tab(num){
//     for(let a=num;a<=10;a++){
//         console.log(`the table of` ,a)
//         for(let b=1;b<=10;b++)
//             console.log(`${a}x${b}=${a*b}`)
//     }
// }
// tab(2)

// 2 parameters----------------------------------------------------------------------------------------
// function printTable

// function tab(num){
//     for(let a=num;a<=10;a++){
//         console.log(`the table of` ,a)
//         for(let b=1;b<=5;b++)
//             console.log(`${a}x${b}=${a*b}`)
//     }
// }
// tab(2)

// revarse -------------------------------------------------------------------------------------------
// function revers(x){
// for(let i=10;i>=0;i--){
//     console.log(x*i)
// }

// }
// revers(1)


// // revarse table--------------------------------------------------------------------------------------
function revrsetable(i,j){
    for (let i = 10; i >= 1; i--){
        console.log(`the table of`, i)
    for (let j= 10; j >= 1; j--) {
            console.log(`${i}x ${j}=${i*j}`)
        
    }
}
}
revrsetable(2)

