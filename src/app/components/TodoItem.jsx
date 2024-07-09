'use client';

import { useMutation, gql } from '@apollo/client';

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export default function TodoItem({ todo }) {
  const [toggleTodo] = useMutation(TOGGLE_TODO, {
    refetchQueries: ['GetTodos'],
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: ['GetTodos'],
  });

  const handleToggle = async () => {
    try {
      await toggleTodo({ variables: { id: todo.id } });
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo({ variables: { id: todo.id } });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
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