import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './ToDoForm';
import { fetchTodos } from '../utils/api';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };

    getTodos();
  }, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000), 
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
