import Header from './Header'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import TechnicalInfo from './TechnicalInfo'

export default function Editor(props)
{
    

    return(
        <div className="editor">
            <Header />
            <BasicInfo formData = {props.formData} setFormData = {props.setFormData} />
            <ContactInfo formData = {props.formData} setFormData = {props.setFormData} />
            <EducationInfo formData = {props.formData} setFormData = {props.setFormData}/>
            <WorkInfo formData = {props.formData} setFormData = {props.setFormData}/>
            <TechnicalInfo formData = {props.formData} setFormData = {props.setFormData} />
      </div>
    )
}