
export default function PreviewEducationInfo({formData})
{

    return (
        <div className="preview-edu-info">
                        <span className="edu-name">EDUCATION BACKGROUND</span>
                        <hr className="hrtag"/>

                        { formData.EducationInfo.length === 0 ? (
                                <div className="educationDiv">
                                <div className="uniTitle">
                                    <div className="uniname">University of London</div>
                                    <div className="dates">
                                    <i>Oct 2010 - Jan 2015</i>
                                    </div>
                                </div>

                                <div className="degree">Ph.D in Philosophy</div>
                                <div className="gpaDisplay">3.94 GPA</div>
                                </div>
                            ) : 
                                 formData.EducationInfo.map((education)=>{
                                    const endDateText = education.ongoing ? 'Present' : education.gyear;
                            return(
                                <div className="educationDiv" key={education.id}>

                                <div className="uniTitle">
                                    <div className="uniname"> {education.university} </div>
                                    <div className="dates"><i>{education.syear} - {endDateText} </i></div>
                                </div>
    
                                <div className="degree">{education.program}</div>
                                <div className="gpaDisplay">{education.gpa}</div>
                            </div>
                            
                            )
                        })}
                       

         </div>
    )
}