import './NewTodoForm.css';
import uuid from 'react-uuid';
import { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData !== "" && formData !== " ") {
            addTodo({todo: formData, id: uuid(), completed: false});
            setFormData('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo:</label>&nbsp;&nbsp;
                <input 
                    id="todo"
                    name="todo"
                    type="text"
                    onChange={handleChange}
                    value={formData}
                    placeholder="Buy groceries ..."

                />
            <br/><br/>
            <button id="addTodoBtn">Add Task</button>
        </form>
    )
}

export default NewTodoForm;