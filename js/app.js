
var taskInput=document.getElementById("new-task"); //new-task

var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder=document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task list item
var createNewClassElement = function(taskString){
  //create list item
  var listItem = document.createElement("li");
  
  //input (checkbox)
  var checkBox = document.createElement("input");//checkbox
   //label
  var label = document.createElement("label");//label
  var editInput = document.createElement("input");//text
  
   //button.edit
  var editButton = document.createElement("button");
   //button.delete
  var deleteButton = document.createElement("button");
  
  
   //each elements needs modifying and 
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  
  // each element needs appending  
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
   return listItem;
}

var addTask = function(){
  console.log("Add task...");
  //create a new list item  with the text from the #new-task
  var listItem = createNewClassElement(taskInput.value);
  
  //append listItem to incompletTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
  
}
  


var editTask = function(){
  console.log("Edit Task...");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
 
    //if the parent is .editMode
  if (containsClass){
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  
  }else {
    //switch to editMode
   //input value becomes the label's text
    editInput.value = label.innerText;
  }
  
  //toggle .editMode on the list item
   listItem.classList.toggle("editMode");
    
    
  
  }
      


var deleteTask = function(){
  console.log("Delete Task...");
 //remove the parent list item from the unordered list
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  //remove the parent list from the ul
  ul.removeChild(listItem);
   
  
}
 
var taskCompleted = function(){
  console.log("Complete Task...");

  //when checkbox is checked, append task li item to #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskIncomplete);
  
  
  
}

var taskIncomplete = function(){
  console.log("Task Incomplete...");
    var listItem = this.parentNode;
   incompleteTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem,taskCompleted);
}

//Set the click hander to the addTask function
addButton.onclick = addTask;

//Now we want to check the box and add incomplete to complete or vice versa
var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  console.log("Bind list item events");
  //checkBoxEventHandler is taskCompleted for incompleteTask and taskIncomplete for the 
  //incomplete task
  //select tasklistItems children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
     //bind editTask to edit button
     editButton.onclick = editTask;
     //binde deleteTask to delete Button
     deleteButton.onclick = deleteTask;
     
     //bind taskCompleted to checkbox
     checkbox.onchange = checkBoxEventHandler;
    

}


//cycle over the incompleteTaskHolder ul list item
 for (var i=0; i < incompleteTasksHolder.children.length;i++){
      //bind events to list items children(taskIncomplete)
     bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
  

   
 
 //cycle over the completeTaskHolder ul list item
for (var i=0; i < completedTasksHolder.children.length;i++){
     bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
  
//for each li 
  //bind events to list items children(taskIncomplete)


     
     

     
