let no=3;
for(let i=1; i<=10; i++){
    console.log(3 + "x"+i +"="+ 3*i)
}

function square(x){
    let square=x*x
    console.log("square of x:",square)
}
square(8)

function table(num){
    for(let i=1; i<=10; i++){
    console.log(num + "x"+i +"="+ num*i)
}
}
table(4,5,6)
table(7)


for(let i=10; i>0; i--){
    console.log(i)
}