import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <NavLink className='header-navlink' to='/'><h1 className='header-title'>Pokédex</h1></NavLink>
            <img className='head-gif' src='https://c.tenor.com/vYhrJmhMswcAAAAi/pokemon-snorlax.gif' />
        </div>
    )
}

export default Header;
