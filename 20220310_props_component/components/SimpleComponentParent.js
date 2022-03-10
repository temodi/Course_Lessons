
import SimpleComponent from './SimpleComponent';
import SimpleComponent2 from './SimpleComponent2';


function SimpleComponentParent() {

  const componentVar  = (
    <div>
      <h2>
        <SimpleComponent />
      </h2>
    </div>
  );
  
  const componentVar2 = <SimpleComponent2 />
  const switchEnabled = true;

  ///
  const enabledComponentNumber = 0;
  let enabledComponent = null;

  switch (enabledComponentNumber) {
    case 0:
        enabledComponent = <SimpleComponent />
     break;
    case 1:
        enabledComponent = <SimpleComponent2 />
     break;
    default:
      break;
  }

  return (
    <div>
      <SimpleComponent />

      { switchEnabled ? componentVar : componentVar2 }
      { switchEnabled ? <SimpleComponent /> : <SimpleComponent2 /> }
      
      { enabledComponent }
    </div>
  );
}

export default SimpleComponentParent;