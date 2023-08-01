import { useState } from 'react'
import './App.css'
import PathFindingVisualizer from './PathFindingVisualizer/PathFindingVisualizer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PathFindingVisualizer></PathFindingVisualizer>
    </div>
  )
}
export default App