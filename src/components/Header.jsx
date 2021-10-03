import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='main-header'>
            <NavLink className='header-navlink' to='/'><h1 className='header-title'>Pokédex</h1></NavLink>
            <div style={{paddingTop: '20vh'}}>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Menu
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item active><NavLink to='/team' style={{listStyleType:'none', color:'white'}}>
                    Team
                    </NavLink></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Troll</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    )
}

export default Header;
