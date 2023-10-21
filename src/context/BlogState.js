import React, { createContext, useState } from 'react'
import { URL } from '@/utils/constants';

export const BlogContext = createContext();

const BlogState = (props) => {
    const [blogs, setBlogs] = useState();

    const getBlogs = async () => {
        const response = await fetch(`${URL}api/blogs/getBlogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        if (response.ok) {
            setBlogs(data)
        }
    }
    const addBlog = async (data) => {
        try {
            const res = await fetch(`${URL}api/blogs/addBlog`, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            const resData = await res.json()
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <BlogContext.Provider value={{ getBlogs, blogs, addBlog }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState
