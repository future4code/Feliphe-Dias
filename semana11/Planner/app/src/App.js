import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useForm} from './components/MyHooks'
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Card from './components/Card'
import AddBar from './components/AddBar'

const useStyles = makeStyles({
  
  root : {
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'auto',
  },
  content: {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
  }

})

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-feliphe'



function App(){
  
  const classes = useStyles();
  const {form, onChange} = useForm({text: '', day: '',});
  const [task, setTask] = useState([]);
  const [erro, setErro] = useState(false);
  const [success, setSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [menu, setMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)

  document.addEventListener('contextmenu', event =>{ 
    setMenu( !menu);
    event.preventDefault();
  })

  const getAllTask = () =>{
      axios
      .get(url)
      .then( response => {
          setTask(response.data);
      })
      .catch(err => setErro(true))
  }

  useState( ()=>{
      getAllTask();
  },[])

  const createTask = event =>{
        event.preventDefault();
        const body = {
          'text' : form.text,
          'day' : form.day,
        }
        axios
        .post(url,body)
        .then( response => {
          setSuccess( !success);
          getAllTask();
        })
        .catch( err => setErro(true));
  }

  const editTask = event  => {
      event.preventDefault();
      const {id} = event.target;

      const body = {
        'text' : form.newText,
        'day' : form.newDay,
      }
      axios
      .put(`${url}/${id}`,body)
      .then(response => {
        setEditSuccess( !editSuccess );
        getAllTask();
        setOpenEdit(false);
      })
      .catch( err => setEditSuccess( false ) )
  }

  const deleteTask = id => {
      axios
      .delete(`${url}/${id}`)
      .then(response => {
        deleteSuccess( !editSuccess )
        getAllTask();
      })
      .catch( err => setDeleteSuccess( false ) )
      
}

  return (
    <Paper className={classes.root}>
        <AddBar 
          form={form} 
          onChange={onChange} 
          createTask={createTask} 
          />
        <div className={classes.content} elevation={0}>
          {console.log(task)}
          {!erro  ? <Card 
                      
                      task={task} 
                      deleteTask={deleteTask}  
                      editTask={editTask}
                      openEdit={openEdit}
                      setOpenEdit={setOpenEdit}
                      form={form} 
                      onChange={onChange} 
                      >
                      </Card> : <>error</>}
        </div>
    </Paper>
  );
}

export default App;
