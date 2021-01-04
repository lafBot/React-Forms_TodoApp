import NewTodoForm from './NewTodoForm';
import React, { useState } from 'react';
import Todo from './Todo';
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }
    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComponents = todos.map(todo => (
        <Todo 
            key={todo.id}
            id={todo.id} 
            todo={todo.todo} 
            completed={todo.completed} 
            remove={remove} 
        />
        ))

    return (
        <div>
            <ul>
                {todoComponents}
            </ul>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}


export default TodoList;