// even and odd

function checkevenodd (number){
    if(number % 2 == 0){
        return "even"
    } else{
        return "odd"
    }
}

console.log(checkevenodd(8))
console.log(checkevenodd(3))

// terniry operater

let number1=9
function result(number1){
    return number1 % 2 == 0 ? "even" : "odd";
                            
}

console.log(result(number1))


// positive number, negative number, zero

function logo (number){
    if(number > 0){
        return "positive"
       } else if(number < 0){
        return "negative"
    } else {
        return "Zero"
    }
     
}

console.log(logo(-8))
console.log(logo(50))
console.log(logo(0))

// terniry operater

let number2 = 8
function result (number2){
    return number2>0 ? "positive" : number2<0 ?  "negative" :  "zero";
}

console.log(result(number2))

//largest of two number

function box (a,b){
    if (a>b) {
        return "a is largest"
      }else if (b>a){
        return "b is largest"
      }
    else{
        return "no large number"
    }
       
}

console.log(box(40,90))

// terniry operater

let number3 = (4,9)
function result (number3){
    return (a>b) ? "a is largest" : (b>a) ? "b is largest" :  "no large number";
}

console.log(result(number3))

// Pass , Fail

function passfail (marks){
    if(marks >= 40){
        return "Pass"
    }else {
        return "Fail"
    }
}

console.log(passfail(80))

//terniary operater

let number4 = 30
function result (number4){
         number4 >= 40 ? "Pass" : "Fail";
}

console.log(result(number4))

// Age check

function person (age){
    if(age >=18){
        return "Eliginle to vote"
    }
    else{
        return "Not eligible"
    }
}

console.log(person(50))

//ternairy operater

let age = 16
function result (age){
    return age >= 18 ? "Eligiable to vote" : "not eligible";
}

console.log(result(age))