// Task 1

// var grade = document.getElementById("grade");
// var result = document.getElementById("result");
// function checkGrade(){
//     if(grade.value <= 100 && grade.value >=90)
//     {
//          result.innerHTML = "Excellent ⭐⭐⭐";   
//     }else if(grade.value <= 89 && grade.value >=75)
//     {
//          result.innerHTML = "Very Good ⭐⭐";   
//     }else if(grade.value <= 74 && grade.value >=50)
//     {
//          result.innerHTML = "Pass ⭐";   
//     }else if(grade.value <= 49 && grade.value >=0)
//     {
//          result.innerHTML = "Fail ❌";   
//     }
//     else{
//                  result.innerHTML = "Invalid Grade";   
//     }
// }

// Task 2


var grade = document.getElementById("stdGrade");
var stdName = document.getElementById("stdName");
var age = document.getElementById("stdAge");
var result = document.getElementById("result");
function checkGrade() {
     if (grade.value <= 100 && grade.value >= 90) {
          result.innerHTML = `student's Name : ${stdName.value} <br> student's Age : ${age.value} <br> student's Grade : ${grade.value}  <br> student's Status : Excellent ⭐⭐⭐`;
          result.style.backgroundColor = "green";
          result.style.color = "white";
          result.style.fontSize = "30px";
     } else if (grade.value <= 89 && grade.value >= 75) {
          result.innerHTML = `student's Name : ${stdName.value} <br> student's Age : ${age.value} <br> student's Grade : ${grade.value}  <br> student's Status : Very Good ⭐⭐`;
          result.style.backgroundColor = "darkolivegreen";
          result.style.color = "white";
          result.style.fontSize = "27px";
     } else if (grade.value <= 74 && grade.value >= 50) {
          result.innerHTML = `student's Name : ${stdName.value} <br> student's Age : ${age.value} <br> student's Grade : ${grade.value}  <br> student's Status : Pass ⭐`;
          result.style.backgroundColor = "brown";
          result.style.color = "white";
          result.style.fontSize = "25px";
     } else if (grade.value <= 49 && grade.value >= 0) {
          result.innerHTML = `student's Name : ${stdName.value} <br> student's Age : ${age.value} <br> student's Grade : ${grade.value}  <br> student's Status : Fail ❌`;
          result.style.backgroundColor = "red";
          result.style.color = "white";
          result.style.fontSize = "23px";
     }
     else {
          result.innerHTML = `student's Name : ${stdName.value} <br> student's Age : ${age.value} <br> student's Grade : ${grade.value}  <br> student's Status : Invalid Grade`;
          result.style.backgroundColor = "black";
          result.style.color = "white";
          result.style.fontSize = "20px";
     }
}


result.addEventListener('click',checkGrade);