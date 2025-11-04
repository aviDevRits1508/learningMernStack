//async programing


// setTimeout(() => {
//     console.log("hello world");
// }, 3000);

// console.log("first");
// console.log("second");
// console.log("third");


// console.log("first");

// setTimeout(() => {
//     console.log("waiting")
// }, 3000);

// console.log("last");


// setTimeout(() => {
    
// }, 5000);



// fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
//     res.json().then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })
// })

// try {
    
// } catch (error) {
    
// }


//example try catch


// console.log(a);
// console.log("hello world")


// try {
//     console.log(a)
// } catch (error) {
//     console.log("error", error.message)
// }


// console.log("first")


// async await

// "use strict";

// console.log("first");


// const fetchTodo = async () => {
//     try {
//        const res = await fetch('https://jsonplaceholder.typicode.com/todos/98');
//        const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchTodo();
// console.log("second");


//call back function


// function greet(name, callback){
//     console.log("hello", name);
//     callback(); 
// }

// function saybye(){
//     console.log("bye")
// }

// greet("avinash", saybye)



// {
//   userId: 5,
//   id: 98,
//   title: 'debitis accusantium ut quo facilis nihil quis sapiente necessitatibus',
//   completed: true
// }

const fetchTodo = async (callback) => {
    try {
       const res = await fetch('https://jsonplaceholder.typicode.com/todos');
       const data = await res.json();
       console.log(data);
       callback(data);
    } catch (error) {
        console.log(error);
    }
}
function verifyTaskCompleted(data){
    if(data.completed){
        console.log("task completed");
    }else{
        console.log("task not completed");
    }
}
fetchTodo(verifyTaskCompleted);
console.log("this line")
