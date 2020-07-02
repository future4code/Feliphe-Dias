import React from "react"
import SingUpPage from "./components/SingUpPage"
import axios from "axios"
import styled from "styled-components"
import UserListPage from "./components/UserListPage";

const Contaier = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 97vh;
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
        const screenSingUp = <SingUpPage
            deleteUser={this.deleteUser}
            handleClick={this.send}
            handleInputName={this.onChangeInputName}
            handleInputEmail={this.onChangeInputEmail}
            inputEmailValue={this.state.inputEmailValue}
            inputNameValue={this.state.inputNameValue}
        />
        const screenList =  <UserListPage users={this.state.users}/>      
        
        return (
            <Contaier>
                {this.state.isSignUp ? 
                <button onClick={() => this.setState({isSignUp: !this.state.isSignUp}, 
                this.getAllUsers())}>Consultar</button> : 
                <button onClick={() => this.setState({isSignUp: !this.state.isSignUp})}>Voltar</button>}
                {this.state.isSignUp ? screenSingUp : screenList }
            </Contaier>
        );
    }

}

export default App