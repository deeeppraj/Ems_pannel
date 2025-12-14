import React, { useState } from 'react'

function Login({loginHandler}) {

    function submitHandler(e){
        e.preventDefault();
        console.log("Form submitted successfully");
        loginHandler(email,pass)
        setemail('');
        setpass('');
    }

    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

  return (
    <div className='absolute border-4 border-white p-23 rounded-xl
    gap-6'>

        <form onSubmit={
            (e) =>{
                submitHandler(e)
            }}
            className='flex flex-col items-center gap-4'
            
            >
            <h1 className='font-serif text-white font-bold text-2xl'>
                Login
            </h1>

            <input required type="email" placeholder=' Enter your email-id'
            className='border-2 rounded-lg text-white p-2 font-mono font-bold 
            w-80 pl-2 text-center'
            value={email}
            onChange={
                (elem) =>{
                    setemail(elem.target.value)
                }
            } />

            <input required type="password" placeholder='Enter your password'
                className='border-2 rounded-lg text-white p-2 font-mono font-bold 
                w-80 pl-2 text-center' 
                value={pass}
                onChange={(elem) =>{
                    setpass(elem.target.value)
                }}/>

            <button className='bg-green-600 font-bold text-white font-mono p-2 w-80 rounded-lg
                    hover:bg-green-500'>
                Submit
            </button>

        </form>
        
    </div>
  )
}

export default Login