function TaskList(props) {

    if(props.tasks.length ==0){
        return <h1>No hay tareas aun</h1>
    }
  return (
    <>
    {props.tasks.map((tarea)=>{
        return (
        <div key={tarea.id}>
            <h1>{tarea.title}</h1>
            <p>{tarea.description}</p>
        </div>
)
    })}
    </>
  )
}

export default TaskList