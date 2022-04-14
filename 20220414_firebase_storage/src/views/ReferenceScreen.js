import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { database } from '../config/firebase';
import { ref, onValue } from 'firebase/database';

const ReferenceScreen = () => {
    const [reference, setRefence] = useState([])

    useEffect(() => {

       const refReference = ref(database, 'mxn/references');
       const removeValueEvent = onValue(refReference, (snapshot) => {
            setRefence(Object.entries(snapshot.val()) || []) 
       })

       return () => {
        removeValueEvent()
       }
    }, [])

    return (
        <>
        <div>
            {reference && reference.map((item) => {
                
                return (<div className="stackbox"><NavLink to={ `/reference/${item[0]}`}>{ item[1]?.name }</NavLink></div>)
            })}
        </div>
        </>
    )
};

export default ReferenceScreen;