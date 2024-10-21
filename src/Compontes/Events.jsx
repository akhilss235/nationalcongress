import React from 'react'
import congress1 from '../img/Congress1.png';
import TimelineCarousel from "../Page/TimelineCarousel";
import congress3 from '../img/congress3.png';
import congress4 from '../img/congress4.png';
import congress5 from '../img/congress5.png';
import { IoTimeOutline } from "react-icons/io5";
import { Container } from 'react-bootstrap';
import congress11 from '../img/congress11.png';
import congress12 from '../img/congress12.png';
import congress13 from '../img/congress13.png';
import congress14 from '../img/congress14.png';
import congress15 from '../img/congress15.png';
import congress16 from '../img/congress16.png';
import clone from '../img/clone.png';
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Events() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
            <Topbar />
            <Petition />
      <div className="row Background4 d-flex flex-column align-items-center justify-content-center">
        <div className="text-center" style={{ maxHeight: '800px', width: '100%' }}>
          <h2><b>EVENTS</b></h2>
          <p className="mx-auto" style={{ width: '70%' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet diam lectus, sed sodales mauris congue efficitur. Suspendisse lacinia purus nibh, ut porttitor enim consequat dictum. Nullam quis molestie massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in rutrum dolor. Nulla porta lectus in semper volutpat. Mauris in eros vel enim molestie tempus nec vel erat. In a turpis erat. Etiam ut lorem arcu.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5" style={{ marginBottom: '5%' }}>
          <button type="button" className="btn btn-outline-primary buttones4" style={{ width: '15rem', height: '3rem' }}>Join Us </button>
        </div>
      </div>
      <Container>


        <div className='row mb-5' style={{ marginTop: '10%', marginBottom: '5%' }}>
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




        <div className='row mb-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <div className='col-lg-4'>
            <div className="card  EVENTS" >
              <img src={congress11} alt="congress1" className="img-fluid" />

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
              <img src={congress12} alt="congress1" className="img-fluid" />

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
              <img src={congress13} alt="congress1" className="img-fluid" />

              <div className="card-body">
                <p className="card-title"><IoTimeOutline style={{ fontSize: '1.5rem' }} /> 06 June 2024
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5' style={{ marginTop: '5%', marginBottom: '5%' }}>
          <div className='col-lg-4'>
            <div className="card  EVENTS" >
              <img src={congress14} alt="congress1" className="img-fluid" />

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
              <img src={congress15} alt="congress1" className="img-fluid" />

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
              <img src={congress16} alt="congress1" className="img-fluid" />

              <div className="card-body">
                <p className="card-title"><IoTimeOutline style={{ fontSize: '1.5rem' }} /> 06 June 2024
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='row Background3 '>
        <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
          <img src={congress1} alt="congress1" className="congress1 img-fluid d-none d-md-block" style={{ maxHeight: '640px' }} />
          <img src={clone} alt="congress2" className="congress2 img-fluid rounded-circle d-block d-md-none" style={{ maxHeight: '600px' }} />
        </div>
        <div className='col-12 col-md-6  d-flex flex-column align-items-start justify-content-center p-5'>
          <h2 className="text-start boss pt-5 px-3 text-white"><b>Lorem ipsum dolor </b></h2>
          <h2 className="text-start boss mb-3 px-3  text-white"><b>consectetur adipiscing  </b></h2>
          <button type="button" className="btn btn-light mt-5 mx-4 buttones5 px-5 " style={{ width: '15rem', height: '4rem', borderRadius: '2rem' }}> Contribute </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
