import Banner from '@/components/common/Banner'
import ColorfulSection from '@/components/common/ColorfulSection'
import SubcribeBox from '@/components/common/SubscribeBox'
import FormatText from "@/components/common/FormatText";
import MetaData from '@/components/common/MetaData';

const about = () => {
    const metaData = MetaData({
        title: "About Us - VUOTO Crypto Tax Specialists",
        description: "Learn more about VUOTO, your trusted crypto tax specialist based in Montreal, Quebec, Canada. Discover our company details, mission, and vision for the crypto tax reporting services we provide.",
        path: "aboutus",
        imageSrc: "images/metadata/aboutus.png",
        keywords: "VUOTO About Us, crypto tax specialist, Montreal, Quebec, Canada, company details, mission, vision, crypto tax reporting services"
    })
    return (
        <> 
        {metaData}
            <Banner title={"About Us"} prev={"Home"} link={"/"} />
            <div className='about_page expand_80 shelf  mt_100 mb_100 wrap'>
                <div className='expand_50 ml_0 stack center'>
                    <h2 className='margin_right_auto font_42 mb_16'><FormatText text={'pages.about.section.aboutus.heading'} /></h2>
                    <p className='left pr_16 mb_8 font_16 line_space'><FormatText text={'pages.about.section.aboutus.description-para1'} /></p>
                    <p className='left pr_16 mb_8 font_16 line_space'><FormatText text={'pages.about.section.aboutus.description-para2'} /></p>
                    <p className='left pr_16 mb_8 font_16 line_space'><FormatText text={'pages.about.section.aboutus.description-para3'} /></p>
                    <p className='left pr_16 mb_8 font_16 line_space'><FormatText text={'pages.about.section.aboutus.description-para4'} /></p>
                </div>
                <div className='padding_16 expand_50 '>

                    <div className='colorful_background t_white expand_70 padding_16 radius_8 mb_16'>
                        <h2 className='margin_16 mt_50 font_20 bold t_golden'><FormatText text={'pages.about.section.mission.heading'} /></h2>
                        <p className='margin_16 mb_50 font_13 '><FormatText text={'pages.about.section.mission.description'} /></p>
                    </div>

                    <div className='colorful_background t_white expand_70 padding_16 radius_8 '>
                        <h2 className='margin_16 mt_50  font_20 bold t_golden'><FormatText text={'pages.about.section.vision.heading'} /></h2>
                        <p className='margin_16 mb_50 font_13'><FormatText text={'pages.about.section.vision.description'} /></p>
                    </div>
                </div>
            </div>
            <ColorfulSection colorful={true} />
            <SubcribeBox />
        </>
    )
}

export default about
