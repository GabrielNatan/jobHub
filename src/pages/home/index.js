import React, { useState, useEffect } from 'react'
import {Container, Body} from './home'
import axios from 'axios'
import { connect } from 'react-redux'


/* Components */
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import Form from '../../components/search'
import Card from '../../components/card'
import Loader from '../../components/Loader'
import Footer from '../../components/footer'
function Home({mode}){
    const [req, setReq] = useState([])
    const [search, setSearch] = useState("java")
    const [loading, setLoading] = useState(false)
    const newRec = (items)=>{
        setReq(items)
    }
    useEffect( ()=>{
        setLoading(true)
       let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?markdown=true&description=${search}`
          request(url)

    },[search] )
  
    const request = async (url)=>{        
        await axios.get(url)
        .then(res => res)
        .then(res => {
            const b = [... res.data]
            return b 
        }).then(res => {newRec(res) })
        .then(res=>{
            setTimeout(()=>{

                setLoading(false)
            },100)}) 
        
        
    }
    const enviar = async (name)=>{
        setLoading(true);

        setSearch(name)
        
    }

    return(
        <>
            <Body color={mode}>
            <Navbar/>
            <Header/>
            <Form search={search} enviar={enviar}/>
            <Container grid={loading === true ? 'one' : 'false'}>

            {
                loading === true ? 
                <Loader/>                
                : req.map(item=>{
                    return(
                        <Card key={item.id} id={item.id} company={item.company} vaga={item.title} image={item.company_logo}  description={item.description} location={item.location} type={item.type} />
                        )
                    })
                    
                }
            </Container>
            <Footer/>

            </Body>
        </>
    )
}

export default connect(state => ( {mode: state.mode} ))(Home);