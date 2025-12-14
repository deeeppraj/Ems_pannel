import React from 'react'

const CreateTaskHeader = () => {
  return (
     <div className='flex gap-2 items-center pb-3'>
            <button className='border-2 rounded-xl p-2'>
                👈
            </button>

            <h1 className='p-2 text-xl '>
                Create TASK
            </h1>

    </div>
  )
}

export default CreateTaskHeader