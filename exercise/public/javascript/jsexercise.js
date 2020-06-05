
function editRow(exerciseid, myLbs){  
    //Hide Edit Button
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
      
    submitForm(exerciseid);

}


 function submitForm(exerciseid){
        var editButt = document.getElementById(exerciseid + '_editButton');

        var editButt = document.getElementById(exerciseid + '_editButton');
        editButt.style.display = 'block';

        var submitButt = document.getElementById(exerciseid + '_submitButton');
        submitButt.style.display = 'none';

        var thisName = document.getElementById(exerciseid + '_name');
        thisName.style.display = 'none';    

        var thisReps = document.getElementById(exerciseid+ '_reps');
        thisReps.style.display = 'none';

        var thisWeight = document.getElementById(exerciseid + '_weight');
        thisWeight.style.display = 'none';

        var thisDate = document.getElementById(exerciseid+'_date');
        thisDate.style.display = 'none';

        var thisLbs = document.getElementById(exerciseid + '_lbs');
        thisLbs.style.display = 'none';

        var thisKg = document.getElementById(exerciseid + '_kg');
        thisKg.style.display = 'none';


  
    
 }
 function deleteRow(exerciseid){
    var thisId = document.getElementById(exerciseid);

    var editButt = document.getElementById(exerciseid + '_editButton');
    

    var submitButt = document.getElementById(exerciseid + '_submitButton');
    submitButt.style.display = 'none';

    var thisName = document.getElementById(exerciseid + '_name');
    thisName.style.display = 'none';    

    var thisReps = document.getElementById(exerciseid+ '_reps');
    thisReps.style.display = 'none';

    var thisWeight = document.getElementById(exerciseid + '_weight');
    thisWeight.style.display = 'none';

    var thisDate = document.getElementById(exerciseid+'_date');
    thisDate.style.display = 'none';

    var thisLbs = document.getElementById(exerciseid + '_lbs');
    thisLbs.style.display = 'none';

    var thisKg = document.getElementById(exerciseid + '_kg');
    thisKg.style.display = 'none';
}