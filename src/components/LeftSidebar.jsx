import React from 'react'
import Image from 'react-bootstrap/Image';

function LeftSidebar() {
  return (
    <>

<div className='mt-5 mb-3 logo-bg'>
<p className='logo-text'>LOGO</p>
</div>
    {/* <Container>
        <Row> 
            <Col > */}
            <div className='left-sidbar '>
<ul className='ul-design '>
    <li className='li-text mt-2'>    <Image src="../img/home.png" className='li-img' />Home</li>
    <li className='li-text mt-2'>  <Image src="../img/notification.png" className='li-img' />Notification</li>
    <li className='li-text mt-2'>  <Image src="../img/heart2.png" className='li-img' />Shop</li>
    <li className='li-text mt-2'>  <Image src="../img/message.png" className='li-img' />Conversation</li>
    <li className='li-text mt-2'>  <Image src="../img/message-1.png" className='li-img' />Wallet</li>
    <li className='li-text mt-2'>  <Image src="../img/favorite.png" className='li-img' />Subscription</li>
    <li className='li-text mt-2'>  <Image src="../img/profile.png" className='li-img' />My Profile</li>
    <li className='li-text mt-2 mb-5'>  <Image src="../img/setting.png" className='li-img' />Settings</li>
    <li className='li-text mt-5 pb-5' style={{color:'#88C2BB'}}>  <Image src="../img/logout.png" className='li-img' />Log Out</li>
</ul>
    </div>

    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight "><p style={{fontSize:'12px',color:'#8D8D8D'}}> 2022©logo name</p></div>
  <div class=" bd-highlight"><p style={{fontSize:'12px',color:'#8D8D8D'}}>Developed by ivan Infotech</p></div>
 
</div>
            {/* </Col> 
        </Row>
    </Container> */}

    </>
  )
}

export default LeftSidebar