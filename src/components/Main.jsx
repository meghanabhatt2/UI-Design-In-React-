import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'react-bootstrap/Image';
function main() {
  return (
    <>
{/* design 1 start */}
<div className='mt-5 mb-1 search-box'>

<div class="d-flex bd-highlight">
<div class="p-2 flex-grow-1 bd-highlight p-4"> <form  >
<Image src="../img/search.png" className='li-img ' />
<input class="input-search" type="search" placeholder="Search here.." aria-label="Search"/>
</form></div>

<div class="d-flex justify-content-end p-4 ">    
<p style={{width:'max-content',paddingRight:'10px'}}><Image src="../img/filter.png" className='li-img ' />Filters</p></div>
</div>

</div>

<div className='main-box mb-5'>
<div className='mt-3  d-flex bd-highlight'>
<div className='d-flex flex-row bd-highlight px-4 mt-4'>
<div style={{display:'flex'}}><Image src="../img/dp-girl.png" className='right-img-bg' />
<p className='heading'><b className='heading-name'>Lara Leones</b> <br/> @thewallart</p></div>


</div>
<div className='ms-auto p-2 bd-highlight px-4 mt-4'><MoreVertIcon /></div>
</div>

{/* start text img sexction */}
<div className='px-3 text-decoration'>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span style={{color:'red'}}> Read More</span></p>
</div>
<div className='px-3'>
<Image src="../img/main-bg.png" className='main-img-bg mb-2' />
{/* <Image src="../img/heart-1.png" className='li-img 'style={{position:'absolute'}} /> */}
<div className='mt-3 hr'></div>
</div>
<div className='search-box'>
{/* <div class="d-flex align-items-center px-3">
<Image src="../img/heart.png" className='li-img ' />
</div> */}
<div class="d-inline-flex mt-4 px-3" >
<Image src="../img/heart.png" className='li-img ' /><p className='comment-text'>9.8k</p>
<Image src="../img/comment.png" className='li-img ' /><p className='comment-text'>9.8k</p>
<Image src="../img/share.png" className='li-img ' /><p className='comment-text'>9.8k</p>
</div>
</div>

{/* end text img sexction */}
</div>
{/* design 1 end */}


{/* design start 2 */}

<div className='main-box mb-3'>
<div className='mt-3  d-flex bd-highlight'>
<div className='d-flex flex-row bd-highlight px-4 mt-4'>
<div style={{display:'flex'}}><Image src="../img/dp-boy.png" className='right-img-bg' />
<p className='heading'><b className='heading-name'>Thomas J.</b> <br/> @thecustomcreater</p></div>


</div>
<div className='ms-auto p-2 bd-highlight px-4 mt-4'><MoreVertIcon /></div>
</div>

{/* start text img sexction */}
<div className='px-3 text-decoration'>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span style={{color:'red'}}> Read More</span></p>
</div>
<div className='px-3'>
<Image src="../img/main-bg-2.png" className='main-img-bg mb-2' />
{/* <Image src="../img/heart-1.png" className='li-img 'style={{position:'absolute'}} /> */}
<div className='mt-3 hr'></div>
</div>
<div className='search-box'>
{/* <div class="d-flex align-items-center px-3">
<Image src="../img/heart.png" className='li-img ' />
</div> */}
<div class="d-inline-flex mt-4 px-3" >
<Image src="../img/heart.png" className='li-img ' /><p className='comment-text'>9.8k</p>
<Image src="../img/comment.png" className='li-img ' /><p className='comment-text'>9.8k</p>
<Image src="../img/share.png" className='li-img ' /><p className='comment-text'>9.8k</p>
</div>
</div>

{/* end text img sexction */}
</div>
{/* design end 2 */}
    </>
  )
}

export default main