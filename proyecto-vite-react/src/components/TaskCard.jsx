

function TaskCard({tarea, deleteTask}){
    const handleDeleteTask= ()=>{
        deleteTask(tarea.id);
    };
    return (        
        <div key={tarea.id} style={{background:"lightblue"}}>
        <h1>{tarea.title}</h1>
        <p>{tarea.description}</p>
        <button onClick={handleDeleteTask}>Eliminar tarea</button>
    </div>);
}

export default TaskCard