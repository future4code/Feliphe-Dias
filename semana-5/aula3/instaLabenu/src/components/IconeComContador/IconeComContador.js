import React from 'react'
import  './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} style={props.width, props.height} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
