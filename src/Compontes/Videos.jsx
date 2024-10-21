import React from 'react'
import Gallerybar from "../Compontes/Gallerybar";
import { Container } from 'react-bootstrap';
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";

function Videos() {
  return (
    <>
      <Topbar />
      <Petition />


      <div className='mt-5' style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Container>
          <h2 style={{ color: '#203583', textAlign: 'center' }} className='mb-5'><b >Gallery</b></h2>

          <Gallerybar />
          <div className='mb-5 mt-5'>
            <div className='row'>
              <div className='col-sm-3'>
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                ></iframe>

              </div>

              <div className='col-sm-3'>
                <iframe
                  src="https://www.youtube.com/embed/FIjt-NDzuOI?si=L77ITFbeLJ5gyncy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                ></iframe>
              </div>
              <div className='col-sm-3'>
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                ></iframe>
              </div>
              <div className='col-sm-3'>
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}



export default Videos
