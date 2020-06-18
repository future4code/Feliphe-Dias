import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSavePostPreto from "../../img/salvar-black.png"
import iconeSavePostBranco from "../../img/salvar-white.png"
import iconeShare from "../../img/share.png"
import SharePoPUp from '../sharePopUp/SharePoPUp'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    share: false
  }

  onClickCurtida = () => {
    this.setState({curtido: !this.state.curtido});
    !this.state.curtido ? this.setState({numeroCurtidas: this.state.numeroCurtidas + 1}) : this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  savePost = () =>{
      this.setState({salvo: !this.state.salvo})
  }

  share = () =>{ 
     !this.state.share ? this.setState({share: true}) : this.setState({share: false})
     console.log(this.state.share)
  }

  render() {
    let iconeCurtida
    let iconeSave;

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    this.state.salvo ? iconeSave = iconeSavePostPreto : iconeSave = iconeSavePostBranco;

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    let componenteShare
    if(this.state.share){
      componenteShare = <SharePoPUp />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador 
          icone = {iconeSave}
          onClickIcone ={this.savePost}
          width ={{width: "30px"}}
          height = {{height: "30px"}}
        />

          <IconeComContador 
            icone = {iconeShare}
            onClickIcone ={this.share}
            width ={{width: "50px"}}
            height = {{height: "50px"}}
            
          />

        <IconeComContador
          icone={iconeComentario}  
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteShare}
      {componenteComentario}
    </div>
  }
}

export default Post