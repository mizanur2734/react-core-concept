

import './App.css'
import Counter from './Counter'

function App() {

function handleClick(){
  alert('Button clicked')
}

const handleAdd5 = (num) =>{
  const newNum = num + 5
  alert(newNum)
}


  return (
    <>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2(){
        alert('Button 2 clicked')
      }}>Click Me2</button>

      <button onClick={()=>alert('Button 3 clicked')}>Click Me</button>
      <button onClick={()=>handleAdd5(10)}>Click Add5</button>
    </>
  )
}

export default App
