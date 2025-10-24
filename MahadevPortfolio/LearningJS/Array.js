
// ARRAY METHOD //  // ARRAY METHOD //  // ARRAY METHOD // 

// let fruit = "Mango";
// console.log(fruit);

// let fruits = ["Apple" , "Banana" , "Mango" , "Papaya"];
// console.log(fruits);
// console.log(fruits[2]);

// Push ==> Add element at the End.
// let a = [ "Mango" , "Apple"];
// a.push("Papaya");
// console.log(a);

// let car = [ "Tata" , "Maruti"];
// car.push("Mahindra");
// console.log(car);

// Pop ==> Remove last element.
// let b = ["Apple" , "Banana" , "Carrot" , "Cumcumber"];
// b.pop();
// console.log(b);

// let c = ["City" , "Village" , "foreign"];
// c.pop();
// console.log(c);

// Unshift ==> Add element at the beginning
// let d = ["Apple" , "Banana" , "Carrot" , "Cumcumber"];
// d.unshift("Grapes");
// console.log(d);

// let e = ["Android" , "IOS"];
// e.unshift("VScode");
// console.log(e);

// shift ==> Remove first element
// let f = ["Cucumber", "Apple" , "Banana" , "Carrot"];
// f.shift();
// console.log(f);

// let g = ["advertisment" , "films" , "serials" , "webseries"];
// g.shift();
// console.log(g);


// length ==> find total elements
// let h = ["Android" , "IOS"];
// console.log(h.length);

// let i = ["advertisment" , "films" , "serials" , "webseries"];
// console.log(i.length);


// Join ==> Convert array to a single string
// let n = ["Android" , "IOS"];
// console.log(n.join("::"));

// let o = ["City" , "Village" , "foreign"];
// console.log(o.join(" - "));

// Reverse ==> Reverse the array
// let p = ["Age" , "Name"];
// console.log(p.reverse());

// let q = ["12345" , "09876"];
// console.log(q.reverse());


// Sort ==> Sort array alphabetically ============== Doubt ===============
// let r = ["Android" , "IOS"];
// console.log(r.sort());


// Array to String  ==> Converting an array (multiple items) into a single string (one line of text).
// let fruits = ["apple", "banana", "mango"];
// let result = fruits.toString();
// console.log(result);

// let s = ["a" , "b" , "c" , "d" , "e"];
// let t = s.toString();
// console.log(t);

// Delete  ==> remove a specific element from an array
// let fruitss = ["apple", "banana", "mango", "orange"];
// delete fruitss[1];  // deletes "banana"
// console.log(fruitss);

// let ff = ["aa" , "bb" , "cc" , "dd"];
// delete ff[2];
// console.log(ff);

// let gg =  ["cc" , "dd" , "ee", "ffggg"];
// delete gg[3];
// console.log(gg);


// Concat ==> to join(combine) two or more arrays into a new array.
// let aa = ["tea" , "coffee"];
// let bb = ["milk" , "turmeric"];
// let alp = aa.concat(bb);
// console.log(alp);


// let cc = ["123" , "456"];
// let dd = ["789" , "1011"];
// let num = cc.concat(dd);
// console.log(num);

// flat ==> The flat() method is used to flatten (or unpack) nested arrays —that means it removes extra inner brackets and makes one simple array.
// let ee = ["Mahadev",["Age:26"],["i live in Bidar"]];
// let fff = ee.flat();
// console.log(fff);

// let ggg = ["Hey", ["How are you ?"], ["Buddy!"]];
// let hhh = ggg.flat();
// console.log(hhh);

// At   // Sort  // copyWithin // Slice // splice   ===> DOUBT



// ARRAY SEARCH //  // ARRAY SEARCH //  // ARRAY SEARCH //

// / indexOf ==> find positon of an element
// let j = ["Apple" , "Banana" , "Carrot" , "Cumcumber"];
// console.log(j.indexOf("Banana"));

// let k = ["City" , "Village" , "foreign"];
// console.log(k.indexOf("City"));


// includes ==> Check if an element exists
// let l = [ "Tata" , "Maruti"];
// console.log(l.includes("Apple"));
// console.log(l.includes("Tata"));

// let m = ["advertisment" , "films" , "serials" , "webseries"];
// console.log(m.includes("films"));
// console.log(m.includes("City"));


// LastIndexOf ==> The lastIndexOf() method returns the last position (index) of a given element in an array.
// If the element isn’t found → it returns -1.


// let numbers = [10, 20, 30, 40];
// console.log(numbers.lastIndexOf(20));

// let add = [10, 20, 30, 40];
// console.log(add.lastIndexOf(20));

// let sum = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(sum.lastIndexOf(2));
// console.log(sum.lastIndexOf(8));



// Problem 1: Shallow copy with Object.assign
// Task:
// Create an object person with properties name and age. Make a shallow copy using Object.assign. Change the age in the copied object and see if the original object changes.
// let person = {
//     name : "Sri",
//     age : 28
// }
// let shallowPerson = Object.assign({} , person);
// shallowPerson.age = 27;
// console.log("Original person" , person);
// console.log("CopiedPerson" , shallowPerson);


// Problem 2: Shallow copy with spread operator
// Task:
// Create an array of numbers [1, 2, 3, 4]. Make a shallow copy using the spread operator. Change one element in the copied array and print both arrays.
// let num = [1, 2, 3, 4];
// let shallowNum = [...num];
// console.log(num);
// console.log(shallowNum);
// shallowNum[2] = 20;
// console.log(shallowNum);




// 1. Count Even and Odd Numbers
// Count how many even and odd numbers are present in a given array.
// Input: [1, 2, 3, 4, 5, 6] → Output: Even: 3, Odd: 3
 
// let num = [1, 2, 3, 4, 5, 6];
// let even = 0;
// let odd = 0;

// for (let a = 0; a < num.length; a++) {
//    (num[a] % 2 === 0) 
//     even = even + 1;
// }
// console.log(even);






// Count Positive, Negative, and Zero Elements
// Problem:
// Given an array of integers, count how many elements are positive, negative, and zero using if-else.
// Input: [1, -2, 0, 4, -5, 0]
// Output: Positive: 2, Negative: 2, Zero: 2

let arr = [1, -2, 0, 4, -5, 0];

let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive++;
  } else if (arr[i] < 0) {
    negative++;
  } else {
    zero++;
  }
}

console.log(positive, negative, zero);

