import React from 'react'
import Image from 'next/image'
import FormatText from './common/FormatText'

const HeroSection = () => {
    return (
        <div className='hero_section stack center expand_100 colorful'>
            <div className='stack expand_100 mt_16 pt_100 center'>
                <h1 className='font_42 bold t_white  mt_50 mb_50 '>{<FormatText text={'pages.index.section.hero.title'} />}
                </h1>
                <p className='font_16 light t_l_gray mt_16 mb_16'>{<FormatText text={'pages.index.section.hero.subtitle'} />}</p>
                <Image className={`hero_image`} width={400} height={380} src='/assets/images/banner.png' alt='tax image' style={{ marginBottom: `-135px` }} />
            </div>
        </div>
    )
}

export default HeroSection