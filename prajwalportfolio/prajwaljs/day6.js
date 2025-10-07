// Count Divisible Numbers 4
function count(a) {
    let count = 0
    for (let i = 1; i <= a; i++) {
        if (i % 4 == 0) {
            count++;

        }
    }
    console.log("the number of divisible by 3 is:", count)
}

count(40)

// Count Divisible Numbers 3 and its sum

function sum(b) {
    let count = 0
    let sum = 0
    let sum1=0
    for (let i = 1; i <= b; i++) {
        if (i % 3 == 0) {
            count++;
            sum += i;
        }
        else{
            sum1+=i;
        }
    }
    console.log("the number of divisible by 3 is", count)
    console.log(" the sum of all 3  divisible numbers: ", sum)
    console.log(" the sum of all 3  divisible numbers: ", sum1)
}
sum(30)

// Print Even Numbers in Reverse

function even(c) {
    for (let i = c; i >= 1; i--) {
        if (i % 2 == 0) {
            console.log("even number:", i)
        }
    }
}
even(10)

// Print Even Numbers in Reverse  and sum

function even(d) {
    let sum = 0
    for (let i = d; i >= 1; i--) {
        if (i % 2 == 0) {
            sum += i
            console.log("even number:", i)
        }
    }
    console.log("sum:", sum)
}
even(10)

// Product of All Digits

function Product(f,g){
    let sum=0
    for(i=f;i<=g;i++){
        sum+=i;
    }
    console.log("the sum of product is :",sum)
}
Product(1,10)


// Print all numbers divisible by 5 between 1 and 50. and sum
function divisibleby5(d, e) {
    let sum = 0
    for (let i = d; i <= e; i++) {
        if (i % 5 == 0) {
            sum += i;
            console.log("it is divisible by 5:", i)
        }
    }
    console.log("sum:",sum)
}
divisibleby5(1, 50)


// Write a program that prints all even and odd numbers from 1 to N, and calculates the sum of the even numbers and the sum of the odd numbers.

function oddeven(n) {
    let sumodd = 0;
    let sumeven = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sumodd += i;
            console.log(i, "odd");
        } else {
            sumeven += i;
            console.log(i, "even");
        }
    }

    console.log("Sum of odd numbers:", sumodd);
    console.log("Sum of even numbers:", sumeven);
}

oddeven(10);




//Count Divisible Numbers 4 using while loop


function divisibleby4(a){
    let i=1;
    let count=0;
    while(i<=a)
    {
        if(i%4==0){
            count++;
            
        }
        i++;
    }
    console.log("count:",count);
}
divisibleby4(20)

// Count Divisible Numbers 3 and its sum using while loop

function divisibleby3(a){
    let i=1;
    let count=0;
    let sum=0
    while(i<=a)
    {
        if(i%3==0){
            sum+=i;
            count++;
           
        }
        i++;
    }
    console.log(" the sum of all 3 divisible number:",sum)
     console.log("count:",count);
}
 divisibleby3(30)

 // Print Even Numbers in Reverse using for loop

 function Even(a){
    let i=a;
    while(i>=1){
        if(i%2==0){
            console.log("even numbers in reverse :",i)
        }
        i--;
    }
 }
 Even(10)

 // Print Even Numbers in Reverse  and sum using for loop

 function Even(a){
    let i=a;
    sum=0;
    while(i>=1){
        if(i%2==0){
            sum+=i;
            console.log("even numbers in reverse :",i)
        }
        i--;
    }
    console.log(" the sum of reverse even numbers:",sum)
 }
 Even(10)

 // Product of All Digits using while loop

function Product(f,g){
    let i=f;
    let sum=0;
    while(i<=g){
        sum+=i;
        i++;
    }
    console.log("the sum of product is :",sum)
    
}
Product(1,10)


// Print all numbers divisible by 5 between 1 and 50. and sum using while loop
function divisibleby5(d, e) {
    let i=d;
    let sum = 0;
    while(i <= e) {
        if (i % 5 == 0) {
            sum += i;
            console.log("it is divisible by 5:", i)
        }
        i++;
    }
    console.log("sum:",sum)
}
divisibleby5(1, 50)

// Write a program that prints all even and odd numbers from 1 to N, and calculates the sum of the even numbers and the sum of the odd numbers. using while loop

function oddeven(n) {
    let i=1;
    let sumodd = 0;
    let sumeven = 0;

    while(i <= n) {
        if (i % 2 !== 0) {
            sumodd += i;
            console.log(i, "odd");
        } else {
            sumeven += i;
            console.log(i, "even");
        }
        i++;
    }

    console.log("Sum of odd numbers:", sumodd);
    console.log("Sum of even numbers:", sumeven);
}

oddeven(10);

 




