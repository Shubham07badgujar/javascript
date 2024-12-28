import './App.css'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import Header from './components/Header'

function App() {
  return (
    <>
      <center>
        <Header></Header>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </>
  )
}

export default App
