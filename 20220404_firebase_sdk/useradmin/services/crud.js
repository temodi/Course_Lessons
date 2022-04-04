import { database } from '../config/firebase';
import { ref, set, push, get, update, remove } from 'firebase/database'

/*
 CRUD (endpointok pl RestAPI)

 C(reate) -> users
 R(ead)   -> users (összes user)
 R(ead)   -> users/{id}   adott ID-hez tartozo user
 U(pdate) -> users/{id}   addot ID-hoz tartozo user adatainak modositasa
 D(elete) -> users/{id}   adott ID-u user torlese

*/

const endpoint = 'users'; // "tabla" v. "doku nev" v "endpoint"

export function createUser(userData) {
  const refUser = ref(database, endpoint);
  const newRefUser = push(refUser); // leker egy uj key-t */
  return set(newRefUser, userData)
}

export function readUser(key) {
  // konkret user-t adja vissza
  if (key) {
    // endpoint: users/-MzpS80DW3ZJdzAs_Iwg
    const refUser = ref(database, `${endpoint}/${key}`);
    return get(refUser);
  }
  // ha nincs kulcs, akkor az osszes usert
  // endpoint: users
  const refUser = ref(database, endpoint);
  return get(refUser)
}

export function updateUser(key, userData) {
  // endpoint: users/-MzpS80DW3ZJdzAs_Iwg
  const refUser = ref(database, `${endpoint}/${key}`)
  return update(refUser, userData)
}

export function deleteUser(key) {
  const refUser = ref(database, `${endpoint}/${key}`)
  return remove(refUser);
}

