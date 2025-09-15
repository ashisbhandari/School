import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      
      
    </div>
  )
}

export default App
