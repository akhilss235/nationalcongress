import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { IoCloseCircleOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import axios from 'axios';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Galleryvideo({ onClose }) {
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleUpload = async () => {
        if (!youtubeUrl) {
            alert('Please enter a YouTube URL.');
            return;
        }

        setIsSubmitting(true);

        try {
            await axios.post(`${Baseurl}/upload`, { url: youtubeUrl }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Upload successful!');
            setYoutubeUrl(''); // Clear the input after successful upload
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error uploading URL:', error);
            alert('Upload failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal
            show={true}
            onHide={onClose}
            animation={false}
            style={{ width: '100vw', color: '#505050' }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='d-flex justify-content-between m-2'>
                <IoCloseCircleOutline
                    onClick={onClose}
                    style={{ cursor: 'pointer', fontSize: '2rem', textAlign: 'end', color: 'red' }}
                />
            </div>
            <Modal.Body>
                <div className="row mt-3 d-flex justify-content-center">
                    <Form.Group>
                        <Form.Label>YouTube Link</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter YouTube URL" 
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-end'>
                    <button
                        type="button"
                        className="btn btn mt-3 buttones7 mx-3"
                        style={{ width: '150px' }}
                        onClick={() => {
                            setYoutubeUrl(''); // Clear the input
                        }}
                    >
                        Discard
                    </button>
                    <button
                        type="button"
                        className="btn btn mt-3 buttones6"
                        style={{ width: '150px' }}
                        onClick={handleUpload}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Galleryvideo;
