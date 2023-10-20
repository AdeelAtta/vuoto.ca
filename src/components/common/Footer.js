
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { 
  // SiFacebook,
   SiDiscord, 
   SiTwitter, 
  // SiYoutube
 } from 'react-icons/si'

import Link from 'next/link'

import React from 'react'

function Footer() {
  return (
    <footer className='stack center expand_100 mt_16'>

      <div className='shelf center expand_80 mb_16 wrap'>
        <ul className='shelf center margin_right_auto font_16'>
          <li className='margin_16'><Link className='t_golden' href="/about">About us</Link></li>
          <li className='margin_16'><Link className='t_golden' href="/blogs">Blogs</Link></li>
          <li className='margin_16'><Link className='t_golden' href="/contact">Contact us</Link></li>
        </ul>
        <ul className='shelf center margin_left_auto '>
          <li className='margin_16 colorHover'><Link className='t_black' href="https://discord.gg/PNZzpTBkHB" ><SiDiscord /></Link></li>
          {/* <li className='margin_16 colorHover'><Link className='t_black' href="/"><SiFacebook /></Link></li> */}
          <li className='margin_16 colorHover'><Link className='t_black' href="https://twitter.com/CryptoTaxServ"><SiTwitter /></Link></li>
          {/* <li className='margin_16 colorHover'><Link className='t_black' href="/"><SiYoutube /></Link></li> */}
        </ul>
      </div>
      <Link className='scroll stack center t_golden font_42 mt_16' href='#top'><BsFillArrowUpCircleFill /></Link>
      <div className='shelf center expand_80 mt_16 wrap'>
        <p className='margin-right_auto ml_16'>Copyright © 2023. All Rights Reserved <b>vuoto</b></p>
        <span className='scroll_text center'>Scroll Top</span>
        <ul className='shelf center margin_left_auto'>
          <li className='margin_16'><Link className='t_golden' href='/'>Terms of Service</Link></li>
          <li className='margin_16'><Link className='t_golden' href='/'>Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
