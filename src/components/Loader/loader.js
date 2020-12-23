import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`


const up = keyframes`
  0% {
    transform: translateY(5px)
  }
  100% {
    transform: translateY(-5px)
  }
`
export const ContLoader = styled.div`
    width:100%;
    height:350px;
    background: #FFF;
    color: #222;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 auto;
    i{
            margin-top:60px;
            font-size:2.3rem;
            transition: 1s;
            animation: 1s ${up} ease-out alternate infinite;
        }

        h2{
            .move-1{
                opacity:0;
                animation: 1s ${fadeIn} ease-out infinite;
                font-size:1.9rem;
            }
            .move-2{
                opacity:0;
                animation: 1s 1s ${fadeIn} ease-out infinite;
                font-size:1.9rem;
            
            }
            .move-3{
                opacity:0;
                animation: 1s 2s ${fadeIn} ease-out infinite;
                font-size:1.9rem;
            }
        }

`