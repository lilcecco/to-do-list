import Task from './Task';
import './Tasks.css';

const Tasks = ({ tasks, onToggle }) => {
  return (
    <div className="tasks">
        {tasks.map((task, i) => <Task key={`task-${i}`} task={task} onToggle={onToggle} />)}
    </div>
  )
}

export default Tasks