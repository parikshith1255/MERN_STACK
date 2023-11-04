import React from 'react'
import { NavLink } from 'react-router-dom' 
import {Layout} from 'antd'
 
  

const Header = () => {
  return (




<header>
      <div className='nav-bar'>
        <nav className="navbar">
          <div className="navbar-container">
            <NavLink exact to="/" className="navbar-logo">
              RK
            </NavLink>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink exact="true" to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/about" className="nav-links">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/Register" className="nav-links">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/login" className="nav-links">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>








      
     
  )
}

export default Header
