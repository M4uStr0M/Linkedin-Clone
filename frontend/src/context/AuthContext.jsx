import React, { createContext, use, useState } from 'react'

export const AuthDataContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState([])
    const [isLogged, setIsLogged] = useState('')
    const [isActiveEditProfile, setIsActiveEditProfile] = useState(true)


    return (
        <>
            <AuthDataContext.Provider value={{ user, setUser, isLogged, setIsLogged, isActiveEditProfile, setIsActiveEditProfile }} >

                {children}

            </AuthDataContext.Provider>
        </>
    )
}

export default AuthContext