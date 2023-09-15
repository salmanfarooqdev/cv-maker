
export default function ContactInfo({formData, setFormData})
{
    const handleContactChange=(e)=>{

        const updatedFormData = {...formData};
        updatedFormData.ContactInfo[e.target.name] = e.target.value;
        setFormData(updatedFormData);
       
    }
    return (
        <div className="infoBox contactInfo">
            <div className="infoTitle contactInfoTitle">Contact Info</div>
            <hr className="horizontalLine"/>
            
            <fieldset className="fieldset">

            <label htmlFor="email" className="labels">Email:</label>
            <input type="text" id="email" name="email" value={formData.ContactInfo.email} onChange={handleContactChange}/>
            
            <label htmlFor="phoneNo">Phone Number:</label>
            <input type="text" id="phoneNo" name="phoneNo"  value={formData.ContactInfo.phoneNo} onChange={handleContactChange} />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location"  value={formData.ContactInfo.location} onChange={handleContactChange} />

            <label htmlFor="website">Website:</label>
            <input type="text" id="website" name="website"  value={formData.ContactInfo.website} onChange={handleContactChange} />
            
            </fieldset>
        </div>
    )
}