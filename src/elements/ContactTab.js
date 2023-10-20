
const ContactTab = ({type,text}) => {
    return (
        <div className='transparent_type shelf space_between mb_16 padding_16 radius_8'>
                <span className="font_26 semi_bold t_golden">{type}</span>
                <p className='expand_80 ml_16 mb_8 font_16 left'>{text}</p>
        </div>
    )
}

export default ContactTab
