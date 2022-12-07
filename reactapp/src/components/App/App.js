import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AddTask from '../AddTask';
import Tasks from '../Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState();
  const [addTaskOpen, setAddTaskOpen] = useState(false);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:8000/api/task');
      const data = await res.json();
      console.log(data);
      setTasks(data);
    }

    fetchTasks();
  }, []);

  const onToggle = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task))
  }

  const addTask = (newTask) => {;
    setTasks([ ...tasks, newTask ]);
    setAddTaskOpen(!addTaskOpen);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>To do list</h1>
        <div className="add-task-btn" onClick={() => setAddTaskOpen(!addTaskOpen)} >
          <FiPlus className={`add-task-icon ${addTaskOpen ? 'add-task--open' : ''}`} />
        </div>
      </div>
      {addTaskOpen ? <AddTask addTask={addTask} /> : (tasks && <Tasks tasks={tasks} onToggle={onToggle} />)}
    </div>
  )
}

export default App
