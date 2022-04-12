import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { database } from "../config/firebase";
import { ref, get } from "firebase/database";


const endpoint = 'mxn/knowledge';

const ProficiencyScreen = () => {
    const [proficiency, setProficiency] = useState([]);

    useEffect(() => {
        
        const refKnowledge = ref(database, endpoint);
        get(refKnowledge)
        .then((snapshot) => { 
            const allData = Object.entries(snapshot.val());
            setProficiency(allData);
         })
        .catch(e => console.log(e))

    },[])

    return (
        <>
        <div>
            {proficiency && proficiency.map((prof ) => { 
                const [key, data] = [...prof]; // prof => ['afwaefzd3131', { type:'', desc: ''}]
                return (<div key={ `prof_${key}` } className="stackbox"><NavLink to={ `/proficiency/${key}` }>{ data?.type } </NavLink></div>) 
               /*  return (<div key={ `prof_${prof[0]}` } className="stackbox"><NavLink to={ `/proficiency/${prof[1]?.type}` }>{ prof[1]?.type } </NavLink></div>) */
            })}
        </div>
        </>
    )
};

export default ProficiencyScreen;