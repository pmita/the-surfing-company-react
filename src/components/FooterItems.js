import React from 'react';
import { Link } from 'react-router-dom';

const FooterItems = ({
    title = 'Enter title Here',
    content = [
        {
            contentText : 'Link Name',
            contentLink : '#'
        },
        {
            contentText : 'Link Name',
            contentLink : '#'
        },
        {
            contentText : 'Link Name',
            contentLink : '#'
        }
    ]
}) => {
    return(
        <div className="footer-item">
            <h2>{title}</h2>
            <ul>
                {content.map( (item,index) => (
                    <li key={index}>
                        <Link 
                            to={item.contentLink}
                            className='lightLink'
                        >
                            {item.contentText}
                        </Link>
                    </li>    
                ))}
            </ul>
        </div>
    );
}

export default FooterItems;