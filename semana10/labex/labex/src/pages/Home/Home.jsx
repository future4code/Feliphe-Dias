import React, { useEffect, useState } from 'react';
import { useStyles } from '../../components/Tables/Style';
import Axios from 'axios';

import Trips from '../../components/Tables/Trips';
import TripsDetails from '../../components/Tables/TripsDetails';
import CreateTrip from '../../components/Forms/CreateTrip';




const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/'

const trip = [ {
    "id": "0aQ9retlt9zxpeo40G2M",
    "name": "Multi luau em Jupiter",
    "description": "Noite mágica, com vista para as 69 luas de Jupiter",
    "planet": "Jupiter",
    "durationInDays": 540,
    "date": "21/12/20"
  }];

export default props =>{
    const classes = useStyles();
    const [trips, setTrips] = useState([]);
    const [tripsDetais, setTripsDetais] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [page, setPage] = useState(2);
    const [token, setToken] = useState();


    const getTrips = () =>{
        Axios
        .get(`${url}trips`)
        .then( response => {
            setTrips(response.data.trips)
        })
        .catch(err => console.log(err.menssage))
    }


    const getTripsDetails = (id) =>{
        const autho  = {
                headers: {
                    auth: token,
                },
            }
        Axios
        .get(`${url}trip/${id}`,autho)
        .then(response => {
            console.log(response.data)
            setCandidates(response.data.trip.candidates)
            setTripsDetais(response.data.trip)
            setPage(1);
        })
        .catch( erro => console.log(erro.menssage))

    }

    useEffect( ()=>{
        getTrips();
        setToken( localStorage.getItem('token') || '')
    },[]);
    
    let render = <Trips trips={trips} getTripsDetails={getTripsDetails} handlePage={setPage}/>;

    switch(page){
        case 0:
            render = <Trips trips={trips} getTripsDetails={getTripsDetails} handlePage={setPage}/>
            break;
        case 1:
            render = <TripsDetails trip={tripsDetais} handlePage={setPage} candidates={candidates}/>
            break;
        case 2:
            render = <CreateTrip handlePage={setPage} token={token} />
            break;
        case 3:
            render = <div>Criado com sucesso</div>
            break;
    }

    return ( 
        <>{token && render}</>
    );
}