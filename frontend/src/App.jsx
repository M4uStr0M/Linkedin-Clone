import { useContext, useEffect, useState } from 'react';
import AuthContext, { AuthDataContext } from './context/AuthContext';
import RouterModel from './RouterModel'
import { ToastContainer } from "react-toastify";
import { getMe } from './api/userService';

const App = () => {
  const [loading, setLoading] = useState(true)
  const { setUser, setIsLogged } = useContext(AuthDataContext)
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getMe()
        setUser(res?.data)
        setIsLogged(res?.data?._id)
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [])



  if (loading) return <h2>Loading...</h2>;

  return (
    <>


      <ToastContainer position="top-right" autoClose={3000} />
      <RouterModel />





    </>
  )
}

export default App