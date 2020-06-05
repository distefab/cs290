var elements = document.getElementsByClassName("edit");
Array.from(elements).forEach(function(element) {
    element.addEventListener('click', function(event){
        var exerciseid = event.target.getAttribute('rowid');
        console.log(exerciseid);
        var editButton = document.getElementById(exerciseid + '_editButton');
        var submitButton = document.getElementById(exerciseid + '_submitButton');
        var name = document.getElementById(exerciseid + '_name');
        var reps = document.getElementById(exerciseid+ '_reps');
        var weight = document.getElementById(exerciseid + '_weight');
        var date = document.getElementById(exerciseid+'_date');
        var pounds = document.getElementById(exerciseid + '_lbs');
        var kilos = document.getElementById(exerciseid + '_kg');
        editButton.style.display = 'none';
        submitButton.style.display = '';
        name.style.display = '';
        reps.style.display = '';
        weight.style.display = '';
        date.style.display = '';
        pounds.style.display = '';
        kilos.style.display = '';
        var req = new XMLHttpRequest();  
        submitForm(exerciseid);
            
    }
)});
function myFunction(event){
    var exerciseid = event.currentTarget.rowId;
    var editButton = document.getElementById(exerciseid + '_editButton');
    var submitButton = document.getElementById(exerciseid + '_submitButton');
    var name = document.getElementById(exerciseid + '_name');
    var reps = document.getElementById(exerciseid+ '_reps');
    var weight = document.getElementById(exerciseid + '_weight');
    var date = document.getElementById(exerciseid+'_date');
    var pounds = document.getElementById(exerciseid + '_lbs');
    var kilos = document.getElementById(exerciseid + '_kg');
    editButton.style.display = 'block';
    submitButton.style.display = 'block';
    name.style.display = 'block';
    reps.style.display = 'block';
    weight.style.display = 'block';
    date.style.display = 'block';
    pounds.style.display = 'block';
    kilos.style.display = 'block';
    console.log(exerciseid);
    // var req = new XMLHttpRequest();  
    submitForm(exerciseid);
    
};

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
      
    submitForm();

}


 function submitForm(exerciseid){
        var thisId = document.getElementById(exerciseid);
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
    editButt.style.display = 'none';

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