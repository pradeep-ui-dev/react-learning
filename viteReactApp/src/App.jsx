import { useState } from 'react'
import SimpleForm from './components/SimpleForm'
import FetchData from './components/FetchData'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter < 20 ? setCounter(counter + 1) : counter
  }

  const removeValue = () => {
    counter > 0 ? setCounter(counter - 1) : counter
  }

  return (
    <>
      <h1 className='bg-green-400'>Hooks</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <SimpleForm/>
      <FetchData />
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
