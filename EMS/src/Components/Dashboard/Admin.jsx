import React, { useState } from 'react'

function Admin() {

    function submitHandler(e){
        e.preventDefault();
        console.log("Task created successfully.");
        settitle('');
        setdesc('');
        setdate('');
        setassign('');
        setcat(''); }

    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [date, setdate] = useState('')
    const [assign, setassign] = useState('')
    const [cat, setcat] = useState('')

  return (
    <div className='text-white font-mono border-2 h-[92%] w-[50%]
         pt-5 font-bold px-10 p-1'>

        <div className='flex gap-2 items-center pb-3'>
            <button className='border-2 rounded-xl p-2'>
                👈
            </button>

            <h1 className='p-2 text-xl '>
                Create TASK
            </h1>

        </div>

        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col gap-8 mt-5 px-2'>
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

export default Admin