import React, { useContext } from 'react'
import Nav from '../components/Headers/Nav'
import profile from '../assets/profile.png'
import EditProfile from '../components/EditProfile'
import { AuthDataContext } from '../context/AuthContext'
export const Home = () => {

        const { isActiveEditProfile, setIsActiveEditProfile } = useContext(AuthDataContext)
    
    return (
        <>
            <EditProfile />
            <Nav />
            <div className='h-screen bg-gray-300  '>
                <div className='flex-col  lg:flex lg:flex-row lg:gap-3  p-5 pt-20'>

                    <div className="mt-5 lg:mt-0 w-full lg:w-1/4 bg-white p-3 rounded-2xl relative flex flex-col">
                        {/* Cover Banner */}
                        <div className="bg-gray-300 w-full h-28 rounded-2xl relative overflow-hidden">
                            {/* Only render img if coverSrc exists */}
                            <img className="w-full h-full object-cover" src='' alt="Cover" />

                            <i className="ri-camera-4-line absolute top-3 right-3 text-xl bg-white/80 p-1.5 rounded-full cursor-pointer hover:bg-white"></i>
                        </div>

                        {/* Profile Avatar + Add Badge grouped together */}
                        <div className="relative w-16 h-16 -mt-8 ml-6">
                            <img
                                className="w-full h-full rounded-full object-cover border-2 border-white bg-gray-200"
                                src={profile}
                                alt="Mausam Rayamajhi"
                            />
                            <button
                                type="button"
                                className="w-5 h-5 absolute bottom-0 right-0 text-white bg-blue-500 flex items-center justify-center rounded-full border border-white cursor-pointer"
                            >
                                <i className="ri-add-line text-xs"></i>
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="mt-3 mx-6">
                            <h2 className="text-lg font-semibold text-gray-900">Mausam Rayamajhi</h2>
                            <p className="text-sm font-medium text-gray-600">Headline</p>
                            <p className="text-sm font-medium text-gray-500">Nepal</p>
                        </div>

                        {/* Action Button */}
                        <button onClick={()=>{setIsActiveEditProfile(true)}} className="mt-6 cursor-pointer w-full border-2 border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 text-base font-semibold rounded-full py-1.5 flex items-center justify-center">
                            <i className="pr-2 ri-edit-box-line"></i>
                            Edit Profile
                        </button>
                    </div>


                    <div className='mt-5 lg:mt-0 h-30 w-full lg:w-1/2 bg-white rounded-2xl'>

                    </div>
                    <div className='mt-5 lg:mt-0 h-30 w-full lg:w-1/4 bg-white rounded-2xl'>

                    </div>
                </div>
            </div>


        </>
    )
}


export default Home