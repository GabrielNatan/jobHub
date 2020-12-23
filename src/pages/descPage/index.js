import React,{ useState, useEffect} from 'react'
import { Container, Body, ContDesc, Title,  Banner, ImageBack} from './descPage'
import {Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Image from './tec.jpg'

import ReactMarkdon from 'react-markdown'
/* Components */
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
function DescPage({mode, search, vaga}){
    const [idO, setIdO] = useState()
    const {id} = useParams();

    useEffect(async ()=>{

    },[])
    return( 
        <>
        <Body color={mode}>
        <Navbar/>
        <Container color={mode}>
            <Link   className="back" to="/"><i className="fas fa-arrow-left"></i> Back</Link>
            <Title color={mode}>{vaga.vaga} - {vaga.company}</Title>
            <Banner >
                {
                    vaga.image != null ?<img src={vaga.image}/> : <ImageBack image={Image}> <h1>{vaga.company}</h1> </ImageBack> 
                }
                
            </Banner>
            <ContDesc>
                <div className="desc">
                      <h3>Description:</h3> 
                        <ReactMarkdon className="mark">

                        {vaga.description}
                        </ReactMarkdon>
                </div>
                <div className="listDesc">
                    <h6>Company:</h6>
                    {vaga.company}
                    <h6>Location:</h6>
                    {vaga.location}
                    <h6>type:</h6>
                    {vaga.type}
                </div>
            </ContDesc>
        </Container>
        <Footer/>
        </Body>
        </>
    )
}

export default connect(state => ({mode: state.mode, vaga: state.vaga}))(DescPage);