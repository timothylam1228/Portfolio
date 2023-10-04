// Create a button component that links to my resume
//
// Import React
import React from 'react';

const Link = (props) => {
    const { name, link, icon, style } = props;

    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <div className='flex flex-row justify-center items-center'>
                {icon ? <img src={icon} alt={name} className='w-8 h-8' /> : ''}
            </div>
            {name}
        </a>
    )
}

export default Link;
