import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React.js', done: false },
    { id: 2, text: 'Build a React app', done: false },
    { id: 3, text: 'Master React', done: false }
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodoText, done: false }
      ]);
      setNewTodoText('');
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodoDone = (todoId) => {
    setTodos(todos.map(todo => 
      todo.id === todoId ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div id="app">
      {todos.map(todo => (
        <div className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodoDone(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <span className="todo-delete" onClick={() => removeTodo(todo.id)}>X</span>
        </div>
      ))}
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default TodoApp;
