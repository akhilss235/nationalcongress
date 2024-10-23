import React from 'react'
import { Container } from 'react-bootstrap';

import new1 from '../img/new1.png';
import new2 from '../img/new2.png';
import new3 from '../img/new3.png';
import new4 from '../img/new4.png';
import { IoTimeOutline } from "react-icons/io5";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import Contributedetailes from "../article/Contributedetailes";

function News() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Topbar />
        {/* <Petition /> */}
      <div className="row  d-flex flex-column align-items-center justify-content-center">
        <div className="text-center" style={{ marginTop: '10%', color: '#203583' }}>
          <h2><b>News</b></h2>
        </div>

      </div>
      <Container>
        <div className='row mt-5 mb-5'>
          <div className='col-sm-4'>
            <img src={new1} alt="congress1" className="img-fluid" />

          </div>
          <div className='col-sm-8'>
            <h3><b style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              uspendisse</b> </h3>
            <p><IoTimeOutline className='mx-3' style={{fontSize:'1.5rem'}}/>06 June 2024 </p>
            <p style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-sm-4'>
            <img src={new2} alt="congress1" className="img-fluid" />

          </div>
          <div className='col-sm-8'>
            <h3><b style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              uspendisse</b> </h3>
            <p><IoTimeOutline className='mx-3' style={{fontSize:'1.5rem'}}/>06 June 2024 </p>
            <p style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-sm-4'>
            <img src={new3} alt="congress1" className="img-fluid" />

          </div>
          <div className='col-sm-8'>
            <h3><b style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              uspendisse</b> </h3>
            <p><IoTimeOutline className='mx-3' style={{fontSize:'1.5rem'}}/>06 June 2024 </p>
            <p style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-sm-4'>
            <img src={new4} alt="congress1" className="img-fluid" />

          </div>
          <div className='col-sm-8'>
            <h3><b style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              uspendisse</b> </h3>
            <p><IoTimeOutline className='mx-3' style={{fontSize:'1.5rem'}}/>06 June 2024 </p>
            <p style={{color:'#505050'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
          </div>
        </div>

      </Container>

  <Contributedetailes />
      <Footer />
    </div>
  )
}





export default News
