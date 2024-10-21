import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoCloseCircleOutline, IoImageOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";

function Achievementsupdating({ onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose} animation={false} style={{ width: '100vw',color:'#505050' }}>
            <div className='d-flex justify-content-between m-2'>
                <h3><b>Achievements Updating</b></h3>
                <IoCloseCircleOutline onClick={onClose} style={{ cursor: 'pointer', fontSize: '2rem', textAlign: 'end',color:'red'  }} />
            </div>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="eventTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Type the title..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="mt-3">Content</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type the content..." />
                    </Form.Group>

                    <div className="row mt-3">
                        <Form.Label>Upload Image</Form.Label>
                        <label htmlFor="editFiles" className="profilesphoto form-label btn rounded mx-3"
                            style={{
                                width: '70%',
                                height: '60px',
                                color: '#203583',
                                borderColor: '#203583',
                                borderStyle: 'dotted'
                            }}>
                            <p style={{ color: '#203583' }} ><IoImageOutline /><br />Upload Image</p>
                            <input type="file" id="editFiles" style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn mt-3 buttones7 mx-3" style={{ width: '150px' }}>
                            Discard
                        </button>
                        <button type="submit" className="btn btn mt-3 buttones6" style={{ width: '150px' }}>
                            Upload
                        </button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}




export default Achievementsupdating
