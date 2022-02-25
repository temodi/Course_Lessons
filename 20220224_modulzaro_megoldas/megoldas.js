
// 1.
// Pont: 1 pont
{
  const kategoria = 'Fajáték';
  const termek = 'Jenga Classic';

  console.log(`A ${kategoria} kategóriában a ${termek} játék megtalálható`);
}

// 2. 
// Pont: 2 pont
{
  const log  = str => console.log(str);
  const log2 = (str) => console.log(str);
  const log3 = (str) => { console.log(str); }
  const logNemjo = function logX(str) { console.log(str); } // 0.5 pont

  log("Valamit"); // 1 pont
}

// 3.
// Pont: 3 pont
{
  const kiir = (kategoria, termek) => `A ${kategoria} kategóriában a ${termek} játék megtalálható`;
  const kiir2 = (kategoria, termek) => {
    return `A ${kategoria} kategóriában a ${termek} játék megtalálható`;
  }
   // 0.5 pont ha nem arrow, vagy nem ter vissza hanem kiir egybol a console-ra

  console.log(kiir('Kategoria', 'Termek'));
  console.log(kiir('Kategoria 1', 'Termek 2'));

}
 
// 4.
// Pont: 2 pont
// rest, arguments - 1 pont
// kiiratas soronkent - 1 pont
// alternativa
// ha tombot hasznalt: 0.5
// ha console.log(tomb): 0.5
{

  const dokkolas = (...rest) => {
    // console.log(rest); // 0.5 pont
    rest.forEach((urhajo) => console.log(urhajo));
  }

  dokkolas("Tie fighter 1", "Tie fighter 2", "X-Wing 1")  
 /* Konzol log eredmény:
    Tie fighter 1 dokkolt
    Tie fighter 2 dokkolt
    X-Wing 1 dokkolt.
 */
  dokkolas("Millennium Falcon")  
  /* Konzol log eredmény:
      Millennium Falcon dokkolt
  */
}

// 5.
// Pont: 2 pont
{

  const planets = ["Mars", "Vénusz"];
  const planetsWithEarth = ["Föld", ...planets]; // 1 pont

  console.log('Spread: ', ...planetsWithEarth); // 1 pont
  console.log('Kov. hivas:', planetsWithEarth); // vagy 0.5 pont
  console.log('Temp.literal:', `${planetsWithEarth} ...`); // vagy 0.5 pont (ill a template literal is) ill tomb vagy tomb index
 
// eredmény a konzolon:
// Föld Mars Vénusz
}

// 6.
// Pont: 2 pont
{
  const ships = ["Millenium Falcon",  "J-Type Star", "Jedi Starfighters", "A-Wing"]
  // let topSpeed1 = ships[0], topSpeed2 = ships[1], topSpeed3 = ships[2];  // 0.5
  const [topSpeed1, topSpeed2, topSpeed3] = ships;  // array destructuring

  console.log(topSpeed1, topSpeed2, topSpeed3);
  
}

// 7.
// Pont: 2 pont
{

  const deathStarMainFrameConfigarationSystemConfig = {
    position: { x: 123.53, y: 324.2, z: 591.1 },
    initialSpeed: 10000,
    robotPilot: true,
    capacity: 5000,
  }
  
  const { initialSpeed,  position } = deathStarMainFrameConfigarationSystemConfig; // obj. destructuring 
  /*
     const initialSpeed = deathStarMainFrameConfigarationSystemConfig.initialSpeed; 
     const position = deathStarMainFrameConfigarationSystemConfig.position;
     0.5 pont
   */

  // eredmeny
  console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)    // Sebesség: 10000 x,y coordinák: 123.53,324.2 

}

// 8.
// Pont: 2 pont (1 pont nem irtal at mast, 1 pont a parameter obj. desctructuring)
//       +1 pont arrow function
{
  const deathStarMainFrameConfigarationSystemConfig = {
    position: { x: 123.53, y: 324.2, z: 591.1 },
    initialSpeed: 10000,
    robotPilot: true,
    capacity: 5000,
  }
  
  function initialConfig({ initialSpeed,  position }) {  // <== Ezt az egy sort kell javítani!!!
    console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)  
  }

 /*  (obj) => {
    let {
        position,
        initialSpeed
    } = obj;
    1.5pont ?
 */

  // const initialConfig = ({ initialSpeed,  position }) => console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)  
  
  initialConfig(deathStarMainFrameConfigarationSystemConfig)
  
}

// 9.
// Pont: 1pont (throw/new Error) , 1 pont (try/catch)
{
    // lehetsges hibas konfiguraciós objektum
    const deathStarMainFrameConfigarationSystemConfig = {
      position: null,
      initialSpeed: null,
      robotPilot: true,
      capacity: 5000,
    }

    function initialConfig({ initialSpeed,  position }) {  
      if ( initialSpeed == null) {
        throw new Error('initialSpeed valtozo null!')
      }
      if ( position == null) {
        throw new Error('position valtozo null!')
      }
      
      console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)  
    }

    try {
      initialConfig(deathStarMainFrameConfigarationSystemConfig);
    } catch (e) {
      console.log(e);
    }
}

// 10. 
// Pont: 3 pont

// 11.
// Pont: 1 pont  (0.5pont ha csak atnevezes volt )

// 12. 
// Pont: 2 pont
{

  const promise = new Promise((resolve, reject) => resolve(88));

  promise.then((value) => console.log('Promise value:', value));

  // new Promise((resolve) => { resolve(99) }).then((value) => console.log('Promise value:', value));

}

// 13. feladat
// Pont: 1 pont a  peldanyositas + callback meghivas, atadas
//       1 pont a then
//    +1 pont a catch ?? 
 {

  function cargoShipArrive(resolve, reject) {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) == 1) {
        reject("Nincs rakomány"); // nincs rakomány 
      } 
      resolve(1); // 1 kg szemett beerkezett
    }, 500)
  }

  let promiseS = new Promise(cargoShipArrive);

  let promisex = new Promise((resolve, reject) => cargoShipArrive(resolve, reject));

  let promise = new Promise(function (resolve, reject) {
    // resolve - 1 db fv  -> ha ezt hivom, teljesiti a Promise-t
    // reject - 1 db fv -> ha meg ezt hivom, akkor reject, elutasitja a Promise-t sikertelen lesz
    // hivatok szinkron hivast v. fv
    // hivatok aszinkront is.
    cargoShipArrive(resolve, reject)
  });

  promise
  .then(value => console.log("Credit: ", value * 300))  // then -> resolve() hivas soran megadott eredmenyt kapom
  .catch(reason => console.log(reason));  // catch -> reject() hivas soran magadott ertek

// 14.
// Pont: 1 pont, 1 pont json, 1 pont kiiratas
  const zoo = fetch("https://zoo-animal-api.herokuapp.com/animals/rand")  // zoo = Promise , ha sikeres volt resolve(new Response())
  
/*   zoo
  .then((response) => response.json())      // -> return new Promise() a response.json() => jsonObj -> resolve(jsonObj) 
  .then(jsonObj => console.log(jsonObj.name, jsonObj.latin_name)) */

 /*  zoo
  .then((response) => console.log(response.json()))     
 */

  // A 
  zoo
  .then((response) => {
     let jsonPromise = response.json()
     return jsonPromise
  })
  .then((jsonObj) => console.log(jsonObj))

  // B
  zoo
  .then((response) => {
     let jsonPromise = response.json()
    jsonPromise.then((jsonObj) => console.log(jsonObj))
  })
 
} 
