import React, { useState } from 'react'
import logo from '../../assets/Logo.svg'
import { signIn } from '../../api/userService'
import { Link } from 'react-router-dom'

const SignIn = () => {


  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signInHandler(e) {
    e.preventDefault()
    console.log(email, password)

    const res = await signIn(email, password)
    console.log(res)
  }

  return (
    <>
      <div className='w-full h-screen '>
        <div className='px-7 flex gap-10 justify-start'>
          <img className='mt-5 ' src={logo} />
        </div>


        <div className="mt-10 w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[30vw] mx-auto  bg-gray-100 p-7 shadow-2xl rounded-xl">
          <div><h1 className='text-2xl font-semibold mb-5 text-center'>Sign In</h1></div>
          <form className='flex flex-col gap-6' onSubmit={(e) => signInHandler(e)} >

            <input onChange={(e) => { setEmail(e.target.value) }}
              className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type='email' placeholder='E-mail' />


            <div>
              <input onChange={(e) => { setPassword(e.target.value) }}
                className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type={showPassword ? "text" : "password"} placeholder='password' />
              <label>
                <input className='w-4 h-4 rounded-full mt-3 mx-1 justify-start'
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                Show password
              </label>
            </div>

            <button className='h-14 bg-blue-700 rounded-full text-white font-semibold hover:opacity-90 cursor-pointer transition-all'>Sign In</button>
          </form>

          <div className='mt-2 flex justify-center items-center gap-3 '>
            <p>Don't have account ? </p> <Link to='/sign-up' className='text-blue-500 font-semibold hover:text-blue-700 cursor-pointer transition-all'> Sign Up</Link>
          </div>
        </div>



      </div>

    </>


  )
}

export default SignIn