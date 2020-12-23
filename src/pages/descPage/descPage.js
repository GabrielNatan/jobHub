import styled from 'styled-components'

export const Container = styled.div`
    margin:0 auto;
    max-width:1000px;

    a.back{
        text-decoration: none;
        color: ${props => props.color == 'dark' ? '#FFF' : '#000'};
    }

    .mark{
        p{
            margin-bottom:10px;
        }
        ul{
            margin:0 10px 10px 40px;
            
        }
    }
    `
export const Title = styled.h1`
    color: ${props => props.color == 'dark' ? '#FFF' : '#000'};
        a{
            color: ${props => props.color == 'dark' ? '#FFF' : '#000'};

        }
`
export const Body = styled.div`
    background: ${props => props.color == 'dark' ? '#1D1D44' : '#EFF8FF'};   
    min-height: 100vh;
    @media(max-width: 800px) {
        padding:20px;
    }

    `

export const Banner = styled.div`
    background: url(${props => props.image}) no-repeat center/cover;   
    background-color: #FFF;
    padding:20px;
    height: 300px;
    width:100%;
    border-radius:10px;
    margin:20px 0 20px 0;
    display: flex;
    justify-content:center;
    align-items:center;
        img{
            width:100%;
            height:100%;
        }   
        h1{
            font-size:3.9rem;
            color:#000;
        }
`

export const ImageBack = styled.div`
        width:100%;
        height:100%;
        background: url(${props => props.image}) no-repeat center/cover;
        display:flex;
        justify-content: center;
        align-items: center;
`
export const ContDesc = styled.div`
    background: #FFF;
    width:100%;
    display:flex;
    justify-content: space-between;
        .desc{
            width:70%;
            height:100%;
            padding:20px 10px 20px 30px;
            text-align: justify;
            h3{
                margin-bottom:20px;
            }
            @media(max-width: 800px) {
                width:100%;
                padding:20px;
                order:2;
            }
        }
        .listDesc{
            width:25%;
            height:100%;
            padding:20px 10px;

            h6{
                font-size:1.3rem;
                margin:10px 0;
            }
            @media(max-width: 800px) {
                width:100%;
                order:1;
            }    
        }

        @media(max-width: 800px) {
            flex-direction:column;
        }
`

