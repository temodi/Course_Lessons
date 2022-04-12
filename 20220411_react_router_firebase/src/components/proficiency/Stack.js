import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../config/firebase";
import { ref, get } from 'firebase/database';

const Stack = () => {
    const { stack_id } = useParams();
    const [target, setTarget] = useState(null);

    useEffect(() => {
        
        const refKnowledge = ref(database, `mxn/knowledge/${stack_id}`);
        get(refKnowledge)
        .then((snapshot) => { 
            setTarget(snapshot.val());
         })
        .catch(e => console.log(e))

    },[stack_id])
   
    // type & description lesz
    return (
        <div>
        {target && (<>
            <h2>{target?.type}</h2>
            <p>{target?.description}</p>
        </>)}
        </div>
    )
};

export default Stack;