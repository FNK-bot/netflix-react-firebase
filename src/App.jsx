import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import Account from "./pages/Account"
import SignUp from "./pages/SignUp"
import ProtectedRout from "./components/ProtectedRout"
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={
            <ProtectedRout>
              <Account />
            </ProtectedRout>
          } />
        </Routes>
      </AuthContextProvider>
    </>
  )

}

export default App
