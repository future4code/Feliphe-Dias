import React from "react";
import "../sharePopUp/SharePopUp.css"
import {IconeComContador} from "../IconeComContador/IconeComContador"
import whatssAppIcon from "../../img/whats.png"
import twitterAppIcon from "../../img/twitter.png"
import githubAppIcon from "../../img/github.png"
import { render } from "@testing-library/react";

class SharePopUp extends React.Component {  
    state = {
        menssagem: "",
    }

   shareMenssagem = (event) =>{
       this.setState({menssagem: event.target.value})
   }
   showMenssagem = event =>{
       console.log("Sua menssagem foi compartilhada no", event.target.name, " com a menssagem ", this.state.menssagem)
   }

render(){
    return <div id="SharePoP">
        <div>
        <IconeComContador 
            name = {"WhatssApp"}
            icone={whatssAppIcon} 
            width={{width: "40px"}}
            height={{height: "40px"}}
            onClickIcone  = {this.showMenssagem}
        />
        <IconeComContador 
            name = {"Tiwitter"}
            icone={twitterAppIcon}
            width={{width: "40px"}}
            height={{height: "40px"}}
            onClickIcone = {this.showMenssagem}
        />
        <IconeComContador 
            name = {"GitHub"}
            icone={githubAppIcon}
            width={{width: "40px"}}
            height={{height: "40px"}}
            onClickIcone  = {this.showMenssagem}
        />   
        </div>
        <label>Menssagem:<input name="postMenssage" value={this.menssagem} onChange={this.shareMenssagem}/></label>  
    </div>
    }
}

export default SharePopUp