import React, { useState } from 'react';
import Admingallerybar from "../adminnavbar/Admingallerybar";
import { Card, CardBody, Container, Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap
import congress3 from '../img/congress3.png';
import { GoPlus } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import Galleryphotos from "../adminpage/Galleryphotos";

function AdminGallery() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);


  };
  return (
    <div className='mt-4'>
      <Container>
        <div className='d-flex justify-content-between'>
          <div>
            <h2 style={{ color: '#203583', textAlign: 'start' }} className='mb-3'><b>Gallery</b></h2>
          </div>
          <div>
            <button type="button" className="btn btn buttones6 mb-3" style={{ width: 'auto' }} onClick={openForm}>
              <GoPlus /> Upload Photos
            </button>
          </div>
        </div>

        <Admingallerybar />

        <Row className='mt-5'>
          <Col md={4} sm={6} xs={12}>
            <Card>
              <Card.Img variant="top" src={congress3} />
              <CardBody>
                <Card.Title style={{ textAlign: 'center', color: 'red' }}>
                  <RiDeleteBin6Line /> Delete
                </Card.Title>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {showForm && <Galleryphotos onClose={closeForm} />}

    </div>
  );
}

export default AdminGallery;
