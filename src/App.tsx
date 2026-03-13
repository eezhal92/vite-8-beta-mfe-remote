import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return <div style={{ padding: 20 , border: '1px solid black', margin: 20  }}>
    <h3>Remote App One</h3>
    HMR working!!!! {count} <button onClick={() => setCount(p => p + 1)}>Click Me</button></div>
}

export default App
