import React from 'react';
//import everything react router related
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <h1 id="logo">
                <Link to='/'>The Surfing Company</Link>
            </h1>
            <ul className="nav-links">
                <li>
                    <Link to='/locations'>
                        Locations
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;