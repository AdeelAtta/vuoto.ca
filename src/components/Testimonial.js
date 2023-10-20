
"use client"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import ReviewCard from "@/elements/ReviewCard";
import ColorfulSection from "./common/ColorfulSection";
export default function Testimonial() {
    return (
        <>
            <ColorfulSection colorful={true} sectionName={`Testimonials`} title={`Our clients Trust us`}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper expand_100"
                >
                       <SwiperSlide className="radius_20 bg_white swiper-slide">
                        <ReviewCard name={`Alex Mitchell`} position={`Teacher`} image={`/assets/images/common/user.png`} message={'"Crypto Tax Reporting Specialists made crypto tax season a breeze. Their service is efficient, and they provided me with accurate reports. I can\'t thank them enough for their expert help. Highly recommended!"'} />
                    </SwiperSlide>
                    
                    <SwiperSlide className="radius_20 bg_white swiper-slide">
                        <ReviewCard name={`Emma`} position={`Professional Trader`} image={`/assets/images/common/user.png`} message={"I couldn't be happier with the services provided by this company. As a crypto investor, I had been dreading tax time, but they made the entire process stress-free. Their knowledgeable staff took care of all the complexities involved in reporting crypto taxes, leaving me with peace of mind. I highly recommend their expertise!"} />
                    </SwiperSlide>
                    <SwiperSlide className="radius_20 bg_white swiper-slide">
                        <ReviewCard 
                            name={`Sarah Thompson`} 
                            position={`Software Engineer`} 
                            image={`/assets/images/common/user.png`} 
                            message={'"vuoto is a lifesaver. I\'m running a small business, and managing crypto taxes was overwhelming. Their expertise and efficiency saved me time and money. I\'m grateful for their service."'} />
                    </SwiperSlide>
                    <SwiperSlide className="radius_20 bg_white swiper-slide">
                        <ReviewCard name={`Adeel Atta`} position={`Electrical Engineer  `} image={`/assets/images/common/user.png`} message={'"I was really struggling with understanding how to report my crypto taxes until I came across this amazing company. Their team of experts guided me through the entire process, answering all my questions and ensuring that I was fully compliant. Thanks to them, tax season is now a breeze!"'} />
                    </SwiperSlide>
                    <SwiperSlide className="radius_20 bg_white swiper-slide">
                        <ReviewCard name={`David Evans`} position={`Graphic Designer`} image={`/assets/images/common/user.png`} message={'"I was skeptical at first, but this company truly lives up to its slogan. Their crypto tax reporting services are top-notch. They have a deep understanding of the intricacies of crypto taxation and are always up to date with the latest regulations. Thanks to their meticulous approach, I feel confident that my taxes are accurately reported. Thank you for making it easy!"'} />
                    </SwiperSlide>
                </Swiper>
            </ColorfulSection>
        </>
    );
}
