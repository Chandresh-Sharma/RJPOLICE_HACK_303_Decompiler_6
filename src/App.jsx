import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import DasboardApp from "./pages/AdminDashboard/App"
import LoginLandingPage from "./pages/LoginLandingPage/LoginLandingPage"
import LandingPage from "./pages/LandingPage/LandingPage"
import AddCamera from "./pages/AddCamera/AddCamera"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin/*' element={<DasboardApp />} />
        <Route path='/logdin' element={<LoginLandingPage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/addcamera' element={<AddCamera />} />
      </Routes>
    </>
  )
}

export default App
