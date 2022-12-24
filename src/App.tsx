import { useState } from 'react'
import Header from '~/components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <div className='text-red-500'>Hello World</div>
    </div>
  )
}

export default App
