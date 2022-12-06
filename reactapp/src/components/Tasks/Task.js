const Task = ({ task, onToggle }) => {

  return (
    <div className="task" onDoubleClick={onToggle}>
      <h2>{task.title}</h2>
      <p>{task.body}</p>
      <div className="date">{(new Date(task.created)).toLocaleDateString()}</div>
      {task.checked && <div className="marker"></div>}
    </div>
  )
}

export default Task