import React, { useContext, useState } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import profile from '../assets/profile.png'

const EditProfile = () => {
    const { isActiveEditProfile, setIsActiveEditProfile, user, setUser } = useContext(AuthDataContext)

    const [firstName, setFirstName] = useState(user?.firstName || "")
    const [lastName, setLastName] = useState(user?.lastName || "")
    const [userName, setUserName] = useState(user?.userName || "")
    const [email, setEmail] = useState(user?.email || "")
    const [gender, setGender] = useState(user?.gender || "")
    const [location, setLocation] = useState(user?.location || "")
    const [skills, setSkills] = useState(user?.skills || ["mausam", "talent", "hardwork", "hardwork", "hardwork", "hardwork", "hardwork"])
    const [newSkill, setNewSkill] = useState("")

    return (
        <>
            {isActiveEditProfile && (
                <div className="w-full h-screen fixed inset-0 z-50 flex justify-center items-center">
                    {/* Backdrop */}
                    <div
                        onClick={() => setIsActiveEditProfile(false)}
                        className="w-full h-full absolute inset-0 bg-black/70"
                    ></div>

                    {/* Modal Box: Added flex flex-col and overflow-hidden */}
                    <div className="w-[90%] max-w-[500px] max-h-[85vh] z-10 bg-white relative shadow-lg rounded-lg flex flex-col overflow-hidden">

                        {/* Header (Fixed at top) */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h1 className="text-xl font-semibold">Edit Profile</h1>
                            <i
                                onClick={() => setIsActiveEditProfile(false)}
                                className="cursor-pointer px-2 ri-close-line text-3xl"
                            ></i>
                        </div>

                        {/* Scrollable Body: flex-1 takes remaining space cleanly */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="w-full bg-white p-2 rounded-2xl relative flex flex-col">
                                {/* Cover Banner */}
                                <div className="bg-gray-300 w-full h-28 rounded-2xl relative overflow-hidden">
                                    <img className="w-full h-full object-cover" src="" alt="Cover" />
                                    <i className="ri-camera-4-line absolute top-3 right-3 text-xl bg-white/80 p-1.5 rounded-full cursor-pointer hover:bg-white"></i>
                                </div>

                                {/* Profile Avatar */}
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
                            </div>

                            {/* Form: Added flex flex-col so label margins work */}
                            <form className="p-5 flex flex-col">
                                <label className="mt-2 mb-1 font-medium text-gray-800" htmlFor="firstName">FirstName</label>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />

                                <label className="mt-3 mb-1 font-medium text-gray-800" htmlFor="lastName">LastName</label>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />

                                <label className="mt-3 mb-1 font-medium text-gray-800" htmlFor="Username">Username</label>
                                <input value={userName} onChange={(e) => setUserName(e.target.value)} id="Username" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />

                                <label className="mt-3 mb-1 font-medium text-gray-800" htmlFor="Email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="Email" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />

                                <label className="mt-3 mb-1 font-medium text-gray-800" htmlFor="Gender">Gender</label>
                                <input value={gender} onChange={(e) => setGender(e.target.value)} id="Gender" placeholder="male/female/other" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />

                                <label className="mt-3 mb-1 font-medium text-gray-800" htmlFor="Location">Location</label>
                                <input value={location} onChange={(e) => setLocation(e.target.value)} id="Location" placeholder="City, Country" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />
                            </form>
                            <div className='p-4'>
                                <h1 className="mx-auto text-center text-2xl font-bold text-gray-800">Skills</h1>

                                <form className='mt-5 flex  gap-7'>
                                    <input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} id="Skill" placeholder="Add a new skill" className="w-full h-10 text-lg px-5 rounded-full outline-none border-2 border-gray-800" type="text" />
                                    <button className='px-3 rounded-2xl w-fit text-nowrap cursor-pointer text-xl font-semibold  border-2 border-blue-600 text-blue-500 hover:border-blue-500 hover:text-blue-400'>Add skill</button>
                                </form>

                                <div className='flex justify-start gap-4 flex-wrap mt-5'>
                                    {
                                        skills.map((skill, index) => {
                                            return (
                                                <div className=' rounded-2xl text-md font-medium px-3 bg-gray-200 ' key={index}>{skill} <span>  <i

                                                    className="cursor-pointer ri-close-line text-xl"
                                                ></i></span>

                                                </div>

                                            )
                                        })
                                    }
                                </div>




                            </div>
                        </div>

                        {/* Footer (Pinned at bottom) */}
                        <div className="p-4 border-t bg-white">
                            <button className="cursor-pointer w-full border-2 border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 text-base font-semibold rounded-full py-1.5 flex items-center justify-center">
                                <i className="pr-2 ri-edit-box-line"></i> Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditProfile
