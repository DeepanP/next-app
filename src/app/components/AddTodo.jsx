'use client';

import { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    onAdd(newTodo);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}