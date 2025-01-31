import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listening Component</h1>}/>
        <Route path='/add' element={<h1>Add Component</h1>}/>
        <Route path='/update' element={<h1>update Component</h1>}/>
        <Route path='/logout' element={<h1>logout Component</h1>}/>
        <Route path='/profile' element={<h1>profile Component</h1>}/>
       
      </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App;
