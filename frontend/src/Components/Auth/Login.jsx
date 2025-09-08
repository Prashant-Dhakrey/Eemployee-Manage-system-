import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  // console.log(handleLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {

    e.preventDefault()
    
    handleLogin(email,password)
    // console.log("email is ", email)
    // console.log("password is ", password)
    setEmail('')
    setPassword('')  
    
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
      <div className='p-20 border-2 border-emerald-600' >

        <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'
          >

          <input
            value={email}
            onChange={(e) => {
              // console.log(e.target.value)
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium px-6 py-2 m-3 rounded-full placeholder:gray-400"
            type="email"
            placeholder="Enter Email" />

          <input
            value={password}
            onChange={(e) => {
              // console.log(e.target.value)
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium px-6 py-2 m-3 rounded-full  placeholder:gray-400"
            type="password"
            placeholder="Enter Password" />

          <button
            className='text-white border-none cursor-pointer bg-emerald-600  hover:bg-emerald-700 px-24 py-2 mt-7 font-semibold text-lg rounded-full placeholder:text-white'
            type='submit'
          >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
