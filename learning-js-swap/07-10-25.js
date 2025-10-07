
//while loop
// The while loop is used when the number of iterations is not known beforehand and depends on a certain condition.
// The loop continues as long as the condition is true.

let i=1;

while(i<=5){
    console.log(i,"no. loop");
    i++;
}


//nested for loop
// A nested for loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.
 
for(a=1;a<=2;a++){
    let b=1;
    while(b<=2){
        console.log(a," is from main loop", b, "from nested loop")
        b++;
    }
}