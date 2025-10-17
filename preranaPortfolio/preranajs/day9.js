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