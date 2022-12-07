import { useState } from "react";
import './AddTask.css';

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title || !body) return alert('Devi riempire tutti i campi');

        const created = new Date().toISOString();

        const res = await fetch('http://localhost:8000/api/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body, created, checked: false })
        });
        const data = await res.json();
        console.log(data);

        // addTask(newTask);

        setTitle('');
        setBody('');
    }

    return (
        <form id="add-task-form" onSubmit={(e) => onSubmit(e)}>
            <div className="textbox">
                <input type="text" id="title" name="title" placeholder="Inserisci il titolo" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="textbox">
                <input type="text" id="body" name="body" placeholder="Inserisci la descrizione" value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <input type="submit" className="button" value="Aggiungi" />
        </form>
    )
}

export default AddTask