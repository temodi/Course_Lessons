import { useState } from 'react';


function Form() {
  const [showFormData, setShowFromData] = useState(false)
  const [username, setUsername] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    setShowFromData(true);
  }

  const nameChangeHandler = (event) => {
/*     console.log('event value:', event.target.value)
    console.log('event name:', event.target.name) */
    setUsername(event.target.value);
    setShowFromData(false);
  }


  return (
    <form onSubmit={ submitHandler }> 
      <input type="text" name="username" onChange={ nameChangeHandler }  />
      <button type="submit" disabled={ false }>Save</button><br />
     
      {showFormData && <>
        Megadatt username: { username }<br />
      </>}

    </form>
  ) 
}


export default Form;