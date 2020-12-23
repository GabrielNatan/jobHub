import styled from 'styled-components'

export const SearchInput = styled.div`
    max-width:600px;
    margin:0 auto;
    position:relative;
    top: -30px;
    display:flex;
    input{
        width:100%;
        padding:15px;
        color:#777;
        font-size: 1.2rem;
        border: none;
        border-radius:5px 0 0 5px;
        outline:none;
    }
    span{
        width:60px;
        height:57px;
        background: #FFF;
        padding:5px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:0 5px 5px 0;
        button{
            border-radius:5px;
            background:${props => props.color == 'dark' ? '#6464FB' : '#74DDF4'} ;
            color:${props => props.color == 'dark' ? '#0DBCE2' : '#719EE2'};
            border:none;
            height:100%;
            width:100%;
            font-size:1.4rem;
            outline:none;

        }
    }
`