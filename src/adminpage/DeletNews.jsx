import React from 'react';
import { Modal } from 'react-bootstrap';
import { IoCloseCircleOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import { IoWarningOutline } from "react-icons/io5";

function DeletNews({ onClose }) {
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
                <div className='d-flex justify-content-center '>
                    <IoWarningOutline style={{ fontSize: '5rem', color: 'red' }} />
                </div>
                <div className='d-flex justify-content-center '>
                    <h3><b>Delete News ?</b></h3>
                </div>
                <div className='d-flex justify-content-center '>
                    <p>Are you sure you want to delete the news?</p>
                </div>
                <div className='d-flex justify-content-center '>
                    <button type="button" className="btn btn-light mx-3 mt-2" style={{ width: '150px',height:'3rem' }} >
                        Cancel
                    </button>
                    <button type="button" className="btn btn buttones8" style={{ width: '150px',height:'3rem'  }} >
                        Delete
                    </button>
                </div>


            </Modal.Body>
        </Modal>
    );
}





export default DeletNews
