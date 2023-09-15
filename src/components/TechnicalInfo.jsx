import { useState } from "react";

export default function TechnicalInfo({formData, setFormData})
{
    const [newSkill, setNewSkill] = useState('');

    const handleTechInfo=(e)=>{
        e.preventDefault();

        const updatedFormData = {...formData};
        const uniqueId = Date.now(); 

        updatedFormData.TechnicalInfo.push({id:uniqueId, skill: newSkill});

        setFormData(updatedFormData);
        setNewSkill('');
    }

    const techInputValue=(e)=>{
        setNewSkill(e.target.value);
    }
    const deleteSkill=(id)=>{
        const updatedFormData = {...formData};
        updatedFormData.TechnicalInfo =  updatedFormData.TechnicalInfo.filter(function(skill){
            return skill.id !== id;
        })

        setFormData(updatedFormData);


    }

   
    return (
        <div className="infoBox technicalInfo">
            <form>
            <div className="infoTitle technicalInfoTitle">Technical Skills</div>
            <hr className="horizontalLine"/>

            <div className="subtitle">Showcase the most relevant skills applicable to the job you're applying for</div>
            <div className="showSkills">
                {formData.TechnicalInfo.map((skill)=>{
                    return (
                        <div className="skillbox" key={skill.id}>
                        <span>{skill.skill}</span> <i className="fa fa-close"  onClick={()=> deleteSkill(skill.id)}></i>
                </div>
                    )
                })}
                
                
            </div>

            <fieldset className="fieldset">

            <label htmlFor="skill" className="labels">Add a skill category:</label>
            <input type="text" id="skill" name="skill" value={newSkill} onChange={techInputValue} />
               
            
            </fieldset>

            <button type="submit" className="btn btnSubmit" onClick={handleTechInfo}>
                Submit Skill Info
            </button>

            </form>
        </div>
    )
}