let first = ["Los angles", "bengaluru", "Hydrabad","Pune"]
first.push("New Delhi")
console.log(first)

let item =[1,2,3,4,5]
item.pop()
console.log(item)

let add = ["watch","book","pen"]
add.unshift("pencil")
console.log(add)

let rem = ["watch","book","pen"]
rem.shift("pencil")
console.log(rem)

let devices1 = ["phone","telivision","laptop","bluetooh"]
let devices2 = ["cooler","car","bike"]
console.log(devices1.concat(devices2))

let marks = ["ab","hs","kl","mn","dd"]
console.log(marks.sort())

let a = [78,98,45,90,56]
 console.log(a.sort((a,b)=> b-a))

      //  using shallow copy 
let vegitables1 = ["cucumber","potato"]
let vegitables2 = ["tomato","brinjal"]
let vegitables3 = [...vegitables1, ...vegitables2]
console.log(vegitables3)


let scores1 = [78,98,45,90,56]
console.log(scores1.toString())

let cricketers = ["kohli","rohit","dhoni"]
console.log(cricketers.reverse())

let part = [10,20,30,40,50,60,70]
console.log(part.slice(1,5))




    //  using join method

   let subjects = ["java","python"]
   console.log(subjects.join(""))
   let price =[20,30,50]
   console.log(price.join("|"))

     

   //  using find method  
   
   let clothes = [20,30,50,1]
   function found(clothes){
    return clothes>20
   
   }
     console.log(clothes.find(found))


    //  using filter method
    let rank = [23,45,56,1,6,23,78,100,200]
    function choose(rank){
        return rank<100
    }
      console.log(rank.filter(choose))

    //  using flat method
    let months = [["jan","feb"],["mar","apr"],["may","jun"]]
    console.log(months.flat()) 

    let percantage = [98,89,[56,[45,78],95],10]
     console.log(percantage.flat(2)) 


    //  using map method
    let sales = [500,1000,2300,45000,1033,340]
    function num(sales){
        return sales+1000
    }
    console.log(sales.map(num))

    let numbers = [500, 1000];
    let result = numbers.map(num => num+ 1000);
    console.log(result);  


    // using reduce method
    let cal1 = [20,30,40,50,60]
    function cal2(cal1){
        return cal1*2
    }
    console.log(cal1.reduce(cal2))


    // using spread operator math.min method
    let aa = [12,34,5,89]
    let res = Math.min(...aa)
    console.log(res)
    let res2 = Math.max(...aa)
    console.log(res2)


    // using the some method give the output like true or false
    let cat = [34,57,23,58]
    function res3(cat){
        return cat<50
    }
    console.log(cat.some(res3))


    // using array.from method
    let create = "dieriuuhvjdsbve"
    console.log(Array.from(create))

    // creating one array to another array
    let create2 = [2,3,4,5,6,7]     
    console.log(Array.from(create2,(m) => m+10))

    // for using for each method
   let all = [1,2,3,4,5,6]
   all.forEach(function(pp){
        console.log(pp*2)
   })
    


            //shalow copy example

    //   let phone = {
    //    name : "oneplus",
    //    model : "in2021",
    //    variant : "oneplus",
    //    storage : "256gb",
    //    ram:"16gb",
    //    price:50000 ,
    //    city:{
    //         areacode: 242,
    //         location : "Bengaluru"
    //    }
    //   }

    //   let shallow = {...phone}
    //    shallow.city.areacode = 1000
    //   console.log(phone)
    //   console.log(shallow)





    //    deep copy example

      let phone = {
       name : "oneplus",
       model : "in2021",
       variant : "oneplus",
       storage : "256gb",
       ram:"16gb",
       price:50000 ,
       city:{
            areacode: 242,
            location : "Bengaluru"
       }
      }
      let deep = JSON.parse(JSON.stringify(phone))
      deep.city.areacode = 1000
      console.log("this is the orginal",  phone)
      console.log("this is the deep",   deep)
             
    
   







    



    







// // objects
// let phone = {
//     name : "oneplus",
//     model : "in2021",
//     variant : "oneplus",
//     storage : "256gb",
//     ram:"16gb",
//     price:50000

// }

// console.log(phone.model)
// phone.name = "vivo"
// console.log(phone)

// console.log(Object.keys(phone))



    //  counting the integers
//  count1 = 0
//  count2 = 0
//  num = 0
// let first = [1,-2,0,4,-5,0]
// for(let i =0; i<first.length; i++){
// if(first[i]>0){
//      count1++ 
// }
// else if(first[i]<0){
//     count2++
// }
// else if(first[i]==0){
//     num++
// }

// }
//  console.log("positive", count1)
//  console.log("Negative", count2)
//  console.log("zero", num)



    //comparing the elements of two array
    // let a = [1,2,3]
    // let b = [1,4,3]
    // for(let i=0; i<3; i++){
    // if(a[i]===b[i]){
    //     console.log("same")
    // }
    // else{
    //     console.log("different")
    // }

    // }




    // printing the grade marks and average
    // let pass = [85, 78, 92, 88]
    // for(let i = 0; i<pass.length; i++){
    //     let avg = (pass[0]+pass[1]+pass[2]+pass[3])/4
    //     if(pass[i]>=90){
    //         console.log("you are scored grade A")
    //     }
    //     else if(pass[i]>=80){
    //         console.log("grade B")

    //     }else if(pass[i]>=70){
    //         console.log("grade C")
    //     }
    //     else{
    //         console.log("grade D")
    //     }

    //     }


    
    //   counting the even and odd
//     let count1 = 0
//     let count2 = 0
//     let even =  [1, 2, 3, 4, 5, 6]
//     for(let i =0; i<even.length; i++){
//         if(even[i]%2==0){
//            count1++
        
//         }
    
//     else{
//         count2++
        

//     }
// }
// console.log("Even",count1)
// console.log("Odd", count2)


// finding the duplicate element
//  let item = [1, 3, 4, 2, 2]
//  let duplicate = []
//   for(let i=0; i<item.length; i++){
//     if(item[i]===item[i]){
//        console.log("duplicate is" ,duplicate)
       
//   }
//   else {
//     console.log("no duplicate item found")
      
//   }    
//  }

    //  finding the second largest element
    //    let m= [10, 20, 5, 30, 25]
    //    let second = m.sort((a,b)=>b-a)  
    //    console.log("the second larget is",second[1])

    // removing the duplicate elements
    let m = [1, 1, 2, 10, 3]
    let n =[]
    if(m.indexOf() == n.indexOf(m[])){
        console.log("the elements are",  n.push(m))
    }
    else{
        console.log("element found")
    }
    

 







 
         

     






