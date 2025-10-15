// let first = ["Los angles", "bengaluru", "Hydrabad","Pune"]
// first.push("New Delhi")
// console.log(first)

// let item =[1,2,3,4,5]
// item.pop()
// console.log(item)

// let add = ["watch","book","pen"]
// add.unshift("pencil")
// console.log(add)

// let rem = ["watch","book","pen"]
// rem.shift("pencil")
// console.log(rem)

// let devices1 = ["phone","telivision","laptop","bluetooh"]
// let devices2 = ["cooler","car","bike"]
// console.log(devices1.concat(devices2))

// let marks = ["ab","hs","kl","mn","dd"]
// console.log(marks.sort())

// let scores = [78,98,45,90,56]
// let halfcentury = [55,45,78,66,44]
// console.log(scores.sort())
// // console.log(scores,halfcentury,(halfcentury-scores))

//       //  using shallow copy 
// let vegitables1 = ["cucumber","potato"]
// let vegitables2 = ["tomato","brinjal"]
// let vegitables3 = [...vegitables1, ...vegitables2]
// console.log(vegitables3)


// let scores1 = [78,98,45,90,56]
// console.log(scores1.toString())

// let cricketers = ["kohli","rohit","dhoni"]
// console.log(cricketers.reverse())

// let part = [10,20,30,40,50,60,70]
// console.log(part.slice(1,5))

// let phone = ["vivo","realme","oppo","oneplus"]
// console.log(phone.splice(2,1,"ios","samsung"))


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
 let item = [1, 3, 4, 2, 2]
 let  duplicate = 0
  for(let i=0; i<item.length; i++){
    if(item[i]==item[i])
        return duplicate
        
 }
 console.log(duplicate)
         







