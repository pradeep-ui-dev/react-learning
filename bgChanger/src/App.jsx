import { useState } from 'react'

function App() {
  const [color, SetColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-2 py-2'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "red"}} onClick={() => SetColor("red")} >Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "green"}} onClick={() => SetColor("green")} >Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "blue"}} onClick={() => SetColor("blue")} >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "olive"}} onClick={() => SetColor("olive")} >Olive</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "gray"}} onClick={() => SetColor("gray")} >Gray</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "yellow"}} onClick={() => SetColor("yellow")} >Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "pink"}} onClick={() => SetColor("pink")} >Pink</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "purple"}} onClick={() => SetColor("purple")} >Purple</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "lavender"}} onClick={() => SetColor("lavender")} >Lavender</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "white"}} onClick={() => SetColor("white")} >White</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "black"}} onClick={() => SetColor("black")} >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
