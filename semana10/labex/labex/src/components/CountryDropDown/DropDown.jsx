import React from 'react';

import {countries} from './CountryList';



export default props =>{
    const {onChange, form} = props;

    return <select name={'country'} onChange={onChange}>
        <option></option>
        {
        countries.map( e =>{
            return <option value={e.label}>{e.label}</option>
        })
        }
    </select>
}