import ColorfulSection from "@/components/common/ColorfulSection";
import { FiCheck } from 'react-icons/fi'
import Image from "next/image";
import FormatText from "./common/FormatText";
import Link from "next/link";
const About = () => {
    return (
        <ColorfulSection key={`About Section`}>
            <div className='about_section shelf space_around expand_80 wrap mt_100'>
                <div className='expand_50 center stack'><Image className='margin_right_auto margin_left_auto' width={300} height={350} src='/assets/images/about.png' alt={`name`} /></div>
                <div className='expand_50 left margin_16'>
                    <p className='font_16 light t_purple mb_16'><FormatText text={'pages.index.section.aboutus.title'} /></p>
                    <h3 className='font_33 bold t_back mb_16'><FormatText text={'pages.index.section.aboutus.company-intro'} /> </h3>
                    <p className='font_13 light t_gray mt_16 mr_16 mb_16'><FormatText text={'pages.index.section.aboutus.company-detail'} /></p>
                    <ul className='mt_16 mb_50 ml_16 '>
                        <li className='flex items-center font_13 light t_black margin_8'><FiCheck className='t_golden mr-[5px]' /> Canada</li>
                        <li className='flex items-center font_13 light t_black margin_8'><FiCheck className='t_golden mr-[5px]' /> Unites States</li>
                        <li className='flex items-center font_13 light t_black margin_8'>& Many more...</li>
                    </ul>
                    <Link className='btn bg_golden t_white ' href='/about'>More Details</Link>
                </div>
            </div>
        </ColorfulSection>
    )
}

export default About
