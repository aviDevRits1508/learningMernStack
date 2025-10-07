// pint numbers 1 to 10

function numbers(a){
    for (let i=1; i<=10; i++){
        console.log(i)
}
}

numbers(`1 to 10 number`,10)

// sum of first 10 numbers

function sum(b){
    let num=0;
    for (let i=1; i<=10; i++){
        num=num+i;
        
    }
    console.log(num)
}

sum(`sum of first 10 number`,10)

// print even numbers

function even(c){
    for (let i=1; i<=20; i++){
        if(i%2==0){
         console.log(i)
        }
    }
   
}

even(`even number`,20)

// print muliplication table

function table(num) {
    console.log(`multiplication Table of ${num}:`)
    for (let i=1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(5)

// print reverse number

function revrsetable(num){
    for (let i = num; i>=1; i--){
        console.log(i)
    }
}

revrsetable(10)

// print 1 to n numbers

function number(d){
let i=1;
while(i<=d){
    console.log(i);
    i++;
}
}
number(5)

// sum of digits

function sum(N){
    num1=0
    let i=1;
    while(i<=N){
        // console.log(i);
        num1=num1+i
        i++;
    }
    console.log( `sum of digits`,num1)
}
sum(4)

//factorial number

let temp=5
let i=temp;
let f=1;
while(i>=1){
    f=f*i;
    i--;
}
console.log(`factoial is`,f)

// reverse number

let num=123;
let reversed=0;
while(num>0){
    let digit=num%10;
    reversed=reversed*10+digit;
    num=Math.floor(num/10);
    
}
console.log(`reversed number`,reversed);

// count digits in number

let num1=1234;
let count=0;
while(num1>0){
    num1=math.floor(num1/10);
    count++;
}
console.log(`count number is`,count)



