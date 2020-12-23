import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ContCard } from './card'
import { connect } from 'react-redux'

function Card({company, vaga, image, id, type, description, location, dispatch,mode}){
    const history = useHistory();
    const aas = ()=>{
        history.replace(`/${id}`)
        return{
            type: 'NEW_VAGA',
            vaga:{
                company,
                vaga,
                image,
                id,
                type,
                description,
                location
            }
        }
    }
    return(
        <>
        <ContCard>
            <span>{company}</span>
            {vaga.length > 20 ?
                <h3>{vaga}</h3>
                
                :<h1>{vaga}</h1>

            }
            <span>{type}</span>
            <button type="button" onClick={()=> dispatch(aas())} >Ver mais</button>
        </ContCard>
        </>
    )
}

export default connect(state => ({mode: state.mode,vagaa: state.vaga}))(Card);