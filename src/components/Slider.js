import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';


function slider() {

    var settings = {
        // dots: true,
        infinite: false,
        speed: 2000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="slider-container">
 <Slider {...settings}>
    
            <div>
        <div  className=' mt-3 mb-3'>
  <img src="../img/slider1.png" class=" slider-img card-img-top px-3" alt="..."/>
  <div class="card-body mx-3">

    <p class="card-text mt-2">Modern Wall Decor Framed Painting.</p>
    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight " style={{fontWeight:'bold',fontSize:'24px'}}><sup > $199.99</sup></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
</div>
   
  </div>
</div>
        </div>

        <div>
        <div  className=' mt-3 mb-3'>
  <img src="../img/slider2.png" class="slider-img card-img-top px-3" alt="..."/>
  <div class="card-body mx-3">
  <p class="card-text mt-2">Modern Wall Decor Framed Painting.</p>
    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight " style={{fontWeight:'bold',fontSize:'24px'}}><sup > $199.99</sup></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
</div>
  </div>
</div>
        </div>


        <div>
        <div  className=' mt-3 mb-3'>
  <img src="../img/slider3.png" class="slider-img card-img-top px-3" alt="..."/>
  <div class="card-body  mx-3">
  <p class="card-text mt-2">Modern Wall Decor Framed Painting.</p>
    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight " style={{fontWeight:'bold',fontSize:'24px'}}><sup > $199.99</sup></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
</div>
  </div>
</div>
        </div>

        <div>
        <div  className=' mt-3 mb-3'>
  <img src="../img/slider4.png" class="slider-img card-img-top px-3" alt="..."/>
  <div class="card-body  mx-3">
  <p class="card-text mt-2">Modern Wall Decor Framed Painting.</p>
    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight " style={{fontWeight:'bold',fontSize:'24px'}}><sup > $199.99</sup></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
</div>
  </div>
</div>
        </div>

        <div>
        <div  className='card-box mt-3'>
  <img src="../img/slider1.png" class="slider-img card-img-top" alt="..."/>
  <div class="card-body  mx-3">
  <p class="card-text mt-2">Modern Wall Decor Framed Painting.</p>
    <div class="d-flex bd-highlight mb-3">
  <div class="me-auto bd-highlight " style={{fontWeight:'bold',fontSize:'24px'}}>$199.99</div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
  <div class=" bd-highlight"><Image src="../img/star.png" className='li-img ' /></div>
</div>
  </div>
</div>
        </div>
         


            {/* <Col>
            <div>
        <div  className='card-box mt-3'>
  <img src="../img/slider1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div> 
            </Col>

            <Col>
            <div>
        <div  className='card-box mt-3'>
  <img src="../img/slider1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div> 
            </Col>


            <Col>
            <div>
        <div  className='card-box mt-3'>
  <img src="../img/slider1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div> 
            </Col> */}
   
       


       


   
      </Slider>
    </div>
  )
}

export default slider