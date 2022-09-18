import React from 'react'

function TodoItem({todo, toggleTodo}) {
    const {id,task,completed} = todo;
    const handleTodoClick =()=>{
        toggleTodo(id);
    }
    return (
        <li>
            <input type="checkbox" onChange={handleTodoClick}/>
            {task}
        </li>
    )
}

export default TodoItem;