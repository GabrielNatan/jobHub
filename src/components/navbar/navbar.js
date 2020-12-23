import styled from 'styled-components'

export const Navbar = styled.div`
    max-width:1000px;
    margin:0 auto;
    height:60px;
    display:flex;
    align-items: center;

        h1{
            flex:1;
            font-weight:normal;
            font-size:1.7rem;
            color:${props => props.color === 'dark'? '#FFFFFF':"#000000"};
            span{
                font-weight:700;
                color: #0DBCE2;
            }
        }

        .tema{
            flex:1;
            display:flex;
            justify-content:flex-end;
            color: ${props => props.color === 'dark'? '#FFFFFF':"#000000"};
            .contCircle{
                width:35px;
                height:15px;
                margin:0 5px;
                border-radius:10px;
                border:3px solid ${props => props.color === 'dark'? '#FFFFFF':"#000000"};
                position: relative;
            }
            .circle{
                width:18px;
                height:18px;
                border-radius:50%;
                background-color: ${props => props.color === 'dark'? '#0DBCE2':"#3D1DC9"};
                position: absolute;
                top:-4px;
                left:-4px;
                transition: 0.5s;
            }

            .contCircle.active > .circle{
                left:17px;
            }
            
        }
`