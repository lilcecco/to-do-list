import Task from './Task';
import './Tasks.css';

const Tasks = ({ tasks, onToggle, deleteTask }) => {

  return (
    <div className="tasks">
        {tasks.map(task => <Task key={`task-${task.id}`} task={task} onToggle={onToggle} deleteTask={deleteTask} />)}
    </div>
  )
}

export default Tasks