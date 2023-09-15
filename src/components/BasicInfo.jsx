
export default function BasicInfo({formData, setFormData})
{
    const handleInputChange=(e)=>{
        const updatedFormData = {...formData};
        updatedFormData.BasicInfo[e.target.name] = e.target.value;
        setFormData(updatedFormData);
       
    }
    return (
        <div className="infoBox basicInfo">
            <div className="infoTitle basicInfoTitle">Basic Info</div>
            <hr className="horizontalLine"/>
            
            <fieldset className="fieldset">

            <label htmlFor="fname" className="labels">First name:</label>
            <input type="text" placeholder="John" id="fname" name="fname" onChange={handleInputChange} value={formData.BasicInfo.fname}/>
            
            <label htmlFor="lname">Last name:</label>
            <input type="text" placeholder="Doe" id="lname" name="lname" value={formData.BasicInfo.lname} onChange={handleInputChange}/>

            <label htmlFor="ptitle">Professional Title:</label>
            <input type="text" id="ptitle" name="ptitle" value={formData.BasicInfo.ptitle} onChange={handleInputChange}/>

            <label htmlFor="summary">Give a summary about yourself:</label>
            <textarea
                name="summary"
                cols={30}
                rows={7}
                className="form-input form-input__self-summary"
                onChange={handleInputChange}
                value={formData.BasicInfo.summary}
                />
            
            </fieldset>
        </div>
    )
}