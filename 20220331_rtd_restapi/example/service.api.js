
// Usage:
// putAPI(
//  'https://apiexample-6ac74-default-rtdb.europe-west1.firebasedatabase.app/user.json,
//  'user.json'
// {
//   username: 'kiscica',
//   name: 'Nagy Beata'
// },
//  console.log
//  )

function putAPI(databaseUrl, endpoint, data, cb) {
  fetch(`${databaseUrl}/${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
  .then(value => value.json())   // endpoint visszakapot adatot JSON.parsol-ja => obj
  .then(json => cb(json))
}

function getAPI(databaseUrl, endpoint, cb) {
  fetch(`${databaseUrl}/${endpoint}`)
  .then(value => value.json())
  .then(json => cb(json))
}

function patchAPI(databaseUrl, endpoint, data, cb) {
  fetch(`${databaseUrl}/${endpoint}`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  })
  .then(value => value.json())    
  .then(json => cb(json))
}

function deleteAPI(databaseUrl, endpoint, cb) {
  fetch(`${databaseUrl}/${endpoint}`, {
    method: 'DELETE',
  })
  .then(value => value.json())    
  .then(json => cb(json))
}