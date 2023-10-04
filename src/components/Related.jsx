import Resume from './buttons/Link';
import Link from './buttons/Link';
import github_icon from '../assets/github_icon.png';
import linkedin_icon from '../assets/linkedin_icon.png';
const Related = () => {

    const github = "https://github.com/timothylam1228"
    const linkedin = "https://www.linkedin.com/in/timothylam981228/"
    const resume = "/resume.pdf"

    const items = [
        {
            name: 'Github',
            link: github,
            icon: github_icon
        },
        {
            name: 'LinkedIn',
            link: linkedin,
            icon: linkedin_icon
        },
        {
            name: 'Resume',
            link: resume,
            icon: ''
        }
    ]

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='flex flex-row w-1/2 justify-around items-center'>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        name={item.name}
                        link={item.link}
                        icon={item.icon}
                        style='w-1/3'
                    />
                ))
                }
            </div>
        </div>

    )
}

export default Related;