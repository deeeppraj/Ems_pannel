import React from 'react'

function TaskListFinal(props) {
  return (
    <div>
        <div className= {`flex flex-col gap-3 font-mono ${props.color}
                p-3 rounded-2xl w-75 pt-7 text-white h-35 pl-7` }>
                    <h1 className='text-5xl font-bold'>
                        0
                    </h1>
                    <p className='font-bold font-mono text-2xl'>{props.detail}</p>
        </div>
    </div>
  )
}

export default TaskListFinal