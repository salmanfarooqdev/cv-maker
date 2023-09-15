

export default function PreviewBasicInfo({formData})
{
    return (
        <div className="preview-basic-info">
                    <div className="cvName">{formData.fname || 'John'} {formData.lname || 'Doe'}</div>
                    <div className="proTitle">{formData.ptitle || 'Business Manager'}</div>
                    <div className="sum">{formData.summary || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis.'}</div>
                </div>
    )
}