// 1. 
let marks = [12, 34, 45, 56, 67, 78, 89, 90];
console.log(marks);  // It will print marks [12, 34, 45, 56, 67, 78, 89, 90]

console.log(marks.length); // Property ->  Length

console.log(typeof(marks));  // Type ->  Object

console.log(marks[2]);        // Index -> We can check any position og number

console.log(marks[100]);     // If does not exist -> Undefined

marks[0] = 31;
console.log(marks);     // Can change the numbers in Array 12 to 31


// 2. 
let heroes = ["Ironman","Superman", "Antman"]; //String
console.log(heroes);
console.log(typeof(heroes));  // Prints ["Ironman","Superman", "Antman"]

heroes[1] = "Shaktiman";
console.log(heroes);        // Can replace Superman to Shaktiman [ 'Ironman', 'Shaktiman', 'Antman' ]

// Using For Loop   
// We can print our all heros name separately. One below the other
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}     

// Using For of loop 
// We can print our all cities name separately. One below the other
let cities = ["Bidar" , "Humnabad" , "Bhalki" , "Kamalnagar" , "BasavaKalyan"];
for (let city of cities){
    console.log(city);
}
    
// All cities name in UpperCase
for (let UpperCase of cities){
    console.log(UpperCase.toLocaleUpperCase());
}


// 1. For a given array with marks of students -> [85,97,44,37,76,60]
// Find the average marks of the entire class ? 

// To add all the numbers (sum) from Array;
let mark = [85,97,44,37,76,60];
let total = 0;
for (let a = 0; a < mark.length; a++){
    total = total + mark[a];
}
console.log(total);          // It prints 399

// One more method
let c = [85,97,44,37,76,60];
let d = 0;
for (let m = 0; m < 6; m++){
    d = d + c[m];
}
console.log(d);               // It prints 399

// One more method 
let e = [85,97,44,37,76,60];
let f = 0;
for (let g of e){
    f = f + g;
}       
let avg = f / e.length;
console.log(avg);            // It prints 66.5 


// 2. For a given array with prices of 5 items -> [250,645,300,900,50]
// All items have an offer of 10% off on them. Change the array to store final price after applying offer.
let items = [250,645,300,900,50];
let bill = 0;
for (let a = 0; a < 5; a++){
    let off = items[a] / 10;
    items[a] = items[a] - off;
}
console.log(items);

// 3. 20% tax on items
// Array: [100, 200, 300, 400, 500]
// Task: Add 20% tax to each item and update the array with the new prices.
let z = [100, 200, 300, 400, 500];
for (let y = 0; y < 5; y++){
    let tax = z[y] / 20;
    z[y] = z[y] + tax;
}
console.log(z);


// 4.Halve the prices
// Array: [50, 80, 120, 200, 500]
// Task: Apply a 50% discount to all items and update the array.
let u = [50, 80, 120, 200, 500];
for (v = 0; v < 5; v++){
    let off = u[v] / 2;
    u[v] = u[v] - off;
}
console.log(u);


// 5. Increase prices by 15%
// Array: [1000, 2000, 1500, 1200, 2500]
// Task: Add 15% increase to each price and update the array.
let m = [1000, 2000, 1500, 1200, 2500];
for (let n = 0; n < 5; n++){
    let price = m[n] * 0.15;
    m[n] = m[n] + price;
}
console.log(m);


// 6. Convert prices from USD to INR
// Array (USD): [10, 20, 30, 40, 50]
// Conversion rate: 1 USD = 83 INR
// Task: Convert each price to INR and update the array.
let usd = [10, 20, 30, 40, 50];
for (let u = 0; u < 5; u++){
    usd[u] = usd[u] * 83;
}
console.log(usd);


// 7. Round off prices
// Array: [123.45, 67.89, 90.12, 45.67, 78.34]
// Task: Round each price to nearest whole number and update the array.
let a = [123.45, 67.89, 90.12, 45.67, 78.34];
for (let b = 0; b < a.length; b++){
    a[b] = Math.floor(a[b]);
}
console.log(a);

// 8. Remove items under 100                          
// Array: [50, 150, 80, 200, 120]
// Task: Remove all items less than 100 from the array.
let g = [50, 150, 80, 200, 120];
let i = 0;
for (let h = 0; h < g.length; h++){
    if (g[h] >= 100){
        
    }

}
console.log(g);                                   


// 9. Find maximum and minimum price                  
// Array: [250, 645, 300, 900, 50]
// Task: Print maximum and minimum price from the array.
let j = [250, 645, 300, 900, 50];
let max = j[0];
let min = j[0];

for (let k = 0; k < j.length; k++){
    if (j[k] >= max) {
        max = j[k];
    }

    if (j[k] <= min){
        min = j[k];
    }
}

console.log(max);
console.log(min);                                   