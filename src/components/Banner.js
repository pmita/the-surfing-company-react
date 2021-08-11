import React from 'react';
//importing our assets
import bannerImg from '../assets/images/banner.jpg';
//importing our components
import Headline from './Headline';

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
        </div>
    );
}

export default Banner;