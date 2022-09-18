import {React, useState, Fragment, useRef} from "react";
import TodoList from "./TodoList";

function App(){
    const [todos, setTodos] = useState([
        {
            id:1,
            task:"Tarea 1",
            completed:"false"
        }
    ]);

    
    const todoTaskRef = useRef();
    const toggleTodo= (id)=>{
        const newTodos= [...todos];
        const todo =  newTodos.find((todo)=>todo.id == id);
        todo.completed =!todo.completed;
        setTodos(newTodos);
    }
    const handleTodoAdd = ()=>{
        const task= todoTaskRef.current.value;
        if(task === ""){return}
        
        setTodos((prevTodos)=>{
            return [...prevTodos, {id:1,task,completed:false}]
        });
        todoTaskRef.current.value="";
    }

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
            <button onClick={handleTodoAdd}>Añadir</button>
            <button >Eliminar</button>
            <p>Te quedan {todos.filter((todo)=>!todo.completed).length} tareas por terminar</p>
        </Fragment>
    );
}

export default App;