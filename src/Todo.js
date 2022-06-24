import {FaTimes} from 'react-icons/fa'

const Todo = ({todo, onDelete}) => {
    return (
        <div>
            <h3 className='text'>{todo.text}
            <FaTimes style={{color: 'red', cursor: 'pointer'}}
             onClick={() => onDelete(todo.id)} />
            </h3>
        </div>
    )
}

export default Todo