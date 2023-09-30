import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task' onDoubleClick={() =>
    ontoggle(task.Taskid)}>
        <h3>
            {task.text}{' '}  
        <FaTimes
         style={{color: 'red', cursor: 'pointer'}}
         onClick={() => onDelete(task.id)} />
         </h3>
    </div>
  )
}

export default Task