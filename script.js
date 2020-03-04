'use strict'

let total = 0;
let highest = 0;
let stuAvg= 0;  
var names= [];
var grade= [];
var pos1 = [];
var arr = [];

for (var i = 0; i < 10; i++) {             
    names.push(prompt('Enter The Ten Student Names | Student: ' + (i + 1))); 
    document.getElementById("stuNames").innerHTML=("Student's Names:" +names.join(','));
          
    grade.push(Number(prompt('Enter The Ten Student Grades | Grade: ' + (i + 1))));
    total += grade[i] 
      
    stuAvg = total / grade.length;
    highest = Math.max(...grade);
    pos1 = grade.indexOf(highest);
    document.getElementById("stuGrades").innerHTML=("Student's Grades:" +grade.join(','));
}


function results() {
    document.getElementById("result").innerHTML=("Highest Grade:"+highest+"The Highest Grade Belongs to:"+names[pos1]+" The Average Grade is "+stuAvg+"");
}  

function passingStu() {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 60); {
            namesPass.push(names[i]);
        }
    document.getElementById("passingStu").innerHTML=("The Students who are passing are: "+namesPass+"");
} 

        
  
