import { useEffect, useState } from 'react';
import Tasks from '../Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:8000/api/task');
      const data = await res.json();
      console.log(data);
      setTasks(data);
    }

    fetchTasks();
  }, []);

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(name);
  //   const res = await fetch('http://localhost:8000/api/data/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name })
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // }

  const onToggle = () => {
    console.log('double click');
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      {tasks && <Tasks tasks={tasks} onToggle={onToggle} />}
    </div>
  )
}

export default App
