import { useState, useEffect } from 'react';

function RandAnimal() {
  const [name, setname] = useState('');
  const [imageLink, setImageLink] = useState(null);  
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    console.log('useEffect refresh:',refresh )
    if (refresh !== 0) {
      fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then(response => response.json())
      .then(json => {
        setname(json.name)
        setImageLink(json.image_link)
      })
    }
  }, [refresh])

  const clickHandler = (event) => {
    setRefresh(refresh => refresh + 1);
  }

  return (
    <div>
      <h2>{ name }</h2>
      {imageLink && <img src={ imageLink } />}
      <button type="button" onClick={ clickHandler }>Rand</button>
    </div>
  );
}

export default RandAnimal;