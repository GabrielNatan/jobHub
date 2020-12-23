import styled from 'styled-components'


export const HeaderCont = styled.div`
    background: linear-gradient(to right,${props => props.color === 'dark'? '#53D8F5':"#74DDF4"},40%,${props => props.color === 'dark'? '#6464FB':"#0DBCE2"});
    max-width:1000px;
    height:230px;
    margin:0 auto;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
        h1{
            color: #FFF;
            text-align: center;
            font-size:2.8rem;

            span{
            font-size:2rem;
            }
        }
`