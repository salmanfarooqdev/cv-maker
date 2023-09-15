
export default function PreviewContactInfo({formData})
{
    return(
        <div className="preview-contact-info">

        <div className="mail">
        <i className="fa fa-envelope"style={{fontSize:14}}></i>
            <span>{formData.email || 'johndoe@gmail.com'}</span> 
        </div>

        <div className="phone">
        <i className="fa fa-mobile-phone" style={{fontSize:24}}></i>
        <span>{formData.phoneNo || '0301 123 4567'}</span>
        </div>

        <div className="loc">
        <i className="fa fa-map-marker"style={{fontSize:19}}></i>
        <span>{formData.location || 'Hollywood Boulevard'}</span>
            
        </div>
        <div className="web">
        <i className="fa fa-desktop"style={{fontSize:13}}></i>
        <span>{formData.website || 'www.johndoe.com'}</span>
        
        </div>
    </div>
    )
}