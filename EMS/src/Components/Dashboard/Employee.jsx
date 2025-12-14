import React from 'react'
import Header from '../../others/Header'
import TaskListFinal from '../../others/TaskListFinal'
import Task from '../Task/Task'

function Employee(props) {
  return (
    <div className='h-full w-full p-10'>

        <Header name = {props.name} click = {props.click}/>
        <div className='flex justify-between gap-1 pt-10 pb-10'>
            <TaskListFinal num={props.summary.active} color = {'bg-blue-500'} detail = {'Active'}/>
            <TaskListFinal num={props.summary.newTask} color = {'bg-green-500'} detail = {'New'}/>
            <TaskListFinal num={props.summary.completed} color = {'bg-yellow-500'} detail = {'completed'}/>
            <TaskListFinal num={props.summary.failed} color = {'bg-red-500'} detail = {'Failed'}/>
        </div>

        <div className='mt-10 no-scrollbar flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden
        scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent'>
            {props.task.map((e)=>{
              return <Task title = {e.taskTitle} desc = {e.taskDescription}
              date = {e.taskDate} cat = {e.category} priority = {e.priority}/>
            })}

            
        </div>
        
        
        
    </div>
  )
}

export default Employee