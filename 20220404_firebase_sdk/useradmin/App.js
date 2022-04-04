import './App.css';
import { useEffect } from 'react';
/* import { createUser, deleteUser, readUser, updateUser } from './services/crud';
 */
import UserForm from './components/UserForm';

function App() {

  // torles
/*   useEffect(() => {
    deleteUser('-MzpS80DW3ZJdzAs_Iwg')
    .then(() => console.log('Sikerult a torles'))
    .catch(e => console.log(e))
  }, [])  */

  // update 
  // 1 adott user update, 1 vagy proprety is lehet
  // ha torolni kell egy property-t, akkor null-al kell megadni
  /*  useEffect(() => {
    updateUser('-MzpS80DW3ZJdzAs_Iwg', {
      username: 'csoki'
    })
    .then(response => console.log('Sikerult'))
    .catch(e => console.log(e))
  }, [])  */

  // osszes user
  /* useEffect(() => {
    readUser()
    .then(snapshot => console.log(snapshot.val()))
    .catch(e => console.log(e))
  }, [])
   */

  // kulcs szerint egy user
/*   useEffect(() => {
    readUser('-MzpS80DW3ZJdzAs_Iwg')
    .then(snapshot => console.log(snapshot.val()))
    .catch(e => console.log(e))
  }, [])
 */
/*   useEffect(() => {
    createUser({
      email: 'valami@gmail.com',
      username: 'hellobello',
      name: 'Kiss Jolan',
      gender: 'male',
      other: 'Lorem ipsum'
    })
    .then(response => console.log(response))
    .catch(e => console.log(e))
  }, []) */

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
