import React, { useState } from 'react'
import Todo from './Todo'

export default function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (task.trim() === '') {
      alert('Please enter a todo task!')
    } else {
      setTodos([...todos, { text: task, completed: false }])
      setTask('')
    }
  }

  const toggleComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const pendingTasks = todos.filter(todo => !todo.completed)
  const completedTasks = todos.filter(todo => todo.completed)

  return (
    <div className="app">
      <h1>Assignment-2 Todo Application</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Pending Tasks */}
      <h2>Pending</h2>
      <div className="todo-list">
        {pendingTasks.length === 0 ? (
          <div className="empty">No pending tasks 🎉</div>
        ) : (
          pendingTasks.map((todo, index) => (
            <Todo
              key={index}
              index={todos.indexOf(todo)}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </div>

      {/* Completed Tasks */}
      <h2>Completed</h2>
      <div className="todo-list">
        {completedTasks.length === 0 ? (
          <div className="empty">No completed tasks yet</div>
        ) : (
          completedTasks.map((todo, index) => (
            <Todo
              key={index}
              index={todos.indexOf(todo)}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  )
}
