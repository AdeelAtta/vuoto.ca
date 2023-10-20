"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import BlogDetail from '@/components/BlogDetail';
import { BlogContext } from '@/context/BlogState';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});
function BlogForm({ white }) {
    const [data, setData] = useState({
        title: '',
        slug: '',
        tags: '',
        thumbnail: '',
    })

    const [desc, setDesc] = useState('')

    const handleChange = (e) => {
        const obj = {
            ...data,
            [e.target.name]: e.target.value,
        }

        e.target.name == 'title' && (obj[`slug`] = e.target.value.replaceAll(` `, `-`))
        setData(obj)
    }

   
    const handleForm = async (e) => {
        e.preventDefault()
        e.disabled = true;
       
        const {title,slug,tags,thumbnail} = data;

        const payload = {title,slug,tags,thumbnail,desc};


        try {
            const res = await fetch(`${URL}api/blogs/addBlog`, {
                method: 'POST',
                body: JSON.stringify(payload)
            })
            const resData = await res.json()
                if(res.ok){
                    setDesc('')
                    setData({
                        title: '',
                        slug: '',
                        tags: '',
                        thumbnail: '',
                    })
                    toast.success('Blog uploaded Successfully!')
                
              } else {
                toast.error('SERVER ERROR: Adding Blog Failed!');
              } 
        } catch (err) {
            toast.error('Adding Blog Failed!');
        }

        e.disabled = false;

    }

    const handleImageInputChange = (event) => {
        const imageFile = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(imageFile);
        reader.onload = () => {
            setData({
                ...data,
                thumbnail: reader.result
            })
        };
    };

    // Handle Description change
    const handleDescriptionChange = (content) => {
       setDesc(content)
    };


    // Toogle preview

    const [isPreview, setIsPreview] = useState(false);

    const tooglePreview = () => setIsPreview(!isPreview);

    return (
        <><Toaster />
            <form onSubmit={handleForm} encType='multipart/form-data' className='stack left mb_100 expand_100'>
                <label className=' expand_70 stack m_0 mt_8'>
                    <span className='t_golden font_16 semi_bold'>Title: </span>
                    <input
                        className={` font_16 expand_100 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                        type="text"
                        name='title'
                        placeholder='Title (Write your Blogs title here...)'
                        onChange={handleChange}
                        value={data.title}
                        required
                    />
                </label>

                <label className='left expand_70 stack m_0 mt_8'>
                    <span className='t_golden font_16 semi_bold'>Thumbnail: </span>
                    {(data.thumbnail) ? <div className='shelf justify expand_30  padding_16'>< Image className=' margin_16' src={data.thumbnail} width={100} height="100" alt="thumbnail" />
                        <a
                            className='btn bg_danger t_white'
                            onClick={(e) => {
                                e.preventDefault()
                                setData({
                                    ...data,
                                    thumbnail: ''
                                })
                            }}>delete</a> </div> :

                        <input
                            className={` font_16 expand_100 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                            type="file"
                            accept='/images'
                            onChange={handleImageInputChange}
                        />
                    }

                </label>

                <label className=' expand_70 stack m_0 mt_8'>
                    <span className='t_golden font_16 semi_bold'>Tags: </span>
                    <input
                        className={` font_16 expand_100 transparent_type padding_16 radius_8 mb_16 ${white ? `t_white` : ``}`}
                        type="text"
                        name='tags'
                        placeholder='#Tags'
                        onChange={handleChange}
                        value={data.tags}
                        required
                    />
                </label>


                <SunEditor
                    onChange={handleDescriptionChange}
                    setContents={desc}
                    value={desc}
                    setOptions={{
                        buttonList: [
                            ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                            ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview',],
                            ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                        ],
                        resizingBar: false,

                    }}
                    height='300px'
                />
                <button type='submit' className='mt_50  btn bg_golden t_white '>UPLOAD POST</button>


                {isPreview ?
                    <>
                        <a onClick={tooglePreview} className='t_danger light right mt_16'><u>hide Preview</u></a>
                        <div className='stack center expand_100'><Image className='stack center expand_50' src={`/assets/shapes/downarrow.gif`} width={100} height={300} alt="direction arrow" /></div>
                        <div className="stack expand_100 left m_0 ">
                            <h2 className='center bg_l_gray t_golden padding_16 '>Blog Preview</h2>
                            <p className='t_purple center mb_100 padding_16'>Get a Sneak Peek of Your Blog before uploading!</p>
                            <div className='expand_80'>
                                <BlogDetail title={data.title} thumbnail={data.thumbnail} date={`24/10/2023`} content={desc} href={data.title} />
                            </div>
                            <button type='submit' className='mt_50  btn bg_golden t_white '>UPLOAD POST</button>
                        </div>
                    </> :
                    <a onClick={tooglePreview} className='t_purple right mt_16'><u>Click here</u> to see Preview of Blog before uploading</a>
                }
            </form>


        </>
    )
}

export default BlogForm
