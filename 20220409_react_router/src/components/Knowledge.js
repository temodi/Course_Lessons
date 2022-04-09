import { useState, useEffect } from 'react';
import { listData } from '../services/knowledge';
import { Link } from 'react-router-dom';

function Knowledge() {
  const [list, setList] = useState([])

   useEffect(() => {
      listData()
      .then((snapshot) => setList(Object.entries(snapshot.val())))
      .catch(e => console.log(e))
   }, [])


   console.log('list', list)
  return (<div>
    Knowledge<br/>
    {list && list.map(item => {
      const key = item[0];
      const data = item[1];

      return (<div><Link to={ `/knowledge/${key}` }>{ data.type }</Link> </div>) 
    })}
  </div>)
}

export default Knowledge;