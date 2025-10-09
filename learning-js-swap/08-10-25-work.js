// For Loop Practice Questions
// Print 1 to 10
// Write a for loop that prints numbers from 1 to 10.

for(let a=1; a<=10; a++){
    console.log(a);
}

// Sum of first 10 numbers
// Use a for loop to calculate and print the sum of numbers from 1 to 10.
let sum=0;
for(let b=1; b<=10; b++){
    sum=sum+b;
}
   console.log(sum)

// Print even numbers
// Write a for loop that prints all even numbers between 1 and 20.

for(let c=1; c<=20; c++){
    if(c%2==0){
        console.log(c)
    }
}

// Print multiplication table
// Take a number from the user and print its multiplication table (e.g., table of 5).

function mul(d){
    for(let e=1; e<=10; e++){
        console.log(e*d)
    }
}

console.log(mul(5))

// Print reverse numbers
// Write a for loop to print numbers from 10 down to 1.

for(let g=10; g>=1; g--){
    console.log(g)
}

// 🔁 While Loop Practice Questions
// Print 1 to N using while
// Take input N and print numbers from 1 to N using a while loop.

function inp(N){
    let h=1;
    while(h<=N){
        console.log(h);
        h++;
    }
}

inp(7)

// Sum of digits
// Take a number (e.g., 1234) and use a while loop to find the sum of its digits.



function sumDigits(i){
    let Dsum=0;
    while(i>0){
        let digit = i%10;
        Dsum += digit;

        console.log(i)
        i = Math.floor(i/10)
    }

    console.log(Dsum)
}

console.log(sumDigits(123))

// Count digits in a number
// Use a while loop to count how many digits are in a number (e.g., 98765 → 5 digits).

function countDigit(j){
    let count=0;
    while(j>0){
       let digit = j%10;
        j=Math.floor(j/10);
        count++;
    }
    console.log(count);
}

console.log(countDigit(223366))

// Reverse a number
// Use a while loop to reverse a number (e.g., 123 → 321).

// Factorial using while loop
// Take a number and find its factorial using a while loop.