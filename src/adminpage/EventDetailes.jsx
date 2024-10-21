import React from 'react';
import { Modal, Button, Form, Card, CardBody } from 'react-bootstrap';
import { IoCloseCircleOutline, IoImageOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import congress16 from '../img/congress16.png';

function EventDetailes({ onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose} animation={false} style={{ width: '100vw', color: '#505050' }}>
            <div className='d-flex justify-content-end m-2'>
                <IoCloseCircleOutline onClick={onClose} style={{ cursor: 'pointer', fontSize: '2rem', textAlign: 'end', color: 'red' }} />
            </div>
            <Modal.Body>
                <Card className='m-5'>
                    <img src={congress16} alt="congress" />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </CardBody>
                </Card>
            </Modal.Body>
        </Modal>
    );
}



export default EventDetailes
