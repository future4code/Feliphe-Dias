import React, { useState } from 'react';

import {Card, CellHeader, DayColumn, Cell, CardContent} from './style' 

import { Collapse, IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from './Dialog'


const useStyles = makeStyles({
  
    menu : {
        display: 'flex',
        height: '15vh',
        width: '100%',

    },

    iconButton: {
      height: '80%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: "center",
    }
  
  })

  

export default props =>{
    const {task, deleteTask, editTask, form, onChange, openEdit, setOpenEdit} = props;
    const [showMenu, setShowMenu] = useState();
    const classes = useStyles();
    const segunda = task.filter( e => e.day === "segunda") || [];
    const terca = task.filter( e => e.day === "terca") || [];
    const quarta = task.filter( e => e.day === "quarta") || [];
    const quinta = task.filter( e => e.day === "quinta") || [];
    const sexta = task.filter( e => e.day === "sexta") || [];
    const sabado = task.filter( e => e.day === "sábado") || [];
    const domingo = task.filter( e => e.day === "domingo") || [];
  


    return <Card>
        <CardContent>
            <DayColumn>
                <CellHeader>Segunda</CellHeader>
                {segunda.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Terça</CellHeader>
                {terca.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={ () => deleteTask(e.id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Quarta</CellHeader>
                {quarta.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                 {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Quinta</CellHeader>
                {quinta.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}                 
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Sexta</CellHeader>
                {sexta.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Sábado</CellHeader>
                {sabado.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
            <DayColumn>
                <CellHeader>Domingo</CellHeader>
                {domingo.map( e=> <>
                <Cell onClick={() => setShowMenu(!showMenu)}>{e.text}
                    <Collapse in={showMenu} className={classes.menu}>
                        <IconButton onClick={() =>deleteTask(e.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                        <IconButton onClick={ () => setOpenEdit(true)}>
                            <EditIcon/>
                        </IconButton>
                    </Collapse>
                </Cell>
                {openEdit && <Dialog id={e.id} setOpenEdit={setOpenEdit} editTask={editTask} form={form} onChange={onChange}/>}  
                </>
                )}
            </DayColumn>
        </CardContent>
    </Card>
}