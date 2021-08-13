import React from 'react'
//import everything react router related
import {Link} from 'react-router-dom';
//import components
import FooterItems from './FooterItems';

const Footer = () => {
    return(
        <footer>
                <FooterItems title='The Surfing Company' content={
                        [
                            {
                                contentText : 'Locations',
                                contentLink : '/locations'
                            },
                            {
                                contentText : 'About',
                                contentLink : '/about'
                            },
                            {
                                contentText : 'Contact',
                                contentLink : '/contact'
                            }
                        ]
                    }
                />
                <FooterItems title='Socials' content={
                        [
                            {
                                contentText : `Instagram`,
                                contentLink : '#'
                            },
                            {
                                contentText : 'Facebook',
                                contentLink : '#'
                            },
                            {
                                contentText : 'Youtube',
                                contentLink : '#'
                            }
                        ]
                    }
                />
        </footer>
    );
}

export default Footer;