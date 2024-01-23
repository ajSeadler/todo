// pages/components/TodoItem.tsx
"use client"
import { FaTrash } from 'react-icons/fa';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  const handleToggle = () => {
    toggleTodo(id, !complete);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className={`cursor-pointer peer-checked:line-through peer-checked:text-slate-500`}
      >
        {title}
      </label>
      <button
        className="ml-auto text-slate-100"
        onClick={handleDelete}
      >
        <FaTrash />
      </button>
    </li>
  );
}
