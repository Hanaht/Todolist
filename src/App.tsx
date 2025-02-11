// src/App.tsx
import React from 'react';
import './App.css';
import TodoList from './component/ToDoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
