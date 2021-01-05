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
    const toggleComplete = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const todoComponents = todos.map(todo => (
        <Todo 
            id={todo.id} 
            key={todo.id}
            todo={todo.todo} 
            completed={todo.completed} 
            remove={() => remove(todo.id)} 
            toggleComplete={() => toggleComplete(todo.id)}
        />
        ))

    return (
        <div  id="TodoList">
            <div id="TodoList-form">
                <h1>My Todo List</h1>
                <NewTodoForm addTodo={addTodo} />
            </div>
            
            <div id="TodoList-list">
                <ol>
                    {todoComponents}
                </ol>
            </div>
        </div>
    )
}


export default TodoList;