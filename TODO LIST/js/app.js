var taskInput = document.getElementById("new-task"); //id=new-task
var addButton  = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completeTaskHolder = document.getElementById("completed-tasks"); //completed-tasks

//New task List item
var createNewTaskElement = function(taskString) {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;


	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
 	return listItem;
}

//Add a new task
var addTask = function() {
	console.log ("add task");

	var listItem = createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem); 
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = " ";
}

//Edit an existing task
var editTask = function() {
	console.log("edit task");
	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode")

	if(containsClass) {
		
		label.innerText = editInput.value;
	
	} else {
		
		editInput.value = label.innerText;

	}

	listItem.classList.toggle("editMode");

}

//Delete an existing task
var deleteTask = function() {
	console.log("delete task");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("task complete");
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("task incomplete")
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted)

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list items");
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;

}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over the incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
 	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted)		
}
		

//cycle over the completeTaskHolder ul list items
for(var i = 0; i < completeTaskHolder.children.length; i++){
	bindTaskEvents(completeTaskHolder.children[i], taskIncomplete)
}