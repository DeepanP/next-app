import { getClient } from '../lib/apollo-server';
import { gql } from '@apollo/client';
import TodoList from './components/TodoList';
import { Suspense } from 'react';
import Loading from './loading.js'
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
  return (
    <div>
      <h1>Todo App with Next, GraphQL and MongoDB</h1>
      <Suspense fallback={<Loading/>}>
        <TodoList initialTodos={data} />
      </Suspense>
    </div>
  );
}