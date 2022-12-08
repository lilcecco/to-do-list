import { useEffect, useState } from "react";
import { FiCalendar, FiTrash } from "react-icons/fi";

const Task = ({ task, onToggle, deleteTask }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="task-container">
      <div className={`task ${menuOpen ? 'task-menu--open' : ''}`} onDoubleClick={() => onToggle(task.id)} onClick={() => setMenuOpen(!menuOpen)} >
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        <div className="date">
          <div>{(new Date(task.created)).toLocaleDateString()}</div>
          <FiCalendar className="date-icon" />
        </div>
        {task.checked && <div className="marker"></div>}
      </div>
      <div className={`task-menu ${menuOpen ? 'menu--open' : ''}`} onClick={() => deleteTask(task.id)}>
        <FiTrash />
      </div>
    </div>
  )
}

export default Task