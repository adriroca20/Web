import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, toggleTodo}) {
  return (
    <div>
        <ul>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}></TodoItem>
            ))}
        </ul>
    </div>
  )
}

export default TodoList;