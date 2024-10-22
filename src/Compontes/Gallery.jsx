import React, { useState } from "react";
import Gallerybar from "../Compontes/Gallerybar";
import { Container, Modal } from "react-bootstrap";
import congress3 from "../img/congress3.png";
import congress4 from "../img/congress4.png";
import congress5 from "../img/congress5.png";
import congress11 from "../img/congress11.png";
import congress12 from "../img/congress12.png";
import congress13 from "../img/congress13.png";
import congress14 from "../img/congress14.png";
import congress15 from "../img/congress15.png";
import Petition from "../Page/Petition";
import Topbar from "../Compontes/Topbar";
import Footer from "../Compontes/Footer";
import { PiLessThanBold } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";

function Gallery() {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    congress3,
    congress4,
    congress5,
    congress11,
    congress12,
    congress13,
    congress14,
    congress15,
  ];

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Topbar />
      <Petition />
      <div
        className="mt-5 mb-5"
        style={{ fontFamily: "Roboto, sans-serif", marginTop: "5%" }}
      >
        <Container>
          <div className="mb-5 mt-5">
            <h2
              style={{
                color: "#203583",
                textAlign: "center",
                visibility: "hidden",
              }}
              className="mt-5"
            >
              <b style={{ fontFamily: "Roboto, sans-serif", marginTop: "55%" }}>
                Gallery
              </b>
            </h2>
            <h2
              style={{ color: "#203583", textAlign: "center" }}
              className="mt-5"
            >
              <b style={{ fontFamily: "Roboto, sans-serif", marginTop: "55%" }}>
                Gallery
              </b>
            </h2>
          </div>

          <Gallerybar />
          <div className="">
            <div className="row mt-5 ">
              {images.map((image, index) => (
                <div
                  className="col-sm-3 p-1"
                  key={index}
                  onClick={() => handleShow(index)}
                >
                  <img
                    src={image}
                    alt={`congress${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Modal
  show={show}
  onHide={handleClose}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Body className="d-flex justify-content-between align-items-center">
  <div className="row">


    <div className="col-1">
      {/* <button
        className="btn btn-secondary"
        aria-label="Previous image"
        disabled={selectedIndex === 0}
      >
        Previous
      </button> */}
<PiLessThanBold          onClick={handlePrev}
/>


    </div>
<div className="col">
<img
      src={images[selectedIndex]}
      alt={`Slide ${selectedIndex + 1} of ${images.length}`}
      className="img-fluid"
      loading="lazy"
      style={{ maxHeight: '500px', objectFit: 'contain' }} // Optional for better image fit
    />
</div>
 

    <div className="col-1">
      {/* <button
        onClick={handleNext}
        className="btn btn-secondary"
        aria-label="Next image"
        disabled={selectedIndex === images.length - 1}
      >
        Next
      </button> */}
      <FaGreaterThan         onClick={handleNext}
 />
    </div>
    </div>
  </Modal.Body>
</Modal>


      <Footer />
    </>
  );
}

export default Gallery;
