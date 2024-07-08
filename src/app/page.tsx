import {TodoList} from './components/TodoList';
import {getTodos} from '../lib/db';

export default function Home() {
  const initialTodos = getTodos();
  return (
    <TodoList initialTodoList = {initialTodos} />
  );
}