import { Link, useSearchParams } from "react-router-dom";
import { database } from "../config/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";


const BlogScreen = () => {
    const [blog, setBlog] = useState([]);
    const [searchParams] = useSearchParams()

    /* console.log('searchParams title:', searchParams.get('title'))
    console.log('searchParams max:', searchParams.get('max')) */
 
    useEffect(() =>{
        const refBlog =ref(database, 'mxn/blog/posts')
        const removeOnValue = onValue(refBlog, (snapshot) =>{
            const blogPosts = Object.entries(snapshot.val()) || []

            const max = searchParams.get('max') || blogPosts.length 
            const searchTitle = searchParams.get('title') || false
            if (searchTitle) {
                setBlog(blogPosts.filter(data => data[1].title.startsWith(searchTitle)).slice(0, max))
            } else {
                setBlog(blogPosts.slice(0, max));
            }
     
        })
        return () => removeOnValue()
    }, [])


    return (
        <div className="blog">
            <div>
            {blog && blog.map((item, index) => {
                const [key, data] = [...item];
                return (
                    <article key={`blog_${key}`}>
                        <h2>{data.title}</h2>
                        { data?.img && data.img !== '' && <img src={ data.img } />}
                        <Link to={`/blogposts/${key}`}>{data.lead}</Link>
                        <hr />
                    </article>
                );
            })}
            </div>
            <div className="latest">
                <h3>Latest Posts</h3>
                {blog && blog.map((item, index) => {
                    const [key, data] = [...item];
                    if(index === blog.length-1){
                        return (
                            <Link to={`/blogposts/${key}`} key={`newblog_${key}`} >{data.title}</Link>
                        );
                    }
                    if(index === blog.length-2){
                        return (
                            <Link to={`/blogposts/${key}`} key={`newblog_${key}`} >{data.title}</Link>
                        );
                    }
                    return null
                })}
            </div>
        </div>
    );
};
export default BlogScreen;