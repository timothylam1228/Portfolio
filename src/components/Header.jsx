// Create Header component
import React from 'react';
import { useState, useEffect } from 'react';

const Header = () => {

    // if mobile device, display hamburger menu
    // else display full menu

    // if header is on top of page, display transparent background
    // else display white background
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollPosition])

    const items = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Skills',
            link: '#skills'
        },
        {
            name: 'Blog',
            link: '#blog'
        },
        {
            name: 'Careers',
            link: '#careers'
        },
        {
            name: 'Contact',
            link: '#contact'
        },
    ]

    // scroll into view
    const handleScrollToView = (e, link) => {
        const element = document.querySelector(link)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }


    return (
        <header
            className={`flex-col lg:fixed transition-all ease-in-out duration-500 w-full  ${scrollPosition === 0 ? "lg:py-[10px] border-0 shadow-lg" : "border-b-gray-500 "
                } flex top-0 z-100`}
        >
            <div className='font-mono py-4 w-full flex justify-end' >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className='text-grey-800 text-base mx-4 hover:text-grey-600 cursor-pointer'
                        onClick={(e)=>handleScrollToView(e,item.link)}
                    >
                        {item.name}
                    </div>
                ))
                }
            </div>
        </header >
    )
}

export default Header;
