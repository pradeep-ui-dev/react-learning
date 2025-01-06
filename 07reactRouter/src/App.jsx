import { useState } from 'react'
import {} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [inputValue, setinputValue] = useState('')

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
