import React, {Component} from 'react'
import './SecaoComentario.css'
import styled from "styled-components";


const Comentario = styled.div`
	width: 90%;
	height: 10%;
	border: 1px solid gray;
`;

export class SecaoComentario extends Component {
	state = {
		comentario: "",
		listaComentarios: []
	}

	onChangeComentario = event => {
		
		this.setState({comentario: event.target.value});
	}
	onClickAddComentario = () => {

		const newComentario = [...this.state.listaComentarios, this.state.comentario]
		this.setState({listaComentarios: newComentario, comentario: ""})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
				/>
			<button onClick={this.props.aoEnviar, this.onClickAddComentario}>Enviar</button>
			<div>
				{this.state.listaComentarios.map( (dado)=>{ 
					return <Comentario>{dado}</Comentario>;
				})}		
			</div>
		</div>
	}
}
