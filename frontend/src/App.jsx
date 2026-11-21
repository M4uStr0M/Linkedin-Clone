import RouterModel from './RouterModel'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterModel />
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default App