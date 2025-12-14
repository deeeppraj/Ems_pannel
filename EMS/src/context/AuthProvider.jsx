import React, { createContext, useEffect, useState } from 'react'
import { getItem } from '../utils/LocalStorage'

export const AuthContext = createContext()


 

function AuthProvider(props) {

  const [data, setdata] = useState({
    admin:[],
    employee:[]
  })

  useEffect(()=>{
    const ad = getItem('admin')
    const emp = getItem('employees')
    setdata({
      admin: ad || [],
      employee : emp || []

    })
  },[])

 
  return (
    <div>
        <AuthContext.Provider value={[data,setdata]}>
          {props.children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider