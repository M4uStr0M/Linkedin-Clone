import { useContext, useState } from 'react'
import logo from '../../assets/linkedin.png'
import profile from '../../assets/profile.png'
import { AuthDataContext } from '../../context/AuthContext'
import { logout } from '../../api/userService'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const { user, setUser, setIsLogged } = useContext(AuthDataContext)
    const [activeSearch, setActiveSearch] = useState(false)
    const [profileDropbox, setProfileDropbox] = useState(false)
    const navigate = useNavigate()
    const logoutUser = async () => {
        const res = await logout()
        if (res.success) {
            setUser([])
            setIsLogged(null)
            navigate("/sign-in")
        }


    }
    return (

        <>
            <nav className='fixed px-7 w-full flex justify-between items-center  bg-white p-2 h-15'>
                <div className='flex  gap-5 md:gap-10 items-center justify-center'>
                    <div className=' cursor-pointer w-full flex justify-center items-center'>
                        <img className='w-10 h-10' src={logo} alt="error" />
                    </div>

                    <div className='hidden sm:flex'>
                        <i class="absolute mt-1 px-3 ri-search-line text-xl"></i>
                        {/* search user  */}
                        <form >
                            <input className='h-10 w-[40vmax]  outline-none border-2 rounded-full px-10' type="text" placeholder='Search' />
                        </form>

                    </div>
                    <button onClick={() => { setActiveSearch(true) }} className={`${activeSearch ? "hidden" : ""} sm:hidden cursor-pointer`}><i class=" ri-search-line text-2xl"></i></button>

                    <div className={`${activeSearch ? "flex" : "hidden"} sm:hidden`}>
                        <i class="absolute mt-1 px-3 ri-search-line text-xl"></i>
                        {/* search user  */}
                        <form >
                            <input className='h-10 w-[40vmax]  outline-none border-2 rounded-full px-10' type="text" placeholder='Search' />
                        </form>
                        <i onClick={() => { setActiveSearch(false) }} class="cursor-pointer  mt-1 px-3 ri-close-line text-2xl"></i>
                    </div>
                </div>
                {/* menus */}
                <div className={`${activeSearch ? "hidden" : "flex"} sm:flex gap-10 relative`}>
                    <div className='flex gap-7 font-semibold'>
                        <div className='hidden lg:flex flex-col gap-0 cursor-pointer justify-center text-center'><i class="ri-home-4-fill text-2xl"></i><p>Home </p></div>
                        <div className='hidden md:flex flex-col gap-0  cursor-pointer justify-center text-center'><i class="ri-group-fill text-2xl "></i><p>My Network</p></div>
                        <div className='flex flex-col gap-0 justify-center cursor-pointer text-center'><i class="ri-notification-3-fill text-2xl"></i><p>Notifications</p></div>
                    </div>
                    {/* profile */}
                    <button onClick={() => setProfileDropbox(prev => !prev)} className='flex cursor-pointer justify-center items-center'>
                        <img className='border-2  rounded-full object-cover w-10 h-10' src={profile} alt="" />
                    </button>

                    {profileDropbox && (
                        <div className="absolute left-[-10px] md:left-1/2 -translate-x-1/2 mt-16 w-72 h-80 bg-white px-5 rounded-lg shadow-md flex flex-col justify-around z-[100]">
                            <div className='flex flex-col  justify-center items-center'>
                                <img className='border-2  rounded-full object-cover w-10 h-10' src={profile} alt="" />
                                <h2 className='font-semibold'>{user?.firstName || "User"} {user?.lastName || "User"}</h2>
                            </div>

                            <div>
                                <button className=' cursor-pointer w-full border-2 border-blue-600 bg-transparent text-blue-600 text-lg font-semibold rounded-full py-1 '>View Profile</button>
                                <p className='w-full border-b-1 mt-6 border-gray-500'></p>
                            </div>
                            <div>
                                <button className='cursor-pointer font-semibold flex items-center'> <i class="ri-group-fill text-2xl "></i><p className='mx-3'>My Networks</p></button>
                            </div>
                            <div>
                                <button onClick={() => { logoutUser() }} className='cursor-pointer w-full border-2 border-red-600 bg-transparent text-red-600 text-lg font-semibold rounded-full py-1 '>Sign Out</button>
                            </div>

                        </div>
                    )}


                </div>


            </nav>

        </>
    )
}

export default Nav