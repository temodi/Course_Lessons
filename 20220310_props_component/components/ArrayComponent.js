import MenuItem from "./MenuItem";

function ArrayComponent(props) {


  const menu = [
    <MenuItem key="menu1" menu="Menu 1" />,
    <MenuItem key="menu2" menu="Menu 2" />,
    <MenuItem key="menu3" menu="Menu 3" />, 
  ] 

  return (
    <div>
      { menu }
    </div>
  ) 
}

export default ArrayComponent;