import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {

    const runsnorlax = (event) => {
        // event.preventDefault();
        event.target.style.animation = "runsnorlax 4s ease-in";
    }

    return (
        <div className='main-header'>
            <NavLink className='header-navlink' to='/'><h1 className='header-title'>Pokédex</h1></NavLink>
            <div className='head-gif'>
                <img className='snorlax'alt='snorlax' src='https://c.tenor.com/vYhrJmhMswcAAAAi/pokemon-snorlax.gif'/>
            </div>
        </div>
    )
}

export default Header;
