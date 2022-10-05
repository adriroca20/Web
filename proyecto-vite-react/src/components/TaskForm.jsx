
import { useState } from "react";

function TaskForm() {

    const [title, setTitle] = useState("")

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(title)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" onChange={(e)=>{setTitle(e.target.value)}}/>
            <button type="submit" action= "submit">Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm;