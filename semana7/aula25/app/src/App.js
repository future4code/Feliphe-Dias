import React from "react"
import axios from "axios"
import styled from "styled-components"

const Contaier = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 97vh;
`;

const ContainerInput = styled.div`
    display:flex;
    flex-flow: column wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 20%;
    border: 1px solid black;

`;

const ContainerList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    height: fit-content;
    width: 30%;

`;

const ListDiv = styled.div`
    display: flex;
    margin: 2vh;
    align-items: flex-start;
    justify-content: space-between;
    border-top: solid black 1px;
    width: 100%;
`;

class App extends React.Component{
    state = {
        isSignUp: true,
        inputNameValue: "",
        inputEmailValue: "",
        users: []
    }

    componentDidMount(){
        this.getAllUsers();

    }

    componentDidUpdate(){
        this.getAllUsers();
    }

    getAllUsers = () =>{
        const http =  "//us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = { headers:{Authorization: "feliphe-rodrigues-turing"}}
        axios
        .get(http,headers)
        .then(response => this.setState({users: response.data}))
        .catch(error => console.log(error.data))
    }
    
    createUser = (name, email) =>{
        this.setState({inputEmailValue: "", inputNameValue: ""})
        const http =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = {headers:{Authorization: "feliphe-rodrigues-turing"}}
        const body = { "name": name, "email": email}
        axios
        .post(http, body, headers)
        .then(response => this.setState({users: response.data}, alert("Criado com sucesso")))
        .catch(error => alert(error.message))
    }

    
    deleteUser = (id) =>{
        if(window.confirm("Tem certeza de que deseja deletar?")){
            const http =  "//us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"+id;
            const headers = { headers:{Authorization: "feliphe-rodrigues-turing"}}
            axios
            .delete( http,headers)
            .then(this.getAllUsers, alert("deletado com sucesso"))
            .catch(error => alert(error.message))
        }
    }

    

    onChangeInputName = event =>{
        this.setState({inputNameValue: event.target.value})
    }
    
    
    onChangeInputEmail = event =>{
        this.setState({inputEmailValue: event.target.value})
    }

    send = () =>{
       
        if(this.state.inputNameValue !== "" && this.state.inputEmailValue !== ""){
            this.createUser(this.state.inputNameValue, this.state.inputEmailValue, this.getAllUsers(response => this.setState({users: response.data})), error => console.log(error.data) );
        }
        else alert("Por favor preencha todos os campos")
    }



    render(){        
        const screenSingUp = (
            <ContainerInput>
                   <hr/>
                <input 
                    onChange={this.onChangeInputName}
                    value={this.state.inputNameValue}
                    placeholder="Name"
                /> 
                   <hr/>
                <input 
                    onChange={this.onChangeInputEmail}
                    value={this.state.inputEmailValue}
                    placeholder="Email"
                /> 
                   <hr/>
                <button onClick={this.send}>ENVIAR</button>
            </ContainerInput>);

        const screenList = (
            <ContainerList>
              
                {this.state.users && this.state.users.map( user => {
                    return <ListDiv>
                        <li key={user.id}>{user.name}</li>
                        <button  onClick={()=> this.deleteUser(user.id)}>apagar</button>
                    </ListDiv>
                    }
                )}
            </ContainerList>
        );
                
        return (
            <Contaier>
                {this.state.isSignUp ? <button onClick={() => this.setState({isSignUp: !this.state.isSignUp}, this.getAllUsers())}>Consultar</button> : <button onClick={() => this.setState({isSignUp: !this.state.isSignUp})}>Voltar</button>}
                {this.state.isSignUp ? screenSingUp : screenList }
            </Contaier>
        );
    }

}

export default App