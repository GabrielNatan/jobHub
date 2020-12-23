import React from 'react'
import { ContLoader } from './loader'

function Loader(){
    return(
        <ContLoader>
            <i className="fab fa-github-alt"></i>
            <h2>Carregando<span className="move-1">.</span><span className="move-2">.</span><span className="move-3">.</span></h2>
        </ContLoader>
    )
}

export default Loader;