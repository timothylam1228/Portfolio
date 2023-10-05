import Polyu from "../assets/polyu.png"
import Container from "./Container";
const Education = () => {

    const school = {
        name: "The Hong Kong Polytechnic University",
        degree: "Bachelor of Science (Honours) in Computing",
        start: "2018",
        end: "2022",
    }
    return (
        <Container>
            <div id="education" className='group text-black transition-all duration-300 ease-in-out'>
                <h2 className=' font-extrabold text-5xl bg-left-bottom bg-gradient-to-r from-black to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Education</h2>
            </div>            <div className="flex w-full items-center justify-center mt-5">
                <img src={Polyu} alt="polyu" width={50}></img>
            </div>
            <div className="font-mono text-3xl ">
                {school.name}
            </div>
            <div className="font-mono text-xl ">
                {school.degree}
            </div>
            <div className="font-mono text-xl ">
                {school.start} - {school.end}
            </div>

        </Container>

    )
}

export default Education;