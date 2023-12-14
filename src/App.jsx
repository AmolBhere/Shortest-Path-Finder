import { useState } from "react";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <PathFindingVisualizer></PathFindingVisualizer>
    </div>
  );
}
export default App;
