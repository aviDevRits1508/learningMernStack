// array methods

// length 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

// toString()
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits2.toString()
console.log(a)

// push()
let veg = ["tomato","potato","carrot","chilli"]
veg.push("cabbage")
console.log(veg)

// pop()
let veg2 = ["tomato","potato","carrot","chilli"]
veg2.pop()
console.log(veg2)

// unshift()
let veg3 = ["tomato","potato","carrot","chilli"]
veg3.unshift("pomato")
console.log(veg3)

// shift()
let veg4 = ["tomato","potato","carrot","chilli"]
veg4.shift()
console.log(veg4)

// reverse()
let arr5 = [1,2,3,4,5];
console.log(arr5.reverse())

// concat
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr = arr1.concat(arr2)
console.log(arr)

// sort
let str = [ 'mango', 'tomato', 'potato', 'carrot', 'kiwi']
str.sort()
console.log(str)

// slice
let fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits3.slice(1);
console.log(citrus)

// copyWithin()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.copyWithin(2, 0);
console.log(fruits4)

// join
let u=[1,3,5,7,10]
console.log(u.join(""))

// at
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits5.at(2);
console.log(fruit)

let aa=[10,9,8,7,6]
let aaa=aa.at(4);
console.log(aaa)
console.log(aa)

// delete
let b=[9,0,8,7,6]
delete b[2]
console.log(b)

// flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

let myArr2 = [['a',2],['b',4],['c',6]];
const newArr2 = myArr2.flat();
console.log(newArr2)

// indexOf
const fruits6 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits6.indexOf("Apple") ;
console.log(position)

const veg1 = ["tomato", "Okra", "Aaloo", "Matar"];
let position2 = veg1.indexOf("Aaloo") ;
console.log(position2)

// lastIndexOf
const fruits7 = ["Apple", "Orange", "Apple", "Mango","mkom"];
let position3 = fruits7.lastIndexOf("Apple");
console.log(position3)

// includes
const fr = ["Banana", "Orange", "Apple", "Mango"];
console.log(fr.includes("Mango"));


let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

console.log("Employee=> ", employee);

// Shallow copy
let newEmployee = { ...employee };    
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";

console.log("Employee=> ", employee);        
console.log("New Employee=> ", newEmployee);

// Deep copy
let employee2= {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee2 = JSON.parse(JSON.stringify(employee2));
console.log("Employee=> ", employee2);
console.log("New Employee=> ", newEmployee2);
console.log("---------After modification---------");
newEmployee2.ename = "Beck";
newEmployee2.salary = 70000;
console.log("Employee=> ", employee2);
console.log("New Employee=> ", newEmployee2);
