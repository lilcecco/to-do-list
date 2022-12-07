import Task from './Task';
import './Tasks.css';

const Tasks = ({ tasks, onToggle }) => {
  return (
    <div className="tasks">
        {tasks.map(task => <Task key={`task-${task.id}`} task={task} onToggle={onToggle} />)}
    </div>
  )
}

export default Tasks