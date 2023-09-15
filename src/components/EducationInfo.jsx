import { useState } from "react";

export default function EducationInfo({formData, setFormData})
{
    const [educationData, setEducationData] = useState({
        university:"",
        program:"",
        syear:"",
        ongoing:false,
        gyear:"",
        gpa:"",
    });

    const handleEduChange=(e)=>{
        const { name, value, type, checked } = e.target;

        setEducationData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
          }));
    }

    const handleEduSubmit = (e)=>{
        e.preventDefault();

        const updatedFormData = {...formData};
        const uniqueId = Date.now(); 

        updatedFormData.EducationInfo.push({id:uniqueId, ...educationData})        
        setFormData(updatedFormData);

        setEducationData({
            university: "",
            program: "",
            syear: "",
            ongoing: false,
            gyear: "",
            gpa: "",
          });
    
    }

    const deleteEducation = (id)=>{
        const updatedFormData = {...formData};
        updatedFormData.EducationInfo = updatedFormData.EducationInfo.filter((edu)=>{
            return edu.id !== id;
        })
        setFormData(updatedFormData);

    }

    return (
        <div className="infoBox educationInfo">
            <form onSubmit={handleEduSubmit}>
            <div className="infoTitle educationInfoTitle">Education Background</div>
            <hr className="horizontalLine"/>
            
            <fieldset className="fieldset">

                <div className="educationdisplay">
                    {formData.EducationInfo.map((show)=>{
                        return (
                            <div className="showbox" key={show.id}>
                                <span>{show.university}</span><i className="fa fa-close"  onClick={()=> deleteEducation(show.id)} ></i></div>
                        )
                    })}
                </div>

            <label htmlFor="university" className="labels">University/Institution/Organization:</label>
            <input type="text" id="university" required name="university" value={educationData.university} onChange={handleEduChange}/>
            
            <label htmlFor="program">Program/Degree/Course:</label>
            <input type="text" id="program" required name="program" onChange={handleEduChange} value={educationData.program}/>

            <label htmlFor="syear">Starting Year:</label>
            <input type="date" id="syear" name="syear" value={educationData.syear} onChange={handleEduChange}/>

            <div className="switchdiv">
                <div className="switchname">On-Going: </div>

                <label className="switch">
                <input type="checkbox" name="ongoing" checked={educationData.ongoing}onChange={handleEduChange}/>
                <span className="slider round"></span>
                </label>
            </div>
            
            {!educationData.ongoing && (
                <>
            <label htmlFor="gyear">Graduating Year:</label>
            <input type="date" id="gyear" name="gyear" value={educationData.gyear} onChange={handleEduChange} />
            </>
            )}

            <label htmlFor="gpa">GPA:</label>
            <input type="text" id="gpa" name="gpa" value={educationData.gpa} onChange={handleEduChange} />
            
            </fieldset>

            <button type="submit" className="btn btnSubmit">
                Submit education background
            </button>

            </form>
        </div>
    )
}