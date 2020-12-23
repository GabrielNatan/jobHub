import styled from 'styled-components'

export const ContCard = styled.div`
    background: #FFF;
    border-radius:5px;
    padding:20px 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    position:relative;

        span{
            margin-bottom:10px;
            color:#888;
        }
        h1{
            font-size:1.3rem;
            margin-bottom:10px;
        }

        h3{
            margin-bottom:10px;
        }
        button{
            font-weight:700;
            color:#719EE2;
            border:none;
            background: transparent;
            border-radius: 5px;
            text-align: left;
            cursor:pointer;
        }
`