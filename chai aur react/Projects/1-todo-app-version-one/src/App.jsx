import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './App.css';

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <br></br>
          <AddTodo></AddTodo>
          <br></br>
          <div className="item-container">
          <TodoItem1></TodoItem1>
            <br></br>
          <TodoItem2></TodoItem2>
          </div>
      </center>
    </>
  )
}

export default App
