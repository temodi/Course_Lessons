import { useParams } from "react-router-dom";

export const posts = [
    {
        "id": 1,
        "title": "cim 1",
        "lead": "rovid tartalom",
        "post": "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions."
    },
    {
        "id": 2,
        "title": "cim 2",
        "lead": "rovid tartalom",
        "post": "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions."
    },
    {
        "id": 3,
        "title": "cim 3",
        "lead": "rovid tartalom",
        "post": "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions."
    }
]

const BlogPost = () => {
    const { blog_id } = useParams();

    const post = posts.filter((post) => post.id === Number(blog_id));
    //   console.log('params', blog_id);
    //   console.log('post', post);
    return (
        <div>
            {post[0] && (
                <>
                    <h2>{post[0].title}</h2>
                    <p>{post[0].lead}</p>
                    <p>{post[0].post}</p>
                </>
            )}
        </div>
    );
};

export default BlogPost;
