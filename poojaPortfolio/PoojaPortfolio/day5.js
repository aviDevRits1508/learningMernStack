//  ------assignment day5-----
function printTable(number){
    for (let a=1; a<=10; a++){
        console.log(number*a)
    }
  }
printTable(2)
printTable(3)
printTable(4)


//  ------nested switch statement------
function printTable(p,q){
    for (let a=p; a<=10; a++){
    for( let b=1; b<=10; b++)    
        console.log(a*b)
    }   
  }
printTable(2,5)



for (let x=1; x<=10; x++){
 for (let y=1; y<=10; y++){
   console.log(x*y)
  }      
}

function table(num1){
    for (let i=num1; i<=8; i++){
        for (let j=1; j<=5; j++){
          console.log(i*j);  
        }
    }
}
table(2)


function newtable(x){
    for (let i=10; i>=0; i--){
        console.log(x*i)
    }
}
newtable(1)

// -------decrement manner------
   
function newtable(a,b){
    for (let i=10; i>=2; i--){
        for (let j=10; j>=1; j--)
            console.log(i*j)
    }
}
newtable(10,2)

// -------------switch statement----------

function daycalculation(day){
    switch(day){
        case "monday":{
            let message ="start of a week"
            console.log(message)
            break;
        }
        case "friday":{
            let message ="ending of week"
            console.log(message)
            break;
        }
        case "sunday":{
            let message ="weekend"
            console.log(message)
            break;
        }
        default:
            let message ="none"
    }
}
daycalculation("friday")



let operator = "*"
let a=10
let b=6
let message
switch(operator){
    case "+":
    message = a+b;
    break;
    case "-":
    message = a-b;
    break;
    case "*":
    message = a*b;
    break;
    case "/":
    message = a/b;
    break;
    default:
    message = "invalid"        

}
console.log(message)