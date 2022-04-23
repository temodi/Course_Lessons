import { useState } from 'react';
import { app } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
 


function UploadImage({}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  }
  const onUploadHandler = (event) => {
    const storage = getStorage(app);
    const fileRef = ref(storage, 'images/'+selectedFile?.name);
    console.log('images/'+selectedFile?.name)

    uploadBytes(fileRef, selectedFile)
    .then((uploadResult) => {
      console.log(uploadResult)
      getDownloadURL(uploadResult?.ref)
      .then(value => console.log(value))
      .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
  
  }
  return (<form>
    <input type="file" name="image" onChange={ onFileChange } />
    <button type="button" name="upload" onClick={ onUploadHandler }>Upload</button>
  </form>)
}

export default UploadImage;