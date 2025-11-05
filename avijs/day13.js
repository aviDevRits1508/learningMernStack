//clouser

// function outer() {
//     let counter = 0;

//     function inner() {
//         counter++;
//         return counter
//     }
//     return inner
// }


// let a = outer()
// let b = outer()
// console.log(a())
// console.log(a())
// console.log(b())
// console.log(a())


// function normalFunction(){
//     let counter = 5;
//     return counter;
// }

// let num = normalFunction()
// console.log(num)




function bankAccount(){
    let balance = 0;
    return {
        deposit: function(amount){
            balance = balance + amount;
        },
        withdraw: function(amount){
            balance = balance - amount;
        },
        getBalance: function(){
            return balance;
        }
    }
}

let prajwalAccount = bankAccount();
let parmeshwarAccount = bankAccount();

// prajwalAccount.deposit(1000);
parmeshwarAccount.deposit(2000);
prajwalAccount.withdraw(500);

console.log(prajwalAccount.getBalance());
console.log(parmeshwarAccount.getBalance());



