import React from 'react';
//importing everything react router related
import {Link} from 'react-router-dom';

const Button = ({
    buttonText = 'Press here',
    buttonLink ='/',
    outline = false
}) => {
    return(
        <button className={outline ? 'button action-button' : 'button sec-button'}>
            <Link to={buttonLink}>
                {buttonText}
            </Link>
        </button>
    );
}

export default Button;