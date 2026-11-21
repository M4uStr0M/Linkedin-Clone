import { useNavigate } from "react-router-dom";
import apiClient from "./api.js";
import { toast } from 'react-toastify'


const signUp = async (firstName, lastName, email, userName, password) => {
    try {
        let res = await apiClient.post("/api/auth/register", {
            firstName, lastName, userName, email, password
        })
        toast.success(res?.data?.message)
        return res.data
    } catch (error) {
        toast.error(error.response?.data?.message)
        return error.response?.data
    }
}





const signIn = async (email, password) => {
    try {
        let res = await apiClient.post("/api/auth/login", {
            email, password
        })
        toast.success(res?.data?.message)

        return res.data
    } catch (error) {
        toast.error(error.response?.data?.message)
        return error.response?.data
    }
}


const getMe = async () => {
    try {
        let res = await apiClient.get("/api/auth/get-me")
        return res.data
    } catch (error) {
        return null
    }

}



const logout = async () => {
    try {
        let res = await apiClient.get("/api/auth/logout")
        toast.success(res?.data?.message)
        return res.data
    } catch (error) {
        toast.error(error.response?.data?.message)
        return error.response?.data
    }
}
export {
    signUp,
    signIn,
    getMe,
    logout
}
