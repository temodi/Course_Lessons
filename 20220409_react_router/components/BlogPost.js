import { useParams } from 'react-router-dom';
import { posts } from '../services/blogPost';

function BlogPost() {
  /* Dinamikus routenal megadott azonositba beteszi a valtozo adatot az url (path) -bol */
  const { blog_id } = useParams();
  /* const params = useParams() */

  const post = posts.filter(post => post.id === Number(blog_id))
  
  console.log('blog_id', blog_id)
  console.log('post', post)
  
  return (<div>
    {post[0] && <>
    <h2>{ post[0].title }</h2>
    <p>{ post[0].lead }</p>
    <p>{ post[0].post }</p>
    </>}
  </div>)
}

export default BlogPost;