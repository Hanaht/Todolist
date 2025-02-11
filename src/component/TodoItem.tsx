import React from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
