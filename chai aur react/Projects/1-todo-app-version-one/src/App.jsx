import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <br></br>
          <AddTodo></AddTodo>
          <br></br>
          <TodoItem1></TodoItem1>
            <br></br>
          <TodoItem2></TodoItem2>
      </center>
    </>
  )
}

export default App
