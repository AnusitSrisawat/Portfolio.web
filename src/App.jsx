import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-screen min-h-screen h-auto lg:h-screen bg-blue-300 text-blue-900 flex justify-center items-start lg:items-center p-2 md:p-5 lg:p-10'>
      <div className='relative z-[1] w-full h-full bg-blue-200 rounded-3xl p-2 md:p-5 lg:p-10 flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10 justify-start items-start lg:items-center'>

        <Profile />
        <Details />

      </div>
    </div>
  )
}

export default App
