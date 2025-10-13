//  --------------string method-----//
   // uppercase conversation//
// let string ="hello world"
// console.log(string.toUpperCase("hello world"))


// // lowercase conversation //
// let sentence = "JAVASCRIPT"
// console.log(sentence.toLowerCase("sentence"))


// //  find word in sentence //
// let line= "welcome to RITS"
// let word = "RITS"
// function check(line,word){
//     if (line.includes(word)){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }
// check(line,word)


// find a word position//      
//   let name= "hello world";
// function position(name){
   
// console.log(name.indexOf("world"))
// }
// position(name)


//replace a word//
// let text = " my name is John "
// newtext = text.replace("John","Avinash")
// console.log("replaced name:",newtext)


// extract substring//
//    let strings = "JavaScript"
// function extract(strings){
//     console.log(strings.slice(4))
//    }
//   extract(strings)

  // count string length//
  // let sentence1 = "I love coding"
  // function count(sentence1){
  //   console.log(sentence1.length,"stringlength")
  // }
  // count(sentence1)


  //combine two strings//
  
//   let string1="Hello"
//   let string2 = "World"
//   function combine(string1,string2){
// //   console.log(`this is my first string ${string1} this is my second string ${string2} `)
// console.log("first string",string1,"second string",string2)
//   }
//  combine(string1,string2)

//  ------same using concat-------

// let digit1= "hello"
// let digit2= " world"
// // console.log(digit1.concat(digit2))
// console.log(digit1+digit2)


// check start or end of word//
    // let statement = "Hello JavaScript"
    // console.log(statement.startsWith("Hello"))
    // console.log(statement.endsWith("Script"))



// reverse a string//

// let namelength="avinash"
// let reverse=namelength.split("").reverse().join("")
// console.log(reverse)

///////////////////////////////////////////////////////////////////////////////

//12345
//12345
//12345
//12345
// for (let i = 1; i <= 4; i++){
//   let output = " " ;
//   for (let j = 1; j <= 5; j++){
//     output = output + j + " ";
//   }
//   console.log(output)
// }

//1
//12
//123
//1234
//12345
// for (let p = 1; p <= 5; p++){
//   let print = " " ;
//   for (let q = 1; q <= p; q++){
//     print= print + q + " ";
//   }
//   console.log(print)
// }

// using while loop
// let a = 1
//  hello = " "
// while (a<=5){
//   hello = hello + a + " "
//   a++
//   console.log(hello)
// }


//10 9 8 7 6 5 4 3 2 1
//10 9 8 7 6 5 4 3 2 1
// for ( let a = 1; a <= 2; a++){
//   let output1 = " " ;
//   for (let b = 10; b >= 1; b--){
//     output1 = output1 + b + " " ;
//   }
//   console.log(output1)
// }

//using while loop
// let e = 1
//  let f = 10
//   let reversed = " "
// while (e<=3){
//      e++
//   while(f>=1){
//    reversed = reversed + f + " "
//      f--
//   }
//  console.log(reversed)
// }


 

//12345
//1234
//123
//12
//1
// for (let m =5; m >= 1; m--){
//   let answer = " " ;
//   for ( let n = 1; n <= m; n++){
//       answer = answer + n + " " ;
//   }
//        console.log(answer) 
//   }




//1
//23
//456
//78910
//11 12 13 14 15
// let a=1;
// for (let x=1; x<=5; x++){
//   let solution= " " 
//   for (let y=1; y<=x; y++){
//     solution = solution + a + " "
//     a++
//   }
//    console.log(solution)

//   }

  //10
  //10 9
  //10 9 8
  //10 9 8 7
  //10 9 8 7 6
  //10 9 8 7 6 5
  //10 9 8 7 6 5 4
  //10 9 8 7 6 5 4 3
  //10 9 8 7 6 5 4 3 2
  //10 9 8 7 6 5 4 3 2 1

// for (let c = 1; c <=10; c++){
//   let out = " "
//   for( let d = 10; d >= c; d--){
//     out = out + d + " "
   
//   }
//    console.log(out)
// }


//15 14 13 12 11
//10 9 8 7 
//6 5 4 
//3 2
//1
// let count1 = 15;
// for (let s= 1; s<=5; s++){
// let value = " "
// for ( k= 5; k>=s; k-- ){
//     value = value + count1  + " "
//     count1--
    
// }
// console.log(value)
// }



//string methods

let x = "Hi everyone"
console.log(x.charAt(4))

// let name = "java script"
// console.log(name.at(3))

let h = "hello worl"
console.log(h[4])

let str = "this is me"
console.log(str.charCodeAt(6))

let o = "this is javascript"
console.log(o.substring(2,9))

let y = "my name is pooja"
console.log(y.isWellFormed())

let num ="4"
console.log(num.padStart(10,"0"))


//difference between slice and substring
let g = "hello world"
console.log(g.slice(1,6))
console.log(g.substring(1,6))



let count = 0;
  let it=0;
for(let i = 1; i <= 2; i++){
    for(let j = 1; j <= 2; j++){
        for(let k = 1; k <= 10; k++){  
           for(let l = 1; l <= 10; l++){
            while(it < 10){
                count++
                it++
              
            }
             
           }
        }
    }
}
 console.log(count)
 


// 1
// 1 2
// 1 2 3
// 1 2 3 4 
// 1 2 3 4 5
let i=1
while (i<=1){
   answer = " "
  i++
  let j=1
  while (j<=5){
    answer=answer+j+" "
      j++
      console.log(answer)
  }
  
}

 

 