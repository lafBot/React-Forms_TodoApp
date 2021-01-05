import './Todo.css'
import 'font-awesome/css/font-awesome.min.css';


const TodoList = ({ todo, id, completed, remove, toggleComplete }) => {
    return (
        <li className='listedTodo'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={completed ? 'completedTask' : 'incompleteTask'} onClick={toggleComplete}>
                {todo}
            </span>
            &nbsp;&nbsp;&nbsp;
            <i className="fa fa-trash" onClick={remove}></i>
        </li>
    )
}


export default TodoList;