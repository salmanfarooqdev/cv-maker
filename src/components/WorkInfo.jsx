import { useState } from "react";

export default function WorkInfo({formData, setFormData})
{
    const [workData, setWorkData] = useState({
        position:"",
        company:"",
        worksyear:"",
        ongoing:false,
        workeyear:"",
    });

    const handleWorkSubmit=(e)=>{

        e.preventDefault();
        const updatedFormData = {...formData};
        const uniqueId = Date.now(); 
        updatedFormData.WorkInfo.push({id:uniqueId, ...workData});
        setFormData(updatedFormData);

        setWorkData({
            position:"",
            company:"",
            worksyear:"",
            ongoing:false,
            workeyear:"",
        });

    }

    const handleWorkChange=(e)=>{
        const { name, value, type, checked } = e.target;

        setWorkData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
          }));
    }
    const deleteWork= (id)=>{
        const updatedFormData = {...formData};

        updatedFormData.WorkInfo = updatedFormData.WorkInfo.filter((work)=>{
            return work.id !== id;
        })
        setFormData(updatedFormData);
    }

    return (
        <div className="infoBox workInfo">
            <form onSubmit={handleWorkSubmit}>
            <div className="infoTitle workInfoTitle">Work Experience</div>
            <hr className="horizontalLine"/>
            
            <fieldset className="fieldset">

            <div className="workdisplay">
                    {formData.WorkInfo.map((show)=>{
                        return (
                            <div className="showbox" key={show.id}>
                     <span>{show.position}</span><i className="fa fa-close" onClick={()=> deleteWork(show.id)} ></i></div>
                        )
                    })}
                </div>

            <label htmlFor="position" className="labels">Title/Position:</label>
            <input type="text" id="position" value={workData.position} name="position" onChange={handleWorkChange}/>
            
            <label htmlFor="company">Workplace/Company/Organization:</label>
            <input type="text" id="company" value={workData.company} name="company" onChange={handleWorkChange}/>

            <label htmlFor="work-syear">Starting Year:</label>
            <input type="date" id="work-syear" value={workData.worksyear} name="worksyear" onChange={handleWorkChange} />

            <div className="switchdiv">
                <div className="switchname">On-Going: </div>

                <label className="switch">
                <input type="checkbox" name="ongoing" checked={workData.ongoing}onChange={handleWorkChange}/>
                <span className="slider round"></span>
                </label>
            </div>
            {!workData.ongoing && 
            (
                <>
                 <label htmlFor="work-eyear">End Year:</label>
                <input type="date" id="work-eyear" name="workeyear" value={workData.workeyear} onChange={handleWorkChange}/>
                </>
            )
            }
            </fieldset>

            <button type="submit" className="btn btnSubmitWork">
                Submit work experience
            </button>

            </form>
        </div>
    )
}