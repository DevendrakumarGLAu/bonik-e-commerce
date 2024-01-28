import React, { useState } from "react"
import { Link } from "react-router-dom"

// import { Auth0Provider } from "@auth0/auth0-react";

const Navbar  = ({ loggedIn, handleLogout }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  // const { loginWithRedirect } = useAuth0();

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              {/* <li>
                <Link to='/login'>Log In</Link>
              </li> */}
              {/* <li>
                <Link to='/vendor'>vendor account</Link>
              </li> */}
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
               <Link  to="/contact">Contact</Link>
              </li>
              <li>
                {/* Conditionally render "Login" or "Logout" link */}
                {loggedIn ? (
                  <Link to="/logout" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
              {/* <li>
              <Link  to="/login"><button onClick={() => loginWithRedirect()}>Log In</button></Link>
              </li> */}
              {/* <li></li> */}
            </ul>
        </ul>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
