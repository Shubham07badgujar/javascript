import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import KgButton from './KgButton'
import Hello from './hello'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>start again 3rd time </p>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>

      <Random></Random>
      <Random></Random>
    </div>
  )
}

export default App;
