import React from "react"
import styled from "styled-components"
import axios from "axios"


class UserDetails extends React.Component{
    state = {
        user: []
    }

    componentDidMount = () => {
        this. getUserById();
    }
     getUserById = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${this.props.id}`
        const authorization = { headers:{Authorization: "feliphe-rodrigues-turing"}}
        axios
        .get(url,authorization)
        .then( response => this.setState({user: response.data}))
        .catch( err => console.log(err.menssage))
    }


    render(){
        return <ul> 
            {this.state.user.map( user => {
                return <>
                <li>{user.name}</li>
                <li>{user.email}</li>
                </>
            })}
        </ul>
    }
}


export default UserDetails