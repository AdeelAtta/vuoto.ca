"use client"

import Image from 'next/image'
import Link from 'next/link'

import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 550) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`expand_100 ${isScrolled ? `sticky_menu` : `menu`}`}>
      <nav className=' shelf center padding_8 expand_80'>

        <Link className='margin_right_auto company_name' href='/'><h1 className='shelf center  t_white ml_16 font_33'>VU<Image className='radius_50 padding_4' width={55} height={55} src={`/assets/images/common/logo1.png`} alt='logo' />TO</h1></Link>
        <GiHamburgerMenu onClick={toggleMenu} className='humburger font_33 bold t_white' />
        <ul className={`menubar shelf justify margin_left_auto font_16 light mr_16`} >
          <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/' onClick={async () => setMenuActive(false)}>HOME</Link></li>
          <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/about' onClick={async () => setMenuActive(false)}>ABOUT US</Link></li>
          {/* <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/services' onClick={async () => setMenuActive(false)}>SERVICES</Link></li> */}
          <li className='pl_8 pr_8 center'><Link className='  t_white light' href='/blogs' onClick={async () => setMenuActive(false)}>BLOGS</Link></li>
          <li className='pl_8 pr_8 center'><Link className='  t_white light' href='/faq' onClick={async () => setMenuActive(false)}>FAQ</Link></li>
          <Link className='btn bg_golden t_white ml_16' href='/contact'>CONTACT US</Link>
        </ul>

        <ul className={`side ${menuActive ? `mobileMenu` : ``} stack justify margin_left_auto font_16 light mr_16`}>
          <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/' onClick={async () => setMenuActive(false)}>HOME</Link></li>
          <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/about' onClick={async () => setMenuActive(false)}>ABOUT US</Link></li>
          {/* <li className='pl_8 pr_8 center'><Link className=' t_white light' href='/services' onClick={async () => setMenuActive(false)}>SERVICES</Link></li> */}
          <li className='pl_8 pr_8 center'><Link className='  t_white light' href='/blogs' onClick={async () => setMenuActive(false)}>BLOGS</Link></li>
          <li className='pl_8 pr_8 center'><Link className='  t_white light' href='/faq' onClick={async () => setMenuActive(false)}>FAQ</Link></li>
          <Link className='btn bg_golden t_white ml_16' href='/contact'>CONTACT US</Link>
        </ul>


      </nav>
    </div>
  )
}

export default Header