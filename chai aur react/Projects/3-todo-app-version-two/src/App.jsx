import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"

import TodoItems from "./components/TodoItems"
import './App.css';

function App() {
  const todoItems = [
    {
       name: 'Buy Milk',
       dueDate: '09/08/2024',
    },
    {
      name: 'Go to College',
      dueDate:'30/10/2024',
    },
    {
      name:'like me',
      dueDate:'right now',
    }
  ];
  return (
      <center className="todo-container">
        <AppName></AppName>
        <br></br>
          <AddTodo></AddTodo>
          <br></br>
          <TodoItems todoItems={todoItems}></TodoItems>
      </center>
  )
}

export default App
