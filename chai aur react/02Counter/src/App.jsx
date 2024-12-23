import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)
  // let counter = 3;
  const addValue = () =>{
    if(counter < 20){
      return (<text>{setCounter(counter+1)}</text>)
    }  
  }
  const removeValue = () => {
    // counter = counter -1 ;
    // setCounter(counter)
    // console.log("remove value ",counter);
    if(counter > 0)
    return (
    <text>{setCounter(counter-1)}</text>
  )
    
  }
  return (
    <>
      <h1>HII shubham </h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br></br>
      <br></br>
      <button 
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
