"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const loginForm = ({ handleForm,setLoginData,loginData }) => {

    
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
 
    return (
    
        <div className='absolute stack center expand_100 height_full relative' >
        <div className='expand_100 height_full bg_golden absolute' style={{zIndex:'1',top:0, left:0}} ></div>
        <form onSubmit={(e) => handleForm(e)} className='login_form radius_8 expand_30 absolute stack center padding_16 bg_white ' style={{boxShadow:'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',zIndex:1 }}>

            <Image className='padding_16' width={150} height={150} src='/assets/images/common/logo1.png' alt='company logo' />
            <input
                className={`mt_16 font_16 expand_80 transparent_type padding_16 radius_8 mb_16 `}
                type="email"
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={loginData.email}
                autoComplete='off'
                required
            />
                        <input
                className={` font_16 expand_80 transparent_type padding_16 radius_8 mb_16 `}
                type="password"
                name='password'
                placeholder='password'
                onChange={handleChange}
                value={loginData.pssword}
                autoComplete='off'
                required
            />

            <button type='submit' className='mt_16 btn bg_golden t_white mb_100'>Login</button>
        </form>
        </div>

        
    )
}

export default loginForm
