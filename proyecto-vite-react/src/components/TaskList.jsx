import TaskCard from "./TaskCard";

function TaskList({tasks, deleteTask}) {
  if(tasks.length ==0){
        return <h1>No hay tareas aun</h1>
    }
  return (
    <>
    {tasks.map((tarea)=>{
        return (
          <TaskCard key={tarea.id} tarea={tarea} deleteTask={deleteTask}></TaskCard>
      )
    })}
    </>
  )
}

export default TaskList