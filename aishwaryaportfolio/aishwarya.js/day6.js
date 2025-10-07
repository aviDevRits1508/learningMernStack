/*while loop*/

let i = 1;
while(i<=6){
    console.log(i);
    i++;
}


/*print even numbers*/
 function evennumber(a){
    let num=2;
    while(num<=a){
        console.log(num);
        num=num+2;
    }
 }
 evennumber(10)


 /*countdown from 5 to 1*/
 function countdown(b){
    let i = b;
    while (i>=1){
        console.log(i);
        i--;
    }
 }
 countdown(5)


 /*nested for loop*/


 for(let i=1; i<=4; i++){
    console.log(i);
    for(let j=1; j<=4; j++){
        console.log(j)
    }
 }

 /*print 1 to 10*/
 function Printnumbers(){
    for(let i=1; i<=10; i++)
        console.log(i)
 }
