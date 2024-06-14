import Link from './buttons/Link';
import Github from '../assets/skills/github.svg'
import Linkedin from '../assets/skills/linkedin.svg'
import Resume_icon from '../assets/resume_icon.png';
const Related = () => {

    const github = "https://github.com/timothylam1228"
    const linkedin = "www.linkedin.com/in/timothy-lam-dev"
    const resume = "/resume.pdf"

    const items = [
        {
            name: 'Github',
            link: github,
            icon: Github
        },
        {
            name: 'LinkedIn',
            link: linkedin,
            icon: Linkedin
        },
        {
            name: 'Resume',
            link: resume,
            icon: Resume_icon
        }
    ]

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='flex flex-row w-1/2 justify-around items-center'>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        link={item.link}
                        icon={item.icon}
                    />
                ))
                }
            </div>
        </div>

    )
}

export default Related;