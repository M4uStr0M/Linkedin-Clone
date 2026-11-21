import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

const RouterModel = () => {
  return (
    <>
    <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default RouterModel