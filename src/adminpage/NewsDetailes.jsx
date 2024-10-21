import React from 'react';
import { Modal, Button, Form, Card, CardBody } from 'react-bootstrap';
import { IoCloseCircleOutline, IoImageOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import congress16 from '../img/congress16.png';

function NewsDetailes({ onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose} animation={false} style={{ Width: '100%' }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='d-flex justify-content-end m-2'>
                <IoCloseCircleOutline onClick={onClose} style={{ cursor: 'pointer', fontSize: '2rem', textAlign: 'end', color: 'red' }} />
            </div>
            <Modal.Body>
                <Card className='m-5'>
                    <img src={congress16} alt="congress" />
                    <CardBody>
                        <h3 className='mt-2 mb-2'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel arcu vitae nulla euismod convallis nec vitae diam. Maecenas non ultricies nibh. Quisque eu ante dolor. Fusce molestie orci leo, quis consectetur magna lobortis ut. Donec sagittis, tellus non feugiat finibus, nisi massa tempus ex, et ultrices nibh justo elementum lectus. Ut pulvinar ligula a pharetra placerat. Maecenas sed purus id dolor sodales mattis.</p>
                    </CardBody>
                </Card>
            </Modal.Body>
        </Modal>
    );
}




export default NewsDetailes
