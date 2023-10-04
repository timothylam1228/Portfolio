import React from 'react';
import Container from './Container';
function WorkExperience(props) {
    const careers = props.careers;

    return (
        <div className="work-experience flex flex-col items-start justify-start text-start">
            {careers.map((experience, index) => (
                <JobEntry key={index} experience={experience} />
            ))}
        </div>
    );
}

function JobEntry(props) {
    const experience = props.experience;

    return (
        <div className="job-entry p-4">
            <h3 className="text-2xl font-bold">{experience.title} {experience.startDate} - {experience.endDate}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <ul className="list-disc list-inside">
                {experience.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                ))}
            </ul>
        </div>
    );
}

const careers = [
    {
        title: "Application Developer",
        startDate: "Jan 2023",
        endDate: "Jul 2023",
        company: "The Club HKT Limited",
        highlights: [
            "Developed an eCommerce app and website using Adobe Experience Manager, React, and React Native, resulting in increased sales and improved customer satisfaction.",
            "Seamlessly integrated new features with Restful API and GraphQL to enhance data retrieval and updates, providing an efficient user experience.",
            "Increased website performance, optimizing loading speed and data transfer by 50% faster.",
            "Restructured the website and mobile app, leading to improved performance.",
            "Implemented Git Flow methodologies for version control, facilitating a structured and efficient development workflow in collaboration with the development team."
        ]
    },
    {
        title: "Junior Application Developer",
        startDate: "Mar 2022",
        endDate: "Dec 2022",
        company: "Cinchblock",
        highlights: [
            "Develop and deploy secure and efficient smart contracts using Solidity and Hardhat.",
            "Created visually appealing and user-friendly websites and mobile applications with React and React Native.",
            "Implemented microservices architecture with Docker, enabling flexible and scalable application development on the AWS platform.",
            "Developed utility scripts and programs using Python and TypeScript/JavaScript, automating tasks and improving overall efficiency."
        ]
    }
];

const Careers = () => {
    return (
        <Container>
            <div id="careers" className='group text-black transition-all duration-300 ease-in-out'>
                <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Careers</h2>
            </div>
            <WorkExperience careers={careers} />
        </Container>
    )
}

export default Careers;
