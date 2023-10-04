const SkillContainer = (props) => {

    const { skill, size, name } = props;

    return (
        <div className={`skill-container items-center flex flex-col w-[40px]`}>
            <img src={skill} alt="skill" width="40" height="40" style={{minWidth:'40px'}}/>
            <div className=" font-sans">{name}</div>
        </div>

    )
}
//default props
SkillContainer.defaultProps = {
    size: 50
}
export default SkillContainer;