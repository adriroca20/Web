import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos}) {
  return (
    <div>
        <ul>
            {todos.map((todo, toggleTodo)=>(
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}></TodoItem>
            ))}
        </ul>
    </div>
  )
}

export default TodoList;