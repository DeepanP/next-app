'use client';

import { useState } from "react";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

interface Todo {
    id: number,
    text: string,
    completed: boolean
};
interface TodoProps {
    initialTodoList: Todo[]
}
export const TodoList: React.FC<TodoProps>= ({initialTodoList})=>{
 const [todosList, setTodoList] = useState<Todo []>(initialTodoList);
 const handleDelete = (id: number)=>{
  setTodoList(todosList.filter((todo)=> todo.id !== id));
 }

 const handleToogle = (item: Todo)=>{
  setTodoList(todosList.map((todo)=>((todo.id === item.id) ? item : todo)));
 }
 const handleAdd = (item: Todo)=>{
  setTodoList([...todosList, item])
 };
  return (
    <>
    <AddTodo onAdd={handleAdd}/>
    {
      todosList.map((todoItem, index)=>(
        <TodoItem key={todoItem.id} todo={todoItem} onDelete={handleDelete} onToggle={handleToogle}/>
      ))
    }
    </>
  )
}
