import React, { useEffect, useState } from 'react';
import Axios from 'axios';



const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/'



export default props =>{
    const {onChange,  form} = props;
    const [trips, setTrips] = useState([]);
    
    const getTrips = () =>{
        Axios
        .get(`${url}trips`)
        .then( response => {
            setTrips(response.data.trips)
        })
        .catch(err => console.log(err.menssage))
    }
    
    useEffect( ()=>{
        getTrips();
    },[])

    return <select name={'id'} onChange={onChange}>
        <option></option>
        {
        trips && trips.map( e =>{
            return <option value={e.id}>{e.name}</option>
        })
        }
    </select>
}