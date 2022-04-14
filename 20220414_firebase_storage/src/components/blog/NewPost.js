import { useState } from "react"
import { database, auth, storage } from "../../config/firebase";
import { ref, set, push } from 'firebase/database';
import { ref as refStorage, uploadBytes, getDownloadURL } from 'firebase/storage'

const DEFAULT_POST = {
  title: '',
  lead: '',
  description: '',
  img: '',
  uid: '',
  email: '',
}

function NewPost() {
  const [blogPost, setBlogPost] = useState(DEFAULT_POST);
  const [selectedFile, setSelectedFile] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const submitHandler = (event) => {
    event.preventDefault();

    const postRef = ref(database, 'mxn/blog/posts');
    const newPostRef = push(postRef);
    setSuccess(false);

    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileRef = refStorage(storage, 'blog/'+fileName);
/* 
      uploadBytes(fileRef, selectedFile)
      .then((uploadResult) => {
        console.log('uploadResult', uploadResult)
  
        getDownloadURL(uploadResult.ref)
        .then(value => {

            set(newPostRef, {...blogPost, uid: auth.currentUser.uid, email: auth.currentUser.email, img: value })
            .then(() => {
              setSuccess(true);
              setBlogPost(DEFAULT_POST);
              event.target.reset();
            })
            .catch(e => console.log(e))
        })
         
      })
      .catch(e => console.log('hiba', e)); */

      //
      uploadBytes(fileRef, selectedFile)
      .then(uploadResult => getDownloadURL(uploadResult.ref))
      .then(img => set(newPostRef, {...blogPost, uid: auth.currentUser.uid, email: auth.currentUser.email, img }))
      .then(() => {
        setSuccess(true);
        setBlogPost(DEFAULT_POST);
        event.target.reset();
      })
      .catch(e => console.log(e))

    } else {
      
      set(newPostRef, {...blogPost, uid: auth.currentUser.uid, email: auth.currentUser.email })
      .then(() => {
        setSuccess(true);
        setBlogPost(DEFAULT_POST);
      })
      .catch(e => console.log(e))

    }
 
 
 
  }

  const changeHandler = (event) => setBlogPost(prev => ({...prev, [event.target.name]:event.target.value}));

  const fileSelectHandler = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]); // az elso file
  }

/*   console.log('blogPost', blogPost);
  console.log('auth', auth.currentUser.email, auth.currentUser.uid) */
  console.log('auth.currentUser', auth.currentUser)
  return (<form onSubmit={ submitHandler } className="d-flex flex-column">
    {success && <span>Sikeres mentes!</span>}
    <label htmlFor="title">
      Title:
      <input type="text" id="title" name="title" onChange={changeHandler} />
    </label>
    <label htmlFor="lead">
      Lead:
      <textarea id="lead" name="lead" onChange={changeHandler} />
    </label>
    <label htmlFor="img">
      Image URL:
      <input type="file" id="img" name="img" onChange={ fileSelectHandler } />
    </label>
    <label htmlFor="description">
      Text: <textarea id="description" name="description" onChange={changeHandler} />
    </label>
    <button type="submit">Send post</button>
  </form>)
}

export default NewPost