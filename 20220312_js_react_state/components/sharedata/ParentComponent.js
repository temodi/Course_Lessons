import { useState } from "react";
import Child1Component from "./Child1Component";
import Child2Component from "./Child2Component";

function ParentComponent() {
  const [parentComponentData, setParentComponentData] = useState('');

  console.log('Parent render data:', data);
  return (
    <div>
      <Child1Component setParentComponentData={ setParentComponentData } />
      <Child2Component data={ parentComponentData } />
    </div>
  )
}

export default ParentComponent;

 