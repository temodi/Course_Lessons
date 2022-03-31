// Realtime Database RestAPI-n keresztul

const databaseUrl = 'https://apiexample-6ac74-default-rtdb.europe-west1.firebasedatabase.app/';

/*
 ResfulApi methods

  GET - az eroforras lekerdezese
  POST - uj eroforras letrehozasa (RTD uj listat hoz letre vagy ha van lista, akkor ahhoz uj elemet)
  PUT  - teljes eroforrás modosítása (vagy ha nincs, akkor létrehozása)
  PATCH - eroforrás egy részének módosítás
  DELETE - eroforras torlese
*/

 // endpoint: https://apiexample-6ac74-default-rtdb.europe-west1.firebasedatabase.app/user.json
  const user = {
    username: 'kiscica007',
    name: 'Nagy Beata'
  }

  // Uj adat hozzaadas es/vagy modositas
/*   fetch(`${databaseUrl}/user.json`, {
    method: 'PUT',
    body: JSON.stringify(user)
  })
  .then(value => value.json())   // endpoint visszakapot adatot JSON.parsol-ja => obj
  .then(json => console.log(json)) */

/*   putAPI(databaseUrl, 'user.json', user, (value) => {
    console.log(value)
  })

  getAPI(databaseUrl, 'user.json', (value) => {
    console.log('getAPI:', value)
  }) */

  const userModified = {
    username: 'kiscica008',
  }

/*   patchAPI(databaseUrl, 'user.json', userModified, (value) => {
    console.log(value)
  }) */

/*   putAPI(databaseUrl, 'user.json', userModified, (value) => {
    console.log(value)
  }) */

  deleteAPI(databaseUrl, 'user.json', (value) => {
    console.log(value)
  })