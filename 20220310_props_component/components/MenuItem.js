import { useState } from "react";

function MenuItem(props) {
  const [clicked, setClicked] = useState(false);

  console.log('clicked', clicked);
  console.log('setClicked', setClicked);
  

  return (<div>
    <a href="/">{ props.menu }</a>
  </div>)
}

export default MenuItem;