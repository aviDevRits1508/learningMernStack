
// function nestedFunction(marks){
//     if(marks >= 90){

//         if(marks >= 95){
//             return "A+"
//         }else{
//             return "A"
//         }

//     }else{
//         return "B"
//     }
// }


// console.log(nestedFunction(95))
// console.log(nestedFunction(90))
// console.log(nestedFunction(70))

//terniry opreators

// let temp = 90

// // let result = temp >= 102 ? "fever" : "not fever"


// function checkFever(temp){
//     return temp >= 102 ? "fever" : "not fever"
// }

// console.log(checkFever(temp))
// let temp = 90

// // let result = temp >= 102 ? "fever" : "not fever"

//even or odd
function evenorodd(someno){
    if(someno % 2 == 0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log (evenorodd(5))
let no=6
let result = no % 2 == 0 ? "even" : "odd"
console.log(result)

//positive negative zero
function pnz(numb){
    if(numb>0){
        return "posotive"
    }else if(numb<0){
        return "negative"
    }
    else{
        return "zero"
    }
}console.log(pnz(2))
 let numb=-7
 let result1 = numb>0 ? "postive" : numb<0 ? "negative" : "zero"
console.log(result1)

//pass or fail
function pf(marks){
    if(marks>35){
        return "pass"
    }
    else{
        return "fail"
        }
}
console.log(pf(40))
let  marks=50
let result2= marks>35 ? "pass" : "fail"
console.log(result2)


//age
function age(number){
    if(age>=18){
        return "eligible to vote"
    }
    else{
        return "not eligible"
    }
}
console.log(age(19))
let number=16
let result3= number>=18 ? "eligible" : "not eligible"
console.log(result3)

//largest of 2 nos
function large(a,b){
    if(a>b){
        return "a is greater"
    }else{
        return "b is greater"
    }

}
console.log(large(5,9))
let a,b=(4,6)
let result4= a>b ? "a greater" : "b is greater"
console.log(result4 )

// let x=(8)
// let square=x*x
// return "square"

//  function areaofcircle(r){
//  let area=3.141*r*r;
//  console.log("area of circle:",area);
//  }
//  areaofcircle(4);

function square(x){
    let square=x*x
    console.log("square of x:",square)
}
square(8)

function square(y){
    return y*y
}
console.log(square(7))