import React,{useState} from 'react'
import {SearchInput} from './search'
import { connect } from 'react-redux'


function Form({search,enviar, mode}){
    const [text, setText] = useState('')
    
    return(
        <SearchInput color={mode}>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Encontre sua vaga aqui"/>
            <span><button type="button" onClick={()=>enviar(text)}><i className="fas fa-search"></i></button></span>
        </SearchInput>
    )
}

export default connect(state => ({mode: state.mode}))(Form);