import React, {useState} from 'react';
//import everything react router related
import {Link} from 'react-router-dom';

const Navbar = () => {
    //setting up our local state
    const [isNavOpen, setIsNavOpen] = useState(false);

    //setting up our event handlers
    const toggleNavbar = () => setIsNavOpen(!isNavOpen);
    return(
        <nav>
            <Link to='/' id="logo">The Surfing Company</Link>
            <ul className={isNavOpen ? 'nav-links active' : 'nav-links'}>
                <li>
                    <Link 
                        to='/locations'
                        onClick={toggleNavbar}
                    >
                        Locations
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/about'
                        onClick={toggleNavbar}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/contact'
                        onClick={toggleNavbar}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <button 
                className="burger-menu" 
                onClick={toggleNavbar}
                onKeyDown={toggleNavbar}
            >
                <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </button>
        </nav>
    );
}

export default Navbar;