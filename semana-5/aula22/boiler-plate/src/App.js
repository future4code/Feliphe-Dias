import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
`;

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const minhasTarefas = JSON.stringify(this.state.tarefas);
    localStorage.setItem("listaDeTarefas",minhasTarefas);
  };

  componentDidMount() {
    localStorage.getItem("listaDeTarefas") && this.setState({tarefas: JSON.parse(localStorage.getItem("listaDeTarefas"))})
  };

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
      this.setState({tarefas: [...this.state.tarefas,{id:Date.now(), texto: this.state.inputValue, completa: false}]})
    }

  selectTarefa = (id) => {
    let copiaTarefas = [...this.state.tarefas];
    copiaTarefas.forEach( (tarefa)=>{
      (tarefa.id === id) && (tarefa.completa = !tarefa.completa);
    })

    this.setState({tarefas: copiaTarefas});
    
  }

  onChangeFilter = (event) => {
      this.setState({filter: event.target.value})
  }

  removeTarefa  = (id) =>{
      this.setState( {tarefas: this.state.tarefas.filter( (tarefa) =>{
        return tarefa.id !== id;
      })})
}

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              
              <ListContainer>
              <Tarefa key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                >
                {tarefa.texto}
              </Tarefa>
                <button>Remove</button>
              </ListContainer>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
