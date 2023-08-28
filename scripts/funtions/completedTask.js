//completed Task 
async function completedTask(taskId) {
  try {
    const RESPONSE = await fetch(`${URL}/tasks/${taskId}`);

    if (RESPONSE.ok) {
      const TASKDETAILS = await RESPONSE.json();

      if (!TASKDETAILS.completed)  { 
        const upDateTask = {
          ...TASKDETAILS,
          completed: true,
        };
        //update Task Details
        await updateTaskDetails(taskId, upDateTask);
        console.log(`Tarea marcada como completada: ${taskId}`);

        } else {
        // Si la tarea ya estaba marcada como completada, imprimimos un mensaje en la consola
        console.log(`La tarea: ${taskId} ya estaba marcada como completada, pero la cambamos de nuevo a pendiente`);
        const upDateTask = {
          ...TASKDETAILS,
          completed: false,
        };
        //update Task Details
        await updateTaskDetails(taskId, upDateTask);
        console.log(`Tarea número: ${taskId} marcada como pendiente`);
      }
      
    } else {
      console.error(
        `Error al obtener los detalles de la tarea, Respuesta: ${TASKDETAILS.status}, ${TASKDETAILS.statusText}`
      );
    }
  } catch (error) {
    console.error("Error en la función completedTask(taskId):", error);
  }
}