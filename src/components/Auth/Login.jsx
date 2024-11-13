import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Hello, form submitted")
    }
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <div className="flex items-center justify-center font-bold text-white text-3xl mb-5">
          Please Login
        </div>            
        <form 
            onSubmit={(e)=>{
                    submitHandler(e)
                    setEmail("")
                    setPassword("")
                }
            }
            className='flex flex-col items-center justify-center'>
                <input  
                required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' 
                type="email" 
                placeholder='Enter your email' />
                <input  
                required
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                type="password" 
                placeholder='Enter password' />                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login