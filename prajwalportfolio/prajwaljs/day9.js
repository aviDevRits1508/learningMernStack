const car = {
    type:"Fiat", 
    model:"500",
    color:"white"
};
console.log(car)



const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 
console.log(person.age)




const persons = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(persons.firstName)


// using function
function man(name,age,height,weight){
    this.name=name;this.age=age;this.height=height;this.weight=weight
}
const mybrother=new man("prajwal",22,5.9,70)
console.log(mybrother)



const fruit=[
    ["banana",50],
    ["apple",120],
    ["sapota",150],
    ["kivi",200]   
];
const myobj=Object.fromEntries(fruit)
console.log(myobj.apple)