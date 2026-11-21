import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import { useContext } from 'react'
import { AuthDataContext } from './context/AuthContext'
import Home from './pages/Home'
import ProtectedRoutes from './utills/ProtectedRoutes'
import NotFound from './pages/NotFound'

const RouterModel = () => {

  return (
    <>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/' element={<Home />} />

        </Route>





      </Routes>
    </>
  )
}

export default RouterModel