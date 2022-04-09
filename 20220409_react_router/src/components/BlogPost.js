import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../services/blogPost';

function BlogPost() {
  /* Dinamikus routenal megadott azonositba beteszi a valtozo adatot az url (path) -bol */
  const navigateTo = useNavigate();
  const { blog_id } = useParams();
  /* const params = useParams() */

 /*  const post = posts.filter(post => post.id === Number(blog_id)) */
  const [post] = [...posts.filter(post => post.id === Number(blog_id))]

  console.log('blog_id', blog_id)
  console.log('post', post)
  
  return (<div>
    {post && <>
    <h2>{ post.title }</h2>
    <p>{ post.lead }</p>
    <p>{ post.post }</p>
    <button type="button" onClick={ () => {
        navigateTo('/blog');
    }}>Vissza a blog-ra</button>
    </>}
  </div>)
}

export default BlogPost;