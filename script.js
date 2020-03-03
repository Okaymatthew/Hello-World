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

    grade.filter(passing); 
    function passing(grade) {
            return grade[i] >= 60;      
    }
    document.getElementById("passingStu").innerHTML=("The Students who are passing are: "+grade.filter(passing)+""+names[i]+"");
    } 
     // where can I include an [i] to obtain the index's of the 'arr' array(grade higher than 60) to then refer to [i] of 'names' to show which students have the grade higher than 60. I've tried sticking an [i] in alot of different places and it either bugs the whole program or returns undefined on the last variable +names+
    
    // where i have "+names+.." at the end of line 42 is where I'm trying to call on the name index's that correspond with 'passing'  


