console.log("Hi sachin");


  // declaring the variable
  let name ="sachin";  
console.log(name);
name = "solapure";
console.log(name);


const pin = "45";
console.log(pin);

var car = "bmw";
console.log(car);

let book="about home";
console.log(book);


book = "about school";
console.log(book);

let book1 = "about phone";
console.log(book1);

const book2 = "about laptop";
console.log(book2);
// book2 = "about pen";
// console.log(book2);
var lm2 = "sachin";
console.log(lm2);
lm2 = "solapure";
console.log(lm2);
var lm2 = "siddeshwar";
console.log(lm2);




// checking the type of variable value
let first = "sachin";
let second = 24;
let third = 10772347567n;
let fourth = 5.00;
let fifth = 3;
let sixth = 6;
console.log(typeof first);
console.log(typeof second);
console.log(typeof third);
console.log(typeof fourth);
 let sb = true;
 console.log(typeof sb);



             // string concatination
 
 let firstname = 'sachin';
 let surname = 'solapure';
 let village = 'siddeshwar';
console.log(firstname+surname+village);


        // used comparision operators
let low = 10;
let high = 'sa';
console.log(low == high);
console.log(low === high);
let m = 10;
m+=10;
console.log(m);
let kl = 10;
let mn = 11;
console.log(kl != mn);
console.log(kl < mn);
console.log(kl >= mn);



     // Calculating the total marks of student 
function totalmarks(python,java,c,database,ml,iot){
    let mn = python+java+c+database+ml+iot; 
    let kl = (mn*100)/600;
    
    console.log("The total marks and percantage scored by sachin are" ,mn,kl);
    console.log("the marks and percantage scored by param",  mn,kl);
}
  totalmarks(70,30,80,50,60,60);

     //  for calculating the grocaries  

  function groceries(shampoo,soap,towels,chips){
    let sachin = shampoo+soap+towels+chips;
    console.log("This month total bill", sachin);
  }
  groceries(430,243,100,200);

   // calculating area of triangle  

  function calculatetriangle(b,h){
    var area = 0.5*b*h;
    console.log("The area of the traingle is",  area);
  }
  calculatetriangle(100,200);

    //  calculating the area of circle  

  function circle(r){
    var areaofcircle = 3.14*r*r;
    console.log("the area of circle is",areaofcircle );

  }
  circle(20);


    // calculating the area of the rectangle
  function rectangle(l,w){
  var areaofrectangle = l*w;
  console.log("the area of rectangle is", areaofrectangle);

  }
  rectangle(100,200);

  // working on operators using function
  function operators(a,b){
    let add = a+b;
    let sub = a-b;
    let mul = a*b;
    let dev = a/b;
    let mod = a%b;
    let inc = a--;
    let dec = a++;
    let dec2 = ++b;
    console.log(add);
    console.log(sub);
    console.log(mul);
    console.log(dev);
    console.log(mod);
    console.log(inc);
    console.log(dec);
    console.log(dec2);
  }
  operators(5,6);


    
    
    




    
