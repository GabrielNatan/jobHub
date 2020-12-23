import styled from 'styled-components'


export const ContFooter = styled.div`
    max-width:1000px;
    padding:20px 10px;
    border-radius:10px;
    background: linear-gradient(to right,${props => props.color === 'dark'? '#53D8F5':"#74DDF4"},40%,${props => props.color === 'dark'? '#6464FB':"#0DBCE2"});
    text-align:center;
    color: #FFF;
    font-weight:700;
    margin:20px auto 0 auto;

`