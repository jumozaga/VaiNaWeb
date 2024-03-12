import { useState } from 'react'
import front from './assets/frontend.png'
import tobe from './assets/beornotobe.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={front} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={tobe} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Juliana Mozaga Neves </h1>
      <h2>Vai Na Web - Kleber e Marina</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dê seu Joinha xD {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
