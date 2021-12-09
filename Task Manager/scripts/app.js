let important=false;
let formVisible=true;
let icon;
//toggle on and off the star
function togglePriority(){
    console.log("Clicked");

    if(important==true){
        //set it as non-important
        icon.removeClass("fas").addClass("far");
        important=false;
    }   
    else{
        //set it as imporant
        icon.removeClass("far").addClass("fas");
        important=true;

    }
    
}



function toggleForm(){
    if(formVisible){
        $(".section-form").hide();
        formVisible=false;
    }
    else{
        $(".section-form").show();
        formVisible=true;
    }
}

function saveTask(){
    console.log("Task saved")

   let priority =$("iPriority").val();
   let title = $("#txtTitle").val();
   let desc = $("#txtDescription").val();
   let dueDate=$("#dpDueDate").val();
   let status= $("#selStatus").val();
   let category =$("#selCategory").val();
   let color =$("#selColor").val();

   let theTask= new Task(important, title, desc, dueDate, status, category, color);
   console.log(theTask);

   displayTask(theTask);
   clearForm();
}

function clearForm(){
    $("iPriority").val("");
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#dpDueDate").val("");
    $("#selStatus").val("");
    $("#selCategory").val("");
    $("#selColor").val("");


}

function displayTask(task){

    let syntax = `<div class="task">
    <i class="far fa-star"></i>

    <div class="info">
        <h5>${task.title}</h5>
        <p>${task.description} </p>
    </div>

    <div class="details">
        <label class="status">${task.status}</label>
        <label class="category">${task.category}</label>
    </div>
    </div>`;


    $(".task-list").append(syntax);

}




function init(){
    console.log("Task Manager")
    icon=$("#iPriority")

    //hook events
    icon.click(togglePriority);
    $("#btnShowDetails").click(toggleForm);
    $("#btnSave").click(saveTask);

    //load previous data

}


window.onload=init;