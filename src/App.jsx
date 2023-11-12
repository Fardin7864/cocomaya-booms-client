import { Outlet } from "react-router-dom"
import Navbar from "./common/Navbar/Navbar"
import Footer from "./common/Footer/Footer"

function App() {

  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
