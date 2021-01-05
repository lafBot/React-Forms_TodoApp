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
            <button className="rmvBtn" onClick={remove}><i className="fa fa-trash"></i></button>
        </li>
    )
}


export default TodoList;