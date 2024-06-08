import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext.js"

function Header() {
  const [buttonData, setButtondata] = useState("Login")
  const {loginUser} = useContext(userContext)
const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo_cont">
        <img className="w-30 m-5" src="/foody.png" width={"100px"} alt="logo"/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "online" : "offline"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button className="px-4"
            onClick={
              () => buttonData === "Login" ? setButtondata("Logout") : setButtondata("Login") 
            }>{buttonData}</button>
            <li className="px-4">{loginUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header