import React from 'react'
import { URL } from "@/utils/constants";


export const fetchBlogsService = async() => {

    let url = `${URL}api/blogs/getBlogs`;


    const response = await fetch(`${url}`);

    return response;
}
