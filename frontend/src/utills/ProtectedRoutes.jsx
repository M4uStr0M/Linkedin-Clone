import { useContext } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { AuthDataContext } from '../context/AuthContext'


const ProtectedRoutes = () => {
    const { isLogged } = useContext(AuthDataContext)
    const location = useLocation()

    return isLogged ? (
        <Outlet />
    ) :
        (
            <Navigate to='/sign-in' state={{ from: location }} replace />
        )
}





export default ProtectedRoutes