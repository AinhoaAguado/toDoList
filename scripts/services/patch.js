//HTTP  - Method PATCH

//edit task selected
async function editTask(taskId) {
  try {
    const RESPONSE = await fetch(`${URL}/tasks/${taskId}`);
    const TASKDETAILS = await RESPONSE.json();
    
    showEditForm(TASKDETAILS);
    //return TASKDETAILS

  } catch (error) {
    console.error(
      `Error al obtener los detalles de la tarea, Respuesta: ${TASKDETAILS.status}, ${TASKDETAILS.statusText}`);
    console.error("Error en la función editTask(taskId):", error);
  }
}


//showEditForm(taskDetails)
function showEditForm(taskDetails) {
  const EDITFORM = document.createElement("formEdit");
  EDITFORM.classList.add("edit-form");

  const nameInput = createInputField("name", taskDetails.name);
  const descriptionInput = createInputField(
    "description",
    taskDetails.description
  );

  const submitButton = document.createElement("button");
  submitButton.textContent = "Guardar cambios";
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // pdt +
    const updatedProperties = {
      name: nameInput.value,
      description: descriptionInput.value,
      // pdt +
    };
    updateTaskDetails(taskDetails.id, updatedProperties);
  });

  EDITFORM.appendChild(nameInput);
  EDITFORM.appendChild(descriptionInput);

  EDITFORM.appendChild(submitButton);

//show form
  const modal = createModal();
  modal.appendChild(EDITFORM);
  document.body.appendChild(modal);
}

function createInputField(name, value) {
  const input = document.createElement("input");
  input.setAttribute("name", name);
  input.value = value;
  return input;
}

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  return modal;
}

//HTTP  - Method PATCH
async function updateTaskDetails(taskId, updatedProperties) {
  try {
    const RESPONSE = await fetch(`${URL}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperties), // properties for update
    });

    if (RESPONSE.ok) {
      console.log("Tarea actualizada con éxito");

      //update list
      printTasks(getData());
      
    } else {
      console.error("Error al actualizar la tarea:", RESPONSE.statusText);
    }
  } catch (error) {
    console.error("Error en la función updateTaskDetails:", error);
  }
}
