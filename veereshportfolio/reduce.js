const num =[1,2,3,4]
let sumB = num.reduce((accumalator,currentvalue) =>
{return accumalator+currentvalue},0)
console.log(`addition,`,sumB)

const num2 = [1,2,3,4]
let subA = num2.reduce((value1,value2) => {return value1*value2}) 
console.log(`suntraction`,subA)

const num3 = [3,7,2,9,,4]
let max1 = num3.reduce((value1,value2) =>{return Math.max( value1,value2)})
console.log(`maximum`,max1)

const num4 = [3,7,2,9,,4]
let min1= num4.reduce((value1,value2) => {return Math.min(value1,value2)} )
console.log(`minimum`,min1)
