import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const [data, setData] = useState('');

  console.log('Parent render data:', data);
  return (
    <div>
      <Child1 changeData={ setData } />
      <Child2 data={ data } />
    </div>
  )
}

export default Parent;

 