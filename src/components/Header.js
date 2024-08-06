import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = ()=>{
    const [loginToogle, setloginToogle]=useState(true)
    const online=useOnlineStatus()
    const {loggedInUser} = useContext(UserContext);
    return(
      <div className='flex justify-between items-center bg-pink-50 shadow-lg p-6'>
          <div className='logoContainer'>
            <img src={LOGO_URL} width={120} height={100} alt='logo' title='logo'/>
          </div>
          <div className='flex items-center'>
            <ul className="flex">
              <li className="px-4">{online===false ? "Offline 🔴" : "Online 🟢"} </li>
              <li className="px-4"><Link to={"/"}>Home</Link></li>
              <li className="px-4"><Link to={"/about"}>About Us</Link></li>
              <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
              <li className="px-4">Cart</li>
              <li className="px-4 font-bold">{loggedInUser}</li>
              <li className="px-4" onClick={()=> setloginToogle(!loginToogle)}>{loginToogle ? "Login" : "Logout"}</li> 
            </ul>
          </div>
      </div>
    )
  }

export default Header;