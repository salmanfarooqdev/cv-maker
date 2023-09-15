export default function PreviewSkill({formData})
{
    const newArray = formData.TechnicalInfo.length > 0 ? ( 
        formData.TechnicalInfo.map((skill)=>{
        return (
            <li key={skill.id}>{skill.skill}</li>
        )
    })) : (
        <>
             <li>HTML CSS</li>
            <li>Javascript</li>
        </>
    )

    return (
        <div className="preview-skill">
        <span className="edu-name">TECHNICAL SKILLS</span>
            <hr className="hrtag"/>
            <ul>
                {newArray}
            </ul>

        </div>
    )
}