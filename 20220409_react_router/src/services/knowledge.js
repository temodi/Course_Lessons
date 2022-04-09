import { database } from '../config/firebase';
import { ref, get } from 'firebase/database';


const endpoint = 'mxn/knowledge';

export function listData() {
  const refData = ref(database, endpoint);
  return get(refData);
}