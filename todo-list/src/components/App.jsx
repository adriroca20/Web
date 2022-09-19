import {React, useState, Fragment, useRef} from "react";
import TodoList from "./TodoList";

function getRandomID(max){
    return Math.floor(Math.random()*max);
}

function App(){
    const [todos, setTodos] = useState([
        {
            id:1,
            task:"Tarea 1",
            completed:"false"
        }
    ]);

    //En vez de clases, para hacer referencia a un objeto se le llama con un useRef
    const todoTaskRef = useRef();
    const toggleTodo= (id)=>{
        //Crea una copia de este array
        const newTodos= [...todos];
        //Copia el estado anterior, modifica el componente y se lo vuelve a enviar
        const todo =  newTodos.find((todo)=>todo.id == id);
        todo.completed =!todo.completed;
        setTodos(newTodos);
    }
    const handleTodoAdd = ()=>{
        const task= todoTaskRef.current.value;
        if(task === ""){return}
        
        const id= getRandomID(9999);
        setTodos((prevTodos)=>{
            return [...prevTodos, {id,task,completed:false}]
        });
        todoTaskRef.current.value="";
    }

    const handleClearAll =()=>{
        const newTodos= [...todos];
        const todosEliminados= newTodos.filter((todo)=>!todo.completed);
        setTodos(todosEliminados);
    }

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
            <button onClick={handleTodoAdd}>Añadir</button>
            <button onClick={handleClearAll}>Eliminar</button>
            <p>Te quedan {todos.filter((todo)=>!todo.completed).length} tareas por terminar</p>
        </Fragment>
    );
}

export default App;