import { getClient } from '../lib/apollo-server';
import { gql } from '@apollo/client';
import TodoList from './components/TodoList';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

export default async function Home() {
  const server = getClient();
  const { data } = await server.query({ query: GET_TODOS });
  console.log(data);
  return (
    <div>
      <h1>Todo App with Next, GraphQL and MongoDB</h1>
      <TodoList initialTodos={data} />
    </div>
  );
}