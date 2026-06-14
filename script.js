const addBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function(){

let taskText = taskInput.value;

if(taskText === ""){
alert("Please enter a task");
return;
}


let li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between align-items-center";


let span = document.createElement("span");
span.innerText = taskText;


span.addEventListener("click", function(){
span.classList.toggle("completed");
});


let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "btn btn-danger btn-sm";


deleteBtn.addEventListener("click", function(){
li.remove();
});


li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);


taskInput.value = "";

});