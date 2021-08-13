import React from 'react';
//importing assets
import aboutImg from '../assets/images/banner.jpg';
//importing our components
import Headline from './Headline';
import Button from './Button';

const AboutUs = () => {
    return(
        <section className="about-wrapper">
            <div className="about-left">
                <img src={aboutImg} alt='Greg surfing' />
            </div>
            <div className="about-right">
                <Headline
                    header='Who we are?'
                    subheader='Just a bunch of surfers who love talking about surfing'
                    outline='dark-outline'
                />
                <p>
                    We are surfing enthusiasts ourself. We spend so much time one the waves
                    and thought there is no better way but share our experiences, love, and passion
                    for the waves with the rest of the world. If there is a famous beach chances are we have visited already.
                    If not; you'll give you a shout over at our instagram!
                </p>
                <Button
                    buttonText = 'Meet the Team'
                    buttonLink = '/about'
                    outline = {true}
                />
            </div>
        </section>
    );
}

export default AboutUs;