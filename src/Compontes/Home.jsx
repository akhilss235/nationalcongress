import React from 'react';
import bg1 from '../img/bg1.png';
import congress1 from '../img/Congress1.png';
import congress2 from '../img/congress2.png';
import underline from '../img/underline.png';
import congress3 from '../img/congress3.png';
import congress4 from '../img/congress4.png';
import congress5 from '../img/congress5.png';
import congress6 from '../img/congress6.png';
import clone from '../img/clone.png';
import congress7 from '../img/congress7.png';
import congress8 from '../img/congress8.png';
import congress9 from '../img/congress9.png';
import congress10 from '../img/congress10.png';
import TimelineCarousel from "../Page/TimelineCarousel";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Home.css";
import { IoTimeOutline } from "react-icons/io5";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Home() {
  return (
    <div className="home" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Topbar />
      <Petition />
      <div className='row Background'>
        <div className=' col-md-4 d-flex align-items-center justify-content-center'>
          <img src={congress1} alt="congress1" className="img-fluid" style={{ maxHeight: '1000px' }} />
        </div>
        <div className='col-md-8 d-flex flex-column align-items-start justify-content-center  p-4'>
          <h2 className="text-start boss" style={{ color: '#203583' }}><b>Indian National Congress</b></h2>
          <h2 className="text-start boss mb-5" style={{ color: '#203583' }}><b>Member of Parliament, Tirunelveli Constituency</b></h2>
          <p style={{ width: '80%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor.</p>
          <button type="button" className="btn btn-primary mt-5 buttones" style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}>Join Us</button>
   
        </div>
        
      </div>
      <Container  >
    
        <div className="text-center " style={{ marginTop: '5%', marginBottom: '5%' }}>
          <h2 className='title'><b>LATEST EVENTS</b></h2>
          <img src={underline} alt="underline" className="img-fluid" style={{ width: '17rem', height: '0.3rem' }} />
        </div>

        <div className='row mb-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <div className='col-lg-4'>
            <div className="card  EVENTS" >
              <img src={congress3} alt="congress1" className="img-fluid" />

              <div className="card-body">
                <p className="card-title"><IoTimeOutline style={{ fontSize: '1.5rem' }} /> 06 June 2024
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="card  EVENTS" >
              <img src={congress4} alt="congress1" className="img-fluid" />

              <div className="card-body">
                <p className="card-title"><IoTimeOutline style={{ fontSize: '1.5rem' }} /> 06 June 2024
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="card  EVENTS" >
              <img src={congress5} alt="congress1" className="img-fluid" />

              <div className="card-body">
                <p className="card-title"><IoTimeOutline style={{ fontSize: '1.5rem' }} /> 06 June 2024
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex align-items-start justify-content-center ' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <button type="button" class="btn btn-outline-primary buttones1" style={{ width: '15rem', height: '3rem' }}>View All</button>

        </div>

        <div className='row Background2 mb-5' style={{ borderRadius: '10px' }}>
          <div className=' col-md-6 d-flex align-items-center justify-content-center'>
            <img src={congress2} alt="congress1" className="img-fluid" style={{ maxHeight: '450px' }} />
          </div>
          <div className='col-md-6 d-flex flex-column align-items-start justify-content-center  p-4'>
            <h2 className="text-start boss" style={{ color: 'white' }}><b>Lorem ipsum dolor   </b></h2>
            <h2 className="text-start boss mb-5" style={{ color: 'white' }}><b> consectetur adipiscing   </b></h2>
            <p style={{ width: '80%', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla  euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor.</p>
            <button type="button" className="btn btn-light mt-5 buttones3" style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}>Join Us</button>
          </div>
        </div>
        <div className="text-center " style={{ marginTop: '5%', marginBottom: '5%' }}>
          <h2 className='title'><b>ABOUT </b></h2>
          <img src={underline} alt="underline" className="img-fluid" style={{ width: '10rem', height: '0.3rem' }} />
        </div>
        {/* about  */}
        <div className='row ' style={{ marginTop: '5%', marginBottom: '15%' }} >
          <div className='col-sm-6 '>
            <h2 style={{ color: '#203583' }}><b>Adv. Robert Bruce</b> <span style={{ fontSize: '1.5rem' }}> B.sc., M.L <br /> (Member of Parliament, Tirunelveli Constituency)</span> </h2>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla  euismod convallis nec vitae diam. Maecenas non ultricies nibh Quisque eu ante dolor. Quisque volutpat velit justo, vel varius sem ultricies sed. Vestibulum turpis est, consectetur eu nibh quis, tincidunt accumsan nulla. Donec non convallis mauris. Aenean eget orci maximus, dignissim elit sit amet, semper leo. In quis tincidunt erat, quis maximus ante. Curabitur at ante bibendum, volutpat turpis ut, efficitur neque. Aliquam pretium nulla quis fringilla imperdiet. Duis varius enim orci, euismod consectetur odio malesuada vel. Aenean quam nibh, cursus eu maximus tincidunt, maximus at tortor. Aliquam sagittis aliquam augue ac ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla  euismod convallis nec vitae diam. Maecenas non ultricies nibh Quisque eu ante dolor. Quisque volutpat velit justo, vel

            </p>
            <div className='d-flex align-items-start justify-content-start mt-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
              <button type="button" class="btn btn-outline-primary buttones1" style={{ width: '15rem', height: '3rem' }}>Read More </button>

            </div>
          </div>
          <div className='col-sm-5'>
            <div className='card'>
              <img src={congress6} alt="congress1" className="" />

            </div>
          </div>
        </div>
      </Container>
      {/* about end stage  */}










      <div className='row Background3 mb-5'>
        <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
          <img src={congress1} alt="congress1" className="congress1 img-fluid d-none d-md-block" style={{ maxHeight: '640px' }} />
          <img src={clone} alt="congress2" className="congress2 img-fluid rounded-circle d-block d-md-none" style={{ maxHeight: '600px' }} />
        </div>
        <div className='col-12 col-md-6  d-flex flex-column align-items-start justify-content-center p-5'>
          <h2 className="text-start boss pt-5 px-3 text-white"><b>Lorem ipsum dolor</b></h2>
          <h2 className="text-start boss mb-5 px-3  text-white"><b>consectetur adipiscing</b></h2>
          <p className="text-white px-3 " style={{ width: '80%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor.</p>
          <button type="button" className="btn btn-light mt-5 buttones3 px-5 " style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}>Join Us</button>
        </div>
      </div>

<Container>
  <TimelineCarousel />
</Container>


<Container>
<div className="text-center " style={{ marginTop: '10%', marginBottom: '5%' }}>
          <h2 className='title'><b>ACHIEVEMENTS </b></h2>
          <img src={underline} alt="underline" className="img-fluid" style={{ width: '17rem', height: '0.3rem' }} />
        </div>

        <div className='row mb-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <div className='col-lg-3'>
            <div className="card  EVENTS" >
              <img src={congress7} alt="congress1" className="img-fluid" />

              <div className="card-body" style={{color:'#203583',height:'15rem'}}>
              <h5>Lorem ipsum</h5>
           
                <p className="card-text"style={{fontSize:'10px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.
                  </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="card  EVENTS" >
              <img src={congress8} alt="congress1" className="img-fluid" />

              <div className="card-body"style={{color:'#203583',height:'15rem'}}>
              <h5>Lorem ipsum</h5>
              <p className="card-text"style={{fontSize:'10px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.
</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="card  EVENTS" >
              <img src={congress9} alt="congress1" className="img-fluid" />

              <div className="card-body" style={{color:'#203583',height:'15rem'}}>
              <h5>Lorem ipsum</h5>
              <p className="card-text"style={{fontSize:'10px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.
              </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="card  EVENTS" >
              <img src={congress10} alt="congress1" className="img-fluid" />

              <div className="card-body"style={{color:'#203583',height:'15rem'}}>
            <h5>Lorem ipsum</h5>
            <p className="card-text"style={{fontSize:'10px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.
            </p>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex align-items-start justify-content-center ' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <a href="Achievement">
          <button type="button" class="btn btn-outline-primary buttones2" style={{ width: '15rem', height: '3rem' }}>View All</button>
          </a>
        </div>
</Container>

<Footer />

    </div>
  );
}

export default Home;
