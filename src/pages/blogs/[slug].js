import { useContext, useEffect, useMemo } from 'react';
import Banner from '@/components/common/Banner';
import ColorfulSection from '@/components/common/ColorfulSection';
import BlogDetail from '@/components/BlogDetail';
import RecommendBlogs from '@/components/RecommendBlogs';
import { useRouter } from 'next/router';
import { fetchBlogsService } from "@/utils/services"
import MetaData from '@/components/common/MetaData';

const BlogGrid = ({blog,blogs}) => {

  const metaData = MetaData({
    title: `${blog?.title}` +" - VUOTO Crypto Tax Specialists",
    description: "Explore our latest blogs on crypto tax, cryptocurrency regulations, and financial tips. VUOTO is your trusted source for valuable insights and information in the crypto tax space.",
    path: `blogs/${blog?.slug}`,
    imageSrc: `${blog?.thumbnail}`,
    keywords: `${blog?.tags}`+" VUOTO Blogs, crypto tax blogs, cryptocurrency regulations, financial tips, crypto tax insights, crypto tax information"
})

    return (
        <> {metaData}
            <Banner title={"Blogs"} prev={"Home"} link={"/"} />
            <ColorfulSection>
                <div className='shelf space-between blogs_section radius_8'>
                    <div className='expand_70 bg_l_gray ' >
                        {
                            blog ? <BlogDetail title={blog.title} thumbnail={blog?.thumbnail} date={blog?.createdAt} content={blog?.desc} />
                             : <div id='loader'></div> 
                        }

                    </div>
                    <div className="expand_30 bg_l_gray recommend_blogs_section radius_8">
            <h4 className="font_20 bold mt_50">Latest Blogs</h4>
            {(blogs && blogs.length > 0) ?
              blogs.slice(0,4).map((item, index) => (
                <RecommendBlogs key={item.title + index} date={item.createdAt} title={item.title} href={`${item.slug}`} />
              )) : <div id="loader"></div> }
          </div>
                </div>
            </ColorfulSection>
        </>
    )
}

export default BlogGrid;


export async function getStaticPaths() {

    let paths = []
    try {
      const response = await fetchBlogsService();
      if (!response.ok) {
        return {
          paths: [],
          fallback: true,
        }
      }
      // const data = await response.json();
      // const blogs = data.blogs;
  
      //setting all available paths for static Generation 
      // blogs.forEach(blog => {
      //   paths.push({ params: { slug: blog?.slug } });
      // })
      //setting all available paths for static Generation 
  
      return {
        paths: [...paths],
        fallback: true,  // true when we want ISG which is not supported in static exports
      }
    } catch (error) {
      return {
        paths: [],
        fallback: false,
      }
    }
  }


export async function getStaticProps(context){
    const { params } = context;
    try {
      const response = await fetchBlogsService();
      if (!response.ok) {
          return {
              props: {
                  blogsData: [],
              },
              revalidate: 1  // it revalidate Static generated Pages
          }
      }
      const data = await response.json();
      let blogs = await data.blogs;
      const copyBlogs = blogs
      const  blog = copyBlogs.filter(blog => blog.slug == params.slug);


       return {
        props: {
          blogs:[...blogs],
          blog: { ...blog[0] },
        },
        revalidate: 1  // it revalidate Static generated Pages
      }
  } catch (error) {
      console.error(error);
      return {
          notFound: true
      }
  }
    
  
  }
