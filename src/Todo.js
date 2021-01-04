import './Todo.css'
import '@fortawesome/fontawesome-free';

const TodoList = ({ todo, completed, remove }) => {
    return (
        <li className='listedTodo'>
            <span className={completed ? 'completedTask' : 'incompleteTask'} >
                {todo}
            </span>
            <i className="fas fa-trash" onClick={remove}></i>
        </li>
    )
}


export default TodoList;