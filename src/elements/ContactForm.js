"use client"
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '@/utils/constants';
const ContactForm = ({ white }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleForm = async (e) => {
        e.preventDefault()
        toast.loading("Loading")
        try {
            const res = await fetch(`${URL}api/contact/addcontact`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data })
            })
            const resdata = await res.json();
            toast.dismiss()
            if (res.ok) {
                toast.success(`${resdata.success}`)
                setData({
                    name: '',
                    email: '',
                    message: ''
                })
            } else {
                toast.error(`${resdata.errors[0]}`)
            }
        } catch (error) {
            toast.dismiss()
            toast.error("Internal Server Error")
        }
    }
    return (
        <>
            <div><Toaster /></div>
            <form onSubmit={handleForm}>

                <input
                    className={` font_16 expand_80 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                    type="text"
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={data.name}
                    required
                />
                <input
                    className={` font_16 expand_80 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                    type="email"
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={data.email}
                    required
                />

                <textarea
                    className={` font_16 expand_80 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder='Message'
                    onChange={handleChange}
                    value={data.message}
                    required
                />
                <button type='submit' className='btn bg_golden t_white mb_100'>SEND MESSAGE</button>
            </form>
        </>
    )
}

export default ContactForm
