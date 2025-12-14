import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTaskForm = () => {

        

        const [title, settitle] = useState('')
        const [desc, setdesc] = useState('')
        const [date, setdate] = useState('')
        const [assign, setassign] = useState('')
        const [cat, setcat] = useState('')

        const [task, settask] = useState([])
        const [mydata,setmydata] = useContext(AuthContext)
       

        function submitHandler(e){
            e.preventDefault();
            console.log("Task created successfully.");
            const data = {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle : title,
                taskDescription:desc,
                taskDate:date,
                person:assign,
                category:cat

            
            }
            settask([...task , data])


            const currData = mydata.employee
            currData.forEach(function(e){
            if(e.firstName == assign){
                e.taskCounts.active += 1;
                e.tasks.push(data);
                console.log(e.tasks);
            }
                
            
            })
            

            const uploadData = {
                admin:mydata.admin,
                employee:currData
            }

            setmydata(uploadData)
        
        

        

            


            settitle('');
            setdesc('');
            setdate('');
            setassign('');
            setcat('');





            
        }

       


        
    

  return (
    <div>
         <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex  gap-8 mt-5 px-2'>
            <div>
                <h1 className='px-1'>Task Title</h1>
                <input required 
                value={title}
                onChange={(e)=>{
                    settitle(e.target.value)
                }}  
                className='w-full border p-2 h-10 rounded-lg bg-gray-900'
                type="text" placeholder='your task here'/>
            </div>

            <div>
                <h1 className='px-1'>Description</h1>
                <textarea 
                value={desc}
                onChange={(e)=>{
                    setdesc(e.target.value)
                }}
                className='w-full border bg-gray-900
                p-2 rounded-lg h-20 wrap-break-word  '
                type="text" placeholder='task description'/>
            </div>

            <div>
                <h1 className='px-1'>Date</h1>
                <input required
                    value={date}
                    onChange={(e)=>{
                        setdate(e.target.value)
                    }}
                className='w-full border p-2 h-10 rounded-lg bg-gray-900
                '
                type="date" placeholder='dd-mm-yyyy'/>
            </div>

            <div>
                <h1 className='px-1'>Assign to</h1>
                <input required
                value={assign}
                onChange={(e)=>{
                    setassign(e.target.value)
                }}
                 className='w-full border p-2 h-10 rounded-lg
                 bg-gray-900'
                 type="text" />
            </div>

            <div>
                <h1 className='px-1'>Category</h1>
                <input required 
                value={cat}
                onChange={(e)=>{
                    setcat(e.target.value)
                }}
                
                className='w-full border p-2 h-10 rounded-lg
                 bg-gray-900'
                type="text" placeholder='Design,Devolopement ....' />
            </div>

            <div>
                <button className='bg-green-900 p-2 w-full rounded-lg
                text-xl'>
                    Create Task
                </button>
            </div>
        </form>

    </div>
  )
}

export default CreateTaskForm