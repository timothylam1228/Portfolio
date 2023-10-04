// Crteate a hero component
// Import React
import React from 'react';
// Import the hero image
// Create the Hero banner component
import Related from './Related';
import Container from './Container';
const Hero = () => {
    // Generate a breif description of myself



    // Generate a button that links to my resume

    const MyName = "Timothy Lam"
    const welcomeSentence = `Hello, I'm ${MyName}`
    const description = "I'm a web developer with a passion for creating beautiful and functional websites."


    return (
        <Container>
            <div className='bg-white flex h-screen items-center justify-center'>
                <div className='flex flex-col'>
                    <div className='font-sans text-5xl'>
                        {welcomeSentence}
                    </div>
                    <div>
                        {description}
                    </div>
                    <Related />
                </div>
            </div>
        </Container>
    )
}

export default Hero;