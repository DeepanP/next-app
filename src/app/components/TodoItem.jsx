'use client';

export default function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = async () => {
    const res = await fetch('/api/todos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: todo.id }),
    });
    const updatedTodo = await res.json();
    onToggle(updatedTodo);
  };

  const handleDelete = async () => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: todo.id }),
    });
    onDelete(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}