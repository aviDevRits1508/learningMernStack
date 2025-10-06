//   -----assignment operators----
let l=10
let m=15
let z=l+m;

console.log(z)
console.log(l+=m)
console.log(m+=l)
console.log(l)
console.log(m)

let a1=8
let b1=5
console.log(a1*=b1)
console.log(b1*=a1)
console.log(b1)
console.log(a1)


// ------ sir assignment------
let a=50
let b=60
 
 if (a>b) {
   console.log(a-b)
 } 
 else {
    console.log(a+b)
 }

 function greaterthan(p,q){
   if (p>q) {
    console.log(p-q)
   } 
   else {
    console.log(p+q)
   }
 }
greaterthan(40,65)

// -----comparison----

 let x=20
 let y=25
 console.log(x>=y)

let c1=25
let d1=50
 
let e=(c1!=d1)
let e1=(c1>=d1)
let e2=(c1<=d1)
let e3=(c1==d1)
let e4=(c1===d1)

console.log(e)
console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)

function myname(p){
    if (p) {
        console.log("pooja here")
    } else {
       console.log("pooja not here") 
    }
}
let word= true;
console.log(myname(word))

// ------- converting into number----
let pq=25
let rs='55'
console.log(Number(rs)>=Number(pq))

