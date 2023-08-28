//HTTP  - Method DELETE
async function deleteTask(taskId) {
    //console.log(taskId)

    console.log(`BORRAMOS la tarea con ID: ${taskId}, pER ONECESITAMOS UN IF ELSE ANTES PARA CONFIRMAR SI DESEA ELIMINARLA DEFINITIVAMENTE DE LA LISTA DE TAREAS O PREFIERE CANCELAR LA OPERACION`)
    
    const response = await fetch(`${URL}/tasks/${taskId}`, {
    //const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE',
    });
    return response.json();
}