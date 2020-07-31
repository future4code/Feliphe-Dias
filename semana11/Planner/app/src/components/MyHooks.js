import React, {useState} from 'react';




export const useForm = initialValues =>{
    const [form, setForm] = useState(initialValues);

    const onChange = event =>{
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    return {form, onChange};

}