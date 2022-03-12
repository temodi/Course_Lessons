import { useState } from "react";


function FormMoreInputs() {
  const [data, setData] = useState({
    email: '',
    country: '',
    description: '',
  })

  const submitHandler = (event) => {
    event.preventDefault();

    console.log('az elkuldendo adatok', data, JSON.stringify(data));
  }

  const changeHandler = (event) => {
      /* console.log('melyik input:', event.target.name, event.target.value) */
      setData(prev => {
        //  return {...prev, [event.target.name] : event.target.value};
        const newData = {...prev}; // spread uj obj jon letre
        newData[event.target.name] = event.target.value;
        return newData;

 /*        switch (event.target.name) {
          case 'email':
            newData.email = event.target.value;
            // newData['email'] = event.target.value;
            break;
          case 'country':
            newData.country = event.target.value;
            break;
          case 'description':
            newData.description = event.target.value;
            break;
          default:
            break;
        } */
        
      })
  }

  const resetHandler = (event) => {
    console.log('reset lefutott')
    setData({
      email: '',
      country: '',
      description: '',
    })
  }

   console.log("input adatok", data);
 
  return (
  <form onSubmit={ submitHandler }>
    E-mail: <input type="text" name="email" onChange={ changeHandler } value={ data.email } /><br />
    Ország: <select name="country" onChange={ changeHandler } value={ data.country } defaultValue="">
        <option value="">Kérlek válassz!</option>
        <option value="Hungary">Hungary</option>
        <option value="Albánia">Albánia</option>
        <option value="USA">USA</option>
      </select><br />
    Leírás: <textarea name="description" onChange={ changeHandler } value={ data.description } ></textarea><br />
    <button type="submit" name="save">Mentés</button>
    <button type="button" name="reset" onClick={ resetHandler }>Üresre</button>
  </form>
  );
}


export default FormMoreInputs;
