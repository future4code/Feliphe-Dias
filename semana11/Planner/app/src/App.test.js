import React from 'react';
import axios from 'axios';
import { render, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

axios.get = jest.fn().mockResolvedValue({
  data: [
    {
      id: 1,
      text: 'tarefa 1',
      day: 'segunda',
    }
  ]
})

axios.post = jest.fn().mockResolvedValue()

test('Verifica a existencia dos elementos na tela', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const taskInput = getByPlaceholderText(/Nome da tarefa/i);
  const createButton = getByText(/Nova tarefa/i);
  const cardTarefa = getByTestId('card-tarefas');

  expect(cardTarefa).toBeInTheDocument();
  expect(taskInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();

});

test('Tenta criar uma tarefa', async () => {
  
  const { getByText, getByPlaceholderText, getByTestId} = render(<App />);
  const taskInput = getByPlaceholderText(/Nome da tarefa/i);
  const createButton = getByText(/Nova tarefa/i);
  const selectDay = getByTestId('daySelect');


  await userEvent.type(taskInput, "tarefa 1");
  userEvent.selectOptions(selectDay, 'segunda');  
  userEvent.click(createButton);

  expect(selectDay).toHaveValue('segunda');
  expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-feliphe',
      {
        text : 'tarefa 1',
        day : 'segunda',
      }
  )
  await wait(() => expect(axios.get).toHaveBeenCalled());
});

test('Erro ao criar uma terefa', async () => {
  
  const { getByText, getByPlaceholderText, getByTestId} = render(<App />);
  const taskInput = getByPlaceholderText(/Nome da tarefa/i);
  const createButton = getByText(/Nova tarefa/i);
  const selectDay = getByTestId('daySelect');


  await userEvent.type(taskInput, "tarefa 1");
  userEvent.selectOptions(selectDay, 'segunda');  
  userEvent.click(createButton);

  expect(selectDay).toHaveValue('segunda');
  expect(axios.post).not.toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/',
      {
        text : 'tarefa 1',
        day : 'segunda',
      }
  )
});



test('Testa deletar uma task', async () => {

 
  const { getByText, getByTestId, getByPlaceholderText} = render(<App />);
  
  const taskInput = getByPlaceholderText(/Nome da tarefa/i);
  const createButton = getByText(/Nova tarefa/i);
  const selectDay = getByTestId('daySelect');


  await userEvent.type(taskInput, "tarefa 1");
  userEvent.selectOptions(selectDay, 'segunda');  
  userEvent.click(createButton);

  expect(selectDay).toHaveValue('segunda');
  expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-feliphe',
      {
        text : 'tarefa 1',
        day : 'segunda',
      }
  )
  await wait(() => expect(axios.get).toHaveBeenCalled());


  const task = getByText('tarefa 1');

  userEvent.click(task);

  const iconEdit = getByTestId('icon-edit');
  const iconDelete = getByTestId('icon-delete');



  

  expect(iconEdit).toBeInTheDocument();
  expect(iconDelete).toBeInTheDocument();

  userEvent.click(iconDelete);

 wait ( () => expect(task).not.toBeInTheDocument(),6000);
 
});


