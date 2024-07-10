'use client';

import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
        onAdd(text);
      setText('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
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