import { database } from '../config/firebase';
import { ref, push, set, get } from 'firebase/database';
import { onChildAdded, onValue } from 'firebase/database';

// data : { username: 'valaki', message: 'valami' }
export function sendMessage(data) {
  const refChat = ref(database, 'chat');
  const newRefChat = push(refChat); // leker egy uj key-t, hogy lista legyen adatbazisban */
  const responsePromise = set(newRefChat, data);
  return responsePromise;
}

export function loadMessages() {
  const refChat = ref(database, 'chat');
  return get(refChat);
}

export function watchMessage(callback) {
  const refChat = ref(database, 'chat');
  return onChildAdded(refChat, callback);
}

export function whatchAllMessage(callback) {
  const refChat = ref(database, 'chat')
  return onValue(refChat, callback);
}