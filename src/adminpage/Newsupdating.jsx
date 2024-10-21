import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoCloseCircleOutline, IoImageOutline } from "react-icons/io5";
import "../Styles/adminstyle.css";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

function Newsupdating({ onClose }) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null 
    });

    const handleEditorChange = (state) => {
        setEditorState(state);
        setFormData({
            ...formData,
            content: JSON.stringify(convertToRaw(state.getCurrentContent())),
        });
    };

    const handleTitleChange = (event) => {
        setFormData({
            ...formData,
            title: event.target.value
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('image', formData.image);

        try {
            const response = await fetch('http://your-backend-api/news/create', {
                method: 'POST',
                body: formDataToSend
            });
            if (response.ok) {
                console.log('News created successfully!');
                onClose(); 
            } else {
               
                console.error('Failed to create news');
            }
        } catch (error) {
            console.error('Error creating news:', error);
        }
    };

    return (
        <Modal show={true} onHide={onClose} animation={false} style={{Width: '100%' }}  
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <div className='d-flex justify-content-between m-2'>
                <h3><b>News Updating</b></h3>
                <IoCloseCircleOutline onClick={onClose} style={{ cursor: 'pointer', fontSize: '2rem', textAlign: 'end', color: 'red' }} />
            </div>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="eventTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Type the title..." onChange={handleTitleChange} />
                    </Form.Group>

                    <div className='row mt-3'>
                        <div className='col'>
                            <Form.Label><b>Content</b></Form.Label>
                            <div className="border p-2" style={{ minHeight: '200px' }}>
                                <Editor
                                    editorState={editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    toolbarClassName="toolbar"
                                    placeholder="Type Something...."
                                    onEditorStateChange={handleEditorChange}
                                />
                            </div>
                        </div>
                    </div>

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
                            <input type="file" id="editFiles" style={{ display: 'none' }} onChange={handleImageChange} />
                        </label>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn mt-3 buttones7 mx-3" style={{ width: '150px' }} onClick={onClose}>
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



export default Newsupdating
