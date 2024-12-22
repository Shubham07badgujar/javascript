import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// import React from 'react'
// import ReactDOM from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const anotherElement = (
//   <a href="https://google.com" target="_blank">let go to that page</a>
// )

// const reactElement = React.createElement (
//   'a',
//   { href: 'https://google.com', target:'_blank'},
//   'click me to visit your site'
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   // anotherElement
//   reactElement
// )