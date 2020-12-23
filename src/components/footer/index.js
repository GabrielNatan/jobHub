import React from 'react'
import {ContFooter} from './footer.js'
import { connect } from 'react-redux'
function Footer({mode}){
    return(
        <>
            <ContFooter color={mode}>
                <p>Todos direitos reservados &copy;</p>
            </ContFooter>
        </>
    )
}

export default connect(state => ({mode: state.mode}))(Footer);