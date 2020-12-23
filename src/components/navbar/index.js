import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {Navbar} from './navbar'

function Home({mode, dispatch }){
    const [se, setSe] = useState('light')
    const tema = ()=>{
        if(se === 'light'){
            setSe('dark')
            
        }else{
            setSe('light')
            
        }
        return{
            type: 'TEMA',
            se
        }
    }

    useEffect(()=>{

    },[se])
    return(
        <Navbar color={mode}>
            <h1>job<span>Hub</span></h1>
            <div className="tema">
                <i className="fas fa-sun"></i>
                <div onClick={()=> dispatch(tema())} className={mode === 'dark' ?  "contCircle active" : "contCircle"}> 
                    <div className="circle"></div>
                </div>
                <i className="fas fa-moon"></i>
            </div>
        </Navbar>
    )
}

export default connect(state=>({mode: state.mode}))(Home);