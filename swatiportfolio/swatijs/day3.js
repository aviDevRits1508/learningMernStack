
let a=40;
let b=60;

let e=30;
let f=50;

let c=a+b;
let d=e-f

console.log(c)
console.log(a)
console.log(a+=b)
console.log(a=+b)

console.log(d)
console.log(Math.abs(d))

// comparison

let x=50
let y=60

let q= (x==y)
console.log(q)
let z = (x!=y)
console.log(z)

let g=20
let h='30'

let r=(g==h)
console.log(r)
let t=(g===h)
console.log(t)

let j=60;
let k=40;
console.log(j>k)

let m=50
let n='70'

console.log(typeof(n))

// conditional

let book = true;
if(!book) {
    console.log('able to work')
} else{
    console.log('able to not work')
}
// if a>b perform subtraction else perform addition

function sick (a,b){

    if(a>b) {
            console.log(a-b)

    } else{
           console.log(a+b)
    }
}

 sick (50,60)
 sick (100,50)



 function logo (s){
    if (s){
        console.log("you are avalable")
    }
    else{
        console.log("you are not avalable")
    }
 }

 let issick = "yes"
logo(issick)
