import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  // function definition
  // redirect from one page to another page we can useNavigate()(hook) 
  const navigate=useNavigate()
  const handleNavigate=()=>{
      

      navigate('/home')

    }

  return (
    <>
        <Row>
    
        <Col> </Col>
        <Col lg={6} >
        <h1>Welcome Videooo.com</h1>
        <p style={{textAlign:'justify'}}>Where user can use their favourite videos. User can upload any youtube videos by copy and paste their url into videooo.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now.</p>
    
        <button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More</button>
        </Col>
        
        <Col lg={5}>
          <img src="https://selzy.com/en/blog/wp-content/uploads/2022/11/how-to-embed-a-video-in-an-email_1200x630.jpg" alt="no image" className='img-fluid' />
        </Col>
    
        </Row>
    
        </>
  )
}

export default Landingpage