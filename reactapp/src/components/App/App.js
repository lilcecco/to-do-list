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

  // update task
  const onToggle = async (id) => {
    const task = tasks.find(task => task.id === id)

    const res = await fetch(`http://localhost:8000/api/task/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...task, checked: !task.checked })
    });
    const data = await res.json();
    console.log(data);

    setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task))
  }

  // add new task
  const addTask = async (newTask) => {
    const res = await fetch('http://localhost:8000/api/task/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask)
    });
    const data = await res.json();
    console.log(data);

    // setTasks([...tasks, newTask]);
    // setAddTaskOpen(!addTaskOpen);

    window.location.reload();
  }

  // delete task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:8000/api/task/${id}/delete`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);

    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <div className="header">
        <h1>To do list</h1>
        <div className="add-task-btn" onClick={() => setAddTaskOpen(!addTaskOpen)} >
          <FiPlus className={`add-task-icon ${addTaskOpen ? 'add-task--open' : ''}`} />
        </div>
      </div>
      {addTaskOpen ? <AddTask addTask={addTask} /> : (tasks && <Tasks tasks={tasks} onToggle={onToggle} deleteTask={deleteTask} />)}
    </div>
  )
}

export default App
