//  ------assignment day5-----
// function printTable(number){
//     for (let a=1; a<=10; a++){
//         console.log(number*a)
//     }
//   }
// printTable(2)
// printTable(3)
// printTable(4)


// //  ------nested switch statement------
// function printTable(p,q){
//     for (let a=p; a<=10; a++){
//     for( let b=1; b<=10; b++)    
//         console.log(a*b)
//     }   
//   }
// printTable(2,5)



// for (let x=1; x<=10; x++){
//  for (let y=1; y<=10; y++){
//    console.log(x*y)
//   }      
// }

// function table(num1){
//     for (let i=num1; i<=8; i++){
//         for (let j=1; j<=5; j++){
//           console.log(i*j);  
//         }
//     }
// }
// table(2)


// function newtable(x){
//     for (let i=10; i>=0; i--){
//         console.log(x*i)
//     }
// }
// newtable(1)

// // -------decrement manner------
   
// function newtable(a,b){
//     for (let i=10; i>=2; i--){
//         for (let j=10; j>=1; j--)
//             console.log(i*j)
//     }
// }
// newtable(10,2)

// // -------------switch statement----------

// function daycalculation(day){
//     switch(day){
//         case "monday":{
//             let message ="start of a week"
//             console.log(message)
//             break;
//         }
//         case "friday":{
//             let message ="ending of week"
//             console.log(message)
//             break;
//         }
//         case "sunday":{
//             let message ="weekend"
//             console.log(message)
//             break;
//         }
//         default:
//             let message ="none"
//     }
// }
// daycalculation("friday")



// let operator = "*"
// let a=10
// let b=6
// let message
// switch(operator){
//     case "+":
//     message = a+b;
//     break;
//     case "-":
//     message = a-b;
//     break;
//     case "*":
//     message = a*b;
//     break;
//     case "/":
//     message = a/b;
//     break;
//     default:
//     message = "invalid"        

// }
// console.log(message)




// function reveven(x){
//     let num=0
//     for (let i=10; i>=x; i--){
//         if (i%2==0){
//             console.log("even",i)
//               num=num+i
//     } 
// }
// console.log("total sum",num)
// }
// reveven(1)


// // //  ----product of all digits----

// function product(value){
//     let a=1
//      for (let i=1; i<=value; i++){
//         a=a*i
//      }
//      console.log("product of all digits",a)
//     }

//  product(8)




// // //   ------divisible by 4 ----

// function countdivisible(x){
//     for (let i=1; i<=x; i++)
//         if (i%4 ==0){
//          console.log(i)   
//         }
// }
// countdivisible(100)


// // //   -----------divisible by3 & its sum------

// function countdivisibleby(p){
//    let value=0 
//     for (let i=1; i<=p; i++){
        
//         if (i%3==0){
//             console.log("divisible by 3",i);
//         value=value+i;
//     }else{
//       console.log("not divisible",i)
//       sum=value+i;
//     }    
// }
// console.log(sum)
// }
// countdivisibleby(20)

 
// // //    ------------ all value divisible by 5 between 1&50 and its sum-----
// function allnumbers(num){
//     let a=0
//     for( let i=1; i<=num; i++){
//         if (i%5==0){
//             console.log(i)
//         }
//         sum=a+i
//     }
//     console.log(sum)
// }
// allnumbers(50)

// //   --------1 to n odd & even-------
// function oddeven(a){
//     let even=0;
//     let odd=0;
//     for (let i=0; i<=a; i++){
//         if (i%2==0){
//          console.log("even",i)
//          even=even+i 
//     } else { 
//         console.log("odd",i)
//         odd=odd+i
//         }
//     }
//     console.log(even)
//     console.log(odd)
    
// }
// oddeven(40)



// //  ------using while loop-----

//    function count(a){
//     let i=1;
//     let num=0
//     while(i<=a){
//            i++; 
//         if (i%4 == 0){
//             console.log("divisible",i); 
//             num=num+i
            
//         }else {
//             console.log("not divisible",i);
//         }
//     }
//      console.log("sum of numbers",num)
//    }
//    count(10);


//    function reveven(x){
//     let i=12; 
//     let num=0;
//     while (i>=x){
//         i--;
//         if (i%2==0){
//             console.log("even",i);
//             num=num+i;
//     } 
// }
// console.log("total sum",num)
// }
// reveven(1)


// function printnumbers(a){
//     let i=50
//     while ( i>=1){
//         i--
//         console.log(i)
//     }
// }
// printnumbers(1)

// //  -------square of numbers from 1 to 10----

// function squareofnumber(x){
//     let i=1
//     while ( i<=x){
//         i++;
//         console.log("square of numbers i",i*i)
//     }
// }
// squareofnumber(10)


// //  ------odd numbers between 1 & 30---- 
   
// function oddnumbers(a){
//     let i=1
//     while (i<30){
//         i++
//         if(i%2!=0){
//             console.log("odd",i)
//         }
//     }
// }
// oddnumbers(30)

// //  ----first 15 multiples of 3-----
//   function multiples(a){
//     let i=1
//     while (i<=a){
//         i++
//         console.log(3*i)
//     }
//   }
//   multiples(15)


// ----------------------------***************************-------------------------------------------------------------------

//  -------assignment using for loop-----

//  ------print 1-10------
  function printnumber(a){
    for ( let i=1; i<=a; i++){
       console.log(i)
    }
  }
  printnumber(10)


//  -------sum of 10------
   function sumofnumbers(a){
    let num=0
    for ( let i=1; i<=a; i++){
        num=num+i 
    }
    console.log("sum of first 10 numbers",num)
   }
   sumofnumbers(10)

//   -----------print even numbers-------
 function evennumbers(a){
    for ( let i=1; i<=a; i++){
        if( i%2==0){
            console.log("even",i)
        }
      }
    }
    evennumbers(20)

 
//    -----------multiplication table---------
   function multipletable(b){
    let num=5
    for (let i=1; i<=b; i++){
        console.log(num*i)
      }
   }
   multipletable(10)


//   --------------print reverse number---------
  function reversenumber(x){
    for (i=10; i>=1; i--){
        console.log("reverse",i)
    }
   }
   reversenumber(1)




// //    --------usng while loop -------
//  ------print numbers from 1 to N -----
  function printnumbers(num){
    let i=1
    while (i<=num){
      console.log(i)
      i++ 
    }
  }
  printnumbers(12)



//    ------sum of digits--------
  function sumofnumbers(a){
    let i=1;
    let num=0;
    while( i<=a){
        num=num+i
        i++
    }
  console.log("sum",num)
  }
sumofnumbers(10)



// //   -------factorial using while loop----
 function factorial(a){
    let i=1
    let j=2
    while( i<=a){
        j=j*i
        i++
    }
    console.log(j)
 }
 factorial(4)


// --------count digit in a number------

let a=123456
let count=0;

while (a>0){
    a=Math.floor(a/10);
    count++
}
console.log("digit",count)



//  -------reverse a number like 123->321----

let x=123
let reverse=0

while (x > 0){
    let digit=x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
}
console.log("reverse numbers",reverse)



