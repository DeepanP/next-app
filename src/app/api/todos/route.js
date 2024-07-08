import { NextResponse } from 'next/server';
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../../../lib/db';

export async function GET() {
  const todos = getTodos();
  return NextResponse.json(todos);
}

export async function POST(request) {
  const { text } = await request.json();
  const newTodo = addTodo(text);
  return NextResponse.json(newTodo);
}

export async function PUT(request) {
  const { id } = await request.json();
  const updatedTodo = toggleTodo(id);
  return NextResponse.json(updatedTodo);
}

export async function DELETE(request) {
  const { id } = await request.json();
  deleteTodo(id);
  return NextResponse.json({ success: true });
}