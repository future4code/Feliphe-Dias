import React from 'react';

import {Dialog, DialogTitle, ActionArea, NullDiv } from './style'

import { IconButton } from '@material-ui/core';
import Close from '@material-ui/icons/HighlightOff';



export default props =>{
    const {form, onChange, editTask, setOpenEdit, id} = props;

    return<> 
        <NullDiv></NullDiv>
        <Dialog>
            <ActionArea onClick={ () => setOpenEdit(false)}>
                <IconButton>
                    <Close />
                </IconButton>
            </ActionArea>
            <DialogTitle>Editar tarefa:</DialogTitle>
            <form id={id} onSubmit={editTask}>
                <input 
                        value={form.newText} 
                        name={'newText'}
                        placeholder ={ 'Nome da tarefa'}
                        onChange={onChange}
                        required={true}
                        type={'text'}
                        min={4}  
                    />
                <select onChange={onChange} name={'newDay'}  required={true} >
                    <option value=''></option>
                    <option value='segunda'>Segunda</option>
                    <option value='terca'>Terça</option>
                    <option value='quarta'>Quarta</option>
                    <option value='quinta'>Quinta</option>
                    <option value='sexta'>Sexta</option>
                    <option value='sabado'>Sábado</option>
                    <option value='domingo'>Domingo</option>
                </select>
                <button>Confimar</button>
            </form>
    </Dialog>
    </> 
}