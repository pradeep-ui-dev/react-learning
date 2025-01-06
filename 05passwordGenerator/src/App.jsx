import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@$%^&*()~`-+={}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center py-3'>Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4'>
          <input type="text" value={password} className='rounded-lg outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' id='inputRange' onChange={(e) => {setLength(e.target.value)}} />
            <label htmlFor="inputRange">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="numeric" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} />
            <label htmlFor="numeric">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="splchar" defaultChecked={charAllowed} onChange={() => {SetCharAllowed((prev) => !prev)}} />
            <label htmlFor="splchar">Characters</label>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
