import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hi, {count}
      <button onClick={() => setCount(v => v + 1)}>+1</button>
    </div>
  )
}

export default App
