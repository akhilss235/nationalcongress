import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { IoCloseCircleOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import { TfiGallery } from "react-icons/tfi";
import axios from 'axios';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Galleryphotos({ onClose }) {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImage(imageUrl);
            setFile(selectedFile); // Store the file object
        }
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                await axios.post(`${Baseurl}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Upload successful!');
                setImage(null); // Clear the image after successful upload
                setFile(null);  // Clear the file object
                onClose(); // Close the modal
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Upload failed. Please try again.');
            }
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
                {!image && (
                    <div className="row  d-flex justify-content-center">
                        <label
                            htmlFor="file-upload"
                            className="form-label btn rounded mx-3"
                            style={{
                                width: '90%',
                                height: '100px',
                                color: '#203583',
                                borderColor: '#203583',
                                borderStyle: 'dashed',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <p style={{ color: '#203583', textAlign: 'center', margin: 0 }}>
                                <TfiGallery /><br />Drop your images here, or browse
                            </p>
                            <input
                                id="file-upload"
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                )}
                {image && (
                    <div>
                        <div className="row mt-3 d-flex justify-content-center">
                            <img
                                src={image}
                                alt="Selected"
                                style={{ maxWidth: '50%', maxHeight: '300px' }}
                            />
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button
                                type="button"
                                className="btn btn mt-3 buttones7 mx-3"
                                style={{ width: '150px' }}
                                onClick={() => {
                                    setImage(null); // Clear the image
                                    setFile(null);  // Clear the file object
                                }}
                            >
                                Discard
                            </button>
                            <button
                                type="button"
                                className="btn btn mt-3 buttones6"
                                style={{ width: '150px' }}
                                onClick={handleUpload}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default Galleryphotos;
