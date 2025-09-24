// Total marks of students and their percentage
function totalPercent(kannada,english,science,social,maths){
    let a =kannada + english + science + social + maths
    console.log(a)
    let b=(a/500)*100
    console.log(b)
    // return a,b

}
totalPercent(98,78,65,99,100)
totalPercent(98,68,55,89,90)


// calculating total amnt and adding gst
function groceries(sugar, salt,apple,carrot,dal){
    let tot=sugar+salt+apple+carrot+dal
    console.log(tot)
    let gst= tot+(tot*(18/100))
    console.log(gst)
}
groceries(10,20,30,40,50)

// calculating area
function area(b,h,r,l,b,s){  
    // area of traingle 
    let tri=(1/2)*b*h
    console.log(tri)

    // area of circle
    let circle=(22/7)*r**2
    console.log(circle)
    
    // area of rectangle
    let rec=l*b
    console.log(rec)

    // area of square
    let squ=s**2
    console.log(s)

}
area(2,3,6,3,2,5)
area(7,5,6,4,5,7)
area(9,6,4,7,3,9)

// performing different operations
x=9
y=4
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

p=8
q=2
console.log(p==q)
console.log(p>q)
console.log(p>=q)
console.log(p!=q)
console.log(q<p)

e=6
f=4
console.log(++e)
console.log(e++)
console.log(e)
console.log(f++)
console.log(++f)
console.log(f)
console.log(--f)
console.log(f--)
console.log(f)
