'use client';

import { useQuery, useMutation, gql } from '@apollo/client';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

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

export default function TodoList({ initialTodos }) {
  const { data, refetch } = useQuery(GET_TODOS, {
    initialData: initialTodos
  });
  const [addTodoMutation] = useMutation(ADD_TODO);
  const [toggleTodoMutation] = useMutation(TOGGLE_TODO);
  const [deleteTodoMutation] = useMutation(DELETE_TODO);

  const handleAdd = async (text) => {
    await addTodoMutation({
      variables: { text },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  const handleToggle = async (id) => {
    await toggleTodoMutation({
      variables: { id },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  const handleDelete = async (id) => {
    await deleteTodoMutation({
      variables: { id },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      <ul>
        {data && data.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}