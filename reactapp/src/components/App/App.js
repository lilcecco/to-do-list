import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(name);
    const res = await fetch('http://localhost:8000/api/data/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    console.loog(data);
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
