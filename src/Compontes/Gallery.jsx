import React from 'react'
import Gallerybar from "../Compontes/Gallerybar";
import { Container } from 'react-bootstrap';
import congress3 from '../img/congress3.png';
import congress4 from '../img/congress4.png';
import congress5 from '../img/congress5.png';
import congress11 from '../img/congress11.png';
import congress12 from '../img/congress12.png';
import congress13 from '../img/congress13.png';
import congress14 from '../img/congress14.png';
import congress15 from '../img/congress15.png';
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Gallery() {
  return (
    <>
  
    <Topbar />
    <Petition />
    <div  className='mt-5 mb-5' style={{ fontFamily: 'Roboto, sans-serif' ,marginTop:'5%'}}>
            
      <Container>
      <div className='mb-5 mt-5'>
      <h2 style={{color:'#203583',textAlign:'center',visibility:'hidden'}} className='mt-5'><b style={{ fontFamily: 'Roboto, sans-serif' ,marginTop:'55%'}}>Gallery</b></h2>
      <h2 style={{color:'#203583',textAlign:'center'}} className='mt-5'><b style={{ fontFamily: 'Roboto, sans-serif' ,marginTop:'55%'}}>Gallery</b></h2>

      </div>

    <Gallerybar />
<div className=''>

    <div className='row mt-5 '>
          <div className='col-sm-3 p-1'>
            <img src={congress3} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress4} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress5} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress11} alt="congress1" className="img-fluid" />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3 p-1'>
            <img src={congress12} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress13} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress14} alt="congress1" className="img-fluid" />
          </div>
          <div className='col-sm-3 p-1'>
            <img src={congress15} alt="congress1" className="img-fluid" />
          </div>
        </div>
        </div>
    </Container>
    </div>
    <Footer />  </>
  )
}

export default Gallery
