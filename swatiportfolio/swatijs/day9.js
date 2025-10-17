// uppercase

let mess="hello world";
let uppercasemess=mess.toUpperCase();
console.log(uppercasemess);

// lowercase

let mess1="JAVASCRIPT";
let lowercasemess1=mess1.toLowerCase();
console.log(lowercasemess1);

// find sentence

let str="my name is swati"
let wrd="sudeep"
function check (str,wrd){
    if(str.includes(wrd)){
        console.log("true")
    }else{
        console.log("false")
    }
       
}
console.log(check(str,wrd))

// find position

let str1="i love music"
let wrd1="music"
console.log(str1.indexOf(wrd1))

// extract substing

let str2="the house is big"
let wrd2="the house is"
console.log(str2.substring(0,9));

// replace word

let str3="i love apple"
let wrd3= str3.replace("apple","mango")
console.log(wrd3);

// count string length

let str4="i like coffe"
let length=str4.length
console.log(length)

// combine to strings

let str5="Swati"
let wrd5="Ghante"
console.log(str5,wrd5)

// check start or end word

let str6="hello javascript"
console.log(str6.startsWith("hello"))
console.log(str6.endsWith("script"))

// reverse a string 

let str7="sudeep"
let reverse=str7.split("").reverse().join("")
console.log(reverse)


// concat string

let sub="Amar"
let sub1="Ghante"
let result=sub+" "+ sub1
console.log(result)

// trim
let sub2="        hello word"
let result1=sub2.trim()
console.log(result1)