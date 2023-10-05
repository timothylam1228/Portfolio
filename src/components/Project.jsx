import Container from "./Container";
const Project = ({ project }) => {

    const projects = [{
        name: "0xblanc",
    }]
    return (
        <Container>
            <div id="projects" className='group text-black transition-all duration-300 ease-in-out'>
                <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Projects</h2>
            </div>
            <div>
                <div></div>
            </div>
        </Container>
    )
}

export default Project;