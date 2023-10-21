import { useContext, useEffect, useState } from "react"
import Banner from "@/components/common/Banner"
import ColorfulSection from "@/components/common/ColorfulSection"
import BlogCard from "@/components/BlogCard"
import RecommendBlogs from "@/components/RecommendBlogs"
import { fetchBlogsService } from "@/utils/services"
import MetaData from "@/components/common/MetaData"



const Blog = ({blogsData}) => {

  const metaData = MetaData({
    title: "Blogs - VUOTO Crypto Tax Specialists",
    description: "Explore our latest blogs on crypto tax, cryptocurrency regulations, and financial tips. VUOTO is your trusted source for valuable insights and information in the crypto tax space.",
    path: "blogs",
    imageSrc: "images/metadata/blogs.png",
    keywords: "VUOTO Blogs, crypto tax blogs, cryptocurrency regulations, financial tips, crypto tax insights, crypto tax information"
})

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData && blogsData.length > 0 ? blogsData.slice(indexOfFirstBlog, indexOfLastBlog) : [];

  useEffect(() => {
    setCurrentPage(1);
  }, [blogsData])


  const renderBlogs = () => {
    if (currentBlogs && currentBlogs.length > 0) {
      return currentBlogs.map((item, index) => (
        <BlogCard key={item.title + index} date={item.createdAt} title={item.title} desc={item.desc} slug={item.slug} />
      ));
    } else {
      return <div id="loader"></div>;
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = blogsData && Math.ceil(blogsData.length / blogsPerPage);
    const pages = [];
    for (let i = 1; i <= pageNumbers; i++) {
      pages.push(
        <li 
          key={i}
          className={`pagBtn ${i === currentPage ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <> {metaData}
      <Banner title={"Blogs"} prev={"Home"} link={"/"} />
      <ColorfulSection key={`blogs Section`}>
        <div className="shelf space-between blogs_section radius_8">
          <div className={`${(currentBlogs && currentBlogs.length > 0) ? `expand_70` : `expand_100` } bg_l_gray radius_8 `}>
            {renderBlogs()}
          </div>
          {(currentBlogs && currentBlogs.length > 0) ?
          <>
          <div className="expand_30 bg_l_gray recommend_blogs_section radius_8">
            <h4 className="font_20 bold mt_50">Latest Blogs</h4>
          
              {currentBlogs.slice(0,4).map((item, index) => (
                <RecommendBlogs key={item.title + index} date={item.createdAt} title={item.title} href={`blogs/${item.title}`} />
              ))}
              </div>
              </>
              : null }
        </div>
        <div className="pagination">
          <ul className="shelf ">{renderPageNumbers()}</ul>
        </div>
      </ColorfulSection>
    </>
  );
};

export default Blog;




export async function getStaticProps({params}){

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
    const blogs = await data.blogs;
    return {
        props: {
            blogsData: [...blogs],
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