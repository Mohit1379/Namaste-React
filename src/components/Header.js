import { useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{
    const [loginToogle, setloginToogle]=useState(true)
    const online=useOnlineStatus()
    return(
      <div className='header'>
          <div className='logoContainer'>
            <img src={LOGO_URL} width={120} height={100} alt='logo' title='logo'/>
          </div>
          <div className='nav-items'>
            <ul>
              <li>{online===false ? "Offline 🔴" : "Online 🟢"} </li>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/contact"}>Contact Us</Link></li>
              <li>Cart</li>
              <li onClick={()=> setloginToogle(!loginToogle)}>{loginToogle ? "Login" : "Logout"}</li> 
            </ul>
          </div>
      </div>
    )
  }

export default Header;