let todos = [];

export function getTodos() {
  return todos;
}

export function addTodo(text) {
  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  return newTodo;
}

export function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  return todo;
}

export function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
}