import { useState, useEffect } from 'react';

function RandAnimals() {
  const [animalNumber, setAnimalNumber] = useState(0)
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    
    if (animalNumber > 0) {
      fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${animalNumber}`)
      .then(respone => respone.json())
      .then(json => setAnimals(json))
    }

  }, [animalNumber])

  const changeHandler = (event) => {
    const value = event.target.value;

    if ( value > 0 && value <= 10) {
      setAnimalNumber(value);
    }

  }

  console.log('animalNumber', animalNumber)
  console.log('animals', animals)
  
  /*
       

  */
  
  console.log(animals.map(animal => {
    return (
      <>
        <h2>{ animal.name }</h2>
        {animal.image_link && <img src={ animal.image_link } />}
      </>
    )
  }))
    
  return (
    <div>
      <form>
        <input type="number" onChange={ changeHandler } />
        { animals.map(animal => {
          
          return (
            <>
              <h2>{ animal.name }</h2>
              {animal.image_link && <img src={ animal.image_link } />}
            </>
          )

        })}
      </form>
    </div>
  );
}

export default RandAnimals;