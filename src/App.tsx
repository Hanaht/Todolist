// src/App.tsx
import React from 'react';
import TodoList from './component/ToDoList';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
