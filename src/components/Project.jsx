import Container from "./Container";
import Project1 from "../assets/project/0xblanc.png"
import Project2 from "../assets/project/gather.png"
import Chips from "./Chips";
const Project = ({ project }) => {

    const projects = [{
        name: "0xblanc",
        preview: Project1,
        description: "A front-end project",
        skills: ["React", "TailwindCSS", "NextJs"]
    }, {
        name: "Gather Gulu",
        preview: Project2,
        description: "An app for you to schedule gathering with friends, allowing you to vote for the most suitable time and hassle freee for the expense of the events.",
        skills: ["React", "Material UI", "NodeJs", "ExpressJs", "MongoDB", "TailwindCSS"]
    }]
    return (
        <Container>
            <div id="projects" className='group text-black transition-all duration-300 ease-in-out w-full'>
                <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Projects</h2>
            </div>
            <div className="mt-20 flex flex-row gap-4">
                {projects.map((project, index) => (
                    <div className="backdrop-blur-lg aspect-square border-2 border-black md:p-2 w-full sm:w-80 rounded-md relative">
                        <img src={project.preview} alt={project.name} className=" rounded-md" />
                        <a href="https://0xblanc.io/" target="_blank" rel="noreferrer" className="flex text-lg justify-end font-bold font-mono">{project.name}</a>
                        <div className="flex flex-row mt-2 gap-2 flex-wrap items-end justify-end">
                            {project.skills.map((skill, index) => (
                                <Chips key={`project-${index}`} title={skill} className=" w-fit bg-white hover:bg-black" textClassName="text-black hover:text-white font-sm text-xs" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Project;