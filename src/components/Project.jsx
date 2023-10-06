import Container from "./Container";
import Project1 from "../assets/project/0xblanc.png"
import Chips from "./Chips";
const Project = ({ project }) => {

    const projects = [{
        name: "0xblanc",
        preview: Project1,
        description: "A front-end project",
        skills: ["React", "TailwindCSS", "Nextjs"]
    }]
    return (
        <Container>
            <div id="projects" className='group text-black transition-all duration-300 ease-in-out w-full'>
                <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Projects</h2>
            </div>
            <div className="mt-20">
                {projects.map((project, index) => (
                    <div className=" backdrop-blur-lg aspect-square border-2 border-black p-2 w-full sm:w-80 rounded-md relative">
                        <img src={project.preview} alt={project.name} className=" rounded-md" />
                        <a href="https://0xblanc.io/" target="_blank" rel="noreferrer" className="flex text-lg justify-end font-bold font-mono">Conpany Front-end Project</a>
                        <div className="flex flex-row mt-2 gap-2 flex-wrap absolute bottom-2 right-2">
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