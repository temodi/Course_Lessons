import { posts } from '../services/blogPost';
import { Link } from 'react-router-dom';

function Blog() {
  return (<div>
    
    {posts.map(post => {
      return <article>
              <h2>{ post.title }</h2>
              <p>{ post.lead }</p>
              <Link to={ `/blog/${post.id}` } >Teljes blog postra</Link>
            </article>
    })}

  </div>)
}

export default Blog;