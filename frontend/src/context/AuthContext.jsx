import React, { createContext, use, useState } from 'react'

export const AuthDataContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState([])
    const [isLogged, setIsLogged] = useState('')
    console.log(user)
    console.log("sss")
    console.log(isLogged)
    return (
        <>
            <AuthDataContext.Provider value={{ user, setUser, isLogged, setIsLogged }} >

                {children}

            </AuthDataContext.Provider>
        </>
    )
}

export default AuthContext