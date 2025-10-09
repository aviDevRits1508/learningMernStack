//  --------------string method-----//
   // uppercase conversation//
let string ="hello world"
console.log(string.toUpperCase("hello world"))


// // lowercase conversation //
let sentence = "JAVASCRIPT"
console.log(sentence.toLowerCase("sentence"))


// //  find word in sentence //
let line= "welcome to RITS"
let word = "RITS"
function check(line,word){
    if (line.includes(word)){
        console.log("true")
    }else{
        console.log("false")
    }
}
check(line,word)


// find a word position//      
  let name= "hello world";
function position(name){
   
console.log(name.indexOf("world"))
}
position(name)


//replace a word//
let text = " my name is John "
newtext = text.replace("John","Avinash")
console.log("replaced name:",newtext)


// extract substring//
   let strings = "JavaScript"
function extract(strings){
    console.log(strings.slice(4))
   }
  extract(strings)

  // count string length//
  let sentence1 = "I love coding"
  function count(sentence1){
    console.log(sentence1.length,"stringlength")
  }
  count(sentence1)


  //combine two strings//
  
  let string1="Hello"
  let string2 = "World"
  function combine(string1,string2){
//   console.log(`this is my first string ${string1} this is my second string ${string2} `)
console.log("first string",string1,"second string",string2)
  }
 combine(string1,string2)

//  ------same using concat-------

let digit1= "hello"
let digit2= " world"
// console.log(digit1.concat(digit2))
console.log(digit1+digit2)


// check start or end of word//
    let statement = "Hello JavaScript"
    console.log(statement.startsWith("Hello"))
    console.log(statement.endsWith("Script"))



// reverse a string//

let namelength="avinash"
let reverse=namelength.split("").reverse().join("")
console.log(reverse)

