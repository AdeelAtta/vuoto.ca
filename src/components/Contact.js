import ColorfulSection from "./common/ColorfulSection"
import ContactTab from "@/elements/ContactTab"
import ContactForm from "@/elements/ContactForm"
import FormatText from "./common/FormatText"

// Icon
import { ImOffice } from 'react-icons/im'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'

const Contact = () => {


    return (
        <ColorfulSection key={`Contact us Section`} colorful={true}>
            <div className='contactus_section shelf expand_80 t_white wrap'>
                <div className='expand_50 left margin_right_auto'>
                    <h3 className='mb_16 font_33'><FormatText text={'pages.index.section.contactus.heading'} /></h3>
                    <ContactTab type={<><ImOffice /></>} text={<FormatText text={'pages.index.section.contactus.address'} />}       />
                    <ContactTab type={<><MdEmail /></>} text={<FormatText text={'company.email'} />} />
                    {/* <ContactTab type={<><MdPhoneAndroid /></>} text={<FormatText text={'pages.index.section.contactus.email'} />} /> */}
                </div>
                <div className='expand_50 left margin_left_auto'>
                    <h3 className='mb_16 font_33 '><FormatText text={`pages.index.section.contactus.form-heading`} /></h3>
                    <ContactForm white={true} />
                </div>
            </div>
        </ColorfulSection>
    )
}

export default Contact
