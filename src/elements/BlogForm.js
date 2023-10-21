"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import BlogDetail from '@/components/BlogDetail';
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

    const showModal = () => {


        return (

            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg lg:max-w-xl xl:max-w-[55rem] sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[550px] overflow-scroll">
                        <div className="stack expand_100 left m_0 ">                            
                                <BlogDetail title={data.title} thumbnail={data.thumbnail} date={`24/10/2023`} content={desc} href={data.title} />
                        </div>
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={ ()=> tooglePreview() }><i className="fas fa-times"></i> Cancel</button>
                            <button type='submit' className="py-2 px-4 bg_golden text-white rounded mr-2" ><i className="fas fa-plus"></i>UPLOAD POST</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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
                <div className='flex expand_50 ml-auto'>
                <button type='button' onClick={tooglePreview} className='mt_50  btn bg_golden t_white expand_50 mr-auto'>Preview</button>
                <button type='submit' className='mt_50  btn bg_golden t_white expand_50 ml-auto'>UPLOAD POST</button>
                </div>


                {isPreview && showModal()}


               
            </form>


        </>
    )
}

export default BlogForm
