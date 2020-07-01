import React from "react"
import UserDetails from "./UserDetails"
import styled from "styled-components"
import axios from "axios"



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

class UserListPage extends React.Component{
    state ={
        changePage: false,
        page: "",
        user: ""
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
    


    changePage = (id) => {
        const page = <UserDetails 
        id={id}
        />
        this.setState({page: page, changePage: true})
    
    }



    render(){
         const pageLista =  <ContainerList>
         {this.props.users && this.props.users.map( user => {
            return <ListDiv>
                 <li onClick={ () => this.changePage(user.id)} key={user.id}>{user.name}</li>
               <button  onClick={() => this.deleteUser(user.id)}>apagar</button>
             </ListDiv>
          }
         )}
     </ContainerList>
        return <>{ !this.state.changePage ? pageLista : this.state.page}</>
    
    }
}

export default UserListPage;