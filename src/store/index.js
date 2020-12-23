import { createStore } from 'redux'

let INITIAL_STATE = {
    mode: 'light',
    vaga: {nome: 'esse'}
}

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'TEMA'){
       return {... state,mode: action.se}
    }else if(action.type === 'NEW_VAGA'){
        return {... state,vaga: action.vaga}
     }
    return state
}

const store = createStore(reducer);
export default store;