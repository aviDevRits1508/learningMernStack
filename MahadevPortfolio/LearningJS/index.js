
// Total marks
function totalMarks(social, science, maths, english, hindi) {
  return social + science + maths + english + hindi;
}

let total = totalMarks(85, 90, 78, 95, 88);
let percentage = (total / 500) * 100;

console.log("Percentage:" + percentage + "%");
console.log("Total Marks:" + total);

// Total marks
function totalmarks(english, maths, kannada, hindi)
{
    let total=english+maths+kannada+hindi;
    console.log(total)

    let totals=(total/400)*100;
    console.log(totals)
}

totalMarks(50,80,38,58);


// Area of Triangle
function areaoftriangle(base, height) {
    return 0.5 * base * height;
}

console.log("area:", areaoftriangle(10,5));


// Area of Circle
function areaofCircle(radius) {
    return Math.PI * radius * radius;
}

console.log("circle:",areaofCircle(7));




