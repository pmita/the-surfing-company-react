import React from 'react';
//importing our assets
import bannerImg from '../assets/images/banner.jpg';
//importing our components
import Headline from './Headline';
import Button from './Button';

const Banner = () => {
    return(
        <div className="banner">
            <img 
                src={bannerImg} 
                alt='surfer riding a wave on a green water occean' 
            />
            <Headline 
                header='The Surfing Company'
                subheader='The srufing info provide made by surfers'
            />
            <div className="buttons-section">
                <Button 
                    buttonText = 'Learn More'
                    buttonLink='/locations'
                    outline={false}
                />
                <Button 
                    buttonText = 'About Us'
                    buttonLink='/about'
                    outline={true}
                />
            </div>
        </div>
    );
}

export default Banner;