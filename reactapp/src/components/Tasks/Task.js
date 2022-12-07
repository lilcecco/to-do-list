import { FiCalendar } from "react-icons/fi"

const Task = ({ task, onToggle }) => {

  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h2>{task.title}</h2>
      <p>{task.body}</p>
      <div className="date">
        <div>{(new Date(task.created)).toLocaleDateString()}</div>
        <FiCalendar className="date-icon" />
      </div>
      {task.checked && <div className="marker"></div>}
    </div>
  )
}

export default Task