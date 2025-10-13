 function totalmarks(hindi,eng,science,maths){
    let totalmarks1=hindi+eng+science+maths
  console.log("totalmarks:",totalmarks1);
 let percentage=(totalmarks1/400)*100;
  console.log("percentage",percentage+"%");
 }
 totalmarks(30,40,50,60)
 totalmarks(60,80,70,90)
   

function groceries(a,b,c){
 console.log("groceries:",a,b,c);
}
 groceries("egg","bread","rice");



 function areaoftri(base,height){
  let area=0.5*base*height;
  console.log("areaoftri:",area);
 }
 areaoftri(2,2);

 function areaofcircle(r){
 let area=3.141*r*r;
 console.log("area of circle:",area);
 }
 areaofcircle(4);


 function area(r,b,h){
  let areaoftri=0.5*b*h;
  console.log("areaoftriangle:",areaoftri);

  let areaofrect=b*h;
  console.log("area of rectangle:",areaofrect);
 }
 area(3.141,2,2)