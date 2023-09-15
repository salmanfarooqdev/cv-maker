export default function PreviewWorkInfo({formData})
{

    return (
        <div className="preview-work-info">
        <span className="edu-name">WORK EXPERIENCE</span>
            <hr className="hrtag"/>

            {formData.WorkInfo.length === 0 ? (
                <div className="workDiv" key="default-work">
                <div className="uniTitle">
                    <div className="uniname"> Business Analyst </div>
                    <div className="dates"><i>Nov 2015-Jan 2020</i></div>
                </div>
                <div className="degree">Company Inc.</div>
                </div>

            ):
            formData.WorkInfo.map((work)=>{
                const endDateText = work.ongoing ? 'Present' : work.workeyear;
                return (
                    
                    <div className="workDiv" key={work.id}>
                    <div className="uniTitle">
                        <div className="uniname"> {work.position} </div>
                        <div className="dates"><i>{work.worksyear} - {endDateText}</i></div>
                    </div>
                    <div className="degree">{work.company}</div>
                    </div>
                )
            })

           
            }
           
        </div>
    )
}