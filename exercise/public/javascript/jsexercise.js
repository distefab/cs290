var elements = document.getElementsByClassName("edit");
Array.from(elements).forEach(function(element) {
    element.addEventListener('click', function(event){
        var myId = event.target.getAttribute('rowid');
        console.log(myId);
        var editButton = document.getElementById(myId + '_editButton');
        var submitButton = document.getElementById(myId + '_submitButton');
        var name = document.getElementById(myId + '_name');
        var reps = document.getElementById(myId+ '_reps');
        var weight = document.getElementById(myId + '_weight');
        var date = document.getElementById(myId+'_date');
        var pounds = document.getElementById(myId + '_lbs');
        var kilos = document.getElementById(myId + '_kg');
        editButton.style.display = 'none';
        submitButton.style.display ='inline';
        name.style.display = 'inline';
        reps.style.display = 'inline';
        weight.style.display = 'inline';
        date.style.display = 'inline';
        pounds.style.display = 'inline';
        kilos.style.display = 'inline';
        var req = new XMLHttpRequest();  
        submitForm(myId);
            
    }
)});
function myFunction(event){
    var myId = event.currentTarget.rowId;
    var editButton = document.getElementById(myId + '_editButton');
    var submitButton = document.getElementById(myId + '_submitButton');
    var name = document.getElementById(myId + '_name');
    var reps = document.getElementById(myId+ '_reps');
    var weight = document.getElementById(myId + '_weight');
    var date = document.getElementById(myId+'_date');
    var pounds = document.getElementById(myId + '_lbs');
    var kilos = document.getElementById(myId + '_kg');
    editButton.style.display = 'block';
    submitButton.style.display = 'block';
    name.style.display = 'block';
    reps.style.display = 'block';
    weight.style.display = 'block';
    date.style.display = 'block';
    pounds.style.display = 'block';
    kilos.style.display = 'block';
    console.log(myId);
    // var req = new XMLHttpRequest();  
    submitForm(myId);
    
};

function editRow(myId, myLbs){  
    //Hide Edit Button
    var editButt = document.getElementById(myId + '_editButton');
    editButt.style.display = 'none';


    var submitButt = document.getElementById(myId + '_submitButton');
    submitButt.style.display = 'block';

    var thisName = document.getElementById(myId + '_name');
    thisName.style.display = 'block';    

    var thisReps = document.getElementById(myId+ '_reps');
    thisReps.style.display = 'block';

    var thisWeight = document.getElementById(myId + '_weight');
    thisWeight.style.display = 'block';

    var thisDate = document.getElementById(myId+'_date');
    thisDate.style.display = 'block';

    var thisLbs = document.getElementById(myId + '_lbs');
    thisLbs.style.display = 'block';

    var thisKg = document.getElementById(myId + '_kg');
    thisKg.style.display = 'block';
      
    submitForm();

}


 function submitForm(myId){
        var thisId = document.getElementById(myId);
        var editButt = document.getElementById(myId + '_editButton');

        var editButt = document.getElementById(myId + '_editButton');
        editButt.style.display = 'block';

        var submitButt = document.getElementById(myId + '_submitButton');
        submitButt.style.display = 'none';

        var thisName = document.getElementById(myId + '_name');
        thisName.style.display = 'none';    

        var thisReps = document.getElementById(myId+ '_reps');
        thisReps.style.display = 'none';

        var thisWeight = document.getElementById(myId + '_weight');
        thisWeight.style.display = 'none';

        var thisDate = document.getElementById(myId+'_date');
        thisDate.style.display = 'none';

        var thisLbs = document.getElementById(myId + '_lbs');
        thisLbs.style.display = 'none';

        var thisKg = document.getElementById(myId + '_kg');
        thisKg.style.display = 'none';


  
    
 }
 function deleteRow(myId){
    var thisId = document.getElementById(myId);

    var editButt = document.getElementById(myId + '_editButton');
    editButt.style.display = 'none';

    var submitButt = document.getElementById(myId + '_submitButton');
    submitButt.style.display = 'none';

    var thisName = document.getElementById(myId + '_name');
    thisName.style.display = 'none';    

    var thisReps = document.getElementById(myId+ '_reps');
    thisReps.style.display = 'none';

    var thisWeight = document.getElementById(myId + '_weight');
    thisWeight.style.display = 'none';

    var thisDate = document.getElementById(myId+'_date');
    thisDate.style.display = 'none';

    var thisLbs = document.getElementById(myId + '_lbs');
    thisLbs.style.display = 'none';

    var thisKg = document.getElementById(myId + '_kg');
    thisKg.style.display = 'none';




}