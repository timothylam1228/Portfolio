// Crteate a hero component
// Import React
import React from 'react';
// Import the hero image
import Contact from './Contact';
import Related from './Related';
import Container from './Container';
import Animation from './Animation';
const Hero = () => {
    // Generate a breif description of myself



    // Generate a button that links to my resume

    const MyName = "Timothy Lam"
    const welcomeSentence = `${MyName}`
    const description = "I'm a website and mobile app developer with a passion for creating beautiful and functional websites and mobile app."


    return (
        <Container>
            <div className='flex justify-center  flex-col h-screen md:flex-row'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col '>
                        <div className='font-sans  text-5xl'>
                            {welcomeSentence}
                        </div>
                        <div className='flex mt-12 mb-6'>
                            {description}
                        </div>
                        <Related />
                    </div>
                </div>
                <div className='w-full hidden md:flex'>
                    <Animation />
                </div>
            </div>
        </Container>
    )
}

export default Hero;