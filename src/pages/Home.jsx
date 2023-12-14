import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'

function Home() {


  const[serverResponse,setserverRes]=useState({})

  const handleresponse=(res)=>{
    setserverRes(res)
  }
  
  
  
  return (
    <>
      <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>

      <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"Blue"}}className='ms-auto'>Watch History</Link>
      
      
      
      <div className='container-fluid'>
        <Row>
          {/* add component selector */}
          
          <Col lg={1}>
            {/* share the handleresponse function to add component  */}
            {/* add to home */}
            <Add handleresponse={handleresponse} />
          </Col>

          {/* view component selector */}
          <Col lg={7}>
            
            {/* home to view */}
            <View serverResponse={serverResponse} />
          </Col>


          {/* category component selector */}
          <Col lg={4}>
            <Category />
          </Col>
        </Row>

      </div>

    </>
  )
}

export default Home