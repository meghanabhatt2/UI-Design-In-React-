import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row , Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import LeftSidebar from './LeftSidebar';
// import TextField from '@mui/material/TextField';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RightSidebar from './RightSidebar';
import Slider from './Slider';
import Main from './Main'
function Design() {
  return (
    // <>
<div style={{backgroundColor:'#F5F5F5'}}>
   <Container >
    <Row>

        <Col lg={3} md={3} sm={12} sx={12}>

<LeftSidebar/>
        </Col>

        <Col lg={6} md={6} sm={12} sx={12}>

            <Main/>
   
        <Slider/>
        </Col>

        <Col lg={3} md={3} sm={12} sx={12}>
      
        <RightSidebar/>
        </Col>
     
    </Row>
   </Container>
</div>
    
    // </>
  )
}

export default Design