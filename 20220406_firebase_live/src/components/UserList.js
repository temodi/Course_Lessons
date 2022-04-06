
import { useState, useEffect } from 'react';
import { readUser, deleteUser, liveRemoved, liveAdded, liveChanged } from '../services/crud';

function UserList({ setUpdateKey }) {
  const [userList, setUserList] = useState([]);
/*   const [deletedUser, setDeletedUser] = useState(0); */
  const [deleteSuccess, setDeleteSuccess] = useState(false); 

  const loadUserList = () => {
    const responsePromise = readUser();
    responsePromise
    .then((snapshot) => setUserList(Object.entries(snapshot.val())))
    .catch(e => console.log(e));
  }

  useEffect(() => {
    loadUserList()
    // figyeles ha torles van
    const removeLiveRemoved = liveRemoved((snapshot) => {
      console.log('torles tortent', snapshot, snapshot.key)
      loadUserList()
    })

    const removeLiveAdded = liveAdded((snapshot) => {
      console.log('uj user keletkezett', snapshot, snapshot.val())
      loadUserList()
    })

    const removeLiveChanged = liveChanged((snapshot) => {
      console.log('user adat modositva', snapshot, snapshot.val())
      loadUserList()
    })

    // useEffect clean up functionben torolom a realtime database esemenyeket
    return () => {
      removeLiveRemoved()
      removeLiveAdded()
      removeLiveChanged()
    }

  }, [])

  const clickHandlerRead = (key) => (event) => {
    readUser(key)
    .then(snapshot => console.log(snapshot.val()))
    .catch(e => console.log(e))
  }
  
  const clickHandlerDelete = (key) => (event) => {
    deleteUser(key)
   /*  .then(val => setDeletedUser(p => (p + 1))) */
    .then(val => setDeleteSuccess(true))
    .catch(e => console.log(e))
  }

  const clickHandlerUpdate = (key) => (event) => setUpdateKey(key)

  console.log('userList', userList)
  return (
    <div className="user-list">
     {/*  Deleted user: { deletedUser } */}
      { deleteSuccess && 'Sikeres torles!' }
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          { userList && userList.map(user => {
              const key = user[0];
              const userData = user[1];
              return (<tr key={ `user_${key}` }>
                <td><small>{ key }</small></td>
                <td>{ userData['username'] }</td>
                <td>{ userData['name'] }</td>
                <td>{ userData['email'] }</td>
                <td>{ userData['gender'] }</td>
                <td><button type="button" onClick={ clickHandlerDelete(key) }>Törlés</button></td>
                <td><button type="button" onClick={ clickHandlerUpdate(key) }>Módosítás</button></td>
                <td><button type="button" onClick={ clickHandlerRead(key) }>Megtekintés</button></td>
              </tr>)
            }) 
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default UserList;