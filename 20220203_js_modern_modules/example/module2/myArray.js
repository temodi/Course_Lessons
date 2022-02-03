
function findInArray(arr, x) {
  return arr.find(e => e === x);
}

function listArray(arr) {
  console.log(arr);
}

// export atnevezes
export {
  findInArray as find,
  listArray as list,
}