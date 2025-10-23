

// // studentmarks

// function studentmarks(eng,kan,hin,math,science,social){
//     let sum= eng + math + kan + hin + science +  social
//     console.log(sum);
//     let percentage=(sum/600)*100
//     console.log(percentage)
// }
// studentmarks(85,80,90,80,82,84)
// studentmarks(78,89,87,90,75,76)

// // groceries

// function groceries(suger,teapower,soap,oil,powder){
//     let sum1=suger+teapower+soap+oil+powder
//     console.log(sum1);
// }
// groceries(45,75,40,100,20)


// // functions

// function sum(a , b){
//     console.log(a+b)
// }
// sum(10,20)

// function sub(a, b){
//     console.log(a-b)
// }
// sub(30,20)

// function mul(a, b){
//     console.log(a*b)
// }
// mul(10,2)

// function div(a, b){
//     console.log(a/b)
// }
// div(10,2)

//     // area of triangle

// function triangle(b,h){
//     areaoftriangle=(0.5)*b*h
//     console.log(areaoftriangle)
// }
// triangle(25,20)

// // circle

// function circle(r,r){
//     areaofcircle=(3.14)*r*r
//     console.log(areaofcircle)
// }
// circle(10,20)


const university = {  departments: [    {      name: "Computer Science",      
    courses: [        {          code: "CS101",         
         students: [          
              { name: "Amit", grades: [85, 90, 78] },           
               { name: "Sara", grades: [92, 88, 95] }          ]        },   
                    {          code: "CS102",        
                          students: [           
                         { name: "John", grades: [70, 89, 80] },          
                           { name: "Priya", grades: [88, 94, 91] }        
                          ]        }      ]    },
                              {      name: "Mathematics",  
                                    courses: [        {          code: "MA101",          students: [        
                                            { name: "Rahul", grades: [75, 85, 79] },         
                                               { name: "Neha", grades: [90, 92, 85] }   
                                                   ]        }      ]    }  ]};



                                                   
                                                   
// Print All Student Names: Print the names of all students in all departments and courses.

    university.departments.forEach(dept => {
    dept.courses.forEach(course => {
    course.students.forEach(student => {
    console.log(student.name);
    });
  });
});
