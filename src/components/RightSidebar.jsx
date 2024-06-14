import React from 'react'
import Image from 'react-bootstrap/Image';
function RightSidebar() {
  return (
    <>
       <div className='mt-5 mb-3 right-box'>
            <p className='right-box-text'>Become a Seller</p>
        </div>
    <div className='right-text'>
        <p><span className='artists'>Artists </span>Photographers</p>
        {/* <p>Photographers</p> */}
    </div>

    <div>
        <div className='card-box-img1'>
            <div className='right-img-text px-3 mb-3'>
            <Image src="../img/avtar-1.png" className='right-img-bg  ' />
         
            <p className='mx-2 right-sub-title'><b className='right-title'>Thamos Edward </b><br/>thewildwithyou</p>
            </div>
        </div> 
    </div>

    <div>
        <div className='card-box-img2 mt-3'>
            <div className='right-img-text px-2'>
            <Image src="../img/dp2.png" className='right-img-bg ' />
         
            <p className='mx-2 right-sub-title'><b className='right-title'>Thamos Edward </b><br/>thewildwithyou</p>
            </div>
        </div> 
    </div>

    <div>
        <div className='card-box-img3 mt-3'>
            <div className='right-img-text px-2'>
            <Image src="../img/dp3.png" className='right-img-bg ' />
         
            <p className='mx-2 right-sub-title'><b className='right-title'>Thamos Edward </b><br/>thewildwithyou</p>
            </div>
        </div> 
    </div>

    <div>
        <div className='card-box-img4 mt-3'>
            <div className='right-img-text px-2'>
            <Image src="../img/dp4.png" className='right-img-bg ' />
         
            <p className='mx-2 right-sub-title'><b className='right-title'>Thamos Edward </b><br/>thewildwithyou</p>
            </div>
        </div> 
    </div>

    <div class="d-flex justify-content-between mt-2">
        <p style={{fontSize:'12px',color:'#8D8D8D'}}>Privacy</p>
        <p style={{fontSize:'12px',color:'#8D8D8D'}}>Terms of Service</p>
        <p style={{fontSize:'12px',color:'#8D8D8D'}}>Cookie Notice</p>
    </div>

    </>
  )
}

export default RightSidebar