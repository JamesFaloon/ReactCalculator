import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculator">
      <div className="output">
        <div className="current-operand"></div>
        <div className="previous-operand"> </div>
      </div>
      <button className="span-two"> AC</button>
      <button className="span-one">+</button>
      <button className="span-one">÷</button>

      <button className="span-one">9</button>
      <button className="span-one">8</button>
      <button className="span-one">7</button>
      <button className="span-one">+</button>

      <button className="span-one">6</button>
      <button className="span-one">5</button>
      <button className="span-one">4</button>
      <button className="span-one">-</button>

      <button className="span-one">3</button>
      <button className="span-one">2</button>
      <button className="span-one">1</button>
      <button className="span-one">*</button>

      <button className="span-one">0</button>
      <button className="span-one">.</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App
