import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'
import { useEffect } from 'react'


//using props destructure serverresponse

function View(serverResponse) {

  

  // to store api response

  const [allvideos, setallvideos] = useState([])

  const [deletestatus,setdeletestatus]=useState(false)


  // useEffect hook used to view the content when we load page 

  useEffect(() => {

    // call the getvideos
    getallVideos()

// when page load the data we add will view 
  }, [serverResponse,deletestatus])


  // crete a function


  const getallVideos = async () => {
    const response = await getVideo()
    // console.log(response.data);
    setallvideos(response.data)

  }
  console.log(allvideos);

  // to get delete response 

  const handledeletestatus=(res)=>{
    setdeletestatus(res)
  }



  return (
    <>
      <div className='border p-3 rounded m-4'>
        <Row>
          {/* to share js to jsx */}

          {
            // {/* to duplicate the data of col */ }
            allvideos.map(video=>(
            <Col className='p-3 mt-3' sm={12} md={6}>


          {/*card is used to destructure  */}
              <VideoCard card={video} handledeletestatus={handledeletestatus}/>


            </Col>
            ))
        }

        </Row>

      </div>

    </>
  )
}

export default View