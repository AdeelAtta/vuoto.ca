"use client"
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '@/utils/constants';
function SubcribeBox() {
    let [emailText, setEmailText] = useState(``);

    const handleChange = (e) => {
        setEmailText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        toast.loading("Loading")
        try {
            const res = await fetch(`${URL}api/newsletter/addnewsletter`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "email": emailText })
            })
            const data = await res.json();
            toast.dismiss()
            if (res.ok) {
                toast.success(`${data.success}`)
                setEmailText(``)
            } else {
                toast.error(`${data.errors[0]}`)
            }
        } catch (error) {
            toast.dismiss()
            toast.error("Internal Server Error")
        }

    }

    return (
        <>
            <div><Toaster /></div>
            <div className="newsletter_box shelf center wrap expand_80 pt_50 pb_50  mb_100 shadow radius_20 bg_white">
                {/* <h2 className=' '>Get DeFi and Crypto regulation and tax, news and updates...</h2> */}
                <p className="font_13 t_gray margin_8 padding_8 expand_50 left light" ><span className='bold font_16'>Subscribe Newsletters</span> so you don’t miss a single newsletter</p>
                <form className="expand_50 bg_l_gray t_gray padding_8 " onSubmit={handleSubmit}>
                    <input onChange={handleChange} className=" expand_70 bg_transparent padding_8 font_13 " type="email" placeholder="Enter your email" value={emailText} required />
                    <button type="submit" className="btn bg_golden t_white" >SUBSCRIBE</button>
                </form>
            </div>
        </>
    )

}

export default SubcribeBox