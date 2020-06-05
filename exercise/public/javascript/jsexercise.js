
function edit(exerciseid){  
    var editButt = document.getElementById(exerciseid + '_editButton');
    editButt.style.display = 'none';


    var submitButt = document.getElementById(exerciseid + '_submitButton');
    submitButt.style.display = 'block';

    var thisName = document.getElementById(exerciseid + '_name');
    thisName.style.display = 'block';    

    var thisReps = document.getElementById(exerciseid+ '_reps');
    thisReps.style.display = 'block';

    var thisWeight = document.getElementById(exerciseid + '_weight');
    thisWeight.style.display = 'block';

    var thisDate = document.getElementById(exerciseid+'_date');
    thisDate.style.display = 'block';

    var thisLbs = document.getElementById(exerciseid + '_lbs');
    thisLbs.style.display = 'block';

    var thisKg = document.getElementById(exerciseid + '_kg');
    thisKg.style.display = 'block';
      

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