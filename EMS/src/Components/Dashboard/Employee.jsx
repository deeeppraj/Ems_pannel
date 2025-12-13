import React from 'react'
import Header from '../../others/Header'
import TaskListFinal from '../../others/TaskListFinal'
import Task from '../Task/Task'

function Employee() {
  return (
    <div className='h-full w-full p-10'>

        <Header />
        <div className='flex justify-between gap-1 pt-10 pb-10'>
            <TaskListFinal color = {'bg-blue-500'} detail = {'New Task'}/>
            <TaskListFinal color = {'bg-green-500'} detail = {'Completed'}/>
            <TaskListFinal color = {'bg-yellow-500'} detail = {'Accepted'}/>
            <TaskListFinal color = {'bg-red-500'} detail = {'Failed'}/>
        </div>

        <div className='mt-10 no-scrollbar flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden
        scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent'>
            <Task />
            <Task />
            <Task />
            <Task /><Task />
            <Task />
            <Task />

            
        </div>
        
        
        
    </div>
  )
}

export default Employee