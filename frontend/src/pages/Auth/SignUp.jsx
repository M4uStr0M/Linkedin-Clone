import { useState } from 'react'
import logo from '../../assets/Logo.svg'
import { signUp } from '../../api/userService.js'
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    async function signUpHandler(e) {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await signUp(firstName, lastName, email, userName, password)
            if(res.success){
                navigate("/sign-in")
            }
        } finally {
            setLoading(false)
        }





    }
    return (
        <>
            <div className='w-full h-screen '>
                <div className='px-7 flex gap-10 justify-start'>
                    <img className='mt-5 ' src={logo} />
                </div>


                <div className="mt-10 w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[30vw] mx-auto  bg-gray-100 p-7 shadow-2xl rounded-xl">
                    <div><h1 className='text-2xl font-semibold mb-5 text-center'>Sign Up</h1></div>
                    <form className='flex flex-col gap-6' onSubmit={(e) => signUpHandler(e)} >
                        <input onChange={(e) => { setFirstName(e.target.value) }}
                            className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type='text' placeholder='Firstname' />
                        <input onChange={(e) => { setLastName(e.target.value) }}
                            className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type='text' placeholder='Lastname' />
                        <input onChange={(e) => { setUserName(e.target.value) }}
                            className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type='text' placeholder='Username' />
                        <input onChange={(e) => { setEmail(e.target.value) }}
                            className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type='email' placeholder='E-mail' />


                        <div>
                            <input onChange={(e) => { setPassword(e.target.value) }}
                                className='w-full h-12 outline-none border-2 px-5 bg-gray-200 border-gray-900 rounded-2xl ' type={showPassword ? "text" : "password"} placeholder='password' />
                            <label className='cursor-pointer'>
                                <input className='w-4 h-4 rounded-full mt-3 mx-1 justify-start'
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                />
                                Show password
                            </label>
                        </div>

                        <button disabled={loading} className='h-14 bg-blue-700 rounded-full text-white font-semibold hover:opacity-90 cursor-pointer transition-all '>{loading ? "Signing ..." : "Sign Up"}</button>
                    </form>

                    <div className='mt-2 flex justify-center items-center gap-3 '>
                        <p>Already have an account ? </p> <Link to='/sign-in' className='text-blue-500 font-semibold hover:text-blue-700 cursor-pointer transition-all'> Sign In</Link>
                    </div>
                </div>



            </div>

        </>
    )
}

export default SignUp