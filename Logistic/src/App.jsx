import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Transporting from "./Components/Transporting/Transporting"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
    <Transporting />
    </main>
    </>
  )
}

export default App
