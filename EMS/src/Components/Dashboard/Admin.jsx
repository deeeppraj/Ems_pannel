import React, { useContext, useState } from 'react'
import CreateTaskHeader from '../../others/CreateTaskHeader';
import CreateTaskForm from '../../others/CreateTaskForm';
import AllTask from '../../others/AllTask';
import Header from '../../others/Header';
import { AuthContext } from '../../context/AuthProvider';

function Admin(props) {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [date, setdate] = useState('')
    const [assign, setassign] = useState('')
    const [cat, setcat] = useState('')
  


    const [data, setdata] = useContext(AuthContext)

    function submitHandler(e){
        e.preventDefault();
        console.log("Task created successfully.");
        settitle('');
        setdesc('');
        setdate('');
        setassign('');
        setcat(''); }


      

  return (
    <div className='text-white font-mono  flex  flex-col gap-3 w-[90%]
         font-bold px-10 p-1 h-full overflow-auto no-scrollbar 
         shrink-0 pt-6'>

        <div className='pb-10'>
          <Header name = {'Admin'} click = {props.click}/>
        </div>

       <div className='border-2 p-5 rounded-lg '>
        <CreateTaskHeader />
        <CreateTaskForm />
       </div>

       

       <div className="flex flex-col bg-gray-700 h-[40%] mt-20 p-4 rounded-md overflow-y-auto no-scrollbar gap-4">
  
        <div className="grid grid-cols-5 gap-3 px-7 py-3 sticky top-0 bg-gray-700 text-white font-bold font-mono text-center z-10">
          <h1>Name</h1>
          <h3>Active</h3>
          <h3>New</h3>
          <h3>Completed</h3>
          <h3>Failed</h3>
        </div>

        <div className="flex flex-col gap-3">
          {data.employee.map((e) => (
            <AllTask
              key={e.id}
              name={e.firstName}
              active={e.taskCounts.active}
              new={e.taskCounts.newTask}
              completed={e.taskCounts.completed}
              failed={e.taskCounts.failed}
            />
          ))}
        </div>

</div>



       
    </div>
  )
}

export default Admin