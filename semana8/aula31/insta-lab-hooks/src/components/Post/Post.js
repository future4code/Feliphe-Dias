import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

let key = 0;

const Post = (props) => {
  const [curtida, setCurtida] = useState(false);
  const [numeroDeCurtidas, setNumeroDeCurtidas] = useState("");
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [listaComentarios, setComentarios] = useState([]);
  const [comentando, setComentando] = useState(false);

  
  
  const onClickCurtida = () => {
    setCurtida(!curtida);
    !curtida ? setNumeroDeCurtidas(numeroDeCurtidas + 1) : setNumeroDeCurtidas("");
  };
  
  const onClickComentario = () => {
    setComentando(!comentando);
  };
  
  const enviarComentario = (comentario) => {
    setNumeroComentarios(  1 + numeroComentarios);
    setComentarios( [comentario , ...listaComentarios]);
  }

  
  let caixaDeComentario =  comentando ? 
    <><SecaoComentario key={++key} enviarComentario={enviarComentario}></SecaoComentario>
    {listaComentarios.map ( e => <CommentContainer key={++key}>{e}</CommentContainer>) }</>
    : listaComentarios.map ( e => <CommentContainer key={++key}>{e}</CommentContainer>)

  
  console.log(listaComentarios)
  
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={curtida ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroDeCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post