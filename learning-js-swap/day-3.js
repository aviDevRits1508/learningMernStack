// operators in js 

// Arithmetic Operators
let x = 10;
let y = 5;
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus

// Assignment Operators
let z = 10;
z += 5; // z = z + 5
console.log(z);
z -= 5; // z = z - 5
console.log(z);
z *= 5; // z = z * 5
console.log(z);
z /= 5; // z = z / 5
console.log(z);
z %= 5; // z = z % 5
console.log(z);

// Comparison Operators
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to

// Logical Operators
console.log(true && false); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT
console.log(!false); // Logical NOT


// functions in js 

function my_function(a,b){       //>>here a,b are parameters. 
    return a+b
}

let sum = my_function(5,10);   //>>here 5,10 are arguments.
console.log(sum);


function mul(c,d){
    console.log("this for multiplication")
    return c*d
}
let multiply = mul(5,10);
console.log(multiply);

// Arrow function
const add = (a, b) => a + b;
let result = add(5, 10);
console.log(result);



// arithmetic operators 

function arithmetic(e,f){
    console.log("Addition=",e+f);
    console.log("Subtraction=",e-f);
    console.log("Multiplication=",e*f);
    console.log("Division=",e/f);
    console.log("Modulus=",e%f);
}

console.log(arithmetic(10,5));


// day-3 work 
// Calculate total marks of student by adding up marks obtained in all different subjects.

function totalMarks(math, science, english, history, marathi){
    return math + science + english + history + marathi;
}

console.log("Total Marks of stud1:", totalMarks(88,85,72,75,85));
console.log("total marks stud2:", totalMarks(90,88,80,75,70));