import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";


function UserManagementScreen() {
  const [updateKey, setUpdateKey] = useState(null);
 
  return <>
      <UserForm updateKey={ updateKey } setUpdateKey={ setUpdateKey } />
      <UserList setUpdateKey={ setUpdateKey } />
    </>
}

export default UserManagementScreen;