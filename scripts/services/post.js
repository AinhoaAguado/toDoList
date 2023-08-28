
//addEventListener click
const ADDBTN = document.querySelector(".form__addTaskBtn");
ADDBTN.addEventListener("click", (event) => {
  event.preventDefault();
  handlerTextSubmit();
});

//handlerTextSubmit - Is there text?
function handlerTextSubmit() {
  let taskName = document.getElementById("taskName");
  taskName.value ? inputsTextUser() : alert("Introduce una nueva tarea");
}

async function inputsTextUser() {
  let temp = getCurrentDate();
  const TAREA = {
    name: taskName.value,
    description: document.getElementById("taskDescription").value,
    completed: false,
    categorie: document.getElementById("taskCategorie").value,
    prioriti: document.getElementById("taskPrioriti").value,
    weight: document.getElementById("taskWeight").value,
    creationDate: temp,
    deliverDate: document.getElementById("taskDeliveryDate").value
  };
  addTask(TAREA);
}

//HTTP  - Method POST
async function addTask(TAREA) {
  try {
    const RESPONSE = await fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TAREA),
    });

  } catch (error) {
    console.log("catch error in function addTask()");
  } 
}