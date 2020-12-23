import styled from 'styled-components'


export const Container = styled.div`
    margin:0 auto;
    max-width:1000px;
    background: transparent;
    display: grid;
    grid-gap:20px;
    grid-template-columns: ${props => props.grid === 'one'? '1fr' :'1fr 1fr 1fr'};
    
    @media(max-width: 800px) {
        grid-template-columns: ${props => props.grid === 'one'? '1fr' :'1fr 1fr'};
    }
    @media(max-width: 400px) {
        grid-template-columns: 1fr ;
    }
    
`
export const Body = styled.div`
    background: ${props => props.color == 'dark' ? '#1D1D44' : '#EFF8FF'};   
    @media(max-width: 800px) {
        padding:20px;
    }
`