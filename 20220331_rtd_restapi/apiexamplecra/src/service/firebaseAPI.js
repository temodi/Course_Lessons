
function putAPI(databaseUrl, endpoint, data, cb) {
  fetch(`${databaseUrl}/${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
  .then(value => value.json()) 
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

export {
  getAPI,
  putAPI,
  patchAPI,
  deleteAPI
}