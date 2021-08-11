import React from 'react';


const STYLES = ['light-outline', 'dark-outline']

const Headline = ({
    header='Enter main header here',
    subheader='Enter subheader here',
    outline='light-outline'
}) => {
    return(
        <div className={outline.includes(STYLES[0]) ? `header-title ${STYLES[0]}` : `header-title ${STYLES[1]}`}>
            <h1>{header}</h1>
            <h2>{subheader}</h2>
        </div>
    );
}

export default Headline;