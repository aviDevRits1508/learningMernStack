//switch account


function swap(a,b){
    switch(true){
        case a>b:
            console.log("a is reater than b");
            break;
            case a<b:
                console.log("b is greater than a");
                break;
            default:
                console.log("a and b are equal");
    }
}
swap(10,20);


// loops 
//loops are used to repeat a block of code multiple times until a certain condition is met.
// There are several types of loops in JavaScript, including for, while, and do...while loops.
// 1. For Loop
// The for loop is used when the number of iterations is known beforehand.