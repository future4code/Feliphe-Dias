import React, {useState} from 'react';
import Axios from 'axios';




export const useForm =  initialValue =>{
    const [form, setForm] = useState(initialValue);
    
    const clearInputs = () =>{
        setForm(initialValue)
    }

    const onChange = (event) =>{
        const {name, value} = event.target;
        const newForm = {...form, [name]: value };
        setForm(newForm);
    }
    return {form, onChange, clearInputs};
}
