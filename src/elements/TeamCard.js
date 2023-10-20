import Image from 'next/image'
import React from 'react'
import { SiFacebook, SiDiscord, SiTwitter, SiYoutube, } from 'react-icons/si'
import Link from 'next/link'


const TeamCard = (props) => {
  return (
    <div className='stack center ml_16 mr_16'>
    <Image className='mb_16' width={150} height={150} src={props.image} alt="player" />
    <h5 className='t_white font_20 semi_bold mt_16'>{props.name}</h5>
    <h6 className='t_l_gray font_13 light center mt_8'>{props.position}</h6>
    <ul className='shelf center mt_8'>
      <li className='margin_8'><Link className='t_white colorHover' href={props.social.discord}><SiDiscord /></Link></li>
      <li className='margin_8'><Link className='t_white colorHover' href={props.social.facebook}><SiFacebook /></Link></li>
      <li className='margin_8'><Link className='t_white colorHover' href={props.social.twitter}><SiTwitter /></Link></li>
      <li className='margin_8'><Link className='t_white colorHover' href={props.social.youtube}><SiYoutube /></Link></li>
    </ul>
  </div>
  )
}

export default TeamCard