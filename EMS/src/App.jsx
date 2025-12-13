import React from 'react'
import Login from './components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'

const App = () => {
  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center
      '>
      <Admin />
    </div>
  )
}

export default App