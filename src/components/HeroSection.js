import React from 'react'
import Image from 'next/image'
import FormatText from './common/FormatText'


const HeroSection = () => {
    return (
        <div className='hero_section shelf justify expand_100 colorful py-20 h-[400px] md:h-auto'>
            <div className='text-white absolute zIndex-[-1] w-full h-full opacity-[20%]' style={{ backgroundImage: `URL('../assets/images/cryptobg.png')`, backgroundColor: `#03020252`, backgroundRepeat: `no-repeat !important`, backgroundSize: `cover`, zIndex: '-1' }}></div>
            <div className="flex items-center py-5 md:w-2/3 md:pb-20 md:pt-10 ">
                <div className="text-left md:ml-2">
                    <h2
                        className="text-4xl font-extrabold leading-10 tracking-tight text-[#d39f46] sm:text-5xl sm:leading-none md:text-6xl">
                        {<FormatText text={'pages.index.section.hero.title'} />} <br />
                        <span className="font-semibold  text-white">
                            {<FormatText text={'pages.index.section.hero.title2'} />}

                            <span className="text-2xl font-semibold rounded-full align-super text-[#5e8a37] relative top-[-10px]"> 2.0</span>  </span>
                    </h2>
                    <p className="max-w-md mx-auto mt-3 text-base text-[#5e8a37] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        {<FormatText text={'pages.index.section.hero.subtitle'} />}
                    </p>

                </div>

            </div>
            <Image className='absolute z-[-1] md:relative opacity-[50%] mt-10 w-[320px] md:w-auto md:min-w-[450px] md:grayscale-0' width={450} height={450} src="/assets/images/common/heroImage.png" alt="tax image" />
        </div>
    )
}

export default HeroSection