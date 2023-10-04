import React from 'react';
import AWS from '../../assets/skills/amazonaws.svg';
import Docker from '../../assets/skills/docker.svg';
import Express from '../../assets/skills/express.svg';
import Git from '../../assets/skills/git.svg';
import Github from '../../assets/skills/github.svg';
import Html5 from '../../assets/skills/html5.svg';
import Javascript from '../../assets/skills/javascript.svg';
import Materialdesign from '../../assets/skills/materialdesign.svg';
import Php from '../../assets/skills/php.svg';
import Python from '../../assets/skills/python.svg';
import ReactIcon from '../../assets/skills/react.svg';
import Redux from '../../assets/skills/redux.svg';
import Sass from '../../assets/skills/sass.svg';
import Solidity from '../../assets/skills/solidity.svg';
import Tailwindcss from '../../assets/skills/tailwindcss.svg';
import Typescript from '../../assets/skills/typescript.svg';

import Container from '../Container';
import SkillContainer from './SkillContainer';
const Skills = () => {

    // add a list of skill
    const designSkills = [
        { name: 'Material design', icon: Materialdesign },
        { name: 'Sass', icon: Sass },
        { name: 'Tailwindcss', icon: Tailwindcss }
    ];

    const frontendSkills = [
        { name: 'Html5', icon: Html5 },
        { name: 'Javascript', icon: Javascript },
        { name: 'React', icon: ReactIcon },
        { name: 'React Native', icon: ReactIcon },
        { name: 'Redux', icon: Redux },
        { name: 'Typescript', icon: Typescript }
    ];

    const backendSkills = [
        { name: 'Express', icon: Express },
        { name: 'Python', icon: Python },
        { name: 'Solidity', icon: Solidity },
        { name: 'Php', icon: Php },

    ];

    const devopsSkills = [
        { name: 'AWS', icon: AWS },
        { name: 'Docker', icon: Docker },
        { name: 'Git', icon: Git },
        { name: 'Github', icon: Github }
    ];


    const List = (props) => {
        const { skills, title } = props;
        return (
            <div className="flex flex-col">
                <h1 className="text-3xl font-mono font-bold flex py-4">{title}</h1>
                <div className='flex w-full items-start gap-20 flex-wrap gap-y-5'>
                    {skills.map((skill, index) => {
                        return (
                            <SkillContainer key={index} name={skill.name} skill={skill.icon} />
                        )
                    })}
                </div>
            </div>
        )
    }



    return (
        <Container>
            <div id="skills" className="">
                <div className='group text-black transition-all duration-300 ease-in-out'>
                    <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Skills</h2>
                </div>
                <div className="w-full gap-2 flex flex-col px-0 overflow-visible">
                    <List skills={designSkills} title="Design" />
                    <List skills={frontendSkills} title="Front End" />
                    <List skills={backendSkills} title="Back End" />
                    <List skills={devopsSkills} title="Devops" />

                </div>
            </div>
         </Container>
    )
}

export default Skills;