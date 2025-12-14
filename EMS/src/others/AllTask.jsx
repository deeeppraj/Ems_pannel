import React from 'react'

const AllTask = (props) => {
  return (
    <div className='bg-blue-900 text-white font-mono items-center
    font-bold p-2 w-full rounded-2xl h-fit border shrink-0 '>

        <div className='flex justify-between gap-3 px-7 py-2 items-center
        text-center'>
            <h1>{props.name}</h1>
            <h3>{props.active}</h3>
            <h3>{props.new}</h3>
            <h3>{props.completed}</h3>
            <h3>{props.failed}</h3>
        </div>


    </div>
  )
}

export default AllTask