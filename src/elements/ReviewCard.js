import React from 'react'
import Image from 'next/image'

const ReviewCard = (props) => {
    return (
        <div className="testimonial_box ">
            <Image width={50} height={30} src="/assets/shapes/quote.png" alt="" className="quote" />
            <div className="content">
                <p className='left font_13' >{props.message}</p>
            </div>
            <div className="shelf left mt_16">
                <div className="imgBox radius_50 mr_8">
                    <Image width={80} height={80} src={props.image} alt="" />
                    {/* "/assets/images/common/user.png" */}
                </div>
                <div className='stack left'>
                    <h3 className='font_16'>{props.name} </h3>
                    <span className='font_13 light'>{props.position}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
