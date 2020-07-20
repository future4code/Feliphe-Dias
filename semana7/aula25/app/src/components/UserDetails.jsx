import React from "react"
import styled from "styled-components"
import axios from "axios"


class UserDetails extends React.Component{
    componentDidMount = () => {
        this.getUserById();
    }


    render(){
        return <ul> 
            {this.props.user.map( user => {
                return <>
                <li>{user.name}</li>
                <li>{user.email}</li>
                </>
            })}
        </ul>
    }
}


export default UserDetails