
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
  let taskDescription = document.getElementById("taskDescription");
  let taskCompleted = document.getElementById("taskCompleted");
  let taskCategorie = document.getElementById("taskCategorie");
  let taskPrioriti = document.getElementById("taskPrioriti");
  let taskWeight = document.getElementById("taskWeight");
  let taskCreationDate = temp;
  //let taskCreationDate = document.getElementById("taskCreationDate");
  let taskDeliveryDate = document.getElementById("taskDeliveryDate");
  let deliverDateMonth = document.getElementById("taskDeliveryDate");
  let deliverDateYear = document.getElementById("taskDeliveryDate");

  addTask(
    taskName.value,
    taskDescription.value,
    taskCompleted.value,
    taskCategorie.value,
    taskPrioriti.value,
    taskWeight.value,
    taskCreationDate,
    taskDeliveryDate.value,
    deliverDateMonth.value,
    deliverDateYear.value
  );
}

//HTTP  - Method POST
//addTask
async function addTask(
  name,
  description,
  completed,
  categorie,
  prioriti,
  weight,
  taskCreationDate,
  deliverDateDay,
  deliverDateMonth,
  deliverDateYear
) {
  try {
    const RESPONSE = await fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        completed,
        categorie,
        prioriti,
        weight,
        taskCreationDate: `${taskCreationDate}`,
        deliverDateDay: `${deliverDateDay}`,
        deliverDateMonth: `${deliverDateMonth}`,
        deliverDateYear: `${deliverDateYear}`,
      }),
    });

    const responseData = await RESPONSE.json();
    console.log(responseData);
  } catch (error) {
    console.log("catch error in function addTask()");
  }
}
