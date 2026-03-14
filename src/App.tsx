import { useState } from 'react'
import './App.css'
import building from './assets/building.png'

interface AppProps {
  basename: string;
}

function App({ basename }: AppProps) {
  const [count, setCount] = useState(0)
  return <div style={{ padding: 20 , border: '1px solid black', margin: 20  }}>
    <h3>Remote Appone! <img src={building} /></h3>
    <p>basename: {basename}</p>
    <p>HMR works {count}</p> <br /> <button onClick={() => setCount(p => p + 1)}>Click Me</button></div>
}

export default App
