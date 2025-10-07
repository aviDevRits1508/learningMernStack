function Printsum(a) {
    sum=0;
    for(let i=1; i<=a; i++){
        sum=sum+i;
    }
    console.log(sum);
}
Printsum(5)


/*even numbers in reverse*/
function evenreverse(b){
    let evenSum = 0;
    for (let i=b; i>=1; i--)
        {
        if(i%2==0){
            console.log(i);
            evenSum = evenSum+i;
    

        
        }
    }
    console.log(evenSum);
}
evenreverse(6)

/* print reverse odd numbers*/

function oddreverse(c){
    let oddSum = 0;

    for (let i = c; i >= 1; i--){
        if(i%2!== 0){
            console.log(i);
            oddSum = oddSum+i;
        }
       
    }
    console.log(oddSum);

}
oddreverse(5)


function evenoddsum(d){
    let N = 20;
    let evenSum = 0;
    let oddSum = 0;

    for (let i=1; i<=20; i++){
        if(i%2 == 0){
            console.log(i);
            evenSum = evenSum+i;
        }
        else{
            console.log(i);
            oddSum=oddSum+i;
        }
    }
    console.log(evenSum)
    console.log(oddSum)
}
evenoddsum(6)

/*numbers divisible by 4*/

function divisibleby(e){
    let num1 = 0;
    for(let i=1; i<=20; i++){
        if(i%4 == 0){
            num1= num1+1;
            console.log(i);
        }
    }
    console.log(num1);


}
divisibleby(4)

/*divisible by 3 and its sum*/

function divisiblebyandsum(f){
    let num2 = 0;
    let sum1 = 0
    for(let i=1; i<=10; i++){
        if(i%3==0){
            num2=num2+1;
            sum1= sum1+i;
            console.log(i);
        }
    }
    console.log(num2);
    console.log(sum1);
}
divisiblebyandsum(3)

/*divisible by 5 between 1 to 50*/

function divisibleby5(g){
    let sum2 = 0;
    for (let i=1; i<=50; i++){
        if(i%5==0){
            console.log(i);
            sum2=sum2+i;
        }
    }
    console.log(sum2);
}
divisibleby5(5)



