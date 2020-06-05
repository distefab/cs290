
function edit(exerciseid){  
    var editButt = document.getElementById(exerciseid + '_editButton');
    var submitButt = document.getElementById(exerciseid + '_submitButton');
    var thisName = document.getElementById(exerciseid + '_name');
    var thisReps = document.getElementById(exerciseid+ '_reps');
    var thisWeight = document.getElementById(exerciseid + '_weight');
    var thisDate = document.getElementById(exerciseid+'_date');
    var thisLbs = document.getElementById(exerciseid + '_lbs');
    var thisKg = document.getElementById(exerciseid + '_kg');
    editButt.style.display = 'none'
    submitButt.style.display = 'block';
    thisName.style.display = 'block';    
    thisReps.style.display = 'block';
    thisWeight.style.display = 'block';
    thisDate.style.display = 'block'

      

}


 function submit(exerciseid){
        var editButt = document.getElementById(exerciseid + '_editButton');
        var submitButt = document.getElementById(exerciseid + '_submitButton');
        var thisName = document.getElementById(exerciseid + '_name');
        var thisReps = document.getElementById(exerciseid+ '_reps');
        var thisWeight = document.getElementById(exerciseid + '_weight');
        var thisDate = document.getElementById(exerciseid+'_date');     
        editButt.style.display = 'block'
        submitButt.style.display = 'none';
        thisName.style.display = 'none';    
        thisReps.style.display = 'none';
        thisWeight.style.display = 'none';
        thisDate.style.display = 'none';



  
    
 }
 function deleteExer(exerciseid){
    var editButt = document.getElementById(exerciseid + '_editButton');
    var submitButt = document.getElementById(exerciseid + '_submitButton');
    var thisName = document.getElementById(exerciseid + '_name');
    var thisReps = document.getElementById(exerciseid+ '_reps');
    var thisWeight = document.getElementById(exerciseid + '_weight');
    var thisDate = document.getElementById(exerciseid+'_date');
    editButt.style.display = "none"
    submitButt.style.display = 'none'
    thisName.style.display = 'none';    
    thisReps.style.display = 'none';
    thisWeight.style.display = 'none';
    thisDate.style.display = 'none';
}