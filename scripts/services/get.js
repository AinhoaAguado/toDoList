async function getData() {
  try {
    const RESPONSE = await fetch(`${URL}/tasks`);
    const DATA = await RESPONSE.json();
    return DATA;
  } catch (error) {
    console.error(
      `Error al obtener los detalles de la tarea, Respuesta: ${RESPONSE.status}, ${RESPONSE.statusText}`
    );
    console.error("Error en la función getData()", error);
  }
}

async function printTasks(data) {
  let tasks = await data;
  let ulShowTasksList = document.querySelector(".ulShowTasksList");

  if (tasks.length === 0) {
   alert('Sin tareas pendientes');
}
  tasks.forEach((task) => {
    ulShowTasksList.innerHTML += `<li class="ulShowTasksList__li" id="${task.id}">
      <div class="ulShowTasksList__li--check">  
        <i  onclick="completedTask(${task.id})"  class="fa-solid fa-circle-check fa-sm firstColor"></i>
      </div>
      <div class="ulShowTasksList__li--txt">
        <span>${task.id}</span>
        <span>${task.name}</span>
        <span>${task.description}</span>
      </div>
        <div class="ulShowTasksList__li--txt ">
        <span>${task.completed}</span>
        <span>${task.categorie}</span>
        <span>${task.prioriti}</span>
        <span>${task.weight}</span>
        <span>${task.creationDate}</span>
        <span>${task.deliverDate}</span>
      </div>
      <div class="ulShowTasksList__li--icons">
        <i onclick="editTask(${task.id})" class="fa-solid fa-pen-to-square"></i>
        <i onclick = "deleteTask(${task.id})" class="fa-solid fa-trash-can"></i>
      </div>
    </li>`;
    const elementoTarea = document.getElementById(task.id); // get all <LI> of task
    if (task.completed === true) printStyles(elementoTarea);
  });
}