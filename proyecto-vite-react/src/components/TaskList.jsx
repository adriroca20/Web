import React from 'react'
import { useState, useEffect } from 'react'
import { tareas } from '../tareas';

function TaskList() {

    const [task,setTasks] = useState([]);
    
    //[{hola:"buenas"},{hola:"Adios"}]

    useEffect(() => {
        setTasks(tareas);
    }, [])

    if(task.length == 0){
        return <h1>No hay tareas aun</h1>
    }

  return (
    <>
    {task.map((tarea)=>{
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