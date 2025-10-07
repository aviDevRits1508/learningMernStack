// Print 1 to 10
// Write a for loop that prints numbers from 1 to 10
 
for( let i=1; i<=11;i++){
    console.log(i)
}

// Sum of first 10 numbers
// Use a for loop to calculate and print the sum of numbers from 1 to 10.

let sum=0;
for( let i=1; i<=11;i++){
    sum+=i;
}
    console.log("sum is :",sum)

// Print even numbers
// Write a for loop that prints all even numbers between 1 and 20.


for( let i=0; i<=20;i++){
    if(i%2==0){
        console.log(i)

    }
    
}

// Print multiplication table
// Take a number from the user and print its multiplication table (e.g., table of 5).

function table(a){
    for(let i=1;i<=10;i++){
    console.log(i*a)

}

}
table(5)


// Print reverse numbers
// Write a for loop to print numbers from 10 down to 1

for(let i=10;i>=1;i--){
    console.log(i)
}

// Print 1 to N using while
// Take input N and print numbers from 1 to N using a while loop
let i=1;
while(i<=100){
    console.log(i)
    i++;
}

// Sum of digits
// Take a number (e.g., 1234) and use a while loop to find the sum of its digits
let j=0;
sum=0;
while(j<10){
    sum+=j;
    j++;
}
console.log("sum:",sum)

// Count digits in a number
// Use a while loop to count how many digits are in a number (e.g., 98765 → 5 digits

let a=1;
count=0;
while(a<=5){
    console.log(a)
    a++;

    count++;
}
 console.log("total number of digits:",count)

//  Reverse a number
// Use a while loop to reverse a number (e.g., 123 → 321).

let k=10;
while(k>=1){
    console.log(k)
    k--;
}

// Reverse a number
// Use a while loop to reverse a number (e.g., 123 → 321).


let num = 123;      // Number to reverse
let reversed = 0;

while (num > 0) {
    let digit = num % 10;                 
    reversed = reversed * 10 + digit;   
    num = Math.floor(num / 10);          

// console.log("Reversed number:", reversed);
}
console.log("Reversed number:", reversed);

// console.log(Math.floor(123/10))

// count

let l=1234567890;
let count1=0;
while(l>0){
    l=Math.floor(l/10)
    count1++;
}
console.log("count number:",count1)

// 1

// 1 2

// 1 2 3

// 1 2 3 4

for(let i=1;i<=1;i++){
    let row=" "
    for(let j=1;j<=4;j++){
        row+=j+" "
        console.log(row)
    }
    
}


 