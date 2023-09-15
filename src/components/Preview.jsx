import PreviewBasicInfo from "./PreviewBasicInfo"
import PreviewContactInfo from "./PreviewContactInfo"
import PreviewEducationInfo from "./PreviewEducationInfo"
import PreviewWorkInfo from "./PreviewWorkInfo"
import PreviewSkill from "./PreviewSkill"
import { useRef } from "react"


export default function Preview({formData, showCVPage, cvPageRef})
{
    
    return(
        <div className={`preview ${showCVPage ? 'hidden' : ''}`} >
            <div className={`cvPage ${showCVPage ? 'hidden2' : ''}`} ref={cvPageRef}>
                <PreviewBasicInfo formData = {formData.BasicInfo} />
                <PreviewContactInfo formData = {formData.ContactInfo} />

                <div className="preview-main-col">

                    <PreviewEducationInfo formData = {formData} />
                    <PreviewWorkInfo formData = {formData} />

                </div>

                <div className="preview-side-col">

                    <PreviewSkill formData = {formData} />

                </div>

            </div>
      </div>
    )
}