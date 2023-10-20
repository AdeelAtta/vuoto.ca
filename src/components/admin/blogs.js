import BlogCard from "@/components/BlogCard";
import { URL } from "@/utils/constants";
import { fetchBlogsService } from "@/utils/services";
// import Image from "next/image";
import { useState , useEffect } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState([])

    async function fetchBlogs(){
      const response = await fetchBlogsService();
        const data = await response.json();
        const blogsData = await data.blogs;
        setBlogs(blogsData);

    }

    useEffect(()=>{

        fetchBlogs();

    },[deleteBlog])

    async function deleteBlog(id) {
        const response = await fetch(`${URL}api/blogs/deleteblog`, {
            method: 'POST',
            body: JSON.stringify({id}),
        })
        if(response.ok){
            
            toast.success('Blog Deleted Successfully!')
                
        } else {
          toast.error('SERVER ERROR: Blog Deleting Failed!');
        } 
    }

    return (
        <>
        <h1 className='mb_16 padding_8 t_danger mt_50'>Blogs </h1>
        <div className="stack ml_16 pr_16 mt_100 expand_70">
        {blogs?.length > 0 ? 
        blogs.map((item, index) => {
            return (<>
                <div key={item._id} className="shelf left expand_100 space_between ml_16 pl_16">
                <button key={index+1} className="bg_white bold t_golden mr_16">{index+1}</button>
                <BlogCard key={item.title + index} date={item.createdAt} title={item.title} slug={item.slug} />
                    <button className="btn bg_danger t_white"
                        onClick={() => deleteBlog(item._id)}>
                        DELETE
                    </button>
                </div>
            </>)
        }) :
                <>
                    <h1>No Data Found</h1>
                    {/* <img src={'/assets/images/NoDataFound.jpg'} width={500} height={500}/> */}
                </>
       
        
        } </div>
        </>
    )
}
