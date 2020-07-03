import React from "react"
import SingUpPage from "./components/SingUpPage"
import axios from "axios"
import styled from "styled-components"
import UserListPage from "./components/UserListPage";
import UserDetails from "./components/UserDetails"

const Contaier = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 97vh;
`;


class App extends React.Component{
    state = {
        UserByid: "",
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

    getUserById = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${this.props.id}`
        const authorization = { headers:{Authorization: "feliphe-rodrigues-turing"}}
        axios
        .get(url,authorization)
        .then( response => this.setState({UserByid: response.data}))
        .catch( err => console.log(err.menssage))
    }


    renderiza = (page) =>{
        switch(page){
            case 0:
                return <SingUpPage
                        handleInputName={this.onChangeInputName}
                        handleInputEmail={this.onChangeInputEmail}
                        inputEmailValue={this.state.inputEmailValue}
                        inputNameValue={this.state.inputNameValue}
                />
            case 1:
                {this.getAllUsers()}
                return <UserListPage  
                        users={this.state.users}
                        handleClick={this.getUserById}
                />
            case 2:
                return <UserDetails user={this.UserByid}/>
        }
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
                {this.renderiza(0)}
            </Contaier>
        );
    }

}

export default App