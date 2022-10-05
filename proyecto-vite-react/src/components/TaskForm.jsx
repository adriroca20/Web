
import { useState } from "react";

function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit= (e)=>{
        e.preventDefault(); 
        createTask(title, description);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" 
            onChange={(e)=>{setTitle(e.target.value);}}/>
            <textarea type="text" placeholder="Descripcion de la tarea"
            onChange={(e)=>{setDescription(e.target.value);
            value={description}}}
            />
            <button type="submit" action= "submit">Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm;