import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import News from "./pages/News"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/news" element={<News/>} />



      </Routes>
    
    
    
    </>
  )
}

export default App
