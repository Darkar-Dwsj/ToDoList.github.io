function addTasks () {
  let taskValue = document.getElementById("input-task").value;
  
  if (taskValue == ""){
    alert("Debes ingresar una tarea");
    return;
  }
  
  let newTask = document.createElement("li");
  newTask.textContent = taskValue;
  
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.onclick = () => { newTask.remove() };

  newTask.appendChild(btnDelete);
  
  let listContainer = document.getElementById("list-container");
  listContainer.appendChild(newTask);
  
  document.getElementById("input-task").value = "";
 
}