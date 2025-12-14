import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import {AuthContext} from './context/AuthProvider'



const App = () => {
  

  const [user, setUser] = useState('')
  const [curruserdata, setcurruserdata] = useState("")

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if(loggedInUser){
      setUser(loggedInUser.role)
      setcurruserdata(loggedInUser.data)      
    }
  }, [])  

  const [userdata , setuserdata] = useContext(AuthContext)
  

  

 

  function loginHandler(email,pass){

    if(userdata){
      const adminUser = userdata.admin.find((e)=>{
        return email==e.email && pass == e.password
      })
      if(adminUser){
        setUser('Admin');
        setcurruserdata(adminUser);
        localStorage.setItem('loggedInUser' ,  JSON.stringify({role :'Admin',
          data:adminUser
        }))
        
      }

      const employeeUser = userdata.employee.find((e)=>{
        return email == e.email  && pass == e.password
      })
      if(employeeUser){
        setUser('Employee');
        setcurruserdata(employeeUser);
        localStorage.setItem('loggedInUser' , JSON.stringify({role :'Employee',
          data : employeeUser
        }));
        
      }


    }

    else{
      alert("User donot exist")
    }
  }

  function logoutHandler(){
    localStorage.removeItem('loggedInUser')
    setUser('')
    alert("User logged-out successfully")
    
  }


  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center
      '>
      
      {user=='' ? <Login loginHandler={loginHandler}  /> : ''}
      {user=='Admin' ? <Admin  
        click={logoutHandler} /> : ''}
      {user=='Employee' ? <Employee name={curruserdata.firstName} 
        click={logoutHandler}
        summary={curruserdata.taskCounts} task={curruserdata.tasks}
       /> : ''}

    </div>
  )
}

export default App  