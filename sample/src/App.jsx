import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import Greetings from './Greetings.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home></Home>
      <Greetings name="Shalini"></Greetings>
    </div>
  )
}

export default App
