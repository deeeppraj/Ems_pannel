import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between px-5'>
            <div className='text-white font-extrabold font-serif flex  flex-col
            text-2xl gap-0.5'>
                <h1>Hello</h1>
                <h1>Sarthak 👋</h1>
            </div>

            <div className='items-center p-1'>
                <button className='font-extrabold font-mono text-white
                bg-red-600 rounded-2xl p-3 hover:bg-red-800'>
                    Logout
                </button>

            </div>
    </div>
  )
}

export default Header
