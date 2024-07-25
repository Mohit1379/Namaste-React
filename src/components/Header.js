import { useState } from "react";
import { LOGO_URL } from "../../utils/contants";
const Header = ()=>{
    const [loginToogle, setloginToogle]=useState(true)
    return(
      <div className='header'>
          <div className='logoContainer'>
            <img src={LOGO_URL} width={120} height={100} alt='logo' title='logo'/>
          </div>
          <div className='nav-items'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <li onClick={()=> setloginToogle(!loginToogle)}>{loginToogle ? "Login" : "Logout"}</li> 
            </ul>
          </div>
      </div>
    )
  }

export default Header;