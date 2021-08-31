import NavBar from './NavBar';

import './Header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <h1 className='header-title'>Pokédex</h1>
            <NavBar />
        </div>
    )
}

export default Header;
