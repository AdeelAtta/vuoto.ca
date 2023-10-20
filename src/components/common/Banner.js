import Link from 'next/link'
import { BiCaretRight } from 'react-icons/bi'
const Banner = ({ title, prev, link }) => {
    return (
        <div className='banner shelf center t_white'>
            <div>
                <h3 className='font_33 margin_4'>{title}</h3>
                <div className=' shelf center mt_4 font_16 light'>
                    <Link className='font_16 light t_golden mr_8' href={link}> {prev} </Link>
                    <BiCaretRight className='font_20 light  mr_8' />
                    <p className='font_13 light'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
