import React from 'react';
import {AddBar, AddButton, CardAddTask} from './style';





export default props =>{
    const {form, onChange, createTask} = props;

    return <CardAddTask>
        <form onSubmit={createTask}>
            <AddBar 
                value={form.text} 
                name={'text'}
                placeholder ={ 'Nome da tarefa'}
                onChange={onChange}
                required={true}
                type={'text'}
                min={4}          
                />
            <select data-testid='daySelect' onChange={onChange} name={'day'}  required={true} >
                <option value=''></option>
                <option data-testid='segunda' value='segunda'>Segunda</option>
                <option value='terca'>Terça</option>
                <option value='quarta'>Quarta</option>
                <option value='quinta'>Quinta</option>
                <option value='sexta'>Sexta</option>
                <option value='sabado'>Sábado</option>
                <option value='domingo'>Domingo</option>
            </select>
            <AddButton>NOVA TAREFA</AddButton>
        </form>
    </CardAddTask>
}