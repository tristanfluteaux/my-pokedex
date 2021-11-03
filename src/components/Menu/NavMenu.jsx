import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './NavMenu.css'

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState()
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (  
        <div className='mobile-navbar'>
        {isOpen && (
          <div className='mobile-menu'>
            <NavLink onClick={handleClick} to='/'>
              Pokedex
            </NavLink>
            <NavLink onClick={handleClick} to='/team'>
              Team
            </NavLink>
          </div>
        )}
  
        <div onClick={handleClick} className={`bar-container`}>
          <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
          <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
          <span className={`close-bar ${isOpen && 'open-bar'}`}></span>
        </div>
      </div>
    );
}

export default NavMenu;