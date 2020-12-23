import React from 'react'
import {HeaderCont} from './header'
import { connect } from 'react-redux'


function Header({mode}){
    return(

        <HeaderCont color={mode}>
            <h1>Milhares de vagas<br/> <span>Esperando por você!</span></h1>
        </HeaderCont>
    )
}

export default connect(state =>({mode:state.mode}))(Header);