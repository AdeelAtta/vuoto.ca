import React from 'react'
import Image from 'next/image'
import FormatText from './common/FormatText'

const HeroSection = () => {
    return (
        <div className='hero_section shelf justify expand_100 colorful py-20'>
            <div className='stack center'>
                <h1 className='text-5xl bold t_white mb-6 left max-w-sm md:ml-10 md:max-w-xl'>{<FormatText text={'pages.index.section.hero.title'} />}
                </h1>
                <p className='text-2xl light t_l_gray left md:ml-10 lg:ml-0'>{<FormatText text={'pages.index.section.hero.subtitle'} />}</p>
            </div>

            <Image className='absolute z-[-1] md:relative grayscale-[50%] w-[320px] md:w-auto md:min-w-[450px] md:grayscale-0' width={450} height={450} src="/assets/images/common/heroImage.png" alt="tax image" />
        </div>
    )
}

export default HeroSection