import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-screen min-h-screen h-auto lg:h-screen bg-blue-300 text-blue-900 flex justify-center items-start lg:items-center p-2 md:p-5 lg:p-10'>
      <div className='relative z-[1] w-full h-full md:w-[90%] md:h-[90%] bg-blue-200 rounded-3xl p-2 md:p-5 lg:p-10 flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10 justify-start items-start lg:items-center'>

        <Profile />
        <Details />

      </div>

      {/* <div className='w-96 h-96 absolute top-0 left-0 blur-lg bg-white rounded-full'></div>
      <div className='w-44 h-44 absolute bottom-0 right-0 blur-lg bg-blue-400 rounded-full'></div>
      <div className='w-32 h-32 absolute top-0 right-0 blur-lg bg-white rounded-full'></div>
      <div className='w-12 h-12 absolute bottom-0 left-0 blur-lg bg-white rounded-full'></div> */}
    </div>
  )
}

export default App
