import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <NavLink className='header-navlink' to='/'><h1 className='header-title'>Pokédex</h1></NavLink>
            <img style={{width: '150px'}} src='https://i.pinimg.com/originals/38/fb/9b/38fb9b66a2636f1b7dcb9ea68d290c05.gif' />
            <img style={{width: '150px'}} src='http://25.media.tumblr.com/tumblr_m5zyheRG0l1qj7ct2o1_500.gif' />
            <img style={{width: '150px'}} src='https://c.tenor.com/vYhrJmhMswcAAAAi/pokemon-snorlax.gif' />
        </div>
    )
}

export default Header;
